import React from 'react';
import { Compass, Mail, Phone, MapPin, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer id="contact" className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Pre-footer Callout */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 py-12 text-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold font-display leading-tight">
              Ready to Plan Your Dream Sri Lanka Holiday?
            </h3>
            <p className="text-sm font-medium text-stone-900/80 mt-1">
              Speak with our local travel experts for instant itinerary guidance & custom quotes.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/94771234567?text=Hello%20Sinha%20Tours%2C%20I%20would%20like%20to%20plan%20a%20tour%20to%20Sri%20Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-stone-950 hover:bg-stone-900 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us Now</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-3 bg-white hover:bg-stone-100 text-stone-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              Request Itinerary
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Col */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950">
              <Compass className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xl font-bold font-display text-white">SINHA TOURS</span>
              <p className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
                Sri Lanka Expeditions
              </p>
            </div>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed">
            Sri Lanka's dedicated private tour company providing bespoke chauffeur-guided excursions, wildlife safaris, and cultural explorations across the island.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-[11px] text-amber-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Reg. Sri Lanka Tourism Dev. Authority</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
            Explore Experiences
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onNavigate('tours')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Classic Ceylon Wonders
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('tours')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Wild Sri Lanka & Safari Odyssey
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('tours')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Sacred Kingdoms & Ancient Heritage
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('tours')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Southern Coastlines & Ocean Vibe
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('custom-planner')}
                className="hover:text-amber-400 transition-colors cursor-pointer text-amber-400 font-medium"
              >
                Custom Itinerary Builder
              </button>
            </li>
          </ul>
        </div>

        {/* Top Destinations */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
            Destinations
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onNavigate('destinations')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Sigiriya & Dambulla
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('destinations')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Ella & Nine Arch Bridge
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('destinations')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Yala Leopard Safari
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('destinations')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Galle Dutch Fort & Ramparts
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('destinations')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Kandy Temple of Tooth
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
            Direct Contacts
          </h4>
          <div className="flex items-start gap-2.5 text-xs">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>No. 42 Galle Road, Colombo 03, Sri Lanka</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs">
            <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              +94 77 123 4567 (24/7 WhatsApp)
            </a>
          </div>
          <div className="flex items-center gap-2.5 text-xs">
            <Mail className="w-4 h-4 text-amber-400 shrink-0" />
            <a href="mailto:info@sinhatours.com" className="hover:text-white">
              info@sinhatours.com
            </a>
          </div>
          <div className="pt-2 text-[11px] text-stone-500">
            Available 7 days a week (Sri Lanka Standard Time UTC+5:30)
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-900 py-6 text-center text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Sinha Tours Sri Lanka. All Rights Reserved. •{' '}
            <span className="text-amber-400 font-semibold">Owned & Created by Lucky</span>
          </p>
          <p className="flex items-center justify-center gap-1">
            Handcrafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> for travelers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};
