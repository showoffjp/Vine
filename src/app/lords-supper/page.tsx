"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#7C3AED", TEXT = "#F2F2F8", MUTED = "#9898B3";

type LSEntry = { id: string; date: string; examination: string; gratitude: string; resolve: string };

const THEOLOGY = [
  {
    title: "The Institution of the Supper (Matt 26:26-28)",
    body: "While they were eating, Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, Take and eat; this is my body. Then he took a cup, and when he had given thanks, he gave it to them, saying, Drink from it, all of you. This is my blood of the covenant, which is poured out for many for the forgiveness of sins. Jesus instituted the Supper in the context of the Passover — deliberately connecting his death to the Exodus, his blood to the covenant, his body to the bread broken for others. The command Do this in remembrance of me (Luke 22:19; 1 Cor 11:24-25) makes the Supper an ongoing practice of the church until his return.",
  },
  {
    title: "The Four Views on Presence",
    body: "The Supper’s central theological controversy: how is Christ present in the bread and wine? Four main positions: (1) Transubstantiation (Catholic): the substance of bread and wine is literally transformed into the body and blood of Christ while the accidents remain. (2) Consubstantiation (Lutheran): Christ’s body and blood are truly and substantially present in, with, and under the bread and wine — real presence without transformation of substance. (3) Reformed/Calvinist: Christ is truly spiritually present in the Supper, received by faith — a genuine spiritual feeding on Christ, not merely a memorial. (4) Memorial/Zwinglian: the bread and wine are symbols that point to Christ’s body and blood; the Supper is a commemoration of a past event. These positions have divided the church for 500 years; they remain serious.",
  },
  {
    title: "Worthy Participation — Self-Examination (1 Cor 11:27-29)",
    body: "Whoever eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of sinning against the body and blood of the Lord. Each person ought to examine himself... For those who eat and drink without discerning the body of Christ eat and drink judgment on themselves. Paul’s instruction makes self-examination before Communion a spiritual discipline. The question is not whether you are sinless (no one is) but whether you are in right relationship with God and the body. Unconfessed sin, unresolved conflict with a brother or sister, cynicism or irreverence toward the Lord himself — these are what Paul targets. Worthy participation is humble, honest, and reconciled participation.",
  },
  {
    title: "The Supper as Proclamation (1 Cor 11:26)",
    body: "For whenever you eat this bread and drink this cup, you proclaim the Lord’s death until he comes. The Supper is not silent — it proclaims. The eating and drinking is itself a declaration: a corporate bodily enactment of the gospel (his body broken, his blood poured out, for us) and an eschatological declaration (until he comes). Every Communion is simultaneously backward-looking (remembering the cross) and forward-looking (anticipating the final feast). The Supper is thus the most theologically loaded regular practice of the church — more than a ritual, a repeated proclamation of the gospel in physical form.",
  },
  {
    title: "The Supper and the Church’s Unity (1 Cor 10:16-17)",
    body: "Is not the cup of thanksgiving for which we give thanks a participation in the blood of Christ? And is not the bread that we break a participation in the body of Christ? Because there is one loaf, we, who are many, are one body, for we all share the one loaf. Paul draws a direct line from the shared bread to the unity of the body: we are one because we eat from one loaf. The Supper is not only individual piety but communal declaration. The divisions at Corinth (eating without sharing with the poor, 1 Cor 11:21) directly undermined the meaning of the Supper. Communion that ignores the needs of the body contradicts the very act it performs.",
  },
];

const PRACTICES = [
  "Before receiving Communion, practice specific self-examination: bring to mind one unconfessed sin, one unresolved conflict, one area of ingratitude — and deal with each before approaching the Table.",
  "Read 1 Corinthians 11:17-34 in full before the next Communion service you attend — let Paul’s context (a community divided by class inequality) challenge your understanding of what receiving together means.",
  "After Communion, practice a brief prayer of consecration: having received Christ again, rededicate the day or week to living from what was received — body broken for others, blood poured out for the world.",
  "If your tradition celebrates infrequently, consider advocating for more regular Communion — the weekly Supper was the norm in the early church, and there are deep reasons for this frequency.",
  "Prepare your children or young people in your life for what is happening at the Table — the Supper is one of the church’s greatest teaching moments about the gospel.",
];

const VOICES = [
  {
    name: "Thomas Cranmer",
    work: "The Book of Common Prayer",
    quote: "Draw near with faith, and take this holy Sacrament to your comfort; and make your humble confession to Almighty God, meekly kneeling upon your knees. Ye who do truly and earnestly repent you of your sins, and are in love and charity with your neighbors, and intend to lead a new life… Draw near and receive the body and blood of our Savior Christ.",
    bio: "Thomas Cranmer was the Archbishop of Canterbury under Henry VIII and Edward VI and the primary author of the Church of England’s Book of Common Prayer. His Communion liturgy shaped Anglican and many Protestant worship traditions. Cranmer held a Reformed view of the Lord’s Supper — genuine spiritual presence received by faith — and his liturgy embeds that theology in every element of its language.",
  },
  {
    name: "Alexander Schmemann",
    work: "For the Life of the World",
    quote: "The Eucharist is the sacrament of the Kingdom — not of ‘this world’ but of the one to come… The early Church realized that in order to be in the world, it must first of all, with all its existence, transcend the world. This is the meaning of the Eucharist.",
    bio: "Alexander Schmemann was an Eastern Orthodox theologian and dean of St. Vladimir’s Seminary in New York. For the Life of the World is a brief, luminous treatment of the sacramental dimension of all of life, with the Eucharist at its center. His perspective — grounded in the ancient liturgical tradition and the eschatological meaning of the Supper — offers Protestant Christians a wider vista on what they are doing every time they come to the Table.",
  },
  {
    name: "John Piper",
    work: "Brothers, We Are Not Professionals",
    quote: "The Lord’s Supper is not a funeral service for a dead Christ. It is a celebration of the living Christ who broke death and promises to come back. We remember his death, yes — but as the precondition of his resurrection. We feast in anticipation of the wedding supper of the Lamb.",
    bio: "John Piper is a pastor-theologian who has written extensively on worship and the sacraments. His treatment of the Lord’s Supper emphasizes its eschatological dimension — the Supper as anticipation of the Messianic feast — which balances the tendency to focus exclusively on its backward-looking memorialist dimension.",
  },
];

const SCRIPTURES = [
  { ref: "Matt 26:26-28", text: "Take and eat; this is my body… This is my blood of the covenant, which is poured out for many for the forgiveness of sins." },
  { ref: "1 Cor 11:23-26", text: "The Lord Jesus on the night when he was betrayed took bread… Do this, as often as you drink it, in remembrance of me." },
  { ref: "1 Cor 11:27-29", text: "Whoever eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty concerning the body and blood of the Lord." },
  { ref: "1 Cor 10:16-17", text: "Because there is one loaf, we, who are many, are one body, for we all share the one loaf." },
  { ref: "Luke 22:19-20", text: "This is my body, which is given for you. Do this in remembrance of me… This cup that is poured out for you is the new covenant in my blood." },
  { ref: "Rev 19:9", text: "Blessed are those who are invited to the marriage supper of the Lamb." },
];

const VIDEOS = [
  { videoId: "q3RuB3eoKC4", title: "The Lord’s Supper: What Happens at the Table?" },
  { videoId: "Zk6MzEiNp1A", title: "The Four Views on the Lord’s Supper Explained" },
  { videoId: "T0OZ3LRBM7I", title: "1 Corinthians 11: Worthy Participation in Communion" },
  { videoId: "NmPGPuUvL40", title: "The Eucharist and the Christian Life — More Than a Symbol" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function LordsSupperPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LSEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_lordsupper_entries") ?? "[]"); } catch { return []; }
  });
  const [jExamination, setJExamination] = useState("");
  const [jGratitude, setJGratitude] = useState("");
  const [jResolve, setJResolve] = useState("");

  useEffect(() => { localStorage.setItem("vine_lordsupper_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jExamination.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), examination: jExamination, gratitude: jGratitude, resolve: jResolve }, ...prev]);
    setJExamination(""); setJGratitude(""); setJResolve("");
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: "1.25rem" }}>
          <span style={{ fontSize: "0.75rem", color: MUTED, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Sacraments &amp; Worship</span>
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: TEXT, marginBottom: "0.75rem" }}>
          The Lord&rsquo;s Supper
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, marginBottom: "2rem" }}>
          The theology, debates, and practice of the Lord&rsquo;s Supper — its institution by Christ, the four views on presence, what it means to participate worthily, and how every Communion proclaims the gospel until he comes.
        </p>

        {/* Tab bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.45rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t.id ? PURPLE : BORDER}`, background: tab === t.id ? `${PURPLE}22` : "transparent", color: tab === t.id ? PURPLE : MUTED, fontWeight: tab === t.id ? 700 : 400, cursor: "pointer", fontSize: "0.85rem", transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {THEOLOGY.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.4rem", borderLeft: `4px solid ${PURPLE}` }}>
                <h3 style={{ fontWeight: 800, color: PURPLE, fontSize: "0.97rem", marginBottom: "0.6rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.25rem" }}>
              <h2 style={{ fontWeight: 800, color: PURPLE, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Practices</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                Ways to engage more deeply with the Lord&rsquo;s Supper — in preparation, reception, and daily living.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.3rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ color: PURPLE, fontWeight: 900, fontSize: "1rem", minWidth: 24, marginTop: 1 }}>{i + 1}.</span>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.9rem" }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {VOICES.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 800, color: PURPLE, fontSize: "1rem", marginBottom: "0.2rem" }}>{v.name}</div>
                <div style={{ color: MUTED, fontSize: "0.78rem", fontStyle: "italic", marginBottom: "0.9rem" }}>{v.work}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", margin: "0 0 0.9rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7, fontSize: "0.92rem" }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {SCRIPTURES.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 800, color: PURPLE, marginBottom: "0.35rem", fontSize: "0.9rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 800, color: PURPLE, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Pre-Communion Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                Use this space to prepare your heart before receiving the Lord&rsquo;s Supper. Entries are saved locally in your browser.
              </p>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  Self-examination
                </label>
                <textarea value={jExamination} onChange={e => setJExamination(e.target.value)}
                  placeholder="Is there unconfessed sin, unresolved conflict, or spiritual numbness you need to bring before God before approaching the Table?"
                  style={{ width: "100%", minHeight: 100, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6 }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  Gratitude
                </label>
                <textarea value={jGratitude} onChange={e => setJGratitude(e.target.value)}
                  placeholder="What specific aspect of Christ&rsquo;s sacrifice are you most grateful for today? What does his body broken for you mean right now?"
                  style={{ width: "100%", minHeight: 80, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6 }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  Resolve
                </label>
                <textarea value={jResolve} onChange={e => setJResolve(e.target.value)}
                  placeholder="Having received the Supper, what concrete resolve — to live differently, love more fully, or persevere more faithfully — does it call out of you?"
                  style={{ width: "100%", minHeight: 80, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6 }} />
              </div>
              <button onClick={saveEntry} disabled={!jExamination.trim()}
                style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.65rem 1.5rem", fontWeight: 700, fontSize: "0.9rem", cursor: jExamination.trim() ? "pointer" : "not-allowed", opacity: jExamination.trim() ? 1 : 0.5 }}>
                Save Entry
              </button>
            </div>

            {entries.length > 0 && (
              <div>
                <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "0.95rem" }}>Previous Entries</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.25rem" }}>
                      <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.6rem" }}>{e.date}</div>
                      {e.examination && <p style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.65, margin: "0 0 0.4rem" }}><span style={{ color: PURPLE, fontWeight: 700 }}>Examination: </span>{e.examination}</p>}
                      {e.gratitude && <p style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.65, margin: "0 0 0.4rem" }}><span style={{ color: PURPLE, fontWeight: 700 }}>Gratitude: </span>{e.gratitude}</p>}
                      {e.resolve && <p style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}><span style={{ color: PURPLE, fontWeight: 700 }}>Resolve: </span>{e.resolve}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 800, color: PURPLE, fontSize: "1.1rem", marginBottom: "0.4rem" }}>Video Teaching</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}>Recommended videos on the theology and practice of the Lord&rsquo;s Supper.</p>
            </div>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
