const Footer = () => {
  return (
    <footer className="bg-[#EAEAEA] py-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#22305C] text-white flex items-center justify-center rounded-lg font-bold text-xl">
                K
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#22305C] leading-none text-xl">KINGVIET</span>
                <span className="text-xs text-[#E5B034] tracking-widest font-semibold">EDUCATION</span>
              </div>
            </div>
            
            <div className="mt-4 space-y-2 text-sm font-medium text-gray-800">
              <p className="font-bold text-[#22305C]">Công ty trách nhiệm hữu hạn KingViet Education</p>
              <p>Địa chỉ: Số 2, Đường N1, KDC Mega Residence Khang Điền, P. Phú Hữu, TP. Thủ Đức, TP. HCM.</p>
              <p>Email: kingvietedu@gmail.com</p>
              <p>SĐT: 0835 090 797</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
