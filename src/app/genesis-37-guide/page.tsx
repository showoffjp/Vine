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
  "Jacob Loved Joseph",
  "Joseph Dreamed Dreams",
  "Into the Pit",
  "Sold to Egypt",
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
    heading: "Overview of Genesis 37",
    reference: "Genesis 37:1&ndash;36",
    paragraphs: [
      "Genesis 37 opens the Joseph narrative, the longest sustained story in the book of Genesis, extending through chapters 37 to 50. It is a story that moves from the pit at Dothan to the palace of Pharaoh, from near-death to the second-highest throne in Egypt, from brotherly betrayal to family reconciliation. But it begins here &mdash; in a field in Canaan, with a seventeen-year-old boy wearing an extraordinary robe, his father&rsquo;s favorite, his brothers&rsquo; enemy, about to be stripped and thrown into a cistern and sold for twenty pieces of silver.",
      "The chapter introduces all the human elements that will drive the narrative for the next thirteen chapters: the favoritism of Jacob, the resentment of the brothers, the dreams of Joseph, the providential hand of God working through the worst of human choices. The pit at Dothan is not the end of Joseph&rsquo;s story; it is its beginning. What looks like the destruction of a life is in fact the first movement of a divine drama that will bring a family, a people, and an entire region through famine and into safety.",
      "Genesis 37 is a chapter about hatred born of favoritism, about the corrosive effect of partiality within a family, and about what God is doing in the midst of it all without yet making it clear. Jacob does not hide his preference for Joseph. Joseph does not hide what he dreams. The brothers do not hide what they feel. And God does not hide &mdash; though his purposes will not become clear until the end of the story, when Joseph says to his brothers, &ldquo;You meant evil against me, but God meant it for good&rdquo; (50:20). Genesis 37 is the darkness before that dawn.",
      "The structural center of the chapter is the pit. Joseph is cast into a waterless cistern by his brothers, who sit down to eat bread while they decide what to do with him. Reuben plans to rescue him; Judah proposes to sell him. The Ishmaelite traders arrive on their way to Egypt, and the decision is made. Twenty pieces of silver. Joseph is pulled from the pit and placed on a caravan headed south. The father&rsquo;s favorite son, wrapped in a robe dipped in blood, becomes the wailing grief of a father who refuses to be comforted.",
      "But the text ends with a quiet verse that points forward: &ldquo;Meanwhile the Midianites had sold him in Egypt to Potiphar, an officer of Pharaoh, the captain of the guard&rdquo; (37:36). Joseph has arrived in Egypt. He is alive. He is in the household of one of the most powerful men in the Egyptian court. The providence of God has been at work in the very act of betrayal that was meant to destroy him. The reader who knows what is coming can see it already; Joseph, alone in a foreign land, cannot yet.",
      "Genesis 37 also introduces a pattern that will recur through the Joseph story: the reversal of human expectation. The younger over the older has been a theme since Cain and Abel, Isaac and Ishmael, Jacob and Esau. Now it takes a new form: the eleventh son, hated and sold, will become the savior of the family that sold him. The pit is not the grave; it is, in the economy of God, the first step toward the throne. This is the strange arithmetic of divine providence: the selling price is twenty pieces of silver, and the destination is the second chariot of Pharaoh.",
    ],
  },
  {
    id: "Jacob Loved Joseph",
    heading: "Jacob Loved Joseph",
    reference: "Genesis 37:1&ndash;4",
    paragraphs: [
      "The chapter opens with the plain statement that sets everything in motion: &ldquo;Now Israel loved Joseph more than any other of his sons, because he was the son of his old age. And he made him a robe of many colors&rdquo; (37:3). The preferential love is not hidden or minimized by the narrator; it is stated as the first fact about the family dynamics. Jacob, who was himself the favored son of Rebekah over Esau, has not learned the lesson of what partiality costs a family. He plays the same game his mother played, but with eleven other sons watching.",
      "The &ldquo;robe of many colors&rdquo; &mdash; the Hebrew ketonet passim, which may also be translated as &ldquo;a robe with long sleeves&rdquo; or &ldquo;an ornamented robe&rdquo; &mdash; is the famous garment that has given this story one of its most recognizable images. The exact nature of the garment is disputed by lexicographers and translators, but its social meaning is clear: it is a gift that marks Joseph as the specially honored son, the one who will not work in the fields with his brothers but will stand apart, distinguished by his father&rsquo;s visible favor. It is a public declaration of Jacob&rsquo;s preference, worn on Joseph&rsquo;s body for all to see.",
      "The response of the brothers is immediate and unambiguous: &ldquo;But when his brothers saw that their father loved him more than all his brothers, they hated him and could not speak peacefully to him&rdquo; (37:4). The hatred is not a sudden explosion but a settled condition, and its symptom is the collapse of ordinary civil communication. They cannot speak shalom to him &mdash; they cannot offer him the basic greeting of peace that was the currency of ordinary human interaction in the ancient Near East. The robe has made normal family life impossible.",
      "Joseph&rsquo;s report to his father about the bad behavior of his brothers (37:2) does not help matters. Whether Joseph is naive about how his brothers will receive this, or whether he is exercising the integrity of a seventeen-year-old who does not yet understand the danger he is in, the effect is to add another layer of grievance to an already volatile situation. He is now not only the visible favorite but the one who brings bad reports to the father. The combination of the robe and the report makes him, in his brothers&rsquo; eyes, an enemy within the family.",
      "The dynamic Jacob creates by his open favoritism is a study in what the book of Proverbs calls the perverse sowing of discord. There is nothing wrong with loving a child; there is everything wrong with displaying that love in ways that humiliate and exclude the other children. Jacob&rsquo;s love for Joseph, expressed in the robe, does not merely bless Joseph &mdash; it wounds the eleven others. And the wound festers into the kind of hatred that will, in a few verses, contemplate murder. The favoritism that produces the robe produces the pit.",
      "Yet the text also implies that Jacob&rsquo;s love for Joseph, however poorly expressed, is not finally frustrated by human hatred. The beloved son will be stripped of his robe, thrown into a pit, sold to slave-traders, and carried off to Egypt &mdash; and he will end up as the second most powerful man in the known world, the one who saves the family from starvation. God does not endorse Jacob&rsquo;s favoritism, but he works within and through its consequences to bring about a purpose that no one involved has yet imagined. The robe will be taken; but the favor of God on Joseph&rsquo;s life cannot be stripped from him.",
    ],
  },
  {
    id: "Joseph Dreamed Dreams",
    heading: "Joseph Dreamed Dreams",
    reference: "Genesis 37:5&ndash;11",
    paragraphs: [
      "Into the already volatile situation of family jealousy and favoritism, Joseph now adds two dreams. The first: &ldquo;Behold, we were binding sheaves in the field, and behold, my sheaf arose and stood upright. And behold, your sheaves gathered around it and bowed down to my sheaf&rdquo; (37:7). It is an agricultural image drawn from the harvest work the brothers do while Joseph, in his robe, does not. The dream places Joseph at the center of the family&rsquo;s labor and makes his sheaf the object of his brothers&rsquo; deference.",
      "The brothers understand the dream&rsquo;s meaning without any interpretation being offered: &ldquo;Are you indeed to reign over us? Or are you indeed to rule over us?&rdquo; (37:8). The dream is transparent, and its transparency is precisely what enrages them. Joseph is not reporting an obscure vision that requires a sage to decode; he is telling his brothers that he dreamed they bowed down to him. Whether out of naivety or boldness or both, he reports the dream to the people most likely to take offense at it. &ldquo;So they hated him even more for his dreams and for his words.&rdquo;",
      "The second dream broadens the scope considerably: &ldquo;Behold, the sun, the moon, and eleven stars were bowing down to me&rdquo; (37:9). Now it is not merely the brothers but the whole family &mdash; father, mother, and all eleven brothers &mdash; who bow before Joseph. When Joseph tells this dream, even his father rebukes him: &ldquo;What is this dream that you have dreamed? Shall I and your mother and your brothers indeed come to bow ourselves to the ground before you?&rdquo; (37:10). Jacob&rsquo;s rebuke is pointed and public, but the text adds a phrase that qualifies it: &ldquo;his father kept the saying in mind.&rdquo;",
      "The phrase &ldquo;his father kept the saying in mind&rdquo; echoes a pattern found in the Gospels, where Mary &ldquo;treasured up all these things, pondering them in her heart&rdquo; (Luke 2:19) after the shepherds&rsquo; report about the infant Jesus. In both cases, a parent receives a word about a child&rsquo;s extraordinary future, outwardly questions or is troubled by it, and yet inwardly keeps it, preserves it, returns to it. Jacob rebukes Joseph but does not dismiss the dream. Something in him recognizes that these are not ordinary dreams.",
      "The two dreams function in the Joseph narrative as a narrative promise &mdash; a divine guarantee of the story&rsquo;s outcome given at its beginning. The reader who knows that Joseph will eventually become the second ruler of Egypt, before whom his family will indeed bow and beg for grain, can trace the fulfillment with precision. The sheaves bowing in the first dream; the sun, moon, and stars in the second; and eventually Jacob himself bowing before the son he thought was dead &mdash; the dreams are the shape of the ending, given at the beginning, so that when the story arrives at its resolution the reader can recognize it as something that was always going to happen.",
      "The dreams also establish that whatever will happen to Joseph is not merely the outworking of human scheming &mdash; by his brothers, by Potiphar&rsquo;s wife, by Pharaoh&rsquo;s cupbearer who forgets him. God has given the ending in the form of a dream, and the story will get there regardless of the human obstacles in the way. The brothers hate Joseph more for his dreams; but the dreams are precisely the promise that their hatred will not be the last word. The pit they will throw him into, the slave-traders who will carry him away, the prison he will languish in &mdash; none of these can prevent what has been shown in the night to a seventeen-year-old boy in Canaan.",
    ],
  },
  {
    id: "Into the Pit",
    heading: "Into the Pit",
    reference: "Genesis 37:12&ndash;24",
    paragraphs: [
      "The collision between Joseph and his brothers is set in motion by an errand. Jacob sends Joseph to check on his brothers, who are grazing the flocks near Shechem. &ldquo;Come, I will send you to them&rdquo; &mdash; and Joseph answers, &ldquo;Here I am&rdquo; (37:13). The obedience is immediate and unreserved. He does not know that his brothers have been plotting against him; he sets out from the valley of Hebron to find them, not knowing that this journey will take him, by way of a pit and a slave-caravan, all the way to Egypt.",
      "The brothers see him coming from a distance &mdash; &ldquo;and before he came near to them they conspired against him to kill him&rdquo; (37:18). The sight of his distinctive robe at a distance is enough to ignite the fury that has been building since verse 4. They call him &ldquo;this dreamer&rdquo; (37:19) with contempt, and they plan: kill him, throw him in a pit, tell the father a fierce animal devoured him, and see what becomes of his dreams. The irony is deep &mdash; they think they can kill the dream by killing the dreamer.",
      "Reuben intervenes. As the firstborn, Reuben may feel particular responsibility for Joseph&rsquo;s life; the text says he intended to rescue Joseph from their hands and return him to his father (37:22). He persuades the brothers not to shed blood but to throw Joseph into a pit &mdash; &ldquo;that he might rescue him out of their hand.&rdquo; The brothers agree, and when Joseph arrives they strip him of his robe, the hated symbol of his father&rsquo;s favor, and throw him into the cistern. &ldquo;The pit was empty; there was no water in it&rdquo; (37:24).",
      "The stripping of the robe is a loaded act. The robe is what identified Joseph as the favored son; stripped of it, he is just another young man. But the robe will reappear &mdash; dipped in the blood of a goat, brought to Jacob as evidence of a death that did not happen. The garment that was the symbol of Jacob&rsquo;s love becomes the instrument of the deception that will break Jacob&rsquo;s heart. Robes and garments carry enormous symbolic weight in the Joseph narrative: this robe, the garment Potiphar&rsquo;s wife will seize in Egypt, the garments Pharaoh will put on Joseph&rsquo;s body at his elevation. The stripping and re-robing of Joseph is the story told in cloth.",
      "The scene of the brothers sitting down to eat bread immediately after throwing Joseph into the pit is one of the most chilling moments in the Hebrew Bible. They have stripped their brother, thrown him into a hole, and now they eat. The text does not comment on this; it simply records it. But the juxtaposition of Joseph&rsquo;s distress and his brothers&rsquo; meal is a measure of how thoroughly hatred has suppressed normal human sympathy. They have closed their ears to his cries (42:21, where the brothers later remember this moment) and opened their mouths to food.",
      "Reuben&rsquo;s plan to return later and rescue Joseph is forestalled by the arrival of a caravan of Ishmaelites coming from Gilead, bearing spices to Egypt. It is Judah who speaks now: &ldquo;What profit is it if we kill our brother and conceal his blood? Come, let us sell him to the Ishmaelites, and let not our hand be against him, for he is our brother, our own flesh&rdquo; (37:26&ndash;27). Judah&rsquo;s argument is a mixture of pragmatism and a flicker of conscience: at least they will not have his blood on their hands. The brothers agree. Joseph is pulled from the pit and sold for twenty pieces of silver.",
    ],
  },
  {
    id: "Sold to Egypt",
    heading: "Sold to Egypt",
    reference: "Genesis 37:25&ndash;36",
    paragraphs: [
      "The sale of Joseph to the Ishmaelites is accomplished quickly and practically: &ldquo;Then Midianite traders passed by. And they drew Joseph up and lifted him out of the pit, and sold him to the Ishmaelites for twenty shekels of silver. They took Joseph to Egypt&rdquo; (37:28). Twenty shekels was the going rate for a young male slave in the ancient Near East; the price is precise and businesslike. One moment Joseph is in a pit in Canaan; the next he is walking with a slave-caravan toward the most powerful nation in the ancient world. The speed of the transition is part of the narrative&rsquo;s brutality.",
      "Reuben returns to the pit and finds it empty. His anguish is genuine: &ldquo;The boy is gone, and I, where shall I go?&rdquo; (37:30). He does not know that Joseph has been sold; he fears the worst. His plan to rescue Joseph has failed, not through bad intent but through bad timing. The firstborn son who could not prevent the sale must now face his father. It is worth noting that Reuben&rsquo;s grief &mdash; however delayed and incomplete &mdash; is the first flicker of something like conscience among the brothers. Judah&rsquo;s speech in verse 26 was partly pragmatic; Reuben&rsquo;s return to the pit is purely distress.",
      "The brothers&rsquo; solution to the problem of their father is the robe. They take Joseph&rsquo;s distinctive garment, slaughter a male goat, and dip the robe in the blood. They bring it to their father with a question designed to let Jacob draw his own conclusion: &ldquo;This we have found; please identify whether it is your son&rsquo;s robe or not&rdquo; (37:32). They do not say Joseph is dead; they let the blood-soaked robe say it for them. The deception is as cruel as it is effective. Jacob recognizes the robe immediately: &ldquo;It is my son&rsquo;s robe. A fierce animal has devoured him. Joseph is without doubt torn to pieces&rdquo; (37:33).",
      "Jacob&rsquo;s mourning is total and refuses all consolation. He tears his garments, puts on sackcloth, and mourns his son &ldquo;many days.&rdquo; All his sons and daughters rise up to comfort him, but he refuses to be comforted, saying: &ldquo;No, I shall go down to Sheol to my son, mourning&rdquo; (37:35). The man who deceived his own father Isaac with a garment and a goat now finds himself deceived by his sons with a garment and a goat. The irony is the text&rsquo;s judgment on Jacob&rsquo;s own past without a word being spoken against him directly.",
      "Meanwhile, the narrative cuts away to Egypt with deliberate abruptness: &ldquo;Meanwhile the Midianites had sold him in Egypt to Potiphar, an officer of Pharaoh, the captain of the guard&rdquo; (37:36). The &ldquo;meanwhile&rdquo; is crucial &mdash; while Jacob mourns a death that has not happened, Joseph is alive in Egypt, in the household of a powerful official. The reader stands between the two scenes, knowing what Jacob does not know: that the son he is mourning is not dead, that the story is not over, that the pit was not the end.",
      "The sale price of twenty pieces of silver has attracted typological attention from early interpreters, who note the parallel with the thirty pieces of silver for which Judas Iscariot would betray Jesus. The parallel is not exact in its details, but the pattern &mdash; the beloved son, betrayed by those closest to him, handed over for silver, apparently lost &mdash; is structurally resonant with the passion narrative. Joseph&rsquo;s story is not an allegory of Christ, but it participates in the same pattern of divine purpose working through human betrayal to achieve a rescue that the perpetrators could not have imagined. The one sold becomes the savior.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Genesis 37 Today",
    reference: "Genesis 37 &mdash; For the Life of the Church",
    paragraphs: [
      "Genesis 37 confronts the reader with the ugly realities of family life distorted by favoritism, jealousy, and hatred. Jacob&rsquo;s partiality for Joseph is presented without apology, and its consequences are presented without flinching. A robe becomes a cause of hatred; dreams become fuel for murderous conspiracy; a father&rsquo;s grief becomes the punishment he unknowingly brought on himself through the favoritism he cannot stop showing. The chapter does not moralize; it simply shows what happens when love within a family is distributed in ways that humiliate and exclude, and when the excluded respond not with forgiveness but with violence.",
      "The pastoral application for communities and families begins with the recognition that favoritism is not a harmless preference. Jacob&rsquo;s love for Joseph is deep and real &mdash; he is the son of his old age, the son of Rachel whom Jacob loved most deeply. But the expression of that love in the robe, in the privileges, in the visible distinction, is not merely a personal matter between a father and a son. It is experienced by the other children as a public statement of their lesser worth. The wound of parental favoritism is one of the deepest and most persistent wounds in human experience, and Genesis 37 names it with honesty.",
      "The hatred of the brothers is also presented with psychological precision. It begins with the robe, deepens with the report of Joseph&rsquo;s words to the father, and is intensified by the dreams. Each new element does not create the hatred but adds to it, so that by the time Joseph arrives at Dothan the brothers have had months or years of accumulating grievance. The murder plot that springs up &ldquo;when they saw him coming from a distance&rdquo; is not a sudden impulse but the eruption of a long-suppressed hatred brought to the surface by the sight of his robe. This is how hatred works in the human heart: it gathers, stores, and finally acts.",
      "The providence of God in Genesis 37 is entirely hidden &mdash; it is not mentioned, not invoked, not explained. The word &ldquo;God&rdquo; does not appear in the chapter at all. Yet the structure of what happens is saturated with divine purpose. The dreams given to Joseph in the opening verses are the promise of what God intends. The chain of contingencies that leads to the sale &mdash; Reuben&rsquo;s intervention, the Ishmaelite caravan arriving at exactly the right moment, Judah&rsquo;s speech, the twenty pieces of silver &mdash; is the mechanism by which God brings about what the brothers intend as destruction and turns it toward deliverance. Providence is the word for what God is doing in Joseph&rsquo;s life when the text does not say God is doing anything.",
      "Joseph&rsquo;s response in the pit is not recorded in Genesis 37 &mdash; we learn from Genesis 42:21 that he pleaded with his brothers and they did not listen. But the Joseph we meet in the rest of the narrative is a man who has not been destroyed by the pit. He will prosper in Potiphar&rsquo;s house, remain faithful when tempted, interpret dreams in prison, and rise to Pharaoh&rsquo;s right hand. The character formed in the pit does not become bitter; it becomes resilient. The suffering of the pit is not wasted; it is the school in which Joseph learns the kind of patience and faithfulness that will make him capable of governing an empire.",
      "The theological center of the Joseph story &mdash; &ldquo;you meant evil against me, but God meant it for good&rdquo; (50:20) &mdash; is not available to Joseph in Genesis 37. He cannot see it yet. He is seventeen years old, stripped of his robe, in a waterless pit, hearing his brothers eat. The faith that can later say &ldquo;God meant it for good&rdquo; is not a faith that was easy or costless or instantly formed. It is a faith forged in the pit, tested in Potiphar&rsquo;s house, tried in the prison, and confirmed only when the whole story has reached its end. The church lives between the pit and the declaration &mdash; in the middle of stories whose endings we cannot yet see &mdash; and Genesis 37 is the chapter that names where most of us actually are.",
    ],
  },
];

const videoItems = [
  { videoId: "XqBTMsILkJ8", title: "BibleProject - Overview of Genesis Part 2" },
  { videoId: "pXGbMSLMnwk", title: "The Story of Joseph - Genesis 37 to 50 Overview" },
  { videoId: "gHXHK4KSmI4", title: "Genesis 37 - Joseph and His Brothers Explained" },
  { videoId: "vYNKKbTBVh0", title: "Joseph's Dreams and Providence in Genesis 37" },
];

export default function Genesis37GuidePage() {
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
            Genesis 37 &mdash; Joseph and the Pit
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jacob loves Joseph more than all his sons and gives him the coat of many colors. His brothers hate him. Joseph dreams two dreams of elevation. His brothers throw him into a pit at Dothan, sell him to Ishmaelites for twenty pieces of silver, and bring his blood-soaked robe to their father &mdash; who mourns bitterly, refusing all comfort.
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
              Deepen your study of Genesis 37 through these video teachings on Jacob&rsquo;s favoritism, Joseph&rsquo;s dreams, the pit at Dothan, the sale to Egypt, and the providence of God at work through human betrayal.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>You Meant Evil Against Me, But God Meant It for Good</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 37 is the darkness before the dawn of the Joseph story. The pit at Dothan is real; the twenty pieces of silver are real; Jacob&rsquo;s grief is real. And yet behind it all, the God who gave Joseph his dreams is quietly at work, turning the worst of human choices toward a deliverance none of the participants can yet see. The one sold into slavery will become the savior of the family that sold him.
          </p>
        </div>
      </main>
    </div>
  );
}
