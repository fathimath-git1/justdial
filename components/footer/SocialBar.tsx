import { Facebook, Youtube, Instagram, Linkedin, Twitter } from "lucide-react";

const socials = [
  { Icon: Facebook, bg: "bg-[#3b5998]", label: "Facebook" },
  { Icon: Youtube, bg: "bg-[#ff0000]", label: "YouTube" },
  { Icon: Instagram, bg: "bg-gradient-to-tr from-pink-500 to-orange-400", label: "Instagram" },
  { Icon: Linkedin, bg: "bg-[#0077b5]", label: "LinkedIn" },
  { Icon: Twitter, bg: "bg-black", label: "X" },
];

export function SocialBar() {
  return (
    <section className="mx-auto flex max-w-content flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6">
      <div className="flex items-center gap-3">
        <span className="text-base font-bold text-jd-text">Follow us on</span>
        <div className="flex items-center gap-2.5">
          {socials.map(({ Icon, bg, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${bg} hover:opacity-85 transition-opacity duration-150`}
            >
              <Icon className="h-4 w-4" fill="currentColor" />
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="flex h-10 items-center gap-2 rounded-lg bg-black px-3.5 text-white hover:opacity-90 transition-opacity duration-150 shadow-sm"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a2.373 2.373 0 0 1-.61-1.614V3.428c0-.62.227-1.196.609-1.614zM15.206 13.414l2.766-2.766-2.766-2.766L12.378 10.648l2.828 2.766zm4.18-1.352l-2.029-2.029-2.828 2.828 2.828 2.828 2.03-2.029a1.996 1.996 0 0 0 0-1.598zM4.653 23.23l10.183-10.183-2.828-2.828L1.825 20.399a2.38 2.38 0 0 0 2.828 2.831z"/>
          </svg>
          <span className="text-left leading-tight">
            <span className="block text-[8px] tracking-wider uppercase opacity-80">GET IT ON</span>
            <span className="block text-xs font-bold">Google Play</span>
          </span>
        </a>
        <a
          href="#"
          className="flex h-10 items-center gap-2 rounded-lg bg-black px-3.5 text-white hover:opacity-90 transition-opacity duration-150 shadow-sm"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.35c.66-.8 1.11-1.92.99-3.04-.96.04-2.13.64-2.81 1.44-.61.71-1.14 1.86-1 2.98 1.07.08 2.16-.57 2.82-1.38z"/>
          </svg>
          <span className="text-left leading-tight">
            <span className="block text-[8px] tracking-wider uppercase opacity-80">Download on the</span>
            <span className="block text-xs font-bold">App Store</span>
          </span>
        </a>
      </div>
    </section>
  );
}
