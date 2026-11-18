import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Product Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate inquiry dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Product Inquiry',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-16 bg-[#FFF8E9] border-b border-[#E8DCC8] relative overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#E5A323]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
            Connect with <br />
            <span className="text-[#F28C28]">Bhagvat Prasadam</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Have questions about orders, bulk festive gifting, ingredients, or nationwide delivery? Our team in Gujarat is here to assist you.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT: Contact Cards & Trust Badges (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E8DCC8] shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] flex items-center justify-center text-[#E5A323] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#7A5F4F]">
                  Order Helpline &amp; WhatsApp
                </span>
                <a
                  href="tel:+919876543210"
                  className="font-display font-bold text-base sm:text-lg text-[#3B2418] hover:text-[#F28C28] transition-colors"
                >
                  +91 98765 43210
                </a>
                <p className="text-xs text-[#7A5F4F] mt-0.5">
                  Available Mon–Sat from 9:00 AM to 7:00 PM IST
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E8DCC8] shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] flex items-center justify-center text-[#F28C28] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#7A5F4F]">
                  Customer Support Email
                </span>
                <a
                  href="mailto:orders@bhagvatprasadam.com"
                  className="font-display font-bold text-base sm:text-lg text-[#3B2418] hover:text-[#F28C28] transition-colors"
                >
                  orders@bhagvatprasadam.com
                </a>
                <p className="text-xs text-[#7A5F4F] mt-0.5">
                  Inquiries answered within 24 business hours
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E8DCC8] shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] flex items-center justify-center text-[#B83220] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#7A5F4F]">
                  Sacred Production Heritage
                </span>
                <p className="font-display font-bold text-sm sm:text-base text-[#3B2418] mt-0.5">
                  Bhagvat Prasadam Farsan Bhavan
                </p>
                <p className="text-xs text-[#7A5F4F] mt-0.5 leading-relaxed">
                  Nilkanthdham Road, Poicha, Narmada District, Gujarat 393145, India
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E8DCC8] shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] flex items-center justify-center text-[#2E7D32] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#7A5F4F]">
                  Fresh Dispatch Schedule
                </span>
                <p className="font-display font-bold text-sm sm:text-base text-[#3B2418] mt-0.5">
                  Dispatched within 24 Hours
                </p>
                <p className="text-xs text-[#7A5F4F] mt-0.5">
                  Orders dispatched Monday through Saturday via express couriers.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT: Inquiry Form (Span 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#E8DCC8] p-6 sm:p-8 shadow-md">
            
            <div className="mb-6">
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#3B2418]">
                Send Us an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1">
                Fill out the quick form below and our representative will reach out to you shortly.
              </p>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <p className="text-xs sm:text-sm font-semibold">
                  Thank you! Your inquiry has been received. Our team will contact you within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#3B2418] mb-1.5 uppercase tracking-wider">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ketan Patel"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8E9]/50 border border-[#E8DCC8] text-[#3B2418] placeholder-[#7A5F4F]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E5A323] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-[#3B2418] mb-1.5 uppercase tracking-wider">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8E9]/50 border border-[#E8DCC8] text-[#3B2418] placeholder-[#7A5F4F]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E5A323] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#3B2418] mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. ketan@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8E9]/50 border border-[#E8DCC8] text-[#3B2418] placeholder-[#7A5F4F]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E5A323] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-[#3B2418] mb-1.5 uppercase tracking-wider">
                    Inquiry Topic
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8E9]/50 border border-[#E8DCC8] text-[#3B2418] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E5A323] focus:bg-white transition-all"
                  >
                    <option value="General Product Inquiry">General Product Inquiry</option>
                    <option value="Bulk Order & Festive Gifting">Bulk Order &amp; Festive Gifting</option>
                    <option value="Shipping & Delivery Status">Shipping &amp; Delivery Status</option>
                    <option value="Ingredients & Satvik Purity">Ingredients &amp; Satvik Purity</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#3B2418] mb-1.5 uppercase tracking-wider">
                  Your Message or Special Request *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the quantity you need, address or specific question..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF8E9]/50 border border-[#E8DCC8] text-[#3B2418] placeholder-[#7A5F4F]/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E5A323] focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Your Inquiry...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
