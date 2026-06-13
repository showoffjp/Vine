"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F"; const CARD = "#12121F"; const BORDER = "#1E1E32";
const ACCENT = "#0D9488"; const TEXT = "#F2F2F8"; const MUTED = "#9898B3";

const TABS = [
  "A Theology of Singleness",
  "Jesus and the Church as Family",
  "Loneliness and Solitude",
  "Dating as a Christian",
  "Flourishing as a Single Adult",
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
    id: "A Theology of Singleness",
    heading: "A Theology of Singleness",
    paragraphs: [
      "The revolutionary claim of the New Testament is that singleness is a legitimate, complete, and even preferred vocation for followers of Jesus &mdash; not a waiting room for marriage. This is not a peripheral teaching buried in an obscure epistle; it is stated plainly and repeatedly by the two most important figures in the New Testament. Jesus himself was unmarried. Paul, the most influential theologian in Christian history after Jesus, was unmarried and explicitly said he preferred it. For a religion that has been widely caricatured as marriage-obsessed, the foundational documents are remarkably hospitable to the single life.",
      "Paul&rsquo;s sustained argument in 1 Corinthians 7 is the most theologically concentrated treatment of singleness in the New Testament. His core claim is in 7:7: &ldquo;I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that.&rdquo; The &ldquo;gift&rdquo; language here is the Greek word charisma &mdash; the same word used for spiritual gifts throughout 1 Corinthians 12. Singleness is a charismatic endowment. It is not a consolation prize for those who could not find a spouse; it is a gift given by God for God&rsquo;s purposes.",
      "Paul&rsquo;s specific argument for singleness&rsquo;s advantages is worth examining closely. In 7:32-35, he writes that the unmarried person &ldquo;is anxious about the things of the Lord, how to please the Lord. But the married man is anxious about worldly things, how to please his wife, and his interests are divided.&rdquo; He says the same of the unmarried woman versus the married woman. This is not a critique of marriage &mdash; Paul grounds the theology of marriage in Ephesians 5 with extraordinary depth. It is an honest description of the competing claims that faithful marriage creates. The single person has, structurally, a freedom of undivided devotion that marriage necessarily limits.",
      "This does not make singleness superior to marriage. Paul is careful to say that both are gifts. The point is parity: singleness and marriage stand on the same level before God. Both are complete vocations. Neither is deficient. The church that treats single adults as half-people waiting to become whole through marriage has departed from the explicit teaching of its founding apostle &mdash; the apostle who was himself single, who called it a gift, and who said he wished everyone could share it.",
      "The theological grounding for this parity goes deeper than Paul&rsquo;s argument alone. It connects to the eschatological vision of the New Testament: in the resurrection, Jesus says, people &ldquo;neither marry nor are given in marriage, but are like angels in heaven&rdquo; (Matthew 22:30). Marriage is a penultimate reality &mdash; a sign pointing beyond itself to the final reality of the marriage supper of the Lamb (Revelation 19:7-9). The single person, in their life of undivided devotion, anticipates that ultimate reality more directly than the married person. Both signs are necessary and beautiful; neither is the destination.",
      "The evangelical church has, in many settings, quietly reversed this teaching and produced a culture in which marriage is the normative and aspirational form of Christian adulthood. Singles ministries, when they exist, often carry the implicit message that their purpose is to help single people become married. Sermons regularly use spouse and children as the default relational illustrations. The result is that single adults feel like guests in a community designed for a household shape they do not have. This is a theological failure, not merely a pastoral awkwardness. Recovering the New Testament&rsquo;s vision requires deliberate effort &mdash; and it begins with Paul&rsquo;s plain words in 1 Corinthians 7.",
    ],
  },
  {
    id: "Jesus and the Church as Family",
    heading: "Jesus and the Church as Family",
    paragraphs: [
      "Jesus was unmarried &mdash; and this is theologically significant, not a biographical accident. The eternal Son of God, who became human to demonstrate what full and perfect humanity looks like, chose to live his entire adult ministry as a single person. He did not acquire property, did not establish a household, did not take a wife or produce biological children. He traveled, depended on hospitality, and organized his life around a community of disciples. His singleness was not incidental. It was part of the shape of his vocation.",
      "Jesus also redefined family in terms of discipleship rather than biology. When his mother and brothers came to speak with him and were told he was busy, he gestured toward his disciples and said: &ldquo;Whoever does the will of God is my brother and sister and mother&rdquo; (Mark 3:35). At the cross, in one of the most intimate gestures in the Gospels, he established a new family relationship between his mother and the beloved disciple: &ldquo;Woman, behold your son&rdquo; and &ldquo;Behold your mother&rdquo; (John 19:26-27). The new family is the family of faith, not the family of flesh.",
      "The New Testament vision of the church is as a family of families &mdash; or more precisely, as the primary family of which biological and legal families are a subset. The language of the epistles is saturated with familial terms: brothers, sisters, fathers, mothers, children. This is not metaphor decorating a more fundamental institutional reality; it is a description of what the church actually is. The church is the household of God (Ephesians 2:19, 1 Timothy 3:15), and every member belongs to it fully, regardless of their household composition.",
      "The practical implication is demanding: single adults are not peripheral members of the church waiting to acquire the household configuration that would make them full members. They are full members now, with the same standing, the same gifts, and the same belonging. The church that embeds its single members in genuine community &mdash; in the ordinary rhythms of shared meals, shared prayer, shared service, and shared life &mdash; is the church that is actually being what it claims to be. The church that treats single adults as a demographic to be served with special programming, rather than as members who belong fully and contribute fully, has failed at one of its most basic ecclesial tasks.",
      "Rodney Stark&rsquo;s historical work on the early church documents that the church&rsquo;s extraordinary growth in the first three centuries was driven in part by its countercultural inclusion of single women, widows, and the childless &mdash; people who were socially marginal in the Roman world but who were full members of the Christian community. The church offered a form of belonging that the surrounding culture could not: a family you were adopted into rather than born into, organized around shared faith rather than shared blood. This was one of its most distinctive and compelling features. It remains one of its most important callings.",
      "The New Jerusalem, in Revelation 21-22, knows no marriage. The ultimate eschatological community is one in which the distinction between married and unmarried is dissolved in the final reality that all covenant relationship has been pointing toward. The marriage supper of the Lamb is the wedding feast in which every believer &mdash; married and single alike &mdash; participates as part of the bride of Christ. From this perspective, no one arrives at the consummation of history as a complete person or an incomplete person on the basis of their marital status. Everyone arrives as the beloved of God. The single Christian lives closest to that horizon &mdash; and the church that understands this will honor, not pity, the single person in its midst.",
    ],
  },
  {
    id: "Loneliness and Solitude",
    heading: "Loneliness and Solitude",
    paragraphs: [
      "The deepest practical challenge of Christian singleness is not the absence of romantic love but the presence of loneliness. The single adult returning to an empty home, having no one for whom they are the first person, going through difficulty with no one who will ask at the end of the day how it went &mdash; this is a real and serious difficulty. It deserves honest acknowledgment rather than spiritual management or theological minimization. The loneliness of singleness is not a spiritual failure; it is a human experience that Christ himself knew.",
      "The research on loneliness confirms what many single adults already know from experience. Vivek Murthy, as Surgeon General of the United States, declared loneliness a public health epidemic in 2023, documenting that it carries health risks comparable to smoking fifteen cigarettes per day. The epidemic is not limited to single people &mdash; married people can be profoundly lonely &mdash; but the structural organization of modern life around couples and nuclear families means that single adults face particular vulnerabilities. The dinner party that assumes couples, the church small group organized around life stages, the social fabric that presupposes a built-in companion &mdash; all of these can leave the single person feeling unseen.",
      "The Christian tradition offers a crucial distinction that is easily lost in modern therapeutic culture: the distinction between loneliness and solitude. Loneliness is unwanted aloneness &mdash; the pain of disconnection, of not being known, of existing at the margins of communities organized around other configurations. Solitude is chosen aloneness &mdash; the deliberate practice of being alone in order to be present to God. They feel different from the inside, and they produce different fruits. Loneliness contracts the soul; solitude expands it.",
      "Jesus modeled both experiences. He withdrew regularly into solitude for prayer: &ldquo;he went up on the mountain by himself to pray&rdquo; (Matthew 14:23); &ldquo;he departed and went into a desolate place&rdquo; (Mark 1:35). But he also knew the loneliness of abandonment. In the Garden of Gethsemane he asked his disciples to watch with him, and they fell asleep: &ldquo;Could you not watch with me one hour?&rdquo; (Matthew 26:40). On the cross he cried out the opening of Psalm 22: &ldquo;My God, my God, why have you forsaken me?&rdquo; The one who is the model of solitude also descended into the deepest loneliness. He is not a stranger to either experience.",
      "Henri Nouwen, who wrote about loneliness with more theological depth and personal honesty than almost any other modern writer, described the spiritual task as &ldquo;the movement from loneliness to solitude.&rdquo; This is not the denial of loneliness or its suppression through spiritual discipline. It is the gradual transformation of unwanted aloneness into a practiced attentiveness to God &mdash; learning to be with God in the silence rather than fleeing the silence through distraction. Nouwen was clear that this transformation does not happen automatically or quickly. It is acquired through the repeated discipline of going into the quiet and finding, over time, that it is inhabited.",
      "The resources for the loneliness that genuine community cannot fully address are also theological. The God who is Trinity is himself a community of persons &mdash; Father, Son, and Holy Spirit in eternal relation &mdash; and he invites the lonely into that communion. &ldquo;God sets the lonely in families&rdquo; (Psalm 68:6) is a promise made to the single adult as much as to anyone. The promise is not necessarily that God will provide a spouse; it is that God is actively at work building the community that the lonely person needs. Receiving that community, in whatever form God provides it, is a spiritual discipline as much as a social one.",
    ],
  },
  {
    id: "Dating as a Christian",
    heading: "Dating as a Christian",
    paragraphs: [
      "Contemporary dating culture is poorly suited to Christian sexual ethics and to the formation of deep, honest relationships. The secular hookup culture treats dating as recreational sexual exploration with minimal relational commitment &mdash; an approach that is incompatible with the Christian theology of the body and that research consistently shows produces relational dissatisfaction and emotional harm. But the alternative that evangelical culture sometimes offers &mdash; the purity culture model of courtship, heavy parental involvement, and no physical contact before marriage &mdash; overcorrects into a rigidity that is not itself well-grounded in Scripture and that has produced its own forms of damage.",
      "A Christian approach to dating that avoids both errors begins with a clear understanding of purpose. Dating is intentional relationship evaluation: spending time with a person of the opposite sex in order to discern whether God is calling you to covenant with them in marriage. It is not recreational sexual exploration, and it is not a performance of romantic feeling for its own sake. It has a direction, a purpose, and an accountability structure. The question being asked, always, is: is this the person God is calling me to marry? When the answer becomes clearly no, honesty and kindness require ending the relationship without delay.",
      "Physical boundaries in Christian dating flow from a theology of the body rather than from mere rule-following. Physical intimacy is a form of communication. It communicates things &mdash; belonging, commitment, permanent union &mdash; that a casual or uncommitted relationship cannot sustain. The problem with physical intimacy beyond what the relationship can hold is not primarily that it violates a rule; it is that it speaks a language the relationship does not mean. It communicates commitment that has not been made, belonging that has not been established, permanence that has not been chosen. The resulting damage is emotional and spiritual as well as physical.",
      "The question of online dating is one that previous generations of Christians did not face and that the current generation has not yet reached settled wisdom on. The evidence is that it produces many good marriages &mdash; a majority of marriages among younger couples now begin online. The risks specific to online dating include the commodification of potential partners (treating a person&rsquo;s profile as a product to be evaluated and discarded), the illusion of infinite options that makes commitment psychologically harder, and the misrepresentation that the profile format almost inevitably encourages. None of these is fatal; all of them require intentional navigation.",
      "Accountability to community is an important and often neglected element of Christian dating. The individualism of modern culture treats romantic relationships as private matters between two people, immune to outside input. The Christian tradition has always understood that the community of faith has a legitimate interest in, and a supportive role to play in, the romantic relationships of its members. This does not mean parental control of adult relationships or church governance of personal decisions. It means that the dating Christian who is embedded in genuine community &mdash; who has friends who know their partner, who has mentors who can offer honest perspective, who is accountable to others about how they are conducting themselves &mdash; is in a better position than the dating Christian who is navigating entirely alone.",
      "The final word on Christian dating is that it should be, at its best, a form of neighbor love. The person you are dating is, first and finally, a child of God &mdash; a person made in the image of God, with their own calling, their own dignity, and their own relationship with the Lord. How you treat them in the dating relationship &mdash; how honest you are, how kind you are, how you handle the ending when it comes, how you respect their physical and emotional integrity &mdash; is a direct expression of whether you actually believe what you say you believe about love and about people. The person you date deserves the same love of neighbor that the gospel calls every Christian to.",
    ],
  },
  {
    id: "Flourishing as a Single Adult",
    heading: "Flourishing as a Single Adult",
    paragraphs: [
      "The church has often made single adults feel like half-people &mdash; defined by what they lack rather than by what they have. The theological antidote is a vision of singleness as vocation: a complete life, organized around love of God and neighbor, with particular freedoms and particular gifts. The single adult who has genuinely received the New Testament&rsquo;s teaching on their vocation is not a person patiently waiting for their real life to begin. They are a person living, right now, one of the two complete vocations that the New Testament commends.",
      "Flourishing for single adults begins with the cultivation of deep, committed, non-romantic friendships. Modern culture has impoverished the category of friendship &mdash; reducing it to a pleasant social arrangement that dissolves when circumstances change or competing priorities emerge. The Christian tradition understood devoted friendship as one of the highest human goods. Augustine, describing the death of his unnamed friend, wrote that he felt he was carrying &ldquo;a soul divided between two bodies.&rdquo; Aelred of Rievaulx wrote that spiritual friendship is ordered toward God and draws both parties toward holiness &mdash; that it is, in a real sense, a form of love for God as well as for the other person. The single person who cultivates one or two such friendships has something that many married people lack.",
      "Investment in community &mdash; genuine, sustained, costly investment &mdash; is not optional for the flourishing single adult; it is the structural substitute for what marriage provides in terms of belonging and accountability. The single person who belongs to a small group that they have been in for years, who is known and loved by specific people in a specific church, who has committed relationships with mentors and with those they mentor &mdash; that person is not lonely in the chronic, damaging sense. They are embedded. Embeddedness is what protects against the loneliness that singleness can produce.",
      "The freedom to serve in ways that marriage necessarily limits is one of the most concrete goods of singleness &mdash; and one of the most underused. Amy Carmichael served in India for fifty-five years without furlough. Henri Nouwen moved into the L&rsquo;Arche community and gave himself to people with intellectual disabilities with a totality of presence that his academic career, let alone a marriage, could never have permitted. The single Christian who is asking &ldquo;what does my freedom permit me to do that I could not do if I were married and had children?&rdquo; is asking the right question. The answer is different for every person, but asking the question is the beginning of investing the freedom rather than merely experiencing it.",
      "A rich inner life, cultivated through prayer and contemplation, is one of the most distinctive contributions the single Christian can make to themselves and to the church. The person who has learned to be alone with God &mdash; not just for brief devotional moments but for extended periods of silence, prayer, Scripture reading, and reflection &mdash; has developed a resource that the pressures of modern family life rarely permit. The single person who uses their structural aloneness to develop this capacity is, in Henri Nouwen&rsquo;s terms, making the movement from loneliness to solitude. They are learning that the alone space is not empty but inhabited, and that the companionship of God is not a metaphor.",
      "The witness of single Christians throughout history is one of the great arguments for the validity and completeness of the single vocation. Paul, who founded churches across the Mediterranean world and wrote half the New Testament, was single. Augustine, the most influential theologian of the Western church after Paul, was single (after his conversion). Most of the Catholic religious orders that preserved learning and served the poor through the Middle Ages were organized around celibacy. Amy Carmichael, Amy Wilson-Carmichael, Dietrich Bonhoeffer (who was engaged but never married), C.S. Lewis (who did not marry until late in life) &mdash; these are lives of extraordinary depth, productivity, and love. They were not waiting to begin their real lives. They were living them, fully, in the form God gave them.",
    ],
  },
];

const videoItems = [
  { videoId: "jG6RPZN2P0U", title: "Tim Keller on Singleness and the Gospel" },
  { videoId: "0fEoQD3T_mA", title: "The Gift of Singleness — 1 Corinthians 7" },
  { videoId: "lkHqhIBnHYA", title: "Flourishing as a Single Christian" },
];

export default function ChristianSinglenessGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const currentSection = sections.find((s) => s.id === tab);
  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: ACCENT, marginBottom: "0.6rem" }}>
            Vocation &amp; Calling
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Singleness
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1rem", maxWidth: 680 }}>
            Paul called it a gift. Jesus lived it. The celibate tradition &mdash; from Anthony of Egypt to Clare of Assisi
            to Amy Carmichael &mdash; has always known that singleness is not the waiting room for real life. It is a form
            of real life, with its own theology, its own freedoms, and its own eschatological witness.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "1.25rem 1.5rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12 }}>
            <p style={{ fontStyle: "italic", color: TEXT, lineHeight: 1.7, margin: "0 0 0.5rem" }}>
              &ldquo;I wish that all of you were as I am. But each of you has your own gift from God; one has this gift,
              another has that.&rdquo;
            </p>
            <p style={{ color: ACCENT, fontWeight: 700, fontSize: "0.85rem", margin: 0 }}>1 Corinthians 7:7</p>
          </div>
        </div>

        {/* Tabs */}
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

        {/* Text tabs */}
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

        {/* Videos tab */}
        {tab === "Videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: ACCENT, marginBottom: "0.25rem" }}>
              Teaching Videos
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem", margin: "0 0 0.5rem" }}>
              Sermons and lectures on singleness, the gift of celibacy, and flourishing as a single Christian.
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

        {/* Callout */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem" }}>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>
            The single person&rsquo;s witness
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
            Every single Christian, whether or not they have named it as vocation, is making a statement simply by being
            single in a culture that worships romantic fulfillment: there is a form of life in which God alone is
            sufficient. There is a form of belonging that does not require a spouse. The single person lives closest to
            the horizon of the Kingdom &mdash; and the church that understands this will honor, not pity, the single
            person in its midst.
          </p>
        </div>
      </main>
    </div>
  );
}
