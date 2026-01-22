import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flip - AI-Powered Business Solutions",
  description: "Transform your business with AI-powered solutions. AI Receptionists, 5-star Google reviews, and high-end web design.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-background">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
