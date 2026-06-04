"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const TULIP = [
  {
    letter: "T",
    name: "Total Depravity",
    subtitle: "Not as bad as possible — but bad in every part",
    color: "#EF4444",
    verse: "Romans 3:10-12",
    explanation: "Total depravity does not mean humans are as evil as they could possibly be. It means every aspect of human nature — intellect, will, emotions, desires — has been corrupted by the fall. In particular, the human will is not neutral but bent away from God. Left to ourselves, we will not and cannot choose God (Romans 8:7-8). This does not eliminate human responsibility — we choose according to our desires — but it means our desires themselves are disordered. The Reformation's rediscovery of this doctrine was the foundation for insisting that salvation must be entirely of God's initiative, not ours.",
    objection: "Doesn't this make humans mere robots?",
    response: "No. Total depravity addresses the direction of fallen will, not the reality of willing. Fallen people make real choices — but always in accord with their fallen nature. The miracle of regeneration is not that God overrides the will but that he transforms it, creating new desires that genuinely want God (Ezekiel 36:26).",
    texts: ["Romans 3:10-12", "Romans 8:7-8", "Ephesians 2:1-3", "John 6:44"],
  },
  {
    letter: "U",
    name: "Unconditional Election",
    subtitle: "Chosen by grace, not foreseen faith",
    color: PURPLE,
    verse: "Ephesians 1:4-5",
    explanation: "Unconditional election is the doctrine that God chose specific individuals for salvation before the foundation of the world (Ephesians 1:4), not on the basis of foreseen faith or merit but according to his sovereign purpose and grace. The election is unconditional — it does not depend on anything in the person elected. Romans 9 is the central text: Jacob I loved, but Esau I hated before either had done anything good or evil (vv.11-13). This doctrine is intended not to produce fatalism but gratitude — the saved person recognizes that their salvation rests entirely in God's sovereign grace.",
    objection: "Isn't this unfair? Why is God not obligated to save everyone?",
    response: "Romans 9:14-15 addresses this directly: Paul anticipates the objection and quotes Exodus 33:19: I will have mercy on whom I have mercy. God is not obligated to save anyone — all deserve condemnation. The question is not 'Why doesn't God save everyone?' but 'Why does God save any?' The answer is sovereign grace.",
    texts: ["Ephesians 1:4-5", "Romans 9:11-16", "John 15:16", "2 Timothy 1:9"],
  },
  {
    letter: "L",
    name: "Limited Atonement",
    subtitle: "Particular redemption: the most disputed point",
    color: "#3B82F6",
    verse: "John 10:14-15",
    explanation: "Also called 'particular redemption,' this is the most disputed point of the five. It teaches that Christ's atoning death was specifically intended to secure the salvation of the elect — not merely to make salvation possible for everyone. The argument: if Christ's death actually purchased forgiveness for specific people, those people will be saved. If it merely made salvation possible for everyone, it secured nothing definitively. Texts like John 10:14-15 (I lay down my life for the sheep — not all without exception) and Ephesians 5:25 (Christ loved the church and gave himself up for her) suggest a particular, not general, intent.",
    objection: "What about 1 John 2:2: he is the propitiation for the whole world?",
    response: "Reformed interpreters argue 'world' here refers to people from all nations — not just Jews — rather than every individual universally. The atonement is sufficient for all but efficient for the elect. Non-Reformed evangelicals find this distinction less convincing and affirm general atonement with unconditional election — the 'Amyraldian' or '4-point Calvinist' position.",
    texts: ["John 10:14-15", "Ephesians 5:25-27", "Isaiah 53:10-12", "John 17:9"],
  },
  {
    letter: "I",
    name: "Irresistible Grace",
    subtitle: "Effective call: God's sovereign summons always succeeds",
    color: GREEN,
    verse: "John 6:37",
    explanation: "Irresistible grace does not mean that humans never resist God's grace (they do, constantly — Acts 7:51). It means that the Holy Spirit's internal, saving call to the elect cannot ultimately be frustrated. God does not merely offer salvation and wait for a yes — he transforms the heart so that the person genuinely, freely desires to come to Christ. John 6:37: All that the Father gives me will come to me. The distinction is between the external call (the gospel proclaimed to all) and the internal call (the Spirit's effectual work in the elect that results in genuine faith and repentance).",
    objection: "Doesn't this eliminate free will?",
    response: "Reformed theology affirms that the converted person freely comes to Christ — their will is genuinely engaged, not bypassed. But the freedom is new: the freedom of a transformed will that has been regenerated to desire God. Augustine's formulation: our hearts are restless until they rest in God. The rest is free and desired — and it is possible only because God made it so.",
    texts: ["John 6:37,44", "Acts 13:48", "Romans 8:29-30", "1 Corinthians 1:23-24"],
  },
  {
    letter: "P",
    name: "Perseverance of the Saints",
    subtitle: "Kept by God, not by willpower",
    color: "#F59E0B",
    verse: "John 10:28-29",
    explanation: "The perseverance of the saints teaches that those who are genuinely regenerated will not ultimately fall away from saving faith. This is often misunderstood as 'once saved, always saved' in a passive sense — but Reformed theology insists on perseverance, not mere preservation. True believers will persevere in faith and repentance — not perfectly, but genuinely. The security comes not from the believer's grip on God but from God's grip on the believer (John 10:28-29: no one will snatch them out of my hand). Texts like Hebrews 6 (which seem to describe falling away) are interpreted as hypothetical warnings or as describing nominal, not genuine, believers.",
    objection: "How do I know I'm genuinely elect and not a false professor?",
    response: "Reformed theology offers the threefold test from 1 John: belief in the true Christ (doctrinal test), genuine love for other believers (moral test), and the witness of the Spirit (assurance). The call is not to manufacture certainty but to pursue genuine faith, repentance, and love — and trust that God's grip is stronger than our grasp.",
    texts: ["John 10:28-29", "Romans 8:38-39", "Philippians 1:6", "1 Peter 1:5"],
  },
];

const CONFESSIONS = [
  { name: "Westminster Confession of Faith", year: 1646, tradition: "Presbyterian", summary: "The most comprehensive Reformed confession, produced by the Westminster Assembly of English and Scottish divines. Covers all major doctrines in 33 chapters. The Westminster Shorter and Larger Catechisms accompany it. Still the confessional standard of the Presbyterian Church in America (PCA) and the Orthodox Presbyterian Church (OPC).", url: "https://www.westminsterconfession.org/" },
  { name: "Heidelberg Catechism", year: 1563, tradition: "Reformed (Dutch)", summary: "One of the most beloved Reformed catechisms, organized around the famous structure: guilt (what is my misery?), grace (how am I delivered from it?), and gratitude (how do I thank God?). The opening question — What is your only comfort in life and in death? — and its answer about belonging entirely to Jesus Christ has brought comfort to millions.", url: "https://www.theopedia.com/heidelberg-catechism" },
  { name: "Belgic Confession", year: 1561, tradition: "Reformed (Dutch)", summary: "Written by Guido de Brès, a Reformed pastor in the Spanish Netherlands, as a defense of the Reformed faith to King Philip II. Covers Scripture, Trinity, creation, fall, Christology, salvation, church, and sacraments in 37 articles. One of the Three Forms of Unity still confessed in Reformed churches worldwide.", url: "https://www.crcna.org/welcome/beliefs/confessions/belgic-confession" },
  { name: "Second London Baptist Confession", year: 1689, tradition: "Reformed Baptist", summary: "The confession of the Reformed Baptist tradition, closely modeled on the Westminster Confession but with Baptist distinctives on baptism and church polity. Adopted and still confessed by Reformed Baptist and Particular Baptist churches worldwide. The 1689 Federalism movement has renewed interest in this confession.", url: "https://www.1689london.com/" },
];

const FIGURES = [
  { name: "John Calvin", dates: "1509-1564", role: "Pastor, Geneva", contribution: "Institutes of the Christian Religion; systematic Reformed theology; theocratic Geneva experiment", color: PURPLE },
  { name: "Herman Bavinck", dates: "1854-1921", role: "Theologian, Netherlands", contribution: "Reformed Dogmatics (4 vols.) — the most comprehensive Reformed systematic theology", color: GREEN },
  { name: "B.B. Warfield", dates: "1851-1921", role: "Princeton Seminary", contribution: "Biblical inerrancy; cessationism; Old Princeton theology's influence on 20th-century evangelicalism", color: "#3B82F6" },
  { name: "J. Gresham Machen", dates: "1881-1937", role: "Princeton / Westminster", contribution: "Defender of Reformed orthodoxy against liberalism; founded Westminster Theological Seminary (1929)", color: "#F59E0B" },
  { name: "R.C. Sproul", dates: "1939-2017", role: "Ligonier Ministries", contribution: "Reformed theology for laypeople; 'The Holiness of God'; founder of Ligonier Ministries", color: "#EF4444" },
  { name: "D.A. Carson", dates: "1946-present", role: "Trinity Evangelical Divinity School", contribution: "NT scholarship; The Gospel Coalition co-founder; hermeneutics and biblical theology", color: "#10B981" },
];

const REFORMED_RESOURCES = [
  { title: "Institutes of the Christian Religion", author: "John Calvin (1536, expanded 1559)", type: "Classic", desc: "The most comprehensive Reformation-era systematic theology. Books I-IV cover the knowledge of God, faith, repentance, and the church. Still the gold standard of Reformed theological writing.", icon: "📖", level: "Advanced" },
  { title: "The Westminster Confession of Faith", author: "Westminster Assembly (1646)", type: "Confession", desc: "The doctrinal standard of Presbyterian and Reformed churches worldwide. Along with the Shorter and Larger Catechisms, it remains the most complete and widely accepted Reformed confessional statement.", icon: "📜", level: "Intermediate" },
  { title: "Knowing God", author: "J.I. Packer (1973)", type: "Book", desc: "The most widely read accessible introduction to Reformed theology. Packer's account of God's attributes (sovereignty, wisdom, holiness, love, grace, wrath) is both doctrinally rigorous and devotionally warm.", icon: "📖", level: "Beginner" },
  { title: "The Sovereignty of God", author: "A.W. Pink (1918)", type: "Book", desc: "A classic defense of God's absolute sovereignty in salvation. Pink traces the doctrine through Scripture with unusual thoroughness. Still the most comprehensive single-volume treatment of divine sovereignty.", icon: "📖", level: "Intermediate" },
  { title: "Reformed Theology: An Introduction", author: "Michael Allen (2010)", type: "Book", desc: "A modern academic introduction to Reformed theology, covering its history, methods, and doctrines. Suitable for seminary students and educated laypeople.", icon: "📖", level: "Advanced" },
  { title: "Chosen by God", author: "R.C. Sproul (1986)", type: "Book", desc: "The best accessible introduction to Reformed soteriology (predestination, election, total depravity, etc.) for laypeople. Sproul's clarity and pastoral warmth make difficult doctrines comprehensible.", icon: "📖", level: "Beginner" },
  { title: "The Goldsworthy Trilogy", author: "Graeme Goldsworthy", type: "Book", desc: "Three books (Gospel and Kingdom; Gospel and Wisdom; The Gospel in Revelation) that demonstrate the Reformed method of reading all Scripture as pointing to Christ. Foundational for biblical theology.", icon: "📖", level: "Intermediate" },
  { title: "Ligonier Ministries (ligonier.org)", author: "R.C. Sproul's legacy", type: "Website", desc: "The leading Reformed resource website — thousands of articles, sermons, and courses on Reformed theology. Free digital access to the Reformation Study Bible notes. R.C. Sproul's teaching archive.", icon: "🌐", level: "All levels" },
  { title: "The Gospel Coalition (thegospelcoalition.org)", author: "D.A. Carson & Tim Keller (founded 2005)", type: "Website", desc: "Articles, sermons, and courses from Reformed evangelicals. Particularly strong on application of Reformed theology to pastoral ministry, culture, and ethics.", icon: "🌐", level: "All levels" },
];

export default function ReformedTheologyPage() {
  const [activeTab, setActiveTab] = usePersistedState<"tulip" | "confessions" | "figures" | "resources" | "videos">("vine_reformed-theology_tab", "tulip");
  const [selectedTulip, setSelectedTulip] = useState<string | null>(null);
  const tulip = TULIP.find(t => t.letter === selectedTulip);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🌷</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Reformed Theology</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The Reformed tradition — stemming from Calvin, Knox, and the Westminster Assembly — has shaped more evangelical theology than any other tradition. This is the TULIP, the confessions, and the figures.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "tulip" as const, label: "TULIP", icon: "🌷" },
            { id: "confessions" as const, label: "Confessions", icon: "📜" },
            { id: "figures" as const, label: "Key Figures", icon: "👤" },
            { id: "resources" as const, label: "Resources", icon: "📚" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "tulip" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                TULIP is the mnemonic for the five points of Calvinism as defined at the Synod of Dort (1618-1619), responding to the Arminian Remonstrance. These are not the sum of Reformed theology — they are the soteriological flashpoints. Click each point to explore it.
              </p>
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {TULIP.map(t => (
                <button type="button" key={t.letter} onClick={() => setSelectedTulip(selectedTulip === t.letter ? null : t.letter)}
                  style={{ flex: "1 1 160px", background: selectedTulip === t.letter ? `${t.color}20` : CARD, border: `1px solid ${selectedTulip === t.letter ? t.color : BORDER}`, borderRadius: 12, padding: "16px 14px", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: t.color, marginBottom: 4 }}>{t.letter}</div>
                  <div style={{ color: t.color, fontWeight: 800, fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}><VerseRef reference={t.verse} /></div>
                </button>
              ))}
            </div>

            {tulip && (
              <div style={{ background: CARD, border: `1px solid ${tulip.color}30`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
                  <div style={{ fontSize: 48, fontWeight: 900, color: tulip.color, lineHeight: 1, flexShrink: 0 }}>{tulip.letter}</div>
                  <div>
                    <h2 style={{ color: tulip.color, fontWeight: 900, fontSize: 22, margin: "0 0 4px" }}>{tulip.name}</h2>
                    <div style={{ color: MUTED, fontSize: 13 }}>{tulip.subtitle}</div>
                  </div>
                </div>

                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{tulip.explanation}</p>

                <div style={{ background: "#EF444408", border: "1px solid #EF444420", borderRadius: 8, padding: 14, marginBottom: 12 }}>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: 12, marginBottom: 6 }}>COMMON OBJECTION</div>
                  <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", margin: "0 0 8px" }}>{tulip.objection}</p>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{tulip.response}</p>
                </div>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {tulip.texts.map(t => (
                    <span key={t} style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "confessions" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Reformed theology has always been confessional — the church publicly affirms a doctrinal standard that governs its teaching and discipline. These are the most important Reformed confessions.
              </p>
            </div>
            {CONFESSIONS.map((c, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 17, margin: "0 0 2px" }}>{c.name}</h3>
                    <div style={{ color: MUTED, fontSize: 12 }}>{c.year} · {c.tradition}</div>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 12 }}>{c.summary}</p>
                <a href={c.url} target="_blank" rel="noopener noreferrer"
                  style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}25`, color: GREEN, padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5 }}>
                  🌐 Read Full Confession
                </a>
              </div>
            ))}
          </div>
        )}

        {activeTab === "figures" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Reformed theology has been shaped by a succession of pastor-theologians who combined rigorous scholarship with pastoral warmth. These are the figures whose work still shapes Reformed thought today.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {FIGURES.map((f, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: `${f.color}20`, border: `1px solid ${f.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: f.color, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>
                      {f.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ color: f.color, fontWeight: 800, fontSize: 15 }}>{f.name}</div>
                      <div style={{ color: MUTED, fontSize: 11 }}>{f.dates} · {f.role}</div>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{f.contribution}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "resources" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The best resources for going deeper into Reformed theology — from the Reformation classics to modern introductions, confessions, and online resources.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
              {REFORMED_RESOURCES.map((r, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                    <div style={{ fontSize: 24 }}>{r.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, color: MUTED, marginBottom: 2 }}>{r.type} · {r.level}</div>
                      <h3 style={{ fontSize: 14, fontWeight: 700, color: TEXT, margin: 0, lineHeight: 1.3 }}>{r.title}</h3>
                      <div style={{ fontSize: 12, color: MUTED }}>{r.author}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Video teachings on Reformed theology — the TULIP, God's sovereignty, the confessions, and the Reformation legacy.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {[
                { id: "qT8gts0FkPI", title: "What Is Reformed Theology?", teacher: "R.C. Sproul" },
                { id: "RvUpyxnqAow", title: "Total Depravity — Reformed Theology", teacher: "R.C. Sproul" },
                { id: "tQ3N8YTjEpc", title: "Limited Atonement — Reformed Theology", teacher: "R.C. Sproul" },
                { id: "loXh8PqrR3Y", title: "Irresistible Grace — Reformed Theology", teacher: "R.C. Sproul" },
              ].map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{v.teacher}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
