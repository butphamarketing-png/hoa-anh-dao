"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminLogin } from "@/actions/forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/shared/logo";

export default function AdminLoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await adminLogin(formData);

    if (result.success) {
      router.push("/admin");
    } else {
      setError(result.error || "Đăng nhập thất bại");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-section px-4">
      <div className="w-full max-w-md rounded-[20px] bg-white p-8 shadow-card">
        <div className="text-center">
          <Logo size="lg" showText={false} className="mx-auto justify-center" />
          <h1 className="mt-4 font-heading text-2xl font-bold">CMS Admin</h1>
          <p className="mt-2 font-body text-sm text-foreground/60">
            Đăng nhập để quản lý nội dung website
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="password">Mật khẩu</Label>
            <Input id="password" name="password" type="password" required className="mt-2" />
          </div>

          {error && (
            <p className="rounded-[20px] bg-primary-pink/10 p-3 font-body text-sm text-primary-pink">
              {error}
            </p>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Button>
        </form>
      </div>
    </div>
  );
}
