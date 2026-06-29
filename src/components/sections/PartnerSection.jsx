import logoLDCVN from "@/assets/images/LogoLDCVN1.png";
import logoKingViet from "@/assets/images/LogoKingViet.png";

const PartnerSection = () => {
  return (
    <section className="w-full flex flex-col">
      {/* Top Banner (Dark Blue) */}
      <div className="py-12 md:py-16 bg-[#22305C] flex justify-center px-4 md:px-8">
        <div className="max-w-6xl w-full flex flex-col items-start gap-10 md:gap-12 mx-auto">
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
        </div>
      </div>

      {/* Bottom Banner (White) */}
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
    </section>
  );
};

export default PartnerSection;
