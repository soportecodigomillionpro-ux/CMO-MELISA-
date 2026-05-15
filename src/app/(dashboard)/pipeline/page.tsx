"use client";

import AppShell from "@/components/AppShell";
import { Kanban, Plus, MoreHorizontal, Send } from "lucide-react";
import Link from "next/link";

const columns = [
  {
    id: "idea",
    label: "Ideas",
    color: "#B0A8CC",
    accent: "rgba(176,168,204,0.1)",
    cards: [] as { id: number; title: string; type: string; platform: string; due?: string }[],
  },
  {
    id: "produccion",
    label: "En producción",
    color: "#85B8E8",
    accent: "rgba(133,184,232,0.1)",
    cards: [] as { id: number; title: string; type: string; platform: string; due?: string }[],
  },
  {
    id: "revision",
    label: "En revisión",
    color: "#F5C97A",
    accent: "rgba(245,201,122,0.1)",
    cards: [] as { id: number; title: string; type: string; platform: string; due?: string }[],
  },
  {
    id: "aprobado",
    label: "Aprobado",
    color: "#7EC8A4",
    accent: "rgba(126,200,164,0.1)",
    cards: [] as { id: number; title: string; type: string; platform: string; due?: string }[],
  },
  {
    id: "publicado",
    label: "Publicado",
    color: "#D07FAA",
    accent: "rgba(208,127,170,0.08)",
    cards: [] as { id: number; title: string; type: string; platform: string; due?: string }[],
  },
];

export default function PipelinePage() {
  const totalCards = columns.reduce((sum, col) => sum + col.cards.length, 0);

  return (
    <AppShell>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <Kanban size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.05em" }}>
            Gestión de contenido
          </span>
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
              Content Pipeline
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Gestiona el flujo de todo tu contenido de manera visual.
            </p>
          </div>
          <Link href="/publish" style={{ textDecoration: "none" }}>
            <button
              className="btn-primary"
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
            >
              <Plus size={15} />
              Nueva tarjeta
            </button>
          </Link>
        </div>
      </div>

      {/* Kanban board */}
      <div
        className="kanban-board"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns.length}, 260px)`,
          gap: 16,
          overflowX: "auto",
          paddingBottom: 16,
        }}
      >
        {columns.map((col) => (
          <div key={col.id}>
            {/* Column header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
                padding: "10px 14px",
                borderRadius: 10,
                background: col.accent,
                border: `1px solid ${col.color}30`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{ width: 8, height: 8, borderRadius: "50%", background: col.color }}
                />
                <span style={{ fontSize: 13, fontWeight: 700, color: col.color }}>
                  {col.label}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    background: `${col.color}20`,
                    color: col.color,
                    padding: "1px 7px",
                    borderRadius: 999,
                  }}
                >
                  {col.cards.length}
                </span>
              </div>
              <Link href="/publish" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: col.color,
                    padding: 2,
                    opacity: 0.7,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Plus size={14} />
                </button>
              </Link>
            </div>

            {/* Cards (empty) */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {col.cards.map((card) => (
                <div key={card.id} className="card" style={{ padding: "14px 16px", cursor: "grab" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <span className="badge badge-pink">{card.type}</span>
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "var(--text-muted)",
                        padding: 0,
                      }}
                    >
                      <MoreHorizontal size={14} />
                    </button>
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: 12,
                      lineHeight: 1.4,
                    }}
                  >
                    {card.title}
                  </div>
                  {card.due && (
                    <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{card.due}</div>
                  )}
                </div>
              ))}

              {/* Add card CTA */}
              <Link href="/publish" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px dashed var(--border)",
                    borderRadius: 10,
                    background: "none",
                    color: "var(--text-muted)",
                    fontSize: 12,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    transition: "all 0.2s",
                  }}
                >
                  <Plus size={13} />
                  Agregar tarjeta
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state message */}
      {totalCards === 0 && (
        <div
          style={{
            marginTop: 32,
            padding: "40px 32px",
            borderRadius: 16,
            border: "1px dashed var(--border-bright)",
            background: "var(--bg-card)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 18,
              background: "rgba(232,160,191,0.1)",
              border: "1px solid rgba(232,160,191,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <Kanban size={28} style={{ color: "var(--pink)" }} />
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
            Pipeline vacío
          </div>
          <div
            style={{
              fontSize: 14,
              color: "var(--text-muted)",
              maxWidth: 380,
              margin: "0 auto 24px",
              lineHeight: 1.6,
            }}
          >
            Crea tu primer post para verlo aquí. Mueve las tarjetas entre columnas según avanza tu
            proceso de producción.
          </div>
          <Link href="/publish" style={{ textDecoration: "none" }}>
            <button
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}
            >
              <Send size={15} />
              Crear primer post
            </button>
          </Link>
        </div>
      )}
    </AppShell>
  );
}
