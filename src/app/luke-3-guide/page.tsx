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
  "Overview",
  "John the Baptist",
  "Baptism of Jesus",
  "Genealogy of Jesus",
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
    heading: "Luke 3 &mdash; The Forerunner and the Son of God",
    reference: "Luke 3:1&ndash;38",
    paragraphs: [
      "Luke 3 is a chapter of arrivals. The long silence of four hundred years since the last of the Old Testament prophets is broken when &ldquo;the word of God came to John the son of Zechariah in the wilderness&rdquo; (3:2). After the silence, a voice. After the waiting, a movement. After centuries of prophetic anticipation, the one who was to prepare the way of the Lord steps into the Jordan Valley and begins to preach a baptism of repentance for the forgiveness of sins. The hinge of the ages has turned.",
      "Luke is characteristically precise about the historical setting. He dates John&rsquo;s ministry with a synchronism that anchors it in six layers of political reality: the fifteenth year of Tiberius Caesar, the governorship of Pontius Pilate in Judea, the tetrarchies of Herod, Philip, and Lysanias, and the high priesthood of Annas and Caiaphas. This is not decoration; it is theology. The Word of God comes not into an abstract religious vacuum but into a world ruled by Caesar, administered by Roman prefects, governed by Jewish client-kings, and overseen by a high priesthood that served at Roman pleasure. Into that world, with all its power and corruption and waiting, the word of God comes to a man in the wilderness.",
      "The three great movements of the chapter are carefully staged. First comes John&rsquo;s ministry of proclamation and preparation (vv.1&ndash;20): the voice crying in the wilderness, the call to repentance, the practical ethics of the kingdom, the clarification that John is not the Messiah, and John&rsquo;s imprisonment by Herod. Then comes the baptism of Jesus (vv.21&ndash;22): the opened heaven, the Spirit descending as a dove, and the divine voice declaring &ldquo;You are my beloved Son; with you I am well pleased.&rdquo; Finally comes the genealogy of Jesus (vv.23&ndash;38), which traces his line not merely back to Abraham, as Matthew does, but all the way back through Adam to God himself.",
      "The relationship between these three movements is intentional. John prepares the people; Jesus is baptized and publicly identified by God as his beloved Son; and then the genealogy reveals the full scope of who this Son is and what his mission encompasses. If Matthew&rsquo;s genealogy moves forward from Abraham to Christ, establishing Jesus as the Jewish Messiah, Luke&rsquo;s genealogy moves backward from Jesus through Adam to God, establishing Jesus as the universal Savior, the one through whom God&rsquo;s original intent for the human family will be restored.",
      "Luke 3 is also a chapter about voice and identity. John hears the word of God and becomes a voice crying in the wilderness. The crowds hear John and ask, &ldquo;What then shall we do?&rdquo; Jesus is baptized and hears the voice from heaven identifying him as the beloved Son. And the genealogy, read aloud in the synagogue setting it was designed for, traces a chain of begetting all the way back to &ldquo;Adam, the son of God.&rdquo; Everyone in this chapter is listening for something, moving toward something, being called toward a new reality that is breaking into the world from above.",
      "Theologically, Luke 3 establishes the coordinates of the gospel. The arrival of the kingdom of God requires both repentance (John&rsquo;s ministry) and identity (the baptism). It addresses every stratum of society &mdash; crowds, tax collectors, soldiers &mdash; with concrete, practical demands. And it grounds the person of Jesus in the full sweep of human history from creation, while opening above him the heaven that had been shut and the voice that had been silent. The one who is about to begin his public ministry is not a new religious teacher; he is the beloved Son, the son of Adam, the son of God, come to do what Adam failed to do and to open to humanity the future that God always intended.",
    ],
  },
  {
    id: "John the Baptist",
    heading: "John the Baptist &mdash; Voice in the Wilderness",
    reference: "Luke 3:1&ndash;20",
    paragraphs: [
      "The ministry of John the Baptist in Luke 3 is presented as the fulfillment of Isaiah 40&rsquo;s great overture of comfort and preparation. Luke quotes more of that passage than any other Gospel writer: &ldquo;The voice of one crying in the wilderness: &lsquo;Prepare the way of the Lord, make his paths straight. Every valley shall be filled, and every mountain and hill shall be made low, and the crooked shall become straight, and the rough places shall become level ways, and all flesh shall see the salvation of God&rsquo;&rdquo; (3:4&ndash;6, quoting Isa 40:3&ndash;5). The inclusion of &ldquo;all flesh shall see the salvation of God&rdquo; is distinctive to Luke, previewing the universal scope of the salvation Jesus will bring.",
      "John is described simply as coming into &ldquo;all the region around the Jordan, proclaiming a baptism of repentance for the forgiveness of sins&rdquo; (3:3). The baptism John practiced was not the ritual washings already familiar in Judaism; it was a once-for-all initiatory act that marked a decisive turning, a new beginning, a willingness to be identified with the people who were making themselves ready for the coming of God&rsquo;s kingdom. It was simultaneously an act of humility &mdash; to be baptized was to acknowledge one&rsquo;s need &mdash; and an act of hope &mdash; to present oneself as one who was waiting for and welcoming the coming Lord.",
      "John&rsquo;s preaching, however, was not soft. When the crowds came out to be baptized, he challenged them with striking severity: &ldquo;You brood of vipers! Who warned you to flee from the wrath to come? Bear fruits in keeping with repentance&rdquo; (3:7&ndash;8). The image of vipers fleeing a fire in the brush &mdash; the panic of snakes driven out of their hiding places by approaching flames &mdash; suggests people who are motivated by fear of consequences rather than genuine turning. John demands evidence: &ldquo;fruits&rdquo; that demonstrate the reality of repentance.",
      "He then dismantles the most common form of false security among his hearers: &ldquo;Do not begin to say to yourselves, &lsquo;We have Abraham as our father.&rsquo; For I tell you, God is able from these stones to raise up children for Abraham&rdquo; (3:8). Physical descent from Abraham confers no automatic status before God. The covenant community is defined not by bloodline but by faith and its fruit. This is not a rejection of Israel but a call to Israel to be what it was always called to be &mdash; a people whose life embodies the righteousness of God.",
      "The crowds, hearing this, ask the central question of the passage: &ldquo;What then shall we do?&rdquo; (3:10). It is the question of genuine repentance &mdash; not theoretical assent but practical orientation. John&rsquo;s answers are striking in their concreteness and their this-worldly focus. To the crowds: &ldquo;Whoever has two tunics is to share with him who has none, and whoever has food is to do likewise&rdquo; (3:11). To the tax collectors, notorious for extortion: &ldquo;Collect no more than you are authorized to do&rdquo; (3:13). To soldiers: &ldquo;Do not extort money from anyone by threats or by false accusation, and be content with your wages&rdquo; (3:14). These are not the instructions of someone calling people out of the world; they are the instructions of someone calling people to live in the world as those who belong to the coming kingdom.",
      "The people were &ldquo;in expectation, and all were questioning in their hearts concerning John, whether he might be the Christ&rdquo; (3:15). John answers the question directly and without ambiguity: &ldquo;I baptize you with water, but he who is mightier than I is coming, the strap of whose sandals I am not worthy to untie. He will baptize you with the Holy Spirit and fire&rdquo; (3:16). The contrast is not merely of degree but of kind. John&rsquo;s baptism is preparatory and external; the one coming will baptize with the very Spirit of God and with the purifying, consuming fire of divine presence. The threshing floor image that follows (v.17) &mdash; the winnowing fan, the chaff burned with unquenchable fire &mdash; makes clear that the one coming will bring final, decisive judgment as well as salvation.",
      "Luke concludes the account of John&rsquo;s ministry with a summary statement about his many exhortations and then the report of his imprisonment by Herod Antipas, who had been rebuked by John for his marriage to Herodias, his brother&rsquo;s wife (3:19&ndash;20). This is structurally significant: Luke places the imprisonment of John before his account of Jesus&rsquo; baptism, separating the two figures even while connecting their missions. The forerunner&rsquo;s work is complete. He has prepared the way. Now the one greater than John must come to the river.",
    ],
  },
  {
    id: "Baptism of Jesus",
    heading: "The Baptism of Jesus &mdash; The Beloved Son",
    reference: "Luke 3:21&ndash;22",
    paragraphs: [
      "Luke&rsquo;s account of the baptism of Jesus is the shortest of the four Gospels&rsquo; accounts and in some ways the most theologically concentrated. &ldquo;Now when all the people were baptized, and when Jesus also had been baptized and was praying, the heavens were opened, and the Holy Spirit descended on him in bodily form, like a dove; and a voice came from heaven, &lsquo;You are my beloved Son; with you I am well pleased&rsquo;&rdquo; (3:21&ndash;22). In two verses, all three persons of the Trinity are present: the Son who is baptized and prays, the Spirit who descends, and the Father who speaks.",
      "Luke&rsquo;s distinctive addition &mdash; that Jesus &ldquo;was praying&rdquo; &mdash; is characteristic of his Gospel, which presents Jesus at prayer at every major turning point in his ministry: at the baptism (3:21), before choosing the Twelve (6:12), at the transfiguration (9:29), before teaching the disciples to pray (11:1), in Gethsemane (22:41), and on the cross (23:46). For Luke, the prayer of Jesus is not incidental; it is the mode in which the Son communes with the Father and in which heaven opens. The baptism is not a moment of passive reception but of active filial communion.",
      "The fact that Jesus submitted to John&rsquo;s baptism of repentance has puzzled interpreters since the early church. Matthew&rsquo;s Gospel records John&rsquo;s protest: &ldquo;I need to be baptized by you, and do you come to me?&rdquo; (Matt 3:14). Luke does not record this protest but presents the baptism matter-of-factly, placing it at the moment of culmination of all the people&rsquo;s baptisms: &ldquo;when all the people were baptized&rdquo; &mdash; then Jesus too. The sense is one of solidarity. Jesus does not come to the Jordan as an outsider observing the repentance of others; he enters the water with the people, identifying himself with sinful humanity in the very act that expresses humanity&rsquo;s need for God.",
      "The opening of heaven is a theologically loaded image. In the Old Testament and Second Temple Judaism, &ldquo;heaven being opened&rdquo; was associated with divine revelation and divine intervention (Ezek 1:1, Isa 63:19, 64:1). Israel had long prayed for God to &ldquo;tear open the heavens and come down&rdquo; (Isa 63:19&ndash;64:1). Here, at the Jordan, the prayer is answered. Heaven is not merely opened to reveal something at a distance; it is opened to release the Spirit downward, into the world, upon the Son. The era of divine silence is definitively ended.",
      "The Spirit descends &ldquo;in bodily form, like a dove.&rdquo; Luke&rsquo;s &ldquo;bodily form&rdquo; is unique among the Gospels and insists on the visible, tangible reality of the Spirit&rsquo;s descent. This is not a vision or a metaphor; it is an event that took place in space and time, observable to those present. The dove image has evoked many interpretive traditions: the dove of Noah hovering over the waters of a new creation; the dove of the Song of Songs as a figure of the beloved; the gentle, peaceful nature of the Spirit&rsquo;s presence. All of these may resonate, but the central significance is the Spirit&rsquo;s resting upon Jesus as a permanent endowment for his messianic mission (cf. Isa 61:1, which Jesus himself quotes in Luke 4:18).",
      "The voice from heaven speaks directly and personally to Jesus: &ldquo;You are my beloved Son; with you I am well pleased.&rdquo; The Greek word for &ldquo;beloved&rdquo; (<em>agapetos</em>) in this context often carries the connotation of &ldquo;only,&rdquo; the unique and irreplaceable beloved &mdash; the same word used in the Septuagint of Isaac, Abraham&rsquo;s son whom he was commanded to offer (Gen 22:2). The divine voice is echoing two Old Testament texts simultaneously: Psalm 2:7 (&ldquo;You are my Son&rdquo;) and Isaiah 42:1 (&ldquo;my servant, in whom my soul delights&rdquo;). Jesus is both the royal Son of Psalm 2 and the Servant of Isaiah &mdash; the one who will reign and the one who will suffer. Both identities are confirmed in a single moment at the Jordan.",
      "The phrase &ldquo;with you I am well pleased&rdquo; deserves special attention. The pleasure of the Father in the Son exists before the ministry has begun. No miracle has yet been performed, no teaching delivered, no cross yet endured. The Father&rsquo;s delight in the Son is not earned by achievement; it is the eternal delight of the Father in the one who is his perfect image, his beloved, his Son. This is the foundation from which all of Jesus&rsquo; ministry will flow &mdash; not the anxious striving of one who must prove his worth, but the confident action of one who is already loved, already declared well-pleasing, already fully known and approved by the Father.",
    ],
  },
  {
    id: "Genealogy of Jesus",
    heading: "The Genealogy of Jesus &mdash; Son of Adam, Son of God",
    reference: "Luke 3:23&ndash;38",
    paragraphs: [
      "After the heavenly voice has identified Jesus as the beloved Son, Luke immediately grounds him in a long chain of human fathers: &ldquo;Jesus, when he began his ministry, was about thirty years of age, being the son (as was supposed) of Joseph&rdquo; (3:23). The parenthetical &ldquo;as was supposed&rdquo; is Luke&rsquo;s quiet reminder of what he has already established in the birth narrative &mdash; that Joseph was not Jesus&rsquo; biological father but his legal father, and that Jesus was conceived by the Holy Spirit. The genealogy that follows is therefore a legal, not a biological, lineage: the family line through which Jesus is lawfully reckoned as the son of David, the son of Abraham, the son of Adam.",
      "Luke&rsquo;s genealogy differs from Matthew&rsquo;s in both direction and scope. Matthew moves forward from Abraham to Jesus (Matt 1:1&ndash;17); Luke moves backward from Jesus toward the beginning. Matthew traces the line through Solomon and the royal line of Judah&rsquo;s kings; Luke traces it through Nathan, another son of David (v.31), following a slightly different branch of the Davidic family. Many scholars suggest this may be Mary&rsquo;s line rather than Joseph&rsquo;s, though Luke does not say this explicitly. What is certain is that both genealogies affirm the same essential truth: Jesus is of the house and lineage of David.",
      "The list of names from David back to Abraham is familiar territory for any reader of the Old Testament: Nathan, Jesse, Obed, Boaz, Salmon, Nahshon, Amminadab, Ram, Hezron, Perez, Judah, Jacob, Isaac, Abraham. These are the names of promise and covenant, of sojourning and waiting, of a people who clung to the word of God across centuries of uncertainty. Every name is a link in the chain by which God kept his promise to Abraham that &ldquo;in your offspring all the families of the earth shall be blessed&rdquo; (Gen 12:3).",
      "But Luke does not stop at Abraham. The genealogy continues back through the pre-patriarchal figures: Nahor, Serug, Reu, Peleg, Eber (the ancestor whose name gives us &ldquo;Hebrew&rdquo;), Shelah, Cainan, Arphaxad, Shem, and then Noah &mdash; that great survivor of judgment and inheritor of the rainbow promise. Then back further still: Lamech, Methuselah, Enoch (he who walked with God and was taken), Jared, Mahalalel, Kenan, Enosh, Seth, and finally: Adam.",
      "And then Luke adds one final link: &ldquo;Adam, the son of God.&rdquo; With this phrase the genealogy reaches its ultimate source and makes its ultimate claim. Adam was the son of God in the sense that he was created directly by God, made in God&rsquo;s image and likeness (Gen 1:26&ndash;27). He was placed in the garden to reflect God&rsquo;s glory and rule creation as God&rsquo;s steward. He failed. He listened to a different voice than the one that had spoken in creation, and through his failure sin and death entered the human story. Every name in Luke&rsquo;s genealogy is a member of the fallen family of Adam.",
      "But now &ldquo;the son of Adam, the son of God&rdquo; means something entirely new. Jesus is the Son of God in the fullest, most complete sense &mdash; confirmed just moments earlier by the voice from heaven. He is also the son of Adam in the fullest human sense &mdash; born of a woman, bearing a human genealogy, standing in the Jordan with the whole people of God. The genealogy connects these two truths: the one who is the eternal beloved Son of God has entered the human family at its deepest level, taken his place in the long line of Adam&rsquo;s descendants, and is now about to do what no son of Adam has ever been able to do.",
      "The theological resonance with Paul&rsquo;s language in Romans 5 and 1 Corinthians 15 is unmistakable. &ldquo;For as by a man came death, by a man has come also the resurrection of the dead. For as in Adam all die, so also in Christ shall all be made alive&rdquo; (1 Cor 15:21&ndash;22). Luke&rsquo;s genealogy is not merely biographical information; it is a statement about the cosmic scope of salvation. What Adam forfeited &mdash; the life of the image-bearer in right relationship with God &mdash; the second Adam will restore. And the restoration will not be for a single people or nation, but for &ldquo;all flesh,&rdquo; as the extended Isaiah quotation at the chapter&rsquo;s opening promised (3:6).",
      "Immediately after the genealogy, Luke narrates the temptation in the wilderness (4:1&ndash;13), where Jesus faces and defeats the very same kind of test that Adam failed: the temptation to live by a word other than the word of God, to seize sovereignty rather than receive it, to grasp divinity rather than walk in filial dependence. Adam failed in a garden; the second Adam prevails in a wilderness. The genealogy of Luke 3 is the preface to that victory &mdash; the declaration that the one who enters the contest with the tempter is both fully human (son of Adam) and fully the Son of God, equipped with all that he needs to win what the first Adam lost.",
    ],
  },
];

const videoItems = [
  { videoId: "rDjSsHW7DVw", title: "Luke 3 - John the Baptist and the Baptism of Jesus" },
  { videoId: "RvVJJ2Yp26E", title: "BibleProject - Gospel of Luke Overview" },
  { videoId: "4RHAjLhLLbc", title: "Luke 3 - Repentance, Baptism, and the Voice from Heaven" },
  { videoId: "HYHmNOopbZM", title: "The Genealogy of Jesus in Luke 3 - Son of Adam, Son of God" },
];

export default function Luke3GuidePage() {
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
            Luke 3 &mdash; John the Baptist and the Baptism of Jesus
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            John the Baptist&rsquo;s ministry of repentance in the wilderness, the baptism of Jesus and the divine voice from heaven, and the genealogy of Jesus traced back through Adam to God &mdash; establishing the universal scope of salvation in Luke&rsquo;s Gospel.
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
            >
              {t}
            </button>
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2
                style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: currentSection.heading }}
              />
            </div>
            <div
              style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }}
              dangerouslySetInnerHTML={{ __html: currentSection.reference }}
            />
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

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }}>Video Teaching on Luke 3</h3>
          <p
            style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, margin: "0 0 1.5rem" }}
            dangerouslySetInnerHTML={{ __html: "Explore Luke 3 through these video teachings &mdash; John the Baptist&rsquo;s wilderness ministry, the call to repentance, the baptism of Jesus and the voice from heaven, and the theological significance of Jesus&rsquo; genealogy back to Adam, the son of God." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "10px 14px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            &ldquo;You Are My Beloved Son&rdquo;
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "Luke 3 is the chapter in which the long-awaited voice of God breaks the silence of centuries. John the Baptist prepares a people ready for the Lord; Jesus enters the Jordan in solidarity with the humanity he has come to save; the Spirit descends and the Father speaks. The beloved Son &mdash; who is also the son of Adam, the son of God &mdash; stands ready to begin the ministry that will restore what was lost and open to the whole human family the salvation that God always intended." }}
          />
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Historical Anchors of Luke 3</h3>
          <p
            style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.7, margin: "0 0 1rem" }}
            dangerouslySetInnerHTML={{ __html: "Luke&rsquo;s synchronism in 3:1&ndash;2 dates John&rsquo;s ministry with six historical markers, grounding the gospel in verifiable history." }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {[
              { name: "Tiberius Caesar", detail: "Emperor of Rome, 14&ndash;37 AD. The &ldquo;fifteenth year&rdquo; places John&rsquo;s ministry around 28&ndash;29 AD." },
              { name: "Pontius Pilate", detail: "Roman prefect of Judea, 26&ndash;36 AD. Judea was under direct Roman administration, not a client king." },
              { name: "Herod Antipas", detail: "Tetrarch of Galilee and Perea &mdash; the Herod who imprisoned and beheaded John, who later tried Jesus (Luke 23:7&ndash;12)." },
              { name: "Philip", detail: "Tetrarch of Iturea and the region of Trachonitis, another son of Herod the Great." },
              { name: "Lysanias", detail: "Tetrarch of Abilene, a region north of Damascus. Luke&rsquo;s knowledge of this obscure ruler has been confirmed by an inscription." },
              { name: "Annas and Caiaphas", detail: "Annas, former high priest and power behind the office; Caiaphas, his son-in-law, the reigning high priest. Both appear in the passion narrative." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", padding: "0.65rem 1rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 140, flexShrink: 0 }}>{item.name}</span>
                <span
                  style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}
                  dangerouslySetInnerHTML={{ __html: item.detail }}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 0.85rem", fontSize: "1.1rem" }}>
            &ldquo;What Shall We Do?&rdquo; &mdash; John&rsquo;s Practical Ethics
          </h3>
          <p
            style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.7, margin: "0 0 1rem" }}
            dangerouslySetInnerHTML={{ __html: "When different groups asked John &ldquo;What then shall we do?&rdquo; (3:10, 12, 14), he answered each group with specific, concrete instructions &mdash; not a generic call to religiosity but a direct address to their particular situations." }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {[
              { group: "The Crowds", instruction: "&ldquo;Whoever has two tunics is to share with him who has none, and whoever has food is to do likewise&rdquo; (3:11). Generosity with material goods is the basic fruit of repentance." },
              { group: "Tax Collectors", instruction: "&ldquo;Collect no more than you are authorized to do&rdquo; (3:13). Repentance means ending exploitation within one&rsquo;s occupation, not necessarily abandoning it." },
              { group: "Soldiers", instruction: "&ldquo;Do not extort money from anyone by threats or by false accusation, and be content with your wages&rdquo; (3:14). Power is not to be used for personal gain." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.3rem", padding: "0.75rem 1rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13 }}>{item.group}</span>
                <span
                  style={{ color: MUTED, fontSize: 13, lineHeight: 1.65 }}
                  dangerouslySetInnerHTML={{ __html: item.instruction }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
