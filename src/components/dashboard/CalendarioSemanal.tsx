"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
import { addDays, format, startOfWeek } from "date-fns";
import { es } from "date-fns/locale";
import { useState } from "react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.76a4.85 4.85 0 01-1.02-.07z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// Mock data: posts por día de la semana
const posts: Record<number, { plataforma: string; color: string; titulo: string }[]> = {
  0: [{ plataforma: "ig", color: "#E1306C", titulo: "Reel tips" }],
  1: [{ plataforma: "tt", color: "#69C9D0", titulo: "Trend dance" }, { plataforma: "ig", color: "#E1306C", titulo: "Story Q&A" }],
  2: [],
  3: [{ plataforma: "yt", color: "#FF0000", titulo: "Tutorial largo" }],
  4: [{ plataforma: "ig", color: "#E1306C", titulo: "Carrusel" }, { plataforma: "tt", color: "#69C9D0", titulo: "BTS" }],
  5: [{ plataforma: "ig", color: "#E1306C", titulo: "Post feed" }],
  6: [],
};

const PlatIcon = ({ p }: { p: string }) => {
  if (p === "ig") return <InstagramIcon />;
  if (p === "yt") return <YoutubeIcon />;
  return <TikTokIcon />;
};

export function CalendarioSemanal() {
  const [weekStart, setWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));

  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  const today = new Date();

  const totalPosts = Object.values(posts).flat().length;

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CalendarDays size={14} className="text-[var(--pink)]" />
          <CardTitle>Calendario semanal</CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[var(--text-muted)]">{totalPosts} posts</span>
          <button
            onClick={() => setWeekStart(d => addDays(d, -7))}
            className="w-6 h-6 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--pink)] hover:bg-[var(--pink-glow)] transition-all"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={() => setWeekStart(d => addDays(d, 7))}
            className="w-6 h-6 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--pink)] hover:bg-[var(--pink-glow)] transition-all"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, i) => {
            const isToday = format(day, "yyyy-MM-dd") === format(today, "yyyy-MM-dd");
            const dayPosts = posts[i] ?? [];
            return (
              <div key={i} className="flex flex-col gap-1.5">
                {/* Day header */}
                <div className={`flex flex-col items-center gap-0.5 p-1.5 rounded-xl transition-all ${isToday ? "bg-[rgba(255,62,165,0.15)] border border-[rgba(255,62,165,0.3)]" : ""}`}>
                  <span className={`text-[9px] uppercase font-medium ${isToday ? "text-[var(--pink)]" : "text-[var(--text-muted)]"}`}>
                    {format(day, "EEE", { locale: es })}
                  </span>
                  <span className={`text-sm font-bold ${isToday ? "text-[var(--pink)]" : "text-[var(--text-secondary)]"}`}>
                    {format(day, "d")}
                  </span>
                </div>

                {/* Posts */}
                <div className="space-y-1 min-h-[60px]">
                  {dayPosts.map((p, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-1 px-1.5 py-1 rounded-lg text-[9px] font-medium cursor-pointer hover:scale-105 transition-transform truncate"
                      style={{ background: `${p.color}18`, border: `1px solid ${p.color}30`, color: p.color }}
                    >
                      <PlatIcon p={p.plataforma} />
                      <span className="truncate hidden lg:block">{p.titulo}</span>
                    </div>
                  ))}
                  {dayPosts.length === 0 && (
                    <div className="h-7 rounded-lg border border-dashed border-[var(--border)] flex items-center justify-center">
                      <span className="text-[9px] text-[var(--text-muted)]">–</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
