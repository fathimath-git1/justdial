import { servicesGrid } from "@/lib/data";
import Image from "next/image";

const serviceIcons: Record<string, string> = {
  Jobs: "ftr_jobs.svg",
  Movies: "ftr_movies.svg",
  "Spa & Salon": "ftr_spa-salon.svg",
  "Repair & Services": "ftr_repairservices.svg",
  "Doctor Appointment": "ftr_doctorappointment.svg",
  "Real Estate Agents": "ftr_realestateagent.svg",
  "Online Recharge/Bill Payment": "ftr_onlinerecharge.svg",
};

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-[1720px] px-2 pb-10 pt-2">
      <div className="grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 lg:grid-cols-4">
        {servicesGrid.map((service) => {
          return (
            <div key={service.title}>
              <div className="mb-4 flex items-center gap-3">
                <Image src={`/images/footer-services/${serviceIcons[service.title]}`} alt="" width={30} height={30} unoptimized className="h-[30px] w-[30px] object-contain" />
                <h3 className="text-[16px] font-normal leading-normal tracking-[-0.2px] text-jd-text">{service.title}</h3>
              </div>
              <div>
                <p className="text-[12px] leading-5 tracking-[-0.2px] text-gray-600">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-20 text-[14px] font-semibold leading-6 tracking-[-0.2px] text-gray-700">
        Some of the other services that can be of assistance to you for leisure, health and home convenience are - Pest Control, Skin Care Clinics, Painters, Laundry Services, Interior Designers, Mobile Phone Repair, Vaccination Centres, Internet Service Providers, etc. With an endless number of things under the sun, you can be sure this will be your &apos;One Stop Shop&apos; to find everything and more.
      </p>
    </section>
  );
}
