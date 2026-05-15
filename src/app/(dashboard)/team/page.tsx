import AppShell from "@/components/AppShell";
import { Users, CheckCircle2, Clock, AlertCircle, Plus, Mail } from "lucide-react";

const team = [
  { name: "Melisa Escobar", role: "CMO", initials: "ME", color: "#FF3EA5", tasks: 12, done: 9, status: "active" },
  { name: "Ana García", role: "Content Creator", initials: "AG", color: "#4D9FFF", tasks: 8, done: 5, status: "active" },
  { name: "Luis Martín", role: "Video Editor", initials: "LM", color: "#00E5A0", tasks: 6, done: 6, status: "active" },
  { name: "Marta Ruiz", role: "Diseñadora", initials: "MR", color: "#C084FC", tasks: 5, done: 2, status: "busy" },
  { name: "CEO", role: "Aprobaciones", initials: "CE", color: "#FFD60A", tasks: 3, done: 1, status: "pending" },
];

const recentActivity = [
  { user: "Ana García", action: "Subió 3 nuevos assets a la biblioteca", time: "hace 2h", icon: "AG", color: "#4D9FFF" },
  { user: "Luis Martín", action: "Marcó como listo: Reel primavera 2026", time: "hace 4h", icon: "LM", color: "#00E5A0" },
  { user: "CEO", action: "Aprobó: Look editorial mayo", time: "hace 6h", icon: "CE", color: "#FFD60A" },
  { user: "Marta Ruiz", action: "Movió 'Lanzamiento perfume' a En revisión", time: "ayer", icon: "MR", color: "#C084FC" },
  { user: "Ana García", action: "Creó nueva tarjeta: Tutorial skincare", time: "ayer", icon: "AG", color: "#4D9FFF" },
];

const statusLabel: Record<string, { label: string; cls: string }> = {
  active: { label: "Activo", cls: "badge-green" },
  busy: { label: "Ocupada", cls: "badge-yellow" },
  pending: { label: "Pendiente", cls: "badge-red" },
};

export default function TeamPage() {
  return (
    <AppShell>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <Users size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Colaboración</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 6 }} className="gradient-text">
              Equipo
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>Roles, tareas y actividad del equipo de marketing.</p>
          </div>
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
            <Plus size={15} />
            Invitar miembro
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 24 }}>
        {/* Team members */}
        <div>
          <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 16 }}>
            Miembros ({team.length})
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {team.map((member) => {
              const pct = Math.round((member.done / member.tasks) * 100);
              const st = statusLabel[member.status];
              return (
                <div key={member.name} className="card" style={{ padding: "20px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${member.color}, ${member.color}88)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: 800,
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      {member.initials}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 2 }}>
                        <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>{member.name}</span>
                        <span className={`badge ${st.cls}`}>{st.label}</span>
                      </div>
                      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 10 }}>{member.role}</div>
                      {/* Progress */}
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ flex: 1, height: 4, background: "var(--bg-surface)", borderRadius: 4, overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${pct}%`, background: member.color, borderRadius: 4, transition: "width 0.5s ease" }} />
                        </div>
                        <span style={{ fontSize: 11, color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                          {member.done}/{member.tasks} tareas
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                      <button className="btn-ghost" style={{ padding: "6px 12px", fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}>
                        <Mail size={12} />
                        Mensaje
                      </button>
                    </div>
                  </div>

                  {/* Task breakdown */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                    {[
                      { icon: CheckCircle2, label: "Completadas", value: member.done, color: "var(--green)" },
                      { icon: Clock, label: "En curso", value: member.tasks - member.done, color: "var(--yellow)" },
                      { icon: AlertCircle, label: "Total", value: member.tasks, color: "var(--text-muted)" },
                    ].map(({ icon: Icon, label, value, color }) => (
                      <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <Icon size={13} style={{ color }} />
                        <div>
                          <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>{value}</div>
                          <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activity feed */}
        <div>
          <div style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 16 }}>
            Actividad reciente
          </div>
          <div className="card" style={{ padding: "20px 24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {recentActivity.map((a, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    paddingBottom: i < recentActivity.length - 1 ? 16 : 0,
                    marginBottom: i < recentActivity.length - 1 ? 16 : 0,
                    borderBottom: i < recentActivity.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: `${a.color}25`,
                      border: `1px solid ${a.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 800,
                      color: a.color,
                      flexShrink: 0,
                    }}
                  >
                    {a.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)", marginBottom: 2 }}>{a.user}</div>
                    <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.4, marginBottom: 4 }}>{a.action}</div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
