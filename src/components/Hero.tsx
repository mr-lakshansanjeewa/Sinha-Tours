import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, Sparkles, Shield, Award, Star, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSearch: (filters: { category: string; duration: string }) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ category: selectedCategory, duration: selectedDuration });
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative bg-stone-950 text-white min-h-[90vh] flex flex-col justify-between overflow-hidden">
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2000&q=85"
          alt="Sigiriya Rock Fortress Sri Lanka"
          className="w-full h-full object-cover object-center brightness-[0.42] scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/70" />
      </div>

      {/* Hero Visual Watermark */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-20 select-none pointer-events-none">
        <div className="flex items-center gap-1.5 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/15 text-[11px] text-stone-300 font-medium shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span>Watermark: <strong className="text-amber-300 font-bold">Lucky</strong></span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 w-full my-auto">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Sri Lanka Private Tour Specialists • Tailor-Made For You</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.1] mb-6">
            Discover the Timeless <br />
            <span className="italic font-normal text-amber-300">Magic of Ceylon</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-stone-300 font-light leading-relaxed mb-8 max-w-2xl">
            From the misty tea plantations of Ella to ancient royal rock fortresses and wild leopard safaris. Travel in luxury with your private dedicated chauffeur guide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={() => {
                const el = document.getElementById('tours');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-xl shadow-amber-500/20 flex items-center gap-2 transition-all hover:gap-3 cursor-pointer"
            >
              <span>Explore Tour Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-stone-900/80 hover:bg-stone-800 text-white font-semibold rounded-xl border border-stone-700 backdrop-blur-md transition-colors cursor-pointer"
            >
              Request Custom Itinerary
            </button>
          </div>
        </div>

        {/* Quick Filter Box */}
        <div className="bg-stone-900/90 border border-stone-700/80 rounded-2xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl max-w-4xl">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            <span>Find Your Perfect Sri Lanka Tour</span>
          </div>

          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {/* Tour Type */}
            <div>
              <label className="block text-xs text-stone-400 mb-1 font-medium">Tour Theme</label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-stone-800 text-stone-100 rounded-xl px-3.5 py-2.5 text-sm border border-stone-700 focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="All">All Themes & Styles</option>
                  <option value="Classic">Classic Ceylon</option>
                  <option value="Wildlife">Wildlife & Safari</option>
                  <option value="Cultural">Ancient Heritage & Temples</option>
                  <option value="Beach & Coastal">Beaches, Surfing & Coast</option>
                </select>
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-xs text-stone-400 mb-1 font-medium">Duration</label>
              <div className="relative">
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full bg-stone-800 text-stone-100 rounded-xl px-3.5 py-2.5 text-sm border border-stone-700 focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="All">Any Duration</option>
                  <option value="Short">Short Trip (4 - 5 Days)</option>
                  <option value="Medium">Standard Round-Trip (6 - 7 Days)</option>
                  <option value="Long">Extended Expedition (8+ Days)</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer h-[42px]"
              >
                <Search className="w-4 h-4" />
                <span>Filter Tours</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="relative z-10 border-t border-stone-800/80 bg-stone-950/80 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">100% Private</p>
                <p className="text-xs text-stone-400">Dedicated car & driver</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">4.9 / 5.0 Rating</p>
                <p className="text-xs text-stone-400">Over 500+ happy travelers</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">SLTDA Authorized</p>
                <p className="text-xs text-stone-400">Govt. tourism licensed</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Tailored Flexibility</p>
                <p className="text-xs text-stone-400">Modify any day on tour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
