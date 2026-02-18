"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.solutions": "الحلول",
    "nav.products": "المنتجات",
    "nav.services": "الخدمات",
    "nav.about": "عن فيليسيتي",
    "nav.contact": "اتصل بنا",
    "nav.balcony": "الشرفة",
    "nav.residential": "السكني",
    "nav.commercial": "التجاري",
    "nav.industrial": "خزانة ESS التجارية والصناعية",
    "nav.offGrid": "محول خارج الشبكة",
    "nav.hybrid": "محول هجين",
    "nav.lithium": "بطارية ليثيوم",
    "nav.gel": "بطارية جل",
    "nav.allInOne": "نظام الكل في واحد ESS",
    "nav.components": "المكونات الرئيسية",
    "nav.support": "الدعم الفني",
    "nav.warranty": "الضمان",
    "nav.downloads": "التحميلات",
    "nav.history": "تاريخنا",
    "nav.certifications": "الشهادات",
    "nav.projects": "حالات المشاريع",

    // Hero
    "hero.title1": "اجعل الحياة مليئة بالأمل",
    "hero.subtitle1": "اجعل العالم أفضل",
    "hero.title2": "حلول الطاقة النظيفة",
    "hero.subtitle2": "من أجل مستقبل مستدام",
    "hero.title3": "زوّد منزلك بالطاقة",
    "hero.subtitle3": "مع ابتكارات الطاقة الشمسية",

    // Campaign
    "campaign.badge": "ارفع نظام 50 كيلوواط لتكسب 50 نقطة!",
    "campaign.title": "انضم إلى",
    "campaign.highlight": "حملة 50 كيلوواط",
    "campaign.description": "بطارية ليثيوم FLA48100 جديدة تمامًا، والعديد من القسائم ورحلة شاملة إلى قوانغتشو بانتظارك!",
    "campaign.button": "شاهد المزيد",

    // Solutions
    "solutions.title": "الحلول",
    "solutions.more": "المزيد",
    "solutions.balcony": "الشرفة",
    "solutions.residential": "السكني",
    "solutions.commercial": "التجاري",
    "solutions.industrial": "خزانة ESS التجارية والصناعية",

    // Products
    "products.title": "المنتجات",
    "products.featured": "المنتجات المميزة",
    "products.solarSolutions": "حلول الطاقة الشمسية",
    "products.viewDetails": "عرض التفاصيل",
    "products.search": "بحث...",
    "products.selectCategory": "اختر الفئة",
    "products.allCategories": "جميع الفئات",
    "products.new": "جديد",
    "products.noProducts": "لا توجد منتجات مطابقة للبحث",
    "products.requestQuote": "طلب عرض سعر",
    "products.inquiry": "استفسار",
    "products.specifications": "المواصفات",
    "products.power": "القدرة",
    "products.voltage": "الجهد",
    "products.type": "النوع",
    "products.warranty": "الضمان",
    "products.years": "سنوات",
    "products.related": "منتجات مشابهة",
    "products.backToProducts": "العودة للمنتجات",
    "products.notFound": "المنتج غير موجود",
    "products.downloadCatalog": "تحميل الكتالوج",
    "products.downloadDatasheet": "تحميل ملف البيانات",

    // Contact
    "contact.title": "اتصل بنا",
    "contact.subtitle": "نحن هنا لمساعدتك. تواصل معنا وسنرد عليك في أقرب وقت ممكن",
    "contact.sendMessage": "أرسل لنا رسالة",
    "contact.name": "الاسم الكامل",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "رقم الهاتف",
    "contact.subject": "الموضوع",
    "contact.message": "الرسالة",
    "contact.send": "إرسال الرسالة",
    "contact.info": "معلومات الاتصال",
    "contact.address": "العنوان",
    "contact.workHours": "ساعات العمل",

    // Footer
    "footer.tagline": "الفرع الرئيسي - الفحامة - اجعل الحياة مليئة بالأمل",
    "footer.contactInfo": "معلومات الاتصال",
    "footer.headquarters": "المقر الرئيسي",
    "footer.phone": "الهاتف",
    "footer.email": "البريد",
    "footer.complaints": "الشكاوى والاقتراحات",
    "footer.solutions": "الحلول",
    "footer.learnMore": "تعرف علينا أكثر",
    "footer.moreInfo": "المزيد من المعلومات",
    "footer.copyright": "جميع الحقوق محفوظة",

    // Common
    "common.breadcrumb.home": "الرئيسية",
    "common.needHelp": "هل تحتاج إلى مساعدة؟",
    "common.contactNow": "تواصل معنا الآن",
    "common.learnMore": "اكتشف المزيد",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.products": "Products",
    "nav.services": "Services",
    "nav.about": "About Felicity",
    "nav.contact": "Contact Us",
    "nav.balcony": "Balcony",
    "nav.residential": "Residential",
    "nav.commercial": "Commercial",
    "nav.industrial": "C&I ESS Cabinet",
    "nav.offGrid": "Off-Grid Inverter",
    "nav.hybrid": "Hybrid Inverter",
    "nav.lithium": "Lithium Battery",
    "nav.gel": "Gel Battery",
    "nav.allInOne": "All-in-One ESS",
    "nav.components": "Key Components",
    "nav.support": "Technical Support",
    "nav.warranty": "Warranty",
    "nav.downloads": "Downloads",
    "nav.history": "Our History",
    "nav.certifications": "Certifications",
    "nav.projects": "Project Cases",

    // Hero
    "hero.title1": "Make Life Full of Hope",
    "hero.subtitle1": "Make the World Better",
    "hero.title2": "Clean Energy Solutions",
    "hero.subtitle2": "For a Sustainable Future",
    "hero.title3": "Power Your Home",
    "hero.subtitle3": "With Solar Innovations",

    // Campaign
    "campaign.badge": "Lift 50kW system to earn 50 points!",
    "campaign.title": "Join the",
    "campaign.highlight": "50kW Campaign",
    "campaign.description": "Brand new FLA48100 lithium battery, multiple vouchers, and an all-inclusive trip to Guangzhou await you!",
    "campaign.button": "Learn More",

    // Solutions
    "solutions.title": "Solutions",
    "solutions.more": "More",
    "solutions.balcony": "Balcony",
    "solutions.residential": "Residential",
    "solutions.commercial": "Commercial",
    "solutions.industrial": "C&I ESS Cabinet",

    // Products
    "products.title": "Products",
    "products.featured": "Featured Products",
    "products.solarSolutions": "Solar Power Solutions",
    "products.viewDetails": "View Details",
    "products.search": "Search...",
    "products.selectCategory": "Select Category",
    "products.allCategories": "All Categories",
    "products.new": "New",
    "products.noProducts": "No products match your search",
    "products.requestQuote": "Request Quote",
    "products.inquiry": "Inquiry",
    "products.specifications": "Specifications",
    "products.power": "Power",
    "products.voltage": "Voltage",
    "products.type": "Type",
    "products.warranty": "Warranty",
    "products.years": "Years",
    "products.related": "Related Products",
    "products.backToProducts": "Back to Products",
    "products.notFound": "Product Not Found",
    "products.downloadCatalog": "Download Catalog",
    "products.downloadDatasheet": "Download Datasheet",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "We're here to help. Contact us and we'll respond as soon as possible",
    "contact.sendMessage": "Send us a message",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.info": "Contact Information",
    "contact.address": "Address",
    "contact.workHours": "Working Hours",

    // Footer
    "footer.tagline": "Al-Fahamah - Make Life Full of Hope",
    "footer.contactInfo": "Contact Information",
    "footer.headquarters": "Headquarters",
    "footer.phone": "Phone",
    "footer.email": "Email",
    "footer.complaints": "Complaints & Suggestions",
    "footer.solutions": "Solutions",
    "footer.learnMore": "Learn More About Us",
    "footer.moreInfo": "More Information",
    "footer.copyright": "All Rights Reserved",

    // Common
    "common.breadcrumb.home": "Home",
    "common.needHelp": "Need Help?",
    "common.contactNow": "Contact Us Now",
    "common.learnMore": "Learn More",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "ar" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
