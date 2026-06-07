"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Love Does Not Require Enabling", verse: "Proverbs 22:3", text: "The prudent see danger and take refuge, but the simple keep going and pay the penalty. Loving your spouse does not mean protecting them from the consequences of their addiction. Enabling — covering for them, making their addiction more comfortable, absorbing the damage they cause so they don't have to feel it — is not love. It often delays the crisis that produces the desire to change. The prudent person sees the danger and acts. For partners of addicts, this often means the hardest love: the love that refuses to make things easier." },
  { title: "You Cannot Change Another Person", verse: "Ezekiel 18:4", text: "For everyone belongs to me, the parent as well as the child — both alike belong to me. The one who sins is the one who will die. Individual responsibility is a theological category as well as a psychological one. Your spouse's recovery is not yours to engineer, and their addiction is not yours to have prevented. This is not permission to be absent or indifferent — it is permission to stop carrying what isn't yours to carry. The Serenity Prayer's wisdom about what can and cannot be changed is theologically grounded in this individual responsibility." },
  { title: "Your Own Soul Needs Tending — Not Just Theirs", verse: "Matthew 22:39", text: "Love your neighbor as yourself. The partner of an addict often becomes so focused on the addict that their own soul goes untended. Their own pain, their own depletion, their own grief, their own spiritual life — all subsumed to the all-consuming project of managing the addicted spouse's life. The command to love the neighbor as the self assumes a self worth tending. Your wellbeing is not a distraction from loving your spouse. It is its precondition." },
  { title: "Setting Limits Is Not Abandonment", verse: "Galatians 6:1-2", text: "Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently. But watch yourselves, or you also may be tempted. Carry each other's burdens. Restoring the person caught in sin is done gently — and with self-watchfulness. The partner who loses themselves entirely in the project of their spouse's recovery is not watching themselves. Limits — around what you will and will not tolerate, around the safety of children, around financial exposure — are not failures of love. They are the structure within which genuine care is possible." },
  { title: "God Is in the Waiting", verse: "Romans 5:3-4", text: "We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope. The partner of an addict often lives in prolonged uncertainty — not knowing whether the marriage will survive, whether the addiction will destroy everything, whether change is coming. The theological category of waiting — enduring without resolution — is specifically addressed in Scripture. Waiting produces perseverance. Perseverance produces character. Character produces hope. This is not a promise of a specific outcome. It is a promise about who the waiting person becomes." },
];

const voices = [
  { id: "sc", name: "Sharon Collins", role: "Therapist, Al-Anon National Literature", quote: "The most important thing I tell partners of addicts is this: you didn't cause it, you can't control it, and you can't cure it. The three Cs. It seems simple, but most partners spend years trying to disprove all three before they believe any of them.", bio: "Al-Anon (al-anon.org) provides community specifically for partners and family members of people with alcohol use disorder. The program's framework — accepting what cannot be controlled, focusing on one's own recovery, finding community with others who understand — is among the most evidence-supported approaches for family members of addicts." },
  { id: "mb", name: "Milan and Kay Yerkovich", role: "Authors, How We Love", quote: "Partners of addicts often develop attachment patterns that make it harder to set limits and easier to absorb the damage. Understanding your own attachment style — why it is so hard to stop taking responsibility for your spouse's choices — is part of your own recovery, distinct from theirs.", bio: "The Yerkoviches' attachment-based approach to relationship dynamics has specific application for partners of addicts. Understanding the childhood origins of over-functioning, people-pleasing, and lost-self patterns helps partners understand why they function the way they do — and what their own healing requires." },
  { id: "pt", name: "Patrick Carnes", role: "Author, The Betrayal Bond; Addiction Researcher", quote: "Living with an addict produces trauma in the partner — the hypervigilance, the walking on eggshells, the false alarms, the betrayal. Many partners of addicts meet clinical criteria for PTSD by the time they seek help. Their recovery is not the same as their spouse's recovery, and it requires the same quality of attention.", bio: "Carnes' work on addiction and its impact on the partner's attachment and nervous system has helped many partners of addicts understand their own symptoms — the hypervigilance, the intrusive thoughts, the difficulty trusting their own perceptions. His framework clarifies that the partner has been harmed and needs their own recovery, not just support for the addict's." },
];

const practices = [
  { icon: "🤝", title: "Find Al-Anon or a Similar Program — For Yourself", text: "Al-Anon (al-anon.org) is specifically for partners and family members of alcoholics — a program of recovery for the people who love addicts, not the addicts themselves. Nar-Anon (nar-anon.org) serves family members of those with drug addiction. These programs address the specific ways that living with an addict has shaped the partner — the hypervigilance, the over-responsibility, the resentment, the lost sense of self. Your own recovery is not the same as supporting your spouse's recovery." },
  { icon: "⚖️", title: "Work With a Therapist to Clarify Your Limits", text: "What are you willing to tolerate? What are your non-negotiables around the safety of children, financial exposure, or continued active use in the home? Working through these questions with a therapist before a crisis arrives means you are making decisions from your values rather than from reactivity. Limits are most effective when they are clear, specific, consistently maintained, and enforceable by you — not dependent on your spouse's compliance." },
  { icon: "📋", title: "Learn About Addiction — Accurately", text: "Many partners of addicts hold inaccurate beliefs that make the situation worse: that willpower is the primary issue, that the addict is choosing addiction over them, that their love is insufficient to produce change, that ultimatums will work. Accurate understanding of addiction as a brain disease, of recovery as a process not an event, and of what actually helps versus what enables — changes how you respond. CRAFT (Community Reinforcement and Family Training) is an evidence-based approach for family members that provides specific guidance." },
  { icon: "👨‍👩‍👧", title: "Protect the Children — This Is Non-Negotiable", text: "If children are in the home, their safety and wellbeing cannot be subordinated to the addicted spouse's needs. This includes physical safety, but also emotional safety — children in homes with active addiction are at elevated risk for their own mental health and addiction problems. Consult with a therapist about what a safe environment for children looks like in your specific situation, and be willing to make the necessary structural changes even if they are painful." },
  { icon: "🙏", title: "Attend to Your Own Spiritual Life — Separately From Your Spouse's", text: "Many partners of addicts experience a kind of secondary spiritual crisis — resentment toward a God who could stop the addiction but doesn't, loss of prayer life, spiritual exhaustion from years of crisis. Your own spiritual life deserves direct, honest attention — not just as support for your spouse's recovery, but as its own reality. A spiritual director, a prayer group, honest lament to God about what this is costing you — these investments protect your soul through the long haul." },
];

const scriptures = [
  { verse: "Proverbs 22:3", text: "The prudent see danger and take refuge, but the simple keep going and pay the penalty." },
  { verse: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze." },
  { verse: "Psalm 31:9-10", text: "Be merciful to me, Lord, for I am in distress; my eyes grow weak with sorrow, my soul and body with grief. My life is consumed by anguish and my years by groaning." },
  { verse: "Matthew 22:39", text: "Love your neighbor as yourself." },
  { verse: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
];


type ASEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function AddictionSpousePage() {
  const [tab, setTab] = useState("theology");
  const [asJournal, setAsJournal] = useState<ASEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_addictionspousej_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_addictionspousej_entries", JSON.stringify(asJournal)); } catch {}
  }, [asJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setAsJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setAsJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Marriage & Addiction</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Loving a Spouse With Addiction</h1>
        <p style={{ color: MUTED, marginBottom: "0.75rem", lineHeight: 1.6 }}>
          Your recovery matters too — not just theirs. The hard love of limits, and the care for your own soul.
        </p>
        <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "0.75rem 1rem", marginBottom: "2rem", fontSize: "0.9rem" }}>
          <span style={{ color: PURPLE, fontWeight: 600 }}>Support: </span>
          <span style={{ color: MUTED }}>Al-Anon: </span><span style={{ color: TEXT }}>al-anon.org</span>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; Nar-Anon: </span><span style={{ color: TEXT }}>nar-anon.org</span>
          <span style={{ color: MUTED }}> &nbsp;|&nbsp; SAMHSA: </span><span style={{ color: TEXT }}>1-800-662-4357</span>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Partner Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What am I carrying right now — about my spouse, about myself, about the marriage?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What is in my control, and what is not? What is mine to carry, and what is theirs?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One step toward my own care or recovery today</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {asJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {asJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Carrying: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Discerning: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>My care: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "j9phNEaPrv8", title: "Is Addiction a Sign That Someone Is Not a Christian?", channel: "Ligonier Ministries", description: "Addresses whether ongoing addiction disqualifies someone from faith — and what the partner's role is in the recovery of someone they love." },
              { videoId: "dy9nwe9zeU8", title: "How to Overcome Your Addictions", channel: "Tony Evans", description: "Dr. Tony Evans preaches on overcoming addiction through the power of the Holy Spirit — relevant for both the person struggling and the spouse supporting recovery." },
              { videoId: "2b0PxJcUCNM", title: "The Four Horsemen — Gottman", channel: "The Gottman Institute", description: "Gottman explains the four relationship patterns that most predict marriage failure — especially relevant for addiction-affected marriages where contempt and defensiveness are common." },
              { videoId: "ZR-J8DQGFOI", title: "When to Keep Trying and When to Stop", channel: "Leslie Vernick", description: "Vernick on distinguishing difficult marriages (where sustained effort can rebuild) from destructive ones — essential for spouses of addicts navigating when to stay and when limits require structural change." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
