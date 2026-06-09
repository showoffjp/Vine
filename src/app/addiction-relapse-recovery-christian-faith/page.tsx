"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

const theology = [
  {
    title: "Relapse Is Not the End",
    body: "Relapse is a feature of addiction recovery, not a verdict on the person. The American Society of Addiction Medicine classifies addiction as a chronic brain disorder — like diabetes or hypertension — that requires ongoing management. Relapse rates for addiction are similar to relapse rates for these other chronic conditions. This is not an excuse; it is a medical reality that demands compassion and persistence rather than shame and abandonment. You relapsed. You are not lost. Recovery is still possible.",
  },
  {
    title: "The Seventy Times Seven Theology",
    body: "Peter asked Jesus how many times he should forgive someone who sins against him — up to seven times? Jesus said 'not seven, but seventy times seven' (Matt 18:21-22). This is not a formula for enabling harm; it is a picture of grace that does not calculate worthiness. If Jesus calls Peter to this posture toward others, how much more does He extend it toward the person who is struggling to find sobriety? God's grace for the relapsing person is not exhausted by the number of attempts.",
  },
  {
    title: "Shame Is the Enemy of Recovery",
    body: "The leading addiction researcher Brené Brown and Christian counselors alike have documented the same dynamic: shame — 'I am bad' rather than 'I did a bad thing' — is the most powerful driver of addictive behavior. People who have relapsed and feel profoundly ashamed are more likely to use again, not less. The gospel's announcement that there is 'no condemnation for those who are in Christ Jesus' (Rom 8:1) is not moral softness; it is the clinical and spiritual precondition for recovery.",
  },
  {
    title: "Getting Up After Falling",
    body: "Proverbs 24:16 describes the righteous person not as someone who never falls but as someone who 'falls seven times and rises again.' The falling is not the story; the rising is. Every day of sobriety that follows a relapse is a rising. The person who has relapsed and chosen to return to recovery is demonstrating extraordinary courage — the willingness to face the shame, the disappointment of loved ones, and the work of rebuilding, and to choose recovery anyway.",
  },
  {
    title: "Long-Term Recovery as Long-Term Discipleship",
    body: "Sustained recovery from addiction is not a single decision; it is a daily practice of choosing life over substance, which is why it maps so naturally onto the structure of Christian discipleship. The daily surrender, the honesty about powerlessness, the reliance on a Higher Power, the accountability of community, the amends and reconciliation — these are not secular practices that happen to help addicts; they are the shape of a life oriented toward God rather than toward self.",
  },
];

const voices = [
  {
    name: "Bob Herbst",
    role: "Celebrate Recovery founder, Pastor Rick Warren's son-in-law",
    quote: "Celebrate Recovery isn't just for people with 'big' problems. It's for everyone who has hurts, hang-ups, and habits — which is everyone. Relapse doesn't disqualify you from being part of us.",
  },
  {
    name: "Brené Brown",
    role: "Researcher and author, Daring Greatly",
    quote: "Shame is the swampland of the soul. You can't heal in the middle of shame. Connection — being known and not condemned — is what makes healing possible.",
  },
  {
    name: "Johann Hari",
    role: "Author, Chasing the Scream",
    quote: "The opposite of addiction is not sobriety. The opposite of addiction is connection. And our whole society has been obsessed with individual recovery and not with collective healing.",
  },
  {
    name: "Patrick Carnes",
    role: "Addiction researcher and author",
    quote: "Recovery is not the absence of relapse. Recovery is the capacity to return — to community, to care, to the program — even after a fall. That is what recovery looks like in real life.",
  },
];

const practices = [
  {
    title: "Get Back into Treatment Immediately",
    body: "After a relapse, the first priority is returning to care — not waiting until you 'really' want to stop, not white-knuckling it alone. Contact your counselor, your sponsor, your treatment program. If outpatient isn't enough, consider a step up to more intensive care. If you are using opioids and have relapsed, contact your prescriber about medication-assisted treatment (buprenorphine/naloxone or methadone) — which dramatically reduces relapse rates and prevents overdose death.",
  },
  {
    title: "Tell Your Support Network",
    body: "The impulse after relapse is to hide — from the shame, from the disappointment of people who care about you, from the accountability you need most. Go toward community, not away from it. Tell your sponsor, your accountability partner, your recovery community. The disclosure is itself part of recovery — it ends the secrecy that enabled the relapse and reconnects you to the accountability that supports sobriety.",
  },
  {
    title: "Analyze What Happened",
    body: "Relapse rarely comes out of nowhere. Identifying the sequence — the people, places, things, emotions, or situations that preceded the relapse — is how you learn and prevent next time. This is not about self-blame; it is about self-knowledge. What was your last thought before you used? What were you feeling? What need were you trying to meet? This analysis, done with a sponsor or counselor, builds the relapse prevention skills that protect future sobriety.",
  },
  {
    title: "Celebrate Recovery and 12-Step Programs",
    body: "Celebrate Recovery (celebraterecovery.com) is a Christ-centered 12-step program in thousands of churches. Alcoholics Anonymous (aa.org) and Narcotics Anonymous (na.org) offer free, daily meetings worldwide. After a relapse, the most important thing you can do is go to a meeting today — not tomorrow, today. Many people in these programs have relapsed multiple times before finding lasting sobriety. You will not be judged; you will be welcomed back.",
  },
  {
    title: "Medication-Assisted Treatment (MAT)",
    body: "If you are recovering from opioid use disorder and have relapsed, medication-assisted treatment (buprenorphine or methadone) is the most evidence-based treatment available and significantly reduces overdose risk. The stigma against MAT in some Christian recovery communities is not theologically grounded — accepting medication that helps your brain function is stewardship, not weakness. SAMHSA's helpline (1-800-662-4357) can help find MAT providers.",
  },
  {
    title: "Address the Underlying Causes",
    body: "Relapse often reveals that something in the underlying treatment was incomplete — untreated trauma, undertreated depression or anxiety, a medication that isn't working, a social environment that hasn't changed. Ask your treatment team: 'What does this relapse tell us about what we haven't addressed yet?' Recovery from a relapse is an opportunity for a more thorough treatment plan — not just a return to what wasn't quite working before.",
  },
];

const scriptures = [
  {
    ref: "Proverbs 24:16",
    text: "For though the righteous fall seven times, they rise again, but the wicked stumble when calamity strikes.",
  },
  {
    ref: "Romans 8:1",
    text: "Therefore, there is now no condemnation for those who are in Christ Jesus.",
  },
  {
    ref: "Lamentations 3:22-23",
    text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
  },
  {
    ref: "Matthew 18:21-22",
    text: "Then Peter came to Jesus and asked, 'Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?' Jesus answered, 'I tell you, not seven times, but seventy-seven times.'",
  },
  {
    ref: "Isaiah 43:18-19",
    text: "Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it?",
  },
  {
    ref: "Psalm 103:12",
    text: "As far as the east is from the west, so far has he removed our transgressions from us.",
  },
];

const JOURNAL_KEY = "vine_addiction_relapse_recovery_entries";

interface JournalEntry {
  id: string;
  date: string;
  text: string;
}

const videos = [
  { videoId: "4Eg_di-O8nM", title: "God Is Working – Elevation Church" },
  { videoId: "hJkLBPIbZr4", title: "No Condemnation – Steven Furtick" },
  { videoId: "sIaT8Jl2zpI", title: "You Say – Lauren Daigle" },
  { videoId: "G-2e9mMf7E8", title: "Gospel of John – BibleProject" },
];

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", background: CARD, border: `1px solid ${BORDER}` }}>
      {playing ? (
        <iframe
          width="100%"
          style={{ aspectRatio: "16/9", display: "block" }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          onClick={() => setPlaying(true)}
          style={{ position: "relative", cursor: "pointer", aspectRatio: "16/9", background: "linear-gradient(135deg, #0a1a0e 0%, #061008 100%)" }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
              <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: `18px solid white`, marginLeft: 4 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding: "12px 16px", color: MUTED, fontSize: 14 }}>{title}</div>
    </div>
  );
}

export default function AddictionRelapsePage() {
  const [activeTab, setActiveTab] = useState("Theology");
  const [journalText, setJournalText] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });

  function saveEntry() {
    if (!journalText.trim()) return;
    const entry: JournalEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), text: journalText.trim() };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setJournalText("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: GREEN + "22", border: `1px solid ${GREEN}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GREEN, marginBottom: 16 }}>
            Addiction & Recovery
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Addiction Relapse Recovery
          </h1>
          <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            The righteous fall seven times and rise again. Relapse is not the final chapter. Recovery is still possible, and it begins today.
          </p>
        </div>

        {/* Crisis Banner */}
        <div style={{ background: "#0d1a10", border: `2px solid ${GREEN}`, borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
          <div style={{ fontWeight: 700, color: GREEN, marginBottom: 8 }}>Get Help Now</div>
          <div style={{ color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
            <strong>SAMHSA National Helpline: 1-800-662-4357</strong> — free, confidential, 24/7
          </div>
          <div style={{ color: MUTED, fontSize: 13, marginTop: 12, lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Celebrate Recovery:</strong> celebraterecovery.com<br />
            <strong style={{ color: TEXT }}>AA:</strong> aa.org — find a meeting today<br />
            <strong style={{ color: TEXT }}>988 Lifeline:</strong> call or text 988 — 24/7 crisis support
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${activeTab === tab ? GREEN : BORDER}`, background: activeTab === tab ? GREEN + "22" : "transparent", color: activeTab === tab ? GREEN : MUTED, cursor: "pointer", fontSize: 14, fontWeight: activeTab === tab ? 600 : 400 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: GREEN, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ fontWeight: 700, color: TEXT, fontSize: 16 }}>{v.name}</div>
                <div style={{ color: GREEN, fontSize: 13, marginBottom: 14 }}>{v.role}</div>
                <blockquote style={{ margin: 0, padding: "14px 18px", borderLeft: `3px solid ${GREEN}`, background: GREEN + "11", borderRadius: "0 8px 8px 0", color: MUTED, lineHeight: 1.8, fontStyle: "italic" }}>
                  "{v.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {practices.map((p) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: GREEN, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontStyle: "italic", fontSize: 16 }}>"{s.text}"</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Journal" && (
          <div>
            <p style={{ color: MUTED, marginBottom: 20, lineHeight: 1.7 }}>
              What happened? What do you need? What's the next step? Your entries are saved locally on this device only.
            </p>
            <textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Write here..."
              style={{ width: "100%", minHeight: 140, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 16, color: TEXT, fontSize: 15, resize: "vertical", boxSizing: "border-box", outline: "none" }}
            />
            <button
              onClick={saveEntry}
              style={{ marginTop: 12, padding: "10px 28px", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer", fontSize: 15 }}
            >
              Save Entry
            </button>
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              {entries.map((entry) => (
                <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: MUTED, fontSize: 12, marginBottom: 8 }}>{entry.date}</div>
                  <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, whiteSpace: "pre-wrap" }}>{entry.text}</p>
                  <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: 12, fontSize: 12, color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {videos.map((v) => (
              <VideoEmbed key={v.videoId} {...v} />
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
