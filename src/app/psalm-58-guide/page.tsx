"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "RX8KpwUwNIo", title: "Psalm 58 -- The God Who Judges the Judges" },
  { videoId: "vBgUThnoaXc", title: "Understanding the Imprecatory Psalms" },
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

export default function Psalm58Page() {
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
            <span style={{ color: ROSE, fontSize: "0.78rem" }}>Psalm 58</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(225,29,72,0.12)", border: `1px solid rgba(225,29,72,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: ROSE, marginBottom: "1rem" }}>Davidic Miktam &mdash; Against Unjust Judges</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 58: Surely There Is a God<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>Who Judges on Earth</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A miktam of David &mdash; a fierce imprecatory psalm indicting the corrupt rulers and unjust judges of the earth, appealing past every human court to the Judge of all the earth who will surely vindicate the righteous.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "David"], ["Book", "Book II (Ps 42-72)"], ["Genre", "Imprecatory"], ["Key Verse", "v. 11"]].map(([k, v]) => (
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: When the Judges Are Corrupt</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 58 is among the most intense of the imprecatory psalms, and it addresses a problem that has plagued every society in history: what happens when the very people charged with administering justice become its chief violators? The psalm opens with a stinging indictment of corrupt rulers: &ldquo;Do you indeed decree what is right, you gods? Do you judge the children of man uprightly? No, in your hearts you devise wrongs; your hands deal out violence on earth&rdquo; (vv. 1-2). The targets are those in positions of authority &mdash; judges, rulers, the powerful &mdash; who have perverted justice." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The word translated &lsquo;gods&rsquo; in verse 1 (elim or, by emendation, &lsquo;mighty ones&rsquo;) is debated. Derek Kidner notes that it likely refers to human rulers who wield god-like power over the lives of others, or possibly to the spiritual powers standing behind unjust earthly authorities (cf. Psalm 82). Either way, the point is clear: those entrusted with the sacred duty of justice have betrayed it, dealing out violence instead of righteousness. The psalm is a cry against systemic injustice &mdash; not merely the sins of individuals but the corruption of the institutions meant to restrain evil." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Verses 3-5 trace the corruption to its root: &ldquo;The wicked are estranged from the womb; they go astray from birth, speaking lies. They have venom like the venom of a serpent, like the deaf adder that stops its ear.&rdquo; Calvin draws out the doctrine of innate human depravity: &ldquo;David traces the poison not merely to bad choices but to a corrupt nature, present from the womb. The unjust judge does not become corrupt by accident; he expresses a depravity that was there from the beginning.&rdquo; The image of the adder that stops its ear &mdash; refusing even the most skillful charmer &mdash; depicts a willful deafness to all appeals for justice and righteousness." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The middle section (vv. 6-9) contains a series of vivid imprecations, asking God to break the teeth of these predatory rulers, to make them vanish like water that runs away, like a snail that dissolves, like a stillborn child that never sees the sun. Tremper Longman cautions against reading these as expressions of personal vindictiveness: &ldquo;These are prayers for the end of injustice, addressed to God rather than enacted by the psalmist. The violence of the imagery matches the violence of the injustice being protested. David is not plotting revenge; he is begging God to stop the predators who devour the innocent.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm reaches its resolution in verses 10-11: &ldquo;The righteous will rejoice when he sees the vengeance... Mankind will say, &lsquo;Surely there is a reward for the righteous; surely there is a God who judges on earth.&rsquo;&rdquo; Spurgeon comments on this conclusion: &ldquo;The psalm does not end in despair over injustice but in confidence that God&rsquo;s justice will ultimately prevail. The final verdict of history will vindicate the righteous and confirm that there is, after all, a God who judges the earth.&rdquo; The whole psalm drives toward this assurance: human courts may fail, but the divine court never will." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 58 addresses one of the most powerful objections to faith: the persistence of injustice, especially when perpetrated by those in power. Rather than denying the reality of corruption or counseling passive resignation, the psalm affirms both the depth of the problem and the certainty of its resolution. The very moral outrage we feel at corrupt judges is itself evidence, the psalm implies, that justice is woven into the fabric of reality by a righteous God. The cry &lsquo;surely there is a God who judges on earth&rsquo; is not naive optimism but the considered conviction that the moral structure of the universe guarantees an ultimate reckoning." }} />

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
                  title: "The Corruption of Those Who Administer Justice",
                  body: "The opening indictment (vv. 1-2) targets not ordinary criminals but those in authority &mdash; the judges and rulers whose calling is to uphold justice. &ldquo;In your hearts you devise wrongs; your hands deal out violence on earth.&rdquo; This is a particularly grievous form of evil because it perverts the very institution God ordained to restrain evil (Romans 13:1-4). Calvin notes the special wickedness of corrupt authority: &ldquo;When the fountain of justice is poisoned, the whole land is contaminated; the judge who sells justice does more harm than the thief who steals, for he destroys the people&rsquo;s only protection against the thief.&rdquo; This theme speaks directly to every age that has suffered under corrupt courts, rigged systems, and rulers who exploit the people they should protect. The psalm refuses to treat such corruption as normal or acceptable; it names it as the violence it truly is, and appeals to the higher court of heaven."
                },
                {
                  color: PURPLE,
                  title: "The Roots of Wickedness in Human Nature",
                  body: "Verses 3-5 locate the source of the rulers&rsquo; corruption in a depravity present &lsquo;from the womb.&rsquo; &ldquo;The wicked are estranged from the womb; they go astray from birth, speaking lies.&rdquo; This is not merely rhetorical exaggeration but a theological observation about the universality and depth of human sin. The image of the deaf adder, which &lsquo;stops its ear&rsquo; against even the most skillful snake-charmer, depicts a willful refusal to hear any appeal to righteousness. Longman observes that the psalm presents the wicked as those who have hardened themselves against all correction: &ldquo;Their deafness is not inability but refusal; they have stopped their own ears against the voice of justice.&rdquo; This theme connects to the broader biblical doctrine of original sin and the bondage of the will (cf. Psalm 51:5, Romans 3:10-18). It also explains why mere reform of institutions is insufficient: the problem is rooted in the human heart, which only God can change."
                },
                {
                  color: GOLD,
                  title: "Imprecation as the Cry for Justice",
                  body: "The vivid imprecations of verses 6-9 &mdash; asking God to break the teeth of the wicked, to make them vanish like water, dissolve like a snail, perish like a stillbirth &mdash; are jarring to modern readers. But understood rightly, they are not expressions of personal hatred but appeals to divine justice. Tremper Longman emphasizes that these prayers are addressed to God, not enacted by the psalmist: &ldquo;David does not take up the sword against the unjust judges; he takes up prayer. The imprecation is the alternative to vigilante violence.&rdquo; The intensity of the imagery reflects the intensity of the injustice. By bringing his outrage to God and asking him to act, David models the surrender of vengeance that the NT commands (Romans 12:19). The imprecatory psalms give voice to the legitimate longing for justice that wells up in the face of unpunished evil &mdash; a longing that finds its ultimate answer not in human revenge but in the final judgment of God."
                },
                {
                  color: GREEN,
                  title: "The Certainty of Divine Vindication",
                  body: "The psalm&rsquo;s conclusion (vv. 10-11) is its theological summit: &ldquo;The righteous will rejoice when he sees the vengeance... Mankind will say, &lsquo;Surely there is a reward for the righteous; surely there is a God who judges on earth.&rsquo;&rdquo; The whole psalm drives toward this confident assertion. Despite the apparent triumph of corrupt judges, the final word belongs to God, whose justice will vindicate the righteous and expose the wicked. Spurgeon: &ldquo;The doubt that haunts every sufferer of injustice &mdash; &lsquo;Is there really a God who cares?&rsquo; &mdash; is answered here with a resounding &lsquo;Surely!&rsquo;&rdquo; This theme provides the answer to the problem the psalm raises. The existence of corruption does not disprove God&rsquo;s justice; it sets the stage for its ultimate demonstration. The believer who suffers under injustice can hold fast to this certainty: there is a God who judges on earth, and his verdict will be the final one. The NT confirms this in the promise of Christ&rsquo;s return to judge the living and the dead (2 Timothy 4:1)."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 58 &mdash; 11 verses against corrupt rulers and for divine justice</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1-2", color: ROSE, heading: "Do You Indeed Decree What Is Right?", text: "&ldquo;Do you indeed decree what is right, you gods? Do you judge the children of man uprightly? No, in your hearts you devise wrongs; your hands deal out violence on earth.&rdquo; The psalm opens by directly confronting the corrupt authorities. The rhetorical questions expose the gap between their office (to decree what is right) and their practice (devising wrongs). Calvin: &ldquo;He arraigns them at the bar of God, exposing the hypocrisy of those who wear the robe of justice while their hearts plot violence.&rdquo;" },
                { ref: "v. 3-5", color: PURPLE, heading: "Estranged From the Womb", text: "&ldquo;The wicked are estranged from the womb... They have venom like the venom of a serpent, like the deaf adder that stops its ear.&rdquo; The corruption is traced to its root in a fallen nature. The image of the deaf adder, immune even to the skilled charmer, depicts willful refusal to heed any appeal for righteousness. Longman: &ldquo;Their deafness is chosen, not natural; they have hardened themselves against the voice of justice.&rdquo;" },
                { ref: "v. 6-7", color: ROSE, heading: "Break Their Teeth, O God", text: "&ldquo;O God, break the teeth in their mouths; tear out the fangs of the young lions, O LORD! Let them vanish like water that runs away.&rdquo; The imprecation begins, picturing the wicked as predatory beasts whose teeth and fangs must be broken to render them harmless. The prayer is for God to disarm the predators. Spurgeon: &ldquo;He does not ask to break their teeth himself but prays that God would draw the fangs of these devourers of the poor.&rdquo;" },
                { ref: "v. 8-9", color: ROSE, heading: "Like a Snail That Dissolves", text: "&ldquo;Let them be like the snail that dissolves into slime, like the stillborn child who never sees the sun.&rdquo; The images intensify, asking that the wicked perish utterly. Verse 9&rsquo;s difficult Hebrew (the cooking pots and the thorns) conveys sudden judgment &mdash; swept away before they can even accomplish their schemes. Kidner: &ldquo;The prayer is that the designs of the wicked be cut short before they ripen into deeds.&rdquo;" },
                { ref: "v. 10", color: GREEN, heading: "The Righteous Will Rejoice", text: "&ldquo;The righteous will rejoice when he sees the vengeance; he will bathe his feet in the blood of the wicked.&rdquo; The vivid image of bathing the feet in blood is troubling to modern readers but reflects the ancient celebration of decisive victory over evil. The rejoicing is not sadistic pleasure in suffering but vindicated relief that justice has finally prevailed. Calvin: &ldquo;The godly rejoice not in cruelty but in the triumph of God&rsquo;s righteousness over entrenched evil.&rdquo;" },
                { ref: "v. 11", color: GOLD, heading: "Surely There Is a God Who Judges", text: "The triumphant conclusion: &ldquo;Mankind will say, &lsquo;Surely there is a reward for the righteous; surely there is a God who judges on earth.&rsquo;&rdquo; The final verdict of history vindicates faith. The double &lsquo;surely&rsquo; answers the doubt that haunts every victim of injustice. Spurgeon: &ldquo;The whole psalm has been pressing toward this conclusion: there is a God, he does judge, and the righteous are not forgotten.&rdquo; This is the assurance that sustains the believer through every season of apparent injustice." },
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
                  title: "Holding Fast When Justice Seems Absent",
                  body: "When you witness corruption in high places &mdash; rigged systems, powerful people escaping accountability, the innocent crushed by those meant to protect them &mdash; Psalm 58 gives you both permission to be outraged and a place to take your outrage. The psalm does not counsel resignation or pretend the injustice is not real. It insists, against all appearances, that &lsquo;there is a God who judges on earth.&rsquo; When you are tempted to conclude that evil simply wins, return to this psalm&rsquo;s confident &lsquo;surely.&rsquo; The final accounting belongs to God, and no corrupt judge will escape his court.",
                  prayer: "Righteous Judge, I have seen injustice in places where justice should reign. It grieves and angers me. I bring my outrage to you rather than letting it curdle into despair or revenge. Surely there is a God who judges on earth &mdash; you are that God. I trust your final verdict. Amen."
                },
                {
                  color: ROSE,
                  icon: "&#9826;",
                  title: "Bringing Your Anger at Injustice to God",
                  body: "The imprecatory psalms teach us that anger at injustice is not sinful in itself &mdash; it can be the appropriate response of a moral being to genuine evil. The question is what we do with it. Psalm 58 channels that anger into prayer, asking God to act rather than taking matters into our own hands. When you feel the burning indignation that injustice provokes, do not suppress it as &lsquo;un-Christian,&rsquo; nor act it out in vengeance. Instead, bring it honestly to God, asking him to stop the predators and vindicate the oppressed, and then leave the outcome in his hands.",
                  prayer: "Lord, I am angry at the evil I see, and I will not pretend otherwise. But I refuse to take vengeance into my own hands. I bring my indignation to you, the only one who judges justly. Break the fangs of those who devour the weak. Defend the oppressed. I leave the outcome to you. Amen."
                },
                {
                  color: PURPLE,
                  icon: "&#9733;",
                  title: "Recognizing the Depth of the Human Problem",
                  body: "Psalm 58 traces corruption to a depravity present &lsquo;from the womb.&rsquo; This sobering diagnosis has practical implications: it warns us against the naive belief that better systems alone will produce justice. Institutions matter, and we should work to reform them &mdash; but the deeper problem is the human heart, which only God can change. This insight should make us both realistic about the persistence of evil and prayerful about its ultimate cure. It should also humble us, reminding us that the same corruption we condemn in others has its root in the nature we all share. Our hope is not in human goodness but in the transforming grace of God.",
                  prayer: "Father, I see the corruption in the world and I am tempted to think a better system would fix it. But you show me the problem runs deeper &mdash; into the human heart, including my own. Change hearts, beginning with mine. Work for justice through reformed institutions, but ultimately through transformed people. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#10022;",
                  title: "Anchoring Hope in the Final Judgment",
                  body: "The conclusion of Psalm 58 anchors the believer&rsquo;s hope not in the present triumph of justice but in its certain future. For the Christian, this hope is sharpened by the promise of Christ&rsquo;s return to judge the living and the dead. The wrongs that go unpunished now will not go unpunished forever; the righteous who suffer now will be vindicated then. This eternal perspective enables us to endure present injustice without bitterness and without despair. It does not excuse passivity in the face of evil &mdash; we are still called to do justice &mdash; but it frees us from the crushing burden of believing that everything depends on us achieving justice in our own strength and time.",
                  prayer: "Lord Jesus, you will return to judge the world in righteousness. Every hidden wrong will be exposed, every injustice addressed, every tear accounted for. Anchor my hope in that certain day. Let it free me to work for justice now without despair, trusting that you will have the final word. Amen."
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
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;Surely there is a reward for the righteous; surely there is a God who judges on earth.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 58:11 &mdash; the confident verdict that answers all injustice</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
