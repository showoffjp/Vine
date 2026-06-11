"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";
const TEAL = "#0D9488";

type MSEntry = { id: string; date: string; calling: string; barrier: string; step: string };

export default function ChristianMissionsPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MSEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_missions_entries") ?? "[]"); } catch { return []; }
  });
  const [jCalling, setJCalling] = useState("");
  const [jBarrier, setJBarrier] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => { localStorage.setItem("vine_missions_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jCalling.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), calling: jCalling, barrier: jBarrier, step: jStep }, ...prev]);
    setJCalling(""); setJBarrier(""); setJStep("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };

  const theologyItems = [
    {
      title: "The Missio Dei — God Is a Sending God (John 20:21)",
      body: "As the Father has sent me, I am sending you. Mission is not primarily the church's activity but God's. The missio Dei (mission of God) is the theological claim that God has been on a redemptive mission since the Fall — calling Abraham, constituting Israel as a light to the nations, sending prophets, and ultimately sending his Son. The church does not have a mission; the mission has a church. The church is the instrument of the missio Dei, not its originator. This reframe is important: mission is not a department of the church but the whole church's reason for existing in the world.",
    },
    {
      title: "The Great Commission — Go, Make, Baptize, Teach (Matt 28:18-20)",
      body: "All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. The Great Commission rests on the declaration of Christ's universal authority — mission proceeds from his lordship. Making disciples is the main verb; going, baptizing, and teaching are participles that describe how disciples are made. The scope is all nations: every people group, every culture, every tongue.",
    },
    {
      title: "Every People Group — the Unreached (Rev 7:9)",
      body: "A great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb. The end of the story includes every ethne — every people group. This is why missiologists speak of unreached people groups: the approximately 7,000 ethnolinguistic groups with no indigenous church capable of evangelizing their own people. The unfinished task of mission is not primarily getting more Christians in already-Christian countries but bringing the gospel to those who have never heard it in their language and culture.",
    },
    {
      title: "Integral Mission — Word and Deed (Luke 4:18)",
      body: "The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free. Jesus's mission manifesto in Nazareth integrates proclamation and social action. The false dichotomy between evangelism and social justice has damaged the church's witness for over a century. Integral mission — the holistic proclamation of the kingdom in word and deed — has been recovered by voices like Samuel Escobar, René Padilla, and the Lausanne Movement: the gospel addresses the whole person in the whole of their need.",
    },
    {
      title: "Tentmaking and Bivocational Mission — Paul's Model (Acts 18:3)",
      body: "Because he was a tentmaker as they were, he stayed and worked with them. Paul's model of tentmaking — working a trade while doing mission — is increasingly recognized as the primary model for reaching restricted-access nations and secular post-Christian contexts. Professional expertise provides both access and credibility; the tentmaker is not a covert operator but a genuinely productive member of a community who also shares the gospel. This model has been practiced by thousands across history and is being dramatically expanded by the global business-as-mission movement.",
    },
  ];

  const practiceItems = [
    "Pray regularly for specific unreached people groups — use the Joshua Project daily prayer guide or Operation World to give mission prayer a concrete focus",
    "Learn about the work your church or denomination is doing in cross-cultural mission and find one way to participate: prayer, giving, going on a short-term trip, or hosting a missionary",
    "Examine whether your skills — medicine, engineering, education, business, technology — could be deployed in a mission context: look into tentmaking or business-as-mission opportunities",
    "Study your own neighborhood as a mission field: identify unreached immigrant communities and begin building relationships with specific people",
    "Read one missionary biography this year (Elliot, Hudson Taylor, William Carey, Lottie Moon) to encounter the cost and glory of the task",
  ];

  const voiceItems = [
    {
      name: "Lesslie Newbigin",
      work: "The Gospel in a Pluralist Society",
      quote: "The church is the only society in the world that exists for the benefit of its non-members.",
      bio: "Lesslie Newbigin served as a missionary and bishop in India for decades and then returned to England to find it as much a mission field as India. His missiological works, especially The Gospel in a Pluralist Society, provided the theological framework for understanding the church's witness in post-Christian Western culture. His influence on the missional church movement has been enormous.",
    },
    {
      name: "David Platt",
      work: "Radical",
      quote: "What if we took seriously the 4.5 billion people who have never heard the gospel? What if that number changed how we spent our money, made our careers, chose where to live, and raised our children?",
      bio: "David Platt is a pastor, author, and former president of the International Mission Board. Radical challenged American Christians to reconsider the comfortable assumptions of suburban Christianity in light of the unfinished task of world mission. His call for sacrificial engagement with unreached peoples has influenced a generation.",
    },
    {
      name: "Elisabeth Elliot",
      work: "Through Gates of Splendor",
      quote: "The will of God is not something you add to your life. It is a total life surrender. Nowhere does Scripture teach that following Christ will be convenient, comfortable, or safe.",
      bio: "Elisabeth Elliot was a missionary to the Auca people of Ecuador whose husband Jim was killed along with four other missionaries in 1956. Through Gates of Splendor tells the story of that mission. She subsequently returned to the same tribe with her daughter and saw many come to faith. Her life became one of the most powerful testimonies to the cost and grace of mission.",
    },
  ];

  const scriptureItems = [
    { ref: "Matt 28:18-20", text: "All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you." },
    { ref: "John 20:21", text: "Jesus said to them again, 'Peace be with you. As the Father has sent me, even so I am sending you.'" },
    { ref: "Rev 7:9", text: "After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb, clothed in white robes, with palm branches in their hands." },
    { ref: "Luke 4:18-19", text: "The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim liberty to the captives and recovering of sight to the blind, to set at liberty those who are oppressed, to proclaim the year of the Lord's favor." },
    { ref: "Acts 1:8", text: "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth." },
    { ref: "Isa 6:8", text: "And I heard the voice of the Lord saying, 'Whom shall I send, and who will go for us?' Then I said, 'Here I am! Send me.'" },
  ];

  const videoItems = [
    { videoId: "OUaAziwpuDs", title: "The Great Commission: What It Means to Go and Make Disciples" },
    { videoId: "pN_d2Z7X5aE", title: "David Platt: Radical — What If We Took the Great Commission Seriously?" },
    { videoId: "RQ1T4BI3jOg", title: "Unreached People Groups: Who Are They and Why Does It Matter?" },
    { videoId: "SiOt3jLBe6Q", title: "The Missio Dei: God Is a Missionary God" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Outreach &amp; Mission
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Missions
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 680 }}>
            The church does not have a mission; the mission has a church. God has been on a redemptive mission since the Fall, and the Great Commission sends the whole church to make disciples of every people group, tribe, and tongue.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{
                padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? ACCENT : "transparent",
                color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? ACCENT : BORDER}`,
                cursor: "pointer", transition: "all .18s",
              }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theologyItems.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1.25rem", color: ACCENT }}>Practices for Mission Engagement</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {practiceItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: `${ACCENT}0A`, border: `1px solid ${ACCENT}25`, borderRadius: 12, padding: "1rem 1.25rem" }}>
                  <span style={{ color: ACCENT, fontWeight: 900, fontSize: "1rem", flexShrink: 0, minWidth: 24 }}>{i + 1}.</span>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.97rem" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voiceItems.map((v) => (
              <div key={v.name} style={{ ...card }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 800, color: TEXT, fontSize: "1.05rem" }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: 2 }}>{v.work}</div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptureItems.map((s) => (
              <div key={s.ref} style={{ background: `${ACCENT}0A`, border: `1px solid ${ACCENT}25`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${ACCENT}` }}>
                <div style={{ fontWeight: 800, color: ACCENT, fontSize: "0.9rem", marginBottom: "0.4rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.2rem", color: ACCENT, marginBottom: "0.5rem" }}>Mission Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                Stored only on this device. Reflect on your sense of calling, the barriers you face, and the next step you can take.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1, textTransform: "uppercase" }}>Where do you sense a calling?</label>
                  <textarea
                    value={jCalling}
                    onChange={(e) => setJCalling(e.target.value)}
                    placeholder="A people group, a neighborhood, a vocation, a skill..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1, textTransform: "uppercase" }}>What barrier holds you back?</label>
                  <textarea
                    value={jBarrier}
                    onChange={(e) => setJBarrier(e.target.value)}
                    placeholder="Fear, finances, family, uncertainty, lack of training..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1, textTransform: "uppercase" }}>One next step you can take</label>
                  <textarea
                    value={jStep}
                    onChange={(e) => setJStep(e.target.value)}
                    placeholder="Pray for a specific people group, attend a mission event, have a conversation..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
                  />
                </div>
                <button
                  type="button"
                  onClick={saveEntry}
                  style={{ alignSelf: "flex-start", padding: "0.6rem 1.5rem", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ ...card }}>
                <div style={{ color: MUTED, fontSize: "0.82rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.calling && (
                  <div style={{ marginBottom: "0.6rem" }}>
                    <span style={{ color: ACCENT, fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: 1 }}>Calling: </span>
                    <span style={{ color: TEXT, lineHeight: 1.7 }}>{e.calling}</span>
                  </div>
                )}
                {e.barrier && (
                  <div style={{ marginBottom: "0.6rem" }}>
                    <span style={{ color: ACCENT, fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: 1 }}>Barrier: </span>
                    <span style={{ color: TEXT, lineHeight: 1.7 }}>{e.barrier}</span>
                  </div>
                )}
                {e.step && (
                  <div>
                    <span style={{ color: ACCENT, fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: 1 }}>Next Step: </span>
                    <span style={{ color: TEXT, lineHeight: 1.7 }}>{e.step}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1.25rem", color: ACCENT }}>Video Teaching on Missions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {videoItems.map((v) => (
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
