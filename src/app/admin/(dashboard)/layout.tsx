import { AdminSidebar } from "@/components/admin/admin-sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-section">
      <AdminSidebar />
      <div className="ml-64 p-8">{children}</div>
    </div>
  );
}
