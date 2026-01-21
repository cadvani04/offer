"use client";

import { Zap, Shield, TrendingUp, Clock, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get up and running in minutes, not weeks. Our AI learns your business instantly.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance. Your data is always safe with us.",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Average 300% increase in captured leads. Real results, measured in dollars.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call again. AI that works while you sleep.",
  },
  {
    icon: Users,
    title: "Human Handoff",
    description: "Seamless transfer to your team when needed. AI + human, perfectly balanced.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track every call, review, and conversion. Data-driven decisions made easy.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <span className="text-green-500 text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Built for Businesses That <span className="text-green-500">Demand Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We don't just build tools—we build growth engines. Every feature is designed to help your business capture more leads, build trust, and scale without limits.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="text-3xl font-bold text-green-500">99.9%</div>
                <div className="text-sm text-muted-foreground mt-1">Uptime Guarantee</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="text-3xl font-bold text-green-500">&lt;2s</div>
                <div className="text-sm text-muted-foreground mt-1">Response Time</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 border border-border hover:border-green-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
