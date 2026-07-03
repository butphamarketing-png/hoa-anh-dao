"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { submitContact } from "@/actions/forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    const result = await submitContact(formData);
    setIsSubmitting(false);

    if (result.success) {
      setStatus({ type: "success", message: result.message! });
      reset();
    } else {
      setStatus({ type: "error", message: result.error! });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-[20px] bg-white p-8 shadow-card">
      <h3 className="font-heading text-2xl font-bold text-foreground">Gửi tin nhắn</h3>
      <div className="mt-6 grid gap-5">
        <div>
          <Label htmlFor="contact_name">Họ tên *</Label>
          <Input id="contact_name" {...register("full_name")} className="mt-2" />
          {errors.full_name && (
            <p className="mt-1 font-body text-xs text-primary-pink">{errors.full_name.message}</p>
          )}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="contact_phone">Điện thoại *</Label>
            <Input id="contact_phone" type="tel" {...register("phone")} className="mt-2" />
            {errors.phone && (
              <p className="mt-1 font-body text-xs text-primary-pink">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="contact_email">Email *</Label>
            <Input id="contact_email" type="email" {...register("email")} className="mt-2" />
            {errors.email && (
              <p className="mt-1 font-body text-xs text-primary-pink">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="contact_subject">Chủ đề *</Label>
          <Input id="contact_subject" {...register("subject")} className="mt-2" />
          {errors.subject && (
            <p className="mt-1 font-body text-xs text-primary-pink">{errors.subject.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="contact_message">Nội dung *</Label>
          <Textarea id="contact_message" {...register("message")} className="mt-2" rows={5} />
          {errors.message && (
            <p className="mt-1 font-body text-xs text-primary-pink">{errors.message.message}</p>
          )}
        </div>
      </div>

      {status && (
        <p
          className={`mt-4 rounded-[20px] p-4 font-body text-sm ${
            status.type === "success"
              ? "bg-success/10 text-success"
              : "bg-primary-pink/10 text-primary-pink"
          }`}
        >
          {status.message}
        </p>
      )}

      <Button type="submit" className="mt-6" disabled={isSubmitting}>
        {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
      </Button>
    </form>
  );
}
