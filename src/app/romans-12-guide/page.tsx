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
  "A Living Sacrifice",
  "Be Transformed by the Renewing",
  "One Body Many Members",
  "Let Love Be Genuine",
  "Overcome Evil with Good",
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
    id: "A Living Sacrifice",
    heading: "A Living Sacrifice",
    reference: "Romans 12:1&ndash;2",
    paragraphs: [
      "Romans 12 marks one of the great hinges of Scripture. For eleven chapters Paul has unfolded the gospel of God&rsquo;s righteousness &mdash; the universal guilt of humanity, justification by faith apart from works, the believer&rsquo;s union with Christ, the gift of the Spirit, and the unsearchable depths of God&rsquo;s saving plan that closes with the doxology, &ldquo;to him be glory forever. Amen&rdquo; (11:36). Now Paul turns from what God has done to how we must live. The little word that opens the chapter carries the weight of everything before it: &ldquo;I appeal to you therefore.&rdquo;",
      "&ldquo;I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship&rdquo; (12:1). The basis of the appeal is not law but mercy &mdash; the very mercies Paul has spent eleven chapters describing. Christian obedience does not earn God&rsquo;s favor; it flows from a favor already lavished upon us. Grace comes first, and gratitude answers.",
      "The image is drawn from the altar. Under the old covenant the worshiper brought an animal, slew it, and offered it to God. Paul transforms the picture: the sacrifice God now seeks is not a dead animal but a &ldquo;living&rdquo; one &mdash; you yourself, your whole embodied life, laid on the altar and kept there. Worship is no longer confined to a temple ritual; it becomes the daily, bodily surrender of the believer to God in every ordinary act.",
      "Notice that Paul says &ldquo;present your bodies.&rdquo; True consecration is not a vague inner sentiment but the giving over of hands, feet, eyes, tongue, and strength to the service of God. The Christian faith is not escape from the body but the offering of it. What we do with our physical lives &mdash; our work, our sexuality, our speech, our rest &mdash; is the very stuff of our worship.",
      "This offering is &ldquo;holy and acceptable to God,&rdquo; set apart for him and pleasing in his sight. Paul calls it our &ldquo;spiritual worship&rdquo; &mdash; a phrase that can also be rendered &ldquo;reasonable service,&rdquo; the only rational response to such mercy. To grasp the gospel rightly is to find that surrender is not a burden but the most fitting thing a redeemed heart can do.",
      "Here, then, is the foundation of all Christian living. Before Paul says a single word about gifts, love, or enemies, he plants the whole of the obedient life in one decisive act of self-giving. Every command that follows in chapter 12 is simply the unfolding of what it means to be a living sacrifice &mdash; a life no longer our own, given back to the God whose mercy first claimed it.",
    ],
  },
  {
    id: "Be Transformed by the Renewing",
    heading: "Be Transformed by the Renewing of Your Mind",
    reference: "Romans 12:2&ndash;3",
    paragraphs: [
      "The living sacrifice of verse 1 is worked out through a deep inward change in verse 2: &ldquo;Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect&rdquo; (12:2). Consecration and transformation belong together; the body given on the altar is matched by the mind made new.",
      "Paul sets two forces in stark contrast. The first is conformity &mdash; the constant pressure of &ldquo;this world,&rdquo; this present age, to press us into its mold. The world has a shape, a set of assumptions about success, pleasure, status, and self, and it squeezes every life toward that pattern. The Christian is commanded to resist this molding, not by retreat, but by an inward transformation that runs deeper than the world&rsquo;s influence.",
      "The word translated &ldquo;transformed&rdquo; is the root of our word metamorphosis &mdash; the same word used of Christ&rsquo;s transfiguration. This is no superficial adjustment of behavior but a profound remaking from the inside. And the engine of that change is &ldquo;the renewal of your mind.&rdquo; God reshapes our lives by reshaping how we think &mdash; our values, our judgments, the whole framework through which we see reality.",
      "The renewed mind has a purpose: &ldquo;that by testing you may discern what is the will of God.&rdquo; A mind soaked in Scripture and surrendered to God gains the capacity to weigh choices and recognize the path that is &ldquo;good and acceptable and perfect.&rdquo; God&rsquo;s will is not chiefly a hidden blueprint to be guessed at but a moral and spiritual wisdom that a transformed person increasingly perceives and loves.",
      "The first application of this renewed mind is sobering humility about ourselves. &ldquo;For by the grace given to me I say to everyone among you not to think of himself more highly than he ought to think, but to think with sober judgment, each according to the measure of faith that God has assigned&rdquo; (12:3). The transformed mind sees itself truthfully, neither inflated by pride nor crushed by false modesty, but measured by faith and grace.",
      "This is the inner battleground of the Christian life. Either the world will press us into its mold, or the Spirit will renew us into the likeness of Christ. The means of grace &mdash; the Word, prayer, the fellowship of the saints &mdash; are the instruments by which our thinking is steadily made new, until we begin to see ourselves, our neighbors, and the will of God with the mind of Christ.",
    ],
  },
  {
    id: "One Body Many Members",
    heading: "One Body, Many Members",
    reference: "Romans 12:4&ndash;8",
    paragraphs: [
      "From the transformed individual Paul turns to the transformed community. The renewed mind that thinks of itself with sober judgment naturally finds its place within the body of Christ. &ldquo;For as in one body we have many members, and the members do not all have the same function, so we, though many, are one body in Christ, and individually members one of another&rdquo; (12:4&ndash;5).",
      "The image of the body, which Paul develops at length in 1 Corinthians 12, appears here in compact form. The church is not a collection of isolated individuals but a single organism, every part joined to the others. We belong not only to Christ the head but to one another. This truth dismantles both the pride that exalts itself above the body and the discouragement that imagines it has nothing to contribute.",
      "Within this one body God has distributed differing gifts: &ldquo;Having gifts that differ according to the grace given to us, let us use them&rdquo; (12:6). The gifts are gifts of grace &mdash; freely given, not earned &mdash; and they differ from member to member precisely so that the body may be whole. Diversity is not a problem to be overcome but God&rsquo;s design for the flourishing of his people.",
      "Paul names a representative list: &ldquo;if prophecy, in proportion to our faith; if service, in our serving; the one who teaches, in his teaching; the one who exhorts, in his exhortation&rdquo; (12:6&ndash;7). Some gifts are visible and verbal, like prophecy and teaching; others are quieter, like service. Each is essential, and each is to be exercised faithfully within the limits and proportion God has assigned.",
      "He continues: &ldquo;the one who contributes, in generosity; the one who leads, with zeal; the one who does acts of mercy, with cheerfulness&rdquo; (12:8). Notice how Paul attaches a spirit to each gift. Generosity is to be open-handed and sincere; leadership diligent and earnest; mercy not grudging but glad. The manner matters as much as the act. A gift used with the wrong spirit fails to build the body in love.",
      "The lesson for every believer is plain. No Christian is gift-less, and no Christian is self-sufficient. The living sacrifice of verse 1 finds concrete expression in the humble, joyful use of our particular gift for the sake of the whole. We are members one of another, and the body grows healthy only when each part does its work.",
    ],
  },
  {
    id: "Let Love Be Genuine",
    heading: "Let Love Be Genuine",
    reference: "Romans 12:9&ndash;16",
    paragraphs: [
      "&ldquo;Let love be genuine&rdquo; (12:9). With these words Paul moves from the gifts of the body to the love that must animate them. The word translated &ldquo;genuine&rdquo; literally means &ldquo;without hypocrisy&rdquo; &mdash; love that wears no mask, free of pretense and self-interest. This is the heading over the rapid-fire commands that follow, a portrait of Christian love in action.",
      "Genuine love is not soft toward sin. &ldquo;Abhor what is evil; hold fast to what is good&rdquo; (12:9). Real love has moral backbone; it recoils from what destroys and clings to what is right. &ldquo;Love one another with brotherly affection. Outdo one another in showing honor&rdquo; (12:10). The Christian community is to be marked by warm, familial tenderness and a holy competition &mdash; not to be honored, but to honor others first.",
      "Paul calls for fervent, untiring devotion: &ldquo;Do not be slothful in zeal, be fervent in spirit, serve the Lord&rdquo; (12:11). The Christian life is to burn, not smolder. And it is sustained by a settled posture toward God in every circumstance: &ldquo;Rejoice in hope, be patient in tribulation, be constant in prayer&rdquo; (12:12) &mdash; three anchors of joy, endurance, and steadfast prayer that hold the soul firm through every season.",
      "Genuine love is practical and open-handed: &ldquo;Contribute to the needs of the saints and seek to show hospitality&rdquo; (12:13). The early church opened its homes and its purses to one another; love that is real meets concrete needs. Paul then stretches love beyond the circle of the church to those who oppose it: &ldquo;Bless those who persecute you; bless and do not curse them&rdquo; (12:14), an unmistakable echo of Jesus on the mountain.",
      "Love also enters fully into the emotional life of others: &ldquo;Rejoice with those who rejoice, weep with those who weep&rdquo; (12:15). This is the costly empathy that refuses to envy another&rsquo;s joy and refuses to stand aloof from another&rsquo;s grief. It binds the body together in shared gladness and shared sorrow, so that no member rejoices or suffers alone.",
      "Finally, genuine love is humble and harmonious: &ldquo;Live in harmony with one another. Do not be haughty, but associate with the lowly. Never be wise in your own sight&rdquo; (12:16). Love crosses the lines of status and rank that the world draws, refusing pride and seeking out the overlooked. Such love is the unmistakable fingerprint of the renewed mind upon the common life of God&rsquo;s people.",
    ],
  },
  {
    id: "Overcome Evil with Good",
    heading: "Overcome Evil with Good",
    reference: "Romans 12:17&ndash;21",
    paragraphs: [
      "The chapter reaches its climax in the hardest of all commands: how to respond to those who wrong us. &ldquo;Repay no one evil for evil, but give thought to do what is honorable in the sight of all&rdquo; (12:17). The instinct of fallen nature is retaliation &mdash; to answer injury with injury. The renewed mind breaks the cycle, refusing to return evil and instead pursuing what is visibly good.",
      "Paul is realistic about how difficult peace can be: &ldquo;If possible, so far as it depends on you, live peaceably with all&rdquo; (12:18). The two qualifications are honest. Peace is not always possible, and it does not always depend on us, for it takes two to be reconciled. But the believer&rsquo;s side of the account must be clear: we are to do everything in our power to be at peace, leaving no offense on our part standing in the way.",
      "Then comes the great release of vengeance into the hands of God: &ldquo;Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, &lsquo;Vengeance is mine, I will repay, says the Lord&rsquo;&rdquo; (12:19). We are not commanded to pretend that wrong does not matter; we are commanded to entrust justice to the One who judges rightly. God&rsquo;s perfect justice frees us from the corrosive burden of settling our own scores.",
      "In place of revenge, Paul commands active kindness toward the enemy: &ldquo;To the contrary, if your enemy is hungry, feed him; if he is thirsty, give him something to drink; for by so doing you will heap burning coals on his head&rdquo; (12:20). The &ldquo;burning coals&rdquo; are most likely the shame that may melt an enemy&rsquo;s hostility and lead him to repentance. Love does not merely refrain from harm; it does positive good to the one who has done us harm.",
      "All of it gathers into the chapter&rsquo;s final, ringing summary: &ldquo;Do not be overcome by evil, but overcome evil with good&rdquo; (12:21). Here is the whole strategy of the Christian against the power of evil. To answer evil with evil is to be conquered by it, to let it reproduce itself in us. To answer evil with good is to defeat it &mdash; the only weapon that can truly break its power.",
      "In this we follow our Lord, who when he was reviled did not revile in return, but prayed for those who crucified him and overcame the world&rsquo;s evil by the good of the cross. The living sacrifice of verse 1 comes to its sharpest point here: a life so transformed by mercy that it can absorb wrong without returning it, and so conquer evil with the relentless goodness of God.",
    ],
  },
];

const videoItems = [
  { videoId: "ej_6dVdJSIU", title: "BibleProject - Book of Romans Overview - Chapters 5-16" },
  { videoId: "Am-fam_BAm0", title: "A Living Sacrifice - Romans 12:1-2 Explained" },
  { videoId: "0Bf4Qm1JzVE", title: "Be Transformed by the Renewing of Your Mind" },
  { videoId: "Cw5SLDLrIvY", title: "Overcome Evil with Good - Loving Your Enemies" },
];

export default function Romans12GuidePage() {
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
            Romans 12
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The turning point of Paul&rsquo;s great letter &mdash; from the mercies of God to the living sacrifice they demand: the renewal of the mind, the gifts of the one body, love without hypocrisy, and the call to overcome evil with good.
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
              Deepen your study of Romans 12 through visual teaching on the living sacrifice, the renewing of the mind, the gifts of the body, genuine love, and the call to overcome evil with good.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Your Spiritual Worship</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Romans 12 turns the whole gospel into a way of life. By the mercies of God we present our bodies as a living sacrifice, we let our minds be made new, we serve in the one body with the gifts of grace, we love without hypocrisy, and we refuse to be conquered by evil &mdash; overcoming it instead with the relentless good of God.
          </p>
        </div>
      </main>
    </div>
  );
}
