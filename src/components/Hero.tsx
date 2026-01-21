"use client";

import { ArrowRight, Play, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">Powered by Advanced AI</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Business with{" "}
              <span className="text-green-500">AI-Powered</span> Solutions
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground max-w-xl">
              AI Receptionists that never sleep. 5-star Google reviews on autopilot. High-end web design that converts. We're Agency Flow.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-primary-foreground font-medium hover:bg-green-600 transition-colors">
                Test Drive Our AI
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border hover:border-green-500/50 transition-all font-medium">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Businesses Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-sm text-muted-foreground">Calls Handled Daily</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-3xl font-bold">4.9</div>
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <div className="text-sm text-muted-foreground">Average Review Score</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-500/10 to-lime-400/20 rounded-2xl" />

              {/* Decorative Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Glowing orbs */}
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/30 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-emerald-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-lime-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />

                  {/* Crystal-like shapes */}
                  <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-green-500/30 rotate-45 rounded-lg" />
                  <div className="absolute bottom-1/4 left-1/3 w-12 h-12 border border-emerald-400/30 rotate-12 rounded-lg" />
                  <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-green-500/10 rotate-45 rounded" />
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-md rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center border border-green-500/30">
                    <span className="text-green-500 font-bold text-sm">AI</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">AI Receptionist Active</div>
                    <div className="text-sm text-muted-foreground">Handling 47 calls right now</div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
