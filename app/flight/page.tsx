"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FlightFooter } from "@/components/footer/FlightFooter";

const travelTabs = ["Flight", "Hotel", "Bus", "Cab", "Train", "Visa Assistance", "Foreign Exchange", "International Sim Card"];
type PassengerKey = "adults" | "children" | "infants";

export default function FlightPage() {
  const [journey, setJourney] = useState<"one-way" | "return">("one-way");
  const [passengers, setPassengers] = useState<Record<PassengerKey, number>>({ adults: 1, children: 0, infants: 0 });
  const [classOpen, setClassOpen] = useState(false);
  const [travelClass, setTravelClass] = useState("Economy");
  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  function changePassenger(type: PassengerKey, amount: number) {
    setPassengers((current) => {
      const nextValue = current[type] + amount;
      const total = current.adults + current.children + current.infants + amount;
      if (nextValue < (type === "adults" ? 1 : 0) || total > 9) return current;
      return { ...current, [type]: nextValue };
    });
  }

  return (
    <main className="min-h-screen bg-white font-sans text-[#111]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <header className="border-b border-[#7896b2] bg-white">
        <div className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <Link href="/" aria-label="Justdial home" className="flex items-end">
            <Image src="/images/navbar/jdlogosvg.svg" alt="Justdial" width={142} height={40} unoptimized className="h-auto w-[112px] sm:w-[142px]" />
            <span className="mb-0.5 text-[12px] text-[#5d6570]">TRAVEL</span>
          </Link>
          <div className="flex gap-4 text-sm text-[#53616d]"><a href="#login">LOGIN</a><a href="#signup">SIGNUP</a></div>
          <nav className="order-3 flex w-full flex-wrap justify-center gap-x-5 gap-y-2 px-1 pt-2 text-[13px] sm:gap-x-8 sm:text-[15px] lg:gap-x-12">
            {travelTabs.map((tab) => <a key={tab} href={tab === "Flight" ? "#flight-search" : "#travel-options"} className={`border-b-2 pb-2 ${tab === "Flight" ? "border-[#0876ce] text-[#0876ce]" : "border-transparent hover:text-[#0876ce]"}`}>{tab}</a>)}
          </nav>
        </div>
      </header>

      <section id="flight-search" className="relative isolate min-h-[560px] px-4 py-8 sm:px-6 sm:py-12 lg:min-h-[560px] lg:flex lg:items-center lg:py-6">
        <Image src="/images/travel/flight-banner.avif" alt="Airplane wing above the clouds" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-slate-900/20" />
        <form onSubmit={(event) => event.preventDefault()} className="mx-auto max-w-[850px] rounded-xl bg-black/75 p-5 text-white shadow-xl sm:p-6 lg:mt-0 lg:px-8 lg:py-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <fieldset className="flex gap-5 text-base sm:text-[18px]">
              <label className="flex items-center gap-2"><input type="radio" name="journey" checked={journey === "one-way"} onChange={() => setJourney("one-way")} className="h-4 w-4 accent-[#1686d9]" />One Way</label>
              <label className="flex items-center gap-2"><input type="radio" name="journey" checked={journey === "return"} onChange={() => setJourney("return")} className="h-4 w-4 accent-[#1686d9]" />Return Journey</label>
            </fieldset>
            <span className="text-sm">* denotes mandatory fields</span>
          </div>

          <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
            <label className="block text-base sm:text-[18px]">* Leaving From - Type Departure City<input required placeholder="📍 Type Departure City" className="mt-2 h-11 w-full rounded-sm bg-white px-3 text-[16px] text-[#333] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400" /></label>
            <label className="block text-base sm:text-[18px]">* Going To - Type Destination City<input required placeholder="📍 Type Destination City" className="mt-2 h-11 w-full rounded-sm bg-white px-3 text-[16px] text-[#333] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400" /></label>
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] md:col-span-2">
              <label className="block text-base sm:text-[18px]">* Departure<input required type="date" defaultValue="2026-10-09" className="mt-2 h-11 w-full rounded-sm bg-white px-3 text-[16px] text-[#222]" /></label>
              {journey === "return" && <label className="block text-base sm:text-[18px]">* Return<input required type="date" className="mt-2 h-11 w-full rounded-sm bg-white px-3 text-[16px] text-[#222]" /></label>}
              <div className="grid grid-cols-3 gap-3">
                {([ ["adults", "Adult 12+"], ["children", "Children 2-12"], ["infants", "Infants 0-2"] ] as [PassengerKey, string][]).map(([type, label]) => (
                  <div key={type} className="min-w-0 text-center text-sm sm:text-[16px]"><p className="mb-2 min-h-[2.5rem] leading-tight">{type === "adults" ? "* " : ""}{label}</p><div className="flex h-12 items-center justify-between rounded-sm bg-white px-1.5 text-[#111] sm:px-2"><button type="button" onClick={() => changePassenger(type, -1)} aria-label={`Remove ${label}`} className="px-1 text-lg">−</button><span>{passengers[type]}</span><button type="button" onClick={() => changePassenger(type, 1)} aria-label={`Add ${label}`} className="px-1 text-lg">＋</button></div></div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm sm:text-base">Disclaimer: Booking can be made for upto 9 travellers (Adults + Children). Currently {totalPassengers} traveller{totalPassengers === 1 ? "" : "s"} selected.</p>
          <div className="relative mt-4">
            <button type="button" onClick={() => setClassOpen((open) => !open)} className="text-base text-[#2c9cff] hover:underline">+ Class of travel: {travelClass}</button>
            {classOpen && <div className="absolute left-0 top-8 z-10 rounded border border-gray-200 bg-white p-2 text-gray-900 shadow-lg">{["Economy", "Premium Economy", "Business", "First Class"].map((option) => <button type="button" key={option} onClick={() => { setTravelClass(option); setClassOpen(false); }} className="block w-full rounded px-4 py-2 text-left hover:bg-blue-50">{option}</button>)}</div>}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <button type="submit" className="min-w-[180px] rounded-sm bg-[#3284bd] px-8 py-3 text-xl text-white hover:bg-[#2472aa]">SEARCH</button>
            <span className="rounded bg-white px-3 py-3 text-sm text-[#111]">Powered By <strong className="ml-2 text-[#0876ce]">EaseMyTrip</strong></span>
          </div>
        </form>
      </section>

      <section id="travel-options" className="mx-auto max-w-[1280px] px-5 py-8 text-[15px] leading-[1.35] sm:px-8 sm:py-10">
        <h1 className="mb-5 text-lg font-bold">Book Flight Tickets Online with <span className="text-[#0876ce]">Go<span className="text-orange-600">Jd</span></span></h1>
        <p className="mb-6">The faster life moves the faster we need to. Justdial now brings to you a quick and easy way to book flights online. With an excellent range of airlines to choose from, finding the flight to suit your preference and schedule just got easier. We furnish you with all the details of your flight and offer you convenience through the entire online flight booking process.</p>
        <p>Save on cheap domestic flight tickets to Delhi, Mumbai, Bangalore, Kolkata and Chennai with airlines like IndiGo, Spicejet, Go Air, Air India, Jet Airways and Jetlite. With our extensive reach in travel partners, Justdial offers you online flight ticket booking to top tourist and business destinations in the country as well as other cities. You can also compare flight tickets across airlines for the destination of your choice.</p>

        <div className="my-12 grid gap-8 md:grid-cols-2">
          <article className="border-b border-gray-300 pb-6 md:border-b-0 md:border-r md:pr-8"><h2 className="font-bold">✓ &nbsp; Instant Flight Ticket Booking</h2><p className="mt-4">We intend on keeping you satisfied and ensure your online flight ticket booking is just a few clicks away.</p></article>
          <article><h2 className="font-bold">✈ &nbsp; 100% Live Inventory</h2><p className="mt-4">With our real time inventory you will receive real time prices as well as availability. Also, a one-click cancellation and call support is always there to make your booking experience an exceptional one.</p></article>
        </div>

        <div className="space-y-6 text-sm">
          <section><h2 className="font-bold">Popular Flight Routes</h2><p className="mt-2">Bangalore to Ahmedabad&nbsp; | &nbsp;Bangalore to Chennai&nbsp; | &nbsp;Bangalore to Hyderabad&nbsp; | &nbsp;Mumbai to Bangalore&nbsp; | &nbsp;Mumbai to Kolkata&nbsp; | &nbsp;Mumbai to New Delhi&nbsp; | &nbsp;New Delhi to Goa&nbsp; | &nbsp;Chennai to Madurai&nbsp; | &nbsp;Kolkata to Mumbai&nbsp; | &nbsp;Goa to Pune</p></section>
          <section><h2 className="font-bold">Popular Airports</h2><p className="mt-2">New Delhi Airport&nbsp; | &nbsp;Mumbai Airport&nbsp; | &nbsp;Chennai Airport&nbsp; | &nbsp;Kolkata Airport&nbsp; | &nbsp;Bangalore Airport&nbsp; | &nbsp;Hyderabad Airport&nbsp; | &nbsp;Pune Airport</p></section>
          <section><h2 className="font-bold">AIRLINES</h2><p className="mt-2">Air Asia&nbsp; | &nbsp;Vistara&nbsp; | &nbsp;Indigo&nbsp; | &nbsp;Spice Jet&nbsp; | &nbsp;Air India</p></section>
        </div>
      </section>
      <FlightFooter />
    </main>
  );
}
