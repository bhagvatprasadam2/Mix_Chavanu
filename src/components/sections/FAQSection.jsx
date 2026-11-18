import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { MIX_CHAVANU_PRODUCT, PRODUCT_BUY_URL } from '../../data/mixChavanuProduct';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((curr) => (curr === i ? null : i));
  };

  return (
    <section id="faq" className="py-10 sm:py-14 md:py-16 bg-white border-b border-[#E8DCC8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
            Mix Chavanu FAQs
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Everything you need to know about our authentic recipe, Sing Tel purity, pack sizes, shelf life, and online delivery across India.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {MIX_CHAVANU_PRODUCT.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(i);
                    }
                  }}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#E5A323] cursor-pointer"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-[#3B2418]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#3B2418] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#E5A323]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#3B2418]/85 leading-relaxed border-t border-[#E8DCC8]/60 pt-3">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need Help CTA */}
        <div className="mt-8 text-center bg-[#FFF8E9] p-5 sm:p-6 rounded-3xl border border-[#E8DCC8]">
          <p className="font-display font-bold text-sm sm:text-base text-[#3B2418] mb-1">
            Have more questions about our authentic snacks?
          </p>
          <p className="text-xs text-[#7A5F4F] mb-4">
            Connect directly with our customer support team or order online today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="py-2.5 px-5 rounded-xl bg-white hover:bg-[#E8DCC8]/50 text-[#3B2418] border border-[#E8DCC8] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Contact Support
            </a>
            <a
              href={PRODUCT_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>Order on Store</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

