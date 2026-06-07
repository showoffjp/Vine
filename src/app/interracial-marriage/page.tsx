"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The New Creation Is Multi-Ethnic by Design", verse: "Revelation 7:9", text: "A great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb. The eschatological vision of Scripture is not mono-ethnic. It is the gathered diversity of every people group, preserved and celebrated before the throne. An interracial marriage is a foretaste of this vision — a sign in the present of what the kingdom ultimately looks like. The church that opposed interracial marriage was not reading its own eschatology faithfully." },
  { title: "In Christ There Is Neither Jew Nor Greek', verse: 'Galatians 3:28", text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus. Paul's declaration was politically explosive in its first-century context: it directly challenged the ethnic boundary markers that the Jewish-Gentile division had maintained. The gospel is not colorblind — it doesn't pretend racial difference doesn't exist. It is color-honoring: it insists that those differences are not barriers to union in Christ." },
  { title: "Cultural Difference Is Real and Worth Tending', verse: 'Acts 2:4-6", text: "All of them were filled with the Holy Spirit and began to speak in other tongues... each one heard their own language being spoken. At Pentecost, the Spirit spoke in every language — not through a common language that erased the others, but through every language in its particularity. This is a model for interracial marriage: not the erasure of cultural difference in favor of a dominant culture, but the honoring of both cultures in their particularity, held together by the Spirit." },
  { title: "Family Disapproval Is Painful — But Not Decisive', verse: 'Genesis 2:24", text: "That is why a man leaves his father and mother and is united to his wife, and they become one flesh. The leaving precedes the cleaving. The formation of a new marriage requires a genuine departure from the family of origin — emotionally, relationally, in terms of loyalty. When family opposition to an interracial marriage is expressed through ongoing pressure, criticism, or manipulation, the leaving becomes more urgent. Family concern deserves respectful hearing. It does not deserve veto power." },
  { title: "You Will Experience What Your Spouse Cannot Fully Understand", verse: "Romans 12:15", text: "Rejoice with those who rejoice; mourn with those who mourn. An interracial couple navigates experiences that their spouse will not fully comprehend from the inside: the specific textures of racial experience, the microaggressions that only one partner recognizes, the family cultural patterns that feel natural to one and foreign to the other. The work of a cross-cultural marriage includes the ongoing practice of witness — bearing witness to your specific experience to a partner who loves you but does not share your history." },
];

const voices = [
  { id: "jt", name: "Jemar Tisby", role: "Author, The Color of Compromise", quote: "The church's historical opposition to interracial marriage was not a minor cultural mistake. It was theologically incoherent — a denial of the eschatological vision of a multi-ethnic kingdom in favor of the racial ideologies of the surrounding culture. Interracial couples in Christian marriages are, in a real sense, living out the future of the kingdom in the present.", bio: "Tisby's historical work on race and the American church provides essential context for understanding why interracial marriage remains fraught in some Christian communities — and why the opposition is not theologically defensible but historically traceable to specific racial ideologies." },
  { id: "cj", name: "Christena Cleveland", role: "Social Psychologist, Author of Disunity in Christ", quote: "Cross-cultural relationships — including interracial marriages — require what social scientists call 'cultural humility': the ongoing willingness to acknowledge that your cultural perspective is partial, to genuinely learn your partner's experience, and to be changed by it. This is not comfortable. It is also profoundly Christlike.", bio: "Cleveland's research on cross-cultural relationships and the psychology of in-group/out-group dynamics applies directly to interracial marriage. Her work helps couples understand the social and psychological dynamics that create friction, and the practices that build genuine understanding across difference." },
  { id: "rr", name: "Ravi & Margie Zacharias (as testimony)", role: "Cross-cultural marriage example", quote: "Every marriage requires translation across difference — difference of personality, history, family culture. An interracial marriage adds more layers of translation, and more layers of potential richness. The question is whether you are willing to do that work with genuine curiosity and love.", bio: "Interracial and intercultural marriages produce distinctive gifts: bilingual children with multiple cultural identities, families that embody reconciliation, couples who have learned by necessity the cultural humility that most Christians are never required to develop. The weight is real; so is the gift." },
];

const practices = [
  { icon: "🌍", title: "Learn Your Spouse's Cultural World — Not Just Their Individual Personality", text: "Every person is formed by culture: assumptions about family loyalty, emotional expression, conflict resolution, authority, hospitality, time, and money that are so native to the person that they don't know they are cultural until they meet someone from a different culture. In an interracial marriage, many conflicts that appear to be about personality are actually about culture. Learning to distinguish the two — through honest conversation, reading, and the humility to be taught — is fundamental to the health of the marriage." },
  { icon: "👨‍👩‍👧", title: "Decide Together How to Raise Cross-Cultural Children", text: "Children of interracial couples navigate multiple racial and cultural identities — a gift and a challenge. Deciding together, before children arrive, how to raise them in both cultures, how to address racial identity questions, how to prepare them for the specific experiences they will have as biracial or multiracial children is essential work. The Mixed (themixed.org) and related resources address the specific experience of multiracial families." },
  { icon: "🤝", title: "Build Community With Other Interracial Couples", text: "The specific joys and challenges of an interracial marriage are not easily communicated to monocultural couples. Building community with other interracial couples — through church communities that include diverse families, through online communities (Swirl Nation, Multiracial Family Man), and through intentional friendship — provides the normalization and support that the surrounding culture often doesn't offer." },
  { icon: "🗣️", title: "Talk Explicitly About Race — Especially After Racial Events", text: "Interracial couples who never talk explicitly about race are burying something that will eventually resurface. When high-profile racial events occur — police violence, racially motivated crimes, social upheaval — each partner will experience them differently. These differences need to be able to enter the conversation, not be suppressed for the sake of superficial peace. The capacity for honest cross-racial conversation within the marriage is one of its distinctive gifts — and it requires intentional cultivation." },
];

const scriptures = [
  { verse: "Galatians 3:28", text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus." },
  { verse: "Revelation 7:9", text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb." },
  { verse: "Song of Solomon 1:5-6", text: "Dark am I, yet lovely, daughters of Jerusalem... Do not stare at me because I am dark, because I am darkened by the sun." },
  { verse: "Numbers 12:1", text: "Miriam and Aaron began to talk against Moses because of his Cushite wife, for he had married a Cushite woman." },
  { verse: "Ruth 1:16", text: "But Ruth replied, 'Don't urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.'" },
  { verse: "Ephesians 2:14", text: "For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility." },
];

type IMEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function InterracialMarriagePage() {
  const [tab, setTab] = useState("theology");
  const [imJournal, setImJournal] = useState<IMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_interracialmarriagej_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_interracialmarriagej_entries", JSON.stringify(imJournal)); } catch {}
  }, [imJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setImJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setImJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Marriage & Culture</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Interracial Marriage</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          A foretaste of the kingdom — and the real work of building a life across cultural difference.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Marriage Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What is a cultural difference I am navigating or need to understand better?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What do I see in our marriage that reflects the kingdom?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One way I will learn my spouse's cultural experience better this week</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {imJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {imJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Navigating: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Kingdom: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Learning: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "OU69so6VjHA", title: "Race and the Christian: Q&A with Tim Keller, John Piper & Anthony Bradley", channel: "Redeemer Presbyterian Church", description: "Keller, Piper, and Bradley discuss what the Bible teaches about race, the church's responsibility toward racial reconciliation, and how that applies to families navigating racial difference in marriage." },
              { videoId: "jxaJZ5lBM5U", title: "Reconciliation", channel: "Tim Keller", description: "A Keller sermon on reconciliation — the costly, Spirit-powered work of breaking down cultural and racial walls — relevant to the ongoing reconciliation required within a cross-cultural marriage." },
              { videoId: "Ver8qTBTLCQ", title: "Hope, Race and Power", channel: "Tim Keller", description: "A sermon exploring how Christian hope shapes our approach to race-related issues and the power dynamics that interracial couples often navigate within their extended families and communities." },
              { videoId: "2b0PxJcUCNM", title: "The Four Horsemen — Gottman", channel: "The Gottman Institute", description: "Gottman explains the four relationship patterns that most predict marriage failure — relevant for interracial couples who face additional external stressors and may develop these patterns in response." },
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
  );
}
