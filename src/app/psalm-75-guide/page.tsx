"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "Gqubm5Mg7Bw", title: "Psalm 75 -- God the Righteous Judge" },
  { videoId: "j9phNEaPrv8", title: "The Cup of God's Wrath in Scripture" },
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

export default function Psalm75Page() {
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
            <span style={{ color: GOLD, fontSize: "0.78rem" }}>Psalm 75</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(217,119,6,0.12)", border: `1px solid rgba(217,119,6,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>Psalm of Asaph &mdash; Thanksgiving &amp; Warning</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 75: It Is God Who<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>Executes Judgment</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A psalm of Asaph &mdash; thanksgiving for the God who judges at his appointed time, a warning against the arrogant who lift up their horn, and the sobering image of the cup of foaming wine in the LORD&rsquo;s hand.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "Asaph"], ["Book", "Book III (Ps 73-89)"], ["Genre", "Thanksgiving"], ["Key Verse", "v. 7"]].map(([k, v]) => (
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: The Judge Who Sets the Time</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 75 is a psalm of Asaph that functions as both thanksgiving and warning. It opens with the gathered community giving thanks: &ldquo;We give thanks to you, O God; we give thanks, for your name is near. We recount your wondrous deeds&rdquo; (v. 1). But the bulk of the psalm is given over to a divine speech in which God himself declares his sovereign control over the timing of judgment and the rise and fall of the proud. It is a psalm that answers one of the most pressing questions of faith: when the arrogant and wicked seem to triumph, who is really in control, and when will justice come?" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The answer comes in God&rsquo;s own voice in verse 2: &ldquo;At the set time that I appoint I will judge with equity.&rdquo; Derek Kidner emphasizes the importance of this divine timing: &ldquo;The wicked are not escaping judgment; they are awaiting it. God has fixed an appointed time, and at that moment he will judge with perfect equity. The apparent delay is not indifference but sovereign scheduling.&rdquo; This is a crucial answer to the perennial complaint that the wicked prosper: their prosperity is temporary and their judgment is appointed." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "A central image of the psalm is the &lsquo;horn&rsquo; &mdash; a symbol of strength and pride drawn from the powerful horns of an animal. God warns the arrogant: &ldquo;Do not lift up your horn on high, or speak with haughty neck&rdquo; (v. 5). The proud exalt their own horn, trusting in their strength; but verse 7 declares that &ldquo;it is God who executes judgment, putting down one and lifting up another.&rdquo; Calvin comments: &ldquo;All elevation and abasement among men is in the hand of God. The proud man imagines he has lifted himself; in truth, none rises or falls but by the decree of the Judge who governs all.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The most sobering image of the psalm is the cup in verse 8: &ldquo;For in the hand of the LORD there is a cup with foaming wine, well mixed, and he pours out from it, and all the wicked of the earth shall drain it down to the dregs.&rdquo; The cup of God&rsquo;s wrath is a recurring biblical image (Jeremiah 25:15-29, Isaiah 51:17, Revelation 14:10). Spurgeon notes the dreadful thoroughness of the picture: &ldquo;The wicked shall not merely sip but drain the cup to its bitter dregs. The judgment, when it comes, will be full and complete.&rdquo; Yet this same cup points forward to the gospel: at Gethsemane, Jesus prayed, &lsquo;Let this cup pass from me&rsquo; (Matthew 26:39), and then drank it to the dregs in the place of his people, so that those who trust him need never taste it." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm closes with the contrast between the destinies of the wicked and the righteous: &ldquo;All the horns of the wicked I will cut off, but the horns of the righteous shall be lifted up&rdquo; (v. 10). Matthew Henry draws the lesson: &ldquo;The same God who abases the proud exalts the humble. The horn the wicked lifted up in pride is cut off; the horn the righteous never trusted in is lifted up by God himself. Such is the great reversal that judgment brings.&rdquo; The psalm ends with the worshipper resolving to declare and sing God&rsquo;s praise forever." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 75 directly addresses the problem of the prosperity of the wicked &mdash; the same problem that troubled Asaph in the preceding Psalm 73 and Job throughout his book. Its answer is not that the wicked never prosper, but that their prosperity is temporary and their judgment is certain and appointed. The God who seems to delay is in fact sovereignly scheduling a judgment that will be perfectly just and thoroughly complete. For believers tempted to envy the arrogant or despair at injustice, the psalm offers the steadying assurance that the timing of justice rests entirely in the hands of a God who judges with equity." }} />

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
                  title: "God's Appointed Time for Judgment",
                  body: "The theological heart of the psalm is God&rsquo;s declaration in verse 2: &ldquo;At the set time that I appoint I will judge with equity.&rdquo; This single sentence answers the agonized &lsquo;how long?&rsquo; of so many lament psalms. Judgment is not absent; it is appointed. God has fixed a precise moment, known to him, at which he will judge with perfect fairness. The delay that troubles the righteous is not divine indifference or weakness but sovereign scheduling. Kidner: &ldquo;The wicked are not escaping judgment; they are awaiting it.&rdquo; This theme provides a crucial corrective to the impatience that injustice provokes. We are tempted to conclude, from the apparent delay of justice, that justice will never come &mdash; or that God does not see or care. Psalm 75 insists otherwise: the timing belongs to God, who has appointed the day. This is the same truth Peter applies to the apparent delay of Christ&rsquo;s return: &lsquo;The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you&rsquo; (2 Peter 3:9). What looks like delay is divine patience and sovereign timing."
                },
                {
                  color: ROSE,
                  title: "The Folly of the Lifted Horn",
                  body: "The image of the &lsquo;horn&rsquo; &mdash; the symbol of strength and self-exaltation &mdash; runs through the psalm. God warns the arrogant: &ldquo;Do not lift up your horn on high, or speak with haughty neck&rdquo; (vv. 4-5). The proud lift up their own horn, trusting in their power and boasting in their security. But this self-exaltation is folly, because all true elevation and abasement come from God alone (v. 7). Calvin: &ldquo;The proud man imagines he has lifted himself; in truth, none rises or falls but by the decree of God.&rdquo; This theme exposes the fundamental delusion of human pride: the belief that we are the architects of our own success and the masters of our own destiny. The lifted horn is a posture of defiance against the God who alone gives and takes away. The proper response is humility &mdash; the recognition that whatever strength or position we have is a gift, held at God&rsquo;s pleasure. The horn lifted up in pride will be cut off (v. 10); only the horn that God lifts up endures."
                },
                {
                  color: TEAL,
                  title: "God Alone Puts Down and Lifts Up",
                  body: "Verses 6-7 locate all authority over human destiny in God: &ldquo;For not from the east or from the west and not from the wilderness comes lifting up, but it is God who executes judgment, putting down one and lifting up another.&rdquo; No direction on the compass &mdash; no human source of help, no alliance, no fortune &mdash; can lift a person up; only God can. This theme is a profound statement of divine sovereignty over the rise and fall of individuals and nations. Hannah&rsquo;s song expresses the same truth: &lsquo;The LORD makes poor and makes rich; he brings low and he exalts&rsquo; (1 Samuel 2:7). Mary&rsquo;s Magnificat echoes it: &lsquo;He has brought down the mighty from their thrones and exalted those of humble estate&rsquo; (Luke 1:52). This theme both humbles and comforts. It humbles the proud, who must reckon that their position is not self-made and not secure apart from God. And it comforts the lowly and oppressed, who can trust that the God who lifts up is able to raise them in his time, regardless of the powers arrayed against them. Promotion comes neither from human striving nor from chance, but from the hand of God."
                },
                {
                  color: PURPLE,
                  title: "The Cup of Wrath and Its Gospel Reversal",
                  body: "The sobering image of verse 8 &mdash; the cup of foaming, well-mixed wine in the LORD&rsquo;s hand, which the wicked must drain to the dregs &mdash; is one of Scripture&rsquo;s most vivid pictures of divine judgment. The cup of God&rsquo;s wrath appears throughout the Bible (Jeremiah 25:15, Isaiah 51:17, Revelation 14:10), always signifying the full measure of deserved judgment. Spurgeon: &ldquo;The wicked shall not merely sip but drain the cup to its bitter dregs.&rdquo; But this image carries a stunning gospel resonance. In Gethsemane, Jesus prayed, &lsquo;My Father, if it be possible, let this cup pass from me&rsquo; (Matthew 26:39), and then, in obedience, drank the cup of wrath to its dregs on the cross &mdash; not for his own sin, for he had none, but in the place of his people. This is the heart of substitutionary atonement: the cup that the wicked deserve to drink, Christ drank for all who trust in him. The theme thus moves from terror to grace. The believer&rsquo;s confidence in the face of God&rsquo;s judgment is not that they deserve to escape the cup, but that Another has drained it on their behalf."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 75 &mdash; 10 verses of thanksgiving, divine speech, and warning</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1", color: GOLD, heading: "We Give Thanks, Your Name Is Near", text: "&ldquo;We give thanks to you, O God; we give thanks, for your name is near. We recount your wondrous deeds.&rdquo; The psalm opens with doubled thanksgiving. The phrase &lsquo;your name is near&rsquo; affirms God&rsquo;s present, accessible character &mdash; he is not a distant deity but near to his people. Calvin: &ldquo;The nearness of God&rsquo;s name is the ground of all thanksgiving; he is not far off but present to save.&rdquo;" },
                { ref: "v. 2-3", color: TEAL, heading: "At the Set Time I Will Judge", text: "God himself speaks: &ldquo;At the set time that I appoint I will judge with equity. When the earth totters, and all its inhabitants, it is I who keep steady its pillars.&rdquo; The appointed time of judgment is God&rsquo;s alone to set. Even when the earth seems to dissolve in chaos, God holds its pillars steady. Kidner: &ldquo;The wicked are not escaping judgment; they are awaiting it, and meanwhile God upholds the very world that totters under their evil.&rdquo;" },
                { ref: "v. 4-5", color: ROSE, heading: "Do Not Lift Up Your Horn", text: "&ldquo;I say to the boastful, &lsquo;Do not boast,&rsquo; and to the wicked, &lsquo;Do not lift up your horn; do not lift up your horn on high, or speak with haughty neck.&rsquo;&rdquo; The warning against arrogance. The horn lifted high is the posture of defiant pride. Spurgeon: &ldquo;The wicked toss their heads like a bull lifting its horns, but the Lord bids them lower their pride before he lowers it for them.&rdquo;" },
                { ref: "v. 6-7", color: TEAL, heading: "It Is God Who Executes Judgment", text: "&ldquo;For not from the east or from the west and not from the wilderness comes lifting up, but it is God who executes judgment, putting down one and lifting up another.&rdquo; No human source can exalt a person; only God lifts up and brings low. Calvin: &ldquo;All elevation and abasement among men is in the hand of God.&rdquo; This echoes Hannah&rsquo;s song (1 Samuel 2:7) and Mary&rsquo;s Magnificat (Luke 1:52)." },
                { ref: "v. 8", color: PURPLE, heading: "The Cup in the Hand of the LORD", text: "&ldquo;For in the hand of the LORD there is a cup with foaming wine, well mixed, and he pours out from it, and all the wicked of the earth shall drain it down to the dregs.&rdquo; The cup of God&rsquo;s wrath, drained to the bitter dregs by the wicked. Spurgeon: &ldquo;They shall not sip but drain it.&rdquo; Yet this is the very cup Christ drained at the cross (Matthew 26:39) in the place of his people, so that those who trust him need never taste it." },
                { ref: "v. 9", color: GOLD, heading: "But I Will Declare It Forever", text: "&ldquo;But I will declare it forever; I will sing praises to the God of Jacob.&rdquo; In contrast to the doom of the wicked, the worshipper resolves to declare and sing God&rsquo;s praise perpetually. Matthew Henry: &ldquo;While the wicked drink the cup of wrath, the righteous lift the cup of salvation and sing.&rdquo; The proper response to God&rsquo;s righteous judgment is grateful, unending praise." },
                { ref: "v. 10", color: ROSE, heading: "The Horns of the Righteous Lifted Up", text: "&ldquo;All the horns of the wicked I will cut off, but the horns of the righteous shall be lifted up.&rdquo; The great reversal: the horn the wicked lifted in pride is cut off; the horn the righteous never trusted in is lifted up by God himself. Matthew Henry: &ldquo;The same God who abases the proud exalts the humble.&rdquo; The psalm ends with the certainty that God&rsquo;s judgment vindicates the righteous and humbles the arrogant." },
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
                  title: "Trusting God's Timing for Justice",
                  body: "When you are frustrated that the arrogant and wicked seem to prosper while justice is delayed, Psalm 75 offers the steadying truth: &lsquo;At the set time that I appoint I will judge with equity.&rsquo; God has not forgotten or failed to act; he has appointed a precise time for judgment that will be perfectly fair. The delay that troubles you is sovereign scheduling, not divine indifference. This frees you from both the bitterness of thinking justice will never come and the impatience of trying to force it yourself. You can rest, knowing the timing of justice is in the hands of a God who judges with equity.",
                  prayer: "Lord, I grow impatient when the arrogant prosper and justice seems delayed. Help me trust that you have appointed the set time, and that you will judge with perfect equity. Free me from bitterness and from the urge to take justice into my own hands. I rest in your sovereign timing. Amen."
                },
                {
                  color: ROSE,
                  icon: "&#9826;",
                  title: "Lowering the Lifted Horn of Pride",
                  body: "God&rsquo;s warning &mdash; &lsquo;Do not lift up your horn on high&rsquo; &mdash; is addressed to every human heart, not just the obviously wicked. Examine yourself for the lifted horn of pride: the assumption that your success is self-made, the boasting (even internal) in your own strength, the haughty confidence that your position is secure by your own doing. Psalm 75 reminds you that all elevation comes from God alone. Lower your horn voluntarily through humility before God humbles you. Acknowledge that whatever strength, position, or success you have is a gift held at his pleasure.",
                  prayer: "God, expose the pride in my heart &mdash; the lifted horn, the haughty confidence that my success is my own doing. I confess that everything I have is a gift from you. Teach me to lower my horn in humility before you, acknowledging that you alone lift up and bring low. Amen."
                },
                {
                  color: PURPLE,
                  icon: "&#9733;",
                  title: "Resting in the Cup Christ Drank for You",
                  body: "The cup of God&rsquo;s wrath in verse 8 is terrifying &mdash; foaming wine that the wicked must drain to the dregs. But the gospel transforms this image into the deepest comfort. In Gethsemane, Jesus prayed about this very cup and then drank it to the bottom on the cross, in the place of all who trust him. If you are in Christ, the cup of wrath you deserved has already been drained by your Savior. You will never taste it. Let this truth move you to worship: your confidence before God&rsquo;s judgment is not that you deserve to escape, but that Christ has absorbed it all on your behalf.",
                  prayer: "Lord Jesus, in Gethsemane you prayed about the cup of wrath, and then you drank it to the dregs on the cross in my place. The judgment I deserved, you absorbed. I will never taste that cup because you drained it for me. With overflowing gratitude, I worship you, my substitute and Savior. Amen."
                },
                {
                  color: TEAL,
                  icon: "&#10022;",
                  title: "Trusting God to Lift You Up in His Time",
                  body: "The truth that &lsquo;it is God who executes judgment, putting down one and lifting up another&rsquo; is not only a warning to the proud but a comfort to the lowly. If you are in a season of being overlooked, oppressed, or held down by powers beyond your control, Psalm 75 assures you that your elevation does not depend on human sources &mdash; not the east or the west, not connections or fortune &mdash; but on God alone. He is able to lift you up in his time, regardless of what stands against you. Wait on him with humility, trusting that the God who lifts up the humble has not forgotten you.",
                  prayer: "Father, I have felt overlooked and held down, unable to lift myself no matter how I try. I rest in your promise that you alone lift up. My elevation does not depend on human favor but on your hand. In your time and your way, lift me up. Until then, keep me humble and patient before you. Amen."
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

              <div style={{ background: `linear-gradient(135deg, rgba(217,119,6,0.08), rgba(107,79,187,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>Key Verse to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;It is God who executes judgment, putting down one and lifting up another.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 75:7 &mdash; all elevation and abasement is in the hand of God</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
