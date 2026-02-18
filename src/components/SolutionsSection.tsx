"use client";

import Link from "next/link";
import { Mountain, Home, Sun, Gauge } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const solutions = [
  {
    id: 1,
    icon: Mountain,
    titleAr: "الشرفة",
    titleEn: "Balcony",
    href: "/solutions/balcony-ess",
  },
  {
    id: 2,
    icon: Home,
    titleAr: "السكني",
    titleEn: "Residential",
    href: "/solutions/residential-ess",
  },
  {
    id: 3,
    icon: Sun,
    titleAr: "التجاري",
    titleEn: "Commercial",
    href: "/solutions/commercial",
  },
  {
    id: 4,
    icon: Gauge,
    titleAr: "خزانة ESS التجارية والصناعية",
    titleEn: "C&I ESS Cabinet",
    href: "/solutions/commercial-industrial-ess",
  },
];

export default function SolutionsSection() {
  const { language, t } = useLanguage();

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#0d1d3a]">
        {/* Floating Product Images */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="flex gap-8 md:gap-16">
            <div className="w-32 md:w-48 h-48 md:h-72 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-2xl transform -rotate-3" />
            <div className="w-36 md:w-56 h-56 md:h-80 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg shadow-2xl" />
            <div className="w-32 md:w-48 h-48 md:h-72 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-2xl transform rotate-3" />
          </div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          {language === "ar" ? "الحلول" : "Solutions"}
        </h2>

        {/* Solution Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="group relative border border-white/20 rounded-lg p-4 md:p-6 bg-white/5 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:bg-white/10"
            >
              <div className="flex flex-col items-center text-center">
                <solution.icon className="w-8 h-8 md:w-10 md:h-10 text-white mb-3" />
                <h3 className="text-sm md:text-lg font-semibold text-white mb-3 min-h-[40px] md:min-h-[48px] flex items-center">
                  {language === "ar" ? solution.titleAr : solution.titleEn}
                </h3>
                <Link
                  href={solution.href}
                  className="px-4 py-1.5 md:px-6 md:py-2 border border-white/40 text-white text-xs md:text-sm rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  {language === "ar" ? "المزيد" : "More"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
