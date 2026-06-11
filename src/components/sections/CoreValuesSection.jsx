import { Microscope, Globe, BookOpen, Scale } from "lucide-react";

const CoreValuesSection = () => {
  const values = [
    {
      icon: <Microscope size={64} className="text-white mb-6" strokeWidth={1.5} />,
      title: "Công nghệ trong giáo dục",
      description: "(Lớp học, sản phẩm ChessUp)"
    },
    {
      icon: <Globe size={64} className="text-white mb-6" strokeWidth={1.5} />,
      title: "Trải nghiệm quốc tế",
      description: "Trại hè, chương trình giao lưu giúp học sinh, sinh viên mở rộng tầm nhìn toàn cầu."
    },
    {
      icon: <BookOpen size={64} className="text-white mb-6" strokeWidth={1.5} />,
      title: "Sách và Tạp chí",
      description: "Xuất bản tài liệu chuyên sâu về giáo dục, thể thao và khoa học, phục vụ nghiên cứu và học tập."
    },
    {
      icon: <Scale size={64} className="text-white mb-6" strokeWidth={1.5} />,
      title: "Trao quyền trẻ em qua thể thao",
      description: "Tổ chức các dự án giáo dục, hoạt động CSR hướng tới cộng đồng, các sự kiện và giải đấu trao quyền cho trẻ em có hoàn cảnh đặc biệt được tham gia thể thao, nâng cao sức khỏe và sự tự tin. Góp phần xây dựng một xã hội bền vững."
    }
  ];

  return (
    <section className="py-24 bg-[#22305C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">CÔNG TY TNHH KINGVIET EDUCATION</h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">KẾT NỐI TRI THỨC, LAN TỎA GIÁ TRỊ</h3>
        <p className="text-sm tracking-widest uppercase mb-16 text-gray-300">CÁC LĨNH VỰC CHÍNH CỦA KINGVIET EDUCATION:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-600">
          {values.map((item, index) => (
            <div key={index} className="flex flex-col items-center px-4 py-8 lg:py-0">
              {item.icon}
              <h4 className="font-bold text-lg mb-4 h-14 flex items-center justify-center">{item.title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
