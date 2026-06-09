"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "church", label: "The Thessalonian Church" },
  { id: "parousia", label: "The Return of Christ" },
  { id: "deadinchrist", label: "Dead in Christ" },
  { id: "dayofthelord", label: "Day of the Lord" },
  { id: "secondletter", label: "2 Thessalonians" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type ThessTab = "overview" | "church" | "parousia" | "deadinchrist" | "dayofthelord" | "secondletter" | "themes" | "journal" | "videos";

export default function ThessaloniansGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<ThessTab>("vine_thess_tab", "overview");
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_thess_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_thess_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveJEntry = useCallback(() => {
    if (!jForm.verse.trim() && !jForm.reflection.trim()) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), verse: jForm.verse, reflection: jForm.reflection, prayer: jForm.prayer };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2500);
  }, [jForm]);

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12 };
  const accent = BLUE;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: `linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(13,148,136,0.10) 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>⚡</div>
            <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>1 & 2 Thessalonians</h1>
            <p style={{ color: MUTED, fontSize: "1.05rem", maxWidth: 640, margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              Paul's earliest letters — written to a young church under persecution, asking urgent questions about Christ's return. How do we wait faithfully? What happens to believers who die before he comes? What is the Day of the Lord?
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[{ label: "1 Thess — 5 Chapters", color: BLUE }, { label: "2 Thess — 3 Chapters", color: TEAL }, { label: "AD 50–51", color: GOLD }, { label: "Paul's Earliest Letters", color: GREEN }].map(b => (
                <span key={b.label} style={{ background: `${b.color}22`, color: b.color, border: `1px solid ${b.color}44`, borderRadius: 20, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 600 }}>{b.label}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderBottom: `1px solid ${BORDER}`, background: `${CARD}CC`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", overflowX: "auto", padding: "0 1rem" }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id as ThessTab)}
                style={{ padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: activeTab === t.id ? 700 : 500, color: activeTab === t.id ? accent : MUTED, borderBottom: `2px solid ${activeTab === t.id ? accent : "transparent"}`, background: "none", border: "none", borderBottomWidth: 2, borderBottomStyle: "solid", cursor: "pointer", whiteSpace: "nowrap", transition: "color 150ms" }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "1rem" }}>The Earliest Letters in the New Testament</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>First Thessalonians (written around AD 50–51) is almost certainly the earliest letter Paul wrote that has survived — and quite possibly the earliest piece of New Testament writing in existence. It was written just months after Paul's initial visit to Thessalonica, driven by urgent pastoral concern: he had left abruptly (Acts 17:1–10), the church was facing intense persecution, and believers were dying — and the survivors were grieving and asking urgent questions about what happened to those who died before Christ returned.</p>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Paul writes to reassure, encourage, and instruct. The tone is warm, pastoral, and urgent. He calls them "our glory and our joy" (2:20) and tells them his longing to see them again was so strong he tried multiple times to return (2:17–18). His affection for this community is palpable throughout both letters.</p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>Second Thessalonians (probably written a few months later, also from Corinth) addresses new confusion — apparently some were claiming that "the day of the Lord has already come" (2:2) and others were using eschatological expectation as an excuse to stop working (3:6–12). Paul clarifies the sequence of end-times events and insists that faithful waiting is always active waiting.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
                {[
                  { icon: "🏙️", title: "Thessalonica", text: "A major city in Macedonia (northern Greece), a free city and the capital of the province. Paul visited on his second missionary journey (Acts 17:1–10), preaching in the synagogue for three Sabbaths before opposition from Jewish leaders forced him out. Despite the brief stay, a significant church formed — including both Jews and many 'God-fearing Greeks' and 'leading women.'" },
                  { icon: "🔥", title: "Persecution", text: "Both letters assume the Thessalonians are under active persecution. Paul says they 'received the word in much affliction' (1 Thess 1:6) and suffered from their own countrymen (2:14). The city had expelled Paul, and social pressure and possible violence continued against the young church. Their endurance under this pressure is what Paul celebrates and uses as a model for other churches." },
                  { icon: "⏰", title: "Why Eschatology?", text: "Both letters are dominated by eschatology (the return of Christ, the Day of the Lord, resurrection) because the persecution made these questions urgent. If believers died before Christ returned, had they missed out on the resurrection? Was the Day of the Lord already here? Paul's answers address concrete pastoral crises, not abstract theological speculation." },
                  { icon: "🙏", title: "The 'Triad' Passages", text: "1 Thessalonians contains multiple famous 'triad' passages — triplets of virtues: 'work of faith and labor of love and steadfastness of hope' (1:3); 'sanctify you completely... spirit and soul and body' (5:23); 'rejoice always, pray without ceasing, give thanks in all circumstances' (5:16–18). These compact formulations became foundational in Christian devotional life." },
                ].map(item => (
                  <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                    <h3 style={{ color: accent, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{item.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "church" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "1rem" }}>A Church Under Fire</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>The Thessalonian church's story is one of the most dramatic in the NT. Paul arrived, preached, was forced out after perhaps three weeks, and left behind a young community of converts facing hostile neighbors, worried about their dead, and uncertain about the future. What he finds when Timothy returns with news is extraordinary.</p>
              </div>
              {[
                { color: BLUE, title: "The Founding and the Rapid Departure (Acts 17:1–10)", text: "Paul preached in the Thessalonian synagogue for three Sabbaths, 'reasoning from the Scriptures' that the Christ had to suffer and rise. A 'great multitude' of God-fearing Greeks and 'not a few of the leading women' believed. But Jews who rejected the message gathered a mob, attacked the house of Jason (who was hosting Paul), and dragged him before the city authorities on charges of sedition: 'These men who have turned the world upside down have come here also.' Paul was smuggled out by night — leaving a very young church in a very volatile situation." },
                { color: GREEN, title: "Paul's Pastoral Heart (1 Thess 2–3)", text: "Chapters 2–3 of 1 Thessalonians contain some of Paul's most intimate pastoral language anywhere in his letters. He compares his ministry to a nursing mother caring for her own children (2:7) and a father exhorting his own children (2:11). He says he was 'orphaned' by separation from them (2:17 — using the word for a bereft parent, not an abandoned child). He calls them 'our glory and our joy' (2:20). He sent Timothy at personal risk (3:1–2) because he couldn't bear not knowing how they were faring. His care for this community is intense and visible." },
                { color: GOLD, title: "Timothy's Good News and Paul's Relief (1 Thess 3:6–10)", text: "'But now that Timothy has come to us from you, and has brought us the good news of your faith and love and reported that you always remember us kindly and long to see us, as we long to see you — for this reason, brothers, in all our distress and affliction we have been comforted about you through your faith' (3:6–7). Paul uses the word 'euangelisamenou' — 'brought us the good news' — the same word used for the gospel proclamation, to describe Timothy's report about the Thessalonians. Their faithfulness was literally good news to Paul in his distress." },
                { color: TEAL, title: "The Thessalonians as a Model Church (1 Thess 1:7–10)", text: "'You became an example to all the believers in Macedonia and in Achaia. For not only has the word of the Lord sounded forth from you in Macedonia and Achaia, but your faith in God has gone forth everywhere, so that we need not say anything' (1:7–8). The Thessalonian church — young, persecuted, still figuring out eschatology — has become so visible in its faith that Paul hears about them from other churches before he can say anything himself. Their suffering did not produce withdrawal; it produced a missionary overflow. The word 'sounded forth' (execheomai) evokes a trumpet blast or a thunder clap." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "parousia" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "1rem" }}>The Parousia — The Coming of Christ</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>The Greek word 'parousia' (presence, arrival, coming) is used four times in 1 Thessalonians (2:19; 3:13; 4:15; 5:23) and twice in 2 Thessalonians (2:1, 8) to describe the return of Christ. It was a technical term in the ancient world for the official arrival of a king, emperor, or dignitary — with all the ceremony, welcome, and transformation of the city that implied.</p>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>Paul's use of parousia implies that Christ's return will be a royal arrival — the Lord of the universe coming to take possession of his world. The image shapes everything else: the trumpet, the archangel's call, the rising to 'meet him in the air' — all carry the overtones of a city delegation going out to escort the arriving king back into the city.</p>
              </div>
              {[
                { color: BLUE, title: "The Shape of Paul's Eschatology", text: "Paul's eschatology in Thessalonians focuses on three realities: (1) The parousia — Christ's personal, visible, bodily return (4:16; 2 Thess 1:7–10); (2) The resurrection of the dead in Christ at that moment (4:16); (3) The transformation of the living, who are 'caught up together with them' (4:17). These events are sequential and certain. What is not certain is the timing: 'the day of the Lord will come like a thief in the night' (5:2). The appropriate response is not date-setting but watchful readiness: 'let us not sleep, as others do, but let us keep awake and be sober' (5:6)." },
                { color: GOLD, title: "The Three Sounds (1 Thess 4:16)", text: "'For the Lord himself will descend from heaven with a cry of command, with the voice of an archangel, and with the sound of the trumpet of God.' Three sounds announce the parousia: (1) a command-shout (keleusmati) — the voice of royal authority summoning; (2) the archangel's voice — heavenly authority accompanying the King; (3) the trumpet of God — the ancient signal of divine theophany, used at Sinai (Ex 19:16), announced in prophecy (Is 27:13), and picked up in Revelation 11:15. The return of Christ is not quiet — it is the loudest event in history." },
                { color: TEAL, title: "'Caught Up Together' — The Rapture Debate", text: "The phrase 'caught up together... in the clouds to meet the Lord in the air' (4:17) — 'harpazo' in Greek, 'rapturo' in Latin — is the source of the 'rapture' doctrine. The theological debate is primarily about timing and sequence: Is this a separate event from Christ's final coming (pre-tribulation rapture view), or is it the same event? The 'meet' (apantesis) language is key: in the ancient world, when a dignitary arrived at a city, a delegation went out to 'meet' him and then escort him back into the city. If Paul is using this imagery, the believers 'caught up' may be going out to meet Christ and then accompanying him back to earth — not being taken to heaven separately." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "deadinchrist" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: GREEN, marginBottom: "1rem" }}>1 Thessalonians 4:13–18: Those Who Are Asleep</h2>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 1.5rem", color: TEXT, fontStyle: "italic", lineHeight: 1.8 }}>
                  "But we do not want you to be uninformed, brothers, about those who are asleep, that you may not grieve as others do who have no hope. For since we believe that Jesus died and rose again, even so, through Jesus, God will bring with him those who have fallen asleep." — 1 Thessalonians 4:13–14
                </blockquote>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>This passage is Paul's direct pastoral response to the Thessalonians' grief over believers who had died. Some in the community feared that those who died before Christ's return had somehow missed out — that resurrection was only for the living at the time of the parousia. Paul corrects this gently but firmly: the resurrection of Jesus is the guarantee of their resurrection.</p>
              </div>
              {[
                { color: GREEN, title: "Grief That Has Hope", text: "'Do not grieve as others do who have no hope' (4:13) — Paul does not say 'do not grieve.' He says 'not as those without hope.' Christian grief is real grief — it acknowledges the genuine pain of loss, the absence of a real person, the disruption of relationships. What distinguishes it is not the absence of grief but the presence of hope. The grief has a future tense. The person is absent, but the absence is temporary. Paul's pastoral theology here: he validates the emotion while reorienting its horizon." },
                { color: BLUE, title: "The Logic of Resurrection", text: "Paul's argument in 4:14 is elegant: 'since we believe that Jesus died and rose again, even so, through Jesus, God will bring with him those who have fallen asleep.' The resurrection of Jesus is the premise; the resurrection of the dead in Christ is the conclusion. This is the same logic Paul develops at length in 1 Corinthians 15: Christ's resurrection is the 'firstfruits' of a larger harvest. If the firstfruits are risen, the harvest will follow. The dead in Christ are not lost — they are asleep, awaiting the trumpet call." },
                { color: GOLD, title: "The Dead Go First (4:15–16)", text: "Paul delivers what he describes as 'a word of the Lord' (direct revelation): 'the dead in Christ will rise first. Then we who are alive, who are left, will be caught up together with them in the clouds to meet the Lord in the air' (4:16–17). The answer to the Thessalonians' fear is that the dead do not lose out — they actually go first. The resurrection precedes the transformation of the living. Their loved ones who died are not at a disadvantage; they have priority. This is precisely calculated pastoral comfort for a grieving community." },
                { color: TEAL, title: "The Goal: 'With the Lord Always'", text: "'And so we will always be with the Lord. Therefore encourage one another with these words' (4:17–18). The climax of Paul's eschatological vision is not the spectacular mechanics — the trumpet, the cloud, the catching up. The climax is a relationship: 'always with the Lord.' The purpose of the parousia, the resurrection, and the whole eschatological sequence is permanent unmediated communion with Christ. The question of 'rapture timing' or 'millennium sequence' is secondary to this: we will be with the Lord always. This is the ground of Christian hope and the word Paul uses for pastoral comfort." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "dayofthelord" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: RED, marginBottom: "1rem" }}>The Day of the Lord (1 Thess 5:1–11)</h2>
                <blockquote style={{ borderLeft: `3px solid ${RED}`, paddingLeft: "1rem", margin: "0 0 1.5rem", color: TEXT, fontStyle: "italic", lineHeight: 1.8 }}>
                  "Now concerning the times and the seasons, brothers, you have no need to have anything written to you. For you yourselves are fully aware that the day of the Lord will come like a thief in the night." — 1 Thessalonians 5:1–2
                </blockquote>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>The 'Day of the LORD' is a major OT motif (Amos 5:18; Joel 2:1–11; Isaiah 2:12; Zephaniah 1:14–18) — a day of divine intervention and judgment. Paul picks up this tradition and applies it to Christ's return. The day will come suddenly, without warning, 'like a thief in the night' (a phrase Jesus himself used — Matt 24:43). But this does not mean it will be unexpected for those who belong to Christ.</p>
              </div>
              {[
                { color: RED, title: "Children of Light, Not Darkness (5:4–8)", text: "'But you are not in darkness, brothers, for that day to surprise you like a thief. For you are all children of light, children of the day. We are not of the night or of the darkness. So then let us not sleep, as others do, but let us keep awake and be sober' (5:4–6). Paul does not say the day's timing is known — he says believers belong to a different realm. The 'thief in the night' metaphor applies to those asleep in darkness, not to those already awake. The appropriate posture is alertness and sobriety, not calculation and prediction." },
                { color: BLUE, title: "The Armor of Light (5:8)", text: "'But since we belong to the day, let us be sober, having put on the breastplate of faith and love, and for a helmet the hope of salvation.' Paul picks up the armor imagery (expanded in Ephesians 6:10–18) but here uses only three pieces — and each is a virtue: faith, love, and hope. The famous triad (from 1:3 — 'your work of faith and labor of love and steadfastness of hope') returns as the Christian's defensive equipment for waiting faithfully in a hostile world. The armor of Christ-followers is not aggression but character." },
                { color: TEAL, title: "'Rejoice Always, Pray Without Ceasing' (5:16–18)", text: "Paul's closing instructions in 1 Thessalonians 5 include some of the most famous commands in all his letters: 'Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you' (5:16–18). The three commands are given in the context of eschatological expectation — while waiting for the Day of the Lord. They are not descriptions of emotional states but practices that form the shape of Christian life in the interim: ongoing joy (habitual orientation toward God's goodness), continuous prayer (constant conversational relationship with God), and comprehensive gratitude (receiving all circumstances as within God's purposes)." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "secondletter" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: TEAL, marginBottom: "1rem" }}>2 Thessalonians: Setting the Record Straight</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Second Thessalonians was probably written within weeks or months of the first letter, from Corinth during the same missionary stay. Two new problems had emerged: (1) a false teaching — possibly a forged letter in Paul's name — claiming 'the day of the Lord has already come' (2:2); and (2) some members of the community were refusing to work, apparently using the imminent return of Christ as justification for idleness (3:6–12).</p>
              </div>
              {[
                { color: TEAL, title: "The Man of Lawlessness (2 Thess 2:1–12)", text: "Paul insists the Day of the Lord has NOT already come — it will be preceded by 'the apostasy' and the revelation of 'the man of lawlessness... who opposes and exalts himself against every so-called god or object of worship, so that he takes his seat in the temple of God, proclaiming himself to be God' (2:3–4). Something or someone is 'restraining' this figure for now (2:6–7 — the identity of 'the restrainer' is one of the most debated questions in NT eschatology). When the restrainer is removed, the man of lawlessness will be revealed, but the Lord Jesus 'will kill him with the breath of his mouth and bring him to nothing by the appearance of his coming' (2:8). The whole passage is deliberately mysterious and has generated centuries of speculation." },
                { color: GOLD, title: "The Restrainer: What Is Holding Back?", text: "The 'restrainer' (to katechon — 'the one who holds back') in 2:6–7 has been identified as: the Roman Empire and emperor (the most common early church view — Tertullian, Chrysostom), the Holy Spirit, the church, the archangel Michael, the proclamation of the gospel, or Paul's own apostolic mission. The fact that Paul says 'you know what is restraining' (2:6) suggests it was something the Thessalonians already understood from his oral teaching — which we no longer have. The deliberate obscurity of the passage ('I told you these things' — 2:5) means confident identification is unlikely." },
                { color: BLUE, title: "Work and Waiting (2 Thess 3:6–15)", text: "'Now we command you, brothers, in the name of our Lord Jesus Christ, that you keep away from any brother who is walking in idleness and not in accord with the tradition that you received from us' (3:6). Some in the community had apparently decided that since Christ was returning soon, ordinary work was pointless. Paul's response is emphatic: 'If anyone is not willing to work, let him not eat' (3:10). And the model: 'we were not idle when we were with you... we worked night and day... so that we would not be a burden' (3:7–8). Faithful waiting is not passive waiting. Eschatological hope does not justify withdrawal from the ordinary responsibilities of human life — it energizes them." },
                { color: GREEN, title: "The Benediction of Peace (2 Thess 3:16)", text: "'Now may the Lord of peace himself give you peace at all times in every way. The Lord be with you all.' The short letter ends with a benediction of peace — the same peace that was disrupted by the false teaching, the idleness, and the persecution. Paul's answer to all three problems is the same: the presence of the Lord of peace. Not a solution to the theological puzzle, not a political resolution to the persecution, not a structural answer to the idleness problem — but the peace of the Lord himself, available 'at all times in every way.' That is the final word." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.75rem" }}>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.92rem" }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "themes" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {[
                { color: BLUE, icon: "⚡", title: "Faithful Waiting", text: "The central practical theme of both letters is 'how do we wait for Christ faithfully?' The answer across the letters: stay awake (5:6), work diligently (2 Thess 3:10), pray without ceasing (5:17), encourage one another (5:11), live peacefully within the community (5:13), and hold on to the traditions received (2 Thess 2:15). Waiting is not passivity — it is the most active orientation possible, because it means living every moment in the light of the coming King." },
                { color: RED, icon: "🔥", title: "Persecution and Endurance", text: "Both letters assume persecution and address it directly. Paul does not promise the Thessalonians relief from persecution — he commends their endurance within it (1 Thess 1:6; 2 Thess 1:4) and promises that the persecutors will face divine justice at the parousia (2 Thess 1:6–8). Suffering for the kingdom is not a sign of abandonment — it is a mark of belonging to the Messiah who himself suffered. 'Indeed we told you beforehand that we were to suffer affliction, just as it has come to pass' (1 Thess 3:4)." },
                { color: GOLD, icon: "🌅", title: "Hope as Present Force", text: "Eschatological hope in these letters is not merely future comfort — it is a present power that shapes current behavior. The hope of resurrection (4:13–18) transforms how we grieve. The hope of the parousia (5:1–11) transforms how we wait. The hope of Christ's victory over the man of lawlessness (2 Thess 2:8) transforms how we respond to deception and apostasy. Hope is not an escape from the present — it is the most clarifying lens for living faithfully in it." },
                { color: GREEN, icon: "❤️", title: "The Work of Faith, Labor of Love", text: "The opening thanksgiving in 1 Thess 1:3 establishes the frame for the whole letter: Paul gives thanks for their 'work of faith and labor of love and steadfastness of hope.' Faith has work to do. Love requires labor. Hope requires steadfastness. These are not passive virtues but active orientations that produce visible fruit. The Thessalonians are not praised for their beliefs — they are praised for what their beliefs produce in their lives and witness." },
                { color: PURPLE, icon: "🕊️", title: "Election and Assurance", text: "'For we know, brothers loved by God, that he has chosen you, because our gospel came to you not only in word, but also in power and in the Holy Spirit and with full conviction' (1 Thess 1:4–5). Paul grounds their assurance not in their own perseverance but in God's election and the Spirit's power. The evidence of their election is not a theological declaration — it is the observable transformation of their lives and the spreading of their witness. Election produces assurance; assurance produces bold witness." },
                { color: TEAL, icon: "🌿", title: "Sanctification and Holiness", text: "'This is the will of God, your sanctification: that you abstain from sexual immorality; that each one of you know how to control his own body in holiness and honor, not in the passion of lust like the Gentiles who do not know God' (1 Thess 4:3–5). Paul addresses sexual ethics directly as part of the Thessalonians' sanctification — not as legalistic prohibition but as participation in God's will (thelema) and in contrast to the surrounding culture. Sanctification is the shape of life appropriate to those who are 'children of light' waiting for the Day of the Lord." },
              ].map(item => (
                <div key={item.title} style={{ ...card, padding: "1.5rem" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <h3 style={{ color: item.color, fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "journal" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", color: accent, marginBottom: "1.5rem" }}>Thessalonians Journal</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>VERSE OR PASSAGE</label>
                    <input value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. 1 Thess 4:13–18, 1 Thess 5:16–18" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>REFLECTION</label>
                    <textarea value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="How does hope in Christ's return change how you grieve, wait, and work today?" rows={4} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "0.4rem" }}>PRAYER RESPONSE</label>
                    <textarea value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="Rejoice always, pray without ceasing, give thanks in all circumstances..." rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.92rem", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <button onClick={saveJEntry} style={{ background: accent, color: "#fff", border: "none", borderRadius: 8, padding: "0.85rem 2rem", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem", alignSelf: "flex-start" }}>{jSaved ? "✓ Saved" : "Save Entry"}</button>
                </div>
              </div>
              {jEntries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {jEntries.map(entry => (
                    <div key={entry.id} style={{ ...card, padding: "1.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <span style={{ color: accent, fontWeight: 600, fontSize: "0.9rem" }}>{entry.verse || "Reflection"}</span>
                        <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                      </div>
                      {entry.reflection && <p style={{ color: TEXT, fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "0.5rem" }}>{entry.reflection}</p>}
                      {entry.prayer && <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, fontStyle: "italic" }}>🙏 {entry.prayer}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ ...card, padding: "1.5rem 2rem" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", color: accent, marginBottom: "0.5rem" }}>Thessalonians — Video Library</h2>
                <p style={{ color: MUTED, lineHeight: 1.7 }}>Teachings on 1 & 2 Thessalonians — eschatology, faithful waiting, and the hope of resurrection.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {[
                  { id: "No7KOuGxGJc", title: "1 Thessalonians Overview", channel: "BibleProject" },
                  { id: "kbPBDKOn1cc", title: "2 Thessalonians Overview", channel: "BibleProject" },
                  { id: "PkqJ7gcHWIk", title: "The Return of Christ Explained", channel: "Mike Winger" },
                ].map(v => (
                  <div key={v.id} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div>
                      <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem" }}>{v.title}</p>
                      <p style={{ color: MUTED, fontSize: "0.8rem" }}>{v.channel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </div>
  );
}
