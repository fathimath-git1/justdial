"use client";

import { useState } from "react";
import {
  popularCategoryTabs,
  trendingSearchesFooter,
  jdGuideLinks,
  jdCollections,
} from "@/lib/data";
import { cn } from "@/lib/utils";

function PipeList({ items }: { items: string[] }) {
  return (
    <p className="text-[12px] font-medium leading-5 tracking-[-0.15px] text-gray-600">
      {items.map((item, i) => (
        <span key={item}>
          <a href="#" className="hover:text-jd-blue hover:underline">
            {item}
          </a>
          {i < items.length - 1 && (
            <>
              {" "}
              <span className="mx-1.5 text-gray-300">|</span>
              {" "}
            </>
          )}
        </span>
      ))}
    </p>
  );
}

export function PopularCategories() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="mx-auto max-w-[1720px] px-2 py-6">
      <h2 className="mb-4 text-[13px] font-medium leading-5 tracking-[-0.15px] text-jd-text">Popular Categories</h2>

      <div className="flex flex-wrap gap-1 border-b border-jd-border">
        {popularCategoryTabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            className={cn(
              "min-w-0 grow basis-[calc(50%-0.25rem)] whitespace-normal px-2 py-2.5 text-center text-[12px] font-medium tracking-[-0.15px] transition-colors duration-150 sm:px-3 md:basis-auto md:grow-0 md:whitespace-nowrap md:px-4",
              activeTab === i
                ? "border-b-2 border-jd-blue text-jd-text"
                : "text-gray-500 hover:text-jd-text"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-4">
        <PipeList items={popularCategoryTabs[activeTab].items} />
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-[13px] font-medium leading-5 tracking-[-0.15px] text-jd-text">Trending Searches</h3>
        <PipeList items={trendingSearchesFooter} />
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-[13px] font-medium leading-5 tracking-[-0.15px] text-jd-text">Explore JD Guide</h3>
        <PipeList items={jdGuideLinks} />
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-[13px] font-medium leading-5 tracking-[-0.15px] text-jd-text">Explore JD Collections</h3>
        <PipeList items={jdCollections} />
      </div>
    </section>
  );
}
