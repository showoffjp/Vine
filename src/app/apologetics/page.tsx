"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, ChevronRight, Lightbulb } from "lucide-react";

const tracks = [
  {
    icon: "🧬",
    title: "Science & Faith",
    description: "Does evolution disprove God? What about the Big Bang? Are science and Christianity actually at war?",
    color: "#3B82F6",
    articles: 84,
    featured: "The Fine-Tuning Argument: A Physicist's Case for God",
  },
  {
    icon: "📜",
    title: "Historical Reliability",
    description: "Is the Bible trustworthy? Did the resurrection actually happen? What do non-Christian sources say about Jesus?",
    color: "#D4AF37",
    articles: 127,
    featured: "NT Wright's Resurrection Case — A Summary",
  },
  {
    icon: "😢",
    title: "The Problem of Evil",
    description: "If God is good and all-powerful, why is there suffering? The hardest objection — and the best responses.",
    color: "#EF4444",
    articles: 62,
    featured: "Why the Problem of Evil Doesn't Win the Debate",
  },
  {
    icon: "🌍",
    title: "Exclusivity Claims",
    description: "How can Jesus be the only way? What about people who never heard the Gospel? Navigating religious pluralism.",
    color: "#10B981",
    articles: 45,
    featured: "Inclusive Exclusivism: A Better Way to Frame It",
  },
  {
    icon: "📖",
    title: "Biblical Contradictions",
    description: "Addressing the most common alleged contradictions — with honest scholarship, not hand-waving.",
    color: "#6B4FBB",
    articles: 93,
    featured: "The Top 10 'Contradictions' — Actually Examined",
  },
  {
    icon: "🤖",
    title: "AI, Ethics & God",
    description: "Is consciousness evidence for the soul? Does AI challenge Christian anthropology? The frontier questions.",
    color: "#F59E0B",
    articles: 28,
    featured: "Can an AI Have a Soul? A Biblical Anthropology",
  },
];

const thinkers = [
  { name: "C.S. Lewis", era: "1898–1963", work: "Mere Christianity, The Problem of Pain", icon: "📚", color: "#D4AF37" },
  { name: "Alvin Plantinga", era: "b. 1932", work: "Warranted Christian Belief, God, Freedom & Evil", icon: "🧠", color: "#6B4FBB" },
  { name: "N.T. Wright", era: "b. 1948", work: "The Resurrection of the Son of God, Simply Christian", icon: "✝️", color: "#10B981" },
  { name: "William Lane Craig", era: "b. 1949", work: "Reasonable Faith, The Kalam Cosmological Argument", icon: "⚛️", color: "#3B82F6" },
  { name: "Ravi Zacharias", era: "1946–2020", work: "Can Man Live Without God, Jesus Among Other Gods", icon: "🌏", color: "#EF4444" },
  { name: "Francis Collins", era: "b. 1950", work: "The Language of God", icon: "🧬", color: "#F59E0B" },
];

const commonObjections = [
  {
    objection: "\"Christians are anti-science.\"",
    response: "The founders of modern science — Copernicus, Galileo, Kepler, Newton, Faraday — were Christians. The Church founded the university system. Science and faith have a complicated but deeply intertwined history, not a war.",
    verse: "Proverbs 25:2",
  },
  {
    objection: "\"The Bible was written by men, not God.\"",
    response: "Christianity has always affirmed dual authorship — written by humans, inspired by God. The same objection applies to any historical document. The real question is whether the content is reliable — which is a historical question, not a theological one.",
    verse: "2 Timothy 3:16",
  },
  {
    objection: "\"A good God wouldn't send people to hell.\"",
    response: "The biblical picture of hell is fundamentally about separation from God — which is what many people choose in life. A God who forces everyone into heaven regardless of their choices isn't loving; he's coercive.",
    verse: "John 3:16-18",
  },
  {
    objection: "\"Religion is just for weak people who need a crutch.\"",
    response: "Accepting this framing concedes the premise. Christianity claims to be true — if it's true, the question of psychological benefit is secondary. And some of history's most intellectually rigorous people have been its adherents.",
    verse: "1 Corinthians 1:18-25",
  },
];

export default function ApologeticsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#07070F", color: "#F2F2F8" }}>
      <Navbar />
      <div className="page-body pb-20">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield size={22} style={{ color: "#D4AF37" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4AF37" }}>Apologetics</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              Always be prepared to{" "}
              <span style={{ background: "linear-gradient(135deg, #D4AF37, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                give an answer.
              </span>
            </h1>
            <p className="text-lg mb-6" style={{ color: "#6A6A88" }}>
              1 Peter 3:15 commands it. This is where we do the work — rigorously, honestly, and with grace. Christianity has nothing to fear from hard questions.
            </p>
            <blockquote
              className="p-5 rounded-2xl text-sm italic"
              style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", color: "#C8A84B" }}
            >
              &ldquo;Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect.&rdquo;
              <br /><span className="not-italic font-bold text-xs mt-1 block" style={{ color: "#8A6A20" }}>— 1 Peter 3:15</span>
            </blockquote>
          </div>
        </div>

        {/* Tracks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>Topic Tracks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((t) => (
              <div
                key={t.title}
                className="group rounded-2xl p-6 cursor-pointer transition-all"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${t.color}40`;
                  e.currentTarget.style.background = `${t.color}05`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <h3 className="font-black text-lg mb-2 group-hover:text-[#D4AF37] transition-colors" style={{ color: "#F2F2F8" }}>{t.title}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "#6A6A88" }}>{t.description}</p>
                <p className="text-xs mb-4 font-semibold" style={{ color: t.color }}>📌 {t.featured}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#4A4A68" }}>{t.articles} articles</span>
                  <span className="text-xs font-bold flex items-center gap-1" style={{ color: t.color }}>
                    Explore <ChevronRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Objections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#F2F2F8" }}>Quick Responses to Common Objections</h2>
          <p className="text-base mb-8" style={{ color: "#6A6A88" }}>Not final answers — starting points for deeper engagement.</p>
          <div className="space-y-4">
            {commonObjections.map((obj, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h3 className="font-bold text-base mb-3" style={{ color: "#EF4444" }}>{obj.objection}</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#8A8AA8" }}>{obj.response}</p>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(212,175,55,0.1)", color: "#D4AF37" }}>
                  📜 See also: {obj.verse}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Thinkers */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#F2F2F8" }}>Key Christian Thinkers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {thinkers.map((t) => (
              <div key={t.name} className="rounded-xl p-5 flex gap-4" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-3xl shrink-0">{t.icon}</span>
                <div>
                  <h3 className="font-bold text-base" style={{ color: "#F2F2F8" }}>{t.name}</h3>
                  <p className="text-xs mb-1" style={{ color: t.color }}>{t.era}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6A6A88" }}>{t.work}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Companion CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(107,79,187,0.06) 100%)", border: "1px solid rgba(59,130,246,0.15)" }}>
            <Lightbulb size={32} style={{ color: "#3B82F6" }} className="mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-3" style={{ color: "#F2F2F8" }}>Got a Hard Question?</h3>
            <p className="text-base mb-6 max-w-lg mx-auto" style={{ color: "#6A6A88" }}>
              The AI Bible Companion can walk through apologetics questions with you — grounded in Scripture and Christian philosophy.
            </p>
            <a href="/ai-companion" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-black" style={{ background: "linear-gradient(135deg, #D4AF37, #B8942C)" }}>
              Ask the AI Companion <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
