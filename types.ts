import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Screenshot {
  id: number;
  src: string;
  alt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string; // e.g., "User from Baghdad"
  avatar: string;
  content: string;
  rating: number;
}

export interface PartnerStatData {
  month: string;
  orders: number;
  revenue: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}