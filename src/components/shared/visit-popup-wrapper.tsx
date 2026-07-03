"use client";

import { FloatingContact } from "@/components/layout/floating-contact";
import { BottomActionBar } from "@/components/layout/bottom-action-bar";

export function VisitPopupWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FloatingContact />
      <BottomActionBar />
    </>
  );
}
