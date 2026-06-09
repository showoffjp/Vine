"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";

const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const AMBER = "#F59E0B";
const RED = "#EF4444";
const MUTED = "#9898B3";
const TEXT = "#F2F2F8";

const TABS = ["overview", "distinction", "biblical", "practices", "yoga", "traditions", "journal", "videos"] as const;
type Tab = (typeof TABS)[number];

const KEY_DISTINCTIONS = [
  {
    category: "Object of Focus",
    secular: "Empty the mind; focus on breath, body sensations, or 'present moment' without content.",
    christian: "Fill the mind with God — his Word, character, presence. The goal is not emptiness but union with a personal God.",
    verse: "Psalm 1:2; Joshua 1:8; Philippians 4:8",
  },
  {
    category: "Purpose",
    secular: "Reduce stress, improve focus, enhance wellbeing, manage emotions. Primarily therapeutic.",
    christian: "Communion with God, transformation into Christ's likeness, love, obedience. Primarily relational and spiritual.",
    verse: "2 Corinthians 3:18; Colossians 3:1–4",
  },
  {
    category: "Anthropology (View of the Self)",
    secular: "Often rooted in Buddhist/Hindu frameworks where the self is an illusion to be dissolved or observed detachedly.",
    christian: "The self is a person made in God's image, redeemed by Christ, being restored. The goal is not dissolution of self but transformation of self.",
    verse: "Genesis 1:26–27; Galatians 2:20",
  },
  {
    category: "What 'Emptiness' Means",
    secular: "A mental state to cultivate — the cessation of thought and ego. This is the goal in Buddhist vipassana.",
    christian: "'Empty' of sin, self-will, and distraction — but immediately filled with God. John of the Cross's 'nada' leads to 'todo' (nothing to everything in God).",
    verse: "Ephesians 5:18; Romans 12:2",
  },
  {
    category: "The Role of the Body",
    secular: "The body is observed non-judgmentally; physical sensations are objects of mindful attention without attachment.",
    christian: "The body is the temple of the Holy Spirit; physical practices (breath prayer, prostration, silence) are means of expressing devotion, not ends in themselves.",
    verse: "1 Corinthians 6:19–20; Romans 12:1",
  },
];

const BIBLICAL_PRACTICES = [
  {
    practice: "Meditating on Scripture",
    verse: "Psalm 1:2; Joshua 1:8",
    desc: "The Hebrew 'meditate' (hagah) means to mutter, ponder, or ruminate — more like a cow chewing cud than emptying the mind. Reading a passage slowly, returning to a phrase, letting it sink in. The specific Christian form of meditation is Word-saturated.",
  },
  {
    practice: "Contemplative Prayer",
    verse: "Psalm 46:10; 1 Kings 19:12",
    desc: "Being quietly present to God without much verbal prayer. Centering prayer (Thomas Keating) and the Prayer of Quiet (Teresa of Ávila) are Christian contemplative forms. Some find these helpful; others (including many Reformed theologians) are cautious about their methods.",
  },
  {
    practice: "Breath Prayer",
    verse: "Romans 8:26; 1 Thessalonians 5:17",
    desc: "A very short prayer tied to the breath — inhaling: 'Lord Jesus Christ'; exhaling: 'have mercy on me.' Rooted in the Jesus Prayer from Eastern Orthodox hesychasm. The breath is not the focus; it is the vehicle for an appeal to God.",
  },
  {
    practice: "The Daily Examen",
    verse: "Lamentations 3:40; Psalm 139:23–24",
    desc: "Ignatius of Loyola's prayer of review at day's end — gratitude, petition, review of the day's movements, sorrow, resolution. Trains attention on God's presence through the day. Deeply incarnational: God is in the ordinary.",
  },
  {
    practice: "Lectio Divina",
    verse: "Deuteronomy 6:6–7",
    desc: "A four-movement reading of Scripture: Lectio (read), Meditatio (meditate), Oratio (pray), Contemplatio (rest in God's presence). Not rapid Scripture consumption but slow, receptive engagement. Monastic in origin, now widely practiced.",
  },
  {
    practice: "Sabbath and Stillness",
    verse: "Psalm 46:10; Exodus 20:8",
    desc: "The regular practice of stopping — ceasing work, agenda, productivity, and digital noise — to be available to God and others. Sabbath is not merely rest; it is a declaration that the world does not depend on our activity.",
  },
];

const YOGA_FAQ = [
  {
    q: "Can Christians do yoga for exercise?",
    a: "Many Christians practice yoga purely as a physical exercise discipline — using the stretches and breathing techniques without the philosophical framework. This is probably fine for most Christians, though it requires intentionality. Others prefer Christian alternatives (PraiseMoves, Holy Yoga) that use similar postures explicitly as Christian worship.",
  },
  {
    q: "What are the concerns about yoga's Hindu roots?",
    a: "Yoga in its traditional form is inseparable from Hindu philosophy — 'yoga' means 'union with Brahman (the divine).' The poses (asanas) are often associated with honoring Hindu deities. Some teachers argue the spiritual content cannot be separated from the physical; others teach yoga purely as exercise with no spiritual intent. Christians differ on whether the spiritual associations of the postures matter.",
  },
  {
    q: "What does 'namaste' mean and should Christians say it?",
    a: "'Namaste' roughly translates to 'the divine in me honors the divine in you' — reflecting a Hindu/pantheistic worldview that God is within all people indiscriminately. Many Christians decline to say it for this reason, though some reclaim it as acknowledging the image of God in others. The question is: what are you communicating and to whom?",
  },
  {
    q: "What are Christian alternatives to yoga?",
    a: "PraiseMoves (Laurette Willis) and Holy Yoga use yoga-style movement explicitly as Christian worship and Scripture meditation. They re-label the poses with Christian names and pair them with biblical meditation. For Christians who find the yoga associations problematic, these offer similar physical benefits in an explicitly Christian framework.",
  },
  {
    q: "What about secular mindfulness apps?",
    a: "Headspace, Calm, Insight Timer, and similar apps teach meditation from varying degrees of Buddhist/secular frameworks. Many Christians use them for stress reduction without engaging the underlying philosophy. The question is whether the practice shapes the practitioner's worldview over time — some Christians find these helpful; others find them subtly reorienting attention away from a personal God.",
  },
];

const TRADITIONS = [
  { name: "Desert Fathers and Mothers (3rd–5th c.)", body: "The first Christian contemplatives — anchorites and hermits in the Egyptian desert. Their Sayings (Apophthegmata) teach attention, stillness (hesychia), discernment of spirits, and the battle against logismoi (compulsive thoughts). They developed what would become Christian meditation." },
  { name: "Lectio Divina (Monastic)", body: "The Benedictine tradition developed a slow, prayerful approach to Scripture — not to extract information but to encounter God. Guigo II's 'The Ladder of Monks' (12th c.) formalized the four stages: lectio, meditatio, oratio, contemplatio." },
  { name: "Hesychasm (Eastern Orthodox)", body: "The Eastern Orthodox tradition of 'stillness' (hesychia) — continuous prayer (Philokalia; The Way of a Pilgrim; the Jesus Prayer). The goal is theosis — transformation into the likeness of God through continuous prayer and the grace of the Holy Spirit." },
  { name: "Spanish Mystics (16th c.)", body: "Teresa of Ávila's 'Interior Castle' and John of the Cross's 'Dark Night of the Soul' describe the stages of contemplative prayer from active meditation to passive infused contemplation. These classics are cautious, experiential, and Christ-centered." },
  { name: "Ignatian Spirituality (16th c.)", body: "Ignatius's Spiritual Exercises use imagination — placing oneself in Gospel scenes — to encounter Christ personally. Not emptying but filling the imagination with Scripture and allowing it to reform the will." },
  { name: "Quaker Silence (17th c.)", body: "Corporate silent waiting on God — the Spirit moves when words cease. Not Buddhist emptiness but attentive expectancy. The Quaker meeting in silence is oriented toward a personal, speaking God." },
];

const VIDEOS = [
  { id: "f0Wkg7blBEk", title: "Christian Meditation vs. Mindfulness — What's the Difference?" },
  { id: "LBiHkFOmfCI", title: "Can Christians Do Yoga? — A Balanced Christian Response" },
  { id: "Yj1IVFBs9oU", title: "The Ancient Practice of Lectio Divina" },
  { id: "mq0oarbiV4w", title: "Hesychasm and the Jesus Prayer — Orthodox Prayer" },
];

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

export default function ChristianMindfulnessPage() {
  const [tab, setTab] = useLocalStorage("vine_mindful_tab", "overview");
  const [expandedDist, setExpandedDist] = useLocalStorage("vine_mindful_dist", "");
  const [expandedYoga, setExpandedYoga] = useLocalStorage("vine_mindful_yoga", "");
  const [journalPractice, setJournalPractice] = useLocalStorage("vine_mindful_practice", "");
  const [journalConcern, setJournalConcern] = useLocalStorage("vine_mindful_concern", "");

  return (
    <div style={{ minHeight: "100vh", background: "#07070F", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <Link href="/dashboard" style={{ color: MUTED, display: "flex", alignItems: "center" }}>
          <ArrowLeft size={18} />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: TEAL + "22", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={18} color={TEAL} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Christian Mindfulness & Meditation</div>
            <div style={{ color: MUTED, fontSize: 12 }}>Biblical meditation, contemplative prayer, yoga, and mindfulness apps</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "0 20px", display: "flex", gap: 2, overflowX: "auto" }}>
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "12px 10px", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${TEAL}` : "2px solid transparent", color: tab === t ? TEXT : MUTED, fontWeight: tab === t ? 600 : 400, fontSize: 12, cursor: "pointer", whiteSpace: "nowrap", textTransform: "capitalize" }}>
            {t}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: 720, margin: "0 auto" }}>

        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>The Common Questions</h2>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Secular mindfulness (MBSR, apps like Headspace, Calm) and yoga are everywhere. Many Christians want their mental health benefits but aren't sure if they're compatible with faith. This page helps you navigate: what the Bible says about meditation, how Christian meditation differs, ancient Christian contemplative practices, and the specific questions about yoga.
            </p>
            <div style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16, marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>What This Page Covers</div>
              {[
                "How Christian meditation differs from Buddhist/secular mindfulness",
                "What the Bible actually says about meditation (it's not what you might think)",
                "Ancient Christian contemplative practices and their history",
                "Yoga: can Christians do it? The honest nuances",
                "Christian alternatives to secular mindfulness apps",
              ].map((q, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 13, color: MUTED }}>{q}</span>
                </div>
              ))}
            </div>
            <div style={{ background: GREEN + "11", border: `1px solid ${GREEN}44`, borderRadius: 10, padding: 14 }}>
              <p style={{ fontSize: 12, color: "#D1FAE5", margin: 0 }}>
                <strong>Key takeaway:</strong> Christianity has its own rich contemplative tradition 2,000+ years old. You don't need to borrow secular or Eastern practices. But if you do use them, understanding the distinctions helps you engage wisely.
              </p>
            </div>
          </div>
        )}

        {tab === "distinction" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>How They Differ</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Tap each category for a detailed comparison.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {KEY_DISTINCTIONS.map((d) => {
                const isOpen = expandedDist === d.category;
                return (
                  <div key={d.category} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <button onClick={() => setExpandedDist(isOpen ? "" : d.category)} style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT }}>
                      <span style={{ fontWeight: 600, fontSize: 14 }}>{d.category}</span>
                      {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
                        <div style={{ background: "#7C3AED11", borderLeft: `3px solid #7C3AED`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: "#A78BFA", fontSize: 11, fontWeight: 700, marginBottom: 4 }}>SECULAR MINDFULNESS</div>
                          <p style={{ fontSize: 12, color: "#DDD6FE", margin: 0 }}>{d.secular}</p>
                        </div>
                        <div style={{ background: TEAL + "11", borderLeft: `3px solid ${TEAL}`, padding: "8px 12px", borderRadius: "0 6px 6px 0" }}>
                          <div style={{ color: TEAL, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>CHRISTIAN MEDITATION</div>
                          <p style={{ fontSize: 12, color: "#CCFBF1", margin: 0 }}>{d.christian}</p>
                        </div>
                        <div style={{ background: GREEN + "11", borderLeft: `3px solid ${GREEN}`, padding: "4px 8px", borderRadius: "0 4px 4px 0" }}>
                          <span style={{ color: GREEN, fontSize: 11 }}>{d.verse}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "biblical" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Biblical Contemplative Practices</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>The Bible commends — and commands — various forms of meditative practice.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {BIBLICAL_PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${TEAL}33`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{p.practice}</div>
                  <div style={{ color: TEAL, fontSize: 11, fontWeight: 600, marginBottom: 8 }}>{p.verse}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>A Practical Beginner's Guide</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>How to start a contemplative practice that is deeply Christian.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { step: 1, title: "Start with Scripture", body: "Choose a short passage (3–5 verses). Read slowly — not to extract information but to let the words land. Read again. What phrase stays with you? Sit with that. This is the heart of lectio divina and much of biblical meditation." },
                { step: 2, title: "Use a Simple Prayer Phrase", body: "The Jesus Prayer: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner.' Say it slowly, tied to your breathing if helpful. This is not a mantra to empty the mind; it is a continuous appeal to a person. It requires you to know who Jesus is." },
                { step: 3, title: "Practice Silence Before God", body: "Sit quietly for 10–15 minutes with the intention of being present to God — not because silence is intrinsically divine, but because you are turning your attention toward him. This is the Prayer of Quiet. If thoughts arise, don't chase them; return your attention to God." },
                { step: 4, title: "Practice the Daily Examen", body: "At day's end, spend 10 minutes reviewing the day with God. Where did you feel most alive? Where did you move away from God? Give thanks. Ask for forgiveness. Ask for grace tomorrow. This is a practice of sustained attention over time." },
                { step: 5, title: "Build It into a Rhythm", body: "Consistency matters more than length. Five minutes daily is more transformative than an hour once a week. The goal is habitual orientation toward God — making him the default direction of attention." },
              ].map((s) => (
                <div key={s.step} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16, display: "flex", gap: 14 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: GREEN + "22", border: `2px solid ${GREEN}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: GREEN, fontWeight: 700, fontSize: 14 }}>{s.step}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{s.title}</div>
                    <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "yoga" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Yoga: Common Questions</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              This is a genuine area of Christian liberty and conscience. We present the nuances honestly — not a simple yes or no.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {YOGA_FAQ.map((faq) => {
                const isOpen = expandedYoga === faq.q;
                return (
                  <div key={faq.q} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <button onClick={() => setExpandedYoga(isOpen ? "" : faq.q)} style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: TEXT, textAlign: "left", gap: 8 }}>
                      <span style={{ fontWeight: 600, fontSize: 13 }}>{faq.q}</span>
                      {isOpen ? <ChevronUp size={16} color={MUTED} style={{ flexShrink: 0 }} /> : <ChevronDown size={16} color={MUTED} style={{ flexShrink: 0 }} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 16px 14px" }}>
                        <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: 16, background: AMBER + "11", border: `1px solid ${AMBER}33`, borderRadius: 10, padding: 14 }}>
              <p style={{ fontSize: 12, color: "#FDE68A", margin: 0 }}>
                <strong>Romans 14 principle:</strong> This is an area of Christian conscience. Paul's guidance for disputed matters: act from faith, don't violate your conscience, don't cause weaker believers to stumble, don't judge those who make different choices, and in all things do what you do to the glory of God (1 Cor 10:31).
              </p>
            </div>
          </div>
        )}

        {tab === "traditions" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Ancient Christian Contemplative Traditions</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>
              Before secular mindfulness existed, Christians had rich contemplative practice. You don't need to look outside the tradition.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {TRADITIONS.map((t, i) => (
                <div key={i} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, padding: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: PURPLE, marginBottom: 8 }}>{t.name}</div>
                  <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Personal Reflection</h2>
            <p style={{ color: MUTED, fontSize: 13, marginBottom: 20 }}>Saved to your device only.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>What contemplative or mindfulness practices have you tried? What drew you to them?</label>
                <textarea value={journalPractice} onChange={(e) => setJournalPractice(e.target.value)} placeholder="I've tried yoga / Headspace / lectio divina / the Jesus Prayer because… I noticed…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: MUTED, display: "block", marginBottom: 6 }}>What concerns or questions do you have about mindfulness or yoga as a Christian?</label>
                <textarea value={journalConcern} onChange={(e) => setJournalConcern(e.target.value)} placeholder="I'm not sure if… I've felt guilty about… I wonder whether…" rows={4} style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: 12, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              {(journalPractice || journalConcern) && (
                <p style={{ fontSize: 11, color: MUTED, textAlign: "center" }}>Saved automatically to your device.</p>
              )}
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Video Teaching</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {VIDEOS.map((v) => (
                <div key={v.id} style={{ background: CARD, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <div style={{ padding: "10px 14px" }}>
                    <p style={{ fontSize: 13, fontWeight: 600, margin: 0 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related */}
      <div style={{ padding: "0 20px 32px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 16 }}>
          <p style={{ fontSize: 12, color: MUTED, marginBottom: 10 }}>Related Topics</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "The Ignatian Examen", href: "/ignatian-examen" },
              { label: "Lectio Divina", href: "/lectio-divina" },
              { label: "Prayer Life", href: "/prayer-life" },
              { label: "Digital Detox", href: "/digital-detox-faith" },
              { label: "Spiritual Formation", href: "/spiritual-formation" },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 12px", fontSize: 12, color: MUTED }}>
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
