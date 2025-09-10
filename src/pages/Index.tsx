import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyChooseSection from "../components/WhyChooseSection";
import PackagesSection from "../components/PackagesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import DoubtSection from "../components/DoubtSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <PackagesSection />
        <HowItWorksSection />
        <DoubtSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;