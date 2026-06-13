"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Why College Is a Faith Crisis",
  "Intellectual Challenges",
  "Finding Christian Community",
  "Moral Pressure",
  "When Faith Wobbles",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Why College Is a Faith Crisis",
    heading: "Why College Is a Faith Crisis",
    paragraphs: [
      "The statistics are sobering: a significant percentage of young adults who were raised in church stop attending during college. The numbers vary by study and denomination, but every serious researcher who has examined the question has found the same pattern &mdash; the college years mark the single largest period of faith departure in the life of the American church. Understanding why requires moving past the surface explanation and examining the actual dynamics at work in the lives of eighteen-to-twenty-two-year-olds who were formed in the faith and then lost it.",
      "The departure is not primarily intellectual, despite what many people assume. The young person who leaves faith in college rarely does so because they encountered an argument they could not answer. The causes are more structural and sociological: leaving the family home means leaving the social system that supported faith &mdash; parents who prompted attendance, youth groups that provided community, a home church that was woven into the rhythm of family life. Without the scaffolding, the building is revealed as having no independent structure. Faith that was held by the community rather than owned by the individual does not survive transplanting.",
      "The university presents new ideas and worldviews, often for the first time in a serious, sustained, credentialed form. A professor who treats Christian belief as naive superstition &mdash; even without explicit argument &mdash; can have an enormous effect on a student who has never encountered intellectual opposition to faith. The student who grew up in a Christian home and Christian school and Christian youth group may arrive at university never having met anyone who took Christianity seriously as an intellectual question to be examined and possibly rejected. The first encounter with serious intellectual opposition, in a setting where the professor carries authority, can be disorienting in ways that exceed the content of the objection.",
      "New moral freedoms are the third factor, and arguably the most practically powerful. College is, for many students, the first experience of living outside parental authority and community accountability. The sexual freedom, substance use, and social pressure that characterize much of campus culture present a different kind of challenge to faith than intellectual objection &mdash; one that operates through the body and through desire rather than through argument. A faith that was maintained partly through external structure and accountability is much harder to maintain when that structure is removed and the desires that faith restrains are suddenly available and socially normalized.",
      "The crucial distinction that explains the divergence between those who retain faith and those who do not is the distinction between borrowed faith and owned faith. Borrowed faith is inherited &mdash; it is the faith of the family, the community, the tradition. It may be deeply sincere, but it has not been personally examined, wrestled with, and claimed by the individual as their own. Owned faith has survived questioning, has been tested against alternatives, has been chosen rather than simply received. The college years are the primary arena for this transition. Navigated well, they can be the making of a deeper Christian life. Navigated poorly, they produce either a superficial Christianity that has walled itself off from honest questions, or permanent departure.",
      "The goal of the college years, from the standpoint of Christian formation, is not to emerge from them with beliefs unchanged. The goal is to wrestle with those beliefs honestly &mdash; to take the intellectual challenges seriously, to feel the weight of the moral demands, to know what it is to be a Christian in a community that is not Christian &mdash; and to emerge with a faith that is genuinely yours. The faith of the twenty-two-year-old who has been through that process and remained is incomparably more valuable than the faith of the eighteen-year-old who arrived at university with it. The crisis, navigated well, produces something the arriving freshman did not have: a faith that belongs to them.",
      "This means that parents, youth ministers, and campus ministers who succeed are not those who protect young people from intellectual challenge but those who prepare them for it. The student who arrives at university having been taught that their faith is reasonable, that the intellectual objections have serious scholarly responses, that doubt is not the enemy of faith but its serious form &mdash; that student is vastly better equipped than one who has been kept in a protective environment and encounters for the first time, at eighteen, that serious people disagree with what they have been taught to believe.",
    ],
  },
  {
    id: "Intellectual Challenges",
    heading: "Intellectual Challenges: Faith and the University",
    paragraphs: [
      "The university presents Christianity with serious intellectual challenges &mdash; and this is a gift, not a threat. The challenges are real: the problem of evil asks how a good, all-powerful God can permit the scale of suffering that history records. The historical-critical study of the Bible applies the same tools of literary and historical analysis to Scripture that scholars apply to any ancient text, raising questions about authorship, historicity, and transmission. The science-faith question asks how the claims of evolutionary biology and cosmology relate to the claims of Genesis. Comparative religion asks why Christianity should be true when so many other traditions exist with equally sincere and sophisticated adherents.",
      "The sociology of belief presents a particularly disorienting challenge for the college student: the observation that people tend to believe what they were raised to believe, that religious belief correlates strongly with geography and family of origin, and that the intellectual frameworks through which people evaluate religious claims are themselves shaped by their cultural location. The implication &mdash; &ldquo;you only believe because you were raised to believe&rdquo; &mdash; seems to undercut the claim that Christian belief is based on genuine evidence and argument. The campus encounter with this challenge, often in Philosophy of Religion or Introduction to Sociology, can unsettle students who have never considered it.",
      "The moral objections to Christianity are the ones that often land hardest with the generation currently in college. Christianity&rsquo;s historical record on slavery, colonialism, the treatment of women, and LGBTQ+ people is presented &mdash; often accurately &mdash; as a record of complicity with oppression. The student who has been formed in a broadly progressive moral culture may find the moral objections to Christianity more compelling than the metaphysical objections, because the progressive moral framework feels self-evident in a way that the objections to theism do not. Engaging this honestly requires both acknowledging what is genuinely true in the moral critique and recovering the resources within the Christian tradition for a richer account of human dignity, justice, and love.",
      "None of these objections are new. Christians have engaged them seriously for centuries, and the engagement has produced a rich tradition of apologetics and philosophical theology. The problem of evil has been addressed with sustained depth by Alvin Plantinga, whose free will defense dismantled the logical problem of evil and whose work on the evidential problem remains the most sophisticated philosophical engagement available. The science-faith question has been addressed by Francis Collins, who directed the Human Genome Project and argued compellingly that evolutionary biology and Christian faith are not merely compatible but mutually illuminating. N.T. Wright has produced what many consider the most comprehensive scholarly defense of the resurrection of Jesus available in any language.",
      "Tim Keller&rsquo;s &ldquo;The Reason for God&rdquo; engages the contemporary objections to Christianity with the seriousness they deserve &mdash; not dismissing them but following the argument, acknowledging the genuine difficulties, and then pressing the counterarguments with equal rigor. Keller&rsquo;s approach is particularly valuable because he takes the questioner seriously rather than caricaturing the objection. The student who reads Keller alongside the most serious critics of Christianity will find that the intellectual landscape is more complex and more interesting than either the uncritical believer or the confident atheist allows.",
      "The posture that intellectual honesty requires is following the argument wherever it leads. This is a commitment that both Christians and their critics claim, but the Christian has particular reason to embrace it: if Christianity is true, serious intellectual engagement with it will not destroy it but deepen it. The students who have gone through the intellectual challenges of university honestly &mdash; who have read the best critics and the best defenders, who have engaged their professors rather than avoiding the questions &mdash; are the ones who emerge with the most durable faith. The faith that has been tested against the best objections available and has found them insufficient is stronger than the faith that was never tested.",
      "The practical counsel for the college student encountering intellectual challenges: do not avoid them, but engage them with the best resources available. This means reading the critics seriously &mdash; but also reading the serious scholarly defenders, who are too often unknown to students whose Christian formation did not include apologetics. It means finding a campus minister or professor who can engage the questions rather than dismissing them. And it means holding the questions in the context of the practices &mdash; prayer, Scripture, community &mdash; that maintain the relationship with the God about whom the questions are being asked, so that the intellectual engagement is not conducted in a relational vacuum.",
    ],
  },
  {
    id: "Finding Christian Community",
    heading: "Finding Christian Community on Campus",
    paragraphs: [
      "The single most important predictor of whether a college student retains faith is not the strength of their intellectual arguments or the depth of their personal devotion. It is whether they find genuine Christian community on campus. The research on this question is remarkably consistent: students who connect with a vital Christian community in their first semester are far more likely to graduate with their faith intact than those who do not, regardless of the intellectual or moral challenges they face. The inverse is equally consistent: students who are isolated in their faith, who do not find Christian community, lose it at dramatically higher rates even when they face no particular intellectual crisis.",
      "The major campus ministry organizations exist precisely to provide this community. InterVarsity Christian Fellowship has a presence on hundreds of campuses and is characterized by intellectual seriousness, multiethnic vision, and genuine community. Cru (formerly Campus Crusade for Christ) is the largest campus ministry in the United States and offers both evangelistic outreach and community for believers. Reformed University Fellowship (RUF) is a Presbyterian campus ministry known for theological depth and pastoral care, particularly strong on campuses in the South. The Navigators emphasize Scripture memory, discipleship, and multiplication. Each organization has a distinct ethos, and finding the right fit matters: the community needs to be one where the student can be honestly known.",
      "A local church with a genuine college ministry can be even more anchoring than a campus organization, because it provides intergenerational community &mdash; relationships with older Christians, families, and people in different life stages who model what a lifetime of faith looks like. The student who attends only campus ministry can develop an understanding of Christian community as a peer phenomenon, organized around their life stage. The student who is integrated into a local church is introduced to a vision of the body of Christ that extends across age and life circumstance &mdash; which is what the New Testament describes and what Christian community has been for most of its history.",
      "What to look for in a campus community: not a social club that happens to be Christian, but a community where honest questions are welcomed, Scripture is treated as authoritative and studied seriously, and people are actually living differently because of their faith. The warning signs of a community that will not sustain faith: an atmosphere where doubt is treated as threatening, where social belonging seems to depend on performance or conformity, where the intellectual content is thin and the music and the emotion do most of the work. These communities provide community but not formation; they can feel warm without actually deepening faith.",
      "The first weeks of the first semester are critical. The student who arrives on campus and immediately begins looking for Christian community &mdash; who goes to the campus ministry fair, who finds the church, who introduces themselves to the Christian floor in the dorm &mdash; is doing something spiritually urgent. The student who intends to find community later, after getting settled, after finding their academic footing, often finds that a semester has passed and they have built a social world with no Christian connections. The architecture of college social life sets very quickly in the first weeks; the friendships formed then tend to persist. Finding Christian community early is not optional for the student who intends to retain faith.",
      "The relationships formed in Christian campus community are among the most important of a lifetime. The friends who prayed with you at nineteen, who held you accountable and were held accountable by you, who were honest about their failures and their faith &mdash; these relationships model what Christian friendship looks like in a way that Sunday morning attendance alone cannot. They also create the kind of accountability that the moral challenges of campus life require: not peer pressure toward vice but genuine community formed around shared convictions, where you are known well enough to be called out when you are drifting.",
      "For the student who has not found community: it is not too late, but it requires initiative. Showing up once to a campus ministry meeting is not enough; the community is formed over time through repeated presence and genuine investment. Introducing yourself, being honest about where you are, accepting invitations, and eventually extending them &mdash; these are the practices that build community. The first meeting is awkward. The fifth is less so. The twenty-fifth is where genuine relationship begins. Most students who say they &ldquo;tried&rdquo; campus ministry attended two or three times and felt like outsiders; the community had not yet had time to receive them.",
    ],
  },
  {
    id: "Moral Pressure",
    heading: "Moral Pressure: Living a Christian Life on Campus",
    paragraphs: [
      "College culture presents particular moral challenges that are specific to its combination of new freedom, peer pressure, and the absence of the external structures that previously supported Christian living. The moral challenges are not limited to the dramatic &mdash; they include the quotidian: academic dishonesty normalized by a culture of looking out for oneself, substance use as the social lubricant of campus life, and the pervasive sense that the Christian moral framework is a relic of a less enlightened era that serious people have moved past. Living within that culture as a practicing Christian requires both clarity about what you believe and the social courage to be genuinely countercultural.",
      "The Christian sexual ethic is the most contested moral question on contemporary campuses. It directly contradicts the sexual ethic of campus culture, which treats sexual freedom as a basic human right and views the Christian position as a form of harmful repression. The student who holds to the traditional Christian view of sexuality &mdash; that sex belongs within the covenant of marriage between a man and a woman &mdash; will find that position not merely disagreed with but often treated as incomprehensible or actively harmful. This creates enormous social pressure, particularly for students whose social world is primarily non-Christian, and particularly because the pressure operates not just through argument but through mockery, exclusion, and the powerful force of wanting to belong.",
      "The theology behind the Christian sexual ethic matters for the student who is trying to live it. Abstinence understood merely as a rule &mdash; &ldquo;don&rsquo;t do this because God says so&rdquo; &mdash; is too thin to sustain under social pressure. The richer theological account understands chastity as part of a larger vision: the body as a temple of the Holy Spirit and therefore not one&rsquo;s own to dispose of as one chooses; sex as a covenantal sign that belongs to covenant relationship; the resurrection of the body as the ultimate affirmation that bodies matter and that what we do with them matters eternally. This is not merely a set of restrictions but a vision of the body and of love that is, on its own terms, more rather than less dignified than the alternatives.",
      "Substance use presents a different kind of challenge. Alcohol and drug use are pervasive on most campuses, and the social cost of abstaining or moderating can feel high in environments where parties are the primary social venue. The Christian student who does not drink is making a choice that requires social imagination &mdash; finding social contexts that are not organized around alcohol, building relationships that are based on something other than shared intoxication, and developing the social confidence to be present in party environments without participating in ways that compromise their integrity. This is not impossible, but it requires intentionality and, again, community with other Christians who share the conviction.",
      "Academic dishonesty is less discussed in Christian ethics but equally real. The pressure to cheat &mdash; on exams, on assignments, through plagiarism &mdash; is present on virtually every campus, and the normalization of academic dishonesty in campus culture can make it feel like a minor transgression rather than a violation of the Christian commitments to truth and integrity. The Christian student who refuses to cheat may pay a real academic cost in some contexts. The theology of vocation &mdash; that academic work is itself an act of service to God and neighbor, worth doing honestly even at personal cost &mdash; is the frame that makes integrity costly but coherent.",
      "The isolation that comes from living countercultural convictions is perhaps the greatest practical danger. The student who is trying to maintain Christian moral commitments without Christian community is in a genuinely precarious position. Human beings are profoundly social, and the desire to belong is not a weakness but a feature of our creaturely nature. Without community with other Christians who share their convictions, the student faces the moral challenges of campus culture alone, with no accountability, no encouragement, and no shared language for why these things matter. The community that surrounds and supports Christian moral living is not optional; it is the environment in which that living becomes humanly sustainable.",
      "A positive vision of the moral life matters more than rules. The student who is sustained by the beauty of what they are living toward &mdash; a life of integrity, a sexuality ordered toward covenant love, a relationship with substances that serves freedom rather than bondage &mdash; is in a fundamentally different position than the student who is merely holding the line. Christian moral formation that is primarily negative &mdash; don&rsquo;t, stop, avoid &mdash; does not have the spiritual energy to sustain a person through the pressures of campus life. The positive vision of the good life, the life of virtue, the life that is genuinely human because it is genuinely oriented toward God &mdash; that is what moral formation is for.",
    ],
  },
  {
    id: "When Faith Wobbles",
    heading: "When Faith Wobbles: Navigating Doubt in College",
    paragraphs: [
      "Doubt in college is not a sign of spiritual failure. It is, in many cases, a sign that faith is being taken seriously for the first time &mdash; that the inherited beliefs are encountering the real world in all its complexity and refusing to be satisfied with easy answers. The student who has never doubted in college may simply not have been paying attention. The student who doubts and engages the doubt honestly is doing the hardest and most important spiritual work of the college years. The goal is not the absence of doubt but honest engagement with it that produces a more robust and personally owned faith.",
      "The first thing to do when faith wobbles is to name it honestly. Not to the most judgmental person you know, and not in a public context where the social stakes are high. But to someone: a trusted friend, a campus minister, a pastor, a spiritual director. The isolation of doubt is one of its most destructive features &mdash; the person who is doubting in secret, who is afraid to voice their questions, is in a much more precarious position than the one who brings them into relationship. The question spoken aloud to a trusted person loses some of its power; the question held alone in the dark tends to grow.",
      "The second response is to read seriously in the areas of difficulty. This is harder than it sounds, because the doubting student is often reading the critics of Christianity without reading the serious scholarly defenders. The experience of hearing the objection without the response creates a one-sided picture that inflates the power of the objection. The student who is troubled by the problem of evil should read Alvin Plantinga. The student who is troubled by the historical reliability of the New Testament should read N.T. Wright and F.F. Bruce. The student who is troubled by the science-faith question should read Francis Collins. The objections have responses; engaging the responses is the intellectual honesty that honest doubt requires.",
      "The third response &mdash; the one that is most counterintuitive and most important &mdash; is to continue the practices even when they don&rsquo;t feel productive. This is the ancient wisdom of the Christian tradition: act faithfully even in seasons of unfaithfulness. Keep attending church, even when church feels empty. Keep praying, even when prayer feels like speaking into a void. Keep reading Scripture, even when the words feel flat and distant. The practices are not primarily about producing feeling; they are about maintaining the connection through which, in God&rsquo;s time, feeling may return. The student who abandons the practices during a season of doubt has removed the very structures that sustain faith during precisely the time when faith needs sustaining.",
      "C.S. Lewis, who himself went through profound doubt before his conversion and then again after the death of his wife, articulated this with characteristic precision: the moment when prayer feels most pointless is the most important moment to keep praying. Not because the feeling of futility is wrong, but because the practice of prayer in the absence of consolation is a form of trust that is, in its own way, deeper than prayer that comes easily. The person who prays when it feels productive is doing something good; the person who prays when it feels like nothing is doing something heroic.",
      "Give it time. Seasons of doubt in college often have a duration &mdash; they are precipitated by specific intellectual or relational challenges, they have a period of intensity, and then, for those who engage them honestly rather than fleeing them or surrendering to them, they pass or transform into something more complex and more durable. The student in the middle of a faith crisis cannot see the other side; the experience has the quality of permanence that all acute crises have. But the testimony of those who have been through it and emerged is consistent: the doubt was not the end. For many, it was the beginning of a faith that could actually bear weight.",
      "The witness of former doubters is one of the most powerful resources available to the student whose faith is wobbling. Francis Collins, one of the most accomplished scientists of the twentieth century, was an atheist who came to Christian faith through honest engagement with the evidence. Alister McGrath was a committed atheist who studied biochemistry at Oxford before converting to Christianity and becoming one of its most prolific defenders. Lee Strobel was a legal journalist who set out to disprove Christianity and became convinced of it in the process. These are not credulous people; they are people who engaged the questions seriously and arrived at faith through that engagement. Their testimony challenges the assumption that intellectual seriousness leads away from Christianity &mdash; it suggests that for many people, it leads toward it.",
    ],
  },
];

const videoItems = [
  { videoId: "Kx31oHgGK7g", title: "Tim Keller — Faith and Doubt in College" },
  { videoId: "yHiHVBCgIEM", title: "How to Keep Your Faith in College" },
  { videoId: "ER4wwmC8oRU", title: "Responding to Intellectual Challenges to Christianity" },
];

export default function ChristianCollegeFaithGuide() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "0.78rem", color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.6rem" }}>
            Faith &amp; College
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian College Faith Guide
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Keeping and deepening faith in college &mdash; navigating intellectual challenges, finding Christian community on campus, handling moral pressure, what to do when faith wobbles, and building a spiritual life far from home.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Romans 12:2</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? "rgba(59,130,246,0.12)" : "transparent",
              color: tab === t ? ACCENT : MUTED,
              cursor: "pointer", fontSize: "0.88rem", fontWeight: tab === t ? 600 : 400,
              transition: "all 0.15s ease", whiteSpace: "nowrap" as const,
            }}>
              {t}
            </button>
          ))}
        </nav>

        {/* Text tab content */}
        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p key={i} style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((video) => (
                <div key={video.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>The Crisis, Navigated Well, Becomes the Making of Faith</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>The goal of the college years is not to emerge from them with beliefs unchanged &mdash; it is to wrestle with those beliefs honestly and emerge with a faith that is yours. The student who has been through the intellectual challenges, the moral pressures, and the seasons of doubt, and has engaged them with honesty and community, possesses something the entering freshman did not: a faith that can bear the weight of a life.</p>
        </div>
      </main>
    </div>
  );
}
