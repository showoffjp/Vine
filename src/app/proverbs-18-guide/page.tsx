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
  { videoId: "rKp7XmWqZbL", title: "Proverbs 18: The Power of Words and the Strong Tower" },
  { videoId: "tH4nGvBcLsR", title: "The Name of the LORD Is a Strong Tower" },
  { videoId: "yM2bQxJvKpF", title: "Death and Life in the Power of the Tongue" },
  { videoId: "wD8sZkNwHmT", title: "A Friend Who Sticks Closer Than a Brother" },
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
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Proverbs Chapter 18</h1>
          <p style={{ color: GOLD, fontSize: "1rem", fontStyle: "italic", marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;The name of the LORD is a strong tower; the righteous man runs into it and is safe.&rdquo; &mdash; Proverbs 18:10" }} />
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Proverbs 18 is a sustained meditation on the power of words and the perils of the proud, isolated heart. It opens with a sharp warning against the one who cuts himself off from others to chase his own desire, and it returns again and again to the mouth and the tongue &mdash; deep waters and a bubbling brook, a fool&rsquo;s snare, the whisperer&rsquo;s delicious morsels, and finally the stunning declaration that &ldquo;death and life are in the power of the tongue&rdquo; (v.21). At the chapter&rsquo;s heart shines one of the most beloved verses in all of Scripture: &ldquo;The name of the LORD is a strong tower; the righteous man runs into it and is safe&rdquo; (v.10). Between these themes the chapter weaves the wisdom of listening before speaking, of humility that comes before honor, and of the rare and faithful friend who sticks closer than a brother &mdash; a portrait that points beyond every human bond to Christ himself." }} />
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
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>The Danger of Isolation (v.1)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens with a penetrating diagnosis of the isolated soul: &ldquo;Whoever isolates himself seeks his own desire; he breaks out against all sound judgment&rdquo; (v.1). The one who cuts himself off from others is not simply lonely; he is driven by self-will, withdrawing precisely so that no one can challenge his cravings. Isolation here is not a neutral circumstance but a chosen posture of the heart, a way of escaping accountability in order to indulge the self." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The result is that the isolated person &ldquo;breaks out against all sound judgment,&rdquo; quarreling with wisdom itself. Cut off from the correction and counsel that come through community, he loses his bearings and rages against every voice that contradicts him. The proverb exposes a profound spiritual truth: we are not made to walk alone, and the deliberate flight from others is often the flight from the truth we do not want to hear. Wisdom is found in the company of the wise, not in self-chosen solitude." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>The Fool and His Opinions (v.2)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 2 sketches the fool with devastating accuracy: &ldquo;A fool takes no pleasure in understanding, but only in expressing his opinion.&rdquo; The fool has no appetite for genuine learning; what delights him is the sound of his own voice and the airing of his own views. He is not interested in discovering the truth but in broadcasting himself, mistaking the volume of his opinions for the substance of wisdom." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This proverb cuts close in any age, and especially in one saturated with platforms for self-expression. The fool finds no joy in understanding because understanding requires humility &mdash; the willingness to listen, to be corrected, to admit one does not yet know. He would rather reveal his heart in a torrent of words than receive wisdom in silence. True understanding begins where the love of merely expressing oneself ends." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>Deep Waters and Destructive Lips (vv.4, 6-7)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter turns to the depth and danger of speech. &ldquo;The words of a man&rsquo;s mouth are deep waters; the fountain of wisdom is a bubbling brook&rdquo; (v.4). Words are not surface things; they rise from the hidden depths of the heart, and from a wise person they flow like a fresh, life-giving stream. The image honors the profound power of speech to reveal what lies within and to refresh or to drown those who hear it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "But the fool&rsquo;s words run the other way, toward ruin: &ldquo;A fool&rsquo;s lips walk into a fight, and his mouth invites a beating&rdquo; (v.6); &ldquo;A fool&rsquo;s mouth is his ruin, and his lips are a snare to his soul&rdquo; (v.7). His reckless, contentious talk drags him into quarrels and brings disaster on his own head. His mouth becomes a trap that catches the very one who opened it. The contrast is stark: the same faculty of speech is a refreshing brook in the wise and a self-laid snare in the fool." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;The name of the LORD is a strong tower; the righteous man runs into it and is safe.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>Proverbs 18:10 (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>The Whisperer and the Strong Tower (vv.8, 10)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 8 names a subtler sin of the tongue: &ldquo;The words of a whisperer are like delicious morsels; they go down into the inner parts of the body.&rdquo; Gossip is described not as bitter but as sweet &mdash; tasty tidbits that we are eager to swallow. The danger is precisely in its appeal: slander goes down easily and lodges deep, sinking into the inmost being and shaping how we see others. The proverb warns that the very pleasure of gossip is what makes it so corrosive." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Against the danger of the tongue rises the chapter&rsquo;s great refuge: &ldquo;The name of the LORD is a strong tower; the righteous man runs into it and is safe&rdquo; (v.10). The &ldquo;name&rdquo; of the LORD is his revealed character and presence &mdash; all that he is. To run into his name is to take shelter in who God is: his faithfulness, his power, his steadfast love. In a world of dangerous words and uncertain refuges, the righteous flee not to walls of stone but to God himself, and there they are kept secure." }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>Pride, Humility, and the Discipline of Listening (vv.12-14)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter sets pride and humility on opposite roads: &ldquo;Before destruction a man&rsquo;s heart is haughty, but humility comes before honor&rdquo; (v.12). Pride is the surest forerunner of ruin, while the path to true honor runs through the low door of humility. The order matters: God does not exalt and then humble, but honors those who have first learned to bow. This is a recurring law of the kingdom &mdash; the way up is down." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Closely joined to humility is the discipline of listening: &ldquo;If one gives an answer before he hears, it is his folly and shame&rdquo; (v.13). To speak before truly understanding is both foolish and disgraceful, a failure of both wisdom and love. And verse 14 turns to the inner life: &ldquo;The spirit of a man will endure sickness, but a crushed spirit who can bear?&rdquo; A resilient spirit can carry the body through great affliction, but when the spirit itself is broken, there is no inner strength left to draw upon. The condition of the heart is the deepest matter of all." }} />
            </div>

            {/* Section 7 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>Death and Life in the Tongue (v.21)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s teaching on speech reaches its summit in verse 21: &ldquo;Death and life are in the power of the tongue, and those who love it will eat its fruits.&rdquo; This is one of the most weighty statements about words in all of Scripture. The tongue is no small or trivial thing; it wields the power of death and life. Words can crush or heal, curse or bless, tear down a soul or build it up. With our speech we deal in matters of life and death." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The second line adds a sober accountability: &ldquo;those who love it will eat its fruits.&rdquo; We will harvest the consequences of our words, for good or ill; the speech we cultivate becomes the fruit we are fed. This anticipates the warnings of James, that the tongue is &ldquo;a fire&rdquo; set among our members (James 3:6), and of Jesus, that we will give account for every careless word (Matthew 12:36-37). To grasp the power of the tongue is to handle it with reverence and care." }} />
            </div>

            {/* Section 8 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>The Good Gift and the Closest Friend (vv.22, 24)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 22 celebrates one of God&rsquo;s richest gifts: &ldquo;He who finds a wife finds a good thing and obtains favor from the LORD.&rdquo; A faithful spouse is not merely a fortunate find but a token of divine favor, a good thing given by the hand of God. The proverb dignifies marriage as a blessing that flows from the Giver of every good gift, lifting our gratitude beyond the gift to the One who bestows it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The chapter closes by weighing the depth of friendship against its breadth: &ldquo;A man of many companions may come to ruin, but there is a friend who sticks closer than a brother&rdquo; (v.24). A wide circle of shallow acquaintances offers no real security; what the soul needs is the one faithful friend whose loyalty surpasses even the bond of blood. This rare and steadfast friendship points us at last beyond every human companion to Christ, who lays down his life for his friends." }} />
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
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Peril of Isolation and the Wisdom of Community</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens by warning that &ldquo;whoever isolates himself seeks his own desire; he breaks out against all sound judgment&rdquo; (v.1). Isolation is portrayed not as innocent solitude but as a willful retreat from accountability, a way of insulating the self so that no one can question its cravings. The proverb assumes what the whole book of Proverbs teaches: that wisdom is gained in community, through the sharpening, correcting, and counsel of others." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Scripture consistently sets the wisdom of fellowship against the danger of going it alone. &ldquo;Iron sharpens iron, and one man sharpens another&rdquo; (Proverbs 27:17); &ldquo;Two are better than one... for if they fall, one will lift up his fellow&rdquo; (Ecclesiastes 4:9-10). The isolated person loses these gifts and slowly drifts into folly, raging against the very judgment that could have saved him. We are made for one another, and the flight from others is often, at root, the flight from God&rsquo;s correction." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This theme speaks pointedly to a culture that prizes self-sufficiency and offers endless ways to live without genuine community. The New Testament urges believers not to neglect &ldquo;to meet together&rdquo; but to stir one another up to love and good works (Hebrews 10:24-25). The healthy soul does not barricade itself behind its own desires but lives open to the loving challenge of others, where wisdom is found and pride is restrained." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Death-and-Life Power of the Tongue</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "No theme dominates Proverbs 18 more than the power of words. The chapter circles the mouth and the tongue from every angle: deep waters and a bubbling brook (v.4), the fool&rsquo;s lips that invite a beating (vv.6-7), the whisperer&rsquo;s delicious morsels (v.8), and at last the towering summary, &ldquo;Death and life are in the power of the tongue&rdquo; (v.21). This is the chapter&rsquo;s theology of speech: words are never neutral; they carry the power to give life or to deal death." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The New Testament gathers up and intensifies this wisdom. James devotes a whole chapter to the tongue, warning that though it is a small member it &ldquo;boasts of great things,&rdquo; that it is &ldquo;a fire, a world of unrighteousness,&rdquo; and that with it &ldquo;we bless our Lord and Father, and with it we curse people&rdquo; (James 3:5-9). Jesus declares that &ldquo;on the day of judgment people will give account for every careless word they speak&rdquo; (Matthew 12:36-37), for the mouth speaks out of the overflow of the heart." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The second line of verse 21 &mdash; &ldquo;those who love it will eat its fruits&rdquo; &mdash; adds the principle of harvest: we reap the consequences of the speech we sow. A life of careless, cutting, deceitful words bears a bitter crop; a life of true, kind, faithful words bears the fruit of life. To take this theme seriously is to ask God daily to set a guard over our mouths (Psalm 141:3) and to make our words a fountain of life to those who hear them." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Name of the LORD as Refuge</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;The name of the LORD is a strong tower; the righteous man runs into it and is safe&rdquo; (v.10). In Scripture the &ldquo;name&rdquo; of God is far more than a label; it is the sum of his revealed character and the reality of his presence. When God proclaimed his name to Moses, he declared himself &ldquo;The LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness&rdquo; (Exodus 34:6). To run into his name is to take shelter in all that he is." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The image of the strong tower draws on the fortified refuges of the ancient world, to which people fled when enemies attacked. The Psalms return to it again and again: &ldquo;Some trust in chariots and some in horses, but we trust in the name of the LORD our God&rdquo; (Psalm 20:7); &ldquo;Lead me to the rock that is higher than I, for you have been my refuge, a strong tower against the enemy&rdquo; (Psalm 61:2-3). The believer&rsquo;s security is not in fortifications of stone but in the living God himself." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The verse calls for action: the righteous &ldquo;runs into&rdquo; the tower. Refuge in God is not automatic; it is found by those who flee to him in faith, turning from self-reliance to take shelter in his name. In contrast to the proud who trust in their wealth (v.11), the righteous run to God and are kept safe. This is the very heart of biblical faith &mdash; to make the Lord our dwelling place and our defense in every trouble." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Humility Before Honor</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Before destruction a man&rsquo;s heart is haughty, but humility comes before honor&rdquo; (v.12). The proverb states a fixed order of the moral universe: pride leads to a fall, and humility opens the door to honor. The haughty heart is on the road to ruin even when it feels most secure, while the lowly heart is on the road to true exaltation. The sequence cannot be reversed or rushed; honor is the fruit of a humility that comes first." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This is one of the most repeated themes in all of Scripture. &ldquo;Pride goes before destruction, and a haughty spirit before a fall&rdquo; (Proverbs 16:18); &ldquo;The reward for humility and fear of the LORD is riches and honor and life&rdquo; (Proverbs 22:4). The New Testament makes it a refrain: &ldquo;God opposes the proud but gives grace to the humble&rdquo; (James 4:6, 1 Peter 5:5), and &ldquo;whoever humbles himself will be exalted&rdquo; (Matthew 23:12)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The pattern finds its perfect expression in Christ, who &ldquo;humbled himself by becoming obedient to the point of death,&rdquo; and was therefore &ldquo;highly exalted&rdquo; by God (Philippians 2:8-9). The way of the kingdom is the way of the lowered self that God then lifts up. To grasp at honor by pride is to court destruction; to walk humbly before God is to walk the road that leads to genuine and lasting honor." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Listening Before Speaking</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;If one gives an answer before he hears, it is his folly and shame&rdquo; (v.13). The proverb rebukes the impulse to respond before we have truly understood &mdash; to interrupt, to assume, to react. Such hasty speaking is named both folly and shame: folly because it acts without knowledge, shame because it dishonors both speaker and hearer. The chapter that so prizes the right use of words insists that wise speech begins with patient listening." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This wisdom is sharpened elsewhere in Proverbs: &ldquo;The one who states his case first seems right, until the other comes and examines him&rdquo; (Proverbs 18:17). We are prone to judge a matter on partial information, before we have heard the other side. Patient, careful listening guards us from rash conclusions and unjust judgments, and it honors the dignity of the person before us by truly seeking to understand them." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "James gathers the lesson into a memorable command: &ldquo;Let every person be quick to hear, slow to speak, slow to anger&rdquo; (James 1:19). Listening is an act of humility and love &mdash; a willingness to be slow, to receive, to give others our full attention before we offer our own words. In an age of instant reactions and rapid-fire opinions, the discipline of hearing before answering is a rare and precious mark of wisdom." }} />
            </div>

            {/* Theme 6 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Friend Who Sticks Closer Than a Brother</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;A man of many companions may come to ruin, but there is a friend who sticks closer than a brother&rdquo; (v.24). The proverb contrasts the breadth of many shallow acquaintances with the depth of one truly faithful friend. A crowd of fair-weather companions offers no security in the day of trouble; what the soul needs is the rare friend whose loyalty is more steadfast than even the bond of blood. Quality of friendship matters infinitely more than quantity." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Scripture gives this friendship flesh in the covenant love of Jonathan and David, and in the call of Proverbs elsewhere to a friend who &ldquo;loves at all times&rdquo; (17:17). The verb &ldquo;sticks&rdquo; suggests a bond that clings and holds fast, refusing to let go when others would drift away. Such a friend is one of God&rsquo;s greatest earthly gifts, and one of his clearest pictures of his own faithful love." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Ultimately this verse points beyond every human friend to Christ. He is the friend who sticks closer than a brother, who said, &ldquo;Greater love has no one than this, that someone lay down his life for his friends,&rdquo; and who called his followers friends rather than servants (John 15:13-15). He is the brother who is not ashamed to call us brothers (Hebrews 2:11), the one whose loyalty outlasts death itself. Every faithful friendship is a faint reflection of his unbreakable bond with his people." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* vv.1-2 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 1-2: Isolation and the Fool's Opinions</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Self-Willed and the Self-Expressing</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1</strong> &mdash; &ldquo;Whoever isolates himself seeks his own desire; he breaks out against all sound judgment.&rdquo; The one who cuts himself off does so to escape accountability and indulge the self, and ends up raging against wisdom itself. Isolation here is a chosen posture of the proud heart, not innocent solitude." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.2</strong> &mdash; &ldquo;A fool takes no pleasure in understanding, but only in expressing his opinion.&rdquo; The fool delights not in learning but in the sound of his own voice. He would rather reveal his heart in a flood of words than receive wisdom in humble silence." }} />
            </div>

            {/* vv.4-7 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 4-7: Deep Waters and a Fool's Ruin</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Mouth as Brook or Snare</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.4</strong> &mdash; &ldquo;The words of a man&rsquo;s mouth are deep waters; the fountain of wisdom is a bubbling brook.&rdquo; Words rise from the hidden depths of the heart; from the wise they flow like a fresh, life-giving stream. Speech is profound, revealing what lies within." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.6-7</strong> &mdash; &ldquo;A fool&rsquo;s lips walk into a fight, and his mouth invites a beating... A fool&rsquo;s mouth is his ruin, and his lips are a snare to his soul.&rdquo; The fool&rsquo;s reckless talk drags him into quarrels and traps the very one who spoke it. The same gift of speech is a brook in the wise and a snare in the fool." }} />
            </div>

            {/* vv.8, 10-11 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 8, 10-11: The Whisperer and the Strong Tower</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Gossip's Sweetness and God's Refuge</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.8</strong> &mdash; &ldquo;The words of a whisperer are like delicious morsels; they go down into the inner parts of the body.&rdquo; Gossip is sweet, not bitter &mdash; tasty tidbits we eagerly swallow, which then lodge deep and shape how we see others. Its very appeal is what makes it so corrosive." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>vv.10-11</strong> &mdash; &ldquo;The name of the LORD is a strong tower; the righteous man runs into it and is safe.&rdquo; The name of the LORD is his revealed character and presence; the righteous flee to him for refuge. Verse 11 sets the contrast: the rich man trusts in his wealth as &ldquo;a high wall in his imagination&rdquo; &mdash; a false security beside the true tower of God." }} />
            </div>

            {/* vv.12-14 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700 }}>Verses 12-14: Pride, Listening, and the Spirit</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Humility, Patience, and Inner Strength</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.12</strong> &mdash; &ldquo;Before destruction a man&rsquo;s heart is haughty, but humility comes before honor.&rdquo; Pride is the forerunner of ruin; the road to true honor runs through the low door of humility. The order cannot be reversed." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.13</strong> &mdash; &ldquo;If one gives an answer before he hears, it is his folly and shame.&rdquo; To speak before truly understanding is both foolish and disgraceful. Wise speech begins with patient listening." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.14</strong> &mdash; &ldquo;The spirit of a man will endure sickness, but a crushed spirit who can bear?&rdquo; A resilient spirit can carry the body through great affliction, but when the spirit itself is broken there is no inner strength left to draw upon. The health of the heart is the deepest matter." }} />
            </div>

            {/* v.21 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 700 }}>Verse 21: Death and Life in the Tongue</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Fruit of Our Words</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.21</strong> &mdash; &ldquo;Death and life are in the power of the tongue, and those who love it will eat its fruits.&rdquo; This is one of Scripture&rsquo;s weightiest words on speech: the tongue wields the power of death and life, able to crush or heal, curse or bless. And we will harvest the fruit of the words we cultivate. The verse anticipates James 3:6 and Jesus&rsquo; warning that we give account for every careless word (Matthew 12:36-37)." }} />
            </div>

            {/* vv.22, 24 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 22, 24: A Good Gift and a Faithful Friend</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Favor From the LORD and Steadfast Love</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.22</strong> &mdash; &ldquo;He who finds a wife finds a good thing and obtains favor from the LORD.&rdquo; A faithful spouse is a token of God&rsquo;s favor, a good gift from the Giver of every good thing. The proverb lifts our gratitude beyond the gift to the One who gives it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.24</strong> &mdash; &ldquo;A man of many companions may come to ruin, but there is a friend who sticks closer than a brother.&rdquo; A crowd of shallow companions offers no security; one truly faithful friend, whose loyalty surpasses even the bond of blood, is a priceless gift. This rare friendship points us to Christ, who lays down his life for his friends (John 15:13-15)." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>Resist Isolation and Embrace Community</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Whoever isolates himself seeks his own desire; he breaks out against all sound judgment&rdquo; (v.1). The chapter warns that cutting ourselves off from others is often a flight from accountability and a slow drift into folly. We were made for community, where wisdom is sharpened, pride is restrained, and we are kept from the deceptions of our own hearts." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "Practically, this means refusing to withdraw when we are tempted to pull away, especially in seasons of pride, shame, or self-pity. It means inviting the loving challenge of trusted friends, staying connected to a community of faith, and treating the counsel of others as a gift rather than a threat. Ask: where am I isolating myself to avoid being corrected, and who could I move toward instead?" }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>Steward the Power of Your Words</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Death and life are in the power of the tongue, and those who love it will eat its fruits&rdquo; (v.21). The chapter calls us to take our words with utmost seriousness, knowing they can crush or heal, tear down or build up. Our speech is never trivial; with it we deal in matters of life and death, and we will harvest the fruit of what we sow." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "This means refusing the &ldquo;delicious morsels&rdquo; of gossip (v.8), guarding against the reckless words that invite ruin (vv.6-7), and asking God to make our speech a bubbling brook of life (v.4). Pray with the psalmist, &ldquo;Set a guard, O LORD, over my mouth&rdquo; (Psalm 141:3), and aim that every word, as Paul urges, would &ldquo;give grace to those who hear&rdquo; (Ephesians 4:29)." }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>Run Into the Strong Tower</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;The name of the LORD is a strong tower; the righteous man runs into it and is safe&rdquo; (v.10). When trouble, fear, or temptation presses in, we are invited to flee not to our own strength or to false securities like wealth (v.11), but to God himself &mdash; to all that he is in his faithfulness, power, and steadfast love. Refuge in God is found by those who actively run to him in faith." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "In practice, &ldquo;running into the tower&rdquo; means turning to God in prayer at the first sign of trouble rather than as a last resort, preaching his character to our anxious hearts, and resting in who he has revealed himself to be (Exodus 34:6). It is a daily habit of fleeing to God as our refuge, confident that the one who shelters in his name is kept truly safe." }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Walk Humbly and Listen Before You Speak</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Two of the chapter&rsquo;s disciplines belong together: humility before honor (v.12) and listening before answering (v.13). Pride is the forerunner of ruin, and the path to true honor runs through the low door of humility. And the wise refuse to give an answer before they have truly heard, knowing that to speak before understanding is folly and shame." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "This calls for the daily, practical work of bowing low before God and being &ldquo;quick to hear, slow to speak&rdquo; (James 1:19). It means resisting the urge to interrupt, to assume, or to judge a matter before hearing the other side (v.17). Genuine listening is an act of humility and love, and it guards us from the rash conclusions and unjust judgments that wound relationships and dishonor God." }} />
            </div>

            {/* Application 5 - Discussion */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>Discussion Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "Verse 1 warns that the one who isolates himself &ldquo;breaks out against all sound judgment.&rdquo; Where are you tempted to withdraw from community to avoid accountability, and what would it look like to move toward others instead?" }} />
                <li dangerouslySetInnerHTML={{ __html: "&ldquo;Death and life are in the power of the tongue&rdquo; (v.21). Can you recall words that gave you life and words that dealt a kind of death? How does this verse change the way you think about your own speech this week?" }} />
                <li dangerouslySetInnerHTML={{ __html: "&ldquo;The name of the LORD is a strong tower&rdquo; (v.10). What false towers (wealth, reputation, control) are you tempted to run into instead, and what would it look like to flee to God&rsquo;s name as your refuge?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Verse 13 calls answering before hearing &ldquo;folly and shame.&rdquo; In what situations or relationships do you tend to speak before truly listening, and how could you practice being quick to hear and slow to speak?" }} />
                <li dangerouslySetInnerHTML={{ __html: "&ldquo;There is a friend who sticks closer than a brother&rdquo; (v.24). How does this verse point you to Christ, the friend who laid down his life, and how does his friendship shape the way you love and stay loyal to others?" }} />
              </ol>
            </div>

            {/* Application 6 - Prayer */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Father, your name is a strong tower; teach me to run into it and be safe. Guard me from the proud isolation that flees accountability, and root me deep in the community of your people, where wisdom is found and my heart is kept honest. Set a guard over my mouth, for death and life are in the power of the tongue; let my words be a bubbling brook of life that gives grace to all who hear, never the delicious poison of gossip or the reckless speech that invites ruin. Clothe me in humility, knowing that pride goes before destruction and that honor comes only through the low door of a lowered heart; make me quick to hear, slow to speak, and slow to anger. And thank you for the friend who sticks closer than a brother &mdash; for Jesus, who laid down his life and calls me his friend. Let his steadfast love be both my refuge and my pattern, that I might love others with the same faithful, unbreakable love. Amen." }} />
            </div>

          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of Proverbs 18.</p>
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
