"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "Gqubm5Mg7Bw", title: "Psalm 60 -- With God We Shall Do Valiantly" },
  { videoId: "j9phNEaPrv8", title: "National Laments in the Psalter" },
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

export default function Psalm60Page() {
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
            <span style={{ color: GOLD, fontSize: "0.78rem" }}>Psalm 60</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(217,119,6,0.12)", border: `1px solid rgba(217,119,6,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>Davidic Miktam &mdash; National Lament</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 60: With God We Shall<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>Do Valiantly</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A miktam of David for instruction, written amid the wars with Aram and Edom &mdash; a national lament after stunning defeat, wrestling with God&rsquo;s apparent rejection, and finding renewed confidence in God&rsquo;s sovereign claim over the nations.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "David"], ["Occasion", "2 Samuel 8"], ["Genre", "National Lament"], ["Key Verse", "v. 12"]].map(([k, v]) => (
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: Faith After Defeat</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 60 is a national lament arising from a moment of military crisis during David&rsquo;s reign. The lengthy superscription connects it to David&rsquo;s wars with Aram-Naharaim and Aram-Zobah, and to Joab&rsquo;s victory over Edom in the Valley of Salt (cf. 2 Samuel 8 and 1 Chronicles 18). The picture seems to be of a moment when, while David&rsquo;s forces were engaged on the northern front, a sudden reversal or threat &mdash; perhaps an Edomite incursion in the south &mdash; left the nation reeling. The psalm gives voice to a people who have tasted defeat and are struggling to understand it in light of their covenant with God." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The opening verses are startling in their honesty: &ldquo;O God, you have rejected us, broken our defenses; you have been angry; oh, restore us. You have made the land to quake; you have torn it open; repair its breaches, for it totters. You have made your people see hard things; you have given us wine to drink that made us stagger&rdquo; (vv. 1-3). Derek Kidner notes the boldness of attributing the defeat directly to God: &ldquo;Israel&rsquo;s theology was robust enough to see the hand of God even in disaster. They did not explain defeat by God&rsquo;s weakness or absence but by his displeasure &mdash; which meant the remedy was repentance and renewed appeal, not despair.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The heart of the psalm is a divine oracle (vv. 6-8) in which God speaks, asserting his sovereign ownership of the land: &ldquo;God has spoken in his holiness: &lsquo;With exultation I will divide up Shechem and portion out the Vale of Succoth. Gilead is mine; Manasseh is mine; Ephraim is my helmet; Judah is my scepter. Moab is my washbasin; upon Edom I cast my shoe; over Philistia I shout in triumph.&rsquo;&rdquo; Calvin draws out the comfort of this oracle: &ldquo;However the battle may have gone, the title-deeds to the land belong to God. He apportions the territories of Israel and treats the proud nations &mdash; Moab, Edom, Philistia &mdash; as mere household servants. The defeat does not alter God&rsquo;s ownership; it only tests Israel&rsquo;s faith in it.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The images God uses for the enemy nations are deliberately humbling. Moab, proud and hostile, is reduced to a &lsquo;washbasin&rsquo; &mdash; a vessel for washing dirty feet. Edom, the ancient adversary, is the place where God flings his sandal (a gesture of taking possession or of contempt). Spurgeon comments: &ldquo;The nations that loom so large in Israel&rsquo;s fear are, to God, mere articles of household furniture. He owns them all and disposes of them as he pleases. What folly to fear those whom God treats as his footstool!&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm closes with a renewed plea and a magnificent confession of faith (vv. 11-12): &ldquo;Oh, grant us help against the foe, for vain is the salvation of man! With God we shall do valiantly; it is he who will tread down our foes.&rdquo; Matthew Henry highlights the crucial theological balance: &ldquo;David does not say, &lsquo;Without effort we shall conquer,&rsquo; but &lsquo;With God we shall do valiantly.&rsquo; Human courage and divine power are not rivals; the valor is real, but its source and success are from God alone. The salvation of man &mdash; armies, alliances, strategies &mdash; is vain without him; with him, even a defeated people can do valiantly.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 60 models how faith processes catastrophic setback. It neither denies the defeat nor abandons God; instead, it brings the disaster honestly to God, wrestles with his apparent rejection, listens again to his sovereign promises, and emerges with renewed confidence. The psalm refuses the two false responses to suffering &mdash; the denial that pretends the defeat did not happen, and the despair that concludes God has failed. Instead it charts a third way: honest lament that leads through God&rsquo;s word back to faith. For any community or individual reeling from a devastating reversal, the psalm offers a pattern of resilient, God-centered hope." }} />

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
                  title: "Honest Lament Over Disaster Attributed to God",
                  body: "The opening verses do not flinch from attributing the national defeat to God himself: &ldquo;O God, you have rejected us... you have been angry... you have made the land to quake&rdquo; (vv. 1-2). This is a remarkable feature of Israel&rsquo;s theology. Rather than explaining disaster by God&rsquo;s absence or weakness, the psalmist sees God&rsquo;s sovereign hand even in the defeat &mdash; which, paradoxically, becomes a ground of hope. Kidner: &ldquo;If God brought the disaster, then God can also reverse it; the same hand that wounded can heal.&rdquo; This theme teaches a robust view of divine sovereignty that does not collapse in the face of suffering. The believer who can say &lsquo;you have done this&rsquo; can also say &lsquo;you can undo it.&rsquo; The honesty of the lament &mdash; naming God as the one behind the calamity &mdash; is not irreverence but the deepest faith, refusing to remove God from the picture even when the picture is painful. This is the same sovereignty Job confessed: &lsquo;Shall we receive good from God, and shall we not receive evil?&rsquo; (Job 2:10)."
                },
                {
                  color: GOLD,
                  title: "God's Sovereign Ownership of the Nations",
                  body: "The divine oracle at the center of the psalm (vv. 6-8) asserts God&rsquo;s absolute ownership of both the land of Israel and the surrounding nations. &ldquo;Gilead is mine; Manasseh is mine... Moab is my washbasin; upon Edom I cast my shoe.&rdquo; The tribal territories belong to God to apportion, and the proud enemy nations are reduced to household objects &mdash; a washbasin for dirty feet, a place to fling a sandal. Calvin: &ldquo;The nations that terrify Israel are, to God, mere servants and furniture. He owns the title-deeds to every territory and disposes of the proudest empires as a master disposes of his household goods.&rdquo; This theme provides the antidote to the fear induced by the defeat: the outcome of one battle does not change the fundamental reality that God owns all the nations and rules over them. The believer&rsquo;s confidence rests not on the fluctuating fortunes of war but on the unchanging sovereignty of God over every people and power. The God who claims Moab as his washbasin is not threatened by the temporary triumph of any enemy."
                },
                {
                  color: TEAL,
                  title: "The Vanity of Human Salvation",
                  body: "Verse 11 contains a stark confession: &ldquo;Oh, grant us help against the foe, for vain is the salvation of man!&rdquo; The phrase &lsquo;the salvation of man&rsquo; refers to all human means of deliverance &mdash; armies, alliances, strategies, fortifications. The psalmist declares these &lsquo;vain&rsquo; (shav, empty, worthless) when relied upon apart from God. This is not a dismissal of human effort but a denial of its sufficiency. Longman notes the lesson learned through defeat: &ldquo;Israel had perhaps trusted in its own military might; the disaster taught them that no human power can save apart from God.&rdquo; This theme runs throughout Scripture (Psalm 33:16-17: &lsquo;The war horse is a false hope for salvation&rsquo;; Psalm 146:3: &lsquo;Put not your trust in princes&rsquo;). It applies far beyond warfare to every area where we are tempted to rely on human resources as if they were ultimate. The recognition that human salvation is vain is the necessary precondition for casting ourselves wholly on God, who alone can truly deliver."
                },
                {
                  color: GREEN,
                  title: "With God We Shall Do Valiantly",
                  body: "The psalm&rsquo;s triumphant conclusion holds together two truths that are often falsely opposed: &ldquo;With God we shall do valiantly; it is he who will tread down our foes&rdquo; (v. 12). On one hand, the people will act with valor &mdash; real human courage and effort are involved. On the other hand, it is God who treads down the foes &mdash; the victory is ultimately his work. Matthew Henry: &ldquo;The valor is ours, but the victory is God&rsquo;s; we do valiantly, but he treads down. Neither human effort without God nor God without human participation, but the two joined &mdash; that is the formula for triumph.&rdquo; This theme beautifully balances divine sovereignty and human responsibility. The believer is not called to passive waiting (&lsquo;let go and let God&rsquo;) nor to self-reliant striving (&lsquo;God helps those who help themselves&rsquo;), but to courageous action undertaken in dependence on God. We do valiantly precisely because we know it is God who gives the victory. This is the engine of all faithful Christian endeavor: wholehearted effort, wholly dependent on God&rsquo;s power."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 60 &mdash; 12 verses: lament, divine oracle, and renewed confidence</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1-3", color: ROSE, heading: "O God, You Have Rejected Us", text: "&ldquo;O God, you have rejected us, broken our defenses; you have been angry; oh, restore us... You have made your people see hard things; you have given us wine to drink that made us stagger.&rdquo; The lament attributes the defeat directly to God&rsquo;s displeasure. The image of staggering as if drunk conveys the disorientation of a people reeling from disaster. Kidner: &ldquo;They name God as the author of their trouble, which is the first step toward asking him to be the author of their restoration.&rdquo;" },
                { ref: "v. 4-5", color: GOLD, heading: "A Banner for Those Who Fear You", text: "&ldquo;You have set up a banner for those who fear you, that they may flee to it from the bow. That your beloved ones may be delivered, give salvation by your right hand and answer us!&rdquo; Amid the lament, a note of hope: God has given a banner (a rallying point) for his people. The prayer turns to petition for deliverance by God&rsquo;s &lsquo;right hand,&rsquo; the symbol of his saving power. Spurgeon: &ldquo;Even in defeat there is a banner; God has not left his people without a rallying point.&rdquo;" },
                { ref: "v. 6-7", color: TEAL, heading: "God Has Spoken in His Holiness", text: "The divine oracle begins: &ldquo;God has spoken in his holiness: &lsquo;With exultation I will divide up Shechem... Gilead is mine; Manasseh is mine; Ephraim is my helmet; Judah is my scepter.&rsquo;&rdquo; God asserts his ownership of the heartland of Israel, naming the tribal territories as his own to apportion. Ephraim is his helmet (military strength); Judah his scepter (royal authority). Calvin: &ldquo;The title-deeds belong to God; whatever men may seize, the land is his to give.&rdquo;" },
                { ref: "v. 8", color: TEAL, heading: "Moab Is My Washbasin", text: "&ldquo;Moab is my washbasin; upon Edom I cast my shoe; over Philistia I shout in triumph.&rdquo; The proud enemy nations are humbled to the status of household objects. Moab is a basin for washing dirty feet; Edom the place where God flings his sandal; Philistia the object of God&rsquo;s triumphant shout. Spurgeon: &ldquo;The nations Israel feared are, to God, mere furniture and servants. What folly to dread those whom God treats as his footstool!&rdquo;" },
                { ref: "v. 9-10", color: ROSE, heading: "Who Will Bring Me to Edom?", text: "&ldquo;Who will bring me to the fortified city? Who will lead me to Edom? Have you not rejected us, O God? You do not go forth, O God, with our armies.&rdquo; The psalmist returns to the painful question: if the strong city of Edom is to be taken, who will lead the way, given that God seems to have withdrawn from the armies? The honest doubt is voiced, but it is now framed within the larger confidence of the oracle. Longman: &ldquo;The question is real, but it is asked from within faith, not against it.&rdquo;" },
                { ref: "v. 11", color: TEAL, heading: "Vain Is the Salvation of Man", text: "&ldquo;Oh, grant us help against the foe, for vain is the salvation of man!&rdquo; The hard-won lesson of the defeat: human means of deliverance &mdash; armies, strategies, alliances &mdash; are empty apart from God. Matthew Henry: &ldquo;He had perhaps trusted too much in his own forces; now he confesses that all human salvation is vanity, and casts himself wholly on God.&rdquo; This confession is the turning point toward the final affirmation of faith." },
                { ref: "v. 12", color: GREEN, heading: "With God We Shall Do Valiantly", text: "The triumphant conclusion: &ldquo;With God we shall do valiantly; it is he who will tread down our foes.&rdquo; Human valor and divine power are joined: the people act courageously, but God gives the victory. Matthew Henry: &ldquo;The valor is ours, but the victory is God&rsquo;s.&rdquo; The psalm that began in the staggering disorientation of defeat ends in confident, God-dependent courage. This is the resilient faith that processes setback honestly and emerges trusting in God&rsquo;s power to deliver." },
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
                  title: "Bringing Defeat Honestly to God",
                  body: "When you suffer a devastating setback &mdash; a failure, a loss, a collapse of plans you were sure God would bless &mdash; Psalm 60 gives you permission to lament honestly, even to ask God why he allowed it. The psalm does not pretend the defeat away or rush to false comfort. It names the disaster, attributes it to God&rsquo;s sovereign hand, and asks for restoration. This honest wrestling is not a failure of faith but its exercise. Bring your defeat to God without sanitizing it. The same God who allowed the setback is the one who can restore and redeem it, and the path to that restoration runs through honest lament, not denial.",
                  prayer: "O God, this defeat has left me staggering. I do not understand why you allowed it, and I will not pretend otherwise. You are sovereign even over this. So I bring it honestly to you and ask: restore us, repair what is broken, redeem what feels lost. I trust the hand that wounded can also heal. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9826;",
                  title: "Remembering God Owns the Whole Field",
                  body: "The divine oracle of Psalm 60 reminds us that God owns all the territories &mdash; both the land of his people and the strongholds of the enemy. When you are intimidated by an obstacle or opponent that looms large, remember that God holds the title-deeds to the whole field. Moab is his washbasin; Edom the place he flings his sandal. The thing that terrifies you is, to God, a household object he disposes of as he pleases. This perspective does not minimize the real difficulty, but it places it within the frame of God&rsquo;s total sovereignty. Nothing you face is outside his ownership and control.",
                  prayer: "Sovereign Lord, you own the whole field &mdash; the territory I long for and the strongholds that oppose me. The obstacle that intimidates me is, to you, a mere household object under your command. Help me to see my challenges from within your sovereignty, and to trust that you rule over all of it. Amen."
                },
                {
                  color: TEAL,
                  icon: "&#9733;",
                  title: "Abandoning Vain Sources of Salvation",
                  body: "&lsquo;Vain is the salvation of man.&rsquo; Often it takes a defeat to expose how much we have been trusting in human resources &mdash; our own competence, our financial reserves, our connections, our strategies &mdash; as if they were ultimate. Psalm 60 invites you to identify where you have been relying on &lsquo;the salvation of man&rsquo; and to transfer that trust to God. This does not mean abandoning effort or wisdom; it means refusing to treat them as your true security. What human source of salvation have you been leaning on as if it were God? The psalm calls you to confess its vanity and cast yourself wholly on the Lord.",
                  prayer: "Lord, my defeat has exposed how much I trusted in human resources &mdash; my own strength, my plans, my safety nets &mdash; as if they could save me. I confess that vain is the salvation of man. I transfer my trust to you alone. Use my efforts, but be my true and only security. Amen."
                },
                {
                  color: GREEN,
                  icon: "&#10022;",
                  title: "Acting Valiantly in Dependence on God",
                  body: "&lsquo;With God we shall do valiantly.&rsquo; This verse holds the perfect balance between effort and dependence. It does not counsel passive waiting, nor self-reliant striving, but courageous action undertaken in reliance on God. Whatever challenge lies before you &mdash; a task that feels too big, a battle you are not sure you can win &mdash; the formula of Psalm 60 applies: do valiantly, with God. Throw yourself into the effort with real courage, knowing that the victory comes from God who treads down the foes. This is the engine of all faithful endeavor: wholehearted work, wholly dependent on God&rsquo;s power.",
                  prayer: "Father, the task before me is daunting, and I cannot accomplish it in my own strength. But with you, I shall do valiantly. I will act with courage, throwing myself fully into the work, while trusting that it is you who will give the victory. My valor, your triumph. Lead me forward. Amen."
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
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;With God we shall do valiantly; it is he who will tread down our foes.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 60:12 &mdash; the balance of human valor and divine victory</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
