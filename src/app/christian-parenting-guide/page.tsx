"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F"; const CARD = "#12121F"; const BORDER = "#1E1E32";
const ACCENT = "#3a7d56"; const TEXT = "#F2F2F8"; const MUTED = "#9898B3";

const TABS = [
  "The Theology of Christian Parenting",
  "Discipline and Grace",
  "Passing On Faith",
  "Screens, Culture, and Formation",
  "What the Research Actually Shows",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section { id: Tab; heading: string; paragraphs: string[]; }

const sections: Section[] = [
  {
    id: "The Theology of Christian Parenting",
    heading: "The Theology of Christian Parenting",
    paragraphs: [
      "Children are not a possession to be owned but a gift to be stewarded. Psalm 127:3 declares: &ldquo;Children are a heritage from the Lord, the fruit of the womb a reward.&rdquo; The word &ldquo;heritage&rdquo; carries the force of a trust &mdash; something entrusted to a steward by the one who actually owns it. The parent who understands this is freed from the crushing weight of viewing their children as their ultimate project or their final achievement. The child belongs, ultimately, to God. The parent is a steward, not an owner. This is both humbling and liberating.",
      "The goal of Christian parenting is not to produce a compliant, well-behaved child or even a church-going adult. The goal is to raise a person who knows and loves God and neighbor &mdash; a person whose life is oriented toward the Kingdom rather than toward self. This distinction matters enormously in practice: a parent whose goal is compliance will use tools the gospel does not sanction; a parent whose goal is love of God will be patient with the long arc of formation.",
      "The theological vision for parenting is set out most comprehensively in Deuteronomy 6:4-9, the Shema: &ldquo;You shall love the Lord your God with all your heart and with all your soul and with all your might. And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.&rdquo; Faith formation, Moses insists, is not a Sunday activity. It is woven into the fabric of daily life.",
      "Notice the sequence of the Shema: the command begins with the parent&rsquo;s own heart. &ldquo;These words shall be on your heart&rdquo; &mdash; before any strategy for transmission, before any curriculum or devotional structure, the parent is called to genuine love of God as their first and irreducible calling. You cannot give what you do not have. The parent who is performing faith rather than living it has nothing to transmit to a child who is watching closely. Children are extraordinarily good detectors of inauthenticity.",
      "The parent as steward rather than owner also means that the parent is accountable to the one whose child this is. The father of the prodigal son did not force his son to stay, did not prevent him from leaving, did not pursue him into the far country. He let the son go, watched the road, and ran when the son returned. The parent who has genuinely understood that the child belongs to God is freed to love without controlling, to discipline without crushing, and to wait without despairing.",
      "Christian parenting is a participatory act: the parent participates in what God is doing in and through the child. The child is not a blank slate on which the parent writes whatever they choose; the child is a person made in the image of God with a particular calling, temperament, and set of gifts. The parent&rsquo;s task is not to impose a mold but to discern and cultivate what God has placed in this particular child. Proverbs 22:6 &mdash; &ldquo;Train up a child in the way he should go&rdquo; &mdash; can be read, in its Hebrew, as &ldquo;according to his way,&rdquo; meaning the child&rsquo;s own God-given bent. Faithful parenting pays close attention.",
    ],
  },
  {
    id: "Discipline and Grace",
    heading: "Discipline and Grace",
    paragraphs: [
      "The biblical theology of discipline begins in Proverbs, where the parental call to correct children is stated with uncomfortable directness: &ldquo;Whoever spares the rod hates his son, but he who loves him is diligent to discipline him&rdquo; (Proverbs 13:24). The rod passages in Proverbs &mdash; 13:24, 22:15, 23:13-14, 29:15 &mdash; have generated centuries of interpretive debate, with some reading them as endorsing physical punishment and others reading them as metaphorical for the full range of parental authority and correction.",
      "The key interpretive question is: what was the &ldquo;rod&rdquo; in ancient Israel? The shepherd&rsquo;s rod, as Psalm 23:4 describes it &mdash; &ldquo;your rod and your staff, they comfort me&rdquo; &mdash; was an instrument of guidance and protection, not merely punishment. The rod kept the sheep from wandering into danger. The metaphor may carry more nuance than a straightforward endorsement of physical discipline: the parent who loves uses the full range of their authority to keep the child from paths that lead to destruction, with gentleness and firmness in proportion to what the situation requires.",
      "Hebrews 12:5-11 places the theology of discipline in its deepest frame: &ldquo;The Lord disciplines the one he loves, and chastises every son whom he receives.&rdquo; The passage draws explicitly on Proverbs 3 and develops a crucial distinction: God disciplines not to punish but to form. &ldquo;He disciplines us for our good, that we may share his holiness. For the moment all discipline seems painful rather than pleasant, but later it yields the peaceful fruit of righteousness.&rdquo; The goal is righteousness. The fruit is peace. The method is pain proportionate to the formation it achieves.",
      "The Christian distinction between punishment and discipline maps directly onto the Hebrews 12 text. Punishment is past-oriented and retributive: you did wrong, you will suffer for it. Discipline is future-oriented and formative: I love you too much to let you remain as you are. The parent who punishes in anger is satisfying their own sense of justice or venting their own frustration; the parent who disciplines in love is investing in the child&rsquo;s long-term formation. Tedd Tripp&rsquo;s phrase captures it exactly: the goal is the heart, not the behavior.",
      "Grace in parenting is not permissiveness. The parent who absorbs the gospel grace of Christ does not respond by abandoning standards or pretending that the child&rsquo;s sin does not matter. Rather, they bring to the task of discipline the same posture that God brings to theirs: consistency without harshness, consequence without contempt, restoration without prolonged shame. The parent who models repentance &mdash; who can say, &ldquo;I was wrong when I reacted that way; will you forgive me?&rdquo; &mdash; is giving their child one of the most powerful demonstrations of the gospel available in ordinary family life.",
      "The parent is also under God&rsquo;s authority, and children need to see this. When the parent prays honestly about their own failures, reads Scripture as someone who needs it rather than as a teacher who has mastered it, and speaks openly about their own dependence on grace, the child learns that the gospel is not a standard imposed on children by adults who have it together &mdash; it is the air that everyone in the house breathes, including the parents. This is the texture that makes faith believable.",
    ],
  },
  {
    id: "Passing On Faith",
    heading: "Passing On Faith",
    paragraphs: [
      "The most important research on the religious development of American young people &mdash; the National Study of Youth and Religion, conducted by sociologist Christian Smith &mdash; identified the single strongest predictor of lasting faith in children: parents who practice faith authentically, pray with their children, discuss faith at home, and are embedded in a worshipping community. Not youth group attendance, not Christian schools, not the quality of the children&rsquo;s ministry at the local church &mdash; the faith of the parents, practiced genuinely and visibly in the home.",
      "This finding is both encouraging and demanding. Encouraging because it locates the most important work of faith formation where it has always been: in the home, in ordinary daily life, in the fabric of the family&rsquo;s actual practices and conversations. Demanding because it means that the parent who is disengaged from their own faith formation &mdash; who attends church out of habit but does not pray privately, read Scripture personally, or discuss faith honestly &mdash; cannot outsource that deficit to the church. The child can see through the performance.",
      "What does not work is equally clear from the research. Outsourcing faith formation entirely to the church &mdash; dropping children off for youth group and Sunday school without any corresponding home practice &mdash; does not produce lasting faith. Treating Christianity as a set of rules to enforce rather than a relationship to model does not produce lasting faith. Using faith as a behavior management tool (&ldquo;God is watching you&rdquo;) rather than as a gift to offer and a love to demonstrate does not produce lasting faith. These are not peripheral failures; they are central to the pattern of faith loss that Smith documented.",
      "The distinction between passing on faith and coercing faith is critical. You can share what you most deeply believe, practice it openly, invite your children into it, pray for them by name, take them to worship, read Scripture with them, and demonstrate that your faith actually costs you something and gives you something. What you cannot do is reach into your child&rsquo;s will and make them choose it. Genuine faith is not inheritable; it is transmittable as an invitation and a demonstration, but it must be received by a person who has freely chosen it.",
      "Spiritual conversations in the home are not lectures. The research consistently shows that the conversations that form faith are honest exchanges &mdash; parents sharing their own struggles with belief, their own questions, their own experiences of God, rather than providing pre-packaged theological answers. The parent who says, &ldquo;I don&rsquo;t fully understand why God let that happen, and I sometimes struggle with it too, but here is what I have found to be true&rdquo; is doing more for their child&rsquo;s faith than the parent who has an answer for every question.",
      "The practices that support faith transmission are largely the practices of the Shema: dinner table conversations about what God is doing, bedtime prayers that are honest rather than rote, regular church attendance practiced as a community commitment rather than an obligation, and the parent&rsquo;s own visible engagement with Scripture and prayer. None of these is heroic. All of them are ordinary. Deuteronomy 6 always knew this: the formation happens in the ordinary moments, when you sit, when you walk, when you lie down, when you rise.",
    ],
  },
  {
    id: "Screens, Culture, and Formation",
    heading: "Screens, Culture, and Formation",
    paragraphs: [
      "No previous generation of Christian parents has faced exactly this challenge. Children now carry in their pockets access to essentially everything &mdash; pornography, radicalization, endless distraction, social comparison, cyberbullying, and also extraordinary educational and creative resources. The smartphone has moved childhood inside, from the neighborhood and the yard into the palm of the hand, and the consequences are only beginning to be understood.",
      "The research of Jonathan Haidt, summarized in &ldquo;The Anxious Generation,&rdquo; is alarming for any parent paying attention. Haidt documents that smartphone adoption among adolescents &mdash; which accelerated sharply after 2012 &mdash; correlates with steep increases in anxiety, depression, loneliness, and self-harm, particularly among girls. The social comparison that is structurally embedded in platforms like Instagram, the constant availability of everyone&rsquo;s performance of their best life, the loss of unsupervised play and face-to-face social time &mdash; these have produced what Haidt calls the worst mental health crisis among adolescents in the recorded history of the United States.",
      "The Christian parenting response is not technophobia. Technology is morally neutral; what matters is how it is used and what it displaces. The printing press displaced oral culture and produced the Reformation. Television displaced evening family conversation and produced a more passive public. Smartphones have displaced boredom, unsupervised play, and face-to-face friendship, and produced anxiety, fragmentation, and loneliness. The question is always: what is this tool doing to us, and what is it preventing us from doing?",
      "Intentional formation around screens begins with intentional limits. The American Academy of Pediatrics recommends no screens for children under 18-24 months (except video calls), one hour per day for children 2-5, and consistent limits for older children with device-free times and zones. The Christian parent who takes these recommendations seriously &mdash; no phones at meals, no phones in bedrooms, no social media before high school &mdash; is swimming against a powerful cultural current, and they will need to explain themselves to their children repeatedly. The explanation is simple: these tools have demonstrated power to harm the people we love most, and we love you enough to make you temporarily unpopular.",
      "Equally important is not pretending that the digital world does not exist. Children who have honest conversations at home about what they are encountering online &mdash; the pornography, the extreme content, the social cruelty, the distorted standards of appearance &mdash; are far better equipped to navigate it than children whose parents respond to those topics with alarm, shame, or silence. The parent who can talk openly about hard things has maintained the relationship that makes ongoing guidance possible.",
      "The deeper formation question is about displacement: what is the screen displacing in your child&rsquo;s life, and is that trade worth making? If screen time displaces physical play, face-to-face friendship, reading, family conversation, and religious practice &mdash; the activities that research most consistently associates with flourishing &mdash; then the screen is not the problem; the displacement is the problem. The Christian parent&rsquo;s task is to protect the spaces in which the most important formation happens, even when the child resists.",
    ],
  },
  {
    id: "What the Research Actually Shows",
    heading: "What the Research Actually Shows",
    paragraphs: [
      "The most comprehensive research on the religious development of American young people is the National Study of Youth and Religion, conducted by sociologist Christian Smith at the University of Notre Dame and published in a series of volumes beginning with &ldquo;Soul Searching&rdquo; (2005). Smith and his colleagues interviewed thousands of American teenagers and their parents over several years, and the results were sobering for the church.",
      "The dominant religion of American teenagers, Smith found, is not Christianity &mdash; not even among teenagers who identify as Christian. It is what he called &ldquo;Moralistic Therapeutic Deism&rdquo; (MTD): the belief in a God who exists, wants people to be nice, and helps them feel good about themselves, but who is not particularly involved in daily life and makes no demanding claims on the self. MTD has no need for atonement, no theology of sin, no cross, and no resurrection. It is Christianity drained of its content and refilled with therapeutic culture.",
      "Strikingly, Smith found that MTD is not primarily adopted by teenagers in rebellion against their parents&rsquo; faith. It is transmitted by their parents. Parents who treat faith as a moral framework for being a good person, who do not pray specifically or honestly, who do not discuss what they believe and why, and who are not embedded in a community that makes genuine demands on them &mdash; those parents are, in effect, transmitting MTD rather than Christianity, even when they attend church.",
      "What actually inoculates young people against MTD and produces lasting Christian commitment is more specific than simply &ldquo;being religious.&rdquo; Smith&rsquo;s research identified parents who can articulate what they believe and why, who pray specifically and honestly rather than vaguely, who are connected to a community of other Christians in which the faith makes visible and costly differences to their lives, and who demonstrate that their faith is not merely a preference but a conviction that has actually shaped what they do, what they spend, and what they sacrifice.",
      "The research also shows that the young people most likely to maintain Christian faith into adulthood are those who had significant non-parental adult mentors in their faith community &mdash; youth ministers, Sunday school teachers, family friends &mdash; who knew them by name and invested in them personally. The church that produces these mentoring relationships is doing something the family cannot do alone: it is embedding the child in a community of faith that extends beyond the home.",
      "The practical implications for Christian parents are not complicated, though they are demanding. Pray specifically and honestly, not vaguely. Know what you believe and be able to say why. Be embedded in a worshipping community that you actually belong to, not merely attend. Let your faith cost you something visible &mdash; in your use of money, time, and energy &mdash; so that your children can see that it is real. And have honest, ongoing conversations about faith in the context of actual life, not only in formal teaching moments. This is Deuteronomy 6. It was always the answer.",
    ],
  },
];

const videoItems = [
  { videoId: "2V1cGi5Ot4s", title: "Tim Keller on Christian Parenting" },
  { videoId: "vdxTNOVVNeM", title: "Deuteronomy 6 — Passing Faith to the Next Generation" },
  { videoId: "2I91eHYoE6Y", title: "What Research Says About Raising Faithful Kids" },
];

export default function ChristianParentingGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const currentSection = sections.find((s) => s.id === tab);
  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: ACCENT, marginBottom: "0.6rem" }}>
            Marriage &amp; Family
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Parenting Guide
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1rem", maxWidth: 680 }}>
            Raising children in the faith is one of the most demanding and most important callings God gives. This guide
            explores the theology, discipline, research, and cultural challenges of Christian parenting &mdash; and what
            actually forms lasting faith in children.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "1.25rem 1.5rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12 }}>
            <p style={{ fontStyle: "italic", color: TEXT, lineHeight: 1.7, margin: "0 0 0.5rem" }}>
              &ldquo;You shall teach them diligently to your children, and shall talk of them when you sit in your house,
              and when you walk by the way, and when you lie down, and when you rise.&rdquo;
            </p>
            <p style={{ color: ACCENT, fontWeight: 700, fontSize: "0.85rem", margin: 0 }}>Deuteronomy 6:7</p>
          </div>
        </div>

        <nav aria-label="Page sections" style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                padding: "0.45rem 1rem",
                borderRadius: 20,
                border: "1px solid",
                borderColor: tab === t ? ACCENT : BORDER,
                background: tab === t ? ACCENT + "22" : "transparent",
                color: tab === t ? ACCENT : MUTED,
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                lineHeight: 1.4,
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        {currentSection && tab !== "Videos" && (
          <article>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: ACCENT, marginBottom: "1.5rem" }}>
              {currentSection.heading}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: MUTED, lineHeight: 1.8, fontSize: "0.97rem", margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </article>
        )}

        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: ACCENT, marginBottom: "0.25rem" }}>
              Teaching Videos
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem", margin: "0 0 0.5rem" }}>
              Sermons and lectures on Christian parenting &mdash; the theology, the research, and the practice of raising
              children in the faith.
            </p>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "0.9rem 1.1rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.97rem", margin: 0 }}>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem" }}>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>
            The parent who prays
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
            The most important thing you will do as a parent is pray &mdash; specifically, honestly, by name, over the
            long arc of your children&rsquo;s lives. You plant and water; God gives the growth. The harvest belongs to
            him. Plant faithfully.
          </p>
        </div>
      </main>
    </div>
  );
}
