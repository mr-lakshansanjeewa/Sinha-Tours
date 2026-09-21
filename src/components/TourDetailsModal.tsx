import React, { useState } from 'react';
import { X, Calendar, MapPin, Check, ShieldAlert, Star, Users, Phone, ArrowRight, Share2 } from 'lucide-react';
import { Currency, TourPackage } from '../types';
import { CURRENCY_RATES } from '../data/toursData';

interface TourDetailsModalProps {
  tour: TourPackage | null;
  currentCurrency: Currency;
  onClose: () => void;
  onBookTour: (tour: TourPackage) => void;
}

export const TourDetailsModal: React.FC<TourDetailsModalProps> = ({
  tour,
  currentCurrency,
  onClose,
  onBookTour,
}) => {
  if (!tour) return null;

  const [activeDay, setActiveDay] = useState(1);
  const currencyInfo = CURRENCY_RATES[currentCurrency];
  const convertedPrice = Math.round(tour.priceUSD * currencyInfo.rate);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-stone-200 my-auto flex flex-col max-h-[90vh]">
        {/* Modal Header Banner */}
        <div className="relative h-64 sm:h-80 shrink-0">
          <img
            src={tour.heroImage}
            alt={tour.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/30" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-transform hover:scale-105 cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tour Meta Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-amber-500 text-stone-950 font-bold text-xs rounded-full">
              {tour.category}
            </span>
            <span className="px-3 py-1 bg-stone-900/80 text-amber-300 text-xs rounded-full backdrop-blur-md border border-stone-700">
              {tour.durationDays} Days / {tour.durationNights} Nights
            </span>
          </div>

          {/* Headline on Banner */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-stone-300">
                {tour.rating.toFixed(1)} rating ({tour.reviewsCount} reviews)
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display leading-tight">
              {tour.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-light mt-1 line-clamp-1">
              {tour.tagline}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-8 flex-1">
          {/* Overview summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              Tour Overview
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">
              {tour.overview}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="bg-amber-50/70 border border-amber-200/70 rounded-2xl p-4 sm:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-3">
              Key Journey Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {tour.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day-by-Day Interactive Itinerary */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900">
                Detailed Day-by-Day Route ({tour.durationDays} Days)
              </h4>
              <span className="text-xs text-stone-400">Click a day to view itinerary details</span>
            </div>

            {/* Days pills selector */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {tour.itinerary.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setActiveDay(day.day)}
                  className={`px-3 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                    activeDay === day.day
                      ? 'bg-amber-500 text-stone-950 shadow-md scale-105'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  Day {day.day}: {day.location.split('/')[0]}
                </button>
              ))}
            </div>

            {/* Selected Day Details Card */}
            {tour.itinerary.find((d) => d.day === activeDay) && (
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 mt-3 animate-in fade-in">
                {(() => {
                  const current = tour.itinerary.find((d) => d.day === activeDay)!;
                  return (
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3 mb-3">
                        <div>
                          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                            Day {current.day}
                          </span>
                          <h5 className="text-base font-bold text-stone-900 font-display">
                            {current.title}
                          </h5>
                        </div>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-white rounded-lg border border-stone-200 text-stone-700">
                          <MapPin className="w-3.5 h-3.5 text-amber-600" />
                          {current.location}
                        </span>
                      </div>

                      <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                        {current.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                          Day Schedule & Visits
                        </p>
                        <div className="space-y-1">
                          {current.activities.map((act, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                              <span>{act}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-xs text-stone-500 pt-2 border-t border-stone-200 flex items-center justify-between">
                        <span>Stay / Overnight: <strong>{current.stay}</strong></span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50/60 border border-emerald-200/60 rounded-2xl p-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                What's Included
              </h5>
              <ul className="space-y-2">
                {tour.inclusions.map((inc, i) => (
                  <li key={i} className="text-xs text-emerald-950 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-stone-100 rounded-2xl p-4 border border-stone-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-3 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-stone-500" />
                What's Excluded
              </h5>
              <ul className="space-y-2">
                {tour.exclusions.map((exc, i) => (
                  <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                    <span className="text-stone-400 font-bold">•</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="border-t border-stone-200 bg-stone-50 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div>
            <p className="text-xs text-stone-500">Total Price from</p>
            <p className="text-2xl font-extrabold text-stone-900">
              {currencyInfo.symbol}{convertedPrice.toLocaleString()}{' '}
              <span className="text-xs font-normal text-stone-500">
                /{currentCurrency} (Private Vehicle & Guide)
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/94771234567?text=Hello%20Sinha%20Tours%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(tour.title)}%20tour`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookTour(tour);
              }}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Book & Customize</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
