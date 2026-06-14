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
  "Comfort Comfort My People",
  "A Voice Cries in the Wilderness",
  "The Grass Withers the Word Stands",
  "Behold Your God",
  "They Shall Mount Up with Wings",
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
    id: "Comfort Comfort My People",
    heading: "Comfort, Comfort My People",
    reference: "Isaiah 40:1&ndash;2",
    paragraphs: [
      "Isaiah 40 opens a new movement in the book of Isaiah, and it begins not with thunder but with tenderness: &ldquo;Comfort, comfort my people, says your God. Speak tenderly to Jerusalem, and cry to her that her warfare is ended, that her iniquity is pardoned&rdquo; (40:1&ndash;2). The first thirty-nine chapters have been weighed down with oracles of judgment against Judah and the nations; now the tone turns, and the voice of God breaks in with a word of consolation for a people facing the long darkness of exile.",
      "The doubling of the command &mdash; &ldquo;Comfort, comfort&rdquo; &mdash; is a Hebrew way of intensifying, as if God cannot say it strongly enough. And it is striking who is comforted: &ldquo;my people,&rdquo; says &ldquo;your God.&rdquo; The covenant bond, strained by sin and seemingly severed by exile, is reaffirmed in the opening breath of the chapter. The God who had every right to abandon Jerusalem instead claims her still as his own.",
      "The content of the comfort is threefold: her warfare is ended, her iniquity is pardoned, and she has received from the Lord&rsquo;s hand double for all her sins. This is not a comfort that ignores sin or pretends the wound was never there. It is a comfort that comes through the costly resolution of guilt &mdash; the hard service is finished, the debt is paid, the sentence is served. Genuine consolation never bypasses the question of iniquity; it answers it.",
      "Here is the foundation of all biblical comfort: it rests not on the strength of the sufferer but on the character and word of God. The exiles could not end their own warfare or pardon their own sin. Comfort comes from outside, spoken &ldquo;tenderly&rdquo; &mdash; literally, &ldquo;to the heart&rdquo; &mdash; by a God who has not forgotten his people. For everyone who has wondered whether their sin or their suffering has placed them beyond the reach of God, this chapter begins with the answer: he still calls you his own, and he still means to comfort you.",
    ],
  },
  {
    id: "A Voice Cries in the Wilderness",
    heading: "A Voice Cries in the Wilderness",
    reference: "Isaiah 40:3&ndash;5",
    paragraphs: [
      "&ldquo;A voice cries: In the wilderness prepare the way of the Lord; make straight in the desert a highway for our God&rdquo; (40:3). The image is drawn from the ancient world, where roads were built and obstacles cleared ahead of an arriving king. The God of Israel is coming to his people, and a herald goes before him to summon a road through the trackless waste &mdash; the very wilderness of exile and despair through which his people must pass.",
      "The summons is sweeping: &ldquo;Every valley shall be lifted up, and every mountain and hill be made low; the uneven ground shall become level, and the rough places a plain&rdquo; (40:4). Nothing in heaven or earth can stand as a permanent barrier to the coming of God. The terrain of obstacles &mdash; whether literal mountains or the harder mountains of human pride and sorrow &mdash; is leveled before him. And then the goal: &ldquo;And the glory of the Lord shall be revealed, and all flesh shall see it together, for the mouth of the Lord has spoken&rdquo; (40:5).",
      "All four Gospels seize upon these verses and apply them to John the Baptist, &ldquo;the voice of one crying in the wilderness&rdquo; (Matthew 3:3; Mark 1:3; Luke 3:4&ndash;6; John 1:23). John&rsquo;s ministry of repentance was the road-building of which Isaiah spoke &mdash; the preparation of human hearts for the arrival of the Lord himself in the person of Jesus Christ. The God who came to comfort his exiled people came at last in the flesh.",
      "Luke quotes this passage at greater length than the others, carrying it through to the promise that &ldquo;all flesh shall see the salvation of God&rdquo; (Luke 3:6). The revealing of the glory of the Lord, hidden in Isaiah&rsquo;s far horizon, finds its center in the coming of Christ and its consummation when every eye shall see him. The voice still cries today, calling every generation to prepare the way of the Lord by turning the heart toward him.",
    ],
  },
  {
    id: "The Grass Withers the Word Stands",
    heading: "The Grass Withers, the Word Stands",
    reference: "Isaiah 40:6&ndash;8",
    paragraphs: [
      "&ldquo;A voice says, Cry! And I said, What shall I cry? All flesh is grass, and all its beauty is like the flower of the field. The grass withers, the flower fades when the breath of the Lord blows on it; surely the people are grass&rdquo; (40:6&ndash;7). Against the backdrop of empires that seemed eternal &mdash; Assyria, Babylon &mdash; the prophet is told to proclaim the frailty of all human strength. Nations rise like spring grass and wither just as quickly under the breath of God.",
      "This is a sobering word for any age that trusts in human power, wealth, or beauty. The mightiest of human achievements is as durable as a wildflower &mdash; vivid for a season, then gone. Babylon, which held the exiles captive and seemed invincible, was itself grass that would wither. Every tyranny that ever frightened the people of God carries within it the seed of its own fading.",
      "But the verse does not end in despair, for it carries a contrast: &ldquo;The grass withers, the flower fades, but the word of our God will stand forever&rdquo; (40:8). Set against the impermanence of all flesh stands the one thing that does not fade &mdash; the spoken promise of God. The same word that announced comfort, that summoned a highway, that promised the revealing of glory, will outlast every empire and every age.",
      "The apostle Peter quotes these very words to anchor Christian hope: &ldquo;The word of the Lord remains forever. And this word is the good news that was preached to you&rdquo; (1 Peter 1:24&ndash;25). When everything visible is fading &mdash; our strength, our health, the world we know &mdash; the people of God rest their weight on the one thing that cannot fail. The promises of Scripture are not grass; they are the unwithering word of the everlasting God.",
    ],
  },
  {
    id: "Behold Your God",
    heading: "Behold Your God",
    reference: "Isaiah 40:9&ndash;26",
    paragraphs: [
      "The prophet now sends a herald up the mountain to lift up the good news for all to hear: &ldquo;Get you up to a high mountain, O Zion, herald of good news&hellip; lift it up, fear not; say to the cities of Judah, Behold your God!&rdquo; (40:9). The cry rings out: look, here is your God. And the God revealed is at once mighty and tender: &ldquo;Behold, the Lord God comes with might, and his arm rules for him&hellip; He will tend his flock like a shepherd; he will gather the lambs in his arms; he will carry them in his bosom, and gently lead those that are with young&rdquo; (40:10&ndash;11).",
      "It is one of the great pictures of Scripture: the God of irresistible might is also the gentle Shepherd who gathers the weak and carries the young against his heart. Power and tenderness meet in him without contradiction. The strong arm that &ldquo;rules for him&rdquo; is the same arm that cradles the lamb. This is the God whom Christ revealed when he called himself the Good Shepherd who lays down his life for the sheep.",
      "From verse 12 the chapter swells into one of the Bible&rsquo;s grandest meditations on the incomparable greatness of God. &ldquo;Who has measured the waters in the hollow of his hand and marked off the heavens with a span?&rdquo; (40:12). He has weighed the mountains in scales and the hills in a balance. Beside him &ldquo;the nations are like a drop from a bucket, and are accounted as the dust on the scales&rdquo; (40:15). All the wood of Lebanon and all its beasts would not be enough for a fire and an offering worthy of him.",
      "He &ldquo;sits above the circle of the earth, and its inhabitants are like grasshoppers&rdquo; (40:22); he stretches out the heavens like a curtain. He &ldquo;brings princes to nothing, and makes the rulers of the earth as emptiness&rdquo; (40:23) &mdash; scarcely are they planted before he blows on them and they wither, and the tempest carries them off like stubble. The rulers who terrified the exiles are, before the Almighty, like seedlings uprooted by the wind.",
      "Then comes the searching question that no idol and no nation can answer: &ldquo;To whom then will you compare me, that I should be like him? says the Holy One&rdquo; (40:25). Lift up your eyes, the prophet says, and see who created the stars, who brings out their host by number, calling them all by name. &ldquo;By the greatness of his might, and because he is strong in power, not one is missing&rdquo; (40:26). The God who numbers and names the stars is the God who knows and keeps his people.",
    ],
  },
  {
    id: "They Shall Mount Up with Wings",
    heading: "They Shall Mount Up with Wings",
    reference: "Isaiah 40:27&ndash;31",
    paragraphs: [
      "The whole magnificent argument of the chapter now bends toward a single weary, doubting heart. The prophet turns and asks: &ldquo;Why do you say, O Jacob, and speak, O Israel, My way is hidden from the Lord, and my right is disregarded by my God?&rdquo; (40:27). This is the complaint of the exile, and of every believer in the dark: God has forgotten me, my case has slipped past his notice, my suffering goes unseen. The towering portrait of God&rsquo;s greatness exists precisely to answer this small, aching fear.",
      "The answer comes as a gentle rebuke wrapped in a question: &ldquo;Have you not known? Have you not heard? The Lord is the everlasting God, the Creator of the ends of the earth. He does not faint or grow weary; his understanding is unsearchable&rdquo; (40:28). The God who flung the stars into place does not tire, does not nod off, does not lose track of one of his children. Your way is not hidden from him; nothing is hidden from the One who never grows weary.",
      "More than that, &ldquo;he gives power to the faint, and to him who has no might he increases strength. Even youths shall faint and be weary, and young men shall fall exhausted&rdquo; (40:29&ndash;30). Human strength &mdash; even the vigor of the young &mdash; runs out. But the strength of the everlasting God does not, and he shares it with the depleted. The very ones who have nothing left are the ones to whom he gives.",
      "And so the chapter rises to its soaring climax: &ldquo;But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint&rdquo; (40:31). To &ldquo;wait&rdquo; is to hope in the Lord, to lean the whole weight of the soul upon him rather than upon our own fading resources. Those who do are not promised escape from the road, but renewed strength for it.",
      "Notice the curious order &mdash; soaring, then running, then walking. We might expect the reverse, a build to a triumphant flight. But the deepest gift is the last: to walk and not faint, to keep going through the long ordinary days when there is no soaring and no exhilaration, only the steady plodding faithfulness that does not give up. For the weary, the waiting, and the worn, Isaiah 40 holds out the unfailing strength of a God who never grows tired &mdash; comfort for those in suffering, and strength to walk all the way home.",
    ],
  },
];

const videoItems = [
  { videoId: "d0A6Pcou_KU", title: "BibleProject - Overview - Isaiah 40-66" },
  { videoId: "_TzdEPuqgQg", title: "Comfort My People - A Study of Isaiah 40" },
  { videoId: "VdmFh3Gio2c", title: "They Shall Mount Up with Wings Like Eagles" },
  { videoId: "UF8dh6dRBfI", title: "Behold Your God - The Greatness of God in Isaiah 40" },
];

export default function Isaiah40GuidePage() {
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
            Isaiah 40
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            &ldquo;Comfort, comfort my people&rdquo; &mdash; a chapter that turns from judgment to consolation: a voice crying in the wilderness, the word of God that stands forever, the incomparable greatness of the Creator, and the promise that those who wait for the Lord shall mount up with wings like eagles.
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
              Deepen your study of Isaiah 40 through visual teaching on the God who comforts his people, the voice in the wilderness, the enduring word of God, and the strength promised to those who wait on the Lord.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>They Who Wait for the Lord</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Isaiah 40 speaks to the weary and the waiting in every age. The God who measured the waters in the hollow of his hand and calls the stars by name does not faint or grow weary &mdash; and he gives his own unfailing strength to those with none left. Wait on him, and he will renew your strength to mount up, to run, and above all to walk and not faint all the way home.
          </p>
        </div>
      </main>
    </div>
  );
}
