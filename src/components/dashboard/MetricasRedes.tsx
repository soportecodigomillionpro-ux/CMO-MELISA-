"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
import { Card } from "@/components/ui/card";
import { formatNumber, formatPercent } from "@/lib/utils";

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.76a4.85 4.85 0 01-1.02-.07z"/>
  </svg>
);

const metrics = [
  {
    platform: "Instagram",
    icon: <InstagramIcon />,
    color: "#E1306C",
    glow: "rgba(225, 48, 108, 0.2)",
    alcance: 284000,
    alcance_delta: 38000,
    engagement: 6.8,
    engagement_delta: 0.6,
    seguidores: 142000,
    positivo: true,
  },
  {
    platform: "TikTok",
    icon: <TikTokIcon />,
    color: "#69C9D0",
    glow: "rgba(105, 201, 208, 0.2)",
    alcance: 348000,
    alcance_delta: 71000,
    engagement: 9.3,
    engagement_delta: 2.1,
    seguidores: 89000,
    positivo: true,
  },
  {
    platform: "YouTube",
    icon: <YoutubeIcon />,
    color: "#FF0000",
    glow: "rgba(255, 0, 0, 0.15)",
    alcance: 98000,
    alcance_delta: 12000,
    engagement: 4.1,
    engagement_delta: -0.3,
    seguidores: 31000,
    positivo: false,
  },
  {
    platform: "Engagement",
    icon: <TrendingUp size={16} />,
    color: "#FF3EA5",
    glow: "rgba(255, 62, 165, 0.2)",
    alcance: null,
    alcance_delta: null,
    engagement: 6.4,
    engagement_delta: 1.2,
    seguidores: null,
    positivo: true,
    isTotal: true,
  },
];

export function MetricasRedes() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <Card key={m.platform} className="relative overflow-hidden">
          {/* Glow bg */}
          <div
            className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none"
            style={{ background: m.glow }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: `${m.glow}`, border: `1px solid ${m.color}33`, color: m.color }}
              >
                {m.icon}
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-semibold ${m.positivo ? "stat-up" : "stat-down"}`}
              >
                {m.positivo ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                {m.positivo ? "+" : ""}
                {m.isTotal ? formatPercent(m.engagement_delta) : `+${formatNumber(m.alcance_delta ?? 0)}`}
              </span>
            </div>

            {m.isTotal ? (
              <>
                <p className="text-2xl font-bold text-[var(--text-primary)]">{formatPercent(m.engagement)}</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">Engagement global</p>
              </>
            ) : (
              <>
                <p className="text-2xl font-bold text-[var(--text-primary)]">{formatNumber(m.alcance ?? 0)}</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">Alcance — {m.platform}</p>
                <div className="mt-2 pt-2 border-t border-[var(--border)] flex justify-between text-xs">
                  <span className="text-[var(--text-muted)]">Eng.</span>
                  <span className="text-[var(--text-secondary)] font-medium">{formatPercent(m.engagement)}</span>
                </div>
              </>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
