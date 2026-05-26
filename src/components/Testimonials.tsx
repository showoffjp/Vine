"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amara Diallo",
    location: "Dakar, Senegal",
    role: "Worship Leader",
    avatar: "#D4AF37",
    initials: "AD",
    stars: 5,
    text: "Vine is the first platform that actually gets the breadth of Christian life. I found a community for worship, resources for mental health, and daily devotionals — all in one place. It changed my mornings.",
  },
  {
    name: "Joshua Hernandez",
    location: "Houston, TX",
    role: "Youth Pastor",
    avatar: "#6B4FBB",
    initials: "JH",
    stars: 5,
    text: "I've tried every Christian app out there. None of them come close to what Vine is building. The discussions are real, raw, and respectful. This is what the church needs online.",
  },
  {
    name: "Grace Kim",
    location: "Seoul, South Korea",
    role: "Campus Ministry Leader",
    avatar: "#3A9E72",
    initials: "GK",
    stars: 5,
    text: "Being a Christian in a non-Christian culture can feel incredibly isolating. Vine connected me with believers across the globe who understand my exact situation. I feel less alone in my faith.",
  },
  {
    name: "Samuel Obi",
    location: "Lagos, Nigeria",
    role: "Bible Teacher",
    avatar: "#C0506A",
    initials: "SO",
    stars: 5,
    text: "The Bible tools and resource library are phenomenal. I've found commentaries, study guides, and original language tools that I previously had to pay for scattered across six different apps.",
  },
  {
    name: "Miriam Flores",
    location: "Medellín, Colombia",
    role: "Christian Therapist",
    avatar: "#4A80D4",
    initials: "MF",
    stars: 5,
    text: "As a therapist, the way Vine handles mental health content is remarkable — faithful and clinically sound at the same time. I recommend it to my clients regularly.",
  },
  {
    name: "Daniel Achterberg",
    location: "Amsterdam, Netherlands",
    role: "Seminary Student",
    avatar: "#E8A020",
    initials: "DA",
    stars: 5,
    text: "I came for the theology discussions and stayed for everything else. The apologetics community alone is worth the price of admission — and it's free. Remarkable.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="tag-pill inline-block mb-4">Community Voices</p>
          <h2
            className="text-4xl sm:text-5xl font-black leading-tight mb-4"
            style={{ color: "#F2F2F8" }}
          >
            Christians Around the World
            <br />
            <span className="gold-gradient">Are Already Home.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-glow p-6 rounded-2xl relative"
              style={{ background: "var(--bg-card)" }}
            >
              {/* Quote icon */}
              <Quote
                size={20}
                className="absolute top-5 right-5 opacity-20"
                style={{ color: "#D4AF37" }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star
                    key={si}
                    size={12}
                    fill="#D4AF37"
                    style={{ color: "#D4AF37" }}
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "#A0A0C0" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ background: t.avatar, color: "#fff" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#F2F2F8" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#6A6A88" }}>
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
