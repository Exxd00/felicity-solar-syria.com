"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function HistoryPage() {
  const { language } = useLanguage();

  const milestones = [
    { year: "2008", titleAr: "التأسيس", titleEn: "Foundation", descriptionAr: "تأسيس شركة Felicity Solar في شنتشن، الصين", descriptionEn: "Felicity Solar founded in Shenzhen, China" },
    { year: "2010", titleAr: "التوسع الأول", titleEn: "First Expansion", descriptionAr: "بدء التصدير إلى أسواق جنوب شرق آسيا", descriptionEn: "Started exporting to Southeast Asian markets" },
    { year: "2012", titleAr: "الشرق الأوسط", titleEn: "Middle East", descriptionAr: "دخول أسواق الشرق الأوسط وأفريقيا", descriptionEn: "Entered Middle East and African markets" },
    { year: "2014", titleAr: "مليون وحدة", titleEn: "One Million Units", descriptionAr: "تحقيق إنجاز بيع مليون وحدة", descriptionEn: "Achieved milestone of selling one million units" },
    { year: "2016", titleAr: "سلسلة IVEM", titleEn: "IVEM Series", descriptionAr: "إطلاق سلسلة المحولات الهجينة IVEM", descriptionEn: "Launched IVEM hybrid inverter series" },
    { year: "2018", titleAr: "بطاريات الليثيوم", titleEn: "Lithium Batteries", descriptionAr: "إطلاق خط إنتاج بطاريات الليثيوم", descriptionEn: "Launched lithium battery production line" },
    { year: "2020", titleAr: "التوسع العالمي", titleEn: "Global Expansion", descriptionAr: "الوصول إلى 50 دولة حول العالم", descriptionEn: "Reached 50 countries worldwide" },
    { year: "2023", titleAr: "الفهامة", titleEn: "Al-Fahamah", descriptionAr: "شراكة استراتيجية مع الفرع الرئيسي - الفحامة للطاقة الشمسية", descriptionEn: "Strategic partnership with Main Branch - Al-Fahamah Solar" },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0a1628] to-black">
        <div className="container mx-auto px-4 text-center">
          <Clock className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{language === "ar" ? "تاريخنا" : "Our History"}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">{language === "ar" ? "رحلة 15 عاماً من الابتكار والتميز في مجال الطاقة الشمسية" : "A 15-year journey of innovation and excellence in solar energy"}</p>
        </div>
      </section>
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto relative ${language === "ar" ? "border-r-2 pr-8" : "border-l-2 pl-8"} border-orange-500/50`}>
            {milestones.map((m, index) => (
              <div key={index} className="mb-12 relative">
                <div className={`absolute ${language === "ar" ? "-right-[41px]" : "-left-[41px]"} w-4 h-4 bg-orange-500 rounded-full`} />
                <div className="text-orange-500 font-bold text-2xl mb-2">{m.year}</div>
                <h3 className="text-xl font-bold text-white mb-2">{language === "ar" ? m.titleAr : m.titleEn}</h3>
                <p className="text-gray-400">{language === "ar" ? m.descriptionAr : m.descriptionEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
