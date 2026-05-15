import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CMO — Marketing Command Center",
  description: "Tu centro de comando de marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${syne.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
        <div className="noise" aria-hidden />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
