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
    title: "The Covenant Was Broken Before It Was Discovered",
    verse: "Malachi 2:14",
    text: "\"The LORD is acting as the witness between you and the wife of your youth, because you have broken faith with her, though she is your partner, the wife of your marriage covenant.\" Pornography use is not a private sin. It is a covenant breach — a turning of sexual desire away from the spouse and toward others. The discovery of betrayal trauma is not the beginning of the wound; it is merely the moment the wound became visible.",
  },
  {
    title: "Betrayal Trauma Is Real, Not Dramatic",
    verse: "Psalm 55:12–14",
    text: "\"If an enemy were insulting me, I could endure it... But it is you, a man like myself, my companion, my close friend.\" David's words capture betrayal's unique devastation: it comes from inside the covenant. The spouse who discovers pornography use is not overreacting. They are experiencing a real attachment wound — a form of trauma — that deserves to be named and treated as such.",
  },
  {
    title: "Shame Cannot Be the End of the Story",
    verse: "1 John 1:7",
    text: "\"If we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus his Son cleanses us from all sin.\" Pornography use thrives in secrecy. The moment of full disclosure — however devastating — is also the first moment that genuine healing becomes possible. Light is painful but necessary. Both spouses need communities of honest accountability where hiding is not an option.",
  },
  {
    title: "Recovery Is Not a Formula",
    verse: "Romans 12:2",
    text: "\"Do not conform to the pattern of this world, but be transformed by the renewing of your mind.\" The neurological patterns formed by pornography use are deep and real. Recovery requires transformation at the level of the mind, not merely willpower or remorse. Pastoral care must make space for the clinical — therapists, recovery groups, structured accountability — not treat these as signs of weak faith.",
  },
  {
    title: "The Injured Spouse Chooses Whether to Rebuild",
    verse: "1 Corinthians 13:7",
    text: "\"Love... always protects, always trusts, always hopes, always perseveres.\" This passage is often weaponized to pressure betrayed spouses into immediate reconciliation. But love does not require a spouse to pretend injury did not occur. Trust, once shattered, must be rebuilt through consistent, verifiable change — not demanded by the offending spouse or by the church.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. Doug Weiss",
    role: "Licensed Therapist, Author of Sex, Men and God",
    quote: "Intimacy anorexia — withholding emotional, spiritual, and sexual intimacy from a spouse — is often the other face of pornography addiction. Recovery must address both.",
    bio: "Weiss has worked with hundreds of couples navigating sexual betrayal and developed the intimacy anorexia framework that has helped many betrayed spouses name what they experienced.",
  },
  {
    id: 2,
    name: "Sheila Wray Gregoire",
    role: "Author, The Great Sex Rescue; Researcher",
    quote: "The research is clear: pornography use by a spouse predicts lower marital and sexual satisfaction for that spouse. This is not a wife problem — it is a husband problem that affects the wife.",
    bio: "Gregoire's data-driven work has challenged evangelical churches to reckon honestly with how sexual harm inside marriage has been minimized and how betrayed spouses have been failed.",
  },
  {
    id: 3,
    name: "Dr. Stephanie Carnes",
    role: "Certified Sex Addiction Therapist, Author",
    quote: "Partners of sex addicts do not have a codependency problem. They have a trauma response — because what happened to them was traumatic.",
    bio: "Carnes' work has been pivotal in shifting the clinical and pastoral understanding of betrayed partners from codependents to trauma survivors deserving their own therapeutic care.",
  },
  {
    id: 4,
    name: "Mark Laaser",
    role: "Author, Healing the Wounds of Sexual Addiction; Recovery Minister",
    quote: "There is no recovery from sexual addiction without radical honesty — not with your sponsor, but with your spouse.",
    bio: "Laaser, himself a recovered sex addict, built one of the most robust Christian frameworks for sexual addiction recovery and couples restoration in pastoral ministry.",
  },
];

const practices = [
  {
    icon: "📋",
    title: "Full Therapeutic Disclosure",
    text: "Work with a Certified Sex Addiction Therapist (CSAT) to create a therapeutic full disclosure — a complete, one-time accounting of the history of the behavior, delivered in a controlled clinical setting with a therapist present for both partners.",
  },
  {
    icon: "🛡️",
    title: "Stabilize the Injured Spouse First",
    text: "The betrayed spouse's trauma must be treated as the clinical priority. Before any couples work begins, the injured spouse needs individual therapy, community support, and time to stabilize — pressure to immediately reconcile delays healing for both.",
  },
  {
    icon: "🔒",
    title: "Verified Accountability Structure",
    text: "Install accountability software (Covenant Eyes, Accountable2You) with reporting to an accountability partner who is not the spouse — the spouse should not carry the burden of monitoring. Accountability must be verifiable, not merely promised.",
  },
  {
    icon: "👥",
    title: "Separate Support Groups for Both Spouses",
    text: "The user needs a same-sex recovery group (SAA, Celebrate Recovery, Every Man's Battle). The betrayed spouse needs their own group (S-Anon, Betrayal Trauma Recovery). Shared recovery groups minimize both partners' healing.",
  },
  {
    icon: "⏳",
    title: "Respect the Rebuilding Timeline",
    text: "Trust is rebuilt through sustained, verifiable sobriety and behavioral change over time — typically 18–24 months minimum in clinical literature. The offending spouse does not get to set the timeline for when the marriage is considered restored.",
  },
  {
    icon: "⚠️",
    title: "Separate the Recovery from the Marriage Decision",
    text: "Recovery from pornography addiction is necessary and good regardless of whether the marriage survives. The betrayed spouse's decision about the marriage is separate from whether the addicted spouse recovers. No church should pressure either outcome.",
  },
];

const scriptures = [
  { verse: "Psalm 51:10", text: "\"Create in me a pure heart, O God, and renew a steadfast spirit within me.\"" },
  { verse: "Lamentations 3:22–23", text: "\"Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.\"" },
  { verse: "Hebrews 13:4", text: "\"Marriage should be honored by all, and the marriage bed kept pure, for God will judge the adulterer and all the sexually immoral.\"" },
  { verse: "James 5:16", text: "\"Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.\"" },
  { verse: "Joel 2:25", text: "\"I will repay you for the years the locusts have eaten.\"" },
  { verse: "Revelation 21:5", text: "\"He who was seated on the throne said, 'I am making everything new!'\"" },
];

type BetrayalEntry = {
  id: string;
  date: string;
  feeling: string;
  truth: string;
  prayer: string;
};

export default function MarriagePornographyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BetrayalEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_marriagebetrayaltrauma_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: BetrayalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      feeling,
      truth,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_marriagebetrayaltrauma_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_marriagebetrayaltrauma_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>💔</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Pornography & Betrayal Trauma in Marriage
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For spouses who have discovered a partner's pornography use, and for those seeking recovery — pastoral, clinical, and community resources for the long road toward honesty and healing.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Crisis & Support: <strong>988 Suicide & Crisis Lifeline</strong> — call or text 988 | <strong>Betrayal Trauma Recovery:</strong> btr.org | <strong>CSAT Locator:</strong> iitap.com
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${GREEN}` }}>
                <div style={{ color: GREEN, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What am I feeling right now, honestly?</label>
                <textarea value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What do I believe is true, even if I can't feel it today?</label>
                <textarea value={truth} onChange={e => setTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer, even if it's just a name or a cry:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.feeling && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Feeling:</strong> {e.feeling}</p>}
                {e.truth && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Truth:</strong> {e.truth}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="e5xmO7J3d_I" title="Betrayal Trauma: What It Is and Why It Matters" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Betrayal Trauma: What It Is and Why It Matters</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical framework for understanding the trauma response in betrayed partners</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="Kq2AoGWlMJM" title="Pornography Addiction: A Christian Recovery Framework" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Pornography Addiction: A Christian Recovery Framework</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Understanding the addiction model and what genuine recovery requires</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="pX3G2r5OtXA" title="Rebuilding Trust After Sexual Betrayal" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Rebuilding Trust After Sexual Betrayal</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>What the research says about how trust is rebuilt — and what shortcuts don't work</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="D9xOVQ96T0A" title="How the Church Can Better Support Betrayed Spouses" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>How the Church Can Better Support Betrayed Spouses</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Pastoral guidance for churches walking alongside couples in crisis</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
