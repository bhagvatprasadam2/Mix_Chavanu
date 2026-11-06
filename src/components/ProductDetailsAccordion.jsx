import { CheckCircle2, ShieldCheck, Leaf, Activity, PackageCheck } from 'lucide-react';
import { PRODUCT_BUY_URL } from '../data/mixChavanuProduct';

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
    { name: 'Natural Sugars', value: '2.1 g', isSub: true },
    { name: 'Total Fat', value: '33.6 g' },
    { name: 'Unsaturated Fats (MUFA + PUFA)', value: '27.0 g', isSub: true },
    { name: 'Saturated Fat', value: '6.6 g', isSub: true },
    { name: 'Trans Fat', value: '0.0 g', isSub: true },
    { name: 'Sodium', value: '520 mg' },
  ];

  const ingredients = [
    'Pure Bengal Gram Flour (Desi Chana Besan - Sev & Boondi)',
    'Premium Crispy Fried Lentils (Chana Dal & Moong Dal)',
    'Golden Roasted Peanuts (Singdana)',
    'Cold-Pressed Groundnut Oil (Sing Tel)',
    'Crisp Hand-Picked Curry Leaves (Kadi Patta)',
    'Aromatic Kashmiri Red Chilli & Golden Turmeric',
    'Roasted Cumin & Carom Seeds (Ajwain)',
    'Ayurvedic Black Salt (Kala Namak) & Iodized Salt',
    'Compounded Hing (Asafoetida) & Chaat Masala',
  ];

  return (
    <section id="details" className="py-10 sm:py-14 md:py-16 bg-[#FFF8E9] border-b border-[#E8DCC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Clear Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
        
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#3B2418] tracking-tight">
            Mix Chavanu Details &amp; Facts
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Verified nutritional breakdown, 100% pure Sing Tel ingredients, and crispness storage facts for authentic Mix Chavanu.
          </p>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
          
          {/* COLUMN 1: Product Specifications & Ingredients */}
          <div className="space-y-4 sm:space-y-5">
            
            {/* Card 1: Specifications */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#E8DCC8]">
                <ShieldCheck className="w-5 h-5 text-[#E5A323]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#3B2418]">
                  Product Specifications
                </h3>
              </div>
              <div className="divide-y divide-[#E8DCC8]/50 text-xs sm:text-sm">
                {specs.map((item, idx) => (
                  <div key={idx} className="py-2 flex justify-between gap-4">
                    <span className="text-[#7A5F4F]">{item.label}</span>
                    <span className="font-bold text-[#3B2418] text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Ingredients */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#E8DCC8]">
                <Leaf className="w-5 h-5 text-[#2E7D32]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#3B2418]">
                  Ingredients &amp; Blend
                </h3>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#3B2418] mb-3.5">
                {ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
              <div className="p-2.5 rounded-xl bg-[#FFF8E9] border border-[#E8DCC8] text-xs text-[#7A5F4F]">
                <strong>Allergen Advice:</strong> Contains Peanuts (Groundnuts) and Groundnut Oil (Sing Tel). 100% Pure Vegetarian &amp; Satvik recipe.
              </div>
            </div>

          </div>

          {/* COLUMN 2: Nutrition Facts & Storage Guidelines */}
          <div className="space-y-4 sm:space-y-5">
            
            {/* Card 3: Nutrition Information */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#E8DCC8]">
                <Activity className="w-5 h-5 text-[#F28C28]" />
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#3B2418]">
                    Nutritional Information
                  </h3>
                  <p className="text-[11px] text-[#7A5F4F]">Approximate values per 100g serving</p>
                </div>
              </div>
              <div className="divide-y divide-[#E8DCC8]/50 text-xs sm:text-sm">
                {nutritionData.map((item, idx) => (
                  <div
                    key={idx}
                    className={`py-1.5 flex justify-between gap-4 ${
                      item.isSub ? 'pl-4 text-[#7A5F4F]' : 'font-semibold text-[#3B2418]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 4: Packaging & Freshness Guarantee */}
            <div className="bg-white rounded-2xl border border-[#E8DCC8] p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#E8DCC8]">
                <PackageCheck className="w-5 h-5 text-[#B83220]" />
                <h3 className="font-display font-bold text-base sm:text-lg text-[#3B2418]">
                  Packaging &amp; Storage Instructions
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#3B2418]/80 leading-relaxed mb-3">
                Every batch of Mix Chavanu is packed fresh in heavy-duty multi-layer barrier foil with an airtight resealable zipper lock to protect against moisture and air.
              </p>
              <ul className="space-y-1.5 text-xs text-[#3B2418]/80 mb-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Store in a cool, dry place away from direct sunlight.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Press the zipper lock shut firmly after every snack session.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Retains signature crispiness for up to 60 days.</span>
                </li>
              </ul>
              <a
                href={PRODUCT_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Order Fresh Mix Chavanu Now</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
