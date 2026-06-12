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

const tabs = [
  { id: "ot", label: "Family in the OT" },
  { id: "jesus", label: "Jesus Redefines Family" },
  { id: "codes", label: "Household Codes" },
  { id: "parenting", label: "Parenting in the Faith" },
  { id: "church", label: "Church as Family" },
  { id: "videos", label: "Videos" },
];

const otSections = [
  {
    title: "The Patriarchal Household &mdash; Beit Av",
    color: GREEN,
    body: "The basic social unit of ancient Israel was the beit av &mdash; the house of the father. This was not merely a nuclear family but an extended household encompassing multiple generations, servants, and dependent workers. The patriarch held legal, economic, and religious authority over the entire household. The beit av was simultaneously a domestic, economic, and cultic unit: you worshiped the gods of your household. When Israel received the law at Sinai, the household became the primary site of covenant transmission &mdash; not the temple (which did not yet exist) but the family table and the nightly conversation.",
  },
  {
    title: "The Shema as Family Prayer &mdash; Deuteronomy 6:4-9",
    color: TEAL,
    body: "Hear, O Israel: the LORD our God, the LORD is one. You shall love the LORD your God with all your heart, with all your soul, and with all your might. And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise up. The Shema is the paradigmatic text for family faith transmission. Moses does not command the people to send their children to religious school and outsource formation. He commands them to saturate the rhythms of ordinary family life &mdash; sitting, walking, sleeping, waking &mdash; with the words of God. The mezuzah on the doorpost is the physical enactment: the word of God marks the threshold of the family home.",
  },
  {
    title: "Genealogies as Covenant Continuity",
    color: PURPLE,
    body: "The genealogies of Genesis, Numbers, and Chronicles &mdash; often skipped as tedious &mdash; are theologically essential. They are the covenant&rsquo;s spine: the record of how God&rsquo;s promise to Abraham moves through specific human bodies, specific families, specific households across generations. The genealogy in Matthew 1 is the climax of this trajectory: from Abraham through David through the exile to Jesus of Nazareth. Every ancestor named is a reminder that God&rsquo;s covenant is carried through families. The genealogies insist that history is not abstract but embodied, familial, and particular.",
  },
  {
    title: "Childlessness &mdash; Cultural Shame, Not Divine Punishment",
    color: GOLD,
    body: "In the ancient Near East, childlessness was understood as a sign of divine disfavor. The shame was crushing. Hannah wept bitterly and was misunderstood as drunk by the priest Eli (1 Samuel 1). Elizabeth hid herself for five months after her miraculous pregnancy, saying that God had taken away her disgrace among people (Luke 1:25). The Old Testament is remarkable in its pastoral attention to these women: it does not endorse the cultural verdict. It tells their stories with sympathy and depicts God as the one who opens the womb, not as the one who sealed it in judgment. The Christian reading must hold both truths: childlessness was genuinely painful and socially stigmatizing, AND it was not a sign of God&rsquo;s rejection.",
  },
  {
    title: "The Redemption of Kinship &mdash; Ruth, Boaz, and the Kinsman-Redeemer",
    color: TEAL,
    body: "The book of Ruth is one of the most theologically rich family texts in the canon. Ruth, a Moabite widow, clings to her Israelite mother-in-law Naomi rather than returning to her own family: &ldquo;Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God&rdquo; (Ruth 1:16). This speech is one of the most beautiful covenant declarations in Scripture &mdash; and it is made between a daughter-in-law and a mother-in-law. Boaz, acting as kinsman-redeemer (goel), purchases the land and marries Ruth to preserve the family line. The kinsman-redeemer is a legal and social institution: the nearest male relative who assumes responsibility for a widow, purchasing her dead husband&rsquo;s property to keep it in the family. Paul uses redemption language (agorazo, exagorazo &mdash; to buy back) to describe what Christ has done for sinners, and the resonance with the goel is not accidental.",
  },
  {
    title: "Levirate Marriage &mdash; Preserving the Family Line",
    color: GREEN,
    body: "Levirate marriage (from levir, Latin for brother-in-law) is the practice commanded in Deuteronomy 25:5-10: if a man dies without children, his brother is obligated to marry the widow and raise up children in the dead brother&rsquo;s name. The purpose is to preserve the family name and inheritance within the tribe of Israel. The Sadducees use a levirate scenario to challenge Jesus on the resurrection (Mark 12:18-27), and Jesus&rsquo; response reorients the entire discussion toward the nature of the age to come. Ruth and Boaz&rsquo;s marriage functions as a form of levirate redemption. The institution reflects the deep covenantal importance of family continuity in the Old Testament &mdash; and stands in dramatic contrast to Jesus&rsquo; teaching that in the resurrection people neither marry nor are given in marriage.",
  },
];

const jesusSections = [
  {
    title: "Whoever Does the Will of God &mdash; Mark 3:31-35",
    color: GREEN,
    body: "Mark 3:31-35 is one of the most startling passages in the Gospels. Jesus&rsquo; mother and brothers arrive and send for him. He responds: &ldquo;Who are my mother and my brothers?&rdquo; Looking at those seated around him, he says: &ldquo;Here are my mother and my brothers. For whoever does the will of God, he is my brother and sister and mother.&rdquo; Jesus is not being cruel to Mary. He is announcing a redefinition of primary family that will structure the entire New Testament. The primary family of the believer is not determined by blood but by obedience to God. This is a radical claim in any culture; in a first-century honor-shame context, it was nearly scandalous.",
  },
  {
    title: "Hating Father and Mother &mdash; Luke 14:26",
    color: TEAL,
    body: "&ldquo;If anyone comes to me and does not hate his own father and mother and wife and children and brothers and sisters, yes, and even his own life, he cannot be my disciple.&rdquo; This is Semitic hyperbole &mdash; the language of comparative priority. Hebrew and Aramaic idiom uses &ldquo;hate&rdquo; to mean &ldquo;love less than,&rdquo; as in Genesis 29:31 (the LORD saw that Leah was hated &mdash; i.e., loved less than Rachel). Luke 14:26 means: loyalty to Jesus must be so ultimate that every other loyalty, including the deepest biological bonds, appears as hatred by comparison. This does not license neglect of family; Paul insists that those who do not provide for their own households have denied the faith (1 Timothy 5:8). But it does establish a clear hierarchy: discipleship is the supreme loyalty.",
  },
  {
    title: "The Hundredfold Return &mdash; Mark 10:28-30",
    color: PURPLE,
    body: "Peter says to Jesus: &ldquo;We have left everything and followed you.&rdquo; Jesus responds with a remarkable promise: everyone who has left houses or brothers or sisters or father or mother or children or lands for his sake will receive a hundredfold now in this time &mdash; houses and brothers and sisters and mothers and children and lands, with persecutions &mdash; and in the age to come eternal life. The promise is striking: the believer who sacrifices biological family for the kingdom will receive biological family back &mdash; but a new and larger kind. The church is not a substitute for family; it is the community in which new mothers and brothers and sisters are found. Notice what the list omits: fathers. You receive new mothers, brothers, sisters &mdash; but not new fathers. God is the Father.",
  },
  {
    title: "Familism as Idolatry",
    color: GOLD,
    body: "The American evangelical church has developed what sociologists call &ldquo;familism&rdquo; &mdash; the elevation of the biological nuclear family to a near-sacred status. Focus on the Family, family-values politics, and the dominance of family ministry in most churches reflect this tendency. Jesus would find much of it troubling. When biological family becomes the organizing center of Christian life &mdash; when the family is what we work for, pray for, and build our faith around &mdash; we have created an idol. The family becomes the idol when it displaces God as the ultimate loyalty, when marriage and children become the measure of a full life, and when the church is treated as a service for families rather than as the primary family itself.",
  },
  {
    title: "The Challenge to Suburban Christianity",
    color: TEAL,
    body: "The suburban evangelical pattern &mdash; nuclear family in a single-family home, family ministry programs at church, soccer on Saturday and church on Sunday &mdash; is the dominant mode of American Christian family life. Jesus&rsquo; teaching challenges it at multiple points. The suburban pattern tends to be insular: the family turns inward to itself for relationship, meaning, and identity. It tends to privatize faith: faith is what happens between individual family members, not in a community. It tends to exclude the unmarried, the childless, the widow, and the single parent, who do not fit the family-centered programs. The radical counter-cultural claim of Jesus &mdash; that the community of disciples is the primary family &mdash; suggests a more porous household, more embedded in a larger community of brothers and sisters.",
  },
];

const codesSections = [
  {
    title: "The Greco-Roman Household Codes",
    color: GREEN,
    body: "The household codes (haustafel) in Ephesians 5:22-6:4 and Colossians 3:18-21 did not emerge in a vacuum. They belong to a recognized genre in Greco-Roman moral philosophy, found in Aristotle&rsquo;s Politics, Plutarch&rsquo;s &ldquo;Advice to the Bride and Groom,&rdquo; and the Stoic philosophers. These codes addressed the proper management of the household under three pairs: husbands/wives, parents/children, masters/slaves. In Aristotle, the husband simply rules the wife; the father rules the children; the master rules the slaves. Paul adopts the genre but subverts it systematically: he begins with mutual submission (Eph 5:21), he addresses the subordinate party directly (wives, children, slaves are full moral agents, not merely property), and he grounds every instruction in the gospel rather than in natural hierarchy.",
  },
  {
    title: "Mutual Submission &mdash; Ephesians 5:21",
    color: TEAL,
    body: "The section on marriage in Ephesians 5:22-33 is commonly quoted beginning at verse 22 (&ldquo;wives, submit to your husbands&rdquo;). But the section actually begins at verse 21: &ldquo;submitting to one another out of reverence for Christ.&rdquo; This verse is the governing head under which the entire household code falls. Both Greco-Roman and Jewish household codes of the period gave no such instruction to the dominant party. Paul&rsquo;s call to mutual submission is a transformation of the genre. The husband&rsquo;s role in the following verses (5:25-33) is then defined not by authority and command but by self-giving love: as Christ loved the church and gave himself up for her.",
  },
  {
    title: "Kephale &mdash; What Does Head Mean?",
    color: PURPLE,
    body: "The Greek word kephale (head) in Ephesians 5:23 (&ldquo;the husband is the head of the wife as Christ is the head of the church&rdquo;) is one of the most contested terms in New Testament scholarship. Complementarians argue that kephale carries the sense of authority &mdash; as in English, a &ldquo;head&rdquo; leads. Egalitarians (and some complementarians) argue that in Greek, kephale does not typically mean &ldquo;authority over&rdquo; (that is arche or exousia) but rather &ldquo;source&rdquo; or &ldquo;origin&rdquo; &mdash; as in &ldquo;headwaters.&rdquo; The debate involves both lexicography (what the word meant in first-century Greek) and context (how Paul uses it in Ephesians and 1 Corinthians 11). Both sides are represented by serious evangelical scholars committed to biblical authority.",
  },
  {
    title: "Ephesians 5 Is Primarily About Christ and the Church",
    color: GOLD,
    body: "One of the most important exegetical observations about Ephesians 5:22-33 is that Paul himself tells us what the passage is primarily about: &ldquo;This is a profound mystery, and I am saying it refers to Christ and the church&rdquo; (5:32). The marriage instructions are grounded in and serve the theology of Christ&rsquo;s relationship to his bride the church. The passage is first Christology, then ecclesiology, then marital ethics. The husband&rsquo;s love is defined by Christ&rsquo;s self-giving death (5:25). The wife&rsquo;s respect is analogous to the church&rsquo;s trust in Christ (5:33). Christian marriage is a public enactment of the gospel &mdash; a living sign that the world is reading.",
  },
  {
    title: "The Complementarian vs. Egalitarian Debate",
    color: TEAL,
    body: "The household codes are the primary battlefield for the complementarian-egalitarian debate in evangelical scholarship. Complementarians (Wayne Grudem, John Piper, Thomas Schreiner) argue that the husband&rsquo;s headship in Ephesians 5 reflects a creational order established before the fall and not merely a cultural accommodation to Roman household norms. Egalitarians (Philip Payne, Rebecca Merrill Groothuis, NT Wright) argue that Paul is subverting the Greco-Roman codes by rooting all authority in mutual submission and that the trajectory of the New Testament points toward full partnership. The honest acknowledgment: this is a secondary issue on which serious biblical scholars committed to Scripture&rsquo;s authority disagree. It should be held with conviction but without unkindness.",
  },
];

const parentingSections = [
  {
    title: "The Shema Paradigm &mdash; Deuteronomy 6:4-9",
    color: GREEN,
    body: "The paradigm for Christian parenting in the Old Testament is the Shema: these words shall be on your heart, and you shall teach them diligently to your children (Deut 6:7). The Hebrew word for &ldquo;teach diligently&rdquo; (shanan) literally means to whet or sharpen &mdash; to repeat until the truth is etched in. But the method is not formal classroom instruction. It is the saturation of ordinary life: when you sit in your house, when you walk by the way, when you lie down, when you rise up. Faith formation in this model is not a program but a texture of daily life &mdash; conversation at dinner, prayer before sleep, questions during the commute, rituals at the door. The parent is the primary formative influence, not the Sunday school teacher.",
  },
  {
    title: "The Father in the Parable of the Prodigal Son",
    color: TEAL,
    body: "Luke 15:11-32 is the New Testament&rsquo;s most vivid portrait of a parent &mdash; and specifically of a father who embodies what Christian parenting aspires to. He gives his son the inheritance demanded (a devastating request in a shame-honor culture), watches and waits, sees his son returning from a great distance, runs to him (dignified older men did not run in the ancient world), throws his arms around him, calls for the robe and the ring and the celebration. And then he goes out to the older son who will not come in and pleads with him. This father is not passive and indulgent; he is fully present to both sons in their rebellion and resentment. The father&rsquo;s love is neither permissive nor punitive &mdash; it is searching, patient, and extravagant.",
  },
  {
    title: "Proverbs on Discipline &mdash; Context and Meaning",
    color: PURPLE,
    body: "Proverbs 22:6 (&ldquo;train up a child in the way he should go; even when he is old he will not depart from it&rdquo;) is sometimes read as a promise and sometimes as a principle. Hebrew wisdom literature (including Proverbs) uses general maxims &mdash; observations about how things typically work &mdash; not absolute promises. The verse is a strong encouragement to faithful formation, not a guarantee that every faithfully raised child will remain in the faith. Proverbs 13:24 (&ldquo;whoever spares the rod hates his son, but he who loves him is diligent to discipline him&rdquo;) is part of a cluster of discipline sayings whose meaning has been debated: &ldquo;rod&rdquo; (shebet) is the same word used of the shepherd&rsquo;s staff in Psalm 23. The wider context of Proverbs&rsquo; discipline sayings is the formation of wisdom, self-control, and moral character &mdash; not punitive corporal punishment.",
  },
  {
    title: "Do Not Provoke Your Children &mdash; Ephesians 6:4",
    color: GOLD,
    body: "&ldquo;Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord&rdquo; (Ephesians 6:4). The command not to provoke (&ldquo;embitter&rdquo; in Colossians 3:21) places an important restraint on parental authority. The household codes in Ephesians address both parties: children are called to obey parents (6:1-3), but parents are called not to crush their children. Paternalistic authoritarianism that demands obedience without relationship, or religious pressure that produces shame without grace, provokes exactly the anger and discouragement Paul warns against. The Colossians version adds: &ldquo;lest they become discouraged&rdquo; &mdash; suggesting that overbearing parental authority can kill the spirit in a child.",
  },
  {
    title: "Faith Formation Research &mdash; Sticky Faith and Christian Smith",
    color: TEAL,
    body: "The empirical research on faith transmission in American Christianity is sobering and instructive. Christian Smith&rsquo;s landmark National Study of Youth and Religion (2005) found that the single strongest predictor of whether a teenager would sustain religious faith into adulthood was the faith of their parents &mdash; specifically, the personal, practicing faith of their parents, not merely their church attendance. The Sticky Faith project at Fuller Seminary found that the youth groups most effective at producing lasting faith were those where young people had significant relationships with five or more adults in the congregation beyond their parents. Both findings point in the same direction: faith is caught more than taught, and it requires a community.",
  },
  {
    title: "The Crisis of Deconstruction in Young Adults",
    color: GREEN,
    body: "The early twenty-first century has seen a significant pattern of &ldquo;deconstruction&rdquo; among young adults raised in evangelical Christianity &mdash; a systematic questioning or abandonment of previously held faith. The causes are multiple: an overly defensive and anti-intellectual version of faith that was unable to engage serious questions; a moralistic therapeutic deism that offered comfort without theology; disillusionment with church scandals and political entanglement; and the specific pressures of social media and university culture. Family discipleship that forms children in genuine theological depth &mdash; not just behavior management and church attendance &mdash; is the most durable counter to deconstruction. A faith that has never engaged doubt is a faith that will collapse under it.",
  },
];

const churchFamilySections = [
  {
    title: "The Language of Family in the Early Church",
    color: GREEN,
    body: "The New Testament is saturated with family language for the church: brothers and sisters (adelphoi), which appears over 250 times; father (pater) for Paul&rsquo;s relationship to his converts (1 Cor 4:15); mother (1 Thess 2:7); children (teknia) for John&rsquo;s congregations. This is not metaphor in the sense of &ldquo;like a family.&rdquo; Paul and the early Christians appear to have believed they were a family &mdash; that the new birth had created real kinship bonds that were not subordinate to biological bonds but in some ways superseded them. This is the theological grounding for Jesus&rsquo; claim in Mark 3:35: the community of disciples is genuinely his mother and brothers.",
  },
  {
    title: "The Household of God &mdash; 1 Timothy 3:15",
    color: TEAL,
    body: "Paul describes the church as &ldquo;the household of God, which is the church of the living God, a pillar and buttress of the truth&rdquo; (1 Timothy 3:15). The Greek oikos tou theou &mdash; household of God &mdash; is not a loose metaphor but a specific social reality. In the ancient world, the household was the primary social unit: the basic structure of belonging, provision, and mutual obligation. Paul is claiming that the church, not the biological family, is now the primary household for the follower of Jesus. The pastoral implications are enormous: the church has responsibility to its unmarried, widowed, and childless members not as benevolent charity but as family obligation.",
  },
  {
    title: "What the Church Owes Its Singles, Widows, and Childless",
    color: PURPLE,
    body: "If the church is genuinely the household of God, then its unmarried, widowed, and childless members are not peripheral guests at a family-centered program &mdash; they are full members of the family. Paul&rsquo;s instructions to Timothy about caring for widows (1 Tim 5:3-16) reflect this: the church has a genuine obligation to those who have no family to support them. The danger in many evangelical churches is that &ldquo;family ministry&rdquo; has become so central that the church functions as a federation of nuclear families rather than as a new family. Singles report feeling like perpetual guests. The theology of the church as primary family demands more than a singles&rsquo; group; it demands that the whole community be structured as a household in which belonging does not require marriage.",
  },
  {
    title: "Acts 2 Community &mdash; The Extended Family Nuclear Families Lack",
    color: GOLD,
    body: "The community described in Acts 2:42-47 &mdash; devoted to the apostles&rsquo; teaching, to fellowship, to the breaking of bread, to prayer; having all things in common; selling possessions and distributing to any who had need; meeting in homes and in the temple courts daily &mdash; describes something that the modern nuclear family living in geographic isolation cannot provide. The nuclear family was never designed to bear the entire weight of human community. Extended family, neighborhood networks, and village structures historically distributed that weight. The church as Acts 2 community is not the nuclear family&rsquo;s competitor; it is the extended network that makes nuclear family sustainable.",
  },
  {
    title: "Rodney Stark on Christian Family Practices",
    color: TEAL,
    body: "Rodney Stark&rsquo;s sociological work on early Christianity (The Rise of Christianity, 1996) identifies specific family practices as key drivers of the church&rsquo;s explosive growth in the first three centuries. Christians rejected infant exposure (the common practice of leaving unwanted infants, especially girls, to die). Christian women had significantly higher status and autonomy than women in Roman culture. Christian communities cared for the sick and elderly during epidemics when pagan neighbors fled. The Christian prohibition on abortion gave their communities higher birth rates. These were not &ldquo;pro-family&rdquo; policies in the modern political sense; they were the outworking of a theology that viewed every human life as bearing the image of God &mdash; and they transformed the demographic landscape of the Roman Empire.",
  },
];

const videos = [
  { videoId: "n3-3YhxDdCU", title: "Tim Keller on Marriage and Family" },
  { videoId: "OhE97mIMPYM", title: "John Piper on Parenting for Faith" },
  { videoId: "NqYhJW5TZXQ", title: "Family Discipleship" },
];

export default function ChristianFamilyTheologyPage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("ot");

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
              background: GREEN + "22",
              color: GREEN,
              padding: "0.2rem 0.8rem",
              borderRadius: 20,
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Family &amp; Relationships
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
          Christian Theology of Family
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
          Scripture&rsquo;s vision of family runs from the patriarchal beit av of Genesis through the radical
          redefinition Jesus announces in Mark 3 to the household of God that is the church. This guide traces that
          trajectory &mdash; what the Old Testament teaches, how Jesus transforms it, what the household codes demand,
          and how the church becomes the primary family for every believer.
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
                borderColor: activeTab === t.id ? GREEN : BORDER,
                background: activeTab === t.id ? GREEN + "22" : "transparent",
                color: activeTab === t.id ? GREEN : MUTED,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* OT TAB */}
        {activeTab === "ot" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {otSections.map((s) => (
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

        {/* JESUS REDEFINES FAMILY TAB */}
        {activeTab === "jesus" && (
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
                <strong>Mark 3:35 &mdash;</strong> &ldquo;Whoever does the will of God, he is my brother and sister and
                mother.&rdquo; Jesus announces a new primary family whose membership is determined not by blood but by
                obedience to God.
              </p>
            </div>
            {jesusSections.map((s) => (
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

        {/* HOUSEHOLD CODES TAB */}
        {activeTab === "codes" && (
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
                <strong>Ephesians 5:21 &mdash;</strong> &ldquo;submitting to one another out of reverence for
                Christ&rdquo; &mdash; the governing header for the entire household code that follows.
              </p>
            </div>
            {codesSections.map((s) => (
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

        {/* PARENTING TAB */}
        {activeTab === "parenting" && (
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
                <strong>Deuteronomy 6:7 &mdash;</strong> &ldquo;You shall teach them diligently to your children, and
                shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and
                when you rise up.&rdquo;
              </p>
            </div>
            {parentingSections.map((s) => (
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

        {/* CHURCH AS FAMILY TAB */}
        {activeTab === "church" && (
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
                <strong>1 Timothy 3:15 &mdash;</strong> &ldquo;the household of God, which is the church of the living
                God, a pillar and buttress of the truth.&rdquo; The church is the primary family; biological family is
                secondary.
              </p>
            </div>
            {churchFamilySections.map((s) => (
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.5rem" }}>
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
