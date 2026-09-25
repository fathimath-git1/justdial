"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { heroBanners, promoCards } from "@/lib/data";
import { LocationSelector } from "@/components/header/LocationSelector";
import { SearchBar } from "@/components/header/SearchBar";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % heroBanners.length);
    }, 8000);
    return () => clearInterval(t);
  }, []);

  const banner = heroBanners[index];

  return (
    <section className="mx-auto w-full px-4 pt-6 md:px-[46px] md:pt-6">
      <div className="mb-6 flex flex-col gap-3 md:mb-[22px] md:flex-row md:items-start md:gap-4">
        <div className="min-w-0 flex-1">
          <h1 className="mb-1 text-[22px] font-bold leading-tight text-[#171717] md:text-[26px]">Search across ‘5.6 Crore+’ <span className="text-jd-blue">Businesses</span></h1>
          <div className="flex flex-col gap-2 sm:flex-row md:w-[755px] md:flex-none md:gap-4">
            <LocationSelector className="w-full sm:w-[246px] sm:shrink-0" />
            <SearchBar />
          </div>
        </div>
        <button className="hidden shrink-0 rounded-md border border-gray-300 px-6 py-2 text-sm md:ml-auto md:mr-[42px] md:mt-5 md:block">Download App</button>
      </div>
      <div className="grid grid-cols-1 gap-3 md:w-[95%] md:grid-cols-[4fr_1fr_1fr_1fr_1fr]">
        {/* Main carousel banner */}
        <div className="relative h-[200px] overflow-hidden rounded-lg bg-slate-100 md:h-[240px]">
          <Image key={banner.image} src={banner.image} alt={banner.title} width={1276} height={480} priority={index === 0} sizes="(max-width: 768px) 100vw, 60vw" className="h-full w-full animate-fade-slide object-cover" />
          <button aria-label="Previous banner" onClick={() => setIndex((index - 1 + heroBanners.length) % heroBanners.length)} className="absolute left-3 top-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"><ChevronRight className="h-5 w-5 rotate-180" /></button>
          <button aria-label="Next banner" onClick={() => setIndex((index + 1) % heroBanners.length)} className="absolute right-3 top-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"><ChevronRight className="h-5 w-5" /></button>
          <div className="absolute bottom-3 left-6 flex gap-1.5">
            {heroBanners.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === index ? "w-5 bg-white" : "w-2 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Promo cards */}
        {promoCards.map((card) => (
          <div
            key={card.title}
            className={`group relative flex h-[180px] cursor-pointer flex-col justify-between overflow-hidden rounded-lg bg-gradient-to-br p-3 text-white shadow-card hover:shadow-cardHover transition-shadow duration-200 md:h-[240px] md:p-3 ${card.gradient}`}
          >
            <div className="relative z-10 max-w-[105px]">
              <p className="text-[19px] font-bold leading-tight">{card.title}</p>
              <p className="mt-2 whitespace-pre-line text-[16px] leading-[1.45]">{card.title === "B2B" ? "Quick Quotes\nGet Nearest Vendor" : card.title === "DOCTORS" ? "Book Now" : card.title === "REAL ESTATE" ? "Finest Agents" : "Get Nearest Vendor"}</p>
            </div>
            {card.image && <Image src={card.image} alt="" width={252} height={382} className="absolute bottom-0 right-0 h-[84%] w-auto max-w-[80%] object-contain object-bottom" />}
            <span className="relative z-10 flex w-fit items-center gap-1 rounded-full bg-white/15 p-1.5 group-hover:translate-x-0.5 transition-transform duration-200">
              <ChevronRight className="h-4 w-4" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
