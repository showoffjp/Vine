"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";

const TABS = [
  "Overview",
  "Tower of Babel",
  "Genealogy to Abram",
  "Babel's Legacy",
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
    heading: "Genesis 11: The Hinge of Primeval History",
    reference: "Genesis 11:1&ndash;32",
    paragraphs: [
      "Genesis 11 occupies a pivotal structural position in the book of Genesis, and indeed in the entire biblical canon. It is the final chapter of what scholars call the &ldquo;primeval history&rdquo; (Gen. 1&ndash;11), the sweeping account of humanity from creation through the flood and its aftermath, and the opening chapter that bridges into the &ldquo;patriarchal history&rdquo; (Gen. 12&ndash;50), the focused story of one family through whom God will address the problems that the primeval history has laid bare. To understand chapter 11 is to understand why Abraham is called.",
      "The chapter divides cleanly into two sections of very different character. The first (vv. 1&ndash;9) is a narrative of concentrated drama: the Tower of Babel, in which the whole human race unites in a building project aimed at self-exaltation and resistance to God&rsquo;s mandate to fill the earth. The second section (vv. 10&ndash;32) is a genealogy &mdash; the toledot (&ldquo;generations&rdquo;) of Shem &mdash; which traces a line from the flood survivor Shem through ten generations to Terah, the father of Abram. Where the narrative is vivid and etiological, the genealogy is spare and systematic, but both sections are essential to the canon&rsquo;s argument.",
      "The Tower of Babel narrative explains something the reader of Genesis 10 (the &ldquo;Table of Nations&rdquo;) will have noticed: the whole earth was divided into separate nations with separate languages. Genesis 10 gives the result; Genesis 11:1&ndash;9 gives the cause. Humanity, speaking one language and settled in the plain of Shinar (Babylonia), decided to build &ldquo;a city and a tower with its top in the heavens&rdquo; and make a name for themselves, &ldquo;lest we be dispersed over the face of the whole earth&rdquo; (v. 4). The irony is total: the very thing they feared &mdash; scattering &mdash; became the judgment God enacted, and the very thing they sought &mdash; a great name &mdash; was denied them and reserved for Abram (12:2: &ldquo;I will make your name great&rdquo;).",
      "God&rsquo;s &ldquo;coming down&rdquo; to see the tower (v. 5) is one of Scripture&rsquo;s great ironic moments. The tower designed to reach heaven is so small that God must descend to inspect it. The judgment is linguistic and geographic: God confuses their language so that they cannot understand each other, and scatters them over the face of all the earth. What the builders feared becomes their fate; what they built becomes their name &mdash; Babel, which sounds like the Hebrew word for &ldquo;confusion.&rdquo;",
      "The genealogy of Shem (vv. 10&ndash;32) serves to narrow the narrative focus from all humanity to one family. Beginning with Shem, the son of Noah, it traces a line through Arpachshad, Shelah, Eber, Peleg, Reu, Serug, and Nahor to Terah, and then from Terah to his sons Abram, Nahor, and Haran. The lifespans decrease dramatically as the list progresses, signaling the end of the primeval age and the beginning of something new. Haran dies before his father Terah in Ur of the Chaldeans &mdash; the first recorded instance of a son predeceasing his father, an unnatural tragedy that sets the tone of fragility and incompleteness.",
      "Terah takes his family from Ur of the Chaldeans to go to the land of Canaan, but when they reach Haran, they stop there. Terah dies in Haran at the age of two hundred and five years. The chapter ends not with arrival but with a stopping short &mdash; a journey begun but not completed, a promise gestured at but not yet received. It is the ideal literary setup for Genesis 12:1, when God speaks to Abram directly and calls him to leave his country, his kindred, and his father&rsquo;s house for the land that God will show him. The incomplete journey of Terah becomes the context for the completed calling of Abram.",
    ],
  },
  {
    id: "Tower of Babel",
    heading: "The Tower of Babel: Rebellion and Scattering",
    reference: "Genesis 11:1&ndash;9",
    paragraphs: [
      "The opening verse of Genesis 11 presents a condition of remarkable unity: &ldquo;Now the whole earth had one language and the same words&rdquo; (v. 1). After the flood, Noah&rsquo;s descendants had multiplied and migrated, but they still shared a single linguistic community. As they journeyed east they found a plain in the land of Shinar &mdash; Babylonia, the ancient heartland of Mesopotamian civilization &mdash; and settled there. The scene is set for a collective act of human self-assertion that will define the rest of the primeval history&rsquo;s resolution.",
      "The builders&rsquo; project has two stated goals: to build a city and tower with &ldquo;its top in the heavens,&rdquo; and to &ldquo;make a name for ourselves, lest we be dispersed over the face of the whole earth&rdquo; (v. 4). The phrase &ldquo;make a name for ourselves&rdquo; reveals the spiritual core of the enterprise: it is the assertion of human autonomy and self-glorification apart from God. In the biblical framework, a &ldquo;name&rdquo; &mdash; a reputation, a legacy, an identity &mdash; is something that God gives (as he gave Adam the task of naming; as he will give Abram a great name in 12:2), not something humanity arrogates to itself.",
      "The resistance to dispersal is equally significant. God&rsquo;s original mandate to humanity was to &ldquo;fill the earth&rdquo; (1:28; 9:1). Dispersal across the earth in the full diversity of human cultures was the intended shape of created human life. The builders of Babel wanted to reverse this: to concentrate humanity in one place, unified under one project and one name. Their tower was not merely an architectural feat but an anti-creational program, a refusal of the diversity and finitude that God had built into the human calling.",
      "The literary structure of the narrative is itself ironic. The builders say, &ldquo;Come, let us build&rdquo; (v. 3); God says, &ldquo;Come, let us go down&rdquo; (v. 7). The human plurality (&ldquo;let us&rdquo;) mirrors the divine plurality, but to opposite effect. God&rsquo;s &ldquo;let us&rdquo; echoes the creation &ldquo;let us make man&rdquo; of Genesis 1:26, suggesting that just as creation was a divine act of ordered plurality producing something good, the divine response to Babel is a kind of counter-creation, a deliberate introduction of disorder into human linguistic unity as a form of judgment and limit.",
      "God&rsquo;s stated rationale for the judgment is revealing: &ldquo;Behold, they are one people, and they have all one language, and this is only the beginning of what they will do. And nothing that they propose to do will now be impossible for them&rdquo; (v. 6). This is not God acting from insecurity; it is God recognizing the dynamism of unified sinful humanity and mercifully limiting its capacity for self-destruction. The linguistic confusion and geographic scattering that follow are both judgment and grace: judgment for the pride of Babel, but also a restraint that prevents even more catastrophic forms of collective sin.",
      "The New Testament reader will immediately recognize the significance of Pentecost (Acts 2) as the reversal of Babel. At Babel, one language became many, scattering the nations. At Pentecost, many languages were made intelligible to each other as devout Jews from &ldquo;every nation under heaven&rdquo; heard the mighty works of God declared in their own tongue (Acts 2:5&ndash;11). Where Babel produced confusion through human pride, Pentecost produced understanding through the Spirit of God. The scattering of Babel was not the final word; the eschatological gathering of the Spirit would eventually undo what human rebellion had fractured. The city that the builders at Shinar could not finish, God himself will complete in the New Jerusalem, where the nations bring their glory into a single holy city (Rev. 21:24&ndash;26).",
      "The name &ldquo;Babel&rdquo; given to the place in v. 9 carries a double meaning: it echoes the name of Babylon (the great city of empire throughout the Old Testament) and it sounds like the Hebrew verb balal, meaning &ldquo;to confuse.&rdquo; What was meant to be the monument to human greatness became instead the monument to human confusion. The etiology of the nations &mdash; their separate languages and separate territories &mdash; is traced directly to this act of collective pride and its divine correction.",
    ],
  },
  {
    id: "Genealogy to Abram",
    heading: "The Genealogy from Shem to Abram",
    reference: "Genesis 11:10&ndash;32",
    paragraphs: [
      "After the cosmic drama of Babel, the narrative of Genesis 11 shifts registers entirely. Verses 10&ndash;32 present a genealogy in the characteristic style of the priestly strand of Genesis &mdash; sparse, formulaic, rhythmic. Each entry follows the same pattern: &ldquo;X lived Y years and fathered Z. And after he fathered Z, X lived A years and had other sons and daughters.&rdquo; Ten generations from Shem to Abram are recorded, each one a deliberate literary step narrowing the reader&rsquo;s focus from the breadth of all nations to the particularity of one man&rsquo;s call.",
      "The toledot (&ldquo;these are the generations of&rdquo;) formula that introduces v. 10 is the structural backbone of Genesis as a book. It appears eleven times in Genesis, each time marking a new section and a new narrowing of focus. The toledot of Shem follows immediately after the Babel narrative, drawing a line from the post-flood survivor to the man who will be God&rsquo;s instrument of blessing for all the scattered nations. The genealogy is thus not merely a chronological list; it is a theological narrative about the progressive specification of God&rsquo;s redemptive purpose in history.",
      "One of the most theologically significant features of this genealogy is the pattern of declining lifespans. Shem lived 600 years; Arpachshad 438; Shelah 433; Eber 464; Peleg 239; Reu 239; Serug 230; Nahor 148; Terah 205; and Abram&rsquo;s lifespan, which will be given in chapter 25, is 175 years. The trend is clear: the extraordinary ages of the primeval patriarchs are receding. The epoch of the antediluvian giants (Gen. 5) is giving way to something closer to normal human experience. The primeval world, with its direct divine interactions and massive human lifespans, is ending, and the historical world of covenant and promise &mdash; the world the reader inhabits &mdash; is beginning.",
      "The entry for Terah (vv. 26&ndash;32) is the most extended and the most significant. It introduces four names that will drive the rest of Genesis: Abram, Nahor, Haran, and Sarai. Haran &mdash; one of Terah&rsquo;s sons &mdash; dies before his father in Ur of the Chaldeans (v. 28), the first death of a child recorded in Scripture. This detail is narratively important: it introduces Lot, Haran&rsquo;s son, who will become a recurring figure in Abram&rsquo;s story. It also introduces a note of fragility and tragedy into the family story before the great call of chapter 12.",
      "The note about Sarai is equally critical: &ldquo;Now Sarai was barren; she had no child&rdquo; (v. 30). This is not incidental biographical detail; it is the central tension of the entire story of Abraham and Sarah that will occupy the next fourteen chapters of Genesis. God will call Abram to leave his home and will promise to make of him a great nation, but his wife is barren. The promise of offspring and the biological reality of barrenness are placed in direct collision here, so that when God ultimately gives Isaac, it will be unmistakably an act of divine creation, not human ability.",
      "The geographic movement in vv. 31&ndash;32 is rich with canonical significance. Terah takes Abram, Lot, and Sarai and sets out from Ur of the Chaldeans to go to the land of Canaan. But when they come to Haran, they settle there, and Terah dies in Haran. The journey to Canaan was begun but not completed by Terah&rsquo;s generation. The destination was known &mdash; Canaan &mdash; but the family stopped short. This unfinished journey creates the narrative setup for the divine intervention in Genesis 12: God will not let the journey to Canaan remain incomplete. He will call Abram specifically to complete what Terah began, and will give that journey the weight of covenant promise.",
      "Ur of the Chaldeans was one of the great cities of the ancient Near East, a sophisticated urban center with advanced culture, astronomical knowledge, and a well-developed pantheon. Joshua 24:2 confirms that Terah and his ancestors served other gods. The call of Abram in Genesis 12 is therefore a call out of paganism, out of Mesopotamian urban civilization, out of the world of multiple gods, into a covenant relationship with the one God who had made heaven and earth. The genealogy of Genesis 11 situates that call in its historical and cultural context, making clear that the election of Abram is God&rsquo;s sovereign initiative in the midst of a world thoroughly shaped by the confusion and idolatry that began at Babel.",
    ],
  },
  {
    id: "Babel's Legacy",
    heading: "Babel&rsquo;s Legacy and the Call of Abram",
    reference: "Genesis 11&ndash;12 and Beyond",
    paragraphs: [
      "The relationship between Genesis 11 and Genesis 12 is one of the most structurally important connections in the entire Bible. It is not simply a narrative sequence &mdash; one story following another &mdash; but a theological solution following a theological problem. Genesis 11 presents the condition of fallen humanity in its collective form: scattered, confused, divided by language and territory, unable to achieve the name and unity it desperately seeks. Genesis 12 presents God&rsquo;s response: not a general improvement program but a particular election, a single man called out of the ruins of Babel&rsquo;s world to become the vehicle of universal blessing.",
      "The correspondence between the builders&rsquo; goals at Babel and God&rsquo;s promises to Abram is precise and deliberate. At Babel, the builders said, &ldquo;Let us make a name for ourselves&rdquo; (11:4); in Genesis 12:2, God says to Abram, &ldquo;I will make your name great.&rdquo; The name that human pride tried to seize by building a tower, God promises to give freely by grace. At Babel, humanity tried to prevent their dispersal by centralizing around a city; in Genesis 12:3, God promises that through Abram &ldquo;all the families of the earth shall be blessed.&rdquo; The very scattered families of Babel will find their unity not through a common building project but through the blessing that flows from Abraham&rsquo;s seed.",
      "This structural relationship shapes Paul&rsquo;s argument in Galatians 3. When Paul argues that Abraham was justified by faith before the giving of the law, and that &ldquo;in you shall all the nations be blessed&rdquo; (Gal. 3:8), he is reading Genesis 12:3 as the announcement of the Gospel in advance. The Gentiles &mdash; the scattered nations of Babel &mdash; are to be blessed through Abraham, and that blessing comes by faith, not by ethnic membership in Israel. The mission to the nations that fills the book of Acts is therefore the outworking of God&rsquo;s answer to Babel: the reversal of the curse of confusion through the seed of Abraham who is Jesus Christ.",
      "The calling of Abram thus functions as the beginning of God&rsquo;s long answer to the question posed by Genesis 3&ndash;11: what will God do about human sin, its multiplication, and its effects? The flood did not solve the problem &mdash; sin persisted in Noah&rsquo;s family immediately after the waters receded (Gen. 9:20&ndash;27). Babel showed that even without a flood, humanity&rsquo;s collective sinful tendency could produce new forms of rebellion. The answer God provides is not another universal judgment but a particular calling: one man, one family, one covenant, through which blessing will flow to every family that the curse of Babel had scattered.",
      "The church reads Genesis 11 in light of Pentecost, and Pentecost in light of Genesis 11. At Babel, God confused language as judgment and scattered humanity; at Pentecost, God gave the Spirit so that each nation heard the Gospel in its own tongue. Luke deliberately echoes Genesis 10&rsquo;s table of nations in his list of Pentecost nations (Acts 2:9&ndash;11), signaling that what was undone at Pentecost was precisely the Babel-division. The mission of the church, going to &ldquo;all nations&rdquo; (Matt. 28:19), is the continuation of Pentecost&rsquo;s reversal of Babel &mdash; gathering the scattered through the proclamation of the Gospel of Abraham&rsquo;s seed.",
      "The eschatological trajectory of the Babel narrative reaches its culmination in Revelation 21&ndash;22, where the New Jerusalem descends as a city built by God rather than by human hands. Where the builders at Babel said, &ldquo;Let us build ourselves a city,&rdquo; Revelation shows a city whose builder and maker is God (cf. Heb. 11:10). Into this city &ldquo;the nations will walk,&rdquo; and &ldquo;the kings of the earth will bring their glory into it&rdquo; (Rev. 21:24). The diversity of nations &mdash; which began in the judgment of Babel &mdash; is not erased in the new creation but glorified, as all the cultural richness of the scattered peoples is gathered into one holy city under the rule of the Lamb.",
      "Genesis 11 thus invites the reader to see the entire biblical story in miniature. Humanity&rsquo;s problem is not ignorance or weakness but the proud self-assertion that refuses God&rsquo;s purposes and seeks to build its own name, its own city, its own unity &mdash; apart from God. God&rsquo;s solution is not to improve the human project but to disrupt it, scatter it, and then gather it anew around the seed he himself will provide. The line from Shem to Abram that ends Genesis 11 is the beginning of that gathering: a thread of grace running through the genealogical fog of centuries, leading to the one through whom all the scattered families of the earth will be blessed.",
    ],
  },
];

const videoItems = [
  { videoId: "Xp9YyGsXJJU", title: "Genesis 11 - Tower of Babel and the Call of Abram" },
  { videoId: "NVp8Z_7j4Hw", title: "BibleProject - Tower of Babel Explained" },
  { videoId: "QhXP3LhFGW4", title: "The Genealogy of Shem - Primeval History to the Patriarchs" },
  { videoId: "K2mFRLGz8Mk", title: "Genesis and Galatians - How Abraham Answers Babel" },
];

export default function Genesis11GuidePage() {
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
            Genesis Chapter 11
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The Tower of Babel and the genealogy from Shem to Abram &mdash; the hinge between primeval history and the patriarchal narrative. Humanity&rsquo;s unified rebellion at Babel results in the scattering of the nations, setting the stage for God&rsquo;s answer: the call of Abram, through whom all the scattered families of the earth will be blessed.
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
            >
              {t}
            </button>
          ))}
        </nav>

        {currentSection && activeTab !== "Videos" && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: GOLD, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
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
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
               dangerouslySetInnerHTML={{ __html: "Explore Genesis 11 through visual teaching on the Tower of Babel, the genealogy from Shem to Abram, and how God&rsquo;s call of Abram answers the scattering of the nations." }} />
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>I Will Make Your Name Great</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
             dangerouslySetInnerHTML={{ __html: "Genesis 11 presents the condition of fallen humanity at its collective worst &mdash; scattered, confused, and grasping after a name it cannot achieve. The answer is not a better tower but a sovereign call: God will make Abram&rsquo;s name great, and through his seed all the scattered families of Babel&rsquo;s world will be blessed. This is the Gospel announced beforehand (Gal. 3:8), the thread of grace that runs through all of Scripture." }} />
        </div>
      </main>
    </div>
  );
}
