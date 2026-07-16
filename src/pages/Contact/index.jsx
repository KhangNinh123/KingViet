import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import bannerLienHe from '../../assets/images/banners/banner-lien-he.png';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Left Content */}
              <div className="lg:w-5/12 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1E2954] leading-[1.1] mb-6 tracking-tight">
                  Liên hệ với KingViet
                  <br className="hidden lg:block" />
                  Education
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn trên con đường kiến tạo tri thức. Đội ngũ KingViet Education cam kết mang đến những giải pháp giáo dục toàn diện và chất lượng nhất.
                </p>
              </div>

              {/* Right Image */}
              <div className="lg:w-7/12 relative">
                <img 
                  src={bannerLienHe} 
                  alt="Liên hệ với KingViet Education" 
                  className="relative z-10 w-full h-auto object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* INFO CARDS SECTION */}
        <section className="relative py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Card 1: Address */}
              <div className="bg-white p-8 lg:p-10 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-[#1E2954] w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#1E2954] text-xl mb-4">Địa chỉ</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  Số 2, Đường N1, KDC Mega Residence Khang Điền, P. Long Trường, TP. HCM.
                </p>
                <a 
                  href="https://www.google.com/maps/place/Công+ty+TNHH+KingViet+Education/@10.7995475,106.7931162,17z/data=!4m6!3m5!1s0x31752b2b052eb8bd:0xb33769dfe4b0a776!8m2!3d10.7995475!4d106.7931162!16s%2Fg%2F11xw3pjg6b?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#A78B3F] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                >
                  Xem bản đồ <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Card 2: Email */}
              <div className="bg-white p-8 lg:p-10 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-[#1E2954] w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#1E2954] text-xl mb-4">Email</h3>
                <div className="mb-8 flex-grow">
                  <p className="text-gray-700 font-medium mb-1">
                    kingvietedu@gmail.com
                  </p>
                  <p className="italic text-gray-500 text-sm">
                    Phản hồi trong vòng 24h làm việc
                  </p>
                </div>
                <a 
                  href="mailto:kingvietedu@gmail.com" 
                  className="text-[#A78B3F] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                >
                  Gửi email ngay <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Card 3: Phone */}
              <div className="bg-white p-8 lg:p-10 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <Phone className="text-[#1E2954] w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#1E2954] text-xl mb-4">Số điện thoại</h3>
                <div className="mb-8 flex-grow">
                  <p className="text-gray-700 font-medium mb-1">
                    0835 090 797
                  </p>
                  <p className="italic text-gray-500 text-sm">
                    Thứ 2 - Thứ 7 (8:00 - 17:30)
                  </p>
                </div>
                <a 
                  href="tel:0835090797" 
                  className="text-[#A78B3F] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                >
                  Gọi tư vấn <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;