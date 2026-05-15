import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            className={cn(
              "w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-[10px] px-4 py-2.5",
              "text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]",
              "focus:outline-none focus:border-[var(--pink)] focus:ring-1 focus:ring-[var(--pink-glow)]",
              "transition-all",
              icon && "pl-10",
              error && "border-[var(--red)]",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-[var(--red)]">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
