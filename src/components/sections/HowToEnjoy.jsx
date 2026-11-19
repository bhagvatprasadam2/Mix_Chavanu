import { ExternalLink } from 'lucide-react';
import { PRODUCT_BUY_URL } from '../../data/mixChavanuProduct';

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
      pairing: 'Mohanthal, Ghari, or Peda Sweets',
      description:
        'In every Gujarati home during festivals, sweet delicacies like Mohanthal or Peda are paired with a bowl of savory Mix Chavanu for the perfect sweet-savory balance.',
      image: '/mix-chavanu-festive.webp',
    },
    {
      step: '03',
      title: '2-Minute Desi Mixture Chaat',
      gujarati: 'કાઠિયાવાડી ચવાણું ચાટ',
      occasion: 'Quick Zesty Evening Bhel',
      pairing: 'Chopped Onions, Coriander & Fresh Lime',
      description:
        'Toss 2 cups of Mix Chavanu with finely diced red onions, ripe tomatoes, green chillies, fresh coriander leaves, and a squeeze of fresh lemon for an addictive, tangy chaat.',
      image: '/mix-chavanu-authentic.webp',
    },
    {
      step: '04',
      title: 'Poha, Upma & Khichdi Topping',
      gujarati: 'પૌંઆ, ઉપમા અને ખીચડી ટોપિંગ',
      occasion: 'Crunchy Comfort Food Upgrade',
      pairing: 'Morning Bataka Poha or Evening Khichdi',
      description:
        'Elevate everyday comfort meals! Sprinkle a handful over steaming Gujarati bataka poha, rava upma, or comfort curd-khichdi to add an irresistible crispy texture.',
      image: '/mix-chavanu-traditional.webp',
    },
  ];

  return (
    <section id="how-to-enjoy" className="py-10 sm:py-14 md:py-16 bg-[#FFF8E9] border-b border-[#E8DCC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
            How to Enjoy <br />
            <span className="text-[#F28C28]">Authentic Mix Chavanu</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Four timeless ways Gujarati families celebrate everyday tea times and festive gatherings with Mix Chavanu.
          </p>
        </div>

        {/* 4 Lifestyle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rituals.map((r) => (
            <div
              key={r.step}
              className="rounded-3xl bg-white border border-[#E8DCC8] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FFF8E9]">
                <img
                  src={r.image}
                  alt={`${r.title} - ${r.gujarati} - Gujarati Chavanu Snack`}
                  width="400"
                  height="300"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#3B2418] text-[#FFF8E9] text-[10px] font-black px-2 py-0.5 rounded-md">
                  {r.step}
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  {r.occasion}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-black text-base text-[#3B2418] leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-xs font-bold text-[#A8681E] mt-0.5 mb-2">
                    {r.gujarati}
                  </p>
                  <p className="text-xs text-[#7A5F4F] leading-relaxed">
                    {r.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8DCC8]/60 flex items-center justify-between text-[11px]">
                  <span className="text-[#7A5F4F] font-semibold">Pairing:</span>
                  <span className="text-[#F28C28] font-bold text-right truncate max-w-[150px]">
                    {r.pairing}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Buy Strip */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href={PRODUCT_BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 sm:px-8 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Order Mix Chavanu for Your Evening Chai</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>
        </div>

      </div>
    </section>
  );
}

