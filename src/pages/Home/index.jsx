import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import HeroSection from "../../components/sections/HeroSection";
import PartnerSection from "../../components/sections/PartnerSection";
import CoreValuesSection from "../../components/sections/CoreValuesSection";
import ProgramSliderSection from "../../components/sections/ProgramSliderSection";
import FeatureBannerSection from "../../components/sections/FeatureBannerSection";
import NewsSection from "../../components/sections/NewsSection";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <PartnerSection />
        <CoreValuesSection />
        <ProgramSliderSection />
        <FeatureBannerSection />
        <NewsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
