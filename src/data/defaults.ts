import type {
  AboutPage,
  Album,
  Banner,
  CounterStat,
  EnrollmentInfo,
  Feature,
  GalleryImage,
  NewsPost,
  Program,
  SiteSettings,
  Teacher,
  Testimonial,
  Video,
} from "@/types";

export const defaultSiteSettings: SiteSettings = {
  id: "1",
  site_name: "Trường Mầm Non Hoa Anh Đào",
  phone: "0937 933 702",
  email: "info@hoaanhdao.edu.vn",
  address: "15 Trần Thị Ngôi, Phường 4, Quận 8, TP Hồ Chí Minh",
  facebook_url: "https://facebook.com/hoaanhdaopreschool",
  youtube_url: "https://youtube.com/@hoaanhdaopreschool",
  google_maps_embed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d106.6658!3d10.7402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ0JzI0LjciTiAxMDbCsDM5JzU2LjkiRQ!5e0!3m2!1svi!2s!4v1",
  hero_title: "Nuôi dưỡng yêu thương",
  hero_subtitle: "Ươm mầm tương lai",
  hero_description:
    "Môi trường giáo dục hiện đại, an toàn và giàu yêu thương giúp trẻ phát triển toàn diện.",
  hero_image:
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80",
  hero_video_url: null,
  about_title: "Về Trường Mầm Non Hoa Anh Đào",
  about_content:
    "Với hơn 15 năm kinh nghiệm trong lĩnh vực giáo dục mầm non, Hoa Anh Đào tự hào là ngôi nhà thứ hai của hàng trăm em nhỏ. Chúng tôi cam kết mang đến môi trường học tập an toàn, hiện đại và đầy yêu thương, nơi mỗi đứa trẻ được khám phá, phát triển và tỏa sáng theo cách riêng của mình.",
  about_image:
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
  cta_title: "Đăng ký tham quan trường ngay hôm nay",
  cta_description:
    "Hãy đến và trải nghiệm không gian học tập tuyệt vời dành cho bé yêu của bạn.",
  meta_title: "Trường Mầm Non Hoa Anh Đào | Nuôi dưỡng yêu thương, ươm mầm tương lai",
  meta_description:
    "Trường Mầm Non Hoa Anh Đào tại Quận 8, TP.HCM - Môi trường giáo dục hiện đại, an toàn với đội ngũ giáo viên tận tâm. Đăng ký tham quan ngay!",
  updated_at: new Date().toISOString(),
};

export const defaultCounters: CounterStat[] = [
  { id: "1", value: 15, suffix: "+", label: "Năm kinh nghiệm", order_index: 1 },
  { id: "2", value: 300, suffix: "+", label: "Học sinh", order_index: 2 },
  { id: "3", value: 30, suffix: "+", label: "Giáo viên", order_index: 3 },
  { id: "4", value: 100, suffix: "%", label: "Yêu thương", order_index: 4 },
];

export const defaultFeatures: Feature[] = [
  {
    id: "1",
    title: "Đội ngũ giáo viên tận tâm",
    description: "Giáo viên được đào tạo bài bản, giàu kinh nghiệm và yêu trẻ.",
    icon: "HeartHandshake",
    order_index: 1,
  },
  {
    id: "2",
    title: "Chương trình hiện đại",
    description: "Giáo trình chuẩn quốc tế kết hợp phương pháp Montessori.",
    icon: "GraduationCap",
    order_index: 2,
  },
  {
    id: "3",
    title: "Lớp học an toàn",
    description: "Không gian được thiết kế an toàn, thân thiện với trẻ nhỏ.",
    icon: "Shield",
    order_index: 3,
  },
  {
    id: "4",
    title: "Camera trực tuyến",
    description: "Hệ thống camera giúp phụ huynh theo dõi con mọi lúc.",
    icon: "Camera",
    order_index: 4,
  },
  {
    id: "5",
    title: "Dinh dưỡng khoa học",
    description: "Thực đơn cân bằng dinh dưỡng, đảm bảo vệ sinh an toàn.",
    icon: "Apple",
    order_index: 5,
  },
  {
    id: "6",
    title: "Hoạt động ngoại khóa",
    description: "Đa dạng hoạt động vui chơi, khám phá và phát triển kỹ năng.",
    icon: "Palette",
    order_index: 6,
  },
];

export const defaultPrograms: Program[] = [
  {
    id: "1",
    title: "Nhà trẻ",
    slug: "nha-tre",
    age_group: "12-24 tháng",
    description: "Chăm sóc và phát triển vận động, ngôn ngữ cho trẻ nhỏ.",
    content:
      "<p>Chương trình Nhà trẻ tập trung vào chăm sóc toàn diện, phát triển vận động tinh - thô và khả năng giao tiếp ban đầu cho trẻ từ 12-24 tháng.</p>",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
    gallery: [],
    order_index: 1,
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
  {
    id: "2",
    title: "Mầm non",
    slug: "mam-non",
    age_group: "2-3 tuổi",
    description: "Khám phá thế giới xung quanh qua vui chơi và trải nghiệm.",
    content:
      "<p>Trẻ được khuyến khích khám phá, học hỏi qua các hoạt động vui chơi có chủ đích, phát triển tính độc lập và kỹ năng xã hội.</p>",
    image: "https://images.unsplash.com/photo-1560421683-6857ea356b30?w=600&q=80",
    gallery: [],
    order_index: 2,
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
  {
    id: "3",
    title: "Lớp lá",
    slug: "lop-la",
    age_group: "3-4 tuổi",
    description: "Phát triển tư duy logic, sáng tạo và kỹ năng giao tiếp.",
    content:
      "<p>Chương trình Lớp lá giúp trẻ phát triển tư duy logic, khả năng sáng tạo và kỹ năng làm việc nhóm thông qua các hoạt động đa dạng.</p>",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
    gallery: [],
    order_index: 3,
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
  {
    id: "4",
    title: "Lớp chồi",
    slug: "lop-choi",
    age_group: "4-5 tuổi",
    description: "Chuẩn bị kỹ năng học tập và tự lập cho bậc tiểu học.",
    content:
      "<p>Trẻ được trang bị các kỹ năng cần thiết trước khi vào tiểu học: đọc, viết cơ bản, tư duy toán học và kỹ năng tự phục vụ.</p>",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    gallery: [],
    order_index: 4,
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
  {
    id: "5",
    title: "Lớp lớn",
    slug: "lop-lon",
    age_group: "5-6 tuổi",
    description: "Hoàn thiện kỹ năng học tập và phát triển tính tự tin.",
    content:
      "<p>Chương trình Lớp lớn tập trung hoàn thiện kỹ năng học tập, phát triển tính tự tin và khả năng giải quyết vấn đề cho trẻ trước khi vào lớp 1.</p>",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
    gallery: [],
    order_index: 5,
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
];

export const defaultTeachers: Teacher[] = [
  {
    id: "1",
    name: "Nguyễn Thị Mai",
    slug: "nguyen-thi-mai",
    position: "Hiệu trưởng",
    bio: "Hơn 20 năm kinh nghiệm trong giáo dục mầm non, tốt nghiệp Thạc sĩ Giáo dục.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    order_index: 1,
    is_published: true,
  },
  {
    id: "2",
    name: "Trần Văn Hùng",
    slug: "tran-van-hung",
    position: "Phó Hiệu trưởng",
    bio: "Chuyên gia phương pháp Montessori với 15 năm kinh nghiệm giảng dạy.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    order_index: 2,
    is_published: true,
  },
  {
    id: "3",
    name: "Lê Thị Hoa",
    slug: "le-thi-hoa",
    position: "Giáo viên chủ nhiệm",
    bio: "Tốt nghiệp Đại học Sư phạm, yêu trẻ và tận tâm với nghề.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    order_index: 3,
    is_published: true,
  },
  {
    id: "4",
    name: "Phạm Minh Anh",
    slug: "pham-minh-anh",
    position: "Giáo viên Âm nhạc",
    bio: "Chuyên gia âm nhạc thiếu nhi, giúp trẻ phát triển cảm xúc qua âm nhạc.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    order_index: 4,
    is_published: true,
  },
];

export const defaultGalleryImages: GalleryImage[] = [
  { id: "1", title: "Phòng học hiện đại", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80", category: "Phòng học", album_id: "1", order_index: 1 },
  { id: "2", title: "Sân chơi ngoài trời", image: "https://images.unsplash.com/photo-1560421683-6857ea356b30?w=600&q=80", category: "Sân chơi", album_id: "1", order_index: 2 },
  { id: "3", title: "Thư viện trẻ em", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", category: "Thư viện", album_id: "2", order_index: 3 },
  { id: "4", title: "Góc nghệ thuật", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80", category: "Hoạt động", album_id: "2", order_index: 4 },
  { id: "5", title: "Bếp ăn dinh dưỡng", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80", category: "Bếp ăn", album_id: "3", order_index: 5 },
  { id: "6", title: "Phòng ngủ trưa", image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80", category: "Phòng ngủ", album_id: "3", order_index: 6 },
  { id: "7", title: "Hoạt động ngoài trời", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80", category: "Hoạt động", album_id: "1", order_index: 7 },
  { id: "8", title: "Đồ chơi giáo dục", image: "https://images.unsplash.com/photo-1560421683-6857ea356b30?w=800&q=80", category: "Đồ chơi", album_id: "2", order_index: 8 },
];

export const defaultAlbums: Album[] = [
  { id: "1", title: "Cơ sở vật chất", slug: "co-so-vat-chat", description: "Không gian học tập hiện đại", cover_image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80", order_index: 1 },
  { id: "2", title: "Hoạt động hàng ngày", slug: "hoat-dong-hang-ngay", description: "Những khoảnh khắc đáng nhớ", cover_image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80", order_index: 2 },
  { id: "3", title: "Sự kiện & Lễ hội", slug: "su-kien-le-hoi", description: "Các sự kiện đặc biệt trong năm", cover_image: "https://images.unsplash.com/photo-1560421683-6857ea356b30?w=600&q=80", order_index: 3 },
];

export const defaultVideos: Video[] = [
  { id: "1", title: "Giới thiệu trường Hoa Anh Đào", youtube_id: "dQw4w9WgXcQ", description: "Video giới thiệu về môi trường học tập", order_index: 1 },
  { id: "2", title: "Hoạt động ngoại khóa", youtube_id: "dQw4w9WgXcQ", description: "Các hoạt động vui chơi của trẻ", order_index: 2 },
];

export const defaultNews: NewsPost[] = [
  {
    id: "1",
    title: "Khai giảng năm học mới 2025-2026",
    slug: "khai-giang-nam-hoc-moi-2025-2026",
    excerpt: "Trường Mầm Non Hoa Anh Đào chính thức khai giảng năm học mới với nhiều hoạt động thú vị.",
    content: "<p>Ngày khai giảng đã diễn ra trong không khí vui tươi, phấn khởi với sự tham gia đông đảo của phụ huynh và học sinh.</p>",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    category: "Sự kiện",
    published_at: "2025-09-01",
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
  {
    id: "2",
    title: "Chương trình dinh dưỡng mới cho trẻ",
    slug: "chuong-trinh-dinh-duong-moi",
    excerpt: "Cập nhật thực đơn dinh dưỡng khoa học, đảm bảo sức khỏe cho các bé.",
    content: "<p>Thực đơn mới được xây dựng bởi chuyên gia dinh dưỡng, cân bằng đầy đủ các nhóm chất.</p>",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
    category: "Dinh dưỡng",
    published_at: "2025-08-15",
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
  {
    id: "3",
    title: "Ngày hội gia đình 2025",
    slug: "ngay-hoi-gia-dinh-2025",
    excerpt: "Sự kiện kết nối gia đình và nhà trường với nhiều trò chơi thú vị.",
    content: "<p>Ngày hội gia đình là dịp để phụ huynh và con cùng tham gia các hoạt động vui chơi, gắn kết tình cảm.</p>",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
    category: "Sự kiện",
    published_at: "2025-07-20",
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
  {
    id: "4",
    title: "Tuyển dụng giáo viên mầm non",
    slug: "tuyen-dung-giao-vien",
    excerpt: "Trường đang tuyển dụng giáo viên mầm non có kinh nghiệm và yêu trẻ.",
    content: "<p>Chúng tôi tìm kiếm những giáo viên tận tâm, nhiệt huyết để cùng đồng hành trong hành trình giáo dục trẻ nhỏ.</p>",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    category: "Tuyển dụng",
    published_at: "2025-07-01",
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
  {
    id: "5",
    title: "Lớp học Montessori mới khai trương",
    slug: "lop-hoc-montessori-moi",
    excerpt: "Không gian học tập theo phương pháp Montessori hiện đại.",
    content: "<p>Phòng học Montessori được trang bị đầy đủ dụng cụ học tập, tạo môi trường lý tưởng cho trẻ tự khám phá.</p>",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
    category: "Giáo dục",
    published_at: "2025-06-10",
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
  {
    id: "6",
    title: "Chương trình hè 2025",
    slug: "chuong-trinh-he-2025",
    excerpt: "Đăng ký chương trình hè với nhiều hoạt động bổ ích cho trẻ.",
    content: "<p>Chương trình hè bao gồm các hoạt động ngoại khóa, bơi lội, nghệ thuật và khám phá khoa học.</p>",
    image: "https://images.unsplash.com/photo-1560421683-6857ea356b30?w=600&q=80",
    category: "Chương trình",
    published_at: "2025-05-25",
    is_published: true,
    meta_title: null,
    meta_description: null,
  },
];

export const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Chị Nguyễn Thị Lan",
    content: "Con tôi rất thích đến trường mỗi ngày. Các cô giáo tận tâm và môi trường học tập rất an toàn, sạch sẽ.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    order_index: 1,
  },
  {
    id: "2",
    name: "Anh Trần Văn Đức",
    content: "Hoa Anh Đào là lựa chọn tuyệt vời cho con tôi. Chương trình học hiện đại và phụ huynh được cập nhật thường xuyên.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    order_index: 2,
  },
  {
    id: "3",
    name: "Chị Lê Minh Phương",
    content: "Tôi rất hài lòng với sự chăm sóc và giáo dục tại trường. Bé nhà tôi tiến bộ rõ rệt sau một năm học.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    rating: 5,
    order_index: 3,
  },
];

export const defaultAboutPage: AboutPage = {
  id: "1",
  history:
    "Trường Mầm Non Hoa Anh Đào được thành lập năm 2010 với sứ mệnh mang đến môi trường giáo dục chất lượng cao cho trẻ em tại Quận 8. Qua hơn 15 năm phát triển, trường đã trở thành địa chỉ tin cậy của hàng trăm gia đình.",
  mission:
    "Cung cấp môi trường giáo dục an toàn, hiện đại và giàu yêu thương, giúp mỗi đứa trẻ phát triển toàn diện về thể chất, trí tuệ, cảm xúc và kỹ năng xã hội.",
  vision:
    "Trở thành trường mầm non hàng đầu tại TP.HCM, được phụ huynh tin tưởng và trẻ em yêu thích.",
  values:
    "Yêu thương • Tôn trọng • Sáng tạo • An toàn • Hợp tác",
  team_intro:
    "Đội ngũ giáo viên của Hoa Anh Đào đều được đào tạo bài bản, có chứng chỉ sư phạm và giàu kinh nghiệm trong việc chăm sóc, giáo dục trẻ mầm non.",
};

export const defaultEnrollmentInfo: EnrollmentInfo = {
  id: "1",
  conditions:
    "Trẻ từ 12 tháng đến 6 tuổi. Phụ huynh cung cấp giấy khai sinh, sổ tiêm chủng và giấy khám sức khỏe.",
  process:
    "1. Đăng ký tư vấn online hoặc qua hotline\n2. Đặt lịch tham quan trường\n3. Gặp gỡ và tư vấn chương trình học\n4. Hoàn tất hồ sơ nhập học",
  tuition:
    "Học phí được tính theo tháng, bao gồm học phí, ăn uống và các hoạt động ngoại khóa. Liên hệ hotline 0937 933 702 để biết chi tiết.",
};

export const defaultBanners: Banner[] = [
  {
    id: "1",
    title: "Đăng ký tuyển sinh 2025-2026",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80",
    link: "/tuyen-sinh",
    order_index: 1,
    is_active: true,
  },
];
