"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "V0JIj2b2VKk", title: "Psalm 39 -- Meditation on Human Frailty" },
  { videoId: "YQmDQCdEpTk", title: "The Brevity of Life in the Psalms" },
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

export default function Psalm39Page() {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, sans-serif)", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #08090e 0%, #10121a 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: PURPLE, fontSize: "0.78rem" }}>Psalm 39</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(107,79,187,0.12)", border: `1px solid rgba(107,79,187,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PURPLE, marginBottom: "1rem" }}>Davidic Wisdom &mdash; Meditation on Mortality</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 39: I Will Watch My Ways<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>and Keep My Tongue from Sin</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            A psalm of David &mdash; a searching meditation on the silence of grief, the brevity of human life, and the desperate hope that God alone is worth clinging to when everything else proves vapour.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "David"], ["Director", "Jeduthun"], ["Book", "Book I (Ps 1-41)"], ["Theme", "Human Frailty &amp; Hope in God"]].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: MUTED, marginBottom: 2 }}>{k}</div>
                <div style={{ fontSize: "0.92rem", fontWeight: 600, color: TEXT }} dangerouslySetInnerHTML={{ __html: v }} />
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: Silence, Brevity, and the Only Hope</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 39 is one of the strangest and most psychologically honest prayers in all of Scripture. It opens with a resolution of silence: David has decided to keep quiet in the presence of the wicked lest his speech give them ammunition. But the resolve immediately breaks down: &ldquo;my heart became hot within me. As I mused, the fire burned; then I spoke with my tongue.&rdquo; What follows is not a triumphant hymn but a raw, almost rebellious soliloquy on the terrifying brevity of human existence &mdash; and the thin but tenacious hope that God is still there." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Derek Kidner calls Psalm 39 &ldquo;one of the most moving of psalms&rdquo; and notes its remarkable similarity to passages in Job: the same cry of &lsquo;look away from me&rsquo; (v. 13; cf. Job 7:19), the same meditation on man&rsquo;s fleeting nature, the same refusal to simply accept suffering without complaint. &ldquo;The psalmist,&rdquo; Kidner writes, &ldquo;is neither a stoic nor a fatalist. He is a believer who is struggling, and his struggle is the most honest thing about him.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The central metaphor of the psalm is &lsquo;hebel&rsquo; &mdash; breath, vapor, vanity (vv. 5, 6, 11; the same word that dominates Ecclesiastes). Tremper Longman notes that the word appears three times in short succession to underscore its totality: human life, human wealth, and human activity are all &lsquo;hebel.&rsquo; This is not nihilism but diagnosis: before the God who measures lifetimes in a mere handbreadth, human self-sufficiency is simply a delusion. The psalm forces this reckoning so that true hope can emerge: &ldquo;And now, O Lord, for what do I wait? My hope is in you&rdquo; (v. 7)." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "John Calvin in his commentary locates the psalm&rsquo;s existential tension in the doctrine of divine chastisement. Verses 8-11 suggest that David&rsquo;s suffering is at least partly the result of God&rsquo;s disciplining hand. Calvin finds this theologically significant: &ldquo;David does not blame his enemies for his affliction but traces it to the hand of God. This is wisdom: to look past secondary causes to the primary cause, and to learn what God intends by affliction.&rdquo; The movement from complaint to humble submission is the pastoral heart of the psalm." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Spurgeon, preaching on verse 7, lingers on the phrase &ldquo;my hope is in you&rdquo; as the summit of the psalm: &ldquo;When the psalmist has stripped away every other support &mdash; wealth, health, human companions, even the length of his own days &mdash; he arrives at the bare foundation: God alone. This is the work that affliction does when it is received rightly: it removes the scaffolding of earthly hope until only the building itself remains.&rdquo; The psalm&rsquo;s pastoral function is precisely this stripping away." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Matthew Henry draws attention to the psalm&rsquo;s final verse (v. 13), which strikes many readers as jarring: &ldquo;Look away from me, that I may smile again, before I depart and am no more.&rdquo; Henry notes that this is not a rejection of God but a response to the overwhelming intensity of divine scrutiny: &ldquo;David does not want God to be absent; he wants the searching gaze of divine correction to be momentarily lifted so that he can breathe. The prayer is an act of honesty about the limits of creaturely endurance &mdash; and God does not rebuke him for it.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 39 addresses the perennial philosophical question of meaning in a world of apparent randomness and brevity. The psalm does not resolve the problem of suffering by providing a neat theodicy; it models a different response &mdash; one that names the darkness accurately (&lsquo;man is a mere breath&rsquo;) while refusing to draw the atheist&rsquo;s conclusion (that therefore life is meaningless). Instead, the very awareness of life&rsquo;s brevity becomes the occasion for a desperate, authentic hope in the God who endures forever. This is precisely what Pascal described in his &lsquo;Wager&rsquo;: the logic that drives finite, suffering creatures to bet their lives on the Eternal." }} />

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
                  title: "The Discipline of Silence and Its Breaking",
                  body: "The psalm&rsquo;s opening movement (vv. 1-3) presents David&rsquo;s deliberate attempt to maintain silence before his enemies &mdash; not the silence of despair but the disciplined restraint of someone who knows that speech can be weaponized. Yet the silence cannot hold. &ldquo;My heart became hot within me. As I mused, the fire burned.&rdquo; Calvin sees in this the proper order of prayer: first the discipline of restraint (not venting to the wrong audience), then the release of honest prayer to God alone. There is a pastoral wisdom here for those in conflict: not every grief belongs in public. Some must be carried first to the divine ear before they are carried to any human one. But carry it you must &mdash; the fire of unexpressed grief will not remain contained."
                },
                {
                  color: ROSE,
                  title: "Hebel: Life as Breath and Vapor",
                  body: "The word &lsquo;hebel&rsquo; appears three times in four verses (vv. 5, 6, 11) and governs the psalm&rsquo;s entire worldview. The word denotes a vapor, a breath, something that exists momentarily then is gone. Longman notes that this is the same vocabulary as Ecclesiastes and serves the same function: &ldquo;Not to deny the reality of life but to reframe its meaning. The man who knows he is a vapor will not invest his identity in wealth, reputation, or the opinions of enemies. He will hold these things loosely.&rdquo; Verse 6 is particularly striking: &ldquo;Surely a man goes about as a shadow. Surely for nothing they are in turmoil; man heaps up wealth and does not know who will gather.&rdquo; This is Qohelet&rsquo;s voice in psalm form, and its purpose is the same: to destabilize false hope so that true hope can take root."
                },
                {
                  color: GOLD,
                  title: "Hope Distilled to Its Irreducible Minimum",
                  body: "Verse 7 is the theological pivot of the psalm: &ldquo;And now, O Lord, for what do I wait? My hope is in you.&rdquo; This sentence arrives after David has systematically exposed the vaporous nature of human existence, wealth, and accomplishment. What is left? God. Spurgeon: &ldquo;The psalm is a process of elimination that ends in God. It is the most ruthless spiritual audit imaginable, and the only asset that survives the audit is divine faithfulness.&rdquo; This kind of hope &mdash; hope in God alone, without supporting arguments from circumstances &mdash; is what NT writers call &lsquo;faith.&rsquo; Hebrews 11:1 defines it as &ldquo;the assurance of things hoped for, the conviction of things not seen.&rdquo; Psalm 39&rsquo;s David has nothing to see and is hoping anyway."
                },
                {
                  color: TEAL,
                  title: "Divine Chastisement as Pastoral Reality",
                  body: "Verses 8-11 acknowledge that David&rsquo;s suffering is not entirely the work of external enemies: &ldquo;Remove your stroke from me; I am spent by the hostility of your hand.&rdquo; This is the most theologically difficult move in the psalm &mdash; identifying God as the agent of affliction. Calvin argues that this is not a failure of faith but a mark of it: &ldquo;The believer who sees only secondary causes and blames only his enemies is spiritually shallow. The mature believer asks what God is teaching through adversity.&rdquo; This does not mean God is the author of evil, but it does mean that providential suffering has purpose. Hebrews 12:5-11 quotes Proverbs 3:11-12 and makes this explicit: God disciplines those he loves as a father disciplines his children. David&rsquo;s willingness to receive this truth, even when it is painful, marks him as a son rather than a stranger."
                },
                {
                  color: GREEN,
                  title: "The Prayer of the Sojourner",
                  body: "Verse 12 contains a remarkable self-description: &ldquo;I am a sojourner with you, a guest, like all my fathers.&rdquo; The word &lsquo;sojourner&rsquo; (ger) carries enormous weight in Israel&rsquo;s theology &mdash; it describes a resident alien, one who lives in a land that is not finally their own. David applies this term to his relationship with God and with the earth itself. Kidner writes: &ldquo;To be a sojourner with God is both humility and honor: humility, because it acknowledges that we are transients; honor, because God himself provides hospitality to the passing traveler.&rdquo; The NT develops this theme extensively: Hebrews 11:13-16 describes the heroes of faith as &ldquo;strangers and exiles on the earth,&rdquo; and 1 Peter 2:11 addresses Christians as &ldquo;sojourners and exiles.&rdquo; This is not escapism but eschatological clarity: the world as it is cannot be our permanent home."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 39 &mdash; 13 verses of disciplined silence, erupting grief, and surprising hope</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1", color: PURPLE, heading: "The Resolution of Silence", text: "David opens with a decision: to put a muzzle on his mouth in the presence of the wicked, lest his words give his enemies a weapon. This is wisdom, not weakness. Proverbs 17:28 observes: &ldquo;Even a fool who keeps silent is considered wise.&rdquo; But David&rsquo;s silence is specifically directed at the wicked &mdash; he is not silencing himself before God, only before his opponents. Calvin: &ldquo;It is holy courage to withhold our grief from those who would exploit it, and bring it instead to the only one who can hear it rightly.&rdquo;" },
                { ref: "v. 2-3", color: PURPLE, heading: "The Fire Within", text: "The silence breaks. The word translated &lsquo;mused&rsquo; (hagah) is the same root as the meditative murmuring of Psalm 1:2 &mdash; David has been quietly ruminating, and the rumination has generated heat. The image is of a fire kindled by breath. Spurgeon: &ldquo;Some griefs cannot be kept in; they are too hot for any container. The best that can be said is that they went to the right place when they finally burst out &mdash; to God.&rdquo;" },
                { ref: "v. 4-5", color: ROSE, heading: "How Long Are My Days?", text: "David asks God to reveal the measure of his days. The answer implicit in the psalm is humbling: a handbreadth. The ancient handbreadth was approximately three inches &mdash; the span of four fingers. Calvin: &ldquo;God measures our lives by a handbreadth to remind us that every boast of permanence is a form of madness. Even the healthiest human life, measured against eternity, is less than a breath.&rdquo; The phrase &lsquo;before you each man is as nothing&rsquo; does not dehumanize but reorients: before the Eternal God, even our most impressive achievements are a vanishing vapor." },
                { ref: "v. 6", color: ROSE, heading: "Shadows and Heaps", text: "&ldquo;Man heaps up wealth and does not know who will gather.&rdquo; The irony is sharp: the anxious accumulator dies not knowing whether his heirs will treasure or squander what he spent his life building. Jesus echoes this exactly in the Parable of the Rich Fool (Luke 12:16-21): &ldquo;This night your soul is required of you, and the things you have prepared, whose will they be?&rdquo; The psalm and the parable agree: wealth gathered without reference to God is hebel &mdash; vapor." },
                { ref: "v. 7", color: GOLD, heading: "The Pivot: Hope in God Alone", text: "&ldquo;And now, O Lord, for what do I wait? My hope is in you.&rdquo; This is the theological center of the psalm. The &lsquo;and now&rsquo; is a turning point in argument: &lsquo;Given everything I have just said about the brevity of human life, what remains?&rsquo; The answer is God. Kidner: &ldquo;The psalm strips human existence to its bones and finds that only God remains as an object worthy of hope. This is not despair but discovery.&rdquo; The Hebrew word for hope here (tochelet) carries the sense of expectant waiting, not passive resignation." },
                { ref: "v. 8-9", color: TEAL, heading: "Deliver Me from Transgression", text: "David&rsquo;s prayer shifts from complaint to petition for deliverance from his own sins: &ldquo;Deliver me from all my transgressions; do not make me the scorn of the fool.&rdquo; This is remarkable: in the midst of meditation on mortality, David&rsquo;s chief concern is not length of days but purity of life. Verse 9 returns to the silence motif: &ldquo;I am mute; I do not open my mouth, for it is you who have done it.&rdquo; Having spoken honestly to God, David can be silent before men. This is the proper sequence of processing grief." },
                { ref: "v. 10-11", color: ROSE, heading: "Remove Your Stroke", text: "&ldquo;Remove your stroke from me; I am spent by the hostility of your hand.&rdquo; This is the prayer of a man who has correctly identified the ultimate source of his suffering. Not exonerating human evildoers, but acknowledging divine sovereignty over even painful circumstances. Verse 11 introduces the moth-image: God consumes what man values as moths consume garments. Matthew Henry: &ldquo;The most durable earthly beauty rots like cloth before the divine holiness; God&rsquo;s chastening reveals what was always true: human glory is fabric, not stone.&rdquo;" },
                { ref: "v. 12", color: GREEN, heading: "A Sojourner and a Guest", text: "David identifies himself as a &lsquo;ger&rsquo; (sojourner) and a &lsquo;toshav&rsquo; (resident alien) &mdash; two technical terms from Israel&rsquo;s legal vocabulary for someone who lives in a community but does not own land there. Applied spiritually, they describe the posture of one who holds earthly life with open hands. &ldquo;Like all my fathers&rdquo; links David to the patriarchs, who are similarly described in Genesis as sojourners in the promised land. The NT picks up this language as a description of the church&rsquo;s identity (Hebrews 11:13; 1 Peter 2:11)." },
                { ref: "v. 13", color: PURPLE, heading: "Look Away, That I May Smile", text: "The psalm ends with an extraordinary request: &ldquo;Look away from me, that I may smile again, before I depart and am no more.&rdquo; This is not apostasy but the honest confession of a finite creature overwhelmed by the intensity of divine scrutiny. Job makes the same request (Job 7:19). Kidner writes: &ldquo;God does not rebuke this prayer. The Psalter preserves it as a legitimate cry, because God who made finite creatures knows that they can be overcome by the weight of his attention.&rdquo; The very finitude of the creature &mdash; unable to endure full divine gaze without respite &mdash; points toward the need for the mediator that Christ provides." },
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
                  color: PURPLE,
                  icon: "&#9670;",
                  title: "When You Can No Longer Stay Silent",
                  body: "Psalm 39 validates the experience of grief that has been held in too long. Many believers believe that spiritual maturity means suppressing their pain, maintaining a cheerful exterior, and never voicing doubt. This psalm says the opposite: the fire built up inside David until it had to come out. The question is not whether you will release it, but where. David&rsquo;s wisdom was to release it to God, not to his enemies. If you have been holding grief, doubt, or pain in silence, this psalm gives you permission to speak &mdash; to God, to a trusted confessor, to a spiritual director. The heat inside you is not a sign of weak faith; it may be the beginning of authentic prayer.",
                  prayer: "Lord, I have been quiet too long. I have held inside things that need to be said. I bring them now to you: the grief, the confusion, the sense that life is passing without meaning. Hear my prayer. Do not be silent before me. Amen."
                },
                {
                  color: ROSE,
                  icon: "&#9826;",
                  title: "Holding Your Life as Vapor",
                  body: "What would change in your daily life if you genuinely internalized the message of verse 5: that your days are a handbreadth before God? Not in a paralyzing or morbid way, but in the liberating way that frees you from the tyranny of reputation, accumulation, and status. The person who knows they are a vapor stops trying to build an empire and starts asking: &lsquo;What is worth doing with the days I have been given?&rsquo; The medieval practice of &lsquo;memento mori&rsquo; (remember you will die) was not pessimism but realism in service of focus. Psalm 39 invites you to hold your life with open hands.",
                  prayer: "God of eternity, help me to number my days rightly. Strip away the illusion of permanence that makes me grasp and hoard and strive after wind. Let the knowledge that my life is vapor free me to love what you love and do what you have prepared for me to do. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9733;",
                  title: "Discovering What Remains When Everything Else Fails",
                  body: "The rhetorical structure of Psalm 39 is a process of elimination. By verse 7, David has eliminated every earthly support: health, wealth, human relationships, even the longevity of his own life. What is left? &ldquo;My hope is in you.&rdquo; This is not the faith that emerges in pleasant circumstances but the faith that remains when everything else has been stripped away. If you are in a season of loss &mdash; health, relationship, career, certainty &mdash; Psalm 39 offers not explanations but company: David walked this path, and at the bottom of the stripping process, he found God.",
                  prayer: "Lord, I have watched my supports fall away one by one. What remains is you. I do not fully understand, and the pain is real. But my hope is in you &mdash; not in my circumstances, not in my strength, not in outcomes I can control. You are enough. Amen."
                },
                {
                  color: TEAL,
                  icon: "&#10022;",
                  title: "Living as a Sojourner",
                  body: "The self-description of verse 12 &mdash; &lsquo;I am a sojourner with you, a guest, like all my fathers&rsquo; &mdash; has enormous practical implications. Sojourners travel light. They do not over-invest in the infrastructure of a land they are passing through. They hold their earthly arrangements loosely because they know the journey continues beyond the current stopping place. This is not irresponsibility but eschatological wisdom. If you find yourself too attached to a particular outcome, too devastated by a particular loss, or too invested in maintaining a particular image, the question of Psalm 39 is: are you living like a sojourner or a permanent resident? The answer shapes everything.",
                  prayer: "Father, help me to live as a sojourner in this world &mdash; fully present, fully engaged, but not ultimately at home here. Let my citizenship in your kingdom shape my priorities, my possessions, and my plans. Amen."
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

              <div style={{ background: `linear-gradient(135deg, rgba(107,79,187,0.08), rgba(13,148,136,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>Key Verse to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;And now, O Lord, for what do I wait? My hope is in you.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 39:7 &mdash; the irreducible minimum of faith</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
