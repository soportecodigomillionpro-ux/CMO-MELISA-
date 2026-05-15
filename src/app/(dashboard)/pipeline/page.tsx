import AppShell from "@/components/AppShell";
import { Kanban, Plus, MoreHorizontal } from "lucide-react";

const columns = [
  {
    id: "idea",
    label: "Ideas",
    color: "#9090B0",
    accent: "rgba(144,144,176,0.1)",
    cards: [
      { id: 1, title: "Tutorial skincare mañanero", type: "Reel", assignee: "Ana", due: "20 May" },
      { id: 2, title: "Behind the scenes — nueva colección", type: "Carrusel", assignee: "Luis", due: "22 May" },
    ],
  },
  {
    id: "produccion",
    label: "En producción",
    color: "#4D9FFF",
    accent: "rgba(77,159,255,0.1)",
    cards: [
      { id: 3, title: "5 looks para verano", type: "Carrusel", assignee: "Ana", due: "17 May" },
      { id: 4, title: "Lanzamiento perfume", type: "Imagen", assignee: "Marta", due: "18 May" },
    ],
  },
  {
    id: "revision",
    label: "En revisión",
    color: "#FFD60A",
    accent: "rgba(255,214,10,0.1)",
    cards: [
      { id: 5, title: "Reel primavera 2026", type: "Reel", assignee: "Luis", due: "16 May" },
    ],
  },
  {
    id: "aprobado",
    label: "Aprobado",
    color: "#00E5A0",
    accent: "rgba(0,229,160,0.1)",
    cards: [
      { id: 6, title: "Promo fin de semana", type: "Imagen", assignee: "Ana", due: "15 May" },
      { id: 7, title: "Look editorial mayo", type: "Carrusel", assignee: "Marta", due: "15 May" },
    ],
  },
  {
    id: "publicado",
    label: "Publicado",
    color: "#FF3EA5",
    accent: "rgba(255,62,165,0.08)",
    cards: [
      { id: 8, title: "Detrás de cámaras 🎬", type: "Reel", assignee: "Luis", due: "12 May" },
      { id: 9, title: "Top 5 outfits ✨", type: "Carrusel", assignee: "Ana", due: "10 May" },
    ],
  },
];

const typeColor: Record<string, string> = {
  Reel: "badge-pink",
  Carrusel: "badge-blue",
  Imagen: "badge-green",
};

export default function PipelinePage() {
  return (
    <AppShell>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <Kanban size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.05em" }}>Gestión de contenido</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <h1
              style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 6 }}
              className="gradient-text"
            >
              Content Pipeline
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Gestiona el flujo de todo tu contenido de manera visual.
            </p>
          </div>
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
            <Plus size={15} />
            Nueva tarjeta
          </button>
        </div>
      </div>

      {/* Kanban board */}
      <div
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
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: col.color }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: col.color }}>{col.label}</span>
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
              <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", padding: 2 }}>
                <Plus size={14} />
              </button>
            </div>

            {/* Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {col.cards.map((card) => (
                <div
                  key={card.id}
                  className="card"
                  style={{ padding: "14px 16px", cursor: "grab" }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                    <span className={`badge ${typeColor[card.type]}`}>{card.type}</span>
                    <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", padding: 0 }}>
                      <MoreHorizontal size={14} />
                    </button>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 12, lineHeight: 1.4 }}>
                    {card.title}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg,#FF3EA5,#C084FC)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 9,
                          fontWeight: 700,
                          color: "white",
                        }}
                      >
                        {card.assignee[0]}
                      </div>
                      <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{card.assignee}</span>
                    </div>
                    <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{card.due}</span>
                  </div>
                </div>
              ))}
              {/* Add card */}
              <button
                style={{
                  width: "100%",
                  padding: "10px",
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
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
