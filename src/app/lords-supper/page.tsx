"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", WINE = "#7C3AED", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Lord's Supper Is a Memorial, a Proclamation, and a Participation", verse: "1 Corinthians 11:26", text: "For whenever you eat this bread and drink this cup, you proclaim the Lord's death until he comes. The Lord's Supper operates on three simultaneous levels that Protestant theology has too often collapsed into only one. It is a memorial — we do this in remembrance of him, locating us in the redemptive-historical past. It is a proclamation — we announce the gospel to one another, to watching angels, and to the world, every time we gather at the Table. And it is a participation — Paul uses the word koinonia in 1 Corinthians 10:16, which means sharing, fellowship, communion — not merely mental reflection but genuine spiritual union with Christ and with one another through the broken bread and the cup." },
  { title: "Four Main Views: What Happens at the Table", verse: "Matthew 26:26", text: "While they were eating, Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, 'Take and eat; this is my body.' What did Jesus mean by 'this is my body'? Four major answers have shaped Christian history. Roman Catholics hold to transubstantiation — the substance of bread and wine is wholly converted into Christ's body and blood at consecration, though the accidents remain. Lutherans affirm a real bodily presence in, with, and under the elements — Christ is truly present without the substance of bread changing. Reformed theologians (following Calvin) affirm a true spiritual presence — Christ is genuinely present and received by faith through the Spirit, though not in a carnal or local manner. Baptists and other memorial-view traditions hold that bread and wine are symbols that represent Christ's body and blood, making the meal a powerful commemoration rather than a vehicle of Christ's presence. Each view attempts faithfulness to the same words of institution; their differences are not peripheral but shape the entire theology of worship." },
  { title: "The Words of Institution Are Among the Most Sacred in Scripture", verse: "1 Corinthians 11:23-24", text: "For I received from the Lord what I also passed on to you: The Lord Jesus, on the night he was betrayed, took bread, and when he had given thanks, he broke it and said, 'This is my body, which is for you; do this in remembrance of me.' Paul's account is the earliest written record of the Last Supper — earlier than any of the Gospels. His phrasing 'I received from the Lord' indicates a direct transmission of sacred tradition, a living chain from Christ through the apostle to the church. The word for 'remembrance' (anamnesis) is not mere mental recollection but covenant-actualization — the kind of remembering that makes the past event present and formative. This is why every celebration of the Supper carries the weight of continuity with the Upper Room, with Paul's communities, with the whole church across centuries. The Table is where the church receives what it has been handed." },
  { title: "Discerning the Body: The Warning That Changes Everything", verse: "1 Corinthians 11:27-29", text: "So then, whoever eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of sinning against the body and blood of the Lord. Everyone ought to examine themselves before they eat of the bread and drink from the cup. For those who eat and drink without discerning the body of Christ eat and drink judgment on themselves. This passage has made generations of Christians hesitant about the Table — and rightly instilled a holy gravity. But Paul's concern in context was not primarily individual moral unworthiness (as if only the sinless should approach) but corporate sin: the Corinthians were eating without discerning the body — that is, without recognizing the community of believers as Christ's body, treating the poor with contempt, and thus consuming the Supper in a way that contradicted everything it signified. Examination is required, but examination that leads to repentance and approach, not perpetual withdrawal. To refuse the Table from a posture of chronic self-exclusion is its own failure to discern the body." },
  { title: "The Lord's Supper Points Forward to the Marriage Supper of the Lamb", verse: "Luke 22:15-16", text: "And he said to them, 'I have eagerly desired to eat this Passover with you before I suffer. For I tell you, I will not eat it again until it finds fulfillment in the kingdom of God.' The Lord's Supper is not only backward-looking (memorial) and present-tense (participation) — it is radically forward-looking. Jesus institutes the meal as an anticipatory feast: every celebration is a foretaste of the eschatological banquet, the Marriage Supper of the Lamb described in Revelation 19. This eschatological dimension means that every Table is a moment of thin-ness between this age and the age to come — the church eating and drinking in the already of Christ's presence while awaiting the not-yet of his return. The Maranatha cry of the early church ('Come, Lord Jesus') is the proper posture of the Table: eucharistic celebration and eschatological longing held together." },
];

const views = [
  { id: "rc", name: "Roman Catholic", summary: "Transubstantiation", strengths: "Takes the real presence with full seriousness. Preserves the sacrificial and sacral character of the meal. Has deep patristic roots in Cyril of Jerusalem and Ambrose. Makes the Eucharist the center of the church's life in a way that resists the trivialization of communion.", concerns: "The philosophical framework (Aristotelian substance/accidents) is not itself scriptural. The notion of an ongoing propitiatory sacrifice risks eclipsing the once-for-all nature of Christ's death (Heb. 9:26-28). The adoration of the reserved sacrament moves beyond what the New Testament warrants." },
  { id: "lu", name: "Lutheran", summary: "Consubstantiation / Real Presence", strengths: "Affirms the genuine bodily presence of Christ without requiring a philosophical account of substance change. Luther's insistence on 'this is my body' as literal grounds the meal in Christ's word rather than human philosophy. The Lutheran tradition has resisted reducing the Supper to mere symbol.", concerns: "The doctrine of ubiquity (Christ's body present everywhere) required to explain real presence is itself philosophically constructed and not directly exegetical. The distinction from Roman Catholicism on the mechanics of presence can become unclear in practice." },
  { id: "re", name: "Reformed / Calvinist", summary: "Spiritual Presence", strengths: "Avoids both the Roman Catholic physicalism and the bare memorialism of the radical Reformers. Calvin's insistence that Christ is truly — not merely symbolically — present by the Spirit, and that the Supper is a means of genuine nourishment, gives the meal a weight it lacks in memorial-only views. Grounds the presence in the work of the Holy Spirit rather than in the elements themselves.", concerns: "The account of 'spiritual presence' can be difficult to distinguish in practice from a sophisticated version of the memorial view. The emphasis on faith as the instrument of receiving presence can make the sacrament's efficacy seem too dependent on the recipient's spiritual state." },
  { id: "ba", name: "Baptist / Memorial", summary: "Symbolic / Commemorative", strengths: "Preserves the Protestant insistence on Scripture over tradition. Avoids any hint of sacerdotalism or ex opere operato sacramentalism. The clarity of symbol makes the meal accessible and prevents superstition. Keeps the focus on the worshipper's active faith-response rather than passive reception of infused grace.", concerns: "Risks reducing the Lord's Supper to a purely cognitive exercise — a visual aid for remembering a historical event. The Pauline language of participation (koinonia), the language of discerning the body, and the severity of Paul's warnings all suggest the meal carries more than symbolic weight. Can lead to infrequent or minimized observance, treating the Table as supplemental to preaching rather than co-central." },
];

const voices = [
  { id: "as", name: "Alexander Schmemann", role: "Orthodox Theologian — For the Life of the World", quote: "The Eucharist is the sacrament of the Kingdom of God. It is not a rite performed to produce an effect; it is the Church becoming what she is — the Body of Christ, the community of the new age, gathered to offer the world to God and to receive from God the life of the world to come. When we eat and drink the bread and the cup, we do not merely remember — we participate in the reality toward which all of history has been moving.", bio: "Schmemann's For the Life of the World remains the most liturgically rich and theologically integrative account of the Eucharist in the twentieth century. His insistence that the Eucharist is the defining act by which the Church becomes the Church — not one ritual among others, but the constitutive assembly — challenges traditions that have marginalized the Lord's Supper. His Orthodox perspective illuminates dimensions that Protestant eucharistic theology has often neglected." },
  { id: "tc", name: "Tim Chester", role: "Author — The Meal Jesus Gave Us", quote: "The Lord's Supper is not an appendage to Christian worship — something added on after the sermon for those who care about such things. It is the meal of the new covenant, the feast of the kingdom, the family table of God's people. Every time we eat together, we are enacting the gospel: Jesus' body broken for us, his blood poured out, his death proclaimed, his return awaited. The Table is a sermon you can taste.", bio: "Chester's The Meal Jesus Gave Us offers one of the most accessible and theologically responsible evangelical treatments of the Lord's Supper. He navigates the historic debates without polemic, grounds the meal firmly in the new covenant, and makes a compelling case for frequent, meaningful, communal observance. His work has influenced many Baptist and free-church traditions toward a higher and richer practice of communion." },
  { id: "jc", name: "John Calvin", role: "Reformer — Institutes of the Christian Religion", quote: "The Lord's Supper is a spiritual banquet, in which Christ bears witness that he is the life-giving bread, upon which our souls feed unto true and blessed immortality. Now, the thing he offers and shows is not an empty or shadowy figure, but is offered in its reality and truth: for in the Supper we truly receive Christ. For he is the only food of our soul; we must find our entire life in him alone. To the signs, therefore, he adds his word, and to the word faith, that we may truly receive Christ, and may not deceive ourselves by a vain imagination.", bio: "Calvin's treatment of the Lord's Supper in the Institutes (Book IV, chapters 17-18) represents the most nuanced sacramental theology produced by the Reformation. His insistence on a true rather than merely figurative presence — mediated by the Spirit rather than located in the elements — carves out a position between Lutheran and Zwinglian extremes that many Reformed Christians find most satisfying. His pastoral concern that Christians receive the Table frequently and with faith rather than anxiety remains formative." },
];

const scriptures = [
  { verse: "1 Corinthians 11:23-26", text: "For I received from the Lord what I also passed on to you: The Lord Jesus, on the night he was betrayed, took bread, and when he had given thanks, he broke it and said, 'This is my body, which is for you; do this in remembrance of me.' In the same way, after supper he took the cup, saying, 'This cup is the new covenant in my blood; do this, whenever you drink it, in remembrance of me.' For whenever you eat this bread and drink this cup, you proclaim the Lord's death until he comes." },
  { verse: "Matthew 26:26-28", text: "While they were eating, Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, 'Take and eat; this is my body.' Then he took a cup, and when he had given thanks, he gave it to them, saying, 'Drink from it, all of you. This is my blood of the covenant, which is poured out for many for the forgiveness of sins.'" },
  { verse: "Luke 22:19-20", text: "And he took bread, gave thanks and broke it, and gave it to them, saying, 'This is my body given for you; do this in remembrance of me.' In the same way, after the supper he took the cup, saying, 'This cup is the new covenant in my blood, which is poured out for you.'" },
  { verse: "1 Corinthians 10:16", text: "Is not the cup of thanksgiving for which we give thanks a participation in the blood of Christ? And is not the bread that we break a participation in the body of Christ?" },
  { verse: "Acts 2:42-46", text: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer... Every day they continued to meet together in the temple courts. They broke bread in their homes and ate together with glad and sincere hearts, praising God and enjoying the favor of all the people." },
  { verse: "Revelation 19:9", text: "Then the angel said to me, 'Write this: Blessed are those who are invited to the wedding supper of the Lamb!' And he added, 'These are the true words of God.'" },
];

type LSEntry = { id: string; date: string; meditation: string; preparation: string; response: string };

export default function LordsSupperPage() {
  const [tab, setTab] = useState("theology");
  const [lsJournal, setLsJournal] = useState<LSEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_lordssupper_entries") ?? "[]"); } catch { return []; }
  });
  const [jMeditation, setJMeditation] = useState("");
  const [jPreparation, setJPreparation] = useState("");
  const [jResponse, setJResponse] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_lordssupper_entries", JSON.stringify(lsJournal)); } catch {}
  }, [lsJournal]);

  function saveEntry() {
    if (!jMeditation.trim() && !jPreparation.trim()) return;
    setLsJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), meditation: jMeditation, preparation: jPreparation, response: jResponse }, ...prev]);
    setJMeditation(""); setJPreparation(""); setJResponse("");
  }
  function deleteEntry(id: string) { setLsJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "views", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Worship &amp; Sacraments</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>The Lord&apos;s Supper</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            The meaning, practice, and mystery of Communion — the meal Jesus gave his church as memorial, proclamation, and participation in his body and blood until he comes.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? WINE : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: WINE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
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
                  <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                  <div style={{ color: WINE, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.summary}</div>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <div style={{ color: TEXT, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>Strengths</div>
                    <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.strengths}</p>
                  </div>
                  <div>
                    <div style={{ color: TEXT, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>Concerns</div>
                    <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.concerns}</p>
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
                  <div style={{ color: WINE, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${WINE}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: WINE, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Communion Journal</h3>
                <textarea placeholder="What am I meditating on about Christ's sacrifice as I approach the Table?" value={jMeditation} onChange={e => setJMeditation(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="How am I examining myself as Paul commands?" value={jPreparation} onChange={e => setJPreparation(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="How has receiving the Lord's Supper changed or challenged me?" value={jResponse} onChange={e => setJResponse(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: WINE, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {lsJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : lsJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.meditation && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Meditation:</strong> {e.meditation}</p>}
                  {e.preparation && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Examination:</strong> {e.preparation}</p>}
                  {e.response && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Response:</strong> {e.response}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "S_VLsKKt5-s", title: "What Is the Lord's Supper?", channel: "Ligonier Ministries / R.C. Sproul", description: "Sproul on the Reformed understanding of the Lord's Supper — why Christ is truly present at the Table, how the Supper differs from both Roman Catholic and purely symbolic views, and what worthy participation requires." },
                { videoId: "1_yp2ZMPB_g", title: "The Meaning of the Lord's Supper", channel: "Desiring God / John Piper", description: "Piper on the multi-dimensional significance of Communion — as proclamation of Christ's death, as covenant renewal, as anticipation of the Marriage Supper of the Lamb, and as fellowship with the living Christ." },
                { videoId: "oWp_b2VXA7Q", title: "Examining Yourself Before the Lord's Supper", channel: "The Gospel Coalition", description: "A pastoral treatment of 1 Corinthians 11:27-29 — what Paul's warning about unworthy participation actually means, what self-examination requires, and why the answer to the warning is repentance and approach, not avoidance." },
                { videoId: "R8RHeFaTf8c", title: "The Four Views of the Lord's Supper Explained", channel: "Crossway", description: "A clear overview of transubstantiation, Lutheran real presence, Reformed spiritual presence, and the memorial view — what each position holds, the key texts each appeals to, and the historic debates that shaped them." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: WINE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
