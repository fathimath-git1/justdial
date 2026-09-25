import Image from "next/image";
import { trendingSearchesNearYou } from "@/lib/data";

export function TrendingSearches() {
  return (
    <section className="mx-auto w-full max-w-[1720px] px-4 py-6 md:px-6">
      <div className="rounded-xl border border-jd-border bg-white p-5 md:px-[38px] md:pb-[38px] md:pt-[36px]">
        <h3 className="flex items-center gap-2 text-[30px] font-semibold leading-tight text-jd-text">
          Trending Searches Near You
          <span className="rounded bg-red-600 px-1.5 py-0.5 text-[14px] font-bold uppercase text-white">
            New
          </span>
        </h3>
        <p className="mt-1 text-[16px] text-gray-600">
          Stay updated with the latest local trends.
        </p>
        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trendingSearchesNearYou.map((item) => (
            <a
              key={item.title}
              href="#"
              className="group flex h-[132px] min-w-0 items-center gap-0 overflow-hidden rounded-lg border border-jd-border p-0 hover:border-jd-blue transition-all duration-200"
            >
              <div className="relative h-full w-[130px] shrink-0 overflow-hidden bg-gray-100">
                {item.image ? (
                  <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  sizes="130px"
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                ) : null}
              </div>
              <div className="min-w-0 flex-1 px-[18px] py-2">
                <p className="line-clamp-2 text-[22px] font-semibold leading-tight text-jd-text">
                  {item.title}
                </p>
                <span className="mt-1 flex items-center text-[15px] font-medium text-jd-blue group-hover:underline">
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
