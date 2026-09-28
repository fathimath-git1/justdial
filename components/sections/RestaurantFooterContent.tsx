import { trendingSearchesFooter, jdGuideLinks, jdCollections } from "@/lib/data";

const restaurantPopularLinks = [
  "Body Massage Centres", "Cinema Halls", "Schools", "Beauty Spas", "Dermatologists", "Hospitals", "Malls", "Gyms", "Beauty Parlours", "Estate Agents", "Banquet Halls", "ENT Doctors", "Book Shops", "Bike On Rent", "Sexologist Doctors", "Neurologists", "Gynaecologist & Obstetrician Doctors", "Train Ticket Booking Agents", "Travel Agents", "Paying Guest Accommodations", "General Physician Doctors", "Dentists", "Orthopaedic Doctors", "Chemists", "Motor Training Schools", "Gastroenterologists", "Car Rental", "Salons", "Courier Services", "Dance Classes", "Pathology Labs", "Taxi Services", "Cake Shops", "AC Repair & Services", "Mobile Phone Dealers", "Pet Shops", "Dmart", "Packers And Movers", "Psychiatrists", "Dharamshalas", "Urologist Doctors", "Bakeries", "Bicycle Dealers", "Coffee Shops", "Paediatricians", "Sonography Centres", "Yoga Classes", "Hostels", "Cardiologists", "Electrical Shops", "Skin Care Clinics", "Diagnostic Centres", "Homeopathic Doctors", "Physiotherapists", "Photo Studios", "Plumbers", "Music Classes", "Electricians", "Sports Goods Dealers", "Shoe Dealers", "Hair Stylists", "Gift Shops", "Ophthalmologists", "Car Repair & Services", "Ayurvedic Doctors", "Eye Clinics", "Restaurants", "Carpenters", "Jewellery Showrooms", "Cooks On Hire", "Stationery Shops", "Nephrologists", "Caterers", "Interior Designers", "Rehabilitation Center", "Grocery Stores", "Banks", "ATM", "5 Star Hotels", "Hotels", "Resorts", "Plastic Surgeons", "Smart Watch Dealers", "Drug De Addiction Centres", "Chinese Restaurants",
];

function LinkList({ items }: { items: string[] }) {
  return (
    <p className="text-[13px] font-medium leading-[1.8] text-gray-600 md:text-[14px]">
      {items.map((item, index) => (
        <span key={item}>
          <a href="#" className="hover:text-[#1ba1e2] hover:underline">{item}</a>
          {index < items.length - 1 && <span className="mx-1.5 text-gray-300">|</span>}
        </span>
      ))}
    </p>
  );
}

export function RestaurantFooterContent() {
  return (
    <section className="mx-auto w-full max-w-[1720px] px-5 py-5 md:px-8">
      <h2 className="mb-4 text-[14px] font-medium leading-6 text-[#333]">Popular Categories</h2>
      <LinkList items={restaurantPopularLinks} />

      <div className="mt-12">
        <h3 className="mb-3 text-[14px] font-medium leading-6 text-[#333]">Trending Searches</h3>
        <LinkList items={trendingSearchesFooter} />
      </div>

      <div className="mt-12">
        <h3 className="mb-3 text-[14px] font-medium leading-6 text-[#333]">Explore JD Guide</h3>
        <LinkList items={jdGuideLinks} />
      </div>

      <div className="mt-12">
        <h3 className="mb-3 text-[14px] font-medium leading-6 text-[#333]">Explore JD Collections</h3>
        <LinkList items={jdCollections} />
      </div>
    </section>
  );
}
