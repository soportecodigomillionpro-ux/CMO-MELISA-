"use client";

import Sidebar from "./Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg-base)" }}>
      <Sidebar />
      <main
        style={{
          marginLeft: 240,
          flex: 1,
          minHeight: "100vh",
          padding: "32px 36px",
          overflowX: "hidden",
        }}
      >
        {children}
      </main>
    </div>
  );
}
