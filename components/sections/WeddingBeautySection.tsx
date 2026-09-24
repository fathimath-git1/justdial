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
    <div className="rounded-xl border border-jd-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-lg font-bold text-jd-text">{title}</h3>
      <div className="grid grid-cols-3 gap-3">
        {items.map((item) => (
          <a key={item.title} href="#" className="group block text-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 shadow-sm">
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
            <p className="mt-2 text-xs font-semibold leading-tight text-jd-text group-hover:text-jd-blue transition-colors">
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
    <section className="mx-auto max-w-content px-4 py-4 md:px-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <GroupBox title="Wedding Requisites" items={weddingRequisites} />
        <GroupBox title="Beauty & Spa" items={beautySpa} />
        <GroupBox title="Repairs & Services" items={repairsServices} />
        <GroupBox title="Daily Needs" items={dailyNeeds} />
      </div>
    </section>
  );
}
