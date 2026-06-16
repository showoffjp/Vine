"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import VerseRef from "@/components/VerseRef";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB";
const GOLD = "#D97706", TEAL = "#0D9488", ROSE = "#E11D48";

const videoItems = [
  { videoId: "UPbMCXRJoZk", title: "1 Peter 1 - Living Hope" },
  { videoId: "4Xp8Z7BSCYU", title: "Trials and the Refining of Faith 1 Peter 1:6-9" },
  { videoId: "cMDJdRvhHAE", title: "Be Holy as I Am Holy 1 Peter 1:13-21" },
  { videoId: "0nLXJCXMNq8", title: "The Imperishable Word 1 Peter 1:22-25" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const verseAccordionItems = [
  {
    ref: "1:1-2",
    label: "1 Peter 1:1-2 &mdash; Elect Exiles: The Double Identity",
    body: "Peter opens with one of the most theologically loaded salutations in the New Testament: he writes &ldquo;to God&rsquo;s elect, exiles scattered throughout the provinces of Pontus, Galatia, Cappadocia, Asia and Bithynia.&rdquo; The Greek word <em>parepidemos</em> (exiles, strangers, aliens) sets the letter&rsquo;s entire pastoral tone. These believers are real social outsiders &mdash; many were slaves, freedmen, and marginalized Gentiles without full civic belonging. Peter does not deny their displacement; he reframes it. They are not mere exiles; they are elect exiles. The Greek <em>eklektois</em> (chosen) comes first in the sentence, before <em>parepidemos</em>. Their true identity is chosen-ness, not displacement. The Trinitarian structure of verse 2 is striking: chosen by the foreknowledge of God the Father, sanctified by the Spirit, sprinkled with the blood of Jesus Christ. All three persons of the Trinity are active in the salvation of these social outsiders."
  },
  {
    ref: "1:3-5",
    label: "1 Peter 1:3-5 &mdash; New Birth into a Living Hope",
    body: "Peter breaks into doxology: &ldquo;Praise be to the God and Father of our Lord Jesus Christ! In his great mercy he has given us new birth into a living hope through the resurrection of Jesus Christ from the dead.&rdquo; The Greek verb <em>anagennao</em> (new birth, born again, regenerated) appears only here and in verse 23 in the entire NT outside John 3. This is deliberate regeneration language. The new birth is into a &ldquo;living hope&rdquo; &mdash; not a static hope or a theoretical hope, but one that is alive because the one who grounds it &mdash; Jesus Christ &mdash; is himself risen and alive. The inheritance is described with three negatives: it cannot perish (<em>aphtharton</em>), cannot spoil (<em>amianton</em>), cannot fade (<em>amaranton</em>) &mdash; all the ways earthly inheritances fail. It is kept in heaven (a passive divine keeping) for those who are themselves shielded by God&rsquo;s power through faith until salvation is finally revealed."
  },
  {
    ref: "1:6-9",
    label: "1 Peter 1:6-9 &mdash; Trials That Refine Faith Like Gold",
    body: "&ldquo;In all this you greatly rejoice, though now for a little while you may have had to suffer grief in all kinds of trials. These have come so that the proven genuineness of your faith &mdash; of greater worth than gold, which perishes even though refined by fire &mdash; may result in praise, glory and honor when Jesus Christ is revealed.&rdquo; The word <em>dokimion</em> (proven genuineness, tested quality) is a metallurgical term: it refers to the result of testing that has passed. Gold is tested to remove impurities; faith more precious than gold is tested to demonstrate its genuine quality. The suffering is temporary (&ldquo;a little while&rdquo;) and purposive (so that). It is not random pain but refining work. The goal is faith that will receive &ldquo;praise, glory and honor&rdquo; when Christ is revealed &mdash; language that echoes what is usually applied to Christ himself. The tested believer will share in Christ&rsquo;s own glory at his appearing."
  },
  {
    ref: "1:10-12",
    label: "1 Peter 1:10-12 &mdash; The Prophets Who Searched for Your Grace",
    body: "Peter zooms out to eschatological perspective: &ldquo;Concerning this salvation, the prophets, who spoke of the grace that was to come to you, searched intently and with the greatest care, trying to find out the time and circumstances to which the Spirit of Christ in them was pointing when he predicted the sufferings of Christ and the glories that would follow.&rdquo; The OT prophets were themselves on a quest &mdash; diligently probing the temporal shape of the salvation they announced. They wrote for a fulfillment they could not see but could sense. Peter&rsquo;s point is double-edged: the recipients of this letter stand in a position of enormous historical privilege (they live in the fulfillment), and even the angels long to look into these things. This reframes exile: far from being forgotten or cursed, these scattered believers are the objects of prophetic longing and angelic fascination."
  },
  {
    ref: "1:13-16",
    label: "1 Peter 1:13-16 &mdash; Be Holy as I Am Holy",
    body: "&ldquo;Therefore, with minds that are alert and fully sober, set your hope on the grace to be brought to you when Jesus Christ is revealed at his coming. As obedient children, do not conform to the evil desires you had when you lived in ignorance. But just as he who called you is holy, so be holy in all you do; for it is written: &lsquo;Be holy, because I am holy.&rsquo;&rdquo; Peter cites Leviticus 11:44 and 19:2 &mdash; the ancient Mosaic call to holiness &mdash; and applies it to Gentile believers in Asia Minor. The theological logic is participatory: God&rsquo;s holiness is not merely a standard to meet but a nature to share. The word <em>hagiasmos</em> (holiness, sanctification) describes a process of being set apart that reflects the character of the God who called. The imperative &ldquo;be holy&rdquo; is grounded in the indicative &ldquo;he who called you is holy&rdquo; &mdash; you are called to become what God already is. The mind (&ldquo;girding up the loins of your mind&rdquo; &mdash; an image of tucking up a long robe for action) is the battleground where conformity or holiness is first decided."
  },
  {
    ref: "1:17-21",
    label: "1 Peter 1:17-21 &mdash; Reverent Fear and the Precious Blood",
    body: "&ldquo;Since you call on a Father who judges each person&rsquo;s work impartially, live out your time as foreigners here in reverent fear. For you know that it was not with perishable things such as silver or gold that you were redeemed from the empty way of life handed down to you from your ancestors, but with the precious blood of Christ, a lamb without blemish or defect.&rdquo; The word <em>polutimon</em> (precious, of great worth) describes the blood of Christ &mdash; it stands in explicit contrast with silver and gold, the most precious of worldly currencies. The redemption price is not financial but sacrificial, not earthly but eternal. This theology of the cross motivates the ethics of exile: reverent fear is not craven terror but the awe of those who understand what their redemption cost. Living as foreigners (&ldquo;paroikia,&rdquo; the time of your sojourning) is not a diminishment but a distinctive calling grounded in incomparably expensive grace."
  },
  {
    ref: "1:22-23",
    label: "1 Peter 1:22-23 &mdash; Sincere Love from a Purified Soul",
    body: "&ldquo;Now that you have purified yourselves by obeying the truth so that you have sincere love for each other, love one another deeply, from the heart. For you have been born again, not of perishable seed, but of imperishable, through the living and enduring word of God.&rdquo; The logic of community love is grounded in new birth: the purification that enables genuine love comes from obeying the truth &mdash; but more foundationally, it comes from the imperishable seed of the living word. The Greek <em>anagennao</em> (born again) reappears here, linking the community ethics of verses 22-25 back to the living hope of verses 3-5. The regeneration that grounds hope (vv. 3-5) is the same regeneration that enables sincere, deep, from-the-heart love. Peter&rsquo;s ethics and theology are inseparable: you can love this way because you have been born again this way."
  },
  {
    ref: "1:24-25",
    label: "1 Peter 1:24-25 &mdash; The Imperishable Word That Endures Forever",
    body: "Peter closes the chapter by citing Isaiah 40:6-8: &ldquo;All people are like grass, and all their glory is like the flowers of the field; the grass withers and the flowers fall, but the word of the Lord endures forever.&rdquo; Isaiah 40 is the great consolation passage &mdash; written to exiles in Babylon, announcing that the same God who made the nations is the one who sustains his scattered people. Peter applies it to the new Diaspora: these believers, scattered across Asia Minor, are held by an enduring word. The word that brought them to new birth (v. 23) is the same word that endures when everything else withers. The contrast between the perishable (grass, flowers, silver, gold) and the imperishable (the word, the blood, the inheritance, the new birth) is the backbone of the entire chapter. What decays cannot be trusted; what endures can be the foundation of a living hope."
  },
];

const keyThemes = [
  {
    color: TEAL,
    icon: "&#9875;",
    title: "Living Hope through Resurrection (vv. 1-5)",
    body: "The phrase &ldquo;living hope&rdquo; is Peter&rsquo;s signature contribution to NT hope-theology. Hope in the ancient world was often associated with uncertainty &mdash; <em>elpis</em> could mean mere expectation, positive or negative. Peter transforms it: the hope of believers is &ldquo;living&rdquo; because it is grounded in the resurrection of a living person &mdash; Jesus Christ. A living hope cannot die, cannot perish, cannot fade. It is kept by God in heaven for those who are themselves kept by God&rsquo;s power on earth. The Greek word <em>elpis</em> (hope) here carries the weight of eschatological certainty, not mere wish. The resurrection is the guarantee: if Christ is risen, the inheritance is secure."
  },
  {
    color: GOLD,
    icon: "&#128293;",
    title: "Trials That Refine Faith (vv. 6-9)",
    body: "Peter&rsquo;s theology of suffering is purposive, not merely stoic. Trials are not meaningless pain to be endured; they are a metallurgical process producing <em>dokimion</em> &mdash; the proven quality of tested faith. Just as gold&rsquo;s value is demonstrated by its survival of fire, faith&rsquo;s genuineness is demonstrated by its survival of suffering. But faith is &ldquo;of greater worth than gold, which perishes even though refined by fire.&rdquo; Gold, however refined, will ultimately perish. Faith, proven through suffering, will receive &ldquo;praise, glory and honor&rdquo; at the revelation of Christ &mdash; the very language of eschatological reward. Suffering is not the enemy of hope; it is hope&rsquo;s proving ground."
  },
  {
    color: PURPLE,
    icon: "&#128218;",
    title: "Call to Holiness and Reverent Fear (vv. 13-21)",
    body: "The holiness call in 1 Peter 1 is not legalistic but participatory. &ldquo;Be holy as I am holy&rdquo; grounds the imperative in the divine character. <em>Hagiasmos</em> (holiness, sanctification) is both a state and a process: believers are set apart by the Spirit (v. 2) and called to live out that set-apartness in every dimension of conduct. The motivation is double: reverent fear before a Father who judges impartially, and awestruck gratitude for the <em>polutimon</em> (precious, of great value) blood that purchased their freedom. Fear and love are not opposites here; they are two faces of the same awe before infinite grace."
  },
  {
    color: GREEN,
    icon: "&#127807;",
    title: "The Imperishable Seed of the Word (vv. 22-25)",
    body: "Peter&rsquo;s closing movement grounds the community&rsquo;s love for one another in the imperishable nature of the word that gave them new birth. The agricultural image of the &ldquo;imperishable seed&rdquo; is striking: seed is small, hidden, apparently insignificant &mdash; but it contains within itself the genetic code for everything it will produce. The living and enduring word of God is this seed. Placed in the soul through the gospel, it produces the regeneration that produces sincere love that produces community. The withering of flesh and grass (Isaiah 40) only amplifies the contrast: everything else decays; the word endures. This is why the word alone can be the foundation of a living hope that outlasts exile, suffering, and death."
  },
];

const hopeAudit = [
  { question: "When you think about the future, is your emotional center defined more by anxiety about circumstances or by the certainty of the resurrection?", ref: "1 Pet 1:3" },
  { question: "Is there a suffering or trial in your life right now? Can you identify what God might be refining through it?", ref: "1 Pet 1:6-7" },
  { question: "What does living as an &ldquo;elect exile&rdquo; mean for your relationship to the dominant culture around you?", ref: "1 Pet 1:1-2" },
  { question: "What in your daily behavior still reflects the &ldquo;empty way of life handed down from your ancestors&rdquo; (v. 18) rather than the holiness you are called to?", ref: "1 Pet 1:18" },
  { question: "Do you live with a sense of the &ldquo;preciousness&rdquo; of Christ&rsquo;s blood as the price of your redemption? How would that shift your priorities?", ref: "1 Pet 1:19" },
  { question: "Is your love for fellow believers &ldquo;sincere&rdquo; and &ldquo;from the heart&rdquo; (v. 22)? What would more genuine, costly love look like in your community?", ref: "1 Pet 1:22" },
];

export default function FirstPeter1GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openVerse, setOpenVerse] = useState<number>(-1);
  const [openHope, setOpenHope] = useState<number>(-1);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>&#9875;</div>
          <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 900, color: TEXT, marginBottom: ".75rem", lineHeight: 1.2 }}>
            1 Peter 1: Living Hope, Holy Living, and the Preciousness of Christ
          </h1>
          <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            A verse-by-verse study guide to 1 Peter 1 &mdash; covering the living hope through resurrection, faith refined by trials, the prophets who searched for our grace, the call to holiness, and the imperishable word that endures forever.
          </p>
          <div style={{ display: "flex", gap: ".75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.25rem" }}>
            {[
              { label: "25 Verses", color: TEAL },
              { label: "Greek: elpis, parepidemos", color: PURPLE },
              { label: "Living Hope", color: GOLD },
              { label: "Holy as He is Holy", color: ROSE },
            ].map(({ label, color }) => (
              <span key={label} style={{ background: `${color}22`, border: `1px solid ${color}55`, color, borderRadius: 20, padding: "4px 14px", fontSize: ".8rem", fontWeight: 700 }}>{label}</span>
            ))}
          </div>
        </div>

        {/* Tab Bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "2rem", justifyContent: "center" }}>
          {TABS.map((tab) => {
            const id = tab.toLowerCase().replace(/ /g, "-");
            const active = activeTab === id;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(id)}
                style={{
                  padding: ".5rem 1.2rem",
                  borderRadius: 20,
                  border: `1px solid ${active ? GREEN : BORDER}`,
                  background: active ? `${GREEN}22` : CARD,
                  color: active ? GREEN : MUTED,
                  fontWeight: active ? 700 : 400,
                  cursor: "pointer",
                  fontSize: ".88rem",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* TAB: Overview */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "2rem", marginBottom: "1.5rem" }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.35rem", marginBottom: "1rem" }}>Overview of 1 Peter 1</h2>
              <p
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "First Peter 1 is one of the most theologically dense and pastorally warm opening chapters in the New Testament. Peter writes to scattered believers &mdash; a mix of Jewish and Gentile Christians across five Roman provinces of Asia Minor &mdash; who are experiencing social marginalization and, in some cases, active hostility. The chapter&rsquo;s pastoral genius is that it begins not with the believers&rsquo; suffering but with the incomparable nature of their salvation." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "The chapter falls into five movements: (1) the double identity of elect exiles (vv. 1&ndash;2); (2) the doxology of living hope through resurrection (vv. 3&ndash;5); (3) the theology of suffering as faith-refining (vv. 6&ndash;9); (4) the prophets&rsquo; longing for the grace now given (vv. 10&ndash;12); and (5) the call to holy living grounded in God&rsquo;s holiness, Christ&rsquo;s blood, and the imperishable word (vv. 13&ndash;25)." }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "What unifies the chapter is the contrast between the perishable and the imperishable. Silver and gold perish; the blood of Christ is precious and eternal. Grass withers and flowers fall; the word of the Lord endures forever. Faith tested by fire outlasts the fire. The inheritance cannot perish, spoil, or fade. This is not escapism; it is a theology of resilience: believers can endure displacement and suffering because their ultimate security rests on what cannot be taken away." }}
              />
            </div>

            {/* Book Overview Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                ["Author", "Peter the Apostle"],
                ["Chapter", "1 Peter 1"],
                ["Verses", "25"],
                ["Key Greek Words", "elpis, parepidemos, anagennao, hagiasmos, polutimon"],
                ["Key Verse", "1 Pet 1:3"],
                ["OT Echoes", "Isa 40:6-8, Lev 11:44, 19:2"],
              ].map(([k, v]) => (
                <div key={k} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ color: MUTED, fontSize: ".75rem", marginBottom: ".3rem" }}>{k}</div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: ".9rem" }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Greek Word Spotlight */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${PURPLE}44`, padding: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", marginBottom: "1rem" }}>Key Greek Words in 1 Peter 1</h3>
              <div style={{ display: "grid", gap: ".85rem" }}>
                {[
                  { word: "elpis", meaning: "hope", note: "In Peter&rsquo;s hands, <em>elpis</em> is transformed from vague expectation to &lsquo;living hope&rsquo; (<em>elpida zosan</em>) &mdash; a hope that is alive because it is anchored in the risen Christ. This is eschatological certainty, not mere optimism." },
                  { word: "parepidemos", meaning: "stranger / exile / alien", note: "The social reality of Peter&rsquo;s recipients: they lack full civic belonging. But Peter makes this a theological category &mdash; they are exiles in this world because their citizenship is in heaven. The displacement is real; the identity is richer." },
                  { word: "anagennao", meaning: "born again / regenerated", note: "Appears only here (vv. 3 and 23) and in John 3 in the NT. Peter&rsquo;s new birth language grounds both living hope (v. 3) and sincere community love (v. 23). Regeneration is the root of both eschatology and ethics." },
                  { word: "hagiasmos", meaning: "holiness / sanctification", note: "Used in v. 2 of the Spirit&rsquo;s sanctifying work and implicit in vv. 15&ndash;16 in the imperative to &lsquo;be holy.&rsquo; Holiness is both a gift received (the Spirit&rsquo;s work) and a calling to pursue (conformity to God&rsquo;s character)." },
                  { word: "polutimon", meaning: "precious / of great worth", note: "Peter uses this word to describe the blood of Christ (v. 19) &mdash; placing it in explicit contrast with silver and gold. The most valuable earthly currencies are explicitly said to be <em>less</em> precious than the sacrificial blood that purchased redemption." },
                ].map(({ word, meaning, note }) => (
                  <div key={word} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ background: `${PURPLE}22`, border: `1px solid ${PURPLE}55`, borderRadius: 8, padding: "6px 12px", minWidth: 100, textAlign: "center", flexShrink: 0 }}>
                      <div style={{ color: PURPLE, fontWeight: 800, fontSize: ".85rem", fontStyle: "italic" }}>{word}</div>
                      <div style={{ color: MUTED, fontSize: ".72rem" }}>{meaning}</div>
                    </div>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: ".88rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: note }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: Key Themes */}
        {activeTab === "key-themes" && (
          <div>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.25rem" }}>Key Themes in 1 Peter 1</h2>
            <div style={{ display: "grid", gap: "1.25rem", marginBottom: "2rem" }}>
              {keyThemes.map((theme) => (
                <div key={theme.title} style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: ".85rem", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "2rem", flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: theme.icon }} />
                    <div>
                      <h3 style={{ color: theme.color, fontWeight: 800, fontSize: "1.05rem", marginBottom: ".5rem" }}>{theme.title}</h3>
                      <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* The Perishable vs. Imperishable contrast */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${TEAL}44`, padding: "1.5rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1.1rem", marginBottom: ".75rem" }}>The Perishable vs. the Imperishable: 1 Peter 1&rsquo;s Backbone</h3>
              <p style={{ color: MUTED, fontSize: ".88rem", lineHeight: 1.7, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: "The contrast between what decays and what endures is the structural spine of 1 Peter 1. Every key promise or exhortation is grounded in the imperishable side of this contrast." }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: BORDER, borderRadius: 10, overflow: "hidden" }}>
                <div style={{ background: `${ROSE}18`, padding: ".75rem 1rem", fontWeight: 800, color: ROSE, fontSize: ".85rem" }}>Perishable</div>
                <div style={{ background: `${TEAL}18`, padding: ".75rem 1rem", fontWeight: 800, color: TEAL, fontSize: ".85rem" }}>Imperishable</div>
                {[
                  { p: "Silver and gold (v. 18)", i: "The precious blood of Christ (v. 19)" },
                  { p: "Grass and flowers (vv. 24-25)", i: "The word of the Lord (v. 25)" },
                  { p: "Gold refined by fire (v. 7)", i: "Faith more precious than gold (v. 7)" },
                  { p: "The empty way of life (v. 18)", i: "New birth into living hope (v. 3)" },
                  { p: "Corruptible seed (v. 23)", i: "Imperishable seed: the living word (v. 23)" },
                  { p: "Earthly inheritance (implied)", i: "Inheritance that cannot perish, spoil, fade (v. 4)" },
                ].map((row, i) => (
                  <>
                    <div key={`p-${i}`} style={{ background: CARD, padding: ".65rem 1rem", color: MUTED, fontSize: ".85rem", lineHeight: 1.6, borderTop: `1px solid ${BORDER}` }}>{row.p}</div>
                    <div key={`i-${i}`} style={{ background: CARD, padding: ".65rem 1rem", color: MUTED, fontSize: ".85rem", lineHeight: 1.6, borderTop: `1px solid ${BORDER}` }}>{row.i}</div>
                  </>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: Verse by Verse */}
        {activeTab === "verse-by-verse" && (
          <div>
            <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.3rem", marginBottom: ".5rem" }}>Verse by Verse: 1 Peter 1:1&ndash;25</h2>
            <p style={{ color: MUTED, fontSize: ".88rem", marginBottom: "1.25rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: "Click any section to expand detailed commentary. References link to the Vine Bible reader." }} />

            {verseAccordionItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${openVerse === i ? TEAL : BORDER}`,
                  borderRadius: 12,
                  marginBottom: ".65rem",
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenVerse(openVerse === i ? -1 : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "1rem 1.25rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <span style={{ color: TEXT, fontWeight: 700, lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: item.label }} />
                  <span style={{ color: TEAL, fontSize: "1.25rem", flexShrink: 0, fontWeight: 400 }}>{openVerse === i ? "-" : "+"}</span>
                </button>
                {openVerse === i && (
                  <div style={{ padding: "0 1.25rem 1.25rem" }}>
                    <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "1rem" }}>
                      <VerseRef reference={`1 Peter ${item.ref}`} inline={false} />
                      <p style={{ color: MUTED, lineHeight: 1.85, marginTop: ".85rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, borderRadius: 12, border: `1px solid ${GOLD}44`, padding: "1.5rem", marginTop: "1.25rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1rem", marginBottom: ".75rem" }}>The Trinitarian Structure of Salvation (1 Pet 1:2)</h3>
              <div style={{ display: "grid", gap: ".85rem" }}>
                {[
                  { person: "God the Father", role: "Foreknowledge and election &mdash; the origin of salvation lies in the Father&rsquo;s sovereign foreknowing and choosing of his people before time began.", color: GOLD },
                  { person: "God the Spirit", role: "Sanctification &mdash; the Spirit is the agent who sets believers apart, purifies them, and forms the holiness that reflects God&rsquo;s own character.", color: PURPLE },
                  { person: "God the Son", role: "Atoning blood &mdash; the sprinkling of Jesus&rsquo; blood is the means by which forgiveness is applied and the new covenant inaugurated.", color: TEAL },
                ].map(({ person, role, color }) => (
                  <div key={person} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ background: `${color}22`, border: `1px solid ${color}55`, borderRadius: 8, padding: "6px 12px", minWidth: 90, textAlign: "center", flexShrink: 0 }}>
                      <div style={{ color, fontWeight: 800, fontSize: ".8rem" }}>{person}</div>
                    </div>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: ".88rem" }} dangerouslySetInnerHTML={{ __html: role }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: Application */}
        {activeTab === "application" && (
          <div>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.25rem" }}>Application: Living 1 Peter 1</h2>

            {/* Living Hope under Suffering */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${TEAL}44`, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1.1rem", marginBottom: ".75rem" }}>How Living Hope Shapes Our Response to Suffering</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: "The resurrection is not merely a past event Peter reports; it is the present foundation of a &ldquo;living hope&rdquo; that shapes how believers respond to suffering right now. The logic is: because Christ is risen, the inheritance is secure; because the inheritance is secure, present trials can be endured with joy; because they can be endured with joy, they can become the refining fire that proves faith rather than destroys it." }} />
              <div style={{ display: "grid", gap: "1rem" }}>
                {[
                  {
                    step: "01",
                    title: "Reframe the trial through resurrection",
                    color: TEAL,
                    body: "When suffering comes, the first move is not denial or despair but recalibration: &ldquo;Does the resurrection change this?&rdquo; If Christ is risen, then death is not the end, injustice will be rectified, and temporary suffering does not have the final word. Peter calls this &ldquo;greatly rejoicing&rdquo; even while suffering &mdash; not fake positivity, but eschatologically grounded joy. The resurrection is the lens through which trials are reinterpreted."
                  },
                  {
                    step: "02",
                    title: "Ask what is being refined",
                    color: GOLD,
                    body: "Peter&rsquo;s refining-fire imagery invites active discernment during suffering: what is God testing and proving through this? Is there pride being burned away? Dependence on earthly security being loosened? The capacity for compassion being developed? The refinery metaphor does not make suffering easier, but it makes it intelligible &mdash; and in making it intelligible, it makes it survivable. &ldquo;These trials have come so that&rdquo; &mdash; there is always a &ldquo;so that.&rdquo;"
                  },
                  {
                    step: "03",
                    title: "Live as a privileged exile",
                    color: PURPLE,
                    body: "The double identity &mdash; elect exile &mdash; is a practical posture for daily life. As an exile, you hold loosely to cultural belonging, social status, and worldly security. You are not trying to build a permanent home here. As elect, you are not anxious about your ultimate standing: you are chosen, known, and kept. Together these produce a freedom that neither the fully assimilated nor the merely displaced can access. You can engage culture without being captured by it."
                  },
                  {
                    step: "04",
                    title: "Let the preciousness of Christ&rsquo;s blood recalibrate your values",
                    color: ROSE,
                    body: "Peter explicitly contrasts &ldquo;perishable things such as silver or gold&rdquo; with &ldquo;the precious blood of Christ.&rdquo; This is a values audit. Whatever you prize most highly &mdash; financial security, reputation, health, comfort &mdash; is measured against the blood that purchased your soul. When that calibration is real and felt rather than merely assented to, it produces the reverent fear Peter describes: an awe that reshapes priorities without creating terror."
                  },
                ].map(({ step, title, color, body }) => (
                  <div key={step} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ background: `${color}22`, border: `1px solid ${color}55`, borderRadius: 8, padding: "6px 12px", minWidth: 44, textAlign: "center", flexShrink: 0 }}>
                      <div style={{ color, fontWeight: 900, fontSize: "1rem" }}>{step}</div>
                    </div>
                    <div>
                      <div style={{ color, fontWeight: 800, marginBottom: ".35rem" }}>{title}</div>
                      <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: ".9rem" }} dangerouslySetInnerHTML={{ __html: body }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Holiness in Practice */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${PURPLE}44`, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", marginBottom: ".75rem" }}>Pursuing Holiness: &ldquo;Be Holy as I Am Holy&rdquo;</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Peter&rsquo;s call to holiness in 1:13&ndash;21 is grounded in three realities: the Father&rsquo;s impartial judgment (v. 17), the precious price of redemption (vv. 18&ndash;19), and the God who foreknew and called (vv. 20&ndash;21). Holiness is not self-discipline in isolation; it is the lived response to overwhelming grace." }} />
              <div style={{ display: "grid", gap: ".85rem" }}>
                {[
                  { q: "The mind: &ldquo;With minds that are alert and fully sober&rdquo; (v. 13) &mdash; what am I feeding my mind? What shapes my mental habits, and do those habits tend toward conformity with old desires or renewal by the Spirit?", color: PURPLE },
                  { q: "The hope: &ldquo;Set your hope fully on the grace to be brought to you when Jesus Christ is revealed&rdquo; (v. 13) &mdash; is my hope set on eschatological grace, or on outcomes I can control in the present?", color: TEAL },
                  { q: "The conduct: &ldquo;Be holy in all you do&rdquo; (v. 15) &mdash; holiness is not reserved for the &lsquo;spiritual&rsquo; parts of life. Which corners of my daily conduct am I excluding from the call to holiness?", color: GOLD },
                  { q: "The fear: &ldquo;Live out your time as foreigners here in reverent fear&rdquo; (v. 17) &mdash; is there a healthy awe of God shaping my choices, or has familiarity bred a kind of spiritual casualness?", color: ROSE },
                ].map(({ q, color }, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${color}`, paddingLeft: "1rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: ".9rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Hope Audit */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${GOLD}44`, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.1rem", marginBottom: ".5rem" }}>Hope Audit: Reflecting on 1 Peter 1</h3>
              <p style={{ color: MUTED, fontSize: ".88rem", lineHeight: 1.7, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: "Use these questions as a slow, honest reflection on how deeply the &ldquo;living hope&rdquo; of 1 Peter 1 is shaping your actual life. These are not guilt-producing tests but orientation-finding questions." }} />
              <div style={{ display: "grid", gap: ".75rem" }}>
                {hopeAudit.map(({ question, ref: refText }, i) => (
                  <div
                    key={i}
                    style={{
                      background: BG,
                      border: `1px solid ${openHope === i ? GOLD : BORDER}`,
                      borderRadius: 10,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button
                      onClick={() => setOpenHope(openHope === i ? -1 : i)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: ".85rem 1rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "1rem",
                      }}
                    >
                      <span style={{ color: TEXT, fontSize: ".88rem", lineHeight: 1.6, fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: question }} />
                      <span style={{ color: GOLD, fontSize: "1.1rem", flexShrink: 0, marginTop: 2, fontWeight: 400 }}>{openHope === i ? "-" : "+"}</span>
                    </button>
                    {openHope === i && (
                      <div style={{ padding: "0 1rem 1rem" }}>
                        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: ".75rem" }}>
                          <VerseRef reference={refText} inline={false} />
                          <p style={{ color: MUTED, lineHeight: 1.7, fontSize: ".88rem", marginTop: ".6rem" }} dangerouslySetInnerHTML={{ __html: "Take a few minutes to sit with this question before God. You may want to write your reflection below or share it with a trusted friend or spiritual director." }} />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Video Section */}
            <div style={{ background: CARD, borderRadius: 14, border: `1px solid ${BORDER}`, padding: "1.5rem" }}>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", marginBottom: "1.25rem" }}>Video Teaching Resources</h3>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {videoItems.map((item) => (
                  <div key={item.videoId} style={{ borderRadius: 10, overflow: "hidden", border: `1px solid ${BORDER}` }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: ".75rem 1rem", background: BG }}>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: ".9rem" }}>{item.title}</div>
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
