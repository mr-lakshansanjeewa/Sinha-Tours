import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Phone, Calendar, Users, MapPin, Sparkles } from 'lucide-react';
import { BookingInquiry, TourPackage, Vehicle } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTour?: TourPackage | null;
  preselectedVehicle?: Vehicle | null;
  customSummary?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedTour,
  preselectedVehicle,
  customSummary,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<BookingInquiry>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    travelDate: '',
    adultsCount: 2,
    childrenCount: 0,
    vehiclePreference: preselectedVehicle?.name || 'Toyota Axio / Prius Hybrid (1-3 Pax)',
    specialRequests: customSummary || '',
  });

  useEffect(() => {
    if (customSummary) {
      setFormData((prev) => ({ ...prev, specialRequests: customSummary }));
    }
    if (preselectedVehicle) {
      setFormData((prev) => ({ ...prev, vehiclePreference: preselectedVehicle.name }));
    }
  }, [customSummary, preselectedVehicle]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const tourName = preselectedTour?.title || 'Custom Sri Lanka Private Tour';

  const generateWhatsAppLink = () => {
    const text = `Hello Sinha Tours! I would like to inquire about:
*Tour:* ${tourName}
*Name:* ${formData.fullName || 'Traveler'}
*Email:* ${formData.email || 'N/A'}
*WhatsApp:* ${formData.phone || 'N/A'}
*Travel Date:* ${formData.travelDate || 'Flexible'}
*Travelers:* ${formData.adultsCount} Adults, ${formData.childrenCount} Children
*Vehicle:* ${formData.vehiclePreference}
*Notes:* ${formData.specialRequests || 'Standard package'}`;

    return `https://wa.me/94771234567?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-stone-200 my-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-stone-900">
              Inquiry Received with Thanks!
            </h3>

            <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
              Ayubowan! Our tour manager will review your dates and travel preferences for <strong>{tourName}</strong> and reply via email or WhatsApp within 6 hours.
            </p>

            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Instant Confirmation on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm rounded-xl transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Form Header */}
            <div className="bg-stone-900 text-white p-6 sm:p-8">
              <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-widest font-bold mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Private Tour Booking & Tailored Quote</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">
                {tourName}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light mt-1">
                No credit card needed today. Receive a transparent quote with your dedicated chauffeur.
              </p>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 text-stone-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7911 123456"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Home Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. United Kingdom, Germany"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 text-stone-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Approx. Travel Date
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 text-stone-900 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Adults
                  </label>
                  <select
                    value={formData.adultsCount}
                    onChange={(e) => setFormData({ ...formData, adultsCount: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 text-stone-900 cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>
                        {n} Adult{n > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Children
                  </label>
                  <select
                    value={formData.childrenCount}
                    onChange={(e) => setFormData({ ...formData, childrenCount: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 text-stone-900 cursor-pointer"
                  >
                    {[0, 1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n} Children
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Vehicle Preference
                </label>
                <select
                  value={formData.vehiclePreference}
                  onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 text-stone-900 cursor-pointer"
                >
                  <option value="Toyota Axio / Prius Hybrid (1-3 Pax)">
                    Toyota Axio / Prius Hybrid (1-3 Pax)
                  </option>
                  <option value="Toyota KDH High-Roof Van (4-8 Pax)">
                    Toyota KDH High-Roof Luxury Van (4-8 Pax)
                  </option>
                  <option value="Executive 4WD Prado / Land Cruiser SUV">
                    Executive 4WD Prado / Land Cruiser SUV
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Special Notes / Custom Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us if you have flight numbers, special dietary needs, hotel preferences, or special stops..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 text-stone-900"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Tour Inquiry</span>
                </button>

                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-xs text-emerald-700 hover:text-emerald-800 font-semibold flex items-center justify-center gap-1.5 p-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Or chat on WhatsApp now</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
