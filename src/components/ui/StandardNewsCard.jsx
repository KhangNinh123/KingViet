import { Link } from "react-router-dom";
import { cn } from "@/utils";

export const StandardNewsCard = ({ id, image, title, summary, slug, className }) => {
  return (
    <Link 
      to={slug ? `/tin-tuc/${slug}` : "#"} // Placeholder cho tính năng xem chi tiết
      className={cn("group flex flex-col cursor-pointer", className)}
    >
      {/* Image container */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"; }}
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-[17px] md:text-[19px] font-bold text-gray-900 leading-snug line-clamp-3 mb-3 group-hover:text-blue-700 transition-colors">
          {title}
        </h3>
        
        {summary && (
          <p className="text-[15px] text-gray-500 line-clamp-3 leading-relaxed">
            {summary}
          </p>
        )}
      </div>
    </Link>
  );
};
