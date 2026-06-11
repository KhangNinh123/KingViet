import { useState } from "react";
import { Play } from "lucide-react";

const FeatureBannerSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative shadow-2xl">
        {!isPlaying ? (
          <div className="group cursor-pointer w-full h-[400px] relative" onClick={() => setIsPlaying(true)}>
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop" 
                alt="ChessUp Board" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#22305C]/90 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="p-10 md:p-16 w-full md:w-2/3 flex flex-col items-start text-white relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Chơi Chess.com<br />
                  KHÔNG Cần Dùng ĐIỆN THOẠI?<br />
                  Tính Năng Kết Nối Online<br />
                  Trên Bàn Cờ ChessUp V2
                </h2>
                <button className="mt-6 border-2 border-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-[#22305C] transition-colors">
                  XEM NGAY
                </button>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute top-1/2 left-2/3 md:left-3/4 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-20 h-20 rounded-full border-4 border-white/50 flex items-center justify-center backdrop-blur-sm bg-white/10 group-hover:bg-white/20 transition-all group-hover:scale-110">
                <Play size={32} className="text-white ml-2" fill="currentColor" />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-[400px] md:h-[600px] relative">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/Km-iLs7UlfQ?start=17&autoplay=1" 
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
