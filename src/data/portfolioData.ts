import { Project, Experience, Skill, Education, Certification } from '../types';
import { getAssetUrl, defaultAvatar } from '../utils/assetHelper';

export const personalInfo = {
  name: "Kim Anh",
  fullName: "Lê Thị Kim Anh",
  role: {
    en: "Software & Mobile Engineer",
    vi: "Lập trình viên Software & Mobile"
  },
  roles: {
    en: [
      "Software & Mobile Developer (Kotlin, Compose, React)",
      "AI & Web Engineer (Gemini API, AI Studio)",
      "Identity & Security Specialist (EUDI, Keycloak SSO)",
      "Full-Stack & Mobile Developer"
    ],
    vi: [
      "Lập trình viên Software & Mobile (Kotlin, Compose, React)",
      "Kỹ sư Lập trình AI & Web (Gemini API, AI Studio)",
      "Chuyên viên Định danh & Bảo mật (EUDI, Keycloak SSO)",
      "Lập trình viên Full-Stack & Mobile"
    ]
  },
  status: {
    en: "Available for Software Engineering & Mobile Developer opportunities",
    vi: "Sẵn sàng cho các cơ hội Lập trình viên Software & Mobile"
  },
  location: "Hiep Binh, Thu Duc City, Ho Chi Minh City 🇻🇳",
  timezone: "Asia/Ho_Chi_Minh",
  gmtOffset: "UTC+7",
  bio: {
    en: "Software & Mobile Engineer specializing in Kotlin, Jetpack Compose, React, Gemini AI, EUDI Wallet SDK, and Keycloak SSO.",
    vi: "Lập trình viên Software & Mobile chuyên sâu Kotlin, Jetpack Compose, React, Gemini AI, EUDI Wallet SDK và Keycloak SSO."
  },
  longBio: {
    en: "Leveraging a strong foundation in logic, computer science, and software architecture to engineer modern mobile applications and web services. My primary focus is on mastering full-stack software development, building high-performance Android UIs with Jetpack Compose, integrating cutting-edge Multimodal AI models (Google Gemini API), and implementing international digital identity standards (EUDI Wallet SDK, OpenID4VP, Keycloak SSO).\n\nPassionate about clean code, robust software patterns, and transforming complex technical requirements into user-friendly, high-impact digital products.",
    vi: "Phát huy nền tảng tư duy logic, khoa học máy tính và kiến trúc phần mềm để xây dựng các ứng dụng di động và dịch vụ web hiện đại. Trọng tâm phát triển của tôi là làm chủ kỹ thuật lập trình đa nền tảng, phát triển giao diện Android hiệu năng cao với Jetpack Compose, tích hợp các mô hình Multimodal AI tiên tiến (Google Gemini API) và triển khai các tiêu chuẩn định danh số quốc tế (EUDI Wallet SDK, OpenID4VP, Keycloak SSO).\n\nĐam mê lập trình sạch (clean code), thiết kế hệ thống tối ưu và biến các yêu cầu kỹ thuật phức tạp thành sản phẩm công nghệ chất lượng cao."
  },
  email: (import.meta.env.VITE_PERSONAL_EMAIL as string) || "anhltk.work@gmail.com",
  phone: (import.meta.env.VITE_PERSONAL_PHONE as string) || "0886832201",
  github: "https://github.com/akaKimAnh",
  linkedin: "https://www.linkedin.com/in/anh-le-62912028b/",
  telegram: "https://t.me/kimanh_dev",
  resumeUrl: getAssetUrl("/CV_LE_THI_KIM_ANH.html"),
  avatarUrl: defaultAvatar,
  stats: {
    en: [
      { label: "Core Expertise", value: "Software & Mobile" },
      { label: "Google AI Honor", value: "Top 500 AI Riser" },
      { label: "AI & Security", value: "Gemini API & EUDI" },
      { label: "Location", value: "HCM City, VN" }
    ],
    vi: [
      { label: "Lĩnh vực chính", value: "Software & Mobile" },
      { label: "Giải thưởng Google", value: "Top 500 AI Riser" },
      { label: "AI & Bảo mật", value: "Gemini API & EUDI" },
      { label: "Địa điểm", value: "TP. Hồ Chí Minh" }
    ]
  }
};

export const projects: Project[] = [
  {
    id: "trusted-id",
    title: {
      en: "TrustedID",
      vi: "TrustedID"
    },
    tagline: {
      en: "Digital Identity & EUDI Wallet App with Jetpack Compose",
      vi: "Ứng dụng Định danh Số & EUDI Wallet bằng Jetpack Compose"
    },
    description: {
      en: "Pioneered research and integration of the EUDI Wallet SDK, following international identity standards: OpenID4VP and ISO 18013-5 (mDL). Architected and developed the entire application interface using Jetpack Compose (Kotlin) with MVVM architecture.",
      vi: "Tiên phong nghiên cứu và tích hợp EUDI Wallet SDK tuân thủ các tiêu chuẩn định danh quốc tế OpenID4VP và ISO 18013-5 (mDL). Thiết kế và phát triển toàn bộ giao diện bằng Jetpack Compose (Kotlin) theo kiến trúc MVVM."
    },
    category: "Mobile App",
    image: getAssetUrl("/images/trustedid.png"),
    techStack: ["Kotlin", "Jetpack Compose", "MVVM", "EUDI Wallet SDK", "OpenID4VP", "ISO 18013-5 (mDL)"],
    githubUrl: "https://github.com/akaKimAnh",
    liveUrl: "https://github.com/akaKimAnh",
    featured: true,
    year: "01/2026 — Present",
    highlights: {
      en: [
        "Modern R&D: Pioneered research and integration of the EUDI Wallet SDK following OpenID4VP & ISO 18013-5 (mDL)",
        "Modern UI Development: Architected and developed the entire application interface using Jetpack Compose (Kotlin) with MVVM",
        "Identity Processing: Configured Trust Validators and managed digital credential verification flows ensuring high security"
      ],
      vi: [
        "Nghiên cứu & Tích hợp: Tiên phong tích hợp EUDI Wallet SDK theo chuẩn quốc tế OpenID4VP & ISO 18013-5 (mDL)",
        "Phát triển UI Hiện đại: Thiết kế & xây dựng toàn bộ ứng dụng bằng Jetpack Compose (Kotlin) với kiến trúc MVVM",
        "Xử lý Định danh: Cấu hình Trust Validator và quản lý luồng xác thực chứng thư số đảm bảo bảo mật và tương thích toàn cầu"
      ]
    }
  },
  {
    id: "trusted-pay",
    title: {
      en: "TrustedPay Mobile",
      vi: "Ứng dụng TrustedPay"
    },
    tagline: {
      en: "Secure Payment, SSO Keycloak & Citizen ID Scanning",
      vi: "Thanh toán Bảo mật, SSO Keycloak & Quét CCCD"
    },
    description: {
      en: "Built and optimized Android applications using Java. Deployed SSO Keycloak, handled QR Code scanning for CCCD (Citizen ID) data extraction, managed real-time FCM push notifications with TTS, and integrated backend APIs.",
      vi: "Xây dựng và tối ưu ứng dụng Android sử dụng Java. Triển khai SSO Keycloak, xử lý quét mã QR trích xuất dữ liệu Căn cước công dân (CCCD), quản lý thông báo đẩy FCM kèm đọc giọng nói TTS và tích hợp API."
    },
    category: "Mobile App",
    image: getAssetUrl("/images/trustedpay.svg"),
    techStack: ["Java", "Android SDK", "Keycloak SSO", "OAuth 2.0", "OpenID Connect", "FCM", "TTS", "QR Scanner (CCCD)"],
    liveUrl: "https://play.google.com/store/apps/details?id=vn.mobileid.trustedpay.client&hl=vi",
    featured: true,
    year: "05/2025 — Present",
    highlights: {
      en: [
        "Security & Identity: Deployed SSO (Keycloak) and handled QR Code scanning for CCCD data extraction and authentication",
        "Real-time Interaction: Managed push notifications via FCM and optimized automated notification reading using TTS",
        "System Integration: Integrated complex backend APIs and handled system workflows to ensure high reliability"
      ],
      vi: [
        "Bảo mật & Định danh: Triển khai SSO (Keycloak) và xử lý quét mã QR trích xuất dữ liệu Căn cước công dân (CCCD)",
        "Tương tác Thời gian thực: Quản lý thông báo đẩy qua FCM và tối ưu tự động đọc thông báo bằng giọng nói (TTS)",
        "Tích hợp Hệ thống: Tích hợp các hệ thống backend API phức tạp đảm bảo vận hành ổn định và chính xác"
      ]
    }
  },
  {
    id: "zalo-mini-app",
    title: {
      en: "Zalo Mini App (ZMP)",
      vi: "Zalo Mini App (ZMP)"
    },
    tagline: {
      en: "Responsive & High-Performance Mini Apps with React & ZMP",
      vi: "Mini App Hiệu năng cao & Tương thích với React & ZMP"
    },
    description: {
      en: "Explored and implemented components within the ZMP ecosystem and Zalo UI to build high-performance mini-apps. Applied React JS and TypeScript to ensure responsive and user-friendly interfaces.",
      vi: "Nghiên cứu và triển khai các thành phần trong hệ sinh thái ZMP và Zalo UI để xây dựng mini app hiệu năng cao. Sử dụng React JS và TypeScript đảm bảo giao diện đáp ứng tốt và thân thiện với người dùng."
    },
    category: "Mini App",
    image: getAssetUrl("/images/zalo-miniapp.svg"),
    techStack: ["React JS", "TypeScript", "ZMP SDK", "Zalo UI", "Tailwind CSS"],
    githubUrl: "https://github.com/akaKimAnh",
    liveUrl: "https://github.com/akaKimAnh",
    featured: false,
    year: "12/2025 — 02/2026",
    highlights: {
      en: [
        "R&D: Explored and implemented components within the ZMP ecosystem and Zalo UI to build high-performance mini-apps",
        "Experience Optimization: Applied React JS and TypeScript to ensure responsive and user-friendly interfaces",
        "Ecosystem Integration: Ensured smooth behavior and lightweight bundle size inside Zalo platform"
      ],
      vi: [
        "Nghiên cứu & Phát triển: Khám phá và triển khai các component trong hệ sinh thái ZMP và Zalo UI",
        "Tối ưu Trải nghiệm: Sử dụng React JS và TypeScript mang lại giao diện nhạy, mượt mà và dễ dùng",
        "Tích hợp Hệ sinh thái: Đảm bảo dung lượng nhẹ và tương thích hoàn hảo trong ứng dụng Zalo"
      ]
    }
  },
  {
    id: "web-trustedpay-facialsense",
    title: {
      en: "Web TrustedPay & FacialSense",
      vi: "Web TrustedPay & FacialSense"
    },
    tagline: {
      en: "Pixel-Perfect Web Dashboards & Biometric Showcase",
      vi: "Giao diện Web Doanh nghiệp & Quản lý Nhận diện Sinh trắc học"
    },
    description: {
      en: "Converted Figma designs into pixel-perfect web interfaces using React JS and Tailwind CSS. Built intuitive data management dashboards focusing on cross-device responsiveness.",
      vi: "Chuyển đổi bản vẽ Figma thành giao diện web chuẩn xác bằng React JS và Tailwind CSS. Xây dựng các bảng điều khiển quản lý dữ liệu trực quan chú trọng tính đáp ứng đa thiết bị."
    },
    category: "Frontend Web",
    image: getAssetUrl("/images/fasense.svg"),
    techStack: ["React JS", "TypeScript", "Tailwind CSS", "Figma"],
    githubUrl: "https://github.com/akaKimAnh",
    liveUrl: "https://github.com/akaKimAnh",
    featured: false,
    year: "08/2023 — 04/2024",
    highlights: {
      en: [
        "Frontend Development: Converted Figma designs into pixel-perfect web interfaces using React JS and Tailwind CSS",
        "Internal Systems: Built intuitive data management dashboards focusing on cross-device responsiveness",
        "UI Consistency: Maintained high design fidelity across product modules"
      ],
      vi: [
        "Phát triển Frontend: Chuyển đổi thiết kế Figma thành giao diện web pixel-perfect với React JS và Tailwind CSS",
        "Hệ thống Nội bộ: Xây dựng bảng điều khiển quản lý dữ liệu trực quan chú trọng tính đáp ứng đa thiết bị",
        "Tính Đồng nhất Giao diện: Đảm bảo độ chính xác cao về mặt thiết kế giữa các mô-đun sản phẩm"
      ]
    }
  }
];

export const experiences: Experience[] = [
  {
    id: "software-dev",
    role: {
      en: "Software & Mobile Developer",
      vi: "Lập trình viên Software & Mobile"
    },
    company: "Software Engineering & Mobile Development",
    period: "08/2023 — Present",
    location: "Ho Chi Minh City, Vietnam 🇻🇳",
    type: {
      en: "Full-time / Project Lead",
      vi: "Toàn thời gian / Trưởng dự án"
    },
    description: {
      en: [
        "Pioneered research & integration of EUDI Wallet SDK following international identity standards OpenID4VP and ISO 18013-5 (mDL)",
        "Architected and developed modern Android & web application UIs using Jetpack Compose (Kotlin) and React with MVVM/Clean architecture",
        "Deployed Single Sign-On (SSO) with Keycloak complying strictly with OAuth 2.0 and OpenID Connect standards",
        "Integrated Firebase Cloud Messaging (FCM) for real-time push notifications and deployed Text-to-Speech (TTS) voice accessibility features",
        "Built and optimized mobile applications handling QR Code scanning and secure credential verification workflows",
        "Collaborated seamlessly with API backends, cloud services, and Generative AI (Google Gemini API) to solve complex user challenges"
      ],
      vi: [
        "Tiên phong nghiên cứu & tích hợp EUDI Wallet SDK tuân thủ các chuẩn định danh quốc tế OpenID4VP và ISO 18013-5 (mDL)",
        "Xây dựng và phát triển giao diện ứng dụng Android & Web hiện đại bằng Jetpack Compose (Kotlin) và React theo kiến trúc MVVM",
        "Triển khai giải pháp Single Sign-On (SSO) với Keycloak tuân thủ nghiêm ngặt chuẩn OAuth 2.0 và OpenID Connect",
        "Tích hợp Firebase Cloud Messaging (FCM) thông báo đẩy thời gian thực và triển khai tính năng trợ năng đọc giọng nói (TTS)",
        "Phát triển và tối ưu ứng dụng di động xử lý quét mã QR và quy trình xác thực dữ liệu an toàn",
        "Phối hợp trực tiếp với dịch vụ backend API, hệ thống Cloud và Trí tuệ Nhân tạo (Google Gemini API) để giải quyết các bài toán phức tạp"
      ]
    },
    skills: ["Kotlin", "Jetpack Compose", "React", "TypeScript", "Android SDK", "EUDI Wallet SDK", "OpenID4VP", "Keycloak (SSO)", "OAuth 2.0", "Firebase FCM", "TTS", "Gemini API"]
  }
];

export const skills: Skill[] = [
  {
    name: "Kotlin & Jetpack Compose",
    category: "Mobile Development",
    proficiency: 95,
    icon: "Smartphone",
    description: {
      en: "Modern Android UI development, MVVM architecture, Coroutines, Flow, State management",
      vi: "Phát triển giao diện Android hiện đại bằng Jetpack Compose, kiến trúc MVVM, Coroutines & Flow"
    }
  },
  {
    name: "Android SDK & Java",
    category: "Mobile Development",
    proficiency: 92,
    icon: "Code2",
    description: {
      en: "Core Android development, Activity/Fragment lifecycles, Retrofit, Room, Dagger/Hilt",
      vi: "Lập trình Android cốt lõi, vòng đời ứng dụng, kết nối Retrofit, Room DB, Dagger/Hilt"
    }
  },
  {
    name: "EUDI Wallet SDK & Digital Identity",
    category: "Auth & Security",
    proficiency: 90,
    icon: "KeyRound",
    description: {
      en: "International identity standards: OpenID4VP, ISO 18013-5 (mDL), Trust Validators",
      vi: "Tiêu chuẩn định danh quốc tế: OpenID4VP, ISO 18013-5 (mDL), cấu hình Trust Validator"
    }
  },
  {
    name: "Keycloak SSO, OAuth 2.0 & OIDC",
    category: "Auth & Security",
    proficiency: 92,
    icon: "KeyRound",
    description: {
      en: "Single Sign-On solutions, OAuth 2.0, OpenID Connect, QR Code CCCD data extraction",
      vi: "Giải pháp Đăng nhập một lần SSO, OAuth 2.0, OpenID Connect, bóc tách QR CCCD"
    }
  },
  {
    name: "Zalo Mini App (ZMP SDK)",
    category: "Mini App",
    proficiency: 88,
    icon: "Layers",
    description: {
      en: "Zalo Mini App framework, native API bridges, payment gateways, ZMP CLI",
      vi: "Phát triển Zalo Mini App, tích hợp ZaloPay, kết nối Native Bridge, ZMP CLI"
    }
  },
  {
    name: "React & TypeScript",
    category: "Web Development",
    proficiency: 85,
    icon: "Globe",
    description: {
      en: "Modern SPA development, Tailwind CSS, State Management, Vite",
      vi: "Xây dựng Web SPA hiện đại với React, TypeScript, Tailwind CSS, Vite"
    }
  }
];

export const education: Education[] = [
  {
    degree: {
      en: "Bachelor of Information Technology",
      vi: "Cử nhân Công nghệ Thông tin"
    },
    institution: {
      en: "University / Academy",
      vi: "Trường Đại học"
    },
    period: "2019 - 2023",
    details: {
      en: "Graduated with Honors. Specialized in IT, focusing on Android Mobile Application Development and Software Engineering.",
      vi: "Xếp loại: Giỏi. Chuyên ngành Công nghệ Thông tin, nghiên cứu phát triển ứng dụng di động Android và Hệ thống Phần mềm."
    }
  }
];

export const certifications: Certification[] = [
  {
    id: "google-ai-riser-top-500",
    title: {
      en: "Certificate of Completion – Top 500 #AIRiserVietnam2026",
      vi: "Chứng nhận Hoàn thành – Top 500 #AIRiserVietnam2026"
    },
    issuer: {
      en: "Google for Developers",
      vi: "Google for Developers"
    },
    issueDate: "10/2026",
    badge: "Top 500",
    badgeType: "Gold / Honors",
    description: {
      en: "Awarded Certificate of Completion by Google for Developers for outstanding dedication and creativity as a Top 500 participant in the #AIRiserVietnam2026 (#BuildwithGoogleAI - Vươn mình kiến tạo) nationwide program.",
      vi: "Chứng nhận do Google for Developers trao tặng cho sự đóng góp và tính sáng tạo xuất sắc, đạt danh hiệu Top 500 toàn quốc tại chương trình #AIRiserVietnam2026 (#BuildwithGoogleAI - Vươn mình kiến tạo)."
    },
    image: getAssetUrl("/images/cert-top500-ai-riser.png"),
    tags: ["Google for Developers", "#BuildwithGoogleAI", "#AIRiserVietnam2026", "Top 500", "Google AI"],
    featured: true
  }
];

export const blogPosts = [
  {
    id: "medassist-ai-google-ai-riser-vietnam",
    title: {
      en: "🩺 Introducing MedAssist AI – Smart Healthcare Assistant & Prescription Manager for Everyone",
      vi: "🩺 Giới Thiệu MedAssist AI – Trợ Lý Y Tế Thông Minh & Quản Lý Đơn Thuốc Đa Năng Cho Mọi Nhà"
    },
    excerpt: {
      en: "MedAssist AI is built as an intelligent 24/7 personal healthcare companion, helping you scan prescriptions with AI OCR, automate medication reminders, evaluate symptoms, and provide emergency first-aid procedures.",
      vi: "MedAssist AI ra đời như một người trợ lý y tế cá nhân thông minh, đồng hành 24/7 giúp bạn hiểu rõ tình trạng sức khỏe, quét đơn thuốc bằng AI, tự động lên lịch nhắc uống thuốc và bảo vệ an toàn cho cả gia đình."
    },
    date: "25/08/2026",
    readTime: { en: "6 min read", vi: "6 phút đọc" },
    category: "AI & Healthcare",
    tags: ["MedAssist AI", "Prescription OCR", "Smart Reminders", "Gemini AI", "PWA", "Google AI Riser Vietnam", "Healthcare Tech"],
    author: "Lê Thị Kim Anh",
    content: {
      en: `In today's fast-paced life, managing personal and family health often comes with obstacles: unreadable doctor's prescription handwriting, forgetting medication times, uncertainty about which specialist to consult for specific symptoms, or feeling panicked during medical emergencies.

To solve these challenges, **MedAssist AI** ([https://medassist.ai.studio/](https://medassist.ai.studio/)) was created as an intelligent 24/7 personal healthcare companion, empowering you to understand your health status, optimize your medication routine, and protect your entire family.

### 🌟 Key Features of MedAssist AI

#### 1. 📸 AI Prescription Scanning & Explanation (Prescription OCR)
- **Automatic Recognition:** Simply snap a photo of a prescription or medical check-up record, and the AI automatically extracts drug names, dosages, usage instructions, and follow-up appointment dates.
- **Easy-to-Understand Explanations:** Translates complex medical terms into plain language: what the medication treats, whether to take it before or after meals, and dietary precautions.
- **Safety Alerts:** Automatically detects potential drug interaction risks and special precautions for patients.

#### 2. ⏰ Automated Medication & Follow-up Reminders (Smart Reminders)
- **Auto-Schedule Generation:** After scanning a prescription, the system automatically builds complete medication and follow-up schedules in your calendar without manual entry.
- **Multi-Platform Notifications:** Supports push notifications accompanied by alarm sounds, even when your phone screen is locked or turned off.
- **Visual Schedules:** Manage medication tracking on a daily or weekly view, featuring a "Taken" check-in button so you never miss a dose or double-dose.

#### 3. 💬 Pre-Visit Guidance & Symptom Triage (Pre-Visit Guidance)
- **Symptom Evaluation:** Users enter unusual health symptoms, and the AI analyzes and categorizes the urgency level (Triage).
- **Specialist Recommendations:** Guides you to register for the right medical specialty (Cardiology, Gastroenterology, Pulmonology, Dermatology, etc.) to save time and avoid unnecessary referrals.
- **Preparation Advice:** Recommends essential preparations before your visit (e.g., fasting for blood tests, bringing previous lab reports).

#### 4. 🚨 Emergency First Aid Handbook (Emergency First Aid)
- Provides medically approved, step-by-step first aid procedures for common emergencies: choking, burns, heatstroke, seizures, stroke, poisoning, and more.
- Integrates a quick 115 emergency call button and highlights crucial *"Strictly DO NOT do"* warnings to prevent further harm to victims.

#### 5. 🔊 Voice Accessibility (Text-to-Speech)
- Features natural voice reading for medical instructions, especially helpful for seniors, visually impaired individuals, or patients feeling unwell.

### 🛠️ Modern Technology Stack

**MedAssist AI** is built on cutting-edge technology to ensure fast response times, high accuracy, and strict data privacy:
- **Artificial Intelligence:** Powered by **Google Gemini AI** for large language modeling and multimodal computer vision.
- **Progressive Web App (PWA):** Enables direct installation to your smartphone home screen (Android & iOS) as a lightweight, native-like app without consuming storage.
- **Serverless & Cloud Architecture:** Optimizes data synchronization and triggers 24/7 scheduled push reminders.

### 📱 Quick Setup & User Guide

1. **Access the App:** Open **MedAssist AI** on your phone browser (Safari on iOS or Chrome on Android).
2. **Add to Home Screen:**
   - **Android:** Tap the 3-dot menu (⋮) ➔ Select *"Add to Home screen"*.
   - **iOS:** Tap the Share button (square icon with up arrow) ➔ Select *"Add to Home Screen"*.
3. **Enable Sound Alerts:** Open the Reminders tab and tap *Allow Notifications* to never miss a dosage.

### 🌐 Experience MedAssist AI Today
Visit and experience **MedAssist AI** live directly in your browser:
👉 **Live Web App:** [https://medassist.ai.studio/](https://medassist.ai.studio/)`,
      vi: `Trong cuộc sống bận rộn hiện nay, việc chăm sóc sức khỏe cho bản thân và gia đình đôi khi gặp nhiều trở ngại: đơn thuốc chữ bác sĩ khó đọc, quên giờ uống thuốc, không rõ triệu chứng này nên khám chuyên khoa nào hay lúng túng khi gặp tình huống sơ cứu khẩn cấp.

Để giải quyết những vấn đề đó, **MedAssist AI** ([https://medassist.ai.studio/](https://medassist.ai.studio/)) ra đời như một người trợ lý y tế cá nhân thông minh, đồng hành 24/7 giúp bạn hiểu rõ tình trạng sức khỏe, tối ưu hóa quá trình dùng thuốc và bảo vệ an toàn cho cả gia đình.

### 🌟 Các Tính Năng Nổi Bật Của MedAssist AI

#### 1. 📸 Quét & Giải Thích Đơn Thuốc Bằng AI (Prescription OCR)
- **Nhận diện tự động:** Chỉ cần chụp ảnh đơn thuốc hoặc sổ khám bệnh, AI sẽ tự động đọc tên thuốc, liều lượng, cách dùng và ngày tái khám.
- **Giải thích dễ hiểu:** Chuyển đổi các thuật ngữ y khoa phức tạp thành lời giải thích bình dân: thuốc này trị bệnh gì, nên uống trước hay sau ăn, cần kiêng khem những gì.
- **Cảnh báo an toàn:** Phát hiện các nguy cơ tương tác thuốc hoặc lưu ý đặc biệt cho người bệnh.

#### 2. ⏰ Tự Động Lên Lịch Nhắc Uống Thuốc & Tái Khám (Smart Reminders)
- **Tự động tạo lịch:** Sau khi quét đơn thuốc, hệ thống tự động thiết lập toàn bộ lịch uống thuốc và lịch hẹn tái khám vào thời gian biểu mà không cần nhập tay từng mục.
- **Thông báo đa nền tảng:** Hỗ trợ thông báo đẩy (Push Notification) kèm chuông báo ngay cả khi tắt màn hình, khóa máy.
- **Lịch biểu trực quan:** Quản lý theo dõi lịch uống theo dạng ngày/tuần, tích hợp nút đánh dấu "Đã uống" giúp không bao giờ bị quên hoặc uống quá liều.

#### 3. 💬 Tư Vấn & Định Hướng Trước Khi Đi Khám (Pre-Visit Guidance)
- **Đánh giá triệu chứng:** Người dùng nhập các biểu hiện bất thường, AI sẽ phân tích và phân loại mức độ khẩn cấp (Triage).
- **Gợi ý chuyên khoa:** Hướng dẫn bạn nên đăng ký khám đúng chuyên khoa (Tim mạch, Tiêu hóa, Hô hấp, Da liễu,...) để tránh mất thời gian khám vòng quanh.
- **Lời khuyên chuẩn bị:** Hướng dẫn những điều cần chuẩn bị (nhịn ăn sáng xét nghiệm máu, đem theo các kết quả khám cũ,...).

#### 4. 🚨 Cẩm Nang Sơ Cứu Khẩn Cấp (Emergency First Aid)
- Cung cấp quy trình sơ cứu từng bước chuẩn y khoa cho các tai nạn thường gặp: hóc dị vật, bỏng, say nắng, co giật, đột quỵ, ngộ độc,...
- Tích hợp nút gọi khẩn cấp **115** và chỉ dẫn những điều *"Tuyệt đối KHÔNG được làm"* để tránh gây nguy hiểm cho nạn nhân.

#### 5. 🔊 Trợ Năng Giọng Nói (Text-to-Speech)
- Tích hợp tính năng đọc to hướng dẫn bằng giọng nói tiếng Việt tự nhiên, đặc biệt hữu ích cho người cao tuổi, người có thị lực kém hoặc mắt mờ khi đang ốm.

### 🛠️ Nền Tảng Công Nghệ Hiện Đại

**MedAssist AI** được xây dựng trên nền tảng công nghệ tối tân nhằm đảm bảo tốc độ phản hồi nhanh, chính xác và bảo mật:
- **Trí tuệ nhân tạo:** Tích hợp mô hình ngôn ngữ lớn và xử lý thị giác máy tính **Google Gemini AI**.
- **Công nghệ PWA (Progressive Web App):** Cho phép cài đặt trực tiếp lên màn hình chính điện thoại (Android & iOS) gọn nhẹ như một app native mà không tốn dung lượng bộ nhớ.
- **Hệ thống Serverless & Cloud:** Tối ưu hóa việc đồng bộ dữ liệu và kích hoạt thông báo hẹn giờ xuyên suốt 24/7.

### 📱 Hướng Dẫn Cài Đặt & Sử Dụng Nhanh

1. **Truy cập ứng dụng:** Mở liên kết **MedAssist AI** trên trình duyệt điện thoại (Safari trên iOS hoặc Chrome trên Android).
2. **Cài đặt ra màn hình chính:**
   - **Android:** Bấm menu 3 chấm (⋮) ➔ Chọn *"Thêm vào màn hình chính"* (Add to Home screen).
   - **iOS:** Bấm nút Chia sẻ (biểu tượng ô vuông mũi tên lên) ➔ Chọn *"Thêm vào MH chính"*.
3. **Bật thông báo chuông:** Mở tab Lịch nhắc và bấm Cho phép nhận thông báo để không bỏ lỡ cữ thuốc nào.

### 🌐 Trải nghiệm MedAssist AI ngay hôm nay
👉 **Live Web App:** [https://medassist.ai.studio/](https://medassist.ai.studio/)`
    }
  },
  {
    id: "eudi-wallet-openid4vp-android",
    title: {
      en: "Deep Dive into EUDI Wallet Core on Android: Implementing OpenID4VCI, OpenID4VP & ISO 18013-5 mDL",
      vi: "Chuyên sâu EUDI Wallet Core trên Android: Tích hợp OpenID4VCI, OpenID4VP và chuẩn mDoc ISO 18013-5"
    },
    excerpt: {
      en: "A comprehensive architectural guide on integrating the official eudi-lib-android-wallet-core library for issuing, storing, and presenting EU Digital Identity credentials (mDoc / SD-JWT) on Android using Jetpack Compose.",
      vi: "Hướng dẫn kiến trúc toàn diện tích hợp thư viện chính thức eudi-lib-android-wallet-core giúp cấp phát, lưu trữ và trình diễn chứng thư số EU (mDoc / SD-JWT) trên Android với Jetpack Compose."
    },
    date: "15/02/2026",
    readTime: { en: "10 min read", vi: "10 phút đọc" },
    category: "Security & Digital Identity",
    tags: ["eudi-lib-android-wallet-core", "OpenID4VCI", "OpenID4VP", "ISO 18013-5 mDL", "SD-JWT VC", "Kotlin", "Jetpack Compose"],
    author: "Lê Thị Kim Anh",
    content: {
      en: `The **EU Digital Identity Wallet (EUDI Wallet)** architecture defines standard protocols and cryptographic formats for issuing and presenting verifiable credentials across European member states. On Android, the official repository [\`eu-digital-identity-wallet/eudi-lib-android-wallet-core\`](https://github.com/eu-digital-identity-wallet/eudi-lib-android-wallet-core) serves as the primary Kotlin library providing full lifecycle management for EUDI digital credentials.

### 1. Architectural Overview of \`eudi-lib-android-wallet-core\`
The library provides a modern Kotlin-first API designed around asynchronous reactive flows (\`Flow\` / \`Coroutines\`) and robust error handling. Key core modules include:
- **Credential Storage (\`eudi-lib-android-wallet-storage\`):** Encrypted credential storage backed by the Android Keystore & StrongBox hardware security module (HSM) for generating hardware-bound ECDSA/Ed25519 key pairs.
- **Issuance Engine (OpenID4VCI):** Handles Authorization Code and Pre-Authorized Code grants to fetch digital credentials (mDoc / SD-JWT VC) from compliant Issuers.
- **Presentation Engine (OpenID4VP & ISO 18013-5):** Supports both remote presentation over OpenID4VP and proximity engagement (NFC / BLE) for Mobile Driving Licenses (mDL).

### 2. Credential Issuance with OpenID4VCI
Using \`eudi-lib-android-wallet-core\`, issuing a credential follows a standardized sequence:
1. **Issuer Metadata Resolution:** Resolving Issuer endpoints and supported document formats (\`org.iso.18013.5.1.mDL\` or \`eu.europa.ec.eudi.pid.1\`).
2. **User Authorization:** Initiating the PKCE-secured authorization code flow or scanning a QR code with a pre-authorized code.
3. **Proof of Possession (PoP):** Generating a signed cryptographic proof bound to the hardware key stored in Android Keystore.
4. **Deferred & Batch Issuance:** Managing asynchronous issuance states when the issuer requires background processing or multi-document issuance.

### 3. Remote Credential Presentation via OpenID4VP
For web and online verifiers, OpenID4VP facilitates secure presentation request exchanges:
- **Presentation Definition Parsing:** Decoding request URIs or JWTs specifying required document attributes (e.g., age over 18, driver license validity).
- **Selective Disclosure:** Allowing the user to consent and selectively disclose *only* the requested fields, preserving privacy.
- **Verifiable Presentation (VP) Token Generation:** Creating signed COSE / SD-JWT responses verified against Trusted Issuer Lists (VTI / X.509 chains).

### 4. Proximity Verification (ISO 18013-5 mDL)
For offline / in-person verification (e.g., airport security or identity checks):
- **Device Engagement:** Triggered via QR code scanning or NFC tap.
- **BLE Data Transfer:** Establishing an encrypted Bluetooth Low Energy channel between the holder wallet and reader/verifier.
- **MSO (Mobile Security Object) Validation:** Verifying the CBOR-encoded document signature using COSE Sign1 and reader authentication.

### 5. Implementation Example in Kotlin & Jetpack Compose
Below is a code snippet demonstrating initialization of \`EudiWallet\` using StrongBox hardware key storage:

\`\`\`kotlin
// Initialize EudiWallet instance with StrongBox KeyStore support
val walletStorage = EudiWalletStorage.Builder(context)
    .setKeystoreAlias("eudi_wallet_hardware_key")
    .setUseStrongBox(true)
    .build()

val eudiWallet = EudiWallet.Builder(context)
    .withStorage(walletStorage)
    .withOpenId4VciConfig(
        OpenId4VciConfig(
            issuerUrl = "https://issuer.eudi.europa.eu",
            clientId = "com.eudi.wallet.android"
        )
    )
    .build()

// Issue PID Credential asynchronously
viewModelScope.launch {
    val result = eudiWallet.issueCredential(
        docType = "eu.europa.ec.eudi.pid.1",
        txCode = userProvidedCode
    )
    when (result) {
        is IssueResult.Success -> _uiState.update { it.copy(credential = result.doc) }
        is IssueResult.Failure -> _uiState.update { it.copy(error = result.message) }
    }
}
\`\`\`

### 6. UI Integration with Jetpack Compose & MVVM
In our Android project architecture, we encapsulate the \`EudiWallet\` instance inside a Repository layer and expose states via StateFlow to Jetpack Compose UI components:
- **Credential Dashboard:** Displaying issued PID (Person Identification Data) and mDL cards with status indicators (Valid, Expired, Revoked).
- **Consent Dialogs:** Interactive Compose modal sheets visualizing requested attributes before user biometric authentication.
- **Verification Logs:** Real-time feedback for BLE transmission and QR handshake states.`,
      vi: `Kiến trúc **EU Digital Identity Wallet (EUDI Wallet)** định nghĩa các giao thức tiêu chuẩn và định dạng mã hóa để cấp phát, trình diễn chứng thư số có thể xác thực trên khắp các quốc gia thành viên Châu Âu. Trên nền tảng Android, thư viện chính thức [\`eu-digital-identity-wallet/eudi-lib-android-wallet-core\`](https://github.com/eu-digital-identity-wallet/eudi-lib-android-wallet-core) đóng vai trò là thư viện Kotlin cốt lõi cung cấp toàn bộ vòng đời quản lý ví định danh số EUDI.

### 1. Tổng quan Kiến trúc \`eudi-lib-android-wallet-core\`
Thư viện được thiết kế theo phong cách Kotlin-first, tận dụng \`Coroutines\` và \`Flow\` cùng cơ chế xử lý lỗi chặt chẽ. Các mô-đun cốt lõi gồm:
- **Lưu trữ Chứng thư (\`eudi-lib-android-wallet-storage\`):** Lưu trữ mã hóa được bảo vệ bởi Android Keystore & mô-đun bảo mật phần cứng StrongBox (HSM), sinh cặp khóa ECDSA/Ed25519 gắn liền với phần cứng thiết bị.
- **Động cơ Cấp phát (OpenID4VCI):** Xử lý luồng Authorization Code và Pre-Authorized Code để tải chứng thư số (mDoc / SD-JWT VC) từ các đơn vị phát hành (Issuer).
- **Động cơ Trình diễn (OpenID4VP & ISO 18013-5):** Hỗ trợ cả trình diễn từ xa qua OpenID4VP và giao tiếp khoảng cách gần (NFC / BLE) cho Bằng lái xe số (mDL).

### 2. Quy trình Cấp phát Chứng thư bằng OpenID4VCI
Thông qua \`eudi-lib-android-wallet-core\`, luồng cấp phát chứng thư diễn ra qua các bước tiêu chuẩn:
1. **Phân giải Metadata Nhà phát hành:** Xác định endpoint và định dạng chứng thư được hỗ trợ (\`org.iso.18013.5.1.mDL\` hoặc \`eu.europa.ec.eudi.pid.1\`).
2. **Xác thực Người dùng:** Khởi tạo luồng Authorization Code có mã hóa PKCE hoặc quét mã QR chứa Pre-Authorized Code.
3. **Bằng chứng Sở hữu Khóa (Proof of Possession - PoP):** Sinh chữ ký mã hóa gắn với khóa riêng lưu trong Android Keystore.
4. **Cấp phát Trì hoãn & Theo Lô (Deferred & Batch Issuance):** Quản lý trạng thái cấp phát bất đồng bộ khi Issuer yêu cầu xử lý ngầm hoặc cấp nhiều chứng thư cùng lúc.

### 3. Trình diễn Chứng thư Từ xa qua OpenID4VP
Đối với các đơn vị xác thực trên web/trực tuyến, OpenID4VP giúp trao đổi yêu cầu trình diễn an toàn:
- **Phân tích Presentation Definition:** Giải mã URI hoặc JWT yêu cầu các thuộc tính cụ thể (ví dụ: xác thực trên 18 tuổi, hiệu lực bằng lái).
- **Bật mí Có chọn lọc (Selective Disclosure):** Cho phép người dùng xác nhận và chỉ chia sẻ đúng các trường dữ liệu được yêu cầu, bảo vệ tối đa quyền riêng tư.
- **Tạo Token VP (Verifiable Presentation):** Đóng gói chữ ký COSE / SD-JWT được đối soát với Danh sách Đơn vị Tin cậy (VTI / Chuỗi chứng chỉ X.509).

### 4. Xác thực Khoảng cách gần (ISO 18013-5 mDL)
Đối với xác thực trực tiếp / offline (kiểm tra an ninh sân bay, kiểm tra định danh):
- **Khởi tạo Giao tiếp (Device Engagement):** Quét mã QR hoặc chạm NFC giữa hai thiết bị.
- **Truyền dữ liệu BLE:** Thiết lập kênh truyền Bluetooth Low Energy mã hóa giữa Ví định danh và Thiết bị đọc (Verifier).
- **Xác thực MSO (Mobile Security Object):** Kiểm tra chữ ký tài liệu mã hóa CBOR bằng COSE Sign1 và xác thực phía Verifier.

### 5. Ví dụ Tích hợp Code Kotlin trong Jetpack Compose
Dưới đây là đoạn mã khởi tạo \`EudiWallet\` sử dụng tính năng lưu khóa phần cứng StrongBox:

\`\`\`kotlin
// Khởi tạo đối tượng EudiWallet với bộ lưu trữ StrongBox KeyStore
val walletStorage = EudiWalletStorage.Builder(context)
    .setKeystoreAlias("eudi_wallet_hardware_key")
    .setUseStrongBox(true)
    .build()

val eudiWallet = EudiWallet.Builder(context)
    .withStorage(walletStorage)
    .withOpenId4VciConfig(
        OpenId4VciConfig(
            issuerUrl = "https://issuer.eudi.europa.eu",
            clientId = "com.eudi.wallet.android"
        )
    )
    .build()

// Cấp phát chứng thư PID bất đồng bộ
viewModelScope.launch {
    val result = eudiWallet.issueCredential(
        docType = "eu.europa.ec.eudi.pid.1",
        txCode = userProvidedCode
    )
    when (result) {
        is IssueResult.Success -> _uiState.update { it.copy(credential = result.doc) }
        is IssueResult.Failure -> _uiState.update { it.copy(error = result.message) }
    }
}
\`\`\`

### 6. Tích hợp Giao diện với Jetpack Compose & MVVM
Trong kiến trúc ứng dụng Android, đối tượng \`EudiWallet\` được đóng gói trong tầng Repository, phát dữ liệu qua StateFlow đến các component Jetpack Compose:
- **Màn hình Ví chứng thư:** Hiển thị thẻ PID (Person Identification Data) và mDL với các trạng thái (Valid, Expired, Revoked).
- **Hộp thoại Bật mí Dữ liệu:** Giao diện Compose Modal hiển thị minh bạch các thuộc tính được yêu cầu trước khi người dùng xác thực sinh trắc học.
- **Nhật ký Xác thực:** Phản hồi trạng thái kết nối BLE và bắt tay QR theo thời gian thực.`
    }
  },
  {
    id: "keycloak-sso-android-integration",
    title: {
      en: "Securing Enterprise Android Applications with Keycloak SSO & OAuth2 / OpenID Connect",
      vi: "Bảo mật Ứng dụng Android Doanh nghiệp với Keycloak SSO & Chuẩn OAuth2 / OpenID Connect"
    },
    excerpt: {
      en: "A comprehensive breakdown on integrating enterprise single sign-on (SSO), OAuth 2.0 PKCE flow, and Retrofit token refresh interceptors.",
      vi: "Chi tiết quy trình tích hợp đăng nhập một lần (SSO) cho doanh nghiệp, luồng OAuth 2.0 PKCE và tự động làm mới Token bằng Retrofit Interceptor."
    },
    date: "28/07/2025",
    readTime: { en: "8 min read", vi: "8 phút đọc" },
    category: "Security & Auth",
    tags: ["Keycloak SSO", "OAuth2", "Security", "Android"],
    author: "Lê Thị Kim Anh",
    content: {
      en: `Enterprise mobile security requires robust authentication mechanisms. Keycloak provides a flexible OpenID Connect server for single sign-on across mobile and web platforms.

### Key Integration Highlights:
- **Authorization Code Flow with PKCE**: Enhances security on native Android clients without storing client secrets.
- **Custom Retrofit Interceptor**: Automatically attaches Bearer Access Tokens to outgoing requests and transparently refreshes expired tokens using Refresh Tokens.
- **Encrypted Shared Preferences**: Safely stores authentication tokens on Android devices using hardware-backed keystores.`,
      vi: `Bảo mật ứng dụng di động doanh nghiệp đòi hỏi cơ chế xác thực mạnh mẽ. Keycloak mang lại giải pháp OpenID Connect linh hoạt giúp đăng nhập một lần trên cả nền tảng di động và web.

### Điểm Kỹ thuật Nổi bật:
- **Authorization Code Flow với PKCE**: Tăng cường bảo mật trên ứng dụng Android gốc mà không cần lưu trữ client secret trong mã nguồn.
- **Retrofit Interceptor Tùy biến**: Tự động chèn Bearer Access Token vào tất cả request và tự động refresh token khi token hết hạn.
- **EncryptedSharedPreferences**: Lưu trữ an toàn Access Token và Refresh Token trên thiết bị bằng Android Keystore.`
    }
  },
  {
    id: "fcm-push-notification-tts",
    title: {
      en: "Real-time Push Notifications with FCM and Automated Text-to-Speech (TTS)",
      vi: "Xử lý Thông báo Push Real-time qua FCM và Đọc Giọng nói Tự động với TTS"
    },
    excerpt: {
      en: "Building a seamless transaction notification reader combining Firebase Cloud Messaging background payloads with Android TextToSpeech engine.",
      vi: "Xây dựng hệ thống nhận thông báo giao dịch thời gian thực kết hợp Firebase Cloud Messaging và động cơ đọc âm thanh Android TextToSpeech."
    },
    date: "20/11/2025",
    readTime: { en: "6 min read", vi: "6 phút đọc" },
    category: "Mobile Features",
    tags: ["FCM", "TTS", "Firebase", "Android"],
    author: "Lê Thị Kim Anh",
    content: {
      en: `Real-time payment notifications require immediate visibility and accessibility. Integrating FCM with Android's TTS engine allows hands-free voice announcements for incoming transactions.

### Key Features:
- **FirebaseMessagingService**: Parsing foreground and background notification payloads reliably.
- **TTS Queue Management**: Ensuring sequential voice playback when multiple transactions arrive simultaneously.
- **CCCD QR Parsing**: Extracting citizen credential info and triggering instant audio feedback.`,
      vi: `Thông báo thanh toán thời gian thực đòi hỏi phản hồi tức thì. Kết hợp FCM với động cơ TTS của Android giúp đọc thông báo bằng giọng nói tự động mà không cần chạm màn hình.

### Các Tính năng Cốt lõi:
- **FirebaseMessagingService**: Xử lý mượt mà dữ liệu thông báo khi ứng dụng ở cả foreground và background.
- **Quản lý Hàng chờ TTS**: Đảm bảo đọc danh sách thông báo theo thứ tự khi có nhiều giao dịch đến cùng lúc.
- **Bóc tách QR CCCD**: Trích xuất dữ liệu Căn cước công dân và phát âm thanh phản hồi nhanh chóng.`
    }
  }
];

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Tech Stack",
      blog: "Blog",
      contact: "Contact"
    },
    blog: {
      badge: "Technical Articles & Insights",
      title: "Android & Tech",
      titleGradient: "Blog",
      subtitle: "Articles, technical architectural guides, and engineering learnings written by Kim Anh.",
      readMore: "Read Full Article",
      close: "Close Article",
      searchPlaceholder: "Search articles by title or tags...",
      allCategories: "All Topics"
    },
    hero: {
      status: "Available for Android Developer opportunities",
      greeting: "Hi, I'm",
      exploreWork: "Explore Selected Work",
      getInTouch: "Get In Touch",
      copyEmail: "Copy Address",
      emailCopied: "Email Copied!"
    },
    projects: {
      badge: "Selected Portfolio Showcase",
      title: "Featured",
      titleGradient: "Projects",
      subtitle: "Explore mobile applications, EUDI digital identity, and mini apps built by Kim Anh.",
      featured: "Featured",
      viewSpecs: "View Details",
      all: "All",
      mobile: "Mobile App",
      miniApp: "Mini App",
      web: "Frontend Web"
    },
    experience: {
      badge: "Professional Career Journey",
      title: "Experience &",
      titleGradient: "Background",
      subtitle: "My professional journey at MOBILE-ID TECHNOLOGY AND SERVICES JSC as an Android Developer.",
      educationTitle: "Education & Academic Degree",
      certificationsTitle: "Certifications & Honors"
    },
    skills: {
      badge: "Technical Expertise & Standards",
      title: "Tech Stack &",
      titleGradient: "Skillset",
      subtitle: "Technologies, identity standards, and frameworks I specialize in for Android development.",
      all: "All",
      mobileDev: "Mobile Development",
      authSec: "Auth & Security",
      webFront: "Web & Mini App",
      proficiency: "Proficiency",
      bestPracticesTitle: "Engineering Standards & Production Security",
      bestPracticesDesc: "Android MVVM with Jetpack Compose, Keycloak SSO, EUDI Wallet SDK, and ISO 18013-5 (mDL) digital credentials."
    },
    terminal: {
      title: "kimanh-dev-cli",
      welcome: "Welcome to Kim Anh's Interactive Portfolio Shell v2.5",
      typeHelp: "Type 'help' for available commands or 'gui' to close.",
      placeholder: "Enter command...",
      availableCommands: "Available commands:",
      catError: "Usage: cat <filename> (e.g., cat bio, cat contact, cat skills)"
    },
    contact: {
      badge: "Let's Connect",
      title: "Direct",
      titleGradient: "Contact",
      subtitle: "Feel free to reach out directly via email, GitHub, or LinkedIn for Android Developer roles and collaboration.",
      sendSuccess: "Email Client Opened!",
      sendSuccessDesc: "Your default mail client was launched to send your message directly.",
      sendError: "Could not open email client",
      sendErrorDesc: "Please copy the email address below to send your message.",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      emailInputLabel: "Your Email Address",
      subjectLabel: "Subject",
      messageLabel: "Message",
      sendBtn: "Open Email App",
      sendingBtn: "Opening Email...",
      contactInfo: "Direct Channels",
      emailDirect: "Direct Email",
      locationDirect: "Current Location",
      locationLabel: "Location",
      workStatus: "Career Status",
      copied: "Email Copied!",
      copyAddress: "Copy Email Address",
      availabilityTitle: "OPEN FOR OPPORTUNITIES",
      availabilityDesc: "Available for Full-time Android Developer roles & Technical Collaboration in Ho Chi Minh City or Remote.",
      successTitle: "Email Client Opened!",
      successDesc: "Your mail application has opened with Kim Anh's email prefilled.",
      sendAnother: "Copy Email Address"
    },
    modal: {
      keyHighlights: "Key Features & Highlights",
      techUsed: "Technologies & Frameworks"
    },
    detail: {
      backToProjects: "Back to Portfolio Projects",
      projectOverview: "Project Overview & Architecture",
      keyHighlights: "Core Highlights & Features",
      techStack: "Technologies & Tools Used",
      exploreOther: "Explore Other Projects",
      openApp: "Open App / Google Play Store",
      githubRepo: "View Source Code on GitHub",
      contactDev: "Contact Kim Anh",
      category: "Category",
      timeline: "Timeline / Period",
      role: "Role",
      developerRole: "Android / Frontend Developer"
    },
    blogDetail: {
      backToBlog: "Back to Blog Articles",
      articleOverview: "Article Content",
      exploreOther: "Explore Other Articles",
      author: "Author",
      readTime: "Read Time",
      date: "Published Date",
      tags: "Topics & Tags"
    },
    footer: {
      designedBy: "Designed & Built by Kim Anh",
      copyright: "Kim Anh"
    }
  },
  vi: {
    nav: {
      about: "Giới thiệu",
      projects: "Dự án",
      experience: "Kinh nghiệm",
      skills: "Kỹ năng",
      blog: "Bài viết",
      contact: "Liên hệ"
    },
    blog: {
      badge: "Bài viết & Chia sẻ Kỹ thuật",
      title: "Android & Công nghệ",
      titleGradient: "Blog",
      subtitle: "Các bài viết, hướng dẫn kiến trúc và kinh nghiệm thực chiến được viết bởi Kim Anh.",
      readMore: "Đọc bài viết đầy đủ",
      close: "Đóng bài viết",
      searchPlaceholder: "Tìm kiếm bài viết theo tiêu đề hoặc thẻ...",
      allCategories: "Tất cả Chủ đề"
    },
    hero: {
      status: "Sẵn sàng cho các cơ hội Lập trình viên Android",
      greeting: "Xin chào, tôi là",
      exploreWork: "Xem Dự án Nổi bật",
      getInTouch: "Liên hệ Ngay",
      copyEmail: "Sao chép Email",
      emailCopied: "Đã sao chép Email!"
    },
    projects: {
      badge: "Danh mục Dự án Nổi bật",
      title: "Dự án",
      titleGradient: "Nổi bật",
      subtitle: "Khám phá các ứng dụng Android, định danh số EUDI và mini app được xây dựng bởi Kim Anh.",
      featured: "Nổi bật",
      viewSpecs: "Xem Chi tiết",
      all: "Tất cả",
      mobile: "Mobile App",
      miniApp: "Mini App",
      web: "Frontend Web"
    },
    experience: {
      badge: "Hành trình Sự nghiệp",
      title: "Kinh nghiệm &",
      titleGradient: "Quá trình",
      subtitle: "Quá trình làm việc tại MOBILE-ID TECHNOLOGY AND SERVICES JSC với vai trò Android Developer.",
      educationTitle: "Học vấn & Bằng cấp",
      certificationsTitle: "Chứng chỉ & Giải thưởng"
    },
    skills: {
      badge: "Năng lực Kỹ thuật & Tiêu chuẩn",
      title: "Kỹ năng &",
      titleGradient: "Công nghệ",
      subtitle: "Các công nghệ, tiêu chuẩn định danh và framework chuyên sâu cho phát triển Android.",
      all: "Tất cả",
      mobileDev: "Phát triển Mobile",
      authSec: "Xác thực & Bảo mật",
      webFront: "Web & Mini App",
      proficiency: "Mức độ Thành thạo",
      bestPracticesTitle: "Tiêu chuẩn Kỹ thuật & Bảo mật Thực chiến",
      bestPracticesDesc: "Android MVVM với Jetpack Compose, Keycloak SSO, EUDI Wallet SDK và chứng thư số ISO 18013-5 (mDL)."
    },
    terminal: {
      title: "kimanh-dev-cli",
      welcome: "Chào mừng đến với CLI Tương tác Portfolio của Kim Anh v2.5",
      typeHelp: "Gõ 'help' để xem danh sách lệnh hoặc 'gui' để đóng.",
      placeholder: "Nhập lệnh...",
      availableCommands: "Các lệnh khả dụng:",
      catError: "Cú pháp: cat <tên_file> (ví dụ: cat bio, cat contact, cat skills)"
    },
    contact: {
      badge: "Kết nối & Hợp tác",
      title: "Liên hệ",
      titleGradient: "Trực tiếp",
      subtitle: "Hãy trao đổi về các cơ hội công việc Android Developer, hợp tác dự án qua Email, GitHub hoặc LinkedIn.",
      sendSuccess: "Đã mở ứng dụng Email!",
      sendSuccessDesc: "Ứng dụng Email của bạn đã được mở với địa chỉ người nhận điền sẵn.",
      sendError: "Không thể mở Email client",
      sendErrorDesc: "Vui lòng sao chép địa chỉ email trực tiếp bên dưới.",
      nameLabel: "Họ và Tên",
      emailLabel: "Địa chỉ Email",
      emailInputLabel: "Địa chỉ Email của bạn",
      subjectLabel: "Tiêu đề",
      messageLabel: "Nội dung Tin nhắn",
      sendBtn: "Gửi Email Trực tiếp",
      sendingBtn: "Đang mở Email...",
      contactInfo: "Kênh Liên hệ Trực tiếp",
      emailDirect: "Email Trực tiếp",
      locationDirect: "Địa điểm Hiện tại",
      locationLabel: "Địa điểm",
      workStatus: "Trạng thái Sự nghiệp",
      copied: "Đã sao chép Email!",
      copyAddress: "Sao chép Địa chỉ Email",
      availabilityTitle: "SẴN SÀNG NHẬN DỰ ÁN & CÔNG VIỆC",
      availabilityDesc: "Sẵn sàng cho các vị trí Lập trình viên Android toàn thời gian & hợp tác kỹ thuật tại TP. Hồ Chí Minh hoặc Remote.",
      successTitle: "Đã mở ứng dụng Email!",
      successDesc: "Ứng dụng Email của bạn đã được kích hoạt để trao đổi trực tiếp với Kim Anh.",
      sendAnother: "Sao chép Địa chỉ Email"
    },
    modal: {
      keyHighlights: "Tính năng & Điểm Nổi bật",
      techUsed: "Công nghệ & Framework Sử dụng"
    },
    detail: {
      backToProjects: "Quay lại Danh sách Dự án",
      projectOverview: "Tổng quan & Kiến trúc Dự án",
      keyHighlights: "Các Tính năng & Điểm Nổi bật",
      techStack: "Công nghệ & Framework Sử dụng",
      exploreOther: "Khám phá Các Dự án Khác",
      openApp: "Mở Ứng dụng / Google Play Store",
      githubRepo: "Xem Mã nguồn trên GitHub",
      contactDev: "Liên hệ Kim Anh",
      category: "Phân loại",
      timeline: "Thời gian / Giai đoạn",
      role: "Vai trò",
      developerRole: "Lập trình viên Android / Frontend"
    },
    blogDetail: {
      backToBlog: "Quay lại Danh sách Bài viết",
      articleOverview: "Nội dung Bài viết",
      exploreOther: "Đọc các Bài viết Khác",
      author: "Tác giả",
      readTime: "Thời gian đọc",
      date: "Ngày đăng",
      tags: "Chủ đề & Thẻ"
    },
    footer: {
      designedBy: "Thiết kế & Lập trình bởi Kim Anh",
      copyright: "Kim Anh"
    }
  }
};
