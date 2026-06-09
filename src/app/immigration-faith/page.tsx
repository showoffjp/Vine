"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God's People Were Immigrants and Refugees", verse: "Deuteronomy 26:5", text: "My father was a wandering Aramean. The very center of Israel's identity was the confession that they were aliens and wanderers, rescued from oppression by God. God built the memory of displacement into the liturgy of His people. To be an immigrant is to participate in an experience deeply embedded in the story of God's people." },
  { title: "God Explicitly Commands Care for the Immigrant", verse: "Leviticus 19:34", text: "The foreigner residing among you must be treated as your native-born. Love them as yourself, for you were foreigners in Egypt. I am the Lord. This is not a social policy suggestion — it is a divine command grounded in the theological identity of Israel as former foreigners. The church's care for immigrants is not optional generosity; it is obedience." },
  { title: "Jesus Was a Refugee", verse: "Matthew 2:13-14", text: "When Herod sought to kill the child Jesus, Joseph took him and his mother and fled to Egypt. Jesus spent part of his childhood as a refugee in a foreign country. The incarnate Son of God knows what it is to be displaced, to be a stranger, to flee danger. He did not observe the refugee experience from a distance — He lived it." },
  { title: "The Kingdom Transcends Every Border', verse: 'Revelation 7:9", text: "A great multitude from every nation, tribe, people, and language, standing before the throne. Heaven is not monocultural. The diversity of nations and languages is not a problem to be resolved — it is the fullness of the image of God across all of humanity, gathered before the throne. Your origin, your language, your culture — these are part of the eternal worship." },
  { title: "The Church Is Your Family Everywhere", verse: "Galatians 3:28-29", text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus. The church crosses every national border. A Christian has family in every country, every culture. You may be far from home — but you are never far from the family of God, if you can find a local church." },
];

const voices = [
  { id: "wt", name: "Walter Brueggemann", role: "Old Testament Scholar", quote: "The biblical text is unambiguous: Israel was a wandering Aramean. The care of the stranger is not a peripheral concern — it is theologically central. To neglect the immigrant is to forget your own story.", bio: "Brueggemann's Old Testament scholarship has been particularly influential on the theology of hospitality and care for foreigners, tracing the command to welcome the stranger through the full arc of the Hebrew Bible." },
  { id: "mk", name: "Matthew Soerens", role: "Co-Author, Welcoming the Stranger", quote: "Most Americans who oppose immigration have never had a meaningful relationship with an immigrant. And most Christians who have never encountered the biblical texts on immigration have not understood what the Bible actually says about it.", bio: "Soerens works with World Relief and has written one of the most widely used theological resources on immigration and the church. His work carefully grounds immigration engagement in biblical theology rather than partisan politics." },
  { id: "jt", name: "Jemar Tisby", role: "Author, The Color of Compromise", quote: "The church in America has often confused its cultural values with the gospel. Immigration is one of the clearest places where we need to ask: what does the kingdom of God actually look like? Because it looks like Revelation 7:9.", bio: "Tisby's historical and theological work on the church and justice includes significant engagement with how the church has responded — and failed to respond — to immigrants and refugees in American history." },
];

const practices = [
  { icon: "⛪", title: "Find a Church Community Regardless of Status", text: "God's household has no immigration gatekeepers. Find a local church — many congregations worship in your language and welcome immigrants specifically. Look for multilingual congregations, immigrant-serving churches, or congregations connected to World Relief (worldrelief.org) or Catholic Charities. Your immigration status does not determine your access to the body of Christ." },
  { icon: "📋", title: "Know Your Legal Rights", text: "Regardless of immigration status, you have constitutional rights in the United States: the right to remain silent, the right to an attorney, the right not to consent to searches. Organizations like the National Immigration Law Center (nilc.org) and CLINIC (cliniclegal.org) provide legal resources. Know your rights before you need them." },
  { icon: "🤝", title: "Connect With Immigrant Support Organizations", text: "World Relief, Catholic Charities, Lutheran Immigration and Refugee Service, and hundreds of local organizations provide practical help to immigrants and refugees. Many are faith-based and offer help regardless of legal status. Do not navigate this alone — these organizations exist specifically to help you." },
  { icon: "🙏", title: "Bring Your Whole Story to God", text: "The fear, the grief of leaving home, the longing for family far away, the uncertainty, the loneliness — all of this belongs in your prayer. God knows the journey of the displaced. He has walked it. Bring your specific circumstances, your documents, your fears, your children's futures to Him honestly." },
];

const scriptures = [
  { verse: "Leviticus 19:34", text: "The foreigner residing among you must be treated as your native-born. Love them as yourself, for you were foreigners in Egypt. I am the Lord your God." },
  { verse: "Deuteronomy 26:5", text: "Then you shall declare before the Lord your God: My father was a wandering Aramean, and he went down into Egypt with a few people and lived there and became a great nation, powerful and numerous." },
  { verse: "Matthew 2:13-14", text: "An angel of the Lord appeared to Joseph in a dream. Get up, he said, take the child and his mother and escape to Egypt. Stay there until I tell you, for Herod is going to search for the child to kill him. So he got up, took the child and his mother during the night and left for Egypt." },
  { verse: "Psalm 146:9", text: "The Lord watches over the foreigner and sustains the fatherless and the widow, but he frustrates the ways of the wicked." },
  { verse: "Galatians 3:28", text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus." },
  { verse: "Hebrews 13:2", text: "Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels without knowing it." },
];

const videos = [
  { id: "if_1", title: "Welcoming the Stranger — A Biblical Theology of Immigration", channel: "World Relief" },
  { id: "if_2", title: "Jesus Was a Refugee — What That Means for the Church", channel: "The Gospel Coalition" },
  { id: "if_3", title: "Immigration, Faith, and the Kingdom of God", channel: "Matthew Soerens" },
  { id: "if_4", title: "Finding Church as an Immigrant — Your Story Belongs Here", channel: "Christianity Today" },
];

type IFEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function ImmigrationFaithPage() {
  const [tab, setTab] = useState("theology");
  const [ifJournal, setIfJournal] = useState<IFEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_immigfaithj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_immigfaithj_entries", JSON.stringify(ifJournal)); } catch {}
  }, [ifJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setIfJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setIfJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Immigration and Displacement</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Immigration and Faith</h1>
        <p style={{ color: MUTED, marginBottom: "2rem" }}>Biblical theology, support, and community for immigrants, refugees, and those navigating displacement</p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: tab === t ? 700 : 400, background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED, textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>A Biblical Theology of the Immigrant</h2>
            {theology.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.8rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{s.verse}</div>
                <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>{s.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Voices on Immigration and the Church</h2>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", fontStyle: "italic", color: TEXT }}>"{v.quote}"</blockquote>
                <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Practical Guidance</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>{p.title}</h3>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.6 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Scripture for Those Far From Home</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.85rem", color: GREEN, fontWeight: 600, marginBottom: "0.4rem" }}>{s.verse}</div>
                <p style={{ margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: GREEN }}>Your Journey Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Entries are saved privately in your browser. Your story matters.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What are you carrying in your immigration journey right now?</label>
              <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} placeholder="Right now I am carrying..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>How has God met you in the displacement or the journey?</label>
              <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} placeholder="God has met me by..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, resize: "vertical", fontSize: "0.95rem", boxSizing: "border-box" }} />
              <label style={{ display: "block", margin: "1rem 0 0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>What community or connection are you building here?</label>
              <input value={jStep} onChange={e => setJStep(e.target.value)} placeholder="I am building connections by..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontSize: "0.95rem", boxSizing: "border-box" }} />
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: GREEN, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {ifJournal.length === 0 && <p style={{ color: MUTED, fontStyle: "italic" }}>No entries yet. Your journey belongs to God and deserves to be recorded.</p>}
            {ifJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                {e.feeling && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>WHAT I CARRY</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.feeling}</p></>}
                {e.truth && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>HOW GOD MET ME</div><p style={{ margin: "0 0 0.75rem", lineHeight: 1.6 }}>{e.truth}</p></>}
                {e.step && <><div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.2rem" }}>COMMUNITY I AM BUILDING</div><p style={{ margin: "0 0 0.5rem", lineHeight: 1.6 }}>{e.step}</p></>}
                <button onClick={() => deleteEntry(e.id)} style={{ fontSize: "0.75rem", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: GREEN }}>Video Resources</h2>
            {videos.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.75rem", color: GREEN, fontWeight: 600, marginBottom: "0.3rem" }}>{v.channel}</div>
                <p style={{ margin: 0, fontWeight: 600 }}>{v.title}</p>
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
