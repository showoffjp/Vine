"use client";

import { ArrowRight, Users, BookOpen, Flame, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "12K+", label: "Christians Connected" },
  { icon: BookOpen, value: "5,000+", label: "Resources & Guides" },
  { icon: Flame, value: "200+", label: "Daily Devotionals" },
  { icon: Globe, value: "80+", label: "Countries Represented" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ paddingTop: "var(--header-height, 64px)" }}>
      {/* Background radial glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(107,79,187,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(0,255,136,0.08)",
              border: "1px solid rgba(0,255,136,0.2)",
              color: "#00FF88",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#00FF88", boxShadow: "0 0 8px #00FF88" }}
            />
            The World&apos;s First All-In-One Christian Platform
          </div>
        </div>

        {/* Main headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6"
          style={{ color: "#F2F2F8" }}
        >
          Grow. Connect.{" "}
          <br />
          <span className="gold-gradient">Thrive in Faith.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed"
          style={{ color: "#8A8AA8" }}
        >
          Vine is where Christians worldwide find community, resources, guidance,
          and truth — all in one place. Discussions, devotionals, life hacks,
          mental health support, and more.
        </p>

        {/* Verse */}
        <p
          className="text-sm mb-10 italic"
          style={{ color: "rgba(0,255,136,0.6)" }}
        >
          &ldquo;I am the vine; you are the branches.&rdquo; — John 15:5
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="btn-gold px-8 py-4 rounded-xl text-base flex items-center gap-2 group">
            Join the Community — It&apos;s Free
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          <button className="btn-outline-gold px-8 py-4 rounded-xl text-base font-semibold">
            Explore Vine
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl"
              style={{
                background: "rgba(18,18,31,0.8)",
                border: "1px solid rgba(0,255,136,0.08)",
              }}
            >
              <Icon size={20} style={{ color: "#00FF88" }} />
              <span
                className="text-2xl font-black"
                style={{ color: "#F2F2F8" }}
              >
                {value}
              </span>
              <span className="text-xs text-center" style={{ color: "#8A8AA8" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(0,255,136,0.3)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div
          className="w-px h-8"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,255,136,0.4), transparent)",
          }}
        />
      </div>
    </section>
  );
}
