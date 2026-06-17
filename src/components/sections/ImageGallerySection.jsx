import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallerySection = ({ title }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#22305C] mb-12 mt-16 md:mt-32 text-center">
        {title}
      </h2>

      {/* Gallery Slider */}
      <div className="relative w-full overflow-hidden pb-8 group">
        {/* Left Arrow */}
        <button
          onClick={() => {
            const slider = document.getElementById("gallery-slider");
            if (slider) slider.scrollBy({ left: -400, behavior: "smooth" });
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 -ml-4 md:ml-4 border border-gray-100"
          aria-label="Previous image"
        >
          <ChevronLeft
            size={32}
            className="text-[#22305C]"
            strokeWidth={2}
          />
        </button>

        {/* Scrollable Container */}
        <div
          id="gallery-slider"
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar px-4 md:px-12 w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `
            #gallery-slider::-webkit-scrollbar { display: none; }
          `,
            }}
          />

          {/* Group 1: Wide top, 2 Squares bottom */}
          <div className="flex flex-col gap-4 snap-center shrink-0">
            <div className="w-[280px] md:w-[516px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
            <div className="flex gap-4">
              <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
              <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
            </div>
          </div>

          {/* Group 2: 2 Squares */}
          <div className="flex flex-col gap-4 snap-center shrink-0">
            <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
            <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
          </div>

          {/* Group 3: 2 Squares */}
          <div className="flex flex-col gap-4 snap-center shrink-0">
            <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
            <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
          </div>

          {/* Group 4: Wide top, Wide bottom */}
          <div className="flex flex-col gap-4 snap-center shrink-0">
            <div className="w-[280px] md:w-[516px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
            <div className="w-[280px] md:w-[516px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
          </div>

          {/* Group 5: 2 Squares */}
          <div className="flex flex-col gap-4 snap-center shrink-0">
            <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
            <div className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg"></div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => {
            const slider = document.getElementById("gallery-slider");
            if (slider) slider.scrollBy({ left: 400, behavior: "smooth" });
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 -mr-4 md:mr-4 border border-gray-100"
          aria-label="Next image"
        >
          <ChevronRight
            size={32}
            className="text-[#22305C]"
            strokeWidth={2}
          />
        </button>
      </div>
    </div>
  );
};

export default ImageGallerySection;
