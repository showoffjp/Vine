"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference?: string;
  accent: string;
  paragraphs: string[];
}

const overviewBlocks: Block[] = [
  {
    heading: "Grace to the Church of God in Corinth",
    reference: "1 Corinthians 1:1&ndash;9",
    accent: PURPLE,
    paragraphs: [
      "Paul opens his letter by identifying himself as one &ldquo;called by the will of God to be an apostle of Christ Jesus,&rdquo; joined by Sosthenes, and he addresses the recipients as &ldquo;the church of God that is in Corinth, to those sanctified in Christ Jesus, called to be saints.&rdquo; From the very first words Paul grounds the Corinthians&rsquo; identity not in their gifts, their teachers, or their accomplishments, but in the calling and sanctifying work of God. They are holy ones not because of what they have achieved but because of the One who has set them apart.",
      "The greeting &ldquo;grace to you and peace from God our Father and the Lord Jesus Christ&rdquo; is more than a formality. Grace (charis) and peace (eirene) are the twin headwaters of the entire Christian life, the unmerited favor of God flowing into the reconciled wholeness that favor produces. Paul will spend the rest of the letter correcting a church that has drifted from these foundations, and so he names them at the outset as the gifts they already possess in Christ.",
      "Paul then gives thanks for the grace given to the Corinthians, noting that they were &ldquo;enriched in him in all speech and all knowledge,&rdquo; and that they are &ldquo;not lacking in any gift, as you wait for the revealing of our Lord Jesus Christ.&rdquo; This thanksgiving is striking precisely because the Corinthians&rsquo; gifts of speech and knowledge will turn out to be the very things they have abused. Paul affirms the genuine grace at work in them even as he prepares to confront how that grace has been distorted.",
      "The opening crescendos with a promise of perseverance: God &ldquo;will sustain you to the end, guiltless in the day of our Lord Jesus Christ. God is faithful, by whom you were called into the fellowship of his Son.&rdquo; The security of the Corinthians rests on the faithfulness of God, not on their own consistency. This eschatological horizon &mdash; the waiting for the day of the Lord &mdash; frames everything that follows, for a church oriented to that day will not exhaust itself in petty rivalries over human teachers.",
    ],
  },
  {
    heading: "The Appeal for Unity and the Folly of Factions",
    reference: "1 Corinthians 1:10&ndash;17",
    accent: TEAL,
    paragraphs: [
      "Having affirmed the grace at work among them, Paul turns immediately to the wound that has prompted the letter: &ldquo;I appeal to you, brothers, by the name of our Lord Jesus Christ, that all of you agree, and that there be no divisions among you.&rdquo; Word had reached him through Chloe&rsquo;s people that there was quarreling in the church. The community that had been called into the fellowship of God&rsquo;s Son was fracturing into competing camps.",
      "The slogans Paul reports are famous: &ldquo;I follow Paul,&rdquo; &ldquo;I follow Apollos,&rdquo; &ldquo;I follow Cephas,&rdquo; &ldquo;I follow Christ.&rdquo; The Corinthians had taken the genuine ministers God had sent them and turned them into banners for partisan loyalty. Paul exposes the absurdity with three piercing questions: &ldquo;Is Christ divided? Was Paul crucified for you? Or were you baptized in the name of Paul?&rdquo; The very framing collapses under its own weight, for no human teacher was crucified for them and no human name was invoked over their baptism.",
      "Paul then makes a surprising admission: he is thankful that he baptized only a few among them &mdash; Crispus, Gaius, and the household of Stephanas &mdash; &ldquo;so that no one may say that you were baptized in my name.&rdquo; This is not a diminishing of baptism but a refusal to let his own person become a rallying point. The minister who insists on his own indispensability feeds the very factionalism the gospel destroys.",
      "The section closes with a programmatic statement that launches the great argument of the chapter: &ldquo;For Christ did not send me to baptize but to preach the gospel, and not with words of eloquent wisdom, lest the cross of Christ be emptied of its power.&rdquo; Here Paul names the deepest issue beneath the Corinthian divisions. Their fascination with eloquence and human wisdom was not a harmless cultural preference; it threatened to hollow out the cross itself. The remainder of the chapter unfolds why.",
    ],
  },
  {
    heading: "The Word of the Cross: Folly and Power",
    reference: "1 Corinthians 1:18&ndash;25",
    accent: ROSE,
    paragraphs: [
      "&ldquo;For the word of the cross is folly to those who are perishing, but to us who are being saved it is the power of God.&rdquo; This single sentence is the thesis of the entire passage. The same message divides humanity into two groups, not by intelligence or social standing, but by whether they are perishing or being saved. To one group the cross is moria, sheer foolishness; to the other it is dynamis, the very power of God unleashed for salvation.",
      "Paul reinforces the point with Isaiah 29:14: &ldquo;I will destroy the wisdom of the wise, and the discernment of the discerning I will thwart.&rdquo; God has not merely offered an alternative to human wisdom; he has set out to dismantle it. He then presses with a barrage of questions drawn from the prophets: &ldquo;Where is the one who is wise? Where is the scribe? Where is the debater of this age? Has not God made foolish the wisdom of the world?&rdquo; The sages, scholars, and skilled arguers of the age are left with nothing to say before the cross.",
      "The reason is profound: &ldquo;Since, in the wisdom of God, the world did not know God through wisdom, it pleased God through the folly of what we preach to save those who believe.&rdquo; Human wisdom, left to itself, could not reach God. So God chose to save not through what the world esteems as clever but through the proclaimed message it dismisses as foolish. The very means of salvation is calibrated to overthrow human pride.",
      "Paul then names the two great cultural appetites of his world: &ldquo;Jews demand signs and Greeks seek wisdom, but we preach Christ crucified, a stumbling block to Jews and folly to Gentiles.&rdquo; To the Jew, a crucified Messiah was a skandalon, an offense, for the Law pronounced a curse on anyone hanged on a tree. To the Greek, the notion that the divine would suffer the shameful death of a slave was simply absurd. Yet &ldquo;to those who are called, both Jews and Greeks, Christ the power of God and the wisdom of God.&rdquo; The crucified Christ is not a problem to be explained away but the very wisdom and power of God in person. And so Paul lands the paradox: &ldquo;the foolishness of God is wiser than men, and the weakness of God is stronger than men.&rdquo;",
    ],
  },
  {
    heading: "God Chose the Weak to Shame the Strong",
    reference: "1 Corinthians 1:26&ndash;31",
    accent: GOLD,
    paragraphs: [
      "Paul now turns from the message to the messengers&rsquo; audience: &ldquo;Consider your calling, brothers: not many of you were wise according to worldly standards, not many were powerful, not many were of noble birth.&rdquo; The composition of the Corinthian church is itself a sermon. God did not assemble a congregation of the elite, but drew in the ordinary and the overlooked, demonstrating in the very membership of the church the pattern of the cross.",
      "The divine strategy is then stated in deliberate, escalating terms: &ldquo;God chose what is foolish in the world to shame the wise; God chose what is weak in the world to shame the strong; God chose what is low and despised in the world, even things that are not, to bring to nothing things that are.&rdquo; The categories rise from the foolish to the weak to the despised and finally to the things that &ldquo;are not&rdquo; &mdash; the nobodies of the world. God deliberately selects what the age counts as nothing in order to dethrone what it counts as everything.",
      "The purpose is unmistakable: &ldquo;so that no human being might boast in the presence of God.&rdquo; This is the theological heart of the whole chapter. The entire architecture of salvation &mdash; the foolish message, the weak Savior, the despised church &mdash; is designed to strip humanity of every ground for self-congratulation before God. Boasting is the native language of fallen humanity, and the cross silences it.",
      "Paul then names the positive reality that replaces boasting: &ldquo;And because of him you are in Christ Jesus, who became to us wisdom from God, righteousness and sanctification and redemption.&rdquo; Everything the Corinthians were tempted to seek through human teachers and worldly wisdom is found in Christ himself. He is our wisdom, our righteousness before God, our ongoing sanctification, and our final redemption. The chapter closes by quoting Jeremiah 9:24: &ldquo;Let the one who boasts, boast in the Lord.&rdquo; The only boasting left to the believer is boasting in another &mdash; in the crucified Lord who is himself our all.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "Unity in Christ Versus Factionalism",
    accent: TEAL,
    paragraphs: [
      "The presenting problem of 1 Corinthians 1 is division. A church called into &ldquo;the fellowship of his Son&rdquo; had fractured into parties named after their favorite teachers. Paul&rsquo;s response is not to crown a winning faction but to dissolve the entire framework: no human teacher was crucified for them, and none was named over their baptism. Christian unity is not a strategic alliance among preferences; it is the necessary corollary of belonging to one undivided Christ.",
      "Factionalism in Corinth was fueled by a culture that prized celebrity orators and ranked them like competing schools of philosophy. The church had simply baptized this worldly habit, attaching spiritual loyalty to rhetorical taste. Paul exposes how thoroughly this betrays the gospel, for it makes the cross a matter of party slogans rather than the shared ground on which all believers stand together as equals before God.",
      "The remedy Paul offers is not enforced uniformity but a reorientation toward the cross. When the cross stands at the center, the question &ldquo;whose follower are you?&rdquo; becomes incoherent, for all are followers of the one Lord who died for them. The church finds its unity not by suppressing difference but by recognizing that every member has been bought by the same blood and indwelt by the same Spirit.",
    ],
  },
  {
    heading: "The Word of the Cross and the Theology of the Cross",
    accent: ROSE,
    paragraphs: [
      "The phrase &ldquo;the word of the cross&rdquo; (logos tou staurou) names the central scandal and glory of the Christian message. The cross is not a tragic backdrop to a more respectable gospel of moral teaching or spiritual ascent; it is the gospel. To proclaim Christ is to proclaim Christ crucified, and any message that quietly sets the cross aside in favor of more palatable themes has emptied the gospel of its power.",
      "This passage gave rise to what Martin Luther called the theologia crucis, the theology of the cross, set against the theologia gloriae, the theology of glory. The theologian of glory expects to find God in strength, success, wisdom, and visible triumph. The theologian of the cross learns to find God precisely where the world would never look &mdash; in suffering, weakness, shame, and apparent defeat. God reveals himself sub contrario, under the appearance of the opposite, hidden in the crucified Christ.",
      "The implication is that the church must continually resist dressing the cross in the borrowed robes of cultural respectability. Whenever the people of God begin to measure their ministry by eloquence, influence, or impressiveness, they drift toward a theology of glory that the cross condemns. The word of the cross remains stubbornly foolish to the world, and its power is found only by those willing to be counted foolish with it.",
    ],
  },
  {
    heading: "The Foolishness and Weakness of God",
    accent: GOLD,
    paragraphs: [
      "Paul&rsquo;s most arresting paradox is that &ldquo;the foolishness of God is wiser than men, and the weakness of God is stronger than men.&rdquo; This is not a claim that God is actually foolish or weak. It is a claim that what appears as folly and weakness to the world &mdash; a crucified Messiah &mdash; surpasses every height of human wisdom and every exertion of human power. The cross redefines what wisdom and strength even mean.",
      "To the Greek mind, wisdom (sophia) was the supreme good, the path to the divine and to human flourishing. To the Jewish mind, signs of power were the expected credentials of God&rsquo;s anointed. Christ crucified affronts both: he offers no philosophical system and no display of conquering might, but a bleeding body on a Roman gibbet. And yet in that very weakness God accomplished what all the wisdom and power of the age could never achieve &mdash; the reconciliation of the world to himself.",
      "This theme dismantles the human instinct to approach God on the basis of accumulated wisdom or demonstrated strength. The God who saves through apparent folly cannot be impressed by human cleverness, and the God who saves through apparent weakness cannot be coerced by human force. He meets us only at the foot of the cross, where every pretension to wisdom and power is laid down.",
    ],
  },
  {
    heading: "Christ Our Wisdom, Righteousness, Sanctification, Redemption",
    accent: PURPLE,
    paragraphs: [
      "The chapter&rsquo;s positive summit is the declaration that Christ Jesus &ldquo;became to us wisdom from God, righteousness and sanctification and redemption.&rdquo; Against a church chasing wisdom through human teachers, Paul insists that true wisdom is a person. Christ does not merely give us wisdom; he is our wisdom, the very embodiment of God&rsquo;s saving purpose.",
      "The three terms that follow trace the sweep of salvation. Righteousness (dikaiosyne) is our right standing before God, accomplished by Christ and reckoned to us by faith. Sanctification (hagiasmos) is our being set apart as holy and progressively conformed to him. Redemption (apolytrosis) is our final liberation, the full and consummated freedom that will be ours at the day of the Lord. In Christ, the believer possesses the beginning, the middle, and the end of salvation.",
      "Because all of this is found in Christ rather than achieved by us, the only fitting response is to &ldquo;boast in the Lord.&rdquo; The Corinthians wanted something to boast in &mdash; their wisdom, their gifts, their teachers. Paul redirects all boasting to its only legitimate object. Christian boasting is not the abolition of boasting but its transfer to another, to the crucified and risen Lord who is himself our every spiritual treasure.",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "Verses 1 to 9: Called, Enriched, and Kept",
    reference: "1 Corinthians 1:1&ndash;9",
    accent: PURPLE,
    paragraphs: [
      "Verses 1 through 3 form the salutation. Paul is &ldquo;called&rdquo; to be an apostle by the will of God, and the Corinthians are &ldquo;called to be saints&rdquo; &mdash; the same calling that constitutes the church everywhere who &ldquo;call upon the name of our Lord Jesus Christ.&rdquo; The repeated language of calling roots their identity entirely in God&rsquo;s initiative. The greeting of grace and peace from the Father and the Lord Jesus Christ places the Son alongside the Father as the shared source of divine blessing.",
      "Verses 4 through 7 record Paul&rsquo;s thanksgiving. He gives thanks &ldquo;because of the grace of God that was given you in Christ Jesus,&rdquo; noting that they were enriched &ldquo;in all speech and all knowledge&rdquo; as the testimony about Christ was confirmed among them. Consequently they are &ldquo;not lacking in any gift.&rdquo; The irony is deliberate: the speech, knowledge, and gifts Paul celebrates are precisely the arenas where the Corinthians have stumbled, yet Paul honors the grace beneath them.",
      "Verses 8 and 9 anchor everything in God&rsquo;s faithfulness. Christ &ldquo;will sustain you to the end, guiltless in the day of our Lord Jesus Christ.&rdquo; Their final standing depends not on their performance but on his sustaining grace. The capstone is verse 9: &ldquo;God is faithful, by whom you were called into the fellowship of his Son, Jesus Christ our Lord.&rdquo; This word &ldquo;fellowship&rdquo; (koinonia) quietly indicts the divisions Paul is about to confront.",
    ],
  },
  {
    heading: "Verses 10 to 17: Divisions and the Cross",
    reference: "1 Corinthians 1:10&ndash;17",
    accent: TEAL,
    paragraphs: [
      "Verse 10 is the formal appeal: that they &ldquo;agree&rdquo; and be &ldquo;united in the same mind and the same judgment,&rdquo; with no divisions. The Greek word behind &ldquo;divisions&rdquo; (schismata) pictures tears in a garment. Verses 11 and 12 report the source &mdash; Chloe&rsquo;s people &mdash; and the slogans: Paul, Apollos, Cephas, and even &ldquo;I follow Christ,&rdquo; which may itself have been a faction that used Christ as a party banner against the others.",
      "Verses 13 through 16 demolish the slogans with rhetorical questions. &ldquo;Is Christ divided? Was Paul crucified for you? Or were you baptized in the name of Paul?&rdquo; Paul is relieved he baptized so few &mdash; only Crispus, Gaius, and the household of Stephanas &mdash; lest anyone claim allegiance to him through baptism. He even adds that he cannot remember whether he baptized anyone else, underscoring how little importance he attaches to being a personal figurehead.",
      "Verse 17 is the hinge of the chapter: &ldquo;Christ did not send me to baptize but to preach the gospel, and not with words of eloquent wisdom, lest the cross of Christ be emptied of its power.&rdquo; Paul subordinates even baptism to proclamation, and subordinates eloquence to the integrity of the cross. The phrase &ldquo;emptied of its power&rdquo; warns that a gospel decorated with human rhetoric becomes a hollow shell, a cross drained of the very force that makes it saving.",
    ],
  },
  {
    heading: "Verses 18 to 25: Two Destinies, One Message",
    reference: "1 Corinthians 1:18&ndash;25",
    accent: ROSE,
    paragraphs: [
      "Verse 18 states the dividing line: the word of the cross is &ldquo;folly to those who are perishing&rdquo; but &ldquo;the power of God&rdquo; to those being saved. Verse 19 grounds this in Isaiah 29:14, where God promises to destroy the wisdom of the wise. Verse 20 fires off the prophetic questions &mdash; where is the wise one, the scribe, the debater? &mdash; concluding that God has made the wisdom of the world foolish.",
      "Verse 21 explains the divine logic: because the world in its wisdom did not come to know God, &ldquo;it pleased God through the folly of what we preach to save those who believe.&rdquo; The failure of human wisdom is the backdrop against which the wisdom of God in the cross shines. Verses 22 and 23 name the two stumbling points: Jews demand signs, Greeks seek wisdom, but Paul preaches Christ crucified &mdash; a skandalon to Jews and moria to Gentiles.",
      "Verses 24 and 25 turn the corner. To the called, whether Jew or Greek, this crucified Christ is &ldquo;the power of God and the wisdom of God.&rdquo; The categories of sign and wisdom are not rejected but fulfilled in Christ in a way no one expected. The summary in verse 25 crowns the argument: God&rsquo;s foolishness is wiser than human wisdom, and his weakness stronger than human strength.",
    ],
  },
  {
    heading: "Verses 26 to 31: The Calling That Silences Boasting",
    reference: "1 Corinthians 1:26&ndash;31",
    accent: GOLD,
    paragraphs: [
      "Verse 26 invites the Corinthians to look at themselves: not many wise, powerful, or well-born were among them. The makeup of the church embodies the gospel it proclaims. Verses 27 and 28 lay out the threefold divine choosing &mdash; the foolish to shame the wise, the weak to shame the strong, and the low and despised, even &ldquo;things that are not,&rdquo; to nullify the things that are.",
      "Verse 29 states the goal with stark clarity: &ldquo;so that no human being might boast in the presence of God.&rdquo; The whole strategy of choosing the unimpressive is aimed at the human heart&rsquo;s addiction to self-glory. Verse 30 then declares the source of the believer&rsquo;s entire existence: &ldquo;because of him you are in Christ Jesus, who became to us wisdom from God, righteousness and sanctification and redemption.&rdquo;",
      "Verse 31 seals the chapter with Jeremiah 9:24: &ldquo;Let the one who boasts, boast in the Lord.&rdquo; Paul does not abolish the impulse to boast; he redirects it. The cross strips away every ground of confidence in self and gives back a single, inexhaustible ground of confidence in Christ. The believer who has nothing to boast of in himself has everything to boast of in his Lord.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "Examine Your Loyalties",
    accent: TEAL,
    paragraphs: [
      "The Corinthian slogans have modern equivalents. We attach ourselves to favorite preachers, ministries, traditions, and platforms, and we let those attachments harden into rivalry and pride. First Corinthians 1 asks us whether our loyalties unite us to Christ and his whole people or whether they have quietly become party banners that wound the body of Christ.",
      "Healthy gratitude for a teacher who has helped us becomes corrosive when it curdles into contempt for those who follow another. Paul models a different posture: he refuses to let his own person become a rallying point and points relentlessly away from himself to the crucified Christ. The leaders who most resemble Paul are those who decrease so that Christ may increase.",
    ],
  },
  {
    heading: "Embrace the Folly of the Cross",
    accent: ROSE,
    paragraphs: [
      "We are tempted in every age to make the gospel more respectable, to trim away its scandal so that it might win the approval of the wise and powerful. First Corinthians 1 warns that a cross adapted to the tastes of the age is a cross emptied of its power. The call is to hold the offensive, foolish word of the cross without apology, trusting that God&rsquo;s power works precisely through what the world despises.",
      "This reshapes how we evaluate ministry and our own spiritual life. We are prone to measure success by visible strength, impressive numbers, and cultural influence. The theology of the cross teaches us to look for God in weakness, in hidden faithfulness, and in suffering endured for his sake, where his power is most surprisingly at work.",
    ],
  },
  {
    heading: "Boast Only in the Lord",
    accent: GOLD,
    paragraphs: [
      "Because God chose the weak and despised so that no one might boast before him, the Christian life is one of dismantled self-glory. Every gift, every insight, every spiritual achievement is grace, and grace by definition leaves no room for boasting in self. To live in light of 1 Corinthians 1 is to receive everything as gift and to return all glory to the Giver.",
      "Christ has become our wisdom, righteousness, sanctification, and redemption. This means our deepest needs are met not in what we accumulate but in the One to whom we belong. When we are tempted to find our worth in our cleverness, our morality, or our reputation, the gospel redirects us to boast in the Lord alone, in whom we are complete.",
    ],
  },
];

const reflectionQuestions = [
  "Where in your own heart do you sense the pull toward factionalism &mdash; attaching your loyalty to a leader, tradition, or platform in a way that divides rather than unites the body of Christ?",
  "In what ways are you tempted to make the message of the cross more respectable or impressive to the people around you, and what would it look like to embrace its apparent folly instead?",
  "How does the truth that God chose the weak and lowly to shame the strong reshape the way you view yourself, your church, and those the world overlooks?",
  "Christ has become your wisdom, righteousness, sanctification, and redemption. Which of these four do you most need to rest in today, and how would resting there change the way you live this week?",
  "What grounds for boasting are you still clinging to, and what would it mean to transfer all your boasting to the Lord?",
];

const videoItems = [
  { videoId: "kQ4j8x2vRN7", title: "1 Corinthians 1 - The Cross as the Power of God" },
  { videoId: "pL9mZ3aTcWd", title: "Christ Crucified: Folly to the World, Wisdom of God" },
  { videoId: "rT6nB1yKuHs", title: "God Chose the Weak to Shame the Strong - 1 Corinthians 1" },
  { videoId: "wX8cV5dQ2eJ", title: "Boast Only in the Lord - A Study of 1 Corinthians 1:26-31" },
];

function BlockView({ block }: { block: Block }) {
  return (
    <section style={{ marginBottom: "2.75rem" }}>
      <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 6px", color: TEXT }} dangerouslySetInnerHTML={{ __html: block.heading }} />
      {block.reference && (
        <div style={{ color: block.accent, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.1rem" }} dangerouslySetInnerHTML={{ __html: block.reference }} />
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", borderLeft: `3px solid ${block.accent}55`, paddingLeft: "1.25rem" }}>
        {block.paragraphs.map((para, i) => (
          <p
            key={i}
            style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}
      </div>
    </section>
  );
}

export default function Corinthians1GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${ROSE}22`, color: ROSE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            1 Corinthians Chapter 1
          </h1>
          <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", color: TEXT, lineHeight: 1.6, margin: "0 0 1rem", fontWeight: 600 }}>
            The Cross as the Wisdom and Power of God
          </p>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: MUTED, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;For the word of the cross is folly to those who are perishing, but to us who are being saved it is the power of God.&rdquo; &mdash; 1 Corinthians 1:18" }}
          />
        </header>

        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1rem", paddingTop: "0.5rem", background: BG }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ROSE : BORDER}`,
                background: activeTab === t ? ROSE : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {activeTab === "Overview" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Overview of 1 Corinthians 1</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "First Corinthians opens onto a young, gifted, and badly divided church set in one of the most status-obsessed cities of the Roman world. Corinth prized eloquence, wisdom, and social standing, and the church had absorbed these values until they fractured the body into competing camps. Into this situation Paul writes not with a clever solution but with the cross &mdash; the word of the cross that is folly to the perishing and the power of God to the saved. Across this chapter Paul exposes the bankruptcy of human wisdom, lifts up Christ crucified as the wisdom and power of God, and shows that God deliberately chose the weak and despised so that no one might boast before him." }}
            />
            {overviewBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Beneath the surface conflict over teachers lies a cluster of profound theological themes. The word of the cross stands at the center, dividing humanity and overturning every human standard of wisdom and power. Here Paul gives the church the seedbed of what later theologians would call the theology of the cross &mdash; a vision of a God who saves through apparent folly and weakness, and who in Christ becomes our wisdom, righteousness, sanctification, and redemption." }}
            />
            {themeBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Verse by Verse</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Walking through 1 Corinthians 1 section by section reveals a tightly argued movement from greeting to thanksgiving, from the appeal for unity to the great meditation on the cross, and finally to the calling that silences all human boasting. Each unit advances Paul&rsquo;s single concern: that the Corinthians would stop boasting in human wisdom and teachers and boast instead in the crucified Lord." }}
            />
            {verseBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "The truths of 1 Corinthians 1 press hard on the way we live, lead, and find our worth. They confront our factional loyalties, our hunger for respectability, and our addiction to self-glory, and they call us to a cross-shaped life that boasts only in the Lord." }}
            />
            {applicationBlocks.map((b) => <BlockView key={b.heading} block={b} />)}

            <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}>Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.02rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>
          </div>
        )}

        <section style={{ marginTop: "3.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
            dangerouslySetInnerHTML={{ __html: "Go deeper into 1 Corinthians 1 with these video teachings on the word of the cross, the wisdom and power of God in Christ crucified, and the calling that leaves us boasting only in the Lord." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Christ the Power and Wisdom of God</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "First Corinthians 1 calls the church away from the wisdom of the age and back to the crucified Christ. What the world counts as foolish and weak God has made the very means of salvation, so that no one may boast before him. In Christ crucified we find our wisdom, our righteousness, our sanctification, and our redemption &mdash; and so we boast in the Lord alone." }}
          />
        </div>
      </main>
    </div>
  );
}
