"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "Gqubm5Mg7Bw", title: "Psalm 50 -- God the Righteous Judge" },
  { videoId: "j9phNEaPrv8", title: "The Asaph Psalms Explained" },
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

export default function Psalm50Page() {
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
            <span style={{ color: PURPLE, fontSize: "0.78rem" }}>Psalm 50</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(107,79,187,0.12)", border: `1px solid rgba(107,79,187,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PURPLE, marginBottom: "1rem" }}>Psalm of Asaph &mdash; Covenant Lawsuit</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 50: The Mighty One,<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>God the LORD, Speaks</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            The first of the Asaph psalms &mdash; a dramatic courtroom theophany in which God summons heaven and earth, dismisses empty ritual, and demands the true sacrifice of thanksgiving and obedient hearts.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "Asaph"], ["Book", "Book II (Ps 42-72)"], ["Genre", "Covenant Lawsuit"], ["Key Verse", "v. 23"]].map(([k, v]) => (
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: God Convenes His Court</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 50 is the first of twelve psalms attributed to Asaph, the worship leader appointed by David (1 Chronicles 16:5). It opens not with petition or praise but with a thunderous theophany: &ldquo;The Mighty One, God the LORD, speaks and summons the earth from the rising of the sun to its setting.&rdquo; The three divine names stacked in the first line &mdash; El, Elohim, YHWH &mdash; announce a moment of supreme gravity. God is taking the bench. The whole earth is called to the courtroom." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The genre is what scholars call a &lsquo;covenant lawsuit&rsquo; (Hebrew: rib) &mdash; the same form found in the prophets (Isaiah 1, Micah 6), in which God brings legal charges against his covenant people. Derek Kidner notes that the psalm divides into three movements: the divine appearing (vv. 1-6), the indictment of empty ritualism (vv. 7-15), and the indictment of hypocritical wickedness (vv. 16-21), closing with a verdict and an invitation (vv. 22-23). It is a sermon with the force of a subpoena." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The first charge is startling: God rebukes his people not for offering too few sacrifices but for misunderstanding sacrifice altogether. &ldquo;Not for your sacrifices do I rebuke you; your burnt offerings are continually before me. I will not accept a bull from your house... For every beast of the forest is mine, the cattle on a thousand hills&rdquo; (vv. 8-10). Calvin draws out the radical implication: &ldquo;God here overturns the whole superstition that imagines the Deity to be nourished or enriched by our offerings. He owns the cattle on a thousand hills; what could our gifts add to him?&rdquo; This is the same theology Paul preaches at Athens: &ldquo;nor is he served by human hands, as though he needed anything&rdquo; (Acts 17:25)." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "In place of ritual that imagines God as a needy consumer, the psalm calls for a different kind of offering: &ldquo;Offer to God a sacrifice of thanksgiving, and perform your vows to the Most High, and call upon me in the day of trouble; I will deliver you, and you shall glorify me&rdquo; (vv. 14-15). Spurgeon comments: &ldquo;God asks not for the blood of bulls but for the gratitude of hearts. Thanksgiving is the sacrifice that costs nothing in the market but everything in the soul, for it requires a heart truly turned toward God.&rdquo; The true sacrifice is a relationship of dependence, gratitude, and prayer." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The second indictment (vv. 16-21) turns to the wicked who recite God&rsquo;s covenant with their lips while breaking it with their lives &mdash; partnering with thieves, keeping company with adulterers, slandering their own brothers. The most chilling line is verse 21: &ldquo;These things you have done, and I have been silent; you thought that I was one like yourself.&rdquo; Matthew Henry observes: &ldquo;Here is the root of all presumptuous sin: men measure God by themselves, mistaking his patience for approval, his silence for indifference. But the silence is about to end.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Tremper Longman highlights the psalm&rsquo;s prophetic critique of religious formalism as a recurring biblical theme: God consistently prefers obedience to sacrifice (1 Samuel 15:22), mercy to ritual (Hosea 6:6, quoted twice by Jesus in Matthew 9:13 and 12:7), and a broken and contrite heart to burnt offerings (Psalm 51:16-17, the very next psalm). Psalm 50 is not an attack on the sacrificial system God himself instituted, but on the corruption of that system into a transaction that bypasses the heart." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 50 dismantles the caricature of the Old Testament God as a bloodthirsty deity who must be appeased with animal sacrifice. The very heart of the OT sacrificial revelation insists that God needs nothing, that ritual without relationship is worthless, and that what God desires is grateful, obedient hearts. This is the same God revealed in Christ, who came &ldquo;not to be served but to serve, and to give his life as a ransom for many&rdquo; (Mark 10:45). The psalm anticipates the gospel: God does not need our offerings; he provides the offering himself." }} />

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
                  title: "God as Judge of Heaven and Earth",
                  body: "The psalm opens with one of the most majestic theophanies in the Psalter: &ldquo;Our God comes; he does not keep silence; before him is a devouring fire, around him a mighty tempest. He calls to the heavens above and to the earth, that he may judge his people&rdquo; (vv. 3-4). The imagery deliberately recalls Sinai (Exodus 19), where God descended in fire and storm to establish the covenant. Now he comes in the same power to enforce it. Calvin notes that the summoning of heaven and earth as witnesses follows the pattern of Deuteronomy 32:1, where Moses calls heaven and earth to witness against Israel. This is courtroom drama on a cosmic scale: the Judge of all the earth convenes his tribunal, and no one can refuse the summons. The theme establishes God&rsquo;s absolute right to evaluate the worship and conduct of his people &mdash; a right grounded in his role as Creator and covenant Lord."
                },
                {
                  color: GOLD,
                  title: "God Needs Nothing From Us",
                  body: "The first indictment overturns a pagan assumption that had infected Israel&rsquo;s worship: the idea that sacrifices feed or enrich the deity. God&rsquo;s response is withering in its logic: &ldquo;If I were hungry, I would not tell you, for the world and its fullness are mine. Do I eat the flesh of bulls or drink the blood of goats?&rdquo; (vv. 12-13). The pagan gods of the ancient Near East were imagined to depend on human offerings for sustenance; the true God owns &ldquo;the cattle on a thousand hills&rdquo; (v. 10) and the birds of the mountains. He cannot be bribed, fed, or put in anyone&rsquo;s debt. Spurgeon: &ldquo;The Lord is not a pauper to be relieved by our alms, nor a creditor to be paid by our gifts. He is the owner of all; we give him only what is already his.&rdquo; This theme is foundational for a right understanding of worship: we do not give to God to meet his needs but to express our gratitude and dependence. It also anticipates the gospel logic that salvation cannot be earned or purchased &mdash; God supplies what we cannot."
                },
                {
                  color: TEAL,
                  title: "Thanksgiving as the True Sacrifice",
                  body: "In place of mechanical ritual, God specifies what he actually desires: &ldquo;Offer to God a sacrifice of thanksgiving, and perform your vows to the Most High&rdquo; (v. 14). The sacrifice of thanksgiving (todah) was a specific category of offering, but here it stands for the whole posture of grateful worship. Verse 23 returns to it as the climax: &ldquo;The one who offers thanksgiving as his sacrifice glorifies me.&rdquo; The point is not that God abolishes sacrifice but that he reveals its true meaning: an external offering that does not flow from a grateful, dependent heart is worthless. Kidner: &ldquo;The thanksgiving God seeks is not a substitute for sacrifice but the soul of it.&rdquo; This theme runs straight to Hebrews 13:15, which calls Christians to &ldquo;continually offer up a sacrifice of praise to God, that is, the fruit of lips that acknowledge his name.&rdquo; The new covenant fulfills, rather than abolishes, the demand of Psalm 50."
                },
                {
                  color: ROSE,
                  title: "The Hypocrisy of Reciting the Covenant",
                  body: "The second indictment (vv. 16-21) targets a different sin: not empty ritual but outright hypocrisy. &ldquo;What right have you to recite my statutes or take my covenant on your lips? For you hate discipline, and you cast my words behind you&rdquo; (vv. 16-17). These are people who know the Scripture, quote it fluently, and consider themselves the in-group of God&rsquo;s people &mdash; yet they partner with thieves, run with adulterers, and slander their own brothers. The combination of orthodox speech and corrupt life is the precise definition of hypocrisy that Jesus condemned in the Pharisees (Matthew 23). Calvin observes that this sin is especially dangerous because it cloaks itself in religion: &ldquo;The thief who professes no faith is less offensive to God than the covenant-member who recites the law while breaking it.&rdquo; The theme is a sobering warning to every religious community: familiarity with God&rsquo;s words is not the same as obedience to them."
                },
                {
                  color: GREEN,
                  title: "Mistaking God&rsquo;s Patience for Approval",
                  body: "Verse 21 contains the psalm&rsquo;s most psychologically penetrating insight: &ldquo;These things you have done, and I have been silent; you thought that I was one like yourself. But now I rebuke you and lay the charge before you.&rdquo; The wicked had interpreted God&rsquo;s delayed judgment as divine indifference or even agreement. They had remade God in their own image &mdash; tolerant of the sins they themselves enjoyed. Matthew Henry: &ldquo;The patience of God is the most abused of all his attributes. Men presume upon it, mistaking the reprieve for a pardon.&rdquo; Paul makes the same point in Romans 2:4: &ldquo;Do you presume on the riches of his kindness and forbearance and patience, not knowing that God&rsquo;s kindness is meant to lead you to repentance?&rdquo; The theme warns against the deadly logic that interprets unpunished sin as permitted sin. God&rsquo;s silence is mercy offering time to repent &mdash; not approval, and not forever."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 50 &mdash; 23 verses: theophany, two indictments, and verdict</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1-3", color: PURPLE, heading: "The Mighty One Comes", text: "Three divine names open the psalm: El, Elohim, YHWH &mdash; an accumulation of majesty. God summons the earth from sunrise to sunset and shines forth from Zion, &lsquo;the perfection of beauty.&rsquo; Verse 3 invokes Sinai imagery: &ldquo;before him is a devouring fire, around him a mighty tempest.&rdquo; Calvin: &ldquo;He who came in fire to give the law now comes in fire to judge those who have broken it.&rdquo; The God who is normally patient and silent (&lsquo;he does not keep silence&rsquo;) is now breaking that silence to render judgment." },
                { ref: "v. 4-6", color: PURPLE, heading: "Heaven and Earth Summoned as Witnesses", text: "God calls the heavens above and the earth to witness the judgment of his people. Verse 5: &ldquo;Gather to me my faithful ones, who made a covenant with me by sacrifice!&rdquo; The covenant people are assembled for evaluation. Verse 6 affirms the integrity of the Judge: &ldquo;The heavens declare his righteousness, for God himself is judge!&rdquo; This is crucial: the One who judges is himself perfectly righteous, so the verdict will be just. Kidner notes the courtroom is now fully convened, with cosmic witnesses and a flawless Judge." },
                { ref: "v. 7-8", color: GOLD, heading: "I Will Testify Against You", text: "&ldquo;Hear, O my people, and I will speak; O Israel, I will testify against you. I am God, your God.&rdquo; God is simultaneously prosecutor and judge, but his opening word is reassurance of relationship: &lsquo;I am God, your God.&rsquo; The rebuke comes from within the covenant, not from a stranger. Verse 8 clarifies that the issue is not the quantity of sacrifices &mdash; those are continually offered &mdash; but their meaning. Spurgeon: &ldquo;God does not complain that the altar is cold but that the heart is.&rdquo;" },
                { ref: "v. 9-13", color: GOLD, heading: "The Cattle on a Thousand Hills", text: "The heart of the first indictment: God needs nothing. &ldquo;For every beast of the forest is mine, the cattle on a thousand hills... If I were hungry, I would not tell you, for the world and its fullness are mine.&rdquo; The pagan notion of feeding the gods is demolished. Verse 13&rsquo;s rhetorical question &mdash; &ldquo;Do I eat the flesh of bulls or drink the blood of goats?&rdquo; &mdash; exposes the absurdity of imagining the Creator as a consumer of creaturely offerings. This is the theological foundation of Acts 17:25: God &lsquo;is not served by human hands, as though he needed anything.&rsquo;" },
                { ref: "v. 14-15", color: TEAL, heading: "Offer Thanksgiving and Call on Me", text: "The positive command at the center of the psalm: &ldquo;Offer to God a sacrifice of thanksgiving, and perform your vows to the Most High, and call upon me in the day of trouble; I will deliver you, and you shall glorify me.&rdquo; Here is true worship in three movements: gratitude (thanksgiving), integrity (keeping vows), and dependence (calling on God in trouble). The promise &lsquo;I will deliver you&rsquo; reveals the relational heart God desires. Matthew Henry: &ldquo;God would rather hear the cry of a needy heart than smell the smoke of a thousand altars.&rdquo;" },
                { ref: "v. 16-17", color: ROSE, heading: "What Right Have You?", text: "The second indictment begins, addressed to the wicked: &ldquo;What right have you to recite my statutes or take my covenant on your lips? For you hate discipline, and you cast my words behind you.&rdquo; These are people fluent in religious language but contemptuous of obedience. To &lsquo;cast words behind you&rsquo; is to treat God&rsquo;s instruction as garbage thrown over the shoulder. Calvin: &ldquo;It is a greater profanation to recite the law with the mouth while trampling it with the feet than never to have known it at all.&rdquo;" },
                { ref: "v. 18-20", color: ROSE, heading: "The Catalog of Hypocrisy", text: "The specific charges: partnering with thieves (v. 18), keeping company with adulterers, giving the mouth to evil and the tongue to deceit (v. 19), and slandering one&rsquo;s own brother (v. 20). The progression moves from association with sinners to active participation to the corruption of speech to the betrayal of family. This is the anatomy of a religious life rotted from within. Longman notes that these sins span the second table of the Decalogue (theft, adultery, false witness) &mdash; the very commandments these covenant-reciters claimed to uphold." },
                { ref: "v. 21", color: PURPLE, heading: "You Thought I Was Like You", text: "The pivot of the entire psalm: &ldquo;These things you have done, and I have been silent; you thought that I was one like yourself. But now I rebuke you and lay the charge before you.&rdquo; The wicked mistook God&rsquo;s patience for approval and remade him in their own corrupt image. Now the silence ends. Spurgeon: &ldquo;The most blasphemous idolatry is not the worship of a golden calf but the reduction of the living God to a mirror of our own moral laxity.&rdquo; The verse is a thunderclap against the comfortable assumption that God shares our tolerance for the sins we love." },
                { ref: "v. 22-23", color: GREEN, heading: "The Verdict and the Invitation", text: "The psalm closes with both warning and hope. Verse 22: &ldquo;Mark this, then, you who forget God, lest I tear you apart, and there be none to deliver.&rdquo; But verse 23 ends on grace: &ldquo;The one who offers thanksgiving as his sacrifice glorifies me; to one who orders his way rightly I will show the salvation of God.&rdquo; The door of repentance remains open. Kidner: &ldquo;Even the lawsuit ends not in condemnation but in an offer: thanksgiving and right living are the path back into fellowship.&rdquo; The final word is &lsquo;the salvation of God&rsquo; &mdash; the ultimate goal toward which the whole psalm has been driving." },
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
                  title: "Cultivating the Sacrifice of Thanksgiving",
                  body: "Psalm 50 reveals that the worship God most desires is not elaborate ritual but genuine gratitude. This is enormously practical. The discipline of thanksgiving &mdash; deliberately naming the good gifts of God each day &mdash; is the sacrifice that pleases him. Unlike the wicked who imagined they could satisfy God with external offerings while their hearts were far from him, the believer is called to a worship that begins in the heart and overflows in grateful praise. Consider keeping a daily gratitude practice, naming specific things for which you thank God. This is not a technique for feeling better; it is the very sacrifice Psalm 50 commands.",
                  prayer: "Lord, you own the cattle on a thousand hills; you need nothing from me. Yet you desire my thanksgiving. Teach me to offer the sacrifice of grateful praise, naming your goodness daily. Let my worship flow from a heart truly turned toward you, not from empty ritual. Amen."
                },
                {
                  color: ROSE,
                  icon: "&#9826;",
                  title: "Examining the Gap Between Words and Life",
                  body: "The second indictment of Psalm 50 is aimed precisely at religious people &mdash; those who recite the covenant, quote Scripture, and consider themselves insiders, yet whose lives contradict their words. This is the most uncomfortable mirror in the psalm, and every churchgoer should look into it. Is there a gap between the truth you profess on Sunday and the way you actually live? Do you quote God&rsquo;s words while casting them behind you in practice? The psalm does not call for despair but for honest self-examination and repentance. The God who sees the gap is also the God who offers the way back: thanksgiving and ordered living.",
                  prayer: "Searching God, expose the gap between what I profess and how I live. I confess that I have sometimes recited your words with my lips while ignoring them in my conduct. Forgive my hypocrisy. Align my life with my confession, that my worship may be true. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#9733;",
                  title: "Refusing to Remake God in Your Image",
                  body: "Verse 21 &mdash; &lsquo;you thought that I was one like yourself&rsquo; &mdash; is one of the most penetrating diagnoses of sin in Scripture. We are perpetually tempted to imagine a God who shares our tolerance for the particular sins we enjoy. We mistake his patience for approval. The antidote is to let God define himself through his Word rather than constructing a deity in our own image. When you find yourself assuming that God is &lsquo;okay&rsquo; with a sin you are reluctant to release, Psalm 50 is the corrective: the silence of God is not approval. He is calling you to repentance while there is still time.",
                  prayer: "Holy God, forgive me for the times I have remade you in my own image, imagining you share my tolerance for sins I love. You are not like me. Your patience is mercy, not approval. Help me to see my sin as you see it, and to repent before your silence ends. Amen."
                },
                {
                  color: PURPLE,
                  icon: "&#10022;",
                  title: "Calling on God in the Day of Trouble",
                  body: "Tucked into the center of this courtroom drama is a tender promise: &ldquo;Call upon me in the day of trouble; I will deliver you, and you shall glorify me&rdquo; (v. 15). This is the relationship God actually wants &mdash; not transactional ritual but genuine dependence. When trouble comes, the temptation is either to handle it alone or to try to bargain with God. The psalm invites a third way: simply call on him. Dependence in the day of trouble, followed by glory given to God for deliverance, is the rhythm of the relationship he desires. What trouble do you need to bring to him today, not as a bargaining chip but as a child calling on a Father?",
                  prayer: "Father, you have invited me to call on you in the day of trouble, promising deliverance. I bring my troubles to you now &mdash; not to bargain, but to depend. Deliver me according to your wisdom, and I will glorify you. Teach me that this dependence is the worship you desire. Amen."
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
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;The one who offers thanksgiving as his sacrifice glorifies me; to one who orders his way rightly I will show the salvation of God.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 50:23 &mdash; the verdict that ends in the offer of salvation</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
