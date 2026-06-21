"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "0Y5GZB2cMHU", title: "Psalm 55 -- Cast Your Burden on the LORD" },
  { videoId: "hBYuv5zNF8Q", title: "Betrayal in the Psalms" },
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

export default function Psalm55Page() {
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
            <span style={{ color: PURPLE, fontSize: "0.78rem" }}>Psalm 55</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(107,79,187,0.12)", border: `1px solid rgba(107,79,187,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PURPLE, marginBottom: "1rem" }}>Davidic Maschil &mdash; The Wound of a Friend</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 55: Cast Your Burden<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>on the LORD</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A maschil of David &mdash; the anguished cry of a man betrayed by an intimate friend, longing for the wings of a dove to fly away, yet anchored by one of the Psalter&rsquo;s greatest promises: cast your burden on the LORD, and he will sustain you.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "David"], ["Book", "Book II (Ps 42-72)"], ["Genre", "Lament"], ["Key Verse", "v. 22"]].map(([k, v]) => (
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: The Anguish of Betrayed Friendship</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 55 is one of the most emotionally raw psalms in the entire Psalter. It is the prayer of a man in genuine anguish &mdash; not merely inconvenienced or opposed, but in &lsquo;horror&rsquo; (v. 5), his heart &lsquo;in anguish within&rsquo; (v. 4), trembling at the terror of death. The cause of this distress becomes clear as the psalm unfolds: David has been betrayed not by an open enemy but by a trusted intimate, a companion with whom he once enjoyed sweet fellowship and walked to the house of God (vv. 13-14)." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Many commentators connect the psalm to the betrayal of Ahithophel, David&rsquo;s trusted counselor who defected to Absalom during the rebellion (2 Samuel 15-17). Ahithophel&rsquo;s counsel was so esteemed that it was &lsquo;as if one consulted the word of God&rsquo; (2 Samuel 16:23), yet he turned against David and ultimately hanged himself &mdash; a detail that gives the psalm&rsquo;s imprecations against the traitor a sobering historical resonance. Derek Kidner notes that whether or not the specific identification is correct, &ldquo;the psalm speaks for every soul that has known the peculiar bitterness of betrayal by one who was once a friend.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The most famous lines of the psalm capture the universal human longing to escape unbearable pain: &ldquo;Oh, that I had wings like a dove! I would fly away and be at rest; yes, I would wander far away; I would lodge in the wilderness&rdquo; (vv. 6-8). Spurgeon writes movingly of this verse: &ldquo;Who has not felt this? The desire to escape, to fly away from the storm of strife and the wound of betrayal, is deeply human. David voices what every troubled heart has wished. Yet the psalm does not end in flight; it ends in trust.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Calvin observes the psychological honesty of the psalm: David does not pretend to a serene faith he does not feel. &ldquo;The Holy Spirit has here portrayed the inner conflict of a believer with such fidelity that we recognize our own hearts. David is tossed between terror and trust, between the longing to flee and the resolve to pray. This is the real experience of faith under pressure &mdash; not a placid calm but a hard-won confidence wrested from the jaws of despair.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The theological summit of the psalm is verse 22, one of the most beloved promises in all of Scripture: &ldquo;Cast your burden on the LORD, and he will sustain you; he will never permit the righteous to be moved.&rdquo; Matthew Henry comments: &ldquo;Here is the remedy for all the anguish that goes before. The burden that crushes us is meant to be cast &mdash; rolled off our shoulders onto the LORD, who is able to bear it and to sustain the one who casts it.&rdquo; The apostle Peter draws directly on this verse in 1 Peter 5:7: &ldquo;casting all your anxieties on him, because he cares for you.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 55 demonstrates that biblical faith does not require the suppression of painful emotion. David&rsquo;s raw expression of anguish, his longing to escape, and his honest anger at betrayal are all preserved in inspired Scripture &mdash; not as failures of faith but as the authentic texture of a believer&rsquo;s struggle. The God of the Bible invites his people to bring their unfiltered pain to him, and Psalm 55 shows the path from that pain to the rest of verse 22. For a generation acquainted with anxiety and betrayal, the psalm offers both permission to grieve and a destination for the grief: the sustaining hands of God." }} />

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
                  title: "The Unique Pain of Betrayal by an Intimate",
                  body: "The heart of Psalm 55&rsquo;s anguish is revealed in verses 12-14: &ldquo;For it is not an enemy who taunts me &mdash; then I could bear it... But it is you, a man, my equal, my companion, my familiar friend. We used to take sweet counsel together; within God&rsquo;s house we walked in the throng.&rdquo; David explicitly contrasts the betrayal of a friend with the hostility of an enemy: an enemy&rsquo;s attack is bearable because it is expected, but a friend&rsquo;s betrayal pierces precisely because of the trust it violates. The detail that they &lsquo;walked to the house of God together&rsquo; deepens the wound &mdash; this was a betrayal of shared faith and worship, not merely shared society. Calvin: &ldquo;The closer the friendship, the deeper the wound when it is broken. To be betrayed by one with whom we prayed is a grief that has no earthly cure.&rdquo; This theme finds its ultimate expression in the betrayal of Jesus by Judas, who dipped his hand in the same dish and then handed him over (cf. Psalm 41:9)."
                },
                {
                  color: TEAL,
                  title: "The Longing to Escape",
                  body: "Verses 6-8 express one of the most universally felt human desires: &ldquo;Oh, that I had wings like a dove! I would fly away and be at rest... I would hurry to find a shelter from the raging wind and tempest.&rdquo; The longing to escape unbearable circumstances is not condemned in the psalm; it is honestly expressed. The dove&rsquo;s wings represent the wish to flee from the storm of conflict to the peace of the wilderness. Spurgeon notes that this is a real and understandable desire, but also that it is not God&rsquo;s ultimate answer: &ldquo;David wished for wings, but God gave him something better &mdash; not escape from the trouble but sustenance within it.&rdquo; The theme reflects a profound truth about the life of faith: God does not usually grant us escape from our trials but provides his presence and strength in the midst of them. The dove&rsquo;s wings are the wish; the cast burden of verse 22 is the reality."
                },
                {
                  color: ROSE,
                  title: "Honest Anguish and Imprecation",
                  body: "Psalm 55 does not sanitize David&rsquo;s emotional state. He speaks of his &lsquo;anguish&rsquo; and the &lsquo;terrors of death&rsquo; falling upon him (vv. 4-5), and he prays for God&rsquo;s judgment on the treacherous (vv. 9, 15, 23). These imprecations are jarring to modern sensibilities, but they reflect the psalm&rsquo;s refusal to pretend. Tremper Longman argues that the honesty is itself the point: &ldquo;The psalmist brings his actual feelings &mdash; including rage at betrayal &mdash; into the presence of God rather than acting them out in vengeance or burying them in denial.&rdquo; This is the spiritual function of the imprecatory passages: they are the alternative to taking matters into one&rsquo;s own hands. By praying for justice rather than enacting revenge, David surrenders the outcome to God. The honesty of the lament is a model for believers who fear that their darkest emotions disqualify them from prayer &mdash; on the contrary, those emotions are precisely what God invites us to bring."
                },
                {
                  color: GOLD,
                  title: "Cast Your Burden on the LORD",
                  body: "The climax of the psalm is verse 22: &ldquo;Cast your burden on the LORD, and he will sustain you; he will never permit the righteous to be moved.&rdquo; The word translated &lsquo;burden&rsquo; (yehav) is rare, meaning something like &lsquo;what is given to you&rsquo; &mdash; your lot, your allotted portion of trouble. The command is to &lsquo;cast&rsquo; (shalak) it &mdash; to throw it decisively off our own shoulders onto the LORD. The promise is twofold: he will &lsquo;sustain&rsquo; (provide what is needed to bear up) and he will &lsquo;never permit the righteous to be moved&rsquo; (guarantee ultimate stability). Matthew Henry: &ldquo;God does not promise that the righteous shall not be afflicted, but that they shall not be moved &mdash; not shaken from their foundation.&rdquo; Peter&rsquo;s use of this verse in 1 Peter 5:7 adds the tender motive: &lsquo;because he cares for you.&rsquo; The casting of the burden is grounded in the care of God. This is the theological answer to the anguish of the whole psalm: not escape, but a God who bears what we cannot."
                },
                {
                  color: GREEN,
                  title: "The Certainty of Divine Justice",
                  body: "The psalm closes with a confident contrast between the destiny of the treacherous and the trust of the righteous: &ldquo;But you, O God, will cast them down into the pit of destruction; men of blood and treachery shall not live out half their days. But I will trust in you&rdquo; (v. 23). The reference to the traitor not living out half his days resonates with the fate of Ahithophel, who took his own life. The theme establishes that betrayal does not have the last word: the God who sees the violated trust will render justice, and the one who trusts him will be vindicated. Kidner: &ldquo;The psalm ends where it should &mdash; not in the wish for wings, not in the cry of anguish, but in the settled resolve, &lsquo;I will trust in you.&rsquo;&rdquo; The final three words are the destination of the entire turbulent journey: from anguish, through longing and imprecation, to trust."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 55 &mdash; 23 verses of anguish, longing, betrayal, and trust</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1-3", color: PURPLE, heading: "Hide Not From My Plea", text: "&ldquo;Give ear to my prayer, O God, and hide not yourself from my plea for mercy.&rdquo; David begins with urgent appeal, restless and moaning because of the enemy&rsquo;s threats. The fear of being abandoned by God in the hour of need (&lsquo;hide not yourself&rsquo;) is the first anxiety to be confronted. Calvin: &ldquo;The first temptation in great trouble is to imagine that God has withdrawn; David counters it by pressing closer in prayer.&rdquo;" },
                { ref: "v. 4-5", color: ROSE, heading: "The Terrors of Death", text: "&ldquo;My heart is in anguish within me; the terrors of death have fallen upon me. Fear and trembling come upon me, and horror overwhelms me.&rdquo; The language is unflinching. David does not minimize his distress; he names it fully &mdash; anguish, terror, fear, trembling, horror. Spurgeon: &ldquo;The man of God is not ashamed to confess his fears. Faith does not abolish feeling; it directs feeling to its proper refuge.&rdquo;" },
                { ref: "v. 6-8", color: TEAL, heading: "Oh, That I Had Wings Like a Dove", text: "The most famous lines: &ldquo;Oh, that I had wings like a dove! I would fly away and be at rest... I would hurry to find a shelter from the raging wind and tempest.&rdquo; The longing to escape is voiced without shame. The dove &mdash; gentle, swift, seeking quiet places &mdash; embodies the wish to flee the storm of strife. Kidner: &ldquo;The wish is natural and not wrong, but it is not the answer. God will give David not wings but a burden-bearer.&rdquo;" },
                { ref: "v. 9-11", color: ROSE, heading: "Violence in the City", text: "David prays for the confusion of the wicked and describes a city overrun by violence and strife: &ldquo;Day and night they go around it on its walls, and iniquity and trouble are within it... oppression and fraud do not depart from its marketplace.&rdquo; The picture is of social collapse, where treachery has infected the whole community. Longman: &ldquo;The breakdown begins in the heart of a friend and spreads to the fabric of the city.&rdquo;" },
                { ref: "v. 12-14", color: PURPLE, heading: "It Was You, My Familiar Friend", text: "The emotional core of the psalm: &ldquo;For it is not an enemy who taunts me &mdash; then I could bear it... But it is you, a man, my equal, my companion, my familiar friend. We used to take sweet counsel together; within God&rsquo;s house we walked in the throng.&rdquo; The betrayal is devastating precisely because it came from an intimate with whom David shared worship and counsel. Matthew Henry: &ldquo;The nearer the relation, the deeper the treachery cuts. This wound was inflicted by a hand that had often clasped his own in friendship.&rdquo;" },
                { ref: "v. 15-19", color: GOLD, heading: "But I Call to God", text: "Amid imprecation against the treacherous (v. 15), David declares his own practice: &ldquo;But I call to God, and the LORD will save me. Evening and morning and at noon I utter my complaint and moan, and he hears my voice&rdquo; (vv. 16-17). The threefold rhythm of prayer &mdash; evening, morning, noon &mdash; reveals a discipline of continual dependence. Verse 18: &ldquo;He redeems my soul in safety from the battle that I wage.&rdquo; Calvin: &ldquo;The remedy for betrayal is not isolation but more frequent prayer; David multiplies his approaches to God.&rdquo;" },
                { ref: "v. 20-21", color: ROSE, heading: "Smooth as Butter, War in the Heart", text: "Returning to the traitor: &ldquo;My companion stretched out his hand against his friends; he violated his covenant. His speech was smooth as butter, yet war was in his heart; his words were softer than oil, yet they were drawn swords.&rdquo; The contrast between smooth words and a heart full of war captures the essence of hypocrisy and treachery. Spurgeon: &ldquo;The most dangerous enemies are those whose words are oil and whose hearts are swords.&rdquo;" },
                { ref: "v. 22", color: GOLD, heading: "Cast Your Burden on the LORD", text: "The luminous promise at the heart of the psalm&rsquo;s resolution: &ldquo;Cast your burden on the LORD, and he will sustain you; he will never permit the righteous to be moved.&rdquo; The burden (yehav, one&rsquo;s allotted lot) is to be cast &mdash; thrown decisively &mdash; onto the LORD. The promise is sustenance and stability. Peter echoes it in 1 Peter 5:7. Matthew Henry: &ldquo;The way to be eased of our burden is not to carry it ourselves but to roll it upon the One able to bear it.&rdquo; This single verse is the answer to the whole psalm&rsquo;s anguish." },
                { ref: "v. 23", color: GREEN, heading: "But I Will Trust in You", text: "The psalm closes with the contrast between the destiny of the wicked and the trust of the righteous: &ldquo;But you, O God, will cast them down into the pit of destruction; men of blood and treachery shall not live out half their days. But I will trust in you.&rdquo; The final three words are the destination of the entire journey. From anguish, through the longing for wings, through imprecation, David arrives at settled trust. Kidner: &ldquo;The last word is not about the enemy at all; it is the believer&rsquo;s quiet resolve, &lsquo;I will trust in you.&rsquo;&rdquo;" },
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
                  title: "Learning to Cast Your Burden",
                  body: "Verse 22 is not merely a comforting sentiment but a command with a method. To &lsquo;cast&rsquo; your burden is an act of the will &mdash; a deliberate, decisive transfer of what is crushing you from your own shoulders onto the LORD. This is more than vaguely hoping things will improve; it is the conscious practice of naming your burden in prayer and releasing it to God&rsquo;s care. Many believers carry burdens they have never actually cast, holding onto anxieties as if their worry could change anything. Today, identify the specific burden you are carrying &mdash; the betrayal, the fear, the impossible situation &mdash; and consciously cast it on the LORD, trusting his promise to sustain you.",
                  prayer: "Lord, I have been carrying this burden as if it were mine to bear alone. I cast it on you now &mdash; decisively, deliberately. I refuse to pick it back up. You have promised to sustain me and to keep me from being moved. I trust that promise. Bear what I cannot. Amen."
                },
                {
                  color: PURPLE,
                  icon: "&#9826;",
                  title: "Grieving the Betrayal of a Friend",
                  body: "Psalm 55 gives sacred language to one of life&rsquo;s deepest wounds: betrayal by someone you trusted, someone who shared your faith and your fellowship. If you have experienced this &mdash; a friend who turned on you, a fellow believer who betrayed your confidence, a mentor or family member whose smooth words hid a heart of war &mdash; this psalm validates the depth of your pain. David did not minimize the wound or rush past it. He named it fully before God. Give yourself permission to grieve honestly. The pain of betrayal by an intimate is real, and God invites you to bring it to him rather than burying it or letting it harden into bitterness.",
                  prayer: "Father, the betrayal still aches &mdash; the wound from one I trusted, one with whom I worshiped. I bring the full weight of it to you. I will not pretend it doesn&rsquo;t hurt. Hold my grief, heal what was broken, and guard me from letting this wound turn to bitterness. Amen."
                },
                {
                  color: TEAL,
                  icon: "&#9733;",
                  title: "When You Long to Fly Away",
                  body: "&lsquo;Oh, that I had wings like a dove!&rsquo; Nearly everyone has felt this &mdash; the overwhelming desire to escape, to run away from a painful situation, to disappear from the storm. The psalm does not condemn this longing; it honestly expresses it. But it also shows that God&rsquo;s answer is usually not escape but sustenance: not wings to fly away, but strength to remain and trust. When the desire to flee overwhelms you, recognize it as a natural response to pain, bring it honestly to God, and then receive his better gift &mdash; not removal from the trial, but his sustaining presence within it. The dove&rsquo;s wings are the wish; the cast burden is the reality.",
                  prayer: "Lord, part of me just wants to fly away from all of this &mdash; to escape the conflict and find rest in some far-off quiet place. You know that longing. But I trust that your answer is better than escape: your presence with me in the storm. Give me strength to stay and trust, and rest for my weary soul. Amen."
                },
                {
                  color: GREEN,
                  icon: "&#10022;",
                  title: "Arriving at &lsquo;I Will Trust in You&rsquo;",
                  body: "The journey of Psalm 55 ends in three words: &lsquo;I will trust in you.&rsquo; This is not where the psalm began &mdash; it began in anguish and the longing to escape. The destination was reached by traveling through the pain, not around it. This teaches us something vital: trust is often not the starting point of our prayers but the destination we arrive at by praying honestly through our distress. Do not be discouraged if you cannot begin in serene faith. Begin where you are &mdash; in anguish, fear, or anger &mdash; and let the act of bringing it all to God carry you, as it carried David, toward the settled resolve: &lsquo;I will trust in you.&rsquo;",
                  prayer: "God, I have traveled through anguish and fear in this prayer, and I arrive, like David, at these words: I will trust in you. Not because the trouble has vanished, but because you are trustworthy. You will not let the one who trusts you be ultimately moved. Into your hands I commit it all. Amen."
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
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;Cast your burden on the LORD, and he will sustain you; he will never permit the righteous to be moved.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 55:22 &mdash; echoed by Peter in 1 Peter 5:7</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
