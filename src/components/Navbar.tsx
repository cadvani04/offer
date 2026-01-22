"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30">
              <span className="text-green-500 font-bold text-sm">F</span>
            </div>
            <span className="text-white font-semibold text-lg">Flip</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-muted-foreground hover:text-white transition-colors text-sm">
              Services
            </Link>
            <Link href="#features" className="text-muted-foreground hover:text-white transition-colors text-sm">
              Features
            </Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-white transition-colors text-sm">
              Reviews
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-white transition-colors text-sm">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="https://calendly.com/advanicurran/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-lg border border-border hover:border-green-500/50 bg-card hover:bg-card/80 transition-all text-sm font-medium"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
