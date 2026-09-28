import Image from "next/image";

const socials = [
  { image: "flw_facebook_active.svg", label: "Facebook" },
  { image: "flw_youtube_active.svg", label: "YouTube" },
  { image: "flw_insta_active.svg", label: "Instagram" },
  { image: "flw_linkedIn_active.svg", label: "LinkedIn" },
  { image: "flw_twitter_active.svg", label: "X" },
];

export function SocialBar() {
  return (
    <section className="mx-auto flex min-h-[112px] max-w-[1720px] flex-col gap-4 border-y border-jd-border px-2 py-7 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-5">
        <span className="whitespace-nowrap text-[18px] font-normal text-jd-text">Follow us on</span>
        <div className="flex items-center gap-2">
          {socials.map(({ image, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="transition-opacity duration-150 hover:opacity-85"
            >
              <Image src={`/images/restaurant-page/${image}`} alt="" width={30} height={30} unoptimized className="h-[30px] w-[30px]" />
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 sm:ml-auto">
        <a
          href="#"
          aria-label="Get it on Google Play"
          className="transition-opacity duration-150 hover:opacity-90"
        >
          <Image src="/images/restaurant-page/getapp_googleplay.avif" alt="Get it on Google Play" width={100} height={30} unoptimized className="h-[30px] w-[100px] object-contain" />
        </a>
        <a
          href="#"
          aria-label="Download on the App Store"
          className="transition-opacity duration-150 hover:opacity-90"
        >
          <Image src="/images/restaurant-page/getapp_appstore.avif" alt="Download on the App Store" width={100} height={30} unoptimized className="h-[30px] w-[100px] object-contain" />
        </a>
      </div>
    </section>
  );
}
