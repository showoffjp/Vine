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
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const videoItems = [
  { videoId: "hT3kRpWbXmQ", title: "Proverbs 17: Peace, Friendship, and the Tested Heart" },
  { videoId: "wY8nGcLpDsR", title: "The LORD Tests Hearts: The Refining Fire" },
  { videoId: "bM5xQjVtHkF", title: "A Friend Loves at All Times" },
  { videoId: "nP9sZhWkTmL", title: "A Glad Heart Is Good Medicine" },
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
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Proverbs Chapter 17</h1>
          <p style={{ color: GOLD, fontSize: "1rem", fontStyle: "italic", marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;A friend loves at all times, and a brother is born for adversity.&rdquo; &mdash; Proverbs 17:17" }} />
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Proverbs 17 is a chapter about the quiet treasures that money cannot buy: peace, friendship, and a heart proven true. It opens by declaring that a dry crust eaten in quiet is better than a house full of feasting torn by strife, and it goes on to picture the LORD himself as a refiner who tests human hearts in the crucible as a smith tests silver and gold. Woven through its proverbs are the deepest themes of biblical wisdom &mdash; the love that overlooks an offense, the friend who loves at all times and the brother born for adversity, the glad heart that works like good medicine in the body, and the restraint of words that marks the truly wise. It is a chapter that prizes character over comfort and relationships over riches, calling us to value what God values." }} />
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
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>Peace Over Abundance (v.1)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens with one of the great &ldquo;better than&rdquo; proverbs: &ldquo;Better is a dry morsel with quiet than a house full of feasting with strife&rdquo; (v.1). The contrast is deliberately stark. On one side is a single dry crust of bread &mdash; the barest, plainest food &mdash; eaten in peace. On the other is a house overflowing with sacrificial feasting, abundance heaped on abundance, but poisoned by conflict. Wisdom looks at the two and declares without hesitation that the dry crust in quiet is the richer table." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This opening proverb sets the tone for the whole chapter and overturns the world&rsquo;s usual scale of values. We instinctively measure a household by its plenty &mdash; the size of the feast, the fullness of the table. But Scripture insists that the true wealth of a home is not its provisions but its peace. A modest life marked by harmony and contentment is incomparably better than affluence soured by quarreling, bitterness, and division. The principle reaches into every relationship: peace is a treasure that no abundance can replace." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>The LORD Tests the Heart (v.3)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "At the heart of the chapter stands a verse of profound theological weight: &ldquo;The crucible is for silver, and the furnace is for gold, and the LORD tests hearts&rdquo; (v.3). The proverb draws on the ancient craft of the metalworker. To purify silver and gold, the smith heats the metal in a crucible or furnace until it melts; the dross rises to the surface and is skimmed away, leaving the precious metal refined and pure. The intense heat is not destructive but purifying &mdash; it reveals and removes what is impure." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The proverb then makes its decisive turn: as the furnace is to gold, so the LORD is to the human heart. God himself is the refiner of his people, and the testing he applies reaches the deepest place &mdash; the heart, the seat of motive, desire, and character. He alone can see what truly lies within, and he alone can purify it. The trials and pressures of life, in the hand of this divine smith, become the very fire by which dross is exposed and removed and true faith is proven and refined." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>The Maker of the Poor and the Crown of the Aged (vv.5-6)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 5 turns to how we treat the vulnerable: &ldquo;Whoever mocks the poor insults his Maker; he who is glad at calamity will not go unpunished.&rdquo; To sneer at the poor is not merely a social offense but a theological one, for the poor person bears the image of the God who made him. Contempt for the poor is, in effect, contempt for their Creator. The second line adds that gloating over another&rsquo;s disaster &mdash; rejoicing when calamity falls on someone else &mdash; is a sin that God will surely judge." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Verse 6 lifts our eyes to the blessing that flows across the generations: &ldquo;Grandchildren are the crown of the aged, and the glory of children is their fathers.&rdquo; The image is beautifully reciprocal. For the old, the sight of grandchildren is a crown of honor and joy, the visible fruit of a life that has reached into the future. For children, a faithful father is their glory and security, the foundation on which they stand. The proverb celebrates the bond between generations as one of God&rsquo;s richest and most ordinary blessings." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;A friend loves at all times, and a brother is born for adversity.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>Proverbs 17:17 (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>Covering Offenses and Friendship (vv.9, 17)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Two of the chapter&rsquo;s most treasured proverbs speak to the heart of friendship. The first concerns how friendships are kept: &ldquo;Whoever covers an offense seeks love, but he who repeats a matter separates close friends&rdquo; (v.9). To &ldquo;cover&rdquo; an offense is not to deny or excuse it but to refuse to broadcast it, to let love draw a veil over a wrong rather than parade it. The one who keeps dredging up old grievances and spreading them abroad drives a wedge between even the closest of friends." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The second is the chapter&rsquo;s most famous line: &ldquo;A friend loves at all times, and a brother is born for adversity&rdquo; (v.17). True friendship is not fair-weather affection that evaporates when trouble comes; it loves at all times, in seasons of joy and seasons of sorrow alike. The parallel raises the bar higher still: a brother is &ldquo;born for adversity,&rdquo; meaning that genuine kinship love proves itself precisely in the hard times, stepping in when the day of trouble arrives. The deepest love is the love that stays." }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>A Glad Heart Is Good Medicine (v.22)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 22 offers one of Scripture&rsquo;s most striking observations about the link between the inner and outer life: &ldquo;A glad heart is good medicine, but a crushed spirit dries up the bones.&rdquo; The proverb recognizes that the condition of the heart works its way into the body. Joy is described as a healing medicine, something that mends and strengthens, while a broken, despairing spirit saps vitality until even the bones seem to wither. Long before modern study of the mind and body, biblical wisdom saw that the two are deeply intertwined." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This proverb takes its place within the chapter&rsquo;s larger concern for peace and well-being. A heart at rest in God, glad and free from gnawing strife, is a kind of health to the whole person. A heart crushed by bitterness, anxiety, or chronic conflict drains away strength and hope. The verse does not promise that joy cures every illness, but it does declare that gladness of heart is genuinely good for us &mdash; another reason to seek the peace and contentment the chapter so highly prizes." }} />
            </div>

            {/* Section 7 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>The Restraint of Words (vv.27-28)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter closes with two proverbs on the discipline of speech: &ldquo;Whoever restrains his words has knowledge, and he who has a cool spirit is a man of understanding&rdquo; (v.27). True wisdom is marked not by a flood of talk but by the ability to hold one&rsquo;s tongue. The person of knowledge speaks sparingly and with self-control, possessing a &ldquo;cool spirit&rdquo; that is not easily provoked into hasty or excessive words. Restraint is here a sign of depth, not of having nothing to say." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The final verse adds a touch of wry humor: &ldquo;Even a fool who keeps silent is considered wise; when he closes his lips, he is deemed intelligent&rdquo; (v.28). The point is gently devastating: silence is so powerful a teacher that even a fool can appear wise simply by keeping his mouth shut. The proverb at once commends the discipline of silence and warns that careless speech is what most often exposes folly. The chapter that began by prizing peace ends by prizing the restraint of speech that so often guards it." }} />
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
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Peace Over Prosperity</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens by declaring that &ldquo;a dry morsel with quiet&rdquo; is better than &ldquo;a house full of feasting with strife&rdquo; (v.1), and this conviction colors everything that follows. It belongs to a recognizable form in Proverbs: the &ldquo;better than&rdquo; saying, which sets two goods side by side and assigns them their true relative worth. The point is not that poverty is good or that feasting is bad, but that peace is worth more than abundance &mdash; a value judgment that runs directly counter to the world&rsquo;s assumptions." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Other &ldquo;better than&rdquo; proverbs reinforce the same scale: &ldquo;Better is a little with the fear of the LORD than great treasure and trouble with it&rdquo; (Proverbs 15:16); &ldquo;Better is a dinner of herbs where love is than a fattened ox and hatred with it&rdquo; (15:17). Together they teach that the quality of our relationships and the state of our hearts matter far more than the size of our possessions. A home is rich not when its table is full but when its peace is whole." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This theme is profoundly relevant in a culture that measures the good life by accumulation. Proverbs 17 quietly insists that we can gain the whole feast and lose the peace that makes it worth eating. It calls us to guard the harmony of our homes and friendships as a treasure more precious than wealth, and to be willing, if we must choose, to take the dry crust in quiet rather than the loaded table in strife." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The LORD as Refiner of Hearts</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The image of v.3 &mdash; &ldquo;The crucible is for silver, and the furnace is for gold, and the LORD tests hearts&rdquo; &mdash; opens onto one of the great metaphors of Scripture: God as the refiner of his people. The metalworker&rsquo;s fire does not destroy the precious metal; it purifies it, drawing the dross to the surface so it can be removed. By comparing the LORD to this refiner, the proverb teaches that God&rsquo;s testing of the heart is a purifying work, intended to expose and remove what is false and to bring forth what is genuine." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The refining metaphor runs as a bright thread through the Bible. Malachi pictures the coming Lord as a refiner&rsquo;s fire who will &ldquo;sit as a refiner and purifier of silver&rdquo; to purify his people (Malachi 3:2-3). Peter applies the same image to trials, writing that the tested genuineness of faith is &ldquo;more precious than gold that perishes though it is tested by fire&rdquo; (1 Peter 1:7). The hardships that God permits are, in this light, the furnace in which faith is proven and character refined." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This theme reshapes the way we understand suffering and testing. The trials that come are not evidence that God has abandoned us but, in his hand, the very means by which he purifies us. The refiner does not walk away from the furnace; he watches the metal closely, removing the dross until he can see his own reflection in the surface. So God tends his people through their testing, working to bring forth a heart that is pure, proven, and precious to him." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>True Friendship and Brotherhood</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Proverbs 17:17 gives the Bible its most famous definition of friendship: &ldquo;A friend loves at all times, and a brother is born for adversity.&rdquo; The two lines belong together. A true friend&rsquo;s love is constant, not seasonal &mdash; it does not depend on convenience or fortune. And the parallel deepens this with the bond of a brother, who is &ldquo;born for adversity,&rdquo; meaning that the truest love proves itself precisely in the hard times, when fair-weather companions fall away." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Scripture gives this kind of friendship flesh and blood. The covenant love of Jonathan for David, who &ldquo;loved him as his own soul&rdquo; and stood by him at great personal cost (1 Samuel 18&ndash;20), embodies the friend who loves at all times. Such loyalty is rare and precious, and Proverbs holds it up as one of life&rsquo;s great treasures &mdash; a relationship that mirrors something of the steadfast love of God himself toward his people." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Ultimately this verse points beyond every human friend to Christ. He is the friend who loves at all times, who said, &ldquo;Greater love has no one than this, that someone lay down his life for his friends&rdquo; (John 15:13), and who proved it on the cross. He is the brother born for our adversity, who took on flesh and entered the deepest trouble of sin and death to rescue us. Every faithful human friendship is a faint echo of his perfect and unfailing love." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Wisdom of Overlooking Offenses</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Whoever covers an offense seeks love, but he who repeats a matter separates close friends&rdquo; (v.9). The proverb commends the grace of overlooking a wrong &mdash; not pretending it never happened, but choosing not to publicize it, dwell on it, or weaponize it. To &ldquo;cover&rdquo; an offense is an act of love that protects a relationship; to &ldquo;repeat a matter,&rdquo; endlessly rehearsing and spreading the wrong, is an act that destroys even the closest of friendships." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This is a recurring note in Proverbs: &ldquo;Good sense makes one slow to anger, and it is his glory to overlook an offense&rdquo; (19:11). It is not weakness or denial but maturity &mdash; the strength to absorb a slight rather than retaliate, to let love rather than grievance set the tone. The wise person does not keep a ledger of wrongs but is quick to forgive and slow to make a matter public." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The New Testament lifts this wisdom to its height: &ldquo;Above all, keep loving one another earnestly, since love covers a multitude of sins&rdquo; (1 Peter 4:8). The love that covers offenses reflects the very heart of God, who in Christ does not count our trespasses against us but covers our sin. To overlook an offense for the sake of love is to imitate the mercy we ourselves have received, and it is one of the surest guardians of the peace this chapter so prizes." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Heart&rsquo;s Effect on the Body</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;A glad heart is good medicine, but a crushed spirit dries up the bones&rdquo; (v.22). This proverb reflects the biblical understanding of the human person as a deep unity of inner and outer, heart and body. What happens in the heart does not stay there; joy becomes a healing tonic to the whole person, while a broken spirit drains away the very marrow of life. Biblical anthropology never treats body and soul as detached compartments but sees them as woven together." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Proverbs returns to this insight more than once. &ldquo;A tranquil heart gives life to the flesh, but envy makes the bones rot&rdquo; (14:30); &ldquo;Anxiety in a man&rsquo;s heart weighs him down, but a good word makes him glad&rdquo; (12:25). These sayings recognize, with remarkable insight, that emotional and spiritual states have physical consequences &mdash; that bitterness, envy, and anxiety take a toll on the body, while joy, peace, and a tranquil heart bring life." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This theme dignifies the care of the heart as something that touches our whole well-being. It does not reduce joy to a medical strategy, but it does affirm that gladness of heart &mdash; especially the deep, settled joy that comes from peace with God &mdash; is genuinely good for us, body and soul. To cultivate a glad heart, and to guard against the crushing weight of bitterness and strife, is part of the wise stewardship of the life God has given." }} />
            </div>

            {/* Theme 6 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Discipline of Restrained Speech</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter closes on the wisdom of restrained words: &ldquo;Whoever restrains his words has knowledge, and he who has a cool spirit is a man of understanding. Even a fool who keeps silent is considered wise; when he closes his lips, he is deemed intelligent&rdquo; (vv.27-28). True knowledge expresses itself in measured, sparing speech and a &ldquo;cool spirit&rdquo; not easily inflamed. The point is sharpened by the observation that even a fool can pass for wise simply by holding his tongue." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Earlier in the chapter the same concern appears from the negative side: &ldquo;A rebuke goes deeper into a man of understanding than a hundred blows into a fool&rdquo; (v.10) shows that the wise person receives correction with few words, while &ldquo;he who belittles his neighbor lacks sense&rdquo; (v.18, cf. 11:12) warns against careless, demeaning speech. Throughout Proverbs, the tongue is both the great revealer of the heart and one of its most dangerous instruments." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This wisdom finds its fullest development in the New Testament book of James, which warns that &ldquo;the tongue is a fire&rdquo; and that &ldquo;if anyone does not stumble in what he says, he is a perfect man&rdquo; (James 3:2, 6), and counsels everyone to be &ldquo;quick to hear, slow to speak, slow to anger&rdquo; (James 1:19). Proverbs 17 plants the seed: the wise guard their words, knowing that restraint protects relationships, preserves peace, and reveals a heart under the control of God." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* vv.1-3 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 1-3: Peace and the Refining Fire</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Dry Morsel and the Tested Heart</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1</strong> &mdash; &ldquo;Better is a dry morsel with quiet than a house full of feasting with strife.&rdquo; A bare crust eaten in peace outweighs a house overflowing with sacrificial feasting but torn by conflict. The proverb states the chapter&rsquo;s governing value: peace is worth more than abundance. It overturns the world&rsquo;s instinct to measure the good life by plenty rather than by harmony." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.3</strong> &mdash; &ldquo;The crucible is for silver, and the furnace is for gold, and the LORD tests hearts.&rdquo; As the smith&rsquo;s fire purifies precious metal, drawing off the dross, so the LORD refines the human heart. God alone sees and purifies the deepest place within us. The verse anchors the whole chapter in the truth that God is the refiner of his people, echoed later in Malachi 3:3 and 1 Peter 1:7." }} />
            </div>

            {/* vv.5-6 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 5-6: The Maker and the Generations</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Mocking the Poor, Crowning the Aged</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.5</strong> &mdash; &ldquo;Whoever mocks the poor insults his Maker; he who is glad at calamity will not go unpunished.&rdquo; To despise the poor is to despise the God in whose image they are made; contempt for the creature is an affront to the Creator. And to gloat over another&rsquo;s ruin is a sin God will surely judge. The verse binds our treatment of the vulnerable directly to reverence for God." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.6</strong> &mdash; &ldquo;Grandchildren are the crown of the aged, and the glory of children is their fathers.&rdquo; The blessing flows both ways across the generations: grandchildren are a crown of honor to the old, and a faithful father is the glory and security of his children. The proverb celebrates the generational bond as one of God&rsquo;s ordinary yet profound gifts." }} />
            </div>

            {/* vv.9-10 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 9-10: Covering Offenses and Receiving Rebuke</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Love That Covers, Correction That Lands</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.9</strong> &mdash; &ldquo;Whoever covers an offense seeks love, but he who repeats a matter separates close friends.&rdquo; To cover a wrong &mdash; not to deny it but to refuse to broadcast or rehearse it &mdash; is an act of love that protects a friendship. To keep dredging up and spreading an offense drives apart even the closest companions. This is the wisdom of overlooking that 1 Peter 4:8 calls love covering a multitude of sins." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.10</strong> &mdash; &ldquo;A rebuke goes deeper into a man of understanding than a hundred blows into a fool.&rdquo; The wise person needs only a word of correction to take it to heart, while the fool is unmoved by a hundred beatings. The proverb measures wisdom by teachability: a single rebuke that lands deep reveals an understanding heart, while resistance to all correction reveals folly." }} />
            </div>

            {/* v.17 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700 }}>Verse 17: The Friend Who Loves at All Times</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>A Brother Born for Adversity</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.17</strong> &mdash; &ldquo;A friend loves at all times, and a brother is born for adversity.&rdquo; The chapter&rsquo;s most beloved verse defines true friendship as constant, not seasonal &mdash; love that holds firm in every weather. The parallel deepens it: a brother is &ldquo;born for adversity,&rdquo; meaning that the truest love proves itself precisely in the day of trouble. The verse points beyond every human friend to Christ, the friend who laid down his life (John 15:13) and the brother who entered our deepest adversity to save us." }} />
            </div>

            {/* v.22 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 700 }}>Verse 22: Good Medicine for the Body</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Glad Heart and the Crushed Spirit</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.22</strong> &mdash; &ldquo;A glad heart is good medicine, but a crushed spirit dries up the bones.&rdquo; Biblical wisdom recognizes the deep unity of the person: joy becomes a healing tonic to the whole body, while a broken spirit drains away vitality until even the bones seem to wither. The proverb does not promise that gladness cures every ill, but it affirms that the state of the heart genuinely affects the well-being of the body, one more reason to seek the peace this chapter prizes." }} />
            </div>

            {/* vv.27-28 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 27-28: The Restraint of Words</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Wisdom in Few Words</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.27</strong> &mdash; &ldquo;Whoever restrains his words has knowledge, and he who has a cool spirit is a man of understanding.&rdquo; True knowledge shows itself in measured, sparing speech and a calm, even temper that is not easily provoked into hasty words. Restraint here is a mark of depth, not of having nothing to say. The wise use words with care, knowing the power of the tongue for good or harm." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.28</strong> &mdash; &ldquo;Even a fool who keeps silent is considered wise; when he closes his lips, he is deemed intelligent.&rdquo; The proverb ends with gentle irony: silence is so wise that even a fool can pass for wise by keeping quiet. The flip side is the warning that careless speech is what most often exposes folly. The chapter that began by prizing peace ends by commending the restraint of speech that so often preserves it." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>Treasure Peace More Than Plenty</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Proverbs 17 opens by declaring that a dry crust in quiet is better than a house full of feasting with strife (v.1). It is a direct challenge to the way we instinctively measure success and the good life. The chapter calls us to value the peace of our homes and relationships above the size of our possessions &mdash; to recognize that we can gain the whole feast and lose the harmony that makes it worth eating." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "In practice this means being willing to give up some comfort, advantage, or ambition for the sake of peace, and refusing to let conflict take root in the places that matter most. It means asking whether our striving for more is quietly costing us the quiet we most need. The wise person guards the peace of the home as a treasure no abundance can replace, and would rather have the dry crust in love than the loaded table in strife." }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>Welcome the Refiner&rsquo;s Fire</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;The crucible is for silver, and the furnace is for gold, and the LORD tests hearts&rdquo; (v.3). The trials that test us are not always signs of God&rsquo;s absence; in his hand they are the furnace by which he purifies the heart, exposing what is false and bringing forth what is genuine. The refiner does not abandon the metal to the fire but watches it closely until the dross is gone." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "This reframes how we meet hardship. Rather than asking only how to escape the heat, we can ask what God is purifying in us through it &mdash; what dross of pride, self-reliance, or false motive he is drawing to the surface to be removed. We can trust that the tested genuineness of our faith is more precious than gold (1 Peter 1:7), and submit to the Refiner&rsquo;s work, confident that he is making us pure and proven for himself." }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>Be the Friend Who Loves at All Times</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;A friend loves at all times, and a brother is born for adversity&rdquo; (v.17). The chapter sets a high and beautiful standard for friendship: love that is constant rather than seasonal, that shows up especially in the day of trouble. This is the kind of friend most of us long to have &mdash; and the kind we are called to be. It is in adversity, when there is nothing to gain and much to give, that real love proves itself." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "Practically, this means moving toward people in their hardship rather than away, staying when it would be easier to drift, and covering offenses (v.9) rather than rehearsing them. It also lifts our eyes to Christ, the friend who loved us to the end and the brother born for our deepest adversity. As we receive his unfailing love, we are freed and empowered to extend that same steadfast love to others." }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Guard Your Heart and Your Words</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Two of the chapter&rsquo;s closing themes belong together: the glad heart that is good medicine (v.22) and the restraint of words that marks the wise (vv.27-28). A heart at peace with God brings life to the whole person, while a crushed and bitter spirit drains away strength. And the wise guard their tongues, knowing that careless words destroy peace while restraint preserves it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is a double discipline of the inner and outer life: tend the heart and bridle the tongue. Cultivate gladness by bringing your anxieties to God and refusing to nurse bitterness, for joy is genuinely good for you. And practice the restraint of words &mdash; being quick to hear and slow to speak (James 1:19) &mdash; so that your speech guards rather than shatters the peace this chapter so highly prizes." }} />
            </div>

            {/* Application 5 - Discussion */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>Discussion Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "Verse 1 prizes &ldquo;a dry morsel with quiet&rdquo; over &ldquo;a house full of feasting with strife.&rdquo; Where in your life are you tempted to pursue more abundance at the cost of peace, and what would it look like to choose peace instead?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The LORD tests hearts as a refiner tests gold (v.3). Looking back, where has God used a trial as a furnace to purify something in you, and what dross did it bring to the surface to be removed?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Verse 9 commends covering an offense rather than repeating a matter. Is there a wrong you have been rehearsing or spreading that love would call you to cover, and how might that protect a friendship?" }} />
                <li dangerouslySetInnerHTML={{ __html: "&ldquo;A friend loves at all times, and a brother is born for adversity&rdquo; (v.17). Who has been this kind of friend to you, and toward whom is God calling you to be that steadfast friend right now, especially in their hardship?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Verses 22 and 27-28 link a glad heart and restrained speech to wisdom and well-being. What is one practical step you could take this week to cultivate gladness of heart and to guard your words?" }} />
              </ol>
            </div>

            {/* Application 6 - Prayer */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Father, you are the refiner who tests the heart, and you see what no one else can see. Teach me to treasure the quiet peace of a dry crust more than a feast full of strife, and to guard the harmony of my home and friendships as a gift more precious than wealth. When you lead me through the furnace, give me grace to trust your hand, believing that you are purifying me and not abandoning me, and bring forth in me a faith more precious than gold. Make me a friend who loves at all times and a brother born for adversity, quick to cover an offense and slow to repeat a matter. Fill my heart with the gladness that is good medicine, bridle my tongue with the restraint of the wise, and let the steadfast love of Christ, my truest Friend, be both my refuge and my pattern. Amen." }} />
            </div>

          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of Proverbs 17.</p>
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
