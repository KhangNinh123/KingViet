import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InnerPageHero from "../../components/sections/InnerPageHero";
import charImg from "../../assets/images/char-trainghiemquocte.png";
import {
  GraduationCap,
  Handshake,
  FileBadge,
  Globe,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const InternationalExperience = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

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
      icon: <GraduationCap size={56} className="text-[#22305C] stroke-[1.5]" />,
      title: "Học bổng\nCử nhân và Thạc sĩ",
    },
    {
      icon: <Handshake size={56} className="text-[#22305C] stroke-[1.5]" />,
      title: "Hợp tác với các\ntrường đại học quốc tế",
    },
    {
      icon: <FileBadge size={56} className="text-[#22305C] stroke-[1.5]" />,
      title: "Hỗ trợ hồ sơ\ndu học trọn gói",
    },
  ];

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
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x-2 divide-[#22305C]/20">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center text-center px-4 md:px-8 py-8 md:py-0 w-full"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="font-bold text-[#22305C] text-lg md:text-xl whitespace-pre-line leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* International Opportunities Section */}
        <section className="w-full bg-[#22305C] py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 uppercase">
              Cơ hội học tập quốc tế
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-12 md:mb-16 whitespace-pre-line leading-relaxed max-w-3xl mx-auto">
              KingViet Education kết nối sinh viên Việt Nam{"\n"}
              với các chương trình đào tạo tại các trường đại học quốc tế, tiêu
              biểu như:
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
              {/* Partner 1 */}
              <div className="flex flex-col items-center max-w-[250px]">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl p-2">
                  {/* Placeholder for University Logo */}
                  <div className="w-full h-full rounded-full border-4 border-yellow-500 bg-blue-50 flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-bold text-blue-900 text-center uppercase p-2">
                      Bangkokthonburi
                      <br />
                      University
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg md:text-xl whitespace-pre-line leading-tight">
                  Đại học{"\n"}Bangkokthonburi{"\n"}Thái Lan
                </h3>
              </div>

              {/* Partner 2 */}
              <div className="flex flex-col items-center max-w-[250px]">
                <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-6">
                  {/* We use a combination of lucide icons to mimic the design */}
                  <div className="relative text-white">
                    <GraduationCap
                      size={140}
                      strokeWidth={1}
                      className="absolute -top-16 -left-4"
                    />
                    <div className="w-24 h-24 bg-white text-[#22305C] rounded-full flex items-center justify-center mt-8">
                      <Globe size={80} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg md:text-xl whitespace-pre-line leading-tight">
                  Các đối tác giáo dục{"\n"}quốc tế khác
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Degree Levels Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Bachelor's Degree */}
            <div className="border-2 border-[#22305C] rounded-2xl overflow-hidden bg-white">
              <div className="bg-[#22305C] py-6 px-8 relative overflow-hidden">
                <h3 className="text-white text-xl md:text-2xl font-bold uppercase relative z-10">
                  Bậc cử nhân
                </h3>
                {/* Background Icon */}
                <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-20 pointer-events-none text-white">
                  <Globe size={100} strokeWidth={1} />
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-6 text-[#22305C] font-semibold text-lg">
                  <li className="flex items-start">
                    <span>Thời gian đào tạo: 3 – 4 năm</span>
                  </li>
                  <li className="flex items-start">
                    <span>Chương trình quốc tế</span>
                  </li>
                  <li className="flex items-start">
                    <span>Học phí cạnh tranh</span>
                  </li>
                  <li className="flex items-start">
                    <span>Cơ hội trao đổi sinh viên</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Master's Degree */}
            <div className="border-2 border-[#22305C] rounded-2xl overflow-hidden bg-white">
              <div className="bg-[#22305C] py-6 px-8 relative overflow-hidden">
                <h3 className="text-white text-xl md:text-2xl font-bold uppercase relative z-10">
                  Bậc thạc sĩ
                </h3>
                {/* Background Icon */}
                <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-20 pointer-events-none text-white">
                  <Globe size={100} strokeWidth={1} />
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-6 text-[#22305C] font-semibold text-lg">
                  <li className="flex items-start">
                    <span>Thời gian đào tạo: 1 – 2 năm</span>
                  </li>
                  <li className="flex items-start">
                    <span>Chương trình đào tạo chuyên sâu</span>
                  </li>
                  <li className="flex items-start">
                    <span>Phù hợp cho người đi làm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarship Benefits Banner */}
        <section className="w-full bg-[#22305C] py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-around gap-12">
            {/* Placeholder for "Lợi ích học bổng" Image/Icon */}
            <div className="flex items-center justify-center w-64 md:w-80 h-40 md:h-48 bg-white/5 rounded-xl border-2 border-dashed border-white/30">
              <span className="text-white/60 font-semibold text-center px-4">
                (Icon "Lợi ích học bổng"
                <br />
                sẽ chèn vào đây)
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-8 md:gap-16 text-center text-white mt-8 md:mt-0">
              <div className="flex flex-col items-center">
                <div className="mb-4 relative">
                  <span className="text-5xl font-bold bg-white text-[#22305C] w-20 h-20 rounded-full flex items-center justify-center border-4 border-[#22305C] outline outline-4 outline-white">
                    $
                  </span>
                  <div className="absolute -bottom-4 -right-2 text-white">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <span className="font-semibold text-sm md:text-base mt-4">
                  Giảm học phí
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4 relative h-20 w-20 flex items-center justify-center">
                  <GraduationCap
                    size={64}
                    strokeWidth={1.5}
                    className="absolute -top-4 z-10"
                  />
                  <Globe size={56} strokeWidth={1.5} className="mt-4" />
                </div>
                <span className="font-semibold text-sm md:text-base mt-4">
                  Môi trường
                  <br />
                  học tập quốc tế
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-4 h-20 w-20 flex items-end justify-center pb-2">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                    <polyline points="14 2 14 8 20 8" />
                    <circle cx="10" cy="13" r="2" />
                    <path d="m7 22 1.5-6 2-2 2 2 1.5 6" />
                  </svg>
                </div>
                <span className="font-semibold text-sm md:text-base mt-4">
                  Cơ hội phát triển
                  <br />
                  nghề nghiệp
                  <br />
                  toàn cầu
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Majors Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#22305C] mb-12">
            Các khối ngành đào tạo nổi bật
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch">
            {/* Card 1 */}
            <div className="bg-[#F1F3F5] p-8 md:p-10 rounded-lg flex flex-col h-full">
              <h3 className="font-bold text-xl md:text-2xl text-[#22305C] mb-2 leading-tight">
                Khoa học thể thao
                <br />
                (Sport Science)
              </h3>
              <p className="text-sm font-medium text-[#22305C]/80 mb-6 pb-6 border-b border-[#22305C]/20">
                Chương trình đào tạo tập trung vào:
              </p>
              <ul className="space-y-4 flex-grow">
                {[
                  "Sinh lý học thể thao",
                  "Huấn luyện thể thao",
                  "Khoa học vận động",
                  "Phân tích hiệu suất vận động",
                  "Cơ hội nghề nghiệp:",
                  "Huấn luyện viên",
                  "Chuyên gia thể thao",
                  "Chuyên gia phân tích hiệu suất",
                  "Quản lý trung tâm thể thao",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-sm font-bold text-[#22305C] items-start"
                  >
                    <svg
                      className="w-5 h-5 shrink-0 mt-0.5 text-[#22305C]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8 2 4 6 4 10c0 1.5.5 2.8 1.3 4C4.5 15.2 4 16.5 4 18c0 2 1.5 4 3.5 4 1.5 0 2.8-.5 4-1.3 1.2.8 2.5 1.3 4 1.3 2 0 3.5-2 3.5-4 0-1.5-.5-2.8-1.3-4 .8-1.2 1.3-2.5 1.3-4 0-4-4-8-8-8zm0 18c-.8 0-1.5-.3-2.1-.8l.6-.6c.8.8 1.9.8 2.9.2l1.4 1.4c-.8.6-1.8.8-2.8.8v-1zm0-3c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-8c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#22305C] p-8 md:p-10 rounded-lg flex flex-col text-white h-full shadow-xl">
              <h3 className="font-bold text-xl md:text-2xl mb-2 leading-tight">
                Quản trị kinh doanh
                <br />
                (Business Administration)
              </h3>
              <p className="text-sm font-medium text-white/80 mb-6 pb-6 border-b border-white/20">
                Các chuyên ngành:
              </p>
              <ul className="space-y-4 flex-grow">
                {[
                  "Quản trị doanh nghiệp",
                  "Marketing quốc tế",
                  "Quản lý tổ chức/Khởi nghiệp",
                  "Cơ hội nghề nghiệp:",
                  "Quản lý doanh nghiệp",
                  "Chuyên viên marketing",
                  "Nhà khởi nghiệp",
                  "Nhà quản lý dự án",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-sm font-bold items-start"
                  >
                    <svg
                      className="w-5 h-5 shrink-0 mt-0.5 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8 2 4 6 4 10c0 1.5.5 2.8 1.3 4C4.5 15.2 4 16.5 4 18c0 2 1.5 4 3.5 4 1.5 0 2.8-.5 4-1.3 1.2.8 2.5 1.3 4 1.3 2 0 3.5-2 3.5-4 0-1.5-.5-2.8-1.3-4 .8-1.2 1.3-2.5 1.3-4 0-4-4-8-8-8zm0 18c-.8 0-1.5-.3-2.1-.8l.6-.6c.8.8 1.9.8 2.9.2l1.4 1.4c-.8.6-1.8.8-2.8.8v-1zm0-3c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-8c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F1F3F5] p-8 md:p-10 rounded-lg flex flex-col h-full">
              <h3 className="font-bold text-xl md:text-2xl text-[#22305C] mb-2 leading-tight">
                Quản lý thể thao
                <br />
                (Sport Management)
              </h3>
              <p className="text-sm font-medium text-[#22305C]/80 mb-6 pb-6 border-b border-[#22305C]/20">
                Nội dung đào tạo:
              </p>
              <ul className="space-y-4 flex-grow">
                {[
                  "Quản lý tổ chức thể thao",
                  "Marketing thể thao",
                  "Quản trị sự kiện thể thao",
                  "Quản lý câu lạc bộ thể thao",
                  "Cơ hội nghề nghiệp:",
                  "Quản lý câu lạc bộ thể thao",
                  "Quản lý giải đấu",
                  "Chuyên gia marketing thể thao",
                  "Điều hành trung tâm thể thao",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-sm font-bold text-[#22305C] items-start"
                  >
                    <svg
                      className="w-5 h-5 shrink-0 mt-0.5 text-[#22305C]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8 2 4 6 4 10c0 1.5.5 2.8 1.3 4C4.5 15.2 4 16.5 4 18c0 2 1.5 4 3.5 4 1.5 0 2.8-.5 4-1.3 1.2.8 2.5 1.3 4 1.3 2 0 3.5-2 3.5-4 0-1.5-.5-2.8-1.3-4 .8-1.2 1.3-2.5 1.3-4 0-4-4-8-8-8zm0 18c-.8 0-1.5-.3-2.1-.8l.6-.6c.8.8 1.9.8 2.9.2l1.4 1.4c-.8.6-1.8.8-2.8.8v-1zm0-3c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-8c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center border-t border-gray-200">
          <div className="relative flex justify-center mb-16 pt-8 pb-16">
            {/* SVG Connecting Lines (Desktop) */}
            <div className="hidden md:block absolute top-[4rem] md:top-[4.5rem] lg:top-[5rem] h-[8rem] left-[12.5%] right-[12.5%] z-0 pointer-events-none">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <polyline
                  points="0,0 33.33,100 66.66,0 100,100"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="relative mb-6 group">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 transition-transform hover:scale-105">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22305C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                      <circle cx="12" cy="11" r="3"></circle>
                      <path d="M9 18a3 3 0 0 0 6 0"></path>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#22305C] rounded-full text-white font-bold flex items-center justify-center shadow-md border-2 border-white text-lg">
                    1
                  </div>
                </div>
                <h4 className="font-bold text-[#22305C] mb-2 text-base md:text-lg">
                  Tư vấn chương trình
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Xác định ngành học phù hợp
                  <br />
                  Tư vấn trường đại học
                  <br />
                  Giới thiệu học bổng
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center md:translate-y-32 mt-8 md:mt-0">
                <div className="relative mb-6 group">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 transition-transform hover:scale-105">
                    <FileBadge
                      size={56}
                      className="text-[#22305C]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#22305C] rounded-full text-white font-bold flex items-center justify-center shadow-md border-2 border-white text-lg">
                    2
                  </div>
                </div>
                <h4 className="font-bold text-[#22305C] mb-2 text-base md:text-lg">
                  Chuẩn bị hồ sơ
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  KingViet hỗ trợ:
                  <br />
                  Hồ sơ nhập học, Hồ sơ học bổng
                  <br />
                  Thư giới thiệu, CV và bài luận
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center mt-8 md:mt-0">
                <div className="relative mb-6 group">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 transition-transform hover:scale-105">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22305C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <path d="M11 8v6M8 11h6"></path>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#22305C] rounded-full text-white font-bold flex items-center justify-center shadow-md border-2 border-white text-lg">
                    3
                  </div>
                </div>
                <h4 className="font-bold text-[#22305C] mb-2 text-base md:text-lg">
                  Nộp hồ sơ & xét tuyển
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Nộp hồ sơ vào trường
                  <br />
                  Phỏng vấn (nếu có)
                  <br />
                  Nhận thư mời nhập học
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center md:translate-y-32 mt-8 md:mt-0">
                <div className="relative mb-6 group">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 transition-transform hover:scale-105">
                    <div className="relative">
                      <Globe
                        size={56}
                        className="text-[#22305C]"
                        strokeWidth={1.5}
                      />
                      <GraduationCap
                        size={28}
                        className="absolute -top-3 -right-2 text-[#22305C] bg-white rounded-full p-0.5"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#22305C] rounded-full text-white font-bold flex items-center justify-center shadow-md border-2 border-white text-lg">
                    4
                  </div>
                </div>
                <h4 className="font-bold text-[#22305C] mb-2 text-base md:text-lg">
                  Chuẩn bị du học
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Hướng dẫn visa
                  <br />
                  Hỗ trợ chỗ ở<br />
                  Chuẩn bị trước khi nhập học
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#22305C] mb-12 mt-16 md:mt-32">
            Hình ảnh trải nghiệm quốc tế
          </h2>

          {/* Gallery Slider */}
          <div className="relative w-full overflow-hidden pb-8 group">
            {/* Left Arrow */}
            <button
              onClick={() => {
                const slider = document.getElementById("gallery-slider");
                if (slider) slider.scrollBy({ left: -400, behavior: "smooth" });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 -ml-4 md:ml-4 border border-gray-100"
              aria-label="Previous image"
            >
              <ChevronLeft
                size={32}
                className="text-[#22305C]"
                strokeWidth={2}
              />
            </button>

            {/* Scrollable Container */}
            <div
              id="gallery-slider"
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar px-4 md:px-12 w-full"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                #gallery-slider::-webkit-scrollbar { display: none; }
              `,
                }}
              />

              {/* Group 1: Wide top, 2 Squares bottom */}
              <div className="flex flex-col gap-4 snap-center shrink-0">
                <div className="w-[280px] md:w-[516px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
                <div className="flex gap-4">
                  <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
                  <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
                </div>
              </div>

              {/* Group 2: 2 Squares */}
              <div className="flex flex-col gap-4 snap-center shrink-0">
                <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
                <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
              </div>

              {/* Group 3: 2 Squares */}
              <div className="flex flex-col gap-4 snap-center shrink-0">
                <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
                <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
              </div>

              {/* Group 4: Wide top, Wide bottom */}
              <div className="flex flex-col gap-4 snap-center shrink-0">
                <div className="w-[280px] md:w-[516px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
                <div className="w-[280px] md:w-[516px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
              </div>

              {/* Group 5: 2 Squares */}
              <div className="flex flex-col gap-4 snap-center shrink-0">
                <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
                <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => {
                const slider = document.getElementById("gallery-slider");
                if (slider) slider.scrollBy({ left: 400, behavior: "smooth" });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 -mr-4 md:mr-4 border border-gray-100"
              aria-label="Next image"
            >
              <ChevronRight
                size={32}
                className="text-[#22305C]"
                strokeWidth={2}
              />
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="relative w-full py-16 md:py-24"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(34, 48, 92, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 48, 92, 0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "center center",
            backgroundColor: "#F8F9FA",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-white/70 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#22305C] mb-12 text-center tracking-wide">
              FAQ
            </h2>
            <div className="flex flex-col gap-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b-[1.5px] border-[#22305C] py-5"
                >
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? -1 : index)
                    }
                  >
                    <h3 className="font-bold text-[#22305C] text-lg md:text-xl lg:text-2xl pr-8">
                      {faq.question}
                    </h3>
                    {openFaqIndex === index ? (
                      <ChevronUp
                        size={28}
                        className="text-[#22305C] shrink-0"
                        strokeWidth={1.5}
                      />
                    ) : (
                      <ChevronDown
                        size={28}
                        className="text-[#22305C] shrink-0"
                        strokeWidth={1.5}
                      />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className="mt-3 text-[#22305C] text-sm md:text-base font-medium leading-relaxed pr-10">
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
