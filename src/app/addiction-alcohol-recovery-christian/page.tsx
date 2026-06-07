"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Bondage Is Not the Final Word",
    verse: "John 8:36",
    text: "'So if the Son sets you free, you will be free indeed.' Alcoholism is a form of bondage — physiological, psychological, and spiritual. Freedom is promised by Christ, but it is rarely instantaneous. It is worked out through community, treatment, and the daily surrender of what we cannot control. The promise of freedom sustains the work of recovery.",
  },
  {
    title: "The Body Is Not the Enemy",
    verse: "1 Corinthians 6:19–20",
    text: "The body as temple does not mean the body that struggles with addiction is defiled beyond redemption. It means the body is worth fighting for — worth getting sober for, worth the painful work of detox and therapy and AA meeting at 7am. The body matters. Recovery is an act of body-love.",
  },
  {
    title: "God in the Pit, Not Just at the Summit",
    verse: "Psalm 40:1–2",
    text: "'I waited patiently for the Lord; he turned to me and heard my cry. He lifted me out of the slimy pit, out of the mud and mire.' Recovery begins in the pit. David's testimony is not about spiritual heights — it is about God descending to pull someone out of the lowest place. God does not require sobriety before he meets you.",
  },
  {
    title: "One Day at a Time Is a Theological Statement",
    verse: "Matthew 6:34",
    text: "'Do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.' The 12-step maxim 'one day at a time' is deeply consonant with Jesus's teaching. You do not have to stay sober forever today. You have to not drink today. That is a gift from God — radical present-tense grace.",
  },
  {
    title: "Accountability Is Not Weakness",
    verse: "Ecclesiastes 4:9–10",
    text: "'Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up.' The sponsor, the AA group, the accountability partner — these are the human instruments through which God enacts the promise of Ecclesiastes. Recovery is communal by design.",
  },
];

const voices = [
  {
    id: 1,
    name: "John Baker",
    role: "Founder, Celebrate Recovery",
    quote: "All of us have hurts, habits, and hang-ups. Celebrate Recovery just names the ones we usually hide.",
    bio: "John Baker founded Celebrate Recovery at Saddleback Church as a Christ-centered 12-step program. It has since spread to over 35,000 churches worldwide and helped millions of people find recovery from addiction, abuse, and other struggles within a Christian community context.",
  },
  {
    id: 2,
    name: "William Cope Moyers",
    role: "Author, Broken; Addiction Recovery Advocate",
    quote: "Addiction is a disease. Recovery is a process. Faith is a companion in both.",
    bio: "William Cope Moyers, son of journalist Bill Moyers, has written candidly about his addiction and recovery as a Christian man. His work helps destigmatize addiction in faith communities and shows that recovery and Christian faith are not in tension — they illuminate each other.",
  },
  {
    id: 3,
    name: "Ed Welch",
    role: "Author, Crossroads: A Step-by-Step Guide Away from Addiction; CCEF Faculty",
    quote: "The addict is not primarily a failure — they are a person in whom desires have gone wrong. The gospel addresses desires at the root.",
    bio: "Ed Welch's biblical counseling approach to addiction goes deeper than behavior modification. He addresses the desires and fears that fuel addiction from a gospel perspective, helping recovering Christians understand the theological dimensions of their struggle without reducing it to spiritual failure.",
  },
  {
    id: 4,
    name: "Matt Chandler",
    role: "Pastor & Author",
    quote: "The grace of God is not a license to keep drinking. It is the power to stop.",
    bio: "Matt Chandler has spoken honestly about addiction and recovery in his church community. His preaching on grace emphasizes that the gospel's freedom is not merely positional but transformative — and that communities of grace, not shame, are the primary environment in which transformation happens.",
  },
];

const practices = [
  {
    icon: "🏥",
    title: "Medical Detox First",
    text: "Alcohol withdrawal can be medically dangerous. If you are physically dependent, do not stop drinking without medical supervision. Contact a physician or go to an emergency room first. This is not weakness — it is necessary. Medical safety enables everything else.",
  },
  {
    icon: "🌀",
    title: "Work a 12-Step Program with a Sponsor",
    text: "Alcoholics Anonymous, Celebrate Recovery, and similar programs have decades of evidence behind them. Find a sponsor — someone who has sustained sobriety and will walk you through the steps. The steps are a form of spiritual inventory and community accountability that the church rarely offers in the same concentrated form.",
  },
  {
    icon: "🙏",
    title: "The Serenity Prayer as Daily Theology",
    text: "God, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference. This prayer, recited at every AA meeting, is a compressed theology of sanctification. Pray it daily, slowly, with attention to which category your current struggle belongs in.",
  },
  {
    icon: "📞",
    title: "Build Your Recovery Contact List",
    text: "Before you need it, write down five phone numbers you can call when the urge to drink is strong. Include your sponsor, a church elder, a sober friend, and a crisis line. Post this list where it will be seen — on the fridge, in the car, on the bathroom mirror. The urge to reach for the phone must come faster than the urge to reach for a drink.",
  },
  {
    icon: "🏠",
    title: "Make Your Environment Sober",
    text: "Remove alcohol from your home. Tell your social network what you need. Identify which situations, relationships, and places are high-risk and either avoid them or build new rituals around them. Your environment shapes your behavior more powerfully than your willpower alone.",
  },
  {
    icon: "📓",
    title: "Daily Gratitude and Inventory",
    text: "Each evening, write down three things you are grateful for and one thing you need to address — a resentment, a fear, a dishonest thought. This is the Step 10 daily inventory. Sustained recovery requires sustained self-awareness, offered to God in prayer.",
  },
];

const scriptures = [
  { verse: "John 8:36", text: "So if the Son sets you free, you will be free indeed." },
  { verse: "Psalm 40:1–2", text: "I waited patiently for the Lord; he turned to me and heard my cry. He lifted me out of the slimy pit, out of the mud and mire; he set my feet on a rock and gave me a firm place to stand." },
  { verse: "1 Corinthians 10:13", text: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Philippians 4:13", text: "I can do all this through him who gives me strength." },
  { verse: "Galatians 5:1", text: "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery." },
];

type AAREntry = { id: string; date: string; honest: string; grateful: string; prayer: string };

export default function AddictionAlcoholRecoveryChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AAREntry[]>([]);
  const [honest, setHonest] = useState("");
  const [grateful, setGrateful] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_addictionalcoholrecoverychristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!honest.trim() && !grateful.trim() && !prayer.trim()) return;
    const entry: AAREntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      honest: honest.trim(),
      grateful: grateful.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_addictionalcoholrecoverychristj_entries", JSON.stringify(updated));
    setHonest(""); setGrateful(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_addictionalcoholrecoverychristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌊</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Alcohol Addiction & Christian Recovery
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For Christians struggling with alcohol — finding grace in the struggle, the community
            to walk it, and the God who meets us in the pit before the summit.
          </p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a2020", borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: "#f87171", fontWeight: "bold", margin: "0 0 0.5rem" }}>If you need immediate help:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            SAMHSA: <strong style={{ color: TEXT }}>1-800-662-4357</strong> |{" "}
            <a href="https://www.celebraterecovery.com" style={{ color: GREEN }}>celebraterecovery.com</a> |{" "}
            <a href="https://www.aa.org" style={{ color: GREEN }}>aa.org</a> |{" "}
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
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Where are you honestly in your recovery today?</label>
              <textarea value={honest} onChange={(e) => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What are you grateful for in your sobriety today — even if it&apos;s just today?</label>
              <textarea value={grateful} onChange={(e) => setGrateful(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for today — one day at a time:</label>
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
                    {e.grateful && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Grateful: </span>{e.grateful}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="NnGBhG03g4M" title="Celebrate Recovery — Stories of Freedom" />
            <VideoEmbed videoId="ZGk1hl1nNrw" title="Alcohol Addiction and the Gospel of Grace" />
            <VideoEmbed videoId="j2h-q3ZPKFI" title="One Day at a Time — Christian Recovery Stories" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for the Recovering Addict" />
          </div>
        )}
      </div>
    </div>
  );
}
