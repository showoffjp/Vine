"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "views" | "implications" | "distortion" | "videos";

const THEOLOGY_ITEMS = [
  {
    id: "t1",
    title: "The Textual Foundation",
    body: "Genesis 1:26-28 is the locus classicus: 'Then God said, Let us make mankind in our image (tselem), in our likeness (demut).' These two Hebrew words are near-synonyms stressing correspondence and representation. In ancient Near Eastern (ANE) royal theology, only the king was the image of the gods — the divine representative who ruled in the gods' name. What Genesis does is radically democratize this: every human being, not just the monarch, bears this royal-priestly status. The text places this declaration in the context of the sixth day of creation and immediately connects it to the mandate to 'have dominion' — framing the image as both a status conferred and a vocation assigned.",
  },
  {
    id: "t2",
    title: "The Fall and the Image",
    body: "Did the Fall destroy, damage, or merely distort the image? Genesis 9:6, written after the Fall and the Flood, still grounds the prohibition on murder in the image: 'for in the image of God has God made mankind.' The image was not annihilated. James 3:9 rebukes cursing 'people who have been made in God's likeness' — still valid after centuries of human sin. Reformed theology tends to speak of the image as structurally intact but functionally distorted (Calvin's 'dreadful deformity'). Roman Catholic theology distinguishes the natural image (reason, will — damaged) from the supernatural similitude (righteousness — lost at the Fall and restored only by grace). Both traditions agree: the image was not erased, but nothing remained unaffected.",
  },
  {
    id: "t3",
    title: "Christ as the Perfect Image",
    body: "Colossians 1:15 calls Jesus 'the image (eikon) of the invisible God, the firstborn over all creation.' 2 Corinthians 4:4 repeats the title. Hebrews 1:3 adds that he is 'the exact representation (charakter) of his being.' These texts are not merely saying Jesus resembles God — they are identifying him as the one in whom the very nature of God is expressed and made visible. Jesus is the true human: what humanity was made to be, he is. He does not merely model the image; he is the image. The incarnation is therefore not an emergency rescue operation but the fulfillment of creation's purpose — the Image of God becoming a visible, embodied, relational human person.",
  },
  {
    id: "t4",
    title: "Restoration of the Image",
    body: "The New Testament describes salvation as the restoration of the image distorted by sin. Romans 8:29: 'to be conformed to the image of his Son.' 2 Corinthians 3:18: 'we all...are being transformed into the same image from one degree of glory to another.' Colossians 3:10: 'the new self...is being renewed in knowledge after the image of its creator.' The direction is clear: sanctification is imago restoration. We are becoming what we were made to be. The goal is not escape from humanity but the recovery and perfection of it — a humanity fully reflecting the character and purposes of its Creator, as seen definitively in Christ.",
  },
  {
    id: "t5",
    title: "The Universal Image and Human Dignity",
    body: "Every human being — regardless of cognitive capacity, moral achievement, ethnicity, age, physical ability, or social standing — bears the image of God. This is the theological ground for universal human dignity and the foundation on which any coherent account of human rights must rest. Genesis 9:6 grounds the prohibition on murder in the image. 1 Peter 2:17 commands: 'Honor everyone.' James 3:9-10 makes the logical connection explicit: you cannot worship God while despising image-bearers. This is not a philosophical claim about human nature — it is a theological claim about God's creative act. Human dignity is not earned, developed, or voted on. It is given.",
  },
  {
    id: "t6",
    title: "The Corporate Image",
    body: "The image of God in Genesis 1:27 is given to humanity as a collective: 'male and female he created them.' The singular image is borne by a plural humanity. In the New Testament, the church is described as the new humanity bearing the image together — the body of Christ in whom the image is being collectively renewed. Ephesians 4:24 speaks of putting on 'the new self, created after the likeness of God.' This corporate renewal reaches its completion in the eschaton: 1 John 3:2 says 'we shall be like him, for we shall see him as he is.' The final image is not isolated individual souls but a community perfectly reflecting God's character — the new Jerusalem, the bride of Christ, humanity perfected.",
  },
];

const VIEWS = [
  {
    id: "substantive",
    label: "Substantive View",
    keyClaim: "The image consists of something in humans — a quality, capacity, or attribute that resembles God. Most commonly: reason, moral conscience, spiritual awareness, language, or the capacity for self-transcendence.",
    proponents: "Augustine, Thomas Aquinas, much of the medieval tradition, and many Protestant scholastics.",
    scripture: "The implicit reasoning is that Scripture distinguishes humans from animals by their rationality and moral capacity. Romans 1:19-20 suggests humans have innate knowledge of God.",
    historicalNote: "This view dominated Western theology from Augustine through the Reformation. The fall was seen as damaging or destroying the substantive quality (depending on Catholic vs. Protestant readings). The Reformation debate over the extent of fall-damage partly concerned which substantive qualities remained.",
    problem: "The main difficulty is locating the image precisely. If it is reason, what about the profoundly cognitively disabled? If it is morality, what about the morally depraved? The substantive view risks making the image contingent on a capacity that sin or disability can diminish.",
  },
  {
    id: "relational",
    label: "Relational View",
    keyClaim: "The image is not a thing in us but the relationship between God and humans — and between humans and each other. The image is the capacity for I-Thou encounter, not an inner substance.",
    proponents: "Karl Barth (Church Dogmatics III/1), Emil Brunner, and much of 20th-century dialectical theology.",
    scripture: "Genesis 1:27 emphasizes 'male and female he created them' immediately after announcing the image — suggesting the image is constituted in relationship. Barth read the male-female pair as the creaturely analog of the divine self-relation.",
    historicalNote: "The relational view arose partly as a corrective to liberal theology's reduction of the image to human rationality, and partly in response to the horrors of World War II — which showed that rational beings could perpetrate atrocities. The image could not be mere intellect if intellect could serve genocide.",
    problem: "If the image IS relationship, and sin disrupts relationship, is the image entirely lost in the unredeemed? Barth handled this by distinguishing the formal image (the structure of address and response) from the material image (right relationship) — the former remains, the latter is restored in Christ.",
  },
  {
    id: "functional",
    label: "Functional View",
    keyClaim: "The image is what humans DO: rule, steward, and represent God on earth. The image is a royal-priestly vocation, not a metaphysical quality. Humans are image-bearers because they function as God's vice-regents in creation.",
    proponents: "John Walton, Christopher Wright, Richard Middleton, and most Old Testament scholars working with ANE backgrounds.",
    scripture: "Genesis 1:26-28 links the image directly to 'have dominion' and 'rule.' In ANE context, a king would erect a statue (tselem) of himself in territories he ruled as a sign of his presence and authority. Humans are God's living statues in creation.",
    historicalNote: "The functional view has risen sharply since the mid-20th century as OT scholars recovered the ANE background. It has the strongest contextual support in Genesis 1 itself. It is now the dominant view in academic Old Testament studies, though systematic theologians often combine it with substantive and relational elements.",
    problem: "If the image is purely functional (ruling, working), what does it mean for those who cannot exercise such functions — infants, the severely disabled, the comatose? The image cannot be reduced to function without undermining its role as the ground of universal human dignity.",
  },
  {
    id: "synthesis",
    label: "Multidimensional Synthesis",
    keyClaim: "We ARE something (substantive), we ARE IN RELATIONSHIP (relational), and we DO something (functional) as image-bearers. The three views are complementary dimensions of a single reality, not competing theories.",
    proponents: "Anthony Hoekema ('Created in God's Image'), G.K. Beale ('A New Testament Biblical Theology'), J. Richard Middleton (who combines functional with structural), and most contemporary evangelical systematic theologians.",
    scripture: "The full biblical witness encompasses all three: Genesis 1 emphasizes function; the prophets and New Testament emphasize right relationship with God; the wisdom literature emphasizes the rational and moral capacities that distinguish humans. 2 Corinthians 3:18 and Colossians 3:10 add the eschatological dimension of progressive renewal.",
    historicalNote: "The synthesis position has become the consensus in evangelical theology since the 1980s. It retains the exegetical gains of the functional view (ANE background), the theological depth of the substantive view (grounding dignity in what humans are, not just what they do), and the personal richness of the relational view (the image as encounter, not merely equipment).",
    problem: "The synthesis raises the question of which dimension is primary. Most synthesis theologians argue the functional dimension is contextually primary in Genesis 1, while the substantive and relational dimensions provide the capacity and context that make the function possible.",
  },
];

const IMPLICATIONS_ITEMS = [
  {
    id: "i1",
    title: "Human Dignity and Rights",
    body: "The imago Dei is the deepest theological ground for universal human rights. If every human being — regardless of race, ability, age, social status, or moral condition — bears God's image, then every human being possesses an inalienable dignity that no state, culture, or individual can legitimately remove. This is why William Wilberforce could insist that enslaved Africans were fully human when the culture around him denied it. It is why Mother Teresa saw Christ's face in the dying poor of Calcutta. It is why the unborn child, the elderly patient with dementia, and the prisoner on death row all command protection. Human dignity is not a philosophical inference — it is a theological declaration grounded in God's creative act.",
  },
  {
    id: "i2",
    title: "Human Creativity and Culture",
    body: "If God is the Creator and humans bear his image, then human creativity is a form of imaging God — bringing order out of chaos, beauty into raw matter, meaning into experience. J.R.R. Tolkien called this 'sub-creation': humans are not creators ex nihilo, but they genuinely make things that were not there before, reflecting the creative character of the God in whose image they are made. His essay 'On Fairy-Stories' develops this theological aesthetics. Andy Crouch's 'Culture Making' builds on it: Christians are not primarily culture-critics or culture-warriors but culture-makers, participating in the ongoing work of bringing forth from creation what God put there to be discovered. Art, music, language, mathematics, science, cooking — all are expressions of the image.",
  },
  {
    id: "i3",
    title: "Vocation and Work",
    body: "The creation mandate (Genesis 1:28) — 'fill the earth and subdue it' — was given before the Fall. Work is not a consequence of sin; it is an expression of the image. Every legitimate vocation participates in the mandate to steward and develop creation. The farmer, the engineer, the teacher, the nurse, the artist, the parent: all are exercising the image in their domain. This is the theological ground for what Lutherans call the 'priesthood of all believers' in relation to vocation — there is no secular work that falls outside the scope of the image-bearing mandate. The spiritual significance of 'secular' work is not added to it from outside; it is inherent in the nature of what work is.",
  },
  {
    id: "i4",
    title: "Gender and the Image",
    body: "Genesis 1:27 is remarkable: 'So God created mankind in his own image, in the image of God he created them; male and female he created them.' The image is given to a sexually differentiated humanity. Both sexes equally and fully bear the image — there is no suggestion that one sex is more fully image-bearing than the other. This has implications for both complementarian and egalitarian positions: whatever their differences about roles, both traditions affirm the equal dignity of men and women as image-bearers. The image includes embodied sexuality — humans are not souls temporarily inhabiting bodies but embodied persons whose sexuality is part of how they bear the image in the world.",
  },
  {
    id: "i5",
    title: "Disability and the Image",
    body: "The image of God is not contingent on intellectual, physical, emotional, or relational capacity. It is given by God's creative act, not earned by human function. This is the theological correction to any view that implicitly or explicitly ties human worth to capability. Amos Yong's disability theology ('Theology and Down Syndrome') argues that the disabled reveal dimensions of the image that the non-disabled overlook: dependence, receptivity, vulnerability, and the irreducibility of the person to their productive output. The severely cognitively disabled person is not a diminished image-bearer — they bear the image fully, and they reveal aspects of God's character that our performance-oriented culture suppresses.",
  },
  {
    id: "i6",
    title: "Environment and the Image",
    body: "The functional view of the image grounds a theology of environmental stewardship. Humans are not owners of creation but image-bearers placed within it to rule on God's behalf — which means ruling as God would rule: with care, wisdom, and regard for the flourishing of all creatures. Genesis 2:15 says humans were placed in the garden 'to work it and keep it' — not to exploit it. The image-bearing mandate includes the responsibility to care for what God made and called good. Environmental theology rooted in the imago Dei is not a capitulation to secular environmentalism — it is fidelity to the creation mandate. Ecological destruction is a failure of image-bearing.",
  },
];

const DISTORTION_ITEMS = [
  {
    id: "d1",
    title: "Individualism",
    body: "Modern Western culture has reduced the image of God to 'my individual soul' — a private, interior, autonomous self that relates to God apart from community and creation. This loses the corporate dimension of the image (male and female, a humanity together), the relational dimension (the image constituted in encounter), and the functional dimension (a vocation that is inherently communal). The Enlightenment produced a self-sufficient individual who is the measure of his own value — a distortion that makes community optional and creation merely a resource. The biblical image-bearer is constitutively communal, relational, and embedded in a creation for which they are responsible.",
  },
  {
    id: "d2",
    title: "Racism",
    body: "Racism is the theological claim that some image-bearers are less than fully human — that certain ethnic groups do not fully bear the image and therefore do not deserve full human treatment. This is not merely a moral failure; it is a theological heresy. It contradicts Genesis 1, Genesis 9, Acts 17:26 ('from one man he made all the nations'), and the vision of Revelation 7:9 (every tribe, tongue, and nation before the throne). Jemar Tisby's 'The Color of Compromise' documents the American church's complicity in this distortion. Repentance requires not merely rejecting racist attitudes but actively dismantling the theological and institutional structures that enabled them.",
  },
  {
    id: "d3",
    title: "Objectification",
    body: "To objectify a person is to treat them as a means to an end — as an instrument for your pleasure, labor, profit, or convenience — rather than as an end in themselves. Kant's categorical imperative ('act so as to treat humanity never merely as means but always also as ends') has deep resonance with the imago Dei, though Kant's ground is reason rather than theology. Sexual objectification reduces persons to their bodies and desires. Economic exploitation reduces persons to their productive capacity. Consumer culture turns persons into market segments. Each of these is a form of image-denial — a refusal to see the image of God in the person being used.",
  },
  {
    id: "d4",
    title: "Ableism",
    body: "Ableism is the functional view of the image taken to its extreme: those who cannot perform certain cognitive, physical, or social functions are implicitly treated as less than fully human. It is the logic that says a person's worth is proportional to their capacity. When prenatal testing leads to the elimination of children with Down syndrome, or when end-of-life care is driven by quality-of-life assessments that presuppose the less able are less valuable, the imago Dei is being denied. The theological correction is not sentimentality but conviction: the image is given, not achieved. Its ground is God's declaration, not human capability. Dependence and limitation are not defects in the image — they are part of what it means to be a creature.",
  },
  {
    id: "d5",
    title: "Consumerism",
    body: "Consumerism offers a rival anthropology: you are what you buy, consume, and display. Your identity is constructed through brand loyalty, lifestyle choice, and the curation of experiences. This is the anti-imago: instead of finding your identity in being addressed and named by God, you find it in the market. Instead of bearing the image outward in vocation and relationship, you turn inward to construct a self through consumption. The church's countercultural witness is not to asceticism for its own sake but to the recovery of identity rooted in being known by God — an identity that cannot be purchased, curated, or cancelled.",
  },
  {
    id: "d6",
    title: "Technological Reductionism",
    body: "The transhumanist project dreams of uploading consciousness to digital substrates, escaping biological limitation, and achieving a kind of technological immortality. The materialist reduction underlying this project treats the person as data — patterns of information that happen to be running on biological hardware. But the Christian understanding of the image insists on the irreducibility of the embodied, relational, God-addressed person. You are not your data. You are not your neural patterns. You are a creature made in the image of the living God — which means your personhood is constituted by a relationship that cannot be digitized, uploaded, or replicated. The Christian answer to transhumanism is not Luddism but resurrection: the hope is not escape from the body but the redemption of it.",
  },
];

function AccordionItem({
  id,
  title,
  body,
  expanded,
  onToggle,
}: {
  id: string;
  title: string;
  body: string;
  expanded: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  const open = !!expanded[id];
  return (
    <div
      style={{
        background: CARD,
        border: `1px solid ${open ? PURPLE : BORDER}`,
        borderRadius: 12,
        marginBottom: 12,
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      <button type="button"
        onClick={() => onToggle(id)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 22px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 12,
        }}
      >
        <span style={{ color: TEXT, fontWeight: 700, fontSize: 16 }}>{title}</span>
        <span
          style={{
            color: open ? GREEN : MUTED,
            fontSize: 20,
            lineHeight: 1,
            flexShrink: 0,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 22px 20px" }}>
          <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}>{body}</p>
        </div>
      )}
    </div>
  );
}

export default function ImageOfGodPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_image-of-god_tab", "theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedView, setSelectedView] = usePersistedState("vine_image-of-god_selected_view", "substantive");

  function toggleAccordion(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const currentView = VIEWS.find((v) => v.id === selectedView) ?? VIEWS[0];

  const TABS: { id: Tab; label: string }[] = [
    { id: "theology", label: "Theology of the Imago Dei" },
    { id: "views", label: "Three Views on the Imago" },
    { id: "implications", label: "Implications" },
    { id: "distortion", label: "Distortions of the Image" },
    { id: "videos", label: "🎬 Videos" },
  ];

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        color: TEXT,
        fontFamily: "system-ui, -apple-system, sans-serif",
        paddingTop: 80,
      }}
    >
      <Navbar />
      <main>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 900,
              color: TEXT,
              marginBottom: 12,
              letterSpacing: "-0.5px",
            }}
          >
            The Image of God
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 620,
              margin: "0 auto",
            }}
          >
            Imago Dei -- the declaration that every human being is made in the image and likeness of
            God -- is the theological foundation of human dignity, the ground of ethics, and the
            lens through which Scripture reads both creation and redemption.
          </p>
        </div>

        {/* Tab Bar */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 36,
            background: CARD,
            borderRadius: 14,
            padding: 6,
            border: `1px solid ${BORDER}`,
            overflowX: "auto",
          }}
        >
          {TABS.map((t) => (
            <button type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: "1 1 auto",
                padding: "10px 14px",
                borderRadius: 10,
                border: "none",
                background: activeTab === t.id ? PURPLE : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.15s, color 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology */}
        {activeTab === "theology" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 24,
              }}
            >
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                The doctrine of the imago Dei spans the whole biblical narrative -- from the first
                declaration of creation to the final vision of the new Jerusalem. These {THEOLOGY_ITEMS.length} topics
                trace the full arc of the image: given, damaged, fulfilled in Christ, restored in
                believers, and completed in the new humanity.
              </p>
            </div>
            {THEOLOGY_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                expanded={expanded}
                onToggle={toggleAccordion}
              />
            ))}
          </div>
        )}

        {/* Tab 2: Views */}
        {activeTab === "views" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 24,
              }}
            >
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                Theologians have proposed three main interpretations of what the image of God
                consists in -- and a fourth synthesis that draws on all three. Select a view to
                explore its key claim, proponents, scriptural basis, historical development, and
                central difficulty.
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {/* Left: view list */}
              <div style={{ flex: "0 0 220px", display: "flex", flexDirection: "column", gap: 8 }}>
                {VIEWS.map((v) => (
                  <button type="button"
                    key={v.id}
                    onClick={() => setSelectedView(v.id)}
                    style={{
                      padding: "13px 16px",
                      borderRadius: 10,
                      border: `1px solid ${selectedView === v.id ? GREEN : BORDER}`,
                      background: selectedView === v.id ? `${GREEN}12` : CARD,
                      color: selectedView === v.id ? GREEN : MUTED,
                      fontWeight: 700,
                      fontSize: 14,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.15s",
                    }}
                  >
                    {v.label}
                  </button>
                ))}
              </div>

              {/* Right: detail */}
              <div
                style={{
                  flex: "1 1 340px",
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 26,
                  minWidth: 0,
                }}
              >
                <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 18, marginTop: 0 }}>
                  {currentView.label}
                </h2>

                <div style={{ marginBottom: 18 }}>
                  <div
                    style={{
                      color: PURPLE,
                      fontWeight: 700,
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      marginBottom: 6,
                      textTransform: "uppercase",
                    }}
                  >
                    Key Claim
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    {currentView.keyClaim}
                  </p>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <div
                    style={{
                      color: PURPLE,
                      fontWeight: 700,
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      marginBottom: 6,
                      textTransform: "uppercase",
                    }}
                  >
                    Proponents
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    {currentView.proponents}
                  </p>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <div
                    style={{
                      color: PURPLE,
                      fontWeight: 700,
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      marginBottom: 6,
                      textTransform: "uppercase",
                    }}
                  >
                    Scripture Basis
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    {currentView.scripture}
                  </p>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <div
                    style={{
                      color: PURPLE,
                      fontWeight: 700,
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      marginBottom: 6,
                      textTransform: "uppercase",
                    }}
                  >
                    Historical Note
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    {currentView.historicalNote}
                  </p>
                </div>

                <div
                  style={{
                    background: `${PURPLE}12`,
                    border: `1px solid ${PURPLE}30`,
                    borderRadius: 10,
                    padding: "14px 16px",
                  }}
                >
                  <div
                    style={{
                      color: PURPLE,
                      fontWeight: 700,
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      marginBottom: 6,
                      textTransform: "uppercase",
                    }}
                  >
                    Central Difficulty
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    {currentView.problem}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Implications */}
        {activeTab === "implications" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 24,
              }}
            >
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                The imago Dei is not merely a doctrine to affirm -- it is a reality to live from.
                These {IMPLICATIONS_ITEMS.length} areas show how the image of God reshapes ethics, culture, vocation, and
                the church's engagement with the world.
              </p>
            </div>
            {IMPLICATIONS_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                expanded={expanded}
                onToggle={toggleAccordion}
              />
            ))}
          </div>
        )}

        {/* Tab 4: Distortions */}
        {activeTab === "distortion" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 24,
              }}
            >
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                Every age produces its own ways of denying, distorting, or suppressing the image of
                God in human beings. These {DISTORTION_ITEMS.length} distortions are not merely cultural errors -- they
                are theological failures with real human costs.
              </p>
            </div>
            {DISTORTION_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                expanded={expanded}
                onToggle={toggleAccordion}
              />
            ))}
          </div>
        )}
        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Sermons, lectures, and teachings from trusted Christian scholars and pastors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { videoId: "CN96ct3vDGU", title: "Created in God's Image", channel: "John Piper / Desiring God", description: "Piper unpacks Genesis 1:26-28 — what it means that every human being is made in the image of God, and why this is the foundation of human dignity." },
                  { videoId: "XO_grEhvezw", title: "Imago Dei", channel: "Matt Chandler", description: "Chandler preaches on Genesis 1:24-31 — the theological significance of humanity as image-bearers of God and the implications for how we see every person." },
                  { videoId: "mhA4LsexMrQ", title: "Imago Dei: Made in the Image of God", channel: "Christian Teaching", description: "A clear theological presentation of the doctrine of the imago Dei — its biblical foundation, its historical interpretation, and its contemporary application." },
                  { videoId: "4XwRaIuxJ_U", title: "Image of God and Christian Political Engagement", channel: "Faith & Flourishing Sermon Series", description: "How the imago Dei reshapes Christian engagement with politics and public life — seeing every person as image-bearer regardless of their view or status." },
                ].map(v => (
                  <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                      src={`https://www.youtube.com/embed/${v.videoId}`}
                      title={v.title}
                      allowFullScreen
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{v.title}</h4>
                      <p style={{ color: PURPLE, fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{v.channel}</p>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}
