"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", ROSE = "#E11D48";

const TABS = [
  { id: "what", label: "What Is Hermeneutics" },
  { id: "grammatical", label: "Grammatical-Historical Method" },
  { id: "literal", label: "Literal vs. Literalistic" },
  { id: "typology", label: "Typology & Allegory" },
  { id: "spirit", label: "The Holy Spirit & Interpretation" },
  { id: "videos", label: "Videos" },
];

const WHAT_SECTIONS = [
  {
    title: "The Word and Its Origin",
    color: GOLD,
    text: "The word &ldquo;hermeneutics&rdquo; derives from Hermes, the messenger of the gods in Greek mythology &mdash; the one who carried meaning from the divine realm to the human. Hermeneutics, in its theological application, is the art and science of interpreting texts, and particularly sacred texts. Biblical hermeneutics asks: how do we move from a text written in ancient languages, in ancient cultures, to communities separated from those texts by 2,000&ndash;3,500 years of history, language, and cultural change? The question is not whether we interpret &mdash; everyone who reads interprets &mdash; but whether we interpret well. Hermeneutics is the discipline that makes interpretation conscious, principled, and accountable.",
  },
  {
    title: "The Basic Task: Understanding Across Distance",
    color: BLUE,
    text: "The basic hermeneutical task is understanding what an ancient text meant to its original audience so that we can understand what it means for us. This involves two horizons: the ancient horizon (the world of the text &mdash; its original language, culture, history, and audience) and our horizon (the world of the reader &mdash; our assumptions, culture, questions, and context). Hans-Georg Gadamer described the goal of interpretation as a &ldquo;fusion of horizons&rdquo; &mdash; not collapsing the distance between the two worlds, but allowing them to meet in genuine understanding. The danger is either ignoring the ancient horizon (finding only ourselves in the text) or remaining so distant from it that we never hear it speaking to our world.",
  },
  {
    title: "The Hermeneutical Spiral",
    color: TEAL,
    text: "Grant Osborne&rsquo;s concept of the &ldquo;hermeneutical spiral&rdquo; corrects the image of the hermeneutical circle. A circle suggests that interpretation is self-enclosed &mdash; we bring assumptions to the text, and the text confirms them. A spiral suggests that interpretation is progressive: we bring assumptions to the text, the text challenges and refines those assumptions, we return to the text with better-formed questions, and the text teaches us more. Understanding improves with each iteration. This is why reading the same passage across different seasons of life yields new insight: we return to the text changed, and the text speaks differently to what we now bring.",
  },
  {
    title: "The Gap Between Horizons: Gadamer&rsquo;s Fusion",
    color: GREEN,
    text: "Gadamer&rsquo;s &ldquo;fusion of horizons&rdquo; describes what good interpretation achieves. The ancient horizon &mdash; the world of Paul&rsquo;s first-century Mediterranean context, or of Jeremiah&rsquo;s sixth-century Judah &mdash; must be understood on its own terms before it can speak to our horizon. The distance between the horizons is real and cannot be collapsed without distorting the text. But the distance is also bridgeable: the Holy Spirit who inspired the text also illumines its reading, the human needs addressed in Scripture are persistent across history, and the God who spoke then still speaks now. Hermeneutics is the disciplined practice of crossing this distance without pretending it does not exist.",
  },
  {
    title: "Why Every Interpretation Involves Hermeneutical Choices",
    color: ROSE,
    text: "Many Christians read the Bible with the assumption that they are simply reading what is there &mdash; that their interpretation is not interpretation but just the plain meaning. This assumption is itself a hermeneutical position (naive realism), and it is the position most vulnerable to eisegesis. Every reader makes choices about genre, context, which passages to prioritize, how to handle apparent tensions, and what the text requires of them. These choices are hermeneutical choices. Making them consciously &mdash; with principled methods, awareness of tradition, and openness to correction &mdash; produces better interpretation than making them unconsciously while believing you are not interpreting at all.",
  },
];

const GRAMMATICAL_SECTIONS = [
  {
    title: "The Dominant Evangelical Approach",
    color: GOLD,
    text: "The grammatical-historical method is the dominant approach to biblical interpretation in evangelical Christianity. Its governing principle is that the primary meaning of a text is determined by the intention of the author, expressed in the grammar and vocabulary of the original language, in the historical context in which the text was written. This approach developed as a corrective to allegorical and purely spiritualized interpretation. It insists that the plain, historically-grounded meaning of a text must be established before any secondary or applicational meanings are drawn. The method does not exclude spiritual application &mdash; it grounds it.",
  },
  {
    title: "Grammar: What Do the Words and Syntax Mean?",
    color: BLUE,
    text: "Grammar refers to the meaning of words and the structures of sentences in the original languages (Hebrew, Aramaic, Greek). The same English word may translate several different Greek or Hebrew words with distinct nuances. The word &ldquo;love&rdquo; in English renders agape, phileo, and eros in Greek &mdash; words with different semantic ranges. The tense and mood of verbs carry significant theological weight: the Greek aorist vs. present vs. perfect tense distinctions matter for interpretation. Grammatical analysis asks: what do these specific words mean? How does this sentence structure convey the author&rsquo;s meaning? What is the logical relationship between clauses? Original language tools &mdash; concordances, lexicons, interlinear Bibles &mdash; make grammatical analysis accessible to readers without formal training.",
  },
  {
    title: "History: What Was the Situation?",
    color: TEAL,
    text: "Historical context is the situation in which a text was written &mdash; the political, social, religious, and personal circumstances of the author and audience. Paul&rsquo;s letter to the Galatians reads differently when you know it was written in the heat of a crisis about circumcision and the Gentile mission. The book of Revelation reads differently when you know it was written to churches under Roman imperial persecution. Historical context does not relativize the text &mdash; it grounds it. It prevents the reader from importing assumptions from their own context that would distort the author&rsquo;s meaning. Bible dictionaries, Bible atlases, and introduction sections of commentaries are the primary tools for establishing historical context.",
  },
  {
    title: "Genre: What Kind of Literature Is This?",
    color: GREEN,
    text: "Genre is the category of literature a text belongs to, and it determines the rules by which the text should be read. The Bible contains narrative, law, poetry, wisdom literature, prophecy, gospel, epistle, and apocalyptic &mdash; and each genre has its own conventions, expectations, and appropriate reading strategies. Narrative shows rather than tells; it describes events without necessarily endorsing them. Poetry communicates through imagery and parallelism, not primarily propositional argument. Prophecy uses heightened, often symbolic language. Apocalyptic literature (Daniel, Revelation) employs symbolic imagery that was conventional and recognizable in its original context. Reading every genre as though it were didactic prose is the most common hermeneutical error in popular Bible reading.",
  },
  {
    title: "Context: The Paragraph, Chapter, Book, and Canon",
    color: ROSE,
    text: "Context is the supreme rule of interpretation. The immediate context &mdash; the verses before and after a passage &mdash; is the most important contextual level. The chapter and book context situates a passage within its author&rsquo;s argument. The canonical context &mdash; how a passage fits within the whole of Scripture &mdash; is the widest frame. The Reformation principle &ldquo;Scripture interprets Scripture&rdquo; (analogia scripturae) holds that unclear passages should be interpreted in light of clearer ones, and that no doctrine should rest on a single ambiguous text. The canon as a whole provides the framework within which any individual passage receives its fullest meaning.",
  },
  {
    title: "The Principle That Scripture Interprets Scripture",
    color: PURPLE,
    text: "The analogia scripturae &mdash; the analogy of Scripture &mdash; holds that the Bible is its own best interpreter. When a passage is unclear, look for clearer passages that address the same topic. When a doctrine seems to rest on a single ambiguous text, look for the weight of the canonical witness on that doctrine. This principle does not mean every passage can be immediately clarified by another; it means that the whole of Scripture provides the interpretive framework within which parts receive their meaning. It also means that interpretations of individual passages that contradict the clear teaching of other Scripture need to be reexamined. The canon is internally coherent, and apparent contradictions are usually the result of insufficient interpretive work rather than genuine biblical contradiction.",
  },
];

const LITERAL_SECTIONS = [
  {
    title: "Literal vs. Literalistic: A Critical Distinction",
    color: GOLD,
    text: "The confusion between reading literally and reading literalistically is responsible for a significant number of hermeneutical errors. To read literally means to take the text seriously in its intended sense &mdash; which requires knowing what kind of text it is. A literal reading of poetry reads it as poetry. A literal reading of apocalyptic imagery reads it as apocalyptic imagery. A literalistic reading, by contrast, treats every word as plain prose fact regardless of its genre. Literalistic reading is not more faithful to the text &mdash; it is a misreading that imports inappropriate expectations onto the text. A truly literal reading of the Psalms reads them as poems. A literalistic reading treats &ldquo;The LORD is my shepherd&rdquo; as a factual statement about David&rsquo;s occupation.",
  },
  {
    title: "How Genre Changes Reading",
    color: BLUE,
    text: "Genre is not an optional consideration &mdash; it is built into the text itself. Prophecy uses heightened imagery: when Isaiah says the mountains will &ldquo;clap their hands&rdquo; (Isa 55:12), a literalistic reading produces nonsense; a literal reading recognizes this as the exuberant language of eschatological poetry. Psalms is poetry: the emotional, imagistic language of lament or praise is not making the same kind of claim as a doctrinal epistle. Apocalyptic literature &mdash; Daniel and Revelation &mdash; is written in a symbolic idiom that was conventional and recognizable in its original context. Narrative is historical, but the selection and arrangement of historical events to make a theological point is an authorial act that careful readers must notice.",
  },
  {
    title: "The Mustard Seed (Mark 4:31)",
    color: TEAL,
    text: "Jesus&rsquo; description of the mustard seed as &ldquo;the smallest of all seeds on earth&rdquo; (Mark 4:31) is a classic example of how genre and rhetorical context affect interpretation. Botanically, the mustard seed is not the smallest seed that exists. A literalistic reading creates a factual error. A literal reading, attentive to genre &mdash; Jesus is using the conventional wisdom and agricultural knowledge of his Galilean audience in a parable &mdash; recognizes that Jesus is making a comparative point about small beginnings and large outcomes, not providing a botanical classification. The hyperbolic idiom of parabolic teaching is not a genre that invites botanical pedantry. Jesus is communicating kingdom truth through a vivid, culturally familiar image.",
  },
  {
    title: "The Sun Standing Still (Joshua 10)",
    color: GREEN,
    text: "Joshua 10:12&ndash;13 describes the sun standing still during the battle of Gibeon: &ldquo;Sun, stand still over Gibeon.&rdquo; Interpreting this passage requires attending to both its historical nature (Joshua is historical narrative) and its poetic content (verses 12&ndash;13 appear to be a quotation from the Book of Jashar, a now-lost collection of poetic accounts of Israel&rsquo;s battles). The language describes the phenomenon from the perspective of the observer, in the heightened idiom of commemorative poetry. The theological point &mdash; that God fought for Israel in extraordinary ways &mdash; does not depend on a specific cosmological mechanism. This is not a retreat from the text&rsquo;s claim of a miraculous event; it is careful attention to the form in which that event is reported.",
  },
  {
    title: "The Stars Falling (Mark 13:25)",
    color: ROSE,
    text: "Jesus&rsquo; discourse in Mark 13 includes the language &ldquo;the stars will fall from the sky&rdquo; (v.25). This language draws from the prophetic tradition of Isaiah 13:10 and 34:4, where the same imagery describes the judgment of Babylon and Edom respectively &mdash; events that occurred in history without literal astronomical catastrophe. Prophetic and apocalyptic literature uses cosmic imagery &mdash; darkened sun, falling stars, shaking heavens &mdash; as a conventional idiom for the collapse of political and cosmic orders. A literal reading of Mark 13:25, attentive to its prophetic literary heritage, reads this imagery as the announcement of world-changing judgment, not as a prediction of astronomical events. This is not rationalism; it is genre competence.",
  },
  {
    title: "Taking Genre Seriously as Faithfulness",
    color: PURPLE,
    text: "Reading the Bible according to its genres is not a concession to doubt &mdash; it is an act of faithfulness to what God actually gave us. God chose to communicate through poetry, narrative, prophecy, parable, epistle, and apocalyptic. Flattening all of these into a single mode of literal-factual prose disrespects the variety of literary forms God used. It is worth noting that Jesus himself read the Old Testament with genre competence: he distinguished between the letter of the law and its intention (Matthew 5:21&ndash;48), read Psalm 110 as a poetic oracle about the Messiah (Mark 12:35&ndash;37), and used the Psalms&rsquo; language of dereliction from the cross (Mark 15:34). Genre competence is not a modern scholarly innovation; it is the reading strategy of Jesus and the apostles.",
  },
];

const TYPOLOGY_SECTIONS = [
  {
    title: "What Is Typology?",
    color: GOLD,
    text: "Typology is the interpretive principle that certain Old Testament people, events, and institutions genuinely prefigure &mdash; function as types of &mdash; New Testament realities. A type is a real historical person or event that, by divine design, anticipates a greater fulfillment (the antitype). Typology is not allegory: the historical reality of the type is essential. The Passover lamb in Exodus 12 is a real historical event &mdash; the blood of real lambs on real doorposts in real Egypt &mdash; that also prefigures the sacrifice of Christ, the Lamb of God. The prefiguration does not cancel or symbolize away the history; it is grounded in it. Typology is retrospective: the type is recognized as such in light of the antitype.",
  },
  {
    title: "Key Old Testament Types",
    color: BLUE,
    text: "The New Testament authors identify multiple Old Testament types. The Passover prefigures Christ: &ldquo;Christ, our Passover lamb, has been sacrificed&rdquo; (1 Cor 5:7). The Tabernacle and its sacrificial system prefigure Christ&rsquo;s priestly ministry (Hebrews 8&ndash;10): the earthly sanctuary was &ldquo;a copy and shadow of what is in heaven.&rdquo; Adam is a type of Christ: &ldquo;Adam, who is a pattern of the one to come&rdquo; (Rom 5:14), with the contrast between the first and last Adam structuring Paul&rsquo;s entire soteriology. The bronze serpent prefigures the crucifixion (John 3:14). The rock in the wilderness is Christ (1 Cor 10:4). These typological readings are not imposed on the Old Testament by the New Testament authors &mdash; they are argued from the texts.",
  },
  {
    title: "Typology vs. Allegory: A Real Distinction",
    color: TEAL,
    text: "The difference between typology and allegory is the role of history. Typology is grounded in historical events that the New Testament identifies as divinely intended prefigurations. Allegory bypasses or dissolves the historical meaning of a text to find spiritual meanings beneath or behind it. Origen of Alexandria (3rd century) developed an elaborate allegorical method that found spiritual meanings in nearly every detail of the Old Testament narrative &mdash; the color of a cord, the wood of a door &mdash; meanings that the historical narrative did not support. The Reformation rejected Origen&rsquo;s allegorism, insisting that the literal-historical meaning of the text must be established before any figurative meaning is sought. Allegory unconstrained by history produces readings that say more about the interpreter than the text.",
  },
  {
    title: "NT Authors Using Typology: 1 Corinthians 10, Hebrews 8&ndash;10, Galatians 4",
    color: GREEN,
    text: "First Corinthians 10:1&ndash;11 is Paul&rsquo;s extended typological reading of the Exodus: the cloud, the sea, the spiritual food and drink, the rock &mdash; &ldquo;these things happened to them as examples [typoi] and were written down as warnings for us.&rdquo; Hebrews 8&ndash;10 argues that the entire Levitical sacrificial system was a shadow of Christ&rsquo;s once-for-all offering: the tabernacle is a copy, the sacrifices are a pattern, the priests are a type. Galatians 4:21&ndash;31 reads Hagar and Sarah as an allegory of two covenants &mdash; though Paul&rsquo;s use of &ldquo;allegory&rdquo; (allegoroumena) here refers to what we would call typological-analogical reading grounded in the historical narrative of Genesis.",
  },
  {
    title: "Identifying Genuine Types vs. Overreading",
    color: ROSE,
    text: "Not every Old Testament detail is a type of a New Testament reality. The discipline of identifying genuine types requires constraints: a genuine type is identified by the New Testament authors themselves, or is sufficiently analogous to a NT reality that the comparison is structurally significant. The constraints against overreading are: the type must be historically real, the correspondence must be structural rather than incidental, and the antitype must be of greater significance than the type (the direction of fulfillment moves toward Christ). The danger of typological excess &mdash; finding Christ in every detail of every OT narrative &mdash; is that it produces readings as arbitrary as the allegory it was meant to replace. The New Testament authors themselves are the primary guide to legitimate typology.",
  },
];

const SPIRIT_SECTIONS = [
  {
    title: "Illumination vs. Inspiration: A Critical Distinction",
    color: GOLD,
    text: "Two distinct works of the Holy Spirit are often confused in discussions of biblical interpretation. Inspiration refers to the Spirit&rsquo;s work in and through the original authors of Scripture: God &ldquo;breathed out&rdquo; the Scriptures through human authors (2 Tim 3:16; 2 Pet 1:20&ndash;21). This work is complete &mdash; it produced a finished, authoritative canon. Illumination refers to the Spirit&rsquo;s ongoing work in the reader: opening the mind to understand and receive what Scripture says (1 Cor 2:9&ndash;14). Illumination does not produce new revelation; it produces understanding of existing revelation. The Spirit who inspired the text now illumines the reader to understand it. This distinction prevents both the error of denying the Spirit&rsquo;s role in interpretation and the error of claiming private revelations that bypass the text.",
  },
  {
    title: "2 Peter 1:20&ndash;21 and the Communal Nature of Interpretation",
    color: BLUE,
    text: "Second Peter 1:20&ndash;21 states: &ldquo;No prophecy of Scripture comes from someone&rsquo;s own interpretation. For no prophecy was ever produced by the will of man, but men spoke from God as they were carried along by the Holy Spirit.&rdquo; The verse&rsquo;s primary reference is to the origin of Scripture (inspiration), but it has an implication for interpretation: private, individualistic interpretation that bypasses the community of interpretation is as problematic as private prophecy. The Spirit who inspired Scripture operates within the community of readers across time &mdash; the tradition, the councils, the consensus of the church &mdash; as a check on idiosyncratic private readings. This does not mean the church defines Scripture&rsquo;s meaning; it means the community of interpretation is a check on individual error.",
  },
  {
    title: "Does the Spirit Give Interpretations Beyond the Text?",
    color: TEAL,
    text: "A common claim in charismatic and Pentecostal contexts is that the Spirit gives personal interpretations of Scripture that go beyond or supplement what the text grammatically and historically means. The Reformation tradition has consistently resisted this claim, not because it denies the Spirit&rsquo;s role in interpretation, but because it insists that the Spirit&rsquo;s illumination always moves toward the text, not beyond it. John Stott&rsquo;s summary is apt: &ldquo;The Holy Spirit does not reveal to the individual Christian things that contradict what he has already revealed in Scripture.&rdquo; The Spirit illumines what is there; he does not add to it. Claims to Spirit-given interpretations that cannot be grounded in the text&rsquo;s historical and grammatical meaning need to be tested by the community and the canon.",
  },
  {
    title: "Scripture as Its Own Interpreter (Analogia Scripturae)",
    color: GREEN,
    text: "The Reformation principle analogia scripturae &mdash; Scripture is its own interpreter &mdash; holds that the Spirit who inspired the whole of Scripture has ensured its internal coherence. This means that the clearest passages illuminate the obscure ones, that no doctrine rests on a single ambiguous text, and that apparent contradictions between passages are the result of insufficient interpretation rather than genuine biblical contradiction. This principle was the Reformers&rsquo; answer to both the Catholic claim that the Church authoritatively interprets Scripture and the radical claim that the Spirit gives each individual independent access to Scripture&rsquo;s meaning. The Spirit works through the text as a whole, and the whole of Scripture provides the framework within which any part is interpreted.",
  },
  {
    title: "The Canon as Spirit-Guided Boundary",
    color: ROSE,
    text: "The canon &mdash; the collection of books recognized as Scripture &mdash; is itself a work of the Spirit in the community. The church did not create Scripture; it recognized and received what God had given. But the canon-forming process was guided by the Spirit to produce a bounded collection within which legitimate interpretation operates. Interpretation that requires a non-canonical text to make sense, or that elevates the non-canonical over the canonical, has stepped outside the Spirit-guided framework. The canon is the boundary of the Spirit&rsquo;s public speech to the church. This does not mean everything outside the canon is false; it means the canon is the authoritative norm by which all other claims to truth are measured.",
  },
  {
    title: "Community as Guard Against Individualistic Misreading",
    color: PURPLE,
    text: "The Spirit works in the community of interpretation, not only in the individual reader. This is why the church&rsquo;s tradition &mdash; the accumulated interpretation of Scripture across twenty centuries &mdash; is a resource for interpretation rather than a competitor to it. When an individual reader arrives at an interpretation that has never been held by any significant tradition of the church, this should prompt serious re-examination rather than confident proclamation. The consensus of the community does not make an interpretation correct, but it provides a powerful check against the idiosyncratic misreadings that isolated reading produces. The communal dimension of interpretation is not a limitation of the Spirit&rsquo;s work &mdash; it is the primary mode in which the Spirit has chosen to operate.",
  },
];

const VIDEOS = [
  {
    id: "7PfPfMnMQLM",
    title: "BibleProject &mdash; How to Read the Bible",
    color: GOLD,
  },
  {
    id: "kvP4eSRHiuw",
    title: "Gordon Fee on New Testament Hermeneutics",
    color: BLUE,
  },
  {
    id: "xb4HnMDSapA",
    title: "Hermeneutics Overview Lecture",
    color: TEAL,
  },
];

function SectionList({ sections }: { sections: { title: string; color: string; text: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {sections.map((s) => (
        <div
          key={s.title}
          style={{
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
            padding: "1.5rem 1.75rem",
            borderLeft: `4px solid ${s.color}`,
          }}
        >
          <h3 style={{ color: s.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
            {s.title}
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
            dangerouslySetInnerHTML={{ __html: s.text }}
          />
        </div>
      ))}
    </div>
  );
}

export default function ChristianHermeneuticsGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("what");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 5rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span
            style={{
              background: PURPLE + "22",
              color: PURPLE,
              padding: "0.2rem 0.8rem",
              borderRadius: 20,
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Bible &amp; Theology
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
            fontWeight: 900,
            lineHeight: 1.2,
            margin: "0.75rem 0 0.75rem",
          }}
        >
          Christian Hermeneutics Guide
        </h1>

        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: 660,
            margin: "0 0 2rem",
          }}
        >
          Hermeneutics is not just for scholars &mdash; every time you read the Bible, you are
          interpreting it. The question is whether you are interpreting it well. This guide covers
          the principles that produce faithful, historically-grounded, Spirit-illumined reading of
          Scripture across the distance of culture, language, and time.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                borderColor: tab === t.id ? PURPLE : BORDER,
                background: tab === t.id ? PURPLE + "22" : "transparent",
                color: tab === t.id ? PURPLE : MUTED,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "what" && <SectionList sections={WHAT_SECTIONS} />}
        {tab === "grammatical" && <SectionList sections={GRAMMATICAL_SECTIONS} />}
        {tab === "literal" && <SectionList sections={LITERAL_SECTIONS} />}
        {tab === "typology" && <SectionList sections={TYPOLOGY_SECTIONS} />}
        {tab === "spirit" && <SectionList sections={SPIRIT_SECTIONS} />}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.5rem" }}>
              Videos
            </h2>
            {VIDEOS.map((v) => (
              <div key={v.id}>
                <div
                  style={{
                    color: v.color,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    marginBottom: "0.5rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: v.title }}
                />
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
