"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { VisitScheduleForm } from "@/components/forms/visit-schedule-form";
import { useLanguage } from "@/contexts/language-context";

const STORAGE_KEY = "hoa-anh-dao-visit-popup";

interface VisitPopupContextValue {
  openPopup: () => void;
}

const VisitPopupContext = createContext<VisitPopupContextValue | null>(null);

export function useVisitPopup() {
  return useContext(VisitPopupContext);
}

interface VisitPopupProviderProps {
  image: string;
  children: ReactNode;
}

export function VisitPopupProvider({ image, children }: VisitPopupProviderProps) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isAdmin = pathname?.startsWith("/admin");

  const handleClose = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }, []);

  const openPopup = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || isAdmin) return;

    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, [mounted, isAdmin]);

  const handleOpenChange = (next: boolean) => {
    if (!next) handleClose();
    else setOpen(true);
  };

  return (
    <VisitPopupContext.Provider value={{ openPopup }}>
      {children}

      {!isAdmin && mounted && (
        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogContent className="!max-w-[680px] !max-h-[calc(100dvh-5.5rem)] w-[calc(100vw-1rem)] overflow-hidden border-0 p-0 sm:!max-w-[780px] sm:rounded-[24px]">
            <div className="grid h-[min(440px,calc(100dvh-5.5rem))] max-h-[calc(100dvh-5.5rem)] grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] overflow-hidden sm:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]">
              <div className="relative h-full min-h-0 overflow-hidden">
                <Image
                  src={image}
                  alt="Trường Mầm Non Hoa Anh Đào"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 30vw, 300px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-white sm:bottom-4 sm:left-4 sm:right-4">
                  <p className="font-display text-[10px] font-semibold leading-snug sm:text-base">
                    {t.popup.imageCaption}
                  </p>
                </div>
              </div>

              <div className="relative flex h-full min-h-0 flex-col overflow-y-auto bg-warm p-2.5 sm:p-5">
                <div className="mb-2 flex shrink-0 items-start justify-between gap-2 sm:mb-3">
                  <h2 className="flex-1 font-display text-xs font-semibold leading-snug text-primary-pink sm:text-lg lg:text-xl">
                    {t.popup.title}
                  </h2>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="shrink-0 rounded-full bg-white/80 p-1.5 text-foreground/50 transition-colors hover:bg-white hover:text-foreground sm:p-2"
                    aria-label={t.common.close}
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>

                <p className="hidden shrink-0 font-body text-body-sm leading-relaxed text-foreground/70 sm:block">
                  {t.popup.description}
                </p>
                <p className="mt-0.5 hidden shrink-0 font-body text-xs text-foreground/45 sm:block">
                  {t.popup.privacy}
                </p>

                <div className="mt-2 min-h-0 sm:mt-4">
                  <VisitScheduleForm
                    compact
                    minimal
                    onSuccess={() => {
                      setTimeout(handleClose, 2500);
                    }}
                  />
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </VisitPopupContext.Provider>
  );
}
