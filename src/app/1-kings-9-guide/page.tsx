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
  "Second Appearance",
  "Cities of Cabul",
  "Ships of Ophir",
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
    heading: "Overview of 1 Kings 9",
    reference: "1 Kings 9:1&ndash;28",
    paragraphs: [
      "First Kings chapter 9 stands at the high noon of Solomon&rsquo;s reign, in the years just after the completion of the temple and the royal palace. The chapter opens with one of the most solemn divine encounters in the whole of the books of Kings: the Lord appears to Solomon a second time, as he had appeared to him at Gibeon, to ratify the covenant and to set before the king both a promise and a warning. The remainder of the chapter then turns to the affairs of the kingdom &mdash; treaties, labor, building, and the great seagoing ventures that brought gold to Jerusalem.",
      "The first movement (vv.1&ndash;9) records God&rsquo;s second appearance to Solomon. Having heard the king&rsquo;s long prayer at the dedication of the temple, the Lord declares that he has consecrated the house and set his Name there forever, that his eyes and his heart will always be upon it. Yet the promise is bound to a condition: if Solomon and his descendants walk faithfully, the throne will be established; but if they turn aside to serve other gods, Israel will be cut off from the land and the magnificent temple itself will become a heap of ruins at which all who pass will be appalled.",
      "The second movement (vv.10&ndash;14) tells of Solomon&rsquo;s dealings with Hiram king of Tyre, who had supplied cedar, juniper, and gold for the building projects. In return Solomon gave Hiram twenty cities in the land of Galilee, but Hiram was displeased with them and named the region &ldquo;Cabul.&rdquo; This brief and curious episode opens a window onto the economics of empire and hints at the cost and compromise that accompanied Solomon&rsquo;s grand achievements.",
      "The third movement (vv.15&ndash;25) describes the forced labor Solomon raised and the vast scope of his building program: the temple, his own palace, the supporting terraces of the Millo, the wall of Jerusalem, and the fortified store cities of Hazor, Megiddo, and Gezer. The text carefully distinguishes between the conscripted descendants of the Canaanite peoples and the Israelites, who were not enslaved but served as soldiers, officials, and commanders. The chapter also notes Pharaoh&rsquo;s daughter and her house, and Solomon&rsquo;s threefold yearly offerings at the temple.",
      "The fourth movement (vv.26&ndash;28) turns to the sea. Solomon built a fleet of ships at Ezion-geber near Elath on the shore of the Red Sea in Edom, and Hiram sent his own experienced sailors to serve alongside Solomon&rsquo;s men. Together they sailed to Ophir and brought back four hundred and twenty talents of gold, which they delivered to King Solomon. The wealth of nations was flowing into Jerusalem at a rate unmatched in Israel&rsquo;s history.",
      "Read as a whole, 1 Kings 9 is a chapter of glory shadowed by warning. The splendor of Solomon&rsquo;s reign is undeniable &mdash; the consecrated temple, the strengthened cities, the gold of Ophir &mdash; yet the divine word at its head hangs over everything that follows. The covenant has two edges, and the prosperity of the chapter cannot be read apart from the solemn &lsquo;if&rsquo; that God has placed before the king. The seeds of both Israel&rsquo;s greatness and its later sorrow are present here together.",
    ],
  },
  {
    id: "Second Appearance",
    heading: "God&rsquo;s Second Appearance to Solomon",
    reference: "1 Kings 9:1&ndash;9",
    paragraphs: [
      "When Solomon had finished building the temple of the Lord and the royal palace and had achieved all he had desired to do, the Lord appeared to him a second time, &ldquo;as he had appeared to him at Gibeon&rdquo; (v.2). The reference to Gibeon recalls that earlier night when the young king, asked what he would have, requested not riches or long life but a discerning heart to govern God&rsquo;s people. Now, years later and at the summit of his accomplishment, Solomon receives a second divine visitation &mdash; a moment of confirmation, but also of sober reminder that everything he has built rests upon the favor of the God who appeared to him.",
      "The Lord begins with words of gracious acceptance: &ldquo;I have heard the prayer and plea you have made before me; I have consecrated this temple, which you have built, by putting my Name there forever. My eyes and my heart will always be there&rdquo; (v.3). The long dedicatory prayer of the previous chapter has not gone unanswered. God has set apart the temple as the place where his Name dwells, and he pledges an enduring attentiveness to it &mdash; his eyes to watch and his heart to love. The house of cedar and gold has become the meeting place between heaven and the people of God.",
      "Then comes the conditional promise concerning the throne: &ldquo;As for you, if you walk before me faithfully with integrity of heart and uprightness, as David your father did, and do all I command and observe my decrees and laws, I will establish your royal throne over Israel forever, as I promised David your father when I said, You shall never fail to have a successor on the throne of Israel&rdquo; (vv.4&ndash;5). The pattern set before Solomon is his father David &mdash; not a sinless man, but one whose heart remained loyal to the Lord. The dynastic promise is real, yet it is held out along the path of obedience.",
      "But the covenant has a second edge, and the Lord speaks it with terrible clarity: &ldquo;But if you or your descendants turn away from me and do not observe the commands and decrees I have given you and go off to serve other gods and worship them, then I will cut off Israel from the land I have given them and will reject this temple I have consecrated for my Name&rdquo; (vv.6&ndash;7). Apostasy &mdash; the turning to other gods &mdash; is named as the great peril. The very people whom God has planted in the land may be uprooted from it, and the temple that bears his Name may be rejected by him.",
      "The warning rises to a haunting picture of desolation: &ldquo;Israel will then become a byword and an object of ridicule among all peoples. This temple will become a heap of rubble. All who pass by will be appalled and will scoff and say, Why has the Lord done such a thing to this land and to this temple?&rdquo; (vv.7&ndash;8). The glorious house, the wonder of the nations, is shown in prophetic vision reduced to ruins, a place of horror and astonishment. The watching world will not credit the disaster to the weakness of Israel&rsquo;s God but will seek its cause, and it will find it in the people&rsquo;s unfaithfulness.",
      "The answer the nations will give is set down in advance: &ldquo;People will answer, Because they have forsaken the Lord their God, who brought their ancestors out of Egypt, and have embraced other gods, worshiping and serving them &mdash; that is why the Lord brought all this disaster on them&rdquo; (v.9). The ruin of the temple, when it comes, will be a testimony not against the Lord but against the covenant-breaking of his people. The God of the Exodus, who redeemed Israel from Egypt, is not mocked; to forsake him for idols is to invite the very judgment he has plainly foretold.",
      "This passage stands as the theological hinge of Solomon&rsquo;s reign and indeed of the whole history that follows. Everything that comes after &mdash; the wealth, the building, the gold of Ophir &mdash; is placed under this word. The reader who knows how the story ends, with Solomon&rsquo;s heart turned by his many wives toward other gods and, generations later, the temple burned by Babylon, will hear in these verses a prophecy already trembling toward fulfillment. The covenant&rsquo;s two edges are not abstract; they will cut through Israel&rsquo;s history with devastating exactness, and the chapter sets them before Solomon at the very height of his glory.",
    ],
  },
  {
    id: "Cities of Cabul",
    heading: "Solomon and Hiram; The Cities of Cabul",
    reference: "1 Kings 9:10&ndash;14",
    paragraphs: [
      "The narrative now turns from the heights of divine encounter to the practical entanglements of statecraft and trade. &ldquo;At the end of twenty years, during which Solomon built these two buildings &mdash; the temple of the Lord and the royal palace &mdash; King Solomon gave twenty towns in Galilee to Hiram king of Tyre, because Hiram had supplied him with all the cedar and juniper and gold he wanted&rdquo; (vv.10&ndash;11). The two great projects together had consumed two decades. Hiram of Tyre, the Phoenician king whose forests and craftsmen had served Solomon throughout, had provided the timber and the gold, and now the account was to be settled.",
      "The settlement, however, did not go smoothly: &ldquo;But when Hiram went from Tyre to see the towns that Solomon had given him, he was not pleased with them. So he asked, What kind of towns are these you have given me, my brother? And he called them the Land of Cabul, a name they have to this day&rdquo; (vv.12&ndash;13). Hiram came in person to inspect his payment and found it wanting. The address &lsquo;my brother&rsquo; preserves the courtesy of allied kings, but beneath the diplomatic language lies real disappointment. The cities of Galilee, perhaps undeveloped or remote from Tyre&rsquo;s coastal wealth, did not match the value of what Hiram had given.",
      "The name &lsquo;Cabul&rsquo; carries the sting of Hiram&rsquo;s displeasure. The term has been understood to mean something close to &lsquo;good for nothing&rsquo; or &lsquo;like nothing,&rsquo; a name fixed upon the region as a lasting memorial of a king&rsquo;s dissatisfaction. The narrator notes that the name persisted &lsquo;to this day,&rsquo; an indication that the episode left a mark on the geography and memory of the land. What was meant as generous payment became instead a byword for a disappointing exchange.",
      "The transaction is then balanced by a notice of what Hiram had sent: &ldquo;Now Hiram had sent to the king 120 talents of gold&rdquo; (v.14). This enormous sum &mdash; the gold that had financed so much of Solomon&rsquo;s splendor &mdash; reminds the reader of the scale of the debt Solomon had incurred. The twenty cities were no small gift, yet against the backdrop of such wealth in gold and timber, the friction between the two kings reveals how vast and how costly Solomon&rsquo;s ambitions had become.",
      "Beneath the surface of this brief and almost commercial episode runs a subtle and important note about the cost of empire. To build the temple and the palace on the scale Solomon desired, the king had to mortgage the resources of his kingdom and even, it seems, alienate portions of the land that the Lord had given to Israel. The twenty cities of Galilee were Israelite territory, part of the inheritance of the tribes, and they were handed over to a foreign king to pay for the king&rsquo;s building program. The grandeur was real, but so was the compromise.",
      "The strained alliance with Hiram thus serves as a quiet counterpoint to the glory of the preceding chapters. Solomon&rsquo;s achievements did not arise in a vacuum; they were purchased through treaties, debts, and the heavy expenditure of his people&rsquo;s resources. The friendship of Tyre, so useful and so productive, came at a price, and the displeased face of Hiram inspecting his cities is a small but telling sign that the splendor of Solomon&rsquo;s reign was not without its hidden strains and unpaid costs.",
      "The episode also prepares the reader for the larger pattern that the books of Kings will trace. A reign that begins in humble prayer for wisdom gradually becomes entangled in the machinery of wealth, alliance, and grand construction. The handing over of Israelite cities, the heavy reliance on foreign gold, and the swelling scale of the king&rsquo;s projects all foreshadow the dangers that prosperity brings. The seeds of compromise that appear so modestly in the matter of Cabul will grow, in the chapters to come, into the full flowering of Solomon&rsquo;s decline.",
    ],
  },
  {
    id: "Ships of Ophir",
    heading: "Forced Labor, Building, and the Ships of Ophir",
    reference: "1 Kings 9:15&ndash;28",
    paragraphs: [
      "The chapter now lays out the machinery behind Solomon&rsquo;s building program, beginning with the labor force: &ldquo;Here is the account of the forced labor King Solomon conscripted to build the Lord&rsquo;s temple, his own palace, the terraces, the wall of Jerusalem, and Hazor, Megiddo and Gezer&rdquo; (v.15). The levy of forced labor was the engine of the king&rsquo;s vast projects. Alongside the temple and palace, the list names the supporting terraces of the Millo, the wall of the capital, and three great fortified cities that guarded the strategic routes of the kingdom &mdash; Hazor in the north, Megiddo in the valley, and Gezer on the western approaches.",
      "A note on Gezer explains how it came into Israel&rsquo;s hands: &ldquo;Pharaoh king of Egypt had attacked and captured Gezer. He had set it on fire. He killed its Canaanite inhabitants and then gave it as a wedding gift to his daughter, Solomon&rsquo;s wife&rdquo; (v.16). The city came to Solomon through his marriage alliance with Egypt, and he rebuilt it, along with Lower Beth Horon, Baalath, and Tadmor in the desert, together with all his store cities and the towns for his chariots and horses (vv.17&ndash;19). The text catalogs a kingdom bristling with fortifications and supply depots, the infrastructure of a powerful state.",
      "The narrative then draws a careful distinction concerning who bore the burden of forced labor. The conscripted workers were &ldquo;the descendants of the Amorites, Hittites, Perizzites, Hivites and Jebusites &mdash; the peoples who were not Israelites&rdquo; (vv.20&ndash;21). These remnants of the Canaanite nations Solomon pressed into permanent slave labor. &ldquo;But Solomon did not make slaves of any of the Israelites; they were his fighting men, his government officials, his officers, his captains, and the commanders of his chariots and charioteers&rdquo; (v.22). The Israelites served as soldiers and officers, not as conscripted laborers, while the chief officials in charge of the projects numbered five hundred and fifty (v.23).",
      "Several further notices round out the picture of the kingdom&rsquo;s ordered life. &ldquo;After Pharaoh&rsquo;s daughter had come up from the City of David to the palace Solomon had built for her, he constructed the terraces&rdquo; (v.24). And concerning his worship: &ldquo;Three times a year Solomon sacrificed burnt offerings and fellowship offerings on the altar he had built for the Lord, burning incense before the Lord along with them, and so fulfilled the temple obligations&rdquo; (v.25). The king who built the house of God also maintained its appointed worship, presenting his offerings at the great yearly feasts.",
      "The chapter then turns to the sea and to one of the boldest ventures of Solomon&rsquo;s reign: &ldquo;King Solomon also built ships at Ezion-geber, which is near Elath in Edom, on the shore of the Red Sea&rdquo; (v.26). From this southern port Solomon launched a fleet that opened a new avenue of commerce reaching far beyond the borders of Israel. The landlocked agricultural kingdom of the patriarchs had become, under Solomon, a maritime power trading across distant waters, a measure of how greatly the nation&rsquo;s reach had expanded.",
      "For this enterprise Solomon again leaned on the seafaring expertise of Tyre: &ldquo;And Hiram sent his men &mdash; sailors who knew the sea &mdash; to serve in the fleet with Solomon&rsquo;s men&rdquo; (v.27). The Phoenicians were the great mariners of the ancient world, and their seasoned crews guided Solomon&rsquo;s ships on voyages his own people could not have undertaken alone. The alliance with Hiram, strained though it had been over the cities of Cabul, here bore rich fruit, joining Israelite ambition to Phoenician skill in a partnership that spanned the seas.",
      "The destination and the reward are given in the chapter&rsquo;s closing words: &ldquo;They sailed to Ophir and brought back 420 talents of gold, which they delivered to King Solomon&rdquo; (v.28). Ophir, a fabled source of the finest gold, yielded a treasure of staggering proportions, and it flowed into the royal coffers at Jerusalem. The gold of Ophir became proverbial in Israel for purity and worth, and its arrival marks the apex of Solomon&rsquo;s material glory.",
      "Yet the very abundance celebrated here carries a shadow within it. The growing wealth, the forced labor, the marriage alliances with Egypt, the multiplication of chariots and horses, and the heaping up of gold all stand in quiet tension with the law of the king, which had warned Israel&rsquo;s rulers against precisely such accumulation. The splendor of the ships of Ophir foreshadows the decline that the next chapters will unfold, when the heart of the wisest of kings, drawn aside by his wealth and his many foreign wives, will turn from the Lord who had appeared to him twice and set before him so plainly the two edges of the covenant.",
    ],
  },
];

const videoItems = [
  { videoId: "Kg9pSoLmN4V", title: "BibleProject - Books of Kings Overview" },
  { videoId: "Hr2BcVxT8qZ", title: "1 Kings 9 - God Appears to Solomon a Second Time" },
  { videoId: "Cb7LpMz3dWy", title: "The Cities of Cabul and Solomon's Alliance with Hiram" },
  { videoId: "Op5XnQ4fH9T", title: "The Ships of Ophir and the Wealth of Solomon" },
];

export default function FirstKings9GuidePage() {
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
            The First Book of Kings, Chapter 9
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Glory shadowed by warning &mdash; the Lord appears to Solomon a second time to consecrate the temple and to set before him the two edges of the covenant, and then the chapter turns to the strained alliance with Hiram, the cities of Cabul, the forced labor and great building works, and the fleet at Ezion-geber that sailed to Ophir and returned with gold.
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
              Deepen your study of 1 Kings 9 through visual teaching on the Lord&rsquo;s second appearance to Solomon and the two edges of the covenant, the strained alliance with Hiram and the cities of Cabul, the forced labor and great building works, and the fleet of Ophir that marked the height of Solomon&rsquo;s wealth.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Two Edges of the Covenant</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Kings 9 places all the splendor of Solomon&rsquo;s reign &mdash; the consecrated temple, the fortified cities, the gold of Ophir &mdash; beneath the solemn word of the Lord who appeared to the king a second time. Obedience would establish the throne forever; turning to other gods would make the glorious temple a heap of rubble. The chapter&rsquo;s wealth and warning belong together, and the seeds of Solomon&rsquo;s later decline already lie hidden within his greatest glory.
          </p>
        </div>
      </main>
    </div>
  );
}
