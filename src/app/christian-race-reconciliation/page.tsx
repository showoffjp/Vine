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
const BLUE = "#3B82F6";

type Tab = "theology" | "history" | "imago" | "lament" | "voices" | "videos";

const THEOLOGY_ITEMS = [
  {
    id: "eph2",
    title: "Ephesians 2: One New Humanity",
    ref: "Ephesians 2:11-22",
    color: BLUE,
    body: "Paul's letter to the Ephesians contains the most theologically dense treatment of racial reconciliation in the New Testament. The immediate context is the division between Jew and Gentile — the deepest ethnic and religious fault line in the first-century world. Paul's declaration in 2:14-16 is extraordinary: \"For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility, by setting aside in his flesh the law with its commands and regulations. His purpose was to create in himself one new humanity out of the two, thus making peace, and in one body to reconcile both of them to God through the cross, by which he put to death their hostility.\"\n\nSeveral things are theologically decisive here. First, the agent of reconciliation is Christ, not human effort: \"he himself is our peace.\" Racial reconciliation is not primarily a political or sociological project — it is a gospel project, impossible apart from the cross. Second, the method is the destruction of the dividing wall — the specific barrier Paul has in mind is the Torah's separating function, but the principle applies to every humanly constructed system of separation. Third, the result is not the assimilation of one group into another but the creation of something new: \"one new humanity.\" Diversity is not eliminated in the new humanity; it is incorporated into a unity that transcends and includes it.\n\nFourth — and this is the most important structural move — reconciliation between humans and reconciliation between humans and God are inseparable. \"In one body to reconcile both of them to God through the cross.\" You cannot be genuinely at peace with God while maintaining enmity with those God has made. The horizontal and vertical are bound together in the cross.",
  },
  {
    id: "new-humanity",
    title: "What \"One New Humanity\" Actually Means",
    ref: "Galatians 3:28; Colossians 3:11; Revelation 7:9",
    color: GREEN,
    body: "Paul's phrase \"one new humanity\" (Eph 2:15) is the most theologically precise statement of the gospel's social vision. It is not assimilation — the absorption of minorities into the dominant culture's norms. It is not mere tolerance — the coexistence of groups who do not actually know each other. It is a new creation: something that did not exist before and cannot exist apart from the gospel.\n\nGalatians 3:28 — \"There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus\" — is the most quoted but most misread verse in this conversation. Paul is not saying that ethnic, class, and gender distinctions are erased. He is saying that they no longer determine status, access, or belonging within the body of Christ. The Galatian controversy was specifically about whether Gentiles needed to become Jews (through circumcision and Torah observance) to be full members of the covenant community. Paul's answer is decisive: no. The ground at the cross is level.\n\nColossians 3:11 reiterates: \"Here there is no Gentile or Jew, circumcised or uncircumcised, barbarian, Scythian, slave or free, but Christ is all, and is in all.\" The \"barbarian\" and \"Scythian\" were cultural categories of contempt — the lowest rungs of the Roman ethnic hierarchy. Paul includes them explicitly. And Revelation 7:9 describes the final vision: \"a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne.\" Ethnic diversity is not eliminated in the new creation; it is glorified. Heaven is not monochrome.",
  },
  {
    id: "dividing-wall",
    title: "The Dividing Wall and What Tears It Down",
    ref: "Ephesians 2:14; Romans 5:10-11; 2 Corinthians 5:18-20",
    color: PURPLE,
    body: "The \"dividing wall of hostility\" (Eph 2:14) was a specific architectural reality in the Jerusalem temple: a stone barrier separating the Court of the Gentiles from the inner courts, with an inscription warning that any Gentile who passed beyond it would be put to death. Paul uses this physical wall as a symbol for every humanly constructed system of separation — ethnic, class, cultural, religious.\n\nWhat tears it down? Paul's answer is not dialogue, not education, not legislation — though these may be important secondary means. The primary agent is Christ's death: \"by setting aside in his flesh the law with its commands and regulations\" (2:15). The cross is where every barrier meets its end, because the cross is where every human division is exposed as insufficient ground for separation before God. The person on the other side of every dividing wall is someone for whom Christ died. That fact cannot coexist with permanent hostility.\n\n2 Corinthians 5:18-20 extends the logic: God has given us \"the ministry of reconciliation... We are therefore Christ's ambassadors, as though God were making his appeal through us.\" The church is not merely the beneficiary of reconciliation; it is its instrument. The reconciled community is to be the demonstration to \"the rulers and authorities in the heavenly realms\" (Eph 3:10) that the gospel has the power to do what no human system can: create unity across the deepest divisions.",
  },
  {
    id: "distinction",
    title: "Reconciliation vs. Racial Justice: Getting the Distinction Right",
    ref: "Micah 6:8; Isaiah 58:6-7; Amos 5:24",
    color: GOLD,
    body: "The debate within the church over \"reconciliation\" versus \"racial justice\" is real and important. Critics of \"reconciliation\" language (including many Black theologians) argue that it can become a cover for cheap peace — asking the oppressed to forgive without addressing the structures that produced the harm. The concern is that \"reconciliation\" becomes a word that lets white Christians feel better without requiring anything to change.\n\nThis critique has historical weight. The history of American Christianity includes many examples of exactly this pattern: white churches calling for reconciliation while supporting or ignoring the systems — slavery, Jim Crow, redlining, mass incarceration — that produced the wound. Reconciliation without justice is not reconciliation; it is the performance of reconciliation while maintaining the conditions that require it.\n\nAt the same time, the prophetic tradition of Scripture refuses to separate reconciliation from justice. Micah 6:8 — \"to do justice, to love mercy, and to walk humbly with your God\" — holds all three together. Isaiah 58's picture of true fasting is not religious ritual but justice: \"loose the chains of injustice, untie the cords of the yoke, set the oppressed free\" (58:6). Amos 5:24: \"let justice roll on like a river, righteousness like a never-failing stream.\" The gospel vision is not reconciliation without justice or justice without reconciliation but both together, inseparably, in the same movement.",
  },
];

const HISTORY_ITEMS = [
  {
    id: "early",
    title: "The Early Church: Multiethnic from the Beginning",
    ref: "Acts 6:1-7; Acts 10-11; Acts 13:1-3; Galatians 2:11-14",
    body: "The early church was multiethnic from its earliest days, and its multiethnic character was not an accident. Acts 6 records the first racial conflict in the church: Hellenistic (Greek-speaking) widows were being overlooked in the food distribution in favor of Hebraic (Aramaic-speaking) widows. The apostles' response is instructive: they address it directly, appoint seven leaders (all with Greek names, significantly) to ensure equity, and the church grows.\n\nActs 10-11 narrates the conversion of Cornelius — the moment when the gospel formally crosses from Jewish to Gentile community. Peter's vision and subsequent experience require him to renounce a deeply held ethnic-religious boundary: \"God has shown me that I should not call any person impure or unclean\" (10:28). This is not a minor adjustment; it is a fundamental reorientation of his understanding of the gospel's scope.\n\nActs 13:1-3 lists the leadership team of the church at Antioch, the first genuinely multiethnic church: \"Barnabas, Simeon called Niger [a name suggesting African origin], Lucius of Cyrene, Manaen who had been brought up with Herod the tetrarch, and Saul.\" This diverse leadership team commissions the first missionary journey. The church's global mission begins in a racially diverse community.\n\nAnd yet even this early the church struggled: Galatians 2:11-14 records Paul confronting Peter to his face at Antioch because Peter \"began to draw back and separate himself from the Gentiles\" when certain people arrived from Jerusalem. The social pressure of ethnic peers overrode Peter's theological convictions. Paul names this plainly: he was \"not acting in line with the truth of the gospel.\" Racial division in the church is not new; it is as old as the church itself.",
  },
  {
    id: "slavery",
    title: "The American Church and Slavery",
    ref: "Historical context; Philemon; Luke 4:18-19",
    body: "The most painful chapter of the American church and race is the church's role in slavery. The institution of chattel slavery in North America was not merely tolerated by the church — it was actively supported, justified, and defended by significant portions of it, including through biblical argumentation. The so-called \"curse of Ham\" (Genesis 9:20-27) was used as a prooftext for Black enslavement for centuries, despite its misapplication. Major Protestant denominations in the American South split from their northern counterparts explicitly over the question of whether slaveholders could be ordained as missionaries.\n\nThe Southern Baptist Convention — the largest Protestant denomination in the United States — was founded in 1845 in defense of slaveholding. In 1995, the SBC passed a formal resolution apologizing for its founding sin and its subsequent \"failures to support civil rights\" during the Jim Crow era. This was a historically significant act of institutional lament, though critics noted it came 150 years after the fact.\n\nAt the same time, the Black church was formed precisely in and through the experience of slavery and oppression. The invisible institution of enslaved Black Christianity — worship in secret, biblical interpretation from below, spirituals that encoded both lament and resistance — produced a theological tradition of extraordinary depth and resilience. The Black church's reading of Exodus, of the prophets, of the crucifixion and resurrection, came from a place of embodied suffering that gave it a hermeneutical advantage unavailable to the comfortable. Howard Thurman's Jesus and the Disinherited (1949) is the landmark statement of this tradition: \"Jesus... was a poor Jew, and it is impossible for him to be regarded as one who exempts from the same category those who have been forced to live in that situation.\"",
  },
  {
    id: "jim-crow",
    title: "Jim Crow, the Civil Rights Movement, and the Church",
    ref: "Historical context; Martin Luther King Jr.; Letter from Birmingham Jail (1963)",
    body: "The Civil Rights Movement of the 1950s-60s was explicitly and self-consciously grounded in the Black church and its theology. Martin Luther King Jr. was a Baptist pastor trained at Boston University's School of Theology. The movement's tactics — nonviolent resistance, willingness to absorb violence without retaliation, the moral appeal to the conscience of the nation — were drawn from the gospel, from Gandhi (himself shaped by the Sermon on the Mount), and from the theology of the Black church.\n\nKing's Letter from Birmingham Jail (1963), written in response to white moderate clergy who urged patience, is one of the most theologically rich documents of the 20th century. King distinguishes just from unjust laws using Augustinian and Thomistic categories. He indicts white moderates — \"the great stumbling block in the stride toward freedom\" — not for overt racism but for their preference for \"order\" over justice. And he speaks of his \"disappointment with the white church\" with a grief that comes from theological conviction, not merely political frustration.\n\nThe white evangelical church's relationship to the Civil Rights Movement was largely one of opposition, silence, or belated support. Many of the same evangelical leaders who would later become known as defenders of biblical values opposed the movement on grounds of \"politics\" and the separation of church and worldly affairs. This history is not peripheral to understanding the current racial divisions in the American church; it is constitutive of them.",
  },
  {
    id: "segregated",
    title: "Sunday Morning: The Most Segregated Hour",
    ref: "Historical context; Martin Luther King Jr.; Sociological data",
    body: "Martin Luther King Jr.'s observation that 11 a.m. on Sunday morning is \"the most segregated hour in Christian America\" was made in 1963 and remains substantially true today. Studies of American congregations consistently find that roughly 80-90% of churches are racially homogeneous — defined as 80% or more of one racial group. The multiethnic church, while growing, is the exception, not the norm.\n\nThe reasons are complex and go beyond simple prejudice. Residential segregation — itself a product of legal history including redlining, restrictive covenants, and discriminatory federal housing policy — means that churches in the same neighborhood tend to reflect the demographics of that neighborhood. Worship styles, preaching traditions, and cultural forms are genuinely different across racial communities, and the merger of those traditions is not straightforward. The theological and political differences that track racial lines in American Christianity (different views of how the Bible addresses race, justice, and politics) make cross-racial ecclesial fellowship genuinely difficult.\n\nBut the fact of difficulty does not dissolve the obligation. Ephesians 2 does not say that the one new humanity is the aspiration of the church; it says it has been created by the cross. The segregated church is a theological contradiction — a denial in practice of what is true in Christ. The question for any congregation is not whether racial reconciliation is a priority but what its actual practices are in response to what the gospel has already accomplished.",
  },
];

const IMAGO_ITEMS = [
  {
    id: "foundation",
    title: "Imago Dei: The Foundation of Human Dignity",
    ref: "Genesis 1:26-27; Acts 17:26; James 3:9",
    body: "\"Then God said, 'Let us make mankind in our image, in our likeness'\" (Gen 1:26). The declaration that human beings are made in the image of God — imago Dei — is the theological foundation for all human dignity, all human rights, and all racial reconciliation. It is prior to every human distinction of race, class, nationality, or ability.\n\nThe significance of this declaration in its ancient context cannot be overstated. In the ancient Near East, the \"image of God\" was a concept reserved for kings — the king was the representative of the gods, the bearer of divine authority on earth. Genesis extends this to every human being. Not kings alone, not a particular ethnic group, not the priestly class — but all human beings, male and female, are image bearers. This is a democratization of dignity unprecedented in ancient religious thought.\n\nActss 17:26 reinforces this: Paul, speaking to the Areopagus in Athens, declares that God \"made from one man every nation of mankind to live on all the face of the earth.\" Racial diversity is not a problem; it is a fact of creation, rooted in the unity of the human family. James 3:9 draws the practical implication: \"With the tongue we praise our Lord and Father, and with it we curse human beings, who have been made in God's likeness. Out of the same mouth come praise and cursing. My brothers and sisters, this should not be.\" The racial slur, the dehumanizing stereotype, the rhetoric that makes another group less than human — all are violations not just of social decency but of the image of God in the person targeted.",
  },
  {
    id: "distorted",
    title: "How Racism Distorts Imago Dei",
    ref: "Genesis 3; Romans 1:18-32; Colossians 1:15-20",
    body: "Racism is not merely a social problem or a political disagreement. At its theological core, it is the denial of the full humanity of a person or group made in God's image. This makes it a form of idolatry — the elevation of human racial categories into ultimate categories, the claim that one group's image-bearing is more complete or more valuable than another's.\n\nThe history of American racism required the sustained theological dehumanization of African Americans — in law, in philosophy, in natural science, and tragically in theology. People made in God's image were legally classified as property. The denial was not incidental but systematic and required sustained ideological support to maintain.\n\nThe gospel directly confronts this. Colossians 1:15-20 declares that Christ \"is the image of the invisible God, the firstborn over all creation... For in him all things were created: things in heaven and on earth, visible and invisible... He is before all things, and in him all things hold together.\" The one in whose image every human being is made is the same one who holds all things together. To despise any image-bearer is to despise the one whose image they bear. There is no theological space for racism within a robust Christology.",
  },
];

const LAMENT_ITEMS = [
  {
    id: "first-step",
    title: "Lament as the First Step",
    ref: "Lamentations 3:40-42; Nehemiah 1:4-7; Psalm 22",
    body: "Genuine reconciliation requires genuine lament — the honest acknowledgment of what has been done, what has been lost, and what has been borne. The move to reconciliation without lament is premature and ultimately superficial; it produces a togetherness that has not actually dealt with the wound.\n\nThe biblical tradition of lament is rich and theologically serious. The book of Lamentations is five chapters of communal grief over the destruction of Jerusalem — a sustained, honest engagement with catastrophe that does not rush to resolution. Psalm 22 begins with desolation — \"My God, my God, why have you forsaken me?\" — and arrives at praise only after spending most of the psalm in honest suffering. The Psalms include more laments than any other single category: lament is not a failure of faith but a form of it.\n\nNehemiah's response to hearing of Jerusalem's broken walls (Neh 1:4-7) is the model of reconciliatory lament: \"When I heard these things, I sat down and wept. For some days I mourned and fasted and prayed before the God of heaven. Then I said: 'Lord, the God of heaven, the great and awesome God, who keeps his covenant of love with those who love him and keep his commandments, let your ear be attentive and your eyes open to hear the prayer your servant is praying before you day and night for your servants, the people of Israel. I confess the sins we Israelites, including myself and my father's family, have sinned against you.'\" He includes himself in the confession — not merely confessing the sins of others but identifying with the community's corporate failure.",
  },
  {
    id: "corporate",
    title: "Corporate Confession and Inherited Sin",
    ref: "Nehemiah 9:1-3; Daniel 9:4-19; Leviticus 26:40",
    body: "American individualism resists the idea of corporate or inherited responsibility. \"I didn't personally own slaves\" is a frequently heard response to calls for acknowledgment of racial history. But the biblical tradition has a robust category of corporate confession — the acknowledgment of sins committed by the community of which one is a member, including sins committed before one's own lifetime.\n\nNehemiah 9 is the fullest example: after the reading of the law under Ezra, the Israelites stand and confess \"their sins and the wickedness of their fathers\" (9:2). The confession covers centuries of national unfaithfulness. The people present are not personally responsible for the sins of the exodus generation, but they stand within a continuing community whose story includes those sins, and they acknowledge them.\n\nDaniel 9:4-19 is similarly structured: Daniel confesses \"we have sinned and done wrong. We have been wicked and have rebelled; we have turned away from your commands and laws\" — using first-person plural throughout, including himself in the confession of the community.\n\nThis does not require the infinite guilt of individuals for every historical wrong. It does require honest acknowledgment of the ways a community's present position was shaped by past injustice. The person who benefits from a system of advantage has a different relationship to its history than the person who suffered under it. Acknowledgment of this difference is not self-flagellation; it is honesty.",
  },
  {
    id: "truth-telling",
    title: "Truth-Telling as Precondition for Reconciliation",
    ref: "John 8:32; Psalm 51:6; Proverbs 28:13",
    body: "\"Then you will know the truth, and the truth will set you free\" (John 8:32). The sequence matters: truth first, then freedom. Reconciliation built on false narratives — on comfortable versions of history that omit the worst, on selective memory that honors the victims but not the perpetrators, on the denial that the wound is still open — will not hold. It is peace built on sand.\n\nHistorical truth-telling is one of the most concrete requirements of racial reconciliation. This means accurate accounts of slavery and its economics; of the long history of racial terror and legal discrimination; of the ways churches participated, accommodated, and failed; of the structures that continue to produce unequal outcomes today. It means being honest about what the data show without reducing the conversation to statistics.\n\nTruth-telling in this context is not an accusation directed at any individual; it is the honest accounting that a community owes its members and its God. Psalm 51:6 — \"You desire truth in the inward parts\" — suggests that God's interest is in the honest interior life, not the managed exterior presentation. Proverbs 28:13 — \"Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy\" — applies corporately as well as individually. The community that conceals its history does not prosper; the community that honestly names it opens itself to mercy and restoration.",
  },
];

const VOICES = [
  {
    name: "Curtiss Paul DeYoung",
    work: "Reconciliation: Our Greatest Challenge, Our Only Hope (1997)",
    color: BLUE,
    note: "DeYoung's work is the most sustained biblical-theological treatment of racial reconciliation. He argues that reconciliation is not a social program but a fundamental dimension of the gospel — inseparable from justification, rooted in the cross, and requiring both personal and structural change. His concept of \"ambassadors of reconciliation\" draws directly on 2 Corinthians 5 and insists that the church has a specific, unreplaceable role.",
  },
  {
    name: "Howard Thurman",
    work: "Jesus and the Disinherited (1949)",
    color: GREEN,
    note: "Thurman's classic asks what the religion of Jesus says to people \"with their backs against the wall\" — the poor, the marginalized, the racially oppressed. His answer is that Jesus was himself a poor, disinherited Jew living under Roman occupation, and that reading the gospel from this position produces a profoundly different theology than reading it from the position of the powerful. This book shaped Martin Luther King Jr., who carried it on his travels.",
  },
  {
    name: "Jemar Tisby",
    work: "The Color of Compromise (2019)",
    color: GOLD,
    note: "Tisby's historical survey of American Christianity and race is the most accessible and thorough account available. He documents the church's complicity in racism from the colonial period through the present, not to produce guilt but to produce honest reckoning: \"There can be no reconciliation without repentance, no repentance without confession, and no confession without truth-telling.\" An essential primer for any congregation serious about this work.",
  },
  {
    name: "Bryan Stevenson",
    work: "Just Mercy (2014)",
    color: PURPLE,
    note: "Stevenson is not a theologian but his work on criminal justice — particularly the death penalty and the incarceration of the innocent — is saturated with the biblical call to justice and mercy. A practicing Christian, he frames the work in terms of human dignity and the proximity required to see clearly: \"You have to get close to the problem.\" His TED talk on the power of proximity and identity has been widely used in church settings.",
  },
  {
    name: "Martin Luther King Jr.",
    work: "Letter from Birmingham Jail (1963); Strength to Love (1963)",
    color: BLUE,
    note: "King's work is not social commentary with a religious veneer; it is serious Christian theology applied to a specific historical crisis. His distinction between just and unjust laws uses the full weight of the Western natural law tradition. His critique of the white moderate church is theologically precise. His vision of the Beloved Community is an eschatological category drawn from the kingdom of God. King is a primary theological voice for this conversation, not merely a historical hero.",
  },
  {
    name: "Latasha Morrison",
    work: "Be the Bridge: Pursuing God's Heart for Racial Reconciliation (2019)",
    color: GREEN,
    note: "Morrison's work is practical and ecclesiologically grounded — she founded the Be the Bridge organization to equip churches with actual practices for racial reconciliation. Her book moves through lament, listening, advocacy, and action with pastoral care and theological grounding. It is one of the most widely used resources in church settings attempting this work.",
  },
];

const VIDEOS = [
  {
    videoId: "AGUwcs9qTuQ",
    title: "Racial Reconciliation and the Gospel — John Perkins",
    channel: "The Gospel Coalition",
    description: "John Perkins, who was beaten by white police officers in Mississippi in 1970 and later co-founded the Christian Community Development Association, speaks with extraordinary grace and prophetic clarity about what racial reconciliation actually requires.",
  },
  {
    videoId: "J154GOBDmkw",
    title: "Ephesians 2 and the New Humanity — Tim Keller",
    channel: "Gospel in Life",
    description: "Keller preaches through Ephesians 2:11-22 — the theological foundation for racial reconciliation in the New Testament — with characteristic clarity about how the gospel creates a new multiethnic community.",
  },
  {
    videoId: "ob4YfVKB9vY",
    title: "The Color of Compromise — Jemar Tisby",
    channel: "Covenant College",
    description: "Tisby summarizes his historical research on the American church and race, and makes the case for what genuine repentance and reconciliation require from white Christians and white churches today.",
  },
];

const TAB_LABELS: Record<Tab, string> = {
  theology: "Ephesians 2",
  history: "Church & History",
  imago: "Imago Dei",
  lament: "Lament First",
  voices: "Voices",
  videos: "Videos",
};

export default function ChristianRaceReconciliationPage() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => { setLoaded(true); }, []);

  if (!loaded) return null;

  function toggle(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const TABS: Tab[] = ["theology", "history", "imago", "lament", "voices", "videos"];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44, paddingTop: 40 }}>
          <div style={{ display: "inline-block", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "4px 14px", fontSize: 11, color: BLUE, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Justice &amp; Reconciliation
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 14, lineHeight: 1.2 }}>
            Christian Racial Reconciliation
          </h1>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 700, margin: "0 auto", lineHeight: 1.75 }}>
            The reconciliation theology of Ephesians 2, the history of the church and race, imago Dei as
            foundation, lament as first step, key voices in the conversation, and what reconciliation
            actually requires &mdash; gospel-centered, historically honest, and constructive.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 36, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 4, flexWrap: "wrap" }}>
          {TABS.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "9px 16px",
                borderRadius: 8,
                border: "none",
                background: tab === t ? BLUE : "transparent",
                color: tab === t ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 12,
                cursor: "pointer",
                flex: 1,
                minWidth: 90,
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {/* ─── Tab: Ephesians 2 ─── */}
        {tab === "theology" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BLUE}40`, borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
              <blockquote style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 10px", borderLeft: `3px solid ${BLUE}`, paddingLeft: 16 }}>
                &ldquo;For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility&hellip; His purpose was to create in himself one new humanity out of the two, thus making peace.&rdquo;
              </blockquote>
              <p style={{ color: MUTED, fontSize: 12, margin: 0 }}>Ephesians 2:14-15 &mdash; the theological foundation for racial reconciliation in the New Testament</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {THEOLOGY_ITEMS.map((item) => {
                const open = !!expanded[item.id];
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${open ? item.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                    >
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ color: item.color, fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>{item.ref}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", display: "inline-block" }}>&#9662;</span>
                    </button>
                    {open && (
                      <div style={{ padding: "4px 22px 22px", color: MUTED, fontSize: 14, lineHeight: 1.85, borderTop: `1px solid ${BORDER}`, whiteSpace: "pre-line" }}>
                        {item.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── Tab: Church & History ─── */}
        {tab === "history" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Genuine reconciliation requires honest history. The American church&rsquo;s relationship with race is a story of both profound failure and profound faithfulness &mdash; of churches that justified slavery and churches that resisted it, of denominations that split over human dignity and movements that recovered it. Getting the history right is not optional; it is the precondition for repentance.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {HISTORY_ITEMS.map((item) => {
                const open = !!expanded[item.id];
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${open ? GOLD : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                    >
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ color: GOLD, fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>{item.ref}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", display: "inline-block" }}>&#9662;</span>
                    </button>
                    {open && (
                      <div style={{ padding: "4px 22px 22px", color: MUTED, fontSize: 14, lineHeight: 1.85, borderTop: `1px solid ${BORDER}`, whiteSpace: "pre-line" }}>
                        {item.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── Tab: Imago Dei ─── */}
        {tab === "imago" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                &ldquo;Then God said, &lsquo;Let us make mankind in our image, in our likeness&rsquo;&rdquo; (Genesis 1:26). The doctrine of imago Dei is the theological foundation for all human dignity and all racial equality. Every person of every ethnicity bears the image of God &mdash; this is not a sentiment but a doctrinal claim with radical ethical implications.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {IMAGO_ITEMS.map((item) => {
                const open = !!expanded[item.id];
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${open ? GREEN : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                    >
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ color: GREEN, fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>{item.ref}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", display: "inline-block" }}>&#9662;</span>
                    </button>
                    {open && (
                      <div style={{ padding: "4px 22px 22px", color: MUTED, fontSize: 14, lineHeight: 1.85, borderTop: `1px solid ${BORDER}`, whiteSpace: "pre-line" }}>
                        {item.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Scripture row */}
            <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
              {[
                { ref: "Genesis 1:26-27", text: "\"Let us make mankind in our image, in our likeness\"" },
                { ref: "Acts 17:26", text: "\"From one man he made all the nations\"" },
                { ref: "Galatians 3:28", text: "\"All one in Christ Jesus\"" },
                { ref: "Revelation 7:9", text: "\"Every nation, tribe, people and language\"" },
              ].map((s) => (
                <div key={s.ref} style={{ flex: "1 1 200px", background: CARD, border: `1px solid ${GREEN}`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: GREEN, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{s.ref}</div>
                  <p style={{ color: TEXT, fontSize: 13, fontStyle: "italic", lineHeight: 1.5, margin: 0 }}>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── Tab: Lament First ─── */}
        {tab === "lament" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 14, padding: "20px 24px", marginBottom: 28 }}>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Reconciliation without lament is cheap peace. The move to &ldquo;getting along&rdquo; before honestly acknowledging what happened and what it cost produces a togetherness that has not dealt with the wound. The biblical tradition of lament &mdash; from Lamentations to the Psalms to Nehemiah&rsquo;s corporate confession &mdash; models what honest reckoning looks like.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {LAMENT_ITEMS.map((item) => {
                const open = !!expanded[item.id];
                return (
                  <div key={item.id} style={{ background: CARD, border: `1px solid ${open ? PURPLE : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                    >
                      <div>
                        <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ color: PURPLE, fontSize: 11, fontWeight: 600, letterSpacing: 0.5 }}>{item.ref}</div>
                      </div>
                      <span style={{ color: MUTED, fontSize: 18, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", display: "inline-block" }}>&#9662;</span>
                    </button>
                    {open && (
                      <div style={{ padding: "4px 22px 22px", color: MUTED, fontSize: 14, lineHeight: 1.85, borderTop: `1px solid ${BORDER}`, whiteSpace: "pre-line" }}>
                        {item.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Practices */}
            <div style={{ marginTop: 32, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 16, marginBottom: 16, marginTop: 0 }}>Practices of Lament and Repentance</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Read Nehemiah 9 and Daniel 9 aloud as a congregation, praying the corporate confession in the first person plural.",
                  "Study the specific racial history of your denomination — most denominations have done this work and published resources.",
                  "Create space in worship for lament related to racial injustice — the Psalms model this in the community&rsquo;s gathered prayer.",
                  "Invite cross-racial listening conversations before planning programs — the work of listening and lamenting together precedes the work of action together.",
                  "Examine your church&rsquo;s own history: Who founded it? Who was excluded? What has been confessed, and what has not?",
                ].map((p, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: PURPLE, color: "#fff", fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65, margin: 0 }} dangerouslySetInnerHTML={{ __html: p }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── Tab: Voices ─── */}
        {tab === "voices" && (
          <div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 28 }}>
              The conversation on racial reconciliation has been shaped by thinkers, theologians, and activists from across the church. Below are key voices whose work is essential reading for anyone serious about this topic.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {VOICES.map((v) => (
                <div key={v.name} style={{ background: CARD, border: `1px solid ${v.color}40`, borderRadius: 14, padding: "22px 26px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 12, flexWrap: "wrap" }}>
                    <div>
                      <h3 style={{ color: v.color, fontWeight: 800, fontSize: 17, marginBottom: 4, marginTop: 0 }}>{v.name}</h3>
                      <div style={{ color: MUTED, fontSize: 12, fontStyle: "italic" }}>{v.work}</div>
                    </div>
                  </div>
                  <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{v.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── Tab: Videos ─── */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {VIDEOS.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "16px 20px" }}>
                  <h4 style={{ color: BLUE, fontWeight: 700, fontSize: 16, marginBottom: 4, marginTop: 0 }}>{v.title}</h4>
                  <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 8, marginTop: 0 }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}
