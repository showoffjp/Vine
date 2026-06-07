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
    title: "Suffering That Does Not Show",
    verse: "Psalm 31:9–10",
    text: "'Be merciful to me, Lord, for I am in distress; my eyes grow weak with sorrow, my soul and body with grief. My life is consumed by anguish and my years by groaning.' The Psalmist describes pain that others cannot see — the internal exhaustion that invisible illness produces. Chronic pain and invisible illness have always existed; God has always heard their cry.",
  },
  {
    title: "The Body Is Not Separate from Faith",
    verse: "Romans 8:23",
    text: "'We ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies.' Paul names the groaning of the body as a spiritual act. Chronic pain is not a failure of faith — it is the body's participation in the broader longing for redemption that the whole creation shares.",
  },
  {
    title: "Strength in the Most Unlikely Place",
    verse: "2 Corinthians 4:7–9",
    text: "'We have this treasure in jars of clay to show that this all-surpassing power is from God and not from us. We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed.' The fragility of the body is not the end of the story. The clay jar that cracks still holds the treasure.",
  },
  {
    title: "God Does Not Demand Productivity",
    verse: "Matthew 11:28",
    text: "'Come to me, all you who are weary and burdened, and I will give you rest.' Jesus invited the weary — not as a prologue to demanding more from them, but as an end in itself. The person with chronic pain who cannot do what they once could is not disqualified from the kingdom. They are explicitly invited.",
  },
  {
    title: "The Community That Bears Together",
    verse: "1 Corinthians 12:26",
    text: "'If one part suffers, every part suffers with it.' Invisible illness becomes more bearable when the community around the sufferer believes the pain without requiring visible proof. The church's calling is not to fix the person with chronic illness but to believe their suffering and suffer with them.",
  },
];

const voices = [
  {
    id: 1,
    name: "Joni Eareckson Tada",
    role: "Author & Disability Advocate; Joni and Friends",
    quote: "God permits what he hates to accomplish what he loves. I have not always understood that. But I have learned to trust the One who does.",
    bio: "Joni Eareckson Tada has lived with quadriplegia for over fifty years, along with chronic pain and cancer. Her theology of suffering — tested in real flesh, not only in theory — has guided millions of Christians with disabilities and chronic illness through their darkest seasons.",
  },
  {
    id: 2,
    name: "Kate Bowler",
    role: "Author, No Cure for Being Human; Duke Divinity Professor",
    quote: "We are not the CEOs of our own lives. We are people who are lucky to get one day at a time and sometimes that is enough.",
    bio: "Kate Bowler's writing from inside a stage IV cancer diagnosis confronts the prosperity theology that has convinced Christians that suffering is a sign of insufficient faith. Her work has particularly resonated with those navigating chronic illness in faith communities that overemphasize health and healing.",
  },
  {
    id: 3,
    name: "Ed Welch",
    role: "Counselor & Author, A Small Book for the Anxious Heart",
    quote: "Chronic illness teaches you to ask: what is enough for today? The answer, for the Christian, is always: God.",
    bio: "Ed Welch has counseled extensively with people experiencing chronic pain and illness. His pastoral approach meets sufferers where they are without minimizing their experience or demanding spiritual performance. His work helps the chronically ill find faith that is honest rather than triumphant.",
  },
  {
    id: 4,
    name: "Amy Julia Becker",
    role: "Author & Disability Advocate",
    quote: "Chronic illness redefines what it means to be productive. What I learned is that presence is its own productivity.",
    bio: "Amy Julia Becker writes from her experience parenting a daughter with Down syndrome and her own health struggles. Her theological reflections challenge the church's implicit equation of worth with capacity, and offer an alternative vision of the body as fully human regardless of what it can do.",
  },
];

const practices = [
  {
    icon: "🗓️",
    title: "Pacing as a Spiritual Discipline",
    text: "People with chronic pain often cycle between overexertion on good days and crash on bad days. Pacing — spreading activity evenly across good and bad days — is the primary management tool for many conditions. Learning to stop before you must is wisdom, not weakness.",
  },
  {
    icon: "🙏",
    title: "Praying Through the Body, Not Around It",
    text: "Rather than praying for your pain to disappear, try praying through it: 'Lord, you are in this pain with me. I offer it to you.' This is not accepting that pain is God's will — it is inviting God into your body rather than waiting until pain is resolved to re-engage spiritually.",
  },
  {
    icon: "📋",
    title: "Writing Accommodation Requests",
    text: "Many people with invisible illness feel shame about requesting accommodations at church or work. You are allowed to ask for a chair, to leave early, to receive communion from your seat. Practicing the ask in writing first helps. You do not need to justify your body's needs.",
  },
  {
    icon: "🤝",
    title: "Finding Your Chronic Illness Community",
    text: "The loneliness of invisible illness is compounded when no one around you understands it. Seek out online or in-person communities of people with your specific condition — especially Christian communities. Being believed and understood by peers is a form of healing that medicine cannot provide.",
  },
  {
    icon: "📖",
    title: "Redefining Daily Faithfulness",
    text: "On a good day, faithfulness might look like work and service. On a bad day, faithfulness is getting out of bed, taking medication, and accepting help. Write a list of what faithfulness looks like on your worst days — then read it on those days instead of the version for good ones.",
  },
  {
    icon: "🌿",
    title: "Gentle Embodied Prayer",
    text: "On days when sitting upright for prayer is difficult, try lying down prayer — flat on your back, hands open. Many saints in the Christian tradition prayed from their beds or sickrooms. Your prayer does not require a specific posture. God receives the groaning of the body as prayer.",
  },
];

const scriptures = [
  { verse: "2 Corinthians 4:16–17", text: "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all." },
  { verse: "Romans 8:23", text: "Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Isaiah 40:29", text: "He gives strength to the weary and increases the power of the weak." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
  { verse: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
];

type CPEntry = { id: string; date: string; today: string; gift: string; prayer: string };

export default function ChronicPainInvisibleIllnessCommunityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CPEntry[]>([]);
  const [today, setToday] = useState("");
  const [gift, setGift] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_chronicpaininvisibleillnessj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!today.trim() && !gift.trim() && !prayer.trim()) return;
    const entry: CPEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today: today.trim(),
      gift: gift.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_chronicpaininvisibleillnessj_entries", JSON.stringify(updated));
    setToday(""); setGift(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_chronicpaininvisibleillnessj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌿</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Chronic Pain & Invisible Illness
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For those living with pain that others cannot see — finding faith in the body&apos;s
            limits, community that believes without proof, and God who inhabits the groan.
          </p>
        </div>

        <div style={{ background: "#0a1a0a", border: `1px solid ${GREEN}40`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>Support resources:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://www.joniandfriends.org" style={{ color: GREEN }}>joniandfriends.org</a> |{" "}
            <a href="https://www.chronicpainresearch.org" style={{ color: GREEN }}>chronicpainresearch.org</a> |{" "}
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
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>How is your body today — honestly?</label>
              <textarea value={today} onChange={(e) => setToday(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Is there anything small to be grateful for today?</label>
              <textarea value={gift} onChange={(e) => setGift(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer from inside the pain:</label>
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
                    {e.today && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Body: </span>{e.today}</p>}
                    {e.gift && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Grateful: </span>{e.gift}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="y-DQH-M1HuM" title="Faith and Chronic Pain — Joni Eareckson Tada" />
            <VideoEmbed videoId="NnGBhG03g4M" title="The Theology of Suffering Bodies" />
            <VideoEmbed videoId="jJPVNIAFmvA" title="Invisible Illness and the Christian Community" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Those Living with Chronic Pain" />
          </div>
        )}
      </div>
    </div>
  );
}
