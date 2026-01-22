"use client";

import { ArrowRight, Phone, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up" duration={0.7}>
        <div className="bg-gradient-cta rounded-3xl p-8 sm:p-12 lg:p-16 border border-green-500/20 text-center relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5 pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to <span className="text-green-500">Transform</span> Your Business?
            </h2>

            {/* Subheading */}
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Join 500+ businesses already using Flip to capture more leads, earn more reviews, and grow faster. Let's talk about your goals.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/advanicurran/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-xl bg-green-500 text-primary-foreground font-medium hover:bg-green-600 transition-colors">
                Book a Free Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://calendly.com/advanicurran/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-xl bg-card border border-border hover:border-green-500/50 transition-all font-medium">
                <Phone className="w-5 h-5" />
                Schedule a Call
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-4">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors">
                <Phone className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:hello@flip.ai" className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@flip.ai</span>
              </a>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
