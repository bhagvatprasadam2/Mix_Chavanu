import { ShieldCheck, Heart, ExternalLink, Sparkles } from 'lucide-react';
import { PRODUCT_BUY_URL } from '../data/mixChavanuProduct';

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

          {/* LEFT: Large Lifestyle Food Image with Chai (Clickable Buy Links) */}
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
                alt="Fresh Mix Namkeen perfect for Diwali snacks and daily tea-time ritual"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />


            </a>

            {/* Inset Plate (Clickable Buy Link) */}
            <a
              href={PRODUCT_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to Buy Mix Chavanu"
              className="absolute -bottom-4 -right-2 sm:-right-4 w-36 sm:w-48 aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white hidden sm:block bg-white hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src="/mix-chavanu-authentic.webp"
                alt="Authentic Gujarati Mix Namkeen platter with sev, lentils, and peanuts"
                className="w-full h-full object-cover"
              />
            </a>
          </div>

          {/* RIGHT: Heading, Description & Supporting Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">


            <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-[#3B2418] tracking-tight leading-[1.1] mb-3.5">
              A Little Taste of Gujarat: <br />
              <span className="text-[#F28C28]">Authentic Mix Chavanu.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#3B2418]/85 leading-relaxed mb-3 font-normal">
              From lively evening cutting chai sessions to grand festive gatherings, <strong>Mix Chavanu (મિક્સ ચવાણું)</strong> is a cornerstone of authentic Gujarati snacking culture.
            </p>

            <p className="text-xs sm:text-sm text-[#3B2418]/70 leading-relaxed mb-5">
              Handcrafted in the sacred tradition of <strong>Nilkanthdham Poicha, Gujarat</strong>, Bhagvat Prasadam master karigars have perfected the quintessential mixture. Crisp strands of stone-milled chickpea flour sev, airy spiced boondi, slow-fried split lentils (chana &amp; moong dal), and rich roasted Saurashtra peanuts are harmoniously tossed with crisp curry leaves, roasted cumin, and black salt. Fried exclusively in <strong>pure cold-pressed groundnut oil (Sing Tel)</strong>, every handful delivers unmatched crunch, zero palm oil greasiness, and pure Satvik delight.
            </p>

            {/* Supporting Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E8DCC8] shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <h3 className="font-display font-bold text-sm text-[#3B2418]">100% Pure Sing Tel</h3>
                </div>
                <p className="text-xs text-[#7A5F4F]">
                  Fried strictly in cold-pressed groundnut oil for clean nutty flavor and zero heavy palm oil.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E8DCC8] shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-[#B83220] shrink-0" />
                  <h3 className="font-display font-bold text-sm text-[#3B2418]">Multigrain &amp; Nut Crunch</h3>
                </div>
                <p className="text-xs text-[#7A5F4F]">
                  Rich plant protein from roasted peanuts and lentils balanced with soothing Ayurvedic digestive spices.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PRODUCT_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-2xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Buy Authentic Mix Chavanu</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>

              <button
                type="button"
                onClick={() => scrollTo('how-to-enjoy')}
                className="py-3 px-5 rounded-2xl bg-white hover:bg-[#E8DCC8]/50 text-[#3B2418] border border-[#E8DCC8] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Ways to Enjoy</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
