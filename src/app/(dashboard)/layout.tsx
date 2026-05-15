"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  const supabaseConfigured = !!process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://placeholder.supabase.co";

  useEffect(() => {
    if (supabaseConfigured && !loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router, supabaseConfigured]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-base)]">
        <div className="flex flex-col items-center gap-3">
          <div
            className="pink-glow"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #FF3EA5, #CC1F7A)",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>Cargando...</p>
        </div>
      </div>
    );
  }

  if (supabaseConfigured && !user) return null;

  return <>{children}</>;
}
