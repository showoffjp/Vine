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
  "Jacob Adopts the Sons",
  "The Crossed Hands",
  "The Younger Before the Elder",
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
    heading: "Overview of Genesis 48",
    reference: "Genesis 48:1&ndash;22",
    paragraphs: [
      "Genesis chapter 48 stands among the great covenant scenes of the patriarchal narratives, for here the aged and dying Jacob gathers the last of his strength to bless the two sons of Joseph, Ephraim and Manasseh. The story that began with the call of Abraham and the promise of an everlasting inheritance now passes, hand laid upon head, into a new generation. The chapter is at once tender and weighty, joining the intimate scene of a grandfather embracing the children he never thought to see with the solemn transmission of the covenant blessing that reaches forward into the history of a whole nation.",
      "The opening section recounts how Joseph, hearing that his father is ill, brings his two sons to him (vv.1&ndash;7). Israel rallies his strength and sits up upon the bed, recounting how God Almighty had appeared to him at Luz in the land of Canaan and had promised to make him fruitful and to give that land to his offspring as an everlasting possession. On the strength of that promise the patriarch formally adopts the two boys as his own, placing Ephraim and Manasseh on a par with Reuben and Simeon, his own firstborn sons.",
      "The central section turns to the blessing itself, and to the striking crossing of the patriarch&rsquo;s hands (vv.8&ndash;16). Israel, his eyes dim with age, asks who the boys are, and when Joseph names them he embraces and kisses them, marveling that God has let him see not only his lost son but his son&rsquo;s children also. Then, as Joseph positions the elder Manasseh toward the right hand and the younger Ephraim toward the left, Jacob deliberately crosses his arms, laying his right hand upon the head of the younger.",
      "The closing section records Joseph&rsquo;s objection and Jacob&rsquo;s firm refusal to be corrected (vv.17&ndash;22). When Joseph, displeased, tries to move his father&rsquo;s right hand to the head of Manasseh, the patriarch answers, &ldquo;I know, my son, I know,&rdquo; and insists that though the elder shall indeed become a people, the younger brother shall be greater and his offspring shall become a multitude of nations. So Ephraim is set before Manasseh, and Joseph is granted the double portion of the birthright.",
      "Throughout the chapter the covenant promise is the deep current beneath every word and gesture. Jacob does not bless out of mere affection or family custom, but out of the sworn word of God Almighty given at Bethel, the promise of a land and a multiplied seed. The blessing he pronounces invokes the God before whom Abraham and Isaac walked, the God who had shepherded him all his life long, and the angel who had redeemed him from all evil, gathering the whole history of grace into a single benediction laid upon the heads of two boys.",
      "Read as a whole, Genesis 48 reveals the strange and sovereign pattern by which God has chosen to work, lifting up the younger before the elder and overturning the expectations of men. As with Isaac over Ishmael, and Jacob himself over Esau, so now Ephraim is set before Manasseh, that the blessing might rest not upon the strength of human primogeniture but upon the free and electing grace of God. The chapter thus becomes a window onto the very heart of the covenant, where inheritance is not earned by birth order but bestowed by the God who keeps his promises across the generations.",
    ],
  },
  {
    id: "Jacob Adopts the Sons",
    heading: "Jacob Adopts Joseph's Sons",
    reference: "Genesis 48:1&ndash;7",
    paragraphs: [
      "&ldquo;After this, Joseph was told, &lsquo;Behold, your father is ill.&rsquo; So he took with him his two sons, Manasseh and Ephraim&rdquo; (48:1). The chapter opens with the news of Jacob&rsquo;s decline, and at once Joseph acts. He does not come alone, but brings his two sons, that they too might receive the blessing of the dying patriarch. There is a quiet wisdom in this, for Joseph desires that his children be drawn into the covenant family and inherit the promise given to the fathers.",
      "&ldquo;And it was told to Jacob, &lsquo;Your son Joseph has come to you.&rsquo; Then Israel summoned his strength and sat up in bed&rdquo; (48:2). The feeble patriarch, hearing of his son&rsquo;s arrival, gathers what strength remains and sits upright upon the bed. The detail is touching and significant, for it shows the solemn importance of what is about to occur. This is no idle visit but a covenant moment, and Israel rouses himself to meet it with the dignity it deserves.",
      "&ldquo;God Almighty appeared to me at Luz in the land of Canaan and blessed me, and said to me, &lsquo;Behold, I will make you fruitful and multiply you, and I will make of you a company of peoples and will give this land to your offspring after you for an everlasting possession&rsquo;&rdquo; (48:3&ndash;4). Jacob grounds everything that follows upon the promise given at Bethel. The blessing he is about to bestow flows not from himself but from the sworn word of God Almighty, the El Shaddai who had met him in his flight and pledged to him a land and an innumerable seed.",
      "&ldquo;And now your two sons, who were born to you in the land of Egypt before I came to you in Egypt, are mine; Ephraim and Manasseh shall be mine, as Reuben and Simeon are&rdquo; (48:5). Here is the great act of adoption. Jacob takes the two boys born to Joseph in Egypt and claims them as his own, raising them to the standing of his firstborn sons. By this word Ephraim and Manasseh each become a tribe in Israel, and Joseph receives, through his sons, the double portion of the birthright.",
      "&ldquo;And the children that you fathered after them shall be yours. They shall be called by the name of their brothers in their inheritance&rdquo; (48:6). The adoption is precise and limited: only the two named sons are elevated to tribal standing, while any later children of Joseph shall be reckoned under the inheritance of Ephraim and Manasseh. Thus the structure of the twelve tribes is preserved even as Joseph is honored with a double share among them.",
      "&ldquo;As for me, when I came from Paddan, to my sorrow Rachel died in the land of Canaan on the way, when there was still some distance to go to Ephrath, and I buried her there on the way to Ephrath&rdquo; (48:7). At this solemn moment the old man&rsquo;s heart turns to Rachel, the beloved wife and mother of Joseph, who had died on the road and been buried near Bethlehem. The memory is not a digression but a tender thread, binding the blessing of Joseph&rsquo;s sons to the love that Jacob had borne their grandmother.",
      "In this opening section the patriarch grants to Joseph the double portion through his two sons, the very birthright that Reuben had forfeited by his sin. What is done here is no mere private family arrangement but a reshaping of the inheritance of Israel, carried out upon the foundation of God&rsquo;s covenant promise. The dying Jacob, summoning his strength, speaks as a man whose faith reaches beyond his deathbed to the everlasting possession that God had sworn to give his offspring in the land of Canaan.",
    ],
  },
  {
    id: "The Crossed Hands",
    heading: "The Crossed Hands of Blessing",
    reference: "Genesis 48:8&ndash;16",
    paragraphs: [
      "&ldquo;When Israel saw Joseph&rsquo;s sons, he said, &lsquo;Who are these?&rsquo;&rdquo; (48:8). The eyes of the patriarch are dim with age, much as his father Isaac&rsquo;s had been in the day of an earlier blessing, and he cannot make out the faces of the boys before him. The detail quietly recalls the scene of Genesis 27, preparing the reader for another blessing in which sight fails but the purpose of God does not.",
      "&ldquo;Joseph said to his father, &lsquo;They are my sons, whom God has given me here.&rsquo; And he said, &lsquo;Bring them to me, please, that I may bless them&rsquo;&rdquo; (48:9). Joseph answers with a confession of grace, naming his sons as the gift of God. And the aged Israel asks that they be brought near, that he may lay his hands upon them and bless them, drawing them into the stream of covenant promise that flows from Abraham and Isaac.",
      "&ldquo;And Israel kissed them and embraced them. And Israel said to Joseph, &lsquo;I never expected to see your face; and behold, God has let me see your offspring also&rsquo;&rdquo; (48:10&ndash;11). The scene overflows with tenderness. The old man who had mourned Joseph as dead now holds his son&rsquo;s children in his arms, and marvels that God has granted him a joy beyond all his hopes. Here grief is swallowed up in wonder, and the providence that had seemed so cruel is seen at last to have been kind.",
      "&ldquo;And Joseph took them both, Ephraim in his right hand toward Israel&rsquo;s left hand, and Manasseh in his left hand toward Israel&rsquo;s right hand, and brought them near him&rdquo; (48:13). Joseph arranges his sons with care, placing the elder Manasseh where the more honored right hand of his father would naturally fall, and the younger Ephraim toward the left. Everything is ordered according to the custom of primogeniture, and Joseph expects the blessing to follow the established pattern.",
      "&ldquo;And Israel stretched out his right hand and laid it on the head of Ephraim, who was the younger, and his left hand on the head of Manasseh, crossing his hands (for Manasseh was the firstborn)&rdquo; (48:14). But the patriarch crosses his arms, deliberately and knowingly, laying the right hand of blessing upon the head of the younger. It is no accident of dim sight, as the narrator makes plain, but a guided act of prophetic intent, the sovereign choice of God expressed through the crossed hands of a dying man.",
      "&ldquo;The God before whom my fathers Abraham and Isaac walked, the God who has been my shepherd all my life long to this day, the angel who has redeemed me from all evil, bless the boys&rdquo; (48:15&ndash;16). The blessing that Israel pronounces is one of the richest in all of Scripture, gathering the whole history of grace into three great titles. He names the covenant God before whom his fathers walked, the Shepherd who had guided and fed him all his days, and the redeeming Angel who had delivered him from every evil along the way.",
      "&ldquo;And in them let my name be carried on, and the name of my fathers Abraham and Isaac; and let them grow into a multitude in the midst of the earth&rdquo; (48:16). So the patriarch prays that his name and the names of the fathers might live on in these two boys, and that they might multiply greatly upon the earth. It is a profound benediction invoking the covenant-keeping, shepherding, redeeming God, a blessing that binds the children of Joseph forever to the promises sworn to Abraham and Isaac.",
    ],
  },
  {
    id: "The Younger Before the Elder",
    heading: "The Younger Set Before the Elder",
    reference: "Genesis 48:17&ndash;22",
    paragraphs: [
      "&ldquo;When Joseph saw that his father laid his right hand on the head of Ephraim, it displeased him, and he took his father&rsquo;s hand to move it from Ephraim&rsquo;s head to Manasseh&rsquo;s head&rdquo; (48:17). Joseph, supposing his father has erred through dim sight, is grieved to see the right hand resting on the younger. With a son&rsquo;s respect he reaches out to correct what he takes to be a mistake, gently lifting the aged hand to redirect it to the head of the firstborn.",
      "&ldquo;And Joseph said to his father, &lsquo;Not this way, my father; since this one is the firstborn, put your right hand on his head&rsquo;&rdquo; (48:18). Joseph speaks plainly, appealing to the natural order of birth. In his mind the matter is clear: the firstborn must receive the chief blessing, and the right hand belongs upon the head of Manasseh. He cannot yet see that the order of God is not bound to the order of men.",
      "&ldquo;But his father refused and said, &lsquo;I know, my son, I know. He also shall become a people, and he also shall be great. Nevertheless, his younger brother shall be greater than he, and his offspring shall become a multitude of nations&rsquo;&rdquo; (48:19). The patriarch answers with calm and knowing firmness. He does not deny that Manasseh shall be great, but he insists, by the same prophetic certainty with which he had crossed his hands, that the younger shall be greater still, and that from Ephraim shall come a fullness of nations.",
      "&ldquo;So he blessed them that day, saying, &lsquo;By you Israel will pronounce blessings, saying, God make you as Ephraim and as Manasseh.&rsquo; Thus he put Ephraim before Manasseh&rdquo; (48:20). The blessing is sealed in a saying that would echo through the generations of Israel, a benediction in which Ephraim is named first. So the deliberate choice of the patriarch is fixed forever, the younger set before the elder in the formula by which fathers in Israel would bless their own sons.",
      "&ldquo;Then Israel said to Joseph, &lsquo;Behold, I am about to die, but God will be with you and will bring you again to the land of your fathers&rsquo;&rdquo; (48:21). Turning to Joseph, the dying man speaks a final word of covenant hope. Though he himself must die in Egypt, he assures his son that God will be present with him and will surely bring his offspring back to the land of promise. His faith looks past his own end to the faithfulness of God toward the generations to come.",
      "&ldquo;Moreover, I have given to you rather than to your brothers one mountain slope that I took from the hand of the Amorites with my sword and with my bow&rdquo; (48:22). As a token of the inheritance, Jacob grants to Joseph one mountain slope, often understood as Shechem, a portion above that of his brothers. It is a tangible pledge of the land to come, given to the son whom he had honored with the double portion of the birthright.",
      "In this final section the great theme of the chapter comes to its fullness, the theme of divine election that overturns natural primogeniture. As with Isaac chosen over Ishmael, and Jacob over Esau, so now Ephraim is set before Manasseh, that the blessing might rest upon the free choice of God rather than the accident of birth. The crossed hands of the dying patriarch become a sign of the whole pattern of redemption, in which God lifts up the lowly and the unexpected, and bestows his inheritance according to grace.",
    ],
  },
];

const videoItems = [
  { videoId: "Vp4kTx9Hn2W", title: "Jacob Adopts Ephraim and Manasseh in Genesis 48" },
  { videoId: "Wq7bVx3Km8D", title: "The Crossed Hands and the Covenant Blessing" },
  { videoId: "Xr2cWz5Ln6P", title: "The Younger Set Before the Elder in Jacob&rsquo;s Blessing" },
  { videoId: "Ys9gBy1Cn4M", title: "Divine Election and the Promise of the Land" },
];

export default function Genesis48GuidePage() {
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
            The Book of Genesis, Chapter 48
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The aged and dying Jacob blesses Joseph&rsquo;s two sons, Ephraim and Manasseh. Recounting God&rsquo;s covenant promise at Luz, he adopts the two boys as his own, on a par with Reuben and Simeon. He blesses them, but deliberately crosses his hands, laying his right upon the younger Ephraim and his left upon the firstborn Manasseh. When Joseph objects, Jacob insists, prophesying that the younger shall be greater &mdash; a chapter on covenant inheritance, faith, and the God who reverses human expectations.
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
              Deepen your study of Genesis 48 through visual teaching on the adoption of Ephraim and Manasseh into the covenant family, the solemn and tender scene of the patriarch crossing his hands to bless the younger before the elder, the rich benediction that invokes the covenant-keeping, shepherding, and redeeming God, and the sovereign pattern of divine election by which the inheritance is bestowed not by birth order but by the free grace of God.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The God Who Reverses Expectations</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 48 reveals the strange and sovereign pattern by which God works, lifting up the younger before the elder and overturning the expectations of men. As with Isaac over Ishmael, and Jacob himself over Esau, so now Ephraim is set before Manasseh, that the blessing might rest not upon the strength of human primogeniture but upon the free and electing grace of God. The crossed hands of the dying patriarch become a sign of the whole pattern of redemption, in which the inheritance is bestowed according to the promise of the covenant-keeping God.
          </p>
        </div>
      </main>
    </div>
  );
}
