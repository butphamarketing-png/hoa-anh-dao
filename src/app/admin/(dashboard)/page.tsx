import Link from "next/link";
import {
  Users,
  BookOpen,
  Newspaper,
  MessageSquare,
  Camera,
  Settings,
} from "lucide-react";

const stats = [
  { label: "Giáo viên", value: "4", icon: Users, href: "/admin/teachers" },
  { label: "Chương trình", value: "5", icon: BookOpen, href: "/admin/programs" },
  { label: "Tin tức", value: "6", icon: Newspaper, href: "/admin/news" },
  { label: "Đăng ký mới", value: "0", icon: MessageSquare, href: "/admin/registrations" },
];

const quickLinks = [
  { label: "Cài đặt trang chủ", href: "/admin/homepage", icon: Settings },
  { label: "Quản lý album", href: "/admin/albums", icon: Camera },
  { label: "Tuyển sinh", href: "/admin/enrollment", icon: BookOpen },
  { label: "SEO", href: "/admin/seo", icon: Settings },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 font-body text-foreground/60">
        Chào mừng đến CMS Trường Mầm Non Hoa Anh Đào
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="rounded-[20px] bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-foreground/60">{stat.label}</p>
                <p className="mt-1 font-heading text-3xl font-bold text-primary-green">
                  {stat.value}
                </p>
              </div>
              <stat.icon className="h-8 w-8 text-primary-green/30" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="font-heading text-xl font-bold">Truy cập nhanh</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 rounded-[20px] border border-border bg-white p-5 transition-colors hover:border-primary-green"
            >
              <link.icon className="h-5 w-5 text-primary-green" />
              <span className="font-body text-sm font-medium">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-[20px] bg-white p-6 shadow-soft">
        <h2 className="font-heading text-xl font-bold">Hướng dẫn</h2>
        <ul className="mt-4 space-y-2 font-body text-sm text-foreground/70">
          <li>• Cấu hình Supabase trong file .env.local để kích hoạt CMS đầy đủ</li>
          <li>• Chạy schema SQL trong thư mục supabase/ để tạo database</li>
          <li>• Tạo tài khoản admin trong Supabase Authentication</li>
          <li>• Upload ảnh qua Cloudflare R2 hoặc Supabase Storage</li>
        </ul>
      </div>
    </div>
  );
}
