import React, { useState, useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InnerPageHero from "../../components/sections/InnerPageHero";
import { StandardNewsCard } from "../../components/ui/StandardNewsCard";
import { api } from "../../services/api";
import bannerTinTuc from "../../assets/images/banners/banner-tin-tuc.webp";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      // Fetch published news
      const data = await api.get('/news?is_published=true&limit=20'); 
      setNews(data.data || []);
    } catch (error) {
      console.error("Lỗi khi tải tin tức:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <InnerPageHero
          title="Tin Tức KingViet"
          description="Cập nhật những thông tin, sự kiện và bài viết mới nhất về các giải đấu, chương trình đào tạo và hoạt động của KingViet."
          backgroundImage={bannerTinTuc}
          breadcrumbs={[
            { label: "Trang chủ", path: "/" },
            { label: "Tin tức", path: "" },
          ]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#1E2954] mb-2 border-l-4 border-[#E5B034] pl-4">
              Bài viết mới nhất
            </h2>
            <p className="text-gray-600">Đọc những tin tức cập nhật hàng ngày từ chúng tôi</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E2954]"></div>
            </div>
          ) : news.length === 0 ? (
            <div className="text-center text-gray-500 py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Chưa có bài viết nào</h3>
              <p>Các tin tức mới nhất sẽ sớm được cập nhật tại đây.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {news.map((item) => (
                <StandardNewsCard
                  key={item.id}
                  id={item.id}
                  slug={item.slug}
                  title={item.title}
                  summary={item.summary}
                  image={item.thumbnail ? (item.thumbnail.startsWith("http") ? item.thumbnail : `http://localhost:5001${item.thumbnail}`) : "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
