"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Do This in Remembrance",
  "Lord Supper Institution",
  "Examine Yourselves",
  "Application",
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
    heading: "Overview of 1 Corinthians 11",
    reference: "1 Corinthians 11:1&ndash;34",
    paragraphs: [
      "First Corinthians 11 stands as one of the most pastorally urgent chapters in the entire Pauline corpus. Paul writes to a church that has received the fullness of the gospel but is fracturing along social lines precisely at the table where unity should be most vividly displayed. The chapter addresses two related concerns &mdash; head coverings in worship (11:2&ndash;16) and the Lord&rsquo;s Supper (11:17&ndash;34) &mdash; but it is the second that has shaped Christian theology and practice ever since.",
      "The Corinthian church was diverse by ancient standards: it included wealthy householders, freedmen, slaves, and the economically marginal. When the church gathered in a patron&rsquo;s home for the Lord&rsquo;s Supper, the social hierarchies of the Roman world were being reproduced at the table. The wealthy arrived early and ate their fill of fine food and wine; the poor and enslaved, who could not leave work early, arrived to find the best food gone and their hosts already drunk. The sacred meal of remembrance had become a mirror image of the patronage dinners that structured Roman social life.",
      "Paul&rsquo;s response is not merely an appeal for better table manners. He identifies what is at stake with startling directness: &ldquo;When you come together, it is not the Lord&rsquo;s Supper that you eat&rdquo; (11:20). What they are doing does not qualify as the Lord&rsquo;s Supper at all because the Supper has a specific meaning &mdash; the proclamation of the Lord&rsquo;s death until he comes &mdash; and that meaning is destroyed when the table becomes an arena of social discrimination. The problem is not merely social rudeness; it is a theological failure of the first order.",
      "At the center of the passage, Paul preserves what is almost certainly the earliest written account of the institution of the Lord&rsquo;s Supper (11:23&ndash;26). This tradition, which Paul says he &ldquo;received from the Lord,&rdquo; pre-dates even the written Gospels and takes us as close as any document can to the night on which Jesus was betrayed. The words of institution &mdash; over the bread and over the cup &mdash; invest the meal with its defining meaning: remembrance of a body given and a new covenant sealed in blood.",
      "The passage then introduces the doctrine of &ldquo;eating and drinking judgment on oneself&rdquo; (11:29) &mdash; a warning that has both sobered and puzzled Christians through the centuries. Paul connects physical illness and death in the Corinthian congregation directly to unworthy participation in the Supper. The Lord&rsquo;s table is not neutral ground; to eat it in a manner that denies its meaning is to treat with contempt the body and blood of the Lord himself, and this is a matter of utmost gravity.",
      "Taken together, chapter 11 teaches that the Lord&rsquo;s Supper is the focal point at which the church&rsquo;s unity, its theology of atonement, its eschatological hope, and its social ethics all converge. You cannot properly observe the Supper while despising the poor members who share the table with you. You cannot properly remember Christ&rsquo;s death while treating the covenant meal as a vehicle for social display. And you cannot approach this table without the self-examination that Paul commands, for what is enacted here is nothing less than the proclamation of the Lord&rsquo;s death until he comes.",
    ],
  },
  {
    id: "Do This in Remembrance",
    heading: "Do This in Remembrance of Me",
    reference: "1 Corinthians 11:23&ndash;26",
    paragraphs: [
      "The words &ldquo;do this in remembrance of me&rdquo; are among the most repeated phrases in the history of Christian worship, and Paul&rsquo;s account in 1 Corinthians 11:23&ndash;26 is the earliest written record we possess of them. Paul introduces this tradition with a striking phrase: &ldquo;For I received from the Lord what I also delivered to you&rdquo; (11:23). This language of receiving and delivering &mdash; paralambanein and paradidomi in Greek &mdash; is the technical vocabulary of oral tradition, the same language used for handing on authoritative teaching from teacher to student. Paul is not offering his own theological reflection; he is transmitting something he has been entrusted to guard and pass on.",
      "On &ldquo;the night when he was betrayed,&rdquo; Jesus took bread, gave thanks, broke it, and said: &ldquo;This is my body, which is for you. Do this in remembrance of me&rdquo; (11:24). The phrase &ldquo;for you&rdquo; is dense with sacrificial resonance. In the Hebrew scriptures, the body &mdash; the whole self &mdash; given &ldquo;for you&rdquo; echoes the substitutionary logic of the sacrificial system, in which the animal stood in the place of the worshiper. Jesus is not merely sharing a meal; he is announcing that his body will be given in the place of those who eat this bread.",
      "The word translated &ldquo;remembrance&rdquo; &mdash; anamnesis in Greek &mdash; deserves careful attention. In ordinary English, remembrance can be a purely cognitive exercise, a mental recollection of something past. But in the Hebrew world from which Jesus spoke, remembrance (Hebrew: zikkaron) was an active, participatory recalling that made the past event present and effective. When Israel was commanded to observe the Passover &ldquo;in remembrance,&rdquo; they were not merely thinking about the Exodus; they were being drawn into it, claiming it as their own story, allowing its meaning to constitute their identity. To eat the Lord&rsquo;s Supper in remembrance of him is to participate in the meaning and benefits of his death.",
      "In the same way, after supper, Jesus took the cup and said: &ldquo;This cup is the new covenant in my blood. Do this, as often as you drink it, in remembrance of me&rdquo; (11:25). The phrase &ldquo;new covenant in my blood&rdquo; is a direct allusion to Jeremiah 31:31&ndash;34, where God promised that a day would come when he would make a new covenant with his people, writing his law on their hearts rather than on stone tablets, and forgiving their iniquity completely. Jesus announces that this covenant, for which Israel had waited centuries, is sealed in his own blood &mdash; the blood of the cross.",
      "Paul then draws out the implication: &ldquo;For as often as you eat this bread and drink the cup, you proclaim the Lord&rsquo;s death until he comes&rdquo; (11:26). The Lord&rsquo;s Supper is not merely a private act of personal piety. It is a proclamation &mdash; a public, communal announcement of the event by which the world was redeemed. And it has an eschatological horizon: &ldquo;until he comes.&rdquo; Every celebration of the Supper is simultaneously a backward look to Calvary and a forward declaration of hope, a proclamation that the story does not end with the cross but with the return of the Lord in glory.",
      "This dual orientation &mdash; memorial and anticipation, Calvary and Parousia &mdash; gives the Lord&rsquo;s Supper its distinctive shape as an act of Christian worship. It is the enacted gospel, the good news made tangible. In the bread and the cup, the church proclaims what it believes, experiences what it hopes for, and is drawn together as a community formed not by ethnic or social solidarity but by shared participation in the death and resurrection of Jesus Christ.",
    ],
  },
  {
    id: "Lord Supper Institution",
    heading: "The Lord's Supper: Institution and Meaning",
    reference: "1 Corinthians 11:17&ndash;26",
    paragraphs: [
      "When Paul says &ldquo;I received from the Lord what I also delivered to you&rdquo; (11:23), he is connecting the celebration of the Supper directly to the authority of Christ himself. The meal did not originate with the apostles&rsquo; creative liturgical instincts; it was instituted by Jesus on the night of his arrest, in the context of a Passover seder, and then entrusted to his followers as the defining act of communal remembrance until his return. To alter its meaning or conduct it in a way that contradicts its purpose is to set one&rsquo;s will against the Lord who gave it.",
      "The setting matters enormously. The night on which Jesus was betrayed was the night of Passover &mdash; the night on which Israel commemorated God&rsquo;s redemption of his people from Egypt through the blood of the lamb. When Jesus took the Passover bread and said &ldquo;this is my body,&rdquo; he was reinterpreting the entire feast. The lamb whose blood had protected Israel from the angel of death was a type; he was the antitype, the ultimate Passover lamb whose blood would protect not merely one nation for one night but all who trust in him for eternity. Paul makes this connection explicit elsewhere: &ldquo;Christ, our Passover lamb, has been sacrificed&rdquo; (5:7).",
      "The institution of the Lord&rsquo;s Supper is therefore simultaneously the culmination of the old covenant and the inauguration of the new. Every Passover had been a rehearsal for this moment; every slaughtered lamb had been a shadow of this body. When Jesus said &ldquo;this is my body, which is for you,&rdquo; he was not departing from Israel&rsquo;s story but fulfilling it at its deepest level &mdash; showing that the entire sacrificial system of the Torah was a long pointing finger directed at the cross.",
      "Paul&rsquo;s context makes clear that the Corinthians had received this institution from Paul himself during his founding visit to the church. They knew what they had been given. This is precisely what makes their abuse of the Supper so grievous: they are not ignorant; they are unfaithful. They have taken the sacred tradition of the Lord&rsquo;s death and turned it into a vehicle for the very kind of social stratification that the cross was meant to demolish. At the cross, Paul had told them, there is neither Jew nor Greek, slave nor free; but at their table, slave and free were being sorted into different dining experiences.",
      "The phrase &ldquo;the Lord&rsquo;s Supper&rdquo; (kyriakon deipnon, 11:20) itself is a theological claim. Kyriakon means &ldquo;belonging to the Lord,&rdquo; the adjective from kyrios (Lord). This is the Lord&rsquo;s table; he is the host; his purposes govern how it is to be conducted. No human social hierarchy has standing to override the host&rsquo;s intentions. The wealthy patron in whose house the church meets is not the host of this meal &mdash; the Lord is. And the Lord has made clear, through his servant Paul, that his table is to be a place where the unity of the body takes precedence over the distinctions of Roman social rank.",
      "For the church in every generation, the institutional character of the Lord&rsquo;s Supper is a safeguard against two opposite dangers. On one side is the danger of turning the meal into mere ritual, a mechanical repetition of words and gestures that has lost its connection to the body-and-blood reality of the cross. On the other side is the danger of treating it as an occasion for whatever the current community decides to make of it, stripped of its fixed reference to the Lord&rsquo;s death. The &ldquo;received tradition&rdquo; that Paul guards holds the community accountable to something outside itself &mdash; to the word of the Lord on the night he was betrayed.",
    ],
  },
  {
    id: "Examine Yourselves",
    heading: "Examine Yourselves",
    reference: "1 Corinthians 11:27&ndash;34",
    paragraphs: [
      "Having stated the tradition of institution, Paul turns to its direct application in Corinth: &ldquo;Whoever, therefore, eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty concerning the body and blood of the Lord&rdquo; (11:27). The word &ldquo;unworthy&rdquo; here does not refer to the moral state of the participant &mdash; as though only sinless people may approach the table. Eaten &ldquo;in an unworthy manner&rdquo; describes the manner of eating: treating the Supper as though it were an ordinary meal, without discerning its sacred meaning, without regard for the community of believers gathered around the same table.",
      "In the Corinthian context, eating in an unworthy manner meant eating in a way that humiliated the poor members of the body. The wealthy who gorged themselves while their brothers and sisters went hungry were not merely being rude; they were sinning against the body and blood of Christ, because the Supper is precisely the meal in which the entire community is united by its shared participation in that body and blood. To exclude any member from full participation in the meal is to contradict the very thing the meal proclaims.",
      "Paul therefore commands: &ldquo;Let a person examine himself, then, and so eat of the bread and drink of the cup&rdquo; (11:28). Self-examination before the Supper has been a consistent element of Christian practice ever since, though it has sometimes been so emphasized that it produces paralysis rather than preparation. The examination Paul envisions is not an exhaustive catalogue of sin that leaves the believer too ashamed to approach the table; it is the sober act of aligning oneself with what the Supper means &mdash; recognizing the Lord&rsquo;s body, attending to the unity of the community, coming with genuine faith rather than social habit.",
      "The next verses are among the most solemn in the New Testament: &ldquo;For anyone who eats and drinks without discerning the body eats and drinks judgment on himself. That is why many of you are weak and ill, and some have died&rdquo; (11:29&ndash;30). Paul connects physical illness and death in the Corinthian congregation directly to the abuse of the Lord&rsquo;s Supper. The Lord&rsquo;s table is not neutral ground. To treat the body of Christ &mdash; both the sacramental elements and the community of believers who are his body &mdash; with contempt is to place oneself under divine discipline.",
      "This does not mean that every Christian who is sick or dying has been judged for Eucharistic sin; Paul is speaking of a specific pattern he perceives in Corinth. But it does mean that the Lord takes the conduct of his table with deadly seriousness. This is &ldquo;the Lord&rsquo;s table,&rdquo; and the Lord is present at it. The discipline Paul describes is in fact an expression of grace: &ldquo;But when we are judged by the Lord, we are disciplined so that we may not be condemned along with the world&rdquo; (11:32). The Lord corrects his people at the table rather than leaving them in their sin.",
      "Paul&rsquo;s practical conclusion is disarmingly direct: &ldquo;So then, my brothers, when you come together to eat, wait for one another &mdash; if anyone is hungry, let him eat at home, so that when you come together it will not be for judgment&rdquo; (11:33&ndash;34). The solution to the Corinthian disorder is not a more elaborate liturgy but a more genuine love. Wait for each other. Recognize that what you are doing when you gather is not a dinner party but a proclamation of the Lord&rsquo;s death. Let that recognition reshape the way you treat the poorest person who walks through the door.",
    ],
  },
  {
    id: "Application",
    heading: "Applying 1 Corinthians 11 Today",
    reference: "1 Corinthians 11:17&ndash;34",
    paragraphs: [
      "The social stratification that Paul confronted in Corinth was not unique to the first century. Every generation of the church has faced the temptation to allow the social hierarchies of the surrounding culture to reproduce themselves at the Lord&rsquo;s table. Wealth, race, education, social status, denominational prestige &mdash; all of these have been used, at various times, to stratify Christian communities in ways that contradict what the Supper proclaims. Paul&rsquo;s diagnosis applies to every such distortion: if the manner of your gathering communicates to any member of the body that they are less valued, less welcome, or less important, you are not eating the Lord&rsquo;s Supper.",
      "The command to &ldquo;discern the body&rdquo; (11:29) operates on two levels that are inseparable. There is the sacramental body &mdash; the bread that represents the body of Christ given on the cross. And there is the ecclesial body &mdash; the gathered community of believers who are the body of Christ in the world. To discern the body means to hold both realities together: to honor the Lord present in the elements and to honor the Lord present in every member of the congregation. Contempt for either is contempt for both.",
      "The practice of self-examination before the Lord&rsquo;s Supper, rightly understood, is not an exercise in spiritual paralysis but an act of spiritual preparation. It is the regular practice of asking: Am I coming to this table in genuine faith, trusting in the body and blood of Christ for my forgiveness and life? Am I harboring contempt or division toward any member of this community? Is there a reconciliation I owe before I eat? This kind of examination does not make the Supper a reward for the spiritually successful; it makes it the gathering place of people who know they need what the Supper offers.",
      "Paul&rsquo;s eschatological framing &mdash; &ldquo;until he comes&rdquo; (11:26) &mdash; is a neglected dimension of Eucharistic theology and practice. The Lord&rsquo;s Supper is not merely backward-looking, a grateful remembrance of what happened at Calvary. It is a forward declaration, an enacted prayer for the return of the Lord in glory. Every celebration of the Supper is a testimony that the story is not over, that the kingdom has not fully come, that the Lord who was betrayed and crucified will return and establish his reign without end. The table gives the church its eschatological posture: grateful for what has been accomplished, longing for what is yet to come.",
      "For pastoral ministry, 1 Corinthians 11 provides a sobering reminder that the way a congregation observes the Lord&rsquo;s Supper reveals the health &mdash; or the pathology &mdash; of the whole community. If the Table is observed in a perfunctory, merely habitual way, it suggests that the congregation has lost its grip on what the cross means. If the Table is observed in a way that excludes, embarrasses, or marginalizes any members of the body, it suggests that the gospel of reconciliation has not yet penetrated the social habits of the community. The Supper is not a spiritual add-on to a congregation&rsquo;s life; it is a diagnostic lens through which the entire life of the community is examined.",
      "Ultimately, the question Paul forces upon every reader of 1 Corinthians 11 is this: What do you believe the Lord&rsquo;s Supper is? If it is merely a religious custom, it can be managed and adapted without great consequence. But if it is what Paul says it is &mdash; the proclamation of the Lord&rsquo;s death, the enactment of the new covenant in his blood, the communal participation in his body and blood, the anticipation of his coming again &mdash; then how it is observed matters with ultimate seriousness, because what is at stake is not a ceremony but a living encounter with the crucified and risen Lord of the universe.",
    ],
  },
];

const videoItems = [
  { videoId: "yAOHHRTsn0I", title: "BibleProject: 1 Corinthians Overview" },
  { videoId: "dqQ6_yGCPck", title: "The Lord's Supper in 1 Corinthians 11 - Bible Study" },
  { videoId: "AEJ_6l78hls", title: "Do This in Remembrance of Me - Communion Explained" },
  { videoId: "v6vBRmjLMn4", title: "Worthy Partaking of Communion - 1 Corinthians 11:27-34" },
];

export default function FirstCorinthians11GuidePage() {
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
            1 Corinthians 11 &mdash; Do This in Remembrance of Me
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The Lord&rsquo;s Supper &mdash; Paul corrects a divided Corinthian church and transmits the institution of the table at which Christ&rsquo;s body and blood are proclaimed until he comes again.
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

        {currentSection && (
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

        <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {videoItems.map((v) => (
            <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId={v.videoId} title={v.title} />
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>You Proclaim the Lord's Death Until He Comes</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Corinthians 11 calls the church to recover the full weight of the Lord&rsquo;s Supper &mdash; as the enacted memorial of Christ&rsquo;s atoning death, the seal of the new covenant in his blood, the visible proclamation of the gospel to a watching world, and the foretaste of the banquet he will share with his people when he comes again. To eat this meal rightly is to be formed into the community his death was meant to create.
          </p>
        </div>
      </main>
    </div>
  );
}
