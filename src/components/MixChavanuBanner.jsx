import { ExternalLink } from 'lucide-react';
import { PRODUCT_BUY_URL } from '../data/mixChavanuProduct';

export default function MixChavanuBanner() {
  return (
    <section className="py-4 sm:py-6 md:py-8 bg-[#FFF8E9] border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clickable Banner with Direct Product Link */}
        <a
          href={PRODUCT_BUY_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Click to Buy Authentic Mix Chavanu on Bhagvat Prasadam"
          className="group relative block overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#E8DCC8] hover:border-[#E5A323] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
        >
          {/* Main High-Resolution Banner Image */}
          <img
            src="/mix-chavanu-banner.jpg"
            alt="Mix Chavanu - Traditional Gujarati Namkeen, A Perfect Blend of Crunchy Flavors"
            className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
            loading="eager"
          />

          {/* Subtle Warm Sheen Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Interactive Floating Buy Now Pill */}
          <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-xl bg-[#E5A323] group-hover:bg-[#F28C28] text-[#3B2418] group-hover:text-white font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-wider shadow-lg transition-all transform group-hover:scale-105">
              <span>Order Now</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-85" />
            </span>
          </div>
        </a>

      </div>
    </section>
  );
}

