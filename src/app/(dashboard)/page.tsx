"use client";

import AppShell from "@/components/AppShell";
import Link from "next/link";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import {
  LayoutDashboard,
  Send,
  Kanban,
  FolderOpen,
  BarChart3,
  CalendarDays,
  CheckSquare,
  Globe,
  Lightbulb,
  FileText,
  Users,
  TrendingUp,
  Zap,
  Bell,
  ArrowRight,
} from "lucide-react";

function IgIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const modules = [
  {
    group: "Analytics & Datos",
    color: "#FF3EA5",
    glow: "rgba(255,62,165,0.15)",
    items: [
      {
        href: "/command",
        label: "Command Center",
        desc: "Métricas clave, top posts y actividad reciente de Instagram",
        icon: LayoutDashboard,
        badge: null,
        stat: "48.3K seguidores",
      },
      {
        href: "/reports",
        label: "Reportes",
        desc: "Alcance mensual, crecimiento de seguidores y engagement por tipo",
        icon: BarChart3,
        badge: null,
        stat: "+18% este mes",
      },
      {
        href: "/analisis",
        label: "Análisis avanzado",
        desc: "Comparativas multi-plataforma, embudos y atribución",
        icon: TrendingUp,
        badge: "Próximo",
        stat: null,
      },
    ],
  },
  {
    group: "Creación & Publicación",
    color: "#4D9FFF",
    glow: "rgba(77,159,255,0.15)",
    items: [
      {
        href: "/publish",
        label: "Publicar",
        desc: "Crea y programa contenido con sugerencias de IA",
        icon: Send,
        badge: null,
        stat: "3 posts pendientes",
      },
      {
        href: "/feed",
        label: "Instagram Feed",
        desc: "Previsualiza y analiza todos tus posts publicados",
        icon: IgIcon,
        badge: null,
        stat: "6 posts este mes",
      },
      {
        href: "/library",
        label: "Media Library",
        desc: "Gestiona imágenes, videos y assets organizados",
        icon: FolderOpen,
        badge: null,
        stat: null,
      },
    ],
  },
  {
    group: "Planificación",
    color: "#00E5A0",
    glow: "rgba(0,229,160,0.12)",
    items: [
      {
        href: "/pipeline",
        label: "Content Pipeline",
        desc: "Kanban visual del flujo de todo tu contenido",
        icon: Kanban,
        badge: null,
        stat: "2 en revisión",
      },
      {
        href: "/calendario",
        label: "Calendario",
        desc: "Vista semanal y mensual de contenido programado multi-plataforma",
        icon: CalendarDays,
        badge: null,
        stat: "6 posts esta semana",
      },
      {
        href: "/contenido",
        label: "Contenido",
        desc: "Gestión multi-marca y multi-plataforma de todos tus posts",
        icon: FileText,
        badge: "Próximo",
        stat: null,
      },
    ],
  },
  {
    group: "Gestión & Equipo",
    color: "#FFD60A",
    glow: "rgba(255,214,10,0.12)",
    items: [
      {
        href: "/aprobaciones",
        label: "Aprobaciones",
        desc: "Flujo de aprobación con CEO, comentarios e historial",
        icon: CheckSquare,
        badge: "2 urgentes",
        stat: null,
      },
      {
        href: "/cuentas",
        label: "Cuentas",
        desc: "Gestión multi-marca: Instagram, TikTok, YouTube y más",
        icon: Globe,
        badge: "Próximo",
        stat: null,
      },
      {
        href: "/estrategia",
        label: "Estrategia",
        desc: "Pilares de contenido, objetivos mensuales y guía de tono",
        icon: Lightbulb,
        badge: "Próximo",
        stat: null,
      },
      {
        href: "/equipo",
        label: "Equipo",
        desc: "Roles, permisos y gestión de miembros",
        icon: Users,
        badge: "Próximo",
        stat: null,
      },
    ],
  },
];

const alerts = [
  { label: "2 posts esperan aprobación del CEO", urgency: "alta", href: "/aprobaciones" },
  { label: "Tutorial de YouTube vence mañana", urgency: "media", href: "/pipeline" },
];

export default function HubPage() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "Buenos días" : hour < 18 ? "Buenas tardes" : "Buenas noches";
  const dateStr = format(now, "EEEE, d 'de' MMMM yyyy", { locale: es });

  return (
    <AppShell>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 12, color: "var(--text-muted)", textTransform: "capitalize", marginBottom: 6 }}>
            {dateStr}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontWeight: 800,
              fontSize: 40,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            <span className="gradient-text">{greeting},</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>Melisa ✨</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
            Tu marketing command center. Todo en un solo lugar.
          </p>
        </div>

        {/* Alerts */}
        {alerts.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
            {alerts.map((a, i) => (
              <Link
                key={i}
                href={a.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 16px",
                  borderRadius: 12,
                  background: a.urgency === "alta" ? "rgba(255,68,102,0.08)" : "rgba(255,214,10,0.08)",
                  border: `1px solid ${a.urgency === "alta" ? "rgba(255,68,102,0.2)" : "rgba(255,214,10,0.2)"}`,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                <Bell size={14} style={{ color: a.urgency === "alta" ? "var(--red)" : "var(--yellow)", flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: 13, color: "var(--text-primary)" }}>{a.label}</span>
                <ArrowRight size={14} style={{ color: "var(--text-muted)" }} />
              </Link>
            ))}
          </div>
        )}

        {/* Quick stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 40 }}>
          {[
            { label: "Seguidores", value: "48.3K", delta: "+2.4%", color: "#FF3EA5" },
            { label: "Alcance semanal", value: "31.2K", delta: "+18.7%", color: "#4D9FFF" },
            { label: "Engagement", value: "6.4%", delta: "+1.2%", color: "#00E5A0" },
            { label: "Posts este mes", value: "6 / 20", delta: "14 restantes", color: "#FFD60A" },
          ].map((s) => (
            <div key={s.label} className="card" style={{ padding: 16 }}>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", fontFamily: "var(--font-syne)" }}>{s.value}</div>
              <div style={{ fontSize: 11, color: s.color, fontWeight: 600, marginTop: 4 }}>{s.delta}</div>
            </div>
          ))}
        </div>

        {/* Module groups */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {modules.map((group) => (
            <div key={group.group}>
              {/* Group header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 3, height: 16, borderRadius: 4, background: group.color }} />
                <h2 style={{ fontSize: 12, fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {group.group}
                </h2>
              </div>

              {/* Cards grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isComingSoon = item.badge === "Próximo";
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        padding: 18,
                        borderRadius: 14,
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        textDecoration: "none",
                        transition: "all 0.2s",
                        opacity: isComingSoon ? 0.6 : 1,
                        cursor: isComingSoon ? "default" : "pointer",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      onClick={isComingSoon ? (e) => e.preventDefault() : undefined}
                    >
                      {/* Glow bg */}
                      <div style={{ position: "absolute", top: -10, right: -10, width: 60, height: 60, borderRadius: "50%", background: group.glow, filter: "blur(20px)", pointerEvents: "none" }} />

                      {/* Icon + badge */}
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                        <div style={{
                          width: 36, height: 36, borderRadius: 10,
                          background: `${group.glow}`,
                          border: `1px solid ${group.color}30`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: group.color,
                        }}>
                          <Icon size={18} />
                        </div>
                        {item.badge && (
                          <span style={{
                            fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 999,
                            background: item.badge === "Próximo" ? "var(--bg-surface)" : item.badge.includes("urgente") ? "rgba(255,68,102,0.15)" : "rgba(255,214,10,0.15)",
                            color: item.badge === "Próximo" ? "var(--text-muted)" : item.badge.includes("urgente") ? "var(--red)" : "var(--yellow)",
                            border: `1px solid ${item.badge === "Próximo" ? "var(--border)" : item.badge.includes("urgente") ? "rgba(255,68,102,0.3)" : "rgba(255,214,10,0.3)"}`,
                          }}>
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Text */}
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{item.label}</div>
                        <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>{item.desc}</div>
                      </div>

                      {/* Stat */}
                      {item.stat && (
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <Zap size={10} style={{ color: group.color }} />
                          <span style={{ fontSize: 11, color: group.color, fontWeight: 600 }}>{item.stat}</span>
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>CMO Melisa Escobar — Marketing Hub</span>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>v1.0 · {format(now, "yyyy")}</span>
        </div>
      </div>
    </AppShell>
  );
}
