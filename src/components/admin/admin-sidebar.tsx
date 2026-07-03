import Link from "next/link";
import {
  LayoutDashboard,
  Image,
  Users,
  BookOpen,
  Camera,
  Video,
  Newspaper,
  GraduationCap,
  Settings,
  FileText,
  MessageSquare,
  LogOut,
} from "lucide-react";

const adminNav = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Banner", href: "/admin/banner", icon: Image },
  { label: "Trang chủ", href: "/admin/homepage", icon: Settings },
  { label: "Giới thiệu", href: "/admin/about", icon: FileText },
  { label: "Giáo viên", href: "/admin/teachers", icon: Users },
  { label: "Chương trình", href: "/admin/programs", icon: BookOpen },
  { label: "Album", href: "/admin/albums", icon: Camera },
  { label: "Video", href: "/admin/videos", icon: Video },
  { label: "Tin tức", href: "/admin/news", icon: Newspaper },
  { label: "Tuyển sinh", href: "/admin/enrollment", icon: GraduationCap },
  { label: "Đăng ký", href: "/admin/registrations", icon: MessageSquare },
  { label: "Liên hệ", href: "/admin/contacts", icon: MessageSquare },
  { label: "SEO", href: "/admin/seo", icon: Settings },
];

export function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-white">
      <div className="flex h-16 items-center border-b border-border px-6">
        <Link href="/admin" className="font-heading text-lg font-bold text-primary-green">
          CMS Admin
        </Link>
      </div>
      <nav className="flex h-[calc(100vh-4rem)] flex-col justify-between p-4">
        <ul className="space-y-1">
          {adminNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-4 py-2.5 font-body text-sm text-foreground/70 transition-colors hover:bg-section hover:text-primary-green"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t border-border pt-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-4 py-2.5 font-body text-sm text-foreground/70 hover:bg-section"
          >
            ← Về website
          </Link>
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 font-body text-sm text-primary-pink hover:bg-primary-pink/5"
            >
              <LogOut className="h-4 w-4" />
              Đăng xuất
            </button>
          </form>
        </div>
      </nav>
    </aside>
  );
}
