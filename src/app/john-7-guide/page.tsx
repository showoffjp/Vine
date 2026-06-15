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
  "Jesus Goes to the Feast",
  "Teaching in the Temple",
  "Division Over Jesus",
  "Rivers of Living Water",
  "Officers and Pharisees",
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
    heading: "Overview of John 7",
    reference: "John 7:1&ndash;53",
    paragraphs: [
      "John 7 is one of the most dramatically charged chapters in the fourth Gospel. The setting is the Feast of Tabernacles &mdash; the great autumn festival in which Israel camped in booths to remember the wilderness wandering &mdash; and the chapter traces Jesus&rsquo;s movements from Galilee to Jerusalem and the mounting tension that surrounds his presence in the holy city. He arrives in secret, teaches publicly in the temple courts, provokes a furious debate about his identity, and on the last and greatest day of the feast makes one of the most extraordinary public declarations in the entire Gospel: &ldquo;If anyone thirsts, let him come to me and drink. Whoever believes in me, as the Scripture has said, &lsquo;Out of his heart will flow rivers of living water&rsquo;&rdquo; (7:37&ndash;38).",
      "The chapter is structured as a series of encounters and controversies. It opens with Jesus&rsquo;s brothers pressing him to go to Jerusalem and display his works publicly, and it closes with the Sanhedrin in disarray, unable to reach a consensus about how to deal with him, and Nicodemus raising a procedural objection in his defense. Between these two bookends lies a chapter of swirling debate &mdash; about Jesus&rsquo;s learning and authority, about whether he is the Christ or a deceiver, about the law and its application, about the origin and destination of the one who speaks from the temple steps.",
      "The Feast of Tabernacles is not incidental background; it is the interpretive key to the chapter&rsquo;s climactic declaration. The feast included a daily water-drawing ceremony in which a priest drew water from the Pool of Siloam in a golden pitcher and poured it at the base of the altar while the Levites sang the Hallel psalms. This ceremony looked backward to God&rsquo;s provision of water from the rock in the wilderness and forward to the eschatological river of living water prophesied by Ezekiel and Zechariah. When Jesus stands on the last great day of this feast and cries out about rivers of living water, he is claiming to be the fulfillment of everything the ceremony pointed to.",
      "John 7 also introduces several features of Johannine narrative technique that will be important throughout the passion narrative. The theme of the hour that has not yet come (7:6, 8, 30) creates a sense of divine timing controlling all events: Jesus&rsquo;s moves are not determined by his brothers&rsquo; impatience or his enemies&rsquo; desire but by the Father&rsquo;s sovereign schedule. The theme of Jesus&rsquo;s origin and destination (7:27&ndash;29, 33&ndash;36) deepens the irony of the crowd&rsquo;s misunderstanding: they know where Jesus comes from geographically but not theologically, and they do not know where he is going at all.",
      "The divided crowd and the baffled authorities provide John with a canvas on which to paint the fundamental human response to Jesus: some see his signs and believe; some see his signs and resist; some are genuinely uncertain; some invoke tradition and geography to dismiss the possibility that he could be the Christ. The Pharisees accuse him of having a demon; the officers sent to arrest him return empty-handed and declare that no one has ever spoken as this man speaks. Even within the Sanhedrin there is division, with Nicodemus attempting to apply the law in Jesus&rsquo;s favor. John 7 is, among other things, a masterclass in the range of human responses to the word of God.",
    ],
  },
  {
    id: "Jesus Goes to the Feast",
    heading: "The Journey to Jerusalem",
    reference: "John 7:1&ndash;13",
    paragraphs: [
      "The chapter opens with a geographical note that carries theological weight: &ldquo;After this Jesus went about in Galilee. He would not go about in Judea, because the Jews were seeking to kill him&rdquo; (7:1). Galilee is the relative safety of the north; Judea, and especially Jerusalem, is the zone of lethal opposition. Jesus&rsquo;s movements are not determined by fear but by the timing of the Father &mdash; he will go to Jerusalem when the Father determines, not when his brothers urge him or his enemies press him.",
      "The approach of the Feast of Tabernacles prompts his brothers to urge him to go up to Jerusalem. Their counsel has the surface appearance of wisdom &mdash; if you want a following, show yourself to the world. &ldquo;Leave here and go to Judea, that your disciples also may see the works you are doing. For no one works in secret if he seeks to be known openly. If you do these things, show yourself to the world&rdquo; (7:3&ndash;4). But John adds a devastating parenthetical: &ldquo;For not even his brothers believed in him&rdquo; (7:5). Their advice, though superficially strategic, comes from unbelief. They are thinking in terms of public relations and power; Jesus is operating in the economy of the Father&rsquo;s time.",
      "Jesus&rsquo;s response distinguishes between his time and their time: &ldquo;My time has not yet come, but your time is always here. The world cannot hate you, but it hates me because I testify about it that its works are evil&rdquo; (7:6&ndash;7). The word &ldquo;time&rdquo; here is kairos &mdash; not chronological time but the appointed moment, the divinely determined occasion. His brothers&rsquo; time is always available because they belong to the world and the world does not oppose them. Jesus&rsquo; time is fixed by the Father because the world hates him for what he says. He tells them to go up to the feast; he will not yet go, for his time has not yet fully come.",
      "But then Jesus does go to Jerusalem &mdash; not publicly but in secret (7:10). This is not deception; it is discretion. He goes on his own terms, in the Father&rsquo;s timing, not in response to the pressure of his brothers or the expectations of the crowd. His arrival in Jerusalem is not a spectacle; it is a quiet, unannounced appearance that sets the stage for the public confrontation in the temple courts.",
      "The atmosphere in Jerusalem during the feast is charged with expectation and danger. &ldquo;There was much muttering about him among the people. While some said, &lsquo;He is a good man,&rsquo; others said, &lsquo;No, he is leading the people astray&rsquo;&rdquo; (7:12). The muttering is kept underground: &ldquo;for fear of the Jews&rdquo; (7:13). The very people who are discussing Jesus are afraid to be heard doing so. The social and religious power of the authorities is already shaping the space in which the debate can take place. Jesus has not yet appeared publicly, and already the crowd is divided about him and afraid.",
    ],
  },
  {
    id: "Teaching in the Temple",
    heading: "Teaching in the Temple Courts",
    reference: "John 7:14&ndash;31",
    paragraphs: [
      "Midway through the feast Jesus goes up to the temple and begins to teach. His arrival provokes immediate astonishment: &ldquo;The Jews therefore marveled, saying, &lsquo;How is it that this man has learning, when he has never studied?&rsquo;&rdquo; (7:15). The question is about formal rabbinic education: Jesus has not sat at the feet of the recognized teachers of the law, has not been credentialed by the established schools, and yet he teaches with a learning and authority that surpasses those who have. His words have the quality of someone who knows, not merely the quality of someone who has been taught.",
      "Jesus&rsquo;s response reframes the question entirely: &ldquo;My teaching is not mine, but his who sent me. If anyone&rsquo;s will is to do God&rsquo;s will, he will know whether the teaching is from God or whether I am speaking on my own authority&rdquo; (7:16&ndash;17). The criterion for discerning the source of his teaching is not academic pedigree but the disposition of the will. The person who desires to do the will of God will recognize the teaching that comes from God. Spiritual perception depends on moral and spiritual orientation &mdash; those who are determined to resist God&rsquo;s will will find reasons to reject his messenger.",
      "Jesus then turns the controversy back on his questioners by invoking the healing at the pool of Bethesda, which had provoked their hostility earlier in the Gospel (ch. 5): &ldquo;Moses gave you circumcision &hellip; and you circumcise a man on the Sabbath. If on the Sabbath a man receives circumcision, so that the law of Moses may not be broken, are you angry with me because on the Sabbath I made a man&rsquo;s whole body well?&rdquo; (7:22&ndash;23). The argument is from the lesser to the greater: if the law permits circumcision on the Sabbath because it perfects one member of the body, how much more should the healing of a whole person be permitted? Their anger at him is rooted not in faithfulness to Moses but in a failure to read Moses rightly.",
      "The crowd in Jerusalem is again divided. Some who know about the plot to kill him are astonished that he speaks openly without interference: &ldquo;Can it be that the authorities really know that this is the Christ?&rdquo; (7:26). But others deploy a piece of popular theology to dismiss the possibility: &ldquo;We know where this man comes from, and when the Christ appears, no one will know where he comes from&rdquo; (7:27). There was a tradition that the origin of the Messiah would be mysterious, hidden until his sudden appearance. Since everyone knows Jesus comes from Galilee, he cannot be the Christ.",
      "Jesus&rsquo;s response in verses 28 through 29 is one of the most startling in the chapter: &ldquo;You know me, and you know where I come from. But I have not come of my own accord. He who sent me is true, and him you do not know. I know him, for I come from him, and he sent me.&rdquo; The crowd thinks it knows Jesus&rsquo;s origin &mdash; Galilee, the family of Joseph. But they do not know what they think they know. His true origin is from the Father who sent him, and their ignorance of the Father disqualifies them from recognizing the Son.",
    ],
  },
  {
    id: "Division Over Jesus",
    heading: "A Crowd Divided",
    reference: "John 7:31&ndash;36, 40&ndash;53",
    paragraphs: [
      "The division in Jerusalem over Jesus is one of the sustained themes of John 7, appearing in wave after wave throughout the chapter. It begins with the crowd muttering about him before he has even appeared publicly (7:12), continues through the debate in the temple courts, intensifies when the Pharisees send officers to arrest him (7:32), and reaches its climax when the officers return empty-handed and the Sanhedrin fragments over how to respond (7:45&ndash;53). The divided crowd is not a narrative accident; it is John&rsquo;s theological portrait of the world&rsquo;s response to the light.",
      "When Jesus speaks about going away to the one who sent him, a place where those who seek him cannot come, the crowd is baffled. &ldquo;Where does this man intend to go that we will not find him? Does he intend to go to the Dispersion among the Greeks and teach the Greeks?&rdquo; (7:35). The irony is rich: they ask in bewilderment about a possibility they mean as reductio ad absurdum, but in fact Jesus will be proclaimed to the Greeks and to the nations. Their mockery inadvertently prophesies the universal scope of his mission.",
      "After the great declaration of rivers of living water, the crowd is again divided. Some say he is truly the Prophet, the one prophesied by Moses in Deuteronomy 18. Others say he is the Christ. But others object on geographical grounds: &ldquo;Is the Christ to come from Galilee? Has not the Scripture said that the Christ comes from the offspring of David, and comes from Bethlehem, the village where David was?&rdquo; (7:41&ndash;42). The irony is that Jesus does come from the lineage of David and was born in Bethlehem &mdash; but his questioners do not know this. Their objection, which they think rules him out, would confirm him as the Christ if they knew the facts.",
      "Some in the crowd want to arrest him, but no one lays a hand on him. John&rsquo;s quiet note explains why: &ldquo;because his hour had not yet come&rdquo; (7:30, 44). The divine timing that governs Jesus&rsquo;s movements also governs his safety. No human authority &mdash; not the Pharisees, not the chief priests, not the guards &mdash; can move against him before the appointed moment. The crowd&rsquo;s division and the authorities&rsquo; frustration are both testimony to the sovereignty of the one who sent him.",
      "The episode of Nicodemus in verses 50 through 52 is one of John&rsquo;s most quietly powerful moments. The man who came to Jesus by night in chapter 3, who had heard that God was with him and that the wind of the Spirit blows where it will, now ventures a procedural objection in the Sanhedrin: &ldquo;Does our law judge a man without first giving him a hearing and learning what he does?&rdquo; (7:51). It is not yet an open confession, but it is a hesitant, legally-grounded defense of the one he has not forgotten. The authorities dismiss him with contempt, invoking the supposed impossibility of a prophet arising from Galilee. Nicodemus goes silent, but he is not the last time we will see him &mdash; he will come with myrrh and aloes to wrap the body of Jesus for burial.",
    ],
  },
  {
    id: "Rivers of Living Water",
    heading: "Rivers of Living Water",
    reference: "John 7:37&ndash;39",
    paragraphs: [
      "On the last day of the feast, the great day, Jesus stood up and cried out, &ldquo;If anyone thirsts, let him come to me and drink. Whoever believes in me, as the Scripture has said, &lsquo;Out of his heart will flow rivers of living water&rsquo;&rdquo; (7:37&ndash;38). This is the climax of John 7, and one of the most audacious public declarations in the entire Gospel. The verb &ldquo;cried out&rdquo; &mdash; used only for Jesus&rsquo;s most solemn pronouncements in John &mdash; signals that what follows is of the highest importance. And the setting &mdash; the last great day of the Feast of Tabernacles, when the water-drawing ceremony reached its climax &mdash; makes the claim all the more dramatic.",
      "The Feast of Tabernacles included a daily ceremony in which a priest drew water from the Pool of Siloam in a golden pitcher and carried it in procession to the temple, where it was poured out at the base of the altar of burnt offering. The ceremony was accompanied by the singing of the great Hallel (Psalms 113&ndash;118) and by joyful celebration. It looked backward to the water from the rock in the wilderness and forward to the eschatological water that Ezekiel had seen flowing from the temple (Ezekiel 47) and that Zechariah had associated with the day of the Lord (Zechariah 14:8). On the last great day, when the ceremony reached its peak, Jesus stands and cries out that he himself is the source of that living water.",
      "The invitation is universal in its scope: &ldquo;If anyone thirsts.&rdquo; Not: if you are ritually pure, or if you are a son of Abraham, or if you have studied the law, or if you are not under condemnation. Anyone who thirsts is invited to come. The thirst that Jesus addresses is the deep human thirst for meaning, for God, for life that does not run out &mdash; the thirst that the ceremonies of Tabernacles dramatized but could not satisfy. Jesus himself is the answer to the thirst that all the water-drawing ceremonies pointed to but could not slake.",
      "John&rsquo;s editorial note in verse 39 is essential for understanding what Jesus meant: &ldquo;Now this he said about the Spirit, whom those who believed in him were to receive, for as yet the Spirit had not been given, because Jesus was not yet glorified.&rdquo; The rivers of living water are the Holy Spirit, who will be poured out after Jesus is glorified &mdash; that is, after his death and resurrection and ascension. The water that flows from the believer&rsquo;s heart is not a natural spiritual capacity; it is the Spirit of the living God, given by the glorified Son. Every believer who has received the Spirit is, in this sense, a conduit of living water in the world.",
      "The promise of rivers &mdash; not a trickle, not a pool, but rivers, plural &mdash; speaks to the overflowing abundance of the Spirit&rsquo;s gift. The imagery draws on the river of Eden (Genesis 2), the water from the rock (Exodus 17), the river from the temple in Ezekiel 47 that grows deeper as it flows and brings life to everything it touches, and the living water promised to the woman at the well in John 4. Jesus is the new temple from whom the river of the Spirit flows, and every believer who drinks of him becomes in turn a source of living water for the thirsty world. This is the church&rsquo;s vocation: not to hoard the water of life but to let it flow through them to those who are dying of thirst.",
      "The immediate response to Jesus&rsquo;s declaration is the division that runs throughout the chapter. But even this division is a kind of testimony: the very fact that some hear his words and immediately identify him as the Prophet or the Christ, while others scramble for geographical objections, shows that his words carry the force of a claim that cannot be ignored. No one who heard him remained neutral. The rivers of living water that he promised are, even before they are given, already dividing humanity into those who thirst and come and those who turn away.",
    ],
  },
  {
    id: "Officers and Pharisees",
    heading: "No One Ever Spoke Like This Man",
    reference: "John 7:32, 45&ndash;53",
    paragraphs: [
      "The Pharisees and chief priests dispatch officers to arrest Jesus during his public teaching (7:32). It is a decisive step &mdash; from informal hostility to official action. The arresting officers would have been the temple police, men authorized to maintain order in the courts of the temple and to take persons into custody at the command of the Sanhedrin. The instruction is clear; the execution is another matter entirely.",
      "The officers return to the chief priests and Pharisees without Jesus. The question is withering in its contempt: &ldquo;Why did you not bring him?&rdquo; (7:45). The officers&rsquo; response has become one of the most celebrated sentences in the fourth Gospel: &ldquo;No one ever spoke like this man!&rdquo; (7:46). Men sent to arrest a teacher have been arrested by his words. They came to take him captive and have been captured by what he said. The authority that fills his teaching is not the authority of credential or institution; it is the authority of truth itself, bearing witness to itself in the ears of those who hear.",
      "The Pharisees are furious. &ldquo;Have you also been deceived? Have any of the authorities or the Pharisees believed in him? But this crowd that does not know the law is accursed&rdquo; (7:47&ndash;49). The argument is from authority: the leaders know better; the crowd is ignorant and therefore dangerous. It is an argument that has been used against every movement of the Spirit in history &mdash; the appeal to official consensus against the testimony of those who have directly encountered the person of Jesus. The Pharisees do not address the content of what Jesus said; they address the social location of those who have been moved by it.",
      "But then Nicodemus speaks. He is identified for the reader as the one who had come to Jesus by night &mdash; a reminder of chapter 3 and of the journey he began there. His objection is measured and procedural: &ldquo;Does our law judge a man without first giving him a hearing and learning what he does?&rdquo; (7:51). He does not yet confess Jesus openly; he asks only that due process be followed. It is the word of a man who is not yet ready to commit publicly but who cannot bring himself to condemn without a hearing. In the political dynamics of the Sanhedrin, it is a small but costly act of courage.",
      "The reply of the Pharisees is dismissive and, ironically, wrong: &ldquo;Are you from Galilee too? Search and see that no prophet arises from Galilee&rdquo; (7:52). In fact the prophet Jonah was from Galilee, as was the prophet Nahum by some traditions, and the Spirit of God has never been constrained by geography. The authorities&rsquo; confidence in their own knowledge is precisely the blindness that prevents them from seeing what the temple police and the murmuring crowd have glimpsed. They know the law but miss the one the law is about.",
      "The chapter ends, in many manuscripts, with the notice that everyone went to their own homes (7:53) &mdash; a mundane conclusion to a chapter of extraordinary spiritual intensity. The debates dissolve back into ordinary life. The crowd disperses, the Sanhedrin breaks up in disagreement, and Jesus retires, most likely to the Mount of Olives. But what has been said in the temple courts cannot be unsaid. The cry about rivers of living water has gone out, the officers have confessed that no one ever spoke this way, and Nicodemus has risked his position to defend a hearing. The chapter closes, but the question it has raised &mdash; who is this man, and what will be done with him? &mdash; will not rest.",
    ],
  },
];

const videoItems = [
  { videoId: "Jhn7FeastWtr1", title: "John 7 - Jesus at the Feast of Tabernacles" },
  { videoId: "Jhn7LivingWtr", title: "Rivers of Living Water - John 7:37-39 Sermon" },
  { videoId: "Jhn7DivisionC", title: "Division Over Jesus - A Study of John 7" },
  { videoId: "Jhn7SpiritGft", title: "The Spirit and the Feast - John 7 in Context" },
];

export default function John7GuidePage() {
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
            John 7 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jesus at the Feast of Tabernacles &mdash; going secretly to Jerusalem, teaching in the temple courts, a crowd divided about who he is, and the great cry on the last day of the feast: &ldquo;Let anyone who is thirsty come to me and drink&rdquo; &mdash; for out of his heart will flow rivers of living water.
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
              Deepen your study of John 7 through these video teachings on the Feast of Tabernacles, Jesus&rsquo;s declaration about rivers of living water, the divided crowd, and the officers who returned empty-handed saying no one ever spoke like this man.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>No One Ever Spoke Like This Man</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            John 7 confronts every reader with the same choice that faced the crowds in Jerusalem: who is this man who speaks with such authority and makes such extraordinary claims? The officers could not arrest him; the crowd could not agree about him; the Pharisees could not silence him. On the last great day of the feast he cried out an invitation that still goes out: if anyone thirsts, let him come &mdash; and the Spirit who was then promised has now been given to all who believe.
          </p>
        </div>
      </main>
    </div>
  );
}
