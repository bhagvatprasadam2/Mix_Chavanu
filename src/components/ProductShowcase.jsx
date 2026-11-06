import { useState } from 'react';
import { ExternalLink, CheckCircle2, Star } from 'lucide-react';
import { MIX_CHAVANU_PRODUCT, PRODUCT_BUY_URL } from '../data/mixChavanuProduct';

export default function ProductShowcase() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="product-showcase" className="py-10 sm:py-14 md:py-16 bg-white relative border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">

          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight">
              Authentic Mix Chavanu Showcase  
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Original Kathiyawadi mixture handcrafted in 100% pure Sing Tel and nitrogen-sealed in stay-fresh zipper barrier packaging.
          </p>
        </div>

        {/* 2-Column Split: Gallery Left, Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT: Product Gallery (All Clickable with Buy Links) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Preview with Buy Link */}
            <a
              href={PRODUCT_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to Buy Mix Chavanu on Bhagvat Prasadam"
              className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[#FFF8E9] border-2 border-[#E8DCC8] shadow-md group cursor-pointer block"
            >
              <img
                src={MIX_CHAVANU_PRODUCT.images[activeImageIndex].url}
                alt={MIX_CHAVANU_PRODUCT.images[activeImageIndex].alt}
                className="w-full h-full object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
              />

              
            </a>

            {/* Thumbnail Strip (All 8 Images) */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-2.5">
              {MIX_CHAVANU_PRODUCT.images.map((img, idx) => {
                const isActive = activeImageIndex === idx;
                return (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    title={img.caption}
                    className={`aspect-square rounded-xl overflow-hidden bg-[#FFF8E9] border-2 transition-all cursor-pointer p-1 relative group ${isActive
                        ? 'border-[#E5A323] ring-2 ring-[#E5A323]/50 shadow-sm scale-105'
                        : 'border-[#E8DCC8] opacity-75 hover:opacity-100 hover:border-[#3B2418]/40'
                      }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Product Information & Direct Buy */}
          <div className="lg:col-span-6 flex flex-col justify-start text-left">

            {/* Brand & Gujarati / Hindi Title */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black text-[#F28C28] uppercase tracking-wider">
                {MIX_CHAVANU_PRODUCT.brand}
              </span>
              <span className="text-xs font-bold text-[#A8681E]">
                ({MIX_CHAVANU_PRODUCT.titleGujarati} / {MIX_CHAVANU_PRODUCT.titleHindi})
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight mb-2">
              {MIX_CHAVANU_PRODUCT.title}{' '}
              <span className="text-xl sm:text-2xl text-[#A8681E] font-normal">
                ({MIX_CHAVANU_PRODUCT.titleGujarati})
              </span>
            </h1>

            {/* Subtitle & Ratings */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#F28C28]">
                {MIX_CHAVANU_PRODUCT.subtitle}
              </p>
              <div className="flex items-center gap-1 bg-[#FFF8E9] px-2.5 py-0.5 rounded-full border border-[#E8DCC8] text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span className="font-black text-[#3B2418]">{MIX_CHAVANU_PRODUCT.rating}</span>
                <span className="text-[#7A5F4F]">({MIX_CHAVANU_PRODUCT.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#3B2418]/80 leading-relaxed mb-5">
              {MIX_CHAVANU_PRODUCT.description}
            </p>

            {/* Key Quality & Craft Highlights */}
            <div className="rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] p-4 sm:p-5 space-y-2.5 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3B2418] block border-b border-[#E8DCC8]/60 pb-1.5">
                Authentic Recipe Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#3B2418]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>100% Pure Sing Tel (Cold-Pressed Groundnut Oil)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Premium Fried Lentils &amp; Roasted Peanuts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Crisp Chana Besan Sev &amp; Spiced Boondi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Zero Palm Oil, Zero Artificial Preservatives</span>
                </div>
              </div>
            </div>

            {/* PROMINENT DIRECT BUY NOW BUTTON */}
            <div className="space-y-2.5 mb-4">
              <a
                href={PRODUCT_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Buy Now on Bhagvat Prasadam</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-85" />
              </a>

              <button
                type="button"
                onClick={() => scrollTo('details')}
                className="w-full py-2.5 px-6 rounded-xl bg-white hover:bg-[#FFF8E9] text-[#3B2418] border border-[#E8DCC8] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Full Ingredients &amp; Nutritional Facts</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
