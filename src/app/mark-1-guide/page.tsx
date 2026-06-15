"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "John the Baptist",
  "Baptism and Temptation",
  "Calling Disciples",
  "Teaching and Miracles",
  "Healing Ministry",
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
    heading: "Overview of Mark 1",
    reference: "Mark 1:1&ndash;45",
    paragraphs: [
      "Mark&rsquo;s Gospel launches with the most compressed and urgent opening of all four Gospels. There is no genealogy, no birth narrative, no extended prologue about eternal pre-existence. Mark begins in the middle of things, in the wilderness, with a prophet crying out and a Savior striding onto the scene. The first word of the Gospel in the original Greek &mdash; &ldquo;beginning&rdquo; (arche) &mdash; carries both the sense of a historical starting point and the echo of Genesis 1:1, signaling that what is beginning here is nothing less than the new creation.",
      "The chapter falls into several interlocking episodes that together introduce the major themes of the entire Gospel. John the Baptist prepares the way in the wilderness, Jesus is baptized and immediately driven into the wilderness to be tempted, he calls his first disciples from their fishing boats, he teaches with authority in the Capernaum synagogue and drives out an unclean spirit, he heals Simon&rsquo;s mother-in-law, he heals a crowd at evening, he rises early to pray, and finally he heals a man with leprosy &mdash; all in the span of a single chapter.",
      "Mark&rsquo;s characteristic word is &ldquo;immediately&rdquo; (euthys), which appears ten times in this chapter alone. This word is not merely a stylistic tic; it conveys the urgency of the kingdom&rsquo;s arrival. Things happen fast in Mark because the arrival of God&rsquo;s kingdom in the person of Jesus is an urgent, world-altering event that does not permit leisurely observation. The reader is swept along from scene to scene, barely catching breath, because that is precisely the effect Mark intends: something decisive and irresistible has entered history.",
      "The title given to Jesus in Mark 1:1 &mdash; &ldquo;the Son of God&rdquo; &mdash; frames everything that follows. This identity is confirmed by the heavenly voice at the baptism, and it will be the great dramatic question of the Gospel: who is this man? Demons recognize him immediately; the religious authorities are threatened by him; his disciples are repeatedly baffled by him. The reader who knows the answer from verse 1 watches the rest of the Gospel with the privilege of dramatic irony &mdash; seeing what most characters in the story cannot yet see.",
      "Chapter 1 is also the fullest account in Mark of Jesus&rsquo;s healing and exorcising ministry, establishing the pattern that will recur throughout the Gospel: preaching, healing, and liberation from evil powers belong together as facets of a single mission. The kingdom of God that Jesus announces is not a merely spiritual or other-worldly reality; it breaks into the material world, transforming bodies, driving out demons, and crossing the purity boundaries that excluded the unclean from community. From the very first chapter, Mark makes clear that Jesus has come to set captives free.",
    ],
  },
  {
    id: "John the Baptist",
    heading: "John the Baptist Prepares the Way",
    reference: "Mark 1:1&ndash;8",
    paragraphs: [
      "Mark opens his Gospel by immediately reaching back into the Old Testament scriptures to frame what he is about to describe. He introduces John the Baptist not as an independent religious phenomenon but as the fulfillment of a divine promise: &ldquo;As it is written in Isaiah the prophet, &lsquo;Behold, I send my messenger before your face, who will prepare your way, the voice of one crying in the wilderness: Prepare the way of the Lord, make his paths straight&rsquo;&rdquo; (1:2&ndash;3). The citation is actually a conflation of Malachi 3:1 and Isaiah 40:3, combining the &ldquo;messenger&rdquo; of Malachi with the &ldquo;voice in the wilderness&rdquo; of Isaiah.",
      "The wilderness setting is deliberately evocative. Israel&rsquo;s defining experience had been the exodus from Egypt, the long journey through the wilderness where God fed his people with manna, gave them the law at Sinai, and led them by a pillar of cloud and fire. The prophets, especially Isaiah, had used the imagery of a new exodus to describe the coming salvation &mdash; God would again lead his people through the wilderness into a new promised land. John&rsquo;s appearance in the wilderness signals that the new exodus is now beginning, and he is its herald.",
      "John&rsquo;s clothing and diet &mdash; camel&rsquo;s hair garment and leather belt, locusts and wild honey &mdash; deliberately echo the description of Elijah in 2 Kings 1:8. Malachi had prophesied that God would send Elijah before the great and terrible day of the Lord (Malachi 4:5), and the early church consistently read John as the fulfillment of that prophecy. Jesus himself will make this identification explicit later in Mark (9:12&ndash;13). John is the returning Elijah, the forerunner who announces that the day of the Lord has arrived.",
      "The content of John&rsquo;s ministry is a &ldquo;baptism of repentance for the forgiveness of sins&rdquo; (1:4). People from all the region of Judea and Jerusalem come out to him in the wilderness, confessing their sins and being baptized in the Jordan River. The Jordan crossing evokes Joshua&rsquo;s entry into the promised land &mdash; a reversal of that crossing is now being staged, as people return to the Jordan to begin again, to re-enter God&rsquo;s people through the gate of repentance. The crowds who gather represent Israel being remade, a people ready to receive their coming king.",
      "John&rsquo;s own declaration about his relationship to the one coming after him is a remarkable act of self-subordination: &ldquo;After me comes he who is mightier than I, the strap of whose sandals I am not worthy to stoop down and untie&rdquo; (1:7). The comparison is between John&rsquo;s water baptism and the one who will baptize with the Holy Spirit (1:8). Water baptism is preparatory and symbolic; Spirit baptism is the real thing, the decisive act of the new age that John can only announce. The entire Elijah-figure of John points away from himself toward the one whose coming makes John&rsquo;s whole ministry coherent.",
      "The theological function of Mark&rsquo;s opening eight verses is to locate the story of Jesus within the grand narrative of Israel&rsquo;s scriptures. Jesus does not appear from nowhere; he arrives as the culmination of a long story of promise and preparation. The Old Testament scriptures, the wilderness, the Jordan, the Elijah-figure &mdash; all of these are not decorative background but structural elements that define what the arrival of Jesus means. Mark&rsquo;s opening is a claim that in Jesus, God is at last doing what he promised to do, and the whole prophetic tradition has been pointing toward this moment.",
    ],
  },
  {
    id: "Baptism and Temptation",
    heading: "The Baptism of Jesus and Temptation in the Wilderness",
    reference: "Mark 1:9&ndash;13",
    paragraphs: [
      "The baptism of Jesus by John in the Jordan is one of the most theologically significant episodes in the Gospels, and Mark&rsquo;s account is the most compressed of the three Synoptic versions. Jesus comes from Nazareth of Galilee &mdash; from the north, not from the religious center of Jerusalem &mdash; and is baptized by John. The simplicity of the statement is striking; Mark offers no explanation of why the sinless Son of God submits to a baptism of repentance. Matthew will record John&rsquo;s objection and Jesus&rsquo;s response; Mark simply records the fact, letting the reader wrestle with the implications.",
      "What follows is a theophany &mdash; a divine self-disclosure &mdash; of extraordinary richness. As Jesus comes up from the water, he sees the heavens &ldquo;torn open&rdquo; (the Greek word schizomenous is violent, a ripping rather than a parting) and the Spirit descending on him like a dove (1:10). The tearing of the heavens is significant: the same Greek word will be used at the end of Mark for the tearing of the temple curtain at Jesus&rsquo;s death (15:38). The book that begins with heaven torn open ends with the curtain torn in two &mdash; the barrier between God and humanity ripped away.",
      "A voice comes from heaven: &ldquo;You are my beloved Son; with you I am well pleased&rdquo; (1:11). The statement is woven from two Old Testament texts: Psalm 2:7 (&ldquo;You are my Son&rdquo;) and Isaiah 42:1 (&ldquo;my chosen, in whom my soul delights&rdquo;). Psalm 2 is a royal psalm about the enthronement of Israel&rsquo;s king; Isaiah 42 opens the first of the Servant Songs, describing the one who will bring justice to the nations. At the baptism, Jesus is identified simultaneously as the royal Son and the Suffering Servant &mdash; the one who reigns and the one who suffers. These two identities will remain in tension throughout Mark until they converge at the cross.",
      "Mark then offers the most terse account of the temptation: &ldquo;The Spirit immediately drove him out into the wilderness. And he was in the wilderness forty days, being tempted by Satan. And he was with the wild animals, and the angels were ministering to him&rdquo; (1:12&ndash;13). Where Matthew and Luke record the three specific temptations, Mark gives only the stark outline. The forty days echo Israel&rsquo;s forty years in the wilderness &mdash; and where Israel repeatedly failed its wilderness test, Jesus the true Son succeeds.",
      "The mention of &ldquo;wild animals&rdquo; is unique to Mark and may carry multiple resonances. In the prophetic imagination, peaceful coexistence with wild animals is an image of the renewed creation where God&rsquo;s shalom prevails (Isaiah 11:6&ndash;9; 65:25). Jesus in the wilderness may represent the beginning of that restoration &mdash; the one who brings God&rsquo;s new creation is at peace with the creatures of the old creation even in the domain of their wildness. The angels who minister to him (as they ministered to Elijah, 1 Kings 19:5&ndash;8) confirm that this is God&rsquo;s own Son on a divinely commissioned mission.",
      "The baptism and temptation together establish the identity and the vocation of Jesus at the very beginning of his public ministry. He is the beloved Son, anointed with the Spirit for a mission that will take him through wilderness testing to a ministry of healing, exorcism, teaching, and ultimately the cross. Everything that follows in Mark 1 and beyond flows from this double commissioning: the voice from heaven naming him and the Spirit driving him into the place of testing and preparation.",
    ],
  },
  {
    id: "Calling Disciples",
    heading: "The Calling of the First Disciples",
    reference: "Mark 1:14&ndash;20",
    paragraphs: [
      "After John&rsquo;s arrest &mdash; mentioned in a single subordinate clause that will not be explained until chapter 6 &mdash; Jesus comes to Galilee and begins his public preaching. His message is given in two parallel pairs: &ldquo;The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel&rdquo; (1:15). &ldquo;The time is fulfilled&rdquo; and &ldquo;the kingdom is at hand&rdquo; are the indicative &mdash; declarations about what God has done and is doing. &ldquo;Repent&rdquo; and &ldquo;believe&rdquo; are the imperative &mdash; the response that the situation demands. The gospel Jesus preaches is not primarily about personal morality or individual spiritual experience; it is about the arrival of God&rsquo;s sovereign rule in history.",
      "The calling of Simon and Andrew (1:16&ndash;18) is told with characteristic Markan speed and compression. Jesus sees them casting their net in the sea &mdash; they are fishermen at work, not disciples searching for a rabbi. He speaks two sentences: &ldquo;Follow me, and I will make you become fishers of men&rdquo; (1:17). And &ldquo;immediately they left their nets and followed him&rdquo; (1:18). Mark offers no deliberation, no conversation, no backstory of previous encounters (though the Gospel of John suggests there may have been earlier contact). The emphasis falls entirely on the authority of Jesus&rsquo;s call and the completeness of the response.",
      "The call to become &ldquo;fishers of men&rdquo; is a creative transformation of the disciples&rsquo; existing vocation. They are not being asked to abandon who they are but to have their skills and identity redirected. The fisherman&rsquo;s work of drawing in a large and varied catch becomes a metaphor for the work of gathering people into the kingdom of God. This reframing of vocation rather than its rejection is characteristic of Jesus&rsquo;s approach throughout the Gospels; he works with the material of people&rsquo;s lives, not against it.",
      "A little farther along the shore Jesus calls James and John, the sons of Zebedee (1:19&ndash;20). They are mending their nets in a boat with their father and hired servants &mdash; a detail that suggests the family fishing business was a going concern, not a marginal subsistence operation. When Jesus calls them, they too leave immediately, abandoning both their nets and their father. The abandonment of Zebedee is noted without comment; Mark allows the starkness of the break to speak for itself. Following Jesus costs something; in this case it costs the normal bonds of family obligation and economic security.",
      "The four fishermen &mdash; Simon, Andrew, James, and John &mdash; will form the inner circle of Jesus&rsquo;s twelve disciples throughout the Gospel. In Mark, these four are present at some of the most intimate and theologically significant moments: the healing of Jairus&rsquo;s daughter (5:37), the transfiguration (9:2), the Olivet Discourse (13:3), and the agony in Gethsemane (14:33). Their calling at the very opening of Jesus&rsquo;s ministry establishes from the beginning that this is not a solo mission; Jesus is forming a community of disciples who will be shaped by his presence, his teaching, and ultimately his death and resurrection.",
      "The immediacy of the disciples&rsquo; response to Jesus&rsquo;s call has been read in two ways in Christian interpretation. Some emphasize the sovereign authority of Jesus&rsquo;s call &mdash; when the Son of God speaks, the right response is immediate obedience, without deliberation or negotiation. Others have seen in the fishermen&rsquo;s response a paradigm of radical discipleship &mdash; the willingness to abandon security, family, and occupation for the sake of the kingdom. Both readings are correct and complementary: the call of Jesus is an authoritative summons that produces, in those who respond rightly, a radical reorientation of every earthly commitment.",
    ],
  },
  {
    id: "Teaching and Miracles",
    heading: "Teaching with Authority and Casting Out an Unclean Spirit",
    reference: "Mark 1:21&ndash;28",
    paragraphs: [
      "On the Sabbath, Jesus and his newly called disciples enter the synagogue at Capernaum, and Jesus begins to teach. The congregation&rsquo;s reaction is immediate: &ldquo;they were astonished at his teaching, for he taught them as one who had authority, and not as the scribes&rdquo; (1:22). The contrast with the scribes is significant. The scribes taught by citation &mdash; &ldquo;Rabbi So-and-so says&rsquo;&rsquo; &mdash; grounding their interpretations in the chain of tradition. Jesus teaches by declaration: &ldquo;I say to you.&rdquo; His authority is intrinsic, not derived from any human teacher or tradition. He speaks as one who stands on the same level as the Law he interprets &mdash; or above it.",
      "The teaching is immediately interrupted by a man in the synagogue with an unclean spirit. The demon&rsquo;s cry is remarkable for its knowledge and its terror: &ldquo;What have you to do with us, Jesus of Nazareth? Have you come to destroy us? I know who you are &mdash; the Holy One of God&rdquo; (1:24). The spirit recognizes Jesus with a clarity that no human character in the Gospel will match until the centurion at the cross. This is one of the characteristic ironies of Mark: demons see what disciples struggle to see. The spirit&rsquo;s knowledge is not saving knowledge but terrified recognition of a power greater than itself.",
      "Jesus&rsquo;s response is a command: &ldquo;Be silent, and come out of him!&rdquo; (1:25). The command to silence &mdash; what scholars call the &ldquo;messianic secret&rdquo; &mdash; is a recurring feature of Mark. Jesus consistently refuses to allow demons or, later, healed individuals to publicize his identity. The reasons are complex: partly Jesus does not want his mission defined by demonic testimony; partly the mystery of his identity will only be fully revealed at the cross; partly the crowds that follow him misunderstand the nature of his kingship. The silence commanded here is the first instance of a pattern that runs through the whole Gospel.",
      "The exorcism itself is viscerally described: &ldquo;And the unclean spirit, convulsing him and crying out with a loud voice, came out of him&rdquo; (1:26). Mark does not sanitize the spiritual combat. The departure of the demonic is violent and audible &mdash; the man is convulsed, the spirit shrieks. This is not a quiet inner transformation but a physical confrontation between the power of God incarnate and the powers that hold human beings captive. The kingdom of God arrives in Mark as a liberating force that breaks the chains of the demonic with a word.",
      "The crowd&rsquo;s response reveals what they have witnessed: &ldquo;What is this? A new teaching &mdash; with authority! He commands even the unclean spirits, and they obey him&rdquo; (1:27). They name what they have seen correctly: a new teaching, exercised with unprecedented authority, that extends even over the spiritual realm. The word &ldquo;new&rdquo; (kainos) in Mark&rsquo;s vocabulary carries the weight of eschatological newness &mdash; not merely something novel but something belonging to the new age that God is inaugurating. The report of Jesus spreads immediately throughout the surrounding region of Galilee.",
      "The synagogue episode in Mark 1 establishes an inseparable connection between Jesus&rsquo;s teaching and his healing-and-exorcism ministry. He does not preach about the kingdom abstractly while leaving people in bondage; the kingdom arrives in and through his actions as well as his words. The exorcism is not an interruption of the teaching &mdash; it is the teaching in action, demonstrating that when the kingdom comes, captives go free. This integration of word and deed, proclamation and liberation, will define Jesus&rsquo;s entire ministry in Mark&rsquo;s Gospel.",
    ],
  },
  {
    id: "Healing Ministry",
    heading: "Healing Peter's Mother-in-Law and the Evening Healings",
    reference: "Mark 1:29&ndash;45",
    paragraphs: [
      "Immediately after the synagogue exorcism, Jesus enters the house of Simon and Andrew with James and John. Simon&rsquo;s mother-in-law is lying sick with a fever &mdash; a detail that incidentally confirms that Simon Peter was a married man. Jesus &ldquo;took her by the hand and lifted her up, and the fever left her, and she began to serve them&rdquo; (1:31). The physical directness of the healing &mdash; taking her hand, lifting her up &mdash; is characteristic of Mark. And the immediacy of her restoration is demonstrated by her getting up and serving, the same word used elsewhere for the ministry of angels and disciples.",
      "That evening, as the Sabbath ends and it becomes permissible to carry sick persons through the streets, the whole city gathers at the door of the house. Mark paints the scene with broad strokes: &ldquo;And he healed many who were sick with various diseases, and cast out many demons&rdquo; (1:34). The word &ldquo;many&rdquo; does not necessarily mean &ldquo;not all&rdquo; in the Semitic idiom Mark uses &mdash; it can carry the sense of &ldquo;a multitude.&rdquo; What is clear is that the evening healings represent Jesus&rsquo;s ministry extended to the broader community: individuals with specific, named diseases and people oppressed by demonic powers both receive relief.",
      "The demons are again silenced &mdash; &ldquo;he would not permit the demons to speak, because they knew him&rdquo; (1:34). This is a second instance of the messianic secret, applied not to a single exorcism but to the pattern of his evening ministry. Knowledge of Jesus&rsquo;s identity is suppressed, withheld from public proclamation, at least for now. The Gospel of Mark is deeply conscious that the question &ldquo;Who is this?&rdquo; requires the answer of the cross before it can be fully answered, and premature or incomplete declarations of his identity &mdash; even true ones, from demonic witnesses &mdash; are not permitted.",
      "Rising very early the next morning, while it was still dark, Jesus slips away from the house and goes to a desolate place to pray (1:35). This brief notice is theologically freighted. The Son of God, who has just demonstrated extraordinary power over disease and demons, withdraws from the acclaim of the crowds to spend time alone with the Father in prayer. This is not a biographical detail about Jesus&rsquo;s personal prayer habits; it is a revelation about the source of his ministry. His authority comes from his relationship with the Father; his power flows from the communion that sustains him in the work of the kingdom.",
      "Simon and those with him search for Jesus and find him, announcing, &ldquo;Everyone is looking for you&rdquo; (1:37). The implied pressure &mdash; go back, the crowds want more &mdash; meets a redirecting response: &ldquo;Let us go on to the next towns, that I may preach there also, for that is why I came out&rdquo; (1:38). Jesus does not allow the success of one location to become a settled ministry. His mission is itinerant; he has come to proclaim the kingdom throughout Galilee, not to establish a healing center in Capernaum. The withdrawal to prayer followed by the move forward to new places reveals a ministry governed by the Father&rsquo;s purposes, not by crowd demand.",
      "The chapter closes with the healing of a man with leprosy &mdash; a particularly powerful episode because leprosy rendered a person ritually unclean and socially excluded, cut off from the community of worship and the network of social life. The leper approaches Jesus with the double humility of prostration and conditional faith: &ldquo;If you will, you can make me clean&rdquo; (1:40). Jesus&rsquo;s response is a counter-movement of compassion and deliberate contact: &ldquo;Moved with pity, he stretched out his hand and touched him and said to him, &lsquo;I will; be clean&rsquo;&rdquo; (1:41). The touch is the scandal &mdash; Jesus does not merely heal from a distance; he crosses the purity boundary and touches the untouchable, and in touching him, cleanses him rather than becoming unclean himself.",
    ],
  },
];

const videoItems = [
  { videoId: "HGHqu9rRtBc", title: "Mark 1 - The Beginning of Jesus's Ministry in Galilee" },
  { videoId: "Zp8mNqLWxYs", title: "BibleProject - Overview of the Gospel of Mark" },
  { videoId: "Qw4vRnTkL3M", title: "Mark Chapter 1 - Verse by Verse Bible Study" },
  { videoId: "Yd7bsXcPnKf", title: "John the Baptist and the Baptism of Jesus - Mark 1 Explained" },
];

export default function Mark1GuidePage() {
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
            Mark 1 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The Gospel of Mark opens at full speed &mdash; John the Baptist in the wilderness, the baptism and temptation of Jesus, the calling of the first disciples, authoritative teaching in the synagogue, healings, exorcisms, and a leper made clean &mdash; all in a single breathless chapter that announces the arrival of God&rsquo;s kingdom.
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
              Deepen your study of Mark 1 through these video teachings on John the Baptist, the baptism and temptation of Jesus, the calling of the first disciples, and the healing ministry that announced the arrival of God&rsquo;s kingdom in Galilee.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Kingdom of God Is at Hand</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Mark 1 sets the tone for the entire Gospel: urgent, authoritative, and overflowing with the power of God&rsquo;s kingdom breaking into human experience. The one who calls fishermen, silences demons, and touches lepers is the beloved Son of God &mdash; and his arrival changes everything. The time is fulfilled; repent and believe the gospel.
          </p>
        </div>
      </main>
    </div>
  );
}
