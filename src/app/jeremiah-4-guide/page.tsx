"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const RED = "#EF4444", BLUE = "#3B82F6";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const VERSE_SECTIONS = [
  {
    id: "v1",
    ref: "Jer 4:1-4",
    color: PURPLE,
    title: "Return to Me -- Circumcise Your Hearts",
    body: "The chapter opens with God's conditional promise: if Israel will return, certain things must happen. Putting away abominations. Swearing by the living God in truth, justice, and righteousness. The conditions are not onerous ceremonies; they are descriptions of genuine conversion. Then comes the great command: &ldquo;Circumcise yourselves to the LORD; remove the foreskin of your hearts, O men of Judah and inhabitants of Jerusalem; lest my wrath go forth like fire, and burn with none to quench it&rdquo; (4:4). Physical circumcision was the sign of the covenant, cutting the flesh as an outward mark of belonging. Here God demands the inward reality the outward sign was always meant to point toward. The foreskin of the heart is whatever hardens it against God&mdash;the pride, the stubbornness, the religious performance that substitutes for transformation. Paul picks up this exact language in Romans 2:28-29: a true Jew is one inwardly, and circumcision is a matter of the heart. Jesus's call to be &ldquo;pure in heart&rdquo; (Matt 5:8) stands in this same tradition.",
  },
  {
    id: "v2",
    ref: "Jer 4:5-10",
    color: RED,
    title: "Blow the Trumpet -- Evil from the North",
    body: "The scene shifts abruptly from intimacy to alarm. Blow the trumpet! Raise the signal! Flee to the fortified cities! A lion has come up from his thicket; a destroyer of nations has set out. The language is military and catastrophic. The foe from the north&mdash;which the reader will come to understand as Babylon under Nebuchadnezzar&mdash;is approaching like a destroying wind. The signal is raised in Zion (4:6); the divine determination is stated plainly: &ldquo;Disaster from the north, and great destruction&rdquo; (4:6). Scholars debate the original identity of the foe: some see a reference to Scythian raiders, others see it as always pointing to Babylon. What is clear is that the enemy comes as the instrument of divine judgment on a people who have refused to repent. Verse 10 contains one of the most startling moments in the chapter: Jeremiah himself protests, &ldquo;Ah, LORD God, surely you have utterly deceived this people and Jerusalem, saying, It shall be well with you, while the sword reaches to the very soul.&rdquo; Jeremiah is devastated by what he must say&mdash;and he accuses God of complicity in the people's misplaced hope. This is not rebellion; it is the interceding prophet in anguish.",
  },
  {
    id: "v3",
    ref: "Jer 4:11-18",
    color: GOLD,
    title: "The Hot Wind -- Not to Winnow but to Judge",
    body: "A scorching east wind from the desert&mdash;too hot to fan or cleanse the grain&mdash;is the metaphor God uses to describe what is coming. The sirocco wind from the Arabian desert was not a winnowing breeze that separated wheat from chaff; it destroyed everything. This wind is sent against &ldquo;the daughter of my people&rdquo;&mdash;a term of deep intimacy and grief. Even in judgment, God speaks of Israel as his daughter. The destroyers are described like troops rising from Dan and Ephraim, besiegers announcing themselves against Jerusalem. The city is surrounded. And the reason is stated with devastating clarity: &ldquo;Your ways and your deeds have brought this upon you&rdquo; (4:18). Judgment is not arbitrary; it is the harvest of what Israel herself planted. The hot wind is not foreign to the logic of the covenant. Israel knew. The prophets had warned. The consequences of turning from the living God were spelled out in Deuteronomy. Now they arrive. There is something tragic in verse 18's final phrase: &ldquo;this is your doom, and it is bitter; it has reached your very heart.&rdquo; The wound is inward. The punishment matches the sin: a hard heart is met with a bitter fate.",
  },
  {
    id: "v4",
    ref: "Jer 4:19-22",
    color: TEAL,
    title: "Jeremiah's Anguish -- Bowels in Pain",
    body: "Here the prophet's own voice breaks through with raw, physical grief. &ldquo;My anguish, my anguish! I writhe in pain! Oh the walls of my heart! My heart is beating wildly; I cannot keep silent&rdquo; (4:19). The Hebrew word for &ldquo;anguish&rdquo; here (me'ay) refers to the bowels or inner organs&mdash;the ancients located deep emotion in the gut. Jeremiah is not speaking metaphorically about mild sadness. He is physically ill with grief over what he sees coming upon his people. This passage is crucial for understanding Jeremiah's prophetic identity. He is not a cold pronouncer of doom who stands aloof from the suffering he describes. He is the prophet who weeps with God. Jeremiah so identifies with God's own grief over Israel that his body participates in the announcement. The devastation he sees in vision&mdash;tents destroyed, curtains torn, standard fallen, trumpet heard&mdash;is not distant to him. Then God's voice interprets: &ldquo;For my people are foolish; they know me not&rdquo; (4:22). The root of the catastrophe is not political but theological. Israel does not know God. They are skilled in doing evil, but they do not know how to do good. Ignorance of God produces moral inversion.",
  },
  {
    id: "v5",
    ref: "Jer 4:23-26",
    color: BLUE,
    title: "Tohu Wabohu -- Creation Collapsing",
    body: "This is one of the most theologically extraordinary passages in the entire Old Testament. Jeremiah looks at the land and what he sees is a reversal of creation. &ldquo;I looked on the earth, and behold, it was without form and void (tohu wabohu); and to the heavens, and they had no light&rdquo; (4:23). The phrase tohu wabohu appears only twice in the Hebrew Bible: here in Jeremiah 4:23 and in Genesis 1:2, where it describes the formless, empty state of the earth before God spoke order into it. By using these exact words, Jeremiah signals something terrifying: covenant breaking by Israel is not merely a political or moral failure. It is a threat to creation itself. God's covenant with Israel was embedded in his purposes for the whole created order. When Israel breaks covenant, the unraveling is cosmic. Mountains quake and hills move. No birds are in the air&mdash;birds were one of the first creatures God called into existence (Gen 1:20). The fruitful land has become a desert (4:26). Cities are fallen before the LORD. This is creation undone. The echoes of Genesis 1 are deliberate and devastating: light, birds, fruitful land&mdash;all of it reverses. The language of chaos precedes the divine word of order in Genesis; here chaos returns because the people who were meant to embody God's covenant order have refused it.",
  },
  {
    id: "v6",
    ref: "Jer 4:27-31",
    color: GREEN,
    title: "Not a Full End -- Daughter Zion's Desperate Beautifying",
    body: "God's determination is stated, but mercy limits it: &ldquo;For this the earth shall mourn, and the heavens above be dark; for I have spoken; I have purposed; I have not relented, nor will I turn back&rdquo; (4:28). The judgment is coming and it is not being revoked. Yet a caveat is embedded: &ldquo;Yet I will not make a full end&rdquo; (4:27). This phrase will recur in Jeremiah like a theological heartbeat. God's wrath is real, but it does not have the last word. Even in the furnace of judgment, a remnant remains. Then comes one of the most haunting images in the chapter: &ldquo;And you, O desolate one, what do you mean that you dress in scarlet, that you adorn yourself with ornaments of gold, that you enlarge your eyes with paint? In vain you beautify yourself. Your lovers despise you; they seek your life&rdquo; (4:30). Jerusalem is personified as a woman who, facing military devastation, responds by putting on jewelry and eye makeup&mdash;as if the approaching conqueror can be seduced. The image captures the tragic futility of trusting in anything other than God. Political alliances, external beauty, religious performance: all of these are Daughter Zion's adornments. And none of them will save her. The chapter ends with her cry in labor pain (4:31)&mdash;a cry of anguish, not of birth. Zion is gasping, stretching out her hands, dying.",
  },
];

const THEME_SECTIONS = [
  {
    id: "t1",
    color: PURPLE,
    title: "Heart Circumcision vs. Physical Circumcision",
    body: "The command to &ldquo;circumcise your heart&rdquo; (4:4) is one of the most significant theological developments in the entire Old Testament. Physical circumcision was given to Abraham as the sign of the covenant (Gen 17). Every male Israelite bore it as a mark of belonging to the covenant people. But belonging to the community of the covenant was never meant to substitute for belonging to the God of the covenant. Jeremiah 4:4 makes explicit what Deuteronomy 10:16 had already said: what God wants is the heart. The outer sign must correspond to an inner reality&mdash;genuine love, genuine trust, genuine turning away from idols. This theme runs like a thread through the entire prophetic tradition. Isaiah 1:11-17 dismisses sacrifices without righteousness. Hosea 6:6 insists that God desires steadfast love and not sacrifice. Jesus in Mark 7:6 quotes Isaiah on people who honor God with their lips while their hearts are far from him. The New Testament picks up Jeremiah's own promise (31:33) that the new covenant will involve God writing his law on the heart&mdash;the full realization of the heart circumcision called for in chapter 4.",
  },
  {
    id: "t2",
    color: RED,
    title: "Genuine Repentance vs. Superficial Reform",
    body: "The conditions stated at the opening of Jeremiah 4 are not ritual requirements but moral and relational ones. If you return, O Israel, return to me; if you remove your detestable things from my presence (4:1). The call is not to perform additional religious duties but to genuinely remove what has displaced God from the center of life. This is the consistent prophetic critique of external-only religion. Josiah's reform (2 Kings 22-23) had removed the high places and destroyed the idols. But it had not touched the hearts of the people. Externally they could conform; internally they had not turned. Jeremiah saw through the reform to the unchanged heart beneath it. The repeated calls to repentance in Jeremiah (3:12-14, 3:22, 4:1-4) are urgent and conditional&mdash;they leave open the possibility of genuine turning&mdash;but they are also realistic about what kind of turning God actually requires. Superficial reform produces temporary compliance. Heart circumcision produces lasting transformation.",
  },
  {
    id: "t3",
    color: GOLD,
    title: "The Foe from the North",
    body: "The foe from the north is one of Jeremiah's most prominent motifs, appearing also in chapters 1, 6, 10, and 13. The north was the direction from which enemies typically entered Canaan, since direct east-west approaches were blocked by desert. The specific identity of the foe evolves in the book&mdash;by chapter 25 it is unambiguously Babylon under Nebuchadnezzar. But in chapter 4 the description is still vivid and somewhat general: a lion, a destroyer of nations, a charioteer and horseman, a scorching wind. The ambiguity may be intentional. The foe from the north is not merely a historical army; it is the instrument of divine justice against covenant-breaking Israel. Whatever political form it takes in history, its coming is theologically comprehensible only in terms of God's response to Israel's persistent rejection. This also means the foe from the north is, paradoxically, under God's sovereignty even while being humanity's worst nightmare. Babylon does not arrive as God's rival; it arrives as God's rod (cf. Isa 10:5 on Assyria as &ldquo;the rod of my anger&rdquo;).",
  },
  {
    id: "t4",
    color: TEAL,
    title: "Creation Undone -- Consequences of Covenant Breaking",
    body: "The tohu wabohu of 4:23 is not merely rhetorical exaggeration. For Jeremiah and the wider biblical tradition, the created order was sustained by the moral order of the covenant. When Israel walked with God, they participated in the flourishing of the land. Deuteronomy 28 had spelled this out with precision: obedience to the covenant brought rain, fruitfulness, and abundance; covenant breaking brought drought, blight, and exile. The prophets consistently connect moral failure with ecological and cosmic consequences. Hosea 4:1-3 states that because there is no faithfulness, love, or knowledge of God in the land, &ldquo;the land mourns, and all who dwell in it languish; the beasts of the field and the birds of the heavens, and even the fish of the sea are taken away.&rdquo; In Jeremiah 4, the language of tohu wabohu elevates this to the level of creation theology. Covenant faithfulness is not just a private matter between individuals and God. It is cosmically significant. The world was made for shalom; when humans refuse the moral order that makes shalom possible, the creation groans under the weight of that refusal.",
  },
  {
    id: "t5",
    color: BLUE,
    title: "The Prophet's Anguish -- Sharing God's Grief",
    body: "Jeremiah 4:19-22 is one of the earliest and most intense examples of what scholars call the &ldquo;confessions of Jeremiah&rdquo;&mdash;passages where the prophet's inner life is exposed with unusual directness. Jeremiah is not emotionally detached from the message he carries. He writhes in pain (4:19). He cannot keep silent. His heart beats wildly. This is significant not just as a biographical detail but as a theological one. Jeremiah is not merely a messenger delivering bad news with professional neutrality. He participates in God's own grief over Israel. Ezekiel 18:23 and 33:11 insist that God takes no pleasure in the death of the wicked. The divine grief over Israel's destruction is real. Jeremiah embodies that grief in his person. He is the weeping prophet not because he is emotionally fragile but because he is close enough to God's heart to feel what God feels. This is a model of prophetic ministry that shapes the entire biblical canon: the true prophet does not simply announce judgment from a distance but carries the burden of it in his body.",
  },
  {
    id: "t6",
    color: GREEN,
    title: "Divine Wrath with Mercy -- Not a Full End",
    body: "The phrase &ldquo;yet I will not make a full end&rdquo; (4:27) is among the most important theological modifiers in the book of Jeremiah. The judgment announced in chapter 4 is real, imminent, and devastating. It is not softened or walked back. But it is bounded. God will not annihilate Israel. He will not unmake the covenant permanently. The wrath of God in the Old Testament is never the final word; it is always bounded by the faithfulness of God to his promises. This sets up the extraordinary hope passages later in Jeremiah: the new covenant (31:31-34), the restoration of the exiles (29:10-14), the future of Rachel's children (31:15-17). The mercy that says &ldquo;not a full end&rdquo; in chapter 4 eventually becomes the mercy that says &ldquo;I will forgive their iniquity, and I will remember their sin no more&rdquo; (31:34). Daughter Zion's desperate beautifying (4:30) is contrasted implicitly with what the new covenant will actually provide: a heart transformation that makes outward adornment irrelevant. God himself will provide what Zion cannot.",
  },
];

export default function Jeremiah4GuidePage() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const videoItems = [
    { id: "Vb9a0XYe8h8", title: "Jeremiah 4: Circumcise Your Hearts (Verse by Verse)" },
    { id: "q2m8j8LQXJM", title: "The Foe from the North -- Jeremiah 4 Explained" },
    { id: "WxL8CBRW3xk", title: "Tohu Wabohu -- Creation Undone in Jeremiah 4" },
    { id: "JuFbpBFN1aA", title: "Heart Circumcision in Jeremiah 4 -- Bible Study" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${PURPLE}22, ${GREEN}22)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Major Prophets &middot; OT</div>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem", margin: "0 0 1rem" }}>Jeremiah 4: Circumcise Your Hearts</h1>
        <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.7 }}>
          God&apos;s urgent summons to true repentance&mdash;not outward ritual but inward transformation&mdash;intertwined with a terrifying vision of the earth returning to formless void as the destroyer approaches from the north.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "1.5rem 1rem", flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "0.5rem 1.2rem",
              borderRadius: 999,
              border: `1px solid ${tab === t ? GREEN : BORDER}`,
              background: tab === t ? GREEN : "transparent",
              color: tab === t ? "#fff" : MUTED,
              cursor: "pointer",
              fontWeight: tab === t ? 700 : 400,
              fontSize: 14,
            }}
          >
            {TAB_LABELS[t]}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 4rem" }}>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 22, margin: "0 0 16px" }}>The Chapter at a Glance</h2>
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Jeremiah 4 is one of the most theologically dense chapters in the entire prophetic canon. It opens with an intimate and urgent call to return (4:1&ndash;4), moves to apocalyptic military alarm (4:5&ndash;18), breaks open with Jeremiah&apos;s own anguished lament (4:19&ndash;22), reaches a terrifying vision of uncreation (4:23&ndash;26), and closes with the bounded mercy of a God who will not make a &ldquo;full end&rdquo; (4:27&ndash;31). The chapter is not a random collection of oracles. It is a carefully structured theological argument about the relationship between inner transformation and cosmic order&mdash;and what happens when that transformation is refused." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The central command&mdash;&ldquo;Circumcise yourselves to the LORD; remove the foreskin of your hearts&rdquo; (4:4)&mdash;is not a metaphor chosen for rhetorical effect. Physical circumcision was the foundational sign of the Abrahamic covenant (Gen 17). Every male Israelite bore it as the mark of belonging. Jeremiah is not abolishing the sign; he is insisting that the sign must correspond to a reality. The foreskin of the heart is the hardness, the self-enclosure, the refusal to be opened and changed by God. Without its removal, all religious observance is hollow." }}
              />
              <p
                style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "What makes chapter 4 so theologically extraordinary is the vision in verses 23&ndash;26. Jeremiah sees the land in a state described by the Hebrew phrase <em>tohu wabohu</em>&mdash;formless and void. This exact phrase appears only one other time in the entire Hebrew Bible: Genesis 1:2, describing the earth before God's creative word brought order. Jeremiah is not merely announcing military defeat. He is announcing that covenant-breaking has cosmological consequences. The created order itself begins to come undone when the moral order embedded in the covenant is violated. Mountains quake. Light disappears. Birds vanish. The fruitful land becomes desert. This is Genesis running in reverse." }}
              />
            </div>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 14, marginBottom: 24 }}>
              {[
                ["Book", "Jeremiah"],
                ["Chapter", "4"],
                ["Period", "~627&ndash;587 BC"],
                ["Audience", "Judah &amp; Jerusalem"],
                ["Key Theme", "Heart Circumcision"],
                ["Key Verse", "Jer 4:4"],
              ].map(([k, v]) => (
                <div key={k} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                  <div
                    style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}
                    dangerouslySetInnerHTML={{ __html: v }}
                  />
                </div>
              ))}
            </div>

            {/* Key passage highlight */}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: 18, margin: "0 0 16px" }}>The Central Command (Jer 4:4)</h3>
              <blockquote style={{ borderLeft: `4px solid ${PURPLE}`, paddingLeft: 20, margin: "0 0 16px" }}>
                <p style={{ color: TEXT, fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>
                  &ldquo;Circumcise yourselves to the LORD; remove the foreskin of your hearts, O men of Judah and inhabitants of Jerusalem; lest my wrath go forth like fire, and burn with none to quench it, because of the evil of your deeds.&rdquo;
                </p>
                <cite style={{ color: MUTED, fontSize: 13, marginTop: 8, display: "block" }}>&mdash; Jeremiah 4:4 (ESV)</cite>
              </blockquote>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "This verse stands as the theological center of the chapter and one of the most important verses in the entire book of Jeremiah. The command assumes that external religious practice&mdash;including the very sign of the covenant itself&mdash;can be performed while the heart remains closed to God. The remedy is not more religious activity but a fundamentally different posture of the inner person before God. The New Testament sees this fulfilled in the new covenant, where the Spirit circumcises the heart (Rom 2:28&ndash;29, Col 2:11)." }}
              />
            </div>

            {/* The tohu wabohu vision */}
            <div style={{ background: CARD, border: `1px solid ${BLUE}44`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: BLUE, fontWeight: 700, fontSize: 18, margin: "0 0 16px" }}>The Tohu Wabohu Vision (Jer 4:23&ndash;26)</h3>
              <blockquote style={{ borderLeft: `4px solid ${BLUE}`, paddingLeft: 20, margin: "0 0 16px" }}>
                <p style={{ color: TEXT, fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>
                  &ldquo;I looked on the earth, and behold, it was without form and void; and to the heavens, and they had no light. I looked on the mountains, and behold, they were quaking, and all the hills moved to and fro. I looked, and behold, there was no man, and all the birds of the air had fled. I looked, and behold, the fruitful land was a desert, and all its cities were laid in ruins before the LORD, before his fierce anger.&rdquo;
                </p>
                <cite style={{ color: MUTED, fontSize: 13, marginTop: 8, display: "block" }}>&mdash; Jeremiah 4:23&ndash;26 (ESV)</cite>
              </blockquote>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The phrase <em>tohu wabohu</em> in 4:23 is a direct echo of Genesis 1:2. Jeremiah is watching creation run backwards. What God spoke into existence in six days of creative labor is unraveling as a consequence of Israel's covenant breaking. This is not merely poetic hyperbole. For the biblical worldview, moral order and created order are deeply connected. The world was made for covenant faithfulness; when covenant faithfulness is refused, the world loses the ground of its ordering." }}
              />
            </div>

            {/* Chapter structure */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 18, margin: "0 0 16px" }}>Chapter Structure</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "Jer 4:1-4", label: "The Call to Return", color: PURPLE, desc: "Conditions for genuine repentance; the command to circumcise the heart" },
                  { ref: "Jer 4:5-10", label: "Alarm from the North", color: RED, desc: "Military alarm raised; the foe from the north approaches; Jeremiah's protest" },
                  { ref: "Jer 4:11-18", label: "The Hot Wind of Judgment", color: GOLD, desc: "Scorching east wind&mdash;not winnowing but destroying; Jerusalem surrounded" },
                  { ref: "Jer 4:19-22", label: "The Prophet's Anguish", color: TEAL, desc: "Jeremiah's bodily grief; God's diagnosis: Israel does not know him" },
                  { ref: "Jer 4:23-26", label: "Tohu Wabohu", color: BLUE, desc: "Formless void; creation reversing; mountains quaking; birds gone; cities ruined" },
                  { ref: "Jer 4:27-31", label: "Not a Full End", color: GREEN, desc: "God's determination is bounded; Daughter Zion's desperate and futile beautifying" },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: 13, minWidth: 100, paddingTop: 2 }}>{item.ref}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 600, fontSize: 14, marginBottom: 3 }}>{item.label}</div>
                      <div
                        style={{ color: MUTED, fontSize: 13, lineHeight: 1.5 }}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes in Jeremiah 4</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Jeremiah 4 is a theological watershed. Its major themes connect the Mosaic covenant, the Abrahamic sign of circumcision, the prophetic tradition of inward religion, and the Genesis creation narrative into a single devastating argument: what God requires is not more religious performance but a transformed heart, and the consequences of refusing that transformation extend to the created order itself." }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {THEME_SECTIONS.map(s => (
                <div key={s.id} style={{ background: CARD, border: `1px solid ${open === s.id ? s.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggle(s.id)}
                    style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{s.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 22, lineHeight: 1 }}>{open === s.id ? "-" : "+"}</span>
                  </button>
                  {open === s.id && (
                    <div style={{ padding: "0 22px 18px 44px", borderTop: `1px solid ${BORDER}` }}>
                      <p
                        style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "14px 0 0" }}
                        dangerouslySetInnerHTML={{ __html: s.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Cross-reference panel */}
            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 14, padding: 28, marginTop: 32 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, fontSize: 18, margin: "0 0 16px" }}>Key Cross-References</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "Deut 10:16", note: "The first occurrence of the &ldquo;circumcise your heart&rdquo; command in the Torah" },
                  { ref: "Deut 30:6", note: "The promise that God himself will circumcise the hearts of his people&mdash;the Jeremiah 31 new covenant in Deuteronomy" },
                  { ref: "Gen 1:2", note: "Tohu wabohu&mdash;the formless void Jeremiah's vision echoes and reverses" },
                  { ref: "Jer 31:31-34", note: "The new covenant promise: God will write his law on the heart, fulfilling the call of Jer 4:4" },
                  { ref: "Rom 2:28-29", note: "Paul's application of heart circumcision: the true Jew is one inwardly" },
                  { ref: "Col 2:11", note: "Circumcision of Christ&mdash;the NT fulfillment of the inward transformation Jeremiah demands" },
                  { ref: "Hosea 4:1-3", note: "The prophetic connection between covenant unfaithfulness and ecological collapse" },
                ].map(item => (
                  <div key={item.ref} style={{ display: "flex", gap: 14, padding: "10px 14px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: 13, minWidth: 90, paddingTop: 2 }}>{item.ref}</span>
                    <span
                      style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: item.note }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE */}
        {tab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse: Jeremiah 4</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Jeremiah 4 moves through six distinct movements, each building on the last. The opening call to repentance (4:1&ndash;4) establishes what is needed; the military alarm (4:5&ndash;18) announces what is coming; the prophet&apos;s anguish (4:19&ndash;22) feels the weight of it; the uncreation vision (4:23&ndash;26) reveals its cosmic magnitude; and the closing words (4:27&ndash;31) hold judgment and mercy together in unresolved tension." }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {VERSE_SECTIONS.map(s => (
                <div key={s.id} style={{ background: CARD, border: `1px solid ${open === s.id ? s.color : BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggle(s.id)}
                    style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "18px 22px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <span style={{ background: `${s.color}20`, border: `1px solid ${s.color}44`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: s.color, fontWeight: 700, whiteSpace: "nowrap" }}>{s.ref}</span>
                      <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{s.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 22, lineHeight: 1, marginLeft: 10, flexShrink: 0 }}>{open === s.id ? "-" : "+"}</span>
                  </button>
                  {open === s.id && (
                    <div style={{ padding: "0 22px 20px", borderTop: `1px solid ${BORDER}` }}>
                      <p
                        style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: "16px 0 0" }}
                        dangerouslySetInnerHTML={{ __html: s.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Commentary note */}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: 28, marginTop: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: 18, margin: "0 0 12px" }}>Reading Jeremiah 4 in Its Canonical Context</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Jeremiah 4 cannot be understood in isolation. It belongs to a sequence that begins in chapters 1&ndash;3 with the diagnosis of Israel&apos;s spiritual adultery and extends through the rest of the book toward the promise of the new covenant (31:31&ndash;34). The call to circumcise the heart in 4:4 is the demand side of the promise in 31:33: &ldquo;I will put my law within them, and I will write it on their hearts.&rdquo; The two passages together frame the theological trajectory of the whole book: God demands what human beings cannot produce on their own, and then promises to produce it himself." }}
              />
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The uncreation vision of 4:23&ndash;26 also looks forward and backward simultaneously. It looks back to Genesis 1:2 and the pre-creation void. It looks forward to the new creation passages of Isaiah 65&ndash;66 and Revelation 21&ndash;22, where the reversal of the fall and the renewal of creation are accomplished by God. Between the tohu wabohu of Jeremiah 4 and the new heavens and new earth of Revelation 21 stands the cross&mdash;the point at which God himself enters the chaos of judgment and transforms it from the inside." }}
              />
            </div>
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Application: Living the Truths of Jeremiah 4</h2>
              <p
                style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Jeremiah 4 is not an artifact of ancient Near Eastern religion. Its demands and promises speak directly into the contemporary Christian life. The call to heart circumcision, the diagnosis of superficial religion, the prophet&apos;s model of sharing God&apos;s grief over sin, and the bounded mercy of God who will not make a full end&mdash;all of these have direct applications for how we live, pray, and worship today." }}
              />
            </div>

            {/* Application cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {[
                {
                  color: PURPLE,
                  title: "What Does &ldquo;Circumcise Your Heart&rdquo; Mean Practically?",
                  body: "The command to circumcise the heart in 4:4 is not a vague exhortation to &ldquo;be more spiritual.&rdquo; It is a precise demand to remove whatever is hardening your heart against God. That hardness takes different forms in different people. For some it is habitual sin defended and rationalized. For others it is religious performance that substitutes for genuine encounter with God&mdash;attending church, checking boxes, maintaining reputation while the heart remains unchanged. For others it is bitterness, unbelief, or self-sufficiency. The practice of heart circumcision begins with honest self-examination: What am I protecting in my inner life from the word of God? What area of my heart has I kept closed to genuine transformation? The circumcision metaphor is not gentle&mdash;it involves cutting, removing, allowing something to be separated that has been attached. This is the work of the Spirit (Col 2:11), but it requires our cooperation and our willingness to let go."
                },
                {
                  color: RED,
                  title: "Inner Transformation Over Outward Religion",
                  body: "Jeremiah 4 belongs to a consistent prophetic critique of religion that is all form and no substance. The people of Judah were not irreligious; they were very religious. They attended the temple, offered sacrifices, observed festivals, maintained the outward marks of covenant membership. And God rejected it all as insufficient&mdash;not because ritual is inherently wrong but because ritual without heart transformation is self-deception. This is a deeply uncomfortable word for communities that have well-developed religious cultures. The question is not whether you do the right things but whether the right things are changing you. Does your worship produce in you greater love for God and neighbor? Does your prayer life change how you treat people? Does your Bible reading produce genuine repentance and genuine joy? Or has religious practice become a way of feeling right with God without actually becoming more like God?"
                },
                {
                  color: TEAL,
                  title: "Responding to God&apos;s Warnings",
                  body: "Jeremiah 4 is a warning delivered before the judgment arrived. God does not strike without warning; he sends his messengers first. One of the applications of this chapter is learning to receive warnings&mdash;from Scripture, from conscience, from trusted mentors, from life circumstances that expose our reliance on things other than God&mdash;as gifts rather than insults. Warnings are an expression of mercy. God warns because he does not want the judgment to fall. The people of Judah repeatedly received warnings and repeatedly failed to respond. The question for the contemporary reader is whether we are more responsive than they were. When God, through Scripture or Spirit, shows us something in our inner life that needs to change, do we receive that as a gift and act on it&mdash;or do we defend ourselves and explain it away?"
                },
                {
                  color: GOLD,
                  title: "The Grief That Love for God Produces Over Sin",
                  body: "Jeremiah 4:19&ndash;22 presents the prophet in physical anguish over what is happening to his people and over the sin that made it happen. This is not self-flagellation or morbid despair. It is the grief that genuine love produces. When we love God, we grieve what grieves him. When we love the people of God, we grieve what damages them. When we love the world God made, we grieve the effects of sin in it. This kind of grief is actually a mark of spiritual health&mdash;it is the opposite of the emotional numbness that comes from familiarity with sin. One application of this chapter is asking: Am I still grieved by sin&mdash;my own sin, the sin around me&mdash;or have I become comfortable with it? The prophetic tradition, and ultimately Jesus himself (Luke 19:41, John 11:35), models a kind of grief over sin and its consequences that is inseparable from genuine love."
                },
                {
                  color: BLUE,
                  title: "The Cosmological Weight of Moral Choices",
                  body: "The tohu wabohu vision of 4:23&ndash;26 has a striking implication: our moral and spiritual choices are not private matters with consequences only for ourselves. The biblical worldview sees the created order as responsive to the covenant faithfulness (or faithlessness) of God&apos;s people. Paul makes a similar point in Romans 8:19&ndash;22, where &ldquo;the whole creation has been groaning together in the pains of childbirth until now.&rdquo; Creation is not a neutral backdrop to human activity; it participates in and is affected by human moral and spiritual choices. This does not mean that every natural disaster is a direct divine judgment on specific sins. But it does mean that the choices we make about worship, justice, and faithfulness to God are cosmically significant&mdash;they matter at the level of what kind of world we are building or unbuilding."
                },
              ].map(card => (
                <div key={card.color + card.title} style={{ background: CARD, border: `1px solid ${card.color}33`, borderRadius: 12, padding: 24 }}>
                  <h3
                    style={{ color: card.color, fontWeight: 700, fontSize: 16, margin: "0 0 12px" }}
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  />
                  <p
                    style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: card.body }}
                  />
                </div>
              ))}
            </div>

            {/* Reflection questions */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderRadius: 14, padding: 28, marginBottom: 32 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "What area of your heart have you kept closed to genuine transformation? What is the &ldquo;foreskin&rdquo; that needs to be removed?",
                  "Where in your religious practice do you suspect you are maintaining outward form without inner reality? What would genuine heart change look like in that area?",
                  "When you receive a warning from God&mdash;through Scripture, conscience, or circumstances&mdash;what is your typical first response? How could you become more receptive?",
                  "Jeremiah wept over his people&apos;s sin (4:19&ndash;22). What does your emotional response to sin in your own life and in the world around you reveal about the state of your heart?",
                  "The tohu wabohu vision connects moral choices to cosmic consequences. How does understanding the cosmological weight of faithfulness change how you think about everyday decisions?",
                  "God declares &ldquo;I will not make a full end&rdquo; (4:27). Where in your life do you need to trust that God&apos;s mercy will be the final word even in the middle of discipline or hardship?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: GREEN, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                    <span
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Videos */}
            <div style={{ marginBottom: 8 }}>
              <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 20, margin: "0 0 8px" }}>Video Teaching</h3>
              <p
                style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 24px" }}
                dangerouslySetInnerHTML={{ __html: "Deepen your understanding of Jeremiah 4 through verse-by-verse teaching and thematic exposition." }}
              />
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {videoItems.map(v => (
                  <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "14px 18px" }}>
                      <p style={{ color: TEXT, fontWeight: 600, fontSize: 15, margin: 0 }}>{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
