import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InnerPageHero from "../../components/sections/InnerPageHero";
import charImg from "../../assets/images/char-congnghecovua.png";

const EducationTech = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header />
      
      <main className="flex-grow">
        <InnerPageHero
          title="Công nghệ cờ vua trong giáo dục"
          description="Giải pháp STEM hiện đại giúp học sinh phát triển tư duy chiến lược, logic và khả năng giải quyết vấn đề thông qua bàn cờ thông minh ChessUp V2."
          breadcrumbs={[
            { label: "Lĩnh vực", path: "#" },
            { label: "Công nghệ trong giáo dục", path: "" }
          ]}
          image={charImg}
        />
        {/* Placeholder for page content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EducationTech;
