"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

const objetivos = [
  { label: "Alcance total", meta: 300000, actual: 247000, unidad: "K", suffix: "" },
  { label: "Engagement", meta: 6, actual: 6.4, unidad: "%", suffix: "" },
  { label: "Posts publicados", meta: 60, actual: 38, unidad: "", suffix: "/60" },
  { label: "Tiempo aprobación", meta: 24, actual: 18, unidad: "h", invertido: true },
];

function pct(actual: number, meta: number, invertido?: boolean) {
  if (invertido) {
    return Math.min(100, ((meta - actual) / meta) * 100 + 50);
  }
  return Math.min(100, (actual / meta) * 100);
}

function formatVal(val: number, unidad: string) {
  if (unidad === "K") return `${Math.round(val / 1000)}K`;
  if (unidad === "%") return `${val}%`;
  return `${val}`;
}

export function ObjetivosMes() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Target size={14} className="text-[var(--pink)]" />
          <CardTitle>Objetivos de mayo</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {objetivos.map((o, i) => {
          const p = pct(o.actual, o.meta, o.invertido);
          const alcanzado = p >= 100;
          const color = alcanzado ? "var(--green)" : p >= 60 ? "var(--pink)" : "var(--yellow)";
          return (
            <div key={i}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-[var(--text-secondary)]">{o.label}</span>
                <span className="text-xs font-semibold text-[var(--text-primary)]">
                  {formatVal(o.actual, o.unidad)}{o.suffix}
                  <span className="text-[var(--text-muted)] font-normal"> / {formatVal(o.meta, o.unidad)}</span>
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-[var(--bg-surface)] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${p}%`, background: color }}
                />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
