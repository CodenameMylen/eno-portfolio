import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Bug,
  Code2,
  FlaskConical,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export type Lang = "id" | "en";

export interface Text {
  id: string;
  en: string;
}

export interface NavItem {
  label: Text;
  href: string;
}

export interface SkillGroup {
  icon: LucideIcon;
  category: Text;
  skills: Text[];
}

export interface Stat {
  value: string;
  label: Text;
}

export interface Course {
  no: number;
  name: Text;
  sks: number;
  letter: string;
  grade: number;
}

export interface Project {
  number: string;
  title: Text;
  description: Text;
  stack: string[];
  href: string;
}

export interface Certification {
  name: Text;
  issuer: Text;
  year: string;
}

export interface ContactDetail {
  icon: LucideIcon;
  label: Text;
  value: string;
  href: string | null;
}

export interface Content {
  nav: {
    langToggle: Text;
    openMenu: Text;
    closeMenu: Text;
    links: NavItem[];
  };
  hero: {
    eyebrow: Text;
    name: Text;
    roles: string[];
    intro: Text;
    primaryCta: Text;
    secondaryCta: Text;
    monogram: string;
    monogramLabel: Text;
  };
  about: {
    title: Text;
    name: Text;
    degree: Text;
    role: Text;
    paragraphs: Text[];
    stats: Stat[];
  };
  skills: {
    title: Text;
    subtitle: Text;
    groups: SkillGroup[];
  };
  education: {
    title: Text;
    entry: {
      degree: Text;
      university: Text;
      periodLabel: Text;
      period: string;
      ipkLabel: Text;
      ipk: string;
      courseworkLabel: Text;
      courses: Text[];
    };
  };
  transcript: {
    title: Text;
    subtitle: Text;
    headers: {
      no: Text;
      course: Text;
      sks: Text;
      letter: Text;
      grade: Text;
    };
    totalSksLabel: Text;
    ipkLabel: Text;
    totalSks: number;
    ipk: string;
    rows: Course[];
  };
  projects: {
    title: Text;
    subtitle: Text;
    viewDetail: Text;
    entries: Project[];
  };
  certifications: {
    title: Text;
    subtitle: Text;
    entries: Certification[];
  };
  contact: {
    title: Text;
    subtitle: Text;
    details: ContactDetail[];
    form: {
      nameLabel: Text;
      namePlaceholder: Text;
      emailLabel: Text;
      emailPlaceholder: Text;
      messageLabel: Text;
      messagePlaceholder: Text;
      submit: Text;
      loading: Text;
      success: Text;
      errors: {
        name: Text;
        nameShort: Text;
        emailRequired: Text;
        emailInvalid: Text;
        messageRequired: Text;
        messageShort: Text;
      };
    };
  };
  footer: {
    copyright: string;
    linkedinAria: Text;
    githubAria: Text;
  };
}

export const LINKEDIN_URL = "https://www.linkedin.com/";
export const GITHUB_URL = "https://github.com/";

const transcriptRows: Course[] = [
  {
    no: 1,
    name: {
      id: "Pengenalan Teknik Informatika",
      en: "Introduction to Informatics Engineering",
    },
    sks: 2,
    letter: "A",
    grade: 4.0,
  },
  {
    no: 2,
    name: { id: "Matematika Diskrit", en: "Discrete Mathematics" },
    sks: 3,
    letter: "A",
    grade: 4.0,
  },
  {
    no: 3,
    name: { id: "Pemrograman Dasar", en: "Programming Fundamentals" },
    sks: 4,
    letter: "A",
    grade: 4.0,
  },
  {
    no: 4,
    name: {
      id: "Struktur Data dan Algoritma",
      en: "Data Structures and Algorithms",
    },
    sks: 4,
    letter: "A-",
    grade: 3.7,
  },
  {
    no: 5,
    name: { id: "Basis Data", en: "Database Systems" },
    sks: 3,
    letter: "A",
    grade: 4.0,
  },
  {
    no: 6,
    name: { id: "Pemrograman Web", en: "Web Programming" },
    sks: 3,
    letter: "A-",
    grade: 3.7,
  },
  {
    no: 7,
    name: { id: "Sistem Operasi", en: "Operating Systems" },
    sks: 3,
    letter: "B+",
    grade: 3.3,
  },
  {
    no: 8,
    name: { id: "Jaringan Komputer", en: "Computer Networks" },
    sks: 3,
    letter: "A-",
    grade: 3.7,
  },
  {
    no: 9,
    name: {
      id: "Rekayasa Perangkat Lunak",
      en: "Software Engineering",
    },
    sks: 3,
    letter: "A",
    grade: 4.0,
  },
  {
    no: 10,
    name: { id: "Pengujian Perangkat Lunak", en: "Software Testing" },
    sks: 3,
    letter: "A",
    grade: 4.0,
  },
  {
    no: 11,
    name: {
      id: "Matematika Informatika",
      en: "Mathematics for Informatics",
    },
    sks: 3,
    letter: "B+",
    grade: 3.3,
  },
  {
    no: 12,
    name: { id: "Kecerdasan Buatan", en: "Artificial Intelligence" },
    sks: 3,
    letter: "A-",
    grade: 3.7,
  },
  {
    no: 13,
    name: {
      id: "Pemrograman Berorientasi Objek",
      en: "Object-Oriented Programming",
    },
    sks: 4,
    letter: "A",
    grade: 4.0,
  },
  {
    no: 14,
    name: {
      id: "Interaksi Manusia Komputer",
      en: "Human-Computer Interaction",
    },
    sks: 2,
    letter: "A",
    grade: 4.0,
  },
  {
    no: 15,
    name: {
      id: "Manajemen Proyek Perangkat Lunak",
      en: "Software Project Management",
    },
    sks: 2,
    letter: "A-",
    grade: 3.7,
  },
  {
    no: 16,
    name: { id: "Keamanan Informasi", en: "Information Security" },
    sks: 2,
    letter: "B+",
    grade: 3.3,
  },
  {
    no: 17,
    name: { id: "Skripsi", en: "Thesis" },
    sks: 6,
    letter: "A",
    grade: 4.0,
  },
  {
    no: 18,
    name: { id: "Praktikum Basis Data", en: "Database Practicum" },
    sks: 2,
    letter: "A",
    grade: 4.0,
  },
  {
    no: 19,
    name: { id: "Komputasi Awan", en: "Cloud Computing" },
    sks: 2,
    letter: "A-",
    grade: 3.7,
  },
  {
    no: 20,
    name: {
      id: "Etika Profesi Informatika",
      en: "Professional Ethics in Informatics",
    },
    sks: 2,
    letter: "A",
    grade: 4.0,
  },
];

const totalSks = transcriptRows.reduce((sum, row) => sum + row.sks, 0);
const weightedGrades = transcriptRows.reduce(
  (sum, row) => sum + row.grade * row.sks,
  0
);
const ipk = (weightedGrades / totalSks).toFixed(2);

export const content: Content = {
  nav: {
    langToggle: { id: "Ganti bahasa", en: "Switch language" },
    openMenu: { id: "Buka menu", en: "Open menu" },
    closeMenu: { id: "Tutup menu", en: "Close menu" },
    links: [
      { label: { id: "Tentang", en: "About" }, href: "#about" },
      { label: { id: "Keahlian", en: "Skills" }, href: "#skills" },
      { label: { id: "Pendidikan", en: "Education" }, href: "#education" },
      { label: { id: "Transkrip", en: "Transcript" }, href: "#transcript" },
      { label: { id: "Proyek", en: "Projects" }, href: "#projects" },
      {
        label: { id: "Sertifikasi", en: "Certifications" },
        href: "#certifications",
      },
      { label: { id: "Kontak", en: "Contact" }, href: "#contact" },
    ],
  },
  hero: {
    eyebrow: {
      id: "Fresh Graduate S1 Teknik Informatika",
      en: "B.Sc. Informatics Engineering Graduate",
    },
    name: { id: "Eno Putri Julianis", en: "Eno Putri Julianis" },
    roles: [
      "Junior QA Manager",
      "Software Tester",
      "Detail-Oriented Graduate",
    ],
    intro: {
      id: "Saya fresh graduate Teknik Informatika dari Pekanbaru yang senang menguji aplikasi sampai bug paling bandel muncul juga. Dari menyusun test case manual sampai menulis skrip automation saat kuliah, saya ingin berada di tim QA yang memperlakukan kualitas sebagai bagian dari pekerjaan, bukan formalitas terakhir.",
      en: "I am a fresh Informatics graduate from Pekanbaru who enjoys pushing applications until the most stubborn bug finally shows up. From drafting manual test cases to writing automation scripts in college, I want to be on a QA team that treats quality as part of the job, not a last-minute formality.",
    },
    primaryCta: { id: "Lihat Proyek", en: "View Projects" },
    secondaryCta: { id: "Kontak Saya", en: "Contact Me" },
    monogram: "EPJ",
    monogramLabel: {
      id: "Inisial Eno Putri Julianis",
      en: "Eno Putri Julianis initials",
    },
  },
  about: {
    title: { id: "Tentang Saya", en: "About Me" },
    name: { id: "Eno Putri Julianis", en: "Eno Putri Julianis" },
    degree: {
      id: "S1 Teknik Informatika",
      en: "B.Sc. Informatics Engineering",
    },
    role: {
      id: "Junior Quality Assurance Manager",
      en: "Junior Quality Assurance Manager",
    },
    paragraphs: [
      {
        id: "Eno Putri Julianis menyelesaikan studi S1 Teknik Informatika di Universitas Nusantara Riau, Pekanbaru, pada 2024 dengan IPK 3.82. Ia memilih mendalami pengujian perangkat lunak setelah berulang kali melihat aplikasi yang terlihat rapi di demo tetapi gagal begitu dipakai pengguna sungguhan.",
        en: "Eno Putri Julianis completed her bachelor's degree in Informatics Engineering at Universitas Nusantara Riau, Pekanbaru, in 2024 with a GPA of 3.82. She went deep into software testing after repeatedly watching apps that looked clean in the demo fall apart the moment real users touched them.",
      },
      {
        id: "Sejak semester tiga, ia aktif mengerjakan pengujian manual dan automation untuk proyek-proyek kuliah: menyusun test case, menjalankan skrip Selenium, memvalidasi API lewat Postman, sampai menulis laporan bug yang langsung bisa dikerjakan developer. Kebiasaan itu yang membuatnya terbiasa mencari celah sebelum pengguna menemukannya.",
        en: "Since her third semester she has worked on manual and automation testing for college projects — drafting test cases, running Selenium scripts, validating APIs with Postman, and writing bug reports developers can act on immediately. That routine is why she now looks for cracks before users find them.",
      },
      {
        id: "Kini Eno ingin bertumbuh di lingkungan QA profesional — memperdalam automation testing, menyentuh alur CI/CD, dan belajar dari tester yang lebih berpengalaman. Tujuannya sederhana: membantu merilis produk yang tidak memalukan saat dipakai banyak orang.",
        en: "Today she wants to grow inside a professional QA environment: deepen automation testing, get close to CI/CD pipelines, and learn from more experienced testers. The aim is simple — help ship products nobody is embarrassed to put in front of users.",
      },
    ],
    stats: [
      { value: "3.82", label: { id: "IPK", en: "GPA" } },
      { value: "2024", label: { id: "Lulus", en: "Graduated" } },
      { value: "Pekanbaru", label: { id: "Kota", en: "City" } },
      {
        value: "3",
        label: { id: "Pengalaman Proyek", en: "Projects Completed" },
      },
    ],
  },
  skills: {
    title: { id: "Keahlian", en: "Skills" },
    subtitle: {
      id: "Alat yang benar-benar saya pakai saat menguji, dikelompokkan sesuai cara saya menggunakannya.",
      en: "Tools I actually reach for when testing, grouped the way I use them.",
    },
    groups: [
      {
        icon: FlaskConical,
        category: { id: "Alat Pengujian", en: "Testing Tools" },
        skills: [
          { id: "Selenium WebDriver", en: "Selenium WebDriver" },
          { id: "Katalon Studio", en: "Katalon Studio" },
          { id: "Postman", en: "Postman" },
          { id: "JMeter", en: "JMeter" },
          { id: "Cypress", en: "Cypress" },
        ],
      },
      {
        icon: Bug,
        category: { id: "Jenis Pengujian", en: "Testing Types" },
        skills: [
          { id: "Pengujian Manual", en: "Manual Testing" },
          { id: "Pengujian Regresi", en: "Regression Testing" },
          { id: "Pengujian Fungsional", en: "Functional Testing" },
          { id: "Pengujian API", en: "API Testing" },
          {
            id: "Pengujian Penerimaan Pengguna",
            en: "User Acceptance Testing",
          },
        ],
      },
      {
        icon: Code2,
        category: { id: "Pengembangan", en: "Development" },
        skills: [
          { id: "HTML CSS JavaScript", en: "HTML CSS JavaScript" },
          { id: "Git dan GitHub", en: "Git and GitHub" },
          { id: "SQL Dasar", en: "Basic SQL" },
          { id: "Figma", en: "Figma" },
        ],
      },
      {
        icon: Brain,
        category: { id: "Soft Skills", en: "Soft Skills" },
        skills: [
          { id: "Teliti dan Detail", en: "Thorough and Detail-Oriented" },
          { id: "Kolaborasi Tim", en: "Team Collaboration" },
          { id: "Pemecahan Masalah", en: "Problem Solving" },
          { id: "Dokumentasi Teknis", en: "Technical Documentation" },
        ],
      },
    ],
  },
  education: {
    title: { id: "Pendidikan", en: "Education" },
    entry: {
      degree: {
        id: "S1 Teknik Informatika",
        en: "B.Sc. Informatics Engineering",
      },
      university: {
        id: "Universitas Nusantara Riau, Pekanbaru",
        en: "Universitas Nusantara Riau, Pekanbaru",
      },
      periodLabel: { id: "Periode", en: "Period" },
      period: "2020 – 2024",
      ipkLabel: { id: "IPK", en: "GPA" },
      ipk: "3.82",
      courseworkLabel: {
        id: "Mata kuliah pilihan",
        en: "Selected coursework",
      },
      courses: [
        {
          id: "Pengujian Perangkat Lunak",
          en: "Software Testing",
        },
        {
          id: "Struktur Data dan Algoritma",
          en: "Data Structures and Algorithms",
        },
        { id: "Basis Data", en: "Database Systems" },
        { id: "Pemrograman Web", en: "Web Programming" },
        {
          id: "Rekayasa Perangkat Lunak",
          en: "Software Engineering",
        },
      ],
    },
  },
  transcript: {
    title: { id: "Transkrip Nilai", en: "Academic Transcript" },
    subtitle: {
      id: "Cuplikan 20 mata kuliah dari masa studi saya. Transkrip resmi berisi 44 mata kuliah dan bisa saya kirim kapan saja bila diminta.",
      en: "A snapshot of 20 courses from my studies. The official transcript covers 44 courses and I can send it any time on request.",
    },
    headers: {
      no: { id: "No", en: "No" },
      course: { id: "Mata Kuliah", en: "Course" },
      sks: { id: "SKS", en: "Credits" },
      letter: { id: "Nilai Huruf", en: "Letter Grade" },
      grade: { id: "Nilai Angka", en: "Numeric Grade" },
    },
    totalSksLabel: { id: "Total SKS", en: "Total Credits" },
    ipkLabel: { id: "IPK", en: "GPA" },
    totalSks,
    ipk,
    rows: transcriptRows,
  },
  projects: {
    title: { id: "Proyek", en: "Projects" },
    subtitle: {
      id: "Tiga pekerjaan pengujian yang paling saya ingat, masing-masing sulit dengan cara yang berbeda.",
      en: "Three testing efforts I remember well, each difficult in a different way.",
    },
    viewDetail: { id: "Lihat Detail", en: "View Detail" },
    entries: [
      {
        number: "01",
        title: {
          id: "Automation Testing Website E-Commerce",
          en: "E-Commerce Website Automation Testing",
        },
        description: {
          id: "Saya membangun skrip Selenium WebDriver berbahasa Python untuk menguji alur pendaftaran, pencarian produk, keranjang belanja, sampai checkout pada situs e-commerce uji. Total 32 skrip ini menggantikan regresi manual yang dulu memakan waktu hampir dua hari penuh.",
          en: "I built a Python-based Selenium WebDriver suite to cover signup, product search, cart, and checkout on a test e-commerce site. Those 32 scripts replaced a manual regression pass that used to eat up almost two full days.",
        },
        stack: ["Python", "Selenium WebDriver", "pytest", "Allure Report"],
        href: "#",
      },
      {
        number: "02",
        title: {
          id: "API Testing Aplikasi Perbankan",
          en: "Banking App API Testing",
        },
        description: {
          id: "Untuk aplikasi perbankan uji, saya menyusun koleksi request Postman lalu menjalankannya via Newman untuk memeriksa endpoint login, transfer, dan mutasi rekening. Setiap temuan saya dokumentasikan sebagai laporan bug lengkap dengan langkah reproduksi, severity, dan tangkapan layar.",
          en: "For a banking test app I assembled a Postman collection and ran it through Newman to verify login, transfer, and account-statement endpoints. Every finding went into a full bug report with reproduction steps, severity, and screenshots.",
        },
        stack: ["Postman", "Newman", "REST API", "JSON"],
        href: "#",
      },
      {
        number: "03",
        title: {
          id: "Manual Testing Aplikasi Food Delivery Mobile",
          en: "Mobile Food Delivery Manual Testing",
        },
        description: {
          id: "Saya menguji aplikasi pesan-antar makanan secara manual dengan Katalon Studio, menyusun 47 skenario test case mulai dari onboarding, pencarian restoran, status pesanan, hingga pembayaran. Fokus utama jatuh pada alur pembatalan pesanan yang tidak pernah menampilkan pesan error yang jelas.",
          en: "I manually tested a food-delivery app in Katalon Studio, writing 47 test scenarios spanning onboarding, restaurant search, order status, and payment. The biggest finds clustered around order cancellation, which never showed users a clear error message.",
        },
        stack: ["Katalon Studio", "Android", "Test Case", "Bug Report"],
        href: "#",
      },
    ],
  },
  certifications: {
    title: { id: "Sertifikasi", en: "Certifications" },
    subtitle: {
      id: "Pelengkap yang saya kejar sambil kuliah untuk memperkuat fondasi di pengujian dan IT.",
      en: "Credentials I pursued alongside my degree to strengthen my testing and IT foundation.",
    },
    entries: [
      {
        name: { id: "ISTQB Foundation Level", en: "ISTQB Foundation Level" },
        issuer: { id: "ISTQB", en: "ISTQB" },
        year: "2023",
      },
      {
        name: {
          id: "Google IT Support Professional",
          en: "Google IT Support Professional",
        },
        issuer: { id: "Coursera", en: "Coursera" },
        year: "2023",
      },
      {
        name: {
          id: "Belajar Pengujian Aplikasi",
          en: "Belajar Pengujian Aplikasi",
        },
        issuer: { id: "Dicoding", en: "Dicoding" },
        year: "2022",
      },
      {
        name: {
          id: "Katalon Studio Certified Tester",
          en: "Katalon Studio Certified Tester",
        },
        issuer: { id: "Katalon", en: "Katalon" },
        year: "2023",
      },
    ],
  },
  contact: {
    title: { id: "Kontak", en: "Contact" },
    subtitle: {
      id: "Sedang membuka diri untuk posisi QA Engineer atau kebutuhan pengujian proyek. Tulis pesannya, biasanya saya balas dalam satu hari kerja.",
      en: "Open to QA Engineer roles and project-based testing work. Send a message — I usually reply within one business day.",
    },
    details: [
      {
        icon: Mail,
        label: { id: "Email", en: "Email" },
        value: "enojulianis@gmail.com",
        href: "mailto:enojulianis@gmail.com",
      },
      {
        icon: Phone,
        label: { id: "Telepon", en: "Phone" },
        value: "0812-3456-7890",
        href: "tel:+6281234567890",
      },
      {
        icon: MapPin,
        label: { id: "Lokasi", en: "Location" },
        value: "Pekanbaru, Riau, Indonesia",
        href: null,
      },
      {
        icon: Linkedin,
        label: { id: "LinkedIn", en: "LinkedIn" },
        value: "LinkedIn",
        href: LINKEDIN_URL,
      },
      {
        icon: Github,
        label: { id: "GitHub", en: "GitHub" },
        value: "GitHub",
        href: GITHUB_URL,
      },
    ],
    form: {
      nameLabel: { id: "Nama", en: "Name" },
      namePlaceholder: { id: "Nama lengkap", en: "Your full name" },
      emailLabel: { id: "Email", en: "Email" },
      emailPlaceholder: { id: "nama@email.com", en: "name@email.com" },
      messageLabel: { id: "Pesan", en: "Message" },
      messagePlaceholder: {
        id: "Ceritakan singkat kebutuhanmu",
        en: "Tell me briefly what you need",
      },
      submit: { id: "Kirim Pesan", en: "Send Message" },
      loading: { id: "Mengirim...", en: "Sending..." },
      success: {
        id: "Pesan sudah terkirim. Terima kasih, saya akan segera membalas.",
        en: "Message sent. Thank you — I will get back to you shortly.",
      },
      errors: {
        name: { id: "Tolong isi namamu.", en: "Please enter your name." },
        nameShort: {
          id: "Nama minimal 2 karakter.",
          en: "Name must be at least 2 characters.",
        },
        emailRequired: {
          id: "Tolong isi alamat email.",
          en: "Please enter your email address.",
        },
        emailInvalid: {
          id: "Format email belum benar, contoh: nama@email.com",
          en: "That email looks off — example: name@email.com",
        },
        messageRequired: {
          id: "Tolong tulis pesanmu.",
          en: "Please write your message.",
        },
        messageShort: {
          id: "Pesan minimal 10 karakter.",
          en: "Message must be at least 10 characters.",
        },
      },
    },
  },
  footer: {
    copyright: "2024 Eno Putri Julianis",
    linkedinAria: {
      id: "Profil LinkedIn Eno Putri Julianis",
      en: "Eno Putri Julianis on LinkedIn",
    },
    githubAria: {
      id: "Profil GitHub Eno Putri Julianis",
      en: "Eno Putri Julianis on GitHub",
    },
  },
};
