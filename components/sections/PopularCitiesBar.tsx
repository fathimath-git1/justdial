import { popularCities } from "@/lib/data";

export function PopularCitiesBar() {
  return (
    <section className="mx-auto max-w-content px-4 py-5 md:px-6">
      <h2 className="mb-3 text-lg font-bold text-jd-text">Popular Cities</h2>
      <p className="text-sm leading-loose text-gray-600">
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
