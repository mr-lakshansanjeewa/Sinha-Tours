import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TourCard } from './components/TourCard';
import { TourDetailsModal } from './components/TourDetailsModal';
import { DestinationsGrid } from './components/DestinationsGrid';
import { CustomPlanner } from './components/CustomPlanner';
import { FleetSection } from './components/FleetSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { Watermark } from './components/Watermark';
import { TOUR_PACKAGES } from './data/toursData';
import { Currency, Destination, TourPackage, Vehicle } from './types';
import { Filter, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('USD');
  const [activeSection, setActiveSection] = useState('tours');
  const [selectedTourForModal, setSelectedTourForModal] = useState<TourPackage | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPreselectedTour, setBookingPreselectedTour] = useState<TourPackage | null>(null);
  const [bookingPreselectedVehicle, setBookingPreselectedVehicle] = useState<Vehicle | null>(null);
  const [customPlannerSummary, setCustomPlannerSummary] = useState<string>('');

  // Tour Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSearch = (filters: { category: string; duration: string }) => {
    setSelectedCategory(filters.category);
    // filter logic is reflected in the tours section
  };

  const handleOpenBooking = (tour?: TourPackage) => {
    setBookingPreselectedTour(tour || null);
    setBookingPreselectedVehicle(null);
    setCustomPlannerSummary('');
    setBookingModalOpen(true);
  };

  const handleBookFromCard = (tour: TourPackage) => {
    setBookingPreselectedTour(tour);
    setBookingPreselectedVehicle(null);
    setCustomPlannerSummary('');
    setBookingModalOpen(true);
  };

  const handlePlanForDestination = (dest: Destination) => {
    setBookingPreselectedTour(null);
    setBookingPreselectedVehicle(null);
    setCustomPlannerSummary(`I would love to customize an itinerary that features ${dest.name} (${dest.region}).`);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithCustom = (summary: string) => {
    setBookingPreselectedTour(null);
    setBookingPreselectedVehicle(null);
    setCustomPlannerSummary(summary);
    setBookingModalOpen(true);
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setBookingPreselectedTour(null);
    setBookingPreselectedVehicle(vehicle);
    setCustomPlannerSummary(`Inquiry for chauffeur hire with ${vehicle.name} (${vehicle.type}).`);
    setBookingModalOpen(true);
  };

  // Filtered tours calculation
  const filteredTours = TOUR_PACKAGES.filter((tour) => {
    const matchesCategory =
      selectedCategory === 'All' || tour.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase())) ||
      tour.overview.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Classic', 'Wildlife', 'Cultural', 'Beach & Coastal'];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col selection:bg-amber-500 selection:text-stone-950">
      {/* Navigation */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* Hero Section with Search Bar */}
        <Hero
          onSearch={handleHeroSearch}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Featured Tours & Packages Section */}
        <section id="tours" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                Handcrafted Round-Island Itineraries
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-stone-900">
                Signature Tour Packages
              </h2>
            </div>

            <p className="text-sm text-stone-600 max-w-md font-light">
              All tours include private air-conditioned vehicle transport, professional English-speaking chauffeur guide, fuel, and dedicated concierge assistance.
            </p>
          </div>

          {/* Category Tabs & Quick Search */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                      : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${TOUR_PACKAGES.length})` : ''}
                </button>
              ))}
            </div>

            {/* Quick Text Filter */}
            <div className="w-full sm:w-64">
              <input
                type="text"
                placeholder="Search packages, e.g. Sigiriya..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 bg-white border border-stone-300 rounded-xl text-xs focus:outline-none focus:border-amber-500 text-stone-800"
              />
            </div>
          </div>

          {/* Tours Grid */}
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  currentCurrency={currentCurrency}
                  onSelectTour={(t) => setSelectedTourForModal(t)}
                  onBookTour={(t) => handleBookFromCard(t)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
              <p className="text-base text-stone-600 mb-4">
                No tours matched your selected filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-amber-500 text-stone-950 font-bold rounded-xl text-xs"
              >
                Reset Tour Filters
              </button>
            </div>
          )}
        </section>

        {/* Destinations Explorer */}
        <DestinationsGrid onPlanForDestination={handlePlanForDestination} />

        {/* Bespoke Interactive Itinerary Builder */}
        <CustomPlanner
          currentCurrency={currentCurrency}
          onOpenBookingWithCustom={handleOpenBookingWithCustom}
        />

        {/* Chauffeur & Vehicle Fleet */}
        <FleetSection onSelectVehicle={handleSelectVehicle} />

        {/* Verified Reviews */}
        <ReviewsSection />
      </main>

      {/* Footer & Contacts */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Tour Itinerary Details Modal */}
      <TourDetailsModal
        tour={selectedTourForModal}
        currentCurrency={currentCurrency}
        onClose={() => setSelectedTourForModal(null)}
        onBookTour={(tour) => {
          setSelectedTourForModal(null);
          handleBookFromCard(tour);
        }}
      />

      {/* Booking / Inquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedTour={bookingPreselectedTour}
        preselectedVehicle={bookingPreselectedVehicle}
        customSummary={customPlannerSummary}
      />

      {/* Page Ownership Watermark */}
      <Watermark />
    </div>
  );
}
