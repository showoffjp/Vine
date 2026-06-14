"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Justified by Faith",
  "Peace with God",
  "Suffering Produces Hope",
  "While We Were Still Sinners",
  "Death in Adam Life in Christ",
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
    id: "Justified by Faith",
    heading: "Justified by Faith",
    reference: "Romans 5:1",
    paragraphs: [
      "Romans 5 opens with one of the most consequential words in all of Scripture: &ldquo;Therefore.&rdquo; &ldquo;Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ&rdquo; (5:1). That little word reaches back across the first four chapters of the letter and gathers up everything Paul has argued, turning doctrine into doxology. Having proved that all have sinned, that none can be justified by works of the law, and that righteousness comes by faith apart from works &mdash; as it did for Abraham &mdash; Paul now draws out the glorious consequences for those who believe.",
      "To be &ldquo;justified&rdquo; is to be declared righteous in the court of God. It is a legal verdict, a courtroom pronouncement, not a gradual process of becoming better. The sinner stands before the bar of divine justice deserving condemnation, and God, on the basis of Christ&rsquo;s finished work, declares that sinner righteous. The charges are dropped; the guilt is cancelled; the record is wiped clean and, more than that, the perfect righteousness of Christ is reckoned to the believer&rsquo;s account. This is the heart of the gospel that Paul has been unfolding.",
      "And the crucial phrase is &ldquo;by faith.&rdquo; Justification is not earned by moral effort, religious ritual, or the keeping of the law. It is received as a gift, laid hold of by faith alone, trusting wholly in what God has done in Christ rather than in anything we have done ourselves. This was the truth that set the heart of the Reformation aflame, but it is far older than the Reformation; it is the truth Paul roots in Abraham, who &ldquo;believed God, and it was counted to him as righteousness&rdquo; (4:3).",
      "The tense of the verb matters: &ldquo;since we have been justified.&rdquo; It is a completed action, a done deal, an accomplished fact for those who are in Christ. The believer does not live in suspense, hoping to be justified one day if the scales tip favorably at the end. The verdict has already been rendered. The future judgment has, in a sense, been brought forward into the present, and the believer already stands acquitted. This settled certainty is the ground of all that follows in the chapter.",
      "Notice too that justification comes &ldquo;through our Lord Jesus Christ.&rdquo; Paul never lets us forget the channel of this grace. We are not justified by faith in faith, nor by some vague religious sincerity, but through the person and work of the Lord Jesus. He is the mediator, the one through whom every blessing flows. His life of perfect obedience and his death in our place are the sole basis on which God can be both just and the justifier of those who have faith in Jesus.",
      "This opening verse therefore sets the foundation for the entire chapter and indeed for the Christian life. Everything that follows &mdash; peace, access, hope, joy in suffering, assurance of love &mdash; rests upon this one settled reality: we have been justified by faith. The believer who grasps this truth has grasped the doorway into all the riches of grace, and Paul will spend the rest of the chapter leading us through that doorway into the wide and glorious room beyond.",
    ],
  },
  {
    id: "Peace with God",
    heading: "Peace with God",
    reference: "Romans 5:1&ndash;2",
    paragraphs: [
      "&ldquo;We have peace with God through our Lord Jesus Christ&rdquo; (5:1). This is the first and greatest fruit of justification, and it is worth dwelling on what it means. Peace with God is not merely a feeling of tranquility or an inner calm, though such peace may follow. It is first an objective reality, a change in our standing before God. The war is over. The enmity is ended. The God against whom we had rebelled is now, in Christ, at peace with us, and we with him.",
      "We must feel the weight of what this peace presupposes. By nature, Scripture teaches, we were not neutral toward God but hostile to him, &ldquo;enemies&rdquo; in our minds and by our deeds, justly under his wrath. The peace Paul announces is therefore the peace of a conflict resolved, a treaty signed in the blood of Christ. It is reconciliation between estranged parties, the laying down of arms, the welcome of the once-rejected into the household of God. This is no small thing; it is the deepest need of the human soul finally and fully met.",
      "And this peace is permanent because it rests not on our performance but on Christ&rsquo;s. Our subjective sense of peace may rise and fall with our moods and circumstances; but our peace with God, grounded in justification, does not waver, because Christ&rsquo;s finished work does not waver. The believer may have a bad day, may stumble and sin, may feel far from God &mdash; and still the objective peace stands, secured by the One through whom it came. This is why Paul can speak of it as a present possession: &ldquo;we have peace.&rdquo;",
      "Paul continues: &ldquo;Through him we have also obtained access by faith into this grace in which we stand&rdquo; (5:2). The word &ldquo;access&rdquo; pictures being ushered into the presence of a king. Once we were shut out, barred from the holy presence by our sin; now, through Christ, we are brought in and given an audience with God himself. And it is not a fearful, trembling, momentary access, but a settled place: this is &ldquo;grace in which we stand.&rdquo; Grace is not merely the door we passed through once; it is the ground beneath our feet, the realm in which we now permanently live.",
      "To &ldquo;stand&rdquo; in grace is to be firmly established, secure, unshaken. The believer does not totter on the edge of grace, fearing to fall out of it with every misstep. We stand in it. It holds us. The same grace that justified us now sustains us and keeps us, and we live our whole Christian lives within its sphere. This is the answer to every anxious heart that wonders whether it has done enough to keep God&rsquo;s favor: we stand not by our works but by his grace.",
      "&ldquo;And we rejoice in hope of the glory of God&rdquo; (5:2). From peace and access flows joy &mdash; a confident, exultant rejoicing not in present comforts but in a future certainty. The glory of God, which sin caused us to fall short of, is now the very thing we hope for and will one day share. Justified, at peace, standing in grace, the believer looks forward with unshakable confidence to glory. The chapter has moved from a settled past (justified) through a secure present (peace, access, standing) to a glorious future (the hope of glory), and it is to that hope, tested in the fire of suffering, that Paul turns next.",
    ],
  },
  {
    id: "Suffering Produces Hope",
    heading: "Suffering Produces Hope",
    reference: "Romans 5:3&ndash;5",
    paragraphs: [
      "Having spoken of rejoicing in the hope of glory, Paul makes a startling turn: &ldquo;More than that, we rejoice in our sufferings&rdquo; (5:3). This is not the language of grim endurance or stoic resignation. Paul says we actually rejoice in sufferings &mdash; the same word he used for rejoicing in the hope of glory. The Christian does not merely tolerate hardship; by the grace of God, the believer can find a deep and genuine joy even in the midst of it. But how can this be?",
      "Paul does not ask us to rejoice in suffering as though pain were good in itself. Rather, he traces a chain, a divine progression, that runs through suffering toward something glorious: &ldquo;knowing that suffering produces endurance, and endurance produces character, and character produces hope&rdquo; (5:3&ndash;4). We rejoice not in the suffering itself but in what God is doing through it. Each link in the chain is forged in the fire, and the whole chain leads upward to a strengthened and purified hope.",
      "The first link is endurance. Suffering, rightly received, produces staying power, the capacity to remain steadfast under pressure. A faith that has never been tested is untested; it is the trials of life that teach the soul to hold fast, to persevere, to remain under the load without collapsing. Just as a muscle grows only under resistance, so the spiritual endurance of the believer is developed precisely in the seasons that are hardest to bear.",
      "Endurance in turn produces character. The word Paul uses speaks of proven character, the quality of metal that has been tested and found genuine, the tried-and-true reliability of one who has been through the fire and emerged refined. Suffering patiently endured burns away the dross and proves the reality of faith, both to the believer and to those watching. The Christian who has suffered well becomes a person of tested, trustworthy character, no longer the brittle, untried believer of earlier days.",
      "And proven character produces hope. This is the surprising summit of the chain: the very sufferings that might seem to threaten hope actually deepen it. Having seen God sustain us through trial, having proved his faithfulness in the furnace, our hope in him grows stronger and more certain than before. The believer who has tasted God&rsquo;s grace in the darkness comes to hope in him all the more brightly. Suffering, far from destroying hope, becomes the very forge in which hope is strengthened.",
      "&ldquo;And hope does not put us to shame&rdquo; (5:5). This hope will never disappoint, never be exposed as a false confidence, never leave us ashamed for having trusted in it. Why is Paul so sure? &ldquo;Because God&rsquo;s love has been poured into our hearts through the Holy Spirit who has been given to us&rdquo; (5:5). Here is the anchor of the whole chain. Our hope is sure because it rests on God&rsquo;s love, and that love is not a distant abstraction but a present, experienced reality, lavishly poured into our hearts by the indwelling Spirit.",
      "The image of love &ldquo;poured into our hearts&rdquo; is one of overflowing abundance, not a trickle but a flood. The Holy Spirit, given to every believer, is the living witness within us of the love of God, the down payment and guarantee of all that is promised. So when suffering comes, the Christian is not left to white-knuckle endurance on willpower alone. The Spirit floods the heart with the assurance of God&rsquo;s love, and that assurance turns suffering itself into a pathway to a hope that cannot be put to shame.",
    ],
  },
  {
    id: "While We Were Still Sinners",
    heading: "While We Were Still Sinners",
    reference: "Romans 5:6&ndash;11",
    paragraphs: [
      "Paul now proves the love of God that the Spirit pours into our hearts by pointing to its supreme demonstration at the cross. &ldquo;For while we were still weak, at the right time Christ died for the ungodly&rdquo; (5:6). The timing is everything. Christ did not die for us after we had cleaned ourselves up, made ourselves worthy, or turned our lives around. He died for us while we were still weak, still helpless, still ungodly &mdash; with nothing to commend us and everything to condemn us.",
      "Paul presses the wonder of this by an argument from human experience: &ldquo;For one will scarcely die for a righteous person &mdash; though perhaps for a good person one would dare even to die&rdquo; (5:7). Among human beings, the very highest pitch of love might, in rare cases, lay down its life for someone genuinely good and admirable. We can imagine a person heroically dying for a beloved friend or a noble cause. But this is the extreme limit of human love, and even then it is for someone deemed worthy of the sacrifice.",
      "Then comes the great contrast that exposes the sheer magnitude of God&rsquo;s love: &ldquo;but God shows his love for us in that while we were still sinners, Christ died for us&rdquo; (5:8). God&rsquo;s love operates on an entirely different plane. Christ did not die for the righteous or the good, but for sinners &mdash; for his enemies, for the ungodly, for those in active rebellion against him. The love of God is not drawn out by our worthiness; it is poured out upon our unworthiness. This is love that originates entirely in God, owing nothing to anything lovely in us.",
      "From this demonstrated love Paul draws a powerful argument for the believer&rsquo;s assurance, reasoning from the greater to the lesser. &ldquo;Since, therefore, we have now been justified by his blood, much more shall we be saved by him from the wrath of God&rdquo; (5:9). If God did the harder thing &mdash; justifying us at the cost of his Son&rsquo;s blood while we were still sinners &mdash; how much more surely will he do the easier thing of bringing his already-justified people safely through to final salvation? The logic is unbreakable and deeply comforting.",
      "He repeats the argument to drive it home: &ldquo;For if while we were enemies we were reconciled to God by the death of his Son, much more, now that we are reconciled, shall we be saved by his life&rdquo; (5:10). Reconciliation was accomplished by Christ&rsquo;s death when we were enemies; how much more shall our final salvation be secured by his risen life, now that we are his friends? The believer&rsquo;s security does not rest on a fragile hope but on the relentless logic of God&rsquo;s love: the One who began this work at such cost will surely finish it.",
      "And so Paul comes full circle to joy: &ldquo;More than that, we also rejoice in God through our Lord Jesus Christ, through whom we have now received reconciliation&rdquo; (5:11). The ultimate ground of the believer&rsquo;s rejoicing is not merely the gifts of peace and hope, glorious as they are, but God himself. We rejoice in God &mdash; in the One who loved us when we were unlovely, reconciled us when we were enemies, and gave us himself as our exceeding joy. The cross does not merely rescue us from wrath; it restores us to God, and there our hearts find their everlasting gladness.",
    ],
  },
  {
    id: "Death in Adam Life in Christ",
    heading: "Death in Adam Life in Christ",
    reference: "Romans 5:12&ndash;21",
    paragraphs: [
      "In the second half of the chapter Paul lifts our eyes from the individual believer to the sweep of all human history, set under two representative men: Adam and Christ. &ldquo;Therefore, just as sin came into the world through one man, and death through sin, and so death spread to all men because all sinned&rdquo; (5:12). The whole human race is bound up with Adam, its head and representative. When Adam fell, we fell in him; his one trespass brought sin, condemnation, and death upon all.",
      "This is the doctrine of our solidarity in Adam, and it explains the universal reign of death. Death spread to all because all were represented in the one man who sinned. We are not merely imitators of Adam&rsquo;s sin; we are implicated in it, born into a fallen race under a sentence we did not personally pronounce but inescapably share. The reign of death over every human being, including those who never sinned in exactly the way Adam did, testifies to this deep and terrible solidarity with our first father.",
      "But Adam, Paul says, &ldquo;was a type of the one who was to come&rdquo; (5:14). Adam is the dark prototype of a greater representative head, the last Adam, Jesus Christ. The entire passage hinges on this parallel between the two men, the two heads of two humanities. And having drawn the parallel, Paul is at pains to show that the parallel is not one of equal weight. The work of Christ does not merely match the damage of Adam; it overwhelmingly surpasses it.",
      "Again and again Paul sounds the note of &ldquo;much more&rdquo;: &ldquo;If many died through one man&rsquo;s trespass, much more have the grace of God and the free gift by the grace of that one man Jesus Christ abounded for many&rdquo; (5:15). The gift is greater than the trespass. Adam&rsquo;s one sin brought condemnation; but Christ&rsquo;s gift answers not one sin but many trespasses, bringing justification. Where Adam&rsquo;s fall plunged the race into ruin, Christ&rsquo;s grace lifts a redeemed people into a glory greater than Eden ever held.",
      "The contrast reaches its summit in two parallel verses. &ldquo;Therefore, as one trespass led to condemnation for all men, so one act of righteousness leads to justification and life for all men. For as by the one man&rsquo;s disobedience the many were made sinners, so by the one man&rsquo;s obedience the many will be made righteous&rdquo; (5:18&ndash;19). Here is the gospel in its grandest frame: Adam&rsquo;s disobedience constituted us sinners; Christ&rsquo;s obedience constitutes his people righteous. As we were in Adam by birth, so we are in Christ by faith, and his perfect obedience becomes the ground of our standing.",
      "Paul anticipates an objection about the law: where does it fit in this drama of the two Adams? &ldquo;Now the law came in to increase the trespass&rdquo; (5:20). The law was not the remedy; it came alongside to expose and multiply sin, to make the disease visible in all its severity. But this only sets the stage for the triumph of grace, for the verse continues with one of the most magnificent declarations in all of Scripture: &ldquo;but where sin increased, grace abounded all the more.&rdquo;",
      "There is no sin so deep that grace cannot go deeper. However high the floodwaters of sin may rise, the floodtide of God&rsquo;s grace rises higher still and overwhelms it. And Paul gives the final purpose: &ldquo;so that, as sin reigned in death, grace also might reign through righteousness leading to eternal life through Jesus Christ our Lord&rdquo; (5:21). The old tyranny of sin and death is overthrown, and in its place grace reigns &mdash; reigns through the righteousness of Christ, reigns unto eternal life. The chapter that began with peace ends with the everlasting reign of grace, and over it all stands the name of our Lord Jesus Christ.",
    ],
  },
];

const videoItems = [
  { videoId: "ej_6dVdJSIU", title: "BibleProject - The Book of Romans Overview" },
  { videoId: "0Sfp_zCfJ2g", title: "Romans 5 Explained - Peace with God" },
  { videoId: "9MFCbQz_7_Y", title: "Adam and Christ - The Two Representative Men" },
  { videoId: "Wd_R5lv4thc", title: "Justified by Faith - A Study of Romans 5" },
];

export default function Romans5GuidePage() {
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
            Romans 5
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Peace with God and the second Adam &mdash; being justified by faith we have peace with God, we rejoice in sufferings that produce hope, Christ died for us while we were still sinners, and where sin increased grace abounded all the more through Jesus Christ our Lord.
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
              Deepen your study of Romans 5 through visual teaching on justification by faith, peace with God, the hope forged in suffering, the love of God shown while we were still sinners, and the contrast of Adam and Christ.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Where Sin Increased, Grace Abounded All the More</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Romans 5 moves from the settled verdict of justification to peace with God, from suffering to a hope that does not put us to shame, from our sin to the love of God poured out at the cross, and from death in Adam to abounding life in Christ. Its enduring call still sounds &mdash; to rest in the assurance of grace, to rejoice even in suffering, and to glory in the God who reconciled us while we were still sinners.
          </p>
        </div>
      </main>
    </div>
  );
}
