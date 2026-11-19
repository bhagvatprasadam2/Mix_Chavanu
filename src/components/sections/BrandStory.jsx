import { ExternalLink, Sparkles } from 'lucide-react';
import { PRODUCT_BUY_URL } from '../../data/mixChavanuProduct';

export default function BrandStory() {
  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="story" className="py-10 sm:py-14 md:py-16 bg-[#FFF8E9] relative overflow-hidden border-b border-[#E8DCC8]">
      {/* Background Subtle Ambient Shape */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E5A323]/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Asymmetrical Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT: Large Lifestyle Food Image with Chai */}
          <div className="lg:col-span-6 relative">
            <a
              href={PRODUCT_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to Buy Authentic Mix Chavanu on Bhagvat Prasadam"
              className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] w-full max-w-lg bg-white block group cursor-pointer"
            >
              <img
                src="/mix-chavanu-festive.webp"
                alt="Gujarati Chavanu namkeen snacks platter with hot chai for festive celebrations and tea time"
                width="600"
                height="450"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </a>

            {/* Inset Plate */}
            <a
              href={PRODUCT_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to Buy Mix Chavanu"
              className="absolute -bottom-4 -right-2 sm:-right-4 w-36 sm:w-48 aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white hidden sm:block bg-white hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src="/mix-chavanu-authentic.webp"
                alt="Authentic Gujarati Mix Chavanu platter with crispy sev, fried lentils, and Saurashtra peanuts"
                width="192"
                height="192"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </a>
          </div>

          {/* RIGHT: Editorial Story Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8DCC8] text-[#F28C28] text-xs font-bold uppercase tracking-wider mb-3 w-fit shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Little Taste of Gujarat</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight mb-4">
              Handcrafted in Pure Sing Tel, <br />
              <span className="text-[#F28C28]">Authentic Gujarati Chavanu Tradition.</span>
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#3B2418]/85 leading-relaxed mb-6">
              <p>
                In every traditional Gujarati household, tea time is incomplete without a crunchy, aromatic bowl of <strong>Mix Chavanu (મિક્સ ચવાણું / नमकीन मिक्स चवाणु)</strong>. At <strong>Bhagvat Prasadam</strong>, we honor this timeless Kathiyawadi snacking ritual rooted in the sacred culinary heritage of Nilkanthdham Poicha, Gujarat.
              </p>
              <p>
                Unlike commercial snack brands that rely on cheap palm oil or heavy artificial flavor enhancers, our artisans slow-fry every batch of <strong>Gujarati namkeen</strong> exclusively in <strong>100% pure cold-pressed groundnut oil (Sing Tel)</strong>. Stone-milled Bengal gram flour (besan) sev, crispy spiced boondi, split chana and moong dal, and hand-selected Saurashtra roasted peanuts (singdana) are seasoned with pure Kashmiri red chilli, stone-ground turmeric, roasted cumin, hing, and black salt.
              </p>
              <p className="font-semibold text-[#A8681E]">
                The result is a clean, fragrant mixture namkeen with a distinctive nutty crunch that leaves zero oily heaviness — honest, satvik, and wholesome for your family and guests.
              </p>
            </div>

            {/* 3 Heritage Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
              <div className="p-3 rounded-2xl bg-white border border-[#E8DCC8] text-center shadow-xs">
                <span className="block text-base font-black text-[#E5A323] mb-0.5">100%</span>
                <span className="text-[11px] font-bold text-[#3B2418]">Pure Sing Tel</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#E8DCC8] text-center shadow-xs">
                <span className="block text-base font-black text-[#F28C28] mb-0.5">Zero</span>
                <span className="text-[11px] font-bold text-[#3B2418]">Palm Oil or Dalda</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#E8DCC8] text-center shadow-xs">
                <span className="block text-base font-black text-[#B83220] mb-0.5">60 Days</span>
                <span className="text-[11px] font-bold text-[#3B2418]">Freshness Guaranteed</span>
              </div>
            </div>

            {/* Direct Buy Button */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PRODUCT_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Order Authentic Mix Chavanu</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                type="button"
                onClick={() => scrollTo('why-us')}
                className="py-3 px-5 rounded-xl bg-white hover:bg-[#FFF8E9] text-[#3B2418] border border-[#E8DCC8] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Why Choose Us</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
