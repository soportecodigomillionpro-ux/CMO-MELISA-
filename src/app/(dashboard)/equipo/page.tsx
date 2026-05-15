"use client";

import AppShell from "@/components/AppShell";
import { Users, Plus, Mail, Shield, Edit3, UserPlus, Crown } from "lucide-react";
import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  initials: string;
  color: string;
  email: string;
  permissions: string[];
  isOwner?: boolean;
}

// Solo el dueño real de la cuenta — sin miembros inventados
const members: TeamMember[] = [
  {
    id: 1,
    name: "Melisa Escobar",
    role: "CMO · Propietaria",
    initials: "ME",
    color: "#D07FAA",
    email: "melisa@escobar.co",
    permissions: ["Publicar", "Aprobar", "Analytics", "Configuración"],
    isOwner: true,
  },
];

const roleOptions = [
  {
    id: "admin",
    label: "Administrador",
    description: "Acceso completo a todas las funciones.",
    icon: Crown,
    color: "#D07FAA",
  },
  {
    id: "editor",
    label: "Editor",
    description: "Puede crear y editar contenido, pero no publicar.",
    icon: Edit3,
    color: "#85B8E8",
  },
  {
    id: "approver",
    label: "Aprobador",
    description: "Solo puede aprobar o rechazar contenido.",
    icon: Shield,
    color: "#7EC8A4",
  },
  {
    id: "viewer",
    label: "Observador",
    description: "Solo puede ver el contenido y reportes.",
    icon: Users,
    color: "#B8A8E8",
  },
];

export default function EquipoPage() {
  const [showInvite, setShowInvite] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("editor");

  return (
    <AppShell>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <Users size={18} style={{ color: "var(--pink)" }} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Colaboración</span>
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
              Equipo
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Gestiona roles y permisos de los miembros del equipo.
            </p>
          </div>
          <button
            className="btn-primary"
            onClick={() => setShowInvite(!showInvite)}
            style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}
          >
            <UserPlus size={15} />
            Invitar miembro
          </button>
        </div>
      </div>

      {/* Invite form */}
      {showInvite && (
        <div
          className="card"
          style={{
            padding: "24px",
            marginBottom: 28,
            border: "1.5px solid rgba(232,160,191,0.3)",
            background: "linear-gradient(135deg, rgba(232,160,191,0.05), rgba(184,168,232,0.05))",
          }}
        >
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <UserPlus size={16} style={{ color: "var(--pink)" }} />
            Invitar al equipo
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 200px auto", gap: 12, alignItems: "end" }}>
            <div>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  display: "block",
                  marginBottom: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Email
              </label>
              <div style={{ position: "relative" }}>
                <Mail
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
                  type="email"
                  placeholder="nombre@empresa.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
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
            </div>
            <div>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  display: "block",
                  marginBottom: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Rol
              </label>
              <select
                value={inviteRole}
                onChange={(e) => setInviteRole(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  color: "var(--text-primary)",
                  fontSize: 13,
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                {roleOptions.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="btn-primary"
              style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}
            >
              <Mail size={13} />
              Enviar invitación
            </button>
          </div>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24 }}>
        {/* Members list */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: 15,
              fontWeight: 700,
              marginBottom: 16,
              color: "var(--text-primary)",
            }}
          >
            Miembros ({members.length})
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {members.map((member) => (
              <div key={member.id} className="card" style={{ padding: "20px 24px" }}>
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
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 2,
                      }}
                    >
                      <span
                        style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}
                      >
                        {member.name}
                      </span>
                      {member.isOwner && (
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 3,
                            fontSize: 11,
                            fontWeight: 700,
                            padding: "2px 8px",
                            borderRadius: 999,
                            background: "rgba(208,127,170,0.15)",
                            color: "var(--pink-dark)",
                            border: "1px solid rgba(208,127,170,0.3)",
                          }}
                        >
                          <Crown size={9} />
                          Propietaria
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 12 }}>
                      {member.role} · {member.email}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {member.permissions.map((perm) => (
                        <span
                          key={perm}
                          style={{
                            padding: "3px 10px",
                            borderRadius: 999,
                            background: "var(--bg-surface)",
                            border: "1px solid var(--border)",
                            fontSize: 11,
                            fontWeight: 600,
                            color: "var(--text-secondary)",
                          }}
                        >
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>
                  {!member.isOwner && (
                    <button
                      className="btn-ghost"
                      style={{
                        padding: "6px 12px",
                        fontSize: 12,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        flexShrink: 0,
                      }}
                    >
                      <Edit3 size={12} />
                      Editar
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Invite placeholder */}
            <button
              onClick={() => setShowInvite(true)}
              style={{
                padding: "20px 24px",
                borderRadius: 16,
                border: "1.5px dashed var(--border-bright)",
                background: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 14,
                color: "var(--text-muted)",
                transition: "all 0.2s",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "1.5px dashed var(--border-bright)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Plus size={20} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>
                  Invitar nuevo miembro
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  Agrega diseñadores, editores, aprobadores
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Roles reference */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-syne, Syne, sans-serif)",
              fontSize: 15,
              fontWeight: 700,
              marginBottom: 16,
              color: "var(--text-primary)",
            }}
          >
            Roles disponibles
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {roleOptions.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.id}
                  className="card"
                  style={{ padding: "14px 18px", display: "flex", alignItems: "flex-start", gap: 12 }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: `${role.color}18`,
                      border: `1.5px solid ${role.color}35`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} style={{ color: role.color }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: 2,
                      }}
                    >
                      {role.label}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.4 }}>
                      {role.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
