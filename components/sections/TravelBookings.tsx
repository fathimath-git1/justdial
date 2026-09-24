import Image from "next/image";
import { travelModes } from "@/lib/data";

export function TravelBookings() {
  return (
    <section className="mx-auto max-w-content px-4 py-4 md:px-6">
      <div className="rounded-lg border border-jd-border p-5 shadow-card">
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <div className="md:w-[220px] shrink-0">
            <h3 className="text-lg font-bold text-jd-text">Travel Bookings</h3>
            <p className="mt-1 text-sm text-gray-500">
              Instant ticket bookings for your best travel experience
            </p>
            <a href="#" className="mt-2 inline-block text-sm font-medium text-jd-blue hover:underline">
              Explore More
            </a>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-4 sm:grid-cols-5">
            {travelModes.map((mode) => (
              <a
                key={mode.title}
                href="#"
                className="group flex flex-col items-center gap-2 text-center"
              >
                <div className="flex h-[66px] w-[66px] items-center justify-center rounded-2xl border border-jd-border bg-white p-2.5 shadow-sm group-hover:border-jd-blue transition-colors duration-150">
                  {mode.image ? (
                    <Image
                      src={mode.image}
                      alt={mode.title}
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-2xl">{mode.emoji}</span>
                  )}
                </div>
                <span className="text-sm font-semibold text-jd-text">{mode.title}</span>
                {mode.note && (
                  <span className="text-[11px] font-medium text-emerald-600 leading-tight">{mode.note}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
