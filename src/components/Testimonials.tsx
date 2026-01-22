"use client";

import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Mitchell Dental",
    initials: "SM",
    content: "Agency Flow's AI receptionist has been a game-changer. We went from missing 30% of calls to capturing every single lead. Our reviews jumped from 3.8 to 4.9 stars in just 3 months.",
    rating: 5,
    bgColor: "bg-gradient-to-br from-green-500/20 to-purple-500/20",
  },
  {
    name: "David Chen",
    role: "CEO, Premier Auto Group",
    initials: "DC",
    content: "The ROI speaks for itself. We've seen a 400% increase in booked appointments and our Google ranking has skyrocketed thanks to the review system.",
    rating: 5,
    bgColor: "bg-gradient-to-br from-emerald-600/30 to-green-500/30",
  },
  {
    name: "Jessica Williams",
    role: "Director, Luxe Real Estate",
    initials: "JW",
    content: "Not only did they build us a stunning website, but the AI handles our after-hours inquiries perfectly. It's like having a 24/7 sales team.",
    rating: 5,
    bgColor: "bg-gradient-to-br from-lime-500/30 to-green-600/30",
  },
];

const partners = [
  {
    name: "Google",
    subtitle: "Partner",
    bgColor: "bg-white/5",
    textColor: "text-white",
    borderColor: "border-white/10",
  },
  {
    name: "Meta",
    subtitle: "Certified",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    borderColor: "border-blue-500/20",
  },
  {
    name: "HubSpot",
    subtitle: "Solutions Partner",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-400",
    borderColor: "border-orange-500/20",
  },
  {
    name: "Salesforce",
    subtitle: "AppExchange",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
  },
  {
    name: "Stripe",
    subtitle: "Verified",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-400",
    borderColor: "border-purple-500/20",
  },
  {
    name: "AWS",
    subtitle: "Advanced Partner",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-400",
    borderColor: "border-amber-500/20",
  },
  {
    name: "Microsoft",
    subtitle: "Gold Partner",
    bgColor: "bg-blue-600/10",
    textColor: "text-blue-300",
    borderColor: "border-blue-600/20",
  },
  {
    name: "OpenAI",
    subtitle: "Partner",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={0.6}>
        <div className="text-center mb-16 space-y-4">
          <span className="text-green-500 text-sm font-semibold tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Loved by <span className="text-green-500">500+ Businesses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Agency Flow.
          </p>
        </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} direction="up" duration={0.5} delay={0.15 * index}>
            <div
              className="bg-card rounded-2xl p-6 border border-border hover:border-green-500/30 transition-all relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-green-500/30" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6">{`"${testimonial.content}"`}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center`}>
                  <span className="font-semibold text-white text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Partners */}
        <ScrollReveal direction="up" duration={0.6}>
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8">Trusted by leading businesses across industries</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <ScrollReveal key={index} direction="up" duration={0.4} delay={0.05 * index}>
              <div
                className={`${partner.bgColor} ${partner.borderColor} border rounded-xl p-6 hover:scale-105 transition-transform duration-300 group cursor-pointer`}
              >
                <div className="flex flex-col items-center justify-center h-full space-y-2">
                  <div className={`${partner.textColor} font-bold text-xl group-hover:scale-110 transition-transform`}>
                    {partner.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {partner.subtitle}
                  </div>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
