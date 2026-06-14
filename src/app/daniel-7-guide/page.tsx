"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Four Beasts",
  "The Little Horn",
  "The Ancient of Days",
  "The Son of Man",
  "Application",
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
    heading: "Overview of Daniel 7",
    reference: "Daniel 7:1&ndash;28",
    paragraphs: [
      "Daniel 7 is the hinge of the entire book of Daniel and one of the most theologically significant chapters in the whole of the Old Testament. It stands at the center of a chiastic structure that organizes the first twelve chapters, and it introduces the great apocalyptic visions that dominate the second half of the book. More than any other passage in Daniel, chapter 7 has shaped the language and imagery of both Jewish and Christian eschatology, giving us the &ldquo;Son of Man&rdquo; who comes with the clouds of heaven, the Ancient of Days on his blazing throne, and the succession of world empires represented as monstrous beasts rising from a chaotic sea.",
      "The vision is given in the first year of Belshazzar king of Babylon &mdash; chronologically earlier than the events of chapters 5 and 6, suggesting that the book is arranged theologically rather than chronologically. Daniel sees in a night vision four great beasts coming up out of the sea, each different from the others. The sea, in the symbolic vocabulary of the ancient Near East, represents the forces of chaos and disorder. From this primordial chaos rise the powers that rule the earth &mdash; powers that, however magnificent they appear in human eyes, are, from the divine perspective, beastly and disordered.",
      "The four beasts correspond to the four kingdoms of Nebuchadnezzar&rsquo;s dream in chapter 2 &mdash; the head of gold, the chest of silver, the belly of bronze, and the legs of iron &mdash; though Daniel 7 represents them with far greater narrative texture and urgency. The focus in chapter 7 is not on the succession of empires as such but on the rise of a particular horn on the fourth beast, a horn that speaks great words against the Most High and makes war against the holy ones. It is this figure, and the divine response to it, that drives the theological urgency of the chapter.",
      "The response of heaven to the arrogance of the little horn is the most magnificent scene in the chapter: the Ancient of Days takes his seat on a throne of flaming fire, with a river of fire flowing from before him, ten thousand times ten thousand standing before him, and the court sitting in judgment. The fourth beast is slain and its body destroyed. Then &mdash; and this is the moment toward which the whole vision has been moving &mdash; one like a son of man comes with the clouds of heaven, approaches the Ancient of Days, and is given dominion, glory, and a kingdom that shall not pass away. All peoples, nations, and languages shall serve him.",
      "The interpretive angel who explains the vision to Daniel gives a double interpretation. At one level the beasts represent kingdoms, and the dominion given to the son of man represents the dominion given to &ldquo;the saints of the Most High&rdquo; &mdash; the people of God who receive the kingdom after the fall of the last beast. At another level the son of man figure himself seems to be a distinct individual who represents and leads the people of God. Jesus consistently used the title &ldquo;Son of Man&rdquo; for himself, particularly in connection with his coming glory (Mark 14:62), demonstrating that he understood himself to be the fulfillment of this vision.",
      "Daniel himself is left deeply troubled by what he has seen. The chapter ends not with triumph but with anxiety: &ldquo;Here is the end of the account. As for me, Daniel, my thoughts greatly alarmed me, and my color changed, but I kept the matter in my heart&rdquo; (7:28). This is fitting. The vision is not simple propaganda designed to make the suffering community feel confident; it is a genuine encounter with the terror of history and the mystery of divine sovereignty. The comfort it offers is real, but it is the comfort of one who has looked at genuine darkness and been shown &mdash; not told, but shown &mdash; that the darkness does not have the last word.",
    ],
  },
  {
    id: "The Four Beasts",
    heading: "The Four Beasts",
    reference: "Daniel 7:1&ndash;8",
    paragraphs: [
      "The four beasts of Daniel&rsquo;s vision rise from the &ldquo;great sea&rdquo; that is being stirred up by the four winds of heaven. The imagery is deliberately cosmic: the four winds suggest divine activity working on a global scale, and the sea represents the chaotic, disordered depths from which, in the mythology of the ancient world, the powers of darkness emerged. That world empires should rise from this chaos is itself a theological statement about the nature of human power apart from the reign of God &mdash; it emerges from disorder and remains, at its core, disordered.",
      "The first beast is like a lion with eagle&rsquo;s wings. Its wings are plucked, it is made to stand on two feet like a man, and a human mind is given to it. This is widely identified with Babylon, and the imagery connects directly to the preceding chapters of Daniel. The lion with eagle&rsquo;s wings is a symbol associated with Babylonian royal iconography. The transformation &mdash; wings plucked, raised to walk as a human &mdash; may allude to Nebuchadnezzar&rsquo;s humiliation and restoration described in Daniel 4, where the proud king was brought low and then restored to acknowledge the sovereignty of the Most High.",
      "The second beast is like a bear, raised up on one side, with three ribs in its mouth, and commanded to &ldquo;arise, devour much flesh.&rdquo; The bear is a traditional symbol of strength and ferocity, but it lacks the swiftness and elegance of the lion. The three ribs in its mouth may represent conquered territories swallowed by the second empire. Most interpreters identify this beast with Medo-Persia, the empire that overthrew Babylon. The command to &ldquo;devour much flesh&rdquo; fits the expansionist campaigns of the Persian kings who extended the empire from the Aegean to the Indus.",
      "The third beast is like a leopard, with four wings of a bird on its back and four heads, and dominion is given to it. The leopard with wings suggests extraordinary speed of conquest &mdash; an empire that expanded with almost preternatural swiftness across the known world. The four heads suggest a division of power or the establishment of multiple ruling centers. This beast is widely identified with Greece under Alexander the Great, whose campaigns achieved in a decade what no previous conqueror had approached, and whose empire was divided among four of his generals after his death.",
      "The fourth beast is different in kind from the others: &ldquo;terrifying and dreadful and exceedingly strong. It had great iron teeth; it devoured and broke in pieces and stamped what was left with its feet&rdquo; (7:7). It has ten horns, and then a little horn rises among them, pulling out three of the first horns, with eyes like a human and a mouth speaking great things. The fourth beast is not identified with any specific animal &mdash; it is too terrible to be contained in an existing category. While many interpreters identify it with Rome, the text itself emphasizes its unique and unprecedented destructiveness, and the theological function of the fourth beast is to represent the final, most extreme form of human arrogance and oppression.",
      "The beasts as a sequence tell a story about the nature of human empire. They become progressively more terrible: from the humanized lion, to the consuming bear, to the swift leopard, to the unnamed horror of the fourth beast. This is not an accident of arrangement; it reflects the biblical understanding that history, left to the dynamics of human power, tends toward escalating violence and oppression. The imagery also democratizes the critique: no empire, however sophisticated its culture, however just its laws, however impressive its achievements, is exempt from the prophetic verdict that power that does not acknowledge the sovereignty of the Most High is, at its root, beastly.",
    ],
  },
  {
    id: "The Little Horn",
    heading: "The Little Horn",
    reference: "Daniel 7:8, 20&ndash;25",
    paragraphs: [
      "Among the ten horns of the fourth beast, Daniel notices a little horn rising that pulls out three of the other horns to make room for itself. This little horn has &ldquo;eyes like the eyes of a man, and a mouth speaking great things&rdquo; (7:8). The combination of human eyes and a boasting mouth is the portrait of a particular kind of tyrant &mdash; one who combines a calculating intelligence with an overweening pride that cannot stop pronouncing itself superior to all rivals, including God himself. The little horn is not merely a political figure; it is a theological figure, a portrait of human pretension raised to its most extreme and dangerous form.",
      "When Daniel asks the angel about the little horn, the interpretation he receives fills out the portrait in disturbing detail: &ldquo;He shall speak words against the Most High, and shall wear out the saints of the Most High, and shall think to change the times and the law, and they shall be given into his hand for a time, times, and half a time&rdquo; (7:25). Four elements are identified: speech against God, persecution of the saints, an attempt to alter the structures of time and law, and a period of domination measured in the cryptic formula &ldquo;a time, times, and half a time&rdquo; &mdash; generally understood as three and a half years, or half of the symbolic seven.",
      "The phrase &ldquo;speak words against the Most High&rdquo; identifies the little horn&rsquo;s fundamental sin as blasphemy. This is not mere irreligion or neglect of God; it is active, verbal assault on the divine character and sovereignty. The figure sets itself up as a rival to God, not merely ignoring the divine but confronting it. This pattern &mdash; the tyrant who claims divine honors, who demands the kind of submission that belongs only to God &mdash; runs through the whole prophetic tradition, from Pharaoh to Nebuchadnezzar to the kings described in Ezekiel and Isaiah.",
      "The phrase &ldquo;wear out the saints of the Most High&rdquo; uses a word that suggests a slow, grinding attrition rather than a single dramatic assault. The tyrant does not merely oppose the people of God; he exhausts them, wearing down their resistance through sustained pressure, through the petty humiliations of living under a power that denies the legitimacy of their deepest allegiances. The saints are not destroyed by a single overwhelming blow; they are ground down by the daily weight of living under a regime that regards their faithfulness to God as treason.",
      "The attempt to &ldquo;change the times and the law&rdquo; is the most revealing element of the little horn&rsquo;s program. Times and law are the framework within which God&rsquo;s people order their lives &mdash; the calendar of festivals, the Sabbath, the covenant obligations that structure daily existence. To change these is to attempt to displace God&rsquo;s authority over the rhythms of life and replace it with the authority of the state. This is precisely what the historical figure of Antiochus IV Epiphanes did in the second century BC when he prohibited the Jewish Sabbath and festivals and demanded worship of Greek gods &mdash; and it is what every totalitarian system ultimately attempts: to claim sovereignty over the conscience.",
      "The little horn is finally a figure for the permanent possibility of human power claiming divine prerogatives. Whether one reads the fulfillment in Antiochus IV, in the Roman emperors who demanded divine honors, in the totalitarian regimes of the twentieth century, or in the apocalyptic figure of the New Testament&rsquo;s &ldquo;man of lawlessness&rdquo; (2 Thessalonians 2:3&ndash;4), the portrait is the same: a power that speaks great things against God, grinds down the faithful, and attempts to reorder reality according to its own will. Daniel 7&rsquo;s insistence that this power is given only a limited time &mdash; three and a half units, never the complete seven &mdash; is itself a theological statement: the arrogance of the little horn operates only within boundaries set by the Ancient of Days.",
    ],
  },
  {
    id: "The Ancient of Days",
    heading: "The Ancient of Days",
    reference: "Daniel 7:9&ndash;12",
    paragraphs: [
      "The most extraordinary vision in Daniel 7 &mdash; and arguably in the entire Old Testament outside of the book of Ezekiel &mdash; is the throne-room scene of verses 9 through 12. As the little horn is speaking its great words, Daniel watches as thrones are placed and the Ancient of Days takes his seat. The description that follows is one of the most luminous passages in all of scripture: &ldquo;His clothing was white as snow, and the hair of his head like pure wool; his throne was flaming fire, its wheels were burning fire. A stream of fire issued and came out from before him; a thousand thousands served him, and ten thousand times ten thousand stood before him; the court sat in judgment, and the books were opened&rdquo; (7:9&ndash;10).",
      "The title &ldquo;Ancient of Days&rdquo; is unique to Daniel 7 in the Old Testament, and it speaks of one whose existence precedes all the kingdoms and powers that have been described in the vision. The great beasts rose from the sea and seemed, for a time, to be the dominant reality of history. The Ancient of Days reveals that they are not. Behind, above, and before all the powers of human history stands the One who has always existed, who measures all things by his eternity rather than by their moment of dominance.",
      "The whiteness of the Ancient of Days &mdash; clothing white as snow, hair like pure wool &mdash; is the whiteness of absolute holiness, of light so pure that it contains no shadow of impurity or compromise. In the ancient world, white was the color of divine transcendence, of reality uncontaminated by the darkness that corrupts human power. The figure who sits on the flaming throne is not himself consumed by the fire; he is its source. The fire that streams from before him is not destruction for its own sake but the purifying, judging energy of perfect holiness confronting all that is impure.",
      "The river of fire flowing from before the throne is the most terrifying element of the scene. In the ancient Near Eastern tradition, the river of fire was associated with the ordeal by which innocence and guilt were determined. Before this throne, nothing hidden can remain hidden; no false claim can survive the scrutiny of the one whose eyes are fire. The fourth beast, for all its iron teeth and ten horns and boasting little horn, is brought before this court and found to be what it always was: a beast, a disordered power that had its moment of apparent dominance but cannot survive judgment.",
      "The scale of the heavenly assembly &mdash; a thousand thousands serving, ten thousand times ten thousand standing &mdash; is designed to overwhelm the imagination. The most powerful human empire, the most impressive military force, the most sophisticated administrative apparatus is, by comparison with this assembly, a trivial thing. The empires of chapter 7 seemed absolute and total from within human history; from the perspective of the throne room of the Ancient of Days, they are finite, temporary, and subject to judgment. This is the perspective that Daniel&rsquo;s vision is meant to give to the suffering community: the view from the throne room.",
      "The judgment results in the destruction of the fourth beast and the stripping of dominion from the others. &ldquo;The beast was slain, and its body destroyed and given over to be burned with fire. As for the rest of the beasts, their dominion was taken away, but their lives were prolonged for a season and a time&rdquo; (7:11&ndash;12). The fourth beast, the most extreme and terrible, is annihilated; the others lose their dominion but are permitted to continue for a limited time. This differentiated outcome reflects the biblical understanding that God&rsquo;s judgment is not uniformly destructive but is calibrated to the specific character of what is being judged.",
    ],
  },
  {
    id: "The Son of Man",
    heading: "The Son of Man",
    reference: "Daniel 7:13&ndash;14",
    paragraphs: [
      "After the judgment of the beasts, Daniel sees the most important figure in the vision: &ldquo;I saw in the night visions, and behold, with the clouds of heaven there came one like a son of man, and he came to the Ancient of Days and was presented before him. And to him was given dominion and glory and a kingdom, that all peoples, nations, and languages should serve him; his dominion is an everlasting dominion, which shall not pass away, and his kingdom one that shall not be destroyed&rdquo; (7:13&ndash;14). These two verses are among the most consequential in the entire Old Testament.",
      "The phrase &ldquo;one like a son of man&rdquo; sets up the fundamental contrast with the four beasts. They came from the sea; he comes with the clouds. They were like animals; he is like a human being, or more precisely, like the son of a human being. The Aramaic phrase bar enash simply means &ldquo;a human one&rdquo; or &ldquo;one having the appearance of a human being.&rdquo; Where the beasts represented the dehumanizing nature of worldly power, this figure represents the divine intention for human dominion &mdash; authority exercised by one who bears the image of God rather than the image of a beast.",
      "The movement in the vision is striking: the son of man comes to the Ancient of Days, and the dominion is given to him. This is not a conquest but an investiture; not a seizing of power but a receiving of it from the ultimate source of all legitimate authority. The son of man does not overthrow the Ancient of Days; he approaches him. The kingdom that cannot be destroyed is not one that the son of man establishes by force; it is one that the Ancient of Days bestows. This pattern &mdash; legitimate authority received from above rather than seized from below &mdash; is the fundamental contrast with the little horn, whose power was taken by violence.",
      "The scope of the dominion given to the son of man is universal and eternal: &ldquo;all peoples, nations, and languages shall serve him.&rdquo; Every category used to describe the diversity of humanity &mdash; peoples, nations, languages &mdash; is included in the scope of his dominion. And this dominion is everlasting, which shall not pass away, and his kingdom one that shall not be destroyed. Each of the four beasts had its moment of dominance and then was overthrown; the dominion of the son of man knows no such limitation. It is the final dominion, the one that brings the succession of beastly empires to an end and establishes the reign of God through his appointed representative.",
      "Jesus&rsquo; consistent use of the title &ldquo;Son of Man&rdquo; for himself is best understood as a deliberate echo of Daniel 7:13. He was not merely adopting a humble self-designation; he was claiming to be the fulfillment of Daniel&rsquo;s vision. The clearest evidence of this is his response at his trial before the high priest, when asked whether he was the Christ, the Son of God: &ldquo;I am, and you will see the Son of Man seated at the right hand of Power, and coming with the clouds of heaven&rdquo; (Mark 14:62). The high priest understood immediately that this was a claim to be the figure of Daniel 7:13, and tore his garments at what he considered to be blasphemy.",
      "The New Testament consistently presents the resurrection and ascension of Jesus as the fulfillment of the investiture scene in Daniel 7:13&ndash;14. When Paul writes that God raised Christ and &ldquo;seated him at his right hand in the heavenly places, far above all rule and authority and power and dominion&rdquo; (Ephesians 1:20&ndash;21), he is describing the same event that Daniel saw in advance: the son of man coming to the Ancient of Days and receiving an everlasting kingdom. The clouds of heaven on which the son of man comes are the clouds of the ascension (Acts 1:9), and will be the clouds of the final return (Revelation 1:7). Daniel 7:13&ndash;14 stands at the center of New Testament Christology not as a proof text but as the visionary matrix within which Jesus understood and expressed his own identity and mission.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Daniel 7 Today",
    reference: "Daniel 7 &mdash; For the Life of the Church",
    paragraphs: [
      "Daniel 7 was given to a community living under the shadow of beastly power, and it remains the property of every community of faith that finds itself in a similar position. The specific empires have changed, but the pattern they represent &mdash; human power that claims divine prerogatives, that grinds down those who will not bow to its demands, that speaks great words against the Most High &mdash; is a permanent feature of human history. Daniel 7 does not promise that such powers will cease to arise; it promises that they will be judged, and that the kingdom that cannot be destroyed belongs to the Son of Man and to the saints of the Most High.",
      "The vision of the four beasts invites the church to look at human power with clear eyes. The great empires of history &mdash; ancient and modern &mdash; are not simply the neutral backdrop against which the story of salvation unfolds. They are actors in the drama, and Daniel 7 insists that their character is most accurately described not by the language of political science but by the language of apocalyptic vision: they are beastly, emerging from chaos, and however impressive their achievements, they carry within themselves the seeds of their own destruction. The church that is too impressed by earthly power, that too quickly accommodates itself to the demands of whatever empire currently dominates, has forgotten the vision.",
      "The little horn is a figure that the church must learn to recognize in every generation. Its marks are consistent: speech against the Most High, wearing out of the saints, and the attempt to reorder the structures of life and time according to its own will rather than God&rsquo;s. These marks can appear in explicitly totalitarian regimes that demand worship of the state, but they can also appear in subtler forms: the cultural pressure to treat as ultimate what is not ultimate, to give to Caesar what belongs only to God, to allow the demands of career, nation, consumption, or ideology to displace the claim of the Most High on the whole of life. The little horn does not always announce itself with obvious blasphemy; it often speaks in tones of reasonableness and progress.",
      "The throne-room scene of the Ancient of Days is the vision that the church needs most urgently in every age of apparent defeat. When the beasts seem dominant, when the little horn seems unstoppable, when the saints seem to be losing &mdash; the reality of the heavenly court continues unchanged. The Ancient of Days has not been displaced by the rise of the fourth beast. The books are still open. The river of fire still flows. The thousand thousands still stand before him. The church does not fight for a victory yet to be won; it witnesses to a victory already established in heaven, already enacted in the death and resurrection of the Son of Man, and awaiting its final manifestation in the age to come.",
      "The Son of Man vision in verses 13 and 14 is, for the Christian, not merely a prediction but a confession of faith. To confess Jesus as Lord is to confess that he is the one to whom the Ancient of Days has given dominion, glory, and an everlasting kingdom. This means that the final authority in the cosmos does not belong to the beasts &mdash; not to any empire, nation, ideology, or power &mdash; but to the one who came with the clouds and was presented before the throne. The practical implication of this confession is that the church can afford to be faithful in the face of beastly power because its allegiance is to the one whose kingdom shall not be destroyed.",
      "The anxiety with which Daniel ends the chapter &mdash; his color changed, his thoughts greatly alarming him &mdash; is also instructive for the church. Genuine engagement with the realities that Daniel 7 describes is not a comfortable experience. The vision does not dissolve the darkness of history into a cheerful assurance that everything will be fine; it shows the darkness for what it is, and then shows the throne above it, and the Son of Man coming through it, and the kingdom that emerges from the judgment. The comfort of Daniel 7 is the comfort that comes from having seen clearly &mdash; the terror of the beasts, the majesty of the throne, the investiture of the Son of Man &mdash; and having kept the matter in the heart, as Daniel did, until the fullness of time.",
    ],
  },
];

const videoItems = [
  { videoId: "9cSC9uE9Cg0", title: "BibleProject - Overview: Daniel" },
  { videoId: "EtBNQmBrTgs", title: "Daniel 7 Explained - The Son of Man and the Ancient of Days" },
  { videoId: "xmFPS0VkBck", title: "The Four Beasts of Daniel 7 - What Do They Mean?" },
  { videoId: "QFbHMzsEVkI", title: "Son of Man in Daniel 7 and the New Testament" },
];

export default function Daniel7GuidePage() {
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
            Daniel 7 &mdash; The Ancient of Days and the Son of Man
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Daniel sees in a night vision four great beasts rising from the sea, representing four kingdoms. A little horn speaks great things. Then the Ancient of Days takes his seat on a flaming throne, the court sits in judgment, and one &ldquo;like a Son of Man&rdquo; comes with the clouds of heaven and receives an everlasting kingdom &mdash; the most important messianic vision in the entire book of Daniel.
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
              Deepen your study of Daniel 7 through these video teachings on the four beasts, the Ancient of Days, the little horn, and the Son of Man who receives an everlasting kingdom from the throne of fire.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>His Kingdom Shall Not Be Destroyed</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Daniel 7 holds together the terror of beastly power and the majesty of divine sovereignty. The four empires rise from chaos and are given their moment, but the Ancient of Days sits enthroned above all of them, and the Son of Man &mdash; Jesus Christ, in whom the vision finds its fulfillment &mdash; receives a dominion, glory, and kingdom that all peoples and nations shall serve, an everlasting dominion which shall not pass away and a kingdom that shall not be destroyed.
          </p>
        </div>
      </main>
    </div>
  );
}
