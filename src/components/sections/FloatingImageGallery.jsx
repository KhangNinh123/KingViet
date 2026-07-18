import React from "react";

const FloatingImageGallery = ({ images = [] }) => {
  if (!images || images.length === 0) {
    return null; // Không hiển thị nếu không có ảnh
  }
  // Bố cục tọa độ cho 10 ảnh bay lơ lửng bất đối xứng toàn màn hình
  const layout = [
    { top: "8%", left: "5%", width: "20%", height: "25%", zIndex: 10 }, // Top Left
    { top: "38%", left: "-3%", width: "16%", height: "22%", zIndex: 20 }, // Mid Left (tràn viền)
    { bottom: "10%", left: "8%", width: "24%", height: "30%", zIndex: 30 }, // Bottom Left
    { top: "-5%", left: "35%", width: "18%", height: "22%", zIndex: 20 }, // Top Center (tràn viền)
    { top: "18%", left: "28%", width: "42%", height: "55%", zIndex: 50 }, // Center (To nhất, đè lên tất cả)
    { bottom: "4%", left: "40%", width: "22%", height: "24%", zIndex: 40 }, // Bottom Center
    { top: "12%", right: "6%", width: "26%", height: "32%", zIndex: 10 }, // Top Right
    { top: "48%", right: "24%", width: "18%", height: "22%", zIndex: 40 }, // Mid Right
    { bottom: "12%", right: "4%", width: "25%", height: "28%", zIndex: 20 }, // Bottom Right
    { top: "35%", right: "-4%", width: "18%", height: "28%", zIndex: 30 }, // Far Right (tràn viền)
  ];

  return (
    <section className="w-full py-16 bg-white">
      {/* Container chiếm toàn màn hình chiều rộng, chiều cao cố định để tạo không gian bay */}
      <div className="relative w-full h-[600px] md:h-[900px] overflow-hidden">
        {images.map((img, index) => {
          const pos = layout[index];
          return (
            <div
              key={img.id}
              className="absolute rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-transform duration-500 hover:scale-[1.05] bg-gray-200"
              style={{
                top: pos.top,
                bottom: pos.bottom,
                left: pos.left,
                right: pos.right,
                width: pos.width,
                height: pos.height,
                zIndex: pos.zIndex,
              }}
            >
              <img
                src={img.src}
                alt={`Gallery image ${img.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FloatingImageGallery;
