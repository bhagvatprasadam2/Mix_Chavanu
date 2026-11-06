import { Award, Coffee, Heart, ShieldCheck } from 'lucide-react';
import { MIX_CHAVANU_PRODUCT } from '../data/mixChavanuProduct';

export default function ProductBenefits() {
  const getIcon = (name) => {
    switch (name) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#E5A323]" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-[#F28C28]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#B83220]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-[#2E7D32]" />;
    }
  };

  return (
    <section id="why-us" className="py-10 sm:py-14 md:py-16 bg-[#FFF8E9] border-b border-[#E8DCC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
        
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
            Why Choose Authentic <br />
            <span className="text-[#F28C28]">Mix Chavanu?</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            The authentic Gujarati mixture namkeen handcrafted with love, 100% pure Sing Tel, and authentic Satvik care in Nilkanthdham Poicha.
          </p>
        </div>

        {/* 4 Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {MIX_CHAVANU_PRODUCT.benefits.map((card) => (
            <div
              key={card.id}
              className="rounded-3xl bg-white p-5 sm:p-6 border border-[#E8DCC8] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] flex items-center justify-center mb-4">
                  {getIcon(card.icon)}
                </div>
                <h3 className="font-display font-black text-lg sm:text-xl text-[#3B2418] mb-1.5 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#7A5F4F] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8DCC8]/60 flex items-center gap-1.5 text-xs text-[#E5A323] font-bold">
                <span>Authentic Satvik Quality</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
