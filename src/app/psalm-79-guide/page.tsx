"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "j9phNEaPrv8", title: "Psalm 79 -- How Long, O LORD?" },
  { videoId: "Gqubm5Mg7Bw", title: "Lament Over Jerusalem's Fall" },
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

export default function Psalm79Page() {
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
            <span style={{ color: ROSE, fontSize: "0.78rem" }}>Psalm 79</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(225,29,72,0.12)", border: `1px solid rgba(225,29,72,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: ROSE, marginBottom: "1rem" }}>Psalm of Asaph &mdash; Communal Lament</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 79: The Nations Have Come<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>into Your Inheritance</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A psalm of Asaph &mdash; a communal lament over the devastation of Jerusalem, the cry &ldquo;How long, O LORD?&rdquo;, and the plea for atonement and help for the glory of God&rsquo;s own name.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "Asaph"], ["Book", "Book III (Ps 73-89)"], ["Genre", "Communal Lament"], ["Key Verse", "v. 9"]].map(([k, v]) => (
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: A Cry From the Rubble of Jerusalem</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 79 is a communal lament closely related to Psalm 74, almost certainly arising from the Babylonian destruction of Jerusalem in 586 B.C. Where Psalm 74 focused on the desecration of the temple, Psalm 79 widens the lens to the devastation of the whole city and the slaughter of its people. The opening is harrowing: &ldquo;O God, the nations have come into your inheritance; they have defiled your holy temple; they have laid Jerusalem in ruins. They have given the bodies of your servants to the birds of the heavens for food... they have poured out their blood like water all around Jerusalem, and there was no one to bury them&rdquo; (vv. 1-3)." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The horror of the unburied dead &mdash; bodies left for scavengers, blood poured out like water &mdash; conveys the totality of the catastrophe. Derek Kidner notes that the psalm holds together two truths that the modern mind often separates: &ldquo;The disaster is both the work of cruel enemies and, beneath that, the chastisement of God for the sins of his people (v. 8). The psalmist does not deny Israel&rsquo;s guilt, yet he also cries out against the excessive cruelty of the instruments God used. Both are held in tension, as they often must be in honest faith.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "At the heart of the psalm is the great lament question: &ldquo;How long, O LORD? Will you be angry forever? Will your jealousy burn like fire?&rdquo; (v. 5). This &lsquo;how long?&rsquo; echoes through the laments of the Psalter (6:3, 13:1, 74:10, 80:4, 89:46) and gives voice to the agony of prolonged suffering under what feels like God&rsquo;s anger. Spurgeon observes: &ldquo;The &lsquo;how long&rsquo; of the saints is not unbelief but the cry of faith that cannot bear the delay. They do not ask whether God will act, but when; their question presupposes that he will.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The theological center of the psalm is verse 9, which grounds the plea for salvation entirely in God&rsquo;s own name: &ldquo;Help us, O God of our salvation, for the glory of your name; deliver us, and atone for our sins, for your name&rsquo;s sake!&rdquo; Calvin draws out the significance: &ldquo;The psalmist asks for two things &mdash; deliverance and atonement &mdash; and grounds both not in Israel&rsquo;s worthiness but in God&rsquo;s name. The forgiveness of sins, no less than rescue from enemies, is sought &lsquo;for your name&rsquo;s sake.&rsquo; This is the gospel logic: God pardons sin not because we deserve it but for the glory of his own grace.&rdquo; The plea for atonement is striking &mdash; the psalmist knows that mere rescue is not enough; the underlying problem of sin must be dealt with." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm closes with a vow of perpetual thanksgiving: &ldquo;But we your people, the sheep of your pasture, will give thanks to you forever; from generation to generation we will recount your praise&rdquo; (v. 13). Matthew Henry notes the tender self-designation: &ldquo;In the midst of devastation, they call themselves the sheep of his pasture &mdash; claiming the covenant relationship even when everything visible has been stripped away. The flock may be scattered and the fold destroyed, but the sheep still belong to the Shepherd, and they vow to praise him from generation to generation.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 79 wrestles honestly with one of the hardest experiences of faith: catastrophic suffering that is, at least in part, the consequence of one&rsquo;s own sin, yet inflicted with disproportionate cruelty by others. The psalm neither excuses Israel&rsquo;s guilt nor justifies the enemy&rsquo;s brutality. Instead, it brings the whole tangled reality to God, pleads for both forgiveness and rescue on the ground of God&rsquo;s name, and holds onto the covenant relationship even in the rubble. For believers facing suffering that is complex &mdash; partly deserved, partly unjust, wholly painful &mdash; the psalm models a faith that refuses to let go of God." }} />

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
                  title: "Lament Over Desecration and Death",
                  body: "The psalm opens with a catalog of horror: the nations defiling the temple, Jerusalem in ruins, the bodies of God&rsquo;s servants left unburied for scavengers, blood poured out like water (vv. 1-3). For ancient Israel, the lack of burial was a particular outrage, a final indignity heaped upon the slain. The psalmist does not avert his eyes or soften the description; he lays the full atrocity before God. Kidner: &ldquo;The honesty of the lament is its strength; it neither suppresses the horror nor despairs of the God to whom it is addressed.&rdquo; This theme models the place of honest grief in the life of faith. When we encounter atrocity &mdash; whether in the world&rsquo;s news or in our own experience &mdash; we are not called to pretend it is bearable or to rush past it with pious platitudes. We are invited to bring the full weight of the horror to God in lament, naming the evil for what it is. The psalms of communal lament give the suffering people of God a vocabulary for grief that is neither denial nor despair, but honest crying out to the One who can act."
                },
                {
                  color: GOLD,
                  title: "How Long, O LORD?",
                  body: "The cry of verse 5 &mdash; &ldquo;How long, O LORD? Will you be angry forever?&rdquo; &mdash; voices the particular agony of prolonged suffering. The &lsquo;how long?&rsquo; question recurs throughout the Psalter and represents not unbelief but the cry of faith straining under delay. Spurgeon: &ldquo;The &lsquo;how long&rsquo; of the saints is not unbelief but the cry of faith that cannot bear the delay; they do not ask whether God will act, but when.&rdquo; The question presupposes that God will eventually act; it simply pleads for that action to come soon. This theme dignifies the impatience of suffering faith. It is not wrong to long for God to act, to find the delay of deliverance almost unbearable, to cry out &lsquo;how long?&rsquo; The same cry appears on the lips of the martyrs in heaven (Revelation 6:10: &lsquo;O Sovereign Lord, how long before you will judge and avenge our blood?&rsquo;). The believer in prolonged suffering is in good company, and the &lsquo;how long?&rsquo; is itself a form of faith &mdash; a refusal to conclude that God will never act, combined with an honest plea that he act now."
                },
                {
                  color: TEAL,
                  title: "Salvation and Atonement for God's Name's Sake",
                  body: "The theological heart of the psalm is verse 9: &ldquo;Help us, O God of our salvation, for the glory of your name; deliver us, and atone for our sins, for your name&rsquo;s sake!&rdquo; Two things stand out. First, the plea is grounded not in Israel&rsquo;s worthiness but in God&rsquo;s name &mdash; his reputation, his glory, his revealed character. The psalmist knows that Israel has no claim of merit, so he appeals to the highest ground: God&rsquo;s own honor. Second, the psalmist asks not only for deliverance from enemies but for atonement for sins. He recognizes that the deeper problem is not Babylon but Israel&rsquo;s guilt, and that mere rescue would leave the root issue untouched. Calvin: &ldquo;The forgiveness of sins, no less than rescue from enemies, is sought for your name&rsquo;s sake; this is the gospel logic.&rdquo; This theme points unmistakably toward the cross, where God provided the atonement that Psalm 79 pleads for &mdash; forgiving sin not because we deserve it but &lsquo;for his name&rsquo;s sake&rsquo; (1 John 2:12), to the praise of his glorious grace. The psalm&rsquo;s deepest cry is answered in Christ, who is both our deliverance and our atonement."
                },
                {
                  color: PURPLE,
                  title: "The Sheep of His Pasture in the Rubble",
                  body: "The psalm closes with a tender vow: &ldquo;But we your people, the sheep of your pasture, will give thanks to you forever; from generation to generation we will recount your praise&rdquo; (v. 13). The self-designation &lsquo;sheep of your pasture&rsquo; is striking in context. Everything visible &mdash; the temple, the city, the lives of the people &mdash; has been stripped away, yet the survivors still claim the covenant relationship. Matthew Henry: &ldquo;The flock may be scattered and the fold destroyed, but the sheep still belong to the Shepherd.&rdquo; This theme reveals the indestructible core of the believer&rsquo;s identity. When everything external is gone &mdash; possessions, security, even the structures of religious life &mdash; the relationship with God remains. The sheep belong to the Shepherd regardless of the state of the fold. And from this irreducible relationship springs the vow of perpetual, generational praise. Even in the rubble, the people of God look forward to a future of thanksgiving, confident that the Shepherd has not lost his flock. This is the resilience of covenant faith: it survives the loss of everything but God himself, and in him it finds reason to praise from generation to generation."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 79 &mdash; 13 verses: lament, petition, and a vow of praise</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1-3", color: ROSE, heading: "The Nations Have Defiled Your Temple", text: "&ldquo;O God, the nations have come into your inheritance; they have defiled your holy temple; they have laid Jerusalem in ruins.&rdquo; The unburied dead, the blood poured out like water, capture the totality of the catastrophe. The psalmist emphasizes that the land is God&rsquo;s &lsquo;inheritance&rsquo; and the temple is &lsquo;your holy temple&rsquo; &mdash; the outrage is against God himself. Kidner: &ldquo;The honesty of the lament is its strength; it neither suppresses the horror nor despairs of God.&rdquo;" },
                { ref: "v. 4-5", color: GOLD, heading: "How Long, O LORD?", text: "&ldquo;We have become a taunt to our neighbors, mocked and derided by those around us. How long, O LORD? Will you be angry forever? Will your jealousy burn like fire?&rdquo; The shame of being mocked is added to the physical devastation. The great lament question &mdash; &lsquo;how long?&rsquo; &mdash; presses God for the timing of relief. Spurgeon: &ldquo;The cry of faith that cannot bear the delay; they ask not whether but when.&rdquo;" },
                { ref: "v. 6-7", color: ROSE, heading: "Pour Out Your Anger on the Nations", text: "&ldquo;Pour out your anger on the nations that do not know you... For they have devoured Jacob and laid waste his habitation.&rdquo; The psalmist asks God to redirect his anger from his own people to the nations who do not know him and who have devoured Israel with excessive cruelty. Calvin: &ldquo;He does not deny Israel&rsquo;s guilt, yet he pleads against the disproportionate savagery of the instruments God used.&rdquo;" },
                { ref: "v. 8", color: PURPLE, heading: "Do Not Remember Our Former Iniquities", text: "&ldquo;Do not remember against us our former iniquities; let your compassion come speedily to meet us, for we are brought very low.&rdquo; The psalmist openly acknowledges the nation&rsquo;s sin and pleads for compassion. The honesty about guilt is paired with the appeal to mercy. Matthew Henry: &ldquo;He confesses the sin that brought the judgment, yet pleads the compassion that can lift them from the depths.&rdquo;" },
                { ref: "v. 9", color: TEAL, heading: "Atone for Our Sins, for Your Name's Sake", text: "The theological heart: &ldquo;Help us, O God of our salvation, for the glory of your name; deliver us, and atone for our sins, for your name&rsquo;s sake!&rdquo; Both deliverance and atonement are sought, and both are grounded in God&rsquo;s name rather than Israel&rsquo;s merit. Calvin: &ldquo;The forgiveness of sins is sought for your name&rsquo;s sake; this is the gospel logic, fulfilled at the cross.&rdquo; The plea for atonement points to Christ." },
                { ref: "v. 10-12", color: ROSE, heading: "Why Should the Nations Say, Where Is Their God?", text: "&ldquo;Why should the nations say, &lsquo;Where is their God?&rsquo;&rdquo; The psalmist appeals again to God&rsquo;s honor: the enemy&rsquo;s mockery is ultimately directed at God. He asks that the groans of the prisoners come before God and that the taunts of the neighbors be returned sevenfold. Spurgeon: &ldquo;The reproach falls on God&rsquo;s name; therefore for his name&rsquo;s sake he is asked to answer it.&rdquo;" },
                { ref: "v. 13", color: PURPLE, heading: "We, the Sheep of Your Pasture", text: "The closing vow: &ldquo;But we your people, the sheep of your pasture, will give thanks to you forever; from generation to generation we will recount your praise.&rdquo; Even in the rubble, the people claim the covenant relationship and vow perpetual, generational praise. Matthew Henry: &ldquo;The flock may be scattered and the fold destroyed, but the sheep still belong to the Shepherd.&rdquo; The psalm ends not in resolution of circumstances but in the resolve to praise." },
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
                  title: "Lamenting Atrocity Honestly Before God",
                  body: "When you encounter atrocity &mdash; in the world&rsquo;s news, in history, or in your own experience &mdash; Psalm 79 gives you permission and language to lament. You are not called to suppress your horror with pious platitudes or to pretend that evil is bearable. The psalmist laid the full weight of the catastrophe before God, naming the evil without flinching. Bring your grief over injustice and suffering honestly to God. The communal laments of the Psalter teach us that faith does not require minimizing evil; it requires bringing the full reality of evil to the only One who can ultimately answer it.",
                  prayer: "O God, the evil and suffering I see is too much to bear, and I will not pretend otherwise. I lay it before you &mdash; the atrocities, the injustice, the cruelty. How long will it continue? Hear my lament, and let your compassion come speedily. You alone can answer the horror I cannot fix. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9826;",
                  title: "Praying 'How Long?' as an Act of Faith",
                  body: "The cry &lsquo;How long, O LORD?&rsquo; is not unbelief but faith straining under the delay of deliverance. If you are in a season of prolonged suffering, you do not have to pretend patience you do not feel. You can pray the honest &lsquo;how long?&rsquo; of the psalmist, the martyrs, and the whole suffering people of God. This question presupposes that God will act; it simply pleads for him to act soon. Bringing your impatience to God in this honest form is itself an exercise of faith &mdash; a refusal to conclude that he will never act, combined with an earnest plea that he act now.",
                  prayer: "Lord, how long? I have waited and the suffering continues. I do not doubt that you will act, but I cannot bear the delay. With the martyrs and the whole suffering church, I cry: how long? Let your deliverance come speedily. I trust that you will answer, and I plead with you to answer soon. Amen."
                },
                {
                  color: TEAL,
                  icon: "&#9733;",
                  title: "Pleading God's Name When You Have No Merit",
                  body: "Psalm 79 grounds its plea not in Israel&rsquo;s worthiness &mdash; which was none &mdash; but in God&rsquo;s own name and glory. This is a profound model for prayer, especially when your own sin has contributed to your trouble. You can still pray boldly, not on the ground of your merit, but on the ground of God&rsquo;s name, his glory, and his atoning work in Christ. The psalmist&rsquo;s plea for atonement &lsquo;for your name&rsquo;s sake&rsquo; is answered at the cross, where God forgives sin not because we deserve it but for the praise of his glorious grace. When you have no claim of your own, God&rsquo;s name and Christ&rsquo;s atonement remain a sure foundation.",
                  prayer: "Father, I come with no merit of my own; my sin has contributed to my trouble. But I plead your name, your glory, and the atonement Christ accomplished at the cross. For your name&rsquo;s sake, forgive me and help me. You pardon sin not because I deserve it but for the glory of your grace. Thank you. Amen."
                },
                {
                  color: PURPLE,
                  icon: "&#10022;",
                  title: "Holding the Covenant When Everything Is Stripped Away",
                  body: "In the rubble of Jerusalem, the survivors still called themselves &lsquo;the sheep of your pasture.&rsquo; When everything external has been stripped away &mdash; possessions, security, health, even the structures of your religious life &mdash; the relationship with God remains. The sheep belong to the Shepherd regardless of the state of the fold. If you have lost much, hold onto this irreducible truth: you still belong to God. And from that bedrock relationship, you can join the psalmist&rsquo;s vow to give thanks forever, confident that the Shepherd has not lost his flock, however scattered it may feel.",
                  prayer: "Shepherd of my soul, I have lost much, and the structures I relied on have crumbled. But I am still your sheep, and I still belong to you. Nothing can strip away that relationship. From this bedrock, I vow with your people to give you thanks forever, from generation to generation. You have not lost me. Amen."
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
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;Help us, O God of our salvation, for the glory of your name; deliver us, and atone for our sins, for your name&rsquo;s sake!&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 79:9 &mdash; salvation and atonement sought for God&rsquo;s own name</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
