import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import StagesSection from "@/components/StagesSection";
import TileTypesSection from "@/components/TileTypesSection";
import PriceCalculator from "@/components/PriceCalculator";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="page">
      <Navbar />
      <HeroSection />
      <AdvantagesSection />
      <StagesSection />
      <TileTypesSection />
      <PriceCalculator />
      <FAQSection />
      <AboutSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
