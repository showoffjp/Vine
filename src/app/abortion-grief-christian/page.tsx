"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Gospel Is Big Enough for This",
    verse: "Psalm 103:12",
    text: "As far as the east is from the west, so far has he removed our transgressions from us. The forgiveness the gospel offers is not a polite theological category — it is a real and total removal of guilt. Whatever led to the abortion, whatever you felt then, whatever you feel now: the cross of Jesus Christ is sufficient for every sin, including this one. You do not have to shrink the gospel to make room for your story.",
  },
  {
    title: "Grief and Guilt Are Different Things",
    verse: "Matthew 5:4",
    text: "Blessed are those who mourn, for they will be comforted. Christians who have experienced abortion often carry layered pain: guilt that is real and can be forgiven, and grief that is also real but does not go away with absolution. Both deserve acknowledgment. The tendency to rush past grief into reassurance ('God forgives you') can actually prolong healing. Grief is not a sign that you haven't received forgiveness; it is a sign that you loved what you lost.",
  },
  {
    title: "God Does Not Exploit Your Wound",
    verse: "Isaiah 42:3",
    text: "A bruised reed he will not break, a smoldering wick he will not snuff out. The God you approach in your grief is not standing in judgment, arms crossed, waiting for you to get the theology right. He is the One who bends down toward the crushed. The harshest voices in your life — including your own internal voice — are not telling you the truth about God.",
  },
  {
    title: "There Is a Name for What You Grieve",
    verse: "Jeremiah 31:15-17",
    text: "Rachel weeping for her children — and God responds not with rebuke but with promise: your work will be rewarded. Naming the child, naming the loss, naming the grief as a genuine death — none of this contradicts the gospel. It may be the very thing that allows the gospel to reach the parts of you that have not yet received it.",
  },
  {
    title: "Restoration Is Possible",
    verse: "Joel 2:25",
    text: "I will repay you for the years the locusts have eaten. God's redemptive work is not limited to the moment of forgiveness — it extends across the whole landscape of what sin and suffering have taken. This is not a promise that nothing happened, but a promise that God is in the business of restoring what was lost, renewing what was broken, and bringing life out of death.",
  },
];

const voices = [
  {
    id: 1,
    name: "Jennifer Jeffries",
    role: "Director, Rachel's Vineyard",
    quote: "We've never met anyone who made the choice thinking they would grieve. And we've rarely met anyone who didn't.",
    bio: "Rachel's Vineyard is one of the largest post-abortion ministry organizations in the world, offering retreat programs and pastoral care for women and men dealing with grief after abortion.",
  },
  {
    id: 2,
    name: "Sydna Masse",
    role: "Author, Her Choice to Heal; founder, Ramah International",
    quote: "Abortion loss is disenfranchised grief — society doesn't give you permission to mourn it. The church sometimes doesn't either. But God does.",
    bio: "Sydna Masse experienced abortion herself before finding faith and healing, and now leads Ramah International, a global post-abortion ministry training and support network.",
  },
  {
    id: 3,
    name: "Frederica Mathewes-Green",
    role: "Author, Real Choices",
    quote: "No woman wants an abortion the way she wants a job or a house or a car. She wants it the way an animal in a trap wants to gnaw off its own leg.",
    bio: "Frederica Mathewes-Green spent years interviewing women about their abortion experiences and found that the cultural narrative of 'easy choice' rarely matched the actual experience of profound coercion and grief.",
  },
  {
    id: 4,
    name: "Erin Hawley",
    role: "Post-abortion counselor and author",
    quote: "You can hold the grief and the forgiveness at the same time. They are not in competition.",
    bio: "Post-abortion grief counselors have found that women often delay healing because they believe they don't deserve to grieve something they chose. Receiving permission to grieve is often the beginning of genuine healing.",
  },
];

const practices = [
  {
    icon: "🌿",
    title: "Allow Yourself to Grieve Fully",
    text: "Grief after abortion is often suppressed because it seems contradictory or self-indulgent. Give yourself explicit permission to mourn — through tears, through writing, through art, through whatever form genuine grief takes in you. Unmourned loss stays lodged.",
  },
  {
    icon: "✝️",
    title: "Receive Absolution, Not Just Information",
    text: "Many women have heard intellectually that God forgives but have not received it in the body, in community, in concrete ritual. Consider visiting a confessor, receiving pastoral absolution, participating in a post-abortion retreat. Embodied forgiveness can reach places that propositional forgiveness doesn't.",
  },
  {
    icon: "📛",
    title: "Consider Naming the Child",
    text: "Many women find that naming the child they lost — assigning a name that acknowledges the reality of the life — is a significant step in healing. It is not a theological requirement but has helped many move through grief that had no object to attach to.",
  },
  {
    icon: "🤝",
    title: "Find a Safe Post-Abortion Program",
    text: "Rachel's Vineyard retreats, Ramah International training programs, and local pregnancy resource center groups offer structured post-abortion healing in community. These are not places of condemnation — they are built by people who have walked this road.",
  },
  {
    icon: "📖",
    title: "Read the Psalms of Lament",
    text: "Psalms 22, 31, 38, 51, 88 give voice to pain that feels unspeakable. Read them slowly, letting the honest language of suffering reach the places inside you that have not yet been permitted to speak. The Bible is not embarrassed by raw grief.",
  },
  {
    icon: "🧭",
    title: "Consider the Partner and Others Involved",
    text: "Men grieve abortion losses too, often silently. If a partner or friend was involved, consider that they may be carrying their own grief. Healing sometimes happens best together, sometimes separately — but rarely by pretending together.",
  },
];

const scriptures = [
  { verse: "Psalm 103:12", text: "As far as the east is from the west, so far has he removed our transgressions from us." },
  { verse: "Isaiah 43:1", text: "Do not fear, for I have redeemed you; I have summoned you by name; you are mine." },
  { verse: "Psalm 51:17", text: "My sacrifice, O God, is a broken spirit; a broken and contrite heart you, God, will not despise." },
  { verse: "Joel 2:25", text: "I will repay you for the years the locusts have eaten — the great locust and the young locust, the other locusts and the locust swarm — my great army that I sent among you." },
  { verse: "Matthew 5:4", text: "Blessed are those who mourn, for they will be comforted." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
];

type AGEntry = { id: string; date: string; feeling: string; receive: string; prayer: string };

export default function AbortionGriefChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AGEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [receive, setReceive] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_abortiongrief_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const e: AGEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling, receive, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_abortiongrief_entries", JSON.stringify(next));
    setFeeling(""); setReceive(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_abortiongrief_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: GREEN, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Abortion Grief & Healing</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>A space for Christians carrying grief, guilt, or pain after abortion — where the gospel's full promise of forgiveness and restoration is taken seriously.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · <a href="https://www.rachelsvineyard.org" style={{ color: "#fca5a5" }}>rachelsvineyard.org</a> · <a href="https://ramahinternational.org" style={{ color: "#fca5a5" }}>ramahinternational.org</a> · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>Journal Entry</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What am I carrying today?</label>
                <textarea value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Guilt, grief, numbness, anger — all of it..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What do I want to receive from God today?</label>
                <textarea value={receive} onChange={e => setReceive(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Forgiveness, comfort, permission to grieve..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Speak to God about what you are holding..." />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. This space is safe.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Carrying today</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.feeling}</p></>}
                {e.receive && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Wanting to receive</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.receive}</p></>}
                {e.prayer && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Post-Abortion Healing — Rachel's Vineyard</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>An introduction to the Rachel's Vineyard retreat program for women and men grieving after abortion.</p>
              <VideoEmbed videoId="oNpTha80yyE" title="Post-Abortion Healing Rachel's Vineyard" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Grace for the Worst Things</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>A gospel-rooted message about the sufficiency of Christ's forgiveness for every sin and every grief.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Grace for the Worst Things" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Disenfranchised Grief and Permission to Mourn</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On grief that has no socially permitted container — and how the gospel creates space for it.</p>
              <VideoEmbed videoId="4Eg_di-O8nM" title="Disenfranchised Grief and Permission to Mourn" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Psalm 51 — A Song for the Broken</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Meditating on David's psalm of confession and restoration as a template for bringing the whole truth to God.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Psalm 51 A Song for the Broken" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
