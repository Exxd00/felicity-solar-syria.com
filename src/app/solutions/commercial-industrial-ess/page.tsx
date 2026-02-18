"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Factory, Gauge, Battery, Settings } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function CommercialIndustrialESSPage() {
  const { language } = useLanguage();

  const features = [
    { icon: Factory, titleAr: "للمنشآت الصناعية", titleEn: "For Industrial Facilities", descriptionAr: "مصمم للمصانع والمنشآت الصناعية الكبيرة", descriptionEn: "Designed for factories and large industrial facilities" },
    { icon: Gauge, titleAr: "سعة عالية جداً", titleEn: "Very High Capacity", descriptionAr: "أنظمة تخزين بسعات تصل إلى الميغاواط", descriptionEn: "Storage systems with capacities up to megawatts" },
    { icon: Battery, titleAr: "تخزين طويل المدى", titleEn: "Long-term Storage", descriptionAr: "بطاريات عالية الأداء لتخزين الطاقة لفترات طويلة", descriptionEn: "High-performance batteries for long-term energy storage" },
    { icon: Settings, titleAr: "تخصيص كامل", titleEn: "Full Customization", descriptionAr: "حلول مخصصة حسب احتياجات كل منشأة", descriptionEn: "Customized solutions according to each facility's needs" },
  ];

  const specs = [
    { labelAr: "السعة", labelEn: "Capacity", value: "100 kW - 1 MW" },
    { labelAr: "سعة التخزين", labelEn: "Storage Capacity", value: "200 - 2000 kWh" },
    { labelAr: "عمر النظام", labelEn: "System Life", valueAr: "25+ سنة", valueEn: "25+ Years" },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=50')" }}>
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-orange-500 font-medium mb-4">{language === "ar" ? "حلول الطاقة الشمسية" : "Solar Energy Solutions"}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{language === "ar" ? "خزانة ESS التجارية والصناعية" : "Commercial & Industrial ESS Cabinet"}</h1>
            <p className="text-xl text-gray-300 mb-8">{language === "ar" ? "أنظمة تخزين طاقة عالية السعة للمصانع والمنشآت الصناعية" : "High-capacity energy storage systems for factories and industrial facilities"}</p>
            <a href="tel:+963981117805" className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors">{language === "ar" ? "احصل على عرض سعر" : "Get a Quote"}</a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{language === "ar" ? "مميزات النظام" : "System Features"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-b from-white/10 to-white/5 rounded-xl border border-white/10">
                <feature.icon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{language === "ar" ? feature.titleAr : feature.titleEn}</h3>
                <p className="text-gray-400 text-sm">{language === "ar" ? feature.descriptionAr : feature.descriptionEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{language === "ar" ? "المواصفات الفنية" : "Technical Specifications"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-b from-white/10 to-white/5 rounded-lg border border-white/10">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <div><span className="text-gray-400">{language === "ar" ? spec.labelAr : spec.labelEn}:</span><span className="text-white font-semibold mr-2">{spec.valueAr ? (language === "ar" ? spec.valueAr : spec.valueEn) : spec.value}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{language === "ar" ? "حلول طاقة صناعية متكاملة" : "Integrated Industrial Energy Solutions"}</h2>
          <a href="tel:+963981117805" className="inline-block px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors">{language === "ar" ? "اتصل الآن:" : "Call Now:"} +963 981 117 805</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
