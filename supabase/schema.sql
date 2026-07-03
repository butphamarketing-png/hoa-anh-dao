-- Supabase Schema for Hoa Anh Dao Preschool CMS
-- Run this in Supabase SQL Editor

-- Site Settings
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  facebook_url TEXT,
  youtube_url TEXT,
  google_maps_embed TEXT,
  hero_title TEXT NOT NULL,
  hero_subtitle TEXT NOT NULL,
  hero_description TEXT NOT NULL,
  hero_image TEXT NOT NULL,
  hero_video_url TEXT,
  about_title TEXT NOT NULL,
  about_content TEXT NOT NULL,
  about_image TEXT NOT NULL,
  cta_title TEXT NOT NULL,
  cta_description TEXT NOT NULL,
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Counter Stats
CREATE TABLE IF NOT EXISTS counter_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  value INTEGER NOT NULL,
  suffix TEXT DEFAULT '',
  label TEXT NOT NULL,
  order_index INTEGER DEFAULT 0
);

-- Features
CREATE TABLE IF NOT EXISTS features (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  order_index INTEGER DEFAULT 0
);

-- Programs
CREATE TABLE IF NOT EXISTS programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  age_group TEXT NOT NULL,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  image TEXT NOT NULL,
  gallery JSONB DEFAULT '[]',
  order_index INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  meta_title TEXT,
  meta_description TEXT
);

-- Teachers
CREATE TABLE IF NOT EXISTS teachers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  position TEXT NOT NULL,
  bio TEXT NOT NULL,
  avatar TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true
);

-- Albums
CREATE TABLE IF NOT EXISTS albums (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  order_index INTEGER DEFAULT 0
);

-- Gallery Images
CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  album_id UUID REFERENCES albums(id) ON DELETE SET NULL,
  order_index INTEGER DEFAULT 0
);

-- Videos
CREATE TABLE IF NOT EXISTS videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  youtube_id TEXT NOT NULL,
  description TEXT NOT NULL,
  order_index INTEGER DEFAULT 0
);

-- News Posts
CREATE TABLE IF NOT EXISTS news_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  published_at DATE NOT NULL,
  is_published BOOLEAN DEFAULT true,
  meta_title TEXT,
  meta_description TEXT
);

-- Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  content TEXT NOT NULL,
  avatar TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  order_index INTEGER DEFAULT 0
);

-- About Page
CREATE TABLE IF NOT EXISTS about_page (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  history TEXT NOT NULL,
  mission TEXT NOT NULL,
  vision TEXT NOT NULL,
  values TEXT NOT NULL,
  team_intro TEXT NOT NULL
);

-- Enrollment Info
CREATE TABLE IF NOT EXISTS enrollment_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conditions TEXT NOT NULL,
  process TEXT NOT NULL,
  tuition TEXT NOT NULL
);

-- Banners
CREATE TABLE IF NOT EXISTS banners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  link TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true
);

-- SEO Settings
CREATE TABLE IF NOT EXISTS seo_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_slug TEXT UNIQUE NOT NULL,
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  og_image TEXT,
  canonical_url TEXT
);

-- Registrations
CREATE TABLE IF NOT EXISTS registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  child_name TEXT NOT NULL,
  child_birthday DATE NOT NULL,
  child_age TEXT NOT NULL,
  message TEXT DEFAULT '',
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact Messages
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE counter_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE features ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE albums ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_page ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollment_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public read" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Public read" ON counter_stats FOR SELECT USING (true);
CREATE POLICY "Public read" ON features FOR SELECT USING (true);
CREATE POLICY "Public read" ON programs FOR SELECT USING (is_published = true);
CREATE POLICY "Public read" ON teachers FOR SELECT USING (is_published = true);
CREATE POLICY "Public read" ON albums FOR SELECT USING (true);
CREATE POLICY "Public read" ON gallery_images FOR SELECT USING (true);
CREATE POLICY "Public read" ON videos FOR SELECT USING (true);
CREATE POLICY "Public read" ON news_posts FOR SELECT USING (is_published = true);
CREATE POLICY "Public read" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public read" ON about_page FOR SELECT USING (true);
CREATE POLICY "Public read" ON enrollment_info FOR SELECT USING (true);
CREATE POLICY "Public read" ON banners FOR SELECT USING (is_active = true);
CREATE POLICY "Public read" ON seo_settings FOR SELECT USING (true);

-- Public insert for forms
CREATE POLICY "Public insert registrations" ON registrations FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert contact" ON contact_messages FOR INSERT WITH CHECK (true);

-- Authenticated full access for admin
CREATE POLICY "Admin full access" ON site_settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON counter_stats FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON features FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON programs FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON teachers FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON albums FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON gallery_images FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON videos FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON news_posts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON about_page FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON enrollment_info FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON banners FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON seo_settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin read registrations" ON registrations FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Admin read contact" ON contact_messages FOR SELECT USING (auth.role() = 'authenticated');
