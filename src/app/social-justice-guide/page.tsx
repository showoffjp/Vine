"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", AMBER = "#F59E0B", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Prophets and Justice — What Amos, Micah, and Isaiah Demand", verse: "Amos 5:24", text: "Let justice roll down like waters, and righteousness like an ever-flowing stream. Micah 6:8 asks what the Lord requires: to do justice, love mercy, and walk humbly with your God. Isaiah 1:17 commands: learn to do good, seek justice, correct oppression. The major and minor prophets devoted more space to economic exploitation and legal injustice than to personal sexual sin. This is not a marginal theme that progressives have imported into the Bible — it is the consistent, unavoidable heartbeat of the entire prophetic tradition. To read the prophets seriously is to be confronted with a God who is furiously concerned with how the powerful treat the powerless." },
  { title: "Imago Dei and the Dignity of Every Person", verse: "Gen 1:26-27", text: "Then God said, let us make mankind in our image, in our likeness. Every human being — regardless of race, class, gender, nationality, or legal status — bears the image of God. Imago dei is the theological foundation for human dignity and rights. It means that the way we treat the vulnerable, the alien, the poor, and the incarcerated is not merely a political or humanitarian question — it is a theological one. When we demean or dismiss a person, we are defacing an image-bearer. When we protect or elevate a person, we are honoring the God whose image they carry." },
  { title: "The Poor and the Bible — How God Defines His Relationship to the Vulnerable", verse: "Ps 146:7-9", text: "The Lord executes justice for the oppressed, gives food to the hungry. The Lord sets the prisoners free. Proverbs 19:17 says that lending to the poor is lending to God. Luke 4:18 records Jesus announcing his mission: good news to the poor, freedom for the prisoners, recovery of sight for the blind. The frequency with which Scripture aligns God's identity with care for the poor is not incidental — it is definitional. The God of the Bible is not neutral on poverty. He has named himself the defender of the vulnerable, and the church that ignores the poor ignores something central to who God says he is." },
  { title: "Justice vs. Charity — the Prophetic Distinction", verse: "Isaiah 58:6-7", text: "Is this not the fast that I choose: to loose the bonds of wickedness, to undo the straps of the yoke, to let the oppressed go free? Is it not to share your bread with the hungry? Charity addresses the immediate need. Justice addresses the structural cause. Both are required. The problem with churches that are generous with charity but silent on the systems that produce poverty is that they treat symptoms while leaving the disease untouched. Isaiah 58 makes clear that God regards justice-shaped fasting — systemic action on behalf of the oppressed — as more pleasing than ritual piety." },
  { title: "The Danger of Capture — When Social Justice Becomes an Ideology", verse: "Amos 5:15", text: "Hate evil, love good, and establish justice in the gate. The risk that Christian engagement with justice gets captured by either the secular left — reducing the gospel to political activism — or the secular right — co-opting faith to protect privilege — is real and documented. A distinctively Christian justice looks different from both: it is rooted in Scripture rather than in ideological frameworks; it is driven by love rather than resentment; it is committed to all lives including the unborn; and it refuses the zero-sum framing of identity politics that turns every justice issue into a tribal contest." },
];

const voices = [
  { name: "Tim Keller", role: "Generous Justice", quote: "Justice is not optional social activism for Christians who happen to be wired that way. It is a core implication of the gospel for anyone who has truly received grace. To have been forgiven an unpayable debt by God is to be permanently changed in how you regard the needs of others. You cannot grasp what God has done for you without it producing a radically generous posture toward the vulnerable.", bio: "Tim Keller's Generous Justice is the single most useful evangelical treatment of social justice in print. Keller argues from multiple angles — the gospel, the prophets, the Psalms, and the teaching of Jesus — that engagement with the poor and the oppressed is not peripheral but central to Christian identity. He does so without surrendering to either progressive or conservative ideological capture." },
  { name: "Bryan Stevenson", role: "Just Mercy", quote: "We are all implicated in injustice. There is no neutral position. The only path forward is proximity — getting close to those who suffer, close enough to hear them, close enough to be changed by them. You cannot do justice from a distance.", bio: "Bryan Stevenson is a Christian attorney who founded the Equal Justice Initiative in Montgomery, Alabama. Just Mercy documents his work defending death row prisoners and wrongly convicted people. His framework is explicitly rooted in Christian witness — the belief that each person bears dignity — and his argument for proximity as the foundation of justice work has shaped a generation of Christian activists." },
  { name: "John Perkins", role: "Let Justice Roll Down", quote: "Reconciliation, redistribution, relocation — these three Rs are the commitments you have to make if you want to actually engage broken communities rather than just talk about them. Reconciliation across racial lines. Redistribution of resources and skills into underserved places. And relocation — moving yourself into the community you say you care about.", bio: "John Perkins is one of the most important Christian voices on justice in American history. A survivor of brutal violence by Mississippi law enforcement in 1970, he chose forgiveness and returned to Mississippi to build the Christian Community Development movement. His three Rs framework — reconciliation, redistribution, relocation — remains the most practically grounded approach to Christian community development available." },
];

const practices = [
  { title: "Learning Proximity", text: "Intentionally spending time in places and with people unlike your usual community. Justice work that is not grounded in genuine relationship with those affected is activism, not ministry. Proximity changes how you think, not just what you do." },
  { title: "Advocacy for Specific Legislation", text: "Identifying legislation in your local context that affects vulnerable people — housing, policing, food access, education — and learning enough to contact your representatives with specific, informed advocacy on behalf of those who have less access to power." },
  { title: "Supporting Underserved Communities Economically", text: "Choosing to spend money at businesses and support churches in underserved neighborhoods. Economic decisions are justice decisions. Deliberate economic proximity is one of the most concrete forms of redistribution available to ordinary Christians." },
  { title: "Isaiah 58 Fasting", text: "Fasting combined with prayer as an act of solidarity with those who go without — not as spiritual performance but as the embodied practice God describes in Isaiah 58: loosing the bonds of injustice, freeing the oppressed, sharing bread with the hungry." },
  { title: "The Absent Voice Question", text: "Asking consistently: who is not in this room, and why? Applying prophetic consciousness to your own community, organization, and church. The people whose absence is unremarkable are often the people the prophets were most concerned about." },
];

const scriptures = [
  { verse: "Micah 6:8", text: "He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God." },
  { verse: "Amos 5:24", text: "But let justice roll down like waters, and righteousness like an ever-flowing stream." },
  { verse: "Isaiah 1:17", text: "Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow's cause." },
  { verse: "Prov 19:17", text: "Whoever is generous to the poor lends to the Lord, and he will repay him for his deed." },
  { verse: "Luke 4:18", text: "The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim liberty to the captives and recovering of sight to the blind, to set at liberty those who are oppressed." },
  { verse: "Matt 25:40", text: "And the King will answer them, Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me." },
];

const videos = [
  { id: "r8JkX8f1O3U", title: "What Does the Bible Say About Justice?" },
  { id: "7oO2KGKqkq0", title: "Tim Keller on Justice and the Gospel" },
  { id: "8-e8RNjKg38", title: "Bryan Stevenson on Proximity and Justice" },
  { id: "v1U5bPVHaGY", title: "John Perkins and the Christian Community Development Movement" },
];

type SJEntry = { id: string; date: string; issue: string; response: string; tension: string };

export default function SocialJusticeGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SJEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_socialjustice_entries") ?? "[]"); } catch { return []; }
  });
  const [jIssue, setJIssue] = useState("");
  const [jResponse, setJResponse] = useState("");
  const [jTension, setJTension] = useState("");

  useEffect(() => { localStorage.setItem("vine_socialjustice_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jIssue.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), issue: jIssue, response: jResponse, tension: jTension }, ...prev]);
    setJIssue(""); setJResponse(""); setJTension("");
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
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Biblical Social Justice</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>What Scripture says about justice, poverty, and the prophetic tradition — and what it means for how Christians engage the world.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? AMBER : BORDER}`, background: tab === t.id ? AMBER + "22" : "transparent", color: tab === t.id ? AMBER : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: AMBER, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 8 }}>{p.title}</h3>
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
                <div style={{ fontSize: "0.8rem", color: AMBER, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${AMBER}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: AMBER, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Justice</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to wrestle honestly with justice issues in your context.</p>
            {[
              { label: "Issue — a justice issue you are wrestling with", val: jIssue, set: setJIssue },
              { label: "Response — how you are responding or want to respond", val: jResponse, set: setJResponse },
              { label: "Tension — a tension between your faith and your political context", val: jTension, set: setJTension },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: AMBER, color: "#07070F", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: AMBER }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: AMBER, fontWeight: 600 }}>Issue:</span> {e.issue}</p>
                      {e.response && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: AMBER, fontWeight: 600 }}>Response:</span> {e.response}</p>}
                      {e.tension && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: AMBER, fontWeight: 600 }}>Tension:</span> {e.tension}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: AMBER }}>{v.title}</h3>
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
