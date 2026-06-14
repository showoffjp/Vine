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
  "I Am the True Vine",
  "Abide in Me",
  "Apart from Me You Can Do Nothing",
  "Love One Another",
  "Chosen and Appointed",
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
    id: "I Am the True Vine",
    heading: "I Am the True Vine",
    reference: "John 15:1&ndash;3",
    paragraphs: [
      "John 15 opens with the last of the great &ldquo;I am&rdquo; sayings of Jesus, spoken in the upper room on the night before the cross: &ldquo;I am the true vine, and my Father is the vinedresser&rdquo; (15:1). These words come at the very heart of the Farewell Discourse, after the foot-washing and the warning of betrayal, as Jesus prepares his disciples for a world in which they will no longer see him face to face. He gathers the whole of the Christian life into a single living image &mdash; a vine, its branches, and the careful hand of the one who tends them.",
      "The image was deeply familiar to Jewish ears. Again and again the prophets had pictured Israel as a vine or a vineyard planted by God &mdash; a vine he had brought out of Egypt and planted in a fruitful land. Yet that vine had so often become wild and fruitless, yielding sour grapes and disappointing the one who tended it. When Jesus says, &ldquo;I am the &lsquo;true&rsquo; vine,&rdquo; he is making a quiet but staggering claim: he is the faithful vine that Israel failed to be, the one in whom the people of God find their true rootedness and from whom alone real fruit can come.",
      "The Father is named the vinedresser, the one who owns and tends the vineyard. He is not a distant spectator but an active, attentive gardener, intimately involved with every branch. His twofold work is set out at once: &ldquo;Every branch in me that does not bear fruit he takes away, and every branch that does bear fruit he prunes, that it may bear more fruit&rdquo; (15:2). The vinedresser is interested in fruit, and his hands are always at work toward that end &mdash; removing what is dead and refining what is alive.",
      "Pruning is the strange mercy at the center of this picture. To the untrained eye the gardener with his knife seems to be doing damage, cutting away healthy growth, leaving the branch smaller than before. But the experienced vinedresser knows that an unpruned vine spends its strength on leaves and length and bears little fruit. The cutting back is not punishment but purpose &mdash; it concentrates the life of the vine toward fruitfulness. So the disciple should not be surprised when the Father&rsquo;s loving hand brings loss, discipline, and the trimming away of good things for the sake of better ones.",
      "There is also a sober warning here in the branch that bears no fruit and is taken away. The vine has a real and visible connection in view; some who appear attached to Christ show, in the end, that no living sap ever flowed through them. The difference between the two branches is not the gardener&rsquo;s care, which falls on both, but whether the life of the vine truly runs within. Fruit is the evidence of that hidden, living union.",
      "Then comes a word of great comfort to the eleven who remain: &ldquo;Already you are clean because of the word that I have spoken to you&rdquo; (15:3). The very word that prunes is also the word that cleanses. The same teaching of Jesus that exposes and cuts away also purifies and makes alive. The disciples are not fruitless branches awaiting removal; they are living branches already cleansed by his word and now to be made yet more fruitful. The whole chapter flows from this settled grace: you are already clean, so abide, and bear much fruit.",
    ],
  },
  {
    id: "Abide in Me",
    heading: "Abide in Me",
    reference: "John 15:4&ndash;11",
    paragraphs: [
      "At the center of the whole passage stands a single repeated command: &ldquo;Abide in me, and I in you&rdquo; (15:4). The word &ldquo;abide&rdquo; &mdash; to remain, to stay, to dwell, to make one&rsquo;s home &mdash; sounds again and again through these verses, appearing some ten times in a few short lines. It is the keynote of John 15 and, in a sense, the keynote of this entire site that takes its name from the Vine. The Christian life is not first a list of duties to perform but a place to remain: a settled, continuing, living union with Jesus Christ.",
      "Jesus presses the logic of the vine to its conclusion: &ldquo;As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me&rdquo; (15:4). A branch has no independent life. It cannot manufacture sap; it can only receive it. Cut it from the vine and, however green it looks for a day, it is already dying. So the disciple is summoned to a relationship of utter dependence, drawing every resource for living and serving from the One in whom he is rooted.",
      "Then comes the great central declaration: &ldquo;I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit&rdquo; (15:5). Notice that fruitfulness is promised not to the busy or the gifted but to the one who abides. The mark of a fruitful Christian is not frantic activity but deep, continuing communion with Christ. Much fruit flows from much abiding. The branch&rsquo;s whole task is simply to remain in living contact with the vine and let the life of the vine do its work.",
      "Abiding is no vague mysticism; Jesus gives it content. &ldquo;If you abide in me, and my words abide in you&rdquo; (15:7) &mdash; abiding means letting the words of Christ make their home in us, shaping our thoughts, our prayers, our desires. It is bound up with obedience: &ldquo;If you keep my commandments, you will abide in my love, just as I have kept my Father&rsquo;s commandments and abide in his love&rdquo; (15:10). To abide is to live in the warmth of his love and to walk in the path of his commands, the two held inseparably together as they were in Jesus&rsquo; own relationship with the Father.",
      "Out of this abiding flows a remarkable promise about prayer: &ldquo;If you abide in me, and my words abide in you, ask whatever you wish, and it will be done for you&rdquo; (15:7). This is no blank check for selfish wishes. The one whose life is shaped by the abiding words of Christ will increasingly desire what Christ desires, and pray accordingly &mdash; and such prayer is answered. The aim of it all is the Father&rsquo;s honor: &ldquo;By this my Father is glorified, that you bear much fruit and so prove to be my disciples&rdquo; (15:8). A fruitful, praying, abiding people brings glory to God.",
      "And the goal of abiding is joy. Jesus says he has spoken all this &ldquo;that my joy may be in you, and that your joy may be full&rdquo; (15:11). The abiding life is not a grim endurance but the pathway into the very gladness of Christ himself. His own joy &mdash; the joy of perfect communion with the Father &mdash; is meant to overflow into the branches until our joy is brimming and complete. To abide in the vine is to abide in his love, and to abide in his love is to be filled with a joy the world can neither give nor take away.",
    ],
  },
  {
    id: "Apart from Me You Can Do Nothing",
    heading: "Apart from Me You Can Do Nothing",
    reference: "John 15:4&ndash;6",
    paragraphs: [
      "If the great positive of John 15 is &ldquo;abide in me,&rdquo; its great negative is the sobering counterpart: &ldquo;apart from me you can do nothing&rdquo; (15:5). The same verse that promises much fruit to the one who abides closes with this uncompromising word about life apart from the vine. It is one of the most humbling sentences in all of Scripture, and one of the most freeing, for it tells us exactly where our strength does and does not lie.",
      "The word &ldquo;nothing&rdquo; is absolute. Jesus does not say that apart from him we can do a little, or do well but not perfectly. He says we can do &ldquo;nothing&rdquo; &mdash; nothing, that is, of the fruit that counts for eternity, nothing of lasting spiritual worth. We may still be busy, clever, and impressive in the eyes of men; a severed branch can be carved and polished. But it cannot bear grapes. Real, living, God-glorifying fruit is simply impossible to a branch cut off from the vine.",
      "This strikes at the deep human instinct toward self-sufficiency. From Eden onward the temptation has been to live independently of God, to be the source of our own life and the author of our own goodness. Jesus dismantles that illusion. The branch produces nothing from itself; it only bears what the vine supplies. To grasp this is the beginning of true spiritual maturity &mdash; not a despairing weakness, but a glad dependence that draws continually on a strength not its own.",
      "The alternative to abiding is set out with great seriousness: &ldquo;If anyone does not abide in me he is thrown away like a branch and withers; and the branches are gathered, thrown into the fire, and burned&rdquo; (15:6). A branch that does not remain in the vine has no future. Severed from its source of life, it dries up, becomes useless, and is fit only for burning. Jesus is not describing a temporary setback but the final end of a life that has no real union with him. It is a warning meant to drive us deeper into the vine, not to leave us in doubt of his love.",
      "Yet the emphasis of the passage is not finally on threat but on supply. The reason a branch can bear fruit at all is that the vine pours its very life into it. The Christian&rsquo;s confidence, then, is never in his own resources but in the inexhaustible life of Christ flowing into him. &ldquo;Apart from me you can do nothing&rdquo; has a glorious flip side that the whole chapter assumes: joined to me, you can bear much fruit. Dependence on Christ is not the death of fruitfulness but its only possible soil.",
      "This is why prayer, the word, and daily communion with Christ are not optional extras for the strong but lifelines for those who know they have no life apart from him. The most fruitful believers are not those most confident in themselves but those most consciously dependent on their Lord. They have learned, often through their own weakness and failure, that the secret of a fruitful life is not trying harder in their own strength but abiding more deeply in his.",
    ],
  },
  {
    id: "Love One Another",
    heading: "Love One Another",
    reference: "John 15:12&ndash;17",
    paragraphs: [
      "The abiding life is never a private spirituality; it bears its fruit in love for others. So Jesus moves from the vine to the community of the branches: &ldquo;This is my commandment, that you love one another as I have loved you&rdquo; (15:12). The fruit that the Father seeks is not merely inward feeling but the visible, costly love of Christians for one another. A vine bears grapes; a disciple bears love.",
      "And the measure of that love is breathtaking: &ldquo;as I have loved you.&rdquo; The standard is not how much the world loves, or even how much we naturally feel, but the self-giving love of Christ himself. He defines it at once in terms of the cross now only hours away: &ldquo;Greater love has no one than this, that someone lay down his life for his friends&rdquo; (15:13). The love commanded of the branches is the very love that is about to be poured out on the tree of Calvary &mdash; sacrificial, others-centered, willing to lay down its life.",
      "Then Jesus speaks words of astonishing intimacy: &ldquo;You are my friends if you do what I command you. No longer do I call you servants, for the servant does not know what his master is doing; but I have called you friends, for all that I have heard from my Father I have made known to you&rdquo; (15:14&ndash;15). The disciples are lifted from the status of servants to that of friends &mdash; not because they have earned it, but because Christ has chosen to share with them the secrets of the Father&rsquo;s heart. To be a friend of Jesus is the highest dignity a human being can know.",
      "This friendship is rooted entirely in his initiative, not ours: &ldquo;You did not choose me, but I chose you&rdquo; (15:16). We did not first reach up to befriend God; he reached down to befriend us. And his choosing has a purpose &mdash; that we should &ldquo;go and bear fruit, and that your fruit should abide.&rdquo; The love we are commanded to show one another is itself the fruit for which we were chosen, fruit that is meant to last and not wither.",
      "Such love within the church is the great evidence of a real connection to the vine. Elsewhere in this same discourse Jesus says, &ldquo;By this all people will know that you are my disciples, if you have love for one another.&rdquo; The watching world cannot see the hidden union of branch and vine, but it can see whether Christians love one another with the patient, forgiving, self-spending love of Christ. Where that love is present, the life of the vine is on display.",
      "Jesus closes this section as he opened it, framing everything with the command to love: &ldquo;These things I command you, so that you will love one another&rdquo; (15:17). The whole purpose of his teaching about the vine and the branches comes to rest here, in a community marked by mutual love. Abiding in Christ and loving one another are not two separate duties but one organic whole: those who truly abide in the vine cannot help but bear, toward one another, the sweet fruit of love.",
    ],
  },
  {
    id: "Chosen and Appointed",
    heading: "Chosen and Appointed",
    reference: "John 15:16&ndash;27",
    paragraphs: [
      "The latter part of John 15 anchors the disciples&rsquo; whole identity in the sovereign choice of Christ: &ldquo;You did not choose me, but I chose you and appointed you that you should go and bear fruit and that your fruit should abide, so that whatever you ask the Father in my name, he may give it to you&rdquo; (15:16). Election is not a cold abstraction here but a warm assurance &mdash; the disciples are not self-made volunteers but those personally chosen and commissioned by the Lord himself, sent out with purpose and backed by the promise of answered prayer.",
      "Being chosen, however, does not mean being spared hardship. Jesus turns at once to warn of the world&rsquo;s hatred: &ldquo;If the world hates you, know that it has hated me before it hated you&rdquo; (15:18). The same union with the vine that brings fruit and friendship also brings the world&rsquo;s hostility, for the branch shares the lot of the vine. &ldquo;If they persecuted me, they will also persecute you&rdquo; (15:20). The disciple should not be bewildered when the world that rejected his Master rejects him too; it is the strange confirmation that he truly belongs to Christ.",
      "The reason for this hatred is that the disciples no longer belong to the world: &ldquo;Because you are not of the world, but I chose you out of the world, therefore the world hates you&rdquo; (15:19). The very choosing that grants them friendship with God sets them at odds with a world in rebellion against him. To be chosen out of the world is necessarily to be unwelcome in it. Yet the hostility, far from being a sign of failure, is woven by Jesus into the dignity of belonging to him.",
      "Jesus traces the world&rsquo;s rejection to a deeper root: it does not know the Father. &ldquo;Whoever hates me hates my Father also&rdquo; (15:23), and the works and words of Jesus leave the world without excuse. Their guilt is not ignorance but the refusal of light that has clearly come. This is sobering, but it also reframes persecution: when the disciples are hated, it is finally Christ, and through him the Father, whom the world is rejecting. The servant simply shares his Master&rsquo;s reproach.",
      "Into this hostile setting comes the great promise of help: &ldquo;When the Helper comes, whom I will send to you from the Father, the Spirit of truth, who proceeds from the Father, he will bear witness about me&rdquo; (15:26). The disciples are not left as orphaned branches to face the world&rsquo;s enmity alone. The Spirit himself will come to testify of Christ, and through that same Spirit the disciples will bear witness too: &ldquo;And you also will bear witness, because you have been with me from the beginning&rdquo; (15:27). Abiding in the vine produces not only inward fruit and mutual love but outward testimony to a watching, hostile world.",
      "So John 15 gathers up the whole of the Christian life into one luminous picture. We are branches in the true vine, cleansed by his word, pruned by the Father&rsquo;s loving hand, summoned to abide and so to bear much fruit, helpless apart from him yet fruitful in him, bound to one another in sacrificial love, chosen and appointed for a lasting harvest, hated by the world but never abandoned, and equipped by the Spirit of truth to bear witness to our Lord. It is little wonder that this chapter has given its name to the Vine &mdash; for here, in the words of Jesus on the night before he died, is the very heart of what it means to belong to him: to remain, to abide, to make our home in the One who first made his home in us.",
    ],
  },
];

const videoItems = [
  { videoId: "G-2e9mMf7E8", title: "BibleProject - Gospel of John Overview Part 2" },
  { videoId: "8ferLliYKBI", title: "I Am the True Vine - John 15 Explained" },
  { videoId: "Hs2Kd3ck1Ck", title: "Abiding in Christ - A Study of John 15" },
  { videoId: "Yr1qVHj4ePk", title: "Love One Another as I Have Loved You" },
];

export default function John15GuidePage() {
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
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            John 15: The True Vine
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The very heart of the Vine &mdash; Jesus as the true vine and the Father as the vinedresser, the call to abide in him and bear much fruit, the humbling truth that apart from him we can do nothing, the command to love one another as he has loved us, and the dignity of being chosen and appointed by Christ himself.
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
              Deepen your study of John 15 through visual teaching on the true vine, the call to abide in Christ, the dependence of the branches, and the command to love one another.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Abide in Me, and I in You</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            John 15 is the beating heart of the Vine. Here Jesus calls every believer not first to strive but to remain &mdash; to abide in him as a branch abides in the vine, drawing its whole life from his. Apart from him we can do nothing; joined to him we bear much fruit, love one another, and bring glory to the Father. This is the invitation that gives this whole site its name: come, abide, and let his life bear fruit in you.
          </p>
        </div>
      </main>
    </div>
  );
}
