import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { ChevronRight } from "lucide-react";

const Collection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Dữ liệu giả lập (Mock data) dựa trên thiết kế bạn cung cấp
  const products = [
    {
        "id": 1,
        "name": "Bàn cờ thông minh ChessUp Version 2",
        "price": "13.500.000đ",
        "desc": "Bàn cờ thông minh tích hợp AI đến từ Mỹ phân tích nước đi tức thời bằng hệ thống đèn LED, hỗ trợ chơi online, chơi với máy mượt mà đa thể loại.",
        "imgDefault": "/images/products/ban-co-thong-minh-chessup-v2.png"
    },
    {
        "id": 2,
        "name": "Áo Happy Chess trắng cổ tròn",
        "price": "290.000đ",
        "desc": "Chất liệu cotton cao cấp, tone trắng cực kỳ dễ phối đồ. Phiên bản cổ tròn trẻ trung thoải mái.",
        "imgDefault": "/images/products/ao-happy-chess-trang-co-tron-1.png",
        "imgHover": "/images/products/ao-happy-chess-trang-co-tron-2.png"
    },
    {
        "id": 3,
        "name": "Áo Happy Chess trắng polo",
        "price": "290.000đ",
        "desc": "Chất liệu cotton cao cấp, tone trắng cực kỳ dễ phối đồ. Phiên bản polo lịch sự, phù hợp đi học, thi đấu, và sự kiện.",
        "imgDefault": "/images/products/ao-happy-chess-trang-polo-1.png",
        "imgHover": "/images/products/ao-happy-chess-trang-polo-2.png"
    },
    {
        "id": 4,
        "name": "Áo Happy Chess Mùa 5 - Xanh",
        "price": "290.000đ",
        "desc": "BST Hè 2026 mang phong cách thể thao, chất liệu vải thoáng mát phối màu xanh trắng hiện đại, tôn lên sự trẻ trung và bản lĩnh của kỳ thủ Việt.",
        "imgDefault": "/images/products/ao-happy-chess-mua-5-xanh-1.png",
        "imgHover": "/images/products/ao-happy-chess-mua-5-xanh-2.png"
    },
    {
        "id": 5,
        "name": "Áo Happy Chess Mùa 5 - Hồng",
        "price": "290.000đ",
        "desc": "BST Hè 2026 mang phong cách thể thao, chất liệu vải thoáng mát phối màu hồng đen hiện đại, tôn lên sự trẻ trung và bản lĩnh của kỳ thủ Việt.",
        "imgDefault": "/images/products/ao-happy-chess-mua-5-hong-1.png",
        "imgHover": "/images/products/ao-happy-chess-mua-5-hong-2.png"
    },
    {
        "id": 6,
        "name": "Áo Rise - Đỏ",
        "price": "290.000đ",
        "desc": "Áo polo phối màu đỏ trắng, chất liệu cotton thoáng mát, lưu niệm Giải Vô địch Cúp Cờ vua Quốc gia năm 2026.",
        "imgDefault": "/images/products/ao-rise-do-1.png",
        "imgHover": "/images/products/ao-rise-do-2.png"
    },
    {
        "id": 7,
        "name": "Áo Live Well Your Way - Đen",
        "price": "290.000đ",
        "desc": "Áo polo phối màu đen xanh mang đậm nét cờ vua cá tính cùng thông điệp sống khỏe theo cách của bạn.",
        "imgDefault": "/images/products/ao-live-well-your-way-den-1.png",
        "imgHover": "/images/products/ao-live-well-your-way-den-2.png"
    },
    {
        "id": 8,
        "name": "Áo Knight Move - Trắng",
        "price": "150.000đ",
        "desc": "Áo polo trắng lưu niệm Giải vô địch Cờ vua Cúp CLB Quốc gia Năm 2026, chất liệu cotton cao cấp thoáng mát, phù hợp đi học và thi đấu.",
        "imgDefault": "/images/products/ao-knight-move-trang-1.png",
        "imgHover": "/images/products/ao-knight-move-trang-2.png"
    },
    {
        "id": 9,
        "name": "Áo Knight Move - Xanh dương",
        "price": "150.000đ",
        "desc": "Áo polo xanh lưu niệm Giải vô địch Cờ vua Cúp CLB Quốc gia Năm 2026, chất liệu cá sấu bền bỉ, thoáng mát, phù hợp đi học và thi đấu.",
        "imgDefault": "/images/products/ao-knight-move-xanh-duong-1.png",
        "imgHover": "/images/products/ao-knight-move-xanh-duong-2.png"
    },
    {
        "id": 10,
        "name": "Áo Knight Move - Xanh lá",
        "price": "150.000đ",
        "desc": "Áo cổ tròn xanh lá lưu niệm Giải vô địch Cờ vua Cúp CLB Quốc gia Năm 2026, chất liệu cotton thoáng mát, dễ mặc, phù hợp đi chơi, đi thi đấu.",
        "imgDefault": "/images/products/ao-knight-move-xanh-la-1.png",
        "imgHover": "/images/products/ao-knight-move-xanh-la-2.png"
    },
    {
        "id": 11,
        "name": "Túi tote- Xanh Rêu",
        "price": "150.000đ",
        "desc": "Túi tote kỷ niệm Giải vô địch Cờ vua Cúp CLB Quốc gia Năm 2026, chất liệu canvas dày dặn, rộng rãi, phối màu xanh rêu thời trang, phù hợp đi thư viện, cà phê hẹn hò cuối tuần.",
        "imgDefault": "/images/products/tui-tote-xanh-reu.png"
    },
    {
        "id": 12,
        "name": "Túi đeo Happy Chess - Be",
        "price": "150.000đ",
        "desc": "Túi đeo phối màu be trung tính, thiết kế hiện đại, tiện lợi mang cả thế giới đi theo.",
        "imgDefault": "/images/products/tui-deo-happy-chess-be.png"
    },
    {
        "id": 13,
        "name": "Bàn cờ gấp gọn nâm châm",
        "price": "250.000đ",
        "desc": "Bàn cờ nhỏ gọn, thiết kế thông minh tiện lợi, dễ dàng mang đi cà phê, du lịch.",
        "imgDefault": "/images/products/ban-co-gap-gon-nam-cham-1.png",
        "imgHover": "/images/products/ban-co-gap-gon-nam-cham-2.png"
    },
    {
        "id": 14,
        "name": "Nón Live Well Your Way - Trắng",
        "price": "190.000đ",
        "desc": "Hoàn thiện outfit với nón lưỡi trai Live Well Your Way. Form nón cứng cáp, che nắng tốt, phù hợp du lịch, thể thao và sử dụng hằng ngày.",
        "imgDefault": "/images/products/non-live-well-your-way-trang.png"
    },
    {
        "id": 15,
        "name": "Nón Live Well Your Way - Xanh",
        "price": "190.000đ",
        "desc": "Hoàn thiện outfit với nón lưỡi trai Live Well Your Way. Form nón cứng cáp, che nắng tốt, phù hợp du lịch, thể thao và sử dụng hằng ngày.",
        "imgDefault": "/images/products/non-live-well-your-way-xanh.png"
    },
    {
        "id": 16,
        "name": "Bình giữ nhiệt USFD",
        "price": "190.000đ",
        "desc": "Bình giữ nhiệt thuộc BST A Unified System Fitness Design, thiết kế thời trang thể thao cá tính, giữ lạnh cả ngày dài.",
        "imgDefault": "/images/products/binh-giu-nhiet-usfd.png"
    },
    {
        "id": 17,
        "name": "Khăn thể thao hiệu Polo Beverly Hills",
        "price": "200.000đ",
        "desc": "Khăn lông mềm mịn, thấm hút tốt. Mang lại cảm giác thoải mái và tiện dụng trong mọi hoạt động hằng ngày.",
        "imgDefault": "/images/products/khan-the-thao-polo-beverly-hills.png"
    },
    {
        "id": 18,
        "name": "Huy hiệu Happy Chess",
        "price": "25.000đ",
        "desc": "Pin cài balo, túi xách, các bé nhỏ xinh, sành điệu, lan tỏa tinh thần Happy Chess: vui, tự tin, yêu cờ.",
        "imgDefault": "/images/products/huy-hieu-happy-chess.png"
    },
    {
        "id": 19,
        "name": "Móc khóa Happy Chess",
        "price": "35.000đ",
        "desc": "Móc khóa Happy Chess – nhỏ xinh, tiện dụng, mang năng lượng tích cực và tinh thần yêu cờ mỗi ngày.",
        "imgDefault": "/images/products/moc-khoa-happy-chess.png"
    }
];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            {currentProducts.map((product) => (
              <div key={product.id} className="flex flex-col cursor-default group">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] bg-[#f0f0f0] rounded-xl overflow-hidden mb-4">
                  {/* Default Image */}
                  <img
                    src={product.imgDefault}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-300 ease-in-out opacity-100 ${product.imgHover ? 'group-hover:opacity-0' : ''}`}
                  />
                  {/* Hover Image or Text */}
                  {product.imgHover ? (
                    <img
                      src={product.imgHover}
                      alt={`${product.name} hover`}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[6px] p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center pointer-events-none z-10">
                      <p className="text-[13px] md:text-[14px] text-gray-900 text-center font-bold line-clamp-6 leading-relaxed px-1 mb-8 drop-shadow-sm">{product.desc}</p>
                    </div>
                  )}

                  {/* Bottom Popup Panel (On Hover) */}
                  <div className="absolute bottom-0 inset-x-0 pt-8 pb-4 px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-20 pointer-events-none bg-gradient-to-t from-white/90 via-white/70 to-transparent backdrop-blur-[2px] rounded-b-xl">

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
                      Mua ngay
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

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 gap-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collection;
