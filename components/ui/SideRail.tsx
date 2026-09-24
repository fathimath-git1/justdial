"use client";

export function SideRail() {
  return (
    <div className="fixed right-0 top-1/3 z-30 hidden flex-col gap-0.5 md:flex">
      <button className="w-8 rounded-l-md bg-jd-orange px-1.5 py-4 text-xs font-semibold tracking-wide text-white [writing-mode:vertical-rl] hover:bg-orange-600 transition-colors duration-150">
        Advertise
      </button>
      <button className="w-8 rounded-l-md bg-jd-blue px-1.5 py-4 text-xs font-semibold tracking-wide text-white [writing-mode:vertical-rl] hover:bg-sky-600 transition-colors duration-150">
        Free Listing
      </button>
    </div>
  );
}
