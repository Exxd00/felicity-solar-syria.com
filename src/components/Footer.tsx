"use client";

import Link from "next/link";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { trackPhoneClick } from "@/lib/analytics";

const solutionLinks = [
  { nameAr: "نظام تجاري 50 كيلوواط", nameEn: "50kW Commercial System", href: "/solutions/commercial" },
  { nameAr: "نظام التخزين السكني", nameEn: "Residential Storage System", href: "/solutions/residential-ess" },
  { nameAr: "حلول ESS التجارية والصناعية", nameEn: "C&I ESS Solutions", href: "/solutions/commercial-industrial-ess" },
  { nameAr: "نظام التخزين التجاري", nameEn: "Commercial Storage System", href: "/solutions/commercial" },
  { nameAr: "نظام الشرفة ESS", nameEn: "Balcony ESS System", href: "/solutions/balcony-ess" },
];

const projectCases = [
  {
    id: 1,
    titleAr: "200 مجموعة نظام بطارية ليثيوم شمسية مثبتة في بانكوك",
    titleEn: "200 Sets of Solar Lithium Battery System Installed in Bangkok",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=150&h=100&fit=crop&q=40",
    href: "/products",
  },
  {
    id: 2,
    titleAr: "نظام طاقة شمسية 120 كيلو فولت أمبير في مالي",
    titleEn: "120kVA Solar Power System in Mali",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=150&h=100&fit=crop&q=40",
    href: "/products",
  },
  {
    id: 3,
    titleAr: "120 مجموعة نظام طاقة شمسية 45 كيلوواط في لبنان",
    titleEn: "120 Sets of 45kW Solar Power System in Lebanon",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=150&h=100&fit=crop&q=40",
    href: "/products",
  },
];

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#1a1410] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl italic" style={{ fontFamily: 'Georgia, serif' }}>F</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-lg font-light tracking-wide">
                <span className="text-orange-500 font-semibold">F</span>elicity
                <span className="text-orange-500 font-medium">solar</span>
                <sup className="text-xs">®</sup>
              </span>
              <span className="text-[10px] text-orange-400 font-medium">
                {language === "ar"
                  ? "الفرع الرئيسي - الفحامة - اجعل الحياة مليئة بالأمل"
                  : "Main Branch - Al-Fahamah - Make Life Full of Hope"}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              {language === "ar" ? "معلومات الاتصال" : "Contact Information"}
            </h3>

            <div className="space-y-3">
              <a
                href="https://maps.app.goo.gl/eviGxEpL1BnuAqAW8?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-orange-500 transition-colors"
              >
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-xs">{language === "ar" ? "المقر الرئيسي" : "Headquarters"}</span>
              </a>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <a href="tel:+963981117805" onClick={() => trackPhoneClick("Footer Store")} className="text-xs hover:text-orange-500 transition-colors">
                  {language === "ar" ? "المحل:" : "Store:"} +963 981 117 805
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <a href="tel:0980388164" onClick={() => trackPhoneClick("Footer Technical Support")} className="text-xs hover:text-orange-500 transition-colors">
                  {language === "ar" ? "الدعم الفني:" : "Technical Support:"} 0980388164
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <a href="tel:0112225650" onClick={() => trackPhoneClick("Footer Landline")} className="text-xs hover:text-orange-500 transition-colors">
                  {language === "ar" ? "الهاتف الأرضي:" : "Landline:"} 011-2225650
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/share/16guTBAiGz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/felicitysolar.sy?igsh=aGVhY2ZraDZ3Z3Zk&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              {language === "ar" ? "الحلول" : "Solutions"}
            </h3>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.nameAr}>
                  <Link
                    href={link.href}
                    className="text-xs hover:text-orange-400 transition-colors"
                  >
                    {language === "ar" ? link.nameAr : link.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Cases */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              {language === "ar" ? "تعرف علينا أكثر" : "Learn More About Us"}
            </h3>
            <div className="space-y-4">
              {projectCases.map((project) => (
                <Link key={project.id} href={project.href} className="flex gap-3 group">
                  <div className="w-20 h-14 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={language === "ar" ? project.titleAr : project.titleEn}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-white leading-tight mb-1 group-hover:text-orange-400 transition-colors">
                      {language === "ar" ? project.titleAr : project.titleEn}
                    </h4>
                    <span className="text-orange-500 text-xs group-hover:text-orange-400 transition-colors">
                      {language === "ar" ? "المزيد من المعلومات" : "More Information"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-xs text-gray-500">
            © Felicity Solar {language === "ar" ? "الفرع الرئيسي - الفحامة" : "Main Branch - Al-Fahamah"} {language === "ar" ? "جميع الحقوق محفوظة" : "All Rights Reserved"}
          </p>
        </div>
      </div>
    </footer>
  );
}
