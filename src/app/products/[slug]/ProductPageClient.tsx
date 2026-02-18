"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Check, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/language-context";

interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  categoryId: string;
  image: string;
  power: string;
  voltage: string;
  type: string;
  isNew?: boolean;
}

interface ProductPageClientProps {
  product: Product;
  related: Product[];
}

export default function ProductPageClient({ product, related }: ProductPageClientProps) {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-4 bg-gray-50">
        <div className="container mx-auto px-4 flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-orange-500">
            {language === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <ChevronLeft className="w-4 h-4 text-gray-400" />
          <Link href="/products" className="text-gray-600 hover:text-orange-500">
            {language === "ar" ? "المنتجات" : "Products"}
          </Link>
          <ChevronLeft className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900">{product.name}</span>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Product Image */}
            <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={250}
                className="max-h-64 object-contain"
                loading="eager"
                quality={75}
              />
            </div>

            {/* Product Info */}
            <div>
              {product.isNew && (
                <span className="inline-block bg-orange-500 text-white text-sm px-3 py-1 rounded-full mb-4">
                  {language === "ar" ? "جديد" : "New"}
                </span>
              )}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-orange-500 font-medium mb-6">{product.category}</p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {language === "ar" ? "المواصفات" : "Specifications"}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-orange-500" />
                    <span>{language === "ar" ? "القدرة:" : "Power:"} <strong>{product.power}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-orange-500" />
                    <span>{language === "ar" ? "الجهد:" : "Voltage:"} <strong>{product.voltage}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-orange-500" />
                    <span>{language === "ar" ? "النوع:" : "Type:"} <strong>{product.type}</strong></span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="tel:+963981117805" className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm">
                  <Phone className="w-4 h-4" />
                  {language === "ar" ? "اتصل الآن" : "Call Now"}
                </a>
                <a href="https://wa.me/963981117805" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm">
                  {language === "ar" ? "واتساب" : "WhatsApp"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {language === "ar" ? "منتجات مشابهة" : "Related Products"}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="bg-white border rounded-xl p-4 hover:shadow-lg transition-all">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={200}
                    height={96}
                    className="w-full h-24 object-contain mb-3"
                    loading="lazy"
                    quality={70}
                  />
                  <h3 className="font-semibold text-gray-900 text-sm">{p.name}</h3>
                  <p className="text-orange-500 text-xs">{p.category}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
