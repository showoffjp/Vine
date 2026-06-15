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
  "Jacob's Departure",
  "The Dream at Bethel",
  "God's Covenant Promise",
  "The Angels and Stairway",
  "Jacob's Vow",
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
    heading: "Overview of Genesis 28",
    reference: "Genesis 28:1&ndash;22",
    paragraphs: [
      "Genesis 28 is one of the great hinge points of the entire book of Genesis &mdash; a chapter in which the story of the patriarchs passes from Isaac to Jacob, and in which God himself appears to confirm that the promises first made to Abraham will continue through this unlikely heir. The chapter is built around a dream: Jacob, fleeing from his brother Esau and traveling alone through the wilderness toward Haran, stops for the night at an unnamed place, lies down with a stone for a pillow, and encounters the living God.",
      "The setting matters enormously. Jacob is at one of the lowest points of his life. He has just deceived his father Isaac into giving him the blessing that belonged to Esau, and Esau&rsquo;s rage is so great that Rebekah fears for Jacob&rsquo;s life. Jacob is sent away not in triumph but in flight, separated from his family, carrying nothing but his staff and his own cunning, heading into an unknown future. He is, by any human measure, alone and vulnerable. It is precisely in this moment that God appears.",
      "The dream Jacob receives at Bethel &mdash; the famous vision of a ladder or stairway reaching from earth to heaven, with angels ascending and descending on it, and the Lord standing above it &mdash; has captured the imagination of readers for three thousand years. It has been interpreted as a cosmic image of the connection between heaven and earth, as a symbol of divine mediation, and in the New Testament as a prefiguring of the person of Jesus Christ. But in its original narrative context, its primary function is to give Jacob the word of God at the moment he needs it most: &ldquo;I am with you.&rdquo;",
      "God&rsquo;s speech to Jacob in this chapter (vv. 13&ndash;15) is a restatement of the Abrahamic covenant in its fullest form: the promise of the land, the promise of innumerable descendants, the promise that through these descendants all the families of the earth will be blessed, and the personal promise of God&rsquo;s accompanying presence wherever Jacob goes. This is the fourth time in Genesis that the covenant is formally restated (after Genesis 12, 15, and 17), and its restatement to Jacob &mdash; who has done nothing to earn it and whose character at this point in the story is deeply compromised &mdash; underlines that the covenant rests entirely on God&rsquo;s grace and not on human merit.",
      "Jacob&rsquo;s response to the dream &mdash; his vow, his pillar, and his renaming of the place as Bethel (House of God) &mdash; marks the beginning of his journey as a man who has been found by God, even if he does not yet fully understand what that means. He is still calculating, still making conditional bargains with the Almighty. But the God who appeared to him in the dream will prove faithful to every word he spoke, and the story of Genesis will trace Jacob&rsquo;s slow transformation from a grasping deceiver into Israel, a man who has wrestled with God and prevailed.",
    ],
  },
  {
    id: "Jacob's Departure",
    heading: "Isaac Sends Jacob to Haran",
    reference: "Genesis 28:1&ndash;9",
    paragraphs: [
      "The opening verses of Genesis 28 pick up directly from the charged family drama of chapter 27. Isaac, realizing that Jacob has already received the blessing and that what has been spoken cannot be undone, now formally and deliberately sends Jacob to Paddan-aram to find a wife from among the daughters of Laban, his mother Rebekah&rsquo;s brother. He charges Jacob: &ldquo;You must not take a wife from the Canaanite women. Arise, go to Paddan-aram to the house of Bethuel your mother&rsquo;s father, and take as your wife from there one of the daughters of Laban your mother&rsquo;s brother&rdquo; (28:1&ndash;2).",
      "Isaac&rsquo;s words at this parting carry the weight of covenant blessing. He does not send Jacob away in anger over the deception, even though he has every reason to be aggrieved. Instead he blesses him: &ldquo;God Almighty bless you and make you fruitful and multiply you, that you may become a company of peoples. May he give the blessing of Abraham to you and to your offspring with you, so that you may take possession of the land of your sojournings that God gave to Abraham&rdquo; (28:3&ndash;4). The blessing Isaac speaks over the departing Jacob is explicitly identified as the blessing of Abraham &mdash; the covenant blessing that shapes everything that follows.",
      "The narrator notes Esau&rsquo;s reaction to Jacob&rsquo;s departure with a subtle pathos. Esau, seeing that Isaac has blessed Jacob and sent him away specifically to avoid a Canaanite wife, and that Jacob has obeyed his parents in this &mdash; Esau realizes that his own Canaanite wives have displeased his father. So he goes to Ishmael and takes a third wife, this time from the line of Abraham through Ishmael. It is a gesture toward pleasing his parents that comes too late and misses the point; but it reveals that even the rough, impulsive Esau has a longing for his father&rsquo;s approval that his earlier choices had squandered.",
      "Jacob&rsquo;s departure from Beersheba is described without ceremony. He sets out alone &mdash; no servants, no entourage, no wealth, none of the signs of patriarchal status that Abraham had possessed. The contrast with Abraham&rsquo;s journeys is stark. Abraham traveled with great flocks and herds, with servants and allies; Jacob walks with his staff. If the story of the patriarchs is the story of God&rsquo;s faithfulness to a specific family, then God&rsquo;s choice to entrust the covenant promises to this solitary traveler in flight is a striking demonstration that the covenant does not rest on human power or resources. The man who will become the father of the twelve tribes of Israel begins his journey with nothing.",
      "The geographical note &mdash; that Jacob &ldquo;came to a certain place and stayed there that night, because the sun had set&rdquo; (28:11) &mdash; is understated and yet important. The &ldquo;certain place&rdquo; (Hebrew: hamakom) is used with the definite article in a way that suggests the narrator knows this is no ordinary place, even before the dream reveals it to be holy ground. Jacob stops because of darkness and practical necessity; he does not know what he is about to encounter. God&rsquo;s appointments are often made by the traveler without the traveler&rsquo;s knowledge, in places that appear to be nothing more than a convenient stopping point on a road of flight.",
    ],
  },
  {
    id: "The Dream at Bethel",
    heading: "The Dream at Bethel",
    reference: "Genesis 28:10&ndash;17",
    paragraphs: [
      "Jacob takes one of the stones of the place, puts it under his head, and lies down to sleep. And he dreams. The dream begins with a visual image that has become one of the most iconic in all of Scripture: &ldquo;There was a stairway resting on the earth, with its top reaching to the heavens, and the angels of God were ascending and descending on it&rdquo; (28:12). The Hebrew word translated &ldquo;stairway&rdquo; or &ldquo;ladder&rdquo; (sullam) appears only here in the entire Bible, and its precise meaning has been debated. Ancient Near Eastern context suggests it may refer to a great ramp or stairway of the kind found on a ziggurat &mdash; a monumental staircase connecting earth and heaven.",
      "The image is layered with significance. The angels ascending and descending suggest that this point has been a place of divine traffic all along &mdash; that heaven and earth have not been as separate as Jacob&rsquo;s isolated experience might suggest. The ascending and descending also implies that this is ongoing, not a one-time event. The communication between the realm of God and the realm of humanity is continuous and real. Jacob&rsquo;s dream is not the creation of a new connection but the unveiling of one that was already there, invisible to human eyes. He has been sleeping on holy ground without knowing it.",
      "Above the stairway, or beside it, stands the Lord himself. This is not an angelic intermediary or a vision of divine glory in the abstract; the text says explicitly that &ldquo;the Lord stood above it&rdquo; (or &ldquo;beside him,&rdquo; depending on translation of the Hebrew) and speaks. The LORD &mdash; the God of covenant faithfulness &mdash; is the one Jacob sees and hears. The dream is not merely a symbolic vision but a genuine divine encounter, a theophany in the classical tradition of the Genesis narratives. The God who appeared to Abraham at the oaks of Mamre, who spoke to Hagar in the wilderness, who tested Abraham on Moriah, now appears to Jacob at this unnamed resting place.",
      "Jacob&rsquo;s reaction when he awakes captures both the theological weight and the human reality of the encounter: &ldquo;Surely the Lord is in this place, and I did not know it&rdquo; (28:16). This is one of the most honest and spiritually significant responses in all of Scripture. Jacob had not come looking for God; he had not chosen this as a place of worship or pilgrimage. He had stopped here because the sun went down. And yet God was here. The phrase &ldquo;I did not know it&rdquo; is a confession of ignorance that becomes a discovery: the world is more full of God than Jacob had realized. The divine presence is not confined to sanctuaries or to the experiences of those who seek it.",
      "The fear that follows &mdash; &ldquo;And he was afraid and said, &lsquo;How awesome is this place! This is none other than the house of God, and this is the gate of heaven&rsquo;&rdquo; (28:17) &mdash; is the appropriate human response to an encounter with the living God. The Hebrew word translated &ldquo;awesome&rdquo; is yare, the same root as the word for &ldquo;fear.&rdquo; The place is awe-inspiring, dread-inducing, not because it is a place of danger but because it is a place of holiness. Jacob names it &ldquo;the gate of heaven&rdquo; &mdash; a portal between the human and the divine, a place where the ordinary rules of earthly experience have been suspended by the presence of the One who is above and beyond it all.",
      "The detail that Jacob uses a stone as a pillow is more than incidental. It grounds the vision in the physical world; this is not an escape from material reality but a transformation of it. The hard stone becomes the marker of holy ground. After the dream, Jacob takes the very stone he slept on and sets it up as a pillar, anointing it with oil &mdash; consecrating the physical object that had been his resting place as a monument to the encounter. Heaven does not despise the material world; it invades it, and leaves its mark on the stones.",
    ],
  },
  {
    id: "God's Covenant Promise",
    heading: "God Reaffirms the Abrahamic Covenant",
    reference: "Genesis 28:13&ndash;15",
    paragraphs: [
      "The heart of Genesis 28 is the speech God makes to Jacob in the dream. It is a formal restatement of the Abrahamic covenant, addressed now to Jacob personally and in his own specific situation. God begins with self-identification: &ldquo;I am the Lord, the God of Abraham your father and the God of Isaac&rdquo; (28:13). This opening is not a preamble but a substantive statement: the God who is speaking is the same God who made irrevocable commitments to Abraham and Isaac, and those commitments are now being extended to Jacob. The covenant is not starting over; it is continuing.",
      "The promises that follow are the promises of the Abrahamic covenant in their classic form. First, the land: &ldquo;The land on which you lie I will give to you and to your offspring&rdquo; (28:13). This promise is striking in its specificity. Jacob is lying on a particular piece of ground &mdash; a hillside somewhere in the territory that will one day be Israel &mdash; and God points to that very ground as part of the inheritance. The covenant is not abstract; it has dirt in it. Second, the descendants: &ldquo;Your offspring shall be like the dust of the earth, and you shall spread abroad to the west and to the east and to the north and to the south&rdquo; (28:14). The image of dust captures both the countless number and the all-pervasive spread of what God intends.",
      "Third, and perhaps most significant in its scope, the universal promise: &ldquo;In you and your offspring shall all the families of the earth be blessed&rdquo; (28:14). This is the heart of the Abrahamic covenant from its first statement in Genesis 12:3, repeated now to Jacob. The blessing that flows through this particular family is not intended to end with them; it is intended to reach all the families of the earth. The whole story of Israel &mdash; the patriarchs, the exodus, the conquest, the monarchy, the prophets, the exile, the return &mdash; is in service of this universal purpose, which finds its ultimate fulfillment in the person of Jesus Christ, the offspring of Abraham through whom the blessing of God reaches every nation.",
      "Fourth, and most immediately comforting to the solitary traveler in flight, the personal promise: &ldquo;Behold, I am with you and will keep you wherever you go, and will bring you back to this land. For I will not leave you until I have done what I have promised you&rdquo; (28:15). This promise is not primarily about territorial possession or numerical growth; it is about presence. God will be with Jacob. He will keep him. He will bring him back. He will not leave him. For a man who is alone on a road of exile, this word of divine accompaniment is the word he most needs to hear, and it is the word that God speaks.",
      "The covenant speech in Genesis 28 is remarkable for what it does not do. It does not raise the question of Jacob&rsquo;s recent deception of his father. It does not condition the promises on Jacob&rsquo;s future behavior &mdash; though Jacob&rsquo;s conditional vow in the chapter&rsquo;s closing verses shows that Jacob has not yet fully grasped the unconditioned character of what he has been given. God simply speaks the covenant over Jacob and ratifies it with his own name. This is grace in its purest form: the unilateral commitment of God to a person who has not earned it and cannot earn it, given at the moment of that person&rsquo;s greatest vulnerability.",
      "The New Testament writers understood the covenant of Genesis 28 as finding its telos in Jesus. Paul writes in Galatians 3:16 that the promises were made &ldquo;to Abraham and to his offspring,&rdquo; and that &ldquo;offspring&rdquo; refers to one person &mdash; Christ. The universal blessing promised to all families of the earth through Abraham&rsquo;s seed is the blessing of the gospel, which Paul sees himself as carrying to the Gentiles. The stairway of Jacob&rsquo;s dream, the connection between heaven and earth, finds its fullest expression in the person of Jesus, who declared to Nathanael, &ldquo;You will see heaven opened, and the angels of God ascending and descending on the Son of Man&rdquo; (John 1:51).",
    ],
  },
  {
    id: "The Angels and Stairway",
    heading: "Angels Ascending and Descending",
    reference: "Genesis 28:12; John 1:51",
    paragraphs: [
      "The image of angels ascending and descending on Jacob&rsquo;s stairway is one of the most visually arresting in all of Scripture, and one of the most theologically rich. Ancient commentators and modern scholars alike have puzzled over the precise significance of the ascending before the descending &mdash; why are the angels going up before they come down? One ancient interpretation holds that the angels who had been accompanying Jacob in the land of Canaan are ascending to return to heaven, while the angels who will accompany him in a foreign land are descending to take their place. The image thus frames Jacob&rsquo;s whole journey as one attended and guarded by the messengers of God.",
      "The theological significance of the stairway is the connection it establishes between two realms that human experience tends to treat as entirely separate. In everyday life, heaven and earth feel profoundly disconnected: the troubles, griefs, injustices, and longings of earthly experience seem to rise into a silence that offers no response. Jacob&rsquo;s dream is the assertion that this impression is false. Heaven and earth are connected; the God who reigns in the heavens is actively engaged with the affairs of the earth; his messengers move between the two realms constantly. The gate of heaven, as Jacob names it, is not a closed door but an open passage.",
      "The connection between Jacob&rsquo;s stairway and the person of Jesus Christ is made explicit by Jesus himself. In John 1:51, in the very first chapter of the Fourth Gospel, Jesus says to Nathanael: &ldquo;Truly, truly, I say to you, you will see heaven opened, and the angels of God ascending and descending on the Son of Man.&rdquo; The allusion to Genesis 28:12 is unmistakable, and its meaning is profound: Jesus presents himself as the true stairway, the true point of connection between heaven and earth, the true gate of heaven. He is the place where the divine and human are joined, the mediator between God and humanity, the one through whom the angels of God carry out their ministry.",
      "The image of angels ascending and descending in John 1 is not merely a historical allusion to Jacob&rsquo;s dream; it is a claim about the nature and identity of Jesus. Just as Bethel was the point at which heaven touched earth in the patriarchal narrative, Jesus is the point at which heaven touches earth in the fullness of time. He is the one in whom &ldquo;all the fullness of God was pleased to dwell&rdquo; (Colossians 1:19), the one who is both fully human and fully divine, the one who opens the way into the presence of God that Jacob could only glimpse in a dream. The stairway of Bethel was a promise; the incarnate Son is the fulfillment.",
      "The ministry of angels in both Genesis 28 and the broader biblical narrative is worth reflecting on. Angels in Scripture are not decorative figures or symbols of divine power; they are functional servants of the living God, sent on specific missions to specific people at specific moments. The angels of Genesis 28 attend the man who will become Israel, accompanying him on a journey whose ultimate significance far exceeds what he can see in his own moment. The angels of the New Testament announce the birth of Jesus, strengthen him in Gethsemane, and roll away the stone at the resurrection. They operate at the intersection of the divine purpose and the human story, which is precisely where Jacob&rsquo;s stairway stands.",
      "For the Christian reader, the stairway of Bethel becomes a meditation on the mediation that is at the heart of the gospel. Humanity longs for connection with the divine; the whole history of religion is in some sense the story of that longing. Genesis 28 declares that God himself has opened the way &mdash; that the gate of heaven is not barred against the wandering fugitive but stands open. And the New Testament declares that the stairway Jacob saw in his dream is a person: the Son of God who descended to take our humanity so that we might ascend through him to share in his life with the Father.",
    ],
  },
  {
    id: "Jacob's Vow",
    heading: "Jacob's Vow and the Pillar at Bethel",
    reference: "Genesis 28:18&ndash;22",
    paragraphs: [
      "Jacob&rsquo;s response to the dream at Bethel unfolds in two acts. First, the physical act: &ldquo;So early in the morning Jacob took the stone that he had put under his head and set it up for a pillar and poured oil on the top of it&rdquo; (28:18). The anointing of the stone with oil is an act of consecration &mdash; the transformation of an ordinary object into a sacred marker. The stone that had been his pillow, the stone on which his head had rested during the night when heaven opened, is now set upright as a monument to the encounter. The concrete, physical world is not left behind in Jacob&rsquo;s response to a spiritual experience; it is hallowed by it.",
      "Then comes the naming. Jacob calls the place Bethel &mdash; &ldquo;House of God&rdquo; in Hebrew (beth = house, el = God). The previous name of the city, the narrator informs us, was Luz. But Jacob&rsquo;s naming transforms its identity: it is henceforth known as the place where God appeared, the house of God, the gate of heaven. The act of naming in the Genesis narratives is always significant &mdash; it represents an interpretation of reality, a claim about the meaning of a place or a person. Jacob&rsquo;s renaming of Luz as Bethel is his way of saying: what happened here changes everything about how this place must be understood.",
      "Jacob&rsquo;s vow (vv. 20&ndash;22) has puzzled and sometimes troubled readers: &ldquo;If God will be with me and will keep me in this way that I go, and will give me bread to eat and clothing to wear, so that I come again to my father&rsquo;s house in peace, then the Lord shall be my God, and this stone, which I have set up for a pillar, shall be God&rsquo;s house. And of all that you give me I will give a full tenth to you.&rdquo; The conditional &ldquo;if&rdquo; seems at first reading to be a bargaining posture &mdash; Jacob is offering allegiance to God contingent on God delivering what Jacob wants. Is this faith or negotiation?",
      "Many commentators have noted that Jacob&rsquo;s vow is less shocking than it first appears when read in its historical context. In the ancient Near East, vows of this kind were a standard form of commitment; they were not expressions of distrust but formulas of solemn binding agreement. Jacob is not so much bargaining with God as solemnizing his response to God&rsquo;s promise. God has just said: &ldquo;I will be with you, I will keep you, I will bring you back.&rdquo; Jacob is saying: if you do all this &mdash; if your word proves true &mdash; then I will give you full allegiance and a tenth of everything. He is staking his future faithfulness on the faithfulness of God.",
      "The promise of the tithe &mdash; &ldquo;of all that you give me I will give a full tenth to you&rdquo; (28:22) &mdash; is the first explicit mention of tithing in the patriarchal narratives. An earlier narrative has Abraham giving a tithe to Melchizedek (14:20), but Jacob&rsquo;s vow frames the tithe as a response to divine generosity. God gives; Jacob returns a portion. The tithe is thus understood from the beginning not as a payment or a purchase of divine favor but as an acknowledgment that everything belongs to God and that the one who returns a portion is confessing his dependence on the one who gave it all.",
      "The place of Bethel itself becomes one of the recurring landmarks of Israel&rsquo;s story. Jacob will return here later (35:1&ndash;15), when God again appears to him, confirms the name Israel, and repeats the covenant promises. Bethel becomes a place of worship in the period of the judges; it is also, tragically, the place where Jeroboam set up one of his golden calves (1 Kings 12:29), turning a place of divine encounter into a place of apostasy. The House of God can become the place of false worship when the living God is replaced by human constructions. But the original encounter stands: Jacob, alone on a hillside, was found by the God of Abraham and Isaac, and that encounter changed everything that came after.",
    ],
  },
];

const videoItems = [
  { videoId: "nK8PdR5BpqE", title: "Genesis 28 - Jacob's Ladder and the Dream at Bethel" },
  { videoId: "Td4qRmLp7nW", title: "BibleProject - Overview of Genesis 12-50: The Story of Jacob" },
  { videoId: "Yc8vXmJ2kDf", title: "The Abrahamic Covenant Explained - Genesis 28 Deep Dive" },
  { videoId: "Kp3nZqG7sLh", title: "Jacob's Ladder - Bethel and the Gate of Heaven" },
];

export default function Genesis28GuidePage() {
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
            Genesis 28 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jacob, fleeing from Esau, stops for the night at an unnamed place and dreams of a stairway reaching to heaven &mdash; with angels ascending and descending and the Lord himself reaffirming the covenant of Abraham: the land, the innumerable descendants, the universal blessing, and the personal promise that he will never be alone.
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
              Deepen your study of Genesis 28 through these video teachings on Jacob&rsquo;s ladder, the dream at Bethel, the Abrahamic covenant, and the God who meets the solitary traveler in the wilderness and promises never to leave.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Surely the Lord Is in This Place</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 28 reminds every lonely and frightened traveler that the God of the covenant is already present at the place where we stop for the night, that heaven is not sealed off from earth but continuously open, and that the promises God made to Abraham &mdash; land, descendants, universal blessing, and abiding presence &mdash; are given not to those who have earned them but to those who need them most.
          </p>
        </div>
      </main>
    </div>
  );
}
