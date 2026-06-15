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
  "The Hour Has Come",
  "Washing Feet",
  "Servant Leadership",
  "The Betrayal Revealed",
  "The New Commandment",
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
    heading: "Overview of John 13",
    reference: "John 13:1&ndash;38",
    paragraphs: [
      "John 13 marks the great turning point of the Fourth Gospel &mdash; the transition from Jesus&rsquo;s public ministry to his private teaching of the Twelve in the shadow of the cross. The chapter opens with a quiet but earth-shaking sentence: &ldquo;Now before the Feast of the Passover, when Jesus knew that his hour had come to depart out of this world to the Father, having loved his own who were in the world, he loved them to the end&rdquo; (13:1). Everything that follows is saturated with that love &mdash; the love that is about to express itself in the ultimate act of self-giving.",
      "The chapter falls into three distinct movements. The first is the foot-washing (vv. 1&ndash;17), in which Jesus takes off his outer garment, ties a towel around his waist, and washes his disciples&rsquo; feet &mdash; the task of the lowest household slave. When Peter protests, Jesus tells him that unless he is washed by Jesus he has no part in him. When Peter over-corrects and asks for a full bath, Jesus clarifies: he who has been bathed needs only to have his feet washed. The action is simultaneously a demonstration of servant love and a parable of the cleansing that Jesus will accomplish in his death.",
      "The second movement (vv. 18&ndash;30) is the revelation of the betrayer. Jesus is troubled in spirit and declares that one of those eating with him will betray him. The disciples look at one another, bewildered. At Peter&rsquo;s prompting, the beloved disciple leans close and asks who it is. Jesus tells him: the one to whom I give this morsel of bread. He dips the bread and gives it to Judas Iscariot &mdash; and immediately Satan enters Judas. Jesus says to him, &ldquo;What you are going to do, do quickly,&rdquo; and Judas goes out into the night.",
      "The third movement (vv. 31&ndash;38) opens with Judas&rsquo;s departure and Jesus&rsquo;s first use of the great title &ldquo;glorified&rdquo; in this new context. Now that the mechanism of betrayal is in motion, the hour of glorification has come. Jesus gives his disciples a new commandment: &ldquo;Love one another: just as I have loved you, you also are to love one another. By this all people will know that you are my disciples, if you have love for one another.&rdquo; The chapter ends with the painful irony of Peter&rsquo;s declaration that he will lay down his life for Jesus, and Jesus&rsquo;s quiet response: before the rooster crows, you will deny me three times.",
    ],
  },
  {
    id: "The Hour Has Come",
    heading: "The Hour Has Come",
    reference: "John 13:1&ndash;3",
    paragraphs: [
      "The opening verses of John 13 are among the most theologically concentrated in the New Testament. &ldquo;Now before the Feast of the Passover, when Jesus knew that his hour had come to depart out of this world to the Father, having loved his own who were in the world, he loved them to the end&rdquo; (13:1). Three elements stand together in this sentence: the Passover context, the arrival of the hour, and the love that drives everything. To understand John 13 you must sit with this opening for a long time.",
      "The Passover context is not incidental. The entire Gospel of John has been building toward the Passover, with Jesus identified as &ldquo;the Lamb of God who takes away the sin of the world&rdquo; from the very first chapter (1:29). At the previous Passover Jesus had cleansed the Temple (2:13). At another Passover he had fed the five thousand and spoken of himself as the bread of life (6:4). Now the final Passover arrives, and Jesus knows that his hour has come. He is the Passover lamb. The feast celebrates the redemption of Israel from Egypt through the blood of a lamb; the true Passover lamb is about to be slain.",
      "Throughout John&rsquo;s Gospel, the &ldquo;hour&rdquo; of Jesus has been a recurring motif. At the wedding at Cana, &ldquo;his hour has not yet come&rdquo; (2:4). When his opponents try to arrest him, &ldquo;no one laid a hand on him, because his hour had not yet come&rdquo; (7:30; 8:20). But in John 12, after the Greeks come seeking Jesus, he says: &ldquo;The hour has come for the Son of Man to be glorified&rdquo; (12:23). Now, in chapter 13, Jesus &ldquo;knew that his hour had come.&rdquo; What had been deferred throughout the entire ministry has arrived.",
      "The description of the hour is remarkable: it is the hour &ldquo;to depart out of this world to the Father.&rdquo; John consistently frames the death of Jesus not as defeat but as a return journey, a departure, a going to the Father. The cross is not the end of the story but the means of transition &mdash; the way through which the Son goes back to the glory he had with the Father before the world existed. This framing transforms the passion narrative: what looks like humiliation and death is in John&rsquo;s telling a glorification, the lifting up of the Son of Man that draws all people to himself (12:32).",
      "The phrase &ldquo;having loved his own who were in the world, he loved them to the end&rdquo; is the thematic key to the entire upper room discourse that follows. &ldquo;To the end&rdquo; in Greek is &lsquo;eis telos&rsquo; &mdash; which can mean both &ldquo;to the uttermost&rdquo; and &ldquo;to the finish, to the completion.&rdquo; Jesus&rsquo;s love for his disciples will be demonstrated in its full and final depth in what follows: the foot-washing as a parable, the teaching of the upper room, the prayer of John 17, and above all the cross itself. The cross is the love of Jesus for his own expressed to the uttermost.",
      "Verse 3 adds another dimension: &ldquo;Jesus, knowing that the Father had given all things into his hands, and that he had come from God and was going back to God&hellip;&rdquo; The foot-washing is done by one who knows exactly who he is. He is not a servant who washes feet because he has no other option; he is the one to whom all authority in heaven and earth has been given, the one who came from God and is returning to God, and he chooses to take up the basin and towel. The humility is not from weakness; it is the free choice of infinite power.",
    ],
  },
  {
    id: "Washing Feet",
    heading: "Jesus Washes the Disciples' Feet",
    reference: "John 13:4&ndash;11",
    paragraphs: [
      "The act itself is described with deliberate and almost liturgical detail. Jesus &ldquo;rose from supper. He laid aside his outer garments, and taking a towel, tied it around his waist. Then he poured water into a basin and began to wash the disciples&rsquo; feet and to wipe them with the towel that was wrapped around him&rdquo; (13:4&ndash;5). John is careful to record that Jesus laid aside his garments &mdash; the Greek verb is the same used in 10:18 for laying down his life. The foot-washing is a parable in action of the cross: the one who will lay down his life lays aside his garments.",
      "In the ancient world, foot-washing was the task assigned to the lowest slave in the household. Rabbinic texts made clear that a Jewish disciple was not required to wash the feet of his teacher, even though he owed his teacher great honor and service &mdash; foot-washing was simply beneath the dignity of a free person in relationship to even the most respected human master. When Jesus, whom his disciples address as Teacher and Lord, takes up the basin and towel, he is not simply demonstrating humility in a general sense; he is performing the most socially lowly act available to him.",
      "Peter&rsquo;s reaction captures the disorientation of the moment. When Jesus comes to him, Peter says, &ldquo;Lord, do you wash my feet?&rdquo; (13:6). The pronoun order in Greek is emphatic: &ldquo;You &mdash; my feet &mdash; wash?&rdquo; The reversal is too much for Peter to accept. Jesus tells him, &ldquo;What I am doing you do not understand now, but afterward you will understand&rdquo; (13:7). This is a significant statement: the meaning of the foot-washing will only become clear on the far side of the cross and resurrection. Understanding follows the event; the disciples must first receive what they do not yet comprehend.",
      "Peter&rsquo;s refusal &mdash; &ldquo;You shall never wash my feet&rdquo; (13:8) &mdash; is met with a statement of absolute necessity: &ldquo;If I do not wash you, you have no share with me.&rdquo; The word &ldquo;share&rdquo; or &ldquo;part&rdquo; here &mdash; &lsquo;meros&rsquo; in Greek &mdash; is a participation in what belongs to Jesus, an inheritance of what he is and what he will accomplish. To refuse the washing is to refuse the relationship, to refuse what Jesus is doing on behalf of his disciples. Peter&rsquo;s noble-sounding refusal is actually a form of self-will that would cut him off from everything Jesus is about to do for him.",
      "Peter&rsquo;s characteristic over-correction is equally revealing: &ldquo;Lord, not my feet only but also my hands and my head!&rdquo; (13:9). Jesus&rsquo;s response distinguishes between two kinds of washing: the one who has bathed does not need to wash except for the feet, but is completely clean. The &ldquo;bath&rdquo; likely refers to the once-for-all cleansing of regeneration and forgiveness that comes through faith and baptism; the foot-washing represents the ongoing cleansing needed as the disciple moves through a dirty world. Jesus adds, &ldquo;And you are clean, but not every one of you&rdquo; &mdash; for he knew who was to betray him (13:10&ndash;11).",
    ],
  },
  {
    id: "Servant Leadership",
    heading: "The Example of Servant Leadership",
    reference: "John 13:12&ndash;17",
    paragraphs: [
      "When Jesus has finished washing their feet, he puts on his outer garments again and resumes his place at the table. Then he asks the question that turns the acted parable into explicit teaching: &ldquo;Do you understand what I have done to you?&rdquo; (13:12). He does not wait for an answer. He gives them the interpretive key: &ldquo;You call me Teacher and Lord, and you are right, for so I am.&rdquo; The titles are affirmed &mdash; Jesus is not performing a false humility that denies who he is. He is the Teacher and the Lord, and precisely because he is the Teacher and the Lord, what follows has maximum force.",
      "&ldquo;If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another&rsquo;s feet&rdquo; (13:14). The argument is from the greater to the lesser. If the one with all authority stoops to this service, those who follow him have no ground to consider themselves above it. The logic is not merely rhetorical; it flows from the nature of the community that Jesus is forming. The community gathered around the servant Lord is itself to be a servant community, characterized by the kind of mutual, lowly service that the world&rsquo;s structures of honor and status do not recognize.",
      "Jesus describes what he has done as giving them &ldquo;an example&rdquo; (13:15) &mdash; the Greek word is &lsquo;hupodeigma,&rsquo; a pattern to be copied, a model to be followed. He has not simply performed a gracious act for their comfort; he has enacted a pattern that is to become the defining shape of the community&rsquo;s life. &ldquo;For I have given you an example, that you also should do just as I have done to you.&rdquo; The foot-washing is not a one-time event to be admired and commemorated; it is an ongoing vocation to be embodied in the way the disciples treat one another.",
      "The principle is then stated with two parallel formulations (13:16): &ldquo;Truly, truly, I say to you, a servant is not greater than his master, nor is a messenger greater than the one who sent him.&rdquo; Both the servant-master relationship and the messenger-sender relationship illustrate the same point: the one in the lower position does not transcend the one who stands above them. If the master washes feet, the servant must be willing to wash feet. If the one who sent the messenger humbled himself in service, the messenger cannot stand on dignity and refuse the same humility.",
      "Verse 17 closes the teaching with a beatitude: &ldquo;If you know these things, blessed are you if you do them.&rdquo; This is a characteristic movement in Jesus&rsquo;s teaching: knowledge is not an end in itself. To know that servant leadership is the pattern of the kingdom and to fail to practice it is not wisdom &mdash; it is a greater form of accountability. The blessing does not fall on those who have correctly understood the foot-washing and can explain its theology; it falls on those who wash feet. The knowledge of servant love must become the practice of servant love, or it is not yet the knowledge that Jesus intends.",
      "The servant leadership modeled in John 13 is not the world&rsquo;s idea of leadership dressed in religious language. The world&rsquo;s servant leaders often serve as a strategy for gaining influence, building loyalty, and securing power. What Jesus models here is different: it is service as an end in itself, flowing from the abundance of love and from security in the Father&rsquo;s commission. Because Jesus knows who he is (v. 3), he is free to serve in a way that requires no return and seeks no advantage. This freedom &mdash; rooted in identity, not in achievement &mdash; is the ground of genuine servant leadership.",
    ],
  },
  {
    id: "The Betrayal Revealed",
    heading: "The Betrayal Revealed",
    reference: "John 13:18&ndash;30",
    paragraphs: [
      "The shadow of betrayal has been present in John 13 from the very beginning &mdash; the narrator notes in verse 2 that &ldquo;the devil had already put it into the heart of Judas Iscariot, Simon&rsquo;s son, to betray him&rdquo; and in verse 11 that Jesus &ldquo;knew who was to betray him.&rdquo; Now Jesus makes the betrayal explicit. &ldquo;Truly, truly, I say to you, one of you will betray me&rdquo; (13:21). John tells us he was &ldquo;troubled in his spirit&rdquo; when he said it &mdash; the same word used in 11:33 at the tomb of Lazarus and in 12:27 when he contemplated the cross. The betrayal costs Jesus something.",
      "Jesus roots his prediction in Scripture: &ldquo;I am not speaking of all of you; I know whom I have chosen. But the Scripture will be fulfilled: &lsquo;He who ate my bread has lifted his heel against me&rsquo;&rdquo; (13:18). The quotation is from Psalm 41:9, a psalm of David about the betrayal of a trusted friend. Jesus applies it to Judas, not to suggest that Judas was a helpless instrument of prophecy, but to show that even this shattering betrayal by one of his closest companions falls within the scope of God&rsquo;s sovereign purposes and was foreseen in Scripture.",
      "The disciples are bewildered. &ldquo;The disciples looked at one another, uncertain of whom he spoke&rdquo; (13:22). The beloved disciple &mdash; almost certainly John, the son of Zebedee &mdash; is reclining at the table close to Jesus. Peter signals to him to ask who is meant. Leaning back against Jesus, the beloved disciple whispers, &ldquo;Lord, who is it?&rdquo; Jesus answers with a sign: &ldquo;It is he to whom I will give this morsel of bread when I have dipped it.&rdquo; He dips the bread and gives it to Judas Iscariot (13:26).",
      "The dipping of bread and the offering of the morsel to a guest was in the culture of the time an act of honor and hospitality, often a special mark of favor extended by the host to a guest. There is an extraordinary tenderness in this detail: even in this final moment, Jesus is extending a gesture of love and invitation to Judas, the one who will betray him. The offer is made; Judas must choose what to do with it. When Judas takes the morsel, John records the darkest line in the chapter: &ldquo;After he had taken the morsel, Satan entered into him&rdquo; (13:27).",
      "Jesus says to Judas, &ldquo;What you are going to do, do quickly&rdquo; (13:27). The other disciples do not understand what this means; some think Jesus is telling Judas to buy what is needed for the feast, or to give something to the poor (13:28&ndash;29). Then, in one of the starkest sentences in the New Testament: &ldquo;So, after receiving the morsel of bread, he immediately went out. And it was night&rdquo; (13:30). The darkness outside is more than meteorological. Judas steps out of the light of Jesus&rsquo;s presence into the night, and the act he is going to perform is the darkness itself.",
      "The theological interpretation of Judas in John&rsquo;s Gospel holds together what seems irreconcilable: genuine human choice and divine sovereignty. Judas is not simply a puppet; he is a man who has freely chosen to love money more than the one whose feet he might have had washed, who has opened himself to the devil through his own greed (12:6). Yet his action fulfills Scripture and serves, against his own intention, the purposes of God. Even the darkest act in human history &mdash; the betrayal of the Son of God &mdash; is somehow encompassed within the love that was loved to the end.",
    ],
  },
  {
    id: "The New Commandment",
    heading: "The New Commandment",
    reference: "John 13:31&ndash;38",
    paragraphs: [
      "The moment Judas leaves, Jesus speaks of glorification. &ldquo;Now is the Son of Man glorified, and God is glorified in him&rdquo; (13:31). The departure of Judas sets in motion the chain of events that will lead to the cross &mdash; and in John&rsquo;s Gospel the cross is the moment of glorification, the lifting up of the Son of Man that simultaneously reveals the love of God and accomplishes the redemption of the world. What the world sees as the death of an executed criminal is, in John&rsquo;s vision, the blazing forth of the divine glory.",
      "Jesus then prepares his disciples for his departure with words of gentle but painful directness: &ldquo;Little children, yet a little while I am with you. You will seek me, and just as I said to the Jews, so now I also say to you, &lsquo;Where I am going you cannot come&rsquo;&rdquo; (13:33). The term &ldquo;little children&rdquo; &mdash; &lsquo;teknia&rsquo; &mdash; appears here for the first time in John&rsquo;s Gospel. It is a word of profound tenderness, the word of a father to his young children, or a teacher in his final hours to those he loves most. The announcement of departure is wrapped in the word of love.",
      "It is in this context of departure and loss that Jesus gives what he calls a new commandment: &ldquo;A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another&rdquo; (13:34). The command to love one&rsquo;s neighbor is not new &mdash; it is as old as Leviticus 19:18. What is new is the standard: &ldquo;just as I have loved you.&rdquo; The love of Jesus for his disciples &mdash; the love that will be measured by the cross, the love that has just been enacted in the foot-washing, the love that chose them before they chose him &mdash; this is now the measure and model of how they are to love one another.",
      "The newness of the commandment lies also in what has just made it possible. It is only in the new covenant, through the gift of the Spirit and the transforming work of Christ, that human beings are enabled to love in this way. The old covenant commanded love of neighbor; the new covenant provides the power to love as Christ loved by grafting the believer into the life of the triune God. The commandment is not simply a higher standard; it is a new possibility grounded in a new reality.",
      "Jesus then gives the defining mark of his community: &ldquo;By this all people will know that you are my disciples, if you have love for one another&rdquo; (13:35). This is the identity marker of the new covenant people &mdash; not ethnic lineage, not ceremonial observance, not political power or institutional affiliation, but the quality of mutual love that characterizes life together. The watching world is to look at the community of Jesus&rsquo;s disciples and recognize in their love something that does not come from natural human solidarity, but from the love of the one who loved them first.",
      "The chapter ends with the poignant exchange between Jesus and Peter. &ldquo;Lord, where are you going?&rdquo; Peter asks. Jesus tells him he cannot follow now, but will follow later. Peter, confident in his own devotion, declares: &ldquo;Lord, why can I not follow you now? I will lay down my life for you&rdquo; (13:37). The word for &ldquo;lay down&rdquo; is the same word used in 10:11, 15, 17&ndash;18 for Jesus laying down his life as the good shepherd. Peter is making a claim that only Jesus can actually fulfill. Jesus&rsquo;s response is quiet and devastating: &ldquo;Will you lay down your life for me? Truly, truly, I say to you, the rooster will not crow till you have denied me three times&rdquo; (13:38). The new commandment is given to a community that will deny, scatter, and fail &mdash; and be loved and restored anyway.",
    ],
  },
];

const videoItems = [
  { videoId: "John13AbCdEfGh", title: "John 13 - The Foot Washing and the New Commandment - Bible Study" },
  { videoId: "John13IjKlMnOp", title: "Jesus Washes Feet - Servant Leadership in John 13 Explained" },
  { videoId: "John13QrStUvWx", title: "The Betrayal of Judas and the Hour of Glory - John 13" },
  { videoId: "John13YzAbCdEf", title: "Love One Another - The New Commandment of John 13 Deep Dive" },
];

export default function John13GuidePage() {
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
            John 13 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The Last Supper begins &mdash; Jesus knowing his hour had come to depart to the Father, takes off his outer garment and washes his disciples&rsquo; feet, reveals the one who will betray him, and gives his new commandment: love one another as I have loved you, and by this all will know you are my disciples.
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
              Deepen your study of John 13 through these video teachings on Jesus washing his disciples&rsquo; feet, the revelation of Judas as the betrayer, the servant leadership model for the church, and the new commandment to love one another as Christ has loved us.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Love One Another as I Have Loved You</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            John 13 sets before the church its most fundamental calling: to love one another with the kind of love that washes feet, that endures betrayal without ceasing to offer the bread, and that lays down its life for others. The new commandment is given to a community of ordinary, failing people &mdash; and the love that fulfills it is not generated from within but received from the one who loved them to the end.
          </p>
        </div>
      </main>
    </div>
  );
}
