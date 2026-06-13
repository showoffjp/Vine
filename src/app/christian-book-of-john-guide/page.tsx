"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Prologue",
  "The Seven Signs",
  "The I AM Sayings",
  "The Farewell Discourse",
  "Crucifixion and Resurrection",
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
    id: "The Prologue",
    heading: "The Prologue",
    reference: "John 1:1&ndash;18",
    paragraphs: [
      "No Gospel opens with more theological weight than the Gospel of John. &ldquo;In the beginning was the Word&rdquo; &mdash; the deliberate echo of Genesis 1:1 announces that what follows is nothing less than a new creation story. John does not begin with a birth narrative in Bethlehem or a genealogy tracing back to Abraham or Adam. He begins before time itself, in the eternal councils of God. The Logos &mdash; the Word &mdash; was already there, already in relation with God, already the agent through whom all things were made. The reader is invited to see Jesus not merely as a historical figure but as the one through whom the universe itself came into being.",
      "The Logos concept was not invented by John. In Greek philosophy, particularly in Stoicism and the thought of Philo of Alexandria, the Logos was the rational principle that ordered the cosmos &mdash; an abstract divine reason pervading all things. John takes this familiar concept and fills it with entirely new content. His Logos is not an abstract principle but a Person. More shockingly, this Person &ldquo;became flesh and dwelt among us&rdquo; (1:14). The Greek word for &ldquo;dwelt&rdquo; is eskēnōsen &mdash; literally &ldquo;tabernacled&rdquo; or &ldquo;pitched his tent.&rdquo; The God who dwelt in the tabernacle in the wilderness now dwells in a human body. The incarnation is announced in a single verse with breathtaking compression.",
      "The grammar of 1:1 has been the foundation of Trinitarian theology for two millennia: &ldquo;The Word was with God [pros ton theon], and the Word was God [theos ēn ho logos].&rdquo; The first clause asserts distinction &mdash; the Word is a distinct Person in relation with God. The second asserts identity &mdash; the Word shares the divine nature. The deliberate absence of the definite article before theos in the second clause (not &ldquo;the God&rdquo; but &ldquo;God&rdquo;) guards against a simplistic identification that would collapse all Trinitarian distinctions, while still asserting full deity. In these two clauses John sets up the theological problem that the councils of Nicaea and Chalcedon would spend centuries working out.",
      "The light and darkness motif introduced in 1:4&ndash;9 runs like a thread through the entire Gospel. &ldquo;The light shines in the darkness, and the darkness has not overcome it.&rdquo; The verb translated &ldquo;overcome&rdquo; (katelaben) can also mean &ldquo;comprehend&rdquo; or &ldquo;grasp&rdquo; &mdash; the darkness neither conquered the light nor understood it. John the Baptist enters the prologue as a witness to the light, carefully distinguished from the light itself: &ldquo;He was not the light, but came to bear witness about the light&rdquo; (1:8). This anticipates one of the Gospel&rsquo;s central themes: the identity of Jesus as disclosed through testimony and misunderstanding.",
      "The staggering claim of 1:14 deserves slow reading: &ldquo;And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.&rdquo; &ldquo;We have seen his glory&rdquo; is an eyewitness claim. John is not writing mythology or allegory; he is recording what a community of witnesses saw with their own eyes. The word &ldquo;glory&rdquo; (doxa) echoes the kabod of God that filled the tabernacle in Exodus 40 and the temple in 1 Kings 8. The prologue ends with a decisive comparison: Moses gave the law, but &ldquo;grace and truth came through Jesus Christ&rdquo; (1:17). John does not denigrate Moses, but he establishes a hierarchy of revelation. What Moses mediated was genuine; what Jesus brings is its fulfillment.",
      "What is distinctively different about John&rsquo;s Gospel becomes clear when you read it alongside the Synoptics. There is no birth narrative, no baptism of Jesus, no temptation in the wilderness, no exorcisms, no parables in the Synoptic sense. The chronology differs significantly: John has three Passovers where the Synoptics seem to record only one, placing the temple cleansing at the beginning of the ministry rather than the end. The Jesus of John&rsquo;s Gospel speaks in long discourses rather than short aphorisms and uses the distinctive &ldquo;I AM&rdquo; language absent in the other Gospels. These are not inconsistencies to be harmonized away but clues to John&rsquo;s distinctive theological purpose, stated explicitly in 20:30&ndash;31: &ldquo;These are written so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name.&rdquo;",
      "The prologue also introduces the tragedy that will run through the entire Gospel: &ldquo;He came to his own, and his own people did not receive him&rdquo; (1:11). This is not merely historical observation; it is theological lament. The one through whom all things were made came to the world he made and was rejected. Yet the rejection is not the final word: &ldquo;But to all who did receive him, who believed in his name, he gave the right to become children of God&rdquo; (1:12). The two responses to Jesus &mdash; rejection and reception &mdash; will structure everything that follows. John&rsquo;s Gospel is at its core a sustained meditation on what it means to believe, and what the stakes of that belief are.",
    ],
  },
  {
    id: "The Seven Signs",
    heading: "The Seven Signs",
    reference: "John 2&ndash;11",
    paragraphs: [
      "John&rsquo;s Gospel is organized, in part, around seven miraculous &ldquo;signs&rdquo; (semeia) &mdash; a word John uses deliberately instead of the Synoptic &ldquo;mighty works&rdquo; (dunameis). A sign points beyond itself to something it signifies. These miracles are not raw demonstrations of power but windows into who Jesus is. John&rsquo;s editorial statement in 20:30 confirms this: &ldquo;Now Jesus did many other signs in the presence of the disciples, which are not written in this book; but these are written so that you may believe.&rdquo; The seven signs are selected and arranged for a theological purpose, not merely as a historical record.",
      "The first sign &mdash; water turned to wine at Cana (2:1&ndash;11) &mdash; announces the theme of abundance and eschatological fulfillment. The stone jars used for Jewish purification rites are filled to the brim with water that becomes the finest wine. The governor of the feast does not know where it came from, but the servants who drew the water know (2:9) &mdash; an early hint of the epistemological divide between those who recognize Jesus and those who do not. The quantity is staggering: six jars holding twenty to thirty gallons each. This is not a trickle of grace but a flood. The old order of ceremonial purification is being replaced by something far greater.",
      "The second sign &mdash; the healing of the royal official&rsquo;s son (4:46&ndash;54) &mdash; takes place at a distance. Jesus speaks a word in Cana; the son is healed in Capernaum. The official believes before he has any visible confirmation (4:50), and the sign confirms the faith rather than creating it. This is John&rsquo;s counter-model to the demand for signs as a condition of belief: genuine faith takes Jesus at his word. The third sign &mdash; the healing of the paralyzed man at Bethesda (5:1&ndash;15) &mdash; immediately triggers controversy, because it occurs on the Sabbath. Jesus&rsquo;s response to the charge of Sabbath-breaking escalates rather than defuses the conflict: &ldquo;My Father is working until now, and I am working&rdquo; (5:17). The Sabbath claim becomes a claim of equality with God.",
      "The fourth sign &mdash; the feeding of the five thousand (6:1&ndash;15) &mdash; is the only miracle recorded in all four Gospels, and in John it is immediately followed by one of the longest discourses in the Gospel: the Bread of Life discourse (6:22&ndash;71). Jesus does not allow the crowd to simply enjoy the miracle; he presses them toward its meaning. &ldquo;Do not work for the food that perishes, but for the food that endures to eternal life&rdquo; (6:27). The sign is the text; the discourse is the sermon. This pattern &mdash; sign followed by interpretive discourse or dialogue &mdash; is characteristic of John&rsquo;s method. The fifth sign, walking on water (6:16&ndash;21), is brief but theologically loaded: Jesus&rsquo;s words &ldquo;I AM; do not be afraid&rdquo; (6:20) echo the divine self-disclosure of Exodus.",
      "The sixth sign &mdash; the healing of the man born blind (chapter 9) &mdash; is the longest and most dramatically developed sign narrative in the Gospel. John gives it an entire chapter, structured as a legal proceeding in which the healed man is interrogated repeatedly by the Pharisees while Jesus remains largely offstage. The irony is sustained and layered: the blind man progressively sees more clearly who Jesus is (first &ldquo;the man called Jesus,&rdquo; then &ldquo;a prophet,&rdquo; then &ldquo;from God,&rdquo; then worshiping him), while the Pharisees who possess perfect physical sight grow increasingly blind. The sign becomes a meditation on spiritual sight: &ldquo;I came into this world for judgment: that those who do not see may see, and those who see may become blind&rdquo; (9:39).",
      "The seventh and climactic sign &mdash; the raising of Lazarus (chapter 11) &mdash; is the most spectacular and the most consequential. Lazarus has been dead four days &mdash; long enough that, by first-century Jewish understanding, any possibility of natural resuscitation is excluded. When Jesus weeps at the tomb (11:35 &mdash; the shortest verse in the Bible), it is not because he does not know what he is about to do, but because he enters genuinely into the grief of those he loves. The cry &ldquo;Lazarus, come out!&rdquo; (11:43) is the sign that makes the Sanhedrin move to kill Jesus (11:47&ndash;53). The sign that demonstrates his power over death is the immediate cause of his own death. John&rsquo;s irony operates at the deepest level: the one who raises the dead must himself die.",
      "A critical question for reading John&rsquo;s signs is the relationship between sign and faith. Jesus repeatedly resists the demand for signs as a prerequisite of belief (2:18&ndash;19, 4:48, 6:30). Yet the signs are given precisely to evoke faith (20:30&ndash;31). The resolution lies in the quality of faith involved. Sign-faith that stops at the miracle and demands more miracles is insufficient (6:26). Genuine faith moves from the sign to the one the sign points to &mdash; from the gift to the Giver. The signs are not ends in themselves; they are fingers pointing at the moon. The danger is to stare at the finger.",
    ],
  },
  {
    id: "The I AM Sayings",
    heading: "The I AM Sayings",
    reference: "John 6&ndash;15",
    paragraphs: [
      "Seven times in John&rsquo;s Gospel, Jesus makes a &ldquo;I AM&rdquo; statement with a predicate &mdash; a metaphorical self-description that functions as a divine self-disclosure. These sayings have no parallel in the Synoptic Gospels and are one of the most distinctive features of John&rsquo;s Christology. Each saying connects Jesus to a fundamental human need (bread, light, life, way, truth) and claims that he alone satisfies it. Taken together, they build a cumulative portrait of a figure whose self-understanding is simply incompatible with the category of ordinary human teacher or prophet.",
      "&ldquo;I am the bread of life&rdquo; (6:35, 48) is spoken in the synagogue at Capernaum following the feeding of the five thousand. The crowd has followed Jesus across the lake looking for more bread; he redirects them: &ldquo;Do not work for the food that perishes, but for the food that endures to eternal life&rdquo; (6:27). The bread of life saying makes the connection explicit: as manna sustained Israel in the wilderness, Jesus sustains those who come to him. But he is better than manna: &ldquo;Your fathers ate the manna in the wilderness, and they died. This is the bread that comes down from heaven, so that one may eat of it and not die&rdquo; (6:49&ndash;50). The discourse culminates in the most visceral language in the Gospel: &ldquo;Unless you eat the flesh of the Son of Man and drink his blood, you have no life in you&rdquo; (6:53).",
      "&ldquo;I am the light of the world&rdquo; (8:12, repeated in 9:5) is spoken in the context of the Feast of Tabernacles, during which massive menorahs in the temple court illuminated all of Jerusalem. Jesus&rsquo;s claim to be the light of the world in this setting is a claim to be what those lights only symbolized. The promise attached to the saying is striking: &ldquo;Whoever follows me will not walk in darkness, but will have the light of life&rdquo; (8:12). Following Jesus is not merely moral improvement; it is an ontological relocation from darkness to light. The saying is vindicated in the very next chapter, where Jesus restores sight to a man who has never seen &mdash; the physical sign of the spiritual reality the saying announces.",
      "&ldquo;I am the door of the sheep&rdquo; (10:7, 9) and &ldquo;I am the good shepherd&rdquo; (10:11, 14) belong together in the discourse of John 10. The shepherd imagery evokes Ezekiel 34, where God condemned the false shepherds of Israel and promised to shepherd his people himself. Jesus&rsquo;s claim to be the good shepherd is a claim to be the one who fulfills that divine promise. The distinctive mark of the good shepherd is that &ldquo;he lays down his life for the sheep&rdquo; (10:11) &mdash; death not as victimization but as voluntary self-giving: &ldquo;I lay it down of my own accord. I have authority to lay it down, and I have authority to take it up again&rdquo; (10:18). The door saying also emphasizes access and security: those who enter through Jesus find pasture; the thief who comes another way comes only to steal and destroy.",
      "&ldquo;I am the resurrection and the life&rdquo; (11:25) is the central saying of the Lazarus narrative, spoken to Martha before Jesus goes to the tomb. Martha believes in a future resurrection; Jesus corrects and elevates her hope: resurrection is not merely a future event but a present Person. &ldquo;Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die&rdquo; (11:25&ndash;26). The claim then becomes a question directed at Martha &mdash; and through her, at every reader: &ldquo;Do you believe this?&rdquo; (11:26). &ldquo;I am the way, and the truth, and the life&rdquo; (14:6) &mdash; spoken in the upper room &mdash; is perhaps the most contested saying in any religious text. The exclusivity of &ldquo;no one comes to the Father except through me&rdquo; is either the most important claim ever made or the most arrogant. John&rsquo;s Gospel gives no room for a middle position.",
      "&ldquo;I am the true vine&rdquo; (15:1) is the last of the seven predicate I AM sayings and the most extended in its development. Israel was repeatedly described as God&rsquo;s vine in the Old Testament (Psalm 80, Isaiah 5, Ezekiel 15, Hosea 10) &mdash; and repeatedly described as a vine that failed. Jesus is the &ldquo;true&rdquo; vine: the one who fulfills what Israel was always meant to be. The Father is the vinedresser; the disciples are the branches. The condition of fruitfulness is &ldquo;abiding&rdquo; in Jesus &mdash; a relational word that speaks of continued, intimate connection. &ldquo;Apart from me you can do nothing&rdquo; (15:5) is not pessimism about human ability but a description of the source of all genuine spiritual fruit.",
      "Behind the predicate I AM sayings stand the absolute &ldquo;I AM&rdquo; (ego eimi) sayings that carry even greater theological freight: 8:24, 8:28, and most strikingly 8:58: &ldquo;Before Abraham was, I am.&rdquo; This is not merely a claim to pre-existence but an echo of Exodus 3:14, where God reveals himself to Moses as &ldquo;I AM WHO I AM.&rdquo; The crowd understands it as such: they immediately take up stones to kill him for blasphemy (8:59). The same absolute ego eimi appears when Jesus walks on water (6:20), when he identifies himself to the soldiers at his arrest (18:5&ndash;6), and when he tells the disciples he is telling them in advance &ldquo;so that when it does happen you may believe that I am&rdquo; (13:19). The divine name runs through John&rsquo;s Gospel as a quietly thundering refrain.",
    ],
  },
  {
    id: "The Farewell Discourse",
    heading: "The Farewell Discourse",
    reference: "John 13&ndash;17",
    paragraphs: [
      "The Farewell Discourse spans five chapters and represents the longest recorded speech of Jesus in any of the Gospels. It is spoken on the night of his arrest, in the upper room, to his closest disciples &mdash; a final conversation before everything is shattered. John alone records it in this form and at this length. The discourse functions as Jesus&rsquo;s last will and testament, a sustained effort to prepare his disciples for an absence they cannot yet imagine and to ground them in a love and a presence that will outlast what they are about to lose.",
      "The discourse begins not with words but with an act: the foot-washing (13:1&ndash;17). John does not record the institution of the Lord&rsquo;s Supper, but he records something the other Gospels do not &mdash; Jesus laying aside his outer garment, wrapping himself with a towel, and washing the feet of his disciples. The act is so socially shocking that Peter refuses to allow it (13:8); Jesus insists it is necessary. The meaning is explicit: &ldquo;If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another&rsquo;s feet. For I have given you an example&rdquo; (13:14&ndash;15). The foot-washing is not a ritual to be repeated but a pattern to be embodied: the shape of life in the kingdom is inverted from the shape of life in the world.",
      "The new commandment follows immediately: &ldquo;A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another&rdquo; (13:34). The newness of the commandment is not the command to love &mdash; Leviticus 19:18 already commanded that. The newness is the measure: &ldquo;as I have loved you.&rdquo; The love standard is now the cross. And the purpose of this love is missional: &ldquo;By this all people will know that you are my disciples, if you have love for one another&rdquo; (13:35). The community of mutual love becomes the apologetic for the gospel.",
      "The promise of the Paraclete (the Holy Spirit) occupies a central place in the discourse (14:15&ndash;31, 15:26&ndash;27, 16:5&ndash;15). The Greek word paraklētos can be translated Helper, Advocate, Comforter, or Counselor &mdash; each translation captures one dimension of the Spirit&rsquo;s multifaceted role. The Spirit will teach the disciples all things and remind them of everything Jesus has said (14:26) &mdash; the promise that grounds the authority of apostolic testimony. The Spirit will testify about Jesus (15:26) and guide the disciples into all truth (16:13). The Spirit&rsquo;s coming is conditional on Jesus&rsquo;s departure: &ldquo;It is to your advantage that I go away, for if I do not go away, the Helper will not come to you&rdquo; (16:7). The disciples cannot yet understand why this exchange is advantageous; the resurrection and Pentecost will answer the question.",
      "The vine and branches passage (15:1&ndash;17) lies at the heart of the discourse and one of the richest passages on the spiritual life in the entire Bible. The key word is &ldquo;abide&rdquo; (menō) &mdash; to remain, to stay, to dwell. It appears ten times in eleven verses. Abiding in Jesus is not a spiritual technique but a relational reality: remaining connected to the source of life the way a branch remains connected to the vine. The fruit that results is not achievement but the natural outcome of connection. The vine passage concludes with the explicit command to love (15:12&ndash;17), and with one of the most intimate statements Jesus makes to his disciples: &ldquo;I have called you friends, for all that I have heard from my Father I have made known to you&rdquo; (15:15).",
      "The world&rsquo;s hatred (15:18&ndash;16:4) is a sobering corrective to any triumphalist reading of the discourse. The disciples are not promised an easy reception in the world; they are promised the same rejection Jesus himself received. &ldquo;If the world hates you, know that it has hated me before it hated you&rdquo; (15:18). The hatred is not incidental to following Jesus but intrinsic to it: &ldquo;You are not of the world, but I chose you out of the world, therefore the world hates you&rdquo; (15:19). The Spirit who comes will &ldquo;convict the world concerning sin and righteousness and judgment&rdquo; (16:8) &mdash; the Spirit&rsquo;s ministry in the world is not soothing but confrontational, exposing the world&rsquo;s condition before the God it has rejected.",
      "The discourse concludes with the High Priestly Prayer of chapter 17 &mdash; the closest we get to overhearing Jesus pray in John&rsquo;s Gospel, and the most theologically dense prayer in the New Testament. Jesus prays for himself (17:1&ndash;5): the request for glorification is not vanity but the culmination of the mission &mdash; the Son glorified so that the Son may glorify the Father. He prays for the eleven (17:6&ndash;19): protection, unity, sanctification in the truth. He prays for all future believers (17:20&ndash;26): &ldquo;that they may all be one, just as you, Father, are in me, and I in you, that they also may be in us, so that the world may believe that you have sent me.&rdquo; The unity of the church is not merely organizational but ontological &mdash; a participation in the Trinitarian unity of Father and Son.",
    ],
  },
  {
    id: "Crucifixion and Resurrection",
    heading: "Crucifixion and Resurrection",
    reference: "John 18&ndash;21",
    paragraphs: [
      "John&rsquo;s passion narrative is distinctive in ways that reward close attention. From the moment of the arrest, Jesus is in control. When the soldiers and temple police arrive in the garden, Jesus steps forward and asks them, &ldquo;Whom do you seek?&rdquo; (18:4). When he says &ldquo;I am he,&rdquo; they fall back to the ground (18:6). This is not a man being captured; this is a man walking voluntarily into what is coming. The echo of the divine ego eimi in Gethsemane is unmistakable: even in the moment of arrest, the identity of Jesus is disclosed in a way the soldiers cannot comprehend. No Synoptic records this detail; John preserves it as the key to reading everything that follows.",
      "The trial before Pilate is the most extended and dramatically complex trial narrative in any of the Gospels (18:28&ndash;19:16). John structures it in seven scenes alternating between inside (where Pilate interrogates Jesus) and outside (where Pilate addresses the crowd). Pilate is drawn as a tragic figure: he is genuinely persuaded that Jesus is innocent (&ldquo;I find no guilt in him,&rdquo; repeated three times), but he lacks the courage to act on his conviction. His question &ldquo;What is truth?&rdquo; (18:38) &mdash; addressed to the one who had just said &ldquo;I am the truth&rdquo; &mdash; is one of the great dramatic ironies in literature. He walks away without waiting for an answer, choosing political survival over the truth standing before him.",
      "The crucifixion in John is the enthronement of the king. The title affixed above the cross reads &ldquo;Jesus of Nazareth, the King of the Jews&rdquo; in three languages &mdash; Hebrew, Latin, and Greek &mdash; so that the whole world might read it (19:19&ndash;20). When the chief priests object and ask Pilate to change it to &ldquo;This man said, I am King of the Jews,&rdquo; Pilate gives his only firm answer in the entire narrative: &ldquo;What I have written I have written&rdquo; (19:22). Unwittingly, Pilate has proclaimed the truth that the Gospel has been building toward. The crucifixion in John is not defeat wearing the mask of triumph; it is triumph.",
      "Three sayings from the cross in John deserve attention. &ldquo;Woman, behold your son&rdquo; (19:26) &mdash; entrusting the beloved disciple to care for Mary &mdash; is at once a deeply human moment and, in some readings, a symbolic act: Mary representing the old covenant community being entrusted to the beloved disciple representing the new. &ldquo;I thirst&rdquo; (19:28) fulfills scripture (Psalm 22:15 or 69:21) and is John&rsquo;s reminder, after his high Christology, that this is genuinely a human being dying. &ldquo;It is finished&rdquo; (19:30) &mdash; tetelestai in Greek &mdash; is not a cry of defeat but a declaration of completion. The same word was used on business receipts to mean &ldquo;paid in full.&rdquo; The mission is accomplished; the debt is discharged.",
      "The resurrection narrative in John begins with Mary Magdalene at the tomb in the dark, before dawn (20:1). She finds the stone rolled away and runs to tell Peter and the beloved disciple. The two disciples run to the tomb; the beloved disciple arrives first but waits at the entrance. Peter enters first; the beloved disciple enters, sees the burial cloths lying there, &ldquo;and he saw and believed&rdquo; (20:8). This is the first resurrection faith in John &mdash; faith from an empty tomb and folded grave cloths, without yet seeing the risen Jesus. Mary remains at the tomb weeping. When Jesus appears, she does not recognize him until he speaks her name: &ldquo;Mary&rdquo; (20:16). The shepherd speaks the sheep&rsquo;s name, and she knows the voice.",
      "Thomas&rsquo;s confession (20:28) &mdash; &ldquo;My Lord and my God!&rdquo; &mdash; is the highest Christological statement in any of the four Gospels. Having demanded physical proof and received it, Thomas makes not a statement about touching wounds but a confession of identity. The Gospel has moved in an arc from the prologue&rsquo;s &ldquo;the Word was God&rdquo; to a disciple&rsquo;s direct address: &ldquo;my God.&rdquo; Jesus&rsquo;s response is not a correction but a beatitude: &ldquo;Have you believed because you have seen me? Blessed are those who have not seen and yet have believed&rdquo; (20:29). This beatitude is addressed to every reader who comes after the eyewitnesses: faith from testimony is not second-rate faith but is itself the mode of blessing Jesus pronounces.",
      "The epilogue of chapter 21 &mdash; often treated as an appendix added after the apparent conclusion at 20:30&ndash;31 &mdash; contains some of the most moving material in the Gospel. The restoration of Peter beside the charcoal fire mirrors his denial beside a charcoal fire (18:18): three denials met by three questions, &ldquo;Do you love me?&rdquo; (21:15&ndash;17), each answered with reinstatement. The final chapter also addresses the question of the beloved disciple and closes with the eyewitness claim: &ldquo;This is the disciple who is bearing witness about these things, and who has written these things, and we know that his testimony is true&rdquo; (21:24). The Gospel that begins before the beginning ends with the testimony of a witness &mdash; and with the quiet hyperbole that the whole world could not contain the books that could be written about what Jesus did (21:25).",
    ],
  },
];

const videoItems = [
  { videoId: "c_UbxpQNsiM", title: "N.T. Wright on the Gospel of John" },
  { videoId: "9RfVjqYp7gQ", title: "Tim Keller Preaching John 1 — The Word Made Flesh" },
  { videoId: "3hnD6O_NNHQ", title: "The I AM Sayings of Jesus in John" },
];

export default function ChristianBookOfJohnGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: ACCENT, color: "#fff", padding: "4px 18px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>
            THE GOSPEL OF JOHN
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, margin: "0 0 14px", lineHeight: 1.15 }}>
            Book of John Guide
          </h1>
          <p style={{ color: MUTED, maxWidth: 600, margin: "0 auto", lineHeight: 1.75, fontSize: 16 }}>
            The Gospel of John stands apart from the other three &mdash; written that you may believe Jesus is the Christ, the Son of God, and that by believing you may have life in his name.
          </p>
        </div>

        {/* Key verse banner */}
        <div style={{ background: ACCENT + "18", border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "14px 24px", marginBottom: "2.5rem", textAlign: "center" }}>
          <p style={{ margin: 0, fontStyle: "italic", fontWeight: 600, color: TEXT, fontSize: 15 }}>
            &ldquo;In the beginning was the Word, and the Word was with God, and the Word was God.&rdquo; &mdash; John 1:1
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: "2rem", flexWrap: "wrap" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                borderRadius: 8,
                padding: "8px 16px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content: text tabs */}
        {tab !== "Videos" && currentSection && (
          <div>
            <div style={{ marginBottom: "1.75rem" }}>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: ACCENT, margin: "0 0 6px" }}>
                {currentSection.heading}
              </h2>
              <div
                style={{ color: MUTED, fontSize: 14, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: currentSection.reference }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <div
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderLeft: `3px solid ${ACCENT}`,
                    borderRadius: "0 10px 10px 0",
                    padding: "1.25rem 1.5rem",
                    lineHeight: 1.85,
                    fontSize: 15,
                    color: TEXT,
                  }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: 22, marginBottom: 8, marginTop: 0 }}>
                Teaching Videos
              </h2>
              <p style={{ color: MUTED, fontSize: 14, margin: "0 0 1.5rem", lineHeight: 1.7 }}>
                Sermons and lectures from leading scholars and preachers on the Gospel of John &mdash; covering the prologue, the signs, the I AM sayings, and John&rsquo;s distinctive theology.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div
                    key={v.videoId}
                    style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}
                  >
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: ACCENT, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{v.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: ACCENT + "12", border: `1px solid ${ACCENT}33`, borderRadius: 14, padding: "2rem", textAlign: "center" }}>
          <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: 20, marginTop: 0, marginBottom: 10 }}>
            Dig Deeper into John
          </h3>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
            John rewards slow reading aloud. Consider reading one chapter per day, pausing at the seven signs and the I AM sayings &mdash; asking what each sign reveals about Jesus and what each saying claims about his identity.
          </p>
        </div>
      </main>
    </div>
  );
}
