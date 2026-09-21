import React, { useState } from 'react';
import { Compass, Menu, X, Phone, MessageCircle, Globe, ChevronDown } from 'lucide-react';
import { Currency } from '../types';
import { CURRENCY_RATES } from '../data/toursData';

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenBooking: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenBooking,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const navItems = [
    { id: 'tours', label: 'Tours & Packages' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'custom-planner', label: 'Custom Itinerary' },
    { id: 'fleet', label: 'Chauffeur & Fleet' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-all">
      {/* Top micro-bar for quick contact */}
      <div className="hidden md:flex justify-between items-center px-6 py-1.5 bg-stone-950 text-xs text-stone-400 border-b border-stone-800/80">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5 text-amber-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Govt. Licensed Sri Lanka Tour Operator (SLTDA Reg.)
          </span>
          <span className="hover:text-stone-200 transition-colors">
            24/7 WhatsApp Concierge Support
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/94771234567?text=Hello%20Sinha%20Tours%2C%20I%20would%20like%20to%20inquire%20about%20a%20Sri%20Lanka%20tour"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            +94 77 123 4567
          </a>
          <span className="text-stone-700">|</span>
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            info@sinhatours.com
          </span>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center space-x-3 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-950/40 text-stone-950 group-hover:scale-105 transition-transform">
            <Compass className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight font-display text-white">
                SINHA
              </span>
              <span className="text-xl font-light tracking-wide text-amber-400 font-display">
                TOURS
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium -mt-1">
              Sri Lanka Expeditions
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeSection === item.id
                  ? 'text-amber-400 bg-stone-800/80 font-semibold'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions & Currency Switcher */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-stone-800 hover:bg-stone-700/80 rounded-lg text-stone-200 border border-stone-700 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentCurrency} ({CURRENCY_RATES[currentCurrency].symbol})</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
            </button>

            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-stone-900 border border-stone-700 rounded-xl shadow-xl py-1 z-50 animate-in fade-in">
                {(Object.keys(CURRENCY_RATES) as Currency[]).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      onCurrencyChange(curr);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                      currentCurrency === curr
                        ? 'bg-amber-500/10 text-amber-400 font-bold'
                        : 'text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    <span>{curr}</span>
                    <span className="text-stone-400">{CURRENCY_RATES[curr].symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Book / Inquire Button */}
          <button
            onClick={onOpenBooking}
            className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-semibold text-sm rounded-lg shadow-md shadow-amber-900/30 transition-all hover:shadow-amber-500/20 active:scale-95 cursor-pointer"
          >
            Plan Your Tour
          </button>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
            className="p-2 text-stone-300 bg-stone-800 rounded-lg text-xs font-semibold"
          >
            {currentCurrency}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-stone-200 hover:bg-stone-800 hover:text-amber-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 text-sm text-stone-400">
              <span>Currency</span>
              <div className="flex gap-1.5">
                {(Object.keys(CURRENCY_RATES) as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => onCurrencyChange(c)}
                    className={`px-2.5 py-1 text-xs rounded-md ${
                      currentCurrency === c
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-800 text-stone-300'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-amber-500 text-stone-950 font-bold rounded-lg text-center"
            >
              Plan Your Tour With Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
