import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import imgGiaoDuc from "@/assets/images/home_page/section4/giao duc cong nghe.png";
import imgTraiNghiem from "@/assets/images/home_page/section4/trai nghiem quoc te.png";
import imgSach from "@/assets/images/home_page/section4/Sách tap chi.png";
import imgTreEm from "@/assets/images/home_page/section4/tre em.png";

const programs = [
  {
    title: "CÔNG NGHỆ TRONG GIÁO DỤC",
    image: imgGiaoDuc,
    link: "/cong-nghe-giao-duc",
    lines: [
      "Nhà phân phối chính hãng ChessUp V2 tại Việt Nam",
      "Giải pháp giáo dục STEM trong cờ vua",
      "Giải pháp công nghệ dành cho trường học và câu lạc bộ",
    ],
  },
  {
    title: "TRẢI NGHIỆM QUỐC TẾ",
    image: imgTraiNghiem,
    link: "/trai-nghiem-quoc-te",
    lines: [
      "Trại hè quốc tế và giao lưu văn hóa",
      "Chương trình trao đổi học sinh, sinh viên",
      "Mở rộng tầm nhìn và kỹ năng toàn cầu",
    ],
  },
  {
    title: "SÁCH & TẠP CHÍ",
    image: imgSach,
    link: "/sach-va-tap-chi",
    lines: [
      "Xuất bản tài liệu chuyên sâu",
      "Sách tham khảo giáo dục và thể thao",
      "Tạp chí khoa học phục vụ nghiên cứu",
    ],
  },
  {
    title: "TRAO QUYỀN TRẺ EM",
    image: imgTreEm,
    link: "/trao-quyen-tre-em-trong-the-thao",
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
    <section className="py-8 md:py-24 bg-gray-50 relative overflow-hidden program-slider-container">
      <style>{`
        /* --- Desktop: Side-by-side layout --- */
        .program-slide {
          width: 750px !important;
          max-width: 90vw !important;
          display: flex;
          justify-content: center;
        }
        
        .program-slide .slide-inner {
          width: 100%;
          transition: width 0.6s ease;
        }

        .program-slide .text-box {
          width: 0;
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .program-slide .text-content {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease 0s;
        }
        .program-slide .vertical-bar-left,
        .program-slide .vertical-bar-right {
          width: 0;
          opacity: 0;
          transition: all 0.6s ease;
        }
        .program-slide .mobile-overlay {
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        /* Desktop active: show text-box panel */
        @media (min-width: 769px) {
          .program-slide .slide-inner {
            width: 300px; /* Shrink inactive slides so outer edge is visible */
          }
          .swiper-slide-active .slide-inner {
            width: 100%;
          }
          .swiper-slide-prev {
            justify-content: flex-end;
          }
          .swiper-slide-next {
            justify-content: flex-start;
          }

          .swiper-slide-active .text-box {
            width: 50%;
            opacity: 1;
          }
          .swiper-slide-active .text-content {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.4s;
          }
          /* PREV slide (left side) shows its left bar (outside edge) */
          .swiper-slide-prev .vertical-bar-left {
            width: 64px;
            opacity: 1;
          }
          /* NEXT slide (right side) shows its right bar (outside edge) */
          .swiper-slide-next .vertical-bar-right {
            width: 64px;
            opacity: 1;
          }
        }

        /* --- Mobile: Overlay layout --- */
        @media (max-width: 768px) {
          .program-slide {
            width: 85vw !important;
          }
          .program-slide .text-box {
            display: none !important;
          }
          .program-slide .vertical-bar-left,
          .program-slide .vertical-bar-right {
            display: none !important;
          }
          .swiper-slide-active .mobile-overlay {
            opacity: 1;
          }
        }
      `}</style>

      <div className="w-full relative max-w-[1600px] mx-auto px-8 sm:px-10 md:px-24">
        {/* Navigation Buttons */}
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 text-[#22305C] hover:opacity-70 transition-opacity"
        >
          <ChevronLeft className="w-7 h-7 sm:w-10 sm:h-10 md:w-20 md:h-20" strokeWidth={2.5} />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 text-[#22305C] hover:opacity-70 transition-opacity"
        >
          <ChevronRight className="w-7 h-7 sm:w-10 sm:h-10 md:w-20 md:h-20" strokeWidth={2.5} />
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
          className="w-full py-8 md:py-12"
        >
          {programs.map((program, idx) => (
            <SwiperSlide key={idx} className="program-slide">
              <div className="slide-inner relative flex h-[260px] sm:h-[320px] md:h-[450px] shadow-2xl rounded-2xl overflow-hidden bg-white">
                {/* Vertical Bar (Left side) — Desktop only */}
                <div
                  className="vertical-bar-left bg-[#22305C] flex items-center justify-center overflow-hidden shrink-0"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span className="text-white py-4 px-2 text-sm font-bold tracking-widest whitespace-nowrap">
                    {program.title}
                  </span>
                </div>

                {/* Main Image */}
                <div className="relative h-full flex-1 min-w-0">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Vertical Bar (Right side) — Desktop only */}
                <div
                  className="vertical-bar-right bg-[#22305C] flex items-center justify-center rotate-180 overflow-hidden shrink-0"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span className="text-white py-4 px-2 text-sm font-bold tracking-widest whitespace-nowrap">
                    {program.title}
                  </span>
                </div>

                {/* Text Box — Desktop only (side panel) */}
                <div className="text-box bg-[#22305C] text-white flex flex-col justify-center overflow-hidden shrink-0">
                  <div className="text-content w-[375px] shrink-0 p-8 lg:p-10">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 leading-tight">
                      {program.title}
                    </h3>
                    <div className="flex flex-col gap-4 mb-8">
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
                      <Link to={program.link} className="inline-block border-2 border-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-[#22305C] transition-colors whitespace-nowrap text-center">
                        TÌM HIỂU THÊM
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Overlay — shown only on mobile when active */}
                <div className="mobile-overlay absolute inset-0 flex flex-col justify-end pointer-events-none md:hidden">
                  <div className="bg-gradient-to-t from-[#22305C] via-[#22305C]/80 to-transparent p-5 pt-16">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                      {program.title}
                    </h3>
                    <Link to={program.link} className="inline-block pointer-events-auto border-2 border-white rounded-full px-5 py-2 text-xs font-semibold text-white hover:bg-white hover:text-[#22305C] transition-colors text-center">
                      TÌM HIỂU THÊM
                    </Link>
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

