# Trường Mầm Non Hoa Anh Đào

Website trường mầm non chuyên nghiệp xây dựng với Next.js 15, TypeScript, TailwindCSS và Supabase CMS.

## Công nghệ

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS + Shadcn UI
- Framer Motion
- React Hook Form + Zod
- Supabase (Database + Auth)
- Cloudflare R2 (Image Storage)

## Bắt đầu

```bash
npm install
cp .env.example .env.local
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000)

## CMS Admin

Truy cập [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

## Cấu hình Supabase

1. Tạo project trên [supabase.com](https://supabase.com)
2. Chạy `supabase/schema.sql` trong SQL Editor
3. Tạo user admin trong Authentication
4. Cập nhật `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Cấu trúc

```
src/
├── app/              # Pages (App Router)
├── components/       # UI Components
├── lib/              # Utilities, data layer, SEO
├── data/             # Default fallback data
├── types/            # TypeScript types
└── actions/          # Server Actions
```

## Thay ảnh thật

Thay URL ảnh trong Supabase CMS hoặc file `src/data/defaults.ts`. Layout không cần sửa.

## Build

```bash
npm run build
npm start
```
