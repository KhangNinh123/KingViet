import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InnerPageHero from "../../components/sections/InnerPageHero";
import charImg from "../../assets/images/char-trainghiemquocte.png";
import ImageGallerySection from "../../components/sections/ImageGallerySection";
import {
  GraduationCap,
  Handshake,
  FileBadge,
  Globe,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  DollarSign,
  Briefcase,
  Award,
} from "lucide-react";

const InternationalExperience = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeMajorTab, setActiveMajorTab] = useState(0);

  const faqs = [
    {
      question: "Điều kiện để nhận học bổng là gì?",
      answer:
        "Sinh viên cần đáp ứng các yêu cầu về học lực, ngoại ngữ và hồ sơ theo quy định của từng chương trình.",
    },
    {
      question: "Có cần IELTS không?",
      answer:
        "Tùy thuộc vào chương trình và trường đại học. Một số trường có bài kiểm tra tiếng Anh thay thế nếu bạn chưa có IELTS.",
    },
    {
      question: "KingViet có hỗ trợ hồ sơ visa không?",
      answer:
        "Có, KingViet hỗ trợ toàn diện từ khâu chuẩn bị hồ sơ đến khi nhận được visa và chuẩn bị lên đường.",
    },
  ];

  const features = [
    {
      icon: <GraduationCap size={48} className="text-[#22305C] stroke-[1.5]" />,
      title: "Học bổng\nCử nhân và Thạc sĩ",
    },
    {
      icon: <Handshake size={48} className="text-[#22305C] stroke-[1.5]" />,
      title: "Hợp tác với các\ntrường đại học quốc tế",
    },
    {
      icon: <FileBadge size={48} className="text-[#22305C] stroke-[1.5]" />,
      title: "Hỗ trợ hồ sơ\ndu học trọn gói",
    },
  ];

  const majors = [
    {
      title: "Khoa học thể thao",
      subtitle: "(Sport Science)",
      desc: "Chương trình đào tạo tập trung vào:",
      items: [
        "Sinh lý học thể thao",
        "Huấn luyện thể thao",
        "Khoa học vận động",
        "Phân tích hiệu suất vận động",
      ],
      careers: [
        "Huấn luyện viên",
        "Chuyên gia thể thao",
        "Chuyên gia phân tích hiệu suất",
        "Quản lý trung tâm thể thao",
      ],
      dark: false,
    },
    {
      title: "Quản trị kinh doanh",
      subtitle: "(Business Administration)",
      desc: "Các chuyên ngành:",
      items: [
        "Quản trị doanh nghiệp",
        "Marketing quốc tế",
        "Quản lý tổ chức/Khởi nghiệp",
      ],
      careers: [
        "Quản lý doanh nghiệp",
        "Chuyên viên marketing",
        "Nhà khởi nghiệp",
        "Nhà quản lý dự án",
      ],
      dark: true,
    },
    {
      title: "Quản lý thể thao",
      subtitle: "(Sport Management)",
      desc: "Nội dung đào tạo:",
      items: [
        "Quản lý tổ chức thể thao",
        "Marketing thể thao",
        "Quản trị sự kiện thể thao",
        "Quản lý câu lạc bộ thể thao",
      ],
      careers: [
        "Quản lý câu lạc bộ thể thao",
        "Quản lý giải đấu",
        "Chuyên gia marketing thể thao",
        "Điều hành trung tâm thể thao",
      ],
      dark: false,
    },
  ];

  const CheckIcon = ({ dark }) => (
    <svg
      className={`w-4 h-4 shrink-0 mt-0.5 ${dark ? "text-white/70" : "text-[#22305C]/60"}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header />

      <main className="flex-grow">
        <InnerPageHero
          title="TRẢI NGHIỆM GIÁO DỤC QUỐC TẾ CÙNG KingViet Education"
          description={
            "Cơ hội học tập tại các trường đại học quốc tế với chương trình đào tạo chất lượng, học bổng hấp dẫn và lộ trình hỗ trợ toàn diện."
          }
          breadcrumbs={[
            { label: "Lĩnh vực", path: "#" },
            { label: "Trải nghiệm quốc tế", path: "" },
          ]}
          image={charImg}
        />

        {/* Features Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="grid grid-cols-3 gap-2 md:gap-0 md:flex md:flex-row md:items-center md:justify-center md:divide-x-2 divide-[#22305C]/20">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-2 md:px-8 py-4 md:py-0 w-full"
              >
                <div className="mb-3 md:mb-6">{item.icon}</div>
                <h3 className="font-bold text-[#22305C] text-xs sm:text-sm md:text-xl whitespace-pre-line leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* International Opportunities Section */}
        <section className="w-full bg-[#22305C] py-12 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 uppercase">
              Cơ hội học tập quốc tế
            </h2>
            <p className="text-sm md:text-lg text-white/90 mb-8 md:mb-16 leading-relaxed max-w-3xl mx-auto">
              KingViet Education kết nối sinh viên Việt Nam với các chương trình đào tạo tại các trường đại học quốc tế, tiêu biểu như:
            </p>

            <div className="flex flex-row justify-center items-center gap-8 md:gap-32">
              {/* Partner 1 */}
              <div className="flex flex-col items-center max-w-[180px] md:max-w-[250px]">
                <div className="w-24 h-24 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-xl p-2">
                  <div className="w-full h-full rounded-full border-4 border-yellow-500 bg-blue-50 flex items-center justify-center overflow-hidden">
                    <span className="text-[10px] md:text-xs font-bold text-blue-900 text-center uppercase p-2 leading-tight">
                      Bangkokthonburi
                      <br />
                      University
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-sm md:text-xl whitespace-pre-line leading-tight">
                  Đại học{"\n"}Bangkokthonburi{"\n"}Thái Lan
                </h3>
              </div>

              {/* Partner 2 */}
              <div className="flex flex-col items-center max-w-[180px] md:max-w-[250px]">
                <div className="w-24 h-24 md:w-40 md:h-40 bg-white/10 border-2 border-white/30 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <Globe size={48} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm md:text-xl whitespace-pre-line leading-tight">
                  Các đối tác giáo dục{"\n"}quốc tế khác
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Degree Levels Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
            {/* Bachelor's Degree */}
            <div className="border-2 border-[#22305C] rounded-2xl overflow-hidden bg-white">
              <div className="bg-[#22305C] py-4 px-6 md:py-6 md:px-8 relative overflow-hidden">
                <h3 className="text-white text-lg md:text-2xl font-bold uppercase relative z-10">
                  Bậc cử nhân
                </h3>
                <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-20 pointer-events-none text-white">
                  <Globe size={80} strokeWidth={1} />
                </div>
              </div>
              <div className="p-5 md:p-8">
                <ul className="space-y-4 text-[#22305C] font-semibold text-base md:text-lg">
                  <li className="flex items-start gap-2">
                    <CheckIcon dark={false} />
                    <span>Thời gian đào tạo: 3 – 4 năm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon dark={false} />
                    <span>Chương trình quốc tế</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon dark={false} />
                    <span>Học phí cạnh tranh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon dark={false} />
                    <span>Cơ hội trao đổi sinh viên</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Master's Degree */}
            <div className="border-2 border-[#22305C] rounded-2xl overflow-hidden bg-white">
              <div className="bg-[#22305C] py-4 px-6 md:py-6 md:px-8 relative overflow-hidden">
                <h3 className="text-white text-lg md:text-2xl font-bold uppercase relative z-10">
                  Bậc thạc sĩ
                </h3>
                <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-20 pointer-events-none text-white">
                  <Globe size={80} strokeWidth={1} />
                </div>
              </div>
              <div className="p-5 md:p-8">
                <ul className="space-y-4 text-[#22305C] font-semibold text-base md:text-lg">
                  <li className="flex items-start gap-2">
                    <CheckIcon dark={false} />
                    <span>Thời gian đào tạo: 1 – 2 năm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon dark={false} />
                    <span>Chương trình đào tạo chuyên sâu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon dark={false} />
                    <span>Phù hợp cho người đi làm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarship Benefits Banner */}
        <section className="w-full bg-[#22305C] py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-lg md:text-2xl font-bold text-white mb-6 md:mb-10 uppercase tracking-wide">
              Lợi ích học bổng
            </h2>
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {/* Benefit 1 */}
              <div className="flex flex-col items-center text-center text-white">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-lg border-4 border-yellow-400">
                  <DollarSign className="w-6 h-6 md:w-9 md:h-9 text-[#22305C]" strokeWidth={2.5} />
                </div>
                <span className="font-semibold text-xs md:text-base leading-tight">
                  Giảm học phí
                </span>
              </div>

              {/* Benefit 2 */}
              <div className="flex flex-col items-center text-center text-white">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-lg border-4 border-yellow-400">
                  <Globe className="w-6 h-6 md:w-9 md:h-9 text-[#22305C]" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-xs md:text-base leading-tight">
                  Môi trường học tập quốc tế
                </span>
              </div>

              {/* Benefit 3 */}
              <div className="flex flex-col items-center text-center text-white">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-lg border-4 border-yellow-400">
                  <Briefcase className="w-6 h-6 md:w-9 md:h-9 text-[#22305C]" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-xs md:text-base leading-tight">
                  Cơ hội nghề nghiệp toàn cầu
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Majors Section — Tab Layout for Mobile */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-24 text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#22305C] mb-6 md:mb-12">
            Các khối ngành đào tạo nổi bật
          </h2>

          {/* Tab buttons */}
          <div className="flex rounded-xl overflow-hidden border-2 border-[#22305C] mb-6 md:hidden">
            {majors.map((major, i) => (
              <button
                key={i}
                onClick={() => setActiveMajorTab(i)}
                className={`flex-1 py-2.5 text-xs font-bold transition-colors leading-tight px-1 ${
                  activeMajorTab === i
                    ? "bg-[#22305C] text-white"
                    : "bg-white text-[#22305C]"
                }`}
              >
                {major.title}
              </button>
            ))}
          </div>

          {/* Mobile: single active card */}
          <div className="md:hidden text-left">
            {majors.map((major, i) => (
              <div
                key={i}
                className={`${activeMajorTab === i ? "block" : "hidden"} ${
                  major.dark
                    ? "bg-[#22305C] text-white shadow-xl"
                    : "bg-[#F1F3F5] text-[#22305C]"
                } p-6 rounded-xl`}
              >
                <h3 className={`font-bold text-lg leading-tight mb-1 ${major.dark ? "text-white" : "text-[#22305C]"}`}>
                  {major.title}
                  <span className={`text-sm font-medium ml-1 ${major.dark ? "text-white/70" : "text-[#22305C]/60"}`}>
                    {major.subtitle}
                  </span>
                </h3>
                <p className={`text-xs font-semibold mb-3 pb-3 border-b ${major.dark ? "text-white/70 border-white/20" : "text-[#22305C]/60 border-[#22305C]/20"}`}>
                  {major.desc}
                </p>
                <ul className="space-y-2 mb-4">
                  {major.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm font-medium items-start">
                      <CheckIcon dark={major.dark} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-xs font-bold mb-2 uppercase tracking-wide ${major.dark ? "text-yellow-300" : "text-[#22305C]"}`}>
                  Cơ hội nghề nghiệp:
                </p>
                <ul className="space-y-2">
                  {major.careers.map((c, j) => (
                    <li key={j} className="flex gap-2 text-sm font-medium items-start">
                      <CheckIcon dark={major.dark} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Desktop: 3-column grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 text-left items-stretch">
            {majors.map((major, i) => (
              <div
                key={i}
                className={`p-8 md:p-10 rounded-lg flex flex-col h-full ${
                  major.dark
                    ? "bg-[#22305C] text-white shadow-xl"
                    : "bg-[#F1F3F5]"
                }`}
              >
                <h3 className={`font-bold text-xl md:text-2xl mb-2 leading-tight ${major.dark ? "text-white" : "text-[#22305C]"}`}>
                  {major.title}
                  <br />
                  <span className="text-base font-medium opacity-70">{major.subtitle}</span>
                </h3>
                <p className={`text-sm font-medium mb-6 pb-6 border-b ${major.dark ? "text-white/80 border-white/20" : "text-[#22305C]/80 border-[#22305C]/20"}`}>
                  {major.desc}
                </p>
                <ul className="space-y-4 flex-grow mb-4">
                  {major.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm font-bold items-start">
                      <CheckIcon dark={major.dark} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${major.dark ? "text-yellow-300" : "text-[#22305C]/60"}`}>
                  Cơ hội nghề nghiệp:
                </p>
                <ul className="space-y-3">
                  {major.careers.map((c, j) => (
                    <li key={j} className="flex gap-3 text-sm font-bold items-start">
                      <CheckIcon dark={major.dark} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-24 text-center border-t border-gray-200">

          {/* Mobile: vertical stepper */}
          <div className="md:hidden flex flex-col gap-0 mb-10">
            {[
              {
                num: 1,
                title: "Tư vấn chương trình",
                desc: "Xác định ngành học phù hợp · Tư vấn trường đại học · Giới thiệu học bổng",
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22305C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                ),
              },
              {
                num: 2,
                title: "Chuẩn bị hồ sơ",
                desc: "Hồ sơ nhập học · Hồ sơ học bổng · Thư giới thiệu · CV và bài luận",
                icon: <FileBadge size={36} className="text-[#22305C]" strokeWidth={1.5} />,
              },
              {
                num: 3,
                title: "Nộp hồ sơ & xét tuyển",
                desc: "Nộp hồ sơ vào trường · Phỏng vấn (nếu có) · Nhận thư mời nhập học",
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22305C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                ),
              },
              {
                num: 4,
                title: "Chuẩn bị du học",
                desc: "Hướng dẫn visa · Hỗ trợ chỗ ở · Chuẩn bị trước khi nhập học",
                icon: <Globe size={36} className="text-[#22305C]" strokeWidth={1.5} />,
              },
            ].map((step, i, arr) => (
              <div key={i} className="flex gap-4 text-left">
                {/* Left: number + line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#22305C] rounded-full text-white font-bold flex items-center justify-center shrink-0 text-base border-2 border-white shadow-md z-10">
                    {step.num}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#22305C]/20 my-1" style={{ minHeight: "40px" }} />
                  )}
                </div>
                {/* Right: content */}
                <div className="pb-6 pt-1">
                  <div className="flex items-center gap-3 mb-1">
                    {step.icon}
                    <h4 className="font-bold text-[#22305C] text-base">{step.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: original zigzag layout */}
          <div className="hidden md:block relative pt-8 pb-16 mb-16">
            {/* SVG Connecting Lines */}
            <div className="hidden md:block absolute top-[4rem] md:top-[4.5rem] lg:top-[5rem] h-[8rem] left-[12.5%] right-[12.5%] z-0 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <polyline
                  points="0,0 33.33,100 66.66,0 100,100"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <div className="grid grid-cols-4 gap-8 w-full relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 transition-transform hover:scale-105">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#22305C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                      <circle cx="12" cy="11" r="3" />
                      <path d="M9 18a3 3 0 0 0 6 0" />
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#22305C] rounded-full text-white font-bold flex items-center justify-center shadow-md border-2 border-white text-lg">
                    1
                  </div>
                </div>
                <h4 className="font-bold text-[#22305C] mb-2 text-base md:text-lg">Tư vấn chương trình</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Xác định ngành học phù hợp<br />Tư vấn trường đại học<br />Giới thiệu học bổng
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center md:translate-y-32">
                <div className="relative mb-6">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 transition-transform hover:scale-105">
                    <FileBadge size={56} className="text-[#22305C]" strokeWidth={1.5} />
                  </div>
                  <div className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#22305C] rounded-full text-white font-bold flex items-center justify-center shadow-md border-2 border-white text-lg">
                    2
                  </div>
                </div>
                <h4 className="font-bold text-[#22305C] mb-2 text-base md:text-lg">Chuẩn bị hồ sơ</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  KingViet hỗ trợ:<br />Hồ sơ nhập học, Hồ sơ học bổng<br />Thư giới thiệu, CV và bài luận
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 transition-transform hover:scale-105">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#22305C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#22305C] rounded-full text-white font-bold flex items-center justify-center shadow-md border-2 border-white text-lg">
                    3
                  </div>
                </div>
                <h4 className="font-bold text-[#22305C] mb-2 text-base md:text-lg">Nộp hồ sơ & xét tuyển</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Nộp hồ sơ vào trường<br />Phỏng vấn (nếu có)<br />Nhận thư mời nhập học
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center md:translate-y-32">
                <div className="relative mb-6">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 transition-transform hover:scale-105">
                    <div className="relative">
                      <Globe size={56} className="text-[#22305C]" strokeWidth={1.5} />
                      <GraduationCap size={28} className="absolute -top-3 -right-2 text-[#22305C] bg-white rounded-full p-0.5" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#22305C] rounded-full text-white font-bold flex items-center justify-center shadow-md border-2 border-white text-lg">
                    4
                  </div>
                </div>
                <h4 className="font-bold text-[#22305C] mb-2 text-base md:text-lg">Chuẩn bị du học</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Hướng dẫn visa<br />Hỗ trợ chỗ ở<br />Chuẩn bị trước khi nhập học
                </p>
              </div>
            </div>
          </div>

          <ImageGallerySection title="Hình ảnh trải nghiệm quốc tế" />
        </section>

        {/* FAQ Section */}
        <section
          className="relative w-full py-12 md:py-24"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(34, 48, 92, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 48, 92, 0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "center center",
            backgroundColor: "#F8F9FA",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-5 md:p-0 rounded-2xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#22305C] mb-8 md:mb-12 text-center tracking-wide">
              FAQ
            </h2>
            <div className="flex flex-col gap-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b-[1.5px] border-[#22305C] py-4 md:py-5"
                >
                  <button
                    className="w-full flex justify-between items-center text-left gap-3"
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? -1 : index)
                    }
                  >
                    <h3 className="font-bold text-[#22305C] text-base md:text-xl lg:text-2xl">
                      {faq.question}
                    </h3>
                    {openFaqIndex === index ? (
                      <ChevronUp size={22} className="text-[#22305C] shrink-0" strokeWidth={1.5} />
                    ) : (
                      <ChevronDown size={22} className="text-[#22305C] shrink-0" strokeWidth={1.5} />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className="mt-2 text-[#22305C] text-sm md:text-base font-medium leading-relaxed pr-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InternationalExperience;
