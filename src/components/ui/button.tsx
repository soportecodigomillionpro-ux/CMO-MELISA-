import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "ghost" | "danger" | "outline";
type ButtonSize = "sm" | "md" | "lg" | "icon";

const variants: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  danger: "bg-[rgba(255,68,102,0.15)] text-[var(--red)] border border-[rgba(255,68,102,0.3)] rounded-[10px] px-5 py-2.5 font-semibold cursor-pointer transition-all hover:bg-[rgba(255,68,102,0.25)]",
  outline: "bg-transparent text-[var(--text-primary)] border border-[var(--border-bright)] rounded-[10px] px-5 py-2.5 font-medium cursor-pointer transition-all hover:border-[var(--pink)] hover:text-[var(--pink)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-6 py-3",
  icon: "p-2 w-9 h-9 flex items-center justify-center",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 transition-all font-medium",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
