import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from '../common/SocialIcons';
import { PRODUCT_BUY_URL } from '../../data/mixChavanuProduct';

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer" className="bg-[#FFF8E9] text-[#3B2418] pt-10 sm:pt-14 pb-5 border-t border-[#E8DCC8] relative overflow-hidden">
        {/* Subtle Decorative Leaf Watermarks */}
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
          
          {/* Top 4-Column Grid */}
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
                    alt="Bhagvat Prasadam Mix Chavanu Logo - Traditional Gujarati Namkeen"
                    width="160"
                    height="80"
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
              width="1440"
              height="420"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />

            {/* Bottom soft blend gradient */}
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#FFF8E9] via-[#FFF8E9]/60 to-transparent z-10 pointer-events-none" />
          </div>
        </div>

        {/* Footer Mobile App Promotion Bar (Matching Brand Dark Palette) */}
        <div className="w-full border-t border-[#2C1A11] bg-[#3B2418] py-2 sm:py-2.5 px-3 sm:px-6 relative z-10 text-[#FFF8E9]">
          <div className="max-w-7xl mx-auto flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2.5 text-center">
            {/* Desktop Typography */}
            <span className="hidden sm:inline text-xs font-semibold text-[#FFF8E9]">
              Install <strong className="font-bold text-white">Bhagvat Prasadam</strong> App &amp; Get{' '}
              <span className="font-bold text-[#F7C054] underline decoration-[#F7C054]/60 underline-offset-2">
                2% Extra Discount
              </span>{' '}
              on App!
            </span>
            <span className="hidden sm:inline text-xs font-medium text-[#FFF8E9]/80">
              Available on:
            </span>

            {/* Mobile Typography (Compact so both buttons fit on 1 single line on 360px screens) */}
            <span className="sm:hidden text-[11px] font-semibold text-[#FFF8E9]">
              Install App &amp; Get <span className="font-bold text-[#F7C054]">2% Off:</span>
            </span>

            {/* Play Store & App Store Pill Badges */}
            <div className="inline-flex items-center gap-1 sm:gap-1.5 shrink-0">
              <a
                href="https://play.google.com/store/apps/details?id=in.sellonapp.bhagvatprasadam&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on Google Play Store (opens in new tab)"
                className="bg-black hover:bg-neutral-800 text-white rounded-full inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-semibold shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186A2.296 2.296 0 0 1 3 20.575V3.425c0-.623.226-1.196.609-1.611z" fill="#00E676" />
                  <path d="M17.207 8.586L5.05 1.57A2.28 2.28 0 0 0 3.61 1.814l10.184 10.185 3.413-3.413z" fill="#FFD600" />
                  <path d="M3.61 22.186c.427.351.983.473 1.44.244l12.157-7.016-3.414-3.414L3.61 22.186z" fill="#FF3D00" />
                  <path d="M21.577 11.127l-4.37-2.541-3.414 3.414 3.414 3.414 4.37-2.541a1.004 1.004 0 0 0 0-1.746z" fill="#00B0FF" />
                </svg>
                <span>Play Store</span>
              </a>

              <a
                href="https://apps.apple.com/in/app/bhagvat-prasadam/id6751397354"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on Apple App Store (opens in new tab)"
                className="bg-black hover:bg-neutral-800 text-white rounded-full inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-semibold shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current shrink-0" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.59-7.7-11.72-13.97-6.3-9.5-11.11-20.4-14.42-32.69-3.32-12.28-4.97-23.77-4.97-34.46 0-15.01 3.8-27.42 11.41-37.22 7.61-9.79 17.06-14.78 28.36-14.97 4.58 0 9.8 1.15 15.66 3.44 5.86 2.3 9.79 3.52 11.79 3.67 1.63 0 5.73-1.32 12.31-3.95 6.58-2.63 12.1-3.79 16.57-3.48 12.28.98 22.19 5.48 29.74 13.51-10.76 6.52-16.03 15.54-15.82 27.05.22 8.91 3.59 16.41 10.11 22.5 6.53 6.09 14.13 9.78 22.82 11.09-2.07 6.3-4.57 12.72-7.51 19.27zM119.22 33.15c0-7.39 2.66-14.34 7.99-20.86 5.33-6.52 11.96-10.65 19.89-12.29.22 1.3.33 2.45.33 3.44 0 7.39-2.82 14.4-8.47 21.03-5.65 6.63-12.39 10.6-20.21 11.89-.11-1.08-.16-2.16-.16-3.21z" />
                </svg>
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & SEO Semantic Keyword Line */}
        <div className="w-full relative z-10 border-t border-[#E8DCC8]/70 text-center py-4 text-xs text-[#7A5F4F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
            <p>
              © {new Date().getFullYear()} <strong className="text-[#3B2418]">Bhagvat Prasadam</strong> All Rights Reserved. Powered by Megascale.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Contact Widget */}
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

