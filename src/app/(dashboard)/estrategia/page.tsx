"use client";

import AppShell from "@/components/AppShell";
import {
  Lightbulb,
  Target,
  MessageSquare,
  BarChart3,
  Edit3,
  Plus,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

interface ContentPillar {
  id: number;
  name: string;
  description: string;
  percentage: number;
  color: string;
  examples: string[];
}

interface Goal {
  id: number;
  metric: string;
  target: string;
  current: string;
  deadline: string;
  progress: number;
  color: string;
}

const pillars: ContentPillar[] = [
  {
    id: 1,
    name: "Educación",
    description: "Tips, tutoriales y contenido de valor que enseña algo útil a tu audiencia.",
    percentage: 35,
    color: "#85B8E8",
    examples: ["Tutoriales paso a paso", "Preguntas frecuentes", "Explicaciones de tendencias"],
  },
  {
    id: 2,
    name: "Entretenimiento",
    description: "Contenido divertido, relatable y de alto engagement que conecta emocionalmente.",
    percentage: 25,
    color: "#D07FAA",
    examples: ["Behind the scenes", "Challenges", "Humor y memes de nicho"],
  },
  {
    id: 3,
    name: "Inspiración",
    description: "Contenido motivacional, estético y aspiracional que refleja los valores de marca.",
    percentage: 20,
    color: "#B8A8E8",
    examples: ["Editoriales visuales", "Frases y citas", "Lookbooks"],
  },
  {
    id: 4,
    name: "Ventas y Producto",
    description: "Contenido directo de producto, promociones y llamadas a la acción claras.",
    percentage: 20,
    color: "#F5C97A",
    examples: ["Lanzamientos", "Testimonios", "Ofertas especiales"],
  },
];

const goals: Goal[] = [
  {
    id: 1,
    metric: "Seguidores en Instagram",
    target: "60,000",
    current: "—",
    deadline: "Dic 2026",
    progress: 0,
    color: "#D07FAA",
  },
  {
    id: 2,
    metric: "Alcance mensual",
    target: "500,000",
    current: "—",
    deadline: "Sep 2026",
    progress: 0,
    color: "#85B8E8",
  },
  {
    id: 3,
    metric: "Tasa de engagement",
    target: "8%",
    current: "—",
    deadline: "Jul 2026",
    progress: 0,
    color: "#7EC8A4",
  },
];

const toneAdjectives = ["Auténtica", "Cercana", "Directa", "Inspiradora", "Profesional", "Creativa"];
const toneAvoid = ["Corporativo", "Formal excesivo", "Jerga técnica", "Agresivo"];

export default function EstrategiaPage() {
  return (
    <AppShell>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <Lightbulb size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Planificación estratégica</span>
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
              Estrategia
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Pilares de contenido, objetivos de crecimiento y guía de voz de marca.
            </p>
          </div>
          <button
            className="btn-primary"
            style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
          >
            <Edit3 size={15} />
            Editar estrategia
          </button>
        </div>
      </div>

      {/* Content Pillars */}
      <div style={{ marginBottom: 40 }}>
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
            Pilares de contenido
          </h2>
          <span className="badge badge-blue" style={{ marginLeft: 4 }}>
            {pillars.length} pilares
          </span>
        </div>

        {/* Mix bar */}
        <div className="card" style={{ padding: "20px 24px", marginBottom: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 12 }}>
            Mix de contenido objetivo
          </div>
          <div
            style={{
              height: 12,
              borderRadius: 999,
              overflow: "hidden",
              display: "flex",
              marginBottom: 12,
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.id}
                style={{ flex: p.percentage, background: p.color, opacity: 0.85 }}
              />
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {pillars.map((p) => (
              <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: p.color }} />
                <span style={{ fontSize: 12, color: "var(--text-secondary)", fontWeight: 500 }}>
                  {p.name}
                </span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)" }}>
                  {p.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 14,
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="card"
              style={{ padding: "20px 22px", position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -8,
                  right: -8,
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: `${pillar.color}18`,
                  filter: "blur(16px)",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: `${pillar.color}18`,
                    border: `1.5px solid ${pillar.color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BarChart3 size={18} style={{ color: pillar.color }} />
                </div>
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    fontFamily: "var(--font-syne, Syne, sans-serif)",
                    color: pillar.color,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {pillar.percentage}%
                </span>
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 6,
                }}
              >
                {pillar.name}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                  marginBottom: 12,
                }}
              >
                {pillar.description}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {pillar.examples.map((ex) => (
                  <div
                    key={ex}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12,
                      color: "var(--text-secondary)",
                    }}
                  >
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: pillar.color,
                        flexShrink: 0,
                      }}
                    />
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            style={{
              minHeight: 160,
              padding: "20px 22px",
              borderRadius: 16,
              border: "1.5px dashed var(--border-bright)",
              background: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              color: "var(--text-muted)",
              transition: "all 0.2s",
            }}
          >
            <Plus size={22} />
            <span style={{ fontSize: 13, fontWeight: 600 }}>Agregar pilar</span>
          </button>
        </div>
      </div>

      {/* Goals */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
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
            Objetivos 2026
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {goals.map((goal) => (
            <div key={goal.id} className="card" style={{ padding: "18px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: `${goal.color}18`,
                    border: `1.5px solid ${goal.color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Target size={18} style={{ color: goal.color }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 8,
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginRight: 12,
                        }}
                      >
                        {goal.metric}
                      </span>
                      <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                        Meta: <strong style={{ color: goal.color }}>{goal.target}</strong>
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{goal.deadline}</span>
                      <TrendingUp size={13} style={{ color: goal.color }} />
                    </div>
                  </div>
                  <div
                    style={{
                      height: 6,
                      background: "var(--bg-surface)",
                      borderRadius: 999,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${goal.progress}%`,
                        background: `linear-gradient(90deg, ${goal.color}, ${goal.color}cc)`,
                        borderRadius: 999,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--text-muted)",
                      marginTop: 6,
                      fontStyle: "italic",
                    }}
                  >
                    Conecta una cuenta para ver el progreso real
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            className="btn-ghost"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontSize: 13,
              padding: "14px",
            }}
          >
            <Plus size={14} />
            Agregar objetivo
          </button>
        </div>
      </div>

      {/* Tone of Voice */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{ width: 3, height: 18, borderRadius: 4, background: "#B8A8E8" }} />
          <h2
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "var(--text-secondary)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Voz de marca
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          <div className="card" style={{ padding: "20px 24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 14,
              }}
            >
              <MessageSquare size={15} style={{ color: "#B8A8E8" }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}>
                Personalidad
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {toneAdjectives.map((adj) => (
                <span
                  key={adj}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 999,
                    background: "rgba(184,168,232,0.12)",
                    border: "1px solid rgba(184,168,232,0.3)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#7B68C8",
                  }}
                >
                  {adj}
                </span>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: "20px 24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 14,
              }}
            >
              <span style={{ fontSize: 15 }}>🚫</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}>
                Evitar
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {toneAvoid.map((w) => (
                <span
                  key={w}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 999,
                    background: "rgba(240,152,152,0.1)",
                    border: "1px solid rgba(240,152,152,0.25)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--red)",
                  }}
                >
                  {w}
                </span>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: "20px 24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 14,
              }}
            >
              <CheckCircle2 size={15} style={{ color: "var(--green)" }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}>
                Valores de marca
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Autenticidad", "Calidad", "Comunidad", "Innovación"].map((val) => (
                <div
                  key={val}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    color: "var(--text-secondary)",
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--green)",
                      flexShrink: 0,
                    }}
                  />
                  {val}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
