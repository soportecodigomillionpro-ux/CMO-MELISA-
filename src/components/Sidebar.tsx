"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Send,
  Kanban,
  FolderOpen,
  Users,
  BarChart3,
  Zap,
  Settings,
  ChevronRight,
  CalendarDays,
  CheckSquare,
  Globe,
  Lightbulb,
  FileText,
  Home,
} from "lucide-react";

function IgIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const navGroups = [
  {
    label: "Principal",
    items: [
      { href: "/", label: "Hub Central", icon: Home },
      { href: "/command", label: "Command Center", icon: LayoutDashboard },
    ],
  },
  {
    label: "Contenido",
    items: [
      { href: "/feed", label: "Instagram Feed", icon: IgIcon },
      { href: "/publish", label: "Publicar", icon: Send },
      { href: "/pipeline", label: "Content Pipeline", icon: Kanban },
      { href: "/library", label: "Media Library", icon: FolderOpen },
      { href: "/calendario", label: "Calendario", icon: CalendarDays },
      { href: "/contenido", label: "Contenido", icon: FileText },
    ],
  },
  {
    label: "Gestión",
    items: [
      { href: "/aprobaciones", label: "Aprobaciones", icon: CheckSquare, badge: 2 },
      { href: "/cuentas", label: "Cuentas", icon: Globe },
      { href: "/estrategia", label: "Estrategia", icon: Lightbulb },
      { href: "/equipo", label: "Equipo", icon: Users },
    ],
  },
  {
    label: "Analytics",
    items: [
      { href: "/reports", label: "Reportes", icon: BarChart3 },
      { href: "/analisis", label: "Análisis", icon: BarChart3 },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: 240,
        minHeight: "100vh",
        background: "var(--bg-surface)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        padding: "24px 16px",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 50,
        overflowY: "auto",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: 28, padding: "0 4px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            className="pink-glow"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #E8A0BF, #D07FAA)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Zap size={18} color="white" fill="white" />
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-syne, Syne, sans-serif)",
                fontWeight: 800,
                fontSize: 20,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
              className="gradient-text"
            >
              CMO
            </div>
            <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>
              Melisa Escobar
            </div>
          </div>
        </div>
      </div>

      {/* Nav groups */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
        {navGroups.map((group) => (
          <div key={group.label}>
            <div style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, marginBottom: 6, padding: "0 4px" }}>
              {group.label}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {group.items.map(({ href, label, icon: Icon, badge }: { href: string; label: string; icon: React.ComponentType<{ size?: number }>; badge?: number }) => {
                const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
                return (
                  <Link key={href} href={href} className={`sidebar-link ${active ? "active" : ""}`}>
                    <Icon size={16} />
                    <span style={{ flex: 1 }}>{label}</span>
                    {badge && (
                      <span style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--pink)", color: "white", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {badge}
                      </span>
                    )}
                    {active && <ChevronRight size={13} style={{ color: "var(--pink)", opacity: 0.7 }} />}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom user */}
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16, marginTop: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 12, background: "var(--bg-base)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #E8A0BF, #B8A8E8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "white", flexShrink: 0 }}>
            ME
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Melisa Escobar
            </div>
            <div style={{ fontSize: 11, color: "var(--text-muted)" }}>CMO</div>
          </div>
          <Settings size={14} style={{ color: "var(--text-muted)", marginLeft: "auto", cursor: "pointer", flexShrink: 0 }} />
        </div>
      </div>
    </aside>
  );
}
