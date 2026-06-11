import logoLDCVN from "@/assets/images/Logo LDCVN 1.png";

const PartnerSection = () => {
  return (
    <section className="py-20 bg-white flex justify-center items-center">
      <div className="flex flex-col items-center">
        <img src={logoLDCVN} alt="Liên Đoàn Cờ Việt Nam" className="w-[300px] md:w-[400px] h-auto object-contain" />
      </div>
    </section>
  );
};

export default PartnerSection;
