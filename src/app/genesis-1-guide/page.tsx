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
  "In the Beginning God",
  "Let There Be Light",
  "God Created the Heavens",
  "The Image of God",
  "God Saw That It Was Good",
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
    id: "In the Beginning God",
    heading: "In the Beginning God",
    reference: "Genesis 1:1",
    paragraphs: [
      "The opening words of the Bible are not a casual introduction but a theological declaration of the highest order: &ldquo;In the beginning, God created the heavens and the earth&rdquo; (Genesis 1:1). Before a single creature breathed, before light split the darkness, before time itself had a pulse &mdash; God was. The text does not argue for God&rsquo;s existence; it assumes it with serene confidence. The Creator is not one actor among many in a cosmic drama. He is the one from whom all drama flows.",
      "The phrase &ldquo;in the beginning&rdquo; carries enormous weight that the ancient reader would have felt immediately. In the ancient Near East, rival creation accounts &mdash; Enuma Elish, the Egyptian cosmogonies &mdash; presented creation as the byproduct of conflict between gods, or as the fashioning of pre-existent chaotic matter. Genesis cuts against every such account. There is no conflict, no pre-existent rival, no limiting material. God speaks and it comes to be. The universe is not a battlefield; it is a gift.",
      "John&rsquo;s Gospel opens with a deliberate echo of Genesis 1:1: &ldquo;In the beginning was the Word, and the Word was with God, and the Word was God&rdquo; (John 1:1). The New Testament insists that the agent of creation was the Son, the eternal Word. Colossians 1:16 extends the claim: &ldquo;by him all things were created, in heaven and on earth, visible and invisible.&rdquo; What Genesis presents as the act of God the Father, the New Testament reveals was the act of the Triune God &mdash; Father creating, the Spirit hovering, the Word speaking. Genesis 1 is not a lonely monotheist&rsquo;s account; it is a seed of Trinitarian revelation.",
      "Hebrew theology drew a sharp line between creation ex nihilo &mdash; creation out of nothing &mdash; and any form of emanation or rearrangement. God did not shape the universe from pre-existing materials as a potter shapes clay from earth that was already there. He called into existence things that did not exist (Romans 4:17). This is not a peripheral doctrine but the foundation of everything: if God created all things from nothing, then he owes nothing to creation, is dependent on nothing outside himself, and stands in absolute sovereignty over every atom of the universe. His authority over his creatures is not a claim that must be contested but a fact written into the structure of reality.",
      "Genesis 1 is also answering a question that modern readers sometimes bring to it &mdash; but it is not the question &ldquo;how did the universe come to be in its material mechanics?&rdquo; The text is supremely interested in the &ldquo;who&rdquo; and the &ldquo;why.&rdquo; Who is behind this vast and teeming world? It is the God of Israel, and no other. Why does anything exist at all? Because a free and generous God willed to share the good of existence with creatures he would make. Science and Genesis are not competing answers to the same question; they are answers to different questions, and both deserve to be heard on their own terms.",
      "The name used for God in the opening chapter is &ldquo;Elohim,&rdquo; a majestic plural form that does not imply polytheism but communicates the fullness and grandeur of the divine being. He is the God of power, the God of armies, the transcendent one whose very speech carries creative force. Yet this same God, at the end of chapter 1, makes man and woman in his own image and blesses them. Power and intimacy, transcendence and nearness &mdash; the opening chapter holds these in a creative tension that the rest of Scripture will spend two thousand years unpacking.",
    ],
  },
  {
    id: "Let There Be Light",
    heading: "Let There Be Light",
    reference: "Genesis 1:2&ndash;13",
    paragraphs: [
      "Before God speaks his first creative word, Genesis paints a picture of the unformed state: &ldquo;The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters&rdquo; (1:2). This is not a picture of a rival chaos that God must overcome, but of an unready canvas that God is about to fill. The Hebrew &ldquo;tohu wabohu&rdquo; &mdash; formless and empty &mdash; describes an earth that is not yet inhabitable, not yet organized. The six days of creation are the story of God giving it form and then filling it.",
      "The first creative word changes everything: &ldquo;Let there be light&rdquo; (1:3). And light comes into being. This single sentence is one of the most profound in all of Scripture. God speaks, and reality bends to his word. There is no struggle, no effort, no process of labor. The will of God expressed in speech is sufficient to bring light where there was none. The rabbis and the church fathers both marveled at this: creation by fiat, by divine decree, stands unique in all the literature of the ancient world.",
      "One feature of day one has puzzled readers for centuries: God creates light on the first day, yet the sun, moon, and stars do not appear until the fourth day. Liberal critics have sometimes used this as evidence of careless compilation. But the order is profoundly intentional. Genesis is making a theological point of the highest importance: light is not the sun. The ultimate source of light is not any created body but God himself. The sun is a lamp that God later appoints to govern the day; the light that existed before the sun came from a divine source that the book of Revelation revisits when it says that in the new Jerusalem &ldquo;the city has no need of sun or moon to shine on it, for the glory of God gives it light, and its lamp is the Lamb&rdquo; (Revelation 21:23). Day one anticipates that eternal reality.",
      "God then separates light from darkness and names them day and night. The act of naming in the ancient world was an act of sovereignty. When God names the light and the darkness, the day and the night, he is declaring that these are his &mdash; that he governs them, that time itself is under his hand. The first &ldquo;evening and morning&rdquo; closes day one, establishing the rhythmic structure of time that will govern all of human existence: work within the frame of days, and rest at appointed intervals.",
      "Day two sees God separate the waters above from the waters below by an expanse &mdash; the firmament or sky. Day three brings the dry land out of the gathered waters, producing seas and earth, and God commands the earth to bring forth vegetation: plants yielding seed and trees bearing fruit. Three times on day three the text records God&rsquo;s evaluation: &ldquo;And God saw that it was good.&rdquo; The pattern of divine speech, created reality, and divine affirmation of goodness forms the liturgical backbone of the whole chapter. Creation is not a mistake, not a tragedy, not morally ambiguous. It is &ldquo;good&rdquo; &mdash; functional, ordered, and pleasing to its Maker.",
      "The first three days, then, address the formlessness of the original earth by providing three realms: light/darkness, waters above/waters below, and sea/dry land. These realms await their inhabitants. The second set of three days will fill those realms, but first the stage must be set. The structure is not accidental; it reflects the mind of an artist and architect who conceives the whole before executing any part. Genesis 1 presents creation as the act of a God who thinks, who plans, who brings order out of emptiness because order is a reflection of his own nature.",
    ],
  },
  {
    id: "God Created the Heavens",
    heading: "God Created the Heavens",
    reference: "Genesis 1:14&ndash;25",
    paragraphs: [
      "Days four through six fill the realms prepared in days one through three. Day four is among the most theologically charged: &ldquo;And God said, &lsquo;Let there be lights in the expanse of the heavens to separate the day from the night. And let them be for signs and for seasons, and for days and years&rsquo;&rdquo; (1:14). The sun, moon, and stars appear &mdash; not as deities, not as forces to be appeased, but as servants appointed to function. The Hebrew text deliberately avoids the names &ldquo;sun&rdquo; and &ldquo;moon,&rdquo; calling them &ldquo;the greater light&rdquo; and &ldquo;the lesser light.&rdquo; In the ancient world these bodies were among the most worshiped of all things. Genesis demotes them to lamps.",
      "This is not a small point. Egypt worshiped Ra; Babylon worshiped Sin and Shamash. The entire pagan religious landscape was structured around the veneration of natural forces, and the sun and moon stood at the summit. Into this world, Genesis declares: these are not gods. They do not hold the fates of men. They are created things, given their places by the one true God, who sets them as lights in the sky and moves on to other things. The theological assault on ancient polytheism is quiet but total. The very objects of pagan worship become mere instruments of divine administration.",
      "Day five fills the sea and sky: &ldquo;Let the waters swarm with swarms of living creatures, and let birds fly above the earth across the expanse of the heavens&rdquo; (1:20). For the first time in the creation account, the word &ldquo;bless&rdquo; appears: &ldquo;And God blessed them, saying, &lsquo;Be fruitful and multiply and fill the waters in the seas, and let birds multiply on the earth&rsquo;&rdquo; (1:22). The blessing is not merely an expression of goodwill; it is a creative endowment. God grants the living creatures the capacity to reproduce, to continue the work of filling and multiplying. Life is self-propagating not by accident but by divine gift.",
      "The text also mentions the &ldquo;great sea creatures&rdquo; &mdash; in Hebrew, the &ldquo;tanninim.&rdquo; In other ancient texts, the great sea monsters were figures of chaos, feared and sometimes worshiped. In Genesis they are simply creatures that God made. The great deep, which once hovered over the unformed earth as a potential symbol of chaos, now teems with creatures that God made and blessed. The ocean is not fearful chaos but teeming with the handiwork of God.",
      "Day six brings the land animals and, climactically, humanity. &ldquo;And God said, &lsquo;Let the earth bring forth living creatures according to their kinds &mdash; livestock and creeping things and beasts of the earth according to their kinds.&rsquo; And it was so&rdquo; (1:24). The diversity of life on the land &mdash; domestic animals, wild animals, creatures that move along the ground &mdash; reflects the creative extravagance of a God who did not have to make one kind of creature, let alone millions. Multiplicity in creation is a sign not of disorder but of divine generosity.",
      "Each kind reproduces &ldquo;according to its kind&rdquo; &mdash; a phrase repeated ten times in Genesis 1. This insistence on kinds signals that creation has an inherent order and differentiation. Diversity and distinction are not flaws in the created order but features. The variety of living things is not a problem to be reduced to uniformity but a glory to be celebrated. The God who made this world is a God of creative abundance, who delights in the multiplicity of forms through which life can be expressed.",
    ],
  },
  {
    id: "The Image of God",
    heading: "The Image of God",
    reference: "Genesis 1:26&ndash;28",
    paragraphs: [
      "The creation of humanity is marked by a pause in the divine speech, a deliberate shift in register: &ldquo;Then God said, &lsquo;Let us make man in our image, after our likeness&rsquo;&rdquo; (1:26). This is the only moment in the six days when God deliberates &mdash; or at least expresses his creative intent in first-person plural. Every other creative act is spoken directly into being; this one is introduced by a kind of divine counsel. The &ldquo;us&rdquo; has generated immense discussion: is it a plural of majesty? A heavenly council? A Trinitarian hint? The text does not resolve the question explicitly, but later Christian reading finds here the first whisper of the plurality-in-unity that the New Testament will reveal as the Trinity.",
      "The phrase &ldquo;image of God&rdquo; &mdash; imago Dei in Latin &mdash; is the theological center of what it means to be human. In the ancient world, the &ldquo;image&rdquo; of a god was typically a statue placed in a temple, representing the god&rsquo;s presence and authority in that location. Kings in Egypt and Mesopotamia were called the image of their patron deity, meaning they ruled as divine representatives. When Genesis says that all human beings are made in the image of God, it is doing something radical: it democratizes royal theology. Every person &mdash; not just pharaohs and kings &mdash; bears the divine image. Every human being is a representative of God, placed in creation to display his character and exercise his delegated authority.",
      "The image of God is not primarily about physical appearance. It is relational, functional, and moral. Relationally, it means human beings are made for communion with God &mdash; we alone among creatures are addressed by God, are called to respond to him, are built for a &ldquo;face-to-face&rdquo; relationship with our Creator. Functionally, it means we are endowed with reason, creativity, language, moral judgment, and the capacity to govern &mdash; capacities that reflect God&rsquo;s own attributes in a creaturely mode. Morally, it means we are created with the capacity for righteousness, designed to reflect the holiness and love of God in our relationships with one another and with creation.",
      "The implications of imago Dei for human dignity are staggering, and the church has barely begun to exhaust them. If every human being bears the image of God, then every human life has inherent and equal worth &mdash; not derived from productivity, usefulness, race, age, ability, or social standing, but from the sheer fact of being made by God to reflect him. This is the theological ground for the Christian conviction that the vulnerable, the weak, the unborn, the elderly, the disabled, the immigrant, and the prisoner all possess inviolable dignity. To harm or despise any human being is to strike at the image of God.",
      "Genesis 1:27 adds a further dimension: &ldquo;So God created man in his own image, in the image of God he created him; male and female he created them.&rdquo; The image of God is expressed in the diversity of male and female. Neither the man alone nor the woman alone fully images God; together, in their difference and complementarity, they reflect something of the relational fullness of God himself. The fact that sexual differentiation is introduced within the account of the imago Dei is significant: maleness and femaleness are not accidental features of humanity but intrinsic to how God chose to image himself in created beings.",
      "The mandate that follows &mdash; &ldquo;Be fruitful and multiply and fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth&rdquo; (1:28) &mdash; is often called the Cultural Mandate or Creation Mandate. Dominion is not license for exploitation; it is a calling to stewardship in the image of God himself, who creates, orders, and tends. To have dominion is to exercise the same kind of generous, life-giving, ordering care that God himself exercises over creation. The vocation of humanity is to be God&rsquo;s vice-regents &mdash; governing the world on his behalf, in his manner, for his glory.",
    ],
  },
  {
    id: "God Saw That It Was Good",
    heading: "God Saw That It Was Good",
    reference: "Genesis 1:29&ndash;2:3",
    paragraphs: [
      "After the creation of humanity, God speaks once more, providing food for both human beings and animals from the vegetation of the earth. And then comes the great summary: &ldquo;And God saw everything that he had made, and behold, it was very good. And there was evening and there was morning, the sixth day&rdquo; (1:31). This is the seventh and climactic occurrence of God&rsquo;s evaluation in the chapter, and for the first time it is not merely &ldquo;good&rdquo; but &ldquo;very good.&rdquo; The completed creation, with human beings in it, elicits a deeper divine satisfaction than any individual part.",
      "The theological weight of &ldquo;it was very good&rdquo; cannot be overstated. In the history of philosophy and religion, many traditions have held that the material world is either evil, or inferior, or a trap for the soul, or an illusion from which we must escape. Gnosticism in its many forms taught that the physical world was created by an inferior or malevolent deity, and that salvation meant escape from matter into pure spirit. Platonic philosophy tended to regard the world of Forms as the true reality and the material world as its pale, defective shadow. Into all such views, Genesis 1 speaks a resounding counterword: the material world is good. It is very good. God made it, and he is pleased with it.",
      "This has profound implications for Christian life and thought. Matter matters. The body is not a prison; it is a good creation of God, the site of his image and the instrument of human vocation. The physical world is not to be despised or escaped but stewarded, enjoyed, and tended. Christian faith does not evacuate the world but redeems it. The resurrection of Christ &mdash; bodily resurrection, not merely spiritual survival &mdash; is the great confirmation of what Genesis 1 declares: God is not done with creation. He intends to redeem and renew it, not discard it.",
      "The goodness of creation is also the foundation of a Christian environmental ethic. If the world belongs to God (Psalm 24:1) and was declared very good by him, then the degradation of creation is not a neutral economic question but a moral one. Stewardship of the earth is a continuation of the creation mandate given in Genesis 1:28 and is inseparable from faithfulness to the Creator. The Christian who neglects the care of creation has not understood what God declared over it on the sixth day.",
      "The seventh day completes the account: &ldquo;And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done. So God blessed the seventh day and made it holy, because on it God rested from all his work that he had done in creation&rdquo; (2:2&ndash;3). The Sabbath is woven into the fabric of creation itself. It is not an arbitrary ritual imposed on Israel as a burden; it is a rhythm built into the structure of time by the Creator himself. God works and then rests, not because he is weary but because he is finished &mdash; and he invites his creatures into that same rhythm.",
      "The blessing and sanctification of the seventh day is the only act of blessing in the creation account applied to a unit of time rather than to living beings. God hallows the Sabbath &mdash; sets it apart as holy &mdash; before the Mosaic law formalizes it. This means the Sabbath principle predates Israel and belongs to all humanity. The later command at Sinai to remember the Sabbath is not the creation of a new institution but the recovery of an original one, grounded in the pattern of God&rsquo;s own creative activity. In resting, human beings image their Creator and affirm that their identity is not bound up in their productivity. They rest because God rested; they trust because God is trustworthy; and in that trust they find the deepest rest of all.",
      "Genesis 1 closes, then, not with a bang but with a hush &mdash; the sacred silence of a creation that is complete, a God who is satisfied, and a people who have been given a world to inhabit and a day on which to simply rest in the presence of the one who made them. Everything the Bible will subsequently say about redemption, covenant, law, prophecy, and the coming of Christ can be read as the long story of what went wrong with the world of Genesis 1 and how God set about putting it right. But before that story of fall and rescue begins, there is this declaration: it was very good. And the memory of that original goodness is itself a kind of promise &mdash; that what God made, he will not abandon, and what he began, he will finish.",
    ],
  },
];

const videoItems = [
  { videoId: "GQI72THyO5I", title: "BibleProject - Overview - Genesis 1-11" },
  { videoId: "KNJX83uxCvs", title: "BibleProject - Image of God" },
  { videoId: "Zy_fzo_0f2E", title: "Creation and Genesis 1 - The Seven Days Explained" },
  { videoId: "1SM2lHaLMBo", title: "Sabbath and the Rhythm of Creation - Genesis Study" },
];

export default function Genesis1GuidePage() {
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
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Genesis 1 &mdash; In the Beginning God
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The opening chapter of Scripture is not primarily a science textbook but a theological declaration &mdash; proclaiming who God is, who we are, and why the world exists. Explore creation, the image of God, the goodness of all things, and the Sabbath rest.
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

        {currentSection && (
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
              Deepen your study of Genesis 1 through visual teaching on creation, the image of God, the goodness of the world, and the Sabbath rhythm built into the fabric of time.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>It Was Very Good</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 1 does not answer how the universe came to be in mechanical terms &mdash; it answers who stands behind it and why it exists. The God who spoke light into being, who made humanity in his image, and who rested on the seventh day is the same God who in Christ is making all things new. What he declared very good, he will not abandon.
          </p>
        </div>
      </main>
    </div>
  );
}
