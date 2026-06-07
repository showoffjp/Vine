"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Relapse Is Not the End of the Story", verse: "Proverbs 24:16", text: "For though the righteous fall seven times, they rise again. This verse is not a license for habitual sin but a description of the character of the righteous — they rise. Recovery from addiction involves not the absence of falling but the persistence of rising. A relapse is a chapter break, not a conclusion. The story is not finished." },
  { title: "The Same Grace That Saves Covers the Shame of Falling Again", verse: "Romans 5:8", text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us. This love was not contingent on our sobriety. It was extended at our worst. The person who has relapsed is not in a place that is beyond the reach of this love — they are in precisely the condition that this love was designed for. No relapse makes you a worse candidate for grace than the person Christ died to save." },
  { title: "The Prodigal Always Has a Father Watching for His Return", verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him. The father runs. He does not wait for the son to complete his speech of self-condemnation. This is the character of God toward those who return after failure — not a lecture about wasted time, but an embrace that precedes explanation." },
  { title: "Shame Drives Us Away; Conviction Draws Us Back", verse: "2 Corinthians 7:10", text: "Godly sorrow brings repentance that leads to salvation and leaves no regret, but worldly sorrow brings death. Shame after relapse often sounds spiritual but drives toward isolation, despair, and giving up entirely. Godly conviction sounds like: 'I have fallen, and I will return to my Father.' The difference is direction — shame turns inward and stops; conviction turns toward God and moves." },
  { title: "The Body in Recovery Is Not the Enemy of the Soul", verse: "1 Corinthians 6:19-20", text: "Your bodies are temples of the Holy Spirit. Therefore honor God with your bodies. This verse is sometimes weaponized to shame people in addiction. Its proper use is as an affirmation: your body matters to God. Recovery — treating your nervous system, your sleep, your relationships, your brain chemistry — is an act of honoring the temple. Bodies in distress relapse; restored bodies find sobriety more sustainable." },
];

const voices = [
  { id: "v1", name: "Ed Welch", role: "CCEF counselor, author of Addictions: A Banquet in the Grave", quote: "Relapse reveals what we already knew: that the heart's idols are more stubborn than willpower. The question after relapse is not 'why did this happen?' but 'who am I running to now?'", bio: "Ed Welch's theological framework for addiction recognizes that substances and behaviors become idols — substitutes for legitimate desires that only God can satisfy. His work insists that relapse is not evidence of spiritual bankruptcy but of the depth of the battle, and that the church's response must be marked by truth and patience simultaneously." },
  { id: "v2", name: "Mike Quarles", role: "Pastor, author of Freedom from Addiction, recovered alcoholic", quote: "Every relapse I had taught me something about where my recovery was thin. Eventually I stopped treating relapse as proof I could not be free and started treating it as data about where healing still needed to go.", bio: "Mike Quarles writes from his own long journey through alcohol addiction and multiple relapses before sustained recovery. His work emphasizes that the path out of addiction is rarely linear, and that shame-based responses to relapse are among the primary predictors of more relapse." },
  { id: "v3", name: "Brené Brown", role: "Research professor, author of The Gifts of Imperfection, vulnerability and shame researcher", quote: "Shame is the most powerful, master emotion. It is the fear that we are unworthy of love and belonging. And it is the emotion that, unchecked, drives most relapse.", bio: "Brené Brown's research on shame and vulnerability, while not explicitly theological, has been widely integrated into Christian recovery frameworks. Her finding that shame drives addiction and vulnerability drives healing maps onto the biblical call to confess openly rather than hide. Many Christian recovery ministries now incorporate her work." },
  { id: "v4", name: "Nadia Bolz-Weber", role: "Lutheran pastor, author of Pastrix, long-term recovery from addiction", quote: "I have been sober for decades. I will always be an addict. And I am also a priest of the church. These things are not in tension. They are the same story.", bio: "Nadia Bolz-Weber's public witness as a pastor in long-term recovery has been formative for many Christians who carry the stigma of addiction history. Her frank acknowledgment that addiction is a permanent part of her story — not a shameful secret to overcome — has given permission to thousands to integrate their recovery identity with their faith identity." },
];

const practices = [
  { icon: "📞", title: "Call Someone Before You Spiral Further Into Shame", text: "The first 24 hours after a relapse are the most dangerous time for the cycle to accelerate — use worsens shame, shame worsens use. The most important thing you can do is call a sponsor, a trusted friend, a pastor, or a counselor. Isolation is the relapse's greatest ally. Connection is its greatest enemy." },
  { icon: "🏥", title: "Return to Treatment or Support Groups Without Delay", text: "Many people wait until they are 'clean again' before returning to a recovery group. This is backwards. Return to your group, sponsor, or therapist precisely while you are in the middle of the struggle. Recovery communities are built for re-entry after relapse — they have seen it before, and they will not be surprised or destroyed by your return." },
  { icon: "🔎", title: "Conduct an Honest Inquiry Into What Led to the Relapse", text: "Not punitive self-examination — diagnostic inquiry. What was the trigger? What need was the substance meeting? What protection, comfort, or escape was it offering? Understanding the relapse is not the same as excusing it. It is how you strengthen the thin places in your recovery architecture." },
  { icon: "📖", title: "Read Psalm 51 as Your Own Prayer", text: "David wrote Psalm 51 after moral catastrophe. It begins with an appeal to mercy and lovingkindness (v.1), not a demand for justice. It acknowledges the sin without minimizing it (v.3-4). It asks for renewal rather than restoration to former perfection (v.10). It ends with a commitment to tell others about God's grace (v.13). This is the arc after relapse." },
  { icon: "🤲", title: "Receive Absolution and Restoration in Community", text: "Confession to another person (James 5:16) and receiving their response of grace and prayer is not optional after relapse — it is the healing mechanism. This requires a safe community. If your church community responds to confession with condemnation, find a recovery community like Celebrate Recovery, AA with Christian members, or a CCEF-connected counselor who can hold both gospel and recovery." },
  { icon: "⏳", title: "Recommit to One Day at a Time, Not a Lifetime", text: "After relapse, the prospect of lifetime sobriety is paralyzing. AA's 'one day at a time' principle exists precisely for this moment: do not commit to never relapsing again — commit to not using today. The days accumulate. The neural pathways rebuild. The commitment to one day made daily becomes a lifetime." },
];

const scriptures = [
  { verse: "Proverbs 24:16", text: "For though the righteous fall seven times, they rise again, but the wicked stumble when calamity strikes." },
  { verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
  { verse: "Psalm 51:10", text: "Create in me a pure heart, O God, and renew a steadfast spirit within me." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
];

type RelapseEntry = { id: string; date: string; trigger: string; step: string; truth: string };

export default function AddictionRelapseFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RelapseEntry[]>([]);
  const [trigger, setTrigger] = useState(""), [step, setStep] = useState(""), [truth, setTruth] = useState("");

  useEffect(() => {
    try { const s = localStorage.getItem("vine_addictionrelapsej_entries"); if (s) setEntries(JSON.parse(s)); } catch {}
  }, []);

  function saveEntry() {
    if (!trigger.trim()) return;
    const e: RelapseEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), trigger: trigger.trim(), step: step.trim(), truth: truth.trim() };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_addictionrelapsej_entries", JSON.stringify(updated));
    setTrigger(""); setStep(""); setTruth("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_addictionrelapsej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];
  const inp: React.CSSProperties = { width: "100%", background: "#07070F", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" };

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: PURPLE, color: "#fff", borderRadius: 20, padding: "4px 16px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: 1 }}>PASTORAL CARE</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>Addiction Relapse and Faith</h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 580, margin: "0 0 1.5rem" }}>For those who have fallen after a period of sobriety — and for the Christians who love them. Relapse is not the end of the story. The Father is still running.</p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem 1.5rem", display: "inline-block", textAlign: "left" }}>
            <p style={{ color: MUTED, fontSize: "0.82rem", margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Crisis Support:</strong> 988 Suicide & Crisis Lifeline (call/text 988) &nbsp;|&nbsp; SAMHSA Helpline: 1-800-662-4357 &nbsp;|&nbsp; Celebrate Recovery: celebraterecovery.com</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1 }}>{t.verse}</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: TEXT, fontSize: "1rem" }}>{v.name}</div>
                <div style={{ color: PURPLE, fontSize: "0.82rem", fontWeight: 600, margin: "0.25rem 0 0.75rem" }}>{v.role}</div>
                <blockquote style={{ color: TEXT, fontStyle: "italic", borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.4rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1rem" }}>Reflection Journal</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What do you understand now about what triggered the relapse?</label>
              <textarea value={trigger} onChange={e => setTrigger(e.target.value)} rows={3} style={{ ...inp, marginBottom: "1rem" }} placeholder="Not to condemn — to understand..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What is your next concrete step back toward recovery?</label>
              <textarea value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="One action, today..." />
              <label style={{ color: MUTED, fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>What truth about God do you need to receive right now?</label>
              <textarea value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ ...inp, marginBottom: "1rem" }} placeholder="Even if it is hard to believe..." />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{e.date}</div>
                <p style={{ color: TEXT, fontSize: "0.9rem", margin: "0 0 0.5rem" }}><strong style={{ color: PURPLE }}>Trigger:</strong> {e.trigger}</p>
                {e.step && <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 0.5rem" }}><strong>Next step:</strong> {e.step}</p>}
                {e.truth && <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}><strong>Truth:</strong> {e.truth}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 12px", fontSize: "0.78rem", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "j9phNEaPrv8", title: "Is Addiction a Sin or a Disease?", channel: "Ligonier Ministries", description: "Ligonier addresses the theological framing of addiction — a question that becomes urgent when relapse happens and shame narratives compete with grace narratives." },
              { videoId: "dy9nwe9zeU8", title: "How to Overcome Your Addictions", channel: "Tony Evans", description: "Tony Evans on the spiritual dimensions of addiction and recovery, integrating biblical theology with practical pastoral wisdom." },
              { videoId: "psN1DORYYV0", title: "The Gifts of Imperfection", channel: "Brene Brown — TED", description: "Brown's foundational research on shame and vulnerability — the most important data point about why shame-based responses to relapse make it worse, not better." },
              { videoId: "1nzj7Sf395o", title: "Healing the Shame That Binds You", channel: "CCEF", description: "CCEF's counseling-based approach to shame — including the shame that follows a relapse — and how the gospel specifically addresses it." },
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
