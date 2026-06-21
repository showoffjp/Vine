"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "RX8KpwUwNIo", title: "Psalm 35 -- Plea for Divine Justice" },
  { videoId: "6jJkdRaa4eU", title: "The Imprecatory Psalms Explained" },
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

export default function Psalm35Page() {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, sans-serif)", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #0e0408 0%, #1a080d 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: ROSE, fontSize: "0.78rem" }}>Psalm 35</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(225,29,72,0.12)", border: `1px solid rgba(225,29,72,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: ROSE, marginBottom: "1rem" }}>Davidic Lament &mdash; Imprecatory</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 35: Plead My Cause,<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>O LORD, Against My Foes</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A psalm of David &mdash; an urgent cry for God to act as warrior-advocate on behalf of the falsely accused. One of the most direct imprecatory psalms in the Psalter, it unfolds in three waves of lament and praise.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "David"], ["Book", "Book I (Ps 1-41)"], ["Type", "Imprecatory Lament"], ["Theme", "Divine Vindication"]].map(([k, v]) => (
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: The Wrongly Accused and the God Who Fights</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 35 confronts readers with one of the most viscerally human prayers in Scripture: &ldquo;Plead my cause, O LORD, with those who strive with me; fight against those who fight against me.&rdquo; David is surrounded by enemies who have repaid his kindness with malice &mdash; people for whom he fasted and prayed when they were sick, yet who now devise lies against him. His response is not stoic silence but urgent, passionate appeal to the divine court." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm is structured in three strophes, each ending with a vow to praise (vv. 1-10, 11-18, 19-28). This tripartite movement is not accidental. Derek Kidner calls it &ldquo;a powerful triptych of appeal, complaint, and anticipated praise,&rdquo; each panel intensifying the cry until the final burst of joy anticipates divine rescue before it has visibly arrived. Kidner notes that the poet&rsquo;s oscillation between despair and praise is itself an act of faith &mdash; choosing to trust God&rsquo;s character when circumstances offer no visible reason to hope." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "John Calvin, writing in his commentary on the Psalms, observes that the psalm presents God as a legal advocate (&lsquo;rib&rsquo; in Hebrew) and a military champion simultaneously. &ldquo;David calls upon God to appear both as his shield and as his lawyer,&rdquo; Calvin writes, &ldquo;knowing that innocence undefended by God will always be crushed by the powerful.&rdquo; This dual appeal &mdash; God as counselor and warrior &mdash; forms the theological spine of the entire psalm." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Charles Spurgeon in &lsquo;The Treasury of David&rsquo; meditates at length on verse 13, where David mourns for his enemies as if for a brother. &ldquo;Here is the mystery,&rdquo; Spurgeon says, &ldquo;that the man who prays most fervently for his enemies&rsquo; downfall has also grieved most sincerely for their souls. David is no mere hater. He is a man whose love has been betrayed, and who therefore cries to heaven for justice precisely because he knows earthly courts will not provide it.&rdquo; This is the hermeneutical key to all imprecatory prayer: it is not personal revenge but the appeal of the innocent to the only righteous judge." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Matthew Henry emphasizes the Messianic dimension of the psalm. In John 15:25, Jesus cites Psalm 35:19 (&ldquo;those who hate me without cause&rdquo;) as fulfilled in the hatred of the religious leaders toward himself. Henry writes: &ldquo;David&rsquo;s innocence in this psalm is a type and shadow of Christ&rsquo;s perfect innocence; his undeserved persecution mirrors the trial of the Son of God, who was hated without any cause greater than his holiness and grace.&rdquo; This Christological reading is not an imposition but is demanded by Jesus himself in the Fourth Gospel." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Tremper Longman III situates the psalm within Israel&rsquo;s broader theology of divine justice. In a culture where powerful enemies could overwhelm the courts, the psalms of lament served as a &ldquo;counter-cultural witness&rdquo; to the belief that the final court is God&rsquo;s throne. Longman writes that the imprecatory psalms are &ldquo;the sound of the helpless finding their voice in God,&rdquo; and that the violence of their imagery reflects not bloodlust but the magnitude of injustice experienced. When read through the cross, they become prayers for ultimate justice &mdash; the judgment that was absorbed by Christ so that mercy could flow." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 35 matters because it takes human suffering and injustice with absolute seriousness. Unlike worldviews that dismiss personal injustice as an illusion or demand stoic indifference, the biblical God invites the wronged to bring their case to him. The psalm insists that every act of malice is witnessed, every false accusation is known, and no injustice will ultimately stand. This is not wishful thinking but the logical consequence of a God who is both omniscient and perfectly just &mdash; a conviction that C.S. Lewis called &ldquo;the only framework that makes human moral indignation coherent.&rdquo;" }} />

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
                  title: "God as Divine Warrior and Advocate",
                  body: "The opening verses of Psalm 35 deploy an astonishing range of military and legal imagery: shield, spear, javelin, the angel of the LORD pursuing enemies, the sword. David appeals to God in terms drawn from ancient Near Eastern warfare, calling on the heavenly king to descend as champion on behalf of his servant. Calvin remarks that the imagery is drawn from Israel&rsquo;s holy war tradition, but is transformed: this is not David mustering an army but laying down arms and appealing entirely to God&rsquo;s power. The Hebrew word &lsquo;rib&rsquo; (plead/contend) in verse 1 is a legal term for bringing a case in court, while the military imagery in verse 3 moves to the battlefield. David sees no contradiction: God is simultaneously judge and warrior, and the two roles converge when he acts on behalf of the innocent. This theme has profound NT resonance: Paul in Romans 8:31-34 asks &ldquo;Who shall bring any charge against God&rsquo;s elect? It is God who justifies. Who is to condemn?&rdquo; The God who fought for David is the God who declares the ungodly righteous through Christ, turning the divine courtroom into a venue of acquittal rather than condemnation."
                },
                {
                  color: PURPLE,
                  title: "Ingratitude and the Betrayal of Covenant Love",
                  body: "Verses 11-16 reveal the deepest wound: these enemies are not strangers but people David befriended and prayed for. When they were sick, he wore sackcloth and fasted on their behalf; he &ldquo;went about as one who laments his mother&rdquo; (v. 14). Yet now they gather maliciously against him, &ldquo;tearing at me without ceasing.&rdquo; The reversal of covenant loyalty &mdash; hesed turned to hatred &mdash; is morally monstrous. Spurgeon calls this &ldquo;the bitterest ingredient in the cup of affliction &mdash; to be wounded in the house of those we loved.&rdquo; The theme points to Jesus, whose closest companions abandoned him and whose disciple handed him over to crucifixion. John 15:25 cites verse 19 (&ldquo;they hated me without cause&rdquo;) directly: the pattern of innocent suffering at the hands of the ungrateful runs from David through Christ. This theme also functions apologetically against the charge that the Bible promotes naive optimism about human nature: Psalm 35 stares without flinching at the capacity of the human heart for ingratitude and malice."
                },
                {
                  color: GOLD,
                  title: "The Threefold Refrain of Vowed Praise",
                  body: "Each of the psalm&rsquo;s three movements ends with a vow of praise: verse 9 (&ldquo;my soul shall rejoice in the LORD, exulting in his salvation&rdquo;), verse 18 (&ldquo;I will give you thanks in the great congregation&rdquo;), and verse 28 (&ldquo;my tongue shall tell of your righteousness and of your praise all the day long&rdquo;). These vows are remarkable because they are spoken before the rescue arrives. Kidner notes that this is the grammar of faith: &ldquo;the lament does not end in despair but in anticipated worship.&rdquo; The movement from &lsquo;fight for me&rsquo; to &lsquo;I will praise you&rsquo; is not wishful thinking but the exercise of what Hebrews 11:1 calls faith &mdash; &ldquo;the assurance of things hoped for, the conviction of things not seen.&rdquo; The praise vow is an act of the will that reshapes the emotional register of the prayer. By the final verse, David has not merely described his predicament but has also rehearsed God&rsquo;s character so thoroughly that praise becomes the only fitting response &mdash; even before the problem is solved."
                },
                {
                  color: TEAL,
                  title: "Imprecation as Ethical and Theological Category",
                  body: "Verses 4-8 and 19-26 contain some of the most intense imprecatory language in the Psalter: &ldquo;Let them be put to shame and dishonor who seek after my life... Let destruction come upon him when he does not know it; and let the net that he hid ensnare him.&rdquo; Modern readers often find such prayers morally troubling. Tremper Longman argues persuasively that these petitions are not prayers for personal revenge but appeals to divine justice: David is refusing to take vengeance himself, instead surrendering the outcome to God. This is actually the opposite of vindictiveness &mdash; it is the theological move Paul commends in Romans 12:19: &ldquo;Never avenge yourselves, but leave it to the wrath of God, for it is written, &lsquo;Vengeance is mine, I will repay, says the Lord.&rsquo;&rdquo; The imprecatory psalms, rightly understood, are the spiritually mature response to injustice: not denial, not self-destructive rage, not bitter silence, but loud, honest appeal to the only truly just tribunal."
                },
                {
                  color: GREEN,
                  title: "Messianic Foreshadowing and New Testament Fulfillment",
                  body: "Jesus&rsquo; own citation of Psalm 35:19 in John 15:25 makes the Messianic dimension explicit. &ldquo;It is to fulfill the word that is written in their Law: &lsquo;They hated me without a cause.&rsquo;&rdquo; But the resonances run deeper than one verse. The entire psalm describes a pattern that reaches its apex in the passion narrative: the innocent sufferer surrounded by false witnesses (v. 11; cf. Matthew 26:60-61), the mockery of those who should have shown compassion (v. 15; cf. Luke 23:35-37), the prayer for vindication by the heavenly Father (vv. 22-24; cf. Hebrews 5:7), and the ultimate vindication through resurrection. Calvin writes: &ldquo;What David sought by prayer, Christ obtained by his death and resurrection. The psalm prays for the downfall of injustice; the cross achieved it.&rdquo; For the Christian reader, Psalm 35 becomes a window not only into David&rsquo;s suffering but into the meaning of Calvary itself."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 35 &mdash; 28 verses across three movements of lament and praise</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1-3", color: ROSE, heading: "Call to Battle", text: "David opens with a flurry of imperatives directed at God: &ldquo;Plead... fight... take hold... draw out... stop the way... say to my soul.&rdquo; The density is deliberate. Calvin notes that this is not impatience but urgency born from genuine danger. The three weapons in verse 3 (large shield, buckler, spear) represent the full array of ancient warfare &mdash; David calls on God to deploy every available means of defense. The final request, &ldquo;say to my soul, I am your salvation,&rdquo; is the most intimate: David needs not only physical rescue but the inner assurance that God is on his side. Matthew Henry observes: &ldquo;He needs God to speak peace to his conscience as much as he needs God to break the swords of his enemies.&rdquo;" },
                { ref: "v. 4-6", color: ROSE, heading: "Imprecation Against Enemies", text: "Four petitions for the confusion and scattering of enemies. The image of the angel of the LORD pursuing them on a dark and slippery road (v. 6) is vivid and terrifying &mdash; the same divine messenger who led Israel through the wilderness now deployed as God&rsquo;s agent of judgment. Spurgeon: &ldquo;The angel who is a shield to the innocent is a sword to the wicked.&rdquo; These verses should be read as appeals to cosmic justice, not personal grudges: David is asking God to be who God says he is &mdash; the defender of the innocent and the opponent of the wicked." },
                { ref: "v. 7-8", color: ROSE, heading: "The Net They Laid", text: "The ironic justice of verse 8 &mdash; the net falls upon the enemy unawares &mdash; echoes Proverbs 26:27 (&ldquo;Whoever digs a pit will fall into it&rdquo;). Longman notes that this is not vindictiveness but trust in the moral logic of the universe: actions have consequences, and a God who permits the unjust to triumph permanently would be less than just. The hidden pit and net imagery is also found in Psalm 57 and 141, suggesting a common Davidic experience of ambush by treacherous opponents." },
                { ref: "v. 9-10", color: GOLD, heading: "First Praise Vow", text: "The first movement closes with anticipated joy: &ldquo;my soul shall rejoice in the LORD, exulting in his salvation.&rdquo; The phrase &lsquo;exulting&rsquo; (giyl) connotes spinning or dancing with joy &mdash; a physical, embodied response to deliverance. Verse 10 is a remarkable confession: &ldquo;All my bones shall say, O LORD, who is like you?&rdquo; The whole body prays. Calvin sees here a model of integrated worship: &ldquo;David does not confine his praise to the lips but draws his entire bodily existence into the act of adoration.&rdquo;" },
                { ref: "v. 11-12", color: PURPLE, heading: "False Witnesses", text: "The second movement opens with a change of register: the military imagery gives way to a courtroom scene. False witnesses (&lsquo;witnesses of violence&rsquo;) interrogate David about things he does not know. The contrast with verse 10 &mdash; &lsquo;who is like you, delivering the poor&rsquo; &mdash; is pointed: while God rescues the poor, men exploit them through false testimony. This scenario directly anticipates the trial of Jesus before the Sanhedrin (Matthew 26:59-61), where false witnesses are specifically sought." },
                { ref: "v. 13-14", color: PURPLE, heading: "David Mourned For His Enemies", text: "One of the most striking confessions in the Psalter: David fasted and prayed for these very people when they were ill. He mourned as for a brother or a mother. This is not the posture of a vindictive man but of one who has genuinely loved and been betrayed. Spurgeon devotes unusual space to these verses: &ldquo;Here we see the full height of David&rsquo;s grace, and also the full depth of his enemies&rsquo; depravity. The worse their ingratitude, the more righteous his appeal to God.&rdquo;" },
                { ref: "v. 15-16", color: PURPLE, heading: "Mockers at the Feast", text: "When David stumbled, they gathered and rejoiced, &ldquo;gnashing at me with their teeth.&rdquo; The festive context (&lsquo;at the cake&rsquo; or &lsquo;at the feast&rsquo;) suggests this mockery occurred at a public gathering. The image is of enemies who celebrate a rival&rsquo;s downfall at a banquet &mdash; behavior condemned throughout Proverbs and the prophets. Luke 23:35-36 contains a direct echo: &ldquo;The rulers scoffed at him... the soldiers also mocked him.&rdquo;" },
                { ref: "v. 17-18", color: GOLD, heading: "How Long? &mdash; Second Praise Vow", text: "&ldquo;How long, O Lord, will you look on?&rdquo; is the classic lament question, and its placement here after detailing the betrayal intensifies it: God has seen everything. The question is not a challenge to divine omniscience but an appeal to divine will &mdash; &lsquo;you can act; when will you?&rsquo; The vow of verse 18 &mdash; public thanksgiving in the great congregation &mdash; is characteristically Davidic. Worship is never private for David; vindication is always to be publicly testified before the gathered assembly." },
                { ref: "v. 19-21", color: ROSE, heading: "Hatred Without Cause", text: "Verse 19 contains the phrase Jesus quotes in John 15:25. The &lsquo;winking eye&rsquo; of malicious mockery in verse 19 is a cultural idiom for contemptuous sneering. Verse 21 is vivid: &ldquo;They open wide their mouths against me; they say, &lsquo;Aha, Aha! Our eyes have seen it!&rsquo;&rdquo; The &lsquo;aha&rsquo; is a cry of triumph at a rival&rsquo;s downfall, used in prophetic literature to characterize Israel&rsquo;s enemies (Ezekiel 25:3). Calvin: &ldquo;They celebrate ruin as if it were a festival; but God sees their celebration and will repay.&rdquo;" },
                { ref: "v. 22-26", color: TEAL, heading: "Appeal to God Who Sees", text: "&ldquo;You have seen, O LORD; be not silent!&rdquo; The appeal to God&rsquo;s sight is the turning point of the psalm. David is not informing God of something he does not know; he is calling on God to act on what he perfectly perceives. Verse 24 states the desired verdict: &ldquo;Vindicate me, O LORD my God, according to your righteousness.&rdquo; The appeal is not to David&rsquo;s own merit but to God&rsquo;s righteousness &mdash; his covenant faithfulness to uphold justice. This is the grammar of grace: even the innocent man appeals not to his own record but to God&rsquo;s character." },
                { ref: "v. 27-28", color: GOLD, heading: "Third Praise Vow &mdash; Forever", text: "The psalm ends not with a request but with a vision of the worshipping community. Those who delight in David&rsquo;s vindication will say &ldquo;Great is the LORD, who delights in the welfare of his servant.&rdquo; And David&rsquo;s own tongue will &ldquo;tell of your righteousness and of your praise all the day long.&rdquo; Kidner notes the shift from &lsquo;my soul shall rejoice&rsquo; (v. 9) to &lsquo;my tongue shall tell&rsquo; (v. 28): private faith becomes public testimony. The psalm that began in crisis ends in perpetual praise. This is the arc of every genuine lament: not the erasure of suffering but its transfiguration into worship." },
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
                  icon: "&#9878;",
                  title: "When You Are Falsely Accused",
                  body: "Psalm 35 was written precisely for the person who has been lied about, misrepresented, or slandered. The temptation in such moments is either to react in kind or to fall into bitter silence. David models a third way: bring the case to God. Articulate your innocence before him, ask him to act, and then wait &mdash; not passively, but with vowed praise. If you are facing false accusations today, try writing out Psalm 35 as your own prayer, inserting your specific situation into its petitions. Let the psalm give you language for what you feel and a framework for how to respond.",
                  prayer: "Lord, you are my advocate and warrior. You see what has been done and said against me. I refuse to take revenge; I lay this injustice at your feet. Vindicate me according to your righteousness, not mine. Let my tongue tell of your righteousness, all the day long. Amen."
                },
                {
                  color: PURPLE,
                  icon: "&#9654;",
                  title: "Loving Those Who Have Betrayed You",
                  body: "Verses 13-14 reveal a David who prayed and fasted for enemies before they became enemies. This pattern of love preceding betrayal mirrors the love of Christ, who interceded for those who crucified him. Examine your own relationships: is there someone whose hostility feels particularly bitter because you once showed them genuine care? The psalm does not ask you to pretend that betrayal doesn&rsquo;t hurt. It invites you to bring the pain to God while refusing to be defined by the desire for revenge. The very act of naming your grief to God is itself an act of faith that he is listening.",
                  prayer: "Father, I confess that the betrayal of those I loved stings far more than opposition from strangers. Help me to mourn the relationship without nursing hatred. Guard my heart from bitterness. May I extend to others the same mercy you have shown me in Christ. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9733;",
                  title: "The Practice of Preemptive Praise",
                  body: "Three times in this psalm David vows praise before his situation changes. This is not denial &mdash; he does not pretend the enemy has gone away. It is the discipline of praise as a spiritual act of will that reshapes our interior world. Eugene Peterson writes that the lament psalms teach us that &ldquo;there is a difference between what we feel and what is true, and prayer is the practice of choosing truth over feeling.&rdquo; Begin cultivating the habit of preemptive praise: name what you know to be true about God&rsquo;s character before you can see how he will act in your circumstances.",
                  prayer: "Lord, I choose to praise you before I see the answer. I exult in your salvation even now. Your character has not changed; your love is not diminished. I will give you thanks in the great congregation. Let your name be magnified through my story of deliverance. Amen."
                },
                {
                  color: TEAL,
                  icon: "&#10022;",
                  title: "Imprecatory Prayer as Spiritual Discipline",
                  body: "Most contemporary Christians never pray imprecatory prayers, considering them sub-Christian. But Jesus himself cited Psalm 35 and prayed &ldquo;How long&rdquo; from the cross (Matthew 27:46, citing Psalm 22). The imprecatory psalms are not permission for vindictiveness; they are a discipline of handing our rage to God rather than acting on it. When you feel the impulse toward revenge, channel it into the language of the psalms: tell God exactly how wronged you feel, ask him to act as just judge, and then release the outcome. This is what Romans 12:19 commands: &ldquo;Vengeance is mine, says the Lord.&rdquo; To pray imprecatorily is to take that promise seriously.",
                  prayer: "Holy Judge, I bring before you the wrong that has been done. I am angry, and I refuse to pretend otherwise. But I also refuse to take vengeance into my own hands. You are the righteous judge. I trust your timing and your verdict. Vindicate your name by doing what is right. Amen."
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

              <div style={{ background: `linear-gradient(135deg, rgba(225,29,72,0.08), rgba(107,79,187,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>Key Verse to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;Plead my cause, O LORD, with those who strive with me; fight against those who fight against me.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 35:1 &mdash; the opening cry of this imprecatory prayer</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
