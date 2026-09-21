import { Currency, CurrencyRate, Destination, Review, TourPackage, Vehicle } from '../types';

export const CURRENCY_RATES: Record<Currency, CurrencyRate> = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.78 },
  AUD: { symbol: 'A$', rate: 1.54 },
  LKR: { symbol: 'Rs', rate: 305 },
};

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'classic-ceylon-wonders',
    title: 'Classic Ceylon Wonders',
    tagline: 'The ultimate golden route through temples, tea estates & coastlines',
    durationDays: 7,
    durationNights: 6,
    category: 'Classic',
    heroImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588258524675-c6191ec4c4ee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    ],
    priceUSD: 850,
    rating: 4.9,
    reviewsCount: 128,
    groupType: 'Private Chauffeur Tour',
    popular: true,
    overview: 'Immerse yourself in the timeless wonders of Sri Lanka. Climb the 5th-century Sigiriya Rock Fortress, experience sacred Buddhist rituals in Kandy, ride the scenic train through mist-covered tea hills, and wander the cobblestone lanes of UNESCO-listed Galle Dutch Fort.',
    highlights: [
      'Climb the iconic Sigiriya Lion Rock at sunrise',
      'Scenic colonial train ride from Kandy to Ella',
      'Tea plantation & factory tour in Nuwara Eliya',
      'Temple of the Sacred Tooth Relic in Kandy',
      'Sunset stroll along Galle Fort ocean ramparts'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Cultural Triangle',
        location: 'Negombo / Sigiriya',
        description: 'Warm airport greeting with traditional flower garlands. Scenic drive to Sigiriya via Pinnawala or Kurunegala countryside.',
        activities: ['Airport VIP pickup', 'Scenic countryside drive', 'Evening relaxation at resort'],
        stay: 'Sigiriya Luxury Eco Lodge'
      },
      {
        day: 2,
        title: 'Sigiriya Fortress & Dambulla Cave Temple',
        location: 'Sigiriya & Dambulla',
        description: 'Early ascent of Sigiriya Rock Fortress. Afternoon visit to the ancient painted cave temple complex in Dambulla with over 150 Buddha statues.',
        activities: ['Sigiriya Fortress climb', 'Dambulla Golden Cave exploration', 'Traditional village catamaran ride & authentic curry lunch'],
        stay: 'Sigiriya Luxury Eco Lodge'
      },
      {
        day: 3,
        title: 'Spice Gardens to Sacred Kandy',
        location: 'Matale & Kandy',
        description: 'Drive toward the hill capital. Discover indigenous spices in Matale and visit the Temple of the Sacred Tooth Relic followed by a cultural Kandyan dance showcase.',
        activities: ['Matale Spice Garden tasting', 'Temple of the Tooth Relic', 'Kandyan drumming & fire-walking performance'],
        stay: 'Kandy Royal Heritage Hotel'
      },
      {
        day: 4,
        title: 'Highlands & "Little England"',
        location: 'Nuwara Eliya',
        description: 'Ascend into cool emerald tea country. Marvel at Ramboda Waterfalls and visit an authentic working Ceylon tea factory with fresh tea tasting.',
        activities: ['Ramboda Waterfalls stop', 'Ceylon tea factory & plucking session', 'Gregory Lake promenade stroll'],
        stay: 'Nuwara Eliya Colonial Manor'
      },
      {
        day: 5,
        title: 'Scenic Train to Ella & Nine Arch Bridge',
        location: 'Ella',
        description: 'Board the world-renowned blue mountain train over bridges and cloud-forest ridges to charming Ella. Sunset view at Nine Arch Bridge.',
        activities: ['Panoramic first-class blue train ride', 'Nine Arch Bridge photography', 'Cafe hopping in Ella town'],
        stay: 'Ella Mountain View Resort'
      },
      {
        day: 6,
        title: 'Waterfalls & Galle Fort Ramparts',
        location: 'Galle & Southern Coast',
        description: 'Descend past Ravana Falls towards the southern coastline. Explore the Dutch-Portuguese ramparts, boutiques, and lighthouse in historic Galle Fort.',
        activities: ['Ravana Falls viewpoint', 'Galle Fort walking tour with guide', 'Oceanfront sunset dining'],
        stay: 'Galle Coastline Boutique Hotel'
      },
      {
        day: 7,
        title: 'Coastal Drive & Airport Farewell',
        location: 'Colombo / Departure',
        description: 'Relaxed breakfast by the ocean. Optional sea turtle conservation center visit before comfortable highway transfer to Bandaranaike International Airport.',
        activities: ['Kosgoda Turtle Sanctuary', 'Colombo city highlights drive', 'Airport departure transfer'],
        stay: 'End of Tour'
      }
    ],
    inclusions: [
      'Private air-conditioned vehicle with dedicated English-speaking chauffeur guide',
      'All fuel, highway toll charges, parking fees, and driver meals/accommodations',
      'Reserved observation/first-class train tickets (Kandy to Ella)',
      'Complimentary chilled bottled water throughout the journey',
      '24/7 personal WhatsApp concierge assistance',
      'Local government tourism taxes'
    ],
    exclusions: [
      'International flight tickets and entry visa fees',
      'Monuments and site entrance tickets (unless requested bundled)',
      'Personal expenses, tips, and alcoholic beverages'
    ]
  },
  {
    id: 'wild-scenic-safari',
    title: 'Wild Sri Lanka & Safari Odyssey',
    tagline: 'Encounter wild Asian elephants, elusive leopards & azure ocean whales',
    durationDays: 8,
    durationNights: 7,
    category: 'Wildlife',
    heroImage: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    ],
    priceUSD: 1080,
    rating: 5.0,
    reviewsCount: 94,
    groupType: 'Small Group / Private 4x4',
    popular: true,
    overview: 'Sri Lanka is one of the biodiverse capitals of the world. Experience "The Gathering" of hundreds of wild elephants at Minneriya, track elusive Sri Lankan leopards and sloth bears in Yala National Park, and spot blue whales off the coast of Mirissa.',
    highlights: [
      'Private open-top 4x4 safari in Yala National Park',
      'Wild elephant gathering safari at Minneriya or Kaudulla',
      'Blue whale & dolphin watching yacht in Mirissa',
      'Udawalawe Elephant Transit Home feeding session',
      'Sinharaja Rainforest UNESCO guided trek'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Welcome to Colombo & Transfer to Habarana',
        location: 'Habarana',
        description: 'Airport pickup and journey into the heart of the central wildlife corridor.',
        activities: ['Private pickup', 'Relaxation by the jungle lake'],
        stay: 'Cinnamon Lodge Habarana'
      },
      {
        day: 2,
        title: 'Minneriya Wild Elephant Gathering',
        location: 'Minneriya National Park',
        description: 'Afternoon 4x4 safari witnessing great herds of Asian elephants around the reservoir.',
        activities: ['Afternoon 4x4 Jeep Safari', 'Birdwatching for kingfishers and eagles'],
        stay: 'Cinnamon Lodge Habarana'
      },
      {
        day: 3,
        title: 'Highlands to Udawalawe',
        location: 'Udawalawe',
        description: 'Journey down to Udawalawe. Visit the famed baby elephant rehabilitation home.',
        activities: ['Udawalawe Elephant Transit Home', 'Sunset lake safari'],
        stay: 'Grand Udawalawe Safari Resort'
      },
      {
        day: 4,
        title: 'Yala National Park Leopard Territory',
        location: 'Yala',
        description: 'Enter the world\'s highest leopard density sanctuary with expert wildlife tracker.',
        activities: ['Evening game drive in Yala Block 1', 'Campfire dinner under tropical stars'],
        stay: 'Yala Luxury Tented Safari Camp'
      },
      {
        day: 5,
        title: 'Dawn Safari & Southern Coastline',
        location: 'Yala to Mirissa',
        description: 'Early morning game drive for active predators, followed by a scenic drive to Mirissa beach.',
        activities: ['Dawn wildlife safari', 'Afternoon beach relaxation at Coconut Tree Hill'],
        stay: 'Mirissa Oceanfront Beach Resort'
      },
      {
        day: 6,
        title: 'Mirissa Blue Whale Cruise',
        location: 'Mirissa',
        description: 'Morning ocean cruise on the Indian Ocean spotting majestic blue whales and spinner dolphins.',
        activities: ['Responsible whale watching voyage', 'Seafood beach barbecue dinner'],
        stay: 'Mirissa Oceanfront Beach Resort'
      },
      {
        day: 7,
        title: 'Galle Dutch Fort & Mangrove River Safari',
        location: 'Bentota & Galle',
        description: 'Boutique river boat safari through Madu Ganga mangrove islands and Galle Fort sunset.',
        activities: ['Madu Ganga river boat safari', 'Galle Lighthouse sunset stroll'],
        stay: 'Bentota Beach Club & Spa'
      },
      {
        day: 8,
        title: 'Colombo City & Departure',
        location: 'Colombo',
        description: 'Colombo historic landmarks drive, Dutch Hospital shopping, and airport drop-off.',
        activities: ['Dutch Hospital dining', 'Airport departure farewell'],
        stay: 'End of Tour'
      }
    ],
    inclusions: [
      'Private air-conditioned SUV/Van throughout itinerary',
      'Exclusive private 4x4 safari jeeps with national park trackers',
      'Minneriya & Yala National Park entrance tickets included',
      'Mirissa whale watching expedition tickets',
      'Dedicated private chauffeur with wildlife spotting expertise'
    ],
    exclusions: ['International airfare', 'Alcoholic beverages', 'Personal tipping']
  },
  {
    id: 'heritage-cultural-triangle',
    title: 'Sacred Kingdoms & Ancient Heritage',
    tagline: 'Discover 2,500 years of royal kingdoms, giant stupas & jungle temples',
    durationDays: 5,
    durationNights: 4,
    category: 'Cultural',
    heroImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    ],
    priceUSD: 590,
    rating: 4.8,
    reviewsCount: 76,
    groupType: 'Private Cultural Tour',
    overview: 'Walk in the footsteps of ancient kings across the Sacred Triangle. From Anuradhapura\'s 2,000-year-old Sri Maha Bodhi tree to the royal palaces of Polonnaruwa and the cave frescoes of Dambulla.',
    highlights: [
      'Anuradhapura ancient ruins & giant white Ruwanwelisaya stupa',
      'Polonnaruwa medieval royal city by bicycle or car',
      'Sigiriya Lion Rock Fortress palace in the clouds',
      'Dambulla Golden Cave Temple sacred frescoes',
      'Kandy sacred tooth relic evening puja ceremony'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Anuradhapura First Kingdom',
        location: 'Anuradhapura',
        description: 'Explore the oldest living sacred tree in recorded history and gigantic brick dagobas.',
        activities: ['Sri Maha Bodhi tree', 'Ruwanwelisaya stupa', 'Jetavanaramaya ancient monastery'],
        stay: 'Heritage Hotel Anuradhapura'
      },
      {
        day: 2,
        title: 'Mihintale Cradle of Buddhism & Polonnaruwa',
        location: 'Polonnaruwa',
        description: 'Climb Mihintale rock stairs, then visit the medieval stone sculptures of Gal Vihara.',
        activities: ['Mihintale panoramic stairs', 'Gal Vihara colossal Buddha statues', 'Parakrama Samudra lake sunset'],
        stay: 'Deer Park Resort Giritale'
      },
      {
        day: 3,
        title: 'Sigiriya Rock Fortress & Village Culture',
        location: 'Sigiriya',
        description: 'Scale the legendary fifth-century citadel and taste organic Sri Lankan village cooking.',
        activities: ['Sigiriya Lion Rock climb', 'Hiriwadunna village ox-cart & canoe experience'],
        stay: 'Sigiriya Village Resort'
      },
      {
        day: 4,
        title: 'Dambulla Caves & Royal Kandy',
        location: 'Kandy',
        description: 'Marvel at 150+ gilded Buddha statues inside cliffside caves, then head to Kandy.',
        activities: ['Dambulla Caves', 'Spice Garden Matale', 'Temple of the Tooth puja blessing'],
        stay: 'Thilanka Hotel Kandy'
      },
      {
        day: 5,
        title: 'Peradeniya Botanical Gardens & Departure',
        location: 'Colombo / Airport',
        description: 'Stroll through the royal orchid collection in Peradeniya before airport transfer.',
        activities: ['Royal Botanical Gardens Peradeniya', 'Return drive to airport'],
        stay: 'End of Tour'
      }
    ],
    inclusions: [
      'Private AC transport with experienced cultural chauffeur guide',
      'All toll, fuel, and parking fees',
      'Chilled mineral water and cold towels daily'
    ],
    exclusions: ['Site entrance fees', 'Meals not mentioned', 'Gratuities']
  },
  {
    id: 'southern-surf-coastal-bliss',
    title: 'Southern Coastlines & Ocean Vibe',
    tagline: 'Golden sands, surfing swells, sea turtles & coastal colonial charm',
    durationDays: 6,
    durationNights: 5,
    category: 'Beach & Coastal',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    ],
    priceUSD: 720,
    rating: 4.9,
    reviewsCount: 88,
    groupType: 'Couples / Friends Beach Tour',
    overview: 'Relax and unwind along Sri Lanka\'s palm-fringed southern coastline. From surfing the mellow breaks of Weligama to watching stilt fishermen in Koggala and enjoying seafood dinners inside Galle Fort.',
    highlights: [
      'Galle Dutch Fort UNESCO historic ramparts & gelato cafes',
      'Beginner or intermediate surf session at Weligama bay',
      'Sunset photos at iconic Coconut Tree Hill Mirissa',
      'Sea turtle conservation project and release',
      'Koggala lake stilt fishermen experience'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Airport to Bentota Golden Beach',
        location: 'Bentota',
        description: 'Express highway transfer to golden sands. Watersports and sunset dinner by the sea.',
        activities: ['Beach sunset welcome', 'Seafood barbecue dinner'],
        stay: 'Bentota Beachfront Resort'
      },
      {
        day: 2,
        title: 'Madu River Safari & Cinnamon Island',
        location: 'Balapitiya & Hikkaduwa',
        description: 'Boat safari through 64 islands, cinnamon peeling demonstration, and coral snorkeling.',
        activities: ['Madu Ganga boat safari', 'Snorkeling at Hikkaduwa coral sanctuary'],
        stay: 'Hikkaduwa Surf & Beach Hotel'
      },
      {
        day: 3,
        title: 'Galle Fort & Unawatuna Bay',
        location: 'Galle',
        description: 'Cobblestone streets, art galleries, boutique shopping, and swim at Jungle Beach.',
        activities: ['Galle Fort architecture walk', 'Jungle Beach swimming'],
        stay: 'Galle Heritage Villa'
      },
      {
        day: 4,
        title: 'Weligama Surf & Mirissa Sunset',
        location: 'Mirissa',
        description: 'Private surf lesson with certified instructor, followed by Coconut Tree Hill viewpoint.',
        activities: ['Surf lesson in Weligama', 'Coconut Tree Hill photography'],
        stay: 'Mirissa Palms Beach Hotel'
      },
      {
        day: 5,
        title: 'Whale Watching & Coastal Leisure',
        location: 'Mirissa & Hiriketiya',
        description: 'Morning ocean cruise, then drive to the horseshoe bay of Hiriketiya for beach vibes.',
        activities: ['Whale watching cruise', 'Hiriketiya horseshoe bay sunset'],
        stay: 'Hiriketiya Beach Boutique'
      },
      {
        day: 6,
        title: 'Scenic Return & Airport Drop-off',
        location: 'Colombo',
        description: 'Express coastal highway return with optional Colombo city souvenir shopping.',
        activities: ['Barefoot / Laksala handicraft shopping', 'Airport departure'],
        stay: 'End of Tour'
      }
    ],
    inclusions: [
      'Private air-conditioned car with dedicated chauffeur guide',
      'All toll, fuel, and parking fees',
      'Surfboard rental & 1-hour coaching session included'
    ],
    exclusions: ['Meals other than breakfast', 'Tips', 'Flight tickets']
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya & Cultural Triangle',
    region: 'Central North',
    tagline: 'Ancient 5th-century palace atop a 200m monolithic rock',
    description: 'Known as the 8th Wonder of the World, Sigiriya features magnificent frescoes, water gardens, and the colossal carved paws of a lion guarding the summit stairs.',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    weather: '28°C - 33°C (Tropical Sunny)',
    bestMonths: 'January – September',
    topAttractions: ['Lion Rock Fortress', 'Pidurangala Sunset Rock', 'Dambulla Golden Cave Temple', 'Minneriya Wild Elephant Safari']
  },
  {
    id: 'ella',
    name: 'Ella & The Hill Country',
    region: 'Central Highlands',
    tagline: 'Misty tea plantations, waterfalls & the famous Nine Arch Bridge',
    description: 'A paradise nestled in the clouds. Famous for lush green tea hills, the iconic British colonial railway bridge, hiking Little Adam\'s Peak, and cool mountain breezes.',
    image: 'https://images.unsplash.com/photo-1588258524675-c6191ec4c4ee?auto=format&fit=crop&w=800&q=80',
    weather: '18°C - 24°C (Cool & Fresh)',
    bestMonths: 'Year-round (Best Dec – April)',
    topAttractions: ['Nine Arch Bridge', 'Little Adam\'s Peak', 'Ravana Falls', 'Scenic Train Journey', 'Lipton\'s Seat']
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    region: 'Southern Province',
    tagline: 'The world\'s premier sanctuary for the elusive Sri Lankan Leopard',
    description: 'Spanning golden scrublands, coastal lagoons, and rocky outcrops, Yala is home to leopards, Asian elephants, sloth bears, spotted deer, and hundreds of migratory birds.',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=800&q=80',
    weather: '27°C - 34°C (Warm & Dry)',
    bestMonths: 'February – July',
    topAttractions: ['Leopard Safari Drives', 'Elephant Herds', 'Kumbukkan Oya River', 'Patanangala Beach', 'Sithulpawwa Rock Temple']
  },
  {
    id: 'galle',
    name: 'Galle & Southern Coast',
    region: 'Southern Province',
    tagline: 'Colonial Dutch ramparts, ocean lighthouses & vibrant beach life',
    description: 'A living UNESCO World Heritage fortress with Dutch colonial architecture, boutique jewelry shops, artistic cafes, and dramatic ocean wave breaks at sunset.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    weather: '26°C - 31°C (Coastal Warm)',
    bestMonths: 'November – April',
    topAttractions: ['Galle Lighthouse', 'Dutch Fort Ramparts', 'Unawatuna Beach', 'Mirissa Whale Watching', 'Stilt Fishermen']
  },
  {
    id: 'kandy',
    name: 'Kandy Sacred City',
    region: 'Central Province',
    tagline: 'Spiritual capital surrounded by mist-veiled mountain ranges',
    description: 'The final royal capital of ancient kings. Houses the sacred Tooth Relic of Gautama Buddha, peaceful Kandy Lake, and the royal Peradeniya botanical gardens.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
    weather: '22°C - 28°C (Pleasant)',
    bestMonths: 'December – May',
    topAttractions: ['Temple of the Tooth Relic', 'Kandy Lake Walk', 'Royal Botanical Gardens', 'Kandyan Cultural Dance', 'Bahirawakanda Buddha']
  }
];

export const VEHICLE_FLEET: Vehicle[] = [
  {
    id: 'sedan',
    name: 'Toyota Prius / Axio Hybrid',
    type: 'Comfort Sedan',
    capacity: '1 - 3 Passengers',
    luggage: '2 Large + 2 Small Bags',
    features: ['Dual AC climate control', 'Leather interior', 'USB charging points', 'Complimentary WiFi & water', 'Experienced English chauffeur'],
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    idealFor: 'Solo travelers, couples & small families'
  },
  {
    id: 'van',
    name: 'Toyota KDH High-Roof Luxury Van',
    type: 'Spacious Mini-Van',
    capacity: '4 - 8 Passengers',
    luggage: '6 Large + 5 Small Bags',
    features: ['Reclining plush seats', 'Individual overhead AC vents', 'High-roof extra headroom', 'Tinted UV windows', 'Ample luggage space'],
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    idealFor: 'Family vacations, small groups & photography tours'
  },
  {
    id: 'suv',
    name: 'Toyota Prado / Land Cruiser SUV',
    type: 'Executive 4WD SUV',
    capacity: '1 - 4 Passengers',
    luggage: '3 Large Bags',
    features: ['Luxury leather comfort', 'Rugged 4WD capability', 'Panoramic views', 'Premium sound system', 'VIP executive chauffeur'],
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    idealFor: 'Luxury honeymooners & rugged hill country exploration'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Charlotte & David Hughes',
    country: 'United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'February 2026',
    tourTaken: 'Classic Ceylon Wonders (7 Days)',
    comment: 'Sinha Tours made our honeymoon in Sri Lanka absolutely magical! Our chauffeur guide was patient, knowledgeable, and always found the best local tea shops and viewpoint stops before crowds arrived. The blue train ride and Sigiriya climb were unforgettable.'
  },
  {
    id: 'rev-2',
    name: 'Markus Weber',
    country: 'Germany',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'January 2026',
    tourTaken: 'Wild Sri Lanka & Safari Odyssey (8 Days)',
    comment: 'Top notch service from airport arrival to departure. We saw three leopards in Yala and dozens of elephants in Minneriya! The vehicle was clean, air conditioning was great, and we felt 100% safe and welcomed everywhere.'
  },
  {
    id: 'rev-3',
    name: 'Elena & Sophie Martin',
    country: 'France',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'March 2026',
    tourTaken: 'Southern Coastlines & Ocean Vibe (6 Days)',
    comment: 'Traveling as two female solo travelers, safety and comfort were our top priorities. Sinha Tours was impeccably professional, warm, and responsive on WhatsApp. The surf lessons and sunset in Galle Fort will stay in our hearts forever.'
  }
];
