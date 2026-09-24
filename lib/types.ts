export interface Category {
  title: string;
  iconKey: string;
  badge?: string;
  image?: string;
}

export interface CardItem {
  title: string;
  gradient?: string;
  emoji?: string;
  image?: string;
}

export interface TravelModeItem {
  title: string;
  note?: string;
  emoji?: string;
  image?: string;
}

export interface City {
  name: string;
}

export interface TouristPlace {
  name: string;
  gradient?: string;
  image?: string;
}

export interface PopularSearchItem {
  title: string;
  cta: string;
  gradient?: string;
  image?: string;
}

export interface MovieItem {
  title: string;
  lang: string;
  rating?: number;
  gradient?: string;
  image?: string;
}

export interface NewsItem {
  title: string;
  source: string;
  gradient?: string;
  image?: string;
  overlay?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
