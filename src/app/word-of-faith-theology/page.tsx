"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GOLD = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Origins of Word of Faith — E.W. Kenyon, Kenneth Hagin, and New Thought Influence", verse: "2 Tim 4:3-4", text: "The Word of Faith movement did not emerge from classical Pentecostalism alone. E.W. Kenyon (1867–1948), often called the intellectual father of WoF, was deeply shaped by New Thought metaphysics — particularly the idea that the mind or spoken word has power to alter physical reality. His books introduced into Christian vocabulary phrases like 'what I confess I possess' and the notion that believers could manipulate spiritual laws through speech. Kenneth Hagin (1917–2003) popularized Kenyon's ideas, often reproducing his writings nearly verbatim, and built the infrastructure of the modern WoF movement. Scholars including D.R. McConnell have documented the New Thought lineage extensively. Understanding these origins matters because it reveals that WoF theology was not primarily derived by exegesis from Scripture but imported from outside Christianity and then supplied with proof texts." },
  { title: "The Positive Confession Doctrine — What Does Speaking in Faith Actually Mean?", verse: "Matt 21:21, Mark 11:23-24", text: "Word of Faith theology treats Matthew 21:21 and Mark 11:23-24 as foundational: 'If you believe, you will receive whatever you ask for in prayer.' WoF teachers extract from these texts a universal principle — that any believer who confesses with sufficient faith will receive whatever they declare. Context is decisive. Jesus is illustrating the power of prayer and the disciples' future ministry, not establishing a mechanism by which human speech controls divine action. The broader witness of Scripture — including Paul asking three times for his thorn to be removed and being told 'my grace is sufficient' (2 Cor 12:8-9), and the Psalms full of unanswered lament — demonstrates that prayer is relational petition, not formula-based activation. Positive confession as a technique for controlling outcomes is a theological import, not a biblical teaching." },
  { title: "'Little Gods' Theology — What Psalm 82 and John 10 Actually Teach", verse: "Psalm 82:6, John 10:34", text: "WoF teachers routinely cite Psalm 82:6 ('I said, you are gods') and Jesus's quotation of it in John 10:34 to support the claim that believers are 'little gods' with divine creative authority. Careful exegesis shows this interpretation is untenable. Psalm 82 is a judgment oracle addressed to unjust human judges or, possibly, to divine beings in a heavenly council — those called 'gods' by virtue of their delegated authority are being condemned for their failure, not praised for their divine nature. The psalm ends: 'but you will die like mere mortals.' Jesus quotes it in John 10 as a legal argument — if Scripture could call unjust human judges 'gods,' how much more can he who was consecrated by the Father bear the title Son of God — not to claim that believers share divine essence. The 'little gods' doctrine misreads both texts and flatly contradicts the consistent biblical insistence on the Creator-creature distinction." },
  { title: "Health and Wealth in the Atonement — Does Isaiah 53 Guarantee Prosperity?", verse: "Isaiah 53:4-5, Matt 8:17", text: "The WoF atonement theology is built on Isaiah 53:4-5: 'by his wounds we are healed.' WoF teachers argue that physical healing and material prosperity were purchased in the Atonement and are therefore guaranteed to every believer who claims them by faith. Several problems undermine this. First, Matthew 8:17 quotes Isaiah 53:4 in reference to Jesus healing the sick during his ministry — the Evangelist applies it to Jesus's healing ministry, not to a universal guarantee. Second, Isaiah 53 is about bearing sin and iniquity — the healing it describes is primarily spiritual restoration. Third, even granting some physical dimension to atonement benefits, the New Testament does not teach immediate and total physical healing in this life. Paul remained sick (Gal 4:13), Timothy had frequent ailments (1 Tim 5:23), Trophimus was left sick at Miletus (2 Tim 4:20), and Paul's 'thorn in the flesh' was not removed despite repeated prayer. A consistent reading of the New Testament places full physical restoration in the resurrection, not as a guaranteed present possession." },
  { title: "The Harm of Word of Faith — When the Formula Fails Real People", verse: "Ezek 34:4, James 5:14", text: "The pastoral consequences of WoF theology are severe and well-documented. When the healing formula fails, the blame falls on the sick person: they lacked faith, they spoke negatively, they had secret sin. Bereaved parents are told their child died because they failed to confess healing correctly. Cancer patients discontinue treatment because claiming medical help is itself an act of unbelief. Those trapped in poverty are told they are poor because they have not given enough or confessed abundance boldly enough. Meanwhile the WoF system enriches its teachers through 'seed faith' giving — the promise that donations to a ministry will trigger supernatural financial return. Ezekiel 34 describes God's judgment on shepherds who exploit rather than serve the flock. The concentration of wealth at the top of WoF ministries, while ordinary adherents give sacrificially based on false promises, fits the pattern Ezekiel condemns. Discernment about this movement is not merely academic — it is pastoral care for real people who have been harmed." },
];

const views = [
  { name: "Word of Faith Position", summary: "God has bound himself to his spoken word; humans are 'little gods' made in God's image with creative authority. Faith works like a spiritual law — positive confession releases blessings, negative confession invites curses. Healing and prosperity are guaranteed in the Atonement and accessed by faith.", key: "Faith guarantees health and wealth when properly applied; poverty and sickness represent faith failure." },
  { name: "Charismatic Evangelical Critique", summary: "Affirms miraculous gifts and divine healing but rejects the prosperity formula. Health and wealth are not guaranteed in the Atonement. Paul's thorn, Job's suffering, and the martyrs refute a formula-based theology. God sovereignly heals and blesses as he wills.", key: "Gifts and healing are real but not formulaic; WoF distorts Scripture and harms believers when healing doesn't come." },
  { name: "Reformed/Cessationist Critique", summary: "Rejects both the continuationist gifts premise and the prosperity formula. Word of Faith represents a departure from historic Christianity, importing Gnosticism and New Thought philosophy. Prosperity theology serves the teacher's enrichment at the congregation's expense.", key: "Word of Faith is a false gospel mixing New Thought philosophy with Christian vocabulary." },
  { name: "Constructive Engagement", summary: "Some scholars argue Christians can affirm the goodness of God's healing and provision without the formula, recovering a robust theology of blessing without the manipulative elements. God does bless, heal, and provide — these are real — but never as a transaction controlled by human speech.", key: "Recover the real without the distortion: God blesses abundantly but not on demand." },
];

const voices = [
  { id: "hh", name: "Hank Hanegraaff", role: "Bible Answer Man; Author, Christianity in Crisis", quote: "The Word of Faith movement has not only perverted the gospel but has inoculated millions against the real thing. When people's faith is destroyed because the formula didn't work, they don't just leave WoF — they often leave Christianity entirely. The stakes are eternal.", bio: "Hanegraaff's Christianity in Crisis (1993) remains the most comprehensive critique of WoF leaders and their specific theological claims, documenting their actual teachings with extensive quotation. He traces the movement's departures from historic Christian orthodoxy point by point and provides accessible exegetical responses to the proof texts most commonly deployed by WoF teachers. His work is essential for anyone trying to help someone leave a WoF church." },
  { id: "dm", name: "D.R. McConnell", role: "Author, A Different Gospel; Scholar of WoF Origins", quote: "The uncomfortable truth is that the theological foundations of Word of Faith are not found in the Bible but in the writings of E.W. Kenyon, and Kenyon's ideas were formed in the metaphysical culture of late-nineteenth-century America, not in the church. The movement's Pentecostal packaging has obscured origins that deserve far more scrutiny.", bio: "McConnell's A Different Gospel is the definitive historical study of the WoF movement's origins. His meticulous research demonstrates the specific intellectual debts Kenyon owed to New Thought metaphysics and the later transmission of Kenyon's ideas through Kenneth Hagin. The book is careful, well-documented, and essential reading for anyone who wants to understand not just that WoF is problematic but why — at the level of intellectual history." },
  { id: "mh", name: "Michael Horton", role: "Author, Christless Christianity; Westminster Seminary", quote: "American folk religion has always preferred a therapeutic, moralistic, and consumerist God — a God who is a means to our ends rather than the sovereign Lord who defines what our ends should be. Prosperity theology is the logical endpoint of this trajectory: God as divine vending machine, faith as the currency, blessing as the product.", bio: "Horton's Christless Christianity places the prosperity gospel within the broader trajectory of American religious consumerism. His analysis shows that WoF is not an isolated aberration but the most extreme expression of a tendency already present throughout mainstream evangelical Christianity — the reduction of the gospel to personal benefit and God to a means of self-fulfillment. His constructive work on the alien righteousness of Christ provides the theological alternative." },
];

const practices = [
  { icon: "📖", title: "Test Theology Against Scripture in Context", text: "The most effective protection against WoF theology is the habit of reading Scripture in context. When a teacher cites a verse, read the surrounding passage — the chapter before and after, the book as a whole, and the broader biblical witness on the same theme. WoF proof texts almost always evaporate when read in context. Develop the habit of asking: what is the author of this passage actually addressing? Who is the audience? What is the literary form? A study Bible with good notes and a one-volume commentary are sufficient tools for this basic but essential practice." },
  { icon: "📜", title: "Read the Historic Christian Creeds", text: "The Apostles' Creed, Nicene Creed, and Chalcedonian Definition represent the distilled consensus of the early church on the most contested questions of Christian doctrine. Reading them against WoF theology is illuminating: the creeds say nothing about health and wealth as atonement benefits, nothing about positive confession, nothing about believers as 'little gods.' The historic faith is not the same as WoF theology. Grounding yourself in the creeds provides both an antidote and a standard — a way of testing contemporary teaching against what Christians have always believed." },
  { icon: "⛪", title: "Find a Theologically Sound Church", text: "Long-term recovery from WoF influence requires genuine Christian community where the word is faithfully preached, where suffering is not interpreted as faith failure, and where the prosperity formula is absent. This is not primarily about finding the right doctrine on a checklist — it is about being in a community where the actual gospel is preached and where you can watch what happens when the formula fails real people. A congregation that prays for healing without guaranteeing it, that grieves with the bereaved without blaming them, that celebrates God's goodness without requiring wealth as proof of faith — this is the environment for healing." },
  { icon: "🔍", title: "Study the Actual Context of 'Faith Verses'", text: "Several specific passages are deployed so frequently in WoF contexts that they can feel impossible to read freshly. Matthew 21:21, Mark 11:23-24, Isaiah 53:4-5, Psalm 82:6, John 10:34, 3 John 1:2 — work through each of these slowly in a good commentary. What is the original Hebrew or Greek? What is the literary context? How have Christians historically interpreted this passage? This kind of careful study is not a sign of lack of faith — it is the Berean practice Acts 17:11 holds up as exemplary." },
  { icon: "🫂", title: "Talk with a Pastor or Biblical Counselor About WoF Experiences", text: "Leaving a WoF context — especially after experiencing illness, poverty, or grief that was interpreted as faith failure — often leaves real spiritual and emotional wounds. The shame of having 'failed' at faith, the confusion about whether God can be trusted, the grief of having given sacrificially to ministries that did not deliver on their promises — these deserve pastoral attention. A biblical counselor or a pastor experienced with spiritual abuse can help you work through the specific wounds WoF theology leaves and recover a healthy relationship with God and Scripture." },
];

const scriptures = [
  { verse: "2 Tim 4:3-4", text: "For the time will come when people will not put up with sound doctrine. Instead, to suit their own desires, they will gather around them a great number of teachers to say what their itching ears want to hear. They will turn their ears away from the truth and turn aside to myths." },
  { verse: "Matt 7:15-16", text: "Watch out for false prophets. They come to you in sheep's clothing, but inwardly they are ferocious wolves. By their fruit you will recognize them." },
  { verse: "Gal 1:8-9", text: "But even if we or an angel from heaven should preach a gospel other than the one we preached to you, let them be under God's curse! As we have already said, so now I say again: If anybody is preaching to you a gospel other than what you accepted, let them be under God's curse!" },
  { verse: "2 Pet 2:1-3", text: "But there were also false prophets among the people, just as there will be false teachers among you. They will secretly introduce destructive heresies, even denying the sovereign Lord who bought them — bringing swift destruction on themselves. In their greed these teachers will exploit you with fabricated stories." },
  { verse: "Acts 17:11", text: "Now the Berean Jews were of more noble character than those in Thessalonica, for they received the message with great eagerness and examined the Scriptures every day to see if what Paul said was true." },
  { verse: "1 Tim 6:5-6", text: "...and constant friction between people of corrupt mind, who have been robbed of the truth and who think that godliness is a means to financial gain. But godliness with contentment is great gain." },
];

const videoIds = ["cibENdoC15I", "4bBkV9f_pBo", "VklCN7bJcVA", "UtlhKJBzGpA"];

type WOFEntry = { id: string; date: string; claim: string; scriptureTest: string; conclusion: string };

export default function WordOfFaithPage() {
  const [tab, setTab] = useState("theology");
  const [wofJournal, setWofJournal] = useState<WOFEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_wof_entries") ?? "[]"); } catch { return []; }
  });
  const [jClaim, setJClaim] = useState("");
  const [jScripture, setJScripture] = useState("");
  const [jConclusion, setJConclusion] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_wof_entries", JSON.stringify(wofJournal)); } catch {}
  }, [wofJournal]);

  function saveEntry() {
    if (!jClaim.trim() && !jScripture.trim()) return;
    setWofJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), claim: jClaim, scriptureTest: jScripture, conclusion: jConclusion }, ...prev]);
    setJClaim(""); setJScripture(""); setJConclusion("");
  }
  function deleteEntry(id: string) { setWofJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "views", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Theology &amp; Discernment</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Word of Faith Theology</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            The Word of Faith movement — its historical origins in New Thought philosophy, its core claims about positive confession and prosperity, and a thorough biblical evaluation of its teachings.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? GOLD : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t === "views" ? "Views" : t.charAt(0).toUpperCase() + t.slice(1)}</button>
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
              {views.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem", color: GOLD }}>{v.name}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: "0 0 0.75rem" }}>{v.summary}</p>
                  <div style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "0.75rem", color: TEXT, fontSize: "0.85rem", fontStyle: "italic" }}>{v.key}</div>
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
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>WoF Discernment Journal</h3>
                <textarea placeholder="A WoF claim you've encountered — what was taught?" value={jClaim} onChange={e => setJClaim(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What does Scripture actually say when read in context?" value={jScripture} onChange={e => setJScripture(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="Your conclusion after studying this claim" value={jConclusion} onChange={e => setJConclusion(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: GOLD, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {wofJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : wofJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.claim && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Claim:</strong> {e.claim}</p>}
                  {e.scriptureTest && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Scripture says:</strong> {e.scriptureTest}</p>}
                  {e.conclusion && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Conclusion:</strong> {e.conclusion}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {videoIds.map(id => (
                <div key={id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={id} title={`Word of Faith — ${id}`} />
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
