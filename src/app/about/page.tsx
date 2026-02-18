"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Globe, Users, Target, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function AboutPage() {
  const { language } = useLanguage();

  const stats = [
    { number: "15+", labelAr: "سنة من الخبرة", labelEn: "Years of Experience" },
    { number: "50+", labelAr: "دولة حول العالم", labelEn: "Countries Worldwide" },
    { number: "1M+", labelAr: "نظام مثبت", labelEn: "Systems Installed" },
    { number: "500+", labelAr: "شريك موثوق", labelEn: "Trusted Partners" },
  ];

  const values = [
    { icon: Target, titleAr: "الابتكار", titleEn: "Innovation", descriptionAr: "نسعى دائماً لتطوير حلول مبتكرة", descriptionEn: "We always strive to develop innovative solutions" },
    { icon: Award, titleAr: "الجودة", titleEn: "Quality", descriptionAr: "نلتزم بأعلى معايير الجودة", descriptionEn: "We adhere to the highest quality standards" },
    { icon: Users, titleAr: "خدمة العملاء", titleEn: "Customer Service", descriptionAr: "رضا العملاء هو أولويتنا الأولى", descriptionEn: "Customer satisfaction is our top priority" },
    { icon: Globe, titleAr: "الاستدامة", titleEn: "Sustainability", descriptionAr: "نؤمن بأهمية الطاقة النظيفة", descriptionEn: "We believe in the importance of clean energy" },
  ];

  const milestones = [
    { year: "2008", eventAr: "تأسيس شركة Felicity Solar", eventEn: "Felicity Solar Founded" },
    { year: "2012", eventAr: "التوسع إلى أسواق الشرق الأوسط", eventEn: "Expansion to Middle East Markets" },
    { year: "2018", eventAr: "مليون نظام مثبت عالمياً", eventEn: "One Million Systems Installed Globally" },
    { year: "2023", eventAr: "افتتاح الفرع الرئيسي - الفحامة", eventEn: "Main Branch - Al-Fahamah Opened" },
  ];

  const certifications = ["ISO 9001:2015", "ISO 14001:2015", "CE Certification", "TUV Certification"];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="relative pt-24 pb-10 bg-gradient-to-b from-[#0a1628] to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {language === "ar" ? "عن Felicity Solar الفرع الرئيسي - الفحامة" : "About Felicity Solar Main Branch - Al-Fahamah"}
            </h1>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              {language === "ar" ? "رائدون في مجال حلول الطاقة الشمسية منذ أكثر من 15 عاماً" : "Leaders in solar energy solutions for over 15 years"}
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">{stat.number}</div>
                <div className="text-gray-400 text-xs md:text-sm">{language === "ar" ? stat.labelAr : stat.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">{language === "ar" ? "قصتنا" : "Our Story"}</h2>
            <div className="text-gray-300 text-sm space-y-4">
              <p>{language === "ar" ? "تأسست Felicity Solar في عام 2008 برؤية واضحة: جعل الطاقة النظيفة متاحة للجميع. بدأنا رحلتنا في الصين، ومنذ ذلك الحين توسعنا لنصبح واحدة من الشركات الرائدة عالمياً." : "Felicity Solar was founded in 2008 with a clear vision: making clean energy accessible to everyone. We started our journey in China and have since expanded to become one of the leading global companies."}</p>
              <p>{language === "ar" ? "اليوم، نفتخر بخدمة عملائنا في أكثر من 50 دولة حول العالم، مع التركيز على منطقة الشرق الأوسط وأفريقيا." : "Today, we are proud to serve customers in over 50 countries worldwide, with a focus on the Middle East and Africa region."}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">{language === "ar" ? "قيمنا" : "Our Values"}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center p-4 bg-gradient-to-b from-white/10 to-white/5 rounded-xl border border-white/10">
                <value.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="text-sm md:text-base font-bold text-white mb-2">{language === "ar" ? value.titleAr : value.titleEn}</h3>
                <p className="text-gray-400 text-xs">{language === "ar" ? value.descriptionAr : value.descriptionEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">{language === "ar" ? "مسيرتنا" : "Our Journey"}</h2>
          <div className="max-w-2xl mx-auto">
            <div className={`relative ${language === "ar" ? "border-r-2 pr-6" : "border-l-2 pl-6"} border-orange-500/50`}>
              {milestones.map((milestone, index) => (
                <div key={index} className="mb-6 relative">
                  <div className={`absolute ${language === "ar" ? "-right-[33px]" : "-left-[33px]"} w-3 h-3 bg-orange-500 rounded-full`} />
                  <div className="text-orange-500 font-bold text-base mb-1">{milestone.year}</div>
                  <div className="text-white text-sm">{language === "ar" ? milestone.eventAr : milestone.eventEn}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">{language === "ar" ? "الشهادات والاعتمادات" : "Certifications & Accreditations"}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span className="text-white text-xs font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{language === "ar" ? "انضم إلى عائلة Felicity Solar" : "Join the Felicity Solar Family"}</h2>
          <p className="text-white/90 text-sm mb-6 max-w-xl mx-auto">{language === "ar" ? "اكتشف كيف يمكننا مساعدتك في الانتقال إلى الطاقة النظيفة" : "Discover how we can help you transition to clean energy"}</p>
          <a href="tel:+963981117805" className="inline-block px-6 py-3 bg-white text-orange-600 font-semibold rounded-full text-sm hover:bg-gray-100 transition-colors">{language === "ar" ? "اتصل الآن:" : "Call Now:"} +963 981 117 805</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
