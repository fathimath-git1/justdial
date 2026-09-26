"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ThumbsUp } from "lucide-react";
import { latestMovies } from "@/lib/data";

export function LatestMovies() {
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  return (
    <section className="mx-auto w-full max-w-[1750px] px-4 py-6 md:px-6">
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-[24px] font-semibold leading-tight text-jd-text">Latest Movies &amp; Review</h2>
        <button aria-label="See more movies" className="p-1 text-slate-600"><ChevronRight size={24} strokeWidth={3} /></button>
      </div>
      <div className="flex justify-start gap-5 overflow-x-auto overscroll-x-contain pb-2 no-scrollbar sm:justify-center sm:gap-7">
        {latestMovies.map((movie) => (
          <article key={movie.title} className="w-[min(248px,78vw)] shrink-0">
            <div
              role="button"
              tabIndex={0}
              aria-label={`Show booking option for ${movie.title}`}
              onClick={() => setSelectedMovie(selectedMovie === movie.title ? null : movie.title)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedMovie(selectedMovie === movie.title ? null : movie.title);
                }
              }}
              className="group relative block aspect-[72/100] w-full cursor-pointer overflow-hidden rounded-xl bg-slate-900"
            >
              {movie.image ? (
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  sizes="248px"
                  unoptimized
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                />
              ) : null}
              {movie.rating && (
                <span className="absolute bottom-[74px] right-3 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[20px] text-jd-text shadow">
                  <ThumbsUp size={15} className="fill-red-500 text-red-500" />
                  {movie.rating}%
                </span>
              )}
              <a
                href="#"
                onClick={(event) => event.stopPropagation()}
                className={`absolute inset-x-3 bottom-2 flex h-[46px] items-center justify-center rounded-md border border-jd-blue bg-white/90 text-[20px] font-semibold text-jd-blue transition-opacity ${selectedMovie === movie.title ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus:opacity-100"}`}
              >Book Now</a>
            </div>
            <p className="mt-7 line-clamp-2 text-[18px] font-semibold leading-snug text-jd-text">
              {movie.title}
            </p>
            <p className="mt-3 text-[13px] text-jd-text">{movie.lang}</p>
          </article>
        ))}
      </div>
    </section>
  );
}


