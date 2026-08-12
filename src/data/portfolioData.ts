import { Project, Experience, Skill, Education } from '../types';
import { getAssetUrl } from '../utils/assetHelper';

export const personalInfo = {
  name: "Kim Anh",
  fullName: "Lê Thị Kim Anh",
  role: {
    en: "Android Developer",
    vi: "Lập trình viên Android"
  },
  roles: {
    en: [
      "Android Developer (Kotlin & Jetpack Compose)",
      "Identity & Security Specialist (EUDI, SSO Keycloak)",
      "Mobile Developer (Android SDK & MVVM)",
      "Web & Mini App Developer (React, ZMP)"
    ],
    vi: [
      "Lập trình viên Android (Kotlin & Jetpack Compose)",
      "Chuyên viên Định danh & Bảo mật (EUDI, SSO Keycloak)",
      "Lập trình viên Mobile (Android SDK & MVVM)",
      "Lập trình viên Web & Mini App (React, ZMP)"
    ]
  },
  status: {
    en: "Available for Android Developer opportunities",
    vi: "Sẵn sàng cho các vị trí Lập trình viên Android"
  },
  location: "Hiep Binh, Thu Duc City, Ho Chi Minh City 🇻🇳",
  timezone: "Asia/Ho_Chi_Minh",
  gmtOffset: "UTC+7",
  bio: {
    en: "Android Developer specializing in Kotlin, Jetpack Compose, EUDI Wallet SDK, Keycloak SSO, and OAuth 2.0 standards.",
    vi: "Lập trình viên Android chuyên sâu Kotlin, Jetpack Compose, EUDI Wallet SDK, Keycloak SSO và chuẩn bảo mật OAuth 2.0."
  },
  longBio: {
    en: "Leveraging a strong foundation in logic and system architecture from Java development to transition into Kotlin and Jetpack Compose to enhance productivity. My goal is to become a versatile Android Developer, swiftly mastering modern frameworks and applying advanced technological solutions to optimize business challenges effectively.\n\nAt MOBILE-ID TECHNOLOGY AND SERVICES JSC, I develop Android applications using Java, currently specializing in migrating and building modern user interfaces with Jetpack Compose. I've implemented Single Sign-On (SSO) with Keycloak (OAuth 2.0 / OpenID Connect), integrated Firebase Cloud Messaging (FCM), Text-to-Speech (TTS), and pioneered research into the EUDI Wallet SDK following OpenID4VP and ISO 18013-5 (mDL) standards.",
    vi: "Phát huy nền tảng tư duy logic và kiến trúc hệ thống từ lập trình Java để chuyển đổi sang Kotlin và Jetpack Compose nhằm nâng cao năng suất. Mục tiêu của tôi là trở thành một Android Developer đa năng, nhanh chóng làm chủ các framework hiện đại và áp dụng các giải pháp công nghệ tiên tiến để giải quyết các bài toán kinh doanh hiệu quả.\n\nTại MOBILE-ID TECHNOLOGY AND SERVICES JSC, tôi phát triển các ứng dụng Android sử dụng Java, hiện đang chuyên sâu vào việc chuyển đổi và xây dựng giao diện người dùng hiện đại bằng Jetpack Compose. Tôi đã triển khai các giải pháp Single Sign-On (SSO) với Keycloak (OAuth 2.0 / OpenID Connect), tích hợp Firebase Cloud Messaging (FCM), Text-to-Speech (TTS), và tiên phong nghiên cứu tích hợp EUDI Wallet SDK theo các chuẩn định danh quốc tế OpenID4VP và ISO 18013-5 (mDL)."
  },
  email: (import.meta.env.VITE_PERSONAL_EMAIL as string) || "anhltk.work@gmail.com",
  phone: (import.meta.env.VITE_PERSONAL_PHONE as string) || "0886832201",
  github: "https://github.com/akaKimAnh",
  linkedin: "https://www.linkedin.com/in/anh-le-62912028b/",
  telegram: "https://t.me/kimanh_dev",
  resumeUrl: getAssetUrl("/CV_LE_THI_KIM_ANH.html"),
  avatarUrl: getAssetUrl("/images/user.jpeg"),
  stats: {
    en: [
      { label: "Primary Role", value: "Android Dev" },
      { label: "Core Tech", value: "Kotlin & Compose" },
      { label: "Standards", value: "EUDI & OpenID4VP" },
      { label: "Location", value: "HCM City, VN" }
    ],
    vi: [
      { label: "Vai trò chính", value: "Android Dev" },
      { label: "Công nghệ cốt lõi", value: "Kotlin & Compose" },
      { label: "Tiêu chuẩn", value: "EUDI & OpenID4VP" },
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
        "Phát triển Frontend: Chuyển đổi thiết kế Figma thành giao diện web pixel-perfect với React JS & Tailwind CSS",
        "Hệ thống Nội bộ: Xây dựng dashboard quản lý dữ liệu trực quan, đáp ứng trên mọi thiết bị",
        "Đồng nhất Giao diện: Đảm bảo độ chính xác thiết kế tối đa trên toàn bộ mô-đun"
      ]
    }
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: {
      en: "Android Developer",
      vi: "Lập trình viên Android"
    },
    company: "MOBILE-ID TECHNOLOGY AND SERVICES JSC",
    period: "07/2023 — Present",
    location: "Ho Chi Minh City, Vietnam",
    type: {
      en: "Full-time",
      vi: "Toàn thời gian"
    },
    description: {
      en: [
        "Developed Android applications using Java, currently specializing in migrating and building modern user interfaces with Jetpack Compose.",
        "Implemented Single Sign-On (SSO) solutions with Keycloak, strictly adhering to OAuth 2.0 and OpenID Connect standards to ensure user data security.",
        "Integrated Firebase Cloud Messaging (FCM) for real-time push notification management and deployed Text-to-Speech (TTS) features to enhance app accessibility.",
        "Collaborated directly with backend teams via APIs to handle complex data and workflows, ensuring stable and precise application performance."
      ],
      vi: [
        "Phát triển ứng dụng Android bằng Java, hiện đang chuyên sâu chuyển đổi và xây dựng giao diện hiện đại với Jetpack Compose.",
        "Triển khai giải pháp Single Sign-On (SSO) với Keycloak, tuân thủ nghiêm ngặt chuẩn OAuth 2.0 và OpenID Connect để bảo mật dữ liệu.",
        "Tích hợp Firebase Cloud Messaging (FCM) quản lý thông báo đẩy thời gian thực và triển khai tính năng đọc giọng nói (TTS).",
        "Phối hợp trực tiếp với đội ngũ backend qua API để xử lý luồng dữ liệu phức tạp, đảm bảo ứng dụng vận hành ổn định và chính xác."
      ]
    },
    skills: ["Kotlin", "Jetpack Compose", "Java", "Android SDK", "Keycloak (SSO)", "OAuth 2.0", "OpenID Connect", "FCM", "TTS", "EUDI Wallet SDK", "OpenID4VP", "ISO 18013-5 (mDL)"]
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
      vi: "Giải pháp đăng nhập một lần SSO Keycloak, OAuth 2.0, OpenID Connect, quét QR CCCD"
    }
  },
  {
    name: "Firebase (FCM) & Text-to-Speech (TTS)",
    category: "Mobile Development",
    proficiency: 90,
    icon: "Flame",
    description: {
      en: "Real-time push notifications via FCM, automated notification speech reading via TTS",
      vi: "Thông báo đẩy thời gian thực qua FCM, tự động đọc thông báo bằng giọng nói TTS"
    }
  },
  {
    name: "React.js, TypeScript & ZMP SDK",
    category: "Web & Mini App",
    proficiency: 88,
    icon: "Code2",
    description: {
      en: "Zalo Mini App ecosystem, Zalo UI, React.js, TypeScript, Tailwind CSS, Figma",
      vi: "Phát triển Zalo Mini App với ZMP SDK, Zalo UI, React.js, TypeScript, Tailwind CSS"
    }
  }
];

export const education: Education[] = [
  {
    degree: {
      en: "Bachelor of Information Technology",
      vi: "Cử nhân Công nghệ Thông tin"
    },
    institution: "Thuyloi University",
    period: "2020 — 2024",
    details: {
      en: "Classification: Very Good. Specialized in Software Engineering, Android Application Development, System Architecture, and Web Technologies.",
      vi: "Xếp loại: Giỏi. Chuyên ngành Công nghệ Thông tin, nghiên cứu phát triển ứng dụng di động Android, kiến trúc hệ thống và công nghệ web."
    }
  }
];

export const blogPosts = [
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
      educationTitle: "Education & Credentials"
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
      title: "Get In",
      titleGradient: "Touch",
      subtitle: "Feel free to reach out for Android Developer roles, technical collaboration, or project inquiries.",
      sendSuccess: "Message Sent Successfully!",
      sendSuccessDesc: "Thank you for reaching out. I'll get back to you as soon as possible.",
      sendError: "Failed to send message",
      sendErrorDesc: "Please try again later or contact directly via email.",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      emailInputLabel: "Your Email Address",
      subjectLabel: "Subject",
      messageLabel: "Message",
      sendBtn: "Send Message",
      sendingBtn: "Sending Message...",
      contactInfo: "Direct Contact Information",
      emailDirect: "Direct Email",
      locationDirect: "Current Location",
      locationLabel: "Location",
      workStatus: "Career Status",
      copied: "Email Copied!",
      copyAddress: "Copy Email Address",
      availabilityTitle: "OPEN FOR OPPORTUNITIES",
      availabilityDesc: "Available for Full-time Android Developer roles & Technical Collaboration in Ho Chi Minh City or Remote.",
      successTitle: "Message Sent Successfully!",
      successDesc: "Thank you for reaching out. I'll respond as soon as possible.",
      sendAnother: "Send Another Message"
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
      educationTitle: "Học vấn & Bằng cấp"
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
      title: "Gửi Tin nhắn",
      titleGradient: "Liên hệ",
      subtitle: "Hãy trao đổi về các vị trí Lập trình viên Android, cơ hội hợp tác hoặc câu hỏi kỹ thuật.",
      sendSuccess: "Gửi Tin nhắn Thành công!",
      sendSuccessDesc: "Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi lại bạn trong thời gian sớm nhất.",
      sendError: "Gửi tin nhắn thất bại",
      sendErrorDesc: "Vui lòng thử lại sau hoặc gửi email trực tiếp.",
      nameLabel: "Họ và Tên",
      emailLabel: "Địa chỉ Email",
      emailInputLabel: "Địa chỉ Email của bạn",
      subjectLabel: "Tiêu đề",
      messageLabel: "Nội dung Tin nhắn",
      sendBtn: "Gửi Tin nhắn",
      sendingBtn: "Đang gửi...",
      contactInfo: "Thông tin Liên hệ Trực tiếp",
      emailDirect: "Email Trực tiếp",
      locationDirect: "Địa điểm Hiện tại",
      locationLabel: "Địa điểm",
      workStatus: "Trạng thái Sự nghiệp",
      copied: "Đã sao chép Email!",
      copyAddress: "Sao chép Địa chỉ Email",
      availabilityTitle: "SẴN SÀNG NHẬN DỰ ÁN & CÔNG VIỆC",
      availabilityDesc: "Sẵn sàng cho các vị trí Lập trình viên Android toàn thời gian & hợp tác kỹ thuật tại TP. Hồ Chí Minh hoặc Remote.",
      successTitle: "Gửi Tin nhắn Thành công!",
      successDesc: "Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi lại bạn trong thời gian sớm nhất.",
      sendAnother: "Gửi tin nhắn khác"
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
