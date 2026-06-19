"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const THEME_ITEMS = [
  {
    id: "t-waters",
    color: TEAL,
    title: "The Waters Up to the Neck: Overwhelming Distress",
    html:
      "Psalm 69 opens with one of the most vivid pictures of drowning anguish in all of Scripture: &ldquo;Save me, O God! For the waters have come up to my neck. I sink in deep mire, where there is no foothold; I have come into deep waters, and the flood sweeps over me&rdquo; (69:1&ndash;2). The imagery is not gentle. The sufferer is going under. There is no solid ground, no place to stand, no ledge to grip. The flood is not a passing shower but an engulfing torrent. " +
      "In the ancient Near East the chaotic deep was a symbol of death and disorder, the realm where life is unmade. To be in &ldquo;deep waters&rdquo; is to be at the edge of being swallowed by death itself. The psalmist is exhausted &mdash; &ldquo;I am weary with my crying out; my throat is parched. My eyes grow dim with waiting for my God&rdquo; (69:3). " +
      "This is the language of a person whose suffering has gone on so long that even crying out has become wearying. Cross-references: Psalm 42:7 (&ldquo;all your breakers and your waves have gone over me&rdquo;); Psalm 18:16 (&ldquo;he drew me out of many waters&rdquo;); Jonah 2:3&ndash;5; and supremely the passion of Christ, who in Gethsemane was &ldquo;sorrowful, even to death&rdquo; (Matthew 26:38).",
  },
  {
    id: "t-zeal",
    color: GOLD,
    title: "Zeal for Your House: Reproach Borne for God's Sake",
    html:
      "At the heart of the psalm stands a stunning confession: &ldquo;For it is for your sake that I have borne reproach, that dishonor has covered my face... For zeal for your house has consumed me, and the reproaches of those who reproach you have fallen on me&rdquo; (69:7, 9). " +
      "The sufferer is not being hated for his own faults but precisely because of his devotion to God. His passionate commitment to God&rsquo;s honor and God&rsquo;s house has made him a target. The insults that rightly belong to God &mdash; the contempt of those who despise the Lord &mdash; have landed instead on his servant. He has become a lightning rod for the world&rsquo;s hostility toward God. " +
      "This is the verse the early church saw fulfilled most clearly in Jesus. When Christ cleansed the temple, &ldquo;his disciples remembered that it was written, &lsquo;Zeal for your house will consume me&rsquo;&rdquo; (John 2:17). And Paul applies the second half directly to Christ: &ldquo;For Christ did not please himself, but as it is written, &lsquo;The reproaches of those who reproached you fell on me&rsquo;&rdquo; (Romans 15:3). " +
      "Cross-references: John 2:17; Romans 15:3; Psalm 119:139; 1 Peter 4:14 (&ldquo;If you are insulted for the name of Christ, you are blessed&rdquo;).",
  },
  {
    id: "t-hated",
    color: ROSE,
    title: "Hated Without Cause; Restoring What He Did Not Steal",
    html:
      "&ldquo;More in number than the hairs of my head are those who hate me without cause; mighty are those who would destroy me, those who attack me with lies. What I did not steal must I now restore?&rdquo; (69:4). " +
      "Two notes sound here. First, the hatred is groundless &mdash; &ldquo;without cause.&rdquo; The sufferer has given no just reason for the venom directed at him. Jesus quotes precisely this phrase to explain the world&rsquo;s hatred of him: &ldquo;But the word that is written in their Law must be fulfilled: &lsquo;They hated me without a cause&rsquo;&rdquo; (John 15:25). " +
      "Second, he is forced to make restitution for what he never took &mdash; an image of bearing a penalty he did not incur, suffering for guilt that is not his own. This anticipates the great exchange of the gospel, in which the sinless one is treated as guilty so that the guilty might be treated as righteous (2 Corinthians 5:21; Isaiah 53:4&ndash;6). " +
      "Cross-references: John 15:25; Psalm 35:19; Isaiah 53:4&ndash;6; 1 Peter 2:22&ndash;24.",
  },
  {
    id: "t-vinegar",
    color: PURPLE,
    title: "Poison for Food and Vinegar for Thirst",
    html:
      "Among the catalog of cruelties the sufferer endures is one bitter, concrete detail: &ldquo;They gave me poison for food, and for my thirst they gave me sour wine to drink&rdquo; (69:21). The Hebrew word rendered &ldquo;sour wine&rdquo; is the cheap, vinegary drink of the poor and the soldier. " +
      "When those around the sufferer should have offered comfort &mdash; &ldquo;I looked for pity, but there was none, and for comforters, but I found none&rdquo; (69:20) &mdash; they instead heaped on bitterness. This detail is fulfilled with remarkable precision at the crucifixion. " +
      "Matthew records that the soldiers &ldquo;offered him wine to drink, mixed with gall&rdquo; (Matthew 27:34), and at the cross &ldquo;they put a sponge full of the sour wine... and gave it to him to drink&rdquo; (Matthew 27:48). John makes the connection explicit: &ldquo;After this, Jesus, knowing that all was now finished, said (to fulfill the Scripture), &lsquo;I thirst&rsquo;&rdquo; (John 19:28&ndash;30). " +
      "Cross-references: Matthew 27:34, 48; Mark 15:23, 36; Luke 23:36; John 19:28&ndash;30.",
  },
  {
    id: "t-imprecation",
    color: GREEN,
    title: "The Imprecation: Crying for Justice (vv. 22-28)",
    html:
      "Psalm 69 contains one of the harshest imprecatory sections in the Psalter: &ldquo;Let their own table before them become a snare... Let their eyes be darkened... Pour out your indignation upon them... May they have no acquittal from you... Let them be blotted out of the book of the living&rdquo; (69:22&ndash;28). Modern readers often recoil from these verses, and rightly feel their weight. " +
      "Yet they must be read carefully. This is not personal vengeance taken into the sufferer&rsquo;s own hands; it is a prayer that hands the matter over to God. The sufferer does not strike back &mdash; he asks God to be the judge. This is the same impulse the New Testament commends: &ldquo;Never avenge yourselves, but leave it to the wrath of God&rdquo; (Romans 12:19). " +
      "These verses also have a startling afterlife in the New Testament. Acts 1:20 applies the imprecation to Judas (&ldquo;Let his camp become desolate&rdquo;), and Romans 11:9&ndash;10 cites verses 22&ndash;23 regarding hardened unbelief. Understood rightly, the imprecation is the cry for divine justice against unrepentant evil &mdash; a longing that wickedness not have the last word. " +
      "Cross-references: Romans 11:9&ndash;10; Acts 1:20; Romans 12:19; Revelation 6:10.",
  },
  {
    id: "t-praise",
    color: GOLD,
    title: "The Final Turn to Praise",
    html:
      "Like most laments, Psalm 69 does not end in the pit. After the darkness comes the turn: &ldquo;But I am afflicted and in pain; let your salvation, O God, set me on high! I will praise the name of God with a song; I will magnify him with thanksgiving&rdquo; (69:29&ndash;30). " +
      "The psalmist declares that thanksgiving pleases God more than ritual sacrifice (69:31) and offers a word of hope to all who suffer: &ldquo;For the LORD hears the needy and does not despise his own people who are prisoners&rdquo; (69:33). The psalm closes with a sweeping vision of cosmic praise and the salvation of Zion (69:34&ndash;36). " +
      "The movement from drowning waters to magnifying song is the architecture of biblical lament: honest complaint carried all the way to God, and there transformed into trust. The sufferer is not yet rescued, but he sings as though rescue is certain, because the character of God guarantees it. " +
      "Cross-references: Psalm 22:22&ndash;31; Psalm 40:1&ndash;3; Hebrews 13:15; Philippians 4:6&ndash;7.",
  },
];

const VERSE_ITEMS = [
  {
    id: "v1",
    ref: "Psalm 69:1-4",
    label: "The Drowning Cry",
    color: TEAL,
    html:
      "&ldquo;Save me, O God! For the waters have come up to my neck. I sink in deep mire, where there is no foothold; I have come into deep waters, and the flood sweeps over me&rdquo; (69:1&ndash;2). " +
      "The psalm begins at the point of going under. The waters, the mire, the flood &mdash; all picture an engulfing distress that has stripped away every place to stand. &ldquo;I am weary with my crying out; my throat is parched. My eyes grow dim with waiting for my God&rdquo; (69:3). " +
      "Then comes the first naming of the enemies: &ldquo;More in number than the hairs of my head are those who hate me without cause... What I did not steal must I now restore?&rdquo; (69:4). The hatred is groundless, the burden is undeserved. Jesus took up the words &ldquo;they hated me without a cause&rdquo; to describe the world&rsquo;s rejection of him (John 15:25).",
  },
  {
    id: "v2",
    ref: "Psalm 69:5-12",
    label: "Reproach for God's Sake; Zeal for His House",
    color: GOLD,
    html:
      "&ldquo;O God, you know my folly; the wrongs I have done are not hidden from you&rdquo; (69:5). The sufferer is honest before God &mdash; he is no sinless boaster, even though his persecution is unjust. He prays that his disgrace would not bring shame on the faithful (69:6). " +
      "Then the great confession: &ldquo;For it is for your sake that I have borne reproach, that dishonor has covered my face. I have become a stranger to my brothers, an alien to my mother&rsquo;s sons. For zeal for your house has consumed me, and the reproaches of those who reproach you have fallen on me&rdquo; (69:7&ndash;9). " +
      "John 2:17 sees this fulfilled in Jesus cleansing the temple; Romans 15:3 applies it to Christ bearing reproach for the Father. The mockery widens: he weeps and fasts, and they ridicule him &mdash; &ldquo;I am the talk of those who sit in the gate, and the drunkards make songs about me&rdquo; (69:11&ndash;12).",
  },
  {
    id: "v3",
    ref: "Psalm 69:13-18",
    label: "But My Prayer Is to You",
    color: PURPLE,
    html:
      "The center of the psalm pivots to direct petition: &ldquo;But as for me, my prayer is to you, O LORD. At an acceptable time, O God, in the abundance of your steadfast love answer me in your saving faithfulness&rdquo; (69:13). " +
      "He returns to the water imagery in prayer: &ldquo;Deliver me from sinking in the mire; let me be delivered from my enemies and from the deep waters. Let not the flood sweep over me, or the deep swallow me up&rdquo; (69:14&ndash;15). " +
      "The ground of his appeal is not his own worth but God&rsquo;s character: &ldquo;Answer me, O LORD, for your steadfast love is good; according to your abundant mercy, turn to me. Hide not your face from your servant, for I am in distress; make haste to answer me&rdquo; (69:16&ndash;17). The repeated word is *hesed* &mdash; God&rsquo;s covenant steadfast love.",
  },
  {
    id: "v4",
    ref: "Psalm 69:19-21",
    label: "Reproach Has Broken My Heart; Vinegar to Drink",
    color: ROSE,
    html:
      "&ldquo;You know my reproach, and my shame and my dishonor; my foes are all known to you&rdquo; (69:19). The sufferer is fully exposed before both his enemies and his God. " +
      "Then a verse of aching loneliness: &ldquo;Reproaches have broken my heart, so that I am in despair. I looked for pity, but there was none, and for comforters, but I found none&rdquo; (69:20). In his lowest moment no one stands with him. " +
      "Instead of comfort he is given cruelty: &ldquo;They gave me poison for food, and for my thirst they gave me sour wine to drink&rdquo; (69:21). This single line is fulfilled at the crucifixion (Matthew 27:34, 48; John 19:28&ndash;30), where the soldiers offer Jesus sour wine and gall, and Jesus says &ldquo;I thirst&rdquo; to fulfill the Scripture.",
  },
  {
    id: "v5",
    ref: "Psalm 69:22-28",
    label: "The Imprecation Against the Persecutors",
    color: GREEN,
    html:
      "Here the psalm turns to its hardest words, a sustained cry for divine judgment: &ldquo;Let their own table before them become a snare; and when they are at peace, let it become a trap. Let their eyes be darkened, so that they cannot see, and make their loins tremble continually&rdquo; (69:22&ndash;23). " +
      "&ldquo;Pour out your indignation upon them, and let your burning anger overtake them. May their camp be a desolation; let no one dwell in their tents&rdquo; (69:24&ndash;25). The plea reaches its climax: &ldquo;Let them be blotted out of the book of the living; let them not be enrolled among the righteous&rdquo; (69:28). " +
      "These are not curses the sufferer enacts himself; they are pleas placed in God&rsquo;s hands. The New Testament does not erase them but interprets them: verse 25 is applied to Judas in Acts 1:20, and verses 22&ndash;23 to hardened unbelief in Romans 11:9&ndash;10. They voice the longing that evil be judged and that God vindicate the wronged.",
  },
  {
    id: "v6",
    ref: "Psalm 69:29-36",
    label: "I Will Praise the Name of God with a Song",
    color: GOLD,
    html:
      "From the depths the psalm rises: &ldquo;But I am afflicted and in pain; let your salvation, O God, set me on high! I will praise the name of God with a song; I will magnify him with thanksgiving&rdquo; (69:29&ndash;30). " +
      "Thanksgiving, he declares, pleases the Lord more than sacrifice (69:31), and the news will gladden the lowly: &ldquo;Let the seekers of God revive your hearts. For the LORD hears the needy and does not despise his own people who are prisoners&rdquo; (69:32&ndash;33). " +
      "The psalm ends with a vision far larger than one sufferer: &ldquo;Let heaven and earth praise him, the seas and everything that moves in them&rdquo; (69:34). &ldquo;For God will save Zion and build up the cities of Judah... the offspring of his servants shall inherit it, and those who love his name shall dwell in it&rdquo; (69:35&ndash;36). The drowning cry has become a song of cosmic hope.",
  },
];

const APP_ITEMS = [
  {
    id: "a-suffering",
    color: TEAL,
    title: "When You Are Drowning",
    html:
      "Psalm 69 hands honest words to anyone whose troubles feel like a flood with no foothold. If you are going under &mdash; in grief, in anxiety, in circumstances that have swept the ground out from under you &mdash; this psalm gives you permission to say so to God plainly: &ldquo;Save me, O God! For the waters have come up to my neck.&rdquo; " +
      "Notice that the psalmist does not pretend to be calm or composed. He is weary, parched, his eyes failing from waiting. Faith here is not the absence of distress but the act of crying that distress out to the right person. The waters do not yet recede in this psalm, yet the sufferer keeps addressing God. Prayer that names the flood honestly is more faithful than silence that pretends the water is not there.",
  },
  {
    id: "a-reproach",
    color: GOLD,
    title: "When You Suffer for Doing Right",
    html:
      "There is a particular kind of pain in being hated not for your sins but for your faithfulness &mdash; for zeal for God&rsquo;s house, for standing where God stands. Psalm 69 names this exactly: &ldquo;For your sake I have borne reproach.&rdquo; " +
      "If your love for Christ has cost you friendships, reputation, or belonging &mdash; if you have become &ldquo;a stranger to your brothers&rdquo; for the gospel&rsquo;s sake &mdash; you are walking a road the psalmist walked and that Christ walked before you. Peter writes, &ldquo;If you are insulted for the name of Christ, you are blessed, because the Spirit of glory and of God rests upon you&rdquo; (1 Peter 4:14). The reproach you bear is not random; it is, in a small way, the reproach that fell on Christ.",
  },
  {
    id: "a-christ",
    color: PURPLE,
    title: "Reading the Psalm Through Christ",
    html:
      "Psalm 69 is, after Psalm 22, the most quoted psalm in the New Testament with reference to the passion. The zeal that consumes (69:9 in John 2:17), the reproaches that fall (69:9 in Romans 15:3), the hatred without cause (69:4 in John 15:25), the sour wine for thirst (69:21 in Matthew 27 and John 19), and the desolate camp (69:25 in Acts 1:20) all converge on the cross. " +
      "This means the suffering righteous one of Psalm 69 finds his deepest fulfillment in Jesus. When you pray this psalm, you are praying words that Christ himself embodied. And that is profound comfort: the Lord you cry to is not distant from the flood &mdash; he has been in the deep waters himself, drank the vinegar, bore the groundless hatred, and came out the other side in resurrection. Your drowning cry rises to one who has been where you are.",
  },
  {
    id: "a-imprecation",
    color: GREEN,
    title: "What to Do with the Cry for Justice",
    html:
      "The imprecatory verses (69:22&ndash;28) trouble many readers, and they should be handled with care. They are not a license for personal revenge. The whole point is that the sufferer does not retaliate &mdash; he hands the matter to God, the only righteous Judge. " +
      "When you have been deeply wronged, the godly path is the path of Psalm 69: bring the rage and the longing for justice to God, and leave it there. &ldquo;Never avenge yourselves, but leave it to the wrath of God&rdquo; (Romans 12:19). To pray for justice is not the same as taking justice. These verses also remind us that God takes evil seriously; he will not let wickedness have the last word. We can entrust even our worst enemies to a Judge who is both perfectly just and patient, &ldquo;not wishing that any should perish&rdquo; (2 Peter 3:9).",
  },
];

const REFLECTION_QUESTIONS = [
  "Where in your life right now do the &ldquo;waters&rdquo; feel like they have come up to your neck? Have you said so honestly to God, or have you tried to stay composed?",
  "The psalmist suffers reproach &ldquo;for God&rsquo;s sake.&rdquo; Has your faithfulness to Christ ever cost you something? How did you carry that cost?",
  "Verse 20 says, &ldquo;I looked for pity, but there was none.&rdquo; When have you felt without comforters? How does it change things to know Christ entered that same loneliness?",
  "The sour wine of verse 21 was fulfilled at the cross. How does seeing Jesus in this psalm reshape the way you read your own suffering?",
  "The imprecatory verses hand judgment over to God rather than taking revenge. Is there a wrong you need to release into God&rsquo;s hands rather than carry as bitterness?",
  "The psalm ends in a song of praise before the rescue is visible. What would it look like for you to &ldquo;magnify him with thanksgiving&rdquo; in the middle of an unresolved trial?",
];

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 69: The Suffering of the Righteous One" },
  { videoId: "Q2oNOlXzBhY", title: "Zeal for Your House: Psalm 69 and the Passion" },
  { videoId: "8phkAg8PMHE", title: "Praying the Imprecatory Psalms" },
  { videoId: "fNk_zzaMoSs", title: "From the Deep Waters to the Song of Praise" },
];

export default function Psalm69Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const card: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: "1.5rem",
  };

  const accordionButton = (isOpen: boolean, color: string): React.CSSProperties => ({
    width: "100%",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 1.25rem",
    background: isOpen ? `${color}14` : "transparent",
    border: `1px solid ${isOpen ? color + "55" : BORDER}`,
    borderRadius: 12,
    cursor: "pointer",
    marginBottom: 8,
    color: TEXT,
    fontWeight: 700,
    fontSize: "1rem",
    transition: "all .2s",
  });

  const panelStyle = (color: string): React.CSSProperties => ({
    background: `${color}0A`,
    border: `1px solid ${color}26`,
    borderRadius: 10,
    padding: "1.1rem 1.3rem",
    marginBottom: 10,
    color: MUTED,
    lineHeight: 1.8,
    fontSize: "0.98rem",
  });

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <main style={{ maxWidth: 920, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <section style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.75rem",
            }}
          >
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: 2,
                color: TEAL,
                textTransform: "uppercase",
              }}
            >
              Psalms &middot; Messianic Lament
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(1.9rem,4vw,2.9rem)",
              fontWeight: 900,
              lineHeight: 1.14,
              marginBottom: "1rem",
            }}
          >
            Psalm 69: The Great Passion Psalm
          </h1>
          <p style={{ color: MUTED, fontSize: "1.12rem", lineHeight: 1.75, maxWidth: 700 }}>
            One of the most frequently quoted psalms in the New Testament &mdash; second only to
            Psalm 22 for the passion of Christ. A drowning cry of the suffering righteous one that
            moves from the engulfing waters to a song of thanksgiving.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              background: `${TEAL}12`,
              border: `1px solid ${TEAL}40`,
              borderLeft: `4px solid ${TEAL}`,
              borderRadius: 14,
              padding: "1.3rem 1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.74rem",
                fontWeight: 800,
                letterSpacing: 1.5,
                color: TEAL,
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Key Verse &mdash; Psalm 69:9
            </div>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.7,
                color: TEXT,
                fontStyle: "italic",
                margin: 0,
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;For zeal for your house has consumed me, and the reproaches of those who reproach you have fallen on me.&rdquo;",
              }}
            />
          </div>
        </section>

        <nav
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
            position: "sticky",
            top: "var(--header-height, 80px)",
            background: BG,
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            zIndex: 5,
          }}
        >
          {TABS.map((t) => {
            const activeTab = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  padding: "0.55rem 1.15rem",
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  background: activeTab ? TEAL : "transparent",
                  color: activeTab ? "#fff" : MUTED,
                  border: `1px solid ${activeTab ? TEAL : BORDER}`,
                  cursor: "pointer",
                  transition: "all .18s",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </nav>

        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.85rem", color: TEAL }}>
                Summary
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 69 is a lament of the suffering righteous one &mdash; a person hated &ldquo;without cause&rdquo; who is drowning in distress and crying out to be saved. The psalm opens with the unforgettable image of waters rising to the neck and deep mire with no foothold (69:1&ndash;2). The sufferer bears reproach not for his own sins but for his devotion to God: &ldquo;Zeal for your house has consumed me&rdquo; (69:9). He is given poison for food and sour wine for his thirst (69:21), pours out a stark cry for divine justice against his persecutors (69:22&ndash;28), and finally turns to praise, certain that &ldquo;the LORD hears the needy&rdquo; (69:33). The journey runs from the engulfing flood to a song of cosmic thanksgiving.",
                }}
              />
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.85rem", color: GOLD }}>
                Structure
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { ref: "69:1-4", label: "The drowning cry: waters to the neck; hated without cause", color: TEAL },
                  { ref: "69:5-12", label: "Reproach for God's sake; zeal for his house consumes him", color: GOLD },
                  { ref: "69:13-18", label: "But my prayer is to you; rescue me by your steadfast love", color: PURPLE },
                  { ref: "69:19-21", label: "A broken heart; no comforters; vinegar for thirst", color: ROSE },
                  { ref: "69:22-28", label: "The imprecation: justice handed over to God", color: GREEN },
                  { ref: "69:29-36", label: "The turn to praise; God will save Zion", color: GOLD },
                ].map((s) => (
                  <div
                    key={s.ref}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "baseline",
                      background: `${s.color}0C`,
                      border: `1px solid ${s.color}2A`,
                      borderRadius: 10,
                      padding: "0.8rem 1rem",
                    }}
                  >
                    <span style={{ fontWeight: 800, color: s.color, minWidth: 78, fontSize: "0.9rem" }}>
                      {s.ref}
                    </span>
                    <span style={{ color: MUTED, lineHeight: 1.6, fontSize: "0.95rem" }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.85rem", color: PURPLE }}>
                Context: A Psalm Quoted at the Cross
              </h2>
              <p
                style={{ color: MUTED, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Psalm 69 is woven through the New Testament more than almost any other text. &ldquo;Zeal for your house will consume me&rdquo; (v. 9) is quoted in John 2:17 at the cleansing of the temple. &ldquo;The reproaches of those who reproached you fell on me&rdquo; (v. 9) is quoted in Romans 15:3. &ldquo;Hated without cause&rdquo; (v. 4) is echoed in John 15:25. &ldquo;They gave me sour wine to drink&rdquo; (v. 21) is fulfilled at the crucifixion (Matthew 27:34, 48; John 19:28&ndash;30). The imprecation &ldquo;let their camp become desolate&rdquo; (v. 25) is applied to Judas in Acts 1:20, and &ldquo;let them be blotted out of the book of the living&rdquo; (v. 28) connects to Romans 11:9&ndash;10. Like Psalm 22, this is a psalm of the suffering righteous one that finds its deepest fulfillment in the passion of Christ.",
                }}
              />
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.6rem", color: TEAL }}>
              Key Themes of Psalm 69
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "1.4rem" }}>
              Six movements carry the psalm from the engulfing flood to the song of praise. Open each
              to explore the theme with its cross-references.
            </p>
            {THEME_ITEMS.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    style={accordionButton(isOpen, item.color)}
                    onClick={() => toggle(item.id)}
                  >
                    <span>{item.title}</span>
                    <span style={{ color: item.color, fontSize: "1.3rem", lineHeight: 1 }}>
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={panelStyle(item.color)}
                      dangerouslySetInnerHTML={{ __html: item.html }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "verse" && (
          <div style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.6rem", color: GOLD }}>
              Verse by Verse
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "1.4rem" }}>
              Walk through Psalm 69 section by section, from the drowning cry to the closing song.
            </p>
            {VERSE_ITEMS.map((item) => {
              const isOpen = open === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    style={accordionButton(isOpen, item.color)}
                    onClick={() => toggle(item.id)}
                  >
                    <span>
                      <span style={{ color: item.color, fontWeight: 900 }}>{item.ref}</span>
                      <span style={{ color: MUTED, fontWeight: 500 }}> &mdash; {item.label}</span>
                    </span>
                    <span style={{ color: item.color, fontSize: "1.3rem", lineHeight: 1 }}>
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={panelStyle(item.color)}
                      dangerouslySetInnerHTML={{ __html: item.html }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.6rem", color: TEAL }}>
                Living This Psalm
              </h2>
              <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "1.4rem" }}>
                Psalm 69 speaks to the drowning, the falsely accused, the faithful who suffer for
                Christ &mdash; and points all of them to the one who walked this road first.
              </p>
              {APP_ITEMS.map((item) => {
                const isOpen = open === item.id;
                return (
                  <div key={item.id}>
                    <button
                      type="button"
                      style={accordionButton(isOpen, item.color)}
                      onClick={() => toggle(item.id)}
                    >
                      <span>{item.title}</span>
                      <span style={{ color: item.color, fontSize: "1.3rem", lineHeight: 1 }}>
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={panelStyle(item.color)}
                        dangerouslySetInnerHTML={{ __html: item.html }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "1rem", color: PURPLE }}>
                Reflection Questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {REFLECTION_QUESTIONS.map((q, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      background: `${PURPLE}0C`,
                      border: `1px solid ${PURPLE}2A`,
                      borderRadius: 12,
                      padding: "1rem 1.2rem",
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: `${PURPLE}25`,
                        border: `1px solid ${PURPLE}60`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 900,
                        color: TEXT,
                        flexShrink: 0,
                        fontSize: "0.9rem",
                      }}
                    >
                      {i + 1}
                    </div>
                    <p
                      style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "1rem", color: ROSE }}>
                Video Teaching
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div
                    key={v.videoId}
                    style={{
                      borderRadius: 14,
                      overflow: "hidden",
                      border: `1px solid ${BORDER}`,
                    }}
                  >
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div
                      style={{
                        padding: "0.8rem 1rem",
                        background: CARD,
                        color: TEXT,
                        fontWeight: 700,
                        fontSize: "0.95rem",
                      }}
                    >
                      {v.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                ...card,
                background: `${GREEN}10`,
                border: `1px solid ${GREEN}40`,
              }}
            >
              <h2 style={{ fontWeight: 900, fontSize: "1.35rem", marginBottom: "0.85rem", color: GREEN }}>
                A Closing Prayer
              </h2>
              <p
                style={{ color: TEXT, lineHeight: 1.85, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Lord God, when the waters rise to my neck and there is no foothold beneath me, save me. I am weary with crying out; my throat is parched and my eyes grow dim with waiting for you. You know my reproach and my shame; you know the wrongs done to me and the wrongs I have done. Yet my prayer is to you, for your steadfast love is good. Hide not your face from your servant. Where I am hated without cause, give me grace to entrust the judgment to you and not to take it into my own hands. Teach me to see in this psalm my Savior, who bore the reproaches that fell on you, who drank the sour wine, who went down into the deep waters and rose again. Set my soul on high, and turn my drowning cry into a song. I will praise your name with thanksgiving, for you hear the needy and do not despise your own. In the name of Jesus, the suffering and risen one, amen.",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
