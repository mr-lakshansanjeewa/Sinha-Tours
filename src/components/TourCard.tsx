import React from 'react';
import { Calendar, Clock, Star, Users, ArrowRight, Check } from 'lucide-react';
import { Currency, TourPackage } from '../types';
import { CURRENCY_RATES } from '../data/toursData';

interface TourCardProps {
  tour: TourPackage;
  currentCurrency: Currency;
  onSelectTour: (tour: TourPackage) => void;
  onBookTour: (tour: TourPackage) => void;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  currentCurrency,
  onSelectTour,
  onBookTour,
}) => {
  const currencyInfo = CURRENCY_RATES[currentCurrency];
  const convertedPrice = Math.round(tour.priceUSD * currencyInfo.rate);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.heroImage}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />

        {/* Category & Badge */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-3 py-1 bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-semibold rounded-full border border-stone-700">
            {tour.category}
          </span>
          {tour.popular && (
            <span className="px-3 py-1 bg-amber-500 text-stone-950 text-xs font-bold rounded-full shadow">
              Most Popular
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg text-xs font-bold text-stone-900 shadow">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span>{tour.rating.toFixed(1)}</span>
          <span className="text-stone-400 font-normal">({tour.reviewsCount})</span>
        </div>

        {/* Bottom Title on Image */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <p className="text-xs uppercase tracking-wider text-amber-300 font-medium">
            {tour.groupType}
          </p>
          <h3 className="text-xl font-bold font-display leading-tight line-clamp-1">
            {tour.title}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Duration & Tagline */}
        <div>
          <div className="flex items-center gap-4 text-xs font-medium text-stone-500 mb-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-600" />
              {tour.durationDays} Days / {tour.durationNights} Nights
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-amber-600" />
              Private Guide & Chauffeur
            </span>
          </div>

          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {tour.tagline}
          </p>
        </div>

        {/* Highlights List */}
        <div className="bg-stone-50 rounded-xl p-3 border border-stone-100 space-y-1.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
            Trip Highlights
          </p>
          {tour.highlights.slice(0, 3).map((hl, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{hl}</span>
            </div>
          ))}
        </div>

        {/* Price and Buttons */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-stone-400 block font-medium">From per person</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-stone-900">
                {currencyInfo.symbol}{convertedPrice.toLocaleString()}
              </span>
              <span className="text-xs text-stone-500 font-normal">/{currentCurrency}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectTour(tour)}
              className="px-3.5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              View Plan
            </button>
            <button
              onClick={() => onBookTour(tour)}
              className="px-4 py-2 text-xs font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
