"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  CheckSquare,
  Globe,
  Lightbulb,
  Users,
  BarChart3,
  LogOut,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const nav = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/calendario", label: "Calendario", icon: CalendarDays },
  { href: "/contenido", label: "Contenido", icon: FileText },
  { href: "/aprobaciones", label: "Aprobaciones", icon: CheckSquare, badge: 2 },
  { href: "/cuentas", label: "Cuentas", icon: Globe },
  { href: "/estrategia", label: "Estrategia", icon: Lightbulb },
  { href: "/equipo", label: "Equipo", icon: Users },
  { href: "/analisis", label: "Análisis", icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  return (
    <aside className="w-[220px] shrink-0 h-screen sticky top-0 flex flex-col glass-strong border-r border-[var(--border)] z-40">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-[var(--border)]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--pink)] to-[var(--pink-dark)] flex items-center justify-center pink-glow">
            <Sparkles size={15} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-[var(--text-primary)] leading-none">CMO</p>
            <p className="text-[10px] text-[var(--text-muted)] mt-0.5">Melisa Escobar</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-0.5">
        {nav.map(({ href, label, icon: Icon, badge }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn("sidebar-link group relative", active && "active")}
            >
              <Icon size={16} />
              <span className="flex-1">{label}</span>
              {badge && (
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[var(--pink)] text-white text-[10px] font-bold">
                  {badge}
                </span>
              )}
              {active && (
                <ChevronRight size={12} className="opacity-60" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-3 py-4 border-t border-[var(--border)]">
        <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-[var(--pink-glow)] transition-all cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--pink)] to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
            {user?.email?.[0]?.toUpperCase() ?? "M"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[var(--text-primary)] truncate">
              {user?.email?.split("@")[0] ?? "Melisa"}
            </p>
            <p className="text-[10px] text-[var(--text-muted)]">CMO</p>
          </div>
          <button
            onClick={signOut}
            className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-muted)] hover:text-[var(--red)]"
            title="Cerrar sesión"
          >
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}
