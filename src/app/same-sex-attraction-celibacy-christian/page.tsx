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
    title: "You Are Not Your Sexuality",
    verse: "Galatians 3:28",
    text: "'There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.' Your fundamental identity before God is not your sexuality — it is your membership in Christ. Same-sex attraction is a real and significant part of your experience; it is not the totality of who you are.",
  },
  {
    title: "Celibacy Is a Calling, Not a Consolation Prize",
    verse: "1 Corinthians 7:7",
    text: "'I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that.' Paul describes celibacy as a charism — a gift — not merely a prohibition. The celibate person who has not chosen this path it still may discover that it is a genuine vocation, capable of bearing unique fruit.",
  },
  {
    title: "Friendship and Community Are Not Lesser",
    verse: "1 Samuel 18:1",
    text: "'The soul of Jonathan was knit to the soul of David, and Jonathan loved him as his own soul.' The friendship between David and Jonathan is among the most intimate relationships in Scripture. Deep, committed, non-sexual friendship is a genuine form of human flourishing — not a substitute for something better.",
  },
  {
    title: "The Cross and the Cost",
    verse: "Matthew 16:24",
    text: "'Whoever wants to be my disciple must deny themselves and take up their cross and follow me.' Christian discipleship asks costly things of everyone. For the gay Christian who holds a traditional sexual ethic, the cost is real and should not be minimized by those who do not pay it. The cross is actual, not theoretical.",
  },
  {
    title: "The Church Must Provide More Than Prohibitions",
    verse: "Mark 3:34–35",
    text: "'Looking at those seated in a circle around him, he said, \"Here are my mother and my brothers! Whoever does God's will is my brother and sister and mother.\"' Jesus redefined family around discipleship. The church that would ask gay Christians to choose celibacy must also provide genuine family — real belonging, real intimacy — not merely doctrinal compliance.",
  },
];

const voices = [
  {
    id: 1,
    name: "Wesley Hill",
    role: "Author, Washed and Waiting; New Testament Scholar",
    quote: "I am not gay and Christian despite my faith, but gay and Christian because of it — because the tradition has given me something to do with my longing.",
    bio: "Wesley Hill's memoir of life as a gay, celibate Christian is the most important work of its kind. He does not pretend the cost is small or the path is clear — but he argues that the Christian tradition, rightly received, provides genuine resources for a life of chastity that is full rather than empty.",
  },
  {
    id: 2,
    name: "Sam Allberry",
    role: "Author, Is God Anti-Gay?; Speaker",
    quote: "Being gay and celibate is not a life of deprivation. It is a life shaped by the same cross that shapes every Christian life.",
    bio: "Sam Allberry has become one of the most important voices for gay Christians holding a traditional sexual ethic. He speaks and writes with pastoral warmth about the specific challenges and specific gifts of celibacy — and challenges the church to provide the community without which celibacy becomes a form of punishment.",
  },
  {
    id: 3,
    name: "Eve Tushnet",
    role: "Author, Gay and Catholic; Writer",
    quote: "The question is not only what you can't do. It is what you can. Celibacy is not an empty life — it is a different kind of full life.",
    bio: "Eve Tushnet writes about Catholic celibacy with creativity and theological depth. Her work invites gay Christians to think expansively about what their orientation and vocation might offer the church — not merely what they must forego.",
  },
  {
    id: 4,
    name: "Rosaria Butterfield",
    role: "Author, The Secret Thoughts of an Unlikely Convert; Former Professor",
    quote: "The question that changed my life was: is Jesus worth it? Not: is this easy? Not: is this fair? But: is Jesus worth it?",
    bio: "Rosaria Butterfield came to Christian faith out of a lesbian relationship and a tenured academic career. Her story and theology have been both formative and contested. She writes from a place of genuine cost, genuine conviction, and genuine community — and calls the church to take all three seriously.",
  },
];

const practices = [
  {
    icon: "🤝",
    title: "Build Your Family of Choice",
    text: "The church must become genuine family — not just fellowship — for gay Christians who choose celibacy. Pursue deep, committed friendship intentionally. Invite yourself in. Name what you need from community: presence, shared meals, someone to call at 3am. These relationships require investment from both sides.",
  },
  {
    icon: "📖",
    title: "Find Your Theological Community",
    text: "Find a church and small group where you can be known — as a gay Christian, holding whatever theological position you hold — without performing a simplified version of yourself. Being known and loved in your specificity is necessary for sustained faithfulness.",
  },
  {
    icon: "🙏",
    title: "Offer Your Longing to God",
    text: "The desire for intimacy, for being known and loved, for the specific form of connection you experience — offer it to God in prayer, not as something to be extinguished, but as something real that you bring to him. 'Lord, this is what I carry. I don't know what to do with it. Hold it with me.' This is honest prayer.",
  },
  {
    icon: "🧑‍⚕️",
    title: "Find a Therapist Who Will Not Weaponize Your Faith",
    text: "Find a therapist who neither pressures you toward a traditional ethic nor dismisses it — one who can help you integrate your faith, your sexuality, and your emotional life honestly. This person is rare and worth the search. Sexual orientation change efforts (conversion therapy) are harmful and should be avoided.",
  },
  {
    icon: "📚",
    title: "Read in the Tradition of Celibate Christians",
    text: "The church has a tradition of celibate Christians — monks, nuns, single ministers — whose lives have been full and whose witness has been rich. Read Thomas Merton, Jean Vanier, Simone Weil, Henri Nouwen. Let their lives expand your imagination for what a celibate life might become.",
  },
  {
    icon: "🌿",
    title: "Name the Cost Honestly",
    text: "Do not suppress or spiritualize the grief that comes with celibacy. The longing for a partner, for children, for the specific form of physical intimacy that marriage provides — these are real. Naming them honestly to God and to a trusted community is not a failure of faith. It is the honest prayer of someone carrying a real cross.",
  },
];

const scriptures = [
  { verse: "1 Corinthians 7:7", text: "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that." },
  { verse: "Matthew 19:12", text: "For there are eunuchs who were born that way, and there are eunuchs who have been made eunuchs by others — and there are those who choose to live like eunuchs for the sake of the kingdom of heaven. The one who can accept this should accept it." },
  { verse: "Psalm 73:25–26", text: "Whom have I in heaven but you? And earth has nothing I desire besides you. My flesh and my heart may fail, but God is the strength of my heart and my portion forever." },
  { verse: "Isaiah 56:4–5", text: "To the eunuchs who keep my Sabbaths, who choose what pleases me and hold fast to my covenant — to them I will give within my temple and its walls a memorial and a name better than sons and daughters." },
  { verse: "Romans 8:18", text: "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us." },
  { verse: "Matthew 16:24", text: "Then Jesus said to his disciples, 'Whoever wants to be my disciple must deny themselves and take up their cross and follow me.'" },
];

type SSACEntry = { id: string; date: string; honest: string; receive: string; prayer: string };

export default function SameSexAttractionCelibacyChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SSACEntry[]>([]);
  const [honest, setHonest] = useState("");
  const [receive, setReceive] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_samesexattractioncelibacychristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!honest.trim() && !receive.trim() && !prayer.trim()) return;
    const entry: SSACEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      honest: honest.trim(),
      receive: receive.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_samesexattractioncelibacychristj_entries", JSON.stringify(updated));
    setHonest(""); setReceive(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_samesexattractioncelibacychristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>✝️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Same-Sex Attraction, Celibacy & Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For gay Christians holding a traditional sexual ethic — navigating the cost honestly,
            finding genuine community, and discovering what faithfulness can look like in this life.
          </p>
        </div>

        <div style={{ background: "#0a0a1a", border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: MUTED, fontWeight: "bold", margin: "0 0 0.5rem" }}>Support and community:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://www.wesleyhill.com" style={{ color: PURPLE }}>wesleyhill.com</a> |{" "}
            <a href="https://www.living-out.org" style={{ color: PURPLE }}>living-out.org (Sam Allberry)</a> |{" "}
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
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>Where are you honestly today — in your faith, your longing, your community?</label>
              <textarea value={honest} onChange={(e) => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What do you most need to receive from God or from the church right now?</label>
              <textarea value={receive} onChange={(e) => setReceive(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }} />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for this season of your life:</label>
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
                    {e.receive && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Needing: </span>{e.receive}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="LQNbUqVwVlo" title="Wesley Hill — Washed and Waiting" />
            <VideoEmbed videoId="eBl7gT7gQ6e" title="Sam Allberry — What Does the Bible Say About Homosexuality?" />
            <VideoEmbed videoId="NnGBhG03g4M" title="Gay and Christian — Navigating Faith and Sexuality" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Prayer for Gay Christians Seeking to Live Faithfully" />
          </div>
        )}
      </div>
    </div>
  );
}
