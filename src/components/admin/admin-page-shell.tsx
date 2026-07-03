interface AdminPageProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function AdminPageShell({ title, description, children }: AdminPageProps) {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold">{title}</h1>
      <p className="mt-2 font-body text-foreground/60">{description}</p>
      <div className="mt-8 rounded-[20px] bg-white p-8 shadow-soft">
        {children || (
          <p className="font-body text-foreground/70">
            Kết nối Supabase để quản lý nội dung tại đây. Dữ liệu hiện đang sử dụng
            fallback mặc định trên website.
          </p>
        )}
      </div>
    </div>
  );
}
