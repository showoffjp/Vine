"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Seeking Jonathan's Heir",
  "Mephibosheth's Fear",
  "David's Restoration",
  "The King's Table",
  "Gospel Parallels",
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
    id: "Overview",
    heading: "Overview of 2 Samuel 9",
    reference: "2 Samuel 9:1&ndash;13",
    paragraphs: [
      "Second Samuel 9 is one of the most striking chapters in the entire historical literature of the Old Testament &mdash; a short, complete narrative that functions as both a historical account of David&rsquo;s covenant loyalty and a profound theological parable of grace. The chapter contains no battles, no prophecies, no theophanies. It is simply the story of a king asking a question, finding a crippled man, and insisting on showing him extraordinary kindness. Yet in that simplicity lies some of the deepest truth Scripture offers about the nature of grace and the gospel.",
      "The chapter opens with David asking a question that could easily be overlooked but is in fact the key to everything that follows: &ldquo;Is there still anyone left of the house of Saul, that I may show him kindness for Jonathan&rsquo;s sake?&rdquo; (9:1). The word translated &ldquo;kindness&rdquo; is the great Hebrew word hesed &mdash; the covenant loyalty, the steadfast love, the faithful devotion that binds people together in covenant relationship. David is not merely asking whether any of Saul&rsquo;s descendants are still alive. He is asking whether there is someone to whom he can be the instrument of God&rsquo;s own covenant love.",
      "The answer comes through a servant named Ziba, who reports that Jonathan&rsquo;s son Mephibosheth is alive, crippled in both feet from a childhood fall during the panic that followed the deaths of Saul and Jonathan at Jezreel. David immediately summons him. Mephibosheth comes before the king in evident terror, prostrating himself and calling himself a &ldquo;dead dog.&rdquo; What he expects &mdash; what the political logic of the ancient world would have predicted &mdash; is elimination, not elevation. New dynasties routinely liquidated the remnants of the old ruling house to prevent future challenges to power.",
      "Instead, David grants him a complete restoration: all the land of Saul, the permanent assignment of Ziba and his household to work that land, and most remarkably of all, a permanent place at the king&rsquo;s own table. &ldquo;And Mephibosheth ate at David&rsquo;s table, like one of the king&rsquo;s sons&rdquo; (9:11). The crippled outcast who expected death receives instead the status of a prince. The chapter closes with the quiet observation that &ldquo;Mephibosheth lived in Jerusalem, for he ate continually at the king&rsquo;s table. Now he was lame in both his feet&rdquo; (9:13) &mdash; a detail that sets up the theological point with perfect precision: his lameness did not disqualify him. Grace did not wait for him to be healed first.",
      "The story of Mephibosheth has been recognized by Christian readers across the centuries as one of the most transparent Old Testament pictures of the gospel. David seeking out the helpless, undeserving descendant of an enemy dynasty &mdash; not because of anything Mephibosheth had done but for the sake of a covenant made with his father Jonathan &mdash; mirrors the grace of God in Christ: God seeking out the spiritually crippled, the dead dogs of the fallen human race, and seating them at his table not because of their worthiness but for the sake of the covenant made with his Son.",
    ],
  },
  {
    id: "Seeking Jonathan's Heir",
    heading: "David Seeks Jonathan's Heir",
    reference: "2 Samuel 9:1&ndash;4",
    paragraphs: [
      "The opening question of 2 Samuel 9 is not a casual inquiry; it is the discharge of a solemn covenant obligation. Years earlier, when David and Jonathan had forged their extraordinary friendship in the shadow of Saul&rsquo;s murderous jealousy, they had made covenant together. Jonathan had asked David: &ldquo;Do not cut off your steadfast love from my house forever, when the Lord cuts off every one of the enemies of David from the face of the earth&rdquo; (1 Samuel 20:15). David had sworn. Now, years later and secure on the throne, he remembers that oath and acts on it.",
      "What makes this so remarkable is the timing and the initiative. David does not wait for a surviving member of Saul&rsquo;s house to come to him with a petition. He goes looking. The question &ldquo;Is there still anyone left of the house of Saul?&rdquo; is a search, an active seeking out of the one to whom covenant loyalty is owed. In the political culture of the ancient Near East, this was countercultural in the extreme. The normal expectation when a dynasty changed was that the new king would eliminate potential rivals, not seek them out to bless them.",
      "The phrase &ldquo;for Jonathan&rsquo;s sake&rdquo; is the linchpin of the entire chapter. The kindness David intends to show is not grounded in the merits of Saul&rsquo;s house &mdash; Saul had spent years trying to murder David, and his dynasty had been the source of much of David&rsquo;s suffering. The kindness is grounded entirely in the covenant bond between David and Jonathan. Whatever Mephibosheth deserves or does not deserve in his own right is irrelevant; the covenant with Jonathan creates an obligation that bypasses personal merit entirely. Grace flows from covenant, not from worthiness.",
      "Ziba, a servant of Saul&rsquo;s house, comes forward to answer David&rsquo;s inquiry. He knows of Jonathan&rsquo;s son Mephibosheth and reports not only that he is alive but that he is crippled in both feet &mdash; a detail Ziba offers perhaps expecting it to end David&rsquo;s interest. The man who might otherwise be seen as a political threat is now a cripple living in Lo-debar, a name that in Hebrew suggests a place of no pasture, a barren and desolate location. He is, by every conventional measure, a man of no significance and no prospect.",
      "David&rsquo;s response to this information is immediate and unreserved: &ldquo;Where is he?&rdquo; (9:4). The disability does not dampen his intent. The obscurity does not change his covenant obligation. The desolation of Lo-debar does not make the search seem pointless. David wants to find Mephibosheth because he made a promise to Jonathan, and the condition of the one who would receive that promise&rsquo;s benefit is not a factor in whether the promise will be kept. The seeking of grace does not wait for its objects to become more deserving before going after them.",
    ],
  },
  {
    id: "Mephibosheth's Fear",
    heading: "Mephibosheth: The Dead Dog Before the King",
    reference: "2 Samuel 9:5&ndash;8",
    paragraphs: [
      "When David sends for Mephibosheth and brings him from Lo-debar to Jerusalem, the text is careful to describe Mephibosheth&rsquo;s posture upon arrival: &ldquo;And Mephibosheth the son of Jonathan, son of Saul, came to David and fell on his face and paid homage&rdquo; (9:6). This is the gesture of prostration before a superior &mdash; but in context it carries the weight of absolute vulnerability. Mephibosheth does not know why he has been summoned. He comes to the king of the dynasty that replaced his grandfather, unable to run even if he wanted to, crippled in both feet, at the mercy of whatever verdict David has decided to pronounce over him.",
      "His self-description is one of the most memorable expressions of self-abasement in Scripture: &ldquo;What is your servant, that you should show regard for a dead dog such as I?&rdquo; (9:8). The phrase &ldquo;dead dog&rdquo; in the ancient Semitic world was an expression of complete worthlessness &mdash; the lowest possible self-assessment. A dead dog was not merely useless but offensive, something to be avoided or disposed of. Mephibosheth is saying: I have no claim, no standing, no merit; I am the most despicable and insignificant kind of thing you could ever be asked to attend to. Why would the king of Israel bother with me?",
      "This self-understanding of Mephibosheth&rsquo;s reflects a kind of spiritual realism that grace produces in those who encounter it. He is not falsely modest; he genuinely understands his position. He is the grandson of a man who spent years trying to kill David. His father&rsquo;s kingdom is gone. He is a cripple hidden in a barren place. He has nothing to offer and every reason to expect the worst. The prostration is not a performance &mdash; it is the honest acknowledgment of a man who knows he is utterly at the mercy of another&rsquo;s decision.",
      "The fear that must have accompanied Mephibosheth&rsquo;s journey from Lo-debar to Jerusalem is easy to imagine and impossible to overstate. Every step of the journey toward the king&rsquo;s presence would have been shadowed by the most natural human assumption: power does not seek out the weak in order to bless them. The logic of the world is that the powerful eliminate threats and ignore the useless. Mephibosheth had no framework for what was about to happen to him. He came expecting death and received instead a reversal so complete that it staggers the imagination.",
      "David&rsquo;s first word to the prostrate, terrified Mephibosheth is &ldquo;Do not fear&rdquo; (9:7). This is the word that divine messengers speak when they appear to human beings overwhelmed by the encounter. It is the word of reassurance from the one who holds all power to the one who is completely powerless. &ldquo;Do not fear, for I will show you kindness for the sake of your father Jonathan.&rdquo; The kindness is already decided. The covenant has already determined what will happen. Mephibosheth&rsquo;s fear is met not with a demand that he earn reassurance but with the announcement that grace is already on its way.",
    ],
  },
  {
    id: "David's Restoration",
    heading: "David's Restoration: Land, Servants, and a Seat at the Table",
    reference: "2 Samuel 9:7&ndash;10",
    paragraphs: [
      "The restoration David grants Mephibosheth has three distinct components, each remarkable in its own right. First, David restores to him all the land that had belonged to his grandfather Saul: &ldquo;I will restore to you all the land of Saul your father&rdquo; (9:7). This is far more than a token gesture of goodwill. The land of the Israelite household was the basis of family identity, economic sustenance, and social standing. Saul had been Israel&rsquo;s first king, and his family&rsquo;s estate would have been substantial. To restore it all to Mephibosheth is to reconstitute his inheritance &mdash; to give him back what his grandfather had, as if the story of loss and displacement had not happened.",
      "Second, David assigns Ziba and his household &mdash; fifteen sons and twenty servants &mdash; to work the land on Mephibosheth&rsquo;s behalf. Ziba, who had been a servant of Saul&rsquo;s house, is now redirected to serve the interest of Jonathan&rsquo;s crippled son. The practical effect is that Mephibosheth will have an agricultural estate producing for him even though he himself, as a cripple living at court, cannot work it himself. The restoration is not merely titular; it is functional. David ensures that the inheritance is not just given but maintained.",
      "Third &mdash; and this is the element that elevates the chapter from a story of covenant loyalty to a parable of grace &mdash; David invites Mephibosheth to eat at his table continually. &ldquo;You shall eat at my table always&rdquo; (9:7). This invitation goes beyond the restoration of property and status. To eat at the king&rsquo;s table in the ancient world was to be in the innermost circle of the king&rsquo;s household &mdash; to share in his daily life, his protection, his provision. It was an honor extended to intimates, not to clients or subjects. David is not just being generous to a distant beneficiary; he is making Mephibosheth his companion.",
      "Mephibosheth&rsquo;s response to this threefold restoration is not triumph or satisfaction but renewed prostration and disbelief: &ldquo;What is your servant, that you should show regard for a dead dog such as I?&rdquo; (9:8). The grace is so disproportionate to anything he could have expected that his only response is to repeat his own unworthiness. This is the appropriate response to grace that exceeds all categories of merit &mdash; not to explain or justify why one deserves it, but to acknowledge that one does not, and to receive it with the astonishment it demands.",
      "The assignment of Ziba as steward of Mephibosheth&rsquo;s estate is formalized in verses 9&ndash;10. David summons Ziba, lays out the arrangement with specific clarity &mdash; work the land, bring in the produce, provide for Mephibosheth&rsquo;s household &mdash; and Ziba acknowledges the command. The details ground the restoration in practical reality. This is not a ceremonial gesture but a durable, working arrangement. Grace, in the biblical understanding, is not merely sentiment; it creates structures, makes practical provision, and ensures that what has been promised is sustained over time.",
    ],
  },
  {
    id: "The King's Table",
    heading: "Eating at the King's Table Like One of the King's Sons",
    reference: "2 Samuel 9:11&ndash;13",
    paragraphs: [
      "The closing verses of 2 Samuel 9 return three times to the image of Mephibosheth eating at the king&rsquo;s table, as if the narrator wants to be sure the reader lingers on this detail and does not rush past it. &ldquo;So Mephibosheth ate at David&rsquo;s table, like one of the king&rsquo;s sons&rdquo; (9:11). The comparison is precise: not like an honored guest, not like a dependent ward, but like one of the king&rsquo;s own sons. The crippled grandson of David&rsquo;s enemy is given the standing and the daily experience of a royal child.",
      "The image of the table in the biblical world carries enormous theological and social weight. To share a meal was to share life. The table was the place of covenant, the place where relationships were enacted and confirmed. When God describes his ultimate blessing for his people, he does so in the language of the table: the messianic banquet, the feast prepared for those who love him. The Psalms describe the table spread before enemies (Psalm 23:5); the wisdom tradition invites the simple to the table of Lady Wisdom (Proverbs 9:1&ndash;5). The table is the place where belonging is made visible and enacted every day.",
      "Mephibosheth&rsquo;s lameness is mentioned again at the end of the chapter: &ldquo;Now he was lame in both his feet&rdquo; (9:13). The detail is placed with deliberate care. He is not healed before he eats at the table. His disability does not disqualify him from the king&rsquo;s household. He comes to the table as he is &mdash; crippled, a grandson of the old enemy dynasty, a man who had been hiding in a desolate place &mdash; and he is received not despite these things but without those things ever being raised as objections. Grace at the king&rsquo;s table does not require the lame to walk before they sit down to eat.",
      "There is a beautiful irony in the image as well. The great feasts of David&rsquo;s table would have been surrounded by the sons of David, by military commanders, by officials of the court. And in the midst of them, day after day, would have sat this man &mdash; lame in both feet, with no credentials of power or accomplishment, there only because of a promise David had made to his father. Anyone who knew the story would have known why he was there. And perhaps that was precisely the point: the table of the king was to include, visibly and permanently, the one whose only claim to a seat was covenant grace.",
      "The description that Mephibosheth &ldquo;ate continually at the king&rsquo;s table&rdquo; (9:13) is not the description of a one-time event but of a permanent state. Every day Mephibosheth ate with the king. Every meal was a fresh enactment of grace. The covenant that had been made with Jonathan was not discharged in a single act of kindness but was maintained meal by meal, day by day, for the rest of Mephibosheth&rsquo;s life in Jerusalem. Steadfast love, in the biblical vision, is not a transaction but a way of life &mdash; a continual, daily, inexhaustible provision from one who has both the power and the will to give it.",
    ],
  },
  {
    id: "Gospel Parallels",
    heading: "Gospel Parallels: Mephibosheth and the Grace of God",
    reference: "2 Samuel 9:1&ndash;13",
    paragraphs: [
      "The story of Mephibosheth has been called &ldquo;the gospel in miniature,&rdquo; and the description is apt. Nearly every element of the narrative maps with extraordinary precision onto the structure of the gospel of grace. The parallels are not forced or invented by later interpreters; they arise naturally from the text itself and illuminate both the Old Testament story and the New Testament proclamation from within.",
      "Consider first the position of Mephibosheth before David&rsquo;s grace reaches him. He is lame &mdash; unable to help himself. He is in Lo-debar &mdash; a place of barrenness, cut off from the center of life in Israel. He is of a dynasty that was in conflict with David &mdash; an enemy household, not a friend. He is, by his own confession, a &ldquo;dead dog.&rdquo; This is the biblical portrait of the human condition before grace: spiritually crippled, dwelling in the barrenness of a life cut off from God, children of Adam who are in their natural state not friends of God but estranged from him. Paul describes it with similar directness: &ldquo;God shows his love for us in that while we were still sinners, Christ died for us&rdquo; (Romans 5:8).",
      "Consider next the initiative of grace. David does not wait for Mephibosheth to find his way to Jerusalem and petition for mercy. David goes looking for him. He asks the question, he finds the servant who knows where Mephibosheth is, and he sends for him. Grace takes the initiative. It crosses the distance. It goes to Lo-debar. In the gospel, this is the incarnation &mdash; God himself coming to find the lost, the seeking shepherd who leaves the ninety-nine to go after the one who is gone, the father who runs to meet the returning son while he is still a great way off. The one who has the power does not wait for the powerless to come to him.",
      "Consider the ground of the grace. David does not show kindness to Mephibosheth because of anything Mephibosheth has done or can do. The ground is entirely in the covenant made with Jonathan &mdash; a prior relationship, a prior promise, a prior love. In the gospel, the ground of God&rsquo;s grace toward sinners is not anything found in the sinner but the eternal covenant love of God for his own &mdash; expressed most fully in the covenant sealed by the blood of Christ. We are received not on the basis of our merit but &ldquo;for the sake of&rdquo; another, just as Mephibosheth is received for the sake of Jonathan.",
      "Consider finally the nature of what Mephibosheth receives. He is not merely forgiven and sent away in peace. He is not merely given enough to survive. He is given an inheritance, a household, and a permanent seat at the king&rsquo;s table. He is treated like one of the king&rsquo;s sons. This is the full scope of what the gospel declares for those who are received into God&rsquo;s grace: not merely pardon but adoption, not merely life but inheritance, not merely rescue but a permanent place at the table of the Father. &ldquo;See what kind of love the Father has given to us, that we should be called children of God; and so we are&rdquo; (1 John 3:1). The lame man eating at the king&rsquo;s table &mdash; crippled still, unhealed, and yet beloved &mdash; is the picture of every believer who comes to the Lord&rsquo;s Table.",
    ],
  },
];

const videoItems = [
  { videoId: "Kp3mRvT9aXq", title: "2 Samuel 9 - Mephibosheth and the Grace of David" },
  { videoId: "Hn7dLcY4bRs", title: "The Gospel in 2 Samuel 9 - Covenant Kindness Explained" },
  { videoId: "Wq2xNmG3cTw", title: "David and Mephibosheth - A Picture of Grace Sermon" },
  { videoId: "Rp5vBnK8dKj", title: "Hesed - Covenant Love in 2 Samuel 9 Bible Study" },
];

export default function TwoSamuelNineGuidePage() {
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
            2 Samuel 9 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            David asks if any of Saul&rsquo;s house remain to whom he can show &ldquo;the kindness of God&rdquo; for Jonathan&rsquo;s sake &mdash; and finds Mephibosheth, crippled and hiding in Lo-debar, to whom he restores all the land of Saul and grants a permanent place at the king&rsquo;s table like one of his own sons.
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

        {currentSection && activeTab !== "Videos" && (
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
              Deepen your study of 2 Samuel 9 through these video teachings on David&rsquo;s covenant kindness to Mephibosheth, the meaning of hesed, the gospel parallels in the story, and the picture of grace in the king&rsquo;s invitation to eat at his table.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>For the Sake of Your Father Jonathan</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Second Samuel 9 is the gospel in the language of covenant loyalty: a king who goes looking for one who has no claim, a crippled man who expected death and received instead a seat at the royal table &mdash; not because of what he had done but for the sake of another. The grace David showed Mephibosheth mirrors the grace God shows us in Christ: we come lame, from Lo-debar, expecting judgment, and are called instead to eat at the Father&rsquo;s table like one of his sons.
          </p>
        </div>
      </main>
    </div>
  );
}
