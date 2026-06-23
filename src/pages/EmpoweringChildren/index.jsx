  import Header from "../../components/layout/Header";
  import Footer from "../../components/layout/Footer";
  import InnerPageHero from "../../components/sections/InnerPageHero";
  import charImg from "../../assets/images/char-traoquyentreem.png";

  import FloatingImageGallery from "../../components/sections/FloatingImageGallery";

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
            image={charImg}
          />
          
          {/* Gallery 10 ảnh bay bay */}
          <FloatingImageGallery />

        </main>

        <Footer />
      </div>
    );
  };

  export default EmpoweringChildren;
