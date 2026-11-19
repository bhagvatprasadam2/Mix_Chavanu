import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AnnouncementBar from '../common/AnnouncementBar';
import { PRODUCT_BUY_URL } from '../../data/mixChavanuProduct';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'Our Story', href: 'story' },
    { name: 'Why Mix Chavanu', href: 'why-us' },
    { name: 'Product Details', href: 'product-showcase' },
    { name: 'How to Enjoy', href: 'how-to-enjoy' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full shadow-xs">
        {/* LINE 1 & LINE 2: Rotating Free Shipping Announcement Bar & Mobile App Discount Banner */}
        <AnnouncementBar />

        {/* LINE 3: Main Navbar */}
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#FFF8E9]/95 backdrop-blur-md shadow-sm border-b border-[#E8DCC8] py-2 sm:py-2.5'
              : 'bg-[#FFF8E9] py-2.5 sm:py-3.5 border-b border-[#E8DCC8]/60'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              
              {/* Mobile Hamburger Trigger */}
              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  className="p-2 -ml-2 rounded-xl text-[#3B2418] hover:bg-[#E8DCC8]/40 transition-colors cursor-pointer"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>

              {/* Brand Logo (Left) */}
              <div className="flex-1 lg:flex-none text-center lg:text-left">
                <a
                  href="#hero"
                  onClick={(e) => scrollTo(e, 'hero')}
                  className="inline-flex items-center group cursor-pointer focus:outline-none py-1"
                  title="Mix Chavanu - Bhagvat Prasadam"
                >
                  <img
                    src="/mix-chavanu-logo.png"
                    alt="Bhagvat Prasadam Mix Chavanu Logo - Authentic Gujarati Snacks"
                    width="180"
                    height="60"
                    className="h-11 sm:h-13 md:h-15 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  />
                </a>
              </div>

              {/* Navigation Links (Center - Desktop) */}
              <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`#${link.href}`}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-xs font-bold uppercase tracking-wider text-[#3B2418] hover:text-[#F28C28] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Right: Buy Now Button (Hidden on Small Screens) */}
              <div className="hidden sm:flex items-center space-x-3">
                <a
                  href={PRODUCT_BUY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white text-xs font-black uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Buy Now</span>
                </a>
              </div>

              {/* Symmetrical Spacer for Mobile Layout to Keep Logo Centered */}
              <div className="w-10 sm:hidden" aria-hidden="true" />

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="relative w-4/5 max-w-sm bg-[#FFF8E9] h-full shadow-2xl flex flex-col justify-between z-10 overflow-y-auto animate-in slide-in-from-left duration-300 border-r border-[#E8DCC8]">
            {/* Drawer Top */}
            <div className="p-4 border-b border-[#E8DCC8] flex items-center justify-between bg-white/60">
              <a
                href="#hero"
                onClick={(e) => scrollTo(e, 'hero')}
                className="inline-block cursor-pointer"
                title="Mix Chavanu - Bhagvat Prasadam"
              >
                <img
                  src="/mix-chavanu-logo.png"
                  alt="Bhagvat Prasadam Mix Chavanu Logo - Authentic Gujarati Snacks"
                  width="150"
                  height="48"
                  className="h-12 w-auto object-contain"
                />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-full text-[#3B2418] hover:bg-[#E8DCC8]/40 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav list */}
            <div className="px-5 py-4 flex-1 space-y-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#7A5F4F] px-3 py-1">
                Navigation
              </p>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="flex items-center justify-between p-3 rounded-xl text-[#3B2418] font-bold text-sm hover:bg-white hover:text-[#F28C28] transition-colors"
                >
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            {/* Mobile Drawer App Promo Callout */}
            <div className="mx-4 mb-2 p-3.5 rounded-2xl bg-white border border-[#E8DCC8] text-center space-y-2 shadow-xs">
              <p className="text-xs font-bold text-[#3B2418]">
                Install App &amp; Get{' '}
                <span className="text-[#F28C28] font-black underline decoration-[#F28C28]/50 underline-offset-2">
                  2% Extra Off
                </span>
              </p>
              <div className="flex items-center justify-center gap-1.5 shrink-0">
                <a
                  href="https://play.google.com/store/apps/details?id=in.sellonapp.bhagvatprasadam&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on Google Play Store (opens in new tab)"
                  className="inline-flex items-center gap-1 bg-black hover:bg-neutral-900 text-white px-2.5 py-1 rounded-full text-[10px] font-semibold shadow-xs"
                >
                  <svg className="w-2.5 h-2.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
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
                  className="inline-flex items-center gap-1 bg-black hover:bg-neutral-900 text-white px-2.5 py-1 rounded-full text-[10px] font-semibold shadow-xs"
                >
                  <svg className="w-2.5 h-2.5 fill-current shrink-0" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.59-7.7-11.72-13.97-6.3-9.5-11.11-20.4-14.42-32.69-3.32-12.28-4.97-23.77-4.97-34.46 0-15.01 3.8-27.42 11.41-37.22 7.61-9.79 17.06-14.78 28.36-14.97 4.58 0 9.8 1.15 15.66 3.44 5.86 2.3 9.79 3.52 11.79 3.67 1.63 0 5.73-1.32 12.31-3.95 6.58-2.63 12.1-3.79 16.57-3.48 12.28.98 22.19 5.48 29.74 13.51-10.76 6.52-16.03 15.54-15.82 27.05.22 8.91 3.59 16.41 10.11 22.5 6.53 6.09 14.13 9.78 22.82 11.09-2.07 6.3-4.57 12.72-7.51 19.27zM119.22 33.15c0-7.39 2.66-14.34 7.99-20.86 5.33-6.52 11.96-10.65 19.89-12.29.22 1.3.33 2.45.33 3.44 0 7.39-2.82 14.4-8.47 21.03-5.65 6.63-12.39 10.6-20.21 11.89-.11-1.08-.16-2.16-.16-3.21z" />
                  </svg>
                  <span>App Store</span>
                </a>
              </div>
            </div>

            {/* Drawer Footer with Buy Now Button */}
            <div className="p-5 border-t border-[#E8DCC8] bg-[#FFF8E9] space-y-3">
              <a
                href={PRODUCT_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl bg-[#E5A323] text-[#3B2418] font-black text-xs uppercase tracking-wider shadow-md hover:bg-[#F28C28] hover:text-white transition-colors cursor-pointer"
              >
                <span>Buy Now on Bhagvat Prasadam</span>
              </a>
              <p className="text-[11px] text-center text-[#7A5F4F] pt-1">
                The Taste of Gujarat • Bhagvat Prasadam
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

