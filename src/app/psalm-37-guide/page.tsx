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
  "Delight in the Lord",
  "The Righteous and the Wicked",
  "Waiting on God",
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
    heading: "Psalm 37 &mdash; Delight in the Lord, Wait on God",
    reference: "Psalm 37:1&ndash;40",
    paragraphs: [
      "Psalm 37 is one of the great wisdom psalms of the Psalter &mdash; a lengthy, unhurried meditation on one of the most vexing questions of human experience: Why do the wicked prosper? The psalmist, identified by tradition as David and supported by the superscription&rsquo;s heading in several ancient manuscripts, does not engage this question with detached philosophical analysis. He addresses it pastorally, personally, and repeatedly, as someone who has watched evildoers flourish for decades and has learned &mdash; slowly, painfully &mdash; where the answer truly lies.",
      "The psalm is an acrostic &mdash; each section begins with a successive letter of the Hebrew alphabet, running from aleph to taw. This is no decorative literary device. Acrostic structure signals that the poet is giving a complete and comprehensive treatment: from A to Z, from the first letter to the last, everything that needs to be said about this subject is being said. The acrostic form also serves as a memory device; the psalm was designed to be internalized, to become part of the fabric of the reader&rsquo;s mind and heart, so that when fretfulness arises, the answer is already there.",
      "The psalm&rsquo;s structure revolves around a repeated refrain that functions as the emotional center of gravity: &ldquo;Fret not yourself because of evildoers.&rdquo; This exact phrase appears in verse 1, is echoed in verse 7, and restated in verse 8. The repetition is not redundancy; it is the same instruction given to someone who keeps sliding back into anxiety, someone who watches the wicked succeed and feels the pull of envy, resentment, and despair. The psalm is not addressed to people who have already achieved serene detachment; it is addressed to people who are actively tempted to fret, and it says: stop. Here is why. Here is what to do instead.",
      "The contrast between the righteous and the wicked is the organizing principle of the entire psalm. But the contrast does not operate on the level of present circumstances &mdash; in the present, the wicked may indeed flourish, spread themselves like a green tree, and seem to have the better deal. The contrast operates on the level of time. The wicked are described repeatedly in terms of their transience: they wither like grass (v.2), they shall be cut off (v.9), they shall perish (v.20), their day is coming (v.13), they shall vanish like smoke (v.20). The righteous, by contrast, inherit the land and dwell in it forever (v.29). The psalm invites its reader to take a long view, to see present circumstances against the backdrop of eternity.",
      "Several verses of Psalm 37 have become among the most memorized in Scripture. Verse 4: &ldquo;Delight yourself in the Lord, and he will give you the desires of your heart.&rdquo; Verse 5: &ldquo;Commit your way to the Lord; trust in him, and he will act.&rdquo; Verse 7: &ldquo;Be still before the Lord and wait patiently for him; fret not yourself over the one who prospers in his way, over the man who carries out evil devices.&rdquo; Verse 23: &ldquo;The steps of a man are established by the LORD, when he delights in his way.&rdquo; Verse 25: &ldquo;I have been young, and now am old, yet I have not seen the righteous forsaken or his children begging for bread.&rdquo; These verses have sustained believers through unemployment, persecution, injustice, and death &mdash; not as glib assurances but as hard-won testimonies from someone who has lived long enough to see the whole story.",
      "The psalm reaches its theological summit in verse 11: &ldquo;But the meek shall inherit the land and delight themselves in abundant peace.&rdquo; This verse is so central to the biblical vision of redemption that Jesus quotes it directly in the Beatitudes: &ldquo;Blessed are the meek, for they shall inherit the earth&rdquo; (Matthew 5:5). The word &ldquo;meek&rdquo; here does not mean weakness or timidity; it describes those who have surrendered the management of their own vindication to God, who have stopped trying to seize what they need and have learned to receive from his hand. In quoting Psalm 37:11, Jesus is not inventing a new teaching but amplifying one of the Psalter&rsquo;s deepest convictions: the ones who wait on God will outlast those who take matters into their own hands.",
      "Psalm 37 closes with a summary that ties the whole together: &ldquo;The Lord loves justice; he will not forsake his saints. They are preserved forever, but the children of the wicked shall be cut off. The righteous shall inherit the land and dwell upon it forever&rdquo; (vv.28&ndash;29). The character of God &mdash; his love of justice &mdash; is the guarantee behind every promise in the psalm. He is not indifferent to the prosperity of the wicked or the suffering of the righteous; he is the God who will act, in his time, with perfect justice. The psalm&rsquo;s final verse is its doxology: &ldquo;The salvation of the righteous is from the Lord; he is their stronghold in the time of trouble. The Lord helps them and delivers them; he delivers them from the wicked and saves them, because they take refuge in him&rdquo; (vv.39&ndash;40). Salvation, strength, help, deliverance &mdash; all from the Lord, all for those who take refuge in him. This is the logic of the entire psalm compressed into two verses.",
    ],
  },
  {
    id: "Delight in the Lord",
    heading: "Delight in the Lord",
    reference: "Psalm 37:1&ndash;9",
    paragraphs: [
      "The opening verse of Psalm 37 begins with a prohibition: &ldquo;Fret not yourself because of evildoers; be not envious of wrongdoers.&rdquo; The Hebrew word translated &ldquo;fret&rdquo; (charah) means to burn or kindle &mdash; it is the word used for anger and agitation, for the feeling of heat that rises in the chest when something is unjust. The psalmist is addressing a very specific emotional state: the burning resentment that comes from watching people who are doing wrong seem to get ahead, while those who are doing right seem to fall behind. This is not an abstract theological problem; it is a lived experience, a daily temptation for anyone who takes morality seriously.",
      "The reason not to fret is given immediately in verse 2: &ldquo;For they will soon fade like the grass and wither like the green herb.&rdquo; This is not wishful thinking; it is the pastoral wisdom of long observation. Grass grows brilliantly green in the spring, lush and thick &mdash; and then withers in the summer heat with a suddenness that can take the breath away. The prosperity of the wicked is precisely like this: vivid, impressive, apparently flourishing, and then gone. The psalmist is not naive about the present; he is insistent on the future.",
      "Verse 3 introduces the first of several positive commands that form the backbone of the psalm&rsquo;s practical counsel: &ldquo;Trust in the Lord, and do good; dwell in the land and befriend faithfulness.&rdquo; Trust in the Lord is the foundational act &mdash; it is the decision to rest one&rsquo;s weight on God&rsquo;s character and promises rather than on one&rsquo;s own ability to manage outcomes. But trust is not passive; it is paired with action: &ldquo;do good.&rdquo; The antidote to envious fretting is not merely mental reorientation but practical engagement in doing what is right, regardless of whether it seems to be &lsquo;working.&rsquo; &ldquo;Dwell in the land&rdquo; suggests remaining, persisting, not uprooting oneself in despair &mdash; and &ldquo;befriend faithfulness&rdquo; might also be translated &ldquo;feed on faithfulness,&rdquo; suggesting that loyalty to God is itself the nourishment that sustains the soul.",
      "Verse 4 is perhaps the most beloved in the psalm and one of the most misunderstood in all of Scripture: &ldquo;Delight yourself in the Lord, and he will give you the desires of your heart.&rdquo; The misunderstanding arises when this verse is read as a formula for getting what one wants: enjoy God enough and he will deliver your wish list. But the logic of the verse runs in precisely the opposite direction. When a person truly delights in the Lord &mdash; when God himself becomes the object of deepest joy and longing &mdash; then their desires are progressively transformed. The person who delights in God begins to desire what God desires: holiness, justice, love, the flourishing of others, the advancement of his kingdom. The promise is not that God will give us our natural desires; it is that as we delight in him, our desires become desires that he delights to fulfill.",
      "Verse 5 presses further: &ldquo;Commit your way to the Lord; trust in him, and he will act.&rdquo; The word &ldquo;commit&rdquo; in Hebrew is galal, which means to roll &mdash; as in rolling a heavy stone out of the way. The image is of taking the burden of one&rsquo;s own plans and strategies and rolling them off one&rsquo;s own back onto God&rsquo;s. This is not irresponsibility; it is the recognition that outcomes are ultimately in God&rsquo;s hands, not ours. The promise is extraordinarily simple: &ldquo;he will act.&rdquo; Not &ldquo;he will act if you earn it&rdquo; or &ldquo;he will act when you have trusted perfectly.&rdquo; Just: he will act. The one who rolls their way onto God will discover that God takes it up.",
      "Verse 6 follows with the consequence of this commitment: &ldquo;He will bring forth your righteousness as the light, and your justice as the noonday.&rdquo; The image is of vindication that is patient but ultimately undeniable. Justice deferred is not justice denied; God will bring it forth as surely as the sun rises. The noonday sun cannot be argued with, hidden, or minimized &mdash; it floods everything with light. In the same way, God&rsquo;s vindication of the righteous, when it comes, will be total and unmistakable. Those who waited quietly will be seen to have been right all along.",
      "Verses 7&ndash;9 form one of the most concentrated passages of practical wisdom in the psalm: &ldquo;Be still before the Lord and wait patiently for him; fret not yourself over the one who prospers in his way, over the man who carries out evil devices. Refrain from anger, and forsake wrath! Fret not yourself; it tends only to evil. For the evildoers shall be cut off, but those who wait for the Lord shall inherit the land.&rdquo; The command to &ldquo;be still&rdquo; (Hebrew: dom) means to be silent, to cease agitation, to let go of the internal noise of anxiety and resentment. Combined with &ldquo;wait patiently,&rdquo; it paints a picture of a soul that has found its rest in God&rsquo;s justice even before that justice is visible. The warning about anger is pastoral and precise: &ldquo;it tends only to evil.&rdquo; Unchecked fretfulness leads not to justice but to our own sin &mdash; to the very behavior we despise in the wicked.",
      "The positive counterpart to all this waiting and trusting is given in verse 9: those who wait for the Lord shall inherit the land. This phrase &mdash; inheriting the land &mdash; is one of the great covenant promises of the Old Testament, rooted in God&rsquo;s promise to Abraham and renewed throughout the Psalms and prophets. It signals not merely geographic possession but eschatological hope: the final state in which the righteous dwell securely in the presence of God. Jesus&rsquo; beatitude (&ldquo;the meek shall inherit the earth,&rdquo; Matthew 5:5) widens this promise to its cosmic scope. The land is not just Canaan; it is the renewed creation in which righteousness dwells.",
    ],
  },
  {
    id: "The Righteous and the Wicked",
    heading: "The Righteous and the Wicked",
    reference: "Psalm 37:10&ndash;26",
    paragraphs: [
      "The middle section of Psalm 37 develops the contrast between the wicked and the righteous through a series of vivid images and sharp observations. Verse 10 begins with one of the psalm&rsquo;s most direct statements of temporal perspective: &ldquo;In just a little while, the wicked will be no more; though you look carefully at his place, he will not be there.&rdquo; The phrase &ldquo;in just a little while&rdquo; is the psalmist&rsquo;s repeated insistence on the brevity of the wicked&rsquo;s moment. From a human viewpoint, the wicked may flourish for decades. From God&rsquo;s vantage point, their prosperity is a momentary flicker before the darkness.",
      "Verse 11 contains the theological center of the entire psalm and of the fifth beatitude: &ldquo;But the meek shall inherit the land and delight themselves in abundant peace.&rdquo; The word translated &ldquo;meek&rdquo; (anawim) in Hebrew refers to those who are oppressed and humble, who have learned not to grasp for their own rights but to place themselves under God&rsquo;s authority. The anawim are not the powerful; they are precisely the people who seem, in the world&rsquo;s estimation, to be at a disadvantage. Yet the psalm promises them not just survival but inheritance &mdash; not just a corner of the land but the whole of it &mdash; and not just the land but &ldquo;abundant peace&rdquo; (shalom). Shalom in Hebrew is not the mere absence of conflict; it is wholeness, flourishing, everything working as it should.",
      "Verses 12&ndash;15 contrast the plots of the wicked with the response of the Lord: &ldquo;The wicked plots against the righteous and gnashes his teeth at him, but the Lord laughs at the wicked, for he sees that his day is coming.&rdquo; The image of God laughing at the wicked (see also Psalm 2:4) is not cruel mockery but the laughter of sovereign certainty. God sees the whole trajectory of history; he knows where the wicked are heading. Their elaborate plans, their weapons, their scheming &mdash; all of it will turn on them: &ldquo;Their sword shall enter their own heart, and their bows shall be broken&rdquo; (v.15). The weapons fashioned against the righteous will wound their makers.",
      "Verse 16 introduces one of the psalm&rsquo;s great paradoxes: &ldquo;Better is the little that the righteous has than the abundance of many wicked.&rdquo; This verse cuts against every worldly calculation of success. In purely economic terms, &ldquo;the abundance of many wicked&rdquo; wins. But the psalm insists that what the righteous has &mdash; even if little in material terms &mdash; is of greater value because it is held within a relationship with God, rooted in his blessing and sustained by his faithfulness. The wicked&rsquo;s abundance will be broken; the righteous&rsquo;s little will not be taken away.",
      "Verses 17&ndash;20 continue this theme through a series of contrasting images: the arms of the wicked will be broken, but the Lord upholds the righteous. The righteous man&rsquo;s days are known to the Lord; his inheritance will last forever (v.18). Even in times of disaster and famine, the righteous will have enough (v.19) &mdash; while the wicked, like the beauty of the fields and like smoke, will vanish (v.20). The wicked are described as both like the beauty of the meadows &mdash; visually impressive &mdash; and like smoke: beautiful to look at but insubstantial, gone with the wind.",
      "Verses 21&ndash;22 offer a practical distinction that is ethically sharp: &ldquo;The wicked borrows but does not pay back, but the righteous is generous and gives; for those blessed by the Lord shall inherit the land, but those cursed by him shall be cut off.&rdquo; The contrast between borrowing-without-repaying and generous-giving is not merely about financial ethics; it reflects two fundamental orientations toward the world. The wicked take &mdash; they consume resources and give nothing back; they treat others as means to their ends. The righteous give &mdash; they are fountains, not drains; they enrich the community around them. And the promise to the generous is inheritance; the judgment on the taker is to be cut off.",
      "Verse 23 is one of the most comforting in the Bible for anyone facing uncertainty about their future: &ldquo;The steps of a man are established by the Lord, when he delights in his way; though he fall, he shall not be cast headlong, for the Lord upholds his hand.&rdquo; The word &ldquo;established&rdquo; (Hebrew: kon) means to be made firm, secure, set in place &mdash; the opposite of tottering or slipping. God does not merely watch the steps of his beloved; he establishes them, directs them, makes them sure. And when the righteous person stumbles &mdash; as they will; the text assumes falling, not exemption from it &mdash; they will not be utterly cast down. The Lord holds their hand. The image is of a parent walking with a child: the child may stumble, but the parent&rsquo;s grip does not loosen.",
      "Verse 25 is the most autobiographical verse in the psalm and one of the most frequently quoted in the entire Psalter: &ldquo;I have been young, and now am old, yet I have not seen the righteous forsaken or his children begging for bread.&rdquo; The speaker is testifying from a lifetime of observation &mdash; from youth to old age &mdash; that the pattern holds. This is not a statistical claim that no righteous person has ever suffered poverty; it is a covenantal testimony that God does not abandon his people. The word &ldquo;forsaken&rdquo; (azab) is the same word used when children abandon their parents or when a soldier deserts his post. God does not desert the righteous; he does not walk away from those who have trusted him.",
      "Verse 26 is the logical corollary: &ldquo;He is ever lending generously, and his children become a blessing.&rdquo; The life of the righteous is characterized not by hoarding but by lending &mdash; which requires the trust that God will replenish what is given. And this generosity flows to the next generation: the children of the righteous become a blessing. The fruit of a life lived in trust and generosity does not end with the individual; it propagates forward into families, communities, and history.",
    ],
  },
  {
    id: "Waiting on God",
    heading: "Waiting on God",
    reference: "Psalm 37:27&ndash;40",
    paragraphs: [
      "The final movement of Psalm 37 draws together the threads of the psalm&rsquo;s argument and arrives at its most grounded and personal conclusions. Verse 27 begins with a twofold command that summarizes the psalm&rsquo;s ethical core: &ldquo;Turn away from evil and do good; so shall you dwell forever.&rdquo; Active moral engagement is not optional for the person who trusts in God: turning away from evil is insufficient without doing good, and doing good without turning from evil is self-contradictory. The promise attached to this dual command is expansive: &ldquo;so shall you dwell forever.&rdquo; The word &ldquo;dwell&rdquo; here carries the sense of secure habitation, of being at home and at rest. The one who pursues goodness and avoids evil will ultimately be permanently established.",
      "Verse 28 grounds this promise in the character of God: &ldquo;For the Lord loves justice; he will not forsake his saints. They are preserved forever, but the children of the wicked shall be cut off.&rdquo; The theological foundation for all the psalm&rsquo;s promises is not a cosmic mechanism but a personal God who loves justice. Because God himself loves justice &mdash; because it is constitutive of his character, not merely something he approves of from a distance &mdash; the world will ultimately be just. The present injustice is not God&rsquo;s final word; it is a temporary state that his love of justice will not allow to persist forever. The saints (Hebrew: chasidim, the faithful ones, those bound to God in covenant loyalty) are preserved &mdash; kept, guarded, maintained &mdash; forever.",
      "Verses 29&ndash;31 paint the portrait of the righteous person in full: &ldquo;The righteous shall inherit the land and dwell upon it forever. The mouth of the righteous utters wisdom, and his tongue speaks justice. The law of his God is in his heart; his steps do not slip.&rdquo; The righteous person is characterized from the inside out: the law of God in the heart (echoing Deuteronomy 6 and the promise of the new covenant in Jeremiah 31), which produces wise and just speech, which results in steps that do not slip. The sequence matters. The transformation begins at the center &mdash; the heart &mdash; and works outward through word and deed. This is not external conformity to rules; it is the fruit of a heart that has been re-oriented around God&rsquo;s word.",
      "Verses 32&ndash;33 describe the particular danger faced by the righteous: &ldquo;The wicked watches for the righteous and seeks to put him to death. The Lord will not abandon him to his power or let him be condemned when he is brought to trial.&rdquo; The wicked do not merely ignore the righteous; they actively target them. The righteous person who refuses to participate in corruption, who exposes injustice by the contrast of their life, makes themselves a threat to those whose power depends on the system remaining corrupt. But the promise is that the Lord will not abandon his own to this kind of attack. When the righteous are brought to trial &mdash; as Joseph, as Daniel, as Jesus himself was brought to trial &mdash; they will not ultimately be condemned.",
      "Verse 34 returns to the psalm&rsquo;s repeated refrain but now with a positive framing: &ldquo;Wait for the Lord and keep his way, and he will exalt you to inherit the land; you will look on when the wicked are cut off.&rdquo; Waiting on the Lord is not passive resignation; it is paired with &ldquo;keep his way&rdquo; &mdash; active fidelity in the path God has marked out. The promise is exaltation &mdash; not in the sense of pride or status, but in the sense of being lifted up, given the inheritance, placed in the position that God has always intended for his people.",
      "Verses 35&ndash;36 offer one of the psalm&rsquo;s most vivid illustrations: &ldquo;I have seen a wicked, ruthless man, spreading himself like a green laurel tree. But he passed away, and behold, he was no more; though I sought him, he could not be found.&rdquo; The image of the spreading tree is arresting: this is not a withered or sickly wicked person but one who is flourishing visibly, dominating the landscape, impressive in their growth and strength. And then: gone. No trace. The psalmist looked for him and could not find him. This is testimony from lived experience &mdash; the psalmist has actually watched this happen. The tree that seemed so permanent was not.",
      "Verses 37&ndash;38 contrast the &ldquo;man of peace&rdquo; with the fate of transgressors: &ldquo;Mark the blameless and behold the upright, for there is a future for the man of peace. But transgressors shall be altogether destroyed; the future of the wicked shall be cut off.&rdquo; The command to &ldquo;mark&rdquo; or &ldquo;observe&rdquo; the blameless person is a call to pay attention to the right thing. We are tempted to watch the wicked &mdash; to monitor their success with envious anxiety. The psalm says: watch the right people. Look at the person who has trusted God through decades of trial. Consider what their life looks like in the long run. There is a future for the man of peace; the wicked&rsquo;s future is to have no future.",
      "The psalm&rsquo;s final two verses (39&ndash;40) serve as its doxological conclusion and have the quality of a creed: &ldquo;The salvation of the righteous is from the Lord; he is their stronghold in the time of trouble. The Lord helps them and delivers them; he delivers them from the wicked and saves them, because they take refuge in him.&rdquo; Every verb in these verses is active and divine: the Lord saves, strengthens, helps, delivers. The righteous are not those who have accumulated enough merit to earn God&rsquo;s protection; they are those who take refuge in him. The Hebrew word for &ldquo;refuge&rdquo; (chasah) involves the image of hiding under a covering, nestling in a sheltered place &mdash; the same image used in Psalm 91:4, of hiding under the shadow of God&rsquo;s wings.",
      "The closing word of Psalm 37 is not a threat but a promise: &ldquo;saves them, because they take refuge in him.&rdquo; Salvation comes to those who flee to God. The psalm that began with the burning question of why the wicked prosper ends not with a philosophical answer but with a relational one: the answer is God himself. Not God as an explanation, but God as a refuge, a stronghold, a deliverer. Those who have learned to take refuge in him &mdash; who have stopped fretting and started trusting, stopped grasping and started waiting, stopped watching the wicked and started delighting in the Lord &mdash; these are the ones whose inheritance is secure, whose steps are established, whose future is the renewed creation that the meek shall inherit.",
      "The Christian reads Psalm 37 through the lens of Jesus, who is himself the fulfillment of the pattern it describes. He was the truly meek one (Matthew 11:29: &ldquo;I am gentle and lowly in heart&rdquo;) who inherited not a corner of Canaan but the whole earth (Psalm 2:8). He was the one whose steps were established by the Father even through the valley of the shadow of death. He was the one who, when brought to trial, was not abandoned but vindicated by resurrection. And it is in union with him &mdash; in his inheritance, his vindication, his life &mdash; that those who take refuge in the Lord receive every promise that Psalm 37 announces.",
    ],
  },
];

const videoItems = [
  { videoId: "C7GHFZQFWGE", title: "Psalm 37 - Delight Yourself in the Lord" },
  { videoId: "VgBIl0aCrm4", title: "The Psalms of Ascent - Wisdom in the Psalter" },
  { videoId: "Hu5a-1g2Grw", title: "Psalm 37 Bible Study - Wait on God" },
  { videoId: "7RdI2a44nGc", title: "The Meek Shall Inherit the Earth - Matthew 5 and Psalm 37" },
];

export default function Psalm37GuidePage() {
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
          <div style={{ display: "inline-block", background: `${ACCENT}33`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Psalms Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 37
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A wisdom psalm on trusting God when the wicked seem to prosper &mdash; structured as a Hebrew alphabet acrostic, this psalm calls God&rsquo;s people to delight in the Lord, commit their way, be still and wait, and trust that the meek shall inherit the earth.
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
            >
              {t}
            </button>
          ))}
        </nav>

        {currentSection && (
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

        <section style={{ marginTop: "3.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Explore Psalm 37&rsquo;s wisdom on delighting in God, waiting patiently, and trusting the Lord&rsquo;s justice through these video teachings.
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

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Delight Yourself in the Lord</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Psalm 37 does not promise the righteous an easy path &mdash; it promises them an established one. The Lord who knows each step, upholds the falling, and will not forsake his saints is the same God who calls us to stop fretting about the wicked and to delight in him. The meek &mdash; those who have surrendered the management of their own vindication to God &mdash; shall inherit the earth. Jesus says so. The psalm said so first.
          </p>
        </div>
      </main>
    </div>
  );
}
