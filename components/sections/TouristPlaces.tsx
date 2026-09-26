import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { touristPlaces } from "@/lib/data";

export function TouristPlaces() {
  return (
    <section className="mx-auto w-full max-w-[1350px] px-4 py-5 md:px-0 md:py-6">
      <div className="relative rounded-xl border border-jd-border bg-white px-3 py-4 sm:px-5 sm:py-6 md:px-[30px] md:pb-[30px] md:pt-[34px]">
        <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-6">
          <h2 className="text-[20px] font-semibold leading-tight text-jd-text sm:text-[22px] md:text-[24px]">Explore Top Tourist Places</h2>
          <span className="rounded bg-red-600 px-1.5 py-1 text-[12px] font-bold uppercase leading-none text-white">New</span>
        </div>
        <div className="grid grid-cols-1 gap-2.5 min-[480px]:grid-cols-2 md:grid-cols-4 md:gap-[14px]">
          {touristPlaces.map((place) => (
            <a
              key={place.name}
              href="#"
              className="group flex h-[92px] min-w-0 items-center overflow-hidden rounded-md border border-jd-border transition-all duration-200 hover:border-jd-blue hover:shadow-cardHover sm:h-[105px]"
            >
             <div className="relative h-full w-[84px] shrink-0 overflow-hidden bg-gray-100 sm:w-[104px]">
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
              <div className="min-w-0 px-2.5 sm:px-[14px]">
                <p className="text-[15px] font-semibold leading-tight text-jd-text sm:text-[18px]">{place.name}</p>
                <span className="mt-1 flex items-center text-[13px] font-medium text-jd-blue group-hover:underline sm:text-[15px]">
                  Explore <ChevronRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
        <button aria-label="More tourist places" className="absolute right-0 top-[46%] z-10 hidden h-[52px] w-[34px] items-center justify-center rounded-l-xl bg-white text-jd-text shadow-cardHover sm:flex">
          <ChevronRight size={23} strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}
