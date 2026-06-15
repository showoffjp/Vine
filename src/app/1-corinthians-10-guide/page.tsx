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
  "Overview",
  "Israel as Our Example",
  "Spiritual Food and Rock",
  "Warnings Against Sin",
  "The Way of Escape",
  "Eating and God's Glory",
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
    heading: "Overview of 1 Corinthians 10",
    reference: "1 Corinthians 10:1&ndash;33",
    paragraphs: [
      "First Corinthians 10 is one of the most theologically rich chapters in Paul&rsquo;s letters &mdash; a sustained argument from Israel&rsquo;s wilderness history that addresses a congregation in Corinth tempted toward spiritual overconfidence and cultural accommodation. The Corinthians appear to have reasoned that since they had been baptized and had received the Lord&rsquo;s Supper, they could participate in the idol feasts of their city without spiritual danger. Paul&rsquo;s reply is a masterclass in typological interpretation: he shows that ancient Israel had analogous privileges, and yet the overwhelming majority perished in the wilderness because of their sin.",
      "The chapter moves through several distinct phases. It opens with a typological reading of the Exodus &mdash; all Israel passed through the sea, ate spiritual food, drank from the spiritual Rock that was Christ &mdash; and yet God was not pleased with most of them. These things happened as examples written for our instruction. Paul then catalogs the specific sins that brought Israel down: craving evil things, idolatry, sexual immorality, testing Christ, and grumbling. Each one is a live danger for the Corinthians.",
      "The second major movement of the chapter (vv. 14&ndash;22) addresses the specific question of food offered to idols in the context of idol temple meals. Paul appeals to the theology of the Lord&rsquo;s Supper: participation in the cup and bread is a genuine sharing in the blood and body of Christ, which means it forges a real spiritual bond. By the same logic, participation in the table of demons forges a real bond with them &mdash; and this is something no Christian should seek. You cannot drink the cup of the Lord and the cup of demons.",
      "The third movement (vv. 23&ndash;33) relaxes the restriction to the marketplace and private dinner tables. Meat sold in the market may be eaten without asking questions of conscience; the earth and its fullness belong to the Lord. If you are invited to dinner by an unbeliever, eat whatever is set before you without raising the idol question. But if someone specifically points out that the food was offered to an idol, abstain &mdash; not for your own sake, but for the sake of the one who pointed it out. The governing principle throughout is not personal freedom but the glory of God and the good of others: &ldquo;So, whether you eat or drink, or whatever you do, do all to the glory of God.&rdquo;",
    ],
  },
  {
    id: "Israel as Our Example",
    heading: "Israel as Our Example",
    reference: "1 Corinthians 10:1&ndash;13",
    paragraphs: [
      "Paul opens the chapter with a striking claim: &ldquo;I want you to know, brothers, that our fathers were all under the cloud, and all passed through the sea, and all were baptized into Moses in the cloud and in the sea&rdquo; (10:1&ndash;2). The Gentile believers of Corinth might not have expected to be addressed as having &ldquo;fathers&rdquo; in Israel, but Paul treats the entire history of Israel as the spiritual heritage of the church. The exodus generation was the church in the wilderness, and their story is our story.",
      "The phrase &ldquo;baptized into Moses in the cloud and in the sea&rdquo; is a typological statement of extraordinary boldness. The pillar of cloud and the crossing of the Red Sea were the great acts of divine deliverance that constituted Israel as a people &mdash; and Paul sees in them a pattern that corresponds to Christian baptism. Just as Christians are incorporated into Christ through baptism, Israel was incorporated into the covenant community through these founding events. The corporate identity and spiritual privilege are analogous.",
      "Yet the sober point is that privilege did not guarantee survival. &ldquo;With most of them God was not pleased, for they were overthrown in the wilderness&rdquo; (10:5). Of the roughly 600,000 men who left Egypt, only two &mdash; Caleb and Joshua &mdash; entered the promised land. The rest fell in the wilderness under the judgment of God, not because they lacked the covenant signs or the spiritual provisions, but because of what they did with them. Privilege without faithfulness does not guarantee security.",
      "Paul drives home the application in verse 6: &ldquo;Now these things took place as examples for us, that we might not desire evil as they desired it.&rdquo; The Greek word translated &ldquo;examples&rdquo; is &lsquo;typoi&rsquo; &mdash; types, patterns, prefigurations. The wilderness generation was not simply a historical community whose story happened to end badly; they were a divinely arranged type whose failures were written down precisely to serve as warnings for those living in the last days (10:11). The Bible&rsquo;s history is not merely informative; it is formative.",
      "The four specific sins that Paul lists from Israel&rsquo;s history are not chosen at random. Craving evil things (v. 6) recalls the lustful craving for meat in Numbers 11. Idolatry (v. 7) recalls the golden calf in Exodus 32. Sexual immorality (v. 8) recalls the incident at Baal-Peor in Numbers 25, where 23,000 fell in a single day. Testing Christ (v. 9) recalls Israel&rsquo;s complaints against God in Numbers 21. Grumbling (v. 10) recalls the repeated murmuring that brought death to so many in the wilderness. Each sin is precisely identified with a biblical narrative, each one has a body count attached, and each one is a live danger in Corinth.",
      "The section closes with a warning and a promise held together in careful balance. The warning: &ldquo;Therefore let anyone who thinks that he stands take heed lest he fall&rdquo; (10:12). Spiritual confidence that shades into presumption is itself a form of danger. But the promise follows immediately: &ldquo;No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it&rdquo; (10:13). The God who judges sin is also the God who provides escape from it.",
    ],
  },
  {
    id: "Spiritual Food and Rock",
    heading: "Spiritual Food and the Spiritual Rock",
    reference: "1 Corinthians 10:3&ndash;4",
    paragraphs: [
      "At the heart of Paul&rsquo;s typological reading of the Exodus is a remarkable claim about the spiritual provisions that sustained Israel in the wilderness. &ldquo;All ate the same spiritual food, and all drank the same spiritual drink. For they drank from the spiritual Rock that followed them, and the Rock was Christ&rdquo; (10:3&ndash;4). Paul does not use the word &ldquo;spiritual&rdquo; to mean insubstantial or merely symbolic; he uses it to indicate that these physical realities &mdash; the manna from heaven, the water from the rock &mdash; were also vehicles of genuine divine provision, connected to the presence and grace of God.",
      "The manna &mdash; the bread from heaven that fell each morning in the wilderness &mdash; was the daily sustenance of Israel for forty years. It could not be stored; it arrived fresh each day (except for the Sabbath provision). It was a lesson in daily dependence on God, the food of the covenant community that kept them alive through the barrenness of the desert. When Jesus describes himself as the true bread from heaven in John 6, he is claiming to be the substance that the manna was the shadow of.",
      "The water from the rock is even more striking in Paul&rsquo;s reading. The most natural referent is the incident at Horeb in Exodus 17, where Moses strikes the rock and water flows from it, and/or the incident at Kadesh in Numbers 20 where Moses speaks to the rock. Jewish tradition had developed a legend that the rock actually traveled with Israel through the wilderness, providing water at each stopping place. Paul may be engaging with this tradition, or he may be making the more theological point that the same divine source of spiritual drink was present throughout the wilderness period.",
      "The most theologically stunning assertion is the identification: &ldquo;the Rock was Christ.&rdquo; Paul is not merely saying that Christ was prefigured by the rock; he is saying that the preexistent Christ was the divine presence that was providing for Israel all along. The angel of the Lord who accompanied Israel through the wilderness, the pillar of cloud and fire, the voice that spoke from Sinai &mdash; Paul sees in all of these the active ministry of the one who would in the fullness of time take on human flesh. The Son of God was present and active in the redemption of Israel from Egypt.",
      "The implication for the Corinthians is pointed. They too have spiritual food &mdash; the bread of the Lord&rsquo;s table &mdash; and spiritual drink &mdash; the cup of the Lord. Their sacramental participation in the body and blood of Christ is analogous to Israel&rsquo;s eating of the manna and drinking from the rock. But Israel&rsquo;s story shows that receiving spiritual food and drink does not automatically protect against the consequences of sin. The provisions are genuine, and so are the dangers. The Rock that provides is also the Rock against which the disobedient stumble.",
    ],
  },
  {
    id: "Warnings Against Sin",
    heading: "Warnings Against Specific Sins",
    reference: "1 Corinthians 10:6&ndash;12",
    paragraphs: [
      "Paul does not give general warnings about sin in the abstract; he names specific sins from Israel&rsquo;s history and applies them with precision to the situation in Corinth. The first is craving evil things (v. 6), recalling Israel&rsquo;s lustful desire for meat in the wilderness (Numbers 11). The people wept and complained that they had only manna, remembering the fish and vegetables of Egypt. In their ingratitude for God&rsquo;s provision they craved what God had not given them, and the judgment was severe. The application to Corinthians craving the social pleasures of idol feasts is unmistakable.",
      "The second warning is against idolatry (v. 7), illustrated by the golden calf of Exodus 32: &ldquo;The people sat down to eat and drink and rose up to play.&rdquo; The quotation is deliberate &mdash; the same combination of eating, drinking, and festive celebration that characterized the golden calf worship is present in the Corinthian idol feasts. Paul is suggesting that the structural parallel between the two situations is dangerously close. What Israel did at the foot of Sinai with a golden calf, the Corinthians risk doing in the dining rooms of the city&rsquo;s idol temples.",
      "The third warning is against sexual immorality (v. 8), with the sobering notation that &ldquo;twenty-three thousand fell in a single day.&rdquo; The incident at Baal-Peor (Numbers 25) involved both sexual immorality and idolatry &mdash; the men of Israel yoked themselves to Baal and committed sexual sin with Moabite women at the same time. The two sins traveled together then as they traveled together in Corinth, where the idol temples were also often associated with sexual immorality. Paul&rsquo;s number (23,000) differs slightly from Moses&rsquo; (24,000 in Numbers 25), perhaps counting those who died in one day rather than the total.",
      "The fourth warning is against testing Christ (v. 9), recalling the serpent plague of Numbers 21, when Israel spoke against God and Moses and was judged with venomous snakes. To &ldquo;test Christ&rdquo; is to push against the limits of his patience and grace, to behave in ways that presume upon his forbearance &mdash; to reason, as the Corinthians seemed to, that spiritual privilege confers immunity from consequence. The use of &ldquo;Christ&rdquo; here (rather than &ldquo;God&rdquo; or &ldquo;the Lord&rdquo; as in Numbers) is another assertion that the preexistent Christ was present in the wilderness and was the one being tested.",
      "The fifth warning is against grumbling (v. 10), with the warning that the destroyer was at work in Israel&rsquo;s repeated complaints. The habit of murmuring against God and his appointed leaders runs throughout the wilderness narratives and consistently brings judgment. In Corinth the spirit of criticism and complaint manifested itself in the divisions and party spirit that Paul has been addressing throughout the letter. Grumbling is not a minor personality flaw; in the wilderness it was a deadly sin, and Paul treats it as no less serious a danger in Corinth.",
      "The section concludes with its crucial hermeneutical claim: &ldquo;These things happened to them as an example, but they were written down for our instruction, on whom the end of the ages has come&rdquo; (10:11). The history of Israel was not simply the history of one nation; it was the divinely inspired preparation for the age of the Messiah. Those living in the last days &mdash; the period between Christ&rsquo;s first and second coming &mdash; have the completed canon of Scripture, including the wilderness narratives, precisely so that they can learn from Israel&rsquo;s failures and navigate their own temptations with wisdom. The warning is addressed to us.",
    ],
  },
  {
    id: "The Way of Escape",
    heading: "The Way of Escape from Temptation",
    reference: "1 Corinthians 10:13",
    paragraphs: [
      "Verse 13 is one of the most comforting and steadying promises in all of Paul&rsquo;s letters, set in the middle of a passage full of warnings: &ldquo;No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it.&rdquo; After cataloging five specific sins that destroyed thousands in the wilderness, Paul does not leave his readers paralyzed by fear. He points them to the faithfulness of God as the ground of their confidence.",
      "The first assurance is that no temptation is unique or unprecedented: all temptation is &ldquo;common to man,&rdquo; meaning it belongs to the shared human experience. The Corinthians might have felt that their situation was uniquely difficult &mdash; surrounded by a culture saturated with idol worship, invited to feasts they could not easily refuse, navigating complex social obligations. Paul acknowledges the difficulty while insisting that there is nothing in their situation that has not been faced and overcome by others. The temptation is human-scale.",
      "The second assurance is the faithfulness of God. The promise does not rest on the strength of the one being tempted but on the character of God. &ldquo;God is faithful&rdquo; &mdash; this is a statement about who God is, not primarily about what he does. Because he is faithful, what follows can be trusted: he will not permit the temptation to exceed the capacity to bear it. The measure of the temptation is calibrated to the measure of the person facing it, and God is the one holding the calibration.",
      "The phrase &ldquo;the way of escape&rdquo; does not imply that there will always be a painless or comfortable exit from the situation of temptation. The Greek word &lsquo;ekbasis&rsquo; can refer to the outcome or exit of any situation. Sometimes the way of escape is a literal means of avoiding the temptation; sometimes it is the endurance to persevere through it. Paul says &ldquo;that you may be able to endure it&rdquo; &mdash; suggesting that the escape is often the capacity to bear the temptation without yielding to it, not necessarily the removal of the tempting situation.",
      "The practical implication for the question of idol feasts is clear enough: if you are tempted to participate in the idol temple meals, flee (v. 14 immediately follows with &ldquo;Therefore, my beloved, flee from idolatry&rdquo;). The way of escape from the temptation of idolatry is not to negotiate with it but to run from it. The promise of verse 13 is not an invitation to linger in tempting situations in the confidence that God will always pull you out; it is the assurance that when you are hemmed in, God is faithful to provide what you need to honor him.",
      "The theological weight of this verse also bears on the question of sin and accountability. If God always provides a way of escape, then those who fall into the sins Paul has been describing &mdash; idolatry, sexual immorality, testing Christ, grumbling &mdash; cannot claim that they were simply overpowered by an irresistible force. The promise of a way of escape means that sin is always a choice, that faithfulness is always possible, and that God&rsquo;s people are genuinely responsible for the decisions they make. Verse 13 is both a comfort and a rebuke of excuse-making.",
    ],
  },
  {
    id: "Eating and God's Glory",
    heading: "Eating, Idols, and the Glory of God",
    reference: "1 Corinthians 10:14&ndash;33",
    paragraphs: [
      "After the promise of verse 13, Paul returns to the specific Corinthian problem with a direct command: &ldquo;Therefore, my beloved, flee from idolatry&rdquo; (10:14). The word &ldquo;flee&rdquo; is the same word used in Genesis of Joseph running from Potiphar&rsquo;s wife &mdash; not a careful deliberation about appropriate distance, but a decisive, urgent departure. There are some situations from which the appropriate response is not measured engagement but rapid retreat.",
      "Paul then makes a theological argument from the Lord&rsquo;s Supper to explain why participation in idol feasts is categorically different from eating ordinary food (10:15&ndash;22). The cup of blessing that we bless, he says, is a sharing in the blood of Christ; the bread that we break is a sharing in the body of Christ. The Greek word &lsquo;koinonia&rsquo; &mdash; sharing or participation &mdash; denotes a real union, not merely a memorial or a symbol. When Christians eat the Lord&rsquo;s Supper together, they are genuinely participating in Christ and forming a genuine community with one another: &ldquo;Because there is one bread, we who are many are one body, for we all partake of the one bread&rdquo; (10:17).",
      "The sacrificial context of Old Testament Israel further illustrates the principle: those who eat the sacrifices are partners in the altar (10:18). Eating and communion are inseparable realities in the biblical world. This is not a principle that Paul invented; it is a principle built into the structure of sacrifice and covenant meals throughout the Old Testament. The question, then, is not whether participation in an idol feast forges a real bond, but what kind of bond &mdash; and the answer is devastating: &ldquo;what pagans sacrifice they offer to demons and not to God&rdquo; (10:20). The idol is nothing, but behind the idol is a demonic reality, and to sit at that table is to have communion with demons.",
      "The application to the broader question of food sold in the market is more relaxed (10:23&ndash;26). The earth is the Lord&rsquo;s and everything in it &mdash; quoting Psalm 24:1. Meat that passes through an idol temple on the way to the butcher shop does not retain a demonic taint; it belongs to the Lord&rsquo;s creation and may be eaten with thanksgiving. The believer is not required to investigate the provenance of every piece of meat in the market. The idol is nothing; the food is food; the earth is the Lord&rsquo;s.",
      "The guidance for private dinner parties is similarly practical (10:27&ndash;29). If an unbelieving neighbor invites you to dinner, go and eat whatever is set before you without asking questions of conscience. But if someone at the table says, &ldquo;This has been offered in sacrifice,&rdquo; then do not eat it &mdash; not for your own sake, since you know the idol is nothing, but for the sake of the conscience of the one who told you. The act of abstaining in that situation is a pastoral act toward someone who may be watching to see whether following Jesus means anything.",
      "The chapter closes with the grand principle that governs all of this: &ldquo;So, whether you eat or drink, or whatever you do, do all to the glory of God. Give no offense to Jews or to Greeks or to the church of God, just as I try to please everyone in everything I do, not seeking my own advantage, but that of many, that they may be saved&rdquo; (10:31&ndash;33). The freedom of the Christian is not freedom from concern for others; it is freedom from self-seeking that becomes the engine of concern for others. Paul holds himself up as the model: he became all things to all men not for his own convenience but so that by all means some might be saved. Everything &mdash; eating, drinking, every ordinary act of life &mdash; can and should be an act of worship and witness when it is done to the glory of God.",
    ],
  },
];

const videoItems = [
  { videoId: "1Cor10AbCdEfG", title: "1 Corinthians 10 - Israel's Example and Idolatry - Bible Study" },
  { videoId: "1Cor10HiJkLmN", title: "Flee Idolatry - The Cup of the Lord vs. the Cup of Demons" },
  { videoId: "1Cor10OpQrStU", title: "The Way of Escape - 1 Corinthians 10:13 Explained" },
  { videoId: "1Cor10VwXyZaB", title: "Do All to the Glory of God - 1 Corinthians 10 Deep Dive" },
];

export default function Corinthians10GuidePage() {
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
            1 Corinthians 10 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Warnings from Israel&rsquo;s history &mdash; all Israel passed through the sea and ate spiritual food, drinking from the spiritual Rock that was Christ, yet most fell in the wilderness. These things are written as examples for us: flee idolatry, avoid the sins that destroyed thousands, trust God&rsquo;s faithful provision of a way of escape, and do all things to the glory of God.
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

        {currentSection && activeTab !== "Videos" && (
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
              Deepen your study of 1 Corinthians 10 through these video teachings on Israel&rsquo;s wilderness failures as examples for us, the spiritual Rock that was Christ, fleeing idolatry, the faithful way of escape, and doing all things to the glory of God.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Do All to the Glory of God</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Corinthians 10 calls us to learn from Israel&rsquo;s failures, to flee idolatry with the urgency of those who know what it cost their ancestors, to trust the faithfulness of God who always provides a way of escape, and to order every ordinary act of life &mdash; every meal, every social decision, every use of freedom &mdash; toward the glory of God and the good of those around us.
          </p>
        </div>
      </main>
    </div>
  );
}
