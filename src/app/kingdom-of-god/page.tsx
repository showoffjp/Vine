"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type Tab = "theology" | "parables" | "thinkers" | "practices" | "journal" | "videos";

const THEOLOGY = [
  { title: "The Kingdom Is Jesus's Central Message", verse: "Mark 1:15", body: "'The time has come. The kingdom of God has come near. Repent and believe the good news' (Mark 1:15). This was Jesus's first proclamation. Not 'how to have eternal life' or 'how to be saved' but the announcement of God's reign breaking into history. Understanding the kingdom is the key to understanding everything Jesus said and did. The parables, the miracles, the Sermon on the Mount — all are about the kingdom." },
  { title: "Already and Not Yet", verse: "Luke 17:20-21", body: "The kingdom is a present reality: 'the kingdom of God is in your midst' (Luke 17:21). It is also a future hope: 'your kingdom come' (Matthew 6:10). This tension — already inaugurated in Jesus's ministry, not yet fully consummated at his return — is the key to NT eschatology. Christians live in the overlap of the ages: the old age has not ended, and the new age has begun. The Holy Spirit is the presence of the future." },
  { title: "The Kingdom and the Church", verse: "Matthew 16:18-19", body: "The church is not the kingdom — but it is the primary community through which the kingdom is made visible. Jesus gives Peter 'the keys of the kingdom' (Matthew 16:19), suggesting the church has an authorized role in kingdom proclamation and demonstration. The church witnesses to the kingdom; it does not control or fully embody it. The kingdom is larger than the church and precedes its existence." },
  { title: "Kingdom Ethics", verse: "Matthew 5:3-12", body: "The Beatitudes describe the character of kingdom people — not to earn entry but as the portrait of those who already belong. Blessed are the poor in spirit, the mourning, the meek, the hungry and thirsty for righteousness. These are not personality types that happen to be blessed; they describe the posture of those who have nothing to offer and everything to receive from the King. Kingdom ethics are the ethics of dependence, not of achievement." },
  { title: "The Kingdom's Presence in the World", verse: "Matthew 13:33", body: "The parables of the kingdom describe how it works: like yeast hidden in flour (Matthew 13:33), working invisibly but pervasively. Like a mustard seed (13:31-32) — tiny at first, becoming a home for birds. The kingdom does not arrive with power and fanfare but with hiddenness, weakness, and small beginnings. This is why it was missed by the powerful and received by the poor, the sick, and the outcast." },
];

const PARABLES = [
  { name: "Sower and the Soils", ref: "Matthew 13:1-23", color: "#F59E0B", desc: "The kingdom's reception depends on the condition of the heart, not the power of the message. Shallow, distracted, and anxious hearts produce no lasting fruit. The good soil — receptive, honest, persevering — yields abundantly. The parable is a diagnostic: what kind of soil are you?", lesson: "Sustaining the word requires deliberate attention. Remove the thorns (worries and wealth) and the birds (distraction) by regular, unhurried engagement with Scripture." },
  { name: "Wheat and Tares", ref: "Matthew 13:24-30", color: "#EF4444", desc: "The kingdom contains both genuine citizens and impostors. The impulse to root out the tares (weeds) before the harvest risks destroying the wheat. God tolerates the mixed field until the judgment — which means the church will always contain the mixed.", lesson: "Do not expect a pure church. Do not try to create one through excessive discipline or exclusion. The sorting belongs to the Judge at the end." },
  { name: "Hidden Treasure & Pearl", ref: "Matthew 13:44-46", color: "#8B5CF6", desc: "The kingdom is worth selling everything for. Both parables describe people who discover something so valuable that all other possessions become trivial in comparison. The joy in the discovery is the engine of the surrender — not grim duty but exhilarated exchange.", lesson: "If the kingdom does not produce the joy of having found something supremely valuable, the theology may be right but the experience is not yet real. Joy is not optional in kingdom living." },
  { name: "Prodigal Son", ref: "Luke 15:11-32", color: "#3B82F6", desc: "The parable of the prodigal is really the parable of the father — whose response to the returning son (running, embracing, restoring before a word of repentance) reveals the kingdom's welcome. The elder brother's resentment at grace is also the parable of everyone who has earned their place and resents those who received it freely.", lesson: "The kingdom is defined by the Father's running embrace, not by the prodigal's worthiness or the elder's record. Both sons are lost; the one who knows it is the one who returns." },
  { name: "Good Samaritan", ref: "Luke 10:25-37", color: GREEN, desc: "In answer to 'Who is my neighbor?' Jesus tells a story that ends with 'Which one was a neighbor?' The shift moves from categorizing others (who qualifies?) to defining oneself (am I the kind of person who stops?). Kingdom citizenship is about what you do when you see need, not who you classify as deserving.", lesson: "The question 'who is my neighbor?' is the wrong question. The kingdom question is: 'am I being a neighbor to whoever is in front of me?'" },
];

const THINKERS = [
  {
    id: "ladd",
    name: "George Eldon Ladd",
    era: "1911-1982",
    color: "#3B82F6",
    contribution: "Ladd's The Gospel of the Kingdom (1959) and The Presence of the Future (1964) established the 'inaugurated eschatology' framework that has since become standard NT scholarship. Before Ladd, conservative scholarship tended toward futurist eschatology (the kingdom is entirely future) and liberal scholarship toward realized eschatology (the kingdom is entirely present). Ladd showed from careful exegesis that both elements are present in Jesus's teaching: the kingdom has come (Mark 1:15; Luke 11:20) and is still coming (Matthew 6:10). This 'already and not yet' structure is now the consensus position across traditions.",
    quote: "The Kingdom of God is the redemptive reign of God dynamically active to establish his rule among men, and this Kingdom, which will appear as an apocalyptic act at the end of the age, has already come into human history in the person and mission of Jesus.",
  },
  {
    id: "wright",
    name: "N.T. Wright",
    era: "1948-",
    color: "#F59E0B",
    contribution: "Wright's multi-volume Christian Origins series, particularly Jesus and the Victory of God (1996), situates the kingdom announcement within the context of Second Temple Jewish expectations. Jesus was announcing that Israel's long exile was ending, that the God of Israel was returning to his people, and that Jesus himself was embodying that return. Wright's contribution: the kingdom is not primarily about going to heaven but about the transformation of the present world — the Creator's reclamation of his creation. This has significant implications for Christian ethics, politics, and vocation.",
    quote: "Jesus's resurrection is the beginning of God's new project not to snatch people away from earth to heaven but to colonize earth with the life of heaven.",
  },
  {
    id: "willard",
    name: "Dallas Willard",
    era: "1935-2013",
    color: GREEN,
    contribution: "Willard's The Divine Conspiracy (1998) approached the kingdom through the Sermon on the Mount and the question of human flourishing. His thesis: the kingdom of God is a present available reality — 'at hand' means within reach right now. The gospel is not merely about forgiveness but an invitation to live now in the reality of God's rule. His famous definition: the kingdom is the range of God's effective will, where what God wants done is done. Every human can choose, starting now, to live from that reality. This transformed millions of readers' understanding of discipleship.",
    quote: "The key to understanding Jesus's teaching about the kingdom is that it is now available to ordinary men and women as the normal condition of human existence.",
  },
  {
    id: "mcknight",
    name: "Scot McKnight",
    era: "1953-",
    color: PURPLE,
    contribution: "McKnight's The King Jesus Gospel (2011) argued that the American church had reduced 'gospel' to the plan of salvation — a truncated version of the NT's announcement. The gospel in the NT is the announcement that Jesus of Nazareth is the fulfillment of Israel's story and the risen Lord of all. Kingdom and gospel are inseparable: to announce the kingdom is to announce the king, and to trust the king is to enter his kingdom. McKnight connects kingdom theology to ecclesiology: the church is the community where kingdom life is embodied and proclaimed.",
    quote: "The gospel is the story of Jesus completing Israel's story, the good news that Jesus is Lord, and the invitation to declare allegiance to King Jesus.",
  },
  {
    id: "yoder",
    name: "John Howard Yoder",
    era: "1927-1997",
    color: "#EC4899",
    contribution: "Yoder's The Politics of Jesus (1972) argued that Jesus's kingdom ethic was not an idealistic interim ethic for an imminent end but the actual social practice of the community that follows Jesus. The Sermon on the Mount is not impossible idealism — it is the constitution of the new community. Yoder's contribution: the kingdom of God has a specific political shape — nonviolence, servanthood, radical egalitarianism — that the church is called to embody publicly, not merely privately. The church is itself the political witness; it does not influence politics from outside but demonstrates the kingdom from within.",
    quote: "The kingdom of God is a social ethic, a visible community of disciples whose life together is the living proof that the resurrection has happened and that new creation has begun.",
  },
];

const PRACTICES = [
  { title: "Pray the Lord's Prayer Slowly", desc: "'Your kingdom come, your will be done, on earth as it is in heaven' — pray this petition and mean it. Let it shape how you approach your day. The Lord's Prayer is a kingdom prayer, not a personal wish list.", icon: "🙏" },
  { title: "Seek the Kingdom First", desc: "Matthew 6:33: 'Seek first his kingdom and his righteousness, and all these things will be given to you as well.' What does kingdom-first look like in your schedule, your money, your career choices? Make it concrete.", icon: "🎯" },
  { title: "Practice Kingdom Economics", desc: "The kingdom reverses standard economics: the last are first, the greatest serve the smallest, and giving away creates abundance. Practice one kingdom-economics act weekly: give something away, serve someone beneath your station, choose the lower seat.", icon: "💛" },
  { title: "Read the Parables Regularly", desc: "Jesus's parables are not children's stories — they are subversive, unsettling, and surprisingly difficult. Read a parable slowly. Ask: what does this say about what the kingdom is like? What assumption does it overturn? Who in this story am I?", icon: "📖" },
  { title: "Live as Citizens of the Coming Kingdom", desc: "Christians are, in Paul's phrase, 'citizens of heaven' who live as ambassadors on earth. Ask in each situation: what would this look like if the kingdom were fully here? Then move toward that, knowing you are anticipating what is coming.", icon: "🌍" },
  { title: "Celebrate Kingdom Advances", desc: "When someone is converted, a broken relationship is healed, justice is done, or beauty is created — celebrate it as a kingdom advance. Not all progress is kingdom progress; but genuine kingdom advances are worth pausing to name and celebrate.", icon: "🎉" },
];

export default function KingdomOfGodPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_kingdom-of-god_tab", "theology");
  const [selectedParable, setSelectedParable] = usePersistedState("vine_kingdom-of-god_selected_parable", "Sower and the Soils");
  const [selectedThinker, setSelectedThinker] = usePersistedState("vine_kingdom-of-god_selected_thinker", "ladd");

  const parable = PARABLES.find(p => p.name === selectedParable)!;
  const thinker = THINKERS.find(t => t.id === selectedThinker)!;

  const [kogEntries, setKogEntries] = useState<{ id: string; date: string; insight: string; parable: string; living: string }[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_kog_entries") ?? "[]"); } catch { return []; }
  });
  const [kogForm, setKogForm] = useState({ insight: "", parable: "", living: "" });
  const [kogSaved, setKogSaved] = useState(false);
  useEffect(() => { try { localStorage.setItem("vine_kog_entries", JSON.stringify(kogEntries)); } catch {} }, [kogEntries]);
  const saveKogEntry = () => {
    if (!kogForm.insight.trim()) return;
    setKogEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...kogForm }, ...prev]);
    setKogForm({ insight: "", parable: "", living: "" });
    setKogSaved(true); setTimeout(() => setKogSaved(false), 2000);
  };
  const deleteKogEntry = (id: string) => setKogEntries(prev => prev.filter(e => e.id !== id));

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>👑</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Kingdom of God</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The kingdom of God is Jesus's central message — God's reign breaking into history in his person and ministry, already present and not yet fully arrived. Everything else in his teaching flows from this.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "theology" as Tab, label: "Theology", icon: "📖" },
            { id: "parables" as Tab, label: "Kingdom Parables", icon: "🌾" },
            { id: "thinkers" as Tab, label: "Key Thinkers", icon: "🎓" },
            { id: "practices" as Tab, label: "Practices", icon: "🛠️" },
            { id: "journal" as Tab, label: "My Journal", icon: "📓" },
            { id: "videos" as Tab, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div>
            {THEOLOGY.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={t.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "parables" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {PARABLES.map(p => (
                <button type="button" key={p.name} onClick={() => setSelectedParable(p.name)}
                  style={{ padding: "8px 12px", borderRadius: 20, border: `1px solid ${selectedParable === p.name ? p.color : BORDER}`, background: selectedParable === p.name ? `${p.color}15` : "transparent", color: selectedParable === p.name ? p.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {p.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${parable.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <h2 style={{ color: parable.color, fontWeight: 900, fontSize: 22, margin: 0 }}>{parable.name}</h2>
                <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "3px 12px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{parable.ref}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }}>{parable.desc}</p>
              <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>THE LESSON</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{parable.lesson}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "thinkers" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 185, flexShrink: 0 }}>
              {THINKERS.map(t => (
                <button type="button" key={t.id} onClick={() => setSelectedThinker(t.id)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${selectedThinker === t.id ? t.color : BORDER}`, background: selectedThinker === t.id ? `${t.color}12` : "transparent", color: selectedThinker === t.id ? t.color : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", marginBottom: 6, textAlign: "left" }}>
                  {t.name}
                </button>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: CARD, border: `1px solid ${thinker.color}30`, borderRadius: 14, padding: 26 }}>
                <div style={{ marginBottom: 16 }}>
                  <h2 style={{ color: thinker.color, fontWeight: 900, fontSize: 20, margin: "0 0 4px" }}>{thinker.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{thinker.era}</div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${thinker.color}`, paddingLeft: 16, margin: "0 0 18px 0" }}>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>"{thinker.quote}"</p>
                </blockquote>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}>{thinker.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The kingdom is not only a doctrine to believe but a reality to inhabit — a present and future world whose values, economics, and ethics can be practiced now.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {PRACTICES.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 15 }}>{p.title}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Kingdom Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20 }}>Record insights about the kingdom of God and how you're living them out.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                <textarea value={kogForm.insight} onChange={e => setKogForm(f => ({ ...f, insight: e.target.value }))}
                  placeholder="What did you learn or see about the kingdom?" aria-label="Insight"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, minHeight: 80, resize: "vertical", fontFamily: "inherit" }} />
                <input value={kogForm.parable} onChange={e => setKogForm(f => ({ ...f, parable: e.target.value }))}
                  placeholder="Which parable or passage sparked this? (optional)" aria-label="Parable"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                <input value={kogForm.living} onChange={e => setKogForm(f => ({ ...f, living: e.target.value }))}
                  placeholder="How are you living this out this week? (optional)" aria-label="Living it out"
                  style={{ padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14 }} />
                <button type="button" onClick={saveKogEntry}
                  style={{ padding: "10px 20px", background: PURPLE, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", alignSelf: "flex-start" }}>
                  {kogSaved ? "Saved ✓" : "Save Entry"}
                </button>
              </div>
              {kogEntries.length === 0 && <p style={{ color: MUTED, fontSize: 14 }}>No entries yet. Record your first kingdom insight above.</p>}
              {kogEntries.map(e => (
                <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 16, marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                    <button type="button" onClick={() => deleteKogEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 14 }}>✕</button>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: "0 0 4px" }}>{e.insight}</p>
                  {e.parable && <p style={{ color: PURPLE, fontSize: 13, fontStyle: "italic", margin: "0 0 4px" }}>{e.parable}</p>}
                  {e.living && <p style={{ color: GREEN, fontSize: 13, margin: 0 }}>→ {e.living}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "7_CGP-12AE0", title: "The Upside Down Kingdom", channel: "Timothy Keller / Gospel in Life", description: "Tim Keller examines how Jesus introduces a revolutionary, counterintuitive kingdom in the Sermon on the Mount — reversing every expectation of power and greatness." },
                  { videoId: "GQI72THyO5I", title: "The Joy That Produces Radical Obedience", channel: "Desiring God / John Piper", description: "John Piper on the kingdom's hidden treasure and pearl of great price — how finding the kingdom produces the joy that makes total surrender logical and willing." },
                  { videoId: "t6L-F2emwUc", title: "The Essential Elements of the Great Commission", channel: "Paul Washer", description: "Paul Washer grounds the church's mission in the kingdom's global scope — making disciples of all nations as the outward expression of kingdom life." },
                  { videoId: "jH_aojNJM3E", title: "If God Is Sovereign, How Can Man Be Free?", channel: "R.C. Sproul / Ligonier Ministries", description: "R.C. Sproul explores the sovereignty that undergirds the kingdom of God — how God's reign over all things is the foundation of Christian hope." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
