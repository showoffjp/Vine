"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = GOLD;

type VideoEntry = { videoId: string; title: string };

const VIDEOS: VideoEntry[] = [
  { videoId: "ps112v01", title: "Psalm 112 -- Blessed Is the Man Who Fears the LORD" },
  { videoId: "ps112v02", title: "The Generous Life -- Psalm 112 on Giving and Fearlessness" },
];

function VideoEmbed({ v }: { v: VideoEntry }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "1rem" }}>
      {open ? (
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={`https://www.youtube.com/embed/${v.videoId}?autoplay=1`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "1rem", cursor: "pointer", textAlign: "left", color: TEXT }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "1.25rem" }}>&#9654;</span>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{v.title}</div>
              <div style={{ fontSize: "0.85rem", color: MUTED }}>Click to play</div>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

const TABS = ["Overview", "Themes", "Verse by Verse", "Application"];

const KEY_DETAILS = [
  { label: "Author", value: "Anonymous" },
  { label: "Form", value: "Hebrew acrostic -- companion to Psalm 111" },
  { label: "Collection", value: "Book V (Psalms 107-150)" },
  { label: "Genre", value: "Wisdom beatitude and portrait of the God-fearer" },
  { label: "Companion", value: "Psalm 111 -- same acrostic structure, parallel keywords" },
  { label: "Key Verse", value: "v. 7 -- He is not afraid of bad news; his heart is firm, trusting in the LORD" },
  { label: "NT Connection", value: "2 Corinthians 9:9 quotes v. 9; Philippians 4:6-7 fearless heart; Matthew 5:3-10 Beatitudes" },
];

const PARALLEL_TABLE = [
  { ps111: "Great are the works of the LORD (v. 2)", ps112: "Great in the earth shall be his offspring (v. 2)" },
  { ps111: "His righteousness endures forever (v. 3)", ps112: "His righteousness endures forever (v. 3, 9)" },
  { ps111: "Gracious and merciful is the LORD (v. 4)", ps112: "He is gracious, merciful, and righteous (v. 4)" },
  { ps111: "He provides food for those who fear him (v. 5)", ps112: "It is well with the man who deals generously (v. 5)" },
  { ps111: "Holy and awesome is his name (v. 9)", ps112: "He is not afraid of bad news (v. 7)" },
  { ps111: "Fear of the LORD is beginning of wisdom (v. 10)", ps112: "Blessed is the man who fears the LORD (v. 1)" },
];

const THEMES = [
  {
    color: GOLD,
    title: "Blessed Is the Man Who Fears the LORD: The Root of All Blessing",
    body: `Psalm 112 opens with a beatitude: "Blessed is the man who fears the LORD, who greatly delights in his commandments!" The Hebrew 'ashrei (blessed, happy, flourishing) is the same word that opens Psalm 1 ("Blessed is the man who walks not in the counsel of the wicked") and the Beatitudes of Matthew 5. It describes not a momentary emotional state but a settled condition of flourishing -- the kind of life that is going well at the deepest level.
<br/><br/>
The source of this blessing is specified: fear of the LORD and delight in his commandments. These two are not separate requirements but two aspects of the same orientation. The person who truly fears the LORD will naturally delight in his commandments, because the commandments are the expression of the character of the God they fear. And the person who delights in God's commandments is demonstrating the fear of the LORD in practical form. Together they describe the person whose fundamental orientation is toward God -- not toward social approval, financial security, or personal advancement, but toward the LORD.
<br/><br/>
Psalm 112 is the companion to Psalm 111. While Psalm 111 praises the LORD by cataloguing his works and character, Psalm 112 portraits the blessed person who fears the LORD and thereby reflects the LORD's character. The parallel structure is deliberate and profound: Psalm 111 describes God (gracious, merciful, righteous, providing food, keeping covenant); Psalm 112 describes the God-fearer (gracious, merciful, righteous, generous, keeping faith). The person who fears the LORD begins to resemble the LORD they fear. This is the process described in 2 Corinthians 3:18: "We all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another."
<br/><br/>
Calvin observes: "It is not accidental that the psalm describing the blessed man immediately follows the psalm describing the blessed God. The implication is clear: the blessedness of the man who fears the LORD consists precisely in his growing resemblance to the LORD he fears. The creature is blessed when it becomes most fully what it was made to be -- the image and likeness of God."`,
  },
  {
    color: TEAL,
    title: "His Righteousness Endures Forever: The Permanence of Godly Character",
    body: `Verse 3 declares: "Wealth and riches are in his house, and his righteousness endures forever." And verse 9 repeats: "He has distributed freely, he has given to the poor; his righteousness endures forever; his horn is exalted in honor." The phrase "his righteousness endures forever" (tsidqato omedet la'ad) appears twice in Psalm 112 and once in Psalm 111:3 -- the identical phrase used of God's own righteousness. This parallel is intentional: the God-fearer's righteousness is so genuinely rooted in God that it shares in the permanence of God's own righteousness.
<br/><br/>
This is a profound theological claim. Human virtue, built on anything other than the fear of the LORD, is ultimately fragile -- dependent on circumstances, reputation, health, wealth, and the approval of others. But the righteousness of the God-fearer is "enduring forever" -- it does not wither under pressure, does not depend on external validation, does not fade when circumstances deteriorate. This is because it is not self-generated but God-rooted.
<br/><br/>
Paul quotes verse 9 in 2 Corinthians 9:9 ("He has distributed freely, he has given to the poor; his righteousness endures forever") in the context of encouraging the Corinthians' generous giving to the Jerusalem collection. Paul uses the verse as a proof-text for the principle that genuine Christian generosity is a form of righteousness that endures -- it has eternal weight, not merely temporal effect. The money given is gone, but the righteousness expressed in giving persists.
<br/><br/>
Derek Kidner notes: "The psalm is making an implicit theological argument: the permanence of the God-fearer's righteousness is not his own achievement but the overflow of the God whose righteousness also endures forever (Psalm 111:3). The human permanent is grounded in the divine permanent; the image shares in the stability of its original." This is the basis of the Christian's confidence in fruitful character: it is Christ's righteousness at work in us (Philippians 2:13), and Christ's righteousness endures forever.`,
  },
  {
    color: PURPLE,
    title: "He Is Not Afraid of Bad News: The Fearless Heart in a Fearful World",
    body: `Verse 7 is one of the most psychologically precise and pastorally powerful verses in the Psalter: "He is not afraid of bad news; his heart is firm, trusting in the LORD." The phrase "not afraid of bad news" (lo' yira' mishmua'ah ra'ah) addresses what may be the most universal form of anxiety in human experience: the dread of what might come, the anticipatory fear that paralyzes before the bad thing actually arrives. This is not courage in the face of present danger but serenity in the face of an uncertain future.
<br/><br/>
The source of this fearlessness is specified: "his heart is firm, trusting in the LORD." The Hebrew lev nachon (firm, established heart) is used elsewhere of a heart that is settled, stable, unshakeable -- the same quality of firmness attributed to Mount Zion in Psalm 125. This is not natural temperament or stoic indifference; it is a heart that has been made firm by trust (batach) in the LORD. The firmness is not self-generated but trust-generated: because the LORD is trustworthy, the heart that trusts him is firm.
<br/><br/>
Tremper Longman III writes: "Verse 7 is the most counter-cultural statement in the psalm. We live in an age saturated with anxiety about the future -- economic anxiety, health anxiety, political anxiety, relational anxiety. The psalm does not deny that bad news can come; it says that the God-fearer is not afraid of it. This is not denial or naivety but the fruit of a heart that has learned where its security truly lies." Philippians 4:6-7 is the NT equivalent: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus."
<br/><br/>
The word "firm" also appears in verse 8: "His heart is steady; he will not be afraid." The repetition is emphatic -- this fearlessness is not a momentary experience but a stable disposition, a settled state of the soul. It is the opposite of the "double-minded man, unstable in all his ways" of James 1:8. The God-fearer's heart has been established on a foundation that does not shift with the news cycle, the market report, or the medical diagnosis.`,
  },
  {
    color: ROSE,
    title: "He Has Distributed Freely to the Poor: Generosity as Righteousness",
    body: `Verses 5 and 9 together present one of the clearest Old Testament portraits of generosity as a defining characteristic of the God-fearer: "It is well with the man who deals generously and lends; who conducts his affairs with justice...He has distributed freely, he has given to the poor; his righteousness endures forever." Generosity is not presented as an optional virtue or as occasional charity but as a defining characteristic of the righteous person, specifically linked to the enduring righteousness that characterizes the psalm.
<br/><br/>
The phrase "deals generously and lends" (chonnen umalveh) encompasses both outright gift ("graciously gives," from the same root as the divine attribute chanan in Psalm 111:4) and the lending that helps without exploiting. Together they describe economic relationships characterized by the other person's wellbeing rather than personal profit. "Conducts his affairs with justice" (yekalkkel devarav bemishpat) adds the dimension of fair dealing in commerce and business -- the God-fearer's righteousness extends to the marketplace.
<br/><br/>
Paul's use of verse 9 in 2 Corinthians 9:9 is illuminating. He is encouraging the Corinthians to give generously to the collection for the Jerusalem poor, and he uses this verse as the scriptural warrant: when you give freely to the poor, you are doing something whose righteousness endures forever. The money is transient; the righteousness it expresses is permanent. This theological grounding for generosity -- not social pressure, not guilt, not reciprocal benefit, but participation in a righteousness that endures forever -- is the distinctively Christian motivation for giving.
<br/><br/>
Matthew Henry observes: "The generous man of Psalm 112 is one who has been liberated from the anxiety about the future (v. 7) that drives most human hoarding. Because his heart is firm, trusting in the LORD, he does not need to accumulate security for himself; he can freely distribute to others what God has freely given him. Generosity is the practical fruit of the fearless heart." This is precisely Paul's argument in 2 Corinthians 9:8-10: God provides abundantly not so that we can accumulate but so that we can be generous in every way.`,
  },
  {
    color: GREEN,
    title: "The Wicked Man Sees It and Is Angry: The Contrast That Ends the Psalm",
    body: `Psalm 112 concludes with a striking contrast that gives the psalm its dramatic final movement: "The wicked man sees it and is angry; he gnashes his teeth and melts away; the desire of the wicked will perish!" (v. 10). After nine verses describing the flourishing, generous, fearless, righteous, and blessed God-fearer, the psalm suddenly introduces the wicked man -- and his reaction to the God-fearer's life is rage, grinding envy, and ultimate dissolution.
<br/><br/>
The verb "melts away" (namas) is used elsewhere of wax melting in fire (Psalm 68:2) and of the proud dissolving before God's presence (Psalm 97:5). Applied to the wicked man who sees the God-fearer's blessedness, it describes the complete collapse of the self-constructed life when confronted with the genuine article. The wicked man's anger and gnashing of teeth are not power moves but the symptoms of impotence -- he sees what he cannot have and cannot destroy.
<br/><br/>
The "desire of the wicked" that will perish is a comprehensive verdict: not just the wicked man's specific plans but his entire orientation toward life -- everything he wanted, everything he built his life around -- will come to nothing. This is the psalm's final theodicy: the God-fearer's righteousness endures forever; the wicked man's desires perish. The contrast is absolute and eternal.
<br/><br/>
Spurgeon writes: "The last verse is a perfect foil to all that preceded. The righteous man is described as generous, fearless, established, exalted, remembered -- and the wicked man who sees all this can only rage and melt. The contrast is designed to produce in the reader the desire to be on the right side of it: to be the one whose heart is firm, not the one who gnashes his teeth; to be the one whose righteousness endures forever, not the one whose desire perishes." This is wisdom literature's characteristic move: present the two ways so vividly that the choice becomes viscerally obvious.`,
  },
];

const VERSES = [
  {
    ref: "v. 1",
    text: "Praise the LORD! Blessed is the man who fears the LORD, who greatly delights in his commandments!",
    comment: `The opening "Hallelujah" connects this psalm to the Hallel collection (Psalms 113-118) and to its companion Psalm 111. The beatitude ('ashrei, "blessed/happy/flourishing") immediately establishes the psalm's genre: it is a wisdom portrait of the blessed life. "Greatly delights in his commandments" (behuqqotav chaphets me'od) is emphatic -- this is not reluctant compliance with God's law but genuine, intense pleasure in it. The same disposition is described in Psalm 1:2 ("his delight is in the law of the LORD") and Psalm 119:16, 24, 47, 70, 77. The commandments are not a burden but the expression of the character of the God who is loved.`,
  },
  {
    ref: "vv. 2-3",
    text: "His offspring will be mighty in the land; the generation of the upright will be blessed. Wealth and riches are in his house, and his righteousness endures forever.",
    comment: `Verses 2-3 describe the blessings that attend the God-fearer in terms of family legacy and material prosperity. The promise of mighty offspring and generational blessing echoes the Abrahamic covenant (Genesis 12:2; 22:17). "Wealth and riches are in his house" is an OT statement of material blessing that must be held carefully: the psalm is describing the general trajectory of the God-fearing life, not a guaranteed formula. Job's experience demonstrates that righteousness does not always produce immediate material prosperity. But the wisdom tradition consistently observed that, over the long arc of life, integrity and faithfulness tend to produce stability and blessing. The crucial clause is "his righteousness endures forever" -- this permanent quality is the real wealth of the psalm's portrait.`,
  },
  {
    ref: "v. 4",
    text: "Light dawns in the darkness for the upright; he is gracious, merciful, and righteous.",
    comment: `"Light dawns in the darkness" is a comprehensive image of hope and rescue for those who are in a season of difficulty. The "upright" (yesharim) is one of the key terms in Psalm 111 as well, connecting the two acrostics. The attributes of the God-fearer in verse 4 -- "gracious, merciful, and righteous" -- directly echo the divine attributes of Psalm 111:4 (channun verachum, "gracious and merciful") and 111:3 (tsidqato, "his righteousness"). The God-fearer reflects the character of the God they fear; the attributes of the LORD become the attributes of the LORD's servant. This is the theology of image-bearing restored through covenant relationship.`,
  },
  {
    ref: "v. 5",
    text: "It is well with the man who deals generously and lends; who conducts his affairs with justice.",
    comment: `"It is well" (tov) -- good things come to the person characterized by generosity and justice in economic dealings. "Deals generously and lends" (chonnen umalveh) encompasses both charitable giving (chanan -- from the root of the divine attribute "gracious") and just lending (without exploitative interest, cf. Exodus 22:25; Leviticus 25:35-37). "Conducts his affairs with justice" (yekalkkel devarav bemishpat) extends righteous character into the entire realm of business and commerce. The God-fearer's righteousness is not confined to religious life; it shapes every transaction, every negotiation, every economic relationship.`,
  },
  {
    ref: "vv. 6-8",
    text: "For the righteous will never be moved; he will be remembered forever. He is not afraid of bad news; his heart is firm, trusting in the LORD. His heart is steady; he will not be afraid, until he looks in triumph on his adversaries.",
    comment: `These verses constitute the psalm's most spiritually resonant passage. "Never be moved" (lo' yimmot le'olam) mirrors Psalm 125:1's description of those who trust the LORD as like Mount Zion. "Remembered forever" (le'zecher olam) provides the opposite of the wicked's perishing desire (v. 10) -- the righteous person's memory is permanent. Verse 7 provides the psychological heart of the portrait: "not afraid of bad news" because his heart is firm (nachon -- established, prepared, settled). The firmness is not native toughness but trust-generated stability: "trusting in the LORD" is the cause; "firm heart" is the effect. Verse 8's "until he looks in triumph" suggests not permanent trouble but the eventual vindication that trust sustains the soul to see.`,
  },
  {
    ref: "v. 9",
    text: "He has distributed freely, he has given to the poor; his righteousness endures forever; his horn is exalted in honor.",
    comment: `The central description of the God-fearer's generosity: "distributed freely" (pizar -- scattered broadly, the image of a farmer broadcasting seed widely) and "given to the poor" (natan la'evyonim). Paul quotes this verse in 2 Corinthians 9:9 as the scriptural basis for Christian generosity: giving to the poor is an expression of righteousness that endures forever. "His horn is exalted in honor" -- the horn of the wild ox was the ancient symbol of strength and triumph (cf. Psalm 92:10). The righteous giver is exalted, not diminished, by his generosity. This is the principle of 2 Corinthians 9:6: "Whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully."`,
  },
  {
    ref: "v. 10",
    text: "The wicked man sees it and is angry; he gnashes his teeth and melts away; the desire of the wicked will perish!",
    comment: `The dramatic final contrast. The wicked man observes the God-fearer's blessed life and his response is not conversion but rage -- "gnashes his teeth" (shinav yachraq) is the physical expression of intense frustration and envy (cf. Job 16:9; Psalm 35:16; Acts 7:54 -- the reaction of the Sanhedrin to Stephen's speech). "Melts away" (namas) describes complete dissolution; the wicked man's entire life-project collapses when confronted with the genuine blessedness of the God-fearer. "The desire of the wicked will perish" -- not just his plans or his reputation but his fundamental orientation toward life (ta'avat resha'im -- "the longing/desire of the wicked") will come to nothing. The contrast with "his righteousness endures forever" (v. 9) could not be more absolute.`,
  },
];

const APPLICATIONS = [
  {
    color: GOLD,
    title: "Psalm 111 and 112 Together: God's Character and the God-Fearer's Life",
    body: `Psalms 111 and 112 are designed to be read together, as a diptych: Psalm 111 portraits the LORD, and Psalm 112 portraits the person who fears the LORD. The deliberate parallels between them make the theological argument: the person who fears the God of Psalm 111 will begin to resemble him. Psalm 111 says God is "gracious and merciful"; Psalm 112 says the God-fearer is "gracious, merciful, and righteous." Psalm 111 says God's righteousness endures forever; Psalm 112 says the God-fearer's righteousness endures forever.
<br/><br/>
This twin-psalm structure provides the ground for a specific spiritual practice: reading Psalm 111 to know the God you are to fear, then reading Psalm 112 to see what life looks like when that fear takes root. The question Psalm 112 asks of each reader is: which of these characteristics -- firm heart, generosity, fearlessness before bad news, righteousness that endures -- are present in your life? Where are they absent? What would it take to develop them? And the answer Psalm 111 provides is: the development of these characteristics begins with the fear of the LORD (111:10) and is sustained by delight in his works and his commandments.
<br/><br/>
<em>Devotional practice</em>: Read Psalm 111 one week as your daily psalm, focusing on the character of God. Read Psalm 112 the following week, asking at each verse: does this describe me? Where do I resemble this portrait, and where do I fall short? Bring the shortfalls to prayer, not as self-condemnation, but as honest petition: "Lord, make my heart firm; make me generous; teach me your commandments so I delight in them; increase my fear of you."`,
  },
  {
    color: TEAL,
    title: "He Is Not Afraid of Bad News: A Pastoral Practice for Anxiety",
    body: `Verse 7 -- "He is not afraid of bad news; his heart is firm, trusting in the LORD" -- is one of the most pastorally useful verses in the Psalter for the pervasive anxiety of contemporary life. The psychological precision is remarkable: this verse names not general anxiety but specifically anticipatory anxiety -- the dread of what might come, the "bad news" that has not yet arrived. This is the anxiety that keeps people awake at 3 AM rehearsing worst-case scenarios.
<br/><br/>
The psalm's prescription is not positive thinking or stoic suppression but trust-generated firmness. The heart that is "firm" (nachon) has become firm through sustained, practiced trust (batach) in the LORD. This is not a one-time decision but a trained disposition -- a habit of mind and heart that has been cultivated over time through prayer, Scripture, worship, and the practice of returning the anxious thoughts to God.
<br/><br/>
Paul's Philippians 4:6-7 provides the NT practice: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." The "peace of God that surpasses all understanding" is the NT equivalent of the "firm heart, trusting in the LORD" of Psalm 112:7. Neither is achieved by willpower; both are the fruit of practiced prayer and sustained trust.`,
  },
  {
    color: ROSE,
    title: "He Has Given to the Poor: Psalm 112 and a Theology of Generosity",
    body: `Psalm 112's portrait of the blessed person centrally includes radical generosity: distributing freely, giving to the poor, dealing generously, lending without exploitation, conducting affairs with justice (vv. 5, 9). This is not peripheral to the portrait of the God-fearer but central to it. The person who truly fears the LORD reflects the LORD's own generosity (cf. Psalm 111:5 -- "he provides food for those who fear him") by becoming a conduit of that generosity to others.
<br/><br/>
Paul's use of verse 9 in 2 Corinthians 9 provides the NT theology of generosity rooted in Psalm 112: (1) God is the primary giver (2 Cor. 9:8-10, echoing Psalm 111's portrait of God's provision); (2) the God-fearer reflects this generosity (2 Cor. 9:9 = Psalm 112:9); (3) the result is righteousness that endures forever, not temporary social credit. This means Christian generosity is not charity (which looks down) or duty (which complies reluctantly) but the overflow of the fear of the LORD who himself "gives to the poor."
<br/><br/>
<em>Practical challenge</em>: Psalm 112 describes a pattern of generosity that is habitual and distributed broadly (pizar -- scattered broadly, like seed). What would it look like to develop this kind of habitual, wide-ranging generosity in your own life? Not a single large gift but a settled pattern of giving freely, dealing generously, lending without exploitation? The psalm's portrait is not of a wealthy donor but of a person whose every economic relationship is characterized by the grace they have received.`,
  },
  {
    color: GREEN,
    title: "Generational Faithfulness: The Legacy of the God-Fearer",
    body: `Verse 2 -- "His offspring will be mighty in the land; the generation of the upright will be blessed" -- introduces a dimension of blessing that the individual does not fully live to see: generational legacy. The God-fearer's righteousness extends beyond his own lifetime into his children's and grandchildren's lives. This is not genetic or automatic; it is the natural consequence of a life of faithful modeling, intentional discipleship, and the covenant promises of God (Exodus 20:6 -- "showing steadfast love to thousands of those who love me and keep my commandments").
<br/><br/>
The inverse of verse 2 is the warning of Psalm 109:13 -- "May his posterity be cut off; may his name be blotted out in the second generation!" The fate of the wicked's line and the flourishing of the righteous's line are both generational in scope. This gives the individual's choices eternal weight: they are not just shaping my life but the lives of generations to come.
<br/><br/>
For parents and grandparents, Psalm 112 provides both motivation and method. The motivation: your fear of the LORD and your delight in his commandments will leave a generational legacy. The method: model the characteristics the psalm describes -- firm-hearted trust, generous giving, just dealing, and above all, delight in the commandments. The most powerful thing a parent can do for their child's future is become the person Psalm 112 describes.`,
  },
];

export default function Psalm112Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openTheme, setOpenTheme] = useState<number | null>(null);
  const [openVerse, setOpenVerse] = useState<number | null>(null);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #1a1200 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ background: ACCENT, color: "#fff", fontSize: "0.75rem", fontFamily: "sans-serif", fontWeight: 700, letterSpacing: "0.08em", padding: "0.25rem 0.75rem", borderRadius: "999px", textTransform: "uppercase" }}>Psalm 112</span>
            <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif" }}>Hebrew Acrostic &bull; Companion to Psalm 111 &bull; Book V</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 1rem" }}>
            Blessed Is the Man Who Fears the LORD
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: "680px", margin: "0 0 1.5rem" }}>
            The companion acrostic to Psalm 111: where Psalm 111 portraits the LORD, Psalm 112 portraits the person who fears him -- a life of firm-hearted trust, radical generosity, righteousness that endures forever, and fearlessness before bad news.
          </p>
          <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1.25rem", margin: "0", color: TEXT, fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7 }}>
            &ldquo;He is not afraid of bad news; his heart is firm, trusting in the LORD.&rdquo;
            <span style={{ display: "block", fontSize: "0.85rem", color: MUTED, fontStyle: "normal", marginTop: "0.5rem" }}>&mdash; Psalm 112:7</span>
          </blockquote>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: activeTab === i ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeTab === i ? ACCENT : MUTED, fontWeight: activeTab === i ? 700 : 400, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "sans-serif", fontSize: "0.95rem", transition: "color 0.2s" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.5rem" }}>

        {/* OVERVIEW */}
        {activeTab === 0 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: ACCENT }}>Overview of Psalm 112</h2>
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Psalm 112 is the direct companion and structural mirror of Psalm 111. Both are Hebrew acrostics, each with 22 half-verses beginning with successive letters of the Hebrew alphabet. Where Psalm 111 praises the LORD by cataloguing his works and character (gracious, merciful, righteous, providing food, keeping covenant), Psalm 112 portraits the blessed life of the person who fears the LORD -- and that person turns out to exhibit the same character attributes as the LORD himself.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `This structural parallelism encodes a profound theological argument: the person who fears God begins to resemble God. Psalm 111:4 calls God "gracious and merciful"; Psalm 112:4 says the God-fearer is "gracious, merciful, and righteous." Psalm 111:3 declares God's righteousness endures forever; Psalm 112:3 and 9 apply the identical phrase to the God-fearer's righteousness. Psalm 111:5 shows God providing food; Psalm 112:5 and 9 show the God-fearer giving generously. The image (God-fearer) reflects the original (God).` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The psalm moves from the beatitude (v. 1) through a catalogue of blessings -- generational legacy, material prosperity, righteousness (vv. 2&ndash;3) -- to the character qualities that generate these blessings: light in darkness (v. 4), generosity and justice (vv. 5, 9), firm-hearted fearlessness (vv. 7&ndash;8), and righteousness that endures forever (v. 9). The psalm then closes with the dramatic contrast of the wicked man who sees all this and melts with rage and envy (v. 10).` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `Paul quotes verse 9 in 2 Corinthians 9:9 as the scriptural warrant for Christian generosity: the God-fearer who distributes freely to the poor exercises a righteousness that endures forever. Paul's argument builds on the Psalm 112 portrait of the generous person to encourage the Corinthians' contribution to the Jerusalem collection. The NT audience is invited to inhabit the portrait that the psalm draws.` }} />
            <p style={{ lineHeight: 1.8, color: TEXT, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: `For Christian readers, the person Psalm 112 describes is ultimately Christ -- the one who "greatly delighted in God's commandments" (Isaiah 42:21), who was "gracious, merciful, and righteous" (v. 4), who "distributed freely and gave to the poor" throughout his ministry (Luke 4:18), whose heart was firm in the face of the ultimate bad news (Gethsemane and the cross), and whose righteousness endures forever. The God-fearer of Psalm 112 is the image of the God-man -- and the invitation of Psalm 112 is to participate in that image through faith and the renewing work of the Spirit (2 Corinthians 3:18).` }} />

            {/* Parallel table */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: ACCENT, fontFamily: "sans-serif" }}>Psalm 111 and 112: The Parallel Portrait</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                  <thead>
                    <tr>
                      {["Psalm 111 (the LORD)", "Psalm 112 (the God-fearer)"].map(h => (
                        <th key={h} style={{ textAlign: "left", padding: "0.6rem 0.75rem", borderBottom: `2px solid ${BORDER}`, color: MUTED, fontFamily: "sans-serif", fontWeight: 600, fontSize: "0.8rem" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PARALLEL_TABLE.map((row, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
                        <td style={{ padding: "0.75rem", color: TEAL, fontStyle: "italic" }}>{row.ps111}</td>
                        <td style={{ padding: "0.75rem", color: GOLD, fontStyle: "italic" }}>{row.ps112}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Details */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: ACCENT, fontFamily: "sans-serif" }}>Key Details</h3>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {KEY_DETAILS.map(({ label, value }) => (
                  <div key={label} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "0.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "0.75rem" }}>
                    <span style={{ color: MUTED, fontSize: "0.85rem", fontFamily: "sans-serif", fontWeight: 600 }}>{label}</span>
                    <span style={{ color: TEXT, fontSize: "0.95rem" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: TEXT, fontFamily: "sans-serif" }}>Video Resources</h3>
            {VIDEOS.map((v) => <VideoEmbed key={v.videoId} v={v} />)}
          </div>
        )}

        {/* THEMES */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Major Themes</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each theme to expand the full discussion.</p>
            {THEMES.map((theme, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenTheme(openTheme === i ? null : i)} style={{ width: "100%", background: openTheme === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                    <span style={{ color: TEXT, fontWeight: 600, fontSize: "1rem" }}>{theme.title}</span>
                  </div>
                  <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openTheme === i ? "-" : "+"}</span>
                </button>
                {openTheme === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Verse-by-Verse Commentary</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>Click each verse to expand the commentary.</p>
            {VERSES.map((v, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: "10px", marginBottom: "1rem", overflow: "hidden" }}>
                <button onClick={() => setOpenVerse(openVerse === i ? null : i)} style={{ width: "100%", background: openVerse === i ? CARD : "transparent", border: "none", padding: "1.25rem 1.5rem", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                    <div>
                      <span style={{ color: ACCENT, fontWeight: 700, fontFamily: "sans-serif", fontSize: "0.85rem", display: "block", marginBottom: "0.35rem" }}>{v.ref}</span>
                      <span style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.6 }}>&ldquo;{v.text}&rdquo;</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: "1.25rem", flexShrink: 0 }}>{openVerse === i ? "-" : "+"}</span>
                  </div>
                </button>
                {openVerse === i && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ height: "1rem" }} />
                    <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: v.comment }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: ACCENT }}>Application</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif", fontSize: "0.95rem" }}>How Psalm 112 shapes generosity, fearlessness, and the God-fearer's portrait.</p>
            {APPLICATIONS.map((app, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${app.color}`, borderRadius: "10px", padding: "1.5rem", marginBottom: "1.25rem" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: app.color, marginBottom: "0.75rem", fontFamily: "sans-serif" }}>{app.title}</h3>
                <div style={{ lineHeight: 1.8, color: TEXT }} dangerouslySetInnerHTML={{ __html: app.body }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
