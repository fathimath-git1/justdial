import Image from "next/image";
import { touristPlaces } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TouristPlaces() {
  return (
    <section className="mx-auto max-w-content px-4 py-4 md:px-6">
      <div className="rounded-lg border border-jd-border p-5 shadow-card">
        <SectionHeader title="Explore Top Tourist Places" badge="New" />
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-1">
          {touristPlaces.map((place) => (
            <a
              key={place.name}
              href="#"
              className="group flex w-[260px] shrink-0 items-center gap-3 rounded-lg border border-jd-border p-2 hover:border-jd-blue hover:shadow-cardHover transition-all duration-200"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-gray-100">
                {place.image ? (
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                ) : null}
              </div>
              <div>
                <p className="text-base font-bold text-jd-text">{place.name}</p>
                <span className="text-sm font-medium text-jd-blue group-hover:underline">Explore ›</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
