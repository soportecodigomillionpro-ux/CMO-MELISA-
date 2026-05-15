"use client";

import AppShell from "@/components/AppShell";
import { Send, Image, Video, Layers, Calendar, Clock, Upload, Hash, AlignLeft, X, Plus } from "lucide-react";
import { useState } from "react";

type ContentType = "imagen" | "carrusel" | "reel";

export default function PublishPage() {
  const [type, setType] = useState<ContentType>("imagen");
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [hashInput, setHashInput] = useState("");

  function addHashtag() {
    const raw = hashInput.trim().replace(/^#/, "");
    if (raw && !hashtags.includes(raw)) {
      setHashtags([...hashtags, raw]);
    }
    setHashInput("");
  }

  function removeHashtag(tag: string) {
    setHashtags(hashtags.filter((h) => h !== tag));
  }

  const types: { id: ContentType; icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>; label: string }[] = [
    { id: "imagen", icon: Image, label: "Imagen" },
    { id: "carrusel", icon: Layers, label: "Carrusel" },
    { id: "reel", icon: Video, label: "Reel" },
  ];

  const previewCaption = caption || "Tu caption aparecerá aquí con todos los hashtags...";
  const previewHashtags = hashtags.length > 0 ? " " + hashtags.map((h) => `#${h}`).join(" ") : "";

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
              {types.map(({ id, icon: Icon, label }) => {
                const active = type === id;
                return (
                  <button
                    key={id}
                    onClick={() => setType(id)}
                    style={{
                      padding: "14px",
                      borderRadius: 12,
                      border: active ? "1.5px solid var(--pink)" : "1px solid var(--border)",
                      background: active ? "rgba(232,160,191,0.1)" : "var(--bg-surface)",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                      transition: "all 0.2s",
                    }}
                  >
                    <Icon size={22} style={{ color: active ? "var(--pink)" : "var(--text-muted)" }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: active ? "var(--pink-dark)" : "var(--text-secondary)" }}>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Upload */}
          <div className="card" style={{ padding: "20px 24px" }}>
            <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <Upload size={15} />
              {type === "imagen" ? "Imagen" : type === "carrusel" ? "Imágenes (hasta 10)" : "Video"}
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
              <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(232,160,191,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Upload size={22} style={{ color: "var(--pink)" }} />
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
                  {type === "reel" ? "Arrastra tu video aquí" : "Arrastra tu imagen aquí"}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  {type === "reel" ? "MP4, MOV hasta 1GB · máx 90 seg" : "JPG, PNG hasta 100MB"}
                </div>
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
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              maxLength={2200}
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
            <div style={{ marginTop: 8, display: "flex", justifyContent: "flex-end" }}>
              <span style={{ fontSize: 12, color: caption.length > 2000 ? "var(--red)" : "var(--text-muted)" }}>
                {caption.length} / 2,200
              </span>
            </div>
          </div>

          {/* Hashtags */}
          <div className="card" style={{ padding: "20px 24px" }}>
            <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <Hash size={15} />
              Hashtags
            </div>

            {/* Tag chips */}
            {hashtags.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                {hashtags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "rgba(232,160,191,0.12)",
                      border: "1px solid rgba(232,160,191,0.3)",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--pink-dark)",
                    }}
                  >
                    #{tag}
                    <button
                      onClick={() => removeHashtag(tag)}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", color: "var(--pink-dark)", opacity: 0.6 }}
                    >
                      <X size={11} />
                    </button>
                  </span>
                ))}
              </div>
            )}

            <div style={{ display: "flex", gap: 8 }}>
              <input
                placeholder="Agregar hashtag..."
                value={hashInput}
                onChange={(e) => setHashInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addHashtag()}
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
              <button
                onClick={addHashtag}
                className="btn-ghost"
                style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, padding: "10px 14px" }}
              >
                <Plus size={14} />
                Agregar
              </button>
            </div>
            <div style={{ marginTop: 8, fontSize: 11, color: "var(--text-muted)" }}>
              {hashtags.length}/30 hashtags · Presiona Enter o click en Agregar
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Preview */}
          <div className="card" style={{ padding: "20px 24px" }}>
            <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 14 }}>
              Preview Instagram
            </div>
            <div style={{ background: "var(--bg-surface)", borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)" }}>
              {/* IG header */}
              <div style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#E8A0BF,#B8A8E8)" }} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>melisa_escobar</div>
                  <div style={{ fontSize: 10, color: "var(--text-muted)" }}>Ahora mismo</div>
                </div>
              </div>
              {/* Image placeholder */}
              <div
                style={{
                  aspectRatio: type === "reel" ? "9/16" : "1/1",
                  background: "linear-gradient(135deg, rgba(232,160,191,0.08), rgba(184,168,232,0.08))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderTop: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                  transition: "all 0.3s",
                  maxHeight: type === "reel" ? 300 : undefined,
                  overflow: "hidden",
                }}
              >
                <div style={{ textAlign: "center", color: "var(--text-muted)" }}>
                  {type === "reel" ? <Video size={32} style={{ margin: "0 auto 8px" }} /> : <Image size={32} style={{ margin: "0 auto 8px" }} />}
                  <div style={{ fontSize: 12 }}>
                    {type === "imagen" ? "Tu imagen" : type === "carrusel" ? "Tu carrusel" : "Tu reel"} aparecerá aquí
                  </div>
                </div>
              </div>
              {/* Caption preview */}
              <div style={{ padding: "12px 14px" }}>
                <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>
                  <strong style={{ color: "var(--text-primary)" }}>melisa_escobar </strong>
                  <span style={{ color: caption ? "var(--text-primary)" : "var(--text-muted)" }}>
                    {previewCaption}
                  </span>
                  {hashtags.length > 0 && (
                    <span style={{ color: "var(--blue)" }}>{previewHashtags}</span>
                  )}
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
                <input
                  type="time"
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
              <div style={{ fontSize: 11, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", background: "rgba(126,200,164,0.06)", borderRadius: 8, border: "1px solid rgba(126,200,164,0.15)" }}>
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
