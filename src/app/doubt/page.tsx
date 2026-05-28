"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const DOUBT_TYPES = [
  {
    id: "intellectual",
    name: "Intellectual Doubt",
    icon: "🧠",
    color: "#3B82F6",
    desc: "Questions about the truth of Christianity — does God exist, is the Bible reliable, did the resurrection happen?",
    response: "Intellectual doubt calls for intellectual engagement. Christianity has always attracted serious thinkers precisely because it makes claims that can be examined. Don't suppress questions — follow them. Read widely. Engage the strongest objections (not caricatures). Honest investigation of historical, philosophical, and scientific questions has led thousands away from skepticism and toward faith, not the reverse.",
    resources: ["C.S. Lewis — Mere Christianity", "N.T. Wright — The Resurrection of the Son of God", "Tim Keller — The Reason for God", "Alvin Plantinga — Where the Conflict Really Lies"],
  },
  {
    id: "emotional",
    name: "Emotional Doubt",
    icon: "💔",
    color: "#EF4444",
    desc: "Doubt triggered by suffering, loss, or unanswered prayer — 'How can God be good and allow this?'",
    response: "Emotional doubt is not fundamentally about evidence — it is about pain. Reasoning rarely resolves it in the moment. The appropriate response is lament (see Psalm 22, 88, Job) — bringing the full weight of grief to God rather than away from him. The cross is God's answer to suffering: not an explanation, but a presence. He did not stand apart from human agony; he entered it.",
    resources: ["C.S. Lewis — A Grief Observed", "Nicholas Wolterstorff — Lament for a Son", "Jerry Sittser — A Grace Disguised", "Psalms 22, 88, 42"],
  },
  {
    id: "moral",
    name: "Moral Doubt",
    icon: "⚖️",
    color: "#F59E0B",
    desc: "Doubt because Christianity's ethics seem wrong or harmful — especially on sexuality, exclusivity, or violence.",
    response: "Moral objections to Christianity often assume a moral framework to make them (which itself raises questions). But they must be taken seriously. Some are based on misunderstanding Scripture or church history. Others reveal genuine complexity that requires sustained engagement. Don't settle for shallow defenses. Distinguish between what Scripture actually teaches and how it has been misused. Trust that the God who commands love is not incoherent.",
    resources: ["Rebecca McLaughlin — Confronting Christianity", "Michael Bird — Seven Things I Wish Christians Knew About the Bible", "Preston Sprinkle — various works on ethics", "Francis Chan — Letters to the Church"],
  },
  {
    id: "spiritual",
    name: "Spiritual Dryness",
    icon: "🌵",
    color: "#10B981",
    desc: "God feels absent. Prayer feels empty. Faith feels mechanical or performative.",
    response: "Spiritual dryness is not the same as unbelief — it is the normal experience of the interior life. The mystics called it 'the dark night of the soul.' John of the Cross, Teresa of Avila, Mother Teresa (who experienced decades of it), and countless others describe seasons of felt absence. What matters is not feeling God's presence but remaining oriented toward him in practice. Continue praying even when it feels hollow. The feelings often return.",
    resources: ["John of the Cross — Dark Night of the Soul", "C.S. Lewis — The Screwtape Letters (Letter 8)", "Thomas à Kempis — The Imitation of Christ", "Brennan Manning — Ruthless Trust"],
  },
  {
    id: "community",
    name: "Church-Induced Doubt",
    icon: "🏛️",
    color: "#8B5CF6",
    desc: "Doubt triggered by harmful, hypocritical, or abusive religious communities and leaders.",
    response: "The failure of Christians is a real reason people leave — and a real scandal. It should not be minimized. But the argument 'Christians behave badly, therefore Christianity is false' is a non-sequitur: Jesus himself condemned religious hypocrisy more sharply than any critic. The question is not whether Christians have failed (they have) but whether Jesus is who he claimed to be. Evaluate the king, not the kingdom's worst citizens.",
    resources: ["Skye Jethani — With", "Eugene Peterson — A Long Obedience in the Same Direction", "Scot McKnight — A Church Called Tov", "Matthew 23 — Jesus on Religious Hypocrisy"],
  },
];

const DOUBTERS_IN_SCRIPTURE = [
  { name: "Thomas", ref: "John 20:24–29", desc: "Refused to believe without seeing. Jesus did not rebuke him — he showed him his hands. 'My Lord and my God.'" },
  { name: "John the Baptist", ref: "Matthew 11:2–6", desc: "In prison, sent disciples to ask: 'Are you the one, or should we expect someone else?' Jesus answered rather than condemned." },
  { name: "The Disciples in Galilee", ref: "Matthew 28:17", desc: "At the Great Commission moment — 'they worshiped him; but some doubted.' Doubt and worship coexisted in the same people in the same moment." },
  { name: "Job", ref: "Job 1–42", desc: "Questioned God's justice with raw honesty for 37 chapters. God called Job's speech 'right' and rebuked the friends who gave pious non-answers." },
  { name: "Habakkuk", ref: "Habakkuk 1:1–4", desc: "'How long, Lord, must I call for help, but you do not listen?' God engaged the question rather than dismissing it." },
  { name: "The Psalmists", ref: "Psalms 22, 42, 73, 88", desc: "God preserved honest cries of doubt within his inspired Word — an invitation for ours." },
];

const PRACTICES_FOR_DOUBT = [
  { title: "Keep Showing Up", desc: "Don't stop attending worship, prayer, or community while in doubt. Habit is more trustworthy than feeling when feeling has collapsed." },
  { title: "Journal the Questions", desc: "Get the doubts on paper. Vague doubt is more powerful than named doubt. Write the actual question you're afraid to ask." },
  { title: "Find a Trusted Guide", desc: "Don't doubt alone. A pastor, spiritual director, or mature mentor who won't be threatened by your questions is invaluable." },
  { title: "Engage Honest Thinkers", desc: "Read apologists, theologians, and doubters who've wrestled and emerged. Avoid both shallow reassurance and cynical deconstruction." },
  { title: "Distinguish Types", desc: "Is the doubt intellectual, emotional, or spiritual dryness? Each requires a different response. Misdiagnosing the problem leads to unhelpful remedies." },
  { title: "Hold the Tension", desc: "You don't have to resolve every question before you can follow. Faithful action in the face of unanswered questions is itself an act of trust." },
];

export default function DoubtPage() {
  const [activeTab, setActiveTab] = useState<"types" | "scripture" | "practices">("types");
  const [selectedType, setSelectedType] = useState("intellectual");

  const doubt = DOUBT_TYPES.find(d => d.id === selectedType)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>❓</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Doubt & Honest Faith</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Doubt is not the opposite of faith — certainty is not required for faithfulness. Some of the most honest people in Scripture doubted, and God met them there.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "types" as const, label: "Types of Doubt", icon: "🔍" },
            { id: "scripture" as const, label: "Doubters in Scripture", icon: "📜" },
            { id: "practices" as const, label: "Practices for Doubt", icon: "🛠️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "types" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
              {DOUBT_TYPES.map(d => (
                <button key={d.id} onClick={() => setSelectedType(d.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedType === d.id ? d.color : BORDER}`, background: selectedType === d.id ? `${d.color}18` : CARD, color: selectedType === d.id ? d.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "left" }}>
                  {d.icon} {d.name.replace(" Doubt", "").replace("Spiritual Dryness", "Spiritual Dry.").replace("Church-Induced Doubt", "Church-Induced")}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${doubt.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <span style={{ fontSize: 32 }}>{doubt.icon}</span>
                  <h2 style={{ color: doubt.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{doubt.name}</h2>
                </div>
                <p style={{ color: MUTED, fontSize: 14, fontStyle: "italic", marginBottom: 16, lineHeight: 1.6 }}>{doubt.desc}</p>
                <div style={{ background: `${doubt.color}10`, border: `1px solid ${doubt.color}25`, borderRadius: 10, padding: 18, marginBottom: 16 }}>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{doubt.response}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ color: doubt.color, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Recommended Reading</div>
                  {doubt.resources.map(r => (
                    <div key={r} style={{ background: BG, borderRadius: 8, padding: "8px 12px", color: TEXT, fontSize: 13 }}>📚 {r}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "scripture" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, margin: 0 }}>
                God included the doubts of his people in Scripture — not as cautionary tales of weak faith, but as honest testimony. The biblical portrait of faith is not serene certainty; it is trust that keeps returning to God even in confusion and pain.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {DOUBTERS_IN_SCRIPTURE.map(d => (
                <div key={d.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{d.name}</div>
                    <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700 }}>{d.ref}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, margin: 0 }}>
                Doubt is not a crisis to be escaped — it is often the doorway to a more honest, more durable faith. These practices don't eliminate questions; they keep you oriented toward God while you carry them.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES_FOR_DOUBT.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: GREEN, fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{p.title}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: 24, marginTop: 16 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 17, marginBottom: 10 }}>The Long View</h3>
              <p style={{ color: TEXT, lineHeight: 1.75, fontSize: 15, margin: 0 }}>
                Many who have contributed most to the church — C.S. Lewis (atheist to Anglican), Augustine (wayward to bishop), G.K. Chesterton, Francis Collins, Alvin Plantinga — passed through profound doubt on the way to mature faith. Doubt that is engaged rather than suppressed often produces a faith that is deeper, more compassionate, and more resilient than faith that has never been tested.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
