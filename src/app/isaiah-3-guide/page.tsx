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
  { videoId: "pN3tKqWmBsX", title: "Isaiah 3: Judgment on Jerusalem and Judah" },
  { videoId: "vR8yZcLnDmQ", title: "When God Removes the Pillars of Society" },
  { videoId: "jT5wGhXpCkF", title: "Grinding the Face of the Poor: Leaders on Trial" },
  { videoId: "qM2sNbVtHrE", title: "The Daughters of Zion and the Reversal of Pride" },
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
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Isaiah Chapter 3</h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Isaiah 3 is a sustained portrait of a society collapsing from the inside out. The LORD announces that he is removing from Jerusalem and Judah every prop on which the nation has come to lean &mdash; not only bread and water, but every figure of stability: the mighty man and the soldier, the judge and the prophet, the elder and the skilled counselor. Into the resulting vacuum step the worst possible rulers &mdash; boys and infants &mdash; while the people turn on one another and the social order dissolves into mutual oppression. The chapter then turns its sharpest light on the leaders, who have devoured the vineyard and crushed the poor, and on the haughty daughters of Zion, whose finery the Lord will strip away. It is one of the Old Testament&rsquo;s most penetrating indictments of luxury built on injustice and of pride that precedes a fall." }} />
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
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>The Removal of Support and Supply (vv.1-3)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens with a divine title of terrifying weight: &ldquo;the Lord GOD of hosts&rdquo; &mdash; the Sovereign who commands the armies of heaven &mdash; is taking away from Jerusalem and Judah &ldquo;support and supply.&rdquo; The Hebrew uses a masculine and feminine form of the same root (<em>mashen</em> and <em>mashenah</em>), a poetic doubling meaning every conceivable kind of prop or staff. He begins with the most basic necessities of life: &ldquo;the whole supply of bread, and the whole supply of water&rdquo; (v.1). When the foundation of physical sustenance is withdrawn, the society has nothing left to fall back on." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "But the list quickly moves from bread and water to people. The LORD removes &ldquo;the mighty man and the soldier, the judge and the prophet, the diviner and the elder, the captain of fifty and the man of rank, the counselor and the skillful magician and the expert in charms&rdquo; (vv.2-3). These are the figures a nation depends on for defense, justice, guidance, governance, and wisdom. The judgment is not a foreign army at the gates &mdash; it is the quiet, devastating subtraction of every competent leader a society needs to function. To remove a nation&rsquo;s leadership is to remove its capacity to survive." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>Boys as Princes and Social Chaos (vv.4-5)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Into the leadership vacuum God places the most catastrophic possible replacements: &ldquo;And I will make boys their princes, and infants shall rule over them&rdquo; (v.4). The image is of immaturity, caprice, and incompetence enthroned. This is not merely a comment about the literal age of rulers but about their character &mdash; rulers without the wisdom, restraint, or formed judgment that govern a healthy society. When the experienced are gone, what remains is rule by impulse, by whim, by those incapable of weighing consequences." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The collapse is not only at the top; it spreads through the whole body of society. &ldquo;And the people will oppress one another, every one his fellow and every one his neighbor; the youth will be insolent to the elder, and the despised to the honorable&rdquo; (v.5). The normal structures of respect and order invert. The young despise the old; those of no standing trample those of dignity. This is what happens when judgment removes restraint: not external invasion but internal disintegration, a war of all against all in which neighbor preys on neighbor." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>No One Will Lead the Ruin (vv.6-8)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "So complete is the collapse that leadership becomes a burden no one will accept. A man grabs his brother and says, &ldquo;You have a cloak; you shall be our leader, and this heap of ruins shall be under your rule&rdquo; (v.6). The single qualification offered is the possession of a cloak &mdash; a faint trace of remaining dignity or property. But even this desperate offer is refused: &ldquo;I will not be a healer; in my house there is neither bread nor cloak; you shall not make me leader of the people&rdquo; (v.7). When ruin is total, no one wants the responsibility of presiding over it." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Verse 8 supplies the theological diagnosis beneath the chaos: &ldquo;For Jerusalem has stumbled, and Judah has fallen, because their speech and their deeds are against the LORD, defying his glorious presence.&rdquo; The collapse is not random misfortune or bad geopolitics. It is the consequence of a settled posture of defiance. Their words and their actions alike are set against the LORD; they provoke the very eyes of his glory. The nation has not merely drifted from God &mdash; it has positioned itself in open opposition, and the social ruin is the outworking of that opposition." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;It is you who have devoured the vineyard, the spoil of the poor is in your houses. What do you mean by crushing my people, by grinding the face of the poor? declares the Lord GOD of hosts.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>Isaiah 3:14-15 (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>Two Verdicts: Well and Woe (vv.9-11)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 9 exposes how brazen the sin has become: &ldquo;The look on their faces bears witness against them; they proclaim their sin like Sodom; they do not hide it.&rdquo; Sin has progressed past the stage of shame. Like Sodom, the people now flaunt their wickedness openly, wearing it on their faces, declaring it without concealment. The prophet adds the somber line, &ldquo;Woe to them! For they have brought evil on themselves&rdquo; &mdash; the harvest they reap is the harvest they planted." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Against the dark backdrop, Isaiah inserts a clarifying word of moral order: &ldquo;Tell the righteous that it shall be well with them, for they shall eat the fruit of their deeds. Woe to the wicked! It shall be ill with him, for what his hands have dealt out shall be done to him&rdquo; (vv.10-11). Even in a chapter of unrelenting judgment, the LORD does not collapse all distinctions. The righteous and the wicked do not share an identical fate. This deed-and-consequence symmetry is a foundation stone of biblical wisdom: people eat the fruit of what they sow, and God&rsquo;s judgment honors the difference between the two." }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>The Daughters of Zion and the Falling Sword (vv.16-26)</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter&rsquo;s closing movement turns to the haughty daughters of Zion, who walk &ldquo;with outstretched necks, glancing wantonly with their eyes, mincing along as they go, tinkling with their feet&rdquo; (v.16). It is a portrait of preening self-display &mdash; pride expressed in posture, ornament, and the deliberate sound of jingling anklets. In response, the Lord announces a comprehensive reversal: he will strip away their finery item by item &mdash; the anklets, headbands, crescents, perfume boxes, sashes, fine robes &mdash; and replace beauty with ruin: &ldquo;instead of perfume there will be rottenness; and instead of a belt, a rope; and instead of well-set hair, baldness; and instead of a rich robe, a skirt of sackcloth; and branding instead of beauty&rdquo; (v.24)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The chapter ends in mourning. &ldquo;Your men shall fall by the sword and your mighty men in battle&rdquo; (v.25). The very gates of the city &mdash; the place of assembly, commerce, and justice &mdash; &ldquo;shall lament and mourn,&rdquo; and Zion, &ldquo;ravaged, shall sit on the ground&rdquo; (v.26). The image is of a widow stripped of her husbands and sons, sitting desolate in the dust. The judgment that began with the removal of bread and water ends with the removal of the men themselves, and the proud city is left to grieve alone." }} />
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
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Removal of Stability as Judgment</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The dominant image of the chapter is subtraction. God does not, in these verses, send fire from heaven or an army at the gate; he simply removes the props &mdash; &ldquo;support and supply&rdquo; &mdash; on which the nation has learned to lean. The judgment is the withdrawal of the very things that make ordinary life possible: food, water, defense, justice, counsel, leadership. The catastrophe is not what arrives but what departs." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This is a profound way to understand divine judgment. Much of the stability we take for granted is a gift of common grace &mdash; the existence of wise leaders, of functioning institutions, of social trust, of basic provision. These are not guaranteed; they are sustained. When God hands a society over to the consequences of its defiance, he can do so simply by lifting his sustaining hand and letting the structures fall under their own weight. The horror of vv.1-3 is the horror of a world running on borrowed stability after the lender has called in the loan." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The doubled Hebrew word for &ldquo;support and supply&rdquo; signals comprehensiveness: every kind of prop, masculine and feminine, great and small. Nothing is exempt. A nation that imagines its competence, wealth, and institutions are self-generated is exposed as utterly dependent the moment the gift is withdrawn. The theme is a sober reminder that the stability we enjoy is on loan." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Special Accountability of Leaders</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "When the LORD enters into formal judgment in vv.12-15, he does not address the nation in general; he singles out &ldquo;the elders and princes of his people&rdquo; (v.14). The leaders are placed on trial. They were entrusted with the welfare of the people &mdash; in the ancient Near Eastern and biblical idiom, a ruler was a shepherd, charged with feeding, guiding, and protecting the flock. Instead, these shepherds have fed on the flock. The covenant standard for leadership is care for the vulnerable, and by that standard they have catastrophically failed." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The principle running through Scripture is that authority intensifies accountability. &ldquo;Your guides mislead you and they have swallowed up the course of your paths&rdquo; (v.12). Those entrusted with guidance who instead lead the people astray bear a heavier judgment, not a lighter one. The leaders are not condemned for failing at impossible tasks but for the specific betrayal of using their position to enrich themselves at the expense of those they were meant to serve." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This theme reverberates through the prophets &mdash; Ezekiel 34 against the shepherds of Israel, Jeremiah 23 against the leaders who scatter the flock &mdash; and into the New Testament warning that teachers will be judged with greater strictness (James 3:1). Isaiah 3 stands at the headwaters of that stream. The chapter insists that the question God asks of leaders is not how impressive they appeared but how they treated the weakest people under their care." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Oppression of the Poor as a Chief Sin</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The climactic charge against the leaders is not idolatry or ritual failure but economic predation: &ldquo;The spoil of the poor is in your houses&rdquo; (v.14). The wealth that fills the leaders&rsquo; homes is plunder taken from those least able to defend themselves. God speaks with white-hot intensity: &ldquo;What do you mean by crushing my people, by grinding the face of the poor?&rdquo; (v.15). The Hebrew verb behind &ldquo;grinding&rdquo; evokes a millstone pulverizing grain &mdash; the leaders are pictured as grinding the very faces of the poor into the dust." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Notice the possessive: &ldquo;my people.&rdquo; The poor are not anonymous victims; they belong to God, and an assault on them is an assault on him. This is why the prophets repeatedly treat the treatment of the vulnerable &mdash; the widow, the orphan, the sojourner, the poor &mdash; as a test case of true religion. A people can keep its festivals and offer its sacrifices and still stand condemned if it builds its prosperity on the backs of the powerless." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The chapter refuses any divorce between worship and justice. The same nation whose finery is described in such loving detail in vv.18-23 is the nation whose houses are full of the spoil of the poor. The luxury and the oppression are two faces of one reality. Isaiah&rsquo;s critique is not of wealth as such but of luxury that is funded by injustice &mdash; the perfume bought with what was wrung from the helpless." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Vineyard Image and Isaiah 5</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "In v.14 the LORD declares to the leaders, &ldquo;It is you who have devoured the vineyard.&rdquo; The vineyard is one of Isaiah&rsquo;s richest metaphors for the people of God, and this brief mention anticipates the full Song of the Vineyard in Isaiah 5:1-7, where the LORD plants a choice vineyard, tends it carefully, and looks for good grapes &mdash; but it yields only wild ones. There the vineyard is explicitly identified: &ldquo;the vineyard of the LORD of hosts is the house of Israel&rdquo; (5:7)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "By calling Israel God&rsquo;s vineyard already in chapter 3, Isaiah charges the leaders with a particularly heinous offense. The vineyard belongs to the LORD; the leaders were tenants and stewards, not owners. To &ldquo;devour the vineyard&rdquo; is to consume what was never theirs, to strip the LORD&rsquo;s own planting for private gain. The image transforms economic oppression into something like sacrilege &mdash; a plundering of God&rsquo;s treasured possession." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The vineyard motif runs all the way to the New Testament, where Jesus tells the parable of the wicked tenants who beat the owner&rsquo;s servants and kill his son (Mark 12:1-12), drawing directly on Isaiah 5. Isaiah 3 plants the seed of that whole trajectory: leaders entrusted with God&rsquo;s vineyard who exploit it for themselves will answer to the Owner who planted it." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Divine Reversal of Pride</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The treatment of the daughters of Zion (vv.16-24) is built entirely on the principle of reversal. Their sin is pride displayed in the body &mdash; outstretched necks, wanton eyes, mincing steps, tinkling anklets. Their punishment matches the sin point for point: the proudly arranged hair becomes baldness; the perfume becomes rottenness; the rich robe becomes sackcloth; the beauty becomes a brand. The very things in which they gloried become the instruments of their humiliation." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This is the consistent biblical pattern: &ldquo;God opposes the proud but gives grace to the humble&rdquo; (1 Peter 5:5, citing Proverbs 3:34). Isaiah will later expand it into a cosmic principle: &ldquo;The haughty looks of man shall be brought low, and the lofty pride of men shall be humbled, and the LORD alone will be exalted in that day&rdquo; (2:11, 17). The reversal is not arbitrary cruelty; it is the moral architecture of a universe in which the LORD alone is to be exalted, and every rival exaltation must finally come down." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The same logic that humbles the proud lifts the lowly. The God who grinds down haughty Zion is the God who, in the song of Mary, &ldquo;has brought down the mighty from their thrones and exalted those of humble estate&rdquo; (Luke 1:52). Isaiah 3 shows the downward half of that movement in vivid detail, and in doing so it warns every reader that whatever we exalt in place of God will one day be the very thing through which we are brought low." }} />
            </div>

            {/* Theme 6 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Prophetic Critique of Luxury Built on Injustice</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Few passages in Scripture catalog luxury as meticulously as Isaiah 3:18-23 &mdash; anklets, headbands, crescents, pendants, bracelets, scarves, headdresses, armlets, sashes, perfume boxes, amulets, signet rings, nose rings, festal robes, mantles, cloaks, handbags, garments, linen, turbans, and veils. The sheer length of the list is part of the rhetoric: it conjures a society awash in adornment, obsessed with appearance, refined in its tastes. And the prophet sets this catalog of finery directly beside the houses full of &ldquo;the spoil of the poor.&rdquo;" }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Isaiah is not a killjoy condemning beauty or ornament in itself. The prophetic complaint is sharper and more specific: it is the luxury that floats on a sea of exploitation that draws God&rsquo;s wrath. When the perfume and the spoil of the poor are in the same houses, the finery is no longer innocent. It has become the visible fruit of grinding the faces of the helpless, and so the LORD promises to convert every ornament into a sign of mourning." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This prophetic critique echoes through Amos&rsquo;s denunciation of those who lie on beds of ivory while the needy are sold for a pair of sandals (Amos 2:6; 6:4), and into James&rsquo;s warning to the rich whose wealth has rotted while they withheld the wages of their laborers (James 5:1-6). Isaiah 3 is a foundational text in this tradition: it refuses to let the splendor of a society conceal the cries of those it has plundered to pay for it." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* vv.1-3 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 1-3: Support and Supply Removed</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>The Props Are Taken Away</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1</strong> &mdash; &ldquo;For behold, the Lord GOD of hosts is taking away from Jerusalem and from Judah support and supply.&rdquo; The opening &ldquo;for&rdquo; ties this directly to the end of chapter 2 and its theme of human pride brought low. The title &ldquo;Lord GOD of hosts&rdquo; stresses sovereign command over heaven&rsquo;s armies. The doubled phrase &ldquo;support and supply&rdquo; (Hebrew <em>mashen umashenah</em>) means every kind of stay or prop, and the first item named is the most basic: &ldquo;the whole supply of bread, and the whole supply of water.&rdquo;" }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.2-3</strong> &mdash; The list then turns to the human pillars of society: &ldquo;the mighty man and the soldier, the judge and the prophet, the diviner and the elder, the captain of fifty and the man of rank, the counselor and the skillful magician and the expert in charms.&rdquo; Defense (mighty man, soldier, captain), justice (judge, elder), guidance (prophet, counselor), and even the popular sources of supposed wisdom (diviner, magician, charmer) are all swept away. The mention of diviners and charmers alongside legitimate offices hints that Judah had been leaning on illicit sources of security too. When every category of leader is gone, the society is left defenseless." }} />
            </div>

            {/* vv.4-8 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 4-8: Chaos and the Cause</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Infants Rule and No One Will Lead</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.4-5</strong> &mdash; &ldquo;And I will make boys their princes, and infants shall rule over them.&rdquo; Immaturity and caprice take the throne. The social fabric tears: &ldquo;the people will oppress one another, every one his fellow and every one his neighbor; the youth will be insolent to the elder, and the despised to the honorable.&rdquo; The normal hierarchies of respect invert. Where judgment removes restraint, neighbor turns on neighbor and the young trample the old. This is not invasion from outside but disintegration from within." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.6-7</strong> &mdash; Leadership becomes a burden no one will take. A man seizes his brother: &ldquo;You have a cloak; you shall be our leader, and this heap of ruins shall be under your rule.&rdquo; The lone qualification is owning a cloak. But the offer is refused: &ldquo;I will not be a healer; in my house there is neither bread nor cloak; you shall not make me leader of the people.&rdquo; The word &ldquo;healer&rdquo; pictures the nation as a wound too deep to bind. No one wants to preside over the ruin." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.8</strong> &mdash; The diagnosis: &ldquo;For Jerusalem has stumbled, and Judah has fallen, because their speech and their deeds are against the LORD, defying his glorious presence.&rdquo; Speech and deeds together &mdash; word and action &mdash; are set against the LORD. They defy &ldquo;his glorious presence&rdquo; (literally, &ldquo;the eyes of his glory&rdquo;). The collapse is the fruit of deliberate, open defiance against God himself." }} />
            </div>

            {/* vv.9-11 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 9-11: Sodom-Faced Sin and Two Destinies</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Well to the Righteous, Woe to the Wicked</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.9</strong> &mdash; &ldquo;The look on their faces bears witness against them; they proclaim their sin like Sodom; they do not hide it.&rdquo; Sin has reached the stage of shameless display. The face, which can no longer conceal the heart, testifies against them. The comparison to Sodom &mdash; the archetype of open, unashamed wickedness &mdash; is devastating. &ldquo;Woe to them! For they have brought evil on themselves.&rdquo; They are the authors of their own ruin." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.10-11</strong> &mdash; In the midst of judgment, a word of moral clarity: &ldquo;Tell the righteous that it shall be well with them, for they shall eat the fruit of their deeds. Woe to the wicked! It shall be ill with him, for what his hands have dealt out shall be done to him.&rdquo; The two ways are not collapsed into one fate. The righteous eat the good fruit of their deeds; the wicked are repaid in their own coin. This deed-consequence symmetry assures the faithful that God&rsquo;s judgment is not indiscriminate &mdash; he distinguishes righteous from wicked even when the whole society is under the rod." }} />
            </div>

            {/* vv.12-15 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700 }}>Verses 12-15: The LORD Enters into Judgment</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Grinding the Face of the Poor</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.12</strong> &mdash; &ldquo;My people &mdash; infants are their oppressors, and women rule over them. O my people, your guides mislead you and they have swallowed up the course of your paths.&rdquo; The tender repetition of &ldquo;my people&rdquo; shows God&rsquo;s grief. Those who should guide instead mislead; the very paths the people should walk have been swallowed up by leaders who confuse and exploit them rather than direct them rightly." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.13-14</strong> &mdash; &ldquo;The LORD has taken his place to contend; he stands to judge peoples. The LORD will enter into judgment with the elders and princes of his people.&rdquo; The courtroom is convened, and God himself is the prosecutor. The charge: &ldquo;It is you who have devoured the vineyard, the spoil of the poor is in your houses.&rdquo; The vineyard &mdash; the LORD&rsquo;s own people (anticipating 5:1-7) &mdash; has been consumed by the very men charged with tending it, and their homes are stocked with what they stripped from the poor." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.15</strong> &mdash; The indictment reaches its peak in a question of furious astonishment: &ldquo;What do you mean by crushing my people, by grinding the face of the poor? declares the Lord GOD of hosts.&rdquo; The verb &ldquo;grinding&rdquo; evokes pulverizing grain under a millstone &mdash; the faces of the poor pressed into dust. That God calls them &ldquo;my people&rdquo; makes the crime an assault on him. This is the theological heart of the chapter." }} />
            </div>

            {/* vv.16-26 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 700 }}>Verses 16-26: The Daughters of Zion and the Mourning Gates</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Finery Replaced with Mourning</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.16-17</strong> &mdash; &ldquo;Because the daughters of Zion are haughty and walk with outstretched necks, glancing wantonly with their eyes, mincing along as they go, tinkling with their feet, therefore the Lord will strike with a scab the heads of the daughters of Zion, and the LORD will lay bare their secret parts.&rdquo; The sin is pride enacted in the body; the judgment touches the same body. Display becomes disgrace." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.18-23</strong> &mdash; A long catalog of finery follows: anklets, headbands, crescents, pendants, bracelets, scarves, headdresses, armlets, sashes, perfume boxes, amulets, signet rings, nose rings, festal robes, mantles, cloaks, handbags, fine linen, turbans, and veils. &ldquo;In that day the Lord will take away&rdquo; (v.18) every item. The exhaustive list paints a society obsessed with adornment, the same society whose houses hold the spoil of the poor." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.24</strong> &mdash; The great reversal: &ldquo;Instead of perfume there will be rottenness; and instead of a belt, a rope; and instead of well-set hair, baldness; and instead of a rich robe, a skirt of sackcloth; and branding instead of beauty.&rdquo; Every glory is converted into its opposite. The final clause &mdash; branding instead of beauty &mdash; suggests the mark of a captive or slave, the ultimate humiliation of the proud." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.25-26</strong> &mdash; The chapter ends in war and grief: &ldquo;Your men shall fall by the sword and your mighty men in battle. And her gates shall lament and mourn; empty, she shall sit on the ground.&rdquo; The men who were removed in v.2 now fall in battle; the proud women are widowed. The personified gates &mdash; the seat of civic life &mdash; lament, and Zion sits desolate in the dust like a grieving widow. The judgment that began with the loss of bread ends with the loss of the men themselves." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>The Stability We Take for Granted Is a Gift</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Isaiah 3 begins not with fire or sword but with subtraction: God simply removes bread, water, leaders, and counsel, and the society falls under its own weight. It is a sobering reminder that the ordered, stable world we take for granted &mdash; wise leaders, functioning institutions, social trust, daily provision &mdash; is sustained by God&rsquo;s hand, not generated by our own competence." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is gratitude that turns into prayer. Rather than assuming the stability around us is permanent, we are invited to receive it as a daily gift and to ask God to sustain the props on which our communities lean &mdash; and to repent of the defiance that, in Judah, caused God to lift his sustaining hand. A nation or a life that imagines itself self-sufficient is one withdrawal away from chaos." }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>Leaders Are Judged by How They Treat the Weakest</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "When God convenes his courtroom, he summons the elders and princes &mdash; the leaders &mdash; and the charge against them is that they have devoured the vineyard and crushed the poor. The measure God applies to leadership is not impressiveness, achievement, or popularity but care for the vulnerable. Anyone who holds authority &mdash; in a family, a church, a business, a government &mdash; should hear this as a defining standard." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The searching question for every person with influence is simple: who are the poor under my care, and how am I treating them? The leaders of Judah used their position to enrich themselves at the expense of the helpless, and God treated it as an assault on himself. The same authority that magnifies our capacity to serve magnifies our accountability for how we use it." }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>Luxury Is Not Innocent When It Floats on Injustice</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Isaiah sets the long catalog of finery directly beside the houses full of the spoil of the poor. The prophet is not condemning beauty or ornament as such; he is exposing the luxury that is funded by exploitation. When the perfume and the plunder are in the same house, the perfume is no longer innocent &mdash; it is the visible fruit of grinding the faces of the helpless." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "This calls us to examine not just what we own but how it was obtained and at whose cost. It is possible to enjoy a refined, comfortable life while remaining blind to the supply chains, the underpaid labor, and the cut corners that make it cheap. Isaiah 3 invites an honest audit: does my comfort rest, anywhere, on someone else&rsquo;s being ground down?" }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>What We Exalt Will One Day Bring Us Low</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The daughters of Zion gloried in their hair, their perfume, their robes, their beauty &mdash; and the judgment turned each of those very things into a sign of mourning: baldness, rottenness, sackcloth, branding. The reversal of pride is the moral architecture of the universe in which the LORD alone is exalted; every rival exaltation must finally come down." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is a humbling self-examination: what am I exalting in place of God? Whatever we set up as the source of our identity and worth &mdash; appearance, status, achievement, wealth &mdash; is precisely what is most vulnerable to becoming the instrument of our humbling. The way of safety is to humble ourselves under God&rsquo;s hand now, that he may lift us up in due time, rather than be brought low." }} />
            </div>

            {/* Application 5 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>Discussion Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "God&rsquo;s judgment in vv.1-3 comes as the removal of stability rather than the arrival of disaster. What &ldquo;supports and supplies&rdquo; in your own life or community do you treat as guaranteed rather than as gifts to be received with gratitude?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The leaders are charged with devouring the vineyard and grinding the face of the poor (vv.14-15). If you hold any kind of authority, who are the vulnerable people most affected by your decisions, and how would they describe the way you treat them?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Isaiah places a long catalog of finery (vv.18-23) beside houses full of the spoil of the poor. Where might comfort or luxury in your life rest, even unknowingly, on someone else&rsquo;s exploitation?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Verses 10-11 insist that the righteous and the wicked do not share the same fate, even when judgment falls on a whole society. How does this two-ways assurance shape the way you live faithfully in a culture under judgment?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The daughters of Zion are humbled in exactly the things they exalted. What are you most tempted to glory in, and what would it look like to humble yourself in that area before God humbles it for you?" }} />
              </ol>
            </div>

            {/* Application 6 */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Lord GOD of hosts, you hold every prop of my life in your hand &mdash; the bread and water, the leaders and counsel, the stability I so easily take for granted. Teach me to receive these as gifts and never to set my speech and deeds against you as Judah did. Search my home for any spoil of the poor; show me where my comfort rests on another&rsquo;s being ground down, and give me the courage to make it right. Humble my pride before it becomes the instrument of my fall, and let me glory in nothing but you. You are the One who crushes the haughty and lifts the lowly &mdash; do both in me, that you alone may be exalted. Amen." }} />
            </div>

          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of Isaiah 3.</p>
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
