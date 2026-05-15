"use client";

import AppShell from "@/components/AppShell";
import {
  Heart,
  Eye,
  Users,
  MessageCircle,
  Sparkles,
  Target,
  Flame,
  Globe,
  CalendarDays,
  CheckSquare,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

function IgIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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

const kpis = [
  {
    label: "Seguidores",
    icon: Users,
    color: "#D07FAA",
    bg: "rgba(208,127,170,0.1)",
  },
  {
    label: "Alcance mensual",
    icon: Eye,
    color: "#85B8E8",
    bg: "rgba(133,184,232,0.1)",
  },
  {
    label: "Engagement Rate",
    icon: Heart,
    color: "var(--green)",
    bg: "rgba(126,200,164,0.1)",
  },
  {
    label: "Comentarios",
    icon: MessageCircle,
    color: "#F5C97A",
    bg: "rgba(245,201,122,0.1)",
  },
];

const quickActions = [
  {
    href: "/cuentas",
    label: "Conectar Instagram",
    desc: "Autoriza tu cuenta para ver métricas reales",
    icon: IgIcon,
    color: "#D07FAA",
    bg: "rgba(208,127,170,0.1)",
    primary: true,
  },
  {
    href: "/publish",
    label: "Crear contenido",
    desc: "Redacta y programa tu próximo post",
    icon: Flame,
    color: "#85B8E8",
    bg: "rgba(133,184,232,0.1)",
    primary: false,
  },
  {
    href: "/estrategia",
    label: "Definir estrategia",
    desc: "Configura pilares, objetivos y tono de marca",
    icon: Target,
    color: "#7EC8A4",
    bg: "rgba(126,200,164,0.1)",
    primary: false,
  },
];

export default function CommandPage() {
  return (
    <AppShell>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <div
              style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}
            >
              <Sparkles size={18} style={{ color: "var(--pink)" }} />
              <span style={{ fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                Overview
              </span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-syne, Syne, sans-serif)",
                fontSize: 36,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: 6,
              }}
              className="gradient-text"
            >
              Command Center
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Conecta tus cuentas para ver métricas, tareas y publicaciones en tiempo real.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <Link href="/estrategia" style={{ textDecoration: "none" }}>
              <button
                className="btn-ghost"
                style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
              >
                <Target size={15} />
                Objetivos
              </button>
            </Link>
            <Link href="/publish" style={{ textDecoration: "none" }}>
              <button
                className="btn-primary"
                style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
              >
                <Flame size={15} />
                Nuevo contenido
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Connect CTA banner */}
      <div
        style={{
          padding: "24px 28px",
          borderRadius: 16,
          background: "linear-gradient(135deg, rgba(232,160,191,0.1), rgba(184,168,232,0.08))",
          border: "1.5px solid rgba(232,160,191,0.3)",
          marginBottom: 28,
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 16,
            background: "linear-gradient(135deg, #E8A0BF, #B8A8E8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: "white",
          }}
          className="pink-glow"
        >
          <Globe size={24} />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 4,
              fontFamily: "var(--font-syne, Syne, sans-serif)",
            }}
          >
            Conecta una cuenta para ver datos reales
          </div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>
            Autoriza el acceso a Instagram, TikTok o YouTube para ver métricas en tiempo real,
            programar contenido y gestionar aprobaciones.
          </div>
        </div>
        <Link href="/cuentas" style={{ textDecoration: "none", flexShrink: 0 }}>
          <button
            className="btn-primary"
            style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
          >
            Conectar cuenta
            <ArrowRight size={14} />
          </button>
        </Link>
      </div>

      {/* KPI Cards — empty state */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          marginBottom: 24,
        }}
      >
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="card" style={{ padding: "20px 22px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: kpi.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={18} style={{ color: kpi.color }} />
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-syne, Syne, sans-serif)",
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text-muted)",
                  marginBottom: 2,
                }}
              >
                —
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{kpi.label}</div>
            </div>
          );
        })}
      </div>

      {/* Charts area — empty */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: 16,
          marginBottom: 24,
        }}
      >
        <div
          className="card"
          style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 220,
            textAlign: "center",
          }}
        >
          <AlertCircle
            size={28}
            style={{ color: "var(--border-bright)", marginBottom: 10 }}
          />
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-muted)", marginBottom: 4 }}>
            Sin datos de alcance
          </div>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
            Conecta una cuenta para ver tu gráfica de alcance
          </div>
        </div>

        <div
          className="card"
          style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 220,
            textAlign: "center",
          }}
        >
          <AlertCircle
            size={28}
            style={{ color: "var(--border-bright)", marginBottom: 10 }}
          />
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-muted)", marginBottom: 4 }}>
            Engagement Rate
          </div>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
            Disponible con cuenta conectada
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 16,
          marginBottom: 32,
        }}
      >
        {/* Top posts empty */}
        <div className="card" style={{ padding: "24px" }}>
          <div
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: 15,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Top Posts del mes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px 0",
              gap: 8,
            }}
          >
            <AlertCircle size={22} style={{ color: "var(--border-bright)" }} />
            <div style={{ fontSize: 13, color: "var(--text-muted)", textAlign: "center" }}>
              Sin posts publicados
            </div>
          </div>
        </div>

        {/* Pending tasks empty */}
        <div className="card" style={{ padding: "24px" }}>
          <div
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: 15,
              fontWeight: 700,
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Aprobaciones
            <span className="badge badge-green">0</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px 0",
              gap: 8,
            }}
          >
            <CheckSquare size={22} style={{ color: "var(--border-bright)" }} />
            <div style={{ fontSize: 13, color: "var(--text-muted)", textAlign: "center" }}>
              Sin elementos pendientes
            </div>
            <Link href="/aprobaciones" style={{ textDecoration: "none" }}>
              <button
                className="btn-ghost"
                style={{
                  fontSize: 12,
                  padding: "6px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                Ver aprobaciones
              </button>
            </Link>
          </div>
        </div>

        {/* Upcoming posts empty */}
        <div className="card" style={{ padding: "24px" }}>
          <div
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: 15,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Próximas publicaciones
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px 0",
              gap: 8,
            }}
          >
            <CalendarDays size={22} style={{ color: "var(--border-bright)" }} />
            <div style={{ fontSize: 13, color: "var(--text-muted)", textAlign: "center" }}>
              Sin publicaciones programadas
            </div>
            <Link href="/calendario" style={{ textDecoration: "none" }}>
              <button
                className="btn-ghost"
                style={{
                  fontSize: 12,
                  padding: "6px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                Ver calendario
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 14,
          }}
        >
          Por dónde empezar
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.href} href={action.href} style={{ textDecoration: "none" }}>
                <div
                  className="card"
                  style={{
                    padding: "18px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    cursor: "pointer",
                    border: action.primary ? "1.5px solid rgba(232,160,191,0.35)" : "1px solid var(--border)",
                    background: action.primary
                      ? "linear-gradient(135deg, rgba(232,160,191,0.06), rgba(184,168,232,0.04))"
                      : "var(--bg-card)",
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: action.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} style={{ color: action.color }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: 2,
                      }}
                    >
                      {action.label}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{action.desc}</div>
                  </div>
                  <ArrowRight size={14} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
