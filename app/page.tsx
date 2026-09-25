import { Header } from "@/components/header/Header";
import { HeroCarousel } from "@/components/hero/HeroCarousel";
import { CategoryGrid, SecondaryCategoryGrid } from "@/components/categories/CategoryGrid";
import { WeddingBeautySection } from "@/components/sections/WeddingBeautySection";
import { TravelBookings } from "@/components/sections/TravelBookings";
import { TrendingSearches } from "@/components/sections/TrendingSearches";
import { LatestMovies } from "@/components/sections/LatestMovies";
import { TouristPlaces } from "@/components/sections/TouristPlaces";
import { PopularSearches } from "@/components/sections/PopularSearches";
import { RainyDayEssentials } from "@/components/sections/RainyDayEssentials";
import { NewsSection } from "@/components/sections/NewsSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PopularCategories } from "@/components/sections/PopularCategories";
import { AboutSection } from "@/components/sections/AboutSection";
import { PopularCitiesBar } from "@/components/sections/PopularCitiesBar";
import { SocialBar } from "@/components/footer/SocialBar";
import { Footer } from "@/components/footer/Footer";
import { SideRail } from "@/components/ui/SideRail";
import { BackToTop } from "@/components/ui/BackToTop";

function Divider() {
  return <div className="mx-auto max-w-content border-t border-jd-border" />;
}

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full bg-white md:w-[calc(100%-40px)]">
      <Header />
      <SideRail />

      <HeroCarousel />
      <CategoryGrid />
      <Divider />
      <SecondaryCategoryGrid />
      <Divider />
      <WeddingBeautySection />
      <Divider />
      <TravelBookings />
      <TrendingSearches />
      <LatestMovies />
      <TouristPlaces />
      <PopularSearches />
      <RainyDayEssentials />
      <Divider />
      <NewsSection />
      <Divider />
      <SocialBar />
      <Divider />
      <AboutSection />
      <Divider />
      <ServicesGrid />
      <Divider />
      <PopularCategories />
      <Divider />
      <PopularCitiesBar />

      <Footer />
      <BackToTop />
    </main>
  );
}
