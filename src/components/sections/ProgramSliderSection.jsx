import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const programs = [
  {
    title: "CÔNG NGHỆ TRONG GIÁO DỤC",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    lines: [
      "Nhà phân phối độc quyền ChessUp V2 tại Việt Nam",
      "Giải pháp giáo dục STEM trong cờ vua",
      "Giải pháp công nghệ dành cho trường học và câu lạc bộ",
    ],
  },
  {
    title: "TRẢI NGHIỆM QUỐC TẾ",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    lines: [
      "Trại hè quốc tế và giao lưu văn hóa",
      "Chương trình trao đổi học sinh, sinh viên",
      "Mở rộng tầm nhìn và kỹ năng toàn cầu",
    ],
  },
  {
    title: "SÁCH & TẠP CHÍ",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2098&auto=format&fit=crop",
    lines: [
      "Xuất bản tài liệu chuyên sâu",
      "Sách tham khảo giáo dục và thể thao",
      "Tạp chí khoa học phục vụ nghiên cứu",
    ],
  },
  {
    title: "TRAO QUYỀN TRẺ EM",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop",
    lines: [
      "Tổ chức các dự án giáo dục cộng đồng",
      "Hoạt động CSR hướng tới trẻ em",
      "Nâng cao sức khỏe và sự tự tin qua thể thao",
    ],
  },
];

const ProgramSliderSection = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden program-slider-container">
      {/* CSS overrides for the internal layout transitions based on Swiper active states */}
      <style>{`
        .program-slide {
          width: 850px !important;
          max-width: 90vw !important;
        }
        
        /* Default states for internal elements */
        .program-slide .text-box {
          width: 0;
          opacity: 0;
          transition: all 0.6s ease;
        }
        .program-slide .vertical-bar-prev,
        .program-slide .vertical-bar-next {
          width: 0;
          opacity: 0;
          transition: all 0.6s ease;
        }

        /* Active slide: Show text box */
        .swiper-slide-active .text-box {
          width: 50%;
          opacity: 1;
        }
        @media (max-width: 768px) {
          .swiper-slide-active .text-box {
            width: 100%;
          }
        }

        /* Prev slide: Show vertical bar on the right */
        .swiper-slide-prev .vertical-bar-prev {
          width: 64px;
          opacity: 1;
        }

        /* Next slide: Show vertical bar on the left */
        .swiper-slide-next .vertical-bar-next {
          width: 64px;
          opacity: 1;
        }
      `}</style>

      <div className="w-full relative max-w-[1600px] mx-auto px-4">
        {/* Navigation Buttons */}
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute left-2 md:left-12 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur hover:bg-white text-[#22305C] p-3 rounded-full shadow-xl transition-all"
        >
          <ChevronLeft size={36} />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="absolute right-2 md:right-12 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur hover:bg-white text-[#22305C] p-3 rounded-full shadow-xl transition-all"
        >
          <ChevronRight size={36} />
        </button>

        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          loopedSlides={programs.length}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={800}
          coverflowEffect={{
            rotate: 0,
            stretch: -50,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          onSwiper={setSwiperInstance}
          className="w-full py-12"
        >
          {programs.map((program, idx) => (
            <SwiperSlide key={idx} className="program-slide">
              <div className="flex h-[450px] shadow-2xl rounded-2xl overflow-hidden bg-white">
                {/* Vertical Bar for NEXT slide (Left side) */}
                <div
                  className="vertical-bar-next bg-[#22305C] flex items-center justify-center overflow-hidden"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span className="text-white py-4 px-2 text-sm font-bold tracking-widest whitespace-nowrap">
                    {program.title}
                  </span>
                </div>

                {/* Main Image */}
                <div className="relative h-full flex-1">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Vertical Bar for PREV slide (Right side) */}
                <div
                  className="vertical-bar-prev bg-[#22305C] flex items-center justify-center rotate-180 overflow-hidden"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span className="text-white py-4 px-2 text-sm font-bold tracking-widest whitespace-nowrap">
                    {program.title}
                  </span>
                </div>

                {/* Text Box (Only visible when active) */}
                <div className="text-box bg-[#22305C] text-white flex flex-col justify-center overflow-hidden">
                  <div className="w-[425px] p-10">
                    <h3 className="text-3xl font-bold mb-6 truncate text-wrap">
                      {program.title}
                    </h3>
                    <div className="flex-col gap-4 mb-8 hidden md:flex">
                      {program.lines.map((line, lineIdx) => (
                        <p
                          key={lineIdx}
                          className="text-gray-300 leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    <div>
                      <button className="border-2 border-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-[#22305C] transition-colors whitespace-nowrap">
                        TÌM HIỂU THÊM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProgramSliderSection;
