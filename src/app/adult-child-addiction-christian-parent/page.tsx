"use client";
import { useState } from "react";
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
    title: "The Prodigal Father: A Portrait of Parental Love",
    body: "Luke 15's parable of the prodigal son is most often read as a story about the son. But for parents of addicted adult children, it is unmistakably a story about the father — who sees his son coming from a long way off, who runs, who does not say 'I told you so,' who throws a party before the son has proven any lasting change. God's parental love is the theological ground for yours. The father did not enable the son's journey to the pig pen, but he also did not stop loving him there.",
  },
  {
    title: "Enabling vs. Rescuing: Moral Theology for the Parent",
    body: "Christian love has sometimes been conflated with removing all consequences from those we love. But Galatians 6:5 insists 'each one shall bear his own load,' and 1 Thessalonians 4:11 commends quiet, non-anxious stability. Loving your addicted adult child does not require you to pay their bail, cover their rent, or lie to protect them. In fact, allowing natural consequences — the biblical concept of 'reaping what you sow' — is often more loving than rescue. The father in Luke 15 let his son experience the pig pen.",
  },
  {
    title: "Grief Without Guilt",
    body: "Parents of addicted adult children often carry crushing guilt: 'Where did I go wrong? What could I have done differently?' While honest examination is appropriate, the theology of sin makes clear that each person bears moral responsibility for their own choices (Ezekiel 18:20). You did not cause your child's addiction. Addiction is a disease shaped by genetics, trauma, neurobiology, and choices — and while none of these absents your child's responsibility, they do release you from total causation. Your grief is legitimate. Your guilt may not be.",
  },
  {
    title: "Intercessory Prayer and the Long Vigil",
    body: "Monica of Hippo prayed for her son Augustine for 17 years — through his sexual immorality, his heresy, his contempt for faith — before his conversion. Her story has consoled millions of praying parents. The theology here is not that God will always answer the way Monica's prayer was answered, but that faithful intercessory prayer is itself a form of communion with God and love toward your child. You cannot control their choices; you can keep showing up to God on their behalf.",
  },
  {
    title: "Boundaries as Stewardship, Not Abandonment",
    body: "Healthy limits with an addicted adult child are often experienced — by both the parent and the child — as rejection. But the Christian tradition distinguishes between abandonment (withdrawing love) and boundaries (refusing to participate in harm). You can maintain a relationship of love and open communication while declining to fund addiction, tolerate abuse, or absorb the emotional chaos of active use. Limits, consistently held with love, say: 'I will not help you destroy yourself. And I will not let you destroy me.'",
  },
];

const voices = [
  {
    name: "Mark Gregston",
    role: "Founder, Heartlight Ministries; author of Tough Guys and Drama Queens",
    quote: "The hardest thing I tell parents is this: stop trying to fix your child and start working on yourself. That is not abandonment. That is survival, and survival makes you available for the long haul.",
  },
  {
    name: "Melody Beattie",
    role: "Author, Codependent No More",
    quote: "Detachment is not about being cold or withholding love. It means releasing the person to experience the consequences of their own actions — with love — while releasing yourself from the chaos that is not yours to carry.",
  },
  {
    name: "Ed Welch",
    role: "CCEF counselor; author of Crossroads: A Step-by-Step Guide Away from Addiction",
    quote: "Both the addict and their family are invited to the same gospel: we are more broken than we knew, and more loved than we dared to hope. Neither has to clean themselves up before approaching God.",
  },
  {
    name: "Lisa Bevere",
    role: "Author and speaker",
    quote: "I have prayed prayers that heaven seemed not to hear for years. But the praying itself kept me in the room with God — and that is where parents of prodigals must stay, even when they cannot see the answer yet.",
  },
];

const practices = [
  {
    title: "Join a Support Group for Parents",
    body: "Al-Anon and Nar-Anon are specifically designed for families of people struggling with alcohol and drug addiction. These groups offer community, peer wisdom, and the twelve-step framework. Many churches also host Christian-specific versions. You need others who understand — not people who offer easy answers, but people who have walked this road and survived it.",
  },
  {
    title: "Work With a Counselor on Your Own Recovery",
    body: "Parents of addicted children often develop their own trauma, anxiety, and maladaptive coping patterns. Individual therapy focused on your emotional wellbeing — separate from your child's recovery — is not selfish. It is how you become capable of sustained love over what may be a very long season.",
  },
  {
    title: "Write Out What You Will and Will Not Do",
    body: "In a calm moment, write a clear list: what help you are willing to offer (relationship, specific support, prayer), and what you are not willing to fund or enable. This is not a script for confrontation but a clarity tool for yourself. When emotional moments arrive, having thought it through in advance keeps you from decisions you will regret in either direction.",
  },
  {
    title: "Protect Your Marriage",
    body: "A child's addiction is one of the most marriage-straining forces a couple can face. Parents often split into opposing camps — one enabling, one detaching — and blame each other for the child's condition. Proactively seek couples counseling. Maintain your friendship, your intimacy, and your spiritual life together. You cannot pour out indefinitely from an empty vessel.",
  },
  {
    title: "Maintain the Relationship, Not the Chaos",
    body: "There is a difference between keeping the door of relationship open and keeping the door to chaos open. You can say 'I love you and I want to have lunch with you' while also saying 'I will not be present during active use or verbal abuse.' Consistent, non-dramatic loving contact over time is what most allows an addict to experience the pull back toward relationship and sobriety.",
  },
  {
    title: "Practice the Long View of Hope",
    body: "Recovery statistics are actually hopeful over multi-year timescales — most people who reach sustained recovery do so after multiple attempts, often years into their thirties and forties. This is not a crisis with a resolution in 90 days. It is a long story. Your hope needs to be durably held, not urgently pressed. Celebrate every day of sobriety without treating it as proof the problem is solved.",
  },
];

const scriptures = [
  { ref: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { ref: "Galatians 6:5", text: "For each one should carry their own load." },
  { ref: "Proverbs 13:24", text: "Whoever spares the rod hates their children, but the one who loves their children is careful to discipline them." },
  { ref: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { ref: "Psalm 139:7-8", text: "Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there." },
  { ref: "Romans 8:38-39", text: "For I am convinced that neither death nor life, neither angels nor demons... nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
];

const videos = [
  { videoId: "bFHoP8VXFNY", title: "When Your Adult Child Is Addicted — Mark Gregston" },
  { videoId: "Nj1KmXMZ3tI", title: "Loving Your Prodigal Child Without Enabling Addiction" },
  { videoId: "8cQyX1aJnEM", title: "Al-Anon: Help for Families of Addicts" },
  { videoId: "lhqm4HRoFxU", title: "Setting Boundaries With Your Addicted Adult Child" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_adultchildaddiction_entries";
interface JournalEntry { id: string; date: string; today: string; prayer: string; limit: string; }

export default function AdultChildAddictionPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [form, setForm] = useState({ today: "", prayer: "", limit: "" });
  const [saved, setSaved] = useState(false);

  function saveEntry() {
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today: form.today,
      prayer: form.prayer,
      limit: form.limit,
    };
    const updated = [entry, ...entries].slice(0, 30);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setForm({ today: "", prayer: "", limit: "" });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Pastoral Care</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.2 }}>
          When Your Adult Child Is Addicted: A Christian Parent&apos;s Guide
        </h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          For parents of adult children in active addiction — navigating love without enabling, grief without guilt, and the long faithfulness of the prodigal father.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : CARD, color: TEXT, cursor: "pointer", fontSize: "0.9rem",
            }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: GREEN, marginBottom: "0.75rem" }}>{item.title}</h2>
                <p style={{ color: TEXT, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map((v) => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ fontWeight: 700, color: GREEN }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: "0.875rem" }}>{v.role}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "Practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={p.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: GREEN, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.75 }}>{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "Scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s) => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, color: GREEN, marginBottom: "1.25rem" }}>Private Reflection</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What are you feeling today regarding your child?</label>
                <textarea value={form.today} onChange={(e) => setForm({ ...form, today: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What are you asking God for today?</label>
                <textarea value={form.prayer} onChange={(e) => setForm({ ...form, prayer: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What limit or boundary are you trying to hold?</label>
                <textarea value={form.limit} onChange={(e) => setForm({ ...form, limit: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: 700 }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.875rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.875rem" }}>Delete</button>
                </div>
                {e.today && <><div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: 4 }}>Today&apos;s feeling</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.today}</p></>}
                {e.prayer && <><div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: 4 }}>Prayer</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.prayer}</p></>}
                {e.limit && <><div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: 4 }}>Boundary held</div><p style={{ color: TEXT, lineHeight: 1.6 }}>{e.limit}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {videos.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} style={{ width: "100%", aspectRatio: "16/9" }} />
                <div style={{ padding: "1rem" }}>
                  <p style={{ color: TEXT, fontWeight: 600 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
          <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: "1rem" }}>Crisis & Support Resources</h3>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>988 Suicide & Crisis Lifeline</strong> — Call or text 988 if you or your child is in crisis.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>SAMHSA National Helpline</strong> — 1-800-662-4357. Free, confidential treatment referrals for substance use disorders.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Al-Anon / Nar-Anon</strong> — al-anon.org / nar-anon.org — Support groups specifically for families of addicts.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Celebrate Recovery</strong> — christianrecovery.com — Christ-centered recovery programs in churches nationwide.
          </p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
