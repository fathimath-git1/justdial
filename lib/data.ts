import type {
  Category,
  CardItem,
  TravelModeItem,
  City,
  TouristPlace,
  PopularSearchItem,
  MovieItem,
  NewsItem,
  FooterLink,
} from "./types";

export const cities: string[] = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Kochi",
  "Kozhikode",
  "Thiruvananthapuram",
  "Lucknow",
  "Jaipur",
  "Chandigarh",
  "Surat",
];

export const popularCities: string[] = [
  "Bangalore", "Mumbai", "Chennai", "Delhi", "Hyderabad", "Pune", "Ahmedabad",
  "Lucknow", "Patna", "Jaipur", "Indore", "Kochi", "Kolkata", "Coimbatore",
  "Nagpur", "Ludhiana", "Agra", "Bhubaneshwar", "Bhopal", "Guwahati", "Surat",
  "Madurai", "Visakhapatnam", "Sonepat", "Vadodara", "Meerut", "Thiruvananthapuram",
  "Gurgaon", "Kozhikode", "Varanasi", "Siliguri", "Allahabad", "Rajkot",
  "Ghaziabad", "Mysore", "Noida", "Chandigarh", "Navi Mumbai", "Vijayawada",
  "Durgapur", "Srinagar", "Nashik", "Panipat", "Jammu", "Jodhpur",
  "Udaipur-Rajasthan", "Thane", "Raipur-Chhattisgarh", "Amritsar", "Jabalpur",
];

// Primary top row of category icons (matches hero category strip)
export const topCategories: Category[] = [
  { title: "Restaurants", iconKey: "utensils" },
  { title: "Hotels", iconKey: "hotel" },
  { title: "Beauty Spa", iconKey: "sparkles" },
  { title: "Home Decor", iconKey: "armchair" },
  { title: "Ask Astro", iconKey: "sun", badge: "Beta" },
  { title: "Wedding Planning", iconKey: "heart" },
  { title: "Education", iconKey: "graduation-cap" },
  { title: "Rent & Hire", iconKey: "key" },
  { title: "Hospitals", iconKey: "building-2" },
  { title: "Contractors", iconKey: "hard-hat" },
];

// Second row (revealed / used on scroll-fixed strip)
export const secondaryCategories: Category[] = [
  { title: "Pet Shops", iconKey: "dog" },
  { title: "PG/Hostels", iconKey: "bed-double" },
  { title: "Estate Agent", iconKey: "home" },
  { title: "Dentists", iconKey: "smile" },
  { title: "Gym", iconKey: "dumbbell" },
  { title: "Loans", iconKey: "landmark" },
  { title: "Event Organisers", iconKey: "party-popper" },
  { title: "Driving Schools", iconKey: "car" },
  { title: "Packers & Movers", iconKey: "truck" },
  { title: "Popular Categories", iconKey: "menu" },
];

export const heroBanners = [
  {
    title: "Time to fly at Lowest Airfares",
    subtitle: "Powered by EaseMyTrip.com",
    cta: "Book Now",
    gradient: "from-sky-300 via-sky-200 to-sky-100",
  },
  {
    title: "List your Business for Free",
    subtitle: "Get more customers with Justdial",
    cta: "Get Started",
    gradient: "from-orange-300 via-orange-200 to-orange-100",
  },
  {
    title: "Best Deals near you",
    subtitle: "Compare & Save on every purchase",
    cta: "Explore",
    gradient: "from-emerald-300 via-emerald-200 to-emerald-100",
  },
];

export const promoCards: CardItem[] = [
  { title: "B2B", gradient: "from-blue-700 to-blue-500", emoji: "🤝" },
  { title: "REPAIRS & SERVICES", gradient: "from-indigo-800 to-indigo-500", emoji: "🔧" },
  { title: "REAL ESTATE", gradient: "from-violet-700 to-violet-400", emoji: "🏢" },
  { title: "DOCTORS", gradient: "from-emerald-700 to-emerald-500", emoji: "🩺" },
];

export const weddingRequisites: CardItem[] = [
  { title: "Banquet Halls", image: "/images/categories/banquet-halls.png" },
  { title: "Bridal Requisite", image: "/images/categories/bridal-requisite.jpg" },
  { title: "Caterers", image: "/images/categories/caterers.jpg" },
];

export const beautySpa: CardItem[] = [
  { title: "Beauty Parlours", image: "/images/categories/beauty-parlours.jpg" },
  { title: "Spa & Massages", image: "/images/categories/spa-massages.jpg" },
  { title: "Salons", image: "/images/categories/salons.jpg" },
];

export const repairsServices: CardItem[] = [
  { title: "AC Service", image: "/images/categories/ac-service.jpg" },
  { title: "Car Service", image: "/images/categories/car-service.jpg" },
  { title: "Bike Service", image: "/images/categories/bike-service.jpg" },
];

export const dailyNeeds: CardItem[] = [
  { title: "Movies", image: "/images/categories/movies.jpg" },
  { title: "Grocery", image: "/images/categories/grocery.jpg" },
  { title: "Electricians", image: "/images/categories/electricians.jpg" },
];

export const travelModes: TravelModeItem[] = [
  { title: "Flight", note: "Powered By Easemytrip.com", image: "/images/travel/flight.png" },
  { title: "Bus", note: "Affordable Rides", image: "/images/travel/bus.png" },
  { title: "Train", note: "", image: "/images/travel/train.png" },
  { title: "Hotel", note: "Budget-friendly Stay", image: "/images/travel/hotel.png" },
  { title: "Car Rentals", note: "Drive Easy Anywhere", image: "/images/travel/car-rentals.png" },
];

export const trendingSearchesNearYou: PopularSearchItem[] = [
  { title: "Beauty Parlours", cta: "Explore", image: "/images/trending/beauty-parlours.jpg" },
  { title: "Paying Guest Accommodations...", cta: "Explore", image: "/images/trending/pg-accommodations.jpg" },
  { title: "Income Tax Consultants", cta: "Explore", image: "/images/trending/income-tax.jpg" },
  { title: "Mehendi Artists At Home", cta: "Explore", image: "/images/trending/mehendi.jpg" },
];

export const latestMovies: MovieItem[] = [
  { title: "Bethlehem Kudumba Unit (Malayalam Movie)", lang: "Malayalam · 2D", rating: 80, image: "/images/movies/bethlehem-kudumba-unit.jpg" },
  { title: "Pradhama Drishtiya Kuttakkar (Malayalam Movie)", lang: "Malayalam · 2D", image: "/images/movies/pradhama-drishtiya-kuttakkar.jpg" },
  { title: "Mandaadi (Tamil Movie)", lang: "Tamil · 2D", rating: 84, image: "/images/movies/mandaadi.jpg" },
  { title: "Ottam Thullal (Malayalam Movie)", lang: "Malayalam · 2D", image: "/images/movies/ottam-thullal.jpg" },
  { title: "Aasha (2026 Film) (Malayalam Movie)", lang: "Malayalam · 2D", image: "/images/movies/aasha.jpg" },
];

export const touristPlaces: TouristPlace[] = [
  { name: "Ooty", image: "/images/tourist/ooty.jpg" },
  { name: "Coimbatore", image: "/images/tourist/coimbatore.jpg" },
  { name: "Coorg", image: "/images/tourist/coorg.jpg" },
  { name: "Munnar", image: "/images/tourist/munnar.jpg" },
  { name: "Wayanad", image: "/images/tourist/wayanad.jpg" },
];

export const popularSearches: PopularSearchItem[] = [
  { title: "Solar Panel Dealers", cta: "Enquire Now", image: "/images/popular/solar-panel.jpg" },
  { title: "Beauty Parlours", cta: "Enquire Now", image: "/images/popular/beauty-parlours.jpg" },
  { title: "Home Nursing Services", cta: "Explore", image: "/images/popular/home-nursing.jpg" },
  { title: "Dentists", cta: "Explore", image: "/images/popular/dentists.jpg" },
  { title: "Travel Agents", cta: "Explore", image: "/images/popular/travel-agents.jpg" },
];

export const newsItems: NewsItem[] = [
  { title: "Mysterious radio signal coming from planet outside Solar System for first time", source: "India Today", image: "/images/news/radio-signal.jpg" },
  { title: "Albanese slams OpenAI over Medicare portal breach disclosure delay", source: "India Today", image: "/images/news/albanese-openai.jpg", overlay: "INDIA TODAY | PTI: International" },
  { title: "Rahul Gandhi dials Sahil Wakode's family, assures support in fight for justice", source: "India Today", image: "/images/news/rahul-gandhi.jpg" },
];

export const servicesGrid = [
  {
    title: "Jobs",
    iconKey: "briefcase",
    desc: "Providing pertinent jobs to job seekers and relevant profiles to employers, this service will help you reach out to employers and vice-versa across industry verticals, experience levels and geographies.",
  },
  {
    title: "Movies",
    iconKey: "clapperboard",
    desc: "This gives you access to book tickets and keep updated with the latest movies. With the provision of a synopsis, cast, crew and trailer, you can make a better choice in the movie you would like to watch.",
  },
  {
    title: "Spa & Salon",
    iconKey: "sparkles",
    desc: "Skip the wait to get pampered at a spa or a salon. In a few clicks, 'Book an Appointment' online through Justdial before your next visit.",
  },
  {
    title: "Repair & Services",
    iconKey: "wrench",
    desc: "Find the 'Best Deal', be it for repairing your air-conditioner, getting your car serviced or cleaning your water purifier and drive your utility problems away.",
  },
  {
    title: "Doctor Appointment",
    iconKey: "stethoscope",
    desc: "Find the suitable medical specialist to take care of your health and well-being. Healthcare made easy.",
  },
  {
    title: "Real Estate Agents",
    iconKey: "building",
    desc: "Discover the power of our cohesive platform for simplified property searches. Whether your interest lies in PG, rentals, buying, or selling, you can connect with trusted agents and developers and stay updated on upcoming or trending residential and commercial projects.",
  },
  {
    title: "Online Recharge/Bill Payment",
    iconKey: "wallet",
    desc: "With the help of this service you can stay on track in making your bill payments and recharges without having to wait in a queue. This includes bill payments for gas, electricity, data card, DTH, landline, etc.",
  },
];

export const popularCategoryTabs: { label: string; items: string[] }[] = [
  {
    label: "Accommodation",
    items: [
      "AC Lodging Services", "Beach Resorts", "Bungalows On Hire", "Cottages On Hire",
      "Dharamshalas", "Farm House", "Farm House On Hire", "Government Hostels",
      "Guest House", "Hostels", "Hostels For Men", "Hostels For Women",
      "Hostels For Working Men", "Hostels For Working Women", "Hotels",
      "Hotels (Rs 500 & Below)", "Lodging Services", "Resorts", "Dormitory Services",
      "Home Stay", "Hostel For Girl Students", "3 Star Hotels", "5 Star Hotels",
      "2 Star Hotels", "4 Star Hotels", "Villas", "Villas On Hire", "Rooms On Hire",
    ],
  },
  {
    label: "Astrology",
    items: ["Astrologers", "Vastu Consultants", "Numerologists", "Palmists", "Tarot Card Readers", "Face Readers"],
  },
  {
    label: "Automobiles & Two Wheelers",
    items: ["Car Dealers", "Bike Dealers", "Car Service Centres", "Bike Service Centres", "Spare Parts Dealers", "Car Rentals"],
  },
  {
    label: "Beauty, Fitness & Sports",
    items: ["Beauty Parlours", "Gyms", "Yoga Classes", "Spa & Massages", "Salons", "Sports Academies"],
  },
  {
    label: "Business & Legal",
    items: ["Chartered Accountants", "Lawyers", "Company Registration", "GST Consultants", "Notary Services"],
  },
  {
    label: "Education",
    items: ["Schools", "Colleges", "Tuition Centres", "Coaching Classes", "Play Schools", "Training Institutes"],
  },
  {
    label: "Events & Weddings",
    items: ["Banquet Halls", "Wedding Planners", "Caterers", "Photographers", "Decorators", "DJ Services"],
  },
  {
    label: "Food & Restaurants",
    items: ["Restaurants", "Fast Food Centres", "Bakeries", "Sweet Shops", "Cafes", "Food Delivery"],
  },
];

export const trendingSearchesFooter: string[] = [
  "English Medium Schools", "Packers And Movers (Within City)", "Home Delivery Restaurants",
  "Estate Agents For Land", "Wedding Photographers", "Income Tax Consultants",
  "Newspaper Advertising Agencies", "Hepatologist Doctors", "Search Engine Optimization Services",
  "Motorcycle Repair & Services-TVS", "Tyre Dealers-JK", "Tutorials For Ssc Cgl",
  "Bitcoin Services", "Tour Packages For Goa", "Transporters For Kolkata",
  "Tour Packages For Manali", "Transporters For Bihar", "Pet Food Dealers",
  "Event Organisers For Jagran", "Tutorials For UGC Net Exam",
];

export const jdGuideLinks: string[] = [
  "Commodity", "Utility", "Personal Care", "Travel", "Automobile", "Home and Living", "Business Marketing", "Event Planner",
];

export const jdCollections: string[] = [
  "Travel & Tourism", "Beauty & Fashion", "Health & Fitness", "Food & Beverage",
  "Finance", "On demand Services", "Home & Living", "Education & Career",
  "Recreation", "Jd Business Guide",
];

export const quickLinks: FooterLink[] = [
  { label: "About us", href: "#" },
  { label: "Investor Relations", href: "#" },
  { label: "We're hiring", href: "#" },
  { label: "Customer Care", href: "#" },
  { label: "Free Listing", href: "#" },
  { label: "What's New", href: "#" },
  { label: "Report a Bug", href: "#" },
  { label: "B2B Sitemap", href: "#" },
  { label: "Sitemap", href: "#" },
  { label: "Free GST Invoice Generator", href: "#" },
  { label: "Advertise", href: "#" },
  { label: "Media", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Feedback", href: "#" },
  { label: "Business Badge", href: "#" },
  { label: "Jd Collection", href: "#" },
  { label: "Client Success Videos", href: "#" },
  { label: "B2B India Sitemap", href: "#" },
  { label: "Return & Exchange Policy", href: "#" },
  { label: "MCA Data", href: "#" },
];

export const jdVerticals: { heading: string; items: string[] }[] = [
  { heading: "B2B", items: ["B2B", "News", "Automobiles & Two Wheelers", "Electronic Component", "Food & Beverage", "It Components", "Pet & Pet Supplies", "Sports & Entertainment"] },
  { heading: "All India", items: ["All India", "Accommodation", "Beauty & Personal Care", "Electronics", "Furniture", "Jewellery", "Placements", "Textile & Leather"] },
  { heading: "Doctors", items: ["Doctors", "Advertising & Pr", "Business & Legal", "Energy", "Health & Medical", "Lights & Lighting", "Public", "Toys & Games"] },
  { heading: "Bills & Recharge", items: ["Bills & Recharge", "Agriculture", "Chemicals", "Engineering", "Home & Garden", "Luggage Bags & Cases", "Restaurant", "Transportation & Shipping"] },
  { heading: "Cricket", items: ["Cricket", "Apparel", "Construction & Real Estate", "Entertainment", "Housekeeping & Facility Management", "Office & School Supplies", "Rubber & Plastics", "Travel"] },
  { heading: "Guides", items: ["Guides", "Astrology", "Education", "Events & Wedding", "Industrial Plants & Machinery", "Packaging & Printing", "Security & Protection", "Watches & Eyewear"] },
];
