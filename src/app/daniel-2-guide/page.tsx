"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = GOLD;

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference?: string;
  accent?: string;
  paragraphs: string[];
}

interface TabContent {
  id: Tab;
  title: string;
  reference: string;
  intro: string;
  blocks: Block[];
}

const content: TabContent[] = [
  {
    id: "Overview",
    title: "Daniel 2: Nebuchadnezzar's Dream of the Statue",
    reference: "Daniel 2:1&ndash;49",
    intro:
      "Daniel 2 is one of the great pivotal chapters of the Old Testament, a story of crisis and revelation in which the God of heaven discloses the future of world empires through the dream of a pagan king. It moves from terror to prayer, from prayer to revelation, and from revelation to the worship of the true God, sketching in a single panoramic vision the rise and fall of kingdoms and the coming of an everlasting kingdom that no human hand can build.",
    blocks: [
      {
        heading: "A Troubled King and an Impossible Demand",
        reference: "Daniel 2:1&ndash;13",
        accent: GOLD,
        paragraphs: [
          "In the second year of his reign, Nebuchadnezzar is troubled by dreams, and his spirit is so disturbed that sleep leaves him. He summons the magicians, the enchanters, the sorcerers, and the Chaldeans, the whole apparatus of Babylonian wisdom, and demands that they tell him his dream. They reply, reasonably enough, that if the king will recount the dream they will give its interpretation. But the king makes an impossible demand: they must tell him both the dream itself and its meaning.",
          "Nebuchadnezzar backs his demand with terrifying threats. If the wise men cannot reveal the dream and its interpretation, they will be torn limb from limb and their houses laid in ruins. If they succeed, they will receive gifts, rewards, and great honor. The wise men protest that no king has ever asked such a thing, and that what the king requests is beyond any human being; only the gods, whose dwelling is not with flesh, could know it. Their words are truer than they realize.",
          "The king's reaction is fury. He concludes that the wise men are merely stalling, speaking lying and corrupt words until the situation changes, and he issues a decree that all the wise men of Babylon are to be destroyed. The order sweeps up Daniel and his companions, who had not even been present at the confrontation. A young exile from Judah is suddenly under sentence of death for failing to perform a task he was never given.",
        ],
      },
      {
        heading: "Prayer, Revelation, and Doxology",
        reference: "Daniel 2:14&ndash;30",
        accent: PURPLE,
        paragraphs: [
          "Daniel responds to the crisis with calm wisdom. He approaches Arioch, the captain of the king's guard, and asks why the decree is so urgent, then requests an audience with the king to ask for time, promising to give the interpretation. Returning home, he tells his three friends, Hananiah, Mishael, and Azariah, and urges them to seek mercy from the God of heaven concerning this mystery, so that they would not perish with the rest of the wise men of Babylon.",
          "That night the mystery is revealed to Daniel in a vision. His immediate response is not to rush to the king but to bless God. He breaks into a great doxology: blessed be the name of God forever and ever, to whom belong wisdom and might. He changes times and seasons; he removes kings and sets up kings; he gives wisdom to the wise and knowledge to those who have understanding. He reveals deep and hidden things; he knows what is in the darkness, and the light dwells with him. Before Daniel speaks a word to the king, he gives glory to the God who answers prayer.",
          "Brought before Nebuchadnezzar, Daniel refuses to take any credit for himself. When the king asks whether he is able to make known the dream, Daniel answers that no wise men, enchanters, magicians, or astrologers can show the king this mystery, but there is a God in heaven who reveals mysteries, and he has made known to King Nebuchadnezzar what will be in the latter days. Daniel insists that the revelation came not because of any wisdom he possessed above all the living, but so that the king might know the thoughts of his own heart.",
        ],
      },
      {
        heading: "The Statue and the Stone",
        reference: "Daniel 2:31&ndash;45",
        accent: TEAL,
        paragraphs: [
          "Daniel describes the dream. The king had seen a great image, mighty and of exceeding brightness, frightening in appearance. Its head was of fine gold, its chest and arms of silver, its belly and thighs of bronze, its legs of iron, and its feet partly of iron and partly of clay. As the king watched, a stone was cut out by no human hand, and it struck the image on its feet of iron and clay and broke them in pieces.",
          "Then the whole image was crushed together, the iron, the clay, the bronze, the silver, and the gold, all broken to pieces and become like the chaff of the summer threshing floors, and the wind carried them away so that not a trace could be found. But the stone that struck the image became a great mountain and filled the whole earth. In a single image the entire course of human empire and its end is set before the king's eyes.",
          "Daniel interprets the dream. Nebuchadnezzar is the head of gold, for the God of heaven has given him the kingdom, the power, and the glory. After him will arise another kingdom inferior to his, then a third kingdom of bronze that will rule over all the earth, and then a fourth kingdom, strong as iron, that breaks and shatters all things. The feet and toes of iron mixed with clay represent a divided kingdom, partly strong and partly brittle, that will not hold together. And in the days of those kings the God of heaven will set up a kingdom that shall never be destroyed, a kingdom that will break all these in pieces and stand forever.",
        ],
      },
      {
        heading: "The King's Confession",
        reference: "Daniel 2:46&ndash;49",
        accent: ROSE,
        paragraphs: [
          "Nebuchadnezzar's response is dramatic. The most powerful man in the world falls on his face before Daniel and pays him homage. He declares, truly your God is God of gods and Lord of kings, a revealer of mysteries, for you have been able to reveal this mystery. The pagan king, confronted with a revelation he could not have obtained from all his wise men, bows before the supremacy of the God of the exiles.",
          "The king then exalts Daniel, making him ruler over the whole province of Babylon and chief over all its wise men, and showering him with gifts. Daniel, faithful to his friends, requests that Shadrach, Meshach, and Abednego be appointed over the affairs of the province while he himself remains at the king's court. The chapter that began with a death sentence over the exiles ends with their elevation, a vivid demonstration that the God of heaven not only reveals mysteries but rules the destinies of those who trust him.",
        ],
      },
    ],
  },
  {
    id: "Key Themes",
    title: "Key Themes of Daniel 2",
    reference: "Daniel 2:1&ndash;49",
    intro:
      "Daniel 2 is rich with theology that reaches far beyond its immediate setting in the Babylonian court. It is at once a story about prayer under pressure and a sweeping vision of history governed by the sovereign God, who reveals what is hidden and who alone establishes a kingdom that endures.",
    blocks: [
      {
        heading: "God the Revealer of Mysteries",
        accent: GOLD,
        paragraphs: [
          "The phrase that runs through the chapter like a refrain is that there is a God in heaven who reveals mysteries. The whole drama turns on the truth that the deep things of the future are hidden from human wisdom but open to God. The Babylonian experts, for all their lore, cannot recover even a dream, while the God of the captives discloses both the dream and its meaning. Knowledge of the future is shown to be a gift that God alone can give.",
          "This theme carries a quiet polemic against every form of human pretension to ultimate knowledge. The astrologers and enchanters represent the best wisdom the ancient world could offer, and they are exposed as helpless before the real question. By contrast, the God of heaven knows what is in the darkness and the light dwells with him. He is not a tribal deity confined to Judah; he is the Lord of all knowledge and all time.",
        ],
      },
      {
        heading: "The Sovereignty of God Over Empires",
        accent: PURPLE,
        paragraphs: [
          "Daniel's doxology names the central conviction of the book: God changes times and seasons; he removes kings and sets up kings. The mightiest empire of the age, ruled by a king who held the power of life and death over the wise men of Babylon, is itself merely the head of gold in a statue that God will one day reduce to chaff. Human power is real, but it is derivative and temporary, granted and withdrawn at the will of the Most High.",
          "This is a profoundly liberating truth for a people in exile. The Judean captives might appear to be at the mercy of Babylon, but the book insists that Babylon is in the hand of God. The same conviction sustains the faithful in every age of apparent defeat: the kingdoms that loom so large in our experience are, in the long view of God's purpose, passing things, and the one who raises them up will also bring them down in his time.",
        ],
      },
      {
        heading: "The Succession of World Kingdoms",
        accent: TEAL,
        paragraphs: [
          "The image of the four metals presents a sequence of empires declining in value from gold to silver to bronze to iron, yet increasing in hardness and crushing power. The dream frames the whole sweep of human imperial history as a single descending structure that will finally be shattered. The vision is deliberately panoramic, taking in not just Babylon but the long succession of dominions that follow it.",
          "The feet of iron mixed with clay portray a final phase of division and instability, a kingdom partly strong and partly brittle that cannot truly hold together, just as iron does not bond with clay. The point of the imagery is not to glorify any of these kingdoms but to set the stage for their common end. However impressive the statue, it stands on feet that will not endure the blow that is coming.",
        ],
      },
      {
        heading: "The Stone and the Everlasting Kingdom",
        accent: ROSE,
        paragraphs: [
          "The climax of the vision is the stone cut out by no human hand, which strikes the image, grinds it to dust, and then grows into a great mountain filling the whole earth. The stone represents the kingdom that the God of heaven sets up, a kingdom that shall never be destroyed and shall not be left to another people. Where the metals decline and shatter, the stone alone endures and triumphs.",
          "The detail that the stone is cut out without human hands is theologically loaded. It signals that this kingdom is of divine origin, not the product of human empire building or political achievement. It comes from outside the system of rising and falling powers, breaking into history from above. Christian readers have long seen in this stone a foreshadowing of the kingdom of God established through the Messiah, a kingdom that begins small and unremarkable yet is destined to fill the earth and outlast every rival.",
        ],
      },
      {
        heading: "Faith and Prayer Under Pressure",
        accent: GREEN,
        paragraphs: [
          "Alongside the grand sweep of history runs an intimate story of faith. Faced with a death sentence, Daniel does not panic; he acts with prudence, asks for time, and gathers his friends to seek mercy from the God of heaven. The revelation comes in answer to united, urgent prayer, and Daniel's first response is worship rather than self-promotion. The chapter models a faith that meets crisis with prayer and meets answered prayer with praise.",
          "Daniel's humility before the king is as instructive as his courage. He repeatedly directs all credit away from himself and toward God, insisting that no wisdom of his own accounts for the revelation. The young exile shows that faithfulness in a hostile environment is possible, and that God honors those who honor him, lifting them up in his own time and way without compromising their integrity.",
        ],
      },
    ],
  },
  {
    id: "Verse by Verse",
    title: "Verse by Verse Through Daniel 2",
    reference: "Daniel 2:1&ndash;49",
    intro:
      "Following the chapter section by section reveals a carefully built narrative that moves from a king's nightmare to a confession of the true God. Each stage advances the argument that the God of heaven, and not the wisdom of Babylon, holds the key to the future and the destiny of nations.",
    blocks: [
      {
        heading: "The Dream and the Decree",
        reference: "Daniel 2:1&ndash;13",
        accent: GOLD,
        paragraphs: [
          "The opening verses establish the crisis. Nebuchadnezzar's troubled dreams rob him of sleep, and he turns to the Babylonian wise men with a demand they cannot meet, that they reveal both the dream and its interpretation. By requiring them to recover the dream itself, the king exposes the limits of all human and occult wisdom. Their honest confession that only the gods could know such a thing sets up the contrast the chapter will exploit.",
          "The king's furious decree that all the wise men be destroyed raises the stakes to life and death and draws Daniel and his friends into mortal danger. The narrative has now created a situation in which only a genuine revelation from God can save the day. Everything that follows will demonstrate that such a God exists and that he hears the prayers of his servants.",
        ],
      },
      {
        heading: "Daniel Seeks Mercy",
        reference: "Daniel 2:14&ndash;18",
        accent: GREEN,
        paragraphs: [
          "Daniel meets the crisis with discretion and faith. He inquires carefully of Arioch, secures an audience with the king, and asks for time, then returns to his three companions, Hananiah, Mishael, and Azariah. Together they seek mercy from the God of heaven concerning the mystery. The scene is a model of how the faithful are to respond to overwhelming threat, with composure, with shared prayer, and with confidence that God is able to reveal what no one else can.",
          "The naming of the friends and the emphasis on their united seeking underline that this is a communal act of faith. Daniel does not face the crisis alone, and the deliverance that follows is sought and received in fellowship. The God of heaven is addressed as the one whose mercy can reach into the very councils of a pagan empire.",
        ],
      },
      {
        heading: "The Mystery Revealed",
        reference: "Daniel 2:19&ndash;23",
        accent: PURPLE,
        paragraphs: [
          "The mystery is revealed to Daniel in a night vision, and his response is a doxology of great beauty. He blesses the name of God forever, ascribing to him wisdom and might, and confessing that he changes times and seasons, removes kings and sets up kings, and reveals deep and hidden things. The prayer interprets the whole episode theologically before the king ever hears a word.",
          "Daniel thanks the God of his fathers for giving him wisdom and might and for making known the very thing they had asked. The pattern is striking: revelation leads immediately to worship. Before deliverance is even secured at the royal court, Daniel pauses to give God the glory, teaching that the right response to answered prayer is praise.",
        ],
      },
      {
        heading: "Before the King",
        reference: "Daniel 2:24&ndash;35",
        accent: TEAL,
        paragraphs: [
          "Daniel halts the execution and is brought before Nebuchadnezzar, where he carefully disclaims any personal wisdom and points the king to the God in heaven who reveals mysteries. He explains that the revelation concerns what will be in the latter days and is given so that the king may know the thoughts of his own heart. The stage is set for the unveiling of the dream itself.",
          "Daniel then recounts the vision of the great statue, gold and silver and bronze and iron and feet of iron and clay, and the stone cut out by no human hand that strikes the feet, shatters the whole image into chaff carried off by the wind, and grows into a mountain that fills the earth. The description is vivid and total, an entire philosophy of history compressed into a single dream image.",
        ],
      },
      {
        heading: "The Interpretation and the King's Worship",
        reference: "Daniel 2:36&ndash;49",
        accent: ROSE,
        paragraphs: [
          "Daniel interprets the metals as a succession of kingdoms beginning with Nebuchadnezzar as the head of gold and descending through inferior realms to the divided kingdom of iron and clay. The decisive word comes at the end: in the days of those kings the God of heaven will set up a kingdom that shall never be destroyed, the stone that breaks all the others and stands forever. The dream is sure and its interpretation trustworthy.",
          "Nebuchadnezzar falls on his face, pays homage to Daniel, and confesses that Daniel's God is truly a God of gods and Lord of kings and a revealer of mysteries. He elevates Daniel to high office and, at Daniel's request, appoints Shadrach, Meshach, and Abednego over the affairs of the province. The chapter ends with the exiles exalted and the pagan king bowing before the supremacy of the living God.",
        ],
      },
    ],
  },
  {
    id: "Application",
    title: "Living Daniel 2 Today",
    reference: "Daniel 2:1&ndash;49",
    intro:
      "Daniel 2 is not merely a window onto ancient empires; it is a summons to live by faith in the sovereign God who rules the rise and fall of every power. The chapter speaks directly to anyone facing pressure, uncertainty, or a world that seems out of control, calling us to prayer, to praise, and to confident hope in the kingdom that cannot be shaken.",
    blocks: [
      {
        heading: "Meet Crisis With Prayer",
        accent: GREEN,
        paragraphs: [
          "When the death decree fell, Daniel did not despair and did not scheme; he acted wisely and then gathered his friends to seek mercy from the God of heaven. We are constantly tempted to meet our crises with anxiety, frantic activity, or quiet resignation. Daniel 2 calls us instead to turn first to God in prayer, and to do so in the company of others who share our faith, trusting that the God who reveals mysteries also hears and answers.",
          "The chapter also teaches us how to respond when prayers are answered. Daniel's first act after the revelation was not to save his own life but to bless God. A heart shaped by this chapter will be quick to give thanks, refusing to take the credit for what God alone has done and returning to him the glory that is his due.",
        ],
      },
      {
        heading: "Trust the God Who Rules History",
        accent: PURPLE,
        paragraphs: [
          "We live in a world of shifting powers, where governments rise and fall and the future can feel frighteningly uncertain. Daniel 2 anchors us in the truth that God changes times and seasons, removes kings and sets up kings, and holds the entire course of history in his hands. The empires that seem so permanent are, in his sight, passing metals destined to become chaff before the wind.",
          "This conviction frees us from both fear and despair. We do not need to pin our hope on any political order or be crushed when the kingdoms of this world disappoint us, for our confidence rests in the One who governs them all. Whatever statue dominates the landscape of our age, we know who holds the stone.",
        ],
      },
      {
        heading: "Hope in the Unshakable Kingdom",
        accent: ROSE,
        paragraphs: [
          "The deepest application of Daniel 2 is hope. The God of heaven has promised to set up a kingdom that shall never be destroyed, a stone cut without human hands that will fill the whole earth. For those who long for justice and for a world set right, this is the great assurance: the final kingdom is not built by human effort and cannot be overthrown by human power. It comes from God and it endures forever.",
          "To live in this hope is to invest our lives in what lasts. The kingdoms of gold and silver and bronze and iron pass away, but the kingdom of God remains. We are invited to belong to that kingdom now, to live as citizens of the mountain that fills the earth, and to face the uncertainties of our own day with the unshakable confidence that the stone has already been cut from the mountain.",
        ],
      },
      {
        heading: "Stand Faithful in a Foreign Land",
        accent: TEAL,
        paragraphs: [
          "Daniel and his friends were exiles serving in a pagan court, far from home and surrounded by a culture that did not share their faith. Yet they remained faithful, prayed openly to the God of heaven, and bore witness to him before the most powerful man in the world. Their example speaks to every believer who feels like a stranger in a world that does not honor God.",
          "We too are called to live with integrity in places where our convictions are not shared, neither hiding our faith nor compromising it. Like Daniel, we can serve our communities with excellence while giving our ultimate allegiance to God, trusting that he is able to honor faithfulness and to make his name known through the witness of those who quietly refuse to bow to any lesser lord.",
        ],
      },
    ],
  },
];

const videoItems = [
  { videoId: "Vk7pQ2sLm9X", title: "Daniel 2 Overview - Nebuchadnezzar's Dream of the Statue" },
  { videoId: "Tg5nRc8wYb0", title: "The Four Kingdoms Explained - Gold, Silver, Bronze, and Iron" },
  { videoId: "Hd9sWqP3rL2", title: "The Stone Cut Without Hands - God's Everlasting Kingdom" },
  { videoId: "Mb2xKvU7sZ8", title: "Faith and Prayer Under Pressure - Daniel and His Friends" },
];

export default function Daniel2GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const current = content.find((c) => c.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Daniel 2: Nebuchadnezzar's Dream of the Statue
          </h1>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}
            dangerouslySetInnerHTML={{
              __html:
                "A troubled king demands the impossible, a young exile seeks mercy from the God of heaven, and a dream of a great statue &mdash; gold, silver, bronze, and iron &mdash; reveals the rise and fall of empires and the coming of a stone cut without hands that becomes a mountain filling the whole earth.",
            }}
          />
        </header>

        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 5, background: BG, display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, padding: "0.75rem 0 1.25rem" }}>
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

        {current && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }} dangerouslySetInnerHTML={{ __html: current.title }} />
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: current.reference }} />
            <p style={{ color: TEXT, fontSize: "1.08rem", lineHeight: 1.85, margin: "0 0 2.5rem" }} dangerouslySetInnerHTML={{ __html: current.intro }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {current.blocks.map((b, bi) => (
                <article key={bi} style={{ borderLeft: `3px solid ${b.accent || ACCENT}`, paddingLeft: "1.25rem" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 4px", color: TEXT }} dangerouslySetInnerHTML={{ __html: b.heading }} />
                  {b.reference && (
                    <div style={{ color: b.accent || ACCENT, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: b.reference }} />
                  )}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                    {b.paragraphs.map((para, pi) => (
                      <p key={pi} style={{ color: MUTED, fontSize: "1.04rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.15rem" }}>Video Teaching</h3>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 1.5rem" }}>
            Deepen your study of Daniel 2 through visual teaching covering the king's dream, the four kingdoms of the statue, the stone that becomes a mountain, and the faith of Daniel and his friends under pressure.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }} dangerouslySetInnerHTML={{ __html: "&ldquo;A Kingdom That Shall Never Be Destroyed&rdquo;" }} />
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{
              __html:
                "Daniel 2 lifts our eyes from the immediate terror of a royal decree to the grand horizon of history under God. The statue of gold and silver and bronze and iron stands for every empire that has ever overawed the world, and the stone cut without hands stands for the kingdom that God himself will raise. The empires become chaff; the stone fills the earth. In every age of upheaval the message of this chapter remains: there is a God in heaven who reveals mysteries, who removes kings and sets up kings, and whose kingdom shall stand forever.",
            }}
          />
        </div>
      </main>
    </div>
  );
}
