import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { newsItems } from "@/lib/data";

export function NewsSection() {
  return (
    <section className="mx-auto max-w-content px-4 py-4 md:px-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[25px] font-bold text-jd-text md:text-[28px]">News</h2>
        <a href="#" className="flex items-center gap-0.5 text-[14px] font-medium text-jd-blue hover:underline md:text-[15px]">
          Explore more <ChevronRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {newsItems.map((item) => (
          <a
            key={item.title}
            href="#"
            className="group flex flex-col justify-between overflow-hidden rounded-xl border border-jd-border bg-white shadow-sm hover:shadow-cardHover transition-all duration-200"
          >
            <div>
              <div className="relative h-[200px] w-full overflow-hidden bg-gray-100">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                ) : null}
                {item.overlay && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                    <span className="rounded bg-black/70 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-red-500 border border-white/20 shadow-md">
                      {item.overlay}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-3.5">
                <p className="line-clamp-2 text-[17px] font-medium leading-[1.35] text-jd-text group-hover:text-jd-blue transition-colors md:text-[19px]">
                  {item.title}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between px-3.5 pb-3 text-[13px] text-gray-500 md:text-[15px]">
              <span>{item.source}</span>
              <span className="flex items-center justify-center h-5 w-5 rounded bg-sky-50 text-jd-blue">
                📄
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
