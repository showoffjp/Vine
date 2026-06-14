"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Have Mercy on Me O God",
  "Against You Have I Sinned",
  "Create in Me a Clean Heart",
  "Restore the Joy of Salvation",
  "The Sacrifice of a Broken Spirit",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Have Mercy on Me O God",
    heading: "Have Mercy on Me O God",
    reference: "Psalm 51:1&ndash;2",
    paragraphs: [
      "Psalm 51 carries one of the most specific superscriptions in the Psalter: &ldquo;A Psalm of David, when Nathan the prophet went to him, after he had gone in to Bathsheba.&rdquo; Behind these words lies the darkest chapter of David&rsquo;s life &mdash; his adultery with Bathsheba, his murder of her husband Uriah to cover the sin, and then the long silence of an unrepentant heart. The prophet Nathan came to David with a parable, and when David condemned the rich man who stole the poor man&rsquo;s lamb, Nathan thundered, &ldquo;You are the man&rdquo; (2 Samuel 12:7). Psalm 51 is what poured out of David when his guilt was finally exposed.",
      "It begins not with excuse but with appeal: &ldquo;Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions&rdquo; (51:1). David does not bargain or minimize. He throws himself entirely on the character of God &mdash; on God&rsquo;s steadfast love (his covenant faithfulness, his hesed) and his abundant mercy. The only ground of hope a guilty man has is the kind of God to whom he prays.",
      "Notice the verb: &ldquo;blot out.&rdquo; David pictures his transgressions as a written record, a debt entered against his name, and he begs God to wipe the page clean. It is the first of three vivid images in these opening verses. Sin is a stain to be washed, a record to be erased, a defilement to be cleansed. David feels the full weight of what he has done, and he reaches for every metaphor of removal he can find.",
      "&ldquo;Wash me thoroughly from my iniquity, and cleanse me from my sin&rdquo; (51:2). The word for washing is the word for scrubbing soiled garments &mdash; a deep, repeated, laundering cleansing. David does not ask for a surface rinse; he asks to be made thoroughly clean, scoured to the core. The sin clings to him like filth ground into cloth, and only God can wash it out.",
      "Three different words for sin appear in these verses &mdash; transgressions (rebellion, crossing the line), iniquity (crookedness, the bent of a twisted heart), and sin (missing the mark, falling short). David sees his failure from every angle at once. This is no vague sense of regret but a clear-eyed reckoning with the manifold reality of his guilt. True confession does not flinch from naming the thing for what it is.",
      "For anyone crushed by the memory of grievous sin, this opening is a doorway. It teaches us not to come to God with our resume of good intentions, but to come pleading his mercy and steadfast love. The way back is never through self-justification; it is through the open confession of a sinner who knows he has nothing to offer but his need, and who trusts the abundant mercy of God to meet it.",
    ],
  },
  {
    id: "Against You Have I Sinned",
    heading: "Against You Have I Sinned",
    reference: "Psalm 51:3&ndash;6",
    paragraphs: [
      "&ldquo;For I know my transgressions, and my sin is ever before me&rdquo; (51:3). The first mark of real repentance is honesty. David no longer hides; he acknowledges. For months he had buried his guilt, and the burying had nearly destroyed him &mdash; elsewhere he writes of his bones wasting away through his groaning all day long (Psalm 32:3). Now the sin is &ldquo;ever before me,&rdquo; held up to the light at last. The cover-up is over.",
      "Then comes one of the most arresting confessions in all of Scripture: &ldquo;Against you, you only, have I sinned and done what is evil in your sight, so that you may be justified in your words and blameless in your judgment&rdquo; (51:4). David had sinned grievously against Bathsheba, against Uriah, against his family, against the whole nation. How can he say &ldquo;against you, you only&rdquo;? Because he sees that every sin, whatever its earthly victims, is finally an offense against God &mdash; a breaking of his law, a contempt of his holiness, a wound to the One whose image we bear.",
      "This is not David excusing the harm he did to people; it is David seeing the deepest dimension of all sin. To wrong a person is to wrong the God who made that person and forbade the wrong. Until we feel that our sin is first and foremost against God, we have not yet understood it. And David adds that God is fully right to judge him &mdash; he justifies God even as he confesses himself condemned.",
      "Then David traces his sin back to its very root: &ldquo;Behold, I was brought forth in iniquity, and in sin did my mother conceive me&rdquo; (51:5). This is not an attempt to shift blame onto his birth, as if to say &ldquo;I could not help it.&rdquo; It is a deeper confession still: the problem is not merely the deeds I have done but the nature I have carried from the beginning. David recognizes what theologians call original sin &mdash; that he came into the world already bent away from God, sinful in his very inception.",
      "This is bracing doctrine, but it is also strangely freeing. David is not surprised by the depth of his own corruption, because he understands its source. He is not merely a good man who slipped; he is a sinner by nature who acted out of his nature. And precisely because the disease goes so deep, the cure must come from outside himself &mdash; he cannot reform his way out of what he is.",
      "&ldquo;Behold, you delight in truth in the inward being, and you teach me wisdom in the secret heart&rdquo; (51:6). God is not content with outward correctness; he desires truth in the deepest, hidden places of the soul. David has learned that confession of the lips is not enough &mdash; God works wisdom into the secret heart. The God who exposes our sin at the root is the same God who longs to plant truth and wisdom there in its place.",
    ],
  },
  {
    id: "Create in Me a Clean Heart",
    heading: "Create in Me a Clean Heart",
    reference: "Psalm 51:7&ndash;12",
    paragraphs: [
      "Now David turns from confession to petition, asking for the very cleansing he so desperately needs. &ldquo;Purge me with hyssop, and I shall be clean; wash me, and I shall be whiter than snow&rdquo; (51:7). Hyssop was the small plant used to sprinkle blood and water in the rituals of cleansing &mdash; on the doorposts at the Passover, and on the leper pronounced clean. David reaches for that imagery: only a divinely appointed cleansing can make a man whose sins are scarlet become whiter than snow.",
      "&ldquo;Let me hear joy and gladness; let the bones that you have broken rejoice&rdquo; (51:8). The weight of guilt had been like crushed bones, a deep and aching brokenness. David longs to hear once more the sounds of joy. &ldquo;Hide your face from my sins, and blot out all my iniquities&rdquo; (51:9) &mdash; he asks God to turn his face away from the record of his wrongs, even as he had earlier asked him to blot them out.",
      "Then comes the soaring heart of the psalm: &ldquo;Create in me a clean heart, O God, and renew a right spirit within me&rdquo; (51:10). The verb &ldquo;create&rdquo; is the word used in Genesis 1 for God making the world out of nothing. David knows that no mere cleaning will do; he needs a brand-new heart, a fresh act of divine creation within him. He cannot manufacture purity; he can only ask the Creator to make it. This is the cry of the new birth long before the New Testament names it.",
      "&ldquo;Cast me not away from your presence, and take not your Holy Spirit from me&rdquo; (51:11). David had seen what happened to Saul, from whom the Spirit of the Lord departed. His deepest dread is not punishment but separation &mdash; to be banished from the presence of God and stripped of his Spirit. Of all that sin threatens to cost him, this is what he fears most: the loss of God himself.",
      "&ldquo;Restore to me the joy of your salvation, and uphold me with a willing spirit&rdquo; (51:12). Note carefully: David asks for the restoration of the joy of salvation, not of salvation itself. His sin had not erased his standing as one of God&rsquo;s own, but it had robbed him of all gladness in it. Sin always steals our joy before it steals anything else. David longs to feel again the delight of belonging to God, and to be held up by a spirit now willing and free rather than reluctant and divided.",
      "This is the language of true restoration. David does not ask merely to escape the consequences of his sin; he asks to be remade from the inside &mdash; a clean heart, a right spirit, a willing spirit, the joy of salvation. For everyone weighed down by what they have done, this is the prayer to pray. We cannot create a clean heart in ourselves, but we can ask the God who spoke worlds into being to speak a new heart into us.",
    ],
  },
  {
    id: "Restore the Joy of Salvation",
    heading: "Restore the Joy of Salvation",
    reference: "Psalm 51:13&ndash;17",
    paragraphs: [
      "A forgiven sinner does not stay silent. &ldquo;Then I will teach transgressors your ways, and sinners will return to you&rdquo; (51:13). David sees that his restoration has a purpose beyond himself. The man who has known both the depths of sin and the heights of mercy is uniquely fitted to point other transgressors home. Grace received becomes grace shared; the rescued become rescuers. David&rsquo;s very fall, once forgiven, becomes a testimony that draws sinners back to God.",
      "&ldquo;Deliver me from bloodguiltiness, O God, O God of my salvation, and my tongue will sing aloud of your righteousness&rdquo; (51:14). David names his guilt plainly &mdash; the blood of Uriah was on his hands. He does not soften it. Yet he calls upon the &ldquo;God of my salvation,&rdquo; confident that even bloodguilt can be cleansed by the God who saves. And on the far side of that deliverance he sees not silence but song: a tongue freed to sing aloud of God&rsquo;s righteousness.",
      "&ldquo;O Lord, open my lips, and my mouth will declare your praise&rdquo; (51:15). Guilt had shut David&rsquo;s mouth; only God can open it again. This little verse has become the daily opening words of prayer for countless believers, for it captures a profound truth: even our praise must be given to us. The sinner cannot praise until God unstops the lips that sin had sealed. Forgiveness restores the song.",
      "Then David reflects on what truly pleases God: &ldquo;For you will not delight in sacrifice, or I would give it; you will not be pleased with a burnt offering&rdquo; (51:16). David knew that no amount of ritual could atone for what he had done. He could pile the altar high with bulls and goats, and it would not touch his guilt. The sacrificial system, rightly understood, was never meant to be a transaction that bought off a careless heart.",
      "&ldquo;The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise&rdquo; (51:17). Here David reaches the truth that the whole psalm has been driving toward. What God desires is not the blood of animals offered by a proud man, but the offering of a shattered, humbled, contrite heart. The one sacrifice God will never turn away is the sacrifice of genuine repentance &mdash; a spirit broken over its sin and bowed before his mercy.",
      "This is the gospel hidden in the heart of the Old Testament. God does not despise the broken; he draws near to them. The very brokenness that the world counts as failure is, to God, the doorway of grace. The sinner who comes to him empty-handed, contrite, with nothing to plead but mercy, will never be cast out &mdash; for that broken and contrite heart is the one offering God has promised never to despise.",
    ],
  },
  {
    id: "The Sacrifice of a Broken Spirit",
    heading: "The Sacrifice of a Broken Spirit",
    reference: "Psalm 51:18&ndash;19; The Cross of Christ",
    paragraphs: [
      "The psalm closes by lifting its eyes beyond David himself to the whole people of God: &ldquo;Do good to Zion in your good pleasure; build up the walls of Jerusalem&rdquo; (51:18). David, the king, understands that his personal sin had consequences for the nation he led. A leader&rsquo;s repentance is bound up with the welfare of his people, and so he prays for the flourishing of Zion, that God&rsquo;s favor might rest on the whole city and not be forfeited by the failings of its king.",
      "&ldquo;Then will you delight in right sacrifices, in burnt offerings and whole burnt offerings; then bulls will be offered on your altar&rdquo; (51:19). This is not a contradiction of what David just said about sacrifice. The point is sequence: first the broken heart, then the offerings become acceptable. Worship offered out of a contrite spirit is the worship God delights in. Ritual without repentance is empty; repentance restores worship to its proper meaning.",
      "Psalm 51 has been the prayer of the guilty for three thousand years because it names what every honest soul knows &mdash; the weight of sin, the futility of cover-up, the impossibility of self-cleansing, and the longing to be made new. For all who carry the memory of grievous failure, David shows the way: not to despair, not to excuse, but to confess fully and to cast oneself wholly on the steadfast love of God.",
      "Yet the psalm leaves a question unanswered. David asks God to blot out his transgressions and wash him whiter than snow &mdash; but on what just basis can a holy God forgive a murderer and adulterer? How can guilt truly be removed and not merely overlooked? The Old Testament longs for an answer it cannot fully give, gesturing toward a cleansing that hyssop and bulls could only picture.",
      "The answer is Jesus Christ. At the cross, the broken and contrite heart finds the ground of its forgiveness, for there the sinless Son of God bore the very transgressions David prayed to have blotted out. &ldquo;Though your sins are like scarlet, they shall be as white as snow&rdquo; (Isaiah 1:18) &mdash; and they are made so by the blood of Christ, the true Passover Lamb whom the hyssop foreshadowed. What David asked for, the cross secures.",
      "So Psalm 51 leads us, finally, to Calvary. The clean heart David begged God to create is given through the new birth purchased at the cross. The Holy Spirit he feared to lose is poured out on all who trust the risen Christ. The joy of salvation he longed to recover is restored to every contrite sinner who comes to Jesus. Guilt, shame, and the dread of separation meet their end not in our striving but in the One who was broken so that our broken and contrite hearts might be received and never despised.",
    ],
  },
];

const videoItems = [
  { videoId: "Lb2Cc1nQTHU", title: "BibleProject - Overview - Psalms" },
  { videoId: "iZ0AbZP6Lds", title: "Psalm 51 - Create in Me a Clean Heart Explained" },
  { videoId: "GsyT2Tbf-iY", title: "David, Nathan, and Bathsheba - The Story Behind Psalm 51" },
  { videoId: "fQ3-3OQ3Z9Q", title: "Repentance and Forgiveness - A Study of Psalm 51" },
];

export default function Psalm51GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 51: Create in Me a Clean Heart
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            David&rsquo;s prayer of repentance after Nathan confronted him over Bathsheba &mdash; have mercy on me, O God; against you only have I sinned; create in me a clean heart; restore the joy of your salvation; and the sacrifice of a broken and contrite heart you will not despise.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Psalm 51 through visual teaching on David&rsquo;s repentance, the cry for a clean heart, the story of Nathan and Bathsheba, and the path from guilt and shame to forgiveness and restored joy.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Broken and Contrite Heart</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Psalm 51 is the prayer of every sinner who has fallen and longs to be made new. It refuses both despair and self-justification, casting itself wholly on the steadfast love of God &mdash; and it points beyond itself to the cross of Christ, where the broken and contrite heart finds its cleansing and the joy of salvation is restored to all who come.
          </p>
        </div>
      </main>
    </div>
  );
}
