"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Gospel Creates a New Humanity", verse: "Ephesians 2:14-15", text: "For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility... His purpose was to create in himself one new humanity out of the two. Paul is speaking about Jew and Gentile — the deepest ethnic and cultural division of his world — and declaring that Christ's work has created something genuinely new. A cross-cultural marriage is a domestic enactment of this gospel reality: two distinct cultural heritages brought together into a new shared life that neither can produce alone." },
  { title: "Culture Is Part of How God Made Us", verse: "Acts 17:26-27", text: "From one man he made all the nations, that they should inhabit the whole earth; and he marked out their appointed times in history and the boundaries of their lands. God to do this so that they would seek him and perhaps reach out for him and find him. Specific cultures — their languages, traditions, rhythms, foods, ways of being — are not accidents or obstacles. They are part of how God has arranged human life across the earth. Honoring your spouse's culture is not a problem to be managed; it is a way of honoring how God made them." },
  { title: "Submission Is Mutual, Not Cultural Elimination", verse: "Ephesians 5:21", text: "Submit to one another out of reverence for Christ. The mutual submission Paul describes is not the elimination of one person's cultural identity to accommodate the other's. It is the ongoing practice of preferring one another — which, in a cross-cultural marriage, means continually learning to see, value, and honor what the other's culture offers rather than treating your own culture as the default." },
  { title: "The New Creation Includes Cultural Diversity", verse: "Revelation 7:9", text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb. The eschatological vision of Revelation is not cultural uniformity — it is a multitude from every nation and language, maintaining their distinct identities before the throne. Cross-cultural marriages already participate in this vision. They are a foretaste of the new creation's diversity." },
  { title: "Conflict About Culture Is Usually Conflict About Values", verse: "Proverbs 20:5", text: "The purposes of a person's heart are deep waters, but one who has insight draws them out. Cultural differences that surface as conflict — about how to relate to in-laws, how to raise children, who owns the family's finances, what constitutes respect — are almost always conflicts about underlying values that each person absorbed without awareness. Drawing out those deep purposes through patient curiosity rather than reactive conflict is the ongoing work of cross-cultural marriage." },
];

const voices = [
  { id: "v1", name: "Sheryl Takagi Silzer", role: "Missiologist, Author", quote: "Cross-cultural couples are not failures when they struggle — they are doing the work that the entire church needs to do. They are the frontlines of reconciliation.", bio: "Sheryl Takagi Silzer is a missiologist and the author of Biblical Multicultural Teams, which addresses the deep cultural programming that shapes how people relate, lead, and worship. Her work is widely used in cross-cultural ministry training and provides essential frameworks for couples learning to understand their own cultural assumptions and those of their partners." },
  { id: "v2", name: "Gayle Tsuno", role: "Cross-Cultural Marriage Therapist", quote: "In cross-cultural marriage, you are not just marrying a person — you are marrying a worldview, a set of assumptions about what family means, what respect looks like, and who has authority.", bio: "Gayle Tsuno is a therapist who specializes in cross-cultural marriages. Her clinical work and writing address the specific dimensions of cultural difference that most couples underestimate before marriage — including implicit rules about in-law relationships, conflict expression, money management, parenting, and what constitutes love in action." },
  { id: "v3", name: "Oneya Okuwobi", role: "Pastor, Author", quote: "Multiethnic families are signs of the kingdom — not problems to be solved. They are living parables of the reconciliation that the gospel promises.", bio: "Oneya Okuwobi is a pastor, author, and advocate for multicultural ministry. Her work addresses what it means to build genuinely cross-cultural Christian community — including at the level of family — and provides theological grounding for cross-cultural couples to understand their marriage as a missional statement about the gospel's power to reconcile across dividing walls." },
  { id: "v4", name: "Mark DeYmaz", role: "Pastor, Author, Mosaix Network", quote: "Diversity is not the enemy of unity. Homogeneity is. The most powerful witness to the gospel is people who should be separated by culture, choosing to be one in Christ.", bio: "Mark DeYmaz is the founding pastor of Mosaic Church of Central Arkansas and the author of Building a Healthy Multi-Ethnic Church. His work on multiethnic community formation provides a theological and practical framework for cross-cultural couples navigating a church culture that often defaults to cultural uniformity — and for those seeking church communities where their family feels fully welcomed." },
];

const practices = [
  { icon: "🗺️", title: "Map Each Other's Cultural Assumptions", text: "Work through a structured exercise identifying each of your cultural defaults in key areas: how are decisions made (individually or collectively)? Who has authority in the family? How is love expressed? How is conflict handled? What role do extended families play? Making implicit rules explicit prevents them from silently driving conflict." },
  { icon: "🍽️", title: "Honor Both Cultures in the Home", text: "Intentionally create practices that honor both cultural heritages — in food, holidays, language (if different), relationship to extended family, and worship. Cross-cultural children benefit enormously from seeing both parents' cultures honored rather than one default culture suppressing the other." },
  { icon: "🤝", title: "Find a Cross-Cultural Marriage Counselor", text: "Many marriage counselors are not equipped for the specific dynamics of cross-cultural marriage — they may inadvertently apply one cultural framework as the default. Finding a therapist familiar with cultural dynamics in marriage, or consulting a cross-cultural marriage specialist, provides tailored support." },
  { icon: "⛪", title: "Find a Church That Genuinely Reflects Cultural Diversity", text: "A multiethnic church — not just ethnically mixed but genuinely multicultural in leadership and liturgy — provides a community context where your cross-cultural family is normal rather than exceptional. Mosaix Network (mosaix.info) maintains a directory of genuinely multiethnic churches." },
  { icon: "👨‍👩‍👧", title: "Discuss Your Children's Cultural Identity Explicitly", text: "Children of cross-cultural marriages benefit from explicit, ongoing conversation about their dual cultural heritage rather than defaulting to one parent's culture. Books, trips, language learning, extended family relationships, and cultural celebrations all contribute to a rich dual identity rather than an ambiguous one." },
  { icon: "🙏", title: "Pray Together in Both Cultural Styles", text: "If your cultural backgrounds shaped different prayer styles — formal liturgical, spontaneous, silent, sung, expressive — try incorporating both. The diversity of your prayer life can enrich rather than divide if approached as gift rather than obstacle." },
];

const scriptures = [
  { verse: "Ephesians 2:14", text: "For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility." },
  { verse: "Revelation 7:9", text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb." },
  { verse: "Colossians 3:11", text: "Here there is no Gentile or Jew, circumcised or uncircumcised, barbarian, Scythian, slave or free, but Christ is all, and is in all." },
  { verse: "Galatians 3:28", text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus." },
  { verse: "Proverbs 20:5", text: "The purposes of a person's heart are deep waters, but one who has insight draws them out." },
];

type CCEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function CrossCulturalMarriagePage() {
  const [tab, setTab] = useState("theology");
  const [ccJournal, setCcJournal] = useState<CCEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [truth, setTruth] = useState("");
  const [step, setStep] = useState("");

  useEffect(() => {
    try { setCcJournal(JSON.parse(localStorage.getItem("vine_crossculturalmarriagej_entries") ?? "[]")); } catch { setCcJournal([]); }
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: CCEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: feeling.trim(), truth: truth.trim(), step: step.trim() };
    const updated = [entry, ...ccJournal];
    setCcJournal(updated);
    localStorage.setItem("vine_crossculturalmarriagej_entries", JSON.stringify(updated));
    setFeeling(""); setTruth(""); setStep("");
  }

  function deleteEntry(id: string) {
    const updated = ccJournal.filter(e => e.id !== id);
    setCcJournal(updated);
    localStorage.setItem("vine_crossculturalmarriagej_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #1a0a3e 0%, #07070F 60%)", padding: "3rem 1rem 2rem", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌍</div>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>Cross-Cultural Marriage</h1>
        <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto 1rem", lineHeight: 1.6 }}>Two cultures, one covenant — living as a sign of the reconciliation the gospel promises.</p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", padding: "1rem", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : CARD, color: tab === t ? "#fff" : MUTED, fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" }}>
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.3rem", textTransform: "uppercase" }}>{t.verse}</p>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: TEXT }}>{t.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: MUTED, fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.95rem" }}>"{v.quote}"</p>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{v.name}</p>
                <p style={{ color: MUTED, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontWeight: 700, color: TEXT, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{p.title}</h4>
                  <p style={{ color: MUTED, lineHeight: 1.65, margin: 0, fontSize: "0.9rem" }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `4px solid ${PURPLE}` }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: TEXT, marginBottom: "1rem", fontSize: "1rem" }}>Private Journal</h3>
              <textarea placeholder="Where is cultural difference creating tension or richness right now?" value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="What does this marriage as a gospel sign mean to us?" value={truth} onChange={e => setTruth(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <textarea placeholder="One cultural practice from my spouse's background I want to honor more:" value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", marginBottom: "0.75rem" }} />
              <button onClick={saveEntry} style={{ background: PURPLE, color: "#fff", border: "none", borderRadius: 8, padding: "0.6rem 1.4rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {ccJournal.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: PURPLE, fontSize: "0.8rem", fontWeight: 600 }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.feeling && <p style={{ color: TEXT, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{e.feeling}</p>}
                {e.truth && <p style={{ color: MUTED, fontStyle: "italic", marginBottom: "0.4rem", fontSize: "0.88rem" }}>{e.truth}</p>}
                {e.step && <p style={{ color: PURPLE, fontSize: "0.85rem", margin: 0 }}>Honoring: {e.step}</p>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "jxaJZ5lBM5U", title: "Reconciliation Across Dividing Lines", channel: "Tim Keller", description: "Keller on what the gospel's reconciliation looks like in practice — including in the most intimate context of cross-cultural covenant relationship." },
              { videoId: "Ver8qTBTLCQ", title: "Hope, Race, and Power", channel: "Tim Keller", description: "A panel on race, culture, and the church — providing theological grounding for cross-cultural couples navigating cultural difference within the body of Christ." },
              { videoId: "OU69so6VjHA", title: "Race and the Christian", channel: "Keller, Piper, Bradley", description: "A substantive conversation about how Christian faith should shape our understanding of cultural and ethnic difference — and what reconciliation requires in practice." },
              { videoId: "G9B0n0JJoSQ", title: "The Color of Compromise", channel: "The Gospel Coalition", description: "Jemar Tisby on the church's history with racial and cultural division — and what genuine, costly reconciliation requires from Christian couples and communities today." },
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
