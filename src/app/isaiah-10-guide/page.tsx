"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

const videoItems = [
  { videoId: "d0A6Uchb1F8", title: "BibleProject - Book of Isaiah Overview (Part 1)" },
  { videoId: "_TzdEPuqgPg", title: "BibleProject - Book of Isaiah Overview (Part 2)" },
  { videoId: "ALsluAKBZ-c", title: "Isaiah 10 - The Rod of My Anger Explained" },
  { videoId: "kaaIc6sN1f8", title: "The Remnant and the Stump of Jesse - Isaiah 10 to 11" },
];

const reflectionQuestions = [
  "Where am I tempted to look at the apparent success of arrogant or unjust people and conclude that God is not in control?",
  "Like Assyria boasting of its own hand and wisdom, where do I take credit for what is really a gift from God?",
  "What does it mean that I might be an instrument in God's hand without fully understanding his purposes?",
  "How does the doctrine of the remnant guard me from both despair and presumption?",
  "Am I leaning on the LORD in truth, or am I leaning on some lesser support that will one day be cut down?",
  "How does the promise to Zion - be not afraid - speak to the specific fears I am carrying right now?",
];

export default function Isaiah10GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-block", background: `${GOLD}22`, color: GOLD, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Isaiah Study
          </div>
          <h1 style={{ fontSize: "2.6rem", lineHeight: 1.12, margin: "0 0 14px", fontWeight: 800, letterSpacing: "-0.02em" }}>
            Isaiah 10
          </h1>
          <p style={{ fontSize: "1.35rem", color: TEXT, margin: "0 0 10px", fontWeight: 600 }}>
            The Rod of My Anger and the Remnant
          </p>
          <p style={{ fontSize: "1.05rem", color: MUTED, margin: 0, fontStyle: "italic", lineHeight: 1.5 }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;Woe to Assyria, the rod of my anger; the staff in their hands is my fury! &hellip; In that day the remnant of Israel &hellip; will lean on the Lord, the Holy One of Israel, in truth.&rdquo; &mdash; Isaiah 10:5, 20" }} />
        </header>

        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, display: "flex", flexWrap: "wrap", gap: 8, padding: "12px 0", background: BG, borderBottom: `1px solid ${BORDER}`, marginBottom: "2rem" }}>
          {TABS.map((tab) => {
            const active = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{
                  cursor: "pointer",
                  border: `1px solid ${active ? GOLD : BORDER}`,
                  background: active ? `${GOLD}22` : CARD,
                  color: active ? GOLD : MUTED,
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  transition: "all 0.15s ease",
                }}
              >
                {tab}
              </button>
            );
          })}
        </nav>

        {activeTab === "Overview" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 1rem", color: TEXT }}>The Setting: Judgment That Cuts Both Ways</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 10 stands at a hinge in the prophet&rsquo;s message, where the threat of Assyria looms largest and the hope of a coming Branch first breaks through the gloom. The chapter opens by pronouncing woe upon the corrupt rulers of Judah who write oppressive laws, and then it turns to pronounce a far greater woe upon Assyria, the very empire God is using to discipline his people. Here we meet one of the deepest mysteries in all of Scripture: how the living God can wield a wicked nation as an instrument of his justice and yet hold that nation fully accountable for its wickedness. The rod that strikes will itself be broken, for the axe must not boast against the hand that swings it." }} />
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "The chapter unfolds in a series of movements. First comes the woe upon unjust legislators who rob the poor and make widows their prey (verses 1 through 4). Then God names Assyria as the rod of his anger, sent against a godless nation, even though Assyria itself intends only conquest and plunder (verses 5 through 7). The bulk of the chapter records Assyria&rsquo;s towering boast, its catalog of fallen cities, and the LORD&rsquo;s devastating reply that no tool may exalt itself over its wielder (verses 8 through 19)." }} />
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "From the shadow of judgment a bright thread emerges: the doctrine of the remnant. A remnant will return and lean on the Holy One of Israel in truth (verses 20 through 23). Then the prophet turns to comfort Zion directly, urging the people not to fear the Assyrian, for the LORD will lift a whip against the oppressor just as he once struck Midian and drowned Egypt at the sea (verses 24 through 27). The chapter ends with a terrifying picture of the enemy&rsquo;s advance and then the LORD lopping the proud boughs, felling the high cedars of Lebanon, so that the stage is set for the tender stump of Jesse in chapter 11." }} />
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.8rem 0 0.8rem", color: GOLD }}>Why This Chapter Matters</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 10 refuses to let us choose between two truths that the modern mind wants to separate. It insists that God is utterly sovereign over the rise and fall of empires, directing even the cruelest tyrant to serve his purposes, and at the same time it insists that human beings remain fully responsible for the evil they choose. Assyria is both God&rsquo;s rod and God&rsquo;s defendant. The chapter therefore teaches us how to read history with faith: the headlines of conquest and collapse are not random, nor are they a sign that God has lost control, but they unfold under the hand of the Holy One who will one day judge every proud heart." }} />
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "For the believer living under the weight of powerful and godless forces, Isaiah 10 is a chapter of immense comfort. It tells us that the enemy&rsquo;s strength is borrowed, that its boasting is a kind of madness, and that its appointed time is short. The same God who measured out the discipline also measures out its end, and beyond the falling forest of human pride he plants a living shoot of hope." }} />
          </section>
        )}

        {activeTab === "Key Themes" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 1.2rem", color: TEXT }}>The Great Themes of Isaiah 10</h2>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 0.7rem", color: ROSE }}>1. Judgment on Unjust Rulers</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "The chapter opens not with a foreign army but with a domestic injustice. Woe is pronounced on those who decree iniquitous decrees and write oppressive statutes, turning aside the needy from justice and robbing the poor of their right so that widows become their spoil and the fatherless their prey. God hears the cry of the vulnerable, and he asks the oppressors a piercing question: what will you do on the day of punishment, and to whom will you flee for help? The God of Israel never separates true worship from the protection of the weak, and the rulers who exploit their own people stand condemned before the same throne that will later condemn Assyria." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: GOLD }}>2. God&rsquo;s Sovereign Use of Pagan Empires</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Assyria is called the rod of God&rsquo;s anger, the staff that carries his fury. God sends this empire against a godless nation to seize spoil and trample the wicked like the mire of the streets. Yet the LORD is careful to say that Assyria does not intend this; it means only to destroy and to cut off nations without number. Here Scripture sets before us what theologians have called divine compatibilism: God ordains and directs the actions of a free agent toward a holy end, while that agent acts entirely from its own wicked motives and bears the full guilt of its choices. The rod is real, but the hand that wields it is the LORD&rsquo;s." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: PURPLE }}>3. The Limits and Judgment of Human Pride</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Assyria&rsquo;s boast is the centerpiece of the chapter. The king parades his conquered cities, asks whether his commanders are not all kings, and credits his victories to the strength of his own hand and the cunning of his own wisdom. Against this towering arrogance the LORD asks a withering question: shall the axe boast over the one who hews with it, or the saw magnify itself against the one who wields it? A staff cannot lift the hand that lifts it; a rod cannot raise what is not wood. The empire that imagined itself the author of history is revealed as nothing more than a tool, and the proud heart of its king will be visited with leanness and burning." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: GREEN }}>4. The Remnant Theology of Shear-jashub</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Long before this chapter, Isaiah had been told to take his son Shear-jashub to meet King Ahaz, and the boy&rsquo;s name means a remnant shall return (Isaiah 7:3). Now that name blossoms into a full promise: though the people of Israel be as the sand of the sea, only a remnant of them will return to the mighty God. This remnant will no longer lean on the one who struck them but will lean on the LORD, the Holy One of Israel, in truth. The doctrine of the remnant guards faith from two errors at once. It rebukes the presumption that assumes everyone is safe, and it answers the despair that fears all is lost, for God always preserves a people for himself." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: TEAL }}>5. Comfort for Zion</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "After the storm of judgment comes a word of tenderness: O my people who dwell in Zion, be not afraid of the Assyrians when they strike you with the rod. The LORD reminds his people that the very nation now terrorizing them is on a short tether, for in a very little while his fury against his people will come to an end and his anger will be directed to the destruction of the oppressor. He will wield a whip against Assyria as he struck Midian at the rock of Oreb, and he will lift his staff over the sea as he did against Egypt. The yoke will be broken from the neck of the redeemed, broken because of the fatness, the anointing of the LORD&rsquo;s presence." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: GOLD }}>6. The Felled Forest and the Coming Branch</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "The chapter closes with the enemy marching town by town toward Jerusalem, shaking a fist at the mount of the daughter of Zion. Then suddenly the LORD himself acts: the Lord of hosts will lop the boughs with terrifying power, the lofty will be hewn down, and the thickets of the forest will be cut with an axe, for Lebanon will fall by the Majestic One. The towering empire is a forest of proud trees, and the divine woodsman levels it. This imagery of cut-down timber sets the stage for the surprise of chapter 11, where from the stump of Jesse a tender shoot will rise. Where human pride is felled, the LORD plants the everlasting kingdom of his Messiah." }} />
          </section>
        )}

        {activeTab === "Verse by Verse" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 1.2rem", color: TEXT }}>Walking Through the Chapter</h2>

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 0.6rem", color: GOLD }}>Verses 1 to 4 &mdash; Woe to the Makers of Unjust Decrees</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Woe to those who decree iniquitous decrees, and the writers who keep writing oppression, to turn aside the needy from justice and to rob the poor of my people of their right, that widows may be their spoil and that they may make the fatherless their prey. These are not common thieves but lawmakers who use the very machinery of justice to commit injustice, dressing robbery in the language of statute. The prophet asks what they will do on the day of punishment, in the ruin that will come from afar; to whom will they flee for help, and where will they leave their wealth? Because they would not bow to the LORD, they will crouch among the prisoners or fall among the slain, and for all this his anger is not turned away, but his hand is stretched out still." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: ROSE }}>Verses 5 to 7 &mdash; Assyria, the Rod of My Anger</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Woe to Assyria, the rod of my anger; the staff in their hands is my fury. Against a godless nation I send him, and against the people of my wrath I command him, to take spoil and seize plunder and to tread them down like the mire of the streets. The astonishing claim is that the LORD is the one directing this campaign; Assyria is his instrument of discipline against a covenant people who have abandoned him. But then comes the crucial qualification: but he does not so intend, and his heart does not so think; it is in his heart to destroy and to cut off nations not a few. God&rsquo;s holy purpose and Assyria&rsquo;s murderous ambition run along the same road for a season, yet they are not the same thing, and the difference is the whole moral weight of the chapter." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: PURPLE }}>Verses 8 to 14 &mdash; The Arrogant Boast of the King</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Now the Assyrian king speaks for himself, and his pride pours out in a torrent. Are not my commanders all kings, he asks, and he lists his conquests city by city, naming Calno and Carchemish, Hamath and Arpad, Samaria and Damascus, boasting that no idol of any kingdom could save it from his hand. He reasons that since he has swept away the gods of others, he will surely sweep away Jerusalem and her images as well, treating the LORD of hosts as one more local deity to be conquered. By the strength of my hand I have done it, he says, and by my wisdom, for I have understanding; I removed the boundaries of peoples and plundered their treasures, gathering the wealth of nations as one gathers eggs from a deserted nest, while not a wing fluttered or a mouth opened to protest." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: GOLD }}>Verses 15 to 19 &mdash; Shall the Axe Boast Over the One Who Hews?</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "The LORD answers the boast with one of the most devastating images in all of prophecy. Shall the axe boast over the one who hews with it, or the saw magnify itself against the one who wields it? It would be as absurd as if a rod should wield the one who lifts it, or as if a staff should lift the one who is not wood. The created tool has no power, no glory, and no wisdom of its own; every stroke comes from the hand that swings it. Therefore the Lord of hosts will send wasting sickness among the Assyrian&rsquo;s stout warriors, and under his glory a burning will be kindled like the burning of fire, until the light of Israel becomes a fire and his Holy One a flame that devours the thorns and briers in a single day. The glory of that forest will be consumed, and the remaining trees will be so few that a child could write them down." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: GREEN }}>Verses 20 to 23 &mdash; A Remnant Shall Return</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "In that day the remnant of Israel and the survivors of the house of Jacob will no more lean on the one who struck them, but will lean on the LORD, the Holy One of Israel, in truth. The name of Isaiah&rsquo;s son, Shear-jashub, becomes the banner of hope: a remnant shall return, the remnant of Jacob, to the mighty God. Though your people Israel be as the sand of the sea, only a remnant of them will return, for the LORD has decreed a destruction overflowing with righteousness. The same sentence carries both severity and mercy: judgment is real and the falling away is great, yet a chastened, believing people will be carried through the fire, leaning at last not on Egypt or Assyria or their own strength but on God alone." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: TEAL }}>Verses 24 to 27 &mdash; Be Not Afraid, O My People in Zion</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Therefore the Lord GOD of hosts says: O my people who dwell in Zion, be not afraid of the Assyrians when they strike you with the rod and lift up their staff against you as the Egyptians did. For in a very little while my fury will come to an end, and my anger will be directed to their destruction. The LORD of hosts will wield a whip against Assyria as he struck Midian at the rock of Oreb in the days of Gideon, and his staff will be over the sea, lifted as it was against Egypt at the exodus. In that day the burden of the oppressor will depart from your shoulder and his yoke from your neck, and the yoke will be broken because of the fatness, the abundant anointing and presence of the LORD upon his people." }} />

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "1.6rem 0 0.6rem", color: ROSE }}>Verses 28 to 34 &mdash; The Advance and the Lopped Boughs</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "The prophet paints the enemy&rsquo;s terrifying march toward Jerusalem, naming the towns along the route as the army storms through Aiath and Migron, stores its baggage at Michmash, and brings panic to Gibeah, Ramah, and the daughter of Gallim, until it shakes its fist at the mount of the daughter of Zion. Then, at the height of the threat, the LORD himself intervenes: behold, the Lord GOD of hosts will lop the boughs with terrifying power; the great in height will be hewn down, and the lofty will be brought low. He will cut down the thickets of the forest with an axe, and Lebanon will fall by the Majestic One. The proud empire that towered like a cedar forest is felled in a moment, and the imagery of a cut-down stump prepares the heart for chapter 11, where from the stump of Jesse a shoot will grow and a Branch will bear fruit." }} />
          </section>
        )}

        {activeTab === "Application" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 1rem", color: TEXT }}>Living in the Light of Isaiah 10</h2>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 0.7rem", color: GOLD }}>Read History With Faith</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 10 trains us to look at the rise and fall of powers without fear and without naivety. When godless forces seem to dominate the world, we are not to conclude that God has abandoned the field, for even the cruelest empire is only a rod in his hand, raised for a season and broken at his word. At the same time we are not to excuse the evil that such powers do, as though their being used by God somehow makes them innocent. The mature believer holds both truths together and so can pray, work, and wait with a settled confidence that the Holy One of Israel governs every headline." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: PURPLE }}>Guard Against the Boasting Heart</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "The downfall of Assyria began in its heart, in the words by the strength of my hand I have done it, and by my wisdom. Every gift we have is borrowed, every success is granted, and the axe has no glory apart from the hand that swings it. When we begin to credit our intelligence, our effort, or our cunning for what God alone has given, we step into the very arrogance that Isaiah exposes. The cure is a daily, deliberate gratitude that traces every good thing back to its true source and refuses to let the tool exalt itself over the Maker." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: GREEN }}>Lean on the LORD in Truth</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "The remnant is defined by what it leans on: no longer on the one who struck them, but on the LORD, the Holy One of Israel, in truth. Each of us leans on something, some support we trust to hold our weight when life presses hard, whether wealth, reputation, relationships, or our own competence. Isaiah 10 warns that every such support is a felled tree waiting to happen, and it invites us to transfer our whole weight onto the only One who cannot be cut down. To lean in truth means an honest, undivided dependence that has stopped pretending lesser saviors can save." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: ROSE }}>Defend the Vulnerable</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Before the chapter ever mentions Assyria, it pronounces woe on those who write oppressive laws and make widows their spoil. The God who judges empires also judges those who use position and policy to grind the poor, and he hears the cry of the needy with particular tenderness. To walk in step with this God is to care about justice for the vulnerable, to refuse complicity in systems that prey on the weak, and to use whatever influence we have to lift rather than to crush. Our worship is empty if it leaves the fatherless and the widow unprotected." }} />

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "1.6rem 0 0.7rem", color: TEAL }}>Take Heart, Zion</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: TEXT, margin: "0 0 1.1rem" }}
              dangerouslySetInnerHTML={{ __html: "Be not afraid of the Assyrians is not a denial of the danger but a declaration of its limit. The same God who appointed the rod also appointed the very little while after which his fury would turn to the destruction of the oppressor. Whatever oppressive thing presses on you now is on a divine timer, and beyond the felled forest of every hostile power stands the living shoot of Jesse, the Messiah in whom all fear is finally answered. Lift your eyes past the marching army to the Majestic One who is about to act." }} />

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.6rem 1.5rem", margin: "2rem 0 0" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, margin: "0 0 1rem", color: GOLD }}>Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ fontSize: "1.02rem", lineHeight: 1.65, color: TEXT }}>{q}</li>
                ))}
              </ol>
            </div>
          </section>
        )}

        <section style={{ marginTop: "3.5rem", paddingTop: "2.5rem", borderTop: `1px solid ${BORDER}` }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 0.5rem", color: TEXT }}>Watch and Study</h2>
          <p style={{ fontSize: "1.02rem", color: MUTED, margin: "0 0 1.8rem", lineHeight: 1.6 }}>
            Video teaching to deepen your study of Isaiah 10 and its place in the larger story of Isaiah.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ padding: "0.9rem 1rem", margin: 0, fontSize: "0.98rem", fontWeight: 600, color: TEXT, lineHeight: 1.4 }}>{v.title}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
