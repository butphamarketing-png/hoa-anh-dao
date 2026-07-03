export const MAIN_NAV = [
  { labelKey: "home" as const, href: "/" },
  { labelKey: "about" as const, href: "/gioi-thieu" },
  { labelKey: "programs" as const, href: "/chuong-trinh-hoc" },
  { labelKey: "enrollment" as const, href: "/tuyen-sinh" },
  { labelKey: "contact" as const, href: "/lien-he" },
] as const;

export const EXPLORE_NAV = [
  { labelKey: "teachers" as const, href: "/giao-vien" },
  { labelKey: "facilities" as const, href: "/co-so-vat-chat" },
  { labelKey: "gallery" as const, href: "/thu-vien" },
  { labelKey: "news" as const, href: "/tin-tuc" },
] as const;

export const NAV_ITEMS = [...MAIN_NAV, ...EXPLORE_NAV] as const;

export type NavLabelKey = (typeof NAV_ITEMS)[number]["labelKey"];
