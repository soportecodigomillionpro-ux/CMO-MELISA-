import AppShell from "@/components/AppShell";
import { Grid3X3, BarChart2, TrendingUp, Heart, Eye, MessageCircle, Bookmark, Filter, RefreshCw } from "lucide-react";

function IgIcon({ size = 18, color }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color ?? "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill={color ?? "currentColor"} />
    </svg>
  );
}

const posts = [
  { id: 1, type: "Reel", caption: "Detrás de cámaras — colección nueva 🎬", likes: 4320, comments: 218, reach: 28400, saves: 340, engagement: "8.1%", date: "12 May", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop" },
  { id: 2, type: "Carrusel", caption: "5 looks para esta temporada ✨", likes: 3180, comments: 142, reach: 19600, saves: 210, engagement: "6.4%", date: "10 May", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop" },
  { id: 3, type: "Imagen", caption: "Nueva colección disponible ahora", likes: 2740, comments: 98, reach: 15200, saves: 185, engagement: "5.7%", date: "8 May", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=300&fit=crop" },
  { id: 4, type: "Reel", caption: "Tutorial: look de día en 60 segundos ⚡", likes: 5100, comments: 305, reach: 34200, saves: 520, engagement: "9.3%", date: "6 May", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=300&h=300&fit=crop" },
  { id: 5, type: "Carrusel", caption: "Inspiración primavera — 10 outfits 🌸", likes: 2890, comments: 120, reach: 17800, saves: 230, engagement: "5.9%", date: "4 May", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=300&fit=crop" },
  { id: 6, type: "Imagen", caption: "El rojo es el color de la temporada 🔴", likes: 3450, comments: 167, reach: 21000, saves: 198, engagement: "7.1%", date: "2 May", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop" },
];

const typeColor: Record<string, string> = {
  Reel: "badge-pink",
  Carrusel: "badge-blue",
  Imagen: "badge-green",
};

export default function FeedPage() {
  return (
    <AppShell>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <IgIcon size={18} color="var(--pink)" />
              <span style={{ fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.05em" }}>@tu_marca</span>
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
              Instagram Feed
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Preview y analytics de todos tus posts publicados.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn-ghost" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
              <Filter size={15} />
              Filtrar
            </button>
            <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
              <RefreshCw size={15} />
              Sincronizar
            </button>
          </div>
        </div>
      </div>

      {/* Account summary */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          marginBottom: 28,
        }}
      >
        {[
          { label: "Seguidores", value: "48.3K", icon: IgIcon, color: "#FF3EA5" },
          { label: "Posts totales", value: "284", icon: Grid3X3, color: "#C084FC" },
          { label: "Alcance promedio", value: "22.7K", icon: Eye, color: "#4D9FFF" },
          { label: "Eng. promedio", value: "7.1%", icon: TrendingUp, color: "#00E5A0" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: `${s.color}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={17} style={{ color: s.color }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Connect banner */}
      <div
        style={{
          padding: "20px 24px",
          borderRadius: 14,
          background: "linear-gradient(135deg, rgba(255,62,165,0.12), rgba(192,132,252,0.08))",
          border: "1px solid rgba(255,62,165,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 28,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg,#FF3EA5,#C084FC)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IgIcon size={20} color="white" />
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 2 }}>
              Conecta tu cuenta de Instagram
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
              Autoriza el acceso para ver datos reales y publicar desde aquí
            </div>
          </div>
        </div>
        <button className="btn-primary" style={{ fontSize: 13, whiteSpace: "nowrap" }}>
          Conectar Instagram
        </button>
      </div>

      {/* Posts grid */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
          <BarChart2 size={16} style={{ color: "var(--pink)" }} />
          <span style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 16, fontWeight: 700 }}>
            Posts recientes
          </span>
          <span className="badge badge-pink" style={{ marginLeft: 4 }}>{posts.length}</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {posts.map((post) => (
            <div key={post.id} className="card" style={{ overflow: "hidden", cursor: "pointer" }}>
              {/* Image */}
              <div style={{ position: "relative", aspectRatio: "1/1", background: "var(--bg-surface)", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.img}
                  alt={post.caption}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", top: 10, left: 10 }}>
                  <span className={`badge ${typeColor[post.type]}`}>{post.type}</span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(8,8,15,0.85) 0%, transparent 50%)",
                  }}
                />
                <div style={{ position: "absolute", bottom: 10, left: 12, right: 12 }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.9)", fontWeight: 500, lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {post.caption}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div style={{ padding: "14px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{post.date} Mayo</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--green)" }}>{post.engagement}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                  {[
                    { icon: Heart, value: post.likes.toLocaleString(), color: "#FF3EA5" },
                    { icon: MessageCircle, value: post.comments, color: "#4D9FFF" },
                    { icon: Eye, value: `${(post.reach / 1000).toFixed(0)}K`, color: "#C084FC" },
                    { icon: Bookmark, value: post.saves, color: "#FFD60A" },
                  ].map(({ icon: Icon, value, color }) => (
                    <div key={color} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                      <Icon size={13} style={{ color }} />
                      <span style={{ fontSize: 11, fontWeight: 600, color: "var(--text-secondary)" }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
