"use client";

import Sidebar from "./Sidebar";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg-base)" }}>

      {/* Mobile topbar */}
      <div className="mobile-topbar">
        <button
          onClick={() => setSidebarOpen(true)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", alignItems: "center", color: "var(--text-primary)" }}
        >
          <Menu size={22} />
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            className="pink-glow"
            style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #E8A0BF, #D07FAA)", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Zap size={14} color="white" fill="white" />
          </div>
          <span style={{ fontFamily: "var(--font-syne, Syne, sans-serif)", fontWeight: 800, fontSize: 17, letterSpacing: "-0.02em" }} className="gradient-text">
            CMO
          </span>
        </div>
        <div style={{ width: 34 }} />
      </div>

      {/* Sidebar overlay backdrop (mobile) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(45,36,72,0.4)", zIndex: 99, backdropFilter: "blur(2px)" }}
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <main className="app-main">
        {children}
      </main>
    </div>
  );
}
