import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  initial: string;
}

export interface NavItem {
  label: string;
  href: string;
}