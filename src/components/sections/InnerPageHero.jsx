import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import markWhite from "../../assets/images/logos/mark-white.webp";

const InnerPageHero = ({ title, description, image, backgroundImage, breadcrumbs }) => {
  return (
    <section className={`relative w-full overflow-hidden py-16 md:py-24 min-h-[400px] md:min-h-[500px] flex items-center ${backgroundImage ? '' : 'bg-[#22305C]'}`}>
      {/* Full Width Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img src={backgroundImage} alt={title} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none"></div>
        </div>
      )}
      {/* Watermark Backgrounds */}
      {!backgroundImage && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Top Left Watermark */}
        <img
          src={markWhite}
          alt=""
          className="absolute top-[-10%] left-[-5%] md:left-[-2%] h-[40%] md:h-[60%] object-contain opacity-40"
        />
        {/* Right Watermark */}
        <img
          src={markWhite}
          alt=""
          className="absolute bottom-[-5%] md:top-1/2 md:-translate-y-1/2 right-[-10%] md:right-[-2%] h-[80%] md:h-[120%] object-contain opacity-40 rotate-180"
        />
      </div>
      )}
      {/* Desktop Image (Absolute positioned to bottom of section) */}
      {image && (
        <div className="hidden md:block absolute right-[2%] lg:right-[10%] bottom-0 h-[85%] lg:h-[95%] z-10 pointer-events-none">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-auto object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] hover:scale-105 hover:drop-shadow-[0_35px_65px_rgba(0,0,0,0.95)] transition-all duration-500 pointer-events-auto cursor-default"
          />
        </div>
      )}

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-sm text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
            <Link to="/" className="hover:text-gray-200 transition-colors">
              KingViet Edu
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <ChevronRight size={14} className="text-gray-200" />
                {crumb.path ? (
                  <Link
                    to={crumb.path}
                    className="hover:text-gray-200 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-bold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="relative">
          {/* Content */}
          <div className={`${image ? 'md:w-1/2 lg:w-3/5' : 'max-w-3xl'} drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic text-white mb-6 leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-base md:text-lg text-white font-medium leading-relaxed whitespace-pre-line">
                {description}
              </p>
            )}
          </div>
          
          {/* Mobile Image */}
          {image && (
            <div className="md:hidden w-full flex justify-center mt-10 relative z-10 -mb-8">
              <img 
                src={image} 
                alt={title} 
                className="max-h-[350px] object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] hover:scale-105 hover:drop-shadow-[0_35px_65px_rgba(0,0,0,0.95)] transition-all duration-500 cursor-default"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InnerPageHero;
