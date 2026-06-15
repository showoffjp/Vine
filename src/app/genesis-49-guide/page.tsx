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
  "The First Sons",
  "The Lion of Judah",
  "Joseph and Jacob's Death",
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
    heading: "Overview of Genesis 49",
    reference: "Genesis 49:1&ndash;33",
    paragraphs: [
      "Genesis chapter 49 brings the long story of the patriarchs to its prophetic climax, for here the dying Jacob gathers his twelve sons around his bed and speaks to each of them a word concerning &ldquo;what shall happen to you in days to come.&rdquo; What begins as a father&rsquo;s farewell becomes a sweeping oracle over the future of a whole nation, as the old man, his eyes fixed beyond his own death, traces in the character of his sons the destinies of the twelve tribes of Israel. The chapter is at once intensely personal and grandly historical, joining the intimacy of a deathbed scene with the solemn weight of prophecy that reaches forward through the centuries.",
      "The blessings, and in some cases the rebukes, characterize each tribe according to the deeds and dispositions of its founding father (vv.1&ndash;28). Reuben, the firstborn, loses his preeminence because he defiled his father&rsquo;s bed; Simeon and Levi are scattered for the violence of their swords; and Judah receives the royal blessing, the great messianic promise that the scepter shall not depart from him &ldquo;until tribute comes to him.&rdquo; Joseph is praised as a &ldquo;fruitful bough,&rdquo; and the remaining sons each receive a word fitted to them, until the whole company of Israel stands gathered beneath the prophetic vision of their dying father.",
      "These oracles are not arbitrary pronouncements but the gathering up of a long history into a single moment of inspired foresight. The sins of the past, the loyalties and weaknesses of each son, the providences that had shaped the family across the years, all are woven together as Jacob speaks. The consequences of Reuben&rsquo;s instability, of Simeon and Levi&rsquo;s cruelty at Shechem, and of Judah&rsquo;s emerging leadership all find their place in the destinies he foretells, so that the chapter becomes a meditation on how the deeds of one generation echo into the next.",
      "At the heart of the chapter stands the blessing of Judah, the crown jewel of the whole oracle. To Judah is given the homage of his brothers, the strength of the lion, and the enduring scepter of rule. The mysterious word concerning Shiloh, &ldquo;until tribute comes to him,&rdquo; has long been read as the great messianic prophecy of the chapter, pointing forward to the royal line of David and ultimately to Jesus, whom the book of Revelation names &ldquo;the Lion of the tribe of Judah.&rdquo;",
      "The closing section turns from prophecy to the patriarch&rsquo;s own death (vv.29&ndash;33). Having blessed each son &ldquo;with the blessing suitable to him,&rdquo; Jacob charges them all to bury him with his fathers in the cave of Machpelah, the field that Abraham had bought, where Abraham and Sarah, Isaac and Rebekah, and Leah already lay. Then, his commands finished, the old man draws his feet up into the bed, breathes his last, and is gathered to his people, dying in the faith of the promises he had spoken.",
      "Read as a whole, Genesis 49 stands as one of the great prophetic poems of the Old Testament, binding the history of the patriarchs to the future of the tribes and pointing beyond them both to the coming King. The dying Jacob speaks not merely as a father but as a prophet, and his words become a window onto the unfolding purposes of God, who works through the flawed and tangled history of one family to bring forth the blessing promised to Abraham and, at the last, the Lion who would reign over the obedience of the peoples.",
    ],
  },
  {
    id: "The First Sons",
    heading: "Reuben, Simeon, and Levi",
    reference: "Genesis 49:1&ndash;7",
    paragraphs: [
      "&ldquo;Then Jacob called his sons and said, &lsquo;Gather yourselves together, that I may tell you what shall happen to you in days to come&rsquo;&rdquo; (49:1). The chapter opens with the patriarch summoning the whole company of his sons to his bedside. This is no ordinary farewell but a prophetic gathering, in which the dying father will speak over each of his children a word that reaches forward into the destiny of the tribes that shall descend from them in the days to come.",
      "&ldquo;Reuben, you are my firstborn, my might, and the firstfruits of my strength, preeminent in dignity and preeminent in power&rdquo; (49:3). Jacob begins with his eldest, acknowledging all that Reuben was by right of birth. As the firstborn he held the natural place of honor, the first of his father&rsquo;s strength, destined by custom to preeminence in dignity and in power above all his brothers. The opening words sound like the prelude to the greatest of the blessings.",
      "&ldquo;Unstable as water, you shall not have preeminence, because you went up to your father&rsquo;s bed; then you defiled it&mdash;he went up to my couch!&rdquo; (49:4). But the blessing collapses into rebuke. For all his natural standing, Reuben is &ldquo;unstable as water,&rdquo; and he forfeits his preeminence because of the sin recorded in Genesis 35, when he defiled his father&rsquo;s bed. The privilege of the firstborn is lost, and the double portion passes to Joseph while the rule passes in time to Judah.",
      "&ldquo;Simeon and Levi are brothers; weapons of violence are their swords&rdquo; (49:5). Jacob turns next to the second and third sons, joining them together in a single rebuke. Their swords had become instruments of cruelty, calling to mind the massacre at Shechem in Genesis 34, when in their fierce anger they had slaughtered the men of the city in revenge for the wrong done to their sister Dinah.",
      "&ldquo;Let my soul come not into their council; O my glory, be not joined to their company. For in their anger they killed men, and in their willfulness they hamstrung oxen&rdquo; (49:6). The dying patriarch distances himself from the violence of these sons, refusing to be counted among those who plotted such cruelty. Their wrath had been fierce and self-willed, sparing neither men nor beasts, and Jacob will not let his own name be joined to their bloody council.",
      "&ldquo;Cursed be their anger, for it is fierce, and their wrath, for it is cruel! I will divide them in Jacob and scatter them in Israel&rdquo; (49:7). The sentence is one of scattering: their fierce anger is cursed, and their descendants shall be dispersed throughout the land rather than holding a unified territory of their own. Simeon would later be absorbed within the inheritance of Judah, and Levi would be given no land at all.",
      "Yet the very scattering pronounced upon Levi would one day be turned to honor and redeemed by grace. For the tribe of Levi, dispersed among all the others, would become the priestly tribe, set apart for the service of God and given cities scattered throughout every tribe of Israel. What was spoken as a consequence of past sin became, in the providence of God, the means by which the worship of the Lord was carried into the whole nation, a striking sign that even judgment may be woven into the purposes of mercy.",
    ],
  },
  {
    id: "The Lion of Judah",
    heading: "The Lion of Judah",
    reference: "Genesis 49:8&ndash;12",
    paragraphs: [
      "&ldquo;Judah, your brothers shall praise you; your hand shall be on the neck of your enemies; your father&rsquo;s sons shall bow down before you&rdquo; (49:8). With the fourth son the oracle rises to its great height, and the tone of rebuke gives way to royal blessing. To Judah, whose very name means praise, is given the homage of his brothers and victory over his enemies, as the leadership forfeited by Reuben and lost by Simeon and Levi now comes to rest upon him.",
      "&ldquo;Judah is a lion&rsquo;s cub; from the prey, my son, you have gone up. He stooped down; he crouched as a lion and as a lioness; who dares rouse him?&rdquo; (49:9). The patriarch likens Judah to a lion, the very image of regal strength and dominion. Like a lion returned from the hunt, crouching in fearless majesty, Judah shall be a power that none dare provoke, and this lion imagery becomes forever bound to the tribe and its kingly destiny.",
      "&ldquo;The scepter shall not depart from Judah, nor the ruler&rsquo;s staff from between his feet, until tribute comes to him; and to him shall be the obedience of the peoples&rdquo; (49:10). Here is the great messianic prophecy of the chapter. The scepter of rule shall remain with Judah until the coming of Shiloh, the one to whom tribute belongs, and to him shall be gathered the obedience not of Israel only but of all the peoples of the earth.",
      "The mysterious word &ldquo;Shiloh,&rdquo; rendered &ldquo;until tribute comes to him,&rdquo; has been understood from ancient times as a prophecy of the Messiah. It points forward to one in whom the rule of Judah finds its fullness, a King to whom the nations themselves shall render their obedience. The promise reaches beyond David&rsquo;s throne to a kingdom without end, and beyond the borders of Israel to the gathering of the peoples under one Lord.",
      "&ldquo;Binding his foal to the vine and his donkey&rsquo;s colt to the choice vine, he has washed his garments in wine and his vesture in the blood of grapes&rdquo; (49:11). The imagery turns to overflowing abundance. So plentiful are the vines of Judah&rsquo;s land that one may tether a donkey to them without a thought, and wine flows so freely that garments are washed in it as in water, a picture of prosperity and of a coming day of festal joy.",
      "&ldquo;His eyes are darker than wine, and his teeth whiter than milk&rdquo; (49:12). The portrait is completed with images of vigor and beauty, the dark eyes and bright teeth of one flushed with the richness of the land. The whole blessing of Judah breathes royalty and plenty, a vision of strength, dominion, and abundance gathered around the tribe from which the kings of Israel would come.",
      "From Judah would descend the royal line of David, and from that line, in the fullness of time, would come Jesus Christ. The New Testament takes up this very prophecy when the book of Revelation hails him as &ldquo;the Lion of the tribe of Judah, the Root of David&rdquo; (Revelation 5:5), the one who has conquered and to whom the obedience of the peoples is given. Thus the dying words of Jacob over his fourth son reach across the centuries to the throne of the Messiah, in whom the scepter of Judah is established forever.",
    ],
  },
  {
    id: "Joseph and Jacob's Death",
    heading: "Joseph, the Remaining Sons, and Jacob's Death",
    reference: "Genesis 49:13&ndash;33",
    paragraphs: [
      "After the towering blessing of Judah, the oracle moves swiftly through a series of shorter words for the other sons. Zebulun shall dwell by the sea and become a haven for ships; Issachar is likened to a strong donkey crouching between the sheepfolds, bowing his shoulder to bear and serving at heavy labor in the fertile land that pleased him. Each son receives a word fitted to the character and future of the tribe that would bear his name.",
      "&ldquo;Dan shall judge his people as one of the tribes of Israel. Dan shall be a serpent in the way, a viper by the path, that bites the horse&rsquo;s heels so that his rider falls backward&rdquo; (49:16&ndash;17). To Dan is given a place among the judging tribes of Israel, yet with the cunning of a serpent lying in wait by the road. The remaining brothers follow in turn: Gad shall be raided but shall raid at their heels; Asher&rsquo;s food shall be rich, yielding royal delicacies; and Naphtali is a doe let loose, that bears beautiful fawns.",
      "&ldquo;Joseph is a fruitful bough, a fruitful bough by a spring; his branches run over the wall. The archers bitterly attacked him, shot at him, and harassed him severely, yet his bow remained unmoved&rdquo; (49:22&ndash;24). Joseph receives an extended and tender blessing. He is a fruitful tree planted by water, whose branches overflow every boundary, and though he had been bitterly attacked by his brothers and by Potiphar&rsquo;s house, his strength held firm, sustained by the hands of the Mighty One of Jacob.",
      "&ldquo;By the God of your father who will help you, by the Almighty who will bless you with blessings of heaven above, blessings of the deep that crouches beneath, blessings of the breasts and of the womb&rdquo; (49:25). The blessing poured upon Joseph is one of fullness from every direction, the rain of heaven above, the springs of the deep below, and the fruitfulness of family and flock. It is a benediction grounded in the God of his fathers, the Almighty who would help and bless him in all things.",
      "&ldquo;The blessings of your father are mighty beyond the blessings of my parents, up to the bounties of the everlasting hills. May they be on the head of Joseph, and on the brow of him who was set apart from his brothers&rdquo; (49:26). The blessings prevailing above the everlasting mountains are set upon the head of Joseph, the one who had been set apart, sold away, and yet exalted above his brothers. Benjamin follows with a brief word: he is &ldquo;a ravenous wolf, in the morning devouring the prey and at evening dividing the spoil.&rdquo;",
      "&ldquo;All these are the twelve tribes of Israel. This is what their father said to them as he blessed them, blessing each with the blessing suitable to him&rdquo; (49:28). So the prophetic poem reaches its close, and the narrator gathers the whole into a single statement: these are the twelve tribes of Israel, and Jacob has blessed each son with the blessing fitted to him. The destinies of a nation have been spoken over twelve men around a deathbed.",
      "Then the patriarch turns to his final charge. He commands his sons to bury him with his fathers in the cave of the field of Machpelah, which Abraham had bought as a burying place, where Abraham and Sarah, Isaac and Rebekah were buried, and where he himself had buried Leah. &ldquo;When Jacob finished commanding his sons, he drew up his feet into the bed and breathed his last and was gathered to his people&rdquo; (49:33). The patriarch&rsquo;s prophetic vision is sealed by a peaceful death in faith, as he is gathered to the fathers in whose promises he had lived and died.",
    ],
  },
];

const videoItems = [
  { videoId: "Lt8kRn5Hp2Q", title: "Jacob Gathers His Sons in Genesis 49" },
  { videoId: "Mv3bWq7Kc9D", title: "The Lion of Judah and the Scepter Prophecy" },
  { videoId: "Nx9gCy1Ln4P", title: "Joseph the Fruitful Bough and the Blessings of Heaven" },
  { videoId: "Pr2hDz5Mt6W", title: "The Death of Jacob and the Cave of Machpelah" },
];

export default function Genesis49GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => setLoaded(true), []);
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
            The Book of Genesis, Chapter 49
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The dying Jacob gathers his twelve sons to tell them &ldquo;what shall happen to you in days to come.&rdquo; These prophetic blessings and rebukes characterize each tribe: Reuben loses his preeminence, Simeon and Levi are scattered, and Judah receives the royal blessing &mdash; the scepter that shall not depart &ldquo;until tribute comes to him.&rdquo; Joseph is a fruitful bough blessed beyond the everlasting hills. Then Jacob charges his sons to bury him in the cave of Machpelah and breathes his last, gathered to his people in faith.
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
              Deepen your study of Genesis 49 through visual teaching on the gathering of Jacob&rsquo;s twelve sons and the prophetic words spoken over each tribe, the rebukes that fell upon Reuben, Simeon, and Levi, the royal and messianic blessing of Judah the lion to whom the scepter and the obedience of the peoples belong, the rich benediction poured upon Joseph the fruitful bough, and the peaceful death of the patriarch gathered to his fathers in the cave of Machpelah.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Scepter That Shall Not Depart</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 49 gathers the long history of the patriarchs into a single prophetic poem, binding the deeds of twelve sons to the destinies of twelve tribes and pointing beyond them all to the coming King. At its heart stands the blessing of Judah, the lion to whom the scepter belongs &ldquo;until tribute comes to him.&rdquo; From Judah would descend the royal line of David and at last Jesus, whom Revelation hails as &ldquo;the Lion of the tribe of Judah.&rdquo; The dying words of Jacob thus reach across the centuries to the throne of the Messiah, in whom the obedience of the peoples is gathered forever.
          </p>
        </div>
      </main>
    </div>
  );
}
