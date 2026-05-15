"use client";

import { Bell, Plus, Search, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

interface TopbarProps {
  title?: string;
  subtitle?: string;
}

export function Topbar({ title, subtitle }: TopbarProps) {
  const [search, setSearch] = useState("");

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Buenos días" : hour < 18 ? "Buenas tardes" : "Buenas noches";

  return (
    <header className="h-16 shrink-0 flex items-center justify-between px-6 border-b border-[var(--border)] bg-[var(--bg-surface)] sticky top-0 z-30">
      {/* Left */}
      <div>
        {title ? (
          <>
            <h1 className="text-base font-bold text-[var(--text-primary)]">{title}</h1>
            {subtitle && <p className="text-xs text-[var(--text-muted)]">{subtitle}</p>}
          </>
        ) : (
          <>
            <h1 className="text-base font-bold text-[var(--text-primary)]">{greeting}, Melisa ✨</h1>
            <p className="text-xs text-[var(--text-muted)]">Aquí está el resumen de hoy</p>
          </>
        )}
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:flex items-center">
          <Search size={14} className="absolute left-3 text-[var(--text-muted)]" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar..."
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl pl-9 pr-4 py-2 text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--pink)] w-48 transition-all"
          />
        </div>

        {/* Notifs */}
        <button className="relative w-9 h-9 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--pink)] hover:text-[var(--pink)] transition-all">
          <Bell size={15} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[var(--pink)] animate-pulse-pink" />
        </button>

        {/* New post */}
        <Link href="/contenido">
          <Button size="sm" className="gap-1.5">
            <Plus size={14} />
            Nuevo post
          </Button>
        </Link>

        {/* AI pill */}
        <button className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(255,62,165,0.1)] border border-[rgba(255,62,165,0.25)] text-[var(--pink-light)] text-xs font-medium hover:bg-[var(--pink-glow)] transition-all">
          <Zap size={11} />
          IA
        </button>
      </div>
    </header>
  );
}
