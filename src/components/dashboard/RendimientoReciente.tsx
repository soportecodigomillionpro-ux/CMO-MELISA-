"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";
import { formatNumber, formatPercent } from "@/lib/utils";

const contenidos = [
  {
    titulo: "Tutorial: Cómo duplicar tus ventas",
    plataforma: "YouTube",
    engagement: 8.4,
    alcance: 47200,
    positivo: true,
  },
  {
    titulo: "Trend del momento — Reel viral",
    plataforma: "Instagram",
    engagement: 11.2,
    alcance: 89000,
    positivo: true,
  },
  {
    titulo: "Lanzamiento nueva línea B2B",
    plataforma: "LinkedIn",
    engagement: 3.1,
    alcance: 12400,
    positivo: false,
  },
];

export function RendimientoReciente() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BarChart3 size={14} className="text-[var(--pink)]" />
          <CardTitle>Top rendimiento</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {contenidos.map((c, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center text-[10px] font-bold text-[var(--text-muted)] shrink-0 mt-0.5">
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-[var(--text-primary)] truncate">{c.titulo}</p>
              <p className="text-[10px] text-[var(--text-muted)] mt-0.5">{c.plataforma} · {formatNumber(c.alcance)} alcance</p>
              <div className="flex items-center gap-1 mt-1">
                {c.positivo ? <TrendingUp size={10} className="text-[var(--green)]" /> : <TrendingDown size={10} className="text-[var(--red)]" />}
                <span className={`text-[10px] font-semibold ${c.positivo ? "text-[var(--green)]" : "text-[var(--red)]"}`}>
                  {formatPercent(c.engagement)} eng.
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
