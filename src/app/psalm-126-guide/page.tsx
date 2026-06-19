"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface AccordionItem {
  id: string;
  title: string;
  reference: string;
  color: string;
  body: string;
}

const THEME_ITEMS: AccordionItem[] = [
  {
    id: "theme-dream",
    title: "The Remembered Joy of Past Restoration",
    reference: "Psalm 126:1&ndash;2",
    color: GOLD,
    body:
      "<p>The psalm opens not with a request but with a memory &mdash; and what a memory it is. &ldquo;When the LORD restored the fortunes of Zion, we were like those who dream&rdquo; (126:1). The restoration was so wonderful, so far beyond anything the people had dared to hope, that when it finally came they could scarcely believe it was real. It had the quality of a dream &mdash; that strange sense of standing inside a joy too large to be true, half expecting to wake and find it gone.</p>" +
      "<p>The most likely historical background is the return from Babylonian exile, when Cyrus issued his decree and the captives were permitted to go home (Ezra 1&ndash;2). For seventy years the people had wept by the rivers of Babylon, hanging their harps on the willows, unable to sing the LORD&rsquo;s song in a foreign land (Psalm 137). And then, suddenly, the unthinkable happened. The God who had scattered them gathered them again. The exile was over.</p>" +
      "<p>When that day came, &ldquo;our mouth was filled with laughter, and our tongue with shouts of joy&rdquo; (126:2). This is the laughter of people who have been delivered, the uncontainable gladness that bursts out when grief is reversed. It is the same kind of joy that filled Sarah when the impossible child was born and she said, &ldquo;God has made laughter for me&rdquo; (Genesis 21:6). Restoration that exceeds all expectation produces a joy that exceeds all containment.</p>" +
      "<p>For the pilgrim singing this psalm on the road up to Jerusalem, the memory served a purpose. It reminded the worshiper that the God to whom they were going is a God who restores. Whatever drought of the soul they carried with them, they walked toward the One who had filled mouths with laughter before and could do it again.</p>",
  },
  {
    id: "theme-nations",
    title: "The Testimony Before the Nations",
    reference: "Psalm 126:2&ndash;3",
    color: PURPLE,
    body:
      "<p>The joy of restoration did not stay private. It spilled out into a testimony that even the surrounding nations could read. &ldquo;Then they said among the nations, &lsquo;The LORD has done great things for them&rsquo;&rdquo; (126:2). The pagan peoples who had watched Judah fall now watched Judah rise, and they could draw only one conclusion: this was the work of Judah&rsquo;s God. The deliverance was so plain that it preached its own sermon.</p>" +
      "<p>This is one of the great purposes of God&rsquo;s saving acts &mdash; that they declare his glory to those who do not yet know him. When God restores his people, the watching world takes notice. The nations did not say, &ldquo;How clever these people are,&rdquo; or &ldquo;How fortunate.&rdquo; They said, &ldquo;The LORD has done great things for them.&rdquo; The credit went where it belonged.</p>" +
      "<p>Then comes one of the most beautiful turns in the psalm. The people take up the nations&rsquo; words and make them their own confession: &ldquo;The LORD has done great things for us; we are glad&rdquo; (126:3). What the outsiders observed, the insiders affirmed. There is a holy gladness here that is willing to say plainly, before the whole watching world, that everything good has come from the hand of God.</p>" +
      "<p>This pattern runs throughout Scripture. God acts so that his name might be known among the nations (cf. Exodus 9:16; Psalm 96:3; Ezekiel 36:23). The deliverance of God&rsquo;s people is never merely for their own comfort; it is a billboard of his faithfulness, a public demonstration that the LORD is who he says he is. The redeemed life, lived gladly and gratefully, is itself a witness.</p>",
  },
  {
    id: "theme-negeb",
    title: "The Prayer for Fresh Restoration: Streams in the Negeb",
    reference: "Psalm 126:4",
    color: TEAL,
    body:
      "<p>At the center of the psalm the mood shifts. The remembered joy gives way to a present need, and praise becomes petition: &ldquo;Restore our fortunes, O LORD, like streams in the Negeb&rdquo; (126:4). The people who once dreamed of past restoration now ask for a fresh one. The first deliverance was glorious, but it was not the last word; there is still dryness, still longing, still a need for God to act again.</p>" +
      "<p>The image is drawn from the geography of the land. The Negeb is the arid desert region in the south of Judah, a place of parched riverbeds called wadis. For most of the year these channels lie cracked and empty under a relentless sun, mere memories of water. But when the rains come, they fill in a matter of hours, transforming from dust to rushing torrents, and the dry desert blooms almost overnight.</p>" +
      "<p>This is the picture the psalmist holds before God: &ldquo;Do it again. As suddenly as the Negeb wadis flood, as abundantly as the desert drinks, restore us.&rdquo; It is a prayer that takes the past mercy as the ground for present hope. The God who turned exile into laughter can turn this drought into rivers too. Restoration, when it comes, will not be a trickle but a flood &mdash; sudden, abundant, life-giving.</p>" +
      "<p>There is deep wisdom here for the life of faith. We may remember a season when God acted powerfully, and yet find ourselves now in a dry stretch where the channels of joy run empty. The psalm teaches us neither to forget the past mercy nor to be content with the present dryness, but to pray boldly out of memory: &ldquo;Restore our fortunes, O LORD, like streams in the Negeb.&rdquo; The same God who filled the riverbed once can fill it again.</p>",
  },
  {
    id: "theme-sowing",
    title: "Sowing in Tears, Reaping in Joy",
    reference: "Psalm 126:5&ndash;6",
    color: GREEN,
    body:
      "<p>The psalm ends with one of the most beloved promises in all of Scripture, a pattern as old as agriculture and as deep as the gospel: &ldquo;Those who sow in tears shall reap with shouts of joy! He who goes out weeping, bearing the seed for sowing, shall come home with shouts of joy, bringing his sheaves with him&rdquo; (126:5&ndash;6).</p>" +
      "<p>The image is of a farmer in a hard season. He goes out to sow, but he goes weeping &mdash; perhaps because the harvest is uncertain, perhaps because the precious seed he scatters is the very food his hungry family needs, perhaps simply because the labor is heavy and the soil unyielding. To bury good seed in the ground looks like loss. It feels like throwing away life. And yet the promise stands: the one who sows in tears will reap with shouts of joy. The weeping that carries the seed out will become the rejoicing that carries the sheaves home.</p>" +
      "<p>This pattern reaches far beyond farming. It is the shape of the Christian life and ultimately the shape of the gospel itself. Jesus said, &ldquo;Unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit&rdquo; (John 12:24). His own path to glory ran through the tears of Gethsemane and the death of the cross before it reached the joy of resurrection morning. The seed had to be buried before the harvest could rise.</p>" +
      "<p>Paul applies the same principle to perseverance: &ldquo;Let us not grow weary of doing good, for in due season we will reap, if we do not give up&rdquo; (Galatians 6:9). The promise is not that the sowing will be painless, but that the weeping will not be wasted. There is a harvest coming. For the grieving believer, for the faithful evangelist scattering gospel seed in hard soil, for the parent and the laborer and the sufferer, the word is the same: the tears you sow in now are the joy you will gather later. He who goes out weeping shall come home with shouts of joy.</p>",
  },
  {
    id: "theme-ascents",
    title: "A Song of Ascents: The Pilgrim&rsquo;s Hope",
    reference: "Psalms 120&ndash;134",
    color: ROSE,
    body:
      "<p>Psalm 126 belongs to a special collection within the Psalter: the Songs of Ascents (Psalms 120&ndash;134), fifteen short psalms sung by pilgrims as they made their way up to Jerusalem for the great annual festivals. Jerusalem sits high in the Judean hills, so every journey to the temple was literally a going up &mdash; an ascent. These songs were the soundtrack of the climb.</p>" +
      "<p>As a pilgrim song, Psalm 126 carries a particular emotional rhythm. The journey up to Zion was itself a kind of parable: leaving behind the ordinary places of life and climbing toward the place where God had set his name. To sing of restoration on that road was to rehearse, step by step, the faithfulness of the God they were going to worship.</p>" +
      "<p>The placement of this psalm in the collection is significant. It holds together memory and hope, gladness and longing, harvest and tears &mdash; the whole mixed experience of the people of God on their way home. The pilgrim does not pretend that all is well; he sings honestly of dryness and weeping. But he sings it on a road that leads upward, toward the house of the LORD, in the company of others making the same climb.</p>" +
      "<p>For the church today, the Songs of Ascents remain a gift. We too are pilgrims, journeying toward a city whose builder and maker is God (Hebrews 11:10). We too carry memory of past mercy and prayer for fresh restoration. And we too sing, on the upward road, of the harvest that follows the tears. Psalm 126 gives the pilgrim people a song for the whole journey home.</p>",
  },
];

const VERSE_ITEMS: AccordionItem[] = [
  {
    id: "verse-1-2",
    title: "Like Those Who Dream",
    reference: "Psalm 126:1&ndash;2",
    color: GOLD,
    body:
      "<p>&ldquo;When the LORD restored the fortunes of Zion, we were like those who dream. Then our mouth was filled with laughter, and our tongue with shouts of joy; then they said among the nations, &lsquo;The LORD has done great things for them.&rsquo;&rdquo;</p>" +
      "<p>The psalm begins in memory. The phrase &ldquo;restored the fortunes&rdquo; points to a great reversal &mdash; most likely the return from Babylonian exile, when the captives were brought home (Ezra 1&ndash;2). The joy was so total and so unexpected that it felt unreal: &ldquo;we were like those who dream.&rdquo; The people stood inside a happiness too large to absorb.</p>" +
      "<p>That joy overflowed in laughter and shouts. And it was not a private joy; it became a public testimony. The watching nations drew the obvious conclusion: &ldquo;The LORD has done great things for them.&rdquo; The deliverance preached its own sermon. God&rsquo;s great act of restoration declared his glory to those who did not yet know him.</p>" +
      "<p>The lesson for the worshiper is to remember. Before we pray for the future, we recall the past. The God we approach is a God who has filled mouths with laughter before. Memory of mercy is the fuel of present faith.</p>",
  },
  {
    id: "verse-3",
    title: "We Are Glad",
    reference: "Psalm 126:3",
    color: PURPLE,
    body:
      "<p>&ldquo;The LORD has done great things for us; we are glad.&rdquo;</p>" +
      "<p>Here the people take the words of the nations and make them their own. The outsiders had said, &ldquo;The LORD has done great things for them&rdquo; (126:2); now the insiders confess, &ldquo;The LORD has done great things for us.&rdquo; What was observed from a distance is owned from within. The witness of the watching world becomes the worship of the redeemed.</p>" +
      "<p>Notice the simplicity and directness of the gladness: &ldquo;we are glad.&rdquo; There is no qualification, no false modesty, no reluctance to name the source of the joy. The credit goes entirely to the LORD, and the response is unguarded gladness. This is the proper posture of the redeemed &mdash; to say plainly that God has done great things, and to be glad.</p>" +
      "<p>This single verse forms the hinge of the psalm. It looks back to the remembered restoration of verses 1 and 2, and it grounds the bold prayer of verse 4. Because God has done great things, the people can ask him to do them again. Gratitude for the past becomes the foundation for petition in the present.</p>",
  },
  {
    id: "verse-4",
    title: "Streams in the Negeb",
    reference: "Psalm 126:4",
    color: TEAL,
    body:
      "<p>&ldquo;Restore our fortunes, O LORD, like streams in the Negeb!&rdquo;</p>" +
      "<p>The mood turns from memory to need. The past restoration was glorious, but the people still face dryness, and so they pray for a fresh outpouring. The petition is built on the very memory they have just rehearsed: the God who restored before can restore again.</p>" +
      "<p>The image is unforgettable. The Negeb is the parched desert in the south of Judah, where the riverbeds, called wadis, lie cracked and dry for most of the year. But when the rains come, those empty channels fill in hours, roaring with water, and the dead desert blooms. &ldquo;Do that for us,&rdquo; the people pray. &ldquo;Fill our dry channels suddenly and abundantly.&rdquo;</p>" +
      "<p>This is a prayer for every dry season of the soul. We may remember when God acted powerfully and yet find ourselves now in a stretch of drought. The psalm teaches us to pray boldly out of memory: restore us, O LORD, like streams in the Negeb &mdash; sudden, abundant, overflowing.</p>",
  },
  {
    id: "verse-5-6",
    title: "Sowing in Tears, Bringing the Sheaves",
    reference: "Psalm 126:5&ndash;6",
    color: GREEN,
    body:
      "<p>&ldquo;Those who sow in tears shall reap with shouts of joy! He who goes out weeping, bearing the seed for sowing, shall come home with shouts of joy, bringing his sheaves with him.&rdquo;</p>" +
      "<p>The psalm closes with a promise as reliable as the seasons. The farmer goes out weeping, scattering precious seed into hard ground &mdash; the very seed his family might have eaten. To bury good seed looks like loss, and the tears are real. But the harvest is coming. The one who sows in tears will reap with shouts of joy.</p>" +
      "<p>The structure of these two verses mirrors the reversal they describe. Each begins in sorrow &mdash; sowing in tears, going out weeping &mdash; and each ends in gladness &mdash; reaping with shouts of joy, coming home with the sheaves. The weeping that carries the seed out becomes the rejoicing that carries the harvest home.</p>" +
      "<p>This is the gospel pattern. Jesus said the grain of wheat must fall into the earth and die to bear much fruit (John 12:24). His own road ran through the tears of the cross to the joy of resurrection. For every grieving, persevering, sowing believer, the promise stands: the tears are not wasted. He who goes out weeping shall come home with shouts of joy, bringing his sheaves with him.</p>",
  },
];

const APPLICATION_SECTIONS: AccordionItem[] = [
  {
    id: "app-remember",
    title: "Remember What God Has Done",
    reference: "Psalm 126:1&ndash;3",
    color: GOLD,
    body:
      "<p>Psalm 126 begins where so much faith must begin: with memory. Before the people ask God for anything, they remember what he has already done. They recall the laughter that filled their mouths when the LORD restored the fortunes of Zion, and they confess, &ldquo;The LORD has done great things for us; we are glad.&rdquo;</p>" +
      "<p>In dry seasons, memory is one of God&rsquo;s great gifts. When the present feels barren, we are tempted to conclude that God has changed, that the mercy has run out, that the laughter is gone for good. The psalm counsels otherwise. It calls us to look back and rehearse the specific great things God has done &mdash; the prayers he answered, the burdens he lifted, the deliverances he worked &mdash; and to let those memories steady our hearts.</p>" +
      "<p>Keep an account of God&rsquo;s mercies. Write them down. Tell them to your children and to the watching world. The God who filled your mouth with laughter once is the same God you walk toward now. Memory is not nostalgia; it is the fuel of faith and the ground of bold prayer.</p>",
  },
  {
    id: "app-pray-bold",
    title: "Pray Boldly for Fresh Restoration",
    reference: "Psalm 126:4",
    color: TEAL,
    body:
      "<p>The center of the psalm is a prayer: &ldquo;Restore our fortunes, O LORD, like streams in the Negeb.&rdquo; The people do not content themselves with past mercy; they ask for a fresh one. And they ask boldly, daring to name how much they want &mdash; not a trickle but a flood, the desert wadis filling suddenly and overflowing.</p>" +
      "<p>There is a quiet faithlessness that settles for dryness, that stops asking, that decides the dry season is simply the new normal. The psalm refuses that resignation. It teaches us to bring our drought to God and to ask him to do again what only he can do. The same God who restored before can restore again.</p>" +
      "<p>Where is your Negeb &mdash; the dry, cracked channel of your life where joy has run empty? A wearied marriage, a wandering child, a cold church, a discouraged heart? Bring it to God and pray for streams in the Negeb. Ask boldly, abundantly, expectantly. He is able to flood the driest places with sudden, life-giving grace.</p>",
  },
  {
    id: "app-sow-tears",
    title: "Keep Sowing Through the Tears",
    reference: "Psalm 126:5&ndash;6",
    color: GREEN,
    body:
      "<p>The promise of the harvest does not remove the tears of the sowing; it redeems them. The farmer still goes out weeping. The seed still feels like loss as it falls into the ground. But the psalm assures us that the weeping is not the end of the story. &ldquo;Those who sow in tears shall reap with shouts of joy.&rdquo;</p>" +
      "<p>This is a word for the discouraged laborer. The parent praying for years over a hardened child, the believer sharing the gospel in soil that seems all stone, the servant of God whose faithful work shows no visible fruit, the sufferer whose obedience costs daily tears &mdash; all of you are sowing. And the promise of God is that the harvest will come. &ldquo;Let us not grow weary of doing good, for in due season we will reap, if we do not give up&rdquo; (Galatians 6:9).</p>" +
      "<p>Do not measure the harvest by the difficulty of the sowing. The tears you weep as you scatter the seed are the very tears the LORD will wipe away when the sheaves come home. Keep sowing. The God who turns mourning into dancing has promised that you will come home with shouts of joy.</p>",
  },
  {
    id: "app-witness",
    title: "Let Your Restored Life Be a Witness",
    reference: "Psalm 126:2",
    color: PURPLE,
    body:
      "<p>When God restored his people, even the nations took notice: &ldquo;The LORD has done great things for them.&rdquo; The deliverance was so plain it preached. This reminds us that the redeemed life is never merely private comfort; it is public testimony. The world is watching how God&rsquo;s people live, and a life marked by restoration and gladness declares the glory of the One who restored it.</p>" +
      "<p>This challenges us to live our gratitude openly. When God answers prayer, lifts a burden, or restores what was lost, do not bury the mercy in silence. Like the people of the psalm, take up the confession plainly: &ldquo;The LORD has done great things for us; we are glad.&rdquo; Give God the credit before the watching world.</p>" +
      "<p>There is no better evangelist than a glad and grateful believer who is honest about the great things God has done. Your joy in God&rsquo;s mercy is itself a sermon the nations can read. Let your restored life point beyond yourself to the God who restores.</p>",
  },
];

const REFLECTION_QUESTIONS: string[] = [
  "What &ldquo;great things&rdquo; has the LORD done for you that you can remember and rehearse with gladness? When was the last time you deliberately recalled God&rsquo;s past mercies?",
  "Where is the &ldquo;Negeb&rdquo; in your life right now &mdash; the dry, cracked channel where joy has run empty? How might you pray boldly for streams to fill it?",
  "Psalm 126:5&ndash;6 promises a harvest of joy to those who sow in tears. In what area of your life are you sowing through tears, tempted to give up before the harvest comes?",
  "The nations said, &ldquo;The LORD has done great things for them.&rdquo; Does your life testify openly to God&rsquo;s mercy, or do you keep his great works to yourself?",
  "Jesus said the grain of wheat must fall and die to bear fruit (John 12:24). How does the death and resurrection of Jesus shape the way you understand your own seasons of tears and joy?",
  "The Songs of Ascents were sung by pilgrims on the road to Jerusalem. As a pilgrim journeying toward the heavenly city, how does the hope of a coming harvest change the way you walk through hard seasons now?",
];

const CLOSING_PRAYER =
  "<p>O LORD, our God and our Restorer, we remember the great things you have done. You have turned our mourning into laughter and filled our mouths with shouts of joy. We confess before the watching world that you have done great things for us, and we are glad.</p>" +
  "<p>Yet we come to you also in our dryness. There are channels in our lives where the joy has run empty, riverbeds cracked and parched under a long drought. Restore our fortunes, O LORD, like streams in the Negeb. Come suddenly, come abundantly, and flood the dry places with the rivers of your grace.</p>" +
  "<p>Teach us to keep sowing through our tears. When the seed feels like loss and the labor is heavy, hold before us the promise of the harvest. Give us faith to believe that those who sow in tears shall reap with shouts of joy, and that we who go out weeping shall come home bearing our sheaves.</p>" +
  "<p>We thank you for Jesus, the grain of wheat who fell into the earth and died that he might bear much fruit. By his cross our tears are redeemed; by his resurrection our harvest is sure. Keep us faithful on the upward road until we come home rejoicing. In his name we pray. Amen.</p>";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const videoItems = [
  { videoId: "CE8QbkUCNK4", title: "Psalm 126: Restoring the Fortunes of Zion" },
  { videoId: "Q2oNOlXzBhY", title: "Songs of Ascents: Pilgrim Journey to Jerusalem" },
  { videoId: "8phkAg8PMHE", title: "Sowing in Tears, Reaping in Joy" },
  { videoId: "fNk_zzaMoSs", title: "Streams in the Negeb: Sudden Restoration" },
];

export default function Psalm126Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const renderAccordion = (items: AccordionItem[]) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div
            key={item.id}
            style={{
              background: CARD,
              border: `1px solid ${isOpen ? item.color : BORDER}`,
              borderRadius: "14px",
              overflow: "hidden",
              transition: "border-color 0.2s ease",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1.15rem 1.35rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                color: TEXT,
              }}
            >
              <span style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <span style={{ fontSize: "1.08rem", fontWeight: 600, lineHeight: 1.3 }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <span style={{ fontSize: "0.82rem", color: item.color, fontWeight: 500, letterSpacing: "0.02em" }}
                  dangerouslySetInnerHTML={{ __html: item.reference }}
                />
              </span>
              <span
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  border: `1px solid ${item.color}`,
                  color: item.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  lineHeight: 1,
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
                dangerouslySetInnerHTML={{ __html: "&#43;" }}
              />
            </button>
            {isOpen && (
              <div
                style={{
                  padding: "0 1.35rem 1.4rem",
                  color: MUTED,
                  fontSize: "1rem",
                  lineHeight: 1.75,
                }}
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            )}
          </div>
        );
      })}
    </div>
  );

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
      {/* Hero */}
      <header
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          padding: "2.5rem 1.25rem 1.5rem",
        }}
      >
        <p
          style={{
            color: GOLD,
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            margin: "0 0 0.75rem",
          }}
        >
          A Song of Ascents
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            margin: "0 0 0.5rem",
            lineHeight: 1.1,
          }}
        >
          Psalm 126
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: MUTED,
            margin: "0 0 1.75rem",
            maxWidth: "640px",
            lineHeight: 1.6,
          }}
          dangerouslySetInnerHTML={{
            __html:
              "Recalling the joy of restoration and praying for fresh renewal &mdash; the song of a people who sow in tears and reap with shouts of joy.",
          }}
        />
        <div
          style={{
            background: `linear-gradient(135deg, ${CARD}, #0d0d18)`,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${GREEN}`,
            borderRadius: "14px",
            padding: "1.4rem 1.6rem",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: GREEN,
              margin: "0 0 0.6rem",
            }}
          >
            Key Verse &mdash; Psalm 126:5&ndash;6
          </p>
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.6,
              margin: 0,
              fontStyle: "italic",
              color: TEXT,
            }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;Those who sow in tears shall reap with shouts of joy! He who goes out weeping, bearing the seed for sowing, shall come home with shouts of joy, bringing his sheaves with him.&rdquo;",
            }}
          />
        </div>
      </header>

      {/* Tab bar */}
      <nav
        style={{
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 10,
          background: "rgba(7,7,15,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            display: "flex",
            gap: "0.35rem",
            padding: "0.6rem 1rem",
            overflowX: "auto",
          }}
        >
          {TABS.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setTab(t);
                  setOpen(null);
                }}
                style={{
                  flexShrink: 0,
                  padding: "0.55rem 1.1rem",
                  borderRadius: "999px",
                  border: `1px solid ${active ? GREEN : BORDER}`,
                  background: active ? GREEN : "transparent",
                  color: active ? "#FFFFFF" : MUTED,
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.18s ease",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </div>
      </nav>

      <main
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          padding: "2rem 1.25rem 4rem",
        }}
      >
        {/* OVERVIEW */}
        {tab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 1rem" }}>
              Overview
            </h2>
            <div
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>Psalm 126 is one of the Songs of Ascents (Psalms 120&ndash;134), the collection of pilgrim songs sung by worshipers as they made their way up to Jerusalem for the great festivals. In just six short verses it moves through a remarkable emotional arc &mdash; from remembered joy, to present need, to confident hope.</p>" +
                  "<p>The psalm opens in memory: &ldquo;When the LORD restored the fortunes of Zion, we were like those who dream.&rdquo; The restoration, most likely the return from Babylonian exile (Ezra 1&ndash;2), was so wonderful that it felt unreal, and it filled the people&rsquo;s mouths with laughter. Even the surrounding nations took notice and confessed, &ldquo;The LORD has done great things for them.&rdquo;</p>" +
                  "<p>From that memory the psalm turns to prayer: &ldquo;Restore our fortunes, O LORD, like streams in the Negeb.&rdquo; The Negeb is the desert in the south of Judah, whose dry riverbeds flood suddenly when the rains come. The image is a prayer for sudden, abundant restoration. And the psalm closes with one of the best-loved promises in Scripture: those who sow in tears shall reap with shouts of joy.</p>",
              }}
            />

            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                margin: "2rem 0 0.85rem",
                color: GOLD,
              }}
            >
              Structure
            </h3>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "14px",
                padding: "1.4rem 1.6rem",
              }}
            >
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  color: MUTED,
                  fontSize: "1rem",
                  lineHeight: 1.75,
                }}
              >
                <li
                  style={{ marginBottom: "0.75rem" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "<strong style='color:#F2F2F8'>vv. 1&ndash;3 &mdash; Remembered Restoration:</strong> The LORD restored the fortunes of Zion; mouths were filled with laughter; the nations confessed his great works; the people are glad.",
                  }}
                />
                <li
                  style={{ marginBottom: "0.75rem" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "<strong style='color:#F2F2F8'>v. 4 &mdash; Prayer for Renewal:</strong> &ldquo;Restore our fortunes, O LORD, like streams in the Negeb&rdquo; &mdash; a plea for sudden, abundant restoration in present dryness.",
                  }}
                />
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "<strong style='color:#F2F2F8'>vv. 5&ndash;6 &mdash; The Promise of Harvest:</strong> Those who sow in tears shall reap with shouts of joy; the one who goes out weeping shall come home bearing his sheaves.",
                  }}
                />
              </ul>
            </div>

            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                margin: "2rem 0 0.85rem",
                color: TEAL,
              }}
            >
              Context
            </h3>
            <div
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{
                __html:
                  "<p>The Songs of Ascents were the songs of pilgrims climbing up to Jerusalem, which sits high in the Judean hills. Every journey to the temple was a literal going up, and these fifteen psalms were the soundtrack of that climb.</p>" +
                  "<p>The most likely background for Psalm 126 is the return from Babylonian exile. For seventy years the people had wept in a foreign land; then Cyrus issued his decree and the captives went home (Ezra 1&ndash;2). The first half of the psalm celebrates that homecoming; the second half prays that God would do something just as wonderful again.</p>" +
                  "<p>The sowing-and-reaping promise of verses 5 and 6 has nourished believers in every generation. It speaks to grief, to perseverance, to the labor of evangelism, and ultimately to the resurrection hope &mdash; for Jesus himself taught that a grain of wheat must fall into the earth and die before it can bear much fruit (John 12:24; cf. Galatians 6:9).</p>",
              }}
            />
          </section>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.5rem" }}>
              Key Themes
            </h2>
            <p style={{ color: MUTED, margin: "0 0 1.5rem", lineHeight: 1.6 }}>
              Tap any theme to explore it, along with its cross-references across Scripture.
            </p>
            {renderAccordion(THEME_ITEMS)}
          </section>
        )}

        {/* VERSE BY VERSE */}
        {tab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.5rem" }}>
              Verse by Verse
            </h2>
            <p style={{ color: MUTED, margin: "0 0 1.5rem", lineHeight: 1.6 }}>
              Walk through Psalm 126 section by section. Tap each heading to read the commentary.
            </p>
            {renderAccordion(VERSE_ITEMS)}
          </section>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 0.5rem" }}>
              Application
            </h2>
            <p style={{ color: MUTED, margin: "0 0 1.5rem", lineHeight: 1.6 }}>
              How does Psalm 126 shape the way we remember, pray, sow, and witness today?
            </p>
            {renderAccordion(APPLICATION_SECTIONS)}

            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                margin: "2.5rem 0 1rem",
                color: PURPLE,
              }}
            >
              Questions for Reflection
            </h3>
            <ol
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                counterReset: "q",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {REFLECTION_QUESTIONS.map((q, i) => (
                <li
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "12px",
                    padding: "1.1rem 1.3rem",
                    display: "flex",
                    gap: "0.9rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: PURPLE,
                      color: "#FFFFFF",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.65 }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                </li>
              ))}
            </ol>

            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                margin: "2.5rem 0 1rem",
                color: ROSE,
              }}
            >
              Watch and Reflect
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.1rem",
              }}
            >
              {videoItems.map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "14px",
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p
                    style={{
                      margin: 0,
                      padding: "0.85rem 1rem",
                      fontSize: "0.92rem",
                      color: TEXT,
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {v.title}
                  </p>
                </div>
              ))}
            </div>

            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                margin: "2.5rem 0 1rem",
                color: GREEN,
              }}
            >
              Closing Prayer
            </h3>
            <div
              style={{
                background: `linear-gradient(135deg, ${CARD}, #0d0d18)`,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${GREEN}`,
                borderRadius: "14px",
                padding: "1.6rem 1.8rem",
                color: MUTED,
                fontSize: "1.05rem",
                lineHeight: 1.8,
                fontStyle: "italic",
              }}
              dangerouslySetInnerHTML={{ __html: CLOSING_PRAYER }}
            />
          </section>
        )}
      </main>
    </div>
  );
}
