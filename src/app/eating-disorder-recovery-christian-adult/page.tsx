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
    title: "The Body as Temple, Not Enemy",
    verse: "1 Corinthians 6:19–20",
    text: "Paul writes that the body is a temple of the Holy Spirit. For those in eating disorder recovery, this verse must be handled carefully — it has been misused to shame. Rightly understood, it is an invitation to reverence: your body is not a project to perfect, but a dwelling place to tend with the same care you would any sacred space.",
  },
  {
    title: "Food as Sacramental Gift",
    verse: "1 Timothy 4:4–5",
    text: "'Everything God created is good, and nothing is to be rejected if it is received with thanksgiving.' Food is not morally loaded — it is not 'clean' or 'bad' in the ways eating disorder thinking makes it. Receiving food with gratitude is a form of worship, not weakness.",
  },
  {
    title: "God Who Sees the Body's Exhaustion",
    verse: "1 Kings 19:5–6",
    text: "Elijah collapsed in burnout and despair, and an angel brought him food and water — twice. God's first response to the prophet's crisis was not a sermon but a meal. God meets physical need without shame, because bodies matter and their exhaustion is real.",
  },
  {
    title: "You Are More Than Your Appearance",
    verse: "1 Samuel 16:7",
    text: "'People look at the outward appearance, but the Lord looks at the heart.' The relentless cultural pressure to appear a certain way is not God's measure. You are not the number on the scale, the reflection in the mirror, or the size of your body. God measures differently.",
  },
  {
    title: "Slow Healing as Faithful Process",
    verse: "Lamentations 3:32–33",
    text: "'Though he brings grief, he will show compassion, so great is his unfailing love. For he does not willingly bring affliction.' Recovery from an eating disorder is long and non-linear. God does not demand quick recovery — he accompanies slow healing with unfailing presence.",
  },
];

const voices = [
  {
    id: 1,
    name: "Jenni Schaefer",
    role: "Author, Life Without Ed",
    quote: "Recovery is not about finding the willpower to eat. It is about finding the willingness to live.",
    bio: "Jenni Schaefer writes about recovery from anorexia through the practice of externalizing the disorder — treating it as a separate voice (Ed) rather than one's true self. Her framework resonates with Christian understandings of sin as an intruder, not the person's identity.",
  },
  {
    id: 2,
    name: "Sharon Hersh",
    role: "Counselor & Author, Mom, I Feel Fat",
    quote: "The war on your body is really a war on your soul. Healing must happen at both levels.",
    bio: "Sharon Hersh is a Christian counselor who works at the intersection of addiction, eating disorders, and spiritual formation. She insists that eating disorder recovery cannot be reduced to behavioral change — it requires soul-level healing and community.",
  },
  {
    id: 3,
    name: "Erin S. Lane",
    role: "Author & Theologian",
    quote: "To eat well is to practice resurrection — to take what was dead and let it nourish life again.",
    bio: "Erin Lane writes about embodied spirituality and the reclamation of the body in Christian practice. Her work helps women see eating not as a battleground but as a sacred act of receiving life — a kind of daily Eucharist.",
  },
  {
    id: 4,
    name: "Juli Slattery",
    role: "Founder, Authentic Intimacy; Clinical Psychologist",
    quote: "Shame has no power in recovery. God's love is the only force strong enough to replace what shame destroyed.",
    bio: "Juli Slattery addresses the shame cycles embedded in eating disorders from a clinical and theological perspective. She helps women distinguish between the voice of God — which invites, not condemns — and the voice of the disorder, which weaponizes shame.",
  },
];

const practices = [
  {
    icon: "🍽️",
    title: "Structured, Supported Meals",
    text: "Recovery research consistently shows that eating at regular, structured times with support reduces restriction and binge cycles. If possible, eat one meal per day with another person. This is not weakness — it is medicine. Ask your community to be part of your recovery table.",
  },
  {
    icon: "📓",
    title: "Separating Thought from Truth",
    text: "When eating disorder thoughts arise ('I shouldn't eat this', 'I'm disgusting'), write them down — then write a theological counter. Not a positive affirmation, but a true statement: 'God created this food good. I am receiving a gift.' This retrains the inner narrative slowly.",
  },
  {
    icon: "🙏",
    title: "Pre-Meal Prayer for the Ordinary",
    text: "Before each meal, pray one sentence — not about your recovery, but about the food itself: 'Thank you.' This is radical for someone whose relationship with food has been fear and control. Gratitude before eating begins to rewire the emotional relationship with nourishment.",
  },
  {
    icon: "👩‍⚕️",
    title: "Professional Treatment as Faithful Care",
    text: "Eating disorder recovery typically requires a team: therapist, dietitian, physician, and psychiatrist. Seeking professional help is not a failure of faith — it is faithful stewardship of the body God gave you. Do not let spiritual language substitute for medical care.",
  },
  {
    icon: "🤝",
    title: "Accountable Disclosure",
    text: "Tell one trusted person the truth about where you are in recovery. Eating disorders thrive in secrecy. Disclosure is not performance — you do not need to share everything with everyone. But one person who knows the truth becomes an anchor against the isolation the disorder requires.",
  },
  {
    icon: "📖",
    title: "Lectio Divina on the Body",
    text: "Choose one passage about God's care for the body (Isaiah 40:11, Matthew 6:25-26) and read it slowly, repeatedly, over a week. Ask: what does God say about my body here? Let the text do its slow work rather than trying to fix your thinking all at once.",
  },
];

const scriptures = [
  { verse: "1 Corinthians 6:19–20", text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies." },
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "Matthew 6:25", text: "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?" },
  { verse: "1 Kings 19:6", text: "He looked around, and there by his head was some bread baked over hot coals, and a jar of water. He ate and drank and then lay down again." },
  { verse: "Isaiah 55:2", text: "Why spend money on what is not bread, and your labor on what does not satisfy? Listen, listen to me, and eat what is good, and you will delight in the richest of fare." },
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
];

type EDEntry = { id: string; date: string; honest: string; received: string; prayer: string };

export default function EatingDisorderRecoveryChristianAdultPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<EDEntry[]>([]);
  const [honest, setHonest] = useState("");
  const [received, setReceived] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_eatingdisorderrecoveryadultj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!honest.trim() && !received.trim() && !prayer.trim()) return;
    const entry: EDEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      honest: honest.trim(),
      received: received.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_eatingdisorderrecoveryadultj_entries", JSON.stringify(updated));
    setHonest(""); setReceived(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_eatingdisorderrecoveryadultj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌿</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Eating Disorder Recovery & Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For adults navigating recovery from anorexia, bulimia, binge eating, or disordered eating —
            reclaiming the body as a gift, not a battleground.
          </p>
        </div>

        {/* Crisis box */}
        <div style={{ background: "#1a0a0a", border: "1px solid #5a2020", borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: "#f87171", fontWeight: "bold", margin: "0 0 0.5rem" }}>If you are in medical crisis or need immediate help:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            NEDA Helpline: <strong style={{ color: TEXT }}>1-800-931-2237</strong> |{" "}
            <a href="https://www.nationaleatingdisorders.org" style={{ color: GREEN }}>nationaleatingdisorders.org</a> |{" "}
            <a href="https://www.eatingrecoverycenter.com" style={{ color: GREEN }}>eatingrecoverycenter.com</a> |{" "}
            Crisis Text Line: text <strong style={{ color: TEXT }}>NEDA</strong> to <strong style={{ color: TEXT }}>741741</strong>
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

        {/* Theology */}
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

        {/* Voices */}
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
                <div style={{ color: GREEN, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
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
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Where are you honestly in your recovery today?</label>
              <textarea
                value={honest}
                onChange={(e) => setHonest(e.target.value)}
                rows={3}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What did you receive from God — or from your body — today that surprised you?</label>
              <textarea
                value={received}
                onChange={(e) => setReceived(e.target.value)}
                rows={2}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer about your body and your healing:</label>
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
                    {e.honest && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Honest: </span>{e.honest}</p>}
                    {e.received && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Received: </span>{e.received}</p>}
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
            <VideoEmbed videoId="y-DQH-M1HuM" title="Faith and Eating Disorder Recovery" />
            <VideoEmbed videoId="NnGBhG03g4M" title="The Body as Temple — A Theology of Recovery" />
            <VideoEmbed videoId="oNpTha80yyE" title="Shame, Healing, and the Gospel" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Those in Recovery" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
