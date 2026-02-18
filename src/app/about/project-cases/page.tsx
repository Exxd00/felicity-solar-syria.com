"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MapPin, Zap } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function ProjectCasesPage() {
  const { language } = useLanguage();

  const projects = [
    {
      titleAr: "200 مجموعة نظام بطارية ليثيوم في بانكوك",
      titleEn: "200 Lithium Battery Systems in Bangkok",
      locationAr: "تايلاند",
      locationEn: "Thailand",
      capacity: "1.5 MW",
      descriptionAr: "مشروع تركيب 200 نظام طاقة شمسية سكني في ضواحي بانكوك",
      descriptionEn: "Installation project of 200 residential solar systems in Bangkok suburbs",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&q=60"
    },
    {
      titleAr: "نظام طاقة شمسية 120 كيلو فولت أمبير في مالي",
      titleEn: "120 kVA Solar Power System in Mali",
      locationAr: "مالي",
      locationEn: "Mali",
      capacity: "120 kW",
      descriptionAr: "نظام طاقة شمسية متكامل لمصنع نسيج في باماكو",
      descriptionEn: "Integrated solar power system for a textile factory in Bamako",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop&q=60"
    },
    {
      titleAr: "120 مجموعة نظام 45 كيلوواط في لبنان",
      titleEn: "120 Sets of 45kW Systems in Lebanon",
      locationAr: "لبنان",
      locationEn: "Lebanon",
      capacity: "5.4 MW",
      descriptionAr: "مشروع طاقة شمسية للمباني السكنية في بيروت",
      descriptionEn: "Solar power project for residential buildings in Beirut",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop&q=60"
    },
    {
      titleAr: "محطة طاقة شمسية في نيجيريا",
      titleEn: "Solar Power Station in Nigeria",
      locationAr: "نيجيريا",
      locationEn: "Nigeria",
      capacity: "500 kW",
      descriptionAr: "محطة طاقة شمسية لتغذية قرية ريفية بالكهرباء",
      descriptionEn: "Solar power station to supply electricity to a rural village",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=300&fit=crop&q=60"
    },
    {
      titleAr: "نظام تخزين طاقة تجاري في الإمارات",
      titleEn: "Commercial Energy Storage System in UAE",
      locationAr: "الإمارات",
      locationEn: "UAE",
      capacity: "250 kW",
      descriptionAr: "نظام تخزين طاقة لمجمع تجاري في دبي",
      descriptionEn: "Energy storage system for a commercial complex in Dubai",
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=400&h=300&fit=crop&q=60"
    },
    {
      titleAr: "مشروع طاقة شمسية صناعي في مصر",
      titleEn: "Industrial Solar Power Project in Egypt",
      locationAr: "مصر",
      locationEn: "Egypt",
      capacity: "1 MW",
      descriptionAr: "نظام طاقة شمسية لمصنع في المنطقة الصناعية بالقاهرة",
      descriptionEn: "Solar power system for a factory in Cairo's industrial area",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&q=60"
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0a1628] to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{language === "ar" ? "حالات المشاريع" : "Project Cases"}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">{language === "ar" ? "مشاريع ناجحة حول العالم تثبت جودة منتجاتنا وخدماتنا" : "Successful projects around the world that prove the quality of our products and services"}</p>
        </div>
      </section>
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-b from-white/10 to-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={language === "ar" ? project.titleAr : project.titleEn}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    quality={60}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{language === "ar" ? project.titleAr : project.titleEn}</h3>
                  <p className="text-gray-400 text-sm mb-4">{language === "ar" ? project.descriptionAr : project.descriptionEn}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-gray-400">
                      <MapPin className="w-4 h-4 text-orange-500" />{language === "ar" ? project.locationAr : project.locationEn}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <Zap className="w-4 h-4 text-orange-500" />{project.capacity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{language === "ar" ? "هل لديك مشروع؟" : "Have a Project?"}</h2>
          <a href="tel:+963981117805" className="inline-block px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors">{language === "ar" ? "اتصل الآن:" : "Call Now:"} +963 981 117 805</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
