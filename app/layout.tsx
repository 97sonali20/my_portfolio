import type { Metadata } from "next";
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
