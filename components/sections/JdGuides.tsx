import Image from "next/image";
import { ChevronRight } from "lucide-react";

const guides = [
  {
    title: "Your 8 Step Guide to Using JD Mart for Bulk and Wholesale Buying",
    image: "/images/guide_1789542087476_1154r_2752x1536.jpg",
  },
  {
    title: "How Small Businesses Can List and Grow on Justdial for Free",
    image: "/images/guide_1789541963775_zxim3_1678x937.jpg",
  },
  {
    title: "A Weekend in Delhi How Justdial Can Help You Find Places to Eat, Shop & Explore",
    image: "/images/guide_1789535509908_aqtrt_2000x945.jpg",
  },
];

export function JdGuides() {
  return (
    <section className="mx-auto w-full max-w-[1680px] px-4 py-10 md:px-6 lg:px-8">
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-[22px] font-semibold leading-tight text-black md:text-[26px]">Jd Guides</h2>
        <a href="#" className="inline-flex items-center gap-1 text-[13px] font-medium text-[#0074e8] md:text-[15px]">
          Explore more <ChevronRight size={18} />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-[34px]">
        {guides.map((guide) => (
          <article key={guide.title} className="overflow-hidden rounded-[14px] border border-[#d0d0d0] bg-white">
            <div className="relative aspect-[1.72/1] w-full overflow-hidden bg-[#f3f4f6]">
              <Image src={guide.image} alt={guide.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw" className="object-cover" />
            </div>
            <div className="min-h-[138px] px-6 py-4">
              <h3 className="line-clamp-2 text-[16px] font-medium leading-[1.35] text-[#171717] md:text-[18px]">
                {guide.title}
              </h3>
              <a href="#" className="mt-2 inline-block text-[13px] font-medium text-[#0074e8] md:text-[15px]">
                Explore
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
