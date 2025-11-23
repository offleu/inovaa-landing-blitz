import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyChooseSection from "../components/WhyChooseSection";
import PackagesSection from "../components/PackagesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import BlogSection from "../components/BlogSection";
import DoubtSection from "../components/DoubtSection";
import PlatformsSection from "../components/PlatformsSection";
import CookieConsent from "../components/CookieConsent";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-14 sm:pt-16">
        <HeroSection />
        <WhyChooseSection />
        <PackagesSection />
        <HowItWorksSection />
        <BlogSection />
        <DoubtSection />
        <PlatformsSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;