"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Zap, Shield, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function BalconyESSPage() {
  const { language } = useLanguage();

  const features = [
    {
      icon: Zap,
      titleAr: "سهولة التركيب",
      titleEn: "Easy Installation",
      descriptionAr: "تصميم مدمج يسهل تركيبه على الشرفة دون الحاجة لمساحة كبيرة",
      descriptionEn: "Compact design that is easy to install on the balcony without requiring large space",
    },
    {
      icon: Shield,
      titleAr: "آمن وموثوق",
      titleEn: "Safe and Reliable",
      descriptionAr: "أنظمة حماية متقدمة لضمان السلامة والأمان في الاستخدام المنزلي",
      descriptionEn: "Advanced protection systems to ensure safety and security in home use",
    },
    {
      icon: Leaf,
      titleAr: "صديق للبيئة",
      titleEn: "Eco-Friendly",
      descriptionAr: "توليد طاقة نظيفة ومستدامة تساهم في حماية البيئة",
      descriptionEn: "Generating clean and sustainable energy that contributes to environmental protection",
    },
  ];

  const specs = [
    { labelAr: "السعة", labelEn: "Capacity", value: "1-3 kW" },
    { labelAr: "نوع البطارية", labelEn: "Battery Type", value: "LiFePO4" },
    { labelAr: "عمر البطارية", labelEn: "Battery Life", valueAr: "10+ سنوات", valueEn: "10+ Years" },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=50')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-orange-500 font-medium mb-4">
              {language === "ar" ? "حلول الطاقة الشمسية" : "Solar Energy Solutions"}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {language === "ar" ? "نظام الشرفة ESS" : "Balcony ESS System"}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {language === "ar"
                ? "حل تخزين الطاقة المثالي للشقق والمساحات الصغيرة. وفر في فواتير الكهرباء واستمتع باستقلالية طاقوية"
                : "The ideal energy storage solution for apartments and small spaces. Save on electricity bills and enjoy energy independence"}
            </p>
            <a
              href="tel:+963981117805"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
            >
              {language === "ar" ? "احصل على عرض سعر" : "Get a Quote"}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {language === "ar" ? "مميزات النظام" : "System Features"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-b from-white/10 to-white/5 rounded-xl border border-white/10">
                <feature.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {language === "ar" ? feature.titleAr : feature.titleEn}
                </h3>
                <p className="text-gray-400">
                  {language === "ar" ? feature.descriptionAr : feature.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {language === "ar" ? "المواصفات الفنية" : "Technical Specifications"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-b from-white/10 to-white/5 rounded-lg border border-white/10">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <span className="text-gray-400">{language === "ar" ? spec.labelAr : spec.labelEn}:</span>
                    <span className="text-white font-semibold mr-2">
                      {spec.valueAr ? (language === "ar" ? spec.valueAr : spec.valueEn) : spec.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {language === "ar" ? "هل تريد معرفة المزيد؟" : "Want to Learn More?"}
          </h2>
          <p className="text-white/90 text-lg mb-8">
            {language === "ar" ? "تواصل معنا للحصول على استشارة مجانية" : "Contact us for a free consultation"}
          </p>
          <a href="tel:+963981117805" className="inline-block px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors">
            {language === "ar" ? "اتصل الآن:" : "Call Now:"} +963 981 117 805
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
