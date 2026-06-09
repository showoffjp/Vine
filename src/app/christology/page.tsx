"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { ChevronDown, ChevronUp, BookOpen, Star, AlertCircle, Check } from "lucide-react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const GOLD = "#D97706";
const RED = "#EF4444";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "divine", label: "Fully Divine" },
  { id: "human", label: "Fully Human" },
  { id: "chalcedon", label: "Chalcedon" },
  { id: "heresies", label: "Historic Heresies" },
  { id: "names", label: "Names & Titles" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const DIVINE_TEXTS = [
  { ref: "John 1:1", text: "In the beginning was the Word, and the Word was with God, and the Word was God.", note: "The prologue to John's Gospel begins with the pre-existence and full deity of the Logos." },
  { ref: "John 8:58", text: "Very truly I tell you, before Abraham was born, I am!", note: "Jesus applies God's covenant name (Exodus 3:14) to himself — the crowd's reaction (picking up stones) shows they understood the claim." },
  { ref: "John 10:30", text: "I and the Father are one.", note: "Again the crowd picks up stones to stone him for blasphemy — proving they understood him to claim equality with God." },
  { ref: "Colossians 1:15-17", text: "The Son is the image of the invisible God, the firstborn over all creation. For in him all things were created... He is before all things, and in him all things hold together.", note: "'Firstborn' = preeminent, not first created. He is the sustaining cause of the universe." },
  { ref: "Philippians 2:6", text: "Who, being in very nature God, did not consider equality with God something to be used to his own advantage.", note: "Paul assumes Jesus' divine nature and describes the kenosis — his voluntary self-limitation in the incarnation." },
  { ref: "Hebrews 1:3", text: "The Son is the radiance of God's glory and the exact representation of his being, sustaining all things by his powerful word.", note: "The Greek charakter means 'exact impression' — like a stamp is the exact image of its die." },
  { ref: "Titus 2:13", text: "...while we wait for the blessed hope — the appearing of the glory of our great God and Savior, Jesus Christ.", note: "Paul's direct identification of Jesus as 'our great God and Savior' — one of the clearest divine attributions in the NT." },
];

const HUMAN_TEXTS = [
  { ref: "John 1:14", text: "The Word became flesh and made his dwelling among us.", note: "The incarnation: the eternal Son took on genuine human flesh — not a disguise but real bodily existence." },
  { ref: "Luke 2:52", text: "And Jesus grew in wisdom and stature, and in favor with God and man.", note: "Jesus developed — mentally, physically, spiritually. Genuine human development, not divine omniscience in a body." },
  { ref: "John 11:35", text: "Jesus wept.", note: "The shortest verse — and one of the most theologically profound. He genuinely grieved at Lazarus's tomb." },
  { ref: "Hebrews 4:15", text: "For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are — yet he did not sin.", note: "Real temptation requires real humanity. If he wasn't fully human, his empathy is a performance." },
  { ref: "Matthew 26:38", text: "My soul is overwhelmed with sorrow to the point of death. Stay here and keep watch with me.", note: "In Gethsemane, Jesus' anguish is visceral and human — he needed human companionship in his darkest moment." },
  { ref: "Luke 23:46", text: "Father, into your hands I commit my spirit.", note: "He truly died — not appeared to die but actually surrendered his human life." },
];

const HERESY_LIST = [
  {
    name: "Docetism",
    era: "1st–2nd century",
    error: "Jesus only appeared to have a body — he was a spiritual being who seemed human.",
    response: "1 John 4:2 is written specifically against this: 'Every spirit that acknowledges that Jesus Christ has come in the flesh is from God.' Real incarnation, real body, real death.",
    color: RED,
  },
  {
    name: "Arianism",
    era: "3rd–4th century (Arius of Alexandria)",
    error: "Jesus is a created being — the first and greatest of God's creations, but not fully God. 'There was a time when he was not.'",
    response: "Condemned at Nicaea (325 AD). The council coined homoousios ('same substance') to affirm full deity. Athanasius spent his life defending this. Jehovah's Witnesses hold a modern form of Arianism.",
    color: GOLD,
  },
  {
    name: "Apollinarianism",
    era: "4th century (Apollinaris of Laodicea)",
    error: "Jesus had a human body and soul but his mind/spirit was replaced by the divine Logos — so he wasn't fully human.",
    response: "Condemned at Constantinople (381 AD). 'What is not assumed is not healed' (Gregory of Nazianzus) — if Jesus didn't take on a full human mind, he didn't redeem the human mind.",
    color: PURPLE,
  },
  {
    name: "Nestorianism",
    era: "5th century (Nestorius of Constantinople)",
    error: "Christ was two separate persons — a divine person and a human person — loosely united. Mary bore the human Jesus, not God.",
    response: "Condemned at Ephesus (431 AD). The Church affirmed that the two natures are united in one person — the divine Son — not two persons cooperating.",
    color: BLUE,
  },
  {
    name: "Eutychianism / Monophysitism",
    era: "5th century (Eutyches)",
    error: "After the incarnation, Jesus had only one nature — the divine absorbed the human, like a drop of honey in the ocean.",
    response: "Condemned at Chalcedon (451 AD). The two natures remain distinct, not blended. Jesus is fully God and fully man — not some third hybrid thing.",
    color: TEAL,
  },
  {
    name: "Adoptionism",
    era: "2nd–3rd century and later",
    error: "Jesus was a human who was 'adopted' as God's Son at his baptism (or resurrection) because of his moral excellence.",
    response: "Contradicts John 1:1-3, Colossians 1:15-17, and Hebrews 1 — all of which affirm pre-existence before the incarnation. He didn't become divine; he was always divine.",
    color: GREEN,
  },
];

const NAMES_LIST = [
  { name: "Son of God", significance: "His eternal relationship to the Father within the Trinity — not adoption but ontological sonship (John 1:18, Matt 3:17).", color: GOLD },
  { name: "Son of Man", significance: "Jesus's favorite self-designation — echoes Daniel 7:13-14 where the 'Son of Man' receives eternal dominion. It's a divine title, not merely a human one.", color: BLUE },
  { name: "Lord (Kyrios)", significance: "The Greek word for YHWH in the Septuagint. When the NT calls Jesus 'Lord,' it applies God's covenant name to him (Phil 2:11, Rom 10:9).", color: PURPLE },
  { name: "Messiah / Christ", significance: "'Anointed One' — the long-awaited king from David's line who would redeem Israel and the nations (John 1:41, Luke 4:18).", color: GREEN },
  { name: "Word (Logos)", significance: "John 1 uses the Greek philosophical concept of divine reason to say: the rational principle behind all creation is a person who took on flesh.", color: TEAL },
  { name: "I AM", significance: "Jesus uses absolute 'I am' statements 7 times in John (bread of life, light of the world, door, good shepherd, resurrection, way/truth/life, vine) — each echoes Exodus 3:14.", color: RED },
  { name: "Alpha and Omega", significance: "Revelation 1:8 and 22:13 — the first and last letters of the Greek alphabet, applied to God and to Jesus, signifying he encompasses all of existence.", color: GOLD },
  { name: "Lamb of God", significance: "John 1:29 — connecting Jesus to the Passover sacrifice, the Day of Atonement, and Isaiah 53's suffering servant. His death is a substitutionary sacrifice.", color: PURPLE },
];

const CHALCEDON_POINTS = [
  { label: "One Person", desc: "Jesus Christ is one undivided person — not two persons loosely connected, but a single personal identity who is the eternal Son of God.", color: GOLD },
  { label: "Two Natures", desc: "He is truly God and truly man — not a hybrid, not God pretending to be human, not a human elevated to divine status, but both fully.", color: BLUE },
  { label: "Without Confusion", desc: "The two natures are not mixed, blended, or fused into a third thing. Divine nature remains divine; human nature remains human.", color: GREEN },
  { label: "Without Change", desc: "Neither nature is transformed into the other. God does not become less God; Jesus's humanity is genuine and permanent.", color: TEAL },
  { label: "Without Division", desc: "The two natures cannot be separated — there is no 'Jesus acting as God' vs. 'Jesus acting as human.' He is always both.", color: PURPLE },
  { label: "Without Separation", desc: "The union of natures is permanent — even after the resurrection and ascension, Jesus retains his glorified humanity (1 Tim 2:5: 'one mediator, the man Christ Jesus').", color: RED },
];

const VIDEOS = [
  { videoId: "fLrEQcCSJdQ", title: "The Council of Chalcedon and the Two Natures of Christ" },
  { videoId: "mGgQ2d_3fU0", title: "What Did the Early Church Believe About Jesus?" },
  { videoId: "3n5HgBCxHLo", title: "N.T. Wright: Who Did Jesus Think He Was?" },
  { videoId: "AHVwMEVfVEc", title: "Christology: Why It Matters for Your Faith Today" },
];

export default function ChristologyPage() {
  const [tab, setTab] = useLocalStorage("vine_christology_tab", "overview");
  const [openHeresy, setOpenHeresy] = useLocalStorage("vine_christology_heresy", "");
  const [journal, setJournal] = useLocalStorage("vine_christology_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{ background: `${GOLD}20`, color: GOLD, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Systematic Theology</span>
            <span style={{ background: `${BLUE}20`, color: BLUE, border: `1px solid ${BLUE}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Christology</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>
            Christology: Who Is Jesus?
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 700 }}>
            The center of Christian faith is not a principle, a code, or a tradition — it is a person. Who is Jesus Christ? The church&apos;s answer, forged over five centuries of debate, is one of the most precise and counterintuitive doctrines in all of theology: fully God and fully man, in one person, forever.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: `1px solid ${tab === t.id ? GOLD : BORDER}`,
                background: tab === t.id ? `${GOLD}20` : "transparent",
                color: tab === t.id ? GOLD : MUTED,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Why Christology Is Everything</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>
                Christianity is not primarily a moral system, a community, or a set of religious practices — it is a claim about a person. If Jesus is not who the church says he is, everything collapses: the atonement has no infinite weight, the resurrection is just a resuscitation, and salvation is self-help with better branding.
              </p>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Conversely, if he is fully God and fully man — the eternal Son who took on human flesh, lived a perfect human life, died a real death, and rose bodily — then the gospel is the most astonishing news in history.
              </p>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 16 }}>The Orthodox Definition</div>
              <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 10, padding: "18px 22px", marginBottom: 16 }}>
                <blockquote style={{ margin: 0, fontStyle: "italic", fontSize: 15, lineHeight: 1.8, color: TEXT }}>
                  &ldquo;Jesus Christ is one person in two natures — fully divine and fully human — the two natures united without confusion, without change, without division, without separation.&rdquo;
                </blockquote>
                <div style={{ color: GOLD, fontSize: 12, marginTop: 8, fontWeight: 600 }}>Council of Chalcedon, 451 AD</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { label: "Pre-existent", icon: "∞", color: GOLD, desc: "The Son existed before the incarnation — 'before Abraham was born, I am' (John 8:58)" },
                  { label: "Incarnate", icon: "👶", color: BLUE, desc: "The eternal Son took on genuine human flesh — 'the Word became flesh' (John 1:14)" },
                  { label: "Truly Divine", icon: "✨", color: PURPLE, desc: "Full deity — not a demigod or elevated human but 'the exact representation of his being' (Heb 1:3)" },
                  { label: "Truly Human", icon: "🙏", color: GREEN, desc: "Full humanity — grew, wept, was tempted, suffered, died. 'Tempted in every way, as we are' (Heb 4:15)" },
                ].map((item, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
                      <span style={{ fontSize: 20 }}>{item.icon}</span>
                      <span style={{ color: item.color, fontWeight: 700, fontSize: 14 }}>{item.label}</span>
                    </div>
                    <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: BLUE, marginBottom: 8 }}>Why It Matters Practically</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "If Jesus is not fully God, his death cannot bear the infinite weight needed to atone for human sin.",
                  "If Jesus is not fully human, he cannot be our substitute — he must represent us as one of us.",
                  "If Jesus is not one person, there is no 'mediator between God and man' (1 Tim 2:5).",
                  "If Jesus's humanity was temporary (discarded after resurrection), we have no guarantee of bodily resurrection for ourselves.",
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <Check size={14} color={BLUE} style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "divine" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Fully Divine: The Biblical Case</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The New Testament is saturated with divine claims about Jesus. These are not marginal passages or disputed readings — they are foundational to every New Testament author.
            </p>
            {DIVINE_TEXTS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>{t.ref}</div>
                <blockquote style={{ margin: "0 0 10px", paddingLeft: 12, borderLeft: `3px solid ${GOLD}`, color: TEXT, fontStyle: "italic", fontSize: 14, lineHeight: 1.7 }}>
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, background: `${GOLD}10`, padding: "8px 12px", borderRadius: 8 }}>{t.note}</div>
              </div>
            ))}
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "18px 22px", marginTop: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: GOLD, marginBottom: 8 }}>The Explicit Worship Problem</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Jewish monotheism is fiercely protective of God&apos;s uniqueness — angels refuse worship in Revelation 19:10. Yet the New Testament records Jesus receiving worship without protest (Matt 28:9, John 20:28: &ldquo;My Lord and my God!&rdquo;), being prayed to (Acts 7:59-60), and being hymned alongside the Father (Phil 2:5-11). This is inexplicable unless his earliest followers genuinely believed he was divine.
              </p>
            </div>
          </div>
        )}

        {tab === "human" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Fully Human: Why It Matters</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The church fought just as hard for Jesus&apos;s full humanity as for his full divinity. The early heresy of Docetism (he only appeared human) was rejected not as a matter of squeamishness about the spiritual but because genuine human redemption requires a genuine human representative.
            </p>
            {HUMAN_TEXTS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ color: BLUE, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>{t.ref}</div>
                <blockquote style={{ margin: "0 0 10px", paddingLeft: 12, borderLeft: `3px solid ${BLUE}`, color: TEXT, fontStyle: "italic", fontSize: 14, lineHeight: 1.7 }}>
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, background: `${BLUE}10`, padding: "8px 12px", borderRadius: 8 }}>{t.note}</div>
              </div>
            ))}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: "18px 22px", marginTop: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: GREEN, marginBottom: 10 }}>The Theological Principle: &quot;What is not assumed is not healed&quot;</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Gregory of Nazianzus (4th century) articulated a principle that cuts through every Christological heresy: if Jesus didn&apos;t take on a full human nature — body, soul, mind, emotions — then that part of humanity wasn&apos;t redeemed. If he had only a human body but not a human mind, then the human mind is still unredeemed. The completeness of our redemption requires the completeness of his humanity.
              </p>
            </div>
          </div>
        )}

        {tab === "chalcedon" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Council of Chalcedon (451 AD)</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              After 150 years of Christological controversy — Nicaea (325), Constantinople (381), Ephesus (431) — the Council of Chalcedon produced the definitive orthodox definition of Christ&apos;s person. It holds today across Catholic, Orthodox, and most Protestant traditions.
            </p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 16 }}>The Six Affirmations</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {CHALCEDON_POINTS.map((pt, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${pt.color}30`, borderRadius: 10, padding: "14px 18px" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${pt.color}20`, border: `1px solid ${pt.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ color: pt.color, fontSize: 12, fontWeight: 700 }}>{i + 1}</span>
                      </div>
                      <div>
                        <div style={{ color: pt.color, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{pt.label}</div>
                        <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{pt.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: GOLD, marginBottom: 10 }}>The Mystery at the Center</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Chalcedon is often misread as a solution to the Christological problem. It isn&apos;t — it&apos;s a fence around a mystery. It tells us what we may not say (the four &quot;withouts&quot;) while acknowledging that the union of infinite divinity and finite humanity in one person exceeds our conceptual framework. The church is not embarrassed by this mystery; it is awed by it.
              </p>
            </div>
          </div>
        )}

        {tab === "heresies" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Historic Christological Heresies</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Every Christological heresy is a simplification — an attempt to make the mystery make sense by sacrificing one or both of Jesus&apos;s natures, or the unity of his person. Understanding them helps us understand why the orthodox definition says what it says.
            </p>
            {HERESY_LIST.map((heresy, i) => {
              const isOpen = openHeresy === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenHeresy(isOpen ? "" : String(i))}
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div>
                      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 2 }}>
                        <span style={{ color: heresy.color, fontWeight: 700, fontSize: 15 }}>{heresy.name}</span>
                        <span style={{ background: `${heresy.color}20`, color: heresy.color, fontSize: 11, padding: "2px 8px", borderRadius: 10, fontWeight: 600 }}>{heresy.era}</span>
                      </div>
                      {!isOpen && <div style={{ color: MUTED, fontSize: 13 }}>{heresy.error.substring(0, 70)}...</div>}
                    </div>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 20px" }}>
                      <div style={{ background: `${RED}15`, border: `1px solid ${RED}30`, borderRadius: 8, padding: "10px 14px", marginBottom: 10 }}>
                        <div style={{ color: RED, fontSize: 12, fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>The Error</div>
                        <div style={{ color: TEXT, fontSize: 14, lineHeight: 1.6 }}>{heresy.error}</div>
                      </div>
                      <div style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 8, padding: "10px 14px" }}>
                        <div style={{ color: GREEN, fontSize: 12, fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>Orthodox Response</div>
                        <div style={{ color: TEXT, fontSize: 14, lineHeight: 1.6 }}>{heresy.response}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <AlertCircle size={20} color={BLUE} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: BLUE, marginBottom: 6 }}>These Heresies Never Fully Died</div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    Jehovah&apos;s Witnesses hold a modern form of Arianism. Many charismatic preachers lean toward Docetism (a Jesus who is so divine he can&apos;t really suffer). Some progressive theology collapses into Adoptionism (Jesus became divine by virtue of his faithfulness). The ancient categories are alive and well — which is why the ancient councils still matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "names" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Names &amp; Titles of Jesus</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Each name and title of Jesus in Scripture carries a weight of meaning — rooted in Old Testament background, announcing his identity and mission, and forming the vocabulary of Christian worship.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {NAMES_LIST.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 12, padding: "16px 18px" }}>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{item.name}</div>
                  <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{item.significance}</div>
                </div>
              ))}
            </div>
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "18px 22px", marginTop: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: GOLD, marginBottom: 8 }}>The &quot;I AM&quot; Statements in John</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  { ref: "John 6:35", title: "Bread of Life", desc: "The source of spiritual sustenance" },
                  { ref: "John 8:12", title: "Light of the World", desc: "The source of truth and spiritual sight" },
                  { ref: "John 10:9", title: "The Door", desc: "The only entry point into salvation" },
                  { ref: "John 10:11", title: "The Good Shepherd", desc: "Echoes Psalm 23 — YHWH as shepherd" },
                  { ref: "John 11:25", title: "The Resurrection and the Life", desc: "Source of resurrection — not just proclaimer" },
                  { ref: "John 14:6", title: "The Way, Truth, and Life", desc: "Exclusive mediatorial claims" },
                  { ref: "John 15:1", title: "The True Vine", desc: "Israel as vine (Isa 5:1-7) — Jesus is the true Israel" },
                ].map((stmt, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                    <span style={{ color: GOLD, fontSize: 12, fontWeight: 600, flexShrink: 0, minWidth: 80 }}>{stmt.ref}</span>
                    <span style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{stmt.title}</span>
                    <span style={{ color: MUTED, fontSize: 13 }}>— {stmt.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Personal Reflection</div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <label style={{ display: "block", color: MUTED, fontSize: 13, marginBottom: 8 }}>
                Which aspect of Jesus&apos;s nature is harder for you to hold onto — his full divinity or his full humanity? Why do you think that is? How does it affect your prayer and relationship with him?
              </label>
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 160, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "12px 14px", resize: "vertical", outline: "none", fontFamily: "inherit", lineHeight: 1.6, boxSizing: "border-box" }}
              />
            </div>
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "16px 20px" }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: GOLD, marginBottom: 8 }}>Meditation</div>
              <blockquote style={{ margin: 0, fontStyle: "italic", color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
                &ldquo;The Son of God became the Son of Man so that the sons of men might become the sons of God.&rdquo;<br />
                <span style={{ fontSize: 12, marginTop: 6, display: "block" }}>— Attributed to Athanasius of Alexandria</span>
              </blockquote>
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Video Teaching</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {VIDEOS.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "10px 14px" }}>
                    <div style={{ color: TEXT, fontSize: 13, fontWeight: 600, lineHeight: 1.5 }}>{v.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${BORDER}` }}>
          <div style={{ color: MUTED, fontSize: 13, fontWeight: 600, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Related Topics</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Trinity", href: "/trinity" },
              { label: "Atonement Theories", href: "/atonement-theories" },
              { label: "Resurrection Evidence", href: "/resurrection-evidence" },
              { label: "Classic Heresies", href: "/classic-heresies" },
              { label: "Incarnation", href: "/incarnation" },
              { label: "Systematic Theology 101", href: "/systematic-theology-101" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "6px 14px", color: MUTED, fontSize: 13, textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
