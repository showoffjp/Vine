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
    title: "A Thorn That Does Not Disqualify",
    verse: "2 Corinthians 12:7–9",
    text: "Paul's 'thorn in the flesh' — whatever its nature — was not removed despite prayer. God's answer was not healing but sufficiency: 'My grace is sufficient for you, for my power is made perfect in weakness.' Bipolar disorder is a real, chronic thorn. The same grace that held Paul through his thorn holds you through yours.",
  },
  {
    title: "The Brain Is Not the Enemy of the Soul",
    verse: "Psalm 139:13–14",
    text: "'For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made.' The brain is part of what God made — including brains with neurological differences. Bipolar disorder is not a spiritual deficiency. It is a condition of a remarkable organ that God also made.",
  },
  {
    title: "Suffering That Produces Depth",
    verse: "Romans 5:3–5",
    text: "'Suffering produces perseverance; perseverance, character; and character, hope.' People who have lived with bipolar disorder for years often describe a depth of empathy, creativity, and spiritual perception that grew precisely through the condition. This is not prosperity theology — it is the genuine, hard-won fruit that suffering sometimes bears.",
  },
  {
    title: "God Present in Both the High and the Low",
    verse: "Psalm 139:8",
    text: "'If I go up to the heavens, you are there; if I make my bed in the depths, you are there.' The Psalm's extremes — height and depth — echo the experience of bipolar episodes. God is not absent in mania's high or depression's low. He is present in both, though he is often most recognizable in the quiet between.",
  },
  {
    title: "Community as God's Ordinary Means of Care",
    verse: "Galatians 6:2",
    text: "'Carry each other's burdens, and in this way you will fulfill the law of Christ.' The church is designed to be the primary community of care — which means it must become a place where people with bipolar disorder can be honest about their needs, their medication, and their cycles without shame. Burden-bearing is a theological imperative, not optional goodwill.",
  },
];

const voices = [
  {
    id: 1,
    name: "Kay Redfield Jamison",
    role: "Psychiatrist & Author, An Unquiet Mind",
    quote: "I have often asked myself whether, given the choice, I would choose to have manic-depressive illness. If lithium were not available, I would choose to have it. If lithium were not available, the answer would be a melancholy and decisive no.",
    bio: "Kay Redfield Jamison is a world-leading psychiatrist who has both studied and lived with bipolar disorder. Her memoir An Unquiet Mind is among the most important books ever written about the condition. Her unflinching advocacy for treatment — especially medication — is essential for the Christian community to hear.",
  },
  {
    id: 2,
    name: "Matthew Stanford",
    role: "Neuroscientist & Author, Grace for the Afflicted",
    quote: "The church has sometimes done more harm than help to people with bipolar disorder. We must do better.",
    bio: "Matthew Stanford's research on how churches respond (and too often fail to respond) to mental illness is both convicting and constructive. He calls the church to educated, compassionate, non-shaming engagement with congregants who have bipolar disorder.",
  },
  {
    id: 3,
    name: "Monica Coleman",
    role: "Author, Not Alone: Reflections on Faith and Depression",
    quote: "I have learned that my illness is not a punishment. It is a condition. And like all conditions, it is one in which God can still be found.",
    bio: "Monica Coleman is a theologian and pastor who writes about bipolar disorder from inside the experience. Her theological reflections on mental illness in the context of Black church communities break new ground and challenge simplistic spiritual explanations for psychiatric conditions.",
  },
  {
    id: 4,
    name: "Andy Crouch",
    role: "Author & Cultural Commentator",
    quote: "Weakness disclosed is the beginning of strength shared. The church becomes strong not by hiding its broken members but by gathering around them.",
    bio: "Andy Crouch has written about power, weakness, and community in ways that directly apply to how churches should relate to members with chronic mental health conditions. His vision of the church as a community of disclosed weakness rather than managed appearance is essential.",
  },
];

const practices = [
  {
    icon: "💊",
    title: "Consistent Medication as Faithful Stewardship",
    text: "Medication adherence is one of the most important predictors of stability in bipolar disorder. Missing doses during high periods ('I feel fine') is especially dangerous. Frame medication management as stewardship of the brain God gave you — not a concession to weakness.",
  },
  {
    icon: "📅",
    title: "Mood Charting as a Spiritual Practice",
    text: "Daily mood tracking — apps like Daylio or eMoods, or a simple written scale — helps identify patterns before they become crises. Share the chart with your psychiatrist and with one trusted person. Self-knowledge in service of stability is a form of wisdom.",
  },
  {
    icon: "😴",
    title: "Sleep as Non-Negotiable Medicine",
    text: "Sleep disruption is both a trigger and an early warning sign of bipolar episodes. Protect sleep with the rigor of a medical protocol: consistent bedtime, no alcohol, no screens, cool room. For someone with bipolar disorder, sleep hygiene is not self-care luxury — it is clinical necessity.",
  },
  {
    icon: "🤝",
    title: "Build a Crisis Plan with Your Community",
    text: "Work with your psychiatrist and one or two trusted people to create a written crisis plan: what the warning signs look like, who to call, what to say, what to avoid. Giving someone permission to intervene before full crisis is one of the most courageous acts of self-care possible.",
  },
  {
    icon: "🙏",
    title: "Liturgical Anchors in Unstable Seasons",
    text: "When episodes make personal prayer impossible, return to fixed liturgy: the Lord's Prayer, the Psalms, simple compline. These texts are not generated from your current state — they carry you. Praying the Daily Office in stable seasons builds a groove that remains when the road gets rough.",
  },
  {
    icon: "🗣️",
    title: "Disclose Wisely to Your Church Community",
    text: "You are not obligated to disclose your diagnosis to everyone. But finding one or two people at church who can know your reality — and who will stand with you in it — is worth the risk. Isolation is dangerous in bipolar disorder. Strategic, wise disclosure builds the community you need.",
  },
];

const scriptures = [
  { verse: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness. Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
  { verse: "Psalm 139:8", text: "If I go up to the heavens, you are there; if I make my bed in the depths, you are there." },
  { verse: "Isaiah 40:29–31", text: "He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary, and young men stumble and fall; but those who hope in the Lord will renew their strength." },
  { verse: "Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ." },
  { verse: "Lamentations 3:22–23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
];

type BDEntry = { id: string; date: string; today: string; stable: string; prayer: string };

export default function BipolarDisorderFaithCommunityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BDEntry[]>([]);
  const [today, setToday] = useState("");
  const [stable, setStable] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_bipolardisorderfaithcommj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!today.trim() && !stable.trim() && !prayer.trim()) return;
    const entry: BDEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today: today.trim(),
      stable: stable.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_bipolardisorderfaithcommj_entries", JSON.stringify(updated));
    setToday(""); setStable(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_bipolardisorderfaithcommj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>⚡</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Bipolar Disorder, Faith & Community
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For Christians living with bipolar disorder — navigating the highs and lows with
            honest faith, faithful treatment, and the community of God&apos;s people.
          </p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #5a2020", borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: "#f87171", fontWeight: "bold", margin: "0 0 0.5rem" }}>If you are in crisis or having thoughts of self-harm:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            Call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://www.nami.org" style={{ color: GREEN }}>nami.org</a> |{" "}
            <a href="https://www.dbsalliance.org" style={{ color: GREEN }}>dbsalliance.org</a> |{" "}
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
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Where are you on the mood spectrum today?</label>
              <textarea value={today} onChange={(e) => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What helps you stay or return to stability?</label>
              <textarea value={stable} onChange={(e) => setStable(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for today:</label>
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
                    {e.today && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Mood: </span>{e.today}</p>}
                    {e.stable && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Stability: </span>{e.stable}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="NnGBhG03g4M" title="Bipolar Disorder and the Christian Faith" />
            <VideoEmbed videoId="j2h-q3ZPKFI" title="Mental Illness, Medication, and the Church" />
            <VideoEmbed videoId="ZGk1hl1nNrw" title="Living Faithfully with a Chronic Mental Health Condition" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Stability and Community" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
