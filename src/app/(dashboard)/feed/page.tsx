"use client";

import AppShell from "@/components/AppShell";
import { Grid3X3, TrendingUp, Heart, Eye, Filter, RefreshCw, AlertCircle, Plus } from "lucide-react";
import Link from "next/link";

function IgIcon({ size = 18, color }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color ?? "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill={color ?? "currentColor"} />
    </svg>
  );
}

export default function FeedPage() {
  return (
    <AppShell>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <IgIcon size={18} color="var(--pink)" />
              <span style={{ fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                Instagram
              </span>
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
            <button
              className="btn-ghost"
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
              disabled
            >
              <Filter size={15} />
              Filtrar
            </button>
            <Link href="/cuentas" style={{ textDecoration: "none" }}>
              <button
                className="btn-primary"
                style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
              >
                <RefreshCw size={15} />
                Conectar cuenta
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Account summary — empty */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          marginBottom: 28,
        }}
      >
        {[
          { label: "Seguidores", icon: IgIcon, color: "#D07FAA" },
          { label: "Posts totales", icon: Grid3X3, color: "#B8A8E8" },
          { label: "Alcance promedio", icon: Eye, color: "#85B8E8" },
          { label: "Engagement promedio", icon: TrendingUp, color: "var(--green)" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="card"
              style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 14 }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: `${s.color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={17} style={{ color: s.color }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-syne, Syne, sans-serif)",
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "var(--text-muted)",
                  }}
                >
                  —
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Connect banner */}
      <div
        style={{
          padding: "24px 28px",
          borderRadius: 16,
          background: "linear-gradient(135deg, rgba(208,127,170,0.1), rgba(184,168,232,0.07))",
          border: "1.5px solid rgba(208,127,170,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 32,
          gap: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: "linear-gradient(135deg, #D07FAA, #B8A8E8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <IgIcon size={22} color="white" />
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-syne, Syne, sans-serif)",
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 4,
              }}
            >
              Conecta tu cuenta de Instagram
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
              Autoriza el acceso para ver tus posts reales, métricas y engagement.
            </div>
          </div>
        </div>
        <Link href="/cuentas" style={{ textDecoration: "none", flexShrink: 0 }}>
          <button className="btn-primary" style={{ fontSize: 13 }}>
            Conectar Instagram
          </button>
        </Link>
      </div>

      {/* Posts grid — empty state */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
          <Heart size={16} style={{ color: "var(--pink)" }} />
          <span
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            Posts publicados
          </span>
          <span className="badge badge-pink">0</span>
        </div>

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
              borderRadius: 20,
              background: "rgba(208,127,170,0.1)",
              border: "1px solid rgba(208,127,170,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 18px",
            }}
          >
            <IgIcon size={28} color="var(--pink-dark)" />
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
            Sin posts sincronizados
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
            Conecta tu cuenta de Instagram Business o Creator para sincronizar tus posts y ver sus
            métricas de engagement aquí.
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/cuentas" style={{ textDecoration: "none" }}>
              <button
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}
              >
                <IgIcon size={15} />
                Conectar Instagram
              </button>
            </Link>
            <Link href="/publish" style={{ textDecoration: "none" }}>
              <button
                className="btn-ghost"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}
              >
                <Plus size={14} />
                Crear post
              </button>
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
