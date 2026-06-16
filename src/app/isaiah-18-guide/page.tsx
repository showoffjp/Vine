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

const ACCENT = TEAL;

const TABS = [
  "Overview",
  "Key Themes",
  "Verse by Verse",
  "Application",
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
    heading: "Overview of Isaiah 18",
    reference: "Isaiah 18:1&ndash;7",
    paragraphs: [
      "Isaiah 18 is one of the shortest and most enigmatic chapters in the entire book of Isaiah, just seven verses long, yet it opens a window onto some of the grandest themes in all of Scripture: the sovereignty of God over the most distant and powerful nations of the earth, the futility of frantic human diplomacy apart from him, and the breathtaking hope that one day even the far-off peoples will stream to Mount Zion bringing tribute to the LORD of hosts. The chapter belongs to a cluster of oracles concerning the nations that runs from Isaiah 13 through 23, in which the prophet declares the word of the LORD not only to Judah but to Babylon, Assyria, Philistia, Moab, Damascus, Egypt, Tyre, and here, to the land of Cush. These oracles announce that the God of Israel is no mere tribal deity but the Lord of the whole earth, whose purposes encompass every kingdom under heaven.",
      "The land addressed in this oracle is Cush, the region the Greeks called Ethiopia and which corresponds to ancient Nubia, lying along the upper Nile south of Egypt in what is today Sudan and southern Egypt. In Isaiah&rsquo;s day this was a formidable power; the Cushite rulers of the so-called Twenty-fifth Dynasty had extended their control northward over Egypt itself, so that a single Cushite imperial house governed the Nile from its African headwaters to the Mediterranean. These were the &ldquo;tall and smooth&rdquo; people, a nation feared near and far, and their ambassadors crossed the seas and rivers in swift papyrus vessels to weave alliances against the rising threat of Assyria.",
      "The historical setting is the late eighth century before Christ, when the Assyrian empire under Sargon and then Sennacherib was swallowing kingdom after kingdom. Small states like Judah, and great powers like Cushite Egypt, were tempted to band together in coalitions of mutual defense. Envoys traveled back and forth, treaties were negotiated, and tribute was promised, all in the desperate hope of holding back the Assyrian flood. Into this swirl of international intrigue the prophet speaks a word that relativizes all of it: the outcome will not be decided in the council chambers of the nations but at the quiet, sovereign initiative of the LORD, who watches from his dwelling and acts in his own perfect time.",
      "The structure of the chapter unfolds in three movements. First, in verses 1 and 2, the prophet apostrophizes the land of whirring wings beyond the rivers of Cush, the busy nation sending its messengers across the waters, and he turns the messengers back with a word for their own people and indeed for all the world. Second, in verses 3 through 6, the LORD himself speaks, declaring that when his signal is raised all the inhabitants of the world must take notice, and describing how he will quietly look on like clear heat in sunshine before cutting down the proud branches in a great pruning of judgment. Third, in verse 7, the chapter rises to its climactic vision: at that time tribute will be brought to the LORD of hosts from this very people, to Mount Zion, the place of the name of the LORD of hosts.",
      "What makes Isaiah 18 so remarkable is the way it moves from judgment to worship, from the cutting off of the nations to their gathering in. The agricultural imagery of pruning and harvest, the patient watching of God like dew in the heat of harvest, and the final procession of gifts to Zion together form a single tapestry. The chapter refuses both the despair that says the nations are too distant and too strong for God to govern, and the pride that imagines salvation belongs to Israel alone. It holds out a wider hope, that the God who judges the nations is also the God who will draw them home.",
      "For the reader today, Isaiah 18 is an invitation to lift the eyes above the headlines of geopolitical anxiety and to behold the LORD enthroned above the turmoil of the peoples. It teaches that history is not a runaway machine but a field tended by a sovereign Gardener who knows exactly when to watch and when to act. And it plants, in the soil of an ancient oracle about a distant African kingdom, a seed of the gospel hope that the nations from every corner of the earth will one day come to worship the living God.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes in Isaiah 18",
    reference: "Sovereignty, Diplomacy, and the Gathering of the Nations",
    paragraphs: [
      "The first great theme of Isaiah 18 is the sovereignty of God over the distant and powerful nations of the earth. The oracle is addressed to a land beyond the rivers of Cush, at the very edge of the known world, a people tall and smooth, mighty and conquering. By choosing the most remote and formidable nation he can name, the prophet underscores that there is no kingdom so distant that it lies outside the reach of the LORD&rsquo;s rule, and no power so impressive that it can resist his purpose. The God of Israel is not a local deity confined to the hill country of Judah; he is the LORD of hosts whose dominion runs to the ends of the earth and whose signal commands the attention of all who dwell in the world.",
      "A second theme is the futility of political alliances and frantic diplomacy pursued apart from God. The picture of ambassadors hurrying by sea in vessels of papyrus, of swift messengers running to and fro, captures the restless energy of human statecraft scrambling to build coalitions against Assyria. Isaiah does not deny that such activity is happening, but he subtly empties it of ultimate significance by turning the messengers around with a word from the LORD. The decisive action will not be the treaty signed in some palace but the signal raised by God on the mountains. Throughout Isaiah, Judah is repeatedly warned not to trust in chariots and horses, in Egypt and Cush, but in the Holy One of Israel alone, and this chapter quietly reinforces that warning to all who would lean on the arm of flesh.",
      "The third theme is the patient, watchful waiting of God before he acts in judgment. In verse 4 the LORD says he will quietly look from his dwelling like clear heat in sunshine, like a cloud of dew in the heat of harvest. This is one of the most arresting self-descriptions of God in all of Scripture. His apparent inaction is not weakness, distraction, or indifference; it is the calm, unhurried composure of a sovereign who is utterly in control. Just as the farmer does not panic during the weeks when the crop is silently ripening, so God watches over the affairs of the nations with serene patience, allowing things to come to their appointed fullness before he moves. What looks to anxious human eyes like divine absence is in fact divine mastery.",
      "Closely bound to this is the fourth theme: the imagery of pruning before the harvest as a picture of judgment. In verses 5 and 6 the LORD acts at last, but his action is described in the language of viticulture. Before the harvest, when the blossom is over and the flower becomes a ripening grape, he cuts off the shoots with pruning hooks and lops away the spreading branches. The proud growth of the nations, which seemed to flourish unchecked, is suddenly severed and left for the birds of prey and the beasts of the earth. This pruning is at once an act of judgment and, in the wider biblical pattern, a preparation, for the vine that is pruned is the vine that is being tended toward a harvest.",
      "The fifth and climactic theme is the gathering of the nations to Zion. Verse 7 transforms the whole chapter, for the very people who were the object of the oracle, the tall and smooth nation feared near and far, now become the bearers of tribute to the LORD of hosts at Mount Zion, the place of his name. The judgment of the nations is not God&rsquo;s last word; his final purpose is their worship. This missionary and eschatological hope connects Isaiah 18 to the great vision of Isaiah 2, where all nations flow to the mountain of the house of the LORD, and to Psalm 68, which declares that Cush shall hasten to stretch out her hands to God. The distant Gentile peoples are destined not merely to be subdued but to be welcomed as worshipers.",
      "Underlying all these themes is the unifying truth that the LORD of hosts is the true center of world history. Human kingdoms rise and rage, ambassadors hurry across the waters, empires threaten and coalitions form, but the axis around which everything finally turns is Mount Zion, the place of the name of the LORD. Isaiah 18 teaches the believer to read the news of the nations through the lens of God&rsquo;s sovereign patience and his redemptive purpose. The same God who watches quietly and prunes decisively is the God who will gather the peoples of the earth to himself, so that the story of the nations ends not in chaos but in worship.",
    ],
  },
  {
    id: "Verse by Verse",
    heading: "Verse by Verse Through Isaiah 18",
    reference: "Isaiah 18:1&ndash;7",
    paragraphs: [
      "Verses 1 and 2 open with a striking apostrophe: &ldquo;Ah, land of whirring wings that is beyond the rivers of Cush, which sends ambassadors by the sea, in vessels of papyrus on the waters!&rdquo; The phrase land of whirring wings has long puzzled interpreters; it may evoke the dense clouds of insects along the upper Nile, or the constant flutter of sails and oars as boats ply the river, or the rustling of the many envoys hurrying on their errands. Whatever the precise image, the effect is of a land alive with restless motion, sending its messengers across the sea in lightweight papyrus skiffs. Cush lies beyond the rivers, at the far southern edge of the world the prophet knows, and yet even this remote and busy nation falls within the compass of the LORD&rsquo;s word.",
      "The latter half of verse 2 carries the LORD&rsquo;s instruction: &ldquo;Go, you swift messengers, to a nation tall and smooth, to a people feared near and far, a nation mighty and conquering, whose land the rivers divide.&rdquo; The Cushites are described in terms that convey their imposing stature and their fearsome reputation. They are tall and smooth-skinned, a people whom others dread, a nation that conquers and whose homeland is carved by the channels of the Nile. There is no minimizing of their greatness here; the prophet grants them all their formidable splendor. And yet the swift messengers are turned back, sent home with a message, for the issue at stake is far larger than the alliances they were sent to arrange.",
      "Verse 3 widens the horizon from a single nation to the whole earth: &ldquo;All you inhabitants of the world, you who dwell on the earth, when a signal is raised on the mountains, look! When a trumpet is blown, hear!&rdquo; The summons is now universal. God is about to raise a banner on the mountains and to sound a trumpet, and when he does, every dweller on earth is commanded to watch and to listen. The signal and the trumpet are the instruments by which the sovereign LORD musters attention and announces his action. The contrast with the previous verses is pointed: while the nations were busy sending their own messengers and signals across the waters, it is God&rsquo;s signal on the mountains that truly matters, and all the world must heed it.",
      "Verse 4 brings the central self-revelation of God in the chapter: &ldquo;For thus the LORD said to me: I will quietly look from my dwelling like clear heat in sunshine, like a cloud of dew in the heat of harvest.&rdquo; Here the LORD discloses his posture during the tumult of international affairs. He will quietly look on, watching from his heavenly dwelling, calm and undisturbed. The two similes are agricultural and gentle: he is like the shimmering clear heat that ripens the grain under a cloudless sky, and like the cloud of dew that descends in the warm stillness of harvest time. These are not images of menace but of patient, fostering presence, the conditions under which a crop silently matures toward its appointed day.",
      "Verses 5 and 6 announce that the time for action arrives, and it comes as a sudden pruning: &ldquo;For before the harvest, when the blossom is over, and the flower becomes a ripening grape, he cuts off the shoots with pruning hooks, and the spreading branches he lops off and clears away.&rdquo; The moment of decisive intervention is precisely timed, just before the harvest, when the vine is at the point of fruitfulness. With sudden swiftness God cuts away the shoots and lops off the proud spreading branches, leaving them all together for the birds of prey of the mountains and the beasts of the earth. The summer is spent upon the birds and the winter upon the beasts, as the severed growth is given over to scavengers. The proud nations, flourishing in apparent security, are humbled in a stroke.",
      "Verse 7 lifts the chapter to its glorious climax: &ldquo;At that time tribute will be brought to the LORD of hosts from a people tall and smooth, from a people feared near and far, a nation mighty and conquering, whose land the rivers divide, to Mount Zion, the place of the name of the LORD of hosts.&rdquo; The very nation described at the beginning of the oracle now reappears, but no longer as an object of judgment alone; it becomes a worshiper, bearing tribute to the LORD of hosts. The procession moves toward Mount Zion, the place where God has set his name. The chapter that began with messengers hurrying across the seas on errands of diplomacy ends with a far greater journey, the pilgrimage of the distant peoples to the dwelling place of the living God, their gifts laid before his throne.",
      "Read as a whole, the seven verses trace an astonishing arc from the restless diplomacy of a distant kingdom, through the patient watching and decisive pruning of the sovereign LORD, to the worship of that same kingdom at Zion. The same hand that prunes is the hand that gathers; the same God who turns back the messengers in verse 2 receives the tribute in verse 7. Isaiah 18 thus compresses into a few verses the whole biblical movement from judgment to redemption, and it does so on the canvas of the nations, assuring the reader that the LORD of hosts governs the farthest peoples of the earth and will at last draw them to himself.",
    ],
  },
  {
    id: "Application",
    heading: "Living Isaiah 18 Today",
    reference: "Personal and Community Application",
    paragraphs: [
      "Isaiah 18 speaks with surprising freshness to a generation saturated with anxious news about the nations. We live, as Isaiah&rsquo;s hearers did, in a world of shifting alliances, rising and falling powers, and constant diplomatic maneuvering, and it is easy to feel that history is a runaway force beyond anyone&rsquo;s control. The chapter answers that anxiety with the image of God quietly looking on from his dwelling like clear heat in sunshine. The first application of this oracle is therefore a settled confidence: the LORD is not absent from the affairs of the nations, nor is he overwhelmed by them. His apparent quietness is the composure of a sovereign in full command, and the believer can rest in that mastery even when the world seems to be spinning out of control.",
      "The chapter also confronts the perennial temptation to trust in human coalitions and clever strategy rather than in God. The swift messengers in their papyrus boats picture every effort to secure our future by alliances, schemes, and the arm of flesh, while leaving God out of the reckoning. Isaiah turns the messengers back, reminding us that the decisive factor in any situation is the signal raised by God on the mountains, not the treaties we negotiate in our own strength. In personal terms, this calls us to examine where we are placing our trust, whether in our networks, our plans, and our resources, or in the LORD who governs all outcomes. It does not forbid wise action, but it forbids the idolatry of leaning on our own arrangements as though God were not there.",
      "There is deep pastoral comfort in the image of God&rsquo;s patient watching before he acts. Many believers struggle with the seeming delay of God, wondering why he does not intervene immediately against injustice or in answer to long prayers. Isaiah 18 reframes that delay: God watches like dew in the heat of harvest, not because he is slow or uncaring, but because he is bringing matters to their appointed ripeness before he moves. This teaches us a patient faith that trusts God&rsquo;s timing, confident that the pruning hook will fall at exactly the right moment, neither too early nor too late. The Christian can therefore wait without despair, knowing that the silence of God is often the gardener&rsquo;s attentive stillness rather than his absence.",
      "The climactic vision of verse 7, in which the distant nation brings its tribute to Mount Zion, lays a missionary obligation and a missionary hope upon the people of God. If the LORD&rsquo;s purpose is to gather even the most remote and once-hostile peoples into worship, then his church is called to share that purpose and to labor toward that end. The conversion of the Ethiopian official in Acts 8, who returned home rejoicing with the good news, stands as an early fulfillment of this very hope, a man from beyond the rivers of Cush bearing the gospel back to his people. Isaiah 18 thus fuels a global vision for prayer, giving, and going, reminding the church that no people group is too distant or too difficult for the reach of God&rsquo;s redeeming grace.",
      "On a personal level, the pruning imagery of verses 5 and 6 invites self-examination. The God who prunes the proud branches of the nations is the same God who, in the words of Jesus in John 15, prunes every branch in the vine that it may bear more fruit. The cutting away of what is overgrown and unfruitful is painful, but it is the loving discipline of a Gardener who intends a richer harvest. When we experience the pruning of our own lives, the stripping away of comforts, ambitions, or securities we had clung to, we may take heart that this severing is not random cruelty but purposeful cultivation, aimed at the abundant fruitfulness God desires to produce in us.",
      "Finally, Isaiah 18 calls the worshiping community to lift its eyes to the great consummation toward which all history is moving. The chapter ends not with the noise of the nations but with their tribute laid at Mount Zion, the place of the name of the LORD of hosts. This is a foretaste of the scene in Revelation where a great multitude from every nation, tribe, people, and language stands before the throne and before the Lamb. The application for the church is to live now in the light of that future, worshiping the God who will gather the peoples, welcoming the stranger and the outsider as a future fellow worshiper, and ordering our lives around the certainty that the story of the world ends in adoration before the throne of the LORD.",
    ],
  },
];

const questions = [
  "Where in your own life are you tempted, like the swift messengers in their papyrus boats, to trust in human alliances and strategies rather than in the LORD who governs every outcome?",
  "How does the picture of God quietly looking on like clear heat in sunshine reshape the way you understand the times when God seems silent or slow to act?",
  "The pruning of verses 5 and 6 cuts away proud and overgrown branches. What in your life might God be pruning so that you bear more fruit, and how can you submit to that cultivation with trust?",
  "Verse 7 envisions a distant people bringing tribute to Zion. How does this global hope shape your prayers, giving, and posture toward people and nations far from the faith?",
  "When you read the news of rising and falling powers, do you read it through the lens of God&rsquo;s sovereignty and his redemptive purpose for the nations? What would change if you did?",
];

const videoItems = [
  { videoId: "d0A6Uchb1F8", title: "BibleProject - Overview: Isaiah 1-39" },
  { videoId: "RSK2Ynu8WzM", title: "Isaiah 18 - The Oracle Concerning Cush - Verse by Verse" },
  { videoId: "_a4eUm5fcQc", title: "God Quietly Looks On - Divine Patience in Isaiah 18" },
  { videoId: "Vb24Lk1Iz5A", title: "The Nations Gather to Zion - Isaiah 18:7 Explained" },
];

export default function Isaiah18GuidePage() {
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
            Isaiah 18 &mdash; The Oracle Concerning Cush
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            &ldquo;Ah, land of whirring wings that is beyond the rivers of Cush&rdquo; &mdash; a short but soaring oracle in which the LORD of hosts watches quietly over the distant nations, prunes the proud branches in his appointed time, and at last receives the tribute of a far-off people at Mount Zion, the place of his name.
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

            {activeTab === "Application" && (
              <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
                <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.2rem" }}>Reflection Questions</h3>
                <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {questions.map((q, i) => (
                    <li
                      key={i}
                      style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem" }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  ))}
                </ol>
              </div>
            )}
          </section>
        )}

        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Deepen your study of Isaiah 18 through these video teachings on the oracle concerning Cush, the patient sovereignty of God over the nations, and the eschatological gathering of the distant peoples to Mount Zion.
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

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>From the Rivers of Cush to Mount Zion</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Isaiah 18 takes the reader from the restless diplomacy of a distant African kingdom to the quiet, sovereign watching of the LORD, and finally to the worship of that same people at Mount Zion. It assures the anxious heart that history is no runaway machine but a field tended by a patient Gardener who prunes in his appointed time and gathers the nations home. The God who governs the farthest peoples of the earth will at last receive their tribute, and the story of the world ends not in chaos but in adoration before the throne.
          </p>
        </div>
      </main>
    </div>
  );
}
