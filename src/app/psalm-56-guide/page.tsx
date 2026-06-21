"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "5_dUtui1mWk", title: "Psalm 56 -- When I Am Afraid, I Trust" },
  { videoId: "8kvFD8aT8mU", title: "David in Gath (1 Samuel 21)" },
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

export default function Psalm56Page() {
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
            <span style={{ color: TEAL, fontSize: "0.78rem" }}>Psalm 56</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(13,148,136,0.12)", border: `1px solid rgba(13,148,136,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TEAL, marginBottom: "1rem" }}>Davidic Miktam &mdash; Seized in Gath</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 56: When I Am Afraid,<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>I Put My Trust in You</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A miktam of David, written when the Philistines seized him in Gath &mdash; the conquest of fear by deliberate trust, the refrain &ldquo;in God I trust; I shall not be afraid,&rdquo; and the tender image of God keeping our tears in his bottle.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "David"], ["Occasion", "1 Samuel 21"], ["Genre", "Miktam / Trust"], ["Key Verse", "v. 3-4"]].map(([k, v]) => (
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: The Conquest of Fear by Trust</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 56 is one of the great psalms of trust, and its superscription places it at one of the most terrifying moments of David&rsquo;s life: &ldquo;when the Philistines seized him in Gath.&rdquo; The reference is to 1 Samuel 21:10-15. Fleeing from Saul, David sought refuge in Gath &mdash; the hometown of Goliath, the giant he had killed &mdash; and was recognized by the servants of King Achish. In mortal danger, David feigned madness to escape. This psalm is the prayer of that crisis: a man cornered, afraid, and surrounded, who chooses to trust God in the very teeth of his terror." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm is designated a &lsquo;miktam,&rsquo; a term of uncertain meaning found in the titles of six psalms (16, 56-60), possibly indicating a &lsquo;golden&rsquo; or inscriptional psalm meant for permanent record. What is certain is the psalm&rsquo;s structure around a recurring refrain: &ldquo;In God, whose word I praise, in God I trust; I shall not be afraid. What can flesh do to me?&rdquo; (vv. 4, 10-11). This refrain anchors the whole psalm, returning the troubled soul again and again to the foundation of trust." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The most psychologically precise verses in the psalm are 3-4: &ldquo;When I am afraid, I put my trust in you. In God, whose word I praise, in God I trust; I shall not be afraid.&rdquo; Derek Kidner observes the remarkable realism here: &ldquo;David does not claim to be fearless. He says, &lsquo;When I am afraid&rsquo; &mdash; acknowledging fear as a present reality &mdash; and then makes trust his deliberate response to it. Trust is not the absence of fear but the answer to it.&rdquo; This is one of the most practically helpful insights in all of Scripture: courage is not the elimination of fear but the choice to trust God in the midst of it." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Charles Spurgeon dwells on the sequence: &ldquo;Observe the order. It is not &lsquo;I trust, and therefore I am never afraid,&rsquo; but &lsquo;When I am afraid, I will trust.&rsquo; Fear and faith may dwell in the same heart at the same moment, and the believer&rsquo;s task is to let faith master fear. The brave man is not he who feels no fear, but he who conquers it by trust.&rdquo; The refrain&rsquo;s rhetorical question &mdash; &lsquo;What can flesh do to me?&rsquo; &mdash; reframes the threat: the enemies are merely &lsquo;flesh,&rsquo; mortal and limited, while the One trusted is the eternal God." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "One of the most tender images in the entire Psalter appears in verse 8: &ldquo;You have kept count of my tossings; put my tears in your bottle. Are they not in your book?&rdquo; The picture of God collecting the believer&rsquo;s tears in a bottle (the ancient &lsquo;tear-bottle&rsquo; or lachrymatory, in which mourners were thought to collect their tears) is one of staggering intimacy. Matthew Henry: &ldquo;Not one of David&rsquo;s sleepless tossings on his bed of sorrow escaped God&rsquo;s notice; not one tear fell to the ground unrecorded. God treasures the griefs of his people as precious things to be remembered.&rdquo; This is the God who, in the NT, will finally &lsquo;wipe away every tear&rsquo; (Revelation 21:4)." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 56 addresses the universal human experience of fear with extraordinary honesty and hope. It does not offer the false comfort of pretending that danger is unreal, nor does it counsel the stoic suppression of emotion. Instead, it models a faith that fully acknowledges fear and then deliberately chooses trust, grounding that trust in the character of a God who notices every tear and holds every life. For an anxious age, the psalm&rsquo;s message is profoundly relevant: you do not have to be fearless to trust God; you only have to bring your fear to him." }} />

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
                  title: "Trust as the Deliberate Answer to Fear",
                  body: "The central insight of Psalm 56 is captured in verse 3: &ldquo;When I am afraid, I put my trust in you.&rdquo; This single sentence dismantles a common misconception &mdash; that faith means never being afraid. David, a seasoned warrior, openly admits fear; the Philistines had seized him in the city of his greatest enemy. But fear is not his final state; it is the occasion for a deliberate act of trust. Kidner: &ldquo;Trust is not a feeling that displaces fear automatically; it is a decision made in the presence of fear.&rdquo; The grammar matters: &lsquo;when&rsquo; (not &lsquo;if&rsquo;) acknowledges that fear is a recurring reality, and the response &lsquo;I put my trust&rsquo; is an active, willed choice. This theme is enormously liberating for believers who feel that their fear disqualifies them or marks them as faithless. Psalm 56 says the opposite: fear is precisely the moment for trust to act. Courage is not the absence of fear but the conquest of it by faith."
                },
                {
                  color: GOLD,
                  title: "The Refrain: What Can Flesh Do to Me?",
                  body: "The recurring refrain &mdash; &ldquo;In God, whose word I praise, in God I trust; I shall not be afraid. What can flesh do to me?&rdquo; (vv. 4, 10-11) &mdash; performs a crucial reframing. The enemies who terrify David are designated as &lsquo;flesh&rsquo; (basar) &mdash; mortal, finite, limited. Against the infinite, eternal God, the most powerful human enemy is merely flesh. Calvin: &ldquo;When faith sets the power of God against the power of man, the contest is no contest at all; the creature shrinks to its true proportions before the Creator.&rdquo; The rhetorical question is not a denial that flesh can inflict real harm &mdash; David knew it could kill &mdash; but a declaration that flesh cannot do anything outside God&rsquo;s sovereign permission and cannot touch the ultimate security of the one who trusts God. The repetition of the refrain shows that this is not a one-time realization but a truth the soul must rehearse repeatedly, returning to the anchor of trust each time fear rises again."
                },
                {
                  color: PURPLE,
                  title: "The God Who Treasures Our Tears",
                  body: "Verse 8 contains one of the most tender images in Scripture: &ldquo;You have kept count of my tossings; put my tears in your bottle. Are they not in your book?&rdquo; Three images of divine attentiveness pile up: God counts the restless tossings of the sleepless sufferer, collects the tears in a bottle, and records them in a book. The &lsquo;tear-bottle&rsquo; refers to the ancient practice of collecting mourners&rsquo; tears in small vials as a memorial of grief. The picture is of a God so attentive to his people&rsquo;s suffering that not one tear escapes his notice or falls unremembered. Spurgeon: &ldquo;Our mournings are precious to God. He bottles our tears as men bottle rare wine, treasuring them as things of value.&rdquo; This theme assures the suffering believer that their pain is seen, valued, and remembered by God &mdash; never wasted, never overlooked. It anticipates the NT promise that God will one day wipe away every tear (Revelation 21:4), implying that he has kept them all until then."
                },
                {
                  color: GREEN,
                  title: "Confidence in God's Word and Promises",
                  body: "Twice the refrain specifies &lsquo;in God, whose word I praise&rsquo; (vv. 4, 10). David&rsquo;s trust is not a vague optimism but a confidence anchored in God&rsquo;s revealed word &mdash; his promises. The word is the object of praise because it is the ground of trust. Longman notes that this connects the psalm to the broader biblical theology of the reliability of God&rsquo;s word: faith rests not on favorable circumstances but on the trustworthiness of what God has said. When David declares &lsquo;this I know, that God is for me&rsquo; (v. 9), his knowledge is grounded in God&rsquo;s self-revelation, not in the visible situation, which looked entirely hostile. This theme teaches that the substance of faith is taking God at his word. In a moment when every visible sign pointed to disaster, David anchored his confidence in the promises of God, which cannot fail. The believer&rsquo;s security rests on the immovable foundation of what God has spoken."
                },
                {
                  color: ROSE,
                  title: "Walking Before God in the Light of Life",
                  body: "The psalm concludes with a vow of thanksgiving and a beautiful statement of purpose (vv. 12-13): &ldquo;I will perform my vows to you, O God; I will render thank offerings to you. For you have delivered my soul from death, yes, my feet from falling, that I may walk before God in the light of life.&rdquo; The goal of deliverance is not mere survival but communion &mdash; to &lsquo;walk before God in the light of life.&rsquo; The phrase &lsquo;light of life&rsquo; suggests the favor and presence of God as the environment in which the redeemed life is lived. Calvin: &ldquo;God rescues us from death not that we may simply continue to exist but that we may walk in fellowship with him, in the light of his countenance.&rdquo; This theme points forward to Jesus&rsquo; declaration in John 8:12: &ldquo;I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life.&rdquo; The deliverance of Psalm 56 finds its fullest meaning in the life of communion with God that Christ makes possible."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 56 &mdash; 13 verses anchored by the refrain of trust</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1-2", color: ROSE, heading: "Be Gracious, For Man Tramples Me", text: "&ldquo;Be gracious to me, O God, for man tramples on me; all day long an attacker oppresses me.&rdquo; David opens with the cry for grace amid relentless pressure &mdash; &lsquo;all day long&rsquo; the trampling continues. The enemies are &lsquo;many&rsquo; who fight &lsquo;proudly.&rsquo; Calvin: &ldquo;The continuance of trouble (&lsquo;all day long&rsquo;) is often harder to bear than its severity; David feels the wearing weight of unceasing opposition.&rdquo;" },
                { ref: "v. 3-4", color: TEAL, heading: "When I Am Afraid, I Trust", text: "The psychological heart of the psalm: &ldquo;When I am afraid, I put my trust in you. In God, whose word I praise, in God I trust; I shall not be afraid. What can flesh do to me?&rdquo; David admits fear and makes trust his deliberate response. The refrain anchors the whole psalm. Kidner: &ldquo;Trust is the decision made in the presence of fear, not its automatic absence.&rdquo; The designation of enemies as mere &lsquo;flesh&rsquo; reframes the threat against the backdrop of God&rsquo;s power." },
                { ref: "v. 5-6", color: ROSE, heading: "They Watch My Steps", text: "&ldquo;All day long they injure my cause; all their thoughts are against me for evil. They stir up strife, they lurk; they watch my steps, as they have waited for my life.&rdquo; The enemies are relentless and calculating, twisting David&rsquo;s words and lying in wait. The image of watching his steps conveys the constant surveillance of those who seek his life. Spurgeon: &ldquo;To be hunted is wearying; to be watched continually is a torment; yet David turns from the watchers to the One who watches over him.&rdquo;" },
                { ref: "v. 7-8", color: PURPLE, heading: "You Keep Count of My Tossings", text: "After praying for justice (v. 7), David turns to one of the tenderest images in Scripture (v. 8): &ldquo;You have kept count of my tossings; put my tears in your bottle. Are they not in your book?&rdquo; God counts the sleepless tossings, collects the tears in a bottle, records them in a book. Matthew Henry: &ldquo;Not one tear of his people falls to the ground unnoticed; God treasures their griefs as precious things.&rdquo; The God of infinite power is also the God of infinite tenderness." },
                { ref: "v. 9-11", color: GOLD, heading: "This I Know, God Is For Me", text: "&ldquo;Then my enemies will turn back in the day when I call. This I know, that God is for me.&rdquo; The refrain returns (vv. 10-11), repeated with emphasis. The declaration &lsquo;God is for me&rsquo; is the ground of all confidence &mdash; the same truth Paul will magnify in Romans 8:31 (&lsquo;If God is for us, who can be against us?&rsquo;). David&rsquo;s knowledge is grounded not in his circumstances but in God&rsquo;s revealed character. Calvin: &ldquo;To know that God is for us is to possess a fortress that no enemy can breach.&rdquo;" },
                { ref: "v. 12-13", color: GREEN, heading: "That I May Walk in the Light of Life", text: "The psalm closes with vowed thanksgiving and the purpose of deliverance: &ldquo;For you have delivered my soul from death, yes, my feet from falling, that I may walk before God in the light of life.&rdquo; The goal of rescue is communion &mdash; walking before God in the light of his presence. Longman: &ldquo;Deliverance is never an end in itself; it is for the sake of restored fellowship with God.&rdquo; The phrase &lsquo;light of life&rsquo; anticipates Jesus&rsquo; words in John 8:12, where he names himself the light of the world and the giver of the light of life." },
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
                  title: "Making Trust Your Response to Fear",
                  body: "Psalm 56:3 offers one of the most practical spiritual tools in all of Scripture: &lsquo;When I am afraid, I put my trust in you.&rsquo; This is a script you can use the moment fear rises. Rather than berating yourself for being afraid, or trying to suppress the feeling, you can turn the fear itself into a trigger for trust. The next time anxiety grips you &mdash; about your health, your finances, your relationships, your future &mdash; train yourself to respond with these words: &lsquo;When I am afraid, I put my trust in you.&rsquo; Fear becomes not a sign of weak faith but the very occasion for faith to act. This is the discipline that transforms the anxious heart over time.",
                  prayer: "Lord, I am afraid &mdash; I will not pretend otherwise. But in this very moment of fear, I make my choice: I put my trust in you. You are greater than what I fear. In God, whose word I praise, I trust; I shall not be afraid. What can flesh do to me? Amen."
                },
                {
                  color: PURPLE,
                  icon: "&#9826;",
                  title: "Resting in the God Who Bottles Your Tears",
                  body: "Verse 8 reveals a God so attentive that he counts your sleepless tossings and collects your tears in a bottle. If you are in a season of grief &mdash; lying awake at night, weeping in private, feeling that your sorrow is invisible to everyone &mdash; this verse is for you. Your tears are not falling unnoticed. God sees every one, treasures each, and records them in his book. No grief you carry is overlooked by him. Let this tender truth comfort you: the God of the universe is not indifferent to your pain. He is keeping count, and one day he will wipe every tear away.",
                  prayer: "Father, you have kept count of my sleepless nights and collected my tears in your bottle. Nothing I have wept has escaped your notice. Thank you that my grief is seen and treasured by you. Comfort me with the knowledge that you will one day wipe away every tear. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9733;",
                  title: "Reducing Your Enemies to 'Flesh'",
                  body: "The refrain&rsquo;s rhetorical question &mdash; &lsquo;What can flesh do to me?&rsquo; &mdash; is a tool for right-sizing the threats that loom over us. When you are intimidated by a powerful person, an overwhelming circumstance, or a frightening diagnosis, the psalm invites you to remember that these are all merely &lsquo;flesh&rsquo; &mdash; finite, mortal, and ultimately under God&rsquo;s sovereign control. This does not mean the threats are not real or painful, but it reframes them against the infinitely greater power of the God who is for you. Practice setting the power of God against the power of whatever you fear, and watch the threat shrink to its true proportions.",
                  prayer: "Almighty God, the things I fear loom large in my sight. Help me to see them as they truly are &mdash; mere flesh, finite and mortal, under your sovereign hand. You are infinitely greater than all of them. With you for me, what can flesh do to me? I rest in your power. Amen."
                },
                {
                  color: GREEN,
                  icon: "&#10022;",
                  title: "Living for Communion, Not Just Survival",
                  body: "Verse 13 reveals the purpose of God&rsquo;s deliverance: not mere survival, but to &lsquo;walk before God in the light of life.&rsquo; When God rescues you from a trial, the goal is not simply that you go on existing but that you live in deeper communion with him. Reflect on the deliverances God has worked in your life. Have you used the gift of continued life to walk more closely with him, or merely to return to business as usual? The psalm calls us to receive every rescue as an invitation to walk before God in the light of his presence &mdash; the light that, for the Christian, is found fully in Christ, the light of the world.",
                  prayer: "Lord, you have delivered my soul from death and my feet from falling. Let me not waste this gift on mere survival. I want to walk before you in the light of life &mdash; in deeper communion, greater obedience, and closer fellowship. Thank you for rescuing me for relationship with you. Amen."
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

              <div style={{ background: `linear-gradient(135deg, rgba(13,148,136,0.08), rgba(107,79,187,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>Key Verse to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;When I am afraid, I put my trust in you. In God, whose word I praise, in God I trust; I shall not be afraid.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 56:3-4 &mdash; trust as the deliberate answer to fear</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
