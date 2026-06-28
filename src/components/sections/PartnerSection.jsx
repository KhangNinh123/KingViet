import logoLDCVN from "@/assets/images/Logo-LDCVN1.png";

const PartnerSection = () => {
  return (
    <section className="py-20 bg-white flex flex-col items-center px-4 md:px-8">
      {/* New Description Section */}
      <div className="max-w-7xl w-full flex flex-col items-center gap-12">
        {/* Top Banner Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full">
          {/* Left: Text Logo */}
          <div className="flex flex-col text-[#22305C] shrink-0">
            <div className="flex items-end gap-3">
              <span className="text-5xl md:text-6xl lg:text-[70px] font-black italic tracking-tighter leading-none">
                KINGVIET
              </span>
              <span className="text-sm md:text-base italic text-gray-500 mb-1 md:mb-2 leading-snug">
                Live Well
                <br />
                Your Way
              </span>
            </div>
            <div className="flex items-start justify-end gap-3 pr-2 md:pr-8 mt-1">
              <span className="text-sm md:text-base italic text-gray-500 text-right mt-1 md:mt-2 leading-snug">
                Tech Chess
                <br />
                in Education
              </span>
              <span className="text-5xl md:text-6xl lg:text-[70px] font-black italic tracking-tighter leading-none">
                EDUCATION
              </span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[3px] h-28 bg-[#22305C] rounded-full mx-4 rotate-[15deg]"></div>

          {/* Right: Description Text */}
          <div className="max-w-2xl text-center md:text-left text-gray-700 italic text-base md:text-lg">
            <p className="mb-2 leading-relaxed">
              <span className="font-bold text-[#22305C]">
                KingViet Education
              </span>{" "}
              là tổ chức giáo dục phi lợi nhuận mang
              <br className="hidden lg:block" />
              khát vọng kết nối tri thức và lan tỏa những giá trị tốt đẹp
              <br className="hidden lg:block" />
              thông qua giáo dục, trí tuệ và thể thao.
            </p>
            <p className="leading-relaxed">
              Hệ sinh thái của KingViet Education tập trung vào 4 mảng hoạt động
              chính:
            </p>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
          <button className="bg-[#22305C] hover:bg-[#1a2548] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center min-w-[200px]">
            Sách, tạp chí
          </button>
          <button className="bg-[#22305C] hover:bg-[#1a2548] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-transform hover:-translate-y-1 shadow-lg text-center leading-tight min-w-[200px]">
            Công nghệ
            <br />
            trong giáo dục
          </button>
          <button className="bg-[#22305C] hover:bg-[#1a2548] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center min-w-[200px]">
            Trải nghiệm quốc tế
          </button>
          <button className="bg-[#22305C] hover:bg-[#1a2548] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-transform hover:-translate-y-1 shadow-lg text-center leading-tight min-w-[200px]">
            Trao quyền trẻ em
            <br />
            qua thể thao
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
