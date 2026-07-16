import { useState, useEffect } from "react";
import { NewsCard } from "../ui/NewsCard";
import markWhite from "../../assets/images/logos/mark-white.png";
import { api } from "../../services/api";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestNews();
  }, []);

  const fetchLatestNews = async () => {
    try {
      // Limit to 4 articles for the homepage
      const data = await api.get('/news?is_published=true&limit=4'); 
      setNews(data.data || []);
    } catch (error) {
      console.error("Lỗi khi tải tin tức:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gray-100 pt-8 md:pt-20 pb-12 md:pb-24">
      {/* Dark Blue Background (Upper part) */}
      <div className="absolute top-0 left-0 right-0 h-[80%] md:h-[75%] bg-[#22305C]">
        {/* Left Mark (Top Left) */}
        <img 
          src={markWhite} 
          alt="" 
          className="absolute top-[-5%] left-[-10%] md:left-[-2%] h-[80%] object-contain opacity-40 pointer-events-none"
        />
        {/* Right Mark (Bottom Right) */}
        <img 
          src={markWhite} 
          alt="" 
          className="absolute bottom-[-5%] right-[-10%] md:right-[-2%] h-[80%] object-contain opacity-40 pointer-events-none rotate-180"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-12 uppercase text-white">TIN TỨC MỚI NHẤT</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {loading ? (
            <div className="col-span-full text-center py-10 text-white">Đang tải...</div>
          ) : news.length === 0 ? (
            <div className="col-span-full text-center py-10 text-white">Chưa có bài viết nào</div>
          ) : (
            news.map((item) => (
              <NewsCard 
                key={item.id}
                image={item.thumbnail ? `http://localhost:5001${item.thumbnail}` : "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"}
                title={item.title}
                slug={item.slug}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
