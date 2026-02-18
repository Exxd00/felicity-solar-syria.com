"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const solutionImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=500&fit=crop&q=30",
    titleAr: "لوحة شمسية متميزة",
    titleEn: "Premium Solar Panel",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=400&h=500&fit=crop&q=30",
    titleAr: "نظام معياري",
    titleEn: "Modular System",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=500&fit=crop&q=30",
    titleAr: "محول ذكي",
    titleEn: "Smart Inverter",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=500&fit=crop&q=30",
    titleAr: "تخزين ESS",
    titleEn: "ESS Storage",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=500&fit=crop&q=30",
    titleAr: "نظام مدمج",
    titleEn: "Integrated System",
  },
];

// Pre-defined star positions for SSR consistency
const stars = [
  { left: "5%", top: "10%", opacity: 0.3 },
  { left: "15%", top: "25%", opacity: 0.5 },
  { left: "25%", top: "5%", opacity: 0.4 },
  { left: "35%", top: "60%", opacity: 0.6 },
  { left: "45%", top: "30%", opacity: 0.3 },
  { left: "55%", top: "15%", opacity: 0.5 },
  { left: "65%", top: "45%", opacity: 0.4 },
  { left: "75%", top: "70%", opacity: 0.3 },
  { left: "85%", top: "20%", opacity: 0.6 },
  { left: "95%", top: "55%", opacity: 0.4 },
  { left: "10%", top: "80%", opacity: 0.5 },
  { left: "30%", top: "90%", opacity: 0.3 },
  { left: "50%", top: "75%", opacity: 0.4 },
  { left: "70%", top: "85%", opacity: 0.5 },
  { left: "90%", top: "40%", opacity: 0.3 },
];

export default function CustomSolutions() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ image: string; titleAr: string; titleEn: string } | null>(null);
  const { language } = useLanguage();

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % solutionImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + solutionImages.length) % solutionImages.length);
  };

  const openLightbox = (image: { image: string; titleAr: string; titleEn: string }) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
  };

  const getVisibleImages = () => {
    const images = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + solutionImages.length) % solutionImages.length;
      images.push({ ...solutionImages[index], position: i });
    }
    return images;
  };

  return (
    <section className="relative py-12 bg-black overflow-hidden">
      {/* Background with starry effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent" />
        {/* Stars */}
        <div className="absolute inset-0">
          {stars.map((star, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: star.left,
                top: star.top,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white/80">
            {language === "ar" ? "حلول مخصصة و" : "Custom Solutions &"}
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold text-white/80">
            {language === "ar" ? "قابلة للتكيف مع سيناريوهات متنوعة" : "Adaptable to Various Scenarios"}
          </h2>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          {/* Navigation */}
          <button
            type="button"
            onClick={prevImage}
            className={`absolute ${language === "ar" ? "right-4 md:right-8" : "left-4 md:left-8"} top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/20 transition-all`}
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            type="button"
            onClick={nextImage}
            className={`absolute ${language === "ar" ? "left-4 md:left-8" : "right-4 md:right-8"} top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/20 transition-all`}
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Products */}
          <div className="flex justify-center items-center gap-2 md:gap-4 px-12 md:px-20 py-6 overflow-hidden">
            {getVisibleImages().map((item) => (
              <button
                type="button"
                key={`${item.id}-${item.position}`}
                onClick={() => item.position === 0 ? openLightbox(item) : setCurrentIndex((currentIndex + item.position + solutionImages.length) % solutionImages.length)}
                className={`relative transition-all duration-500 cursor-pointer flex-shrink-0 ${
                  item.position === 0
                    ? "w-32 md:w-48 lg:w-56 transform scale-110 z-10"
                    : Math.abs(item.position) === 1
                      ? "w-24 md:w-36 lg:w-44 opacity-70"
                      : "w-16 md:w-24 lg:w-32 opacity-40 hidden sm:block"
                }`}
              >
                <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg overflow-hidden shadow-2xl aspect-[3/4] hover:ring-2 hover:ring-orange-500 transition-all">
                  <img
                    src={item.image}
                    alt={language === "ar" ? item.titleAr : item.titleEn}
                    className="object-cover w-full h-full"
                  />
                </div>
                {item.position === 0 && (
                  <p className="text-center text-white text-xs md:text-sm mt-2 font-medium">
                    {language === "ar" ? item.titleAr : item.titleEn}
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {solutionImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-orange-500 w-6" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-50"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.image}
              alt={language === "ar" ? lightboxImage.titleAr : lightboxImage.titleEn}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-center text-white text-lg mt-4">
              {language === "ar" ? lightboxImage.titleAr : lightboxImage.titleEn}
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prevImage(); setLightboxImage(solutionImages[(currentIndex - 1 + solutionImages.length) % solutionImages.length]); }}
            className={`absolute ${language === "ar" ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full text-white hover:bg-white/20`}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); nextImage(); setLightboxImage(solutionImages[(currentIndex + 1) % solutionImages.length]); }}
            className={`absolute ${language === "ar" ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full text-white hover:bg-white/20`}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
