import React, { useState } from 'react';
import { MapPin, Sun, Calendar, ArrowRight, Check } from 'lucide-react';
import { DESTINATIONS } from '../data/toursData';
import { Destination } from '../types';

interface DestinationsGridProps {
  onPlanForDestination: (dest: Destination) => void;
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({ onPlanForDestination }) => {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(DESTINATIONS[0]);

  return (
    <section id="destinations" className="py-20 bg-stone-100 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">
              Explore The Wonder of Asia
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-stone-900">
              Sri Lanka's Iconic Destinations
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md mt-4 md:mt-0 font-light">
            Every corner of this tropical teardrop island offers a unique climate, ancient history, dramatic elevations, and warm local hospitality.
          </p>
        </div>

        {/* Interactive Destination Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Destination Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {DESTINATIONS.map((dest) => {
              const isSelected = selectedDest?.id === dest.id;
              return (
                <div
                  key={dest.id}
                  onClick={() => setSelectedDest(dest)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                    isSelected
                      ? 'bg-white border-amber-500/80 shadow-lg scale-[1.02]'
                      : 'bg-stone-50/80 hover:bg-white border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 shadow"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold font-display text-stone-900 truncate">
                        {dest.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        {dest.region}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 truncate mt-1">
                      {dest.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Destination Focus Showcase */}
          {selectedDest && (
            <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xl flex flex-col">
              <div className="relative h-72 sm:h-96 overflow-hidden">
                <img
                  src={selectedDest.image}
                  alt={selectedDest.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1 block">
                    {selectedDest.region} • Sri Lanka
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold font-display mb-2">
                    {selectedDest.name}
                  </h3>
                  <p className="text-sm text-stone-200 font-light max-w-xl">
                    {selectedDest.tagline}
                  </p>
                </div>
              </div>

              {/* Focus Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm text-stone-700 leading-relaxed">
                  {selectedDest.description}
                </p>

                {/* Weather and Best Season Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-100">
                    <Sun className="w-5 h-5 text-amber-600 shrink-0" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                        Typical Climate
                      </p>
                      <p className="text-xs font-bold text-stone-800">
                        {selectedDest.weather}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-100">
                    <Calendar className="w-5 h-5 text-amber-600 shrink-0" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                        Best Travel Window
                      </p>
                      <p className="text-xs font-bold text-stone-800">
                        {selectedDest.bestMonths}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top Attractions Pills */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                    Must-See Highlights in {selectedDest.name}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedDest.topAttractions.map((att, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-amber-500/10 text-stone-800 border border-amber-500/20 text-xs font-medium rounded-lg flex items-center gap-1.5"
                      >
                        <Check className="w-3.5 h-3.5 text-amber-600" />
                        {att}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500">
                    Want to include {selectedDest.name} in your custom tour?
                  </span>
                  <button
                    onClick={() => onPlanForDestination(selectedDest)}
                    className="px-5 py-2.5 bg-stone-900 hover:bg-amber-500 hover:text-stone-950 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Build Itinerary Here</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
