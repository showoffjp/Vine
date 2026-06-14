"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Genealogies",
  "The Reign of David",
  "Bringing Up the Ark",
  "The Davidic Covenant",
  "Preparations for the Temple",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Genealogies",
    heading: "The Genealogies",
    reference: "1 Chronicles 1&ndash;9",
    paragraphs: [
      "The Book of 1 Chronicles opens not with a story but with a sweeping list of names, beginning with a single word: &ldquo;Adam&rdquo; (1:1). To the modern reader these long genealogies can seem dry and impenetrable, but for the people who first received them they were anything but. Written for the community that had returned from exile in Babylon, these nine chapters were a lifeline &mdash; a way of locating a shattered people within the great unbroken story of God&rsquo;s faithfulness stretching all the way back to creation.",
      "The Chronicler traces the line from Adam through Noah, Abraham, Isaac, and Jacob, and then through the twelve tribes of Israel. Particular care is given to the tribe of Judah, from whom the royal line of David springs, and to the tribe of Levi, from whom come the priests who minister at the house of God. These two threads &mdash; king and priest, throne and altar &mdash; will dominate the entire book, for the Chronicler is concerned above all with true worship and the kingdom of God.",
      "Far from being a mere antiquarian record, the genealogies make a profound theological claim: that God has been faithful across every generation, preserving a people for himself through famine and war, through faithfulness and failure alike. Names that would otherwise be forgotten are remembered before God. The returned exiles, uncertain of their place in the world, are reminded that they are heirs of the promises made to Abraham and to David, and that their God does not abandon the work of his hands.",
      "The list is not without its sober moments. We read of Er, whom &ldquo;the Lord put to death&rdquo; for his wickedness (2:3), and of the men of Judah who were unfaithful. Tucked into the genealogy of Judah is the brief, luminous prayer of Jabez, who &ldquo;called upon the God of Israel, saying, Oh that you would bless me and enlarge my border, and that your hand might be with me&rdquo; (4:10) &mdash; and God granted what he asked. Even in a chapter of names, the Chronicler pauses to show that God hears the cry of one who calls on him.",
      "The genealogies climax in chapter 9 with the resettlement of Jerusalem after the exile, listing the priests, the Levites, the gatekeepers, and the temple servants who returned to take up their appointed duties. The point is unmistakable: the story is moving toward worship. All these generations, all these names, have been preserved so that the people of God might gather again around his house and serve him. The roll call of history bends toward the praise of God.",
    ],
  },
  {
    id: "The Reign of David",
    heading: "The Reign of David",
    reference: "1 Chronicles 10&ndash;12",
    paragraphs: [
      "When the narrative proper begins in chapter 10, the Chronicler dispenses with the long account of Saul&rsquo;s reign and David&rsquo;s years as a fugitive that fill the books of Samuel. Saul appears only to die. His end is summarized in a single solemn verdict: &ldquo;Saul died for his breach of faith. He broke faith with the Lord&hellip; and did not keep the command of the Lord&rdquo; (10:13). The throne is cleared in a few verses, and all attention turns to David, the man after God&rsquo;s own heart.",
      "This selective focus reveals the Chronicler&rsquo;s purpose. Writing for a people rebuilding their identity, he holds up David not as a flawed and complicated figure &mdash; the adultery with Bathsheba and the rebellion of Absalom are passed over &mdash; but as the idealized king, the founder of true worship and the pattern of godly rule. David is presented through a priestly lens, the king whose deepest concern is the worship of God and the ordering of the house of the Lord.",
      "All Israel gathers to David at Hebron and anoints him king over the whole nation, &ldquo;according to the word of the Lord by Samuel&rdquo; (11:3). The unity of the people is a recurring theme; again and again the Chronicler emphasizes that &ldquo;all Israel&rdquo; came together to support David, a vision of national unity that the post-exilic community, fractured and diminished, longed to recover. David captures the stronghold of Zion, the city of Jerusalem, and grows greater and greater, &ldquo;for the Lord of hosts was with him&rdquo; (11:9).",
      "The Chronicler delights to record the mighty men who rallied to David &mdash; the warriors who broke through enemy lines to bring him water from the well of Bethlehem, the valiant men of every tribe who came to make him king. He devotes whole chapters to these names, celebrating the way the people freely gave themselves to David&rsquo;s cause &ldquo;with a whole heart&rdquo; (12:38). Here is a portrait of a kingdom united in glad allegiance to the Lord&rsquo;s anointed.",
      "Throughout these chapters David is shown as one who seeks the Lord and acts in dependence on him. The reign that the Chronicler describes is not merely a political achievement but a spiritual one: a king and a people bound together under God, the visible kingdom of God taking shape in the land. It is against this backdrop of unity and devotion that David turns his attention to the one thing still missing from the heart of the nation &mdash; the ark of God, the sign of the Lord&rsquo;s presence among his people.",
    ],
  },
  {
    id: "Bringing Up the Ark",
    heading: "Bringing Up the Ark",
    reference: "1 Chronicles 13&ndash;16",
    paragraphs: [
      "David&rsquo;s first great act as king of a united Israel is to bring the ark of the covenant to Jerusalem. The ark had been neglected through the days of Saul, and David is determined that the symbol of God&rsquo;s presence should stand at the center of national life. &ldquo;Let us bring again the ark of our God to us, for we did not seek it in the days of Saul&rdquo; (13:3). The desire is right and good, but the first attempt ends in disaster.",
      "The ark is placed on a new cart, and as the procession moves, the oxen stumble. Uzzah reaches out his hand to steady the ark, &ldquo;and the anger of the Lord was kindled against Uzzah, and he struck him down because he put out his hand to the ark, and he died there before God&rdquo; (13:10). David is angry and afraid, and the ark is left in the house of Obed-edom for three months &mdash; during which the Lord blesses that household abundantly. The lesson is sobering: God is to be approached on his terms, not ours; holy things require holy reverence.",
      "When David tries again, he does it rightly. He has learned that the ark must be carried by the Levites on their shoulders, as the law of Moses commanded, &ldquo;for because you did not carry it the first time, the Lord our God broke out against us, because we did not seek him according to the rule&rdquo; (15:13). This time the ascent becomes a festival of holy joy. The Levites carry the ark; singers and musicians lead the way with lyres, harps, cymbals, and trumpets; and David himself, clothed in a linen ephod, dances and rejoices before the Lord with all his might.",
      "The Chronicler, with his priestly heart, lingers over the music and the worship. He records the appointment of Asaph and his brothers to minister regularly before the ark, &ldquo;to invoke, to thank, and to praise the Lord, the God of Israel&rdquo; (16:4). On that day David gives a great psalm of thanksgiving into the hand of Asaph: &ldquo;Oh give thanks to the Lord; call upon his name; make known his deeds among the peoples!&rdquo; (16:8). Worship is not an afterthought to the kingdom; it is its very heart.",
      "The bringing up of the ark establishes Jerusalem not merely as a political capital but as the spiritual center of the nation, the place where God has set his presence among his people. David organizes the ongoing ministry of praise so that the worship of the Lord might continue day by day. In this we see the Chronicler&rsquo;s deepest conviction: that a people are truly the people of God only when the worship of God dwells at their center.",
    ],
  },
  {
    id: "The Davidic Covenant",
    heading: "The Davidic Covenant",
    reference: "1 Chronicles 17",
    paragraphs: [
      "With the ark settled in Jerusalem, David is troubled by a holy discontent. &ldquo;I dwell in a house of cedar, but the ark of the covenant of the Lord is under a tent&rdquo; (17:1). He longs to build a permanent house, a temple, for the God who has done so much for him. The prophet Nathan at first encourages the plan, but that night the word of the Lord comes to him with a stunning reversal: David will not build a house for God; instead, God will build a house for David.",
      "The promise that follows is one of the great mountain peaks of the Old Testament. The Lord recounts how he took David from the pasture, from following the sheep, to be prince over his people, and how he has been with him wherever he has gone. Then comes the covenant: &ldquo;I will raise up your offspring after you&hellip; and I will establish his kingdom. He shall build a house for me, and I will establish his throne forever&rdquo; (17:11&ndash;12).",
      "The heart of the promise is a kingdom that will never end: &ldquo;I will confirm him in my house and in my kingdom forever, and his throne shall be established forever&rdquo; (17:14). Here is a divine pledge of an everlasting throne in the line of David &mdash; a word that reaches beyond Solomon, beyond every earthly king of Judah, beyond even the collapse of the monarchy in exile. The covenant with David becomes the seedbed of Israel&rsquo;s messianic hope.",
      "For the Christian reader, this promise finds its fulfillment in Jesus Christ, the son of David, of whom the angel declared, &ldquo;The Lord God will give to him the throne of his father David, and he will reign over the house of Jacob forever, and of his kingdom there will be no end&rdquo; (Luke 1:32&ndash;33). The everlasting throne that David could never secure by human means is established in the risen Christ, whose kingdom truly has no end. The Chronicler&rsquo;s post-exilic readers, kingless and small, are pointed forward to a hope that no exile could destroy.",
      "David&rsquo;s response is not disappointment that he may not build, but worship that overflows. He goes in and sits before the Lord, marveling, &ldquo;Who am I, O Lord God, and what is my house, that you have brought me thus far?&rdquo; (17:16). He receives the promise with humble faith, asking only that God would do as he has spoken, &ldquo;that your name may be established and magnified forever&rdquo; (17:24). The covenant teaches David, and us, that God&rsquo;s grace runs deeper than our plans, and that he gives more than we could ever build for him.",
    ],
  },
  {
    id: "Preparations for the Temple",
    heading: "Preparations for the Temple",
    reference: "1 Chronicles 22&ndash;29",
    paragraphs: [
      "Though David is not permitted to build the temple &mdash; for he has been a man of war and has shed much blood (22:8) &mdash; he refuses to let his exclusion become an excuse for idleness. Instead he pours the final years of his reign into vast preparations so that his son Solomon, young and inexperienced, might have everything ready for the great work. &ldquo;The house that is to be built for the Lord must be exceedingly magnificent&hellip; therefore I will make preparation for it&rdquo; (22:5).",
      "David gathers materials on a staggering scale: great quantities of iron for nails and clamps, bronze beyond weighing, cedar timber without number, and above all gold and silver in immense abundance. He charges Solomon, &ldquo;Arise and work! The Lord be with you&rdquo; (22:16), and he commands the leaders of Israel to help his son, urging them to set their heart and soul to seek the Lord their God and to build the sanctuary.",
      "The Chronicler devotes whole chapters to the ordering of worship that David established for the temple to come. He organizes the Levites for their service, the priests into their divisions, and the musicians for the ministry of song &mdash; the sons of Asaph, Heman, and Jeduthun appointed to prophesy with lyres, harps, and cymbals, giving thanks and praise to the Lord. He arranges the gatekeepers, the treasurers, and the officers, so that the house of God might be served in beauty and good order for generations.",
      "At the end of his life David assembles all Israel and gives his final charge. He sets before them the plans for the temple, which he says came to him &ldquo;by the writing from the hand of the Lord&rdquo; (28:19), and he commissions Solomon publicly: &ldquo;Be strong and courageous and do it. Do not be afraid and do not be dismayed, for the Lord God, even my God, is with you&hellip; until all the work for the service of the house of the Lord is finished&rdquo; (28:20).",
      "Then comes one of the most moving scenes of generous worship in all Scripture. David gives lavishly from his own treasure &mdash; gold and silver beyond measure &mdash; and the leaders and people follow, offering willingly and rejoicing greatly, &ldquo;for with a whole heart they had offered freely to the Lord&rdquo; (29:9). David breaks into a prayer of breathtaking humility: &ldquo;Who am I, and what is my people, that we should be able thus to offer willingly? For all things come from you, and of your own have we given you&rdquo; (29:14). The book closes with Solomon enthroned and David dying &ldquo;in a good old age, full of days, riches, and honor&rdquo; (29:28) &mdash; his life&rsquo;s great longing entrusted into faithful hands.",
    ],
  },
];

const videoItems = [
  { videoId: "O0CWBuKr8I8", title: "BibleProject - Overview - 1 Chronicles" },
  { videoId: "HR7xtMJ0lWE", title: "The Genealogies and the Faithfulness of God in Chronicles" },
  { videoId: "ZJYBwlT9o4c", title: "The Davidic Covenant - An Everlasting Throne Explained" },
  { videoId: "Rdt_Fdpn7lk", title: "David and the Ark of the Covenant - 1 Chronicles Study" },
];

export default function ChristianBookOf1ChroniclesGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of 1 Chronicles
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The story of God&rsquo;s faithfulness retold for a people returned from exile &mdash; the sweeping genealogies from Adam, the reign of David seen through a priestly lens, the bringing up of the ark to Jerusalem, the everlasting covenant with David, and the great preparations for the temple Solomon would build.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
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
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of 1 Chronicles through visual teaching on the genealogies of God&rsquo;s faithfulness, the reign of David, the bringing up of the ark, the everlasting covenant, and the preparations for the temple.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Of Your Own Have We Given You</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            1 Chronicles gathers the scattered names of history into one great testimony of God&rsquo;s faithfulness, and crowns it with the promise of an everlasting throne in the line of David &mdash; fulfilled in Christ. Its enduring call still sounds: to set worship at the center of our lives and to give to God, with a whole heart, out of all that he has first given to us.
          </p>
        </div>
      </main>
    </div>
  );
}
