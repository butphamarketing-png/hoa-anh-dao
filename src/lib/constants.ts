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
    zalo: "https://zalo.me/0937933702",
    messenger: "https://m.me/hoaanhdaopreschool",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=15+Tr%E1%BA%A7n+Th%E1%BB%8B+Ng%C3%B4i,+Qu%E1%BA%ADn+8,+TP+H%E1%BB%93+Ch%C3%AD+Minh",
  coordinates: {
    lat: 10.7402,
    lng: 106.6658,
  },
} as const;

export const VISIT_FORM_IMAGE = "/visit-form.jpg";

export const AGE_GROUPS = [
  "12-24 tháng",
  "2-3 tuổi",
  "3-4 tuổi",
  "4-5 tuổi",
  "5-6 tuổi",
] as const;
