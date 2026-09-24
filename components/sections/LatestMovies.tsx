import Image from "next/image";
import { latestMovies } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function LatestMovies() {
  return (
    <section className="mx-auto max-w-content px-4 py-4 md:px-6">
      <SectionHeader title="Latest Movies & Review" />
      <div className="flex gap-4 overflow-x-auto no-scrollbar scrollbar-thin pb-2">
        {latestMovies.map((movie) => (
          <a
            key={movie.title}
            href="#"
            className="group w-[190px] shrink-0"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-900 shadow-md">
              {movie.image ? (
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  sizes="190px"
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              ) : null}
              {movie.rating && (
                <span className="absolute bottom-2.5 right-2.5 flex items-center gap-1 rounded-md bg-white/95 px-2 py-0.5 text-xs font-bold text-emerald-600 shadow">
                  👍 {movie.rating}%
                </span>
              )}
            </div>
            <p className="mt-2.5 line-clamp-2 text-sm font-bold leading-snug text-jd-text group-hover:text-jd-blue transition-colors">
              {movie.title}
            </p>
            <p className="mt-1 text-xs font-medium text-gray-500">{movie.lang}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
