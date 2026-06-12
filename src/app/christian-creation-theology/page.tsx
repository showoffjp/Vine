"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";
const GOLD = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  { id: "genesis", label: "Genesis 1-2: Genre" },
  { id: "ex-nihilo", label: "Creation Ex Nihilo" },
  { id: "imago", label: "Imago Dei &amp; the Fall" },
  { id: "evolution", label: "Evolution &amp; Faith" },
  { id: "new-creation", label: "New Creation" },
  { id: "videos", label: "Videos" },
];

interface TabDef {
  id: string;
  label: string;
}

interface Section {
  title: string;
  body: string;
}

const genesisSections: Section[] = [
  {
    title: "The ANE Context: Enuma Elish and Atrahasis",
    body: "Genesis did not arrive in a cultural vacuum. The ancient Near East was saturated with creation accounts &mdash; stories of how the cosmos came to be, what it is for, and where human beings fit within it. The Babylonian Enuma Elish (c. 1100 BC) describes creation as the outcome of violent conflict among the gods: Marduk slays Tiamat, the primordial chaos dragon, and fashions the world from her body. Humanity is created from the blood of a slain rebel god to serve the gods as their slaves. The Atrahasis Epic similarly presents humanity as a burden-bearing servant class created to relieve the lesser gods of labor. Genesis is writing in conversation with &mdash; and in pointed contrast to &mdash; these traditions. Where Enuma Elish has violence, Genesis has speech; where Atrahasis has slavery, Genesis has dignity; where the ANE has a pantheon of warring deities, Genesis has one God who creates by will and word alone.",
  },
  {
    title: "Genesis as Polemic Against Polytheism",
    body: "Genesis 1 is a sustained polemic against the polytheism and astral religion of Israel&rsquo;s neighbors. The sun and moon, which in the ancient world were major deities worshipped throughout Mesopotamia and Egypt, are referred to in Genesis 1 simply as &ldquo;the greater light&rdquo; and &ldquo;the lesser light&rdquo; (1:16) &mdash; they are not even named. The sea monsters (tannin), which in Canaanite mythology were feared divine creatures, are simply made by God on day five (1:21). The stars, objects of elaborate Babylonian religious attention, are mentioned almost as an afterthought: &ldquo;he also made the stars&rdquo; (1:16). What the nations worship, Genesis presents as God&rsquo;s creation &mdash; objects without power or personality, made by the one God who alone is worthy of worship. The cosmic temple reading developed by scholars like John Walton sees Genesis 1 not primarily as an account of material origins but as a declaration of divine sovereignty over a cosmos being inaugurated as God&rsquo;s dwelling place.",
  },
  {
    title: "The Cosmic Temple Reading: John Walton",
    body: "John Walton&rsquo;s The Lost World of Genesis One (2009) argues that the seven-day creation account is best understood through the lens of ANE temple inauguration. In the ancient world, a temple was not merely a building; it came into existence &mdash; was &ldquo;created&rdquo; &mdash; when it was given a function and a resident deity took up residence in it. Walton argues that Genesis 1 describes not the material origins of the cosmos but the functional ordering of it: God is assigning functions to a cosmos he is inaugurating as his temple, culminating in the Sabbath when he &ldquo;rests&rdquo; &mdash; not from exhaustion but in the sense of taking up residence, as a god takes up residence in a newly dedicated temple. The seven-day structure, on this reading, is a liturgical inauguration, not a chronological account of material assembly. The implications for the creation-evolution debate are significant: if Genesis 1 is not describing material origins, the conflict with scientific cosmology is differently configured.",
  },
  {
    title: "Days 1-3 as Realms; Days 4-6 as Rulers",
    body: "The literary structure of Genesis 1 is exquisitely ordered. Days 1-3 establish three realms: the realm of light and dark (day 1), the realm of waters above and below (day 2), and the realm of sea and land and vegetation (day 3). Days 4-6 then fill and rule those realms: the sun and moon to rule the day and night (day 4), birds and fish to fill the sky and sea (day 5), and animals and humans to fill and rule the land (day 6). This parallel structure &mdash; realms/rulers &mdash; is a literary device revealing the author&rsquo;s design intent. It is not the kind of structure one expects from a bare historical chronicle; it is the structure of a poem or a carefully crafted theological statement. This does not make Genesis 1 untrue; it means we need to ask what kind of truth it is claiming, and by what literary means.",
  },
  {
    title: "The Two Creation Accounts and How They Relate",
    body: "Genesis 1:1-2:3 and Genesis 2:4-25 are two distinct creation accounts that do not harmonize on a strictly chronological-historical reading. In Genesis 1, plants appear on day 3, animals on days 5-6, and humans last (male and female simultaneously, 1:27). In Genesis 2, the man is formed first (2:7), then the garden and its plants (2:8-9), then animals (2:19), then the woman (2:22). Attempts to harmonize these sequences by reading 2:19 as a pluperfect (&ldquo;had formed&rdquo;) are possible but feel strained. The more natural reading is that the two accounts have different focuses: Genesis 1 is cosmic in scope, moving from formless void to ordered creation; Genesis 2 is intimate in focus, zooming in on the garden, the man, his need for relationship, and the formation of the woman. They answer different questions, and together they present a stereoscopic picture of creation that neither account provides alone.",
  },
  {
    title: "What Genesis Is and Is Not Claiming",
    body: "The genre question matters because the kind of truth a text claims depends on the kind of text it is. A poem is true in ways different from a financial report; a parable is true in ways different from a newspaper account. The question for Genesis 1-2 is not &ldquo;Is it true?&rdquo; but &ldquo;What is it claiming?&rdquo; The author&rsquo;s intention &mdash; as best as we can recover it from the text, its literary forms, and its ANE context &mdash; does not appear to be to teach the sequence of material causation by which the cosmos assembled. It appears to be to proclaim: one God created everything; creation is good; human beings bear God&rsquo;s image and have a unique vocation within it; the Sabbath rest is built into the fabric of creation itself. These theological claims are non-negotiable for Christian faith. The mechanism and timeline of material origins is where faithful Christians have held a range of positions without compromising orthodoxy.",
  },
];

const exNihiloSections: Section[] = [
  {
    title: "The Doctrine: God Created from Nothing",
    body: "Creation ex nihilo &mdash; the doctrine that God created the universe from nothing, not from pre-existing matter &mdash; is one of the most theologically significant and philosophically distinctive claims of classical Christian theism. It distinguishes the God of the Bible from the demiurge of Plato&rsquo;s Timaeus (who fashions the world from pre-existing chaos), from the material-principle doctrines of Aristotle, and from pantheistic and panentheistic systems in which God and the world are in some sense made of the same stuff. Creation ex nihilo means that nothing exists independently of God&rsquo;s creative will &mdash; that the universe is contingent, not necessary; that it depends for its existence at every moment on God&rsquo;s sustaining power; and that God is not limited by, embedded in, or constituted by the material world.",
  },
  {
    title: "Key Texts: Genesis 1:1, Hebrews 11:3, John 1:3, Romans 4:17",
    body: "The biblical case for creation ex nihilo rests on several key texts. Genesis 1:1 &mdash; &ldquo;In the beginning God created the heavens and the earth&rdquo; &mdash; has traditionally been read as asserting God&rsquo;s creation of the totality of what exists. Hebrews 11:3 is more explicit: &ldquo;By faith we understand that the universe was formed at God&rsquo;s command, so that what is seen was not made out of what was visible.&rdquo; John 1:3 states: &ldquo;Through him all things were made; without him nothing was made that has been made&rdquo; &mdash; a comprehensive assertion of the Logos&rsquo;s creative role. Romans 4:17 describes God as &ldquo;the one who gives life to the dead and calls into being things that were not.&rdquo; While none of these texts uses the precise philosophical formula &ldquo;ex nihilo,&rdquo; together they consistently present God as the source of all existence without presupposing any prior material substrate.",
  },
  {
    title: "Contrast with Greek Cosmology",
    body: "The contrast between biblical creation ex nihilo and Greek cosmology is sharp and theologically consequential. In Plato&rsquo;s Timaeus, the demiurge is a craftsman who shapes pre-existing chaotic matter into ordered form &mdash; he works with what is already there, constrained by the nature of the material he finds. The matter is not created; it is simply ordered. For Aristotle, matter is eternal &mdash; there was no moment of creation, because time itself is a feature of a material cosmos that has always existed. These views have important implications: if matter is eternal and independent of God, then God is not the absolute source of all existence; something exists independently of him; his power is limited by the nature of what he has to work with. Christian theology, from Justin Martyr in the second century onward, recognized that creation ex nihilo was a non-negotiable correction to Greek cosmology &mdash; a claim about the absolute sovereignty and freedom of God.",
  },
  {
    title: "Why Creation Ex Nihilo Is Theologically Essential",
    body: "Creation ex nihilo has several irreplaceable theological functions. First, it grounds the absolute sovereignty of God: nothing exists except by his will and power; he is not constrained by pre-existing matter, forces, or principles. Second, it establishes the contingency of creation: the universe did not have to exist; it exists because God freely chose to create it, which means it has meaning and direction bestowed by a personal creator rather than being a brute given. Third, it grounds the goodness of material creation: matter is not evil, deficient, or an obstacle to the spiritual life (as Gnostic and Neoplatonic thought tended to suggest); it is God&rsquo;s free creation, and God declared it &ldquo;very good&rdquo; (Gen 1:31). Fourth, it establishes the distinction between Creator and creation: God is not the world; the world is not God; there is an ontological gap between them that is bridged only by grace, not by nature.",
  },
  {
    title: "The Historical Development of the Doctrine",
    body: "The earliest Christian writers were not uniformly clear on creation ex nihilo. Justin Martyr (c. 150 AD) appears to accept a form of the Platonic view in which God fashions pre-existing matter. But by the late second century, Theophilus of Antioch clearly asserts creation from nothing, and Irenaeus of Lyon makes it a central anti-Gnostic conviction: the Gnostics postulated a lower creator-god (demiurge) who created the material world from pre-existing evil matter &mdash; creation ex nihilo is the refutation of this account. By the fourth century, creation ex nihilo was established as orthodox Christian doctrine. Augustine&rsquo;s Confessions and City of God develop it philosophically. The doctrine was formally affirmed at the Fourth Lateran Council (1215): &ldquo;Creator of all things visible and invisible, who, by his almighty power, from the very beginning of time has created both orders in the same way out of nothing.&rdquo;",
  },
];

const imagoSections: Section[] = [
  {
    title: "Genesis 1:26-28: Let Us Make Humanity in Our Image",
    body: "Genesis 1:26-28 is among the most theologically dense passages in the Old Testament. &ldquo;Then God said, &lsquo;Let us make mankind in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky, over the livestock and all the wild animals, and over all the creatures that move along the ground.&rsquo; So God created mankind in his own image, in the image of God he created them; male and female he created them.&rdquo; The imago Dei &mdash; the image of God &mdash; is immediately connected to two things: the plural deliberation (&ldquo;let us&rdquo;), which Christian theology has read as a foreshadowing of the Trinity; and the mandate to &ldquo;rule over&rdquo; the creation, which suggests that the image is connected to human vocation and responsibility, not merely intrinsic properties.",
  },
  {
    title: "Three Main Interpretations of the Imago Dei",
    body: "Christian theology has debated what the &ldquo;image of God&rdquo; means for two millennia, producing three main interpretive streams. The structural interpretation (dominant in medieval and Reformation theology, associated with Aquinas and Protestant orthodoxy) locates the image in specific human capacities: rationality, moral consciousness, language, and will &mdash; qualities that distinguish humans from animals and enable them to know and relate to God. The functional interpretation (increasingly prominent in contemporary Old Testament scholarship, associated with scholars like John Walton, Richard Middleton, and Christopher Wright) locates the image in what humans are called to do: as the image of God in the ancient Near East was the statue that represented the god in his temple, so human beings are God&rsquo;s representative rulers in the creation-temple. The relational interpretation (associated with Karl Barth) locates the image in the capacity for relationship &mdash; both with God and with other humans &mdash; grounded in the I-Thou relationality of the Trinity itself.",
  },
  {
    title: "The Royal Priesthood Reading: Humans as Vice-Regents",
    body: "The functional interpretation of the imago Dei has significant exegetical support. In the ANE, the image (tselem) of a god was the cult statue placed in the temple to represent the god&rsquo;s presence and authority. When a king conquered a territory, he might erect his own image there as a sign of his sovereignty. Reading Genesis 1:26-28 against this background suggests that human beings are placed in the creation as God&rsquo;s living images &mdash; his representative rulers, exercising delegated authority over the creation on his behalf. This is the &ldquo;royal priesthood&rdquo; reading: humans are both kings (ruling the creation) and priests (representing God in the creation and the creation before God). The cultural mandate of Genesis 1:28 &mdash; &ldquo;fill the earth and subdue it&rdquo; &mdash; is on this reading a commissioning of humans as God&rsquo;s steward-representatives, responsible for cultivating and caring for the creation entrusted to them.",
  },
  {
    title: "The Fall: Imago Dei Marred but Not Erased",
    body: "Genesis 3 records the fall &mdash; the human choice to grasp at autonomy and god-like knowledge rather than trusting the Creator&rsquo;s provision and boundaries. The consequences are immediate and comprehensive: broken relationship with God (shame, hiding, 3:8-10), broken relationship between the man and woman (blame-shifting, 3:12), and broken relationship between humans and creation (ground cursed, labor painful, 3:17-19). Crucially, the fall does not erase the imago Dei. Genesis 9:6 &mdash; written after the fall, after the flood &mdash; still prohibits murder on the basis that human beings bear God&rsquo;s image: &ldquo;Whoever sheds human blood, by humans shall their blood be shed; for in the image of God has God made mankind.&rdquo; The image is marred, distorted, and diminished by the fall, but not destroyed. The basis for human dignity and the prohibition of dehumanization remains even in a fallen world.",
  },
  {
    title: "The Effect of the Fall on Creation: Romans 8:20-22",
    body: "The fall has cosmic consequences, not just human ones. Genesis 3:17-19 describes the curse on the ground itself: &ldquo;Cursed is the ground because of you; through painful toil you will eat food from it all the days of your life. It will produce thorns and thistles for you.&rdquo; The creation itself participates in the consequences of human sin. Paul expands this vision dramatically in Romans 8:20-22: &ldquo;For the creation was subjected to frustration, not by its own choice, but by the will of the one who subjected it, in hope that the creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God. We know that the whole creation has been groaning as in the pains of childbirth right up to the present time.&rdquo; The creation groans &mdash; it is not itself evil or fallen in the same sense humans are, but it bears the weight of human rebellion and awaits the redemption that human beings, and it with them, will receive.",
  },
];

const evolutionSections: Section[] = [
  {
    title: "Young Earth Creationism: 6 Literal Days, ~6,000 Years",
    body: "Young Earth Creationism (YEC) holds that Genesis 1 describes six literal 24-hour days of creation, and that the genealogies of Genesis 5 and 11, taken as complete chronological records, yield a creation date of approximately 6,000-10,000 years ago. YEC was systematized in Henry Morris and John Whitcomb&rsquo;s The Genesis Flood (1961), which argued that Noah&rsquo;s flood explains the fossil record and geological strata that mainstream science attributes to vast geological time. Major contemporary YEC organizations include Answers in Genesis (Ken Ham) and the Institute for Creation Research. YEC proponents argue that the age of the earth is a non-negotiable implication of biblical inerrancy: if the days of Genesis are not literal, the text is misleading, and the genealogies have been misread. Critics argue that YEC requires massive reinterpretation of virtually all physical evidence &mdash; cosmological, geological, and biological &mdash; and that the scientific consensus against a young earth is overwhelming.",
  },
  {
    title: "Old Earth Creationism: Ancient Earth, Special Creation",
    body: "Old Earth Creationism (OEC) accepts the scientific consensus that the universe is approximately 13.8 billion years old and the earth approximately 4.5 billion years old, but holds that God specially created distinct species (or kinds) rather than allowing evolutionary processes to produce biological diversity from common ancestors. OEC comes in several varieties: gap creationism (a &ldquo;gap&rdquo; between Gen 1:1 and 1:2 accommodates the geological ages), day-age creationism (the &ldquo;days&rdquo; of Genesis are long ages, not 24-hour periods), and progressive creationism (God intervened at specific points in the history of life to create new forms). Hugh Ross and the ministry Reasons to Believe are the most prominent OEC voices. OEC accepts mainstream cosmology and geology but rejects biological evolution, particularly the common descent of humans from earlier primates.",
  },
  {
    title: "Intelligent Design: Irreducible Complexity",
    body: "Intelligent Design (ID) is not strictly a creationist position: it does not necessarily claim a young earth or special creation of species, and its most prominent proponents (Michael Behe, Stephen Meyer, William Dembski) present it as a scientific research program rather than a theological commitment. The core argument is that certain biological systems &mdash; Behe&rsquo;s &ldquo;irreducibly complex&rdquo; systems like the bacterial flagellum, the blood-clotting cascade &mdash; cannot have been produced by undirected natural selection because they require all their components to be present simultaneously to function. Meyer&rsquo;s Signature in the Cell argues that the information content of DNA points to an intelligent source. ID proponents argue that their claims are scientifically testable, not merely theological. Critics argue that ID is creationism in scientific dress, that irreducible complexity has been explained by evolutionary mechanisms, and that ID fails the criteria of genuine scientific theory.",
  },
  {
    title: "Theistic Evolution: God Used Evolutionary Processes",
    body: "Theistic Evolution (TE) &mdash; or Evolutionary Creationism, as BioLogos prefers to call it &mdash; holds that God created the universe and all life through the process of evolution by natural selection, common descent, and other mechanisms fully described by mainstream biology. Francis Collins, former director of the National Institutes of Health and founder of BioLogos, is the most prominent evangelical champion of TE. On this view, evolution is not a rival to the doctrine of creation but the means God used to create. The theological questions are not about the mechanism of creation (which science addresses) but about the meaning and purpose of creation (which theology addresses): Did God create? Yes. Is creation good? Yes. Do human beings bear God&rsquo;s image? Yes. Was there a historical fall? This is the most contested question &mdash; if Adam and Eve are not historical individuals but symbolic representatives, what becomes of the doctrine of original sin?",
  },
  {
    title: "What Is Theologically Essential vs. Negotiable",
    body: "Christians have argued vigorously about which aspects of creation theology are non-negotiable for orthodoxy and which are exegetically and scientifically negotiable. The theologically essential claims, across virtually all evangelical and catholic traditions, include: God is the creator of all that exists (creation ex nihilo); creation is good (against Gnosticism and Manicheanism); human beings bear the image of God and have a unique status and vocation in creation; there is a historical fall that introduced sin and death into human experience and which requires redemption. The mechanism of creation &mdash; whether God worked through natural processes, special creative acts, or some combination &mdash; and the timeline of creation &mdash; whether days are 24-hour periods, long ages, or literary frameworks &mdash; have been held with genuine diversity by faithful, biblically serious Christians. Tim Keller, who is himself open to evolution, has argued that the historical Adam question is the genuinely difficult one: not whether Adam existed, but whether the theological weight Paul places on Adam&rsquo;s historical act in Romans 5 requires a historical individual.",
  },
  {
    title: "BioLogos and Francis Collins",
    body: "BioLogos was founded in 2009 by Francis Collins as an organization dedicated to harmonizing Christian faith with evolutionary science. Its central claim: the evidence for evolution by common descent is overwhelming and should be accepted by Christians; the theological claims of Genesis are not about the mechanism of material origins but about the meaning of creation, and they are fully compatible with evolutionary science. BioLogos has attracted both evangelical support (Tim Keller was an early supporter) and controversy (Al Mohler, John MacArthur, and others have argued that theistic evolution is incompatible with a faithful reading of Genesis and Romans 5). The BioLogos debates have sharpened the questions that actually need answering: not &ldquo;evolution or creation?&rdquo; (a false dilemma, since God creates through processes) but &ldquo;What does a historical fall require? What does Paul&rsquo;s Adam-Christ parallelism require? What does the goodness of God entail about predation and death before the fall?&rdquo;",
  },
];

const newCreationSections: Section[] = [
  {
    title: "Romans 8:19-23: Creation Groaning for Redemption",
    body: "Romans 8:19-23 is the most important New Testament text for a theology of creation&rsquo;s future. Paul describes creation as longing, groaning, waiting &mdash; almost as a person in labor: &ldquo;For the creation waits in eager expectation for the children of God to be revealed. For the creation was subjected to frustration, not by its own choice, but by the will of the one who subjected it, in hope that the creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God. We know that the whole creation has been groaning as in the pains of childbirth right up to the present time.&rdquo; Creation&rsquo;s redemption is timed to human redemption: when the children of God are revealed in glory, creation itself is released from its bondage. The cosmos is not simply the stage on which human salvation occurs; it is a participant in the drama, groaning toward the same redemption.",
  },
  {
    title: "Revelation 21-22: New Heavens and New Earth",
    body: "Revelation 21-22 describes the culmination of redemption not as the escape of souls from matter but as the renewal of the entire cosmos: &ldquo;Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away&rdquo; (21:1). Crucially, the direction of movement is downward, not upward: &ldquo;I saw the Holy City, the new Jerusalem, coming down out of heaven from God&rdquo; (21:2). Heaven comes to earth; God makes his home among humans on a renewed earth. The vision is of a healed, restored, glorified creation &mdash; not the destruction of creation and replacement with something wholly other, but the transformation of this creation into the dwelling place of God and humanity together. The river of life, the tree of life, the healing of the nations (22:1-2) &mdash; these are recognizably continuous with, but transformed beyond, the garden of Eden.",
  },
  {
    title: "NT Wright: The Resurrection as the Beginning of New Creation",
    body: "N.T. Wright has argued more consistently than any other contemporary theologian that the resurrection of Jesus is not an isolated miracle but the beginning of the new creation &mdash; the first instance of the transformed, glorified physicality that is the destiny of the whole cosmos. Jesus&rsquo;s resurrected body was physical (he could be touched, he ate fish) yet transformed (he appeared through locked doors, was not always recognized). It is the same body, but new. This, Wright argues, is the pattern for the new creation: not the replacement of the material world with a purely spiritual realm, but the transformation of this world into the new one. The implication for the present: if the resurrection has begun, then matter matters; physical reality matters; the body matters; creation care matters. The resurrection is not the endorsement of escapism but the authorization of engagement with the material world God is redeeming.",
  },
  {
    title: "The Cultural Mandate and Environmental Stewardship",
    body: "The cultural mandate of Genesis 1:28 &mdash; &ldquo;fill the earth and subdue it. Rule over the fish in the sea and the birds in the sky and over every living creature that moves on the ground&rdquo; &mdash; has been interpreted across a wide spectrum. At one extreme, it has been read as a divine charter for unrestricted human exploitation of natural resources. At the other, environmentalists (notably Lynn White Jr. in his 1967 essay &ldquo;The Historical Roots of Our Ecological Crisis&rdquo;) have argued that Christian anthropocentrism bears significant responsibility for the ecological crisis. The more careful reading, supported by the whole of Genesis 2 (where the man is placed in the garden &ldquo;to work it and take care of it&rdquo; &mdash; 2:15 &mdash; the same Hebrew words used of priestly service in the tabernacle), is that dominion is stewardship: humans are God&rsquo;s vice-regents, responsible for the flourishing of the creation entrusted to them, not its exploitation.",
  },
  {
    title: "Creation Care as an Evangelical Issue: Schaeffer to the Present",
    body: "Francis Schaeffer&rsquo;s Pollution and the Death of Man (1970) was among the earliest evangelical engagements with environmental ethics, arguing that the Christian doctrine of creation &mdash; not secular environmentalism &mdash; provides the strongest basis for caring for the natural world. Schaeffer connected creation care to the lordship of Christ over all of life and to the image of God: humans are part of nature (sharing its material composition) yet uniquely responsible for its stewardship (bearing God&rsquo;s image). In 2006, the Evangelical Climate Initiative &mdash; signed by hundreds of evangelical leaders including Rick Warren and Richard Stearns &mdash; called climate change a moral issue requiring Christian action. The Cornwall Alliance has argued the contrary, that climate alarmism overestimates human ability to damage creation and underestimates human ingenuity. The debate is complex, but the theological foundation is not: if God made the earth and declared it good, if Christ is reconciling all things to himself, then the degradation of creation is a matter of theological concern, not merely a political one.",
  },
  {
    title: "Why Creation Care Is a Christian Calling",
    body: "The New Creation eschatology of the New Testament transforms creation care from an optional political preference to a theological imperative. If the material world is not being thrown away but redeemed; if the resurrection of Jesus is the first fruits of a new creation in which physicality is glorified rather than discarded; if the Christian hope is the renewal of heaven and earth rather than escape to a disembodied heaven &mdash; then how we treat the present creation matters eschatologically. We are not managers of a building being demolished; we are stewards of a creation being renewed. The way we care for the earth now &mdash; or fail to &mdash; is not irrelevant to the new creation. This does not mean every ecological decision is simple or non-controversial; it means the theological framework within which Christians approach those decisions is one of responsibility, hope, and the confidence that what we do in this creation is not in vain.",
  },
];

const videos = [
  { videoId: "6NxRbPe6mBE", title: "John Walton: Genesis and Ancient Cosmology" },
  { videoId: "UmEicNCkAe8", title: "NT Wright on New Creation" },
  { videoId: "cJn6b8Yw7XA", title: "Francis Collins on Evolution and Faith" },
];

export default function ChristianCreationTheologyPage() {
  const [tab, setTab] = useState("genesis");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

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
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span
            style={{
              background: TEAL + "33",
              color: TEAL,
              padding: "0.2rem 0.8rem",
              borderRadius: 20,
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Theology
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
            fontWeight: 900,
            lineHeight: 1.2,
            margin: "0.75rem 0",
          }}
        >
          Christian Theology of Creation
        </h1>

        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: 680,
            margin: "0 0 1rem",
          }}
        >
          Genesis 1-2 and its literary genre, the image of God, creation ex nihilo, the fall and its
          effects on the cosmos, the four positions on evolution, the new creation, and why caring for
          the earth is a Christian calling rooted in eschatology.
        </p>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
            marginTop: "1.5rem",
          }}
        >
          {TABS.map((t: TabDef) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              dangerouslySetInnerHTML={{ __html: t.label }}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                borderColor: tab === t.id ? TEAL : BORDER,
                background: tab === t.id ? TEAL + "33" : "transparent",
                color: tab === t.id ? TEAL : MUTED,
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* GENESIS 1-2 GENRE */}
        {tab === "genesis" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Genesis 1-2: Literary Genre
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              The ANE context, the cosmic temple reading, the literary structure of days 1-6, the two
              creation accounts, and why the genre question matters for the evolution debate.
            </p>
            {genesisSections.map((s: Section) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
            <div
              style={{
                background: TEAL + "18",
                border: `1px solid ${TEAL}55`,
                borderRadius: 14,
                padding: "1.5rem 1.75rem",
              }}
            >
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                <strong style={{ color: TEXT }}>Key resource:</strong> John Walton,{" "}
                <em>The Lost World of Genesis One</em> (2009). Also: John Sailhamer,{" "}
                <em>Genesis Unbound</em>; Bruce Waltke,{" "}
                <em>Genesis: A Commentary</em>.
              </p>
            </div>
          </div>
        )}

        {/* CREATION EX NIHILO */}
        {tab === "ex-nihilo" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Creation Ex Nihilo
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              The doctrine that God created from nothing &mdash; its biblical basis, its contrast with Greek
              cosmology, why it is theologically essential, and its historical development.
            </p>
            {exNihiloSections.map((s: Section) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* IMAGO DEI AND THE FALL */}
        {tab === "imago" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              The Imago Dei and the Fall
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Genesis 1:26-28, the three interpretations of the image of God, the royal priesthood reading,
              the fall&rsquo;s effects on the imago Dei and on creation itself (Romans 8:20-22).
            </p>
            {imagoSections.map((s: Section) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
            <div
              style={{
                background: TEAL + "18",
                border: `1px solid ${TEAL}55`,
                borderRadius: 14,
                padding: "1.5rem 1.75rem",
              }}
            >
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                <strong style={{ color: TEXT }}>Key resource:</strong> J. Richard Middleton,{" "}
                <em>The Liberating Image: The Imago Dei in Genesis 1</em> (2005). Also: John Kilner,{" "}
                <em>Dignity and Destiny: Humanity in the Image of God</em>.
              </p>
            </div>
          </div>
        )}

        {/* EVOLUTION AND FAITH */}
        {tab === "evolution" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: BLUE, margin: "0 0 0.25rem" }}>
              Evolution and Christian Faith
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              The four main positions &mdash; Young Earth, Old Earth, Intelligent Design, Theistic Evolution
              &mdash; what is theologically essential vs. scientifically negotiable, and the BioLogos
              approach of Francis Collins.
            </p>
            {evolutionSections.map((s: Section) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: BLUE, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
            <div
              style={{
                background: BLUE + "18",
                border: `1px solid ${BLUE}55`,
                borderRadius: 14,
                padding: "1.5rem 1.75rem",
              }}
            >
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                <strong style={{ color: TEXT }}>Key resources:</strong> Francis Collins,{" "}
                <em>The Language of God</em> (2006); Dennis Lamoureux,{" "}
                <em>Evolutionary Creation</em>; John Lennox,{" "}
                <em>Seven Days That Divide the World</em>; BioLogos (biologos.org).
              </p>
            </div>
          </div>
        )}

        {/* NEW CREATION */}
        {tab === "new-creation" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              New Creation and Care of Earth
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Romans 8, Revelation 21-22, NT Wright on resurrection as new creation&rsquo;s beginning,
              the cultural mandate, and why creation care is a Christian eschatological calling.
            </p>
            {newCreationSections.map((s: Section) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
            <div
              style={{
                background: GREEN + "18",
                border: `1px solid ${GREEN}55`,
                borderRadius: 14,
                padding: "1.5rem 1.75rem",
              }}
            >
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                <strong style={{ color: TEXT }}>Key resources:</strong> N.T. Wright,{" "}
                <em>Surprised by Hope</em> (2008); Francis Schaeffer,{" "}
                <em>Pollution and the Death of Man</em> (1970); Steven Bouma-Prediger,{" "}
                <em>For the Beauty of the Earth</em>.
              </p>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Three leading scholars on Genesis and ancient cosmology, the new creation, and the
              relationship between evolutionary science and Christian faith.
            </p>
            {videos.map((v) => (
              <div
                key={v.videoId}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}>
                    {v.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer note */}
        <div
          style={{
            marginTop: "3rem",
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "2rem",
          }}
        >
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, maxWidth: 680 }}>
            &ldquo;The earth is the Lord&rsquo;s, and everything in it, the world, and all who live in it&rdquo;
            (Psalm 24:1). Creation theology is not a peripheral interest; it shapes how we understand God,
            humanity, salvation, and the final hope of all things being made new.
          </p>
        </div>
      </main>
    </div>
  );
}
