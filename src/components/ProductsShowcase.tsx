"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

const products = [
  {
    id: 1,
    name: "IVEM8048-II",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&h=200&fit=crop&q=30",
    categoryAr: "محول هجين",
    categoryEn: "Hybrid Inverter",
    slug: "ivem8048-ii",
  },
  {
    id: 2,
    name: "FLA48300",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=200&h=200&fit=crop&q=30",
    categoryAr: "بطارية ليثيوم",
    categoryEn: "Lithium Battery",
    slug: "fla48300",
  },
  {
    id: 3,
    name: "LPBF48300-II",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=200&h=200&fit=crop&q=30",
    categoryAr: "بطارية ليثيوم",
    categoryEn: "Lithium Battery",
    slug: "lpbf48300-ii",
  },
];

export default function ProductsShowcase() {
  const { language } = useLanguage();

  return (
    <section className="relative py-0 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=30')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-10 md:py-12">
        {/* Section Header */}
        <div className="text-center mb-6">
          <p className="text-xs text-gray-300 mb-1 tracking-wider">
            {language === "ar" ? "المنتجات المميزة" : "Featured Products"}
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-white">
            {language === "ar" ? "حلول الطاقة الشمسية" : "Solar Power Solutions"}
          </h2>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group relative bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-md rounded-lg p-2 md:p-3 border border-white/20 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-square relative mb-2 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full rounded-lg group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  quality={60}
                />
              </div>
              <div className="text-center">
                <p className="text-[9px] md:text-xs text-gray-300 mb-0.5">
                  {language === "ar" ? product.categoryAr : product.categoryEn}
                </p>
                <h3 className="text-xs md:text-sm font-semibold text-white">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </section>
  );
}
