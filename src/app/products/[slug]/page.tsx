import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProductPageClient from "./ProductPageClient";

const products = [
  { id: 1, slug: "sccm8048-p", name: "SCCM8048-P", category: "المكونات الرئيسية", categoryId: "components", image: "https://ext.same-assets.com/3210097289/2503681057.png", power: "80A", voltage: "48V", type: "MPPT" },
  { id: 2, slug: "sccm8048-ii", name: "SCCM8048-II", category: "المكونات الرئيسية", categoryId: "components", image: "https://ext.same-assets.com/3210097289/312731643.png", power: "80A", voltage: "48V", type: "MPPT" },
  { id: 3, slug: "sccm6048-ii", name: "SCCM6048-II", category: "المكونات الرئيسية", categoryId: "components", image: "https://ext.same-assets.com/3210097289/2493327091.png", power: "60A", voltage: "48V", type: "MPPT" },
  { id: 4, slug: "sccm4548-ii", name: "SCCM4548-II", category: "المكونات الرئيسية", categoryId: "components", image: "https://ext.same-assets.com/3210097289/3836183996.png", power: "45A", voltage: "48V", type: "MPPT" },
  { id: 5, slug: "sccm4524-ii", name: "SCCM4524-II", category: "المكونات الرئيسية", categoryId: "components", image: "https://ext.same-assets.com/3210097289/3836183996.png", power: "45A", voltage: "24V", type: "MPPT" },
  { id: 6, slug: "sccm3024-ii", name: "SCCM3024-II", category: "المكونات الرئيسية", categoryId: "components", image: "https://ext.same-assets.com/3210097289/1370406890.png", power: "30A", voltage: "24V", type: "MPPT" },
  { id: 7, slug: "sccm2024-ii", name: "SCCM2024-II", category: "المكونات الرئيسية", categoryId: "components", image: "https://ext.same-assets.com/3210097289/917269382.png", power: "20A", voltage: "24V", type: "MPPT" },
  { id: 8, slug: "sccm12048-ii", name: "SCCM12048-II", category: "المكونات الرئيسية", categoryId: "components", image: "https://ext.same-assets.com/3210097289/2213530337.png", power: "120A", voltage: "48V", type: "MPPT" },
  { id: 9, slug: "sccm10048-ii", name: "SCCM10048-II", category: "المكونات الرئيسية", categoryId: "components", image: "https://ext.same-assets.com/3210097289/2213530337.png", power: "100A", voltage: "48V", type: "MPPT" },
  { id: 10, slug: "ivps7548", name: "IVPS7548", category: "محول خارج الشبكة", categoryId: "off-grid", image: "https://ext.same-assets.com/3210097289/1232904177.png", power: "7.5kW", voltage: "48V", type: "Off-Grid" },
  { id: 11, slug: "ivps10048", name: "IVPS10048", category: "محول خارج الشبكة", categoryId: "off-grid", image: "https://ext.same-assets.com/3210097289/1232904177.png", power: "10kW", voltage: "48V", type: "Off-Grid" },
  { id: 12, slug: "ivps5048", name: "IVPS5048", category: "محول خارج الشبكة", categoryId: "off-grid", image: "https://ext.same-assets.com/3210097289/1232904177.png", power: "5kW", voltage: "48V", type: "Off-Grid" },
  { id: 13, slug: "ivps3524", name: "IVPS3524", category: "محول خارج الشبكة", categoryId: "off-grid", image: "https://ext.same-assets.com/3210097289/3456858707.png", power: "3.5kW", voltage: "24V", type: "Off-Grid" },
  { id: 14, slug: "ivps2524", name: "IVPS2524", category: "محول خارج الشبكة", categoryId: "off-grid", image: "https://ext.same-assets.com/3210097289/3456858707.png", power: "2.5kW", voltage: "24V", type: "Off-Grid" },
  { id: 15, slug: "ivps2512", name: "IVPS2512", category: "محول خارج الشبكة", categoryId: "off-grid", image: "https://ext.same-assets.com/3210097289/3456858707.png", power: "2.5kW", voltage: "12V", type: "Off-Grid" },
  { id: 16, slug: "ivpm7548", name: "IVPM7548", category: "محول خارج الشبكة", categoryId: "off-grid", image: "https://ext.same-assets.com/3210097289/3854667919.png", power: "7.5kW", voltage: "48V", type: "Off-Grid" },
  { id: 17, slug: "ivem3-5kw-lv", name: "IVEM3/5kW-LV", category: "محول هجين", categoryId: "hybrid", image: "https://ext.same-assets.com/3210097289/3584555656.png", power: "3-5kW", voltage: "48V", type: "Hybrid" },
  { id: 18, slug: "ivcm1012-lv", name: "IVCM1012-LV", category: "محول هجين", categoryId: "hybrid", image: "https://ext.same-assets.com/3210097289/589032110.png", power: "10-12kW", voltage: "48V", type: "Hybrid" },
  { id: 19, slug: "ivgm50khp3g2", name: "IVGM50KHP3G2", category: "محول هجين", categoryId: "hybrid", image: "https://ext.same-assets.com/3210097289/2408210487.png", power: "50kW", voltage: "400V", type: "Grid-Tied", isNew: true },
  { id: 20, slug: "ivgm8klp2g1", name: "IVGM8KLP2G1", category: "محول هجين", categoryId: "hybrid", image: "https://ext.same-assets.com/3210097289/1356917538.png", power: "8kW", voltage: "48V", type: "Grid-Tied" },
  { id: 21, slug: "ivgm5klp1g1", name: "IVGM5KLP1G1", category: "محول هجين", categoryId: "hybrid", image: "https://ext.same-assets.com/3210097289/4266408636.png", power: "5kW", voltage: "48V", type: "Grid-Tied" },
  { id: 22, slug: "ivgm50khp3g1", name: "IVGM50KHP3G1", category: "محول هجين", categoryId: "hybrid", image: "https://ext.same-assets.com/3210097289/1644068732.png", power: "50kW", voltage: "400V", type: "Grid-Tied" },
  { id: 23, slug: "flh-e60", name: "FLH-E60", category: "بطارية ليثيوم", categoryId: "lithium", image: "https://ext.same-assets.com/3210097289/3262095844.png", power: "6kWh", voltage: "48V", type: "LiFePO4", isNew: true },
  { id: 24, slug: "flh48100ug2", name: "FLH48100UG2", category: "بطارية ليثيوم", categoryId: "lithium", image: "https://ext.same-assets.com/3210097289/2146017158.png", power: "5.12kWh", voltage: "48V", type: "LiFePO4" },
  { id: 25, slug: "flh48100ug1", name: "FLH48100UG1", category: "بطارية ليثيوم", categoryId: "lithium", image: "https://ext.same-assets.com/3210097289/2308725072.png", power: "5.12kWh", voltage: "48V", type: "LiFePO4" },
  { id: 26, slug: "fl96050sg1", name: "FL96050SG1", category: "بطارية ليثيوم", categoryId: "lithium", image: "https://ext.same-assets.com/3210097289/125658656.png", power: "25.6kWh", voltage: "96V", type: "LiFePO4" },
  { id: 27, slug: "lpbf48350", name: "LPBF48350", category: "بطارية ليثيوم", categoryId: "lithium", image: "https://ext.same-assets.com/3210097289/1099946930.png", power: "17.92kWh", voltage: "48V", type: "LiFePO4" },
  { id: 28, slug: "lpbf48300-ii", name: "LPBF48300-II", category: "بطارية ليثيوم", categoryId: "lithium", image: "https://ext.same-assets.com/3210097289/3207296283.png", power: "15.36kWh", voltage: "48V", type: "LiFePO4" },
  { id: 29, slug: "lpbf48300", name: "LPBF48300", category: "بطارية ليثيوم", categoryId: "lithium", image: "https://ext.same-assets.com/3210097289/1888944206.png", power: "15.36kWh", voltage: "48V", type: "LiFePO4" },
  { id: 30, slug: "lpbf48250", name: "LPBF48250", category: "بطارية ليثيوم", categoryId: "lithium", image: "https://ext.same-assets.com/3210097289/2994057073.png", power: "12.8kWh", voltage: "48V", type: "LiFePO4" },
  { id: 31, slug: "lpbf48200-h", name: "LPBF48200-H", category: "بطارية ليثيوم", categoryId: "lithium", image: "https://ext.same-assets.com/3210097289/4278035210.png", power: "10.24kWh", voltage: "48V", type: "LiFePO4" },
  { id: 32, slug: "lpbf48150-p", name: "LPBF48150-P", category: "بطارية ليثيوم", categoryId: "lithium", image: "https://ext.same-assets.com/3210097289/464422436.png", power: "7.68kWh", voltage: "48V", type: "LiFePO4" },
  { id: 33, slug: "ai-100-8048", name: "AI 100-8048", category: "نظام الكل في واحد ESS", categoryId: "all-in-one", image: "https://ext.same-assets.com/3210097289/3747720231.png", power: "8kW", voltage: "48V", type: "All-in-One" },
  { id: 34, slug: "ai100-5048", name: "AI100-5048", category: "نظام الكل في واحد ESS", categoryId: "all-in-one", image: "https://ext.same-assets.com/3210097289/3577605889.png", power: "5kW", voltage: "48V", type: "All-in-One" },
  { id: 35, slug: "fl-opzv-2500ah-2v", name: "FL-OPZV-2500AH 2V", category: "بطارية جل", categoryId: "gel", image: "https://ext.same-assets.com/3210097289/3766027305.png", power: "5kWh", voltage: "2V", type: "OPzV" },
  { id: 36, slug: "fl-opzv-1000ah-2v", name: "FL-OPZV-1000AH 2V", category: "بطارية جل", categoryId: "gel", image: "https://ext.same-assets.com/3210097289/3766027305.png", power: "2kWh", voltage: "2V", type: "OPzV" },
  { id: 37, slug: "fl-opzv-500ah-2v", name: "FL-OPZV-500AH 2V", category: "بطارية جل", categoryId: "gel", image: "https://ext.same-assets.com/3210097289/3766027305.png", power: "1kWh", voltage: "2V", type: "OPzV" },
  { id: 38, slug: "fl-opzv-200ah-2v", name: "FL-OPZV-200AH 2V", category: "بطارية جل", categoryId: "gel", image: "https://ext.same-assets.com/3210097289/3766027305.png", power: "400Wh", voltage: "2V", type: "OPzV" },
  { id: 39, slug: "g12v200ah", name: "G12V200AH", category: "بطارية جل", categoryId: "gel", image: "https://ext.same-assets.com/3210097289/3955305892.png", power: "2.4kWh", voltage: "12V", type: "Gel" },
  { id: 40, slug: "g12v150ah", name: "G12V150AH", category: "بطارية جل", categoryId: "gel", image: "https://ext.same-assets.com/3210097289/2770534603.png", power: "1.8kWh", voltage: "12V", type: "Gel" },
  { id: 41, slug: "g12v100ah", name: "G12V100AH", category: "بطارية جل", categoryId: "gel", image: "https://ext.same-assets.com/3210097289/2244066472.png", power: "1.2kWh", voltage: "12V", type: "Gel" },
  { id: 42, slug: "fls-mes215af-s", name: "FLS-MES215AF-S", category: "خزانة ESS", categoryId: "cabinet", image: "https://ext.same-assets.com/3210097289/530884920.png", power: "215kWh", voltage: "400V", type: "Liquid Cooling" },
  { id: 43, slug: "fls-es232lc-s", name: "FLS-ES232LC-S", category: "خزانة ESS", categoryId: "cabinet", image: "https://ext.same-assets.com/3210097289/3606744151.png", power: "232kWh", voltage: "400V", type: "Liquid Cooling" },
  { id: 44, slug: "x-ray-bdm2250w", name: "X-RAY-BDM2250W", category: "محول صغير", categoryId: "microinverter", image: "https://ext.same-assets.com/3210097289/2399179726.png", power: "2250W", voltage: "230V", type: "Microinverter" },
  { id: 45, slug: "a3-100w-s", name: "A3-100W-S", category: "إنارة الشوارع الشمسية", categoryId: "street-light", image: "https://ext.same-assets.com/3210097289/2350209665.png", power: "100W", voltage: "12V", type: "Solar Light" },
  { id: 46, slug: "a3-60w-p", name: "A3-60W-P", category: "كشاف شمسي", categoryId: "spotlight", image: "https://ext.same-assets.com/3210097289/951124098.png", power: "60W", voltage: "12V", type: "Solar Light" },
  { id: 47, slug: "btcb0303-200", name: "BTCB0303-200", category: "المكونات الرئيسية", categoryId: "components", image: "https://ext.same-assets.com/3210097289/1261526544.png", power: "200A", voltage: "48V", type: "Combiner" },
];

function getProduct(slug: string) {
  return products.find((p) => p.slug === slug || p.name.toLowerCase().replace(/[^a-z0-9]/g, "-") === slug);
}

function getRelated(categoryId: string, id: number) {
  return products.filter((p) => p.categoryId === categoryId && p.id !== id).slice(0, 4);
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">المنتج غير موجود</h1>
            <Link href="/products" className="text-orange-500 hover:underline">العودة للمنتجات</Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const related = getRelated(product.categoryId, product.id);

  return <ProductPageClient product={product} related={related} />;
}
