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
  "David's Charge to Solomon",
  "Solomon's Early Reign",
  "Justice and Kingship",
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
    heading: "Overview of 1 Kings 2",
    reference: "1 Kings 2:1&ndash;46",
    paragraphs: [
      "First Kings 2 is one of the most consequential chapters in all of Scripture. It stands at the hinge between two eras: the long reign of David, Israel&rsquo;s greatest king, and the beginning of Solomon&rsquo;s forty-year rule. The chapter opens with a dying father speaking words of immense weight to his son, and it closes with the blunt verdict, &ldquo;So the kingdom was established in the hand of Solomon&rdquo; (v.46). Between those two poles lies a series of difficult acts that, seen rightly, reveal the outworking of both covenant promise and covenant justice.",
      "The chapter divides cleanly into two movements. The first (vv.1&ndash;12) is David&rsquo;s deathbed charge and his subsequent death. The second (vv.13&ndash;46) is Solomon&rsquo;s consolidation of his throne through a series of judgments upon those who posed threats, whether political, military, or spiritual. Critics have sometimes read the second half as cold political calculation; the text invites us to read it as the execution of the law of the king, rooted in the Mosaic covenant.",
      "The chapter cannot be understood apart from what came before it. Chapter 1 narrated the coup attempt of Adonijah, David&rsquo;s elder son, who declared himself king without his father&rsquo;s knowledge and gathered significant supporters including Joab the commander of the army and Abiathar the priest. The plot was foiled by the prophet Nathan and Bathsheba; David reaffirmed his oath that Solomon would succeed him, and Solomon was anointed. The unresolved tensions of that episode &mdash; Adonijah, Joab, Abiathar, Shimei &mdash; all find their resolution in chapter 2.",
      "The theological backbone of the chapter is Deuteronomy 17:14&ndash;20, the law of the king. That passage requires the king of Israel to write out a copy of the law, read it all the days of his life, and order his reign according to the covenant of Moses. The curses and blessings of that covenant do not evaporate when a new king is crowned; they abide, and the character of a king&rsquo;s reign is measured precisely by his fidelity to them. David&rsquo;s charge to Solomon is nothing less than a summary of that Deuteronomic standard, pressed upon him at the last possible moment.",
      "The reader should also notice the subtle way the narrator frames the acts of judgment in the second half. Each execution or exile is tied explicitly to prior guilt or prior oaths. Adonijah is executed for an act that amounts to a second bid for the throne. Abiathar is exiled in fulfillment of the word spoken against the house of Eli in 1 Samuel 2:31&ndash;33. Joab is executed for the innocent blood of Abner and Amasa, precisely the guilt David had named. Shimei is executed for violating an oath he himself had sworn. This is not political convenience dressed up as justice; it is the covenant world taking its natural shape.",
      "First Kings 2 also introduces a theme that will run through the entire book: the tension between divine promise and human failure. The Davidic covenant promise (vv.3&ndash;4) is conditional &mdash; &ldquo;if your sons pay close attention to their way, to walk before me in faithfulness with all their heart and with all their soul, you shall not lack a man on the throne of Israel.&rdquo; The book of 1 Kings will spend the next twenty chapters watching that condition be tested, strained, and ultimately broken by Solomon himself. The seeds of the kingdom&rsquo;s tragedy are sown even in the chapter of its establishment.",
    ],
  },
  {
    id: "David's Charge to Solomon",
    heading: "David&rsquo;s Charge to Solomon",
    reference: "1 Kings 2:1&ndash;9",
    paragraphs: [
      "David&rsquo;s deathbed speech in verses 1&ndash;9 is one of the most carefully composed passages in the Hebrew Bible. In a mere nine verses it accomplishes three things simultaneously: it frames Solomon&rsquo;s coming reign within the Mosaic covenant, it secures the Davidic covenant promise, and it addresses specific unfinished business that Solomon must handle. The interweaving of these three strands is deliberate, and they should not be separated as if the covenant material were pious window dressing on the political instructions.",
      "David opens with the universal human reality: &ldquo;I am about to go the way of all the earth&rdquo; (v.2). This is not despair but honesty. David is a man under the covenant of Moses, which means even the king is mortal, even the king stands before the Lord, and even the king&rsquo;s legacy depends on what he passes on. The charge that follows is the charge of a father who knows that the work of his life will only be secured if it is grounded in something greater than himself.",
      "The heart of the charge is verses 2&ndash;4: &ldquo;Be strong, and show yourself a man, and keep the charge of the LORD your God, walking in his ways and keeping his statutes, his commandments, his rules, and his testimonies, as it is written in the Law of Moses, that you may prosper in all that you do and wherever you turn, that the LORD may establish his word that he spoke concerning me, saying, &lsquo;If your sons pay close attention to their way, to walk before me in faithfulness with all their heart and with all their soul, you shall not lack a man on the throne of Israel.&rsquo;&rdquo; Every word here is loaded with covenant significance. The phrase &ldquo;the Law of Moses&rdquo; points directly back to Deuteronomy. The condition &ldquo;if your sons pay close attention to their way&rdquo; is an echo of the great Deuteronomic &ldquo;if&mdash;then&rdquo; structure that governs blessing and curse throughout the Torah.",
      "The phrase &ldquo;be strong and show yourself a man&rdquo; (v.2) is strikingly similar to Joshua 1:6&ndash;7, where the Lord charged Joshua as he took over from Moses: &ldquo;Be strong and courageous.&rdquo; The echo is not accidental. Solomon stands in a line of succession that goes Moses&mdash;Joshua&mdash;David&mdash;Solomon. Each transition is marked by a charge to the new leader to be strong and to keep the law. The form of David&rsquo;s speech signals to the reader that what is happening here is not merely political succession but covenantal succession.",
      "Verses 5&ndash;6 turn to Joab. David&rsquo;s brief against Joab is precise: he &ldquo;killed the two commanders of the armies of Israel, Abner the son of Ner and Amasa the son of Jether&rdquo; &mdash; shed &ldquo;innocent blood&rdquo; &mdash; and &ldquo;put the blood of war on the belt around his waist and on the sandals on his feet.&rdquo; This is not a personal grudge. Abner (2 Sam 3) and Amasa (2 Sam 20) were killed by Joab treacherously, outside the proper context of war, making it murder rather than military action. The law of Moses required that innocent blood be purged (Num 35:33; Deut 19:10&ndash;13). David had been unable to act &mdash; &ldquo;I was gentle today, though anointed king&rdquo; (2 Sam 3:39) &mdash; but the obligation did not dissolve. Solomon, as the new king, inherits both the blessing and the outstanding claims of the covenant.",
      "Verses 7 addresses the sons of Barzillai the Gileadite with a completely different tone: &ldquo;Deal loyally with them, and let them be among those who eat at your table.&rdquo; Barzillai had shown extraordinary kindness to David during the flight from Absalom, supplying food to the exhausted king at Mahanaim (2 Sam 17:27&ndash;29). Covenant faithfulness (the Hebrew &ldquo;hesed&rdquo;) shown to God&rsquo;s anointed carries its own weight; it does not go unrewarded under a righteous king. The charge to honor Barzillai&rsquo;s family is the positive, generous face of the same covenantal seriousness that demands Joab be brought to justice.",
      "Verse 8&ndash;9 address Shimei, the Benjaminite from Bahurim who cursed David bitterly during the Absalom crisis (2 Sam 16:5&ndash;14). David had sworn to him at the time, &ldquo;You shall not die&rdquo; (2 Sam 19:23). David&rsquo;s charge to Solomon does not ask him to break that oath &mdash; it asks him to act wisely within it. Shimei violated the boundary conditions of his pardon by leaving Jerusalem against the explicit oath he later swore to Solomon (1 Kgs 2:36&ndash;44); his execution is not a breaking of David&rsquo;s oath but the consequence of Shimei&rsquo;s own. David&rsquo;s words, &ldquo;do not hold him guiltless, for you are a wise man,&rdquo; anticipate exactly that sequence.",
    ],
  },
  {
    id: "Solomon's Early Reign",
    heading: "Solomon&rsquo;s Early Reign",
    reference: "1 Kings 2:10&ndash;35",
    paragraphs: [
      "David died after a reign of forty years &mdash; seven years in Hebron and thirty-three in Jerusalem (v.11). His burial in the city that bore his name, the City of David, is significant. Jerusalem was the city he had captured and made the political and spiritual capital of the nation. He had brought the ark there. He had longed to build the Temple there. His bones would rest there through the entire history of the monarchy, and the Gospel of John will note that his tomb was still known in the first century. The narrator says simply, &ldquo;David slept with his fathers and was buried in the city of David&rdquo; (v.10).",
      "The transition is swift: &ldquo;Solomon sat on the throne of David his father, and his kingdom was firmly established&rdquo; (v.12). But &ldquo;firmly established&rdquo; is prospective; the narrator is summarizing what will be demonstrated over the next thirty-three verses. What follows is a series of four encounters that test whether Solomon has the wisdom and the will to be the king David charged him to be.",
      "The first test comes from an unexpected quarter. Adonijah, Solomon&rsquo;s half-brother and the failed rival king, comes to Bathsheba with a request that seems innocuous: would the queen mother ask Solomon to give him Abishag the Shunammite as his wife? Abishag had served David as a companion in his final days (1 Kgs 1:1&ndash;4). The request appears gentle &mdash; Adonijah appeals to Bathsheba&rsquo;s sympathies and protests that he simply wants a wife. But Solomon sees through it immediately. In the ancient Near East, possession of a royal concubine or attendant was a claim to royal power. Absalom had made this explicit when he publicly took David&rsquo;s concubines as a signal that he was the new king (2 Sam 16:20&ndash;22). Adonijah&rsquo;s request for Abishag is, in effect, a renewed bid for the throne.",
      "Solomon&rsquo;s response to his mother Bathsheba is sharp and clear: &ldquo;Ask for him the kingdom also!&rdquo; (v.22). He recognizes that granting this request would be granting Adonijah a symbolic claim to royal succession. And Adonijah already had Abiathar the priest and Joab the military commander &mdash; the two most powerful figures in their respective spheres &mdash; as his allies from the failed coup. The combination of Abishag, Abiathar, and Joab would constitute a credible coalition against Solomon. The king acts decisively: Benaiah is sent, and Adonijah is executed.",
      "The second judgment falls on Abiathar the priest. Unlike Adonijah, Abiathar is not executed but exiled to his estate in Anathoth. Solomon acknowledges his long service to David: &ldquo;you carried the ark of the Lord God before David my father, and you shared in all my father&rsquo;s affliction&rdquo; (v.26). But his support of Adonijah&rsquo;s conspiracy made his continuation in the priesthood impossible. The narrator pauses to make an important observation: &ldquo;So Solomon expelled Abiathar from being priest to the Lord, thus fulfilling the word of the Lord that he had spoken concerning the house of Eli in Shiloh&rdquo; (v.27). The word spoken in 1 Samuel 2:31&ndash;33, condemning the house of Eli, is now completed. Zadok the priest takes Abiathar&rsquo;s place, marking a transition of priestly lineages that will endure through the rest of the monarchy and into the Second Temple period.",
      "Joab&rsquo;s end is more dramatic. Hearing that Adonijah and Abiathar have been dealt with, he flees to the tent of the Lord and grasps the horns of the altar. The altar was a recognized place of sanctuary for those who had committed accidental or disputable bloodshed. But Joab&rsquo;s bloodshed was neither accidental nor disputable. When Benaiah is sent and reports that Joab refuses to leave the altar, Solomon orders him to be struck down there: &ldquo;Do as he has said, strike him down and bury him, and thus take away from me and from my father&rsquo;s house the guilt for the blood that Joab shed without cause&rdquo; (v.31). The altar could not shelter deliberate murderers. Numbers 35:33 is explicit: the land is polluted by blood, and blood can only be atoned for by the blood of the one who shed it.",
    ],
  },
  {
    id: "Justice and Kingship",
    heading: "Justice and Kingship",
    reference: "1 Kings 2:36&ndash;46 and the Deuteronomic Vision",
    paragraphs: [
      "The final episode of the chapter concerns Shimei, and it is the most carefully staged of the four judgments. Solomon does not execute Shimei immediately. Instead he constructs a kind of probation: Shimei is to build a house in Jerusalem, to live within the city, and never cross the brook Kidron. &ldquo;On the day you go out and cross the brook Kidron, know for certain that you shall die. Your blood shall be on your own head&rdquo; (v.37). Shimei accepts these terms with apparent sincerity: &ldquo;What you say is good; as my lord the king has said, so will your servant do.&rdquo;",
      "For three years Shimei remains faithful to the arrangement. Then two of his servants run away to Achish king of Gath. Shimei saddles his donkey and goes to Gath to retrieve them. The act is understandable humanly speaking &mdash; he went to get his servants back, not to rebel against Solomon. But he had sworn an oath before the king and before the Lord, and he had crossed the line that oath defined. When Solomon hears of it, the verdict comes down without anger but with clarity: &ldquo;You know in your own heart all the harm that you did to David my father. So the LORD will bring back your harm on your own head&rdquo; (v.44). The execution follows.",
      "The chapter ends with the narrator&rsquo;s summary verdict: &ldquo;So the kingdom was established in the hand of Solomon&rdquo; (v.46). This is a precise echo of verse 12, which said &ldquo;his kingdom was firmly established.&rdquo; The bracketing is intentional. What has happened between those two verses is not palace intrigue but the establishing of a kingdom &mdash; the removal of all those whose guilt, unpunished, would have corrupted the reign from the beginning. Solomon&rsquo;s kingdom is established as a kingdom of justice, not of sentimentality.",
      "The Deuteronomic background is essential for understanding why the narrator presents these events without apparent moral discomfort. Deuteronomy 17:8&ndash;13 establishes the king as the chief judicial officer of the covenant community, responsible for executing the judgments of the law. Deuteronomy 19:11&ndash;13 demands that the elders of the city hand over a deliberate murderer even if he has fled to a city of refuge, and that the avenger of blood strike him down: &ldquo;Your eye shall not pity him, but you shall purge the guilt of innocent blood from Israel.&rdquo; Solomon&rsquo;s acts in 1 Kings 2 are, in their essential shape, the acts of a Deuteronomic king doing what the law requires.",
      "This chapter also carries a profound theological message about the relationship between mercy and justice. David had been merciful in ways that created unresolved tensions: he wept for Absalom instead of dealing with his rebellion (2 Sam 18:33), he spared Shimei, he was unable to punish Joab. His mercy was genuine and often right &mdash; and yet mercy that does not eventually give way to justice produces a kingdom of unresolved guilt. Solomon&rsquo;s willingness to act, directed by his father&rsquo;s wisdom, clears the slate. The theme resonates far beyond the ancient Near East: every covenant community must reckon with the question of how long mercy can be extended before unaddressed injustice corrupts the whole.",
      "There is also a Christological shadow here, which the New Testament presses upon us. The writer to the Hebrews (Heb 1:5, 13) applies the royal psalms to Jesus and presents him as the greater Davidic king. In Solomon establishing his kingdom through a series of judgments, ancient readers would see a foreshadowing of the eschatological kingdom in which every outstanding account is finally and rightly settled. The enemies of the Messiah will be made a footstool (Ps 110:1, quoted multiple times in the New Testament); the innocent blood that has accumulated will be avenged (Rev 6:10); every corruption that has infiltrated the community of God will be purged. Solomon in chapter 2 is not a model of Christian behavior so much as a type of the coming King under whom all things will be set right.",
      "The call to walk in the ways of the Lord, to keep his statutes and commandments as written in the Law of Moses &mdash; David&rsquo;s final charge to Solomon &mdash; is also, in its ultimate form, the call that rings through the whole of Scripture. The prophets will return to it when the monarchy fails. The psalmists will sing it as the longing of every faithful heart. And the New Testament will present Jesus as the one in whom the entire requirement of the law is fulfilled &mdash; and who, by his Spirit, writes that law on the hearts of his people, as Jeremiah and Ezekiel had promised. First Kings 2 is thus not an ending but a beginning, the opening note of a long story whose resolution lies far beyond the era of the kings.",
    ],
  },
];

const videoItems = [
  { videoId: "XjB3VjM4_aM", title: "1 Kings 2 Explained - David's Charge and Solomon's Kingdom" },
  { videoId: "K1WP_2IqT5c", title: "David's Final Words to Solomon - Be Strong, Keep the Law" },
  { videoId: "Ng0d7GmkGBE", title: "The Davidic Covenant and the Law of the King" },
  { videoId: "7K7tGlvHzBk", title: "Solomon Establishes His Kingdom - Justice in 1 Kings 2" },
];

export default function Kings2GuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament &mdash; 1 Kings
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            1 Kings 2: David&rsquo;s Final Charge to Solomon
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            David&rsquo;s deathbed charge to Solomon &mdash; &ldquo;Be strong and show yourself a man, keep the charge of the LORD your God&rdquo; &mdash; and Solomon&rsquo;s establishment of his kingdom through covenant justice, fulfilling the law of Moses and the word of the prophets.
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
            >
              {t}
            </button>
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

        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {videoItems.map((v) => (
            <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId={v.videoId} title={v.title} />
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            Keep the Charge of the LORD Your God
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem" }}>
            David&rsquo;s dying words to Solomon are not a political strategy but a covenant commission: walk in God&rsquo;s ways, keep his statutes and commandments as written in the Law of Moses, and you will prosper. The rest of 1 Kings is the story of how that charge was honored and broken &mdash; and what that cost the nation.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            The four judgments of chapter 2 are not brutal realpolitik but the establishing of a kingdom of justice &mdash; clearing from the foundation every corruption that would eventually undermine it. In this, Solomon points ahead to a greater King who will one day establish a kingdom on a foundation of perfect righteousness, where every wrong is righted and every covenant promise fully kept.
          </p>
        </div>

        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Key Verse</div>
            <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>
              &ldquo;Be strong, and show yourself a man, and keep the charge of the LORD your God, walking in his ways and keeping his statutes&hellip; that you may prosper in all that you do and wherever you turn.&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 12, margin: "8px 0 0", fontWeight: 600 }}>1 Kings 2:2&ndash;3</p>
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>The Davidic Covenant</div>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>
              The promise is conditional: &ldquo;if your sons pay close attention to their way, to walk before me in faithfulness with all their heart and with all their soul, you shall not lack a man on the throne of Israel.&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 12, margin: "8px 0 0", fontWeight: 600 }}>1 Kings 2:4</p>
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Kingdom Established</div>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>
              After David&rsquo;s death and Solomon&rsquo;s four judgments, the chapter closes: &ldquo;So the kingdom was established in the hand of Solomon.&rdquo; Justice is the foundation on which the kingdom rests.
            </p>
            <p style={{ color: MUTED, fontSize: 12, margin: "8px 0 0", fontWeight: 600 }}>1 Kings 2:46</p>
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Cross-References and Background</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 120, flexShrink: 0 }}>Deut 17:14&ndash;20</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>The law of the king &mdash; must write out and read the law, not acquiring too many horses, wives, or wealth; the structural background for David&rsquo;s charge.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 120, flexShrink: 0 }}>1 Sam 2:31&ndash;33</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>The word against the house of Eli, fulfilled when Abiathar is exiled to Anathoth (1 Kgs 2:27), ending the priestly line of Ithamar.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 120, flexShrink: 0 }}>2 Sam 3:27&ndash;30</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>Joab&rsquo;s murder of Abner at the gate of Hebron &mdash; the first of the innocent blood that David named and Solomon was charged to avenge.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 120, flexShrink: 0 }}>Num 35:33</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>Blood pollutes the land; the altar cannot shelter a deliberate murderer &mdash; the legal principle behind Joab&rsquo;s execution at the horns of the altar.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 120, flexShrink: 0 }}>Josh 1:6&ndash;7</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>The LORD&rsquo;s charge to Joshua echoes David&rsquo;s charge to Solomon: &ldquo;Be strong and courageous&hellip; be careful to do according to all the law.&rdquo;</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
