import { ShieldCheck, Leaf, Activity, PackageCheck } from 'lucide-react';
import { PRODUCT_BUY_URL } from '../../data/mixChavanuProduct';

export default function ProductDetailsAccordion() {
  const specs = [
    { label: 'Product Name', value: 'Mix Chavanu (મિક્સ ચવાણું / Mixture Namkeen)' },
    { label: 'Origin', value: 'Nilkanthdham Poicha, Gujarat' },
    { label: 'Base Ingredients', value: 'Desi Chana Besan, Fried Lentils & Roasted Peanuts' },
    { label: 'Cooking Oil', value: '100% Cold-Pressed Groundnut Oil (Sing Tel)' },
    { label: 'Signature Spices', value: 'Red Chilli, Turmeric, Roasted Cumin, Hing & Black Salt' },
    { label: 'Dietary Standard', value: '100% Pure Vegetarian & Satvik Tradition' },
    { label: 'Shelf Life', value: '60 Days (in Sealed Multi-Layer Zipper Pouch)' },
    { label: 'Purity Standard', value: 'Zero Palm Oil, Zero Vanaspati Dalda, Zero Additives' },
  ];

  const nutritionData = [
    { name: 'Energy', value: '535 kcal' },
    { name: 'Protein', value: '14.2 g' },
    { name: 'Total Carbohydrates', value: '44.8 g' },
    { name: 'Dietary Fiber', value: '6.8 g', isSub: true },
    { name: 'Total Fat', value: '33.6 g' },
    { name: 'MUFA (Good Groundnut Fat)', value: '17.2 g', isSub: true },
    { name: 'PUFA', value: '9.8 g', isSub: true },
    { name: 'Trans Fat', value: '0.0 g', isSub: true },
    { name: 'Cholesterol', value: '0.0 mg' },
    { name: 'Sodium', value: '520 mg' },
  ];

  const guarantees = [
    {
      icon: Leaf,
      title: '100% Pure Satvik Vegetarian',
      desc: 'Crafted under strict devotional cleanliness in Nilkanthdham Poicha.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero Palm Oil & Zero Vanaspati',
      desc: 'Fried strictly in fresh cold-pressed groundnut oil (Sing Tel).',
    },
    {
      icon: Activity,
      title: 'Rich Plant Protein & Fiber',
      desc: 'Loaded with wholesome roasted peanuts and dual lentils.',
    },
    {
      icon: PackageCheck,
      title: 'Stay-Fresh Foil Barrier Zipper',
      desc: 'Multi-layer packaging seals crunchiness and freshness for 60 days.',
    },
  ];

  return (
    <section id="details" className="py-10 sm:py-14 md:py-16 bg-[#FFF8E9] border-b border-[#E8DCC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
            Complete Product <br />
            <span className="text-[#F28C28]">Specifications &amp; Nutrition</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Transparent culinary facts, laboratory nutritional estimates, and quality standards for Bhagvat Prasadam Mix Chavanu.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Left Column: Product Specifications (Span 4) */}
          <div className="lg:col-span-4 rounded-3xl bg-white border border-[#E8DCC8] p-5 sm:p-6 shadow-sm">
            <h3 className="font-display font-black text-base sm:text-lg text-[#3B2418] mb-4 pb-2 border-b border-[#E8DCC8] flex items-center justify-between">
              <span>Product Specifications</span>
              <span className="text-xs font-bold text-[#E5A323] uppercase">Verified</span>
            </h3>

            <div className="space-y-3">
              {specs.map((item, idx) => (
                <div key={idx} className="pb-2.5 border-b border-[#E8DCC8]/50 last:border-0 last:pb-0">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#7A5F4F]">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#3B2418] mt-0.5 block">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column: Nutritional Facts Table (Span 4) */}
          <div className="lg:col-span-4 rounded-3xl bg-white border border-[#E8DCC8] p-5 sm:p-6 shadow-sm">
            <h3 className="font-display font-black text-base sm:text-lg text-[#3B2418] mb-1 pb-1 flex items-center justify-between">
              <span>Nutritional Facts</span>
              <span className="text-[11px] font-bold text-[#F28C28]">Per 100g Serving</span>
            </h3>
            <p className="text-[11px] text-[#7A5F4F] mb-4 pb-2 border-b border-[#E8DCC8]">
              Approximate nutritional values based on authentic ingredients
            </p>

            <div className="divide-y divide-[#E8DCC8]/50">
              {nutritionData.map((nutrient, idx) => (
                <div
                  key={idx}
                  className={`py-2 flex items-center justify-between text-xs sm:text-sm ${
                    nutrient.isSub ? 'pl-4 text-[#7A5F4F]' : 'font-bold text-[#3B2418]'
                  }`}
                >
                  <span>{nutrient.name}</span>
                  <span className="font-mono text-xs">{nutrient.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Trust Guarantees (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-3xl bg-white border border-[#E8DCC8] p-5 sm:p-6 shadow-sm">
              <h3 className="font-display font-black text-base sm:text-lg text-[#3B2418] mb-4 pb-2 border-b border-[#E8DCC8]">
                Bhagvat Purity Promise
              </h3>

              <div className="space-y-4">
                {guarantees.map((g, idx) => {
                  const Icon = g.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FFF8E9] border border-[#E8DCC8] flex items-center justify-center shrink-0 mt-0.5 text-[#E5A323]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-[#3B2418]">
                          {g.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#7A5F4F] mt-0.5 leading-snug">
                          {g.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Buy Now Callout */}
            <div className="rounded-3xl bg-gradient-to-br from-[#E5A323]/20 via-[#F28C28]/15 to-amber-100 p-5 border border-[#E5A323]/40 text-center space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#A8681E] block">
                Pure • Authentic • Freshly Packed
              </span>
              <p className="font-display font-black text-base sm:text-lg text-[#3B2418]">
                Ready for Crispy Chai-Time?
              </p>
              <a
                href={PRODUCT_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-3 px-5 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>Buy Mix Chavanu Online</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
