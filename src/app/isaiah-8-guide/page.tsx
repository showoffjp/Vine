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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verses", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "d0A6Uchb1F8", title: "Isaiah Overview: The Holy One and the Sign of Immanuel" },
  { videoId: "n0QeNVFCbf0", title: "The Stone of Stumbling: Christ in Isaiah 8" },
  { videoId: "Vo5MOFf5V0I", title: "To the Law and to the Testimony: God's Word vs the Occult" },
  { videoId: "G1VLQoLFWYg", title: "Immanuel, God With Us: From Isaiah 7 to Isaiah 8" },
];

const THEMES = [
  {
    color: GOLD,
    title: "The Prophetic Sign-Children",
    body: "Isaiah&rsquo;s family becomes a living sermon. His son Maher-shalal-hash-baz carries a name that means &ldquo;swift to plunder, quick to spoil,&rdquo; a walking countdown clock for the doom of Damascus and Samaria. His other son, Shear-jashub, means &ldquo;a remnant shall return,&rdquo; and the prophet himself bears a name that means &ldquo;the LORD saves.&rdquo; In Isaiah 8:18 he declares that he and the children the LORD has given him are &ldquo;signs and portents in Israel,&rdquo; a verse the writer of Hebrews 2:13 places on the lips of Jesus. The household of the prophet preaches before the prophet ever opens his mouth.",
  },
  {
    color: TEAL,
    title: "Gentle Waters Versus the Flooding River",
    body: "The chapter sets two streams against each other as rival objects of trust. The waters of Shiloah flow softly, the quiet stream that fed Jerusalem from the Gihon spring, an emblem of the unspectacular providence of God ruling from Zion. Because the people despised that gentle current and craved the political muscle of foreign powers, the LORD threatens to bring the mighty waters of the River, the Euphrates, meaning the armies of Assyria. What looked like safety becomes a flood that rises to the neck, sweeping through &ldquo;the land of Immanuel.&rdquo; The lesson is that rejecting God&rsquo;s quiet kingship does not produce neutrality; it invites the very catastrophe it tried to avoid.",
  },
  {
    color: PURPLE,
    title: "The Holiness and Fear of the LORD",
    body: "When the political world panics, the LORD seizes Isaiah and forbids him to share the dread that grips everyone else. &ldquo;Do not call conspiracy all that this people calls conspiracy, and do not fear what they fear, nor be in dread.&rdquo; Instead the prophet is told to regard the LORD of hosts as holy, to let Him be the object of fear and the object of dread. This is the great reordering of the heart: the fear of God expels the fear of man, and reverence becomes the antidote to anxiety. To sanctify the LORD as holy is to let Him be both refuge and the only One worth dreading.",
  },
  {
    color: ROSE,
    title: "The Stone of Stumbling",
    body: "The same God who promises to be a sanctuary also warns that He will be &ldquo;a stone of offense and a rock of stumbling to both houses of Israel, a trap and a snare.&rdquo; The presence of the Holy One is never neutral; He is a refuge to those who trust Him and a rock that breaks those who reject Him. Paul gathers this image in Romans 9:33 and Peter quotes it in 1 Peter 2:8, applying the stumbling stone directly to Christ. Jesus is the cornerstone of the new temple and at the same time the rock over which unbelief trips and falls. How a person responds to the Stone reveals everything.",
  },
  {
    color: GREEN,
    title: "The Authority of God's Word Versus Occult Counsel",
    body: "When the people are tempted to consult mediums and necromancers who &ldquo;chirp and mutter,&rdquo; Isaiah answers with the chapter&rsquo;s great rallying cry: &ldquo;To the teaching and to the testimony!&rdquo; The dead are not to be questioned on behalf of the living; the living God has already spoken. Any voice that will not speak according to this word betrays that it &ldquo;has no dawn,&rdquo; no light, no future. Here the standard of truth is fixed forever: the law and the testimony, the written revelation of God, stands as judge over every competing claim to spiritual knowledge.",
  },
  {
    color: GOLD,
    title: "The Sealed Testimony and the Waiting Remnant",
    body: "In a season when the official nation rushes toward judgment, the LORD tells Isaiah to &ldquo;bind up the testimony, seal the teaching among my disciples.&rdquo; A faithful remnant gathers around the prophet and around the word, preserving truth for a generation that cannot yet hear it. Isaiah models the posture of that remnant: &ldquo;I will wait for the LORD, who is hiding his face from the house of Jacob, and I will hope in him.&rdquo; Faith here is not the absence of darkness but trust that endures when God seems hidden, holding fast to the sealed word until the dawn breaks.",
  },
];

const VERSES = [
  {
    ref: "Isaiah 8:1-4",
    color: GOLD,
    title: "The Sign of Maher-shalal-hash-baz",
    body: "The LORD commands Isaiah to write on a large tablet, in common letters legible to anyone, the strange name Maher-shalal-hash-baz, which means &ldquo;swift to the plunder, quick to the spoil.&rdquo; Reliable witnesses are called to certify the writing so that no one can later claim the prophecy was invented after the fact. Then the prophetess conceives and bears a son who is given that very name, a child who is himself a ticking clock of judgment. Before the boy can say &ldquo;my father&rdquo; or &ldquo;my mother,&rdquo; the wealth of Damascus and the spoil of Samaria will be carried away before the king of Assyria. The alliance of Syria and Israel that terrified Judah will be plundered within a toddler&rsquo;s first words.",
  },
  {
    ref: "Isaiah 8:5-8",
    color: TEAL,
    title: "Shiloah Rejected, the River Unleashed",
    body: "Because this people has refused the waters of Shiloah that flow gently and instead rejoiced in Rezin and the son of Remaliah, the LORD announces a terrible reversal. He will bring up against them the waters of the River, mighty and many, the king of Assyria and all his glory, a flood that will overflow its channels. The torrent will sweep on into Judah, reaching even to the neck, filling the breadth of the land. Yet the prophet calls it &ldquo;the land of Immanuel,&rdquo; for even in the flood the territory still belongs to the God who is with His people. Judgment rises to the neck, but it does not drown the promise that God is present.",
  },
  {
    ref: "Isaiah 8:9-10",
    color: PURPLE,
    title: "Be Broken, You Peoples, For God Is With Us",
    body: "Isaiah turns to the raging nations with a taunt of holy defiance: &ldquo;Be broken, you peoples, and be shattered; give ear, all you far countries; strap on your armor and be shattered.&rdquo; Let them take counsel together; it will come to nothing. Let them speak a word; it will not stand. The reason is stamped into the Hebrew name itself, Immanuel: &ldquo;for God is with us.&rdquo; No coalition of armies, however vast, can finally prevail against the people in whose midst God dwells. The verse becomes a banner that the church has carried into every age of threat.",
  },
  {
    ref: "Isaiah 8:11-15",
    color: ROSE,
    title: "Sanctuary and Stone of Stumbling",
    body: "With a strong hand upon him the LORD warns Isaiah not to walk in the way of this people, not to call conspiracy what they call conspiracy, nor to fear what they fear. Instead, &ldquo;the LORD of hosts, him you shall honor as holy. Let him be your fear, and let him be your dread.&rdquo; To those who trust Him He becomes a sanctuary, a holy place of refuge. But to both houses of Israel He becomes a stone of offense and a rock of stumbling, a trap and a snare, so that many shall stumble, fall, be broken, snared, and taken. The very holiness that shelters the believing also shatters the unbelieving, which is why the New Testament reads this Stone as Christ.",
  },
  {
    ref: "Isaiah 8:16-18",
    color: GREEN,
    title: "Bind Up the Testimony; I Will Wait",
    body: "The prophet is told to &ldquo;bind up the testimony, seal the teaching among my disciples,&rdquo; preserving the word within a faithful community when the nation will not listen. Isaiah responds with one of the great confessions of patient faith: &ldquo;I will wait for the LORD, who is hiding his face from the house of Jacob, and I will hope in him.&rdquo; Then he lifts up his children as living parables: &ldquo;Behold, I and the children whom the LORD has given me are signs and portents in Israel from the LORD of hosts, who dwells on Mount Zion.&rdquo; Hebrews 2:13 places these very words in the mouth of Jesus, who calls believers His brothers and the children God has given Him. The faithful family of God becomes a sign to a watching world.",
  },
  {
    ref: "Isaiah 8:19-22",
    color: GOLD,
    title: "To the Law and to the Testimony",
    body: "When voices urge the people to consult the mediums and the necromancers who chirp and mutter, Isaiah cries out the chapter&rsquo;s decisive principle: should not a people inquire of their God? Should the living seek answers from the dead? &ldquo;To the teaching and to the testimony! If they will not speak according to this word, it is because they have no dawn.&rdquo; Those who turn from God&rsquo;s word will pass through the land hungry and enraged, cursing their king and their God, looking upward and then to the earth, but seeing only distress and darkness, the gloom of anguish, thrust into thick darkness. The chapter ends in night for those who reject the word, while the faithful remnant waits for the morning.",
  },
];

const REFLECTION = [
  "Where in your life are you tempted to despise the gentle waters of God&rsquo;s quiet providence and reach instead for the flooding river of human power, money, or alliances?",
  "Isaiah was told not to fear what the people feared but to let the LORD be his fear and his dread. What anxiety would shrink if you genuinely sanctified God as holy in your heart?",
  "The same Christ is a sanctuary to those who trust Him and a stone of stumbling to those who reject Him. How does your daily response to Jesus reveal which He is to you?",
  "When the culture offers spiritual counsel that does not align with Scripture, do you instinctively run &ldquo;to the law and to the testimony,&rdquo; or do you weigh God&rsquo;s word by other voices?",
  "Isaiah waited for a God who was hiding His face. How do you keep hoping in the LORD during seasons when He seems silent or hidden?",
];

type Tab = "overview" | "themes" | "verses" | "application";

export default function Isaiah8GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main id="main-content" style={{ maxWidth: 880, margin: "0 auto", padding: "40px 20px 72px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
            Isaiah Chapter 8 - Major Prophet
          </div>
          <h1 style={{ color: TEXT, fontSize: 36, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.15 }}>
            Immanuel, the Stone of Stumbling, and the Law and the Testimony
          </h1>
          <p
            style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, margin: 0, maxWidth: 680, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;Take counsel together, but it will come to nothing; speak a word, but it will not stand, for God is with us.&rdquo; &mdash; Isaiah 8:10" }}
          />
        </div>

        {/* Sticky tab nav */}
        <div style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, background: BG, paddingTop: 8, paddingBottom: 12, marginBottom: 24 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {TABS.map(t => (
              <button
                type="button"
                key={t.id}
                onClick={() => setActiveTab(t.id as Tab)}
                style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${activeTab === t.id ? GOLD : BORDER}`, background: activeTab === t.id ? `${GOLD}20` : "transparent", color: activeTab === t.id ? GOLD : MUTED, fontWeight: activeTab === t.id ? 700 : 500, fontSize: 13, cursor: "pointer" }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 24 }}>
                {[["Book", "Isaiah"], ["Chapter", "8"], ["Setting", "Syro-Ephraimite Crisis"], ["Era", "~735-732 BC"], ["Key Word", "Immanuel"], ["Key Verse", "Isa 8:13-14"]].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>The Immanuel Crisis Continues</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 8 stands in the shadow of the Immanuel sign first given in Isaiah 7. King Ahaz of Judah is terrified by the alliance of Syria (Damascus) and Israel (Samaria), who have marched against Jerusalem to depose him. Rather than trust the gentle promise of God, Ahaz has reached out to Assyria for rescue, a fateful decision that will eventually bring the very flood that drowns the region. Chapter 8 unfolds the consequences of that choice while threading through it the recurring word Immanuel, God with us." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter moves in vivid scenes. First comes the birth of a sign-child whose very name, Maher-shalal-hash-baz, announces the swift plundering of Judah&rsquo;s enemies. Then comes the image of two waters, the gentle stream of Shiloah despised and the flooding River of Assyria unleashed. The flood rises to the neck of the land, and yet the land is still called the land of Immanuel, because judgment and presence run together in the strange economy of God." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "From the rising flood the prophet turns to the trembling nations and hurls a defiant taunt: let them plot and arm, for God is with us, and their counsel will not stand. The LORD then takes hold of Isaiah and reorders his fears, declaring Himself both a sanctuary and a stone of stumbling. The chapter closes with the great alternative that has echoed through the centuries, the choice between the living word of God and the muttering voices of the dead. To the law and to the testimony, or no dawn at all." }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                ["v.1-8", "The Sign and the Flood", GOLD, "Maher-shalal-hash-baz is born as a clock of judgment, and the despised waters of Shiloah give way to the flooding River of Assyria reaching to the neck of the land of Immanuel."],
                ["v.9-15", "Refuge and Stumbling Stone", ROSE, "A taunt against the nations grounded in Immanuel, then the LORD as both sanctuary and stone of stumbling to those who will not honor Him as holy."],
                ["v.16-18", "The Sealed Word and the Remnant", GREEN, "The testimony is bound up among the disciples; Isaiah waits and hopes in a hidden God; he and his children stand as signs in Israel, quoted of Christ in Hebrews 2:13."],
                ["v.19-22", "Word Versus the Occult", PURPLE, "Mediums and necromancers are rejected in favor of the law and the testimony; those who reject the word walk in hunger, rage, and the thick darkness of having no dawn."],
              ].map(([ref, title, color, desc]) => (
                <div key={String(ref)} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                    <span style={{ background: `${color}20`, border: `1px solid ${color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: String(color), fontWeight: 700 }}>{String(ref)}</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{String(title)}</span>
                  </div>
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: String(desc) }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Themes */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: 0 }}>Key Themes of Isaiah 8</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "12px 0 0" }}
                dangerouslySetInnerHTML={{ __html: "Six great currents run through the chapter, binding the birth of a child, the rising of a flood, and the choice between two waters into one unified message about where God&rsquo;s people place their trust." }}
              />
            </div>
            {THEMES.map(t => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <h3 style={{ color: t.color, fontWeight: 800, fontSize: 17, margin: "0 0 10px" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: t.body }} />
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse */}
        {activeTab === "verses" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: 0 }}>Verse by Verse Through Isaiah 8</h2>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "12px 0 0" }}
                dangerouslySetInnerHTML={{ __html: "Walk through the chapter in its movements, from the writing on the tablet to the thick darkness of those who reject the word, watching the name Immanuel surface again and again." }}
              />
            </div>
            {VERSES.map(v => (
              <div key={v.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
                  <span style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: v.color, fontWeight: 700 }}>{v.ref}</span>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 16, margin: 0 }}>{v.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.body }} />
              </div>
            ))}
          </div>
        )}

        {/* Application */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 14px" }}>Living in the Land of Immanuel</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 8 confronts the believer with the same fork in the road that faced Ahaz. Will we trust the quiet, unspectacular providence of God, the gentle waters of Shiloah, or will we grasp for the flooding river of human power that promises security and delivers ruin? The fear of man drives us to alliances and idols; the fear of the LORD frees us to rest. To sanctify Christ as Lord in our hearts is to let His holiness become both our refuge and our reverence." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter also presses on us the question of authority. When the surrounding culture offers a thousand voices that chirp and mutter, the believer is called to run &ldquo;to the law and to the testimony.&rdquo; Any spiritual claim that will not speak according to God&rsquo;s word, however confident or comforting, betrays that it &ldquo;has no dawn.&rdquo; Scripture remains the fixed standard, the morning light by which every competing voice is tested." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Finally, Isaiah teaches us how to wait. He hopes in a God who is hiding His face, binding up the testimony among a faithful remnant and trusting that the dawn will come. We live between the flood and the morning, called to be, with Isaiah, signs and portents in a watching world, pointing to the Christ who is Immanuel, God with us, the very Stone the builders rejected." }}
              />
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 19, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {REFLECTION.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, color: GOLD, fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Always-visible video section */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, margin: "0 0 8px" }}>Teaching Videos on Isaiah 8</h2>
          <p
            style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 640 }}
            dangerouslySetInnerHTML={{ __html: "Sermons and lectures unpacking the sign of Immanuel, the stone of stumbling, and the call to return to the law and the testimony." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {videoItems.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GOLD, fontWeight: 700, fontSize: 15, margin: 0, lineHeight: 1.4 }}>{v.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
