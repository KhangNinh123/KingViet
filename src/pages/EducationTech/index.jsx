import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InnerPageHero from "../../components/sections/InnerPageHero";
import charImg from "../../assets/images/char-congnghecovua.png";
import stemLogo from "../../assets/images/stem-logo.png";
import chessupBoard from "../../assets/images/chessup-board.png";
import ImageGallerySection from "../../components/sections/ImageGallerySection";
import {
  BadgeCheck,
  GraduationCap,
  Network,
  BrainCircuit,
  BarChart3,
  Cpu,
  Calculator,
  MonitorPlay,
  Building2,
  Users,
  CheckCircle2,
  Lightbulb,
  Brain,
  Globe,
  Wifi,
  BatteryFull,
  ShieldCheck,
  Zap,
  Eye,
  Swords,
  ChartLine,
} from "lucide-react";

const EducationTech = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />

      <main className="flex-grow">
        <InnerPageHero
          title="Công nghệ cờ vua trong giáo dục"
          description="Giải pháp STEM hiện đại giúp học sinh phát triển tư duy chiến lược, logic và khả năng giải quyết vấn đề thông qua bàn cờ thông minh ChessUp V2."
          breadcrumbs={[
            { label: "Lĩnh vực", path: "#" },
            { label: "Công nghệ trong giáo dục", path: "" },
          ]}
          image={charImg}
        />

        {/* --- FEATURES SECTION --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start justify-center divide-y md:divide-y-0 md:divide-x-2 divide-[#22305C]/20">
            {/* Feature 1 */}
            <div className="flex-1 flex flex-col items-center text-center px-4 md:px-8 py-8 md:py-0 w-full">
              <div className="mb-6">
                <BadgeCheck
                  size={56}
                  className="text-[#22305C]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#22305C] mb-4 whitespace-pre-line leading-tight">
                Nhà phân phối{"\n"}độc quyền
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] lg:text-base">
                KingViet Education tự hào là đơn vị cung cấp giải pháp ChessUp
                chính hãng tại Việt Nam.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex-1 flex flex-col items-center text-center px-4 md:px-8 py-8 md:py-0 w-full">
              <div className="mb-6">
                <GraduationCap
                  size={56}
                  className="text-[#22305C]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#22305C] mb-4 whitespace-pre-line leading-tight">
                Ứng dụng STEM
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] lg:text-base">
                Tích hợp giáo dục STEM giúp học sinh phát triển toàn diện kỹ
                năng phân tích và giải quyết vấn đề.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex-1 flex flex-col items-center text-center px-4 md:px-8 py-8 md:py-0 w-full">
              <div className="mb-6">
                <Network
                  size={56}
                  className="text-[#22305C]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#22305C] mb-4 whitespace-pre-line leading-tight">
                Giải pháp{"\n"}trường học
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] lg:text-base">
                Hệ thống hỗ trợ giảng dạy hiện đại dành riêng cho các trung tâm
                và trường học quốc tế.
              </p>
            </div>
          </div>
        </section>

        {/* --- STEM SOLUTION SECTION --- */}
        <section className="bg-[#1E2954] py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left Content */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-5 mb-8">
                  <div className="bg-white p-3 rounded-2xl flex-shrink-0 w-20 h-20 flex items-center justify-center">
                    {/* Placeholder for STEM Logo */}
                    <img
                      src={stemLogo}
                      alt="STEM"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white mb-2 leading-tight">
                      Giới thiệu giải pháp STEM
                    </h2>
                    <p className="text-[#FDE6B4] font-medium text-lg">
                      Được chứng nhận bởi STEM.org
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg mb-10">
                  STEM không chỉ là các môn học riêng lẻ, mà là sự kết hợp của
                  Khoa học (Science), Công nghệ (Technology), Kỹ thuật
                  (Engineering) và Toán học (Math). Thông qua cờ vua, chúng tôi
                  kiến tạo môi trường học tập giúp học sinh phát triển logic,
                  khả năng phân tích đa chiều và xây dựng chiến lược dài hạn.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                  <div className="flex items-center gap-3">
                    <BrainCircuit className="w-5 h-5 text-[#FDE6B4]" />
                    <span className="text-white font-medium">
                      Tư duy logic & phản biện
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-[#FDE6B4]" />
                    <span className="text-white font-medium">
                      Phân tích dữ liệu thời gian thực
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-[#FDE6B4]" />
                    <span className="text-white font-medium">
                      Kỹ thuật & Công nghệ số
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calculator className="w-5 h-5 text-[#FDE6B4]" />
                    <span className="text-white font-medium">
                      Toán học ứng dụng
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:w-1/2 relative mt-10 lg:mt-0">
                <img
                  src={chessupBoard}
                  alt="Bàn cờ thông minh ChessUp"
                  className="w-full h-auto rounded-3xl object-cover shadow-2xl"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#FDECC8] rounded-xl p-5 shadow-xl border border-white/20">
                  <p className="text-[#1E2954] font-bold text-xl mb-1">
                    STEM Certified
                  </p>
                  <p className="text-[#1E2954]/80 text-sm font-medium">
                    Global Educational Standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SOLUTIONS FOR EDUCATORS SECTION --- */}
        <section className="bg-[#F8F9FC] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E2954] mb-4">
                Giải pháp dành cho Tổ chức Giáo dục
              </h2>
              <p className="text-gray-600 text-lg">
                Đồng hành cùng các nhà giáo dục trong việc đổi mới phương thức
                truyền đạt tri thức.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: Giáo viên */}
              <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full transition-transform hover:-translate-y-1 duration-300">
                <MonitorPlay
                  className="w-8 h-8 text-[#1E2954] mb-6"
                  strokeWidth={2}
                />
                <h3 className="text-xl font-bold text-[#1E2954] mb-6">
                  Dành cho Giáo viên
                </h3>
                <ul className="space-y-5 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#E5B034] shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-600 font-medium">
                      Trình chiếu TV & Phân tích trực tiếp
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#E5B034] shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-600 font-medium">
                      Quản lý học sinh tập trung
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#E5B034] shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-600 font-medium">
                      Tổ chức giải đấu tương tác
                    </span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Nhà trường (Highlighted) */}
              <div className="bg-[#1E2954] p-8 lg:p-10 rounded-3xl shadow-xl flex flex-col h-full relative transition-transform hover:-translate-y-1 duration-300 transform md:-translate-y-2">
                <Building2
                  className="w-8 h-8 text-[#E5B034] mb-6"
                  strokeWidth={2}
                />
                <h3 className="text-xl font-bold text-[#E5B034] mb-6">
                  Dành cho Nhà trường
                </h3>
                <ul className="space-y-5 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#E5B034] shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-200 font-medium">
                      Nâng cao uy tín đào tạo STEM
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#E5B034] shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-200 font-medium">
                      Học tập dựa trên trải nghiệm
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#E5B034] shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-200 font-medium">
                      Thu hút học sinh & phụ huynh
                    </span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Câu lạc bộ */}
              <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full transition-transform hover:-translate-y-1 duration-300">
                <Users
                  className="w-8 h-8 text-[#1E2954] mb-6"
                  strokeWidth={2}
                />
                <h3 className="text-xl font-bold text-[#1E2954] mb-6">
                  Dành cho Câu lạc bộ
                </h3>
                <ul className="space-y-5 flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#E5B034] shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-600 font-medium">
                      Đa dạng cấp độ AI (Stockfish)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#E5B034] shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-600 font-medium">
                      Phân tích lỗi sai thời gian thực
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#E5B034] shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-600 font-medium">
                      Thi đấu Online toàn cầu
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- CHESSUP V2 SECTION --- */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Row 1: Image + Intro */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">
              {/* Left: Image */}
              <div className="lg:w-1/2 relative w-full">
                <img
                  src={chessupBoard}
                  alt="Bàn cờ thông minh ChessUp V2"
                  className="w-full h-auto rounded-3xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                />
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-[#1E2954] text-white font-bold py-2.5 px-5 rounded-xl shadow-lg text-sm tracking-wide">
                  New Version 2
                </div>
              </div>

              {/* Right: Title + Badge + Intro + Tags */}
              <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1E2954] mb-4 leading-[1.15]">
                  Bàn cờ thông minh
                  <br />
                  ChessUp V2
                </h2>

                {/* Chess.com Badge */}
                <div className="flex items-center gap-2 mb-6 bg-[#F8F9FC] border border-gray-200 rounded-xl px-4 py-2.5 w-fit">
                  <span className="text-gray-500 text-sm font-medium">Đồng hành hỗ trợ chính thức bởi</span>
                  <span className="text-[#1E2954] font-bold text-sm">Chess.com</span>
                </div>

                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  ChessUp V2 là bàn cờ thông minh thế hệ mới, mang đến trải nghiệm luyện tập – học tập – thi đấu cờ vua hoàn toàn mới.
                </p>

                {/* Quick highlight tags */}
                <div className="flex flex-wrap gap-2.5">
                  {["Đèn LED hướng dẫn", "AI Stockfish", "Chess.com & Lichess", "HDMI / AirPlay", "Bot nhiều cấp độ"].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 bg-[#FDECC8] text-[#1E2954] text-[13px] font-semibold px-3 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5B034] inline-block" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: 5 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              <div className="bg-[#F8F9FC] rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#FDECC8] rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-[#1E2954]" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[#1E2954] font-bold text-sm mb-2">Tính năng nổi bật</h4>
                  <ul className="text-gray-500 text-[13px] space-y-1">
                    <li>• Hướng dẫn nước đi bằng đèn LED</li>
                    <li>• Hiển thị các nước đi hợp lệ</li>
                    <li>• Hỗ trợ người mới học cờ</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F8F9FC] rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#FDECC8] rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-[#1E2954]" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[#1E2954] font-bold text-sm mb-2">AI phân tích ván cờ</h4>
                  <ul className="text-gray-500 text-[13px] space-y-1">
                    <li>• Phân tích nước đi thời gian thực</li>
                    <li>• Đánh giá chất lượng nước đi</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F8F9FC] rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#FDECC8] rounded-xl flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-[#1E2954]" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[#1E2954] font-bold text-sm mb-2">Bot AI luyện tập</h4>
                  <ul className="text-gray-500 text-[13px] space-y-1">
                    <li>• Nhiều cấp độ</li>
                    <li>• Mô phỏng phong cách các kỳ thủ</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F8F9FC] rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#FDECC8] rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#1E2954]" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[#1E2954] font-bold text-sm mb-2">Kết nối cờ vua online</h4>
                  <ul className="text-gray-500 text-[13px] space-y-1">
                    <li>• Chess.com</li>
                    <li>• Lichess</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F8F9FC] rounded-2xl p-6 flex gap-4 sm:col-span-2">
                <div className="w-10 h-10 shrink-0 bg-[#FDECC8] rounded-xl flex items-center justify-center">
                  <MonitorPlay className="w-5 h-5 text-[#1E2954]" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[#1E2954] font-bold text-sm mb-2">Kết nối lớp học</h4>
                  <ul className="text-gray-500 text-[13px] flex flex-wrap gap-x-6 gap-y-1">
                    <li>• HDMI</li>
                    <li>• Chromecast</li>
                    <li>• AirPlay</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Row 3: Full-width 4-card Specs Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#1E2954] rounded-2xl px-4 py-5 flex flex-col items-center text-center">
                <Eye className="w-7 h-7 text-[#E5B034] mb-3" strokeWidth={1.5} />
                <p className="text-white font-bold text-sm leading-tight">Quân cờ gắn chip</p>
                <p className="text-gray-400 text-xs mt-1">Nhận diện thông minh</p>
              </div>
              <div className="bg-[#1E2954] rounded-2xl px-4 py-5 flex flex-col items-center text-center">
                <MonitorPlay className="w-7 h-7 text-[#E5B034] mb-3" strokeWidth={1.5} />
                <p className="text-white font-bold text-sm leading-tight">Màn hình cảm ứng</p>
                <p className="text-gray-400 text-xs mt-1">Trực quan hiện đại</p>
              </div>
              <div className="bg-[#1E2954] rounded-2xl px-4 py-5 flex flex-col items-center text-center">
                <ShieldCheck className="w-7 h-7 text-[#E5B034] mb-3" strokeWidth={1.5} />
                <p className="text-white font-bold text-sm leading-tight">Thiết kế bền vững</p>
                <p className="text-gray-400 text-xs mt-1">Chất liệu cao cấp</p>
              </div>
              <div className="bg-[#1E2954] rounded-2xl px-4 py-5 flex flex-col items-center text-center">
                <BatteryFull className="w-7 h-7 text-[#E5B034] mb-3" strokeWidth={1.5} />
                <p className="text-white font-bold text-sm leading-tight">Thời lượng pin</p>
                <p className="text-gray-400 text-xs mt-1">Lên đến 6 giờ</p>
              </div>
            </div>

          </div>
        </section>

        {/* --- IMAGE GALLERY SECTION --- */}
        <section className="bg-white py-10 lg:py-16">
          <ImageGallerySection title="Hình ảnh lớp học thực tế" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EducationTech;
