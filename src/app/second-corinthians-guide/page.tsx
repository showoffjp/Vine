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

const TABS = ["Overview","Jars of Clay","Reconciliation","Thorn & Grace","Boasting in Weakness","Generosity","New Creation","Journal","Videos"];

const JARS_ITEMS = [
  { q: "The Treasure in Jars of Clay (4:7–12)", a: "'But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us.' The treasure is the knowledge of the glory of God in the face of Christ (4:6). The jar is Paul's broken, beaten, persecuted body. The contrast is deliberate: ordinary clay pots were used to hide valuables — a perfect emblem of the hiddenness of divine glory in human frailty. The weakness of the vessel proves the power belongs to God alone." },
  { q: "The Four Antitheses (4:8–9)", a: "'We are hard pressed on every side, but not crushed; perplexed, but not in despair; persecuted, but not abandoned; struck down, but not destroyed.' Four pairs of extremity and deliverance. Paul is not stoic — he admits real pressure, real perplexity, real persecution. But in each case a divine 'but not' intervenes. This is resurrection logic: death is real, but not final. The outer self wastes away, but the inner self is renewed day by day." },
  { q: "The Light and Momentary Troubles (4:17–18)", a: "'For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.' Paul calls his hardships — beatings, imprisonments, shipwrecks, stonings (cf. ch 11) — 'light and momentary.' Not because they do not hurt, but because the comparative weight is incomparable. The unseen eternal reality reframes all present suffering." },
  { q: "The Heavenly Dwelling (5:1–5)", a: "'For we know that if the earthly tent we live in is destroyed, we have a building from God, an eternal house in heaven, not built by human hands.' The body-as-tent metaphor expresses both fragility and expectancy. Paul does not long to be unclothed (disembodied) but further clothed — the resurrection body superseding the present one. God has given the Spirit as a deposit guaranteeing what is to come. The Spirit in us is the down payment of resurrection." },
];

const RECONCILIATION_ITEMS = [
  { q: "The Ministry of Reconciliation (5:17–21)", a: "'Therefore, if anyone is in Christ, the new creation has come: the old has gone, the new is here! All this is from God, who reconciled us to himself through Christ and gave us the ministry of reconciliation: that God was reconciling the world to himself in Christ, not counting people's sins against them. And he has committed to us the message of reconciliation.' Three things in Paul's theology: God is the reconciler, Christ is the means, and believers are the ambassadors carrying the message." },
  { q: "The Great Exchange (5:21)", a: "'God made him who had no sin to be sin for us, so that in him we might become the righteousness of God.' The single densest sentence in Paul's theology of atonement. The innocent one (who had no sin) became sin (carried our sinful condition before God) so that sinners might become righteousness (carry God's own status before God). This is double imputation: our sin to Christ, Christ's righteousness to us. The exchange is total and grounding — it is what makes all Christian life possible." },
  { q: "The Day of Salvation (6:1–2)", a: "'As God's co-workers we urge you not to receive God's grace in vain. For he says, In the time of my favor I heard you, and in the day of salvation I helped you. I tell you, now is the time of God's favor, now is the day of salvation.' Paul's eschatological urgency: the age of salvation has arrived. Isaiah's prophecy of the Servant's redemptive work (Is 49:8) is fulfilled in Christ, and the present moment is the window. Grace received in vain means hearing the message without allowing it to transform." },
  { q: "Not Yoked with Unbelievers (6:14–7:1)", a: "'Do not be yoked together with unbelievers. For what do righteousness and wickedness have in common?' Paul draws on the Levitical prohibition against mixed yokes (Deut 22:10). In context, this is not a ban on all contact with unbelievers (cf. 1 Cor 5:9–10) but a prohibition of covenantal partnership with idolatry. The string of OT citations (Is 52:11; Lev 26:12; Ezek 37:27) grounds it in the logic of exodus and temple: God dwelling with his people requires holiness." },
];

const THORN_ITEMS = [
  { q: "The Thorn in the Flesh (12:7–10)", a: "'Therefore, in order to keep me from becoming conceited, I was given a thorn in my flesh, a messenger of Satan, to torment me. Three times I pleaded with the Lord to take it away from me. But he said to me, My grace is sufficient for you, for my power is made perfect in weakness.' What was the thorn? Speculations: eye disease (Gal 4:15), epilepsy, migraines, depression, a persecutor, sexual temptation. Paul leaves it undefined — deliberately; the principle applies broadly. The answer to prayer was not removal but sufficiency." },
  { q: "Power in Weakness", a: "'Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me. That is why, for Christ's sake, I delight in weaknesses, in insults, in hardships, in persecutions, in difficulties. For when I am weak, then I am strong.' This is not masochism but Christological logic: Christ was crucified in weakness but raised in power (13:4). The same pattern operates in the apostle's life. Weakness clears the field so that divine power can be clearly seen as divine — not human excellence." },
  { q: "The Third Heaven (12:1–6)", a: "'I know a man in Christ who fourteen years ago was caught up to the third heaven. Whether it was in the body or out of the body I do not know — God knows.' Paul refers to himself obliquely (2 Cor 12:7 confirms it). He was caught up to paradise and heard inexpressible things. His reluctance to boast about this experience is itself striking in a culture of competing apostles: he will only boast in weaknesses. The vision grounds his ministry but is not its currency." },
  { q: "The Fool's Speech (11:1–12:13)", a: "Paul's sustained ironic self-defense against the 'super-apostles' who criticized his physical presence, unimpressive speech, and refusal to take money. His list of credentials is entirely inverted: beatings, imprisonments, stonings, shipwrecks, danger from rivers, robbers, Gentiles, false brothers. His credential is the Damascus basket escape (the opposite of a military triumph). The fool's speech exposes the absurdity of boasting in human achievement — and by performing it while calling it foolishness, Paul deconstructs the game." },
];

const GIVING_CARDS = [
  { icon: "🌱", color: GREEN, title: "Sow Generously, Reap Generously (9:6)", text: "'Remember this: Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously. Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.' The agricultural metaphor frames giving as investment, not loss. The cheerful giver (hilaron — the root of our word hilarious) gives freely because they trust the God who 'supplies seed to the sower and bread for food.'" },
  { icon: "✝️", color: RED, title: "The Grace of Giving (8:1–9)", text: "'And now, brothers and sisters, we want you to know about the grace that God has given the Macedonian churches. In the midst of a very severe trial, their overflowing joy and their extreme poverty welled up in rich generosity.' The ultimate model: 'For you know the grace of our Lord Jesus Christ, that though he was rich, yet for your sake he became poor, so that you through his poverty might become rich' (8:9). Christological generosity: the incarnation itself is the pattern for Christian giving." },
  { icon: "⚖️", color: BLUE, title: "Equality and Mutual Provision (8:13–15)", text: "'Our desire is not that others might be relieved while you are hard pressed, but that there might be equality. At the present time your plenty will supply what they need, so that in turn their plenty will supply what you need. The goal is equality, as it is written: The one who gathered much did not have too much, and the one who gathered little did not have too little.' Paul quotes the manna story (Exodus 16) as the pattern for economic equality in the body of Christ." },
  { icon: "💧", color: TEAL, title: "God's Indescribable Gift (9:15)", text: "'Thanks be to God for his indescribable gift!' Paul concludes the collection appeal with a doxology. The gift is Christ — the ultimate gift that makes all human generosity possible, meaningful, and patterned. Christian giving is not philanthropy; it is a participation in and reflection of the divine generosity that gave the Son. Every act of generous giving is a small embodiment of the incarnation-pattern." },
];

const VIDEOS = [
  { videoId: "3sDVTBGAZKc", title: "2 Corinthians Overview – The Bible Project" },
  { videoId: "MRPbKBH6OyY", title: "Power in Weakness – 2 Corinthians 12" },
  { videoId: "kF_-KdWg7uI", title: "The Ministry of Reconciliation – 2 Cor 5" },
];

export default function SecondCorinthiansGuidePage() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_2cor_tab", 0);
  const [openJar, setOpenJar] = useLocalStorage("vine_2cor_jar", -1);
  const [openRec, setOpenRec] = useLocalStorage("vine_2cor_rec", -1);
  const [openThorn, setOpenThorn] = useLocalStorage("vine_2cor_thorn", -1);
  const [journal, setJournal] = useLocalStorage("vine_2cor_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui,sans-serif" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>🏺</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>The Book of 2 Corinthians</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>A Comprehensive Study Guide — Paul's most personal letter: power in weakness, the treasure in jars of clay, the ministry of reconciliation, and the thorn that teaches sufficiency.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setActiveTab(i)} style={{ padding: ".5rem 1.1rem", borderRadius: 20, border: `1px solid ${activeTab === i ? TEAL : BORDER}`, background: activeTab === i ? `${TEAL}22` : CARD, color: activeTab === i ? TEAL : MUTED, fontWeight: activeTab === i ? 700 : 400, cursor: "pointer", fontSize: ".85rem" }}>{t}</button>
          ))}
        </div>

        {/* Tab 0: Overview */}
        {activeTab === 0 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview of 2 Corinthians</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>Second Corinthians is the most emotionally revealing of Paul's letters — a window into the heart of a pastor in profound pain. Written around AD 55–56, after a difficult intervening visit and a painful letter (now lost), it is simultaneously a defense of apostolic ministry, a theology of suffering, and a call to generosity.</p>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>The occasion: "super-apostles" had arrived in Corinth criticizing Paul's physical weakness, unimpressive speaking ability, and refusal to take money. Paul's response is the most counterintuitive defense in history: he boasts in his weaknesses, because where he is weak, Christ is strong. His credential is not eloquence but a cruciform life.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginTop: "1.5rem" }}>
              {[["Author","Paul the Apostle"],["Date","c. AD 55–56"],["Written From","Macedonia"],["Occasion","Defending apostleship vs. rivals"],["Key Verse","2 Cor 12:9 (grace sufficient)"],["Theme","Power through weakness"]].map(([k,v]) => (
                <div key={k} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".25rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Jars of Clay */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Treasure in Jars of Clay (Chapter 4)</h2>
            {JARS_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openJar === i ? GOLD : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenJar(openJar === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: GOLD, fontSize: "1.2rem" }}>{openJar === i ? "−" : "+"}</span>
                </button>
                {openJar === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Reconciliation */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Ministry of Reconciliation (Chapter 5)</h2>
            {RECONCILIATION_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openRec === i ? GREEN : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenRec(openRec === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: GREEN, fontSize: "1.2rem" }}>{openRec === i ? "−" : "+"}</span>
                </button>
                {openRec === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Thorn & Grace */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Thorn in the Flesh (Chapter 12)</h2>
            {THORN_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openThorn === i ? RED : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenThorn(openThorn === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: RED, fontSize: "1.2rem" }}>{openThorn === i ? "−" : "+"}</span>
                </button>
                {openThorn === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Boasting in Weakness */}
        {activeTab === 4 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Boasting in Weakness (Chapters 10–12)</h2>
            <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              "If I must boast, I will boast of the things that show my weakness." — 2 Corinthians 11:30
            </blockquote>
            {[
              ["Paul's Credential List (11:23–29)","Paul's ironic apostolic resume: labors more abundant, imprisonments more frequent, beatings beyond measure, often near death. Five times forty lashes minus one. Three times beaten with rods. Once stoned. Three times shipwrecked, a night and a day adrift at sea. In journeys often — dangers from rivers, robbers, Gentiles, false brothers, city, wilderness, sea. In toil and hardship, sleeplessness, hunger, thirst, cold, naked. His credential is not success but the cruciform pattern of Christ's own life."],
              ["The Damascus Basket (11:32–33)","The anti-climax after the epic suffering list: his most embarrassing credential is being lowered in a basket through a window in the Damascus wall to escape King Aretas. In military culture, the highest decoration was given for being the first over the enemy wall. Paul was lowered in a basket to flee. He ends the fool's speech with the most inglorious event of his ministry. The last word is humility, not heroism."],
              ["Christological Logic of Weakness (13:4)","'For to be sure, he was crucified in weakness, yet he lives by God's power. Likewise, we are weak in him, yet by God's power we will live with him to serve you.' Christ's pattern — weakness leading to resurrection power — is the template for all Christian ministry and life. Paul's weakness is not a deficiency to be overcome; it is the form that genuine apostolic power takes in a cruciform age."],
              ["The God of All Comfort (1:3–7)","2 Corinthians opens: 'Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God. For just as we share abundantly in the sufferings of Christ, so also our comfort abounds through Christ.' Comfort (paraklesis — same root as Paraclete/Holy Spirit) is the relaying gift: received from God, passed on to others. Suffering produces ministry capacity."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Generosity */}
        {activeTab === 5 && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Grace of Generosity (Chapters 8–9)</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {GIVING_CARDS.map(c => (
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

        {/* Tab 6: New Creation */}
        {activeTab === 6 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>New Creation in Christ (5:14–21)</h2>
            <blockquote style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" — 2 Corinthians 5:17
            </blockquote>
            {[
              ["The Love of Christ Controls Us (5:14)","'For Christ's love compels us, because we are convinced that one died for all, and therefore all died.' The love of Christ is not a sentiment but a force — sunechei, it holds together, constrains, compels. The logic: if one died for all, then all died in him. The corollary: those who live should no longer live for themselves but for him who died for them and was raised again."],
              ["No Longer Knowing According to the Flesh (5:16)","'So from now on we regard no one from a worldly point of view. Though we once regarded Christ in this way, we do so no longer.' The resurrection changes perception. Paul once evaluated people (including Jesus) by human categories — power, status, eloquence, ethnic identity. No longer. In Christ, all human categories are relativized. Every person is now seen as someone for whom Christ died."],
              ["Ambassadors for Christ (5:20)","'We are therefore Christ's ambassadors, as though God were making his appeal through us. We implore you on Christ's behalf: Be reconciled to God.' The ministry of reconciliation makes every believer an ambassador — carrying the terms of peace from the offended God to the offending world. The appeal is urgent, personal, and christological: God himself is speaking through the bearer of the message."],
              ["The Tri-Unity of the Reconciliation Text","Three actors, three movements: (1) God initiates — not counting sins, reconciling the world to himself. (2) Christ mediates — the one without sin becomes sin. (3) Believers extend — given the message and ministry of reconciliation, becoming ambassadors. The whole sequence is grace from beginning to end: initiated by God, accomplished by Christ, extended by the Spirit through weak clay-jar apostles."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: TEAL, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 7: Journal */}
        {activeTab === 7 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1rem", fontSize: ".9rem" }}>Reflect on your study of 2 Corinthians. Your notes are saved locally.</p>
            {[
              "What is your 'thorn in the flesh' — the thing you have prayed for God to remove, and how might 'my grace is sufficient' reframe it?",
              "Paul's jars-of-clay theology says God's power is most clearly seen in human weakness. Where in your life have you experienced this?",
              "What does the ministry of reconciliation — being an ambassador for Christ — look like in your specific relational context right now?",
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
