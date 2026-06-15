"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Before Pilate and Herod",
  "The Road to Golgotha",
  "Father Forgive Them",
  "Today You Will Be with Me",
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
    heading: "Overview of Luke 23",
    reference: "Luke 23:1&ndash;56",
    paragraphs: [
      "Luke 23 is the account of the crucifixion of Jesus Christ &mdash; the day that stands at the center of human history and the center of Luke&rsquo;s entire Gospel narrative. In this single chapter Jesus is brought before Pilate, sent to Herod, returned to Pilate, condemned to death, led to Golgotha, nailed to the cross, mocked by rulers and soldiers and one of the criminals crucified beside him, and finally breathes his last as the curtain of the temple is torn in two. He is then buried in the tomb of a righteous man from Arimathea, and the women who have followed him from Galilee watch where he is laid before going to prepare spices for his body.",
      "Luke&rsquo;s account of the passion is distinguished from the other Gospels by its particular emphases. Luke alone records the scene with Herod Antipas &mdash; the tetrarch who had long wished to see Jesus and who, disappointed that he performs no sign, joins his soldiers in mocking him and sending him back to Pilate in elegant clothing. Luke alone records the words of Jesus to the weeping women of Jerusalem on the road to the cross. Luke alone gives us the full exchange with both criminals crucified beside him, including the extraordinary promise to the penitent thief: &ldquo;Today you will be with me in paradise&rdquo; (23:43). And Luke alone records the prayer from the cross: &ldquo;Father, forgive them, for they know not what they do&rdquo; (23:34).",
      "The political dimension of Luke 23 is also distinctive. Luke records three explicit declarations of Jesus&rsquo; innocence: Pilate says three times that he finds no guilt in him (23:4, 14, 22), Herod sends him back without finding cause for death, and the centurion who watches Jesus die declares, &ldquo;Certainly this man was innocent&rdquo; (23:47). This triple testimony of innocence is not accidental. Luke is writing as a careful historian and a sophisticated theologian, and he wants his readers &mdash; including Theophilus and the wider Greco-Roman world &mdash; to understand that Jesus was not executed for any crime; he died as the innocent one in the place of the guilty.",
      "The crucifixion narrative reaches its theological climax in the three sayings of Jesus from the cross that Luke records. The prayer for forgiveness (23:34) reveals the character of the one being crucified: he intercedes for those who are killing him. The promise to the penitent thief (23:43) demonstrates that the cross is already accomplishing its saving purpose even as it is happening. And the final surrender to the Father &mdash; &ldquo;Father, into your hands I commit my spirit&rdquo; (23:46) &mdash; frames the death of Jesus not as a defeat but as a deliberate act of trust and self-offering to the God who raised him.",
      "Luke 23 closes with the burial account and the detail that the women who had come with Jesus from Galilee followed Joseph to the tomb and saw where the body was laid. They return to prepare spices and ointments, and they rest on the Sabbath according to the commandment. This quiet ending &mdash; the faithful women, the prepared spices, the observed Sabbath &mdash; is the turning point between the cross and the resurrection, and it leaves the reader suspended between grief and anticipation in exactly the way Luke intends.",
    ],
  },
  {
    id: "Before Pilate and Herod",
    heading: "Jesus Before Pilate and Herod",
    reference: "Luke 23:1&ndash;25",
    paragraphs: [
      "The whole assembly of the Sanhedrin rises and brings Jesus to Pilate, and the charges they bring are carefully chosen to appeal to Roman political concerns: &ldquo;We found this man misleading our nation and forbidding us to give tribute to Caesar, and saying that he himself is Christ, a king&rdquo; (23:2). These charges are largely fabrications &mdash; Jesus had told them to render to Caesar what is Caesar&rsquo;s, and his kingship was never the political-military project they imply &mdash; but they are calculated to make Pilate see Jesus as a dangerous rabble-rouser rather than a theological dispute for Jewish courts. The religious authorities are weaponizing Roman imperial anxiety in the service of their own agenda.",
      "Pilate&rsquo;s interrogation is brief: &ldquo;Are you the King of the Jews?&rdquo; Jesus answers, &ldquo;You have said so&rdquo; (23:3). Pilate then delivers his first verdict: &ldquo;I find no guilt in this man&rdquo; (23:4). This is the first of the three declarations of innocence that structure Luke&rsquo;s passion account. Pilate, who has no investment in protecting Jesus and every political reason to give the crowd what they want, cannot find a legal basis for execution. The crowd responds by intensifying their accusation: he stirs up the people, they say, from Galilee to Jerusalem. At the word &ldquo;Galilee&rdquo; Pilate finds his escape route: he sends Jesus to Herod Antipas, the tetrarch of Galilee, who happens to be in Jerusalem for the feast.",
      "Luke&rsquo;s account of the encounter with Herod is unique and theologically rich. Herod is very glad to see Jesus, for he has long desired to do so, &ldquo;because he had heard about him, and he was hoping to see some sign done by him&rdquo; (23:8). Herod&rsquo;s desire is the desire of the spectator, the consumer of religious entertainment &mdash; he wants a performance, a miracle on demand. He questioned Jesus at length, but Jesus made no answer. The silence of Jesus before Herod is one of the most striking moments in the passion narrative: the one who had spoken with authority in every synagogue and on every hillside in Galilee has nothing to say to the man who had killed John the Baptist and who wants only a show.",
      "Herod and his soldiers treat Jesus with contempt, mock him, array him in splendid clothing &mdash; a royal robe that parodies his kingship &mdash; and send him back to Pilate. The detail that Herod and Pilate &ldquo;became friends with each other that very day, for before this they had been at enmity with each other&rdquo; (23:12) is a sardonic observation. The death of Jesus creates a strange communion of guilt between two men who had nothing else in common. Luke sees in this the fulfillment of Psalm 2:2, which he will later quote in Acts 4:25&ndash;26: the kings of the earth set themselves against the Lord and against his Anointed.",
      "Pilate assembles the chief priests and rulers and people and delivers his second verdict: he and Herod have both examined Jesus and found him guilty of none of the charges. He proposes to release him after a flogging. But the crowd calls for Barabbas &mdash; a man who had been imprisoned for insurrection and murder, the very crimes of which Jesus is falsely accused &mdash; and demands that Jesus be crucified. Pilate, who has twice declared Jesus innocent, a third time asks what evil Jesus has done and says he has found no guilt deserving death. The crowd&rsquo;s demand grows louder, and Pilate &ldquo;decided that their demand should be granted&rdquo; (23:24).",
      "The release of Barabbas and the condemnation of Jesus is one of the starkest illustrations in the Gospels of what theologians call penal substitution: the innocent one takes the place of the guilty, the condemned one goes free while the righteous one is condemned. Barabbas did not know, as he walked out of prison that morning, that the man who would hang on the cross in his place was doing so for the sins of the whole world. But the logic is inescapable: Jesus dies in the place of sinners, bearing the judgment they deserve, so that they might go free. The release of Barabbas is the passion narrative in miniature.",
    ],
  },
  {
    id: "The Road to Golgotha",
    heading: "The Road to Golgotha",
    reference: "Luke 23:26&ndash;33",
    paragraphs: [
      "As the soldiers lead Jesus away, they seize a man named Simon of Cyrene, who is coming in from the country, and lay on him the cross to carry behind Jesus (23:26). Simon of Cyrene is a historically specific person &mdash; Mark identifies him as the father of Alexander and Rufus (Mark 15:21), which suggests he was known in the early Christian community. But Luke&rsquo;s particular interest in Simon is theological. Luke has used the language of cross-bearing throughout his Gospel: &ldquo;If anyone would come after me, let him deny himself and take up his cross daily and follow me&rdquo; (Luke 9:23). Simon of Cyrene enacts this discipleship quite literally, carrying the cross of Jesus on the road to Golgotha.",
      "A great multitude of people follows Jesus, and among them women who mourn and lament for him. Jesus turns to them and says, &ldquo;Daughters of Jerusalem, do not weep for me, but weep for yourselves and for your children&rdquo; (23:28). This is a prophetic word of judgment: Jesus foresees the destruction of Jerusalem that will come in AD 70, when the Roman armies of Titus will lay siege to the city and the horrors of starvation and slaughter will be beyond imagining. &ldquo;For behold, the days are coming when they will say, &lsquo;Blessed are the barren and the wombs that never bore&rsquo;&rdquo; (23:29). The reversal of the beatitude for mothers is a measure of the depth of the coming desolation.",
      "The saying about the green wood and the dry wood (23:31) is a proverbial statement: &ldquo;For if they do these things when the wood is green, what will happen when it is dry?&rdquo; If such terrible things happen to Jesus &mdash; who is innocent, righteous, the living Son of God, the green tree &mdash; what will happen to the nation that rejects him when the judgment of God falls? The dry wood of apostate Jerusalem will burn far more fiercely than the green wood of the innocent Christ. The road to Golgotha is, for Luke, simultaneously the path of the passion and a prophetic journey through the coming consequences of rejection.",
      "Two criminals are led out with Jesus to be executed. They arrive at a place called The Skull &mdash; Golgotha in Aramaic, Calvaria in Latin, from which the English word Calvary derives. There they crucify Jesus, and the two criminals with him, one on the right and one on the left. The detail that Jesus is crucified between two criminals is the fulfillment of Isaiah 53:12: &ldquo;He was numbered with the transgressors.&rdquo; The one who came to seek and save the lost (Luke 19:10) dies in the company of the lost, sharing their degradation and their mode of death, bearing in his own body the full weight of what human sin has brought upon the world.",
      "The crucifixion itself Luke describes with characteristic restraint: &ldquo;And when they came to the place that is called The Skull, there they crucified him&rdquo; (23:33). Luke does not linger over the physical horror of crucifixion, as some later accounts do. The restraint is not indifference; it is the narrative equivalent of the silence of Jesus before Herod. The death of Christ is not presented as a spectacle of suffering but as an act of self-giving love, and Luke&rsquo;s theological attention is focused not on the nails and the blood but on the words &mdash; the prayers, the promises, the declarations &mdash; that interpret what is happening in this act of execution.",
      "The physical location of Golgotha &mdash; outside the city walls, at a public place of execution visible from the roads &mdash; is itself significant. The writer of Hebrews will later say that Jesus &ldquo;suffered outside the gate in order to sanctify the people through his own blood&rdquo; (Hebrews 13:12), drawing on the Levitical practice of burning the sin offering outside the camp. Jesus dies outside the holy city, bearing the shame that the unclean must bear, so that those who were outside &mdash; sinners, Gentiles, the ritually excluded &mdash; might be brought inside the covenant of grace. The geography of the crucifixion is the geography of grace.",
    ],
  },
  {
    id: "Father Forgive Them",
    heading: "Father, Forgive Them",
    reference: "Luke 23:34&ndash;43",
    paragraphs: [
      "The first word from the cross in Luke&rsquo;s account is among the most extraordinary utterances in all of human literature: &ldquo;Father, forgive them, for they know not what they do&rdquo; (23:34). Jesus does not curse, does not reproach, does not prophesy doom upon those who are nailing him to the wood. He prays &mdash; and he prays for them. The prayer is addressed to the Father, from whose will he has never departed, and it is a prayer of intercession for the very people who are inflicting this suffering upon him. This is the love of God made visible in the most extreme circumstances imaginable: the Son of God prays for the forgiveness of the men who are executing him.",
      "The phrase &ldquo;they know not what they do&rdquo; is not an excuse that diminishes guilt; it is a pastoral observation about the nature of the sin being committed. The soldiers who drive the nails do not know that they are crucifying the Son of God; the religious leaders who have engineered this execution do not know, in the fullest sense, what they are undoing; even the crowd who shouts &ldquo;crucify him&rdquo; does not comprehend the magnitude of what it is demanding. Peter will later say to the crowd in Jerusalem, &ldquo;I know that you acted in ignorance, as did also your rulers&rdquo; (Acts 3:17). The ignorance does not excuse the sin, but it opens the door of repentance &mdash; and this is why the prayer for forgiveness is not merely a beautiful sentiment but an effective intercession that the book of Acts will show being answered.",
      "The soldiers cast lots for Jesus&rsquo; garments &mdash; the fulfillment of Psalm 22:18 &mdash; while the people stand watching. The rulers scoff: &ldquo;He saved others; let him save himself, if he is the Christ of God, his Chosen One!&rdquo; (23:35). The soldiers join in the mockery, offering sour wine and saying, &ldquo;If you are the King of the Jews, save yourself!&rdquo; An inscription has been placed above him: This is the King of the Jews &mdash; written by Pilate, intended as mockery of both Jesus and the Jewish people, but functioning in Luke&rsquo;s narrative as an inadvertent proclamation of truth. The title placed over the cross in mockery is the title that the resurrection will vindicate.",
      "The irony of the mockers is profound and deliberate. They say &ldquo;he saved others; let him save himself&rdquo; &mdash; but the reason he cannot save himself is precisely that he is saving others. The logic of the cross is the logic of substitutionary self-giving: if he comes down from the cross, no one is saved; if he stays on the cross, many are saved. The mockers have accidentally stated the paradox of the atonement. The Christ who could call down twelve legions of angels (Matthew 26:53) and who will raise Lazarus from the dead and still storms with a word stays on the cross not because he cannot leave but because he will not &mdash; because the love that brought him from heaven will not let him leave before the work is finished.",
      "One of the criminals hanging beside Jesus joins in the mockery: &ldquo;Are you not the Christ? Save yourself and us!&rdquo; (23:39). But the other criminal rebukes him: &ldquo;Do you not fear God, since you are under the same sentence of condemnation? And we indeed justly, for we are receiving the due reward of our deeds; but this man has done nothing wrong&rdquo; (23:40&ndash;41). This is the fourth declaration of Jesus&rsquo; innocence in Luke 23 &mdash; and it comes from the most unlikely source: a dying criminal on a cross beside him. In the midst of his own agony, this man perceives what the chief priests and scribes and Herod and the crowd have all missed: that the man dying beside him is innocent, and more than innocent.",
      "The penitent criminal turns to Jesus and says, &ldquo;Jesus, remember me when you come into your kingdom&rdquo; (23:42). The request is humble and precise: he does not ask to be spared from death, does not ask for comfort, does not protest his treatment. He simply asks to be remembered by the one whose kingdom he somehow believes is real, despite all appearances to the contrary. He sees a king in the man beside him on the cross. And Jesus answers with the most lavish grace imaginable: &ldquo;Truly, I say to you, today you will be with me in paradise&rdquo; (23:43). The word &ldquo;today&rdquo; is Jesus&rsquo; signature word in Luke&rsquo;s Gospel &mdash; the word of salvation arriving in the present moment. The cross is already doing its work.",
    ],
  },
  {
    id: "Today You Will Be with Me",
    heading: "Today You Will Be with Me in Paradise",
    reference: "Luke 23:44&ndash;56",
    paragraphs: [
      "At the sixth hour &mdash; midday &mdash; darkness comes over the whole land until the ninth hour (23:44). The darkness at noon on the day of the crucifixion is one of the most theologically laden details in all four Gospel accounts. In the Hebrew prophets, darkness is a sign of divine judgment and cosmic disturbance: &ldquo;On that day,&rdquo; says the Lord through Amos, &ldquo;I will make the sun go down at noon and darken the earth in broad daylight&rdquo; (Amos 8:9). The darkness at Golgotha is the visible sign that something of cosmic significance is happening &mdash; that the judgment of God is being enacted upon the one who hangs on the cross, and that the creation itself participates in the weight of this moment.",
      "While the land is dark, the curtain of the temple is torn in two (23:45). In Matthew and Mark the tearing comes after Jesus dies; Luke places it during the darkness, before the final breath. The curtain &mdash; the great veil that separated the Holy Place from the Most Holy Place, the place where the high priest went once a year with the blood of atonement &mdash; is torn from top to bottom by invisible hands. The meaning is unmistakable: the barrier between God and humanity is removed. The restricted access to the divine presence, maintained through the elaborate sacrificial system of the old covenant, is abolished in the death of Jesus. The way into the Most Holy Place is open for all, because the true High Priest has offered the true and final sacrifice.",
      "Jesus cries out with a loud voice: &ldquo;Father, into your hands I commit my spirit&rdquo; (23:46). The words are from Psalm 31:5, the psalm of a righteous sufferer who trusts God in the midst of deadly enemies. Jesus dies with a psalm of trust on his lips. He does not merely expire; he actively surrenders his spirit into the hands of his Father. The death of Jesus is a voluntary act of self-giving love, not a defeat snatched from him by his enemies. &ldquo;Having said this he breathed his last&rdquo; &mdash; and the word translated &ldquo;breathed his last&rdquo; is the Greek exepneusen, which could also be translated &ldquo;he gave up his spirit,&rdquo; reinforcing the active, intentional quality of his death.",
      "When the centurion sees what has taken place, he praises God and says, &ldquo;Certainly this man was innocent!&rdquo; (23:47). The centurion &mdash; a Roman soldier, a Gentile, a man with no stake in Jewish theology &mdash; becomes the fifth and final witness in Luke 23 to the innocence of Jesus. Luke&rsquo;s careful accumulation of testimony from Pilate, Herod, Barabbas&rsquo;s release, the penitent criminal, and now the centurion amounts to an overwhelming verdict: the man who was crucified as a criminal was, in the eyes of everyone who examined him without predetermined hostility, innocent of any offense. The cross is not the execution of a guilty man; it is the voluntary suffering of an innocent one for the sake of the guilty.",
      "The crowds who gather to witness the spectacle return beating their breasts &mdash; the gesture of grief and self-reproach (23:48). All his acquaintances and the women who had followed him from Galilee stand at a distance watching (23:49). The restraint of Luke&rsquo;s language here is moving: &ldquo;all his acquaintances&rdquo; &mdash; people who had walked with him, listened to him, perhaps been healed by him &mdash; watch from a distance as he dies, unable to help, unable to leave. The faithful women are specifically noted because they will be the witnesses to the burial, and they will be the first witnesses to the empty tomb. Their faithful watching in the darkness of Friday afternoon is the prelude to their faithful running in the morning light of Sunday.",
      "Joseph of Arimathea &mdash; a member of the council, a good and righteous man who had not consented to the council&rsquo;s decision to execute Jesus, and who was looking for the kingdom of God &mdash; goes to Pilate and asks for the body of Jesus. Pilate grants the request. Joseph takes the body down, wraps it in a linen shroud, and lays it in a rock-cut tomb where no one had ever yet been laid (23:53). The women who had come with Jesus from Galilee follow and see the tomb and how his body is laid. They return and prepare spices and ointments, and on the Sabbath they rest according to the commandment. The Sabbath rest of Luke 23 is the darkest Sabbath in history &mdash; and the silence in which the great reversal of Easter is being prepared.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Luke 23 Today",
    reference: "Luke 23 &mdash; For the Life of the Church",
    paragraphs: [
      "Luke 23 confronts the church with the question that stands at the heart of the Christian faith: why did Jesus die? The chapter&rsquo;s insistent declaration of innocence &mdash; three times from Pilate, once from Herod&rsquo;s implicit verdict, once from the penitent criminal, once from the centurion &mdash; makes clear that Jesus did not die because he was guilty of any crime. He died because he chose to bear the guilt of those who are. The release of Barabbas enacts in microcosm what the cross accomplishes in history: the innocent one takes the place of the guilty so that the guilty may go free. This substitutionary logic is not a later theological overlay on the story; it is written into the narrative by Luke himself.",
      "The prayer &ldquo;Father, forgive them, for they know not what they do&rdquo; has been the model for Christian forgiveness in extremity ever since Stephen prayed it at his stoning (Acts 7:60) and a long succession of martyrs prayed it before their executioners. The prayer works because it is not wishful thinking but effective intercession: the one praying it is the one whose death makes forgiveness possible. When Jesus asks the Father to forgive those who are killing him, he is simultaneously making the sacrifice that will secure that forgiveness. The cross and the prayer for forgiveness from the cross are one act. And the church that prays this prayer in its own moments of suffering is participating in the ministry of the one who prayed it first.",
      "The promise to the penitent thief &mdash; &ldquo;Today you will be with me in paradise&rdquo; &mdash; is one of the most pastorally important verses in the entire New Testament for the ministry of the church. It establishes several things of permanent importance: that salvation is available to the very end of life, that it requires nothing more and nothing less than a repentant turn toward Jesus and a request to be remembered by him, and that the moment of death ushers the believer immediately into the presence of Christ. The thief brings nothing to Jesus &mdash; no sacraments received, no good works accumulated, no years of discipleship behind him. He brings only his guilt and his faith, and he receives paradise. This is grace in its most unadorned form.",
      "The tearing of the curtain of the temple at the moment of Jesus&rsquo; death carries enormous implications for the worship life of the church. The old covenant system of restricted access &mdash; the sacrificial rituals, the graduated spaces of holiness, the annual entry of the high priest alone into the Most Holy Place &mdash; is not merely superseded; it is fulfilled and abolished in the sacrifice of Jesus. The writer of Hebrews draws out the implications at length (Hebrews 9&ndash;10): we now have confidence to enter the Most Holy Place by the blood of Jesus, by the new and living way he opened for us through the curtain, that is, through his flesh. Christian worship is bold access to the Father through the Son, not timid approach through a mediating priesthood.",
      "Luke 23 also calls the church to attention in the matter of political power and justice. Pilate knew Jesus was innocent. He said so, three times, before condemning him. He had the power to release him and the legal authority to protect him. He chose instead to deliver an innocent man to death rather than risk a political disturbance. The church in every era faces the temptation to collude with unjust power for the sake of peace and stability &mdash; to keep the crowd from rioting, to preserve institutional relationships, to protect the organization at the cost of the individual. Pilate&rsquo;s failure is the failure of every Christian who knows what is right and chooses the politically convenient path instead.",
      "The faithful women of Luke 23 &mdash; who follow Jesus all the way to the cross, who watch from a distance, who follow Joseph to the tomb, who see where the body is laid, who prepare spices, who rest on the Sabbath, and who will be first at the empty tomb &mdash; are models of a particular form of discipleship that the church badly needs: the discipleship of faithful presence in the darkness. Not every moment of Christian witness is a moment of triumph. Some moments require us simply to stay &mdash; to stand at a distance if we cannot stand closer, to watch when we cannot act, to prepare what we can prepare and wait for what we cannot see yet. The women who kept faith on the darkest Sabbath in history were given the joy of the first Easter morning. Faithful presence in the dark is never wasted.",
    ],
  },
];

const videoItems = [
  { videoId: "XIb_dCIxzr0", title: "BibleProject - Overview: Luke 10-24" },
  { videoId: "G-2e9mMf7E8", title: "The Crucifixion of Jesus - Luke 23 Study" },
  { videoId: "WNp1bMFIIh0", title: "Father Forgive Them - Words from the Cross" },
  { videoId: "r4GBKqFq3NQ", title: "Today You Will Be with Me in Paradise - Luke 23:43" },
];

export default function Luke23GuidePage() {
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
            Luke 23 &mdash; The Crucifixion of Jesus Christ
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jesus stands before Pilate &mdash; three times declared innocent &mdash; and is sent to Herod, who mocks him. Barabbas is released. At Golgotha: &ldquo;Father, forgive them, for they know not what they do.&rdquo; To the penitent thief: &ldquo;Today you will be with me in paradise.&rdquo; The curtain of the temple tears. &ldquo;Father, into your hands I commit my spirit&rdquo; &mdash; and Jesus breathes his last.
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
              Deepen your study of Luke 23 through these video teachings on the trial before Pilate and Herod, the crucifixion at Golgotha, and the final words of Jesus from the cross.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Father, Into Your Hands I Commit My Spirit</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Luke 23 is the chapter where love goes to its uttermost limit. Jesus is declared innocent by every human authority that examines him &mdash; and is crucified nonetheless in the place of the guilty. From the cross he prays for his executioners, promises paradise to a dying thief, and surrenders his spirit into the hands of the Father. The curtain tears, the centurion testifies, and the faithful women keep watch. The cross is not the end of the story; it is the door through which the resurrection enters the world.
          </p>
        </div>
      </main>
    </div>
  );
}
