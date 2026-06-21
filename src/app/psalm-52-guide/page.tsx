"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "Bd9lqWkPxqU", title: "Psalm 52 -- The Boastful Tongue Judged" },
  { videoId: "8kvFD8aT8mU", title: "David and Doeg the Edomite (1 Samuel 22)" },
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

export default function Psalm52Page() {
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
            <span style={{ color: ROSE, fontSize: "0.78rem" }}>Psalm 52</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(225,29,72,0.12)", border: `1px solid rgba(225,29,72,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: ROSE, marginBottom: "1rem" }}>Davidic Maschil &mdash; Against Doeg</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 52: Why Do You Boast<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>in Evil, O Mighty Man?</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A maschil of David, written when Doeg the Edomite betrayed him to Saul &mdash; a stinging contrast between the destructive tongue of the boaster, doomed to be uprooted, and the flourishing of the righteous like a green olive tree in God&rsquo;s house.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "David"], ["Occasion", "1 Samuel 22"], ["Genre", "Maschil"], ["Key Image", "Green Olive Tree"]].map(([k, v]) => (
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: The Tongue That Loves Destruction</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The superscription of Psalm 52 anchors it to a specific and bloody episode in David&rsquo;s flight from Saul: &ldquo;when Doeg, the Edomite, came and told Saul, &lsquo;David has come to the house of Ahimelech.&rsquo;&rdquo; The reference is to 1 Samuel 21-22. Fleeing from Saul, David had received bread and Goliath&rsquo;s sword from Ahimelech the priest at Nob. Doeg, Saul&rsquo;s chief herdsman, witnessed this and reported it &mdash; and when Saul&rsquo;s own soldiers refused to strike the priests of the LORD, Doeg slaughtered eighty-five priests and the entire town of Nob, men, women, children, and livestock. Psalm 52 is David&rsquo;s poetic response to this monstrous act of informing and murder." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Knowing this background transforms the psalm from an abstract denunciation into a searing, personal confrontation with evil. The &lsquo;mighty man&rsquo; (gibbor) addressed in verse 1 is Doeg, who boasted in his power and used his tongue as a weapon of mass destruction. David&rsquo;s opening question drips with irony: &ldquo;Why do you boast of evil, O mighty man? The steadfast love of God endures all the day.&rdquo; The contrast is stark: Doeg&rsquo;s power is temporary and self-destructive; God&rsquo;s hesed is constant." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Derek Kidner observes that the psalm is structured around three portraits: the tyrant and his doom (vv. 1-5), the righteous who watch and learn (vv. 6-7), and the psalmist himself as a flourishing tree (vv. 8-9). The movement is from the false strength of the wicked, through the response of the godly community, to the genuine security of the one who trusts in God. The wicked man trusted in &lsquo;the abundance of his riches&rsquo; and &lsquo;sought refuge in his own destruction&rsquo; (v. 7); the psalmist trusts in &lsquo;the steadfast love of God forever and ever&rsquo; (v. 8)." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Calvin focuses on the destructive power of the tongue, which dominates verses 2-4: &ldquo;Your tongue plots destruction, like a sharp razor, you worker of deceit. You love evil more than good, and lying more than speaking what is right. You love all words that devour, O deceitful tongue.&rdquo; Calvin writes: &ldquo;There is no weapon so cruel as the tongue of the slanderer, for it slays not one but multitudes, and reaches victims the sword could never touch. Doeg&rsquo;s tongue killed more priests than any soldier&rsquo;s blade.&rdquo; The psalm thus belongs to the Bible&rsquo;s extensive theology of speech &mdash; the same concern that animates James 3 (&lsquo;the tongue is a fire&rsquo;)." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The turning point is verse 5, where God acts: &ldquo;But God will break you down forever; he will snatch and tear you from your tent; he will uproot you from the land of the living.&rdquo; Spurgeon notes the four verbs of judgment &mdash; break down, snatch, tear, uproot &mdash; each more violent than the last: &ldquo;The man who uprooted a whole town of priests will himself be uprooted from the land of the living. The destroyer is destroyed; the informer is exposed; the boaster is humbled. God is not mocked.&rdquo; The poetic justice is exact." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm&rsquo;s most beautiful image arrives in verse 8: &ldquo;But I am like a green olive tree in the house of God. I trust in the steadfast love of God forever and ever.&rdquo; The olive tree was a symbol of permanence, fruitfulness, and blessing; one planted &lsquo;in the house of God&rsquo; suggests rootedness in the very presence of God. Matthew Henry contrasts the two destinies: &ldquo;Doeg is uprooted; David is planted. The wicked, for all his apparent strength, is the transient one; the righteous, for all his apparent weakness, is the enduring one. The difference is not in their power but in their trust.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 52 confronts the perennial question of why evil seems to triumph and whether the wicked will ever face justice. The psalm answers with confidence grounded not in immediate visible vindication but in the character of God: his steadfast love endures &lsquo;all the day,&rsquo; and his justice will certainly uproot the boaster. For a world weary of seeing the ruthless prosper, Psalm 52 offers the assurance that the moral structure of the universe is not neutral &mdash; the God who sees Doeg&rsquo;s tongue will have the last word, and the righteous who trust him will flourish like an evergreen tree." }} />

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
                  title: "The Destructive Power of the Tongue",
                  body: "Verses 2-4 form one of the Bible&rsquo;s most concentrated indictments of the weaponized tongue: &ldquo;Your tongue plots destruction, like a sharp razor, you worker of deceit. You love evil more than good, and lying more than speaking what is right. You love all words that devour.&rdquo; Doeg&rsquo;s sin was, at its root, a sin of speech &mdash; he informed, he reported, he used words to set in motion a massacre. The razor image is precise: a razor is a tool of grooming turned into an instrument of slaughter. Calvin notes that the slanderer&rsquo;s tongue &ldquo;reaches victims the sword could never touch&rdquo; &mdash; it kills at a distance, in secret, without the killer&rsquo;s own hand being bloodied. This theme connects directly to James 3:6 (&ldquo;the tongue is a fire, a world of unrighteousness&rdquo;) and to the ninth commandment&rsquo;s prohibition of false witness. Psalm 52 insists that words are not harmless; they can destroy whole communities, and God holds the speaker accountable."
                },
                {
                  color: PURPLE,
                  title: "The Self-Destruction of Misplaced Trust",
                  body: "Verse 7 delivers the verdict the righteous pronounce over the fallen tyrant: &ldquo;See the man who would not make God his refuge, but trusted in the abundance of his riches and sought refuge in his own destruction.&rdquo; The phrase translated &lsquo;sought refuge in his own destruction&rsquo; is striking &mdash; the very thing Doeg trusted in (his wealth, his power, his usefulness to Saul) became the instrument of his ruin. Kidner observes that the wicked man&rsquo;s strength is revealed as the source of his downfall: &ldquo;He built his security on a foundation that God himself would tear apart.&rdquo; This theme exposes the fundamental folly of all godless self-reliance: to trust in anything other than God is to build one&rsquo;s house on the very ground that judgment will shake. The contrast with the psalmist&rsquo;s trust &lsquo;in the steadfast love of God forever&rsquo; could not be sharper."
                },
                {
                  color: GOLD,
                  title: "God Will Break Down the Boaster",
                  body: "Verse 5 is the hinge of divine justice: &ldquo;But God will break you down forever; he will snatch and tear you from your tent; he will uproot you from the land of the living.&rdquo; Four violent verbs describe God&rsquo;s response, and they answer Doeg&rsquo;s own violence with poetic exactness: the man who tore the priests from the land of the living will himself be uprooted from it. Spurgeon: &ldquo;God&rsquo;s patience is not impotence. The wicked mistake the delay of judgment for its absence, but the &lsquo;But God&rsquo; of verse 5 falls like an axe.&rdquo; This theme provides the theological backbone of the psalm: the boaster&rsquo;s apparent triumph is temporary, because there is a God who sees, who keeps account, and who acts. The certainty of divine justice is what allows the righteous to refrain from taking vengeance themselves (Romans 12:19)."
                },
                {
                  color: GREEN,
                  title: "The Righteous Flourish Like a Green Olive Tree",
                  body: "Against the uprooted tyrant stands the psalmist&rsquo;s self-portrait in verse 8: &ldquo;But I am like a green olive tree in the house of God. I trust in the steadfast love of God forever and ever.&rdquo; The olive tree was prized for its longevity (olive trees can live for centuries), its fruitfulness, and its evergreen leaves &mdash; a perfect emblem of enduring, God-sustained life. To be planted &lsquo;in the house of God&rsquo; means to be rooted in his presence, drawing life from him. The image echoes Psalm 1:3 (&ldquo;like a tree planted by streams of water&rdquo;) and anticipates Jeremiah 17:7-8. Calvin: &ldquo;The olive tree does not flourish by its own strength but by the soil and rain God provides; so the righteous flourish not by their own power but by the steadfast love in which they trust.&rdquo; This is the great reversal: the &lsquo;mighty man&rsquo; withers while the persecuted exile, rooted in God, becomes the enduring tree."
                },
                {
                  color: TEAL,
                  title: "Thanksgiving and Waiting in Community",
                  body: "The psalm closes in verse 9 with a vow that situates the individual&rsquo;s experience within the worshipping community: &ldquo;I will thank you forever, because you have done it. I will wait for your name, for it is good, in the presence of the godly.&rdquo; Two things stand out. First, the thanksgiving is offered &lsquo;because you have done it&rsquo; &mdash; David speaks of God&rsquo;s deliverance as already accomplished, a settled certainty even before it is fully visible. Second, the waiting and thanking happen &lsquo;in the presence of the godly&rsquo; &mdash; the community of the faithful who, in verse 6, &lsquo;shall see and fear, and shall laugh at him.&rsquo; Longman notes that the psalm thus ends not in isolation but in fellowship: the believer&rsquo;s trust is sustained and witnessed by the gathered people of God, who learn from the downfall of the wicked and the flourishing of the righteous. Personal vindication becomes communal instruction."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 52 &mdash; 9 verses confronting Doeg the Edomite&rsquo;s treachery</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1", color: ROSE, heading: "Why Do You Boast in Evil?", text: "&ldquo;Why do you boast of evil, O mighty man? The steadfast love of God endures all the day.&rdquo; The opening question is heavy with irony. Doeg the &lsquo;mighty man&rsquo; (gibbor) boasts of his power to destroy, but David sets against that boast the enduring hesed of God. Calvin: &ldquo;The tyrant&rsquo;s strength lasts a moment; God&rsquo;s mercy lasts &lsquo;all the day&rsquo; &mdash; continually, without interruption. Why boast of what will vanish when the eternal endures?&rdquo; The verse frames the whole psalm as a contest between two kinds of power." },
                { ref: "v. 2-3", color: ROSE, heading: "The Razor Tongue", text: "&ldquo;Your tongue plots destruction, like a sharp razor, you worker of deceit. You love evil more than good, and lying more than speaking what is right.&rdquo; The tongue is the central weapon of this psalm, because Doeg&rsquo;s crime was an act of informing. The razor image conveys both sharpness and treachery &mdash; a tool meant for grooming turned to cutting throats. Verse 3 diagnoses the deeper problem: not just wrong acts but a corrupted love &mdash; Doeg loves evil and lying as positive goods. Spurgeon: &ldquo;The worst sinners are not those who fall into evil but those who fall in love with it.&rdquo;" },
                { ref: "v. 4", color: ROSE, heading: "Words That Devour", text: "&ldquo;You love all words that devour, O deceitful tongue.&rdquo; The phrase &lsquo;words that devour&rsquo; (literally &lsquo;words of swallowing&rsquo;) pictures speech as a predator consuming its prey. Doeg&rsquo;s report to Saul devoured the entire town of Nob. Matthew Henry: &ldquo;Some men&rsquo;s words are like the grave, never satisfied; they swallow up reputations, families, whole communities, and still hunger for more.&rdquo; The verse completes the four-verse anatomy of the destructive tongue." },
                { ref: "v. 5", color: GOLD, heading: "But God Will Break You Down", text: "The pivot of judgment, marked by the emphatic &lsquo;But God.&rsquo; Four verbs of escalating violence: break down, snatch, tear, uproot. &ldquo;He will uproot you from the land of the living.&rdquo; The poetic justice is exact: the man who uprooted the priests of Nob is himself uprooted. Kidner: &ldquo;The judgment fits the crime with terrible precision. God answers the destroyer in his own currency.&rdquo; The word &lsquo;Selah&rsquo; follows, inviting the listener to pause and absorb the certainty of divine justice." },
                { ref: "v. 6-7", color: PURPLE, heading: "The Righteous See and Learn", text: "&ldquo;The righteous shall see and fear, and shall laugh at him, saying, &lsquo;See the man who would not make God his refuge, but trusted in the abundance of his riches and sought refuge in his own destruction.&rsquo;&rdquo; The downfall of the wicked becomes a public lesson for the godly community. Their &lsquo;laughter&rsquo; is not cruel mockery but the relief and vindication of those who had feared the tyrant&rsquo;s power and now see it broken. The epitaph they pronounce (v. 7) diagnoses the fatal error: refusing God as refuge and trusting instead in wealth. Longman: &ldquo;The community learns from the tyrant&rsquo;s grave the lesson the tyrant himself never grasped.&rdquo;" },
                { ref: "v. 8", color: GREEN, heading: "I Am Like a Green Olive Tree", text: "The luminous center of the psalm&rsquo;s positive vision: &ldquo;But I am like a green olive tree in the house of God. I trust in the steadfast love of God forever and ever.&rdquo; The contrast with the uprooted Doeg is total. The olive tree, evergreen and long-lived, planted in God&rsquo;s house, draws its life from God&rsquo;s presence. Calvin: &ldquo;David, the hunted fugitive, calls himself the planted tree, while Doeg the powerful courtier is the uprooted weed. Such is the reversal that faith perceives.&rdquo; The phrase &lsquo;steadfast love forever and ever&rsquo; answers the &lsquo;steadfast love all the day&rsquo; of verse 1, deepening from continual to eternal." },
                { ref: "v. 9", color: TEAL, heading: "I Will Thank You Forever", text: "The psalm closes with thanksgiving and hopeful waiting: &ldquo;I will thank you forever, because you have done it. I will wait for your name, for it is good, in the presence of the godly.&rdquo; David speaks of deliverance as accomplished (&lsquo;you have done it&rsquo;) even before it is fully visible &mdash; the language of faith. He waits &lsquo;for your name&rsquo; &mdash; for the revelation of God&rsquo;s character in action &mdash; and does so &lsquo;in the presence of the godly,&rsquo; within the worshipping community. Spurgeon: &ldquo;He ends where every believer should end: not in cursing the enemy but in blessing God, surrounded by the saints.&rdquo;" },
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
                  title: "Guarding Your Tongue From Destruction",
                  body: "Psalm 52 is a sustained meditation on the destructive power of speech. Before applying it to others, every reader must apply it to themselves: how do you use your tongue? Gossip, slander, the carefully placed damaging report, the half-truth that ruins a reputation &mdash; these are Doeg&rsquo;s sins, and they are far more common than physical violence. The psalm warns that God takes the weaponized tongue with deadly seriousness. Before you speak about someone, especially in their absence, ask: are these words that heal or words that devour? The discipline of the tongue is one of the surest marks of spiritual maturity (James 1:26).",
                  prayer: "Lord, set a guard over my mouth. I confess the times my words have wounded rather than healed, devoured rather than built up. Make my tongue an instrument of grace, not destruction. Let me speak truth in love, and refuse the slander that you so clearly hate. Amen."
                },
                {
                  color: GREEN,
                  icon: "&#9733;",
                  title: "Becoming a Green Olive Tree",
                  body: "The image of verse 8 &mdash; a green olive tree planted in the house of God &mdash; is an invitation to a particular kind of life: rooted, fruitful, enduring, drawing its vitality from God&rsquo;s presence. The olive tree does not flourish by striving but by being well-planted in good soil with steady water. Likewise, the believer flourishes not by frantic self-effort but by being rooted in God through worship, Scripture, prayer, and community &mdash; &lsquo;in the house of God.&rsquo; Ask yourself: where are your roots? Are you drawing life from God&rsquo;s steadfast love, or are you, like Doeg, trying to stand on the shifting ground of your own resources?",
                  prayer: "Father, plant me like a green olive tree in your house. Let my roots go deep into your steadfast love. Make me fruitful and enduring, not by my own strength but by drawing life from your presence. Keep me near to you, the source of all flourishing. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9826;",
                  title: "Trusting God&rsquo;s Justice Instead of Taking Revenge",
                  body: "When David wrote this psalm, Doeg had just engineered the slaughter of eighty-five priests. David had every human reason to seek revenge. Instead, he entrusted justice to God: &lsquo;But God will break you down.&rsquo; This is the hard but liberating discipline of releasing vengeance to the only righteous Judge. When you have been deeply wronged &mdash; betrayed, slandered, harmed by someone&rsquo;s malice &mdash; Psalm 52 invites you not to deny the wrong or excuse it, but to hand it to God, who sees and will act in his time. This is precisely the path Paul commends in Romans 12:19: &lsquo;Never avenge yourselves, but leave it to the wrath of God.&rsquo;",
                  prayer: "Righteous Judge, I bring before you the one who has wronged me. I will not take vengeance into my own hands. You see what was done; you keep perfect account. I trust your justice and your timing. Free my heart from bitterness as I wait for you to act. Amen."
                },
                {
                  color: TEAL,
                  icon: "&#10022;",
                  title: "Thanking God Before the Deliverance Is Visible",
                  body: "Verse 9 contains a remarkable phrase: &lsquo;I will thank you forever, because you have done it.&rsquo; David thanks God for a deliverance that, historically, had not yet fully arrived &mdash; he was still a hunted fugitive. This is the faith that thanks God in advance, treating his promises as accomplished facts. When you are still in the middle of a trial, with no visible resolution, the practice of preemptive thanksgiving is a powerful act of faith. It declares that you trust God&rsquo;s character so completely that you can thank him for the outcome before you see it. Try thanking God today for a deliverance you are still waiting to see.",
                  prayer: "Lord, I thank you, because you have done it &mdash; even though I cannot yet see the full deliverance. I trust your steadfast love so completely that I can give thanks in advance. Sustain my faith as I wait for your name, in the company of your people. Amen."
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

              <div style={{ background: `linear-gradient(135deg, rgba(225,29,72,0.08), rgba(58,125,86,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>Key Verse to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;But I am like a green olive tree in the house of God. I trust in the steadfast love of God forever and ever.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 52:8 &mdash; the enduring tree against the uprooted tyrant</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
