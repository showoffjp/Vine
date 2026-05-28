"use client";

import { Smartphone, Star, Download, Zap, Bell, BookOpen, Users } from "lucide-react";

const features = [
  { icon: Bell, text: "Daily verse & push devotionals" },
  { icon: BookOpen, text: "Offline Bible & reading plans" },
  { icon: Users, text: "Community on the go" },
  { icon: Zap, text: "Quick prayer & praise reports" },
];

const screens = [
  { bg: "linear-gradient(160deg, #1A1A2E, #12122A)", label: "Home Feed", color: "#00FF88" },
  { bg: "linear-gradient(160deg, #0A1A12, #081A10)", label: "Daily Bread", color: "#3A9E72" },
  { bg: "linear-gradient(160deg, #1A0E2A, #120A22)", label: "Bible", color: "#6B4FBB" },
];

export default function AppDownload() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(107,79,187,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="tag-pill inline-block mb-6">Mobile App</p>
            <h2
              className="text-4xl sm:text-5xl font-black leading-tight mb-4"
              style={{ color: "#F2F2F8" }}
            >
              Vine in Your Pocket.
              <br />
              <span className="gold-gradient">Faith On the Go.</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#8A8AA8" }}>
              The full power of Vine — discussions, Bible, devotionals, prayer,
              community — everywhere you go. Available for iOS and Android.
            </p>

            <div className="space-y-3 mb-8">
              {features.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.15)" }}>
                    <Icon size={15} style={{ color: "#00FF88" }} />
                  </div>
                  <span className="text-sm" style={{ color: "#A0A0C0" }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Store buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {[
                { store: "App Store", icon: "🍎", sub: "Download on the" },
                { store: "Google Play", icon: "▶", sub: "Get it on" },
              ].map((s) => (
                <button
                  key={s.store}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,255,136,0.3)"; e.currentTarget.style.background = "rgba(0,255,136,0.04)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                >
                  <span className="text-2xl">{s.icon}</span>
                  <div className="text-left">
                    <p className="text-xs" style={{ color: "#6A6A88" }}>{s.sub}</p>
                    <p className="text-sm font-bold" style={{ color: "#F2F2F8" }}>{s.store}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="#00FF88" style={{ color: "#00FF88" }} />
                ))}
              </div>
              <span className="text-sm font-bold" style={{ color: "#F2F2F8" }}>4.9</span>
              <span className="text-sm" style={{ color: "#6A6A88" }}>· 12,000+ reviews</span>
            </div>
          </div>

          {/* Right: Phone mockups */}
          <div className="relative flex justify-center items-end gap-4 h-80">
            {screens.map((screen, i) => (
              <div
                key={i}
                className="rounded-3xl border flex flex-col items-center justify-center relative overflow-hidden"
                style={{
                  background: screen.bg,
                  borderColor: `${screen.color}30`,
                  width: i === 1 ? "140px" : "110px",
                  height: i === 1 ? "280px" : "220px",
                  marginBottom: i === 1 ? "0" : "20px",
                  boxShadow: i === 1 ? `0 0 40px ${screen.color}20` : "none",
                  flexShrink: 0,
                }}
              >
                {/* Fake screen content */}
                <div className="absolute top-4 left-3 right-3">
                  <div className="h-1.5 rounded-full mb-1.5" style={{ background: `${screen.color}40`, width: "60%" }} />
                  <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)", width: "80%" }} />
                </div>
                <div className="flex flex-col gap-1.5 px-3 w-full mt-8">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-6 rounded-lg" style={{ background: "rgba(255,255,255,0.05)", width: j === 2 ? "70%" : "90%" }} />
                  ))}
                </div>
                <div className="absolute bottom-4 left-3 right-3 flex gap-1.5">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="flex-1 h-5 rounded-lg" style={{ background: j === 1 ? `${screen.color}30` : "rgba(255,255,255,0.04)" }} />
                  ))}
                </div>
                <span className="absolute top-1/2 -translate-y-1/2 text-xs font-bold" style={{ color: screen.color }}>
                  <Smartphone size={i === 1 ? 28 : 20} />
                </span>
                {/* Screen label */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-2">
                  <span className="text-xs font-semibold" style={{ color: `${screen.color}CC` }}>
                    {screen.label}
                  </span>
                </div>
              </div>
            ))}
            {/* Download badge */}
            <div
              className="absolute -top-4 -right-4 px-3 py-2 rounded-2xl flex items-center gap-2"
              style={{
                background: "rgba(0,255,136,0.1)",
                border: "1px solid rgba(0,255,136,0.2)",
              }}
            >
              <Download size={14} style={{ color: "#00FF88" }} />
              <span className="text-xs font-bold" style={{ color: "#00FF88" }}>50K+ downloads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
