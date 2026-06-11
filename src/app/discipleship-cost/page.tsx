"use client";
import Navbar from "@/components/Navbar";
import VerseRef from "@/components/VerseRef";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const PASSAGES = [
  { title: "Count the Cost", verse: "Luke 14:25-33", body: "Jesus does not recruit with a prosperity promise. He sits down and urges those following him to count the cost before committing — like a builder calculating before laying a foundation or a king assessing before declaring war. The conclusion is stark: 'Any of you who does not give up everything he has cannot be my disciple' (14:33). Jesus is not looking for enthusiastic beginners; he wants committed finishers. He would rather have fewer disciples who counted the cost than masses who turned back when the road hardened." },
  { title: "Take Up Your Cross", verse: "Mark 8:34-38", body: "'Whoever wants to be my disciple must deny themselves and take up their cross and follow me' (Mark 8:34). Cross-bearing in the first century had one specific meaning: walking toward your own execution. Jesus says this before his crucifixion — the disciples did not yet know what the cross meant, but they knew it meant death, shame, and the surrender of any claim to self-direction. The call to discipleship is a call to die to the agenda of the self." },
  { title: "Hate Father and Mother", verse: "Luke 14:26", body: "'If anyone comes to me and does not hate father and mother, wife and children, brothers and sisters — yes, even their own life — such a person cannot be my disciple' (Luke 14:26). The Semitic idiom of 'hate' means to love less by comparison. Jesus is not commanding relational hostility but declaring that loyalty to him must be primary and uncompromising. Every other loyalty — even the deepest family bonds — must be subordinate to following him. This is the most radical claim of the discipleship summons." },
  { title: "The Rich Young Man", verse: "Mark 10:17-22", body: "A man who has done everything right asks Jesus what he lacks. Jesus identifies the one thing: 'Go, sell everything you have and give to the poor, and you will have treasure in heaven. Then come, follow me.' The man leaves sad because he had great wealth (Mark 10:22). Jesus does not chase him. The cost of discipleship varies by person — Jesus identified the man's specific attachment — but the cost is always complete. Discipleship cannot coexist with a reservation about any ultimate allegiance." },
  { title: "Blessed Are the Persecuted", verse: "Matthew 5:10-12", body: "'Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven' (Matthew 5:10). Jesus pronounces blessing on the outcome that most people would do anything to avoid. Persecution is not incidental to discipleship in a hostile world — it is expected. Peter confirms: 'If you suffer as a Christian, do not be ashamed, but praise God that you bear that name' (1 Peter 4:16). The cross was not Jesus's deviation from the path; it was the path itself, and disciples walk the same road." },
];

const MYTHS = [
  { myth: "Once you commit, it gets easier", truth: "Jesus promised the opposite. The call to follow is also a call to endure. The road narrows; the demands increase as you go deeper. What changes is not the difficulty but the capacity — and even that comes from grace, not improvement." },
  { myth: "God won't give you more than you can handle", truth: "Paul describes being 'utterly and unbearably crushed' (2 Corinthians 1:8) — well beyond his own handling capacity. The point is that God is the handler. The verse actually says God provides the way out, not that the thing itself fits your capacity." },
  { myth: "Real disciples never doubt or struggle", truth: "John the Baptist, from prison, sent messengers asking if Jesus was the one (Matthew 11:3). Elijah asked to die. David wrote dozens of psalms of complaint and disorientation. Doubt is not the opposite of faith; it is faith's companion in hard seasons." },
  { myth: "Following Jesus improves your circumstances", truth: "Paul: shipwrecked three times, flogged, imprisoned, sleepless, hungry, and cold (2 Corinthians 11:23-27). Hebrews 11 catalogs the faithful who 'did not receive what was promised' in this life. Jesus's cross precedes resurrection; the pattern is not reversed for disciples." },
  { myth: "The cost is just Sunday morning plus tithing", truth: "Bonhoeffer's 'cheap grace' names this error: 'grace without discipleship, grace without the cross, grace without Jesus Christ.' Discipleship makes total claims on every area of life — time, money, relationships, vocational decisions, and political allegiances." },
];

const LIVES = [
  {
    id: "bonhoeffer",
    name: "Dietrich Bonhoeffer",
    era: "1906-1945, Germany",
    color: "#EF4444",
    cost: "Executed by the Nazis",
    bio: "German Lutheran pastor and theologian who founded the underground Finkenwalde seminary under the Nazi regime, wrote 'The Cost of Discipleship' and 'Life Together,' and participated in the conspiracy to assassinate Hitler. He was arrested in 1943, held in Flossenburg concentration camp, and executed by hanging on April 9, 1945 — three weeks before Germany's surrender. He was 39 years old.",
    quote: "When Christ calls a man, he bids him come and die.",
    legacy: "Bonhoeffer's life collapsed the distinction between theology and action. He had every opportunity to remain safely in America (he was there in 1939 on a lecture tour) but returned to Germany because he believed he could not share in the reconstruction of the church if he had not shared in the suffering. His death gave his theology weight that no amount of scholarship alone could have provided.",
  },
  {
    id: "elliot",
    name: "Jim Elliot",
    era: "1927-1956, Ecuador",
    color: "#F59E0B",
    cost: "Speared by the Huaorani people he sought to reach",
    bio: "Wheaton College graduate who, with four other missionaries, attempted to make peaceful contact with the Huaorani (then called Auca) people of Ecuador's jungle — an isolated tribe with a history of extreme violence toward outsiders. On January 8, 1956, all five missionaries were killed by Huaorani warriors on a sandbar beside the Curaray River. Elliot was 28. His wife Elisabeth later returned to live among the Huaorani and led many to faith, including some of Jim's killers.",
    quote: "He is no fool who gives what he cannot keep to gain what he cannot lose.",
    legacy: "Elliot's journals and the subsequent story — including Elisabeth's return to the tribe — became one of the most widely read missionary accounts of the 20th century. The story turned the question of sacrifice from abstract to concrete: five young men, with families and futures, chose proximity to danger for love of people they had never met. The subsequent conversion of Huaorani warriors, including those who killed them, became one of the most striking illustrations of the gospel's power.",
  },
  {
    id: "perpetua",
    name: "Perpetua of Carthage",
    era: "c.181-203 AD, North Africa",
    color: PURPLE,
    cost: "Martyred in the arena at Carthage",
    bio: "A young noblewoman, nursing mother, and recent convert who was arrested in Carthage during the persecution of Septimius Severus. While awaiting execution, she kept a diary — one of the earliest Christian documents written by a woman. Her father pleaded with her repeatedly to recant for the sake of her infant son. She refused. On March 7, 203 AD, she and her companions were thrown to wild animals and then killed by gladiators in the arena. She was approximately 22 years old.",
    quote: "I cannot be called anything other than what I am — a Christian.",
    legacy: "Perpetua's diary preserves the voice of an early martyr in her own words — rare in the ancient world. Her refusal to prioritize even her infant son's welfare above her confession has challenged and disturbed Christians across centuries. The church has never resolved the tension she embodies: was her choice heroic faithfulness or tragic stubbornness? Most have concluded: she understood what she was doing, counted the cost, and paid it.",
  },
  {
    id: "andrew",
    name: "Brother Andrew",
    era: "1928-2022, Netherlands/Eastern Europe",
    color: "#3B82F6",
    cost: "Decades of covert work in closed countries",
    bio: "Andrew van der Bijl, a Dutch missionary, began smuggling Bibles into Eastern Europe in the 1950s during the height of the Cold War, praying at each border crossing that God would make the guards' eyes 'blind' to the Bibles in his vehicle. His autobiography 'God's Smuggler' (1967) sold over 10 million copies. He went on to work in the Soviet Union, China, Cuba, and the Muslim world — often at significant personal risk. He founded Open Doors, which continues to serve persecuted Christians globally.",
    quote: "God's work done in God's way will never lack God's supply.",
    legacy: "Brother Andrew embodies the discipleship cost of radical availability — not martyrdom but the sustained, unglamorous sacrifice of safety, comfort, and normal life in service of the persecuted church. His life demonstrated that the cost of discipleship can take the form of decades of quiet obedience rather than a single dramatic moment. He also gave Western Christians a window into the persecuted church, making abstract global suffering personally real.",
  },
  {
    id: "moon",
    name: "Lottie Moon",
    era: "1840-1912, China",
    color: GREEN,
    cost: "Gave her food to famine victims; died of starvation",
    bio: "A Virginia-born scholar (one of the first women to earn a master's degree in the American South) who sailed for China in 1873 and spent nearly 40 years as a missionary. During the Boxer Rebellion and subsequent famines, she gave away her food and money to starving Chinese neighbors until she herself was dying of starvation and malnutrition. Colleagues sent her home; she died on Christmas Eve, 1912, aboard a ship in Kobe Harbor, Japan. She weighed 50 pounds.",
    quote: "I would I could lie down the burden of my life.",
    legacy: "Moon's letters home, which described the depth of Chinese need and called for more workers and resources, transformed Southern Baptist missions. The annual Lottie Moon Christmas Offering (now raising over $100 million annually) bears her name. Her death — not in a dramatic confrontation but in the gradual self-giving of a woman who could not stop caring more for others than herself — is one of the most searching illustrations of Luke 14's language about losing one's life.",
  },
];

const PRACTICES = [
  { title: "Name What You Hold Back", desc: "Discipleship requires identifying the thing you are unwilling to surrender — and bringing that specific thing to God. For the rich young man it was wealth. For others it is reputation, control, romantic relationship, or a particular sin. The unarticulated cost is still cost; naming it is the beginning of dealing with it.", icon: "🪞" },
  { title: "Find a Costly Community", desc: "Cheap grace is easy to maintain in isolation. Discipleship requires community that will ask the hard question, name the inconsistency, and keep you accountable to what you professed. Look for community that costs you something — time, transparency, vulnerability.", icon: "👥" },
  { title: "Practice Small Deaths Daily", desc: "The cross is not one dramatic moment; it is a daily way of living. Fasting, saying no to an impulse, choosing someone else's preference, giving away what you could keep — small deaths train the capacity for the larger ones. Bonhoeffer: 'When Christ calls a man, he bids him come and die.'", icon: "✝️" },
  { title: "Read the Martyrs and the Persecuted", desc: "Foxe's Book of Martyrs, The Heavenly Man (Brother Yun), Through the Gates of Splendor (Elisabeth Elliot) — reading about Christians who paid the ultimate cost recalibrates what we call sacrifice. The persecuted church rebukes comfortable discipleship without a word.", icon: "📖" },
  { title: "Redefine Success", desc: "The metrics of the kingdom are not those of the culture: not wealth, status, comfort, or numbers. Jesus's beatitudes describe blessedness in categories the world calls cursed. Regularly ask: by what standard am I measuring my life? Is it the standard of Matthew 5 or of Madison Avenue?", icon: "📊" },
  { title: "Sit with Luke 14 Regularly", desc: "Return to the counting-the-cost passage (Luke 14:25-33) annually. What was the cost you assessed when you first committed to following Christ? Has that cost remained, grown, or been subtly reduced to something more comfortable? Renewal begins with honest assessment.", icon: "🔄" },
];

type Tab = "passages" | "myths" | "lives" | "practices" | "journal" | "videos";

export default function DiscipleshipCostPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_discipleship-cost_tab", "passages");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedLife, setSelectedLife] = usePersistedState("vine_discipleship-cost_selected_life", "bonhoeffer");

  const life = LIVES.find(l => l.id === selectedLife)!;

  const [dcEntries, setDcEntries] = useState<{ id: string; date: string; cost: string; gained: string; prayer: string }[]>(() => {
    try { const s = localStorage.getItem("vine_dc_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [dcForm, setDcForm] = useState({ cost: "", gained: "", prayer: "" });
  const [dcSaved, setDcSaved] = useState(false);
  useEffect(() => { localStorage.setItem("vine_dc_entries", JSON.stringify(dcEntries)); }, [dcEntries]);
  function saveDcEntry() {
    if (!dcForm.cost.trim()) return;
    setDcEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), ...dcForm }, ...prev]);
    setDcForm({ cost: "", gained: "", prayer: "" });
    setDcSaved(true); setTimeout(() => setDcSaved(false), 2000);
  }
  function deleteDcEntry(id: string) { setDcEntries(prev => prev.filter(e => e.id !== id)); }

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content">
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Cost of Discipleship</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            'Whoever wants to be my disciple must deny themselves and take up their cross and follow me.' Jesus was not vague about the terms. Counting the cost is not pessimism — it is the first act of genuine commitment.
          </p>
        </div>

        <div style={{ background: CARD, border: `1px solid #EF444420`, borderRadius: 12, padding: 18, marginBottom: 28, textAlign: "center" }}>
          <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
            'Cheap grace is the grace we bestow on ourselves... Cheap grace is grace without discipleship, grace without the cross, grace without Jesus Christ.' — Dietrich Bonhoeffer, The Cost of Discipleship
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "passages" as const, label: "Key Passages", icon: "📖" },
            { id: "myths" as const, label: "Common Myths", icon: "⚠️" },
            { id: "lives" as const, label: "Lives of Cost", icon: "🕊️" },
            { id: "practices" as const, label: "Practices", icon: "🛠️" },
            { id: "journal" as const, label: "My Journal", icon: "📓" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
          ].map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: tab === t.id ? PURPLE : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "passages" && (
          <div>
            {PASSAGES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{p.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}><VerseRef reference={p.verse} /></span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "myths" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 16 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These myths make discipleship seem safer and more comfortable than Jesus described it. Each one reduces the cost — and in doing so, reduces the disciple.
              </p>
            </div>
            {MYTHS.map((m, i) => (
              <div role="button" tabIndex={0} key={i} style={{ marginBottom: 10 }}>
                <button type="button" onClick={() => setExpanded(expanded === m.myth ? null : m.myth)}
                  style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: expanded === m.myth ? "10px 10px 0 0" : 10, padding: "14px 18px", color: TEXT, fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", justifyContent: "space-between", textAlign: "left" }}>
                  <span>{m.myth}</span>
                  <span style={{ color: MUTED, flexShrink: 0 }}>{expanded === m.myth ? "−" : "+"}</span>
                </button>
                {expanded === m.myth && (
                  <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "0 0 10px 10px", borderTop: "none", padding: 18 }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{m.truth}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "lives" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0 }}>
              {LIVES.map(l => (
                <button type="button" key={l.id} onClick={() => setSelectedLife(l.id)}
                  style={{ width: "100%", textAlign: "left", background: selectedLife === l.id ? `${l.color}18` : CARD, border: `1px solid ${selectedLife === l.id ? l.color : BORDER}`, borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer" }}>
                  <div style={{ color: selectedLife === l.id ? l.color : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 3 }}>{l.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{l.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${life.color}40`, borderRadius: 12, padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <h2 style={{ color: life.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{life.name}</h2>
                <span style={{ background: `${life.color}18`, color: life.color, padding: "3px 10px", borderRadius: 8, fontSize: 11, fontWeight: 700, marginLeft: 12, whiteSpace: "nowrap" }}>{life.era}</span>
              </div>
              <div style={{ background: `#EF444415`, border: `1px solid #EF444430`, borderRadius: 8, padding: "7px 12px", marginBottom: 14, display: "inline-block" }}>
                <span style={{ color: "#EF4444", fontSize: 12, fontWeight: 700 }}>COST: {life.cost}</span>
              </div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{life.bio}</p>
              <blockquote style={{ borderLeft: `3px solid ${life.color}`, paddingLeft: 16, marginBottom: 14 }}>
                <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>"{life.quote}"</p>
              </blockquote>
              <div style={{ background: BG, borderRadius: 10, padding: 16, borderLeft: `3px solid ${life.color}` }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>LEGACY</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{life.legacy}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The cost of discipleship is not counted once at conversion — it is reassessed daily. These practices help maintain the honesty that Jesus called for in Luke 14.
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
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Bonhoeffer: "When Christ calls a man, he bids him come and die." What has following Christ cost you? What have you gained through that cost?
              </p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 18 }}>Discipleship Journal</h3>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>What following Christ has cost me</label>
                <textarea value={dcForm.cost} onChange={e => setDcForm(f => ({ ...f, cost: e.target.value }))} rows={3}
                  placeholder="A relationship, an opportunity, comfort, reputation, money, safety, a future I imagined..."
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>What I have gained through the cost</label>
                <textarea value={dcForm.gained} onChange={e => setDcForm(f => ({ ...f, gained: e.target.value }))} rows={2}
                  placeholder="Mark 10:29-30: 'No one who has left... will fail to receive a hundred times as much.' What has God given back?"
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>Prayer of surrender</label>
                <textarea value={dcForm.prayer} onChange={e => setDcForm(f => ({ ...f, prayer: e.target.value }))} rows={2}
                  placeholder="What is God calling you to surrender or follow him into right now?"
                  style={{ display: "block", width: "100%", marginTop: 6, padding: "10px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: BG, color: TEXT, fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="button" onClick={saveDcEntry}
                style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: GREEN, color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                {dcSaved ? "Saved ✓" : "Save Entry"}
              </button>
            </div>
            {dcEntries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Discipleship Journal ({dcEntries.length})</h3>
                {dcEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18, marginBottom: 12, position: "relative" }}>
                    <button type="button" onClick={() => deleteDcEntry(e.id)}
                      style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 16 }}>×</button>
                    <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                    {e.cost && <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: "8px 0 4px" }}><span style={{ color: MUTED, fontWeight: 600 }}>Cost: </span>{e.cost}</p>}
                    {e.gained && <p style={{ color: GREEN, fontSize: 13, lineHeight: 1.7, margin: "0 0 4px" }}><span style={{ fontWeight: 600 }}>Gained: </span>{e.gained}</p>}
                    {e.prayer && <p style={{ color: PURPLE, fontSize: 13, fontStyle: "italic", margin: 0 }}>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
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
                  { videoId: "dy9nwe9zeU8", title: "Luke 14:25-33 — Count the Cost", channel: "Gospel Preaching", description: "A sermon on Jesus's call to count the cost of discipleship before following him — the builder, the king, and the disciple who gives up everything." },
                  { videoId: "iK0NjiBXKN4", title: "Dietrich Bonhoeffer: The Cost of Discipleship", channel: "Christian Biography", description: "An exploration of Bonhoeffer's famous work and life — the pastor who paid the ultimate cost for his discipleship by being executed by the Nazis in 1945." },
                  { videoId: "zMbUXpFiFeo", title: "The Cost of Discipleship", channel: "Reformed Teaching", description: "A teaching on what Jesus means when he says those who do not take up their cross cannot be his disciples — real sacrifice for real following." },
                  { videoId: "52ZXFH1wzc8", title: "The Cost of Discipleship: Doing Righteousness", channel: "Biblical Exposition", description: "An expository look at the demands of Christ upon those who follow him, showing that discipleship is not merely intellectual assent but whole-life surrender." },
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
