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
  "Knowledge and Love",
  "One God, One Lord",
  "The Weaker Brother",
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
    heading: "Food, Freedom, and the Limits of Love",
    reference: "1 Corinthians 8",
    paragraphs: [
      "In 1 Corinthians 8 Paul turns to one of the thorny pastoral questions facing the church at Corinth: food that had been sacrificed to idols. In a city saturated with pagan temples, much of the meat sold in the market and served at social gatherings had first passed through an idol&rsquo;s altar. The Corinthian believers were divided over whether eating such food was permissible, and Paul answers not merely with a ruling but with a principle that reaches to the heart of Christian community.",
      "He opens with a startling reframing: &ldquo;This knowledge puffs up, but love builds up&rdquo; (vv.1&ndash;3). Before he settles the question of the food itself, Paul exposes the deeper issue &mdash; the danger of a knowledge that inflates the ego rather than serving others. The Corinthians who prided themselves on being &ldquo;in the know&rdquo; needed first to learn that love, not information, is the measure of spiritual maturity.",
      "On the matter of the food, Paul grants the theological point: &ldquo;an idol has no real existence,&rdquo; and &ldquo;there is no God but one&rdquo; (vv.4&ndash;6). Because the gods behind the idols are nothing, the food offered to them is in itself spiritually neutral. There is no contamination in the meat, no power in the rite. On the level of bare fact, the &ldquo;strong&rdquo; Corinthians were entirely correct.",
      "Yet Paul immediately complicates the matter: &ldquo;not all possess this knowledge&rdquo; (vv.7&ndash;13). Some believers, recently converted out of pagan idolatry, could not eat such food without their conscience being defiled. To watch a fellow Christian eat in an idol&rsquo;s temple might embolden them to act against their own conscience and so be spiritually wounded &mdash; even destroyed.",
      "The governing principle of the chapter emerges with great force: love limits liberty for the sake of a weaker brother for whom Christ died. Knowledge that is right but loveless can become a stumbling block; freedom exercised without regard for others can wound the very people Christ gave his life to save. Paul will not let the strong hide behind their correct theology while a brother stumbles.",
      "The chapter closes with Paul&rsquo;s own resolve, a model of self-limiting love: &ldquo;If food makes my brother stumble, I will never eat meat, lest I make my brother stumble&rdquo; (v.13). True Christian freedom, Paul insists, is not the unrestricted indulgence of one&rsquo;s rights but the glad willingness to lay them down for the good of another. Liberty finds its fulfillment in love.",
    ],
  },
  {
    id: "Knowledge and Love",
    heading: "Knowledge Puffs Up, but Love Builds Up",
    reference: "1 Corinthians 8:1&ndash;3",
    paragraphs: [
      "&ldquo;Now concerning food offered to idols: we know that all of us possess knowledge&rdquo; (v.1). Paul takes up a question the Corinthians had raised, perhaps quoting back to them their own slogan. They were confident in their grasp of the truth: they knew that idols were empty and that meat was just meat. But Paul refuses to let the discussion rest on the level of who has the correct information. He immediately redirects the whole conversation toward something deeper than knowledge.",
      "&ldquo;This knowledge puffs up, but love builds up&rdquo; (v.1). With a single contrast Paul exposes the spiritual danger lurking behind being right. Knowledge, when divorced from love, inflates the one who holds it; it swells the ego and sets the knower above his neighbor. Love, by contrast, builds &mdash; it constructs and strengthens the community, edifying others rather than exalting the self. The issue at Corinth was never really information; it was whether knowledge would serve love or be used against it.",
      "Paul presses the point with a sober warning: &ldquo;If anyone imagines that he knows something, he does not yet know as he ought to know&rdquo; (v.2). The very confidence that one has arrived at true knowledge can be a sign that one has not. There is a kind of knowing that puffs up precisely because it is shallow, content to be technically correct while remaining blind to the weightier matter of love. Genuine understanding is marked by humility, not by self-assured superiority.",
      "Then Paul lifts the discussion to an entirely different plane: &ldquo;But if anyone loves God, he is known by God&rdquo; (v.3). The decisive thing is not our knowledge of God but God&rsquo;s knowledge of us &mdash; his gracious, electing love that has claimed us as his own. And the mark of those known by God is not that they possess facts but that they love. Love for God, expressing itself in love for neighbor, is the true evidence of belonging to him.",
      "This opening reframing governs everything that follows in the chapter. The Corinthians wanted Paul to adjudicate a question of permissible eating; Paul insists that the prior question is one of the heart. Will their knowledge be wielded as a tool of self-assertion, or will it be governed by love for their fellow believers? The answer to the question about food will turn entirely on the answer to this deeper question about love.",
      "For the church in every age, Paul&rsquo;s words remain searching. It is possible to be doctrinally correct and yet spiritually proud, to win every argument and wound every brother. True knowledge is humble and oriented to the good of others; it seeks not to display itself but to serve. The danger is not in knowing the truth but in loving to be right more than we love the people Christ died to save. Knowledge that does not build up has missed its purpose entirely.",
    ],
  },
  {
    id: "One God, One Lord",
    heading: "One God, One Lord",
    reference: "1 Corinthians 8:4&ndash;6",
    paragraphs: [
      "Having reframed the issue around love, Paul now addresses the substance of the matter directly: &ldquo;Therefore, as to the eating of food offered to idols, we know that an idol has no real existence, and that there is no God but one&rdquo; (v.4). Here Paul affirms the genuine truth the &ldquo;strong&rdquo; Corinthians held. The idol is a lifeless thing, a nothing; behind the carved image stands no real deity. And there is only one God. On these foundational facts the knowledgeable believers were entirely correct.",
      "Paul acknowledges the crowded religious landscape of the ancient world: &ldquo;For although there may be so-called gods in heaven or on earth &mdash; as indeed there are many &lsquo;gods&rsquo; and many &lsquo;lords&rsquo;&rdquo; (v.5). The pagan world teemed with deities and divine titles, temples and cults beyond counting. Paul does not deny that people worshiped many things, nor that spiritual powers stood behind such worship. But these so-called gods have no claim to ultimate reality; they are usurpers, not the living God.",
      "Then comes one of the most profound statements in all of Paul&rsquo;s letters: &ldquo;yet for us there is one God, the Father, from whom are all things and for whom we exist, and one Lord, Jesus Christ, through whom are all things and through whom we exist&rdquo; (v.6). This is a confession of Christian monotheism, almost creedal in its balance and force. For believers there is one God and one Lord, over against the many gods and many lords of the surrounding world.",
      "What is striking is how Paul reshapes the ancient confession of Israel around the Father and the Lord Jesus. The Shema of Deuteronomy declared, &ldquo;The Lord our God, the Lord is one.&rdquo; Paul takes up that sacred confession and unfolds it: the one God is the Father, the source and goal of all things, and the one Lord is Jesus Christ, the agent through whom all things came to be and through whom we live. Christ is placed within the very identity of the one God of Israel.",
      "The phrases trace the whole sweep of creation and redemption. From the Father &ldquo;are all things,&rdquo; and we exist &ldquo;for him&rdquo; &mdash; he is the origin and the end of our being. Through the Lord Jesus Christ &ldquo;are all things,&rdquo; and &ldquo;through whom we exist&rdquo; &mdash; he is the mediator of creation and of our new life. In a single sentence Paul confesses the Father as source and goal, and the Son as the one through whom all is made and remade.",
      "This towering theology grounds Paul&rsquo;s practical point. Because there is only one God and the idols are nothing, the food offered to them is in itself nothing to fear. No spiritual contamination clings to the meat; no rival deity has invested it with power. The &ldquo;strong&rdquo; were right that the food is neutral. Yet this very truth, Paul will show, must be held in love &mdash; for not everyone has so firm a grasp of it, and knowledge alone is never the final word.",
    ],
  },
  {
    id: "The Weaker Brother",
    heading: "The Weaker Brother and the Limits of Liberty",
    reference: "1 Corinthians 8:7&ndash;13",
    paragraphs: [
      "Paul now introduces the crucial qualification: &ldquo;However, not all possess this knowledge. But some, through former association with idols, eat food as really offered to an idol, and their conscience, being weak, is defiled&rdquo; (v.7). Some Corinthian believers had spent their whole lives in pagan worship, and for them the old associations could not simply be switched off. To eat such food still felt, in their conscience, like participating in idolatry &mdash; and so for them it genuinely defiled.",
      "Paul grants that the food itself has no spiritual value either way: &ldquo;Food will not commend us to God. We are no worse off if we do not eat, and no better off if we do&rdquo; (v.8). Eating or abstaining gains us nothing before God; the meat is morally indifferent. This concession seems to favor the strong &mdash; until Paul turns it into a warning. Precisely because the food does not matter to God, there is no good reason to insist on it at a brother&rsquo;s expense.",
      "&ldquo;But take care that this right of yours does not somehow become a stumbling block to the weak&rdquo; (v.9). Here is the hinge of the chapter. The strong have a right, a genuine liberty &mdash; but liberty can become a snare. Paul paints the scene: &ldquo;If anyone sees you who have knowledge eating in an idol&rsquo;s temple, will he not be encouraged, if his conscience is weak, to eat food offered to idols?&rdquo; (v.10). The example of the strong may embolden the weak to act against their own conscience.",
      "The consequence is grave: &ldquo;And so by your knowledge this weak person is destroyed, the brother for whom Christ died&rdquo; (v.11). Paul deliberately sets the cheapness of the stakes &mdash; a piece of meat, a momentary right &mdash; against the infinite cost of the cross. This weak believer is one for whom Christ laid down his life. To wound such a person over a question of food is to trample on the very purpose of the cross, valuing one&rsquo;s liberty above a soul Christ died to redeem.",
      "Paul raises the offense to its highest level: &ldquo;Thus, sinning against your brothers and wounding their conscience when it is weak, you sin against Christ&rdquo; (v.12). To injure a fellow believer is not a minor lapse in etiquette; it is sin against the Lord himself, who so identifies with his people that what is done to them is done to him. The strong cannot retreat behind their correct theology, for their loveless use of knowledge strikes at Christ.",
      "Paul ends with his own resolve, a model of self-limiting love: &ldquo;Therefore, if food makes my brother stumble, I will never eat meat, lest I make my brother stumble&rdquo; (v.13). He is willing to surrender a legitimate right entirely &mdash; not for a moment but for good &mdash; rather than become the occasion of a brother&rsquo;s fall. This is the mark of true Christian freedom: not the unhindered exercise of one&rsquo;s rights, but the glad willingness to lay them down in love for those Christ has redeemed.",
    ],
  },
];

const videoItems = [
  { videoId: "Lx8nR3pK7vM", title: "1 Corinthians 8 - Food Offered to Idols Explained" },
  { videoId: "Cv5tZ2bN9Xw", title: "Knowledge Puffs Up but Love Builds Up" },
  { videoId: "Bq6dH1mP4Ks", title: "One God, One Lord - Christian Monotheism and the Shema" },
  { videoId: "Nz4cV8kR2Tw", title: "The Weaker Brother - When Love Limits Liberty" },
];

export default function FirstCorinthians8GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Epistle Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            1 Corinthians 8
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Paul addresses food sacrificed to idols, teaching that &ldquo;knowledge puffs up, but love builds up.&rdquo; Though an idol is nothing and there is but one God, love must limit liberty for the sake of a weaker brother for whom Christ died.
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
              Deepen your study of 1 Corinthians 8 through visual teaching on food offered to idols, the contrast between knowledge that puffs up and love that builds up, the confession of one God and one Lord, and the self-limiting love that guards a weaker brother.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Love Limits Liberty</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            1 Corinthians 8 holds together right knowledge and self-giving love. Though an idol is nothing and there is but one God and one Lord, Paul insists that the strong must lay down their liberty rather than wound a brother for whom Christ died. True Christian freedom finds its fulfillment not in asserting our rights but in love.
          </p>
        </div>
      </main>
    </div>
  );
}
