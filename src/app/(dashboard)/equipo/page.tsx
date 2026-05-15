import AppShell from "@/components/AppShell";
import { Construction } from "lucide-react";

export default function Page() {
  return (
    <AppShell>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", gap: 12 }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,62,165,0.1)", border: "1px solid rgba(255,62,165,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Construction size={26} style={{ color: "var(--pink)" }} />
        </div>
        <p style={{ color: "var(--text-secondary)", fontWeight: 600, fontSize: 15 }}>Módulo en construcción</p>
        <p style={{ color: "var(--text-muted)", fontSize: 13 }}>Próximamente disponible</p>
      </div>
    </AppShell>
  );
}
