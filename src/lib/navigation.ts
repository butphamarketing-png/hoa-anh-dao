import { SITE_CONFIG } from "./constants";

export const MAIN_NAV = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Chương trình học", href: "/chuong-trinh-hoc" },
  { label: "Tuyển sinh", href: "/tuyen-sinh" },
  { label: "Liên hệ", href: "/lien-he" },
] as const;

export const EXPLORE_NAV = [
  { label: "Đội ngũ giáo viên", href: "/giao-vien" },
  { label: "Cơ sở vật chất", href: "/co-so-vat-chat" },
  { label: "Thư viện ảnh", href: "/thu-vien" },
  { label: "Tin tức", href: "/tin-tuc" },
] as const;

/** All nav links — used in footer */
export const NAV_ITEMS = [...MAIN_NAV, ...EXPLORE_NAV] as const;

export { SITE_CONFIG, AGE_GROUPS } from "./constants";
