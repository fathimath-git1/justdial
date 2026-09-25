"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, Search } from "lucide-react";
import { cities } from "@/lib/data";
import { cn } from "@/lib/utils";

interface LocationSelectorProps {
  className?: string;
  compact?: boolean;
}

export function LocationSelector({ className, compact = false }: LocationSelectorProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("Malappuram");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const filtered = cities.filter((c) =>
    c.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-label="Choose your location"
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center gap-2 rounded-md border border-gray-300 bg-gray-50 px-3 text-left text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${compact ? "h-12 text-xs" : "h-[51px] text-[13px]"}`}
      >
        <Image src="/images/navbar/location_icon.svg" alt="" width={14} height={18} unoptimized className={`${compact ? "h-[22px] w-[18px]" : "h-[18px] w-[14px]"} shrink-0`} />
        <span className="truncate">{selected}</span>
      </button>

      {open && (
        <div className="absolute left-0 z-50 mt-1.5 w-[320px] max-w-[90vw] rounded-lg border border-gray-200 bg-white p-3 shadow-cardHover animate-fade-slide">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-jd-text">Select Location</span>
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="rounded p-1 hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mb-3 flex items-center gap-2 rounded-md border border-gray-300 px-2.5 py-2">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for area / city"
              className="w-full text-sm outline-none"
            />
          </div>
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Popular Cities
          </p>
          <div className="max-h-56 overflow-y-auto scrollbar-thin">
            {filtered.map((city) => (
              <button
                key={city}
                onClick={() => {
                  setSelected(city);
                  setOpen(false);
                  setQuery("");
                }}
                className="block w-full rounded px-2 py-1.5 text-left text-sm text-gray-700 hover:bg-sky-50 hover:text-jd-blue transition-colors duration-150"
              >
                {city}
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="px-2 py-1.5 text-sm text-gray-400">No matches found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
