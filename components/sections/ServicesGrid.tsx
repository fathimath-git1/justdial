import { servicesGrid } from "@/lib/data";
import { getIcon } from "@/lib/icon-map";

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-content px-4 py-6 md:px-6">
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        {servicesGrid.map((service) => {
          const Icon = getIcon(service.iconKey);
          return (
            <div key={service.title} className="flex gap-3.5">
              <Icon className="mt-1 h-6 w-6 shrink-0 text-jd-text" strokeWidth={1.5} />
              <div>
                <h3 className="text-base font-bold text-jd-text">{service.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
