"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const ACCENT = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface AccordionItem {
  id: string;
  label: string;
  reference: string;
  body: string;
}

interface ThemeCard {
  title: string;
  color: string;
  body: string;
}

const themeCards: ThemeCard[] = [
  {
    title: "The Book of Consolation",
    color: ACCENT,
    body: "Jeremiah 30 opens chapters 30&ndash;33, known as &ldquo;The Book of Consolation&rdquo; or the &ldquo;Little Book of Comfort.&rdquo; Amid the sustained darkness of Jeremiah&rsquo;s warnings, God commands the prophet to write these oracles in a book &mdash; an act of permanence and intentionality that signals something extraordinary is coming. This collection is the concentrated center of hope in all of Jeremiah&rsquo;s prophecy.",
  },
  {
    title: "Writing as an Act of Hope",
    color: GOLD,
    body: "God&rsquo;s command to Jeremiah to &ldquo;write in a book&rdquo; (30:2) is theologically significant. Writing implies permanence, transmission across time, an intention that the word will outlast the moment. In a season of siege, exile, and apparent abandonment, the act of writing down God&rsquo;s promises is itself an act of faith &mdash; a declaration that the words of restoration will still be needed and still be true in generations to come.",
  },
  {
    title: "Jacob&rsquo;s Trouble &mdash; Ultimate Crisis",
    color: ROSE,
    body: "Verse 7 describes a time of distress &ldquo;such as never has been since the nation came to be&rdquo; &mdash; a superlative that points beyond the immediate Babylonian crisis to an eschatological horizon. The phrase &ldquo;the time of Jacob&rsquo;s trouble&rdquo; has become a touchstone in prophetic interpretation for the most acute crisis the covenant people will ever face. The terror is real; yet the verse ends not with destruction but with salvation: &ldquo;yet he shall be saved out of it.&rdquo;",
  },
  {
    title: "The Yoke Broken",
    color: TEAL,
    body: "The image of the yoke (30:8) is central to Jeremiah&rsquo;s entire ministry &mdash; he had worn a literal wooden yoke to dramatize Babylon&rsquo;s coming domination. Now God promises that in the day of restoration that yoke will be snapped. Foreign servitude will end. The people who had been dragged into bondage will serve the LORD their God instead, and David their king &mdash; a promise with unmistakably messianic resonance.",
  },
  {
    title: "David Their King &mdash; Messianic Pointer",
    color: PURPLE,
    body: "Verse 9 announces that the restored people &ldquo;shall serve the LORD their God and David their king, whom I will raise up for them.&rdquo; David was dead for centuries when Jeremiah wrote. This can only be the promise of a Davidic ruler yet to come &mdash; a son of David who will reign over the restored people in an eschatological kingdom. The New Testament identifies this ruler as Jesus Christ, the Son of David who has drawn near to God on our behalf.",
  },
  {
    title: "The Incurable Wound Healed",
    color: GOLD,
    body: "Verses 12&ndash;15 describe Israel&rsquo;s wound as &ldquo;incurable,&rdquo; a wound for which there is &ldquo;no medicine&rdquo; &mdash; language that could belong to a judgment oracle. But the reversal in verses 16&ndash;17 is dramatic: &ldquo;For I will restore health to you, and your wounds I will heal.&rdquo; The very wound that seemed beyond healing becomes the occasion for a divine act of restoration that could only be God&rsquo;s work. Grace arrives precisely where human remedy has run out.",
  },
  {
    title: "The Punisher Punished",
    color: ROSE,
    body: "Verse 16 announces a principle that runs throughout Scripture: &ldquo;all who devour you shall be devoured, and all your foes, every one of them, shall go into captivity; those who plunder you shall be plundered.&rdquo; The nations used as instruments of divine discipline against Israel will themselves face divine judgment for what they have done. Those who exceeded their mandate in oppressing God&rsquo;s people will be held accountable.",
  },
  {
    title: "The Ruler Who Draws Near",
    color: TEAL,
    body: "Verse 21 contains one of the most theologically rich images in the chapter: &ldquo;Their ruler shall be one of themselves; their governor shall come out from their midst; I will make him draw near, and he shall approach me, for who would dare of himself to approach me?&rdquo; This ruler is uniquely authorized to draw near to God &mdash; to approach the divine presence on behalf of the people. The New Testament reader immediately recognizes the fulfillment: Christ, our great High Priest, who draws near to the Father for us.",
  },
  {
    title: "Covenant Renewal",
    color: ACCENT,
    body: "Verse 22 restates the simplest and most elemental form of the covenant: &ldquo;And you shall be my people, and I will be your God.&rdquo; After chapters of covenant-breaking, divine judgment, and the apparent dissolution of the relationship, this formula rings with renewed force. It is the same promise that runs from Genesis through Revelation &mdash; but here it is spoken again on the far side of the exile, as a word of restoration and not merely of original election.",
  },
  {
    title: "Understanding in the Latter Days",
    color: PURPLE,
    body: "The chapter closes with the whirlwind of divine wrath (30:23&ndash;24) &mdash; a passage that would have seemed opaque to its first hearers. But God adds: &ldquo;In the latter days you will understand this.&rdquo; Some of what God is doing in the crisis of the exile cannot be fully grasped in the moment. It requires the vantage point of later revelation, later events, a fuller unfolding of redemptive history, to comprehend what God was doing in the time of Jacob&rsquo;s trouble.",
  },
];

const verseItems: AccordionItem[] = [
  {
    id: "v1",
    label: "Jeremiah 30:1-3 &mdash; Write in a Book",
    reference: "Jeremiah 30:1&ndash;3",
    body: "God commands Jeremiah to write all his words in a book (30:2) &mdash; a command of unusual solemnity. The reason is immediately given: &ldquo;For behold, days are coming, declares the LORD, when I will restore the fortunes of my people, Israel and Judah, says the LORD, and I will bring them back to the land that I gave to their fathers, and they shall take possession of it&rdquo; (30:3). The entire program of the Book of Consolation is announced in these three opening verses: a writing that will outlast the disaster, a promise that encompasses both Israel and Judah, a return to the land that God himself gave them. The word &ldquo;restore the fortunes&rdquo; (&lsquo;shub shebut&rsquo;) is a comprehensive phrase in Hebrew for total reversal of circumstances &mdash; not merely political rescue but full re-establishment of everything that exile had undone. God is not promising a partial improvement; he is promising to undo the exile entirely.",
  },
  {
    id: "v2",
    label: "Jeremiah 30:4-7 &mdash; Terror Yet Saved",
    reference: "Jeremiah 30:4&ndash;7",
    body: "Verses 4&ndash;7 describe the scene of Jacob&rsquo;s trouble with vivid, harrowing imagery. Men are seen with their hands on their sides as a woman in labor, faces turned pale (30:6). The comparison to birth-pangs is a favorite prophetic metaphor for eschatological crisis &mdash; it appears in Isaiah, in Matthew 24, and in Revelation. The distress is superlative: &ldquo;a time of distress for Jacob such as never has been since the nation came to be&rdquo; (30:7). The language reaches beyond any single historical crisis. But the verse does not end with destruction: &ldquo;yet he shall be saved out of it.&rdquo; The &ldquo;yet&rdquo; is one of the great pivots of Scripture &mdash; the most terrifying crisis in the history of the covenant people is also the moment of their definitive salvation. Trouble and salvation are not alternatives; the salvation comes through the trouble.",
  },
  {
    id: "v3",
    label: "Jeremiah 30:8-9 &mdash; The Yoke Broken",
    reference: "Jeremiah 30:8&ndash;9",
    body: "The yoke of Babylon &mdash; which Jeremiah had worn literally as an enacted prophecy &mdash; will be broken (30:8). Foreigners shall no longer make Israel serve. Instead they &ldquo;shall serve the LORD their God and David their king, whom I will raise up for them&rdquo; (30:9). This verse is one of the clearest messianic predictions in Jeremiah. The pairing of &ldquo;the LORD their God&rdquo; and &ldquo;David their king&rdquo; indicates that the reign of this coming Davidic ruler is in some way an expression of the reign of God himself. The freedom from the foreign yoke is not mere political independence; it is transformation of allegiance &mdash; from bondage to Babylon to joyful service of the LORD and his anointed king.",
  },
  {
    id: "v4",
    label: "Jeremiah 30:10-11 &mdash; Fear Not, Jacob",
    reference: "Jeremiah 30:10&ndash;11",
    body: "God addresses Jacob directly: &ldquo;Fear not, O Jacob my servant, declares the LORD, nor be dismayed, O Israel; for behold, I will save you from far away, and your offspring from the land of their captivity&rdquo; (30:10). The oracle of comfort continues: &ldquo;I am with you to save you.&rdquo; The divine presence is not withdrawn in the exile; God accompanies his people into captivity and will bring them back out. But the grace is not without discipline: &ldquo;I will discipline you in just measure, and I will by no means leave you unpunished&rdquo; (30:11). The nations that served as instruments of that discipline will, however, face a different outcome: &ldquo;For I will make a full end of all the nations among whom I scattered you, but of you I will not make a full end.&rdquo; Israel will survive what the nations will not.",
  },
  {
    id: "v5",
    label: "Jeremiah 30:12-15 &mdash; The Incurable Wound",
    reference: "Jeremiah 30:12&ndash;15",
    body: "These verses take the form of a judgment oracle, and they are deliberately dark. &ldquo;Your hurt is incurable, and your wound is grievous&rdquo; (30:12). There is no one to plead Israel&rsquo;s cause; all her lovers have forgotten her. The wound is described with medical language: no medicine, no healing. The cause is given plainly: &ldquo;Because your guilt is great, because your sins are flagrant, I have done these things to you&rdquo; (30:15). The exile is not divine caprice or the victory of Babylon&rsquo;s gods; it is the just consequence of Israel&rsquo;s persistent covenant-breaking. The wound is real and it is deserved. Jeremiah does not soften this. But the fact that the wound is described in these terms &mdash; with human medicine exhausted &mdash; sets up the divine reversal that follows. What is incurable for human physicians is not incurable for God.",
  },
  {
    id: "v6",
    label: "Jeremiah 30:16-17 &mdash; Your Devourers Devoured",
    reference: "Jeremiah 30:16&ndash;17",
    body: "The reversal comes in verse 16: &ldquo;all who devour you shall be devoured, and all your foes, every one of them, shall go into captivity.&rdquo; The instruments of Israel&rsquo;s punishment will themselves be punished. And then the healing promise: &ldquo;For I will restore health to you, and your wounds I will heal, declares the LORD, because they have called you an outcast: &lsquo;It is Zion, for whom no one cares!&rsquo;&rdquo; (30:17). God&rsquo;s motive for healing is in part the insult to his name: those who dismissed Zion as abandoned, as not cared for, will discover that God cares very much. The wound that no human medicine could heal, God heals. The city that the nations wrote off as abandoned and forgotten, God restores. The very shame of Israel becomes the occasion for the display of divine faithfulness.",
  },
  {
    id: "v7",
    label: "Jeremiah 30:18-22 &mdash; The City Rebuilt",
    reference: "Jeremiah 30:18&ndash;22",
    body: "Verse 18 opens a vision of physical, communal, and political restoration: &ldquo;Behold, I will restore the fortunes of the tents of Jacob and have compassion on his dwellings; the city shall be rebuilt on its mound, and the palace shall stand where it used to be.&rdquo; The restoration is concrete &mdash; tents, dwellings, city, palace. Verse 19 adds the texture of communal flourishing: thanksgiving, the sound of laughter, the multiplying of the people. Verse 20 speaks of the community being &ldquo;established before me&rdquo; and the punishment of their oppressors. Then comes verse 21 with its theologically charged image of &ldquo;their ruler&rdquo; who draws near to God &mdash; a figure authorized to approach the divine presence. And the chapter&rsquo;s great covenant formula closes the vision: &ldquo;And you shall be my people, and I will be your God&rdquo; (30:22).",
  },
  {
    id: "v8",
    label: "Jeremiah 30:23-24 &mdash; The Whirlwind, the Latter Days",
    reference: "Jeremiah 30:23&ndash;24",
    body: "The chapter concludes on a note of both severity and eschatological perspective. The whirlwind of divine wrath &ldquo;will burst upon the head of the wicked&rdquo; (30:23). The anger of God &ldquo;will not turn back until he has executed and accomplished the intentions of his mind&rdquo; (30:24). This is sobering &mdash; the restoration promised in the chapter does not come cheaply or without the full working out of divine justice. But the final verse offers a remarkable epistemological promise: &ldquo;In the latter days you will understand this.&rdquo; The full meaning of what God is doing in and through the crisis of the exile will not be apparent to those living through it. It takes the vantage point of the latter days &mdash; the perspective of eschatological fulfillment &mdash; to comprehend the wisdom and purpose of God&rsquo;s seemingly contradictory actions.",
  },
];

const videoItems = [
  { id: "BnKcP7wZmQo", title: "Jeremiah 30: Jacob's Trouble and the Book of Consolation" },
  { id: "DqMtR4vJxNs", title: "The Time of Jacob&rsquo;s Trouble &mdash; Jeremiah 30 Explained" },
  { id: "FpNbY8uBwLk", title: "Yoke Broken &mdash; Jeremiah 30 and Messianic Hope" },
  { id: "HrQcT6xZfVm", title: "I Will Restore Your Health &mdash; Jeremiah 30:17 Study" },
];

const appItems: AccordionItem[] = [
  {
    id: "app1",
    label: "Trusting God in Times of Unprecedented Trouble",
    reference: "Jeremiah 30:7",
    body: "The phrase &ldquo;the time of Jacob&rsquo;s trouble&rdquo; speaks to seasons in which the severity of a crisis seems to exceed anything previously experienced. The church in every age has known such seasons &mdash; persecution, loss, cultural collapse, personal devastation. Jeremiah 30 does not promise that such seasons will not come, or that they will not be as terrible as they seem. It promises something more radical: &ldquo;yet he shall be saved out of it.&rdquo; The word &ldquo;yet&rdquo; is the entire theology of Christian hope in miniature. The severity of the trouble is real; the salvation that comes through it is more real. Trusting God in times of unprecedented trouble means holding onto that &ldquo;yet&rdquo; when everything else is shaking.",
  },
  {
    id: "app2",
    label: "Holding the &ldquo;Yet Saved&rdquo; Amid Crisis",
    reference: "Jeremiah 30:7",
    body: "The structure of verse 7 &mdash; terrible crisis, then &ldquo;yet he shall be saved&rdquo; &mdash; models a particular posture of faith that does not deny the reality of suffering but refuses to let the suffering have the last word. This is not optimism, which is a temperamental disposition toward positive outcomes. It is hope, which is a theologically grounded confidence in a specific promise made by a specific God who has demonstrated his faithfulness across the whole sweep of redemptive history. The Christian practices this posture not by willing away difficulty but by anchoring their reading of the present crisis in the larger story of what God has already done and has promised to do.",
  },
  {
    id: "app3",
    label: "The Promise That Oppressors Will Be Held Accountable",
    reference: "Jeremiah 30:16",
    body: "One of the most pastorally significant dimensions of Jeremiah 30 is the promise that those who devoured and plundered God&rsquo;s people will themselves face divine judgment. This is not a call to vengeance; it is an assurance that injustice will not stand unreckoned. For believers living under oppressive regimes, unjust systems, or personal abuse of power, the declaration of verse 16 is a word of genuine comfort: God sees, God remembers, and God will act. The suffering of his people is not indifferent to him. The nations that exceeded their mandate as instruments of discipline will be held accountable for the excess. Justice belongs to God, and he will accomplish it.",
  },
  {
    id: "app4",
    label: "Receiving Christ as the Ruler Who Draws Near",
    reference: "Jeremiah 30:21",
    body: "The rhetorical question of verse 21 &mdash; &ldquo;for who would dare of himself to approach me?&rdquo; &mdash; acknowledges the unbridgeable gap between sinful humanity and the holy God. No one approaches God on their own terms or by their own merit. But God promises a ruler who will be authorized to make that approach &mdash; one drawn from the people themselves, not an alien lord, who is given the unique authorization to draw near. The New Testament presents Christ as the fulfillment of this promise: he is the Davidic king raised up from among his people (30:9), and he is the ruler uniquely authorized to draw near to God as the great High Priest who intercedes for us within the veil. To receive Christ is to receive the one who draws near to God on our behalf.",
  },
  {
    id: "app5",
    label: "Writing Down God&rsquo;s Promises as an Act of Faith",
    reference: "Jeremiah 30:2",
    body: "God&rsquo;s command to Jeremiah to &ldquo;write in a book&rdquo; all these words of promised restoration has a practical dimension for the Christian life. Writing down God&rsquo;s promises &mdash; in journals, on cards, in margins of Bibles, in letters to ourselves and others &mdash; is itself an act of faith. It declares that these words will still be true and still be needed when the present crisis has passed. It is a counter-act against despair, a small embodied claim that the future God is promising is real enough to be written down and preserved. Many of the church&rsquo;s greatest hymns and confessions were written in seasons of profound suffering as acts of faith in promises not yet fulfilled. Jeremiah&rsquo;s writing is a model for that kind of hope-inscribed-in-ink.",
  },
];

export default function Jeremiah30GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const toggle = (id: string) => setOpenAccordion(openAccordion === id ? null : id);

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "Georgia, serif",
      }}
    >
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Hero Header */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-block",
              background: `${ACCENT}22`,
              color: ACCENT,
              borderRadius: 6,
              padding: "4px 14px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Old Testament Study
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              margin: "0 0 1rem",
              lineHeight: 1.15,
            }}
          >
            Jeremiah 30
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
              color: GOLD,
              fontWeight: 600,
              margin: "0 0 1rem",
              lineHeight: 1.4,
            }}
          >
            The Time of Jacob&rsquo;s Trouble
          </p>
          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.08rem)",
              color: MUTED,
              lineHeight: 1.8,
              margin: 0,
              maxWidth: 720,
            }}
            dangerouslySetInnerHTML={{
              __html:
                "The opening chapter of Jeremiah&rsquo;s &ldquo;Book of Consolation&rdquo; (chapters 30&ndash;33) &mdash; a yoke that will be broken, an incurable wound turned to healing, the promise that David their king will reign, and a covenant formula renewed on the far side of exile: &ldquo;You shall be my people, and I will be your God.&rdquo;",
            }}
          />
        </header>

        {/* Tab Navigation */}
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: "2.5rem",
            borderBottom: `1px solid ${BORDER}`,
            paddingBottom: "1.25rem",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {/* OVERVIEW TAB */}
        {activeTab === "Overview" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 6px" }}>
              Overview of Jeremiah 30
            </h2>
            <div
              style={{
                color: ACCENT,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}
            >
              Jeremiah 30:1&ndash;24
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
              <p
                style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0, color: TEXT }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Jeremiah 30 opens what scholars call &ldquo;The Book of Consolation,&rdquo; or the &ldquo;Little Book of Comfort,&rdquo; encompassing chapters 30&ndash;33. If Jeremiah&rsquo;s ministry as a whole is characterized by relentless warning and heartbroken lament &mdash; he is the weeping prophet, the man of sorrows who spent decades announcing judgment on a people who refused to hear &mdash; then these four chapters are the concentrated center of hope in an otherwise dark book. God commands Jeremiah to write everything in a book (30:2), a directive whose very formality underlines the permanence and importance of what follows. These are words intended to outlast the crisis, to be read again when the time of their fulfillment has arrived.",
                }}
              />
              <p
                style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0, color: MUTED }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter immediately turns to a scenario of extraordinary terror. Jacob is in a distress &ldquo;such as never has been since the nation came to be&rdquo; &mdash; a superlative that reaches beyond the immediate Babylonian siege to the most extreme crisis imaginable for the covenant people. The imagery is visceral: men writhing with their hands on their loins like women in labor, faces turned pale (30:6). The phrase in verse 7, &ldquo;the time of Jacob&rsquo;s trouble,&rdquo; has lodged itself deeply in both Jewish and Christian eschatological imagination. Whatever its full meaning, it names a moment of ultimate extremity for the people of God. And yet the verse does not end with destruction. The pivot &mdash; &ldquo;yet he shall be saved out of it&rdquo; &mdash; is one of the great pivots of prophetic hope.",
                }}
              />
              <p
                style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0, color: MUTED }}
                dangerouslySetInnerHTML={{
                  __html:
                    "What follows is a cascade of reversal. The yoke of foreign oppression will be broken (30:8). The people will serve the LORD their God and David their king (30:9) &mdash; a messianic promise spoken centuries before the birth of Jesus. The incurable wound of 30:12&ndash;15 &mdash; wound so severe that no medicine exists for it, a wound that is the deserved consequence of Israel&rsquo;s faithlessness &mdash; is dramatically reversed in 30:17: &ldquo;For I will restore health to you, and your wounds I will heal.&rdquo; Those who devoured Israel will be devoured (30:16). The city will be rebuilt (30:18). A ruler from their own midst will be given the unique authorization to draw near to God (30:21). The covenant formula &mdash; the simplest and most foundational promise in all of Scripture &mdash; is renewed: &ldquo;You shall be my people, and I will be your God&rdquo; (30:22).",
                }}
              />
              <p
                style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0, color: MUTED }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter closes on a note of divine severity and eschatological patience. The whirlwind of God&rsquo;s wrath will execute his intentions fully (30:23&ndash;24). But God adds a word of epistemological grace: &ldquo;In the latter days you will understand this.&rdquo; The full meaning of what God is doing in the crisis of exile &mdash; and indeed of what the Book of Consolation promises &mdash; will not be apparent to those who live through the immediate catastrophe. It requires the perspective of the latter days, the vantage point of eschatological fulfillment, to comprehend the depth of divine wisdom at work. Jeremiah 30 is, in this sense, a chapter whose complete meaning unfolds across all of redemptive history, finding its fullest expression in Jesus Christ, the Davidic king who broke the ultimate yoke and drew near to God on behalf of his people.",
                }}
              />
              <p
                style={{ fontSize: "1.05rem", lineHeight: 1.85, margin: 0, color: MUTED }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Reading Jeremiah 30 requires holding two truths simultaneously: the terrible reality of the distress described, and the equally certain reality of the salvation promised. Jeremiah does not offer the comfort of men who tell sufferers that things are not as bad as they seem. He acknowledges the severity of the wound, the justice of the judgment, the depth of the trouble. And from within that unflinching honesty, he speaks the word that God has commanded him to write in a book: &ldquo;I will restore your fortunes.&rdquo; This is the shape of all genuine biblical comfort.",
                }}
              />
            </div>

            <div
              style={{
                marginTop: "2.5rem",
                background: CARD,
                border: `1px solid ${ACCENT}44`,
                borderRadius: 12,
                padding: "1.5rem 1.75rem",
              }}
            >
              <h3
                style={{
                  color: ACCENT,
                  fontWeight: 700,
                  margin: "0 0 0.6rem",
                  fontSize: "1.1rem",
                }}
              >
                The Book of Consolation &mdash; Chapters 30&ndash;33
              </h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Jeremiah 30 must be read as the opening movement of a four-chapter symphony of hope. Chapter 31 will add the promise of return from exile, Rachel&rsquo;s weeping comforted, and the New Covenant written on hearts. Chapter 32 will embody the hope in an act of land purchase at the moment of siege. Chapter 33 will add the Branch of righteousness, the restored priesthood, and the unconditional Davidic covenant. Chapter 30 sets the terms: God commands hope to be written down, names the worst imaginable crisis, and pronounces the &ldquo;yet saved&rdquo; that carries the whole.",
                }}
              />
            </div>
          </section>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "Key Themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 6px" }}>
              Key Themes in Jeremiah 30
            </h2>
            <p
              style={{
                color: MUTED,
                fontSize: "1rem",
                lineHeight: 1.75,
                margin: "0 0 2rem",
              }}
            >
              Jeremiah 30 is dense with theological motifs that resonate across the whole of Scripture and find their fullest fulfillment in Jesus Christ and the new covenant age.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {themeCards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${card.color}44`,
                    borderRadius: 10,
                    padding: "1.25rem 1.4rem",
                  }}
                >
                  <h3
                    style={{
                      color: card.color,
                      fontWeight: 700,
                      fontSize: "1rem",
                      margin: "0 0 0.65rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  />
                  <p
                    style={{
                      color: MUTED,
                      fontSize: "0.93rem",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: card.body }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "Verse by Verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 6px" }}>
              Verse by Verse &mdash; Jeremiah 30
            </h2>
            <p
              style={{
                color: MUTED,
                fontSize: "1rem",
                lineHeight: 1.75,
                margin: "0 0 2rem",
              }}
            >
              A close reading of each section of Jeremiah 30, moving through the structure of terror and salvation, judgment and restoration.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {verseItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${openAccordion === item.id ? ACCENT : BORDER}`,
                    borderRadius: 10,
                    overflow: "hidden",
                    transition: "border-color 0.15s",
                  }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1rem 1.25rem",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: TEXT,
                      fontSize: "0.97rem",
                      fontWeight: 600,
                      fontFamily: "inherit",
                      textAlign: "left",
                      gap: 12,
                    }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.label }} />
                    <span
                      style={{
                        color: ACCENT,
                        fontSize: "1.25rem",
                        lineHeight: 1,
                        flexShrink: 0,
                        fontWeight: 400,
                      }}
                    >
                      {openAccordion === item.id ? "-" : "+"}
                    </span>
                  </button>
                  {openAccordion === item.id && (
                    <div style={{ padding: "0 1.25rem 1.25rem" }}>
                      <div
                        style={{
                          color: ACCENT,
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          marginBottom: "0.75rem",
                        }}
                        dangerouslySetInnerHTML={{ __html: item.reference }}
                      />
                      <p
                        style={{
                          color: MUTED,
                          fontSize: "0.97rem",
                          lineHeight: 1.8,
                          margin: 0,
                        }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "Application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 6px" }}>
              Applying Jeremiah 30 Today
            </h2>
            <p
              style={{
                color: MUTED,
                fontSize: "1rem",
                lineHeight: 1.75,
                margin: "0 0 2rem",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Jeremiah 30 speaks to Christians in every age of unprecedented trouble &mdash; those who know what it is to face a crisis that seems to exceed any human remedy, to wait for a salvation that seems impossible, and to hold onto a promise written in a book by a weeping prophet in the darkness of siege.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {appItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${openAccordion === item.id ? GOLD : BORDER}`,
                    borderRadius: 10,
                    overflow: "hidden",
                    transition: "border-color 0.15s",
                  }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1rem 1.25rem",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: TEXT,
                      fontSize: "0.97rem",
                      fontWeight: 600,
                      fontFamily: "inherit",
                      textAlign: "left",
                      gap: 12,
                    }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.label }} />
                    <span
                      style={{
                        color: GOLD,
                        fontSize: "1.25rem",
                        lineHeight: 1,
                        flexShrink: 0,
                        fontWeight: 400,
                      }}
                    >
                      {openAccordion === item.id ? "-" : "+"}
                    </span>
                  </button>
                  {openAccordion === item.id && (
                    <div style={{ padding: "0 1.25rem 1.25rem" }}>
                      <div
                        style={{
                          color: GOLD,
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          marginBottom: "0.75rem",
                        }}
                        dangerouslySetInnerHTML={{ __html: item.reference }}
                      />
                      <p
                        style={{
                          color: MUTED,
                          fontSize: "0.97rem",
                          lineHeight: 1.8,
                          margin: 0,
                        }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gap: "1.5rem",
              }}
            >
              {videoItems.map((v) => (
                <div
                  key={v.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <p
                    style={{
                      color: MUTED,
                      fontSize: 13,
                      lineHeight: 1.55,
                      margin: 0,
                      padding: "12px 16px",
                    }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>
              Video Teaching
            </h2>
            <p
              style={{
                color: MUTED,
                fontSize: "1.05rem",
                lineHeight: 1.8,
                margin: "0 0 2rem",
              }}
            >
              Deepen your study of Jeremiah 30 through these video teachings on Jacob&rsquo;s trouble, the broken yoke, the incurable wound healed, and the messianic promise of David their king.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 24,
              }}
            >
              {videoItems.map((v) => (
                <div
                  key={v.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <p
                    style={{
                      color: MUTED,
                      fontSize: 13,
                      lineHeight: 1.5,
                      margin: 0,
                      padding: "12px 16px",
                    }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer Call-out */}
        <div
          style={{
            marginTop: "3.5rem",
            background: CARD,
            border: `1px solid ${ACCENT}44`,
            borderRadius: 12,
            padding: "1.75rem 2rem",
          }}
        >
          <h3
            style={{
              color: ACCENT,
              fontWeight: 700,
              margin: "0 0 0.75rem",
              fontSize: "1.2rem",
            }}
          >
            Yet He Shall Be Saved Out of It
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "0.97rem" }}
            dangerouslySetInnerHTML={{
              __html:
                "Jeremiah 30 speaks its word of hope into the worst conceivable crisis. The trouble is real, the wound is severe, the judgment is just &mdash; and yet the covenant God who commands that hope be written in a book is not finished with his people. The yoke will be broken. The wound will be healed. David their king will be raised up. The covenant formula will be renewed. And in the latter days &mdash; in the fullness of time, in the coming of Jesus Christ and the consummation of his kingdom &mdash; all of this will be understood for what it truly is: the unstoppable faithfulness of the God who restores fortunes and calls the incurably wounded back to health.",
            }}
          />
        </div>
      </main>
    </div>
  );
}
