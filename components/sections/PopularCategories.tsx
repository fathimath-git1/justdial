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
    <p className="text-sm leading-loose text-gray-600">
      {items.map((item, i) => (
        <span key={item}>
          <a href="#" className="hover:text-jd-blue hover:underline">
            {item}
          </a>
          {i < items.length - 1 && <span className="mx-1.5 text-gray-300">|</span>}
        </span>
      ))}
    </p>
  );
}

export function PopularCategories() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="mx-auto max-w-content px-4 py-6 md:px-6">
      <h2 className="mb-4 text-xl font-bold text-jd-text">Popular Categories</h2>

      <div className="flex gap-1 overflow-x-auto no-scrollbar border-b border-jd-border">
        {popularCategoryTabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            className={cn(
              "shrink-0 whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors duration-150",
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
        <h3 className="mb-3 text-lg font-bold text-jd-text">Trending Searches</h3>
        <PipeList items={trendingSearchesFooter} />
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-lg font-bold text-jd-text">Explore JD Guide</h3>
        <PipeList items={jdGuideLinks} />
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-lg font-bold text-jd-text">Explore JD Collections</h3>
        <PipeList items={jdCollections} />
      </div>
    </section>
  );
}
