"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Last Supper",
  "Servant Leadership",
  "Gethsemane",
  "Betrayal and Arrest",
  "Application",
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
    heading: "Overview of Luke 22",
    reference: "Luke 22:1&ndash;71",
    paragraphs: [
      "Luke 22 is one of the most theologically dense chapters in all four Gospels &mdash; a chapter in which Jesus moves from the intimate setting of the upper room to the anguish of Gethsemane, from betrayal by a friend to denial by his closest disciple, and from his arrest to the first of his trials. In the space of a single night, the Son of God embodies the full weight of his mission: he gives himself as the atoning sacrifice at the table, he prays with sweat like drops of blood in the garden, and he is handed over to those who will crucify him. Every scene in the chapter illuminates a different facet of who Jesus is and what his death accomplishes.",
      "The chapter opens under the shadow of conspiracy. The chief priests and scribes are looking for a way to put Jesus to death, and Satan enters Judas Iscariot, one of the Twelve, who goes to the religious authorities and agrees to betray his master for money. Luke is deliberately contrasting two realities: the human and demonic conspiracy to destroy Jesus, and the divine plan that has been unfolding since the beginning of Luke&rsquo;s Gospel. The betrayal does not catch God by surprise; Jesus will later say, &ldquo;the Son of Man goes as it has been determined&rdquo; (22:22). The darkness that gathers around Jesus in this chapter is, paradoxically, the instrument of his greatest saving work.",
      "The Last Supper dominates the first half of the chapter (vv. 14&ndash;38). Jesus reclines with his apostles and institutes the Eucharist &mdash; the cup of the new covenant in his blood, the bread of his body given for them. But even at this sacred table, a dispute breaks out about who is the greatest among the disciples. Jesus&rsquo; response &mdash; the greatest is as the youngest, the leader as the one who serves &mdash; is one of the most radical inversions of human hierarchy in the New Testament. He then warns of Satan&rsquo;s coming sifting, prays for Peter&rsquo;s restoration, and predicts Peter&rsquo;s denial.",
      "The garden of Gethsemane (vv. 39&ndash;46) is the chapter&rsquo;s theological heart. Jesus withdraws to pray, and the intensity of what he faces is conveyed by Luke in terms found nowhere else in the Gospels: an angel comes to strengthen him, and his sweat falls to the ground like drops of blood. His prayer &mdash; &ldquo;Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done&rdquo; &mdash; is the perfect expression of the obedient Son who takes the cup of divine judgment that human sin has filled. This is where the atonement is truly decided: in the garden, before a single nail is driven.",
      "The chapter&rsquo;s final movement covers the arrest (vv. 47&ndash;53), the denial of Peter (vv. 54&ndash;62), the mockery and beating by the guards (vv. 63&ndash;65), and the first hearing before the council (vv. 66&ndash;71). Luke gives particular attention to the moment Jesus turns and looks at Peter after his third denial, and Peter goes out and weeps bitterly. That look &mdash; the gaze of the one who had prayed for Peter even while predicting his failure &mdash; is one of the most affecting moments in the entire Gospel. Luke 22 is a chapter about the cost of salvation and the faithfulness of the Savior even when those closest to him fail.",
    ],
  },
  {
    id: "The Last Supper",
    heading: "The Last Supper",
    reference: "Luke 22:14&ndash;23",
    paragraphs: [
      "When the hour comes, Jesus reclines at table with his apostles and says, &ldquo;I have earnestly desired to eat this Passover with you before I suffer&rdquo; (22:15). The word &ldquo;earnestly desired&rdquo; translates a doubled construction in Greek that conveys intense longing &mdash; the kind of longing that holds together both the love of a friend for his companions and the purposeful resolve of the one who knows exactly what this meal means. Jesus has set his face toward Jerusalem (Luke 9:51); he has arrived; and now he takes his place at the Passover table knowing that he is about to become the true Passover Lamb.",
      "Jesus takes a cup first, gives thanks, and tells them to divide it among themselves, saying that he will not drink of the fruit of the vine until the kingdom of God comes (22:17&ndash;18). Luke&rsquo;s account of the Supper is distinctive in having two cup references &mdash; one before and one after the bread &mdash; which likely reflects the multiple cups of the Passover ritual. The first cup is the Passover cup; the second is the cup of the new covenant. The movement from old covenant to new, from the blood of the Passover lamb to the blood of Christ, is woven into the very structure of the meal.",
      "The institution of the Eucharist comes in verses 19&ndash;20, and it is among the most theologically loaded sentences in all of Scripture: &ldquo;This is my body, which is given for you. Do this in remembrance of me&rdquo; (22:19). And then, after the meal: &ldquo;This cup that is poured out for you is the new covenant in my blood&rdquo; (22:20). The language echoes both the Passover and the covenant-ratification ceremony of Exodus 24, where Moses sprinkled blood on the people and said, &ldquo;Behold the blood of the covenant.&rdquo; Jesus is inaugurating a new Exodus, a new covenant, sealed not with the blood of animals but with his own.",
      "The word &ldquo;remembrance&rdquo; &mdash; the Greek &lsquo;anamnesis&rsquo; &mdash; carries a richer meaning in the biblical world than simple mental recollection. In the Old Testament, when God &ldquo;remembers&rdquo; his covenant, he acts upon it. When Israel &ldquo;remembers&rdquo; the Exodus at Passover, they are not merely recalling a historical event; they are entering into its reality, receiving its benefits anew. When Jesus says &ldquo;Do this in remembrance of me,&rdquo; he is instituting a meal that will re-present his sacrifice to his people across every generation, a meal at which the crucified and risen Lord is truly present with those who gather in his name.",
      "Luke ends this section with the announcement of betrayal: &ldquo;But behold, the hand of him who betrays me is with me on the table&rdquo; (22:21). The betrayer is present at the sacred meal. He has received the body and blood of the Lord and will shortly sell that Lord for silver. The disciples begin to question one another as to which of them it could be. Luke does not name Judas here as the betrayer; the disclosure hangs over the table like a shadow, emphasizing that the Son of Man goes as it has been determined, while also underscoring the terrible freedom and terrible guilt of the one who chooses to become the instrument of that determination.",
      "The Last Supper thus contains within it the whole gospel in miniature: the love of God poured out for his people, the new covenant established in blood, the presence of betrayal and failure even among the closest companions, and the sovereign purpose of God working through all of it toward the redemption of the world. Every subsequent celebration of the Lord&rsquo;s Supper in the history of the church has been an echo of this night &mdash; an echo that carries the same promise: &ldquo;This is my body, given for you.&rdquo;",
    ],
  },
  {
    id: "Servant Leadership",
    heading: "Servant Leadership and the Dispute About Greatness",
    reference: "Luke 22:24&ndash;38",
    paragraphs: [
      "One of the most startling transitions in the Gospel of Luke occurs immediately after the institution of the Lord&rsquo;s Supper. Jesus has just spoken of his body given and his blood poured out; and the very next verse reads: &ldquo;A dispute also arose among them as to which of them was to be regarded as the greatest&rdquo; (22:24). The juxtaposition is almost unbearable in its irony. The Servant of all is about to give his life; his disciples are arguing about rank. The bread and cup of self-giving love have barely been received, and ambition is already rising at the table.",
      "The dispute is not an anomaly; Luke has recorded a similar argument earlier in his Gospel (9:46), and Mark places the argument about greatness in the context of the request by James and John for the seats of honor in the kingdom (Mark 10:35&ndash;45). Ambition for status is a recurring temptation in the inner circle of Jesus&rsquo; disciples, and Jesus&rsquo; answer to it is consistently the same: the kingdom of God operates on a completely different logic than the kingdoms of the world.",
      "Jesus frames the contrast sharply: &ldquo;The kings of the Gentiles exercise lordship over them, and those in authority over them are called benefactors. But not so with you. Rather, let the greatest among you become as the youngest, and the leader as one who serves&rdquo; (22:25&ndash;26). In the ancient world, powerful rulers sometimes adopted the title &ldquo;benefactor&rdquo; &mdash; a kind of philanthropic patron who dispensed favors from a position of superiority. Jesus repudiates this model entirely. In his kingdom, the direction of service runs from the top down, not from the bottom up: the leader serves, not to be seen serving, but because servanthood is the nature of the kingdom.",
      "Jesus then makes the contrast personal: &ldquo;For who is the greater, one who reclines at table or one who serves? Is it not the one who reclines at table? But I am among you as the one who serves&rdquo; (22:27). In a culture where the distinction between host and servant was absolute, Jesus&rsquo; self-identification as the servant among them would have been electrifying. He is not teaching an abstract principle; he is describing himself. The one who instituted the covenant meal and will shortly pour out his blood is the Servant &mdash; and every form of Christian leadership is, at its root, participation in his servanthood.",
      "Jesus then turns to a series of statements that hold together his disciples&rsquo; failure and his confidence in them. He acknowledges their loyalty in having stayed with him through his trials (22:28), and he promises them a kingdom and thrones of judgment (22:29&ndash;30). But then he turns to Simon Peter and warns him: &ldquo;Simon, Simon, behold, Satan demanded to have you, that he might sift you like wheat, but I have prayed for you that your faith may not fail. And when you have turned again, strengthen your brothers&rdquo; (22:31&ndash;32). The name &ldquo;Simon&rdquo; &mdash; used twice, a Hebrew idiom of urgent address &mdash; signals the gravity of the moment.",
      "Peter protests that he is ready to go with Jesus both to prison and to death. Jesus answers with one of the most solemn predictions in the Gospels: &ldquo;I tell you, Peter, the rooster will not crow this day, until you deny three times that you know me&rdquo; (22:34). The prediction is not a rebuke; it is a prophecy spoken with pastoral care. Jesus knows what Peter will do, and he has already prayed for his recovery. The denial is not the end of the story for Peter; &ldquo;when you have turned again&rdquo; presupposes a restoration that will come. This is the pastoral heart of Jesus &mdash; he sees our failures before we make them and intercedes for us through them.",
    ],
  },
  {
    id: "Gethsemane",
    heading: "The Garden of Gethsemane",
    reference: "Luke 22:39&ndash;46",
    paragraphs: [
      "Jesus comes out and goes to the Mount of Olives, as was his custom, and the disciples follow him. He tells them, &ldquo;Pray that you may not enter into temptation&rdquo; (22:40), and then withdraws about a stone&rsquo;s throw to pray alone. Luke&rsquo;s account of Gethsemane is briefer than Matthew&rsquo;s and Mark&rsquo;s but contains two details found nowhere else in the Gospels: an angel who comes to strengthen Jesus, and sweat that falls like drops of blood. These Lukan details emphasize the extreme anguish of what Jesus faces and the real humanity of the Son of God in the hour of his greatest trial.",
      "The prayer itself is the most important utterance in Luke 22: &ldquo;Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done&rdquo; (22:42). Every word carries theological weight. The address &ldquo;Father&rdquo; places the prayer within the intimacy of the Son&rsquo;s relationship with the Father &mdash; the same intimacy from which Jesus has prayed throughout Luke&rsquo;s Gospel. The petition &ldquo;remove this cup&rdquo; expresses the genuine human desire to avoid suffering and death; Jesus does not stoically suppress this desire but brings it openly before his Father. The submission &ldquo;not my will, but yours, be done&rdquo; is the decisive word of the entire prayer, and arguably of the entire passion narrative.",
      "What is &ldquo;this cup&rdquo; that Jesus asks to have removed? In the Old Testament, the cup is a frequent image for the experience of divine judgment poured out upon sinners &mdash; a cup of wrath, of reeling, of horror. The cup from which Jesus shrinks is not primarily the physical suffering of crucifixion, terrible as that was, but the far greater horror of bearing the judgment that human sin deserves. The sinless Son of God is about to be &ldquo;made sin&rdquo; (2 Corinthians 5:21) and to experience the forsakenness of the God-abandoned sinner (Psalm 22). This is what fills the cup. This is what Jesus, in his full and real humanity, recoils from &mdash; and then willingly takes.",
      "Luke alone records that &ldquo;there appeared to him an angel from heaven, strengthening him&rdquo; (22:43). The detail is striking: the Son of God, fully capable of commanding twelve legions of angels (Matthew 26:53), receives in his hour of anguish the ministry of a single angel who strengthens him for what is ahead. This is not weakness; it is the true humanity of Jesus, which requires sustenance, care, and support just as any human being does. God the Father sends an angel not to remove the cup but to strengthen his Son to drink it &mdash; a distinction that reveals that the Gethsemane prayer is answered in the deepest possible way, even as the specific petition is not granted.",
      "Luke then adds: &ldquo;And being in agony he prayed more earnestly; and his sweat became like great drops of blood falling down to the ground&rdquo; (22:44). The phrase &ldquo;like great drops of blood&rdquo; &mdash; whether referring to a medical condition called hematidrosis, where extreme stress causes capillaries near the sweat glands to rupture, or to a simile comparing the size of the sweat drops to blood drops &mdash; conveys the extreme intensity of Jesus&rsquo; anguish. He is not serene in the face of his suffering; he is in agony. The incarnation means that the eternal Son truly takes on human vulnerability, and in Gethsemane that vulnerability is fully exposed.",
      "Jesus rises from prayer and returns to the disciples to find them sleeping, &ldquo;exhausted from sorrow&rdquo; (22:45). He does not rebuke them harshly; he says simply, &ldquo;Why are you sleeping? Rise and pray that you may not enter into temptation&rdquo; (22:46). The irony is profound: while Jesus has been praying through anguish, the disciples have been sleeping. Jesus triumphed in the hour of temptation through prayer; the disciples will fail in the hour of temptation for want of prayer. Gethsemane is the decisive moment that separates the obedience of Jesus from the failure of his followers &mdash; and it is a moment that turns entirely on prayer.",
    ],
  },
  {
    id: "Betrayal and Arrest",
    heading: "Betrayal, Arrest, and Peter's Denial",
    reference: "Luke 22:47&ndash;62",
    paragraphs: [
      "While Jesus is still speaking, a crowd arrives led by Judas &mdash; &ldquo;one of the Twelve&rdquo; as Luke pointedly reminds his readers (22:47). The identification of Judas as one of the Twelve is not incidental; it underscores the depth of the betrayal. This is not an enemy who has crossed over from the opposition; this is a man who walked with Jesus, heard his teaching, saw his miracles, and ate his bread. When Judas approaches Jesus to kiss him, Jesus says, &ldquo;Judas, would you betray the Son of Man with a kiss?&rdquo; (22:48). The question does not demand an answer; it is a solemn accusation that names what Judas is doing: using the most intimate gesture of friendship as the signal for arrest.",
      "The disciples ask, &ldquo;Lord, shall we strike with the sword?&rdquo; (22:49), and before Jesus can answer, one of them &mdash; identified in John&rsquo;s Gospel as Peter &mdash; strikes the servant of the high priest and cuts off his right ear. Luke, the physician, is the only evangelist who records that Jesus immediately healed the servant&rsquo;s ear (22:51). This healing in the moment of arrest is characteristic of Luke&rsquo;s Jesus &mdash; even as he is being seized, he is healing. It is also a demonstration that Jesus is not a passive victim of events beyond his control; he is actively in charge of the scene, and his arrest is a voluntary self-surrender, not a forced capture.",
      "Jesus then addresses the chief priests, officers of the temple, and elders who have come out with swords and clubs: &ldquo;Have you come out as against a robber, with swords and clubs? When I was with you day after day in the temple, you did not lay hands on me. But this is your hour, and the power of darkness&rdquo; (22:52&ndash;53). The phrase &ldquo;the power of darkness&rdquo; is theologically precise. Jesus is not saying that the darkness has triumphed; he is saying that darkness has been granted its hour. The arrest of Jesus is not a defeat of the divine plan; it is the culmination of it. Even the opposition of Satan and the religious authorities is, in the mysterious sovereignty of God, serving the purpose of redemption.",
      "Peter follows at a distance as Jesus is led to the high priest&rsquo;s house, and sits among those who have kindled a fire in the courtyard. Three times he is identified as a follower of Jesus &mdash; by a servant girl, by another person, and by a third individual &mdash; and three times he denies it: &ldquo;Woman, I do not know him.&rdquo; &ldquo;Man, I am not.&rdquo; &ldquo;Man, I do not know what you are talking about&rdquo; (22:57, 58, 60). The denials escalate in force and finality. The rooster crows, and the prophecy of Jesus is fulfilled precisely.",
      "Luke&rsquo;s account of the denial includes a detail of shattering power: &ldquo;And the Lord turned and looked at Peter. And Peter remembered the saying of the Lord&rdquo; (22:61). In the midst of his own interrogation, Jesus turned and looked at Peter. The look is not described &mdash; its content is left to the reader&rsquo;s imagination &mdash; but it does everything. It is the look of the one who warned Peter, the one who prayed for him, the one who said &ldquo;when you have turned again.&rdquo; Under that gaze, Peter &ldquo;went out and wept bitterly&rdquo; (22:62). This is the beginning of Peter&rsquo;s turning &mdash; the grief that, as Paul will later say, produces repentance leading to salvation (2 Corinthians 7:10).",
      "The chapter closes with the first formal hearing before the council of elders, where Jesus is asked directly, &ldquo;If you are the Christ, tell us&rdquo; (22:67). Jesus&rsquo; response is carefully qualified &mdash; he knows they will not believe even if he tells them &mdash; but he makes the decisive claim: &ldquo;But from now on the Son of Man shall be seated at the right hand of the power of God&rdquo; (22:69). This is the claim that seals his condemnation in human eyes and proclaims his vindication in divine reality. The one they are about to execute will be enthroned. Luke 22 ends with the council determining that Jesus has condemned himself out of his own mouth, and with every human institution, one by one, preparing to destroy the one who is their Savior.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Luke 22 Today",
    reference: "Luke 22 &mdash; For the Life of the Church",
    paragraphs: [
      "Luke 22 confronts the contemporary church with the question that the disciples faced at the Last Supper: do we understand what kind of community we have been called into? The dispute about greatness at the very table of the Lord&rsquo;s Supper reveals how deeply the logic of worldly power had penetrated even the innermost circle of Jesus&rsquo; disciples. The church today is not immune to the same dynamic &mdash; the pursuit of status, recognition, and influence within the community of Christ. Jesus&rsquo; answer at the table is his answer still: the greatest among you shall be as the youngest; the leader shall be as the one who serves. Christian leadership is not a higher form of management; it is a deeper form of servanthood.",
      "The Lord&rsquo;s Supper instituted in Luke 22 stands at the center of the church&rsquo;s ongoing life. Every time the church gathers to break bread and share the cup, it is re-entering the scene in the upper room, receiving again the gift of the body given and blood poured out. The anamnesis &mdash; the remembrance &mdash; is not nostalgic; it is participatory. The risen Christ is present at his table, and every celebration of the Eucharist is simultaneously a remembrance of his sacrifice and an anticipation of the feast he will share with his people in the consummated kingdom (22:16, 18). To eat at the Lord&rsquo;s Table is to live between the first and second comings of Christ, sustained by his presence.",
      "The Gethsemane prayer &mdash; &ldquo;not my will, but yours, be done&rdquo; &mdash; is one of the most important patterns for Christian prayer in the New Testament. Jesus does not suppress his human desires in prayer; he brings them honestly before the Father. But he holds them loosely enough to subordinate them to the Father&rsquo;s will. This is the model of Christian prayer: honest about what we want, humble about what God has determined, and trusting that the Father&rsquo;s will is good even when it includes a cup we would rather not drink. The church that learns to pray as Jesus prayed in Gethsemane will be a church that can endure suffering and opposition without being destroyed by it.",
      "Peter&rsquo;s denial and restoration carry a pastoral word for the church about the nature of failure and the possibility of recovery. Peter&rsquo;s failure was not incidental &mdash; it was predicted, it was severe (three denials under oath, in the courtyard of the high priest, in the hours immediately before Jesus&rsquo; crucifixion), and it was bitter. And yet Jesus had already prayed for him: &ldquo;I have prayed for you that your faith may not fail&rdquo; (22:32). The faith does not fail, though the courage does. The man who denies his Lord weeps bitterly; the man who weeps bitterly is restored; the man who is restored becomes the shepherd of the church. Peter&rsquo;s story is the story of grace working through failure rather than around it.",
      "The warning that Satan demanded to sift the disciples like wheat (22:31) remains relevant for the church in every era. The enemy of the people of God does not give up; he seeks moments of crisis, isolation, and spiritual exhaustion to press his sifting work. The disciples failed in Gethsemane precisely because they were not praying. Jesus&rsquo; instruction &mdash; &ldquo;pray that you may not enter into temptation&rdquo; (22:40, 46) &mdash; is not a generalized platitude but a specific prescription for the hour of trial. The church that neglects prayer will not be ready for the moments when the sifting comes. The church that watches and prays, as Jesus commanded, will find that even in failure the interceding Christ holds them from ultimate apostasy.",
      "Luke 22 ultimately points to the sovereignty of God over the darkest night in human history. The betrayal of Judas, the denial of Peter, the corruption of the religious establishment, the arrest in the garden &mdash; all of these are gathered into the phrase &ldquo;the Son of Man goes as it has been determined&rdquo; (22:22). This is not fatalism; it is faith. The determination is the determination of God&rsquo;s love, which foresaw the depth of human sin and prepared, before the foundation of the world, a Lamb to take it away. Luke 22 calls the church to live inside that determination &mdash; to receive the cup with thanksgiving, to serve rather than to seek greatness, to pray rather than to sleep, and to trust that the one who prayed for Peter in his darkest hour is praying still.",
    ],
  },
];

const videoItems = [
  { videoId: "26z_KhwNdD8", title: "BibleProject - Overview: Luke 1-9" },
  { videoId: "0k4GbvZUPuo", title: "The Last Supper Explained - Luke 22 Study" },
  { videoId: "MFEbZfLG9oY", title: "Gethsemane - Not My Will But Yours Be Done" },
  { videoId: "T-ThDrEMJuI", title: "The Betrayal and Arrest of Jesus - Luke 22" },
];

export default function Luke22GuidePage() {
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
            Luke 22 &mdash; The Last Supper, Gethsemane, and the Arrest of Jesus
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jesus institutes the Lord&rsquo;s Supper &mdash; &ldquo;This is my body given for you&hellip; this cup is the new covenant in my blood.&rdquo; The disciples argue about greatness; Jesus inverts all hierarchy: &ldquo;the greatest among you shall be as the youngest.&rdquo; In Gethsemane he prays, &ldquo;Not my will, but yours, be done.&rdquo; Judas betrays him with a kiss. Peter denies him three times and weeps bitterly.
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
              Deepen your study of Luke 22 through these video teachings on the Last Supper, servant leadership, Gethsemane, and the betrayal and arrest of Jesus.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Not My Will, But Yours, Be Done</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Luke 22 is a chapter about the cost of salvation and the faithfulness of the Savior. From the upper room to the garden to the courtyard of the high priest, Jesus moves with purposeful love toward the cross &mdash; giving himself as the bread and cup of the new covenant, praying through agony in Gethsemane, and looking on the man who denied him with the eyes of one who had already prayed for his restoration. The one who serves is greater than the one who reclines; the one who prays through his darkest hour emerges ready to give his life for the world.
          </p>
        </div>
      </main>
    </div>
  );
}
