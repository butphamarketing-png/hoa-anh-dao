export const SITE_CONFIG = {
  name: "Trường Mầm Non Hoa Anh Đào",
  shortName: "Hoa Anh Đào",
  description:
    "Môi trường giáo dục hiện đại, an toàn và giàu yêu thương giúp trẻ phát triển toàn diện tại Quận 8, TP.HCM.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hoaanhdao.edu.vn",
  phone: "0937 933 702",
  email: "info@hoaanhdao.edu.vn",
  address: {
    street: "15 Trần Thị Ngôi",
    ward: "Phường 4",
    district: "Quận 8",
    city: "TP Hồ Chí Minh",
    full: "15 Trần Thị Ngôi, Phường 4, Quận 8, TP Hồ Chí Minh",
  },
  social: {
    facebook: "https://facebook.com/hoaanhdaopreschool",
    youtube: "https://youtube.com/@hoaanhdaopreschool",
  },
  coordinates: {
    lat: 10.7402,
    lng: 106.6658,
  },
} as const;

export const NAV_ITEMS = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Chương trình học", href: "/chuong-trinh-hoc" },
  { label: "Tuyển sinh", href: "/tuyen-sinh" },
  { label: "Liên hệ", href: "/lien-he" },
  { label: "Đội ngũ giáo viên", href: "/giao-vien" },
  { label: "Cơ sở vật chất", href: "/co-so-vat-chat" },
  { label: "Thư viện ảnh", href: "/thu-vien" },
  { label: "Tin tức", href: "/tin-tuc" },
] as const;

export const AGE_GROUPS = [
  "12-24 tháng",
  "2-3 tuổi",
  "3-4 tuổi",
  "4-5 tuổi",
  "5-6 tuổi",
] as const;
