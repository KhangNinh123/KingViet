import { cn } from "@/utils";

export const Button = ({ children, className, variant = "primary", ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:shadow-md";
  
  const variants = {
    primary: "bg-[#22305C] text-white hover:bg-[#161D30]",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#22305C]",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
