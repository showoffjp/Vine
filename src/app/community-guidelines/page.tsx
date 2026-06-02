import type { Metadata } from "next";
import { CheckCircle, XCircle, AlertTriangle, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Guidelines — Vine",
  description: "The standards that make Vine a safe, edifying, and Christ-centered community.",
};

const doList = [
  "Speak truth in love — you can disagree without being disagreeable",
  "Cite Scripture when making theological claims",
  "Welcome Christians from all orthodox denominations",
  "Support those sharing struggles with grace and prayer",
  "Credit sources when sharing content created by others",
  "Report content that violates these guidelines using the three-dot menu",
  "Approach sensitive topics (mental health, abuse, grief) with extra care",
  "Build others up — edification is our purpose here",
];

const dontList = [
  "Personal attacks, name-calling, or mocking other users",
  "Hate speech targeting any group by race, nationality, gender, or background",
  "Explicit sexual content of any kind",
  "False or misleading information presented as fact",
  "Spamming, commercial solicitation, or MLM promotion",
  "Sharing another person's private information without consent",
  "Impersonating pastors, theologians, or other users",
  "Content that glorifies violence, abuse, or self-harm",
  "Heretical content that denies the core tenets of orthodox Christianity",
];

const enforcement = [
  {
    level: "Warning",
    color: "#F59E0B",
    icon: AlertTriangle,
    description: "First-time or minor violations receive a warning and a link to these guidelines. The content is removed.",
  },
  {
    level: "Temporary suspension",
    color: "#EF4444",
    icon: Shield,
    description: "Repeated violations or moderately serious first offenses result in a 7–30 day account suspension.",
  },
  {
    level: "Permanent ban",
    color: "#7F1D1D",
    icon: XCircle,
    description: "Severe violations (hate speech, explicit content, targeted harassment, abuse) result in immediate and permanent removal.",
  },
];

const theologyNote = `Vine is an orthodox Christian platform. We welcome believers from every denomination — Baptist, Catholic, Pentecostal, Reformed, Anglican, Orthodox, and more. Lively theological debate is healthy and encouraged. However, content that denies the divinity of Christ, the bodily resurrection, the authority of Scripture, or other core tenets of the Apostles' Creed falls outside our community standards and may be removed.`;

export default function CommunityGuidelinesPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <div className="pb-20" style={{ paddingTop: 40 }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#3a7d56" }}>
              Legal
            </span>
            <h1 className="text-4xl font-black mb-4" style={{ color: "#F2F2F8" }}>Community Guidelines</h1>
            <p className="text-base mb-6" style={{ color: "#6A6A88" }}>
              Last updated: May 26, 2026
            </p>
            <div
              className="p-5 rounded-2xl"
              style={{ background: "rgba(58,125,86,0.06)", border: "1px solid rgba(58,125,86,0.15)" }}
            >
              <p className="text-sm leading-relaxed italic" style={{ color: "#C0C0D8" }}>
                &ldquo;Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear.&rdquo; — Ephesians 4:29
              </p>
            </div>
          </div>

          {/* Foundation */}
          <div className="mb-10">
            <h2 className="text-2xl font-black mb-4" style={{ color: "#F2F2F8" }}>Our Foundation</h2>
            <p className="text-base leading-relaxed" style={{ color: "#8A8AA8" }}>
              Vine exists to be a place where Christians from 184 countries can grow together, sharpen one another, and spur each other toward love and good deeds. These guidelines aren&apos;t bureaucracy — they&apos;re the floor that makes meaningful community possible. We hold each other to a standard because we believe each other is worth it.
            </p>
          </div>

          {/* Do / Don't */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.15)" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle size={20} style={{ color: "#10B981" }} />
                <h2 className="text-xl font-black" style={{ color: "#10B981" }}>Do</h2>
              </div>
              <ul className="space-y-3">
                {doList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#C0C0D8" }}>
                    <span className="mt-0.5 shrink-0" style={{ color: "#10B981" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <XCircle size={20} style={{ color: "#EF4444" }} />
                <h2 className="text-xl font-black" style={{ color: "#EF4444" }}>Don&apos;t</h2>
              </div>
              <ul className="space-y-3">
                {dontList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#C0C0D8" }}>
                    <span className="mt-0.5 shrink-0" style={{ color: "#EF4444" }}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Theology note */}
          <div
            className="mb-10 p-6 rounded-2xl"
            style={{ background: "rgba(107,79,187,0.06)", border: "1px solid rgba(107,79,187,0.2)" }}
          >
            <h2 className="text-xl font-black mb-3" style={{ color: "#F2F2F8" }}>A Note on Theology</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#8A8AA8" }}>{theologyNote}</p>
          </div>

          {/* Enforcement */}
          <div className="mb-10">
            <h2 className="text-2xl font-black mb-6" style={{ color: "#F2F2F8" }}>Enforcement</h2>
            <div className="space-y-4">
              {enforcement.map((e) => {
                const Icon = e.icon;
                return (
                  <div
                    key={e.level}
                    className="flex items-start gap-4 p-5 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${e.color}25` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${e.color}15` }}
                    >
                      <Icon size={18} style={{ color: e.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1" style={{ color: e.color }}>{e.level}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#8A8AA8" }}>{e.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Appeals */}
          <div
            className="rounded-2xl p-6"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <h2 className="text-xl font-black mb-3" style={{ color: "#F2F2F8" }}>Appeals</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#8A8AA8" }}>
              If you believe content was removed or an account action was taken in error, you can appeal within 30 days. We review all appeals within 5 business days.
            </p>
            <a href="mailto:safety@vine.community" className="text-sm font-semibold" style={{ color: "#3a7d56" }}>
              safety@vine.community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
