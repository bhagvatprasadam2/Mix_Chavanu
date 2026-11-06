import { ExternalLink } from 'lucide-react';
import { PRODUCT_BUY_URL } from '../data/mixChavanuProduct';

export default function HowToEnjoy() {
  const rituals = [
    {
      step: '01',
      title: 'Daily Cutting Chai Break',
      gujarati: 'ગરમા-ગરમ કટિંગ ચા સાથે',
      occasion: 'The 4 PM Tea Ritual',
      pairing: 'Steaming Cutting Masala Chai',
      description:
        'A bowl of crunchy Mix Chavanu paired with piping hot ginger-cardamom tea. The savory, spicy crunch cuts through the sweet warmth of tea for pure snacking bliss.',
      image: '/mix-chavanu-crunch.webp',
    },
    {
      step: '02',
      title: 'Diwali & Festive Guest Platter',
      gujarati: 'દિવાળી અને તહેવારોનો ખાસ નાસ્તો',
      occasion: 'Traditional Indian Hospitality',
      pairing: 'Mohanthal, Peda, or Ghari Sweets',
      description:
        'During Diwali and family celebrations, sweet delicacies are always paired with a generous bowl of savory Mix Chavanu to create the quintessential festive harmony.',
      image: '/mix-chavanu-festive.webp',
    },
    {
      step: '03',
      title: '2-Minute Desi Mixture Chaat',
      gujarati: 'કાઠિયાવાડી ચવાણું ચાટ',
      occasion: 'Tangy Street-Style Creation',
      pairing: 'Fresh Onions, Tomatoes & Nimbu',
      description:
        'Toss 2 cups of Mix Chavanu with finely diced red onions, ripe tomatoes, fresh coriander, green chillies, and fresh lime juice for a quick, mouthwatering street chaat.',
      image: '/mix-chavanu-authentic.webp',
    },
    {
      step: '04',
      title: 'Poha, Upma & Khichdi Topping',
      gujarati: 'પૌંઆ, ઉપમા અને ખીચડી ટોપિંગ',
      occasion: 'Comfort Food Crunch Booster',
      pairing: 'Gujarati Bataka Poha or Warm Khichdi',
      description:
        'Sprinkle a handful over morning bataka poha or steaming Gujarati khichdi with fresh curd to add an addictive crunch and spiced aroma to every spoonful.',
      image: '/mix-chavanu-traditional.webp',
    },
  ];

  return (
    <section id="how-to-enjoy" className="py-10 sm:py-14 md:py-16 bg-[#FFFDF8] border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Elegant Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
         
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
            How Gujarat Truly Enjoys <br />
            <span className="text-[#F28C28]">Mix Chavanu</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-2 leading-relaxed">
            Four timeless culinary rituals that celebrate the multi-layered crunch and authentic spices of Mix Chavanu (મિક્સ ચવાણું).
          </p>
        </div>

        {/* Official Mix Chavanu Heritage Promotional Banner with Product Link */}
        <div className="mb-8 sm:mb-10">
          <a
            href={PRODUCT_BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Click to Buy Authentic Mix Chavanu on Bhagvat Prasadam"
            className="group relative block overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#E8DCC8] hover:border-[#E5A323] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
          >
            {/* Main High Resolution Banner Image */}
            <img
              src="/mix-chavanu-banner.jpg"
              alt="Mix Chavanu - Traditional Gujarati Namkeen, A Perfect Blend of Crunchy Flavors"
              className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
              loading="lazy"
            />

            {/* Subtle Warm Sheen Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Interactive Floating Buy Now Pill */}
            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-xl bg-[#E5A323] group-hover:bg-[#F28C28] text-[#3B2418] group-hover:text-white font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-wider shadow-lg transition-all transform group-hover:scale-105">
                <span>Buy Mix Chavanu</span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-85" />
              </span>
            </div>
          </a>
        </div>

        {/* 4 Clean Editorial Cards in a Single Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {rituals.map((item) => (
            <div
              key={item.step}
              className="group bg-white rounded-3xl border border-[#E8DCC8] p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-[#A8681E] bg-[#FFF8E9] border border-[#E8DCC8] px-2.5 py-0.5 rounded-full">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-bold text-[#F28C28]">
                    {item.occasion}
                  </span>
                </div>

                {/* Ritual Image (Clickable Link) */}
                <a
                  href={PRODUCT_BUY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Buy Mix Chavanu for ${item.title}`}
                  className="block aspect-video rounded-2xl overflow-hidden mb-3.5 bg-[#FFF8E9] border border-[#E8DCC8] cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </a>

                <h4 className="font-display font-black text-base text-[#3B2418] mb-0.5">
                  {item.title}
                </h4>
                <p className="text-xs font-bold text-[#A8681E] mb-2">
                  {item.gujarati}
                </p>
                <p className="text-xs text-[#7A5F4F] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#E8DCC8]/60 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-[#3B2418]">Pairing:</span>
                <span className="text-[#A8681E] font-medium">{item.pairing}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
