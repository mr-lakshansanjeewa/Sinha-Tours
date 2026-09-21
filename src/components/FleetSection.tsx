import React from 'react';
import { Users, Luggage, ShieldCheck, Award, Fuel, Wifi, Sparkles, Check } from 'lucide-react';
import { VEHICLE_FLEET } from '../data/toursData';
import { Vehicle } from '../types';

interface FleetSectionProps {
  onSelectVehicle: (v: Vehicle) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicle }) => {
  return (
    <section id="fleet" className="py-20 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">
            Comfort & Safety on Every Mile
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-stone-900 mb-4">
            Our Luxury Vehicle Fleet & Chauffeurs
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            All our vehicles are meticulously maintained, fully insured for passenger travel, and driven by friendly, government-licensed English-speaking tourist chauffeur guides.
          </p>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VEHICLE_FLEET.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-stone-900/85 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-stone-700">
                  {vehicle.type}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-bold font-display text-stone-900 mb-1">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs text-amber-700 font-semibold mb-3">
                    Ideal for: {vehicle.idealFor}
                  </p>

                  <div className="flex items-center gap-4 py-2 border-y border-stone-100 text-xs text-stone-600">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Users className="w-4 h-4 text-amber-600" />
                      {vehicle.capacity}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Luggage className="w-4 h-4 text-amber-600" />
                      {vehicle.luggage}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                    Vehicle Inclusions
                  </p>
                  {vehicle.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onSelectVehicle(vehicle)}
                  className="w-full py-2.5 bg-stone-100 hover:bg-amber-500 hover:text-stone-950 text-stone-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Inquire For This Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Chauffeur Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">Licensed Tourist Drivers</h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Certified by Sri Lanka Tourism Development Authority with defensive driving records.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
              <Fuel className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">All-Inclusive Fixed Rates</h4>
              <p className="text-xs text-stone-500 mt-0.5">
                No hidden fuel surcharges, highway toll surprises, or parking fee extras on your trip.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">Free Onboard Amenities</h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Chilled mineral water bottles, cool towels, and mobile Wi-Fi hotspot in your car.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
