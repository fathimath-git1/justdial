import Image from "next/image";
import {
  jdCollections,
  jdGuideLinks,
  jdVerticals,
  popularCities,
  quickLinks,
  trendingSearchesFooter,
} from "@/lib/data";

const popularCategories = [
  "Body Massage Centres", "Cinema Halls", "Schools", "Beauty Spas", "Dermatologists", "Hospitals", "Malls", "Gyms", "Beauty Parlours", "Estate Agents", "Banquet Halls", "ENT Doctors", "Book Shops", "Bike On Rent", "Sexologist Doctors", "Neurologists", "Gynaecologist & Obstetrician Doctors", "Train Ticket Booking Agents", "Travel Agents", "Paying Guest Accommodations", "General Physician Doctors", "Dentists", "Orthopaedic Doctors", "Chemists", "Motor Training Schools", "Gastroenterologists", "Car Rental", "Salons", "Courier Services", "Dance Classes", "Pathology Labs", "Taxi Services", "Cake Shops", "AC Repair & Services", "Mobile Phone Dealers", "Pet Shops", "Dmart", "Packers And Movers", "Psychiatrists", "Dharamshalas", "Urologist Doctors", "Bakeries", "Bicycle Dealers", "Coffee Shops", "Paediatricians", "Sonography Centres", "Yoga Classes", "Hostels", "Cardiologists", "Electrical Shops", "Skin Care Clinics", "Diagnostic Centres", "Homeopathic Doctors", "Physiotherapists", "Photo Studios", "Plumbers", "Music Classes", "Electricians", "Sports Goods Dealers", "Shoe Dealers", "Hair Stylists", "Gift Shops", "Ophthalmologists", "Car Repair & Services", "Ayurvedic Doctors", "Eye Clinics", "Restaurants", "Carpenters", "Jewellery Showrooms", "Cooks On Hire", "Stationery Shops", "Nephrologists", "Caterers", "Interior Designers", "Rehabilitation Center", "Grocery Stores", "Banks", "ATM", "5 Star Hotels", "Hotels", "Resorts", "Plastic Surgeons", "Smart Watch Dealers", "Drug De Addiction Centres", "Chinese Restaurants",
];

function PipeLinks({ items }: { items: string[] }) {
  return <p className="text-[12px] leading-[22px] text-[#9eabb8]">{items.map((item, index) => <span key={item}><a href="#" className="hover:text-white hover:underline">{item}</a>{index < items.length - 1 && <span className="mx-1.5 text-[#67717a]">|</span>}</span>)}</p>;
}

function LinkSection({ title, items, className = "" }: { title: string; items: string[]; className?: string }) {
  return <section className={className}><h2 className="mb-4 text-[18px] font-normal leading-[22px] text-[#e8ebee]">{title}</h2><PipeLinks items={items} /></section>;
}

export function FlightFooter() {
  const socials = [
    ["flw_facebook_active.svg", "Facebook"], ["flw_youtube_active.svg", "YouTube"], ["flw_insta_active.svg", "Instagram"], ["flw_linkedIn_active.svg", "LinkedIn"], ["flw_twitter_active.svg", "X"],
  ];
  const [firstLinks, secondLinks] = [quickLinks.filter((_, i) => i % 2 === 0), quickLinks.filter((_, i) => i % 2 === 1)];

  return <footer className="mx-auto max-w-[1525px] bg-[#292929] px-6 pb-8 pt-7 sm:px-8 lg:px-14">
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2.5"><span className="mr-1 text-[18px] text-[#e8ebee]">Follow us on</span>{socials.map(([file, label]) => <a href="#" key={label} aria-label={label}><Image src={`/images/restaurant-page/${file}`} alt="" width={38} height={38} unoptimized className="h-[38px] w-[38px]" /></a>)}</div>
      <div className="flex items-center gap-3"><Image src="/images/restaurant-page/getapp_googleplay.avif" alt="Get it on Google Play" width={124} height={38} unoptimized className="h-[38px] w-[124px] object-contain" /><Image src="/images/restaurant-page/getapp_appstore.avif" alt="Download on the App Store" width={124} height={38} unoptimized className="h-[38px] w-[124px] object-contain" /></div>
    </div>

    <LinkSection title="Popular Categories" items={popularCategories} className="mt-16" />
    <LinkSection title="Trending Searches" items={trendingSearchesFooter} className="mt-24" />
    <LinkSection title="Explore JD Guide" items={jdGuideLinks} className="mt-24" />
    <LinkSection title="Explore JD Collections" items={jdCollections} className="mt-24" />
    <LinkSection title="Popular Cities" items={popularCities} className="mt-24" />

    <div className="mt-16 grid gap-10 md:grid-cols-[350px_minmax(0,1fr)]">
      <section><h2 className="mb-6 text-[18px] text-[#e8ebee]">Quick Links</h2><div className="grid grid-cols-2 gap-x-7 gap-y-3 text-[12px] leading-[22px] text-[#9eabb8]">{firstLinks.map((link) => <a key={link.label} href={link.href} className="hover:text-white">{link.label}</a>)}{secondLinks.map((link) => <a key={link.label} href={link.href} className="hover:text-white">{link.label}</a>)}</div></section>
      <section><h2 className="mb-6 text-[18px] text-[#e8ebee]">JD Verticals</h2><div className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 xl:grid-cols-6">{jdVerticals.map((group) => <div key={group.heading} className="space-y-3 text-[12px] leading-[22px] text-[#9eabb8]">{group.items.map((item) => <a key={item} href="#" className="block hover:text-white">{item}</a>)}</div>)}</div></section>
    </div>

    <div className="mt-16 border-t border-[#414141] pt-5 text-[12px] leading-[22px] text-[#9eabb8]">Copyrights 2008-26. All Rights Reserved.&nbsp;&nbsp; <a href="#" className="hover:text-white">Privacy</a>&nbsp; | &nbsp;<a href="#" className="hover:text-white">Terms</a>&nbsp; | &nbsp;<a href="#" className="hover:text-white">Infringement</a></div>
  </footer>;
}
