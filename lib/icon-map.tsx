import {
  Utensils, Hotel, Sparkles, Armchair, Sun, Heart, GraduationCap, Key,
  Building2, HardHat, Dog, BedDouble, Home, Smile, Dumbbell, Landmark,
  PartyPopper, Car, Truck, Menu, Briefcase, Clapperboard, Wrench,
  Stethoscope, Building, Wallet, type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  utensils: Utensils,
  hotel: Hotel,
  sparkles: Sparkles,
  armchair: Armchair,
  sun: Sun,
  heart: Heart,
  "graduation-cap": GraduationCap,
  key: Key,
  "building-2": Building2,
  "hard-hat": HardHat,
  dog: Dog,
  "bed-double": BedDouble,
  home: Home,
  smile: Smile,
  dumbbell: Dumbbell,
  landmark: Landmark,
  "party-popper": PartyPopper,
  car: Car,
  truck: Truck,
  menu: Menu,
  briefcase: Briefcase,
  clapperboard: Clapperboard,
  wrench: Wrench,
  stethoscope: Stethoscope,
  building: Building,
  wallet: Wallet,
};

export function getIcon(key: string): LucideIcon {
  return iconMap[key] ?? Sparkles;
}
