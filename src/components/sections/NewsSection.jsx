import { NewsCard } from "../ui/NewsCard";
import markWhite from "../../assets/images/Mark-White 1.png";

const NewsSection = () => {
  const news = [
    {
      image: "https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?q=80&w=2070&auto=format&fit=crop",
      title: "Kỳ thủ cờ vua năng động, thi đấu kết hợp cùng nhảy zumba tại giải phong trào"
    },
    {
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
      title: "105 kỳ thủ nhí Trường THCS An Phú tranh tài sôi nổi giải Cờ Vua Mùa Xuân"
    },
    {
      image: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?q=80&w=1974&auto=format&fit=crop",
      title: "Vietnamese youth take chess to new heights with smart board technology"
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      title: "Giải cờ vua Trí tuệ và yêu thương 2026: Sân chơi ý nghĩa cho trẻ em"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gray-100 pt-12 md:pt-20 pb-16 md:pb-24">
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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 uppercase text-white">TIN TỨC MỚI NHẤT</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {news.map((item, index) => (
            <NewsCard 
              key={index}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
