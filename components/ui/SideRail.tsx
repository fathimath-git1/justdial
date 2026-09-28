"use client";

export function SideRail() {
  return (
    <div className="fixed right-0 top-[40%] z-30 hidden flex-col gap-2 md:flex">
      <button className="w-[42px] rounded-l-[9px] bg-[#e5460b] px-1 py-3 text-[13px] font-bold tracking-normal text-white [writing-mode:vertical-rl] hover:bg-orange-600 transition-colors duration-150">
        Advertise
      </button>
      <button className="w-[42px] rounded-l-[9px] bg-[#0078d7] px-1 py-3 text-[13px] font-bold tracking-normal text-white [writing-mode:vertical-rl] hover:bg-sky-600 transition-colors duration-150">
        Free Listing
      </button>
    </div>
  );
}
