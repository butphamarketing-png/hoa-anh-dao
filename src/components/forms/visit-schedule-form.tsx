"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { visitScheduleSchema, type VisitScheduleFormData } from "@/lib/validations";
import { submitVisitSchedule } from "@/actions/forms";
import { AGE_GROUPS } from "@/lib/constants";
import { AGE_GROUPS_EN } from "@/i18n";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface VisitScheduleFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export function VisitScheduleForm({ onSuccess, compact = false }: VisitScheduleFormProps) {
  const { t, lang } = useLanguage();
  const ageGroups = lang === "en" ? AGE_GROUPS_EN : AGE_GROUPS;
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<VisitScheduleFormData>({
    resolver: zodResolver(visitScheduleSchema),
  });

  const onSubmit = async (data: VisitScheduleFormData) => {
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value ?? ""));

    const result = await submitVisitSchedule(formData);
    setIsSubmitting(false);

    if (result.success) {
      setStatus({ type: "success", message: t.popup.success });
      reset();
      onSuccess?.();
    } else {
      setStatus({ type: "error", message: result.error! });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={compact ? "space-y-2.5" : "space-y-4"}>
      <div
        className={`flex flex-wrap gap-2 rounded-[16px] bg-white/80 font-body text-foreground/70 sm:gap-4 ${
          compact ? "px-2.5 py-2 text-[10px] sm:px-4 sm:py-3 sm:text-body-sm" : "gap-4 px-4 py-3 text-body-sm"
        }`}
      >
        <span className="inline-flex items-center gap-1 sm:gap-1.5">
          <Phone className={`text-primary-green ${compact ? "h-3 w-3 sm:h-4 sm:w-4" : "h-4 w-4"}`} />
          {SITE_CONFIG.phone}
        </span>
        <span className="inline-flex items-center gap-1 sm:gap-1.5">
          <MapPin className={`text-primary-green ${compact ? "h-3 w-3 sm:h-4 sm:w-4" : "h-4 w-4"}`} />
          {SITE_CONFIG.address.district}, {SITE_CONFIG.address.city}
        </span>
      </div>

      <div>
        <Label htmlFor="visit_full_name" className={compact ? "text-[11px] sm:text-sm" : undefined}>
          {t.popup.parentName} *
        </Label>
        <Input
          id="visit_full_name"
          {...register("full_name")}
          className={compact ? "mt-1 h-8 rounded-full text-xs sm:mt-1.5 sm:h-10 sm:text-sm" : "mt-1.5 rounded-full"}
        />
        {errors.full_name && (
          <p className="mt-1 font-body text-xs text-primary-pink">{errors.full_name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="visit_phone" className={compact ? "text-[11px] sm:text-sm" : undefined}>
          {t.popup.phone} *
        </Label>
        <Input
          id="visit_phone"
          type="tel"
          {...register("phone")}
          className={compact ? "mt-1 h-8 rounded-full text-xs sm:mt-1.5 sm:h-10 sm:text-sm" : "mt-1.5 rounded-full"}
        />
        {errors.phone && (
          <p className="mt-1 font-body text-xs text-primary-pink">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="visit_email" className={compact ? "text-[11px] sm:text-sm" : undefined}>
          {t.popup.email}
        </Label>
        <Input
          id="visit_email"
          type="email"
          {...register("email")}
          className={compact ? "mt-1 h-8 rounded-full text-xs sm:mt-1.5 sm:h-10 sm:text-sm" : "mt-1.5 rounded-full"}
        />
        {errors.email && (
          <p className="mt-1 font-body text-xs text-primary-pink">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label className={compact ? "text-[11px] sm:text-sm" : undefined}>{t.popup.childAge} *</Label>
        <Select onValueChange={(value) => setValue("child_age", value)}>
          <SelectTrigger className={compact ? "mt-1 h-8 rounded-full text-xs sm:mt-1.5 sm:h-10 sm:text-sm" : "mt-1.5 rounded-full"}>
            <SelectValue placeholder={t.popup.selectAge} />
          </SelectTrigger>
          <SelectContent>
            {ageGroups.map((age) => (
              <SelectItem key={age} value={age}>
                {age}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.child_age && (
          <p className="mt-1 font-body text-xs text-primary-pink">{errors.child_age.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="visit_message" className={compact ? "text-[11px] sm:text-sm" : undefined}>
          {t.popup.note}
        </Label>
        <Textarea
          id="visit_message"
          {...register("message")}
          className={compact ? "mt-1 rounded-[14px] text-xs sm:mt-1.5 sm:rounded-[20px] sm:text-sm" : "mt-1.5 rounded-[20px]"}
          rows={compact ? 1 : 2}
          placeholder={t.popup.notePlaceholder}
        />
      </div>

      {status && (
        <p
          className={`rounded-[16px] p-3 font-body text-body-sm ${
            status.type === "success"
              ? "bg-success/10 text-success"
              : "bg-primary-pink/10 text-primary-pink"
          }`}
        >
          {status.message}
        </p>
      )}

      <Button
        type="submit"
        className={compact ? "h-9 w-full rounded-full text-xs sm:h-10 sm:text-sm" : "w-full rounded-full"}
        disabled={isSubmitting}
      >
        {isSubmitting ? t.common.submitting : t.common.submit}
      </Button>
    </form>
  );
}
