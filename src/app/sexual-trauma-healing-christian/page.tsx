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
    title: "God Who Sees the Violated",
    verse: "Genesis 16:13",
    text: "Hagar, fleeing abuse and exploitation, received a visitation: 'You are the God who sees me.' She named God El Roi — the God who sees. Sexual trauma happens in the darkness of violation and silence. But the God of Scripture has always pursued those wounded in hidden places. He sees. He has always seen.",
  },
  {
    title: "The Body Remembers, and God Knows This",
    verse: "Psalm 31:9",
    text: "'My soul is in anguish. How long, Lord, how long? My eye wastes away from grief, my soul and body also.' The Psalms give language to trauma's embodied nature. When the body holds what the mind cannot process, God is not absent from that somatic reality. He knows the body, because he made it.",
  },
  {
    title: "Shame Is Not Yours to Carry",
    verse: "Isaiah 54:4",
    text: "'Do not be afraid; you will not be put to shame. Do not fear disgrace; you will not be humiliated.' The shame that often accompanies sexual trauma is a lie given by perpetrators and amplified by silence. The gospel declares that Christ carried shame on the cross so that the violated would not have to.",
  },
  {
    title: "Healing as Resurrection, Not Erasure",
    verse: "John 20:27",
    text: "The risen Christ still bore the wounds of crucifixion. Resurrection did not erase his scars — it transformed them. Healing from sexual trauma does not mean forgetting, as if it never happened. It means having your wounds transformed — still visible, but no longer defining you.",
  },
  {
    title: "God as Advocate and Avenger",
    verse: "Psalm 140:12",
    text: "'I know that the Lord secures justice for the poor and upholds the cause of the needy.' God is not neutral about sexual violence. Scripture consistently places him on the side of the violated, not the powerful. Your wound was not the will of God. His will is your restoration.",
  },
];

const voices = [
  {
    id: 1,
    name: "Diane Langberg",
    role: "Clinical Psychologist & Trauma Specialist",
    quote: "Trauma is a response to something that happened. It is not who you are. And Christ is a Savior who entered into suffering, not one who stands outside it.",
    bio: "Diane Langberg is one of the foremost Christian trauma clinicians in the world. She has spent 50 years working with sexual abuse survivors, integrating deep theological conviction with rigorous clinical practice. Her work is essential for any Christian seeking to understand trauma through a gospel lens.",
  },
  {
    id: 2,
    name: "Dan Allender",
    role: "Author, The Wounded Heart; Psychologist",
    quote: "The healing journey begins with telling the truth — to yourself, to God, to at least one safe other person.",
    bio: "Dan Allender's foundational work on sexual abuse and the Christian journey through healing has helped thousands name their stories. He insists that healing is not about moving past the wound but moving through it with honesty and community.",
  },
  {
    id: 3,
    name: "Rachael Clinton Chen",
    role: "Therapist & Author, To Be Told",
    quote: "Your story has weight and dignity. God does not flinch from what happened to you. Neither should we.",
    bio: "Rachael Clinton Chen works at the intersection of trauma therapy, story, and embodied spirituality. She helps survivors understand that their stories are not shameful burdens to manage, but sacred narratives that God receives with full attention.",
  },
  {
    id: 4,
    name: "Celeste Rossmiller",
    role: "Survivor-Advocate & Writer",
    quote: "The church can either be a place where shame compounds, or a place where survivors first hear: it was not your fault. We get to choose.",
    bio: "Celeste Rossmiller advocates for survivor-centered church cultures. Her work challenges faith communities to examine the ways shame, silence, and power have sometimes compounded the harm done to sexual trauma survivors, and to build communities of genuine safety.",
  },
];

const practices = [
  {
    icon: "🛡️",
    title: "Trauma-Informed Professional Care",
    text: "Sexual trauma requires a trained, licensed therapist who specializes in trauma (EMDR, somatic therapy, trauma-focused CBT). Pastoral care and support groups are valuable additions — not substitutes. Healing from sexual trauma is not a spiritual discipline alone. Please seek professional help.",
  },
  {
    icon: "🗣️",
    title: "Breaking Silence with One Safe Person",
    text: "Secrecy is a wound's oxygen. Tell your story — or even the edges of your story — to one person who is safe, trained, and trustworthy. This does not require full disclosure at once. Even saying 'something happened to me' begins to interrupt the isolation that trauma depends on.",
  },
  {
    icon: "🙏",
    title: "Lament as a Form of Worship",
    text: "Read Psalm 88 — it ends with no resolution, no 'but God.' The Psalms normalize bringing unresolved grief and anger to God. You do not need to arrive at a place of peace before you can pray. Bringing your raw wound to God is itself an act of trust.",
  },
  {
    icon: "🌿",
    title: "Somatic Grounding Practices",
    text: "Trauma lives in the body. Simple grounding exercises — holding something cold, naming five things you can see, slow breathing — can interrupt the nervous system's trauma responses. Pair these with a quiet acknowledgment: 'I am safe right now.' The body can slowly learn this truth.",
  },
  {
    icon: "📖",
    title: "Read Survivors' Stories in Scripture",
    text: "Tamar (2 Samuel 13), Hagar (Genesis 16), the woman of Luke 13 — Scripture is populated with women who were violated, marginalized, or bound. Their stories are in the canon for a reason. Reading them slowly, without explanation, lets you sense: God sees this. God records this.",
  },
  {
    icon: "🤝",
    title: "Community with Other Survivors",
    text: "Survivor support groups — through GRACE, through your therapist, through rainn.org — provide a particular kind of healing that one-on-one therapy cannot: the experience of being believed and understood by people who know the territory. This witness is itself medicine.",
  },
];

const scriptures = [
  { verse: "Genesis 16:13", text: "She gave this name to the Lord who spoke to her: 'You are the God who sees me,' for she said, 'I have now seen the One who sees me.'" },
  { verse: "Isaiah 54:4", text: "Do not be afraid; you will not be put to shame. Do not fear disgrace; you will not be humiliated. You will forget the shame of your youth." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "Revelation 21:5", text: "He who was seated on the throne said, 'I am making everything new!' Then he said, 'Write this down, for these words are trustworthy and true.'" },
  { verse: "Psalm 56:8", text: "You keep track of all my sorrows. You have collected all my tears in your bottle. You have recorded each one in your book." },
];

type STEntry = { id: string; date: string; name: string; today: string; prayer: string };

export default function SexualTraumaHealingChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<STEntry[]>([]);
  const [name, setName] = useState("");
  const [today, setToday] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_sexualtraumahealingchristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!name.trim() && !today.trim() && !prayer.trim()) return;
    const entry: STEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      name: name.trim(),
      today: today.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_sexualtraumahealingchristj_entries", JSON.stringify(updated));
    setName(""); setToday(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_sexualtraumahealingchristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌱</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Sexual Trauma & Christian Healing
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For those carrying the wounds of sexual abuse, assault, or exploitation — finding
            safety, truth, and the God who has always seen.
          </p>
        </div>

        {/* Crisis box */}
        <div style={{ background: "#1a0a0a", border: "1px solid #5a2020", borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: "#f87171", fontWeight: "bold", margin: "0 0 0.5rem" }}>If you are in danger or need immediate support:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            RAINN: <strong style={{ color: TEXT }}>1-800-656-4673</strong> |{" "}
            <a href="https://www.rainn.org" style={{ color: GREEN }}>rainn.org</a> |{" "}
            <a href="https://www.netgrace.org" style={{ color: GREEN }}>netgrace.org (Christian)</a> |{" "}
            Crisis Text Line: text <strong style={{ color: TEXT }}>HOME</strong> to <strong style={{ color: TEXT }}>741741</strong>
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: 6,
                border: `1px solid ${tab === t ? GREEN : BORDER}`,
                background: tab === t ? GREEN : CARD,
                color: TEXT,
                cursor: "pointer",
                fontSize: "0.875rem",
                textTransform: "capitalize",
              }}
            >
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
              <p style={{ color: MUTED, fontSize: "0.85rem", marginBottom: "0.5rem" }}>This journal is private, stored only on your device. Write only what feels safe to name.</p>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What do you want God to know about where you are today?</label>
              <textarea
                value={name}
                onChange={(e) => setName(e.target.value)}
                rows={3}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What does your body or soul need today?</label>
              <textarea
                value={today}
                onChange={(e) => setToday(e.target.value)}
                rows={2}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer — however raw — for your healing:</label>
              <textarea
                value={prayer}
                onChange={(e) => setPrayer(e.target.value)}
                rows={3}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <button
                onClick={saveEntry}
                style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}
              >
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
                    {e.name && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>God knows: </span>{e.name}</p>}
                    {e.today && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Need: </span>{e.today}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="j2h-q3ZPKFI" title="Trauma, Healing, and the Gospel — Diane Langberg" />
            <VideoEmbed videoId="NnGBhG03g4M" title="God Who Sees the Wounded" />
            <VideoEmbed videoId="oNpTha80yyE" title="Shame and the Cross — Healing for Survivors" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Scripture and Prayer for Trauma Survivors" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
