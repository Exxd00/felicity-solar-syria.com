"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Search, Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/lib/language-context";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigationItems = [
    { name: t("nav.home"), href: "/" },
    {
      name: t("nav.solutions"),
      href: "/solutions",
      dropdown: [
        { name: t("nav.balcony"), href: "/solutions/balcony-ess" },
        { name: t("nav.residential"), href: "/solutions/residential-ess" },
        { name: t("nav.commercial"), href: "/solutions/commercial" },
        { name: t("nav.industrial"), href: "/solutions/commercial-industrial-ess" },
      ],
    },
    {
      name: t("nav.products"),
      href: "/products",
      dropdown: [
        { name: t("nav.offGrid"), href: "/products?category=off-grid" },
        { name: t("nav.hybrid"), href: "/products?category=hybrid" },
        { name: t("nav.lithium"), href: "/products?category=lithium" },
        { name: t("nav.gel"), href: "/products?category=gel" },
        { name: t("nav.allInOne"), href: "/products?category=all-in-one" },
        { name: t("nav.components"), href: "/products?category=components" },
      ],
    },
    {
      name: t("nav.services"),
      href: "/services",
      dropdown: [
        { name: t("nav.support"), href: "/services/technical-support" },
      ],
    },
    {
      name: t("nav.about"),
      href: "/about",
      dropdown: [
        { name: t("nav.history"), href: "/about/history" },
        { name: t("nav.certifications"), href: "/about/certifications" },
        { name: t("nav.projects"), href: "/about/project-cases" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang: "ar" | "en") => {
    setLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/95 backdrop-blur-md ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl md:text-2xl italic" style={{ fontFamily: 'Georgia, serif' }}>F</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg md:text-xl font-light tracking-wide">
                  <span className="text-orange-500 font-semibold">F</span>elicity
                  <span className="text-orange-500 font-medium">solar</span>
                  <sup className="text-xs">®</sup>
                </span>
                <span className="text-orange-400 text-xs font-medium">
                  {language === "ar" ? "الفرع الرئيسي - الفحامة" : "Main Branch - Al-Fahamah"}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navigationItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-orange-400 transition-colors text-sm font-medium outline-none">
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#1a1a1a] border-gray-800">
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link
                          href={subItem.href}
                          className="text-gray-300 hover:text-orange-400 hover:bg-gray-900 cursor-pointer"
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-orange-400 transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors outline-none">
                <Globe className="w-5 h-5" />
                <span className="text-sm hidden sm:inline">{language === "ar" ? "العربية" : "English"}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1a1a1a] border-gray-800">
                <DropdownMenuItem
                  className={`cursor-pointer ${language === "ar" ? "text-orange-400 bg-gray-900" : "text-gray-300 hover:text-orange-400 hover:bg-gray-900"}`}
                  onClick={() => handleLanguageChange("ar")}
                >
                  العربية
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`cursor-pointer ${language === "en" ? "text-orange-400 bg-gray-900" : "text-gray-300 hover:text-orange-400 hover:bg-gray-900"}`}
                  onClick={() => handleLanguageChange("en")}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              type="button"
              className="text-white hover:text-orange-400 transition-colors hidden md:block"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="xl:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={language === "ar" ? "right" : "left"}
                className="bg-[#0a0a0a] border-gray-800 w-80"
              >
                <div className="flex flex-col gap-6 mt-8">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="text-white hover:text-orange-400 transition-colors font-medium text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className={`flex flex-col gap-2 mt-2 ${language === "ar" ? "mr-4" : "ml-4"}`}>
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
