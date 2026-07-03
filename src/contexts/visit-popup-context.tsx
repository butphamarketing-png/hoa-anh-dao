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
          <DialogContent className="!max-w-[920px] !max-h-[calc(100dvh-2rem)] overflow-hidden border-0 p-0 sm:rounded-[28px]">
            <div className="grid min-h-0 max-h-[calc(100dvh-2rem)] sm:grid-cols-2">
              <div className="relative hidden min-h-0 sm:block sm:h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-2rem)]">
                <Image
                  src={image}
                  alt="Trường Mầm Non Hoa Anh Đào"
                  fill
                  className="object-cover object-center"
                  sizes="460px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-display text-xl font-semibold leading-snug">
                    {t.popup.imageCaption}
                  </p>
                  <p className="mt-2 font-body text-body-sm text-white/85">
                    {t.popup.imageSubtitle}
                  </p>
                </div>
              </div>

              <div className="relative flex min-h-0 max-h-[calc(100dvh-2rem)] flex-col overflow-y-auto bg-warm p-6 sm:p-8">
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-foreground/50 transition-colors hover:bg-white hover:text-foreground"
                  aria-label={t.common.close}
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-[20px] sm:hidden">
                  <Image
                    src={image}
                    alt="Trường Mầm Non Hoa Anh Đào"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                <h2 className="pr-10 font-display text-xl font-semibold leading-snug text-primary-pink sm:text-2xl">
                  {t.popup.title}
                </h2>
                <p className="mt-2 font-body text-body-sm leading-relaxed text-foreground/70">
                  {t.popup.description}
                </p>
                <p className="mt-1 font-body text-xs text-foreground/45">{t.popup.privacy}</p>

                <div className="mt-5">
                  <VisitScheduleForm
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
