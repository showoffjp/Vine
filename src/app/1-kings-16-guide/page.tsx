"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const videoItems = [
  { videoId: "pN3tKqWmBsX", title: "1 Kings 16: Dynasties Rise and Fall in Israel" },
  { videoId: "vR8yZcLnDmQ", title: "Omri, Ahab, and the Building of Samaria" },
  { videoId: "jT5wGhXpCkF", title: "Jezebel and Baal Worship - Israel at Its Worst" },
  { videoId: "qM2sNbVtHrE", title: "The Curse of Jericho and the Fulfillment of Prophecy" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* HERO */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #1a1a2e 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Chapter Guide</p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>1 Kings Chapter 16</h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "First Kings 16 is the most compressed political history in the Books of Kings &mdash; five kings, four of whom are assassinated or die violently, packed into a single chapter. The pace is almost disorienting: Baasha&rsquo;s dynasty falls to Zimri, Zimri&rsquo;s seven-day reign collapses in fire, Omri and Tibni wage a four-year civil war, Omri builds a new capital at Samaria, and his son Ahab begins a reign the Deuteronomistic historian describes as the worst yet seen in Israel. The chapter ends with the ominous appearance of a rebuilt Jericho and its terrible cost &mdash; a fulfilled curse that signals the kind of spiritual recklessness that now characterizes the northern kingdom under its most dangerous royal family." }} />
        </div>
      </div>

      {/* TABS */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "14px 24px", background: "none", border: "none", color: activeTab === i ? TEXT : MUTED, fontFamily: "Georgia, serif", fontSize: "0.95rem", cursor: "pointer", borderBottom: activeTab === i ? `2px solid ${GOLD}` : "2px solid transparent", whiteSpace: "nowrap" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>

        {/* TAB 0: OVERVIEW */}
        {activeTab === 0 && (
          <div>

            {/* Section 1 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>The Shape of 1 Kings 16</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter covers the final years of Baasha&rsquo;s dynasty and the rapid succession of dynasties that follows. The Deuteronomistic historian opens with a prophetic word against Baasha (vv.1-7), then traces the destruction of that dynasty through Elah&rsquo;s assassination (vv.8-10), Zimri&rsquo;s brief seven-day reign (vv.11-20), the civil war between Omri and Tibni (vv.21-22), Omri&rsquo;s consolidation and building of Samaria (vv.23-28), the beginning of Ahab&rsquo;s reign and his marriage to Jezebel (vv.29-33), and the rebuilding of Jericho under Hiel (v.34). The escalation is deliberate: each section is worse than the last." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This chapter belongs to the transition between two phases of the northern kingdom&rsquo;s history. The first phase (1 Kings 12-16) is characterized by rapid dynastic instability: Jeroboam&rsquo;s dynasty falls to Baasha, Baasha&rsquo;s to Zimri, Zimri&rsquo;s to Omri. The second phase (1 Kings 17 onwards) is the extended confrontation between the Omride dynasty &mdash; embodied in Ahab and Jezebel &mdash; and the prophets Elijah and Elisha. Chapter 16 is the hinge: it closes the era of rapid coups and opens the era of Baal worship and prophetic resistance." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>The Pattern of Dynastic Violence</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The northern kingdom never achieved the dynastic stability of Judah&rsquo;s Davidic line. From the division of the kingdom in 930 BC until the Assyrian conquest in 722 BC, Israel had nineteen kings from nine different dynasties (or individuals with no dynasty). By contrast, Judah had twenty kings &mdash; all from the house of David. The difference is theological as much as political: Judah had a covenant promise attached to its dynasty (2 Samuel 7); Israel had only the fragile legitimacy of prophetic designation, which could be revoked and transferred." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The pattern in 1 Kings 16 is: a dynasty sins, a prophet announces judgment, a military officer kills the king during a military campaign, the officer destroys the previous dynasty in a blood purge, and then the officer proceeds to repeat the same sins he was raised up to punish. Baasha killed Jeroboam&rsquo;s house in fulfillment of Ahijah&rsquo;s prophecy (1 Kings 15:29) and then walked in Jeroboam&rsquo;s sins. Zimri killed Baasha&rsquo;s house in fulfillment of Jehu&rsquo;s prophecy (16:1-4) and is then destroyed himself. Each successive ruler becomes the instrument of judgment on the previous ruler and then falls into the same pattern of sin." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>Samaria: A New Capital and Its Significance</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "One of the most significant political acts in the chapter is Omri&rsquo;s purchase of the hill of Samaria and his construction of a new capital there (vv.24). Unlike Jerusalem, which was a Jebusite city captured by David and loaded with centuries of sacred history, or Shechem and Tirzah (earlier northern capitals), Samaria had no prior Israelite or Canaanite sacred associations. Omri built it from scratch on land he personally owned &mdash; named after its previous owner Shemer &mdash; which meant the capital was his personal property rather than tribal land." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The political advantage was considerable: by building on personally purchased land, Omri was not obligated to any tribe and could not be accused of tribal favoritism. Samaria became one of the most important cities in the ancient Near East &mdash; Assyrian records refer to the northern kingdom as &ldquo;the house of Omri&rdquo; for more than a century after Omri&rsquo;s dynasty ended, testifying to how dominant his dynasty&rsquo;s regional reputation was. Archaeologically, Samaria shows evidence of impressive Phoenician-style construction, likely connected to the Phoenician alliance that Ahab&rsquo;s marriage to Jezebel cemented." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;And Ahab the son of Omri did evil in the sight of the LORD, more than all who were before him.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>1 Kings 16:30 (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>Ahab and Jezebel: The Paradigm of Wicked Kingship</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Ahab&rsquo;s introduction (vv.29-33) is the most damning royal evaluation in the Books of Kings up to this point. He is said to do evil &ldquo;more than all who were before him&rdquo; (v.30). The escalation from Jeroboam&rsquo;s sin (golden calves as unauthorized worship of YHWH) to Ahab&rsquo;s sin (official Baal worship) is significant. Jeroboam&rsquo;s sin was about wrong worship of the right God; Ahab&rsquo;s sin is about right worship of the wrong god. The theologian would say: Jeroboam committed idolatry of form; Ahab committed idolatry of object." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Jezebel daughter of Ethbaal, king of Sidon (Phoenicia), brings with her the full pantheon of Phoenician religion. Ethbaal was himself a former priest of Astarte who had killed the previous king to take the throne &mdash; another parallel with the pattern of dynastic violence, this time from Jezebel&rsquo;s family background. The marriage was a political alliance with one of the most powerful city-states in the region, but its spiritual cost was the introduction of organized Baal worship at the highest level of Israelite state religion." }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>The Curse of Jericho Fulfilled</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter closes with a brief but haunting notice: &ldquo;In his days Hiel of Bethel built Jericho. He laid its foundation at the cost of Abiram his firstborn, and set up its gates at the cost of his youngest son Segub, according to the word of the LORD, which he spoke by Joshua the son of Nun&rdquo; (v.34). The reference is to Joshua 6:26, where Joshua pronounced a curse on whoever would rebuild Jericho: &ldquo;At the cost of his firstborn shall he lay its foundation, and at the cost of his youngest son shall he set up its gates.&rdquo;" }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Under the reign of Ahab &mdash; the most wickedly reckless king yet &mdash; someone builds Jericho, and the curse is fulfilled. The detail is placed here deliberately by the Deuteronomistic historian: in the atmosphere of Ahab&rsquo;s reign, where curses are ignored and covenant warnings are treated as obsolete, an ancient curse operates with lethal precision. The word of the LORD through Joshua hundreds of years earlier is not a relic; it remains active. The chapter closes with this warning as a kind of theological exclamation point: in the kingdom of Ahab and Jezebel, the word of God still operates &mdash; even when, perhaps especially when, no one is paying attention to it." }} />
            </div>

          </div>
        )}

        {/* TAB 1: KEY THEMES */}
        {activeTab === 1 && (
          <div>

            {/* Theme 1 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GOLD, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Prophetic Word and Its Fulfillment</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens with the word of the LORD through Jehu son of Hanani against Baasha (vv.1-4). The prophetic announcement follows a precise structural pattern: indictment (Baasha walked in the way of Jeroboam), verdict (his house will be destroyed like Jeroboam&rsquo;s), and sentence (his family will die in city and field). This oracle is then fulfilled in vv.11-13 when Zimri kills Elah and destroys the house of Baasha. The fulfillment notice in v.12 explicitly connects the destruction to the word spoken through Jehu: &ldquo;according to the word of the LORD, which he spoke against Baasha through Jehu the prophet.&rdquo;" }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The same prophetic fulfillment pattern operates at the end of the chapter with the Jericho curse (v.34). The Deuteronomistic historian is making a persistent argument: the word of God is not decorative or aspirational; it is operative and inevitable. Kings who sin are not merely making poor policy choices; they are setting in motion prophetically announced consequences that will not fail to arrive. The question is never whether the word will be fulfilled but when and through whom." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This creates a reading experience that is simultaneously fatalistic and moral. It is fatalistic because the outcome is announced in advance and does not fail. It is moral because the announcement is always preceded by a choice: Baasha chose to walk in Jeroboam&rsquo;s sin; the fulfillment follows from the choice. The prophetic announcement is not destiny that bypasses freedom; it is the disclosure of what freedom, oriented toward sin, will produce." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Seven-Day Reign: Zimri and the Futility of Violent Power</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Zimri&rsquo;s seven-day reign is the shortest in Israel&rsquo;s history and one of the shortest royal reigns in the ancient Near East. He was a commander of half the royal chariotry &mdash; a significant military position &mdash; who killed Elah while the king was drunk at a private party in Tirzah. He then destroyed the entire house of Baasha, fulfilling the prophetic word. And then the army in the field, besieging Gibbethon (the same Philistine city where Baasha had killed Nadab years earlier), made Omri king." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "When Omri marched on Tirzah, &ldquo;Zimri saw that the city was taken&rdquo; (v.18) and went into the palace and burned it over himself. He is the only Israelite king to die by suicide in the entire history. The Deuteronomistic historian adds the theological evaluation: Zimri &ldquo;sinned, doing evil in the sight of the LORD, walking in the way of Jeroboam&rdquo; (v.19) &mdash; all of this in seven days. The historian does not exempt Zimri from moral evaluation merely because his reign was too short for significant policy to develop." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The portrait of Zimri is one of the most compressed tragedies in the Bible: a career built toward power, a murder that achieves the throne, and seven days later, the palace burning and the king dead inside it. The speed of the collapse makes a point that slow-burning narration could not: the kind of power built on assassination is inherently unstable. There is no foundation of covenant, no legitimate succession, no reason anyone should follow Zimri rather than replace him. He rises by the sword and falls within a week." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Sin Escalating Across Generations</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "A striking feature of the northern kingdom&rsquo;s history in 1 Kings is the escalation of sin across generations. Jeroboam I introduced unauthorized worship centers (golden calves at Bethel and Dan) &mdash; sin, but at least nominally directed toward YHWH. Every subsequent northern king is evaluated as walking &ldquo;in the way of Jeroboam&rdquo; as a baseline. But with Ahab, the baseline shifts dramatically: he does not merely repeat Jeroboam&rsquo;s sin; he introduces organized Baal worship with a temple, an altar, and an Asherah pole in the capital city." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The language used for Ahab is notably superlative: &ldquo;more than all who were before him&rdquo; (v.30), &ldquo;more than all the kings of Israel who were before him&rdquo; (v.33). The historian is tracking a downward trajectory. This is not merely individual sin; it is the ratcheting of a culture toward greater and greater deviation from the covenant. Each generation that tolerates the sins of the previous generation makes those sins the new baseline and opens the door to something worse." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The mechanism of escalation is visible in the text: Jeroboam&rsquo;s sin was &ldquo;the sin of Jeroboam&rdquo; (a fixed phrase). Each subsequent king who repeats it makes it more entrenched. When Omri appears &mdash; the most geopolitically successful northern king yet &mdash; he &ldquo;did more evil than all who were before him&rdquo; (v.25). Then his son Ahab outdoes even Omri. Success and sin are not in tension; they escalate together. Power without covenant does not moderate over time; it accelerates toward idolatry." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Jezebel: Foreign Influence and Covenant Threat</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Jezebel daughter of Ethbaal is introduced in a single verse (v.31) but her shadow falls over the entire second half of 1 Kings and the first two chapters of 2 Kings. Her father Ethbaal was king of Sidon, a Phoenician city-state on the Mediterranean coast &mdash; one of the dominant commercial and cultural powers of the ancient Near East. Phoenicia was famous for its trade networks, its purple dye industry, its seafaring, and its religious culture centered on the storm-god Baal Melqart and the goddess Astarte." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The marriage was diplomatically strategic: Omri was securing a commercial and military alliance with the most powerful neighbor to the north and west. But the Deuteronomistic historian evaluates it entirely in terms of its religious consequences. Ahab not only married Jezebel; he &ldquo;served Baal and worshiped him&rdquo; (v.31), built Baal a temple and altar in Samaria (v.32), and made an Asherah pole (v.33). The progression from marriage to temple to state religion represents the wholesale importation of Phoenician paganism into the center of Israelite national life." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Later chapters will reveal the depth of Jezebel&rsquo;s influence: she kills prophets of the LORD (1 Kings 18:4), she threatens Elijah&rsquo;s life after Carmel (1 Kings 19:2), and she engineers the murder of Naboth through false accusation to seize his vineyard (1 Kings 21). She is not merely a consort; she is an active theological agent, importing not merely religious practices but a whole theological worldview in which the gods of power and fertility are superior to the covenant God who demands exclusive loyalty from his people." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Omri: Political Brilliance, Spiritual Bankruptcy</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Omri receives only eight verses in 1 Kings (vv.23-28), but he was one of the most consequential rulers in Israelite history. By external, geopolitical measures, he was arguably the most successful northern king: he ended the civil war, built a new capital at Samaria, established international alliances through his son&rsquo;s marriage to Jezebel, and expanded Israel&rsquo;s regional influence so significantly that Assyrian records called the northern kingdom &ldquo;the house of Omri&rdquo; for a century after his dynasty ended." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "But the Deuteronomistic historian dismisses all of this in a phrase: &ldquo;Omri did more evil than all who were before him&rdquo; (v.25). His political achievements are not mentioned. His building of Samaria is noted only as a bare fact; there is no admiration. The historian is demonstrating a fundamental evaluative principle: the measure of a king is not international reputation, military success, or architectural legacy but covenant faithfulness. By the covenant measure, Omri is a failure despite his political brilliance." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This evaluative principle has permanent pastoral relevance. The world&rsquo;s metrics for success and the covenant&rsquo;s metrics are not merely different in degree; they are different in kind. What reads as brilliant success on the world&rsquo;s ledger may read as catastrophic failure on the covenant ledger. Omri built Samaria and lost his soul; his son Ahab inherited both the city and the spiritual catastrophe." }} />
            </div>

            {/* Theme 6 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Long Memory of the Word: Joshua&rsquo;s Curse and Hiel of Bethel</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The final verse of the chapter (v.34) is easy to miss but theologically essential. Hiel of Bethel rebuilds Jericho during Ahab&rsquo;s reign, and his firstborn son dies when the foundation is laid, and his youngest son dies when the gates are set up &mdash; &ldquo;according to the word of the LORD, which he spoke by Joshua the son of Nun&rdquo; (Joshua 6:26). The curse was spoken approximately five centuries before Hiel built. Five centuries after Joshua, the word is still operative." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The placement of this notice at the end of a chapter dominated by dynastic instability and Ahab&rsquo;s inauguration of Baal worship is no accident. The historian is making a point about the longevity of the divine word in a context where human power cycles through rulers, dynasties, and capitals with bewildering speed. Kings rise and fall in a matter of years or decades. Words spoken by God through Joshua operate five hundred years later. The contrast between the brevity of political power and the permanence of the divine word is the chapter&rsquo;s closing argument." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* vv.1-7 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 1-7: Jehu&rsquo;s Prophecy Against Baasha</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Pattern Repeats</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1-4</strong> &mdash; &ldquo;The word of the LORD came to Jehu the son of Hanani against Baasha.&rdquo; Jehu is identified as a prophet; his father Hanani is mentioned in 2 Chronicles 16:7 as the prophet who rebuked Asa for the Syrian alliance. The oracle against Baasha follows the same structural form as Ahijah&rsquo;s oracle against Jeroboam (1 Kings 14:7-11): elevation by God (v.2a), failure to walk in God&rsquo;s ways (v.2b), and the same judgment pronounced &mdash; the house will be destroyed like Jeroboam&rsquo;s house, with bodies unburied in city and field (vv.3-4). The parallel is explicit and deliberate: Baasha was raised up to destroy Jeroboam&rsquo;s house and then replicated Jeroboam&rsquo;s sin." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.5-7</strong> &mdash; The summary of Baasha&rsquo;s reign is characteristically terse: might, cities, annals, and then the burial notice. V.7 adds an important theological observation: the word of the LORD came against Baasha not only because of his own sin but also &ldquo;because he killed him&rdquo; &mdash; that is, because of the killing of Jeroboam&rsquo;s house. This is striking: Baasha was used by God to destroy Jeroboam&rsquo;s dynasty (1 Kings 15:29 says it was in fulfillment of prophecy), and yet he is also held morally responsible for the killing. Prophetic fulfillment does not eliminate moral accountability for the human agent who accomplishes it. This is one of the Old Testament&rsquo;s most sophisticated observations about divine sovereignty and human responsibility." }} />
            </div>

            {/* vv.8-14 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 8-14: Elah and Zimri</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Drunk When Destiny Arrives</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.8-10</strong> &mdash; Elah son of Baasha reigns two years in Tirzah. His assassination is narrated with studied contempt: he is drinking himself drunk in the house of Arza, who is in charge of the palace at Tirzah, when Zimri &mdash; commander of half his chariots &mdash; kills him. The setting (drunk at a private party) and the brevity of the narrative (essentially two verses for a two-year reign) communicate the historian&rsquo;s verdict without stating it: Elah is a man who made himself vulnerable through indulgence and paid the ultimate price." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.11-14</strong> &mdash; Zimri becomes king and immediately &ldquo;struck down all the house of Baasha, he did not leave him a single male, neither of his relatives nor of his friends&rdquo; (v.11). The comprehensive nature of the purge &mdash; not just the royal line but friends and associates &mdash; was standard practice in ancient Near Eastern dynastic succession by force and is here understood as the fulfillment of Jehu&rsquo;s prophecy (v.12). V.13 provides the theological ground: the house of Baasha sinned and made Israel sin. The fulfillment notice is explicit: &ldquo;according to the word of the LORD, which he spoke against Baasha through Jehu the prophet.&rdquo;" }} />
            </div>

            {/* vv.15-20 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 15-20: Zimri&rsquo;s Seven Days</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Palace in Flames</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.15-17</strong> &mdash; The army of Israel is at Gibbethon (a Philistine city to the southwest, the same siege location where Baasha had killed Nadab decades earlier &mdash; 1 Kings 15:27). When the army hears that Zimri has killed the king, they make Omri &mdash; the commander of the army &mdash; king on the spot. Omri immediately leads the army from the siege of the Philistine city to besiege Tirzah, the capital. Zimri has seized the palace and now finds himself besieged in it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.18-19</strong> &mdash; When Zimri sees the city is taken, he goes into the citadel of the king&rsquo;s house and burns the king&rsquo;s house over himself and dies. The seven-day reign ends in suicide and fire. Mark v.19 is the theological epitaph: he sinned, doing evil in the sight of the LORD, walking in the way of Jeroboam. In seven days. The historian refuses to excuse him on grounds of brevity; Zimri had enough time to commit to his spiritual direction even if not to accomplish much in it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.20</strong> &mdash; The closing summary for Zimri notes &ldquo;his conspiracy that he made.&rdquo; The word for conspiracy (<em>qesher</em>) is used throughout Kings for coups. Zimri&rsquo;s obituary is: he conspired, he killed, he sinned, he burned. He is the briefest and most self-defeating king in all of Israel&rsquo;s history." }} />
            </div>

            {/* vv.21-28 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700 }}>Verses 21-28: Omri&rsquo;s Reign and the Building of Samaria</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>A New Capital, the Same Old Sin</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.21-22</strong> &mdash; After Zimri&rsquo;s death, Israel splits: half follows Tibni son of Ginath and half follows Omri. The civil war lasts four years (cross-referencing the regnal dates: Omri began in the 31st year of Asa, v.23; the contest with Tibni apparently began around the 27th year of Asa). Tibni dies &mdash; the text does not say how, though the Septuagint adds a note implying he died in battle &mdash; and Omri prevails." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.23-24</strong> &mdash; Omri reigns 12 years total, six in Tirzah and six in Samaria. He buys the hill of Samaria from Shemer for two talents of silver &mdash; approximately 150 pounds of silver. He names the city Samaria (<em>Shomeron</em>) after Shemer, the previous owner. The purchase rather than conquest is noteworthy: Omri wanted unencumbered legal title to the new capital. It becomes the capital of the northern kingdom until its conquest by Assyria in 722 BC and remains one of the most archaeologically significant sites in the region." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.25-26</strong> &mdash; Despite his political achievements, the evaluation is stark: &ldquo;Omri did more evil than all who were before him&rdquo; (v.25). He walked in the way of Jeroboam, made Israel sin, and &ldquo;provoked the LORD, the God of Israel, to anger by their idols.&rdquo; The word for idols (<em>havel</em>) literally means &ldquo;breath&rdquo; or &ldquo;vapor&rdquo; &mdash; the same word as Qohelet&rsquo;s <em>hevel</em> in Ecclesiastes. Idols are not substantial; they are vapor. The contrast between Omri&rsquo;s solid, impressive new capital and the vaporous nothing he put in it is implicit." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.27-28</strong> &mdash; Standard closing formula: might, achievements in building, burial in Samaria (the city he built becomes his tomb). His son Ahab succeeds him." }} />
            </div>

            {/* vv.29-34 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 700 }}>Verses 29-34: Ahab, Jezebel, and the Rebuilt Jericho</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>More Evil Than All Who Were Before</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.29-30</strong> &mdash; Ahab son of Omri begins to reign in Samaria in the 38th year of Asa of Judah and reigns 22 years. The verdict: &ldquo;Ahab the son of Omri did evil in the sight of the LORD, more than all who were before him&rdquo; (v.30). The superlative will be exceeded only by Manasseh of Judah much later (2 Kings 21), but within the northern kingdom Ahab represents the nadir. The phrase &ldquo;as though it had been a light thing for him to walk in the sins of Jeroboam&rdquo; (v.31) is contemptuous: Jeroboam&rsquo;s notorious sin is treated by Ahab as trivial, a baseline he easily exceeds." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.31</strong> &mdash; He takes as wife Jezebel daughter of Ethbaal king of the Sidonians. Ethbaal&rsquo;s name means &ldquo;with Baal&rdquo; or &ldquo;Baal is with him&rdquo; &mdash; his very name announces the religious orientation Jezebel will bring to Israel. The marriage is political, but the historian treats it entirely as a spiritual catastrophe. Ahab &ldquo;went and served Baal and worshiped him&rdquo; &mdash; the verbs indicate ongoing, habitual practice, not a single act." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.32-33</strong> &mdash; Two specific acts: Ahab erects a Baal altar inside a Baal temple he builds in Samaria, and he makes an Asherah pole. The temple to Baal in the capital is qualitatively different from the golden calves at Bethel and Dan: it represents official, state-sponsored worship of a foreign deity in the national capital. The Asherah pole adds a second deity. The historian&rsquo;s summary: Ahab &ldquo;did more to provoke the LORD, the God of Israel, to anger than all the kings of Israel who were before him&rdquo; (v.33)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.34</strong> &mdash; The chapter closes with the rebuilding of Jericho by Hiel of Bethel and the fulfillment of Joshua&rsquo;s curse (Joshua 6:26). Hiel loses his firstborn Abiram when the foundations are laid and his youngest son Segub when the gates are set up. The precision of the fulfillment &mdash; firstborn at foundation, youngest at gates &mdash; matches the exact terms of the original curse. Five centuries have not dimmed the word. Under Ahab, where curses are ignored and covenants are trampled, an ancient word proves itself: still alive, still operative, still exacting." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>The Word That Does Not Expire</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Hiel of Bethel builds Jericho and Joshua&rsquo;s five-hundred-year-old curse takes his firstborn and his youngest son. This is one of the most arresting moments in the Old Testament&rsquo;s theology of the word: God does not issue warnings on a short-term contract. The words of Scripture are not limited to the generation that first received them." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "In an era when biblical warnings are routinely treated as culturally conditioned relics with no contemporary relevance, the story of Hiel is a counterargument. The kingdom of Ahab was exactly such an era: a culture that had moved beyond the old covenant constraints, that treated the ancient words as obsolete. And then Hiel built, and his sons died, and the word proved itself. The application is not that we should be afraid to build things; it is that we should not assume the ancient warnings have expired." }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>The Escalation of Normalized Sin</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Jeroboam&rsquo;s sin became the standard for evaluating northern kings. Each generation treated it as the baseline. Omri exceeded it; Ahab treated Omri&rsquo;s excess as trivial and exceeded that. The mechanism of escalation is normalization: what one generation tolerates, the next generation accepts; what one generation accepts, the next generation embraces; what one generation embraces, the next generation entrenches and exceeds." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The question this chapter asks is: what are the Jeroboam sins of your generation that are becoming the tolerated baseline? The trajectory of 1 Kings 16 is not toward improvement; it is consistently downward. Halting that trajectory requires recognizing it &mdash; and recognizing it requires being willing to name as sin what your culture has normalized. That is exactly what the prophets in the northern kingdom &mdash; Elijah, Micaiah, Jehu son of Hanani &mdash; were willing to do, at great personal cost." }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>Zimri: The Danger of Power Without Foundation</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Zimri rose by conspiracy and fell within seven days because the power he seized had no legitimate foundation. There was no covenant, no prophetic designation, no tribal loyalty, no track record &mdash; only a murder and a claim. When the army heard what he had done, they immediately made someone else king. The coup that looked like success was already a failure before it completed." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "There is a pastoral application to positions of leadership that are seized rather than received. Ambition that operates by conspiracy &mdash; undermining others, accumulating power through means that cannot be publicly acknowledged &mdash; produces a kind of authority that is inherently unstable. It cannot sustain itself because it has no ground beneath it except the person&rsquo;s own will to power. Zimri burned the palace over himself rather than yield; the end of that kind of power is often self-destruction." }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Success Is Not Spiritual Health</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Omri built a new capital, established regional dominance, and created alliances that made Israel a significant player in Near Eastern geopolitics. Assyrian records remembered him for a century after his dynasty ended. By every external measure of success available to a king, Omri delivered. The Deuteronomistic historian dismisses all of it in half a verse and gives his theological verdict: more evil than all who were before him." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The decoupling of outward success from spiritual health is one of the hardest truths in the Old Testament&rsquo;s theology of leadership. We are temperamentally inclined to use success as evidence of divine favor. The Books of Kings systematically resist this inference. Omri&rsquo;s success proved only that he was good at being a king; it said nothing about whether he was walking in covenant with God. The two are not the same and must not be confused." }} />
            </div>

            {/* Application 5 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>Discussion Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "Baasha was used by God to destroy Jeroboam&rsquo;s house and then held accountable for the killing (v.7). How do you hold together divine sovereignty and human moral responsibility when destructive events happen? Does the fact that something serves God&rsquo;s purposes make it right?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Zimri reigns seven days and still receives a theological evaluation of his spiritual direction. What does this suggest about the relationship between the length of an opportunity and the quality of the response it receives?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Omri&rsquo;s political achievements were dismissed in favor of his spiritual failure. How do you evaluate &ldquo;success&rdquo; in your own life, your leadership, your community? Which metrics do you actually use vs. which metrics you think you should use?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The sin pattern in the northern kingdom escalated across generations. What does it take to reverse an escalating generational pattern of sin rather than simply inheriting and continuing it?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Hiel of Bethel rebuilds Jericho and loses his sons to a five-hundred-year-old curse. What ancient words of God are you most tempted to treat as expired? What would it mean to treat them as still operative?" }} />
              </ol>
            </div>

            {/* Application 6 */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Lord, the kings of Israel remind me how quickly a generation can descend from bad to worse when there is no anchor in your covenant. Guard me from the illusion that success proves your favor, that political cleverness substitutes for faithfulness, or that ancient warnings have expired. Show me the Jeroboam sins that have become normalized in my world, and give me the courage of the prophets who named them. Let your word &mdash; ancient as Joshua&rsquo;s curse, permanent as your nature &mdash; be more authoritative to me than the voice of any Jezebel who would replace you with the gods of power, fertility, and cultural comfort. Amen." }} />
            </div>

          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of 1 Kings 16.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ color: TEXT, fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
