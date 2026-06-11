"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GOLD = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Second Coming Is the Climax of All History", verse: "Acts 1:11", text: "This same Jesus, who has been taken from you into heaven, will come back in the same way you have seen him go into heaven. The ascension is not the end of the story — it is the beginning of the final act. The angels' announcement at the ascension is not a consolation prize for the disciples; it is the structuring promise of all Christian hope. History is not cycling endlessly or progressing by its own momentum toward utopia. It is moving, under the sovereign hand of God, toward the return of the One who made it, redeemed it, and will consummate it. All of Christian existence — ethics, prayer, mission, suffering — is oriented by this event on the horizon." },
  { title: "Christ Returns in Bodily, Visible, Glorious Form", verse: "Revelation 1:7", text: "Look, he is coming with the clouds, and every eye will see him, even those who pierced him; and all peoples on earth will mourn because of him. The Second Coming is not a spiritual experience, an internal awakening, or a metaphor for moral progress. It is a cosmic, visible, public event. The Jesus who returns is the same Jesus who was crucified and rose bodily — the wounds still present in his glorified body (John 20:27). This bodily continuity matters enormously: it means the redemption of creation, not escape from it; the renewal of history, not its abolition. The Second Coming is not evacuation but transformation." },
  { title: "The Return Brings Judgment, Resurrection, and New Creation", verse: "1 Thessalonians 4:16-17", text: "For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first. After that, we who are still alive and are left will be caught up together with them in the clouds to meet the Lord in the air. And so we will be with the Lord forever. The Second Coming is not an isolated event but a constellation of events: the resurrection of the dead, the final judgment, and the making new of all things. The resurrection is the vindication of everything God said about human dignity and bodily life. The judgment is the rectification of everything that was wrong in history. The new creation is the fulfillment of everything God promised to Abraham, to Israel, and through Christ to the world. The Second Coming is the moment when God completes what he began at creation and advanced at the resurrection of Jesus." },
  { title: "No One Knows the Day or Hour — Live Ready", verse: "Matthew 24:36", text: "But about that day or hour no one knows, not even the angels in heaven, nor the Son, but only the Father. The ignorance of the timing is not an unfortunate gap in the divine communication strategy — it is the design. The church in every generation is to live as if the return could be today and plan as if it might be centuries away. The combination of imminence and uncertainty is the precise condition that produces the qualities Christ desires: watchfulness, faithfulness, and continued engagement with the work of the kingdom. Every generation that has set dates has been wrong; the text is designed to prevent exactly that. The question is not when — it is whether you are ready." },
  { title: "The Blessed Hope: How Eschatology Shapes Present Ethics", verse: "Titus 2:13", text: "While we wait for the blessed hope — the appearing of the glory of our great God and Savior, Jesus Christ. Paul does not use the Second Coming as a reason to abandon present responsibilities — he uses it as the motive for present holiness. The same passage calls believers to live self-controlled, upright, and godly lives in this present age while they wait. Eschatology in the New Testament never produces passivity or escapism — it produces urgency, faithfulness, and investment. The person who genuinely believes Christ will return and make all things right is precisely the person most motivated to work for justice, reconciliation, and love now — not because their work saves the world, but because it anticipates and participates in the world that is coming." },
];

type EschatologyView = { id: string; name: string; summary: string; strengths: string; concerns: string };

const views: EschatologyView[] = [
  {
    id: "premil",
    name: "Premillennialism",
    summary: "Christ returns before a literal 1,000-year reign on earth. The sequence is: tribulation, Second Coming, millennium (Christ reigning on earth), final judgment, new creation. Most commonly associated with dispensationalism, which adds a pre-tribulation rapture and a sharp distinction between Israel and the church. The millennium is a period of peace and justice under Christ's direct rule, fulfilling the Old Testament promises to Israel in a literal, earthly sense.",
    strengths: "Takes the Old Testament promises to Israel with deep seriousness. Provides a coherent narrative arc for history. Makes sense of passages that seem to describe an intermediate kingdom before the final state (e.g., Revelation 20). Has wide popular support and produces strong missionary urgency rooted in the conviction that the end is near.",
    concerns: "The dispensational form reads Old Testament prophecy with a hyper-literalism that may flatten the New Testament's typological fulfillment of those promises in Christ. The pre-tribulation rapture has almost no support in the church before the 19th century and rests on contested exegesis. The sharp Israel/church distinction is difficult to reconcile with Pauline texts like Galatians 3:28-29 and Ephesians 2:11-22.",
  },
  {
    id: "postmil",
    name: "Postmillennialism",
    summary: "Christ returns after the gospel has spread and progressively transformed the world, ushering in an extended era of gospel flourishing — the millennium — before the final return and judgment. The millennium is not necessarily a literal 1,000 years but a long period of gospel advance in which Christianity becomes the dominant influence on culture and civilization. Held by many of the Puritans, Jonathan Edwards, and Charles Spurgeon in their more optimistic moments.",
    strengths: "Takes the Great Commission seriously as a world-transforming mandate. Grounded in the conviction that the gospel is powerful enough to do what God says it will do. Produces cultural engagement, long-term thinking, and investment in institutions. Avoids the escapism that can accompany premillennial pessimism about history.",
    concerns: "Can struggle to account for persistent and intensifying evil near the end of history (cf. 2 Timothy 3:1-5; Matthew 24:12). The optimism about cultural transformation can sometimes outrun the New Testament's realistic picture of suffering and persecution as normal for the church age. Has become less common since the catastrophes of the 20th century made progressive optimism harder to sustain.",
  },
  {
    id: "amil",
    name: "Amillennialism",
    summary: "The millennium is not a future earthly period but the current church age — the reign of Christ from his ascension until his return, with departed saints already reigning with him in the intermediate state. Satan was bound at the cross (Revelation 20:2 read in light of John 12:31), and the gospel is advancing throughout the world during this binding. Christ returns once, at the end of the church age, bringing resurrection, judgment, and new creation simultaneously. The dominant view among Reformed and Lutheran traditions.",
    strengths: "Reads Revelation as apocalyptic literature, which is its literary genre, rather than as a newspaper about the future. Maintains the unity of Israel and the church as the one people of God across the testaments. Avoids the speculation and date-setting that has accompanied premillennial systems. Consistent with the New Testament's use of Old Testament prophecy as typologically fulfilled in Christ.",
    concerns: "The binding of Satan in Revelation 20 is difficult to reconcile with the New Testament's equally strong language about Satan as the active ruler of this age (2 Corinthians 4:4; 1 Peter 5:8). Critics argue that amillennialism makes Revelation 20 do a great deal of work based on a symbolic reading that may not be required by the genre.",
  },
  {
    id: "histpremil",
    name: "Historic Premillennialism",
    summary: "Christ returns before a literal millennial kingdom, but without the dispensational apparatus: no pre-tribulation rapture, no sharp Israel/church distinction, no elaborate prophetic timetable. The church passes through the tribulation and is resurrected and transformed at the return of Christ, who then reigns on earth for a millennium before the final state. Held by many of the early church fathers (Papias, Justin Martyr, Irenaeus) and in modern times by George Eldon Ladd.",
    strengths: "Has early church historical support predating Augustine's influential allegorizing shift. Avoids the excesses of dispensationalism while maintaining a literal millennium. George Eldon Ladd's scholarship in The Blessed Hope and A Theology of the New Testament gave it rigorous exegetical grounding. Maintains the church's identity with the covenant people of God.",
    concerns: "Still faces the challenge of explaining why the millennium is necessary as an intermediate stage before the final new creation. The hermeneutical approach to Revelation 20 must explain why these chapters are read more literally than much of the surrounding apocalyptic material. The exegetical case can sometimes feel like a middle position constructed to avoid the weaknesses of the alternatives rather than arising naturally from the texts.",
  },
];

const voices = [
  { id: "ntw", name: "N.T. Wright", role: "Author, Surprised by Hope; Former Bishop of Durham", quote: "The language of heaven in the New Testament is not about a place we go to escape earth, but about the dimension of reality from which the Creator God rules and will ultimately renew the whole creation. The resurrection of Jesus is the beginning of the new creation, and the Second Coming is the completion of it. The Christian hope is not the immortality of the soul evacuated from a ruined world; it is the resurrection of the body in a renewed world.", bio: "Surprised by Hope is the most important contemporary reorientation of Christian eschatology for a popular audience. Wright argues that the mainstream evangelical picture — going to heaven when you die — has almost entirely replaced the New Testament's actual focus: the resurrection of the dead, the renewal of creation, and the return of Christ to consummate both. His reading of the New Testament insists that eschatology is not about escape from history but the redemption of it, which has enormous implications for ethics, justice, and what we do with our lives now." },
  { id: "ah", name: "Anthony Hoekema", role: "Author, The Bible and the Future; Reformed Theologian", quote: "The New Testament teaches a this-worldly eschatology. The final state is not an escape from the physical and historical but the renewal and glorification of it. The new earth is real earth — redeemed, not abandoned. This means that all of our present work in the cultural mandate — science, art, justice, agriculture, music — has permanent eschatological significance. It will not be burned away but transformed and carried into the new creation.", bio: "The Bible and the Future remains the most thorough and exegetically careful systematic treatment of Reformed eschatology. Hoekema's amillennial framework is careful, well-documented, and deeply attentive to the biblical data. His insistence on the 'already and not yet' structure of New Testament eschatology — that the kingdom has come in Christ and is yet to be consummated — is the single most important eschatological framework for understanding how Christians should live between the ascension and the return." },
  { id: "mh", name: "Michael Horton", role: "Author, The Christian Faith; Westminster Seminary California", quote: "Eschatology is not the last chapter of a theology textbook — it is the frame within which the entire story of redemption is told. Every covenant God makes, every promise he issues, every act of redemption he performs is oriented toward a consummation. The Second Coming is not an afterthought appended to the gospel; it is the goal toward which the gospel has always been moving. To understand what God is doing in history, you have to know where history is going.", bio: "Horton's treatment of eschatology in The Christian Faith and throughout his biblical-theological work insists that the return of Christ is not peripheral but structurally central to Christian theology. His integration of covenant theology with eschatology — reading the whole biblical narrative as moving from creation to consummation through the covenants — gives the Second Coming its proper weight as the telos of all redemptive history. His work also helpfully distinguishes the legitimate hope for cultural transformation from the naïve triumphalism that sometimes substitutes for genuine eschatological expectation." },
];

const practices = [
  { icon: "⚓", title: "Anchor Your Daily Hope in the Resurrection, Not Just Heaven", text: "The New Testament's primary hope is not a disembodied soul in heaven but the resurrection of the body and the renewal of creation at Christ's return. Let this reframe your daily prayers and expectations. You are not waiting to escape the world — you are waiting for the world to be set right. This means your work, relationships, and embodied life now have permanent significance. Nothing done in love is wasted; it will find its place in the new creation (1 Corinthians 15:58). Practice praying for the coming of the kingdom in concrete, this-worldly terms." },
  { icon: "🕯️", title: "Live the 'Already and Not Yet' — Neither Triumphalism Nor Despair", text: "The kingdom of God has already come in Christ and is not yet consummated. This dual reality protects against two errors: triumphalism (acting as if the kingdom is fully present and we can build it through effort) and despair (acting as if nothing matters until Christ returns). The Christian lives in the tension — working for justice, reconciliation, and flourishing because the kingdom has come, while accepting suffering and limitation because it is not yet consummated. Maranatha ('Come, Lord Jesus') is not escapism — it is the prayer of someone who has tasted what is coming and longs for the fullness." },
  { icon: "📖", title: "Study One Eschatological View Seriously Before Forming a Position", text: "Most Christians inherit an eschatological framework from their church culture without ever examining the biblical arguments for it. The differences between premillennialism, amillennialism, and postmillennialism are real and rest on genuine exegetical disagreements — they deserve serious engagement. Read at least one careful, book-length treatment of a view different from your own: Ladd's The Blessed Hope (historic premillennialism), Hoekema's The Bible and the Future (amillennialism), or Mathison's Postmillennialism. The goal is not to win an argument but to hold your eschatology with informed conviction rather than inherited assumption." },
  { icon: "✊", title: "Let the Coming Judgment Produce Justice, Not Passivity", text: "The Second Coming includes final judgment — the rectification of everything that went wrong in history. Every injustice perpetrated under cover of darkness will be exposed; every victim will be vindicated; every oppressor will give account. For those doing justice work now, this is the deepest possible motivation: you are not working alone, and you will not be the last word. The One who is coming will finish what you could not. But this does not produce passivity — it produces urgency. The Judge is coming; act accordingly now, while there is time." },
];

const scriptures = [
  { verse: "Acts 1:11", text: "This same Jesus, who has been taken from you into heaven, will come back in the same way you have seen him go into heaven." },
  { verse: "Revelation 1:7", text: "Look, he is coming with the clouds, and every eye will see him, even those who pierced him; and all peoples on earth will mourn because of him. So shall it be! Amen." },
  { verse: "1 Thessalonians 4:16-17", text: "For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first. After that, we who are still alive and are left will be caught up together with them in the clouds to meet the Lord in the air. And so we will be with the Lord forever." },
  { verse: "Matthew 24:36", text: "But about that day or hour no one knows, not even the angels in heaven, nor the Son, but only the Father." },
  { verse: "Titus 2:13", text: "While we wait for the blessed hope — the appearing of the glory of our great God and Savior, Jesus Christ." },
  { verse: "Revelation 21:5", text: "He who was seated on the throne said, 'I am making everything new!' Then he said, 'Write this down, for these words are trustworthy and true.'" },
];

type SCEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function SecondComingPage() {
  const [tab, setTab] = useState("theology");
  const [scJournal, setScJournal] = useState<SCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_secondcoming_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_secondcoming_entries", JSON.stringify(scJournal)); } catch {}
  }, [scJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setScJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }
  function deleteEntry(id: string) { setScJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "views", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Eschatology</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Second Coming</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            The return of Christ, the resurrection of the dead, and the renewal of all creation — the goal toward which all of redemptive history moves and the hope that shapes how Christians live now.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? GOLD : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: GOLD, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "views" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {views.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{v.name}</div>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 0.75rem" }}>{v.summary}</p>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span style={{ color: GOLD, fontWeight: 600, fontSize: "0.8rem" }}>Strengths: </span>
                    <span style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6 }}>{v.strengths}</span>
                  </div>
                  <div>
                    <span style={{ color: GOLD, fontWeight: 600, fontSize: "0.8rem" }}>Concerns: </span>
                    <span style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6 }}>{v.concerns}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {voices.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                  <div style={{ color: GOLD, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${GOLD}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "practices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {practices.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                  <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: GOLD, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Eschatology Journal</h3>
                <textarea placeholder="What does the return of Christ mean to me right now — is it a living hope or a distant doctrine?" value={jFeeling} onChange={e => setJFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What would change in how I live if I truly believed Christ could return at any moment?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="One concrete way I want to live differently in light of Christ's return" value={jStep} onChange={e => setJStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: GOLD, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {scJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : scJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.feeling && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Where I am:</strong> {e.feeling}</p>}
                  {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>What I see:</strong> {e.truth}</p>}
                  {e.step && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Next step:</strong> {e.step}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "q4b2zSiR6wM", title: "Surprised by Hope — N.T. Wright on the Resurrection and New Creation", channel: "N.T. Wright Online", description: "Wright unpacks his landmark argument: the Christian hope is not the soul's escape to heaven but the resurrection of the body and the renewal of creation. Essential for anyone whose eschatology has been shaped by popular evangelical culture rather than the New Testament itself." },
                { videoId: "WItCjBW7jeg", title: "The Second Coming of Christ — What the Bible Actually Teaches", channel: "Ligonier Ministries / R.C. Sproul", description: "Sproul's careful, text-by-text treatment of the biblical data on the Second Coming — separating what the Scriptures clearly teach from the layers of speculation and system-building that often obscure it." },
                { videoId: "5Xo3HnFiraE", title: "Eschatology and the Already/Not Yet Kingdom", channel: "The Gospel Coalition", description: "How the 'already and not yet' structure of New Testament eschatology shapes every aspect of Christian living — ethics, suffering, mission, and hope. The single most important eschatological framework for everyday discipleship." },
                { videoId: "kZns5_tCKtA", title: "Living in Light of the Return of Christ", channel: "Desiring God / John Piper", description: "Piper on how genuine eschatological expectation produces not passivity but urgency — the person who truly believes Christ is coming is precisely the person most motivated to live radically now." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                    <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                    <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
