"use client";
import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  useEffect(() => {
    try { const s = localStorage.getItem(key); if (s !== null) setValue(JSON.parse(s)); } catch {}
  }, [key]);
  const set = useCallback((v: T) => { setValue(v); try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }, [key]);
  return [value, set] as const;
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56",
  PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3", GOLD = "#D97706",
  TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";

const TABS = ["Overview","Divisions","Cross & Wisdom","Gifts & Love","Lord's Supper","Resurrection","Ethics","Journal","Videos"];

const DIVISIONS = [
  { q: "The Four Factions (1:10–17)", a: "Paul confronts the Corinthian church's split into parties: 'I follow Paul,' 'I follow Apollos,' 'I follow Cephas,' 'I follow Christ.' He insists Christ was not divided, and he was not crucified for any of them. Christian identity is not found in allegiance to human teachers but in Christ alone." },
  { q: "Worldly Wisdom vs. the Cross (1:18–2:5)", a: "Paul's critique cuts deep: the message of the cross is foolishness to those perishing but the power of God to those being saved. God deliberately chose the weak, low, and despised to shame the wise and strong so that no flesh may boast before him (1:29). Paul's preaching came 'not with wise and persuasive words, but with a demonstration of the Spirit's power.'" },
  { q: "Spiritual Immaturity (3:1–23)", a: "Paul calls the Corinthians 'infants in Christ' — still carnal, unable to receive solid food. Their jealousy and quarreling prove it. God's servants are just co-workers: Paul planted, Apollos watered, but God gave the growth. The church is God's field, God's building, built on the one foundation of Jesus Christ. All human leaders belong to the church; the church belongs to Christ; Christ belongs to God." },
  { q: "Christian Sexual Ethics (5–6)", a: "Paul confronts a shocking case of incest tolerated in the church and the church's pride about it. He commands the man's removal from fellowship to prompt repentance. He rebukes Christians suing each other in pagan courts. His theological grounding: 'Do you not know that your body is a temple of the Holy Spirit?' (6:19). Bodies matter; resurrection means sexual ethics matter." },
];

const GIFTS_ITEMS = [
  { q: "The Unity of the Spirit (12:1–11)", a: "Paul corrects a hierarchy of spiritual gifts by rooting them all in one Spirit. There are varieties of gifts, ministries, and activities, but the same Spirit, Lord, and God working in all. The Spirit distributes gifts 'as he wills' — they are not achievements but grace allocations for the common good. No believer is ungifted; no gift is self-sufficient." },
  { q: "One Body, Many Members (12:12–31)", a: "The body metaphor dismantles Corinthian elitism. Every member — eye, hand, foot, ear — is needed. The parts of the body that seem weaker are indispensable; those we think less honorable are treated with special honor. God has arranged the members as he chose. If one suffers, all suffer; if one is honored, all rejoice. God placed apostles, prophets, and teachers — but this is not a simple hierarchy; the 'greater gifts' are the ones that build up the body." },
  { q: "The Love Chapter (13:1–13)", a: "1 Corinthians 13 is not a wedding poem but a rebuke: all gifts without love are worthless noise. Tongues of angels, prophetic powers, mountain-moving faith, giving all one's goods — nothing without love (agape). Love's anatomy: patient, kind, not envious, not boastful, not arrogant, not rude, not irritable, keeps no record of wrongs, does not rejoice in wrong but rejoices in truth, bears all things, believes all things, hopes all things, endures all things. Love never fails. Prophecy, tongues, knowledge — partial, passing away. Love abides forever." },
  { q: "Prophecy over Tongues (14)", a: "Paul's pastoral ruling: prophecy (intelligible, edifying speech) is preferable to tongues (without interpretation) in corporate worship because the church must be built up. Five words spoken intelligibly are better than ten thousand words in a tongue. He does not ban tongues — 'do not forbid speaking in tongues' — but regulates their use: two or three at most, in turn, with interpretation. Order in worship reflects the God of peace, not confusion." },
];

const RESURRECTION_ITEMS = [
  { q: "The Gospel and the Resurrection (15:1–11)", a: "Paul begins with the creed: Christ died for our sins according to the Scriptures, was buried, was raised on the third day according to the Scriptures, and appeared to Cephas, then to the Twelve, then to more than five hundred at once, then to James, then to all the apostles, last of all to Paul as 'one untimely born.' This is the earliest written resurrection creed in the NT (50s AD), citing pre-Pauline tradition (the 'I received… I delivered' formula)." },
  { q: "If Christ Is Not Raised (15:12–34)", a: "Paul's reductio ad absurdum: if there is no resurrection, then Christ was not raised; if Christ was not raised, our preaching is empty, our faith is futile, we are still in sins, those who died in Christ have perished, and we are the most pitiable of all people. The stakes could not be higher. But the counterfactual stands to show the logic: the whole Christian edifice stands or falls on bodily resurrection. 'Death has been swallowed up in victory' (Is 25:8)." },
  { q: "The Resurrection Body (15:35–58)", a: "How are the dead raised? With what kind of body? Paul uses the seed analogy: you sow a bare seed, and God gives it a body as he chooses. So with the resurrection: sown perishable, raised imperishable; sown in dishonor, raised in glory; sown in weakness, raised in power; sown a natural body, raised a spiritual body. The last Adam (Christ) is a life-giving Spirit; the first Adam a living soul. We will bear the image of the man of heaven. The mortal must put on immortality. This is the Victory passage: 'O death, where is your sting? O grave, where is your victory?'" },
  { q: "Therefore Stand Firm (15:58)", a: "'Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.' The resurrection is not merely metaphysical speculation; it is the motivation for present faithful action. Every act of love, every word of witness, every sacrifice of service has permanent weight in the resurrection economy." },
];

const ETHICS_CARDS = [
  { icon: "💍", title: "Marriage, Singleness, and Celibacy (7)", color: PURPLE, text: "Paul's most nuanced chapter on marriage: 'It is better to marry than to burn with passion,' but singleness is also a gift. The married should not deprive each other except by mutual consent for a season of prayer. The unmarried may give undivided attention to God. Paul's 'I think it better to remain as you are' reflects the eschatological urgency of the time, not a denigration of marriage. Divorce: a believer should not divorce a willing unbelieving spouse — the unbelieving partner is sanctified through the believing spouse." },
  { icon: "🥩", title: "Food Offered to Idols (8–10)", color: TEAL, text: "Paul's brilliant pastoral argument: knowledge that idols are nothing might be correct, but it can destroy a 'weak' brother whose conscience is violated. Freedom is real but love constrains it: 'When you sin against your brothers in this way and wound their weak conscience, you sin against Christ.' Paul surrenders his own rights as an apostle (ch 9) as a model. He warns against presuming on freedom: Israel had every sacramental grace and still fell in the wilderness. 'Let anyone who thinks they stand take heed lest they fall.'" },
  { icon: "🍞", title: "The Lord's Supper (11:17–34)", color: GREEN, text: "Paul confronts a scandalous Corinthian practice: the wealthy eat and drink abundantly while the poor go hungry and are humiliated — all while claiming to celebrate the Lord's Supper. This is not the Lord's Supper at all. He delivers the earliest written account of the Last Supper institution narrative: 'For I received from the Lord what I also delivered to you...' Eating in an unworthy manner — without discerning the body — is the reason some are weak, ill, and dying. Self-examination is required before receiving." },
  { icon: "🔰", title: "Final Instructions (16)", color: GOLD, text: "Paul closes with practical instructions: take up a collection for the Jerusalem poor (the weekly discipline of generosity), travel plans, commendations of Stephanas, Fortunatus, and Achaicus. His closing watchwords capture the whole letter: 'Be watchful, stand firm in the faith, act like men, be strong. Let all that you do be done in love' (16:13–14). The Greek watchwords echo military discipline; the final clause returns to agape — the controlling theme of the whole letter." },
];

const VIDEOS = [
  { videoId: "qhH3TxQDiRg", title: "1 Corinthians Overview – The Bible Project" },
  { videoId: "LcF7SSRE4_Q", title: "1 Corinthians 13 – The Love Chapter Explained" },
  { videoId: "Tk6S7YnNPj8", title: "1 Corinthians 15 – The Resurrection Chapter" },
  { videoId: "TgEqnBl0WVs", title: "Spiritual Gifts in 1 Corinthians" },
];

export default function FirstCorinthiansGuidePage() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_1cor_tab", 0);
  const [openDiv, setOpenDiv] = useLocalStorage("vine_1cor_div", -1);
  const [openGift, setOpenGift] = useLocalStorage("vine_1cor_gift", -1);
  const [openRes, setOpenRes] = useLocalStorage("vine_1cor_res", -1);
  const [journal, setJournal] = useLocalStorage("vine_1cor_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui,sans-serif" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>✉️</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>The Book of 1 Corinthians</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>A Comprehensive Study Guide — addressing a divided, troubled church with the wisdom of the cross, the supremacy of love, and the certainty of resurrection.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setActiveTab(i)} style={{ padding: ".5rem 1.1rem", borderRadius: 20, border: `1px solid ${activeTab === i ? GREEN : BORDER}`, background: activeTab === i ? `${GREEN}22` : CARD, color: activeTab === i ? GREEN : MUTED, fontWeight: activeTab === i ? 700 : 400, cursor: "pointer", fontSize: ".85rem" }}>{t}</button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {activeTab === 0 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview of 1 Corinthians</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Paul wrote 1 Corinthians around AD 55 from Ephesus, responding to both oral reports (1:11) and a letter from the Corinthians (7:1). The church at Corinth was a microcosm of the pagan city: factionalism, sexual immorality, lawsuits, idolatry, charismatic excess, and theological confusion about resurrection.</p>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Yet Paul addresses them as "those sanctified in Christ Jesus, called to be holy" (1:2) — his characteristic move of grounding exhortation in identity. The letter is a pastoral masterwork: each problem is addressed not with mere rules but with the deep logic of the gospel.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginTop: "1.5rem" }}>
              {[["Author","Paul the Apostle"],["Date","c. AD 53–55"],["Written From","Ephesus (1 Cor 16:8)"],["Audience","Church at Corinth, Greece"],["Key Verse","1 Cor 15:3–4 (Gospel creed)"],["Theme","Unity, love, resurrection"]].map(([k,v]) => (
                <div key={k} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".25rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Divisions */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Divisions in the Church (Chapters 1–6)</h2>
            {DIVISIONS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openDiv === i ? RED : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenDiv(openDiv === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: RED, fontSize: "1.2rem" }}>{openDiv === i ? "−" : "+"}</span>
                </button>
                {openDiv === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Cross & Wisdom */}
        {activeTab === 2 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Wisdom of the Cross</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.2rem" }}>"For the message of the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God." — 1 Corinthians 1:18</p>
            {[
              ["God's Foolishness Shames Human Wisdom","The Greeks sought wisdom; the Jews demanded signs. Paul preached Christ crucified — a stumbling block to Jews, foolishness to Gentiles, but to those called, the power and wisdom of God. God's 'foolishness' is wiser than human wisdom; God's 'weakness' is stronger than human strength. This inversion is not anti-intellectual but anti-proud-intellectualism."],
              ["The Social Composition of the Church","'Not many wise by human standards, not many powerful, not many of noble birth were called.' God chose the foolish to shame the wise, the weak to shame the strong, the low and despised. The church's social composition is itself a sermon: salvation is pure grace, not human achievement. No flesh may boast before God."],
              ["Paul's Deliberate Weakness","Paul consciously renounced rhetorical excellence: 'When I came to you, I did not come with eloquence or human wisdom. I resolved to know nothing while I was with you except Jesus Christ and him crucified.' His trembling, unimpressive delivery was itself a demonstration: if the Corinthians believed, it was because God acted — not because Paul was persuasive."],
              ["The Deep Things of God","Yet Paul does teach wisdom — the secret, hidden wisdom of God decreed before the ages. The Spirit searches the deep things of God. We have received the Spirit that we might understand what God has freely given us. The spiritual person judges all things but is judged by no one. 'We have the mind of Christ' (2:16)."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: GOLD, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Gifts & Love */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Spiritual Gifts & The Love Chapter (Chapters 12–14)</h2>
            {GIFTS_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openGift === i ? PURPLE : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenGift(openGift === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: PURPLE, fontSize: "1.2rem" }}>{openGift === i ? "−" : "+"}</span>
                </button>
                {openGift === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${PURPLE}`, padding: "1.5rem", marginTop: "1rem" }}>
              <div style={{ color: PURPLE, fontWeight: 800, marginBottom: ".75rem" }}>The Anatomy of Love (1 Cor 13:4–8)</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: ".6rem" }}>
                {["Patient","Kind","Not envious","Not boastful","Not arrogant","Not rude","Not irritable","Keeps no record of wrongs","Does not rejoice in wrong","Rejoices in truth","Bears all things","Believes all things","Hopes all things","Endures all things","Never fails"].map(trait => (
                  <div key={trait} style={{ background: `${PURPLE}18`, borderRadius: 8, padding: ".5rem .75rem", color: TEXT, fontSize: ".85rem" }}>{trait}</div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Lord's Supper */}
        {activeTab === 4 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Lord's Supper (Chapter 11)</h2>
            <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              "For I received from the Lord what I also delivered to you: that the Lord Jesus on the night when he was betrayed took bread, and when he had given thanks, he broke it, and said, 'This is my body, which is for you. Do this in remembrance of me.' In the same way also he took the cup, after supper, saying, 'This cup is the new covenant in my blood. Do this, as often as you drink it, in remembrance of me.'" — 1 Corinthians 11:23–25
            </blockquote>
            {[
              ["The Corinthian Abuse","When they gathered for the Lord's Supper, the divisions of the city mapped onto the feast: the wealthy brought abundant food and ate early while the poor arrived last and went hungry, even drunk. Paul is sharp: 'When you come together, it is not the Lord's Supper you eat' (11:20). The community meant to proclaim Christ's death was re-enacting social stratification."],
              ["Earliest Supper Narrative","Paul's account (11:23–26) is the earliest written record of the Last Supper, predating Mark's Gospel by a decade. It uses the 'received/delivered' formula marking authorized tradition. The Supper is anamnesis — not mere memory but covenant re-presentation: 'you proclaim the Lord's death until he comes.'"],
              ["Judgment for Unworthy Reception","'Whoever eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of sinning against the body and blood of the Lord. Everyone ought to examine themselves before they eat.' Eating without discerning the body — both Christ's eucharistic body and his ecclesial body — brings judgment. Paul links this to illness and death in the congregation."],
              ["The Practice of Self-Examination","The remedy is examination, not avoidance. Come to the table having judged yourself — acknowledged sin, sought reconciliation with fellow members, waited for one another. The Eucharist is simultaneously a gift of grace and a call to communal holiness. It is not private piety but covenant renewal in the body."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: GREEN, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Resurrection */}
        {activeTab === 5 && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Resurrection Chapter (Chapter 15)</h2>
            {RESURRECTION_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openRes === i ? TEAL : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenRes(openRes === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: TEAL, fontSize: "1.2rem" }}>{openRes === i ? "−" : "+"}</span>
                </button>
                {openRes === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${TEAL}`, padding: "1.5rem", marginTop: "1rem" }}>
              <div style={{ color: TEAL, fontWeight: 800, marginBottom: ".75rem" }}>The Four Contrasts of the Resurrection Body</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[["Sown perishable","Raised imperishable"],["Sown in dishonor","Raised in glory"],["Sown in weakness","Raised in power"],["Sown a natural body","Raised a spiritual body"]].map(([a, b]) => (
                  <div key={a} style={{ background: BG, borderRadius: 8, padding: ".75rem 1rem" }}>
                    <div style={{ color: MUTED, fontSize: ".8rem" }}>{a}</div>
                    <div style={{ textAlign: "center", margin: ".1rem 0", color: TEAL }}>↓</div>
                    <div style={{ color: TEAL, fontWeight: 700, fontSize: ".9rem" }}>{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Ethics */}
        {activeTab === 6 && (
          <div>
            <h2 style={{ color: BLUE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Christian Ethics in a Pagan City</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {ETHICS_CARDS.map(c => (
                <div key={c.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: c.color, fontWeight: 800, marginBottom: ".5rem" }}>{c.title}</div>
                      <div style={{ color: MUTED, lineHeight: 1.8 }}>{c.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 7: Journal */}
        {activeTab === 7 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1rem", fontSize: ".9rem" }}>Reflect on your study of 1 Corinthians. Your notes are saved locally.</p>
            {[
              "Which division in your own faith community most resembles the Corinthian factions, and what does the wisdom of the cross say to it?",
              "How has your understanding of love (1 Cor 13) changed? Where do you struggle most with the anatomy of agape?",
              "What does the resurrection (ch. 15) mean for how you live today? What would change if resurrection were false?",
            ].map((q, i) => <p key={i} style={{ color: GOLD, fontSize: ".85rem", fontStyle: "italic", marginBottom: ".4rem" }}>{i + 1}. {q}</p>)}
            <textarea
              value={journal}
              onChange={e => setJournal(e.target.value)}
              placeholder="Write your reflections here..."
              style={{ width: "100%", minHeight: 220, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, color: TEXT, padding: "1rem", fontSize: ".95rem", lineHeight: 1.7, resize: "vertical", marginTop: ".75rem", boxSizing: "border-box" }}
            />
            {journal && <p style={{ color: MUTED, fontSize: ".8rem", marginTop: ".5rem" }}>Saved automatically.</p>}
          </div>
        )}

        {/* Tab 8: Videos */}
        {activeTab === 8 && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Video Resources</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <div style={{ color: TEXT, fontWeight: 700 }}>{v.title}</div>
                  </div>
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
