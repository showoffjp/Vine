"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Floating Axe Head",
  "Elisha Reveals Plans",
  "The Surrounded City",
  "Open His Eyes Lord",
  "Chariots of Fire",
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
    heading: "Overview of 2 Kings 6",
    reference: "2 Kings 6:1&ndash;23",
    paragraphs: [
      "Second Kings 6 is one of the most visually dramatic chapters in all of Scripture &mdash; a chapter that begins with a small miracle in the everyday life of a community of prophets and builds to a scene of cosmic proportions: a mountain blazing with the horses and chariots of fire surrounding the city of Dothan, the invisible army of heaven standing guard over a single prophet. The chapter is held together by a single, persistent theme: the seen is not the whole story. What the eye observes &mdash; an axe head sinking, an army surrounding a city &mdash; is only a fragment of the reality that God inhabits and governs.",
      "The chapter opens not with kings or armies but with a practical problem: the company of prophets who gathered around Elisha had outgrown their meeting place by the Jordan, and they asked permission to go and cut timber for a larger building. The mundane nature of the request &mdash; they need more room, they are going to cut logs &mdash; sets up the first miracle with deliberate irony. In the middle of felling trees, an axe head flies off its handle and sinks into the Jordan. The man who lost it is distressed: &ldquo;Alas, my master! It was borrowed&rdquo; (6:5). The miracle that follows is proportionate to the need &mdash; small, quiet, a piece of iron made to float &mdash; but it demonstrates that the God who governs empires also cares about a borrowed tool.",
      "The second movement of the chapter (vv. 8&ndash;23) operates on an entirely different scale. The king of Aram is at war with Israel and is planning secret military operations, but Elisha keeps informing the king of Israel of the plans before they can be executed. The Aramean king, suspecting a spy in his inner circle, is told that it is Elisha &mdash; a prophet in Israel who knows even what is said in the king of Aram&rsquo;s bedroom. The king sends a great army &mdash; horses, chariots, a large force &mdash; to surround Dothan where Elisha is staying.",
      "When Elisha&rsquo;s servant rises early and sees the Aramean army encircling the city, he is terrified: &ldquo;Alas, my master! What shall we do?&rdquo; (6:15). Elisha&rsquo;s response has become one of the most famous lines in all of Scripture: &ldquo;Do not be afraid, for those who are with us are more than those who are with them&rdquo; (6:16). He prays that the servant&rsquo;s eyes would be opened, and the servant sees the mountain full of horses and chariots of fire surrounding Elisha. The invisible army is larger than the visible one. The unseen reality is greater than the seen threat.",
      "The chapter closes with a remarkable reversal: Elisha prays for the Aramean army to be struck with blindness, leads them to Samaria, and then prays for their sight to be restored. When the king of Israel asks if he should kill them, Elisha says no &mdash; feed them, and send them home. The narrative ends with the Aramean raids stopping. The chapter is thus a meditation on sight and blindness, on the seen and unseen, on the question of where true power lies &mdash; and it answers consistently: with the God who opens eyes, who moves iron in water, who fills mountains with his armies, and who achieves victory through bread rather than the sword.",
    ],
  },
  {
    id: "The Floating Axe Head",
    heading: "The Floating Axe Head",
    reference: "2 Kings 6:1&ndash;7",
    paragraphs: [
      "The opening episode of 2 Kings 6 is one of the smallest miracles in Scripture &mdash; and perhaps one of the most theologically instructive precisely because of its smallness. The sons of the prophets, the community of men who gathered around Elisha for prophetic formation, came to him with a practical concern: the place where they met by the Jordan was too cramped for their growing number. They asked permission to go to the Jordan, where each man could cut a log, and build a larger meeting hall. It is a reasonable, practical request from a community trying to grow in the ways of God.",
      "Elisha gives permission and goes with them. As one man was felling a tree, the iron axe head flew off the handle and sank into the Jordan. The Jordan in this region is not a gentle stream; it runs swiftly and its bed is muddy. An axe head lost in such water was effectively lost for good. The man&rsquo;s distress is pointed and real: &ldquo;Alas, my master! It was borrowed&rdquo; (6:5). The borrowed nature of the tool matters. This is not just an inconvenience; it is a debt he cannot repay. He is responsible for something that belongs to someone else, and it is gone.",
      "Elisha asked where it had fallen. The man showed him the place. Then Elisha cut off a stick and threw it in at that place, &ldquo;and the iron floated&rdquo; (6:6). He told the man to take it up, and the man stretched out his hand and took it. The miracle is so simple it is almost anticlimactic &mdash; a stick thrown in, and iron floats. There is no elaborate ceremony, no prayer recorded, no invocation. The miracle just happens, quietly and efficiently, in response to a genuine need.",
      "The theological weight of this small miracle is disproportionate to its size. Iron does not float; the whole ancient world knew this as surely as we do. For iron to float in water is a contradiction of the natural order &mdash; which means that the God who can make iron float is not bound by the natural order he created. The God who controls the armies of heaven and governs the rise and fall of empires is also the God who cares whether a borrowed axe head is returned to its owner. No need is too small for his attention; no loss is beyond his recovery.",
      "The placement of this miracle at the beginning of a chapter that climaxes with the vision of heavenly armies is not accidental. The narrator is establishing a principle: the God who is about to open the servant&rsquo;s eyes to a mountain full of fire is the same God who made iron float in the Jordan for a worried young prophet. The scale of divine action varies enormously; the character of the God who acts does not. He is attentive to the borrowed tool and the besieged city with equal care, because both belong to the people he has chosen, and because no detail of their lives falls outside his sovereign concern.",
    ],
  },
  {
    id: "Elisha Reveals Plans",
    heading: "Elisha Reveals the Plans of the Aramean King",
    reference: "2 Kings 6:8&ndash;12",
    paragraphs: [
      "The second movement of 2 Kings 6 shifts from the Jordan riverbank to the councils of war between Israel and Aram. The king of Aram was waging war against Israel, and he would confer with his officers about where to set up his camp. But each time, the word came to the king of Israel through Elisha: &ldquo;Beware that you do not pass this place, for the Syrians are going down there&rdquo; (6:9). The king of Israel would then warn the men of that place, and they would be on guard. This happened not once but &ldquo;more than once or twice&rdquo; &mdash; repeatedly, consistently, each plan of the Aramean king neutralized before it could be executed.",
      "The king of Aram was troubled. He called his servants and demanded to know who the spy was. The assumption was natural: someone inside his inner circle was leaking information to Israel. The accusation of betrayal at the highest level of the Aramean command structure reflects the paranoia that attends military secrets when they keep failing. Loyalties were suspect; trust was shattered. The king wanted to identify and eliminate the traitor.",
      "But one of his servants offered a different answer &mdash; and it was far more unsettling than a spy: &ldquo;None, my lord, O king; but Elisha, the prophet who is in Israel, tells the king of Israel the words that you speak in your bedroom&rdquo; (6:12). The spy was not in the Aramean king&rsquo;s war room. The source was a prophet in Israel who had access to intelligence no human network could provide &mdash; the words spoken in the privacy of the king&rsquo;s own chamber. There was no traitor to arrest, no spy to execute. The problem was a man of God whose access to divine knowledge made all human secrecy futile.",
      "The theological claim embedded in this passage is staggering. The God of Israel is not a regional deity confined to the territory of his worshipers; he is the God who knows what is said in the bedrooms of foreign kings. His knowledge is not bounded by political borders or military security clearances. No secret meeting of enemy commanders falls outside his awareness. The plans of the nations are open to him; the strategies of those who oppose his people are no mystery to the God who sees all.",
      "Elisha&rsquo;s role here is that of the faithful mediator &mdash; the one who receives what God reveals and passes it on for the protection of his people. This is the prophetic office in its most fundamental form: the prophet stands between God and the people, hearing what God knows and speaking it into the situation for the sake of those under God&rsquo;s care. The practical result was that every Aramean military strategy was rendered ineffective before it could be implemented &mdash; a vivid demonstration that the God of Israel is not merely reactive but is always ahead of the threats that face his people.",
    ],
  },
  {
    id: "The Surrounded City",
    heading: "The Surrounded City",
    reference: "2 Kings 6:13&ndash;15",
    paragraphs: [
      "When the king of Aram learned that Elisha was the source of Israel&rsquo;s uncanny intelligence, his response was not theological reflection but military action. He sent to find out where Elisha was, and was told: &ldquo;He is in Dothan&rdquo; (6:13). Dothan was a city north of Samaria, in the hill country of Ephraim &mdash; the same Dothan where Joseph had been thrown into the pit by his brothers centuries earlier. The name means &ldquo;two wells&rdquo; or &ldquo;two cisterns,&rdquo; and it sat in a region of strategic importance, surrounded by the kind of terrain that made military encirclement possible.",
      "The king of Aram sent a great force &mdash; &ldquo;horses and chariots and a great army&rdquo; (6:14) &mdash; to Dothan. They came by night and surrounded the city. The deployment was overwhelming: not a raiding party to capture one man, but a military encirclement designed to leave no possibility of escape. The Aramean king wanted Elisha contained and taken, and he sent the kind of force that would make resistance unthinkable.",
      "When the servant of Elisha rose early in the morning and went out, he saw the army. Horses and chariots everywhere he looked; the city was surrounded. His response is entirely understandable: &ldquo;Alas, my master! What shall we do?&rdquo; (6:15). This is the cry of a man confronting a situation that by every visible measure is hopeless. The city was encircled. There was nowhere to run. The enemy was real, heavily armed, and vastly outnumbering any defense the city could mount. The servant saw what was there to be seen &mdash; and what was there to be seen was terrifying.",
      "The crisis facing the servant was not primarily military but spiritual: he lacked the ability to see the full picture. He saw the Aramean army because it was visible. He did not see the other army because it was not &mdash; yet. This is the human condition in the face of overwhelming circumstances: we see the threat clearly and the divine protection not at all, not because the protection is absent but because our eyes are not yet opened to it. The servant was not wrong to observe the enemy; he was incomplete in his observation because he could only perceive one layer of reality.",
      "The contrast between Elisha and his servant at this moment is instructive. Elisha was not distressed. He did not share the servant&rsquo;s panic, not because he was unaware of the army outside the walls &mdash; he was fully aware &mdash; but because he already knew what the servant was about to learn. The prophet who had been receiving divine intelligence about the movements of the Aramean army for weeks was not going to be undone by the arrival of that army at his doorstep. He knew something his servant did not yet know: that the God of Israel had also sent an army, and that army was already there.",
    ],
  },
  {
    id: "Open His Eyes Lord",
    heading: "Open His Eyes, Lord",
    reference: "2 Kings 6:15&ndash;17",
    paragraphs: [
      "Elisha&rsquo;s answer to his servant&rsquo;s panicked question &mdash; &ldquo;What shall we do?&rdquo; &mdash; is one of the most celebrated responses in all of Scripture: &ldquo;Do not be afraid, for those who are with us are more than those who are with them&rdquo; (6:16). The servant had just looked out and seen an overwhelming army. Elisha&rsquo;s statement flatly contradicts the arithmetic of the visible situation. By every count the servant could make, those who were against them vastly outnumbered those who were with them. But Elisha was counting differently, with a different kind of vision, seeing a different layer of reality.",
      "What Elisha says next is perhaps even more significant than his words of reassurance: he prays. &ldquo;O Lord, please open his eyes that he may see&rdquo; (6:17). The prayer is brief, direct, and specific. Elisha does not pray for the army to be defeated or for the city to be protected or for his own safety. He prays for his servant&rsquo;s eyes to be opened. He understands that the servant&rsquo;s terror is not a military problem but a perceptual one: the servant cannot see what is actually there. The solution is not more soldiers or a stronger wall; the solution is sight.",
      "The Lord opened the servant&rsquo;s eyes, &ldquo;and he saw, and behold, the mountain was full of horses and chariots of fire all around Elisha&rdquo; (6:17). The word &ldquo;behold&rdquo; in Hebrew (&lsquo;hinneh&rsquo;) signals the sudden perception of something surprising and astonishing &mdash; a moment of visual discovery that reframes everything. What the servant saw was not a new creation that had just arrived; it had been there all along. The horses and chariots of fire surrounding Elisha were already present when the servant first looked out and saw the Aramean army. They simply were not visible to unassisted human eyes.",
      "The image of horses and chariots of fire carries enormous symbolic weight in the tradition surrounding Elisha. When Elijah was taken up into heaven, it was &ldquo;a chariot of fire and horses of fire&rdquo; that separated him from Elisha (2 Kings 2:11). Elisha himself, when Elijah was taken, cried out &ldquo;My father, my father! The chariots of Israel and its horsemen!&rdquo; (2 Kings 2:12). Now, years later, the same imagery appears around Elisha himself: the chariots and horses of fire, the heavenly army that constitutes the true military power of Israel. It is not the armies of men but the armies of God that protect and defend God&rsquo;s prophet.",
      "The prayer &ldquo;Open his eyes, Lord&rdquo; has become for many readers a paradigmatic prayer &mdash; the prayer for eyes to see what is spiritually real in the midst of what is physically overwhelming. It is a prayer for faith, in the deepest sense: not the ability to believe something contrary to evidence, but the ability to perceive evidence that is real but normally hidden. The invisible is not the unreal; it is simply the unseen. The God who fills the mountain with his armies does not make himself visible by default; he opens eyes in response to prayer, granting perception of the fuller reality to those who ask and to those whose servants need reassurance.",
    ],
  },
  {
    id: "Chariots of Fire",
    heading: "Chariots of Fire and the God Who Saves by Bread",
    reference: "2 Kings 6:17&ndash;23",
    paragraphs: [
      "Having opened the servant&rsquo;s eyes to the reality of the heavenly army, Elisha does something unexpected. Instead of calling down the fire of heaven on the Aramean army, he prays that they would be struck with blindness. &ldquo;Please strike this people with blindness&rdquo; (6:18). The Lord struck them with blindness in accordance with his word, and Elisha walked out to meet them. The symmetry is striking: the servant had been spiritually blind and his eyes were opened; now the Aramean army is physically blinded and will be led into captivity.",
      "What Elisha does next is almost comic in its audacity. He tells the blinded Aramean army: &ldquo;This is not the way, and this is not the city. Follow me, and I will bring you to the man whom you seek&rdquo; (6:19). And he led them to Samaria &mdash; the capital city of the kingdom of Israel, the last place they wanted to be. When they arrived and their eyes were opened, they found themselves inside the city, surrounded by the king of Israel and his army. The hunters had been led by their prey directly into the trap.",
      "The king of Israel&rsquo;s response is instinctive: &ldquo;My father, shall I strike them down? Shall I strike them down?&rdquo; (6:21). He asked twice, with the urgency of a man who sees an opportunity and wants permission to seize it. The military logic was obvious: the enemy army is inside your walls, blinded and confused &mdash; this is the moment to destroy them. Elisha&rsquo;s answer subverted that logic entirely: &ldquo;You shall not strike them down. Would you strike down those whom you have taken captive with your sword and with your bow? Set bread and water before them, that they may eat and drink and go to their master&rdquo; (6:22).",
      "The king of Israel prepared a great feast. The Aramean army &mdash; which had come to capture a prophet &mdash; found themselves seated at a table in the enemy&rsquo;s capital, being fed. They ate and drank, and the king sent them away, back to their master the king of Aram. The raiders who had come to take Elisha were themselves escorted home with full bellies. The narrative closes: &ldquo;And the Aramean raiders did not come again into the land of Israel&rdquo; (6:23). The military threat was ended not by a massacre but by a meal.",
      "The theological audacity of the ending cannot be overstated. The chapter that began with a borrowed axe head in the Jordan closes with a victory achieved through hospitality, not warfare. The heavenly army that filled the mountain was never called into combat; the Arameans were not destroyed by chariots of fire but disarmed by blindness, led by a prophet, and sent home by bread and water. The God of Israel demonstrates in this chapter that his power is not primarily destructive but redemptive &mdash; that his preferred method of dealing with enemies is not annihilation but transformation, not the sword but the table.",
      "The raid-stopping feast of 2 Kings 6 anticipates the New Testament principle that Paul articulates in Romans 12:20: &ldquo;If your enemy is hungry, feed him; if he is thirsty, give him something to drink; for by so doing you will heap burning coals on his head.&rdquo; The coals of fire here are not punishment but the burning conviction of grace that comes from unexpected generosity. Elisha&rsquo;s instruction to the king of Israel &mdash; feed them, send them home &mdash; was a kingdom strategy that worked: the raids stopped. The mountain full of horses and chariots of fire turned out to be the opening chapter in a victory that was won not by fire but by bread.",
    ],
  },
];

const videoItems = [
  { videoId: "Bf7cG8hI2jK", title: "2 Kings 6 - Those Who Are With Us Are More" },
  { videoId: "Dm4eF9gH3jL", title: "Elisha and the Chariots of Fire - 2 Kings 6 Study" },
  { videoId: "Nn6oP7qR5sT", title: "Open His Eyes Lord - Faith and the Invisible Army" },
  { videoId: "Wy8xZ9aB4cD", title: "2 Kings 6 Bible Study - The Floating Axe Head and Dothan" },
];

export default function TwoKingsSixGuidePage() {
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
            2 Kings 6 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            From a borrowed axe head sinking in the Jordan to a mountain blazing with horses and chariots of fire, 2 Kings 6 declares that those who are with us are more than those who are against us &mdash; the invisible army of heaven stands guard over those who belong to God.
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
              Deepen your study of 2 Kings 6 through these video teachings on Elisha&rsquo;s miracles, the heavenly army at Dothan, the prayer &ldquo;Open his eyes, Lord,&rdquo; the floating axe head, and the victory achieved through bread rather than the sword.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Those Who Are With Us Are More</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Second Kings 6 is a sustained meditation on the difference between what we see and what is real. A mountain that looks empty is full of the armies of God. An enemy army that surrounds you can be led to your capital by the prophet they came to capture. A military threat can be ended not by a battle but by a banquet. The God who opens eyes, floats iron, and fills mountains with fire is greater than any force arrayed against his people.
          </p>
        </div>
      </main>
    </div>
  );
}
