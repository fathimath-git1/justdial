"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Mic, Search } from "lucide-react";

const BASE_SUGGESTIONS = [
  "Restaurants", "Restaurants Near Me", "Best Restaurants", "Restaurants in Kochi",
  "Doctors", "Doctors Near Me", "Best Doctors", "Doctors in Kochi",
  "Hotels", "Hotels Near Me", "Budget Hotels", "Hotels in Kochi",
  "Spa & Salons", "Spa Near Me", "Best Spa & Salons", "Spa & Salons in Kochi",
];

export function SearchBar() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
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

  const suggestions = useMemo(() => {
    if (!value.trim()) return [];
    const q = value.trim().toLowerCase();
    const root = q.charAt(0).toUpperCase() + q.slice(1);
    return [
      root,
      `${root} Near Me`,
      `Best ${root}`,
      `${root} in Kochi`,
    ].filter((s, i, arr) => arr.indexOf(s) === i);
  }, [value]);

  return (
    <div ref={containerRef} className="relative flex-1">
      <div className="flex items-center gap-2 rounded-md border border-gray-300 bg-white pl-3.5 pr-1.5 py-2.5 focus-within:border-jd-blue focus-within:ring-1 focus-within:ring-jd-blue transition-colors duration-200">
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setOpen(true);
          }}
          onFocus={() => value && setOpen(true)}
          placeholder="Search for Spa & Salons"
          aria-label="Search for businesses and services"
          className="w-full text-sm text-gray-700 placeholder:text-gray-400 outline-none"
        />
        <button
          type="button"
          aria-label="Search by voice"
          className="shrink-0 rounded-full p-1.5 hover:bg-gray-100 transition-colors duration-150"
        >
          <Mic className="h-[18px] w-[18px] text-jd-blue" />
        </button>
        <button
          type="button"
          aria-label="Search"
          className="flex shrink-0 items-center justify-center rounded-md bg-jd-orange p-2 text-white hover:bg-orange-600 transition-colors duration-150"
        >
          <Search className="h-[18px] w-[18px]" />
        </button>
      </div>

      {open && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 z-50 mt-1.5 rounded-md border border-gray-200 bg-white py-1.5 shadow-cardHover animate-fade-slide">
          {suggestions.map((s) => (
            <li key={s}>
              <button
                type="button"
                onClick={() => {
                  setValue(s);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 px-3.5 py-2 text-left text-sm text-gray-700 hover:bg-sky-50 hover:text-jd-blue transition-colors duration-150"
              >
                <Search className="h-3.5 w-3.5 text-gray-400" />
                {s}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
