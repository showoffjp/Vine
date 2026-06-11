"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", AMBER = "#F59E0B", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "One Blood — the Biological and Theological Unity of Humanity", verse: "Acts 17:26", text: "From one man he made all the nations. The biblical category is not race — a modern social construct with no consistent biological basis — but ethnicity: humanity is one family. The Tower of Babel (Gen 11) is the origin of ethnic dispersion, not divine sanction of ethnic hierarchy but divine judgment producing ethnic diversity. Pentecost (Acts 2) reverses Babel — all nations hearing in their own language. The vision running from Genesis to Revelation is not a colorless uniformity but a reconciled diversity, many peoples gathered as one family before God." },
  { title: "The Image of God Has No Racial Hierarchy", verse: "Gen 1:26-27", text: "Every human being without exception bears the full image of God. Any theology, practice, or social system that treats some ethnicities as less fully human contradicts the most fundamental claim of Genesis 1. The church's complicity in racial hierarchy — from the curse of Ham misinterpretation to the endorsement of slavery — is a theological catastrophe requiring honest reckoning. The imago dei is not distributed in proportion to social standing, ancestry, or skin tone. It is total, equal, and inalienable, which is precisely why racism is not merely a social ill but a theological heresy." },
  { title: "Ephesians 2 — the Dividing Wall Abolished", verse: "Eph 2:14-16", text: "He himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility. The Jew-Gentile divide in the first century was at least as charged as the Black-White divide in America. Paul's claim is that the gospel destroys ethnic hostility — not merely tolerates ethnic difference. The multiethnic church is the primary apologetic for the gospel's power (John 17:21). A church that is racially homogeneous by preference, when it has no geographic reason to be, is implicitly testifying that the gospel has not actually done what Paul says it does." },
  { title: "Lament and Reconciliation — Why Reconciliation Without Lament Fails", verse: "Neh 1:4-7", text: "Nehemiah sat down and wept, then confessed the sins of his ancestors — a pattern for how those whose community has benefited from injustice should engage before reconciliation can begin. The white evangelical tendency to rush to reconciliation without allowing space for the lament of those who have been harmed short-circuits the process. Reconciliation requires truth-telling. Truth-telling requires lament. Cheap reconciliation — skipping over the grief and the honest accounting of harm — is not reconciliation at all. It is the suppression of legitimate pain under a veneer of Christian niceness." },
  { title: "Multiethnic Church — the Eschatological Preview", verse: "Rev 7:9", text: "A great multitude that no one could count, from every nation, tribe, people, and language, standing before the throne. The multiethnic church is not a sociological achievement but an eschatological preview: a foretaste of the kingdom that is coming. The congregation that reflects the diversity of the neighborhood it is located in is bearing witness to that future. What it actually takes to build a genuinely multiethnic church is harder than merely being theologically affirming of diversity — it requires shared power, cross-cultural patience, willingness to worship in unfamiliar styles, and persistent commitment to one another across discomfort." },
];

const voices = [
  { name: "Jemar Tisby", role: "The Color of Compromise", quote: "The American church has not been passive in the face of racism. It has been actively complicit. To be complicit does not necessarily mean enthusiastic endorsement; it can also mean silence, accommodation, and looking the other way. Honest reckoning requires that we stop asking only what individuals did and start asking what institutions did — and what they refused to do.", bio: "Tisby's historical work documents how American Christianity — including evangelical Christianity — provided theological cover for slavery, segregation, and ongoing racial inequity. His argument is not that all Christians were racists but that the dominant institutions of American Christianity consistently chose accommodation over prophetic witness whenever racial justice conflicted with social comfort." },
  { name: "Bryan Loritts", role: "Insider/Outsider", quote: "When a person of color walks into a predominantly white church, they immediately begin doing the cultural calculus: whose music is this, whose preaching style, whose aesthetic, whose leadership? If the answer is consistently not theirs, the message being communicated — however unintentionally — is that they are welcome as a guest but not as a co-owner. Belonging requires power-sharing, not just an open door.", bio: "Loritts writes from personal experience as a Black pastor who has navigated predominantly white evangelical spaces. His contribution is to move the conversation from diversity-as-optics to belonging-as-power-sharing. His argument is that a church can be diverse in attendance while remaining monocultural in leadership, worship, and decision-making — and that this gap is what drives people of color out." },
  { name: "John Perkins", role: "One Blood", quote: "The reconciliation the gospel calls us to is not a feeling or a declaration — it is a way of life. It requires relocation: moving into the communities you want to serve. It requires redistribution: sharing economic resources and opportunity across racial lines. And it requires reconciliation: the hard, daily, face-to-face work of becoming one people. The church is the only institution in the world with the theological foundation and the community structure to accomplish all three.", bio: "Perkins, now in his nineties, has spent his life building multiethnic community in the American South. The three Rs — relocation, redistribution, reconciliation — are the framework of the Christian Community Development Association he founded. His witness is not primarily academic; it is embodied in decades of living in proximity to poverty and injustice while building cross-racial friendships." },
];

const practices = [
  { title: "Pursue cross-racial friendships with intentionality", text: "Not as a social project but as genuine human relationship — the kind that requires you to show up in someone else's world, not merely invite them into yours." },
  { title: "Listen before speaking in conversations about race", text: "With those from different ethnic backgrounds, the discipline of listening without immediately defending or explaining is one of the most formative things a person can practice." },
  { title: "Read history through the eyes of those who were harmed", text: "Not only through the perspective of those who perpetrated or benefited from racial injustice — the same events look profoundly different from different vantage points." },
  { title: "Examine your church's leadership, worship, and programming", text: "Ask whose voices and preferences dominate, and whether the answer reveals a monoculture that has mistaken its own cultural preferences for universal Christian norms." },
  { title: "Lament specific historical and present harms before moving to reconciliation", text: "The sequence matters. Moving directly to reconciliation without naming and grieving what has been done produces a peace that is not real peace." },
];

const scriptures = [
  { verse: "Acts 17:26", text: "From one man he made all the nations, that they should inhabit the whole earth; and he marked out their appointed times in history and the boundaries of their lands." },
  { verse: "Eph 2:14-16", text: "For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility, by setting aside in his flesh the law with its commands and regulations. His purpose was to create in himself one new humanity out of the two, thus making peace." },
  { verse: "Gal 3:28", text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus." },
  { verse: "Rev 7:9", text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb." },
  { verse: "Col 3:11", text: "Here there is no Gentile or Jew, circumcised or uncircumcised, barbarian, Scythian, slave or free, but Christ is all, and is in all." },
  { verse: "Gen 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
];

const videos = [
  { id: "3aM96fxIHoA", title: "The Gospel and Race Relations" },
  { id: "DvMdKBLh4Dk", title: "Multiethnic Church and the Kingdom" },
  { id: "9mFwlP2fEFY", title: "Lament, Reconciliation, and the Church" },
  { id: "dC-7cU0PGHI", title: "John Perkins on Biblical Reconciliation" },
];

type RREntry = { id: string; date: string; experience: string; step: string; hope: string };

export default function ChristianRaceRelationsPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RREntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_racerelations_entries") ?? "[]"); } catch { return []; }
  });
  const [jExperience, setJExperience] = useState("");
  const [jStep, setJStep] = useState("");
  const [jHope, setJHope] = useState("");

  useEffect(() => { localStorage.setItem("vine_racerelations_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jExperience.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), experience: jExperience, step: jStep, hope: jHope }, ...prev]);
    setJExperience(""); setJStep(""); setJHope("");
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
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Race and the Gospel</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>What the Bible says about race, ethnicity, and reconciliation across difference — the theological foundations, the honest history, and the practices of genuine reconciliation.</p>

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
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Race and Reconciliation</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to process your own experience and discern your next steps toward understanding and reconciliation.</p>
            {[
              { label: "Experience — an experience related to race that has shaped you", val: jExperience, set: setJExperience },
              { label: "Step — a step you are taking toward understanding or reconciliation", val: jStep, set: setJStep },
              { label: "Hope — a hope you have for the church on this", val: jHope, set: setJHope },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: AMBER, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: AMBER }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: AMBER, fontWeight: 600 }}>Experience:</span> {e.experience}</p>
                      {e.step && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: AMBER, fontWeight: 600 }}>Step:</span> {e.step}</p>}
                      {e.hope && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: AMBER, fontWeight: 600 }}>Hope:</span> {e.hope}</p>}
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
