import React, { useState } from 'react';
import { Sparkles, MapPin, Calendar, Users, Car, Check, Send, Phone } from 'lucide-react';
import { Currency } from '../types';
import { CURRENCY_RATES } from '../data/toursData';

interface CustomPlannerProps {
  currentCurrency: Currency;
  onOpenBookingWithCustom: (summary: string) => void;
}

const SRI_LANKA_REGIONS = [
  { id: 'sigiriya', name: 'Sigiriya & Dambulla', type: 'History & Rock Fortress' },
  { id: 'kandy', name: 'Kandy & Cultural Temples', type: 'Sacred Relics & Lake' },
  { id: 'nuwara-eliya', name: 'Nuwara Eliya Tea Hills', type: 'Waterfalls & Cool Climate' },
  { id: 'ella', name: 'Ella & Nine Arch Bridge', type: 'Hiking & Scenic Train' },
  { id: 'yala', name: 'Yala National Park', type: 'Leopard & Elephant Safaris' },
  { id: 'galle', name: 'Galle Dutch Fort', type: 'Colonial Ocean Ramparts' },
  { id: 'mirissa', name: 'Mirissa & South Coast', type: 'Whales & Golden Beaches' },
  { id: 'anuradhapura', name: 'Ancient Anuradhapura', type: '2,500-Year Sacred Stupas' },
];

const TRAVEL_INTERESTS = [
  'Wildlife & Safari',
  'Ancient History & UNESCO Sites',
  'Scenic Train Journeys',
  'Tea Estates & Hiking',
  'Surfing & Golden Beaches',
  'Authentic Sri Lankan Cuisine',
  'Ayurvedic Wellness & Spa',
];

export const CustomPlanner: React.FC<CustomPlannerProps> = ({
  currentCurrency,
  onOpenBookingWithCustom,
}) => {
  const [selectedRegions, setSelectedRegions] = useState<string[]>(['sigiriya', 'kandy', 'ella', 'galle']);
  const [duration, setDuration] = useState<number>(7);
  const [travelers, setTravelers] = useState<number>(2);
  const [interests, setInterests] = useState<string[]>(['Wildlife & Safari', 'Scenic Train Journeys']);
  const [hotelType, setHotelType] = useState<string>('Boutique & 4-Star');

  const toggleRegion = (id: string) => {
    if (selectedRegions.includes(id)) {
      if (selectedRegions.length > 1) {
        setSelectedRegions(selectedRegions.filter((r) => r !== id));
      }
    } else {
      setSelectedRegions([...selectedRegions, id]);
    }
  };

  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  // Estimated base price calculation
  const baseRatePerDay = 110; // USD per day for private vehicle, chauffeur guide, fuel, toll
  const estPerPersonUSD = Math.round((baseRatePerDay * duration + (hotelType === 'Luxury 5-Star' ? 140 : 80) * duration) / Math.max(1, travelers / 1.5));
  const currencyInfo = CURRENCY_RATES[currentCurrency];
  const convertedEst = Math.round(estPerPersonUSD * currencyInfo.rate);

  const handleRequestQuote = () => {
    const regionNames = selectedRegions
      .map((r) => SRI_LANKA_REGIONS.find((reg) => reg.id === r)?.name)
      .filter(Boolean)
      .join(', ');
    const summary = `Custom ${duration}-Day Tour for ${travelers} guests. Destinations: ${regionNames}. Hotel preference: ${hotelType}. Interests: ${interests.join(', ')}. Est: ${currencyInfo.symbol}${convertedEst} / person.`;
    onOpenBookingWithCustom(summary);
  };

  return (
    <section id="custom-planner" className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Subtle Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 border border-amber-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Interactive Trip Builder
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white mb-4">
            Design Your Bespoke Sri Lanka Tour
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light">
            Every itinerary with Sinha Tours is 100% tailor-made. Pick your dream destinations, select your trip pace, and get a tailored proposal within 24 hours.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-stone-950/80 border border-stone-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          {/* Left Config Panel */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1: Select Locations */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  1. Select Regions You Wish to Visit ({selectedRegions.length} selected)
                </label>
                <span className="text-xs text-stone-500">Click to add/remove</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {SRI_LANKA_REGIONS.map((reg) => {
                  const isChecked = selectedRegions.includes(reg.id);
                  return (
                    <button
                      key={reg.id}
                      type="button"
                      onClick={() => toggleRegion(reg.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-amber-500/20 border-amber-500 text-white font-semibold shadow-sm'
                          : 'bg-stone-900 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold block">{reg.name}</span>
                        {isChecked && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                      </div>
                      <span className="text-[10px] text-stone-400 font-normal block mt-1 line-clamp-1">
                        {reg.type}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration & Travelers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-2">
                  <Calendar className="w-4 h-4" />
                  2. Trip Length: {duration} Days
                </label>
                <input
                  type="range"
                  min={3}
                  max={21}
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-stone-400 mt-1">
                  <span>3 Days (Short)</span>
                  <span>7-10 Days (Popular)</span>
                  <span>21 Days (Grand Tour)</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-2">
                  <Users className="w-4 h-4" />
                  Number of Travelers: {travelers} Guests
                </label>
                <div className="flex gap-2">
                  {[1, 2, 4, 6, 8].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setTravelers(count)}
                      className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        travelers === count
                          ? 'bg-amber-500 text-stone-950 border-amber-500'
                          : 'bg-stone-900 border-stone-800 text-stone-300 hover:bg-stone-800'
                      }`}
                    >
                      {count === 8 ? '8+' : count}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Interests */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-3">
                <Sparkles className="w-4 h-4" />
                3. Your Special Interests & Preferences
              </label>
              <div className="flex flex-wrap gap-2">
                {TRAVEL_INTERESTS.map((interest) => {
                  const active = interests.includes(interest);
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        active
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Accommodation tier */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-3">
                <Car className="w-4 h-4" />
                4. Preferred Accommodation Category
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['Cozy 3-Star & Eco Lodges', 'Boutique & 4-Star', 'Luxury 5-Star & Resorts'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setHotelType(type)}
                    className={`p-3 rounded-xl border text-xs text-center transition-all cursor-pointer ${
                      hotelType === type
                        ? 'bg-amber-500 text-stone-950 font-bold border-amber-500'
                        : 'bg-stone-900 border-stone-800 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Summary & Quote Panel */}
          <div className="lg:col-span-4 bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-amber-400 font-bold block mb-1">
                Trip Estimate Summary
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                {duration}-Day Tailored Journey
              </h3>

              <div className="mt-6 space-y-3 text-xs text-stone-300">
                <div className="flex justify-between pb-2 border-b border-stone-800">
                  <span className="text-stone-400">Duration:</span>
                  <span className="font-semibold">{duration} Days / {duration - 1} Nights</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-stone-800">
                  <span className="text-stone-400">Party Size:</span>
                  <span className="font-semibold">{travelers} Guests</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-stone-800">
                  <span className="text-stone-400">Vehicle:</span>
                  <span className="font-semibold text-amber-300">
                    {travelers <= 3 ? 'Toyota Hybrid Sedan' : travelers <= 8 ? 'Toyota High-Roof KDH Van' : 'Luxury Mini-Bus'}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-stone-800">
                  <span className="text-stone-400">Selected Stops:</span>
                  <span className="font-semibold text-right max-w-[150px] truncate">
                    {selectedRegions.length} Key Hubs
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-stone-800">
                  <span className="text-stone-400">Stay Style:</span>
                  <span className="font-semibold">{hotelType}</span>
                </div>
              </div>

              {/* Price estimation */}
              <div className="mt-6 p-4 bg-stone-950 rounded-xl border border-stone-800 text-center">
                <span className="text-[11px] text-stone-400 block font-medium">
                  Estimated indicative quote from
                </span>
                <p className="text-3xl font-extrabold text-amber-400 font-display mt-1">
                  {currencyInfo.symbol}{convertedEst.toLocaleString()}
                </p>
                <span className="text-[11px] text-stone-500 block">
                  per person ({currentCurrency}) including private car & driver
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleRequestQuote}
                className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Itinerary For Free Quote</span>
              </button>

              <a
                href={`https://wa.me/94771234567?text=Hello%20Sinha%20Tours%2C%20I%20would%20like%20a%20custom%20${duration}-day%20itinerary%20for%20${travelers}%20travelers.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Ask on WhatsApp Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
