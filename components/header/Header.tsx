"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { LocationSelector } from "./LocationSelector";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [showSearchHeader, setShowSearchHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSearchHeader(window.scrollY > 150);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Logo = ({ compact = false }: { compact?: boolean }) => (
    <Link href="/" aria-label="Justdial home" className="shrink-0">
      <Image src="/images/navbar/jdlogosvg.svg" alt="Justdial" width={compact ? 98 : 98} height={26} priority unoptimized className="h-auto w-[98px]" />
    </Link>
  );

  const DesktopNav = ({ compact = false }: { compact?: boolean }) => (
    <nav className="ml-auto hidden shrink-0 items-center gap-4 text-[14px] text-jd-text lg:flex">
      {!compact && <a href="#" className="flex items-center gap-1 hover:text-jd-blue"><Image src="/images/navbar/nav_language_icon.svg" alt="" width={17} height={24} unoptimized /><span>EN</span><Image src="/images/navbar/down_arrow5.svg" alt="" width={8} height={5} unoptimized /></a>}
      {!compact && <a href="#" className="whitespace-nowrap hover:text-jd-blue">We are Hiring</a>}
      {!compact && <a href="#" className="whitespace-nowrap hover:text-jd-blue">Investor Relations</a>}
      <a href="#" aria-label="Leads" className="shrink-0"><Image src="/images/navbar/leads-button-animation.GIF" alt="Leads" width={77} height={28} unoptimized className="h-7 w-[77px]" /></a>
      <a href="#" className="flex items-center gap-1 whitespace-nowrap hover:text-jd-blue"><Image src="/images/navbar/nav_advertise_icon.svg" alt="" width={16} height={16} unoptimized />Advertise</a>
      <a href="#" className="flex flex-col items-start leading-tight hover:text-jd-blue"><span className="ml-5 rounded-sm bg-[#ef233c] px-1 text-[8px] font-bold uppercase text-white">Business</span><span className="flex items-center gap-1"><Image src="/images/navbar/nav_listing_icon.svg" alt="" width={16} height={16} unoptimized />Free Listing</span></a>
      <button aria-label="Notifications" className="rounded-full p-1 hover:bg-gray-100"><Image src="/images/navbar/notify_icon.svg" alt="" width={19} height={19} unoptimized /></button>
      <button className="whitespace-nowrap rounded-md bg-[#0876ce] px-4 py-1.5 font-semibold text-white hover:bg-sky-600">Login / Sign Up</button>
    </nav>
  );

  return (
    <>
      <header className="relative z-30 border-b border-jd-border bg-white">
        <div className="mx-auto flex h-[83px] w-full items-center gap-3 px-4 md:gap-5 md:pl-[26px] md:pr-[58px]">
          <Logo />
          <DesktopNav />
          <MobileMenu />
        </div>
      </header>
      <div className={`fixed inset-x-0 top-0 z-50 border-b border-jd-border bg-white shadow-sm transition-transform duration-200 ${showSearchHeader ? "translate-y-0" : "-translate-y-full"}`} aria-hidden={!showSearchHeader}>
        <div className="mx-auto flex w-full items-center gap-3 px-4 py-2 md:pl-[44px] md:pr-[20px]">
          <Logo compact />
          <div className="ml-5 hidden shrink-0 items-center gap-4 lg:flex">
            <LocationSelector compact className="w-[246px] shrink-0" />
            <div className="w-[440px]"><SearchBar compact /></div>
          </div>
          <DesktopNav compact />
          <div className="flex min-w-0 flex-1 flex-col gap-1.5 lg:hidden"><LocationSelector compact /><SearchBar compact /></div>
        </div>
      </div>
    </>
  );
}
