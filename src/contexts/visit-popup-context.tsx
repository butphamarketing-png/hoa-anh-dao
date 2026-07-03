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
          <DialogContent className="!max-w-[720px] !max-h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] overflow-hidden border-0 p-0 sm:!max-w-[820px] sm:rounded-[24px]">
            <div className="grid h-[min(560px,calc(100dvh-1rem))] max-h-[calc(100dvh-1rem)] grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] overflow-hidden">
              <div className="relative h-full min-h-0 overflow-hidden">
                <Image
                  src={image}
                  alt="Trường Mầm Non Hoa Anh Đào"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 40vw, 320px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white sm:bottom-5 sm:left-5 sm:right-5">
                  <p className="font-display text-xs font-semibold leading-snug sm:text-lg">
                    {t.popup.imageCaption}
                  </p>
                  <p className="mt-1 hidden font-body text-body-sm text-white/85 sm:block">
                    {t.popup.imageSubtitle}
                  </p>
                </div>
              </div>

              <div className="relative flex h-full min-h-0 flex-col overflow-y-auto bg-warm p-3 sm:p-6">
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute right-2 top-2 z-10 rounded-full bg-white/80 p-1.5 text-foreground/50 transition-colors hover:bg-white hover:text-foreground sm:right-4 sm:top-4 sm:p-2"
                  aria-label={t.common.close}
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>

                <h2 className="pr-8 font-display text-sm font-semibold leading-snug text-primary-pink sm:pr-10 sm:text-xl lg:text-2xl">
                  {t.popup.title}
                </h2>
                <p className="mt-1.5 font-body text-[11px] leading-relaxed text-foreground/70 sm:mt-2 sm:text-body-sm">
                  {t.popup.description}
                </p>
                <p className="mt-0.5 hidden font-body text-xs text-foreground/45 sm:block">{t.popup.privacy}</p>

                <div className="mt-3 sm:mt-5">
                  <VisitScheduleForm
                    compact
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
