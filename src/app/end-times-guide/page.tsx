"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", INDIGO = "#6366F1", TEXT = "#F2F2F8", MUTED = "#9898B3";

type ETEntry = { id: string; date: string; question: string; view: string; application: string };

export default function EndTimesGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ETEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_endtimes_entries") ?? "[]"); } catch { return []; }
  });
  const [jQuestion, setJQuestion] = useState("");
  const [jView, setJView] = useState("");
  const [jApplication, setJApplication] = useState("");

  useEffect(() => { localStorage.setItem("vine_endtimes_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jQuestion.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), question: jQuestion, view: jView, application: jApplication }, ...prev]);
    setJQuestion(""); setJView(""); setJApplication("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  const theologyItems = [
    {
      title: "Already and Not Yet — the Inaugurated Eschatology Framework",
      verse: "",
      body: "The key to understanding New Testament eschatology is the already/not yet framework: the kingdom of God has already arrived in Jesus (Matt 12:28) but is not yet fully consummated. The resurrection of Jesus is the beginning of the end — the first fruits of the general resurrection (1 Cor 15:20-23). Christians live between the two advents: the first coming which inaugurated the kingdom and the second coming which will consummate it. This framework resolves many apparent contradictions in the New Testament: the kingdom is here (already) and yet to come (not yet); judgment has already begun and is not yet final; the Spirit has been poured out (already) and the fullness of the Spirit awaits the new creation (not yet).",
    },
    {
      title: "The Major Views on the Millennium — Honest Survey (Rev 20:1-6)",
      verse: "And I saw an angel coming down out of heaven... He seized the dragon... and bound him for a thousand years.",
      body: "The millennium passage has generated three major interpretive traditions: (1) Premillennialism: Christ returns before a literal 1,000-year reign on earth. (2) Postmillennialism: The gospel progressively transforms society until a golden age; Christ returns at its end. (3) Amillennialism: The millennium is symbolic for the current age of Christ's reign; no literal earthly millennium. All three positions have been held by orthodox Christians throughout history. The debate is significant for how Christians engage the world (activism vs. withdrawal) but should not divide those who agree on the physical return of Christ, bodily resurrection, and final judgment.",
    },
    {
      title: "The Resurrection Body — What the Bible Actually Says (1 Cor 15:42-44)",
      verse: "The body that is sown is perishable, it is raised imperishable; it is sown in dishonor, it is raised in glory; it is sown in weakness, it is raised in power; it is sown a natural body, it is raised a spiritual body.",
      body: "Paul insists on bodily resurrection while describing radical transformation. The resurrection body is neither a ghost (purely spiritual) nor resuscitation (identical to the current body) but a transformed physical body — continuous with what we are but glorified. Jesus's resurrection body ate fish, was touched, could be recognized, but also walked through locked doors and was no longer subject to death. This is the model for the believers' resurrection.",
    },
    {
      title: "New Creation — Not Escape from Earth but Renewal of Earth (Rev 21:1-5)",
      verse: "Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away... I saw the Holy City, the new Jerusalem, coming down out of heaven from God, prepared as a bride.",
      body: "The dominant Christian eschatology is not escape from creation to a disembodied heaven but the renewal and transformation of creation. Heaven comes down to earth; the New Jerusalem descends; God dwells with his people in a renewed creation. This matters enormously for how Christians engage the present world: if creation is to be renewed rather than destroyed, then how we treat creation, how we build culture, how we pursue justice all have eschatological significance.",
    },
    {
      title: "Living in Light of the End — Ethical Implications (1 Pet 4:7)",
      verse: "The end of all things is near. Therefore be alert and of sober mind so that you may pray.",
      body: "Eschatology is not speculation about dates and sequences — it is motivation for present faithfulness. Throughout Scripture, the announcement of the end generates ethical urgency: love more deeply, be hospitable, use your gifts in service, live holy lives (1 Pet 4:7-11). The believer who genuinely believes that Christ is returning and that all deeds will be judged lives differently than one who believes nothing is coming. The practical test of eschatology is not what view of the millennium one holds but whether the expectation of the end generates urgency, purity, and love in the present.",
    },
  ];

  const voicesItems = [
    {
      name: "N.T. Wright",
      work: "Surprised by Hope",
      quote: "The resurrection is not about going to heaven when you die. It is about God remaking the whole creation, beginning with Jesus, and inviting us to be agents of that new creation in the present. Heaven is important, but it is not the end of the world.",
      bio: "N.T. Wright is the former Bishop of Durham and one of the leading New Testament scholars of his generation. Surprised by Hope is arguably the most important popular-level book on Christian eschatology in a generation — arguing that the popular understanding (souls going to heaven) fundamentally misreads the New Testament and has serious practical consequences for how Christians engage the world.",
    },
    {
      name: "Anthony Hoekema",
      work: "The Bible and the Future",
      quote: "The goal of redemption is not the salvation of souls from the earth but the renewal of the earth itself. The Christian hope is not escape from creation but the redemption of creation — the full realization of God's purpose for the world he made and loves.",
      bio: "Anthony Hoekema was a Reformed theologian at Calvin Theological Seminary whose The Bible and the Future is the definitive Reformed treatment of biblical eschatology. His amillennial perspective, his emphasis on the new earth as a renewed present earth, and his integration of eschatology with ethics make this the most theologically rigorous and practically oriented treatment available.",
    },
    {
      name: "Randy Alcorn",
      work: "Heaven",
      quote: "If you could see the truth about where you are going, you would spend far more time thinking about it and far more time living in light of it. Heaven is not a vague spiritual state — it is a place, and the people there have bodies, and they do things, and it is more real than anything here.",
      bio: "Randy Alcorn is the founder of Eternal Perspective Ministries and the author of the most comprehensive popular-level treatment of the Christian doctrine of heaven. Heaven argues against the common misconception of disembodied existence and makes the case for a richly physical, cultural, creative, relational new creation — which has profound implications for how Christians live now.",
    },
  ];

  const practicesItems = [
    "Read Revelation 21-22 slowly as a description of where you are going — not as a code to be deciphered but as a vision of the destination — and let it shape your longings.",
    "Examine how your view of the end affects your present engagement with the world: do you care for creation, pursue justice, invest in relationships, and make things of quality — or has escapism reduced your investment in the present?",
    "Study one eschatological view you do not currently hold with genuine openness: read its best defenders and understand why intelligent, faithful Christians have held it.",
    "Identify one specific end-times anxiety (fear of the mark of the beast, confusion about the rapture, uncertainty about timing) and bring it to careful Bible study and a trusted teacher rather than internet speculation.",
    "Practice the daily discipline of living in light of the end: in your morning prayer, acknowledge that today may be closer to the return of Christ than yesterday — and ask how that shapes this day's priorities.",
  ];

  const scriptureItems = [
    { ref: "1 Cor 15:20-23", text: "But Christ has indeed been raised from the dead, the firstfruits of those who have fallen asleep. For since death came through a man, the resurrection of the dead comes also through a man." },
    { ref: "Rev 21:1-5", text: "Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away... He who was seated on the throne said, I am making everything new." },
    { ref: "1 Thess 4:16-17", text: "For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first." },
    { ref: "2 Pet 3:10-13", text: "But the day of the Lord will come like a thief. The heavens will disappear with a roar; the elements will be destroyed by fire, and the earth and everything done in it will be laid bare." },
    { ref: "1 Pet 4:7", text: "The end of all things is near. Therefore be alert and of sober mind so that you may pray." },
    { ref: "Matt 24:36", text: "But about that day or hour no one knows, not even the angels in heaven, nor the Son, but only the Father." },
  ];

  const videoItems = [
    { videoId: "XM7lQgNsqY4", title: "What Does the Bible Actually Teach About the End Times?" },
    { videoId: "YHEoXoOVgfo", title: "N.T. Wright: Surprised by Hope — Rethinking Heaven and Resurrection" },
    { videoId: "w6SDIB4bH7Q", title: "The Major Views on the Millennium Explained" },
    { videoId: "mLIbq4_Bskg", title: "New Creation: God's Plan for the Renewal of All Things" },
  ];

  const [openTheo, setOpenTheo] = useState<number>(-1);
  const [openVoice, setOpenVoice] = useState<number>(-1);

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        {/* Breadcrumb */}
        <div style={{ color: MUTED, fontSize: ".8rem", marginBottom: "1rem" }}>
          <span>Faith &amp; Doctrine</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>
          End Times Guide
        </h1>
        <p style={{ color: MUTED, maxWidth: 640, marginBottom: "2rem", lineHeight: 1.7 }}>
          A guide to Christian eschatology — the already/not yet framework, the major views on the millennium, the resurrection body, new creation, and how the end shapes present faithfulness.
        </p>

        {/* Tab bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: ".5rem 1.1rem", borderRadius: 20, border: `1px solid ${tab === t.id ? INDIGO : BORDER}`, background: tab === t.id ? `${INDIGO}22` : CARD, color: tab === t.id ? INDIGO : MUTED, fontWeight: tab === t.id ? 700 : 400, cursor: "pointer", fontSize: ".85rem" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Theology */}
        {tab === "theology" && (
          <div>
            <h2 style={{ color: INDIGO, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1.2rem" }}>Theology of the End Times</h2>
            {theologyItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openTheo === i ? INDIGO : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenTheo(openTheo === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700, paddingRight: "1rem" }}>{item.title}</span>
                  <span style={{ color: INDIGO, fontSize: "1.2rem", flexShrink: 0 }}>{openTheo === i ? "−" : "+"}</span>
                </button>
                {openTheo === i && (
                  <div style={{ padding: "0 1.3rem 1.2rem" }}>
                    {item.verse && (
                      <p style={{ borderLeft: `3px solid ${INDIGO}`, paddingLeft: ".75rem", color: TEXT, fontStyle: "italic", marginBottom: ".75rem", lineHeight: 1.7 }}>
                        &ldquo;{item.verse}&rdquo;
                      </p>
                    )}
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Practices */}
        {tab === "practices" && (
          <div>
            <h2 style={{ color: INDIGO, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1.2rem" }}>Practices for Living Eschatologically</h2>
            {practicesItems.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: ".75rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ color: INDIGO, fontWeight: 800, fontSize: "1.1rem", flexShrink: 0, minWidth: 24 }}>{i + 1}</span>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        )}

        {/* Voices */}
        {tab === "voices" && (
          <div>
            <h2 style={{ color: INDIGO, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1.2rem" }}>Voices on Eschatology</h2>
            {voicesItems.map((voice, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openVoice === i ? INDIGO : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenVoice(openVoice === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ color: TEXT, fontWeight: 700 }}>{voice.name}</span>
                    <span style={{ color: MUTED, fontSize: ".85rem", marginLeft: ".5rem" }}>&mdash; {voice.work}</span>
                  </div>
                  <span style={{ color: INDIGO, fontSize: "1.2rem", flexShrink: 0 }}>{openVoice === i ? "−" : "+"}</span>
                </button>
                {openVoice === i && (
                  <div style={{ padding: "0 1.3rem 1.2rem" }}>
                    <blockquote style={{ borderLeft: `3px solid ${INDIGO}`, paddingLeft: ".75rem", margin: "0 0 .75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.8 }}>
                      &ldquo;{voice.quote}&rdquo;
                    </blockquote>
                    <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{voice.bio}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Scripture */}
        {tab === "scripture" && (
          <div>
            <h2 style={{ color: INDIGO, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1.2rem" }}>Key Scriptures on the End Times</h2>
            {scriptureItems.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: ".75rem" }}>
                <div style={{ color: INDIGO, fontWeight: 700, marginBottom: ".4rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {/* Journal */}
        {tab === "journal" && (
          <div>
            <h2 style={{ color: INDIGO, fontWeight: 800, fontSize: "1.2rem", marginBottom: ".5rem" }}>Eschatology Journal</h2>
            <p style={{ color: MUTED, fontSize: ".9rem", marginBottom: "1.5rem" }}>Reflect on your questions and convictions about the end times. Entries are saved locally in your browser.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: ".85rem", display: "block", marginBottom: ".35rem" }}>What is your current question or uncertainty about the end times?</label>
                <input value={jQuestion} onChange={e => setJQuestion(e.target.value)} placeholder="Your question..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: ".65rem .9rem", fontSize: ".95rem", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: ".85rem", display: "block", marginBottom: ".35rem" }}>Which eschatological view resonates most with you right now, and why?</label>
                <input value={jView} onChange={e => setJView(e.target.value)} placeholder="Your current view..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: ".65rem .9rem", fontSize: ".95rem", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ color: MUTED, fontSize: ".85rem", display: "block", marginBottom: ".35rem" }}>How does your eschatology change how you live this week?</label>
                <input value={jApplication} onChange={e => setJApplication(e.target.value)} placeholder="Practical application..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: ".65rem .9rem", fontSize: ".95rem", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} disabled={!jQuestion.trim()} style={{ background: INDIGO, color: "#fff", border: "none", borderRadius: 8, padding: ".65rem 1.5rem", fontWeight: 700, cursor: jQuestion.trim() ? "pointer" : "not-allowed", opacity: jQuestion.trim() ? 1 : 0.5, fontSize: ".95rem" }}>
                Save Entry
              </button>
            </div>

            {entries.length > 0 && (
              <div>
                <h3 style={{ color: MUTED, fontWeight: 700, fontSize: ".9rem", marginBottom: ".75rem", textTransform: "uppercase", letterSpacing: ".05em" }}>Saved Entries</h3>
                {entries.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: ".75rem" }}>
                    <div style={{ color: MUTED, fontSize: ".8rem", marginBottom: ".6rem" }}>{entry.date}</div>
                    {entry.question && <p style={{ color: TEXT, margin: "0 0 .4rem", fontSize: ".9rem" }}><span style={{ color: INDIGO, fontWeight: 700 }}>Question: </span>{entry.question}</p>}
                    {entry.view && <p style={{ color: TEXT, margin: "0 0 .4rem", fontSize: ".9rem" }}><span style={{ color: INDIGO, fontWeight: 700 }}>View: </span>{entry.view}</p>}
                    {entry.application && <p style={{ color: TEXT, margin: 0, fontSize: ".9rem" }}><span style={{ color: INDIGO, fontWeight: 700 }}>Application: </span>{entry.application}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Videos */}
        {tab === "videos" && (
          <div>
            <h2 style={{ color: INDIGO, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1.2rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {videoItems.map(v => (
                <div key={v.videoId}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: ".85rem", marginTop: ".5rem", margin: ".5rem 0 0" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
