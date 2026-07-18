import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '@/assets/images/gallery-lop-hoc/lop-hoc-01.jpg';
import img2 from '@/assets/images/gallery-lop-hoc/lop-hoc-02.jpg';
import img3 from '@/assets/images/gallery-lop-hoc/lop-hoc-03.jpg';
import img4 from '@/assets/images/gallery-lop-hoc/lop-hoc-04.jpg';
import img5 from '@/assets/images/gallery-lop-hoc/lop-hoc-05.jpg';
import img6 from '@/assets/images/gallery-lop-hoc/lop-hoc-06.jpg';
import img7 from '@/assets/images/gallery-lop-hoc/lop-hoc-07.jpg';
import img8 from '@/assets/images/gallery-lop-hoc/lop-hoc-08.jpg';

const ImageGallerySection = ({ title, images }) => {
  const defaultImages = [img1, img2, img3, img4, img5, img6, img7, img8];
  const displayImages = images || defaultImages;

  const renderPattern = () => {
    const groups = [];
    for (let j = 0; j < displayImages.length; j += 5) {
      const groupImages = displayImages.slice(j, j + 5);
      
      // Group 1: Wide top, 2 Squares bottom (requires 3 images)
      if (groupImages.length >= 3) {
        groups.push(
          <div key={`g1-${j}`} className="flex flex-col gap-4 snap-center shrink-0">
            <img src={groupImages[0]} alt="Gallery" className="w-[280px] md:w-[516px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg object-cover" />
            <div className="flex gap-4">
              <img src={groupImages[1]} alt="Gallery" className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg object-cover" />
              <img src={groupImages[2]} alt="Gallery" className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg object-cover" />
            </div>
          </div>
        );
      } else if (groupImages.length > 0) {
        // Fallback if less than 3 images in this chunk
        groups.push(
          <div key={`g1-fb-${j}`} className="flex flex-col gap-4 snap-center shrink-0">
            {groupImages.map((img, idx) => (
              <img key={idx} src={img} alt="Gallery" className="w-[280px] md:w-[516px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg object-cover" />
            ))}
          </div>
        );
      }

      // Group 2: 2 Squares (requires up to 2 images)
      if (groupImages.length >= 5) {
        groups.push(
          <div key={`g2-${j}`} className="flex flex-col gap-4 snap-center shrink-0">
            <img src={groupImages[3]} alt="Gallery" className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg object-cover" />
            <img src={groupImages[4]} alt="Gallery" className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg object-cover" />
          </div>
        );
      } else if (groupImages.length === 4) {
        groups.push(
          <div key={`g2-${j}`} className="flex flex-col gap-4 snap-center shrink-0">
            <img src={groupImages[3]} alt="Gallery" className="w-[132px] md:w-[250px] h-[160px] md:h-[250px] bg-[#E5E7EB] rounded-lg object-cover" />
          </div>
        );
      }
    }
    return groups;
  };

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
          className="w-full overflow-x-auto scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `
            #gallery-slider::-webkit-scrollbar { display: none; }
          `,
            }}
          />
          <div className="flex gap-4 w-max mx-auto px-4 md:px-12 snap-x snap-mandatory">
            {renderPattern()}
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
