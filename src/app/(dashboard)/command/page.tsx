"use client";

import AppShell from "@/components/AppShell";
import {
  TrendingUp,
  TrendingDown,
  Heart,
  Eye,
  Users,
  MessageCircle,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Target,
  Flame,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const reachData = [
  { day: "L", reach: 4200 },
  { day: "M", reach: 5800 },
  { day: "X", reach: 3900 },
  { day: "J", reach: 7200 },
  { day: "V", reach: 9100 },
  { day: "S", reach: 11400 },
  { day: "D", reach: 8600 },
];

const engagementData = [
  { week: "Sem 1", rate: 3.2 },
  { week: "Sem 2", rate: 4.1 },
  { week: "Sem 3", rate: 3.8 },
  { week: "Sem 4", rate: 5.4 },
  { week: "Sem 5", rate: 4.9 },
  { week: "Sem 6", rate: 6.2 },
];

const kpis = [
  {
    label: "Followers",
    value: "48.3K",
    change: "+2.4%",
    up: true,
    icon: Users,
    color: "#D07FAA",
    bg: "rgba(255,62,165,0.1)",
  },
  {
    label: "Alcance mensual",
    value: "312K",
    change: "+18.7%",
    up: true,
    icon: Eye,
    color: "#85B8E8",
    bg: "rgba(77,159,255,0.1)",
  },
  {
    label: "Engagement Rate",
    value: "6.2%",
    change: "+1.3%",
    up: true,
    icon: Heart,
    color: "var(--green)",
    bg: "rgba(0,229,160,0.1)",
  },
  {
    label: "Comentarios",
    value: "1,847",
    change: "-4.1%",
    up: false,
    icon: MessageCircle,
    color: "#F5C97A",
    bg: "rgba(255,214,10,0.1)",
  },
];

const pendingTasks = [
  { label: "Aprobar post: Lanzamiento verano", urgency: "high", time: "Vence hoy" },
  { label: "Brief para agencia — Campaña Q3", urgency: "medium", time: "Vence mañana" },
  { label: "Revisar reels de la semana", urgency: "low", time: "Vence viernes" },
];

const topPosts = [
  {
    id: 1,
    type: "Reel",
    caption: "Detrás de cámaras — colección nueva 🎬",
    likes: 4320,
    comments: 218,
    reach: 28400,
    engagement: "8.1%",
  },
  {
    id: 2,
    type: "Carrusel",
    caption: "5 looks para esta temporada ✨",
    likes: 3180,
    comments: 142,
    reach: 19600,
    engagement: "6.4%",
  },
  {
    id: 3,
    type: "Imagen",
    caption: "Nueva colección disponible ahora",
    likes: 2740,
    comments: 98,
    reach: 15200,
    engagement: "5.7%",
  },
];

const upcoming = [
  { time: "Hoy 18:00", content: "Post — Promo fin de semana", status: "listo" },
  { time: "Mañana 10:00", content: "Reel — Tutorial look de día", status: "pendiente" },
  { time: "Jue 19:00", content: "Carrusel — Top 5 productos", status: "borrador" },
];

const statusColor: Record<string, string> = {
  listo: "badge-green",
  pendiente: "badge-yellow",
  borrador: "badge-blue",
};

export default function DashboardPage() {
  return (
    <AppShell>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <Sparkles size={18} style={{ color: "var(--pink)" }} />
              <span style={{ fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                Jueves, 15 Mayo 2026
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
              Command Center
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Hola Melisa, tienes <strong style={{ color: "var(--pink)" }}>3 tareas pendientes</strong> hoy.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn-ghost" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
              <Target size={15} />
              Objetivos del mes
            </button>
            <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
              <Flame size={15} />
              Nuevo contenido
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          marginBottom: 24,
        }}
      >
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.label}
              className="card"
              style={{ padding: "20px 22px" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: kpi.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={18} style={{ color: kpi.color }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 12,
                    fontWeight: 600,
                    color: kpi.up ? "var(--green)" : "var(--red)",
                    background: kpi.up ? "rgba(0,229,160,0.08)" : "rgba(255,68,102,0.08)",
                    padding: "3px 8px",
                    borderRadius: 999,
                  }}
                >
                  {kpi.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                  {kpi.change}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-syne, Syne, sans-serif)",
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  marginBottom: 2,
                }}
              >
                {kpi.value}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{kpi.label}</div>
            </div>
          );
        })}
      </div>

      {/* Charts row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: 16,
          marginBottom: 24,
        }}
      >
        {/* Reach chart */}
        <div className="card" style={{ padding: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-syne, Syne, sans-serif)",
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                Alcance esta semana
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Personas únicas alcanzadas</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--green)", fontSize: 13, fontWeight: 600 }}>
              <ArrowUpRight size={15} />
              +18.7%
            </div>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={reachData}>
              <defs>
                <linearGradient id="pinkGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D07FAA" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#D07FAA" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                tick={{ fill: "var(--text-muted)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  color: "var(--text-primary)",
                  fontSize: 12,
                }}
                formatter={(value) => [(value as number).toLocaleString(), "Alcance"]}
              />
              <Area
                type="monotone"
                dataKey="reach"
                stroke="#D07FAA"
                strokeWidth={2.5}
                fill="url(#pinkGrad)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Engagement chart */}
        <div className="card" style={{ padding: "24px" }}>
          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                fontFamily: "var(--font-syne, Syne, sans-serif)",
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 2,
              }}
            >
              Engagement Rate
            </div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Últimas 6 semanas</div>
          </div>
          <div
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
            className="gradient-text"
          >
            6.2%
          </div>
          <ResponsiveContainer width="100%" height={100}>
            <AreaChart data={engagementData}>
              <defs>
                <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#B8A8E8" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#B8A8E8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="week"
                tick={{ fill: "var(--text-muted)", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  color: "var(--text-primary)",
                  fontSize: 12,
                }}
                formatter={(v) => [`${v}%`, "Engagement"]}
              />
              <Area
                type="monotone"
                dataKey="rate"
                stroke="#B8A8E8"
                strokeWidth={2}
                fill="url(#purpleGrad)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 16,
        }}
      >
        {/* Top posts */}
        <div className="card" style={{ padding: "24px" }}>
          <div
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: 15,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Top Posts del mes
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {topPosts.map((post, i) => (
              <div
                key={post.id}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "12px",
                  background: "var(--bg-surface)",
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: i === 0
                      ? "linear-gradient(135deg,#FF3EA5,#CC1F7A)"
                      : i === 1
                      ? "linear-gradient(135deg,#C084FC,#818CF8)"
                      : "linear-gradient(135deg,#4D9FFF,#818CF8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 800,
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  #{i + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {post.caption}
                  </div>
                  <div style={{ display: "flex", gap: 10, fontSize: 11, color: "var(--text-muted)" }}>
                    <span>❤️ {post.likes.toLocaleString()}</span>
                    <span>💬 {post.comments}</span>
                    <span style={{ color: "var(--green)", fontWeight: 600 }}>{post.engagement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending tasks */}
        <div className="card" style={{ padding: "24px" }}>
          <div
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: 15,
              fontWeight: 700,
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Tareas pendientes
            <span className="badge badge-pink">3</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {pendingTasks.map((task) => (
              <div
                key={task.label}
                style={{
                  padding: "12px 14px",
                  background: "var(--bg-surface)",
                  borderRadius: 10,
                  border: `1px solid ${task.urgency === "high" ? "rgba(255,68,102,0.3)" : task.urgency === "medium" ? "rgba(255,214,10,0.25)" : "var(--border)"}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  {task.urgency === "high" ? (
                    <AlertCircle size={14} style={{ color: "var(--red)", marginTop: 1, flexShrink: 0 }} />
                  ) : (
                    <CheckCircle2 size={14} style={{ color: task.urgency === "medium" ? "var(--yellow)" : "var(--text-muted)", marginTop: 1, flexShrink: 0 }} />
                  )}
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)", marginBottom: 3 }}>
                      {task.label}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                      <Clock size={10} />
                      {task.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming posts */}
        <div className="card" style={{ padding: "24px" }}>
          <div
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: 15,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Próximas publicaciones
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {upcoming.map((item) => (
              <div
                key={item.content}
                style={{
                  padding: "12px 14px",
                  background: "var(--bg-surface)",
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={10} />
                    {item.time}
                  </div>
                  <span className={`badge ${statusColor[item.status]}`}>{item.status}</span>
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
