"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"] as const;
type Tab = (typeof TABS)[number];
const TAB_LABELS: Record<Tab, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const videoItems = [
  { id: "VkJpN3oBqWm", title: "Malachi 2: The Covenant of Levi and Marriage Fidelity" },
  { id: "YhBrN7tUwPs", title: "God Hates Divorce - Malachi 2:16 in Context" },
  { id: "TwMcQ5xKfLg", title: "The Wife of Your Youth - Malachi 2 Study" },
  { id: "ZcNpR4vJuHd", title: "Where Is the God of Justice? - Malachi 2:17" },
];

const OVERVIEW_PARAS = [
  "Malachi 2 is the most textured chapter in the book &mdash; a chapter in which the prophet moves from the specialized indictment of a priestly class to the universal human experience of covenant faithfulness and betrayal in marriage. The two disputes of the chapter are not unrelated; they are expressions of a single underlying diagnosis. The priests have broken their covenant with God; the men of Judah have broken their covenants with their wives. Both betrayals flow from the same source: a community that no longer takes its covenant commitments seriously, whether those commitments are to the LORD or to the people bound to them by the LORD's witness.",
  "The chapter opens (2:1-3) where chapter 1 left off: with the priests. But the tone sharpens. In chapter 1, God demanded better offerings. Now he threatens consequences: if the priests do not give glory to his name, he will send the curse among them &mdash; and, in one of the most startling images in the Old Testament, will &ldquo;spread dung on your faces, the dung of your offerings, and you shall be taken away with it.&rdquo; The image is drawn from the sacrificial system itself: the dung of the sacrificial animals was waste material that had to be removed from the altar precinct and taken outside the camp (Leviticus 4:11-12; 8:17; 16:27). To have one's face smeared with this material was not merely humiliation but a kind of reverse-consecration: the priests who were meant to handle holy things would themselves be treated as refuse.",
  "The contrast that motivates the warning is drawn in 2:4-7: the original covenant God made with Levi. The picture of Levi in this passage is an idealized portrait of priestly vocation as it was meant to be: walking with God in peace and uprightness, true instruction in the mouth, no wrong on the lips, turning many from iniquity, being a messenger of the LORD of hosts. This is the standard from which the present priests have catastrophically fallen. The description of Levi is not historical reminiscence merely; it is a normative statement about what the priestly office is. The lips of a priest should guard knowledge; people should seek instruction from his mouth. The priest who does not teach truly is not merely inadequate; he is a betrayal of the institution's reason for existence.",
  "Verses 8-9 apply the standard to the present: the priests have turned aside from the way, caused many to stumble by their instruction, and corrupted the covenant with Levi. The consequence is that God has made them contemptible before all the people &mdash; the same people they were meant to serve. There is a painful irony here: the priests who sought to maintain their social position by minimizing the demands of worship have instead destroyed the very authority that position depended on. Their compromise has not protected them; it has exposed them.",
  "The second half of the chapter pivots to marriage, beginning with a broadening question in verse 10: &ldquo;Have we not all one Father? Has not one God created us? Why then are we faithless to one another, profaning the covenant of our fathers?&rdquo; The transition is via the concept of covenant: just as Israel has a single covenant LORD who is Father and Creator of all, the community's members have obligations of covenant faithfulness to one another. The specific faithlessness Malachi addresses in 2:11-12 is the intermarriage with foreign women who worship foreign gods &mdash; a concern also addressed in Ezra and Nehemiah, suggesting this was a pressing issue in the post-exilic community.",
  "But the deepest blow comes in 2:13-16. The men who have divorced their Israelite wives to marry foreign women have been covering the altar with tears &mdash; the tears of the abandoned women who come to God with their grief. God refuses their offerings. And then comes the statement that has made this passage famous: &ldquo;For I hate divorce, says the LORD, the God of Israel, and covering one's garment with violence, says the LORD of hosts.&rdquo; The word for &ldquo;hate&rdquo; here is the same word used in 1:3 for God's relationship to Esau: a relational distancing, a refusal of acceptance. God refuses to be neutral about the destruction of marriages made under his witness. The chapter closes (2:17) with the third disputation in the book: &ldquo;You have wearied the LORD with your words.&rdquo; The specific wearying is a pair of cynical theological claims: either God approves of evildoers (since they seem to prosper), or there is no God of justice at all. This sets up the entire argument of chapter 3.",
];

const THEMES_DATA = [
  {
    id: "levi",
    color: TEAL,
    title: "The Original Covenant of Levi and Its Corruption",
    body: "Malachi 2:4-7 presents the Levitical priesthood at its best: a covenant of life and peace, grounded in fear and awe of God, characterized by true instruction, and resulting in many turning from iniquity. The phrase &ldquo;the law of truth was in his mouth&rdquo; is particularly striking &mdash; the Hebrew &ldquo;emet&rdquo; (truth, faithfulness, reliability) was the quality that made priestly instruction trustworthy. People could go to the priest and receive a word that was genuinely oriented toward God's reality rather than toward what the questioner wanted to hear or what the priest found convenient to say. When this quality disappears from the office, the whole institution collapses into a kind of credentialed corruption: people with authority but without integrity, wielding the language of the sacred in the service of self-interest.",
  },
  {
    id: "messenger",
    color: GOLD,
    title: "The Messenger Ideal",
    body: "Verse 7 contains one of the most compressed and demanding descriptions of the priestly vocation in the Old Testament: &ldquo;For the lips of a priest should guard knowledge, and people should seek instruction from his mouth, for he is the messenger of the LORD of hosts.&rdquo; The word &ldquo;messenger&rdquo; here (malak) is the same word as the prophet's name and the same word used in 3:1 for the forerunner God will send. The priest, at his best, is a kind of prophet: one through whom God's word comes to the people with accuracy and authority. The specific function identified &mdash; guarding knowledge, providing instruction &mdash; reflects the teaching role of the Levites throughout the Old Testament (Deuteronomy 33:10; Nehemiah 8:7-9; 2 Chronicles 17:7-9). The failure of this teaching function &mdash; described in 2:8 as causing many to stumble by instruction &mdash; is the most serious indictment: a priest who misleads through his teaching does more damage than a priest who merely offers blemished animals.",
  },
  {
    id: "dung",
    color: ROSE,
    title: "Dung on the Priests' Faces: Not Metaphor",
    body: "The image of 2:3 &mdash; &ldquo;I will rebuke your offspring, and spread dung on your faces, the dung of your offerings, and you shall be taken away with it&rdquo; &mdash; is deliberately and shockingly concrete. Interpreters sometimes soften this to metaphor, but the text intends the physical specificity. The dung of sacrificial animals was waste material removed from the altar and taken outside the camp to be burned (Leviticus 4:11-12; 8:17). It was the part of the offering that could not approach the holy place. To be smeared with it and &ldquo;taken away with it&rdquo; is to be treated as the waste material of the very system the priests administered &mdash; the ultimate reversal of priestly consecration. The consecration ceremony involved anointing with oil and blood; the un-consecration threatened here involves dung and removal outside the camp. The severity of the image reflects the severity of the failure: those who handle holy things with contempt will be made to experience contempt in the most visceral way.",
  },
  {
    id: "onefather",
    color: GREEN,
    title: "Faithfulness to the Wife of Your Youth",
    body: "The phrase &ldquo;the wife of your youth&rdquo; (2:14-15) is one of the most moving in Malachi. It evokes the marriage made in the early years &mdash; the covenant partner who shared the formative experiences, who was present before prosperity or social position, who was bound by oath and witness. The men of Judah who have divorced these women to marry foreign women who worship foreign gods have committed a double betrayal: against their wives (to whom they owe the covenant faithfulness sworn under God's witness) and against God (whose witness they have flouted). The specific mention that &ldquo;the LORD was witness between you and the wife of your youth&rdquo; (2:14) establishes the theological stakes: this is not merely a social or relational matter. God was the third party in the marriage covenant, and the divorce is therefore a violation of his witness as much as it is a violation of the wife's trust.",
  },
  {
    id: "divorce",
    color: PURPLE,
    title: "God Hates Divorce and Covenant Betrayal",
    body: "The statement of 2:16 &mdash; &ldquo;For I hate divorce, says the LORD&rdquo; &mdash; is one of the most discussed in the book. The Hebrew is textually disputed; some manuscripts and translations read &ldquo;if he hates and divorces&rdquo; (referring to the husband) rather than &ldquo;I hate divorce&rdquo; (referring to God). But the dominant translation tradition and the interpretive context support the reading &ldquo;God hates divorce&rdquo; &mdash; and the context is essential for understanding what this means. Malachi is not issuing a law about divorce; he is making a covenantal argument. The same dynamic of covenant betrayal that characterizes Israel's relationship with God (breaking oaths, treating covenant obligations as expendable, pursuing what seems advantageous at the expense of what was promised) is reproduced in the men's treatment of their wives. God's hatred of divorce is not legalism; it is the expression of a God who takes covenant seriously in every sphere, because covenant is the fundamental structure of his relationship with both the world and his people.",
  },
  {
    id: "justice",
    color: TEAL,
    title: "Where Is the God of Justice? Cynicism and Its Correction",
    body: "The closing disputation of chapter 2 (verse 17) identifies the deepest form of wearying God: not the blemished offerings or the broken marriages (though those are serious) but the theological conclusions the community has drawn from their experience of divine silence. &ldquo;Everyone who does evil is good in the sight of the LORD, and he delights in them&rdquo; is the claim of people who have watched the wicked prosper and concluded that God either approves of wickedness or is indifferent to it. &ldquo;Where is the God of justice?&rdquo; is the question of people who have stopped expecting the moral order to be upheld. Both claims are forms of the same error: projecting the apparent silence of God into a theological conclusion about God's character or existence. Malachi's answer, developed in chapter 3, is not a philosophical argument but a prophetic announcement: the God of justice is coming, and coming sooner than expected &mdash; but his coming will not be the comfortable vindication the cynics imagined.",
  },
];

const VERSE_DATA = [
  {
    id: "v1",
    ref: "Malachi 2:1-3",
    heading: "Warning to Priests &mdash; The Curse &mdash; Dung on Faces",
    body: "The chapter opens in mid-argument, continuing the second disputation begun at 1:6. The address is formal and solemn: &ldquo;And now, O priests, this command is for you.&rdquo; The command is conditional: &ldquo;If you will not listen, if you will not take it to heart to give honor to my name, says the LORD of hosts, then I will send the curse upon you and I will curse your blessings.&rdquo; Two things are noteworthy. First, the conditionality: the priests still have the option of responding, of returning. This is not a finalized judgment but a warning with space for repentance. Second, the curse on blessings: the priestly blessing (Numbers 6:22-27 &mdash; &ldquo;The LORD bless you and keep you...&rdquo;) was one of the most sacred acts of the priestly office. To have that blessing itself turned into a curse is the ultimate reversal of the priest's function. The specific image of 2:3 &mdash; dung spread on faces, removed with the ritual waste &mdash; is the embodiment of the curse: the priests will be treated as waste in the very system they have corrupted. The phrase &ldquo;Already I have rebuked your offspring&rdquo; (some translations read &ldquo;arm&rdquo; rather than &ldquo;offspring&rdquo; &mdash; the text is debated) may refer to a current experience of reduced fertility or productivity as a sign of what the full curse will bring.",
  },
  {
    id: "v2",
    ref: "Malachi 2:4-7",
    heading: "The Covenant of Levi &mdash; What It Was Meant to Be",
    body: "Verses 4-7 are among the most elevated in Malachi &mdash; a description of ideal priestly vocation that reads almost as a lament for what has been lost. The &ldquo;covenant with Levi&rdquo; is not explicitly legislated in the Pentateuch as a single document (unlike the Aaronic priesthood of Leviticus 8-9), but it is referred to in Jeremiah 33:21 and Numbers 25:12-13 (the covenant of peace and perpetual priesthood with Phinehas). The content of the covenant is given in verse 5: life and peace were given to Levi, and fear was the Levites' response &mdash; they revered God and stood in awe of his name. The behavioral outworking is described in verse 6 in four parallel phrases: true instruction in the mouth, no wrong on the lips, walking with God in peace and uprightness, turning many from iniquity. Each of these represents a dimension of the priestly vocation at its best. &ldquo;Turning many from iniquity&rdquo; is particularly striking: the ideal priest is not merely a ritual technician but a moral and spiritual leader who moves people toward God and away from destructive paths. The summary of verse 7 &mdash; &ldquo;the lips of a priest should guard knowledge&rdquo; &mdash; captures the entire teaching role of the priestly office.",
  },
  {
    id: "v3",
    ref: "Malachi 2:8-9",
    heading: "How the Priests Have Fallen Short",
    body: "The contrast with the Levitical ideal is drawn with precision: &ldquo;But you have turned aside from the way. You have caused many to stumble by your instruction. You have corrupted the covenant of Levi, says the LORD of hosts.&rdquo; Three specific failures correspond to the three positive characteristics of 2:6: where Levi walked in the right way, the present priests have turned aside from it; where Levi offered true instruction, the present priests have given instruction that caused stumbling; where Levi was faithful to the covenant, the present priests have corrupted it. The consequence in verse 9 is that God has &ldquo;made you despised and abased before all the people.&rdquo; The note about partiality in instruction &mdash; &ldquo;inasmuch as you do not keep my ways but show partiality in your instruction&rdquo; &mdash; adds a specific dimension of the corruption: the priests are not merely ignorant but biased, teaching different things to different people based on social advantage rather than truth. This is the corruption of the teaching office at its most fundamental: using the authority of truth to serve the purposes of power.",
  },
  {
    id: "v4",
    ref: "Malachi 2:10-12",
    heading: "One Father, One God &mdash; Breaking Faith &mdash; Marrying Foreign Women",
    body: "The pivot to marriage in verse 10 is introduced by a rhetorical question that functions as a bridge between the two sections: &ldquo;Have we not all one Father? Has not one God created us? Why then are we faithless to one another, profaning the covenant of our fathers?&rdquo; The logic runs from theology to ethics: if the community shares one divine Father and Creator, then their obligations to one another are grounded in that shared relationship. To be faithless to one another is to act as if the common Father does not bind them together. The specific faithlessness described in 2:11 is Judah's &ldquo;abomination&rdquo; of marrying the daughter of a foreign god &mdash; that is, a woman whose religious identity is bound to the worship of foreign deities. The concern is not racial purity (Malachi nowhere shows interest in ethnicity) but religious fidelity: marriage to worshipers of other gods was the mechanism by which foreign worship entered Israel, as Solomon's marriages dramatically illustrated (1 Kings 11:1-8). Verse 12 declares that the LORD will cut off from the tents of Jacob whoever does this, &ldquo;however alert he is &mdash; and whoever brings an offering to the LORD of hosts.&rdquo; The religious observance of such a person cannot compensate for the covenantal violation.",
  },
  {
    id: "v5",
    ref: "Malachi 2:13-16",
    heading: "Covering the Altar with Tears &mdash; God Was Witness &mdash; The Wife of Your Youth &mdash; God Hates Divorce &mdash; Guard Your Spirit",
    body: "Verses 13-16 are among the most emotionally intense in Malachi. The problem described in verse 13 is that the men who have divorced their Israelite wives and married foreign women have been coming to the altar weeping &mdash; &ldquo;you cover the LORD's altar with tears, with weeping and groaning because he no longer regards the offering or accepts it with favor from your hand.&rdquo; The tears are not their own; the phrase most naturally refers to the tears of the women who have been divorced and who come to God with their grief (the pronoun is ambiguous in Hebrew but the context supports this reading). God refuses the offerings of these men because of what they have done. The argument in verse 14 is legal and covenantal: God was the witness (a formal legal term for the one who oversees a binding agreement) between the man and his wife at the time of their marriage. The wife is described in terms of deep relationship: she is &ldquo;your companion and your wife by covenant.&rdquo; The term &ldquo;companion&rdquo; (Hebrew: alluph) suggests an intimate, trusted partner &mdash; the kind of closeness that belongs to a lifelong shared history. Verse 15 is textually complex and disputed, but the thrust is clear: God seeks godly offspring from the marriage covenant, and the pattern of faithfulness within marriage is the condition for that. The exhortation &ldquo;guard yourselves in your spirit, and let none of you be faithless to the wife of your youth&rdquo; is both pastoral and demanding. The statement of verse 16 &mdash; &ldquo;for I hate divorce, says the LORD, the God of Israel&rdquo; &mdash; functions as the theological ground for the whole passage: God's hatred of divorce is not prudishness but the logical consequence of taking covenant seriously as the structure of reality.",
  },
  {
    id: "v6",
    ref: "Malachi 2:17",
    heading: "You Have Wearied the LORD &mdash; Where Is the God of Justice?",
    body: "The final verse of chapter 2 introduces the third disputation of the book, which will extend into chapter 3. The verb translated &ldquo;wearied&rdquo; is the same used in Isaiah 43:24 (where God says Israel has &ldquo;wearied&rdquo; him with her sins) and suggests not mere annoyance but the exhaustion of a relationship partner who has endured too much of a particular behavior. The specific words that have wearied God are theological in character: &ldquo;Everyone who does evil is good in the sight of the LORD, and he delights in them&rdquo; is the claim of people who have observed the prosperity of the wicked and drawn a theological conclusion about God's preferences. &ldquo;Where is the God of justice?&rdquo; is the lament of people who have stopped expecting God to act and have begun to question whether he exists as a moral agent at all. Both statements are forms of the same spiritual crisis: the experience of apparent divine inaction has produced a collapse of theological conviction. The answer that Malachi will give in chapter 3 is not a philosophical defense of divine justice but a prophetic announcement: the God of justice is coming, and the community's question will be answered not by argument but by encounter.",
  },
];

const APPLICATION_PARAS = [
  "Malachi 2 addresses two of the most formative institutions in human life &mdash; the religious office and the marriage covenant &mdash; and shows how the same underlying failure corrupts both. The failure is covenant indifference: the gradual displacement of binding, witnessed, unconditional commitment by a pragmatic calculation of benefit and cost. When the priest begins to ask what is the minimum that will satisfy, rather than what would honor the God in whose presence he stands, the Levitical covenant is already being hollowed out. When the husband begins to ask whether a newer relationship might serve his interests better than the one he made under God's witness, the marriage covenant is already at risk. The two failures are not coincidentally adjacent in the text; they are the same disease in two different spheres.",
  "The picture of Levi in 2:4-7 offers a corrective vision for all who hold any form of teaching or leadership office in the church. True instruction in the mouth, no wrong on the lips, walking with God in peace, turning many from iniquity: this is the standard. The corruption described in 2:8 &mdash; partiality in instruction, causing many to stumble &mdash; is not theoretical. It is the natural drift of every institution under social pressure: the teacher begins to shape the message to what audiences want to hear, or to what powerful people want validated, rather than to what is true. The antidote Malachi implies is the recovery of a primary orientation toward God rather than audience: the priest guards knowledge because he stands before God, not primarily before the community.",
  "Taking the marriage covenant seriously as a spiritual matter is one of the most counter-cultural applications of Malachi 2. In a society that treats marriage as a contract between individuals, revocable when the terms no longer serve the parties' mutual interests, Malachi's insistence that &ldquo;the LORD was witness&rdquo; introduces a third party who does not withdraw when the covenant becomes difficult. The application is not a rigid or mechanical rule about divorce but a framework for understanding what is at stake: marriage is not a private arrangement between two individuals but a covenant made under divine witness, which means its dissolution involves not merely the two parties but the one who witnessed the original commitment. This is not meant to burden those in genuinely destructive or abusive situations; the pastoral tradition has always recognized that covenant obligations can be voided by extreme betrayal. But it is meant to prevent the casual treatment of marriage as merely convenient.",
  "Recognizing how our covenant faithfulness to people reflects our relationship with God is perhaps the deepest application of Malachi 2. The book consistently shows that liturgical faithfulness and relational faithfulness are not separable: the man who covers the altar with offerings while covering the altar with the tears of his abandoned wife is not worshiping. God will not receive the offerings of people who are simultaneously breaking covenant with those he has bound them to. This is not because relational faithfulness earns worship, but because the same covenantal reality that structures the relationship with God also structures the relationships with people that God has witnessed. You cannot be simultaneously faithful to the God who witnesses covenants and systematically unfaithful to the covenants he has witnessed.",
  "Reforming ministry that has become corrupt is the institutional application of the Levi material. The description of 2:8 &mdash; priests who have turned aside from the way, given instruction that causes stumbling, shown partiality &mdash; describes the characteristic failures of religious institutions under pressure. The reform that Malachi calls for is not primarily administrative but theological: a return to the fear of God that produces the kind of awe from which true instruction flows. The priest who is primarily afraid of offending powerful people cannot be the mouth from which the community seeks knowledge. The reform of corrupt ministry begins with the recovery of the primary audience: the priest who preaches as if God is the primary listener will speak differently than one who preaches for the approval of the congregation.",
  "The question &ldquo;Where is the God of justice?&rdquo; deserves a response of faith rather than cynicism. The cynical response concludes that the absence of immediate divine action means either that God approves of wickedness or that there is no God of justice. The response of faith, which Malachi models by announcing the coming of the Lord in chapter 3, is that divine silence is not absence but patience &mdash; and that the justice being delayed is being prepared rather than abandoned. The New Testament strengthens this response: the God who appeared as the suffering servant rather than the triumphant judge answered the question of divine justice not by destroying the wicked immediately but by bearing the weight of injustice in his own body and promising a final accounting. Living with the question &ldquo;Where is the God of justice?&rdquo; without either collapsing into cynicism or demanding immediate resolution is one of the disciplines of mature faith.",
];

export default function Malachi2GuidePage() {
  const [tab, setTab] = useState<Tab>("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #08000f 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "52px 24px 44px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <span style={{ background: PURPLE, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", fontFamily: "system-ui, sans-serif" }}>
              Minor Prophets
            </span>
            <span style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>
              Malachi 2 &bull; Covenant Faithfulness in Priesthood and Marriage
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.1rem)", fontWeight: 800, margin: "0 0 18px", lineHeight: 1.13, fontFamily: "Georgia, serif" }}>
            Malachi 2 &mdash; The LORD Was Witness Between You and the Wife of Your Youth
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.2vw, 1.18rem)", color: MUTED, maxWidth: 700, lineHeight: 1.75, margin: 0, fontFamily: "Georgia, serif" }}
            dangerouslySetInnerHTML={{ __html: "Two interlocking disputes: the corrupted covenant of the priesthood and the betrayal of marriage covenants. At the center is God&rsquo;s insistence that he was witness to the marriage covenant and that he hates divorce &mdash; not as legalism but because divorce represents the same covenant-breaking that characterizes Israel&rsquo;s relationship with God." }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto", background: CARD }}>
        <div style={{ display: "flex", maxWidth: 880, margin: "0 auto", padding: "0 16px" }}>
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "16px 20px",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
                fontFamily: "system-ui, sans-serif",
                color: tab === t ? PURPLE : MUTED,
                borderBottom: tab === t ? `2px solid ${PURPLE}` : "2px solid transparent",
                transition: "color 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "44px 24px 96px" }}>

        {/* OVERVIEW TAB */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.65rem", fontWeight: 700, margin: "0 0 10px" }}>Overview of Malachi 2</h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 36px", fontFamily: "system-ui, sans-serif" }}>
              The corrupted priesthood and the broken marriage covenant are expressions of a single underlying failure: covenant indifference.
            </p>

            {/* Fast Facts */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14, marginBottom: 36 }}>
              {[
                { label: "Book", value: "Malachi" },
                { label: "Chapter", value: "2" },
                { label: "Date", value: "~450 BC" },
                { label: "Context", value: "Post-exilic Judah" },
                { label: "Structure", value: "Continued & new disputations" },
                { label: "Key Verse", value: "Malachi 2:14-16" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4, fontFamily: "system-ui, sans-serif" }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* Key quote */}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: "28px 32px", marginBottom: 36 }}>
              <blockquote style={{ borderLeft: `4px solid ${PURPLE}`, paddingLeft: 22, margin: 0 }}>
                <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.75, margin: "0 0 10px" }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD was witness between you and the wife of your youth, to whom you have been faithless, though she is your companion and your wife by covenant.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>
                  &mdash; Malachi 2:14 (ESV)
                </cite>
              </blockquote>
            </div>

            {/* Overview paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
              {OVERVIEW_PARAS.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.04rem", lineHeight: 1.87, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>

            {/* Key Passages */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginTop: 40 }}>
              <h3 style={{ fontWeight: 700, margin: "0 0 18px", fontFamily: "system-ui, sans-serif" }}>Key Passages at a Glance</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "Mal 2:1-3", desc: "Warning to priests &mdash; the curse &mdash; dung on faces" },
                  { ref: "Mal 2:4-7", desc: "The covenant of Levi &mdash; what the priesthood was meant to be" },
                  { ref: "Mal 2:8-9", desc: "The priests have turned aside &mdash; caused many to stumble" },
                  { ref: "Mal 2:10", desc: "Have we not all one Father? &mdash; the bridge to marriage" },
                  { ref: "Mal 2:11-12", desc: "Marrying the daughter of a foreign god &mdash; covenantal betrayal" },
                  { ref: "Mal 2:13", desc: "The altar covered with tears of abandoned wives" },
                  { ref: "Mal 2:14", desc: "The LORD was witness between you and the wife of your youth" },
                  { ref: "Mal 2:15", desc: "Guard yourselves in your spirit &mdash; seeking godly offspring" },
                  { ref: "Mal 2:16", desc: "For I hate divorce, says the LORD &mdash; and covering one's garment with violence" },
                  { ref: "Mal 2:17", desc: "You have wearied the LORD &mdash; Where is the God of justice?" },
                ].map(p => (
                  <div key={p.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ color: PURPLE, fontWeight: 700, fontSize: 13, minWidth: 80, paddingTop: 1, fontFamily: "system-ui, sans-serif" }}>{p.ref}</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.55, fontFamily: "system-ui, sans-serif" }} dangerouslySetInnerHTML={{ __html: p.desc }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Structure note */}
            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: "24px 28px", marginTop: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 12px", fontSize: "1.05rem", fontFamily: "system-ui, sans-serif" }}>
                Why Priesthood and Marriage Are in the Same Chapter
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.82, margin: 0, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "Malachi 2's juxtaposition of priestly corruption and marital infidelity is not accidental or editorial convenience. Both are instances of the same violation: breaking a covenant made under God's witness. The Levitical covenant (2:4-7) and the marriage covenant (2:14) share the same structure &mdash; a binding commitment before God that carries obligations of faithfulness and generates consequences when violated. The priests who have corrupted the Levitical covenant and the men who have abandoned the wives of their youth are guilty of the same theological failure: treating God's witness as irrelevant to the obligation they undertook." }}
              />
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.65rem", fontWeight: 700, margin: "0 0 10px" }}>Key Themes in Malachi 2</h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 36px", fontFamily: "system-ui, sans-serif" }}>
              Six interlocking themes from the chapter's two disputes over covenant faithfulness.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {THEMES_DATA.map(theme => (
                <div key={theme.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 13, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(theme.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ width: 11, height: 11, borderRadius: "50%", background: theme.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "Georgia, serif" }} dangerouslySetInnerHTML={{ __html: theme.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, fontFamily: "system-ui, sans-serif", flexShrink: 0 }}>
                      {open === theme.id ? "-" : "+"}
                    </span>
                  </button>
                  {open === theme.id && (
                    <div
                      style={{ padding: "0 22px 22px 47px", color: MUTED, lineHeight: 1.82, fontSize: "0.97rem", fontFamily: "Georgia, serif" }}
                      dangerouslySetInnerHTML={{ __html: theme.body }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Thematic connection box */}
            <div style={{ background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: "26px 28px", marginTop: 40 }}>
              <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 12px", fontSize: "1.1rem", fontFamily: "system-ui, sans-serif" }}>
                The Covenant Connection: Vertical and Horizontal Faithfulness
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.82, margin: "0 0 14px", fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "Malachi 2 establishes a pattern that runs through the whole Bible: faithfulness to God and faithfulness to people are not separable. The priest who is unfaithful to the Levitical covenant &mdash; offering defiled teaching, showing partiality, turning people from the way &mdash; is simultaneously being unfaithful to the God who made that covenant and to the people who depend on the covenant being kept. The husband who breaks the marriage covenant &mdash; covered by God&rsquo;s witness &mdash; is simultaneously violating his relationship with God." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.82, margin: 0, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "This is the same logic Jesus invokes in the Sermon on the Mount: &ldquo;If you are offering your gift at the altar and there remember that your brother has something against you, leave your gift there before the altar and go. First be reconciled to your brother, and then come and offer your gift&rdquo; (Matthew 5:23-24). The offering cannot substitute for relational faithfulness; they are connected at the root." }}
              />
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {tab === "verse" && (
          <div>
            <h2 style={{ fontSize: "1.65rem", fontWeight: 700, margin: "0 0 10px" }}>Verse by Verse &mdash; Malachi 2</h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 36px", fontFamily: "system-ui, sans-serif" }}>
              A detailed walk through each section of the chapter.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {VERSE_DATA.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 13, overflow: "hidden" }}>
                  <button
                    onClick={() => toggle(v.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ color: PURPLE, fontWeight: 700, fontSize: 13, minWidth: 110, fontFamily: "system-ui, sans-serif" }}>{v.ref}</span>
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15, fontFamily: "Georgia, serif" }} dangerouslySetInnerHTML={{ __html: v.heading }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, fontFamily: "system-ui, sans-serif", flexShrink: 0 }}>
                      {open === v.id ? "-" : "+"}
                    </span>
                  </button>
                  {open === v.id && (
                    <div
                      style={{ padding: "0 22px 24px 22px", color: MUTED, lineHeight: 1.87, fontSize: "0.97rem", fontFamily: "Georgia, serif" }}
                      dangerouslySetInnerHTML={{ __html: v.body }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Textual note on 2:16 */}
            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "26px 28px", marginTop: 40 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 12px", fontSize: "1.05rem", fontFamily: "system-ui, sans-serif" }}>
                Textual Note: Malachi 2:16 and the Debate About &ldquo;I Hate Divorce&rdquo;
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.82, margin: "0 0 14px", fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "The Hebrew of 2:16 is among the most debated in Malachi. The traditional rendering (&ldquo;I hate divorce, says the LORD&rdquo;) takes the verb &ldquo;hate&rdquo; as third-person singular with God as the subject: God hates divorce. Some modern translations (NIV 2011, ESV footnote) read the verb as second-person masculine singular with the husband as subject: &ldquo;The man who hates and divorces his wife... does violence to the one he should protect.&rdquo; The difference is significant exegetically: one reading makes God the subject who hates divorce as a general practice; the other makes the husband the subject and focuses on the specific motivation of hateful dismissal." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.82, margin: 0, fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{ __html: "Most commentators favor reading God as the subject, both because of the context (God has been the speaking subject throughout the passage) and because the second reading produces a somewhat awkward sentence. The traditional rendering has the advantage of making the theological point that the whole passage has been building toward: God's opposition to divorce is grounded in his own character as the witness and guardian of covenants. The pastoral application of this verse has always required care &mdash; it is an expression of God's ideal for marriage rather than an absolute prohibition that leaves no room for the pastoral complexity the tradition has always recognized in cases of abuse, adultery, or abandonment." }}
              />
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {tab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.65rem", fontWeight: 700, margin: "0 0 10px" }}>Applying Malachi 2 Today</h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 36px", fontFamily: "system-ui, sans-serif" }}>
              Two ancient institutional disputes with urgent contemporary application.
            </p>

            {/* Application paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem", marginBottom: 56 }}>
              {APPLICATION_PARAS.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.04rem", lineHeight: 1.87, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>

            {/* Reflection questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 26, marginBottom: 40 }}>
              <h3 style={{ fontWeight: 700, margin: "0 0 18px", fontFamily: "system-ui, sans-serif" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "The priests of Malachi&rsquo;s day gave partial and self-serving instruction. What pressures &mdash; social, economic, relational &mdash; tempt those who teach today to shape the message to what people want to hear rather than what is true?",
                  "Malachi 2:14 describes the marriage relationship as a covenant made under God&rsquo;s witness. How does this understanding of marriage as a witnessed covenant change how you think about the obligations within it?",
                  "The vertical and horizontal dimensions of covenant faithfulness are inseparable in Malachi 2. Where in your life might a failure of relational faithfulness be connected to a weakening of your relationship with God?",
                  "The call to &ldquo;guard yourselves in your spirit&rdquo; (2:15-16) is twice repeated. What does it mean practically to guard your spirit against the gradual drift toward covenant indifference in your most important relationships?",
                  "The question &ldquo;Where is the God of justice?&rdquo; (2:17) was asked by people experiencing apparent divine silence. How do you hold that question with faith rather than cynicism when it arises in your own experience?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "14px 18px", background: BG, borderRadius: 9, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: PURPLE, fontWeight: 800, flexShrink: 0, fontFamily: "system-ui, sans-serif" }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: "0.93rem", lineHeight: 1.65, fontFamily: "system-ui, sans-serif" }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Videos */}
            <h3 style={{ fontWeight: 700, margin: "0 0 20px", fontSize: "1.25rem", fontFamily: "system-ui, sans-serif" }}>Video Teaching</h3>
            <p style={{ color: MUTED, fontSize: "0.97rem", lineHeight: 1.75, margin: "0 0 28px", fontFamily: "system-ui, sans-serif" }}>
              Explore Malachi 2 through these video studies on the Levitical covenant, marriage faithfulness, God&rsquo;s hatred of divorce, and the question of divine justice.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {videoItems.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px", fontFamily: "system-ui, sans-serif" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing pullout */}
        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.85rem 2rem" }}>
          <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 0.85rem", fontSize: "1.15rem", fontFamily: "system-ui, sans-serif" }}>
            The God Who Was Witness
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "0.97rem" }}
            dangerouslySetInnerHTML={{ __html: "Malachi 2&rsquo;s most enduring contribution to biblical theology is the image of God as the witness to human covenants. He is not a distant observer who later judges whether agreements were kept; he is present at the moment of covenant-making as the one who will hold the parties accountable. This means that every covenant made in his name &mdash; whether the covenant of Levi or the covenant of marriage &mdash; carries his ongoing attention and involvement. The God who was witness at the altar of Malachi&rsquo;s day is the same God who is witness to every commitment made before him today: in ordination, in marriage, in baptismal vow, in the covenant of church membership. He has not forgotten what was promised. He has not become indifferent to whether it is kept. And he is not absent when the question is asked: &ldquo;Where is the God of justice?&rdquo; He is coming &mdash; and chapter 3 will say when." }}
          />
        </div>

      </div>
    </div>
  );
}
