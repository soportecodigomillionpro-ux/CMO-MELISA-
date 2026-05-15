"use client";

import AppShell from "@/components/AppShell";
import {
  CheckSquare,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Plus,
  MessageSquare,
  Send,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type ApprovalStatus = "pendiente" | "aprobado" | "rechazado";

interface ApprovalItem {
  id: number;
  title: string;
  type: string;
  platform: string;
  creator: string;
  requestedAt: string;
  scheduledFor: string;
  urgency: "alta" | "media" | "baja";
  status: ApprovalStatus;
  notes?: string;
}

// Sin datos reales — se populará cuando el equipo cree contenido para aprobar
const approvals: ApprovalItem[] = [];

const urgencyColors = {
  alta: { text: "var(--red)", bg: "rgba(240,152,152,0.15)", border: "rgba(240,152,152,0.3)" },
  media: { text: "var(--yellow)", bg: "rgba(245,201,122,0.15)", border: "rgba(245,201,122,0.3)" },
  baja: { text: "var(--green)", bg: "rgba(126,200,164,0.15)", border: "rgba(126,200,164,0.3)" },
};

const statusConfig = {
  pendiente: { label: "Pendiente", badge: "badge-yellow", icon: Clock },
  aprobado: { label: "Aprobado", badge: "badge-green", icon: CheckCircle2 },
  rechazado: { label: "Rechazado", badge: "badge-red", icon: XCircle },
};

const tabs: { key: ApprovalStatus | "todos"; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "pendiente", label: "Pendiente" },
  { key: "aprobado", label: "Aprobado" },
  { key: "rechazado", label: "Rechazado" },
];

export default function AprobacionesPage() {
  const [activeTab, setActiveTab] = useState<ApprovalStatus | "todos">("todos");

  const filtered =
    activeTab === "todos" ? approvals : approvals.filter((a) => a.status === activeTab);

  const counts = {
    todos: approvals.length,
    pendiente: approvals.filter((a) => a.status === "pendiente").length,
    aprobado: approvals.filter((a) => a.status === "aprobado").length,
    rechazado: approvals.filter((a) => a.status === "rechazado").length,
  };

  const emptyMessages: Record<string, { title: string; desc: string }> = {
    todos: {
      title: "Sin solicitudes de aprobación",
      desc: "Cuando alguien del equipo envíe contenido para revisión, aparecerá aquí.",
    },
    pendiente: {
      title: "Todo al día",
      desc: "No hay contenido pendiente de aprobación.",
    },
    aprobado: {
      title: "Nada aprobado aún",
      desc: "Los posts aprobados aparecerán aquí.",
    },
    rechazado: {
      title: "Sin rechazos",
      desc: "No hay contenido rechazado.",
    },
  };

  return (
    <AppShell>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <CheckSquare size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Flujo de trabajo</span>
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
              Aprobaciones
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Gestiona el flujo de aprobación de contenido con el CEO y el equipo.
            </p>
          </div>
          <Link href="/pipeline" style={{ textDecoration: "none" }}>
            <button
              className="btn-primary"
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
            >
              <Plus size={15} />
              Enviar a aprobación
            </button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 28 }}
      >
        {[
          {
            label: "Pendientes",
            value: counts.pendiente,
            color: "var(--yellow)",
            bg: "rgba(245,201,122,0.12)",
            icon: Clock,
          },
          {
            label: "Aprobados esta semana",
            value: counts.aprobado,
            color: "var(--green)",
            bg: "rgba(126,200,164,0.12)",
            icon: CheckCircle2,
          },
          {
            label: "Requieren revisión",
            value: counts.rechazado,
            color: "var(--red)",
            bg: "rgba(240,152,152,0.12)",
            icon: XCircle,
          },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="card"
              style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 14,
                  background: s.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={22} style={{ color: s.color }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-syne, Syne, sans-serif)",
                    fontSize: 32,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "var(--text-primary)",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Approval pipeline visual */}
      <div className="card" style={{ padding: "16px 24px", marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>
          Flujo de aprobación
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          {[
            { label: "Borrador", color: "#B0A8CC", count: 0 },
            { label: "En revisión", color: "#F5C97A", count: 0 },
            { label: "Cambios pedidos", color: "#F09898", count: 0 },
            { label: "Aprobado", color: "#7EC8A4", count: 0 },
            { label: "Programado", color: "#85B8E8", count: 0 },
          ].map((stage, i, arr) => (
            <div key={stage.label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: `${stage.color}20`,
                    border: `2px solid ${stage.color}50`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 6px",
                    fontSize: 13,
                    fontWeight: 700,
                    color: stage.color,
                  }}
                >
                  {stage.count}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 500 }}>
                  {stage.label}
                </div>
              </div>
              {i < arr.length - 1 && (
                <div
                  style={{
                    width: 24,
                    height: 2,
                    background: "var(--border)",
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 20,
          padding: 4,
          background: "var(--bg-card)",
          borderRadius: 12,
          border: "1px solid var(--border)",
          width: "fit-content",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              padding: "8px 16px",
              borderRadius: 9,
              border: "none",
              background:
                activeTab === tab.key
                  ? "linear-gradient(135deg, rgba(232,160,191,0.22), rgba(184,168,232,0.15))"
                  : "none",
              color: activeTab === tab.key ? "var(--pink-dark)" : "var(--text-muted)",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {tab.label}
            <span
              style={{
                fontSize: 11,
                background:
                  activeTab === tab.key ? "rgba(208,127,170,0.2)" : "var(--bg-surface)",
                padding: "1px 6px",
                borderRadius: 999,
                color: activeTab === tab.key ? "var(--pink-dark)" : "var(--text-muted)",
              }}
            >
              {counts[tab.key]}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      {filtered.length === 0 ? (
        <div
          style={{
            padding: "64px 32px",
            borderRadius: 16,
            border: "1px dashed var(--border-bright)",
            background: "var(--bg-card)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "rgba(232,160,191,0.1)",
              border: "1px solid rgba(232,160,191,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 18px",
            }}
          >
            <CheckSquare size={30} style={{ color: "var(--pink)" }} />
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 8,
              fontFamily: "var(--font-syne, Syne, sans-serif)",
            }}
          >
            {emptyMessages[activeTab].title}
          </div>
          <div
            style={{
              fontSize: 14,
              color: "var(--text-muted)",
              maxWidth: 400,
              margin: "0 auto 24px",
              lineHeight: 1.6,
            }}
          >
            {emptyMessages[activeTab].desc}
          </div>
          {activeTab === "todos" && (
            <Link href="/pipeline" style={{ textDecoration: "none" }}>
              <button
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}
              >
                <Send size={15} />
                Ir al Content Pipeline
              </button>
            </Link>
          )}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {filtered.map((item) => {
            const urg = urgencyColors[item.urgency];
            const st = statusConfig[item.status];
            const StIcon = st.icon;
            return (
              <div key={item.id} className="card" style={{ padding: "20px 24px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 16,
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 8,
                      }}
                    >
                      <span
                        className={`badge ${st.badge}`}
                        style={{ display: "flex", alignItems: "center", gap: 4 }}
                      >
                        <StIcon size={10} />
                        {st.label}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: 999,
                          background: urg.bg,
                          color: urg.text,
                          border: `1px solid ${urg.border}`,
                        }}
                      >
                        Urgencia {item.urgency}
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
                      {item.title}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                      {item.type} · {item.platform} · Solicitado por{" "}
                      <strong style={{ color: "var(--text-secondary)" }}>{item.creator}</strong>
                    </div>
                    {item.notes && (
                      <div
                        style={{
                          marginTop: 10,
                          padding: "10px 14px",
                          borderRadius: 8,
                          background: "var(--bg-surface)",
                          border: "1px solid var(--border)",
                          fontSize: 13,
                          color: "var(--text-secondary)",
                          display: "flex",
                          gap: 8,
                        }}
                      >
                        <MessageSquare size={13} style={{ flexShrink: 0, marginTop: 1, color: "var(--text-muted)" }} />
                        {item.notes}
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                    <button
                      style={{
                        padding: "8px 16px",
                        borderRadius: 8,
                        border: "1px solid rgba(240,152,152,0.3)",
                        background: "rgba(240,152,152,0.08)",
                        color: "var(--red)",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <XCircle size={14} />
                      Rechazar
                    </button>
                    <button
                      style={{
                        padding: "8px 16px",
                        borderRadius: 8,
                        border: "none",
                        background: "linear-gradient(135deg, var(--green), #4FAD88)",
                        color: "white",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <CheckCircle2 size={14} />
                      Aprobar
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 20,
                    marginTop: 14,
                    paddingTop: 14,
                    borderTop: "1px solid var(--border)",
                    fontSize: 12,
                    color: "var(--text-muted)",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={11} />
                    Solicitado: {item.requestedAt}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle size={11} />
                    Programado: {item.scheduledFor}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </AppShell>
  );
}
