export default function AnnouncementBar({ text = "AUTHENTIC MIX CHAVANU (મિક્સ ચવાણું) | 100% PURE SING TEL GUJARATI MIXTURE NAMKEEN | BHAGVAT PRASADAM" }) {
  return (
    <div className="bg-[#3B2418] text-[#FFF8E9] py-1.5 sm:py-2 px-3 sm:px-4 text-center text-[10px] sm:text-xs font-semibold tracking-wider border-b border-[#E8DCC8]/20 flex items-center justify-center relative z-50">
      <span>{text}</span>
    </div>
  );
}
