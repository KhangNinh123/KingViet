import logoLDCVN from "@/assets/images/LogoLDCVN1.png";
import logoKingViet from "@/assets/images/LogoKingViet.png";
import section45Img from "@/assets/images/home_page/section4.5.jpg";

const PartnerSection = () => {
  return (
    <section className="w-full flex flex-col">
      {/* Top Banner (Dark Blue) */}
      <div className="py-8 md:py-16 bg-[#22305C] flex justify-center px-4 md:px-8">
        <div className="max-w-6xl w-full flex flex-col items-start gap-6 md:gap-12 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            {/* Left: Logo */}
            <div className="flex shrink-0">
              <img
                src={logoKingViet}
                alt="KingViet Logo"
                className="w-52 sm:w-72 md:w-96 lg:w-[460px] object-contain"
              />
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:flex w-[5px] h-[120px] lg:h-[150px] bg-white rounded-full mx-6 lg:mx-10 rotate-[15deg] translate-x-[15px] shrink-0 self-center"></div>

            {/* Right: Description Text */}
            <div className="text-center md:text-left text-white italic text-sm sm:text-base md:text-lg lg:text-[19px] flex-1">
              {/* Invisible float to create the 15-degree slanted text wrapping */}
              <div
                className="hidden md:block float-left w-[32px] lg:w-[42px] h-[120px] lg:h-[160px]"
                style={{ shapeOutside: "polygon(100% 0, 0 100%, 0 0)" }}
              ></div>
              <p className="leading-relaxed mb-2">
                KingViet Education hoạt động phần lớn sử dụng doanh thu để tổ
                chức các hoạt động cộng đồng nhằm kết nối tri thức và lan tỏa
                những giá trị tốt đẹp thông qua giáo dục, trí tuệ và thể thao.
              </p>
              <p className="leading-relaxed">
                Hệ sinh thái của KingViet Education tập trung vào 4 mảng hoạt
                động chính: Sách, tạp chí; Công nghệ trong giáo dục; Trải nghiệm
                quốc tế; Trao quyền trẻ em qua thể thao.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner (White) */}
      <div className="py-6 md:py-14 bg-white flex justify-center px-4 md:px-8">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16">
          <div className="flex flex-col flex-1 text-[#22305C]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold italic mb-2 md:mb-4 leading-tight text-center md:text-left">
              KingViet Education là Hội viên chính thức của
              <br />
              Liên Đoàn Cờ Việt Nam
            </h2>
            <p className="text-sm sm:text-[15px] md:text-base lg:text-lg text-gray-700 leading-relaxed pr-0 md:pr-10 text-center md:text-left">
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
              className="w-24 sm:w-32 md:w-48 lg:w-[220px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Banner image added below PartnerSection */}
      <div className="w-full mb-4 md:mb-14">
        <img
          src={section45Img}
          alt="Banner"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default PartnerSection;
