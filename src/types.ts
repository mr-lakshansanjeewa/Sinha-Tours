export type Currency = 'USD' | 'EUR' | 'GBP' | 'AUD' | 'LKR';

export interface CurrencyRate {
  symbol: string;
  rate: number; // relative to USD
}

export interface TourPackage {
  id: string;
  title: string;
  tagline: string;
  durationDays: number;
  durationNights: number;
  category: 'Classic' | 'Wildlife' | 'Cultural' | 'Adventure' | 'Beach & Coastal';
  heroImage: string;
  gallery: string[];
  priceUSD: number;
  rating: number;
  reviewsCount: number;
  groupType: string;
  overview: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    location: string;
    description: string;
    activities: string[];
    stay: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  popular?: boolean;
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  image: string;
  weather: string;
  bestMonths: string;
  topAttractions: string[];
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: string;
  luggage: string;
  features: string[];
  image: string;
  idealFor: string;
}

export interface Review {
  id: string;
  name: string;
  country: string;
  avatar: string;
  rating: number;
  date: string;
  tourTaken: string;
  comment: string;
}

export interface BookingInquiry {
  tourId?: string;
  tourTitle?: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  travelDate: string;
  adultsCount: number;
  childrenCount: number;
  vehiclePreference?: string;
  specialRequests?: string;
}
