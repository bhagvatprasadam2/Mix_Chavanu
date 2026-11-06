import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { PRODUCT_BUY_URL } from '../data/mixChavanuProduct';

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer" className="bg-[#FFF8E9] text-[#3B2418] pt-10 sm:pt-14 pb-5 border-t border-[#E8DCC8] relative overflow-hidden">
        {/* Subtle Decorative Leaf Watermarks (Matching Reference Footer Background) */}
        <div className="absolute top-12 right-16 w-36 h-36 opacity-10 pointer-events-none text-[#C88A2E] hidden md:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full rotate-45">
            <path d="M10,90 Q50,80 80,20 Q80,50 90,90 Q50,70 10,90 Z" />
            <path d="M10,90 Q50,55 80,20" />
            <path d="M35,70 Q45,65 55,75" />
            <path d="M50,55 Q62,50 70,60" />
          </svg>
        </div>
        <div className="absolute top-28 right-[32%] w-24 h-24 opacity-10 pointer-events-none text-[#C88A2E] hidden lg:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full -rotate-12">
            <path d="M15,85 Q45,75 75,25 Q75,55 85,85 Q45,65 15,85 Z" />
            <path d="M15,85 Q45,55 75,25" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top 4-Column Grid (Mirroring Reference Design) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-4">
            
            {/* Column 1: Brand Info (Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <a
                  href="#hero"
                  onClick={(e) => scrollTo(e, 'hero')}
                  className="inline-block group cursor-pointer focus:outline-none"
                  title="Mix Chavanu - Bhagvat Prasadam"
                >
                  <img
                    src="/mix-chavanu-logo.png"
                    alt="Mix Chavanu Official Logo"
                    className="h-16 sm:h-20 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-[#7A5F4F] leading-relaxed max-w-sm">
                Bhagvat Prasadam brings the sacred culinary heritage of authentic Mix Chavanu (મિક્સ ચવાણું) and Kathiyawadi namkeen-making into modern homes across India.
              </p>

              <p className="text-sm font-bold text-[#A8681E] font-display tracking-wide">
                Pure. Sacred. Crunchy.
              </p>
            </div>

            {/* Column 2: Quick Links (Span 2) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219]">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-[#5A3B2B] font-medium">
                <li>
                  <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#story" onClick={(e) => scrollTo(e, 'story')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    About
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => scrollTo(e, 'faq')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href={PRODUCT_BUY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F28C28] transition-colors cursor-pointer flex items-center gap-1 text-[#A8681E] font-bold"
                  >
                    <span>Store</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Policies (Span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219]">
                Policies
              </h4>
              <ul className="space-y-2 text-xs text-[#5A3B2B] font-medium">
                <li>
                  <span className="hover:text-[#F28C28] transition-colors cursor-pointer block">Terms &amp; Conditions</span>
                </li>
                <li>
                  <span className="hover:text-[#F28C28] transition-colors cursor-pointer block">Shipping Policy</span>
                </li>
                <li>
                  <span className="hover:text-[#F28C28] transition-colors cursor-pointer block">Return Policy</span>
                </li>
                <li>
                  <span className="hover:text-[#F28C28] transition-colors cursor-pointer block">Privacy Policy</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Info (Span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219]">
                Contact Info
              </h4>
              <div className="space-y-2.5 text-xs text-[#5A3B2B]">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#A8681E] shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-[#F28C28] transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#A8681E] shrink-0" />
                  <a href="mailto:orders@bhagvatprasadam.com" className="hover:text-[#F28C28] transition-colors">
                    orders@bhagvatprasadam.com
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#A8681E] shrink-0 mt-0.5" />
                  <span>
                    Nilkanthdham Road, Poicha, Narmada District, Gujarat 393145
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Full-Screen Panoramic Desktop Footer Banner */}
        <div className="w-full relative z-10 select-none overflow-hidden mt-6 sm:mt-8">
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[420px]">
            {/* Top soft blend gradient into footer background */}
            <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#FFF8E9] via-[#FFF8E9]/60 to-transparent z-10 pointer-events-none" />

            <img
              src="/mix-chavanu-footer-banner.jpg"
              alt="Authentic Gujarati Mix Chavanu Traditional Heritage Spread - Bhagvat Prasadam"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />

            {/* Bottom soft blend gradient */}
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#FFF8E9] via-[#FFF8E9]/60 to-transparent z-10 pointer-events-none" />
          </div>
        </div>

        {/* Bottom Copyright & SEO Semantic Keyword Line */}
        <div className="w-full relative z-10 border-t border-[#E8DCC8]/70 text-center py-4 text-xs text-[#7A5F4F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
        
            <p>
              © {new Date().getFullYear()} <strong className="text-[#3B2418]">bhagvatprasadam</strong> All Rights Reserved. Powered by Megascale.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Contact Widget (Bottom Right, matching reference design) */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-13 h-13 rounded-full bg-[#7A3E1D] hover:bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 cursor-pointer ring-4 ring-white/60"
        title="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 fill-current" />
      </a>
    </>
  );
}
