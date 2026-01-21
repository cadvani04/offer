import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agency Flow - AI-Powered Business Solutions",
  description: "Transform your business with AI-powered solutions. AI Receptionists, 5-star Google reviews, and high-end web design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-background">{children}</body>
    </html>
  );
}
