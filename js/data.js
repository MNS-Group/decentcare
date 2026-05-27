/**
 * Decent Care Website - Dynamic Catalog & Business Data
 * A Unit of MNS Group
 */

const DECENT_CARE_DATA = {
  branding: {
    name: "DECENT CARE",
    sub: "FURNITURE | INTERIOR | CURTAINS",
    group: "A unit of MNS Group",
    tagline: "ENHANCE YOUR LUXURIOUS LIVING WITH DECENT CARE",
    motto: "TRUST | QUALITY | SERVICE",
    disclaimer: {
      heading: "We build dreams, not just furniture.",
      text: "We are professionals & experts in Fully Customized Furniture. You Dream it - We Deliver it. Please excuse us because we don't give cheap offer prices... Because We don't compromise with Quality."
    }
  },
  
  contact: {
    phone: "+91 849 8833 736",
    phoneRaw: "+918498833736",
    whatsappLink: "https://wa.me/918498833736",
    email: "decentcareworld@gmail.com",
    website: "www.decentcare.in",
    youtube: "https://youtube.com/@decentcareworld?si=XTwAGImBuX2Zoiq3",
    instagram: "https://www.instagram.com/decentcarefurniture?igsh=MXQwNms1bzM4Y2w5eQ==",
    address: "Hyderabad, Telangana, India"
  },

  teakwood: {
    origin: "Chhattisgarh and Maharashtra",
    license: "Permitted by Forest Department",
    text: "Special Supreme TEAKWOOD Furniture sourced from elite reserves. Highly durable, natural golden grains, and immune to moisture & termites.",
    items: [
      "Teakwood Bed Sets",
      "Dining Tables",
      "Classic Sofa Sets",
      "Luxury Dressing Tables",
      "Grand Deewans",
      "Durable Shoe Racks"
    ]
  },

  services: [
    {
      id: "mesh-door",
      title: "Mesh Door",
      description: "Heavy-duty magnetic and slider mesh door installations tailored directly at your doorstep.",
      icon: "🚪",
      image: "images/interior/mesh-door-01.webp"
    },
    {
      id: "gas-stove",
      title: "Gas Stove & Chimney",
      description: "Professional multi-burner gas stove and modern exhaust chimney installation, maintenance, & repair.",
      icon: "🔥",
      image: "images/interior/gas-stove-01.webp"
    },
    {
      id: "cloth-hangers",
      title: "Cloth Hangers",
      description: "Ceiling-pulley operated anti-rust stainless steel cloth drying hangers perfectly suited for balconies.",
      icon: "🧺",
      image: "images/interior/cloth-hangers-01.webp"
    },
    {
      id: "interior-works",
      title: "Complete Interior Works",
      description: "Full-scale luxury home interior modeling, modular kitchen layouts, false ceilings, and smart space planning.",
      icon: "🏛️",
      image: "images/interior/interior-work-01.webp"
    }
  ],
  
  collections: [
    {
      id: "sofa-sets",
      title: "Premium Sofa Sets",
      subtitle: "100+ Designs Collections",
      image: "images/sofas/premium-sofa-set-01.webp",
      description: "Luxurious handcrafted sofa sets customized to your precise living room blueprints. Choose from premium velvets, linen, or high-end Italian leatherette.",
      features: [
        "100+ bespoke contemporary & classic designs",
        "Fully customizable configurations (L-shape, 3+2+1, U-shape)",
        "Premium solid wood heavy framing with structural lifetime guarantee",
        "High-density 40-Recron cushion foam padding",
        "Gold-plated or solid oak aesthetic legs"
      ],
      newlyLaunched: true,
      gallery: [
        "images/sofas/premium-sofa-set-01.webp",
        "images/sofas/premium-sofa-set-02.webp",
        "images/sofas/premium-sofa-set-03.webp"
      ]
    },
    {
      id: "recliners",
      title: "Recliner Sofas",
      subtitle: "360° Mechanism",
      image: "images/sofas/recliner-sofa-01.webp",
      description: "Elite ergonomic comfort at home. Built with smooth 360-degree swivel bases, comforting glider kinetics, and optional heavy-duty motorizations.",
      features: [
        "Heavy-duty alloy mechanism with 360° swivel capability",
        "Smooth multi-angle manual or electric power recline",
        "Plush integrated lumbar, headrest, and calf padding",
        "Premium stain-resistant breathable air-leather upholstery",
        "Perfect for private dens or premium home theaters"
      ],
      newlyLaunched: true,
      gallery: [
        "images/sofas/recliner-sofa-01.webp",
        "images/sofas/recliner-sofa-02.webp",
        "images/sofas/recliner-sofa-03.webp"
      ]
    },
    {
      id: "teapoys",
      title: "Modern Teapoy",
      subtitle: "Velvet & Wooden",
      image: "images/teapoy/modern-teapoy-velvet-01.webp",
      description: "Exquisite centerpiece tables that elevate standard lounge areas. Meticulously upholstered in plush velvet bases or crafted with clean teakwood textures.",
      features: [
        "Modern gold steel base accents with premium velvet paneling",
        "Finest Teakwood carvings for classic aesthetics",
        "Toughened float glass or imported marble tops",
        "Scratch-resistant wood finishes",
        "Dual-level nested space architectures"
      ],
      newlyLaunched: true,
      gallery: [
        "images/teapoy/modern-teapoy-velvet-01.webp",
        "images/teapoy/modern-teapoy-wooden-01.webp",
        "images/teapoy/modern-teapoy-02.webp"
      ]
    },
    {
      id: "bed-sets",
      title: "Luxury Bed Sets",
      subtitle: "With Soft Cushions",
      image: "images/beds/luxury-bed-set-01.webp",
      description: "Sleep like royalty in a sanctuary crafted just for you. Completely upholstered king and queen-size bed frames designed with cozy headboard padding.",
      features: [
        "Thick dense back-cushioning for comfortable reading posture",
        "Custom storage spaces featuring smooth gas-spring hydraulic lifts",
        "Engineered zero-squeak frame joining systems",
        "Bespoke mattress slot adjustments",
        "Hundreds of rich color fabrics to pick from"
      ],
      newlyLaunched: false,
      gallery: [
        "images/beds/luxury-bed-set-01.webp",
        "images/beds/luxury-bed-set-02.webp",
        "images/beds/luxury-bed-set-03.webp"
      ]
    },
    {
      id: "headboards",
      title: "Designer Headboards",
      subtitle: "50+ Designs Available",
      image: "images/beds/headboard-01.webp",
      description: "Transform your master bedroom into a 5-star hotel room. We manufacture custom geometric, vertical-channel, and Chesterfield-tufted panels.",
      features: [
        "50+ Modern geometric, linear, and classical design templates",
        "Floor-to-ceiling customized accent wall installations",
        "Integrated warm glow ambient LED strip panels and power sockets",
        "Plush sponge padding wrapped in velvet or breathable linens",
        "High acoustic soundproofing performance"
      ],
      newlyLaunched: false,
      gallery: [
        "images/beds/headboard-01.webp",
        "images/beds/headboard-02.webp",
        "images/beds/headboard-03.webp"
      ]
    },
    {
      id: "dining-tables",
      title: "Dining Tables",
      subtitle: "Premium Marble Tops",
      image: "images/dining/premium-marble-dining-table-01.webp",
      description: "Epicurean luxury in your home. Beautiful thick slab marble tables with crystal-clear resin coatings, supported by gold electroplated steel structures.",
      features: [
        "Handselected premium marble with custom grain flow options",
        "Seamless high-gloss protective sealant (anti-staining layer)",
        "Gold, rose-gold, and titanium physical vapor deposition (PVD) steel frames",
        "Chic, cushioned ergonomic high-back chairs",
        "Bespoke table sizes (4, 6, 8, 10 or 12 chairs)"
      ],
      newlyLaunched: true,
      gallery: [
        "images/dining/premium-marble-dining-table-01.webp",
        "images/dining/premium-marble-dining-table-02.webp",
        "images/dining/teakwood-dining-table-01.webp"
      ]
    },
    {
      id: "dressing-tables",
      title: "Dressing Tables",
      subtitle: "With Stool & LED Mirror",
      image: "images/dressing/dressing-table-led-01.webp",
      description: "Your personalized preparation stage. Sleek wooden dressing dressers complete with matching stools, ample cosmetic storage, and touch-sensing LED mirrors.",
      features: [
        "Touch mirror featuring variable warm, neutral, and cold LED colors",
        "Sliding hidden jewelry cabinets behind dynamic vanity doors",
        "Custom velvet-lined organizer slot compartments",
        "Comfortable matching gold-base vanity stool included",
        "Compact floating and space-conscious premium styles"
      ],
      newlyLaunched: false,
      gallery: [
        "images/dressing/dressing-table-led-01.webp",
        "images/dressing/dressing-table-led-02.webp",
        "images/dressing/dressing-table-with-stool-01.webp"
      ]
    },
    {
      id: "deewan",
      title: "Bespoke Deewan",
      subtitle: "With Storage",
      image: "images/deewan/deewan-with-storage-01.webp",
      description: "Grace your hallway or guest lounge with heritage Indian daybeds. Offers full length deep box storage for linens and blankets.",
      features: [
        "Exemplary Indian heritage daybed layout styling",
        "Full-box hydraulic compartments or elegant double drawer options",
        "High-resiliency foam mattresses for dual seating & bedding comfort",
        "Includes standard bolsters and matching throw cushions",
        "Handcrafted in robust hardwoods or premium laminates"
      ],
      newlyLaunched: false,
      gallery: [
        "images/deewan/deewan-with-storage-01.webp",
        "images/deewan/deewan-design-01.webp",
        "images/deewan/deewan-design-02.webp"
      ]
    },
    {
      id: "pooja-mandir",
      title: "Pooja Mandir",
      subtitle: "With Gopuram carvings",
      image: "images/pooja/pooja-mandir-gopuram-01.webp",
      description: "A sacred sanctuary handcrafted with love and utmost spiritual respect. Built in heavy-grade Teakwood with exquisite floral & deity engravings.",
      features: [
        "Stately hand-sculpted Gopuram domes (traditional temple style)",
        "Premium drawer slides and pull-out trays for incense & lights",
        "Concealed wiring paths with integrated focus downlights",
        "Heavy bells made of pure hand-polished solid brass",
        "Spacious pedestal boxes for spiritual books & articles"
      ],
      newlyLaunched: true,
      gallery: [
        "images/pooja/pooja-mandir-gopuram-01.webp",
        "images/pooja/pooja-mandir-01.webp",
        "images/pooja/pooja-mandir-02.webp"
      ]
    },
    {
      id: "office-furniture",
      title: "Office Furniture",
      subtitle: "Tables & Revolving Chairs",
      image: "images/office/office-table-01.webp",
      description: "Create an inspiring workspace that fuels execution. Executive heavy wood desks paired with advanced ergonomic revolving mesh task chairs.",
      features: [
        "Solid timber executive desk structures with high weight capability",
        "Anti-slip textured matte desk treatments",
        "Smart mesh revolving chairs featuring 3D lumber dials and headrests",
        "Pneumatic cylinder height triggers and lock tilt tensions",
        "Modern modular designs with drawer file lock cabinets"
      ],
      newlyLaunched: false,
      gallery: [
        "images/office/office-table-01.webp",
        "images/office/revolving-chair-01.webp",
        "images/office/office-table-chair-set-01.webp"
      ]
    },
    {
      id: "shoe-racks",
      title: "Shoe Racks",
      subtitle: "With Ventilated Cupboards",
      image: "images/shoe-rack/shoe-rack-cupboard-01.webp",
      description: "Elegant storage wardrobes that prevent entrance clutter. Includes ventilated louvers or decorative grilles to ensure steady interior airflow.",
      features: [
        "Ventilated door design prevents interior humidity and odors",
        "Height-adjustable shelving supports high boots and flat sneakers",
        "Top-grain leather upholstered seat cushioning for ease of wear",
        "Small integrated drawers for keys, shoe horns, and polish kits",
        "Wall-anchored safety mechanisms with minimal foot space footprints"
      ],
      newlyLaunched: false,
      gallery: [
        "images/shoe-rack/shoe-rack-cupboard-01.webp",
        "images/shoe-rack/shoe-rack-design-01.webp",
        "images/shoe-rack/shoe-rack-design-02.webp"
      ]
    },
    {
      id: "curtains",
      title: "Premium Curtains",
      subtitle: "Premium Fabric Collection",
      image: "images/curtains/luxury-curtain-01.webp",
      description: "Elegant, sweeping drapes designed to filter light gorgeously. Our curtain range features imported heavy fabrics, double-pleat pinch work, and smart motorized track options.",
      features: [
        "Bespoke height and pinch-pleat configuration tailoring",
        "Blackout, semi-sheer, and premium velvet linen materials",
        "Custom high-grade silent tracks and aesthetic grommets",
        "Stain-resistant fiber properties",
        "Compatible with remote or app-controlled motorized curtain tracks"
      ],
      newlyLaunched: false,
      gallery: [
        "images/curtains/luxury-curtain-01.webp",
        "images/curtains/curtain-interior-01.webp",
        "images/curtains/curtain-interior-02.webp"
      ]
    }
  ],

  testimonials: [
    {
      stars: 5,
      text: "Exceptional quality! The supreme teakwood dining set is absolutely gorgeous and stands as the heart of our dining area. Highly recommend Decent Care for premium customized furniture.",
      author: "Rajesh K.",
      location: "Hyderabad"
    },
    {
      stars: 5,
      text: "We got our complete home interior done. Professional design team, exact on-time delivery, and the finish is premium and ultra-luxury. The smart modular kitchen works like a charm.",
      author: "Priya S.",
      location: "Secunderabad"
    },
    {
      stars: 5,
      text: "The custom L-shaped sofa set is incredibly comfortable and matches our living room vibes perfectly. The 360-swivel recliners are an absolute crowd-favorite. Top class!",
      author: "Anil M.",
      location: "Hyderabad"
    }
  ]
};

// Make it available on window for direct access
window.DECENT_CARE_DATA = DECENT_CARE_DATA;
