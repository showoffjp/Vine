"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Wicked Seem to Prosper",
  "The Sanctuary Perspective",
  "Whom Have I But You",
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
    id: "Overview",
    heading: "Overview of Psalm 73",
    reference: "Psalm 73",
    paragraphs: [
      "Psalm 73 is one of the most honest and searching poems in all of Scripture &mdash; a psalm of Asaph that begins with a confession and ends in devotion, but only after passing through a valley of doubt, envy, and near spiritual collapse. It belongs to the third book of the Psalter (Psalms 73&ndash;89) and stands at its very opening, as if to frame what follows with a question that every believer must wrestle with: if God is truly good, why do the wicked prosper and the righteous suffer?",
      "The psalm is unusual in that Asaph gives away his conclusion in the very first verse: &ldquo;Truly God is good to Israel, to those who are pure in heart&rdquo; (v.1). The rest of the psalm is a retrospective account of how he came to believe that again &mdash; because for a time, Asaph had nearly abandoned it. His feet had almost slipped. He had been on the verge of concluding that faithfulness to God was a fool&rsquo;s errand, and that the wicked who lived without reference to God were the truly wise ones.",
      "What rescues Asaph from that ledge is not a philosophical argument or a theological treatise but an encounter &mdash; a moment in the sanctuary of God where his perspective is completely reoriented. In God&rsquo;s presence he sees what he could not see from the outside: the end of the wicked, the emptiness of their apparent security, and above all, the surpassing worth of God himself. The psalm moves from &lsquo;why do the wicked prosper?&rsquo; to &lsquo;whom have I in heaven but you?&rsquo; &mdash; and that is a long and costly journey.",
      "Psalm 73 has been a companion to believers in every generation who have looked at the world and found it bewildering, who have done right and suffered for it, and who have watched the corrupt flourish and wondered whether God notices. It does not minimize the difficulty of the question. Asaph&rsquo;s pain is real, his temptation genuine, his near-fall honestly reported. But it holds out the conviction that the perspective-shift available in God&rsquo;s presence is more than enough &mdash; not because the wicked suddenly begin to suffer, but because God himself is found to be a greater good than anything the prosperous wicked could ever possess.",
      "Structurally the psalm moves in three movements: the problem (vv. 1&ndash;14), the crisis and turning point (vv. 15&ndash;17), and the resolution (vv. 18&ndash;28). The central hinge is verse 17 &mdash; &ldquo;until I went into the sanctuary of God; then I discerned their end.&rdquo; Everything before that word &ldquo;until&rdquo; is the darkness; everything after it is the dawn. The sanctuary does not change Asaph&rsquo;s circumstances, but it changes what he sees, and seeing differently is enough to transform everything.",
    ],
  },
  {
    id: "The Wicked Seem to Prosper",
    heading: "The Wicked Seem to Prosper",
    reference: "Psalm 73:2&ndash;14",
    paragraphs: [
      "Asaph begins his account of what nearly undid him: &ldquo;But as for me, my feet had almost stumbled, my steps had nearly slipped&rdquo; (v.2). This is a remarkable admission from a worship leader in Israel &mdash; an honest confession that he had been on the brink of a spiritual fall, not from outward rebellion but from inward envy and despair. The trigger was clear: &ldquo;I was envious of the arrogant when I saw the prosperity of the wicked&rdquo; (v.3).",
      "What Asaph saw when he looked at the wicked was a life that seemed, on the surface, remarkably comfortable. &ldquo;For they have no pangs until death; their bodies are fat and sleek&rdquo; (v.4). There is no agonizing struggle with mortality, no wasting illness, no visible sign of divine displeasure on their bodies. They are in robust health, conspicuously well-fed, apparently thriving. The very prosperity that should, by Asaph&rsquo;s theology, signal God&rsquo;s blessing seems to rest entirely on people who want nothing to do with God.",
      "They are also remarkably free from the troubles that afflict ordinary people. &ldquo;They are not in trouble as others are; they are not stricken like the rest of mankind&rdquo; (v.5). While the righteous navigate hardship, loss, and affliction, the wicked seem to glide through life insulated from its ordinary sorrows. The unfairness is not subtle &mdash; it is brazen and public. And because it is public, it creates a spectacle that can shake the faith of others who observe it.",
      "Their character matches their conduct. &ldquo;Pride is their necklace; violence covers them as a garment&rdquo; (v.6). They wear their arrogance like jewelry, displaying it proudly rather than hiding it. Their eyes &ldquo;swell out through fatness; their hearts overflow with follies&rdquo; (v.7). They are not chastened by their success; they are inflated by it. Callous hearts, scoffing speech, and casual malice mark their inner life: &ldquo;They scoff and speak with malice; loftily they threaten oppression&rdquo; (v.8).",
      "Most strikingly, they set their mouths against heaven itself. &ldquo;They set their mouths against the heavens, and their tongue struts through the earth&rdquo; (v.9). They speak against God without apparent consequence. The question they ask, or that their lifestyle implies, becomes a taunt that others begin to repeat: &ldquo;How can God know? Is there knowledge in the Most High?&rdquo; (v.11). If God does not seem to be paying attention, if there is no evidence that he notices or responds, perhaps God does not know &mdash; or perhaps God does not exist in the way the righteous have believed.",
      "The effect on Asaph is devastating. He turns the scrutiny on himself and finds the comparison almost unbearable: &ldquo;All in vain have I kept my heart clean and washed my hands in innocence. For all the day long I have been stricken and rebuked every morning&rdquo; (vv.13&ndash;14). The keeping of moral discipline, the vigilance over his own heart, the obedience to God &mdash; all of it has brought him not reward but affliction, not honor but suffering. Every morning brings fresh chastening. What was the point?",
      "This is the dark logic of Asaph&rsquo;s crisis: not a lazy desire to sin without consequence, but the genuine bewilderment of a man who has tried to live faithfully and found, by every visible measure, that faithfulness does not pay. The wicked flourish; the godly suffer. If that is consistently the pattern, then either God is indifferent, or the whole framework by which Asaph has ordered his life is mistaken. The crisis is not merely emotional &mdash; it is theological, a challenge to the very coherence of faith in a just and present God.",
    ],
  },
  {
    id: "The Sanctuary Perspective",
    heading: "The Sanctuary Perspective",
    reference: "Psalm 73:15&ndash;20",
    paragraphs: [
      "At the very moment when Asaph&rsquo;s doubt is most acute, a restraint intervenes. He had been thinking through his grievance, trying to understand it, and arriving only at bewilderment: &ldquo;When I thought how to understand this, it seemed to me a wearisome task&rdquo; (v.16). But there was one thing holding him back from voicing his conclusions: &ldquo;If I had said, &lsquo;I will speak thus,&rsquo; I would have betrayed the generation of your children&rdquo; (v.15). Even in his darkness, Asaph knew that to speak his despairing conclusions aloud would be to wound the faith of others, to become a stumbling block to the community of God&rsquo;s people. That sober awareness kept him from compounding doubt with betrayal.",
      "The turning point is expressed in a single word &mdash; &ldquo;until.&rdquo; &ldquo;It was too painful for me, until I went into the sanctuary of God; then I discerned their end&rdquo; (vv.16&ndash;17). Asaph does not tell us what happened in the sanctuary in any detail. There is no vision recorded, no divine speech reported, no angel appearing. What changes is perspective &mdash; the perspective available only in the presence of God, where the eternal frame of reference replaces the merely temporal one.",
      "What Asaph sees in the sanctuary is the end of the wicked. Until this moment he had been fixated on their present condition &mdash; their health, their prosperity, their freedom from suffering. But now he sees where the road they are on actually leads. &ldquo;Truly you set them in slippery places; you make them fall to ruin. How they are destroyed in a moment, swept away utterly by terrors!&rdquo; (vv.18&ndash;19). The apparent security of the wicked is not a foundation at all; it is a position of extreme peril, a slippery slope with destruction at the bottom.",
      "The speed of their fall is emphasized: &ldquo;destroyed in a moment&rdquo; (v.19). What looked like stability from the outside is revealed to be entirely precarious. The prosperity of the wicked is not permanent wealth but borrowed time. And when the end comes, it comes suddenly and completely &mdash; not a gradual decline but a catastrophic collapse, swept away &ldquo;utterly by terrors.&rdquo; The very confidence that characterized them becomes the measure of their delusion.",
      "Asaph then uses a striking image: &ldquo;Like a dream when one awakes, O Lord, when you rouse yourself, you despise them as phantoms&rdquo; (v.20). The prosperity of the wicked is like something seen in a dream &mdash; vivid and apparently real while it lasts, but without substance, gone when morning comes. God will rouse himself; when he does, the whole edifice of the wicked&rsquo;s flourishing will prove to have been no more than a phantom, a thing of no enduring reality. What Asaph had envied, it turns out, was never really there in the way he thought.",
      "The sanctuary does not answer every question about suffering and injustice. Asaph still carries his own pain and confusion into that holy place. But the sanctuary gives him something more valuable than an explanation &mdash; it gives him a vantage point. From within the presence of God, the relative weights of things shift. The prosperity of the wicked, seen sub specie aeternitatis &mdash; under the aspect of eternity &mdash; is exposed as ephemeral. And the goodness of God, even amid suffering, begins to reassert itself as the dominant reality of Asaph&rsquo;s existence.",
    ],
  },
  {
    id: "Whom Have I But You",
    heading: "Whom Have I But You",
    reference: "Psalm 73:21&ndash;28",
    paragraphs: [
      "With his perspective restored, Asaph turns his new sight on himself and is not entirely pleased with what he finds. He looks back at his earlier state of envy and despair and recognizes it for what it was: &ldquo;When my soul was embittered, when I was pricked in heart, I was brutish and ignorant; I was like a beast toward you&rdquo; (vv.21&ndash;22). The language is deliberately animal &mdash; not a compliment. In his doubt and envy, Asaph had been operating at a sub-human level, reacting to surface appearances rather than perceiving the deeper reality that faith makes available.",
      "The shame he feels at this recognition is real, but it does not lead to despair &mdash; because the very next words begin with &ldquo;Nevertheless.&rdquo; &ldquo;Nevertheless, I am continually with you; you hold my right hand&rdquo; (v.23). Despite his brutish ignorance, despite his near-fall, despite the envy and bitterness that had nearly swept him away, God had been holding him all along. His right hand was in God&rsquo;s grip even when he did not know it, even when he was behaving like a beast. The steadfastness was entirely on God&rsquo;s side.",
      "From that point of security, Asaph now sees with new clarity what God&rsquo;s presence actually means for him: &ldquo;You guide me with your counsel, and afterward you will receive me to glory&rdquo; (v.24). There is a forward trajectory to the life of faith that the wicked, for all their present prosperity, do not share. Asaph is being guided &mdash; not abandoned, not left to stumble through life alone, but actively counseled by the living God. And the destination at the end of that guidance is glory, not destruction. This is the contrast with the &ldquo;slippery places&rdquo; of the wicked (v.18); the righteous are led to glory.",
      "Then comes the declaration that has rung through the centuries as one of the most profound affirmations of faith in all of Scripture: &ldquo;Whom have I in heaven but you? And there is nothing on earth that I desire besides you&rdquo; (v.25). Asaph had spent much of the psalm looking enviously at what the wicked possessed. Now he arrives at the recognition that what he already has &mdash; God himself &mdash; is incomparably greater than anything he had envied. Not because material things are worthless, but because God is of such surpassing worth that, held up in comparison, everything else recedes to secondary importance.",
      "The declaration extends to his own body and its fragility: &ldquo;My flesh and my heart may fail, but God is the strength of my heart and my portion forever&rdquo; (v.26). The very thing Asaph had envied in the wicked &mdash; their robust physical health, their bodies fat and sleek &mdash; is here acknowledged as impermanent. Asaph&rsquo;s own body may fail; his own heart may give out. But his portion &mdash; his inheritance, the share he has been given &mdash; is God himself, who is eternal. The wicked have a temporary prosperity; the righteous have a permanent inheritance.",
      "The psalm concludes by restating what happens to those who are far from God, and by affirming where Asaph himself has come to stand. &ldquo;For behold, those who are far from you shall perish; you put an end to everyone who is unfaithful to you. But for me it is good to be near God; I have made the Lord God my refuge, that I may tell of all your works&rdquo; (vv.27&ndash;28). The word &ldquo;good&rdquo; in verse 28 echoes the opening &ldquo;good&rdquo; of verse 1: God is good to Israel. But now Asaph has personalized it &mdash; it is good for me, for Asaph himself, to be near God. The general theological confession has become a personal testimony, won through wrestling, nearly losing the match, and being held in the end by the one he almost walked away from.",
      "What Psalm 73 gives us is not a clean answer to the problem of why the righteous suffer while the wicked prosper. It gives us something better: a testimony that the question can be survived, that the sanctuary of God is the place where perspective is restored, and that the God found there is himself the answer to every longing the heart has tried to satisfy with envy. Asaph enters the psalm almost falling. He exits with God as his portion forever.",
    ],
  },
];

const videoItems = [
  { videoId: "TF6wSxizK3Y", title: "Psalm 73 - Why Do the Wicked Prosper? (Bible Study)" },
  { videoId: "q0mLJG5SZO8", title: "Asaph's Crisis of Faith - Psalm 73 Explained" },
  { videoId: "c4V6gmSSdnQ", title: "The Sanctuary Perspective - Psalm 73" },
  { videoId: "EuD-Xvgn42w", title: "Whom Have I in Heaven But You - Psalm 73:25" },
];

export default function Psalm73GuidePage() {
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
            Psalm 73
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Why Do the Wicked Prosper? Asaph&rsquo;s honest wrestle with envy, his near-stumbling faith, the perspective-shifting moment in God&rsquo;s sanctuary, and the profound declaration &ldquo;Whom have I in heaven but you?&rdquo;
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
              Deepen your study of Psalm 73 through visual teaching on Asaph&rsquo;s struggle with the prosperity of the wicked, the perspective found in God&rsquo;s sanctuary, and the surpassing worth of God himself.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>But for Me It Is Good to Be Near God</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Psalm 73 does not resolve the question of why the righteous suffer by giving a philosophical answer. It resolves it by a personal encounter &mdash; a turning to God in the sanctuary that reorients everything. Asaph exits the psalm with God as his portion forever, having discovered that nearness to God is itself the good he was looking for. &ldquo;My flesh and my heart may fail, but God is the strength of my heart and my portion forever&rdquo; (v.26).
          </p>
        </div>
      </main>
    </div>
  );
}
