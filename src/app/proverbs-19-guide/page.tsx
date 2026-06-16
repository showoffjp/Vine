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
  { videoId: "nB4kZ7wXrTp", title: "Proverbs 19: Integrity, Patience, and the Fear of the LORD" },
  { videoId: "cV8mQ3yLhWd", title: "Better to Be Poor With Integrity" },
  { videoId: "gJ6rTnP2sFx", title: "Lending to the LORD: Generosity to the Poor" },
  { videoId: "uH9wKzXcRbM", title: "Many Plans, One Purpose: The Sovereignty of God" },
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
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Proverbs Chapter 19</h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Proverbs 19 gathers together some of the most practical and searching wisdom in the whole book. It opens by insisting that a poor person who walks in integrity is better than a fool whose speech is crooked, and from there it presses into the everyday realities of money, friendship, family, anger, speech, and the future. Along the way it confronts our habit of blaming God for self-inflicted trouble, exalts the quiet glory of overlooking an offense, calls a prudent spouse a gift from the LORD, and famously declares that whoever is generous to the poor &ldquo;lends to the LORD.&rdquo; Threaded through all of it is the chapter&rsquo;s deepest conviction: that human beings make many plans, but it is the purpose of the LORD that will stand, and that the fear of the LORD is the path that leads to life." }} />
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
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>Integrity Is Better Than Riches (v.1)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens with one of Proverbs&rsquo; favorite forms, the &ldquo;better than&rdquo; saying: &ldquo;Better is a poor person who walks in his integrity than one who is crooked in speech and is a fool&rdquo; (v.1). The comparison cuts straight against the assumptions of the world, which measures worth by wealth and standing. Wisdom insists that a life of integrity in poverty outranks a life of folly and twisted speech, whatever the bank balance. Character, not currency, is the true measure of a person." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The contrast is sharpened by the word &ldquo;crooked in speech.&rdquo; The fool here is not merely poor in judgment but dishonest in word, bending the truth to serve himself. Proverbs returns again and again to the conviction that what we say reveals what we are, and that crooked lips betray a crooked heart. To walk in integrity is to be the same person in the dark as in the light, and that wholeness is worth more than any riches gained by deceit." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>The Danger of Haste and Misplaced Blame (vv.2-3)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 2 warns against zeal without wisdom: &ldquo;Desire without knowledge is not good, and whoever makes haste with his feet misses his way.&rdquo; Energy and enthusiasm are not enough; passion uninformed by knowledge runs off the road. The person who rushes ahead without understanding stumbles past the very path he meant to walk. Good intentions hurried into action, without the discipline of knowledge, end in error." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Verse 3 exposes one of the most universal of human tendencies: &ldquo;When a man&rsquo;s folly brings his way to ruin, his heart rages against the LORD.&rdquo; Having wrecked his own life by his foolish choices, the fool then turns and blames God for the wreckage. It is a piercing observation about the human heart: we author our own troubles and then accuse heaven of injustice. Wisdom calls us instead to own our choices and trace ruin back to its true source." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>Wealth, Friends, and the Test of Adversity (v.4)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Wealth brings many new friends, but a poor man is deserted by his friend&rdquo; (v.4). With characteristic realism, Proverbs observes how prosperity and adversity sort our relationships. Money attracts a crowd, but it is often a crowd drawn to the money rather than the person. When the wealth is gone, so are many of the friends, and even those once thought loyal may quietly slip away." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The proverb is not cynical but clear-eyed, and the chapter returns to the theme more than once: &ldquo;Many seek the favor of a generous man, and everyone is a friend to a man who gives gifts&rdquo; (v.6), and &ldquo;all a poor man&rsquo;s brothers hate him; how much more do his friends go far from him&rdquo; (v.7). Adversity is a sieve that separates true friendship from convenient association. This sober realism prepares the reader to value the rare friend who loves through hardship, and to be that kind of friend to others." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Whoever is generous to the poor lends to the LORD, and he will repay him for his deed.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>Proverbs 19:17 (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>The Glory of Overlooking an Offense (v.11)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Good sense makes one slow to anger, and it is his glory to overlook an offense&rdquo; (v.11). Proverbs ties patience directly to wisdom: the person of good sense is not quick to flare up. But the verse goes further, calling the ability to overlook an offense a person&rsquo;s &ldquo;glory.&rdquo; Far from being weakness, the strength to let a slight pass without retaliation is a kind of crown, a mark of greatness rather than smallness." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This stands in deliberate contrast to the world&rsquo;s instinct that honor demands we answer every insult. Wisdom says the opposite: it takes more strength to absorb an offense than to avenge it. The chapter reinforces this with its warnings about the hot-tempered man who &ldquo;will pay the penalty&rdquo; (v.19) and the folly of those whose anger controls them. To be slow to anger and ready to forgive is to reflect the patience of God himself, who is &ldquo;slow to anger and abounding in steadfast love.&rdquo;" }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>Gifts From the LORD: A Prudent Wife and the Path of Life (vv.14, 17, 23)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;House and wealth are inherited from fathers, but a prudent wife is from the LORD&rdquo; (v.14). The proverb draws a line between what comes down to us through ordinary means and what comes as a direct gift of God. A house and an estate can be passed on by inheritance, but a wise and discerning spouse is a grace that no inheritance can secure. Such a partner is to be received with gratitude as something the LORD himself provides." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Two more verses extend this sense of God&rsquo;s personal involvement in our lives. &ldquo;Whoever is generous to the poor lends to the LORD, and he will repay him for his deed&rdquo; (v.17) makes the astonishing claim that kindness to the needy is treated as a loan to God, who repays in full. And &ldquo;the fear of the LORD leads to life, and whoever has it rests satisfied; he will not be visited by harm&rdquo; (v.23) names reverence for God as the root from which a satisfied, secure life grows. Together these verses reveal a God who is intimately engaged in the details of giving, providing, and rewarding." }} />
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
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Integrity Outweighs Wealth</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter begins and returns to the conviction that character matters more than possessions. &ldquo;Better is a poor person who walks in his integrity than one who is crooked in speech and is a fool&rdquo; (v.1). In a culture that often equated wealth with blessing and poverty with shame, this saying quietly subverts the scale of values. The poor man of integrity stands higher than the prosperous fool." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This does not mean Proverbs despises wealth; elsewhere it treats diligence and provision as good gifts. But it refuses to let money become the measure of a person&rsquo;s worth. The chapter is honest that wealth brings friends and poverty drives them away (vv.4, 6-7), yet it never concludes that the wealthy are therefore better. The treasure that lasts is a life of integrity, not a full storehouse." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Jesus carried this theme to its sharpest point when he asked what it profits a person to gain the whole world and forfeit his soul (Mark 8:36). Proverbs 19 trains us to ask the same question in the ordinary choices of daily life: am I building wealth at the cost of integrity, or am I content to walk uprightly even when it costs me? The answer reveals where our true treasure lies." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Taking Responsibility Instead of Blaming God</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;When a man&rsquo;s folly brings his way to ruin, his heart rages against the LORD&rdquo; (v.3) names one of the oldest patterns in the human heart. We make foolish choices, reap their painful consequences, and then accuse God of being unfair. The proverb traces the ruin to its real source &mdash; our own folly &mdash; and exposes the rage against God as misdirected and unjust." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This pattern runs all the way back to Eden, where Adam blamed Eve and, by implication, God who gave her, and Eve blamed the serpent (Genesis 3:12-13). James warns similarly that when we are tempted we must not say we are tempted by God, for each person is drawn away by his own desire (James 1:13-14). Wisdom requires the honesty to own our part rather than projecting our failures onto heaven." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "There is grace, not just rebuke, in this theme. The first step toward real change is the willingness to say, &ldquo;This is the fruit of my own choices.&rdquo; Only when we stop raging against God and start taking responsibility can we receive the wisdom, forgiveness, and help he offers. Honest ownership of our folly is the doorway to genuine repentance and a new path." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Generosity to the Poor as Lending to the LORD</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 17 contains one of the most beautiful promises in all of Proverbs: &ldquo;Whoever is generous to the poor lends to the LORD, and he will repay him for his deed.&rdquo; The image is breathtaking. When we give to someone who can never pay us back, God himself steps in as the borrower, regarding the kindness as a loan made directly to him. The poor person may have nothing to return, but God guarantees the debt." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Jesus made the same identification explicit when he said that whatever we do for the least of his brothers, we do for him (Matthew 25:40). To care for the hungry, the stranger, the sick, and the poor is to minister to Christ in disguise. Proverbs 19:17 thus anticipates the gospel&rsquo;s teaching that love for God and love for our needy neighbor are bound together and cannot be separated." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The promise that God &ldquo;will repay&rdquo; frees generosity from anxiety. We do not give to the poor in hope that they will somehow reward us, nor do we give grudgingly as though our resources will run out. We give in confidence that the King of heaven stands behind every gift, and that no act of mercy is ever finally lost. The ledger is kept by God himself, and he never defaults." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Divine Sovereignty Over Human Plans</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Many are the plans in the mind of a man, but it is the purpose of the LORD that will stand&rdquo; (v.21). This verse holds together two truths in perfect balance. Human beings really do plan, and our planning is not pointless; yet over and behind all our intentions stands the settled purpose of God, which alone will finally prevail. Our plans are real, but his purpose is decisive." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Proverbs returns to this theme often: &ldquo;The heart of man plans his way, but the LORD establishes his steps&rdquo; (16:9), and &ldquo;the lot is cast into the lap, but its every decision is from the LORD&rdquo; (16:33). James gives the New Testament counterpart, rebuking those who confidently say, &ldquo;Today or tomorrow we will go into such and such a town,&rdquo; and urging us instead to say, &ldquo;If the Lord wills, we will live and do this or that&rdquo; (James 4:13-15). We plan; God governs." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This truth is meant to produce not passivity but peace. We are called to think, to plan, and to act wisely, yet we hold our plans with open hands, trusting that God&rsquo;s purpose is good and unstoppable. When our plans fail, we are not adrift; the purpose of the LORD still stands, and it is wiser and kinder than our own. To rest in his sovereignty is to be freed from the tyranny of having to control the future." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Fear of the LORD That Leads to Life</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;The fear of the LORD leads to life, and whoever has it rests satisfied; he will not be visited by harm&rdquo; (v.23). The fear of the LORD is the foundational theme of the whole book of Proverbs, named at the outset as &ldquo;the beginning of knowledge&rdquo; (1:7). It is not cringing terror but reverent awe &mdash; a wholehearted reverence for God that orders every other part of life. Here that reverence is shown to be the very road to life." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Notice the fruit the verse promises: life, satisfaction, and security. The one who fears the LORD &ldquo;rests satisfied&rdquo; &mdash; a deep contentment that does not depend on circumstances. The chapter pairs this with verse 16, &ldquo;Whoever keeps the commandment keeps his life,&rdquo; binding reverence for God to obedience to his word. To honor God and to walk in his ways is to guard the soul." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The satisfaction promised here points beyond temporal blessing to the deeper rest the gospel offers. Jesus invited the weary to come to him and find rest for their souls (Matthew 11:28-29), and he is the one in whom the fear of the LORD and the love of God are perfectly joined. To fear the LORD is, in the end, to find the only life that truly satisfies and the only security that cannot be taken away." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* V1 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: GOLD, fontSize: "1.15rem", marginBottom: 10 }}>Verse 1 - Integrity Over Crooked Speech</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Better is a poor person who walks in his integrity than one who is crooked in speech and is a fool.&rdquo; The chapter opens with a &ldquo;better than&rdquo; saying that elevates character above wealth. A poor man whose conduct is whole and honest is worth more than a fool whose words are twisted. Integrity, not income, is the true measure of a life." }} />
            </div>

            {/* V2-3 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: ROSE, fontSize: "1.15rem", marginBottom: 10 }}>Verses 2-3 - Haste and Misplaced Blame</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Desire without knowledge is not good, and whoever makes haste with his feet misses his way. When a man&rsquo;s folly brings his way to ruin, his heart rages against the LORD.&rdquo; Zeal that outruns knowledge stumbles off the path, and hurry leads us astray. Worse, when our own folly wrecks our lives, we are tempted to turn and accuse God of the ruin we ourselves caused. Wisdom slows down to learn and owns its own failures." }} />
            </div>

            {/* V4, 6-7 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.15rem", marginBottom: 10 }}>Verses 4, 6-7 - Wealth and Friendship</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Wealth brings many new friends, but a poor man is deserted by his friend&rdquo; (v.4). The proverb observes with clear eyes how money draws a crowd and poverty scatters it. Verses 6-7 press the same point: many court the generous and the gift-giver, but the poor man finds even his brothers and friends withdrawing from him. The sayings expose how prosperity and adversity test the reality of our relationships." }} />
            </div>

            {/* V11 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: GREEN, fontSize: "1.15rem", marginBottom: 10 }}>Verse 11 - The Glory of Overlooking an Offense</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Good sense makes one slow to anger, and it is his glory to overlook an offense.&rdquo; Wisdom and patience belong together; the discerning person is not quick to flare up. And the strength to let a slight pass without retaliation is here called a person&rsquo;s &ldquo;glory&rdquo; &mdash; a crown rather than a weakness. To absorb an offense in patience is greater than to avenge it." }} />
            </div>

            {/* V14, 16, 17 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: TEAL, fontSize: "1.15rem", marginBottom: 10 }}>Verses 14, 16-17 - Gifts, Commandment, and Generosity</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "&ldquo;House and wealth are inherited from fathers, but a prudent wife is from the LORD&rdquo; (v.14). What money cannot buy and inheritance cannot guarantee, God himself gives. Verse 16 adds, &ldquo;Whoever keeps the commandment keeps his life,&rdquo; binding obedience to the guarding of the soul. And verse 17 makes its famous promise: &ldquo;Whoever is generous to the poor lends to the LORD, and he will repay him for his deed&rdquo; &mdash; God stands behind every gift to the needy as the One who repays." }} />
            </div>

            {/* V20-21 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: GOLD, fontSize: "1.15rem", marginBottom: 10 }}>Verses 20-21 - Counsel and the Purpose of the LORD</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Listen to advice and accept instruction, that you may gain wisdom in the future. Many are the plans in the mind of a man, but it is the purpose of the LORD that will stand.&rdquo; Verse 20 calls us to the humble, teachable posture that grows wise over time. Verse 21 sets all our planning under God&rsquo;s sovereign purpose: we may devise many plans, but his will alone is sure to prevail. We plan in humility, and God governs in faithfulness." }} />
            </div>

            {/* V23 */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.15rem", marginBottom: 10 }}>Verse 23 - The Fear of the LORD Leads to Life</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "&ldquo;The fear of the LORD leads to life, and whoever has it rests satisfied; he will not be visited by harm.&rdquo; Reverent awe of God is not a burden but a path &mdash; it leads to life, and to a satisfied rest that circumstances cannot steal. The one who fears the LORD finds a security rooted not in his own strength but in God. This verse gathers up the chapter&rsquo;s wisdom and grounds it in the reverence that is the beginning of knowledge." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* App 1 */}
            <div style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: "1.4rem", color: GOLD, marginBottom: 12 }}>Choose Integrity Over Advantage</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Proverbs 19:1 forces a question we face in countless small decisions: will I keep my integrity even when bending the truth would bring an advantage? The poor man who walks in integrity is held up as better than the prosperous fool with crooked speech. In a world that constantly rewards the shortcut and the convenient lie, wisdom calls us to be the same person in private and in public, in the dark and in the light." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This plays out in concrete ways: the expense report, the resume, the conversation about a colleague, the promise we are tempted to break quietly. Each small choice either builds or erodes the wholeness of a life. Choosing integrity may sometimes cost us money, opportunity, or standing &mdash; but Proverbs insists that a clear conscience and an undivided heart are worth more than anything we could gain by deceit." }} />
            </div>

            {/* App 2 */}
            <div style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: "1.4rem", color: ROSE, marginBottom: 12 }}>Own Your Choices Instead of Blaming God</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 3 holds up a mirror to a habit most of us recognize. When our own foolishness brings trouble, our first instinct is often to rage &mdash; at our circumstances, at other people, even at God. The application is humbling and freeing at once: before we accuse heaven, we are to ask honestly how our own choices contributed to the ruin. Taking responsibility is the first step out of the pit." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This does not mean every hardship is our fault; Scripture knows the reality of suffering we did not cause. But where our folly is the root, honesty about it is the only path to change. The same God we might be tempted to blame stands ready to forgive, to give wisdom generously to those who ask (James 1:5), and to set our feet on a better path. Repentance begins where blame ends." }} />
            </div>

            {/* App 3 */}
            <div style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: "1.4rem", color: TEAL, marginBottom: 12 }}>Give to the Poor as Giving to God</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 17 transforms the way we think about generosity. When we give to someone who cannot repay us, we are not throwing money away; we are lending to the LORD, who stands behind the debt and promises to repay. This frees us to be open-handed without anxiety, knowing that no act of mercy is ever finally lost. The poor person may have nothing to return, but God himself keeps the account." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Practically, this means looking for the needy person God has placed in our path and responding with concrete kindness &mdash; food, money, time, presence. Jesus identified himself so closely with the least of his brothers that to serve them is to serve him (Matthew 25:40). The next time generosity feels costly or risky, verse 17 invites us to see the face of Christ in the one who receives, and to give as those whose repayment is guaranteed by the King of heaven." }} />
            </div>

            {/* App 4 */}
            <div style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: "1.4rem", color: PURPLE, marginBottom: 12 }}>Plan Wisely, but Trust God&rsquo;s Purpose</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 21 invites a posture of humble planning. We are right to think, prepare, and set goals, but we hold our plans with open hands, knowing that the purpose of the LORD will stand. This guards us from two errors: the anxious need to control every outcome, and the passive refusal to plan at all. We plan as wise stewards and trust as faithful children." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "When our plans collapse &mdash; the job falls through, the door closes, the year goes differently than we hoped &mdash; this verse becomes an anchor. God&rsquo;s purpose has not failed; it is simply wiser and deeper than ours. Like James, we learn to say, &ldquo;If the Lord wills, we will live and do this or that&rdquo; (James 4:15), finding rest in the conviction that his good purpose, not our fragile plans, governs the future." }} />
            </div>

            {/* Reflection questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, marginTop: 8 }}>
              <h3 style={{ color: GOLD, fontSize: "1.2rem", marginBottom: 18 }}>Reflection Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 1.9, paddingLeft: 22, margin: 0 }}>
                <li style={{ marginBottom: 14 }} dangerouslySetInnerHTML={{ __html: "Where am I currently tempted to trade integrity for advantage? What would it look like to choose to walk in integrity even if it costs me something?" }} />
                <li style={{ marginBottom: 14 }} dangerouslySetInnerHTML={{ __html: "Is there a trouble in my life right now where I have been raging against God or others, when honesty would trace at least part of it back to my own choices?" }} />
                <li style={{ marginBottom: 14 }} dangerouslySetInnerHTML={{ __html: "Who is a poor or needy person God has placed within my reach? How might I &ldquo;lend to the LORD&rdquo; this week by showing concrete generosity to them?" }} />
                <li style={{ marginBottom: 14 }} dangerouslySetInnerHTML={{ __html: "Where do I struggle to overlook an offense and find myself nursing anger? What would it mean to treat the strength to forgive as my &ldquo;glory&rdquo; rather than my weakness?" }} />
                <li style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: "Which of my plans am I gripping too tightly? How does &ldquo;the purpose of the LORD will stand&rdquo; change the way I hold my hopes for the future?" }} />
              </ol>
            </div>

          </div>
        )}

      </div>

      {/* VIDEO SECTION (always visible) */}
      <div style={{ borderTop: `1px solid ${BORDER}`, background: CARD, padding: "48px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", color: TEXT, marginBottom: 8, textAlign: "center" }}>Watch &amp; Listen</h2>
          <p style={{ color: MUTED, fontSize: "0.95rem", textAlign: "center", marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: "Teaching and reflections on the wisdom of Proverbs 19." }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <p style={{ color: TEXT, fontSize: "0.95rem", padding: "14px 16px", margin: 0, lineHeight: 1.5 }}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
