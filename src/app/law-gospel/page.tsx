"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { ChevronDown, ChevronUp, BookOpen, AlertCircle, Check } from "lucide-react";

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
  { id: "law", label: "The Law" },
  { id: "gospel", label: "The Gospel" },
  { id: "uses", label: "Three Uses" },
  { id: "confusion", label: "Confusing Them" },
  { id: "traditions", label: "Lutheran vs. Reformed" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const THREE_USES = [
  {
    number: "1",
    name: "Civil / Curbing Use",
    latin: "Usus Politicus / Civilis",
    color: BLUE,
    desc: "The law restrains sin in society through external coercion — the threat of punishment. Even unregenerate people are kept from the worst excesses of human depravity by the law's civil function. This use applies to all people, not just Christians.",
    texts: ["Romans 13:3-4 — the governing authority as God's servant to execute wrath", "1 Timothy 1:9 — 'the law is made not for the righteous but for lawbreakers'"],
    lutheran: "Primary for Luther in civil society",
    reformed: "Accepted by both traditions",
  },
  {
    number: "2",
    name: "Convicting / Mirror Use",
    latin: "Usus Theologicus / Elenchticus",
    color: RED,
    desc: "The law reveals sin and drives sinners to Christ. Luther called this the law's 'proper work' — it shows us what we are and what we have done, creating the despair that makes grace welcome. The law kills so that the gospel can give life.",
    texts: ["Romans 3:20 — 'through the law we become conscious of our sin'", "Galatians 3:24 — 'the law was our guardian/tutor until Christ'", "Romans 7:7 — 'I would not have known what sin was had it not been for the law'"],
    lutheran: "The most important use for Luther — the law's proper theological function",
    reformed: "Accepted, but Calvin emphasized the third use more than Luther",
  },
  {
    number: "3",
    name: "Guiding / Normative Use",
    latin: "Usus Didacticus / Normativus",
    color: GREEN,
    desc: "For the regenerate Christian, the law serves as a guide for the grateful life — showing how love for God and neighbor is expressed in concrete terms. This is the third use: not for justification or conviction (those are already accomplished) but for sanctification.",
    texts: ["Psalm 119:9 — 'How can a young person stay on the path of purity? By living according to your word'", "Romans 8:4 — 'the righteous requirement of the law might be fully met in us'"],
    lutheran: "Controversial — some Lutherans deny the third use; others accept it",
    reformed: "Calvin emphasized this; the Heidelberg Catechism structures the third part around the Ten Commandments",
  },
];

const CONFUSIONS = [
  {
    title: "Treating the gospel as law",
    color: RED,
    desc: "Presenting Christian discipleship as a new set of requirements to meet before God accepts you. 'God loves you IF you pray enough, serve enough, believe hard enough.' This is moralism — law without the gospel's unconditional grace. It produces either despair (when you fail) or pride (when you think you've succeeded).",
    symptoms: ["Guilt-driven ministry: 'you should be doing more'", "Conditional acceptance in church culture", "The nagging feeling that you need to earn back God's favor after sin"],
  },
  {
    title: "Treating the law as gospel",
    color: GOLD,
    desc: "Using the gospel's grace as a license for lawlessness — 'since God forgives everything, it doesn't matter how I live.' Paul explicitly addresses this in Romans 6: 'Shall we go on sinning so that grace may increase? By no means!' The gospel is not a permission slip; it is a power that transforms.",
    symptoms: ["Antinomianism: 'now that I'm saved, the rules don't apply'", "Using grace to avoid repentance", "No expectation of transformation or growth in Christian life"],
  },
  {
    title: "Preaching the law without the gospel",
    color: PURPLE,
    desc: "Preaching that convicts of sin but never proclaims the remedy. People leave convicted and guilty but with no news of what God has done about it. Law-only preaching produces either resignation or legalistic self-improvement efforts.",
    symptoms: ["Sermons that diagnose the problem but don't announce the solution", "Churches where people feel condemned but not loved", "Moral improvement taught without regeneration as its basis"],
  },
  {
    title: "Preaching the gospel without the law",
    color: BLUE,
    desc: "Skipping the bad news to get to the good news — but people don't hear the good news unless they know they need it. 'God has a wonderful plan for your life' means nothing to someone who doesn't know their life is in jeopardy. The law prepares the soil for the gospel seed.",
    symptoms: ["Easy-believism: 'just say this prayer'", "Conversions with no repentance", "Christians with no sense of sin and therefore no sense of grace"],
  },
];

const VIDEOS = [
  { videoId: "q0sPHGKbzXM", title: "Law and Gospel: The Key to Lutheran Theology" },
  { videoId: "yVvRlVBqUH8", title: "Why the Distinction Between Law and Gospel Matters" },
  { videoId: "YfRqKxD1VH4", title: "The Third Use of the Law: Reformed vs. Lutheran" },
  { videoId: "M1bFGXyQWlE", title: "Michael Horton: Law and Gospel in the Christian Life" },
];

export default function LawGospelPage() {
  const [tab, setTab] = useLocalStorage("vine_lawgos_tab", "overview");
  const [openUse, setOpenUse] = useLocalStorage("vine_lawgos_use", "");
  const [openConf, setOpenConf] = useLocalStorage("vine_lawgos_conf", "");
  const [journal, setJournal] = useLocalStorage("vine_lawgos_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{ background: `${GOLD}20`, color: GOLD, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Systematic Theology</span>
            <span style={{ background: `${BLUE}20`, color: BLUE, border: `1px solid ${BLUE}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Reformation Heritage</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>
            Law and Gospel
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 700 }}>
            Luther called the distinction between law and gospel &ldquo;the highest art in Christendom.&rdquo; Confuse them and you either produce despairing legalists or complacent antinomians. Get it right and you understand why the gospel is genuinely good news — and why it transforms what the law never could.
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
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 12 }}>The Core Distinction</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ background: BG, border: `1px solid ${RED}30`, borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ color: RED, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>The Law</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: "0 0 8px" }}>Tells us what we ought to do and what we have failed to do. Commands and condemns. Diagnoses the disease. Has no power to give what it demands — it shows the standard but cannot produce conformity to it.</p>
                  <div style={{ color: RED, fontSize: 12, fontWeight: 600 }}>&ldquo;Do this and live&rdquo; (Lev 18:5)</div>
                </div>
                <div style={{ background: BG, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>The Gospel</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: "0 0 8px" }}>Tells us what God has done for us in Christ. Announces and gives. Provides the cure. The gospel is not advice but news — not &ldquo;here is what you must do&rdquo; but &ldquo;here is what has been done for you.&rdquo;</p>
                  <div style={{ color: GREEN, fontSize: 12, fontWeight: 600 }}>&ldquo;It is finished&rdquo; (John 19:30)</div>
                </div>
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Luther&apos;s Formulation</div>
              <blockquote style={{ margin: "0 0 12px", paddingLeft: 14, borderLeft: `3px solid ${GOLD}`, fontStyle: "italic", color: TEXT, fontSize: 14, lineHeight: 1.7 }}>
                &ldquo;The law says, &apos;do this,&apos; and it is never done. Grace says, &apos;believe in this,&apos; and everything is already done.&rdquo;
              </blockquote>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Luther discovered this distinction in his Romans study as the key to unlocking Paul. The medieval church had collapsed the categories — making the gospel another law, another set of requirements to be met. Luther saw that this was not the gospel at all. The gospel is news from outside us, not a demand placed upon us.
              </p>
            </div>

            <div style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: BLUE, marginBottom: 8 }}>Key Texts</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { ref: "Romans 3:20-22", text: "Through the law we become conscious of our sin. But now apart from the law the righteousness of God has been made known." },
                  { ref: "Galatians 3:10-11", text: "All who rely on the works of the law are under a curse... Clearly no one who relies on the law is justified before God." },
                  { ref: "Romans 10:4", text: "Christ is the culmination of the law so that there may be righteousness for everyone who believes." },
                  { ref: "2 Corinthians 3:6", text: "The letter kills, but the Spirit gives life." },
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: BLUE, fontWeight: 700, fontSize: 12, flexShrink: 0, minWidth: 80 }}>{t.ref}</span>
                    <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "law" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Law</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              &ldquo;The law&rdquo; in Paul&apos;s writings refers primarily to the Mosaic law, but the principle extends to God&apos;s moral demand in any form — including the law written on the heart (Romans 2:14-15). The law is holy, righteous, and good (Romans 7:12) — but it cannot save.
            </p>
            {[
              { title: "The Law is Holy and Good", color: GOLD, text: "The problem with the law is not the law — it is us. Romans 7:12: 'the law is holy, and the commandment is holy, righteous and good.' The law accurately reflects God's character. Our inability to keep it is our problem, not the law's." },
              { title: "The Law Reveals Sin", color: RED, text: "Romans 3:20: 'through the law we become conscious of sin.' The law is a mirror — it shows us what we are. It cannot make us what we should be, but it shows us the gap between who we are and who God requires us to be." },
              { title: "The Law Cannot Justify", color: PURPLE, text: "Galatians 2:16: 'No one is justified by the works of the law.' Even if someone kept the law perfectly (no one has, except Christ), the law is the standard of righteousness, not its source. Righteousness before God must be received, not achieved." },
              { title: "The Law Has Been Fulfilled in Christ", color: GREEN, text: "Matthew 5:17: 'I have not come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them.' Jesus both perfectly kept the law's demands and bore its curse (Gal 3:13). The law's purpose has been achieved in him." },
              { title: "The Law Remains for Guidance", color: BLUE, text: "Romans 8:4: 'the righteous requirement of the law might be fully met in us, who do not live according to the flesh but according to the Spirit.' For the regenerate, the law's moral content guides the grateful life — no longer as a condition of standing but as a description of love." },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ color: item.color, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{item.title}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "gospel" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Gospel</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The gospel (euangelion — good news) is not an improved morality, a new set of requirements, or good advice about spiritual practices. It is the announcement of what God has done in Christ to accomplish what the law could not — the redemption of sinners.
            </p>
            {[
              { title: "The Gospel is News, Not Advice", color: GREEN, text: "The law says 'do this.' The gospel says 'this has been done.' The distinction is crucial: advice is about what you must accomplish; news is about what has already happened. The gospel is historical announcement — Christ died, was buried, and was raised (1 Cor 15:3-4)." },
              { title: "The Gospel Provides What the Law Demands", color: BLUE, text: "The law requires perfect righteousness. The gospel provides it — as a gift. Romans 5:17: 'how much more will those who receive God's abundant provision of grace and of the gift of righteousness reign in life.' Righteousness received, not achieved." },
              { title: "The Gospel Transforms What the Law Could Not", color: PURPLE, text: "Romans 8:3-4: 'what the law was powerless to do... God did by sending his own Son.' The law could diagnose; it could not cure. The gospel is the cure — not merely forgiveness for past failures but the Spirit who produces what the law required (Gal 5:22-23)." },
              { title: "The Gospel Creates New Motivation", color: GOLD, text: "Law-based obedience is driven by fear of punishment or hope of reward. Gospel-based obedience is driven by gratitude — the 'therefore' of Romans 12:1: 'in view of God's mercy.' The indicative (what God has done) creates the imperative (how we live). We obey because we are loved, not to be loved." },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ color: item.color, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{item.title}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "uses" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Three Uses of the Law</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Reformed and Lutheran theology traditionally identify three ways God uses the law in the world. The second use (convicting of sin) is shared by both traditions; the third use (guiding Christians) is a point of ongoing debate.
            </p>
            {THREE_USES.map((use, i) => {
              const isOpen = openUse === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${use.color}30`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenUse(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${use.color}20`, border: `1px solid ${use.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ color: use.color, fontSize: 12, fontWeight: 700 }}>{use.number}</span>
                      </div>
                      <div>
                        <div style={{ color: use.color, fontWeight: 700, fontSize: 14 }}>{use.name}</div>
                        <div style={{ color: MUTED, fontSize: 12, fontStyle: "italic" }}>{use.latin}</div>
                      </div>
                    </div>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>{use.desc}</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 10 }}>
                        {use.texts.map((t, j) => (
                          <div key={j} style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}>{t}</div>
                        ))}
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                        <div style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}20`, borderRadius: 6, padding: "8px 10px" }}>
                          <div style={{ color: BLUE, fontSize: 11, fontWeight: 700, marginBottom: 2 }}>LUTHERAN</div>
                          <div style={{ color: MUTED, fontSize: 12 }}>{use.lutheran}</div>
                        </div>
                        <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}20`, borderRadius: 6, padding: "8px 10px" }}>
                          <div style={{ color: PURPLE, fontSize: 11, fontWeight: 700, marginBottom: 2 }}>REFORMED</div>
                          <div style={{ color: MUTED, fontSize: 12 }}>{use.reformed}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "confusion" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>What Happens When You Confuse Law and Gospel</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Luther: &ldquo;When the law is preached without the gospel, people despair. When the gospel is preached without the law, people become secure.&rdquo; Both errors produce spiritual casualties.
            </p>
            {CONFUSIONS.map((item, i) => {
              const isOpen = openConf === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenConf(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 14 }}>{item.title}</span>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>{item.desc}</p>
                      <div style={{ fontWeight: 600, fontSize: 13, color: MUTED, marginBottom: 6 }}>Common symptoms:</div>
                      {item.symptoms.map((s, j) => (
                        <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 4 }}>
                          <span style={{ color: item.color, fontSize: 12, flexShrink: 0, marginTop: 2 }}>•</span>
                          <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}>{s}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "traditions" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Lutheran vs. Reformed on Law and Gospel</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Both traditions affirm the law-gospel distinction, but they differ on its application — especially regarding the third use of the law.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                {
                  tradition: "Lutheran",
                  color: BLUE,
                  points: [
                    "The second use (convicting) is the primary theological function of the law",
                    "Skeptical of the third use: grace alone motivates the Christian life",
                    "Strong antithesis between law (condemnation) and gospel (grace)",
                    "Preaching alternates between law (crushing) and gospel (lifting)",
                    "Key theologians: Luther, Melanchthon, Gerhard, Forde",
                  ],
                },
                {
                  tradition: "Reformed",
                  color: PURPLE,
                  points: [
                    "Calvin strongly emphasized the third use as the principal use for Christians",
                    "The law reflects the character of God and guides grateful obedience",
                    "Less absolute antithesis — law and gospel both reveal God's will",
                    "The Ten Commandments structure Christian ethics in the Heidelberg Catechism",
                    "Key theologians: Calvin, Turretin, Bavinck, Horton, Van Drunen",
                  ],
                },
              ].map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 12, padding: "18px 20px" }}>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: 16, marginBottom: 12 }}>{item.tradition}</div>
                  {item.points.map((pt, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                      <span style={{ color: item.color, fontSize: 12, flexShrink: 0, marginTop: 2 }}>•</span>
                      <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 12, padding: "16px 20px" }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Both traditions are committed to salvation by grace through faith and reject works-righteousness. Their difference is about how the Christian continues to relate to the law after justification — not whether works earn salvation.
              </p>
            </div>
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Personal Reflection</div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <label style={{ display: "block", color: MUTED, fontSize: 13, marginBottom: 8 }}>
                Which error do you tend more toward — treating the gospel as law (moralism: conditional acceptance) or treating the law as gospel (antinomianism: license for carelessness)? How does this show up in your relationship with God and your spiritual life?
              </label>
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 160, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "12px 14px", resize: "vertical", outline: "none", fontFamily: "inherit", lineHeight: 1.6, boxSizing: "border-box" }}
              />
            </div>
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "16px 20px" }}>
              <blockquote style={{ margin: 0, fontStyle: "italic", color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
                &ldquo;The law says, &apos;do this,&apos; and it is never done. Grace says, &apos;believe in this,&apos; and everything is already done.&rdquo;<br />
                <span style={{ fontSize: 12, marginTop: 6, display: "block", color: GOLD }}>— Martin Luther, Preface to Romans (1522)</span>
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
              { label: "Five Solas", href: "/five-solas" },
              { label: "Theology of Sin", href: "/theology-of-sin" },
              { label: "Salvation", href: "/salvation" },
              { label: "Sanctification", href: "/spiritual-formation" },
              { label: "Reformed Theology", href: "/reformed-theology" },
              { label: "Faith & Works", href: "/faith-and-works" },
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
