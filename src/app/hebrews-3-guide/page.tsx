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

const videoItems = [
  { videoId: "1fNWTZZwgbs", title: "Hebrews - The Bible Project Overview" },
  { videoId: "Hf2Kk4yQ8Bc", title: "Consider Jesus, the Apostle and High Priest" },
  { videoId: "JsK7Qk1Vd0E", title: "Jesus Greater Than Moses - Son Over the House" },
  { videoId: "Mz3y7Qb1nLk", title: "Today, If You Hear His Voice - The Warning of Psalm 95" },
];

interface ContentSection {
  heading: string;
  reference: string;
  color: string;
  paragraphs: string[];
}

const overviewSections: ContentSection[] = [
  {
    heading: "Consider Jesus, Greater Than Moses",
    reference: "Hebrews 3:1&ndash;19",
    color: PURPLE,
    paragraphs: [
      "Hebrews 3 turns from the angels of the opening chapters to the towering figure of Moses, the most revered leader in all of Israel&rsquo;s history, and shows that Jesus is greater still. The chapter falls naturally into two movements. First comes a comparison: Jesus is faithful, as Moses was faithful, yet Jesus is worthy of more glory, for Moses served in God&rsquo;s house as a servant while Christ rules over God&rsquo;s house as a Son (3:1&ndash;6). Then comes a warning: a long exposition of Psalm 95 urging the readers not to harden their hearts as the wilderness generation did (3:7&ndash;19).",
      "The chapter opens with a magnificent summons: &ldquo;Therefore, holy brothers, you who share in a heavenly calling, consider Jesus, the apostle and high priest of our confession&rdquo; (3:1). The single command is to consider, to fix the mind and gaze fully on Jesus. The whole letter is built around this kind of attentive looking, because the readers were tempted to drift back toward old securities, and the cure for drifting is a long, steady look at the greatness of Christ.",
      "After establishing Christ&rsquo;s supremacy over Moses, the author reaches back into Israel&rsquo;s Scriptures and quotes Psalm 95, which itself looks back to the rebellion at Meribah and Massah in the wilderness. The generation that came out of Egypt heard God&rsquo;s voice, saw his works for forty years, and yet hardened their hearts in unbelief, so that they never entered the promised rest. Their failure becomes a flashing warning light for the readers of Hebrews and for us.",
      "The pastoral heart of the chapter beats in its central exhortation: &ldquo;Take care, brothers&rdquo; and &ldquo;exhort one another every day, as long as it is called Today&rdquo; (3:12&ndash;13). The danger is an evil, unbelieving heart that falls away from the living God, and the antidote is the mutual, daily encouragement of the community. The chapter ends on a sobering note &mdash; &ldquo;they were unable to enter because of unbelief&rdquo; (3:19) &mdash; setting up the great promise of rest that chapter four will unfold.",
    ],
  },
  {
    heading: "The Apostle and High Priest of Our Confession",
    reference: "Hebrews 3:1",
    color: GOLD,
    paragraphs: [
      "The opening verse gives Jesus a remarkable double title that appears nowhere else in quite this way: he is &ldquo;the apostle and high priest of our confession&rdquo; (3:1). An apostle is one who is sent, a representative carrying the full authority of the one who sent him. To call Jesus the apostle is to say that he is God&rsquo;s supreme envoy, sent from heaven to speak and act for the Father, the one through whom God has spoken in these last days.",
      "Yet he is also the high priest, the one who represents the people before God, who offers sacrifice and makes intercession. In Israel&rsquo;s history these two roles were never combined in one man: Moses was something like the apostle, the one God sent to lead the people out, while Aaron was the high priest who stood before God on their behalf. In Jesus the two roles meet and are perfected. He is both the one sent from God to us and the one who goes from us to God.",
      "This pairing is the seed of the entire letter. Hebrews will spend chapters unfolding the high priesthood of Jesus in the order of Melchizedek, and it has already declared him the final word God has spoken to us. As apostle, Jesus brings God to us; as high priest, he brings us to God. To consider Jesus is to behold the one who closes the infinite distance between a holy God and a sinful people from both directions at once.",
    ],
  },
];

const themeSections: ContentSection[] = [
  {
    heading: "Considering Jesus",
    reference: "Hebrews 3:1",
    color: GOLD,
    paragraphs: [
      "The governing command of the chapter, and in a sense of the whole letter, is the call to &ldquo;consider Jesus&rdquo; (3:1). The Greek word means to fix the mind upon, to observe carefully, to give sustained and thoughtful attention. The readers were drifting, tempted to slip back into familiar religious patterns under the pressure of hardship, and the author knows that the remedy for spiritual drift is not merely trying harder but looking longer and harder at Christ.",
      "Notice who is addressed: &ldquo;holy brothers, you who share in a heavenly calling&rdquo; (3:1). These are people set apart by God, partakers of a calling that comes from heaven and leads to heaven. Their identity is already secure in Christ, and it is precisely because of that identity that they are urged to consider him. The look at Jesus is not how unbelievers become Christians; it is how believers keep from drifting.",
      "To consider Jesus as the apostle and high priest of our confession is to anchor the soul. When the mind is full of the greatness, faithfulness, and sufficiency of Christ, the heart is far less likely to harden, drift, or fall away. The whole sermon of Hebrews could be summed up in this one imperative: do not look away from Jesus. Everything that follows in the chapter, including the dire warning, is meant to keep the readers&rsquo; gaze fixed where it belongs.",
    ],
  },
  {
    heading: "The Son Greater Than the Servant",
    reference: "Hebrews 3:2&ndash;6",
    color: PURPLE,
    paragraphs: [
      "The central theme of the first half of the chapter is the superiority of Jesus over Moses. The author is careful and generous toward Moses: Jesus was &ldquo;faithful to him who appointed him, just as Moses also was faithful in all God&rsquo;s house&rdquo; (3:2). Moses is honored, not diminished; his faithfulness is real and praiseworthy. The point is not that Moses failed but that Jesus is greater even than the faithful Moses.",
      "The argument turns on an analogy from building: &ldquo;the builder of a house has more honor than the house itself&rdquo; (3:3), and &ldquo;the builder of all things is God&rdquo; (3:4). Moses belonged to the house; Christ, as the divine builder, stands over it. The decisive contrast comes in verses 5 and 6: &ldquo;Moses was faithful in all God&rsquo;s house as a servant&rdquo; but &ldquo;Christ is faithful over God&rsquo;s house as a son&rdquo; (3:5&ndash;6).",
      "The difference between a servant and a son in a household is vast. A servant, however trusted, works within a house that is not his own; a son shares the family name and the family rule. Moses served faithfully within God&rsquo;s house; Jesus, the Son, presides over it as his own. This is the heart of the chapter&rsquo;s Christology: the one Israel revered above all others was, in the end, a faithful servant pointing forward to the faithful Son.",
    ],
  },
  {
    heading: "We Are His House",
    reference: "Hebrews 3:6",
    color: TEAL,
    paragraphs: [
      "Having declared Christ faithful over God&rsquo;s house as a Son, the author adds a stunning identification: &ldquo;And we are his house, if indeed we hold fast our confidence and our boasting in our hope&rdquo; (3:6). The house of God is no longer a tabernacle of fabric or a temple of stone; it is the people of God themselves, the community of believers over whom Christ presides as Son. The readers are invited to see themselves as the very dwelling Christ rules.",
      "But the identification carries a condition that runs through the whole letter: &ldquo;if indeed we hold fast our confidence and our boasting in our hope&rdquo; (3:6). Belonging to the house of God is marked by perseverance, by a confidence and hope that endures to the end. This is not a teaching that we earn our place by works, but a sober recognition that genuine faith is the kind that holds fast, that does not let go when pressure comes.",
      "This theme of holding fast becomes the hinge between the doctrine of the first half and the warning of the second. Because we are his house only as we hold fast our confidence, the author turns at once to the danger of not holding fast &mdash; the danger of hardening, drifting, and falling away. The glory of belonging to Christ and the warning against unbelief are two sides of the same pastoral coin.",
    ],
  },
  {
    heading: "The Warning Against Hardening the Heart",
    reference: "Hebrews 3:7&ndash;13",
    color: ROSE,
    paragraphs: [
      "The second great theme of the chapter is the warning against unbelief, drawn from Psalm 95. The Holy Spirit speaks: &ldquo;Today, if you hear his voice, do not harden your hearts as in the rebellion, on the day of testing in the wilderness&rdquo; (3:7&ndash;8). The Hebrew names behind the rebellion and the testing are Meribah and Massah, the places where Israel quarreled with God and put him to the test, demanding water and doubting his presence.",
      "God&rsquo;s verdict on that generation is severe: &ldquo;For forty years I was provoked with that generation... They always go astray in their heart; they have not known my ways. As I swore in my wrath, They shall not enter my rest&rdquo; (3:9&ndash;11). For forty years they saw God&rsquo;s mighty works, and still their hearts strayed. Their hardening was not a single act but a settled posture, a heart that refused to know and trust the God who had redeemed them.",
      "The author drives the warning straight at his readers: &ldquo;Take care, brothers, lest there be in any of you an evil, unbelieving heart, leading you to fall away from the living God&rdquo; (3:12). The root sin is unbelief, an evil heart that does not trust God; the result is falling away from the living God himself. And the remedy is communal: &ldquo;exhort one another every day, as long as it is called Today, that none of you may be hardened by the deceitfulness of sin&rdquo; (3:13). Sin deceives, hardening sets in gradually, and daily mutual encouragement is the God-given guard against it.",
    ],
  },
  {
    heading: "The Urgency of Today and the Barrier of Unbelief",
    reference: "Hebrews 3:14&ndash;19",
    color: GREEN,
    paragraphs: [
      "The little word &ldquo;Today&rdquo; carries enormous weight in this chapter. &ldquo;Today, if you hear his voice&rdquo; (3:7) and &ldquo;as long as it is called Today&rdquo; (3:13) press an urgent now upon the readers. The window of response is the present moment; the time to hear and not harden is always today, never some imagined tomorrow. The wilderness generation lost their tomorrow by squandering their today.",
      "The author restates the condition of belonging: &ldquo;For we have come to share in Christ, if indeed we hold our original confidence firm to the end&rdquo; (3:14). To share in Christ is glorious, but the proof of true sharing is firmness held all the way to the end. He then drives home the lesson with a series of pointed questions about who rebelled, with whom God was provoked for forty years, and to whom he swore that they would not enter his rest (3:16&ndash;18).",
      "The answer lands like a verdict and closes the chapter: &ldquo;So we see that they were unable to enter because of unbelief&rdquo; (3:19). The barrier that shut a whole generation out of the promised rest was not weak armies or high walls but unbelief, the failure to trust God. Faith opens the door to rest; unbelief slams it shut. This single sentence sets the stage for chapter four, where the author will hold out the promise of a rest that still remains for the people of God.",
    ],
  },
];

const verseSections: ContentSection[] = [
  {
    heading: "Consider Jesus",
    reference: "Hebrews 3:1",
    color: GOLD,
    paragraphs: [
      "&ldquo;Therefore, holy brothers, you who share in a heavenly calling, consider Jesus, the apostle and high priest of our confession&rdquo; (3:1). The &ldquo;therefore&rdquo; reaches back to the previous chapters, where Jesus has been shown as the Son superior to angels and the merciful high priest who shared our flesh. Now, on that basis, the readers are urged to fix their gaze on him.",
      "They are addressed with dignity: &ldquo;holy brothers, you who share in a heavenly calling.&rdquo; These are people set apart by God and called from heaven, partakers in a calling that originates above and leads above. Their lofty identity grounds the command that follows; because of who they are in Christ, they must keep looking to Christ.",
      "Jesus is named &ldquo;the apostle and high priest of our confession.&rdquo; As apostle, the sent one, he is God&rsquo;s supreme representative to us; as high priest, he is our representative before God. The two roles that were divided between Moses and Aaron are united and perfected in him. He is the one we confess, and to consider him is the whole task of the chapter.",
    ],
  },
  {
    heading: "Faithful as Moses Was Faithful",
    reference: "Hebrews 3:2&ndash;4",
    color: TEAL,
    paragraphs: [
      "&ldquo;Who was faithful to him who appointed him, just as Moses also was faithful in all God&rsquo;s house&rdquo; (3:2). The author honors Moses, citing the testimony of Numbers that Moses was faithful in all God&rsquo;s house. Jesus and Moses share this faithfulness; the comparison begins not with Moses&rsquo; failure but with his genuine, praiseworthy faithfulness.",
      "&ldquo;For Jesus has been counted worthy of more glory than Moses, as much more glory as the builder of a house has more honor than the house itself&rdquo; (3:3). Here the comparison tips decisively toward Jesus. Moses is part of the house; Jesus is its builder, and the builder always has more honor than the building. The faithful servant cannot rival the one who designed and raised the whole structure.",
      "&ldquo;For every house is built by someone, but the builder of all things is God&rdquo; (3:4). The argument quietly lifts Jesus to the level of God himself. If the builder of the house is greater than the house, and the builder of all things is God, then Jesus, the builder, shares in the very glory of God. The honor due to Jesus over Moses is nothing less than divine.",
    ],
  },
  {
    heading: "A Servant and a Son",
    reference: "Hebrews 3:5&ndash;6",
    color: PURPLE,
    paragraphs: [
      "&ldquo;Now Moses was faithful in all God&rsquo;s house as a servant, to testify to the things that were to be spoken later&rdquo; (3:5). Moses&rsquo; faithfulness is real, but his role is that of a servant within the house, and his ministry was forward-pointing, bearing witness to things still to come. Moses served a house whose true meaning would be revealed in Christ.",
      "&ldquo;But Christ is faithful over God&rsquo;s house as a son&rdquo; (3:6). The contrast is sharp and decisive: servant versus son, in the house versus over the house. A servant labors within a household that is not his own; a son shares the family name and exercises the family authority. Christ presides over God&rsquo;s house as a Son, with a dignity Moses never possessed.",
      "&ldquo;And we are his house, if indeed we hold fast our confidence and our boasting in our hope&rdquo; (3:6). The people of God are themselves the house over which Christ rules, but belonging is marked by perseverance. To hold fast our confidence and the boast of our hope to the end is the sign of those who truly belong to his house. The verse joins the dignity of belonging to the call to endure.",
    ],
  },
  {
    heading: "Do Not Harden Your Hearts",
    reference: "Hebrews 3:7&ndash;11",
    color: ROSE,
    paragraphs: [
      "&ldquo;Therefore, as the Holy Spirit says, Today, if you hear his voice, do not harden your hearts as in the rebellion, on the day of testing in the wilderness&rdquo; (3:7&ndash;8). The author quotes Psalm 95 and attributes it directly to the Holy Spirit, treating the ancient Scripture as God&rsquo;s living voice addressing the readers now. The rebellion and the testing recall Meribah and Massah, where Israel quarreled with God and demanded proof of his care.",
      "&ldquo;Where your fathers put me to the test and saw my works for forty years. Therefore I was provoked with that generation&rdquo; (3:9&ndash;10). The tragedy is that they tested God even as they witnessed his works for forty years; abundant evidence of his goodness did not soften their hearts. God&rsquo;s response was provocation, a settled displeasure with a generation that would not trust him.",
      "&ldquo;They always go astray in their heart; they have not known my ways. As I swore in my wrath, They shall not enter my rest&rdquo; (3:10&ndash;11). The problem was a wandering heart that never came to know God&rsquo;s ways, and the consequence was exclusion from his rest, sealed by a divine oath. The promised land lay before them, but unbelief barred the door.",
    ],
  },
  {
    heading: "Exhort One Another Every Day",
    reference: "Hebrews 3:12&ndash;15",
    color: GREEN,
    paragraphs: [
      "&ldquo;Take care, brothers, lest there be in any of you an evil, unbelieving heart, leading you to fall away from the living God&rdquo; (3:12). The warning turns from the ancient wilderness to the present congregation. The root danger is an evil, unbelieving heart, and its terrible end is falling away from the living God himself. Unbelief is not a minor weakness but a deadly defection.",
      "&ldquo;But exhort one another every day, as long as it is called Today, that none of you may be hardened by the deceitfulness of sin&rdquo; (3:13). The God-given safeguard is community: daily, mutual exhortation among believers. Sin is deceitful, hardening hearts gradually and quietly, so the readers must encourage one another constantly while the day of opportunity lasts. No one is meant to stand against the deceit of sin alone.",
      "&ldquo;For we have come to share in Christ, if indeed we hold our original confidence firm to the end&rdquo; (3:14). To share in Christ is the highest privilege, but its authenticity is shown by holding the original confidence firm all the way to the end. The author then repeats the psalm&rsquo;s call &mdash; &ldquo;Today, if you hear his voice, do not harden your hearts as in the rebellion&rdquo; (3:15) &mdash; pressing the urgency of now.",
    ],
  },
  {
    heading: "Unable to Enter Because of Unbelief",
    reference: "Hebrews 3:16&ndash;19",
    color: TEAL,
    paragraphs: [
      "&ldquo;For who were those who heard and yet rebelled? Was it not all those who left Egypt led by Moses?&rdquo; (3:16). The author begins a series of probing questions. The rebels were not outsiders but the very people who had been redeemed from Egypt, who had heard God&rsquo;s voice and seen his deliverance. Privilege and proximity to God&rsquo;s works did not prevent their fall.",
      "&ldquo;And with whom was he provoked for forty years? Was it not with those who sinned, whose bodies fell in the wilderness? And to whom did he swear that they would not enter his rest, but to those who were disobedient?&rdquo; (3:17&ndash;18). The questions trace the grim outcome: a generation whose bodies fell in the wilderness, barred by oath from the rest, because of their sin and disobedience. Their journey ended in graves in the desert rather than homes in the land.",
      "&ldquo;So we see that they were unable to enter because of unbelief&rdquo; (3:19). The chapter closes with its verdict in a single, weighty line. The barrier to rest was unbelief &mdash; not weakness, not opposition, but the refusal to trust God. This sentence lays the foundation for chapter four, where the author will declare that the promise of entering God&rsquo;s rest still stands, and urge his readers to enter it by faith.",
    ],
  },
];

const applicationSections: ContentSection[] = [
  {
    heading: "Fix Your Gaze on Jesus",
    reference: "Practicing 3:1&ndash;6",
    color: GOLD,
    paragraphs: [
      "The first and central application of the chapter is simply to consider Jesus. When you feel yourself drifting spiritually, the cure is not vague resolve but a long, steady look at Christ &mdash; the apostle sent from God to us and the high priest who brings us to God. Make it a habit to fill your mind with his greatness, his faithfulness, and his sufficiency, for a heart full of Jesus is a heart far less likely to harden or wander.",
      "Let the contrast between servant and Son reshape how you read all of Scripture. Even Moses, the greatest of God&rsquo;s servants, was a signpost pointing forward to the faithful Son. Wherever you turn in the Bible, learn to see how it leads to Christ, who presides over God&rsquo;s house as a Son. And take comfort that you are part of that house &mdash; provided you hold fast your confidence and the boast of your hope to the end.",
    ],
  },
  {
    heading: "Guard Against a Hardening Heart",
    reference: "Practicing 3:7&ndash;13",
    color: ROSE,
    paragraphs: [
      "The wilderness generation hardened their hearts gradually, over forty years, even while surrounded by evidence of God&rsquo;s goodness. Take that as a warning: hardening is rarely sudden. It creeps in through small acts of unbelief and disobedience, through the slow deceitfulness of sin. Examine your own heart honestly today and ask whether you are listening to God&rsquo;s voice or quietly resisting it.",
      "The word Today presses urgency on you. Do not postpone obedience to some imagined tomorrow; the time to hear and respond is always now. The deceitfulness of sin whispers that there is plenty of time, that one more delay will not matter, but the wilderness generation lost their tomorrow by wasting their today. Whatever God is calling you to hear and do, do it while it is still called Today.",
    ],
  },
  {
    heading: "Exhort One Another Every Day",
    reference: "Practicing 3:13",
    color: GREEN,
    paragraphs: [
      "The author&rsquo;s remedy for hardening is not solitary willpower but the daily encouragement of the community: &ldquo;exhort one another every day.&rdquo; You are not meant to stand against the deceitfulness of sin alone. Pursue real, frequent, honest relationships with other believers who will encourage you, warn you, and hold you up when your own heart grows cold. And take up the responsibility to do the same for them.",
      "Consider how easily a believer drifts in isolation. The faith that holds fast to the end is sustained in community, where brothers and sisters speak truth and hope into one another&rsquo;s lives. Make yourself part of such a community, and make yourself the kind of person who notices when others are drifting and steps in with encouragement. Mutual, daily exhortation is one of God&rsquo;s chief means of keeping his people from falling away.",
    ],
  },
  {
    heading: "Enter by Faith, Not Unbelief",
    reference: "Practicing 3:14&ndash;19",
    color: TEAL,
    paragraphs: [
      "The chapter ends with a sobering diagnosis: the wilderness generation were unable to enter God&rsquo;s rest because of unbelief. Their failure was not a lack of opportunity or strength but a refusal to trust God. Let this drive you to examine the quality of your own faith &mdash; not merely whether you began well, but whether you are holding your original confidence firm to the end, for that is the mark of those who truly share in Christ.",
      "Yet the warning is meant to lead you not to fear but to faith. Unbelief barred the door to rest; faith opens it. The same God who shut out a faithless generation holds out, in the very next chapter, a rest that still remains for his people. So respond to the warning by trusting him more deeply, holding fast, considering Jesus, and pressing on toward the rest that faith alone can enter.",
    ],
  },
];

const reflectionQuestions = [
  "Am I genuinely considering Jesus - fixing my mind on his greatness - or have I let my gaze drift to lesser things?",
  "Do I treat Jesus as the Son who rules over God's house, greater even than the most revered servants and leaders?",
  "Where might my heart be hardening through small, repeated acts of unbelief or delayed obedience?",
  "What is God calling me to hear and do Today that I have been putting off until tomorrow?",
  "Am I part of a community where believers exhort one another every day, and am I doing that for others?",
  "Is my faith the kind that holds fast to the end, or am I in danger of falling away because of unbelief?",
];

export default function Hebrews3GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  function renderSections(list: ContentSection[]) {
    return list.map((section, idx) => (
      <section key={idx} style={{ marginBottom: "2.75rem" }}>
        <h3 style={{ fontSize: "1.45rem", fontWeight: 700, margin: "0 0 6px", color: TEXT }} dangerouslySetInnerHTML={{ __html: section.heading }} />
        <div style={{ color: section.color, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: section.reference }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          {section.paragraphs.map((para, i) => (
            <p
              key={i}
              style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}
        </div>
      </section>
    ));
  }

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, color: PURPLE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Hebrews 3
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Jesus greater than Moses, and the warning against unbelief &mdash; consider Jesus, the apostle and high priest of our confession, faithful over God&rsquo;s house as a Son while Moses was faithful in it as a servant, and the urgent call of Psalm 95: &ldquo;Today, if you hear his voice, do not harden your hearts.&rdquo;" }} />
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem", position: "sticky", top: "var(--header-height, 80px)", background: BG, zIndex: 10 }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? PURPLE : BORDER}`,
                background: activeTab === t ? PURPLE : CARD,
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

        {activeTab === "Overview" && <div>{renderSections(overviewSections)}</div>}
        {activeTab === "Key Themes" && <div>{renderSections(themeSections)}</div>}
        {activeTab === "Verse by Verse" && <div>{renderSections(verseSections)}</div>}

        {activeTab === "Application" && (
          <div>
            {renderSections(applicationSections)}
            <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${GREEN}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}>Reflection Questions</h3>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem" }}>{q}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <section style={{ marginTop: "3.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Deepen your study of Hebrews 3 through visual teaching on considering Jesus the apostle and high priest, the superiority of the Son over the servant Moses, and the warning of Psalm 95 against hardening the heart.
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

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Today, If You Hear His Voice</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Hebrews 3 lifts our eyes to Jesus, the apostle and high priest of our confession, who is faithful over God&rsquo;s house as a Son while Moses served faithfully within it. And it sounds a solemn warning from the wilderness: a whole generation, redeemed from Egypt, was shut out of God&rsquo;s rest because of unbelief. So the Spirit still says, Today, if you hear his voice, do not harden your hearts &mdash; consider Jesus, hold fast your confidence to the end, and exhort one another every day while it is still called Today." }} />
        </div>
      </main>
    </div>
  );
}
