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
  "God Tests Abraham",
  "The Journey to Moriah",
  "God Will Provide the Lamb",
  "The Angel of the Lord Calls Out",
  "In Your Offspring All Nations Blessed",
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
    id: "God Tests Abraham",
    heading: "God Tests Abraham",
    reference: "Genesis 22:1&ndash;2",
    paragraphs: [
      "Genesis 22 begins with two of the most theologically loaded words in all of Scripture: &ldquo;God tested.&rdquo; The Hebrew verb used here &mdash; nissah &mdash; is the same root from which we get the place name Massah, the water of testing in the wilderness. Testing in the biblical vocabulary is not the same as tempting. God does not tempt anyone with evil (James 1:13). But he does test, as gold is tested in fire: not to discover what is already unknown to him, but to reveal what is there, to draw out and confirm the character of faith under pressure.",
      "The test God lays before Abraham is staggering in its severity. &ldquo;Take your son, your only son Isaac, whom you love, and go to the land of Moriah, and offer him there as a burnt offering on one of the mountains of which I shall tell you.&rdquo; The language accumulates weight deliberately: not just &ldquo;your son,&rdquo; but &ldquo;your only son&rdquo; &mdash; the son of the promise, the one through whom the covenant blessing would flow to all nations. Then: &ldquo;whom you love.&rdquo; This is the first use of the word &ldquo;love&rdquo; in all of the Bible, and it appears in the context of a love about to be brought to its ultimate test.",
      "God was asking Abraham to give back the very thing God had supernaturally given him. Isaac was the child of promise, born when Abraham was a hundred years old and Sarah was ninety, when the womb was dead and the hope of offspring seemed as impossible as resurrection. Every year Isaac had lived was a monument to God&rsquo;s faithfulness and power. And now God was asking for him back &mdash; not as a payment for promises received, but as a test of whether Abraham&rsquo;s trust in God was absolute or conditional on keeping what God had given.",
      "The ethical dimensions of this test have occupied theologians and philosophers across centuries. How could the God who forbids murder command a father to kill his son? The New Testament provides the key to understanding Abraham&rsquo;s own interior logic: &ldquo;He considered that God was able even to raise him from the dead&rdquo; (Hebrews 11:19). Abraham&rsquo;s obedience was not blind. It was faith reasoning from the character and promises of God. God had said that through Isaac the covenant line would continue. If God commanded Isaac&rsquo;s death, then God could raise him &mdash; because the promise was more certain than any circumstance, including death itself.",
      "The test of Abraham is a mirror held up to every generation of believers. What is the Isaac in your hands &mdash; the gift you hold most tightly, the blessing you are least willing to release back to God? The Akedah (the binding) does not teach that God delights in suffering or demands the impossible. It teaches that the God who gives is more trustworthy than any gift he gives, and that obedient love released in faith receives back more than it surrendered.",
      "The story of the binding stands at the apex of the Abraham narrative, which spans Genesis 12 through 25. Everything in Abraham&rsquo;s journey &mdash; the call from Ur, the long wait for a son, the covenant of circumcision, the rescue of Lot, the birth of Ishmael and then Isaac &mdash; has been building to this moment. Here the faith of Abraham that was reckoned to him as righteousness (Genesis 15:6, Romans 4:3) is forged in fire and proved genuine. Here the father of faith earns his title not by believing comfortably but by trusting God in the most radical possible act of surrender.",
    ],
  },
  {
    id: "The Journey to Moriah",
    heading: "The Journey to Moriah",
    reference: "Genesis 22:3&ndash;8",
    paragraphs: [
      "Abraham rose early in the morning. He did not deliberate for days. He did not argue or negotiate. He did not wait to see if perhaps he had misheard. He rose early &mdash; the same words used of him when he rose early to send Hagar and Ishmael away, and when he rose early to look toward Sodom the morning of its destruction. In Abraham&rsquo;s obedience there is a quality of promptness that is itself a form of faith: the act of beginning moves him past the paralysis that too much reflection might produce. He saddles his donkey, splits the wood for the burnt offering, and sets out with Isaac and two young men toward Moriah.",
      "The three-day journey is one of the most agonizing silences in all of Scripture. Three days of walking, of watching Isaac carry the wood, of answering whatever questions arose, of sharing meals and making camp &mdash; and all the while carrying the command of God like a stone in the chest. Abraham had three days to turn back. Three days to reconsider, to find a reason why the command could not have been divine, to succumb to the pressure of a father&rsquo;s love for his son. He did not turn back. He walked toward Moriah.",
      "On the third day, Abraham lifts his eyes and sees the place from a distance. He tells the young men, &ldquo;Stay here with the donkey; I and the boy will go over there and worship and come back to you.&rdquo; The word &ldquo;worship&rdquo; here is telling: what Abraham is about to do, he frames as an act of worship. The surrender of the most precious is not tragedy or loss; in the hands of faith it is worship &mdash; the returning of life&rsquo;s dearest gift to the One from whom it came.",
      "More striking still: &ldquo;we will come back to you.&rdquo; Abraham says &ldquo;we,&rdquo; not &ldquo;I.&rdquo; The author of Hebrews draws the conclusion the text implies: Abraham believed God was able to raise Isaac from the dead. He expected to come back down the mountain with his son. His obedience was not resignation to loss but faith in a God who could work beyond death. He would offer Isaac as God commanded, and God would provide &mdash; in what manner Abraham could not know, but provide he would.",
      "Then Isaac asks the question that has pierced readers across all generations: &ldquo;Behold, the fire and the wood, but where is the lamb for a burnt offering?&rdquo; Isaac is not a young child at this point &mdash; he is old enough to carry the wood, old enough to understand the components of sacrifice, old enough to notice the missing animal. His question is innocent and terrible. And Abraham&rsquo;s answer is a statement of faith so dense that it echoes forward across the entire Bible: &ldquo;God will provide for himself the lamb, my son.&rdquo;",
      "God will provide the lamb. In the moment, Abraham may have meant it only as a way of speaking about a provision he could not yet see. But the phrase carries a weight that only the fullness of redemptive history can unpack. In the end, Abraham was more right than he could have known. On the mountain of Moriah &mdash; the same mountain range on which Jerusalem and ultimately Golgotha would one day stand &mdash; God would indeed provide the Lamb. Not a ram in a thicket, but his own Son, of whom John the Baptist would cry: &ldquo;Behold, the Lamb of God, who takes away the sin of the world!&rdquo; (John 1:29).",
    ],
  },
  {
    id: "God Will Provide the Lamb",
    heading: "God Will Provide the Lamb",
    reference: "Genesis 22:9&ndash;14",
    paragraphs: [
      "When they come to the place God had told him of, Abraham builds the altar, arranges the wood, binds Isaac his son, and lays him on the altar on top of the wood. The narrative slows to capture each deliberate act. There is no hint of resistance from Isaac. This is the Akedah &mdash; the binding &mdash; and in the Jewish tradition it became one of the most meditated moments in all of Torah. Isaac, who could have overpowered his elderly father, submits. His submission is its own form of faith, its own type pointing toward the one who would come &ldquo;like a lamb that is led to the slaughter&rdquo; (Isaiah 53:7).",
      "Abraham stretches out his hand and takes the knife to slaughter his son. This is the moment of no return, the razor edge of the test. There is no angelic intervention yet. Abraham has gone the full distance of obedience, and in his intention the act is complete. What God now sees is not a man who was willing to go most of the way &mdash; he sees a man who raised the knife. This completeness of obedience is what the New Testament calls the &ldquo;work&rdquo; by which Abraham&rsquo;s faith was &ldquo;made perfect&rdquo; (James 2:22): not that faith needed moral improvement, but that it was brought to its full expression in act.",
      "Then the angel of the Lord calls from heaven: &ldquo;Abraham, Abraham!&rdquo; The repetition of the name signals urgency and intimacy &mdash; the same doubling that will mark God&rsquo;s address to Moses from the burning bush, to Samuel in the night, to Saul on the Damascus road. &ldquo;Do not lay your hand on the boy or do anything to him, for now I know that you fear God, seeing you have not withheld your son, your only son, from me.&rdquo; The test is over. The knife is not used. The ram is revealed in the thicket, caught by its horns, and Abraham offers it as a burnt offering in place of his son.",
      "The substitutionary principle is explicit and unmistakable: the ram dies in Isaac&rsquo;s place. Isaac is bound; the ram is slain; Isaac goes free. This is the grammar of atonement written into the earliest chapters of the covenant story. Life is given for life; the innocent substitute takes the place of the one who was bound for death. The entire sacrificial system that would later be codified in Leviticus, and the entire logic of penal substitution that the prophets would articulate and the New Testament would declare fulfilled in Christ, is compressed into this scene on a mountain in Moriah.",
      "Abraham calls the name of the place &ldquo;The Lord will provide&rdquo; &mdash; YHWH-Yireh in Hebrew, from the verb ra&rsquo;ah, to see. The Lord sees, and in seeing provides. What God sees, he does not ignore. He saw the bind Isaac was in and he provided the substitute. He saw the bind humanity was in &mdash; under the power of sin and death, unable to provide its own atonement &mdash; and he did not withhold his own Son. Romans 8:32 makes the connection explicit with deliberate verbal echoes of Genesis 22: &ldquo;He who did not spare his own Son but gave him up for us all &mdash; how will he not also with him graciously give us all things?&rdquo;",
      "YHWH-Yireh becomes more than a place name. It becomes a declaration about the character of God. The God of Abraham is a providing God, a seeing God, a God who meets his people at the point of their deepest need with the provision they could not supply for themselves. The ram in the thicket on Moriah is the shadow; the Lamb of God crucified outside Jerusalem is the substance. And the provision is sufficient &mdash; not merely for Isaac, not merely for Abraham&rsquo;s descendants, but for &ldquo;all nations,&rdquo; as the renewed covenant promise will immediately make clear.",
    ],
  },
  {
    id: "The Angel of the Lord Calls Out",
    heading: "The Angel of the Lord Calls Out",
    reference: "Genesis 22:15&ndash;18",
    paragraphs: [
      "After the ram is offered, the angel of the Lord calls to Abraham a second time from heaven. This second address carries the weight of divine oath: &ldquo;By myself I have sworn, declares the Lord, because you have done this and have not withheld your son, your only son, I will surely bless you, and I will surely multiply your offspring as the stars of heaven and as the sand that is on the seashore.&rdquo; God swears by himself &mdash; because there is no one greater by whom to swear (Hebrews 6:13) &mdash; and the covenant that was first given in Genesis 12 and sealed in Genesis 15 is now confirmed in its fullest form.",
      "The identity of the angel of the Lord who calls twice from heaven has been the subject of substantial theological discussion. In numerous Old Testament appearances, the angel of the Lord speaks as God in the first person, receives worship as God, and is identified as God by those who encounter him (Genesis 16:13, Exodus 3:2&ndash;6, Judges 6:11&ndash;24). Many in the Christian tradition, reading these texts through the lens of Trinitarian theology, have understood the angel of the Lord as a pre-incarnate manifestation of the Son of God. If so, then the one who stayed Abraham&rsquo;s hand over Isaac is the same one who would himself be offered on a cross two millennia later.",
      "The oath formula &ldquo;by myself I have sworn&rdquo; places the Abrahamic covenant in the highest possible category of divine commitment. In the ancient world, oaths were binding to the degree that the one swearing was trustworthy and powerful. God swears by himself because his own character and existence are the ultimate guarantee. The author of Hebrews draws on this to comfort Christians who are heirs of the same promise: &ldquo;When God desired to show more convincingly to the heirs of the promise the unchangeable character of his purpose, he guaranteed it with an oath&rdquo; (Hebrews 6:17).",
      "The blessing pronounced in the second angelic call is explicitly connected to Abraham&rsquo;s obedience: &ldquo;because you have done this and have not withheld your son, your only son.&rdquo; This is not a works-based earning of the covenant. Abraham&rsquo;s faith was reckoned as righteousness decades before this moment (Genesis 15:6). But the obedience of faith at Moriah is the culminating demonstration of that righteousness &mdash; faith acting in conformity with its object, trusting God enough to follow him all the way to the altar. The blessing flows not from merit earned but from faith expressed in the most radical obedience.",
      "The imagery of the blessing &mdash; offspring as numerous as stars and as sand on the seashore &mdash; combines the cosmic sweep of celestial multiplication with the earthly abundance of every beach on every shore. It is language calculated to communicate overflow, excess, more than can be counted or measured. This was the vision that sustained Abraham through the long wait for Isaac, and that sustained the Jewish people through generations of exile and suffering, and that the New Testament identifies as fulfilled in Christ: &ldquo;If you are Christ&rsquo;s, then you are Abraham&rsquo;s offspring, heirs according to promise&rdquo; (Galatians 3:29).",
      "The second call from heaven is also a call across all time to every person who faces a moment of radical obedience to God. The specific content of Abraham&rsquo;s test is unique and unrepeatable; God does not require us to sacrifice our children. But the principle &mdash; that genuine faith expresses itself in the willingness to release the most precious things back to God, and that God&rsquo;s blessing flows through obedient trust rather than self-protective withholding &mdash; is universal. The God who called from heaven when Abraham raised the knife is the same God who speaks today, asking whether we trust him with what we hold most dear.",
    ],
  },
  {
    id: "In Your Offspring All Nations Blessed",
    heading: "In Your Offspring All Nations Blessed",
    reference: "Genesis 22:17&ndash;19 and the Gospel",
    paragraphs: [
      "The climax of the covenant promise in Genesis 22:18 is a line that the New Testament stakes everything on: &ldquo;And in your offspring shall all the nations of the earth be blessed, because you have obeyed my voice.&rdquo; This is not the first time this promise has been given to Abraham (it appears in Genesis 12:3, 18:18, and 26:4), but here it reaches its fullest expression and its most solemn ratification by divine oath. The blessing of all nations through Abraham&rsquo;s offspring is the ultimate horizon of the Abrahamic covenant, and it is the interpretive key to the entire Bible.",
      "Paul&rsquo;s argument in Galatians 3 seizes on the word &ldquo;offspring&rdquo; (seed in Hebrew, sperma in Greek) and notes that it is singular, not plural: &ldquo;It does not say, &lsquo;And to offsprings,&rsquo; referring to many, but referring to one, &lsquo;And to your offspring,&rsquo; who is Christ&rdquo; (Galatians 3:16). The singular offspring through whom all nations would be blessed is not a collective but a person &mdash; Jesus Christ, the son of Abraham according to the opening of the New Testament (Matthew 1:1), the one in whom &ldquo;all the promises of God find their Yes&rdquo; (2 Corinthians 1:20).",
      "The connection between Genesis 22 and the cross is drawn not only by explicit quotation but by structural and typological correspondence. Isaac is the beloved son, the only son, whom Abraham does not withhold. Jesus is the beloved Son, the only Son, whom the Father does not withhold: &ldquo;He who did not spare his own Son but gave him up for us all&rdquo; (Romans 8:32) &mdash; the phrase &ldquo;did not spare&rdquo; deliberately echoing Abraham&rsquo;s act. Isaac carries the wood up the mountain; Jesus carries his cross. A substitute is provided for Isaac; no substitute is provided for Jesus &mdash; because he is the substitute, the Lamb of God, the antitype who renders the type complete.",
      "The location matters. The land of Moriah where Abraham received his test is, according to 2 Chronicles 3:1, the same mountain on which Solomon built the Temple in Jerusalem. The mountain where the God-ordained substitute was provided is the mountain where the whole system of sacrifice and atonement was centered for centuries, and the mountain range that would culminate at Calvary &mdash; where the Lamb of God was slain outside the city gate. The geography of redemption is not accidental. God chose Moriah not merely as a convenient high place but as the site he intended from the beginning for the most important acts of his saving work.",
      "The promise that &ldquo;all nations&rdquo; would be blessed through Abraham&rsquo;s offspring is the Great Commission embedded in the Old Testament. The mission that Jesus commissions at the end of Matthew&rsquo;s Gospel &mdash; &ldquo;make disciples of all nations&rdquo; (Matthew 28:19) &mdash; is the fulfillment of the Abrahamic promise. The gospel is not a late development or a correction of the original plan. It is the thing the whole story was always moving toward: that through the one Offspring, the ram who was provided by God himself, sin would be atoned for, death would be defeated, and blessing would flow from Abraham&rsquo;s seed to every tribe and tongue and people and nation.",
      "Abraham and Isaac go back down the mountain together. The brief notice &mdash; &ldquo;So Abraham returned to his young men, and they arose and went together to Beersheba&rdquo; &mdash; is rich with implication. Father and son descend together. The promise lives. The heir lives. The blessing is secured. In the Christian reading, this is a portrait of resurrection &mdash; not literally in Isaac&rsquo;s case, since the knife never fell, but in the logic of faith, since Abraham &ldquo;received him back&rdquo; as from the dead (Hebrews 11:19). And it points forward to the morning of the first day of the week, when the Father and the Son were united again in resurrection, and the blessing of all nations was set irrevocably in motion. God will provide the Lamb. God did provide the Lamb. And the whole world will one day receive what was promised on that mountain to the man who rose early and obeyed.",
    ],
  },
];

const videoItems = [
  { videoId: "zROmbj5S2aY", title: "BibleProject - Overview: Genesis 12-50" },
  { videoId: "yHLMPGSGPOk", title: "The Akedah - Abraham and Isaac on Mount Moriah" },
  { videoId: "0hm3XJM0iC0", title: "Genesis 22 Explained - The Binding of Isaac" },
  { videoId: "7RoqnGcEjcs", title: "Christ as the Lamb of God - Typology of the Akedah" },
];

export default function Genesis22GuidePage() {
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
            Genesis 22 &mdash; The Binding of Isaac
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            God testing Abraham with the command to offer Isaac, the three-day journey to Moriah, the faith that declared &ldquo;God will provide the lamb,&rdquo; the ram caught in the thicket as substitute, YHWH-Yireh, and the covenant promise that in Abraham&rsquo;s offspring all nations of the earth would be blessed.
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
              Deepen your study of Genesis 22 through visual teaching on the Akedah, Abraham&rsquo;s faith, the substitutionary ram, and the gospel foreshadowed in the binding of Isaac.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Lord Will Provide</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 22 is the mountain on which the entire Bible&rsquo;s theology of atonement comes into focus. God tested Abraham to reveal the quality of faith he had given him; Abraham trusted God enough to release his most precious gift; God provided the substitute that Abraham&rsquo;s faith had declared would come. The ram in the thicket whispered of a Lamb not yet given &mdash; the one whom God would not spare, so that through him all nations of the earth might be blessed.
          </p>
        </div>
      </main>
    </div>
  );
}
