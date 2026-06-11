"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type BEEntry = { id: string; date: string; encounter: string; medium: string; worship: string };

const theology = [
  {
    verse: "Ps 27:4",
    title: "Beauty and the Character of God (Ps 27:4)",
    text: "One thing I ask from the Lord, this only do I seek: that I may dwell in the house of the Lord all the days of my life, to gaze on the beauty of the Lord and to seek him in his temple. Beauty is not a peripheral concern in Scripture — it is an attribute of God himself. The Hebrew word for beauty (yophiy) describes both physical and spiritual splendor; God himself is beautiful (Ps 96:6). The tabernacle and temple were designed with extraordinary artistic care because the dwelling place of God should reflect his beauty. A theology of beauty begins with the recognition that God is beautiful and that human aesthetic experience is one of the primary ways we encounter and reflect his character.",
  },
  {
    verse: "Gen 1:1; 2:19-20",
    title: "Creativity as Image-Bearing (Gen 1:1; 2:19-20)",
    text: "In the beginning God created. The first thing Scripture tells us about God is that he is a Creator. When human beings make things — compose music, write poetry, paint, design, build — they exercise the creative dimension of the image Dei. Bezalel was filled with the Spirit of God specifically to make beautiful things for the tabernacle (Exod 31:3). The artist, musician, poet, and designer are not peripheral to Christian life but are exercising a vocation as sacred as the pastor's — the vocation of making beauty for God's glory and humanity's flourishing.",
  },
  {
    verse: "Phil 4:8",
    title: "The Transcendentals — Truth, Goodness, and Beauty (Phil 4:8)",
    text: "Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable — think about such things. The classical tradition identified three transcendentals: the True, the Good, and the Beautiful. These are not three separate domains but three aspects of the same ultimate reality — God himself. Beauty is not subjective sentiment but a real quality of things that participate in divine reality. When something is genuinely beautiful — a Bach cantata, a Rembrandt painting, a sunset, a perfect sentence — it participates in and points toward the ultimate Beauty who is God. Aesthetic experience can be a form of encounter with God.",
  },
  {
    verse: "Gen 3; Rev 21",
    title: "Art and the Fall — Beauty in a Broken World",
    text: "The Fall did not destroy human creativity; it disordered it. Art can be used to glorify, to exploit, to distort, or to beautify — and all of these have happened throughout human history. The Christian view of art neither sanitizes (demanding only pleasant religious art) nor surrenders (embracing any content because it is art). Francis Schaeffer argued in Art and the Bible that Christians should evaluate art on two axes: technical excellence and worldview fidelity. Great art can portray brokenness (Michelangelo's Last Judgment, Dostoevsky's Crime and Punishment) without celebrating it — this is the difference between portrayal and endorsement.",
  },
  {
    verse: "Rev 21:10-11",
    title: "Eschatological Beauty — the New Creation as Aesthetic Vision (Rev 21:10-11)",
    text: "And he carried me away in the Spirit to a mountain great and high, and showed me the Holy City, Jerusalem, coming down out of heaven from God. It shone with the glory of God, and its brilliance was like that of a very precious jewel. The new creation is portrayed in Scripture in aesthetic terms: radiance, jewels, gold, a river as clear as crystal, a tree bearing twelve kinds of fruit. This is not mere metaphor — it is the biblical claim that the new creation will be staggeringly beautiful. The Christian artist works toward that beauty as a foretaste and witness; every act of genuine creativity in this age anticipates the beauty that will fill the age to come.",
  },
];

const voices = [
  {
    name: "Francis Schaeffer",
    role: "Art and the Bible",
    quote: "A Christian should use these arts to the glory of God, not just as a tract but as something that reflects the whole man and the whole of life. Art is not a luxury for the Church, but a necessity.",
    bio: "Francis Schaeffer was a Christian philosopher and founder of L'Abri Fellowship whose Art and the Bible provided the first serious evangelical theological framework for the arts. His two-axis evaluation (technical excellence + worldview integrity) gave Christian artists permission to pursue excellence without aesthetic compromise, and gave audiences tools for engaging art without either naive celebration or fearful rejection.",
  },
  {
    name: "Dorothy L. Sayers",
    role: "The Mind of the Maker",
    quote: "The human maker is most fully in the image of God when he is making. The divine image is not primarily rational but creative — and when men and women make, they are most truly themselves.",
    bio: "Dorothy L. Sayers was a British novelist, playwright, and Christian apologist who made the case in The Mind of the Maker that human creativity is the clearest reflection of the imago Dei. Her Trinitarian framework — Idea (Father), Energy (Son), Power (Spirit) — maps the creative process onto the divine nature. Sayers gives artists a theological vocabulary for their vocation.",
  },
  {
    name: "Makoto Fujimura",
    role: "Culture Care",
    quote: "The church is called to be a culture-generating community — not a culture-consuming or culture-condemning community. Art is not a weapon to be deployed or a product to be sold but a gift to be given, a way of caring for the culture that God loves.",
    bio: "Makoto Fujimura is a painter, author, and founder of the International Arts Movement whose Culture Care proposes a theology of generative cultural engagement. Against both the Christian ghetto (producing only art for Christian audiences) and uncritical cultural embrace, Fujimura calls the church to be artists and culture-makers who bring beauty as an act of love to a broken and beautiful world.",
  },
];

const practices = [
  "Engage one piece of serious art (a painting, piece of music, poem, or film) with theological attention: ask what it is saying about the human condition, about beauty, about brokenness — and how the gospel speaks to what you find.",
  "If you have a creative gift (music, visual art, writing, design), dedicate one piece of work explicitly to God's glory — not as an exercise in religious art but as an offering of excellence in whatever medium you work in.",
  "Visit a museum, concert, or gallery with a specific question: Where do I sense the presence of God in this? Where do I sense his absence or the effects of the Fall?",
  "Introduce beauty into your everyday life as a spiritual practice: cultivate a garden, cook a meal with care, arrange your space thoughtfully — small acts of making beauty are participations in the divine nature.",
  "Study Bezalel (Exodus 31) — the first person in Scripture described as filled with the Spirit — and reflect on the implications for a theology of artistic vocation.",
];

const scriptures = [
  { verse: "Ps 27:4", text: "One thing I ask from the Lord, this only do I seek: that I may dwell in the house of the Lord all the days of my life, to gaze on the beauty of the Lord and to seek him in his temple." },
  { verse: "Gen 1:31", text: "God saw all that he had made, and it was very good. And there was evening, and there was morning — the sixth day." },
  { verse: "Exod 31:3-5", text: "And I have filled him with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills — to make artistic designs for work in gold, silver and bronze, to cut and set stones, to work in wood, and to engage in all kinds of crafts." },
  { verse: "Phil 4:8", text: "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable — if anything is excellent or praiseworthy — think about such things." },
  { verse: "Ps 96:6", text: "Splendor and majesty are before him; strength and glory are in his sanctuary." },
  { verse: "Rev 21:10-11", text: "And he carried me away in the Spirit to a mountain great and high, and showed me the Holy City, Jerusalem, coming down out of heaven from God. It shone with the glory of God, and its brilliance was like that of a very precious jewel, like a jasper, clear as crystal." },
];

const videos = [
  { id: "YfgAFnMXrTw", title: "A Theology of Beauty: Why Aesthetics Matters for the Christian" },
  { id: "Mq4jbpM4bsM", title: "Makoto Fujimura: Culture Care and the Christian Artist" },
  { id: "kqXVqLjL9is", title: "Francis Schaeffer on Art and the Bible" },
  { id: "BzMWk1XRobo", title: "Dorothy Sayers: Creativity and the Image of God" },
];

export default function TheologyOfBeautyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BEEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_beauty_entries") ?? "[]"); } catch { return []; }
  });
  const [jField1, setJField1] = useState("");
  const [jField2, setJField2] = useState("");
  const [jField3, setJField3] = useState("");

  useEffect(() => { localStorage.setItem("vine_beauty_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jField1.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), encounter: jField1, medium: jField2, worship: jField3 }, ...prev]);
    setJField1(""); setJField2(""); setJField3("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Faith &amp; Culture</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Theology of Beauty</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>God is not only true and good — he is beautiful. A theology of aesthetics, art, and creativity rooted in the character of the Creator and the calling of his image-bearers.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? ACCENT : BORDER}`, background: tab === t.id ? ACCENT + "22" : "transparent", color: tab === t.id ? ACCENT : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: ACCENT, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ color: ACCENT, fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}>{i + 1}.</span>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{p}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: ACCENT, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: ACCENT, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Beauty and Creativity</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Record encounters with beauty, creative mediums you are exploring, and how beauty has led you to worship.</p>
            {[
              { label: "Encounter — describe a recent encounter with beauty (art, music, nature, literature)", val: jField1, set: setJField1 },
              { label: "Medium — what creative medium are you drawn to or currently working in?", val: jField2, set: setJField2 },
              { label: "Worship — how has this encounter with beauty shaped your response to God?", val: jField3, set: setJField3 },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: ACCENT }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ACCENT, fontWeight: 600 }}>Encounter:</span> {e.encounter}</p>
                      {e.medium && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ACCENT, fontWeight: 600 }}>Medium:</span> {e.medium}</p>}
                      {e.worship && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: ACCENT, fontWeight: 600 }}>Worship:</span> {e.worship}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: ACCENT }}>{v.title}</h3>
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
