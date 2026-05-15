"use client";

import AppShell from "@/components/AppShell";
import {
  FolderOpen,
  Search,
  Upload,
  Grid3X3,
  List,
  Filter,
  Image,
  Video,
  FileText,
  Plus,
} from "lucide-react";
import { useState } from "react";

type AssetType = "image" | "video" | "doc";
type TagFilter = "Todos" | string;

// Sin assets aún — vacío hasta que el usuario suba archivos
const assets: {
  id: number;
  name: string;
  type: AssetType;
  tag: string;
  size: string;
  date: string;
}[] = [];

const tags: TagFilter[] = ["Todos"];

export default function LibraryPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [activeTag, setActiveTag] = useState<TagFilter>("Todos");
  const [search, setSearch] = useState("");

  const filtered = assets.filter(
    (a) =>
      (activeTag === "Todos" || a.tag === activeTag) &&
      (!search || a.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <AppShell>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <FolderOpen size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Assets</span>
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
              Media Library
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Repositorio centralizado de todos los assets del equipo.
            </p>
          </div>
          <button
            className="btn-primary"
            style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
          >
            <Upload size={15} />
            Subir archivo
          </button>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 24 }}
      >
        {[
          { label: "Imágenes", value: assets.filter((a) => a.type === "image").length, icon: Image, color: "#85B8E8" },
          { label: "Videos", value: assets.filter((a) => a.type === "video").length, icon: Video, color: "#D07FAA" },
          { label: "Documentos", value: assets.filter((a) => a.type === "doc").length, icon: FileText, color: "#F5C97A" },
          { label: "Total de archivos", value: assets.length, icon: FolderOpen, color: "var(--green)" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="card"
              style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: `${s.color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={16} style={{ color: s.color }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-syne, Syne, sans-serif)",
                    fontSize: 20,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: s.value > 0 ? "var(--text-primary)" : "var(--text-muted)",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <div style={{ flex: 1, position: "relative" }}>
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
            placeholder="Buscar assets..."
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
        <button
          className="btn-ghost"
          style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}
        >
          <Filter size={13} />
          Filtros
        </button>
        <div
          style={{
            display: "flex",
            gap: 4,
            padding: "4px",
            background: "var(--bg-card)",
            borderRadius: 10,
            border: "1px solid var(--border)",
          }}
        >
          {(["grid", "list"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                padding: "6px 10px",
                borderRadius: 7,
                background:
                  view === v
                    ? "linear-gradient(135deg, rgba(232,160,191,0.22), rgba(184,168,232,0.15))"
                    : "none",
                border: "none",
                cursor: "pointer",
                color: view === v ? "var(--pink-dark)" : "var(--text-muted)",
                display: "flex",
                alignItems: "center",
              }}
            >
              {v === "grid" ? <Grid3X3 size={14} /> : <List size={14} />}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            style={{
              padding: "6px 14px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              border: activeTag === tag ? "1.5px solid var(--pink)" : "1px solid var(--border)",
              background: activeTag === tag ? "rgba(232,160,191,0.12)" : "var(--bg-card)",
              color: activeTag === tag ? "var(--pink-dark)" : "var(--text-secondary)",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
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
            <FolderOpen size={32} style={{ color: "var(--pink)" }} />
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
            {search ? "Sin resultados" : "Librería vacía"}
          </div>
          <div
            style={{
              fontSize: 14,
              color: "var(--text-muted)",
              maxWidth: 400,
              margin: "0 auto 28px",
              lineHeight: 1.6,
            }}
          >
            {search
              ? `No se encontraron archivos que coincidan con "${search}".`
              : "Sube imágenes, videos y documentos para tener todos los assets del equipo en un solo lugar."}
          </div>
          {!search && (
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}
              >
                <Upload size={15} />
                Subir primer archivo
              </button>
              <button
                className="btn-ghost"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}
              >
                <Plus size={14} />
                Crear carpeta
              </button>
            </div>
          )}
        </div>
      )}

      {/* Grid (when there are assets) */}
      {filtered.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              view === "grid" ? "repeat(4, 1fr)" : "1fr",
            gap: 14,
          }}
        >
          {filtered.map((asset) => (
            <div key={asset.id} className="card" style={{ overflow: "hidden", cursor: "pointer" }}>
              <div
                style={{
                  aspectRatio: "4/3",
                  background: "var(--bg-surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {asset.type === "image" ? (
                  <Image size={32} style={{ color: "var(--text-muted)" }} />
                ) : asset.type === "video" ? (
                  <Video size={32} style={{ color: "var(--text-muted)" }} />
                ) : (
                  <FileText size={32} style={{ color: "var(--text-muted)" }} />
                )}
              </div>
              <div style={{ padding: "10px 12px" }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 4,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {asset.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 11,
                    color: "var(--text-muted)",
                  }}
                >
                  <span>{asset.size}</span>
                  <span>{asset.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AppShell>
  );
}
