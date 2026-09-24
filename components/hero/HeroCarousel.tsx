"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { heroBanners, promoCards } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % heroBanners.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const banner = heroBanners[index];

  return (
    <section className="mx-auto max-w-content px-4 pt-4 md:px-6">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
        {/* Main carousel banner */}
        <div
          className={`relative flex h-[180px] items-center overflow-hidden rounded-lg bg-gradient-to-br px-6 md:h-[220px] ${banner.gradient} transition-colors duration-500`}
        >
          <div className="animate-fade-slide">
            <h2 className="max-w-[220px] text-2xl font-bold leading-tight text-slate-800">
              {banner.title}
            </h2>
            <Button size="sm" className="mt-4">
              {banner.cta}
            </Button>
            <p className="mt-2 text-xs text-slate-600">{banner.subtitle}</p>
          </div>
          <div className="absolute bottom-3 left-6 flex gap-1.5">
            {heroBanners.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === index ? "w-5 bg-slate-700" : "w-1.5 bg-slate-400/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Promo cards */}
        {promoCards.map((card) => (
          <div
            key={card.title}
            className={`group flex h-[180px] cursor-pointer flex-col justify-between rounded-lg bg-gradient-to-br p-4 text-white shadow-card hover:shadow-cardHover transition-shadow duration-200 md:h-[220px] ${card.gradient}`}
          >
            <div>
              <p className="text-lg font-bold leading-tight">{card.title}</p>
              <span className="mt-2 block text-3xl">{card.emoji}</span>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-white/15 p-1.5 group-hover:translate-x-0.5 transition-transform duration-200">
              <ChevronRight className="h-4 w-4" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
