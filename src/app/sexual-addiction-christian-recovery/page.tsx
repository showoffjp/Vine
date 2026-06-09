"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "The Body Was Made for More Than This",
    verse: "1 Corinthians 6:13",
    text: "'The body is not meant for sexual immorality but for the Lord, and the Lord for the body.' Paul's argument is not merely prohibitive — it is positive. The body is meant for something: for God, for the other person, for the fullness of relationship that pornography and compulsive sexual behavior cannot deliver. Recovery is not merely about stopping; it is about recovering what the body was made for.",
  },
  {
    title: "Shame vs. Conviction",
    verse: "Romans 8:1",
    text: "'There is now no condemnation for those who are in Christ Jesus.' Shame drives the addict deeper into secrecy, which fuels the addiction. Conviction — the Holy Spirit's specific call to turn — opens toward healing. The gospel makes this distinction crucial: God's response to sexual sin is not condemnation but an invitation to freedom.",
  },
  {
    title: "The Double Life Cannot Endure",
    verse: "Proverbs 28:13",
    text: "'Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy.' Sexual addiction thrives in secrecy. The decision to confess — to God, to a spouse, to a trusted person — is among the most terrifying and most liberating acts available. Mercy awaits disclosure, not performance.",
  },
  {
    title: "Desire Is Not the Enemy",
    verse: "Psalm 42:1",
    text: "'As the deer pants for streams of water, so my soul pants for you, my God.' Sexual desire, rightly ordered, reflects the human longing for union and belonging that points ultimately toward God. Addiction is desire disordered and enslaved — not desire itself. Recovery aims to liberate desire, not extinguish it.",
  },
  {
    title: "The God Who Meets You There",
    verse: "Hosea 2:14",
    text: "'Therefore I am now going to allure her; I will lead her into the wilderness and speak tenderly to her.' God's response to Israel's sexual unfaithfulness is not abandonment but pursuit — speaking tenderly into the wilderness of consequence and recovery. This is the God who pursues even the sexually broken.",
  },
];

const voices = [
  {
    id: 1,
    name: "Mark Laaser",
    role: "Founder, Faithful & True Ministries; Author",
    quote: "Sexual addiction is always about trying to meet legitimate needs in illegitimate ways. Recovery means learning to meet those needs rightly.",
    bio: "Mark Laaser is a pioneer in Christian sexual addiction recovery. His own recovery from sex addiction, and subsequent decades of clinical and pastoral work, have provided frameworks used by thousands of Christian men and women navigating compulsive sexual behavior and pornography addiction.",
  },
  {
    id: 2,
    name: "Jay Stringer",
    role: "Author, Unwanted; Therapist",
    quote: "Your unwanted sexual behavior is telling a story about your life. Healing means being willing to hear the story.",
    bio: "Jay Stringer's research-based approach to sexual addiction goes beneath the behavior to the narrative beneath it — the formative experiences, wounds, and longings that drive compulsive sexual behavior. His work is among the most sophisticated Christian treatments of the subject.",
  },
  {
    id: 3,
    name: "Juli Slattery",
    role: "Founder, Authentic Intimacy; Clinical Psychologist",
    quote: "Shame is the enemy of recovery. The church that names sexual struggle without shaming it creates the only environment in which healing can happen.",
    bio: "Juli Slattery works at the intersection of sexuality, spirituality, and psychological health. She helps churches create cultures in which sexual struggle can be named without shame — the only conditions under which recovery becomes possible for most people.",
  },
  {
    id: 4,
    name: "Rachael Denhollander",
    role: "Survivor Advocate & Author",
    quote: "Sexual sin — especially when it involves exploitation — must be named as such. The church's tendency to soften it has compounded harm and delayed healing.",
    bio: "Rachael Denhollander has become one of the most important voices in the church on sexual abuse, exploitation, and the church's response to sexual sin. She challenges both minimization and moralism, insisting on gospel honesty about the real harm of sexual behavior.",
  },
];

const practices = [
  {
    icon: "🔓",
    title: "Disclosure to a Safe, Trained Person",
    text: "Full recovery from sexual addiction requires disclosure. This is terrifying — and it is the beginning of freedom. Find a therapist trained in sexual addiction, a pastor with experience, or a 12-step sponsor in a program like Celebrate Recovery or SA (Sexaholics Anonymous). You cannot recover alone in silence.",
  },
  {
    icon: "📱",
    title: "Accountability Software and Structure",
    text: "Remove access to pornography through filtering software (Covenant Eyes, Bark), device changes, and environmental restructuring. Accountability software alone does not produce recovery, but removing easy access reduces the cognitive load on early recovery significantly.",
  },
  {
    icon: "🧑‍⚕️",
    title: "Therapist Specializing in Sexual Addiction",
    text: "Sexual addiction has specific psychological dynamics — trauma, attachment wounds, shame cycles, neurological conditioning — that require a specialist. General counseling often misses these. Seek a therapist certified in sexual addiction treatment (CSAT) who integrates faith.",
  },
  {
    icon: "🤝",
    title: "A Same-Sex Community of Recovery",
    text: "12-step programs for sexual addiction (SA, SAA, Celebrate Recovery's sexual purity groups) provide the experience of being known in your struggle and not abandoned. Hearing others' stories reduces shame, provides accountability, and offers the experience of grace extended to people like you.",
  },
  {
    icon: "🧠",
    title: "Understand the Underlying Story",
    text: "Sexual addiction rarely develops in a vacuum. Past trauma, early exposure, attachment wounds, loneliness — these are the soil in which it grows. Work with your therapist to understand what the behavior has been providing — comfort, control, escape, connection — and how to meet those needs otherwise.",
  },
  {
    icon: "🙏",
    title: "Daily Surrender, Not Just Resolution",
    text: "Recovery from sexual addiction is one day at a time. Each day, surrender the day to God before the temptation appears: 'I cannot do today without you.' Pair this with the specific practices your therapist and sponsor have identified. Willpower alone is insufficient; surrender + structure is the path.",
  },
];

const scriptures = [
  { verse: "1 Corinthians 6:18–20", text: "Flee from sexual immorality. All other sins a person commits are outside the body, but whoever sins sexually, sins against their own body. Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Proverbs 28:13", text: "Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy." },
  { verse: "Galatians 5:1", text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery." },
  { verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
  { verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed." },
];

type SAREntry = { id: string; date: string; honest: string; need: string; prayer: string };

export default function SexualAddictionChristianRecoveryPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SAREntry[]>([]);
  const [honest, setHonest] = useState("");
  const [need, setNeed] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_sexualaddictionchristrecoveryj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!honest.trim() && !need.trim() && !prayer.trim()) return;
    const entry: SAREntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      honest: honest.trim(),
      need: need.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_sexualaddictionchristrecoveryj_entries", JSON.stringify(updated));
    setHonest(""); setNeed(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_sexualaddictionchristrecoveryj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🔓</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Sexual Addiction & Christian Recovery
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For Christians struggling with pornography, compulsive sexual behavior, or sexual
            addiction — finding the freedom Christ promises through honesty, help, and community.
          </p>
        </div>

        <div style={{ background: "#0a1a0a", border: `1px solid ${GREEN}40`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>Support resources:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://www.faithfulandtrue.com" style={{ color: GREEN }}>faithfulandtrue.com</a> |{" "}
            <a href="https://www.covenanteyes.com" style={{ color: GREEN }}>covenanteyes.com</a> |{" "}
            Crisis Text Line: text <strong style={{ color: TEXT }}>HOME</strong> to <strong style={{ color: TEXT }}>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : CARD, color: TEXT, cursor: "pointer", fontSize: "0.875rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.25rem" }}>{v.name}</h3>
                <div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic" }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ color: TEXT, fontSize: "1rem", margin: "0 0 0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Daily Inventory</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>This journal is private and stored only on your device.</p>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Where are you honestly in your recovery today?</label>
              <textarea value={honest} onChange={(e) => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What does your soul really need today that the addiction cannot provide?</label>
              <textarea value={need} onChange={(e) => setNeed(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer of surrender for today:</label>
              <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {entries.map((e) => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                      <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                    </div>
                    {e.honest && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Honest: </span>{e.honest}</p>}
                    {e.need && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Need: </span>{e.need}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="NnGBhG03g4M" title="Breaking Free — Sexual Addiction and the Gospel" />
            <VideoEmbed videoId="ZGk1hl1nNrw" title="Pornography, Shame, and Recovery in the Church" />
            <VideoEmbed videoId="j2h-q3ZPKFI" title="The Story Beneath the Behavior — Jay Stringer" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Freedom from Sexual Addiction" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
