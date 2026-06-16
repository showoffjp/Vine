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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "kPKdLh4IXZY", title: "1 John 3 - Children of God" },
  { videoId: "SvTiQxAO5Xk", title: "What Is Sin? 1 John 3:4-8 Explained" },
  { videoId: "mjQ4i7gXzXo", title: "Love One Another 1 John 3:11-18" },
  { videoId: "HHF36qvKhes", title: "Confidence Before God 1 John 3:19-24" },
];

const VERSE_SECTIONS = [
  {
    id: "vj1",
    ref: "1 John 3:1-3",
    title: "The Lavish Love That Makes Us Children of God",
    color: GOLD,
    content:
      "See what great love the Father has lavished on us, that we should be called children of God! And that is what we are! The reason the world does not know us is that it did not know him. Dear friends, now we are children of God, and what we will be has not yet been made known. But we know that when Christ appears, we shall be like him, for we shall see him as he is. All who have this hope in him purify themselves, just as he is pure. John opens the chapter with an exclamation of astonishment -- see (Greek: idete, a command to fix your attention) what kind (potapen -- what foreign, exotic, undeserved) love the Father has lavished (dedoken, from didomi, given as a gift). The lavishing is not moderate generosity; it is the language of excess, abundance, overflow. The result is staggering: we should be called children of God (tekna theou). And then John insists: &lsquo;And that is what we are!&rsquo; -- not merely a legal designation but an ontological reality. The parenthetical observation that the world does not know us because it did not know Christ (v.1b) is not pessimism but prophetic realism: identity confusion about the church is rooted in identity confusion about Jesus. Verses 2-3 introduce the eschatological dimension: what we will be has not yet been made known. We are children now, but the full disclosure of what that means awaits the parousia. When Christ appears (phaneroo -- when he is made visible), we will be like him (homoioi auto esometha), for we will see him as he is. This is the transforming power of the beatific vision -- beholding produces becoming. The practical conclusion (v.3): this hope is not passive; it produces purification (hagnizei heauton -- purifies himself). The person who genuinely hopes to be like Christ when he appears is already becoming like Christ now.",
  },
  {
    id: "vj2",
    ref: "1 John 3:4-8",
    title: "The Definition of Sin and Christ's Purpose in Destroying It",
    color: ROSE,
    content:
      "Everyone who sins breaks the law; in fact, sin is lawlessness. But you know that he appeared so that he might take away our sins. And in him is no sin. No one who lives in him keeps on sinning. No one who keeps on sinning has either seen him or known him. Dear children, do not let anyone lead you astray. The one who does what is right is righteous, just as he is righteous. The one who does what is sinful is of the devil, because the devil has been sinning from the beginning. The reason the Son of God appeared was to destroy the devil's work. John gives a formal definition: sin (hamartia) is anomia -- lawlessness, the state of being without or against the law. This is not primarily about technical rule-breaking but about a fundamental orientation against the order God has established. The Gnostic opponents John is addressing apparently claimed that their spiritual status exempted them from moral categories; John insists that sin is a real category with a real definition. The purpose of Christ's incarnation (he appeared -- ephanerothe) was to take away (airo) sins and to destroy (luo, to loose, untie, dissolve) the works of the devil (v.8). Christ came as the anti-sin, anti-devil mission of God. The present tense verbs in vv.6-9 have generated enormous discussion: 'no one who lives in him keeps on sinning.' The Greek present active participle (hamartanon) suggests ongoing, characteristic practice rather than isolated incidents. John is not saying the Christian never sins (cf. 1:8-10); he is saying the Christian does not live in a pattern of habitual, unrepentant sin as their characteristic mode of life. The child of God and the child of the devil are distinguishable by their characteristic practice -- righteousness or sin.",
  },
  {
    id: "vj3",
    ref: "1 John 3:9-10",
    title: "The Divine Seed and the Children of God vs. the Devil",
    color: PURPLE,
    content:
      "No one who is born of God will continue to sin, because God's seed remains in them; they cannot go on sinning, because they have been born of God. This is how we know who the children of God are and who the children of the devil are: Anyone who does not do what is right is not God's child, nor is anyone who does not love their brother and sister. Verse 9 introduces one of the most discussed phrases in John's letters: God's sperma (seed) remains in them. The word sperma (seed, offspring, genetic material) is striking -- John uses agricultural or biological language to describe what it means to be born of God. Interpretations vary: the divine seed has been understood as (1) the Word of God implanted in the believer, (2) the Holy Spirit given as the agent of new birth, (3) the new nature itself, the regenerated character that cannot coexist with a pattern of sin. The constraint (they cannot go on sinning) is not a statement about the impossibility of individual sinful acts but about the incompatibility of the regenerate character with habitual, willful, unrepentant sin as a pattern of life. Verse 10 is the diagnostic verse of the section: the children of God and the children of the devil are identifiable by two tests -- doing what is right, and loving their brothers and sisters. The tests are not separate; they are essentially one: genuine righteousness always expresses itself in love for the community. The prophetic tradition consistently makes this connection: you cannot claim to love God while oppressing the neighbor (Isaiah 1:11-17; Micah 6:6-8; Matthew 25:31-46).",
  },
  {
    id: "vj4",
    ref: "1 John 3:11-15",
    title: "Love One Another: The Original Message and Cain's Warning",
    color: GREEN,
    content:
      "For this is the message you heard from the beginning: We should love one another. Do not be like Cain, who belonged to the evil one and murdered his brother. And why did he murder him? Because his own actions were evil and his brother's were righteous. Do not be surprised, my brothers and sisters, if the world hates you. We know that we have passed from death to life, because we love each other. Anyone who does not love remains in death. Anyone who hates a brother or sister is a murderer, and you know that no murderer has eternal life residing in him. John grounds the love command in the original proclamation: the message heard from the beginning (ap arches, from the very start) is love one another (agapate allelous). The Cain narrative (Genesis 4) is introduced as the paradigmatic counter-example of what the community of God's children must not become. Cain murdered Abel -- and John supplies the motive that Genesis does not make explicit: because his own actions were evil and his brother's were righteous (v.12). The hatred of righteousness is the root of violence against the righteous. The application to the church's social situation is sobering: do not be surprised if the world hates you (v.13). If Cain -- who was in a privileged position as the firstborn -- could hate his righteous brother to the point of murder, the world's hatred of the church community is not a mystery but a predictable consequence of the same dynamic. The positive diagnostic follows in v.14: we know that we have passed from death to life (the aorist perfect of metabaino -- a definitive crossing over) because we love each other. The love of the community is not merely a symptom of new life; it is the evidence by which the community knows it has new life. The stark negative in v.15 applies Jesus's teaching in Matthew 5:21-22: hating a brother is equivalent to murder in the spiritual order. The murderer has no eternal life remaining in him.",
  },
  {
    id: "vj5",
    ref: "1 John 3:16-18",
    title: "The Definition of Love: Laying Down Your Life",
    color: TEAL,
    content:
      "This is how we know what love is: Jesus Christ laid down his life for us. And we ought to lay down our lives for our brothers and sisters. If anyone has material possessions and sees a brother or sister in need and has no pity on them, how can the love of God be in them? Dear children, let us not love with words or speech but with actions and in truth. Verses 16-18 provide John's definition of love, and it is simultaneously the highest and the most concrete definition in the NT. The way we know (ginoskomai -- we have come to know and know) what love (agape) is: Jesus Christ laid down his life (tethenken, perfect tense -- it happened and the reality stands) for us. The cross is the epistemology of love. We do not discover love by philosophical analysis or emotional experience; we learn what love is by looking at the cross. The obligation follows immediately: we ought (opheilo -- we are under moral obligation) to lay down our lives for our brothers and sisters. John does not soften this into something merely metaphorical. Then in v.17, he brings the principle down to ground level: if anyone has material possessions (bion -- the means of life, livelihood) and sees (theoreo -- looks at attentively, perceives) a brother or sister in need and closes their heart (kleis ta splagchna -- locks up the inner organs, the seat of compassion), how does the love of God remain in them? The question is rhetorical -- the answer is obviously: it does not. Verse 18 is the practical imperative: love in action and in truth (en ergo kai aletheia), not merely in word and speech. James 2:14-17 makes the same argument: faith without works is dead; love without practical action is the same.",
  },
  {
    id: "vj6",
    ref: "1 John 3:19-24",
    title: "Assurance When Our Heart Condemns Us, and the Test of the Spirit",
    color: PURPLE,
    content:
      "This is how we know that we belong to the truth and how we set our hearts at rest in his presence: If our hearts condemn us, we know that God is greater than our hearts, and he knows everything. Dear friends, if our hearts do not condemn us, we have confidence before God and receive from him anything we ask, because we keep his commands and do what pleases him. And this is his command: to believe in the name of his Son, Jesus Christ, and to love one another as he commanded us. The one who keeps God's commands lives in him, and he in them. And this is how we know that he lives in us: We know it by the Spirit he gave us. The final section of the chapter addresses one of the most pastorally significant questions in John's community: what do we do when our own conscience condemns us? The language of &lsquo;setting our hearts at rest&rsquo; (peisomen ten kardian -- persuade, reassure, set at rest) acknowledges that the heart may be an unreliable witness. When our hearts condemn us (kataginosko -- to know something against), the remedy is not more introspection but the appeal to a higher court: God is greater than our hearts (meizon estin ho theos tes kardias hemon), and he knows everything. God&rsquo;s knowledge is not threatening here but reassuring: the omniscient God, who knows all the facts of our case including what our anxious hearts do not know, has declared us his children. The parresia (confidence, boldness, freedom of speech) before God in v.21 is the antithesis of the anxious self-condemnation. Prayer from this position of confidence receives what it asks because the asking is aligned with God&rsquo;s will as expressed in his commands (v.22). Verse 23 simplifies the whole letter&rsquo;s ethical structure into two commands that are actually one: believe in the name of Jesus Christ and love one another. The Spirit given to us (v.24) is the seal and evidence of mutual indwelling -- we in God, God in us. The discernment of spirits (whether the Spirit is genuinely from God) will be taken up in chapter 4.",
  },
];

const THEMES = [
  {
    color: GOLD,
    title: "Agape: The Love That Defines the Community (vv.1, 11, 16-18)",
    body:
      "The Greek word agape (unconditional, self-giving love) appears throughout 1 John 3 in multiple forms. John&rsquo;s extraordinary claim is that agape is both the ground of our identity (the Father has lavished agape on us, v.1) and the test of it (we know we have passed from death to life because we agapao each other, v.14). The definition of agape given in v.16 is not abstract but specific: Jesus Christ laying down his life. Agape is always particular and costly. C.S. Lewis observed that agape is the distinctively Christian contribution to the vocabulary of love; it describes not a feeling but a commitment of the will that acts for the good of the beloved regardless of feeling or return. The community practicing agape is not merely being warm and welcoming -- it is embodying the cross-shaped logic of God toward the world.",
  },
  {
    color: ROSE,
    title: "Hamartia: What Sin Is and Why It Matters (vv.4-8)",
    body:
      "John&rsquo;s definition of sin as anomia (lawlessness) in v.4 is not popular in cultures that prefer to speak of mistakes, failures, or dysfunction. But the precision matters theologically. Sin is not primarily about breaking rules; it is about a fundamental orientation against the order God has established for human flourishing. The Gnostic opponents in John&rsquo;s context apparently taught that their spiritual experience placed them beyond moral categories. John&rsquo;s response is firm: sin is a real category, Christ came specifically to destroy it, and the person who lives in Christ does not make sin the pattern of their life. This is both liberating (sin does not have the last word; Christ came to destroy it) and demanding (the Christian life is the ongoing putting off of what Christ came to destroy).",
  },
  {
    color: PURPLE,
    title: "Sperma: The Divine Seed and Regenerated Nature (v.9)",
    body:
      "The phrase &lsquo;God&rsquo;s seed remains in them&rsquo; (v.9) uses the biological language of sperma (seed) to describe the regenerated nature that cannot coexist with habitual, characteristic sin. This language draws on both agricultural and genetic metaphors: the seed that produces a tree cannot also produce a different tree; the nature implanted by God produces God-like character, not devil-like character. The Reformed tradition has identified the sperma with the Holy Spirit; the Wesleyan tradition has emphasized the new nature (the renewed image of God); the evangelical tradition more broadly has understood it as the Word of God implanted (James 1:21) or the new birth as such. Whatever the precise referent, the point is clear: those born of God have a new nature that resists and ultimately cannot coexist with habitual sin.",
  },
  {
    color: TEAL,
    title: "Parresia: Confidence Before God (vv.19-22)",
    body:
      "The Greek word parresia (confidence, boldness, freedom of speech) describes the posture of the child of God before the Father. In classical Greek, parresia was the freedom of speech possessed by citizens of a democracy -- the right to speak openly in the public assembly. In the NT, it describes the access and boldness that believers have before God as his children (Hebrews 4:16, 10:19; Ephesians 3:12). John&rsquo;s pastoral use in vv.19-22 is specifically about prayer: the person whose heart does not condemn them has parresia before God and receives what they ask. This is not a blank-check theology of prayer; the asking is conditioned by alignment with God&rsquo;s commands (v.22). But the confidence is real: the child of God approaches the Father not as a terrified subject approaching a tyrant but as a beloved child speaking freely to a Father who is greater than all our self-accusations.",
  },
  {
    color: GREEN,
    title: "Children of God vs. Children of the Devil (vv.9-10)",
    body:
      "The binary John employs in vv.9-10 is typically read as unnecessarily harsh: children of God vs. children of the devil. But John is not engaging in name-calling; he is doing moral epistemology. How do you tell who belongs to which family? By characteristic behavior: doing what is right and loving the brothers and sisters (God&rsquo;s children), or practicing sin and not loving (devil&rsquo;s children). The devil has been sinning from the beginning (v.8) -- sin is the devil&rsquo;s characteristic activity; those who are characterized by sin participate in his work, not God&rsquo;s. The connection to Jesus&rsquo;s teaching in John 8:44 (you are of your father the devil, who was a murderer from the beginning) is direct. John is not being uncharitable; he is applying Jesus&rsquo;s own diagnostic framework. The binary also serves a pastoral purpose: it clarifies that there is no middle ground, no neutral position. Community membership is evidenced by character, not by profession.",
  },
];

export default function OneJohn3GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [openSection, setOpenSection] = useState<string | null>(null);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <Navbar />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 60px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, border: `1px solid ${PURPLE}44`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: PURPLE, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
            General Epistle &middot; 1 John 3
          </div>
          <h1 style={{ color: TEXT, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, margin: "0 0 12px", lineHeight: 1.2 }}>
            1 John 3: Children of God, Freedom from Sin, and the Test of Love
          </h1>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, margin: "0 0 20px", maxWidth: 680 }}
            dangerouslySetInnerHTML={{ __html: "First John 3 is one of the most theologically demanding chapters in the NT epistles &mdash; moving from the lavish love that constitutes us children of God (vv.1&ndash;3), to a formal definition of sin and Christ&rsquo;s mission to destroy it (vv.4&ndash;8), to the practical test of love that distinguishes God&rsquo;s children from the devil&rsquo;s (vv.9&ndash;18), and finally to the confidence before God available even when our own hearts condemn us (vv.19&ndash;24)." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              { label: "Book", value: "1 John", color: PURPLE },
              { label: "Chapter", value: "3 (24 verses)", color: TEAL },
              { label: "Author", value: "John the Apostle", color: GOLD },
              { label: "Key Word", value: "Agape / Love", color: GREEN },
            ].map(item => (
              <div key={item.label} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: item.color, fontWeight: 700, fontSize: 14 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? PURPLE : BORDER}`,
                background: activeTab === t.id ? `${PURPLE}22` : "transparent",
                color: activeTab === t.id ? PURPLE : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Chapter Overview</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "First John was written to a community in crisis. A group had separated from the community (2:19) holding a defective Christology (denying the full humanity of Christ) and apparently a defective ethic (claiming spiritual perfection exempted them from moral obligation). John writes to address both errors: right doctrine about Christ, and right ethics in the community. Chapter 3 is the ethical heart of the letter." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s theological structure is tight: identity precedes ethics. John does not begin with commands but with the astonishing declaration of what God has already done: lavished his love on us and made us his children. From that identity foundation, the ethical imperatives flow. We do not earn the identity by our behavior; we live from the identity in our behavior." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter also introduces two tests that run through the entire letter &mdash; the moral test (do we do what is right / avoid sin?) and the love test (do we love the brothers and sisters?) &mdash; and shows that these are ultimately one test. The person who genuinely knows God does what is right and loves the community. The person who claims to know God but does neither shows by the absence of fruit that the claim is false." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>The Structure of 1 John 3</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "vv.1-3", label: "Children of God: Identity Established by Lavish Love", color: GOLD },
                  { ref: "vv.4-8", label: "Sin Defined and Christ's Mission to Destroy It", color: ROSE },
                  { ref: "vv.9-10", label: "The Divine Seed and the Diagnostic Test", color: PURPLE },
                  { ref: "vv.11-15", label: "Love One Another: The Original Message and Cain's Warning", color: GREEN },
                  { ref: "vv.16-18", label: "The Definition of Love: Action, Not Words", color: TEAL },
                  { ref: "vv.19-24", label: "Assurance, Confidence in Prayer, and the Spirit's Witness", color: PURPLE },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: BG, borderRadius: 10, padding: "12px 14px" }}>
                    <span style={{ background: `${item.color}22`, border: `1px solid ${item.color}44`, borderRadius: 6, padding: "2px 10px", fontSize: 11, color: item.color, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>{item.ref}</span>
                    <span style={{ color: TEXT, fontSize: 14 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>Key Greek Words</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { word: "Agape", transliteration: "ah-GAH-pay", meaning: "Unconditional, self-giving love; the distinctively Christian love", verse: "vv.1, 16, 17 &mdash; the love of God lavished on us", color: GOLD },
                  { word: "Hamartia", transliteration: "ha-mar-TEE-ah", meaning: "Sin; missing the mark; rebellion against the divine order", verse: "vv.4-9 &mdash; sin defined as anomia (lawlessness)", color: ROSE },
                  { word: "Sperma", transliteration: "SPER-mah", meaning: "Seed, offspring; the divine nature implanted in the believer", verse: "v.9 &mdash; God's seed remains in those born of God", color: PURPLE },
                  { word: "Parresia", transliteration: "par-REH-see-ah", meaning: "Confidence, boldness, freedom of speech; the citizen's right before God", verse: "v.21 &mdash; confidence before God in prayer", color: TEAL },
                  { word: "Tekna Theou", transliteration: "TEK-na the-OO", meaning: "Children of God; born-of-God identity", verse: "v.1, 2, 10 &mdash; we are called and are the children of God", color: GREEN },
                ].map(item => (
                  <div key={item.word} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "baseline", flexWrap: "wrap", marginBottom: 4 }}>
                      <span style={{ color: item.color, fontWeight: 800, fontSize: 16 }}>{item.word}</span>
                      <span style={{ color: MUTED, fontSize: 13, fontStyle: "italic" }}>{item.transliteration}</span>
                    </div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{item.meaning}</div>
                    <div style={{ color: MUTED, fontSize: 13 }} dangerouslySetInnerHTML={{ __html: item.verse }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in 1 John 3</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Five interlocking themes organize the theological content of 1 John 3. Understanding them as a unity &mdash; rather than as isolated propositions &mdash; is essential to reading the chapter well. They form a coherent account of what it means to be a child of God in the world." }}
              />
            </div>
            {THEMES.map(theme => (
              <div key={theme.title} style={{ background: CARD, border: `1px solid ${theme.color}44`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 17, margin: "0 0 12px" }}>{theme.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body }}
                />
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>The Two Tests That Are Actually One</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Throughout 1 John, two tests appear for assessing whether one genuinely belongs to God: the moral test (do you do what is right?) and the love test (do you love the brothers and sisters?). In 1 John 3 these converge:" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "v.10", text: "Anyone who does not do what is right is not God's child, nor is anyone who does not love their brother and sister.", color: GREEN },
                  { ref: "v.14", text: "We know that we have passed from death to life, because we love each other.", color: TEAL },
                  { ref: "v.18", text: "Let us not love with words or speech but with actions and in truth.", color: GOLD },
                  { ref: "v.23", text: "His command: to believe in the name of his Son, Jesus Christ, and to love one another as he commanded us.", color: PURPLE },
                ].map(item => (
                  <div key={item.ref} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ color: item.color, fontSize: 12, fontWeight: 700, marginBottom: 6 }}>{item.ref}</div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{item.text}</p>
                  </div>
                ))}
              </div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                dangerouslySetInnerHTML={{ __html: "The two tests are ultimately one because the God whose character we participate in by new birth is the God who is both holy (and therefore hates sin) and love (and therefore gives himself for others). You cannot separate the two without distorting the character of God and therefore the character of his children." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: 1 John 3</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "All twenty-four verses of 1 John 3 are grouped below by thematic unit. Each accordion section provides detailed commentary on the Greek text, the theological argument, and the connection to the broader NT canon. Click any section to expand." }}
              />
            </div>

            {VERSE_SECTIONS.map(section => (
              <div
                key={section.id}
                style={{ background: CARD, border: `1px solid ${openSection === section.id ? section.color : BORDER}`, borderRadius: 12, marginBottom: 10, overflow: "hidden", transition: "border-color 0.15s" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ background: `${section.color}22`, border: `1px solid ${section.color}44`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: section.color, fontWeight: 700, whiteSpace: "nowrap" }}>
                      {section.ref}
                    </span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{section.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: 18, marginLeft: 12, flexShrink: 0 }}>{openSection === section.id ? "-" : "+"}</span>
                </button>
                {openSection === section.id && (
                  <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "16px 0 0" }}
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                )}
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginTop: 16 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 17, margin: "0 0 14px" }}>Key Verse References</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["1 John 3:1", "1 John 3:2", "1 John 3:4", "1 John 3:8", "1 John 3:9", "1 John 3:11", "1 John 3:14", "1 John 3:16", "1 John 3:17", "1 John 3:18", "1 John 3:21", "1 John 3:23"].map(ref => (
                  <VerseRef key={ref} reference={ref} inline={false} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Application: How Identity Shapes Life</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The central question of 1 John 3 for the contemporary Christian is this: how does knowing we are children of God change how we live and love? The chapter insists that identity is not a passive possession but a living reality that shapes character, community, and action. To be a child of God is not merely a status but a trajectory &mdash; we are being conformed to the image of the Son (Romans 8:29), and the Spirit&rsquo;s work in us is the seed of a transformation that will be complete when we see Christ as he is." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The applications below trace five practical implications of the chapter&rsquo;s theology, moving from the most foundational (identity) to the most concrete (action in community)." }}
              />
            </div>

            {[
              {
                color: GOLD,
                title: "Living from Identity, Not toward It: The Order Matters",
                icon: "01",
                body: "The most important structural observation in 1 John 3 is the order: John announces identity before he gives commands. We are children of God (v.2) -- and then the ethical imperatives flow from that. The typical human approach reverses this: do the right things, and maybe then you'll be accepted. The gospel reverses the reversal: you are accepted, therefore do the right things. This is the 'indicative-imperative' structure of NT ethics that runs from Romans (justified, therefore present yourselves to God) through Ephesians (seated with Christ in the heavenly realms, therefore put off the old self) to 1 John. The practical implication: when we fail, we return to the identity and are restored, not abandoned. When we are tempted to sin, we remember who we are (children of God, with God's seed in us) and resist from that foundation. Behavior modification without identity transformation is moralism; identity transformation without behavioral change is antinomianism. First John 3 refuses both.",
              },
              {
                color: ROSE,
                title: "Taking Sin Seriously: Neither Perfectionism nor Permissiveness",
                icon: "02",
                body: "John's teaching on sin in 1 John 3:4-9 is sometimes read as teaching sinless perfection (no one born of God can sin). But this cannot be right: the same letter says in 1:8-10 that those who claim to be without sin deceive themselves and make God a liar. The key is the difference between isolated sinful acts and habitual, characteristic, unrepentant sin as a pattern of life. The child of God is not perfect; the child of God does not make sin their home. The practical implication: the Christian community must neither normalize sin (dismissing it as inevitable human nature) nor cultivate perfectionism (creating shame spirals when people fail). The community that takes sin seriously takes repentance seriously -- which means it also takes forgiveness seriously. First John 1:9 is the other half of 3:4-9: if we confess our sins, he is faithful and just and will forgive us our sins.",
              },
              {
                color: GREEN,
                title: "Loving in Action: What the Community of God's Children Looks Like",
                icon: "03",
                body: "The contrast John draws in 1 John 3:17-18 between love in words and love in actions is one of the most challenging in the NT. The test case is specific: someone with material possessions who sees a brother or sister in need and closes their heart to them. The love of God is not in them. This is not an abstract principle; it is a concrete community ethic. The church community that loves in words alone -- that proclaims God's love on Sunday but ignores material need in the community -- has failed the love test of 1 John 3. The Cain story (vv.11-12) shows what love-without-action becomes: violence against the righteous. The progression runs from withholding material provision (v.17) to closing the heart (v.17) to hating the brother (v.15) to murder (v.15, 12). Love in action is not just a nice supplement to worship; it is the evidence that the community has actually received the love of God.",
              },
              {
                color: TEAL,
                title: "Receiving Assurance: What to Do When Your Heart Condemns You",
                icon: "04",
                body: "John's pastoral counsel in vv.19-22 addresses one of the most common spiritual struggles: the condemning conscience. Many Christians live under a chronic sense of condemnation that robs them of the parresia (confidence) before God that John describes. The answer John gives is not introspective ('try harder to feel better about yourself') but theological: God is greater than your heart, and he knows everything (v.20). The appeal is to the court of God, whose knowledge of our case is complete (including what our anxious hearts miss) and whose verdict in Christ is 'beloved child.' The practical implication: assurance is found not by going deeper into self-examination but by going higher to God. Not 'what does my conscience say about me?' but 'what does God say about me?'",
              },
              {
                color: PURPLE,
                title: "The Purifying Hope: How Eschatology Shapes Ethics",
                icon: "05",
                body: "First John 3:2-3 makes an eschatological argument for present holiness: when Christ appears, we will be like him, for we will see him as he is. And everyone who has this hope in him purifies himself, just as he is pure. The eschatological hope is not merely a comfort about the future; it is a present purifying force. The person who genuinely believes they will one day be conformed to the image of Jesus is already moving in that direction. This is the foundation of what theologians call 'progressive sanctification': not earning anything from God, but being changed by the Spirit into the likeness of the Son we will fully see. The purification that flows from hope is not anxious self-improvement but the natural directional movement of a life oriented toward Christ. C.S. Lewis: 'Aim at Heaven and you will get Earth thrown in; aim at Earth and you will get neither.'",
              },
            ].map(item => (
              <div key={item.icon} style={{ background: CARD, border: `1px solid ${item.color}44`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${item.color}22`, border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h3 style={{ color: item.color, fontWeight: 800, fontSize: 16, margin: "0 0 10px" }}>{item.title}</h3>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "John says 'See what great love the Father has lavished on us!' (v.1). Do you live with astonishment at being called a child of God, or has that identity become routine? What would it look like to recover the astonishment?",
                  "First John 3:17 asks a concrete question: if you have material possessions and see a brother or sister in need but close your heart, how does the love of God remain in you? What are the areas where you close your heart to need?",
                  "The passage on the condemning heart (vv.19-22) says that God is greater than our hearts. Where have you been trusting your own negative verdict about yourself over God's verdict? How does the gospel speak to your conscience here?",
                  "John says the community knows it has passed from death to life because it loves each other (v.14). What does that look like practically in your church or small group? What would change if you took this as the primary evidence of genuine spiritual life?",
                  "First John 3:2-3 says the hope of seeing Christ purifies us. How does the eschatological vision of being conformed to Christ's likeness when he appears shape the choices you make today?",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 10, padding: "14px 16px", borderLeft: `3px solid ${PURPLE}` }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 16 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
                Video resources for further study and teaching on 1 John 3.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {videoItems.map(item => (
                  <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={item.videoId} title={item.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <h4 style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
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
