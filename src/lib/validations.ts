import { z } from "zod";

export const registrationSchema = z.object({
  full_name: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  phone: z.string().min(10, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ"),
  child_name: z.string().min(1, "Vui lòng nhập tên bé"),
  child_birthday: z.string().min(1, "Vui lòng nhập ngày sinh"),
  child_age: z.string().min(1, "Vui lòng chọn độ tuổi"),
  message: z.string().optional().default(""),
});

export const contactSchema = z.object({
  full_name: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  phone: z.string().min(10, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ"),
  subject: z.string().min(1, "Vui lòng nhập chủ đề"),
  message: z.string().min(10, "Nội dung phải có ít nhất 10 ký tự"),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;

export const visitScheduleSchema = z.object({
  full_name: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  phone: z.string().min(10, "Số điện thoại không hợp lệ"),
  email: z
    .string()
    .email("Email không hợp lệ")
    .optional()
    .or(z.literal("")),
  child_age: z.string().min(1, "Vui lòng chọn độ tuổi"),
  message: z.string().optional().default(""),
});

export type VisitScheduleFormData = z.infer<typeof visitScheduleSchema>;
