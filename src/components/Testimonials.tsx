"use client";

import { Star, Quote } from "lucide-react";

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

const partners = ["Google Partner", "Meta Certified", "HubSpot", "Salesforce", "Stripe"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-green-500 text-sm font-semibold tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Loved by <span className="text-green-500">500+ Businesses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Agency Flow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
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
          ))}
        </div>

        {/* Partners */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by leading businesses across industries</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <span key={index} className="text-muted-foreground/70 font-medium text-lg hover:text-muted-foreground transition-colors">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
