"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

const perks = [
  "Access every resource, guide, and article — free forever",
  "Join discussions and connect with Christians worldwide",
  "Daily verse, devotional, and personalized reading plans",
  "Save articles, build your library, track your growth",
  "Find Christians who share your exact interests",
  "Mental health resources, prayer walls, and real community",
];

export default function JoinCTA() {
  return (
    <section className="py-24 relative overflow-hidden" id="join">
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,136,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-8"
          style={{
            background: "rgba(0,255,136,0.08)",
            border: "1px solid rgba(0,255,136,0.2)",
            color: "#00FF88",
          }}
        >
          🌿 Free Forever. No Ads. No Catch.
        </div>

        <h2
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6"
          style={{ color: "#F2F2F8" }}
        >
          Your Faith.
          <br />
          <span className="gold-gradient">Your Community.</span>
          <br />
          Your Home.
        </h2>

        <p
          className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#8A8AA8" }}
        >
          Join thousands of Christians who have already found their place on
          Vine — the platform built for every season, every question, and
          every dimension of following Christ.
        </p>

        {/* Perks list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-12 text-left">
          {perks.map((perk, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                style={{ color: "#00FF88", flexShrink: 0, marginTop: "2px" }}
              />
              <span className="text-sm" style={{ color: "#A0A0C0" }}>
                {perk}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="btn-gold px-10 py-4 rounded-2xl text-base flex items-center gap-2 group">
            Join Vine — It&apos;s Free
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button className="btn-outline-gold px-8 py-4 rounded-2xl text-base font-semibold">
            Learn More
          </button>
        </div>

        <p className="text-xs" style={{ color: "#4A4A68" }}>
          No credit card required. No ads. Built by believers, for believers.
        </p>

        {/* Verse */}
        <div className="mt-16 verse-card rounded-3xl p-8 max-w-xl mx-auto">
          <p
            className="text-xl font-bold italic mb-3 leading-relaxed"
            style={{ color: "#F2F2F8" }}
          >
            &ldquo;And let us consider how to stir up one another to love and good
            works, not neglecting to meet together.&rdquo;
          </p>
          <p className="text-sm font-semibold" style={{ color: "#00FF88" }}>
            Hebrews 10:24–25 (ESV)
          </p>
        </div>
      </div>
    </section>
  );
}
