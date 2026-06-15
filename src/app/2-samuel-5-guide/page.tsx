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
  "David Anointed King",
  "Conquest of Jerusalem",
  "Victories over Philistines",
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
    heading: "Overview of 2 Samuel 5",
    reference: "2 Samuel 5:1&ndash;25",
    paragraphs: [
      "Second Samuel 5 is one of the great pivot chapters in the entire Old Testament. Everything that preceded it &mdash; David&rsquo;s anointing at Bethlehem, his years of faithful service under Saul, his long flight through the wilderness, the seven years of his reign over Judah alone in Hebron &mdash; has been building to the moment that this chapter describes: the unification of all twelve tribes under the kingship of David, and the establishment of Jerusalem as the city that would become the permanent center of Israel&rsquo;s worship and political life.",
      "The chapter moves through three major episodes. First, the anointing of David as king over all Israel at Hebron (vv. 1&ndash;5): the northern tribes come to David and make a covenant with him, and he is anointed for the third time &mdash; previously over Judah alone in 2:4, and before that by Samuel in private (1 Samuel 16). Now the covenant is made publicly and comprehensively, and David begins his reign over the unified nation. Second, the conquest of Jerusalem from the Jebusites (vv. 6&ndash;12): David captures the fortress of Zion and makes it his capital, the City of David. Third, two campaigns against the Philistines (vv. 17&ndash;25): David inquires of the LORD before each battle, receives specific and different tactical instructions each time, and defeats the Philistines decisively.",
      "The theological thread running through the entire chapter is the phrase that appears in verse 10: &ldquo;And David became greater and greater, for the LORD, the God of hosts, was with him.&rdquo; David&rsquo;s greatness is not attributed to his own military genius, his political skill, or the loyalty of his men, though all of those things are present. His greatness flows from the presence and the blessing of the God who chose him. This is the key to reading the whole chapter: every human action &mdash; the tribal leaders&rsquo; recognition of David, the conquest of the stronghold, the victories over the Philistines &mdash; is set within the larger frame of God&rsquo;s purpose being worked out in history.",
      "It is also worth noting the structural significance of 2 Samuel 5 in the larger arc of David&rsquo;s story. The books of Samuel are, in one sense, the story of the transition from the failed kingship of Saul to the anointed kingship of David. Chapter 5 represents the completion of that transition. The Philistine threat that had loomed over Israel since the days of the judges, and that had brought about the catastrophe of Saul&rsquo;s defeat and death in 1 Samuel 31, is now decisively repulsed by a king who does what Saul failed to do: inquire of the LORD and obey His instruction.",
      "The chapter also anticipates themes that will dominate the rest of Samuel and Kings: the centrality of Jerusalem as the city of God, the covenant relationship between the king and God (elaborated in ch. 7), the danger of the king acquiring many wives (v. 13, a quiet warning that points forward to David&rsquo;s later failures), and the pattern of divine guidance in warfare that establishes the principle that Israel&rsquo;s victories belong to God. Second Samuel 5 is not merely a record of political and military events; it is a theological statement about how kingdoms rise and fall, and about what it looks like when a king is genuinely submitted to the LORD.",
    ],
  },
  {
    id: "David Anointed King",
    heading: "David Anointed King Over All Israel",
    reference: "2 Samuel 5:1&ndash;5",
    paragraphs: [
      "The opening verses of 2 Samuel 5 record one of the most significant moments in the entire history of the Old Testament: the gathering of all the tribes of Israel to Hebron to make David their king. The long fracture that had existed between Judah in the south &mdash; loyal to David since his anointing in 2:4 &mdash; and the northern tribes loyal to Saul&rsquo;s house is finally healed. The elders of Israel come to David, and the language they use reveals both the theological and the relational grounds of the covenant they are making.",
      "The first ground they give is kinship: &ldquo;Behold, we are your bone and your flesh&rdquo; (v. 1). This is the language of covenant relationship going back to Adam&rsquo;s recognition of Eve in Genesis 2:23 &mdash; language that says, &ldquo;we belong together, we are one people.&rdquo; The northern tribes are acknowledging that the division between them and David has been a rupture within the same body. They are coming not as foreigners suing for terms but as brothers returning to the covenant family.",
      "The second ground they give is David&rsquo;s proven record of service: &ldquo;In times past, when Saul was king over us, it was you who led out and brought in Israel. And the LORD said to you, &lsquo;You shall be shepherd of my people Israel, and you shall be prince over Israel&rsquo;&rdquo; (vv. 2&ndash;3). This is a remarkable admission. The elders are acknowledging that even during Saul&rsquo;s reign, it was David who was actually doing the work of leading Israel in battle. The real king had not been the one sitting on the throne; the real king was the one doing the shepherding.",
      "The shepherd metaphor here is deeply significant. In the ancient Near East, the image of the king as shepherd was common &mdash; but in Israel it carries the specific freight of the whole narrative of Moses, who was a literal shepherd before he became the leader of Israel, and of the promise in Ezekiel and Jeremiah that God himself would one day come as a shepherd to gather and care for His scattered flock. When the elders call David to be &ldquo;shepherd of my people Israel,&rdquo; they are placing him in a long line of God&rsquo;s appointed leaders who model their leadership on God&rsquo;s own pastoral care for His people. And they are pointing forward to the Greater Shepherd who would come from David&rsquo;s line.",
      "The covenant-making at Hebron (v. 3) is solemnly formal: the elders of Israel come to King David at Hebron, &ldquo;and King David made a covenant with them at Hebron before the LORD, and they anointed David king over Israel.&rdquo; Three elements stand out: the covenant is made before the LORD, establishing that God is the witness and guarantor of the arrangement; it is a mutual covenant, not simply a submission, suggesting that the king has obligations to the people as well as the people to the king; and it involves a third anointing, signaling the publicly recognized and validated nature of David&rsquo;s kingship over the whole nation.",
      "Verses 4&ndash;5 give a brief summary of David&rsquo;s reign: he was thirty years old when he began to reign, and he reigned forty years. Seven years and six months he reigned over Judah in Hebron, and then thirty-three years he reigned over all Israel and Judah in Jerusalem. The number forty has both symbolic and historical weight &mdash; it echoes the forty years of the wilderness generation, the forty days of Moses on the mountain, the forty years of Saul&rsquo;s reign. It is the number of a complete era, a full generation. David&rsquo;s forty years would prove to be the greatest era of Israel&rsquo;s political history, and the benchmark against which every subsequent king would be measured.",
    ],
  },
  {
    id: "Conquest of Jerusalem",
    heading: "The Conquest of Jerusalem: City of David",
    reference: "2 Samuel 5:6&ndash;16",
    paragraphs: [
      "With the whole nation now behind him, David makes a strategic decision that will shape the rest of biblical history: he selects Jerusalem as his capital. The choice is not accidental. Jerusalem was a Jebusite city that had never been conquered by any Israelite tribe &mdash; it appears in the list of unconquered cities in Judges 1:21. Situated on the boundary between the territories of Judah and Benjamin, it belonged to neither tribe exclusively, which made it an ideal neutral capital for a king trying to unite north and south. David was choosing a city that owed its loyalty to no tribe except to the king who conquered it.",
      "The Jebusites&rsquo; taunt is memorable: &ldquo;You will not come in here, but the blind and the lame will ward you off&rdquo; (v. 6). The precise meaning of this challenge has puzzled interpreters for centuries. The most likely reading is that the Jebusites were so confident in the natural defenses of their hilltop fortress that they were saying even their most vulnerable residents &mdash; the blind and the lame &mdash; could hold off an attack. The city sat on a steep ridge surrounded on three sides by deep valleys, and its walls were formidable. It was not a place that could be taken by a frontal assault.",
      "David&rsquo;s response to the taunt indicates he had already identified the vulnerability in the city&rsquo;s defenses: the water tunnel. Verse 8 says that David told his men, &ldquo;Whoever would strike the Jebusites, let him get up the water shaft to attack the lame and the blind, who are hated by David&rsquo;s soul.&rdquo; The Jebusites had constructed a tunnel system to bring water into the city from the spring of Gihon outside the walls, allowing them to survive a siege. David recognized that this same tunnel was a potential point of entry. The man who went up first would be commander &mdash; and according to 1 Chronicles 11, it was Joab who led the assault and became David&rsquo;s chief military commander.",
      "The capture of Jerusalem is described in verse 7 with the kind of brevity that suggests it was accomplished exactly as David planned: &ldquo;Nevertheless, David took the stronghold of Zion, that is, the city of David.&rdquo; The city that the Jebusites were certain could not fall, fell. And David immediately begins the work of making it his own. He calls it &ldquo;the city of David&rdquo; &mdash; a name that would echo through all of subsequent Scripture, and that would become the city associated above all others with the hope of redemption and the coming of the Messiah.",
      "Verses 9&ndash;12 describe David&rsquo;s building program in the new capital. He builds the Millo &mdash; likely a terraced fill structure that shored up the northern approach to the city and extended the usable area on the hilltop &mdash; and he builds inward from it. Then, remarkably, Hiram king of Tyre sends cedar wood and carpenters and stonemasons to build David a house. Hiram&rsquo;s initiative is significant: he is a foreign king, and his sending craftsmen and materials to David is an act of diplomatic recognition. David has arrived on the international stage.",
      "The narrator&rsquo;s interpretive comment in verse 12 is the theological key to the whole passage: &ldquo;And David knew that the LORD had established him king over Israel, and that he had exalted his kingdom for the sake of his people Israel.&rdquo; David does not interpret his success as a monument to his own abilities. He reads it as the work of God &mdash; and not even God working primarily for David&rsquo;s benefit, but God establishing David&rsquo;s kingdom &ldquo;for the sake of his people Israel.&rdquo; The king is not an end in himself; he exists for the welfare of the people he serves. This is the proper theology of kingship in Israel, and it is David&rsquo;s recognition of it that distinguishes him from Saul, who increasingly turned his kingship inward and used it for his own ends.",
      "Verse 13 introduces a quiet shadow: &ldquo;And David took more concubines and wives from Jerusalem, after he came from Hebron, and more sons and daughters were born to David.&rdquo; The multiplication of wives was explicitly prohibited for the king in Deuteronomy 17:17, lest his heart be led away. The narrator records the fact without editorial comment, but the reader who knows Deuteronomy will hear the warning. The seeds of later tragedy &mdash; Bathsheba, Amnon and Tamar, Absalom&rsquo;s rebellion &mdash; are present in this quiet verse.",
    ],
  },
  {
    id: "Victories over Philistines",
    heading: "Victories over the Philistines: Divine Strategy",
    reference: "2 Samuel 5:17&ndash;25",
    paragraphs: [
      "The final section of 2 Samuel 5 records two battles against the Philistines, and the way these battles are narrated reveals something crucial about what kind of king David is and what kind of kingdom he is building. The Philistines have been Israel&rsquo;s primary military threat throughout the book of Samuel. They were the people who had captured the ark of God (1 Samuel 4), who had slaughtered Israel at Aphek, who had killed Saul and his sons on Mount Gilboa (1 Samuel 31). Now that David has been established as king over all Israel, the Philistines take note: they have a new adversary to contend with.",
      "The Philistines&rsquo; response to David&rsquo;s coronation is immediate: &ldquo;When the Philistines heard that they had anointed David king over Israel, all the Philistines went up to search for David&rdquo; (v. 17). This is a large-scale military mobilization &mdash; not a border skirmish but a full campaign. The Philistines spread out in the Valley of Rephaim (v. 18), a broad valley southwest of Jerusalem that gave them good ground for deploying their forces. The new king of Israel faces his first major military test almost immediately after his coronation.",
      "David&rsquo;s response to the military threat is the key to understanding the whole passage: &ldquo;And David inquired of the LORD, &lsquo;Shall I go up against the Philistines? Will you give them into my hand?&rsquo;&rdquo; (v. 19). This is a simple but profound act. David does not assume that his past victories mean he can trust his own military instincts. He does not convene a council of war and poll his generals. He goes to the LORD and asks. This is the contrast the narrator has been building toward since the opening chapters of 1 Samuel: Saul was a king who, in his failures, consulted everyone but the LORD (or, in his desperation, consulted a medium &mdash; 1 Samuel 28). David is a king who goes to the LORD first.",
      "The LORD&rsquo;s answer is direct: &ldquo;Go up, for I will certainly give the Philistines into your hand&rdquo; (v. 19). David goes up, defeats the Philistines at Baal-perazim, and names the place accordingly: &ldquo;The LORD has broken through my enemies before me like a breaking flood&rdquo; (v. 20). The name Baal-perazim means &ldquo;lord of the breaking through&rdquo; &mdash; and David is deliberately claiming the title for the LORD rather than for himself. The victory belongs to God; David is the instrument, not the agent. The Philistines flee in such haste that they abandon their idols on the field, and David and his men carry them away (v. 21).",
      "The second battle is where the account becomes particularly remarkable. The Philistines come up again, spreading out once more in the Valley of Rephaim. David inquires of the LORD a second time &mdash; and this time the answer is different. Not only does the LORD give him a different tactical instruction, He gives him a specific and extraordinary sign to wait for: &ldquo;When you hear the sound of marching in the tops of the balsam trees, then rouse yourself, for then the LORD has gone out before you to strike down the army of the Philistines&rdquo; (v. 24).",
      "The sound of marching in the treetops is one of the most evocative images in all of the military narratives of the Old Testament. Rather than a frontal assault from the south, David is told to circle around behind the Philistines and approach from the balsam grove (v. 23). He is then to wait &mdash; not until his commanders give the signal, not until the enemy appears to be distracted, but until he hears in the rustling of the leaves the sound of the LORD&rsquo;s own angelic army on the move. The signal for the attack is not a human calculation but a divine whisper in the treetops.",
      "David does exactly as the LORD commanded: &ldquo;And David did as the LORD commanded him, and struck down the Philistines from Geba to Gezer&rdquo; (v. 25). The victory is total and the geography is significant &mdash; Geba and Gezer mark the extent of Philistine territory in the hill country, meaning David has driven them out of the highlands completely. The Philistine threat that has haunted Israel for generations is broken. And the narrator makes clear that it was broken not through David&rsquo;s military genius but through his obedience: he did as the LORD commanded him.",
      "These two battles together form a matched pair that illustrates a fundamental principle of the theology of Samuel: the king who inquires of the LORD and obeys His specific instruction will succeed; the king who relies on his own understanding will fail. Saul&rsquo;s fatal flaw was his tendency to substitute his own judgment for the LORD&rsquo;s command &mdash; most memorably in 1 Samuel 13 and 15. David&rsquo;s crowning virtue in these early chapters is his practice of asking first and moving only when God speaks. Even more striking is that David asks twice, and receives two different answers. God does not give the same strategy for the same enemy. The LORD is not a formula to be applied; He is a living God to be consulted, listened to, and obeyed. That is the lesson 2 Samuel 5 drives home with two vivid military examples.",
    ],
  },
];

const videoItems = [
  { videoId: "lG3m2VXi_vI", title: "David Anointed King Over All Israel - 2 Samuel 5" },
  { videoId: "y8_fJz7-F_M", title: "The City of David - Jerusalem Conquered" },
  { videoId: "kv5GwF8O9lU", title: "David and the Philistines - Battles of Baal-Perazim" },
  { videoId: "Xe_tFl4fmFo", title: "2 Samuel Overview - BibleProject" },
];

export default function TwoSamuelFiveGuidePage() {
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
            2 Samuel 5
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            David is anointed king over all Israel at Hebron, conquers Jerusalem and makes it the City of David, and defeats the Philistines twice &mdash; each time by inquiring of the LORD and obeying His specific strategy, including the mysterious sign of marching in the tops of the balsam trees.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The LORD Has Broken Through</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Second Samuel 5 stands as the high-water mark of David&rsquo;s rise: king over all Israel, master of Jerusalem, victor over the Philistines. But the narrator refuses to let David take the credit. He became greater and greater because the LORD was with him. He conquered because the LORD broke through. He defeated the Philistines because he listened for the sound of marching in the treetops and moved only when God moved. The lesson of 2 Samuel 5 is not that great leaders win great victories &mdash; it is that great victories belong to the God who fights for His people through leaders humble enough to ask, listen, and obey.
          </p>
        </div>
      </main>
    </div>
  );
}
