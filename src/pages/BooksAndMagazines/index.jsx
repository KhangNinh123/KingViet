import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InnerPageHero from "../../components/sections/InnerPageHero";

const BooksAndMagazines = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header />
      
      <main className="flex-grow">
        <InnerPageHero
          title={<>Sách & Tạp chí<br />chuyên sâu về giáo dục,<br />thể thao và khoa học</>}
          description="KingViet Education phát hành và xuất bản các tài liệu chuyên môn nhằm phục vụ nghiên cứu, giảng dạy và học tập trong lĩnh vực giáo dục, thể thao và khoa học công nghệ."
          breadcrumbs={[
            { label: "Lĩnh vực", path: "#" },
            { label: "Sách & Tạp chí", path: "" }
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

export default BooksAndMagazines;
