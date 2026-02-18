"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MessageCircle, Clock } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function TechnicalSupportPage() {
  const { language } = useLanguage();

  const supportChannels = [
    {
      icon: Phone,
      titleAr: "المحل",
      titleEn: "Store",
      descriptionAr: "اتصل بالمحل مباشرة",
      descriptionEn: "Call the store directly",
      contact: "+963 981 117 805"
    },
    {
      icon: Phone,
      titleAr: "الدعم الفني",
      titleEn: "Technical Support",
      descriptionAr: "اتصل بنا للحصول على دعم فوري",
      descriptionEn: "Call us for immediate support",
      contact: "0980388164"
    },
    {
      icon: Phone,
      titleAr: "الهاتف الأرضي",
      titleEn: "Landline",
      descriptionAr: "اتصل على الخط الأرضي",
      descriptionEn: "Call on landline",
      contact: "011-2225650"
    },
    {
      icon: MessageCircle,
      titleAr: "واتساب",
      titleEn: "WhatsApp",
      descriptionAr: "تواصل معنا عبر واتساب للدعم السريع",
      descriptionEn: "Contact us via WhatsApp for quick support",
      contact: "+963 981 117 805"
    },
    {
      icon: Clock,
      titleAr: "ساعات العمل",
      titleEn: "Working Hours",
      descriptionAr: "نحن هنا لمساعدتك",
      descriptionEn: "We are here to help you",
      contactAr: "الأحد - الخميس: 9 صباحاً - 6 مساءً",
      contactEn: "Sunday - Thursday: 9 AM - 6 PM"
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0a1628] to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === "ar" ? "الدعم الفني" : "Technical Support"}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {language === "ar"
              ? "فريق دعم فني متخصص متاح على مدار الساعة لمساعدتك"
              : "Specialized technical support team available around the clock to help you"}
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-b from-white/10 to-white/5 rounded-xl border border-white/10">
                <channel.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {language === "ar" ? channel.titleAr : channel.titleEn}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {language === "ar" ? channel.descriptionAr : channel.descriptionEn}
                </p>
                <p className="text-orange-500 font-medium">
                  {channel.contactAr ? (language === "ar" ? channel.contactAr : channel.contactEn) : channel.contact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {language === "ar" ? "هل تحتاج إلى مساعدة؟" : "Need Help?"}
          </h2>
          <a href="tel:+963981117805" className="inline-block px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors">
            {language === "ar" ? "اتصل الآن:" : "Call Now:"} +963 981 117 805
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
