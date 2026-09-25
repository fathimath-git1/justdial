import Image from "next/image";
import {
  weddingRequisites,
  beautySpa,
  repairsServices,
  dailyNeeds,
} from "@/lib/data";
import type { CardItem } from "@/lib/types";

function GroupBox({ title, items }: { title: string; items: CardItem[] }) {
  return (
    <div className="rounded-xl border border-jd-border bg-white px-[30px] pb-[18px] pt-[18px]">
      <h3 className="mb-3 text-lg font-medium text-jd-text">{title}</h3>
      <div className="grid grid-cols-3 gap-x-[30px]">
        {items.map((item) => (
          <a key={item.title} href="#" className="group block text-center">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              ) : null}
            </div>
            <p className="mt-4 text-[13px] font-normal leading-tight text-jd-text group-hover:text-jd-blue transition-colors">
              {item.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export function WeddingBeautySection() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-4 md:px-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-[30px] md:gap-y-[30px]">
        <GroupBox title="Wedding Requisites" items={weddingRequisites} />
        <GroupBox title="Beauty & Spa" items={beautySpa} />
        <GroupBox title="Repairs & Services" items={repairsServices} />
        <GroupBox title="Daily Needs" items={dailyNeeds} />
      </div>
    </section>
  );
}
