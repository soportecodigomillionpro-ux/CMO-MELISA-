"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe, TrendingUp, TrendingDown } from "lucide-react";
import { formatPercent } from "@/lib/utils";

const cuentas = [
  { nombre: "Marca Principal", redes: 3, engagement: 6.8, delta: 0.6, positivo: true },
  { nombre: "Línea Joven", redes: 2, engagement: 9.3, delta: 2.1, positivo: true },
  { nombre: "Submarca B2B", redes: 2, engagement: 3.4, delta: -0.5, positivo: false },
  { nombre: "Eventos & Promo", redes: 3, engagement: 5.1, delta: 0.2, positivo: true },
];

export function EstadoCuentas() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-[var(--pink)]" />
          <CardTitle>Estado por cuenta</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-2.5">
        {cuentas.map((c, i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)]">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--pink)] to-purple-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
              {c.nombre[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[var(--text-primary)] truncate">{c.nombre}</p>
              <p className="text-[10px] text-[var(--text-muted)]">{c.redes} redes activas</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-bold text-[var(--text-primary)]">{formatPercent(c.engagement)}</p>
              <div className={`flex items-center gap-0.5 justify-end text-[10px] font-semibold ${c.positivo ? "text-[var(--green)]" : "text-[var(--red)]"}`}>
                {c.positivo ? <TrendingUp size={9} /> : <TrendingDown size={9} />}
                {c.positivo ? "+" : ""}{formatPercent(Math.abs(c.delta))}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
