# Justdial Homepage Clone

A high-fidelity frontend recreation of the Justdial homepage, built with:

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom `jd-*` design tokens for Justdial's blue/orange palette)
- Lucide React icons
- Hand-rolled shadcn-style primitives (Button, popover-based Location selector,
  Sheet-style mobile menu) — no backend, no external network calls, no
  hotlinked images. Photo-style sections use local gradient placeholders
  sized to match the screenshots' aspect ratios.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/                  Next.js App Router entry (layout, globals.css, page.tsx)
components/
  header/             Header, SearchBar (with mock suggestions), LocationSelector, MobileMenu
  hero/                Hero banner carousel + promo tiles (B2B / Repairs / Real Estate / Doctors)
  categories/          Icon category strip (CategoryCard, CategoryGrid)
  sections/            All homepage content sections (wedding/beauty/repairs/daily needs,
                        travel bookings, trending searches, movies, tourist places,
                        popular searches, news, services grid, popular categories tabs,
                        about copy, popular cities)
  footer/              Social bar + app store badges, footer (Quick Links / JD Verticals)
  ui/                  Shared primitives: Button, PlaceholderImage, SectionHeader,
                        SideRail (fixed Advertise/Free Listing tabs), BackToTop
lib/
  data.ts              All static/mock content (categories, cities, cards, movies, etc.)
  types.ts             Shared TypeScript types
  icon-map.tsx          Maps category "iconKey" strings to Lucide icon components
  utils.ts             `cn()` class-merge helper
```

## Notes

- All data is static/mock (see `lib/data.ts`) — no backend or real API calls.
- Photos are represented as gradient placeholders (`PlaceholderImage`) sized
  to the same aspect ratios as the reference screenshots, rather than
  hotlinking or reproducing Justdial's actual image assets. Swap them for
  real `<Image>` assets in `public/images/` when you have licensed photos.
- The search bar, location selector, mobile menu, hero carousel and
  popular-categories tabs are all functional on the frontend (no backend
  required).
