import collectionImg from "@/assets/images/home_page/colection.png";

const CollectionSection = () => {
  return (
    <section className="w-full bg-white" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <div className="py-12 md:py-20 px-4 md:px-8 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-14">
          {/* Left: Product Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={collectionImg}
              alt="BST Cực Chất - New Collection"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left text-[#22305C]">
            {/* Title Block */}
            <div className="mb-4 md:mb-5 leading-none">
              {/* Line 1: BST + CỰC */}
              <div className="flex items-baseline gap-3">
                <span className="text-7xl md:text-8xl lg:text-[130px] font-extrabold italic" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>BST</span>
                <span className="text-5xl md:text-6xl lg:text-[70px] italic" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#E91E8C" }}>CỰC</span>
              </div>
              {/* Line 2: CHO DÂN CỜ + CHẤT */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl md:text-3xl lg:text-[40px] font-bold italic">CHO DÂN CỜ</span>
                <span className="text-5xl md:text-6xl lg:text-[80px] italic" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#E91E8C" }}>CHẤT</span>
              </div>
            </div>

            <p className="text-[15px] md:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 pr-0 md:pr-6">
              KingViet tự hào mang đến những bộ sưu tập thời trang và
              merchandise độc quyền, được thiết kế chuyên biệt nhằm khẳng định
              dấu ấn và cá tính của cộng đồng yêu cờ vua.
            </p>

            {/* 100% Lợi Nhuận */}
            <div className="flex items-center gap-5 mb-8 md:mb-10">
              <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span className="text-3xl md:text-4xl italic" style={{ fontWeight: 800 }}>
                  100%
                </span>
                <div className="text-base md:text-lg italic -mt-1" style={{ fontWeight: 800 }}>
                  Lợi Nhuận
                </div>
              </div>
              <div className="w-[3px] h-14 bg-[#22305C]/20 rounded-full"></div>
              <p className="text-gray-700 text-sm md:text-base leading-snug">
                Dùng để tổ chức Dự án
                <br />
                Quân cờ Hạnh phúc
                <br />
                <span className="font-bold text-[#22305C]">(Happy Chess)</span>
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-block border-2 border-[#22305C] text-[#22305C] font-bold italic text-base md:text-lg px-10 py-3 rounded-full hover:bg-[#22305C] hover:text-white transition-all duration-300 tracking-wide"
            >
              MUA NGAY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
