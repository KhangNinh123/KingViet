import logoLDCVN from "@/assets/images/logos/ldcvn.png";
import logoKingViet from "@/assets/images/logos/kingviet.png";
import drJaneImg from "@/assets/images/home/Dr.Jane 1.png";
import markWhiteImg from "@/assets/images/logos/mark-white.png";
const PartnerSection = () => {
  return (
    <section className="w-full flex flex-col mb-12 lg:mb-20">
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

      {/* Founder Section */}
      <div className="w-full bg-[#F4F6F9] pt-12 md:pt-20 pb-0 px-4 md:px-8 relative overflow-hidden">
        {/* Subtle background pattern behind image */}
        <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 pointer-events-none flex justify-end items-center z-0">
          <img 
            src={markWhiteImg} 
            alt="Pattern" 
            className="h-[140%] max-w-none opacity-70 brightness-0 translate-x-[15%] object-contain"
          />
        </div>

        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-stretch gap-8 lg:gap-16">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-7/12 lg:w-7/12 flex flex-col justify-center text-[#22305C] relative z-10 pb-12 md:pb-20">
            <h3 className="text-xl md:text-2xl font-bold text-[#E5B034] uppercase tracking-wider mb-2">
              Nhà sáng lập
            </h3>
            <h2 className="text-2xl md:text-3xl lg:text-[36px] xl:text-[40px] font-bold mb-6 tracking-tight flex flex-wrap items-center gap-2">
              <span>TS. NGUYỄN TRÀ GIANG</span>
              <span className="hidden md:inline text-gray-500 font-normal">|</span>
              <span className="font-normal text-gray-500 text-xl md:text-2xl lg:text-[32px] lg:whitespace-nowrap">Dr. Jane Nguyen</span>
            </h2>
            
            <div className="flex flex-wrap lg:flex-nowrap gap-3 md:gap-4 mb-8">
              <span className="bg-[#22305C] text-white text-xs md:text-sm lg:text-[14px] font-bold italic px-4 py-2 rounded-xl shadow-sm lg:whitespace-nowrap text-center">
                Phó chủ tịch Hội Khoa học TDTT Việt Nam
              </span>
              <span className="bg-[#22305C] text-white text-xs md:text-sm lg:text-[14px] font-bold italic px-4 py-2 rounded-xl shadow-sm lg:whitespace-nowrap text-center">
                Phó chủ tịch Liên đoàn Cờ Việt Nam
              </span>
            </div>
            
            <div className="text-gray-700 leading-[1.8] text-[15px] md:text-[17px] text-justify">
              <p>
                TS. Nguyễn Trà Giang (Dr. Jane Nguyen) là chuyên gia trong lĩnh vực Quản lý Thể thao với hơn 20 năm kinh nghiệm nghiên cứu, giảng dạy và tư vấn tại hơn 35 quốc gia. Tiến sĩ là giảng viên nòng cốt của các chương trình Quản lý Thể thao do Ủy ban Olympic Quốc tế (IOC) chứng nhận, đồng thời là tác giả của nhiều công trình khoa học và sách chuyên khảo được xuất bản bởi các nhà xuất bản quốc tế. Năm 2009, TS. Nguyễn Trà Giang trở thành người Việt Nam đầu tiên nhận học bổng Tiến sĩ Erasmus Mundus trong lĩnh vực thể thao – một trong những học bổng danh giá của Liên minh châu Âu. Bên cạnh sự nghiệp học thuật, TS. Nguyễn Trà Giang luôn dành tâm huyết cho các hoạt động phát triển cộng đồng thông qua thể thao. Hiện tiến sĩ là nhà sáng lập Dự án cộng đồng Quân Cờ Hạnh Phúc (Happy Chess). Với triết lý lấy thể thao làm nền tảng cho giáo dục và phát triển con người, tiến sĩ không ngừng thúc đẩy các sáng kiến nhằm trao quyền cho trẻ em, phụ nữ và các nhóm yếu thế, góp phần xây dựng cộng đồng khỏe mạnh, bình đẳng và phát triển bền vững.
              </p>
            </div>
          </div>
          
          {/* Right: Dr. Jane Image */}
          <div className="w-full md:w-5/12 lg:w-5/12 flex justify-center md:justify-end items-end relative">
            <img 
              src={drJaneImg} 
              alt="TS. Nguyễn Trà Giang" 
              className="w-full lg:max-w-none object-contain relative z-10 origin-bottom scale-105 lg:scale-110"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
