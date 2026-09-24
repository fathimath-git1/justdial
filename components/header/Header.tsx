import Link from "next/link";
import Image from "next/image";
import { Mail, Megaphone, TrendingUp, Bell } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { LocationSelector } from "./LocationSelector";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-jd-border bg-white">
      <div className="mx-auto flex max-w-content items-center gap-3 px-4 py-3 md:gap-5 md:px-6">
        <Link href="/" className="shrink-0" aria-label="OSKA Ventures LLP home">
          <Image
            src="/images/oska-logo.png"
            alt="OSKA Ventures LLP"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop location + search */}
        <div className="hidden flex-1 items-center gap-2.5 md:flex">
          <LocationSelector className="w-[260px] shrink-0" />
          <SearchBar />
        </div>

        {/* Desktop right nav */}
        <nav className="ml-auto hidden shrink-0 items-center gap-4 text-sm text-jd-text md:flex">
          <a
            href="#"
            className="flex items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1.5 hover:bg-gray-50 transition-colors duration-150"
          >
            <Mail className="h-4 w-4" />
            Leads
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-jd-blue transition-colors duration-150">
            <Megaphone className="h-4 w-4" />
            Advertise
          </a>
          <a href="#" className="flex flex-col items-start leading-tight hover:text-jd-blue transition-colors duration-150">
            <span className="rounded-sm bg-jd-orange px-1 text-[10px] font-bold uppercase text-white">
              Business
            </span>
            <span className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              Free Listing
            </span>
          </a>
          <button aria-label="Notifications" className="rounded-full p-1.5 hover:bg-gray-100 transition-colors duration-150">
            <Bell className="h-5 w-5" />
          </button>
          <button className="rounded-md bg-jd-blue px-4 py-2 font-semibold text-white hover:bg-sky-600 transition-colors duration-150">
            Login / Sign Up
          </button>
        </nav>

        <MobileMenu />
      </div>

      {/* Mobile location + search row */}
      <div className="flex flex-col gap-2 border-t border-jd-border px-4 py-2.5 md:hidden">
        <LocationSelector />
        <SearchBar />
      </div>
    </header>
  );
}
