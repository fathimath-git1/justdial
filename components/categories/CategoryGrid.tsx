import { topCategories, secondaryCategories } from "@/lib/data";
import { CategoryCard } from "./CategoryCard";

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-content px-4 py-6 md:px-6">
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
    <section className="mx-auto max-w-content px-4 py-6 md:px-6">
      <div className="grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-5 md:grid-cols-10">
        {secondaryCategories.map((cat) => (
          <CategoryCard key={cat.title} category={cat} />
        ))}
      </div>
    </section>
  );
}
