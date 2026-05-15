import AppShell from "@/components/AppShell";
import { Send, Image, Video, Layers, Calendar, Clock, Upload, Hash, AlignLeft } from "lucide-react";

export default function PublishPage() {
  return (
    <AppShell>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <Send size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.05em" }}>Instagram</span>
        </div>
        <h1
          style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 6 }}
          className="gradient-text"
        >
          Publicar contenido
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
          Crea, programa y publica directamente en Instagram.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 24 }}>
        {/* Editor */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Type selector */}
          <div className="card" style={{ padding: "20px 24px" }}>
            <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 14 }}>
              Tipo de contenido
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {[
                { icon: Image, label: "Imagen", active: true },
                { icon: Layers, label: "Carrusel", active: false },
                { icon: Video, label: "Reel", active: false },
              ].map(({ icon: Icon, label, active }) => (
                <div
                  key={label}
                  style={{
                    padding: "14px",
                    borderRadius: 12,
                    border: active ? "1.5px solid var(--pink)" : "1px solid var(--border)",
                    background: active ? "rgba(255,62,165,0.08)" : "var(--bg-surface)",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    transition: "all 0.2s",
                  }}
                >
                  <Icon size={22} style={{ color: active ? "var(--pink)" : "var(--text-muted)" }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: active ? "var(--pink)" : "var(--text-secondary)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upload */}
          <div className="card" style={{ padding: "20px 24px" }}>
            <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <Upload size={15} />
              Media
            </div>
            <div
              style={{
                border: "2px dashed var(--border-bright)",
                borderRadius: 14,
                padding: "48px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                cursor: "pointer",
                transition: "all 0.2s",
                background: "var(--bg-surface)",
              }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(255,62,165,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Upload size={22} style={{ color: "var(--pink)" }} />
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Arrastra tu imagen aquí</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>o haz clic para buscar — JPG, PNG, MP4 hasta 100MB</div>
              </div>
              <button className="btn-ghost" style={{ fontSize: 13 }}>Buscar archivo</button>
            </div>
          </div>

          {/* Caption */}
          <div className="card" style={{ padding: "20px 24px" }}>
            <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <AlignLeft size={15} />
              Caption
            </div>
            <textarea
              placeholder="Escribe tu caption aquí... usa emojis, menciones y hashtags ✨"
              style={{
                width: "100%",
                minHeight: 120,
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "14px",
                color: "var(--text-primary)",
                fontSize: 14,
                resize: "vertical",
                outline: "none",
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                lineHeight: 1.6,
              }}
            />
            <div style={{ marginTop: 10 }}>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>0 / 2,200 caracteres</div>
            </div>
          </div>

          {/* Hashtags */}
          <div className="card" style={{ padding: "20px 24px" }}>
            <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <Hash size={15} />
              Hashtags
            </div>
            <div style={{ marginBottom: 12, fontSize: 12, color: "var(--text-muted)", fontStyle: "italic" }}>
              Tus hashtags guardados aparecerán aquí.
            </div>
            <input
              placeholder="Agregar hashtag..."
              style={{
                width: "100%",
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "10px 14px",
                color: "var(--text-primary)",
                fontSize: 13,
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Right panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Preview */}
          <div className="card" style={{ padding: "20px 24px" }}>
            <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 14 }}>
              Preview Instagram
            </div>
            <div
              style={{
                background: "var(--bg-surface)",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              {/* IG header */}
              <div style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#FF3EA5,#C084FC)" }} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>tu_marca</div>
                  <div style={{ fontSize: 10, color: "var(--text-muted)" }}>Ahora mismo</div>
                </div>
              </div>
              {/* Image placeholder */}
              <div
                style={{
                  aspectRatio: "1/1",
                  background: "linear-gradient(135deg, rgba(255,62,165,0.08), rgba(192,132,252,0.08))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderTop: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div style={{ textAlign: "center", color: "var(--text-muted)" }}>
                  <Image size={32} style={{ margin: "0 auto 8px" }} />
                  <div style={{ fontSize: 12 }}>Tu imagen aparecerá aquí</div>
                </div>
              </div>
              {/* IG actions */}
              <div style={{ padding: "12px 14px" }}>
                <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>
                  <strong style={{ color: "var(--text-primary)" }}>tu_marca</strong> Tu caption aparecerá aquí con todos los hashtags...
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="card" style={{ padding: "20px 24px" }}>
            <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <Calendar size={15} />
              Programación
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div>
                <label style={{ fontSize: 12, color: "var(--text-muted)", display: "block", marginBottom: 6 }}>Fecha</label>
                <input
                  type="date"
                  style={{
                    width: "100%",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    padding: "10px 14px",
                    color: "var(--text-primary)",
                    fontSize: 13,
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: 12, color: "var(--text-muted)", display: "block", marginBottom: 6 }}>Hora</label>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    type="time"
                    style={{
                      flex: 1,
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      padding: "10px 14px",
                      color: "var(--text-primary)",
                      fontSize: 13,
                      outline: "none",
                    }}
                  />
                </div>
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", background: "rgba(0,229,160,0.06)", borderRadius: 8, border: "1px solid rgba(0,229,160,0.15)" }}>
                <Clock size={12} style={{ color: "var(--green)" }} />
                Mejor hora hoy: <strong style={{ color: "var(--green)" }}>18:00 — 20:00</strong>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button className="btn-primary" style={{ width: "100%", fontSize: 14, justifyContent: "center", display: "flex", alignItems: "center", gap: 8, padding: "14px" }}>
              <Calendar size={16} />
              Programar publicación
            </button>
            <button className="btn-ghost" style={{ width: "100%", fontSize: 14, justifyContent: "center", display: "flex", alignItems: "center", gap: 8 }}>
              <Send size={15} />
              Publicar ahora
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
