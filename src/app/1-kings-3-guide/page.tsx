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
  "Solomon at Gibeon",
  "God Asks What Solomon Wants",
  "A Wise and Discerning Heart",
  "The Wisdom of Solomon",
  "Application",
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
    heading: "Overview of 1 Kings 3",
    reference: "1 Kings 3:1&ndash;28",
    paragraphs: [
      "First Kings 3 is one of the most celebrated chapters in the Old Testament &mdash; the chapter in which the young king Solomon, newly established on his father David&rsquo;s throne, goes to Gibeon to worship and there receives the defining gift of his reign. The Lord appears to him in a dream by night and extends a staggering invitation: &ldquo;Ask what I shall give you&rdquo; (3:5). What Solomon asks for, and what God gives him in response, shapes everything that follows in the history of Israel&rsquo;s golden age.",
      "The chapter divides into two main movements. The first (vv. 1&ndash;15) is Solomon&rsquo;s encounter with God at Gibeon: the setting is established, God offers Solomon whatever he wishes, Solomon asks not for riches or long life or the death of his enemies but for a discerning heart to govern the people and to distinguish between good and evil, and God is so pleased with the request that he grants both wisdom and the things Solomon did not ask for &mdash; surpassing riches and honor. The second movement (vv. 16&ndash;28) is the famous demonstration of that wisdom: two women come before the king, each claiming the same living baby, and Solomon&rsquo;s brilliant and piercing judgment reveals who the true mother is.",
      "The theological heart of the chapter is the connection between humility and wisdom. Solomon receives wisdom precisely because he does not grasp after it for his own sake. He confesses that he is as a little child who does not know how to go out or come in. He does not ask for personal advantage; he asks for the capacity to serve God&rsquo;s people well. This posture &mdash; acknowledging need, directing the gift toward service, giving the credit to God &mdash; is the posture that wisdom itself produces and requires. The chapter suggests that the beginning of wisdom is knowing that you do not have it and that only God can give it.",
      "The chapter also functions as a window into the nature of kingship in Israel. The king was not merely a political ruler; he was to be the servant of justice for the people of God. When the two women come before Solomon, the scene dramatizes the most vulnerable and contested situations a king would face: no witnesses, no evidence, only two conflicting claims over the most precious thing in the world to a mother. Solomon&rsquo;s handling of the case demonstrates that God&rsquo;s gift of wisdom was not abstract or academic; it was practical, penetrating, and morally serious. &ldquo;All Israel heard of the judgment that the king had rendered, and they stood in awe of the king, because they perceived that the wisdom of God was in him to do justice&rdquo; (3:28).",
      "Chapter 3 also introduces the shadow that will grow across the whole Solomonic narrative. Solomon&rsquo;s marriage to Pharaoh&rsquo;s daughter is mentioned at the very beginning (v. 1), without immediate comment, but the reader of the entire book will come to see it as the first sign of the divided allegiances that will in time pull Solomon&rsquo;s heart away from God. Similarly, the note that the people were still sacrificing at the high places (v. 2) suggests that the worship of Israel was not yet fully centralized in the way God intended. The chapter holds together the glory of God&rsquo;s gift and the fragility of the human heart that receives it.",
      "Ultimately, 1 Kings 3 is a chapter about the kind of king God wants for his people and the kind of heart that qualifies a leader to serve. Solomon&rsquo;s request for wisdom rather than wealth or power is the ideal response to God&rsquo;s offer. It is also, in retrospect, a standard against which the rest of Solomon&rsquo;s life will be measured. The wisdom given at Gibeon in the morning of his reign will need to be renewed in the dailiness of ruling &mdash; in the temptations of wealth, in the pressures of political alliance, in the gradual drift that the years can bring. Chapter 3 is the high point; the rest of 1 Kings will test whether the gift was retained.",
    ],
  },
  {
    id: "Solomon at Gibeon",
    heading: "Solomon at Gibeon",
    reference: "1 Kings 3:1&ndash;5",
    paragraphs: [
      "The chapter opens with two pieces of contextual information that frame Solomon&rsquo;s reign before the great encounter at Gibeon. First, Solomon made a marriage alliance with Pharaoh king of Egypt and took Pharaoh&rsquo;s daughter as his wife (v. 1). The narrator does not comment on this here, but the attentive reader of the whole book will recognize it as the first of the political marriages that will eventually number in the hundreds and prove to be the source of Solomon&rsquo;s spiritual undoing. Egypt was Israel&rsquo;s ancient oppressor; to seal a covenant with Pharaoh through marriage was to begin a pattern of finding security in human alliances rather than in the Lord alone.",
      "The second contextual note concerns the state of worship in Israel: &ldquo;The people were sacrificing at the high places, however, because no house had yet been built for the name of the Lord&rdquo; (v. 2). This is offered as a partial explanation, a mitigation: worship at the high places was not yet fully corrected because the Temple had not yet been built. Solomon himself loved the Lord and walked in the statutes of his father David, except that he too sacrificed and burned incense at the high places. The narrator is careful: Solomon&rsquo;s devotion is genuine, but the form of worship is still incomplete and will not be fully corrected until the Temple is built.",
      "Solomon goes to Gibeon to sacrifice there, for it was the great high place. A thousand burnt offerings he offered on the altar there. The sheer scale of the sacrifice &mdash; a thousand burnt offerings &mdash; expresses the earnestness of Solomon&rsquo;s worship. He is not offering a token sacrifice; he is giving lavishly and completely. Whatever the imperfection of the location, the spirit behind the offering is one of wholehearted devotion. Solomon is not a lukewarm king; he is a man who throws himself into his worship with the same totality that will later, tragically, be given to his multiplied wives and foreign alliances.",
      "Gibeon was the site of the tabernacle, the tent of meeting, at this time. The ark of the covenant had been brought to Jerusalem by David (2 Samuel 6), but the tabernacle itself and the bronze altar were at Gibeon (2 Chronicles 1:3&ndash;6). This is why Gibeon is called &ldquo;the great high place&rdquo; &mdash; it was not an illegitimate site of worship but the principal place of the officially sanctioned tabernacle worship. Solomon&rsquo;s going there is an act of religious faithfulness, not syncretism. He is worshiping at the place where the tabernacle is, offering on the altar that Moses made.",
      "It is at Gibeon, in the night following his great sacrifice, that the Lord appears to Solomon. &ldquo;At Gibeon the Lord appeared to Solomon in a dream by night, and God said, &lsquo;Ask what I shall give you&rsquo;&rdquo; (v. 5). The divine appearance in a dream is consistent with the way God communicated with the patriarchs and with Moses (Numbers 12:6). The offer itself is breathtaking in its openness: ask anything. No conditions are stated, no limits set. God is inviting his newly crowned king to make a request, to bring his deepest desire before the Lord and see what God will give. The whole future of Solomon&rsquo;s reign will turn on what he asks next.",
      "The setting at night, in a dream, is also significant for the intimacy it conveys. This is not a public encounter; it is a private word from God to the king. It has the quality of a father speaking to a son in the quiet of the night &mdash; a moment of closeness and trust and invitation. The God who governs all of history is, in this moment, entirely attentive to one young king at a high place in the Judean hills, asking what his heart desires. The tenderness of this invitation is part of what makes Solomon&rsquo;s response so admirable: he does not use this intimate moment for personal gain.",
    ],
  },
  {
    id: "God Asks What Solomon Wants",
    heading: "God Asks What Solomon Wants",
    reference: "1 Kings 3:6&ndash;9",
    paragraphs: [
      "Solomon&rsquo;s response to God&rsquo;s open-ended invitation begins not with a request but with an act of grateful remembrance. &ldquo;You have shown great and steadfast love to your servant David my father, because he walked before you in faithfulness, in righteousness, and in uprightness of heart toward you. And you have kept for him this great and steadfast love and have given him a son to sit on his throne this day&rdquo; (v. 6). Before asking anything of God, Solomon acknowledges what God has already done. The Hebrew word hesed &mdash; steadfast love, covenant faithfulness &mdash; appears twice in these two verses, underlining that Solomon understands his position not as something he earned but as something given by God&rsquo;s gracious covenant commitment to his father.",
      "Then comes the confession of need. &ldquo;And now, O Lord my God, you have made your servant king in place of David my father, although I am but a little child. I do not know how to go out or come in&rdquo; (v. 7). Solomon is not literally a child; he is a grown man and an experienced administrator. The confession of being &ldquo;a little child&rdquo; is a statement about the magnitude of the task and his own felt insufficiency before it. Compared to the weight of governing the people of God, he is a child. Compared to his father David, whose wisdom in leadership is the standard he must live up to, he is inexperienced. The humility here is not false modesty; it is the accurate perception of a man who understands how great the calling is.",
      "The scope of the responsibility is made explicit: &ldquo;Your servant is in the midst of your people whom you have chosen, a great people, too many to be numbered or counted for multitude&rdquo; (v. 8). Solomon does not speak of &ldquo;my people&rdquo; but of &ldquo;your people whom you have chosen.&rdquo; He locates the people of Israel within God&rsquo;s purposes, not within his own dynastic ambitions. To govern God&rsquo;s chosen people is a task of a different order from governing any ordinary nation; it requires a wisdom that comes from God, because the people themselves belong to God. Solomon understands that he has been placed over something that is not ultimately his own.",
      "The request itself arrives with remarkable precision: &ldquo;Give your servant therefore an understanding mind to govern your people, that I may discern between good and evil, for who is able to govern this your great people?&rdquo; (v. 9). The Hebrew is literally &ldquo;a hearing heart&rdquo; &mdash; a heart that listens, that is attentive, that takes in the word of God and the needs of the people and processes them with moral seriousness. Solomon does not ask for cleverness or eloquence or military genius. He asks for the capacity to hear &mdash; to hear God&rsquo;s word and to hear the people&rsquo;s situations &mdash; and to respond with just discernment.",
      "The phrase &ldquo;to discern between good and evil&rdquo; is not primarily a moral reference to distinguishing right from wrong in the abstract. In the context of judicial wisdom it means the ability to see through competing claims to the truth of a matter, to distinguish the guilty from the innocent, the real from the false, the just verdict from the unjust one. The king in Israel was the supreme judge; to judge required precisely this kind of discernment. Solomon is asking God for the wisdom to do his job well &mdash; not for personal enrichment, not for military victory, not for long life, but for the ability to govern justly.",
      "The rhetorical question at the end of the request &mdash; &ldquo;for who is able to govern this your great people?&rdquo; &mdash; is the final act of humility that seals the whole speech. Solomon does not say &ldquo;I am unable&rdquo; but frames the question universally: who is able? No one, by themselves, is adequate to govern the people of God. The request for wisdom is, at its root, a confession that no human wisdom is sufficient, and an appeal to the God who alone has wisdom adequate to the task. In asking for what he needs to serve others, Solomon demonstrates that he already possesses the first and greatest quality of a wise ruler: the knowledge that the wisdom he needs is not his own.",
    ],
  },
  {
    id: "A Wise and Discerning Heart",
    heading: "A Wise and Discerning Heart",
    reference: "1 Kings 3:10&ndash;15",
    paragraphs: [
      "The divine response to Solomon&rsquo;s request begins with an expression of genuine pleasure: &ldquo;It pleased the Lord that Solomon had asked this&rdquo; (v. 10). The Hebrew verb conveys delight &mdash; God is not merely approving the request; he is moved by it. The content of the delight is then spelled out: Solomon had not asked for long life or riches or the death of his enemies. He had asked for understanding to discern what is right. These are the three things that might naturally come to a king&rsquo;s mind when offered anything: security for his own life, wealth to cement his power, and victory over those who threaten him. Solomon asked for none of them. He asked for the capacity to serve well, and this pleased God more than any self-interested request could have.",
      "&ldquo;Behold, I now do according to your word. Behold, I give you a wise and discerning mind, so that none like you has been before you and none like you shall arise after you&rdquo; (v. 12). The superlative is absolute: Solomon&rsquo;s wisdom will be without precedent and without successor among the kings of the earth. This is not a relative claim &mdash; that he will be wiser than most &mdash; but an absolute one: no one before or after will be like him in this. The gift of God is given in full measure. What Solomon asked for humbly and in full awareness of its necessity, God gives in overflowing abundance. Divine generosity exceeds even what was requested.",
      "But God does not stop with what Solomon asked for. &ldquo;I give you also what you have not asked, both riches and honor, so that no other king shall compare with you, all your days&rdquo; (v. 13). The things that a self-seeking king might have asked for first &mdash; wealth and honor and dominance over rivals &mdash; are given to Solomon as bonus gifts precisely because he did not ask for them. There is a profound spiritual principle embedded here: the one who seeks first the capacity to serve others faithfully receives as a consequence the things that a self-centered person seeks for himself. This does not reduce to a prosperity formula; it is a statement about the character of God&rsquo;s generosity toward the humble and obedient.",
      "God adds a conditional promise: &ldquo;And if you will walk in my ways, keeping my statutes and my commandments, as your father David walked, then I will lengthen your days&rdquo; (v. 14). This condition will prove crucial as the narrative unfolds. The gift of wisdom does not come with an automatic guarantee of lifelong faithfulness; it comes with a call to continued obedience. The reader of the whole book knows that this condition will be imperfectly met. Solomon&rsquo;s heart will be turned by his foreign wives; his statutes will be partially kept and partially abandoned. The gift of wisdom received does not automatically become wisdom retained. The promise at Gibeon depends on continued walking in the ways of David.",
      "Solomon wakes from his dream and comes to Jerusalem. He stands before the ark of the covenant of the Lord &mdash; not at the high place in Gibeon but before the ark in Jerusalem, the true center of Israel&rsquo;s covenant life with God. He offers burnt offerings and peace offerings and makes a feast for all his servants. The movement from Gibeon to Jerusalem, from the high place to the ark, is itself symbolically significant: the gift received in the dream at Gibeon sends Solomon back to the center of his covenant relationship with God. The response to divine encounter is renewed, centralized worship.",
      "The pattern of the whole passage is one of gift and response, grace and gratitude. God initiates with the open offer; Solomon responds with humble petition; God gives bountifully; Solomon responds with worship and celebration. The God who appears at Gibeon is a God of generous initiative who is looking for a heart that seeks his glory and his people&rsquo;s good above its own advantage. When he finds such a heart, even in a young and uncertain king, he meets it with a gift that exceeds all expectation. The God of 1 Kings 3 is not a reluctant giver waiting to be persuaded; he is an eager Father longing to give what his children need most.",
    ],
  },
  {
    id: "The Wisdom of Solomon",
    heading: "The Wisdom of Solomon",
    reference: "1 Kings 3:16&ndash;28",
    paragraphs: [
      "The second movement of the chapter (vv. 16&ndash;28) is one of the most famous scenes in the entire Bible &mdash; a case study in the wisdom that God gave at Gibeon, now applied to the most difficult kind of human situation. Two women come before King Solomon. They are described as prostitutes &mdash; women of the lowest social standing, without husbands to advocate for them, without wealth, without social capital of any kind. The very fact that they come before the king rather than a lower court official suggests that their case has no resolution in the ordinary channels of justice. They come as a last resort.",
      "The situation is stark. The two women live together in the same house. Both gave birth recently, three days apart. One woman&rsquo;s child died in the night when she lay on it. In her grief and desperation, she rose in the night and exchanged the dead child for the living one while the other woman slept. When the other woman woke to nurse her child, she found the dead baby &mdash; and she saw that it was not her son. Now before the king each claims the living child as her own and says the dead one belongs to the other. There are no witnesses, no documents, no evidence. Two competing claims over the same child, and no way to adjudicate between them by ordinary means.",
      "Solomon&rsquo;s response appears, at first, to be a shocking failure of judgment. &ldquo;Bring me a sword&rdquo; (v. 24). He orders that the living child be divided in two and half given to each woman. The command seems to abandon the child to death rather than resolve the question of motherhood. But Solomon is not ordering an execution; he is conducting a test. He is using the threat of an irreversible and terrible outcome to expose what is hidden in the hearts of the two women &mdash; which of them loves the child enough to relinquish her claim rather than see him harmed.",
      "The true mother is immediately revealed. &ldquo;Then the woman whose son was alive said to the king, because her heart yearned for her son, &lsquo;Oh, my lord, give her the living child, and by no means put him to death.&rsquo; But the other said, &lsquo;He shall be neither mine nor yours; divide him.&rsquo;&rdquo; (v. 26). The contrast is absolute. One woman&rsquo;s love for the child overrides her claim to him; she will give up her right rather than see him die. The other woman&rsquo;s bitterness drives her to consent to the child&rsquo;s death rather than allow the other woman to have him. The sword does not divide the child; it divides the true mother from the false one.",
      "Solomon&rsquo;s verdict is immediate: &ldquo;Give the living child to the first woman, and by no means put him to death; she is his mother&rdquo; (v. 27). The wisdom of the judgment lies not in a clever legal argument or an appeal to evidence; it lies in the reading of the human heart. Solomon understood something about maternal love that the conventional tools of justice could not reach: that the real mother would rather lose her child to life than keep him in death. He created a condition in which love itself would declare the truth. The test worked because love cannot help but reveal itself when pushed to the extreme.",
      "The aftermath is reported simply but powerfully: &ldquo;And all Israel heard of the judgment that the king had rendered, and they stood in awe of the king, because they perceived that the wisdom of God was in him to do justice&rdquo; (v. 28). The key phrase is &ldquo;the wisdom of God was in him to do justice.&rdquo; Solomon&rsquo;s wisdom is not presented as his own native intelligence or psychological insight; it is explicitly attributed to God. The people who stand in awe of Solomon are, at the same time, standing in awe of God who gave him this gift. The wisdom that renders justice for the most vulnerable in the most difficult of cases is, at its source, the wisdom of the God who himself is just and who gives wisdom to those who ask in humility and faith.",
    ],
  },
  {
    id: "Application",
    heading: "Applying 1 Kings 3 Today",
    reference: "1 Kings 3 &mdash; For the Life of the Church",
    paragraphs: [
      "The invitation God extends to Solomon at Gibeon &mdash; &ldquo;Ask what I shall give you&rdquo; &mdash; is one of the Bible&rsquo;s most direct windows into the character of God as a giving Father. God is not presented here as reluctant, as one who must be persuaded or appeased before blessing can be received. He initiates, he opens, he invites. The first application of this chapter is not about what Solomon asks but about who God is: a God of overflowing generosity who delights to give good things to those who seek him. James 1:5 reads directly from this chapter&rsquo;s soil: &ldquo;If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.&rdquo; The promise stands, because the God of Gibeon is the same God today.",
      "Solomon&rsquo;s request also confronts every Christian leader and every church with a diagnostic question: what are you really asking God for? When we come before God in prayer, we can ask for many things &mdash; success, influence, protection, resources, the defeat of those who oppose us. Solomon&rsquo;s prayer is a model precisely because he asked for none of those things. He asked for what he needed to serve others well. The prayer of a leader who asks God for the wisdom to serve God&rsquo;s people faithfully is the kind of prayer that pleases God &mdash; not because God is uninterested in our other needs, but because the desire to serve others rather than advance ourselves reflects the heart of the God who is himself a servant-king.",
      "The wisdom Solomon received was not simply intellectual acuity; it was moral discernment &mdash; the capacity to see truly in situations where the truth is hidden and the stakes are high. This is exactly the wisdom that the church most needs today. The questions that come before Christian communities &mdash; questions about pastoral care, about discipline and restoration, about justice for the vulnerable, about navigating competing claims of conscience &mdash; are not primarily technical questions. They are moral questions that require exactly the &ldquo;hearing heart&rdquo; Solomon requested: a heart that listens attentively, weighs carefully, and judges truly. The church that prays for this wisdom is the church that will be trusted, as Solomon was trusted, to do justice.",
      "The two women who come before Solomon are a reminder of who most needs wise and just leadership. They are women without social standing, without legal resources, without advocates. The only thing they have is access to the king. The wisdom God gave Solomon served not the rich and connected but the poorest and most vulnerable in his kingdom. Any leader who asks God for wisdom needs to ask themselves: is the wisdom I am seeking oriented toward the needs of the most vulnerable in my community, or toward the management of those already comfortable? Wisdom that does not reach the lowest in the social order has not yet become what God gave Solomon.",
      "The test Solomon employed &mdash; using the sword not to kill but to reveal &mdash; is a model of the kind of creative, counter-conventional thinking that genuine wisdom enables. Solomon did not follow the established script for adjudicating disputes; he invented a test that went beyond evidence to the level of the heart. The church too is called to a wisdom that is not merely conventional &mdash; that does not simply apply the standard procedure but perceives the real dynamics of a situation and responds in a way that gets to the truth. This is the wisdom that comes not from training alone but from the Spirit of God, who searches all things, even the deep things of God (1 Corinthians 2:10).",
      "Finally, the chapter ends on a note of communal awe: all Israel perceived that the wisdom of God was in the king. The gift of wisdom given to a leader is not for the leader alone; it is for the whole community that stands in the shadow of that leadership. When God gives wisdom to a leader, the effect ripples outward &mdash; people are protected, justice is done, the vulnerable are served, and a whole community comes to know something more about the character of God. The church that prays for its leaders, that God would give them a wise and discerning heart, is praying a prayer that benefits every person in the congregation. The wisdom of God given to one becomes a gift distributed to all.",
    ],
  },
];

const videoItems = [
  { videoId: "BGd2WGS-2us", title: "BibleProject - Overview of 1 Kings 1-11" },
  { videoId: "rjT_FrHQXFs", title: "Solomon and the Wisdom of God - 1 Kings 3 Explained" },
  { videoId: "JU2sjkVx0lA", title: "The Wisdom Test - Solomon Judges the Two Mothers" },
  { videoId: "K9mv2L5RMGU", title: "Asking God for Wisdom - Lessons from 1 Kings 3" },
];

export default function Kings3GuidePage() {
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
            1 Kings 3 &mdash; Ask What I Shall Give You
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Solomon goes to Gibeon to sacrifice and God appears in a dream: &ldquo;Ask what I shall give you.&rdquo; Solomon asks not for riches or long life but for a wise and discerning heart to govern the people. God is pleased &mdash; and gives both wisdom and the things Solomon did not ask for. The famous judgment follows: two mothers, one living child, a sword held in the balance, and a wisdom that sees into the heart.
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
              Deepen your study of 1 Kings 3 through these video teachings on Solomon&rsquo;s dream at Gibeon, his request for wisdom, and the famous judgment of the two mothers.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Give Your Servant a Wise and Discerning Heart</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Kings 3 shows that the beginning of wisdom is knowing you do not have it and that only God can give it. Solomon&rsquo;s request &mdash; asking for what he needed to serve others rather than what he wanted for himself &mdash; pleased God so greatly that God gave him the wisdom he asked for, and added everything else besides. The wisdom that comes from God is not a private treasure; it is a gift given for the sake of the people, to do justice for the most vulnerable, and to reflect the character of the God who is himself just and good.
          </p>
        </div>
      </main>
    </div>
  );
}
