import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InnerPageHero from "../../components/sections/InnerPageHero";
import charImg from "../../assets/images/char-sachtapchi.png";
import {
  BookOpen,
  BookMarked,
  FileText,
  Award,
  GraduationCap,
  FlaskConical,
  Dumbbell,
  Lightbulb,
  Users,
  Calendar,
  Mic,
  PenTool,
  Download,
  ArrowRight,
  Star,
  ChevronRight,
  Library,
  Newspaper,
  ScrollText,
  Sparkles,
  Send,
  Building2,
  Handshake,
  Mail,
  User,
  Heart,
  Target,
  Globe,
  Brain,
  Trophy,
} from "lucide-react";

const BooksAndMagazines = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Đăng ký thành công! Cảm ơn bạn đã quan tâm.");
    setFormData({ name: "", email: "", interest: "" });
  };

  const highlights = [
    { icon: <BookOpen size={28} strokeWidth={1.5} />, label: "Sách chuyên khảo" },
    { icon: <Newspaper size={28} strokeWidth={1.5} />, label: "Tạp chí nghiên cứu" },
    { icon: <ScrollText size={28} strokeWidth={1.5} />, label: "Tài liệu đào tạo" },
    { icon: <Award size={28} strokeWidth={1.5} />, label: "Ấn phẩm học thuật" },
  ];

  const educationBooks = [
    "Phương pháp giáo dục hiện đại",
    "Giáo dục STEM",
    "Công nghệ trong giáo dục",
    "Phát triển tư duy chiến lược",
  ];

  const sportScienceBooks = [
    "Sinh lý học thể thao",
    "Huấn luyện thể thao",
    "Phân tích hiệu suất vận động",
    "Khoa học vận động",
  ];

  const magazineTopics = [
    { icon: <GraduationCap size={32} strokeWidth={1.5} />, label: "Giáo dục" },
    { icon: <Dumbbell size={32} strokeWidth={1.5} />, label: "Khoa học thể thao" },
    { icon: <Lightbulb size={32} strokeWidth={1.5} />, label: "Công nghệ trong giáo dục" },
    { icon: <Trophy size={32} strokeWidth={1.5} />, label: "Quản lý thể thao" },
  ];

  const featuredBooks = [
    {
      title: "Khoa học Thể thao Cờ vua",
      description: "Tài liệu nghiên cứu chuyên sâu về khoa học vận động và huấn luyện thể thao Cờ vua theo phương pháp hiện đại.",
      author: "TS. Nguyễn Văn Minh",
      year: "2025",
      tag: "Mới xuất bản",
    },
    {
      title: "Giáo dục STEM ứng dụng",
      description: "Phương pháp giáo dục STEM tích hợp lý thuyết và thực hành dành cho giáo viên và nhà quản lý giáo dục.",
      author: "PGS.TS. Trần Thu Hà",
      year: "2024",
      tag: "Bán chạy",
    },
    {
      title: "Tư duy chiến lược trong giáo dục",
      description: "Xây dựng năng lực tư duy chiến lược cho người học thông qua các mô hình giáo dục tiên tiến.",
      author: "ThS. Lê Hoàng Nam",
      year: "2025",
      tag: "Nổi bật",
    },
  ];

  const libraryResources = [
    { icon: <FileText size={36} strokeWidth={1.5} />, title: "Tài liệu nghiên cứu", desc: "Các công trình nghiên cứu chuyên sâu về giáo dục và thể thao" },
    { icon: <BookMarked size={36} strokeWidth={1.5} />, title: "Ebook học thuật", desc: "Sách điện tử chuyên ngành phục vụ học tập và giảng dạy" },
    { icon: <ScrollText size={36} strokeWidth={1.5} />, title: "Báo cáo chuyên ngành", desc: "Các báo cáo phân tích và đánh giá chuyên sâu theo lĩnh vực" },
    { icon: <Library size={36} strokeWidth={1.5} />, title: "Tài liệu đào tạo", desc: "Giáo trình và tài liệu hỗ trợ đào tạo chuyên nghiệp" },
  ];

  const partners = [
    { icon: <GraduationCap size={32} strokeWidth={1.5} />, label: "Giảng viên" },
    { icon: <FlaskConical size={32} strokeWidth={1.5} />, label: "Nhà nghiên cứu" },
    { icon: <Brain size={32} strokeWidth={1.5} />, label: "Chuyên gia giáo dục" },
    { icon: <Building2 size={32} strokeWidth={1.5} />, label: "Tổ chức học thuật" },
  ];

  const collaborationTypes = [
    { icon: <PenTool size={28} strokeWidth={1.5} />, label: "Viết sách" },
    { icon: <BookOpen size={28} strokeWidth={1.5} />, label: "Xuất bản tài liệu" },
    { icon: <FileText size={28} strokeWidth={1.5} />, label: "Công bố nghiên cứu" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <InnerPageHero
          title={
            <>
              Sách & Tạp chí
              <br />
              chuyên sâu về giáo dục,
              <br />
              thể thao và khoa học
            </>
          }
          description="KingViet Education phát triển và xuất bản các tài liệu chuyên môn nhằm phục vụ nghiên cứu, giảng dạy và học tập trong lĩnh vực giáo dục, thể thao và khoa học ứng dụng."
          breadcrumbs={[
            { label: "Lĩnh vực", path: "#" },
            { label: "Sách & Tạp chí", path: "" },
          ]}
          image={charImg}
        />

        {/* Highlights Bar */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x-2 divide-[#22305C]/20">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center text-center px-4 md:px-8 py-8 md:py-0 w-full group cursor-default"
              >
                <div className="mb-4 text-[#22305C] transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#22305C] text-base md:text-lg">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#featured-books"
              className="inline-flex items-center gap-2 bg-[#22305C] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#161D30] transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <BookOpen size={18} strokeWidth={2} />
              Khám phá sách
            </a>
            <a
              href="#magazines"
              className="inline-flex items-center gap-2 border-2 border-[#22305C] text-[#22305C] font-semibold px-8 py-3.5 rounded-full hover:bg-[#22305C] hover:text-white transition-all duration-300 text-sm hover:-translate-y-0.5"
            >
              <Newspaper size={18} strokeWidth={2} />
              Xem tạp chí
            </a>
            <a
              href="#subscribe"
              className="inline-flex items-center gap-2 bg-[#E5B034] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#d4a02e] transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Mail size={18} strokeWidth={2} />
              Đăng ký nhận thông tin
            </a>
          </div>
        </section>

        {/* 2. Giới thiệu hoạt động xuất bản */}
        <section className="w-full bg-[#22305C] py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left Side - Mission */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 mb-6">
                  <Target size={16} className="text-[#E5B034]" />
                  <span className="text-[#E5B034] font-semibold text-sm uppercase tracking-wider">
                    Sứ mệnh
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Xây dựng hệ sinh thái
                  <br />
                  tri thức chuyên sâu
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
                  KingViet Education hướng tới việc xây dựng hệ sinh thái tri
                  thức chuyên sâu, kết nối các lĩnh vực trọng yếu:
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: <GraduationCap size={20} />, text: "Giáo dục" },
                    { icon: <Dumbbell size={20} />, text: "Thể thao" },
                    { icon: <FlaskConical size={20} />, text: "Khoa học ứng dụng" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 text-white font-medium text-sm backdrop-blur-sm"
                    >
                      {item.icon}
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Goals */}
              <div className="space-y-5">
                <h3 className="text-white/60 font-semibold text-sm uppercase tracking-wider mb-6">
                  Các ấn phẩm được phát triển nhằm
                </h3>
                {[
                  {
                    icon: <BookOpen size={24} strokeWidth={1.5} />,
                    title: "Hỗ trợ giảng dạy",
                    desc: "Cung cấp tài liệu chuyên ngành cho giảng viên và nhà đào tạo",
                  },
                  {
                    icon: <FlaskConical size={24} strokeWidth={1.5} />,
                    title: "Phục vụ nghiên cứu học thuật",
                    desc: "Nền tảng cho các công trình nghiên cứu khoa học chất lượng",
                  },
                  {
                    icon: <Lightbulb size={24} strokeWidth={1.5} />,
                    title: "Cung cấp kiến thức chuyên ngành",
                    desc: "Tri thức chuyên sâu dành cho cộng đồng học thuật và chuyên gia",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-5 items-start bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#E5B034] rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Danh mục sách chuyên ngành */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-[#22305C]/5 rounded-full px-5 py-2 mb-6">
            <Library size={16} className="text-[#22305C]" />
            <span className="text-[#22305C] font-semibold text-sm uppercase tracking-wider">
              Danh mục sách
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#22305C] mb-4">
            Sách chuyên ngành
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
            Các đầu sách được biên soạn và xuất bản bởi đội ngũ chuyên gia hàng đầu
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
            {/* Education Card */}
            <div className="border-2 border-[#22305C] rounded-2xl overflow-hidden bg-white group hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#22305C] py-6 px-8 relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E5B034] rounded-lg flex items-center justify-center">
                    <GraduationCap size={22} className="text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                      Chuyên ngành 01
                    </span>
                    <h3 className="text-white text-lg md:text-xl font-bold">
                      Giáo dục & Phương pháp đào tạo
                    </h3>
                  </div>
                </div>
                {/* Background decoration */}
                <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none text-white">
                  <BookOpen size={120} strokeWidth={1} />
                </div>
              </div>
              <div className="p-8">
                <p className="text-sm text-gray-500 font-medium mb-6 pb-4 border-b border-gray-100">
                  Nội dung chính:
                </p>
                <ul className="space-y-4">
                  {educationBooks.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-sm font-semibold text-[#22305C] items-center group/item"
                    >
                      <div className="w-8 h-8 bg-[#22305C]/5 rounded-lg flex items-center justify-center shrink-0 group-hover/item:bg-[#E5B034]/10 transition-colors">
                        <ChevronRight size={16} className="text-[#22305C]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sport Science Card */}
            <div className="border-2 border-[#22305C] rounded-2xl overflow-hidden bg-white group hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#22305C] py-6 px-8 relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E5B034] rounded-lg flex items-center justify-center">
                    <Dumbbell size={22} className="text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                      Chuyên ngành 02
                    </span>
                    <h3 className="text-white text-lg md:text-xl font-bold">
                      Khoa học thể thao Cờ vua
                    </h3>
                  </div>
                </div>
                {/* Background decoration */}
                <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none text-white">
                  <Dumbbell size={120} strokeWidth={1} />
                </div>
              </div>
              <div className="p-8">
                <p className="text-sm text-gray-500 font-medium mb-6 pb-4 border-b border-gray-100">
                  Nội dung chính:
                </p>
                <ul className="space-y-4">
                  {sportScienceBooks.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-sm font-semibold text-[#22305C] items-center group/item"
                    >
                      <div className="w-8 h-8 bg-[#22305C]/5 rounded-lg flex items-center justify-center shrink-0 group-hover/item:bg-[#E5B034]/10 transition-colors">
                        <ChevronRight size={16} className="text-[#22305C]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Tạp chí nghiên cứu */}
        <section
          id="magazines"
          className="w-full bg-[#F1F3F5] py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left - Info */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#22305C]/10 rounded-full px-5 py-2 mb-6">
                  <Newspaper size={16} className="text-[#22305C]" />
                  <span className="text-[#22305C] font-semibold text-sm uppercase tracking-wider">
                    Tạp chí chuyên ngành
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#22305C] mb-6 leading-tight">
                  Tạp chí nghiên cứu
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  KingViet Education phát triển các tạp chí nhằm:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Công bố nghiên cứu khoa học",
                    "Chia sẻ tri thức chuyên ngành",
                    "Kết nối cộng đồng học thuật",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#E5B034] rounded-full flex items-center justify-center shrink-0">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-[#22305C] font-semibold text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Topics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {magazineTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
                  >
                    <div className="w-16 h-16 bg-[#22305C] rounded-2xl flex items-center justify-center text-white mb-4 group-hover:bg-[#E5B034] transition-colors duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {topic.icon}
                    </div>
                    <h4 className="font-bold text-[#22305C] text-sm leading-snug">
                      {topic.label}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Sự kiện ra mắt sách & ấn phẩm */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#22305C]/5 rounded-full px-5 py-2 mb-6">
              <Calendar size={16} className="text-[#22305C]" />
              <span className="text-[#22305C] font-semibold text-sm uppercase tracking-wider">
                Sự kiện
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#22305C] mb-4">
              Sự kiện ra mắt sách & ấn phẩm
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Những sự kiện nổi bật giới thiệu các ấn phẩm mới và chia sẻ học thuật
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Book Launch Event */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="h-3 bg-gradient-to-r from-[#22305C] to-[#E5B034]"></div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#22305C] rounded-xl flex items-center justify-center text-white group-hover:bg-[#E5B034] transition-colors duration-300">
                    <BookOpen size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[#E5B034] text-xs font-bold uppercase tracking-wider">
                      Ra mắt sách mới
                    </span>
                    <h3 className="text-[#22305C] font-bold text-xl">
                      Ra mắt sách USFD
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "Giới thiệu nội dung sách",
                    "Tác giả và nhóm nghiên cứu",
                    "Chia sẻ học thuật",
                    "Giao lưu với độc giả",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-600 text-sm font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E5B034] shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Academic Events */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="h-3 bg-gradient-to-r from-[#E5B034] to-[#22305C]"></div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#22305C] rounded-xl flex items-center justify-center text-white group-hover:bg-[#E5B034] transition-colors duration-300">
                    <Mic size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[#E5B034] text-xs font-bold uppercase tracking-wider">
                      Sự kiện học thuật
                    </span>
                    <h3 className="text-[#22305C] font-bold text-xl">
                      Hoạt động chuyên môn
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "Talkshow chuyên môn",
                    "Workshop giáo dục",
                    "Hội thảo khoa học",
                    "Chia sẻ nghiên cứu",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-600 text-sm font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E5B034] shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Ấn phẩm nổi bật */}
        <section
          id="featured-books"
          className="w-full bg-[#22305C] py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 mb-6">
                <Sparkles size={16} className="text-[#E5B034]" />
                <span className="text-[#E5B034] font-semibold text-sm uppercase tracking-wider">
                  Nổi bật
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ấn phẩm nổi bật
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
                Các đầu sách được quan tâm và đánh giá cao nhất
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredBooks.map((book, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col"
                >
                  {/* Book Cover Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-[#22305C] to-[#3a4f8a] relative overflow-hidden flex items-center justify-center">
                    <BookOpen
                      size={64}
                      className="text-white/20"
                      strokeWidth={1}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#E5B034] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {book.tag}
                      </span>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-white/10 rounded-full"></div>
                    <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-white/10 rounded-full"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-[#22305C] font-bold text-lg mb-2 group-hover:text-[#E5B034] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                      {book.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-5 pb-5 border-b border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <User size={14} />
                        <span>{book.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{book.year}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-[#22305C] text-white text-xs font-semibold py-2.5 rounded-lg hover:bg-[#161D30] transition-colors">
                        Xem chi tiết
                      </button>
                      <button className="flex-1 border border-[#22305C] text-[#22305C] text-xs font-semibold py-2.5 rounded-lg hover:bg-[#22305C]/5 transition-colors">
                        Đọc thử
                      </button>
                      <button className="bg-[#E5B034] text-white text-xs font-semibold py-2.5 px-4 rounded-lg hover:bg-[#d4a02e] transition-colors">
                        Mua
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Thư viện tài liệu */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#22305C]/5 rounded-full px-5 py-2 mb-6">
              <Download size={16} className="text-[#22305C]" />
              <span className="text-[#22305C] font-semibold text-sm uppercase tracking-wider">
                Thư viện
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#22305C] mb-4">
              Thư viện tài liệu
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Nơi cung cấp nguồn tài liệu phong phú phục vụ nghiên cứu và học tập
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {libraryResources.map((resource, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#22305C] to-[#3a4f8a] rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                  {resource.icon}
                </div>
                <h3 className="font-bold text-[#22305C] text-base mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {resource.desc}
                </p>
                <button className="mt-5 inline-flex items-center gap-1 text-[#E5B034] font-semibold text-sm hover:gap-2 transition-all duration-300">
                  Truy cập <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Hợp tác xuất bản */}
        <section className="w-full bg-[#F1F3F5] py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#22305C]/10 rounded-full px-5 py-2 mb-6">
                  <Handshake size={16} className="text-[#22305C]" />
                  <span className="text-[#22305C] font-semibold text-sm uppercase tracking-wider">
                    Hợp tác
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#22305C] mb-6 leading-tight">
                  Hợp tác xuất bản
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  KingViet Education hợp tác với các đối tác uy tín trong lĩnh vực giáo dục và nghiên cứu:
                </p>

                {/* Partners */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {partners.map((partner, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-[#22305C]/5 rounded-lg flex items-center justify-center text-[#22305C] group-hover:bg-[#E5B034]/10 group-hover:text-[#E5B034] transition-colors duration-300">
                        {partner.icon}
                      </div>
                      <span className="font-semibold text-[#22305C] text-sm">
                        {partner.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Collaboration Types */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                <h3 className="text-[#22305C] font-bold text-xl mb-2">
                  Hình thức hợp tác
                </h3>
                <p className="text-gray-400 text-sm mb-8">
                  Nhiều hình thức hợp tác linh hoạt
                </p>
                <div className="space-y-4 mb-10">
                  {collaborationTypes.map((type, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-5 bg-[#F8F9FA] rounded-xl hover:bg-[#22305C]/5 transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-[#22305C] rounded-xl flex items-center justify-center text-white shrink-0 group-hover:bg-[#E5B034] transition-colors duration-300">
                        {type.icon}
                      </div>
                      <span className="font-bold text-[#22305C] text-base">
                        {type.label}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#22305C] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#161D30] transition-all duration-300 text-sm shadow-lg hover:shadow-xl"
                >
                  <Send size={18} strokeWidth={2} />
                  Đề xuất xuất bản cùng KingViet
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Đăng ký nhận thông tin xuất bản */}
        <section
          id="subscribe"
          className="relative w-full py-16 md:py-24"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(34, 48, 92, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 48, 92, 0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "center center",
            backgroundColor: "#F8F9FA",
          }}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-10">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#22305C] to-[#3a4f8a] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <Mail size={32} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#22305C] mb-3">
                  Đăng ký nhận thông tin xuất bản
                </h2>
                <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
                  Nhận thông báo sách mới và ấn phẩm mới nhất từ KingViet Education
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#22305C] mb-2">
                    Họ và tên
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Nhập họ và tên"
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-100 rounded-xl text-sm font-medium text-[#22305C] placeholder-gray-300 focus:border-[#22305C] focus:outline-none transition-colors bg-[#F8F9FA] focus:bg-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#22305C] mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="Nhập email"
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-100 rounded-xl text-sm font-medium text-[#22305C] placeholder-gray-300 focus:border-[#22305C] focus:outline-none transition-colors bg-[#F8F9FA] focus:bg-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#22305C] mb-2">
                    Lĩnh vực quan tâm
                  </label>
                  <div className="relative">
                    <Heart
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleFormChange}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-100 rounded-xl text-sm font-medium text-[#22305C] focus:border-[#22305C] focus:outline-none transition-colors bg-[#F8F9FA] focus:bg-white appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Chọn lĩnh vực</option>
                      <option value="education">Giáo dục</option>
                      <option value="sports">Khoa học thể thao</option>
                      <option value="technology">Công nghệ giáo dục</option>
                      <option value="management">Quản lý thể thao</option>
                      <option value="all">Tất cả lĩnh vực</option>
                    </select>
                    <ChevronRight
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 rotate-90 pointer-events-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#22305C] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#161D30] transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Send size={18} strokeWidth={2} />
                    Đăng ký nhận tin
                  </button>
                  <button
                    type="button"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#E5B034] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#d4a02e] transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <BookOpen size={18} strokeWidth={2} />
                    Nhận thông báo sách mới
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BooksAndMagazines;
