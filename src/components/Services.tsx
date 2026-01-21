"use client";

import { Bot, Star, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Receptionists",
    description: "24/7 AI-powered receptionists that answer calls, book appointments, and never miss a lead. Your business, always on.",
    features: ["24/7 Availability", "Natural Conversations", "Appointment Booking", "Lead Capture"],
    color: "teal",
  },
  {
    icon: Star,
    title: "5-Star Review Generation",
    description: "Automatically collect and boost your Google reviews. Turn happy customers into your best marketing asset.",
    features: ["Automated Follow-ups", "Review Monitoring", "Response Templates", "Analytics Dashboard"],
    color: "purple",
  },
  {
    icon: Palette,
    title: "High-End Web Design",
    description: "Premium websites that convert visitors into customers. Stunning designs backed by conversion science.",
    features: ["Custom Design", "Mobile Optimized", "SEO Ready", "Fast Loading"],
    color: "teal",
  },
  {
    icon: TrendingUp,
    title: "Increase Lead Flow",
    description: "Supercharge your pipeline with AI-driven lead generation. More appointments, more consultations, more revenue.",
    features: ["Book More Appts", "Schedule Consultations", "Lead Nurturing", "Pipeline Automation"],
    color: "teal",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-green-500 text-sm font-semibold tracking-wider uppercase">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Everything Your Business <span className="text-green-500">Needs to Grow</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge AI technology with premium design to deliver solutions that actually move the needle for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-green-500/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-5 group-hover:bg-green-500/20 transition-colors">
                <service.icon className="w-7 h-7 text-green-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
