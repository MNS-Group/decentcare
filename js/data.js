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
    phone: "+91 84988 33736",
    phoneRaw: "+918498833736",
    whatsappLink: "https://wa.me/918498833736",
    email: "decentcareworld@gmail.com",
    website: "www.decentcare.in",
    youtube: "https://youtube.com/@decentcarefurniture",
    instagram: "https://instagram.com/decentcarefurniture",
    address: "Hyderabad, Telangana, India"
  },

  teakwood: {
    origin: "Chhattisgarh and Maharashtra",
    license: "Permitted by Forest Department",
    text: "Special Supreme TEAKWOOD Furniture sourced from elite reserves. Highly durable, natural golden grains, and immune to moisture & termites.",
    items: [
      "Teakwood Bed Sets",
      "Teakwood Dining Tables",
      "Teakwood Sofa Sets",
      "Teakwood Dressing Tables",
      "Teakwood Diwans"
    ]
  },

  services: [
    {
      id: "mesh-door",
      title: "Mesh Doors & Windows",
      description: "Mesh door and window installation at your doorstep (in Hyderabad).",
      icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M4 9h16M4 15h16M10 3v18M16 3v18"/></svg>',
      image: "images/interior/mesh-door-01.webp"
    },
    {
      id: "cloth-hangers",
      title: "Stainless Steel Cloth Hangers",
      description: "Stainless steel cloth hangers installed at your doorstep (in Hyderabad).",
      icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8V6.5A2.5 2.5 0 1 0 9.5 4"/><path d="M12 8l9 7H3l9-7z"/></svg>',
      image: "images/interior/cloth-hangers-01.webp"
    },
    {
      id: "interior-works",
      title: "Complete Interior Works",
      description: "Complete interior works with the latest technology at your doorstep.",
      icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6"/></svg>',
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
        "Modular, L-shape, U-shape and 3+1+1 configurations, fully customized",
        "Premium solid wood heavy framing",
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
      subtitle: "50+ Collections",
      image: "images/dressing/dressing-table-led-01.webp",
      description: "Dressing tables with a mirror, open shelves, a drawer and cupboards, made to your space. LED mirror designs available.",
      features: [
        "50+ collections",
        "LED mirror designs available",
        "Mirror, open shelves, drawer and cupboards (as shown)",
        "Fully customized to your space"
      ],
      newlyLaunched: false,
      gallery: [
        "images/dressing/dressing-table-led-01.webp"
      ]
    },
    {
      id: "deewan",
      title: "Premium Teakwood Deewan",
      subtitle: "Carved Teakwood",
      image: "images/deewan/premium-teakwood-deewan-01.webp",
      description: "A premium teakwood deewan with carved detailing, floral upholstery and a matching bolster cushion, made to your size.",
      features: [
        "Teakwood frame with carved detailing",
        "Upholstered seat and back with bolster cushion",
        "Fully customized to your space"
      ],
      newlyLaunched: false,
      gallery: [
        "images/deewan/premium-teakwood-deewan-01.webp"
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
      title: "Footwear Cabinets",
      subtitle: "With Extra Cupboards",
      image: "images/shoe-rack/footwear-cabinet-01.webp",
      description: "Footwear cabinets with extra cupboards for your entryway. Ventilated doors, lockable cupboards and an optional cushioned seat unit, made to your size.",
      features: [
        "Footwear cabinet with extra cupboards",
        "Ventilation grilles on the doors for airflow",
        "Lockable doors",
        "Cushioned seat unit with storage cupboard (as shown)",
        "Fully customized to your space"
      ],
      newlyLaunched: false,
      gallery: [
        "images/shoe-rack/footwear-cabinet-01.webp",
        "images/shoe-rack/shoe-rack-cupboard-01.webp",
        "images/shoe-rack/shoe-rack-design-01.webp"
      ]
    },
    {
      id: "gas-cabinets",
      title: "Gas Cylinder Cabinets",
      subtitle: "Ventilated & Lockable",
      image: "images/gas-cabinet/gas-cylinder-cabinet-01.webp",
      description: "A wooden cabinet that keeps your gas cylinder out of sight. Double doors with a lock and a ventilation grille on the side, made to your size.",
      features: [
        "Double doors with lock",
        "Ventilation grille on the side panel",
        "Raised on legs",
        "Fully customized to your space"
      ],
      newlyLaunched: false,
      gallery: [
        "images/gas-cabinet/gas-cylinder-cabinet-01.webp"
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
  ]
};

// Make it available on window for direct access
window.DECENT_CARE_DATA = DECENT_CARE_DATA;
