import { Search, ChevronDown, Microscope, Globe, Lightbulb, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#22305C] text-white flex items-center justify-center rounded-lg font-bold text-xl">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#22305C] leading-none text-xl">KINGVIET</span>
              <span className="text-xs text-[#E5B034] tracking-widest font-semibold">EDUCATION</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-sm font-semibold text-gray-900 hover:text-[#E5B034] py-8">Trang chủ</Link>
            <div className="relative group cursor-pointer flex items-center">
              <div className="flex items-center gap-1 text-sm font-semibold text-gray-900 group-hover:text-[#E5B034] py-8">
                Lĩnh vực <ChevronDown size={16} />
              </div>
              
              {/* Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-white shadow-2xl rounded-xl p-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 flex flex-col gap-3">
                <Link to="#" className="flex items-center gap-4 p-3 bg-[#EBF0F6] rounded-xl hover:bg-[#D9E2F0] transition-colors relative z-10">
                  <div className="w-12 h-12 bg-[#22305C] text-white flex items-center justify-center rounded-xl flex-shrink-0 shadow-md">
                    <Microscope size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold text-[#22305C] text-[15px]">Công nghệ trong giáo dục</span>
                </Link>

                <Link to="#" className="flex items-center gap-4 p-3 bg-[#EBF0F6] rounded-xl hover:bg-[#D9E2F0] transition-colors relative z-10">
                  <div className="w-12 h-12 bg-[#22305C] text-white flex items-center justify-center rounded-xl flex-shrink-0 shadow-md">
                    <Globe size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold text-[#22305C] text-[15px]">Trải nghiệm quốc tế</span>
                </Link>

                <Link to="#" className="flex items-center gap-4 p-3 bg-[#EBF0F6] rounded-xl hover:bg-[#D9E2F0] transition-colors relative z-10">
                  <div className="w-12 h-12 bg-[#22305C] text-white flex items-center justify-center rounded-xl flex-shrink-0 shadow-md">
                    <Lightbulb size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold text-[#22305C] text-[15px]">Sách & Tạp chí</span>
                </Link>

                <Link to="#" className="flex items-center gap-4 p-3 bg-[#EBF0F6] rounded-xl hover:bg-[#D9E2F0] transition-colors relative z-10">
                  <div className="w-12 h-12 bg-[#22305C] text-white flex items-center justify-center rounded-xl flex-shrink-0 shadow-md">
                    <Scale size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold text-[#22305C] text-[15px]">Trao quyền trẻ em trong thể thao</span>
                </Link>
              </div>
            </div>
            <Link to="/collection" className="text-sm font-semibold text-gray-900 hover:text-[#E5B034] py-8">Collection</Link>
            <Link to="/về-chúng-tôi" className="text-sm font-semibold text-gray-900 hover:text-[#E5B034] py-8">Về chúng tôi</Link>
            <Link to="/liên-hệ" className="text-sm font-semibold text-gray-900 hover:text-[#E5B034] py-8">Liên hệ</Link>
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="pl-4 pr-10 py-1.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#22305C] w-48 transition-all"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
