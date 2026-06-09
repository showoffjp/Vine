"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

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
  { id: "definition", label: "What Is Sin?" },
  { id: "fall", label: "The Fall" },
  { id: "depravity", label: "Total Depravity" },
  { id: "types", label: "Types of Sin" },
  { id: "deceit", label: "Deceitfulness of Sin" },
  { id: "gospel", label: "Gospel Response" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const SIN_TEXTS = [
  { ref: "Romans 3:23", text: "For all have sinned and fall short of the glory of God.", color: RED },
  { ref: "Isaiah 53:6", text: "We all, like sheep, have gone astray, each of us has turned to our own way; and the LORD has laid on him the iniquity of us all.", color: GOLD },
  { ref: "Romans 7:18–19", text: "I know that good itself does not dwell in me, that is, in my sinful nature. For I have the desire to do what is good, but I cannot carry it out.", color: BLUE },
  { ref: "1 John 1:8–9", text: "If we claim to be without sin, we deceive ourselves and the truth is not in us. If we confess our sins, he is faithful and just and will forgive us our sins.", color: TEAL },
  { ref: "Romans 6:23", text: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.", color: GREEN },
];

const SIN_DEFINITIONS = [
  {
    title: "1 John 3:4 — Lawlessness",
    desc: "Sin is lawlessness (anomia) — violation of God's law. This is the simplest and most direct definition: sin is doing what God has forbidden or failing to do what he commands. It is primarily relational — an offense against God's revealed will.",
    color: RED,
  },
  {
    title: "Romans 14:23 — Lack of Faith",
    desc: "Anything not done from faith is sin. This expands the definition beyond specific acts of transgression to the orientation of the heart: acting without trust in God, apart from his guidance, for one's own purposes. Sin has an interior dimension — not just external acts.",
    color: BLUE,
  },
  {
    title: "Falling Short of God's Glory (Romans 3:23)",
    desc: "To 'fall short' (hystereo) of the glory of God is to fail to reflect, honor, and represent God as image-bearers were designed to do. Sin is not merely breaking rules but failing to be what we were made for — creatures living for the glory of their Creator.",
    color: GOLD,
  },
  {
    title: "Injustice / Unrighteousness (1 John 5:17)",
    desc: "All unrighteousness (adikia) is sin. This connects the personal and social dimensions — sin involves failures of justice and righteousness, not only personal piety. Sin against God and sin against neighbor are not ultimately separable.",
    color: TEAL,
  },
  {
    title: "Missing the Mark (Hamartia)",
    desc: "The most common NT word for sin (hamartia) means missing the mark — like an arrow falling short of its target. This captures the teleological dimension: sin is failing to fulfill one's proper end (telos). Humans were made for communion with God; sin is the departure from that design.",
    color: GREEN,
  },
];

const FALL_CONTENT = [
  {
    title: "The Historical Fall (Genesis 3)",
    desc: "The Serpent's temptation targeted Eve's trust in God's character — 'Did God really say...?' The sin was not merely eating fruit but the underlying distrust, the desire to be like God on their own terms, and the rejection of creatureliness. The consequences were immediate (shame, hiding, broken relationship) and cosmic (death, toil, pain, enmity).",
    color: RED,
  },
  {
    title: "Original Sin: The Doctrine",
    desc: "Original sin refers to both (1) the sin of Adam and Eve and (2) the corrupted nature inherited by all their descendants. It involves original guilt (all humans are legally guilty in Adam) and original corruption (the human nature is bent toward sin, not toward God).",
    color: GOLD,
  },
  {
    title: "Imputation of Adam's Sin (Romans 5:12–21)",
    desc: "Paul's Adam-Christ typology holds that all sinned in Adam, and his sin was imputed to all. As Christ's righteousness is imputed to those in him, Adam's guilt is imputed to those in him. The mechanism: federal (representative) headship or natural/seminal union. Most Reformed theologians hold the former.",
    color: BLUE,
  },
  {
    title: "The Transmission of Corruption",
    desc: "How does sin's corruption pass to all humans? Augustine: through natural generation (involving concupiscence — disordered desire). The Reformation broadly followed Augustine. Pelagius denied inherited corruption — each person begins innocent and sins by their own choice. Pelagianism was condemned at the Council of Carthage (418).",
    color: TEAL,
  },
  {
    title: "Pelagianism, Semi-Pelagianism, Augustinianism",
    desc: "Pelagius (condemned 418): humans are born morally neutral; sin is only imitation of Adam. Semi-Pelagianism: humans are weakened but can take the first step toward God. Augustinian (affirmed at Orange 529 and maintained in Reformed theology): humans are spiritually dead; only divine grace can initiate salvation.",
    color: PURPLE,
  },
];

const DEPRAVITY_CONTENT = [
  {
    title: "What Total Depravity Does NOT Mean",
    desc: "It does not mean: every person is as sinful as possible, incapable of any good deed, without any restraint from evil, devoid of conscience. Even fallen humans retain the image of God, are restrained by common grace, can love their families, create beauty, and pursue justice.",
    color: GREEN,
  },
  {
    title: "What Total Depravity DOES Mean",
    desc: "Every aspect of human nature is affected by sin — mind (Rom 1:21; Eph 4:18), will (Rom 8:7–8; John 6:44), emotions (Jer 17:9; Eph 4:17–19), and body (Rom 8:10). No part of the person is untouched. Most crucially: without divine grace, the sinner is unable and unwilling to turn to God for salvation.",
    color: RED,
  },
  {
    title: "Total Inability",
    desc: "The most practically significant aspect: fallen humans cannot, by their own will, believe in and embrace the gospel. 'The natural person does not accept the things of the Spirit of God, for they are folly to him, and he is not able to understand them because they are spiritually discerned' (1 Cor 2:14). This establishes the necessity of regeneration — the new birth must precede saving faith.",
    color: BLUE,
  },
  {
    title: "Common Grace",
    desc: "God restrains the full expression of human sinfulness through common grace — the general blessing given to all regardless of election. This includes conscience (Rom 2:14–15), civil government (Rom 13:1–4), restraining providences, and the capacity for human flourishing. Without it, society would be unlivable.",
    color: GOLD,
  },
];

const SIN_TYPES = [
  { title: "Sins of Commission", desc: "Doing what is forbidden — actively transgressing God's commands. The most obvious form of sin: lying, stealing, murder, adultery, idolatry.", color: RED },
  { title: "Sins of Omission", desc: "Failing to do what is commanded — 'to him who knows the right thing to do and doesn't do it, to him it is sin' (James 4:17). Often unnoticed because they lack visible acts.", color: GOLD },
  { title: "Sins of Ignorance", desc: "Sins committed without full awareness. The OT distinguished unintentional sins (atonement available) from intentional 'high-handed' sins (Num 15:30–31). The NT recognizes degrees of culpability based on knowledge (Luke 12:47–48).", color: BLUE },
  { title: "The Unforgivable Sin", desc: "Blasphemy against the Holy Spirit (Matt 12:31–32) — attributing the Spirit's works to Satan and hardening oneself against the Spirit's testimony. The concern in Scripture is not accidental blasphemy but a willful, settled rejection. Those who fear they have committed it almost certainly haven't.", color: PURPLE },
  { title: "Corporate / Social Sin", desc: "Sin is not only individual. Social structures, systems, and cultures can embody and perpetuate sin — racism, economic exploitation, institutional abuse. The OT prophets speak extensively of corporate guilt (Amos, Isaiah, Micah). Both individuals and communities bear responsibility.", color: TEAL },
  { title: "Sins of the Heart", desc: "Jesus's Sermon on the Mount interiorizes the law — lust is adultery of the heart; hatred is murder of the heart (Matt 5:21–22, 27–28). Sin originates in the heart's disordered desires before finding expression in action. The Reformation tradition speaks of the 'heart' as the center of the person.", color: GREEN },
];

const DECEIT_CONTENT = [
  { title: "Jeremiah 17:9", desc: "'The heart is deceitful above all things and beyond cure. Who can understand it?' The danger of sin is not just its harm but its ability to disguise itself — to make evil look good, to make self-destruction feel like self-fulfillment.", color: RED },
  { title: "Hebrews 3:13", desc: "'Exhort one another every day... that none of you may be hardened by the deceitfulness of sin.' Sin progressively hardens — what began as a small compromise gradually deadens the conscience. This is why daily exhortation in community is not optional.", color: GOLD },
  { title: "The Progression of Temptation (James 1:14–15)", desc: "'Each person is tempted when they are lured and enticed by their own desire. Then desire when it has conceived gives birth to sin, and sin when it is fully grown brings forth death.' Three stages: desire, sin, death. The key is addressing desire before it becomes action.", color: BLUE },
  { title: "Rationalizations", desc: "Sin specializes in plausible excuses: 'It's not that bad,' 'Everyone does it,' 'God will forgive me,' 'I'll stop tomorrow,' 'I deserve this.' John Owen identified the self-deception at the heart of indwelling sin as one of its most dangerous features.", color: TEAL },
  { title: "The Need for Community", desc: "We cannot reliably diagnose our own sin. This is why Hebrews 3 prescribes communal exhortation and James 5:16 prescribes mutual confession. The Christian life is not a solo project. Community provides the outside perspective sin works to obscure.", color: GREEN },
];

const GOSPEL_RESPONSE = [
  {
    title: "Forgiveness and Justification",
    desc: "The primary good news: in Christ, sin is forgiven. Not merely overlooked or covered — the penalty is paid, the guilt is removed, and the sinner is declared righteous. This is the irreducible center of the gospel (Rom 3:21–26; 1 John 2:1–2).",
    color: GREEN,
  },
  {
    title: "Mortification: Killing Sin",
    desc: "John Owen's great work 'Of the Mortification of Sin' draws on Romans 8:13: 'if by the Spirit you put to death the deeds of the body, you will live.' Mortification is the active, ongoing work of attacking and weakening sinful habits and desires — not through willpower alone but by the Spirit's power.",
    color: BLUE,
  },
  {
    title: "Vivification: Putting on the New Self",
    desc: "Ephesians 4:22–24: 'put off the old self... put on the new self, created after the likeness of God.' Mortification and vivification go together — it is not enough to stop sinning; one must grow in virtue. The fight against sin includes replacing sinful habits with holy ones.",
    color: TEAL,
  },
  {
    title: "Confession and Repentance",
    desc: "1 John 1:9: ongoing confession is God's gracious provision for ongoing sin in the believer's life. Repentance (metanoia — change of mind) is not a feeling of remorse but a turning — from sin toward God. Both are enabled by the Spirit and fueled by the gospel: we repent because forgiveness is sure, not to earn forgiveness.",
    color: GOLD,
  },
  {
    title: "The Final Defeat of Sin",
    desc: "Sin will not always be our struggle. At glorification, believers receive resurrection bodies not subject to sin's power (1 John 3:2; Rom 8:23). The present struggle is real — but temporary. The eschatological perspective transforms the fight: 'we know that our old self was crucified with him... so that we would no longer be enslaved to sin' (Rom 6:6).",
    color: PURPLE,
  },
];

const VIDEOS = [
  { videoId: "4MwVvFVh65I", title: "What Is Sin? — R.C. Sproul" },
  { videoId: "h7jTGv6Bcfc", title: "Total Depravity — John Piper" },
  { videoId: "WLBvU3LdSNk", title: "The Deceitfulness of Sin — Paul Tripp" },
  { videoId: "A73LF3C8bxE", title: "Killing Sin — John Owen on Mortification" },
  { videoId: "qLKC82RXL3M", title: "Original Sin and the Fall — Tim Keller" },
];

export default function HamartiologyGuidePage() {
  const [tab, setTab] = useLocalStorage("vine_hamart_tab", "overview");
  const [openDef, setOpenDef] = useLocalStorage("vine_hamart_def", "");
  const [openFall, setOpenFall] = useLocalStorage("vine_hamart_fall", "");
  const [openType, setOpenType] = useLocalStorage("vine_hamart_type", "");
  const [openDeceit, setOpenDeceit] = useLocalStorage("vine_hamart_dec", "");
  const [journal, setJournal] = useLocalStorage("vine_hamart_journal", "");

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };
  const accordionBtn = (open: boolean, color: string) => ({
    width: "100%", textAlign: "left" as const, display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "1rem 1.25rem", background: open ? `${color}12` : "transparent",
    border: `1px solid ${open ? color + "40" : BORDER}`, borderRadius: 12, cursor: "pointer", marginBottom: 8,
    color: TEXT, fontWeight: 700, transition: "all .2s",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>⚠️</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: RED, textTransform: "uppercase" }}>Systematic Theology</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Hamartiology: The Theology of Sin
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }}>
            What is sin? Where did it come from? Why is it so pervasive and powerful — and so difficult to see in ourselves? Hamartiology is the theological study of sin: its definition, origin, nature, deceitfulness, and how the gospel addresses it.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? RED : "transparent", color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? RED : BORDER}`, cursor: "pointer", transition: "all .18s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div>
            <div style={{ ...card, marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: RED }}>Key Texts on Sin</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {SIN_TEXTS.map((t) => (
                  <div key={t.ref} style={{ background: `${t.color}10`, border: `1px solid ${t.color}30`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${t.color}` }}>
                    <span style={{ fontWeight: 800, color: t.color, fontSize: "0.85rem" }}>{t.ref}</span>
                    <p style={{ color: TEXT, lineHeight: 1.7, marginTop: "0.3rem" }}>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: GOLD }}>Why Hamartiology Matters</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                {[
                  { label: "Explains Human Experience", desc: "Why do we all experience guilt, failure, and moral struggle? Sin is not a cultural construct but a theological reality embedded in human nature.", color: RED },
                  { label: "Makes the Gospel Necessary", desc: "The gospel is good news only to those who understand the bad news. Without a robust doctrine of sin, the cross is merely admirable — not urgent.", color: GOLD },
                  { label: "Shapes Pastoral Ministry", desc: "Counseling, preaching, and pastoral care that underestimate sin will offer inadequate solutions. The deceitfulness of sin must be named and addressed.", color: BLUE },
                  { label: "Grounds the Call to Holiness", desc: "Understanding sin's nature and power motivates the serious pursuit of holiness. Half-hearted Christian living reflects a half-formed understanding of what sin is.", color: GREEN },
                ].map((item) => (
                  <div key={item.label} style={{ background: `${item.color}0A`, border: `1px solid ${item.color}25`, borderRadius: 12, padding: "1rem" }}>
                    <div style={{ fontWeight: 800, color: item.color, marginBottom: "0.4rem" }}>{item.label}</div>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "definition" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: RED }}>What Is Sin? Biblical Definitions</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Scripture uses multiple terms and metaphors for sin, each illuminating a different dimension. No single definition captures the whole.
            </p>
            {SIN_DEFINITIONS.map((item, i) => {
              const key = String(i);
              const open = openDef === key;
              return (
                <div key={item.title}>
                  <button type="button" style={accordionBtn(open, item.color)} onClick={() => setOpenDef(open ? "" : key)}>
                    <span>{item.title}</span>
                    <span style={{ color: item.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "fall" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: GOLD }}>The Fall and Original Sin</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              How did sin enter the world? The historical fall of Adam and Eve and the doctrine of original sin explain not just the first sin but the condition of the entire human race.
            </p>
            {FALL_CONTENT.map((item, i) => {
              const key = String(i);
              const open = openFall === key;
              return (
                <div key={item.title}>
                  <button type="button" style={accordionBtn(open, item.color)} onClick={() => setOpenFall(open ? "" : key)}>
                    <span>{item.title}</span>
                    <span style={{ color: item.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "depravity" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: BLUE, margin: 0 }}>Total Depravity</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              &quot;Total depravity&quot; is the Calvinist (and broadly Augustinian) doctrine that sin has affected every part of human nature. It is one of the most misunderstood doctrines in Christian theology.
            </p>
            {DEPRAVITY_CONTENT.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "types" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: TEAL }}>Types and Dimensions of Sin</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Scripture does not treat sin as monolithic. There are distinctions in type, culpability, and dimension — all important for honest self-examination and faithful pastoral ministry.
            </p>
            {SIN_TYPES.map((item, i) => {
              const key = String(i);
              const open = openType === key;
              return (
                <div key={item.title}>
                  <button type="button" style={accordionBtn(open, item.color)} onClick={() => setOpenType(open ? "" : key)}>
                    <span>{item.title}</span>
                    <span style={{ color: item.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "deceit" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>The Deceitfulness of Sin</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              John Owen wrote: &quot;Be killing sin, or sin will be killing you.&quot; His great contribution to Christian spirituality was exposing how sin disguises itself, rationalizes itself, and progressively hardens the heart.
            </p>
            {DECEIT_CONTENT.map((item, i) => {
              const key = String(i);
              const open = openDeceit === key;
              return (
                <div key={item.title}>
                  <button type="button" style={accordionBtn(open, item.color)} onClick={() => setOpenDeceit(open ? "" : key)}>
                    <span>{item.title}</span>
                    <span style={{ color: item.color }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ background: `${item.color}0A`, border: `1px solid ${item.color}20`, borderRadius: 10, padding: "1rem 1.25rem", marginBottom: 8 }}>
                      <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "gospel" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", color: GREEN, margin: 0 }}>The Gospel&apos;s Response to Sin</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>
              The gospel is God&apos;s answer to sin — in all its dimensions. Forgiveness addresses guilt; regeneration addresses corruption; sanctification addresses the power of indwelling sin; glorification addresses sin&apos;s final presence.
            </p>
            {GOSPEL_RESPONSE.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ fontWeight: 800, color: item.color, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem", color: PURPLE }}>Personal Reflection</h2>
            <p style={{ color: MUTED, marginBottom: "1rem" }}>Where do you see sin&apos;s deceitfulness at work in your life right now? What would it look like to take it more seriously — and to rely more fully on the gospel&apos;s provision?</p>
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 200, background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
            />
            {journal && <div style={{ marginTop: "0.75rem", fontSize: "0.82rem", color: MUTED }}>Auto-saved · {journal.length} characters</div>}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem", color: TEAL }}>Video Teaching on Sin and the Gospel</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {VIDEOS.map((v) => (
                <div key={v.videoId}>
                  <div style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{v.title}</div>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 12, overflow: "hidden" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "Soteriology Guide", href: "/soteriology-guide" },
            { label: "Sanctification", href: "/sanctification" },
            { label: "Repentance", href: "/repentance" },
            { label: "Justification by Faith", href: "/justification-by-faith" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.82rem", fontWeight: 700, border: `1px solid ${BORDER}`, color: MUTED, textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
