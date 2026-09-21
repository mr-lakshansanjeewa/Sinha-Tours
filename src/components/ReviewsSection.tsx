import React from 'react';
import { Star, CheckCircle, Award } from 'lucide-react';
import { REVIEWS } from '../data/toursData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-500/30 mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>5-Star Travel Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white mb-4">
            Words from Our Global Travelers
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light">
            We treat every guest like family. Read authentic reviews from travelers who explored Sri Lanka with Sinha Tours.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-stone-950 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-colors shadow-lg"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-stone-300 italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-4 border-t border-stone-800 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-500/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <p className="text-xs text-stone-400">
                    {review.country} • {review.tourTaken}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Ratings Callout */}
        <div className="mt-12 bg-stone-950/60 border border-stone-800 rounded-2xl p-6 max-w-2xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <span className="text-3xl font-extrabold text-amber-400 font-display">4.9 / 5.0</span>
            <p className="text-xs text-stone-400 mt-0.5">Average Customer Rating</p>
          </div>
          <div className="h-10 w-px bg-stone-800 hidden sm:block" />
          <div>
            <span className="text-3xl font-extrabold text-white font-display">100%</span>
            <p className="text-xs text-stone-400 mt-0.5">Tailor-Made Satisfaction</p>
          </div>
          <div className="h-10 w-px bg-stone-800 hidden sm:block" />
          <div>
            <span className="text-3xl font-extrabold text-emerald-400 font-display">24 / 7</span>
            <p className="text-xs text-stone-400 mt-0.5">On-Tour WhatsApp Concierge</p>
          </div>
        </div>
      </div>
    </section>
  );
};
