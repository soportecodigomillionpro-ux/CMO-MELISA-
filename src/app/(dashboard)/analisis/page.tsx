"use client";

import AppShell from "@/components/AppShell";
import { TrendingUp, Hash, Clock, Users, Globe, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

// Best time heatmap: 7 days x 24 hours
// Empty initially — data comes from connected account
const HOURS = Array.from({ length: 24 }, (_, i) => `${i}h`);
const DAYS_LABELS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

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

const analyticsModules = [
  {
    icon: Clock,
    title: "Mejor hora para publicar",
    description:
      "Heatmap de hora vs. día de la semana mostrando el engagement promedio de tu audiencia.",
    color: "#D07FAA",
    bg: "rgba(208,127,170,0.1)",
  },
  {
    icon: Hash,
    title: "Rendimiento de hashtags",
    description:
      "Tabla de hashtags ordenados por alcance, engagement y frecuencia de uso en tus posts.",
    color: "#85B8E8",
    bg: "rgba(133,184,232,0.1)",
  },
  {
    icon: Users,
    title: "Demografía de audiencia",
    description:
      "Edad, género y ubicación geográfica de tus seguidores con distribución porcentual.",
    color: "#7EC8A4",
    bg: "rgba(126,200,164,0.1)",
  },
  {
    icon: TrendingUp,
    title: "Comparativa de periodos",
    description:
      "Compara métricas de cualquier rango de fechas contra el periodo anterior automáticamente.",
    color: "#B8A8E8",
    bg: "rgba(184,168,232,0.1)",
  },
  {
    icon: Globe,
    title: "Benchmark de plataforma",
    description:
      "Compara tu engagement rate, crecimiento y alcance contra promedios de la industria.",
    color: "#F5C97A",
    bg: "rgba(245,201,122,0.1)",
  },
];

export default function AnalisisPage() {
  return (
    <AppShell>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <TrendingUp size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Analytics avanzado</span>
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
          Análisis avanzado
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
          Comparativas, heatmaps y atribución profunda de tus métricas.
        </p>
      </div>

      {/* Connect CTA */}
      <div
        style={{
          padding: "28px 32px",
          borderRadius: 16,
          background: "linear-gradient(135deg, rgba(232,160,191,0.1), rgba(184,168,232,0.08))",
          border: "1px solid rgba(232,160,191,0.3)",
          marginBottom: 36,
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 18,
            background: "linear-gradient(135deg, #E8A0BF, #B8A8E8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          className="pink-glow"
        >
          <IgIcon size={26} />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 6,
              fontFamily: "var(--font-syne, Syne, sans-serif)",
            }}
          >
            Conecta una cuenta para ver el análisis completo
          </div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
            Una vez conectadas tus cuentas, verás datos reales: heatmaps de mejores horas,
            rendimiento de hashtags, demografía de audiencia y comparativas de periodos.
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

      {/* Heatmap preview (empty skeleton) */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 3, height: 18, borderRadius: 4, background: "#D07FAA" }} />
          <h2
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "var(--text-secondary)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Mejor hora para publicar
          </h2>
          <span className="badge badge-pink">Vista previa</span>
        </div>

        <div
          className="card"
          style={{ padding: "24px", position: "relative", overflow: "hidden" }}
        >
          {/* Blur overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backdropFilter: "blur(4px)",
              background: "rgba(245,243,255,0.7)",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <AlertCircle size={24} style={{ color: "var(--text-muted)", marginBottom: 8 }} />
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-secondary)" }}>
                Sin datos disponibles
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>
                Conecta Instagram para ver este análisis
              </div>
            </div>
          </div>

          {/* Skeleton heatmap behind blur */}
          <div
            style={{
              overflowX: "auto",
              paddingBottom: 8,
            }}
          >
            <div style={{ display: "flex", gap: 4 }}>
              {/* Row labels */}
              <div style={{ display: "flex", flexDirection: "column", gap: 3, paddingTop: 20 }}>
                {DAYS_LABELS.map((d) => (
                  <div
                    key={d}
                    style={{
                      height: 20,
                      width: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      paddingRight: 8,
                      fontSize: 10,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                    }}
                  >
                    {d}
                  </div>
                ))}
              </div>
              <div>
                {/* Column headers */}
                <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
                  {HOURS.filter((_, i) => i % 3 === 0).map((h) => (
                    <div
                      key={h}
                      style={{
                        width: 20,
                        fontSize: 9,
                        color: "var(--text-muted)",
                        textAlign: "center",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {h}
                    </div>
                  ))}
                </div>
                {/* Grid */}
                {DAYS_LABELS.map((day) => (
                  <div key={day} style={{ display: "flex", gap: 3, marginBottom: 3 }}>
                    {Array.from({ length: 8 }, (_, i) => (
                      <div
                        key={i}
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 4,
                          background: "var(--bg-surface)",
                          border: "1px solid var(--border)",
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Available modules */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{ width: 3, height: 18, borderRadius: 4, background: "#85B8E8" }} />
          <h2
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "var(--text-secondary)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Módulos de análisis disponibles
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 14,
          }}
        >
          {analyticsModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.title}
                className="card"
                style={{ padding: "20px 22px", opacity: 0.7, cursor: "default" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: mod.bg,
                      border: `1.5px solid ${mod.color}35`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={18} style={{ color: mod.color }} />
                  </div>
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
                    Requiere cuenta conectada
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 6,
                  }}
                >
                  {mod.title}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>
                  {mod.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
