"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "V0JIj2b2VKk", title: "Psalm 77 -- Remembering in the Dark Night" },
  { videoId: "j9phNEaPrv8", title: "When God Seems Silent" },
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

export default function Psalm77Page() {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, sans-serif)", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #08090e 0%, #10121a 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: PURPLE, fontSize: "0.78rem" }}>Psalm 77</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(107,79,187,0.12)", border: `1px solid rgba(107,79,187,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PURPLE, marginBottom: "1rem" }}>Psalm of Asaph &mdash; The Dark Night</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 77: I Will Remember<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>the Deeds of the LORD</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A psalm of Asaph &mdash; the cry of a sleepless soul tormented by questions about whether God&rsquo;s mercy has ended forever, and the deliberate, deciding turn to remember the mighty deeds of God in the days of old.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "Asaph"], ["Book", "Book III (Ps 73-89)"], ["Genre", "Lament / Trust"], ["Pivot", "v. 10-11"]].map(([k, v]) => (
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: From Sleepless Questions to Holy Memory</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 77 is one of the most psychologically penetrating of all the psalms, charting the journey of a believer through a dark night of the soul. It opens in acute distress: &ldquo;I cry aloud to God... In the day of my trouble I seek the Lord; in the night my hand is stretched out without wearying; my soul refuses to be comforted&rdquo; (vv. 1-2). The psalmist is sleepless, troubled, so agitated that he cannot speak (v. 4). His anguish is not primarily about external circumstances but about God himself &mdash; the terrifying suspicion that God may have changed, that his mercy may have run out." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The depth of the crisis is reached in the agonized questions of verses 7-9: &ldquo;Will the Lord spurn forever, and never again be favorable? Has his steadfast love forever ceased? Are his promises at an end for all time? Has God forgotten to be gracious? Has he in anger shut up his compassion?&rdquo; Derek Kidner observes the precision of these questions: &ldquo;They probe the very attributes of God &mdash; his favor, his steadfast love, his promises, his grace, his compassion &mdash; and ask whether each has failed. This is the deepest form of spiritual crisis: not doubt about circumstances, but doubt about the character of God himself.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The turning point comes in verses 10-11, and it is one of the most instructive pivots in all of Scripture: &ldquo;Then I said, &lsquo;I will appeal to this, to the years of the right hand of the Most High.&rsquo; I will remember the deeds of the LORD; yes, I will remember your wonders of old.&rdquo; Calvin highlights the deliberate, willed nature of this turn: &ldquo;The psalmist does not wait for his feelings to change; he resolves, by an act of the will, to remember. The verb is repeated &mdash; I will remember, I will remember &mdash; as a man bracing himself to a hard task. Memory becomes the medicine for despair.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The decisive shift is from introspection to recollection. In the first half of the psalm, the psalmist&rsquo;s gaze is turned inward, on his own troubled soul; the personal pronouns &lsquo;I&rsquo; and &lsquo;my&rsquo; dominate. After the pivot, his gaze turns outward and backward, to God&rsquo;s mighty deeds; the focus becomes &lsquo;you&rsquo; and &lsquo;your.&rsquo; Spurgeon notes the cure: &ldquo;While he looked within, he found only darkness and despair. The moment he turned to look back at what God had done, the light began to dawn. Self-examination had brought him to the brink of the pit; the remembrance of God drew him back.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm climaxes with a magnificent meditation on the exodus, when God led his people through the sea (vv. 16-20). &ldquo;Your way was through the sea, your path through the great waters; yet your footprints were unseen. You led your people like a flock by the hand of Moses and Aaron&rdquo; (vv. 19-20). Matthew Henry draws out the comfort of verse 19: &ldquo;God&rsquo;s footprints were unseen &mdash; his ways are often hidden, his methods past finding out &mdash; yet he led his people surely through the sea. Though we cannot trace him, we can trust him; the God who made a path through the deep is leading us still, even when we cannot see his footprints.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 77 offers profound help for the believer in spiritual darkness. It validates the experience of doubting God&rsquo;s character &mdash; not as a sin to be hidden but as a real crisis that even the faithful pass through. And it models the way out: not the suppression of doubt, nor waiting passively for feelings to change, but the deliberate, willed act of remembering God&rsquo;s past faithfulness. When present feeling testifies that God has abandoned us, the rehearsed memory of his proven deeds testifies otherwise &mdash; and faith chooses to believe the memory over the mood." }} />

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
                  color: PURPLE,
                  title: "The Dark Night and the Sleepless Soul",
                  body: "The first half of Psalm 77 is an unflinching portrait of spiritual anguish. The psalmist cries aloud, stretches out his hands through the night, refuses to be comforted, is so troubled he cannot speak, and lies awake while his eyelids are held open (vv. 1-4). This is the experience the Christian tradition has called &lsquo;the dark night of the soul&rsquo; &mdash; a season of profound distress in which God seems absent and the usual comforts fail. Crucially, the psalm does not present this as a failure of faith but as a real experience even of the godly. Kidner: &ldquo;The psalmist is no backslider; he is a believer in agony, and his agony is recorded in inspired Scripture precisely so that others in the dark may know they are not alone.&rdquo; This theme offers enormous comfort to those passing through spiritual darkness: the experience of the absent God, the sleepless night, the inconsolable soul, is charted in the Bible itself. You are not the first believer to walk this road, and the presence of such a psalm in Scripture is God&rsquo;s assurance that the road does not end in the dark."
                },
                {
                  color: ROSE,
                  title: "Questioning the Character of God",
                  body: "The crisis of Psalm 77 reaches its depth in the questions of verses 7-9, which probe the very attributes of God: &ldquo;Will the Lord spurn forever? Has his steadfast love forever ceased? Are his promises at an end? Has God forgotten to be gracious? Has he in anger shut up his compassion?&rdquo; These are not questions about circumstances but about God&rsquo;s essential character &mdash; his favor, his hesed, his faithfulness, his grace, his compassion. The psalmist asks whether each has failed. Kidner: &ldquo;This is the deepest form of spiritual crisis: doubt not about events but about the very nature of God.&rdquo; The theme is striking for its honesty. The Bible does not pretend that believers never entertain such terrible questions. By preserving them in inspired Scripture, it both legitimizes the honest expression of our darkest doubts and, crucially, frames them as questions rather than conclusions. The psalmist asks whether God&rsquo;s love has ceased; he does not assert that it has. The questions are the form his anguish takes &mdash; and they are about to be answered by the remembrance that follows."
                },
                {
                  color: TEAL,
                  title: "The Deliberate Turn to Remember",
                  body: "The hinge of the entire psalm is the willed decision of verses 10-11: &ldquo;I will appeal to this... I will remember the deeds of the LORD; yes, I will remember your wonders of old.&rdquo; This turn is not the result of changed feelings or improved circumstances. It is a deliberate act of the will, deciding to remember God&rsquo;s past faithfulness in defiance of present despair. Calvin: &ldquo;He does not wait for his feelings to change; he resolves to remember.&rdquo; The repetition of &lsquo;I will remember&rsquo; conveys the effort involved &mdash; this is a man bracing himself to a hard discipline. This theme provides the practical key to surviving spiritual darkness: when present feeling testifies that God has abandoned us, we deliberately rehearse the memory of his proven deeds, and faith chooses to believe the memory over the mood. Memory becomes medicine. This is why the rehearsal of God&rsquo;s works &mdash; in Scripture, in the sacraments, in personal testimony &mdash; is so vital to the life of faith. We are forgetful creatures, and in the dark we especially need to remember."
                },
                {
                  color: GOLD,
                  title: "From Introspection to the Mighty Acts of God",
                  body: "The structural turning point of Psalm 77 is a shift of gaze. In the first half, the psalmist looks inward, and the pronouns are dominated by &lsquo;I&rsquo; and &lsquo;my&rsquo; &mdash; my trouble, my soul, my spirit, my eyes. After the pivot, he looks outward and backward to God, and the focus becomes &lsquo;you&rsquo; and &lsquo;your&rsquo; &mdash; your deeds, your wonders, your way, your power. The psalm climaxes in a meditation on the exodus, when God led Israel through the sea (vv. 16-20). Spurgeon: &ldquo;While he looked within, he found only darkness; the moment he turned to look at what God had done, the light began to dawn.&rdquo; This theme exposes one of the great traps of spiritual darkness: excessive introspection. The endless examination of our own troubled feelings deepens the despair, because the self in crisis is an unreliable witness. The cure is to turn our gaze away from ourselves to the objective, historical acts of God &mdash; supremely the exodus and, for the Christian, the cross and resurrection. Verse 19&rsquo;s image of God&rsquo;s unseen footprints in the sea is the final comfort: even when we cannot trace God&rsquo;s ways, the God who made a path through the deep is leading us still."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 77 &mdash; 20 verses: from sleepless anguish to the path through the sea</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1-3", color: PURPLE, heading: "My Soul Refuses to Be Comforted", text: "&ldquo;I cry aloud to God... In the day of my trouble I seek the Lord; in the night my hand is stretched out without wearying; my soul refuses to be comforted. When I remember God, I moan.&rdquo; The psalm opens in acute distress. Strikingly, even remembering God brings a moan at this stage &mdash; the memory is not yet healing because it is filtered through despair. Calvin: &ldquo;At first the thought of God only deepens his grief; the cure will come, but not yet.&rdquo;" },
                { ref: "v. 4-6", color: PURPLE, heading: "You Hold My Eyelids Open", text: "&ldquo;You hold my eyelids open; I am so troubled that I cannot speak. I consider the days of old, the years long ago. I said, &lsquo;Let me remember my song in the night.&rsquo;&rdquo; The sleeplessness is attributed to God himself. The psalmist begins to search the past, but at this point the comparison only sharpens his pain. Spurgeon: &ldquo;He remembers his former songs and contrasts them bitterly with his present silence.&rdquo;" },
                { ref: "v. 7-9", color: ROSE, heading: "Has His Steadfast Love Ceased?", text: "The depth of the crisis &mdash; six questions probing God&rsquo;s character: &ldquo;Will the Lord spurn forever? Has his steadfast love forever ceased? Are his promises at an end for all time? Has God forgotten to be gracious? Has he in anger shut up his compassion?&rdquo; Kidner: &ldquo;This is doubt not about circumstances but about the very nature of God himself &mdash; the deepest spiritual crisis there is.&rdquo; The questions are agonized, but they remain questions, not conclusions." },
                { ref: "v. 10-12", color: TEAL, heading: "I Will Remember the Deeds of the LORD", text: "The pivot: &ldquo;Then I said, &lsquo;I will appeal to this, to the years of the right hand of the Most High.&rsquo; I will remember the deeds of the LORD; yes, I will remember your wonders of old. I will ponder all your work, and meditate on your mighty deeds.&rdquo; A deliberate act of the will, not a change of feeling. Calvin: &ldquo;He resolves to remember; memory becomes the medicine for despair.&rdquo; The pronouns shift from &lsquo;my&rsquo; to &lsquo;your.&rsquo;" },
                { ref: "v. 13-15", color: GOLD, heading: "What God Is Great Like Our God?", text: "&ldquo;Your way, O God, is holy. What god is great like our God? You are the God who works wonders; you have made known your might among the peoples. You with your arm redeemed your people.&rdquo; The remembrance bears fruit in worship. The God who seemed to have changed is rehearsed as the unchanging worker of wonders and redeemer of his people. Matthew Henry: &ldquo;The same attributes he questioned in the dark, he now confesses in the light of memory.&rdquo;" },
                { ref: "v. 16-18", color: GOLD, heading: "The Waters Saw You and Trembled", text: "A vivid poetic depiction of the exodus and Sinai: &ldquo;When the waters saw you, O God, when the waters saw you, they were afraid; indeed, the deep trembled. The clouds poured out water; the skies gave forth thunder; your arrows flashed on every side.&rdquo; Creation itself convulses before the God who delivers his people. The imagery recalls both the parting of the Red Sea and the thunder of Sinai." },
                { ref: "v. 19-20", color: TEAL, heading: "Your Footprints Were Unseen", text: "The climactic comfort: &ldquo;Your way was through the sea, your path through the great waters; yet your footprints were unseen. You led your people like a flock by the hand of Moses and Aaron.&rdquo; God&rsquo;s footprints in the sea are invisible &mdash; his ways are often hidden &mdash; yet he led his people surely through the deep. Matthew Henry: &ldquo;Though we cannot trace him, we can trust him; the God who made a path through the sea is leading us still.&rdquo; The psalm ends not with the crisis resolved by changed circumstances but by the recovered confidence that God leads his flock even on unseen paths." },
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
                  title: "Knowing You Are Not Alone in the Dark",
                  body: "If you are passing through a dark night of the soul &mdash; sleepless, troubled, unable to be comforted, even doubting God&rsquo;s character &mdash; Psalm 77 is God&rsquo;s gift to you. Its very presence in Scripture tells you that this experience is a known part of the life of faith, walked by the godly before you. You are not the first believer to lie awake wondering if God&rsquo;s mercy has run out, and you will not be the last. Take comfort that the Bible itself charts this road, which means it does not end in the dark. The God who inspired this psalm knows exactly where you are.",
                  prayer: "Lord, I am in the dark, and my soul refuses to be comforted. I have even wondered whether your love for me has ceased. Thank you that this psalm tells me I am not alone, that the godly have walked this road before me, and that it does not end in darkness. Hold me through the night. Amen."
                },
                {
                  color: TEAL,
                  icon: "&#9733;",
                  title: "Choosing to Remember When You Cannot Feel",
                  body: "The turning point of Psalm 77 was not a change of feeling but a decision: &lsquo;I will remember the deeds of the LORD.&rsquo; This is the practical key to surviving spiritual darkness. When your feelings testify that God has abandoned you, you can make a deliberate choice to remember his proven faithfulness &mdash; in Scripture (the exodus, the cross, the resurrection) and in your own life. Do not wait passively for the darkness to lift. Actively rehearse what God has done. Keep a record of answered prayers to read in the dark. Memory is medicine; faith chooses to believe the remembered deeds of God over the present mood.",
                  prayer: "God, I cannot feel your presence right now, but I make the choice the psalmist made: I will remember your deeds. I will remember the cross and the empty tomb. I will remember how you have carried me before. My feelings say you are absent; my memory says you are faithful. I choose to believe my memory. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9826;",
                  title: "Turning Your Gaze From Self to God",
                  body: "Psalm 77 reveals the trap of excessive introspection: while the psalmist looked inward at his own troubled soul, he only sank deeper; the moment he turned to look at God&rsquo;s mighty acts, the light dawned. In seasons of distress, we often make the mistake of endlessly examining our own feelings, which only intensifies the despair. The cure is to turn our gaze outward and upward &mdash; away from the unreliable witness of our troubled hearts to the objective, historical acts of God. When you find yourself spiraling in self-examination, deliberately redirect your attention to what God has done, supremely at the cross.",
                  prayer: "Lord, I have been staring inward at my own troubled heart, and it has only deepened my despair. Help me turn my gaze away from myself to you &mdash; to your mighty acts, your faithfulness, your cross. Lift my eyes from my feelings to your deeds, and let the sight of what you have done bring light to my darkness. Amen."
                },
                {
                  color: ROSE,
                  icon: "&#10022;",
                  title: "Trusting the God of Unseen Footprints",
                  body: "The psalm&rsquo;s final image &mdash; &lsquo;your footprints were unseen&rsquo; &mdash; is one of the most comforting in Scripture. God led Israel surely through the sea, yet his footprints in the water were invisible. So it often is in our lives: we cannot trace God&rsquo;s ways or understand his methods, yet he is leading us surely through the deep. When you cannot see what God is doing, when his path seems hidden and his footprints invisible, remember that the God who made a way through the Red Sea is leading you still. Though you cannot trace him, you can trust him.",
                  prayer: "Father, I cannot see your footprints; your way through this is hidden from me, and I do not understand your methods. But you led your people through the sea on a path no one could trace. You are leading me still, even when I cannot see how. Though I cannot trace you, I will trust you. Lead me through. Amen."
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

              <div style={{ background: `linear-gradient(135deg, rgba(107,79,187,0.08), rgba(217,119,6,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>Key Verse to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;I will remember the deeds of the LORD; yes, I will remember your wonders of old.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 77:11 &mdash; the deliberate turn from despair to holy memory</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
