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
  "Foreign Wives and Idolatry",
  "Adversaries Raised Up",
  "Jeroboam and the Torn Kingdom",
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
    heading: "Overview of 1 Kings 11",
    reference: "1 Kings 11:1&ndash;43",
    paragraphs: [
      "First Kings chapter 11 records the tragic decline of Solomon, the wisest and most splendid king Israel had ever known. The chapters before this one have piled glory upon glory &mdash; the building of the temple, the visit of the Queen of Sheba, the immense wealth and renown of his reign. Now the narrative turns dark. The seeds of compromise sown in chapters 9 and 10 bear their bitter fruit, and the king whose heart had once been wholly devoted to the Lord is led astray. The chapter is a sober study in how even the most gifted servant of God can fall when his heart is divided.",
      "The first movement (vv.1&ndash;13) describes the root of Solomon&rsquo;s ruin: his many foreign wives &mdash; seven hundred wives of royal birth and three hundred concubines &mdash; who turn his heart after other gods. He builds high places for Chemosh the god of Moab, Molech the abomination of the Ammonites, and worships Ashtoreth of the Sidonians. The Lord, who had appeared to Solomon twice, grows angry and declares that the kingdom will be torn from his house, though for David&rsquo;s sake the judgment will be delayed and one tribe preserved.",
      "The second movement (vv.14&ndash;25) shows the Lord raising up adversaries against Solomon, ending the &lsquo;rest on every side&rsquo; he had once enjoyed. Hadad the Edomite, of the royal line of Edom, who had fled to Egypt as a child, returns to trouble the king. Rezon son of Eliada becomes an adversary in Aram, ruling from Damascus and loathing Israel. The peace that had marked Solomon&rsquo;s reign gives way to hostility on the borders, a direct consequence of his unfaithfulness.",
      "The third movement (vv.26&ndash;40) introduces Jeroboam son of Nebat, an able young official set over the forced labor of the house of Joseph, who lifts up his hand against the king. The prophet Ahijah of Shiloh meets him on the road, tears his new cloak into twelve pieces, and gives Jeroboam ten of them, declaring that God will tear ten tribes from Solomon&rsquo;s house and give them to him. One tribe is left to David&rsquo;s line for the sake of the covenant and of Jerusalem.",
      "The final movement (vv.41&ndash;43) closes the account of Solomon&rsquo;s reign. After forty years on the throne of Israel, Solomon dies and is buried in the city of David his father, and Rehoboam his son reigns in his place. The stage is set for the catastrophe of chapter 12, when the united kingdom forged under David and Solomon will be split in two, the northern tribes following Jeroboam and the south remaining loyal to the house of David.",
      "Taken as a whole, 1 Kings 11 is a tragedy of divided worship. Solomon&rsquo;s wisdom could not save him when his heart was drawn away by idolatry; his unequaled glory could not shield him from the consequences of disobedience. Yet even in judgment, the mercy of God toward David&rsquo;s house shines through: the kingdom is torn, but not utterly destroyed, and a lamp is preserved in Jerusalem. The chapter warns every reader that the beginning of faithfulness is no guarantee of its end, and that the heart must be guarded to the last.",
    ],
  },
  {
    id: "Foreign Wives and Idolatry",
    heading: "Solomon&rsquo;s Foreign Wives and Idolatry",
    reference: "1 Kings 11:1&ndash;13",
    paragraphs: [
      "The chapter opens with a blunt indictment: &ldquo;Now King Solomon loved many foreign women, along with the daughter of Pharaoh: Moabite, Ammonite, Edomite, Sidonian, and Hittite women&rdquo; (v.1). These were the very nations concerning which the Lord had warned Israel, &ldquo;You shall not enter into marriage with them, neither shall they with you, for surely they will turn away your heart after their gods&rdquo; (v.2). The danger was never merely political alliance; it was the slow seduction of the heart away from the living God toward the idols of the nations.",
      "The numbers are staggering and the outcome predictable: &ldquo;He had seven hundred wives, who were princesses, and three hundred concubines. And his wives turned away his heart&rdquo; (v.3). The very thing the Lord had forewarned came to pass with relentless certainty. Solomon&rsquo;s vast harem, gathered through diplomacy and indulgence, became the instrument of his spiritual undoing. What he had multiplied for glory became the means of his fall.",
      "The decline came not all at once but with age: &ldquo;For when Solomon was old his wives turned away his heart after other gods, and his heart was not wholly true to the Lord his God, as was the heart of David his father&rdquo; (v.4). The comparison with David is pointed. David sinned grievously, yet his heart remained fundamentally devoted to the Lord; Solomon&rsquo;s heart became divided. The tragedy is not a single act of rebellion but a gradual erosion of wholehearted devotion.",
      "The text names the idols Solomon embraced: &ldquo;For Solomon went after Ashtoreth the goddess of the Sidonians, and after Milcom the abomination of the Ammonites&rdquo; (v.5). He did what was evil in the sight of the Lord and did not wholly follow him as David had done. The king who had built the temple of the true God now lent his name and resources to the worship of false ones, blurring the very distinction his reign was meant to uphold.",
      "Worse still, he built shrines for these gods: &ldquo;Then Solomon built a high place for Chemosh the abomination of Moab, and for Molech the abomination of the Ammonites, on the mountain east of Jerusalem&rdquo; (v.7). And he did likewise for all his foreign wives, who made offerings to their gods. In the shadow of the temple of the Lord, the high places of the nations rose up &mdash; a stark monument to the divided worship that now characterized the kingdom.",
      "The Lord&rsquo;s response is grief and anger: &ldquo;And the Lord was angry with Solomon, because his heart had turned away from the Lord, the God of Israel, who had appeared to him twice&rdquo; (v.9). The privilege Solomon had enjoyed magnified his guilt. God had drawn near to him as to few others, and had commanded him not to go after other gods, yet he had not kept what the Lord commanded. To whom much is given, much is required.",
      "The sentence is grave but tempered by mercy: &ldquo;I will surely tear the kingdom from you and will give it to your servant&rdquo; (v.11). Yet for the sake of David, the judgment is delayed and softened: &ldquo;Yet for the sake of David your father I will not do it in your days, but I will tear it out of the hand of your son&rdquo; (v.12), and one tribe will remain &ldquo;for the sake of David my servant and for the sake of Jerusalem that I have chosen&rdquo; (v.13). Divided worship brings a torn kingdom, but covenant mercy preserves a remnant for the line of David.",
    ],
  },
  {
    id: "Adversaries Raised Up",
    heading: "Adversaries Raised Up: Hadad and Rezon",
    reference: "1 Kings 11:14&ndash;25",
    paragraphs: [
      "Having pronounced judgment, the narrative shows the Lord beginning to execute it through human adversaries: &ldquo;And the Lord raised up an adversary against Solomon, Hadad the Edomite. He was of the royal house in Edom&rdquo; (v.14). The God who had granted Solomon rest on every side now stirs up enemies, and the very phrasing &mdash; &lsquo;the Lord raised up&rsquo; &mdash; makes clear that these troubles are not random misfortune but the sovereign outworking of divine discipline upon an unfaithful king.",
      "Hadad&rsquo;s story reaches back into Israel&rsquo;s earlier history. When David had struck down Edom and Joab had remained there to bury the dead, killing every male in Edom, the young Hadad escaped: &ldquo;Hadad fled to Egypt, together with certain Edomites of his father&rsquo;s servants. Hadad was still a little child&rdquo; (v.17). He found refuge with Pharaoh, who gave him a house, land, and provisions, and even the sister of his own queen in marriage, so that Hadad was raised within the Egyptian royal household.",
      "When Hadad heard that David and Joab were dead, he longed to return to his own country: &ldquo;Let me depart, that I may go to my own country&rdquo; (v.21). Though Pharaoh asked what he lacked that he should wish to leave, Hadad was resolved. He returned to Edom to become a thorn in Solomon&rsquo;s side, a living reminder that the violence of the past and the unfaithfulness of the present together bring forth enemies on the borders of the kingdom.",
      "A second adversary arose to the north: &ldquo;God raised up as an adversary to him, Rezon the son of Eliada, who had fled from his master Hadadezer king of Zobah&rdquo; (v.23). Rezon gathered men around him and became the leader of a marauding band, and after David had defeated Zobah, Rezon went and settled in Damascus, reigning there. Out of the ruins of old conflicts a new enemy established himself at the head of the Aramean kingdom.",
      "Rezon&rsquo;s hostility was settled and enduring: &ldquo;He was an adversary of Israel all the days of Solomon, doing harm as Hadad did. And he loathed Israel and reigned over Syria&rdquo; (v.25). From Damascus he opposed Solomon throughout his reign, a constant pressure on the northern frontier. Where once the surrounding nations had brought tribute and sought Solomon&rsquo;s wisdom, now a hostile power loathed Israel and reigned in defiance.",
      "The theological point of this section is unmistakable. Earlier the text had celebrated that Solomon &ldquo;had peace on all sides around him&rdquo; (5:4), and that Judah and Israel dwelt in safety. Now that rest is gone, replaced by adversaries on every hand. The change is not explained by shifting politics or military weakness but by Solomon&rsquo;s own unfaithfulness. The peace he had enjoyed was the gift of God&rsquo;s favor; its withdrawal is the mark of God&rsquo;s displeasure. When the heart turns from the Lord, the rest he gives is forfeited.",
    ],
  },
  {
    id: "Jeroboam and the Torn Kingdom",
    heading: "Jeroboam and the Torn Kingdom",
    reference: "1 Kings 11:26&ndash;43",
    paragraphs: [
      "The gravest threat to Solomon arose from within his own administration: &ldquo;Jeroboam the son of Nebat, an Ephraimite of Zeredah, a servant of Solomon, lifted up his hand against the king&rdquo; (v.26). Jeroboam was no outsider but a capable young man whom Solomon himself had promoted. Seeing that he was industrious, Solomon &ldquo;gave him charge over all the forced labor of the house of Joseph&rdquo; (v.28). The very labor policies that built Solomon&rsquo;s glory placed an able and ambitious man at the head of the disaffected northern tribes.",
      "On the road outside Jerusalem, Jeroboam was met by a prophet: &ldquo;Ahijah the Shilonite found him on the road. Now Ahijah had dressed himself in a new garment, and the two of them were alone in the open country&rdquo; (v.29). In a dramatic prophetic sign, Ahijah took hold of the new cloak he was wearing &ldquo;and tore it into twelve pieces&rdquo; (v.30). The torn garment became a vivid enacted prophecy of the kingdom about to be rent apart.",
      "Ahijah delivered the word of the Lord: &ldquo;Take for yourself ten pieces, for thus says the Lord, the God of Israel, &lsquo;Behold, I am about to tear the kingdom from the hand of Solomon and will give you ten tribes&rsquo;&rdquo; (v.31). The reason was Solomon&rsquo;s idolatry &mdash; that the people had forsaken the Lord and worshiped Ashtoreth, Chemosh, and Milcom, and had not walked in God&rsquo;s ways. The judgment announced in verses 1 through 13 now took concrete shape in a chosen successor to ten of the tribes.",
      "Yet mercy still tempered the judgment for David&rsquo;s sake: &ldquo;But he shall have one tribe, for the sake of my servant David and for the sake of Jerusalem, the city that I have chosen&rdquo; (v.32). The Lord would not take the whole kingdom from Solomon&rsquo;s line, for the covenant with David must stand and the chosen city be preserved a lamp. The tearing of the kingdom was real, but it was bounded by the faithfulness of God to his ancient promise.",
      "To Jeroboam the Lord offered a conditional promise as great as the one given to David: &ldquo;And if you will listen to all that I command you, and will walk in my ways, and do what is right in my eyes by keeping my statutes and my commandments, as David my servant did, I will be with you and will build you a sure house, as I built for David&rdquo; (v.38). Jeroboam was set before the same choice as every king of Israel &mdash; obedience leading to blessing, or disobedience leading to ruin.",
      "Solomon&rsquo;s response to the prophecy was not repentance but violence: &ldquo;Solomon sought therefore to kill Jeroboam. But Jeroboam arose and fled into Egypt, to Shishak king of Egypt, and was in Egypt until the death of Solomon&rdquo; (v.40). Like Hadad before him, Jeroboam found shelter in Egypt, waiting for the day when the word of the Lord through Ahijah would come to pass. The king who could not bend his own heart toward God now tried in vain to thwart God&rsquo;s purpose by the sword.",
      "The chapter closes with the end of an era: &ldquo;And the time that Solomon reigned in Jerusalem over all Israel was forty years. And Solomon slept with his fathers and was buried in the city of David his father, and Rehoboam his son reigned in his place&rdquo; (vv.42&ndash;43). Forty years of unmatched splendor end in quiet death and an inheritance already marked for division. As Rehoboam takes the throne, the kingdom stands on the brink of the rupture that chapter 12 will bring &mdash; the bitter harvest of a heart that turned away from the Lord.",
    ],
  },
];

const videoItems = [
  { videoId: "Kg1Lm7RcVp9", title: "BibleProject - 1 Kings Overview" },
  { videoId: "Hd3WnQx8bTz", title: "1 Kings 11 - The Fall of Solomon and His Foreign Wives" },
  { videoId: "Rz5YbVc2kPm", title: "Adversaries Raised Up - Hadad, Rezon, and Jeroboam" },
  { videoId: "Aj9XdGb4wQt", title: "The Torn Kingdom - Ahijah's Prophecy to Jeroboam" },
];

export default function FirstKings11GuidePage() {
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
            The First Book of Kings, Chapter 11
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The tragic decline of Solomon: his many foreign wives turn his heart after other gods, and he builds high places for Chemosh, Molech, and Ashtoreth. The Lord raises up adversaries &mdash; Hadad, Rezon, and Jeroboam &mdash; and the prophet Ahijah declares the kingdom will be torn into ten tribes. The seeds sown in earlier chapters now bear bitter fruit.
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
              Deepen your study of 1 Kings 11 through visual teaching on the slow decline of Solomon through his foreign wives and divided worship, the adversaries the Lord raised up to end his rest on every side, and the prophet Ahijah&rsquo;s torn cloak that announced the dividing of the kingdom &mdash; a sober warning that the beginning of faithfulness is no guarantee of its end.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Guard Your Heart</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Kings 11 is a tragedy of divided worship: Solomon&rsquo;s wisdom could not save him when his heart was drawn away, and his glory could not shield him from the consequences of disobedience. Yet even in judgment the mercy of God toward David&rsquo;s house shines through &mdash; the kingdom is torn, but a lamp is preserved in Jerusalem. The heart must be guarded to the very last.
          </p>
        </div>
      </main>
    </div>
  );
}
