export interface SiteSettings {
  id: string;
  site_name: string;
  phone: string;
  email: string;
  address: string;
  facebook_url: string | null;
  youtube_url: string | null;
  google_maps_embed: string | null;
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  hero_image: string;
  hero_video_url: string | null;
  about_title: string;
  about_content: string;
  about_image: string;
  cta_title: string;
  cta_description: string;
  meta_title: string;
  meta_description: string;
  updated_at: string;
}

export interface CounterStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  order_index: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
}

export interface Program {
  id: string;
  title: string;
  slug: string;
  age_group: string;
  description: string;
  content: string;
  image: string;
  gallery: string[];
  order_index: number;
  is_published: boolean;
  meta_title: string | null;
  meta_description: string | null;
}

export interface Teacher {
  id: string;
  name: string;
  slug: string;
  position: string;
  bio: string;
  avatar: string;
  order_index: number;
  is_published: boolean;
}

export interface GalleryImage {
  id: string;
  title: string;
  image: string;
  category: string;
  album_id: string | null;
  order_index: number;
}

export interface Album {
  id: string;
  title: string;
  slug: string;
  description: string;
  cover_image: string;
  order_index: number;
}

export interface Video {
  id: string;
  title: string;
  youtube_id: string;
  description: string;
  order_index: number;
}

export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  published_at: string;
  is_published: boolean;
  meta_title: string | null;
  meta_description: string | null;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  avatar: string;
  rating: number;
  order_index: number;
}

export interface EnrollmentInfo {
  id: string;
  conditions: string;
  process: string;
  tuition: string;
}

export interface AboutPage {
  id: string;
  history: string;
  mission: string;
  vision: string;
  values: string;
  team_intro: string;
}

export interface Registration {
  id?: string;
  full_name: string;
  phone: string;
  email: string;
  child_name: string;
  child_birthday: string;
  child_age: string;
  message: string;
  created_at?: string;
  status?: string;
}

export interface ContactMessage {
  id?: string;
  full_name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
  status?: string;
}

export interface Banner {
  id: string;
  title: string;
  image: string;
  link: string | null;
  order_index: number;
  is_active: boolean;
}

export interface SeoSettings {
  id: string;
  page_slug: string;
  meta_title: string;
  meta_description: string;
  og_image: string | null;
  canonical_url: string | null;
}
