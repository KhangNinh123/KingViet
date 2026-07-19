import React from 'react';
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InnerPageHero from "../../components/sections/InnerPageHero";
import bannerAbout from "../../assets/images/banners/banner-ve-chung-toi.webp";
import imgTamNhin from "../../assets/images/about/tam-nhin.webp";
import imgSuMenh from "../../assets/images/about/su-menh.webp";
import drJaneImg from "../../assets/images/home/Dr.Jane 1.webp";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />

      <main className="flex-grow">
        {/* ── HERO ── */}
        <InnerPageHero
          title="Về Chúng Tôi"
          description="KingViet Education mong muốn kết nối tri thức, lan tỏa giá trị thông qua các lĩnh vực giáo dục và thể thao."
          breadcrumbs={[{ label: "Về chúng tôi", path: "" }]}
          backgroundImage={bannerAbout}
        />

        {/* ── VISION & MISSION ── */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-10">
              <span className="bg-[#22305C] text-white px-6 py-2 rounded-full font-bold text-sm shadow-md">
                Định hướng phát triển
              </span>
            </div>

            <div className="space-y-8">
              {/* Tầm nhìn */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
                <img
                  src={imgTamNhin}
                  alt="Tầm nhìn"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center px-8 md:px-16">
                  <h3 className="text-white text-3xl md:text-5xl font-bold mb-4">
                    Tầm nhìn
                  </h3>
                  <p className="text-white text-sm md:text-lg max-w-md leading-relaxed">
                    Trở thành hệ sinh thái giáo dục hàng đầu tại Việt Nam và khu vực trong việc tích hợp công nghệ, thể thao và trí tuệ; kiến tạo một thế hệ công dân toàn cầu phát triển toàn diện cả về thể chất, tư duy và lòng nhân ái.
                  </p>
                </div>
              </div>

              {/* Sứ mệnh */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
                <img
                  src={imgSuMenh}
                  alt="Sứ mệnh"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center px-8 md:px-16">
                  <h3 className="text-white text-3xl md:text-5xl font-bold mb-4">
                    Sứ mệnh
                  </h3>
                  <p className="text-white text-sm md:text-lg max-w-md leading-relaxed">
                    Là một tổ chức giáo dục không vì lợi nhuận, KingViet Education cam kết lan tỏa tri thức và trao quyền cho mọi lứa tuổi thông qua các dự án cộng đồng, ứng dụng công nghệ và các hoạt động giáo dục mang tầm quốc tế.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE VALUES (PHI) ── */}
        <section className="bg-[#22305C] py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[#F4C150] text-3xl font-bold mb-12">
              Giá Trị Cốt Lõi
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="text-white text-6xl md:text-[80px] font-bold mb-4 leading-none">P</div>
                <div className="text-white font-bold mb-2">Pioneering</div>
                <div className="text-white text-xs md:text-sm italic">
                  Ứng dụng công nghệ<br />hiện đại vào giảng dạy
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-[#F4C150] text-6xl md:text-[80px] font-bold mb-4 leading-none">H</div>
                <div className="text-white font-bold mb-2">Holistic</div>
                <div className="text-white text-xs md:text-sm italic">
                  Cân bằng tư duy<br />thể chất & cảm xúc
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-white text-6xl md:text-[80px] font-bold mb-4 leading-none">I</div>
                <div className="text-white font-bold mb-2">Inclusivity</div>
                <div className="text-white text-xs md:text-sm italic">
                  Bình đẳng<br />trao cơ hội cho<br />mọi trẻ em
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DR JANE ── */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="text-gray-600 italic mb-2 text-sm md:text-base">Giám đốc KingViet Education</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#22305C]">
                TS. Nguyễn Trà Giang - Dr. Jane Nguyen
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
              <div className="w-[200px] md:w-1/3 flex justify-center md:justify-end">
                <div className="w-[200px] h-auto rounded-3xl shadow-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img 
                    src={drJaneImg} 
                    alt="Dr. Jane Nguyen" 
                    className="w-full h-full object-cover object-bottom" 
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 px-4 md:px-0">
                <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                  TS. Nguyễn Trà Giang là chuyên gia xuất sắc trong lĩnh vực Quản lý Thể thao với hơn 20 năm kinh nghiệm giảng dạy tại 35 quốc gia, đảm nhiệm nhiều vị trí chiến lược:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
                  <li>Phó Chủ tịch Hội Khoa học & Thể dục thể thao Việt Nam (2026).</li>
                  <li>Phó Chủ tịch Liên đoàn Cờ Việt Nam (2023).</li>
                  <li>Phó Trưởng khoa Khoa học Thể thao tại Đại học Bangkokthonburi (Thái Lan) – nơi đào tạo hơn 400 VĐV đội tuyển quốc gia.</li>
                  <li>Tổng thư ký Liên đoàn Khúc côn cầu trên băng Thái Lan.</li>
                  <li>Tác giả người Việt đầu tiên xuất bản sách khoa học thể thao bằng tiếng Anh "A Unified System Fitness Design" (Routledge Anh Quốc, 2025).</li>
                  <li>Nhà sáng lập dự án cộng đồng "Quân cờ hạnh phúc" (Happy Chess) lan tỏa yêu thương đến trẻ em khó khăn.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── LỚP HỌC ĐẶC BIỆT ── */}
        <section className="bg-white py-8 pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="bg-[#22305C] text-white px-6 py-2 rounded-full font-bold text-sm inline-block mb-6 shadow-md">
                Lớp học đặc biệt
              </span>
              <h2 className="text-2xl md:text-[32px] font-bold text-[#F4C150] mb-4">
                Lớp học Cờ Vua Công Nghệ
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
                Cờ vua công nghệ - KingViet Education. Ra đời với sứ mệnh đưa cờ vua đến gần hơn với thế hệ trẻ, Royalchess Khang Điền mang đến trải nghiệm giáo dục toàn diện vượt ra khỏi một lớp học thông thường.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-gray-50 flex flex-col items-center">
                <div className="w-10 h-1 bg-[#22305C] mb-6 rounded-full"></div>
                <h3 className="font-bold text-[#22305C] mb-4">Cơ sở vật chất</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Hiện đại, không gian học tập thân thiện và truyền cảm hứng.</p>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-gray-50 flex flex-col items-center">
                <div className="w-10 h-1 bg-[#C8102E] mb-6 rounded-full"></div>
                <h3 className="font-bold text-[#22305C] mb-4">Đội ngũ Huấn luyện viên</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Chuyên nghiệp, giàu kinh nghiệm và đồng hành tận tâm.</p>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-gray-50 flex flex-col items-center">
                <div className="w-10 h-1 bg-[#F4C150] mb-6 rounded-full"></div>
                <h3 className="font-bold text-[#22305C] mb-4">Phương pháp giảng dạy</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Tích hợp công nghệ hiện đại và các hoạt động trải nghiệm ngoại khóa đa dạng.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
