import React from "react";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  icon?: LucideIcon;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  icon: Icon,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm";

  const variants = {
    primary:
      "bg-white/10 text-white border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/20 hover:shadow-[inset_0_0_25px_rgba(255,255,255,0.2)] focus:ring-2 focus:ring-white/30 focus:ring-offset-2",
    outline:
      "bg-transparent border-2 border-white/30 text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/10 hover:shadow-[inset_0_0_25px_rgba(255,255,255,0.2)] focus:ring-2 focus:ring-white/30 focus:ring-offset-2",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        "relative before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="size-4" />}
      {children}
    </button>
  );
}
