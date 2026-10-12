document.addEventListener('DOMContentLoaded', () => {
  // 1. Centralized Data Access
  const DATA = window.DECENT_CARE_DATA;
  if (!DATA) {
    console.error("Decent Care Business Data (data.js) is missing or failed to load.");
    return;
  }

  // 2. DOM Elements Cache
  const preloader = document.getElementById('preloader');
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollTopFloat = document.getElementById('scrollTopBtn');
  
  // Containers
  const collectionsContainer = document.getElementById('collectionsGrid');
  const servicesContainer = document.getElementById('servicesGrid');
  const teakwoodListContainer = document.getElementById('teakwoodList');
  const teakwoodOriginText = document.getElementById('teakwoodOriginText');
  
  // Modals
  const detailsModal = document.getElementById('detailsModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  
  // Forms
  const contactForm = document.getElementById('contactForm');
  const homeVisitForm = document.getElementById('homeVisitForm');

  // ==========================================
  // A. PRELOADER & SCROLL CONTROLS
  // ==========================================
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader?.classList.add('hidden');
      triggerScrollReveal();
    }, 700);
  });

  // Shrink Header on Scroll & Show Scroll Top Button
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    header?.classList.toggle('scrolled', current > 50);
    scrollTopFloat?.classList.toggle('visible', current > 500);
    lastScroll = current;
  }, { passive: true });

  // Scroll to Top action
  scrollTopFloat?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Smooth Anchored Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const hrefAttr = anchor.getAttribute('href');
      if (hrefAttr === '#' || hrefAttr === '') return;
      const target = document.querySelector(hrefAttr);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ==========================================
  // B. NAVIGATION MOBILE DRAWER
  // ==========================================
  function toggleMenu() {
    hamburger?.classList.toggle('active');
    nav?.classList.toggle('open');
    document.body.style.overflow = nav?.classList.contains('open') ? 'hidden' : '';
  }

  hamburger?.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav?.classList.contains('open')) toggleMenu();
    });
  });

  // Dynamic Nav Link Active Highlights based on Viewport Section
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );

  document.querySelectorAll('section[id]').forEach(section => sectionObserver.observe(section));

  // ==========================================
  // C. DYNAMIC RENDER LOGIC FROM JSON STORE
  // ==========================================

  // Render All Collections
  function renderAllCollections() {
    if (!collectionsContainer) return;
    collectionsContainer.innerHTML = '';
    
    DATA.collections.forEach(item => {
      const card = createCollectionCard(item, false);
      collectionsContainer.appendChild(card);
    });
  }

  // Helper Card Builder for Collections
  function createCollectionCard(item, isSpotlight) {
    const card = document.createElement('article');
    card.className = 'collection-card glass-panel reveal-text';
    card.setAttribute('data-id', item.id);
    
    card.innerHTML = `
      <div class="card-img">
        <img src="${item.image.replace('.webp', '-sm.webp')}" alt="${item.title} - ${item.subtitle}" loading="lazy" decoding="async" width="640" height="480">
      </div>
      <div class="card-body">
        <div class="card-header-line">
          <h3>${item.title}</h3>
          ${isSpotlight ? '<span class="card-tag">New Release</span>' : ''}
        </div>
        <p>${item.description.substring(0, 85)}...</p>
        <span class="card-btn">Explore Details</span>
      </div>
    `;
    
    const img = card.querySelector('.card-img img');
    if (img) {
      img.onerror = () => {
        img.parentElement.classList.add('img-missing');
        img.style.display = 'none';
      };
    }
    
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${item.title} - ${item.subtitle}`);
    card.addEventListener('click', () => {
      navigateToCollection(item.id);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navigateToCollection(item.id);
      }
    });
    
    return card;
  }

  // Render Teakwood details
  function renderTeakwood() {
    if (teakwoodOriginText) {
      teakwoodOriginText.innerHTML = `Sourced from the premium forest reserves of <strong>${DATA.teakwood.origin}</strong> — fully authorized and <strong>${DATA.teakwood.license}</strong>.`;
    }
    if (!teakwoodListContainer) return;
    teakwoodListContainer.innerHTML = '';
    
    DATA.teakwood.items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'reveal-text';
      li.textContent = item;
      teakwoodListContainer.appendChild(li);
    });
  }

  // Render Value Doorstep Services
  function renderServices() {
    if (!servicesContainer) return;
    servicesContainer.innerHTML = '';
    
    DATA.services.forEach(service => {
      const card = document.createElement('div');
      card.className = 'service-card glass-panel reveal-text';
      card.innerHTML = `
        <div class="service-icon-box">
          <span>${service.icon}</span>
        </div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      `;
      servicesContainer.appendChild(card);
    });
  }

  // Initial Data Mapping
  renderAllCollections();
  renderTeakwood();
  renderServices();

  // ==========================================
  // D. DETAILED COLLECTION INTERACTIVE MODAL
  // ==========================================
  let activeGalleryImages = [];
  let currentImageIdx = 0;

  function openCollectionModal(item) {
    if (!detailsModal) return;
    
    const badge = detailsModal.querySelector('.modal-badge');
    const title = detailsModal.querySelector('.modal-title');
    const desc = detailsModal.querySelector('.modal-desc');
    const featuresList = detailsModal.querySelector('.modal-features-list ul');
    const mainImg = detailsModal.querySelector('.modal-main-img');
    const thumbsRow = detailsModal.querySelector('.modal-thumbs-row');
    const whatsappBtn = detailsModal.querySelector('.modal-whatsapp-enquiry');
    
    // Set text contents
    if (badge) badge.textContent = item.subtitle;
    if (title) title.textContent = item.title;
    if (desc) desc.textContent = item.description;
    
    // Set Features List
    if (featuresList) {
      featuresList.innerHTML = '';
      item.features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        featuresList.appendChild(li);
      });
    }
    
    // Manage Gallery Images
    activeGalleryImages = item.gallery && item.gallery.length > 0 ? item.gallery : [item.image];
    currentImageIdx = 0;
    
    // Update main image and thumbnails
    if (mainImg) {
      mainImg.src = activeGalleryImages[currentImageIdx];
      mainImg.alt = item.title;
      mainImg.onerror = () => {
        mainImg.src = 'images/hero/hero-banner.webp'; // elegant local fallback
      };
    }
    
    if (thumbsRow) {
      thumbsRow.innerHTML = '';
      if (activeGalleryImages.length > 1) {
        activeGalleryImages.forEach((imgSrc, idx) => {
          const thumb = document.createElement('img');
          thumb.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
          thumb.src = imgSrc;
          thumb.alt = `${item.title} gallery thumbnail ${idx + 1}`;
          thumb.onerror = () => {
            thumb.style.display = 'none';
          };
          thumb.addEventListener('click', () => {
            currentImageIdx = idx;
            updateModalMainImage(mainImg, thumbsRow);
          });
          thumbsRow.appendChild(thumb);
        });
      }
    }
    
    // Dynamic Pre-filled WhatsApp CTA Button
    if (whatsappBtn) {
      const textMessage = `Hi Decent Care! I am very interested in your premium collection and want to learn more details about:%0A%0A✦ *Collection*: ${encodeURIComponent(item.title)}%0A✦ *Features*: ${encodeURIComponent(item.subtitle)}%0A%0APlease let me know the custom order specifications and details!`;
      whatsappBtn.href = `${DATA.contact.whatsappLink}?text=${textMessage}`;
    }
    
    // Toggle modal show class and block page scroll
    detailsModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function updateModalMainImage(mainImg, thumbsRow) {
    if (mainImg) mainImg.src = activeGalleryImages[currentImageIdx];
    
    const thumbs = thumbsRow.querySelectorAll('.thumb-item');
    thumbs.forEach((thumb, idx) => {
      thumb.classList.toggle('active', idx === currentImageIdx);
    });
  }

  function closeModal() {
    detailsModal?.classList.remove('open');
    document.body.style.overflow = '';
    
    // Clear URL parameters elegantly without page reload
    const currentUrl = window.location.href.split('?')[0].split('#')[0];
    window.history.pushState({ path: currentUrl }, '', currentUrl);
  }

  modalCloseBtn?.addEventListener('click', closeModal);
  
  // Close modal when clicking on dark backdrop overlay
  detailsModal?.addEventListener('click', e => {
    if (e.target === detailsModal) closeModal();
  });

  // ==========================================
  // E. SEO URL REDIRECTION & LINK ROUTING
  // ==========================================
  
  const collectionPages = {
    "sofa-sets": "sofas.html",
    "recliners": "sofas.html",
    "teapoys": "teapoys.html",
    "bed-sets": "beds.html",
    "headboards": "beds.html",
    "dining-tables": "dining.html",
    "dressing-tables": "dressing.html",
    "deewan": "deewan.html",
    "office-furniture": "office.html",
    "shoe-racks": "shoe-racks.html",
    "gas-cabinets": "gas-cabinets.html",
    "curtains": "curtains.html"
  };

  // Deep-link dynamic triggers on URL mapping
  function navigateToCollection(collectionId) {
    const page = collectionPages[collectionId];
    if (page) {
      window.location.href = page;
    }
  }

  // Parse URL search parameters on first load or direct navigation
  function checkUrlRedirects() {
    const urlParams = new URLSearchParams(window.location.search);
    const collectionId = urlParams.get('collection');
    
    if (collectionId) {
      const page = collectionPages[collectionId];
      if (page) {
        window.location.href = page;
      }
    }
  }
  
  // Check URL on load
  checkUrlRedirects();
  
  // Backwards compatible popstate (though modals are no longer used on home page)
  window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const collectionId = urlParams.get('collection');
    if (collectionId) {
      const page = collectionPages[collectionId];
      if (page) window.location.href = page;
    }
  });

  // ==========================================
  // F. WHATSAPP MESSAGE COMPILER FOR FORMS
  // ==========================================
  
  // Handle Home Visit Booking form submit
  homeVisitForm?.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = homeVisitForm.querySelector('#visitName')?.value || '';
    const phone = homeVisitForm.querySelector('#visitPhone')?.value || '';
    const address = homeVisitForm.querySelector('#visitAddress')?.value || '';
    const category = homeVisitForm.querySelector('#visitCategory')?.value || '';
    const notes = homeVisitForm.querySelector('#visitNotes')?.value || '';
    
    const msg = `✦ *BOOK MY HOME VISIT NOW* ✦%0A%0A` +
                `• *Name*: ${encodeURIComponent(name)}%0A` +
                `• *Phone*: ${encodeURIComponent(phone)}%0A` +
                `• *Home Address*: ${encodeURIComponent(address)}%0A` +
                `• *Interest Area*: ${encodeURIComponent(category)}%0A` +
                `• *Special Request*: ${encodeURIComponent(notes)}`;
                
    window.open(`${DATA.contact.whatsappLink}?text=${msg}`, '_blank');
  });

  // Handle Contact General form submit
  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = contactForm.querySelector('#contactName')?.value || '';
    const phone = contactForm.querySelector('#contactPhone')?.value || '';
    const interest = contactForm.querySelector('#contactInterest')?.value || '';
    const notes = contactForm.querySelector('#contactMessage')?.value || '';
    
    const msg = `✦ *GENERAL CLIENT ENQUIRY* ✦%0A%0A` +
                `• *Name*: ${encodeURIComponent(name)}%0A` +
                `• *Phone*: ${encodeURIComponent(phone)}%0A` +
                `• *Interested In*: ${encodeURIComponent(interest)}%0A` +
                `• *Message Details*: ${encodeURIComponent(notes)}`;
                
    window.open(`${DATA.contact.whatsappLink}?text=${msg}`, '_blank');
  });

  // ==========================================
  // G. PREMIUM SCROLL-TRIGGERED TEXT ANIMATIONS
  // ==========================================
  function triggerScrollReveal() {
    const revealItems = document.querySelectorAll('.reveal-text');
    const scrollObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            scrollObserver.unobserve(entry.target); // Reveal once
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    revealItems.forEach(item => scrollObserver.observe(item));
  }
});
