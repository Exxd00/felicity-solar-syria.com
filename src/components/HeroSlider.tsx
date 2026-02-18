"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, language } = useLanguage();

  const slides = [
    {
      id: 1,
      title: t("hero.title1"),
      subtitle: t("hero.subtitle1"),
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=30",
    },
    {
      id: 2,
      title: t("hero.title2"),
      subtitle: t("hero.subtitle2"),
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=30",
    },
    {
      id: 3,
      title: t("hero.title3"),
      subtitle: t("hero.subtitle3"),
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=30",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[60vh] min-h-[350px] max-h-[500px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-${language === "ar" ? "l" : "r"} from-black/70 via-black/50 to-transparent`} />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute"
              }`}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2">
                {slide.title}
                <br />
                <span className="text-white/90">{slide.subtitle}</span>
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={nextSlide}
        className={`absolute ${language === "ar" ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 z-20 p-2 text-white/60 hover:text-white transition-colors`}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        type="button"
        onClick={prevSlide}
        className={`absolute ${language === "ar" ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 z-20 p-2 text-white/60 hover:text-white transition-colors`}
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>


    </section>
  );
}
