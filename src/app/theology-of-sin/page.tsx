"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { ChevronDown, ChevronUp, AlertCircle, Check, BookOpen } from "lucide-react";

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
  { id: "definition", label: "What Sin Is" },
  { id: "original", label: "Original Sin" },
  { id: "depravity", label: "Total Depravity" },
  { id: "categories", label: "Categories of Sin" },
  { id: "effects", label: "Sin's Effects" },
  { id: "gospel", label: "The Gospel Answer" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const DEFINITIONS = [
  {
    word: "Hamartia (ἁμαρτία)",
    translation: "Missing the mark",
    color: RED,
    explanation: "The most common Greek word for sin in the NT. Not merely a moral failure but a structural deviation from the target — from the good life that God intended for human beings. It suggests sin is not just rule-breaking but falling short of human flourishing as God designed it.",
  },
  {
    word: "Parabasis (παράβασις)",
    translation: "Transgression / stepping across a line",
    color: GOLD,
    explanation: "A direct violation of a known command. This is the relational dimension of sin — not just falling short but actively crossing a boundary. Used especially of Adam's transgression in Romans 5.",
  },
  {
    word: "Anomia (ἀνομία)",
    translation: "Lawlessness",
    color: PURPLE,
    explanation: "The absence or rejection of law — a disposition of autonomy that refuses to be governed by God's authority. 1 John 3:4: 'sin is lawlessness.' Sin at its root is the claim to be one's own ultimate authority.",
  },
  {
    word: "Opheilema (ὀφείλημα)",
    translation: "Debt",
    color: BLUE,
    explanation: "Sin as something owed to God — the Lord's Prayer asks forgiveness of our 'debts' (Matt 6:12). This captures the moral accounting dimension: sin creates an obligation that must be discharged.",
  },
  {
    word: "Adikia (ἀδικία)",
    translation: "Injustice / unrighteousness",
    color: TEAL,
    explanation: "Sin as a violation of justice — a failure to give God and neighbor what is rightly due them. This grounds the social dimension of sin: injustice is not merely a social problem but a theological one.",
  },
];

const ORIGINAL_SIN_VIEWS = [
  {
    tradition: "Augustinian / Reformed",
    color: RED,
    key: "Inherited Guilt and Corruption",
    desc: "Adam's sin results in both inherited guilt (all humanity sinned 'in Adam') and inherited corruption (we are born with a disposition to sin). Both aspects are real and both are resolved in Christ. The federal headship view: Adam acted as humanity's representative; his guilt is imputed to all; Christ as new federal head reverses this.",
    ref: "Romans 5:12-21, 1 Corinthians 15:22",
  },
  {
    tradition: "Eastern Orthodox",
    color: PURPLE,
    key: "Inherited Mortality, Not Guilt",
    desc: "Humans inherit the consequences of Adam's sin — mortality, corruption, the tendency to sin — but not his personal guilt. Sin is not a legal category primarily but a disease: death and the drive to survive at others' expense has infected humanity. Salvation is deification (theosis) more than acquittal.",
    ref: "Romans 5, Genesis 3",
  },
  {
    tradition: "Arminian / Wesleyan",
    color: BLUE,
    key: "Prevenient Grace Restores Agency",
    desc: "Humans inherit Adam's corruption and natural guilt, but God's prevenient (going-before) grace restores enough freedom to respond to the gospel. No one is condemned for Adam's sin alone; we are condemned for our own sins. Prevenient grace is universal — it enables but does not guarantee faith.",
    ref: "John 12:32, Romans 5:18",
  },
  {
    tradition: "Pelagian / Semi-Pelagian (condemned)",
    color: GOLD,
    key: "Sin as Bad Example Only",
    desc: "Pelagius argued that Adam's sin is a bad example but not a transmission of guilt or corruption — humans are born morally neutral and sin by choice. Condemned at Carthage (418) and Orange (529). Semi-Pelagianism softened this but still sees humans as capable of the first move toward God.",
    ref: "Condemned at Council of Carthage (418)",
  },
];

const SIN_CATEGORIES = [
  {
    category: "Sins of Commission",
    color: RED,
    desc: "Active violations of God's commands — doing what is forbidden. Explicit in the Ten Commandments (murder, adultery, theft), in the lists in Romans 1 and Galatians 5, and throughout Scripture.",
    examples: ["Murder, assault", "Adultery, sexual immorality", "Theft, fraud", "False witness, slander", "Idolatry, blasphemy"],
  },
  {
    category: "Sins of Omission",
    color: GOLD,
    desc: "Failures to do what is required — the sin of not acting when action is called for. James 4:17: 'If anyone, then, knows the good they ought to do and doesn't do it, it is sin for them.' Often underweighted in evangelical ethics.",
    examples: ["Failing to care for the poor (Matt 25:31-46)", "Failing to speak when truth requires it", "Failing to forgive when reconciliation is possible", "Neglect of worship, prayer, Scripture"],
  },
  {
    category: "Sins of the Heart",
    color: PURPLE,
    desc: "Jesus's Sermon on the Mount radicalizes the commandments inward: anger is murder; lust is adultery. The heart is the source from which all external sins flow (Mark 7:21-22). A Christianity focused only on behavior misses where sin lives.",
    examples: ["Pride, envy, greed (Proverbs 6:16-19)", "Lust, covetousness", "Bitterness, unforgiveness", "Fear that displaces trust in God"],
  },
  {
    category: "Social / Structural Sin",
    color: BLUE,
    desc: "Systems, structures, and institutions that embody injustice — slavery, unjust economic systems, corrupt courts (Amos 5:10-12). Not all sin is individual. The biblical prophets spend more time indicting systemic injustice than individual morality. This does not excuse individual responsibility but adds to it.",
    examples: ["Economic systems that exploit the poor", "Judicial corruption", "Racial injustice embedded in law", "Institutional cover-ups of abuse"],
  },
  {
    category: "Presumptuous vs. Unintentional Sin",
    color: TEAL,
    desc: "The OT law distinguishes sins done 'with a high hand' (deliberately, defiantly) from unintentional sins. Both require atonement, but presumptuous sin carries greater culpability. Numbers 15:30-31 is serious about deliberate defiance.",
    examples: ["Unintentional: ignorant violations, sins of weakness", "Presumptuous: deliberate defiance of known commands", "The 'unforgivable sin' debate (Matt 12:31-32) — hardened heart pattern"],
  },
];

const EFFECTS = [
  {
    title: "Separation from God",
    color: RED,
    texts: ["Isaiah 59:2", "Ephesians 2:1-3"],
    content: "Sin creates a rupture in the relationship between creature and Creator. God is holy — he cannot simply accommodate sin without denying his own nature. The consequence is spiritual death: existence separated from the source of all life.",
  },
  {
    title: "Corruption of the Image of God",
    color: GOLD,
    texts: ["Genesis 5:3", "Romans 1:21-23"],
    content: "Sin didn't destroy the image of God in humanity but marred it — corrupting reason, will, and affection. We still bear God's image (Gen 9:6), but it is distorted: reason prone to rationalization, will enslaved to desire, affection directed at lesser things.",
  },
  {
    title: "Enslavement",
    color: PURPLE,
    texts: ["Romans 6:17-18", "John 8:34"],
    content: "Sin is not a series of free choices we can choose to stop — it becomes a master (Rom 6:16). Jesus: 'Everyone who sins is a slave to sin.' The freedom we assert in disobeying God is a freedom that ends in deeper bondage. Paul's use of the slavery metaphor is intentional and stark.",
  },
  {
    title: "Relational Fracture",
    color: BLUE,
    texts: ["Genesis 3:7-13", "Romans 3:10-18"],
    content: "Immediately after the fall: Adam and Eve cover themselves, hide from God, and blame each other. Sin fractures the human community: shame, blame-shifting, and fear replace naked openness and trust. The sociology of brokenness begins in Genesis 3.",
  },
  {
    title: "Creation's Groaning",
    color: TEAL,
    texts: ["Romans 8:20-22", "Genesis 3:17-19"],
    content: "Sin's effects are not limited to human hearts — creation itself was subjected to futility (Rom 8:20). The thorns and thistles of Genesis 3 are not just about farming; they represent a cosmos no longer running as designed. Creation waits for the liberation that comes with the redemption of God's children.",
  },
  {
    title: "Death",
    color: RED,
    texts: ["Romans 6:23", "Genesis 2:17"],
    content: "The wages of sin is death — physical death (the return to dust) and spiritual death (eternal separation from God). Revelation 21:8 calls the second death the 'lake of fire.' The entire redemptive narrative from Genesis 3 to Revelation 21 is the story of God defeating death for his people.",
  },
];

const GOSPEL_POINTS = [
  { title: "Forgiveness: The Debt Cancelled", color: GREEN, ref: "Colossians 2:14", content: "The record of our debts was 'nailed to the cross' — a public cancellation. Forgiveness is not God overlooking sin or pretending it didn't happen; it is the sin being paid for by Christ's death so that the debt is genuinely discharged." },
  { title: "Justification: The Verdict Changed", color: BLUE, ref: "Romans 5:1", content: "We are justified — declared righteous — not because we became righteous first, but because Christ's righteousness was imputed to us. The verdict God will pronounce at the last judgment is pronounced now, over the believer, in Christ." },
  { title: "Regeneration: The Heart Transformed", color: PURPLE, ref: "Ezekiel 36:26, John 3:3", content: "God promises not just forgiveness but a 'new heart' — the replacement of the stony heart with a heart of flesh (Ezek 36:26). The new birth (John 3) is not moral improvement but ontological transformation — a new kind of life has begun." },
  { title: "Sanctification: The Corruption Overcome", color: TEAL, ref: "2 Corinthians 3:18, Romans 8:13", content: "The effects of sin are progressively overcome in sanctification — the lifelong work of the Spirit making believers more like Christ. This is not completed in this life but is real and ongoing." },
  { title: "Glorification: The Final Defeat", color: GOLD, ref: "1 John 3:2, Revelation 21:4", content: "At the resurrection, the last effects of sin — death, suffering, the groaning of creation — are permanently ended. 'He will wipe every tear from their eyes.' The new creation is entirely free from sin and its consequences." },
];

const VIDEOS = [
  { videoId: "wGepTDnpHAQ", title: "What Is Sin? A Biblical Theology of Hamartiology" },
  { videoId: "kKHkH1D3JoI", title: "Original Sin: Does the Bible Teach It?" },
  { videoId: "NUdv3x_lXog", title: "Total Depravity: What Does It Actually Mean?" },
  { videoId: "bVLSBs3YMPI", title: "The Heart of Sin: Why Our Problem Is Deeper Than Behavior" },
];

export default function TheologyOfSinPage() {
  const [tab, setTab] = useLocalStorage("vine_sin_tab", "overview");
  const [openOriginal, setOpenOriginal] = useLocalStorage("vine_sin_original", "");
  const [openEffect, setOpenEffect] = useLocalStorage("vine_sin_effect", "");
  const [journal, setJournal] = useLocalStorage("vine_sin_journal", "");
  const [journalPersonal, setJournalPersonal] = useLocalStorage("vine_sin_personal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT }}>
      <Navbar />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{ background: `${RED}20`, color: RED, border: `1px solid ${RED}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Systematic Theology</span>
            <span style={{ background: `${PURPLE}20`, color: PURPLE, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Hamartiology</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>
            A Christian Theology of Sin
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 700 }}>
            Sin is not a comfortable topic — but it is an essential one. Without a clear doctrine of sin, we misunderstand the gospel, misdiagnose human problems, and misprescribe solutions. This guide covers what sin is, its origin, its categories, and its devastating effects — and why the gospel is the only answer that goes deep enough.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: `1px solid ${tab === t.id ? RED : BORDER}`,
                background: tab === t.id ? `${RED}20` : "transparent",
                color: tab === t.id ? RED : MUTED,
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: `${RED}10`, border: `1px solid ${RED}30`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 12 }}>Why This Doctrine Matters</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>
                G.K. Chesterton famously called original sin &ldquo;the only part of Christian theology which can really be proved.&rdquo; Look at history. Look at the news. Look at yourself. The doctrine of sin is not pessimistic — it is diagnostic. And a correct diagnosis is the prerequisite for effective treatment.
              </p>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Western culture prefers the language of pathology, trauma, or systemic injustice to the language of sin — and those categories are often real and useful. But they cannot carry the full weight of the human problem without moral categories. The gospel is not therapy for damaged people; it is redemption for guilty and corrupted ones.
              </p>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 16 }}>The Shape of the Doctrine</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { title: "Sin's Definition", color: RED, icon: "🎯", desc: "Multiple Hebrew and Greek words capture different dimensions: missing the mark, transgression, lawlessness, debt, injustice." },
                  { title: "Original Sin", color: GOLD, icon: "🌳", desc: "Adam's fall in Genesis 3 was not just a personal mistake — it was a cosmic catastrophe that altered the nature of humanity." },
                  { title: "Total Depravity", color: PURPLE, icon: "❤️", desc: "Not absolute evil, but the corruption of every part of the human person — mind, will, emotion, body — by sin." },
                  { title: "Sin's Effects", color: BLUE, icon: "🌊", desc: "Separation from God, corruption of the image, relational fracture, creation's groaning, and death." },
                ].map((item, i) => (
                  <div key={i} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{item.icon}</div>
                    <div style={{ color: item.color, fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{item.title}</div>
                    <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: GREEN, marginBottom: 8 }}>The Key Texts</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { ref: "Romans 3:23", text: "For all have sinned and fall short of the glory of God." },
                  { ref: "Romans 6:23", text: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord." },
                  { ref: "Psalm 51:5", text: "Surely I was sinful at birth, sinful from the time my mother conceived me." },
                  { ref: "Jeremiah 17:9", text: "The heart is deceitful above all things and beyond cure. Who can understand it?" },
                  { ref: "1 John 1:8", text: "If we claim to be without sin, we deceive ourselves and the truth is not in us." },
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: RED, fontWeight: 700, fontSize: 12, flexShrink: 0, minWidth: 90 }}>{t.ref}</span>
                    <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "definition" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>What Sin Is: The Biblical Vocabulary</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Scripture uses multiple words for sin — each capturing a different dimension of the same reality. Together they paint a rich picture of what sin is and why it is so catastrophic.
            </p>
            {DEFINITIONS.map((def, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${def.color}30`, borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap", marginBottom: 8 }}>
                  <span style={{ color: def.color, fontWeight: 700, fontSize: 16 }}>{def.word}</span>
                  <span style={{ color: MUTED, fontSize: 13 }}>— {def.translation}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{def.explanation}</p>
              </div>
            ))}
            <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 12, padding: "18px 22px", marginTop: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: PURPLE, marginBottom: 8 }}>Augustine&apos;s Definition</div>
              <blockquote style={{ margin: 0, paddingLeft: 14, borderLeft: `3px solid ${PURPLE}`, fontStyle: "italic", color: TEXT, fontSize: 14, lineHeight: 1.7 }}>
                &ldquo;Our heart is restless until it rests in Thee.&rdquo; Sin is the heart resting in anything else.
              </blockquote>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: "10px 0 0" }}>
                Augustine&apos;s insight: sin is disordered love — loving good things in wrong proportion, or loving bad things, rather than ordering all loves toward God as the supreme good. This definition captures sin&apos;s perversity without reducing it to mere rule-breaking.
              </p>
            </div>
          </div>
        )}

        {tab === "original" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Original Sin</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              &ldquo;Original sin&rdquo; refers to two related things: (1) Adam&apos;s originating act of sin in Genesis 3; (2) the result of that act for all subsequent humanity. The various Christian traditions understand the transmission and nature of original sin differently.
            </p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "18px 22px", marginBottom: 4 }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Romans 5:12-21 — The Pivotal Text</div>
              <blockquote style={{ margin: "0 0 12px", paddingLeft: 14, borderLeft: `3px solid ${RED}`, fontStyle: "italic", color: TEXT, fontSize: 14, lineHeight: 1.7 }}>
                &ldquo;Therefore, just as sin entered the world through one man, and death through sin, and in this way death came to all people, because all sinned... For just as through the disobedience of the one man the many were made sinners, so also through the obedience of the one man the many will be made righteous.&rdquo;
              </blockquote>
              <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>
                Paul draws a parallel between Adam and Christ — both act as representatives for a corporate humanity. The parallel is the hinge of Paul&apos;s atonement theology: as Adam&apos;s act affected those who were &ldquo;in&rdquo; him, so Christ&apos;s act affects those who are &ldquo;in&rdquo; Christ.
              </div>
            </div>
            <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>The Four Major Views</div>
            {ORIGINAL_SIN_VIEWS.map((view, i) => {
              const isOpen = openOriginal === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenOriginal(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 2 }}>
                        <span style={{ color: view.color, fontWeight: 700, fontSize: 14 }}>{view.tradition}</span>
                      </div>
                      <div style={{ color: MUTED, fontSize: 13 }}>{view.key}</div>
                    </div>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>{view.desc}</p>
                      <div style={{ color: view.color, fontSize: 12, fontWeight: 600 }}>Key texts: {view.ref}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "depravity" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Total Depravity</div>
            <div style={{ background: `${RED}10`, border: `1px solid ${RED}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: RED, marginBottom: 8 }}>What It Does NOT Mean</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Total depravity does NOT mean every human is as evil as they could possibly be. It does not mean people do not do genuinely good things. It does not mean human beings have no capacity for love, creativity, justice, or beauty.
              </p>
            </div>
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: GREEN, marginBottom: 8 }}>What It DOES Mean</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>
                Total depravity means that sin has affected every part of human nature — mind, will, emotion, and body. There is no part of us untouched by sin&apos;s distortion. Most critically: our will is so bent toward sin and self that we cannot by our own natural power choose God. We are not as bad as we could be, but we are as thoroughly affected as we could be.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  { part: "The Mind", desc: "Romans 1:21-22 — 'their thinking became futile... although they claimed to be wise, they became fools.' Sin distorts our reasoning toward rationalization and self-justification." },
                  { part: "The Will", desc: "Romans 8:7 — 'the mind governed by the flesh is hostile to God; it does not submit to God's law, nor can it do so.' Apart from grace, the will is enslaved to sin." },
                  { part: "The Emotions", desc: "Disorder in loves — Augustine's framework: we love things in the wrong order and with the wrong intensity. What we feel attracted to is affected by sin." },
                  { part: "The Body", desc: "Romans 6:12 — 'do not let sin reign in your mortal body so that you obey its evil desires.' Physical appetites can become channels for sin." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 12px", alignItems: "flex-start" }}>
                    <span style={{ color: GREEN, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{item.part}</span>
                    <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: GOLD, marginBottom: 8 }}>The Pastoral Implication</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Total depravity means that human transformation cannot be achieved by information alone, moral exhortation alone, or willpower alone. The gospel is not better advice — it is radical rescue. This is why Jesus speaks of a new birth (John 3:3-8) and Ezekiel promises a heart transplant (Ezek 36:26). Sanctification is not the self improving itself; it is the Spirit transforming a self that cannot transform itself.
              </p>
            </div>
          </div>
        )}

        {tab === "categories" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Categories of Sin</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Not all sins are the same type — and distinguishing them helps with diagnosis, pastoral care, and understanding the breadth of what the gospel addresses.
            </p>
            {SIN_CATEGORIES.map((cat, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${cat.color}30`, borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ color: cat.color, fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{cat.category}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 12px" }}>{cat.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cat.examples.map((ex, j) => (
                    <span key={j} style={{ background: `${cat.color}15`, color: cat.color, border: `1px solid ${cat.color}30`, borderRadius: 20, padding: "3px 10px", fontSize: 12 }}>{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "effects" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Sin&apos;s Effects</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              Sin is not a private matter. Its effects ripple outward — from the individual heart to relationships, to social structures, to the cosmos itself.
            </p>
            {EFFECTS.map((effect, i) => {
              const isOpen = openEffect === String(i);
              return (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button onClick={() => setOpenEffect(isOpen ? "" : String(i))} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: effect.color, flexShrink: 0 }} />
                      <span style={{ color: TEXT, fontWeight: 600, fontSize: 15 }}>{effect.title}</span>
                      <span style={{ color: MUTED, fontSize: 12 }}>({effect.texts.join(", ")})</span>
                    </div>
                    {isOpen ? <ChevronUp size={16} color={MUTED} /> : <ChevronDown size={16} color={MUTED} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <div style={{ borderLeft: `3px solid ${effect.color}`, paddingLeft: 14, color: MUTED, fontSize: 14, lineHeight: 1.7 }}>
                        {effect.content}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "gospel" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>The Gospel Answer</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 8px" }}>
              The gospel is not a general spiritual uplift — it is a specific answer to the specific problem of sin. Each dimension of sin&apos;s devastation is answered by a specific dimension of what God does in Christ.
            </p>
            {GOSPEL_POINTS.map((pt, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${pt.color}30`, borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap", marginBottom: 8 }}>
                  <span style={{ color: pt.color, fontWeight: 700, fontSize: 15 }}>{pt.title}</span>
                  <span style={{ color: MUTED, fontSize: 12 }}>{pt.ref}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{pt.content}</p>
              </div>
            ))}
            <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 12, padding: "18px 22px", marginTop: 8 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: GREEN, marginBottom: 10 }}>The Order of Redemption</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  "Calling — God draws sinners to himself (John 6:44)",
                  "Regeneration — New birth precedes and enables faith (Ezek 36:26, John 3:3)",
                  "Faith and Repentance — The response the Spirit produces (Eph 2:8, Acts 2:38)",
                  "Justification — The forensic declaration of righteousness (Rom 5:1)",
                  "Adoption — Entrance into God's family (Gal 4:5)",
                  "Sanctification — Ongoing transformation by the Spirit (2 Cor 3:18)",
                  "Glorification — Final completion at resurrection (Rom 8:30)",
                ].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${GREEN}20`, border: `1px solid ${GREEN}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: GREEN, fontSize: 10, fontWeight: 700 }}>{i + 1}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{step}</span>
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
                Which category or dimension of sin do you find hardest to recognize in yourself — sins of omission, sins of the heart, or structural sin? What might repentance look like in that area?
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
                Augustine said: &ldquo;Our heart is restless until it rests in Thee.&rdquo; What are you currently tempted to rest your heart in instead of God? How does this doctrine of sin actually make the gospel more rather than less good news for you personally?
              </label>
              <textarea
                value={journalPersonal}
                onChange={(e) => setJournalPersonal(e.target.value)}
                placeholder="Reflect on where your heart seeks rest..."
                style={{ width: "100%", minHeight: 140, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "12px 14px", resize: "vertical", outline: "none", fontFamily: "inherit", lineHeight: 1.6, boxSizing: "border-box" }}
              />
            </div>
            <div style={{ background: `${RED}10`, border: `1px solid ${RED}30`, borderRadius: 12, padding: "16px 20px" }}>
              <blockquote style={{ margin: 0, fontStyle: "italic", color: MUTED, fontSize: 14, lineHeight: 1.8 }}>
                &ldquo;Original sin is the only part of Christian theology which can really be proved.&rdquo;<br />
                <span style={{ fontSize: 12, marginTop: 6, display: "block", color: RED }}>— G.K. Chesterton, <em>Orthodoxy</em></span>
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
              { label: "Atonement Theories", href: "/atonement-theories" },
              { label: "Salvation", href: "/salvation" },
              { label: "Grace", href: "/grace" },
              { label: "Sanctification", href: "/spiritual-formation" },
              { label: "Forgiveness", href: "/theology-of-forgiveness" },
              { label: "Theodicy", href: "/theodicy" },
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
