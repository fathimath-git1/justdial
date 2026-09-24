const aboutBlocks = [
  {
    title: "B2B",
    text:
      "Experience the ultimate B2B portal by Justdial. You can explore countless diverse categories, innumerable top-quality vendors, and an unmatched wholesale experience. You'll find everything you need for B2B requirements on this exclusive platform. Our interactive interface allows you to apply relevant filters, ascertain the best rates, and get instant assistance via chat.",
  },
  {
    title: "All India",
    text:
      "Elevate your search for B2B requisites. From lead generation to promoting and selling products/services, Justdial enables enterprises to reach vast audiences all across India. Embracing digital strategies, Justdial India encompasses manufacturers, dealers, suppliers, vendors, wholesalers, and more, offering convenience in the B2B market space and empowering commerce nationwide.",
  },
  {
    title: "Packers and Movers",
    text:
      "If you're relocating to another place, or even if you just want to send some belongings elsewhere, find the best deals on the most reliable packers and movers for your location. Get quotes from multiple agencies, read reviews from previous customers, and check ratings before making a selection for a hassle-free experience.",
  },
  {
    title: "Order Food Online",
    text:
      "You are just three clicks away from placing an order and exploring a wide range of exotic cuisines. Order food online with Justdial and get your favourite food delivered at your doorstep. Search for restaurants, view reviews and ratings, avail discounts and order your food.",
  },
];

export function AboutSection() {
  return (
    <section className="mx-auto max-w-content px-4 py-6 md:px-6">
      <h2 className="mb-3 text-xl font-bold text-jd-text">
        One-Stop for All Local Businesses, Services, &amp; Stores Nearby Across India
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-gray-600">
        <p>
          Welcome to Justdial, your &apos;one stop shop&apos; where you are assisted with
          day-to-day and exclusive planning and purchasing activities. We take pride
          in our iconic customer support number, 8888888888 and the fact that we own
          a strong hold on local business information pan India.
        </p>
        <p>
          Our service extends from providing address and contact details of business
          establishments around the country, to making orders and reservations for
          leisure, medical, financial, travel and domestic purposes. We enlist
          business information across varied sectors like Hotels, Restaurants, Auto
          Care, Home Decor, Personal and Pet Care, Fitness, Insurance, Real Estate,
          Sports, Schools, etc. from all over the country. Holding information right
          from major cities like Mumbai, Delhi, Bangalore, Hyderabad, Chennai,
          Ahmedabad and Pune our reach stretches out to other smaller cities across
          the country too.
        </p>
        <p>
          Our &apos;Free Listing&apos; feature gives a platform to showcase varied
          specialities. We then furnish you with the information via phone, SMS,
          web, App and WAP as well as, create a space for you to share your
          experiences through our &apos;Rate &amp; Review&apos; feature. Through the
          &apos;Best Deals&apos;, &apos;Last Minute Deals&apos; and &apos;Live
          Quotes&apos;, we make sure that you are offered the best bargains in the
          market.
        </p>
      </div>

      <h3 className="mb-4 mt-8 text-lg font-bold text-jd-text">
        Some of our services that will prove useful to you on a day-to-day basis are:
      </h3>
      <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {aboutBlocks.map((b) => (
          <div key={b.title}>
            <h4 className="text-base font-bold text-jd-text">{b.title}</h4>
            <p className="mt-1.5 line-clamp-6 text-sm leading-relaxed text-gray-600">
              {b.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
