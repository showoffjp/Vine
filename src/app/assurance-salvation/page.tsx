"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { ChevronDown, ChevronUp, Check, AlertCircle, ShieldCheck } from "lucide-react";

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
  { id: "biblical", label: "Biblical Basis" },
  { id: "marks", label: "Marks of Faith" },
  { id: "views", label: "Eternal Security" },
  { id: "doubts", label: "When You Doubt" },
  { id: "pastoral", label: "Pastoral Care" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const ASSURANCE_TEXTS = [
  {
    ref: "1 John 5:13",
    text: "I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life.",
    note: "John explicitly states his purpose: that believers may KNOW (not hope, not guess) they have eternal life. Assurance is not presumption — it is John's intended pastoral goal.",
    color: GREEN,
  },
  {
    ref: "Romans 8:38-39",
    text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
    note: "Paul's exhaustive list covers every conceivable threat to our standing with God — and declares all of them insufficient to separate us.",
    color: BLUE,
  },
  {
    ref: "John 10:28-29",
    text: "I give them eternal life, and they shall never perish; no one will snatch them out of my hand. My Father, who has given them to me, is greater than all; no one can snatch them out of my Father's hand.",
    note: "Held in both the Son's hand and the Father's hand — a double grip of grace. The passive voice matters: no one can snatch them OUT.",
    color: PURPLE,
  },
  {
    ref: "Philippians 1:6",
    text: "Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.",
    note: "Assurance rests on the faithfulness of God, not the consistency of our performance. He who began will complete.",
    color: GOLD,
  },
  {
    ref: "Romans 8:1",
    text: "Therefore, there is now no condemnation for those who are in Christ Jesus.",
    note: "The verdict of the last judgment is pronounced now — 'no condemnation' is present tense, declared over the believer who is in Christ.",
    color: TEAL,
  },
  {
    ref: "Hebrews 7:25",
    text: "Therefore he is able to save completely those who come to God through him, because he always lives to intercede for them.",
    note: "'Save completely' (eis to panteles) — to the uttermost, forever. Christ's ongoing intercession is the ground of persevering salvation.",
    color: RED,
  },
];

const THREE_WITNESSES = [
  {
    witness: "The Testimony of God's Word",
    color: GOLD,
    icon: "📜",
    content: "Assurance rests first on the objective promises of Scripture — not our feelings, not our track record. When we doubt, we return to the word: 'whoever believes in him shall not perish but have eternal life' (John 3:16). Faith anchors in God's stated intention, not our experiential state.",
    ref: "1 John 5:10-12",
  },
  {
    witness: "The Internal Testimony of the Spirit",
    color: BLUE,
    icon: "🕊️",
    content: "Romans 8:16: 'The Spirit himself testifies with our spirit that we are God's children.' This is the direct, subjective dimension of assurance — the Holy Spirit's internal witness to our sonship. It is real and valid, though it fluctuates with spiritual maturity and circumstance.",
    ref: "Romans 8:15-16, Galatians 4:6",
  },
  {
    witness: "The Evidence of a Changed Life",
    color: GREEN,
    icon: "🌱",
    content: "1 John is a manual for testing assurance — its repeated tests (keeping commandments, loving the brethren, confessing Christ) provide evidence that faith is genuine. Not as the ground of salvation but as its fruit. John writes so believers will examine the evidence and find it sufficient.",
    ref: "1 John 2:3, 3:14, 4:13",
  },
];

const VIEWS = [
  {
    name: "Eternal Security (Once Saved, Always Saved)",
    tradition: "Reformed / Southern Baptist",
    color: BLUE,
    affirmation: "A genuine believer, truly regenerated by the Holy Spirit, cannot ultimately fall away. God's election is unconditional, his preservation is sovereign, and his purpose cannot be thwarted. Those who appear to fall away demonstrate they were never truly regenerated.",
    texts: ["John 10:28-29", "Romans 8:29-30", "1 John 2:19"],
    concern: "Can lead to false assurance for people who made a profession but show no evidence of regeneration.",
  },
  {
    name: "Conditional Security (Perseverance through Faith)",
    tradition: "Arminian / Wesleyan / General Baptist",
    color: GREEN,
    affirmation: "True believers can fall away through unbelief. Warnings in Hebrews and elsewhere are genuine warnings to genuine believers. Salvation is by faith, and faith that is truly abandoned means salvation is truly lost. Perseverance is the Christian's responsibility enabled by grace, not a guaranteed automatism.",
    texts: ["Hebrews 6:4-6", "Hebrews 10:26-31", "John 15:6"],
    concern: "Can lead to anxiety, over-introspection, and inability to enjoy assurance of present salvation.",
  },
  {
    name: "Reformed Perseverance of the Saints",
    tradition: "Reformed / Calvinist",
    color: PURPLE,
    affirmation: "True believers will certainly persevere — but this is not the same as 'once saved, always saved' in its popular form. Perseverance is a fruit of election and effective calling; the elect will persevere because God ensures it. But warnings in Scripture are the means by which God keeps his people persevering. Both assurance and warnings are real and necessary.",
    texts: ["John 6:37-40", "Phil 1:6", "1 Pet 1:3-5"],
    concern: "The distinction between 'truly elect' and 'professedly saved' can be pastorally unwieldy.",
  },
  {
    name: "Catholic / Orthodox Position",
    tradition: "Catholic, Eastern Orthodox",
    color: GOLD,
    affirmation: "Justifying grace can be lost through mortal sin. Full assurance of final salvation is not available in this life — to presume final salvation is to presume on God's mercy. The Council of Trent condemned the teaching that one can be certain of one's final salvation. The life of faith and sacramental participation maintain saving grace.",
    texts: ["1 Cor 10:12", "Hebrews 3:12-14", "James 2:14"],
    concern: "Can produce a works-based anxiety about final standing that undermines the gospel's peace.",
  },
];

const DOUBT_CAUSES = [
  { cause: "Unconfessed, habitual sin", response: "1 John 1:9 — confession restores the sense of fellowship. Persistent unaddressed sin will suppress assurance, which is itself a gracious warning mechanism.", color: RED },
  { cause: "Depression and mental illness", response: "Feelings lie. Severe depression can make the truest believer feel abandoned by God. The remedy is not more spiritual effort but the Word, community, and often professional help — plus the reminder that God is not absent when you cannot sense him.", color: BLUE },
  { cause: "Theological over-introspection", response: "Some traditions teach people to examine themselves so rigorously that they can never find sufficient evidence of grace. The antidote is to look away from the evidence in yourself and look to the evidence in Christ.", color: PURPLE },
  { cause: "False profession never examined", response: "Some people were told they were saved when they weren't, or said a prayer without genuine regeneration. The answer is not continued anxiety but honest examination — 'Examine yourselves to see whether you are in the faith' (2 Cor 13:5).", color: GOLD },
  { cause: "Falling into serious sin", response: "Peter denied Christ and was restored. Paul calls himself the 'chief of sinners.' The question is not whether you have sinned seriously but whether you flee to Christ with your sin or from him.", color: TEAL },
  { cause: "Spiritual dryness and dark night of the soul", response: "The Desert Fathers, John of the Cross, and C.S. Lewis all knew seasons where God seemed absent. These are not always signs of unbelief — they are often seasons of deeper formation. The feelings of God's absence do not equal his actual absence.", color: GREEN },
];

const VIDEOS = [
  { videoId: "dHrXzGMqBzc", title: "Assurance of Salvation: Can You Know You Are Saved?" },
  { videoId: "3fH6YEXDuHk", title: "Eternal Security: Once Saved, Always Saved?" },
  { videoId: "NvqLHe3Gc0c", title: "The Three Witnesses: How to Have Assurance" },
  { videoId: "kOXuFW6YRUI", title: "When Doubt Threatens Your Faith — J.D. Greear" },
];

export default function AssuranceSalvationPage() {
  const [tab, setTab] = useLocalStorage("vine_assurance_tab", "overview");
  const [openView, setOpenView] = useLocalStorage("vine_assurance_view", "");
  const [openDoubt, setOpenDoubt] = useLocalStorage("vine_assurance_doubt", "");
  const [journal, setJournal] = useLocalStorage("vine_assurance_journal", "");
  const [journalDoubt, setJournalDoubt] = useLocalStorage("vine_assurance_doubt_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{ background: `${GREEN}20`, color: GREEN, border: `1px solid ${GREEN}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Soteriology</span>
            <span style={{ background: `${BLUE}20`, color: BLUE, border: `1px solid ${BLUE}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Assurance</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>
            Assurance of Salvation
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 700 }}>
            Can you know you are saved? The question haunts millions of Christians. John&apos;s answer is unambiguous: &ldquo;I write these things to you who believe... so that you may know that you have eternal life.&rdquo; Assurance is not arrogance — it is John&apos;s intended pastoral gift.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: `1px solid ${tab === t.id ? GREEN : BORDER}`,
                background: tab === t.id ? `${GREEN}20` : "transparent",
                color: tab === t.id ? GREEN : MUTED,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 12 }}>The Three Grounds of Assurance</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {THREE_WITNESSES.map((w, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 18px" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 20 }}>{w.icon}</span>
                      <div style={{ color: w.color, fontWeight: 700, fontSize: 14 }}>{w.witness}</div>
                    </div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{w.content}</p>
                    <div style={{ color: w.color, fontSize: 12, marginTop: 8, fontWeight: 600 }}>{w.ref}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <AlertCircle size={20} color={GOLD} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: GOLD, marginBottom: 6 }}>The Difference Between Assurance and Presumption</div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                    Assurance is the Spirit-given confidence that rests on God&apos;s promises and the evidence of genuine regeneration. Presumption is the assumption of salvation without any evidence or examination — claiming the promise without the life that flows from it. John 1 of the letter: we walk in darkness while claiming fellowship with God. Assurance and presumption are not the same thing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "biblical" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Biblical Basis for Assurance</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Assurance is not a secondary or optional dimension of Christian faith — it is the intended normal experience of the believer. These are the foundational texts.
            </p>
            {ASSURANCE_TEXTS.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ color: t.color, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>{t.ref}</div>
                <blockquote style={{ margin: "0 0 10px", paddingLeft: 12, borderLeft: `3px solid ${t.color}`, color: TEXT, fontStyle: "italic", fontSize: 14, lineHeight: 1.7 }}>
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, background: `${t.color}10`, padding: "8px 12px", borderRadius: 8 }}>{t.note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "marks" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Marks of Genuine Faith</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              1 John provides a series of tests — not to make us anxious but to give us evidence. The marks are not conditions for salvation but fruits of it.
            </p>
            {[
              { mark: "You confess Jesus as Lord (1 John 4:2-3)", color: BLUE, detail: "Not merely intellectual acknowledgment but the heart's submission to Jesus as supreme authority. The Spirit produces this confession; it cannot be manufactured by the flesh." },
              { mark: "You love the brothers and sisters (1 John 3:14)", color: GREEN, detail: "'We know that we have passed from death to life, because we love each other.' The love of believers for one another is a mark of regeneration — it is the Spirit's character, not natural human disposition." },
              { mark: "You keep God's commandments (1 John 2:3-5)", color: PURPLE, detail: "'We know that we have come to know him if we keep his commands.' Not perfect obedience but a genuine orientation toward obedience — a life marked by the desire to please God." },
              { mark: "You continue in the faith (1 John 2:19)", color: GOLD, detail: "'They went out from us, but they did not really belong to us.' The mark of genuine faith is its persistence — not the absence of struggle, but that you don't finally abandon Christ." },
              { mark: "You acknowledge sin and seek forgiveness (1 John 1:8-9)", color: TEAL, detail: "Genuine Christians are realistic about their sin and habitually return to the cross. The absence of conviction is more alarming than the presence of sin." },
              { mark: "You have the Spirit's inner witness (1 John 3:24, Rom 8:16)", color: RED, detail: "The Spirit testifies with our spirit that we are children of God. This is not an identifiable emotion but an abiding orientation — a sense of being known and held by God." },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ color: item.color, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{item.mark}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.detail}</p>
              </div>
            ))}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: "16px 20px" }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                These marks are not a checklist to score yourself against — they are a portrait of a life transformed by the Spirit. The question is not &ldquo;Do I perfectly exhibit all of these?&rdquo; but &ldquo;Is the general direction of my life oriented this way?&rdquo; A bruised reed he will not break.
              </p>
            </div>
          </div>
        )}

        {tab === "views" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Eternal Security: The Four Views</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The major Christian traditions differ significantly on whether salvation, once received, can be lost — and what this means for assurance.
            </p>
            {VIEWS.map((view, i) => {
              const isOpen = openView === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${view.color}30`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenView(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <div style={{ color: view.color, fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{view.name}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>{view.tradition}</div>
                    </div>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>{view.affirmation}</p>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
                        {view.texts.map((t, j) => (
                          <span key={j} style={{ background: `${view.color}15`, color: view.color, border: `1px solid ${view.color}30`, borderRadius: 20, padding: "2px 8px", fontSize: 12 }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ background: `${RED}10`, border: `1px solid ${RED}20`, borderRadius: 8, padding: "8px 12px" }}>
                        <div style={{ color: RED, fontSize: 12, fontWeight: 600, marginBottom: 2 }}>Potential Pastoral Concern</div>
                        <div style={{ color: MUTED, fontSize: 13 }}>{view.concern}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "doubts" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>When You Doubt Your Salvation</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Doubt about one&apos;s salvation is common and takes many forms — different causes require different responses. Here are the major causes and their pastoral responses.
            </p>
            {DOUBT_CAUSES.map((item, i) => {
              const isOpen = openDoubt === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenDoubt(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                      <span style={{ color: TEXT, fontWeight: 600, fontSize: 14 }}>{item.cause}</span>
                    </div>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <div style={{ borderLeft: `3px solid ${item.color}`, paddingLeft: 12, color: MUTED, fontSize: 14, lineHeight: 1.7 }}>
                        {item.response}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: GREEN, marginBottom: 8 }}>The Pastoral Counsel of William Perkins</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Puritan William Perkins distinguished between the &ldquo;faith of assurance&rdquo; and the &ldquo;faith of adherence.&rdquo; Even when assurance is absent, the believer clings to Christ (&ldquo;Lord, I believe; help my unbelief&rdquo; — Mark 9:24). The act of clinging to Christ even without felt assurance is itself a mark of genuine faith. The one who doubts their salvation and therefore runs to Christ has more going for them than they realize.
              </p>
            </div>
          </div>
        )}

        {tab === "pastoral" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Pastoral Care for Doubting Believers</div>
            {[
              {
                title: "Start with the object of faith, not the strength of faith",
                color: BLUE,
                content: "Assurance is not built by making our faith stronger but by looking more clearly at its object — Christ. A weak faith in a strong Christ saves; a strong faith in a weak Christ does not. Point doubters to Christ, not to their own feelings or spiritual performance.",
              },
              {
                title: "Distinguish doubt from unbelief",
                color: GREEN,
                content: "Doubt says 'I'm not sure.' Unbelief says 'I will not.' The person who doubts and cries out to God has not abandoned faith — they are expressing the weakness of it. Jesus did not rebuke Thomas for doubt; he provided evidence. Doubt is a feature of faith in tension, not its absence.",
              },
              {
                title: "Don't minimize but don't catastrophize",
                color: PURPLE,
                content: "Some church cultures make doubt a shameful secret. Others make it a badge of honor. Neither is right. Doubt deserves honest engagement — take the concerns seriously, provide biblical grounding, encourage genuine examination, and point to the promises.",
              },
              {
                title: "For scrupulosity / OCD",
                color: RED,
                content: "Religious OCD (scrupulosity) produces doubt that is disproportionate to any rational examination of evidence. For these individuals, reassurance-seeking becomes compulsive and counterproductive. The right pastoral response is often to help them disengage from the rumination rather than answer each doubt individually. Professional help alongside spiritual direction is often necessary.",
              },
              {
                title: "The deathbed question",
                color: GOLD,
                content: "Assurance becomes most urgent at the end of life. The Reformed tradition provides dying saints with the objective promises: 'whoever believes in him shall not perish.' Catholic tradition provides last rites and final absolution. What matters at the end is not having resolved every theological question but having someone point to Christ and say: 'he is sufficient for you.'",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 12, padding: "18px 22px" }}>
                <div style={{ color: item.color, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{item.title}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Personal Reflection</div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <label style={{ display: "block", color: MUTED, fontSize: 13, marginBottom: 8 }}>
                On a scale of certainty, where are you right now regarding your assurance of salvation? What contributes to your confidence — or your doubt? Which of the three grounds of assurance (Word, Spirit&apos;s witness, changed life) feels most alive to you? Least?
              </label>
              <textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="Write your reflection here..."
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "12px 14px", resize: "vertical", outline: "none", fontFamily: "inherit", lineHeight: 1.6, boxSizing: "border-box" }}
              />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <label style={{ display: "block", color: MUTED, fontSize: 13, marginBottom: 8 }}>
                Is there a specific cause of doubt in your own life right now — a sin, a season of dryness, a theological question? Write it down honestly. What would it look like to bring that doubt to God directly rather than carrying it alone?
              </label>
              <textarea
                value={journalDoubt}
                onChange={(e) => setJournalDoubt(e.target.value)}
                placeholder="Be honest with yourself and with God..."
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "12px 14px", resize: "vertical", outline: "none", fontFamily: "inherit", lineHeight: 1.6, boxSizing: "border-box" }}
              />
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
              { label: "Salvation", href: "/salvation" },
              { label: "Faith & Works", href: "/faith-and-works" },
              { label: "Calvinism & Arminianism", href: "/calvinism-arminianism" },
              { label: "Doubt & Faith", href: "/faith-doubt-deconstruction" },
              { label: "Theology of Sin", href: "/theology-of-sin" },
              { label: "Chronic Doubt", href: "/chronic-doubt" },
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
