"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "I Have Loved You",
  "Corrupt Worship",
  "Breaking Faith",
  "The Messenger of the Covenant",
  "The Sun of Righteousness",
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
    id: "I Have Loved You",
    heading: "I Have Loved You",
    reference: "Malachi 1:1&ndash;5",
    paragraphs: [
      "The Book of Malachi is the final word of the Old Testament, spoken to a weary and disillusioned generation roughly a century after the return from exile. The temple had been rebuilt, the sacrifices restored, and yet the glory the prophets had promised seemed nowhere to be found. The harvests were thin, the nations still oppressed them, and a creeping cynicism had settled over the hearts of the people. Into this spiritual coldness comes the prophet Malachi, whose name means &ldquo;my messenger.&rdquo;",
      "The book unfolds as a series of disputes, a back-and-forth argument between the Lord and his people. Again and again God makes a declaration, the people sullenly question it, and God answers their challenge. This pattern of statement, objection, and reply gives Malachi its distinctive, courtroom-like character, exposing the doubt and ingratitude lurking beneath an outwardly religious people.",
      "The opening word is the most tender of all: &ldquo;I have loved you, says the Lord. But you say, How have you loved us?&rdquo; (1:2). It is a heartbreaking exchange. God declares his unwavering, electing love, and his people, hardened by disappointment, throw the question back in his face, demanding proof. They cannot see the love because their eyes are clouded by self-pity and unbelief.",
      "God answers by pointing to history: &ldquo;Is not Esau Jacob&rsquo;s brother? Yet I have loved Jacob but Esau I have hated&rdquo; (1:2&ndash;3). The proof of his love is his sovereign, undeserved choice of Jacob &mdash; of Israel &mdash; over Esau and his descendants in Edom. Where Edom lay in ruins under judgment, Israel had been preserved, restored, and brought home. Their very existence as a people was the standing evidence of a love they had come to doubt.",
      "This opening sets the tone for the whole book. The problem in Malachi&rsquo;s day was not chiefly idolatry or open rebellion, as in earlier generations, but a subtle and corrosive doubt &mdash; the quiet suspicion that serving God was pointless, that his love was a fiction, and that faithfulness brought no reward. It is the temptation of every believer in a long season of waiting and apparent silence.",
      "Yet the Lord insists that his love is real and his purposes sure: &ldquo;Your own eyes shall see this, and you shall say, Great is the Lord beyond the border of Israel!&rdquo; (1:5). Before God will rebuke his people for their many failures, he first reassures them of the bedrock truth on which everything else rests: he has loved them, he loves them still, and his love will yet be vindicated before the watching world.",
    ],
  },
  {
    id: "Corrupt Worship",
    heading: "Corrupt Worship",
    reference: "Malachi 1:6&ndash;2:9",
    paragraphs: [
      "Having reassured his people of his love, the Lord turns to confront the corruption that had crept into their worship, and his rebuke falls first and hardest upon the priests. &ldquo;A son honors his father, and a servant his master. If then I am a father, where is my honor? And if I am a master, where is my fear?&rdquo; (1:6). The men charged with leading Israel in the worship of God had grown careless and contemptuous of holy things.",
      "The heart of the offense was the offering of blemished sacrifices. The law of Moses required that animals brought to the altar be without defect, the best of the flock; but the priests were accepting and offering the blind, the lame, and the sick. &ldquo;When you offer blind animals in sacrifice, is that not evil? And when you offer those that are lame or sick, is that not evil?&rdquo; (1:8). They were giving God their leftovers, the worthless culls they would never dare present to a human governor.",
      "God exposes the insult with a pointed challenge: &ldquo;Present that to your governor; will he accept you or show you favor?&rdquo; (1:8). Even an earthly ruler would be offended by such a gift, yet the priests imagined that the King of heaven should be content with their refuse. Their worship had become a wearisome formality, and they sneered, &ldquo;What a weariness this is&rdquo; (1:13), snorting in contempt at the table of the Lord.",
      "So strong is God&rsquo;s displeasure that he declares he would rather the temple doors be shut than have his altar profaned with such hollow offerings: &ldquo;Oh that there were one among you who would shut the doors, that you might not kindle fire on my altar in vain! I have no pleasure in you&rdquo; (1:10). Worthless worship is worse than no worship at all. And then, looking beyond Israel, he announces that among the nations his name will be great, and &ldquo;in every place incense is offered to my name, and a pure offering&rdquo; (1:11).",
      "The Lord then pronounces a solemn judgment on the priests who have failed in their sacred trust. &ldquo;I will curse your blessings&hellip; because you do not lay it to heart&rdquo; (2:2). He reminds them of the covenant of Levi, a covenant of life and peace, in which the true priest should walk in reverence, speak truth, and &ldquo;turn many from iniquity&rdquo; (2:6). The lips of a priest should guard knowledge, for he is the messenger of the Lord of hosts.",
      "But these priests had &ldquo;turned aside from the way&rdquo; and &ldquo;caused many to stumble&rdquo; (2:8). By their corruption they had not led the people to God but driven them away. The passage is a sobering warning to all who hold spiritual office: God takes the honor of his worship with utmost seriousness, and those entrusted with leading it bear a weighty responsibility to give him their best, their reverence, and their wholehearted devotion.",
    ],
  },
  {
    id: "Breaking Faith",
    heading: "Breaking Faith",
    reference: "Malachi 2:10&ndash;3:15",
    paragraphs: [
      "From corrupt worship Malachi turns to corrupt living, and the recurring charge is faithlessness &mdash; the breaking of faith with God and with one another. &ldquo;Have we not all one Father? Has not one God created us? Why then are we faithless to one another, profaning the covenant of our fathers?&rdquo; (2:10). The unity and integrity of God&rsquo;s people were being torn apart by treachery in their most intimate relationships.",
      "The first great betrayal was in marriage. The men of Judah had been faithless, divorcing the wives of their youth and intermarrying with women who worshiped foreign gods. God&rsquo;s response is searing in its tenderness for the wronged wife: &ldquo;The Lord was witness between you and the wife of your youth, to whom you have been faithless, though she is your companion and your wife by covenant&rdquo; (2:14). Then comes the famous and unflinching declaration: &ldquo;For the man who does not love his wife but divorces her, says the Lord&hellip; covers his garment with violence&hellip; So guard yourselves in your spirit, and do not be faithless&rdquo; (2:16).",
      "The people had also grown faithless in their words, wearying the Lord with their cynical complaints. &ldquo;You have wearied the Lord with your words&hellip; By saying, Everyone who does evil is good in the sight of the Lord&hellip; Where is the God of justice?&rdquo; (2:17). They had begun to accuse God of indifference, claiming that the wicked prospered while serving God was useless. Their hearts had grown bitter and their tongues bold against heaven.",
      "Then comes one of the sharpest charges of all, a question that cuts to the heart: &ldquo;Will man rob God? Yet you are robbing me. But you say, How have we robbed you? In your tithes and contributions&rdquo; (3:8). By withholding the tithes and offerings due to the Lord, the people had effectively stolen from God himself, and a curse rested on the whole nation because of it. Their stinginess toward God was both a symptom and a cause of their spiritual decline.",
      "Yet even here the message is laced with grace, for God offers a remarkable invitation: &ldquo;Bring the full tithe into the storehouse&hellip; And thereby put me to the test, says the Lord of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need&rdquo; (3:10). It is the one place in Scripture where God explicitly invites his people to test his faithfulness, promising overflowing blessing to those who will trust him with their substance.",
      "The deepest root of all this faithlessness was a hardened, accusing spirit. &ldquo;Your words have been hard against me, says the Lord&hellip; You have said, It is vain to serve God. What is the profit of our keeping his charge?&rdquo; (3:13&ndash;14). The people had concluded that godliness was worthless and that the arrogant were the truly blessed. Malachi confronts this bitter cynicism head-on, insisting that a day of reckoning is coming when the difference between the righteous and the wicked will at last be made plain.",
    ],
  },
  {
    id: "The Messenger of the Covenant",
    heading: "The Messenger of the Covenant",
    reference: "Malachi 3:1&ndash;5",
    paragraphs: [
      "In answer to the people&rsquo;s cynical question, &ldquo;Where is the God of justice?&rdquo;, the Lord makes a thrilling promise that the book of Malachi is best remembered for. He announces the coming of two figures: a forerunner who will prepare the way, and the Lord himself who will then suddenly appear in his temple. &ldquo;Behold, I send my messenger, and he will prepare the way before me. And the Lord whom you seek will suddenly come to his temple&rdquo; (3:1).",
      "This messenger of preparation is identified at the very end of the book as a coming Elijah, and the New Testament makes the fulfillment unmistakable. The Gospels declare that John the Baptist was this promised forerunner, the voice crying in the wilderness, &ldquo;Prepare the way of the Lord.&rdquo; Jesus himself said of John, &ldquo;This is he of whom it is written, Behold, I send my messenger before your face, who will prepare your way before you&rdquo; (Matthew 11:10), quoting Malachi directly.",
      "The one for whom the messenger prepares is called &ldquo;the messenger of the covenant in whom you delight&rdquo; (3:1) &mdash; the Lord himself, coming to his temple. His coming, however, is not only for comfort but for testing and purifying. &ldquo;But who can endure the day of his coming, and who can stand when he appears? For he is like a refiner&rsquo;s fire and like fullers&rsquo; soap&rdquo; (3:2). His arrival would sift and refine his people as gold and silver are refined in the furnace.",
      "&ldquo;He will sit as a refiner and purifier of silver, and he will purify the sons of Levi and refine them like gold and silver, and they will bring offerings in righteousness to the Lord&rdquo; (3:3). The refiner watches the silver in the fire until he can see his own reflection in it; so the Lord would purify his people until they reflected his holiness, restoring the pure worship that had been so badly corrupted by the priests.",
      "His coming would also mean judgment on the unrepentant: &ldquo;Then I will draw near to you for judgment. I will be a swift witness against the sorcerers, against the adulterers, against those who swear falsely, against those who oppress the hired worker&hellip; and do not fear me&rdquo; (3:5). The God of justice the people had cynically demanded would indeed appear &mdash; but he would begin his judgment with the very ones who questioned him.",
      "This prophecy bridges the entire span between the Testaments. The same God who spoke through Malachi would fall silent for four long centuries &mdash; no prophet would arise, no new word of Scripture would be given &mdash; until the silence was broken at last by the voice of John the Baptist in the wilderness, preparing the way for the Lord who came suddenly to his temple in the person of Jesus Christ. Malachi&rsquo;s final hope leans forward across four hundred years into the opening pages of the Gospels.",
    ],
  },
  {
    id: "The Sun of Righteousness",
    heading: "The Sun of Righteousness",
    reference: "Malachi 4:1&ndash;6",
    paragraphs: [
      "The Old Testament closes not in darkness but in a blaze of dawning light. To those who had wondered whether it was vain to serve God, whether the wicked truly got away with their evil, Malachi&rsquo;s final chapter draws a sharp and final line between two destinies. &ldquo;Behold, the day is coming, burning like an oven, when all the arrogant and all evildoers will be stubble&rdquo; (4:1). For the proud and the godless, the coming day will be a consuming fire.",
      "But for those who fear the Lord, that same day brings warmth and healing rather than destruction. In one of the most beautiful images in all of Scripture, God promises: &ldquo;But for you who fear my name, the sun of righteousness shall rise with healing in its wings. You shall go out leaping like calves from the stall&rdquo; (4:2). The Messiah is pictured as the rising sun whose beams carry healing, scattering the long night of waiting and bringing the joy of new life and freedom.",
      "Christians have long seen in this &ldquo;sun of righteousness&rdquo; a portrait of Christ himself, the light of the world, the dayspring from on high who came to give light to those who sat in darkness. After four centuries of prophetic silence, the dawn would break with the coming of Jesus, in whom the righteousness of God rises to heal and restore all who trust in him. The image is woven into Christian hymnody to this day.",
      "The book then calls God&rsquo;s people back to the foundation of faithful living: &ldquo;Remember the law of my servant Moses, the statutes and rules that I commanded him at Horeb for all Israel&rdquo; (4:4). As the prophetic voice prepares to fall silent, the people are pointed back to the unchanging word already given, to hold fast to it through the long years of waiting until the promised dawn should come.",
      "Then comes the final promise, looking forward to the forerunner: &ldquo;Behold, I will send you Elijah the prophet before the great and awesome day of the Lord comes. And he will turn the hearts of fathers to their children and the hearts of children to their fathers&rdquo; (4:5&ndash;6). This Elijah, as the angel Gabriel would later declare to Zechariah the priest, was John the Baptist, who came &ldquo;in the spirit and power of Elijah&rdquo; to make ready a people prepared for the Lord.",
      "And so the Old Testament ends, poised on the edge of expectation. The last book closes with a promise that points beyond four hundred years of silence to the breaking of a new day. The next voice the people of God would hear, after that long quiet, would be a man clothed in camel&rsquo;s hair crying out in the wilderness, &ldquo;Prepare the way of the Lord&rdquo; &mdash; the herald of the sun of righteousness, risen at last with healing in his wings.",
    ],
  },
];

const videoItems = [
  { videoId: "HALuNJTH1R8", title: "BibleProject - Overview - Malachi" },
  { videoId: "5Ia0n0lWnVc", title: "Malachi and the End of the Old Testament Explained" },
  { videoId: "fmwoZTOSZ8A", title: "I Have Loved You - The Message of Malachi" },
  { videoId: "kP0BAfvRBmU", title: "The Sun of Righteousness and the 400 Years of Silence" },
];

export default function ChristianBookOfMalachiGuidePage() {
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
            The Book of Malachi
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The final word of the Old Testament &mdash; God&rsquo;s declaration of love to a doubting people, his rebuke of corrupt worship and broken faith, the promise of the messenger who prepares the way, and the dawning of the sun of righteousness before four hundred years of silence give way to the Gospel.
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
              Deepen your study of Malachi through visual teaching on God&rsquo;s love for a doubting people, the rebuke of corrupt worship and broken faith, the messenger of the covenant, and the sun of righteousness who rises with healing in his wings.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Sun of Righteousness Shall Rise</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Malachi closes the Old Testament by meeting a cynical, doubting people with the steadfast love of God, calling them back to wholehearted worship and faithful living. Its final promise of a messenger to prepare the way and a sun of righteousness rising with healing leans across four hundred years of silence to the coming of John the Baptist and of Christ &mdash; the dawn that the whole Old Testament had been waiting for.
          </p>
        </div>
      </main>
    </div>
  );
}
