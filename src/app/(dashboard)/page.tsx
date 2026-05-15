"use client";

import AppShell from "@/components/AppShell";
import Link from "next/link";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isToday, isSameDay } from "date-fns";
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
  ArrowRight,
  Plus,
  ChevronRight,
} from "lucide-react";

function IgIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const modules = [
  {
    group: "Analytics & Datos",
    color: "#D07FAA",
    glow: "rgba(208,127,170,0.14)",
    items: [
      {
        href: "/command",
        label: "Command Center",
        desc: "Vista general de métricas, tareas y próximas publicaciones",
        icon: LayoutDashboard,
        badge: null,
      },
      {
        href: "/reports",
        label: "Reportes",
        desc: "Alcance mensual, crecimiento de seguidores y engagement",
        icon: BarChart3,
        badge: null,
      },
      {
        href: "/analisis",
        label: "Análisis avanzado",
        desc: "Heatmaps, hashtags, demografía y comparativas de periodos",
        icon: TrendingUp,
        badge: null,
      },
    ],
  },
  {
    group: "Creación & Publicación",
    color: "#85B8E8",
    glow: "rgba(133,184,232,0.14)",
    items: [
      {
        href: "/publish",
        label: "Publicar",
        desc: "Crea y programa contenido con asistencia de IA",
        icon: Send,
        badge: null,
      },
      {
        href: "/feed",
        label: "Instagram Feed",
        desc: "Vista previa y métricas de todos tus posts publicados",
        icon: IgIcon,
        badge: null,
      },
      {
        href: "/library",
        label: "Media Library",
        desc: "Repositorio centralizado de imágenes, videos y documentos",
        icon: FolderOpen,
        badge: null,
      },
    ],
  },
  {
    group: "Planificación",
    color: "#7EC8A4",
    glow: "rgba(126,200,164,0.13)",
    items: [
      {
        href: "/pipeline",
        label: "Content Pipeline",
        desc: "Kanban visual del flujo completo de contenido",
        icon: Kanban,
        badge: null,
      },
      {
        href: "/calendario",
        label: "Calendario",
        desc: "Vista semanal y mensual del contenido programado",
        icon: CalendarDays,
        badge: null,
      },
      {
        href: "/contenido",
        label: "Contenido",
        desc: "Gestor multi-plataforma de todos tus posts y borradores",
        icon: FileText,
        badge: null,
      },
    ],
  },
  {
    group: "Gestión & Equipo",
    color: "#C8963A",
    glow: "rgba(245,201,122,0.14)",
    items: [
      {
        href: "/aprobaciones",
        label: "Aprobaciones",
        desc: "Flujo de aprobación con historial de cambios y comentarios",
        icon: CheckSquare,
        badge: null,
      },
      {
        href: "/cuentas",
        label: "Cuentas",
        desc: "Conecta y gestiona Instagram, TikTok, YouTube y más",
        icon: Globe,
        badge: null,
      },
      {
        href: "/estrategia",
        label: "Estrategia",
        desc: "Pilares de contenido, objetivos mensuales y voz de marca",
        icon: Lightbulb,
        badge: null,
      },
      {
        href: "/equipo",
        label: "Equipo",
        desc: "Roles, permisos e invitaciones para colaboradores",
        icon: Users,
        badge: null,
      },
    ],
  },
];

function MiniCalendar() {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const calStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: calStart, end: calEnd });
  const weekDays = ["L", "M", "X", "J", "V", "S", "D"];

  return (
    <div className="card" style={{ padding: "20px 24px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <CalendarDays size={16} style={{ color: "var(--pink)" }} />
          <span
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontWeight: 700,
              fontSize: 14,
              color: "var(--text-primary)",
            }}
          >
            {format(today, "MMMM yyyy", { locale: es }).replace(/^\w/, (c) => c.toUpperCase())}
          </span>
        </div>
        <Link href="/calendario" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--pink)", fontWeight: 600 }}>
          Ver todo
          <ChevronRight size={12} />
        </Link>
      </div>

      {/* Day headers */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginBottom: 6 }}>
        {weekDays.map((d) => (
          <div
            key={d}
            style={{
              textAlign: "center",
              fontSize: 10,
              fontWeight: 700,
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
              paddingBottom: 4,
            }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
        {days.map((day) => {
          const isCurrentMonth = isSameMonth(day, today);
          const isTodayDay = isToday(day);
          return (
            <Link key={day.toISOString()} href="/calendario" style={{ textDecoration: "none" }}>
              <div
                style={{
                  textAlign: "center",
                  padding: "5px 0",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: isTodayDay ? 800 : isCurrentMonth ? 500 : 400,
                  color: isTodayDay
                    ? "white"
                    : isCurrentMonth
                    ? "var(--text-primary)"
                    : "var(--text-muted)",
                  background: isTodayDay
                    ? "linear-gradient(135deg, #E8A0BF, #D07FAA)"
                    : "transparent",
                  cursor: "pointer",
                  opacity: isCurrentMonth ? 1 : 0.35,
                  transition: "all 0.15s",
                }}
              >
                {format(day, "d")}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Today label */}
      <div
        style={{
          marginTop: 14,
          padding: "8px 12px",
          borderRadius: 8,
          background: "rgba(232,160,191,0.08)",
          border: "1px solid rgba(232,160,191,0.2)",
          fontSize: 12,
          color: "var(--text-secondary)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--pink)", flexShrink: 0 }} />
        Hoy: <strong style={{ color: "var(--text-primary)" }}>
          {format(today, "EEEE d 'de' MMMM", { locale: es }).replace(/^\w/, (c) => c.toUpperCase())}
        </strong>
      </div>
    </div>
  );
}

export default function HubPage() {
  const now = new Date();
  const hour = now.getHours();
  const greeting =
    hour < 12 ? "Buenos días" : hour < 18 ? "Buenas tardes" : "Buenas noches";
  const dateStr = format(now, "EEEE, d 'de' MMMM yyyy", { locale: es });

  return (
    <AppShell>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
              textTransform: "capitalize",
              marginBottom: 6,
            }}
          >
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

        {/* Quick actions */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            marginBottom: 40,
          }}
        >
          {[
            {
              href: "/publish",
              label: "Crear post",
              desc: "Redacta y programa contenido",
              icon: Plus,
              color: "#D07FAA",
              bg: "rgba(208,127,170,0.1)",
            },
            {
              href: "/cuentas",
              label: "Conectar cuenta",
              desc: "Autoriza Instagram u otras plataformas",
              icon: Globe,
              color: "#85B8E8",
              bg: "rgba(133,184,232,0.1)",
            },
            {
              href: "/pipeline",
              label: "Ver pipeline",
              desc: "Revisa el flujo de contenido en curso",
              icon: Kanban,
              color: "#7EC8A4",
              bg: "rgba(126,200,164,0.1)",
            },
          ].map((a) => {
            const Icon = a.icon;
            return (
              <Link key={a.href} href={a.href} style={{ textDecoration: "none" }}>
                <div
                  className="card"
                  style={{
                    padding: "18px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: a.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} style={{ color: a.color }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: 2,
                      }}
                    >
                      {a.label}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--text-muted)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {a.desc}
                    </div>
                  </div>
                  <ArrowRight size={14} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Calendar + upcoming section */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
          <MiniCalendar />

          {/* Upcoming posts placeholder */}
          <div className="card" style={{ padding: "20px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Send size={16} style={{ color: "#85B8E8" }} />
                <span
                  style={{
                    fontFamily: "var(--font-syne, Syne, sans-serif)",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "var(--text-primary)",
                  }}
                >
                  Próximas publicaciones
                </span>
              </div>
              <Link href="/publish" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#85B8E8", fontWeight: 600 }}>
                Programar
                <ChevronRight size={12} />
              </Link>
            </div>

            {/* Empty state */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "28px 16px",
                borderRadius: 12,
                border: "1px dashed var(--border-bright)",
                background: "var(--bg-surface)",
                textAlign: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "rgba(133,184,232,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CalendarDays size={20} style={{ color: "#85B8E8" }} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>
                Sin publicaciones programadas
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>
                Programa tu primer post para verlo aquí
              </div>
              <Link href="/publish" style={{ textDecoration: "none" }}>
                <button
                  className="btn-primary"
                  style={{ fontSize: 12, display: "flex", alignItems: "center", gap: 6, padding: "8px 16px" }}
                >
                  <Plus size={13} />
                  Crear publicación
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Module groups */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {modules.map((group) => (
            <div key={group.group}>
              {/* Group header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div
                  style={{ width: 3, height: 16, borderRadius: 4, background: group.color }}
                />
                <h2
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {group.group}
                </h2>
              </div>

              {/* Cards grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: 12,
                }}
              >
                {group.items.map((item) => {
                  const Icon = item.icon;
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
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Glow bg */}
                      <div
                        style={{
                          position: "absolute",
                          top: -10,
                          right: -10,
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          background: group.glow,
                          filter: "blur(20px)",
                          pointerEvents: "none",
                        }}
                      />

                      {/* Icon + badge */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: `${group.glow}`,
                            border: `1px solid ${group.color}30`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: group.color,
                          }}
                        >
                          <Icon size={18} />
                        </div>
                        {item.badge && (
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              padding: "2px 8px",
                              borderRadius: 999,
                              background: "var(--bg-surface)",
                              color: "var(--text-muted)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Text */}
                      <div>
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            marginBottom: 4,
                          }}
                        >
                          {item.label}
                        </div>
                        <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>
                          {item.desc}
                        </div>
                      </div>

                      {/* Arrow */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          marginTop: 2,
                        }}
                      >
                        <Zap size={10} style={{ color: group.color }} />
                        <span
                          style={{ fontSize: 11, color: group.color, fontWeight: 600 }}
                        >
                          Abrir módulo
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
            CMO Melisa Escobar — Marketing Hub
          </span>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
            v1.0 · {format(now, "yyyy")}
          </span>
        </div>
      </div>
    </AppShell>
  );
}
