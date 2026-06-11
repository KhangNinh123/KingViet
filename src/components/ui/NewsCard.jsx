import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils";

export const NewsCard = ({ image, title, className }) => {
  return (
    <div className={cn("group cursor-pointer rounded-2xl overflow-hidden text-white relative h-[380px] shadow-lg hover:-translate-y-2 transition-transform duration-300", className)}>
      {/* Background Image */}
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#22305C] via-[#22305C]/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-lg md:text-xl font-bold leading-snug line-clamp-3 mb-4">
          {title}
        </h3>
        <div className="flex justify-end">
          <div className="border-[1.5px] border-white/70 p-1.5 rounded-full group-hover:bg-white group-hover:text-[#22305C] group-hover:border-white transition-all">
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </div>
  );
};
