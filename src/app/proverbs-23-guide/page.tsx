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
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "versebyverse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "Lm5c8jK2nPo", title: "Proverbs 23 - Warnings Against Wealth and Wine" },
  { videoId: "T9xQr4FvW6Y", title: "Guarding the Heart - Proverbs 23 Study" },
  { videoId: "Bk7pHsN3cEq", title: "Proverbs 23 and the Fear of the Lord" },
  { videoId: "Jd2mVrL8wZs", title: "Who Has Woe? Proverbs 23 on Drunkenness and Wisdom" },
];

export default function Proverbs23GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
            Wisdom Literature &middot; OT
          </div>
          <h1 style={{ color: TEXT, fontSize: 36, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.15 }}>
            Proverbs 23: The Seductions of Wealth, Wine, and the Wandering Heart
          </h1>
          <p
            style={{ color: MUTED, fontSize: 16, lineHeight: 1.75, margin: "0 0 8px", maxWidth: 680 }}
            dangerouslySetInnerHTML={{ __html: "Proverbs 23 moves through some of the most searching wisdom in the entire book&mdash;warnings about the seductive power of wealth, the dangers of drunkenness, the sobriety required for a life of wisdom, and the call to guard the heart above all else. The chapter belongs to the Thirty Sayings of the Wise and carries a pastoral urgency that feels as contemporary as it is ancient." }}
          />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
            {[["Chapter", "Proverbs 23"], ["Collection", "Thirty Sayings of the Wise"], ["Verses", "35"], ["Key Command", "Guard Your Heart"]].map(([k, v]) => (
              <div key={k} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "10px 16px", minWidth: 120 }}>
                <div style={{ color: MUTED, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>{k}</div>
                <div style={{ color: TEXT, fontSize: 13, fontWeight: 700 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {TABS.map(t => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                border: `1px solid ${activeTab === t.id ? GOLD : BORDER}`,
                background: activeTab === t.id ? `${GOLD}20` : "transparent",
                color: activeTab === t.id ? GOLD : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Context: The Thirty Sayings of the Wise</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 22:17 introduces a new section: &ldquo;Incline your ear, and hear the words of the wise, and apply your heart to my knowledge.&rdquo; What follows (22:17-24:22) is often called the Thirty Sayings of the Wise, a collection with structural parallels to the Egyptian wisdom text &ldquo;Instruction of Amenemope,&rdquo; which also contains thirty chapters. This parallel does not diminish the biblical text; it shows that biblical wisdom is part of a broader ancient Near Eastern conversation about how to live well, a conversation that Israel enters with the declaration that the fear of the LORD is its foundation." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 23 sits at the heart of this section, cycling rapidly through warning after warning. The pace is notable: unlike the extended poems of Proverbs 1-9 or the self-contained couplets of Proverbs 10-22, chapter 23 contains sayings that develop across multiple verses, giving each topic more room to breathe. The effect is cumulative: by the end of the chapter, the reader has been confronted with the seductions of the table, the treachery of wealth, the danger of a stingy host, the perils of foolish friendship, the importance of parental wisdom, and the devastation of drunkenness." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s emotional register shifts as it progresses. Early sections are cool and practical (dining etiquette, wealth management). The middle sections grow more passionate (the father&rsquo;s appeal to the son, the joy of a wise child). The closing section (vv. 29-35) is almost poetic in its extended depiction of the drunkard&rsquo;s ruin&mdash;a sustained piece of descriptive wisdom literature that rivals anything in the book for rhetorical power." }}
              />
            </div>

            {/* At a Glance */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 22 }}>
              {[
                { ref: "vv. 1-8", title: "Table Dangers", color: ROSE, desc: "Beware the ruler&rsquo;s delicacies; do not toil for wealth; do not eat of a stingy man. Each scenario involves a table where something other than nourishment is on offer." },
                { ref: "v. 9", title: "The Fool&rsquo;s Ear", color: PURPLE, desc: "A single verse: do not speak to fools. They will despise the good sense of your words. Some conversations are not worth having." },
                { ref: "vv. 10-11", title: "Ancient Landmarks", color: TEAL, desc: "Do not move ancient boundary stones. The poor have a Redeemer who is strong and who will take up their cause." },
                { ref: "vv. 12-21", title: "Parental Wisdom", color: GREEN, desc: "Apply your heart to instruction. Discipline your child. Do not envy sinners. Fear the LORD continually. Shun drunkards and gluttons." },
                { ref: "vv. 22-25", title: "The Parent&rsquo;s Appeal", color: BLUE, desc: "Listen to your father who gave you life. Buy truth and do not sell it. A father rejoices in a wise child." },
                { ref: "vv. 26-35", title: "Heart and Wine", color: GOLD, desc: "Give me your heart. A prostitute is a deep pit. And then the devastating extended portrait: who has woe? those who linger over wine." },
              ].map(item => (
                <div key={item.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 18 }}>
                  <div style={{ display: "inline-block", background: `${item.color}20`, border: `1px solid ${item.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 10, color: item.color, fontWeight: 700, marginBottom: 10 }}>{item.ref}</div>
                  <div style={{ color: TEXT, fontWeight: 800, fontSize: 14, marginBottom: 8 }}>{item.title}</div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              ))}
            </div>

            {/* Key Verse */}
            <div style={{ background: `${GOLD}12`, border: `1px solid ${GOLD}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ color: GOLD, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>Key Verse &mdash; Proverbs 23:26</div>
              <blockquote
                style={{ color: TEXT, fontSize: 18, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 12px", padding: "0 0 0 18px", borderLeft: `4px solid ${GOLD}` }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;My son, give me your heart, and let your eyes observe my ways.&rdquo;" }}
              />
              <p
                style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "This verse is the emotional center of the chapter. All the warnings about wealth, wine, and wrong company are the negative side of a single positive desire: God wants the heart. The father&rsquo;s appeal is not merely for behavior modification but for the innermost orientation of the person. Wisdom is ultimately a matter of who has your heart." }}
              />
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: BLUE, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Key Themes in Proverbs 23</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 23 does not roam randomly; it circles a center. At the heart of the chapter is the conviction that the good life requires governing the inner person&mdash;the eyes, the appetite, the desires, the heart. Each warning in the chapter is a specific application of this general principle to a concrete area of life." }}
              />
            </div>

            {[
              {
                color: ROSE,
                title: "The Seductive Power of Riches",
                icon: "01",
                body: "Three distinct warnings about wealth appear in the first eight verses. First, the ruler&rsquo;s table: if you sit with a ruler, put a knife to your throat (v. 2)&mdash;a hyperbolic command to discipline the appetite even in settings of abundance and social opportunity. Second, do not toil to acquire wealth (v. 4): wealth sprouts wings and flies away (v. 5). Third, do not eat of a stingy man: his soul is not with you even as he offers food (v. 7). In each case, the danger is not simply poverty or excess; it is the way that appetite&mdash;for wealth, for status, for acceptance&mdash;can override wisdom and lead the person into compromised situations. Proverbs 23 anticipates the NT affirmation that the love of money is a root of all kinds of evil (1 Timothy 6:10).",
              },
              {
                color: GOLD,
                title: "The Sobriety Required for Wisdom",
                icon: "02",
                body: "The chapter&rsquo;s most extended and rhetorically elaborate section (vv. 29-35) is devoted to the ruin of drunkenness. The opening questions are devastating: &ldquo;Who has woe? Who has sorrow? Who has strife? Who has complaining? Who has wounds without cause? Who has redness of eyes?&rdquo; The answer: those who tarry long over wine, those who go to try mixed wine. The extended description that follows&mdash;the wine biting like a serpent and stinging like an adder, the strange women and the heart uttering perverse things, the drunkard obliviously rolling in the sea&mdash;is a masterpiece of descriptive moral reasoning. The point is not mere abstinence but something deeper: the wise life requires a sober, governed mind, and anything that clouds the governing center of the person is an enemy of wisdom.",
              },
              {
                color: PURPLE,
                title: "Honoring Parents as the Source of Wisdom",
                icon: "03",
                body: "The middle section of Proverbs 23 is dominated by the father&rsquo;s passionate appeal to his son. &ldquo;Listen to your father who gave you life, and do not despise your mother when she is old&rdquo; (v. 22). &ldquo;Buy truth, and do not sell it; buy wisdom, instruction, and understanding&rdquo; (v. 23). &ldquo;My son, give me your heart&rdquo; (v. 26). This is not an appeal for compliance or control; it is an appeal for a particular kind of listening&mdash;the listening of a person who understands that wisdom is transmitted through relationship, not merely through information. The father rejoices in the wise child (v. 24); the child&rsquo;s wisdom is described as a cause for the father&rsquo;s heart to sing. Wisdom flows through the generations when it is both given and received in relationship.",
              },
              {
                color: TEAL,
                title: "The Danger of Envy",
                icon: "04",
                body: "&ldquo;Let not your heart envy sinners, but continue in the fear of the LORD all the day&rdquo; (v. 17). This verse is the theological anchor for the warnings that surround it. Envy of sinners is not merely an emotional sin; it is a theological one. It says: the life of the person who ignores God appears more prosperous, more enjoyable, more successful than the life of the person who fears God. Proverbs counters this with future orientation: &ldquo;Surely there is a future, and your hope will not be cut off&rdquo; (v. 18). The fear of the LORD is oriented not just to the present moment but to a horizon beyond it. Envy calculates the present; wisdom calculates the future.",
              },
              {
                color: BLUE,
                title: "Guarding the Heart",
                icon: "05",
                body: "&ldquo;My son, give me your heart, and let your eyes observe my ways&rdquo; (v. 26). This verse in Proverbs 23 is the specific instantiation of the broader Proverbs 4:23 command: &ldquo;Keep your heart with all vigilance, for from it flow the springs of life.&rdquo; The heart in biblical wisdom literature is not the seat of emotion only; it is the commanding center of the person&mdash;the place where decisions are made, appetites are formed, and allegiances are held. Every specific warning in Proverbs 23 is about something that can capture the heart: a ruler&rsquo;s table, the seduction of wealth, a stingy host&rsquo;s false hospitality, the fool&rsquo;s conversation, alcohol, sexual immorality. All of these are heart-capture strategies. The call of the chapter is to give the heart to wisdom&mdash;to God himself.",
              },
              {
                color: GREEN,
                title: "The Advocate of the Poor",
                icon: "06",
                body: "Verses 10-11 contain a warning that is easily underestimated: &ldquo;Do not move an ancient landmark or enter the fields of the fatherless, for their Redeemer is strong; he will plead their cause against you.&rdquo; The ancient landmark (boundary stone) was the legal definition of land ownership in the ancient world. Moving it was an act of theft against neighbors who had no court access. But Proverbs 23 adds a theological dimension: the poor and the fatherless have a Redeemer&mdash;a go&rsquo;el, a kinsman-redeemer&mdash;who is strong and who will take up their legal cause. This is a profound claim: God himself acts as the attorney for those who have no access to legal protection. Exploitation of the vulnerable is not merely an ethical problem; it is a theological confrontation with their divine Advocate.",
              },
            ].map(theme => (
              <div key={theme.icon} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "22px 24px", marginBottom: 14, display: "flex", gap: 18 }}>
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "50%", background: `${theme.color}20`, border: `1px solid ${theme.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: theme.color, fontWeight: 900, fontSize: 13 }}>{theme.icon}</div>
                <div>
                  <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 16, margin: "0 0 10px" }}>{theme.title}</h3>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.78, margin: 0 }} dangerouslySetInnerHTML={{ __html: theme.body }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "versebyverse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Verse by Verse: Proverbs 23</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 23 is dense with distinct sayings, each one a compressed world of wisdom. The following sections work through the chapter&rsquo;s major units, unpacking the Hebrew imagination behind the instruction and the practical wisdom it addresses." }}
              />
            </div>

            {/* vv. 1-3 */}
            <div style={{ background: CARD, border: `1px solid ${ROSE}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${ROSE}20`, border: `1px solid ${ROSE}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: ROSE, fontWeight: 700 }}>vv. 1-3</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>Dining with a Ruler &mdash; Beware His Delicacies</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;When you sit down to eat with a ruler, observe carefully what is before you, and put a knife to your throat if you are given to appetite. Do not desire his delicacies, for they are deceptive food.&rdquo;" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "The opening saying is arresting: &ldquo;put a knife to your throat if you are given to appetite.&rdquo; This is one of the most vivid hyperboles in Proverbs. It is not, of course, literal dietary advice; it is a shock tactic designed to penetrate self-deception. The meal with a ruler is a trap for the person driven by appetite&mdash;whether for food, for approval, for social advancement, or for the pleasures the powerful can offer." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The delicacies of the ruler are &ldquo;deceptive food&rdquo; (literally &ldquo;food of lies&rdquo; in Hebrew). They look nourishing; they may even taste nourishing; but they carry an invisible cost. The ruler who feeds you has leverage over you. Social obligation, political entanglement, and moral compromise often enter through the dining room. Jesus himself warns about this dynamic when he speaks of those who love &ldquo;the best seats at feasts and the chief seats in the synagogues&rdquo; (Matthew 23:6). Appetite for social proximity to power is a particular vulnerability of the ambitious person." }}
              />
            </div>

            {/* vv. 4-5 */}
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: GOLD, fontWeight: 700 }}>vv. 4-5</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>Wealth Sprouts Wings and Flies Away</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Do not toil to acquire wealth; be discerning enough to desist. When your eyes light on it, it is gone, for suddenly it sprouts wings, flying like an eagle toward heaven.&rdquo;" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "The image is one of the most memorable in Proverbs: the moment you think you&rsquo;ve secured your wealth, it sprouts eagle&rsquo;s wings and flies to heaven. This is not an argument against work or savings; Proverbs strongly commends diligence. It is an argument against treating wealth acquisition as the purpose of life&mdash;against &ldquo;toiling&rdquo; for it, wearing yourself out in its pursuit." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The Hebrew word translated &ldquo;discerning enough to desist&rdquo; involves the idea of ceasing, withdrawing from. The wise person knows when to stop striving. There is a point at which the accumulation of wealth becomes self-defeating&mdash;not because the wealth disappears necessarily, but because the person who toils obsessively for it loses something more valuable: perspective, relationships, the enjoyment of the present, and ultimately, the fear of the LORD that is wisdom&rsquo;s foundation." }}
              />
            </div>

            {/* vv. 6-8 */}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: PURPLE, fontWeight: 700 }}>vv. 6-8</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>Do Not Eat of a Stingy Man</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Do not eat the bread of a man who is stingy; do not desire his delicacies, for he is like one who is inwardly calculating. &lsquo;Eat and drink!&rsquo; he says to you, but his heart is not with you. You will vomit up the morsels you have eaten, and waste your pleasant words.&rdquo;" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "The Hebrew word behind &ldquo;stingy&rdquo; here (ra ayin, literally &ldquo;evil eye&rdquo;) refers to a miserly, calculating person. This is the third table warning in three sayings, and the pattern is now clear: every table in Proverbs 23 has hidden costs. The stingy man says &ldquo;eat and drink!&rdquo; with hospitality language, but his heart is not with you. He is calculating what this meal costs him, what he will extract from the relationship, whether this investment is worth it." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The result: &ldquo;you will vomit up the morsels you have eaten.&rdquo; This is not likely literal. It is the feeling of disgust when you realize the hospitality was false, the conversation manipulative, the relationship transactional. You leave the meal feeling used. The wise person learns to read the spirit behind the invitation before accepting it." }}
              />
            </div>

            {/* v. 9 */}
            <div style={{ background: CARD, border: `1px solid ${MUTED}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: "#9898B320", border: `1px solid ${MUTED}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: MUTED, fontWeight: 700 }}>v. 9</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>Do Not Speak in the Ears of a Fool</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Do not speak in the hearing of a fool, for he will despise the good sense of your words.&rdquo;" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "One verse, one saying. This is wisdom about the economy of words and the limits of instruction. The fool (kesil in Hebrew &mdash; the dull, obstinate person who has chosen not to receive wisdom) will not benefit from good instruction; he will only despise it. Proverbs is not endorsing social contempt for foolish people; it is teaching the wisdom of knowing when speech is futile. There is no virtue in casting pearls before swine (Matthew 7:6). The wise person discerns which conversations are worth having and which are not. This requires both humility (the message may not be the problem; your delivery may be) and realism (some people are not in a receiving posture and cannot be forced into one)." }}
              />
            </div>

            {/* vv. 10-11 */}
            <div style={{ background: CARD, border: `1px solid ${TEAL}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${TEAL}20`, border: `1px solid ${TEAL}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: TEAL, fontWeight: 700 }}>vv. 10-11</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>Do Not Move the Ancient Landmark</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Do not move an ancient landmark or enter the fields of the fatherless, for their Redeemer is strong; he will plead their cause against you.&rdquo;" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Landmark stones defined property boundaries in the ancient world. Moving them was a form of theft that was difficult to prove and easy to accomplish, especially when the victim had no family or social standing to object. The fatherless (orphan) was the paradigmatic vulnerable person in the ancient Near East&mdash;without a father, without a protector, without legal advocacy. Proverbs 23:11 introduces a startling counter-claim: the fatherless have a Redeemer (go&rsquo;el). In Israel&rsquo;s legal culture, the go&rsquo;el was a kinsman who could redeem property, buy back relatives from slavery, and avenge injustice. God himself takes this role for those who have no human advocate. This is not a comfortable verse for those who exploit legal gray areas to take from those who cannot fight back." }}
              />
            </div>

            {/* vv. 12-16 */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${GREEN}20`, border: `1px solid ${GREEN}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: GREEN, fontWeight: 700 }}>vv. 12-16</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>Apply the Heart to Instruction &mdash; Discipline a Child</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Apply your heart to instruction and your ear to words of knowledge. Do not withhold discipline from a child; if you strike him with a rod, he will not die. If you strike him with the rod, you will save his soul from Sheol.&rdquo; (vv. 12-14)" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "The &ldquo;rod&rdquo; passages in Proverbs are among the most debated in the book. Ancient readers would have understood the rod as a symbol of firm parental authority and correction rather than necessarily as an instrument of beating; the parallel passage in Proverbs 29:15 connects the rod with reproof. The point is that parental love does not avoid correction to spare the child discomfort; it invests in correction because it understands that an undisciplined person faces worse suffering later. &ldquo;You will save his soul from Sheol&rdquo; is the theological stake: what is at stake in discipline is not mere behavior but the direction of a life." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Verses 15-16 reveal the emotional undercurrent of the entire middle section: &ldquo;My son, if your heart is wise, my heart too will be glad. My inmost being will exult when your lips speak what is right.&rdquo; The father is not a disciplinarian administering a behavior management program; he is a parent whose own joy is tied to the flourishing of his child. The discipline described in vv. 13-14 flows from this love, not from cold authority." }}
              />
            </div>

            {/* vv. 17-18 */}
            <div style={{ background: CARD, border: `1px solid ${BLUE}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${BLUE}20`, border: `1px solid ${BLUE}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: BLUE, fontWeight: 700 }}>vv. 17-18</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>Do Not Envy Sinners &mdash; Fear the LORD Continually</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Let not your heart envy sinners, but continue in the fear of the LORD all the day. Surely there is a future, and your hope will not be cut off.&rdquo;" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The antidote to envy of sinners is the fear of the LORD&mdash;not a one-time decision but a continuous posture (&ldquo;all the day&rdquo;). Envy of sinners arises when we calculate present circumstances without reference to God&rsquo;s future. The sinner may seem to prosper; the God-fearer may seem to suffer. Proverbs 23:18 inserts the divine perspective: &ldquo;Surely there is a future, and your hope will not be cut off.&rdquo; This is eschatological wisdom&mdash;it grounds present faithfulness in future hope. The Psalms wrestle with the same temptation (Psalm 73) and come to the same conclusion: when the psalmist enters the sanctuary of God, he understands the end of the wicked." }}
              />
            </div>

            {/* vv. 19-21 */}
            <div style={{ background: CARD, border: `1px solid ${ROSE}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${ROSE}20`, border: `1px solid ${ROSE}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: ROSE, fontWeight: 700 }}>vv. 19-21</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>Drunkards and Gluttons Come to Poverty</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Hear, my son, and be wise, and direct your heart in the way. Be not among drunkards or among gluttonous eaters of meat, for the drunkard and the glutton will come to poverty, and slumber will clothe them with rags.&rdquo;" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The pairing of drunkenness and gluttony reflects the broader theme of appetite-governance in Proverbs 23. Both drunkenness and gluttony involve the failure of self-restraint in the domain of bodily pleasure. The consequence named here is poverty and rags&mdash;not because Proverbs intends every drunkard to be poor, but because the lifestyle of uncontrolled appetite eventually consumes the resources of time, money, energy, and relationship that sustain a flourishing life. Jesus is accused of being a &ldquo;glutton and a drunkard&rdquo; (Matthew 11:19)&mdash;a slur that reveals these categories were understood in his culture as markers of character failure. Proverbs 23 agrees: they are." }}
              />
            </div>

            {/* vv. 22-25 */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${GREEN}20`, border: `1px solid ${GREEN}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: GREEN, fontWeight: 700 }}>vv. 22-25</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>Listen to Your Father &mdash; Buy Truth</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Listen to your father who gave you life, and do not despise your mother when she is old. Buy truth, and do not sell it; buy wisdom, instruction, and understanding.&rdquo;" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "The command to listen to both father and mother (note the explicit inclusion of the mother here) places wisdom transmission within the family unit. Biblical wisdom is not primarily academic; it is intergenerational and relational. The father who gave you life has a stake in your flourishing that no other teacher has; the mother who nurtured your childhood has knowledge of you that shapes the wisdom she transmits." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Buy truth and do not sell it&rdquo; is one of the most memorable formulations in the chapter. Truth is something worth paying for&mdash;in effort, in discomfort, in the cost of changing direction. But once you have it, you do not sell it; you do not trade away what you know to be true for social acceptance, for comfort, or for profit. The list that follows&mdash;wisdom, instruction, understanding&mdash;describes the full curriculum of the wise life. These four things (truth, wisdom, instruction, understanding) together constitute the integrated intellectual and moral character that Proverbs envisions." }}
              />
            </div>

            {/* vv. 26-28 */}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: PURPLE, fontWeight: 700 }}>vv. 26-28</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>Give Me Your Heart &mdash; A Prostitute Is a Deep Pit</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;My son, give me your heart, and let your eyes observe my ways. For a prostitute is a deep pit; an adulteress is a narrow well. She lies in wait like a robber and increases the traitors among mankind.&rdquo;" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "Verse 26 is the emotional and theological center of the chapter: &ldquo;Give me your heart.&rdquo; The father&rsquo;s appeal is for the deepest thing&mdash;not just behavior, not just attention, but the directing center of the person. And the next two verses explain why: the alternative to giving the heart to wisdom is having it captured by something else. The prostitute of verse 27 is the embodiment of Woman Folly from Proverbs 7&mdash;she lies in wait, she ambushes, she increases the traitors among mankind." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The imagery of the deep pit and narrow well is striking. Pits and wells in the ancient world were places you could fall into and not get out of. The person seduced by sexual immorality finds themselves in a confinement from which they cannot extract themselves by willpower alone. This is not a moralistic scare tactic; it is an honest description of the dynamics of addiction and compulsion that modern neuroscience has confirmed. The warning to give the heart to wisdom is the prevention; Proverbs 23 does not spend much time on the cure." }}
              />
            </div>

            {/* vv. 29-35 */}
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 14, padding: 26, marginBottom: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 8, padding: "4px 12px", fontSize: 11, color: GOLD, fontWeight: 700 }}>vv. 29-35</span>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: 17 }}>Who Has Woe? &mdash; The Portrait of the Drunkard</span>
              </div>
              <blockquote
                style={{ color: GOLD, fontSize: 14, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 14px", padding: "10px 14px", background: `${GOLD}10`, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 8px 8px 0" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Who has woe? Who has sorrow? Who has strife? Who has complaining? Who has wounds without cause? Who has redness of eyes? Those who tarry long over wine; those who go to try mixed wine.&rdquo; (vv. 29-30)" }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "The closing section of Proverbs 23 is a rhetorical masterwork. The teacher opens with six rapid interrogative questions, each naming a different dimension of suffering: woe, sorrow, strife, complaining, wounds, bloodshot eyes. These are not rhetorical questions in the sense of having no answer; they build suspense and accumulate weight before the answer lands: those who tarry long over wine." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "Verse 31 has the teacher warning the son not even to look at wine &ldquo;when it is red, when it sparkles in the cup and goes down smoothly.&rdquo; This is a description of temptation: the thing looks beautiful, it goes down easily, it promises pleasure. Verse 32 delivers the reversal: &ldquo;In the end it bites like a serpent and stings like an adder.&rdquo; The pleasure is real but the consequences are catastrophic." }}
              />
              <p
                style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The final description (vv. 33-35) is almost hallucinatory in its power: the drunkard&rsquo;s eyes see strange things, his heart utters perverse things, he is like one sleeping at sea, lying at the top of a mast, beaten but feeling nothing. And the most devastating detail: &ldquo;When shall I awake? I must have another drink.&rdquo; The drunkard&rsquo;s first thought on waking is to return to what is destroying him. This is the portrait of addiction&mdash;rendered with devastating accuracy by a sage writing three thousand years before modern addiction science confirmed the pattern." }}
              />
            </div>
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Application: Living the Wisdom of Proverbs 23</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Proverbs 23 is one of the most practically applicable chapters in the entire wisdom literature. Its warnings cluster around a single conviction: the good life requires governing the inner person&mdash;the appetite, the eye, the heart. The following applications draw out the chapter&rsquo;s enduring relevance for Christian formation." }}
              />
            </div>

            {[
              {
                color: GOLD,
                num: "01",
                title: "Guard Against Materialism",
                body: "Proverbs 23:4-5 gives one of the most memorable diagnoses of materialism in Scripture: wealth sprouts wings and flies away. The antidote is not poverty; it is discernment&mdash;knowing when to stop striving, when enough is enough. The Christian tradition has consistently named the love of money as a spiritual disease that blinds the person to God and to neighbor. Proverbs 23 asks: what are you toiling for? Is there a point at which you would say &ldquo;enough&rdquo;? If that point is not named, appetite for wealth becomes infinite, and it will eventually capture the heart that should belong to God.",
              },
              {
                color: PURPLE,
                num: "02",
                title: "Be a Faithful Transmitter of Wisdom",
                body: "The middle section of Proverbs 23 is a father&rsquo;s passionate appeal to his son. The appeal is not just for the son&rsquo;s behavior but for his heart: &ldquo;give me your heart.&rdquo; This raises a searching question for parents, mentors, teachers, and all who have a formative role with younger people: are you investing in the transmission of wisdom, or merely in the management of behavior? Proverbs 23 envisions the wise life as something received through relationship and returned in joy: &ldquo;My heart too will be glad... my inmost being will exult when your lips speak what is right&rdquo; (vv. 15-16). The joy of the teacher is bound up in the flourishing of the taught.",
              },
              {
                color: ROSE,
                num: "03",
                title: "Name and Resist Envy",
                body: "Verse 17 names a temptation that is almost never directly addressed: the envy of sinners. This is the specific, focused temptation to look at people who ignore God and appear to flourish, and to want what they have. Social media has created an unprecedented infrastructure for this temptation&mdash;a constant feed of curated prosperity, pleasure, and success that can produce chronic low-grade envy in the person committed to a narrow and costly faithfulness. Proverbs 23 does not deny that sinners sometimes prosper; it insists that the calculation must include the future. &ldquo;Surely there is a future, and your hope will not be cut off.&rdquo; Fear the LORD continually&mdash;all the day&mdash;as the practice that reorients the eyes away from comparison and toward hope.",
              },
              {
                color: TEAL,
                num: "04",
                title: "Take Sobriety Seriously",
                body: "The devastating portrait of the drunkard in verses 29-35 is not presented as a warning about a peripheral problem. In Proverbs, drunkenness is presented alongside adultery and gluttony as primary threats to the wise life&mdash;because all three involve the same failure: the capitulation of the governing center of the person to uncontrolled appetite. The NT exhortation to &ldquo;be sober-minded; be watchful&rdquo; (1 Peter 5:8) assumes that the ungoverned mind is vulnerable to destruction. Proverbs 23 is the wisdom literature foundation for that exhortation. This applies not only to alcohol but to any substance, practice, or habit that clouds the mind and displaces self-governance.",
              },
              {
                color: BLUE,
                num: "05",
                title: "Give Your Heart to God",
                body: "Verse 26&mdash;&ldquo;give me your heart&rdquo;&mdash;is the chapter&rsquo;s deepest appeal. In its original context, the father is asking for the son&rsquo;s inner allegiance. In the broader canonical context, the voice of wisdom calling for the heart is the voice of God himself. All the warnings in Proverbs 23&mdash;about wealth, about stingy hosts, about drunkards, about adulteresses&mdash;are warnings about things that can capture the heart in the place of God. The chapter is not ultimately about a list of behaviors to avoid; it is about a single question: who has your heart? Jesus said &ldquo;where your treasure is, there your heart will be also&rdquo; (Matthew 6:21). Proverbs 23 is the wisdom literature version of the same truth.",
              },
              {
                color: GREEN,
                num: "06",
                title: "Honor Your Parents&rsquo; Wisdom",
                body: "Verse 22 commands: &ldquo;Listen to your father who gave you life, and do not despise your mother when she is old.&rdquo; In cultures that prize the new over the old and the innovative over the inherited, this command cuts against the grain. Biblical wisdom assumes that those who have lived longer and suffered more have access to insight that cannot be acquired quickly. The parents in Proverbs 23 are not simply authority figures demanding compliance; they are people whose lives have been shaped by wisdom and who are trying to pass that shaping on. Despising parental wisdom&mdash;dismissing it as outdated, outmoded, irrelevant&mdash;is in Proverbs a mark of the fool, not of the independent thinker.",
              },
            ].map(app => (
              <div key={app.num} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 26px", marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 10, background: `${app.color}20`, border: `1px solid ${app.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: app.color, fontWeight: 900, fontSize: 14 }}>{app.num}</div>
                  <div>
                    <h3 style={{ color: app.color, fontWeight: 800, fontSize: 17, margin: "0 0 10px" }}>{app.title}</h3>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: app.body }} />
                  </div>
                </div>
              </div>
            ))}

            {/* Discussion Questions */}
            <div style={{ background: `${BLUE}12`, border: `1px solid ${BLUE}30`, borderRadius: 14, padding: 28, marginBottom: 22 }}>
              <h3 style={{ color: BLUE, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Discussion &amp; Reflection Questions</h3>
              <ol style={{ color: MUTED, fontSize: 14, lineHeight: 2.0, margin: 0, paddingLeft: 20 }}>
                <li dangerouslySetInnerHTML={{ __html: "Proverbs 23:4-5 warns against toiling to acquire wealth. How do you know when you&rsquo;ve crossed the line from healthy diligence to destructive striving? Where is that line for you personally?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The chapter repeatedly warns about the danger of appetite&mdash;for food, wealth, wine, sexual pleasure. What is the common thread in these warnings? What does Proverbs 23 assume about the relationship between appetite and wisdom?" }} />
                <li dangerouslySetInnerHTML={{ __html: "&ldquo;Do not envy sinners, but continue in the fear of the LORD all the day.&rdquo; Where do you most feel the pull of envy for people who ignore God? What does it look like to &ldquo;fear the LORD all the day&rdquo; in that particular context?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The portrait of the drunkard in verses 29-35 is one of the most psychologically precise descriptions in Proverbs. What makes it so effective? What does the detail &ldquo;when shall I awake? I must have another drink&rdquo; reveal about the nature of addiction?" }} />
                <li dangerouslySetInnerHTML={{ __html: "&ldquo;Give me your heart.&rdquo; If you trace the various things your heart has been given to over the course of your life, what patterns do you see? What is competing with God for your heart right now?" }} />
              </ol>
            </div>

            {/* Prayer */}
            <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: "0 0 14px" }}>A Prayer from Proverbs 23</h3>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Lord, you ask for the one thing we most want to keep for ourselves: our hearts. You ask not because you want control but because you know that an ungoverned heart is its own worst enemy&mdash;captured by wealth, seduced by wine, entrapped by foolish companions, exhausted by envy. Give us the wisdom to see what is deceptive food and what is real nourishment; to know when to stop striving and when to hold on; to fear you all the day long, not because we must but because you are the only one worthy of the place we&rsquo;ve been giving to lesser things. Take what we offer. Shape what we are. Amen." }}
              />
            </div>
          </div>
        )}

        {/* Videos Section */}
        <section style={{ marginTop: 52 }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, margin: "0 0 8px" }}>Teaching Videos on Proverbs 23</h2>
            <p
              style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{ __html: "Sermons and studies on the warnings of Proverbs 23&mdash;wealth, wine, wisdom, and the call to guard the heart above all else." }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: TEXT, fontWeight: 700, fontSize: 14, margin: "0 0 4px", lineHeight: 1.4 }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 12, margin: 0 }}>Proverbs 23 Study</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <div style={{ marginTop: 52, background: `${GOLD}10`, border: `1px solid ${GOLD}30`, borderRadius: 14, padding: 28, textAlign: "center" }}>
          <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 20, margin: "0 0 10px" }}>Continue Your Study of Proverbs</h3>
          <p
            style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 18px", maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}
            dangerouslySetInnerHTML={{ __html: "Proverbs 23 is one chapter in a book that offers the most complete picture of wisdom living in all Scripture. Explore the fear of the Lord, Lady Wisdom, the Proverbs 31 woman, and the full landscape of biblical wisdom in our comprehensive Proverbs guide." }}
          />
          <a href="/proverbs-guide" style={{ display: "inline-block", background: GOLD, color: "#fff", borderRadius: 10, padding: "12px 28px", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
            Explore the Full Proverbs Guide &rarr;
          </a>
        </div>
      </main>
    </div>
  );
}
