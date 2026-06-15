import { useState } from "react";
import { Search, ChevronDown, Menu, X, Microscope, Globe, Lightbulb, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import logoKV from "../../assets/icons/Logo KV 1.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Left Group: Logo + Nav */}
          <div className="flex items-center gap-8 md:gap-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logoKV} alt="Kingviet Logo" className="h-10 md:h-14 object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8 text-[#22305C]">
              <Link to="/" className="text-sm lg:text-[15px] font-bold hover:text-[#E5B034] py-8 transition-colors">Trang chủ</Link>
              <div className="relative group cursor-pointer flex items-center">
                <div className="flex items-center gap-1 text-sm lg:text-[15px] font-bold hover:text-[#E5B034] py-8 transition-colors">
                  Lĩnh vực <ChevronDown size={16} />
                </div>
                
                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-0 w-80 bg-white shadow-2xl rounded-xl p-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 flex flex-col gap-3">
                  <Link to="/cong-nghe-giao-duc" className="flex items-center gap-4 p-3 bg-[#EBF0F6] rounded-xl hover:bg-[#D9E2F0] transition-colors relative z-10">
                    <div className="w-12 h-12 bg-[#22305C] text-white flex items-center justify-center rounded-xl flex-shrink-0 shadow-md">
                      <Microscope size={24} strokeWidth={1.5} />
                    </div>
                    <span className="font-semibold text-[#22305C] text-[15px]">Công nghệ trong giáo dục</span>
                  </Link>
                  <Link to="/trai-nghiem-quoc-te" className="flex items-center gap-4 p-3 bg-[#EBF0F6] rounded-xl hover:bg-[#D9E2F0] transition-colors relative z-10">
                    <div className="w-12 h-12 bg-[#22305C] text-white flex items-center justify-center rounded-xl flex-shrink-0 shadow-md">
                      <Globe size={24} strokeWidth={1.5} />
                    </div>
                    <span className="font-semibold text-[#22305C] text-[15px]">Trải nghiệm quốc tế</span>
                  </Link>
                  <Link to="/sach-va-tap-chi" className="flex items-center gap-4 p-3 bg-[#EBF0F6] rounded-xl hover:bg-[#D9E2F0] transition-colors relative z-10">
                    <div className="w-12 h-12 bg-[#22305C] text-white flex items-center justify-center rounded-xl flex-shrink-0 shadow-md">
                      <Lightbulb size={24} strokeWidth={1.5} />
                    </div>
                    <span className="font-semibold text-[#22305C] text-[15px]">Sách & Tạp chí</span>
                  </Link>
                  <Link to="/trao-quyen-tre-em-trong-the-thao" className="flex items-center gap-4 p-3 bg-[#EBF0F6] rounded-xl hover:bg-[#D9E2F0] transition-colors relative z-10">
                    <div className="w-12 h-12 bg-[#22305C] text-white flex items-center justify-center rounded-xl flex-shrink-0 shadow-md">
                      <Scale size={24} strokeWidth={1.5} />
                    </div>
                    <span className="font-semibold text-[#22305C] text-[15px]">Trao quyền trẻ em trong thể thao</span>
                  </Link>
                </div>
              </div>
              <Link to="/collection" className="text-sm lg:text-[15px] font-bold hover:text-[#E5B034] py-8 transition-colors">Collection</Link>
              <Link to="/về-chúng-tôi" className="text-sm lg:text-[15px] font-bold hover:text-[#E5B034] py-8 transition-colors">Về chúng tôi</Link>
              <Link to="/liên-hệ" className="text-sm lg:text-[15px] font-bold hover:text-[#E5B034] py-8 transition-colors">Liên hệ</Link>
            </nav>
          </div>

          {/* Right Group: Search + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop Search */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="pl-5 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#22305C] focus:ring-1 focus:ring-[#22305C] w-56 lg:w-64 transition-all"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#22305C]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-in slide-in-from-top">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" className="block py-3 px-4 text-sm font-semibold text-gray-900 hover:bg-[#EBF0F6] rounded-xl" onClick={() => setMobileMenuOpen(false)}>Trang chủ</Link>
            
            <div>
              <button 
                className="flex items-center justify-between w-full py-3 px-4 text-sm font-semibold text-gray-900 hover:bg-[#EBF0F6] rounded-xl"
                onClick={() => setMobileSubOpen(!mobileSubOpen)}
              >
                Lĩnh vực
                <ChevronDown size={16} className={`transition-transform ${mobileSubOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileSubOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/cong-nghe-giao-duc" className="flex items-center gap-3 p-3 bg-[#EBF0F6] rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                    <Microscope size={20} className="text-[#22305C]" />
                    <span className="text-sm font-medium text-[#22305C]">Công nghệ trong giáo dục</span>
                  </Link>
                  <Link to="/trai-nghiem-quoc-te" className="flex items-center gap-3 p-3 bg-[#EBF0F6] rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                    <Globe size={20} className="text-[#22305C]" />
                    <span className="text-sm font-medium text-[#22305C]">Trải nghiệm quốc tế</span>
                  </Link>
                  <Link to="/sach-va-tap-chi" className="flex items-center gap-3 p-3 bg-[#EBF0F6] rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                    <Lightbulb size={20} className="text-[#22305C]" />
                    <span className="text-sm font-medium text-[#22305C]">Sách & Tạp chí</span>
                  </Link>
                  <Link to="/trao-quyen-tre-em-trong-the-thao" className="flex items-center gap-3 p-3 bg-[#EBF0F6] rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                    <Scale size={20} className="text-[#22305C]" />
                    <span className="text-sm font-medium text-[#22305C]">Trao quyền trẻ em trong thể thao</span>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/collection" className="block py-3 px-4 text-sm font-semibold text-gray-900 hover:bg-[#EBF0F6] rounded-xl" onClick={() => setMobileMenuOpen(false)}>Collection</Link>
            <Link to="/về-chúng-tôi" className="block py-3 px-4 text-sm font-semibold text-gray-900 hover:bg-[#EBF0F6] rounded-xl" onClick={() => setMobileMenuOpen(false)}>Về chúng tôi</Link>
            <Link to="/liên-hệ" className="block py-3 px-4 text-sm font-semibold text-gray-900 hover:bg-[#EBF0F6] rounded-xl" onClick={() => setMobileMenuOpen(false)}>Liên hệ</Link>

            {/* Mobile Search */}
            <div className="pt-3 px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#22305C] transition-all"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
