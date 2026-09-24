"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { topCategories, secondaryCategories } from "@/lib/data";
import { getIcon } from "@/lib/icon-map";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="rounded p-1.5 hover:bg-gray-100 md:hidden"
      >
        <Menu className="h-6 w-6 text-jd-text" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div
            className="absolute inset-0 bg-black/40 animate-fade-slide"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[82%] max-w-sm overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-jd-border px-4 py-3.5">
              <Image
                src="/images/oska-logo.png"
                alt="OSKA Ventures LLP"
                width={90}
                height={36}
                className="h-9 w-auto object-contain"
              />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded p-1.5 hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col divide-y divide-jd-border">
              <a href="#" className="flex items-center justify-between px-4 py-3 text-sm font-medium">
                Login / Sign Up <ChevronRight className="h-4 w-4 text-gray-400" />
              </a>
              <a href="#" className="flex items-center justify-between px-4 py-3 text-sm">
                Free Listing <ChevronRight className="h-4 w-4 text-gray-400" />
              </a>
              <a href="#" className="flex items-center justify-between px-4 py-3 text-sm">
                Advertise <ChevronRight className="h-4 w-4 text-gray-400" />
              </a>
              <a href="#" className="flex items-center justify-between px-4 py-3 text-sm">
                Leads <ChevronRight className="h-4 w-4 text-gray-400" />
              </a>
            </div>

            <p className="px-4 pt-4 pb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Categories
            </p>
            <div className="grid grid-cols-3 gap-3 px-4 pb-6">
              {[...topCategories, ...secondaryCategories].map((cat) => {
                const Icon = getIcon(cat.iconKey);
                return (
                  <a
                    key={cat.title}
                    href="#"
                    className="flex flex-col items-center gap-1.5 rounded-lg border border-jd-border p-2.5 text-center hover:border-jd-blue transition-colors duration-150"
                  >
                    <Icon className="h-5 w-5 text-jd-blue" />
                    <span className="text-[11px] leading-tight text-gray-700">{cat.title}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
