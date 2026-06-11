import { Button } from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Background Image (Placeholder) */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop')" }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-4">
          Tinker. Create. <span className="text-[#E5B034]">Innovate.</span>
        </h1>
        <p className="text-base sm:text-xl md:text-3xl font-semibold text-white drop-shadow-md mb-8">
          Super fun, hands-on projects delivered every month
        </p>
        <Button className="text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
          Khám phá thêm
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
