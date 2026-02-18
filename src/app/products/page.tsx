"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Zap,
  RefreshCw,
  Cpu,
  Battery,
  Box,
  Database,
  Settings,
  Server,
  Layers,
  Monitor,
  Sun,
  Lightbulb
} from "lucide-react";

// Product Categories with Lucide icons
const categories = [
  {
    id: "off-grid",
    name: "محول خارج الشبكة",
    icon: Zap,
  },
  {
    id: "hybrid",
    name: "محول هجين",
    icon: RefreshCw,
  },
  {
    id: "microinverter",
    name: "محول صغير",
    icon: Cpu,
  },
  {
    id: "lithium",
    name: "بطارية ليثيوم",
    icon: Battery,
  },
  {
    id: "all-in-one",
    name: "نظام الكل في واحد ESS",
    icon: Box,
  },
  {
    id: "gel",
    name: "بطارية جل",
    icon: Database,
  },
  {
    id: "components",
    name: "المكونات الرئيسية",
    icon: Settings,
  },
  {
    id: "cabinet",
    name: "خزانة ESS",
    icon: Server,
  },
  {
    id: "modular",
    name: "ESS موديولار",
    icon: Layers,
  },
  {
    id: "monitoring",
    name: "نظام المراقبة",
    icon: Monitor,
  },
  {
    id: "street-light",
    name: "إنارة الشوارع الشمسية",
    icon: Sun,
  },
  {
    id: "spotlight",
    name: "كشاف شمسي",
    icon: Lightbulb,
  },
];

// All Products
const products = [
  // Solar Charge Controllers
  { id: 1, name: "SCCM8048-P", category: "components", image: "https://ext.same-assets.com/3210097289/2503681057.png" },
  { id: 2, name: "SCCM8048-II", category: "components", image: "https://ext.same-assets.com/3210097289/312731643.png" },
  { id: 3, name: "SCCM6048-II", category: "components", image: "https://ext.same-assets.com/3210097289/2493327091.png" },
  { id: 4, name: "SCCM4548-II", category: "components", image: "https://ext.same-assets.com/3210097289/3836183996.png" },
  { id: 5, name: "SCCM4524-II", category: "components", image: "https://ext.same-assets.com/3210097289/3836183996.png" },
  { id: 6, name: "SCCM3024-II", category: "components", image: "https://ext.same-assets.com/3210097289/1370406890.png" },
  { id: 7, name: "SCCM2024-II", category: "components", image: "https://ext.same-assets.com/3210097289/917269382.png" },
  { id: 8, name: "SCCM12048-II", category: "components", image: "https://ext.same-assets.com/3210097289/2213530337.png" },
  { id: 9, name: "SCCM10048-II", category: "components", image: "https://ext.same-assets.com/3210097289/2213530337.png" },

  // Off-Grid Inverters
  { id: 10, name: "IVPS7548", category: "off-grid", image: "https://ext.same-assets.com/3210097289/1232904177.png" },
  { id: 11, name: "IVPS10048", category: "off-grid", image: "https://ext.same-assets.com/3210097289/1232904177.png" },
  { id: 12, name: "IVPS5048", category: "off-grid", image: "https://ext.same-assets.com/3210097289/1232904177.png" },
  { id: 13, name: "IVPS3524", category: "off-grid", image: "https://ext.same-assets.com/3210097289/3456858707.png" },
  { id: 14, name: "IVPS2524", category: "off-grid", image: "https://ext.same-assets.com/3210097289/3456858707.png" },
  { id: 15, name: "IVPS2512", category: "off-grid", image: "https://ext.same-assets.com/3210097289/3456858707.png" },
  { id: 16, name: "IVPM7548", category: "off-grid", image: "https://ext.same-assets.com/3210097289/3854667919.png" },

  // Hybrid Inverters
  { id: 17, name: "IVEM3/5kW-LV", category: "hybrid", image: "https://ext.same-assets.com/3210097289/3584555656.png" },
  { id: 18, name: "IVCM1012-LV", category: "hybrid", image: "https://ext.same-assets.com/3210097289/589032110.png" },

  // Grid-Tied Inverters
  { id: 19, name: "IVGM50KHP3G2", category: "hybrid", image: "https://ext.same-assets.com/3210097289/2408210487.png", isNew: true },
  { id: 20, name: "IVGM8KLP2G1", category: "hybrid", image: "https://ext.same-assets.com/3210097289/1356917538.png" },
  { id: 21, name: "IVGM5KLP1G1", category: "hybrid", image: "https://ext.same-assets.com/3210097289/4266408636.png" },
  { id: 22, name: "IVGM50KHP3G1", category: "hybrid", image: "https://ext.same-assets.com/3210097289/1644068732.png" },

  // Lithium Batteries
  { id: 23, name: "FLH-E60", category: "lithium", image: "https://ext.same-assets.com/3210097289/3262095844.png", isNew: true },
  { id: 24, name: "FLH48100UG2", category: "lithium", image: "https://ext.same-assets.com/3210097289/2146017158.png" },
  { id: 25, name: "FLH48100UG1", category: "lithium", image: "https://ext.same-assets.com/3210097289/2308725072.png" },
  { id: 26, name: "FL96050SG1", category: "lithium", image: "https://ext.same-assets.com/3210097289/125658656.png" },
  { id: 27, name: "LPBF48350", category: "lithium", image: "https://ext.same-assets.com/3210097289/1099946930.png" },
  { id: 28, name: "LPBF48300-II", category: "lithium", image: "https://ext.same-assets.com/3210097289/3207296283.png" },
  { id: 29, name: "LPBF48300", category: "lithium", image: "https://ext.same-assets.com/3210097289/1888944206.png" },
  { id: 30, name: "LPBF48250", category: "lithium", image: "https://ext.same-assets.com/3210097289/2994057073.png" },
  { id: 31, name: "LPBF48200-H", category: "lithium", image: "https://ext.same-assets.com/3210097289/4278035210.png" },
  { id: 32, name: "LPBF48150-P", category: "lithium", image: "https://ext.same-assets.com/3210097289/464422436.png" },

  // All-in-One ESS
  { id: 33, name: "AI 100-8048", category: "all-in-one", image: "https://ext.same-assets.com/3210097289/3747720231.png" },
  { id: 34, name: "AI100-5048", category: "all-in-one", image: "https://ext.same-assets.com/3210097289/3577605889.png" },

  // Gel Batteries
  { id: 35, name: "FL-OPZV-2500AH 2V", category: "gel", image: "https://ext.same-assets.com/3210097289/3766027305.png" },
  { id: 36, name: "FL-OPZV-1000AH 2V", category: "gel", image: "https://ext.same-assets.com/3210097289/3766027305.png" },
  { id: 37, name: "FL-OPZV-500AH 2V", category: "gel", image: "https://ext.same-assets.com/3210097289/3766027305.png" },
  { id: 38, name: "FL-OPZV-200AH 2V", category: "gel", image: "https://ext.same-assets.com/3210097289/3766027305.png" },
  { id: 39, name: "G12V200AH", category: "gel", image: "https://ext.same-assets.com/3210097289/3955305892.png" },
  { id: 40, name: "G12V150AH", category: "gel", image: "https://ext.same-assets.com/3210097289/2770534603.png" },
  { id: 41, name: "G12V100AH", category: "gel", image: "https://ext.same-assets.com/3210097289/2244066472.png" },

  // ESS Cabinet
  { id: 42, name: "FLS-MES215AF-S", category: "cabinet", image: "https://ext.same-assets.com/3210097289/530884920.png" },
  { id: 43, name: "FLS-ES232LC-S", category: "cabinet", image: "https://ext.same-assets.com/3210097289/3606744151.png" },

  // Microinverter
  { id: 44, name: "X-RAY-BDM2250W", category: "microinverter", image: "https://ext.same-assets.com/3210097289/2399179726.png" },

  // Solar Lights
  { id: 45, name: "A3-100W-S", category: "street-light", image: "https://ext.same-assets.com/3210097289/2350209665.png" },
  { id: 46, name: "A3-60W-P", category: "spotlight", image: "https://ext.same-assets.com/3210097289/951124098.png" },

  // Key Components
  { id: 47, name: "BTCB0303-200", category: "components", image: "https://ext.same-assets.com/3210097289/1261526544.png" },
];



export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const productsRef = useRef<HTMLElement>(null);

  // Scroll to products section
  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-20 pb-2 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-600">
            <Link href="/" className="hover:text-orange-500">الرئيسية</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">المنتجات</span>
          </p>
        </div>
      </div>

      {/* Categories */}
      <section className="py-4 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(selectedCategory === category.id ? null : category.id);
                    setCurrentPage(1);
                    setTimeout(scrollToProducts, 100);
                  }}
                  className={`flex flex-col items-center p-2 rounded-lg transition-all hover:bg-gray-100 ${
                    selectedCategory === category.id ? "bg-orange-50 border border-orange-500" : ""
                  }`}
                >
                  <span className="mb-1">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />
                  </span>
                  <span className="text-[8px] md:text-[10px] text-center text-gray-700 leading-tight">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={productsRef} className="py-6 bg-gray-50 scroll-mt-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div className="lg:w-56 flex-shrink-0">
              {/* Search */}
              <div className="bg-orange-500 p-3 rounded-t-lg">
                <h3 className="text-white font-semibold text-sm">البحث في المنتجات</h3>
              </div>
              <div className="bg-white p-3 border border-gray-200 rounded-b-lg mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="بحث..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-orange-500"
                  />
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500" />
                </div>

                {/* Category Filter */}
                <div className="mt-3">
                  <label className="block text-xs text-gray-600 mb-1">اختر الفئة:</label>
                  <select
                    value={selectedCategory || ""}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value || null);
                      setCurrentPage(1);
                    }}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-orange-500"
                  >
                    <option value="">جميع الفئات</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {paginatedProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="relative p-3 md:p-4">
                      {product.isNew && (
                        <span className="absolute top-1 right-1 bg-orange-500 text-white text-[8px] px-1.5 py-0.5 rounded z-10">
                          جديد
                        </span>
                      )}
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={150}
                        className="w-full h-28 md:h-36 object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        quality={50}
                      />
                    </div>
                    <div className="p-2 md:p-3 border-t">
                      <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">{product.name}</h3>
                      <span className="text-orange-500 text-[10px] md:text-xs hover:text-orange-600">
                        عرض التفاصيل &gt;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Empty State */}
              {paginatedProducts.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm">لا توجد منتجات مطابقة للبحث</p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1 mt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-8 h-8 text-sm rounded-lg ${
                          currentPage === pageNum
                            ? "bg-orange-500 text-white"
                            : "border border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
