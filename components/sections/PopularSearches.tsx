import Image from "next/image";
import { popularSearches } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PopularSearches() {
  return (
    <section className="mx-auto max-w-content px-4 py-4 md:px-6">
      <SectionHeader title="Popular Searches" />
      <div className="flex gap-4 overflow-x-auto no-scrollbar scrollbar-thin pb-2">
        {popularSearches.map((item) => (
          <div
            key={item.title}
            className="group w-[220px] shrink-0 overflow-hidden rounded-xl border border-jd-border shadow-sm hover:shadow-cardHover transition-all duration-200"
          >
            <div className="relative h-[160px] w-full overflow-hidden bg-gray-100">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="220px"
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              ) : null}
            </div>
            <div className="bg-[#0076d7] p-3 text-white">
              <p className="text-sm font-bold truncate">{item.title}</p>
              <button className="mt-3 w-full rounded-md bg-white py-1.5 text-xs font-bold text-[#0076d7] hover:bg-sky-50 transition-colors duration-150">
                {item.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
