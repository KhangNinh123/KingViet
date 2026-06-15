import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InnerPageHero from "../../components/sections/InnerPageHero";

const EmpoweringChildren = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header />
      
      <main className="flex-grow">
        <InnerPageHero
          title={<>Trao quyền trẻ em<br />trong thể thao</>}
          description="KingViet Education cam kết thúc đẩy các sáng kiến giúp trẻ em phát triển toàn diện cả về thể chất, trí tuệ và kỹ năng mềm thông qua các hoạt động thể thao đa dạng."
          breadcrumbs={[
            { label: "Lĩnh vực", path: "#" },
            { label: "Trao quyền trẻ em trong thể thao", path: "" }
          ]}
        />
        {/* Placeholder for page content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmpoweringChildren;
