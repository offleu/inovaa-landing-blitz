import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TrustBadges from "../components/TrustBadges";
import WhyChooseSection from "../components/WhyChooseSection";
import PackagesSection from "../components/PackagesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FAQSection from "../components/FAQSection";
import BlogSection from "../components/BlogSection";
import DoubtSection from "../components/DoubtSection";
import PlatformsSection from "../components/PlatformsSection";
import WhatsAppButton from "../components/WhatsAppButton";
import ChatPopup from "../components/ChatPopup";
import CookieConsent from "../components/CookieConsent";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Consultoria E-commerce em Marília SP | Treinamentos e Gestão - Inovaa";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Consultoria especializada em e-commerce em Marília SP. Diagnóstico estratégico, treinamentos em vendas, sistemas de gestão e plataformas. Agende sua consultoria gratuita!");
    }
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-14 sm:pt-16">
        <HeroSection />
        <TrustBadges />
        <WhyChooseSection />
        <PackagesSection />
        <HowItWorksSection />
        <FAQSection />
        <BlogSection />
        <DoubtSection />
        <PlatformsSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatPopup />
      <CookieConsent />
    </div>
  );
};

export default Index;