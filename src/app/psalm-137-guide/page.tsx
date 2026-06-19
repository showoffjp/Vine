"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 137 - By the Waters of Babylon" },
  { videoId: "OjJ7GkWCHvA", title: "The Songs We Cannot Sing in Exile" },
  { videoId: "pHBzJ2dVXgk", title: "Reading the Imprecatory Psalms" },
  { videoId: "3sO5FH2ybPY", title: "Lament, Justice, and the Cross" },
];

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const themeItems = [
  {
    id: "t1",
    color: TEAL,
    title: "The Grief of Exile by the Waters of Babylon",
    body: "The psalm opens with one of the most evocative scenes of sorrow in all of Scripture: &ldquo;By the waters of Babylon, there we sat down and wept, when we remembered Zion. On the willows there we hung up our lyres&rdquo; (137:1-2). The exiles are pictured beside the irrigation canals of Babylon &mdash; a foreign, fertile, prosperous land that is nonetheless not home. The hanging up of the lyres is a powerful image of silenced worship: the instruments that once accompanied praise in the temple now hang useless on the trees, because the songs they played belong to a place that lies in ruins. This is grief that remembers. The exiles do not numb themselves to their loss; they sit down deliberately and weep precisely <em>because</em> they remember Zion. The memory of God&rsquo;s dwelling place is what makes the present unbearable, and yet that same memory is what keeps faith alive in a foreign land. Cross-references: Lamentations 1:1-4; Psalm 42:1-4 (&ldquo;these things I remember, as I pour out my soul&rdquo;); Jeremiah 29:1-7 (the prophet&rsquo;s letter to these very exiles)."
  },
  {
    id: "t2",
    color: ROSE,
    title: "The Cruelty of Captors Who Demanded Entertainment",
    body: "&ldquo;For there our captors required of us songs, and our tormentors, mirth, saying, &lsquo;Sing us one of the songs of Zion!&rsquo;&rdquo; (137:3). The cruelty here is subtle and deep. The Babylonians do not merely enslave the exiles; they demand that the exiles perform their sacred worship as entertainment for the amusement of their conquerors. The &ldquo;songs of Zion&rdquo; were holy songs &mdash; pilgrim psalms celebrating God&rsquo;s presence in Jerusalem. To be asked to sing them on command, stripped of their context, turned into mere spectacle for those who destroyed the city they celebrate, is a profound form of mockery. It is the demand that the grieving smile, that the worshiper turn worship into a circus act for the entertainment of the oppressor. This verse names a particular kind of suffering: the violation that comes when what is most sacred to us is treated as a plaything by those with power over us. Cross-references: Matthew 27:29 (the mocking of Christ); Psalm 42:10 (&ldquo;my adversaries taunt me... while they say to me all the day long, &lsquo;Where is your God?&rsquo;&rdquo;)."
  },
  {
    id: "t3",
    color: PURPLE,
    title: "The Impossibility of Worship as Performance",
    body: "&ldquo;How shall we sing the LORD&rsquo;s song in a foreign land?&rdquo; (137:4). This question is the theological heart of the first half of the psalm. It is not that the exiles have forgotten how to sing; it is that they refuse to prostitute their worship. The songs of Zion are not generic music to be produced on demand &mdash; they are covenant praise tied to God&rsquo;s presence, his people, and his place. To sing them as entertainment for Babylon would be to empty them of meaning, to participate in their own mockery. The verse confronts every reader with the difference between worship and performance. True worship cannot be coerced, commodified, or extracted; it flows from the heart of the redeemed toward the God they love. There are moments when the most faithful act of worship is a refusal &mdash; a holy silence that will not turn the sacred into a show. Cross-references: John 4:23-24 (worship &ldquo;in spirit and truth&rdquo;); Amos 5:23-24 (God rejecting worship that has become empty noise); Isaiah 29:13."
  },
  {
    id: "t4",
    color: GOLD,
    title: "The Fierce Vow Never to Forget Jerusalem",
    body: "&ldquo;If I forget you, O Jerusalem, let my right hand forget its skill! Let my tongue stick to the roof of my mouth, if I do not remember you, if I do not set Jerusalem above my highest joy!&rdquo; (137:5-6). The psalmist swears a self-imprecating oath: may the very hand that plays the lyre wither, may the very tongue that sings fall silent, if Jerusalem is ever forgotten or demoted from its place as &ldquo;my highest joy.&rdquo; This is not mere nationalism. Jerusalem (Zion) is the place of God&rsquo;s dwelling, the location of the temple, the symbol of God&rsquo;s presence among his people. To set Jerusalem above one&rsquo;s highest joy is to refuse to let the comforts and prosperity of Babylon become a substitute for God himself. The exiles are tempted to assimilate, to make peace with their loss, to find their joy in the foreign land. The vow is a refusal of that temptation: nothing &mdash; no comfort, no success, no new home &mdash; may take the place of God&rsquo;s presence as the supreme treasure of the heart. Cross-references: Psalm 27:4; Psalm 84:10; Matthew 6:21 (&ldquo;where your treasure is, there your heart will be also&rdquo;); Hebrews 12:22 (the heavenly Jerusalem)."
  },
  {
    id: "t5",
    color: ROSE,
    title: "The Shocking Imprecation and the Cry for Justice",
    body: "The psalm ends with verses that confront every reader: &ldquo;Remember, O LORD, against the Edomites the day of Jerusalem, how they said, &lsquo;Lay it bare, lay it bare, down to its foundations!&rsquo; O daughter of Babylon, doomed to be destroyed, blessed shall he be who repays you with what you have done to us! Blessed shall he be who takes your little ones and dashes them against the rock!&rsquo;&rdquo; (137:7-9). These are among the most disturbing words in the Bible. They must be handled with theological care, not explained away. First, this is <em>prayer</em>, not policy: the psalmist hands his rage and his cry for justice over to God (&ldquo;Remember, O LORD&rdquo;) rather than taking vengeance himself &mdash; which is precisely what Scripture commands (&ldquo;Vengeance is mine, I will repay, says the Lord,&rdquo; Romans 12:19). Second, it appeals to the principle of proportional justice, <em>lex talionis</em>: &ldquo;repays you with what you have done to us&rdquo; &mdash; the dashing of infants was an actual atrocity Babylon itself committed against conquered peoples (2 Kings 8:12; Hosea 13:16; Nahum 3:10). The psalm does not invent a new cruelty; it cries out for the cruelty already committed to be justly answered. Third, it is the unfiltered honesty of the deeply wounded brought before God. We will explore in the Application tab how Christian faith reads these verses through the cross. Cross-references: Romans 12:19; Deuteronomy 32:35; Revelation 6:10 (&ldquo;How long... until you judge and avenge our blood?&rdquo;)."
  },
  {
    id: "t6",
    color: GREEN,
    title: "Longing for Zion as the Place of God's Presence",
    body: "Underneath every verse of Psalm 137 runs a single longing: to be where God dwells. Zion is not merely a city; in the theology of the Psalms it is the place God chose to put his name, the location of the temple, the symbol of communion with God himself. The exiles weep not chiefly for lost real estate but for the apparent loss of God&rsquo;s presence. Their tears, their hung-up lyres, their refusal to sing for Babylon, their fierce vow, even their anguished cry for justice &mdash; all of it is driven by a homesickness for God. This longing is not extinguished by exile; it is intensified by it. For the Christian reader, this points beyond the earthly Jerusalem to the city &ldquo;whose designer and builder is God&rdquo; (Hebrews 11:10), the &ldquo;Jerusalem above&rdquo; (Galatians 4:26), the new Jerusalem in which God dwells with his people forever and &ldquo;will wipe away every tear&rdquo; (Revelation 21:2-4). Every exile&rsquo;s grief in this psalm is finally a longing that only the presence of God can satisfy. Cross-references: Hebrews 11:13-16; Galatians 4:26; Revelation 21:2-4; Philippians 3:20 (&ldquo;our citizenship is in heaven&rdquo;)."
  },
];

const verseItems = [
  {
    id: "v1",
    ref: "137:1-3",
    label: "Psalm 137:1-3 &mdash; Weeping Beside the Waters, Mocked for Songs",
    body: "&ldquo;By the waters of Babylon, there we sat down and wept, when we remembered Zion. On the willows there we hung up our lyres. For there our captors required of us songs, and our tormentors, mirth, saying, &lsquo;Sing us one of the songs of Zion!&rsquo;&rdquo; (137:1-3). The opening scene is communal grief: &ldquo;<em>we</em> sat down,&rdquo; &ldquo;<em>we</em> wept.&rdquo; The exiles sit by the canals of Babylon, the symbols of its prosperity, and weep for the city now in ruins. Hanging the lyres on the willows is a silent protest &mdash; the instruments of joyful temple worship are laid aside because joy is impossible here. Into this grief comes a third demand from the captors: not just labor, but performance. &ldquo;Sing us one of the songs of Zion!&rdquo; The very songs that celebrated God&rsquo;s holy city are demanded as entertainment by those who destroyed it. The verse holds together three layers of suffering: displacement, grief, and the mockery of having the sacred treated as spectacle. It is the honest portrait of a people whose worship has been weaponized against them."
  },
  {
    id: "v2",
    ref: "137:4-6",
    label: "Psalm 137:4-6 &mdash; 'How Shall We Sing?' and the Vow Never to Forget",
    body: "&ldquo;How shall we sing the LORD&rsquo;s song in a foreign land?&rdquo; (137:4). The question is both literal and theological. The songs of Zion belong to the worship of God in his temple; to sing them on command for the amusement of Babylon would be to betray their meaning. So the psalmist turns from the captors&rsquo; demand to a fierce personal oath: &ldquo;If I forget you, O Jerusalem, let my right hand forget its skill! Let my tongue stick to the roof of my mouth, if I do not remember you, if I do not set Jerusalem above my highest joy!&rdquo; (137:5-6). The musician calls down paralysis on his own playing hand and silence on his own singing tongue if he ever lets Jerusalem slip from first place in his heart. Babylon offers comfort, assimilation, a new life &mdash; and the temptation is to let that comfort become the highest joy. The vow refuses. To &ldquo;set Jerusalem above my highest joy&rdquo; is to keep God&rsquo;s presence, not Babylon&rsquo;s prosperity, as the supreme treasure of the soul."
  },
  {
    id: "v3",
    ref: "137:7-9",
    label: "Psalm 137:7-9 &mdash; The Imprecation: A Cry for Justice Handed to God",
    body: "&ldquo;Remember, O LORD, against the Edomites the day of Jerusalem, how they said, &lsquo;Lay it bare, lay it bare, down to its foundations!&rsquo; O daughter of Babylon, doomed to be destroyed, blessed shall he be who repays you with what you have done to us! Blessed shall he be who takes your little ones and dashes them against the rock!&rsquo;&rdquo; (137:7-9). These verses must not be softened or skipped, but they must be understood. First, the psalmist addresses God: &ldquo;<em>Remember, O LORD</em>.&rdquo; He does not pick up a sword; he hands the cry for justice over to the God who alone may judge (Romans 12:19). The Edomites are named because they cheered the fall of Jerusalem and urged its total destruction (cf. Obadiah 10-14). The words about Babylon&rsquo;s &ldquo;little ones&rdquo; invoke the principle of proportional retribution &mdash; for Babylon had done exactly this to the children of conquered peoples (2 Kings 8:12; Hosea 13:16; Nahum 3:10). The psalm does not glorify cruelty; it cries out, in the raw language of the deeply wounded, for the cruelty already inflicted to be justly answered. It is honest lament that brings even rage to God rather than acting on it. The Christian reads it through the cross, where Christ both bears the judgment these verses long for and prays, &ldquo;Father, forgive them&rdquo; (Luke 23:34)."
  },
];

const applicationItems = [
  {
    id: "a1",
    color: TEAL,
    title: "Permission to Grieve Honestly Before God",
    body: "Psalm 137 gives the people of God permission to grieve without pretending. The exiles do not paste on a smile; they sit down and weep. There is no rebuke in the psalm for their tears, no demand that they cheer up, no spiritual bypassing of real loss. For believers tempted to think that faith requires constant positivity, this psalm is liberating: lament is a legitimate, biblical form of worship. Naming our losses honestly before God &mdash; the home we lost, the relationship that ended, the future that did not come &mdash; is not a failure of faith but an exercise of it. The God of Scripture invites us to bring our tears, not to hide them. Cross-reference: John 11:35 (&ldquo;Jesus wept&rdquo;); Romans 12:15 (&ldquo;weep with those who weep&rdquo;); 2 Corinthians 1:3-4 (&ldquo;the God of all comfort, who comforts us in all our affliction&rdquo;)."
  },
  {
    id: "a2",
    color: PURPLE,
    title: "Guarding Worship From Becoming Mere Performance",
    body: "&ldquo;How shall we sing the LORD&rsquo;s song in a foreign land?&rdquo; warns against turning worship into a commodity or a spectacle. The exiles refused to perform their sacred songs for entertainment. In every age the temptation remains to reduce worship to performance &mdash; to sing for the approval of an audience rather than the glory of God, to produce religious feeling on demand, to treat what is holy as a product. The psalm calls us to guard the integrity of worship: it is the response of a loved heart to a present God, not a show staged for onlookers. Sometimes the most faithful thing is a holy refusal to cheapen what is sacred. Cross-reference: John 4:23-24; Matthew 6:5-6 (warning against worship performed for the eyes of others); Colossians 3:16."
  },
  {
    id: "a3",
    color: GOLD,
    title: "Bringing Even Rage and the Desire for Vengeance to God",
    body: "The hardest verses of Psalm 137 teach the most surprising lesson: the right place for even our ugliest desire for vengeance is the open hand of God. Notice what the psalmist does <em>not</em> do &mdash; he does not retaliate, raise an army, or take justice into his own hands. He prays. He brings the full, unfiltered fury of a deeply wounded heart to God and leaves it there. This is precisely the path Scripture commands: &ldquo;Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, &lsquo;Vengeance is mine, I will repay, says the Lord&rsquo;&rdquo; (Romans 12:19). To bring our rage honestly to God is not to be approved in that rage but to be relieved of carrying it &mdash; to hand the cry for justice to the only Judge who can be trusted with it. The alternative to honest imprecation is not always peace; often it is either repression or revenge. The psalm models a third way: tell God the truth about your anger, and let him be the judge. Cross-reference: Romans 12:17-21; Deuteronomy 32:35; 1 Peter 2:23 (Christ &ldquo;continued entrusting himself to him who judges justly&rdquo;)."
  },
  {
    id: "a4",
    color: ROSE,
    title: "Reading the Imprecatory Verses Through the Cross",
    body: "How do verses that bless the one who dashes infants against rocks function as Christian Scripture? Carefully. They are descriptive of a real cry, not prescriptive of our conduct. The Christian reads them through the cross in at least three ways. First, the cross takes the cry for justice seriously: the longing that evil be judged is not dismissed &mdash; at Calvary God does judge sin fully, in his own Son. The atrocities of Babylon and every oppressor are not waved away; they are answered. Second, the cross transforms how we relate to our enemies: the One who absorbs the judgment also prays, &ldquo;Father, forgive them, for they know not what they do&rdquo; (Luke 23:34), and commands us, &ldquo;Love your enemies and pray for those who persecute you&rdquo; (Matthew 5:44). Third, the cross gives us a place to put our cry: the longing for justice in Psalm 137 finds its resolution not in our taking vengeance but in trusting the crucified and risen Judge who will one day set all things right (Revelation 6:9-11; 19:11). The imprecation reminds us that evil is real and must be answered; the cross shows us where and how God answers it. Cross-reference: Luke 23:34; Matthew 5:43-48; Romans 12:19; Revelation 19:11-16."
  },
];

const reflectionQuestions = [
  "The exiles &ldquo;hung up their lyres&rdquo; and refused to sing for their captors. Is there a loss in your life that you have rushed past rather than honestly grieved before God? What would it look like to &ldquo;sit down and weep&rdquo;?",
  "&ldquo;How shall we sing the LORD&rsquo;s song in a foreign land?&rdquo; In what ways are you tempted to turn worship into performance &mdash; singing for the approval of others rather than the glory of God?",
  "The psalmist vowed to set Jerusalem &ldquo;above my highest joy.&rdquo; What comforts or successes in your life are most tempted to take the place of God as your supreme treasure?",
  "The imprecatory verses bring raw rage and the cry for justice to God rather than acting on it. Is there anger or a desire for vengeance you have been carrying that you need to hand over to God in prayer?",
  "How does reading these disturbing verses through the cross &mdash; where Christ both bears the judgment and prays &ldquo;Father, forgive them&rdquo; &mdash; reshape the way you respond to those who have wronged you?",
  "The deepest longing of Psalm 137 is for the presence of God symbolized by Zion. How does the promise of the new Jerusalem, where God wipes away every tear, give you hope in your own seasons of exile?",
];

export default function Psalm137Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: "12px",
    padding: "1.5rem",
    marginBottom: "1.25rem",
  };
  const accordionHeader = (active: boolean): React.CSSProperties => ({
    width: "100%",
    textAlign: "left",
    background: active ? "#181830" : "transparent",
    color: TEXT,
    border: "none",
    borderBottom: `1px solid ${BORDER}`,
    padding: "1rem 1.25rem",
    fontSize: "1.05rem",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <section style={{ maxWidth: 980, margin: "0 auto", padding: "2.5rem 1.25rem 1rem" }}>
        <p style={{ color: GOLD, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Book of Psalms &middot; A Psalm of Exile
        </p>
        <h1 style={{ fontSize: "2.6rem", lineHeight: 1.1, margin: "0 0 0.75rem", fontWeight: 800 }}>
          Psalm 137: By the Waters of Babylon &mdash; Grief, Memory, and the Cry for Justice
        </h1>
        <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.6, maxWidth: 760 }}>
          One of the most emotionally raw psalms in Scripture &mdash; a lament of exile that moves from tears beside the rivers of Babylon to a fierce vow never to forget Jerusalem, ending in a shocking imprecation that must be handled with honesty and theological care.
        </p>
        <blockquote style={{ marginTop: "1.75rem", borderLeft: `4px solid ${TEAL}`, background: CARD, padding: "1.25rem 1.5rem", borderRadius: "0 12px 12px 0" }}>
          <p style={{ fontSize: "1.25rem", lineHeight: 1.55, fontStyle: "italic", margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;By the waters of Babylon, there we sat down and wept, when we remembered Zion.&rdquo;" }} />
          <footer style={{ marginTop: "0.75rem", color: GOLD, fontWeight: 700 }}>Psalm 137:1</footer>
        </blockquote>
      </section>

      <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, background: BG, borderBottom: `1px solid ${BORDER}`, marginTop: "1.5rem" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 1.25rem", display: "flex", gap: "0.5rem", overflowX: "auto" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                background: "transparent",
                color: tab === t ? TEXT : MUTED,
                border: "none",
                borderBottom: tab === t ? `3px solid ${GOLD}` : "3px solid transparent",
                padding: "0.9rem 0.75rem",
                fontSize: "0.98rem",
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ maxWidth: 980, margin: "0 auto", padding: "2rem 1.25rem 4rem" }}>
        {tab === "overview" && (
          <div>
            <div style={cardStyle}>
              <h2 style={{ marginTop: 0, fontSize: "1.5rem" }}>Summary</h2>
              <div style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 137 is the exiles&rsquo; lament &mdash; a poem of stunning emotional honesty written by or for the people of Judah carried off to Babylon after the fall of Jerusalem. It begins with tears beside the foreign rivers and the silenced lyres hung on the willows. It records the cruelty of captors who demanded the sacred songs of Zion as entertainment, and the refusal of the exiles to turn worship into a performance for their oppressors. It rises to a fierce, self-imprecating vow never to forget Jerusalem or let any comfort take its place. And it ends with three of the most disturbing verses in the Bible &mdash; an imprecation that hands the cry for justice over to God. The psalm models bringing our most unfiltered grief and even our rage honestly before God, and it must be read with care, through the cross." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={{ marginTop: 0, fontSize: "1.5rem" }}>Structure</h2>
              <div style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "<strong style=\"color:#F2F2F8\">Verses 1-3 &mdash; The Scene of Grief:</strong> The exiles weep by the waters of Babylon, hang up their lyres, and are mocked by captors demanding the songs of Zion.<br/><br/><strong style=\"color:#F2F2F8\">Verses 4-6 &mdash; The Refusal and the Vow:</strong> &ldquo;How shall we sing the LORD&rsquo;s song in a foreign land?&rdquo; followed by the fierce oath never to forget Jerusalem or set anything above it.<br/><br/><strong style=\"color:#F2F2F8\">Verses 7-9 &mdash; The Imprecation:</strong> A cry to God to remember Edom&rsquo;s betrayal and to repay Babylon with the same atrocities it committed &mdash; the cry for justice handed over to the Judge of all the earth." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={{ marginTop: 0, fontSize: "1.5rem" }}>Context</h2>
              <div style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 137 is set in the Babylonian exile, after Jerusalem fell and the temple was destroyed in 586 BC. The Babylonians deported the people of Judah hundreds of miles to the heart of their empire, settling them along the great irrigation canals &mdash; the &ldquo;waters of Babylon.&rdquo; For a people whose entire identity was bound up with Zion, the temple, and the presence of God, this was not merely a political defeat but a spiritual catastrophe. The psalm voices their anguish with unflinching honesty. The mention of Edom (137:7) recalls how the neighboring Edomites cheered and assisted at Jerusalem&rsquo;s fall (cf. Obadiah). The shocking final verses reflect the brutal reality of ancient warfare &mdash; the dashing of infants was a known atrocity that Babylon itself inflicted on conquered peoples (2 Kings 8:12; Hosea 13:16; Nahum 3:10). The psalm requires careful handling: it is honest lament that brings rage and the desire for vengeance to God rather than acting on it, in keeping with &ldquo;Vengeance is mine, says the Lord&rdquo; (Romans 12:19). Christian faith reads it finally through the cross, where Christ absorbs the judgment and prays, &ldquo;Father, forgive them.&rdquo;" }} />
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Six themes carry the psalm from grief, through fierce loyalty to Jerusalem, to its disturbing and honest cry for justice. Tap each to expand.
            </p>
            {themeItems.map((item) => (
              <div key={item.id} style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
                <button onClick={() => toggle(item.id)} style={accordionHeader(open === item.id)}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: item.color }} />
                    {item.title}
                  </span>
                  <span style={{ color: MUTED, fontSize: "1.4rem", lineHeight: 1 }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "1.25rem 1.5rem", color: MUTED, fontSize: "1.02rem", lineHeight: 1.75 }}
                    dangerouslySetInnerHTML={{ __html: item.body }} />
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "verse" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Work through Psalm 137 section by section, from the tears beside the rivers to the closing imprecation. Tap each passage to expand.
            </p>
            {verseItems.map((item) => (
              <div key={item.id} style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
                <button onClick={() => toggle(item.id)} style={accordionHeader(open === item.id)}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ color: GOLD, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{item.ref}</span>
                    <span dangerouslySetInnerHTML={{ __html: item.label }} />
                  </span>
                  <span style={{ color: MUTED, fontSize: "1.4rem", lineHeight: 1 }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "1.25rem 1.5rem", color: MUTED, fontSize: "1.02rem", lineHeight: 1.75 }}
                    dangerouslySetInnerHTML={{ __html: item.body }} />
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "application" && (
          <div>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Psalm 137 teaches us to grieve honestly, to guard worship from performance, to hand even our rage to God, and to read the longing for justice through the cross of Christ.
            </p>
            {applicationItems.map((item) => (
              <div key={item.id} style={{ ...cardStyle, borderLeft: `4px solid ${item.color}` }}>
                <h3 style={{ marginTop: 0, fontSize: "1.25rem" }}>{item.title}</h3>
                <div style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.75 }}
                  dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}

            <div style={{ ...cardStyle, borderLeft: `4px solid ${GOLD}` }}>
              <h3 style={{ marginTop: 0, fontSize: "1.3rem" }}>Questions for Reflection</h3>
              <ol style={{ color: MUTED, fontSize: "1.02rem", lineHeight: 1.7, paddingLeft: "1.25rem", margin: 0 }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ marginBottom: "0.9rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>

            <h3 style={{ fontSize: "1.4rem", margin: "2.25rem 0 1.25rem" }}>Watch and Reflect</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ padding: "0.85rem 1rem", margin: 0, color: TEXT, fontSize: "0.95rem", fontWeight: 600 }}>{v.title}</p>
                </div>
              ))}
            </div>

            <div style={{ ...cardStyle, marginTop: "2.25rem", borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ marginTop: 0, fontSize: "1.3rem" }}>Closing Prayer</h3>
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.75, fontStyle: "italic", margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Lord of every exile, you do not despise our tears or silence our laments. When we sit by foreign rivers and weep, meet us there. Keep us from cheapening worship into performance, and keep your presence as our highest joy when comfort tempts us to forget you. We confess the anger and the cry for justice we carry; we hand them over to you, the only Judge who can be trusted with them. Teach us to long for the city whose builder and maker is you, the new Jerusalem where you will wipe away every tear. We trust the crucified and risen Christ, who bore the judgment and prayed for his enemies, to set all things right at last. Amen." }} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
