"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";

const tabs = [
  { id: "creation", label: "Created Male and Female" },
  { id: "comp", label: "Complementarian View" },
  { id: "egal", label: "Egalitarian View" },
  { id: "texts", label: "Key Texts" },
  { id: "pastoral", label: "Pastoral Approach" },
  { id: "videos", label: "Videos" },
];

const creationSections = [
  {
    title: "In the Image of God, Male and Female &mdash; Genesis 1:27",
    color: GREEN,
    body: "So God created human beings in his own image, in the image of God he created them; male and female he created them (Genesis 1:27). Sexual differentiation is not a product of the fall or a concession to biological necessity &mdash; it is part of the very good creation (Genesis 1:31). Male and female together bear the image of God: neither alone is the complete image. The implication is startling: it takes both sexes to fully represent God in the world. God&rsquo;s image is not better represented by men than by women, or by women than by men. It is represented by both together &mdash; in their difference and their unity.",
  },
  {
    title: "Ezer &mdash; The Powerful Helper",
    color: TEAL,
    body: "In Genesis 2:18, God says it is not good for the man to be alone and announces he will make an ezer kenegdo &mdash; a helper corresponding to him. The Hebrew word ezer is often translated &ldquo;helper&rdquo; and read as implying subordination &mdash; an assistant, a support role. But this is a serious misreading. Of the 21 occurrences of ezer in the Old Testament, 16 refer to God himself as the helper of Israel: &ldquo;My help (ezer) comes from the LORD, who made heaven and earth&rdquo; (Psalm 121:2). The word carries no connotation of inferiority; it describes powerful, essential aid that cannot be provided by the one being helped. The woman as ezer is not a lesser version of the man; she is the powerful complement without whom the man is incomplete.",
  },
  {
    title: "The Complementarity of Male and Female",
    color: PURPLE,
    body: "Genesis 2 describes a complementarity of male and female that is simultaneously physical, relational, and representational. The man and woman are designed for each other: she is bone of my bones and flesh of my flesh (2:23) &mdash; a recognition of profound sameness. And yet they are genuinely different: two different ways of bearing the image, two different modes of embodied existence, brought together into one-flesh union. The complementarity is not merely functional (each has different roles) or biological (they fit together for reproduction). It is ontological: male and female are two distinct modes of being human, each incomplete without the other, both fully human in themselves.",
  },
  {
    title: "What the Fall Does to Gender Relations &mdash; Genesis 3:16",
    color: GOLD,
    body: "After the fall, God speaks to the woman: &ldquo;Your desire will be for your husband, and he will rule over you&rdquo; (Genesis 3:16). This is one of the most contested verses in the entire gender debate. Complementarians typically read it as describing the fallen distortion of a creational hierarchy: the headship that was meant to be loving becomes domineering. Egalitarians typically read it as describing a new fallen reality that did not exist before the fall: the man&rsquo;s rule over the woman is introduced by the fall, not ordained by creation, and therefore something the redemption of Christ should be reversing. Both sides agree on the diagnosis: male domination and female subordination as experienced in human history is a product of sin. They disagree about whether a proper hierarchy preceded the fall.",
  },
  {
    title: "One-Flesh Union &mdash; The Meaning of Sexual Difference",
    color: TEAL,
    body: "Genesis 2:24 &mdash; &ldquo;Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh&rdquo; &mdash; is the Bible&rsquo;s foundational statement about marriage. Jesus quotes it in both Matthew 19:5 and Mark 10:7-8, and Paul quotes it in Ephesians 5:31 and 1 Corinthians 6:16. The one-flesh union is not merely sexual but comprehensive: two distinct persons, male and female, become a new relational unit without ceasing to be themselves. The sexual difference of the two parties is essential to the one-flesh union: it is precisely their difference that makes the union of complementarity possible. The Song of Solomon celebrates this union with unashamed eros.",
  },
];

const compSections = [
  {
    title: "Male Headship as Creation Ordinance",
    color: BLUE,
    body: "The complementarian position, as articulated by Wayne Grudem and John Piper in Recovering Biblical Manhood and Womanhood (1991), holds that male headship in marriage and restrictions on women in church leadership are not cultural accommodations to the first-century Greco-Roman world but are grounded in the order of creation before the fall. The argument from 1 Timothy 2:13 (&ldquo;For Adam was formed first, then Eve&rdquo;) is central: Paul grounds his instruction not in culture but in the creation sequence. If the rationale is creational, the instruction transcends culture and applies to all churches in all times.",
  },
  {
    title: "Kephale as Authority &mdash; 1 Corinthians 11 and Ephesians 5",
    color: BLUE,
    body: "Complementarians argue that kephale (head) in the New Testament carries the meaning of authority. Christ is the head of every man, and the man is the head of a woman, and God is the head of Christ (1 Corinthians 11:3). This parallel between God&rsquo;s authority over Christ and the man&rsquo;s authority over the woman is used to argue that functional authority differentiation is consistent with ontological equality &mdash; just as the Son is fully equal to the Father in being but submissive in role. The husband as head in Ephesians 5:23 carries the responsibility of sacrificial servant-leadership modeled on Christ&rsquo;s self-giving for the church.",
  },
  {
    title: "1 Corinthians 14:34-35 &mdash; Women Be Silent",
    color: BLUE,
    body: "&ldquo;As in all the churches of the saints, the women should keep silent in the churches. For they are not permitted to speak, but should be in submission, as the Law also says. If there is anything they desire to learn, let them ask their husbands at home. For it is shameful for a woman to speak in church.&rdquo; Complementarians (particularly more traditional ones) read this as a restriction on women from authoritative public teaching and doctrinal evaluation in church gatherings. Some hold it refers specifically to the evaluation of prophecy; others apply it more broadly to public teaching. The connection to &ldquo;the Law&rdquo; is debated &mdash; no specific OT text is obviously in view.",
  },
  {
    title: "1 Timothy 2:11-14 &mdash; I Do Not Permit a Woman to Teach",
    color: BLUE,
    body: "&ldquo;I do not permit a woman to teach or to exercise authority over a man; she is to remain quiet. For Adam was formed first, then Eve; and Adam was not deceived, but the woman was deceived and became a transgressor.&rdquo; This is the central text for the complementarian restriction on women in the teaching/authority role of elder or pastor. Two features strengthen the complementarian reading: (1) the grounding in creation order (&ldquo;Adam was formed first&rdquo;) rather than cultural context; (2) the appeal to the fall (&ldquo;the woman was deceived&rdquo;). Complementarians argue that both creation and fall arguments transcend the particular culture of Ephesus.",
  },
  {
    title: "The Eternal Subordination of the Son &mdash; EFS and its Controversy",
    color: BLUE,
    body: "Some complementarians (particularly Bruce Ware and Wayne Grudem in certain writings) have argued for the eternal functional subordination of the Son (EFS or ERAS) as an analogy for gender complementarity: just as the Son is equal in nature but subordinate in role to the Father for eternity, so women are equal in nature but subordinate in role to men. This argument was criticized sharply by other complementarians (Liam Goligher, Carl Trueman) and by egalitarians as a dangerous innovation that risks subordinationism &mdash; the heresy that the Son is ontologically less than the Father. The EFS controversy illustrates that the gender debate has trinitarian stakes.",
  },
];

const egalSections = [
  {
    title: "Galatians 3:28 &mdash; The Eschatological Charter",
    color: TEAL,
    body: "There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus (Galatians 3:28). Egalitarians argue this is the foundational text for gender equality in the new creation. Paul lists three of the defining social hierarchies of the ancient world &mdash; ethnic, social, and gender &mdash; and declares them overcome in Christ. This is not merely spiritual equality (&ldquo;equal before God&rdquo;) while maintaining social hierarchy; Paul uses the same language to address the real-world social practice of Jewish Christians eating with Gentile Christians (Galatians 2:11-14). The new creation in Christ has real social consequences.",
  },
  {
    title: "Women Paul Commends as Leaders &mdash; Romans 16",
    color: TEAL,
    body: "Romans 16 is an egalitarian exhibit. Phoebe is a diakonos (deacon) and prostatis (patron/leader) of the church at Cenchreae (16:1-2). Priscilla (named before her husband Aquila, which is unusual) is Paul&rsquo;s co-worker and co-risker-of-life (16:3-4). Junia is &ldquo;outstanding among the apostles&rdquo; (16:7) &mdash; a remarkable designation that virtually all scholars now accept as referring to a female apostle. Mary, Tryphena, Tryphosa, and Persis are all commended for working hard in the Lord (16:6, 12). Egalitarians argue that Paul&rsquo;s actual practice shows women in the full range of ministry roles that his restrictive texts are often read to prohibit.",
  },
  {
    title: "Priscilla Teaching Apollos &mdash; Acts 18:26",
    color: TEAL,
    body: "When Priscilla and Aquila heard Apollos speaking boldly in the synagogue, they took him aside and explained to him the way of God more accurately (Acts 18:26). Apollos is already described as a man of eloquence and mighty in the Scriptures (18:24). Priscilla (listed first by Luke) teaches this gifted male preacher. Egalitarians point to this as clear evidence that Paul&rsquo;s practice did not restrict women from teaching men. Complementarians respond that this is a private setting, not a public church gathering, and therefore does not override 1 Timothy 2:12.",
  },
  {
    title: "The Pentecost Promise &mdash; Acts 2:17-18",
    color: TEAL,
    body: "Peter&rsquo;s Pentecost sermon quotes Joel 2:28: &ldquo;your sons and daughters will prophesy, your young men will see visions, your old men will dream dreams. Even on my male servants and female servants in those days I will pour out my Spirit, and they will prophesy.&rdquo; The Spirit is poured out without gender distinction. Paul, who elsewhere acknowledges that women prophesy in church (1 Corinthians 11:5 &mdash; and prescribes how they should dress when doing so), regards prophecy as a significant authoritative spiritual gift (1 Cor 14:1-5). Egalitarians ask: if women can prophesy publicly in the congregation, in what sense are they prohibited from authoritative public speech?",
  },
  {
    title: "The Trajectory Hermeneutic",
    color: TEAL,
    body: "Egalitarians often appeal to a trajectory hermeneutic: rather than reading each biblical text in isolation, we should ask where the arc of Scripture is pointing. The trajectory from the Old Testament through Jesus to the New Testament shows a consistent pattern of elevating the status of women: Jesus appears first to women at the resurrection (John 20), Paul declares there is no male and female in Christ (Galatians 3:28), women serve in leadership roles throughout Acts and the epistles. The few restrictive texts are explained by specific cultural problems (Ephesus, Corinth) or by Paul&rsquo;s pastoral accommodations to contexts where the full implications of the gospel had not yet been worked out. The trajectory points toward full partnership.",
  },
  {
    title: "The Contextual Reading of 1 Timothy 2",
    color: TEAL,
    body: "Philip Payne&rsquo;s Man and Woman, One in Christ (2009) provides the most detailed egalitarian treatment of 1 Timothy 2:11-14. His arguments include: (1) authentein (translated &ldquo;exercise authority&rdquo;) appears only here in the NT and in contemporary Greek sources carries connotations of domineering or violent authority, not ordinary authority; Paul may be prohibiting a specific kind of abusive domination, not all female teaching. (2) The Ephesian context shows false teaching was spreading, possibly connected to the cult of Artemis in which female leadership was prominent and in which Eve&rsquo;s priority over Adam was taught &mdash; Paul&rsquo;s correction of Eve&rsquo;s priority may address that specific heresy. (3) &ldquo;I do not permit&rdquo; (ouk epitrepo) is present tense and may indicate a temporary situational instruction rather than a universal command.",
  },
];

const textsSections = [
  {
    title: "1 Corinthians 14:34-35 &mdash; Paul Quoting a Corinthian Slogan?",
    color: PURPLE,
    body: "One of the most intriguing egalitarian proposals is that 1 Corinthians 14:34-35 (&ldquo;women should be silent&rdquo;) is Paul quoting a Corinthian position he will then refute. Paul uses the rhetorical device of quoting and refuting in 1 Corinthians (cf. 6:12-13; 7:1; 10:23). The Greek gar (for) at the beginning of 14:36 (&ldquo;Or was it from you that the word of God came?&rdquo;) may be Paul&rsquo;s sharp rejoinder to the silencing position: &ldquo;Did the word of God originate with you, or are you the only ones it has reached?&rdquo; This reading is supported by some significant textual evidence: several manuscripts place verses 34-35 after verse 40, suggesting these verses were added as a marginal gloss rather than being original. Gordon Fee, a complementarian in many respects, accepts this reading.",
  },
  {
    title: "1 Timothy 2:11-14 &mdash; Authentein and Its Meaning",
    color: GOLD,
    body: "The word authentein in 1 Timothy 2:12 (&ldquo;I do not permit a woman to... exercise authority over a man&rdquo;) is a hapax legomenon &mdash; it appears only this once in the New Testament. Lexical analysis of the word&rsquo;s usage in classical and Koine Greek literature (surveyed comprehensively by Henry Scott Baldwin and by Philip Payne) finds a range of meanings: to have authority, to dominate, to usurp authority, even to murder. The meaning is not settled by the word itself alone. Complementarians argue the standard meaning is positive authority (&ldquo;exercise authority&rdquo;); egalitarians argue the predominant secular usage involves domination or coercion. This single word carries enormous interpretive weight in the debate.",
  },
  {
    title: "Galatians 3:28 &mdash; Spiritual Status or Social Reality?",
    color: TEAL,
    body: "Complementarians argue that Galatians 3:28 addresses spiritual standing before God &mdash; all are equally justified, equally sons of God, equally heirs of the promise &mdash; without addressing church role structure. On this reading, Galatians 3:28 is no more relevant to church polity than it is to, say, age distinctions (children and adults are equally heirs in Christ, but that does not mean children should teach adults). Egalitarians respond that Paul uses the same three social distinctions (Jew/Greek, slave/free, male/female) to address real social practices in Galatians 2 (table fellowship), Philemon (slavery), and the household codes &mdash; suggesting the verse has social as well as spiritual force.",
  },
  {
    title: "1 Corinthians 11 &mdash; Head Coverings and Creational Order",
    color: BLUE,
    body: "1 Corinthians 11:2-16 is one of the most complex passages in the gender debate. Paul addresses head coverings in worship, using the language of &ldquo;head&rdquo; (kephale) with three referents: God-Christ-man-woman. He appeals to creation order (11:8-9) and to natural propriety (11:14-15). Complementarians use this passage to argue for a creation-grounded gender distinction in worship, though they typically do not require head coverings for women today. Egalitarians note that Paul is actually presupposing women praying and prophesying in public worship (11:5) &mdash; which seems to be a role the chapter authorizes, not restricts. Both sides have difficulty with this passage, and honest commentators acknowledge its difficulties.",
  },
  {
    title: "The Honest Acknowledgment",
    color: GREEN,
    body: "On the complementarian-egalitarian question, evangelical scholars committed to the full authority and inspiration of Scripture have examined the same texts with care and landed on both sides. This is not a sign of theological confusion but a sign of genuine hermeneutical complexity. The key question is not who takes the Bible seriously &mdash; both sides do &mdash; but which reading of which texts in which contexts best accounts for all the evidence. The Council on Biblical Manhood and Womanhood (CBMW) and Christians for Biblical Equality (CBE) each represent serious attempts to read the full canonical witness. The debate will not be resolved by asserting that one side simply ignores the Bible.",
  },
];

const pastoralSections = [
  {
    title: "A Secondary, Not Primary, Issue",
    color: GREEN,
    body: "The theology of gender and women in ministry does not determine salvation. It is not part of the ecumenical creeds (Apostles&rsquo;, Nicene, Athanasian) or the Reformation solas. Churches across the complementarian-egalitarian spectrum are orthodox on the Trinity, the incarnation, the atonement, justification by faith, and the resurrection. This means the issue belongs in the category of secondary (important but not salvific) theological questions, where evangelical Christians have agreed to disagree while maintaining charity. Making it a test of orthodoxy &mdash; as if only one position can be genuinely evangelical &mdash; is a theological error that has caused serious harm.",
  },
  {
    title: "Mutual Respect Across Positions",
    color: TEAL,
    body: "The practical test of treating this as a secondary issue is whether churches and theologians with different views can genuinely respect each other. A complementarian church can recognize a egalitarian church&rsquo;s commitment to Scripture and love for Christ, and vice versa. The alternative &mdash; treating the other side as either heretical or as misogynists &mdash; is both unkind and intellectually dishonest. John Stott, who held a broadly egalitarian view in his later years, and John Piper, a committed complementarian, both represent serious, Christ-centered, Scripture-honoring scholarship. The debate is real; the mutual respect is possible.",
  },
  {
    title: "The Full Participation of Women in Ministry",
    color: PURPLE,
    body: "Even in complementarian churches that restrict the senior pastor/elder role to men, there is an enormous range of ministry that women are not only permitted but called to exercise: teaching women and children, leading women&rsquo;s ministries, counseling, worship leading, preaching in certain contexts, serving as deacons, leading community groups, exercising prophetic and intercessory gifts, writing theology, and serving as missionaries. A complementarianism that in practice sidelines women&rsquo;s gifts, silences women&rsquo;s voices, and fails to develop women&rsquo;s theological leadership is not being faithful to the fullness of the biblical witness. Women are not junior members of the body of Christ.",
  },
  {
    title: "Pastoral Care for Women Harmed by Complementarian Abuse",
    color: GOLD,
    body: "A significant number of women in evangelical churches have experienced genuine harm &mdash; spiritual, emotional, and sometimes physical &mdash; at the hands of complementarian theology wielded as a justification for male authority and female submission without accountability. The instruction to wives to submit to their husbands has been used to counsel women to remain in abusive marriages. The prohibition on women in leadership has been used to silence women who reported abuse by male leaders. Abuse of theological authority is not the teaching itself, but the pastoral response must take seriously that the harm is real. A theology of gender that cannot be distinguished from abuse-enabling is not functioning as the gospel.",
  },
  {
    title: "Every Person Fully Using Their Gifts",
    color: TEAL,
    body: "The shared goal across the complementarian-egalitarian divide &mdash; if both sides are being consistent with their theology &mdash; is that every person in the body of Christ should be fully using the gifts God has given them for the building up of the church and the advancement of the kingdom. Complementarians believe this can be achieved with appropriate role distinctions. Egalitarians believe full gift deployment requires removing role restrictions. But the goal is the same: a church in which the Spirit&rsquo;s gifts are not wasted by unnecessary restriction or unnecessary conflict. The question to ask of any church structure is not only &ldquo;which theological position does this reflect?&rdquo; but &ldquo;are the people of God being equipped for works of service?&rdquo; (Ephesians 4:12).",
  },
  {
    title: "Holding Conviction with Charity",
    color: GREEN,
    body: "The posture that the complexity of this issue demands is what Tim Keller called &ldquo;convicted civility&rdquo; &mdash; holding your convictions with intellectual seriousness while maintaining genuine charity toward those who hold different convictions. This is not the same as refusing to take a position or treating all views as equally valid. It is the recognition that the scholars and pastors on the other side are reading the same Bible with the same love for Christ and the same desire to honor God, and that their disagreement with you is more likely a reflection of genuine hermeneutical complexity than of bad faith or bad character. The gender debate is one of the places where the evangelical church most needs to practice what it preaches about love.",
  },
];

const videos = [
  { videoId: "UYGY8JNpzDQ", title: "Tim Keller on Men and Women in the Church" },
  { videoId: "Bq1K1KQLT5g", title: "NT Wright on Women in Ministry" },
  { videoId: "oWNmMcF5n6k", title: "Complementarian vs. Egalitarian Debate" },
];

export default function ChristianGenderTheologyPage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("creation");

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span
            style={{
              background: PURPLE + "22",
              color: PURPLE,
              padding: "0.2rem 0.8rem",
              borderRadius: 20,
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Theology
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(1.7rem,4vw,2.6rem)",
            fontWeight: 900,
            lineHeight: 1.2,
            margin: "0.75rem 0 0.75rem",
          }}
        >
          Christian Theology of Gender
        </h1>

        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: 640,
            margin: "0 0 2rem",
          }}
        >
          Few questions in contemporary Christianity generate more heat than the theology of gender. This guide traces
          the biblical evidence from Genesis 1-2 through the key New Testament texts, presenting the complementarian and
          egalitarian positions with equal seriousness, and offering a pastoral approach that honors conviction without
          sacrificing charity.
        </p>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                borderColor: activeTab === t.id ? PURPLE : BORDER,
                background: activeTab === t.id ? PURPLE + "22" : "transparent",
                color: activeTab === t.id ? PURPLE : MUTED,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* CREATION TAB */}
        {activeTab === "creation" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              style={{
                background: GREEN + "18",
                border: `1px solid ${GREEN}44`,
                borderRadius: 12,
                padding: "1rem 1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <p style={{ color: GREEN, margin: 0, fontSize: "0.9rem", lineHeight: 1.7 }}>
                <strong>Genesis 1:27 &mdash;</strong> &ldquo;So God created human beings in his own image, in the image
                of God he created them; male and female he created them.&rdquo; Sexual differentiation is part of
                God&rsquo;s very good creation.
              </p>
            </div>
            {creationSections.map((s) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `4px solid ${s.color}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: s.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* COMPLEMENTARIAN TAB */}
        {activeTab === "comp" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              style={{
                background: BLUE + "18",
                border: `1px solid ${BLUE}44`,
                borderRadius: 12,
                padding: "1rem 1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <p style={{ color: BLUE, margin: 0, fontSize: "0.9rem", lineHeight: 1.7 }}>
                <strong>The Complementarian Position &mdash;</strong> Male headship in marriage and the restriction of
                the senior teaching/authority role in the church to men are grounded in creation order, not cultural
                convention, and are therefore normative for all times and places. Represented by CBMW, Wayne Grudem,
                John Piper, and Thomas Schreiner.
              </p>
            </div>
            {compSections.map((s) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `4px solid ${s.color}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: s.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* EGALITARIAN TAB */}
        {activeTab === "egal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              style={{
                background: TEAL + "18",
                border: `1px solid ${TEAL}44`,
                borderRadius: 12,
                padding: "1rem 1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <p style={{ color: TEAL, margin: 0, fontSize: "0.9rem", lineHeight: 1.7 }}>
                <strong>The Egalitarian Position &mdash;</strong> The new creation in Christ removes the gender
                hierarchy introduced by the fall. Women and men serve together in full partnership in home and church,
                with no role restricted on the basis of sex. Represented by CBE, NT Wright, Philip Payne, and Rebecca
                Merrill Groothuis.
              </p>
            </div>
            {egalSections.map((s) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `4px solid ${s.color}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: s.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* KEY TEXTS TAB */}
        {activeTab === "texts" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              style={{
                background: PURPLE + "18",
                border: `1px solid ${PURPLE}44`,
                borderRadius: 12,
                padding: "1rem 1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <p style={{ color: PURPLE, margin: 0, fontSize: "0.9rem", lineHeight: 1.7 }}>
                A close reading of the texts at the center of the debate &mdash; with honest acknowledgment of what
                each text clearly says, what is genuinely contested, and where the interpretive crux lies.
              </p>
            </div>
            {textsSections.map((s) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `4px solid ${s.color}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: s.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* PASTORAL APPROACH TAB */}
        {activeTab === "pastoral" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              style={{
                background: GREEN + "18",
                border: `1px solid ${GREEN}44`,
                borderRadius: 12,
                padding: "1rem 1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <p style={{ color: GREEN, margin: 0, fontSize: "0.9rem", lineHeight: 1.7 }}>
                A pastoral approach that holds conviction with charity &mdash; recognizing that the goal for every
                church, whatever its position, is that every person fully uses their gifts for the body of Christ.
              </p>
            </div>
            {pastoralSections.map((s) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `4px solid ${s.color}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: s.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS TAB */}
        {activeTab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.5rem" }}>
              Video Teaching
            </h2>
            {videos.map((v) => (
              <div
                key={v.videoId}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <p style={{ color: TEXT, fontWeight: 600, margin: 0, fontSize: "0.95rem" }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
