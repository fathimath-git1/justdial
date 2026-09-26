import Image from "next/image";
import { travelModes } from "@/lib/data";

export function TravelBookings() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-6 md:px-6">
      <div className="rounded-xl border border-jd-border bg-white px-5 py-7 md:px-[50px] md:py-[40px]">
        <div className="flex min-w-0 flex-col gap-5 xl:flex-row xl:items-center xl:gap-[50px]">
          <div className="min-w-0 xl:w-[240px] xl:shrink-0 xl:self-start xl:mt-[8px]">
            <h3 className="text-[24px] font-medium text-jd-text">Travel Bookings</h3>
            <p className="mt-3 max-w-[280px] text-[14px] leading-[1.55] text-jd-text">
              Instant ticket bookings for your best travel experience
            </p>
            <a href="#" className="mt-3 inline-block text-[14px] font-medium text-jd-blue hover:underline">
              Explore More
            </a>
          </div>
          <div className="grid min-w-0 grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 xl:min-w-0 xl:flex-1 xl:gap-0">
            {travelModes.map((mode) => (
              <a
                key={mode.title}
                href="#"
                className="group flex flex-col items-center text-center"
              >
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-xl border border-jd-border bg-white p-2.5 group-hover:border-jd-blue transition-colors duration-150 md:h-[94px] md:w-[94px] md:p-0">
                  {mode.image ? (
                    <Image
                      src={mode.image}
                      alt={mode.title}
                      width={47}
                      height={47}
                      unoptimized
                      className="h-[38px] w-[38px] object-contain md:h-[90px] md:w-[90px]"
                    />
                  ) : (
                    <span className="text-2xl">{mode.emoji}</span>
                  )}
                </div>
                <span className="mt-3 break-words text-[14px] font-normal leading-tight text-jd-text sm:mt-4 sm:text-[16px] md:mt-6">{mode.title}</span>
                {mode.note && (
                  <span className="mt-2 text-[13px] font-normal leading-[1.35] text-green-700">{mode.note}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
