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
  { id: "godislove", label: "God Is Love" },
  { id: "lovecommand", label: "Love One Another" },
  { id: "walking", label: "Walking in Light" },
  { id: "testing", label: "Testing Spirits" },
  { id: "assurance", label: "Assurance" },
  { id: "themes", label: "Key Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const THEMES = [
  { color: GOLD, title: "Fellowship (Koinonia)", text: "The opening of 1 John establishes its purpose: so that you too may have fellowship with us; and indeed our fellowship is with the Father and with his Son Jesus Christ (1:3). Koinonia is not casual association — it is participation, sharing-in, a mutual indwelling. Fellowship with the community of believers is not separate from fellowship with God; it is the form it takes in history. Those who claim fellowship with God while walking in darkness (1:6) are self-deceived. The vertical relationship (with God) is inseparable from the horizontal (with one another)." },
  { color: RED, title: "The Test of Genuine Faith", text: "1 John repeatedly gives tests for genuine Christian identity — three in particular: the theological test (confessing that Jesus Christ has come in the flesh, 4:2), the ethical test (keeping God's commandments, 2:3-6), and the social test (loving one another, 3:14-15). These are not the basis of salvation but its evidence. John is writing to a community shaken by the departure of some members (2:19 — they went out from us but they were not of us). He wants the remaining believers to have confident assurance that their faith is genuine." },
  { color: BLUE, title: "Light and Darkness", text: "\"God is light, and in him is no darkness at all\" (1:5). The light/darkness contrast runs through the whole letter. Walking in the light means living in integrity, with nothing hidden — both from God and from one another. Walking in darkness means self-deception (claiming fellowship while sinning), hatred of the brother (2:9-11), and loving the world (2:15-17). John does not spiritualize this: darkness is not primarily ignorance but moral and relational failure — particularly hatred of fellow believers." },
  { color: GREEN, title: "The World (Kosmos)", text: "John uses kosmos (world) in a distinctive, negative sense — not the physical creation but the system of organized human existence in rebellion against God. \"Do not love the world or the things in the world. If anyone loves the world, the love of the Father is not in him\" (2:15). The world is defined by the desires of the flesh, the desires of the eyes, and pride in possessions (2:16) — the triple temptation that echoes the Eden narrative and Jesus's wilderness temptation. Worldliness is not about particular activities but about a fundamental orientation away from God." },
  { color: PURPLE, title: "The Spirit of Truth vs. Error", text: "\"Beloved, do not believe every spirit, but test the spirits to see whether they are from God, for many false prophets have gone out into the world\" (4:1). The specific error John addresses — that Jesus Christ has not come in the flesh (4:2) — is proto-Docetism: the denial of the full incarnation. Testing the spirits requires not gullibility or cynicism but discernment rooted in apostolic teaching. The criterion is Christological: any spirit that denies the incarnation is the spirit of antichrist. The test is not emotional intensity but doctrinal content." },
  { color: TEAL, title: "Eternal Life as Present Possession", text: "John's distinctive contribution to NT soteriology is the emphasis on eternal life as a present possession, not merely a future hope. \"I write these things to you who believe in the name of the Son of God, that you may know that you have eternal life\" (5:13). \"We know that we have passed from death to life\" (3:14). The present tense is deliberate: eternal life begins at new birth. This gives John's letter its characteristic certainty — not arrogance but the confidence of those who know whom they have believed (cf. 2 Tim 1:12)." },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };
type JohnLettersTab = "overview" | "godislove" | "lovecommand" | "walking" | "testing" | "assurance" | "themes" | "journal" | "videos";

export default function LettersOfJohnGuidePage() {
  const [activeTab, setActiveTab] = usePersistedState<JohnLettersTab>("vine_1john_tab", "overview");
  const [jForm, setJForm] = useState({ verse: "", reflection: "", prayer: "" });
  const [jSaved, setJSaved] = useState(false);
  const [jEntries, setJEntries] = useState<JEntry[]>(() => {
    try { const s = localStorage.getItem("vine_1john_journal"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  useEffect(() => { try { localStorage.setItem("vine_1john_journal", JSON.stringify(jEntries)); } catch {} }, [jEntries]);

  const saveEntry = useCallback(() => {
    if (!jForm.verse && !jForm.reflection) return;
    const entry: JEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), ...jForm };
    setJEntries(prev => [entry, ...prev]);
    setJForm({ verse: "", reflection: "", prayer: "" });
    setJSaved(true);
    setTimeout(() => setJSaved(false), 2000);
  }, [jForm]);

  const deleteEntry = useCallback((id: string) => setJEntries(prev => prev.filter(e => e.id !== id)), []);

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main id="main-content" style={{ paddingTop: "var(--header-height, 80px)", maxWidth: 860, margin: "0 auto", padding: "40px 20px 60px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Epistles · NT</div>
          <h1 style={{ color: TEXT, fontSize: 34, fontWeight: 900, margin: "0 0 10px" }}>The Letters of John</h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>Three letters from the apostle John — on love, truth, light, and fellowship — anchored in the twin declarations that God is light and God is love, and that both must be lived concretely in community.</p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button type="button" key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${activeTab === t.id ? GOLD : BORDER}`, background: activeTab === t.id ? `${GOLD}20` : "transparent", color: activeTab === t.id ? GOLD : MUTED, fontWeight: activeTab === t.id ? 700 : 500, fontSize: 13, cursor: "pointer" }}>
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[["Author", "John the Apostle"], ["Date", "~85-95 AD"], ["Location", "Ephesus (traditional)"], ["Audience", "Asian churches"], ["Crisis", "Proto-Docetism"], ["Key Verse", "1 Jn 4:7-8"]].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>The three letters of John were written late in the apostolic period, from a community shaped by the Gospel of John — sharing its vocabulary (light, darkness, love, truth, world, life) but applying it to urgent pastoral crises. The central crisis of 1 John is the departure of some community members (2:19) who apparently held a proto-Docetic theology: denying that Jesus Christ has truly come in the flesh (4:2). These leavers were claiming special spiritual knowledge while failing the basic tests of Christian life.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>1 John is the most theologically concentrated of the three. 2 John (13 verses) applies 1 John to the question of hospitality to traveling teachers who deny the incarnation — the church should not receive them. 3 John (15 verses) commends Gaius for his hospitality to itinerant ministers and rebukes the domineering Diotrephes who is turning them away. Together the three letters paint a picture of an early church navigating authentic love, doctrinal integrity, and the politics of community.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>THE THREE LETTERS AT A GLANCE</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  ["1 John (5 chapters)", GOLD, "Written to a community after a schism — some have left, denying the incarnation. John's purpose: assurance for the remaining believers, criteria for testing spirits, and the twin foundations of God is light (1:5) and God is love (4:8)."],
                  ["2 John (13 verses)", BLUE, "Written to 'the elect lady and her children' — probably a local church and its members. Warns against receiving teachers who deny the incarnation: 'If anyone comes to you and does not bring this teaching, do not receive him into your house or give him any greeting' (v. 10)."],
                  ["3 John (15 verses)", GREEN, "Written to Gaius, a beloved individual in the church. Commends Gaius for supporting traveling missionaries, rebukes the ambitious Diotrephes who refuses to welcome them and expels those who do, and recommends Demetrius."],
                ].map(([title, color, desc]) => (
                  <div key={String(title)} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: `1px solid ${BORDER}` }}>
                    <span style={{ background: `${color}20`, border: `1px solid ${color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: color as string, fontWeight: 700, whiteSpace: "nowrap", alignSelf: "flex-start" }}>{title}</span>
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "godislove" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>God Is Love (1 John 4:7-21)</h2>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                <p style={{ color: GOLD, fontSize: 17, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God. Anyone who does not love does not know God, because God is love.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>1 John 4:7-8</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>1 John contains the two most theologically dense sentences in the Bible about God&apos;s nature: &ldquo;God is light&rdquo; (1:5) and &ldquo;God is love&rdquo; (4:8, 4:16). These are not definitions of God — they are identifications. John does not say God is loving (an attribute) or that God loves (an action). He says God is love — love is constitutive of his being. This is possible because God is eternally triune: love requires a lover, a beloved, and the love between them — all eternally present within the Trinity.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The practical implication John draws is immediate: if God is love, then those who are born of God will love. Love is the evidence of divine origin. This is not a moral demand disconnected from reality but a claim about what God&apos;s life, when it is genuinely present in a person, produces.</p>
            </div>
            {[
              { ref: "1 Jn 4:8", color: GOLD, title: "God IS Love (Not: God Is Loving)", content: "\"God is love\" (ho theos agapē estin) — the verb 'is' is identity, not mere description. John does not say God sometimes acts with love, or that love is his dominant characteristic, or even that he always loves. He says love is what God is. This claim is theologically rich: it means that every act of God — including judgment — flows from the depths of love, not from an alien attribute. The famous 'paradox' of God's love and wrath dissolves: wrath is love's response to that which destroys the beloved. Love that cannot be angry at evil is not love at all." },
              { ref: "1 Jn 4:10", color: RED, title: "He Loved Us First — The Cross", content: "\"In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins.\" The cross is the definition of love, not an illustration of it. When John says God is love, he means: the God whose love sent his Son to absorb the consequences of human sin. The word 'propitiation' (hilasmos) carries the sense of the anger-averting sacrifice — the one who turns away wrath by bearing it. The cross is not God punishing Jesus instead of us in a merely legal transaction; it is love going to the uttermost length to restore broken fellowship." },
              { ref: "1 Jn 4:18", color: TEAL, title: "Perfect Love Casts Out Fear", content: "\"There is no fear in love, but perfect love casts out fear. For fear has to do with punishment, and whoever fears has not been perfected in love.\" The fear that love casts out is not holy reverence (the fear of the Lord) but the servile terror of one who expects punishment. Those who know themselves loved by the God who is love do not relate to him from a position of defensive terror but from the security of the beloved. This is the pastoral heart of 1 John for Christians struggling with assurance: the antidote to fear is not more effort but deeper reception of God's love." },
              { ref: "1 Jn 4:19-21", color: PURPLE, title: "We Love Because He Loved Us First", content: "\"We love because he first loved us. If anyone says, 'I love God,' and hates his brother, he is a liar; for he who does not love his brother whom he has seen cannot love God whom he has not seen.\" The logic is stark: love for God that does not produce love for people is self-deception. Not because human love earns God's love or proves our worthiness — but because the person genuinely filled with God's love will necessarily overflow toward others. Hatred of the visible brother is the evidence that love of the invisible God is not actually present. The vertical and horizontal are inseparable." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "lovecommand" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Love One Another (1 John 3–4)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>The command to love one another is the most repeated ethical instruction in John&apos;s letters — it appears in the Gospel of John (13:34-35) as Jesus&apos; &ldquo;new commandment,&rdquo; and recurs throughout the letters. But John insists this is not primarily a moral demand; it is a theological description. Love is the mark of those who have been born of God, passed from death to life, know God. It is not the condition of fellowship with God but its evidence.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>John is also precise about what love means — not sentiment but action. The specific example he gives is pointed: if you see your brother in material need and close your heart against him, how does God&apos;s love abide in you? (3:17). John&apos;s love ethic is incarnational — it takes material, costly, concrete form.</p>
            </div>
            {[
              { ref: "1 Jn 2:9-11", color: GREEN, title: "Hatred of Brother = Darkness", content: "\"Whoever says he is in the light and hates his brother is still in darkness. Whoever loves his brother abides in the light, and in him there is no cause for stumbling. But whoever hates his brother is in the darkness and walks in the darkness, and does not know where he is going, because the darkness has blinded his eyes.\" The light/darkness contrast is not abstract — it is measured in whether you love or hate your brother. The person who claims spiritual illumination while harboring hatred is self-deceived. Hatred (which in John's usage includes indifference, contempt, and relational hostility) is evidence of spiritual blindness." },
              { ref: "1 Jn 3:11-15", color: RED, title: "Cain and the Murderer Within", content: "\"For this is the message that you have heard from the beginning, that we should love one another. We should not be like Cain, who was of the evil one and murdered his brother... Everyone who hates his brother is a murderer, and you know that no murderer has eternal life abiding in him.\" John reaches back to the first murder to define hatred. Cain's murder of Abel was the primordial expression of the world's system: hate-motivated violence against the righteous. Jesus makes the same connection in the Sermon on the Mount (Matt 5:21-22): anger and contempt are murder in embryo." },
              { ref: "1 Jn 3:16-18", color: BLUE, title: "Love Defined by the Cross — and by Action", content: "\"By this we know love, that he laid down his life for us, and we ought to lay down our lives for the brothers. But if anyone has the world's goods and sees his brother in need, yet closes his heart against him, how does God's love abide in him? Little children, let us not love in word or talk but in deed and in truth.\" The cross defines love (laying down life); the deed of practical generosity embodies it in ordinary life. The gap between the two examples is deliberate: most of us will not die for our brothers, but all of us can choose to open or close our hands to the needy brother in front of us." },
              { ref: "1 Jn 3:23", color: GOLD, title: "His Commandment: Believe and Love", content: "\"And this is his commandment, that we believe in the name of his Son Jesus Christ and love one another, just as he has commanded us.\" John compresses the whole Christian life into two movements: faith (believing in Jesus) and love (loving one another). These are not two separate commandments — they are one commandment with two dimensions. The same Jesus who calls for faith calls for love; the same faith in Jesus produces love for one another. To separate them — claiming belief without love, or love without faith in Jesus — is to miss the whole structure of John's theology." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "walking" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Walking in the Light (1 John 1–2)</h2>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                <p style={{ color: BLUE, fontSize: 16, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;This is the message we have heard from him and proclaim to you, that God is light, and in him is no darkness at all.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>1 John 1:5</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The first major theological claim of 1 John is &ldquo;God is light.&rdquo; Light in John means absolute moral transparency — nothing hidden, nothing distorted. God is truth without shadow. Walking in the light means living in that same moral transparency — with no hidden sins, no self-deception, no pretense. John does not expect perfection (1:8 — &ldquo;If we say we have no sin, we deceive ourselves&rdquo;) but he expects honesty: acknowledging sin rather than concealing it, confessing rather than hiding.</p>
            </div>
            {[
              { ref: "1 Jn 1:6-7", color: BLUE, title: "Fellowship Requires Walking in Light", content: "\"If we say we have fellowship with him while we walk in darkness, we lie and do not practice the truth. But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus his Son cleanses us from all sin.\" Walking in the light does not mean sinlessness — it means transparency before God. The blood of Jesus cleanses us as we walk in the light, not as a reward for walking perfectly. The key is that sin must be brought into the light (confessed) rather than kept in the darkness (denied or rationalized)." },
              { ref: "1 Jn 1:8-9", color: GOLD, title: "The Faithful Confession of Sin", content: "\"If we say we have no sin, we deceive ourselves, and the truth is not in us. If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.\" This is one of the most pastorally important promises in the NT. The condition is confession (homologeō — to say the same thing, i.e., to agree with God about what sin is). The basis is God's faithfulness and justice (not merely mercy — the atonement has made forgiveness just, not merely generous). The result is forgiveness and cleansing — both the guilt and the stain removed." },
              { ref: "1 Jn 2:15-17", color: RED, title: "Do Not Love the World", content: "\"Do not love the world or the things in the world. If anyone loves the world, the love of the Father is not in him. For all that is in the world — the desires of the flesh and the desires of the eyes and pride of possessions — is not from the Father but is from the world. And the world is passing away along with its desires, but whoever does the will of God abides forever.\" The world is not the physical cosmos but the organized system of human life in rebellion against God. The three defining characteristics — desires of the flesh, desires of the eyes, pride of possessions — echo the triple temptation pattern of Genesis 3 and Matthew 4." },
              { ref: "1 Jn 2:1-2", color: TEAL, title: "We Have an Advocate", content: "\"My little children, I am writing these things to you so that you may not sin. But if anyone does sin, we have an advocate with the Father, Jesus Christ the righteous. He is the propitiation for our sins, and not for ours only but also for the sins of the whole world.\" John's pastoral balance is exact: he calls for holiness (so that you may not sin) but immediately provides the remedy for failure (we have an advocate). The Christian is not expected to be perfect — they are expected to confess, repent, and find renewed forgiveness through the one who continually intercedes for them." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "testing" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Testing the Spirits (1 John 4:1-6)</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>John does not call believers to uncritical acceptance of every spiritual claim. False prophets have gone out into the world (4:1). Spiritual enthusiasm and apparent charisma are not by themselves signs of genuine divine activity — they must be tested. John gives a concrete, Christological test: any spirit that confesses that Jesus Christ has come in the flesh is from God; any spirit that does not is the spirit of the antichrist (4:2-3).</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The specific error being tested was proto-Docetism — the denial that the eternal Son truly took human flesh. If Christ did not truly become human, then his death was not a real death, his blood was not real blood, and the atonement is not a genuine atoning sacrifice. Docetism makes the incarnation into a divine costume drama rather than a genuine entry into human existence. For John, getting the incarnation right is not theological pedantry — it is the foundation of everything.</p>
            </div>
            {[
              { ref: "1 Jn 4:1-3", color: PURPLE, title: "The Christological Test", content: "\"By this you know the Spirit of God: every spirit that confesses that Jesus Christ has come in the flesh is from God, and every spirit that does not confess Jesus is not from God.\" The test is incarnational: the full humanity of Jesus (come in the flesh) is the criterion. This does not exhaust what Christians must believe, but it identifies the specific heresy John is countering. Any spirituality that makes Jesus less than fully human (or less than fully divine) has failed the test of the apostolic witness. The test is not feeling or power but doctrinal content." },
              { ref: "1 Jn 4:4-6", color: GREEN, title: "You Are from God — Greater Is He", content: "\"Little children, you are from God and have overcome them, for he who is in you is greater than he who is in the world.\" This is one of 1 John's great reassurances. The community has not lost ground to the false prophets — they have overcome them, because the Spirit of God who indwells them is greater than the spirit of the antichrist at work in the world. The basis of confidence is not their own spiritual strength but the presence of the Spirit of God in them. 'Greater is he who is in you' has sustained persecuted and confused believers across the centuries." },
              { ref: "2 Jn 10-11", color: RED, title: "Do Not Welcome False Teachers", content: "\"If anyone comes to you and does not bring this teaching, do not receive him into your house or give him any greeting, for whoever greets him takes part in his wicked works.\" This instruction from 2 John is often felt as harsh. Its context is itinerant teachers in the ancient world who relied on hospitality from house churches. To receive a false teacher is to become complicit in the spread of their error. This is not a license for general inhospitality; it is a specific instruction about those whose teaching destroys the foundations of the faith." },
              { ref: "Antichrist concept", color: GOLD, title: "The Antichrist as Spirit, Not Just Person", content: "\"Children, it is the last hour, and as you have heard that antichrist is coming, so now many antichrists have come\" (2:18). John's use of 'antichrist' is distinctive. He is not primarily concerned with a single end-times figure but with the spirit of antichrist — already present, already at work. Antichrist in John's framework is any teaching or power that denies the incarnation and opposes the true Christ. The NT elsewhere describes an eschatological figure (2 Thess 2, Rev 13), but John insists the spirit behind that figure is already active in false teachers." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "assurance" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Assurance of Eternal Life (1 John 5)</h2>
              <div style={{ background: BG, borderRadius: 10, padding: "16px 20px", marginBottom: 18 }}>
                <p style={{ color: TEAL, fontSize: 16, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;I write these things to you who believe in the name of the Son of God, that you may know that you have eternal life.&rdquo;</p>
                <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>1 John 5:13 — the stated purpose of the entire letter</p>
              </div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}>The explicit purpose of 1 John is to give believers confident assurance — that you may know that you have eternal life. This is remarkable: John assumes that assurance is something believers can and should have. The letter provides multiple tests (theological, ethical, social) not as an anxiety-inducing checklist but as the markers of the God-given life already present in believers.</p>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}>The assurance John describes is not presumption — it is receptive confidence. It rests not on my performance but on God&apos;s character: he is faithful and just (1:9); he who has the Son has life (5:12); greater is he who is in you (4:4). Assurance is not the same as the absence of doubt — it is the ability to say &ldquo;I know&rdquo; about the most important things, even in the presence of uncertainty about other things.</p>
            </div>
            {[
              { ref: "1 Jn 5:11-13", color: TEAL, title: "He Who Has the Son Has Life", content: "\"And this is the testimony, that God gave us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life. I write these things to you who believe in the name of the Son of God, that you may know that you have eternal life.\" The logic is clean: eternal life is in the Son; if you have the Son, you have eternal life — now, already. The assurance rests not on introspection (how am I doing?) but on the objective reality of union with Christ. Do you have the Son? Then you have life. This is the gospel foundation of assurance." },
              { ref: "1 Jn 3:19-22", color: GOLD, title: "When Our Heart Condemns Us", content: "\"By this we shall know that we are of the truth and reassure our heart before him; for whenever our heart condemns us, God is greater than our heart, and he knows everything.\" This passage is a pastoral gift for those who cannot escape self-condemnation. John does not say ignore your conscience. He says: when your heart condemns you, remember that God is greater than your heart. His knowledge is complete; his verdict in Christ is not overturned by the accusations of conscience. The basis of assurance is not an undisturbed heart but the character and knowledge of God." },
              { ref: "1 Jn 4:13-16", color: BLUE, title: "We Know We Abide in Him", content: "\"By this we know that we abide in him and he in us, because he has given us of his Spirit. And we have seen and testify that the Father has sent his Son to be the Savior of the world. Whoever confesses that Jesus is the Son of God, God abides in him, and he in God.\" Three grounds of assurance: the gift of the Spirit (internal evidence), the apostolic testimony to Jesus (external evidence), and confession of Jesus as Son of God (personal appropriation). The Spirit, the Word, and personal faith working together produce settled confidence in the believer's status before God." },
              { ref: "1 Jn 2:28–3:3", color: PURPLE, title: "Confidence at His Coming", content: "\"And now, little children, abide in him, so that when he appears we may have confidence and not shrink from him in shame at his coming... Beloved, we are God's children now, and what we will be has not yet appeared; but we know that when he appears we shall be like him, because we shall see him as he is. And everyone who thus hopes in him purifies himself as he is pure.\" Assurance in John is eschatologically shaped: confidence now flows toward confidence at Christ's return. The hope of seeing him as he is — and being transformed into his likeness — is not a future consolation; it is a present purifying force." },
            ].map(item => (
              <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: item.color, fontWeight: 700 }}>{item.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{item.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "themes" && (
          <div>
            {THEMES.map(t => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ color: t.color, fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{t.title}</div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 24px", marginBottom: 24 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 20, marginBottom: 8 }}>My Letters of John Journal</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Record your reflections on love, light, assurance, and fellowship from your reading of 1, 2, and 3 John.</p>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Passage</label><textarea rows={2} value={jForm.verse} onChange={e => setJForm(f => ({ ...f, verse: e.target.value }))} placeholder="e.g. 1 Jn 1:9, 1 Jn 3:16-18, 1 Jn 4:7-8, 1 Jn 5:13" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Reflection</label><textarea rows={4} value={jForm.reflection} onChange={e => setJForm(f => ({ ...f, reflection: e.target.value }))} placeholder="What does this passage teach you about God's love, about walking in light, or about assurance of salvation?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <div><label style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 6 }}>Prayer response</label><textarea rows={3} value={jForm.prayer} onChange={e => setJForm(f => ({ ...f, prayer: e.target.value }))} placeholder="How are you responding to what you've read in the letters of John?" style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, fontSize: 14, padding: "10px 12px", resize: "vertical", boxSizing: "border-box" }} /></div>
                <button type="button" onClick={saveEntry} style={{ alignSelf: "flex-start", background: GOLD, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{jSaved ? "Saved ✓" : "Save Entry"}</button>
              </div>
            </div>
            {jEntries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {jEntries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}><span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span><button type="button" onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 13 }}>✕</button></div>
                    {e.verse && <div style={{ marginBottom: 8 }}><span style={{ color: GOLD, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Passage</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.verse}</p></div>}
                    {e.reflection && <div style={{ marginBottom: 8 }}><span style={{ color: TEAL, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Reflection</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.reflection}</p></div>}
                    {e.prayer && <div><span style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Prayer</span><p style={{ color: TEXT, fontSize: 14, margin: "4px 0 0" }}>{e.prayer}</p></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos on 1, 2 & 3 John</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Sermons and lectures on God&apos;s love, walking in light, testing the spirits, and assurance of eternal life in the letters of John.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "l3QkE6nKylM", title: "The Letters of John Overview", channel: "BibleProject", description: "BibleProject's animated overview of 1, 2, and 3 John — the crisis of the false teachers, the twin claims that God is light and God is love, and what it means to walk in truth and love." },
                  { videoId: "kMjVwbpFjWw", title: "God Is Love — 1 John 4", channel: "Tim Keller", description: "Keller on the most radical claim in 1 John — that God is not merely loving but love itself, what this means for the Trinity, and why perfect love casts out fear." },
                  { videoId: "TlVfIp0LpCI", title: "Assurance of Salvation", channel: "Desiring God", description: "A pastoral treatment of 1 John's assurance texts — the tests John gives, why assurance is something believers can and should have, and what to do when your heart condemns you." },
                  { videoId: "GrWONt5Avpw", title: "Walking in the Light", channel: "Gospel Coalition", description: "An exposition of 1 John 1 — what it means to walk in the light, the role of confession, the promise that his blood cleanses, and the balance between not sinning and having an Advocate when we do." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GOLD, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: TEAL, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
