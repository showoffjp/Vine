"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "j9phNEaPrv8", title: "Psalm 74 -- Lament Over the Ruined Sanctuary" },
  { videoId: "Gqubm5Mg7Bw", title: "The Asaph Psalms and the Fall of Jerusalem" },
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

export default function Psalm74Page() {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, sans-serif)", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #0e0406 0%, #1a070a 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: ROSE, fontSize: "0.78rem" }}>Psalm 74</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(225,29,72,0.12)", border: `1px solid rgba(225,29,72,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: ROSE, marginBottom: "1rem" }}>Maschil of Asaph &mdash; Communal Lament</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 74: Why Have You<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>Cast Us Off Forever?</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A maschil of Asaph &mdash; a searing communal lament over the destruction of the temple, when the enemy roared in the holy place and no prophet remained, yet faith reaches back to God the ancient King who works salvation in the midst of the earth.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "Asaph"], ["Book", "Book III (Ps 73-89)"], ["Genre", "Communal Lament"], ["Key Verse", "v. 12"]].map(([k, v]) => (
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
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: tab === i ? `2px solid ${ROSE}` : "2px solid transparent", color: tab === i ? TEXT : MUTED, cursor: "pointer", fontFamily: "inherit", fontSize: "0.88rem", fontWeight: tab === i ? 600 : 400, whiteSpace: "nowrap", transition: "color 0.2s" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.5rem" }}>

        {tab === 0 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: A Lament From the Ruins</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 74 is a communal lament of devastating power, almost certainly arising from the destruction of Jerusalem and the temple by the Babylonians in 586 B.C. The psalmist surveys a scene of horror: the sanctuary in ruins, the enemy roaring in the holy place where God once met his people, the carved woodwork hacked down with axes, and the whole structure burned to the ground. &ldquo;They set your sanctuary on fire; they profaned the dwelling place of your name, bringing it down to the ground&rdquo; (v. 7). For Israel, this was not merely the loss of a building but the apparent collapse of their entire relationship with God." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm opens with the rawest of questions: &ldquo;O God, why do you cast us off forever? Why does your anger smoke against the sheep of your pasture?&rdquo; (v. 1). Derek Kidner observes that the psalm does not soften the horror or rush to easy comfort: &ldquo;It looks the disaster full in the face, names it without flinching, and brings it directly to God. This is the courage of biblical lament &mdash; it refuses both denial and despair, insisting on speaking honestly to the God who seems, for the moment, to have hidden his face.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "One of the most poignant cries of the psalm is verse 9: &ldquo;We do not see our signs; there is no longer any prophet, and there is none among us who knows how long.&rdquo; The ordinary means of grace had ceased &mdash; no festivals at the ruined temple, no prophetic word, no sense of how long the desolation would last. Calvin comments on the agony of this silence: &ldquo;The heaviest part of the affliction was that God seemed to have withdrawn not only his protection but his voice. When the prophets are silent and the signs have ceased, the believer is cast back wholly on God himself, with nothing visible to lean upon.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The turning point of the psalm comes at verse 12, where the lament pivots to a sustained meditation on God&rsquo;s ancient power: &ldquo;Yet God my King is from of old, working salvation in the midst of the earth.&rdquo; The psalmist reaches back past the present catastrophe to the bedrock of God&rsquo;s kingship and creative power &mdash; how he divided the sea, crushed the heads of Leviathan, established the sun and moon, fixed the boundaries of the earth (vv. 13-17). Spurgeon notes the strategy of faith: &ldquo;When the present is unbearable, the believer reaches back to the ancient works of God. The God who split the sea and crushed the serpent is not powerless before Babylon; the memory of his deeds becomes the ground of hope for deliverance.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm closes with urgent petition, appealing repeatedly to God&rsquo;s covenant and his own honor: &ldquo;Have regard for the covenant... Do not forget the life of your poor forever. Arise, O God, defend your cause&rdquo; (vv. 20-22). Matthew Henry highlights the theological weight of the appeal to God&rsquo;s name: &ldquo;The psalmist pleads not Israel&rsquo;s merit, which was none, but God&rsquo;s own glory. The enemy reviles God&rsquo;s name; therefore for his name&rsquo;s sake God must act. This is the highest ground of intercession &mdash; the honor of God himself.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 74 models how faith survives catastrophe. It does not pretend the disaster is small, nor does it abandon God in bitterness. Instead it brings the full weight of the calamity into God&rsquo;s presence, wrestles honestly with his apparent absence, and anchors hope not in present circumstances but in God&rsquo;s ancient, unchanging character. For believers facing the collapse of things they thought were permanent &mdash; a church, a ministry, a family, a future &mdash; the psalm offers a pattern of resilient faith that grieves honestly while clinging to the God who is &lsquo;from of old, working salvation in the midst of the earth.&rsquo;" }} />

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
                  title: "Honest Lament Over Catastrophe",
                  body: "Psalm 74 refuses to minimize the disaster. It catalogs the desecration in vivid detail: the enemy roaring in the holy place, the carved panels smashed with axes and hatchets, the sanctuary burned, the meeting places of God throughout the land destroyed (vv. 3-8). The psalmist brings this full catalog of horror directly to God in the form of a question: &lsquo;Why do you cast us off forever?&rsquo; This is the courage of biblical lament. Kidner: &ldquo;The psalm neither denies the catastrophe nor despairs of God; it does the harder, braver thing of speaking honestly to him about it.&rdquo; This theme teaches believers that faith does not require pretending that suffering is small or that we understand why God allows it. The lament psalms give us permission and language to bring our deepest anguish, confusion, and even our accusations to God &mdash; not as a failure of faith but as its exercise. The alternative to honest lament is not stronger faith but either denial or bitterness."
                },
                {
                  color: GOLD,
                  title: "The Agony of God's Silence",
                  body: "Verse 9 voices a particularly desolate dimension of the suffering: &ldquo;We do not see our signs; there is no longer any prophet, and there is none among us who knows how long.&rdquo; Beyond the physical destruction, the worst affliction was the apparent withdrawal of God&rsquo;s voice and presence. No prophetic word interpreted the disaster; no sign assured them of God&rsquo;s continued care; no one could say when it would end. Calvin: &ldquo;When the prophets are silent and the signs have ceased, the believer is cast back wholly on God himself, with nothing visible to lean upon.&rdquo; This theme speaks powerfully to the experience of spiritual desolation &mdash; the seasons when God seems silent, when the means of grace feel empty, when there is no clear word and no sense of how long the darkness will last. The psalm validates this experience as a real part of the life of faith, and it models the response: continuing to cry out to God even when he seems to have stopped speaking, trusting that his silence is not his absence."
                },
                {
                  color: TEAL,
                  title: "Reaching Back to the Ancient King",
                  body: "The pivot of the psalm at verse 12 &mdash; &ldquo;Yet God my King is from of old, working salvation in the midst of the earth&rdquo; &mdash; reveals the strategy of faith under catastrophe. When the present is unbearable, the psalmist reaches back to the deep past, rehearsing God&rsquo;s mighty acts of creation and salvation: dividing the sea, crushing the heads of Leviathan and the sea monsters, opening springs and drying up rivers, establishing the heavenly lights and the boundaries of the earth (vv. 13-17). This is not escapism but the deliberate recollection of who God is and what he has done. Spurgeon: &ldquo;The God who split the sea and crushed the serpent is not powerless before Babylon.&rdquo; The crushing of Leviathan&rsquo;s heads echoes ancient creation imagery and points forward to the ultimate crushing of the serpent at the cross (Genesis 3:15). This theme teaches that the memory of God&rsquo;s past faithfulness is the fuel of present hope. When circumstances offer no ground for confidence, the rehearsal of God&rsquo;s ancient character and deeds provides an immovable foundation."
                },
                {
                  color: PURPLE,
                  title: "Pleading God's Name and Covenant",
                  body: "The psalm&rsquo;s closing petitions (vv. 18-23) ground their appeal not in Israel&rsquo;s worthiness but in God&rsquo;s own honor and covenant commitment. &ldquo;Remember this, O LORD, how the enemy scoffs, and a foolish people reviles your name... Have regard for the covenant... Arise, O God, defend your cause.&rdquo; The psalmist repeatedly points to the fact that the enemy&rsquo;s blasphemy is ultimately directed at God himself: they revile his name, they mock his people who bear his name. Matthew Henry: &ldquo;The psalmist pleads not Israel&rsquo;s merit, which was none, but God&rsquo;s own glory.&rdquo; This is the highest form of intercession, modeled also by Moses (Exodus 32:11-13) and Daniel (Daniel 9:17-19): appealing to God to act for the sake of his own name and his covenant faithfulness rather than on the basis of human deserving. This theme is profoundly relevant to Christian prayer, which approaches God not on the ground of our merit but on the ground of his character and his covenant in Christ. When we have no claim of our own, God&rsquo;s own name and promises remain a sure foundation for bold petition."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 74 &mdash; 23 verses: lament, remembrance, and petition</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1-3", color: ROSE, heading: "Why Have You Cast Us Off?", text: "&ldquo;O God, why do you cast us off forever? Why does your anger smoke against the sheep of your pasture?&rdquo; The psalm opens with the raw question of abandonment. The image of God&rsquo;s anger &lsquo;smoking&rsquo; against his own flock is jarring. Verse 2 appeals to God to remember his congregation, which he purchased of old. Calvin: &ldquo;He pleads the ancient redemption as the ground for present mercy: those you purchased long ago, will you now abandon?&rdquo;" },
                { ref: "v. 4-8", color: ROSE, heading: "The Enemy Roared in the Holy Place", text: "A vivid catalog of desecration: the enemy roaring in the meeting place, setting up their own emblems, hacking the carved woodwork with axes and hatchets, burning the sanctuary, profaning the dwelling place of God&rsquo;s name. Verse 8: they resolved to &lsquo;crush them completely&rsquo; and burned all the meeting places of God in the land. Kidner: &ldquo;The destruction is total, methodical, and gleeful; the psalmist spares no detail in laying it before God.&rdquo;" },
                { ref: "v. 9", color: GOLD, heading: "There Is No Longer Any Prophet", text: "&ldquo;We do not see our signs; there is no longer any prophet, and there is none among us who knows how long.&rdquo; The deepest wound: the silence of God. No prophetic word, no sign, no sense of duration. Calvin: &ldquo;When God withdraws his voice, the affliction is doubled; the believer is left with nothing visible to lean upon but God himself.&rdquo; This verse names the desolation of spiritual silence." },
                { ref: "v. 10-11", color: ROSE, heading: "How Long Will the Enemy Scoff?", text: "&ldquo;How long, O God, is the foe to scoff? Is the enemy to revile your name forever? Why do you hold back your hand?&rdquo; The lament turns to the blasphemy of the enemy and the apparent inaction of God. The question &lsquo;why do you hold back your hand?&rsquo; presses God to act. Spurgeon: &ldquo;He cannot understand why the hand that once worked wonders is now withdrawn into the bosom; so he pleads for it to strike again.&rdquo;" },
                { ref: "v. 12-17", color: TEAL, heading: "Yet God My King Is From of Old", text: "The great pivot: &ldquo;Yet God my King is from of old, working salvation in the midst of the earth.&rdquo; The psalmist rehearses God&rsquo;s ancient power &mdash; dividing the sea, crushing the heads of Leviathan and the sea monsters, opening springs, drying up rivers, establishing the heavenly lights and the boundaries of the earth. Spurgeon: &ldquo;The God who split the sea and crushed the serpent is not powerless before Babylon; faith reaches back to the ancient works to find ground for present hope.&rdquo; The crushing of Leviathan echoes the promise of Genesis 3:15." },
                { ref: "v. 18-21", color: PURPLE, heading: "Remember How the Enemy Scoffs", text: "The petitions begin, grounded in God&rsquo;s honor: &ldquo;Remember this, O LORD, how the enemy scoffs, and a foolish people reviles your name. Do not deliver the soul of your dove to the wild beasts... Have regard for the covenant.&rdquo; The appeal to the covenant (v. 20) is the heart of the plea. Matthew Henry: &ldquo;He pleads not their merit but the covenant, the bond God himself established and will not break.&rdquo;" },
                { ref: "v. 22-23", color: PURPLE, heading: "Arise, O God, Defend Your Cause", text: "The psalm closes with a final summons: &ldquo;Arise, O God, defend your cause; remember how the foolish scoff at you all the day! Do not forget the clamor of your foes, the uproar of those who rise against you, which goes up continually!&rdquo; The cause is God&rsquo;s own; the blasphemy is against God himself. Calvin: &ldquo;He ends by making God&rsquo;s quarrel his own argument: defend your cause, O God, for the enemy&rsquo;s rage is ultimately against you.&rdquo; The psalm ends in petition, still awaiting the answer in faith." },
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
                  color: ROSE,
                  icon: "&#9670;",
                  title: "Bringing Catastrophe Honestly to God",
                  body: "When something you believed was permanent collapses &mdash; a church splits, a ministry fails, a marriage ends, a future you were sure of dissolves &mdash; Psalm 74 gives you permission to grieve honestly before God. You do not have to pretend the loss is small or that you understand why God allowed it. The psalm models bringing the full weight of the catastrophe into God&rsquo;s presence, even asking &lsquo;why?&rsquo; and &lsquo;how long?&rsquo; This honest lament is not a failure of faith but its exercise. Do not bury your grief or let it curdle into bitterness; bring it to the God who can bear it.",
                  prayer: "O God, something I thought would last forever has fallen, and I do not understand why you allowed it. I bring the full weight of this loss to you. I will not pretend it is small. Hear my lament, and even when I cannot see your purpose, help me to keep speaking to you. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9826;",
                  title: "Enduring the Seasons of God's Silence",
                  body: "Psalm 74&rsquo;s cry &mdash; &lsquo;there is no longer any prophet, and there is none among us who knows how long&rsquo; &mdash; speaks to the experience of spiritual desolation, when God seems silent and the means of grace feel empty. If you are in such a season, the psalm assures you that this is a real and recognized part of the life of faith, not a sign that God has rejected you. The response it models is to keep crying out even when God seems to have stopped speaking, trusting that his silence is not his absence. The darkness will not last forever, even when you cannot see how long it will last.",
                  prayer: "Lord, you seem silent, and I do not know how long this will last. The usual comforts feel empty. But I will keep speaking to you in the silence, trusting that your quiet is not your absence. Sustain my faith in the dark, and in your time, let me hear your voice again. Amen."
                },
                {
                  color: TEAL,
                  icon: "&#9733;",
                  title: "Reaching Back to Remember God's Works",
                  body: "The strategy that turns Psalm 74 from despair toward hope is the deliberate rehearsal of God&rsquo;s mighty past works: &lsquo;Yet God my King is from of old.&rsquo; When your present circumstances offer no ground for confidence, follow the psalmist&rsquo;s example: reach back and rehearse what God has done &mdash; in Scripture (the exodus, the cross, the resurrection) and in your own life (the prayers he has answered, the times he has carried you). The memory of God&rsquo;s past faithfulness is the fuel of present hope. The God who has acted mightily before is not powerless now, however dark the present looks.",
                  prayer: "God my King, you are from of old, working salvation in the midst of the earth. When I can find no hope in my circumstances, I reach back to remember what you have done &mdash; the cross, the empty tomb, your faithfulness in my own past. The God who did all that is not powerless now. I anchor my hope in you. Amen."
                },
                {
                  color: PURPLE,
                  icon: "&#10022;",
                  title: "Praying on the Ground of God's Own Honor",
                  body: "Psalm 74&rsquo;s closing petitions appeal not to Israel&rsquo;s worthiness but to God&rsquo;s own name and covenant. This is a profound model for prayer. When you feel you have no claim on God &mdash; when your own merit is exhausted and you cannot point to anything in yourself &mdash; you can still pray boldly on the ground of God&rsquo;s character and his covenant in Christ. His name, his glory, his promises remain a sure foundation for petition even when ours is gone. Learn to pray as the psalmist did: &lsquo;for your name&rsquo;s sake,&rsquo; &lsquo;remember your covenant,&rsquo; &lsquo;defend your own cause.&rsquo;",
                  prayer: "Father, I come with no merit of my own to plead. But I appeal to your name, your glory, and your covenant in Christ. For your own name&rsquo;s sake, act. Defend your cause, keep your promises, and let your glory be the ground of my bold prayer when I have no other. Amen."
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

              <div style={{ background: `linear-gradient(135deg, rgba(225,29,72,0.08), rgba(13,148,136,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>Key Verse to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;Yet God my King is from of old, working salvation in the midst of the earth.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 74:12 &mdash; the pivot from lament to ancient hope</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
