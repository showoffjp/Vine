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
    title: "A Medical Crisis Is Not a Spiritual Failure",
    verse: "1 Kings 19:5–6",
    text: "Elijah, in the wilderness of burnout and suicidal despair, received food and water from an angel — not a sermon. God's response to physical and psychological crisis was embodied provision. Postpartum psychosis is a medical emergency, not a spiritual condition. God's first response is care for the body, not evaluation of the soul.",
  },
  {
    title: "The Mother Who Cannot Trust Her Own Mind",
    verse: "Psalm 22:14",
    text: "'I am poured out like water, and all my bones are out of joint. My heart has turned to wax; it has melted within me.' Postpartum psychosis can produce terrifying experiences — hallucinations, delusions, inability to distinguish reality. The Psalmist's language of being poured out and melted is closer to this experience than most theology dares go.",
  },
  {
    title: "God Holds What the Mind Cannot",
    verse: "Romans 8:26",
    text: "'We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.' A mother in postpartum psychosis cannot pray. She may not be able to form coherent thought. The Spirit's intercession reaches where language cannot — and God receives the groan of the person who cannot speak.",
  },
  {
    title: "The God Who Sees the Suffering Mother",
    verse: "Isaiah 49:15",
    text: "'Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you!' This verse is often used for comfort — but it cuts in a particular direction for the postpartum psychosis survivor: even if your illness temporarily disconnected you from your baby, God's connection to both of you was never severed.",
  },
  {
    title: "Healing Is Not a Test of Faith",
    verse: "James 5:14–15",
    text: "'Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord. And the prayer offered in faith will make the sick person well.' This passage affirms both prayer and medical intervention — the elders are called alongside physicians, not instead of them. Psychiatric treatment is not a lack of faith.",
  },
];

const voices = [
  {
    id: 1,
    name: "Margaret Spinelli",
    role: "Psychiatrist & Postpartum Specialist; Columbia University",
    quote: "Postpartum psychosis is one of the most serious psychiatric emergencies we see. It is also one of the most treatable. Speed of intervention saves lives.",
    bio: "Margaret Spinelli is among the world's leading researchers on perinatal psychiatric disorders. Her clinical work and advocacy have helped establish postpartum psychosis as a recognized medical emergency requiring immediate treatment — and her research has contributed to dramatically improved outcomes.",
  },
  {
    id: 2,
    name: "Kay Warren",
    role: "Author & Mental Health Advocate",
    quote: "When a mother's brain turns against her in the weeks after birth, the church must respond with the same urgency it would give a physical emergency — because this is one.",
    bio: "Kay Warren has become a leading voice for mental health awareness in the evangelical church. Her insistence that the church treat psychiatric emergencies with the same seriousness as physical medical emergencies directly applies to postpartum psychosis.",
  },
  {
    id: 3,
    name: "Karen Kleiman",
    role: "Founder, Postpartum Stress Center; Author",
    quote: "Women who experience postpartum psychosis need to know that what happened was an illness — not a reflection of who they are as a mother, as a person, or as a believer.",
    bio: "Karen Kleiman has spent her career helping women recover from postpartum mental illness. Her work is especially important for the shame and confusion that many Christian women feel after postpartum psychosis — the sense that their illness reveals something wrong with their faith or their love for their child.",
  },
  {
    id: 4,
    name: "Tish Harrison Warren",
    role: "Author, Prayer in the Night; Anglican Priest",
    quote: "The dark night of postpartum psychosis is a medical reality. But God is present in medical realities — and the church's calling is to bear witness to that presence.",
    bio: "Tish Harrison Warren writes about ordinary Christian life with deep honesty about its darkness. Her work helps the church understand that psychiatric illness does not disqualify a mother from God's love — and calls the community to surround her with practical care during recovery.",
  },
];

const practices = [
  {
    icon: "🚨",
    title: "This Is a Medical Emergency — Act Immediately",
    text: "Postpartum psychosis requires immediate medical intervention. If you or someone you know shows signs — hallucinations, delusions, rapid mood changes, confusion, not sleeping — go to an emergency room or call 911 immediately. This is not a condition to manage at home with prayer or rest. Speed saves lives.",
  },
  {
    icon: "💊",
    title: "Psychiatric Treatment Is Non-Negotiable",
    text: "Postpartum psychosis responds well to treatment — typically hospitalization, medication, and intensive support. Refusing treatment for spiritual reasons is dangerous. Medication for postpartum psychosis is not a lack of faith; it is the medicine God has provided. Take it.",
  },
  {
    icon: "🤝",
    title: "The Village Must Show Up",
    text: "Recovery from postpartum psychosis requires a care team: husband/partner, family, friends, church members, and professionals all working together. The infant must be cared for safely. The mother needs round-the-clock support. This is an all-hands situation — the community must be mobilized.",
  },
  {
    icon: "🙏",
    title: "Receiving Prayer as Care",
    text: "For the mother in recovery, prayer from others — not her own prayer performance — is what is needed. Let your church pray for you. Let them anoint you with oil if that is your tradition. This is receiving care, not performing spirituality. The body prays when one member cannot.",
  },
  {
    icon: "📝",
    title: "Rebuild the Narrative After Recovery",
    text: "Many women who survive postpartum psychosis need help rebuilding the narrative of what happened — integrating the experience without shame or terror. A therapist and a trusted spiritual director can help you understand what your illness was, what it was not, and how it fits into your story.",
  },
  {
    icon: "📱",
    title: "Future Pregnancy Planning With Your Team",
    text: "Postpartum psychosis has a significant recurrence risk in future pregnancies. If you plan another pregnancy, work proactively with a perinatal psychiatrist to establish a prevention and monitoring plan. This is not pessimism — it is wise stewardship of the information medicine has given you.",
  },
];

const scriptures = [
  { verse: "Isaiah 49:15", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you!" },
  { verse: "1 Kings 19:5", text: "Then he lay down under the bush and fell asleep. All at once an angel touched him and said, 'Get up and eat.'" },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you." },
  { verse: "Romans 8:38–39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers... will be able to separate us from the love of God." },
];

type PPEntry = { id: string; date: string; today: string; receive: string; prayer: string };

export default function PostpartumPsychosisChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PPEntry[]>([]);
  const [today, setToday] = useState("");
  const [receive, setReceive] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_postpartumpsychosischristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!today.trim() && !receive.trim() && !prayer.trim()) return;
    const entry: PPEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today: today.trim(),
      receive: receive.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_postpartumpsychosischristj_entries", JSON.stringify(updated));
    setToday(""); setReceive(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_postpartumpsychosischristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌿</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Postpartum Psychosis & Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For mothers, families, and communities navigating postpartum psychosis — understanding
            it as a medical emergency, not a spiritual failure, and finding God in the dark.
          </p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a2020", borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: "#f87171", fontWeight: "bold", margin: "0 0 0.5rem" }}>EMERGENCY: If you or someone you know is showing signs of postpartum psychosis:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            Call <strong style={{ color: TEXT }}>911</strong> or go to the nearest ER immediately |{" "}
            Postpartum Support International: <strong style={{ color: TEXT }}>1-800-944-4773</strong> |{" "}
            <a href="https://www.postpartum.net" style={{ color: GREEN }}>postpartum.net</a> |{" "}
            988 Lifeline: call or text <strong style={{ color: TEXT }}>988</strong>
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
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "1rem" }}>This journal is for you — in recovery, or for a family member caring for someone who is recovering.</p>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Where are you today — in recovery or in the care of someone recovering?</label>
              <textarea value={today} onChange={(e) => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What help or care are you willing to receive today?</label>
              <textarea value={receive} onChange={(e) => setReceive(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for healing and for the days ahead:</label>
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
                    {e.today && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Today: </span>{e.today}</p>}
                    {e.receive && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Receiving: </span>{e.receive}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="NnGBhG03g4M" title="Postpartum Mental Health and the Church — What Families Need to Know" />
            <VideoEmbed videoId="oNpTha80yyE" title="A Mother&apos;s Recovery — Faith After Postpartum Psychosis" />
            <VideoEmbed videoId="j2h-q3ZPKFI" title="Mental Illness, Shame, and the Grace of God" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Mothers and Their Families in Crisis" />
          </div>
        )}
      </div>
    </div>
  );
}
