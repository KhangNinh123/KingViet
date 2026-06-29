import logoLDCVN from "@/assets/images/LogoLDCVN1.png";
import logoKingViet from "@/assets/images/LogoKingViet.png";

const PartnerSection = () => {
  return (
    <section className="w-full flex flex-col">
      {/* Top Banner (White) */}
      <div className="py-8 md:py-14 bg-white flex justify-center px-4 md:px-8">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="flex flex-col flex-1 text-[#22305C]">
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold italic mb-3 md:mb-4 leading-tight">
              KingViet Education là Hội viên chính thức của
              <br />
              Liên Đoàn Cờ Việt Nam
            </h2>
            <p className="text-[15px] md:text-base lg:text-lg text-gray-700 leading-relaxed pr-0 md:pr-10">
              KingViet Education cam kết đồng hành cùng Liên đoàn Cờ Việt Nam
              phát triển phong trào cờ vua nước nhà và kiến tạo nên những thế hệ
              kỳ thủ tài năng, góp phần đưa cờ vua Việt Nam vươn xa trên đấu
              trường quốc tế.
            </p>
          </div>
          <div className="flex shrink-0 justify-center md:justify-end">
            <img
              src={logoLDCVN}
              alt="Logo LDCVN"
              className="w-32 md:w-48 lg:w-[220px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Banner (Dark Blue) */}
      <div className="py-12 md:py-16 bg-[#22305C] flex justify-center px-4 md:px-8">
        <div className="max-w-6xl w-full flex flex-col items-start gap-10 md:gap-12 mx-auto">
          {/* Top Banner Content */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            {/* Left: Logo */}
            <div className="flex shrink-0">
              <img
                src={logoKingViet}
                alt="KingViet Logo"
                className="w-72 md:w-96 lg:w-[460px] object-contain"
              />
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-[2px] h-20 md:h-24 bg-white rounded-full mx-6 lg:mx-8 rotate-[15deg]"></div>

            {/* Right: Description Text */}
            <div className="text-center md:text-left text-white italic text-base md:text-lg lg:text-[19px] flex-1">
              <p className="leading-[1.7]">
                KingViet Education là tổ chức giáo dục phi lợi nhuận mang
                <br className="hidden lg:block" />
                khát vọng kết nối tri thức và lan tỏa những giá trị tốt đẹp
                <br className="hidden lg:block" />
                thông qua giáo dục, trí tuệ và thể thao.
                <br className="hidden lg:block" />
                Hệ sinh thái của KingViet Education tập trung vào 4 mảng hoạt
                động chính:
              </p>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-wrap justify-start gap-3 md:gap-4 lg:gap-6 w-full mt-4">
            <button className="bg-white hover:bg-gray-100 text-[#1a2548] px-8 md:px-10 lg:px-12 py-4 md:py-5 rounded-full font-bold text-[15px] md:text-base lg:text-[18px] transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center min-w-[180px] md:min-w-[200px] lg:min-w-[240px]">
              Sách, tạp chí
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#1a2548] px-8 md:px-10 lg:px-12 py-3 md:py-4 rounded-full font-bold text-[15px] md:text-base lg:text-[18px] transition-transform hover:-translate-y-1 shadow-lg text-center leading-snug min-w-[180px] md:min-w-[200px] lg:min-w-[240px]">
              Công nghệ
              <br />
              trong giáo dục
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#1a2548] px-8 md:px-10 lg:px-12 py-4 md:py-5 rounded-full font-bold text-[15px] md:text-base lg:text-[18px] transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center min-w-[180px] md:min-w-[200px] lg:min-w-[240px]">
              Trải nghiệm quốc tế
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#1a2548] px-8 md:px-10 lg:px-12 py-3 md:py-4 rounded-full font-bold text-[15px] md:text-base lg:text-[18px] transition-transform hover:-translate-y-1 shadow-lg text-center leading-snug min-w-[180px] md:min-w-[200px] lg:min-w-[240px]">
              Trao quyền trẻ em
              <br />
              qua thể thao
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
