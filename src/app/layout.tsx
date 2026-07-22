import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import { ThemeProvider } from "./theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adzoop — Smart LED Advertising on Auto-Rickshaws | Lucknow",
  description: "Advertise your business on premium eye-level LED displays installed on auto-rickshaws. Reach thousands of commuters across Lucknow daily.",
  openGraph: {
    title: "Adzoop — Smart LED Auto Advertising",
    description: "High-impact, eye-level LED advertising on auto-rickshaws across Lucknow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
