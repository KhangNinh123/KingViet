import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { ChevronRight } from "lucide-react";

const Collection = () => {
  // Dữ liệu giả lập (Mock data) dựa trên thiết kế bạn cung cấp
  const products = [
    {
      id: 1,
      name: "Bàn cờ thông minh ChessUp V2",
      price: "3.590.000đ",
      imgDefault:
        "https://images.unsplash.com/photo-1580541832626-2a7151ee6010?q=80&w=800&auto=format&fit=crop",
      imgHover:
        "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=800&auto=format&fit=crop",
      isNew: true,
      hasPromo: false,
      colors: ["#000000", "#ffffff", "#8b5a2b"],
      activeColor: 0,
    },
    {
      id: 2,
      name: "Bộ Kit lắp ráp STEM Robotics",
      price: "850.000đ",
      imgDefault:
        "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=800&auto=format&fit=crop",
      imgHover:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      isNew: false,
      hasPromo: true,
      colors: ["#3b82f6", "#ef4444"],
      activeColor: 0,
    },
    {
      id: 3,
      name: "Sách: Tư duy chiến lược cho trẻ em",
      price: "150.000đ",
      imgDefault:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
      imgHover:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
      isNew: true,
      hasPromo: true,
      colors: ["#22305c"],
      activeColor: 0,
    },
    {
      id: 4,
      name: "Tạp chí Giáo dục số KingViet (Tháng 10)",
      price: "85.000đ",
      imgDefault:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
      imgHover:
        "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=800&auto=format&fit=crop",
      isNew: false,
      hasPromo: false,
      colors: ["#ffffff", "#f3f4f6"],
      activeColor: 0,
    },
    {
      id: 5,
      name: "Khóa học Lập trình Kids (Online)",
      price: "1.200.000đ",
      imgDefault:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      imgHover:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop",
      isNew: true,
      hasPromo: true,
      colors: [],
      activeColor: 0,
    },
    {
      id: 6,
      name: "Đồng phục KingViet - Phiên bản Mùa hè",
      price: "250.000đ",
      imgDefault:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
      imgHover:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
      isNew: false,
      hasPromo: false,
      colors: [],
      activeColor: 0,
    },
    {
      id: 7,
      name: "Sách: Toán tư duy 1",
      price: "120.000đ",
      imgDefault:
        "https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=800&auto=format&fit=crop",
      imgHover:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
      isNew: false,
      hasPromo: false,
      colors: [],
      activeColor: 0,
    },
    {
      id: 8,
      name: "Balo KingViet chống gù",
      price: "450.000đ",
      imgDefault:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      imgHover:
        "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800&auto=format&fit=crop",
      isNew: true,
      hasPromo: false,
      colors: [],
      activeColor: 0,
    },
    {
      id: 9,
      name: "Kính thực tế ảo (VR) Giáo dục",
      price: "1.890.000đ",
      imgDefault:
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop",
      imgHover:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop",
      isNew: true,
      hasPromo: true,
      colors: [],
      activeColor: 0,
    },
    {
      id: 10,
      name: "Bộ cờ vua nam châm tiêu chuẩn",
      price: "350.000đ",
      imgDefault:
        "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=800&auto=format&fit=crop",
      imgHover:
        "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop",
      isNew: false,
      hasPromo: false,
      colors: [],
      activeColor: 0,
    },
    {
      id: 11,
      name: "Flycam Mini - Thực hành Robotics",
      price: "990.000đ",
      imgDefault:
        "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop",
      imgHover:
        "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800&auto=format&fit=crop",
      isNew: false,
      hasPromo: true,
      colors: [],
      activeColor: 0,
    },
    {
      id: 12,
      name: "Thẻ hội viên KingViet VIP",
      price: "500.000đ",
      imgDefault:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
      imgHover:
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop",
      isNew: true,
      hasPromo: false,
      colors: [],
      activeColor: 0,
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase">
              BỘ SƯU TẬP NỔI BẬT
            </h2>
            <a
              href="#"
              className="text-sm font-semibold text-gray-800 underline hover:text-black transition-colors"
            >
              Xem thêm
            </a>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col cursor-default group">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] bg-[#f0f0f0] rounded-xl overflow-hidden mb-4">
                  {/* Default Image */}
                  <img
                    src={product.imgDefault}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                  />
                  {/* Hover Image */}
                  <img
                    src={product.imgHover}
                    alt={`${product.name} hover`}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                  />

                  {/* Bottom Popup Panel (On Hover) */}
                  <div className="absolute bottom-0 inset-x-0 pt-8 pb-4 px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-20 pointer-events-none bg-gradient-to-t from-white/95 via-white/70 to-transparent backdrop-blur-[4px] rounded-b-xl">
                    <div className="text-center font-bold text-gray-800 text-xs sm:text-sm mb-3">
                      Tư vấn & Mua nhanh +
                    </div>
                    <a
                      href="https://zalo.me/0988666888" // Replace with actual Zalo link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 rounded-lg shadow-md pointer-events-auto flex items-center justify-center gap-2 transition-colors"
                    >
                      {/* Zalo Icon SVG */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.127 9.873C21.127 5.525 17.067 2 12.063 2C7.06 2 3 5.525 3 9.873C3 12.553 4.605 14.947 7.004 16.333V21.111L10.742 18.221C11.173 18.283 11.613 18.318 12.063 18.318C17.067 18.318 21.127 14.793 21.127 9.873Z" fill="currentColor"/>
                        <path d="M9.13 10.655H7.369V8.78H5.958V12.531H7.719L9.13 10.655Z" fill="white"/>
                        <path d="M10.871 12.531H12.632L15.434 8.78H13.62L11.536 11.584V8.78H10.125V12.531H10.871Z" fill="white"/>
                      </svg>
                      Chat Zalo
                    </a>
                  </div>

                  {/* "NEW" Badge */}
                  {product.isNew && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md z-10 uppercase tracking-wider">
                      NEW
                    </div>
                  )}

                  {/* Promo Banner (Bottom of image) */}
                  {product.hasPromo && (
                    <div className="absolute bottom-0 inset-x-0 bg-red-500 text-white flex items-center justify-between px-3 py-1.5 z-10">
                      <div className="flex items-center gap-1.5">
                        <div className="bg-white text-red-500 text-[9px] font-extrabold px-1.5 py-0.5 rounded-sm uppercase tracking-tighter">
                          TẶNG
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-tight drop-shadow-sm">
                          KHÓA HỌC ONLINE
                        </span>
                      </div>
                      <div className="text-right leading-none">
                        <div className="text-[10px] font-bold">TRỊ GIÁ</div>
                        <div className="text-[10px] font-black text-yellow-300">
                          500K
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Details (Below Image) */}
                <div className="flex flex-col px-1">


                  {/* Title */}
                  <h3 className="text-[13px] md:text-[15px] font-medium text-gray-900 leading-snug mb-1.5 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <p className="text-sm md:text-base font-bold text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collection;
