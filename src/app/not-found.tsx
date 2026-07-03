import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-6xl font-bold text-primary-green">404</h1>
      <p className="mt-4 font-heading text-2xl font-bold">Trang không tồn tại</p>
      <p className="mt-2 font-body text-foreground/70">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Về trang chủ</Link>
      </Button>
    </div>
  );
}
