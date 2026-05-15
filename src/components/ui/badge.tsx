import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "pink" | "green" | "yellow" | "red" | "blue" | "ghost";

const variants: Record<BadgeVariant, string> = {
  default: "bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border)]",
  pink: "badge-pink",
  green: "badge-green",
  yellow: "badge-yellow",
  red: "badge-red",
  blue: "badge-blue",
  ghost: "bg-transparent text-[var(--text-muted)] border border-[var(--border)]",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span className={cn("badge", variants[variant], className)}>
      {children}
    </span>
  );
}
