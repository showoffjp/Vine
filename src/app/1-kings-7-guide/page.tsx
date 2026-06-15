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
  "Solomon's Palace Complex",
  "Hiram and the Bronze Pillars",
  "The Bronze Sea and Furnishings",
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
    heading: "Palace and Temple Furnishings",
    reference: "1 Kings 7:1&ndash;51",
    paragraphs: [
      "1 Kings 7 follows directly on the heels of the completed Temple in chapter 6, and it opens with a turn that has provoked centuries of reflection: &ldquo;Solomon was building his own house thirteen years, and he finished his entire house&rdquo; (v.1). The house of the Lord had taken seven years; Solomon&rsquo;s own palace complex took nearly twice as long. The chapter unfolds in two great movements &mdash; first the royal buildings that Solomon raised for himself (vv.1&ndash;12), and then the magnificent bronze and gold furnishings made for the Temple (vv.13&ndash;51).",
      "The first movement surveys an entire complex of state buildings. There was the House of the Forest of Lebanon, named for its forest of cedar pillars; the Hall of Pillars, a great colonnaded porch; the Hall of the Throne, also called the Hall of Justice, where Solomon would sit to render judgement; and Solomon&rsquo;s own residence together with a house built for Pharaoh&rsquo;s daughter, whom he had married (vv.2&ndash;8). The whole was constructed of costly dressed stones, sawn with saws, from foundation to coping, and surrounded by a great court (vv.9&ndash;12).",
      "The narrative then shifts to a single remarkable craftsman. Solomon sent to Tyre and brought back Hiram &mdash; sometimes called Huram &mdash; a man &ldquo;full of wisdom, understanding, and skill for making any work in bronze&rdquo; (v.14). The language deliberately echoes the description of Bezalel, the Spirit-filled artisan who built the tabernacle in Exodus. Hiram is the master metalworker through whom the Temple receives its furnishings, and the rest of the chapter is essentially a catalogue of his glorious work.",
      "Hiram&rsquo;s first and most celebrated achievement was the casting of the two great bronze pillars set at the entrance of the Temple porch (vv.15&ndash;22). The pillar on the right he named Jachin, and the pillar on the left he named Boaz. Each was crowned with an elaborate capital decorated with networks of chains, lily-work, and rows of pomegranates. These two named pillars, standing as sentinels at the threshold of the house of God, are among the most theologically suggestive features of the entire structure.",
      "Next came the molten Sea (vv.23&ndash;26), an enormous round basin of bronze ten cubits across, resting on twelve bronze oxen arranged in four groups of three, each group facing one of the four points of the compass. It held a vast quantity of water for the priests to wash, a sea of cleansing standing in the Temple court. Then Hiram made ten wheeled bronze stands and their basins (vv.27&ndash;39), together with the pots, shovels, and basins for the service of the house (vv.40&ndash;47).",
      "The chapter draws to a close by noting that the bronze was so abundant that &ldquo;the weight of the bronze was not ascertained&rdquo; (v.47), and by listing the golden furnishings of the inner house: the golden altar, the golden table for the bread of the Presence, the lampstands, and all the vessels of pure gold (vv.48&ndash;50). Finally, Solomon brought in the silver, the gold, and the vessels that David his father had dedicated, storing them in the treasuries of the house of the Lord (v.51). With everything complete, the stage is set for the climactic dedication of chapter 8.",
    ],
  },
  {
    id: "Solomon's Palace Complex",
    heading: "Solomon&rsquo;s Palace Complex",
    reference: "1 Kings 7:1&ndash;12",
    paragraphs: [
      "The chapter begins with a verse that careful readers cannot pass over without pausing: &ldquo;Solomon was building his own house thirteen years, and he finished his entire house&rdquo; (v.1). Set against the previous chapter&rsquo;s note that the Temple was completed in seven years (1 Kgs 6:38), the figure invites comparison. Thirteen years for the palace, seven for the house of God. The narrator does not editorialise, but the simple juxtaposition raises a quiet question about the proportion of a king&rsquo;s devotion and the ordering of his priorities.",
      "It would be too hasty, however, to read the longer timetable simply as a rebuke. The palace was not a single building but a whole governmental complex serving the administration of the kingdom, and its greater scale and varied purposes naturally demanded more time. The text presents the achievement with admiration as well, cataloguing the buildings with evident wonder at their grandeur. The honest tension &mdash; magnificence to be admired, yet a warning lurking in the sheer accumulation &mdash; runs through the whole passage and indeed through Solomon&rsquo;s reign.",
      "First among the buildings was the House of the Forest of Lebanon (vv.2&ndash;5), so named because it was built upon four rows of cedar pillars, with cedar beams laid across them, so that the interior resembled a forest of timber. It measured a hundred cubits long, fifty wide, and thirty high, making it the largest of all Solomon&rsquo;s buildings. It likely served as an armoury and a hall of state, a vast and imposing space whose rows of pillars proclaimed the resources and reach of the kingdom.",
      "Then there was the Hall of Pillars (v.6), a colonnaded porch fifty cubits long and thirty wide, with a portico and pillars before it. This functioned as a grand entryway or waiting hall, a transitional space of approach. Beyond it stood the Hall of the Throne, also called the Hall of Justice, &ldquo;where he was to pronounce judgment&rdquo; (v.7). Here Solomon set his throne and rendered the wise rulings for which he became famous, the room panelled with cedar from floor to ceiling. The administration of justice was given its own dignified architectural setting at the heart of the royal compound.",
      "The account then turns to Solomon&rsquo;s own residence and to a separate house built for Pharaoh&rsquo;s daughter, whom he had taken in marriage (v.8). The mention of the Egyptian princess is significant. It points forward to the great danger of Solomon&rsquo;s later years, when his many foreign wives turned his heart toward other gods (1 Kgs 11). Even amid the splendour of the palace, the text plants a seed of the trouble to come, reminding the reader that grandeur and faithfulness do not always grow together.",
      "The materials are described with the same loving attention given to the Temple. &ldquo;All these were made of costly stones, cut according to measure, sawn with saws, back and front&rdquo; (v.9), with massive foundation stones of eight and ten cubits, and a finishing of cedar above. A great court surrounded the whole, with three courses of cut stone and a course of cedar beams, like the inner court of the house of the Lord (vv.10&ndash;12). The craftsmanship was superb, the expense enormous, and the result a complex of breathtaking beauty.",
      "Yet the reader trained by the law cannot forget Deuteronomy&rsquo;s warning about kings. The king of Israel was not to &ldquo;acquire many horses for himself, or cause the people to return to Egypt&rdquo; and not to &ldquo;acquire excessive silver and gold&rdquo; (Deut 17:16&ndash;17). Solomon&rsquo;s alliance with Egypt, his accumulation of treasure, and his vast building programme all gesture toward the very temptations that law foresaw. 1 Kings 7 thus holds two truths together: the legitimate glory of Solomon&rsquo;s God-given wisdom and wealth, and the shadow of an accumulation that would later draw his heart away from wholehearted devotion to the Lord.",
    ],
  },
  {
    id: "Hiram and the Bronze Pillars",
    heading: "Hiram and the Two Bronze Pillars",
    reference: "1 Kings 7:13&ndash;22",
    paragraphs: [
      "With the royal buildings described, the chapter introduces the figure who dominates the rest of it: &ldquo;King Solomon sent and brought Hiram from Tyre. He was the son of a widow of the tribe of Naphtali, and his father was a man of Tyre, a worker in bronze&rdquo; (vv.13&ndash;14). This Hiram &mdash; distinct from King Hiram of Tyre &mdash; was of mixed Israelite and Phoenician descent, an inheritor of the famed metalworking tradition of the Phoenician coast, and now summoned to lend his art to the house of the Lord.",
      "The description of his gifts is striking: he was &ldquo;full of wisdom, understanding, and skill for making any work in bronze&rdquo; (v.14). These three words &mdash; wisdom, understanding, and skill &mdash; deliberately echo the language used of Bezalel, the craftsman whom God filled with his Spirit to build the tabernacle (Exod 31:3; 35:31). The parallel is intentional. As Bezalel was to the tent of meeting, so Hiram is to the Temple: a divinely gifted artisan whose skilled hands give tangible, beautiful form to the worship of God.",
      "Hiram&rsquo;s great work begins with the two pillars (vv.15&ndash;16). He cast two pillars of bronze, each eighteen cubits high and twelve cubits in circumference, hollow and immense. Upon each he set a capital of cast bronze, five cubits high, crowning the columns with ornate heads. The sheer scale of these pillars, gleaming bronze rising before the porch of the Temple, must have made an overwhelming impression upon all who approached the house of God.",
      "The capitals were richly decorated (vv.17&ndash;20). There were networks of checker-work and wreaths of chain-work, and two rows of pomegranates &mdash; the text speaks of hundreds of them &mdash; encircling each capital. Above the network was lily-work, so that the tops of the columns blossomed like flowers. The combination of pomegranates, symbols of fruitfulness and abundance, and lilies, symbols of beauty and life, turned these structural pillars into towering images of flourishing, a garden in bronze standing at the entrance to the house.",
      "Then comes the detail that has captured the imagination of interpreters: &ldquo;He set up the pillars at the vestibule of the temple. He set up the pillar on the south and called its name Jachin, and he set up the pillar on the north and called its name Boaz&rdquo; (v.21). To name pillars is to make them speak. These were not merely supports &mdash; they bore a message to everyone who entered, and that message was bound up in their Hebrew names.",
      "The name Jachin means &ldquo;he will establish,&rdquo; and the name Boaz is most often understood as &ldquo;in him is strength.&rdquo; Read together at the threshold of the Temple, they form a confession of faith in the God who dwells within: he will establish, and in him is strength. Every worshipper passing between them was reminded that the security of the kingdom, the permanence of the house, and the strength of the people rested not in cedar or bronze or in Solomon&rsquo;s wisdom, but in the LORD who establishes and upholds all things.",
      "The pillars stood as a permanent sermon in metal. They proclaimed that the establishment of David&rsquo;s throne and the stability of Israel&rsquo;s worship were the work of God, and that all human strength is borrowed strength, drawn from the One who is strong. &ldquo;Thus the work of the pillars was finished&rdquo; (v.22), the narrator concludes &mdash; and the reader is left with two great bronze witnesses standing guard at the door of the Temple, silently preaching the establishing power and unfailing strength of the God of Israel.",
    ],
  },
  {
    id: "The Bronze Sea and Furnishings",
    heading: "The Bronze Sea and the Furnishings",
    reference: "1 Kings 7:23&ndash;51",
    paragraphs: [
      "After the pillars, Hiram turned to the most massive of all the bronze furnishings: the molten Sea (vv.23&ndash;26). It was a huge round basin, &ldquo;ten cubits from brim to brim&rdquo; and five cubits high, a thirty-cubit circumference of cast bronze. Its brim was wrought like the flower of a lily, and below the rim ran two rows of gourds cast in one piece with it. This enormous reservoir held water for the ceremonial washing of the priests, a sea of purification standing in the court of the house of God.",
      "Most evocative of all was its support: &ldquo;It stood on twelve oxen, three facing north, three facing west, three facing south, and three facing east. The Sea was set on them, and all their rear parts were inward&rdquo; (v.25). Twelve bronze oxen, grouped by threes toward the four directions of the earth, bore the great basin on their backs. The twelve readily evoke the twelve tribes of Israel, and the orientation toward the four quarters suggests the reach of God&rsquo;s purposes to the ends of the earth &mdash; cleansing water upheld by the whole people, set toward the whole world.",
      "Next Hiram made ten bronze stands, each four cubits square and three high, intricately constructed with panels, frames, and borders decorated with lions, oxen, and cherubim, and with wreaths of beaten work (vv.27&ndash;30). Each stand ran on four bronze wheels with axles, fashioned like chariot wheels, so that the stands were mobile. Upon each Hiram set a basin holding forty baths of water (vv.38&ndash;39). Five stands were placed on the south side of the house and five on the north. These wheeled lavers held the water for rinsing the parts of the burnt offerings, serving the daily ministry of sacrifice.",
      "The detail lavished on these stands &mdash; the precise measurements, the carved figures, the wheels and axles and supports &mdash; testifies again to the consummate skill of Hiram and to the conviction that nothing was too good for the service of God&rsquo;s house. Even the basins for washing the sacrifices were made objects of beauty. The whole court of the Temple gleamed with bronze that had been shaped by a master&rsquo;s hand into things both useful and glorious.",
      "Hiram then completed the smaller vessels for the service of the house: &ldquo;the pots, the shovels, and the basins&rdquo; (v.40). The narrator pauses to summarise the full scope of his labour: the two pillars, the bowls of the capitals, the networks, the four hundred pomegranates, the ten stands and their basins, the Sea and the twelve oxen beneath it, and all the pots and shovels and basins (vv.41&ndash;45). All these Hiram made of burnished bronze, cast in the plain of the Jordan in the clay ground between Succoth and Zarethan (v.46).",
      "Then comes a telling note of abundance: &ldquo;Solomon left all the vessels unweighed, because there were so many of them; the weight of the bronze was not ascertained&rdquo; (v.47). The materials of worship were beyond counting, beyond measuring &mdash; a picture of overflowing generosity offered to the Lord. To this the text adds the golden furnishings of the inner house: the golden altar, the golden table for the bread of the Presence, the ten lampstands of pure gold before the inner sanctuary, the flowers, lamps, tongs, cups, snuffers, basins, dishes, fire pans, and the very sockets of the doors, all of gold (vv.48&ndash;50).",
      "The chapter ends on a note that reaches back across a generation: &ldquo;Thus all the work that King Solomon did on the house of the LORD was finished. And Solomon brought in the things that David his father had dedicated, the silver, the gold, and the vessels, and stored them in the treasuries of the house of the LORD&rdquo; (v.51). The treasures David had set apart but could not himself install were at last brought into the completed house, binding the work of the father and the son together. With every furnishing in place and every treasure stored, the great house stood ready &mdash; ready for the ark to be carried in and for the glory of the LORD to fill the house in the dedication of chapter 8.",
    ],
  },
];

const videoItems = [
  { videoId: "Rt5kP2bWnX9", title: "1 Kings 7 Explained - Solomon's Palace and the Temple Furnishings" },
  { videoId: "Hb3mZ8vLq2T", title: "Jachin and Boaz - The Two Bronze Pillars of the Temple" },
  { videoId: "Nf6dW4yCpJ1", title: "The Molten Sea and the Twelve Oxen - Bible Study" },
  { videoId: "Ax9gT7sRbM4", title: "Hiram of Tyre - The Master Craftsman in Bronze" },
];

export default function OneKings7GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => setLoaded(true), []);
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
            1 Kings 7: Palace and Temple Furnishings
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Solomon builds his own palace complex over thirteen years, and Hiram of Tyre crafts the Temple&rsquo;s bronze furnishings &mdash; the two named pillars Jachin and Boaz, the molten Sea upon its twelve oxen, the ten wheeled stands, and all the vessels of bronze and gold &mdash; until the house of the LORD stands ready for the glory of God." }} />
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
              Deepen your study of 1 Kings 7 through visual teaching on Solomon&rsquo;s palace complex, the two named pillars Jachin and Boaz, the molten Sea resting on twelve bronze oxen, and the master craftsman Hiram of Tyre.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>He Will Establish; In Him Is Strength</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "1 Kings 7 sets the grandeur of Solomon&rsquo;s palace beside the sacred furnishings of the Temple. The named pillars Jachin and Boaz preach that God establishes and that in him is strength, while the abundance of bronze too great to weigh and the treasures David dedicated proclaim a worship of overflowing generosity &mdash; all of it preparing the house for the glory of the LORD to come and fill it." }} />
        </div>
      </main>
    </div>
  );
}
