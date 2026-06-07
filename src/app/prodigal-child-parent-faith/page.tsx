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
    title: "The Father Who Waits",
    verse: "Luke 15:20",
    text: "Before the prodigal son could speak his rehearsed apology, 'his father saw him and was filled with compassion for him; he ran to his son.' The parable is not primarily about the child's return — it is about the father's watching, the father's running, the father's reckless mercy. You are not the one who saves your child. You are the one who waits, loves, and keeps the light on.",
  },
  {
    title: "The Limits of Faithful Parenting",
    verse: "Ezekiel 18:20",
    text: "'The one who sins is the one who will die. The child will not share the guilt of the parent, nor will the parent share the guilt of the child.' This passage cuts in both directions. Your child's choices are their own. A child's wandering is not proof of your failure — nor is their return proof of your success. God alone saves.",
  },
  {
    title: "Holding Hope Without Controlling Outcomes",
    verse: "Proverbs 16:9",
    text: "'In their hearts humans plan their course, but the Lord establishes their steps.' The hardest theological work for a parent of a prodigal is releasing the illusion of control while maintaining genuine hope. Hope without control is the narrow road — and it is where God meets parents who have tried everything.",
  },
  {
    title: "Prayer as the Only Ground Remaining",
    verse: "Romans 8:26",
    text: "'We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.' When you do not know how to pray for your child, the Spirit prays for you. The wordless groan of a parent on their knees is itself a form of prayer that God receives as such.",
  },
  {
    title: "God's Love for the Wanderer",
    verse: "Romans 5:8",
    text: "'While we were still sinners, Christ died for us.' Your child — wherever they are — is not beyond the reach of the God who loved prodigals first, while they were still far away. God's love is not contingent on the child's return, and neither is his pursuit.",
  },
];

const voices = [
  {
    id: 1,
    name: "Jonathan Pennington",
    role: "New Testament Scholar, Author",
    quote: "The parable of the prodigal is really about two lost sons and a relentlessly merciful father. The older brother's lostness is often where parents find themselves.",
    bio: "Pennington's reading of Luke 15 surfaces the often-ignored older brother dynamic. Parents of prodigals frequently identify with the resentful, confused older sibling as much as with the watching father — and this pastoral honesty opens room for their own spiritual work.",
  },
  {
    id: 2,
    name: "Barbara R. Duguid",
    role: "Author, Extravagant Grace",
    quote: "God's grace is not a reward for parents who raised their children correctly. It is an ocean large enough to hold your failure, your child's rebellion, and your desperate hope simultaneously.",
    bio: "Barbara Duguid writes about grace and sanctification with unflinching honesty. Her work helps parents release shame about their child's choices while also surrendering their need to manage God's timeline for their child's return.",
  },
  {
    id: 3,
    name: "Mark Batterson",
    role: "Pastor & Author, Draw the Circle",
    quote: "Circle your prodigal in prayer. Don't stop. Your prayers are never wasted, even when nothing changes.",
    bio: "Mark Batterson has popularized prayer circles as a practice of persistent intercession. His encouragement to parents of prodigals is theological: God hears prayers for wandering children, even when the child shows no sign of turning. Prayer changes the parent as much as the prodigal.",
  },
  {
    id: 4,
    name: "Paul David Tripp",
    role: "Author, Parenting: 14 Gospel Principles",
    quote: "Every parent is a sinner raising sinners. Your child's rebellion does not prove your failure — it proves that every human being needs a Savior.",
    bio: "Tripp reframes parenting around grace rather than technique. His pastoral counsel to parents of prodigals consistently returns to the gospel: you needed rescue too, and the God who rescued you is the same God pursuing your child.",
  },
];

const practices = [
  {
    icon: "⭕",
    title: "Prayer Circles for Your Prodigal",
    text: "Write your child's name on a piece of paper and place it before you during prayer. Bring their face before God daily. Don't try to fix the prayer — let it be tears, silence, a single name. God receives them all.",
  },
  {
    icon: "📞",
    title: "Maintain One Open Door",
    text: "Healthy boundaries do not require severing all contact. Where possible, maintain one low-pressure form of connection — a text on birthdays, a card at Christmas. Let them know you are still there without attaching conditions to contact. The father kept watching the horizon.",
  },
  {
    icon: "🤝",
    title: "Find Your Community of Similar Parents",
    text: "Parents of prodigals are often isolated by shame or by the exhaustion of explaining a complicated situation. Seek out a small group of parents in similar situations — through your church, through Prodigals International, or informally. Shared suffering is lighter.",
  },
  {
    icon: "📖",
    title: "Read Luke 15 Slowly, Weekly",
    text: "Sit with the parable of the prodigal son once a week for a season. Each time, ask: where do I see myself — the father, the older brother, the watching crowd? What does the father's posture ask of me this week? Let the text shape your waiting.",
  },
  {
    icon: "✋",
    title: "Release the Outcome to God Deliberately",
    text: "Some parents benefit from a ritual of release — physically opening your hands, naming your child aloud, and saying: 'God, I give [name] to you. I cannot save them. You can.' This is not resignation — it is the beginning of genuine prayer rather than panic.",
  },
  {
    icon: "🌱",
    title: "Tend Your Own Soul",
    text: "Your child's wandering can consume everything if you let it. Maintain your own spiritual practices — not to earn God's favor, but because you need to be alive and healthy for whatever comes next. Grief is real, but you are also still alive and beloved.",
  },
];

const scriptures = [
  { verse: "Luke 15:20", text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Isaiah 49:15–16", text: "Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands." },
  { verse: "2 Peter 3:9", text: "The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance." },
  { verse: "Lamentations 3:25", text: "The Lord is good to those whose hope is in him, to the one who seeks him." },
  { verse: "Psalm 27:14", text: "Wait for the Lord; be strong and take heart and wait for the Lord." },
];

type PCEntry = { id: string; date: string; name: string; holding: string; prayer: string };

export default function ProdigalChildParentFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PCEntry[]>([]);
  const [name, setName] = useState("");
  const [holding, setHolding] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_prodigalchildparentfaithj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!name.trim() && !holding.trim() && !prayer.trim()) return;
    const entry: PCEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      name: name.trim(),
      holding: holding.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_prodigalchildparentfaithj_entries", JSON.stringify(updated));
    setName(""); setHolding(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_prodigalchildparentfaithj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🕯️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Parenting a Prodigal Child
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For parents whose children have walked away — from faith, from family, from the life
            you prayed over them. Holding on while learning to let go.
          </p>
        </div>

        {/* Support box */}
        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>Support resources:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://www.prodigalsinternational.com" style={{ color: PURPLE }}>prodigalsinternational.com</a> |{" "}
            <a href="https://www.celebraterecovery.com" style={{ color: PURPLE }}>celebraterecovery.com</a> |{" "}
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
                border: `1px solid ${tab === t ? PURPLE : BORDER}`,
                background: tab === t ? PURPLE : CARD,
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

        {/* Theology */}
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

        {/* Voices */}
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

        {/* Practices */}
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

        {/* Scripture */}
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

        {/* Journal */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Name your child before God. What do you want him to know about them today?</label>
              <textarea
                value={name}
                onChange={(e) => setName(e.target.value)}
                rows={3}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What are you holding about this season that feels too heavy?</label>
              <textarea
                value={holding}
                onChange={(e) => setHolding(e.target.value)}
                rows={2}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for your prodigal today:</label>
              <textarea
                value={prayer}
                onChange={(e) => setPrayer(e.target.value)}
                rows={3}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <button
                onClick={saveEntry}
                style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}
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
                    {e.name && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Named: </span>{e.name}</p>}
                    {e.holding && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Holding: </span>{e.holding}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Videos */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="NnGBhG03g4M" title="Hope for Parents of Prodigal Children" />
            <VideoEmbed videoId="j2h-q3ZPKFI" title="Praying for Your Wandering Child" />
            <VideoEmbed videoId="ZGk1hl1nNrw" title="The Father Who Runs — Luke 15 Explored" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Releasing Your Child to God" />
          </div>
        )}
      </div>
    </div>
  );
}
