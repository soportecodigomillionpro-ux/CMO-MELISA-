"use client";

import AppShell from "@/components/AppShell";
import { CalendarDays, ChevronLeft, ChevronRight, Plus, Clock } from "lucide-react";
import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  addDays,
  startOfWeek as weekStart,
} from "date-fns";
import { es } from "date-fns/locale";
import Link from "next/link";

const DAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const typeColors: Record<string, string> = {
  Reel: "#D07FAA",
  Carrusel: "#85B8E8",
  Imagen: "#7EC8A4",
  Story: "#F5C97A",
  Video: "#B8A8E8",
};

// No fake data — will be populated from real scheduled posts
const scheduled: Array<{
  date: string;
  title: string;
  type: string;
  time: string;
  platform: string;
}> = [];

export default function CalendarioPage() {
  const today = new Date();
  const [current, setCurrent] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [view, setView] = useState<"month" | "week">("month");

  // Month grid
  const monthStart = startOfMonth(current);
  const monthEnd = endOfMonth(current);
  const gridStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: gridStart, end: gridEnd });

  // Week grid (for week view)
  const weekDayStart = weekStart(today, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekDayStart, i));

  const postsFor = (day: Date) => {
    const key = format(day, "yyyy-MM-dd");
    return scheduled.filter((p) => p.date === key);
  };

  return (
    <AppShell>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <CalendarDays size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Planificación</span>
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
              Calendario
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Vista mensual del contenido programado en todas tus plataformas.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {/* View toggle */}
            <div
              style={{
                display: "flex",
                gap: 2,
                padding: 4,
                background: "var(--bg-card)",
                borderRadius: 10,
                border: "1px solid var(--border)",
              }}
            >
              {(["month", "week"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 7,
                    border: "none",
                    background:
                      view === v
                        ? "linear-gradient(135deg, rgba(232,160,191,0.22), rgba(184,168,232,0.15))"
                        : "none",
                    color: view === v ? "var(--pink-dark)" : "var(--text-muted)",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  {v === "month" ? "Mensual" : "Semanal"}
                </button>
              ))}
            </div>
            <Link href="/publish" style={{ textDecoration: "none" }}>
              <button
                className="btn-primary"
                style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
              >
                <Plus size={15} />
                Programar contenido
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Calendar card */}
      <div className="card" style={{ padding: "24px", marginBottom: 16 }}>
        {/* Month navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 24,
          }}
        >
          <button
            onClick={() => setCurrent(subMonths(current, 1))}
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--bg-surface)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-secondary)",
              transition: "all 0.15s",
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <div
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: 18,
              fontWeight: 700,
              textTransform: "capitalize",
              color: "var(--text-primary)",
            }}
          >
            {format(current, "MMMM yyyy", { locale: es })}
          </div>
          <button
            onClick={() => setCurrent(addMonths(current, 1))}
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--bg-surface)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-secondary)",
              transition: "all 0.15s",
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {view === "month" ? (
          <>
            {/* Day headers */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 4,
                marginBottom: 8,
              }}
            >
              {DAYS.map((d) => (
                <div
                  key={d}
                  style={{
                    textAlign: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    padding: "8px 0",
                  }}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
              {days.map((day, i) => {
                const inMonth = isSameMonth(day, current);
                const isToday = isSameDay(day, today);
                const posts = postsFor(day);
                return (
                  <div
                    key={i}
                    style={{
                      minHeight: 90,
                      padding: 8,
                      borderRadius: 10,
                      border: isToday
                        ? "1.5px solid var(--pink)"
                        : "1px solid var(--border)",
                      background: isToday
                        ? "rgba(232,160,191,0.07)"
                        : inMonth
                        ? "var(--bg-surface)"
                        : "transparent",
                      opacity: inMonth ? 1 : 0.3,
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: isToday ? "var(--pink)" : "none",
                        color: isToday ? "white" : "var(--text-secondary)",
                        fontSize: 13,
                        fontWeight: isToday ? 700 : 500,
                        marginBottom: 4,
                      }}
                    >
                      {format(day, "d")}
                    </div>
                    {posts.map((p, pi) => (
                      <div
                        key={pi}
                        style={{
                          fontSize: 10,
                          padding: "2px 5px",
                          borderRadius: 4,
                          background: `${typeColors[p.type] ?? "#B8A8E8"}22`,
                          color: typeColors[p.type] ?? "#B8A8E8",
                          border: `1px solid ${typeColors[p.type] ?? "#B8A8E8"}44`,
                          marginBottom: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontWeight: 600,
                        }}
                      >
                        {p.time} {p.title}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          /* Week view */
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 8,
              }}
            >
              {weekDays.map((day, i) => {
                const isToday = isSameDay(day, today);
                const posts = postsFor(day);
                return (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div
                      style={{
                        textAlign: "center",
                        padding: "12px 8px",
                        borderRadius: 10,
                        border: isToday ? "1.5px solid var(--pink)" : "1px solid var(--border)",
                        background: isToday ? "rgba(232,160,191,0.07)" : "var(--bg-surface)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          marginBottom: 4,
                        }}
                      >
                        {DAYS[i]}
                      </div>
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: isToday ? "var(--pink)" : "none",
                          color: isToday ? "white" : "var(--text-primary)",
                          fontSize: 18,
                          fontWeight: 700,
                          margin: "0 auto",
                        }}
                      >
                        {format(day, "d")}
                      </div>
                    </div>
                    <div
                      style={{
                        minHeight: 200,
                        padding: 8,
                        borderRadius: 10,
                        border: "1px dashed var(--border)",
                        background: "var(--bg-surface)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                        cursor: "pointer",
                      }}
                    >
                      {posts.length === 0 ? (
                        <div
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Plus size={16} style={{ color: "var(--border-bright)", opacity: 0.5 }} />
                        </div>
                      ) : (
                        posts.map((p, pi) => (
                          <div
                            key={pi}
                            style={{
                              padding: "8px 10px",
                              borderRadius: 8,
                              background: `${typeColors[p.type] ?? "#B8A8E8"}15`,
                              border: `1px solid ${typeColors[p.type] ?? "#B8A8E8"}35`,
                            }}
                          >
                            <div
                              style={{
                                fontSize: 11,
                                fontWeight: 700,
                                color: typeColors[p.type] ?? "#B8A8E8",
                                marginBottom: 2,
                                display: "flex",
                                alignItems: "center",
                                gap: 4,
                              }}
                            >
                              <Clock size={9} />
                              {p.time}
                            </div>
                            <div
                              style={{
                                fontSize: 11,
                                color: "var(--text-primary)",
                                fontWeight: 600,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {p.title}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Bottom row: legend + empty state tip */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* Legend */}
        <div className="card" style={{ padding: "16px 20px" }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "var(--text-secondary)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 12,
            }}
          >
            Tipos de contenido
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {Object.entries(typeColors).map(([type, color]) => (
              <div key={type} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: color }} />
                <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Empty tip */}
        <div
          className="card"
          style={{
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            background:
              "linear-gradient(135deg, rgba(232,160,191,0.06), rgba(184,168,232,0.06))",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "rgba(232,160,191,0.12)",
              border: "1px solid rgba(232,160,191,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <CalendarDays size={20} style={{ color: "var(--pink)" }} />
          </div>
          <div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 4,
              }}
            >
              Sin contenido programado
            </div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>
              Ve a{" "}
              <Link
                href="/publish"
                style={{ color: "var(--pink-dark)", fontWeight: 600, textDecoration: "none" }}
              >
                Publicar
              </Link>{" "}
              para programar tu primer post.
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
