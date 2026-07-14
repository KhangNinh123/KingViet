import { MapPin, Mail, Phone } from "lucide-react";
import logoKV from "../../assets/icons/Logo KV 1.png";

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const TiktokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const ZaloIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#22305C] text-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {/* Column 1: Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-3 rounded-xl w-max">
              <img src={logoKV} alt="Kingviet Logo" className="h-12 object-contain" />
            </div>

            <div className="space-y-4 text-sm text-gray-300">
              <p className="font-bold text-white text-base">
                Công ty trách nhiệm hữu hạn KingViet Education
              </p>
              <div className="flex items-start gap-3">
                <MapPin className="shrink-0 w-5 h-5 text-[#E5B034]" />
                <p>
                  Số 2, Đường N1, KDC Mega Residence Khang Điền, P. Long Trường,
                  TP. HCM.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="shrink-0 w-5 h-5 text-[#E5B034]" />
                <p>kingvietedu@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="shrink-0 w-5 h-5 text-[#E5B034]" />
                <p>0835 090 797</p>
              </div>
            </div>
          </div>

          {/* Column 2: Map */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white uppercase tracking-wider">
              Map
            </h3>
            <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-200 relative">
              {/* Google Maps iframe wrapper */}
              <iframe
                src="https://maps.google.com/maps?q=KDC%20Mega%20Residence%20Khang%20%C4%90i%E1%BB%81n%2C%20P.%20Long%20Tr%C6%B0%E1%BB%9Dng%2C%20TP.%20HCM&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KingViet Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Column 3: Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white uppercase tracking-wider">
              Liên kết hữu ích
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-[#E5B034] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#E5B034] rounded-full"></span>
                  Thông tin bảo hành ChessUp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#E5B034] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#E5B034] rounded-full"></span>
                  Bộ sưu tập KingViet Edu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#E5B034] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#E5B034] rounded-full"></span>
                  Tin tức
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#E5B034] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#E5B034] rounded-full"></span>
                  Công nghệ trong giáo dục
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#E5B034] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#E5B034] rounded-full"></span>
                  Về KingViet
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-lg text-white uppercase tracking-wider">
              Social
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E5B034] hover:text-[#22305C] hover:-translate-y-1 transition-all duration-300"
                title="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E5B034] hover:text-[#22305C] hover:-translate-y-1 transition-all duration-300"
                title="Youtube"
              >
                <YoutubeIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E5B034] hover:text-[#22305C] hover:-translate-y-1 transition-all duration-300"
                title="Tiktok"
              >
                <TiktokIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E5B034] hover:text-[#22305C] hover:-translate-y-1 transition-all duration-300"
                title="Zalo"
              >
                <ZaloIcon />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Kết nối với chúng tôi qua các nền tảng mạng xã hội để cập nhật
              những thông tin mới nhất.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} KingViet Education. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#E5B034] transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:text-[#E5B034] transition-colors">
              Điều khoản dịch vụ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
