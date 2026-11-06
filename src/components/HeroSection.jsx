import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PRODUCT_BUY_URL } from '../data/mixChavanuProduct';

export default function HeroSection() {
  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-4 pb-8 sm:pt-8 sm:pb-12 md:pb-16 bg-[#FFF8E9] bg-subtle-pattern overflow-hidden border-b border-[#E8DCC8]"
    >
      {/* Background Soft Atmospheric Glows with Breathing Animation */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.65, 0.95, 0.65],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#E5A323]/25 to-[#F28C28]/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.55, 0.85, 0.55],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute -bottom-20 left-0 w-[450px] h-[450px] rounded-full bg-[#E5A323]/20 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* LEFT COLUMN: Message, Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >

            {/* Main Heading */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#3B2418] mb-3.5">
              Crunch Into Authentic <br />
              <span className="text-[#F28C28] inline-block relative">
                Mix Chavanu.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#E5A323]"
                  height="10"
                  viewBox="0 0 240 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7C65 2 175 2 237 7"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Gujarati Subhead */}
            <p className="text-base sm:text-lg font-bold text-[#A8681E] mb-2.5">
              મિક્સ ચવાણું • नमकीन मिक्स चवाणु
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#3B2418]/85 leading-relaxed max-w-xl mb-6">
              Savor the authentic taste of <strong>Mix Chavanu</strong>, a crunchy and flavorful Gujarati namkeen snack handcrafted by <strong>Bhagvat Prasadam</strong>. Made from premium lentils, golden roasted peanuts, crispy chickpea flour sev, and aromatic spices in <strong>100% pure Sing Tel (cold-pressed groundnut oil)</strong>, this mixture delivers the perfect balance of taste, crispiness, and Kathiyawadi tradition.
            </p>

            {/* Primary & Secondary CTAs with Direct BUY NOW */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <a
                href={PRODUCT_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 sm:py-3.5 px-6 sm:px-7 rounded-2xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Buy Now on Bhagvat Prasadam</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>

              <button
                type="button"
                onClick={() => scrollTo('product-showcase')}
                className="py-3 sm:py-3.5 px-6 sm:px-7 rounded-2xl bg-white hover:bg-[#E8DCC8]/50 text-[#3B2418] border border-[#E8DCC8] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>


          </motion.div>

          {/* RIGHT COLUMN: Realistic Mix Chavanu Product Presentation with Background Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative my-6 sm:my-8 lg:my-0 py-4 sm:py-6"
          >
            {/* 1. Luminous Pulsing Aura Behind Product (Vibrant on mobile & desktop) */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.65, 0.95, 0.65],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-[310px] sm:w-[440px] lg:w-[480px] h-[310px] sm:h-[440px] lg:h-[480px] rounded-full bg-gradient-to-tr from-[#E5A323]/45 via-[#F28C28]/35 to-amber-300/30 blur-2xl pointer-events-none"
            />

            {/* 2. Outer Rotating Dashed Mandala Orbit Ring with Accents (Visible around card on small screens) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[315px] sm:w-[430px] lg:w-[475px] h-[315px] sm:h-[430px] lg:h-[475px] rounded-full border-2 border-dashed border-[#E5A323]/70 pointer-events-none"
            >
              {/* Orbiting Golden Spice Nodes */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#E5A323] to-[#F28C28] shadow-md border-2 border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#B83220] shadow-sm border border-white" />
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#E5A323] shadow-sm border border-white" />
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F28C28] shadow-sm border border-white" />
            </motion.div>

            {/* 3. Second Concentric Orbit Ring (Reverse Spin) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[265px] sm:w-[370px] lg:w-[415px] h-[265px] sm:h-[370px] lg:h-[415px] rounded-full border border-dotted border-[#F28C28]/55 pointer-events-none"
            >
              <div className="absolute -top-1.5 right-1/4 w-3 h-3 rounded-full bg-[#E5A323] shadow-sm border border-white" />
              <div className="absolute -bottom-1.5 left-1/4 w-2.5 h-2.5 rounded-full bg-[#B83220] shadow-sm border border-white" />
            </motion.div>

            {/* 4. Main Product Showcase Card with Gentle Levitation */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-20 w-full max-w-[265px] sm:max-w-[340px] lg:max-w-[390px]"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <a
                  href={PRODUCT_BUY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Click to Buy Mix Chavanu on Bhagvat Prasadam"
                  className="block bg-gradient-to-b from-[#FFF8E9] to-[#FFF3DF] p-4 sm:p-5 text-center group cursor-pointer"
                >
                  <img
                    src="/mix-chavanu-pack-main.webp"
                    alt="Authentic Bhagvat Prasadam Mix Chavanu (મિક્સ ચવાણું) Sealed Packaging Pouch"
                    className="w-full max-h-[250px] sm:max-h-[300px] lg:max-h-[330px] object-contain mx-auto transform group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                    loading="eager"
                  />
                </a>
              </div>
            </motion.div>

            {/* 5. Floating Bowl Inset (Animated Counter-Float) */}
            <motion.a
              animate={{
                y: [0, 8, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              href={PRODUCT_BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to Buy Mix Chavanu"
              className="absolute -bottom-4 -left-2 sm:-left-4 z-25 w-24 sm:w-32 lg:w-36 h-24 sm:h-32 lg:h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white hover:scale-105 transition-transform cursor-pointer block bg-white"
            >
              <img
                src="/mix-chavanu-crunch.webp"
                alt="Crunchy Mix Chavanu Gujarati namkeen snack served in ceramic bowl"
                className="w-full h-full object-cover"
              />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
