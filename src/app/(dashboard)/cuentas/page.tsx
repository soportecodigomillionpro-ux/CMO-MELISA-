"use client";

import AppShell from "@/components/AppShell";
import { Globe, CheckCircle2, AlertCircle, RefreshCw, Plus, ExternalLink } from "lucide-react";

function IgIcon({ size = 20 }: { size?: number }) {
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

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.13 8.13 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z" />
    </svg>
  );
}

function YouTubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.52V8.48L15.5 12l-5.75 3.52z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function PinterestIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.44 7.64 11.19-.1-.94-.2-2.38.04-3.4.22-.93 1.45-6.14 1.45-6.14s-.37-.74-.37-1.84c0-1.72 1-3.01 2.24-3.01 1.06 0 1.57.79 1.57 1.74 0 1.06-.68 2.65-1.02 4.12-.29 1.23.61 2.23 1.81 2.23 2.18 0 3.64-2.78 3.64-6.07 0-2.5-1.69-4.36-4.74-4.36-3.46 0-5.6 2.59-5.6 5.48 0 .99.29 1.68.74 2.21.21.24.24.34.16.62-.05.2-.18.69-.23.88-.07.28-.29.38-.54.28-1.55-.64-2.27-2.35-2.27-4.27 0-3.17 2.67-6.97 8.01-6.97 4.27 0 7.08 3.1 7.08 6.44 0 4.41-2.44 7.72-6.03 7.72-1.21 0-2.34-.65-2.73-1.38l-.79 3.02c-.28 1.06-.85 2.12-1.36 2.95.9.28 1.84.44 2.82.44 6.63 0 12-5.37 12-12S18.63 0 12 0z" />
    </svg>
  );
}

interface Platform {
  id: string;
  name: string;
  handle?: string;
  followers?: string;
  connected: boolean;
  status: "connected" | "expired" | "disconnected";
  color: string;
  bg: string;
  icon: React.ComponentType<{ size?: number }>;
  description: string;
}

const platforms: Platform[] = [
  {
    id: "instagram",
    name: "Instagram",
    connected: false,
    status: "disconnected",
    color: "#D07FAA",
    bg: "rgba(208,127,170,0.12)",
    icon: IgIcon,
    description: "Posts, Reels, Stories e Instagram Shopping",
  },
  {
    id: "tiktok",
    name: "TikTok",
    connected: false,
    status: "disconnected",
    color: "#2D2448",
    bg: "rgba(45,36,72,0.08)",
    icon: TikTokIcon,
    description: "Videos cortos y transmisiones en vivo",
  },
  {
    id: "youtube",
    name: "YouTube",
    connected: false,
    status: "disconnected",
    color: "#F09898",
    bg: "rgba(240,152,152,0.12)",
    icon: YouTubeIcon,
    description: "Videos largos, Shorts y comunidad",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    connected: false,
    status: "disconnected",
    color: "#85B8E8",
    bg: "rgba(133,184,232,0.12)",
    icon: LinkedInIcon,
    description: "Contenido B2B y networking profesional",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    connected: false,
    status: "disconnected",
    color: "#F09898",
    bg: "rgba(240,152,152,0.1)",
    icon: PinterestIcon,
    description: "Pins, tableros y contenido visual inspiracional",
  },
];

const statusConfig = {
  connected: {
    label: "Conectado",
    badge: "badge-green",
    icon: CheckCircle2,
    color: "var(--green)",
  },
  expired: {
    label: "Token expirado",
    badge: "badge-yellow",
    icon: AlertCircle,
    color: "var(--yellow)",
  },
  disconnected: {
    label: "Sin conectar",
    badge: "badge-purple",
    icon: Globe,
    color: "var(--text-muted)",
  },
};

export default function CuentasPage() {
  const connected = platforms.filter((p) => p.connected).length;

  return (
    <AppShell>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <Globe size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Multi-plataforma</span>
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
              Cuentas
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Conecta y gestiona todas tus plataformas en un solo lugar.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 16px",
              borderRadius: 12,
              background: connected > 0 ? "rgba(126,200,164,0.1)" : "rgba(176,168,204,0.1)",
              border: `1px solid ${connected > 0 ? "rgba(126,200,164,0.25)" : "rgba(176,168,204,0.2)"}`,
            }}
          >
            <Globe size={14} style={{ color: connected > 0 ? "var(--green)" : "var(--text-muted)" }} />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: connected > 0 ? "var(--green)" : "var(--text-muted)",
              }}
            >
              {connected} / {platforms.length} plataformas conectadas
            </span>
          </div>
        </div>
      </div>

      {/* Intro banner — when nothing connected */}
      {connected === 0 && (
        <div
          style={{
            padding: "24px 28px",
            borderRadius: 16,
            background: "linear-gradient(135deg, rgba(232,160,191,0.1), rgba(184,168,232,0.08))",
            border: "1px solid rgba(232,160,191,0.25)",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              background: "linear-gradient(135deg, #E8A0BF, #B8A8E8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Globe size={24} color="white" />
          </div>
          <div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 4,
                fontFamily: "var(--font-syne, Syne, sans-serif)",
              }}
            >
              Conecta tus primeras cuentas
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
              Autoriza el acceso a tus plataformas para publicar, programar contenido y ver métricas
              reales. Cada conexión es segura via OAuth 2.0.
            </div>
          </div>
        </div>
      )}

      {/* Platforms grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16, marginBottom: 32 }}>
        {platforms.map((platform) => {
          const Icon = platform.icon;
          const st = statusConfig[platform.status];
          const StIcon = st.icon;
          return (
            <div
              key={platform.id}
              className="card"
              style={{ padding: "22px 24px", position: "relative", overflow: "hidden" }}
            >
              {/* Subtle glow */}
              <div
                style={{
                  position: "absolute",
                  top: -10,
                  right: -10,
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: platform.bg,
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />

              {/* Platform header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      background: platform.bg,
                      border: `1.5px solid ${platform.color}35`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: platform.color,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <div
                      style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}
                    >
                      {platform.name}
                    </div>
                    {platform.handle ? (
                      <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{platform.handle}</div>
                    ) : (
                      <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Sin conectar</div>
                    )}
                  </div>
                </div>
                <span
                  className={`badge ${st.badge}`}
                  style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}
                >
                  <StIcon size={10} />
                  {st.label}
                </span>
              </div>

              {/* Description */}
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginBottom: 16,
                  lineHeight: 1.5,
                }}
              >
                {platform.description}
              </div>

              {/* Stats (when connected) */}
              {platform.connected && platform.followers && (
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    marginBottom: 16,
                    padding: "12px 14px",
                    borderRadius: 10,
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-syne, Syne, sans-serif)",
                        fontSize: 18,
                        fontWeight: 800,
                        color: "var(--text-primary)",
                      }}
                    >
                      {platform.followers}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Seguidores</div>
                  </div>
                </div>
              )}

              {/* Action button */}
              <div style={{ display: "flex", gap: 8 }}>
                {platform.status === "connected" ? (
                  <>
                    <button
                      className="btn-ghost"
                      style={{
                        flex: 1,
                        fontSize: 13,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                      }}
                    >
                      <RefreshCw size={13} />
                      Sincronizar
                    </button>
                    <button
                      className="btn-ghost"
                      style={{
                        padding: "10px 12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ExternalLink size={13} />
                    </button>
                  </>
                ) : platform.status === "expired" ? (
                  <button
                    className="btn-primary"
                    style={{
                      flex: 1,
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                    }}
                  >
                    <RefreshCw size={13} />
                    Reconectar
                  </button>
                ) : (
                  <button
                    className="btn-primary"
                    style={{
                      flex: 1,
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      background: `linear-gradient(135deg, ${platform.color}, ${platform.color}cc)`,
                    }}
                  >
                    <Plus size={13} />
                    Conectar {platform.name}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Info footer */}
      <div
        className="card"
        style={{
          padding: "18px 24px",
          display: "flex",
          alignItems: "flex-start",
          gap: 14,
          background: "rgba(133,184,232,0.05)",
        }}
      >
        <AlertCircle size={16} style={{ color: "var(--blue)", marginTop: 1, flexShrink: 0 }} />
        <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
          <strong style={{ color: "var(--text-primary)" }}>Seguridad:</strong> Todas las conexiones
          usan OAuth 2.0 oficial de cada plataforma. Nunca almacenamos contraseñas. Puedes revocar el
          acceso en cualquier momento desde la configuración de tu cuenta en cada red social.
        </div>
      </div>
    </AppShell>
  );
}
