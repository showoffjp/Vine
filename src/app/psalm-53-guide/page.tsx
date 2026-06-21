"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const tabs = ["Overview", "Themes", "Verse by Verse", "Application"];

const videos = [
  { videoId: "GHE5G-Vej8s", title: "Psalm 53 -- The Fool Says There Is No God" },
  { videoId: "vBgUThnoaXc", title: "Total Depravity and Romans 3 Explained" },
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

export default function Psalm53Page() {
  const [tab, setTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "var(--font-jost, sans-serif)", paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: "linear-gradient(135deg, #080910 0%, #0e111c 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: TEAL, fontSize: "0.78rem" }}>Psalm 53</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(13,148,136,0.12)", border: `1px solid rgba(13,148,136,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TEAL, marginBottom: "1rem" }}>Davidic Maschil &mdash; Twin of Psalm 14</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 53: The Fool Says in<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>His Heart, There Is No God</em>
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 1.5rem" }}>
            The Elohistic twin of Psalm 14 &mdash; a sobering diagnosis of universal human corruption, the practical atheism of the heart, and the longing for salvation to come out of Zion.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[["Author", "David"], ["Book", "Book II (Ps 42-72)"], ["Twin Psalm", "Psalm 14"], ["NT Ref", "Romans 3:10-12"]].map(([k, v]) => (
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
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "2rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "1.5rem" }}>Overview: The Diagnosis of the Human Heart</h2>
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 53 is one of the most fascinating texts in the Psalter because it is almost identical to Psalm 14. The two psalms are twins, separated by their placement in different collections and by a handful of significant differences. The most consistent difference is the divine name: Psalm 14 uses YHWH (the LORD) four times, while Psalm 53 uses Elohim (God) throughout. This reflects the fact that Psalm 53 belongs to the &lsquo;Elohistic Psalter&rsquo; (Psalms 42-83), a collection that characteristically prefers the generic name Elohim. Why would the same psalm appear twice? Derek Kidner suggests the repetition is deliberate and emphatic: &ldquo;A truth so fundamental to the human condition bears stating twice, and the variations show it being re-applied to new situations.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The psalm&rsquo;s famous opening is one of the most quoted verses in Scripture: &ldquo;The fool says in his heart, &lsquo;There is no God.&rsquo;&rdquo; Calvin is careful to define the &lsquo;fool&rsquo; (nabal) correctly: &ldquo;The Hebrew does not denote intellectual deficiency but moral perversity. The fool is not the man who cannot follow an argument but the man who has corrupted himself and wishes there were no God to call him to account.&rdquo; This is crucial: the atheism the psalm describes is not primarily philosophical but practical and moral. It is the atheism of the heart, not the head &mdash; the desire that God not exist, expressed through a life lived as though he does not." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The phrase &lsquo;in his heart&rsquo; is key. The fool does not necessarily proclaim atheism in the public square; he says it &lsquo;in his heart&rsquo; &mdash; in the seat of will and desire. Matthew Henry comments: &ldquo;Many who would never dare to deny God with their lips deny him every day with their lives. The practical atheist lives as if there were no God to obey, no judgment to face, no reckoning to come. This is the atheism that corrupts conduct.&rdquo; The connection between the denial of God and the corruption of behavior (v. 1b: &lsquo;they are corrupt, doing abominable iniquity&rsquo;) is the central argument of the psalm." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Verses 2-3 present God&rsquo;s own investigation: &ldquo;God looks down from heaven on the children of man to see if there are any who understand, who seek after God. They have all fallen away; together they have become corrupt; there is none who does good, not even one.&rdquo; This is a divine survey of humanity, and the verdict is universal corruption. Spurgeon notes the thoroughness of the indictment: &ldquo;Not one. The search is exhaustive, conducted by the all-seeing eye of God himself, and it turns up no exceptions. This is the doctrine theologians call total depravity &mdash; not that every person is as bad as they could be, but that no part of human nature is untouched by sin, and that none, left to themselves, seeks God.&rdquo;" }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "The apostle Paul makes Psalm 53 (with its twin, Psalm 14) the centerpiece of his argument for universal sinfulness in Romans 3:10-12: &ldquo;None is righteous, no, not one; no one understands; no one seeks for God. All have turned aside; together they have become worthless; no one does good, not even one.&rdquo; This direct quotation makes Psalm 53 foundational to the NT doctrine of justification: because all have sinned and fall short (Romans 3:23), salvation cannot be earned but must be received as a gift through faith in Christ. The psalm sets up the human problem to which the gospel is the only solution." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "Yet the psalm does not end in despair. Its final verse turns to hope: &ldquo;Oh, that salvation for Israel would come out of Zion! When God restores the fortunes of his people, let Jacob rejoice, let Israel be glad&rdquo; (v. 6). Calvin: &ldquo;Having shown the universal corruption of the human race, the psalmist lifts his eyes to the only possible remedy: a salvation that comes not from within humanity but from God&rsquo;s holy mountain.&rdquo; For the Christian reader, this salvation from Zion is fulfilled in Christ, who came out of Israel to save not only Israel but the world." }} />
            <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "2rem" }} dangerouslySetInnerHTML={{ __html: "Apologetically, Psalm 53 offers a profound account of the roots of unbelief. It locates atheism not merely in the intellect but in the will &mdash; in the heart&rsquo;s desire to escape accountability. This insight anticipates modern observations (from thinkers as varied as Pascal, Dostoevsky, and Thomas Nagel, who candidly admitted &lsquo;I want atheism to be true&rsquo;) that the rejection of God is rarely a purely rational conclusion and often involves the will&rsquo;s preference for autonomy. The psalm does not insult the unbeliever&rsquo;s intelligence; it diagnoses the deeper moral and volitional dimension of unbelief, while holding out the hope of salvation from Zion for all." }} />

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
                  title: "Practical Atheism: Unbelief of the Heart",
                  body: "The opening verse locates the denial of God not in the mind but in the heart: &ldquo;The fool says in his heart, &lsquo;There is no God.&rsquo;&rdquo; This is a profound insight into the nature of unbelief. The Hebrew &lsquo;nabal&rsquo; (fool) describes moral corruption, not intellectual limitation. The fool may be highly intelligent; his foolishness lies in living as though God does not exist or will not judge. Calvin insists this is the most common form of atheism: &ldquo;Few openly deny God with their mouths, but multitudes deny him with their lives, living as though heaven were empty and conscience had no judge.&rdquo; This theme exposes a deception more subtle than philosophical atheism: the believer who professes God on Sunday but lives Monday through Saturday as a practical atheist, making decisions as if God were not watching. The psalm forces the question: do I live as though God is real?"
                },
                {
                  color: ROSE,
                  title: "The Link Between Denying God and Corruption",
                  body: "The psalm presents a direct causal chain: denial of God leads to moral corruption. &ldquo;They are corrupt, doing abominable iniquity; there is none who does good&rdquo; (v. 1b). This is not to say that every atheist is a monster, but to identify the logic: if there is no God, there is no ultimate accountability, no transcendent moral law, no final judgment. Dostoevsky famously distilled this in &lsquo;The Brothers Karamazov&rsquo;: &lsquo;If God does not exist, everything is permitted.&rsquo; The psalm anticipates this insight by three thousand years. Longman notes that the corruption described is comprehensive &mdash; it touches understanding (no one understands), desire (no one seeks God), and conduct (no one does good). When the foundation of accountability to God is removed, the whole structure of moral behavior is destabilized. This theme is central to Christian apologetics: the moral argument for God&rsquo;s existence rests precisely on the recognition that objective moral obligations require a transcendent ground."
                },
                {
                  color: PURPLE,
                  title: "Total Depravity: None Who Seeks God",
                  body: "Verses 2-3 record God&rsquo;s own exhaustive survey of humanity: &ldquo;God looks down from heaven on the children of man to see if there are any who understand, who seek after God. They have all fallen away; together they have become corrupt; there is none who does good, not even one.&rdquo; This is the scriptural foundation of the doctrine of total depravity. Spurgeon is careful to define it: &ldquo;The doctrine does not teach that men are as wicked as they can possibly be, but that sin has so infected every faculty &mdash; mind, will, affections &mdash; that no one, by their own unaided nature, seeks God.&rdquo; The emphatic &lsquo;not even one&rsquo; (repeated by Paul in Romans 3:12) closes every loophole. This theme is humbling but liberating: it destroys all grounds for self-righteousness and establishes the necessity of grace. If none seeks God, then any who do come to God do so because God first sought them (cf. John 6:44; Romans 3:11)."
                },
                {
                  color: GOLD,
                  title: "The Terror and Folly of the Wicked",
                  body: "Verse 5 differs notably from its twin in Psalm 14 and introduces a distinct note: &ldquo;There they are, in great terror, where there is no terror! For God scatters the bones of him who encamps against you; you put them to shame, for God has rejected them.&rdquo; The wicked are gripped by a groundless terror &mdash; &lsquo;where there is no terror.&rsquo; Kidner suggests this captures the irrational fear that haunts those who have denied God: having banished the legitimate fear of the LORD, they become prey to a thousand illegitimate fears. The one who refuses to fear God rightly ends up fearing everything else. There is a deep psychological truth here: the practical atheist, having rejected the secure foundation of trust in God, lives in a universe of unmanaged anxieties. Meanwhile, those who &lsquo;encamp against&rsquo; God&rsquo;s people are scattered, their schemes overturned. The apparent strength of the godless is revealed as hollow."
                },
                {
                  color: GREEN,
                  title: "Salvation Comes Out of Zion",
                  body: "The psalm refuses to end in the darkness of universal corruption. Its final verse is a cry of hope: &ldquo;Oh, that salvation for Israel would come out of Zion! When God restores the fortunes of his people, let Jacob rejoice, let Israel be glad&rdquo; (v. 6). The remedy for the human condition does not lie within humanity &mdash; the survey of verses 2-3 has ruled that out &mdash; but comes from outside, from Zion, the dwelling place of God. Calvin: &ldquo;The salvation longed for here is not a human achievement but a divine intervention, descending from God&rsquo;s holy mountain.&rdquo; For the Christian, this longing is answered in the incarnation: the Savior came out of Zion, born of Israel, to accomplish the salvation that no human effort could achieve. The psalm that begins with the bleakest diagnosis ends with the brightest hope &mdash; not a hope in human improvement but in the salvation of God."
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
            <p style={{ color: MUTED, marginBottom: "2rem", fontSize: "0.9rem" }}>Psalm 53 &mdash; 6 verses, the Elohistic twin of Psalm 14</p>

            <div style={{ background: "rgba(13,148,136,0.06)", border: `1px solid rgba(13,148,136,0.2)`, borderRadius: 10, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "<strong style=\"color:" + TEAL + "\">Note:</strong> Psalm 53 is nearly identical to Psalm 14. The chief difference is the divine name (Elohim throughout, vs. YHWH in Psalm 14), reflecting its place in the Elohistic Psalter. Verse 5 also differs notably, sharpening the description of the terror and scattering of the wicked. The repetition emphasizes how fundamental this diagnosis of the human heart is to biblical theology." }} />
            </div>

            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { ref: "v. 1a", color: TEAL, heading: "The Fool's Inner Denial", text: "&ldquo;The fool says in his heart, &lsquo;There is no God.&rsquo;&rdquo; The &lsquo;fool&rsquo; (nabal) is morally, not intellectually, deficient. The denial happens &lsquo;in his heart&rsquo; &mdash; the seat of will and desire &mdash; not necessarily on his lips. Calvin: &ldquo;He does not reason himself into atheism; he wishes himself into it, because the existence of God is inconvenient to a corrupt life.&rdquo; This is practical atheism: living as if God does not exist, regardless of what one professes." },
                { ref: "v. 1b", color: ROSE, heading: "Corrupt and Doing Abominable Iniquity", text: "&ldquo;They are corrupt, doing abominable iniquity; there is none who does good.&rdquo; The denial of God in the heart issues in corruption of life. The logic is inexorable: remove accountability to God and the moral structure collapses. Matthew Henry: &ldquo;The practical denial of God is the parent of all wickedness; where there is no fear of God before the eyes, there is no restraint upon the heart.&rdquo; The phrase &lsquo;there is none who does good&rsquo; anticipates the universal verdict of the next verses." },
                { ref: "v. 2", color: PURPLE, heading: "God Looks Down From Heaven", text: "&ldquo;God looks down from heaven on the children of man to see if there are any who understand, who seek after God.&rdquo; The image recalls God&rsquo;s investigation before the Flood (Genesis 6:5) and before Babel (Genesis 11:5). The all-seeing God conducts an exhaustive survey, looking for any who genuinely seek him. The two marks he searches for are understanding (true wisdom, which begins with the fear of the LORD) and seeking God. Spurgeon: &ldquo;The search is made by infinite eyes that cannot be deceived; whatever they find will be the unvarnished truth about humanity.&rdquo;" },
                { ref: "v. 3", color: PURPLE, heading: "Not Even One", text: "&ldquo;They have all fallen away; together they have become corrupt; there is none who does good, not even one.&rdquo; The verdict of the divine survey is universal corruption. The threefold description &mdash; fallen away, corrupt, none doing good &mdash; closes every exception. Paul quotes this verse verbatim in Romans 3:12 to establish that all, Jew and Gentile alike, are under sin. Kidner: &ldquo;This is the bedrock of the gospel&rsquo;s necessity. If even one person could seek God and do good unaided, grace would be optional. But there is none, not even one.&rdquo;" },
                { ref: "v. 4", color: GOLD, heading: "Have They No Knowledge?", text: "&ldquo;Have those who work evil no knowledge, who eat up my people as they eat bread and do not call upon God?&rdquo; The evildoers consume God&rsquo;s people as casually as eating bread &mdash; treating the oppression of the righteous as a daily routine. Their fundamental failure is that they &lsquo;do not call upon God&rsquo; &mdash; the practical mark of the heart that has denied him. Calvin: &ldquo;The proof that they have banished God from their thoughts is that they never pray; the prayerless life is the atheist&rsquo;s life, whatever the creed professed.&rdquo;" },
                { ref: "v. 5", color: ROSE, heading: "Terror Where There Is No Terror", text: "This verse differs most sharply from Psalm 14. &ldquo;There they are, in great terror, where there is no terror! For God scatters the bones of him who encamps against you; you put them to shame, for God has rejected them.&rdquo; The wicked are seized by groundless panic &mdash; having banished the legitimate fear of God, they are prey to irrational fears. Meanwhile God scatters the bones of those who war against his people. Longman: &ldquo;The man who will not fear God rightly will fear everything else wrongly. Unbelief does not abolish fear; it merely misdirects it.&rdquo;" },
                { ref: "v. 6", color: GREEN, heading: "Salvation Out of Zion", text: "The psalm ends not in despair but in hope: &ldquo;Oh, that salvation for Israel would come out of Zion! When God restores the fortunes of his people, let Jacob rejoice, let Israel be glad.&rdquo; The remedy for universal corruption comes not from within humanity but from God&rsquo;s holy mountain. Calvin: &ldquo;The cure descends from above; Zion is the source of the salvation no human heart could generate.&rdquo; For the Christian, the longing is answered in Christ, who came out of Zion to save. The bleakest diagnosis in the Psalter ends with the brightest gospel hope." },
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
                  title: "Examining Your Own Practical Atheism",
                  body: "Before applying this psalm to the obvious atheist, the believer must apply it to themselves. The psalm describes denying God &lsquo;in the heart&rsquo; &mdash; living as though he does not exist, even while professing faith. Where in your life do you make decisions as a practical atheist? In your finances, do you live as if God owns nothing? In your private moments, do you act as if he is not watching? In your anxieties, do you behave as if he is not in control? The psalm&rsquo;s mirror is uncomfortable but clarifying: the gap between what we profess about God and how we actually live is the measure of our own practical atheism.",
                  prayer: "Lord, expose the practical atheism in my own heart &mdash; the places where I live as though you do not see, do not care, or do not rule. Forgive me for professing faith while acting in unbelief. Make my daily life consistent with my confession that you are real and present. Amen."
                },
                {
                  color: PURPLE,
                  icon: "&#9733;",
                  title: "Embracing the Humbling Truth of Total Depravity",
                  body: "The verdict &lsquo;none who does good, not even one&rsquo; is meant to demolish all self-righteousness. As long as we imagine that we are fundamentally good people who occasionally slip, we will not feel our need for a Savior. Psalm 53, like Romans 3, strips away that illusion. This is not meant to crush you into despair but to drive you to grace. Only when we accept that we cannot save ourselves &mdash; that we do not even seek God unless he first seeks us &mdash; can we receive salvation as the free gift it is. Let the humbling diagnosis of this psalm lead you not to self-loathing but to grateful dependence on Christ.",
                  prayer: "Father, I confess that left to myself, I would not seek you. There is no good in me that earns your favor. I abandon every claim to self-righteousness and cast myself entirely on the salvation that comes from Zion &mdash; from Christ, who sought me when I did not seek him. Thank you for your grace. Amen."
                },
                {
                  color: GREEN,
                  icon: "&#9826;",
                  title: "Longing for Salvation From Outside Ourselves",
                  body: "The psalm&rsquo;s final cry &mdash; &lsquo;Oh, that salvation for Israel would come out of Zion!&rsquo; &mdash; is a longing for rescue from beyond the human race. Every modern scheme of human self-improvement, every utopian project that imagines we can perfect ourselves, founders on the rock of Psalm 53&rsquo;s diagnosis. The good news is that the salvation the psalmist longed for has come: Jesus Christ came out of Zion to do for us what we could never do for ourselves. When you are tempted to despair over the state of the world or the persistence of your own sin, return to this hope: salvation does not depend on human goodness but on the God who acts from his holy mountain.",
                  prayer: "Lord, I have seen the corruption in the world and in my own heart, and I know that no human effort can cure it. I look to you, the salvation that came out of Zion. Thank you that you did not leave us to perish in our sin but sent your Son to save. Let my heart rejoice and be glad in your salvation. Amen."
                },
                {
                  color: GOLD,
                  icon: "&#10022;",
                  title: "Understanding the Roots of Unbelief in Others",
                  body: "Psalm 53 gives us insight into how to engage thoughtfully with those who deny God. The psalm suggests that unbelief is rarely a purely intellectual matter; it often has roots in the will&rsquo;s desire for autonomy and freedom from accountability. This does not mean we should dismiss the genuine questions skeptics raise &mdash; we should engage them honestly and respectfully. But it does mean recognizing that arguments alone rarely change hearts. Pray for the people in your life who deny God, asking that the God who &lsquo;looks down from heaven&rsquo; would open their hearts. Combine clear reasoning with patient love and persistent prayer, knowing that only God can turn a heart toward himself.",
                  prayer: "God who sees every heart, I lift up those in my life who do not know you &mdash; the skeptics, the indifferent, the wounded. You alone can reach what argument cannot. Open their hearts to seek you. Use me as a witness of patient love and clear truth, and do what only you can do. Amen."
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

              <div style={{ background: `linear-gradient(135deg, rgba(13,148,136,0.08), rgba(58,125,86,0.08))`, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem", textAlign: "center", marginTop: "1rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 400, color: "#f2e6c8", marginBottom: "0.75rem" }}>Key Verse to Memorize</h3>
                <p style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.35rem", color: TEXT, lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: "&ldquo;God looks down from heaven on the children of man to see if there are any who understand, who seek after God.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.88rem" }}>Psalm 53:2 &mdash; the divine survey that grounds Romans 3</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
