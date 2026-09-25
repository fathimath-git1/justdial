"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { rainyDayEssentials } from "@/lib/data";

export function RainyDayEssentials() {
  const cardsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mx-auto w-full max-w-[1350px] px-4 pb-6 pt-8 md:px-0 md:pb-6 md:pt-8">
      <div className="relative rounded-xl border border-jd-border bg-white px-5 py-6 md:px-[30px] md:pb-[30px] md:pt-[34px]">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-[24px] font-semibold leading-tight text-jd-text">Rainy Day Essentials</h2>
            <span className="rounded bg-red-600 px-1.5 py-1 text-[12px] font-bold uppercase leading-none text-white">Seasonal</span>
          </div>
          <p className="mt-1 text-[13px] text-jd-text">Discover wide range of rainy collection</p>
        </div>

        <div className="relative mt-[26px]">
          <div ref={cardsRef} className="flex gap-[14px] overflow-x-auto no-scrollbar scroll-smooth">
            {rainyDayEssentials.map((item) => (
              <a
                key={item.title}
                href="#"
                className="group flex h-[105px] w-[310px] shrink-0 items-center overflow-hidden rounded-md border border-jd-border transition-all duration-200 hover:border-jd-blue"
              >
                <div className="relative h-full w-[104px] shrink-0 overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="104px"
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 px-[14px]">
                  <p className="line-clamp-2 text-[18px] font-semibold leading-tight text-jd-text">{item.title}</p>
                  <span className="mt-1 flex items-center text-[15px] font-medium text-jd-blue group-hover:underline">
                    {item.cta} <ChevronRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <button
            type="button"
            aria-label="More rainy day essentials"
            onClick={() => cardsRef.current?.scrollBy({ left: cardsRef.current.clientWidth * 0.8, behavior: "smooth" })}
            className="absolute right-0 top-1/2 z-10 flex h-[52px] w-[34px] -translate-y-1/2 items-center justify-center rounded-l-xl bg-white text-jd-text shadow-cardHover"
          >
            <ChevronRight size={23} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
}
