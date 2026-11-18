import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import BrandStory from './components/sections/BrandStory';
import MixChavanuBanner from './components/sections/MixChavanuBanner';
import ProductShowcase from './components/sections/ProductShowcase';
import ProductBenefits from './components/sections/ProductBenefits';
import ProductDetailsAccordion from './components/sections/ProductDetailsAccordion';
import HowToEnjoy from './components/sections/HowToEnjoy';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E9] text-[#3B2418]">
      {/* 1 & 2. Unified Sticky Header (Rotating Free Shipping & Mobile App Discount + Navbar) */}
      <Navbar />

      {/* Main Single Product Content */}
      <main className="flex-1">
        {/* 3. Hero Section (Most Important Section with Promotional Offers) */}
        <HeroSection />

        {/* 4. Brand Story Section ("A Little Taste of Gujarat") */}
        <BrandStory />

        {/* 5. Official Mix Chavanu Heritage Promotional Banner */}
        <MixChavanuBanner />

        {/* 6. Product Showcase Section (Dedicated Presentation, Offers & Gallery) */}
        <ProductShowcase />

        {/* 7. Why Choose Mix Chavanu? (4 Benefits Cards) */}
        <ProductBenefits />

        {/* 8. Product Details Section (Expandable Accordion Panels) */}
        <ProductDetailsAccordion />

        {/* 9. How to Enjoy Section with Official Heritage Banner (4 Lifestyle Cards) */}
        <HowToEnjoy />

        {/* 10. Frequently Asked Questions (FAQ Accordion) */}
        <FAQSection />

        {/* 11. Dedicated Contact Section */}
        <ContactSection />
      </main>

      {/* 12. Professional 4-Column Footer with Mobile App Download Bar */}
      <Footer />
    </div>
  );
}
