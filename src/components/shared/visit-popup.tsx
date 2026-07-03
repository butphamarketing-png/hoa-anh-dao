"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { VisitScheduleForm } from "@/components/forms/visit-schedule-form";
import { CherryBlossomArt, HandDrawnStroke } from "@/components/shared/decorations";
import { useLanguage } from "@/contexts/language-context";

const STORAGE_KEY = "hoa-anh-dao-visit-popup";

interface VisitPopupProps {
  image: string;
}

export function VisitPopup({ image }: VisitPopupProps) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    if (isAdmin) return;

    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, [isAdmin, pathname]);

  const handleClose = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) handleClose();
    else setOpen(true);
  };

  if (isAdmin) return null;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[95vh] max-w-[920px] overflow-hidden border-0 p-0 sm:rounded-[28px]">
        <div className="grid max-h-[95vh] overflow-y-auto md:grid-cols-2 md:overflow-hidden">
          <div className="relative hidden min-h-[320px] md:block md:min-h-[580px]">
            <Image
              src={image}
              alt="Trường Mầm Non Hoa Anh Đào"
              fill
              className="object-cover"
              sizes="460px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-heading text-xl font-extrabold leading-snug">
                {t.popup.imageCaption}
              </p>
              <p className="mt-2 font-body text-body-sm text-white/85">{t.popup.imageSubtitle}</p>
            </div>
          </div>

          <div className="relative flex flex-col bg-warm p-6 sm:p-8 md:max-h-[580px] md:overflow-y-auto">
            <CherryBlossomArt className="absolute right-12 top-10 hidden opacity-[0.1] md:block" size={90} />
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-foreground/50 transition-colors hover:bg-white hover:text-foreground"
              aria-label={t.common.close}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-[20px] md:hidden">
              <Image
                src={image}
                alt="Trường Mầm Non Hoa Anh Đào"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            <h2 className="pr-10 font-heading text-xl font-extrabold leading-snug text-primary-pink md:text-2xl">
              {t.popup.title}
            </h2>
            <HandDrawnStroke centered={false} className="w-20" />
            <p className="mt-2 font-body text-body-sm leading-relaxed text-foreground/70 md:text-body-md">
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
  );
}
