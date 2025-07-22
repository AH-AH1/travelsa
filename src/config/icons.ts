import { Compass, Palmtree, Mountain, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Palmtree,
    title: "Luxury Safaris",
    description: "5-star wildlife experiences"
  },
  {
    icon: Mountain,
    title: "Coastal Escapes",
    description: "Pristine beach getaways"
  },
  {
    icon: MapPin,
    title: "Cultural Tours",
    description: "Authentic experiences"
  }
];