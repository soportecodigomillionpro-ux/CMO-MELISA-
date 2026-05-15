"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Edit } from "lucide-react";

const acciones = [
  {
    id: 1,
    titulo: "Tutorial de YouTube — Semana 20",
    marca: "Marca Principal",
    estado: "borrador" as const,
    urgente: true,
    vence: "Mañana",
    plataforma: "youtube",
  },
  {
    id: 2,
    titulo: "Trend TikTok — Before/After",
    marca: "Línea Joven",
    estado: "en_revision" as const,
    urgente: false,
    vence: "Hoy 6pm",
    plataforma: "tiktok",
  },
  {
    id: 3,
    titulo: "Campaña B2B LinkedIn",
    marca: "Submarca B2B",
    estado: "borrador" as const,
    urgente: false,
    vence: "Jue 15",
    plataforma: "linkedin",
  },
  {
    id: 4,
    titulo: "Behind the scenes — Oficina",
    marca: "Marca Principal",
    estado: "aprobado" as const,
    urgente: false,
    vence: "Listo",
    plataforma: "instagram",
  },
];

const estadoVariant: Record<string, "yellow" | "blue" | "green" | "pink"> = {
  borrador: "yellow",
  en_revision: "blue",
  aprobado: "green",
  publicado: "green",
};

const estadoLabel: Record<string, string> = {
  borrador: "Borrador",
  en_revision: "En revisión",
  aprobado: "Listo ✓",
  publicado: "Publicado",
};

export function AccionesInmediatas() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-[var(--pink)]" />
          <CardTitle>Acciones inmediatas</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-2.5">
        {acciones.map((a) => (
          <div
            key={a.id}
            className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--border-bright)] transition-all group"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                {a.urgente && (
                  <Badge variant="red" className="text-[9px] py-0">URGENTE</Badge>
                )}
                <Badge variant={estadoVariant[a.estado] ?? "default"}>
                  {estadoLabel[a.estado]}
                </Badge>
              </div>
              <p className="text-xs font-medium text-[var(--text-primary)] truncate">{a.titulo}</p>
              <p className="text-[10px] text-[var(--text-muted)] mt-0.5">{a.marca} · {a.vence}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity w-7 h-7 shrink-0"
            >
              <Edit size={12} />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
