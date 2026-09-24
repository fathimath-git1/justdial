import { getIcon } from "@/lib/icon-map";
import type { Category } from "@/lib/types";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = getIcon(category.iconKey);
  const isPopular = category.title === "Popular Categories";

  return (
    <a
      href="#"
      className="group flex flex-col items-center gap-2 text-center"
      aria-label={category.title}
    >
      <span
        className={`flex h-[72px] w-[72px] items-center justify-center rounded-2xl transition-all duration-200 ${
          isPopular
            ? "bg-[#0076d7] text-white shadow-md group-hover:bg-blue-700"
            : "border border-jd-border bg-white shadow-card group-hover:border-jd-blue group-hover:shadow-cardHover"
        }`}
      >
        <Icon
          className={`h-8 w-8 ${isPopular ? "text-white" : "text-jd-blue"}`}
          strokeWidth={isPopular ? 2 : 1.6}
        />
      </span>
      <span className="flex flex-col items-center text-xs font-semibold leading-tight text-jd-text group-hover:text-jd-blue transition-colors">
        {category.title}
        {category.badge && (
          <span className="mt-1 rounded bg-red-50 px-1 py-0.2 text-[10px] font-bold text-red-500">
            {category.badge}
          </span>
        )}
      </span>
    </a>
  );
}
