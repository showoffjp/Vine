"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "RX8KpwUwNIo", title: "Psalm 64 -- The God Who Turns Their Arrows" },
  { videoId: "vBgUThnoaXc", title: "The Power of the Tongue in Scripture" },
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

export default function Psalm64Page() {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, sans-serif)", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #0a0810 0%, #14101e 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: PURPLE, fontSize: "0.78rem" }}>Psalm 64</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(107,79,187,0.12)", border: `1px solid rgba(107,79,187,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PURPLE, marginBottom: "1rem" }}>Davidic Psalm &mdash; Against Secret Plots</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 64: Hear My Voice,<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>O God, in My Complaint</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A psalm of David &mdash; a prayer for protection from the secret conspiracies and sharp-tongued ambushes of the wicked, and a confident vision of the God who turns the schemers&rsquo; own arrows back upon themselves.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "David"], ["Book", "Book II (Ps 42-72)"], ["Genre", "Individual Lament"], ["Key Verse", "v. 7"]].map(([k, v]) => (
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
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: tab === i ? `2px solid ${PURPLE}` : "2px solid transparent", color: tab === i ? TEXT : MUTED, cursor: "pointer", fontFamily: "inherit", fontSize: "0.88rem", fontWeight: tab === i ? 600 : 400, whiteSpace: "nowrap", transition: "color 0.2s" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.5rem" }}>

        {tab === 0 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: The Ambush of Words</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 64 is a compact individual lament that addresses a particular and insidious form of attack: the secret conspiracy of the wicked, whose chief weapon is the tongue. David prays, &ldquo;Hide me from the secret plots of the wicked, from the throng of evildoers, who whet their tongues like swords, who aim bitter words like arrows&rdquo; (vv. 2-3). The danger is not open warfare but covert plotting &mdash; the whispered scheme, the slanderous campaign, the ambush of words launched from concealment." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm&rsquo;s dominant imagery is military, but the weapons are verbal. The tongues of the wicked are whetted like swords; their bitter words are aimed like arrows; they shoot from ambush at the blameless (vv. 3-4). Derek Kidner observes the precision of the imagery: &ldquo;The psalm captures the peculiar menace of the slander campaign &mdash; its secrecy, its suddenness, its capacity to wound from a distance. The slanderer shoots from hiding, and his victim often does not know the arrow is coming until it strikes.&rdquo; This is the warfare of words, conducted in shadows, against which the open and honest have little defense &mdash; except God." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Verses 5-6 expose the confidence of the conspirators: &ldquo;They hold fast to their evil purpose; they talk of laying snares secretly, thinking, &lsquo;Who can see them?&rsquo;&rdquo; The wicked believe their plots are hidden, that no eye observes their schemes. They search out injustices with diligence, congratulating themselves on their cleverness. Calvin draws out the spiritual blindness at the root of this confidence: &ldquo;The reason they plot so boldly is that they imagine no one sees. They have forgotten the eye of God, who searches the deepest recesses of the heart. Their secrecy is an illusion; the God they ignore beholds every whispered scheme.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The turning point of the psalm comes with stunning suddenness in verse 7: &ldquo;But God shoots his arrow at them; they are wounded suddenly.&rdquo; The conspirators who shot their arrows from ambush are themselves struck by the arrow of God &mdash; and the suddenness with which they meant to ambush the righteous is the very suddenness with which judgment overtakes them. Spurgeon delights in the poetic justice: &ldquo;They shot in secret; God shoots openly. They wounded from ambush; God wounds them suddenly. The archers are themselves pierced; the schemers are caught in their own scheme. The God they thought was blind has taken aim, and his arrow does not miss.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Verse 8 completes the reversal: &ldquo;They are brought to ruin, with their own tongues turned against them.&rdquo; The very weapon of the wicked &mdash; their tongues &mdash; becomes the instrument of their downfall. Matthew Henry: &ldquo;Their own tongues, which they used to wound others, are made to fall upon themselves; the slander recoils, the lie is exposed, and the schemers are undone by the very words they forged.&rdquo; This recoil of evil upon its perpetrators is a recurring theme in the wisdom literature (Proverbs 26:27) and a fundamental feature of God&rsquo;s moral governance of the world." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 64 addresses the experience of being targeted by hidden malice &mdash; the slander campaign, the whisper network, the coordinated attack on one&rsquo;s reputation. It does not promise that the righteous will never be targeted, but it assures them that the secrecy of the wicked is an illusion before the all-seeing God, and that the schemes of malice tend to recoil upon their makers. The psalm closes with the response it commends: &ldquo;Let the righteous one rejoice in the LORD and take refuge in him! Let all the upright in heart exult!&rdquo; (v. 10). The proper response to hidden attack is not counter-conspiracy but rejoicing trust in the God who sees all and judges justly." }} />

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
                  color: ROSE,
                  title: "The Tongue as a Weapon of Ambush",
                  body: "The dominant imagery of Psalm 64 transforms words into weapons: &ldquo;who whet their tongues like swords, who aim bitter words like arrows, shooting from ambush at the blameless&rdquo; (vv. 3-4). The wicked sharpen their tongues as a soldier sharpens his blade, and they launch their slander as an archer shoots from concealment. This imagery captures the unique menace of verbal attack: it can be launched from hiding, it wounds from a distance, and the victim often does not see it coming. Calvin: &ldquo;There is no shield against the secret slander; the arrow of the tongue flies unseen and pierces before its victim knows it has been loosed.&rdquo; This theme connects Psalm 64 to the broader biblical theology of the tongue (James 3, Psalm 52, Psalm 140), which consistently treats malicious speech as a form of violence. The psalm takes the wounds inflicted by words with full seriousness, refusing to dismiss them as &lsquo;just words&rsquo; &mdash; they are arrows that draw blood."
                },
                {
                  color: PURPLE,
                  title: "The Illusion of Hidden Schemes",
                  body: "The confidence of the conspirators rests on a fatal assumption: &ldquo;They talk of laying snares secretly, thinking, &lsquo;Who can see them?&rsquo;&rdquo; (v. 5). The wicked plot boldly because they believe no one observes their schemes. Their secrecy emboldens their malice. But this confidence is an illusion. Calvin: &ldquo;They have forgotten the eye of God, who searches the deepest recesses of the heart. Their secrecy is imaginary; the God they ignore beholds every whispered plot.&rdquo; This theme exposes the spiritual blindness at the root of all secret sin: the failure to reckon with the omniscience of God. The conspirators behave as practical atheists (cf. Psalm 53), acting as though God does not see. The believer&rsquo;s comfort is precisely the opposite: nothing is hidden from God. The schemes plotted in darkness are fully visible to him, and he will bring them to light. This theme assures the victim of hidden malice that, though they cannot see or counter every secret plot, the all-seeing God observes them all."
                },
                {
                  color: GOLD,
                  title: "The Sudden Arrow of Divine Justice",
                  body: "The dramatic reversal of the psalm comes in verse 7: &ldquo;But God shoots his arrow at them; they are wounded suddenly.&rdquo; The same imagery used of the wicked &mdash; arrows, shooting, suddenness &mdash; is now turned against them by God. The archers become the targets; the ambushers are themselves ambushed. The suddenness is the sharpest irony: the wicked planned to strike the righteous &lsquo;suddenly&rsquo; (v. 4), and they are struck down &lsquo;suddenly&rsquo; (v. 7) by God. Spurgeon: &ldquo;They shot in secret; God shoots in the open. The God they thought was blind has taken aim, and his arrow does not miss.&rdquo; This theme reveals the moral symmetry of God&rsquo;s justice: the punishment fits the crime, often mirroring its very method. The wicked are caught in the trap they set, pierced by the arrow they loosed. This is not arbitrary vengeance but the precise recoil of evil under the governance of a just God. The believer can rest in the assurance that the malice aimed at them will, in God&rsquo;s time, be turned back upon its source."
                },
                {
                  color: GREEN,
                  title: "The Rejoicing Refuge of the Righteous",
                  body: "The psalm closes not with the downfall of the wicked but with the response it should evoke in the righteous: &ldquo;Then all mankind fears; they tell what God has brought about and ponder what he has done. Let the righteous one rejoice in the LORD and take refuge in him! Let all the upright in heart exult!&rdquo; (vv. 9-10). The demonstration of God&rsquo;s justice produces a threefold effect: universal awe (all mankind fears), thoughtful reflection (they ponder what God has done), and the joyful refuge of the righteous. Matthew Henry: &ldquo;The fall of the wicked is a sermon to the world and a comfort to the saints; it teaches the nations to fear and the godly to rejoice.&rdquo; This theme reveals the ultimate purpose of God&rsquo;s judgment: not merely to punish evil but to vindicate his justice publicly, deepening the awe of all people and the joy of his own. The proper response of the believer who has been the target of hidden malice is not bitterness or counter-scheming, but rejoicing trust &mdash; taking refuge in the God who sees, judges, and vindicates. The psalm thus ends where faith always ends: in exultant confidence in the Lord."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 64 &mdash; 10 verses on the ambush of words and the arrow of God</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1-2", color: PURPLE, heading: "Hide Me From the Secret Plots", text: "&ldquo;Hear my voice, O God, in my complaint; preserve my life from dread of the enemy. Hide me from the secret plots of the wicked, from the throng of evildoers.&rdquo; David begins with the cry for protection, specifically from &lsquo;the dread of the enemy&rsquo; &mdash; the fear that hidden conspiracy produces. Calvin: &ldquo;The dread of an unseen enemy is often worse than the wound itself; David prays to be hidden from both the plot and the terror it breeds.&rdquo;" },
                { ref: "v. 3-4", color: ROSE, heading: "Tongues Whetted Like Swords", text: "&ldquo;Who whet their tongues like swords, who aim bitter words like arrows, shooting from ambush at the blameless, shooting at him suddenly and without fear.&rdquo; The weapons of the wicked are verbal &mdash; sharpened tongues and bitter words launched from concealment. The targets are &lsquo;the blameless,&rsquo; struck &lsquo;suddenly and without fear&rsquo; (the wicked feel no fear of consequences). Kidner: &ldquo;The peculiar cowardice of the slanderer is to shoot from hiding at one who cannot shoot back.&rdquo;" },
                { ref: "v. 5-6", color: PURPLE, heading: "Who Can See Them?", text: "&ldquo;They hold fast to their evil purpose; they talk of laying snares secretly, thinking, &lsquo;Who can see them?&rsquo; They search out injustice, saying, &lsquo;We have accomplished a diligent search.&rsquo;&rdquo; The conspirators are confident because they believe themselves unobserved. They congratulate one another on the thoroughness of their scheming. Calvin: &ldquo;They forget the eye of God; their imagined secrecy is the root of their boldness.&rdquo; The verse ends noting the depth of the human heart&rsquo;s capacity for cunning." },
                { ref: "v. 7", color: GOLD, heading: "But God Shoots His Arrow", text: "The dramatic reversal: &ldquo;But God shoots his arrow at them; they are wounded suddenly.&rdquo; The archers become the targets. The same suddenness with which they meant to strike the righteous (v. 4) overtakes them. Spurgeon: &ldquo;The God they thought was blind takes aim; and his arrow, unlike theirs, never misses its mark.&rdquo; This single verse turns the entire psalm from threat to triumph." },
                { ref: "v. 8", color: GOLD, heading: "Their Own Tongues Turned Against Them", text: "&ldquo;They are brought to ruin, with their own tongues turned against them; all who see them will wag their heads.&rdquo; The very weapon of the wicked &mdash; their tongues &mdash; becomes the instrument of their downfall. The slander recoils; the lie is exposed; the schemers are undone by their own words. Matthew Henry: &ldquo;The arrow returns to the bow that shot it; the tongue that wounded others is made to wound itself.&rdquo;" },
                { ref: "v. 9", color: GREEN, heading: "All Mankind Fears and Ponders", text: "&ldquo;Then all mankind fears; they tell what God has brought about and ponder what he has done.&rdquo; The public demonstration of God&rsquo;s justice produces awe and reflection among all who witness it. The fall of the conspirators becomes a testimony to God&rsquo;s active governance of the world. Longman: &ldquo;The judgment is not hidden like the plot; it is open, instructive, and universally observed.&rdquo;" },
                { ref: "v. 10", color: GREEN, heading: "Let the Righteous Rejoice", text: "The psalm closes with the response it commends: &ldquo;Let the righteous one rejoice in the LORD and take refuge in him! Let all the upright in heart exult!&rdquo; The proper response to deliverance from hidden malice is rejoicing trust, not bitterness or counter-scheming. Spurgeon: &ldquo;The psalm that began in dread ends in exultation; the heart that cried for hiding now rejoices in its refuge.&rdquo; The upright take refuge in God and exult in his faithfulness." },
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
                  color: PURPLE,
                  icon: "&#9670;",
                  title: "When You Are the Target of a Whisper Campaign",
                  body: "Psalm 64 speaks directly to anyone who has been the victim of slander, gossip, or a coordinated campaign against their reputation &mdash; the &lsquo;arrows&rsquo; shot from ambush. The unique pain of this attack is its hiddenness: you may sense that something is wrong, that people are being turned against you, without being able to see or counter every secret plot. The psalm assures you that the secrecy of your attackers is an illusion before God, who sees every whispered scheme. You do not have to uncover and refute every lie; you can entrust the hidden plots to the God who observes them all and will bring them to light in his time.",
                  prayer: "O God, hear my complaint. I feel the arrows of hidden words, the schemes I cannot see or counter. But nothing is hidden from you. You see every whispered plot. I entrust my reputation and my vindication to you. Hide me from the dread of the enemy, and let me rest in your all-seeing care. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9826;",
                  title: "Trusting God to Turn the Arrows Back",
                  body: "The great reversal of Psalm 64 &mdash; &lsquo;But God shoots his arrow at them&rsquo; &mdash; assures us that malice tends to recoil upon its makers under God&rsquo;s just governance. This does not mean we should wish harm on our enemies or take satisfaction in their downfall. It means we can release the burden of self-vindication, trusting that we do not have to engineer justice ourselves. The schemes of the wicked carry the seeds of their own undoing. When you are tempted to fight slander with slander, or to obsess over how to expose your attackers, remember that God is a more capable and more just defender than you could ever be. Release the matter to him.",
                  prayer: "Lord, I am tempted to fight back, to expose my attackers, to repay their schemes with schemes of my own. But you are a better defender than I could ever be. I release the matter to you. Turn back the arrows of malice in your own way and time. Free me from the burden of vindicating myself. Amen."
                },
                {
                  color: ROSE,
                  icon: "&#9733;",
                  title: "Examining Your Own Use of Words",
                  body: "Before applying this psalm only to others, examine yourself. The wicked of Psalm 64 sharpen their tongues like swords and shoot bitter words like arrows from ambush. Have you used words this way? Gossip shared in confidence, a damaging comment dropped &lsquo;just between us,&rsquo; a carefully aimed criticism designed to wound &mdash; these are the arrows the psalm condemns. The God who sees the secret plots of others also sees ours. Let this psalm prompt honest self-examination: are your words instruments of healing or weapons of ambush? Repent of any way you have used the tongue to wound, and ask God to make your speech a source of life.",
                  prayer: "Searching God, you see not only the words aimed at me but the words I aim at others. Forgive me for the times I have used my tongue as a weapon &mdash; the gossip, the cutting remark, the slander dressed as concern. Cleanse my speech. Make my words instruments of healing, not arrows of ambush. Amen."
                },
                {
                  color: GREEN,
                  icon: "&#10022;",
                  title: "Responding With Rejoicing, Not Bitterness",
                  body: "The psalm ends not in vindictive triumph but in the rejoicing refuge of the righteous: &lsquo;Let the righteous one rejoice in the LORD and take refuge in him!&rsquo; This is the crucial final move. The danger of being attacked is that it can make us bitter, suspicious, and consumed with our grievance. Psalm 64 calls us to a different response: taking refuge in God and rejoicing in him. The goal is not merely to survive the attack or see our enemies fall, but to emerge with our hearts anchored in joyful trust. When you have been wounded by hidden malice, guard against bitterness by deliberately turning to rejoice in the Lord, your refuge.",
                  prayer: "Father, I will not let the attacks against me turn my heart to bitterness. Instead, I take refuge in you and choose to rejoice in your faithfulness. You are my hiding place, my defender, my joy. Let me emerge from this trial not hardened and suspicious, but anchored in exultant trust in you. Amen."
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

              <div style={{ background: `linear-gradient(135deg, rgba(107,79,187,0.08), rgba(58,125,86,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>Key Verse to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;But God shoots his arrow at them; they are wounded suddenly.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 64:7 &mdash; the sudden reversal that turns ambushers into targets</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
