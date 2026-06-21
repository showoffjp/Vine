"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "p7rBCfRnP4I", title: "Psalm 41 -- Care for the Poor and Betrayal" },
  { videoId: "FQm8fQCuC3A", title: "Book 1 of the Psalms: Overview and Themes" },
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

export default function Psalm41Page() {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, sans-serif)", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #080e09 0%, #0f1a10 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: TEAL, fontSize: "0.78rem" }}>Psalm 41</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(13,148,136,0.12)", border: `1px solid rgba(13,148,136,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TEAL, marginBottom: "1rem" }}>Davidic Psalm &mdash; Closing Book I</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 41: Blessed Is He Who<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>Considers the Poor</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            The final psalm of Book I &mdash; David&rsquo;s prayer in illness, betrayal by a trusted friend, and the doxology that closes the Psalter&rsquo;s first book. Its echo in John 13 makes it one of the most directly Messianic psalms in the collection.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "David"], ["Book", "Book I (Ps 1-41)"], ["Type", "Individual Lament"], ["NT Ref", "John 13:18"]].map(([k, v]) => (
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: The Poor, the Sick, and the Betrayed</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 41 closes Book I of the Psalter with a movement that is characteristic of the entire first collection: wisdom, lament, and praise woven together. The psalm opens with a beatitude &mdash; &ldquo;Blessed is the one who considers the poor&rdquo; &mdash; but this is not a general moral maxim. It is the prologue to David&rsquo;s own experience: he is now the poor one who needs to be considered, laid low by illness while his enemies plot against him and even a trusted friend betrays him." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Matthew Henry opens his commentary on this psalm by noting the close structural symmetry with Psalm 1. Book I begins with &lsquo;Blessed is the man who walks not in the counsel of the wicked&rsquo; (1:1) and closes with &lsquo;Blessed is the one who considers the poor&rsquo; (41:1). The two beatitudes frame the entire collection: blessedness begins with God&rsquo;s word (Psalm 1) and is embodied in care for the vulnerable (Psalm 41). This is not accidental but theological: genuine knowledge of God produces compassion toward the poor." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm&rsquo;s most striking feature is verse 9: &ldquo;Even my close friend in whom I trusted, who ate my bread, has lifted his heel against me.&rdquo; This verse is directly quoted by Jesus in John 13:18, where he applies it to Judas Iscariot: &ldquo;But the Scripture will be fulfilled, &lsquo;He who ate my bread has lifted his heel against me.&rsquo;&rdquo; Calvin observes: &ldquo;The Spirit foresaw in David&rsquo;s betrayal a pattern that would reach its fullest expression in the betrayal of the Son of God. Every time a righteous man is betrayed by a friend, it echoes the greater betrayal at Calvary.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Spurgeon devotes unusual attention to the image of &lsquo;lifting the heel,&rsquo; an idiom drawn from the vocabulary of combat and contempt. To lift the heel against someone who shared your table violates one of the deepest social covenants of the ancient world: the covenant of bread. Table fellowship created bonds of loyalty and protection. To violate it was not merely treachery but sacrilege. Spurgeon: &ldquo;What David suffered from a human traitor, Christ suffered infinitely more completely &mdash; and bore it without a word of retaliation. The psalm ends in praise; the cross ends in resurrection.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Tremper Longman III situates the psalm within the wisdom tradition that understands retributive justice as part of the created order: those who care for the vulnerable receive divine protection in their own vulnerability (vv. 1-3). But the psalm does not present this as an automatic transaction. It is a general principle that the specific case of illness and betrayal immediately complicates. David is the man who considered the poor, yet he is now suffering. This is the honest complexity of wisdom theology: principles are true without being mechanical." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "The doxology of verses 13 &mdash; &ldquo;Blessed be the LORD, the God of Israel, from everlasting to everlasting! Amen and Amen&rdquo; &mdash; is the liturgical close of Book I. It belongs not just to Psalm 41 but to the entire first collection of psalms, functioning as a benediction over all of David&rsquo;s prayers from Psalm 1 through 40. The double &lsquo;Amen&rsquo; is a congregational affirmation: these prayers are true, God is faithful, and the community agrees. Every hard prayer in Book I &mdash; the laments, the imprecations, the meditations on mortality &mdash; is gathered into this final burst of praise." }} />

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
                  title: "Care for the Poor as the Marker of Covenant Faithfulness",
                  body: "The opening beatitude (&ldquo;Blessed is the one who considers the poor&rdquo;) uses a word for &lsquo;considers&rsquo; (sakhal) that means to look at with insight, to give thoughtful attention. This is not impulsive charity but deliberate, attentive care &mdash; seeing the poor person as a full human being rather than a problem to be solved. Calvin: &ldquo;The beatitude is not given to those who merely throw alms to the needy but to those who consider them &mdash; who take the time to understand their situation, to enter into their suffering.&rdquo; In return, five covenant blessings are promised (vv. 2-3): divine preservation, life, blessing on the land, protection from enemies, healing in illness. This is not prosperity theology but covenantal reciprocity: those who reflect God&rsquo;s character toward the vulnerable receive God&rsquo;s protection in their own vulnerability."
                },
                {
                  color: ROSE,
                  title: "Illness as Occasion for Theological Reflection",
                  body: "Verses 4-8 describe David&rsquo;s illness in vivid terms, including the confession: &ldquo;As for me, I said, &lsquo;O LORD, be gracious to me; heal me, for I have sinned against you.&rsquo;&rdquo; The connection between illness and sin is not presented as a universal law (John 9:3 corrects that reading) but as David&rsquo;s personal acknowledgment that his suffering has opened a window of spiritual reflection. His enemies use the illness as an opportunity to gloat and speculate (v. 8: &ldquo;A deadly thing is poured out on him; he will not rise again from where he lies&rdquo;), while David uses it as an occasion to seek God&rsquo;s face. The contrast is sharp: illness reveals character. For the wicked, another person&rsquo;s suffering is an opportunity; for the righteous, one&rsquo;s own suffering is a classroom."
                },
                {
                  color: PURPLE,
                  title: "The Betrayal of Table Fellowship",
                  body: "Verse 9 is the emotional center of the psalm: &ldquo;Even my close friend in whom I trusted, who ate my bread, has lifted his heel against me.&rdquo; The word translated &lsquo;close friend&rsquo; (ish shelomi, literally &lsquo;man of my peace&rsquo;) denotes not just an acquaintance but someone in a covenant relationship of mutual protection. Sharing bread was the ancient seal of such a covenant. To lift the heel against a table companion was therefore a double betrayal &mdash; of personal trust and of covenantal obligation. Jesus&rsquo; quotation of this verse in John 13:18 (at the very table of the Last Supper!) is charged with irony: as Jesus washes the feet of his disciples, he knows that one will lift his heel against him before the night is over. Spurgeon: &ldquo;Judas did not merely betray a teacher; he violated the holiest covenant of the ancient world, at the holiest meal in all of history.&rdquo;"
                },
                {
                  color: GOLD,
                  title: "Confidence in Divine Uprightness",
                  body: "Despite betrayal, illness, and the malice of enemies, verse 12 states: &ldquo;But you have upheld me because of my integrity, and set me in your presence forever.&rdquo; This is a bold claim, and Calvin treats it with characteristic care: David is not claiming sinless perfection (he has confessed sin in v. 4) but integrity of heart &mdash; a fundamental orientation toward God rather than toward self or enemies. The promise of being &lsquo;set in your presence forever&rsquo; is eschatological in resonance: the final vindication is not merely recovery from illness but permanent dwelling in divine presence. Kidner notes that this anticipates the eternal life language of Psalm 23:6 and points beyond the Davidic monarchy to the resurrection hope that the NT makes explicit."
                },
                {
                  color: GREEN,
                  title: "The Doxology That Closes Book I",
                  body: "Verse 13 belongs as much to the editors of the Psalter as to David: &ldquo;Blessed be the LORD, the God of Israel, from everlasting to everlasting! Amen and Amen.&rdquo; This doxology (and its parallels closing Books II-V) reveals something about how the Psalter was assembled: individual psalms were gathered into books, and each book was closed with a formal doxology affirming that the God addressed in the preceding prayers is worthy of eternal praise. Longman: &ldquo;The editors of the Psalter were theologians. By framing the laments and praises of each book with a doxology, they say to the reader: whatever you have prayed, whatever you have cried, God has heard &mdash; and he is worthy of praise from everlasting to everlasting.&rdquo; The double &lsquo;Amen&rsquo; is the congregation&rsquo;s voice joining the poet&rsquo;s."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 41 &mdash; 13 verses including the closing doxology of Book I</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1-3", color: TEAL, heading: "The Beatitude of Compassion", text: "&ldquo;Blessed is the one who considers the poor.&rdquo; The five-fold promise that follows &mdash; preservation, life, blessing on earth, protection from enemies, healing &mdash; is covenantal, not mechanical. Matthew Henry: &ldquo;God rewards mercy with mercy; the man who opens his hand to the poor finds God&rsquo;s hand open to him in his own extremity.&rdquo; The word &lsquo;delivers&rsquo; in verse 1 uses the same root as the Exodus deliverance, hinting that God&rsquo;s rescue of the poor-considerer has the same cosmic weight as the rescue from Egypt." },
                { ref: "v. 4", color: ROSE, heading: "Prayer in Illness and Sin", text: "&ldquo;O LORD, be gracious to me; heal me, for I have sinned against you.&rdquo; David&rsquo;s connection of illness with sin is a personal acknowledgment, not a theological universal. He is not saying that all illness is divine punishment (Jesus rejects this view in John 9:3). He is saying that his own vulnerability has revealed areas of sin that need confession. Calvin: &ldquo;Affliction often functions as God&rsquo;s mirror, showing us what prosperity had obscured.&rdquo; The prayer is for grace (chen), not merit &mdash; the proper posture for anyone standing before the holy God." },
                { ref: "v. 5-8", color: ROSE, heading: "Enemies Who Wait and Gloat", text: "The enemies speak maliciously, wondering when David will die (&lsquo;when will he die and his name perish?&rsquo;), visiting him with false sympathy while their hearts are gathering material for gossip (v. 6). Verse 8 reveals their conclusion: &ldquo;A deadly thing is poured out on him; he will not rise again.&rdquo; This diagnosis may be medical or spiritual, but the enemies deliver it as a verdict of divine abandonment. Spurgeon: &ldquo;The wicked take pleasure in the godly man&rsquo;s fall as evidence that righteousness does not pay. But the psalm is about to subvert their conclusion.&rdquo;" },
                { ref: "v. 9", color: PURPLE, heading: "The Close Friend Who Betrays", text: "This is the verse Jesus quotes in John 13:18, and it is the emotional turning point of the psalm. The phrase &lsquo;lifted his heel&rsquo; may evoke the image of a horse kicking its groom, or of a wrestler twisting to throw an opponent. Either way, the image is of sudden, violent rejection by someone trusted. Kidner: &ldquo;The betrayal by a close friend strikes more deeply than the hostility of an enemy, precisely because trust was the precondition of the wound.&rdquo; In Jesus&rsquo; application, the friend is Judas &mdash; who had shared not mere meals but three years of intimate ministry." },
                { ref: "v. 10", color: GOLD, heading: "Raise Me Up That I May Repay", text: "David asks to be raised up so that he may &lsquo;repay&rsquo; his enemies. This sounds vindictive, but the repayment language should be understood as divine justice delivered through the king: in Psalm 2, the anointed king is the vehicle of God&rsquo;s righteous judgment. Calvin notes: &ldquo;David does not seek personal revenge but the restoration of covenantal order, in which the righteous are upheld and the treacherous receive their due.&rdquo; In Christ&rsquo;s application, the &lsquo;raising up&rsquo; is the resurrection, which is itself the decisive repayment of injustice." },
                { ref: "v. 11-12", color: TEAL, heading: "The Sign of Favor", text: "&ldquo;By this I know that you delight in me: my enemy will not shout in triumph over me.&rdquo; David identifies the preventing of enemy triumph as the visible sign of divine favor. This is not arrogance but faith reading the evidence: if God had abandoned him, his enemies would have succeeded. The preservation itself is evidence of love. Verse 12 then states the ground of this preservation: &ldquo;you have upheld me because of my integrity.&rdquo; Spurgeon: &ldquo;Not perfect holiness, but integrity of heart &mdash; the single eye, the undivided loyalty to God that constitutes the psalmist&rsquo;s essential character.&rdquo;" },
                { ref: "v. 13", color: GOLD, heading: "Doxology Closing Book I", text: "The doxology stands apart from the psalm&rsquo;s content: it is the editorial frame placed by the Psalter&rsquo;s compilers to close Book I. Its brevity belies its weight: &ldquo;Blessed be the LORD, the God of Israel, from everlasting to everlasting! Amen and Amen.&rdquo; Every tear, every complaint, every bewildered &lsquo;How long?&rsquo; in Psalms 1-41 has been heard by this God &mdash; who is not merely the God of the present moment but the God of everlasting to everlasting. The double Amen is the assembly&rsquo;s ratification. Longman: &ldquo;The congregation says Amen: we agree that this God is worthy, even though the road has been hard.&rdquo;" },
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
                  title: "Practical Care for the Poor as Spiritual Practice",
                  body: "The opening beatitude is not abstract: it describes a posture of attentive, thoughtful engagement with those who are vulnerable. The word &lsquo;considers&rsquo; (sakhal) implies wisdom &mdash; not simply giving money but understanding the person&rsquo;s situation. In contemporary terms, this might mean volunteering in ways that involve relationship, not just resource transfer; listening to the stories of the homeless rather than just dropping coins; mentoring someone in financial difficulty rather than simply paying their bill. Psalm 41 suggests that this kind of attentive compassion is itself a spiritual discipline that shapes the character of the giver.",
                  prayer: "Lord, open my eyes to the poor in my community &mdash; not just the obviously destitute, but those whose poverty is hidden: the lonely, the sick, the marginalized. Give me wisdom to consider them well, and let their dignity be reflected in how I engage with them. Amen."
                },
                {
                  color: PURPLE,
                  icon: "&#9826;",
                  title: "When a Trusted Friend Betrays You",
                  body: "Verse 9 is one of the most emotionally specific verses in the Psalter. If you have experienced the betrayal of a close friend &mdash; someone who knew your vulnerabilities and used them against you, who shared your table and then turned against you &mdash; Psalm 41 was written for you. It does not promise that God will instantly restore the relationship or bring swift justice. It does promise that God sees the betrayal (v. 11: &lsquo;my enemy will not shout in triumph over me&rsquo;) and that the final word belongs to him, not to the traitor. Bring your specific pain into this psalm; let David&rsquo;s words be yours.",
                  prayer: "Father, you know the name of the person who betrayed me and the weight of what I trusted them with. I bring this wound to you. Help me to grieve it honestly without becoming bitter. Vindicate your name in my situation. And give me the grace &mdash; in your time, not mine &mdash; to forgive. Amen."
                },
                {
                  color: ROSE,
                  icon: "&#9654;",
                  title: "Illness as Spiritual Classroom",
                  body: "David&rsquo;s response to illness in verse 4 is not stoic endurance but honest prayer: &ldquo;Heal me, for I have sinned against you.&rdquo; He does not assume a direct causal link between his specific sin and his specific illness (Jesus corrects that assumption in John 9). But he does use the vulnerability of illness to open a window of spiritual self-examination. Are there areas of sin that prosperity or busyness had obscured? Illness, loss, and limitation often function as God&rsquo;s reset mechanism &mdash; not punishment, but the gift of enforced stillness. If you are sick or limited right now, consider asking not only &lsquo;Why is this happening?&rsquo; but &lsquo;What might God be saying?&rsquo;",
                  prayer: "Lord, in this season of weakness, I open myself to what you want to say. I confess that I have not listened carefully in the noise of health and activity. Speak now. Heal me of what needs healing &mdash; body, soul, and whatever sin has gone unconfessed. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9733;",
                  title: "Adding Your Amen to the Great Doxology",
                  body: "The double &lsquo;Amen&rsquo; of verse 13 is a congregational act: the individual&rsquo;s prayer is ratified by the community. There is something deeply important about this communal dimension of worship. The psalms were not written primarily as private devotional texts but as liturgy for the gathered assembly. Your grief, your praise, your bewilderment &mdash; all of it belongs in the company of other believers who are also crying, also praising, also waiting. If you have been processing spiritual struggle in isolation, the doxology of Psalm 41 invites you back into community. Find people who can say Amen with you.",
                  prayer: "Blessed be the LORD, the God of Israel, from everlasting to everlasting. Amen and Amen. Lord, let this be my voice too &mdash; not a forced optimism, but a hard-won, honest affirmation that you are worthy of praise, in sickness and in health, in betrayal and in restoration, now and forever. Amen."
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

              <div style={{ background: `linear-gradient(135deg, rgba(13,148,136,0.08), rgba(217,119,6,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>Key Verse to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;Blessed is the one who considers the poor! In the day of trouble the LORD delivers him.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 41:1 &mdash; opening beatitude of the final psalm in Book I</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
