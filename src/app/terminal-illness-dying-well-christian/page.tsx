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
    title: "Death Is Not the Last Word",
    verse: "John 11:25–26",
    text: "'I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die.' Jesus did not say this at a distance — he said it at a grave, weeping, to a friend. The resurrection claim is embedded in the most embodied grief in the Gospels. Terminal diagnosis is not outside the resurrection story — it is the exact context for which it was made.",
  },
  {
    title: "The Body's Limits Are Not Spiritual Defeat",
    verse: "2 Corinthians 4:16–17",
    text: "'Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.' The wasting of the body is real. Paul does not deny it. But he sets it in a frame that is larger than the body — and does not rush past the wasting to get to the glory.",
  },
  {
    title: "The Intimacy of the Valley",
    verse: "Psalm 23:4",
    text: "'Even though I walk through the darkest valley, I will fear no evil, for you are with me.' The psalm does not say God removes the valley of the shadow of death — it says God is in it with us. Terminal illness is that valley. The promise is presence, not exemption.",
  },
  {
    title: "Unfinished Business Is Not the Final Measure",
    verse: "Philippians 1:21",
    text: "'For to me, to live is Christ and to die is gain.' Paul, facing possible execution, measured life and death by Christ, not by how much remained undone. A terminal diagnosis often surfaces grief over things left incomplete — relationships, projects, years. The gospel offers a different calculus: completion is not the measure of a life well-lived. Faithfulness is.",
  },
  {
    title: "The Saints Who Have Gone Before",
    verse: "Hebrews 12:1",
    text: "'Since we are surrounded by such a great cloud of witnesses...' Terminal illness can produce profound isolation. But the saints who have already crossed this threshold are not gone — they are witnesses. You are dying into community, not into nothing. The cloud of witnesses includes every person who has died in faith before you.",
  },
];

const voices = [
  {
    id: 1,
    name: "Paul Kalanithi",
    role: "Author, When Breath Becomes Air; Neurosurgeon",
    quote: "I was given a particular life and a particular death. Both were mine to inhabit as fully as I could.",
    bio: "Paul Kalanithi's memoir, written as he was dying of lung cancer at 36, is one of the most profound meditations on mortality in recent literature. His wrestling with faith, meaning, and legacy through a terminal diagnosis speaks to Christians and non-Christians alike, but his final chapters have a distinctly spiritual resonance.",
  },
  {
    id: 2,
    name: "Kate Bowler",
    role: "Author, Everything Happens for a Reason (and Other Lies I've Loved); Duke Divinity Professor",
    quote: "I want to live, and I don't always want to be comforted. Sometimes I just want someone to sit with me in the fact that this is terrible.",
    bio: "Kate Bowler was diagnosed with stage IV colon cancer at 35. Her subsequent writing and podcast have become indispensable resources for Christians facing terminal illness and those who love them. She cuts through toxic positivity with wit and theological depth.",
  },
  {
    id: 3,
    name: "Christopher de Vinck",
    role: "Author & Poet",
    quote: "My brother Oliver lived thirty-two years without ever speaking a word or walking a step, and yet he was the most complete human being I have ever known. Dying well is not about doing much. It is about being present.",
    bio: "Christopher de Vinck's reflections on his profoundly disabled brother and on death challenge any definition of a meaningful life that depends on productivity, speech, or accomplishment. For the terminally ill, this reframing of dignity is a gift.",
  },
  {
    id: 4,
    name: "Henri Nouwen",
    role: "Author, Our Greatest Gift: A Meditation on Dying and Caring",
    quote: "Can we wait for our deaths as for a friend who wants to welcome us home?",
    bio: "Henri Nouwen wrote extensively about dying — both as a spiritual director to the dying and as someone who faced his own mortality. His work invites Christians to approach death not as enemy to be defeated but as the final passage into the presence of the God who was always home.",
  },
];

const practices = [
  {
    icon: "📜",
    title: "Ethical Will and Faith Legacy",
    text: "An ethical will is a letter written to loved ones that passes on not possessions but values, faith, and story. Write yours — not to be morbid, but to do in writing what the dying have always done for the living: give them something to hold when you are gone. Your faith story is worth recording.",
  },
  {
    icon: "🙏",
    title: "The Examen for the End of Life",
    text: "Each evening, review the day with God using the Ignatian Examen adapted for terminal illness: Where did I notice God today? Where did I resist peace? What do I want to bring before God tonight? This practice keeps the spiritual interior alive even as the body diminishes.",
  },
  {
    icon: "🤝",
    title: "Hospice and Palliative Care as Spiritual Gift",
    text: "Accepting hospice care is not giving up — it is choosing to die with dignity, comfort, and presence rather than in the machinery of prolonged intervention. Hospice workers are often among the most spiritually sensitive caregivers in medicine. Receiving their care is wisdom.",
  },
  {
    icon: "📞",
    title: "Say the Things",
    text: "Before death removes the opportunity, say to those who matter: 'I love you. I'm sorry for [specific thing]. Thank you for [specific thing]. I forgive you.' These four utterances — love, repentance, gratitude, forgiveness — are the ancient Christian art of dying well. Don't wait until you have the perfect words.",
  },
  {
    icon: "📖",
    title: "Read the Saints Who Died Well",
    text: "The Christian tradition has resources for dying: Ars Moriendi, medieval art of dying well; the death scenes in Acts and Paul's letters; testimonies of modern saints. Reading how others navigated this path does not take away your fear, but it gives you companions who have walked ahead.",
  },
  {
    icon: "🌟",
    title: "Receive the Ministry of Others",
    text: "Terminal illness often requires learning to receive — prayer, meals, presence, reading, being bathed — with grace rather than shame. This is hard for independent people. But allowing others to care for you in dying is a gift you give them, not only a burden you accept. Let them serve.",
  },
];

const scriptures = [
  { verse: "John 11:25–26", text: "I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die." },
  { verse: "Romans 8:38–39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God." },
  { verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
  { verse: "2 Timothy 4:7–8", text: "I have fought the good fight, I have finished the race, I have kept the faith. Now there is in store for me the crown of righteousness, which the Lord, the righteous Judge, will award to me on that day." },
  { verse: "Philippians 1:21", text: "For to me, to live is Christ and to die is gain." },
];

type TIEntry = { id: string; date: string; today: string; say: string; prayer: string };

export default function TerminalIllnessDyingWellChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<TIEntry[]>([]);
  const [today, setToday] = useState("");
  const [say, setSay] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_terminalillnessdyingwellj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!today.trim() && !say.trim() && !prayer.trim()) return;
    const entry: TIEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      today: today.trim(),
      say: say.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_terminalillnessdyingwellj_entries", JSON.stringify(updated));
    setToday(""); setSay(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_terminalillnessdyingwellj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>✝️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Terminal Illness & Dying Well
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For those facing a terminal diagnosis — and for those who love them. Navigating the
            final season with faith, honesty, and the hope of resurrection.
          </p>
        </div>

        {/* Support box */}
        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>Palliative care and support resources:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://www.nhpco.org" style={{ color: PURPLE }}>nhpco.org (Hospice & Palliative Care)</a> |{" "}
            <a href="https://www.griefshare.org" style={{ color: PURPLE }}>griefshare.org</a> |{" "}
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
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What is today like — in your body, your soul, your heart?</label>
              <textarea
                value={today}
                onChange={(e) => setToday(e.target.value)}
                rows={3}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Is there something you want to say to someone before it&apos;s harder to say?</label>
              <textarea
                value={say}
                onChange={(e) => setSay(e.target.value)}
                rows={2}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for this day — or for those you will leave behind:</label>
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
                    {e.today && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Today: </span>{e.today}</p>}
                    {e.say && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>To say: </span>{e.say}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="oNpTha80yyE" title="Facing Death with Faith — The Christian Hope" />
            <VideoEmbed videoId="jJPVNIAFmvA" title="When Breath Becomes Air — Paul Kalanithi's Legacy" />
            <VideoEmbed videoId="NnGBhG03g4M" title="Kate Bowler: Everything Happens — Living with Terminal Illness" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayers for the Dying and Those Who Love Them" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
