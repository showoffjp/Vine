"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SERIF = "var(--font-cormorant, Georgia, serif)";

type Tab = "overview" | "methods" | "sharing" | "videos";

interface Method {
  id: string;
  name: string;
  origin: string;
  color: string;
  summary: string;
  steps: { label: string; text: string; ref?: string }[];
  bestFor: string;
}

const METHODS: Method[] = [
  {
    id: "romans-road",
    name: "The Romans Road",
    origin: "A classic sequence of verses from Paul's letter to the Romans",
    color: GREEN,
    summary:
      "The Romans Road walks a person through the gospel using a chain of verses, all from a single book of the Bible. It is simple to memorize and lets Scripture itself do the talking — moving from the problem of sin to the gift of salvation and the call to respond.",
    steps: [
      { label: "All have sinned", text: "Everyone falls short of God's perfect standard. No one is righteous on their own.", ref: "Romans 3:23" },
      { label: "Sin earns death", text: "The wages of sin is death — but the free gift of God is eternal life in Christ Jesus.", ref: "Romans 6:23" },
      { label: "God's love proven", text: "While we were still sinners, Christ died for us. God acted first, in love.", ref: "Romans 5:8" },
      { label: "Confess and believe", text: "If you confess with your mouth that Jesus is Lord and believe in your heart that God raised Him from the dead, you will be saved.", ref: "Romans 10:9-10" },
      { label: "Call on the Lord", text: "Everyone who calls on the name of the Lord will be saved. The invitation is open to all.", ref: "Romans 10:13" },
    ],
    bestFor: "People who respect the Bible and want to see the gospel directly from Scripture.",
  },
  {
    id: "bridge",
    name: "The Bridge Illustration",
    origin: "Popularized by The Navigators",
    color: "#3B82F6",
    summary:
      "A drawing-based presentation. You sketch two cliffs separated by a chasm: humanity on one side, holy God on the other. Sin is the gulf between. Every human attempt to bridge it falls short — until the cross of Christ is drawn as the only bridge spanning the divide.",
    steps: [
      { label: "Two cliffs", text: "Draw humanity on one side and a holy God on the other, separated by a deep chasm.", ref: "Isaiah 59:2" },
      { label: "The chasm is sin", text: "Sin separates us from God, and the result is death. No good works can bridge the gap.", ref: "Romans 6:23" },
      { label: "Our failed bridges", text: "Religion, morality, money, effort — label them as attempts that fall short of reaching God.", ref: "Ephesians 2:8-9" },
      { label: "The cross bridges the gap", text: "Draw the cross across the chasm. Christ's death is the only way across to God.", ref: "1 Peter 3:18" },
      { label: "Cross over", text: "Invite the person to step across the bridge by trusting Christ and following Him.", ref: "John 5:24" },
    ],
    bestFor: "Visual learners and one-on-one conversations where you can draw on paper or a napkin.",
  },
  {
    id: "four-laws",
    name: "The Four Spiritual Laws",
    origin: "Bill Bright, Campus Crusade for Christ (Cru), 1965",
    color: PURPLE,
    summary:
      "A booklet-based presentation built on four 'laws,' beginning not with sin but with God's love and plan. It is positive in tone, clear in structure, and has introduced millions to Christ on campuses and around the world.",
    steps: [
      { label: "Law 1 — God's love", text: "God loves you and offers a wonderful plan for your life.", ref: "John 3:16; John 10:10" },
      { label: "Law 2 — Our sin", text: "Humanity is sinful and separated from God, so we cannot know His love and plan.", ref: "Romans 3:23; 6:23" },
      { label: "Law 3 — God's provision", text: "Jesus Christ is God's only provision for our sin. Through Him we can know God's love.", ref: "Romans 5:8; 1 Cor. 15:3-6" },
      { label: "Law 4 — Our response", text: "We must individually receive Jesus Christ as Savior and Lord to experience His love and plan.", ref: "John 1:12; Revelation 3:20" },
    ],
    bestFor: "Clear, structured conversations; works well with the printed booklet or a simple outline.",
  },
  {
    id: "two-ways",
    name: "Two Ways to Live",
    origin: "Matthias Media (Australia)",
    color: "#F59E0B",
    summary:
      "A six-point presentation that begins with God as loving Ruler and Creator, frames sin as rebellion against His rightful rule, and centers on the lordship of the risen Christ. It presents two ways to live: under our own rule, or under Christ's.",
    steps: [
      { label: "1. God the Ruler", text: "God is the loving Ruler and Creator of the world. He made us to live under His good rule.", ref: "Revelation 4:11" },
      { label: "2. Our rebellion", text: "We all reject God's rule by trying to run life our own way. This rebellion is sin.", ref: "Romans 3:10-12" },
      { label: "3. God's judgment", text: "God will not let rebellion go unchecked; the penalty is death and judgment.", ref: "Hebrews 9:27" },
      { label: "4. Jesus' death & resurrection", text: "In love, God sent His Son. Jesus died in our place and rose as the risen Lord.", ref: "1 Peter 3:18" },
      { label: "5. Two ways to live", text: "Keep rejecting God's rule, or submit to Jesus as Lord and receive forgiveness and life.", ref: "Romans 6:23" },
      { label: "6. The choice", text: "Which way will you live — your way, or God's way under the risen Jesus?", ref: "John 3:36" },
    ],
    bestFor: "People who need a clear framing of God's authority and the lordship of Christ.",
  },
  {
    id: "three-circles",
    name: "Three Circles",
    origin: "Life Conversation Guide (Jimmy Scroggins / NAMB)",
    color: "#14B8A6",
    summary:
      "A simple drawing of three circles — God's Design, Brokenness, and the Gospel — connected by arrows. It starts where people already are: the brokenness they feel in the world and their own lives, then traces the way back to God through Jesus.",
    steps: [
      { label: "God's design", text: "Draw a circle for God's good design — the way life was meant to be.", ref: "Genesis 1:31" },
      { label: "Brokenness", text: "We departed from God's design into sin and brokenness; this is the pain we all experience.", ref: "Romans 3:23" },
      { label: "Our failed fixes", text: "We try to escape brokenness our own way, but it only leads back into more brokenness.", ref: "Proverbs 14:12" },
      { label: "The gospel", text: "Jesus lived, died, and rose to rescue us. The arrow from brokenness leads to the gospel.", ref: "1 Corinthians 15:3-4" },
      { label: "Repent & believe", text: "Turn from sin (repent) and trust Jesus (believe), and you are restored to God's design — now and forever.", ref: "Mark 1:15" },
    ],
    bestFor: "Casual, conversational settings; meeting people in their felt brokenness.",
  },
  {
    id: "god-man-christ-response",
    name: "God – Man – Christ – Response",
    origin: "A simple four-word gospel framework",
    color: "#EF4444",
    summary:
      "Perhaps the simplest framework to remember — four words that capture the whole gospel storyline. If you forget every other method, you can always tell someone about God, Man, Christ, and their Response.",
    steps: [
      { label: "GOD", text: "God is holy, the Creator and rightful King, perfect in justice and overflowing in love.", ref: "1 John 1:5" },
      { label: "MAN", text: "We have all sinned and stand guilty before a holy God, deserving judgment and unable to save ourselves.", ref: "Romans 3:23" },
      { label: "CHRIST", text: "Jesus, fully God and fully man, lived sinlessly, died on the cross in our place, and rose again, defeating death.", ref: "1 Corinthians 15:3-4" },
      { label: "RESPONSE", text: "Repent of sin and trust Christ alone. Believe, confess Him as Lord, and follow Him.", ref: "Acts 16:31" },
    ],
    bestFor: "Anyone — the easiest framework to keep in your back pocket for unexpected conversations.",
  },
];

function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: GREEN,
        background: "rgba(58,125,86,0.08)",
        border: `1px solid ${BORDER}`,
        borderRadius: 999,
        padding: "6px 14px",
      }}
    >
      {children}
    </span>
  );
}

function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 18px",
        borderRadius: 999,
        border: `1px solid ${active ? GREEN : BORDER}`,
        background: active ? "rgba(58,125,86,0.1)" : CARD,
        color: active ? GREEN : MUTED,
        fontWeight: 600,
        fontSize: 14,
        cursor: "pointer",
        transition: "all 150ms",
      }}
    >
      {label}
    </button>
  );
}

export default function GospelPresentationPage() {
  const [tab, setTab] = useState<Tab>("overview");
  const [openMethod, setOpenMethod] = useState<string>(METHODS[0].id);

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>
        {/* Hero */}
        <header style={{ paddingTop: 120, paddingBottom: 36, textAlign: "center" }}>
          <HeroBadge>A Practical Evangelism Guide</HeroBadge>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.6rem, 6vw, 4.4rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              margin: "20px 0 14px",
              color: TEXT,
            }}
          >
            Sharing the Gospel
          </h1>
          <p
            style={{
              maxWidth: 740,
              margin: "0 auto",
              color: MUTED,
              fontSize: "1.1rem",
              lineHeight: 1.6,
            }}
          >
            The good news of Jesus Christ is the most important message in the world — and you can
            learn to share it clearly and graciously. Here are {METHODS.length} proven gospel presentations,
            practical tips for everyday conversations, gracious answers to common objections, and how
            to help someone take the step of faith.
          </p>
        </header>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          <TabButton active={tab === "overview"} label="Overview" onClick={() => setTab("overview")} />
          <TabButton active={tab === "methods"} label="Gospel Methods" onClick={() => setTab("methods")} />
          <TabButton active={tab === "sharing"} label="Sharing Your Faith" onClick={() => setTab("sharing")} />
          <TabButton active={tab === "videos"} label="Videos" onClick={() => setTab("videos")} />
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <section>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 18,
                padding: "32px 28px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", margin: "0 0 14px" }}>
                What Is the Gospel?
              </h2>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.05rem", margin: "0 0 14px" }}>
                The word &ldquo;gospel&rdquo; means &ldquo;good news.&rdquo; It is not advice about
                how to live a better life; it is an announcement of what God has already done in Jesus
                Christ. At its heart, the gospel is the message that the holy God who made us has,
                out of love, rescued sinful people through the death and resurrection of His Son — and
                calls everyone to turn to Him in repentance and faith.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.05rem", margin: 0 }}>
                Every faithful gospel presentation, whatever its shape, carries the same four
                movements. Learn these, and you can share the gospel with anyone, anywhere.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {[
                {
                  t: "God's Holiness",
                  c: GREEN,
                  d: "God is the holy, loving Creator and King. He is perfect in justice and goodness, and we were made to live in joyful relationship with Him.",
                  r: "1 John 1:5; Revelation 4:11",
                },
                {
                  t: "Human Sin",
                  c: "#F59E0B",
                  d: "We have all rebelled against God and fallen short of His glory. Sin separates us from God and brings judgment and death.",
                  r: "Romans 3:23; 6:23",
                },
                {
                  t: "Christ's Work",
                  c: PURPLE,
                  d: "Jesus, God's Son, lived a sinless life, died on the cross in our place to pay for sin, and rose bodily from the grave, defeating death.",
                  r: "1 Cor. 15:3-4; Romans 5:8",
                },
                {
                  t: "The Call",
                  c: "#3B82F6",
                  d: "God calls everyone to repent of sin and trust in Christ alone. All who believe and confess Him as Lord are forgiven and given eternal life.",
                  r: "Mark 1:15; Romans 10:9",
                },
              ].map((b) => (
                <div
                  key={b.t}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 16,
                    padding: 22,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 4,
                      borderRadius: 999,
                      background: b.c,
                      marginBottom: 14,
                    }}
                  />
                  <h3 style={{ fontFamily: SERIF, fontSize: "1.35rem", margin: "0 0 8px" }}>{b.t}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.6, fontSize: "0.95rem", margin: "0 0 10px" }}>
                    {b.d}
                  </p>
                  <div style={{ color: b.c, fontSize: 12, fontWeight: 600 }}>{b.r}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 18,
                padding: "28px",
              }}
            >
              <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", margin: "0 0 14px" }}>
                Why Share It At All?
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 12px" }}>
                Jesus gave His followers a clear commission: &ldquo;Go therefore and make disciples of
                all nations&rdquo; (Matthew 28:19). Sharing the gospel is not a task reserved for
                professionals — it is the joyful privilege of every believer. We share not to win
                arguments but because we genuinely love people and believe this news is true and
                life-giving.
              </p>
              <blockquote
                style={{
                  fontFamily: SERIF,
                  fontSize: "1.3rem",
                  fontStyle: "italic",
                  color: TEXT,
                  borderLeft: `3px solid ${GREEN}`,
                  paddingLeft: 18,
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                &ldquo;How then will they call on him in whom they have not believed? And how are they
                to believe in him of whom they have never heard?&rdquo;
                <span style={{ display: "block", fontSize: "0.9rem", color: GREEN, marginTop: 8, fontStyle: "normal" }}>
                  — Romans 10:14
                </span>
              </blockquote>
            </div>
          </section>
        )}

        {/* METHODS */}
        {tab === "methods" && (
          <section style={{ display: "grid", gap: 16 }}>
            <p
              style={{
                color: MUTED,
                textAlign: "center",
                maxWidth: 700,
                margin: "0 auto 8px",
                lineHeight: 1.6,
              }}
            >
              Six time-tested ways to present the gospel. They differ in starting point and style, but
              all carry the same good news. Tap any method to expand it.
            </p>
            {METHODS.map((m) => {
              const open = openMethod === m.id;
              return (
                <article
                  key={m.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${open ? m.color + "60" : BORDER}`,
                    borderRadius: 18,
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenMethod(open ? "" : m.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "22px 24px",
                      display: "flex",
                      gap: 14,
                      alignItems: "center",
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", margin: "0 0 2px", color: TEXT }}>
                        {m.name}
                      </h3>
                      <div style={{ color: m.color, fontSize: 13 }}>{m.origin}</div>
                    </div>
                    <span style={{ color: MUTED, fontSize: 22, flexShrink: 0 }}>{open ? "−" : "+"}</span>
                  </button>

                  {open && (
                    <div style={{ padding: "0 24px 26px" }}>
                      <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 20px" }}>{m.summary}</p>

                      <div style={{ display: "grid", gap: 10, marginBottom: 20 }}>
                        {m.steps.map((s, i) => (
                          <div
                            key={s.label}
                            style={{
                              display: "flex",
                              gap: 14,
                              alignItems: "flex-start",
                              background: `${m.color}0D`,
                              border: `1px solid ${m.color}26`,
                              borderRadius: 12,
                              padding: "14px 16px",
                            }}
                          >
                            <span
                              style={{
                                flexShrink: 0,
                                width: 28,
                                height: 28,
                                borderRadius: 8,
                                background: `${m.color}26`,
                                color: m.color,
                                fontWeight: 800,
                                fontSize: 13,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {i + 1}
                            </span>
                            <div>
                              <div style={{ color: TEXT, fontWeight: 600, marginBottom: 3 }}>
                                {s.label}
                                {s.ref && (
                                  <span style={{ color: m.color, fontWeight: 500, fontSize: 13, marginLeft: 8 }}>
                                    {s.ref}
                                  </span>
                                )}
                              </div>
                              <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.55 }}>{s.text}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div style={{ color: MUTED, fontSize: 14 }}>
                        <strong style={{ color: m.color }}>Best for:</strong> {m.bestFor}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </section>
        )}

        {/* SHARING YOUR FAITH */}
        {tab === "sharing" && (
          <section>
            {/* Practical tips */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 18,
                padding: "32px 28px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", margin: "0 0 18px" }}>
                Practical Tips for Sharing Your Faith
              </h2>
              <div style={{ display: "grid", gap: 14 }}>
                {[
                  ["Pray first", "Ask God to open doors and soften hearts — including your own. Conversion is His work, not yours."],
                  ["Build real relationships", "People are more open to the gospel from someone who genuinely loves and listens to them."],
                  ["Listen more than you speak", "Ask questions. Understand where someone is before you offer answers. Curiosity disarms."],
                  ["Share your own story", "Your testimony of what Christ has done for you is something no one can argue away."],
                  ["Keep it about Jesus", "The goal is not to win a debate but to point clearly to Christ and His finished work."],
                  ["Use the Bible", "God's Word carries its own power. Let people hear Scripture, not just your opinions."],
                  ["Be patient", "Most people come to faith over many conversations. You may plant, another waters, God gives growth."],
                  ["Trust the Holy Spirit", "You are responsible to share faithfully and lovingly — the results belong to God."],
                ].map(([t, d]) => (
                  <div key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: GREEN, fontWeight: 800, marginTop: 2 }}>›</span>
                    <span>
                      <strong style={{ color: TEXT }}>{t}.</strong>{" "}
                      <span style={{ color: MUTED }}>{d}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objections */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 18,
                padding: "32px 28px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", margin: "0 0 6px" }}>
                Common Objections & Gracious Responses
              </h2>
              <p style={{ color: MUTED, margin: "0 0 20px", lineHeight: 1.6 }}>
                Answer &ldquo;with gentleness and respect&rdquo; (1 Peter 3:15). These are starting
                points, not scripts — keep listening.
              </p>
              <div style={{ display: "grid", gap: 14 }}>
                {[
                  [
                    "“There's too much suffering for a good God to exist.”",
                    "It's a real and painful question. Christianity doesn't dismiss suffering — it says God entered into it. At the cross, God Himself suffered for us, and He promises to one day wipe away every tear. Can I share how Jesus meets us in pain?",
                  ],
                  [
                    "“All religions are basically the same.”",
                    "They actually make very different claims. What's unique about Jesus is that He claimed to be God and proved it by rising from the dead. Christianity isn't about us climbing to God by good works — it's about God coming down to rescue us.",
                  ],
                  [
                    "“I'm a good person; I don't need saving.”",
                    "Most of us are decent by human standards. But God's standard is perfection, and by that measure all of us fall short. The good news is that we don't have to earn it — Jesus offers forgiveness as a free gift.",
                  ],
                  [
                    "“The Bible is just a man-made book.”",
                    "That's worth examining honestly. The Bible has remarkable manuscript evidence, historical accuracy, and fulfilled prophecy. Would you be open to reading a Gospel like John together and seeing what you make of Jesus for yourself?",
                  ],
                  [
                    "“I could never live up to all the rules.”",
                    "Neither can any of us — and that's the point. Christianity isn't first about rules; it's about grace. We don't get right with God by performing; we're accepted because of what Jesus did, and obedience grows out of gratitude.",
                  ],
                  [
                    "“What about those who never hear about Jesus?”",
                    "That's a question I trust God to handle justly and mercifully — He is perfectly fair. But the more pressing question for you and me is: now that we have heard, how will we respond?",
                  ],
                ].map(([q, a]) => (
                  <div
                    key={q}
                    style={{
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      padding: "16px 18px",
                    }}
                  >
                    <div style={{ color: PURPLE, fontWeight: 600, marginBottom: 8, fontSize: "0.98rem" }}>
                      {q}
                    </div>
                    <div style={{ color: MUTED, lineHeight: 1.6, fontSize: "0.95rem" }}>{a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leading to Christ */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${GREEN}40`,
                borderRadius: 18,
                padding: "32px 28px",
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", margin: "0 0 14px" }}>
                How to Lead Someone to Christ
              </h2>
              <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 20px" }}>
                When someone is ready to respond, you don&apos;t need a magic formula — salvation
                comes through repentance and faith in Christ. Here is a simple way to help them take
                that step.
              </p>
              <div style={{ display: "grid", gap: 12 }}>
                {[
                  ["Make sure they understand", "Gently confirm they grasp the gospel — that they are a sinner, that Christ died and rose for them, and that salvation is a free gift received by faith."],
                  ["Ask if they're ready", "Don't pressure. Ask sincerely: 'Is this something you want to do today?' Let the Spirit, not you, do the convincing."],
                  ["Explain repentance and faith", "To turn from sin (repent) and to trust Jesus alone (believe) — receiving Him as both Savior and Lord."],
                  ["Pray with them", "Invite them to talk to God honestly — admitting sin, thanking Jesus for the cross, asking Him to save and lead them. The words can be their own."],
                  ["Encourage assurance", "Point them to God's promise: 'whoever believes' has eternal life (John 3:16). Salvation rests on Christ's finished work, not their feelings."],
                  ["Help them grow", "Connect them to a Bible-believing church, help them start reading Scripture and praying, and walk with them as a new believer."],
                ].map(([t, d], i) => (
                  <div key={t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: "rgba(58,125,86,0.15)",
                        color: GREEN,
                        fontWeight: 800,
                        fontSize: 13,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span>
                      <strong style={{ color: TEXT }}>{t}.</strong>{" "}
                      <span style={{ color: MUTED }}>{d}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 22,
                  background: "rgba(58,125,86,0.06)",
                  border: `1px solid ${GREEN}33`,
                  borderRadius: 12,
                  padding: "18px 20px",
                }}
              >
                <div style={{ color: GREEN, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
                  A Sample Prayer
                </div>
                <p style={{ fontFamily: SERIF, fontSize: "1.2rem", fontStyle: "italic", color: TEXT, lineHeight: 1.6, margin: 0 }}>
                  &ldquo;God, I know I am a sinner and need Your forgiveness. I believe Jesus died for
                  my sins and rose from the dead. I turn from my sin and trust in You. Jesus, be my
                  Savior and my Lord. Thank You for the gift of new life. Amen.&rdquo;
                </p>
              </div>
            </div>
          </section>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <section>
            <p
              style={{
                color: MUTED,
                textAlign: "center",
                maxWidth: 660,
                margin: "0 auto 28px",
                lineHeight: 1.6,
              }}
            >
              Watch the gospel explained and demonstrated — clear presentations and real-world
              encouragement for sharing your faith.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
              }}
            >
              {[
                { title: "The Gospel in 4 Minutes", videoId: "_-EZv8iLkVc" },
                { title: "The Three Circles Explained", videoId: "9Z6kU3xS0RY" },
                { title: "What Is the Gospel? (Explained)", videoId: "Anh3sG5lp5w" },
                { title: "How to Share Your Faith", videoId: "9Z6kU3xS0RY" },
              ].map((v) => (
                <div
                  key={v.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allowFullScreen
                  />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ fontFamily: SERIF, fontSize: "1.2rem", margin: 0 }}>{v.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
