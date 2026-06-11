"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", INDIGO = "#6366F1", TEXT = "#F2F2F8", MUTED = "#9898B3";

type ADEntry = { id: string; date: string; week: string; reflection: string; longing: string };

const theology = [
  { title: "What Advent Actually Is — the Art of Holy Waiting", verse: "Isaiah 40:3-5", text: "Prepare the way of the Lord, make straight in the desert a highway for our God. Advent is not merely Christmas preparation; it is a season of intentional longing — learning to desire what we do not yet fully have. The spiritual discipline of waiting cultivated in Advent is also the posture of the entire Christian life, which is itself an extended Advent — lived between the first and second coming. To practice Advent well is to practice being human before God: dependent, expectant, and oriented toward a future that is not yet ours but has been promised." },
  { title: "The Four Themes — Hope, Peace, Joy, Love (in That Order)", verse: "Romans 8:22-23", text: "The traditional candle sequence is theologically sequenced: hope comes before peace, which precedes joy, which culminates in love. Each week deepens the previous. Advent teaches that genuine joy is not manufactured but arrives through sustained hope and genuine peace. The fourth candle, lit on Christmas Eve, completes the theological arc. To rush to joy before hope has been cultivated is to produce a counterfeit — the buoyant holiday feeling that collapses when the decorations come down. Advent trains us in the sequence that actually leads to durable joy." },
  { title: "Israel’s Long Advent — 400 Years of Silence", verse: "Malachi 4:6 → Matthew 3:1", text: "The inter-testamental period between Malachi and Matthew spans roughly 400 years — no prophet, no direct word from God, and yet the covenant promises still standing. Into that silence came the angel to Zechariah. Israel’s long wait teaches us what our own seasons of silence are for: they are not the absence of God’s care but the intensification of longing that makes the arrival of the promised one feel like what it actually is. The spiritual formation that only comes through waiting that feels like abandonment cannot be manufactured any other way." },
  { title: "The Already and Not Yet — Advent’s Second Horizon", verse: "Rev 22:20", text: "Come, Lord Jesus. The first Advent is celebrated; the second is awaited. Advent holds both simultaneously. The Christian lives between two Advents — the first has secured our hope, the second has not yet arrived. How Advent trains us to inhabit this tension without either despair or cheap triumphalism is one of its deepest gifts. The season refuses to let us settle. It insists that we are not home yet, that the world is not yet what it will be, and that the longing we feel is not a malfunction but a compass." },
  { title: "Mary’s Advent — the Posture of the Receptive Soul", verse: "Luke 1:38", text: "Let it be to me according to your word. Mary models the Advent disposition: openness to what God is doing that disrupts the life you planned. The Magnificat (Luke 1:46-55) is the theology of reversal that Advent announces — the mighty brought down, the humble lifted up, the hungry filled, the rich sent away. To pray the Magnificat in a season of waiting is to align ourselves with the movement of God in history: not the movement of power and comfort, but the movement of grace toward those who know they have nothing to offer but their yes." },
];

const voices = [
  { name: "Fleming Rutledge", role: "Advent: The Once and Future Coming of Jesus Christ", quote: "Advent is the most counter-cultural season of the church year. It refuses to let us skip ahead. It insists that we are people who do not yet have what we need, that the world is not yet what it should be, and that the only honest posture before these facts is expectant longing — not despair, not pretended contentment, but the active, attentive waiting of those who know that a promise has been made and that the one who made it is faithful.", bio: "Fleming Rutledge is an Episcopal priest and one of the most theologically serious preachers of her generation. Her major work on Advent recovers the season as the church’s most searching and honest engagement with the gap between what is and what God has promised. She argues that Advent requires more from us than Christmas, precisely because it refuses to offer easy comfort before genuine longing has been cultivated." },
  { name: "N.T. Wright", role: "Surprised by Hope", quote: "The Christian hope is not the hope of escape from the world but the hope of the transformation of the world — which changes everything about how we wait. We are not waiting to be taken away from this place but waiting for God to come here, to set it right, to fill it with his glory. That kind of waiting is active, engaged, and politically serious. It sees the present world as the object of God’s future, not the backdrop from which we are to be rescued.", bio: "N.T. Wright’s contribution to the theology of hope has been substantial: recovering the Jewish and early Christian understanding of resurrection and new creation against a deeply entrenched Platonic framework in Western Christianity. His work reframes Advent waiting as forward-leaning engagement with the world rather than withdrawal from it — because the world is where God’s future is headed." },
  { name: "Henri Nouwen", role: "The Road to Daybreak", quote: "Waiting is not passive resignation. It is an active spiritual posture — the attentive expectation of those who know they cannot produce what they need but are certain that it will come. The contemplative tradition has always known this. To wait well is one of the most demanding spiritual disciplines, because it requires the surrender of control while maintaining the alertness of faith. Advent is the church’s annual school in this discipline.", bio: "Henri Nouwen wrote The Road to Daybreak from his time at the L’Arche Daybreak community, where proximity to people with intellectual disabilities taught him what the spiritual life actually looks like when stripped of performance and productivity. His reflections on waiting are not abstract but earned — written from within a life shaped by genuine dependence and genuine expectation." },
];

const practices = [
  { icon: "🕯️", title: "The Advent Wreath", text: "Lighting candles progressively as a household liturgy — one candle in week one, two in week two, and so on through the fifth candle on Christmas Day — gives Advent a visible rhythm. The wreath is not decoration; it is a theological statement about progressive movement toward the light. Families who practice this together often find that the anticipation built by waiting for each new candle mirrors the spiritual movement the season is intended to cultivate." },
  { icon: "📚", title: "Daily Advent Reading", text: "Fifteen minutes each morning with one passage from Isaiah creates a sustained encounter with the prophetic voice that shaped Israel’s expectation of the Messiah. Isaiah 40–55 in particular is the theological heart of Advent — the servant songs, the comfort passages, the vision of new creation. Reading it slowly across the four weeks of Advent lets the prophetic imagination reshape how we see the world." },
  { icon: "✡️", title: "O Antiphons in the Final Week", text: "The O Antiphons are seven ancient Latin prayers, each addressed to Christ by a different name drawn from Isaiah and the Psalms: O Wisdom, O Lord of Might, O Root of Jesse, O Key of David, O Dayspring, O King of Nations, O Emmanuel. Prayed across the seven days before Christmas Eve, they are among the oldest surviving Advent liturgies and form the basis of the hymn O Come O Come Emmanuel. Recovering them recovers a connection to the ancient church’s prayer life." },
  { icon: "🔇", title: "Fasting from Christmas Music Until Christmas Day", text: "Recovering the distinction between Advent and Christmas is increasingly countercultural in a context where the holiday season begins in October. Fasting from Christmas music through Advent — and then celebrating freely from Christmas Day through Epiphany — restores the seasons to their proper relationship. The fast is not legalistic; it is the creation of space in which genuine longing can develop rather than being short-circuited by premature celebration." },
  { icon: "✏️", title: "An Advent Journal", text: "One sentence daily answering the question: What am I longing for that only Christ can give? The practice is deceptively simple and often surprising. Many people discover in the first week that they cannot answer the question, because they have not been living in contact with their own desire. The discipline of naming longing daily across the season is itself a form of formation — it makes visible what Advent is trying to cultivate." },
];

const scriptures = [
  { verse: "Isaiah 40:3-5", text: "A voice of one calling: In the wilderness prepare the way for the Lord; make straight in the desert a highway for our God." },
  { verse: "Luke 1:38", text: "I am the Lord’s servant. May your word to me be fulfilled." },
  { verse: "Rev 22:20", text: "He who testifies to these things says, Yes, I am coming soon. Amen. Come, Lord Jesus." },
  { verse: "Romans 8:22-23", text: "We know that the whole creation has been groaning as in the pains of childbirth right up to the present time. Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sonship, the redemption of our bodies." },
  { verse: "Isaiah 9:6-7", text: "For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace." },
  { verse: "Luke 1:46-55", text: "My soul glorifies the Lord and my spirit rejoices in God my Savior, for he has been mindful of the humble state of his servant." },
];

const videos = [
  { id: "YzVFn_BQf8g", title: "What Is Advent? The Theology of Waiting" },
  { id: "LZNXegFJOyM", title: "Advent: Hope, Peace, Joy, Love" },
  { id: "oLt5JQBFXOI", title: "Fleming Rutledge on Advent and the Coming King" },
  { id: "i7HqtYBHO3o", title: "How to Practice Advent as a Household" },
];

export default function AdventGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ADEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_advent_entries") ?? "[]"); } catch { return []; }
  });
  const [jWeek, setJWeek] = useState("");
  const [jReflection, setJReflection] = useState("");
  const [jLonging, setJLonging] = useState("");

  useEffect(() => { localStorage.setItem("vine_advent_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jReflection.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), week: jWeek, reflection: jReflection, longing: jLonging }, ...prev]);
    setJWeek(""); setJReflection(""); setJLonging("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Seasons &amp; Practices</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Advent Guide</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Advent is the season of holy waiting — the annual school in longing, hope, and the theology of the coming King. Learn to inhabit the space between promise and fulfillment.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? INDIGO : BORDER}`, background: tab === t.id ? INDIGO + "22" : "transparent", color: tab === t.id ? INDIGO : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: INDIGO, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: INDIGO, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${INDIGO}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: INDIGO, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Advent Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to track what Advent is surfacing in you this season.</p>
            {[
              { label: "Week — which week of Advent or time of year", val: jWeek, set: setJWeek },
              { label: "Reflection — what you are waiting for", val: jReflection, set: setJReflection },
              { label: "Longing — what desire Advent has surfaced in you", val: jLonging, set: setJLonging },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: INDIGO, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: INDIGO }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      {e.week && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: INDIGO, fontWeight: 600 }}>Week:</span> {e.week}</p>}
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: INDIGO, fontWeight: 600 }}>Reflection:</span> {e.reflection}</p>
                      {e.longing && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: INDIGO, fontWeight: 600 }}>Longing:</span> {e.longing}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: INDIGO }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
