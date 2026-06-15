"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GOLD = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Solomon and Hiram",
  "Preparing Materials",
  "The Labor Force",
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
    heading: "Overview of 1 Kings 5",
    reference: "1 Kings 5:1&ndash;18",
    paragraphs: [
      "First Kings 5 is the chapter of preparation &mdash; the chapter where a dream begins to take the shape of timber and stone. The dream was David&rsquo;s: he had longed his whole reign to build a permanent house for the LORD, but God had told him that because he had shed so much blood, that task would belong to his son. Now Solomon, the king of peace, has come to the throne, and the great project of David&rsquo;s heart passes into the hands of the son who will fulfill it. First Kings 5 is about what has to happen before a single stone can be laid.",
      "The chapter unfolds in three interlocking movements. The first is diplomatic: Solomon&rsquo;s exchange of letters and envoys with Hiram king of Tyre, establishing the partnership that will supply the essential materials for the Temple (vv.1&ndash;12). The second is logistical: the agreement on what each party will contribute &mdash; Hiram the timber and skill, Solomon the food supply and wages (vv.8&ndash;12). The third is organizational: the massive conscription of labor from all Israel to work in shifts in the forests of Lebanon and in the quarries of Judah (vv.13&ndash;18).",
      "The chapter&rsquo;s opening note is significant: Hiram of Tyre had always loved David (v.1). This is not a cold diplomatic observation; it is a statement about the enduring relational fabric of the ancient world, in which alliances between kings were sealed by personal bonds that outlasted individual reigns. When Hiram heard that Solomon had been anointed in David&rsquo;s place, he sent his servants to him &mdash; an act of courtesy and continuity. The friendship between Tyre and Israel had been David&rsquo;s; now it would be Solomon&rsquo;s too.",
      "The theological center of 1 Kings 5 is a single statement: &ldquo;the LORD gave Solomon wisdom as he promised him&rdquo; (v.12). This verse sits at the hinge of the chapter, after the diplomatic exchange and before the organization of the labor force. It reminds the reader that what looks like international diplomacy and administrative genius is, at its root, the working of a gift. Solomon&rsquo;s ability to negotiate with Hiram, to organize the labor conscription, to manage the supply lines and the material procurement &mdash; all of it flows from the wisdom God had given him at Gibeon (1 Kgs 3:12). The Temple is being built by God&rsquo;s wisdom working through human hands.",
      "The chapter ends with a brief but resonant conclusion: &ldquo;So Hiram supplied Solomon with all the timber of cedar and cypress that he desired, while Solomon gave Hiram twenty thousand cors of wheat as food for his household, and twenty thousand cors of beaten oil. Solomon gave this to Hiram year by year. And the LORD gave Solomon wisdom as he promised him. There was peace between Hiram and Solomon, and the two of them made a treaty. King Solomon drafted forced labor out of all Israel&hellip; So the house of the LORD was prepared to be built&rdquo; (vv.10&ndash;18). The phrase &ldquo;prepared to be built&rdquo; is the chapter&rsquo;s summary statement: everything in 1 Kings 5 is preparation, and preparation of the most careful, most costly, most far-reaching kind. The house of the LORD was ready to rise.",
    ],
  },
  {
    id: "Solomon and Hiram",
    heading: "Solomon&rsquo;s Alliance with Hiram of Tyre",
    reference: "1 Kings 5:1&ndash;12",
    paragraphs: [
      "Hiram of Tyre was no stranger to Israel. He had been David&rsquo;s friend and supplier; when David established his kingdom in Jerusalem, Hiram had sent cedar timber and craftsmen and masons to build David&rsquo;s palace (2 Sam 5:11). The Phoenician city of Tyre, situated on the Mediterranean coast to the northwest of Israel, was the great trading and maritime power of the ancient world, its merchants famous for their skill in woodwork, metalwork, and seamanship. To have Hiram as an ally was to have access to resources and skills that the relatively inland nation of Israel could not easily produce on its own.",
      "When Hiram heard that Solomon had been anointed king in his father&rsquo;s place, he sent his servants to Solomon. The gesture was one of diplomatic courtesy &mdash; acknowledging the new king and reopening the channels of communication that had existed under David. Solomon did not merely receive the greeting; he seized it as an opportunity. He sent a message back to Hiram that was, in effect, a proposal: I intend to build what my father David could not build; I need your help; here is what I propose.",
      "Solomon&rsquo;s message to Hiram is theologically dense for what is ostensibly a diplomatic letter. He explains that David could not build the Temple &ldquo;because of the warfare with which his enemies surrounded him, until the LORD put them under the soles of his feet&rdquo; (v.3). He then announces that God has now &ldquo;given me rest on every side. There is neither adversary nor misfortune&rdquo; (v.4). The Hebrew word for rest here is &ldquo;menukhah,&rdquo; the same word used in Deuteronomy for the rest that God promised his people in the land. Solomon is presenting himself as the king of fulfillment: the warfare of David&rsquo;s era has given way to the peace of Solomon&rsquo;s, and it is precisely this peace that makes the Temple possible.",
      "Solomon&rsquo;s request was specific: he asked Hiram to command that cedars of Lebanon be cut for him, promising that his own servants would work alongside Hiram&rsquo;s, and that he would pay whatever wages Hiram set. He acknowledged what everyone in the ancient world knew: &ldquo;There is no one among us who knows how to cut timber like the Sidonians&rdquo; (v.6). This was not false modesty; the Phoenicians were the acknowledged masters of timber work in the ancient world, and the cedars of Lebanon were the finest building wood available. Solomon needed what Hiram had, and he said so plainly.",
      "Hiram&rsquo;s response was one of great joy: &ldquo;Blessed be the LORD this day, who has given to David a wise son to be over this great people&rdquo; (v.7). This is a remarkable statement from a Gentile king. Hiram does not merely congratulate Solomon on his political qualities; he blesses the LORD, the God of Israel, for having given such a son to David. Whether this represents genuine theological conviction on Hiram&rsquo;s part or is a courtly formula using the language of his guest, the narrator presents it without irony. The wisdom of Solomon was already making an impression on the nations around Israel, precisely as God had promised when he gave it.",
      "The agreement they reached was a model of mutual benefit. Hiram would supply cedar and cypress in quantities Solomon needed, floating the logs by sea down the coast to a place where Solomon&rsquo;s men could take them up. In return, Solomon would supply Hiram&rsquo;s household with twenty thousand cors of wheat and twenty thousand cors of beaten olive oil, year by year. A cor was a large dry or liquid measure, perhaps equivalent to about six or seven bushels; twenty thousand of them was an immense supply, representing the agricultural surplus of a prosperous kingdom. The transaction was not merely commercial; it was a covenant between two kingdoms, sealed with the resources each could best offer the other. The narrator notes simply: &ldquo;There was peace between Hiram and Solomon, and the two of them made a treaty&rdquo; (v.12).",
      "The diplomatic exchange between Solomon and Hiram is one of the earliest examples in Scripture of a sustained international negotiation conducted through written correspondence. Both kings send and receive messages, each crafting his response to the concerns and proposals of the other. The sophistication of this exchange &mdash; the clarity of Solomon&rsquo;s request, the warmth of Hiram&rsquo;s acceptance, the practical details of the agreement &mdash; reflects exactly the kind of wisdom that God had promised to give Solomon. The king who had asked for &ldquo;an understanding mind to govern your people&rdquo; (1 Kgs 3:9) was displaying that mind in the service of the greatest building project the nation had ever undertaken.",
    ],
  },
  {
    id: "Preparing Materials",
    heading: "The Procurement of Timber and Stone",
    reference: "1 Kings 5:6&ndash;12 and 5:17&ndash;18",
    paragraphs: [
      "The materials for the Temple were of a quality befitting its purpose. Cedar of Lebanon was the premier building wood of the ancient world &mdash; fragrant, durable, resistant to rot and insects, prized by every great king from Egypt to Mesopotamia. Cypress wood was similarly excellent, used for flooring and paneling where the cedar was used for the structural beams and walls. The quantity required was enormous: enough to cover the walls, floors, and ceiling of a complex of substantial buildings, including the Temple itself, the porch, the inner sanctuary, the courts, and the royal palace that Solomon would build afterward.",
      "The logistics of timber procurement from Lebanon were formidable. The cedars had to be felled in the mountain forests, dragged down to the coast, bound into rafts, and floated along the Mediterranean coast southward to a point where they could be taken inland. The narrator mentions a harbor that has been identified with the port near Joppa, the ancient city on the coast of Canaan from which Jonah would later attempt his famous escape. The journey from the forests of Lebanon to the building site in Jerusalem involved not only the maritime transport but an overland haul of considerable distance and difficulty.",
      "The stone for the Temple foundations was equally remarkable. Solomon commanded that &ldquo;great, costly stones&rdquo; be quarried to lay the foundation of the house &mdash; &ldquo;dressed stones&rdquo; (v.17). The instruction &ldquo;so they quarried great stones, costly stones, hewed stones, to lay the foundation of the house&rdquo; (v.17) uses terms that indicate very large, carefully worked blocks. Archaeologists have found in the area of the Temple Mount stones of extraordinary size &mdash; some weighing hundreds of tons &mdash; that testify to the massive engineering effort involved in the project.",
      "The detail that will be made fully explicit in 1 Kings 6:7 is already implicit in the preparation described in chapter 5: the stones were to be dressed at the quarry so that no iron tools would be heard at the building site. The silence of the construction was itself significant &mdash; a mark of reverence for the holiness of the place being built. The wood and stone arrived at Jerusalem already finished, already fitted, ready to be assembled without the noise of hammer or chisel. This kind of preparation required extraordinary precision in the quarrying and cutting, and extraordinary communication between the quarriers and the builders about what was needed and in what dimensions.",
      "The cooperation between Hiram&rsquo;s Sidonian craftsmen and Solomon&rsquo;s own builders (the Gebalites &mdash; men of Byblos, another Phoenician city famous for its craftsmen) is mentioned explicitly in verse 18: &ldquo;So Solomon&rsquo;s builders and Hiram&rsquo;s builders and the men of Gebal did the cutting and prepared the timber and the stone to build the house.&rdquo; This was an international construction project at a scale and quality that required the best expertise available. Solomon did not settle for Israelite craftsmen alone when Phoenician skill was superior; he used the resources God had given him &mdash; including the relationship with Hiram &mdash; to build the best possible house for the LORD.",
      "The procurement of materials also points to a larger theological reality. The resources being gathered from Lebanon&rsquo;s forests and Judah&rsquo;s quarries were the creation&rsquo;s best gifts being marshaled in service of the Creator&rsquo;s dwelling. Cedar and cypress, gold and bronze, cut stone and carved wood &mdash; all of it would go into a building whose purpose was to hold the presence of the God who made the trees and the mountains and the ore in the ground. There is something fitting about the creation being shaped by human skill to provide a home for the glory of the Creator &mdash; an echo of the original garden, where God walked with his people in a place of his own making, now given architectural form in the city of David.",
      "It is also worth noting the economic implications of the timber and stone agreement. Solomon was committing Israel to a massive, ongoing food export &mdash; twenty thousand cors of wheat and twenty thousand of olive oil every single year. This was not a one-time payment but an annual tribute, sustainable only if Israel&rsquo;s agricultural productivity was high enough to generate that kind of surplus. The peace that God had given Solomon was not only military rest from enemies; it was the agricultural prosperity that comes when a land is not being ravaged by war. The wheat and oil that paid for the Temple were themselves products of the blessing Solomon&rsquo;s reign represented.",
    ],
  },
  {
    id: "The Labor Force",
    heading: "The Organization of Solomon&rsquo;s Labor Force",
    reference: "1 Kings 5:13&ndash;18",
    paragraphs: [
      "The scale of the Temple project required a labor force that dwarfs anything Israel had organized before. Solomon drafted forced labor from all Israel &mdash; thirty thousand men in a monthly rotation, ten thousand a month going to Lebanon for a month and then having two months at home (v.13). Adoniram was in charge of this labor force &mdash; the same official who will appear again at a painful moment later in the history, when Rehoboam sends him to the rebellious northern tribes and they stone him to death (1 Kgs 12:18). The labor draft that built the Temple would eventually become a major grievance contributing to the kingdom&rsquo;s division.",
      "In addition to the thirty thousand in Lebanon, Solomon had seventy thousand burden-bearers and eighty thousand stonecutters in the hill country (v.15). These are the men doing the heavy work closer to home &mdash; the stonecutters quarrying and dressing the foundation blocks in the Judean hills, the burden-bearers transporting the massive stones from the quarry to the building site. Three thousand three hundred chief officers supervised this enormous workforce (v.16), forming a management structure of considerable complexity. In total, the labor figures in this chapter suggest a project that mobilized the productive capacity of the entire nation.",
      "The number of workers described in 1 Kings 5 is staggering: thirty thousand in Lebanon, seventy thousand burden-bearers, eighty thousand stonecutters &mdash; more than one hundred eighty thousand men engaged in some way in the project, plus over three thousand supervisors. This is not a skilled-craftsmen-only enterprise; it is a national mobilization. Israel was putting its collective strength into the house of God in a way that would leave its mark on the social memory of the nation for generations. The labor involved would have touched nearly every family in the land.",
      "The term translated &ldquo;forced labor&rdquo; or &ldquo;draft labor&rdquo; (Hebrew: &ldquo;mas&rdquo;) raises important questions about the nature of what Solomon was doing. In Deuteronomy, the king was warned not to multiply horses or wives or wealth for himself (Deut 17:16&ndash;17); the law did not explicitly address labor conscription, but the prophetic tradition consistently viewed it as a burden inconsistent with the freedom of the covenant people. The later complaint of the northern tribes to Rehoboam &mdash; &ldquo;your father made our yoke heavy&rdquo; (1 Kgs 12:4) &mdash; echoes precisely the labor policies that began with the Temple project. The building of a house for God came at a human cost that was not forgotten.",
      "The supervisors &mdash; three thousand three hundred in the text of 1 Kings (and thirty-five hundred in the parallel account in 2 Chronicles 2:18) &mdash; represent a substantial administrative apparatus. Each supervisor would have overseen a crew of workmen, coordinated with the supply chain for materials, and reported upward in a chain of command that eventually reached Adoniram and through him to Solomon himself. The existence of this administrative layer required literacy, record-keeping, and organizational capacity that the text takes for granted but that represents a remarkable level of institutional development for a nation that had only recently transitioned from tribal confederation to monarchy.",
      "The chapter&rsquo;s final verse offers a glimpse of the joint operation at the worksite: &ldquo;So Solomon&rsquo;s builders and Hiram&rsquo;s builders and the men of Gebal did the cutting and prepared the timber and the stone to build the house&rdquo; (v.18). The Gebalites &mdash; men from Byblos, the ancient Phoenician city that gave its name to the Bible &mdash; were renowned in antiquity for their skill in stone and wood working. The construction site was an international one, with Israelite, Tyrian, and Byblian workers laboring together on the most sacred project the Israelite world had ever undertaken. The coming together of these different peoples in service of the Temple is itself a small sign of what the Temple was meant to be: a house of prayer for all nations, a place where the glory of God would draw the nations toward himself.",
      "What is most theologically significant about the labor force passage is what it implies about the weight of what was being built. The Temple was not an afterthought or a side project. It was the national priority of Solomon&rsquo;s early reign, demanding the greatest logistical effort Israel had ever mounted, the most extensive diplomatic preparation, and the most skilled craftsmen available anywhere in the ancient Near East. The dream that David could not fulfill, the promise that God had made and that Solomon had been born to keep &mdash; it was now being honored with everything the nation had. &ldquo;So the house of the LORD was prepared to be built&rdquo; (v.18). That single sentence carries the weight of a generation&rsquo;s longing.",
      "The organizational achievement of 1 Kings 5 should also be read as a fulfillment of the wisdom God had given Solomon. Managing one hundred eighty thousand workers across multiple sites, coordinating with a foreign king for the material supply, establishing a fair system of labor rotation so that no family bore the burden continuously, overseeing the precision work of quarrying and cutting stone to fit without tools at the building site &mdash; all of this required exactly the &ldquo;understanding mind&rdquo; that Solomon had asked for at Gibeon. The wisdom given for governance (1 Kgs 3:9) expressed itself in practical mastery of administration, diplomacy, and logistics. The gift fit the task; the task revealed the gift.",
    ],
  },
];

const videoItems = [
  { videoId: "3m8Bn2EeJ8M", title: "1 Kings 5 Explained - Solomon Prepares to Build the Temple" },
  { videoId: "YfGFTnJh-e4", title: "Solomon and Hiram of Tyre - Alliance for the Temple" },
  { videoId: "fjdGwbTacQ4", title: "The Temple of Solomon - Materials, Labor, and Design" },
  { videoId: "gMF3s2LkANE", title: "Solomon's Wisdom and the Building of God's House" },
];

export default function Kings5GuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${GOLD}22`, color: GOLD, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament &mdash; 1 Kings
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            1 Kings 5: Solomon Prepares to Build the Temple
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Solomon&rsquo;s alliance with Hiram of Tyre, the procurement of cedar and cypress from Lebanon, and the organization of Israel&rsquo;s massive labor force &mdash; every detail of preparation for the house the LORD had promised David his son would build.
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
                border: `1px solid ${activeTab === t ? GOLD : BORDER}`,
                background: activeTab === t ? GOLD : CARD,
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
            <div style={{ color: GOLD, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
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

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            So the House of the LORD Was Prepared to Be Built
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem" }}>
            First Kings 5 is a chapter of holy preparation &mdash; the long, careful, costly work of making ready what David had dreamed and God had promised. Solomon&rsquo;s diplomacy with Hiram, the procurement of Lebanon&rsquo;s cedar, the mobilization of Israel&rsquo;s labor force: all of it flows from the wisdom God had given him, and all of it serves the single purpose of giving the LORD a house worthy of his name.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            The Temple that will rise from this preparation is a foreshadowing of a greater dwelling of God with man: the Word made flesh who &ldquo;tabernacled among us&rdquo; (John 1:14), and the new Jerusalem of Revelation 21 where God&rsquo;s dwelling is with his people forever. Every stone Solomon laid points beyond itself to the day when the glory of God will fill a universe made new.
          </p>
        </div>

        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Key Verse</div>
            <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>
              &ldquo;Blessed be the LORD this day, who has given to David a wise son to be over this great people.&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 12, margin: "8px 0 0", fontWeight: 600 }}>1 Kings 5:7</p>
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Wisdom Given</div>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>
              &ldquo;And the LORD gave Solomon wisdom, as he promised him. And there was peace between Hiram and Solomon, and the two of them made a treaty.&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 12, margin: "8px 0 0", fontWeight: 600 }}>1 Kings 5:12</p>
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Peace for the Temple</div>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>
              &ldquo;The LORD my God has given me rest on every side. There is neither adversary nor misfortune. And so I intend to build a house for the name of the LORD my God.&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 12, margin: "8px 0 0", fontWeight: 600 }}>1 Kings 5:4&ndash;5</p>
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Cross-References and Background</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 130, flexShrink: 0 }}>2 Samuel 5:11</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>Hiram of Tyre sent cedar timber and carpenters and masons to build David&rsquo;s palace &mdash; the earlier partnership that Solomon is now extending for the Temple project.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 130, flexShrink: 0 }}>1 Kings 3:5&ndash;14</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>God&rsquo;s gift of wisdom to Solomon at Gibeon, which is referenced explicitly in 5:12 as the foundation of the successful treaty with Hiram and the management of the project.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 130, flexShrink: 0 }}>2 Samuel 7:1&ndash;17</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>God&rsquo;s promise to David that his son would build the Temple &mdash; the covenant promise that Solomon is now fulfilling, as he explains explicitly to Hiram in his opening message.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 130, flexShrink: 0 }}>1 Kings 6:7</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>The silence of the construction site &mdash; no iron tools heard &mdash; made possible by the precision quarrying described in chapter 5, where the stones were dressed before arriving at Jerusalem.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 130, flexShrink: 0 }}>1 Kings 12:4, 18</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>The labor grievance that surfaces under Rehoboam: the northern tribes remember the forced labor of chapter 5, and Adoniram its overseer is stoned to death when Rehoboam sends him to them.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 130, flexShrink: 0 }}>Deuteronomy 12:5&ndash;11</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>The Mosaic instruction to seek the LORD &ldquo;at the place that the LORD your God will choose&rdquo; &mdash; the theological warrant for the Temple that Solomon now begins to build in Jerusalem.</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
