import { Button } from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Sample 15s video from Pexels (Education/Technology theme) */}
          <source
            src="https://www.pexels.com/vi-vn/download/video/8456059/"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-4 leading-tight">
          Khám phá. <span className="whitespace-nowrap">Sáng tạo. <span className="text-[#E5B034]">Đột phá.</span></span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-medium text-gray-100 drop-shadow-md mb-8 max-w-3xl">
          Giải pháp giáo dục công nghệ tiên tiến, mang đến trải nghiệm thực tế
          và khơi dậy tiềm năng không giới hạn.
        </p>
        <Button className="text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
          Khám phá thêm
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
