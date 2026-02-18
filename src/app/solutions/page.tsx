"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mountain, Home, Sun, Gauge } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function SolutionsPage() {
  const { language } = useLanguage();

  const solutions = [
    {
      id: 1,
      icon: Mountain,
      titleAr: "نظام الشرفة ESS",
      titleEn: "Balcony ESS System",
      descriptionAr: "حلول تخزين الطاقة المثالية للشرفات والمساحات الصغيرة.",
      descriptionEn: "Ideal energy storage solutions for balconies and small spaces.",
      href: "/solutions/balcony-ess",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop&q=30",
    },
    {
      id: 2,
      icon: Home,
      titleAr: "النظام السكني",
      titleEn: "Residential System",
      descriptionAr: "أنظمة تخزين طاقة شمسية متكاملة للمنازل.",
      descriptionEn: "Integrated solar energy storage systems for homes.",
      href: "/solutions/residential-ess",
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=300&h=200&fit=crop&q=30",
    },
    {
      id: 3,
      icon: Sun,
      titleAr: "النظام التجاري",
      titleEn: "Commercial System",
      descriptionAr: "حلول طاقة شمسية للشركات والمؤسسات التجارية.",
      descriptionEn: "Solar energy solutions for businesses and commercial enterprises.",
      href: "/solutions/commercial",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=300&h=200&fit=crop&q=30",
    },
    {
      id: 4,
      icon: Gauge,
      titleAr: "خزانة ESS التجارية والصناعية",
      titleEn: "Commercial & Industrial ESS Cabinet",
      descriptionAr: "أنظمة تخزين طاقة عالية السعة للمصانع.",
      descriptionEn: "High-capacity energy storage systems for factories.",
      href: "/solutions/commercial-industrial-ess",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=200&fit=crop&q=30",
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
              {language === "ar" ? "حلولنا المتكاملة" : "Our Integrated Solutions"}
            </h1>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              {language === "ar"
                ? "نقدم مجموعة شاملة من حلول الطاقة الشمسية وأنظمة تخزين الطاقة"
                : "We offer a comprehensive range of solar energy solutions and energy storage systems"}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-10 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                href={solution.href}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={language === "ar" ? solution.titleAr : solution.titleEn}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    quality={30}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <solution.icon className="w-5 h-5 text-orange-500" />
                    <h3 className="text-base md:text-lg font-bold text-white">
                      {language === "ar" ? solution.titleAr : solution.titleEn}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-xs">
                    {language === "ar" ? solution.descriptionAr : solution.descriptionEn}
                  </p>
                  <span className="inline-block mt-2 text-orange-500 text-xs font-medium group-hover:text-orange-400 transition-colors">
                    {language === "ar" ? "اكتشف المزيد ←" : "Learn More →"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            {language === "ar" ? "هل تحتاج إلى استشارة مخصصة؟" : "Need a Custom Consultation?"}
          </h2>
          <p className="text-white/90 text-sm mb-6 max-w-xl mx-auto">
            {language === "ar"
              ? "فريقنا من الخبراء جاهز لمساعدتك في اختيار الحل الأمثل"
              : "Our team of experts is ready to help you choose the optimal solution"}
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
