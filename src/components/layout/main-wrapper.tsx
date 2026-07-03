"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isHome = pathname === "/";

  if (isAdmin) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <main
      className={cn(
        isHome ? "min-h-screen" : "min-h-screen pt-[72px] lg:pt-[108px]",
        "pb-[4.75rem] lg:pb-0"
      )}
    >
      {children}
    </main>
  );
}
