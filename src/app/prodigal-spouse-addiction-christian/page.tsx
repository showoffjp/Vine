"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Marriage to an Addicted Spouse: A Distinct Calling",
    body: "Being married to a spouse in active addiction is not the same as being married to a prodigal child, a struggling colleague, or even a wayward friend. The covenant dimension — the vow that bound you to this person — creates a particular tension between the call to faithful love and the need to protect yourself and your children from harm. Scripture does not offer a simple algorithm for this tension; it offers the character of God and the wisdom of the community to navigate it.",
  },
  {
    title: "Hosea: The Marriage That Became a Mission",
    body: "God commanded Hosea to marry Gomer, who was unfaithful, and to keep pursuing her through her adultery and eventual enslavement. Hosea's marriage became a living parable of God's covenant love for Israel. This text is often weaponized to keep abuse victims in dangerous marriages, and that is a profound misreading. Hosea's story is about God's character, not a prescriptive template for every spouse of an addict. The trajectory of Hosea's love was always toward Gomer's restoration, never toward his own self-destruction.",
  },
  {
    title: "What Enabling Actually Means",
    body: "Christians sometimes confuse enabling with faithfulness. Enabling is not love; it is the removal of consequences that might motivate change, combined with the absorption of consequences that allows the addiction to continue. Hosea's love for Gomer included the pain of her leaving — he did not prevent it. A spouse of an addict who pays off debt incurred during active use, makes excuses to family and employers, and maintains a normal domestic front may be acting from love — but they are enabling, and enabling prolongs suffering for everyone, especially the addict.",
  },
  {
    title: "Grounds for Separation and Protection",
    body: "Addiction frequently produces behaviors — financial deception, emotional abuse, physical danger, exposure of children to unsafe environments — that constitute genuine grounds for protective separation. Christian theology has always permitted separation for the protection of oneself and one's children. This is not divorce-with-prejudice; it is the creation of the kind of loving limit that may, paradoxically, accelerate the crisis that precedes genuine recovery. A loving God does not require you to absorb unlimited harm.",
  },
  {
    title: "The Possibility of Redemption, Held Without Illusion",
    body: "Many spouses of addicts find themselves oscillating between hope and despair — each period of sobriety raises expectations, and each relapse shatters them. The theology of hope in Romans 15:13 is not the same as optimism or wishful thinking. It is the quiet, grounded confidence that God is at work even in the wreckage — that a spouse who is currently in the grip of addiction is not beyond reach, and that the story is not over. But hope held without illusion also acknowledges that not every story ends in recovery, and that God's grace covers the spouse who eventually must choose their own life.",
  },
];

const voices = [
  {
    name: "Claudia Black",
    role: "Addiction specialist; author of It Will Never Happen to Me",
    quote: "The family members of addicts are not bystanders. They are participants in a system that has organized itself around the addiction. Recovery for the family is its own process, distinct from and parallel to the addict's recovery — and equally necessary.",
  },
  {
    name: "Al-Anon Family Groups",
    role: "International organization for families of alcoholics",
    quote: "The three Cs: You didn't cause it, you can't control it, you can't cure it. But you can choose how you respond — and that choice matters enormously for both of you.",
  },
  {
    name: "Leslie Vernick",
    role: "Christian therapist; author of The Emotionally Destructive Marriage",
    quote: "Love does not require you to participate in your own destruction. Staying in the chaos, absorbing all the consequences, and calling it faithfulness is not a Christian virtue. It is self-abandonment. And self-abandonment does not help your spouse get well.",
  },
  {
    name: "Mark Laaser",
    role: "Pastor and certified sex addiction therapist",
    quote: "When the betrayed spouse finally stops rescuing, the addict hits a bottom that is real. The withdrawal of enabling often precipitates the crisis that opens the door to genuine recovery — but not always, and the spouse cannot count on that outcome. They must act for their own safety regardless.",
  },
];

const practices = [
  {
    title: "Attend Al-Anon or Celebrate Recovery Partners",
    body: "Al-Anon (for spouses of alcoholics), Nar-Anon (for spouses of drug addicts), and Celebrate Recovery's partner groups are specifically designed for people in your situation. These communities provide the peer wisdom, the emotional support, and the practical tools — including the three Cs — that no sermon or book alone can offer. Commit to attending regularly.",
  },
  {
    title: "Get Individual Therapy",
    body: "Spouses of addicts often develop co-dependent patterns, trauma responses, anxiety, and depression that require professional treatment. Your wellbeing is not a secondary concern pending your spouse's recovery. A therapist who understands addiction dynamics can help you process the grief, anger, and confusion of living with someone in active addiction.",
  },
  {
    title: "Conduct a Safety Assessment",
    body: "Addiction can escalate into domestic violence, child endangerment, financial ruin, and physical danger. Honestly assess: Are your children safe? Are you physically safe? Is the financial situation sustainable? If the answer to any of these is no, speak with a counselor, pastor, or domestic violence resource immediately. Safety is non-negotiable.",
  },
  {
    title: "Stop Managing the Addiction",
    body: "Identify the specific ways you manage, minimize, or cover for your spouse's addiction: calling in sick for them, lying to family, paying bills their addiction incurred, driving them home from bars, cleaning up after episodes. Stop. Each of these actions removes a consequence that belongs to your spouse. This is agonizing — it feels like cruelty. It is not.",
  },
  {
    title: "Develop Your Own Life",
    body: "Spouses of addicts often gradually surrender their own friendships, interests, and purposes as they organize their life around managing the addiction. Reclaim your own life as an act of both self-care and witness. Your ability to thrive independently — to have friendships, to pursue your own callings, to experience joy — is not a betrayal of your spouse. It is the maintenance of the person your spouse needs you to be.",
  },
  {
    title: "Define and Hold Your Bottom Lines",
    body: "In a calm moment, write the specific conditions under which you will require a separation: continued use, physical danger, financial fraud, exposure of children. Discuss these with your therapist or sponsor. Then hold them. A bottom line that is not held ceases to function as a limit. Your spouse needs to know that your love is not unconditional permission to continue; it is a love that wants them well enough to refuse to participate in their illness.",
  },
];

const scriptures = [
  { ref: "Hosea 3:1", text: "The Lord said to me, 'Go, show your love to your wife again, though she is loved by another man and is an adulteress. Love her as the Lord loves the Israelites...'" },
  { ref: "1 Corinthians 7:15", text: "But if the unbeliever leaves, let it be so. The brother or the sister is not bound in such circumstances; God has called us to live in peace." },
  { ref: "Proverbs 22:3", text: "The prudent see danger and take refuge, but the simple keep going and pay the penalty." },
  { ref: "Galatians 6:2,5", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ... for each one should carry their own load." },
  { ref: "Romans 15:13", text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit." },
  { ref: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned." },
];

const videos = [
  { videoId: "DPBQlVXqHmM", title: "When Your Spouse Is an Addict: Christian Guidance" },
  { videoId: "oJnAFP_MWXY", title: "Al-Anon: Help for Spouses of Addicts" },
  { videoId: "q2SVPNB3Y1Y", title: "Setting Boundaries With an Addicted Spouse" },
  { videoId: "JhVIKfBYqkA", title: "Love Without Enabling: The Difficult Balance" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"] as const;
type Tab = typeof TABS[number];

const JOURNAL_KEY = "vine_prodigalspouse_entries";
interface JournalEntry { id: string; date: string; today: string; bottomLine: string; hope: string; }

export default function ProdigalSpousePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]"); } catch { return []; }
  });
  const [form, setForm] = useState({ today: "", bottomLine: "", hope: "" });
  const [saved, setSaved] = useState(false);

  function saveEntry() {
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today: form.today,
      bottomLine: form.bottomLine,
      hope: form.hope,
    };
    const updated = [entry, ...entries].slice(0, 30);
    setEntries(updated);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updated));
    setForm({ today: "", bottomLine: "", hope: "" });
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
          Married to an Addict: Faith for Spouses of People in Addiction
        </h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          For Christian spouses navigating a partner&apos;s addiction — holding covenant love alongside self-protection, fighting enabling while refusing abandonment, and finding a hope that survives the relapse cycle.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? PURPLE : BORDER}`,
              background: tab === t ? PURPLE : CARD, color: TEXT, cursor: "pointer", fontSize: "0.9rem",
            }}>{t}</button>
          ))}
        </div>

        {tab === "Theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: PURPLE, marginBottom: "0.75rem" }}>{item.title}</h2>
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
                <div style={{ fontWeight: 700, color: PURPLE }}>{v.name}</div>
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
                  <div style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
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
                <div style={{ fontWeight: 700, color: PURPLE, marginBottom: "0.5rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, color: PURPLE, marginBottom: "1.25rem" }}>Private Reflection</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What are you carrying today that belongs to your spouse, not to you?</label>
                <textarea value={form.today} onChange={(e) => setForm({ ...form, today: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What bottom line have you identified, and are you holding it?</label>
                <textarea value={form.bottomLine} onChange={(e) => setForm({ ...form, bottomLine: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: 6 }}>What does hope without illusion look like for you today?</label>
                <textarea value={form.hope} onChange={(e) => setForm({ ...form, hope: e.target.value })}
                  style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.75rem", fontSize: "0.9rem", minHeight: 80, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: 700 }}>
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.875rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.875rem" }}>Delete</button>
                </div>
                {e.today && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>What I&apos;m carrying that isn&apos;t mine</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.today}</p></>}
                {e.bottomLine && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>Bottom line</div><p style={{ color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{e.bottomLine}</p></>}
                {e.hope && <><div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: 4 }}>Hope without illusion</div><p style={{ color: TEXT, lineHeight: 1.6 }}>{e.hope}</p></>}
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
          <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: "1rem" }}>Crisis & Support Resources</h3>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>988 Suicide & Crisis Lifeline</strong> — Call or text 988. Available 24/7 for crisis support, including secondary trauma from a spouse&apos;s addiction.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>National Domestic Violence Hotline</strong> — 1-800-799-7233. If addiction has produced violence or danger, call immediately.
          </p>
          <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>Al-Anon / Nar-Anon</strong> — al-anon.org / nar-anon.org — 12-step support specifically for spouses and families of addicts.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.6 }}>
            <strong style={{ color: TEXT }}>SAMHSA National Helpline</strong> — 1-800-662-4357 — Free, confidential referrals for addiction treatment for your spouse.
          </p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
