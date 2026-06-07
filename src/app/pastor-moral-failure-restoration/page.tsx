"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Repentance Is Not the Same as Restoration",
    verse: "2 Corinthians 7:10",
    text: "'Godly sorrow brings repentance that leads to salvation and leaves no regret, but worldly sorrow brings death.' Genuine repentance — the turning of the whole person toward God and away from the pattern of sin — is the beginning of restoration, not its completion. For a pastor who has morally failed, repentance and restoration are distinct, related, and separated by time.",
  },
  {
    title: "The Weight of a Shepherd Who Falls",
    verse: "James 3:1",
    text: "'Not many of you should become teachers, my fellow believers, because you know that we who teach will be judged more strictly.' James acknowledges that leadership carries heightened accountability. A pastor's moral failure damages more than one person — it damages congregations, families, and the testimony of the gospel. The stricter judgment is not punitive but proportional.",
  },
  {
    title: "God Restores the Broken Shepherd",
    verse: "John 21:15–17",
    text: "After Peter's three denials, Jesus asked him three times: 'Do you love me?' Each question was followed by a commission: 'Feed my sheep.' Restoration for Peter required confrontation with the full reality of failure, a genuine re-profession of love, and the re-reception of a calling — in that order. No shortcuts.",
  },
  {
    title: "The Gospel Is Big Enough",
    verse: "1 Timothy 1:15",
    text: "'Christ Jesus came into the world to save sinners — of whom I am the worst.' Paul, former persecutor of the church, wrote this after his restoration and transformation. The gospel is not surprised by the severity of moral failure. It is exactly calibrated for the worst cases — including the fallen pastor.",
  },
  {
    title: "The Church's Responsibility to Pursue Truth",
    verse: "Galatians 6:1",
    text: "'Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently.' Restoration is a community act — it requires those who are spiritually mature, pursuing the fallen person with gentleness, accountability, and without self-righteousness. This is not cover-up; it is true restoration.",
  },
];

const voices = [
  {
    id: 1,
    name: "Chuck DeGroat",
    role: "Author, When Narcissism Comes to Church; Therapist",
    quote: "Restoration is not a program. It is a long, humbling process of being loved and held accountable simultaneously — and it cannot be rushed.",
    bio: "Chuck DeGroat has worked with dozens of pastors in crisis and restoration. He is unflinching about the prevalence of narcissism and power dynamics in pastoral moral failure, while also committed to the possibility of genuine restoration for those who will do the long, hard work.",
  },
  {
    id: 2,
    name: "Darrell Johnson",
    role: "Pastor & Author",
    quote: "The fallen pastor needs what every sinful person needs — truth, grace, community, and time. All four. In that order. Not skipping any.",
    bio: "Darrell Johnson has written and spoken about pastoral restoration with both pastoral warmth and theological rigor. He insists that genuine restoration requires facing the full weight of harm done — not managing image — before healing becomes possible.",
  },
  {
    id: 3,
    name: "Diane Langberg",
    role: "Clinical Psychologist & Author, Redeeming Power",
    quote: "A pastor who has abused power or people has a problem with power, not only with sex or money. You cannot restore the behavior without addressing the root.",
    bio: "Diane Langberg's work on power and pastoral abuse is among the most important in the field. She insists that genuine restoration requires long-term psychological work on the patterns of thought and behavior that produced the failure — not just behavioral compliance.",
  },
  {
    id: 4,
    name: "Scott Sauls",
    role: "Pastor & Author, A Gentle Answer",
    quote: "The church that handles a pastor's moral failure with both truth and mercy will teach its people more about the gospel than a thousand sermons.",
    bio: "Scott Sauls writes about the church's response to pastoral failure as itself a witness to the gospel. How a church treats a fallen pastor — with neither cover-up nor cruelty — demonstrates whether it actually believes what it preaches about sin, grace, and restoration.",
  },
];

const practices = [
  {
    icon: "🛑",
    title: "Step Away — Fully and Immediately",
    text: "Genuine restoration requires full removal from pastoral duties during the restoration process. Partial removal — continuing to preach while 'under accountability' — is not restoration; it is image management. The fallen pastor who truly repents will accept, even request, full removal.",
  },
  {
    icon: "🧑‍⚕️",
    title: "Intensive Therapeutic Work",
    text: "Moral failure in ministry rarely emerges from a single bad choice. It grows from patterns — of entitlement, secrecy, boundary erosion, unaddressed wounds — that require sustained psychological work to identify and address. Weekly therapy with a clinician who specializes in clergy is not optional; it is the foundation of genuine restoration.",
  },
  {
    icon: "🤝",
    title: "Accountability That Has Real Teeth",
    text: "Accountability in restoration means a small group of spiritually mature, non-sycophantic people who have full access — to your schedule, your finances, your relationships, your devices — and who will speak hard truth without flinching. This is not a fans' circle. It is a restoration team.",
  },
  {
    icon: "🙏",
    title: "Return to the Basics of Formation",
    text: "Fallen pastors often need to relearn what they taught others: daily prayer, Scripture not for sermon preparation but for personal formation, Sabbath, spiritual direction. The spiritual practices that were crowd-sourced for ministry must now be received personally, slowly, for their own sake.",
  },
  {
    icon: "📖",
    title: "Sit in the Congregation for a Long Time",
    text: "Part of restoration is learning to receive from others what you have been giving for years. Sitting in a congregation as a non-leader — for months, possibly years — is a humbling and ultimately healing experience. It recalibrates the relationship between personal faith and professional function.",
  },
  {
    icon: "✉️",
    title: "Make Direct Amends Where Possible",
    text: "Where the failure caused specific harm to specific people, direct amends — under the guidance of a therapist and pastor, not unilaterally — are part of genuine restoration. The process is not about relieving your guilt; it is about genuine accounting for harm done. Let the harmed set the terms.",
  },
];

const scriptures = [
  { verse: "John 21:15", text: "When they had finished eating, Jesus said to Simon Peter, 'Simon son of John, do you love me more than these?' 'Yes, Lord,' he said, 'you know that I love you.' Jesus said, 'Feed my lambs.'" },
  { verse: "Galatians 6:1", text: "Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently. But watch yourselves, or you also may be tempted." },
  { verse: "Psalm 51:10–12", text: "Create in me a pure heart, O God, and renew a steadfast spirit within me. Do not cast me from your presence or take your Holy Spirit from me. Restore to me the joy of your salvation and grant me a willing spirit, to sustain me." },
  { verse: "2 Corinthians 7:10", text: "Godly sorrow brings repentance that leads to salvation and leaves no regret, but worldly sorrow brings death." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "1 Timothy 1:15", text: "Here is a trustworthy saying that deserves full acceptance: Christ Jesus came into the world to save sinners — of whom I am the worst." },
];

type PMFEntry = { id: string; date: string; honest: string; amend: string; prayer: string };

export default function PastorMoralFailureRestorationPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PMFEntry[]>([]);
  const [honest, setHonest] = useState("");
  const [amend, setAmend] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_pastormoralfailurerestorationj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!honest.trim() && !amend.trim() && !prayer.trim()) return;
    const entry: PMFEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      honest: honest.trim(),
      amend: amend.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_pastormoralfailurerestorationj_entries", JSON.stringify(updated));
    setHonest(""); setAmend(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_pastormoralfailurerestorationj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🕊️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Pastoral Moral Failure & Restoration
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For pastors who have fallen and those caring for them — navigating the hard road of
            genuine repentance, accountability, and the possibility of restoration.
          </p>
        </div>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>Support and accountability resources:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://www.pstraumacare.org" style={{ color: PURPLE }}>pstraumacare.org</a> |{" "}
            <a href="https://www.ministryhealth.org" style={{ color: PURPLE }}>ministryhealth.org</a> |{" "}
            Crisis Text Line: text <strong style={{ color: TEXT }}>HOME</strong> to <strong style={{ color: TEXT }}>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: TEXT, cursor: "pointer", fontSize: "0.875rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
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
                <div style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic" }}>
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
                <div style={{ color: PURPLE, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Where are you honestly in the restoration process?</label>
              <textarea value={honest} onChange={(e) => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What amend — however small — is available to you today?</label>
              <textarea value={amend} onChange={(e) => setAmend(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer of repentance or surrender today:</label>
              <textarea value={prayer} onChange={(e) => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>
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
                    {e.amend && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Amend: </span>{e.amend}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="j2h-q3ZPKFI" title="Pastoral Failure, Repentance, and the Path Forward" />
            <VideoEmbed videoId="NnGBhG03g4M" title="When Spiritual Leaders Fall — The Church's Response" />
            <VideoEmbed videoId="ZGk1hl1nNrw" title="Peter's Restoration — John 21 Explored" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Repentance and Genuine Restoration" />
          </div>
        )}
      </div>
    </div>
  );
}
