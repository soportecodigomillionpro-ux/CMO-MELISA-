import AppShell from "@/components/AppShell";
import { FolderOpen, Search, Upload, Grid3X3, List, Filter, Image, Video, FileText } from "lucide-react";

const assets = [
  { id: 1, name: "verano-hero-01.jpg", type: "image", tag: "Campaña Verano", size: "2.4 MB", date: "12 May", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&h=200&fit=crop" },
  { id: 2, name: "reel-bts-mayo.mp4", type: "video", tag: "Behind the scenes", size: "48 MB", date: "10 May", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=200&h=200&fit=crop" },
  { id: 3, name: "look-editorial-01.jpg", type: "image", tag: "Editorial", size: "3.1 MB", date: "8 May", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=200&fit=crop" },
  { id: 4, name: "brief-q3-2026.pdf", type: "doc", tag: "Briefings", size: "0.8 MB", date: "7 May", img: "" },
  { id: 5, name: "coleccion-nueva-02.jpg", type: "image", tag: "Campaña Verano", size: "2.8 MB", date: "5 May", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200&h=200&fit=crop" },
  { id: 6, name: "tutorial-skincare.mp4", type: "video", tag: "Tutoriales", size: "62 MB", date: "3 May", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=200&h=200&fit=crop" },
  { id: 7, name: "inspiracion-primavera.jpg", type: "image", tag: "Editorial", size: "1.9 MB", date: "1 May", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&h=200&fit=crop" },
  { id: 8, name: "copy-lanzamiento.pdf", type: "doc", tag: "Briefings", size: "0.3 MB", date: "28 Apr", img: "" },
];

const typeIcon = (type: string) => {
  if (type === "image") return <Image size={14} style={{ color: "#85B8E8" }} />;
  if (type === "video") return <Video size={14} style={{ color: "#D07FAA" }} />;
  return <FileText size={14} style={{ color: "#F5C97A" }} />;
};

const tags = ["Todos", "Campaña Verano", "Editorial", "Behind the scenes", "Tutoriales", "Briefings"];

export default function LibraryPage() {
  return (
    <AppShell>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <FolderOpen size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Assets</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 6 }} className="gradient-text">
              Media Library
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>Repositorio centralizado de todos los assets del equipo.</p>
          </div>
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
            <Upload size={15} />
            Subir archivo
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 24 }}>
        {[
          { label: "Imágenes", value: "184", icon: Image, color: "#85B8E8" },
          { label: "Videos", value: "42", icon: Video, color: "#D07FAA" },
          { label: "Documentos", value: "28", icon: FileText, color: "#F5C97A" },
          { label: "Espacio usado", value: "4.2 GB", icon: FolderOpen, color: "var(--green)" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="card" style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: `${s.color}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={16} style={{ color: s.color }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <div style={{ flex: 1, position: "relative" }}>
          <Search size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
          <input
            placeholder="Buscar assets..."
            style={{ width: "100%", padding: "10px 14px 10px 36px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, color: "var(--text-primary)", fontSize: 13, outline: "none" }}
          />
        </div>
        <button className="btn-ghost" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}>
          <Filter size={13} />
          Filtros
        </button>
        <div style={{ display: "flex", gap: 4, padding: "4px", background: "var(--bg-card)", borderRadius: 10, border: "1px solid var(--border)" }}>
          <button style={{ padding: "6px 10px", borderRadius: 7, background: "rgba(255,62,165,0.15)", border: "none", cursor: "pointer", color: "var(--pink)" }}>
            <Grid3X3 size={14} />
          </button>
          <button style={{ padding: "6px 10px", borderRadius: 7, background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}>
            <List size={14} />
          </button>
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {tags.map((tag, i) => (
          <button
            key={tag}
            style={{
              padding: "6px 14px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              border: i === 0 ? "1.5px solid var(--pink)" : "1px solid var(--border)",
              background: i === 0 ? "rgba(255,62,165,0.12)" : "var(--bg-card)",
              color: i === 0 ? "var(--pink)" : "var(--text-secondary)",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        {assets.map((asset) => (
          <div key={asset.id} className="card" style={{ overflow: "hidden", cursor: "pointer" }}>
            <div
              style={{
                aspectRatio: "4/3",
                background: "var(--bg-surface)",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {asset.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={asset.img} alt={asset.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: "var(--text-muted)" }}>
                  <FileText size={28} />
                  <span style={{ fontSize: 11 }}>PDF</span>
                </div>
              )}
              {asset.type === "video" && (
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Video size={16} color="white" />
                  </div>
                </div>
              )}
            </div>
            <div style={{ padding: "10px 12px" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {asset.name}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  {typeIcon(asset.type)}
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{asset.size}</span>
                </div>
                <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{asset.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
