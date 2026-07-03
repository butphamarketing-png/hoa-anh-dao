"use client";

import { usePathname } from "next/navigation";

export function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isHome = pathname === "/";

  if (isAdmin) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <main className={isHome ? "min-h-screen" : "min-h-screen pt-[72px] lg:pt-[108px]"}>
      {children}
    </main>
  );
}
