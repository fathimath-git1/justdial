import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { touristPlaces } from "@/lib/data";

export function TouristPlaces() {
  return (
    <section className="mx-auto w-full max-w-[1350px] px-4 py-5 md:px-0 md:py-6">
      <div className="relative rounded-xl border border-jd-border bg-white px-5 py-6 md:px-[30px] md:pb-[30px] md:pt-[34px]">
        <div className="mb-6 flex items-center gap-2">
          <h2 className="text-[24px] font-semibold leading-tight text-jd-text">Explore Top Tourist Places</h2>
          <span className="rounded bg-red-600 px-1.5 py-1 text-[12px] font-bold uppercase leading-none text-white">New</span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-[14px]">
          {touristPlaces.map((place) => (
            <a
              key={place.name}
              href="#"
              className="group flex h-[105px] min-w-0 items-center overflow-hidden rounded-md border border-jd-border transition-all duration-200 hover:border-jd-blue hover:shadow-cardHover"
            >
             <div className="relative h-full w-[104px] shrink-0 overflow-hidden bg-gray-100">
  {place.image ? (
    <Image
      src={place.image}
      alt={place.name}
      fill
      unoptimized
      sizes="104px"
      className="object-cover transition-transform duration-200 group-hover:scale-105"
    />
  ) : (
    <div className="h-full w-full bg-gray-200" />
  )}
</div>
              <div className="min-w-0 px-[14px]">
                <p className="text-[18px] font-semibold text-jd-text">{place.name}</p>
                <span className="mt-1 flex items-center text-[15px] font-medium text-jd-blue group-hover:underline">
                  Explore <ChevronRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
        <button aria-label="More tourist places" className="absolute right-0 top-[46%] z-10 flex h-[52px] w-[34px] items-center justify-center rounded-l-xl bg-white text-jd-text shadow-cardHover">
          <ChevronRight size={23} strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}
