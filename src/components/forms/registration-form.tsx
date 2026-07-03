"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema, type RegistrationFormData } from "@/lib/validations";
import { submitRegistration } from "@/actions/forms";
import { AGE_GROUPS } from "@/lib/constants";
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

interface RegistrationFormProps {
  className?: string;
}

export function RegistrationForm({ className }: RegistrationFormProps) {
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    const result = await submitRegistration(formData);
    setIsSubmitting(false);

    if (result.success) {
      setStatus({ type: "success", message: result.message! });
      reset();
    } else {
      setStatus({ type: "error", message: result.error! });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="full_name">Họ tên phụ huynh *</Label>
          <Input id="full_name" {...register("full_name")} className="mt-2" />
          {errors.full_name && (
            <p className="mt-1 font-body text-xs text-primary-pink">{errors.full_name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Điện thoại *</Label>
          <Input id="phone" type="tel" {...register("phone")} className="mt-2" />
          {errors.phone && (
            <p className="mt-1 font-body text-xs text-primary-pink">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" {...register("email")} className="mt-2" />
          {errors.email && (
            <p className="mt-1 font-body text-xs text-primary-pink">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="child_name">Tên bé *</Label>
          <Input id="child_name" {...register("child_name")} className="mt-2" />
          {errors.child_name && (
            <p className="mt-1 font-body text-xs text-primary-pink">{errors.child_name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="child_birthday">Ngày sinh bé *</Label>
          <Input id="child_birthday" type="date" {...register("child_birthday")} className="mt-2" />
          {errors.child_birthday && (
            <p className="mt-1 font-body text-xs text-primary-pink">{errors.child_birthday.message}</p>
          )}
        </div>
        <div>
          <Label>Độ tuổi *</Label>
          <Select onValueChange={(value) => setValue("child_age", value)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Chọn độ tuổi" />
            </SelectTrigger>
            <SelectContent>
              {AGE_GROUPS.map((age) => (
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
        <div className="sm:col-span-2">
          <Label htmlFor="message">Nội dung</Label>
          <Textarea id="message" {...register("message")} className="mt-2" rows={4} />
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

      <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Đang gửi..." : "Gửi đăng ký"}
      </Button>
    </form>
  );
}
