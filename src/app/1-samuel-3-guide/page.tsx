"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Word Was Rare",
  "God Calls Samuel",
  "Samuel Listens",
  "God's Message of Judgment",
  "Eli's Response",
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
    heading: "Overview of 1 Samuel 3",
    reference: "1 Samuel 3:1&ndash;21",
    paragraphs: [
      "First Samuel 3 is one of the most tender and searching chapters in the Old Testament. It records the night on which God called the boy Samuel in the silence of the tabernacle at Shiloh &mdash; a night that marked the beginning of a prophetic ministry that would reshape the entire history of Israel. The chapter opens in a moment of deep spiritual darkness and closes with the dawn of a new era: Samuel established as a prophet through whom the Lord would speak to his people.",
      "The narrative is set against the backdrop of the failure of the house of Eli. Eli was the priest at Shiloh, aged and nearly blind, whose two sons Hophni and Phinehas had made themselves despicable before the Lord by abusing their priestly office. God had already sent an unnamed man of God to Eli with a word of devastating judgment against his family. The stage was set for a new voice to arise &mdash; and God chose not a trained priest or a seasoned prophet, but a boy who did not yet know the Lord and to whom the word of the Lord had not yet been revealed.",
      "The story of Samuel&rsquo;s calling is structured around three divine summons and three mistaken responses, each time Samuel running to Eli thinking the old priest had called him. The repetition is not accidental; it creates a rhythm of patient divine initiative and gradual human recognition. It is only on the third occasion that Eli, perceiving what is happening, instructs Samuel how to respond: &ldquo;Speak, Lord, for your servant is listening.&rdquo; What follows is one of the most solemn prophetic commissions in Scripture.",
      "The chapter closes with a remarkable summary statement about Samuel&rsquo;s emerging ministry: the Lord was with him and let none of his words fall to the ground. From Dan to Beersheba, all Israel came to know that Samuel was established as a prophet of the Lord. The boy who lay down in the temple not knowing the Lord&rsquo;s voice became the man through whom the Lord spoke to all Israel &mdash; a transformation that began in a single night of darkness, silence, and divine call.",
    ],
  },
  {
    id: "The Word Was Rare",
    heading: "The Word Was Rare",
    reference: "1 Samuel 3:1",
    paragraphs: [
      "The chapter opens with a statement that sets the spiritual atmosphere with stark economy: &ldquo;And the word of the Lord was rare in those days; there was no frequent vision&rdquo; (3:1). This single sentence is one of the most haunting in all the Old Testament. It describes not merely an institutional gap or a shortage of professional prophets, but something far more personal &mdash; a withdrawal of God&rsquo;s communicating presence from his people. The heavens, as it were, had gone quiet.",
      "The rarity of the word of the Lord was itself a form of divine judgment. Throughout the Torah, God had promised that if Israel walked in faithfulness, he would dwell among them and speak to them. The converse was also true: persistent covenant-breaking would result in God hiding his face, withdrawing his presence, and leaving his people without prophetic guidance. The silence of those days at Shiloh was not a random religious ebb; it was the silence of a people who had drifted from the God who spoke to Abraham, Isaac, Jacob, and Moses.",
      "The corruption of the priesthood under Hophni and Phinehas made the silence worse. The men who were supposed to mediate between God and the people &mdash; who were supposed to teach the Torah, maintain the sacrifices, and seek the Lord on Israel&rsquo;s behalf &mdash; were instead exploiting the worshipers, taking the best portions of the sacrifices for themselves, and sleeping with the women who served at the entrance of the tent of meeting. When the priests are corrupt, the channels through which God ordinarily speaks become clogged, and the word grows rare.",
      "Yet even in this spiritual winter, God did not abandon his people altogether. The lamp of God had not yet gone out; the ark was still in its place; the tabernacle still stood at Shiloh. And into that silence God was about to speak &mdash; not through the established priesthood that had failed him, but through a child who was sleeping near the ark. The rarity of the word only makes its arrival more dramatic. When God finally speaks, he speaks not to the powerful but to the powerless, not to the experienced but to the innocent.",
      "The opening verse of chapter 3 is therefore not just historical background; it is a theological statement about how God works. He is not bound by the spiritual state of the institutions through which he ordinarily operates. When those institutions fail, he raises up new voices &mdash; unexpected, unprepared, often young or overlooked. The word of the Lord may be rare for a season, but it is never permanently silenced. God will speak, and he will choose the vessel of his own choosing.",
      "This truth carries an enduring message for every generation that finds itself in a moment of spiritual dryness and prophetic silence. The scarcity of genuine spiritual vision in a given time and place does not mean that God has abandoned his people or that he has nothing to say. It means that the conditions are ripe for him to do something new, something unexpected, something that will cut through the silence with a word that changes everything. The very rarity of the word in those days made Samuel&rsquo;s call all the more electrifying when it came.",
    ],
  },
  {
    id: "God Calls Samuel",
    heading: "God Calls Samuel Three Times",
    reference: "1 Samuel 3:2&ndash;10",
    paragraphs: [
      "The scene is set with deliberate care: Eli was lying in his place with his eyes beginning to grow dim; the lamp of God had not yet gone out; and Samuel was lying down in the temple of the Lord, where the ark of God was. The physical proximity of the boy to the ark is significant &mdash; he slept near the most sacred object in Israel&rsquo;s worship, the throne of God&rsquo;s presence. Yet despite this nearness to the sacred, Samuel did not know the Lord, and the word of the Lord had not yet been revealed to him.",
      "Then the Lord called, &ldquo;Samuel!&rdquo; The simplicity and directness of the divine call is striking. There is no burning bush, no whirlwind, no vision of wheels and creatures and fire. God speaks the boy&rsquo;s name in the night, and Samuel, with the natural assumption of a servant child in a temple, runs to the only figure of authority he knows &mdash; the old priest Eli &mdash; and says, &ldquo;Here I am, for you called me.&rdquo; Eli, who had not called, sends him back: &ldquo;I did not call; lie down again.&rdquo;",
      "The exchange happens a second time, then a third. Each time Samuel hears his name and runs to Eli; each time Eli sends him back. The narrative&rsquo;s repetition is theologically rich. Samuel&rsquo;s three-fold misidentification of the caller is not presented as failure but as innocence. He simply did not yet know that the voice was divine. He had grown up in the tabernacle, ministering before the Lord, learning the routines of priestly service &mdash; but a personal, direct encounter with the living God was something new and unprecedented.",
      "It is only on the third occasion that Eli understands what is happening. &ldquo;Eli perceived that the Lord was calling the boy&rdquo; (3:8). This perception on Eli&rsquo;s part is itself remarkable &mdash; a moment of spiritual discernment from a man whose household was under divine judgment. Whatever his failures as a father and a priest, Eli still knew enough of God to recognize the pattern of a divine call. His instruction to Samuel is simple and profound: &ldquo;Go, lie down, and if he calls you, you shall say, &lsquo;Speak, Lord, for your servant is listening.&rsquo;&rdquo;",
      "When the Lord comes and stands and calls again &mdash; &ldquo;Samuel! Samuel!&rdquo; &mdash; the boy answers with the words Eli has given him. The posture of response that Eli taught Samuel captures the entire disposition of a listening heart before God: acknowledgment of the speaker&rsquo;s authority (&ldquo;Lord&rdquo;), invitation to continue speaking, and self-identification as a servant ready to receive whatever the master has to say. It is one of the great prayer postures of the Old Testament, and it has echoed through the lives of believers ever since.",
    ],
  },
  {
    id: "Samuel Listens",
    heading: "Samuel Listens and Lies Awake Until Morning",
    reference: "1 Samuel 3:10&ndash;18",
    paragraphs: [
      "The Lord came and stood, calling as at other times, &ldquo;Samuel! Samuel!&rdquo; And Samuel said, &ldquo;Speak, for your servant is listening.&rdquo; The slight variation from what Eli instructed &mdash; Samuel omits the word &ldquo;Lord&rdquo; &mdash; has been noticed by generations of commentators, but the essential posture is the same: a servant making himself available to receive whatever the master has to say. Samuel was ready. He had moved from confusion to attentiveness, from running away to lying still and listening.",
      "What God then said to Samuel was not a word of encouragement or a gentle introduction to prophetic ministry. It was a word of devastating judgment, confirming and intensifying the earlier oracle against the house of Eli. God told Samuel that he was about to do something in Israel at which both ears of everyone who heard it would tingle. He was going to carry out against Eli everything he had spoken concerning his family, because Eli knew that his sons were blaspheming God and he did not restrain them. The iniquity of Eli&rsquo;s house would not be atoned for by sacrifice or offering forever.",
      "The weight of what Samuel heard must have been enormous for a boy who had grown up in Eli&rsquo;s care. Eli was his guardian, his mentor, the father-figure of his childhood in the tabernacle. To receive a word of irrevocable judgment against this man and his entire lineage was not an abstract theological exercise; it was deeply personal. Samuel lay until morning. He was afraid to tell the vision to Eli. The text does not say he slept; the implication is that he lay awake in the dark, holding the terrible word that had been entrusted to him.",
      "In the morning Eli summoned Samuel, calling him &ldquo;my son,&rdquo; which underlines the tenderness of the relationship between them. He asked Samuel what God had said, adding an adjuration: &ldquo;May God do so to you and more also if you hide anything from me of all that he told you.&rdquo; This is an act of remarkable moral seriousness on Eli&rsquo;s part. He understood enough of what had happened to know that a prophetic word had been given, and he charged Samuel not to conceal it, even if it concerned himself.",
      "Samuel then told him everything and hid nothing from him. This moment of honesty required courage proportionate to the relationship &mdash; a young servant delivering a word of doom to the very man who had raised him. The faithfulness with which Samuel discharged this first commission established the pattern of his entire prophetic career: he would speak the word of the Lord without softening it to please his hearers, even when the hearers were those he loved and to whom he owed a debt of gratitude.",
    ],
  },
  {
    id: "God's Message of Judgment",
    heading: "God's Message of Judgment Against Eli's House",
    reference: "1 Samuel 3:11&ndash;14",
    paragraphs: [
      "The content of God&rsquo;s word to Samuel in the night is one of the most solemn judicial pronouncements in the Old Testament. &ldquo;I am about to do something in Israel that will make both ears of everyone who hears of it tingle&rdquo; (3:11). The tingling of ears was a Hebrew idiom for the overwhelming impact of shocking news &mdash; a physical tremor produced by information too grave to process calmly. Whatever God was about to do would shake the nation.",
      "The divine indictment of Eli&rsquo;s house focuses not only on the sins of Hophni and Phinehas but on Eli&rsquo;s response to those sins. &ldquo;For I told him that I am about to punish his house forever, for the iniquity that he knew, because his sons were blaspheming God, and he did not restrain them&rdquo; (3:13). This is a crucial distinction. The charge against Eli is not that he committed the abuses his sons committed; it is that he knew about them and failed to restrain them. Leadership carries a responsibility not only for personal righteousness but for the conduct of those placed under one&rsquo;s authority.",
      "The word &ldquo;blaspheme&rdquo; here translates a Hebrew term that in some manuscripts reads &ldquo;curse,&rdquo; suggesting that the sons&rsquo; sin was of the gravest possible kind &mdash; a contempt for the holiness of God expressed through their treatment of the sacred office they held. They ate the flesh of the sacrifices before the fat was burned, took portions by force from those who came to worship, and used their priestly position for personal gratification. This was not weakness or carelessness; it was deliberate desecration of what was holy.",
      "The sentence God pronounces is absolute and irreversible: &ldquo;Therefore I swear to the house of Eli that the iniquity of Eli&rsquo;s house shall not be atoned for by sacrifice or offering forever&rdquo; (3:14). The very means by which forgiveness was normally secured &mdash; sacrifice and offering &mdash; are explicitly stated to be unavailing for this particular offense. The house of Eli has placed itself beyond the reach of the ordinary remedies of covenant violation. The judgment is irrevocable.",
      "This message carried enormous theological weight for the nation. The priests at the central sanctuary of Israel, the very people entrusted with maintaining the people&rsquo;s access to God, had so thoroughly corrupted their office that God himself swore an oath of irrevocable judgment against them. The implication was clear: the old priestly order at Shiloh was finished. Something new was coming. The word given to Samuel in the night was not just a judgment on one family; it was the announcement of a transition in Israel&rsquo;s history from the age of the judges and the old priesthood to the age of prophets and kings.",
      "The connection between prophetic integrity and the judgment on corrupt leadership is one of the enduring themes of this chapter. God raised up Samuel as a prophet precisely because the established leadership had failed. His first prophetic word was one of judgment against that leadership. The pattern repeats throughout Israel&rsquo;s history: when priests and kings abandon their calling, God raises up prophets to speak his truth to those in power and to call the nation back to covenant faithfulness.",
    ],
  },
  {
    id: "Eli's Response",
    heading: "Eli's Response and Samuel's Growth",
    reference: "1 Samuel 3:15&ndash;21",
    paragraphs: [
      "Eli&rsquo;s response to the word of judgment against his house is one of the most moving moments in the chapter. After Samuel, at Eli&rsquo;s insistence and under his charge, reports everything God had said, the old priest responds with a sentence of remarkable submission: &ldquo;It is the Lord. Let him do what seems good to him&rdquo; (3:18). There is no protestation, no argument, no appeal for leniency. Only acceptance &mdash; the acceptance of a man who knows the justice of what has been said and yields himself to the sovereign will of God.",
      "Eli&rsquo;s submission does not rehabilitate him in the narrative&rsquo;s judgment; the sentence against his house stands, and its fulfillment will come swiftly and terribly in chapter 4. But his response does reveal something true about him: beneath the failure of oversight that had allowed his sons to desecrate the priestly office, there was a genuine fear of the Lord. He recognized the divine authority behind Samuel&rsquo;s word, he honored it by refusing to suppress it, and he bowed before it with a humility that his sons never displayed.",
      "The chapter then turns to a summary of Samuel&rsquo;s emerging reputation. &ldquo;And Samuel grew, and the Lord was with him and let none of his words fall to the ground&rdquo; (3:19). The phrase &ldquo;none of his words fell to the ground&rdquo; is an idiom for prophetic reliability &mdash; everything Samuel said came to pass. He was not a prophet who offered private speculations or uncertain intuitions; he spoke the word of the Lord, and the word proved true. This reliability became the basis of his authority throughout Israel.",
      "The geographic sweep of Samuel&rsquo;s prophetic ministry is described with deliberate breadth: &ldquo;And all Israel from Dan to Beersheba knew that Samuel was established as a prophet of the Lord&rdquo; (3:20). Dan to Beersheba was the conventional expression for the full extent of the land, from its northernmost to its southernmost point. The boy who had lain awake in the dark holding a terrible divine word was now the recognized prophetic voice for the entire nation. The scarcity of prophetic vision noted in verse 1 was ending.",
      "The final verse of the chapter looks forward: &ldquo;And the Lord appeared again at Shiloh, for the Lord revealed himself to Samuel at Shiloh by the word of the Lord&rdquo; (3:21). The repetition of &ldquo;Shiloh&rdquo; is intentional. The place that had been associated with the corrupted priesthood of Eli&rsquo;s household was now being renewed as the place where the word of the Lord came. The tabernacle at Shiloh had not been abandoned; it had been given a new prophetic guardian.",
      "The arc of Samuel&rsquo;s story from the beginning of chapter 1 to the end of chapter 3 is a study in how God prepares his servants for their calling through the ordinary circumstances of their lives. Hannah&rsquo;s anguished prayer, her vow, her fulfillment of that vow in leaving Samuel at Shiloh &mdash; all of this was preparation for a prophetic ministry that neither Hannah nor Samuel could have foreseen. The boy who ministered before the Lord in a linen ephod, who heard his name called in the darkness and did not know whose voice it was, became the prophet who stood at the fulcrum of Israel&rsquo;s history and none of his words fell to the ground.",
    ],
  },
];

const videoItems = [
  { videoId: "pK8mLxH2nQs", title: "1 Samuel 3 - God Calls Samuel in the Night" },
  { videoId: "qT5vRmNjF9e", title: "Samuel and Eli - The Voice of God in the Temple" },
  { videoId: "rM7wLpXcG4k", title: "Speak Lord, Your Servant Is Listening - 1 Samuel 3 Study" },
  { videoId: "sN9xKqBhD6m", title: "The Word of the Lord Was Rare - Prophetic Calling of Samuel" },
];

export default function Samuel3GuidePage() {
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
            1 Samuel 3 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            God calls the boy Samuel in the silence of the tabernacle &mdash; three times in the night, each time mistaken for Eli&rsquo;s voice, until the old priest discerns the divine call and teaches Samuel to answer: &ldquo;Speak, Lord, for your servant is listening.&rdquo; The word of the Lord was rare in those days, but God was about to raise up a prophet through whom none of his words would fall to the ground.
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

        {currentSection && activeTab !== "Videos" && (
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
              Deepen your study of 1 Samuel 3 through these video teachings on the calling of Samuel, the word of the Lord being rare in those days, Eli&rsquo;s discernment, and what it means to say &ldquo;Speak, Lord, for your servant is listening.&rdquo;
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Speak, Lord, for Your Servant Is Listening</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Samuel 3 invites every reader into the posture of Samuel &mdash; lying still in the presence of God, ready to receive whatever he has to say. The word of the Lord may be rare in seasons of spiritual drought, but God does not stop calling. He calls by name, he waits through confusion and misidentification, and when his servant finally understands and answers, he speaks with a word that changes everything. None of Samuel&rsquo;s words fell to the ground because they were not his words; they were the Lord&rsquo;s.
          </p>
        </div>
      </main>
    </div>
  );
}
