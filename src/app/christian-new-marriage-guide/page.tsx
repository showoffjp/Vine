"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Theology of Marriage",
  "Leaving and Cleaving",
  "Conflict and Communication",
  "Spiritual Intimacy",
  "Sex, Money, and the First Years",
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
    id: "The Theology of Marriage",
    heading: "The Theology of Marriage: Ephesians 5 and the Gospel",
    paragraphs: [
      "Ephesians 5:22-33 is the foundational Christian text on marriage &mdash; and the most misread passage in the New Testament. The misreading is almost always in the same direction: extracting the command to wives from the larger passage and using it as a warrant for male authority and female subordination. But the text, read in its actual context, is doing something far more radical and far more demanding than a simple hierarchy of authority.",
      "The passage is embedded in a larger section about mutual submission that begins at verse 21: &ldquo;submitting to one another out of reverence for Christ.&rdquo; The Greek participle translated &ldquo;submitting&rdquo; in verse 21 is the same word that governs verse 22. Paul does not begin a new section at verse 22 with a new principle; he applies the mutual submission of verse 21 to the specific relationship of husband and wife. The framework of the whole passage is mutual self-giving, not unilateral authority.",
      "The husband&rsquo;s headship, in Ephesians 5, is defined entirely by the standard of Christ&rsquo;s love for the church. And what did that love look like? Verse 25: &ldquo;just as Christ loved the church and gave himself up for her.&rdquo; The word translated &ldquo;gave himself up&rdquo; is the same word used for Christ&rsquo;s death on the cross. The husband&rsquo;s authority is defined as self-emptying, sacrificial love that goes to the cross. This is not a charter for privilege or domination; it is an infinitely demanding call to love that places the wife&rsquo;s flourishing above the husband&rsquo;s own comfort, preference, and self-interest.",
      "The wife&rsquo;s submission, in this framework, is a voluntary and free response to a husband who is loving her as Christ loved the church. Paul is not describing a relationship of command and obedience between strangers; he is describing the free response of love within a relationship of total self-giving. The wife who submits to a husband who is genuinely loving her as Christ loved the church is not subordinating herself to tyranny; she is participating in a relationship in which her needs and flourishing are the husband&rsquo;s primary concern.",
      "The theological climax of the passage is verses 31-32: &ldquo;Therefore a man shall leave his father and mother and hold fast to his wife, and the two shall become one flesh. This mystery is profound, and I am saying that it refers to Christ and the church.&rdquo; Paul reads Genesis 2:24 as a type pointing to the relationship between Christ and the church. Marriage is not primarily an institution for human happiness, though it can produce that. It is a sign &mdash; a visible, embodied enactment of the relationship between Christ and his people. This gives Christian marriage a vocation that secular marriage simply cannot have: it is a participation in the mystery of the gospel.",
      "This means that Christian marriage is different in kind from secular marriage, not merely different in degree. Secular marriage is a relationship of mutual benefit and affection between two people, valuable for what it provides to its participants. Christian marriage is all of that &mdash; and a vocation, a sign, a participation in a story much larger than the two people in it. The couple who understands themselves as enacting the relationship between Christ and the church is called to a quality of love that exceeds what natural affection alone can sustain. The gospel resources their marriage with grace, forgiveness, and a love that draws on something beyond themselves.",
      "The practical implication for new marriages is this: begin with the theology. Not as an abstract exercise, but as a shared framework for understanding what you are doing and why. The couple that knows they are participating in something larger than their own happiness is better equipped to survive the seasons when happiness is not what they feel. The couple that has no framework beyond mutual satisfaction will find the first years of marriage &mdash; which are always harder than the wedding suggested &mdash; disorienting and threatening. The gospel frame makes sense of the difficulty: this is hard because it is calling you to something you cannot do in your own strength.",
    ],
  },
  {
    id: "Leaving and Cleaving",
    heading: "Leaving and Cleaving: The First Task of Marriage",
    paragraphs: [
      "Genesis 2:24 is the oldest statement on marriage in Scripture: &ldquo;Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.&rdquo; Jesus quotes it in his discussion of divorce (Matthew 19:5). Paul quotes it in Ephesians 5:31 and calls it a mystery. The text is foundational for the entire biblical theology of marriage &mdash; and it is structured around two verbs that, taken seriously, illuminate the most common crises of the first year of marriage.",
      "The first verb is &ldquo;leave&rdquo; (Hebrew: azab), which means to abandon, to release, to let go. The word is used in other contexts for forsaking a city, abandoning a cause, or departing from a relationship. Applied to marriage, it means something decisive: a break with the primary loyalty of the family of origin. This is not abandonment of relationship with parents &mdash; the fifth commandment still applies, and honoring father and mother remains a lifelong obligation. But it is a reordering of primary loyalty: the new marriage is now the primary relationship, and the relationships with parents are reconfigured around that new reality.",
      "The second verb is &ldquo;cleave&rdquo; or &ldquo;hold fast&rdquo; (Hebrew: dabaq), which means to cling, to be joined inseparably, to stick. The word is used in other contexts for a sword clinging to its sheath, for Ruth clinging to Naomi, for the Israelites being instructed to hold fast to the Lord their God. Applied to marriage, it describes a bond of total commitment: the husband clings to his wife as his primary human relationship, in a connection that is meant to be unbreakable.",
      "The &ldquo;one flesh&rdquo; mystery is often reduced to sexual union, but Paul&rsquo;s use of the phrase in Ephesians 5 suggests it is pointing at something more comprehensive: the creation of a new social unit, a new family, with its own identity, its own decisions, and its own life. Two people who were previously members of different families have become one family. This has implications that new couples often underestimate: decisions about where to live, how to spend money, how to spend holidays, and what commitments to make are now decisions for the new family, not for the individuals in consultation with their families of origin.",
      "The most common first-year marriage crisis is one or both partners failing to fully make the transition described in Genesis 2:24. The husband who is still emotionally and practically dependent on his mother for major life decisions has not yet left. The wife who brings her parents into every significant disagreement with her husband has not yet cleaved. The couple that spends every holiday with one set of parents because the other option is unthinkable has not yet established the primacy of their own household. These are not small matters; they are the structural foundations of the marriage, and when they are absent, the marriage is built on a fault line.",
      "The in-law question is one of the most delicate of the first years. Healthy family-of-origin involvement looks like interest, support, and availability without intrusion, advice-giving without expectation of compliance, and the willingness to step back when the new marriage needs space. Unhealthy involvement looks like attempts to maintain the same level of influence and access that existed before the marriage, the refusal to recognize the primacy of the new relationship, and the treatment of the new spouse as a rival rather than as the person their child has chosen to love above all others. Navigating this well requires both spouses to be clear about the Genesis 2:24 framework and willing to defend it, gently and firmly, with their own families.",
      "The &ldquo;one flesh&rdquo; reality has implications for decision-making that couples often discover only in conflict. The husband who makes a major financial or career decision without genuine consultation and agreement with his wife has not yet understood what &ldquo;one flesh&rdquo; means. The wife who maintains a separate financial life &mdash; separate accounts, separate decisions, separate goals &mdash; as a hedge against the vulnerability of total union has not yet cleaved. The first years of marriage are the years in which two separate lives must genuinely become one, with all the loss of autonomy and all the gain of companionship that entails.",
    ],
  },
  {
    id: "Conflict and Communication",
    heading: "Conflict and Communication: Every Couple Fights",
    paragraphs: [
      "Every couple fights. The couple who never fights is not the couple who has a perfect marriage; it is the couple who has learned to suppress conflict in ways that will eventually produce a much larger reckoning. The question is not whether you will experience conflict in the first years of marriage &mdash; you will &mdash; but whether your conflict is productive or destructive. Productive conflict is conflict that clarifies, leads to understanding, and produces change. Destructive conflict is conflict that wounds, degrades the relationship, and leaves both partners less able to trust each other.",
      "John Gottman&rsquo;s decades of research at the University of Washington identified what he called the four horsemen of relationship apocalypse: criticism, contempt, defensiveness, and stonewalling. These are the patterns that, when they appear consistently in a relationship, predict its dissolution with remarkably high accuracy. Criticism is the attack on a partner&rsquo;s character rather than a complaint about a specific behavior. Contempt &mdash; the most destructive of the four &mdash; is the expression of superiority: mockery, eye-rolling, dismissiveness, the treatment of a partner as fundamentally below you. Defensiveness is the refusal to take responsibility, the counter-accusation that deflects rather than engages. Stonewalling is the emotional withdrawal that shuts down communication entirely.",
      "Contempt is the single strongest predictor of divorce in Gottman&rsquo;s research. It is worth pausing on why. Contempt communicates not merely disagreement but a fundamental disrespect &mdash; the message that the partner is not worthy of serious engagement, that their perspective is beneath consideration. A partner who is contemptuous has stopped trying to persuade or to understand; they have concluded that the other person is simply less than they are. This is incompatible with the theological vision of marriage as the union of two image-bearers of God who are called to love each other as Christ loved the church.",
      "The biblical frame for conflict in marriage is explicit and practical. Ephesians 4:26: &ldquo;Be angry and do not sin; do not let the sun go down on your anger.&rdquo; Anger in marriage is allowed &mdash; it is a signal that something important has been violated or neglected, and suppressing it is not holiness. But anger that is not addressed, that is allowed to accumulate through nights of unresolved tension, becomes resentment, and resentment is the soil in which contempt grows. The ancient wisdom is to address conflict the same day. Not to resolve it perfectly, not to achieve complete understanding, but to keep the channel open and to refuse to let the wound fester overnight.",
      "Ephesians 4:29 adds another dimension: &ldquo;Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear.&rdquo; In the context of marriage, this is a demand for a quality of speech that takes seriously the power of words to build or destroy. The things said in anger in a marriage &mdash; the escalated insult, the unearthed vulnerability, the threat &mdash; are not merely words. They leave marks that persist long after the argument is over. The couple that learns to fight without speaking words they cannot un-speak has learned something crucial.",
      "The skill of distinguishing positions from interests is one of the most useful tools available for marital conflict. The position is what each partner says they want: &ldquo;I want us to spend Christmas with my family.&rdquo; The interest is what they actually need: belonging, recognition, the maintenance of a relationship that matters to them, the assurance that their family is valued by their spouse. Two conflicting positions often conceal interests that are not actually in conflict. Finding the interests beneath the positions &mdash; asking &ldquo;why does this matter to you?&rdquo; rather than arguing about the position &mdash; is the practice that transforms conflict from a zero-sum competition into a collaborative search for solutions that honor both partners&rsquo; real needs.",
      "The practice of repair is perhaps the most important skill in marital conflict. Repair is not winning the argument or achieving the resolution; it is the act of restoring connection after conflict. It looks like a small gesture that signals willingness to stop escalating &mdash; a touch, a shift in tone, a phrase that acknowledges the other person&rsquo;s feelings. Gottman found that successful couples repair early and often, and that the willingness to repair, rather than the absence of conflict, is what distinguishes marriages that thrive from those that don&rsquo;t. The couple that fights hard but repairs quickly is in a fundamentally better position than the couple that keeps everything smooth at the cost of never addressing what is real.",
    ],
  },
  {
    id: "Spiritual Intimacy",
    heading: "Spiritual Intimacy: The Most Neglected Dimension",
    paragraphs: [
      "Spiritual intimacy is the most neglected dimension of Christian marriage. Couples who share doctrinal commitments, attend the same church, and would describe themselves as Christian rarely share their actual interior spiritual lives with each other. They have parallel spiritual lives &mdash; each with their own faith, their own doubts, their own prayers, their own relationship with God &mdash; but the marriage does not include genuine spiritual community between the spouses. This is a loss of something the Christian vision of marriage specifically promises and calls for.",
      "Praying together as a couple is one of the most vulnerable and powerful practices available to a married couple &mdash; and one of the most commonly avoided. The avoidance is instructive: prayer requires honesty, and honesty requires vulnerability, and vulnerability with a spouse is more threatening than vulnerability with almost anyone else. The person who can pray openly in a small group or a church service may find that praying aloud with their husband or wife feels impossible. This is because the stakes are higher: the spouse knows you well enough to see through performance, and the prayer spoken between spouses has an immediacy and an intimacy that corporate prayer does not.",
      "What shared prayer looks like in practice is not a performance of religiosity. It is short, regular, and honest. Many couples who have developed a practice of praying together report that the most powerful dimension is not the length or the eloquence but the simple act of turning together, each day, toward the God who is the source of their marriage and the sustainer of their love. Five minutes of honest prayer together before sleep is not nothing; it is the maintenance of a spiritual channel between two people that, when it is open, transforms the quality of everything else in the marriage.",
      "Reading Scripture together is another practice that is simpler than it sounds and more powerful than many couples expect. This is not a Bible study; it is a shared encounter with the Word that is the foundation of both spouses&rsquo; faith. Reading a psalm together before bed, working through a book of the Bible together over months, using a devotional guide that provides a shared text for reflection &mdash; these practices create a common spiritual vocabulary and a shared encounter with God that deepens the marriage in ways that more explicitly &ldquo;spiritual&rdquo; activities sometimes do not.",
      "Attending church together with genuine engagement rather than spectating is another dimension of spiritual intimacy that couples sometimes overlook. The couple that attends the same service but goes entirely separate ways &mdash; who never discusses the sermon, never prays about what they heard, never connects what was said to their actual life together &mdash; is attending church in parallel rather than together. The couple that makes Sunday morning worship a genuine shared practice, including conversation about what they heard and what it means for their lives, is building something in common that strengthens the marriage.",
      "Talking honestly about spiritual lives and struggles is the dimension that most couples find most difficult. The husband who is experiencing doubt does not mention it to his wife because he is afraid of destabilizing her faith or revealing a vulnerability he does not know how to hold. The wife who is struggling with prayer does not mention it to her husband because she is ashamed, or because they have never established a language for this kind of conversation. The result is two people living through their spiritual lives alone, inside a marriage that is supposed to be the context for their most intimate human relationship. The development of a common language for spiritual experience &mdash; the freedom to say &ldquo;I&rsquo;m struggling with this&rdquo; or &ldquo;something is happening in my faith that I need to tell you about&rdquo; &mdash; is one of the most valuable things a couple can build in the first years.",
      "The couple that prays together is not necessarily the couple that never fights &mdash; but it is the couple that has access to a shared source of grace that is larger than both of them. The practical benefits of shared spiritual life are not incidental: couples who pray together regularly report higher levels of marital satisfaction, greater resilience in the face of conflict, and a deeper sense of commitment. The theology explains the data: when two people are regularly turning together toward the God who is their source, they are doing something that nourishes the marriage at its deepest level.",
    ],
  },
  {
    id: "Sex, Money, and the First Years",
    heading: "Sex, Money, and the First Years: The Hard Topics",
    paragraphs: [
      "Sex and money are the two topics that end the most marriages fastest, and they are the two topics that Christian premarital preparation most consistently fails to address with the depth and honesty they require. The couple who enters marriage with a robust theology of marital sexuality and a shared financial philosophy is vastly better equipped for the first years than the couple who arrives with romantic expectations and undefined financial arrangements. Neither topic is primarily about practical technique; both are fundamentally about the theology of union.",
      "The Christian theology of marital sex is the most positive sexual theology available &mdash; and it is rarely taught. It understands sex between husband and wife not as a concession to biological necessity or a reward for moral compliance, but as a covenant sign, a bodily enactment of the total self-giving that marriage represents, and what some theologians have called a form of bodily prayer. The Song of Songs celebrates erotic love with a freedom and a delight that surprises many Christians who encounter it for the first time. Paul&rsquo;s command in 1 Corinthians 7:3-5 is not about permission but about duty: husbands and wives owe each other the gift of their bodies, and withholding that gift is treated as a spiritual problem rather than a matter of personal preference.",
      "The first years of marriage often involve navigating a constellation of sexual challenges that no one prepares couples for. Mismatched expectations &mdash; formed by individual history, personality, and the messages absorbed from culture or from a particular Christian subculture &mdash; are nearly universal. Differences in libido, which are biologically real and not evidence of spiritual failure or insufficient love, require honest communication and ongoing negotiation. Past sexual experiences, whether within the couple&rsquo;s own relationship or from previous relationships, shape the present in ways that require pastoral care to navigate. Body image issues, particularly for women formed in a culture with relentlessly narrow beauty standards, affect sexual intimacy in ways that counseling can address but shame cannot.",
      "Good sexual intimacy in marriage is a skill that takes time to develop, not a gift that arrives automatically with the wedding. This is liberating rather than discouraging: it means that the awkwardness and the mismatches and the learning curve of the first years are not evidence of incompatibility but of the ordinary process of two people learning each other. The couple that approaches their sexual life with patience, humor, and genuine desire to understand and serve each other &mdash; and that seeks help early, from a Christian therapist or a trusted pastor, rather than waiting until the problem is chronic &mdash; is in the best possible position to build something genuinely good.",
      "On money: the research is consistent and unambiguous. Financial conflict is the leading cause of divorce, more predictive than sexual dissatisfaction, incompatible values, or even infidelity. The reason is not primarily about scarcity &mdash; financial conflict is as common among high-income couples as low-income couples &mdash; but about the fact that money represents control, security, and values in concentrated form. The couple that has not developed a shared financial philosophy has not yet fully unified; they are two individuals with different financial histories, different risk tolerances, different spending habits, and different visions of the future, operating in the same household without a common language or a common plan.",
      "The first-year financial task is to build the infrastructure of shared financial life: a shared budget that reflects shared priorities, a plan for debt (whether to pay off student loans aggressively or invest while making minimum payments, and how to handle debt that one spouse brought into the marriage that the other did not), a savings rate and an emergency fund, and a practice of generosity. The theology of marriage as total union extends to money: in a Christian marriage, there is no &ldquo;my money&rdquo; and &ldquo;your money&rdquo; &mdash; there is &ldquo;our money,&rdquo; held in common and spent in accordance with values that have been explicitly discussed and agreed upon. This does not mean identical preferences; it means a shared framework within which different preferences are negotiated.",
      "The practice of generosity in marriage is both a financial and a spiritual discipline. The couple that gives together &mdash; that tithing and charitable giving are a line item in the budget that is non-negotiable rather than an afterthought from what is left &mdash; is practicing something important about what money is for and who it belongs to. &ldquo;Our money&rdquo; includes the portion that belongs to God and to the neighbor in need; the couple that establishes this as a foundational financial commitment in the first years is building a financial culture that will sustain them through the decades to come, when the temptation to hoard rather than give tends to increase with income.",
    ],
  },
];

const videoItems = [
  { videoId: "8RkHO0XJNWQ", title: "Tim Keller on Christian Marriage" },
  { videoId: "JKB_jqrEcT8", title: "The Gospel and Marriage — Ephesians 5" },
  { videoId: "0oNKsN8XEq0", title: "Building a Spiritual Marriage — Prayer and Intimacy" },
];

export default function ChristianNewMarriageGuide() {
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
            Faith &amp; Marriage
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian New Marriage Guide
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Building a marriage on Christ &mdash; the theology of Ephesians 5, leaving and cleaving, navigating conflict as newlyweds, spiritual intimacy, sex and the Christian covenant, money and marriage, and what the first years actually require.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;This mystery is profound, and I am saying that it refers to Christ and the church.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Ephesians 5:32</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? "rgba(58,125,86,0.12)" : "transparent",
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Marriage Is a Vocation, Not Just a Relationship</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Christian marriage is a sign of the gospel &mdash; a visible, embodied enactment of the love between Christ and the church. The couple who understands themselves as participating in that mystery is called to something their own resources cannot sustain. But the grace that makes it possible is the same grace that went to the cross, and it is sufficient for what the vocation requires.</p>
        </div>
      </main>
    </div>
  );
}
