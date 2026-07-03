export type Lang = "vi" | "en";

export type Translations = {
  nav: {
    home: string;
    about: string;
    programs: string;
    enrollment: string;
    contact: string;
    explore: string;
    teachers: string;
    facilities: string;
    gallery: string;
    news: string;
  };
  common: {
    registerNow: string;
    registerTour: string;
    learnProgram: string;
    viewMore: string;
    viewAllPrograms: string;
    viewAllNews: string;
    hotline: string;
    discover: string;
    close: string;
    submit: string;
    submitting: string;
    selectLanguage: string;
    menu: string;
    map: string;
    contactUs: string;
    copyright: string;
  };
  site: {
    description: string;
    tagline: string;
    preschool: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    about: {
      welcome: string;
      content: string;
    };
    stats: {
      title: string;
      subtitle: string;
      labels: Record<string, string>;
    };
    programs: {
      title: string;
      subtitle: string;
      items: Record<string, { tagline: string }>;
    };
    features: {
      title: string;
      subtitle: string;
      items: Record<string, { title: string; description: string }>;
    };
    facilities: {
      label: string;
      title: string;
      subtitle: string;
    };
    teachers: {
      title: string;
      subtitle: string;
      viewAll: string;
    };
    news: {
      title: string;
      subtitle: string;
    };
    testimonials: {
      label: string;
      title: string;
      subtitle: string;
    };
    cta: {
      titleLine1: string;
      titleLine2: string;
      description: string;
      privacy: string;
    };
  };
  popup: {
    title: string;
    description: string;
    privacy: string;
    imageCaption: string;
    imageSubtitle: string;
    parentName: string;
    phone: string;
    email: string;
    childAge: string;
    selectAge: string;
    note: string;
    notePlaceholder: string;
    success: string;
  };
  forms: {
    parentName: string;
    phone: string;
    email: string;
    childName: string;
    childBirthday: string;
    childAge: string;
    selectAge: string;
    message: string;
    registerConsult: string;
    registerHint: string;
  };
  footer: {
    contact: string;
    menu: string;
    map: string;
    mapTitle: string;
  };
  pages: {
    about: { title: string; description: string };
    programs: { title: string; description: string };
    enrollment: { title: string; description: string };
    contact: { title: string; description: string };
    teachers: { title: string; description: string };
    facilities: { title: string; description: string };
    gallery: { title: string; description: string };
    news: { title: string; description: string };
  };
};

export const vi: Translations = {
  nav: {
    home: "Trang chủ",
    about: "Giới thiệu",
    programs: "Chương trình học",
    enrollment: "Tuyển sinh",
    contact: "Liên hệ",
    explore: "Khám phá",
    teachers: "Đội ngũ giáo viên",
    facilities: "Cơ sở vật chất",
    gallery: "Thư viện ảnh",
    news: "Tin tức",
  },
  common: {
    registerNow: "Đăng ký ngay",
    registerTour: "Đăng ký tham quan",
    learnProgram: "Tìm hiểu chương trình",
    viewMore: "Xem thêm",
    viewAllPrograms: "Xem tất cả chương trình",
    viewAllNews: "Xem thêm",
    hotline: "HOTLINE",
    discover: "Khám phá",
    close: "Đóng",
    submit: "Gửi đăng ký",
    submitting: "Đang gửi...",
    selectLanguage: "Chọn ngôn ngữ",
    menu: "Menu",
    map: "Bản đồ",
    contactUs: "Liên hệ",
    copyright: "Bảo lưu mọi quyền.",
  },
  site: {
    description:
      "Môi trường giáo dục hiện đại, an toàn và giàu yêu thương giúp trẻ phát triển toàn diện tại Quận 8, TP.HCM.",
    tagline: "HOA ANH ĐÀO",
    preschool: "Mầm Non",
  },
  home: {
    hero: {
      title: "Nuôi dưỡng yêu thương",
      subtitle: "Ươm mầm tương lai",
      description:
        "Môi trường giáo dục hiện đại, an toàn và giàu yêu thương giúp trẻ phát triển toàn diện.",
    },
    about: {
      welcome: "Trường Mầm Non Hoa Anh Đào xin chào!",
      content:
        "Với hơn 15 năm kinh nghiệm trong lĩnh vực giáo dục mầm non, Hoa Anh Đào tự hào là ngôi nhà thứ hai của hàng trăm em nhỏ. Chúng tôi cam kết mang đến môi trường học tập an toàn, hiện đại và đầy yêu thương.",
    },
    stats: {
      title: "Hoa Anh Đào trong con số",
      subtitle: "Những con số phản ánh hành trình nuôi dưỡng và phát triển trẻ nhỏ",
      labels: {
        "1": "Năm kinh nghiệm",
        "2": "Học sinh",
        "3": "Giáo viên",
        "4": "Yêu thương",
      },
    },
    programs: {
      title: "Chương trình mầm non",
      subtitle:
        "Chương trình giáo dục phù hợp từng độ tuổi, giúp bé phát triển toàn diện trong niềm vui và hạnh phúc",
      items: {
        "1": { tagline: "Tôi khám phá" },
        "2": { tagline: "Tôi độc lập" },
        "3": { tagline: "Tôi sáng tạo" },
        "4": { tagline: "Tôi năng động" },
        "5": { tagline: "Tôi sẵn sàng" },
      },
    },
    features: {
      title: "Vì sao chọn Hoa Anh Đào?",
      subtitle: "Những giá trị cốt lõi giúp chúng tôi trở thành ngôi nhà thứ hai của bé yêu",
      items: {
        "1": {
          title: "Đội ngũ giáo viên tận tâm",
          description: "Giáo viên được đào tạo bài bản, giàu kinh nghiệm và yêu trẻ.",
        },
        "2": {
          title: "Chương trình hiện đại",
          description: "Giáo trình chuẩn quốc tế kết hợp phương pháp Montessori.",
        },
        "3": {
          title: "Lớp học an toàn",
          description: "Không gian được thiết kế an toàn, thân thiện với trẻ nhỏ.",
        },
        "4": {
          title: "Camera trực tuyến",
          description: "Hệ thống camera giúp phụ huynh theo dõi con mọi lúc.",
        },
      },
    },
    facilities: {
      label: "Cơ sở vật chất",
      title: "Môi trường học tập hiện đại",
      subtitle: "Không gian an toàn, thân thiện và được thiết kế dành riêng cho trẻ nhỏ",
    },
    teachers: {
      title: "Đội ngũ giáo viên",
      subtitle: "Những người thầy, cô tận tâm đồng hành cùng bé",
      viewAll: "Xem tất cả giáo viên",
    },
    news: {
      title: "Tin tức và sự kiện",
      subtitle: "Cập nhật mới nhất từ Hoa Anh Đào",
    },
    testimonials: {
      label: "Testimonial",
      title: "Cảm nghĩ của phụ huynh về chúng tôi",
      subtitle: "Những chia sẻ chân thực từ phụ huynh",
    },
    cta: {
      titleLine1: "Đăng ký tư vấn và",
      titleLine2: "tham quan trường",
      description:
        "Hãy đến và trải nghiệm không gian học tập tuyệt vời dành cho bé yêu của bạn.",
      privacy: "Chúng tôi cam kết bảo mật thông tin cá nhân của quý phụ huynh",
    },
  },
  popup: {
    title: "Đặt lịch tham quan trường",
    description: "Điền thông tin bên dưới, chúng tôi sẽ liên hệ xác nhận lịch tham quan sớm nhất.",
    privacy: "Chúng tôi cam kết bảo mật thông tin cá nhân của quý phụ huynh.",
    imageCaption: "Khám phá Hoa Anh Đào",
    imageSubtitle: "Trải nghiệm không gian học tập an toàn, hiện đại dành cho bé yêu",
    parentName: "Họ và tên ba/mẹ",
    phone: "Số điện thoại",
    email: "Email",
    childAge: "Tuổi của bé",
    selectAge: "Chọn độ tuổi",
    note: "Ghi chú",
    notePlaceholder: "Thời gian mong muốn tham quan...",
    success: "Đặt lịch thành công! Chúng tôi sẽ liên hệ xác nhận sớm nhất.",
  },
  forms: {
    parentName: "Họ tên phụ huynh",
    phone: "Điện thoại",
    email: "Email",
    childName: "Tên bé",
    childBirthday: "Ngày sinh bé",
    childAge: "Độ tuổi",
    selectAge: "Chọn độ tuổi",
    message: "Nội dung",
    registerConsult: "Đăng ký tư vấn",
    registerHint: "Điền thông tin bên dưới, chúng tôi sẽ liên hệ sớm nhất.",
  },
  footer: {
    contact: "Liên hệ",
    menu: "Menu",
    map: "Bản đồ",
    mapTitle: "Bản đồ Trường Mầm Non Hoa Anh Đào",
  },
  pages: {
    about: {
      title: "Giới thiệu",
      description: "Tìm hiểu về Trường Mầm Non Hoa Anh Đào",
    },
    programs: {
      title: "Chương trình học",
      description: "Chương trình giáo dục phù hợp với từng độ tuổi",
    },
    enrollment: {
      title: "Tuyển sinh",
      description: "Đăng ký ngay để con bạn trải nghiệm môi trường học tập tuyệt vời",
    },
    contact: {
      title: "Liên hệ",
      description: "Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ quý phụ huynh",
    },
    teachers: {
      title: "Đội ngũ giáo viên",
      description: "Những người thầy, cô tận tâm đồng hành cùng bé",
    },
    facilities: {
      title: "Cơ sở vật chất",
      description: "Không gian học tập hiện đại, an toàn và thân thiện với trẻ nhỏ",
    },
    gallery: {
      title: "Thư viện ảnh",
      description: "Khoảnh khắc đáng nhớ tại Hoa Anh Đào",
    },
    news: {
      title: "Tin tức",
      description: "Cập nhật mới nhất từ Hoa Anh Đào",
    },
  },
};

export const en: Translations = {
  nav: {
    home: "Home",
    about: "About Us",
    programs: "Programs",
    enrollment: "Admissions",
    contact: "Contact",
    explore: "Explore",
    teachers: "Our Teachers",
    facilities: "Facilities",
    gallery: "Photo Gallery",
    news: "News",
  },
  common: {
    registerNow: "Register Now",
    registerTour: "Schedule a Tour",
    learnProgram: "Explore Programs",
    viewMore: "Learn More",
    viewAllPrograms: "View All Programs",
    viewAllNews: "View More",
    hotline: "HOTLINE",
    discover: "Discover",
    close: "Close",
    submit: "Submit",
    submitting: "Submitting...",
    selectLanguage: "Select language",
    menu: "Menu",
    map: "Map",
    contactUs: "Contact",
    copyright: "All Rights Reserved.",
  },
  site: {
    description:
      "A modern, safe, and loving educational environment helping children develop holistically in District 8, Ho Chi Minh City.",
    tagline: "HOA ANH DAO",
    preschool: "Preschool",
  },
  home: {
    hero: {
      title: "Nurturing love,",
      subtitle: "Growing futures",
      description:
        "A modern, safe, and loving educational environment that helps children develop holistically.",
    },
    about: {
      welcome: "Welcome to Hoa Anh Dao Preschool!",
      content:
        "With over 15 years of experience in early childhood education, Hoa Anh Dao is proud to be a second home for hundreds of little ones. We are committed to providing a safe, modern, and loving learning environment.",
    },
    stats: {
      title: "Hoa Anh Dao in Numbers",
      subtitle: "Figures that reflect our journey of nurturing young children",
      labels: {
        "1": "Years of experience",
        "2": "Students",
        "3": "Teachers",
        "4": "Love & care",
      },
    },
    programs: {
      title: "Preschool Programs",
      subtitle:
        "Age-appropriate curricula designed to help children grow joyfully and holistically",
      items: {
        "1": { tagline: "I am curious" },
        "2": { tagline: "I am independent" },
        "3": { tagline: "I am creative" },
        "4": { tagline: "I am active" },
        "5": { tagline: "I am ready" },
      },
    },
    features: {
      title: "Why Choose Hoa Anh Dao?",
      subtitle: "Core values that make us your child's second home",
      items: {
        "1": {
          title: "Dedicated Teachers",
          description: "Well-trained, experienced educators who truly love children.",
        },
        "2": {
          title: "Modern Curriculum",
          description: "International standards combined with Montessori methods.",
        },
        "3": {
          title: "Safe Classrooms",
          description: "Spaces designed to be safe and friendly for young children.",
        },
        "4": {
          title: "Live Camera System",
          description: "Cameras help parents stay connected with their child anytime.",
        },
      },
    },
    facilities: {
      label: "Facilities",
      title: "Modern Learning Environment",
      subtitle: "Safe, friendly spaces designed especially for young children",
    },
    teachers: {
      title: "Our Teachers",
      subtitle: "Caring educators who walk alongside your child every day",
      viewAll: "View All Teachers",
    },
    news: {
      title: "News & Events",
      subtitle: "Latest updates from Hoa Anh Dao",
    },
    testimonials: {
      label: "Testimonials",
      title: "What Parents Say About Us",
      subtitle: "Honest stories from our parent community",
    },
    cta: {
      titleLine1: "Book a consultation",
      titleLine2: "and school tour",
      description:
        "Come experience our wonderful learning environment for your little one.",
      privacy: "We are committed to protecting your personal information.",
    },
  },
  popup: {
    title: "Schedule a School Tour",
    description: "Fill in the form below and we will contact you to confirm your visit.",
    privacy: "We are committed to protecting your personal information.",
    imageCaption: "Discover Hoa Anh Dao",
    imageSubtitle: "Experience our safe, modern learning space for your child",
    parentName: "Parent's full name",
    phone: "Phone number",
    email: "Email",
    childAge: "Child's age",
    selectAge: "Select age group",
    note: "Notes",
    notePlaceholder: "Preferred visit time...",
    success: "Booking successful! We will contact you soon to confirm.",
  },
  forms: {
    parentName: "Parent's name",
    phone: "Phone",
    email: "Email",
    childName: "Child's name",
    childBirthday: "Child's birthday",
    childAge: "Age group",
    selectAge: "Select age group",
    message: "Message",
    registerConsult: "Register for Consultation",
    registerHint: "Fill in the form below and we will contact you soon.",
  },
  footer: {
    contact: "Contact",
    menu: "Menu",
    map: "Map",
    mapTitle: "Hoa Anh Dao Preschool Map",
  },
  pages: {
    about: {
      title: "About Us",
      description: "Learn about Hoa Anh Dao Preschool",
    },
    programs: {
      title: "Programs",
      description: "Age-appropriate curricula for every stage",
    },
    enrollment: {
      title: "Admissions",
      description: "Register now for your child to experience our wonderful environment",
    },
    contact: {
      title: "Contact",
      description: "We are always ready to listen and support parents",
    },
    teachers: {
      title: "Our Teachers",
      description: "Dedicated educators who walk alongside your child",
    },
    facilities: {
      title: "Facilities",
      description: "Modern, safe, and child-friendly learning spaces",
    },
    gallery: {
      title: "Photo Gallery",
      description: "Memorable moments at Hoa Anh Dao",
    },
    news: {
      title: "News",
      description: "Latest updates from Hoa Anh Dao",
    },
  },
};

export const translations: Record<Lang, Translations> = { vi, en };

export const LANG_COOKIE = "hoa-anh-dao-lang";

export const AGE_GROUPS_EN = [
  "12-24 months",
  "2-3 years",
  "3-4 years",
  "4-5 years",
  "5-6 years",
] as const;
