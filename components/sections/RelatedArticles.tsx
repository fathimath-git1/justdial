import Image from "next/image";
import { ChevronRight } from "lucide-react";

const articles = [
  {
    title: "From Ancient Ritual to Modern Marvel: Unleashing the Power of Hijama and...",
    image: "/images/listicle_1706532510405_v1y9h_847x400.jpg",
  },
  {
    title: "The Art of Dining: 5 Unique Restaurants in India That Turn Dining Into an Experience",
    image: "/images/listicle_1787225109992_uri3o_2000x945.jpg",
  },
];

export function RelatedArticles() {
  return (
    <section className="mx-auto w-full max-w-[1680px] px-4 pb-10 pt-20 md:px-6 lg:px-8 lg:pt-[100px]">
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-[21px] font-semibold leading-tight text-black md:text-[26px]">Related Articles</h2>
        <a href="#" className="inline-flex items-center gap-1 text-[12px] font-medium text-[#0074e8] md:text-[14px]">
          Explore more <ChevronRight size={18} />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-[34px]">
        {articles.map((article) => (
          <article key={article.title} className="overflow-hidden rounded-[14px] border border-[#d0d0d0] bg-white">
            <div className="relative aspect-[1.72/1] w-full overflow-hidden bg-[#f3f4f6]">
              <Image src={article.image} alt={article.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw" className="object-cover" />
            </div>
            <div className="min-h-[138px] px-5 py-4">
              <h3 className="line-clamp-2 text-[15px] font-medium leading-[1.35] text-[#171717] md:text-[18px]">
                {article.title}
              </h3>
              <a href="#" className="mt-2 inline-block text-[12px] font-medium text-[#0074e8] md:text-[14px]">
                Explore
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
