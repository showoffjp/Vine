"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "09b1A8Fdvc8", title: "Psalm 57 -- Refuge in the Shadow of Your Wings" },
  { videoId: "8kvFD8aT8mU", title: "David in the Cave (1 Samuel 22, 24)" },
];

function VideoEmbed({ v }: { v: { videoId: string; title: string } }) {
  const [ready, setReady] = useState(false);
  return (
    <div
      onClick={() => setReady(true)}
      style={{ position: "relative", paddingBottom: "56.25%", background: "#000", borderRadius: 10, overflow: "hidden", cursor: "pointer", border: `1px solid ${BORDER}` }}
    >
      {ready ? (
        <iframe
          src={`https://www.youtube.com/embed/${v.videoId}?autoplay=1`}
          title={v.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      ) : (
        <>
          <img src={`https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`} alt={v.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 0, height: 0, borderTop: "12px solid transparent", borderBottom: "12px solid transparent", borderLeft: "20px solid #fff", marginLeft: 4 }} />
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(0,0,0,0.85))", padding: "1.5rem 1rem 0.75rem", color: "#fff", fontSize: "0.88rem", fontWeight: 600 }}>{v.title}</div>
        </>
      )}
    </div>
  );
}

export default function Psalm57Page() {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, sans-serif)", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #0c0a06 0%, #1a1408 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: GOLD, fontSize: "0.78rem" }}>Psalm 57</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(217,119,6,0.12)", border: `1px solid rgba(217,119,6,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>Davidic Miktam &mdash; In the Cave</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 57: My Heart Is Steadfast,<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>I Will Awake the Dawn</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A miktam of David, written when he fled from Saul into the cave &mdash; sheltering under the shadow of God&rsquo;s wings until the storms of destruction pass, his heart steadfast, resolved to awake the dawn with song and exalt God above the heavens.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "David"], ["Occasion", "1 Samuel 22/24"], ["Genre", "Miktam / Trust"], ["Refrain", "v. 5, 11"]].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, marginBottom: 2 }}>{k}</div>
                <div style={{ fontSize: "0.92rem", fontWeight: 600, color: TEXT }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", gap: 0, overflowX: "auto" }}>
          {tabs.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: tab === i ? `2px solid ${GOLD}` : "2px solid transparent", color: tab === i ? TEXT : MUTED, cursor: "pointer", fontFamily: "inherit", fontSize: "0.88rem", fontWeight: tab === i ? 600 : 400, whiteSpace: "nowrap", transition: "color 0.2s" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.5rem" }}>

        {tab === 0 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: Song From the Cave</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 57 is a miktam of David composed, according to its superscription, &ldquo;when he fled from Saul, in the cave.&rdquo; The reference is to one of the cave episodes of David&rsquo;s fugitive years &mdash; either the cave of Adullam (1 Samuel 22) or the cave at En-gedi where David spared Saul&rsquo;s life (1 Samuel 24). The setting is significant: David is hiding underground, surrounded by enemies, with nothing but a cave wall between himself and death. And yet from this place of hiding rises one of the most exuberant songs of trust in the entire Psalter." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm divides cleanly into two halves, each closing with the same magnificent refrain: &ldquo;Be exalted, O God, above the heavens! Let your glory be over all the earth!&rdquo; (vv. 5, 11). The first half (vv. 1-5) is dominated by petition and the description of danger; the second half (vv. 6-11) bursts into praise and the resolve to sing. Derek Kidner observes the movement: &ldquo;The same man who begins by cowering under the divine wings ends by summoning the dawn with his music. The cave becomes a concert hall; the place of hiding becomes the place of praise.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The central image of the first half is shelter under God&rsquo;s wings: &ldquo;in the shadow of your wings I will take refuge, till the storms of destruction pass by&rdquo; (v. 1). The image evokes a mother bird sheltering her young, or perhaps the wings of the cherubim over the ark of the covenant. Calvin: &ldquo;David, hidden in a literal cave, finds his true hiding place not in the rock but in the wings of God. The cave could collapse; the wings of the Almighty are an unfailing refuge.&rdquo; This is one of Scripture&rsquo;s tenderest pictures of divine protection, echoed by Jesus&rsquo; lament over Jerusalem (Matthew 23:37: &lsquo;how often would I have gathered your children together as a hen gathers her brood under her wings&rsquo;)." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The turning point of the psalm comes in verse 7: &ldquo;My heart is steadfast, O God, my heart is steadfast! I will sing and make melody!&rdquo; The doubled declaration &mdash; &lsquo;my heart is steadfast&rsquo; &mdash; is emphatic. Spurgeon comments: &ldquo;He says it twice, as if to convince himself and to nail his colors to the mast. A steadfast heart is fixed, established, immovable &mdash; not tossed about by every wave of fear. And the fruit of the steadfast heart is song.&rdquo; The Hebrew word for &lsquo;steadfast&rsquo; (nakon) means fixed, prepared, established &mdash; the same root used of a firmly founded building." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "One of the most beautiful resolutions in the Psalter follows in verse 8: &ldquo;Awake, my glory! Awake, O harp and lyre! I will awake the dawn!&rdquo; David, in the darkness of the cave and the darkness of night, resolves to wake before the sunrise and rouse the dawn itself with his praise. Matthew Henry: &ldquo;He will not wait for the dawn to wake him; he will wake the dawn. So eager is his soul to praise God that he outstrips the rising sun.&rdquo; The image of &lsquo;awaking the dawn&rsquo; has inspired countless believers to make the early morning a time of worship." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 57 demonstrates the transforming power of worship in the midst of crisis. David&rsquo;s circumstances do not change during the psalm &mdash; he is still hunted, still in the cave &mdash; yet his entire orientation shifts from fear to triumphant praise. This is not denial or escapism; it is the recognition that God&rsquo;s glory and faithfulness are larger realities than the present danger. The psalm models how worship reorders the soul: by exalting God above the heavens (the refrain), the believer puts every earthly threat in its proper, diminished place. The cave could not contain David&rsquo;s song, because his confidence rested not in his hiding place but in the God whose glory fills all the earth." }} />

            <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
              <h3 style={{ color: TEXT, fontSize: "1.15rem", fontWeight: 600, marginBottom: "1rem" }}>Video Resources</h3>
              <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
                {videos.map(v => <VideoEmbed key={v.videoId} v={v} />)}
              </div>
            </div>
          </div>
        )}

        {tab === 1 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Major Themes</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {[
                {
                  color: GOLD,
                  title: "Refuge in the Shadow of God's Wings",
                  body: "The opening image governs the entire first half of the psalm: &ldquo;in the shadow of your wings I will take refuge, till the storms of destruction pass by&rdquo; (v. 1). Hidden in a literal cave, David locates his true refuge not in the rock walls around him but in the protective wings of God. The image is one of the tenderest in Scripture, evoking a mother bird sheltering her young beneath her wings. The same metaphor appears in Psalm 17:8, 36:7, 61:4, 63:7, and 91:4, forming a rich biblical theology of divine protection. Calvin notes that the temporary nature of the threat is also captured: David takes refuge &lsquo;till the storms of destruction pass by&rsquo; &mdash; the danger is real but not permanent, and the wings shelter him through it. This theme culminates in Jesus&rsquo; tender lament over Jerusalem (Matthew 23:37), where he longs to gather the city&rsquo;s children &lsquo;as a hen gathers her brood under her wings.&rsquo; The God of Psalm 57 is the same God who, in Christ, spreads his wings of protection over all who flee to him."
                },
                {
                  color: PURPLE,
                  title: "The Steadfast Heart in the Midst of Danger",
                  body: "The pivot of the psalm is the doubled declaration of verse 7: &ldquo;My heart is steadfast, O God, my heart is steadfast! I will sing and make melody!&rdquo; The Hebrew &lsquo;nakon&rsquo; (steadfast) means fixed, established, firmly founded &mdash; the opposite of a heart tossed about by fear. The repetition is emphatic, like a man planting his feet and refusing to be moved. Spurgeon notes that the steadfast heart is the wellspring of song: &ldquo;A wavering heart cannot sing; only the heart that is fixed on God can make melody in the cave.&rdquo; This theme reveals that the source of stability in crisis is not the absence of danger but the fixedness of the heart upon God. The believer&rsquo;s task is to establish the heart &mdash; to fix it firmly on God&rsquo;s character and promises &mdash; so that when the storms come, it does not waver. Psalm 112:7 describes the same reality: &lsquo;He is not afraid of bad news; his heart is firm, trusting in the LORD.&rsquo; The steadfast heart is the achievement of faith, and its fruit is praise."
                },
                {
                  color: TEAL,
                  title: "Awaking the Dawn With Praise",
                  body: "Verse 8 contains one of the most evocative resolutions in the Psalter: &ldquo;Awake, my glory! Awake, O harp and lyre! I will awake the dawn!&rdquo; David, in the darkness, resolves to rouse himself before sunrise and wake the very dawn with his music. Rather than waiting for the morning to summon him to praise, he will summon the morning. Matthew Henry: &ldquo;He is so eager to praise God that he will not let the sun rise before him; he will be up first, and his music shall be the dawn&rsquo;s alarm.&rdquo; The phrase &lsquo;my glory&rsquo; likely refers to David&rsquo;s soul or spirit &mdash; the noblest part of his being, which he rouses to worship. This theme has profoundly shaped Christian devotional practice, inspiring the tradition of early morning prayer and the conviction that the first waking thoughts of the day belong to God. The one whose heart is steadfast cannot wait until convenient hours to praise; worship spills out before the dawn."
                },
                {
                  color: ROSE,
                  title: "Caught in Their Own Trap",
                  body: "Verse 6 describes the self-defeating schemes of the enemies: &ldquo;They set a net for my steps; my soul was bowed down. They dug a pit in my way, but they have fallen into it themselves.&rdquo; The image of the trapper caught in his own trap is a recurring biblical motif (Psalm 7:15, 35:8, Proverbs 26:27) expressing the moral structure of the universe: evil schemes tend to recoil upon their makers. Longman notes that this is not merely poetic justice but a reflection of God&rsquo;s providential governance, in which the wicked are often ensnared by their own devices. For David in the cave, the assurance that his enemies&rsquo; traps would backfire was a ground of confidence. This theme assures the righteous that they need not engineer the downfall of their persecutors; the very schemes of the wicked carry the seeds of their own destruction, under the sovereign hand of God who turns evil against itself."
                },
                {
                  color: GREEN,
                  title: "God Exalted Above the Heavens",
                  body: "The refrain that closes both halves of the psalm is its theological summit: &ldquo;Be exalted, O God, above the heavens! Let your glory be over all the earth!&rdquo; (vv. 5, 11). This is the deepest desire of the worshipping heart &mdash; not primarily personal deliverance but the exaltation of God&rsquo;s glory throughout creation. Kidner observes that the refrain lifts the psalm above mere self-interest: &ldquo;David&rsquo;s ultimate concern is not his own safety but God&rsquo;s glory. The cave becomes the vantage point from which he prays for the exaltation of God over all the earth.&rdquo; The cosmic scope &mdash; above the heavens, over all the earth &mdash; reveals that the God who shelters one fugitive in one cave is the God whose glory is meant to fill the entire universe. This theme connects the personal and the cosmic: the same God who attends to David&rsquo;s individual crisis is the King whose glory will one day cover the earth as the waters cover the sea (Habakkuk 2:14). The psalm thus moves from the cave to the cosmos, from personal refuge to universal praise."
                },
              ].map(th => (
                <div key={th.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, borderLeft: `3px solid ${th.color}`, padding: "1.5rem" }}>
                  <h3 style={{ color: th.color, fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{th.title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: th.body }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 2 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.5rem" }}>Verse by Verse Commentary</h2>
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 57 &mdash; 11 verses in two halves, each closing with the refrain</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1", color: GOLD, heading: "In the Shadow of Your Wings", text: "&ldquo;Be merciful to me, O God, be merciful to me, for in you my soul takes refuge; in the shadow of your wings I will take refuge, till the storms of destruction pass by.&rdquo; The doubled plea for mercy conveys urgency. The image of refuge under God&rsquo;s wings is the governing metaphor of the first half. Calvin: &ldquo;Hidden in a cave, David finds his true shelter in the wings of God; the rock may fail, but the Almighty&rsquo;s wings never.&rdquo; The danger is real but temporary &mdash; &lsquo;till the storms pass by.&rsquo;" },
                { ref: "v. 2-3", color: GOLD, heading: "God Who Fulfills His Purpose for Me", text: "&ldquo;I cry out to God Most High, to God who fulfills his purpose for me. He will send from heaven and save me.&rdquo; David trusts that God has a purpose for his life that the enemies cannot thwart. This is a profound theological anchor: God &lsquo;fulfills his purpose for me&rsquo; &mdash; the same confidence Paul expresses in Philippians 1:6 (&lsquo;he who began a good work in you will bring it to completion&rsquo;). Spurgeon: &ldquo;The believer&rsquo;s comfort is that God will not abandon a half-finished work; he completes what he begins.&rdquo;" },
                { ref: "v. 4", color: ROSE, heading: "My Soul Among Lions", text: "&ldquo;My soul is in the midst of lions; I lie down amid fiery beasts &mdash; the children of man, whose teeth are spears and arrows, whose tongues are sharp swords.&rdquo; The enemies are likened to ravenous beasts whose words are weapons. The image of lying down among lions captures the helplessness of David&rsquo;s position. Longman: &ldquo;The most dangerous weapons named here are not literal but verbal &mdash; teeth, tongues, swords &mdash; the slander and threats of violent men.&rdquo;" },
                { ref: "v. 5", color: GREEN, heading: "Be Exalted, O God (Refrain)", text: "The refrain closes the first half: &ldquo;Be exalted, O God, above the heavens! Let your glory be over all the earth!&rdquo; Even amid danger, David&rsquo;s deepest concern is God&rsquo;s glory, not merely his own safety. Kidner: &ldquo;The prayer rises from the cave to the cosmos; the fugitive prays for the exaltation of God over all the earth.&rdquo; The refrain transforms the psalm from a plea for rescue into an act of worship." },
                { ref: "v. 6", color: ROSE, heading: "Fallen Into Their Own Pit", text: "&ldquo;They set a net for my steps; my soul was bowed down. They dug a pit in my way, but they have fallen into it themselves.&rdquo; The trappers are trapped. The recurring biblical motif of the wicked caught in their own schemes expresses God&rsquo;s providential justice. Matthew Henry: &ldquo;The mischief they designed for David recoiled upon themselves; such is the just retribution of God, who makes the wicked the instruments of their own ruin.&rdquo; The word &lsquo;Selah&rsquo; invites reflection on this reversal." },
                { ref: "v. 7", color: PURPLE, heading: "My Heart Is Steadfast", text: "The pivot of the psalm, doubled for emphasis: &ldquo;My heart is steadfast, O God, my heart is steadfast! I will sing and make melody!&rdquo; The Hebrew &lsquo;nakon&rsquo; means fixed, established, immovable. The steadfast heart is the source of song. Spurgeon: &ldquo;He nails his colors to the mast and declares his heart fixed; and from the fixed heart pours the melody.&rdquo; This is the turning point from petition to exuberant praise." },
                { ref: "v. 8", color: TEAL, heading: "I Will Awake the Dawn", text: "&ldquo;Awake, my glory! Awake, O harp and lyre! I will awake the dawn!&rdquo; David rouses his soul (&lsquo;my glory&rsquo;) and his instruments, resolving to wake before sunrise and summon the dawn with praise. Matthew Henry: &ldquo;He will not let the sun rise before him; his music shall be the dawn&rsquo;s alarm.&rdquo; This verse has shaped the Christian tradition of early morning worship, the first waking thoughts belonging to God." },
                { ref: "v. 9-10", color: GREEN, heading: "Among the Nations, to the Clouds", text: "&ldquo;I will give thanks to you, O Lord, among the peoples; I will sing praises to you among the nations. For your steadfast love is great to the heavens, your faithfulness to the clouds.&rdquo; David&rsquo;s praise is not confined to Israel but is offered &lsquo;among the nations&rsquo; &mdash; a missional impulse that Paul cites in Romans 15:9 as evidence that the Gentiles would glorify God. The cosmic scale of God&rsquo;s steadfast love (to the heavens) and faithfulness (to the clouds) matches the cosmic scope of the praise." },
                { ref: "v. 11", color: GREEN, heading: "Be Exalted, O God (Refrain)", text: "The refrain closes the second half, identical to verse 5: &ldquo;Be exalted, O God, above the heavens! Let your glory be over all the earth!&rdquo; The repetition frames the psalm and reveals its ultimate purpose. Kidner: &ldquo;The psalm ends where its heart has been all along &mdash; not in David&rsquo;s deliverance but in God&rsquo;s glory filling the earth.&rdquo; The fugitive&rsquo;s song from the cave becomes a prayer for the universal exaltation of God." },
              ].map(vs => (
                <div key={vs.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", borderLeft: `3px solid ${vs.color}` }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: vs.color, textTransform: "uppercase", letterSpacing: "0.08em" }}>{vs.ref}</span>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: TEXT }}>{vs.heading}</span>
                  </div>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.92rem" }} dangerouslySetInnerHTML={{ __html: vs.text }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 3 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Application &amp; Reflection</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {[
                {
                  color: GOLD,
                  icon: "&#9670;",
                  title: "Finding Refuge Under God's Wings",
                  body: "When you are in your own &lsquo;cave&rsquo; &mdash; a season of hiding, fear, or feeling cornered &mdash; Psalm 57 invites you to locate your true refuge not in your circumstances but in God himself. David was in a literal cave, but his real shelter was &lsquo;the shadow of your wings.&rsquo; Practice consciously taking refuge in God: picture yourself sheltered beneath his protective wings, safe not because the danger has passed but because the Almighty surrounds you. The storms of destruction will pass by; the wings remain. This image is meant to be returned to again and again whenever fear threatens to overwhelm.",
                  prayer: "O God, be merciful to me. In the shadow of your wings I take refuge until these storms of destruction pass by. My circumstances have not changed, but I am safe because you surround me. Shelter me beneath your wings, and let me rest in your protection. Amen."
                },
                {
                  color: PURPLE,
                  icon: "&#9826;",
                  title: "Establishing a Steadfast Heart",
                  body: "&lsquo;My heart is steadfast, O God, my heart is steadfast!&rsquo; A steadfast heart is not given automatically; it is established through deliberate fixing of the heart on God. This happens through the repeated rehearsal of God&rsquo;s character, the memorization of his promises, and the discipline of returning the heart to him again and again. When your heart feels tossed about by fear and uncertainty, you can take David&rsquo;s words as both a confession and a resolve: declaring your heart steadfast even as you ask God to make it so. The steadfast heart is the foundation from which praise can flow even in the cave.",
                  prayer: "Lord, my heart is steadfast &mdash; or I declare it so, even when it wavers. Fix my heart firmly on you. Establish me so that when the storms come, I am not tossed about but anchored in your faithfulness. And from this steadfast heart, let song arise. Amen."
                },
                {
                  color: TEAL,
                  icon: "&#9733;",
                  title: "Awaking the Dawn With Worship",
                  body: "David&rsquo;s resolve to &lsquo;awake the dawn&rsquo; &mdash; to rise before sunrise and summon the morning with praise &mdash; has inspired generations of believers to give the first moments of the day to God. There is something powerful about meeting God before the demands of the day crowd in, letting worship rather than worry shape your first waking thoughts. Consider establishing a practice of early morning prayer or praise, even briefly. You need not be a morning person to give your first thoughts to God. Like David, let your soul awake to worship before the dawn, setting the trajectory of the whole day toward God.",
                  prayer: "Awake, my soul! I will not let the day&rsquo;s demands claim my first thoughts. Before the dawn, I turn to you in praise. Let worship, not worry, shape the beginning of my day. I will sing and make melody to you, O God, who is worthy of my first and best attention. Amen."
                },
                {
                  color: GREEN,
                  icon: "&#10022;",
                  title: "Praying for God's Glory Above Your Own Rescue",
                  body: "The refrain of Psalm 57 &mdash; &lsquo;Be exalted, O God, above the heavens! Let your glory be over all the earth!&rsquo; &mdash; reveals that David&rsquo;s deepest desire, even in mortal danger, was God&rsquo;s glory rather than merely his own safety. This is a challenging and reorienting prayer. In our crises, we naturally focus on deliverance; the psalm calls us to lift our eyes higher, to desire God&rsquo;s exaltation above our own rescue. When you pray about your difficulties, try ending with this refrain, deliberately placing God&rsquo;s glory above your own circumstances. This reorientation puts every earthly threat in its proper, diminished place beneath the exalted God.",
                  prayer: "Be exalted, O God, above the heavens! Let your glory be over all the earth! Lord, even in my distress, I lift my eyes above my own rescue to desire your glory. Whatever happens to me, let your name be magnified and your glory fill the earth. That is my deepest prayer. Amen."
                },
              ].map(app => (
                <div key={app.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ borderLeft: `4px solid ${app.color}`, padding: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <span style={{ fontSize: "1.3rem", color: app.color }} dangerouslySetInnerHTML={{ __html: app.icon }} />
                      <h3 style={{ color: TEXT, fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>{app.title}</h3>
                    </div>
                    <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: app.body }} />
                    <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: "1rem", borderLeft: `2px solid ${app.color}` }}>
                      <p style={{ color: MUTED, fontSize: "0.88rem", fontStyle: "italic", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + app.color + "\">Prayer: </strong>" + app.prayer }} />
                    </div>
                  </div>
                </div>
              ))}

              <div style={{ background: `linear-gradient(135deg, rgba(217,119,6,0.08), rgba(58,125,86,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>Key Verse to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;My heart is steadfast, O God, my heart is steadfast! I will sing and make melody!&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 57:7 &mdash; the steadfast heart turning danger into song</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
