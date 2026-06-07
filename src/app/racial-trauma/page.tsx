"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const THEOLOGY = [
  { title: "Every Person Bears the Image of God — Without Exception", verse: "Genesis 1:27", body: "'So God created mankind in his own image, in the image of God he created them; male and female he created them' (Genesis 1:27). The image of God — the imago Dei — is not distributed by race, ethnicity, or social standing. Every human being, without qualification, bears it. Racism and racial violence are therefore not merely social problems; they are theological ones. They deny in practice what Scripture declares as foundational: that the person being denigrated, oppressed, or harmed bears the image of the living God, and that the harm done to them is harm done in the face of that image." },
  { title: "Lament Is the Faithful Response to Racial Injustice", verse: "Nehemiah 1:4", body: "When Nehemiah heard about the destruction and suffering of Jerusalem, 'I sat down and wept. For some days I mourned and fasted and prayed before the God of heaven' (Nehemiah 1:4). He did not immediately launch a program. He wept first. The consistent biblical pattern is that genuine action flows from genuine grief. The racial trauma you carry — or witness — is worth mourning before it is fixed. Lament is not weakness; it is the honest acknowledgment that something has gone deeply wrong, and that it matters to God." },
  { title: "The Prophets Were Unambiguous About Racial and Ethnic Injustice", verse: "Amos 5:24", body: "'But let justice roll on like a river, righteousness like a never-failing stream!' (Amos 5:24). Amos, Micah, Isaiah, and Jeremiah were not primarily about personal spirituality — they were about the structural oppression of the poor and the vulnerable, including the mistreatment of foreigners and ethnic minorities within Israel. The prophets did not offer a spiritualized version of justice that ignored embodied, social, economic harm. They named it, called it sin, and said God would not receive worship from those who perpetuated it." },
  { title: "God Hears the Cry of the Oppressed", verse: "Exodus 3:7", body: "'The LORD said: I have indeed seen the misery of my people in Egypt. I have heard them crying out because of their slave drivers, and I am concerned about their suffering' (Exodus 3:7). The Exodus narrative begins with God seeing, hearing, and being concerned about the suffering of an oppressed ethnic group. This is not incidental to the biblical story; it is its starting point. The same God who heard the cry of Hebrew slaves in Egypt hears the cry of those experiencing racial trauma now. Your experience is not beneath his notice." },
  { title: "The New Creation Is Multi-Ethnic by Design", verse: "Revelation 7:9", body: "'After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb' (Revelation 7:9). The New Creation John describes is emphatically multi-ethnic — the diversity of human peoples is preserved and gathered, not erased into sameness. This means that racial diversity is not a problem to be solved but a feature of the kingdom as God designed it. The experience of racial harm is a violation of the world as God intends it." },
];

const VOICES = [
  { id: "tisby", name: "Jemar Tisby", era: "1984–present", context: "The Color of Compromise; racial justice and the church", bio: "Tisby's The Color of Compromise documents the historical complicity of American Christianity in racial oppression — from the use of Scripture to justify slavery, to the silence of white evangelical churches during the Civil Rights Movement. His work is essential reading for those seeking to understand why racial trauma in the church is not merely a contemporary problem but one with centuries of roots.", quote: "The church's complicity in racism is not an aberration. It has been a consistent pattern throughout American history. Understanding that history is not about shaming white Christians — it is about being honest about the past so that the church can actually become what it claims to be: a community of reconciliation across every barrier.", contribution: "Tisby gave both white and Black Christians a historically rigorous account of the church's racial history — removing the excuse of ignorance and providing a foundation for genuine, informed repentance and change." },
  { id: "mcneil", name: "Brenda Salter McNeil", era: "1955–present", context: "Roadmap to Reconciliation; racial healing", bio: "McNeil's Roadmap to Reconciliation provides one of the most practical and theologically grounded frameworks for racial healing — both for individuals and for institutions. Her emphasis on reconciliation as a journey rather than an event, requiring honest lament before moving to celebration, speaks directly to those navigating racial trauma.", quote: "Reconciliation is not a destination you arrive at once and stay. It is a journey that requires constant honesty about where you are, what you have done, and what it has cost others. For those who have been harmed by racism, reconciliation requires that the church first genuinely acknowledge what happened — not explain it, not minimize it, not rush to forgiveness. Acknowledge it.", contribution: "McNeil provided a roadmap — not just a theology — for racial reconciliation that takes the reality of trauma seriously and offers a processual, honest path toward genuine healing." },
  { id: "washington", name: "Reggie Williams", era: "Contemporary", context: "Bonhoeffer's Black Jesus; racial theology", bio: "Williams's Bonhoeffer's Black Jesus explores how Dietrich Bonhoeffer's encounter with the Harlem Renaissance and Black Christianity radicalized his theology — specifically his Christology. The book is an argument that taking the suffering Christ seriously requires taking the suffering of specific, racialized bodies seriously, and that racial justice is not a peripheral concern for those who take the Incarnation seriously.", quote: "To say that Jesus suffered in a body is to say that God takes the suffering of specific bodies seriously. The racialized suffering of Black and Brown bodies in America is not a sociological footnote to the Christian story — it is the location where Christ's suffering continues to be made visible. To ignore it is to practice a Christless Christianity.", contribution: "Williams provided a Christological grounding for racial justice — showing that the Incarnation commits Christians to taking the suffering of specific, embodied, racialized people seriously, not abstractly." },
];

const PRACTICES = [
  { title: "Name the Trauma Accurately", icon: "🔍", color: PURPLE, desc: "Racial trauma is a genuine psychological and physiological reality — the accumulation of exposure to racial violence, microaggressions, systemic discrimination, and the threat of harm based on race. Naming it as trauma rather than 'sensitivity' or 'perception' is the beginning of accurate response.", steps: ["Your experience of racial harm is real and not a matter of overreaction", "Racial trauma has documented psychological effects: hypervigilance, anxiety, depression, dissociation", "Find a therapist who understands racial trauma and is from or deeply familiar with your community", "The National Queer and Trans Therapists of Color Network and similar organizations maintain culturally specific therapist directories"] },
  { title: "Find Community with Those Who Know", icon: "🤝", color: GREEN, desc: "The specific grief of racial trauma — including the particular exhaustion of navigating predominantly white spaces while carrying that grief — is best held by people who know it from the inside.", steps: ["Seek out communities, churches, and groups where you do not have to explain your experience", "Give yourself permission to take breaks from integrationist settings when you need them", "Find mentors and community elders who have survived and flourished in a racist society — their wisdom is irreplaceable", "Online communities can provide support when local options are limited"] },
  { title: "Lament Specifically and Publicly", icon: "🙏", color: PURPLE, desc: "Biblical lament about racial injustice is a legitimate, necessary practice — not just personally but communally. Naming what has happened, specifically and publicly, before God is an act of faith, not despair.", steps: ["Read the psalms of lament (Ps 10, 13, 22, 88) as scripts for racial grief", "Write your own lament about specific experiences of racial harm", "Find or create community where lament about racial injustice is a legitimate communal practice", "Distinguish between grief (healthy, necessary) and despair (not having the last word)"] },
  { title: "Engage the Church with Realistic Expectations", icon: "✝️", color: GREEN, desc: "Many churches are inadequately equipped to support those experiencing racial trauma — both because of structural whiteness and because the topic is rarely addressed with adequate depth. Engaging the church requires realistic expectations about what most congregations can currently offer.", steps: ["Seek out churches with demonstrated commitment to racial justice — not just statements", "Build relationships with pastors who are willing to learn and be corrected", "Do not carry the burden of educating an entire church community alone", "Know when a particular church community cannot be the support you need and find a community that can"] },
];

const SCRIPTURE = [
  { verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
  { verse: "Amos 5:24", text: "But let justice roll on like a river, righteousness like a never-failing stream!" },
  { verse: "Exodus 3:7", text: "The LORD said: I have indeed seen the misery of my people in Egypt. I have heard them crying out because of their slave drivers, and I am concerned about their suffering." },
  { verse: "Revelation 7:9", text: "There before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb." },
  { verse: "Micah 6:8", text: "He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God." },
  { verse: "Romans 12:15", text: "Rejoice with those who rejoice; mourn with those who mourn." },
];

type Tab = "theology" | "voices" | "practices" | "scripture" | "journal" | "videos";

export default function RacialTraumaPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_racial_trauma_tab", "theology");
  const [selectedVoice, setSelectedVoice] = usePersistedState("vine_racial_trauma_voice", "tisby");
  const voice = VOICES.find(v => v.id === selectedVoice)!;

  type RacialTraumaJE = { id: string; date: string; feeling: string; truth: string; step: string };
  const [rtJournal, setRtJournal] = useState<RacialTraumaJE[]>(() => { try { return JSON.parse(localStorage.getItem("vine_racialtraumaj_entries") ?? "[]"); } catch { return []; } });
  const [jrtFeeling, setJrtFeeling] = useState("");
  const [jrtTruth, setJrtTruth] = useState("");
  const [jrtStep, setJrtStep] = useState("");
  useEffect(() => { try { localStorage.setItem("vine_racialtraumaj_entries", JSON.stringify(rtJournal)); } catch {} }, [rtJournal]);
  function saveRtEntry() {
    if (!jrtFeeling.trim() && !jrtTruth.trim()) return;
    setRtJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jrtFeeling, truth: jrtTruth, step: jrtStep }, ...prev]);
    setJrtFeeling(""); setJrtTruth(""); setJrtStep("");
  }
  function deleteRtEntry(id: string) { setRtJournal(prev => prev.filter(e => e.id !== id)); }

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "📖 Theology" }, { id: "voices", label: "🎓 Voices" },
    { id: "practices", label: "🛤️ Practices" }, { id: "scripture", label: "✝️ Scripture" },
    { id: "journal", label: "📓 Journal" }, { id: "videos", label: "▶️ Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <Navbar />
      <main id="main-content">
      <div style={{ background: "linear-gradient(180deg, rgba(58,125,86,0.08) 0%, transparent 100%)", padding: "80px 24px 48px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>✊</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>Racial Trauma &amp; Healing</h1>
        <p style={{ color: MUTED, fontSize: 16, maxWidth: 640, margin: "0 auto 24px", lineHeight: 1.75 }}>
          Every person bears the image of God. Racism is a theological wrong, not only a social one.
          Resources for those carrying racial trauma and seeking healing in the faith community.
        </p>
        <div style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: "14px 20px", maxWidth: 500, margin: "0 auto", fontSize: 14, color: "#B0D8BE", lineHeight: 1.7 }}>
          <strong>If you are in crisis:</strong> Call <strong>988</strong> (Suicide &amp; Crisis Lifeline).<br />
          <strong>Therapy for Black Girls</strong> (therapyforblackgirls.com) · <strong>Beam</strong> (beam.community)
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, margin: "28px 0", overflowX: "auto" }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setTab(t.id)}
              style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "none", background: tab === t.id ? GREEN : "transparent", color: tab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {THEOLOGY.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, margin: 0, flex: 1, paddingRight: 16 }}>{item.title}</h3>
                  <span style={{ fontSize: 12, color: GREEN, fontWeight: 700, whiteSpace: "nowrap", background: `${GREEN}15`, border: `1px solid ${GREEN}30`, borderRadius: 6, padding: "3px 10px" }}>{item.verse}</span>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
              {VOICES.map(v => (
                <button type="button" key={v.id} onClick={() => setSelectedVoice(v.id)}
                  style={{ padding: "8px 18px", borderRadius: 20, border: `1px solid ${selectedVoice === v.id ? GREEN : BORDER}`, background: selectedVoice === v.id ? `${GREEN}18` : "transparent", color: selectedVoice === v.id ? GREEN : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {v.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
              <div style={{ marginBottom: 6 }}><span style={{ fontSize: 22, fontWeight: 900 }}>{voice.name}</span><span style={{ color: MUTED, fontSize: 13, marginLeft: 12 }}>{voice.era}</span></div>
              <div style={{ color: GREEN, fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{voice.context}</div>
              <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{voice.bio}</p>
              <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 18, margin: "0 0 20px", color: "#e0e0f0", fontSize: 15, fontStyle: "italic", lineHeight: 1.75 }}>&ldquo;{voice.quote}&rdquo;</blockquote>
              <div style={{ background: BG, borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Contribution</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{voice.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PRACTICES.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{p.icon}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: TEXT, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.steps.map((s, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: p.color, fontWeight: 900, fontSize: 13, minWidth: 20 }}>{j + 1}.</span>
                      <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.65 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {SCRIPTURE.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 14, marginBottom: 10 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>📓 My Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Write honestly about what you are carrying — the grief, the anger, the hope, the exhaustion. Your experience is real, your response is valid, and your image-bearing dignity is not up for debate.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <textarea value={jrtFeeling} onChange={e => setJrtFeeling(e.target.value)}
                  placeholder="What am I feeling today? What has happened recently? What am I carrying?"
                  rows={3} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <textarea value={jrtTruth} onChange={e => setJrtTruth(e.target.value)}
                  placeholder="One true thing about my dignity, God's heart for justice, or what I am holding onto..."
                  rows={2} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, resize: "vertical", outline: "none" }} />
                <input value={jrtStep} onChange={e => setJrtStep(e.target.value)}
                  placeholder="One step toward care, community, or healing today..."
                  style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 14, outline: "none" }} />
                <button type="button" onClick={saveRtEntry}
                  style={{ alignSelf: "flex-start", background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {rtJournal.length === 0 ? (
              <div style={{ textAlign: "center", color: MUTED, padding: "40px 0" }}>No entries yet. Your experience deserves to be written down honestly.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {rtJournal.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                      <button type="button" onClick={() => deleteRtEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18 }}>×</button>
                    </div>
                    {e.feeling && <p style={{ color: "#C0C0D8", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{e.feeling}</p>}
                    {e.truth && <p style={{ color: GREEN, fontSize: 13, lineHeight: 1.65, marginBottom: 6 }}>✝ {e.truth}</p>}
                    {e.step && <p style={{ color: PURPLE, fontSize: 13, fontStyle: "italic" }}>→ {e.step}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { videoId: "G9B0n0JJoSQ", title: "The Color of Compromise — Jemar Tisby", channel: "The Gospel Coalition", description: "Tisby on the historical record of American Christianity and race — what the church has done, why it matters today, and what genuine repentance and change require." },
              { videoId: "R7V8WkLI4Rk", title: "Roadmap to Reconciliation — Brenda Salter McNeil", channel: "InterVarsity Christian Fellowship", description: "McNeil on the journey of racial reconciliation — what it requires of both those who have been harmed and those who need to repent, and why it is a process rather than an event." },
              { videoId: "GJLAnzpgUMg", title: "Racial Trauma: A Christian Psychological Perspective", channel: "Christian Association for Psychological Studies", description: "A clinical and theological treatment of racial trauma — what it is physiologically and psychologically, how the church should respond to those experiencing it, and what healing looks like." },
              { videoId: "vvRGdpBEn6c", title: "Lament and Racial Justice — Mark Charles", channel: "Fuller Theological Seminary", description: "Mark Charles on the role of lament in racial justice — why the church must grieve before it celebrates, and what honest lamentation about racial history and trauma looks like in practice." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      </main>
      <Footer />
    </div>
  );
}
