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

const TABS = ["Overview","Living Hope","Royal Priesthood","Holy Living","Suffering","Submission","Fiery Trial","Journal","Videos"];

const LIVING_HOPE_ITEMS = [
  { q: "Praise for a Living Hope (1:3–5)", a: "'Praise be to the God and Father of our Lord Jesus Christ! In his great mercy he has given us new birth into a living hope through the resurrection of Jesus Christ from the dead, and into an inheritance that can never perish, spoil or fade — kept in heaven for you, who through faith are shielded by God's power until the coming of the salvation that is ready to be revealed in the last time.' The resurrection is the ground of hope: not wish or optimism, but living hope — because the resurrected Christ himself is alive and the inheritance is secured in him." },
  { q: "Joy Amid Trials (1:6–9)", a: "'In all this you greatly rejoice, though now for a little while you may have had to suffer grief in all kinds of trials. These have come so that the proven genuineness of your faith — of greater worth than gold, which perishes even though refined by fire — may result in praise, glory and honor when Jesus Christ is revealed.' The refinery image: gold is tested by fire; faith more precious than gold is tested by suffering. The purpose is not arbitrary pain but proven genuineness (dokimion) — tested faith that survives." },
  { q: "The Prophets' Longing (1:10–12)", a: "'Concerning this salvation, the prophets, who spoke of the grace that was to come to you, searched intently and with the greatest care, trying to find out the time and circumstances to which the Spirit of Christ in them was pointing.' The OT prophets longed to see what the NT believers now experience. The angels long to look into these things. The recipients of 1 Peter stand in privileged historical position: they live in the fulfillment of prophetic hope." },
  { q: "Called to Holy Living (1:13–21)", a: "'As obedient children, do not conform to the evil desires you had when you lived in ignorance. But just as he who called you is holy, so be holy in all you do; for it is written: Be holy, because I am holy.' The indicative grounds the imperative: God's holiness is the pattern and source of the believers' sanctification. Redeemed not with perishable things like silver or gold, but with the precious blood of Christ, a lamb without blemish or defect. The price of redemption motivates the response of holiness." },
];

const PRIESTHOOD_CARDS = [
  { icon: "💎", color: TEAL, title: "Living Stones (2:4–5)", text: "'As you come to him, the living Stone — rejected by humans but chosen by God and precious to him — you also, like living stones, are being built into a spiritual house to be a holy priesthood, offering spiritual sacrifices acceptable to God through Jesus Christ.' Christ is the living cornerstone, rejected by the builders but chosen and precious. Believers are living stones built into a temple — the corporate metaphor is architectural: individual stones have meaning only in the structure they form together." },
  { icon: "👑", color: GOLD, title: "Royal Priesthood (2:9)", text: "'But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.' Peter applies Exodus 19:6 to the whole church — the priestly role given to Israel is now fulfilled in the messianic community. Every believer has direct access to God (as priest) and mediates God's presence to the world (as royal priesthood). The purpose: declare his praises (exangello — proclaim outward to others)." },
  { icon: "🌍", color: BLUE, title: "Once Not a People (2:10)", text: "'Once you were not a people, but now you are the people of God; once you had not received mercy, but now you have received mercy.' Peter draws on Hosea's language (Lo-Ammi, Lo-Ruhamah) and applies it to Gentile believers: they were outsiders with no covenant identity. The gospel incorporates them into the people of God — this is the mystery of inclusion that runs through Romans 9–11 and Ephesians 2–3." },
  { icon: "✝️", color: RED, title: "The Rejected Cornerstone (2:6–8)", text: "Peter weaves three OT texts: Isaiah 28:16 (a chosen, precious cornerstone in Zion), Psalm 118:22 (the stone rejected by the builders became the cornerstone), and Isaiah 8:14 (a stone that causes stumbling). Jesus is all three simultaneously: chosen and precious foundation for those who believe; stumbling stone for those who disobey. Peter's christological hermeneutic: OT stone imagery all converges on Christ." },
];

const SUFFERING_ITEMS = [
  { q: "Christ's Example in Suffering (2:21–25)", a: "'To this you were called, because Christ suffered for you, leaving you an example, that you should follow in his steps. He committed no sin, and no deceit was found in his mouth. When they hurled their insults at him, he did not retaliate; when he suffered, he made no threats. Instead, he entrusted himself to him who judges justly.' The suffering servant of Isaiah 53 is Jesus. He bore our sins in his body on the tree so that we might die to sins and live for righteousness. By his wounds you have been healed." },
  { q: "Suffering for Righteousness (3:14–18)", a: "'But even if you should suffer for what is right, you are blessed. Do not fear their threats; do not be frightened. But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have.' The suffering for righteousness produces the opportunity for witness — the famous 'apologetics verse' (3:15) is embedded in a passage about unjust suffering. Apologetics is not debate performance but the explanation of living hope." },
  { q: "Suffering Produces Holiness (4:1–2)", a: "'Therefore, since Christ suffered in his body, arm yourselves also with the same attitude, because whoever suffers in the body is done with sin. As a result, they do not live the rest of their earthly lives for evil human desires, but rather for the will of God.' Suffering breaks the grip of the flesh by redirecting orientation from desire to God's will. The logic is eschatological: the person who has suffered is free from the tyranny of bodily passions because they have already paid the highest price." },
  { q: "Christ's Proclamation to the Spirits (3:18–22)", a: "One of the NT's most debated passages: Christ was put to death in the flesh but made alive in the Spirit, 'in which also he went and made proclamation to the imprisoned spirits — to those who were disobedient long ago when God waited patiently in the days of Noah.' Options: (1) Christ at his resurrection proclaimed victory over fallen angels; (2) Christ's pre-incarnate Spirit proclaimed through Noah; (3) Christ proclaimed to OT souls in Sheol. The passage's function is clear: Christ's death-and-resurrection has cosmic, not merely individual, scope." },
];

const SUBMISSION_CARDS = [
  { icon: "🏛️", color: BLUE, title: "Submission to Governing Authorities (2:13–17)", text: "'Submit yourselves for the Lord's sake to every human authority: whether to the emperor, as the supreme authority, or to governors, who are sent by him to punish those who do wrong and to commend those who do right. For it is God's will that by doing good you should silence the ignorant talk of foolish people.' This is not unquestioning obedience but missional wisdom: the churches' good civic conduct silences slander. 'Live as free people, but do not use your freedom as a cover-up for evil; live as God's slaves.'" },
  { icon: "🏠", color: PURPLE, title: "Wives and Husbands (3:1–7)", text: "'Wives, in the same way submit yourselves to your own husbands so that, if any of them do not believe the word, they may be won over without words by the behavior of their wives, when they see the purity and reverence of your lives.' Peter's counsel for a mixed marriage: a believing wife's gentle, reverent character is her most powerful witness to an unbelieving husband. To husbands: 'Be considerate as you live with your wives, and treat them with respect as the weaker partner and as heirs with you of the gracious gift of life, so that nothing will hinder your prayers.'" },
  { icon: "🐑", color: GREEN, title: "Elders and Flock (5:1–4)", text: "'To the elders among you, I appeal as a fellow elder and a witness of Christ's sufferings who also will share in the glory to be revealed: Be shepherds of God's flock that is under your care, watching over them — not because you must, but because you are willing, as God wants you to be; not pursuing dishonest gain, but eager to serve; not lording it over those entrusted to you, but being examples to the flock.' Five contrasts define faithful eldership: willing not compelled, generous not greedy, servant-leaders not autocrats." },
  { icon: "🙇", color: TEAL, title: "Humble Yourselves (5:5–7)", text: "'God opposes the proud but shows favor to the humble (Proverbs 3:34). Humble yourselves, therefore, under God's mighty hand, that he may lift you up in due time. Cast all your anxiety on him because he cares for you.' The same kenotic pattern as James 4:10 and Philippians 2: downward movement produces divine exaltation. Anxiety is not fought by self-sufficiency but by offloading — casting (epiriptō, throw decisively) every worry onto the one who genuinely cares for you." },
];

const FIERY_TRIAL_ITEMS = [
  { q: "The Fiery Ordeal (4:12–19)", a: "'Dear friends, do not be surprised at the fiery ordeal that has come on you to test you, as though something strange were happening to you. But rejoice inasmuch as you participate in the sufferings of Christ, so that you may be overjoyed when his glory is revealed.' The fiery trial (pyrōsis — the very word for metallurgical testing of metals) is not punishment but purification, not accident but design. Suffering as Christian is cause for glorifying God; suffering as evildoer is deserved punishment. The distinction matters: unjust suffering for Christ's name shares in his passion." },
  { q: "The Devil as Prowling Lion (5:8–9)", a: "'Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour. Resist him, firm in your faith, knowing that the same kinds of suffering are being experienced by your brotherhood throughout the world.' The scattered communities of 1 Peter are not alone in their persecution — the whole brotherhood endures the same. Resistance is not individual heroism but corporate solidarity: knowing the global church suffers the same things strengthens local endurance." },
  { q: "God of All Grace (5:10–11)", a: "'And after you have suffered a little while, the God of all grace, who has called you to his eternal glory in Christ, will himself restore, confirm, strengthen, and establish you. To him be the dominion forever and ever. Amen.' Four verbs of restoration (katartizō, stērizō, sthenaō, themelioō): restore to proper function, make firm, strengthen with might, set on an immovable foundation. The promise is not exemption from suffering but transformation through it — and a doxology is the fitting response." },
];

const VIDEOS = [
  { videoId: "zu0GCm5ILF0", title: "1 Peter Overview – The Bible Project" },
  { videoId: "otg9Rm58FiY", title: "1 Peter: Suffering and Living Hope" },
  { videoId: "YKEd0VzHXVo", title: "Royal Priesthood and Chosen People – 1 Peter 2" },
];

export default function FirstPeterGuidePage() {
  const [activeTab, setActiveTab] = useLocalStorage("vine_1pet_tab", 0);
  const [openHope, setOpenHope] = useLocalStorage("vine_1pet_hope", -1);
  const [openSuf, setOpenSuf] = useLocalStorage("vine_1pet_suf", -1);
  const [openFire, setOpenFire] = useLocalStorage("vine_1pet_fire", -1);
  const [journal, setJournal] = useLocalStorage("vine_1pet_journal", "");

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "system-ui,sans-serif" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>⚓</div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 900, color: TEXT, marginBottom: ".5rem" }}>The Book of 1 Peter</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>A Comprehensive Study Guide — living hope through resurrection, a royal priesthood, and suffering with Christ in a hostile world.</p>
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
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Overview of 1 Peter</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>First Peter is written by the apostle Peter "to God's elect, exiles scattered throughout the provinces of Pontus, Galatia, Cappadocia, Asia and Bithynia" (1:1) — a wide swath of Asia Minor. Written around AD 60–65, likely from Rome ("Babylon" in 5:13), it addresses Christians experiencing social marginalization and early Roman hostility.</p>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }}>The letter's central pastoral move is to reframe the recipients' social displacement: they are not victims but elect exiles — a chosen people, royal priesthood, holy nation living as "strangers and foreigners" in the world (2:11). Their suffering is not meaningless; it participates in and reflects Christ's own passion, and is the path to shared glory.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginTop: "1.5rem" }}>
              {[["Author","Peter the Apostle"],["Date","c. AD 60–65"],["Written From","Rome ('Babylon', 5:13)"],["Audience","Scattered Christians, Asia Minor"],["Key Verse","1 Pet 2:9 (royal priesthood)"],["Theme","Living hope through suffering"]].map(([k,v]) => (
                <div key={k} style={{ background: BG, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".25rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 1: Living Hope */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>A Living Hope (Chapter 1)</h2>
            {LIVING_HOPE_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openHope === i ? TEAL : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenHope(openHope === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: TEAL, fontSize: "1.2rem" }}>{openHope === i ? "−" : "+"}</span>
                </button>
                {openHope === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Royal Priesthood */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Royal Priesthood (Chapter 2:1–12)</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {PRIESTHOOD_CARDS.map(c => (
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

        {/* Tab 3: Holy Living */}
        {activeTab === 3 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Holy Living as Exiles (1:13–2:3, 4:1–11)</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>Peter frames Christian ethics as exile ethics: "Dear friends, I urge you, as foreigners and exiles, to abstain from sinful desires, which wage war against your soul. Live such good lives among the pagans that, though they accuse you of doing wrong, they may see your good deeds and glorify God on the day he visits us" (2:11–12).</p>
            {[
              ["The Logic of Sanctification","Holiness is not merely moral improvement but ontological alignment: 'just as he who called you is holy, so be holy.' The divine imperative (be holy) mirrors the divine indicative (he is holy). The purchase price — precious blood of Christ — is itself a motivation for purity. You were redeemed from the futile ways inherited from your forefathers."],
              ["New Birth through the Word","'For you have been born again, not of perishable seed, but of imperishable, through the living and enduring word of God. For, all people are like grass... but the word of the Lord endures forever.' The new birth is not self-manufactured but received through the gospel. This imperishable seed is the ground of the living hope — an inheritance kept in heaven is secured by an imperishable regeneration."],
              ["Strip Off and Crave (2:1–3)","'Therefore, rid yourselves of all malice and all deceit, hypocrisy, envy, and slander of every kind. Like newborn babies, crave pure spiritual milk, so that by it you may grow up in your salvation, now that you have tasted that the Lord is good.' Two movements: the strip-off (apothemenoi — laying aside like a garment) of old vices, and the craving for spiritual nourishment. Conversion changes appetite: the new birth installs new desires."],
              ["Using Gifts to Serve (4:10–11)","'Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms. If anyone speaks, they should do so as one who speaks the very words of God. If anyone serves, they should do so with the strength God provides, so that in all things God may be praised through Jesus Christ.' Stewardship of grace: gifts are not possessions but entrusted distributions for communal use."],
            ].map(([title, body], i) => (
              <div key={i} style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", marginBottom: "1.2rem" }}>
                <div style={{ color: PURPLE, fontWeight: 700, marginBottom: ".4rem" }}>{title}</div>
                <div style={{ color: MUTED, lineHeight: 1.8 }}>{body}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Suffering */}
        {activeTab === 4 && (
          <div>
            <h2 style={{ color: RED, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Suffering with Christ (Chapters 2–4)</h2>
            {SUFFERING_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openSuf === i ? RED : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenSuf(openSuf === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: RED, fontSize: "1.2rem" }}>{openSuf === i ? "−" : "+"}</span>
                </button>
                {openSuf === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Submission */}
        {activeTab === 5 && (
          <div>
            <h2 style={{ color: BLUE, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>Submission and Community Ethics (Chapters 2–5)</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {SUBMISSION_CARDS.map(c => (
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

        {/* Tab 6: Fiery Trial */}
        {activeTab === 6 && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.2rem" }}>The Fiery Trial (Chapters 4–5)</h2>
            {FIERY_TRIAL_ITEMS.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${openFire === i ? GOLD : BORDER}`, borderRadius: 12, marginBottom: ".75rem", overflow: "hidden" }}>
                <button onClick={() => setOpenFire(openFire === i ? -1 : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.3rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: TEXT, fontWeight: 700 }}>{item.q}</span>
                  <span style={{ color: GOLD, fontSize: "1.2rem" }}>{openFire === i ? "−" : "+"}</span>
                </button>
                {openFire === i && <div style={{ padding: "0 1.3rem 1.2rem", color: MUTED, lineHeight: 1.8 }}>{item.a}</div>}
              </div>
            ))}
            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${GOLD}`, padding: "1.5rem", marginTop: "1rem" }}>
              <div style={{ color: GOLD, fontWeight: 800, marginBottom: ".75rem" }}>The Always-Ready Answer (1 Pet 3:15)</div>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1rem", color: MUTED, fontStyle: "italic", lineHeight: 1.8 }}>
                "But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect, keeping a clear conscience, so that those who speak maliciously against your good behavior in Christ may be ashamed of their slander."
              </blockquote>
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: "1rem" }}>The Greek is apologia — a legal defense. The believer's whole life under suffering must be so visibly hopeful that it demands an explanation. The explanation is given with gentleness and reverence, not triumphalism. Character precedes argumentation; a clean conscience is more powerful than a clever answer.</p>
            </div>
          </div>
        )}

        {/* Tab 7: Journal */}
        {activeTab === 7 && (
          <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem" }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Study Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1rem", fontSize: ".9rem" }}>Reflect on your study of 1 Peter. Your notes are saved locally.</p>
            {[
              "What trial are you currently in, and how does Peter's 'tested faith more precious than gold' reframe your experience?",
              "What does it mean for you to live as an exile — holding loosely to cultural belonging while rooted in eternal hope?",
              "If someone asked you 'the reason for the hope that you have,' what would you say, and how would gentleness and respect shape your answer?",
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
