"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "Gc5O5d5Oa9w", title: "Psalm 49 -- The Folly of Trusting Riches" },
  { videoId: "FQm8fQCuC3A", title: "The Wisdom Psalms Explained" },
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

export default function Psalm49Page() {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, sans-serif)", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #0c0a06 0%, #1a1508 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: GOLD, fontSize: "0.78rem" }}>Psalm 49</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(217,119,6,0.12)", border: `1px solid rgba(217,119,6,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>Sons of Korah &mdash; Wisdom Psalm</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 49: Why Should I Fear<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>in Times of Trouble?</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A wisdom psalm of the Sons of Korah &mdash; addressed to all peoples of the earth &mdash; meditating on the great equalizer of death, the impotence of wealth before the grave, and the stunning hope that God will ransom his own from Sheol.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "Sons of Korah"], ["Book", "Book II (Ps 42-72)"], ["Genre", "Wisdom"], ["Key Verse", "v. 15"]].map(([k, v]) => (
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: The Riddle of Wealth and Death</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 49 belongs to a small and distinguished group within the Psalter: the wisdom psalms, which share the concerns and vocabulary of Proverbs, Job, and Ecclesiastes more than the typical lament or praise. Its opening is striking in its universality: &ldquo;Hear this, all peoples! Give ear, all inhabitants of the world, both low and high, rich and poor together!&rdquo; This is not a prayer addressed to God but a sermon addressed to humanity &mdash; a sage standing in the gate, summoning the whole earth to consider a riddle." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The riddle is announced in verses 3-4: &ldquo;My mouth shall speak wisdom; the meditation of my heart shall be understanding. I will incline my ear to a proverb; I will solve my riddle to the music of the lyre.&rdquo; The riddle that the psalm sets out to solve is one of the oldest and most pressing in human experience: why do the wicked rich prosper, and should the righteous poor fear them? The answer the psalm provides is devastatingly simple and yet profoundly hopeful: death comes for everyone, wealth cannot purchase exemption, but God can." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Derek Kidner observes that the psalm has &ldquo;the calm assurance of a man who has thought his way through to bedrock.&rdquo; The poet is not naive about injustice; he has seen the arrogant rich trample the poor. But he has also done the arithmetic of mortality: &ldquo;Man in his pomp will not remain; he is like the beasts that perish&rdquo; (v. 12, 20). Death is the great auditor that exposes the bankruptcy of every fortune built without reference to God. Kidner notes that this is not bitter resignation but liberating clarity: the righteous need not envy the wicked, because the wicked are heading toward an end that all their gold cannot avert." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The theological summit of the psalm is verse 15, which stands in deliberate contrast to verse 7. In verse 7, no human can ransom another or give God the price of his life. But in verse 15: &ldquo;But God will ransom my soul from the power of Sheol, for he will receive me.&rdquo; Calvin sees here one of the clearest Old Testament intimations of resurrection hope: &ldquo;The psalmist, having shown that no riches can redeem a man from death, declares that God himself will do what no wealth can accomplish &mdash; redeem his soul from the grave and receive him into glory.&rdquo; The phrase &lsquo;he will receive me&rsquo; uses the same verb (laqach) used of Enoch (Genesis 5:24) and Elijah (2 Kings 2), both of whom were &lsquo;taken&rsquo; by God." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Spurgeon calls verse 15 &ldquo;the diamond in the ring&rdquo; of Psalm 49: &ldquo;Here is the gospel in the midst of the wisdom. The man who fears no evil in the day of trouble is not the man with the largest bank account but the man whose soul is ransomed by God. The grave is no prison to him; it is a doorway through which God himself will lead him home.&rdquo; This anticipates the NT teaching that Christ has &ldquo;abolished death and brought life and immortality to light through the gospel&rdquo; (2 Timothy 1:10)." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Tremper Longman situates the psalm within the ancient Near Eastern wisdom debate about wealth and mortality. Egyptian and Mesopotamian texts wrestled with the same question, but their answers tended toward either hedonism (&lsquo;eat, drink, for tomorrow we die&rsquo;) or fatalism. Psalm 49 offers a third path: the recognition that wealth is impotent before death is not a counsel of despair but an invitation to invest in what death cannot touch. Jesus draws on exactly this logic in the Parable of the Rich Fool (Luke 12:16-21) and in his teaching to store up treasure in heaven (Matthew 6:19-21)." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 49 confronts the modern reader with the limits of materialism in the most concrete terms imaginable. No medical fortune, no technological breakthrough, no accumulated wealth has yet purchased a single human exemption from death. The psalm insists that this universal fact ought to reorder our values: if you cannot take it with you, and it cannot ransom you, then the rational person invests in the one thing that survives the grave &mdash; a soul ransomed by God. This is not anti-wealth moralizing but a clear-eyed cost-benefit analysis of eternity." }} />

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
                  title: "The Universal Audience of Wisdom",
                  body: "Psalm 49 is unique among the psalms in addressing not God, nor Israel, but &ldquo;all peoples... all inhabitants of the world, both low and high, rich and poor together&rdquo; (vv. 1-2). The wisdom of this psalm is not tribal but universal &mdash; it speaks to a truth that transcends covenant boundaries because it concerns the human condition as such. Calvin notes that the psalmist &ldquo;summons the whole human race to his school, because the lesson of mortality is one that every person, of every nation and class, must eventually learn.&rdquo; This universality is significant for Christian apologetics: the gospel addresses a human predicament that is genuinely universal, not a problem peculiar to one culture. Every human being faces death; the psalm speaks to that shared crisis."
                },
                {
                  color: ROSE,
                  title: "Wealth Cannot Ransom a Soul",
                  body: "Verses 7-9 contain the psalm&rsquo;s central economic argument: &ldquo;Truly no man can ransom another, or give to God the price of his life, for the ransom of their life is costly and can never suffice, that he should live on forever and never see the pit.&rdquo; The language is deliberately commercial &mdash; ransom, price, payment &mdash; and the verdict is absolute: there is no sum of money that can purchase exemption from death. Spurgeon: &ldquo;The richest man cannot bribe the grave; gold is no medicine against mortality; the wealthiest funeral ends in the same dust as the poorest.&rdquo; This theme directly anticipates the NT doctrine of redemption: what no human wealth can accomplish, the blood of Christ does (1 Peter 1:18-19: &ldquo;you were ransomed... not with perishable things such as silver or gold, but with the precious blood of Christ&rdquo;). The psalm poses the problem; the cross is the answer."
                },
                {
                  color: PURPLE,
                  title: "Death as the Great Equalizer",
                  body: "The psalm returns repeatedly to the image of death leveling all human distinctions: &ldquo;the wise die; the fool and the stupid alike must perish and leave their wealth to others&rdquo; (v. 10). The grave receives the brilliant and the foolish, the powerful and the weak, the rich and the poor, with perfect impartiality. Verse 14 deploys a chilling image: &ldquo;Like sheep they are appointed for Sheol; death shall be their shepherd.&rdquo; The wicked who refused the LORD as shepherd (Psalm 23) find death itself shepherding them into the grave. Longman notes the dark irony: those who lived as if they were gods discover that they are sheep, herded by death. This theme demolishes the foundation of all human pride: whatever you accumulate, however high you rise, the grave equalizes everything. Only the relationship with God survives the leveling."
                },
                {
                  color: TEAL,
                  title: "The Folly of Self-Made Immortality",
                  body: "Verses 11-13 expose the self-deception of the wealthy: &ldquo;Their inward thought is that their houses are forever... they call lands by their own names.&rdquo; The rich attempt to achieve a kind of immortality through monuments, estates, and named possessions &mdash; a project as old as the Tower of Babel (Genesis 11:4: &lsquo;let us make a name for ourselves&rsquo;) and as current as the contemporary obsession with legacy. The psalm dismisses this as folly: &ldquo;Man in his pomp will not remain; he is like the beasts that perish&rdquo; (v. 12). Calvin: &ldquo;They engrave their names on their estates, hoping to outlive their death; but the inscription remains while the man rots, a monument not to his greatness but to his folly.&rdquo; This theme indicts every attempt to construct meaning apart from God &mdash; the pursuit of a name, a legacy, a permanence that death will inevitably erase."
                },
                {
                  color: GREEN,
                  title: "Resurrection Hope: God Will Receive Me",
                  body: "The theological heart of the psalm is verse 15: &ldquo;But God will ransom my soul from the power of Sheol, for he will receive me.&rdquo; The word &lsquo;But&rsquo; marks the great reversal. Everything before this verse has emphasized the impotence of human resources before death; now the psalmist declares that God can do what wealth cannot. The verb &lsquo;receive&rsquo; (laqach) echoes the translations of Enoch and Elijah, suggesting a hope that transcends mere survival of the nation to something like personal resurrection or rapture into God&rsquo;s presence. Kidner calls this &ldquo;one of the mountain peaks of OT faith.&rdquo; While the full doctrine of resurrection awaits the NT, Psalm 49:15 plants the seed: the believer&rsquo;s hope is not in escaping death but in being received by God beyond it. Jesus makes this explicit in John 11:25-26: &ldquo;I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live.&rdquo;"
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 49 &mdash; 20 verses, structured by the twice-repeated refrain (vv. 12, 20)</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1-4", color: GOLD, heading: "The Summons and the Riddle", text: "The psalm opens with a universal summons: all peoples, high and low, rich and poor, are called to hear. The sage announces that he will speak wisdom and solve a riddle to the music of the lyre. Calvin notes that the invocation of all humanity signals the universality of the theme: &ldquo;Death is the one teacher whose lecture none may skip.&rdquo; The &lsquo;riddle&rsquo; (chidah) is the same word used of Samson&rsquo;s riddle and the Queen of Sheba&rsquo;s hard questions &mdash; a puzzle that requires divine wisdom to unlock." },
                { ref: "v. 5-6", color: ROSE, heading: "Why Should I Fear?", text: "&ldquo;Why should I fear in times of trouble, when the iniquity of those who cheat me surrounds me, those who trust in their wealth and boast of the abundance of their riches?&rdquo; The rhetorical question frames the whole psalm. The righteous person is surrounded by wealthy oppressors and tempted to fear them. The psalm&rsquo;s answer is that the source of the oppressors&rsquo; confidence &mdash; their wealth &mdash; is precisely what cannot save them. Spurgeon: &ldquo;The very thing they boast in is the thing that will fail them; their riches are a rope of sand.&rdquo;" },
                { ref: "v. 7-9", color: ROSE, heading: "No Ransom Suffices", text: "The central economic argument: no person can ransom another from death, &ldquo;for the ransom of their life is costly and can never suffice.&rdquo; The grammar is emphatic: the price is so high that no human payment could ever cover it. This is the dark backdrop against which verse 15 will shine. Matthew Henry: &ldquo;What none can do for another, and none can do for themselves, God will do for his own &mdash; but only God, and only by a ransom of his own providing.&rdquo; The NT names that ransom: the blood of Christ (Mark 10:45)." },
                { ref: "v. 10-12", color: PURPLE, heading: "The Wise and the Fool Alike Die", text: "Death makes no distinction between the wise and the foolish; all leave their wealth to others. Verse 11&rsquo;s image of naming lands after oneself captures the futility of the legacy project. The refrain of verse 12 sounds for the first time: &ldquo;Man in his pomp will not remain; he is like the beasts that perish.&rdquo; The Hebrew word for &lsquo;pomp&rsquo; (yeqar) denotes honor, splendor, preciousness &mdash; all of which evaporates at death. Kidner: &ldquo;The refrain is the tolling of a bell over every human empire.&rdquo;" },
                { ref: "v. 13-14", color: PURPLE, heading: "Death Shall Be Their Shepherd", text: "&ldquo;This is the path of those who have foolish confidence... Like sheep they are appointed for Sheol; death shall be their shepherd.&rdquo; The image is grimly ironic: those who refused God as their shepherd are shepherded by death into the grave. Verse 14 adds that &lsquo;the upright shall rule over them in the morning&rsquo; &mdash; an intimation of eschatological reversal, when the meek inherit and the proud are brought low. Longman sees here an early hint of the resurrection morning, when the relationship between oppressor and oppressed will be permanently inverted." },
                { ref: "v. 15", color: GREEN, heading: "But God Will Ransom My Soul", text: "The hinge of the entire psalm. Against the backdrop of verse 7 (no man can ransom another), the psalmist declares: &ldquo;But God will ransom my soul from the power of Sheol, for he will receive me.&rdquo; This is the great reversal, marked by the emphatic &lsquo;But God.&rsquo; The verb &lsquo;receive&rsquo; (laqach) is the language of Enoch and Elijah being taken to God. Calvin: &ldquo;Here is the answer to the riddle: the believer&rsquo;s soul, which no gold could purchase, is redeemed by the free grace of God.&rdquo; This verse is one of the clearest OT windows into resurrection hope, fulfilled when Christ conquers death (1 Corinthians 15:54-57)." },
                { ref: "v. 16-19", color: GOLD, heading: "Do Not Be Afraid of the Rich", text: "The practical application: &ldquo;Be not afraid when a man becomes rich, when the glory of his house increases. For when he dies he will carry nothing away; his glory will not go down after him.&rdquo; This is the answer to the opening question of verse 5. The righteous need not fear the wealthy oppressor, because the oppressor&rsquo;s power ends absolutely at death. Verse 18&rsquo;s observation that the rich man &lsquo;blesses himself&rsquo; while alive and is praised by others is sharply ironic: the praise of men is worthless when the grave swallows its object. Spurgeon: &ldquo;The applause of the world follows the rich man to the tomb&rsquo;s mouth and there falls silent forever.&rdquo;" },
                { ref: "v. 20", color: PURPLE, heading: "The Refrain Sealed", text: "The psalm closes with a subtly altered refrain: &ldquo;Man in his pomp yet without understanding is like the beasts that perish.&rdquo; The crucial addition is &lsquo;without understanding&rsquo; (lo yavin). In verse 12 the refrain stated simply that man does not remain; here it specifies the fatal flaw: the lack of understanding. The man who has wealth but no wisdom &mdash; no reckoning with God and eternity &mdash; is no better than an animal. But the implication is hopeful: the man who has understanding, who has grasped the riddle the psalm solves, is not like the beasts. Wisdom &mdash; the knowledge of God who ransoms souls &mdash; is what separates the human destiny from the animal one." },
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
                  title: "Auditing Your Investments in Light of the Grave",
                  body: "Psalm 49 invites a brutal but clarifying spiritual audit: what have you invested in that death cannot touch? The psalm does not condemn wealth itself but exposes the folly of treating it as ultimate security. Consider where your time, energy, and anxiety are actually directed. If the bulk of your striving goes toward accumulations that the grave will strip away, the psalm gently asks whether you have grasped the riddle. The rational response to mortality is not despair but reinvestment &mdash; storing up treasure where moth and rust do not destroy (Matthew 6:20).",
                  prayer: "Lord, you have shown me that no wealth can ransom my soul and that the grave levels every fortune. Free me from the anxious pursuit of security that death will mock. Help me to invest in what survives the grave: knowing you, loving people, building your kingdom. Amen."
                },
                {
                  color: ROSE,
                  icon: "&#9826;",
                  title: "Releasing the Fear of Powerful People",
                  body: "The psalm opens and closes with the same pastoral concern: do not fear the wealthy and powerful who seem to hold all the cards. Whether it is an oppressive employer, a litigious adversary, or a culture that worships money, Psalm 49 reminds you that the power of such people is strictly temporary. &ldquo;When he dies he will carry nothing away.&rdquo; This is not schadenfreude but liberation: you are freed from the paralysis of fearing those whose power ends at the grave. The only one worth fearing is the God who holds both this life and the next.",
                  prayer: "Father, I confess that I have feared the powerful as if their authority were ultimate. Remind me that their power ends at the grave, while yours endures forever. Free me to live with courage, answering to you rather than cowering before them. Amen."
                },
                {
                  color: GREEN,
                  icon: "&#9733;",
                  title: "Resting in the God Who Receives You",
                  body: "Verse 15 is meant to be a pillow for the believer&rsquo;s head in the night of fear: &ldquo;God will ransom my soul from the power of Sheol, for he will receive me.&rdquo; The Christian can say this with even greater confidence than the psalmist, because we know the name and the price of our ransom: the blood of Jesus Christ. When you face the fear of death &mdash; your own or a loved one&rsquo;s &mdash; this verse is the ground to stand on. The grave is not a prison but a doorway through which God himself will receive his children home.",
                  prayer: "God my Redeemer, you have ransomed my soul at the cost of your Son&rsquo;s blood. When I fear death, remind me that you will receive me. The grave has no final claim on those who belong to you. I rest in the certainty that to be absent from the body is to be present with you. Amen."
                },
                {
                  color: TEAL,
                  icon: "&#10022;",
                  title: "Resisting the Legacy Trap",
                  body: "The psalm exposes the &lsquo;legacy project&rsquo; &mdash; the attempt to achieve a kind of immortality through monuments, named possessions, and achievements that outlive us. This impulse is deeply human and not entirely wrong, but Psalm 49 warns that when legacy becomes a substitute for eternity, it is folly. Examine your own desire to be remembered. Is it driving you toward self-aggrandizement, or is it channeled into faithful service that builds God&rsquo;s kingdom? The only legacy that ultimately matters is the one written in the book of life.",
                  prayer: "Lord, I confess the desire to make a name for myself, to build something that will outlast me. Purify this longing. Let me seek not my own glory but yours. May whatever I leave behind point others to you rather than to me. Amen."
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
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;But God will ransom my soul from the power of Sheol, for he will receive me.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 49:15 &mdash; the diamond in the ring, an OT window into resurrection</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
