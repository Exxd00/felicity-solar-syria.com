import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Felicity Solar Al-Fahamah - اجعل الحياة مليئة بالأمل",
  description:
    "فيليسيتي سولار الفرع الرئيسي - الفحامة تقدم حلول الطاقة الشمسية للمنازل والتجارة والصناعة. محولات، بطاريات ليثيوم وأنظمة تخزين الطاقة.",
  keywords: [
    "طاقة شمسية",
    "الطاقة الشمسية",
    "محولات",
    "بطاريات",
    "تخزين الطاقة",
    "Felicity Solar",
    "الفرع الرئيسي - الفحامة",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CPG2NHR3Z4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CPG2NHR3Z4');
          `}
        </Script>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased bg-black">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
