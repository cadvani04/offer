"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const footerLinks = {
  services: [
    { label: "AI Receptionists", href: "#" },
    { label: "Review Generation", href: "#" },
    { label: "Web Design", href: "#" },
    { label: "Automation", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Support", href: "#" },
    { label: "Status", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" duration={0.6}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30">
                <span className="text-green-500 font-bold text-sm">F</span>
              </div>
              <span className="text-white font-semibold">Flip</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered solutions for modern businesses. Capture more leads, earn more reviews, grow faster.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-green-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-green-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-green-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-green-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <ScrollReveal direction="up" duration={0.6} delay={0.2}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Flip. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-green-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
