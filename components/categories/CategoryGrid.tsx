import { topCategories, secondaryCategories } from "@/lib/data";
import { CategoryCard } from "./CategoryCard";

export function CategoryGrid() {
  return (
    <section className="mx-auto w-full px-4 py-5 md:px-[46px]">
      <div className="grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-5 md:grid-cols-10">
        {topCategories.map((cat) => (
          <CategoryCard key={cat.title} category={cat} />
        ))}
      </div>
    </section>
  );
}

export function SecondaryCategoryGrid() {
  return (
    <section className="mx-auto w-full px-4 py-5 md:px-[46px]">
      <div className="grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-5 md:grid-cols-10">
        {secondaryCategories.map((cat) => (
          <CategoryCard key={cat.title} category={cat} />
        ))}
      </div>
    </section>
  );
}
