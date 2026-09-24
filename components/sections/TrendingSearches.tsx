import Image from "next/image";
import { trendingSearchesNearYou } from "@/lib/data";

export function TrendingSearches() {
  return (
    <section className="mx-auto max-w-content px-4 py-4 md:px-6">
      <div className="rounded-lg border border-jd-border p-5 shadow-card">
        <h3 className="flex items-center gap-2 text-lg font-bold text-jd-text">
          Trending Searches Near You
          <span className="rounded bg-jd-orange px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
            New
          </span>
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Stay updated with the latest local trends.
        </p>
        <div className="mt-4 flex gap-4 overflow-x-auto no-scrollbar pb-1">
          {trendingSearchesNearYou.map((item) => (
            <a
              key={item.title}
              href="#"
              className="group flex w-[230px] shrink-0 items-center gap-3 rounded-lg border border-jd-border p-2 hover:border-jd-blue hover:shadow-cardHover transition-all duration-200"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-gray-100">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="56px"
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                ) : null}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold leading-tight text-jd-text line-clamp-2">
                  {item.title}
                </p>
                <span className="mt-1 flex items-center text-xs font-medium text-jd-blue group-hover:underline">
                  {item.cta} ›
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
