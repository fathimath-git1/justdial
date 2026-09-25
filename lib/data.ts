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
  { title: "Restaurants", iconKey: "utensils", image: "/images/category-icons/restaurant-2022%20(1).svg" },
  { title: "Hotels", iconKey: "hotel", image: "/images/category-icons/hotel-2022.svg" },
  { title: "Beauty Spa", iconKey: "sparkles", image: "/images/category-icons/beauty.svg" },
  { title: "Home Decor", iconKey: "armchair", image: "/images/category-icons/homedecor.svg" },
  { title: "Ask Astro", iconKey: "sun", image: "/images/category-icons/hotkey_astro.gif", badge: "Beta" },
  { title: "Wedding Planning", iconKey: "heart", image: "/images/category-icons/hotkey_wedding_icon.gif" },
  { title: "Education", iconKey: "graduation-cap", image: "/images/category-icons/education.svg" },
  { title: "Rent & Hire", iconKey: "key", image: "/images/category-icons/renthire.svg" },
  { title: "Hospitals", iconKey: "building-2", image: "/images/category-icons/hospital_2023.svg" },
  { title: "Contractors", iconKey: "hard-hat", image: "/images/category-icons/contractor-2022.svg" },
];

// Second row (revealed / used on scroll-fixed strip)
export const secondaryCategories: Category[] = [
  { title: "Pet Shops", iconKey: "dog", image: "/images/category-icons/pet_shops_2023.svg" },
  { title: "PG/Hostels", iconKey: "bed-double", image: "/images/category-icons/pg-hostels-rooms.svg" },
  { title: "Estate Agent", iconKey: "home", image: "/images/category-icons/estate-agent.svg" },
  { title: "Dentists", iconKey: "smile", image: "/images/category-icons/dentist_2023.svg" },
  { title: "Gym", iconKey: "dumbbell", image: "/images/category-icons/gym_2023.svg" },
  { title: "Loans", iconKey: "landmark", image: "/images/category-icons/loans.svg" },
  { title: "Event Organisers", iconKey: "party-popper", image: "/images/category-icons/eventorganizers.svg" },
  { title: "Driving Schools", iconKey: "car", image: "/images/category-icons/driving_school_2023.svg" },
  { title: "Packers & Movers", iconKey: "truck", image: "/images/category-icons/packers_movers_2023.svg" },
  { title: "Popular Categories", iconKey: "menu" },
];

export const heroBanners = [
  {
    title: "Flight deals",
    image: "/images/hero-assets/banner_webflight_2024.webp",
    gradient: "from-sky-300 via-sky-200 to-sky-100",
  },
  {
    title: "Hotels",
    image: "/images/hero-assets/banner_hotels_2024.webp",
    gradient: "from-orange-300 via-orange-200 to-orange-100",
  },
  {
    title: "Interior Designers",
    image: "/images/hero-assets/banner_interiordesigners_2024.webp",
    gradient: "from-slate-800 to-slate-900",
  },
  {
    title: "Packers and Movers",
    image: "/images/hero-assets/banner_packersmovers_2024.webp",
    gradient: "from-emerald-300 via-emerald-200 to-emerald-100",
  },
];

export const promoCards: CardItem[] = [
  { title: "B2B", gradient: "from-blue-700 to-blue-500", image: "/images/hero-assets/b2b_square_hotkey.webp" },
  { title: "REPAIRS & SERVICES", gradient: "from-indigo-800 to-indigo-500", image: "/images/hero-assets/repair_square_hotkey.webp" },
  { title: "REAL ESTATE", gradient: "from-violet-700 to-violet-500", image: "/images/hero-assets/realestate_square_hotkey.webp" },
  { title: "DOCTORS", gradient: "from-emerald-700 to-emerald-600", image: "/images/hero-assets/doctor_square_hotkey.webp" },
];

export const weddingRequisites: CardItem[] = [
  { title: "Banquet Halls", image: "/images/categories/banquethalls_rectangle_2024.webp" },
  { title: "Bridal Requisite", image: "/images/categories/bridalrequisite_rectangle_2024.webp" },
  { title: "Caterers", image: "/images/categories/caterers_rectangle_2024.webp" },
];

export const beautySpa: CardItem[] = [
  { title: "Beauty Parlours", image: "/images/categories/beautyparlours_rectangle_2024.webp" },
  { title: "Spa & Massages", image: "/images/categories/spamassages_rectangle_2024.webp" },
  { title: "Salons", image: "/images/categories/salons_rectangle_2024.webp" },
];

export const repairsServices: CardItem[] = [
  { title: "AC Service", image: "/images/categories/hkim_acrepair.png" },
  { title: "Car Service", image: "/images/categories/carservice_rectangle_2024.webp" },
  { title: "Bike Service", image: "/images/categories/bikeservice_rectangle_2024.webp" },
];

export const dailyNeeds: CardItem[] = [
  { title: "Movies", image: "/images/categories/hkim_movies.png" },
  { title: "Grocery", image: "/images/categories/grocery_rectangle_2024.webp" },
  { title: "Electricians", image: "/images/categories/electricians_rectangle_2024.webp" },
];

export const travelModes: TravelModeItem[] = [
  { title: "Flight", note: "Powered By Easemytrip.com", image: "/images/travel/icons/bt_flight.svg" },
  { title: "Bus", note: "Affordable Rides", image: "/images/travel/icons/bt_bus.svg" },
  { title: "Train", note: "", image: "/images/travel/icons/bt_train.svg" },
  { title: "Hotel", note: "Budget-friendly Stay", image: "/images/travel/icons/bt_hotels.svg" },
  { title: "Car Rentals", note: "Drive Easy Anywhere", image: "/images/travel/icons/bt_carhire.svg" },
];

export const trendingSearchesNearYou: PopularSearchItem[] = [
  { title: "Beauty Parlours", cta: "Explore", image: "/images/trending/10042247.webp" },
  { title: "Paying Guest Accommodations...", cta: "Explore", image: "/images/trending/11364923.avif" },
  { title: "Income Tax Consultants", cta: "Explore", image: "/images/trending/10263305.avif" },
  { title: "Mehendi Artists At Home", cta: "Explore", image: "/images/trending/12057018.avif" },
];

export const latestMovies: MovieItem[] = [
  { title: "Bethlehem Kudumba Unit (Malayalam Movie)", lang: "Malayalam · 2D", rating: 80, image: "/images/movies/centralized_162839122026_06_15_12_20_28_220.jpg" },
  { title: "Pradhama Drishtiya Kuttakkar (Malayalam Movie)", lang: "Malayalam · 2D", image: "/images/movies/centralized_162961822026_08_18_10_03_26_220.jpg" },
  { title: "Its A Medical Miracle (Malayalam Movie)", lang: "Malayalam · 2D", image: "/images/movies/centralized_163043012026_09_04_04_46_48_220.jpg" },
  { title: "Mandaadi (Tamil Movie)", lang: "Tamil · 2D", rating: 84, image: "/images/movies/centralized_161949072025_07_04_01_21_36_220.jpg" },
  { title: "Aasha (2026 Film) (Malayalam Movie)", lang: "Malayalam · 2D", image: "/images/movies/centralized_163053682026_09_10_10_02_18_220.jpg" },
];

export const touristPlaces: TouristPlace[] = [
  { name: "Ooty", image: "/images/tourist/Explorecities_Ooty.png" },
  { name: "Coimbatore", image: "/images/tourist/Explorecities_Coimbatore.png" },
  { name: "Coorg", image: "/images/tourist/Explorecities_Coorg.png" },
  { name: "Munnar", image: "/images/tourist/Explorecities_Munnar.png" },
];

export const popularSearches: PopularSearchItem[] = [
  { title: "Solar Panel Dealers", cta: "Enquire Now", image: "/images/popular/10444071.jpg" },
  { title: "Beauty Parlours", cta: "Enquire Now", image: "/images/popular/10042247.jpg" },
  { title: "Home Nursing Services", cta: "Explore", image: "/images/popular/10250587.jpg" },
  { title: "Dentists", cta: "Explore", image: "/images/popular/10156331.jpg" },
  { title: "Travel Agents", cta: "Explore", image: "/images/popular/10496380.jpg" },
  { title: "Electricians", cta: "Explore", image: "/images/popular/10892680.jpg" },
  { title: "Grocery Stores", cta: "Explore", image: "/images/popular/10408936.jpg" },
];

export const rainyDayEssentials: PopularSearchItem[] = [
  { title: "Coffee Shops", cta: "Explore", image: "/images/rainy-day/10104727.avif" },
  { title: "Tea Stalls", cta: "Explore", image: "/images/rainy-day/10853304.avif" },
  { title: "Plumbing Contractors", cta: "Explore", image: "/images/rainy-day/10378056.avif" },
  { title: "Waterproofing Material Dealers", cta: "Explore", image: "/images/rainy-day/10533883.avif" },
  { title: "Tarpaulin Dealers", cta: "Explore", image: "/images/rainy-day/tarpaulin-dealers.webp" },
  { title: "Rainwear Dealers", cta: "Explore", image: "/images/rainy-day/10101239.avif" },
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




