"use client";

import { Download } from "lucide-react";
import { useRef } from "react";

export default function BrandAssetsPage() {
  const logoRef = useRef<HTMLDivElement>(null);
  const fbCoverRef = useRef<HTMLDivElement>(null);
  const instaCoverRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-2">Felicity Solar - Brand Assets</h1>
        <p className="text-gray-400 text-center mb-12">انقر بزر الماوس الأيمن على أي صورة واختر "حفظ الصورة"</p>

        {/* Logo Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6">اللوغو - Logo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo on Dark */}
            <div className="bg-black p-8 rounded-xl flex flex-col items-center">
              <div ref={logoRef} className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-6xl italic" style={{ fontFamily: 'Georgia, serif' }}>F</span>
              </div>
              <p className="text-gray-400 text-sm">Logo على خلفية داكنة</p>
              <p className="text-gray-500 text-xs">128x128 px</p>
            </div>

            {/* Logo on White */}
            <div className="bg-white p-8 rounded-xl flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-6xl italic" style={{ fontFamily: 'Georgia, serif' }}>F</span>
              </div>
              <p className="text-gray-600 text-sm">Logo على خلفية بيضاء</p>
              <p className="text-gray-400 text-xs">128x128 px</p>
            </div>

            {/* Full Logo with Text */}
            <div className="bg-black p-8 rounded-xl flex flex-col items-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-3xl italic" style={{ fontFamily: 'Georgia, serif' }}>F</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-2xl font-light tracking-wide">
                    <span className="text-orange-500 font-semibold">F</span>elicity
                    <span className="text-orange-500 font-medium">solar</span>
                    <sup className="text-xs">®</sup>
                  </span>
                  <span className="text-orange-400 text-xs">الفرع الرئيسي - الفحامة</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Logo كامل مع النص</p>
            </div>
          </div>
        </section>

        {/* Facebook Cover */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6">غلاف فيسبوك - Facebook Cover (820x312)</h2>
          <div
            ref={fbCoverRef}
            className="relative w-full overflow-hidden rounded-xl"
            style={{ aspectRatio: '820/312' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="absolute inset-0 flex items-center px-12">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-5xl italic" style={{ fontFamily: 'Georgia, serif' }}>F</span>
                </div>
                <div>
                  <h2 className="text-white text-4xl font-light tracking-wide">
                    <span className="text-orange-500 font-semibold">F</span>elicity
                    <span className="text-orange-500 font-medium">solar</span>
                    <sup className="text-sm">®</sup>
                  </h2>
                  <p className="text-orange-400 text-lg mt-1">الفرع الرئيسي - الفحامة</p>
                  <p className="text-gray-300 text-sm mt-2">حلول الطاقة الشمسية | Solar Energy Solutions</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-2">انقر بزر الماوس الأيمن → حفظ الصورة</p>
        </section>

        {/* Instagram Post */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6">منشور انستغرام - Instagram Post (1080x1080)</h2>
          <div
            ref={instaCoverRef}
            className="relative w-full max-w-lg mx-auto overflow-hidden rounded-xl"
            style={{ aspectRatio: '1/1' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-7xl italic" style={{ fontFamily: 'Georgia, serif' }}>F</span>
              </div>
              <h2 className="text-white text-4xl font-light tracking-wide text-center">
                <span className="text-orange-500 font-semibold">F</span>elicity
                <span className="text-orange-500 font-medium">solar</span>
                <sup className="text-sm">®</sup>
              </h2>
              <p className="text-orange-400 text-xl mt-2">الفرع الرئيسي - الفحامة</p>
              <div className="mt-8 text-center">
                <p className="text-white text-lg">حلول الطاقة الشمسية</p>
                <p className="text-gray-300 text-sm">Solar Energy Solutions</p>
              </div>
              <div className="mt-6 flex gap-4 text-white text-sm">
                <span>📞 +963 981 117 805</span>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-2 text-center">انقر بزر الماوس الأيمن → حفظ الصورة</p>
        </section>

        {/* Instagram Story */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6">ستوري انستغرام - Instagram Story (1080x1920)</h2>
          <div
            className="relative w-full max-w-sm mx-auto overflow-hidden rounded-xl"
            style={{ aspectRatio: '9/16' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl flex items-center justify-center mb-8">
                <span className="text-white font-bold text-8xl italic" style={{ fontFamily: 'Georgia, serif' }}>F</span>
              </div>
              <h2 className="text-white text-5xl font-light tracking-wide text-center">
                <span className="text-orange-500 font-semibold">F</span>elicity
                <span className="text-orange-500 font-medium">solar</span>
                <sup className="text-sm">®</sup>
              </h2>
              <p className="text-orange-400 text-2xl mt-3">الفرع الرئيسي - الفحامة</p>
              <div className="mt-12 text-center">
                <p className="text-white text-2xl font-bold">حلول الطاقة الشمسية</p>
                <p className="text-gray-300 text-lg mt-2">Solar Energy Solutions</p>
              </div>
              <div className="mt-8 bg-orange-500 px-8 py-4 rounded-full">
                <span className="text-white text-xl font-bold">📞 اتصل الآن</span>
              </div>
              <p className="text-white text-lg mt-4">+963 981 117 805</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-2 text-center">انقر بزر الماوس الأيمن → حفظ الصورة</p>
        </section>

        {/* Download Instructions */}
        <section className="bg-gray-800 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-4">كيفية التحميل</h2>
          <div className="text-gray-300 space-y-2">
            <p>1. انقر بزر الماوس الأيمن على الصورة</p>
            <p>2. اختر "حفظ الصورة باسم..." أو "Save image as..."</p>
            <p>3. احفظ الصورة على جهازك</p>
          </div>
          <div className="mt-6 text-gray-400 text-sm">
            <p>للحصول على جودة أعلى، يمكنك أخذ لقطة شاشة (Screenshot)</p>
          </div>
        </section>
      </div>
    </main>
  );
}
