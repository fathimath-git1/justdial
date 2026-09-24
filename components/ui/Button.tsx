import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-jd-blue disabled:opacity-50 disabled:pointer-events-none",
          size === "sm" ? "text-sm px-3 py-1.5" : "text-sm px-4 py-2",
          variant === "primary" && "bg-jd-blue text-white hover:bg-sky-600",
          variant === "outline" &&
            "border border-gray-300 text-jd-text hover:bg-gray-50",
          variant === "ghost" && "text-jd-text hover:bg-gray-100",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
