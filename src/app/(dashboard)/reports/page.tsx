"use client";

import AppShell from "@/components/AppShell";
import {
  BarChart3,
  Download,
  TrendingUp,
  Users,
  Eye,
  Heart,
  MessageCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const kpiSlots = [
  { label: "Alcance total", icon: Eye, color: "#85B8E8" },
  { label: "Impresiones", icon: TrendingUp, color: "#B8A8E8" },
  { label: "Nuevos seguidores", icon: Users, color: "#D07FAA" },
  { label: "Likes totales", icon: Heart, color: "#E8A0BF" },
  { label: "Comentarios", icon: MessageCircle, color: "#F5C97A" },
];

function EmptyChart({ label }: { label: string }) {
  return (
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
        gap: 8,
      }}
    >
      <AlertCircle size={24} style={{ color: "var(--border-bright)" }} />
      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-muted)" }}>{label}</div>
      <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
        Disponible con cuenta conectada
      </div>
    </div>
  );
}

export default function ReportsPage() {
  return (
    <AppShell>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <BarChart3 size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Analytics</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
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
              Reportes
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Rendimiento mensual de todas tus plataformas conectadas.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <select
              disabled
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "10px 16px",
                color: "var(--text-muted)",
                fontSize: 13,
                outline: "none",
                cursor: "not-allowed",
              }}
            >
              <option>Este mes</option>
            </select>
            <button
              className="btn-primary"
              disabled
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, opacity: 0.5 }}
            >
              <Download size={15} />
              Exportar PDF
            </button>
          </div>
        </div>
      </div>

      {/* Connect CTA */}
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
            width: 48,
            height: 48,
            borderRadius: 14,
            background: "linear-gradient(135deg, #E8A0BF, #B8A8E8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <BarChart3 size={22} color="white" />
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
            Conecta una cuenta para ver reportes reales
          </div>
          <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
            Alcance, impresiones, crecimiento de seguidores y engagement — todo en un reporte mensual.
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

      {/* KPI Cards — empty */}
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginBottom: 24 }}
      >
        {kpiSlots.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="card" style={{ padding: "16px 18px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Icon size={16} style={{ color: s.color }} />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-syne, Syne, sans-serif)",
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: 2,
                  color: "var(--text-muted)",
                }}
              >
                —
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{s.label}</div>
            </div>
          );
        })}
      </div>

      {/* Charts row 1 */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, marginBottom: 16 }}
      >
        <EmptyChart label="Alcance mensual" />
        <EmptyChart label="Mix de contenido" />
      </div>

      {/* Charts row 2 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <EmptyChart label="Crecimiento de seguidores" />
        <EmptyChart label="Engagement por tipo de contenido" />
      </div>
    </AppShell>
  );
}
