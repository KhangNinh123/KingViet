import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InnerPageHero from "../../components/sections/InnerPageHero";
import FloatingImageGallery from "../../components/sections/FloatingImageGallery";

// Images
import bannerImg from "../../assets/images/banners/banner-trao-quyen-tre-em.webp";
import imgCoVua from "../../assets/images/chilren/TPK_1925.webp";
import imgZumba from "../../assets/images/chilren/8P6A5726.webp";
import imgBongBan from "../../assets/images/chilren/bong-ban.webp";

// Icons
import iconTot from "../../assets/icons/icon tot.webp";
import iconZumba from "../../assets/icons/icon zumba 1.webp";

// Logos
import logoLdcvn from "../../assets/images/logos/ldcvn.webp";
import logoKingViet from "../../assets/icons/Logo KV 1.webp";

// Happy Chess logos
import logoHappyChess from "../../assets/images/chilren/bo-logo-happy-chess/8.webp";
import logoFide from "../../assets/images/chilren/bo-logo-happy-chess/9 1.webp";
import logoFideSocial from "../../assets/images/chilren/bo-logo-happy-chess/10 6.webp";
import logoChessCom from "../../assets/images/chilren/bo-logo-happy-chess/11 1.webp";
import logoTheGrand from "../../assets/images/chilren/bo-logo-happy-chess/13 1.webp";

// 10 ảnh
import img1 from "../../assets/images/chilren/10-anh/ban-sao-cua-TPK_3290.webp";
import img2 from "../../assets/images/chilren/10-anh/IMG_7526.webp";
import img3 from "../../assets/images/chilren/10-anh/IMG_7665.webp";
import img4 from "../../assets/images/chilren/10-anh/TPK_0080_1.webp";
import img5 from "../../assets/images/chilren/10-anh/TPK_0197.webp";
import img6 from "../../assets/images/chilren/10-anh/TPK_2582_2.webp";
import img7 from "../../assets/images/chilren/10-anh/TPK_2686_4.webp";
import img8 from "../../assets/images/chilren/10-anh/TPK_4608_2.webp";
import img9 from "../../assets/images/chilren/10-anh/TPK_4734_2.webp";
import img10 from "../../assets/images/chilren/10-anh/TPK_9874_1.webp";

const galleryImages = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 }
];



const EmpoweringChildren = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <InnerPageHero
          title={<>Trao quyền trẻ em<br />qua thể thao</>}
          description="KingViet Education cam kết thúc đẩy các sáng kiến giúp trẻ em phát triển toàn diện cả về thể chất, trí tuệ và kỹ năng mềm thông qua các hoạt động thể thao đa dạng."
          breadcrumbs={[
            { label: "Lĩnh vực", path: "#" },
            { label: "Trao quyền trẻ em qua thể thao", path: "" }
          ]}
          backgroundImage={bannerImg}
        />

        {/* Section 2: Phát triển toàn diện qua từng bộ môn */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#22305C] text-center mb-16">
              Phát triển toàn diện qua từng bộ môn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { name: "Cờ vua", img: imgCoVua },
                { name: "Zumba", img: imgZumba },
                { name: "Bóng bàn", img: imgBongBan }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-800">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: TẠI SAO LẠI LÀ CỜ VUA & ZUMBA */}
        <section className="py-16 md:py-24 bg-[#263155] relative overflow-hidden">
          
          {/* Icon watermarks — behind the 2 cards (right 2/3 of section) */}
          <img
            src={iconTot}
            alt=""
            aria-hidden="true"
            className="hidden lg:block"
            style={{
              position: "absolute",
              left: "32%",
              top: "50%",
              transform: "translateY(-50%)",
              height: "90%",
              width: "auto",
              opacity: 0.1,
              pointerEvents: "none",
              userSelect: "none",
              objectFit: "contain",
              zIndex: 0,
            }}
          />
          <img
            src={iconZumba}
            alt=""
            aria-hidden="true"
            className="hidden lg:block"
            style={{
              position: "absolute",
              left: "58%",
              top: "50%",
              transform: "translateY(-50%)",
              height: "90%",
              width: "auto",
              opacity: 0.1,
              pointerEvents: "none",
              userSelect: "none",
              objectFit: "contain",
              zIndex: 0,
            }}
          />

          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 relative z-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-start gap-10 lg:gap-16 xl:gap-20">
              
              <div className="flex-shrink-0 flex items-center justify-center lg:justify-start">
                <h2 className="text-4xl md:text-[2.75rem] font-black text-[#F4C150] uppercase tracking-wide text-left leading-[1.4]">
                  Tại sao lại là<br />
                  <span className="text-white whitespace-nowrap">Cờ Vua & Zumba?</span>
                </h2>
              </div>

              <div className="flex-1 max-w-[950px] grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
                {/* Cờ Vua Card */}
                <div className="bg-[#2B3864]/80 backdrop-blur-sm border-[2px] border-[#38467A] shadow-[0_15px_40px_rgba(0,0,0,0.3)] rounded-3xl p-8 transition-transform hover:-translate-y-1">
                  <p className="text-white leading-[1.8] text-[15px] font-medium">
                    <span className="block mb-2 font-semibold">Cờ vua trao cho trẻ "quyền kiểm soát".</span>
                    Quá trình chơi cờ sẽ rèn luyện sự điềm tĩnh, tính kiên nhẫn và năng lực tự giải quyết vấn đề bằng tư duy logic, đa chiều của các em.
                  </p>
                </div>

                {/* Zumba Card */}
                <div className="bg-[#2B3864]/80 backdrop-blur-sm border-[2px] border-[#38467A] shadow-[0_15px_40px_rgba(0,0,0,0.3)] rounded-3xl p-8 transition-transform hover:-translate-y-1">
                  <p className="text-white leading-[1.8] text-[15px] font-medium">
                    <span className="block mb-2 font-semibold">Zumba trao cho trẻ "quyền bứt phá".</span>
                    Sau những giờ tập trung trí não, âm nhạc và nhịp điệu Zumba là chất xúc tác mạnh mẽ nhất để xóa tan căng thẳng và quản lý cảm xúc tốt hơn.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Dự án Quân Cờ Hạnh Phúc */}
        <section className="py-20 md:py-28 bg-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-stretch">
              
              {/* Left: Logo & Partners */}
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-between">
                {/* Logo Quân Cờ Hạnh Phúc thật */}
                <div className="mb-8 w-full flex justify-center">
                  <img src={logoHappyChess} alt="Quân Cờ Hạnh Phúc" className="w-full max-w-[420px] object-contain" />
                </div>
                
                <div className="w-full max-w-lg">
                  <div className="flex justify-center -mb-4 relative z-10">
                    <span className="inline-block bg-[#334274] text-white text-[13px] font-bold tracking-wide px-6 py-1.5 rounded-full">
                      Đơn vị đồng hành
                    </span>
                  </div>
                  <div className="border-[2px] border-[#334274] rounded-3xl p-6 pt-10 flex flex-col items-center gap-6 bg-white">
                    {/* Hàng trên: 4 logo */}
                    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-4 w-full">
                      <img src={logoFide} alt="FIDE" className="h-10 md:h-12 w-auto object-contain" />
                      <img src={logoFideSocial} alt="FIDE Social Chess Year" className="h-10 md:h-12 w-auto object-contain" />
                      <img src={logoLdcvn} alt="LĐCVN" className="h-10 md:h-12 w-auto object-contain" />
                      <img src={logoTheGrand} alt="The Grand Ho Tram" className="h-10 md:h-12 w-auto object-contain" />
                    </div>
                    {/* Hàng dưới: 2 logo */}
                    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 lg:gap-10 w-full mt-2 lg:mt-0">
                      <img src={logoChessCom} alt="Chess.com" className="h-9 md:h-11 w-auto object-contain" />
                      <img src={logoKingViet} alt="KingViet" className="h-9 md:h-11 w-auto object-contain" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Text content */}
              <div className="w-full lg:w-1/2 flex flex-col items-start text-gray-600 leading-[1.8] text-[15px] md:text-base">
                <div className="mb-4">
                  <span className="inline-block bg-[#334274] text-white text-[13px] font-bold px-6 py-2 rounded-full mb-6">
                    Dự án tiêu biểu
                  </span>
                  <h2 className="text-3xl lg:text-4xl xl:text-[40px] font-bold text-[#F4C542] lg:whitespace-nowrap">
                    Dự án Quân Cờ Hạnh Phúc
                  </h2>
                </div>
                <p>
                  Khởi xướng từ năm 2023 bởi TS. Nguyễn Trà Giang - Phó chủ tịch Liên đoàn Cờ Việt Nam, dự án không dừng lại ở một sự kiện phong trào, <strong className="text-gray-800 font-bold">"Quân Cờ Hạnh Phúc"</strong> còn là chuỗi hoạt động dài hạn được KingViet Education tâm huyết duy trì cùng Liên đoàn Cờ Việt Nam qua nhiều mùa triển khai. Chúng tôi mang lớp học cờ vua kết hợp vận động âm nhạc đến với những trẻ em thiếu thốn điều kiện tiếp cận giáo dục thể chất chuẩn mực.
                </p>
                <p>
                  KingViet Education đồng hành với vai trò là đơn vị tổ chức và thực hiện các buổi cờ vua và zumba cho các em có hoàn cảnh khó khăn tại các làng trẻ em, mái ấm tình thương trên cả nước. Từ đó hoàn thành sứ mệnh chung của dự án: Trao tặng 100.000 bộ bàn cờ và xây dựng mạng lưới 1.000 Huấn luyện viên tình nguyện trên khắp mọi miền Tổ quốc.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Gallery 10 ảnh bay bay */}
        <FloatingImageGallery images={galleryImages} />

      </main>

      <Footer />
    </div>
  );
};

export default EmpoweringChildren;
