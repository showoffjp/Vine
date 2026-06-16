"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

export default function Proverbs30GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "FGXzy7bxJkQ", title: "Proverbs 30 -- The Wisdom of Agur" },
    { videoId: "W3PiGMXDPZE", title: "Humility and the Fear of God in Proverbs" },
    { videoId: "9Q2ROIQQD0k", title: "The Four Things in Proverbs 30 -- Nature and Wisdom" },
    { videoId: "vYrLkIxZrOI", title: "Contentment and the Middle Way -- Proverbs 30:7-9" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  const BG = "#07070F";
  const CARD = "#12121F";
  const BORDER = "#1E1E32";
  const TEXT = "#F2F2F8";
  const MUTED = "#9898B3";
  const GREEN = "#3a7d56";
  const PURPLE = "#6B4FBB";
  const GOLD = "#D97706";
  const BLUE = "#3B82F6";
  const TEAL = "#0D9488";
  const ROSE = "#E11D48";

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero Section */}
      <div style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #12121F 40%, #1a0a2e 100%)", borderBottom: `1px solid ${BORDER}`, padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: PURPLE + "22", border: `1px solid ${PURPLE}55`, borderRadius: "999px", padding: "6px 18px", marginBottom: "24px" }}>
            <span style={{ color: PURPLE, fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Wisdom Literature</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 20px", color: TEXT }}>
            Proverbs 30&mdash;The Words of Agur
          </h1>
          <p style={{ fontSize: "1.2rem", color: MUTED, lineHeight: 1.7, maxWidth: "680px", margin: "0 auto 28px" }}>
            A deep study of one of the most humble and distinctive voices in all of wisdom literature&mdash;Agur son of Jakeh, whose confession of ignorance before God opens a chapter brimming with wonder, humility, and nature&rsquo;s hidden wisdoms.
          </p>
          <div style={{ display: "inline-block", background: GOLD + "18", border: `1px solid ${GOLD}44`, borderRadius: "8px", padding: "10px 22px" }}>
            <span style={{ color: GOLD, fontStyle: "italic", fontSize: "1rem", fontWeight: 500 }}>&ldquo;Every word of God proves true; he is a shield to those who take refuge in him.&rdquo;&mdash;Proverbs 30:5</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", gap: "4px", overflowX: "auto" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${PURPLE}` : "2px solid transparent",
                color: activeTab === tab.id ? TEXT : MUTED,
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: activeTab === tab.id ? 700 : 400,
                padding: "16px 20px",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div style={{ width: "4px", height: "32px", background: PURPLE, borderRadius: "2px" }}></div>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: TEXT }}>Introduction to Proverbs 30</h2>
                </div>
                <p dangerouslySetInnerHTML={{ __html: "Proverbs 30 stands apart from every other chapter in the book of Proverbs. While most of the collection is attributed to Solomon, this chapter introduces a figure otherwise unknown to us by name: &ldquo;The words of Agur son of Jakeh. The oracle.&rdquo; The Hebrew word translated &ldquo;oracle&rdquo; or &ldquo;burden&rdquo; (massa) was used by the prophets for divine utterance. Its presence here signals that what follows, however unconventional in form, carries the weight of genuine divine wisdom. Agur&rsquo;s very strangeness&mdash;his obscurity, his foreignness, his radical self-deprecation&mdash;is part of what makes his contribution to the wisdom tradition so striking and so necessary." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
                <p dangerouslySetInnerHTML={{ __html: "The chapter opens with what might be the most surprising confession in all of wisdom literature: &ldquo;Surely I am too stupid to be a man. I have not the understanding of a man. I have not learned wisdom, nor have I knowledge of the Holy One&rdquo; (30:2&ndash;3). In a book full of confident declarations about the rewards of wisdom and the nature of God, here is a sage who begins by openly confessing his own ignorance. He does not claim to have ascended to heaven and returned with secret knowledge. He does not offer a systematic theology. He offers the posture of a man who has stood before the vastness of God and come away humbled." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
                <p dangerouslySetInnerHTML={{ __html: "What follows this opening confession is equally remarkable. Agur does not descend into despair or skepticism. Having confessed his ignorance, he turns immediately to the one source of truth that does not depend on human intelligence: &ldquo;Every word of God proves true; he is a shield to those who take refuge in him&rdquo; (30:5). The man who cannot trust his own mind can trust the words of God. The confession of ignorance and the affirmation of scriptural reliability are inseparably linked. This is not a contradiction but a progression&mdash;the epistemological humility that honest reflection produces drives one toward the written word of God rather than away from it." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div style={{ width: "4px", height: "32px", background: GREEN, borderRadius: "2px" }}></div>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: TEXT }}>Who Was Agur?</h2>
                </div>
                <p dangerouslySetInnerHTML={{ __html: "The question of Agur&rsquo;s identity has fascinated scholars for centuries. His father is named as Jakeh, and his addresses in verse 1&mdash;&ldquo;to Ithiel, to Ithiel and Ucal&rdquo;&mdash;suggest real historical persons, though neither is known from any other biblical or extrabiblical source. Some ancient readers suggested that Agur was a pseudonym for Solomon, and that the entire chapter was a kind of literary device in which Solomon played the role of the ignorant questioner in order to set up the great claims of wisdom. But the text gives us no reason to adopt this reading, and the chapter&rsquo;s distinctive style, vocabulary, and theological stance make it more plausible that Agur was a genuine sage from outside the mainstream Israelite tradition." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
                <p dangerouslySetInnerHTML={{ __html: "The name &ldquo;Jakeh&rdquo; and the place-name associations in the chapter have led some scholars to connect Agur with the region of Massa in northern Arabia, the same area mentioned in Genesis 25:14 as a son of Ishmael. If this is correct, Agur would be a non-Israelite sage whose words were included in the Hebrew wisdom canon because the people of Israel recognized in them a genuine encounter with the God who is not the exclusive property of any one nation. The inclusion of non-Israelite wisdom in the Hebrew Scriptures is itself a theological statement: the God of Israel is the God of all creation, and wisdom belongs to those who fear him wherever they are found." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
                <p dangerouslySetInnerHTML={{ __html: "Whatever his precise origin, Agur&rsquo;s voice is unmistakably his own. The chapter moves from raw theological confession (vv. 1&ndash;6) to an intimate prayer (vv. 7&ndash;9) to a series of practical warnings (vv. 10&ndash;14) and then to a remarkable sequence of numerical sayings (vv. 15&ndash;33) in which the natural world becomes the primary classroom of wisdom. Animals, insects, reptiles, and natural phenomena all become mirrors in which Agur sees human character, divine order, and the limits of pride. He is a keen observer of the created order, and his observations carry theological weight precisely because he approaches creation with the eyes of someone who knows he does not have all the answers." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div style={{ width: "4px", height: "32px", background: GOLD, borderRadius: "2px" }}></div>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: TEXT }}>The Literary Structure of the Chapter</h2>
                </div>
                <p dangerouslySetInnerHTML={{ __html: "Proverbs 30 is one of the most structurally distinctive chapters in the Hebrew wisdom literature. Scholars have noted that it organizes its material into several clearly demarcated units, each with its own literary form and purpose. The opening unit (vv. 1&ndash;9) consists of Agur&rsquo;s personal confession and prayer. The middle unit (vv. 10&ndash;14) contains a series of moral warnings in the form of observational sayings. The concluding unit (vv. 15&ndash;33) is dominated by the famous numerical pattern&mdash;sayings structured around the formula &ldquo;three things&hellip;four things&rdquo;&mdash;in which groups of natural phenomena illuminate moral and spiritual truths." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
                <p dangerouslySetInnerHTML={{ __html: "The numerical sayings of Proverbs 30 represent one of the oldest forms of wisdom poetry found in the ancient Near East. Parallel structures appear in Ugaritic literature, in Egyptian wisdom texts, and elsewhere in the Hebrew Bible (cf. Amos 1&ndash;2, where the &ldquo;for three transgressions&hellip;and for four&rdquo; formula structures a series of judgment oracles). The pattern is not merely decorative but pedagogical: it invites the hearer to look for the fourth item, to complete the series, to engage their mind actively in the observation of patterns. Wisdom is not received passively; it is discovered through active, attentive engagement with the world." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
                <p dangerouslySetInnerHTML={{ __html: "The effect of the chapter as a whole is cumulative. Agur begins in a posture of radical humility, acknowledging that he cannot ascend to heaven, that he does not know the name of God&rsquo;s son, that his understanding is limited. He then prays for the ordinary provision of daily bread. And then, from within that posture of humility and contentment, he opens his eyes to the world around him&mdash;and what he sees is extraordinary. The ant and the rock badger and the locust and the lizard all reveal dimensions of wisdom that the proudly self-sufficient person cannot perceive. The chapter argues, in its structure as much as its content, that humility is the gateway to wonder." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "10px", padding: "24px" }}>
                  <div style={{ color: PURPLE, fontSize: "1.5rem", marginBottom: "12px" }}>&#9654;</div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px", color: TEXT }}>Verses 1&ndash;4</h3>
                  <p dangerouslySetInnerHTML={{ __html: "The confession of ignorance before God&mdash;&ldquo;Surely I am too stupid to be a man&rdquo;&mdash;and the rhetorical questions about who has ascended to heaven." }} style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }} />
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "10px", padding: "24px" }}>
                  <div style={{ color: GOLD, fontSize: "1.5rem", marginBottom: "12px" }}>&#9728;</div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px", color: TEXT }}>Verses 5&ndash;6</h3>
                  <p dangerouslySetInnerHTML={{ __html: "Every word of God proves true. Do not add to his words, lest he rebuke you and you be found a liar." }} style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }} />
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "10px", padding: "24px" }}>
                  <div style={{ color: GREEN, fontSize: "1.5rem", marginBottom: "12px" }}>&#9749;</div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px", color: TEXT }}>Verses 7&ndash;9</h3>
                  <p dangerouslySetInnerHTML={{ __html: "The prayer for neither poverty nor riches&mdash;one of the most profound prayers for contentment in all of Scripture." }} style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }} />
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "10px", padding: "24px" }}>
                  <div style={{ color: TEAL, fontSize: "1.5rem", marginBottom: "12px" }}>&#9733;</div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "10px", color: TEXT }}>Verses 15&ndash;33</h3>
                  <p dangerouslySetInnerHTML={{ __html: "The numerical sayings&mdash;four sets of observations from nature that illuminate moral character and the patterns of creation." }} style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "themes" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "4px", height: "32px", background: PURPLE, borderRadius: "2px" }}></div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: TEXT }}>Theme 1: The Confession of Ignorance Before God</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "The first and most striking theme of Proverbs 30 is Agur&rsquo;s radical confession of his own intellectual and spiritual limitations. In a culture that prized wisdom and in a book largely devoted to commending the pursuit of knowledge, Agur&rsquo;s opening words are deeply countercultural: &ldquo;Surely I am too stupid to be a man. I have not the understanding of a man. I have not learned wisdom, nor have I knowledge of the Holy One&rdquo; (30:2&ndash;3). These are not the words of false modesty or performative humility. They are the words of a person who has genuinely reckoned with the gap between human knowledge and divine reality." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The rhetorical questions that follow in verse 4 make the point even more sharply: &ldquo;Who has ascended to heaven and come down? Who has gathered the wind in his fists? Who has wrapped up the waters in a garment? Who has established all the ends of the earth? What is his name, and what is his son&rsquo;s name? Surely you know!&rdquo; The ironic sting in &ldquo;Surely you know!&rdquo; is unmistakable. Agur is pointing to the gap between the enormity of what it would take to truly know God and the actual epistemic situation of any human being. The person who claims confident, comprehensive knowledge of God had better be able to gather wind in their fists." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "This theme of intellectual humility has deep roots in the wisdom tradition. Job&rsquo;s encounter with God in the whirlwind (Job 38&ndash;41) is structured around the same series of unanswerable questions about creation. Ecclesiastes opens with the philosopher&rsquo;s admission that he has sought wisdom and found mostly vanity. The Psalms regularly contrast the infinite knowledge of God with the limitations of human sight (Ps. 139:6&mdash;&ldquo;Such knowledge is too wonderful for me; it is high; I cannot attain it&rdquo;). Agur is not alone in his confession; he is giving voice to something the whole tradition knows but is sometimes reluctant to say plainly." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The theological significance of this theme extends well beyond the immediate context of the chapter. The confession of ignorance before God is not a counsel of despair but of freedom. The person who acknowledges what they do not and cannot know is freed from the anxiety of having to maintain a false certainty. They can hold their theological convictions with appropriate tentativeness on the things that Scripture itself leaves open, while holding fast with full confidence to what God has revealed. Agur&rsquo;s confession is the beginning of intellectual integrity, and intellectual integrity is the foundation of genuine wisdom." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "4px", height: "32px", background: GOLD, borderRadius: "2px" }}></div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: TEXT }}>Theme 2: The Perfection of God&rsquo;s Word</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "Directly following his confession of ignorance, Agur makes what might seem like a surprising pivot: &ldquo;Every word of God proves true; he is a shield to those who take refuge in him&rdquo; (30:5). The juxtaposition is deliberate and illuminating. Agur does not know God fully; he cannot ascend to heaven and return with divine knowledge; his own mind is an unreliable guide through the complexities of existence. But this does not leave him with nothing. The words that God has spoken&mdash;the words that have been given, revealed, written down and preserved&mdash;those words are fully reliable." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The Hebrew word translated &ldquo;proves true&rdquo; (tsaraph) is the same word used for refining silver and gold in a crucible. It suggests a process of testing under fire that removes all impurities and leaves only what is genuine. When the word of God is described as &ldquo;refined&rdquo; or &ldquo;proven true,&rdquo; the image is of something that has been tested by reality and found to be exactly what it claims to be. This is not merely an abstract assertion about the theoretical infallibility of Scripture; it is a testimony born of experience, of having trusted God&rsquo;s word and found it to hold firm under the pressures of actual human life." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The warning against adding to God&rsquo;s words in verse 6 is directly connected to this affirmation of their completeness and reliability: &ldquo;Do not add to his words, lest he rebuke you and you be found a liar.&rdquo; To add to a word that is already fully true is to corrupt it. To supplement what is complete is to render it incomplete. Agur&rsquo;s warning anticipates the similar warning in the book of Revelation (22:18&ndash;19) and reflects a deep conviction that the revelation God has given is sufficient for the purposes for which it was given. This does not require a particular theory of biblical inspiration; it simply requires taking seriously the claim that God has actually spoken." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The practical implications of this theme are significant. In a world saturated with competing voices&mdash;social media, popular psychology, cultural consensus, political ideology&mdash;the person who has internalized Agur&rsquo;s lesson stands in a different relationship to all of these. They can engage with other sources of truth, insight, and wisdom while maintaining a clear hierarchy: the word that has been tested in the crucible of divine speech holds a different kind of authority than anything else. This is not intellectual rigidity but a form of epistemic wisdom&mdash;knowing which sources of knowledge are reliable enough to anchor one&rsquo;s life in." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "4px", height: "32px", background: GREEN, borderRadius: "2px" }}></div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: TEXT }}>Theme 3: The Prayer for Neither Poverty nor Riches</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "The prayer in verses 7&ndash;9 is one of the most theologically sophisticated prayers in the entire Old Testament: &ldquo;Two things I ask of you; deny them not to me before I die: Remove far from me falsehood and lying; give me neither poverty nor riches; feed me with the food that is needful for me, lest I be full and deny you and say, &lsquo;Who is the LORD?&rsquo; or lest I be poor and steal and profane the name of my God.&rdquo; What makes this prayer extraordinary is not just what Agur asks for but the theological reasoning he gives for his request." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "Agur asks for &ldquo;the food that is needful for me&rdquo;&mdash;a phrase that echoes the petition for &ldquo;daily bread&rdquo; in the Lord&rsquo;s Prayer (Matthew 6:11). But Agur goes further than Jesus&rsquo; disciples would be asked to go: he explicitly prays against both excess and deficiency. He does not merely want daily bread; he wants to be protected from the spiritual dangers that come with either extreme. This is a remarkably self-aware prayer, one that takes seriously the way that external circumstances can reshape spiritual commitments. Agur knows that he is not immune to the corrupting effects of wealth or the despair-inducing effects of poverty." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The two dangers Agur identifies are spiritually symmetrical but practically opposite. The danger of wealth is forgetfulness: &ldquo;lest I be full and deny you and say, &lsquo;Who is the LORD?&rsquo;&rdquo; Prosperity breeds self-sufficiency, and self-sufficiency breeds the quiet functional atheism of the person who has everything they need and no longer feels the need for God. The danger of poverty is desperation: &ldquo;lest I be poor and steal and profane the name of my God.&rdquo; Extreme need creates pressure to act against one&rsquo;s own values, and the person who steals out of desperation dishonors the God whose name they bear." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "What is most striking about this prayer is what it implies about the relationship between material circumstances and spiritual formation. Agur does not operate with a simple prosperity gospel (wealth equals blessing, poverty equals curse) or with a simple asceticism (poverty equals virtue, wealth equals corruption). He recognizes that both wealth and poverty create specific spiritual vulnerabilities, and he prays for the middle path not because it is comfortable or easy but because it is the material condition most conducive to the kind of ongoing dependence on God that he desires. This is wisdom about the spiritual ecology of material circumstances." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "4px", height: "32px", background: TEAL, borderRadius: "2px" }}></div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: TEXT }}>Theme 4: The Four Sets of Four Things</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "The numerical sayings that dominate the second half of Proverbs 30 represent a distinct and ancient form of wisdom pedagogy. The &ldquo;three things&hellip;four things&rdquo; structure (which appears both as &ldquo;three&hellip;four&rdquo; and as pure &ldquo;four things&rdquo;) creates a kind of intellectual suspense: the listener is led to expect a series and then to discover the final, climactic example that illuminates all the rest. This form of wisdom teaching is designed not to deliver information passively but to train the faculty of observation&mdash;to make the student of wisdom a better, more attentive watcher of the world." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The first numerical section (vv. 15&ndash;16) focuses on insatiability: &ldquo;Three things are never satisfied; four never say &lsquo;Enough&rsquo;: Sheol, the barren womb, the land never satisfied with water, and the fire that never says &lsquo;Enough.&rsquo;&rdquo; The observation is both natural and moral. The leech&rsquo;s two daughters &ldquo;Give&rdquo; and &ldquo;Give&rdquo; introduce the series with an almost comic image of insatiable demand, and then the four things that follow flesh out the anatomy of ungovernable appetite. Death always wants more dead; infertility is never satisfied until it becomes fertility; dry land cannot hold water; and fire consumes without ceasing. In each case, natural process becomes a mirror for understanding human greed, ambition, and addiction." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The second numerical section (vv. 18&ndash;19) focuses on what is mysterious and beyond comprehension: &ldquo;Three things are too wonderful for me; four I do not understand: the way of an eagle in the sky, the way of a serpent on a rock, the way of a ship on the high seas, and the way of a man with a virgin.&rdquo; What unites these four things is their tracelessness. The eagle leaves no footprint in the air; the serpent leaves no groove in the rock; the ship leaves no permanent wake on the sea; and the intimacy between a man and a woman leaves no external mark that can be measured or predicted. Agur is meditating on the mystery of movement, desire, and relationship&mdash;on the things that exceed human calculation." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The small but wise creatures of verses 24&ndash;28 represent perhaps the most loved section of the chapter: &ldquo;Four things on earth are small, but they are exceedingly wise: the ants are a people not strong, yet they provide their food in the summer; the rock badgers are a people not mighty, yet they make their homes in the cliffs; the locusts have no king, yet all of them march in rank; the lizard you can take in your hands, yet it is in kings&rsquo; palaces.&rdquo; Each creature illustrates a form of wisdom that operates without apparent power&mdash;and each one succeeds in doing what it was made to do. The ant does not wait for strength before preparing; the rock badger does not wait for safety before settling; the locust does not wait for leadership before organizing; the lizard does not wait for status before occupying the highest places." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "4px", height: "32px", background: ROSE, borderRadius: "2px" }}></div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: TEXT }}>Theme 5: The Warning Against Self-Exaltation</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "Running through the moral warnings of verses 10&ndash;14 is a sustained meditation on the various forms of self-exaltation and their consequences. The four types of persons described in verses 11&ndash;14 form a portrait of a generation&mdash;perhaps a specific generation Agur observed, perhaps a timeless portrait of the recurring human tendency toward pride&mdash;that has abandoned the virtues that make communal life possible: &ldquo;There are those who curse their fathers and do not bless their mothers. There are those who are clean in their own eyes but are not washed of their filth. There are those&mdash;how lofty are their eyes, how high their eyelids lift! There are those whose teeth are swords, whose fangs are knives, to devour the poor from off the earth, the needy from among mankind.&rdquo;" }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The common thread connecting all four types is a form of self-referential closure: the person who curses their father has rejected the authority that stands above them and nurtured them; the person who is clean in their own eyes has substituted self-assessment for genuine moral reckoning; the person with haughty eyes has exalted their own perspective over reality; the person whose teeth are swords has turned the power of speech into an instrument of predation. Each figure represents a different facet of the fundamental sin of pride&mdash;the replacement of God and neighbor as the center of moral gravity with the self." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The warning of verse 10&mdash;&ldquo;Do not slander a servant to his master, lest he curse you, and you be held guilty&rdquo;&mdash;is connected to this theme by its concern for speech that tears down those who are vulnerable. The servant, like the poor in verse 14, occupies a position of relative powerlessness within the social hierarchy. To attack someone in such a position with false words is a double offense: it abuses the power of speech and it targets those least able to defend themselves. Wisdom, by contrast, uses speech to defend and build up&mdash;especially those who cannot defend themselves." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The concluding verses of the chapter (vv. 29&ndash;33) offer a final reflection on the theme of self-exaltation by way of contrast. The four things stately in their tread&mdash;the lion, the strutting rooster, the he-goat, and the king whose army is with him&mdash;have a legitimate grandeur that does not need to be manufactured or asserted. Their stateliness is a natural expression of what they are. And the chapter closes with a direct warning against the person who manufactures their own importance: &ldquo;If you have been foolish, exalting yourself, or if you have been devising evil, put your hand on your mouth. For pressing milk produces curds, pressing the nose produces blood, and pressing anger produces strife&rdquo; (30:32&ndash;33). The person who applies pressure where pressure does not belong will produce only violence and division." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "28px" }}>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                <span style={{ background: PURPLE + "33", color: PURPLE, fontSize: "0.8rem", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap" }}>vv. 1&ndash;4</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: TEXT }}>The Confession of Ignorance</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "The chapter opens with an identification that raises as many questions as it answers: &ldquo;The words of Agur son of Jakeh. The oracle.&rdquo; Then, without preamble, comes the confession that sets the tone for everything that follows. &ldquo;Surely I am too stupid to be a man. I have not the understanding of a man. I have not learned wisdom, nor have I knowledge of the Holy One.&rdquo; The word translated &ldquo;stupid&rdquo; (ba&rsquo;ar) can also mean &ldquo;brutish&rdquo; or &ldquo;like a beast&rdquo;&mdash;a deeply self-deprecating comparison in a culture that prized human wisdom as the defining characteristic separating people from animals. Agur is not making a modest understatement; he is making a radical claim about the limits of unaided human reason in the presence of divine reality." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "16px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The four rhetorical questions of verse 4 are among the most theologically rich verses in the chapter: &ldquo;Who has ascended to heaven and come down? Who has gathered the wind in his fists? Who has wrapped up the waters in a garment? Who has established all the ends of the earth? What is his name, and what is his son&rsquo;s name? Surely you know!&rdquo; Some Christian readers have seen in &ldquo;what is his son&rsquo;s name?&rdquo; a veiled allusion to the second person of the Trinity&mdash;and while the New Testament later makes such connections explicit (cf. John 3:13; Rom. 10:6), the immediate rhetorical force is simply the challenge of the unknowability of God. No human being can fully name or comprehend the one who created and controls all things. The ironic &ldquo;Surely you know!&rdquo; is Agur&rsquo;s way of pressing the listener toward the same admission of ignorance that he himself has made." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                <span style={{ background: GOLD + "33", color: GOLD, fontSize: "0.8rem", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap" }}>vv. 5&ndash;6</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: TEXT }}>The Reliability of God&rsquo;s Word</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "Verse 5 is one of the great affirmations of scriptural reliability in the Old Testament: &ldquo;Every word of God proves true; he is a shield to those who take refuge in him.&rdquo; The movement from the confession of human ignorance (vv. 2&ndash;4) to this affirmation of divine reliability is the hermeneutical heart of the chapter. Agur cannot trust his own mind to know God fully, but he can trust the words that God has spoken. The shift is from human epistemology (what I can figure out) to divine revelation (what God has said)." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "16px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The image of God as a &ldquo;shield&rdquo; to those who take refuge in him adds a relational and protective dimension to the epistemological claim. The word of God is not merely reliable as a source of information; it is protective as a shelter. To abide in God&rsquo;s word is to be covered by divine protection&mdash;to have a source of orientation and security that does not depend on the fluctuating reliability of one&rsquo;s own perceptions and judgment. Verse 6&rsquo;s warning against adding to God&rsquo;s words flows from this: to add to something complete and perfectly reliable is to introduce imperfection into perfection." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                <span style={{ background: GREEN + "33", color: GREEN, fontSize: "0.8rem", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap" }}>vv. 7&ndash;9</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: TEXT }}>The Prayer for the Middle Way</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "The prayer of verses 7&ndash;9 is structured as two petitions, each given a theological rationale. The first petition&mdash;&ldquo;Remove far from me falsehood and lying&rdquo;&mdash;addresses the integrity of speech. Agur, who has just affirmed that every word of God proves true, prays that he himself may be kept from falsehood. There is a symmetry here: the person who relies on God&rsquo;s true words should themselves be a person of true words. The second petition&mdash;&ldquo;Give me neither poverty nor riches; feed me with the food that is needful for me&rdquo;&mdash;addresses the material circumstances of daily life." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "16px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The phrase &ldquo;the food that is needful for me&rdquo; is a translation of the Hebrew &ldquo;lechem chuqqiy,&rdquo; which might be rendered more literally as &ldquo;my allotted bread&rdquo; or &ldquo;the bread of my portion.&rdquo; There is a sense of divinely appointed sufficiency here: not more than what God has assigned for me, and not less. Agur is not asking for what he might want or what he thinks he deserves; he is asking for what God has ordained as appropriate for him. This is a prayer that relinquishes the determination of &ldquo;enough&rdquo; to God rather than asserting it for oneself." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                <span style={{ background: ROSE + "33", color: ROSE, fontSize: "0.8rem", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap" }}>v. 10</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: TEXT }}>The Warning Against Slander</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "Verse 10 is a standalone saying that bridges the personal confession of the opening verses and the social observations that follow: &ldquo;Do not slander a servant to his master, lest he curse you, and you be held guilty.&rdquo; The warning is practical and relational. A servant in the ancient world occupied a position of particular vulnerability: dependent on the goodwill of the master and relatively powerless to defend themselves against false accusations. To exploit that vulnerability with slanderous speech is to abuse the power differential in one&rsquo;s own favor&mdash;and Agur warns that this abuse will rebound on the slanderer." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "16px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The verse stands as a reminder that wisdom is not merely an intellectual achievement or a personal spiritual discipline; it is fundamentally social and ethical. The person who has genuinely internalized Agur&rsquo;s opening confession of ignorance and his prayer for honest speech will also be a person who refuses to harm the vulnerable with their words. There is a direct line from the epistemic humility of verses 2&ndash;4 to the ethical restraint of verse 10." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                <span style={{ background: ROSE + "33", color: ROSE, fontSize: "0.8rem", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap" }}>vv. 11&ndash;14</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: TEXT }}>The Four Types of the Proud Generation</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "Verses 11&ndash;14 describe four types of people who embody various forms of social and spiritual corruption: those who curse their parents, those who are pure in their own eyes, those with haughty eyes, and those who devour the poor. The series is structured as &ldquo;There is a generation that&hellip;&rdquo; (or simply &ldquo;There are those who&hellip;&rdquo;), a form that creates a sense of observed reality&mdash;these are not theoretical possibilities but actual people that the wise observer has noticed in the world." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "16px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The first type&mdash;those who curse their fathers and do not bless their mothers&mdash;violates the fifth commandment and represents the fundamental inversion of the family order that wisdom presupposes. The second type&mdash;those who are clean in their own eyes but are not washed of their filth&mdash;represents the self-deception of moral complacency. The third type&mdash;those whose eyes are haughty and whose eyelids are lifted high&mdash;represents the pride that refuses to see clearly because it is too busy looking down. The fourth type&mdash;those whose teeth are swords and whose fangs are knives to devour the poor&mdash;represents the predatory use of power against the vulnerable. Together they paint a portrait of a society in moral collapse." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                <span style={{ background: TEAL + "33", color: TEAL, fontSize: "0.8rem", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap" }}>vv. 15&ndash;16</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: TEXT }}>The Leech and the Never-Satisfied</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "The numerical sayings begin with one of the most evocative images in the chapter: &ldquo;The leech has two daughters: Give and Give.&rdquo; The image is viscerally effective&mdash;the leech, which attaches itself to its host and draws blood until forcibly removed, is the perfect embodiment of insatiable demand. Its &ldquo;daughters&rdquo; are named simply &ldquo;Give&rdquo; and &ldquo;Give&rdquo;&mdash;nothing else, no other word or desire, just the endless, undifferentiated demand for more." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "16px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The three (or four) things that are never satisfied&mdash;Sheol, the barren womb, the land that never has enough water, and fire&mdash;expand this observation into the natural world. Each one takes in without ever being able to say it has enough. Death swallows every human life and still opens its mouth for more. The yearning of the barren womb is one of the most poignant and recurring themes in the Hebrew Bible&mdash;the desperate desire for children that can never be quieted until it is fulfilled. The parched earth absorbs water until none is left. Fire consumes everything within its reach and then reaches further. These are not simply observations about natural processes; they are invitations to recognize the same pattern in human desire, ambition, and greed." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                <span style={{ background: TEAL + "33", color: TEAL, fontSize: "0.8rem", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap" }}>vv. 17&ndash;20</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: TEXT }}>The Eye That Mocks and the Mysterious Four</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "Verse 17 interrupts the numerical series with a stark moral warning: &ldquo;The eye that mocks a father and scorns to obey a mother will be picked out by the ravens of the valley and eaten by the vultures.&rdquo; The violence of the image is deliberate and shocking. Ravens picking out the eyes of an unburied corpse was one of the most degrading fates in the ancient world&mdash;to be denied proper burial was to be denied honor in death, and to have one&rsquo;s eyes specifically targeted is a terrible irony for the eye that mocked. The warning is severe because the offense is severe: contempt for parents strikes at the foundations of social order and wisdom transmission." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "16px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The four wonderful things of verses 18&ndash;19 then offer a contrasting meditation on mystery and wonder: the way of an eagle in the sky, the way of a serpent on a rock, the way of a ship on the high seas, and the way of a man with a virgin. What unites these four things is that they all pass through their medium without leaving a permanent, traceable mark&mdash;and yet each one accomplishes its purpose fully. The eagle soars and hunts; the serpent moves and strikes; the ship sails and arrives; the man and woman find each other in the irreducible intimacy of human encounter. Agur does not moralize about these things; he simply stands before them in wonder." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                <span style={{ background: BLUE + "33", color: BLUE, fontSize: "0.8rem", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap" }}>vv. 21&ndash;23</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: TEXT }}>Three Things That Make the Earth Tremble</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "The three (or four) things that make the earth tremble&mdash;&ldquo;Under three things the earth trembles; under four it cannot bear up&rdquo;&mdash;are notable for being social rather than natural upheavals. The slave who becomes king, the fool who is filled with food, the unloved woman who gets a husband, and the maidservant who displaces her mistress: these are all situations in which the established social order has been disrupted in ways that the system cannot easily absorb. The observation is not an endorsement of rigid hierarchy but a realistic assessment of the social chaos that results when rapid reversals of fortune are not accompanied by the wisdom and character that would make those reversals stable and just." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "16px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "There is a sharp irony in the slave-who-becomes-king and maidservant-who-displaces-her-mistress images: these reversals are precisely what would be described as blessings in other parts of the wisdom tradition (cf. the Magnificat&rsquo;s language about putting down the mighty and raising the humble). Agur&rsquo;s point is not that such reversals are wrong but that they are destabilizing. The person who receives an unearned elevation and lacks the character to handle it well is dangerous both to themselves and to those around them." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                <span style={{ background: GREEN + "33", color: GREEN, fontSize: "0.8rem", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap" }}>vv. 24&ndash;28</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: TEXT }}>Four Things Small But Exceedingly Wise</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "The four small but wise creatures of verses 24&ndash;28 are among the most beloved passages in all of Proverbs, and perhaps in all of Scripture. &ldquo;Four things on earth are small, but they are exceedingly wise: the ants are a people not strong, yet they provide their food in the summer; the rock badgers are a people not mighty, yet they make their homes in the cliffs; the locusts have no king, yet all of them march in rank; the lizard you can take in your hands, yet it is in kings&rsquo; palaces.&rdquo; The deliberate contrast between small/weak and wise/effective is the theological engine of the passage." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "16px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The ant (also commended in Proverbs 6:6&ndash;8) exemplifies proactive provision: it stores food in summer, when food is plentiful, against the scarcity of winter. The rock badger exemplifies wise placement: knowing it is not strong enough to fight predators, it makes its home in the clefts of the rocks where its natural defenses are supplied by the terrain rather than its own strength. The locust exemplifies organic self-organization: without a commander, without a hierarchy, without a king, locusts form armies and march in rank&mdash;suggesting a form of social intelligence that operates below the level of conscious planning. The lizard exemplifies bold ambition: what it lacks in size and power it makes up for with sheer audacity, finding its way into the grandest of human spaces." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                <span style={{ background: PURPLE + "33", color: PURPLE, fontSize: "0.8rem", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap" }}>vv. 29&ndash;33</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: TEXT }}>Three Things Stately in Their Tread</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "The chapter closes with a final numerical saying about stateliness and self-possession, followed by a sharp warning against manufacturing pride. The four things stately in their tread&mdash;the lion, the strutting rooster, the he-goat, and the king whose army is with him&mdash;all possess a natural authority that is an authentic expression of what they are. The lion does not need to announce its dominance; its gait communicates it. The rooster does not need to explain itself; its strut is the natural language of its confidence. These are images of legitimate, grounded authority&mdash;the kind that does not need to be asserted because it is simply manifest." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "16px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The concluding warning (vv. 32&ndash;33) brings the chapter full circle: &ldquo;If you have been foolish, exalting yourself, or if you have been devising evil, put your hand on your mouth. For pressing milk produces curds, pressing the nose produces blood, and pressing anger produces strife.&rdquo; The person who has exalted themselves has been &ldquo;foolish,&rdquo; and wisdom&rsquo;s first response to such foolishness is silence&mdash;&ldquo;put your hand on your mouth.&rdquo; The three analogies that follow illustrate the inexorable consequences of forcing what should not be forced: you cannot apply pressure without getting a reaction, and the reaction is never pleasant. The chapter that began with a confession of humble ignorance ends with a warning against the pride that refuses to acknowledge its own limitations." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "4px", height: "32px", background: PURPLE, borderRadius: "2px" }}></div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: TEXT }}>The Posture of Humble Unknowing Before God</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "Agur&rsquo;s opening confession invites us into a practice that is deeply countercultural in an age of confident assertions and instant opinions: the practice of intellectual and spiritual humility before the mystery of God. In a social media environment that rewards certainty, decisiveness, and the bold take, Agur&rsquo;s voice is a necessary corrective. He does not lack conviction; he affirms with great force that every word of God is true. But he holds those convictions within an awareness of how little he actually knows&mdash;and that awareness makes him a better, more honest, more trustworthy thinker." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "Practically, the posture of humble unknowing means several things. It means being willing to say &ldquo;I don&rsquo;t know&rdquo; when the honest answer is that one does not know&mdash;especially on questions where theologians have disagreed for centuries. It means being genuinely curious about the perspectives of others rather than merely looking for ammunition to confirm one&rsquo;s existing views. It means distinguishing between the core convictions that Scripture clearly teaches and the secondary and tertiary questions on which faithful Christians disagree. And it means approaching the study of Scripture itself with a posture of readiness to be surprised&mdash;to discover that God&rsquo;s word says something more, or different, or more challenging than one had previously assumed." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The rhetorical questions of verse 4&mdash;&ldquo;Who has ascended to heaven and come down?&rdquo;&mdash;are not merely historical curiosities. They function as a regular spiritual practice: the practice of standing before the vastness of God and deliberately remembering how small one is. The person who regularly asks themselves &ldquo;What don&rsquo;t I know about this? What might I be missing? Where might God&rsquo;s wisdom exceed my own?&rdquo; is practicing the kind of humility that opens the door to genuine learning. Pride, by contrast, is the closed door: the person who is certain they already have the answer is not really listening for anything new." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "4px", height: "32px", background: GREEN, borderRadius: "2px" }}></div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: TEXT }}>Contentment with Daily Provision</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "The prayer for &ldquo;the food that is needful for me&rdquo; (v. 8) is a call to one of the most difficult and most liberating of all spiritual practices: contentment. Paul says in Philippians 4:11 that he has &ldquo;learned, in whatever situation I am, to be content&rdquo;&mdash;suggesting that contentment is not a native capacity but an acquired skill, something that must be practiced and cultivated over time. Agur&rsquo;s prayer is the asking side of that same reality: asking God to give one the circumstances that make contentment easier to practice, while acknowledging that contentment is ultimately a matter of character and relationship with God rather than circumstances alone." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "In a consumer culture built on the perpetual stimulation of desire&mdash;designed to make us feel that whatever we have is never quite enough&mdash;Agur&rsquo;s prayer is quietly radical. It asks to be removed from the game entirely: not to win at the competition for more, but to be given enough to live and serve and worship faithfully without the distortions that come from too much or too little. This is not a call to passivity or to the refusal of legitimate ambition; it is a call to keep the question of &ldquo;enough&rdquo; firmly in God&rsquo;s hands rather than one&rsquo;s own insatiable calculations." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The theological wisdom of Agur&rsquo;s prayer lies in its honest acknowledgment of the person he knows himself to be. He does not pray for contentment in the abstract; he prays for the circumstances that will help him remain contented, because he knows that both wealth and poverty can undermine his faithfulness. This is self-knowledge in service of spiritual formation. The person who prays Agur&rsquo;s prayer is not being defeatist; they are being realistic about the way that external conditions interact with internal character. They are inviting God to be the gardener who tends the soil of their soul by controlling the conditions in which it grows." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "4px", height: "32px", background: TEAL, borderRadius: "2px" }}></div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: TEXT }}>The Wisdom in Small Things</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "The four small but wise creatures of Proverbs 30:24&ndash;28 offer one of Scripture&rsquo;s most direct challenges to the equation of size with significance and power with wisdom. The ant, the rock badger, the locust, and the lizard are all small&mdash;and all exceedingly wise. Their wisdom is not theoretical or academic; it is practical, embedded in their behavior, expressed in what they do rather than what they say or appear to be. Each one has found a way to flourish despite its apparent disadvantages." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The ant&rsquo;s wisdom is the wisdom of preparation: it stores in abundance while abundance is available, without waiting for the crisis to begin planning for it. The rock badger&rsquo;s wisdom is the wisdom of placement: it does not try to overpower its predators but instead positions itself where it is naturally protected. The locust&rsquo;s wisdom is the wisdom of collective action: without a king, without a hierarchy, without anyone giving orders, it marches in rank with its kind and accomplishes what no individual locust could achieve alone. The lizard&rsquo;s wisdom is the wisdom of audacious presence: small, seemingly insignificant, easily captured&mdash;and yet found in the grandest spaces human beings inhabit." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The application for contemporary readers is both personal and communal. Personally, the invitation is to stop waiting until you are big enough, strong enough, resourced enough, or recognized enough to do the thing you know you should do. The ant does not wait for the winter to be gone before it prepares; the rock badger does not wait until it is stronger before it settles; the lizard does not wait for an invitation before it enters the palace. Communally, the invitation is to take seriously the wisdom that lives in small communities, small movements, small acts of faithfulness&mdash;to resist the assumption that impact requires scale, and that the organizations and individuals most worth paying attention to are the ones with the largest platforms." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "4px", height: "32px", background: GOLD, borderRadius: "2px" }}></div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: TEXT }}>Not Adding to God&rsquo;s Word</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "The warning of verse 6&mdash;&ldquo;Do not add to his words, lest he rebuke you and you be found a liar&rdquo;&mdash;has immediate and practical application to several recurring temptations in Christian life. The first temptation is the elevation of tradition to the level of Scripture: treating the inherited practices and formulations of one&rsquo;s particular Christian community as if they have the same authority as the biblical text itself. The second temptation is the importation of cultural wisdom into theological claims: treating the assumptions of one&rsquo;s own era, social location, or educational background as if they carry divine authority." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The third temptation is subtler but perhaps more dangerous: the claim to special revelation that supplements or supersedes the biblical text. Every generation produces teachers, prophets, and leaders who claim access to insights beyond what Scripture teaches. Agur&rsquo;s warning is a standing caution against this tendency. The person who adds to God&rsquo;s words&mdash;who claims to know more than what God has revealed, who fills the silences of Scripture with their own confident assertions&mdash;will be &ldquo;found a liar.&rdquo; This is a strong word, but it reflects the seriousness of the offense: to add to perfect truth is to corrupt it, and to present the corrupted form as if it were the original is to lie about God." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The positive implication of the warning is equally important: the word that God has given is sufficient. It does not need to be supplemented by our clever insights or completed by our cultural assumptions. The task of the student of Scripture is not to add to it but to receive it, to understand it in its original context, to follow its logic into new situations, and to obey it faithfully. This is itself an act of humility&mdash;the same humility that Agur modeled in his opening confession. The person who truly trusts that every word of God proves true will not feel the need to add to those words; they will be too busy trying to understand and live by what has already been given." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
            </div>

            <div style={{ background: "linear-gradient(135deg, " + PURPLE + "22 0%, " + TEAL + "22 100%)", border: `1px solid ${PURPLE}44`, borderRadius: "12px", padding: "36px" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 16px", color: TEXT }}>Reflection Questions for Personal Study</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "14px" }}>
                {[
                  "Where in your life do you most feel the pressure to project certainty you do not actually have? What would it look like to practice Agur&rsquo;s kind of honest confession in that area?",
                  "Which of the two spiritual dangers Agur identifies&mdash;the forgetfulness of wealth or the desperation of poverty&mdash;do you feel more vulnerable to in your current season of life? How does that shape your prayers?",
                  "Which of the four small but wise creatures speaks most directly to your situation right now? What does that creature&rsquo;s wisdom suggest about the next faithful step available to you?",
                  "Where are you most tempted to add to God&rsquo;s word&mdash;to treat your own assumptions, traditions, or preferences as if they carry biblical authority? What would it mean to practice greater faithfulness to Scripture in that area?",
                  "What in the created world around you has recently made you pause in wonder? How might Agur&rsquo;s practice of learning from nature inform the way you move through your ordinary days?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ minWidth: "28px", height: "28px", background: PURPLE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.8rem", fontWeight: 700, marginTop: "2px" }}>{i + 1}</div>
                    <p dangerouslySetInnerHTML={{ __html: q }} style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.97rem" }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "4px", height: "32px", background: ROSE, borderRadius: "2px" }}></div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0, color: TEXT }}>The Chapter as a Whole: Humble Wonder</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: "When Proverbs 30 is read as a unified whole rather than a collection of loosely related sayings, a coherent spiritual vision emerges. The chapter is a map of what it looks like to navigate human existence with both honesty and wonder. Agur begins by telling the truth about what he does not know; then he anchors himself in what God has said; then he prays for the circumstances that will help him remain faithful; then he observes the world with eyes sharpened by humility and wonder. The movement is from confession to trust to prayer to observation&mdash;and the whole is held together by the posture of a person who has stopped trying to be more than human and started being fully human in the presence of the God who is fully God." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s sustained attention to the natural world as a classroom of wisdom is itself an expression of Agur&rsquo;s theological vision. If every word of God proves true, and if God is the creator of all things, then the created world is itself a form of divine speech&mdash;not equal to Scripture, but genuinely revelatory of the character and wisdom of its maker. The person who learns from the ant and the rock badger is not merely acquiring practical tips; they are attending to one of the ways God has chosen to teach. This is why the practice of attention&mdash;really looking, really listening, really attending to what is in front of us&mdash;is itself a spiritual discipline in the tradition of Proverbs 30." }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: "18px", fontSize: "1rem" }} />
              <p dangerouslySetInnerHTML={{ __html: "Proverbs 30 ends where it begins: with the recognition that pride&mdash;the pressing of anger, the exalting of self&mdash;produces only strife and blood. The way of wisdom runs in the opposite direction: toward the honest admission of what we do not know, the grateful reception of what God has given, the attentive observation of the world he has made, and the courageous practice of living faithfully in the space between what is too much and what is too little. Agur&rsquo;s is not a spectacular wisdom; it is a grounded one. And perhaps that is exactly what most of us need." }} style={{ color: MUTED, lineHeight: 1.85, fontSize: "1rem" }} />
            </div>

          </div>
        )}

      </div>

      {/* Video Section */}
      <div style={{ background: CARD, borderTop: `1px solid ${BORDER}`, padding: "56px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ display: "inline-block", background: PURPLE + "22", border: `1px solid ${PURPLE}55`, borderRadius: "999px", padding: "6px 18px", marginBottom: "16px" }}>
              <span style={{ color: PURPLE, fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Video Resources</span>
            </div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 12px", color: TEXT }}>Study Proverbs 30 Further</h2>
            <p style={{ color: MUTED, fontSize: "1rem", maxWidth: "560px", margin: "0 auto" }}>
              Deepen your understanding of Agur&rsquo;s words with these video teachings covering humility, wonder, and the wisdom of small things.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "28px" }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: "12px", overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "16px 20px" }}>
                  <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.97rem", margin: 0 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Call to Action */}
      <div style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #12121F 50%, #0a1a0a 100%)", borderTop: `1px solid ${BORDER}`, padding: "72px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: GREEN + "22", border: `1px solid ${GREEN}55`, borderRadius: "999px", padding: "6px 18px", marginBottom: "24px" }}>
            <span style={{ color: GREEN, fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Continue Your Study</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, margin: "0 0 20px", color: TEXT }}>
            Stand Before the Word That Proves True
          </h2>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.75, marginBottom: "36px" }}>
            Agur&rsquo;s great gift to us is not a collection of clever observations. It is the posture of a life: humble before God, anchored in his word, content with daily provision, and alive with wonder at everything he has made. May the study of Proverbs 30 form in you the same generous, grounded, wide-eyed faithfulness.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/proverbs-31-guide" style={{ display: "inline-block", background: PURPLE, color: "#fff", textDecoration: "none", borderRadius: "8px", padding: "14px 28px", fontWeight: 700, fontSize: "0.97rem" }}>
              Next: Proverbs 31 &rarr;
            </a>
            <a href="/proverbs-29-guide" style={{ display: "inline-block", background: "transparent", color: TEXT, textDecoration: "none", border: `1px solid ${BORDER}`, borderRadius: "8px", padding: "14px 28px", fontWeight: 600, fontSize: "0.97rem" }}>
              &larr; Proverbs 29
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
