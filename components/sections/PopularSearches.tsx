"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { popularSearches } from "@/lib/data";

export function PopularSearches() {
  const cardsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mx-auto w-full max-w-[1350px] px-4 py-4 md:px-0 md:py-5">
      <h2 className="mb-[26px] text-[24px] font-semibold leading-tight text-jd-text">
        Popular Searches
      </h2>

      <div className="relative">
        <div
          ref={cardsRef}
          className="flex gap-7 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {popularSearches.map((item) => (
            <article
              key={item.title}
              className="group w-[min(248px,78vw)] shrink-0 overflow-hidden rounded-xl"
            >
              <div className="relative h-[206px] w-full overflow-hidden bg-gray-100">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="248px"
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-200" />
                )}
              </div>

              <div className="flex h-[115px] flex-col bg-[#0876ce] px-4 py-[14px] text-white">
                <p className="truncate text-[18px] font-medium leading-6">
                  {item.title}
                </p>

                <button
                  type="button"
                  className="mt-auto h-[31px] w-[120px] rounded-[4px] border border-gray-300 bg-white text-[16px] font-semibold text-[#0876ce] transition-colors duration-150 hover:bg-sky-50"
                >
                  {item.cta}
                </button>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          aria-label="More popular searches"
          onClick={() =>
            cardsRef.current?.scrollBy({
              left: cardsRef.current.clientWidth * 0.8,
              behavior: "smooth",
            })
          }
          className="absolute right-0 top-1/2 z-10 flex h-[52px] w-[34px] -translate-y-1/2 items-center justify-center rounded-l-xl bg-white text-jd-text shadow-cardHover"
        >
          <ChevronRight size={23} strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}