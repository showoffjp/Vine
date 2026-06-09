"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Hides — Scripture Has a Name for This", verse: "Isaiah 45:15", text: "Truly you are a God who has been hiding himself, the God of Israel, the Savior. The biblical category of Deus absconditus — the hidden God — is not a theological problem to explain away but a spiritual reality to inhabit. God hiding is not the same as God being absent." },
  { title: "Jesus Himself Cried Out in Abandonment", verse: "Matthew 27:46", text: "My God, my God, why have you forsaken me? These are the words of the Son of God in full union with the Father. If the experience of divine abandonment could belong to Jesus, it is not a sign of failing faith. It is entry into the deepest solidarity with Christ." },
  { title: "The Psalms Authorize Demanding That God Return", verse: "Psalm 10:1", text: "Why, Lord, do you stand far off? Why do you hide yourself in times of trouble? The psalmists did not accept divine silence with resignation. They pursued God, named the experience, and demanded response. This is not irreverence — it is the model of prayer Scripture gives for this experience." },
  { title: "Feelings of Abandonment Are Not the Same as Actual Abandonment", verse: "Romans 8:38-39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers — neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God. The objective fact of God's presence does not always correspond to the felt experience of it. Both things are true simultaneously." },
  { title: "God Has Promised He Will Not Finally Abandon His People", verse: "Deuteronomy 31:6", text: "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you. The same God whose presence is sometimes hidden gave this promise. It anchors what faith holds when experience cannot feel it." },
];

const voices = [
  { id: "v1", name: "St. John of the Cross", role: "Spanish Mystic, 16th Century", quote: "God leads into the dark night those he is most purifying for the greatest union with himself.", bio: "John's treatise on the 'dark night of the soul' — originally about mystical purification — has become the primary Christian vocabulary for the experience of God's felt absence. He insists the darkness is God's work, not punishment." },
  { id: "v2", name: "C.S. Lewis", role: "Author, A Grief Observed", quote: "Go to him when your need is desperate, when all other help is vain, and what do you find? A door slammed in your face, and a sound of bolting and double bolting on the inside.", bio: "Lewis wrote this after his wife's death, when his own faith felt hollow. The rawness of A Grief Observed documents the felt-abandonment experience from inside it — and shows how it can coexist with continuing faith." },
  { id: "v3", name: "Mark Vroegop", role: "Author, Dark Clouds Deep Mercy", quote: "Lament is how we bring our brokenness and pain honestly to God — it is the language of those who still believe, even when they can barely speak.", bio: "Vroegop recovered the practice of biblical lament as the appropriate response to suffering and felt abandonment, arguing that the Psalms give us permission and vocabulary to name the full depth of spiritual desolation." },
  { id: "v4", name: "Barbara Brown Taylor", role: "Author, Learning to Walk in the Dark", quote: "Full solar spirituality — the kind that promises constant daylight — is not the only kind of Christian spirituality Scripture teaches or history has known.", bio: "Taylor argues that the church's bias toward positive, triumphant spiritual experience has left Christians without resources for the dark seasons that the tradition has always recognized as part of mature faith." },
];

const practices = [
  { icon: "🌑", title: "Stay in the Place of Waiting", text: "The temptation in spiritual abandonment is to resolve it artificially — by performing certainty, adopting a new theology, or giving up faith entirely. The harder and more faithful practice is to stay: continue the outward forms of prayer, continue attending community if possible, continue waiting." },
  { icon: "📖", title: "Pray Psalm 88 — Then Psalm 89", text: "Psalm 88 ends in darkness with no resolution. Psalm 89 ends questioning whether God's promises have failed. Read them together and aloud. The fact that they are canonical means God received these prayers as faithful. Yours are too." },
  { icon: "📝", title: "Write Letters to a God Who Seems Absent", text: "Some people find that writing to God — honestly, with the full frustration and confusion intact — keeps the conversation open when it feels one-sided. Write without trying to arrive at resolution. The honesty itself is the prayer." },
  { icon: "🕯️", title: "Practice the Examen Without Requiring Consolation", text: "Ignatius's spiritual exercises distinguish consolation (felt closeness to God) from desolation (felt absence). He prescribed continuing prayer in desolation — but with no expectation of consolation. Show up to prayer without demanding it feel like anything." },
  { icon: "🤝", title: "Tell One Person the Truth About Where You Are", text: "Spiritual abandonment is intensified by isolation and secrecy. Find one spiritually mature person — a director, elder, pastor, or trusted friend — and tell them what is actually happening. Not to receive an explanation, but to not be alone in it." },
  { icon: "📚", title: "Read the Mystics and the Suffering Saints", text: "John of the Cross, Teresa of Avila, Thomas a Kempis, Spurgeon on depression, Mother Teresa's letters — the record of Christians who experienced deep spiritual desolation and continued to faith is vast. You are not the first, and they survived to testify." },
];

const scriptures = [
  { verse: "Matthew 27:46", text: "About three in the afternoon Jesus cried out in a loud voice, 'Eli, Eli, lema sabachthani?' (which means 'My God, my God, why have you forsaken me?')" },
  { verse: "Psalm 88:13-14", text: "But I cry to you for help, Lord; in the morning my prayer comes before you. Why, Lord, do you reject me and hide your face from me?" },
  { verse: "Isaiah 50:10", text: "Who among you fears the Lord and obeys the word of his servant? Let the one who walks in the dark, who has no light, trust in the name of the Lord and rely on their God." },
  { verse: "Lamentations 3:1-3", text: "I am the man who has seen affliction by the rod of the Lord's wrath. He has driven me away and made me walk in darkness rather than light; indeed, he has turned his hand against me again and again, all day long." },
  { verse: "Romans 8:38-39", text: "I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." },
  { verse: "Psalm 22:24", text: "For he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help." },
];

type AbandonmentEntry = { id: string; date: string; cry: string; hold: string; practice: string };

export default function SpiritualAbandonmentPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<AbandonmentEntry[]>([]);
  const [form, setForm] = useState({ cry: "", hold: "", practice: "" });

  useEffect(() => {
    try { setEntries(JSON.parse(localStorage.getItem("vine_spiritualabandonmentj_entries") || "[]")); } catch {}
  }, []);

  function saveEntry() {
    if (!form.cry.trim()) return;
    const e: AbandonmentEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...form };
    const updated = [e, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_spiritualabandonmentj_entries", JSON.stringify(updated));
    setForm({ cry: "", hold: "", practice: "" });
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_spiritualabandonmentj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Spiritual Crisis</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>When God Feels Gone</h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>Spiritual abandonment — the experience of God's silence, distance, or felt absence — is one of the most disorienting conditions a believer can face. Scripture, the mystics, and the Psalms speak directly to it. You are not the first person here, and you are not failing.</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{item.title}</h3>
                  <span style={{ color: MUTED, fontSize: "0.8rem", fontStyle: "italic" }}>{item.verse}</span>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <span style={{ color: PURPLE, fontWeight: 800, fontSize: "1rem" }}>{v.name}</span>
                  <span style={{ color: MUTED, fontSize: "0.8rem", marginLeft: "0.75rem" }}>{v.role}</span>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.75rem 0", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.text}</p>
                </div>
              </div>
            ))}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", marginTop: 0 }}>If You Are in Crisis</h3>
              <ul style={{ color: MUTED, lineHeight: 1.9, margin: 0, paddingLeft: "1.25rem" }}>
                <li><strong style={{ color: TEXT }}>988 Lifeline</strong> — call or text if spiritual desolation has become a mental health crisis</li>
                <li><strong style={{ color: TEXT }}>Crisis Text Line</strong> — text HOME to 741741</li>
              </ul>
            </div>
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", marginTop: 0 }}>New Entry</h3>
              <textarea value={form.cry} onChange={e => setForm(f => ({ ...f, cry: e.target.value }))} placeholder="What is the cry of your heart to God right now?" rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.hold} onChange={e => setForm(f => ({ ...f, hold: e.target.value }))} placeholder="What, if anything, are you still holding onto about God?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <textarea value={form.practice} onChange={e => setForm(f => ({ ...f, practice: e.target.value }))} placeholder="What practice will you maintain today even without feeling?" rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.6rem 0.75rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>delete</button>
                </div>
                {e.cry && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Cry:</strong> {e.cry}</p>}
                {e.hold && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Holding:</strong> {e.hold}</p>}
                {e.practice && <p style={{ color: TEXT, margin: 0, lineHeight: 1.6 }}><strong style={{ color: PURPLE }}>Practice:</strong> {e.practice}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "7TBHqMqBmBo", title: "Lament: A Language for Suffering", channel: "Mark Vroegop", description: "Vroegop recovers biblical lament as the appropriate, faith-filled response when God seems absent — showing how the Psalms give us permission to cry out from the darkness." },
              { videoId: "mC-zw0zCCtg", title: "Praying Our Fears", channel: "Tim Keller", description: "Keller on prayer when God seems distant — what it means to cry out honestly when you cannot feel God's presence, and how that itself is faithful prayer." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God", channel: "R.C. Sproul — Ligonier", description: "Sproul on how trust in God's sovereign character provides stability when the felt experience of God is absent — anchoring faith in what is true, not in what is felt." },
              { videoId: "zMbUXpFiFeo", title: "Faith and Obedience", channel: "Desiring God — Francis Chan and John Piper", description: "On persevering in faith and practice even in seasons of spiritual darkness, and what continued faithfulness looks like when consolation is absent." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
