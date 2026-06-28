import imgSach from "@/assets/images/home_page/Sach tap chi.png";
import imgGiaoDuc from "@/assets/images/home_page/gduc cong nghe.JPG";
import imgTraiNghiem from "@/assets/images/home_page/trai nghiem qte.jpg";
import imgTreEm from "@/assets/images/home_page/tre em.JPG";

const CoreValuesSection = () => {
  const values = [
    {
      image: imgSach,
      title: (
        <>
          Sách
          <br />
          Tạp chí
        </>
      ),
    },
    {
      image: imgGiaoDuc,
      title: (
        <>
          Công nghệ
          <br />
          trong
          <br />
          giáo dục
        </>
      ),
    },
    {
      image: imgTraiNghiem,
      title: (
        <>
          Trải nghiệm
          <br />
          quốc tế
        </>
      ),
    },
    {
      image: imgTreEm,
      title: (
        <>
          Trao quyền
          <br />
          trẻ em
          <br />
          qua thể thao
        </>
      ),
    }
  ];

  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {values.map((item, index) => (
          <div key={index} className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group">
            {/* Image */}
            <img 
              src={item.image} 
              alt="KingViet Activity" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            
            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 pb-8 md:pb-12 flex flex-col justify-end items-center text-center">
              <h4 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl italic tracking-wide leading-tight drop-shadow-md">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;
