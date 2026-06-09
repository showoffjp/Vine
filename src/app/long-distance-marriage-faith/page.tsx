"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Love Transcends Distance",
    verse: "Romans 8:38–39",
    text: "Nothing — not distance, not deployment, not oceans — can separate us from the love of God. This same theological claim extends to covenant marriage: physical separation cannot dissolve the spiritual bond of two lives given to one another before God.",
  },
  {
    title: "Faithfulness in Absence",
    verse: "Hebrews 13:4",
    text: "'Marriage should be honored by all, and the marriage bed kept pure.' Faithfulness is not only about what happens in shared space — it is about the orientation of the whole person toward one's spouse across any distance. Honor is a posture, not just a practice.",
  },
  {
    title: "Longing as Spiritual Formation",
    verse: "Psalm 42:1–2",
    text: "'As the deer pants for streams of water, so my soul pants for you, my God.' The ache of longing is not merely psychological pain — it can become the school of desire that deepens both love for God and love for spouse. Longing rightly ordered is a form of faithfulness.",
  },
  {
    title: "God in the Threshold Seasons",
    verse: "Isaiah 43:2",
    text: "'When you pass through the waters, I will be with you.' Long-distance seasons in marriage are threshold spaces — not normal life, not chosen, but traversable. God's presence is promised precisely in the passage through, not only in arrival.",
  },
  {
    title: "The Goodness of Reunion",
    verse: "Song of Solomon 3:4",
    text: "Scripture celebrates physical reunion as good and holy. The Song of Songs does not spiritualize away the longing for the beloved's presence. Long-distance marriage holds this longing as sacred — not something to suppress, but to honor and steward.",
  },
];

const voices = [
  {
    id: 1,
    name: "Gary Thomas",
    role: "Author, Sacred Marriage",
    quote: "Every hard season in marriage — including separation — is an invitation to love your spouse as God loves you: faithfully, beyond feeling.",
    bio: "Gary Thomas argues that marriage is primarily a vehicle for sanctification. Long-distance seasons, rather than being breaks in real marriage, are often the crucible in which deeper faithfulness and intentional love are forged.",
  },
  {
    id: 2,
    name: "Voddie Baucham",
    role: "Pastor & Author",
    quote: "Military families understand covenant in ways many comfortable couples never will. Distance forces you to choose love rather than coast in it.",
    bio: "Voddie Baucham has spoken extensively to military communities about marriage and faith. He honors the unique sacrifices military couples make and challenges the church to support these families with more than token acknowledgment.",
  },
  {
    id: 3,
    name: "Paul David Tripp",
    role: "Author, Marriage: 6 Gospel Commitments",
    quote: "Marriage is not a destination you reach. It is a covenant you choose over and over — from across the room or across the world.",
    bio: "Paul David Tripp's work on marriage centers on the gospel's daily renewal. He helps couples understand that distance reveals what was always true: love is chosen, not merely felt, and the daily acts of connection are themselves forms of worship.",
  },
  {
    id: 4,
    name: "Beth Morey",
    role: "Author & Military Spouse",
    quote: "I learned to find God in the silence of the empty side of the bed — and that made me less afraid of my own soul.",
    bio: "Beth Morey writes from personal experience of military deployments. Her work explores how the involuntary solitude of long-distance marriage can become a surprising space of spiritual depth when surrendered to God rather than merely endured.",
  },
];

const practices = [
  {
    icon: "📱",
    title: "Scheduled Connection Rituals",
    text: "Establish consistent video call times that function like family dinner — protected, regular, expected. Predictability builds security across distance. Name what you will do when you connect: prayer, a shared meal, a walk on video — not just status updates.",
  },
  {
    icon: "✉️",
    title: "Written Letters, Not Just Texts",
    text: "Write one physical letter or long email per month that goes beyond logistics. Share what you are learning, feeling, and noticing. Handwritten letters especially create a sense of presence that text cannot. This is the love language of distance.",
  },
  {
    icon: "🙏",
    title: "Praying Together Across Time Zones",
    text: "Designate one shared prayer time per day — even if asynchronous. Some couples pray aloud together on calls; others record voice prayers for the other to hear. Shared prayer maintains spiritual intimacy even when physical intimacy is impossible.",
  },
  {
    icon: "📖",
    title: "Read the Same Book Together",
    text: "Choose a book — Scripture, theology, a novel — to read simultaneously. Discuss it on your calls. Shared intellectual and spiritual engagement builds a sense of togetherness that transcends geography.",
  },
  {
    icon: "🛡️",
    title: "Guard Your Eyes and Heart Intentionally",
    text: "Long-distance seasons require heightened intentionality around media, relationships, and temptation. Discuss honestly with your spouse what guardrails help you remain faithful — not as suspicion, but as covenant care for one another.",
  },
  {
    icon: "🗓️",
    title: "Celebrate the Milestones from Afar",
    text: "Do not wait for reunion to mark anniversaries, birthdays, and achievements. Send a gift. Plan a video call dinner. Arrange for flowers. Honoring milestones from a distance communicates that your partner is worth celebrating regardless of your location.",
  },
];

const scriptures = [
  { verse: "Romans 8:38–39", text: "Neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God." },
  { verse: "Song of Solomon 8:6", text: "Place me like a seal over your heart, like a seal on your arm; for love is as strong as death, its jealousy unyielding as the grave." },
  { verse: "Psalm 139:7–10", text: "Where can I go from your Spirit? Where can I flee from your presence? If I go up to the heavens, you are there... even there your hand will guide me, your right hand will hold me fast." },
  { verse: "Proverbs 5:18", text: "May your fountain be blessed, and may you rejoice in the wife of your youth." },
  { verse: "1 Corinthians 13:7", text: "Love always protects, always trusts, always hopes, always perseveres." },
  { verse: "Ecclesiastes 4:12", text: "Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken." },
];

type LDEntry = { id: string; date: string; missing: string; gratitude: string; prayer: string };

export default function LongDistanceMarriageFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LDEntry[]>([]);
  const [missing, setMissing] = useState("");
  const [gratitude, setGratitude] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_longdistancemarriagefaithj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!missing.trim() && !gratitude.trim() && !prayer.trim()) return;
    const entry: LDEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      missing: missing.trim(),
      gratitude: gratitude.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_longdistancemarriagefaithj_entries", JSON.stringify(updated));
    setMissing(""); setGratitude(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_longdistancemarriagefaithj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>✈️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Long-Distance Marriage & Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For couples navigating deployment, relocation, immigration, or work separation — holding
            your covenant together across distance by the grace of God.
          </p>
        </div>

        {/* Crisis box */}
        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>Support resources:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://www.militaryonesource.mil" style={{ color: PURPLE }}>militaryonesource.mil</a> |{" "}
            <a href="https://focusonthefamily.com/marriage" style={{ color: PURPLE }}>focusonthefamily.com/marriage</a> |{" "}
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
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What do you miss most right now?</label>
              <textarea
                value={missing}
                onChange={(e) => setMissing(e.target.value)}
                rows={3}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What is one thing about your spouse you are grateful for today?</label>
              <textarea
                value={gratitude}
                onChange={(e) => setGratitude(e.target.value)}
                rows={2}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for your marriage across the distance:</label>
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
                    {e.missing && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Missing: </span>{e.missing}</p>}
                    {e.gratitude && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Grateful: </span>{e.gratitude}</p>}
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
            <VideoEmbed videoId="kfcVPh2VDhQ" title="Faithful Marriage Across Distance" />
            <VideoEmbed videoId="G5gLrHClpKQ" title="Covenant Love in Hard Seasons" />
            <VideoEmbed videoId="eBl7gT7gQ6e" title="Military Marriage and the Gospel" />
            <VideoEmbed videoId="NnGBhG03g4M" title="Prayer and Connection for Separated Spouses" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
