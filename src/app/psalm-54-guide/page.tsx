"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "Y0WTul3eWBM", title: "Psalm 54 -- Save Me by Your Name" },
  { videoId: "8kvFD8aT8mU", title: "David Among the Ziphites (1 Samuel 23)" },
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

export default function Psalm54Page() {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, sans-serif)", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #080e09 0%, #0e1a10 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: GREEN, fontSize: "0.78rem" }}>Psalm 54</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(58,125,86,0.12)", border: `1px solid rgba(58,125,86,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, marginBottom: "1rem" }}>Davidic Maschil &mdash; The Ziphite Betrayal</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 54: Save Me, O God,<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>by Your Name</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A maschil of David, written when the Ziphites betrayed his hiding place to Saul &mdash; a brief, model prayer that moves from urgent plea to settled confidence that God is the helper and upholder of the betrayed.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "David"], ["Occasion", "1 Samuel 23"], ["Genre", "Lament / Maschil"], ["Key Verse", "v. 4"]].map(([k, v]) => (
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
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.5rem", background: "none", border: "none", borderBottom: tab === i ? `2px solid ${GREEN}` : "2px solid transparent", color: tab === i ? TEXT : MUTED, cursor: "pointer", fontFamily: "inherit", fontSize: "0.88rem", fontWeight: tab === i ? 600 : 400, whiteSpace: "nowrap", transition: "color 0.2s" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.5rem" }}>

        {tab === 0 && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: A Model Prayer Under Pressure</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 54 is brief &mdash; only seven verses &mdash; but it is a complete and exemplary prayer, demonstrating in miniature the full arc of biblical lament: invocation, complaint, petition, confidence, and vowed praise. Its superscription anchors it to a precise moment in David&rsquo;s fugitive years: &ldquo;when the Ziphites went and told Saul, &lsquo;Is not David hiding among us?&rsquo;&rdquo; The reference is to 1 Samuel 23:19, where the inhabitants of Ziph, fellow members of David&rsquo;s own tribe of Judah, betrayed his hiding place to the king who wanted him dead." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The betrayal by the Ziphites was especially bitter because they were David&rsquo;s own kinsmen. He had done them no wrong, yet they sold his location to Saul, presumably to curry favor with the reigning king. Derek Kidner notes that the psalm&rsquo;s power lies in its compression: &ldquo;Every element of a major lament is here, distilled to its essence. It is a prayer a hunted man could breathe in the space of a few minutes, yet it lacks nothing.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm opens with an appeal to God&rsquo;s &lsquo;name&rsquo; and &lsquo;might&rsquo; (v. 1): &ldquo;Save me, O God, by your name, and vindicate me by your might.&rdquo; Calvin draws attention to the significance of God&rsquo;s name: &ldquo;To be saved by God&rsquo;s name is to be saved by his revealed character &mdash; his power, faithfulness, and covenant love made known. David does not appeal to his own innocence first but to who God is.&rdquo; The name of God is the ground of confident prayer because it represents everything God has revealed himself to be." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The turning point comes in verse 4, the heart of the psalm: &ldquo;Behold, God is my helper; the Lord is the upholder of my life.&rdquo; Spurgeon calls this &ldquo;the hinge on which the whole psalm turns from petition to praise.&rdquo; The word &lsquo;Behold&rsquo; signals a moment of realization: in the very act of praying, David&rsquo;s perspective shifts. He moves from describing his danger to declaring his security. The God to whom he prays is not a distant deity but a present helper and the active upholder of his life." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Matthew Henry observes how the psalm ends in confident thanksgiving even before the deliverance has occurred: &ldquo;I will offer to you a freewill offering; I will give thanks to your name, O LORD, for it is good. For he has delivered me from every trouble&rdquo; (vv. 6-7). Henry comments: &ldquo;David speaks of deliverance as already accomplished, though he was still in danger. Faith antedates the mercy, and gives thanks for what it is sure God will perform.&rdquo; The freewill offering (nedavah) was a voluntary gift expressing pure gratitude, not obligation &mdash; the appropriate response to grace." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 54 models how faith functions under pressure: it does not deny the reality of danger (&lsquo;strangers have risen against me,&rsquo; v. 3) but reframes it in the light of God&rsquo;s character. The psalm demonstrates that confident faith is not the absence of threat but the presence of a trusted God within the threat. For anyone facing betrayal, opposition, or fear, Psalm 54 provides a template: name the trouble honestly, appeal to God&rsquo;s revealed character, declare his helping presence, and give thanks in advance for the deliverance faith expects." }} />

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
                  color: GREEN,
                  title: "Salvation by the Name of God",
                  body: "The psalm&rsquo;s opening petition &mdash; &ldquo;Save me, O God, by your name&rdquo; (v. 1) &mdash; grounds the whole prayer in God&rsquo;s revealed character. In Hebrew thought, a name was not a mere label but a revelation of essence. To pray &lsquo;by your name&rsquo; is to appeal to everything God has made known about himself: his power, his covenant faithfulness, his justice, his mercy. Calvin: &ldquo;The name of God is the foundation of prayer, for we cannot trust what we do not know. David rests his case on the disclosed character of God.&rdquo; This theme runs throughout Scripture and culminates in the NT, where salvation comes specifically through the name of Jesus (Acts 4:12: &ldquo;there is no other name under heaven given among men by which we must be saved&rdquo;). To be saved &lsquo;by the name&rsquo; is to be saved by who God has revealed himself to be &mdash; and the fullest revelation of that name is Christ."
                },
                {
                  color: ROSE,
                  title: "The Betrayal of Kinsmen and Strangers",
                  body: "Verse 3 describes the threat: &ldquo;For strangers have risen against me; ruthless men seek my life; they do not set God before themselves.&rdquo; The word translated &lsquo;strangers&rsquo; (zarim) is poignant given the context: the Ziphites were not foreigners but David&rsquo;s own tribesmen who acted as strangers toward him, betraying him as though he meant nothing. The deepest character of the threat is named in the final clause: &lsquo;they do not set God before themselves.&rsquo; The root of their ruthlessness was practical atheism &mdash; living without reference to God. Longman observes that this diagnosis connects Psalm 54 to the surrounding psalms (52, 53): the enemies of the righteous are consistently those who have banished God from their reckoning. When God is not before one&rsquo;s eyes, betrayal of the innocent becomes easy."
                },
                {
                  color: TEAL,
                  title: "God as Helper and Upholder",
                  body: "The pivot of the psalm is verse 4: &ldquo;Behold, God is my helper; the Lord is the upholder of my life.&rdquo; Two titles capture God&rsquo;s active involvement. As &lsquo;helper&rsquo; (ozer), God comes alongside the one in need, supplying what they lack. As &lsquo;upholder&rsquo; (somek) of David&rsquo;s life, God actively sustains and supports him, holding him up when he would otherwise collapse. Spurgeon: &ldquo;He does not say God will help, as a future hope, but God is my helper, as a present fact. Faith brings the future mercy into the present possession.&rdquo; This theme is the antidote to the isolation of betrayal: when even kinsmen turn into strangers, God remains the constant helper. The believer is never truly alone, because the upholder of life is always present. Hebrews 13:6 quotes a related psalm in this spirit: &ldquo;The Lord is my helper; I will not fear; what can man do to me?&rdquo;"
                },
                {
                  color: GOLD,
                  title: "Confidence That Anticipates Deliverance",
                  body: "The psalm closes with thanksgiving offered before the deliverance is visible: &ldquo;I will give thanks to your name, O LORD, for it is good. For he has delivered me from every trouble&rdquo; (vv. 6-7). The past tense &lsquo;he has delivered&rsquo; is the language of faith treating God&rsquo;s promises as accomplished facts. Matthew Henry: &ldquo;Faith antedates the mercy.&rdquo; This anticipatory thanksgiving is not presumption but the natural fruit of trusting God&rsquo;s character. The believer who knows that God is helper and upholder can give thanks for deliverance while still in the midst of danger, because the outcome is as certain as God&rsquo;s faithfulness. This theme appears throughout the laments: the movement from petition to praise often happens before any visible change in circumstances, demonstrating that the transformation faith effects is first internal &mdash; a reorientation of the soul toward confidence in God."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 54 &mdash; 7 verses, a complete lament in miniature</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1", color: GREEN, heading: "Save Me by Your Name", text: "&ldquo;Save me, O God, by your name, and vindicate me by your might.&rdquo; The prayer opens with two parallel petitions: salvation by God&rsquo;s name (his revealed character) and vindication by his might (his power). David does not begin with his own merit but with who God is. Calvin: &ldquo;The name and the might of God are the two pillars on which the believer&rsquo;s confidence rests &mdash; God&rsquo;s willingness, revealed in his name, and God&rsquo;s ability, revealed in his might.&rdquo;" },
                { ref: "v. 2", color: GREEN, heading: "Hear My Prayer", text: "&ldquo;O God, hear my prayer; give ear to the words of my mouth.&rdquo; The doubled appeal &mdash; hear, give ear &mdash; reflects the urgency of a hunted man. David asks not for elaborate eloquence but simply that God would attend to &lsquo;the words of my mouth.&rsquo; Spurgeon: &ldquo;The simplest prayer, if it reaches the ear of God, is more powerful than the most eloquent oration that does not.&rdquo;" },
                { ref: "v. 3", color: ROSE, heading: "Strangers Have Risen Against Me", text: "&ldquo;For strangers have risen against me; ruthless men seek my life; they do not set God before themselves.&rdquo; The complaint names the threat. The &lsquo;strangers&rsquo; were the Ziphites &mdash; David&rsquo;s own tribesmen acting as foreigners. The root of their ruthlessness is that they &lsquo;do not set God before themselves&rsquo; &mdash; practical atheism. Longman: &ldquo;The absence of God from their reckoning is what frees them to seek an innocent man&rsquo;s life.&rdquo; The word &lsquo;Selah&rsquo; invites a pause to absorb the danger." },
                { ref: "v. 4", color: TEAL, heading: "Behold, God Is My Helper", text: "The pivot of the entire psalm: &ldquo;Behold, God is my helper; the Lord is the upholder of my life.&rdquo; In the very act of prayer, David&rsquo;s perspective shifts from danger to security. &lsquo;Behold&rsquo; signals a moment of realization. God is not a distant hope but a present helper and the active sustainer of David&rsquo;s life. Matthew Henry: &ldquo;This single verse is worth the whole psalm; it is the believer&rsquo;s anchor cast within the veil.&rdquo;" },
                { ref: "v. 5", color: GOLD, heading: "He Will Return Evil to My Enemies", text: "&ldquo;He will return the evil to my enemies; in your faithfulness put an end to them.&rdquo; David entrusts justice to God rather than taking it himself. The appeal to God&rsquo;s &lsquo;faithfulness&rsquo; (emet, truth) is significant: David asks God to act in accordance with his covenant commitment to justice. Calvin: &ldquo;He does not pray from personal malice but appeals to God&rsquo;s faithfulness, which cannot allow innocent blood to be shed without reckoning.&rdquo; This is the surrender of vengeance that Romans 12:19 commends." },
                { ref: "v. 6", color: GOLD, heading: "A Freewill Offering", text: "&ldquo;With a freewill offering I will sacrifice to you; I will give thanks to your name, O LORD, for it is good.&rdquo; The freewill offering (nedavah) was a voluntary gift expressing pure gratitude rather than obligation. David vows to respond to deliverance not with the minimum required but with the overflow of a grateful heart. Spurgeon: &ldquo;The freewill offering is love&rsquo;s response to grace &mdash; not what must be given, but what the glad heart delights to give.&rdquo;" },
                { ref: "v. 7", color: TEAL, heading: "He Has Delivered Me", text: "&ldquo;For he has delivered me from every trouble, and my eye has looked in triumph on my enemies.&rdquo; The psalm closes with thanksgiving for a deliverance spoken of as already accomplished, though David was still in danger. This is faith&rsquo;s characteristic past tense &mdash; treating God&rsquo;s certain promises as present realities. Kidner: &ldquo;The hunted man ends his prayer as a victor, not because his circumstances have changed but because his confidence has been established in God.&rdquo; Historically, God did deliver David: in 1 Samuel 23:27-28, a Philistine raid forced Saul to abandon the pursuit." },
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
                  color: GREEN,
                  icon: "&#9670;",
                  title: "Praying by the Name of God",
                  body: "Psalm 54 teaches us to ground our prayers not in our own worthiness but in God&rsquo;s revealed character &mdash; his name. When you pray, do you appeal first to your own track record (&lsquo;Lord, I&rsquo;ve been faithful, so help me&rsquo;) or to who God is (&lsquo;Lord, because you are merciful and mighty, help me&rsquo;)? The former produces anxiety, because our track record is never enough; the latter produces confidence, because God&rsquo;s character is unchanging. For the Christian, the name we pray in is Jesus &mdash; the fullest revelation of God&rsquo;s saving character. Learn to anchor your petitions in his name and nature rather than your own performance.",
                  prayer: "O God, save me by your name &mdash; by everything you have revealed yourself to be: merciful, mighty, faithful, and just. I do not come on the basis of my own goodness but on the basis of who you are, revealed fully in Jesus. Hear my prayer for his sake. Amen."
                },
                {
                  color: TEAL,
                  icon: "&#9733;",
                  title: "Declaring God Your Present Helper",
                  body: "The hinge of Psalm 54 is the moment David stops describing his danger and declares: &lsquo;Behold, God is my helper.&rsquo; This shift &mdash; from rehearsing the problem to declaring God&rsquo;s present help &mdash; is one of the most practical movements in all of prayer. When you are overwhelmed by a threat, you can spend the whole prayer cataloging the danger, or you can do what David did: name the danger honestly, then deliberately turn to declare what is also true &mdash; God is your helper, the upholder of your life, present and active right now. Practice making this turn in your own prayers. Do not stop at the complaint; press through to the declaration.",
                  prayer: "Behold, God is my helper; the Lord is the upholder of my life. Lord, I have rehearsed my troubles long enough. Now I declare what is just as true: you are with me, you are helping me, you are holding me up. I will not face this alone, because you are my present help. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9826;",
                  title: "Responding to Betrayal Without Vengeance",
                  body: "David was betrayed by his own kinsmen, yet his response was not to plot revenge but to entrust justice to God&rsquo;s faithfulness (v. 5). When you are betrayed &mdash; by a friend, a family member, a colleague who sold you out &mdash; the temptation is to take justice into your own hands. Psalm 54 models a better way: bring the betrayal to God, appeal to his faithfulness, and release the outcome to him. This does not mean ignoring wrongdoing or refusing appropriate boundaries; it means refusing the corrosive work of personal vengeance and trusting that God sees and will act justly.",
                  prayer: "Father, those I trusted have turned against me. The wound is real. But I will not take vengeance into my own hands. I appeal to your faithfulness; you see what was done, and you are just. Free my heart from the poison of revenge, and let me rest in your righteous judgment. Amen."
                },
                {
                  color: ROSE,
                  icon: "&#10022;",
                  title: "Offering Freewill Thanksgiving in Advance",
                  body: "David vowed a freewill offering &mdash; a gift of pure gratitude, beyond obligation &mdash; and gave thanks for deliverance before it was visible (vv. 6-7). The freewill offering reminds us that the proper response to God&rsquo;s grace is not the bare minimum but the overflow of a glad heart. And the anticipatory thanksgiving teaches us to give thanks in faith, trusting God&rsquo;s promises as accomplished facts. Consider how you might respond to God not out of duty but out of delight &mdash; a freewill offering of time, resources, or praise &mdash; and practice thanking him in advance for the deliverance you are still awaiting.",
                  prayer: "Lord, I want to give to you not the minimum required but the overflow of a grateful heart &mdash; a freewill offering of love. And I thank you in advance for the deliverance I cannot yet see, trusting that your promises are as good as accomplished. You are good, and your name is worthy of thanks. Amen."
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

              <div style={{ background: `linear-gradient(135deg, rgba(58,125,86,0.08), rgba(13,148,136,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>Key Verse to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;Behold, God is my helper; the Lord is the upholder of my life.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 54:4 &mdash; the hinge from petition to praise</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
