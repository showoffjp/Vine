"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const videoItems = [
  { videoId: "1fIUhYHqRGk", title: "1 Kings 14 Bible Study: Judgment on Jeroboam" },
  { videoId: "kZ3VM0dkX8Y", title: "Ahijah the Prophet and the Fall of Jeroboam's Dynasty" },
  { videoId: "WQNmGNy_3Ns", title: "Rehoboam and Shishak: Egypt Plunders the Temple" },
  { videoId: "pL5gT9rZxVo", title: "Idolatry and Covenant Judgment in 1 Kings" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

const overviewSections = [
  {
    heading: "Historical Setting",
    color: GOLD,
    body: "First Kings 14 unfolds in the politically fractured era immediately following Solomon&rsquo;s death, when the unified kingdom of Israel had split into two rival states. Jeroboam ruled the northern kingdom of Israel from Tirzah, while Rehoboam &mdash; Solomon&rsquo;s son &mdash; held Judah and Benjamin in the south from Jerusalem. The chapter takes place roughly a decade into this divided monarchy, around 930&ndash;910 BC. The division had been God&rsquo;s judgment on Solomon&rsquo;s own idolatry, yet now Jeroboam was compounding the catastrophe by leading the north into even deeper false worship. The geopolitical stage is set for covenant consequences on both kingdoms simultaneously."
  },
  {
    heading: "Jeroboam&rsquo;s Calculated Idolatry",
    color: ROSE,
    body: "When Jeroboam established the northern kingdom, his greatest political fear was that the people&rsquo;s hearts would return to Judah if they continued making pilgrimage to Jerusalem&rsquo;s temple. To prevent this, he erected two golden calves &mdash; one at Bethel, one at Dan &mdash; and declared, &ldquo;Behold your gods, O Israel, who brought you up out of Egypt&rdquo; (1 Kings 12:28). This was a calculated political decision masquerading as religion, deliberately echoing Aaron&rsquo;s golden calf in the wilderness (Exodus 32). Jeroboam appointed non-Levitical priests, established unauthorized high places, and moved the feast calendar. Every innovation was designed to consolidate power, yet each one placed him in open defiance of the Mosaic covenant. First Kings 14 records the divine reckoning for this strategy."
  },
  {
    heading: "The Disguise That Failed",
    color: PURPLE,
    body: "The chapter opens with jarring irony: Jeroboam &mdash; the man who had rejected God&rsquo;s worship &mdash; secretly sends his wife to consult God&rsquo;s prophet Ahijah when his son Abijah falls gravely ill. He instructs her to disguise herself, apparently fearing political embarrassment or hoping to gain an oracle without the prophet knowing who asked. But before she even arrives, the LORD has already revealed her identity to Ahijah. The prophet is old and blind, yet he sees everything that matters. The disguise perfectly pictures the self-deception of idolaters &mdash; they try to hide their true selves from God while still hoping to benefit from his power. Ahijah&rsquo;s blunt greeting strips away the pretense entirely."
  },
  {
    heading: "Ahijah&rsquo;s Prophecy of Total Destruction",
    color: ROSE,
    body: "Ahijah&rsquo;s oracle in verses 6&ndash;16 is one of the most comprehensive judgment prophecies in the books of Kings. It declares the death of the child Abijah as a sign, announces the total destruction of Jeroboam&rsquo;s dynasty (every male &mdash; a phrase indicating legal heirs and potential avengers), and predicts the exile of Israel beyond the Euphrates. The image of Israel as &ldquo;a reed shaken in water&rdquo; is striking: not a tree that can be uprooted and replanted, but a reed driven helplessly by the current, rootless and directionless. The prophecy indicts Jeroboam for abandoning the LORD more thoroughly than all who came before him, for making Israel sin, and for provoking God&rsquo;s anger."
  },
];

const themesSections = [
  {
    heading: "The Consequences of False Worship",
    color: ROSE,
    body: "First Kings 14 presents false worship not as a private spiritual preference but as a covenant crime with geopolitical consequences. Jeroboam did not simply err theologically &mdash; he made &ldquo;all Israel&rdquo; to sin (v. 16), which is a phrase the books of Kings will repeat like a hammer blow through every subsequent northern king&rsquo;s obituary. This communal dimension of idolatry is theologically significant: leaders shape the worship of nations, and the spiritual direction of a people flows from what their leaders honor. The golden calves at Bethel and Dan were not neutral innovations; they were substitutions for the living God that corrupted the entire religious imagination of the northern kingdom for generations. The judgment pronounced in chapter 14 was not disproportionate &mdash; it was commensurate with the severity of institutional apostasy."
  },
  {
    heading: "The Prophetic Word as Interpretive Key",
    color: TEAL,
    body: "Ahijah the Shilonite appears first in 1 Kings 11, where he tears his new garment into twelve pieces to illustrate the coming division of Solomon&rsquo;s kingdom, giving Jeroboam ten tribes. Now in chapter 14, the same prophet pronounces destruction on the very king he had originally anointed. This creates a powerful theological pattern: God raises up leaders through his prophetic word, and God brings them down through the same word. The prophetic office in the Old Testament functions as the covenant enforcement mechanism &mdash; prophets are not primarily predictors of the future but covenant prosecutors, announcing the blessings and curses of Deuteronomy 28 as they apply to present-day Israel. The fact that Ahijah is now blind yet sees clearly mirrors the spiritual condition of Jeroboam&rsquo;s household: physically present before God&rsquo;s messenger, yet spiritually blind to what they had done."
  },
  {
    heading: "Temple Plundering as Covenant Sign",
    color: GOLD,
    body: "The second half of the chapter turns to Rehoboam&rsquo;s Judah, where Shishak (Shoshenq I) of Egypt plunders the Jerusalem temple in approximately 926 BC &mdash; a date confirmed by Egyptian records found at Karnak. The looting of Solomon&rsquo;s golden shields is not merely a military setback; it is a visible diminishment of covenantal glory. Rehoboam replaces the golden shields with bronze replicas, which the guards use for ceremonial purposes. The downgrade from gold to bronze is a theological commentary: what was glorious under faithful Solomon becomes a hollow imitation under apostate Rehoboam. Deuteronomy had promised that covenant faithfulness would lead to Israel lending to nations rather than borrowing, ruling rather than being ruled. The invasion of Shishak and the ransacking of the temple are precisely the curses of Deuteronomy 28 made visible."
  },
  {
    heading: "Naamah the Ammonite and Covenant Intermarriage",
    color: PURPLE,
    body: "The chapter notes twice that Rehoboam&rsquo;s mother was Naamah the Ammonite (vv. 21, 31). The repetition is deliberate and pointed. Solomon&rsquo;s many foreign wives and their importation of foreign gods was the root cause of the kingdom&rsquo;s division (1 Kings 11:1&ndash;13). Rehoboam &mdash; the product of one of those marriages &mdash; continues the trajectory of apostasy. The Ammonites were traditional enemies of Israel associated with the god Molech. The mention of Naamah frames Rehoboam&rsquo;s evil not as a personal failure alone but as the fruit of the covenant violation his father committed. Deuteronomy 17:17 had explicitly warned the king not to multiply wives for himself, knowing it would turn his heart away. The consequences of Solomon&rsquo;s disobedience were being harvested by his son and by an entire nation."
  },
  {
    heading: "The Reed Shaken in Water: Exile Foretold",
    color: GREEN,
    body: "Ahijah&rsquo;s prophecy that the LORD will &ldquo;uproot Israel from this good land that he gave to their fathers and scatter them beyond the Euphrates&rdquo; (v. 15) is a stunning preview of the Assyrian exile that will occur in 722 BC, approximately two centuries later. The image of a reed shaken in water captures the vulnerability and directionlessness that idolatry produces. A tree has roots; a reed does not. Israel, by abandoning the covenant that gave them their identity and rootedness in the land, has become like a plant without soil &mdash; subject to every current of geopolitical force. The Deuteronomic theology of the land is clear throughout Kings: the land is a gift sustained by covenant faithfulness, and its loss is the ultimate covenant curse."
  },
];

const verseByVerseSections = [
  {
    verses: "Verses 1&ndash;5: The Sick Son and the Disguised Wife",
    color: GOLD,
    body: "At that time Abijah son of Jeroboam fell ill, and Jeroboam instructed his wife to disguise herself and travel to Shiloh to consult the prophet Ahijah. The detail that Jeroboam sent gifts of bread, cakes, and honey &mdash; common gifts for a prophet &mdash; suggests he was trying to approach this consultation through conventional religious channels even while disguising the identity of the inquirer. Shiloh was the ancient sanctuary where the ark had rested before its capture by the Philistines, giving Ahijah a connection to Israel&rsquo;s most sacred historical geography. The LORD&rsquo;s pre-emptive disclosure to Ahijah before Jeroboam&rsquo;s wife arrived demonstrates divine omniscience that mocks the entire scheme of disguise. God&rsquo;s word to the prophet &mdash; &ldquo;behold, the wife of Jeroboam is coming&rdquo; &mdash; signals that no concealment before God is possible."
  },
  {
    verses: "Verses 6&ndash;11: Ahijah&rsquo;s Oracle of Judgment",
    color: ROSE,
    body: "Ahijah&rsquo;s opening words &mdash; &ldquo;Come in, wife of Jeroboam. Why do you pretend to be another?&rdquo; &mdash; expose the pretense instantly. The judgment oracle that follows contains five distinct elements: a recitation of what Jeroboam had received from God (the kingdom), a recitation of how Jeroboam had responded (by making other gods and casting images), a specific judgment on the house of Jeroboam (every male cut off), a comparison with the judgment on Jeroboam (worse than all before him), and the announcement of what will happen to every member of his household. The phrase &ldquo;him who is shut up and him who is left at large in Israel&rdquo; (v. 10) is an idiom for totality &mdash; no one excluded. The imagery of dung being swept away is as viscerally disgraceful in ancient Near Eastern culture as it sounds in modern ears &mdash; the prophet is not softening the message."
  },
  {
    verses: "Verses 12&ndash;16: The Death of Abijah and the Scattering of Israel",
    color: TEAL,
    body: "Ahijah then tells Jeroboam&rsquo;s wife that the moment her feet enter the city, the child will die. This is simultaneously a judgment and a mercy: the child&rsquo;s death is the only death in the entire family that will involve proper mourning and burial, because &ldquo;in him there is found something pleasing to the LORD, the God of Israel&rdquo; (v. 13). The child&rsquo;s early death is thus described as a form of divine protection &mdash; he is spared seeing the destruction that will fall on his family. This is a remarkable theological claim: sometimes premature death is mercy rather than punishment. The broader oracle then widens to encompass all Israel, announcing their scattering beyond the Euphrates because they made Asherah poles and provoked God to anger. The specific mention of Asherah poles points to the importation of Canaanite fertility cult worship alongside Jeroboam&rsquo;s golden calves."
  },
  {
    verses: "Verses 17&ndash;20: Fulfillment for Jeroboam&rsquo;s House",
    color: PURPLE,
    body: "The narrative tersely records the exact fulfillment of Ahijah&rsquo;s prophecy: as Jeroboam&rsquo;s wife crossed the threshold of her house, the child died. The theological point is made with surgical precision by the narrator &mdash; the word of the prophet proved accurate to the moment. Jeroboam&rsquo;s reign summary in verses 19&ndash;20 notes that he warred and reigned twenty-two years before dying. The &ldquo;acts of Jeroboam&rdquo; reference to another chronicle reminds readers that the books of Kings are theological history, not exhaustive political biography. The defining note on Jeroboam is not his military victories or building projects but his sin and the sin he caused Israel to commit &mdash; this is the lens through which all subsequent northern kings will be evaluated."
  },
  {
    verses: "Verses 21&ndash;31: Rehoboam&rsquo;s Reign in Judah",
    color: GOLD,
    body: "The second half of the chapter pivots to Judah and Rehoboam&rsquo;s seventeen-year reign. The litany of Judah&rsquo;s sins in verses 22&ndash;24 is devastating: they built high places, pillars, and Asherah poles; they had cult prostitutes (&ldquo;those who do what is detestable&rdquo;). The phrase &ldquo;they did according to all the abominations of the nations that the LORD drove out before the people of Israel&rdquo; (v. 24) is the sharpest possible indictment &mdash; Israel has become what God displaced from Canaan to make room for them. Shishak&rsquo;s invasion in the fifth year of Rehoboam&rsquo;s reign strips the temple and palace of their golden treasures. The replacement shields of bronze carried by the royal guard for ceremonial entries into the temple represent the hollowing-out of Solomonic glory &mdash; the forms of worship maintained while the substance of covenant faithfulness has evaporated."
  },
];

const applicationSections = [
  {
    heading: "When We Come to God in Disguise",
    color: PURPLE,
    body: "Jeroboam&rsquo;s wife approaching the prophet while concealing her identity is a portrait of a spiritual condition common among believers: coming to God for what we want (healing, guidance, blessing) while concealing what we are doing (living in disobedience, maintaining idols, refusing to repent). The prophet&rsquo;s question &mdash; &ldquo;Why do you pretend to be another?&rdquo; &mdash; is addressed to every heart that brings prayer requests while maintaining a life that is fundamentally structured around something other than God. Christian application begins here: God is not impressed by the ceremonial approach, by the gifts in hand, or by the respectful religious framing of the request. He sees through the disguise. The invitation is not to better pretending but to honest exposure &mdash; which is the definition of genuine repentance."
  },
  {
    heading: "The Generational Weight of Leadership",
    color: ROSE,
    body: "One of the most sobering dimensions of 1 Kings 14 is how the idolatry of both Jeroboam and Solomon reaches forward in time to destroy subsequent generations. Jeroboam&rsquo;s sin becomes the template by which every northern king is measured for the next two centuries. Solomon&rsquo;s marriage to Naamah produces a son who rules badly because his father&rsquo;s spiritual compromise shaped his formation. Every parent, pastor, elder, and leader in the Christian community carries this kind of forward weight. What we introduce into the spiritual ecosystem of our families and congregations tends to persist and intensify. The antidote is not simply personal faithfulness but the cultivation of a community of worship so robustly biblical that succeeding generations inherit something worth inheriting."
  },
  {
    heading: "Mercy Hidden Inside Judgment",
    color: GREEN,
    body: "The death of the child Abijah, interpreted by Ahijah as a mercy because the child had &ldquo;something pleasing to the LORD&rdquo; in him, opens a difficult but important dimension of biblical theology: divine judgment sometimes takes the form of early death as protection from worse things to come. Christians need to hold this carefully. It does not provide a formula for interpreting the deaths of individuals. But it does establish that God&rsquo;s purposes in adversity are not always what they appear on the surface, and that what looks like pure loss may contain a dimension of grace that is only visible from a perspective wider than our own. Paul&rsquo;s words in Romans 8:28 echo this reality: all things &mdash; including deaths, defeats, and disasters &mdash; are being worked together for good for those who love God and are called according to his purpose."
  },
  {
    heading: "From Gold to Bronze: The Downgrade of Compromise",
    color: GOLD,
    body: "Rehoboam&rsquo;s replacement of Solomon&rsquo;s golden shields with bronze replicas that still performed the same ceremonial function is an arresting image for the life of congregations and individuals who have maintained the forms of Christian life while losing its substance. The guards still marched in procession. The shields were still carried. The ritual was still observed. But the gold was gone. The bronze was good enough to fool a casual observer, good enough to maintain the appearance of continuity with Solomon&rsquo;s glory. Churches can maintain liturgy, preaching schedules, small groups, and budgets while the fervent love for Christ that once animated those structures has been quietly replaced with institutional habit. First Kings 14 invites an honest audit: what in our personal and corporate worship has been quietly downgraded from gold to bronze?"
  },
];

export default function Kings14GuidePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(180deg, #0e0a1a 0%, ${BG} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 8, padding: "4px 14px", marginBottom: 16 }}>
            <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }}>OLD TESTAMENT &mdash; HISTORICAL BOOKS</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, margin: "0 0 12px", lineHeight: 1.15 }}>
            1 Kings Chapter 14
          </h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "Ahijah&rsquo;s prophecy of ruin against Jeroboam&rsquo;s dynasty &mdash; the death of a son, the scattering of a nation, and the plundering of Solomon&rsquo;s temple by Egypt." }} />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "Prophetic Judgment", color: ROSE },
              { label: "False Worship", color: GOLD },
              { label: "Covenant Curses", color: TEAL },
              { label: "Temple Plundering", color: PURPLE },
            ].map((tag) => (
              <span key={tag.label} style={{ background: `${tag.color}15`, border: `1px solid ${tag.color}35`, color: tag.color, borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 700 }}>
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{ background: CARD, borderBottom: `1px solid ${BORDER}`, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px", display: "flex", gap: 0, overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button
              type="button"
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                background: "transparent",
                border: "none",
                borderBottom: activeTab === i ? `3px solid ${GOLD}` : "3px solid transparent",
                color: activeTab === i ? GOLD : MUTED,
                fontWeight: activeTab === i ? 800 : 600,
                fontSize: 14,
                padding: "16px 20px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontFamily: "Georgia, serif",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${GOLD}30`, borderRadius: 14, padding: 24 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 10 }}>CHAPTER AT A GLANCE</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
                {[
                  { label: "Book", value: "1 Kings" },
                  { label: "Chapter", value: "14" },
                  { label: "Approx. Date", value: "c. 928 BC" },
                  { label: "Location", value: "Tirzah / Jerusalem" },
                  { label: "Key Prophet", value: "Ahijah of Shiloh" },
                  { label: "Kings Covered", value: "Jeroboam, Rehoboam" },
                ].map((item) => (
                  <div key={item.label} style={{ background: BG, borderRadius: 8, padding: "10px 12px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 700 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {overviewSections.map((s) => (
              <div key={s.heading} style={{ background: CARD, border: `1px solid ${s.color}25`, borderRadius: 14, padding: 28 }}>
                <h2 style={{ color: s.color, fontSize: 19, fontWeight: 800, margin: "0 0 14px" }}
                  dangerouslySetInnerHTML={{ __html: s.heading }} />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: s.body }} />
              </div>
            ))}

            {/* Key Verse Callout */}
            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}35`, borderRadius: 14, padding: 28 }}>
              <div style={{ color: TEAL, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 12 }}>KEY VERSE</div>
              <blockquote style={{ margin: 0, borderLeft: `3px solid ${TEAL}`, paddingLeft: 20 }}>
                <p style={{ color: TEXT, fontSize: 17, lineHeight: 1.8, fontStyle: "italic", margin: "0 0 10px" }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;For the LORD will strike Israel as a reed is shaken in the water, and he will root up Israel out of this good land that he gave to their fathers and scatter them beyond the Euphrates.&rdquo;" }} />
                <cite style={{ color: MUTED, fontSize: 13, fontStyle: "normal", fontWeight: 700 }}>1 Kings 14:15 (ESV)</cite>
              </blockquote>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}25`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>THEOLOGICAL THEMES IN 1 KINGS 14</div>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "This chapter weaves together some of the most important theological threads in the entire Deuteronomistic History: the relationship between worship and national destiny, the prophetic word as covenant enforcement, and the visible consequences of abandoning the living God for manufactured substitutes." }} />
            </div>
            {themesSections.map((s) => (
              <div key={s.heading} style={{ background: CARD, border: `1px solid ${s.color}25`, borderRadius: 14, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 6, height: 36, borderRadius: 3, background: s.color, flexShrink: 0 }} />
                  <h2 style={{ color: s.color, fontSize: 18, fontWeight: 800, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: s.heading }} />
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: s.body }} />
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${TEAL}25`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: TEAL, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>VERSE BY VERSE COMMENTARY</div>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "A passage-by-passage walk through 1 Kings 14, examining the Hebrew context, narrative structure, and theological significance of each unit. Cross-references draw connections to Deuteronomy, Exodus, and the broader canonical witness." }} />
            </div>
            {verseByVerseSections.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${s.color}25`, borderRadius: 14, padding: 28 }}>
                <div style={{ background: `${s.color}12`, border: `1px solid ${s.color}30`, borderRadius: 8, display: "inline-block", padding: "4px 14px", marginBottom: 14 }}>
                  <span style={{ color: s.color, fontWeight: 800, fontSize: 13 }}
                    dangerouslySetInnerHTML={{ __html: s.verses }} />
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: s.body }} />
              </div>
            ))}

            {/* Cross Reference Panel */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}25`, borderRadius: 14, padding: 28 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 14 }}>KEY CROSS-REFERENCES</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "Deuteronomy 28:36&ndash;37", note: "Covenant curse of exile and scattering among the nations &mdash; the template Ahijah&rsquo;s prophecy enacts" },
                  { ref: "Exodus 32:1&ndash;8", note: "Aaron&rsquo;s golden calf deliberately echoed by Jeroboam&rsquo;s &ldquo;Behold your gods&rdquo; (1 Kings 12:28)" },
                  { ref: "1 Kings 11:29&ndash;39", note: "Ahijah&rsquo;s first prophecy to Jeroboam &mdash; the torn garment and the promise of the northern kingdom" },
                  { ref: "2 Chronicles 12:1&ndash;12", note: "The parallel account of Shishak&rsquo;s invasion with additional detail on Rehoboam&rsquo;s partial repentance" },
                  { ref: "Deuteronomy 17:14&ndash;20", note: "The law of the king, including the prohibition on multiplying wives &mdash; the law Solomon violated and Rehoboam embodied" },
                ].map((cr) => (
                  <div key={cr.ref} style={{ background: BG, borderRadius: 8, padding: "10px 14px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: GREEN, fontWeight: 800, fontSize: 13, flexShrink: 0, minWidth: 160 }}
                      dangerouslySetInnerHTML={{ __html: cr.ref }} />
                    <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: cr.note }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${GREEN}25`, borderRadius: 14, padding: 20 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 8 }}>APPLICATION FOR CHRISTIANS TODAY</div>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Old Testament history is not merely ancient record &mdash; Paul explicitly says it was written &ldquo;for our instruction&rdquo; (Romans 15:4) and that the events happened as &ldquo;examples for us&rdquo; (1 Corinthians 10:6). First Kings 14 speaks with remarkable directness into perennial patterns of Christian life." }} />
            </div>

            {applicationSections.map((s) => (
              <div key={s.heading} style={{ background: CARD, border: `1px solid ${s.color}25`, borderRadius: 14, padding: 28 }}>
                <h2 style={{ color: s.color, fontSize: 18, fontWeight: 800, margin: "0 0 14px" }}
                  dangerouslySetInnerHTML={{ __html: s.heading }} />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: s.body }} />
              </div>
            ))}

            {/* Reflection Questions */}
            <div style={{ background: `${PURPLE}0d`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ color: PURPLE, fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", marginBottom: 16 }}>REFLECTION QUESTIONS</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "In what areas of your life are you approaching God in disguise &mdash; seeking his blessing while concealing a pattern of disobedience?",
                  "What have you inherited from the spiritual leaders who formed you, and what do you want to hand on to those coming after you?",
                  "Where has your personal or community worship downgraded from &lsquo;gold to bronze&rsquo; &mdash; maintaining the form while losing the substance?",
                  "How does the image of a &lsquo;reed shaken in water&rsquo; describe what a life looks like when it has lost its rootedness in covenant relationship with God?",
                  "What does the death of Abijah as an act of mercy teach you about how God&rsquo;s purposes in suffering can be larger than your current perspective?",
                ].map((q, i) => (
                  <div key={i} style={{ background: BG, borderRadius: 8, padding: "12px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${PURPLE}25`, border: `1px solid ${PURPLE}40`, display: "flex", alignItems: "center", justifyContent: "center", color: PURPLE, fontWeight: 900, fontSize: 12, flexShrink: 0 }}>
                      {i + 1}
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ color: GOLD, fontSize: 22, fontWeight: 800, margin: "0 0 8px" }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{ __html: "Sermons and lectures on 1 Kings 14 and its surrounding historical and theological context." }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 20 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: TEXT, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{v.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Scripture */}
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;For the LORD your God is a consuming fire, a jealous God.&rdquo; &mdash; Deuteronomy 4:24 (ESV)" }} />
        </div>
      </div>
    </div>
  );
}
