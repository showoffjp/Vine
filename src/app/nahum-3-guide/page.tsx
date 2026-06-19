"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48", BLUE = "#3B82F6";
const ACCENT = ROSE;

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const THEMES = [
  {
    id: "woe-oracle",
    color: ROSE,
    title: "The Woe Oracle Against the Bloody City",
    html: "Nahum 3 opens with one of the most concentrated woe oracles in the entire prophetic corpus: &ldquo;Woe to the bloody city, all full of lies and plunder &mdash; no end to the prey!&rdquo; (3:1). The Hebrew word <em>hoy</em> (&ldquo;woe&rdquo;) is a funeral cry &mdash; a lament pronounced over someone already as good as dead. God is pronouncing Nineveh&rsquo;s obituary before it happens. The specific charges &mdash; bloodshed, lies, plunder, endless predation &mdash; correspond to documented Assyrian military practice: the annals of Sennacherib and Ashurbanipal boast of flaying enemies alive, piling skulls at city gates, and impaling captives on stakes. Nahum is not using hyperbole. He is reading the Assyrians&rsquo; own self-testimony back to them as God&rsquo;s indictment. The harlotry and sorcery of verse 4 are metaphors for Nineveh&rsquo;s political seduction of surrounding nations &mdash; using economic alliance, military intimidation, and religious manipulation to bring nations under Assyrian dominance. The image of the prostitute is not primarily sexual; it describes the corrupting power of an empire that trades in human lives and cultures.",
  },
  {
    id: "thebes-comparison",
    color: GOLD,
    title: "No-Amon (Thebes): The Proof That Great Cities Fall",
    html: "Nahum 3:8&ndash;10 pivots to a comparison that would have been electrifying for ancient listeners: &ldquo;Are you better than Thebes (No-Amon) that sat by the Nile, with water around her, her rampart a sea, and water her wall?&rdquo; Thebes &mdash; No-Amon in Hebrew, &ldquo;city of the god Amon&rdquo; &mdash; was the greatest city in Africa and one of the wonders of the ancient world. With the Nile as natural moat, military might, Egyptian allies, Libyan troops, Put and Lubim, and the protection of the powerful god Amon, Thebes seemed impregnable. Yet in 663 BC, the Assyrian king Ashurbanipal sacked it completely. Its inhabitants were exiled, its children dashed to pieces, its nobles carried off in chains. Nahum&rsquo;s point is as precise as a hammer blow: Nineveh, you did that to Thebes. Now the same fate is coming for you. The very empire that destroyed the &ldquo;indestructible&rdquo; city is about to be shown equally destructible. History itself is Nahum&rsquo;s argument. No city is exempt from divine judgment simply because it is large, powerful, or strategically located.",
  },
  {
    id: "ineffective-defenses",
    color: TEAL,
    title: "The Utter Uselessness of Nineveh&rsquo;s Defenses",
    html: "Nahum 3:11&ndash;17 delivers a withering catalog of everything Nineveh trusted for security &mdash; and pronounces each element useless. The fortresses &ldquo;are like ripe figs&rdquo; &mdash; if you shake the tree, they fall into the mouth of the eater (v. 12). The troops are &ldquo;like women&rdquo; in the gate (an ancient insult meaning they will not fight). Fire will devour the bars and gates. The watchmen &ldquo;are like locusts,&rdquo; the scribes and officers &ldquo;like swarms of locusts&rdquo; &mdash; they settle on cold days but when the sun rises, they fly away and no one knows where they have gone (v. 17). This is not military analysis; it is theological satire. The very instruments of Assyrian power &mdash; the professional armies, the administrative systems, the merchants who multiplied like locusts &mdash; will prove as permanent as morning dew. The multiplication of defenders is itself a mark of fragility, not strength. When an empire relies on endless accumulation of resources and soldiers to hold itself together, it is already testifying to its own instability.",
  },
  {
    id: "no-healing",
    color: PURPLE,
    title: "No Healing, No Grief: The Finality of the Verdict",
    html: "The chapter closes with words of extraordinary finality: &ldquo;There is no easing your hurt; your wound is grievous. All who hear the news about you clap their hands over you. For upon whom has not come your unceasing evil?&rdquo; (3:19). Two features of this verdict are theologically significant. First, the language of &ldquo;no healing&rdquo; (the same word used in Jeremiah 30:12&ndash;13 and Lamentations 2:13) marks a point of irreversibility &mdash; a condition beyond remedy. This is not a call to repentance followed by a promise of restoration. Nineveh has crossed a threshold. Second, the response of the watching nations is not mourning but clapping &mdash; the gesture of applause and relief from those who have suffered under Assyria&rsquo;s &ldquo;unceasing evil.&rdquo; This is unusual: prophets often lament the fall of foreign nations even when God ordains them (cf. Ezekiel 27&ndash;28). Here there is no lament. The fall of Nineveh is unambiguously good news for the suffering nations. It is a reminder that God&rsquo;s justice, when it finally arrives against entrenched evil, is experienced as liberation by those the evil oppressed.",
  },
];

const VERSES = [
  {
    id: "v1-4",
    ref: "Nahum 3:1&ndash;4",
    color: ROSE,
    title: "The Woe Oracle: Battle Scene of Nineveh Under Siege",
    html: "The opening verses of Nahum 3 are among the most cinematically vivid in all of Hebrew prophecy. The poet compresses an entire siege into six rapid-fire lines: cracking whip, rattling wheel, galloping horse, bounding chariot, charging horseman, flashing sword, gleaming spear, heaps of slain, piles of corpses &mdash; so many bodies that attackers are stumbling over them. The description is deliberately overwhelming, meant to induce the visceral experience of Nineveh&rsquo;s fall before it happens. Verse 1 frames everything with the woe oracle: <em>hoy</em> &mdash; the funeral cry. The specific charges are precise: &ldquo;all full of lies&rdquo; (Assyrian diplomatic treaties were routinely broken), &ldquo;plunder&rdquo; (the systematic stripping of conquered peoples), and &ldquo;no end to the prey&rdquo; (a hunting metaphor for Assyria&rsquo;s endless predatory expansion). Verses 3&ndash;4 introduce the harlotry metaphor: Nineveh is a prostitute who &ldquo;sells nations through her whoredoms&rdquo; &mdash; a picture of the political seduction by which Assyria drew nations into dependency and then devoured them. The city that prided itself on power is pictured as a harlot whose moment of exposure and shame is coming.",
  },
  {
    id: "v5-7",
    ref: "Nahum 3:5&ndash;7",
    color: GOLD,
    title: "God Against Nineveh: Exposure Before the Nations",
    html: "Verses 5&ndash;7 deliver the most theologically dense section of the chapter, with God speaking in the first person: &ldquo;Behold, I am against you, declares the LORD of hosts, and will lift up your skirts over your face; and I will make nations look at your nakedness and kingdoms at your shame.&rdquo; The language mirrors the condemnation of unfaithful Jerusalem in Ezekiel 16 and Jeremiah 13 &mdash; but here applied to Nineveh. The reversal is deliberate: the nation that shamed and exposed conquered peoples will itself be publicly shamed and exposed. God will &ldquo;throw filth at you and treat you with contempt and make you a spectacle&rdquo; (v. 6). The result described in verse 7 is desolation and abandonment: &ldquo;And it shall come to pass that all who look at you will shrink from you and say, &lsquo;Wasted is Nineveh; who will grieve for her?&rsquo;&rdquo; The expected response to a city&rsquo;s destruction &mdash; mourning, lamentation, the seeking of comforters &mdash; is entirely absent. The silence is its own verdict. No one grieves for Nineveh because everyone experienced Nineveh as oppressor. The God who exposes Nineveh is not acting capriciously; he is executing the principle that what a nation does to others will be done to it (cf. Obadiah 15; Revelation 18:6).",
  },
  {
    id: "v8-10",
    ref: "Nahum 3:8&ndash;10",
    color: TEAL,
    title: "Are You Better Than Thebes? The Great City That Fell",
    html: "The Thebes comparison (vv. 8&ndash;10) is one of the most rhetorically powerful moves in the Minor Prophets. Nahum asks a question that no Assyrian could answer comfortably: &ldquo;Are you better than Thebes (No-Amon) that sat by the Nile, with water around her, her rampart a sea, and water her wall?&rdquo; No-Amon, the Hebrew name for Thebes, means &ldquo;city of the god Amon&rdquo; &mdash; the chief deity of the Egyptian empire. The city had every natural and military advantage: the Nile as moat, allies from Egypt and Libya, the protection of its patron god, and a population so large it boasted &ldquo;Put and Lubim&rdquo; among its defenders. It was, in short, the ancient world&rsquo;s definition of an impregnable city &mdash; exactly what Nineveh believed itself to be. But Ashurbanipal sacked it in 663 BC, only decades before Nahum writes. The children of Thebes were dashed to pieces; its nobles were dragged away in chains. Nahum&rsquo;s argument is historical evidence: if the mightiest city of Africa could fall, Nineveh will fall. Divine judgment does not recognize the category of &ldquo;too big to fall.&rdquo; Human power accumulation, however impressive, is finite; divine judgment is not.",
  },
  {
    id: "v11-15",
    ref: "Nahum 3:11&ndash;15",
    color: PURPLE,
    title: "Your Fortresses Are Like Ripe Figs; Your People Scatter",
    html: "Verses 11&ndash;15 develop a sustained metaphor of collapsed defenses. Nineveh herself will be drunk and in hiding (v. 11). Her fortresses are &ldquo;like fig trees with first-ripe figs &mdash; if shaken they fall into the mouth of the eater&rdquo; (v. 12). The image is almost comic in its gentleness: these are not fortresses that require siege engines to breach; a light shake and they collapse into the enemy&rsquo;s waiting hand. The troops are &ldquo;like women in your midst&rdquo; &mdash; unable to fight, the gates standing wide open to enemies. Fire will devour the bars of the gates (v. 13). Verse 14 shifts to a taunt: &ldquo;Draw water for the siege; strengthen your forts.&rdquo; This is prophetic irony &mdash; God is not sincerely advising Nineveh how to defend itself. He is pointing out that no amount of preparation will matter. Verse 15 closes the taunt: &ldquo;There the fire will devour you; the sword will cut you off. It will devour you like the locust.&rdquo; The locust imagery that begins here will expand in verses 15&ndash;17: Nineveh will be consumed by enemies as locusts consume crops, even as her own populations and soldiers will scatter like locusts at sunrise.",
  },
  {
    id: "v16-19",
    ref: "Nahum 3:16&ndash;19",
    color: BLUE,
    title: "Merchants Multiply and Vanish; No Healing for Your Wound",
    html: "The chapter&rsquo;s closing section (vv. 16&ndash;19) returns to the locust imagery and extends it to every pillar of Nineveh&rsquo;s institutional life. The merchants, multiplied &ldquo;more than the stars of heaven,&rdquo; &ldquo;spread their wings and fly away&rdquo; (v. 16). The scribes (administrative officials) are &ldquo;like locusts, like grasshoppers settling on the fences in a day of cold&rdquo; (v. 17) &mdash; they appear numerous and organized, but they vanish when the warmth of crisis comes. The shepherds (military commanders or governors) sleep, and the nobles slumber (v. 18) &mdash; the entire leadership apparatus fails at the decisive moment. The wound is incurable (v. 19), the hurt grievous beyond healing. And the final word &mdash; shocking in its emotional register &mdash; is that all who hear the news of Nineveh&rsquo;s fall will clap their hands. This is not cruelty; it is the authentic relief of the oppressed. For nations that had suffered under Assyria&rsquo;s &ldquo;unceasing evil,&rdquo; the news of her fall is genuinely good news. The book of Nahum thus ends not with a call to repentance but with the assurance that God&rsquo;s justice reaches even the most powerful and brutal empires on earth.",
  },
];

const APP_SECTIONS = [
  {
    id: "app-accountability",
    color: ROSE,
    title: "National Power Is Not Exempt from Divine Accountability",
    html: "Nahum 3 is one of the clearest demonstrations in Scripture that no human empire, however powerful and long-lasting, is exempt from God&rsquo;s moral governance. Assyria ruled the Near East for centuries; Nineveh was the largest city in the world; its armies had never been definitively defeated. And yet God speaks: &ldquo;Behold, I am against you&rdquo; (3:5). The Christian reader of Nahum is called to hold two truths together: (1) governments and nations are ordained instruments of order (Romans 13:1), and (2) when those instruments become vehicles of systematic cruelty, injustice, and oppression, they fall under God&rsquo;s judgment. Nahum provides no comfortable nationalism &mdash; no assumption that any nation, including God&rsquo;s own covenant people (see Nahum&rsquo;s broader context), is exempt from moral accountability. The proper response is a chastened humility about national power and a refusal to conflate political strength with divine favor.",
  },
  {
    id: "app-harlotry",
    color: GOLD,
    title: "Seduction and Manipulation as Spiritual Categories",
    html: "The harlotry and sorcery metaphors of Nahum 3:4 are applied to Nineveh&rsquo;s political behavior &mdash; the way it used economic dependency, military intimidation, and ideological manipulation to control nations. The New Testament draws on this same imagery in Revelation 17&ndash;18, where &ldquo;Babylon the Great&rdquo; &mdash; the code name for Rome &mdash; is described as the great prostitute who has made the nations drink from the wine of her fornication. The spiritual category here is the seductive corruption of power: the use of wealth, influence, and cultural dominance to draw others into complicity with evil. Christians navigating life in powerful cultural and economic systems are called to the discernment question: What systems am I participating in that require me to normalize injustice in order to maintain my position or comfort?",
  },
  {
    id: "app-thebes-warning",
    color: TEAL,
    title: "Thebes as a Warning: No City Is &ldquo;Too Big to Fall&rdquo;",
    html: "Nahum&rsquo;s use of Thebes as a warning to Nineveh has structural resonances with the entire prophetic tradition&rsquo;s use of historical examples to make theological arguments. Amos uses the comparison of surrounding nations. Isaiah uses Assyria itself as an argument (Is. 10). Paul uses the wilderness generation (1 Cor. 10). The writer of Hebrews uses the entire history of Israel. The logic is consistent: past examples of judgment are not mere history lessons &mdash; they are warnings to the present generation that the same God who acted then will act again. For contemporary Christians, Thebes and Nineveh together testify that civilizational collapse is possible for any culture, however established. What persists beyond the fall of empires is not institutional power but the kingdom of God, which &ldquo;shall stand forever&rdquo; (Daniel 2:44). Investing in that kingdom &mdash; through the formation of people and communities of righteousness &mdash; is the only truly durable investment.",
  },
  {
    id: "app-good-news",
    color: PURPLE,
    title: "The Gospel in the Clapping Hands",
    html: "The closing image of Nahum 3 &mdash; nations clapping their hands at Nineveh&rsquo;s fall &mdash; may seem harsh to modern sensibilities trained to mourn all suffering, even the suffering of oppressors. But it corresponds to a deep biblical pattern: the relief of the oppressed at the fall of their oppressor is a form of justice, and justice is good. Revelation 18 and 19 use the same pattern: the fall of Babylon is greeted with &ldquo;Hallelujah!&rdquo; from heaven and from the people of God. The clapping hands of the nations in Nahum 3:19 are not vengeance-seeking; they are the expression of communities that have suffered &ldquo;unceasing evil&rdquo; and are now free. The Christian gospel carries within it the same structure: the cross is both the place of judgment on evil and the source of liberation for those oppressed by it. The good news is not only that individuals are forgiven; it is that the powers which crush human beings will not have the last word.",
  },
];

const QUESTIONS = [
  "Where do you see the pattern of Nahum 3 &mdash; powerful institutions accumulating resources while crushing the vulnerable &mdash; in the world around you? How does Nahum call you to respond?",
  "The harlotry metaphor describes Nineveh's use of seduction and manipulation to control nations. What cultural, economic, or political systems have seduced you into complicity with injustice? How did that seduction work?",
  "Nahum uses Thebes (a city that seemed indestructible) as proof that Nineveh will fall. What are the &ldquo;Thebes&rdquo; in your own life &mdash; things that seem permanent and secure but Nahum would call fragile? How does that change how you relate to them?",
  "The response to Nineveh&rsquo;s fall is clapping, not mourning. When have you experienced the relief that comes when a source of oppression is removed? How does that experience help you understand the gospel?",
  "Nahum 3:19 says Nineveh&rsquo;s wound is incurable. There is a point beyond which a community or institution can no longer be reformed &mdash; only judged. What discernment practices help you know when to keep working for reform versus when to separate from a corrupted system?",
  "The merchants, scribes, and military commanders of Nineveh all scatter when the crisis comes (vv. 16&ndash;18). What does this passage say about building your life on institutional structures versus on God himself? Where are you most tempted to trust systems over God?",
];

const VIDEO_ITEMS = [
  { id: "CE8QbkUCNK4", title: "Nahum: God's Wrath on Nineveh" },
  { id: "8phkAg8PMHE", title: "The Book of Nahum Explained" },
  { id: "Q2oNOlXzBhY", title: "Nahum and Divine Justice" },
  { id: "tszFhiOPgPk", title: "Minor Prophets: Nahum Overview" },
];

export default function Nahum3Guide() {
  const [tab, setTab] = useState("overview");
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const toggleTheme = (id: string) => setOpenTheme(openTheme === id ? null : id);
  const toggleVerse = (id: string) => setOpenVerse(openVerse === id ? null : id);
  const toggleApp = (id: string) => setOpenApp(openApp === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #1a0005 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
            <span style={{ color: MUTED, fontSize: 14 }}>3 Chapters &middot; 7th Century BC</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15, color: TEXT }}>
            Nahum 3: The Final Woe Against Nineveh
          </h1>
          <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 10, padding: "16px 20px", marginBottom: 16, maxWidth: 680 }}>
            <p style={{ color: ROSE, fontSize: 17, fontWeight: 700, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
              &ldquo;Woe to the bloody city, all full of lies and plunder &mdash; no end to the prey!&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 13, margin: "8px 0 0" }}>Nahum 3:1</p>
          </div>
          <p style={{ fontSize: "clamp(1rem,2vw,1.15rem)", color: MUTED, maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
            The third and final chapter of Nahum delivers God&rsquo;s verdict on Nineveh with searing prophetic force: woe oracle, battle scene, harlotry metaphor, the Thebes comparison, scattered defenders, and the incurable wound that no one mourns.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
        <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
          {TABS.map(t => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                padding: "16px 18px",
                border: "none",
                background: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
                color: tab === t ? ACCENT : MUTED,
                borderBottom: tab === t ? `2px solid ${ACCENT}` : "2px solid transparent",
                transition: "color 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Overview</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}>
              Nahum 3 is the climax of a short but powerful book whose entire purpose is to announce the imminent fall of Nineveh, capital of the Assyrian Empire. By the time Nahum wrote &mdash; likely in the 7th century BC, after the fall of Thebes in 663 BC and before the fall of Nineveh in 612 BC &mdash; Assyria was the dominant superpower of the ancient Near East. Its armies had destroyed the Northern Kingdom of Israel in 722 BC, besieged Jerusalem under Hezekiah, and sacked Thebes. It seemed invincible. Chapter 3 is God&rsquo;s answer to that appearance.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 16 }}>The Structure of Nahum 3</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "3:1&ndash;4", desc: "Woe oracle &mdash; the battle scene of Nineveh under siege, bloodshed in every street; harlotry and sorcery as metaphors for political seduction" },
                  { ref: "3:5&ndash;7", desc: "God against Nineveh &mdash; I will expose your nakedness to the nations; all who see you will shrink from you; no one will grieve" },
                  { ref: "3:8&ndash;10", desc: "Are you better than Thebes? &mdash; the great city of Egypt that was completely destroyed by Assyria" },
                  { ref: "3:11&ndash;15", desc: "Your fortresses are like fig trees; your people are like locusts &mdash; the utter ineffectiveness of Nineveh&rsquo;s defenses" },
                  { ref: "3:16&ndash;19", desc: "Merchants, guards, officials all scatter; your hurt is incurable; all who hear clap their hands" },
                ].map(p => (
                  <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span
                      style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 90, paddingTop: 2 }}
                      dangerouslySetInnerHTML={{ __html: p.ref }}
                    />
                    <span
                      style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}
                      dangerouslySetInnerHTML={{ __html: p.desc }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14, marginBottom: 20 }}>
              {[
                { label: "Book", value: "Nahum" },
                { label: "Chapter", value: "3 (final chapter)" },
                { label: "Period", value: "7th century BC" },
                { label: "Historical context", value: "After fall of Thebes (663 BC), before fall of Nineveh (612 BC)" },
                { label: "Subject", value: "Judgment of Nineveh / Assyrian Empire" },
                { label: "Key verse", value: "Nahum 3:1" },
              ].map(item => (
                <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: TEXT }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${ROSE}33`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: ROSE, fontWeight: 700, marginBottom: 12 }}>Why Nahum Matters</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 14px" }}>
                Nahum is often called a difficult book &mdash; its single-minded focus on the destruction of Nineveh can seem alien to readers formed by a theology of grace and mercy. But Nahum addresses a different question than Jonah: not &ldquo;Will God show mercy to repentant Nineveh?&rdquo; but &ldquo;What happens to an empire that has returned to its brutality after a century of opportunity?&rdquo; (Jonah&rsquo;s revival in Nineveh was roughly a century before Nahum.) Nahum&rsquo;s answer is that God&rsquo;s patience with systematic, unrepentant evil is not infinite.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                For the suffering peoples of the ancient Near East who had endured Assyrian devastation &mdash; the deported Israelites, the ravaged Judeans, the crushed Egyptians &mdash; Nahum was not a book of violence. It was a book of comfort. The full title of the book (1:1) is &ldquo;the book of the vision of Nahum of Elkosh&rdquo; and &ldquo;an oracle concerning Nineveh.&rdquo; Its message: God has seen what Nineveh has done, and God will act.
              </p>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12, color: TEXT }}>Nineveh in Context</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 14px" }}>
                Nineveh, located on the east bank of the Tigris (modern Mosul, Iraq), was at its peak the largest city in the world. Sennacherib&rsquo;s palace there was described as &ldquo;the palace without rival.&rdquo; The city walls were 7.5 miles in circumference with 15 gates and 18 massive towers. Its library contained the Gilgamesh Epic and thousands of cuneiform texts. By every human measure, Nineveh was impregnable and permanent.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                In 612 BC &mdash; within a generation of Nahum&rsquo;s prophecy &mdash; a coalition of Babylonians, Medes, and Scythians besieged and destroyed Nineveh so completely that Alexander the Great, passing the site in 331 BC, did not know a great city had stood there. Nahum&rsquo;s prophecy was fulfilled with shocking totality.
              </p>
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Key Themes</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}>
              Nahum 3 weaves several interconnected theological themes that speak not only to the ancient Assyrian situation but to the enduring question of God&rsquo;s justice in the face of entrenched, brutal power.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {THEMES.map(t => (
                <div key={t.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggleTheme(t.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: t.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: t.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>{openTheme === t.id ? "-" : "+"}</span>
                  </button>
                  {openTheme === t.id && (
                    <div
                      style={{ padding: "0 20px 22px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}
                      dangerouslySetInnerHTML={{ __html: t.html }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}33`, borderRadius: 12, padding: 24, marginTop: 28 }}>
              <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 12 }}>Nahum and the New Testament</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 14px" }}>
                Nahum 3 resonates deeply with Revelation 17&ndash;19, where Rome (&ldquo;Babylon the Great&rdquo;) is described in language that directly echoes Nahum&rsquo;s portrait of Nineveh: the great prostitute, the kings of the earth drunk with her wine of fornication, merchants weeping at her sudden fall, and heaven responding with &ldquo;Hallelujah!&rdquo; The pattern &mdash; seductive empire, divine judgment, liberation of the oppressed &mdash; is not merely historical. John in Revelation sees it as the template for God&rsquo;s final reckoning with all human empire.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                Nahum 1:15 (&ldquo;How beautiful upon the mountains are the feet of him who brings good news!&rdquo;) is quoted in Isaiah 52:7 and then by Paul in Romans 10:15 to describe the preaching of the gospel. The &ldquo;good news&rdquo; in the original context is the news that Nineveh has fallen and Judah is free. Paul sees the gospel of Christ&rsquo;s lordship as the ultimate version of that same good news: the powers that oppress have been defeated, and freedom has come.
              </p>
            </div>
          </div>
        )}

        {/* VERSE BY VERSE */}
        {tab === "verse" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Verse by Verse</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}>
              A section-by-section study of Nahum 3, tracing the prophet&rsquo;s rhetorical movement from woe oracle through battle vision, divine judgment, historical comparison, and final verdict.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VERSES.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggleVerse(v.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      <span
                        style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, borderRadius: 6, padding: "3px 10px", fontSize: 12, color: v.color, fontWeight: 700, flexShrink: 0 }}
                        dangerouslySetInnerHTML={{ __html: v.ref }}
                      />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{v.title}</span>
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>{openVerse === v.id ? "-" : "+"}</span>
                  </button>
                  {openVerse === v.id && (
                    <div
                      style={{ padding: "0 20px 22px 20px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}
                      dangerouslySetInnerHTML={{ __html: v.html }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${GOLD}33`, borderRadius: 12, padding: 24, marginTop: 28 }}>
              <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12 }}>Literary Features of Nahum 3</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 14px" }}>
                Nahum is widely regarded as one of the finest poets in the Hebrew Bible. Chapter 3 exemplifies several sophisticated literary techniques. The rapid-fire battle scene of verses 1&ndash;3 uses staccato Hebrew sentences with no connecting &ldquo;and&rdquo; &mdash; each line is its own snapshot, creating a cinematic sequence of violence. The harlotry metaphor of verse 4 connects to a well-developed prophetic tradition (Ezekiel 16, 23; Hosea 2) but applies it uniquely to a foreign nation rather than Israel.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                The locust imagery of verses 15&ndash;17 is particularly intricate: locusts first devour Nineveh (judgment as locusts consuming a crop), then Nineveh&rsquo;s own population is compared to locusts that scatter. The word &ldquo;locust&rdquo; appears four times in three verses, creating a dark irony: the nation that once swarmed over the earth like locusts will itself be scattered like locusts. Nineveh becomes what it once did to others.
              </p>
            </div>
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: TEXT }}>Application</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 28 }}>
              Nahum 3 speaks with particular force to any generation that lives under &mdash; or within &mdash; powerful systems that perpetuate injustice. Its themes of divine accountability, the seduction of empire, the inevitability of judgment, and the liberation of the oppressed are not antiquarian; they are permanently contemporary.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
              {APP_SECTIONS.map(s => (
                <div key={s.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggleApp(s.id)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: s.title }} />
                    </div>
                    <span style={{ color: MUTED, fontSize: 20, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>{openApp === s.id ? "-" : "+"}</span>
                  </button>
                  {openApp === s.id && (
                    <div
                      style={{ padding: "0 20px 22px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}
                      dangerouslySetInnerHTML={{ __html: s.html }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Study Questions */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16, color: TEXT }}>Discussion &amp; Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {QUESTIONS.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "14px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: ACCENT, fontWeight: 800, flexShrink: 0, fontSize: 15 }}>{i + 1}.</span>
                    <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Videos */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 6, color: TEXT }}>Teaching Videos</h3>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>Video teaching on Nahum, Nineveh, and divine justice in the Minor Prophets.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {VIDEO_ITEMS.map(v => (
                  <div key={v.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <div style={{ padding: "12px 16px" }}>
                      <h4 style={{ color: TEAL, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{v.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prayer */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}33`, borderRadius: 12, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 700, marginBottom: 14 }}>A Prayer from Nahum 3</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 14px", fontSize: 15, fontStyle: "italic" }}>
                Lord of hosts, you are the God who sees. You saw Nineveh&rsquo;s bloodshed, its lies, its plunder, its unceasing evil &mdash; and you acted. We live in a world still full of Ninevehs: systems that crush the poor, empires that seduce nations, powers that accumulate without accountability. We confess that we are often complicit &mdash; in economies that exploit, in cultures that silence the suffering, in institutions we refuse to question because we benefit from them.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 14px", fontSize: 15, fontStyle: "italic" }}>
                Give us the courage of Nahum &mdash; to speak truthfully about power, to trust that your justice will prevail even when it seems impossibly delayed, and to find comfort in the knowledge that you are never unaware of what the powerful do to the vulnerable.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: 15, fontStyle: "italic" }}>
                And give us the humility to examine our own lives: where have we built on what is as fragile as ripe figs? Where have we trusted the accumulation of resources rather than you? Turn our gaze from the things that scatter like locusts at sunrise to the kingdom that cannot be shaken. In the name of Jesus, the one in whom your justice and mercy meet. Amen.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
