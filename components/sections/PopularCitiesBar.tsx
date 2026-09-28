import { popularCities } from "@/lib/data";

export function PopularCitiesBar() {
  return (
    <section className="mx-auto max-w-[1720px] px-2 py-5">
      <h2 className="mb-3 text-[13px] font-medium leading-5 tracking-[-0.15px] text-jd-text">Popular Cities</h2>
      <p className="text-[12px] font-medium leading-5 tracking-[-0.15px] text-gray-600">
        {popularCities.map((city, i) => (
          <span key={city}>
            <a href="#" className="hover:text-jd-blue hover:underline">
              {city}
            </a>
            {i < popularCities.length - 1 && (
              <>
                {" "}
                <span className="mx-1.5 text-gray-300">|</span>
                {" "}
              </>
            )}
          </span>
        ))}
      </p>
    </section>
  );
}
