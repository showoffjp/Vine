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
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const videoItems = [
  { videoId: "xR7bPmNq3kA", title: "1 Kings 15: Faithful and Faithless Kings" },
  { videoId: "mK4nQpV7cBw", title: "King Asa's Reform - A Model for Covenant Renewal" },
  { videoId: "hZ8sTqYwJnF", title: "The Rise and Fall of Jeroboam's Dynasty" },
  { videoId: "cD2pRkLsXvM", title: "Covenant Consequences in the Divided Kingdom" },
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
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>1 Kings Chapter 15</h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "First Kings 15 surveys four reigns across the divided kingdom of Israel and Judah &mdash; a compressed political history that reads, at first, like a dry chronicle of succession and war. But beneath the regnal formulas and theological verdicts lies one of the Old Testament&rsquo;s most probing meditations on the meaning of faithfulness: what it looks like, how it holds up under pressure, how it can coexist with incomplete obedience, and what happens when it is entirely absent. The chapter pivots on the towering figure of Asa, whose 41-year reign of genuine (if imperfect) reform stands in bright contrast to the wreckage around him." }} />
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
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>The Shape of 1 Kings 15</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter moves between the southern kingdom of Judah and the northern kingdom of Israel, using the Deuteronomistic framework of evaluation that governs the entire book of Kings. Each king is assessed against two benchmarks: the standard of David (for Judah) and the standard of Jeroboam son of Nebat (for Israel). The Davidic standard is positive &mdash; David walked wholeheartedly with God. The Jeroboam standard is negative &mdash; Jeroboam led Israel into sin through his golden calves at Bethel and Dan." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The chapter covers: Abijam of Judah (3-year reign, vv.1-8), Asa of Judah (41-year reign, vv.9-24), Nadab of Israel (2-year reign, vv.25-32), and the beginning of Baasha of Israel&rsquo;s reign (vv.33-34). The disproportionate space given to Asa &mdash; nearly half the chapter &mdash; reflects his theological importance. He is one of a small number of kings in the Davidic line who receives an essentially positive verdict." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>The Deuteronomistic History</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "First and Second Kings form part of what scholars call the Deuteronomistic History (DH) &mdash; the continuous narrative from Deuteronomy through 2 Kings that interprets Israel&rsquo;s history through the lens of covenant obedience as articulated in Deuteronomy. The theological thesis of DH is straightforward: faithfulness to the covenant brings blessing; covenant breaking brings judgment. The repeated formulaic evaluations of each king (&ldquo;he did what was evil/right in the eyes of the LORD&rdquo;) are the DH&rsquo;s way of showing how each reign advances or hinders this covenant story." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This framework was likely compiled during the exile in Babylon, which means the editors were writing from the vantage point of having seen the covenant consequences play out to their terrible conclusion. When they evaluate Asa as someone whose &ldquo;heart was wholly true to the LORD,&rdquo; and then note in the same breath that &ldquo;the high places were not taken away&rdquo; (v.14), they are being historically honest rather than theologically tidy. Genuine faithfulness can coexist with structural incompleteness." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>Historical and Political Context</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter is set in the period of the divided monarchy, which began after Solomon&rsquo;s death when the northern tribes rejected Rehoboam (Solomon&rsquo;s son) and formed a separate kingdom under Jeroboam I (1 Kings 12). The division created two competing states: Judah in the south (including Benjamin), centered on Jerusalem with the Davidic dynasty and the temple; and Israel in the north, with a series of dynasties and alternative worship centers at Bethel and Dan." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Asa&rsquo;s alliance with Ben-hadad of Aram-Damascus (Syria) in vv.18-20 is a significant geopolitical event. Asa essentially paid the Aramean king to invade northern Israel from the rear, forcing Baasha to abandon his fortification project at Ramah. It was effective military strategy &mdash; but it also drained the temple treasury and set a precedent of relying on foreign powers that would prove catastrophic for later kings. The Chronicler (2 Chronicles 16) is sharply critical of this alliance; Kings records it more neutrally." }} />
            </div>

            {/* Section 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;And Asa did what was right in the eyes of the LORD, as David his father had done&hellip; And Asa&rsquo;s heart was wholly true to the LORD all his days.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>1 Kings 15:11, 14b (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: BLUE, marginBottom: 12 }}>The Contrast Structure of the Chapter</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s power lies in its contrasts. Abijam (vv.1-8) walks in his father Rehoboam&rsquo;s sins; Asa (vv.9-24) does what is right. Nadab (vv.25-32) walks in his father Jeroboam&rsquo;s sins and is assassinated within two years; Baasha who kills him is introduced at the end as the beginning of yet another cycle of northern faithlessness. The pattern is stark: in Judah, the covenant with David provides a long and largely stable line; in Israel, sinful dynasties collapse violently and quickly." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Even within the Judean kings, the contrast between Abijam and Asa is theologically instructive. Abijam reigned 3 years despite his sins because of God&rsquo;s covenant faithfulness to David (v.4). Asa reigned 41 years because of his own faithfulness. Both realities are true simultaneously: grace sustains even where faithfulness is absent; and faithfulness genuinely shapes the course of a life and a reign." }} />
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
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Faithful King: Asa as a Model</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Asa is one of only eight kings in the entire history of Judah and Israel to receive a substantially positive evaluation from the Deuteronomistic historian. His reforms are specific and costly: he expelled the male cult prostitutes (<em>qadeshim</em>, literally &ldquo;sacred ones,&rdquo; men associated with Canaanite religious sexuality), removed idols that his predecessors had made, and &mdash; most remarkably &mdash; deposed his own grandmother Maacah from the position of queen mother because of an Asherah image she had created." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The removal of Maacah deserves extended attention. The queen mother (<em>gebirah</em>) in the ancient Near East held a position of significant political power &mdash; she was a formal court official, not simply the king&rsquo;s mother. For Asa to strip his grandmother of this position because of her idolatry was an act of extraordinary political and personal courage. Family loyalty does not override covenant faithfulness in Asa&rsquo;s calculus." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The detail that Asa &ldquo;cut down her image and burned it at the brook Kidron&rdquo; (v.13) is vivid and deliberate. The Kidron Valley was used for the disposal of religious defilement (2 Kings 23:6 similarly records idols being burned and cast into the Kidron). Burning was the prescribed method of destroying items devoted to destruction (<em>herem</em>) in Deuteronomy. Asa is acting in full accord with the covenant law." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Incomplete Reform: The High Places</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The qualification in v.14 is one of the most pastorally significant verses in the chapter: &ldquo;But the high places were not taken away.&rdquo; The high places (<em>bamot</em>) were local shrines used for worship outside Jerusalem &mdash; technically unauthorized by the law requiring centralized worship at the temple (Deuteronomy 12), but deeply embedded in the religious culture of the land. They were not necessarily idolatrous in the same sense as Asherah poles or Baal altars; some people likely used them to worship YHWH. But they represented a decentralized, less regulated religious life." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The note that Asa&rsquo;s heart was &ldquo;wholly true to the LORD all his days&rdquo; (v.14b) immediately follows the note about the high places. The historian refuses to let either truth cancel the other. Asa did not complete the reform. His heart was still genuinely devoted. These are simultaneously true. The theological implication is important: wholehearted devotion does not require flawless execution. God evaluates the orientation of the heart even when the hands have not finished the work." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Maternal Influence and Idolatry</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The figure of Maacah daughter of Abishalom is one of the most interesting women in the Books of Kings. She served as queen mother under both Abijam (her son) and initially under Asa (her grandson) &mdash; a rare continuity of influence across two reigns. The text notes that under Abijam she retained this position (implied), while Asa finally removes her. The specific charge against her is that she &ldquo;made an abominable image for Asherah&rdquo; (v.13)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Asherah was the Canaanite goddess of fertility and the sea &mdash; consort of El in the Ugaritic texts and sometimes controversially associated with YHWH in popular Israelite religion. Asherah worship involved wooden poles or carved images, often erected on hilltops. Archaeological discoveries at Kuntillet Ajrud and Khirbet el-Qom have produced inscriptions referring to &ldquo;YHWH and his Asherah,&rdquo; suggesting that such syncretism was more common in popular Israelite religion than the canonical texts acknowledge." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The story of Maacah illustrates how maternal and grandmaternal influence could shape or distort the religious life of successive generations. She modeled and institutionalized Asherah worship at the highest level of court life. It took a king of unusual moral courage to reverse what had become culturally normalized." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Covenant Consequences and Dynastic Collapse</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The northern kingdom in this chapter illustrates the covenant consequences of Jeroboam&rsquo;s sin with brutal efficiency. Nadab, Jeroboam&rsquo;s son, reigns only 2 years before Baasha &mdash; a man from the tribe of Issachar, not the house of Jeroboam &mdash; kills him while he is besieging the Philistine city of Gibbethon (v.27). Baasha then &ldquo;killed all the house of Jeroboam&rdquo; (v.29), fulfilling the prophetic word given by Ahijah the Shilonite against Jeroboam (1 Kings 14:10-14)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The pattern established here repeats throughout the northern kingdom&rsquo;s history: a dynasty rises through military coup, reigns for a generation or two, and is wiped out by the next coup. The contrast with Judah&rsquo;s Davidic line &mdash; which maintained succession (however imperfectly) from David until the Babylonian exile, nearly 400 years &mdash; is stark. The covenant with David provided structural stability that the northern kingdom, built on rebellion and alternative religious structures, could never achieve." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: BLUE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Grace Sustaining an Unworthy Line</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The theological explanation for why Abijam&rsquo;s sinful reign survived at all is given explicitly in vv.4-5: &ldquo;Nevertheless, for David&rsquo;s sake the LORD his God gave him a lamp in Jerusalem, setting up his son after him, and establishing Jerusalem, because David did what was right in the eyes of the LORD and did not turn aside from anything that he commanded him all the days of his life, except in the matter of Uriah the Hittite.&rdquo;" }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This is one of the most explicit statements in the Old Testament of what might be called &ldquo;covenant solidarity&rdquo; &mdash; the faithfulness of one person in a covenant relationship blessing and sustaining subsequent generations. David&rsquo;s obedience became a reservoir of grace that continued to provide stability even under an unfaithful son. The &ldquo;lamp&rdquo; metaphor (&ldquo;gave him a lamp in Jerusalem&rdquo;) images David&rsquo;s covenant as a light that keeps burning even in the darkness of Abijam&rsquo;s faithlessness." }} />
            </div>

            {/* Theme 6 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Temple Treasure and Political Alliances</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Asa&rsquo;s alliance with Ben-hadad of Syria (vv.18-20) raises enduring questions about the relationship between political pragmatism and theological faithfulness. To break Baasha&rsquo;s fortification of Ramah (which was cutting off Judah from trade and movement), Asa sent all the silver and gold remaining in the temple treasury and the palace treasury to buy Ben-hadad&rsquo;s intervention. Ben-hadad attacked northern Israel from the north, forcing Baasha to abandon Ramah." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The strategy worked militarily. But the Chronicler (2 Chronicles 16:7-9) records the prophet Hanani condemning Asa for relying on the king of Syria rather than on the LORD. Hanani&rsquo;s accusation is that because Asa turned to human alliance instead of divine trust, he would have wars for the rest of his reign &mdash; and indeed the closing summary (v.16) notes &ldquo;there was war between Asa and Baasha king of Israel all their days.&rdquo; Even in the life of a genuinely faithful king, the temptation to substitute human strategy for divine trust remained, and had consequences." }} />
            </div>
          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>
            {/* vv.1-8 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 1-8: Abijam of Judah</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Unfaithful Son</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1-2</strong> &mdash; Abijam&rsquo;s reign is dated synchronistically against Jeroboam&rsquo;s reign in the north &mdash; a chronological anchoring technique used throughout Kings. His mother is named as Maacah the daughter of Abishalom (the same figure who will be deposed by her grandson Asa in v.13). The name Abijam means &ldquo;my father is the sea god&rdquo; &mdash; possibly a Phoenician-influenced name, or more likely a variant of Abijah (&ldquo;my father is YHWH&rdquo;). The Chronicler consistently uses Abijah." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.3</strong> &mdash; Abijam &ldquo;walked in all the sins that his father did before him.&rdquo; Rehoboam&rsquo;s reign had included high places, idols, Asherah poles, and male cult prostitutes (1 Kings 14:22-24). His heart was not wholly true to the LORD &ldquo;as the heart of David his father.&rdquo; The comparison is explicit: David is the positive benchmark, and Abijam fails to reach it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.4-5</strong> &mdash; The survival of Abijam&rsquo;s reign is attributed entirely to the covenant with David. The &ldquo;lamp in Jerusalem&rdquo; is a powerful image of the Davidic promise as a persistent light that cannot easily be extinguished. The parenthetical note in v.5 &mdash; &ldquo;except in the matter of Uriah the Hittite&rdquo; &mdash; is the Deuteronomistic historian&rsquo;s honest acknowledgment of David&rsquo;s failure. Even the ideal is qualified. Scripture does not mythologize its heroes." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.6-8</strong> &mdash; War continues between Judah and Israel. Abijam reigns 3 years and dies, his burial in the City of David consistent with Davidic dynasty members. Asa his son succeeds him." }} />
            </div>

            {/* vv.9-15 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 9-15: Asa&rsquo;s Reforms</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Covenant Reformer</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.9-11</strong> &mdash; Asa reigns in the 20th year of Jeroboam I and will reign 41 years &mdash; the longest reign in Judah after Manasseh (55 years) and Uzziah (52 years). The verdict: &ldquo;Asa did what was right in the eyes of the LORD, as David his father had done.&rdquo; The Davidic comparison is now positive rather than negative." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.12-13</strong> &mdash; Asa&rsquo;s reforms are listed in ascending order of difficulty: male cult prostitutes (expelled), idols (removed), and finally Maacah the queen mother (deposed). The removal of Maacah for her Asherah image is the climax of the reform list. Her image (<em>mipletset</em>, &ldquo;horrible thing&rdquo; or &ldquo;abomination&rdquo;) is cut down and burned in the Kidron Valley." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.14</strong> &mdash; The crucial qualification: &ldquo;But the high places were not taken away.&rdquo; This same phrase appears as a qualification for several faithful kings (Jehoshaphat, Joash, Amaziah, Azariah/Uzziah). Only Hezekiah and Josiah are specifically credited with removing the high places. The historian is noting a structural incompleteness in Asa&rsquo;s reform without allowing it to cancel the overall positive verdict." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.15</strong> &mdash; Asa brought dedicated gifts &mdash; silver, gold, and vessels &mdash; into the house of the LORD. This piety toward the temple is a further mark of his covenant faithfulness and contrasts sharply with what comes in vv.18-19, when he will drain the temple treasury for political purposes." }} />
            </div>

            {/* vv.16-24 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 700 }}>Verses 16-24: War with Baasha and the Syrian Alliance</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Political Pragmatism and Its Cost</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.16-17</strong> &mdash; Baasha of Israel builds up Ramah, a city on the border between Israel and Judah about five miles north of Jerusalem. The strategic purpose was to control the road to Jerusalem and block movement between north and south &mdash; an economic and military chokehold on Judah." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.18-20</strong> &mdash; Asa empties the temple and palace treasuries and sends the silver and gold to Ben-hadad I of Aram-Damascus with a formal treaty request. Ben-hadad attacks northern Israel &mdash; conquering Ijon, Dan, Abel-beth-maacah, and all of Chinneroth (the Sea of Galilee region), along with all the land of Naphtali &mdash; forcing Baasha to abandon Ramah." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.21-22</strong> &mdash; Asa then uses the building materials from Ramah &mdash; the very stones and timber Baasha had gathered &mdash; to fortify Geba of Benjamin and Mizpah. He accomplishes this by a general conscription (&ldquo;none was exempt&rdquo;), which emphasizes the seriousness of the national effort." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.23-24</strong> &mdash; Asa&rsquo;s closing summary includes a reference to &ldquo;all his might&rdquo; and &ldquo;all the cities that he built&rdquo; &mdash; standard regnal summary language &mdash; but also a note that &ldquo;in his old age he was diseased in his feet.&rdquo; The Chronicler (2 Chronicles 16:12) makes this a theological observation: &ldquo;he did not seek the LORD, but sought help from physicians.&rdquo; Kings records it without comment, but the mention is not incidental." }} />
            </div>

            {/* vv.25-34 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 25-34: Nadab and Baasha of Israel</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Northern Pattern: Coup and Judgment</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.25-26</strong> &mdash; Nadab son of Jeroboam reigns 2 years over Israel, assessed as doing &ldquo;evil in the sight of the LORD&rdquo; and walking in the sin of his father. The brevity of the evaluation (two verses) matches the brevity of the reign &mdash; there is nothing more to say about Nadab." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.27-28</strong> &mdash; Baasha son of Ahijah conspires against Nadab while the Israelite army is besieging Gibbethon, a Philistine city. The location &mdash; Gibbethon &mdash; will appear again 24 years later when Omri&rsquo;s coup happens in exactly the same location during a siege of the same city (1 Kings 16:15-17). The symmetry suggests the Deuteronomistic historian is deliberately drawing parallels." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.29</strong> &mdash; Baasha &ldquo;killed all the house of Jeroboam.&rdquo; He left none alive to Jeroboam, fulfilling the word of the LORD spoken through his servant Ahijah the Shilonite. The Deuteronomistic historian is at pains to present even the bloody political purges of the northern kingdom as operating within the frame of prophetic fulfillment. God&rsquo;s word does not fail; it is accomplished even through morally compromised agents." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.33-34</strong> &mdash; Baasha begins to reign and immediately receives the same evaluation as Jeroboam: he did &ldquo;evil in the sight of the LORD and walked in the way of Jeroboam.&rdquo; He killed his way into power to destroy Jeroboam&rsquo;s dynasty, and then proceeded to repeat Jeroboam&rsquo;s sins. The cycle continues." }} />
            </div>
          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>
            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>The Courage to Reform What Has Been Normalized</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Maacah&rsquo;s Asherah worship had presumably been in place for years &mdash; through Rehoboam&rsquo;s reign, then Abijam&rsquo;s reign. By the time Asa became king, it was normalized. The queen mother herself was invested in it. To remove it required acting against cultural inertia, family loyalty, and institutional power all at once." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "Every generation of Christians inherits normalized patterns that are at odds with the covenant. Some are obvious; many are invisible precisely because they have become &ldquo;the way we do things.&rdquo; Asa&rsquo;s example is a call to name what has been normalized and find the courage to act &mdash; knowing that reform will almost always require acting against something or someone with social power." }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Wholehearted but Incomplete</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Asa&rsquo;s heart was wholly true to the LORD all his days, and yet the high places were not removed. This is not permission for spiritual laziness. It is, however, a realistic account of what genuine faithfulness looks like in historical time: committed, ongoing, directionally right &mdash; and still unfinished." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "Most believers can identify their equivalent of the high places &mdash; areas where structural change has not followed genuine commitment of heart. The verdict of 1 Kings 15 is both encouraging and sobering: God sees and honors the orientation of the heart while also honestly noting what has not yet been addressed. Grace does not pretend the high places are not there; it also does not cancel the genuine devotion because of them." }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>When Pragmatism Replaces Trust</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Asa&rsquo;s alliance with Ben-hadad solved the immediate problem with Baasha but at the cost of the temple treasury and, according to the Chronicler, at the cost of ongoing war for the rest of his reign. The Syrian alliance was strategically clever and spiritually shortsighted &mdash; a combination that appears with uncomfortable frequency in the lives of even committed believers." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "Hanani&rsquo;s rebuke in 2 Chronicles 16 names the pattern: &ldquo;The eyes of the LORD run to and fro throughout the whole earth, to give strong support to those whose heart is blameless toward him.&rdquo; The God who helped Asa defeat the Ethiopians with vastly superior numbers (2 Chronicles 14) was ready to help against Baasha too. Asa reached for the Syrian treaty instead. The question is not whether strategy is wrong, but whether strategy is being used to supplement faith or to substitute for it." }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>Inherited Faithfulness as a Gift and a Responsibility</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Abijam&rsquo;s reign survived because of David. His own faithlessness was, in a real sense, subsidized by his ancestor&rsquo;s covenant relationship with God. This is grace: the faithfulness of one generation providing cover and stability for a weaker generation that follows." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "But the grace is not infinite in the sense of eliminating personal responsibility. The northern kingdom had no such Davidic covenant to sustain it, and its dynasties collapsed repeatedly. For those who have inherited a legacy of faith from parents, grandparents, or church communities: the inheritance is real and protective, and it also creates responsibility. What will you add to it? Will your faithfulness become a reservoir of grace for the generation that comes after you?" }} />
            </div>

            {/* Application 5 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>Discussion Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "Asa deposed his grandmother for her Asherah worship. What &ldquo;queen mothers&rdquo; in your own life &mdash; entrenched influences with institutional or family power &mdash; might need to be addressed for the sake of covenant faithfulness?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The high places were not removed even though Asa&rsquo;s heart was wholly true. What is your equivalent of the high places? What structural or habitual incompleteness coexists with your genuine devotion?" }} />
                <li dangerouslySetInnerHTML={{ __html: "How do you discern the difference between legitimate strategic planning and a failure to trust God? Where is the line between wisdom and self-reliance?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The northern dynasties repeat the same cycle of sin, coup, and judgment over and over. What does it take to break a generational pattern? What enabled Asa to be different from his father Abijam?" }} />
                <li dangerouslySetInnerHTML={{ __html: "God sustained Abijam&rsquo;s reign for David&rsquo;s sake, not Abijam&rsquo;s. How does the concept of grace flowing through covenant solidarity affect how you think about your own faithfulness and its impact on those who come after you?" }} />
              </ol>
            </div>

            {/* Application 6 */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Lord, give me the courage Asa had &mdash; to name what has been normalized in my life or community that does not belong there, and to act against it even when the cost is relational or institutional. Show me my high places: the areas where my heart is genuinely yours but my hands have not finished the reform. Guard me from the Asa-error of reaching for a human alliance when I should be trusting you. Let my faithfulness become a lamp that sustains those who follow me, even in their weaknesses. Amen." }} />
            </div>
          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of 1 Kings 15.</p>
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
