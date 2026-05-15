"use client";

import { AlertTriangle, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export function AlertasCriticas() {
  return (
    <div className="flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-[rgba(255,214,10,0.08)] border border-[rgba(255,214,10,0.2)]">
      <div className="w-8 h-8 rounded-xl bg-[rgba(255,214,10,0.15)] flex items-center justify-center shrink-0">
        <AlertTriangle size={16} className="text-[var(--yellow)]" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-[var(--yellow)]">
          2 posts esperan aprobación del CEO
        </p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <Clock size={11} className="text-[var(--text-muted)]" />
          <p className="text-xs text-[var(--text-muted)]">Vencen en menos de 2 horas — requieren acción inmediata</p>
        </div>
      </div>
      <Link
        href="/aprobaciones"
        className="flex items-center gap-1.5 text-xs font-semibold text-[var(--yellow)] hover:underline shrink-0"
      >
        Revisar <ArrowRight size={13} />
      </Link>
    </div>
  );
}
