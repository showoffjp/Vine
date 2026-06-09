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
    title: "Jesus Himself Knew Loneliness",
    verse: "John 16:32",
    text: "\"A time is coming and in fact has come when you will be scattered, each to your own home. You will leave me all alone. Yet I am not alone, for my Father is with me.\" In the garden, the disciples slept. On the cross, Jesus cried out about abandonment. The loneliness of single adult life — of navigating a church designed for families, of watching others achieve milestones you have not — is not unknown to the God you serve. He walked it.",
  },
  {
    title: "The Church Was Supposed to Be the Alternative Family",
    verse: "Mark 3:34–35",
    text: "\"Looking at those seated in a circle around him, he said, 'Here are my mother and my brothers! Whoever does God's will is my brother and sister and mother.'\" Jesus explicitly created an alternative family structure rooted in discipleship, not blood. The church that has become a machine for nuclear family ministry and has no genuine community for single adults has failed this text. The single adult's loneliness is, in part, a symptom of the church's structural failure.",
  },
  {
    title: "Paul Called Singleness a Gift — and Meant It",
    verse: "1 Corinthians 7:7–8",
    text: "\"I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that. Now to the unmarried and the widows I say: It is good for them to stay unmarried, as I do.\" The church has so thoroughly domesticated Paul's celebration of singleness that it barely exists in practice. Singleness is not consolation prize Christianity. It is one legitimate gift among others — with unique freedom for undivided devotion.",
  },
  {
    title: "God Made Humans for Companionship, and Your Need Is Legitimate",
    verse: "Genesis 2:18",
    text: "\"The LORD God said, 'It is not good for the man to be alone. I will make a helper suitable for him.'\" Before the fall, before sin, in the context of walking with God daily — God declared aloneness insufficient. The chronic loneliness of a single adult is not a spiritual weakness. It is a sign that you are functioning exactly as a human being was designed to function: with a genuine need for companionship that the church must take seriously.",
  },
  {
    title: "Fruitfulness Is Not Contingent on Marriage",
    verse: "John 15:5",
    text: "\"I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.\" The vine image does not segregate branches by marital status. Fruitfulness — the bearing of love, joy, peace, community, and the works of the kingdom — is available to the single person precisely as it is to the married. The single adult's life is not awaiting authorization to begin.",
  },
];

const voices = [
  {
    id: 1,
    name: "Wesley Hill",
    role: "Author, Spiritual Friendship; New Testament Scholar",
    quote: "The church has impoverished its own life by making marriage the primary vehicle of intimacy and treating friendship as a lesser form of love. This is not the New Testament's vision.",
    bio: "Hill's work on spiritual friendship as a serious Christian vocation has offered single adults — especially those who will remain single — a theological framework for deep relational life outside of marriage.",
  },
  {
    id: 2,
    name: "Kate Bowler",
    role: "Author, Everything Happens for a Reason; Duke Divinity Professor",
    quote: "The church has a gospel for couples and families. It has not yet developed a full gospel for those who are single, childless, or unmarried through no choice of their own.",
    bio: "Bowler's writing on prosperity theology and its distortions has included sharp critique of how Christian culture implicitly promises that faithfulness leads to family — leaving single and childless adults spiritually homeless.",
  },
  {
    id: 3,
    name: "Paul Tripp",
    role: "Author, New Morning Mercies; Counselor",
    quote: "The loneliness you feel is not evidence that God has forgotten you. It is evidence that you were made for something you do not yet fully have.",
    bio: "Tripp's pastoral writing has addressed loneliness as a legitimate human experience rooted in design, not defect, providing a compassionate theological framework that neither minimizes the pain nor pathologizes the person.",
  },
  {
    id: 4,
    name: "Tish Harrison Warren",
    role: "Author, Liturgy of the Ordinary; Anglican Priest",
    quote: "The daily practices of faith — morning prayer, evening prayer, the daily office — were designed precisely for people who live alone. They provide rhythm, community, and presence for a solitary life.",
    bio: "Warren's work on liturgical practice has been particularly meaningful for single adults seeking daily spiritual structure that does not require family to function, offering rhythm and embodied faith practices for those who live alone.",
  },
];

const practices = [
  {
    icon: "🗓️",
    title: "Build Rhythms That Do Not Require a Family",
    text: "Daily morning prayer, evening prayer, weekly communal worship, monthly deeper community, annual retreats — liturgical rhythms provide structure for single adult life that does not depend on family-based routine. The daily office was designed for people who live alone.",
  },
  {
    icon: "🤝",
    title: "Invest Deliberately in Friendships",
    text: "Friendship requires the same investment that marriage requires — shared time, vulnerability, commitment, and consistency. The loneliness of single adult life is often relieved not by finding a partner but by investing in friendships with the seriousness they deserve.",
  },
  {
    icon: "🏠",
    title: "Create or Find a Shared Household",
    text: "Intentional shared housing — with other single adults, with a family, or in a formal intentional community — is one of the most effective responses to chronic loneliness. It restores the texture of daily shared life that single-apartment isolation removes.",
  },
  {
    icon: "⛪",
    title: "Ask Your Church to See You",
    text: "Directly ask your pastor or community to evaluate how single adult ministry functions. Are singles integrated into family life or segregated? Are their contributions to community celebrated as legitimate fruitfulness? Are they included in decisions about community life? Advocacy is not bitterness — it is faithfulness.",
  },
  {
    icon: "📞",
    title: "Address Clinical Loneliness If Needed",
    text: "Chronic loneliness has measurable health effects — equivalent to smoking 15 cigarettes a day in mortality risk. If your loneliness has become clinical (pervasive, persistent, affecting health and function), therapy can help address the beliefs and patterns that may be preventing connection.",
  },
  {
    icon: "✝️",
    title: "Claim the Theology Paul Actually Wrote",
    text: "Read 1 Corinthians 7, Ephesians 3, and the biographies of Paul, John the Baptist, and Jesus himself. Reclaim a theology of singleness as an actual Christian vocation — not as waiting room theology, but as legitimate adult Christian life.",
  },
];

const scriptures = [
  { verse: "Psalm 68:6", text: "\"God sets the lonely in families, he leads out the prisoners with singing; but the rebellious live in a sun-scorched land.\"" },
  { verse: "Romans 8:38–39", text: "\"Neither death nor life, neither angels nor demons, neither the present nor the future... will be able to separate us from the love of God that is in Christ Jesus our Lord.\"" },
  { verse: "Isaiah 54:5", text: "\"For your Maker is your husband — the LORD Almighty is his name — the Holy One of Israel is your Redeemer; he is called the God of all the earth.\"" },
  { verse: "Hebrews 13:5", text: "\"Never will I leave you; never will I forsake you.\"" },
  { verse: "Matthew 28:20", text: "\"And surely I am with you always, to the very end of the age.\"" },
  { verse: "Psalm 27:10", text: "\"Though my father and mother forsake me, the LORD will receive me.\"" },
];

type LonelinessEntry = {
  id: string;
  date: string;
  feeling: string;
  connection: string;
  prayer: string;
};

export default function ChronicLonelinessSingleAdultPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LonelinessEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [connection, setConnection] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_chroniclonelinesssingleadult_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: LonelinessEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      feeling,
      connection,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_chroniclonelinesssingleadult_entries", JSON.stringify(updated));
    setFeeling(""); setConnection(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_chroniclonelinesssingleadult_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🕊️</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Chronic Loneliness & Single Adult Christian Life
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For single adults navigating the loneliness of a church designed for families — theology that takes singleness seriously as a vocation, community resources, and honest pastoral care for the real weight of chronic aloneness.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> — call or text 988 | <strong>Crisis Text Line:</strong> Text HOME to 741741
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${GREEN}` }}>
                <div style={{ color: GREEN, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What does my loneliness feel like today — honestly?</label>
                <textarea value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>One specific connection or step toward connection I can take this week:</label>
                <textarea value={connection} onChange={e => setConnection(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer about your life as it actually is today:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.feeling && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Feeling:</strong> {e.feeling}</p>}
                {e.connection && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Connection:</strong> {e.connection}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="n3Xv_g3g-mA" title="Wesley Hill — Spiritual Friendship and Single Christian Life" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Wesley Hill: Spiritual Friendship and Single Adult Life</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Hill on recovering a theology of deep friendship as the primary relational vocation for single Christians</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="TRsQJLmUkIQ" title="The Epidemic of Loneliness and the Church's Response" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Epidemic of Loneliness: What the Church Must Do</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Research on chronic loneliness as a public health crisis and what faith communities uniquely can offer</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="INqQxU3l7eM" title="Singleness as Vocation — A Biblical View" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Singleness as Vocation: What Paul Actually Said</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Recovering Paul's genuine celebration of singleness as a legitimate and full Christian calling — not a waiting room</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="bxp0I_PBbjA" title="Intentional Community and Single Christian Life" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Intentional Community: An Alternative to Isolated Single Life</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Practical examples of intentional shared housing and community as a response to single adult loneliness</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
