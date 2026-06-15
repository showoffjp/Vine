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
  "Solomon's Prayer",
  "Heaven Cannot Contain",
  "God's Covenant Faithfulness",
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
    heading: "2 Chronicles 6 &mdash; Overview",
    reference: "2 Chronicles 6:1&ndash;42",
    paragraphs: [
      "Second Chronicles 6 records one of the most magnificent moments in the Old Testament: the dedication of Solomon&rsquo;s Temple in Jerusalem and the great prayer of dedication that Solomon offers before the assembled people of Israel. The chapter forms the theological and spiritual climax of the Temple-building narrative that began in chapter 2, and it stands as one of the longest and most theologically rich prayers in all of Scripture.",
      "The chapter opens with a brief pronouncement by Solomon in response to the dramatic cloud of God&rsquo;s glory that had filled the Temple (described in chapter 5): &ldquo;The Lord has said that he would dwell in thick darkness. But I have built you an exalted house, a place for you to dwell in forever&rdquo; (vv. 1&ndash;2). This is Solomon&rsquo;s initial meditation on the mystery at the center of the occasion: the God who dwells in unapproachable light and sovereign transcendence has condescended to make his name dwell among his people in this house of cedar and stone.",
      "Solomon then turns to face the whole assembly of Israel and blesses them, rehearsing the history of how this moment came to be (vv. 3&ndash;11). He traces the Lord&rsquo;s faithfulness to David his father: how God had chosen Jerusalem as the city where his name would dwell, how he had selected David to be king over Israel, how David&rsquo;s desire to build a house for the Lord was accepted even though it fell to Solomon to carry it out. The genealogy of this moment matters &mdash; it is embedded in a history of grace.",
      "The prayer itself (vv. 12&ndash;42) is structured around seven distinct petitions, each addressing a different scenario in which the people of Israel &mdash; or even foreigners &mdash; might turn toward the Temple and pray. The seven scenarios include: individual disputes requiring an oath (v. 22), defeat in battle due to sin (vv. 24&ndash;25), drought (vv. 26&ndash;27), famine and plague (vv. 28&ndash;31), the prayer of a foreigner (vv. 32&ndash;33), battle against an enemy (vv. 34&ndash;35), and exile in a foreign land (vv. 36&ndash;39). In each case Solomon pleads that God would hear from heaven and forgive.",
      "The theological backbone of the entire chapter is the interplay between God&rsquo;s transcendence and his immanence &mdash; between the God who is so vast that &ldquo;heaven and the highest heaven cannot contain&rdquo; him (v. 18) and the God who has promised to make his name dwell in a building that a human king can construct. Solomon holds these two truths together without resolving the tension, and that refusal to collapse the mystery is itself a mark of profound theological wisdom.",
      "For Christian readers, 2 Chronicles 6 is not simply ancient religious history. It is a window into the character of the God who later, in the fullness of time, would solve the riddle of transcendence and immanence in a way Solomon could not have imagined: not by sending his name to dwell in a building, but by sending his Son to dwell in human flesh (John 1:14 &mdash; &ldquo;the Word became flesh and dwelt among us,&rdquo; using the same language as the tabernacle&rsquo;s &lsquo;dwelling&rsquo;). The Temple was always a signpost pointing toward an even greater indwelling yet to come.",
    ],
  },
  {
    id: "Solomon's Prayer",
    heading: "The Structure and Content of Solomon&rsquo;s Prayer",
    reference: "2 Chronicles 6:12&ndash;42",
    paragraphs: [
      "Solomon&rsquo;s prayer of dedication is a masterpiece of covenantal theology, structured with care and moving with mounting intensity. Before offering the prayer, Solomon takes a posture of deliberate public humility: he stands before the altar of the Lord in the sight of all the assembly of Israel, spreads out his hands (the ancient posture of prayer, indicating openness and dependence), and then kneels on his knees before all the congregation and spreads his hands toward heaven (v. 13). The posture matters: the king, at the height of his power and glory, prostrates himself before God in the sight of all Israel.",
      "The prayer opens with adoration and confession of God&rsquo;s uniqueness: &ldquo;O Lord, God of Israel, there is no God like you, in heaven or on earth, keeping covenant and showing steadfast love to your servants who walk before you with all their heart&rdquo; (v. 14). The word translated &lsquo;steadfast love&rsquo; is the Hebrew <em>hesed</em> &mdash; covenant loyalty, unfailing love, the love that does not let go even when the beloved is faithless. Solomon anchors everything he is about to ask in the character of the God to whom he is praying.",
      "The first great movement of the prayer (vv. 15&ndash;17) celebrates God&rsquo;s faithfulness to David. Solomon rehearses how God had promised David a son to sit on his throne and build the house, and how God had now fulfilled that promise. &ldquo;Now therefore, O Lord, God of Israel, keep for your servant David my father what you have promised him&rdquo; (v. 16). This is a bold act of covenant appeal: Solomon is not merely reporting past faithfulness; he is holding God to his word for the future. The past faithfulness of God is the ground and warrant for present prayer.",
      "The seven petitions that follow (vv. 22&ndash;39) are remarkable for their comprehensiveness. They move from the personal (an individual swearing an oath before the altar) to the national (defeat in battle, drought, famine), to the universal (the foreigner who comes from a distant land, drawn by the great name of God). The inclusion of the foreigner in verse 32 is startling in its breadth: Solomon prays that God would hear and answer the prayer of the non-Israelite who hears of the God of Israel and comes to pray toward this house. The Temple was always meant to be a house of prayer for all nations (see Isaiah 56:7), a signpost drawing all peoples toward the one true God.",
      "Each petition follows the same pattern: a description of the crisis, a description of the act of prayer toward the Temple, and a plea that God would &lsquo;hear from heaven&rsquo; and respond with forgiveness, justice, or deliverance as the situation requires. The repetition of the phrase &lsquo;hear from heaven&rsquo; is significant: Solomon does not think God is imprisoned in the Temple. The Temple is the place where the name of God dwells, the address to which prayer is directed; but God himself hears from heaven. The Temple is a meeting point, not a container.",
      "The petition concerning exile (vv. 36&ndash;39) is especially poignant and prophetically far-sighted. Solomon prays: if the people sin against God and are carried away into captivity in a foreign land, and if there they come to their senses and repent, and pray toward this land, this city, this house &mdash; then hear from heaven and forgive. This prayer looks ahead with remarkable prescience to the very catastrophe that will eventually befall Israel. It is as though Solomon, even at the moment of Israel&rsquo;s greatest glory, cannot forget the conditional nature of the covenant and the seriousness of the moral obligations that accompany God&rsquo;s gift.",
      "The prayer closes in verses 40&ndash;42 with a final appeal for God to arise and come to his resting place, quoting from Psalm 132. &ldquo;O Lord God, do not turn away the face of your anointed one! Remember your steadfast love for David your servant&rdquo; (v. 42). The final word of the prayer is <em>hesed</em> &mdash; steadfast love &mdash; the same word with which the prayer effectively began. The whole great edifice of petition is built on and returns to the bedrock of God&rsquo;s covenant love. That love is both the basis on which Israel dares to pray and the confidence in which prayer can be offered without despair.",
    ],
  },
  {
    id: "Heaven Cannot Contain",
    heading: "&ldquo;Heaven Cannot Contain You&rdquo; &mdash; Transcendence and Immanence",
    reference: "2 Chronicles 6:18&ndash;21",
    paragraphs: [
      "At the very center of Solomon&rsquo;s prayer, in verse 18, lies one of the most arresting theological statements in the entire Old Testament: &ldquo;But will God indeed dwell with man on the earth? Behold, heaven and the highest heaven cannot contain you, how much less this house that I have built!&rdquo; Solomon asks the question that the very existence of the Temple makes unavoidable: can the infinite God be localized? Can the Creator of all things be contained in a building that human hands have erected? And his answer is an immediate, emphatic negative.",
      "The phrase &ldquo;heaven and the highest heaven&rdquo; uses a Hebrew superlative construction &mdash; <em>shamayim u-shamei ha-shamayim</em>, &ldquo;heavens and the heavens of the heavens.&rdquo; It points to the totality of created existence, the furthest reaches of whatever cosmos human imagination can conceive. And Solomon declares that even all of that cannot &lsquo;contain&rsquo; God &mdash; the word suggests to hold, to enclose, to be sufficient for. God is not merely large; he is of a different ontological category than anything created. He is not the biggest thing in existence; he is the ground of existence itself, the one in whom all things hold together (Col. 1:17).",
      "This theological conviction &mdash; the radical transcendence of God &mdash; is the foundation that makes the whole Temple-theology both necessary and paradoxical. If God cannot be contained even by the universe, then no building humans make can be a &lsquo;house&rsquo; for him in any naive or literal sense. Yet God himself had commanded the building of this house. He had promised to make his &lsquo;name&rsquo; dwell there. The concept of the divine &lsquo;name&rsquo; in Hebrew thought is crucial here: the name is not merely a label but a real presence, a self-manifestation. God does not dwell in the Temple in the totality of his being; but he has chosen to make his name &mdash; a real, accessible, genuine presence &mdash; available at this place.",
      "This is the biblical resolution of the tension between transcendence and immanence, and it is far more sophisticated than most ancient religions managed. The gods of the nations were, in effect, local and limited &mdash; deities of specific places, powers confined to particular territories. The God of Israel is not. He is the Lord of the whole earth, and yet he has graciously chosen to make himself accessible to his people at a particular place. The Temple&rsquo;s significance is not that God is present there and nowhere else, but that God has promised to hear prayer directed toward that place. It is a concession to human need, a condescension of divine love.",
      "The early chapters of 1 Kings record how, after the Temple was completed and the ark brought in, the glory cloud filled the house so that the priests could not stand to minister (1 Kings 8:10&ndash;11; cf. 2 Chron. 5:13&ndash;14). This theophany &mdash; the visible manifestation of the divine presence &mdash; was not God moving in from elsewhere as though he had been absent before. It was God&rsquo;s granting of a visible sign that he had accepted this house as his dwelling, that the meeting place between heaven and earth that Israel needed had been established. The Temple was the cosmic intersection, the stairway between worlds, the place where the gap between transcendent Creator and embodied creation was, at God&rsquo;s initiative, bridged.",
      "The New Testament declares that the riddle Solomon articulated has finally been solved &mdash; not by a more spectacular building but by a person. In John 1:14, the Greek word for &lsquo;dwelt among us&rsquo; (<em>eskenosen</em>) is the word for tabernacle &mdash; the Word pitched his tent, his tabernacle, among us. In John 2:19&ndash;21, Jesus speaks of the &lsquo;temple of his body.&rsquo; In Revelation 21:22, John sees the new Jerusalem and notices that &ldquo;I saw no temple in the city, for its temple is the Lord God the Almighty and the Lamb.&rdquo; The entire trajectory of Temple theology in Scripture moves toward the day when the question &ldquo;Will God indeed dwell with man?&rdquo; receives its final, irreversible yes in the person of Jesus Christ and, ultimately, in the new creation where God himself is the temple.",
      "Solomon&rsquo;s humility in verse 18 is therefore not just theological correctness; it is wisdom. He does not overreach by claiming that his building has domesticated the divine. He holds the wonder of what God has done &mdash; chosen to localize his presence &mdash; alongside the equal wonder of who God is &mdash; the one whom no place can contain. That double awareness &mdash; of God&rsquo;s condescending nearness and his infinite greatness &mdash; is the posture the whole chapter commends to us: to come to God boldly in prayer, because he has invited us; and to come with profound reverence, because he is the God whom heaven itself cannot hold.",
    ],
  },
  {
    id: "God's Covenant Faithfulness",
    heading: "God&rsquo;s Covenant Faithfulness to David and Israel",
    reference: "2 Chronicles 6:3&ndash;17 &amp; Theological Themes",
    paragraphs: [
      "The theological nerve of 2 Chronicles 6 &mdash; and indeed of the entire Temple-dedication narrative &mdash; is the concept of God&rsquo;s covenant faithfulness. Solomon&rsquo;s speech to the assembled people (vv. 3&ndash;11) and his subsequent prayer are structured as a sustained reflection on what it means that God keeps his word. The God of Israel is not capricious or inconsistent; he is the God who promised David a dynasty and a house, who promised Israel a land and a law, and who has now brought all of these promises to a visible, tangible focus in the completed Temple.",
      "The Davidic covenant is the immediate background of Solomon&rsquo;s meditation. In 2 Samuel 7, God had made an extraordinary promise to David: David would not build a house for God; rather, God would build a &lsquo;house&rsquo; (dynasty) for David. One of David&rsquo;s sons would sit on his throne and build the Temple, and God would be a father to him and he a son to God. Solomon stands at the completion of this promise, and his first act is to say so publicly: &ldquo;Blessed be the Lord, the God of Israel, who with his hand has fulfilled what he promised with his mouth to David my father&rdquo; (v. 4).",
      "But Solomon&rsquo;s rehearsal of covenant history goes further back than David. He begins with the Exodus: &ldquo;Since the day that I brought my people out of the land of Egypt, I chose no city in all the tribes of Israel in which to build a house, that my name might be there&rdquo; (v. 5). The Temple-building is thus presented as the conclusion of a long arc that stretches from Egypt to Sinai to the wilderness wanderings to the conquest, and only now reaches its appointed end. What Israel is witnessing in the dedication of the Temple is not merely the completion of a building project; it is the arrival of a covenant relationship at its intended resting place.",
      "The word &lsquo;chose&rsquo; is one of the most theologically loaded words in the Hebrew Bible. It appears here three times: God chose Jerusalem (v. 6), God chose David (v. 6), and implicitly God chose Israel. Election &mdash; the free, sovereign choice of God &mdash; is the foundation of everything. Solomon did not build this Temple because he was great; God built it through Solomon because God is faithful. Jerusalem was not the center of the ancient world because of its strategic location; it was the center because God chose it. The whole magnificent ceremony is, at its root, a celebration of grace &mdash; of the God who was not obligated to any of this but chose it freely for the sake of his people.",
      "The conditional dimension of the covenant must also be noted, because Solomon does not flinch from it. In verse 16, just after celebrating God&rsquo;s faithfulness to David, he quotes the condition God had attached: &ldquo;only if your sons pay close attention to their way, to walk in my law as you have walked before me.&rdquo; The promise is unconditional in one dimension (God will always be faithful) and conditional in another (Israel&rsquo;s enjoyment of the blessings of covenant relationship depends on their obedience). The Chronicler is writing in the knowledge that the conditional aspect was not honored &mdash; the people did not walk in God&rsquo;s law, the Temple was eventually destroyed, and the exile took place. Solomon&rsquo;s prayer anticipated this possibility; history confirmed it.",
      "The seven petitions of Solomon&rsquo;s prayer all assume this covenantal framework. When Israel sins and suffers defeat or drought or captivity, the right response is not despair but repentance and prayer toward the Temple. God&rsquo;s covenant does not cancel out the consequences of sin, but it does hold open a door of return. The phrase &ldquo;hear from heaven and forgive&rdquo; is the heartbeat of the prayer, repeated with variations seven times. It is a statement about the character of the God with whom Israel is in covenant: a God who forgives, a God who restores, a God who does not cast off forever those who return to him with their whole heart.",
      "For the Christian reader shaped by the New Testament, the covenant faithfulness celebrated in 2 Chronicles 6 finds its ultimate expression in the person and work of Jesus Christ. Paul declares in 2 Corinthians 1:20, &ldquo;All the promises of God find their Yes in him.&rdquo; Every covenant promise God made to Israel &mdash; the promise of a land, a king, a temple, a people, a presence &mdash; reaches its deepest fulfillment in Christ. The new covenant inaugurated in his blood is not a departure from the covenant faithfulness Solomon celebrated; it is its full arrival. In Christ, heaven has not merely allowed its name to dwell in a building; in Christ, the living God has dwelt in human flesh, and through Christ, by the Spirit, God himself comes to dwell in his people as his new temple (1 Cor. 3:16; Eph. 2:21&ndash;22). Solomon could not have imagined a faithfulness so lavish, a condescension so total, a presence so intimate.",
    ],
  },
];

const videoItems = [
  { videoId: "VWUpO7kOJHw", title: "BibleProject - Overview of 1-2 Chronicles" },
  { videoId: "H8bVDHi9nOA", title: "Solomon's Temple Dedication - 2 Chronicles 5-7 Explained" },
  { videoId: "dRMp7KDR2Xo", title: "The Davidic Covenant and the Temple in the Old Testament" },
  { videoId: "6v9QjMOjmTI", title: "God's Covenant Faithfulness - Themes in Chronicles" },
];

export default function TwoChronicles6GuidePage() {
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
            2 Chronicles 6 &mdash; Solomon&rsquo;s Temple Dedication
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Solomon dedicates the Temple with a sweeping prayer of covenant faithfulness &mdash; acknowledging that &ldquo;heaven and the highest heaven cannot contain&rdquo; the God who has graciously chosen to make his name dwell among his people, and pleading for forgiveness across seven scenarios of human need.
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
              Deepen your study of 2 Chronicles 6 through visual teaching on Solomon&rsquo;s prayer, the Temple dedication, the Davidic covenant, and the theme of God&rsquo;s covenant faithfulness through the Chronicler&rsquo;s lens.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Hear from Heaven and Forgive</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Solomon&rsquo;s prayer holds in tension the infinite transcendence of God &mdash; whom heaven itself cannot contain &mdash; and his astonishing willingness to hear and forgive those who turn toward him. That same God, in Christ, has done what Solomon could only gesture toward: he has come down not merely to make his name dwell in stone, but to dwell among us in flesh, and finally to dwell within his people by his Spirit.
          </p>
        </div>
      </main>
    </div>
  );
}
