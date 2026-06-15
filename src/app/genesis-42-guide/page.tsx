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
  "The Brothers Sent",
  "Joseph Tests Them",
  "Dread and Grief",
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
    heading: "Famine, Recognition, and the Beginning of Testing",
    reference: "Genesis 42",
    paragraphs: [
      "Genesis 42 opens with the long arm of famine reaching into the land of Canaan. Word comes that there is grain in Egypt, and Jacob, unwilling to watch his household starve, sends ten of his sons down to buy food. Only Benjamin, the youngest and now the most cherished, is kept at home, &ldquo;for he feared that harm might happen to him&rdquo; (vv.1&ndash;5). The stage is set for one of the most emotionally charged reunions in all of Scripture, though neither the brothers nor the reader yet sees how God&rsquo;s hidden hand has prepared it.",
      "When the brothers arrive in Egypt, they come before the governor of the land &mdash; the very man who controls the grain &mdash; and bow low before him. That governor is Joseph, the brother they sold into slavery twenty years before. Joseph recognizes them at once, but they do not recognize him. Speaking through an interpreter and treating them as strangers, he accuses them of being spies and begins a series of tests designed to probe their hearts (vv.6&ndash;24).",
      "Joseph demands that they prove their honesty by bringing their youngest brother down to Egypt, and he holds Simeon as a hostage to guarantee their return. Then, in a gesture both generous and disquieting, he secretly commands that their payment be returned in their sacks. On the journey home the brothers discover the money and are seized with dread, crying out, &ldquo;What is this that God has done to us?&rdquo; (vv.25&ndash;28). Their consciences, long buried, are awakening.",
      "Back in Canaan the brothers report everything to Jacob &mdash; the harsh words of the lord of the land, the detention of Simeon, the demand for Benjamin. As they empty their sacks, every man finds his bundle of money, and a fresh wave of fear sweeps over the household. Jacob, already crushed by the supposed death of Joseph, refuses to let Benjamin go, lamenting that all these things have come against him (vv.29&ndash;38).",
      "Beneath the surface of this chapter runs a profound theological current: the slow, painful work of repentance. The brothers who once silenced their consciences and lied to their father now find that the past will not stay buried. God is using famine, fear, and a stranger&rsquo;s harshness to draw them toward the confession they have avoided for two decades. The road to reconciliation must pass through the valley of guilt honestly faced.",
      "Genesis 42 also reveals the deep providence of God working through suffering. Joseph&rsquo;s boyhood dreams, in which his brothers bowed before him, find their first fulfillment here &mdash; not as a triumph of pride but as the opening move in a drama of mercy. The God who allowed Joseph to be sold is the same God who has raised him to save many lives, and who now begins to heal a fractured family from the inside out.",
    ],
  },
  {
    id: "The Brothers Sent",
    heading: "The Brothers Sent Down to Egypt",
    reference: "Genesis 42:1&ndash;17",
    paragraphs: [
      "&ldquo;When Jacob learned that there was grain in Egypt, he said to his sons, &lsquo;Why do you look at one another?&rsquo;&rdquo; (v.1). The famine has gripped Canaan, and Jacob rebukes the paralysis of his sons, who stand staring at each other while their families grow hungry. He sends the ten down to Egypt to buy grain, but he withholds Benjamin, &ldquo;for he feared that harm might happen to him&rdquo; (v.4). The old wound of Joseph&rsquo;s loss still governs Jacob&rsquo;s heart, and his protective grip on Rachel&rsquo;s remaining son shapes the whole chapter.",
      "The brothers arrive among the many who come to buy grain, and they are brought before the governor. &ldquo;Now Joseph was governor over the land. He it was who sold to all the people of the land. And Joseph&rsquo;s brothers came and bowed themselves before him with their faces to the ground&rdquo; (v.6). In this single moment Joseph&rsquo;s childhood dreams come true: the sheaves and the stars that once provoked his brothers&rsquo; hatred now find their fulfillment as the ten bow low before the brother they discarded.",
      "&ldquo;Joseph saw his brothers and recognized them, but he treated them like strangers and spoke roughly to them&rdquo; (v.7). The recognition is instant and overwhelming for Joseph, yet he masters his emotion and conceals himself. They, however, do not know him &mdash; the boy of seventeen has become an Egyptian ruler of nearly forty, dressed in fine linen and speaking through an interpreter. The distance of years and the disguise of office keep them blind to the truth standing before them.",
      "Joseph levels a sharp accusation: &ldquo;You are spies; you have come to see the nakedness of the land&rdquo; (v.9). This charge is no mere cruelty; it is the doorway to his testing. The brothers protest their innocence: &ldquo;No, my lord, your servants have come to buy food. We are all sons of one man. We are honest men; your servants have never been spies&rdquo; (vv.10&ndash;11). In defending themselves they reveal exactly what Joseph longs to know about his father and his family.",
      "Pressed further, they explain more than they intend: &ldquo;We, your servants, are twelve brothers, the sons of one man in the land of Canaan, and behold, the youngest is this day with our father, and one is no more&rdquo; (v.13). The careful reader hears the weight of that phrase &mdash; &ldquo;one is no more&rdquo; &mdash; spoken to the very brother they believe is dead. Their words give Joseph the opening he needs to demand that Benjamin be brought down, the test by which their hearts will be searched.",
      "Joseph seizes the opportunity: &ldquo;By this you shall be tested: by the life of Pharaoh, you shall not go from this place unless your youngest brother comes here&rdquo; (v.15). To bind the demand, &ldquo;he put them all together in custody for three days&rdquo; (v.17). The three days of confinement echo Joseph&rsquo;s own imprisonment and the trials he endured. Now the brothers taste a measure of helplessness and uncertainty, the first stirrings of a discipline that will lead them, step by painful step, toward repentance and restoration.",
    ],
  },
  {
    id: "Joseph Tests Them",
    heading: "Joseph Tests His Brothers",
    reference: "Genesis 42:18&ndash;25",
    paragraphs: [
      "On the third day Joseph relents from his sternest demand: &ldquo;Do this and you will live, for I fear God&rdquo; (v.18). Rather than holding nine brothers and sending one back, he reverses the plan: he will keep only one in prison while the rest carry grain home to their starving households. The condition remains the same &mdash; they must return with Benjamin to verify their words. Joseph&rsquo;s confession that he fears God quietly signals that his testing is not vengeance but a measured, righteous work.",
      "&ldquo;Let one of your brothers remain confined where you are in custody, and let the rest go and carry grain for the famine of your households, and bring your youngest brother to me&rdquo; (vv.19&ndash;20). The brothers, gathered together under this pressure, begin to speak among themselves &mdash; and what surfaces is the buried guilt of twenty years. They do not know that Joseph understands every word, for he has been speaking through an interpreter and they assume the governor cannot follow their Hebrew.",
      "Their confession breaks open at last: &ldquo;In truth we are guilty concerning our brother, in that we saw the distress of his soul, when he begged us and we did not listen. That is why this distress has come upon us&rdquo; (v.21). For the first time in the narrative the brothers name their sin aloud. The memory of Joseph pleading in the pit, the sound of his anguish they hardened themselves against, rises up to accuse them. They read their present trouble as the just consequence of their old cruelty.",
      "Reuben, the eldest, answers with bitter vindication: &ldquo;Did I not tell you not to sin against the boy? But you did not listen. So now there comes a reckoning for his blood&rdquo; (v.22). Years earlier Reuben had tried to spare Joseph, intending to rescue him from the pit. Now he reminds his brothers that their guilt was warned against and willful. The word &ldquo;reckoning&rdquo; hangs heavy in the air, a confession that blood demands an accounting before God.",
      "What the brothers cannot see is the effect their words have on the man before them: &ldquo;They did not know that Joseph understood them, for there was an interpreter between them. Then he turned away from them and wept&rdquo; (vv.23&ndash;24). To hear his brothers confess their guilt over his suffering &mdash; to learn that at least some conscience has survived &mdash; overwhelms Joseph. He withdraws to weep in secret, then composes himself and returns, mastering his emotion to continue the test.",
      "Joseph then acts decisively: &ldquo;He took Simeon from them and bound him before their eyes&rdquo; (v.24). Simeon, perhaps a ringleader in the original crime, is taken as the hostage. And in a final, mysterious move, Joseph commands that their sacks be filled with grain, their money returned to each man&rsquo;s sack, and provisions given for the journey (v.25). This secret gift, hidden among the grain, will soon become a fresh source of fear &mdash; another thread in the providence drawing the brothers back to Egypt and back to God.",
    ],
  },
  {
    id: "Dread and Grief",
    heading: "Dread on the Journey and Jacob's Grief",
    reference: "Genesis 42:26&ndash;38",
    paragraphs: [
      "The brothers load their grain and set off for home, but the journey brings no relief. &ldquo;As one of them opened his sack to give his donkey fodder at the lodging place, he saw his money in the mouth of his sack&rdquo; (v.27). The discovery is electrifying. The very payment they had handed over has reappeared, and they cannot account for it. Their hearts sink, and the weight of their unconfessed guilt transforms a windfall into a terror.",
      "&ldquo;At this their hearts failed them, and they turned trembling to one another, saying, &lsquo;What is this that God has done to us?&rsquo;&rdquo; (v.28). This cry is one of the most revealing lines in the chapter. The brothers no longer see mere coincidence; they sense the hand of God at work, and they read his providence through the lens of their fear. Conscience awakened reads even unexpected mercy as a sign of judgment, for the guilty heart trembles at every turn.",
      "Reaching Canaan, they pour out the whole account to Jacob: &ldquo;The man, the lord of the land, spoke roughly to us and took us to be spies of the land&rdquo; (v.30). They relay the accusation, their defense, the demand for Benjamin, and the detention of Simeon. They report the governor&rsquo;s words that only by bringing the youngest brother could they prove their honesty and recover the one held captive. Each detail deepens the dread settling over the household.",
      "Then comes the second shock: &ldquo;As they emptied their sacks, behold, every man&rsquo;s bundle of money was in his sack. And when they and their father saw their bundles of money, they were afraid&rdquo; (v.35). Now it is not one man but all of them, and Jacob himself, who stand stricken before the returned silver. The mystery compounds their fear, for innocent men do not expect their payment to follow them home, and they sense trouble pressing in from every side.",
      "Jacob&rsquo;s grief erupts in a lament of profound sorrow: &ldquo;You have bereaved me of my children: Joseph is no more, and Simeon is no more, and now you would take Benjamin. All this has come against me&rdquo; (v.36). The old patriarch numbers his losses and feels the whole world arrayed against him. He cannot see that the son he mourns as dead is alive and reigning, and that the hand he feels crushing him is in truth the hand that is saving his house.",
      "Reuben offers a desperate pledge: &ldquo;Kill my two sons if I do not bring him back to you. Put him in my hands, and I will bring him back to you&rdquo; (v.37). But Jacob refuses: &ldquo;My son shall not go down with you, for his brother is dead, and he is the only one left. If harm should happen to him on the journey that you are to make, you would bring down my gray hairs with sorrow to Sheol&rdquo; (v.38). The chapter ends in a deadlock of fear and grief &mdash; yet the deep providence of God is already moving, through suffering and guilt, toward the reconciliation that will heal them all.",
    ],
  },
];

const videoItems = [
  { videoId: "Pr7mK2dN8vJ", title: "Genesis 42 - Famine and the Brothers Sent to Egypt" },
  { videoId: "Wq4tZ9bL3Xs", title: "The Dreams Fulfilled - Joseph Recognizes His Brothers" },
  { videoId: "Hn6cV1pR5Mw", title: "We Are Guilty - Conscience Awakened After Twenty Years" },
  { videoId: "Tz3dG8kP4Nb", title: "Jacob's Grief - All This Has Come Against Me" },
];

export default function Genesis42GuidePage() {
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
            Genesis Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Genesis 42
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Driven by famine, Jacob sends ten sons to Egypt for grain while keeping Benjamin home. Joseph, now governor, recognizes his brothers, tests them as spies, holds Simeon hostage, and secretly returns their money &mdash; beginning the brothers&rsquo; long road to repentance and the family&rsquo;s reconciliation.
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
              Deepen your study of Genesis 42 through visual teaching on the famine that drives the brothers to Egypt, the fulfillment of Joseph&rsquo;s dreams, the awakening of long-buried conscience, and Jacob&rsquo;s grief as the providence of God moves toward reconciliation.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Providence Working Through Suffering</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 42 shows the deep providence of God working through famine, fear, and guilt toward reconciliation. The same testing that awakens the brothers&rsquo; consciences after twenty years is the hand of a God who is not thwarted by sin, but who patiently draws a broken family back toward repentance, restoration, and the salvation of many lives.
          </p>
        </div>
      </main>
    </div>
  );
}
