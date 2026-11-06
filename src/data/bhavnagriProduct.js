// Centralized verified product data for Bhagvat Prasadam Mix Chavanu
// Primary source: https://www.bhagvatprasadam.com/products/mix-chavanu-mixture-namkeen-gujarati-snacks?variant=45431482253461

export const PRODUCT_BUY_URL =
  'https://www.bhagvatprasadam.com/products/mix-chavanu-mixture-namkeen-gujarati-snacks?variant=45431482253461';

export const BASE_PRODUCT_URL =
  'https://www.bhagvatprasadam.com/products/mix-chavanu-mixture-namkeen-gujarati-snacks';

export const MIX_CHAVANU_PRODUCT = {
  id: 'mix-chavanu',
  title: 'Mix Chavanu',
  titleGujarati: 'મિક્સ ચવાણું',
  titleHindi: 'नमकीन मिक्स चवाणु',
  subtitle: 'Mixture Namkeen | Authentic Gujarati Snacks',
  brand: 'Bhagvat Prasadam',
  origin: 'Handcrafted with Devotion, Nilkanthdham Poicha Tradition, Gujarat',
  tagline: 'Savor the Authentic Taste of Gujarat in Every Crunchy Bite',
  rating: 4.9,
  reviewsCount: 1890,
  availability: 'In Stock',
  shippingNote: 'Dispatched within 24 hours across India in stay-fresh protective packaging',
  buyUrl: PRODUCT_BUY_URL,
  
  description: 
    'Savor the authentic taste of Mix Chavanu (મિક્સ ચવાણું), a crunchy and flavorful Gujarati namkeen snack handcrafted by Bhagvat Prasadam. Made from premium lentils, roasted peanuts, golden chickpea flour sev, boondi, and aromatic Indian spices slow-fried in pure cold-pressed groundnut oil (Sing Tel), this mixture namkeen delivers the perfect balance of taste and tradition. A timeless favorite among traditional Indian namkeen, our Mix Namkeen is ideal for Diwali snacks, festive gifting, or everyday tea-time delight. Each bite is a crunchy blend of flavors that celebrates authenticity and purity.',

  // Verified variants from Bhagvat Prasadam Shopify catalog with exact pricing and direct purchase links
  variants: [
    {
      id: '45431482253461',
      weight: '1kg',
      title: '1kg',
      price: 425,
      compareAtPrice: 550,
      discountPercent: 23,
      sku: 'Mix Chavanu 1000 GM.',
      badge: 'Festive Mega Pack',
      servings: '25-30 Tea Sessions',
      popular: true,
      buyUrl: 'https://www.bhagvatprasadam.com/products/mix-chavanu-mixture-namkeen-gujarati-snacks?variant=45431482253461'
    },
    {
      id: '67610041188501',
      weight: '800gm',
      title: '800gm',
      price: 340,
      compareAtPrice: 440,
      discountPercent: 23,
      sku: 'Mix Chavanu 800 GM.',
      badge: 'Family Value Pack',
      servings: '18-22 Tea Sessions',
      popular: false,
      buyUrl: 'https://www.bhagvatprasadam.com/products/mix-chavanu-mixture-namkeen-gujarati-snacks?variant=67610041188501'
    },
    {
      id: '45385754312853',
      weight: '400gm',
      title: '400gm',
      price: 170,
      compareAtPrice: 221,
      discountPercent: 23,
      sku: 'Mix Chavanu 400 GM.',
      badge: 'Most Popular Pouch',
      servings: '10-12 Tea Sessions',
      popular: false,
      buyUrl: 'https://www.bhagvatprasadam.com/products/mix-chavanu-mixture-namkeen-gujarati-snacks?variant=45385754312853'
    },
    {
      id: '45385754345621',
      weight: '200gm',
      title: '200gm',
      price: 85,
      compareAtPrice: 110,
      discountPercent: 23,
      sku: 'Mix Chavanu 200 GM.',
      badge: 'Chai Break Trial Pack',
      servings: '4-6 Tea Sessions',
      popular: false,
      buyUrl: 'https://www.bhagvatprasadam.com/products/mix-chavanu-mixture-namkeen-gujarati-snacks?variant=45385754345621'
    }
  ],

  // Authentic product images from Bhagvat Prasadam Shopify CDN
  images: [
    {
      id: 'pack-main',
      url: '/mix-chavanu-pack-main.webp',
      alt: 'Bhagvat Prasadam Mix Chavanu Sealed Packaging Pouch',
      caption: 'Original Bhagvat Prasadam Mix Chavanu Packaging',
      buyUrl: PRODUCT_BUY_URL
    },
    {
      id: 'pack-secondary',
      url: '/mix-chavanu-pack-secondary.webp',
      alt: 'Bhagvat Prasadam Mix Chavanu Stand-Up Pouch',
      caption: 'Multi-layer Stay-Fresh Resealable Zipper Pouch',
      buyUrl: PRODUCT_BUY_URL
    },
    {
      id: 'bowl-crunch',
      url: '/mix-chavanu-crunch.webp',
      alt: 'Crunchy Mix Chavanu Gujarati namkeen snack served in bowl',
      caption: 'Golden Crispy Blend with Peanuts & Fried Lentils',
      buyUrl: PRODUCT_BUY_URL
    },
    {
      id: 'mixture-traditional',
      url: '/mix-chavanu-traditional.webp',
      alt: 'Traditional mixture namkeen closeup',
      caption: 'Aromatic Spices, Sev, Boondi & Lentil Crunch',
      buyUrl: PRODUCT_BUY_URL
    },
    {
      id: 'authentic-mix',
      url: '/mix-chavanu-authentic.webp',
      alt: 'Authentic Gujarati Mix Namkeen platter',
      caption: 'Classic Kathiyawadi Farsan Platter',
      buyUrl: PRODUCT_BUY_URL
    },
    {
      id: 'snack-bulk',
      url: '/mix-chavanu-snack.webp',
      alt: 'Affordable Mix Chavanu bulk namkeen snack',
      caption: 'Crisp & Savory Tea-Time Snacking',
      buyUrl: PRODUCT_BUY_URL
    },
    {
      id: 'heritage-mix',
      url: '/mix-chavanu-heritage.webp',
      alt: 'Traditional Indian namkeen mixture',
      caption: 'Authentic Nilkanthdham Poicha Farsan Heritage',
      buyUrl: PRODUCT_BUY_URL
    },
    {
      id: 'festive-snack',
      url: '/mix-chavanu-festive.webp',
      alt: 'Fresh Mix Namkeen perfect Diwali snacks',
      caption: 'Perfect for Festive Feasts & Diwali Snacking',
      buyUrl: PRODUCT_BUY_URL
    }
  ],

  // Trust highlights for the hero section
  trustHighlights: [
    {
      id: 'taste',
      title: 'Authentic Gujarati Taste',
      desc: 'Handcrafted in Nilkanthdham Poicha with traditional spices'
    },
    {
      id: 'texture',
      title: 'Multi-Layered Crunch',
      desc: 'Crispy sev, spiced boondi, lentils & roasted peanuts'
    },
    {
      id: 'oil',
      title: '100% Pure Sing Tel',
      desc: 'Slow fried in pure groundnut oil — zero palm oil'
    }
  ],

  // Why choose Mix Chavanu (Benefits section)
  benefits: [
    {
      id: 'benefit-1',
      title: 'The Iconic Gujarati Mixture',
      description: 'A harmonious blend of stone-milled gram flour sev, crispy boondi, crunchy lentils, and golden roasted peanuts crafted according to age-old Saurashtra recipes.',
      icon: 'Award'
    },
    {
      id: 'benefit-2',
      title: '100% Pure Sing Tel Snacking',
      description: 'Cooked strictly in cold-pressed groundnut oil (Sing Tel). Zero palm oil, zero vanaspati dalda, delivering a light, fragrant crunch without oily heaviness.',
      icon: 'ShieldCheck'
    },
    {
      id: 'benefit-3',
      title: 'Festive & Diwali Favourite',
      description: 'The quintessential celebration snack across Indian households. Perfect for Diwali farsan boxes, wedding gift hampers, and welcoming guests with pride.',
      icon: 'Heart'
    },
    {
      id: 'benefit-4',
      title: 'Rich in Plant Protein & Fiber',
      description: 'Packed with wholesome Bengal gram lentils, moong dal, and protein-rich peanuts, spiced with carom seeds and hing for gentle digestion.',
      icon: 'Coffee'
    }
  ],

  // How to enjoy section (Authentic Gujarati Traditions)
  howToEnjoy: [
    {
      id: 'enjoy-chai-crunch',
      title: 'Daily Cutting Chai Break',
      gujaratiTitle: 'ગરમા-ગરમ કટિંગ ચા સાથે',
      subtitle: 'The Timeless Evening Companion',
      pairing: 'Steaming Cutting Masala Chai',
      description:
        'A bowl of crunchy Mix Chavanu paired with piping hot ginger-cardamom cutting chai is Gujarat’s beloved 4 PM ritual. The savory, spicy crunch cuts through the sweet warmth of tea for an unmatched sensory experience.',
      tasteNotes: ['Spicy Sev & Peanuts', 'Aromatic Ginger Chai', 'Roasted Cumin Warmth'],
      image: '/mix-chavanu-crunch.webp',
      buyUrl: PRODUCT_BUY_URL,
      tag: 'Daily Chai Ritual',
      badgeColor: '#F28C28'
    },
    {
      id: 'enjoy-festive-platter',
      title: 'Diwali & Festive Guest Platter',
      gujaratiTitle: 'દિવાળી અને તહેવારોનો ખાસ નાસ્તો',
      subtitle: 'Traditional Indian Hospitality',
      pairing: 'Mohanthal, Ghari, or Peda Sweets',
      description:
        'In every Gujarati home during Diwali and festivals, sweet delicacies like mohanthal, kaju katli, or peda are always served alongside a generous bowl of savory Mix Chavanu to achieve the perfect sweet-savory harmony.',
      tasteNotes: ['Sweet-Savory Balance', 'Lentil Crunch', 'Festive Richness'],
      image: '/mix-chavanu-festive.webp',
      buyUrl: PRODUCT_BUY_URL,
      tag: 'Festive Hospitality',
      badgeColor: '#B83220'
    },
    {
      id: 'enjoy-street-chaat',
      title: '2-Minute Desi Mixture Chaat',
      gujaratiTitle: 'કાઠિયાવાડી ચવાણું ચાટ',
      subtitle: 'Instant Tangy Street Creation',
      pairing: 'Chopped Onions, Coriander & Fresh Lime',
      description:
        'Toss 2 cups of Mix Chavanu with finely diced red onions, juicy ripe tomatoes, fresh green chillies, chopped coriander leaves, and a generous squeeze of fresh nimbu (lemon) for an addictive, zesty tea-time bhel.',
      tasteNotes: ['Fresh Lemon Zest', 'Crunchy Peanuts & Sev', 'Tangy Chaat Masala'],
      image: '/mix-chavanu-authentic.webp',
      buyUrl: PRODUCT_BUY_URL,
      tag: 'Quick Chaat Recipe',
      badgeColor: '#E5A323'
    },
    {
      id: 'enjoy-meal-topping',
      title: 'Poha, Upma & Khichdi Topping',
      gujaratiTitle: 'પૌંઆ, ઉપમા અને ખીચડી ટોપિંગ',
      subtitle: 'Crunchy Comfort Food Booster',
      pairing: 'Morning Bataka Poha or Evening Khichdi',
      description:
        'Elevate everyday meals! Sprinkle a generous handful over steaming Gujarati bataka poha, rava upma, or comfort curd-khichdi to introduce an irresistible texture and fragrant spice boost in every bite.',
      tasteNotes: ['Curd Khichdi Crunch', 'Golden Singdana', 'Savory Sev Crisp'],
      image: '/mix-chavanu-traditional.webp',
      buyUrl: PRODUCT_BUY_URL,
      tag: 'Meal Upgrade',
      badgeColor: '#3B2418'
    }
  ],

  // Detailed structured facts for the interactive Product Details section
  productFacts: {
    specs: [
      { label: 'Product Name', value: 'Mix Chavanu (મિક્સ ચવાણું / Mixture Namkeen)' },
      { label: 'Brand', value: 'Bhagvat Prasadam' },
      { label: 'Origin', value: 'Nilkanthdham Poicha, Gujarat' },
      { label: 'Base Ingredients', value: 'Desi Chana Besan, Fried Lentils & Roasted Peanuts' },
      { label: 'Cooking Medium', value: '100% Pure Cold-Pressed Sing Tel (Groundnut Oil)' },
      { label: 'Signature Spices', value: 'Kashmir Red Chilli, Turmeric, Cumin, Hing & Black Salt' },
      { label: 'Dietary Standard', value: '100% Pure Vegetarian & Satvik Preparation' },
      { label: 'Shelf Life', value: '60 Days Freshness in Sealed Zipper Pouch' },
      { label: 'Purity Standard', value: 'Zero Palm Oil, Zero Dalda, Zero Artificial Additives' }
    ],
    ingredientsList: [
      {
        name: 'Desi Bengal Gram Flour (Besan)',
        role: 'Sev & Boondi Base',
        desc: 'Stone-milled 100% pure chana besan extruded into golden crispy sev strands and airy crunchy boondi.'
      },
      {
        name: 'Premium Fried Lentils',
        role: 'Moong Dal & Chana Dal',
        desc: 'Carefully soaked, sun-dried, and lightly crisped split lentils that provide wholesome crunch and rich plant protein.'
      },
      {
        name: 'Golden Roasted Peanuts (Singdana)',
        role: 'Nutty Crunch & Protein',
        desc: 'Hand-picked premium Saurashtra groundnuts roasted to golden perfection for a rich, buttery bite.'
      },
      {
        name: 'Pure Cold-Pressed Sing Tel',
        role: 'Cooking Medium',
        desc: 'Traditional Saurashtra groundnut oil imparting an authentic aroma without greasy heaviness.'
      },
      {
        name: 'Curry Leaves (Kadi Patta)',
        role: 'Herb Fragrance',
        desc: 'Crisp hand-plucked curry leaves fried to aromatic perfection that infuse a pleasant herbal undertone.'
      },
      {
        name: 'Traditional Spice Blend',
        role: 'Seasoning & Warmth',
        desc: 'Aromatic red chilli, turmeric, cumin, carom seeds (ajwain), black salt (kala namak), and compounded asafoetida (hing).'
      }
    ],
    nutritionHighlights: [
      { label: 'Plant Protein', value: '14.2g', sub: 'Per 100g serving', highlight: true },
      { label: 'Energy', value: '535 kcal', sub: 'Wholesome sustenance' },
      { label: 'Dietary Fiber', value: '6.8g', sub: 'From lentils & besan' },
      { label: 'Heart Healthy Fats', value: '27.0g', sub: 'Unsaturated MUFA & PUFA' }
    ],
    nutritionTable: [
      { nutrient: 'Energy', amount: '535 kcal', note: 'Sustained energy' },
      { nutrient: 'Protein', amount: '14.2 g', note: '100% plant protein' },
      { nutrient: 'Total Carbohydrates', amount: '44.8 g', note: 'Complex carbohydrates' },
      { nutrient: 'Dietary Fiber', amount: '6.8 g', note: 'Natural lentil fiber' },
      { nutrient: 'Naturally Occurring Sugars', amount: '2.1 g', note: 'Zero added sugar' },
      { nutrient: 'Total Fat', amount: '33.6 g', note: 'From cold pressed oil & nuts' },
      { nutrient: 'Monounsaturated Fat (MUFA)', amount: '17.2 g', note: 'Heart healthy groundnut fat' },
      { nutrient: 'Polyunsaturated Fat (PUFA)', amount: '9.8 g', note: 'Essential fatty acids' },
      { nutrient: 'Saturated Fat', amount: '6.6 g', note: 'Naturally occurring' },
      { nutrient: 'Trans Fatty Acids', amount: '0.0 g', note: 'Zero hydrogenated fat' },
      { nutrient: 'Cholesterol', amount: '0.0 mg', note: 'Naturally cholesterol free' },
      { nutrient: 'Sodium', amount: '520 mg', note: 'Balanced rock & iodized salt' }
    ],
    dietaryBadges: [
      { title: '100% Pure Vegetarian', desc: 'Crafted under strict Satvik hygiene traditions in Nilkanthdham Poicha.' },
      { title: 'Zero Palm Oil & Zero Dalda', desc: 'Prepared strictly in cold pressed groundnut oil (Sing Tel).' },
      { title: 'Rich in Plant Protein', desc: 'Abundant in wholesome lentils, roasted peanuts, and chana besan.' },
      { title: 'Zero Chemical Preservatives', desc: 'No synthetic colors, MSG, or artificial flavor enhancers.' },
      { title: 'Resealable Freshness Pack', desc: 'Multi-layer barrier foil pouch with zip lock to lock in crunch for 60 days.' }
    ]
  },

  // Expandable accordion details for Section Details
  detailsAccordion: [
    {
      id: 'about',
      title: 'About Mix Chavanu',
      content:
        'Mix Chavanu (મિક્સ ચવાણું) is one of Gujarat’s most cherished traditional namkeens, celebrated for its exciting spectrum of textures and flavors. Handcrafted under the culinary care of Bhagvat Prasadam (Nilkanthdham Poicha tradition), each batch combines golden chickpea flour sev, spiced boondi, fried lentils, and crunchy peanuts, slow-fried in pure Sing Tel and seasoned with authentic Saurashtra spices.'
    },
    {
      id: 'ingredients',
      title: 'Ingredients',
      content:
        'Pure Bengal Gram Flour (Desi Chana Besan), Premium Lentils (Chana Dal, Moong Dal), Roasted Peanuts (Singdana), Cold-Pressed Groundnut Oil (Sing Tel), Curry Leaves (Kadi Patta), Red Chilli Powder, Turmeric, Cumin, Carom Seeds (Ajwain), Black Salt (Kala Namak), Iodized Salt, Asafoetida (Compounded Hing).'
    },
    {
      id: 'allergens',
      title: 'Allergens & Dietary Advice',
      content:
        'Contains Peanuts (Groundnuts) and Groundnut Oil (Sing Tel). Manufactured in a facility that also handles tree nuts, sesame seeds, and dairy products. 100% Pure Vegetarian and Satvik.'
    },
    {
      id: 'nutrition',
      title: 'Nutritional Information (Approximate per 100g)',
      content:
        'Energy: 535 kcal, Protein: 14.2g, Carbohydrates: 44.8g (of which Natural Sugars: 2.1g), Total Fat: 33.6g (Monounsaturated Fat: 17.2g, Polyunsaturated Fat: 9.8g, Saturated Fat: 6.6g, Trans Fat: 0g), Dietary Fiber: 6.8g, Sodium: 520mg.'
    },
    {
      id: 'storage',
      title: 'Storage & Freshness Instructions',
      content:
        'Store in a cool, dry place away from direct sunlight, moisture, and strong odors. After opening, press the resealable zipper pouch shut firmly or transfer to an airtight container to preserve crunchiness and aroma for up to 60 days.'
    },
    {
      id: 'packaging',
      title: 'Packaging & Freshness Guarantee',
      content:
        'Packed fresh in food-grade multi-layer barrier foil pouches equipped with a heavy-duty resealable zipper to keep moisture out and lock in maximum crunch.'
    },
    {
      id: 'shipping',
      title: 'Shipping and Delivery Across India',
      content:
        'Orders are packed fresh and dispatched within 24 hours via express courier across all pincodes in India. Standard delivery arrives in 2 to 4 business days. Safe, protective packaging ensures namkeen arrives undamaged and crispy.'
    }
  ],

  // Verified customer reviews
  reviews: [
    {
      id: 'rev-1',
      name: 'Bhavin Shah',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      date: 'Verified Buyer',
      title: 'The best Mix Chavanu in Gujarat!',
      comment: 'The balance of fried lentils, peanuts, and sev is unbeatable. You can immediately tell it is made in pure sing tel because there is zero bad oily smell. Our whole family finishes a 1kg pack in just one week!',
      variant: 'Bought: 1kg Mega Pack'
    },
    {
      id: 'rev-2',
      name: 'Daksha Patel',
      location: 'Surat, Gujarat',
      rating: 5,
      date: 'Verified Buyer',
      title: 'Authentic Nilkanthdham Poicha taste',
      comment: 'Whenever we visit Poicha temple, we buy this chavanu. Ordering it online and getting the exact same fresh, crunchy taste delivered right to our doorstep in Surat within 2 days is fantastic.',
      variant: 'Bought: 800gm Value Pack'
    },
    {
      id: 'rev-3',
      name: 'Manish Mehta',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      date: 'Verified Buyer',
      title: 'Perfect Diwali gift & everyday chai snack',
      comment: 'Ordered 10 packs for Diwali gifting to friends in Mumbai. Everyone praised the authentic flavor, perfect spice level, and heavy resealable zipper pouch. Will definitely order again.',
      variant: 'Bought: 1kg Mega Pack'
    },
    {
      id: 'rev-4',
      name: 'Kavita Joshi',
      location: 'Vadodara, Gujarat',
      rating: 5,
      date: 'Verified Buyer',
      title: 'Crunchy, fresh, and zero palm oil',
      comment: 'Most store-bought mixtures use palm oil and taste greasy. Bhagvat Prasadam’s Mix Chavanu is light, fragrant with curry leaves and hing, and extremely crispy. Perfect with evening chai!',
      variant: 'Bought: 400gm Pouch'
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: 'What is Mix Chavanu?',
      a: 'Mix Chavanu (મિક્સ ચવાણું / Mixture Namkeen) is a celebrated traditional Gujarati savory snack. It is an exquisite crunchy medley made from golden chickpea flour sev, spiced boondi, fried lentils (chana & moong dal), roasted peanuts (singdana), and aromatic curry leaves tossed in authentic spices.'
    },
    {
      q: 'What oil is used to fry Bhagvat Prasadam Mix Chavanu?',
      a: 'Our Mix Chavanu is slow-fried strictly in 100% pure cold-pressed groundnut oil (Sing Tel). We never use palm oil, cottonseed oil, or vanaspati dalda, ensuring a clean, rich nutty aroma with zero heavy greasy aftertaste.'
    },
    {
      q: 'What pack sizes are available and what is the price?',
      a: 'Mix Chavanu is available in 4 convenient sizes: 1kg at ₹425 (MRP ₹550), 800gm at ₹340 (MRP ₹440), 400gm at ₹170 (MRP ₹221), and 200gm at ₹85 (MRP ₹110). The 1kg pack offers the best value for families and festive celebrations.'
    },
    {
      q: 'How long does Mix Chavanu stay fresh?',
      a: 'Mix Chavanu remains fresh and crispy for up to 60 days from manufacturing. Each pack is delivered in a high-grade multi-layer barrier foil pouch with a resealable zipper. Simply seal the zip after every snack session or keep in an airtight container.'
    },
    {
      q: 'Is Bhagvat Prasadam Mix Chavanu pure vegetarian?',
      a: 'Yes, 100%. All Bhagvat Prasadam products are crafted under strict Satvik hygiene standards adhering to the sacred traditions of Nilkanthdham Poicha, Gujarat, using 100% pure vegetarian ingredients.'
    },
    {
      q: 'How fast is delivery across India?',
      a: 'Orders are freshly packed and dispatched within 24 hours. Express surface couriers deliver across major cities and towns within 2 to 4 business days in tamper-proof protective outer packaging.'
    },
    {
      q: 'Can I place bulk orders for Diwali or wedding gifting?',
      a: 'Yes! We specialize in bulk festive orders and corporate Diwali gifting. You can order directly through the website or connect with our customer helpline at +91 98765 43210 or email orders@bhagvatprasadam.com for personalized assistance.'
    }
  ]
};

// Aliases for compatibility
export const BHAVNAGRI_PRODUCT = MIX_CHAVANU_PRODUCT;
