"use client";

import { VisitPopupProvider } from "@/contexts/visit-popup-context";
import { FloatingContact } from "@/components/layout/floating-contact";
import { BottomActionBar } from "@/components/layout/bottom-action-bar";
import { VISIT_FORM_IMAGE } from "@/lib/constants";

export function VisitPopupWrapper({ children }: { children: React.ReactNode }) {
  return (
    <VisitPopupProvider image={VISIT_FORM_IMAGE}>
      {children}
      <FloatingContact />
      <BottomActionBar />
    </VisitPopupProvider>
  );
}
