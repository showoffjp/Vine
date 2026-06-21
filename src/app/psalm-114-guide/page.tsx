"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 12, overflow: "hidden", border: `1px solid ${BORDER}` }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default function Psalm114Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", paddingTop: "var(--header-height, 80px)" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0a1f10 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 36px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: MUTED, marginBottom: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <span style={{ color: GREEN }}>Psalms</span>
            <span style={{ color: BORDER }}>{" > "}</span>
            Book V
            <span style={{ color: BORDER }}>{" > "}</span>
            Egyptian Hallel (113-118)
          </div>
          <h1 style={{ fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 700, margin: "0 0 14px", lineHeight: 1.2 }}>
            Psalm 114 &mdash; When Israel Went Out of Egypt
          </h1>
          <p style={{ color: MUTED, fontSize: 17, margin: "0 0 20px", lineHeight: 1.6 }}>
            The most vivid Exodus poem in the Psalter &mdash; the sea flees, Jordan turns back, mountains skip, and the earth trembles at God&rsquo;s presence
          </p>
          <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 16, margin: 0, color: TEXT, fontStyle: "italic", fontSize: 15 }}>
            &ldquo;Tremble, O earth, at the presence of the Lord, at the presence of the God of Jacob, who turns the rock into a pool of water.&rdquo; &mdash; Psalm 114:7-8
          </blockquote>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "14px 22px", background: "none", border: "none", cursor: "pointer",
                color: activeTab === tab ? GREEN : MUTED,
                borderBottom: activeTab === tab ? `2px solid ${GREEN}` : "2px solid transparent",
                fontFamily: "Georgia, serif", fontSize: 14, fontWeight: activeTab === tab ? 700 : 400,
                whiteSpace: "nowrap", transition: "color 0.2s"
              }}
            >{tab}</button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 24px 80px" }}>

        {/* -- OVERVIEW -- */}
        {activeTab === "Overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "28px 32px" }}>
              <h2 style={{ color: GREEN, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Overview</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Psalm 114 is one of the most artistically brilliant and theologically compressed poems in the entire Old Testament. In just eight verses, it recreates the entire Exodus experience with breathtaking vividness -- and does so not through historical narration but through personified nature. The sea flees. The Jordan turns back. Mountains skip like rams. Hills leap like lambs. And then, in the climactic question of verse 5: &ldquo;What ails you, O sea, that you flee? O Jordan, that you turn back?&rdquo; The natural world is interrogated about its own astonishing behavior, and the answer comes in verses 7-8: the earth trembles at the presence of the Lord." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The psalm is structured as two parallel stanzas followed by a climax. Stanza 1 (vv. 1-4) describes the Exodus event: Israel came out of Egypt, Judah became God's sanctuary, and the sea and Jordan responded by fleeing and turning back. Stanza 2 (vv. 5-6) pauses to interrogate nature directly: why did you flee? The climax (vv. 7-8) answers: at the presence of the Lord, the God of Jacob, who turns rock into water. The structure is chiastic and elegant: event, interrogation of event, explanation of event." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "What makes Psalm 114 extraordinary is its compression of the entire wilderness period into a single moment. The Red Sea crossing (Exodus 14) and the Jordan crossing (Joshua 3) are separated by forty years of history, but the psalm presents them as a single continuous act of divine salvation. The Exodus is not a series of events; it is one event: God bringing his people out of bondage and into the land. Time collapses before the unity of God's redemptive purpose." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The identification of Judah as God's &ldquo;sanctuary&rdquo; and Israel as his &ldquo;dominion&rdquo; (v. 2) is theologically profound. The dwelling place of God is not primarily a building (the tabernacle, the temple) but a people. The nation itself became holy space when God dwelled among them. Charles Spurgeon: &ldquo;When God is in the midst of a people, they are his holy place; the church is God's cathedral, the believer's heart is his temple, the family circle is his chancel.&rdquo; This anticipates the NT understanding of the church as the temple of the Holy Spirit (1 Corinthians 3:16)." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The personification of nature in Psalm 114 is not mere poetic device; it is a theological statement about the relationship between the Creator and his creation. When God acts in history, creation responds. The sea and Jordan do not merely permit Israel's crossing; they flee in terror before the one who made them. The mountains and hills do not merely stand aside; they leap with animation at his presence. Derek Kidner calls this &ldquo;the poetry of cosmic response to a personal God -- creation behaves as if it were alive because the one who made it alive is present.&rdquo;" }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The final image -- the rock turned into a pool of water, the flint into a spring of water (v. 8) -- recalls the wilderness provision at Meribah (Exodus 17:6; Numbers 20:11). Water from the rock is perhaps the most impossible miracle in the Exodus narrative: the transformation of the hardest, driest material into flowing water. Paul identifies the rock in 1 Corinthians 10:4 as Christ himself, who &ldquo;followed them, and the Rock was Christ.&rdquo; The living water that flows from stone becomes in the NT the living water that flows from the side of the crucified Christ (John 19:34; 7:37-39)." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: GREEN, fontSize: 17, fontWeight: 700, margin: "0 0 12px" }}>Key Details</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {[
                  ["Collection", "Egyptian Hallel (Psalms 113-118)"],
                  ["Length", "8 verses -- most compressed Hallel"],
                  ["Type", "Historical Hymn / Theophanic Poetry"],
                  ["Accent Color", "Green -- Exodus life and liberation"],
                  ["NT Fulfillment", "1 Cor. 10:4 -- Rock was Christ"],
                  ["Key Technique", "Personification of nature"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 8, padding: "12px 16px", border: `1px solid ${BORDER}` }}>
                    <div style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: GREEN, fontSize: 17, fontWeight: 700, margin: "0 0 14px" }}>The Three Miracles Recalled</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { event: "Sea Fled (v. 3)", ref: "Exodus 14:21-22", desc: "The Red Sea divided, Israel crossed on dry ground, Pharaoh's army drowned. The culminating act of liberation from Egypt." },
                  { event: "Jordan Turned Back (v. 3)", ref: "Joshua 3:14-17", desc: "The Jordan River stopped flowing when the priests' feet touched it. Israel entered the Promised Land. Forty years after the sea, the same God acts again." },
                  { event: "Rock Into Water (v. 8)", ref: "Exodus 17:6; Num. 20:11", desc: "God commanded Moses to strike the rock, and water flowed for the people. Paul identifies the rock as Christ (1 Cor. 10:4)." },
                ].map((e) => (
                  <div key={e.event} style={{ background: BG, borderRadius: 8, padding: "12px 16px", border: `1px solid ${BORDER}`, display: "flex", gap: 14 }}>
                    <div style={{ minWidth: 140 }}>
                      <div style={{ color: GREEN, fontSize: 13, fontWeight: 700 }}>{e.event}</div>
                      <div style={{ color: MUTED, fontSize: 11 }}>{e.ref}</div>
                    </div>
                    <p style={{ color: TEXT, fontSize: 14, margin: 0, lineHeight: 1.6 }}>{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <VideoEmbed videoId="r0bpQ3yoUdM" title="Psalm 114 -- When Israel Went Out of Egypt" />
          </div>
        )}

        {/* -- THEMES -- */}
        {activeTab === "Themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              {
                color: GREEN,
                title: "The Exodus as the Paradigm of All Salvation",
                refs: "Psalm 114:1-2; Isaiah 43:14-21; Luke 9:31; 1 Corinthians 10:1-11",
                body: `Psalm 114 opens in medias res: "When Israel went out from Egypt, the house of Jacob from a people of strange language" (v. 1). There is no preamble, no introduction -- the reader is immediately placed within the event. This is because the Exodus was not merely a historical episode for Israel; it was the foundational event that defined everything else. "I am the LORD your God who brought you out of Egypt" (Exodus 20:2) is the preamble to the entire covenant. Israel's identity, their law, their worship, their hope -- all of it flows from this one act of divine liberation.

The phrase "a people of strange language" is striking. Egypt is characterized not by its power (which was enormous) but by its linguistic foreignness. Israel could not communicate with their masters. The Exodus is liberation from alienation -- from being strangers in a land where one's voice cannot be understood. This resonates throughout Scripture as a metaphor for the human condition under sin: alienated from God, unable to communicate, living as foreigners in a world that does not know its Creator.

The NT explicitly reads the Exodus as paradigm for Christian salvation. Luke 9:31 uses "exodus" (the Greek word) to describe what Jesus would accomplish in Jerusalem -- his death and resurrection are the new Exodus, the greater liberation. Paul in 1 Corinthians 10:1-11 interprets the wilderness events as "types" (tupoi) for Christian experience: the cloud and sea as baptism, the manna and water as spiritual food and drink, the Rock as Christ. The Exodus is not background noise; it is the template that all subsequent salvation follows.

Isaiah repeatedly uses Exodus language for the return from Babylonian exile and the coming messianic age: "Remember not the former things... I am doing a new thing" (43:18-19), but the "new thing" is another crossing of the sea, another march through the wilderness. The pattern established in Psalm 114 -- God liberating his people from a foreign power through miraculous transformation of nature -- is the pattern of redemption itself.`,
              },
              {
                color: TEAL,
                title: "Judah as God's Sanctuary: The People as Holy Space",
                refs: "Psalm 114:2; 1 Corinthians 3:16; Ephesians 2:19-22; 1 Peter 2:5",
                body: `Verse 2 contains one of the most theologically rich statements in the Hallel: "Judah became his sanctuary, Israel his dominion." The sanctuary -- the miqdash -- was the holy place where God dwelled, first the tabernacle and later the temple. But here, the sanctuary is not a building; it is a people. When Israel came out of Egypt and God dwelled among them, they themselves became the holy space. The whole nation was the place of divine presence.

This is a radical reconfiguration of the idea of sacred space. In surrounding cultures, holiness was located in special buildings, shrines, and cult sites. In Israel's Exodus experience, holiness was located in the community of redeemed people who carried the presence of God with them through the wilderness. The tabernacle was portable because the sanctuary was mobile: wherever God's people were, God was present among them.

The NT fulfillment is explicit and repeated. Paul in 1 Corinthians 3:16: "Do you not know that you are God's temple and that God's Spirit dwells in you?" Ephesians 2:21-22: "In him the whole structure, being joined together, grows into a holy temple in the Lord. In him you also are being built together into a dwelling place for God by the Spirit." Peter: "You yourselves like living stones are being built up as a spiritual house" (1 Peter 2:5). The people of God are the new sanctuary -- the portable, personal, communal dwelling place of the divine presence.

This is why the destruction of the Jerusalem temple in 70 AD, while historically catastrophic for Judaism, was not a theological crisis for the church: the true sanctuary was never the building but the people. And conversely, this is why the health of Christian community matters enormously: the people of God are where God lives. Their love, unity, and holiness are not merely ethical matters but theological ones -- they are the condition of the sanctuary.`,
              },
              {
                color: ROSE,
                title: "Creation's Response to the Creator's Presence",
                refs: "Psalm 114:3-6; Habakkuk 3:10; Mark 4:39-41; Romans 8:19-22",
                body: `The personification of nature in Psalm 114 is not decorative but theological. The sea "saw it and fled" (v. 3), the Jordan "turned back" (v. 3), the mountains "skipped like rams" and the hills "like lambs" (v. 4). In verses 5-6, the psalmist interrogates nature directly: "What ails you, O sea, that you flee? O Jordan, that you turn back? O mountains, that you skip like rams? O hills, like lambs?" The creation is imagined as living, responsive, sentient before the presence of its Maker.

This is not primitive animism but sophisticated theology. Creation is not divine (that would be pantheism), but creation is responsive to the divine. When God appears, created things respond as creatures before their Creator -- in fear, in motion, in submission. Habakkuk 3:10 describes the same phenomenon: "The mountains saw you and writhed; the raging waters swept on." Nahum 1:5: "The mountains quake before him; the hills melt; the earth heaves before him, the world and all who dwell in it."

The NT exhibits the same pattern. When Jesus rebukes the storm (Mark 4:39), the sea obeys him -- exactly as it obeyed God at the Exodus. The question the disciples ask -- "Who then is this, that even the wind and sea obey him?" (4:41) -- is answered by Psalm 114: this is the one at whose presence the sea fled in the Exodus. Creation recognizes its Creator.

Romans 8:19-22 adds eschatological dimension: "The creation waits with eager longing for the revealing of the sons of God... the creation itself will be set free from its bondage to corruption." Creation is not passive; it groans, it waits, it longs. The sea that fled in the Exodus and the mountains that skipped for joy are images of a creation that is not indifferent to God's purposes but is actively involved in them -- and awaits the final liberation when the God who parted seas will make all things new.`,
              },
              {
                color: GOLD,
                title: "The Rock Turned to Water: Christ the Living Spring",
                refs: "Psalm 114:8; Exodus 17:1-7; Numbers 20:1-13; 1 Corinthians 10:4; John 7:37-39",
                body: `The final image of Psalm 114 is both the most poetic and the most theologically freighted: "who turns the rock into a pool of water, the flint into a spring of water" (v. 8). The rock in the wilderness that yielded water when struck is one of the most widely interpreted miracles in the OT. The rabbis debated whether it was a literal rock that traveled with Israel or a series of rocks. Paul, without hesitation, identifies the rock as Christ: "They drank from the spiritual Rock that followed them, and the Rock was Christ" (1 Corinthians 10:4).

This is a startling claim. Paul is not merely saying that the rock pointed to Christ or symbolized Christ; he is asserting that Christ was present in the wilderness, the source of the miraculous water, personally accompanying Israel through the desert. The pre-incarnate Son of God was the Rock from which living water flowed. The Exodus miracles were not merely demonstrations of divine power; they were Christological events.

Jesus himself takes up this identification in John 7:37-39: "If anyone thirsts, let him come to me and drink. Whoever believes in me, as the Scripture has said, 'Out of his heart will flow rivers of living water.'" He spoke this on the last day of the Feast of Tabernacles, when the water-drawing ceremony commemorated the water from the rock. Jesus is the new Rock, the permanent spring of living water, the fulfillment of what the wilderness Rock foreshadowed.

The image of the rock turned to water is also a picture of the gospel: the hardest, most unyielding material (human sin, human death, human impossibility) becomes, under the creative power of God, the source of life. The gospel does not work on easy material; it works on rock -- on the hardest cases, the most calcified hearts, the most dried-up souls. And it produces not a trickle but a spring, a pool, "rivers of living water."`,
              },
              {
                color: PURPLE,
                title: "Tremble, O Earth: Holy Fear as Appropriate Response",
                refs: "Psalm 114:7; Isaiah 66:2; Hebrews 12:18-29; Philippians 2:12",
                body: `The climax of Psalm 114 is a command addressed to creation itself: "Tremble, O earth, at the presence of the Lord, at the presence of the God of Jacob." This is the key that unlocks the whole psalm. The sea fled and Jordan turned back not because water is inherently unstable but because the God of Jacob was present. Creation trembles at the presence of its Creator.

Holy fear -- the trembling that attends the encounter with the holy God -- is one of the most important and most neglected dimensions of biblical worship. Isaiah 66:2: "But this is the one to whom I will look: he who is humble and contrite in spirit and trembles at my word." Hebrews 12 describes the Sinai theophany -- fire and darkness and storm and the sound of the trumpet and words that made the hearers beg that no further words be spoken (12:18-21) -- and then adds: "see that you do not refuse him who is speaking" (12:25). The God who made mountains shake at Sinai is the God we approach in worship.

Paul's "work out your own salvation with fear and trembling" (Philippians 2:12) is not morbid anxiety but appropriate seriousness before the one who is working in us. The fear of God in Scripture is not terror but reverence -- the recognition that one is in the presence of a Being of infinite holiness and power before whom flippancy is inappropriate and self-sufficiency is impossible.

Psalm 114's command to the earth to tremble is an invitation for the worshippers to do the same. When we come to worship, we come into the presence of the God at whose presence the sea fled and the mountains skipped. The songs should not be merely pleasant; they should carry the weight of encounter with the Holy. The prayer should not be casual; it should be the address of a creature to its Creator. "Tremble, O earth" is the posture of genuine worship.`,
              },
            ].map((theme) => (
              <div key={theme.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
                <div style={{ color: theme.color, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Theme</div>
                <h3 style={{ color: TEXT, fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>{theme.title}</h3>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{theme.refs}</div>
                {theme.body.split("\n\n").map((p, i) => (
                  <p key={i} style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 14px" }}
                    dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            ))}
          </div>
        )}

        {/* -- VERSE BY VERSE -- */}
        {activeTab === "Verse by Verse" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 28px" }}>
              <h2 style={{ color: GREEN, fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>Verse by Verse Commentary</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Psalm 114 -- 8 verses: event, interrogation, explanation</p>
            </div>
            {[
              { v: "1-2", ref: "Israel's Exodus: The People as Sanctuary", color: GREEN, text: "\"When Israel went out from Egypt, the house of Jacob from a people of strange language, Judah became his sanctuary, Israel his dominion.\" The psalm opens without preamble -- in the middle of the event. Egypt is characterized only as &ldquo;a people of strange language,&rdquo; emphasizing alienation. The designation of Judah as God's &ldquo;sanctuary&rdquo; (miqdash) is startling: the holy space is not a building but a people. This anticipates the NT understanding of the church as God's temple (1 Cor. 3:16). &ldquo;His dominion&rdquo; parallels sanctuary -- the people are both the place of God's dwelling and the realm of his rule. Spurgeon: &ldquo;What a high honor! To be God's temple is to be the meeting place between heaven and earth.&rdquo;" },
              { v: "3-4", ref: "Nature Responds: Sea, Jordan, Mountains", color: TEAL, text: "\"The sea looked and fled; Jordan turned back. The mountains skipped like rams, the hills like lambs.\" The past tense narrative suddenly explodes into vivid personification. The sea &ldquo;saw&rdquo; -- it had eyes; it &ldquo;fled&rdquo; -- it ran in panic. Jordan &ldquo;turned back&rdquo; -- it reversed its direction. Mountains &ldquo;skipped like rams&rdquo; and hills &ldquo;like lambs&rdquo; -- the most solid elements of creation danced with animation. The RAM and LAMB imagery is both joyful and sacrificial, evoking both the energy of young animals at play and the Passover lamb. All of creation participates in the Exodus event. Kidner: &ldquo;The sea and Jordan are treated as one event -- forty years are compressed into a single act of God.&rdquo;" },
              { v: "5-6", ref: "The Great Interrogation", color: GOLD, text: "\"What ails you, O sea, that you flee? O Jordan, that you turn back? O mountains, that you skip like rams? O hills, like lambs?\" The psalm pivots to direct address of creation. The psalmist interrogates the sea, the Jordan, the mountains, and the hills: why did you behave this way? The question is rhetorical -- the answer is about to come -- but it is also playful and ironic. The sea that Pharaoh considered a wall to trap Israel turned out to be the sea that fled from God. The Jordan that blocked entry to Canaan turned back. The question humanizes creation and invites the reader to share the astonishment: what made these great forces of nature behave so strangely? Only one answer is adequate." },
              { v: "7-8", ref: "The Explanation: Tremble Before the Lord", color: GREEN, text: "\"Tremble, O earth, at the presence of the Lord, at the presence of the God of Jacob, who turns the rock into a pool of water, the flint into a spring of water.\" The climactic answer arrives as a command: tremble before the Lord. The &ldquo;presence of the Lord&rdquo; (&ldquo;before the face of&rdquo; in Hebrew) is the explanation for all the cosmic behavior. The sea fled because the Lord was there. Jordan turned back because the Lord was there. Mountains skipped because the Lord was there. The last image -- rock into water -- is the most impossible of the miracles, yet the most intimate: God provides for his thirsty people from the hardest material available. Paul: &ldquo;the Rock was Christ&rdquo; (1 Cor. 10:4). The presence that makes mountains shake is also the presence that opens springs in the desert." },
            ].map((item) => (
              <div key={item.v} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ background: item.color, color: "#fff", borderRadius: 6, padding: "4px 10px", fontSize: 13, fontWeight: 700, minWidth: 36, textAlign: "center", flexShrink: 0 }}>
                    {item.v}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: item.color, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>{item.ref}</div>
                    <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontSize: 15 }}
                      dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* -- APPLICATION -- */}
        {activeTab === "Application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h2 style={{ color: GREEN, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Living Psalm 114 Today</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 114's eight verses contain a theology of creation, presence, liberation, and provision that reaches from the Exodus to the new creation. It calls us to see our lives within the framework of a God whose presence makes seas flee and rocks flow with water." }} />
            </div>

            {[
              {
                color: GREEN,
                title: "1. Read Your Story Within the Exodus Story",
                body: `Psalm 114 does not treat the Exodus as ancient history but as present reality -- the psalm compresses forty years of wilderness wandering into a single moment, making the events immediate and vivid. The NT teaches us to read our story in the same way. Paul calls the Exodus events "types" (tupoi) for Christian experience (1 Cor. 10:1-11): the crossing of the sea is our baptism, the manna is our spiritual food, the rock-water is Christ.

To "read your story within the Exodus story" is a spiritual discipline. When you face what seems like an uncrossable sea -- a situation where there is no natural way through -- the Exodus becomes your precedent: "the sea looked and fled" at the presence of God. When you are blocked by a Jordan that seems to prevent you from entering what God has promised, the Exodus becomes your precedent: "Jordan turned back." These are not guarantees of identical miracles but theological claims about the character of the God who acts in your life as he acted in Israel's.

Practically: when you face an impossible situation, ask: "What is the Exodus equivalent in my life right now?" Name the sea that needs to flee, the Jordan that needs to turn back. Then pray from the character of the God who has already acted in this way once -- and has repeated it countless times since in the lives of his people.`,
                prayer: "Lord, I am standing before a sea that needs to flee. At your presence, the impossible becomes possible. I trust not in my own strength to cross but in your presence, before which the sea itself flees.",
              },
              {
                color: TEAL,
                title: "2. Live as a Member of God's Sanctuary",
                body: `Psalm 114:2 declares that Judah became God's sanctuary -- the holy space of divine presence -- not because of their righteousness but because God chose to dwell among them. This was an act of pure grace. And it transformed their identity: they were not merely a wandering tribe in the desert; they were holy space, the dwelling of the Most High.

The NT calls the church "God's temple" (1 Cor. 3:16), "a dwelling place for God by the Spirit" (Eph. 2:22), "a royal priesthood, a holy nation, a people for his own possession" (1 Peter 2:9). These are not merely titles; they are identity-forming claims that should shape daily life. If the community of believers is the sanctuary -- the place where God dwells -- then how members treat each other, how they welcome outsiders, how they practice love and truth matters enormously. You are not merely a person attending a church; you are a member of the living temple.

Practically: when you gather for worship, remind yourself: this gathering is God's sanctuary. The person next to you, whatever their appearance, is a living stone in God's temple. The quality of the community -- its love, its truth, its hospitality -- is the quality of the holy space. "You are being built together into a dwelling place for God by the Spirit" (Eph. 2:22). Build accordingly.`,
                prayer: "Lord, let me live as one who knows I am part of your sanctuary. Let my relationships in the church be worthy of the holy space you have made us. Make our community a place where your presence is felt.",
              },
              {
                color: GOLD,
                title: "3. Drink from the Rock Who Is Christ",
                body: `The water from the rock in verse 8 is, according to Paul, a type of Christ (1 Cor. 10:4). The Rock that followed Israel through the wilderness, yielding water on command, was the pre-incarnate Christ himself. This means that the same Jesus who died on the cross was present with Israel in the wilderness, sustaining them with supernatural provision.

John 7:37-39 is the NT fulfillment: Jesus on the last and greatest day of the Feast of Tabernacles -- which included the water-drawing ceremony commemorating the Meribah miracle -- stands up and cries, "If anyone thirsts, let him come to me and drink." He is the new Rock. The water that flows from him is the Holy Spirit. Every believer who receives the Spirit becomes a spring from whom rivers of living water flow.

This has direct application to spiritual dryness. When your devotional life feels like a rock -- hard, dry, unyielding -- the answer is not to manufacture feeling but to drink from the Rock. Come to Christ in the Word, in prayer, in the sacraments, in community. The same power that struck the rock in the wilderness and opened a spring is the power available in your desert moments. "My soul thirsts for God, for the living God" (Psalm 42:2) -- and Christ is the spring that answers that thirst.`,
                prayer: "Lord Jesus, Rock of Ages, I am thirsty. I come to you not to the dry rock of my own effort but to the living spring you alone are. Pour out your Spirit. Let rivers of living water flow where there has been only dryness.",
              },
              {
                color: PURPLE,
                title: "4. Cultivate Holy Fear Before the Presence of God",
                body: `Psalm 114's climax -- "Tremble, O earth, at the presence of the Lord" -- is an invitation to the worshipper to share creation's posture. The same God at whose presence the sea fled and the mountains skipped is the God we approach in prayer and worship. The appropriate response is not casualness but trembling -- not terror, but reverence.

Hebrews 12 draws out this application explicitly, contrasting the terrifying Sinai theophany with the new covenant access to "Mount Zion and to the city of the living God." But the conclusion is not that we approach with less seriousness but more: "Therefore let us be grateful for receiving a kingdom that cannot be shaken, and thus let us offer to God acceptable worship, with reverence and awe, for our God is a consuming fire" (12:28-29). The God who made the mountains skip has not changed in character; only our access to him has been transformed by Christ.

Practically: if your prayer life has become routine and casual, bring Psalm 114 into it. Read verses 3-8 before you begin. Let the God who makes seas flee be the God you are addressing. Not to manufacture fear, but to remember who is actually present. The presence that moved mountains is present in your prayer. The trembling that is appropriate for creation is appropriate for creatures. Come with reverence, and discover that the God before whom the earth trembles is also the God who turns the hardest rock into a flowing spring.`,
                prayer: "Lord, I confess that I often come to you with too little reverence. You are the God before whose presence the sea flees and mountains skip. Teach me to tremble with holy fear, and discover that the same presence that shakes the earth is the presence that gives living water to the thirsty.",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
                <div style={{ color: item.color, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Application</div>
                <h3 style={{ color: TEXT, fontSize: 19, fontWeight: 700, margin: "0 0 14px" }}>{item.title}</h3>
                {item.body.split("\n\n").map((p, i) => (
                  <p key={i} style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 14px" }}
                    dangerouslySetInnerHTML={{ __html: p }} />
                ))}
                <div style={{ background: BG, border: `1px solid ${item.color}33`, borderRadius: 8, padding: "14px 18px", marginTop: 8 }}>
                  <div style={{ color: item.color, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Prayer</div>
                  <p style={{ color: MUTED, fontStyle: "italic", margin: 0, lineHeight: 1.7, fontSize: 14 }}
                    dangerouslySetInnerHTML={{ __html: item.prayer }} />
                </div>
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px", textAlign: "center" }}>
              <p style={{ color: MUTED, fontStyle: "italic", fontSize: 15, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Tremble, O earth, at the presence of the Lord, at the presence of the God of Jacob, who turns the rock into a pool of water.&rdquo;<br/>Psalm 114:7-8" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
