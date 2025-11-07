
export enum ProductCategory {
  Cakes = 'Cakes',
  Pastries = 'Pastries',
  Cupcakes = 'Cupcakes',
  Desserts = 'Desserts',
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  featured: boolean;
  rating?: number;
  reviewCount?: number;
  allergens?: string[];
  dietaryTags?: string[]; // 'Eggless', 'Vegan', 'Sugar-free', etc.
  ingredients?: string;
  servingSize?: string;
  sizes?: { weight: string; price: number }[];
  isBestseller?: boolean;
  isPopular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
  rating?: number;
  cakePhoto?: string;
  date?: string;
  location?: string;
  isFeatured?: boolean;
}

export interface VideoTestimonial {
  id: number;
  name: string;
  thumbnail: string;
  videoUrl?: string;
  quote: string;
  rating: number;
}

export interface SocialMediaMention {
  id: number;
  platform: string;
  username: string;
  image: string;
  caption: string;
  date: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  favoriteRecipe?: string;
  hobbies?: string;
}

export interface Milestone {
  id: number;
  year: number;
  title: string;
  description: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  year?: number;
  image?: string;
}

export interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
    name: string;
    href: string;
}

export interface ValueProposition {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface Offer {
    id: number;
    title: string;
    description: string;
    discount: string;
    category: string;
    image: string;
}

export interface FAQ {
    id: number;
    question: string;
    answer: string;
}

export interface GalleryImage {
    id: number;
    image: string;
    caption?: string;
}

export interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon: string;
}
