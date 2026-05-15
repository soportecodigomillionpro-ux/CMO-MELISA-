"use client";

import AppShell from "@/components/AppShell";
import {
  FileText,
  Search,
  Filter,
  Plus,
  Grid3X3,
  List,
  Send,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type StatusFilter = "todos" | "borrador" | "programado" | "publicado" | "archivado";
type PlatformFilter = "todas" | "instagram" | "tiktok" | "youtube" | "linkedin";
type TypeFilter = "todos" | "imagen" | "carrusel" | "reel" | "video" | "story";

function IgIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

// Sin contenido creado aún
const allContent: unknown[] = [];

const statusOptions: { key: StatusFilter; label: string; badge: string }[] = [
  { key: "todos", label: "Todos", badge: "badge-purple" },
  { key: "borrador", label: "Borrador", badge: "badge-blue" },
  { key: "programado", label: "Programado", badge: "badge-yellow" },
  { key: "publicado", label: "Publicado", badge: "badge-green" },
  { key: "archivado", label: "Archivado", badge: "badge-purple" },
];

const platformOptions: { key: PlatformFilter; label: string }[] = [
  { key: "todas", label: "Todas las plataformas" },
  { key: "instagram", label: "Instagram" },
  { key: "tiktok", label: "TikTok" },
  { key: "youtube", label: "YouTube" },
  { key: "linkedin", label: "LinkedIn" },
];

const typeOptions: { key: TypeFilter; label: string }[] = [
  { key: "todos", label: "Todos los tipos" },
  { key: "imagen", label: "Imagen" },
  { key: "carrusel", label: "Carrusel" },
  { key: "reel", label: "Reel" },
  { key: "video", label: "Video" },
  { key: "story", label: "Story" },
];

export default function ContenidoPage() {
  const [view, setView] = useState<"grid" | "list">("list");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("todos");
  const [platformFilter, setPlatformFilter] = useState<PlatformFilter>("todas");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("todos");
  const [search, setSearch] = useState("");

  const hasFilters =
    statusFilter !== "todos" || platformFilter !== "todas" || typeFilter !== "todos" || search;

  return (
    <AppShell>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <FileText size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Gestión multi-plataforma</span>
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
              Contenido
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Todos tus posts, borradores y publicaciones en un solo lugar.
            </p>
          </div>
          <Link href="/publish" style={{ textDecoration: "none" }}>
            <button
              className="btn-primary"
              style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
            >
              <Plus size={15} />
              Crear contenido
            </button>
          </Link>
        </div>
      </div>

      {/* Filters bar */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 20,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* Search */}
        <div style={{ flex: "1 1 240px", position: "relative" }}>
          <Search
            size={14}
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--text-muted)",
            }}
          />
          <input
            type="text"
            placeholder="Buscar por título, caption o hashtag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px 10px 36px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              color: "var(--text-primary)",
              fontSize: 13,
              outline: "none",
            }}
          />
        </div>

        {/* Platform filter */}
        <div style={{ position: "relative" }}>
          <select
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value as PlatformFilter)}
            style={{
              padding: "10px 32px 10px 14px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              color: "var(--text-primary)",
              fontSize: 13,
              outline: "none",
              cursor: "pointer",
              appearance: "none",
            }}
          >
            {platformOptions.map((p) => (
              <option key={p.key} value={p.key}>
                {p.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={12}
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--text-muted)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Type filter */}
        <div style={{ position: "relative" }}>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as TypeFilter)}
            style={{
              padding: "10px 32px 10px 14px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              color: "var(--text-primary)",
              fontSize: 13,
              outline: "none",
              cursor: "pointer",
              appearance: "none",
            }}
          >
            {typeOptions.map((t) => (
              <option key={t.key} value={t.key}>
                {t.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={12}
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--text-muted)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* View toggle */}
        <div
          style={{
            display: "flex",
            gap: 2,
            padding: 4,
            background: "var(--bg-card)",
            borderRadius: 10,
            border: "1px solid var(--border)",
            marginLeft: "auto",
          }}
        >
          {(["list", "grid"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                padding: "6px 10px",
                borderRadius: 7,
                border: "none",
                background:
                  view === v
                    ? "linear-gradient(135deg, rgba(232,160,191,0.22), rgba(184,168,232,0.15))"
                    : "none",
                color: view === v ? "var(--pink-dark)" : "var(--text-muted)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              {v === "list" ? <List size={14} /> : <Grid3X3 size={14} />}
            </button>
          ))}
        </div>
      </div>

      {/* Status tabs */}
      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 24,
          padding: 4,
          background: "var(--bg-card)",
          borderRadius: 12,
          border: "1px solid var(--border)",
          width: "fit-content",
        }}
      >
        {statusOptions.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setStatusFilter(opt.key)}
            style={{
              padding: "7px 14px",
              borderRadius: 9,
              border: "none",
              background:
                statusFilter === opt.key
                  ? "linear-gradient(135deg, rgba(232,160,191,0.22), rgba(184,168,232,0.15))"
                  : "none",
              color: statusFilter === opt.key ? "var(--pink-dark)" : "var(--text-muted)",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Empty state */}
      {allContent.length === 0 && (
        <div
          style={{
            padding: "72px 32px",
            borderRadius: 16,
            border: "1px dashed var(--border-bright)",
            background: "var(--bg-card)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 20,
              background: "rgba(232,160,191,0.1)",
              border: "1px solid rgba(232,160,191,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <FileText size={32} style={{ color: "var(--pink)" }} />
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: 10,
              fontFamily: "var(--font-syne, Syne, sans-serif)",
            }}
          >
            Sin contenido aún
          </div>
          <div
            style={{
              fontSize: 14,
              color: "var(--text-muted)",
              maxWidth: 420,
              margin: "0 auto 28px",
              lineHeight: 1.6,
            }}
          >
            {hasFilters
              ? "No hay contenido que coincida con los filtros seleccionados. Intenta cambiar los filtros."
              : "Cuando crees tu primer post, aparecerá aquí. Puedes crear posts, borradores, reels y más."}
          </div>
          {!hasFilters && (
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <Link href="/publish" style={{ textDecoration: "none" }}>
                <button
                  className="btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}
                >
                  <Send size={15} />
                  Crear primer post
                </button>
              </Link>
              <Link href="/pipeline" style={{ textDecoration: "none" }}>
                <button
                  className="btn-ghost"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}
                >
                  <Filter size={14} />
                  Ver pipeline
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </AppShell>
  );
}
