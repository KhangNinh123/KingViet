import { useState } from "react";
import { Play } from "lucide-react";

const FeatureBannerSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "Km-iLs7UlfQ";

  return (
    <section className="py-12 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative shadow-2xl">
        {!isPlaying ? (
          <div className="group cursor-pointer w-full h-[280px] md:h-[600px] relative" onClick={() => setIsPlaying(true)}>
            {/* Background Image (YouTube Thumbnail) */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#22305C]/90 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="p-6 md:p-16 w-full md:w-2/3 flex flex-col items-start text-white relative z-10">
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 leading-tight drop-shadow-lg line-clamp-3 md:line-clamp-4">
                  Chơi Chess.com KHÔNG Cần Dùng ĐIỆN THOẠI? Tính Năng Kết Nối Online Trên Bàn Cờ ChessUp V2
                </h2>
                <button className="mt-3 md:mt-6 border-2 border-white rounded-full px-5 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold hover:bg-white hover:text-[#22305C] transition-colors shadow-lg">
                  XEM NGAY
                </button>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute top-1/2 left-[75%] md:left-[80%] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 md:w-32 md:h-32 rounded-full border-4 border-white/50 flex items-center justify-center backdrop-blur-sm bg-white/10 group-hover:bg-white/20 transition-all group-hover:scale-110 shadow-2xl">
                <Play className="text-white ml-1 md:ml-3 w-6 h-6 md:w-12 md:h-12" fill="currentColor" />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-[280px] md:h-[600px] relative bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${videoId}?start=17&autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureBannerSection;
