"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function CertificationsPage() {
  const { language } = useLanguage();

  const certifications = [
    { name: "ISO 9001:2015", descriptionAr: "نظام إدارة الجودة", descriptionEn: "Quality Management System", categoryAr: "الجودة", categoryEn: "Quality" },
    { name: "ISO 14001:2015", descriptionAr: "نظام الإدارة البيئية", descriptionEn: "Environmental Management System", categoryAr: "البيئة", categoryEn: "Environment" },
    { name: "CE Certification", descriptionAr: "علامة المطابقة الأوروبية", descriptionEn: "European Conformity Mark", categoryAr: "السلامة", categoryEn: "Safety" },
    { name: "TUV Certification", descriptionAr: "شهادة الجودة الألمانية", descriptionEn: "German Quality Certificate", categoryAr: "الجودة", categoryEn: "Quality" },
    { name: "IEC 62109", descriptionAr: "معيار سلامة المحولات", descriptionEn: "Inverter Safety Standard", categoryAr: "السلامة", categoryEn: "Safety" },
    { name: "UN38.3", descriptionAr: "شهادة نقل البطاريات", descriptionEn: "Battery Transport Certificate", categoryAr: "النقل", categoryEn: "Transport" },
    { name: "UL Certification", descriptionAr: "معايير السلامة الأمريكية", descriptionEn: "US Safety Standards", categoryAr: "السلامة", categoryEn: "Safety" },
    { name: "RoHS", descriptionAr: "خالي من المواد الخطرة", descriptionEn: "Free of Hazardous Substances", categoryAr: "البيئة", categoryEn: "Environment" },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0a1628] to-black">
        <div className="container mx-auto px-4 text-center">
          <Award className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{language === "ar" ? "الشهادات والاعتمادات" : "Certifications & Accreditations"}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">{language === "ar" ? "منتجاتنا معتمدة من أهم الهيئات الدولية" : "Our products are certified by the most important international bodies"}</p>
        </div>
      </section>
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-6 border border-white/10 text-center">
                <CheckCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full mb-3">{language === "ar" ? cert.categoryAr : cert.categoryEn}</span>
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm">{language === "ar" ? cert.descriptionAr : cert.descriptionEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
