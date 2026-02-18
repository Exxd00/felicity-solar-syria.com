import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import CampaignSection from "@/components/CampaignSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProductsShowcase from "@/components/ProductsShowcase";
import CustomSolutions from "@/components/CustomSolutions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSlider />
      <CampaignSection />
      <CustomSolutions />
      <SolutionsSection />
      <ProductsShowcase />
      <Footer />
    </main>
  );
}
