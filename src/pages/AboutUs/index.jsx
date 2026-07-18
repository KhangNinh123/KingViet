import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InnerPageHero from "../../components/sections/InnerPageHero";
import bannerAbout from "../../assets/images/banners/banner-ve-chung-toi.png";
import imgTamNhin from "../../assets/images/about/tam-nhin.JPG";
import imgSuMenh from "../../assets/images/about/su-menh.JPG";
import logoKingviet from "../../assets/images/logos/kingviet.png";
import logoLdcvn from "../../assets/images/logos/ldcvn.png";
import logoBangkok from "../../assets/images/logos/bangkok-university.png";
import logoRoutledge from "../../assets/images/logos/routledge.png";
import {
  Globe,
  BookOpen,
  Trophy,
  Heart,
  Users,
  Lightbulb,
  Target,
  Star,
} from "lucide-react";

/* ─────────────────────────────────────────────
   PHI Core Values
───────────────────────────────────────────── */
const coreValues = [
  {
    letter: "P",
    en: "Pioneering",
    vi: "Tiên Phong",
    color: "#22305C",
    desc: "Ứng dụng công nghệ hiện đại vào giảng dạy",
    subDesc:
      "KingViet Education không ngừng tìm kiếm và tích hợp những giải pháp công nghệ tiên tiến nhất, đặt nền tảng cho một phương pháp giáo dục mang tầm vóc thời đại.",
    icon: Lightbulb,
  },
  {
    letter: "H",
    en: "Holistic",
    vi: "Toàn Diện",
    color: "#C8102E",
    desc: "Cân bằng tư duy, thể chất và cảm xúc",
    subDesc:
      "Chúng tôi tin tưởng vào sự phát triển toàn diện — cân bằng giữa tư duy logic, thể chất khỏe mạnh và trí tuệ cảm xúc để tạo nên những con người trọn vẹn.",
    icon: Target,
  },
  {
    letter: "I",
    en: "Inclusivity",
    vi: "Nhân Ái",
    color: "#E5B034",
    desc: "Trao cơ hội cho mọi trẻ em",
    subDesc:
      "Thúc đẩy bình đẳng giáo dục, trao cơ hội phát triển cho cộng đồng và trẻ em yếu thế. Mỗi đứa trẻ đều xứng đáng được chắp cánh ước mơ.",
    icon: Heart,
  },
];

/* ─────────────────────────────────────────────
   Ecosystem items
───────────────────────────────────────────── */
const ecosystemItems = [
  {
    icon: Lightbulb,
    title: "Ứng dụng công nghệ",
    desc: "Đơn vị phân phối độc quyền bàn cờ thông minh AI ChessUp tại Việt Nam.",
  },
  {
    icon: BookOpen,
    title: "Sách & Tạp chí",
    desc: "Xuất bản các tài liệu nghiên cứu chuyên sâu về giáo dục, thể thao và khoa học.",
  },
  {
    icon: Trophy,
    title: "Tổ chức sự kiện",
    desc: "Vận hành các giải đấu thể thao trí tuệ, hội thảo, tọa đàm khoa học.",
  },
  {
    icon: Heart,
    title: "Dự án cộng đồng",
    desc: "Triển khai chuỗi dự án nhân văn (Happy Chess), mang giáo dục đến trẻ em yếu thế.",
  },
  {
    icon: Globe,
    title: "Trải nghiệm quốc tế",
    desc: "Tổ chức du học trải nghiệm, trại hè và giao lưu văn hóa toàn cầu.",
  },
];

/* ─────────────────────────────────────────────
   Partners
───────────────────────────────────────────── */
const partners = [
  { name: "KingViet Education", logo: logoKingviet },
  { name: "Liên đoàn Cờ Việt Nam", logo: logoLdcvn },
  { name: "Đại học Bangkokthonburi", logo: logoBangkok },
  { name: "Routledge UK", logo: logoRoutledge },
];

/* ─────────────────────────────────────────────
   Main Page Component
───────────────────────────────────────────── */
const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />

      <main className="flex-grow">
        {/* ── HERO ── */}
        <InnerPageHero
          title="Về Chúng Tôi"
          description="KingViet Education — Hệ sinh thái giáo dục tích hợp công nghệ, thể thao và trí tuệ, kiến tạo thế hệ công dân toàn cầu."
          breadcrumbs={[{ label: "Về chúng tôi", path: "" }]}
          backgroundImage={bannerAbout}
        />

        {/* ── VISION & MISSION ── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-16 lg:mb-20">
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#C8102E] uppercase mb-3">
                Định hướng phát triển
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#22305C] mb-4">
                Tầm nhìn &amp; Sứ mệnh
              </h2>
              <div className="w-16 h-1 bg-[#E5B034] mx-auto rounded-full" />
            </div>

            {/* Vision — image left, text right */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20 lg:mb-28">
              {/* Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src={imgTamNhin}
                    alt="Tầm nhìn KingViet"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* overlay badge */}
                  <div className="absolute top-5 left-5 bg-[#22305C] text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-xl">
                    Vision
                  </div>
                </div>
                {/* decorative accent */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#E5B034]/20 rounded-3xl -z-10" />
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#22305C] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">Vision</p>
                    <h3 className="text-2xl font-bold text-[#22305C] leading-tight">Tầm nhìn</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  Trở thành hệ sinh thái giáo dục hàng đầu tại Việt Nam và khu vực trong việc tích hợp công nghệ, thể thao và trí tuệ; kiến tạo một thế hệ công dân toàn cầu phát triển toàn diện cả về thể chất, tư duy và lòng nhân ái.
                </p>
              </div>
            </div>

            {/* Mission — text left, image right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
              {/* Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src={imgSuMenh}
                    alt="Sứ mệnh KingViet"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* overlay badge */}
                  <div className="absolute top-5 left-5 bg-[#C8102E] text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-xl">
                    Mission
                  </div>
                </div>
                {/* decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#22305C]/10 rounded-3xl -z-10" />
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#C8102E] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">Mission</p>
                    <h3 className="text-2xl font-bold text-[#22305C] leading-tight">Sứ mệnh</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  Là một tổ chức giáo dục không vì lợi nhuận, KingViet Education cam kết lan tỏa tri thức và trao quyền cho mọi lứa tuổi thông qua các dự án cộng đồng, ứng dụng công nghệ và các hoạt động giáo dục mang tầm quốc tế.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ── PHI CORE VALUES ── */}
        <section className="bg-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#C8102E] uppercase mb-3">
                Core Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#22305C] mb-4">
                Giá Trị Cốt Lõi
              </h2>
              <div className="w-16 h-1 bg-[#E5B034] mx-auto rounded-full" />
            </div>

            {/* PHI Letters + Subtitle — full width grid */}
            <div className="grid grid-cols-3 w-full mb-16">
              {coreValues.map((v, i) => (
                <div key={i} className="flex flex-col items-center text-center px-4">
                  <span
                    className="font-black leading-none select-none block"
                    style={{
                      fontSize: "clamp(6rem, 22vw, 18rem)",
                      color: v.color,
                      fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
                    }}
                  >
                    {v.letter}
                  </span>
                  <p className="text-xs sm:text-sm font-bold tracking-widest text-gray-500 uppercase mt-3">
                    {v.en}
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-1 leading-snug max-w-[140px]">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ── DR. JANE SECTION ── */}
        <section className="bg-[#22305C] py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#E5B034] uppercase mb-3">
                Lãnh đạo
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Giám đốc KingViet Education
              </h2>
              <div className="w-16 h-1 bg-[#E5B034] mx-auto rounded-full" />
            </div>

            <div className="bg-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-white/20">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Left */}
                <div className="lg:w-1/3 w-full">
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                    <div className="w-20 h-20 bg-[#E5B034]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-[#E5B034]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">TS. Nguyễn Trà Giang</h3>
                    <p className="text-[#E5B034] font-semibold text-sm mb-1">Dr. Jane</p>
                    <p className="text-gray-300 text-xs">Giám đốc KingViet Education</p>
                  </div>
                  <div className="mt-6 space-y-3">
                    {["20+ năm kinh nghiệm", "Giảng dạy tại 35 quốc gia", "Chuyên gia Quản lý Thể thao"].map((t) => (
                      <div key={t} className="flex items-center gap-3 text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5B034] flex-shrink-0" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="lg:w-2/3 w-full">
                  <p className="text-gray-300 leading-relaxed mb-8">
                    TS. Nguyễn Trà Giang là chuyên gia xuất sắc trong lĩnh vực Quản lý Thể thao
                    với hơn 20 năm kinh nghiệm giảng dạy tại 35 quốc gia, đảm nhiệm nhiều vị
                    trí chiến lược trong các tổ chức thể thao hàng đầu.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Phó Chủ tịch Hội Khoa học & TDTT Việt Nam (2026)",
                      "Phó Chủ tịch Liên đoàn Cờ Việt Nam (2023)",
                      "Phó Trưởng khoa Khoa học Thể thao — ĐH Bangkokthonburi",
                      "Tổng thư ký LĐ Khúc côn cầu trên băng Thái Lan",
                      "Tác giả \"A Unified System Fitness Design\" — Routledge UK (2025)",
                      "Nhà sáng lập dự án \"Quân cờ hạnh phúc\" (Happy Chess)",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                        <span className="w-5 h-5 rounded-full bg-[#E5B034]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E5B034]" />
                        </span>
                        <span className="text-gray-300 text-sm leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ECOSYSTEM ── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 lg:mb-16">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#C8102E] uppercase mb-3">
                  Hoạt động
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#22305C]">
                  Hệ Sinh Thái Hoạt Động
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
                5 lĩnh vực cốt lõi tạo nên hệ sinh thái giáo dục toàn diện của KingViet.
              </p>
            </div>

            {/* Item list */}
            <div className="divide-y divide-gray-100">
              {ecosystemItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group flex flex-col sm:flex-row sm:items-center gap-5 py-7 hover:bg-[#F8F9FC] -mx-4 px-4 rounded-2xl transition-colors duration-200 cursor-default"
                  >
                    {/* Number */}
                    <span
                      className="text-5xl font-black leading-none select-none flex-shrink-0 w-14 text-center"
                      style={{
                        color: i % 2 === 0 ? "#22305C" : "#E5B034",
                        fontFamily: "'Arial Black', sans-serif",
                        opacity: 0.18,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#22305C]/6 group-hover:bg-[#22305C] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#22305C] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#22305C] text-base mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden sm:flex w-8 h-8 rounded-full border border-gray-200 items-center justify-center flex-shrink-0 group-hover:border-[#22305C] group-hover:bg-[#22305C] transition-all duration-300">
                      <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ── ROYALCHESS KHANG ĐIỀN ── */}
        <section className="bg-[#F8F9FC] py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

              {/* Left: Text content */}
              <div className="w-full lg:w-1/2">
                <span className="inline-block text-xs font-bold tracking-[0.2em] text-[#C8102E] uppercase mb-4">
                  Đơn vị trực thuộc
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#22305C] mb-5 leading-tight">
                  RoyalChess<br />Khang Điền
                </h2>
                <div className="w-12 h-1 bg-[#E5B034] rounded-full mb-6" />
                <p className="text-gray-500 leading-relaxed text-base mb-8">
                  Đơn vị trực thuộc <strong className="text-[#22305C]">Cờ vua công nghệ — KingViet Education</strong>. Ra đời với sứ mệnh đưa cờ vua đến gần hơn với thế hệ trẻ, Royalchess Khang Điền mang đến trải nghiệm giáo dục toàn diện vượt ra khỏi một lớp học thông thường.
                </p>

                {/* 3 highlight items */}
                <div className="space-y-4">
                  {[
                    {
                      label: "Cơ sở vật chất",
                      desc: "Hiện đại, không gian học tập thân thiện và truyền cảm hứng.",
                      color: "#22305C",
                    },
                    {
                      label: "Đội ngũ Huấn luyện viên",
                      desc: "Chuyên nghiệp, giàu kinh nghiệm và đồng hành tận tâm.",
                      color: "#C8102E",
                    },
                    {
                      label: "Phương pháp giảng dạy",
                      desc: "Tích hợp công nghệ hiện đại và các hoạt động trải nghiệm ngoại khóa đa dạng.",
                      color: "#E5B034",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm">
                      <div
                        className="w-1 rounded-full flex-shrink-0 self-stretch"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <p className="font-bold text-[#22305C] text-sm mb-1">{item.label}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Big dark card */}
              <div className="w-full lg:w-1/2">
                <div className="bg-[#22305C] rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                  {/* Watermark letter */}
                  <span
                    className="absolute -right-4 -bottom-6 font-black select-none pointer-events-none leading-none opacity-[0.08] text-white"
                    style={{ fontSize: "10rem", fontFamily: "'Arial Black', sans-serif" }}
                  >
                    R
                  </span>

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-[#E5B034]/20 border border-[#E5B034]/30 rounded-xl px-4 py-2 mb-8">
                      <span className="w-2 h-2 rounded-full bg-[#E5B034]" />
                      <span className="text-[#E5B034] text-xs font-bold tracking-widest uppercase">Thuộc KingViet Education</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">RoyalChess Khang Điền</h3>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                      Trung tâm cờ vua công nghệ tiên phong tại khu đô thị Khang Điền, TP.HCM.
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[
                        { num: "100+", label: "Học viên" },
                        { num: "5+", label: "Huấn luyện viên" },
                        { num: "3+", label: "Năm hoạt động" },
                      ].map((stat, i) => (
                        <div key={i} className="bg-white/8 rounded-2xl px-3 py-4 text-center border border-white/10">
                          <p className="text-2xl font-black text-white leading-none mb-1">{stat.num}</p>
                          <p className="text-gray-400 text-xs">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 bg-white/8 rounded-2xl px-5 py-4 border border-white/10">
                      <Trophy className="w-5 h-5 text-[#E5B034] flex-shrink-0" strokeWidth={2} />
                      <p className="text-gray-300 text-sm leading-snug">
                        Tổ chức giải đấu <strong className="text-white">Happy Chess & Friendship Tournament</strong> thường niên
                      </p>
                    </div>
                  </div>
                </div>
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
