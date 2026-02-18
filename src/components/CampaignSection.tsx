"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

// Featured products to showcase
const featuredProducts = [
  {
    id: 1,
    name: "FLH48100UG2",
    categoryAr: "بطارية ليثيوم",
    categoryEn: "Lithium Battery",
    image: "https://ext.same-assets.com/3210097289/2146017158.png",
    slug: "flh48100ug2",
  },
  {
    id: 2,
    name: "IVEM3/5kW-LV",
    categoryAr: "محول هجين",
    categoryEn: "Hybrid Inverter",
    image: "https://ext.same-assets.com/3210097289/3584555656.png",
    slug: "ivem3-5kw-lv",
  },
  {
    id: 3,
    name: "AI 100-8048",
    categoryAr: "نظام الكل في واحد",
    categoryEn: "All-in-One System",
    image: "https://ext.same-assets.com/3210097289/3747720231.png",
    slug: "ai-100-8048",
  },
  {
    id: 4,
    name: "LPBF48300-II",
    categoryAr: "بطارية ليثيوم",
    categoryEn: "Lithium Battery",
    image: "https://ext.same-assets.com/3210097289/3207296283.png",
    slug: "lpbf48300-ii",
    isNew: true,
  },
];

export default function CampaignSection() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="py-10 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-orange-500 text-sm mb-1">
            {language === "ar" ? "اكتشف أحدث منتجاتنا" : "Discover Our Latest Products"}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {language === "ar" ? "منتجات" : "Featured"} <span className="text-orange-500">{language === "ar" ? "مميزة" : "Products"}</span>
          </h2>
          <p className="text-gray-400 text-xs max-w-xl mx-auto">
            {language === "ar"
              ? "أحدث حلول الطاقة الشمسية من فيليسيتي سولار"
              : "Latest solar energy solutions from Felicity Solar"}
          </p>
        </div>

        {/* Products Grid - 2x2 on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
            >
              {product.isNew && (
                <span className="absolute top-2 right-2 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full z-10">
                  {language === "ar" ? "جديد" : "New"}
                </span>
              )}
              <div className="p-3 md:p-4">
                <div className="bg-white rounded-lg p-2 md:p-3 mb-2 md:mb-3 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={120}
                    className="w-full h-24 md:h-32 object-contain"
                  />
                </div>
                <p className="text-orange-400 text-[10px] md:text-xs mb-0.5">
                  {language === "ar" ? product.categoryAr : product.categoryEn}
                </p>
                <h3 className="text-white font-semibold text-sm md:text-base mb-1">{product.name}</h3>
                <span className="text-gray-400 text-[10px] md:text-xs flex items-center gap-1 group-hover:text-orange-400 transition-colors">
                  {language === "ar" ? "عرض التفاصيل" : "View Details"}
                  <Arrow className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/products">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full px-6 py-4 text-sm"
            >
              {language === "ar" ? "عرض جميع المنتجات" : "View All Products"}
              <Arrow className="w-4 h-4 mx-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
