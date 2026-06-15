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
  "Gethsemane",
  "The Betrayal",
  "Before the Sanhedrin",
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
    heading: "Overview of Matthew 26",
    reference: "Matthew 26:1&ndash;75",
    paragraphs: [
      "Matthew 26 is the great turning point of the entire Gospel &mdash; the chapter in which Jesus moves from his final public teaching to the private intimacy of the upper room, from the garden of prayer to the courtyard of the high priest, and from the kiss of a friend to the crowing of a rooster. In a single night the Son of God institutes the Lord&rsquo;s Supper, wrestles with the cup of divine judgment in Gethsemane, is arrested by the very crowd he could have dispersed with a word, and stands before the most powerful religious court in Israel. Every scene in this chapter illuminates who Jesus is, what his death means, and what it costs to follow him.",
      "The chapter opens with Jesus announcing plainly that in two days he will be delivered up to be crucified (26:2). This is not a prediction that catches him by surprise; it is a sovereign declaration. While Jesus speaks these words, the chief priests and elders are gathering in the palace of Caiaphas the high priest, plotting to arrest and kill him. The contrast Matthew draws is deliberate: those who imagine they are orchestrating the destruction of Jesus are, in fact, fulfilling the precise timetable he has just announced. The powers of this age move against the Son of God and accomplish the very purposes of God without knowing it.",
      "The anointing at Bethany (vv. 6&ndash;13) interrupts the plot and provides a moment of extravagant beauty before the darkness descends. A woman pours a flask of very expensive ointment over Jesus&rsquo; head, and the disciples are indignant at the waste. Jesus defends her: &ldquo;She has done a beautiful thing to me&rdquo; (26:10). He identifies the anointing as preparation for his burial, and makes the remarkable promise that wherever the gospel is proclaimed in the whole world, what she has done will be told in memory of her. Against the backdrop of treachery and opposition, this woman&rsquo;s act of devotion shines as a model of true discipleship.",
      "Judas immediately follows the scene in Bethany by going to the chief priests and agreeing to betray Jesus for thirty pieces of silver. The juxtaposition is Matthew&rsquo;s most arresting editorial contrast in the entire chapter: one disciple anoints Jesus for burial in extravagant love; another arranges his capture for thirty pieces of silver. Love and betrayal, devotion and greed, sit side by side in the inner circle of Jesus&rsquo; companions. From this moment on, Judas looks for an opportunity to hand Jesus over, and the machinery of the passion is set in motion.",
      "The rest of the chapter unfolds with terrible inevitability. The Passover meal becomes the Lord&rsquo;s Supper. Gethsemane becomes the place of decision. The arrival of Judas with swords and clubs becomes the hour of betrayal. The hearing before Caiaphas becomes the moment of false witness and true confession. The courtyard of the high priest becomes the place where Peter&rsquo;s courage fails and he goes out weeping bitterly. Matthew 26 is a chapter about the cost of redemption and the sovereign love that pays it.",
    ],
  },
  {
    id: "The Last Supper",
    heading: "The Institution of the Lord&rsquo;s Supper",
    reference: "Matthew 26:17&ndash;30",
    paragraphs: [
      "On the first day of Unleavened Bread the disciples ask Jesus where they should prepare the Passover, and he sends them into the city with precise instructions that reveal his foreknowledge of what awaits: a man will meet them, and the teacher says, &ldquo;My time is at hand; I will keep the Passover at your house with my disciples&rdquo; (26:18). The phrase &ldquo;my time is at hand&rdquo; sets the tone for the entire evening. Jesus is not a victim of circumstances; he is a priest who has chosen the hour of his own sacrifice, and the Passover meal is the ritual context he has selected for announcing what his death means.",
      "As they recline at table, Jesus makes the first announcement that will haunt the meal: &ldquo;Truly I say to you, one of you will betray me&rdquo; (26:21). The disciples are deeply distressed and begin to ask, each one, &ldquo;Is it I, Lord?&rdquo; &mdash; the question itself a remarkable combination of self-doubt and trust. Even Judas asks, &ldquo;Is it I, Rabbi?&rdquo; &mdash; and receives the terrifying confirmation: &ldquo;You have said so&rdquo; (26:25). Jesus does not shield Judas from the weight of what he is about to do; but neither does he expose him before the others. The mercy and the solemnity of the moment are held in perfect tension.",
      "Then, in verses 26&ndash;29, Jesus institutes the Eucharist in language of absolute economy and staggering weight. Taking bread, he blesses it, breaks it, and gives it to the disciples, saying, &ldquo;Take, eat; this is my body&rdquo; (26:26). Then he takes the cup, gives thanks, gives it to them, and says, &ldquo;Drink of it, all of you, for this is my blood of the covenant, which is poured out for many for the forgiveness of sins&rdquo; (26:27&ndash;28). Every word carries a world of theological meaning. The phrase &ldquo;blood of the covenant&rdquo; echoes Exodus 24:8, where Moses sprinkled blood on the people to ratify the Sinai covenant; Jesus is announcing that a new covenant is being sealed, not with the blood of animals, but with his own.",
      "The phrase &ldquo;poured out for many for the forgiveness of sins&rdquo; carries the sacrificial logic of Isaiah 53, where the Servant of the Lord bears the iniquity of many and makes intercession for transgressors. Jesus is the true Servant, the Passover Lamb, the covenant sacrifice &mdash; all of these Old Testament streams of meaning flowing together in a cup shared at a table in an upper room in Jerusalem. The disciples do not yet understand what they are receiving; the full meaning of the cup will only become clear on the other side of the resurrection. But the words have been spoken, and they will echo through every subsequent celebration of the Lord&rsquo;s Supper in the history of the church.",
      "Jesus then adds a remarkable word of anticipation: &ldquo;I tell you I will not drink again of this fruit of the vine until that day when I drink it new with you in my Father&rsquo;s kingdom&rdquo; (26:29). The Lord&rsquo;s Supper is not only a memorial of a past event; it is an anticipation of a future feast. Every celebration of the Eucharist holds together the memory of what Jesus did at the cross and the hope of what he will do at the consummation &mdash; the great marriage supper of the Lamb, when he will drink the cup new with his people in the Father&rsquo;s kingdom. The church that eats and drinks at his table lives between these two horizons, sustained by the presence of the risen Lord.",
      "The supper ends with a hymn &mdash; almost certainly one of the Hallel Psalms (Psalms 115&ndash;118) traditionally sung at the Passover &mdash; and then Jesus and his disciples go out to the Mount of Olives. The transition from the warmth of the upper room to the cold darkness of the garden is one of the most affecting movements in the entire Gospel. The one who has just given himself in bread and cup now goes out to pray through the agony of what he has promised to bear. The meal and the garden belong together: you cannot receive the cup of the new covenant without understanding something of the cup from which Jesus recoils &mdash; and then drinks &mdash; in Gethsemane.",
    ],
  },
  {
    id: "Gethsemane",
    heading: "The Garden of Gethsemane",
    reference: "Matthew 26:36&ndash;46",
    paragraphs: [
      "Jesus comes with his disciples to a place called Gethsemane and tells them to sit while he goes and prays. He takes with him Peter and the two sons of Zebedee &mdash; the same three disciples who witnessed the transfiguration &mdash; and begins to be sorrowful and troubled. He says to them, &ldquo;My soul is very sorrowful, even to death; remain here, and watch with me&rdquo; (26:38). The language echoes Psalm 42:6, where the psalmist cries, &ldquo;My soul is cast down within me.&rdquo; Jesus enters the garden as the true Israelite who prays the psalms of lament in their deepest register, bearing in his own soul the full weight of the human condition before God.",
      "Going a little farther, Jesus falls on his face and prays: &ldquo;My Father, if it be possible, let this cup pass from me; nevertheless, not as I will, but as you will&rdquo; (26:39). This is the most important prayer in the Gospel of Matthew &mdash; perhaps in the entire New Testament. The address &ldquo;My Father&rdquo; places the prayer within the intimacy of the Son&rsquo;s eternal relationship with the Father, a relationship of perfect love and trust. The petition &ldquo;let this cup pass from me&rdquo; is an authentic expression of Jesus&rsquo; human will, which genuinely recoils from what is coming. There is no Stoic suppression of desire here; Jesus brings his full humanity before the Father.",
      "What is &ldquo;this cup&rdquo;? In the Hebrew prophets, the cup is a recurring image for the outpouring of divine judgment upon sinners &mdash; the cup of wrath, the cup of staggering, the cup of horror (Isaiah 51:17, Jeremiah 25:15, Ezekiel 23:33). The cup that Jesus asks to have removed is not primarily the physical suffering of crucifixion, however terrible that was. It is the far greater horror of being &ldquo;made sin&rdquo; (2 Corinthians 5:21) and bearing, in the place of sinners, the full weight of the divine wrath against human rebellion. The sinless Son of God faces the prospect of being forsaken by the Father whose love has been his eternal home. This is what fills the cup. This is what Jesus&rsquo; human nature recoils from &mdash; and then, in perfect obedience, takes.",
      "The submission &ldquo;not as I will, but as you will&rdquo; is the decisive word of the entire Gethsemane narrative. In the garden of Eden, Adam was presented with a choice between his own will and the will of God, and he chose his own. In the garden of Gethsemane, the second Adam is presented with the same choice and chooses the will of the Father. Where Adam&rsquo;s disobedience brought sin and death into the world, Jesus&rsquo; obedience will bring righteousness and life. The reversal of the fall begins not at the cross but in this garden, in this prayer, in this submission &mdash; &ldquo;not as I will, but as you will.&rdquo;",
      "Jesus returns to find the three disciples asleep and says to Peter, &ldquo;So, could you not watch with me one hour? Watch and pray that you may not enter into temptation. The spirit indeed is willing, but the flesh is weak&rdquo; (26:40&ndash;41). The gentle rebuke to Peter &mdash; the man who had just boasted that he would die rather than deny Jesus &mdash; is also a pastoral word for every disciple. The willingness of the spirit is real; the weakness of the flesh is also real; and the remedy Jesus prescribes is prayer. The disciples who fail to pray in Gethsemane will be overwhelmed when the hour of trial comes; the Lord who prays through the garden will be ready to face the cross.",
      "Jesus prays a second and a third time with essentially the same petition and the same submission, and each time returns to find the disciples sleeping. After the third prayer he says, &ldquo;Sleep and take your rest later on. See, the hour is at hand, and the Son of Man is betrayed into the hands of sinners. Rise, let us be going; see, my betrayer is at hand&rdquo; (26:45&ndash;46). The Gethsemane prayer has been answered: not by the removal of the cup, but by the formation in Jesus of the perfect readiness to drink it. He rises from prayer a man whose will is fully aligned with the Father&rsquo;s will, ready to meet Judas and the crowd and the cross with sovereign composure.",
    ],
  },
  {
    id: "The Betrayal",
    heading: "The Betrayal, Arrest, and Flight",
    reference: "Matthew 26:47&ndash;56",
    paragraphs: [
      "While Jesus is still speaking, Judas arrives &mdash; and Matthew&rsquo;s description is precise in its horror: &ldquo;Judas came, one of the twelve, and with him a great crowd with swords and clubs, from the chief priests and the elders of the people&rdquo; (26:47). &ldquo;One of the twelve&rdquo; &mdash; Matthew does not let the reader forget who Judas is and what the betrayal means. This is not a stranger, not an enemy who crossed the lines; this is a man who has shared the road with Jesus for three years, eaten with him, heard every sermon, seen every miracle, and received the bread and cup just hours before. The intimacy of the betrayal is part of its terror.",
      "The sign Judas gives the crowd is a kiss: &ldquo;The one I will kiss is the man; seize him&rdquo; (26:48). In the ancient world the kiss was the most intimate greeting of friendship and affection &mdash; pupils kissed their rabbi, friends kissed in greeting, children kissed their fathers. Judas weaponizes this intimacy, using the sign of love as the signal for arrest. Jesus meets him with devastating courtesy: &ldquo;Friend, do what you came to do&rdquo; (26:50). The word &ldquo;friend&rdquo; &mdash; the Greek hetairos, a word that carries overtones of companionship &mdash; is Jesus&rsquo; last direct address to Judas, and it is almost unbearably gracious. Even now, even here, Jesus does not curse or condemn; he simply names what is happening and receives it.",
      "One of those with Jesus draws a sword and strikes the servant of the high priest, cutting off his ear. Matthew does not identify the swordsman, though John&rsquo;s Gospel tells us it is Peter. Jesus rebukes him: &ldquo;Put your sword back into its place. For all who take the sword will perish by the sword&rdquo; (26:52). The rebuke is not merely a counsel of pacifism; it is a statement about the nature of Jesus&rsquo; kingship. He is not inaugurating his kingdom through military victory but through voluntary self-surrender. Then Jesus asks: &ldquo;Do you think that I cannot appeal to my Father, and he will at once send me more than twelve legions of angels? But how then should the Scriptures be fulfilled, that it must be so?&rdquo; (26:53&ndash;54). Jesus could stop this at any moment; he chooses not to because the Scriptures must be fulfilled.",
      "Jesus then addresses the crowd directly: &ldquo;Have you come out as against a robber, with swords and clubs to capture me? Day after day I sat in the temple teaching, and you did not seize me&rdquo; (26:55). The question is not a plea for mercy; it is an indictment of the cowardice and secrecy that mark the arrest. The religious authorities who have orchestrated this midnight seizure could have taken Jesus publicly in the temple at any time. They chose darkness and swords and the cover of night &mdash; the instruments of those who love darkness rather than light (John 3:19). Jesus has exposed the character of the opposition even as he submits to it.",
      "Then all the disciples leave him and flee (26:56). The desertion is complete. The men who had promised to die with him have scattered into the night. Jesus is left entirely alone &mdash; not because his companions are especially cowardly, but because the atonement is work that he must do alone. No one else can carry the cup. No one else can bear the judgment. The disciples&rsquo; flight is the dark underside of the gospel: the Savior must go where none of them can follow, bearing what none of them can bear, so that they &mdash; and all who come after them &mdash; need never face that judgment alone.",
      "Matthew adds: &ldquo;But all this has taken place that the Scriptures of the prophets might be fulfilled&rdquo; (26:56). This is the interpretive key to everything that happens in the passion narrative. The betrayal, the arrest, the desertion &mdash; none of it is outside the sovereign purposes of God. The darkness that gathers around Jesus in the garden is not the defeat of the divine plan; it is the instrument of it. The God who inspired the prophets to write of a servant who would be handed over to sinners is the same God who now watches as every word of those prophecies is fulfilled in the person of his Son.",
    ],
  },
  {
    id: "Before the Sanhedrin",
    heading: "Before the Sanhedrin: Trial and Peter's Denial",
    reference: "Matthew 26:57&ndash;75",
    paragraphs: [
      "Those who have seized Jesus lead him to Caiaphas the high priest, where the scribes and elders have already assembled. Matthew notes that Peter is following at a distance and goes into the courtyard of the high priest to see the outcome &mdash; establishing two simultaneous scenes that will unfold in counterpoint: the illegal night trial inside the house, and Peter&rsquo;s night of failure in the courtyard. Both scenes are about the identity of Jesus; both end in a kind of proclamation. Inside, Jesus declares who he is before the highest religious court in Israel; outside, Peter denies that he knows him at all.",
      "The Sanhedrin seeks false testimony against Jesus in order to put him to death, but they find none adequate &mdash; though many false witnesses come forward. Finally two witnesses allege that Jesus said he could destroy the Temple of God and rebuild it in three days. This is a distorted version of a real saying (cf. John 2:19), but even this testimony does not cohere. Caiaphas the high priest stands and demands: &ldquo;Have you no answer to make? What is it that these men testify against you?&rdquo; (26:62). Jesus remains silent &mdash; the silence of the one who will not dignify false witnesses with a defense, and whose silence fulfills the image of Isaiah 53:7: &ldquo;Like a sheep that before its shearers is silent, so he opened not his mouth.&rdquo;",
      "But when Caiaphas adjures him by the living God to tell them whether he is the Christ, the Son of God, Jesus speaks with absolute clarity: &ldquo;You have said so. But I tell you, from now on you will see the Son of Man seated at the right hand of Power and coming on the clouds of heaven&rdquo; (26:64). The response is remarkable on multiple levels. Jesus accepts the title &ldquo;Christ, Son of God&rdquo; without qualification. He then applies to himself the language of Daniel 7:13&ndash;14, where the Son of Man comes before the Ancient of Days and is given dominion and glory and a kingdom. The court that is about to condemn him will, he declares, see him enthroned at the right hand of God &mdash; not as the condemned but as the exalted Lord.",
      "Caiaphas tears his robes and declares it blasphemy. The verdict is unanimous: he deserves death. The Sanhedrin then does what religious authorities and political leaders have done to the righteous throughout Israel&rsquo;s history &mdash; they spit in his face, strike him, and mock him: &ldquo;Prophesy to us, you Christ! Who is it that struck you?&rdquo; (26:68). The irony is devastating: while they mock the prophet, he is fulfilling prophecy with each blow. The one they strike is the very one whose word created the universe and whose judgment they will one day stand before.",
      "Meanwhile, in the courtyard below, Peter is recognized three times as a companion of Jesus &mdash; first by a servant girl, then by another, then by bystanders who identify his Galilean accent. Three times he denies it with increasing vehemence, the third time invoking a curse on himself and swearing, &ldquo;I do not know the man&rdquo; (26:74). At that moment the rooster crows, and Peter remembers the word of Jesus: &ldquo;Before the rooster crows, you will deny me three times.&rdquo; He goes out and weeps bitterly. The Greek word for &ldquo;bitterly&rdquo; &mdash; pikros &mdash; suggests not polite tears but the convulsive, heaving grief of a man who has just watched himself do the very thing he swore he could never do.",
      "The trial before Caiaphas and the denial of Peter together form one of the most theologically rich sequences in Matthew&rsquo;s Gospel. Jesus, standing alone before the highest court in Israel, makes the boldest claim any human being can make: that he is the Son of Man who will come on the clouds of heaven. Peter, standing in a courtyard by a charcoal fire, cannot even own his acquaintance with the man from Galilee. The contrast between the Lord&rsquo;s confession and the disciple&rsquo;s denial is total &mdash; and yet the gospel that will emerge from the resurrection is a gospel that includes both the boldness of the Lord and the restoration of the disciple who wept bitterly and was brought back.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Matthew 26 Today",
    reference: "Matthew 26 &mdash; For the Life of the Church",
    paragraphs: [
      "Matthew 26 confronts every generation of the church with the question of what we do with the cup. The disciples at the Last Supper received the cup of the new covenant in Jesus&rsquo; blood &mdash; the cup that proclaims the forgiveness of sins and the dawn of the kingdom of God. But Jesus had already asked the sons of Zebedee, &ldquo;Are you able to drink the cup that I am to drink?&rdquo; (Matthew 20:22). The cup that the church receives in the Lord&rsquo;s Supper is the same cup that Jesus drank in Gethsemane and on the cross. To receive it faithfully is to accept what it announces: that the life of the disciple is a life of voluntary self-surrender shaped by the pattern of Christ&rsquo;s own self-giving.",
      "The Lord&rsquo;s Supper instituted in Matthew 26 stands at the center of Christian worship precisely because it holds together so much of the gospel. Every time the church breaks bread and shares the cup, it is doing what Jesus commanded at that Passover table &mdash; remembering his body given and his blood poured out, proclaiming his death until he comes (1 Corinthians 11:26), and anticipating the day when he will drink it new with his people in the Father&rsquo;s kingdom (26:29). The Supper is simultaneously backward-looking memorial, present-tense proclamation, and forward-looking hope. A church that takes the Supper seriously will be a church with a robust theology of cross, presence, and eschatology.",
      "The Gethsemane prayer &mdash; &ldquo;not as I will, but as you will&rdquo; &mdash; is the model for all Christian prayer in the face of suffering. Jesus does not pretend that the cup is welcome; he brings his genuine desire to be spared before the Father. But he holds that desire loosely enough to subordinate it fully to the Father&rsquo;s will. This is the shape of mature Christian prayer: honest about what we want, humble about what God has determined, and trusting that the Father&rsquo;s will &mdash; even when it involves a cup we would prefer not to drink &mdash; is the will of love. The church that learns to pray as Jesus prayed in Gethsemane will be a church that can face persecution, loss, illness, and death without being destroyed by them.",
      "The arrest narrative raises a perennial temptation: the temptation to defend the kingdom of God with the weapons of this world. Peter&rsquo;s sword is the perennial symbol of the church&rsquo;s temptation to advance the cause of Christ through political power, coercion, or violence. Jesus&rsquo; rebuke is firm: &ldquo;Put your sword back into its place&rdquo; (26:52). The kingdom he is inaugurating does not advance through the logic of force but through the logic of the cross &mdash; voluntary self-giving, bearing injustice, trusting the Father to vindicate in his own way and time. The church that picks up the sword in defense of Christ betrays the same misunderstanding that Peter displayed in the garden.",
      "Peter&rsquo;s denial is a pastoral word of both warning and hope. The warning: boasting about our loyalty to Christ in the face of cultural pressure or personal cost is no guarantee that the loyalty will hold when the test actually comes. The disciples who said &ldquo;Even if I must die with you, I will not deny you&rdquo; (26:35) were sincere &mdash; and they all fled and denied. The hope: bitter weeping is the beginning, not the end, of the story. Peter&rsquo;s tears in the courtyard are the first movement of the repentance that the risen Jesus will meet on the shore of Galilee (John 21). The grace that restores a man who has denied his Lord three times under oath is a grace with no bottom; and it is the grace in which every failing disciple may hope.",
      "Matthew 26 ultimately calls the church to the same confession that Jesus made before Caiaphas: that the crucified Jesus is the Son of Man who sits at the right hand of Power and who will come on the clouds of heaven. The court that condemned him saw nothing but a blasphemer. The eyes of faith see the enthroned Lord whose suffering and death purchased the forgiveness of sins and whose coming will be the end of every pretension of earthly power. To live between the cross and the coming is to live inside the story that Matthew 26 tells &mdash; receiving the cup with gratitude, praying &ldquo;not my will, but yours,&rdquo; and confessing before every tribunal, however hostile, that Jesus is Lord.",
    ],
  },
];

const videoItems = [
  { videoId: "3Dv4-n6OYGI", title: "BibleProject - Overview: Matthew 14-28" },
  { videoId: "S9NMwZEd9xg", title: "The Last Supper Explained - Matthew 26" },
  { videoId: "HmQIxwVpMvI", title: "Gethsemane - The Prayer That Changed Everything" },
  { videoId: "UPFjPaUBsPQ", title: "The Trial of Jesus Before Caiaphas - Matthew 26" },
];

export default function Matthew26GuidePage() {
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
            Matthew 26 &mdash; The Last Supper, Gethsemane, and the Arrest of Jesus
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jesus institutes the Lord&rsquo;s Supper &mdash; &ldquo;This is my body&hellip; this is my blood of the covenant, poured out for many for the forgiveness of sins.&rdquo; In Gethsemane he prays, &ldquo;Not as I will, but as you will.&rdquo; Judas betrays him with a kiss. Jesus declares before Caiaphas: &ldquo;From now on you will see the Son of Man seated at the right hand of Power.&rdquo; Peter denies him three times and weeps bitterly.
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
              Deepen your study of Matthew 26 through these video teachings on the Last Supper, Gethsemane, the betrayal by Judas, and the trial of Jesus before Caiaphas.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Not As I Will, But As You Will</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Matthew 26 is the hinge of the entire Gospel &mdash; the chapter where the ministry of teaching gives way to the ministry of self-giving, and where the Son of God moves with purposeful love from the table of the new covenant to the garden of decision and on to the cross. The prayer of Gethsemane &mdash; &ldquo;not as I will, but as you will&rdquo; &mdash; is the decision that makes atonement possible, and it calls every disciple to the same posture: receiving the cup with gratitude, praying with honesty and submission, and confessing before every hostile tribunal that Jesus is Lord and is coming again.
          </p>
        </div>
      </main>
    </div>
  );
}
