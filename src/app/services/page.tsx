"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Headphones, Wrench, Clock, Users } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function ServicesPage() {
  const { language } = useLanguage();

  const services = [
    {
      id: 1,
      icon: Headphones,
      titleAr: "الدعم الفني",
      titleEn: "Technical Support",
      descriptionAr: "فريق دعم فني متخصص متاح لمساعدتك",
      descriptionEn: "Specialized technical support team available to help you",
      href: "/services/technical-support",
      featuresAr: ["دعم عبر الهاتف", "دعم عبر واتساب", "زيارات ميدانية"],
      featuresEn: ["Phone Support", "WhatsApp Support", "Field Visits"],
    },
    {
      id: 2,
      icon: Wrench,
      titleAr: "التركيب والصيانة",
      titleEn: "Installation & Maintenance",
      descriptionAr: "خدمات تركيب وصيانة احترافية",
      descriptionEn: "Professional installation and maintenance services",
      href: "/services/technical-support",
      featuresAr: ["تركيب احترافي", "صيانة وقائية", "فحص دوري"],
      featuresEn: ["Professional Installation", "Preventive Maintenance", "Periodic Inspection"],
    },
    {
      id: 3,
      icon: Clock,
      titleAr: "خدمة ما بعد البيع",
      titleEn: "After-Sales Service",
      descriptionAr: "خدمة ما بعد البيع لضمان رضاك",
      descriptionEn: "After-sales service to ensure your satisfaction",
      href: "/services/technical-support",
      featuresAr: ["متابعة دورية", "استشارات مجانية", "تقارير الأداء"],
      featuresEn: ["Regular Follow-up", "Free Consultations", "Performance Reports"],
    },
    {
      id: 4,
      icon: Users,
      titleAr: "الاستشارات",
      titleEn: "Consultations",
      descriptionAr: "استشارات لاختيار النظام المناسب",
      descriptionEn: "Consultations to choose the right system",
      href: "/services/technical-support",
      featuresAr: ["دراسة الموقع", "تحليل الاحتياجات", "تصميم النظام"],
      featuresEn: ["Site Study", "Needs Analysis", "System Design"],
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-10 bg-gradient-to-b from-[#0a1628] to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "خدماتنا" : "Our Services"}
            </h1>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              {language === "ar"
                ? "نقدم مجموعة شاملة من الخدمات لضمان تجربة مثالية"
                : "We offer a comprehensive range of services to ensure an ideal experience"}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-5 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
              >
                <service.icon className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-base md:text-lg font-bold text-white mb-2">
                  {language === "ar" ? service.titleAr : service.titleEn}
                </h3>
                <p className="text-gray-400 text-xs mb-4">
                  {language === "ar" ? service.descriptionAr : service.descriptionEn}
                </p>
                <ul className="space-y-1.5 mb-4">
                  {(language === "ar" ? service.featuresAr : service.featuresEn).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300 text-xs">
                      <span className="w-1 h-1 bg-orange-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-block text-orange-500 text-xs font-medium hover:text-orange-400 transition-colors"
                >
                  {language === "ar" ? "المزيد ←" : "More →"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-10 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            {language === "ar" ? "هل تحتاج إلى مساعدة؟" : "Need Help?"}
          </h2>
          <p className="text-white/90 text-sm mb-6 max-w-xl mx-auto">
            {language === "ar"
              ? "فريقنا جاهز لمساعدتك في أي وقت"
              : "Our team is ready to help you anytime"}
          </p>
          <a
            href="tel:+963981117805"
            className="inline-block px-6 py-3 bg-white text-orange-600 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            {language === "ar" ? "اتصل الآن:" : "Call Now:"} +963 981 117 805
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
