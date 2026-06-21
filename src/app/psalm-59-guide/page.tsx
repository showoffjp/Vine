"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "5_dUtui1mWk", title: "Psalm 59 -- God My Fortress" },
  { videoId: "8kvFD8aT8mU", title: "Saul Watches David's House (1 Samuel 19)" },
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

export default function Psalm59Page() {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, sans-serif)", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #06090e 0%, #0a111c 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: TEAL, fontSize: "0.78rem" }}>Psalm 59</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(13,148,136,0.12)", border: `1px solid rgba(13,148,136,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TEAL, marginBottom: "1rem" }}>Davidic Miktam &mdash; Saul's Watchmen</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 59: O My Strength,<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>I Will Watch for You</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A miktam of David, written when Saul sent men to watch his house in order to kill him &mdash; a prayer that transforms the watchers into the watched, anchored by the refrain &ldquo;O my Strength, I will watch for you, for you, O God, are my fortress.&rdquo;
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "David"], ["Occasion", "1 Samuel 19"], ["Genre", "Miktam / Lament"], ["Refrain", "v. 9, 17"]].map(([k, v]) => (
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
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: tab === i ? `2px solid ${TEAL}` : "2px solid transparent", color: tab === i ? TEXT : MUTED, cursor: "pointer", fontFamily: "inherit", fontSize: "0.88rem", fontWeight: tab === i ? 600 : 400, whiteSpace: "nowrap", transition: "color 0.2s" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.5rem" }}>

        {tab === 0 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: When the House Is Surrounded</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 59 is anchored to a tense and dramatic episode from early in David&rsquo;s career: &ldquo;when Saul sent men to watch his house in order to kill him&rdquo; (cf. 1 Samuel 19:11). Saul, consumed with jealousy, dispatched assassins to surround David&rsquo;s house and murder him at first light. David&rsquo;s wife Michal helped him escape through a window, letting him down by night while the watchers waited. This psalm is the prayer of a man who knows his house is surrounded by men intent on his death." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm contains a striking recurring image: the enemies are likened to a pack of snarling dogs that prowl the city at night. &ldquo;Each evening they come back, howling like dogs and prowling about the city&rdquo; (vv. 6, 14). Derek Kidner notes the vividness: &ldquo;The picture is of scavenger dogs roaming the streets after dark, snapping and snarling, looking for prey. The assassins who watch David&rsquo;s house are reduced to this image of restless, predatory hunger.&rdquo; The repetition of the image (vv. 6 and 14) frames the second half of the psalm and underscores the relentless, animalistic nature of the threat." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Against this menacing backdrop, the psalm is structured around a magnificent refrain that transforms the situation. The watchers are watching David to kill him; but David declares, &ldquo;O my Strength, I will watch for you, for you, O God, are my fortress&rdquo; (v. 9, echoed in v. 17). Calvin draws out the reversal: &ldquo;The enemies keep watch to destroy; David keeps watch toward God to be delivered. The same word &lsquo;watch&rsquo; is turned from a threat into an act of faith. While they watch his house, he watches his God.&rdquo; The God who is David&rsquo;s &lsquo;fortress&rsquo; (misgav, a high stronghold) is the secure tower no assassin can breach." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "One of the most surprising features of the psalm is verse 8: &ldquo;But you, O LORD, laugh at them; you hold all the nations in derision.&rdquo; In the midst of mortal danger, David envisions God laughing at the futile schemes of his enemies. Spurgeon comments: &ldquo;What a contrast! The dogs howl, but God laughs. The assassins are deadly serious; the Almighty is supremely unconcerned. The laughter of God is the believer&rsquo;s comfort, for it reveals how small the threat truly is before the throne of heaven.&rdquo; This divine laughter echoes Psalm 2:4, where God laughs at the raging of the nations against his anointed." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm resolves into triumphant praise in its final verses: &ldquo;But I will sing of your strength; I will sing aloud of your steadfast love in the morning. For you have been to me a fortress and a refuge in the day of my distress&rdquo; (v. 16). Matthew Henry notes the movement from night to morning: &ldquo;The dogs prowl in the evening; David sings in the morning. The night of danger gives way to the dawn of deliverance, and the song of steadfast love rises with the sun.&rdquo; The psalm that began surrounded by death ends in a morning hymn to God&rsquo;s strength and steadfast love." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 59 demonstrates how faith reframes even the most immediate physical danger. David does not deny that his house is surrounded by killers, but he refuses to let that reality have the final word. By naming God as his fortress, his strength, and his steadfast love, he places the threat within the larger frame of God&rsquo;s sovereign protection. The psalm models the conviction that no human power, however menacing, can ultimately prevail against the purposes of God for his people. For anyone who feels surrounded &mdash; by enemies, pressures, or fears &mdash; the psalm offers the reorienting truth that God is a high stronghold the enemy cannot scale." }} />

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
                  color: TEAL,
                  title: "God as Fortress and High Stronghold",
                  body: "The central image of the psalm&rsquo;s refrain is God as &lsquo;fortress&rsquo; (misgav) &mdash; a high, inaccessible stronghold to which one flees for safety (vv. 9, 16, 17). The Hebrew word denotes a place set on high, beyond the reach of the enemy. While David&rsquo;s literal house was vulnerable, surrounded by assassins, his true refuge was a stronghold no enemy could scale. Calvin: &ldquo;The believer&rsquo;s safety is not in the walls of his house but in the height of his God, who is set far above the reach of every foe.&rdquo; This image recurs throughout the Psalter (18:2, 46:7, 144:2) and forms a key part of the biblical theology of refuge. The theme is profoundly practical: when we feel exposed and surrounded, our security is not found in our circumstances or defenses but in fleeing to God, who is himself the high tower the enemy cannot breach. The repetition of &lsquo;fortress&rsquo; throughout the psalm makes it the load-bearing pillar of David&rsquo;s confidence."
                },
                {
                  color: PURPLE,
                  title: "Watching for God Instead of Being Watched by the Enemy",
                  body: "The psalm contains a brilliant reversal of the word &lsquo;watch.&rsquo; Saul&rsquo;s men watch David&rsquo;s house to kill him, but David declares, &ldquo;O my Strength, I will watch for you&rdquo; (v. 9). The same vigilance that the enemies direct toward destruction, David redirects toward God in expectant faith. Spurgeon: &ldquo;While they watch to harm, he watches to be helped; while they fix their eyes on his house, he fixes his eyes on his God.&rdquo; This theme teaches a crucial spiritual discipline: in times of threat, the believer can choose where to direct attention. We can become consumed with watching the threat &mdash; tracking every movement of the enemy, every development of the danger &mdash; or we can watch for God, looking expectantly to him for deliverance. The reorientation of vigilance from fearful surveillance of the threat to faithful attention toward God is one of the psalm&rsquo;s great practical gifts. What we watch shapes what we feel; David chose to watch his fortress."
                },
                {
                  color: GOLD,
                  title: "The Laughter of God at His Enemies",
                  body: "Verse 8 introduces one of the most striking images in the psalm: &ldquo;But you, O LORD, laugh at them; you hold all the nations in derision.&rdquo; In the midst of mortal peril, David envisions God laughing at the futile schemes of his enemies. This divine laughter is not cruelty but the sovereign confidence of the One whose purposes cannot be thwarted. The same image appears in Psalm 2:4, where God laughs at the nations raging against his anointed king. Kidner observes: &ldquo;The laughter of God measures the true proportion of the threat. What terrifies us is, to him, the futile gesture of those who cannot possibly succeed.&rdquo; This theme offers immense comfort: the threats that loom so large in our experience are, from heaven&rsquo;s perspective, already defeated. God is not anxiously calculating how to respond to the enemy&rsquo;s schemes; he laughs at their certain failure. To share in God&rsquo;s perspective is to find that our most fearsome enemies are smaller than we thought, already overmatched by the sovereign Lord."
                },
                {
                  color: GREEN,
                  title: "Singing of Steadfast Love in the Morning",
                  body: "The psalm resolves into a morning hymn of praise: &ldquo;But I will sing of your strength; I will sing aloud of your steadfast love in the morning. For you have been to me a fortress and a refuge in the day of my distress&rdquo; (v. 16). The contrast with the prowling dogs of the evening (vv. 6, 14) is deliberate: the night belongs to the howling enemies, but the morning belongs to David&rsquo;s song. Matthew Henry: &ldquo;The night of trouble gives way to the morning of deliverance, and faith greets the dawn with music.&rdquo; The two attributes David sings of &mdash; God&rsquo;s strength and his steadfast love (hesed) &mdash; combine power and tenderness: God is strong enough to deliver and loving enough to care. This theme reveals the proper end of the believer&rsquo;s trial: not merely survival but song. The deliverance from the surrounding enemies becomes the occasion for renewed praise. And the timing &mdash; &lsquo;in the morning&rsquo; &mdash; suggests both the literal dawn of rescue and the broader truth that joy comes in the morning after the night of weeping (Psalm 30:5)."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 59 &mdash; 17 verses framed by the fortress refrain and the prowling dogs</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1-2", color: ROSE, heading: "Deliver Me From My Enemies", text: "&ldquo;Deliver me from my enemies, O my God; protect me from those who rise up against me; deliver me from those who work evil, and save me from bloodthirsty men.&rdquo; The fourfold plea (deliver, protect, deliver, save) conveys the urgency of a man whose house is surrounded by assassins. Calvin: &ldquo;The repetition is not vain but the natural cry of a heart in extremity, pressing the same petition from every angle.&rdquo;" },
                { ref: "v. 3-4", color: ROSE, heading: "Not for My Sin", text: "&ldquo;For behold, they lie in wait for my life; fierce men stir up strife against me. For no transgression or sin of mine, O LORD.&rdquo; David protests his innocence: he has done nothing to provoke this murderous hostility. His conscience is clear, which strengthens his appeal to God for vindication. Spurgeon: &ldquo;It is a great comfort in persecution to know that we suffer not for our faults but for our faithfulness.&rdquo;" },
                { ref: "v. 5", color: PURPLE, heading: "Rouse Yourself, O LORD of Hosts", text: "&ldquo;You, LORD God of hosts, are God of Israel. Rouse yourself to punish all the nations; spare none of those who treacherously plot evil.&rdquo; David appeals to God by his covenant name and his title &lsquo;LORD of hosts&rsquo; (commander of heaven&rsquo;s armies), asking him to rise up against treachery. The plea broadens from David&rsquo;s personal enemies to all who plot evil. Kidner: &ldquo;The personal crisis opens onto the cosmic conflict between God and all treachery.&rdquo;" },
                { ref: "v. 6-7", color: GOLD, heading: "Howling Like Dogs", text: "&ldquo;Each evening they come back, howling like dogs and prowling about the city. There they are, bellowing with their mouths with swords in their lips.&rdquo; The enemies are pictured as scavenger dogs prowling the streets at night. Their words are weapons (&lsquo;swords in their lips&rsquo;). The image conveys the restless, predatory menace of the assassins. Matthew Henry: &ldquo;They thought none could hear them; but there is one who hears, and laughs.&rdquo;" },
                { ref: "v. 8", color: GOLD, heading: "But You, O LORD, Laugh at Them", text: "&ldquo;But you, O LORD, laugh at them; you hold all the nations in derision.&rdquo; The pivot of perspective. In the midst of mortal danger, David envisions God laughing at the futile schemes of his enemies, just as in Psalm 2:4. Spurgeon: &ldquo;The dogs howl, but God laughs; and his laughter is the death-knell of their plot.&rdquo; The divine laughter measures the true smallness of the threat." },
                { ref: "v. 9-10", color: TEAL, heading: "O My Strength, I Will Watch for You", text: "The first sounding of the refrain: &ldquo;O my Strength, I will watch for you, for you, O God, are my fortress. My God in his steadfast love will meet me.&rdquo; The watchers are watched over; David turns his vigilance toward God. The confidence that God &lsquo;will meet me&rsquo; in his steadfast love anchors the whole psalm. Calvin: &ldquo;While they watch his house, he watches his God; and the God he watches will not fail to meet him.&rdquo;" },
                { ref: "v. 11-13", color: ROSE, heading: "Consume Them in Wrath", text: "David prays not for the enemies&rsquo; instant destruction but that they be made a lasting lesson: &ldquo;Kill them not, lest my people forget; make them totter by your power and bring them down.&rdquo; He asks that the judgment be visible and instructive, so that &lsquo;they may know that God rules over Jacob to the ends of the earth&rsquo; (v. 13). Longman: &ldquo;The aim of the judgment is not mere destruction but the universal acknowledgment of God&rsquo;s rule.&rdquo;" },
                { ref: "v. 14-15", color: GOLD, heading: "The Dogs Return", text: "The image of the prowling dogs returns: &ldquo;Each evening they come back, howling like dogs and prowling about the city. They wander about for food and growl if they do not get their fill.&rdquo; The repetition (cf. vv. 6-7) frames the psalm. But now the dogs are pitiable rather than terrifying &mdash; scavengers who wander unsatisfied. Kidner: &ldquo;The second appearance of the dogs shows them not as conquerors but as hungry strays, their menace already deflated by God&rsquo;s laughter.&rdquo;" },
                { ref: "v. 16-17", color: GREEN, heading: "I Will Sing in the Morning", text: "The triumphant resolution: &ldquo;But I will sing of your strength; I will sing aloud of your steadfast love in the morning... O my Strength, I will sing praises to you, for you, O God, are my fortress, the God who shows me steadfast love.&rdquo; The refrain returns transformed into song. The night of the prowling dogs gives way to the morning of praise. Matthew Henry: &ldquo;He began with deliver me and ends with I will sing; such is the journey of every prayer of faith, from the cry of distress to the song of deliverance.&rdquo;" },
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
                  color: TEAL,
                  icon: "&#9670;",
                  title: "Fleeing to God as Your Fortress",
                  body: "When you feel surrounded &mdash; by problems, opposition, or fears that seem to close in on every side &mdash; Psalm 59 directs you to a refuge higher than your circumstances. David&rsquo;s house was literally surrounded by killers, yet he found safety in God as his &lsquo;fortress,&rsquo; a high stronghold no enemy could scale. Your security does not depend on the strength of your defenses or the absence of threats but on the One to whom you flee. Practice consciously taking refuge in God when you feel exposed: he is a high tower the enemy cannot breach, and in him you are safe even when everything around you feels precarious.",
                  prayer: "O my God, I feel surrounded, exposed, vulnerable. But you are my fortress &mdash; a high stronghold no enemy can scale. I flee to you for refuge. My safety is not in my circumstances but in your strength. Hide me in your high tower, and let me rest secure in you. Amen."
                },
                {
                  color: PURPLE,
                  icon: "&#9826;",
                  title: "Watching for God Instead of the Threat",
                  body: "Psalm 59&rsquo;s reversal of the word &lsquo;watch&rsquo; offers a powerful discipline. When we are under threat, we naturally become consumed with watching the danger &mdash; tracking every development, rehearsing every worst-case scenario. David chose instead to watch for God: &lsquo;O my Strength, I will watch for you.&rsquo; This week, when anxiety tempts you to fixate on the threat, deliberately redirect your attention to God. Watch for his help, his faithfulness, his past deliverances. What we watch shapes what we feel. Choosing to watch for God rather than the threat is one of the most practical ways to conquer fear.",
                  prayer: "Lord, I have been watching my troubles &mdash; tracking every danger, rehearsing every fear. Help me redirect my gaze. O my Strength, I will watch for you. I fix my eyes on your faithfulness rather than on the threat. Meet me, as you promised, in your steadfast love. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9733;",
                  title: "Sharing God's Perspective on Your Enemies",
                  body: "The image of God laughing at the schemes of David&rsquo;s enemies (v. 8) is meant to recalibrate our sense of proportion. The threats that terrify us are, from heaven&rsquo;s perspective, already defeated &mdash; futile gestures against an invincible God. This does not mean the threats are not real or painful, but it does mean they are smaller than they appear. When you are tempted to be overwhelmed by an opponent or obstacle, try to see it from God&rsquo;s vantage point: he is not anxiously calculating his response; he laughs at its certain failure. Sharing in that confident perspective shrinks the threat to its true proportion.",
                  prayer: "Sovereign Lord, you laugh at the schemes of those who oppose your purposes. Help me to see my fears from your vantage point &mdash; not as invincible threats, but as futile gestures already overmatched by your power. Give me your perspective, and let my fear shrink before your sovereign confidence. Amen."
                },
                {
                  color: GREEN,
                  icon: "&#10022;",
                  title: "Singing in the Morning After the Night",
                  body: "The psalm moves from the howling dogs of the evening to David&rsquo;s song in the morning. This rhythm &mdash; the night of trouble giving way to the morning of deliverance and praise &mdash; is one of the deepest patterns of the life of faith. If you are in a night season right now, surrounded by prowling fears, take heart: the morning is coming, and with it the song. And even now, you can begin to rehearse the praise, singing of God&rsquo;s strength and steadfast love in anticipation of the dawn. The God who has been your fortress in the night will be the theme of your song in the morning.",
                  prayer: "Lord, it has been a long night of prowling fears and howling threats. But I trust that morning is coming, and with it deliverance and song. Even now I begin to sing of your strength and your steadfast love. You have been my fortress in the night; you will be my song in the morning. Amen."
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

              <div style={{ background: `linear-gradient(135deg, rgba(13,148,136,0.08), rgba(58,125,86,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>Key Verse to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;But I will sing of your strength; I will sing aloud of your steadfast love in the morning. For you have been to me a fortress and a refuge in the day of my distress.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 59:16 &mdash; the morning song after the night of the prowling dogs</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
