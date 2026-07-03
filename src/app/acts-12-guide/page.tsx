"use client";
import SectionGuideTemplate, { type SectionGuideData } from "@/components/SectionGuideTemplate";

const TABS = [
  "Overview",
  "James Martyred and Peter Arrested",
  "The Miraculous Escape",
  "Herod's Judgment and the Word's Growth",
  "Videos",
]

const sections = [
  {
    id: "Overview",
    heading: "Overview of Acts 12",
    reference: "Acts 12:1&ndash;25",
    paragraphs: [
      "Acts chapter 12 is one of the most dramatically compressed chapters in the entire New Testament. Within the space of twenty-five verses, Luke narrates the execution of an apostle, a miraculous prison escape, a moment of comic misunderstanding at a doorway, the sudden death of a king, and the continued expansion of the word of God &mdash; all interwoven with a theological argument that the sovereignty of God cannot be checked by the authority of any earthly ruler.",
      "The chapter opens in the shadow of state violence. Herod Agrippa I &mdash; grandson of Herod the Great, the same Herod who had massacred the infants in Bethlehem &mdash; has turned his persecution against the church. He kills James the son of Zebedee with the sword (v. 2). It is a single stark line, the death of one of the inner three of Jesus&rsquo; disciples reported without elaboration. Seeing that this pleased the Jewish leadership, Herod then arrests Peter, intending to bring him out after the Passover for a public trial. The church&rsquo;s response is to pray, fervently and persistently (v. 5).",
      "The miracle of Peter&rsquo;s escape is reported with extraordinary vividness and a quiet humor. An angel appears, the chains fall off, Peter follows the angel through the gates of the city, and Peter is slow to realize he is not dreaming (v. 9). He goes to the house of Mary, mother of John Mark, where many are gathered in prayer. Rhoda the servant girl hears his voice at the gate and, in her joy, forgets to open the door &mdash; running back to announce that Peter is standing outside while the praying believers tell her she must be out of her mind (v. 15).",
      "Herod&rsquo;s response to Peter&rsquo;s escape is to interrogate the guards and have them executed (v. 19). He then travels to Caesarea, where he makes a public address. The crowd responds to his oration with the declaration that this is &ldquo;the voice of a god, not of a man!&rdquo; (v. 22). Herod accepts this worship without deflecting it to God, and immediately an angel strikes him down. He dies eaten by worms &mdash; Luke&rsquo;s language evoking one of the most humiliating ends imaginable for a king who had styled himself as a deity.",
      "The chapter closes with a summary statement that functions as Luke&rsquo;s theological verdict on everything that has just happened: &ldquo;But the word of God continued to increase and spread&rdquo; (v. 24). Two kings of a kind have been on display in this chapter: Herod, who killed an apostle and imprisoned another, accepted divine honors, and died in worms; and the King of kings, whose word keeps growing, whose purposes keep advancing, and whose servants are released from prison by angels while the guards sleep. The contrast could not be more complete.",
      "James is killed but Peter is freed &mdash; a juxtaposition that the narrator does not resolve or explain. Both are faithful servants of the same Lord. Both prayers are offered for both. Yet one is martyred and one escapes. Acts chapter 12 does not offer a formula for who gets delivered and who does not. What it does insist on is that God&rsquo;s purposes are sovereign and that his word cannot be imprisoned, silenced, or destroyed by any human authority, however great its power may appear.",
    ],
  },
  {
    id: "James Martyred and Peter Arrested",
    heading: "The Martyrdom of James and Arrest of Peter",
    reference: "Acts 12:1&ndash;5",
    paragraphs: [
      "To understand the opening of Acts 12, it is important to understand who Herod Agrippa I was. He was the grandson of Herod the Great and the nephew of Herod Antipas, the tetrarch who had beheaded John the Baptist and mocked Jesus before his crucifixion. Agrippa had navigated the treacherous politics of the Roman court with skill, cultivating relationships with emperors Caligula and Claudius, and eventually receiving the rule of essentially the same territory his grandfather had governed. He was ambitious, politically shrewd, and deeply attentive to Jewish religious sensibilities.",
      "This last characteristic explains his persecution of the church. Agrippa was not a doctrinally motivated persecutor; he was a political operator who understood that pleasing the Jewish religious establishment in Jerusalem was essential to maintaining stability and his own standing. When he saw that killing James &ldquo;pleased the Jews&rdquo; (v. 3), he moved immediately to arrest Peter as well. The persecution of the church was, from Agrippa&rsquo;s perspective, good politics.",
      "James the son of Zebedee, brother of John, was one of the inner circle of Jesus&rsquo; disciples &mdash; one of the three who had witnessed the Transfiguration and accompanied Jesus into the Garden of Gethsemane. He becomes the first of the Twelve to be martyred. Luke records his death in a single clause: &ldquo;he killed James the brother of John with the sword&rdquo; (v. 2). There is no miracle of escape for James, no dramatic intervention, no elaboration. Just death.",
      "The timing is deliberate and loaded with meaning. Luke specifies that Herod arrested Peter during the &ldquo;days of Unleavened Bread&rdquo; (v. 3) &mdash; the Passover season. This echo of Jesus&rsquo; own arrest and trial at Passover is not incidental. Peter, like his Lord before him, is arrested by a Herod during the Passover season, with the religious establishment&rsquo;s approval, awaiting a public proceeding after the feast. Luke is inviting the reader to see the pattern: the powers of this age continue to rehearse the same drama, attempting to silence the witnesses of the one they crucified.",
      "Why was James killed but Peter spared? The question presses itself on every reader, and the text declines to answer it directly. Theologically, the most honest thing to say is that Acts 12 witnesses to the sovereign freedom of God, who works differently in different situations. James&rsquo; death is not a failure of faith or prayer; the church in Jerusalem was clearly a praying community (v. 5). His martyrdom advanced the gospel in ways that escape escapes do not, bearing witness to the willingness of Christ&rsquo;s servants to lay down their lives for the name of the Lord Jesus.",
      "The contrast between verse 4, where Peter is surrounded by four squads of soldiers amounting to sixteen guards, and verse 5, where the church is gathered in earnest prayer, is the chapter&rsquo;s central structural tension. The power of the state, with all its chains and soldiers and locked doors, is set against the power of prayer. Luke does not tell us that prayer was more powerful than the chains; he shows it &mdash; by narrating what happened next.",
    ],
  },
  {
    id: "The Miraculous Escape",
    heading: "Peter&rsquo;s Miraculous Escape",
    reference: "Acts 12:6&ndash;17",
    paragraphs: [
      "The night before Peter was to be brought out for trial, he was sleeping. This detail is extraordinary given the circumstances: chained between two soldiers, with sentries at the door, facing probable execution in the morning, Peter was asleep. Luke does not comment on this. He simply records it. But for any reader familiar with the Psalms &mdash; &ldquo;He grants sleep to those he loves&rdquo; (Psalm 127:2) &mdash; the sleeping Peter is himself a kind of testimony. He was at peace in the custody of a sovereignty greater than Herod&rsquo;s.",
      "The angel&rsquo;s appearance is accompanied by light flooding the cell. He strikes Peter on the side to wake him &mdash; the verb is the same used elsewhere for striking or hitting, conveying a deliberate physical prod rather than a gentle touch. &ldquo;Get up quickly,&rdquo; the angel says, and the chains fall off Peter&rsquo;s wrists (v. 7). The angel then issues a sequence of practical instructions: put on your sandals, wrap your cloak around you, follow me. There is something wonderfully mundane about an angelic messenger directing an apostle to put on his shoes.",
      "The escape unfolds in stages, each one miraculous. They pass the first guard post and the second. Then they come to the iron gate leading to the city, and it opens for them &ldquo;of its own accord&rdquo; (v. 10) &mdash; the Greek word &ldquo;automatos,&rdquo; which gives us the English &ldquo;automatic.&rdquo; The gate simply opens. They walk out and go down a street, and then the angel departs. The miracle is unhurried and systematic. Each obstacle is overcome in sequence, and then God&rsquo;s messenger leaves Peter to find his own way, having accomplished exactly what was needed.",
      "At this point Peter &ldquo;came to himself&rdquo; (v. 11). The phrase suggests a kind of coming back to full consciousness, perhaps from a dazed or dream-like state. He had been following the angel in a fog of half-wakefulness, half-wonder, not entirely sure whether this was a vision or reality. Now, standing in the street alone, the cold night air of Jerusalem clarifying his mind, he processes what has happened: &ldquo;Now I am sure that the Lord has sent his angel and rescued me from the hand of Herod and from all that the Jewish people were expecting.&rdquo;",
      "He makes his way to the house of Mary, the mother of John Mark, where a gathering of believers was praying. He knocks at the outer gate. A servant girl named Rhoda comes to answer it, and when she recognizes Peter&rsquo;s voice she is so overcome with joy that she does not open the gate but runs back inside to announce that Peter is standing outside (v. 14). The praying community&rsquo;s response is immediately skeptical: &ldquo;You are out of your mind!&rdquo; they tell her (v. 15). When she insists, they settle on a compromise: it must be his &ldquo;angel&rdquo; &mdash; perhaps referring to a guardian spirit believed to resemble its person.",
      "The comic irony is precise and deliberate. Here is a community earnestly praying for Peter&rsquo;s release, and when Peter shows up in answer to their prayers, they cannot believe it is him. They are praying with faith but not quite with expectation. Luke does not rebuke them; he simply records their surprise. Peter, still standing outside and knocking, is finally let in. He describes what has happened and gives instructions to tell &ldquo;James and the brothers&rdquo; &mdash; the first mention in Acts of James the Lord&rsquo;s brother as leader of the Jerusalem church. Then Peter departs to another place (v. 17), presumably for his own safety.",
    ],
  },
  {
    id: "Herod's Judgment and the Word's Growth",
    heading: "Herod&rsquo;s Judgment and the Word&rsquo;s Growth",
    reference: "Acts 12:18&ndash;25",
    paragraphs: [
      "When morning came, there was &ldquo;no little disturbance&rdquo; among the soldiers about what had become of Peter (v. 18). The understatement is characteristic of Luke&rsquo;s narrative style at its driest. Sixteen soldiers were responsible for one prisoner, and now the prisoner was gone. Herod interrogated the guards and ordered their execution. The soldiers paid with their lives for a miracle they could not have prevented. This detail is not morally comfortable, and Luke does not attempt to make it so. It underscores the brutal reality of the world into which the gospel was advancing.",
      "Herod then went down from Judea to Caesarea Maritima, the Roman administrative capital of the region. There he received a delegation from Tyre and Sidon, cities of Phoenicia that were dependent on Herod&rsquo;s territory for their food supply and who were therefore seeking his favor (v. 20). On an appointed day, Herod put on his royal robes and delivered a public address. The Jewish historian Josephus provides a parallel account of this scene (Antiquities 19.8.2), describing Herod wearing a garment of silver that caught the early morning sun and blazed brilliantly.",
      "The crowd&rsquo;s response was ecstatic: &ldquo;The voice of a god, not of a man!&rdquo; (v. 22). Josephus corroborates this, noting that Herod&rsquo;s flatterers cried out that he was more than mortal. Luke&rsquo;s account adds the critical detail that &ldquo;immediately&rdquo; &mdash; on the spot, in that very moment &mdash; an angel of the Lord struck him down &ldquo;because he did not give God the glory&rdquo; (v. 23). He was &ldquo;eaten by worms and breathed his last.&rdquo; Josephus too reports that Herod died a painful death five days after this event. The biblical text is not interested in the medical details; it is interested in the theological verdict: a man who claimed divine honor was destroyed by a divine agent.",
      "The contrast Luke draws between Herod&rsquo;s fate and the word&rsquo;s trajectory is one of the most pointed editorial moves in the book of Acts. Verse 23 records Herod&rsquo;s death: eaten by worms. Verse 24 immediately follows: &ldquo;But the word of God continued to increase and spread.&rdquo; The adversative &ldquo;but&rdquo; is the hinge of the chapter&rsquo;s entire theological argument. Empires die. Kings die. Persecutors die. The word of God does not die. It grows. It spreads. It outlasts every human power that attempts to stop it.",
      "This &ldquo;word of God continued to increase&rdquo; formula appears at key moments throughout Acts (6:7; 12:24; 19:20), functioning as a kind of progress report that punctuates the narrative and reminds the reader of what is really advancing in the story. While Luke is interested in the human drama of apostles, councils, shipwrecks, and courts, he repeatedly insists that the real protagonist of Acts is neither Peter nor Paul but the word of God moving through the world by the power of the Holy Spirit.",
      "The chapter closes with Barnabas and Saul returning from Jerusalem to Antioch, taking with them John Mark (v. 25). This brief verse is a narrative bridge that links the Jerusalem crisis of chapter 12 to the great missionary campaign that will launch in chapter 13. The same church that had been persecuted, the same city that had imprisoned Peter and killed James, was now sending out workers into the wider world. The kingdom of God does not merely survive opposition; it advances through it, and the closing line of Acts 12 is itself a small demonstration of that truth.",
    ],
  },
];

const videoItems = [
  { videoId: "kP9Nk3zFwLm", title: "Acts 12 - Herod, Peter, and the Sovereignty of God" },
  { videoId: "rB2nXqYvTsd", title: "Peter's Miraculous Escape from Prison - Acts 12 Study" },
  { videoId: "tQ8wJmPcVhE", title: "The Death of Herod Agrippa - Acts 12:20-23 Explained" },
  { videoId: "vN4xKpLcRmA", title: "The Word of God Increases - Acts 12 and the Mission of the Church" },
];

const data: SectionGuideData = {
  accent: "#0D9488",
  badge: `New Testament Study`,
  title: `Acts Chapter 12`,
  intro: `James is executed, Peter is miraculously freed from prison by an angel, and Herod Agrippa I is struck dead for accepting divine honor &mdash; while the word of God continues to increase and spread. Acts 12 is Luke&rsquo;s most concentrated argument that no earthly power can imprison, silence, or destroy the advancing kingdom of God.`,
  tabs: TABS as unknown as string[],
  sections,
  videos: videoItems,
  videoHeading: `Video Teaching`,
  videoIntro: `Go deeper into Acts 12 through these video teachings on Herod&rsquo;s persecution, Peter&rsquo;s escape, the sovereignty of God over earthly rulers, and the unstoppable advance of the gospel.`,
  calloutTitle: `The Word of God Cannot Be Chained`,
  calloutBody: `Acts 12 holds together the costly reality of martyrdom and the miracle of deliverance without resolving the tension between them. James dies; Peter walks free. What remains constant is not the mode of God&rsquo;s working but the certainty of his purpose: the word of God increases and spreads. Every Herod who rises against the church is outlasted by the gospel he sought to silence.`,
};

export default function Page() {
  return <SectionGuideTemplate data={data} />;
}
