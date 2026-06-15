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
  "Overview",
  "Nations Under Judgment",
  "The Coming King",
  "The Triumphal Entry Prophecy",
  "Freeing Prisoners",
  "God Fights for Israel",
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
    heading: "Overview of Zechariah 9",
    reference: "Zechariah 9:1&ndash;17",
    paragraphs: [
      "Zechariah 9 opens the second major section of the book &mdash; often called Second Zechariah &mdash; and it does so with a burst of prophetic energy that sweeps from the nations surrounding Israel all the way to the throne room of God. The chapter is one of the most quoted in the New Testament, and for good reason: it contains the prophetic announcement that the King of Israel will ride into Jerusalem on a donkey, righteous and victorious yet lowly, bringing peace not only to Israel but to the ends of the earth. That single verse (9:9) was fulfilled to the letter on the day Christians call Palm Sunday, when Jesus rode into Jerusalem to the cries of the crowd waving palm branches.",
      "The chapter begins not with comfort but with judgment. The &ldquo;burden of the word of the Lord&rdquo; falls first against the nations that surround Israel &mdash; Hadrach, Damascus, Hamath, Tyre, Sidon, and the cities of Philistia. These were the traditional enemies and oppressors of God&rsquo;s people, the powers that had bullied, conquered, and afflicted Israel for centuries. God announces their reckoning with the precision of a divine military commander who knows exactly where each city is and exactly what is coming to each one.",
      "But the judgment on the nations is not the heart of the chapter. The heart is the announcement in verses 9&ndash;10 of a coming King who is unlike any king the world has seen: a ruler who is righteous (having salvation, or vindicated by God), victorious, and yet humble &mdash; riding not on a war horse but on a donkey, the animal of peace. This king will proclaim peace to the nations and his rule will extend from sea to sea and to the ends of the earth. The contrast with worldly kingship could not be sharper: this king conquers not by military might but by the word of peace.",
      "The second half of the chapter (vv. 11&ndash;17) describes God&rsquo;s intervention on behalf of his people. God announces the freeing of prisoners from a waterless pit, the restoration of double to the exiles, God fighting for his people like a warrior wielding Judah as a bow and Ephraim as an arrow. The chapter closes with an image of the Lord their God saving his people like a flock, and with the vision of them as the jewels of a crown sparkling over his land. Throughout, the driving force is not Israel&rsquo;s merit but the covenant faithfulness of God who, in the famous phrase, will restore double to his people.",
      "Zechariah 9 is therefore a prophetic panorama that moves from the judgment of proud nations, through the announcement of a humble Messiah King, to the redemption and restoration of a people who had known exile and imprisonment. It is a chapter about reversal &mdash; the proud brought low, the humble exalted, prisoners set free, the scattered gathered, and the Lord himself entering his city not to be served but to serve, not astride a war horse but mounted on a donkey, bringing peace to a world that had known only conquest.",
    ],
  },
  {
    id: "Nations Under Judgment",
    heading: "Nations Under Judgment",
    reference: "Zechariah 9:1&ndash;8",
    paragraphs: [
      "The opening verses of Zechariah 9 read like a prophetic dispatch from a divine general surveying the battlefield from north to south. The oracle begins with Hadrach and Damascus in the far north of Syria &mdash; &ldquo;The burden of the word of the Lord is against the land of Hadrach and Damascus is its resting place&rdquo; (9:1). Hadrach was a Syrian city or region known from Assyrian records; its inclusion suggests this prophecy has real geopolitical grounding. Damascus, the great Syrian capital, is named as the place where this judgment will come to rest, as if the word of the Lord is settling over the city like a weight it cannot escape.",
      "The oracle then moves south to Hamath, another significant Syrian city on the Orontes River, and then westward to the coastal cities of Tyre and Sidon &mdash; the great Phoenician commercial powers of the ancient world. Tyre in particular receives extended attention. The city was proverbially rich and militarily secure, having built itself up on an island fortress that had resisted armies for centuries. &ldquo;Tyre has built herself a stronghold and heaped up silver like dust, and fine gold like the mud of the streets&rdquo; (9:3). But the prophet announces that the Lord will dispossess her; he will strike her power into the sea, and she will be devoured by fire.",
      "The judgment then turns southward to the five cities of Philistia: Ashkelon, Gaza, Ekron, and Ashdod (Gath being omitted, perhaps already destroyed). The Philistines had been Israel&rsquo;s persistent adversaries from the time of the judges through the days of Saul and David, and their cities had been thorns in Israel&rsquo;s side for generations. Now the word of judgment falls on each in turn: Ashkelon will see and be afraid, Gaza will writhe in anguish, Ekron&rsquo;s hope will wither. The pride of the Philistines will be cut off.",
      "What is remarkable is what follows the judgment. In verse 7 the prophecy takes an unexpected turn: God will remove the blood and the abominations of the Philistines from between their teeth, and even they &mdash; the ancient enemies &mdash; will become &ldquo;a remnant for our God.&rdquo; Ekron will be like the Jebusites, who were incorporated into Israel when Jerusalem was taken by David and became part of God&rsquo;s people. Even in the midst of sweeping judgment, there is a word of inclusion: some from the nations will be gathered into the people of God.",
      "Verse 8 then shifts the perspective entirely: &ldquo;Then I will encamp at my house as a guard, so that none shall march to and fro; no oppressor shall again march over them, for now I see with my own eyes.&rdquo; The Lord himself will stand guard over his house and his people. The nations have been assessed and judged; the enemies have been named and their end announced; and now God declares his personal watchfulness over Jerusalem. The God who sees &mdash; &ldquo;I see with my own eyes&rdquo; &mdash; is the God who will act. The judgment on the nations is not cruelty but clearing; it prepares the way for the King who is coming.",
      "The historical sweep of this passage is striking. Alexander the Great&rsquo;s campaign through exactly this corridor of nations in 332 BC &mdash; moving from Syria through Phoenicia and then down the coast through Philistia &mdash; has long been noted as a remarkable convergence with this prophecy. Whether one sees it as fulfillment or as a partial fulfillment pointing to a fuller one, the oracle demonstrates that the God of Israel is the God of history, whose word is not vague but specific, whose purposes encompass the rise and fall of nations, and whose eye is always on the house he has chosen.",
    ],
  },
  {
    id: "The Coming King",
    heading: "The Coming King",
    reference: "Zechariah 9:9&ndash;10",
    paragraphs: [
      "At the climax of the first movement of Zechariah 9, after the surrounding nations have been addressed and the divine guard has been posted over Jerusalem, the prophet bursts into a summons of breathtaking hope: &ldquo;Rejoice greatly, O daughter of Zion! Shout aloud, O daughter of Jerusalem! Behold, your king is coming to you; righteous and having salvation is he, humble and mounted on a donkey, on a colt, the foal of a donkey&rdquo; (9:9). The double imperative &mdash; rejoice, shout &mdash; signals that what follows is not merely information but cause for the deepest joy.",
      "Every word in verse 9 carries freight. The king is described as &ldquo;righteous&rdquo; &mdash; he is just, he embodies the covenant faithfulness of God, there is no corruption or injustice in him. He is described as &ldquo;having salvation&rdquo; &mdash; the Hebrew phrase can also be rendered &ldquo;victorious&rdquo; or &ldquo;vindicated,&rdquo; suggesting one who has been delivered by God and who therefore brings deliverance. He is &ldquo;humble&rdquo; &mdash; the Hebrew word speaks of poverty, lowliness, the condition of one who is not self-sufficient but dependent on God. And he comes &ldquo;mounted on a donkey.&rdquo;",
      "The donkey is the defining image. In the ancient world, horses were the animals of war and conquest &mdash; a king who came riding a horse came to fight. A donkey was an animal of work and peace, the conveyance of ordinary life. When kings came in peace, they sometimes rode donkeys; it was also the animal of judges and leaders in the period before Israel had a monarchy (Judges 5:10, 10:4). By choosing to announce that the coming king rides on a donkey, the prophet is making a radical theological statement: this king&rsquo;s method is peace, not conquest. His power does not reside in military force.",
      "Verse 10 then describes the scope of this king&rsquo;s reign: &ldquo;He will cut off the chariot from Ephraim and the war horse from Jerusalem; and the battle bow shall be cut off, and he shall speak peace to the nations; his rule shall be from sea to sea, and from the River to the ends of the earth.&rdquo; The instruments of war &mdash; chariots, horses, bows &mdash; are abolished, not by defeat in battle but by the arrival of a peace that makes them unnecessary. This is not a king who wins wars; this is a king who ends war. And his dominion is universal: from sea to sea, from the Euphrates to the ends of the earth.",
      "The radical nature of this vision cannot be overstated. Israel, surrounded by enemies, oppressed by empires, longing for deliverance, was offered a vision of a king who would come not as a mighty conqueror on a war horse but as a humble servant on a donkey. This was not the kind of messiah that would satisfy the warrior instinct. It was the kind of messiah who would confound the wise &mdash; who would conquer not by killing enemies but by making peace, not by wielding the sword but by being pierced by it, not by accumulating power but by laying it down. The cross lies hidden in the shadow of the donkey.",
    ],
  },
  {
    id: "The Triumphal Entry Prophecy",
    heading: "The Triumphal Entry Prophecy",
    reference: "Zechariah 9:9 / Matthew 21:1&ndash;11",
    paragraphs: [
      "Of all the messianic prophecies of the Old Testament, Zechariah 9:9 is among the most precisely fulfilled. On the day Christians call Palm Sunday &mdash; the Sunday before his crucifixion &mdash; Jesus of Nazareth arranged to enter Jerusalem in a manner that was a deliberate, conscious enactment of this prophecy. Matthew records: &ldquo;This took place to fulfill what was spoken by the prophet, saying, &lsquo;Say to the daughter of Zion, Behold, your king is coming to you, humble, and mounted on a donkey, on a colt, the foal of a beast of burden&rsquo;&rdquo; (Matthew 21:4&ndash;5). The evangelist quotes Zechariah 9:9 directly, making the connection explicit.",
      "Jesus sent two disciples ahead to a village where they would find a donkey and her colt tied, with instructions to bring them. If anyone asked, they were to say, &ldquo;The Lord needs them.&rdquo; This arrangement &mdash; made in advance, executed with precision &mdash; was not incidental. Jesus was making a public claim. He was presenting himself to Jerusalem as the king the prophet had announced, on the very animal the prophet had specified, at the season of Passover when messianic expectations ran highest. The crowd understood the claim and responded: they spread their cloaks on the road, cut branches from the trees, and cried &ldquo;Hosanna to the Son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest!&rdquo; (Matthew 21:9).",
      "John&rsquo;s Gospel adds a detail that illuminates the disciples&rsquo; own understanding. He notes that &ldquo;his disciples did not understand these things at first, but when Jesus was glorified, then they remembered that these things had been written about him and had been done to him&rdquo; (John 12:16). The triumphal entry was not fully understood even by those who participated in it. It was only after the resurrection &mdash; after the whole story of crucifixion and vindication had unfolded &mdash; that they looked back at Zechariah 9:9 and understood what they had been part of. Prophecy often requires the event to unlock its full meaning.",
      "The connection between Zechariah 9:9 and the triumphal entry also illuminates the tension in the crowd&rsquo;s response. Many in the crowd expected the arriving king to fulfill a different kind of prophecy &mdash; the kind involving military conquest and the overthrow of Rome. They wanted the war horse, not the donkey. When Jesus later wept over Jerusalem (Luke 19:41&ndash;44), it was precisely because the city had not recognized &ldquo;the things that make for peace&rdquo; and had not recognized &ldquo;the time of your visitation.&rdquo; The humble king came exactly as Zechariah had said, and the city that should have known the prophecy best failed to see its fulfillment.",
      "The theological significance of the fulfilled prophecy runs deep. The fact that Jesus entered Jerusalem on a donkey &mdash; deliberately, consciously, in fulfillment of Zechariah 9:9 &mdash; means that his kingship is constituted by humility, not by force. The kingdom he came to establish operates on entirely different principles than the kingdoms of this world. He came to give his life, not to take lives. He came to serve, not to be served. The donkey is not a symbol of weakness accidentally chosen; it is the symbol of a kingdom whose power is expressed through self-giving love. The cross that followed five days later was not the contradiction of the triumphal entry &mdash; it was its completion.",
    ],
  },
  {
    id: "Freeing Prisoners",
    heading: "Freeing Prisoners from the Waterless Pit",
    reference: "Zechariah 9:11&ndash;13",
    paragraphs: [
      "Following the announcement of the coming King in verses 9&ndash;10, the prophetic word turns to the people themselves and the God who will act on their behalf. Verse 11 contains one of the most striking images in the chapter: &ldquo;As for you also, because of the blood of my covenant with you, I will set your prisoners free from the waterless pit.&rdquo; The &ldquo;blood of my covenant&rdquo; is a reference to the covenant made at Sinai, sealed with the blood of sacrifice (Exodus 24:8), the foundational agreement by which God bound himself to Israel as their God. It is because of that covenant &mdash; because God keeps his word &mdash; that the prisoners will be released.",
      "The &ldquo;waterless pit&rdquo; is an image drawn from the most desperate kind of imprisonment in the ancient world. A cistern without water was a dungeon with no means of sustenance &mdash; a place not designed for long-term imprisonment but for waiting to die. It is the very kind of pit into which Joseph was thrown by his brothers (Genesis 37:24), and the language here may intentionally evoke that earlier story of captivity and eventual deliverance. The people of God in exile, in bondage, in circumstances that seem to offer no way out, are addressed as prisoners in such a pit.",
      "God&rsquo;s word to those prisoners is to &ldquo;return to your stronghold,&rdquo; a declaration that there is a place of security and shelter to which they can come &mdash; namely, the God who has made covenant with them. And then comes the promise of verse 12: &ldquo;Today I declare that I will restore double to you.&rdquo; The word &ldquo;double&rdquo; here is not merely arithmetic; it is covenantal. The law provided for double restitution in certain cases of theft (Exodus 22:4, 7, 9); Isaiah 40:2 speaks of Jerusalem having received double from the Lord&rsquo;s hand for her sins, which implies that the double of suffering calls forth a double of consolation. God will make good what was lost &mdash; and then some.",
      "Verse 13 then shifts into the imagery of warfare, with God himself as the archer: &ldquo;For I have bent Judah as my bow; I have made Ephraim its arrow. I will stir up your sons, O Zion, against your sons, O Greece, and wield you like a warrior&rsquo;s sword.&rdquo; The reference to Greece is striking and suggests a context in which Greek (Hellenistic) power was the dominant force oppressing God&rsquo;s people &mdash; a context that fits the period of the Maccabean resistance in the second century BC, though it may also have a broader prophetic reach. The imagery of God using his people as weapons in his own hand captures the idea that human action and divine sovereignty are not opposites but partners.",
      "The theological center of this passage is the phrase &ldquo;the blood of my covenant.&rdquo; It is the covenant that creates the obligation, and it is God&rsquo;s faithfulness to his own covenant that drives the deliverance of the prisoners. They are not freed because they have earned it or because they are powerful enough to escape; they are freed because God made a promise sealed in blood, and God does not break his promises. For the Christian reader, this language resonates powerfully with the &ldquo;blood of the new covenant&rdquo; (Luke 22:20) &mdash; the covenant sealed in the blood of Jesus at the Last Supper and ratified on the cross, by which prisoners of sin are set free.",
    ],
  },
  {
    id: "God Fights for Israel",
    heading: "God Fights for Israel Like a Warrior",
    reference: "Zechariah 9:14&ndash;17",
    paragraphs: [
      "The closing movement of Zechariah 9 reaches a crescendo of divine warfare and pastoral tenderness. Verse 14 opens with a theophany &mdash; a dramatic appearance of God himself in battle: &ldquo;Then the Lord will appear over them, and his arrow will go forth like lightning; the Lord God will sound the trumpet and will march forth in the whirlwinds of the south.&rdquo; The imagery draws on the ancient tradition of God as the divine warrior, the one who fights for his people when human strength is insufficient. The trumpet, the lightning, the whirlwind &mdash; these are the elements of storm theophany that appear throughout the Old Testament as signs of God&rsquo;s powerful presence.",
      "Verse 15 continues the warrior imagery: &ldquo;The Lord of hosts will protect them, and they shall devour, and tread down the sling stones, and they shall drink and roar as if drunk with wine, and be full like a bowl, drenched like the corners of the altar.&rdquo; The graphic language of battle victory &mdash; devouring, treading down, the overflowing bowl &mdash; is the language of decisive, comprehensive triumph. God&rsquo;s people, protected by the Lord of hosts, will prevail not because of their own military superiority but because the Lord himself fights on their behalf.",
      "But then, with that characteristic movement that appears throughout the Hebrew prophets, the imagery shifts from warfare to pastoral care. Verse 16: &ldquo;On that day the Lord their God will save them, as the flock of his people; for like the jewels of a crown they shall shine on his land.&rdquo; The people who were being wielded as weapons in God&rsquo;s hand are now pictured as a flock being shepherded to safety, as precious jewels gleaming in the sunlight over God&rsquo;s own land. The warrior who fights for them is also the shepherd who tends them; the God who goes before them in battle is the same God who carries the lambs in his arms.",
      "The final verse of the chapter (9:17) closes with a note of sheer abundance: &ldquo;For how great is his goodness, and how great his beauty! Grain shall make the young men flourish, and new wine the young women.&rdquo; The chapter that began with the hard word of judgment against the nations ends with the vision of a land so blessed by God&rsquo;s goodness that the young grow and flourish. Grain and new wine are the signs of agricultural blessing, the covenant gifts that God promised to a people who walked in his ways (Deuteronomy 7:13). The circle closes from judgment to joy, from the sweeping down of proud nations to the lifting up of God&rsquo;s own people.",
      "Zechariah 9 as a whole presents a God who is sovereign over history (judging nations with precision), redemptive in purpose (freeing prisoners by covenant), humble in his methods (sending a king on a donkey), militant in his protection (fighting for his people like a warrior), and tender in his care (shepherding them like a flock and adorning them like crown jewels). These are not contradictions but facets of a single reality &mdash; the God who is both the Lord of hosts and the Good Shepherd, the one who comes to judge the nations and the one who comes to save his people. In the coming King on the donkey, all of these threads converge.",
      "For the Christian, the chapter's portrait of the warrior-shepherd who is also the humble King on the donkey points unmistakably to Jesus Christ &mdash; the one who entered Jerusalem in lowliness to begin the week that would culminate in the cross, the one who on the cross fought the decisive battle against sin and death not with a sword but by being pierced, the one who rose in vindication and now reigns from sea to sea, the one who will come again not on a donkey but on a white horse (Revelation 19:11) to complete what Zechariah 9 announced. The chapter is a prophetic window into the shape of God&rsquo;s salvation: it comes through humility, it operates by covenant, and it ends in glory.",
    ],
  },
];

const videoItems = [
  { videoId: "Zk9aB3cD7eF", title: "Zechariah 9 - The Coming King on a Donkey Explained" },
  { videoId: "Lm2nQ5pR8sT", title: "Zechariah 9 Bible Study - Prophecy and the Triumphal Entry" },
  { videoId: "Vu4wX6yZ1aC", title: "The Messianic Prophecies of Zechariah - Deep Study" },
  { videoId: "Hj8kL9mN3oP", title: "Zechariah Chapter 9 - God Fights for His People" },
];

export default function Zechariah9GuidePage() {
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
            Zechariah 9 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Judgment sweeps from Hadrach to Philistia, and then the prophet cries: &ldquo;Behold, your king is coming to you &mdash; righteous and victorious, lowly and riding on a donkey&rdquo; &mdash; a prophecy fulfilled when Jesus entered Jerusalem on Palm Sunday, five centuries after Zechariah wrote it.
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
              Deepen your study of Zechariah 9 through these video teachings on the coming King, the messianic prophecy of the triumphal entry, God&rsquo;s judgment on the surrounding nations, the freeing of prisoners, and the Lord fighting for his people.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Righteous and Victorious, Lowly and Riding on a Donkey</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Zechariah 9 announces a King who upends every human expectation &mdash; conquering not by force but by peace, entering not on a war horse but on a donkey, winning not by the sword but by the covenant sealed in his own blood. He is the prisoner-freeing, warrior-shepherding, nation-judging, humble King whose entry into Jerusalem on Palm Sunday proved that God&rsquo;s word does not return to him empty.
          </p>
        </div>
      </main>
    </div>
  );
}
