import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { recentActivities } from "@/lib/data";

export function RecentActivity() {
  return (
    <section className="mx-auto w-full max-w-[1660px] px-4 pb-6 pt-1 md:px-5 lg:px-6">
      <div className="mb-4">
        <h2 className="text-[24px] font-semibold leading-tight tracking-[-0.02em] text-black md:text-[28px]">
          Recent Activity
        </h2>
      </div>

      <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
        {recentActivities.map((item) => (
          <article
            key={`${item.title}-${item.reviewerName}`}
            className="group overflow-hidden rounded-[12px] border border-[#d0d0d0] bg-white"
          >
            <div className="flex min-h-[88px] items-center justify-between gap-2 px-4 py-3">
              <div className="min-w-0">
                <h3 className="text-[18px] font-semibold leading-[1.2] tracking-[-0.02em] text-black md:text-[20px]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[12px] text-[#777] md:text-[14px]">{item.location}</p>
              </div>

              <button
                type="button"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-[6px] border border-[#c8c8c8] bg-white px-2 py-1.5 text-[13px] font-medium text-black md:px-2.5 md:text-[15px]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-[3px] bg-[#20b038] text-white">
                  <MessageCircle size={16} />
                </span>
                WhatsApp
              </button>
            </div>

            <div className="relative h-[180px] w-full overflow-hidden bg-[#f3f4f6]">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover"
                />
              ) : null}
            </div>

            <div className="min-h-[180px] px-4 pb-4 pt-4">
              <div className="flex items-center gap-2.5">
                <div className="relative h-[40px] w-[40px] shrink-0 overflow-hidden rounded-full bg-[#eee]">
                  {item.reviewerImage ? <Image src={item.reviewerImage} alt="" fill unoptimized className="object-cover" /> : null}
                </div>
                <div>
                  <p className="text-[14px] font-medium text-black">{item.reviewerName}</p>
                  <p className="text-[12px] text-[#777]">{item.reviewerRole}</p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-0 text-[20px] leading-none text-[#ff4b12]">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <span key={`${item.title}-star-${index}`}>★</span>
                ))}
              </div>

              <p className="mt-3 line-clamp-3 text-[12px] leading-[1.3] text-black md:text-[14px]">
                {item.review}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          className="w-full max-w-[480px] rounded-[7px] border border-[#ccc] bg-white px-6 py-2.5 text-[14px] font-medium text-[#0074e8] md:text-[15px]"
        >
          Load More
        </button>
      </div>
    </section>
  );
}
