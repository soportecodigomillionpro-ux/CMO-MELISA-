"use client";

import AppShell from "@/components/AppShell";
import { BarChart3, Download, TrendingUp, Users, Eye, Heart, MessageCircle, Bookmark, ArrowUpRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";

const monthlyReach = [
  { mes: "Ene", reach: 180000 },
  { mes: "Feb", reach: 210000 },
  { mes: "Mar", reach: 195000 },
  { mes: "Abr", reach: 265000 },
  { mes: "May", reach: 312000 },
];

const engagementByType = [
  { type: "Reels", rate: 9.2 },
  { type: "Carruseles", rate: 6.4 },
  { type: "Imágenes", rate: 4.8 },
  { type: "Stories", rate: 3.1 },
];

const followerGrowth = [
  { mes: "Ene", followers: 38200 },
  { mes: "Feb", followers: 40100 },
  { mes: "Mar", followers: 42800 },
  { mes: "Abr", followers: 45600 },
  { mes: "May", followers: 48300 },
];

const contentMix = [
  { name: "Reels", value: 35, color: "#FF3EA5" },
  { name: "Carruseles", value: 28, color: "#C084FC" },
  { name: "Imágenes", value: 22, color: "#4D9FFF" },
  { name: "Stories", value: 15, color: "#00E5A0" },
];

export default function ReportsPage() {
  return (
    <AppShell>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <BarChart3 size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Analytics</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 6 }} className="gradient-text">
              Reportes
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Rendimiento mensual — <strong style={{ color: "var(--text-primary)" }}>Mayo 2026</strong>
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <select style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 16px", color: "var(--text-primary)", fontSize: 13, outline: "none", cursor: "pointer" }}>
              <option>Mayo 2026</option>
              <option>Abril 2026</option>
              <option>Marzo 2026</option>
            </select>
            <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
              <Download size={15} />
              Exportar PDF
            </button>
          </div>
        </div>
      </div>

      {/* KPI summary */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginBottom: 24 }}>
        {[
          { label: "Alcance total", value: "312K", change: "+18%", icon: Eye, color: "#4D9FFF" },
          { label: "Impresiones", value: "580K", change: "+22%", icon: TrendingUp, color: "#C084FC" },
          { label: "Nuevos seguidores", value: "+2,700", change: "+6%", icon: Users, color: "#FF3EA5" },
          { label: "Likes totales", value: "28.4K", change: "+11%", icon: Heart, color: "#FF6EC4" },
          { label: "Comentarios", value: "1,847", change: "-4%", icon: MessageCircle, color: "#FFD60A" },
        ].map((s) => {
          const Icon = s.icon;
          const isUp = s.change.startsWith("+");
          return (
            <div key={s.label} className="card" style={{ padding: "16px 18px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <Icon size={16} style={{ color: s.color }} />
                <div style={{ fontSize: 11, fontWeight: 700, color: isUp ? "var(--green)" : "var(--red)", display: "flex", alignItems: "center", gap: 3 }}>
                  <ArrowUpRight size={10} style={{ transform: isUp ? "none" : "rotate(90deg)" }} />
                  {s.change}
                </div>
              </div>
              <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 2 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{s.label}</div>
            </div>
          );
        })}
      </div>

      {/* Charts row 1 */}
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, marginBottom: 16 }}>
        {/* Monthly reach */}
        <div className="card" style={{ padding: "24px" }}>
          <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Alcance mensual</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }}>Personas únicas alcanzadas por mes</div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={monthlyReach}>
              <XAxis dataKey="mes" tick={{ fill: "var(--text-muted)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip
                contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, color: "var(--text-primary)", fontSize: 12 }}
                formatter={(v) => [`${(Number(v) / 1000).toFixed(0)}K`, "Alcance"]}
              />
              <Bar dataKey="reach" fill="#FF3EA5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Content mix */}
        <div className="card" style={{ padding: "24px" }}>
          <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Mix de contenido</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }}>Distribución de tipos de post</div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <PieChart width={140} height={140}>
              <Pie data={contentMix} cx={65} cy={65} innerRadius={40} outerRadius={65} dataKey="value" strokeWidth={0}>
                {contentMix.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
              {contentMix.map((item) => (
                <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color }} />
                    <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{item.name}</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)" }}>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Charts row 2 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* Follower growth */}
        <div className="card" style={{ padding: "24px" }}>
          <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Crecimiento de seguidores</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }}>Evolución últimos 5 meses</div>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={followerGrowth}>
              <XAxis dataKey="mes" tick={{ fill: "var(--text-muted)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, color: "var(--text-primary)", fontSize: 12 }} formatter={(v) => [`${(Number(v) / 1000).toFixed(1)}K`, "Seguidores"]} />
              <Line type="monotone" dataKey="followers" stroke="#C084FC" strokeWidth={2.5} dot={{ fill: "#C084FC", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Engagement by type */}
        <div className="card" style={{ padding: "24px" }}>
          <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Engagement por tipo</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 20 }}>Tasa de engagement promedio</div>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={engagementByType} layout="vertical">
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="type" tick={{ fill: "var(--text-muted)", fontSize: 11 }} axisLine={false} tickLine={false} width={80} />
              <Tooltip contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, color: "var(--text-primary)", fontSize: 12 }} formatter={(v) => [`${v}%`, "Engagement"]} />
              <Bar dataKey="rate" fill="#00E5A0" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </AppShell>
  );
}
