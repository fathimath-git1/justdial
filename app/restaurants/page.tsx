import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { LocationSelector } from "@/components/header/LocationSelector";
import { SearchBar } from "@/components/header/SearchBar";
import { SideRail } from "@/components/ui/SideRail";
import { SocialBar } from "@/components/footer/SocialBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PopularCategories } from "@/components/sections/PopularCategories";
import { PopularCitiesBar } from "@/components/sections/PopularCitiesBar";
import { Footer } from "@/components/footer/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

const categories = [
  { title: "Indian Flavours", image: "i_indianflavours.jpg", items: ["Gomantak", "Maharashtrian", "Rajasthani", "Biryani"] },
  { title: "Global Cuisines", image: "i_globalcuisines.jpg", items: ["Oriental", "Californian", "Korean", "European"] },
  { title: "Nightlife", image: "i_nightlife.jpg", items: ["Midnight Buffet", "Discotheques", "Restaurants & Bars", "Restaurants With Candle Light Dinner"] },
  { title: "Quick Bites", image: "i_quickbites.jpg", items: ["Bakeries", "Coffee Shops", "Fast Food", "Pizza Outlets"] },
  { title: "Sweet Tooth", image: "i_sweettooth.jpg", items: ["Cake Shops", "Desserts", "Donut Outlets"] },
  { title: "Foodie", image: "i_foodie.jpg", items: ["Fab Biryanis", "Foodie Outlets", "Maharashtrian", "Yum Cheesecakes"] },
];

const features = [
  { title: "Book A Table", subtitle: "Make Reservation", icon: "resfilter_booktable.svg" },
  { title: "WHAT'S TRENDING?", subtitle: "Try it Yourself", icon: "resfilter_trending.svg" },
  { title: "ORDER FOOD", subtitle: "", icon: "resfilter_orderfood.svg" },
];

const restaurantFaqs = [
  { question: "What are the key factors to consider when choosing a restaurant in Malappuram?", answer: "You should consider the type of cuisine you're in the mood for, the restaurant's location, its hygiene standards, ambiance, price range, customer reviews, and any special requirements like vegetarian options, parking, or Wi-Fi." },
  { question: "How can I find the best local restaurants in Malappuram?", answer: "You can use online platforms such as Justdial, Zomato, Swiggy or Google Maps. Asking locals or friends for recommendations, checking social media pages and food blogs, and looking for popular food festivals or food trails can also help." },
  { question: "What should I look for in online reviews of Indian restaurants?", answer: "Look for consistency in positive feedback regarding food quality and taste, comments on cleanliness and hygiene, feedback on service and staff behavior, information on portion sizes and value for money, and any recurring negative comments or issues mentioned by multiple reviewers." },
  { question: "Are there any safety tips to keep in mind when dining out in India?", answer: "Opt for bottled water to avoid waterborne diseases. Check the hygiene rating of the restaurant. Prefer busy and well-reviewed places, as high turnover often indicates freshness. Be cautious of street food; ensure it's cooked fresh and served hot. Verify the authenticity of ingredients, especially in international cuisine restaurants." },
  { question: "What are some famous regional cuisines to try in different parts of India?", answer: "In North India, you can try Punjabi, Kashmiri, and Mughlai cuisines. In South India, popular options include Andhra, Tamil, Kerala, Karnataka, Goan, and Chettinad cuisines. In West India, you can explore Gujarati, Maharashtrian, and Goan cuisines. East India offers Bengali, Assamese, and Oriya cuisines." },
  { question: "How can I find restaurants offering authentic Indian street food in a hygienic environment?", answer: "Look for restaurants or eateries that specialize in street food but operate in a clean, indoor setting. Search for food courts in shopping malls which often have stalls offering street food with better hygiene. Check reviews and ratings for recommendations on hygienic street food places. Some cities have food tours that focus on safe and clean street food experiences." },
  { question: "What payment methods are commonly accepted at restaurants in Malappuram?", answer: "Cash is widely accepted everywhere. Credit and debit cards (Visa, MasterCard) are accepted at most urban restaurants. Digital wallets like Paytm, Google Pay, and PhonePe are becoming increasingly popular. Some high-end restaurants may also accept international credit cards." },
  { question: "What are some unique dining experiences I can try in India?", answer: "You can try themed restaurants with specific ambiance, floating restaurants on boats or houseboats, restaurants that offer live cultural performances or traditional music, rooftop restaurants with scenic views, and traditional Indian dining experiences like a thali meal served on a banana leaf or in an authentic setting." },
];

export default function RestaurantsPage() {
  return (
    <main className="mx-auto min-h-screen w-full bg-white md:w-[calc(100%-100px)]">
      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
        <div className="mx-auto flex min-h-[98px] w-full max-w-[1800px] flex-wrap items-center gap-x-3 gap-y-2 px-3 py-2 lg:h-[78px] lg:min-h-0 lg:flex-nowrap lg:gap-4 lg:px-8">
          <Link href="/" aria-label="Justdial home" className="shrink-0">
            <Image src="/images/navbar/jdlogosvg.svg" alt="Justdial" width={120} height={36} unoptimized className="h-auto w-[96px] sm:w-[120px]" />
          </Link>
          <LocationSelector large className="w-[calc(100%-108px)] min-w-0 flex-1 sm:w-[calc(100%-132px)] lg:w-[246px] lg:flex-none" />
          <div className="min-w-0 basis-full lg:min-w-[240px] lg:flex-1"><SearchBar large placeholder="Restaurant Collections" initialValue="Restaurant Collections" /></div>
          <nav className="ml-auto hidden shrink-0 items-center gap-4 text-[16px] text-gray-800 xl:flex">
            <a href="#" className="hover:text-blue-600">EN⌄</a>
            <a href="#" className="hover:text-blue-600">⚑ Advertise</a>
            <a href="#" className="hover:text-blue-600">Free Listing</a>
            <button className="rounded-md bg-[#0876ce] px-4 py-2 font-semibold text-white">Login / Sign Up</button>
          </nav>
        </div>
      </header>
      <SideRail />

      <section className="relative mx-auto w-full overflow-visible">
        <div className="relative h-[220px] w-full sm:h-[286px]">
          <Image src="/images/restaurant-page/resfilter_banner_image.png" alt="A spread of delicious food" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/35" />
          <h1 className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center text-[26px] font-semibold tracking-wide text-white sm:text-4xl lg:text-[43px]">IT&apos;S ALL ABOUT FOOD</h1>
        </div>
        <div className="relative z-10 mx-auto -mt-3 grid w-[calc(100%-24px)] max-w-[884px] grid-cols-1 gap-2 sm:absolute sm:inset-x-8 sm:bottom-[-35px] sm:mt-0 sm:w-auto sm:grid-cols-3 sm:gap-5 lg:gap-10">
          {features.map((feature) => (
            <a key={feature.title} href="#restaurant-categories" className="flex h-[70px] items-center justify-center gap-4 rounded-2xl border border-gray-300 bg-white px-3 shadow-sm transition hover:border-blue-400 hover:shadow-md sm:h-[70px] sm:gap-5">
              <Image src={`/images/restaurant-page/${feature.icon}`} alt="" width={50} height={50} unoptimized className="h-[46px] w-[46px] shrink-0 object-contain" />
              <span className="min-w-0">
                <span className="block text-center text-[16px] font-medium leading-tight text-black sm:text-[16px]">{feature.title}</span>
                {feature.subtitle && <span className="mt-1 block text-[12px] font-medium text-gray-500 sm:text-[12px]">{feature.subtitle} <ChevronRight className="inline h-4 w-4" /></span>}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section id="restaurant-categories" className="mx-auto w-full max-w-[1750px] px-4 pb-12 pt-8 sm:px-6 lg:px-6 lg:pt-[90px]">
        <div className="grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 xl:grid-cols-6 xl:gap-[30px]">
          {categories.map((category) => (
            <article key={category.title} className="overflow-hidden rounded-[18px] border border-gray-300 bg-white">
              <div className="relative h-[150px] sm:h-[170px] xl:h-[120px]">
                <Image src={`/images/restaurant-page/${category.image}`} alt={category.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 17vw" className="object-cover" />
              </div>
              <div className="min-h-[250px] border-t border-gray-300 px-3.5 py-3.5">
                <h2 className="mb-3 text-[15px] font-medium text-black">{category.title}</h2>
                <ul className="space-y-2.5 text-[14px] leading-6 text-gray-800">
                  {category.items.map((item) => <li key={item}>– {item}</li>)}
                </ul>
                <a href="#" className="mt-3 inline-flex items-center text-[16px] text-[#0876ce] hover:underline">– More <ArrowRight className="ml-1 h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="w-full max-w-[540px] rounded-[10px] bg-[#0876ce] px-8 py-4 text-[19px] font-medium text-white transition hover:bg-blue-700">View All Categories</button>
        </div>
        <article className="mt-16 px-2 text-[15px] leading-[1.5] text-gray-950 sm:mt-[120px] sm:text-[18px]">
          <h2 className="mb-3 font-bold">Unveiling the Culinary Treasures: Exploring Local Restaurants &amp; Eateries near Malappuram</h2>
          <p className="mb-3">Welcome to the vibrant world of local restaurants, where every dish tells a story and every bite is an adventure! In this article, we will take a delightful journey through the bustling streets and cozy corners of your neighborhood to discover the hidden gems known as eateries, food places, and top-rated restaurants. From savory sensations to sweet delights, there&apos;s something for every palate in these food spots that define the essence of culinary excellence.</p>

          <h3 className="font-bold">Exploring the Local Scene</h3>
          <p className="mb-3">When it comes to experiencing the true essence of a city or town, few things rival the joy of indulging in its local cuisine. Local restaurants offer a glimpse into the heart and soul of a community, serving up not just food but also a sense of belonging and tradition. Whether you&apos;re craving comfort food or eager to explore exotic flavors, these culinary havens have something to satisfy every craving.</p>

          <h3 className="font-bold">Restaurant Menu: A Feast for the Senses</h3>
          <p className="mb-3">Step inside any local restaurant, and you&apos;ll be greeted by a symphony of aromas, colors, and flavors that titillate the senses. From sizzling steaks to aromatic curries, the restaurant menu is a treasure trove of culinary delights waiting to be explored. Each dish is carefully crafted to tantalize the taste buds and leave a lasting impression, ensuring that every meal is a memorable experience.</p>

          <h3 className="font-bold">Global Cuisines: A World of Flavors at Your Doorstep</h3>
          <p className="mb-3">One of the greatest joys of dining at local restaurants is the opportunity to embark on a culinary journey around the world without ever leaving your neighborhood. From Italian trattorias to Thai street food stalls, these establishments offer a diverse array of global cuisines that reflect the rich tapestry of cultures that call your city home. Whether you&apos;re in the mood for a taste of India or craving the bold flavors of Mexico, you&apos;ll find it all right here in your own backyard.</p>

          <h3 className="font-bold">Nightlife: Where Food Meets Entertainment</h3>
          <p className="mb-3">Local restaurants aren&apos;t just about great food; they&apos;re also hubs of social activity and nightlife. As the sun sets and the city comes alive, these eateries transform into vibrant gathering spots where friends come together to eat, drink, and make memories. Whether you&apos;re looking for a cozy corner to enjoy a romantic dinner or a lively atmosphere to dance the night away, the local restaurant scene has something for everyone.</p>

          <h3 className="font-bold">Quick Bites: On-the-Go Gastronomy</h3>
          <p className="mb-3">In today&apos;s fast-paced world, convenience is key, and local restaurants are here to deliver. Whether you&apos;re rushing to catch a train or grabbing a quick bite between meetings, these food spots offer a delicious solution to your hunger pangs. From gourmet sandwiches to freshly baked pastries, you&apos;ll find an array of quick bites that are as satisfying as they are convenient.</p>

          <h3 className="font-bold">Sweet Tooth: Indulge Your Dessert Desires</h3>
          <p className="mb-3">No meal is complete without something sweet to satisfy your sweet tooth, and local restaurants have you covered. From decadent cakes to artisanal chocolates, these establishments offer a tempting array of desserts that are sure to delight your taste buds. Whether you&apos;re celebrating a special occasion or simply treating yourself to a little indulgence, there&apos;s no shortage of sweet treats to choose from.</p>

          <h3 className="font-bold">Foodie&apos;s Paradise: A Haven for Culinary Enthusiasts</h3>
          <p className="mb-3">For the true food lover, local restaurants are nothing short of paradise. With their commitment to quality, creativity, and innovation, these establishments cater to the discerning palate of the modern foodie. Whether you&apos;re seeking out the latest food trends or searching for a hidden gem off the beaten path, the local restaurant scene offers endless opportunities for culinary exploration and discovery.</p>

          <p>In conclusion, local restaurants are more than just places to eat; they&apos;re vibrant hubs of culture, community, and creativity. From the tantalizing aromas of the kitchen to the convivial atmosphere of the dining room, every aspect of the dining experience is designed to delight and inspire. So the next time you&apos;re craving a culinary adventure, why not step off the beaten path and discover the culinary treasures waiting to be found in your own neighborhood? Your taste buds will thank you!</p>
        </article>
      </section>

      <section className="border-t border-gray-200 px-4 pb-10 pt-4 sm:px-8 sm:pt-2 lg:px-[40px]">
        <h2 className="mb-6 text-[20px] font-normal leading-tight text-gray-950 sm:mb-8 sm:text-[22px]">Frequently Asked Questions</h2>
        <div className="space-y-4 text-[15px] leading-[1.5] text-gray-950 sm:space-y-3 sm:text-[18px]">
          {restaurantFaqs.map((faq, index) => (
            <div key={faq.question}>
              <h3 className="font-bold">{index + 1}. {faq.question}</h3>
              <p className="mt-3">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <SocialBar />
      <AboutSection />
      <ServicesGrid />
      <PopularCategories />
      <PopularCitiesBar />
      <Footer />
      <BackToTop />
    </main>
  );
}
