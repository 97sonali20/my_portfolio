import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Sonali Srichandan — Frontend UI/UX Developer",
  description:
    "3+ years building smooth, user-friendly mobile and web applications with React Native, React, and Next.js.",
  keywords: [
    "Sonali Srichandan",
    "Frontend Developer",
    "UI/UX Developer",
    "React Native",
    "Next.js",
    "Bhubaneswar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="grain" aria-hidden="true" />
          <Cursor />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
