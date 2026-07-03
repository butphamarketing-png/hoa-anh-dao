"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { registrationSchema, contactSchema, visitScheduleSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";

export async function submitRegistration(formData: FormData) {
  const raw = {
    full_name: formData.get("full_name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    child_name: formData.get("child_name") as string,
    child_birthday: formData.get("child_birthday") as string,
    child_age: formData.get("child_age") as string,
    message: formData.get("message") as string,
  };

  const parsed = registrationSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, error: "Vui lòng kiểm tra lại thông tin." };
  }

  const supabase = createAdminClient();
  if (supabase) {
    const { error } = await supabase.from("registrations").insert({
      ...parsed.data,
      status: "pending",
    });
    if (error) return { success: false, error: "Không thể gửi đăng ký. Vui lòng thử lại." };
  }

  return { success: true, message: "Đăng ký thành công! Chúng tôi sẽ liên hệ sớm nhất." };
}

export async function submitVisitSchedule(formData: FormData) {
  const raw = {
    full_name: formData.get("full_name") as string,
    phone: formData.get("phone") as string,
    email: (formData.get("email") as string) || "",
    child_age: formData.get("child_age") as string,
    message: (formData.get("message") as string) || "",
  };

  const parsed = visitScheduleSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, error: "Vui lòng kiểm tra lại thông tin." };
  }

  const note = parsed.data.message
    ? `[Đặt lịch tham quan] ${parsed.data.message}`
    : "[Đặt lịch tham quan]";

  const registration = {
    full_name: parsed.data.full_name,
    phone: parsed.data.phone,
    email: parsed.data.email || "info@hoaanhdao.edu.vn",
    child_name: "—",
    child_birthday: "—",
    child_age: parsed.data.child_age,
    message: note,
    status: "pending" as const,
  };

  const supabase = createAdminClient();
  if (supabase) {
    const { error } = await supabase.from("registrations").insert(registration);
    if (error) return { success: false, error: "Không thể gửi đăng ký. Vui lòng thử lại." };
  }

  return {
    success: true,
    message: "Đặt lịch thành công! Chúng tôi sẽ liên hệ xác nhận sớm nhất.",
  };
}

export async function submitContact(formData: FormData) {
  const raw = {
    full_name: formData.get("full_name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, error: "Vui lòng kiểm tra lại thông tin." };
  }

  const supabase = createAdminClient();
  if (supabase) {
    const { error } = await supabase.from("contact_messages").insert({
      ...parsed.data,
      status: "pending",
    });
    if (error) return { success: false, error: "Không thể gửi tin nhắn. Vui lòng thử lại." };
  }

  return { success: true, message: "Gửi tin nhắn thành công! Chúng tôi sẽ phản hồi sớm." };
}

export async function adminLogin(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = createAdminClient();
  if (!supabase) {
    return { success: false, error: "Hệ thống chưa được cấu hình." };
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { success: false, error: "Email hoặc mật khẩu không đúng." };

  revalidatePath("/admin");
  return { success: true };
}

export async function adminLogout() {
  const supabase = createAdminClient();
  if (supabase) await supabase.auth.signOut();
  revalidatePath("/admin");
  return { success: true };
}
