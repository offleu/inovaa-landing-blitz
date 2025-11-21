import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyChooseSection from "../components/WhyChooseSection";
import PackagesSection from "../components/PackagesSection";
import CasesSection from "../components/CasesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import BlogSection from "../components/BlogSection";
import DoubtSection from "../components/DoubtSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-14 sm:pt-16">
        <HeroSection />
        <WhyChooseSection />
        <PackagesSection />
        <CasesSection />
        <HowItWorksSection />
        <BlogSection />
        <DoubtSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;