"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SERIF = "var(--font-cormorant, Georgia, serif)";

type Tab = "overview" | "hymns" | "stories" | "videos";
type Era = "All" | "Reformation" | "Classic" | "Gospel" | "Modern";

const ERA_FILTERS: Era[] = ["All", "Reformation", "Classic", "Gospel", "Modern"];

const ERA_COLOR: Record<string, string> = {
  Reformation: "#F59E0B",
  Classic: GREEN,
  Gospel: PURPLE,
  Modern: "#3B82F6",
};

interface Hymn {
  title: string;
  author: string;
  year: string;
  era: Exclude<Era, "All">;
  initials: string;
  story: string;
  lyrics: string[];
  scripture: string;
  videoId: string;
}

const HYMNS: Hymn[] = [
  {
    title: "A Mighty Fortress Is Our God",
    author: "Martin Luther",
    year: "1529",
    era: "Reformation",
    initials: "MF",
    story:
      "Born from the heart of the Reformation, Martin Luther penned this hymn as a paraphrase of Psalm 46. It became the battle anthem of the Protestant cause — sung by martyrs on their way to execution and by armies marching into battle. Luther, a former monk who had wrestled with terror of God's judgment until he discovered justification by faith, knew firsthand the assault of doubt and the devil. The 'ancient foe' he describes was no abstraction; Luther believed he was in real spiritual combat. Heinrich Heine later called it 'the Marseillaise of the Reformation.'",
    lyrics: [
      "A mighty fortress is our God, a bulwark never failing;",
      "Our helper He, amid the flood of mortal ills prevailing.",
      "For still our ancient foe doth seek to work us woe;",
      "His craft and power are great, and armed with cruel hate,",
      "On earth is not his equal.",
    ],
    scripture: "Psalm 46:1-7",
    videoId: "rEDzZmtFr-w",
  },
  {
    title: "All Glory, Laud and Honor",
    author: "Theodulph of Orleans",
    year: "c. 820",
    era: "Reformation",
    initials: "GL",
    story:
      "One of the oldest hymns still in common use, written in Latin by Theodulph, Bishop of Orleans, while imprisoned around 820 AD. Tradition holds that Theodulph sang it from his cell window as Emperor Louis the Pious processed by on Palm Sunday — so moving the emperor that he ordered his release. Translated into English by John Mason Neale in 1854, it remains the great processional hymn of Palm Sunday, echoing the crowds who welcomed Jesus into Jerusalem.",
    lyrics: [
      "All glory, laud, and honor to Thee, Redeemer, King,",
      "To whom the lips of children made sweet hosannas ring.",
      "Thou art the King of Israel, Thou David's royal Son,",
      "Who in the Lord's name comest, the King and blessed One.",
    ],
    scripture: "Matthew 21:1-11",
    videoId: "rABquddP9-A",
  },
  {
    title: "Amazing Grace",
    author: "John Newton",
    year: "1779",
    era: "Classic",
    initials: "AG",
    story:
      "Written by John Newton, a former slave-ship captain who experienced a dramatic conversion during a violent storm at sea in 1748. For years afterward he continued in the slave trade before fully grasping its horror; he later became an Anglican minister and a fierce abolitionist who mentored William Wilberforce. The hymn was composed for a New Year's service in Olney in 1773, paired with a sermon on 1 Chronicles 17. Every line is autobiographical — Newton genuinely believed himself 'a wretch' rescued by sheer grace. It is now perhaps the most recognized song in the English-speaking world.",
    lyrics: [
      "Amazing grace! how sweet the sound, that saved a wretch like me!",
      "I once was lost, but now am found, was blind, but now I see.",
      "'Twas grace that taught my heart to fear, and grace my fears relieved;",
      "How precious did that grace appear the hour I first believed.",
    ],
    scripture: "Ephesians 2:8-9",
    videoId: "CDdvReNKKuk",
  },
  {
    title: "Be Thou My Vision",
    author: "Ancient Irish (tr. Mary Byrne / Eleanor Hull)",
    year: "8th century",
    era: "Reformation",
    initials: "BV",
    story:
      "This hymn began as an Old Irish monastic poem, 'Rop tú mo baile,' traditionally attributed to the 6th-century poet Dallán Forgaill. It was translated into English prose by Mary Byrne in 1905 and versified by Eleanor Hull in 1912, then set to the Irish folk tune SLANE — named for the hill where St. Patrick is said to have lit a defiant Easter fire in defiance of the pagan high king. The hymn is a prayer that Christ would be the believer's entire field of vision: wisdom, inheritance, treasure, and high King of heaven.",
    lyrics: [
      "Be Thou my Vision, O Lord of my heart;",
      "Naught be all else to me, save that Thou art.",
      "Thou my best Thought, by day or by night,",
      "Waking or sleeping, Thy presence my light.",
    ],
    scripture: "Psalm 27:1",
    videoId: "lDCSrUchDdg",
  },
  {
    title: "Holy, Holy, Holy! Lord God Almighty",
    author: "Reginald Heber",
    year: "1826",
    era: "Classic",
    initials: "HH",
    story:
      "Reginald Heber, an Anglican bishop who served in India and died there young at 42, wrote this hymn for Trinity Sunday. He never lived to see its fame; it was published after his death. Set to John Dykes's tune NICAEA — named for the council that defined the doctrine of the Trinity in 325 AD — the hymn is a soaring meditation on the threefold holiness of God sung by the seraphim in Isaiah's vision and the living creatures in Revelation. Alfred, Lord Tennyson called it the finest hymn ever written.",
    lyrics: [
      "Holy, holy, holy! Lord God Almighty!",
      "Early in the morning our song shall rise to Thee;",
      "Holy, holy, holy! merciful and mighty!",
      "God in three Persons, blessèd Trinity!",
    ],
    scripture: "Isaiah 6:3; Revelation 4:8",
    videoId: "JbA63a9Mel0",
  },
  {
    title: "Crown Him with Many Crowns",
    author: "Matthew Bridges & Godfrey Thring",
    year: "1851",
    era: "Classic",
    initials: "CH",
    story:
      "Matthew Bridges wrote the original verses in 1851, inspired by Revelation 19:12 — 'on his head were many crowns.' Bridges had converted to Roman Catholicism; Godfrey Thring, an Anglican, later added stanzas so the hymn could be sung across traditions. The result is a layered coronation hymn that crowns Christ under many titles: Lord of love, Lord of life, Lord of peace, Lord of years. Set to George Elvey's majestic tune DIADEMATA (Greek for 'crowns'), it remains a triumphant anthem of Christ's eternal reign.",
    lyrics: [
      "Crown Him with many crowns, the Lamb upon His throne;",
      "Hark! how the heavenly anthem drowns all music but its own.",
      "Awake, my soul, and sing of Him who died for thee,",
      "And hail Him as thy matchless King through all eternity.",
    ],
    scripture: "Revelation 19:12",
    videoId: "Mc1U_Dv2DAk",
  },
  {
    title: "When I Survey the Wondrous Cross",
    author: "Isaac Watts",
    year: "1707",
    era: "Classic",
    initials: "WS",
    story:
      "Isaac Watts, the 'father of English hymnody,' wrote this for a communion service. In an age when English congregations sang only literal metrical psalms, Watts dared to write fresh hymns of 'human composure' — and was criticized for it. This meditation on the crucifixion is widely regarded as one of the greatest hymns in the English language. Charles Wesley reportedly said he would give up all his own hymns to have written it. The final verse — 'Love so amazing, so divine, demands my soul, my life, my all' — is the whole gospel response distilled into one line.",
    lyrics: [
      "When I survey the wondrous cross on which the Prince of glory died,",
      "My richest gain I count but loss, and pour contempt on all my pride.",
      "Were the whole realm of nature mine, that were a present far too small;",
      "Love so amazing, so divine, demands my soul, my life, my all.",
    ],
    scripture: "Galatians 6:14",
    videoId: "F7vsR-VTppQ",
  },
  {
    title: "And Can It Be That I Should Gain",
    author: "Charles Wesley",
    year: "1738",
    era: "Classic",
    initials: "CB",
    story:
      "Charles Wesley wrote this within days of his evangelical conversion on May 21, 1738 — the same week his brother John felt his heart 'strangely warmed' at Aldersgate. It is not theology observed from a distance but a burst of astonished gratitude from a man who had just understood, for the first time, that the love of God was personally for him. The third verse contains one of the most vivid images in English hymnody: 'Long my imprisoned spirit lay, fast bound in sin and nature's night... I woke, the dungeon flamed with light.'",
    lyrics: [
      "And can it be that I should gain an interest in the Savior's blood?",
      "Died He for me, who caused His pain? For me, who Him to death pursued?",
      "Amazing love! how can it be that Thou, my God, shouldst die for me?",
      "Long my imprisoned spirit lay, fast bound in sin and nature's night;",
      "Thine eye diffused a quickening ray — I woke, the dungeon flamed with light.",
    ],
    scripture: "Romans 8:1",
    videoId: "uzDks0Ph5RM",
  },
  {
    title: "Rock of Ages, Cleft for Me",
    author: "Augustus Toplady",
    year: "1763",
    era: "Classic",
    initials: "RA",
    story:
      "Legend holds that Augustus Toplady, an Anglican minister, was caught in a violent thunderstorm in Burrington Combe, Somerset, and sheltered in the cleft of a great rock — inspiring the opening image of finding refuge in the wounded side of Christ. Whether or not the storm story is literally true, the hymn's theology is unmistakable: salvation is wholly the work of God. 'Nothing in my hand I bring, simply to Thy cross I cling.' It became one of the most beloved hymns of the English-speaking church and was sung at many Victorian deathbeds.",
    lyrics: [
      "Rock of Ages, cleft for me, let me hide myself in Thee;",
      "Let the water and the blood, from Thy wounded side which flowed,",
      "Be of sin the double cure; save from wrath and make me pure.",
      "Nothing in my hand I bring, simply to Thy cross I cling.",
    ],
    scripture: "Exodus 33:22; 1 Corinthians 10:4",
    videoId: "FU2Qp5Vl8ig",
  },
  {
    title: "O Come, All Ye Faithful",
    author: "John Francis Wade",
    year: "c. 1743",
    era: "Classic",
    initials: "OC",
    story:
      "Originally written in Latin as 'Adeste Fideles,' most likely by John Francis Wade, an English Catholic layman living in exile in France. The hymn is a summons — calling the faithful to come and adore the newborn King. Frederick Oakeley translated it into English in 1841. Its refrain, repeated three times, draws worshippers into the act of adoration itself: 'O come, let us adore Him, Christ the Lord.' It remains one of the most universally sung Christmas hymns across every Christian tradition.",
    lyrics: [
      "O come, all ye faithful, joyful and triumphant,",
      "O come ye, O come ye to Bethlehem;",
      "Come and behold Him, born the King of angels;",
      "O come, let us adore Him, Christ the Lord.",
    ],
    scripture: "Luke 2:15-16",
    videoId: "pAVPGWPlfFY",
  },
  {
    title: "It Is Well with My Soul",
    author: "Horatio Spafford",
    year: "1873",
    era: "Gospel",
    initials: "IW",
    story:
      "Horatio Spafford was a prosperous Chicago lawyer and friend of evangelist D.L. Moody. After losing much of his fortune in the Great Chicago Fire of 1871, he sent his wife and four daughters ahead to Europe aboard the SS Ville du Havre in 1873. The ship collided with another vessel and sank; all four daughters drowned. His wife cabled two words: 'Saved alone.' Sailing to join her, Spafford passed near the spot where his children had died — and there wrote these words. The hymn is not a denial of grief but a defiant testimony of peace beneath unimaginable sorrow.",
    lyrics: [
      "When peace like a river attendeth my way,",
      "When sorrows like sea billows roll;",
      "Whatever my lot, Thou hast taught me to say,",
      "It is well, it is well with my soul.",
    ],
    scripture: "Philippians 4:7",
    videoId: "ehNUKb5jOWo",
  },
  {
    title: "Blessed Assurance",
    author: "Fanny Crosby",
    year: "1873",
    era: "Gospel",
    initials: "BA",
    story:
      "Fanny Crosby, blinded by a botched medical treatment at six weeks old, became the most prolific hymn writer in American history — penning some 8,000 hymns. Far from bitter, she once said that had she been able to choose, she would still have asked to be born blind, so that the first face she ever saw would be that of her Savior. Her friend Phoebe Knapp played her a new melody and asked, 'What does it say to you?' Crosby instantly replied, 'Blessed assurance, Jesus is mine!' and the hymn poured out — a song of joyful certainty in salvation.",
    lyrics: [
      "Blessed assurance, Jesus is mine! O what a foretaste of glory divine!",
      "Heir of salvation, purchase of God, born of His Spirit, washed in His blood.",
      "This is my story, this is my song, praising my Savior all the day long;",
      "This is my story, this is my song, praising my Savior all the day long.",
    ],
    scripture: "Hebrews 10:22",
    videoId: "Vc-WC_X5DDk",
  },
  {
    title: "Come, Thou Fount of Every Blessing",
    author: "Robert Robinson",
    year: "1758",
    era: "Classic",
    initials: "CF",
    story:
      "Robert Robinson wrote this at just 22, a few years after his conversion under the preaching of George Whitefield. The hymn is famous for its searingly honest line: 'Prone to wander, Lord, I feel it, prone to leave the God I love.' Tradition holds that Robinson, who later drifted spiritually, once met a woman on a stagecoach humming his own hymn. When she pressed him about it, he wept and said, 'Madam, I am the poor unhappy man who wrote that hymn many years ago, and I would give a thousand worlds, if I had them, to enjoy the feelings I had then.' The 'Ebenezer' of verse two is a stone of remembrance from 1 Samuel.",
    lyrics: [
      "Come, Thou Fount of every blessing, tune my heart to sing Thy grace;",
      "Streams of mercy, never ceasing, call for songs of loudest praise.",
      "Prone to wander, Lord, I feel it, prone to leave the God I love;",
      "Here's my heart, O take and seal it, seal it for Thy courts above.",
    ],
    scripture: "1 Samuel 7:12",
    videoId: "07rIspjJfPo",
  },
  {
    title: "How Great Thou Art",
    author: "Carl Boberg (tr. Stuart Hine)",
    year: "1885 / 1949",
    era: "Gospel",
    initials: "HG",
    story:
      "Carl Boberg, a Swedish pastor, wrote the original poem 'O Store Gud' in 1885 after being caught in a sudden thunderstorm followed by a brilliant calm and birdsong over a Swedish bay. The poem traveled through German and Russian translations before British missionary Stuart Hine rendered and expanded it in English while serving in Ukraine and the Carpathian Mountains. Hine added the famous third verse about Christ's death. Popularized worldwide through the Billy Graham Crusades — where George Beverly Shea sang it — it consistently ranks among the most beloved hymns in the world.",
    lyrics: [
      "O Lord my God, when I in awesome wonder consider all the worlds Thy hands have made,",
      "I see the stars, I hear the rolling thunder, Thy power throughout the universe displayed;",
      "Then sings my soul, my Savior God, to Thee: How great Thou art, how great Thou art!",
    ],
    scripture: "Psalm 8:3-4",
    videoId: "5_C2-1NPMHM",
  },
  {
    title: "Great Is Thy Faithfulness",
    author: "Thomas Chisholm",
    year: "1923",
    era: "Gospel",
    initials: "GF",
    story:
      "Unlike the dramatic backstories of many hymns, Thomas Chisholm wrote this out of the quiet, daily faithfulness of God across an ordinary life of poor health and modest means. A former schoolteacher and insurance agent, Chisholm based it on Lamentations 3:22-23 — 'His mercies are new every morning.' He sent it to his friend William Runyan, who set it to music. It remained relatively unknown until Moody Bible Institute adopted it and George Beverly Shea sang it at Billy Graham crusades, after which it became a worldwide favorite.",
    lyrics: [
      "Great is Thy faithfulness, O God my Father, there is no shadow of turning with Thee;",
      "Thou changest not, Thy compassions, they fail not; as Thou hast been Thou forever wilt be.",
      "Great is Thy faithfulness! Great is Thy faithfulness!",
      "Morning by morning new mercies I see;",
    ],
    scripture: "Lamentations 3:22-23",
    videoId: "Vyll-Fq2-Bc",
  },
  {
    title: "The Old Rugged Cross",
    author: "George Bennard",
    year: "1912",
    era: "Gospel",
    initials: "OR",
    story:
      "George Bennard, a Methodist evangelist who had once been a Salvation Army officer, wrote this after a season of deep wrestling with the meaning of the cross during difficult revival meetings. He wanted to portray the cross not merely as a symbol but as the place where Christ's love and suffering met. The hymn's homely, affectionate tone — 'I will cling to the old rugged cross' — made it one of the most beloved gospel songs of the 20th century, a staple of revival meetings and tent crusades across America.",
    lyrics: [
      "On a hill far away stood an old rugged cross, the emblem of suffering and shame;",
      "And I love that old cross where the dearest and best for a world of lost sinners was slain.",
      "So I'll cherish the old rugged cross, till my trophies at last I lay down;",
      "I will cling to the old rugged cross, and exchange it some day for a crown.",
    ],
    scripture: "1 Corinthians 1:18",
    videoId: "Pku5jZAdpdg",
  },
  {
    title: "Nearer, My God, to Thee",
    author: "Sarah Flower Adams",
    year: "1841",
    era: "Classic",
    initials: "NG",
    story:
      "Sarah Flower Adams wrote this hymn based on Jacob's dream at Bethel, where a ladder reached to heaven and God met him in his loneliness (Genesis 28). The hymn's theme is drawing nearer to God even through hardship — 'though it be a cross that raiseth me.' It became famous in popular legend as the hymn the band reportedly played as the Titanic sank in 1912, sealing its place in cultural memory as a song of faith in the face of death.",
    lyrics: [
      "Nearer, my God, to Thee, nearer to Thee!",
      "E'en though it be a cross that raiseth me;",
      "Still all my song shall be, nearer, my God, to Thee,",
      "Nearer, my God, to Thee, nearer to Thee!",
    ],
    scripture: "Genesis 28:10-17",
    videoId: "tNvN_Mskpgk",
  },
  {
    title: "In Christ Alone",
    author: "Keith Getty & Stuart Townend",
    year: "2001",
    era: "Modern",
    initials: "IC",
    story:
      "Written by Keith Getty and Stuart Townend, 'In Christ Alone' launched the 'modern hymn' movement — an effort to recover doctrinally rich, singable hymnody for the contemporary church. In four verses it traces the entire gospel: incarnation, life, atoning death, resurrection, and the believer's secure standing. The line 'Till on that cross as Jesus died, the wrath of God was satisfied' has sparked theological debate, but its substitutionary clarity is exactly what made the hymn a defining song of 21st-century worship across denominations.",
    lyrics: [
      "In Christ alone my hope is found, He is my light, my strength, my song;",
      "This Cornerstone, this solid Ground, firm through the fiercest drought and storm.",
      "No guilt in life, no fear in death, this is the power of Christ in me;",
      "From life's first cry to final breath, Jesus commands my destiny.",
    ],
    scripture: "1 Corinthians 3:11",
    videoId: "rn9-UNer6MQ",
  },
  {
    title: "Cornerstone",
    author: "Hillsong (Liljero, Morgan, Myrin, Mote)",
    year: "2012",
    era: "Modern",
    initials: "CS",
    story:
      "A modern reworking of Edward Mote's 1834 hymn 'My Hope Is Built on Nothing Less' (originally sung to 'The Solid Rock'), Hillsong's 'Cornerstone' wraps the 19th-century verses in a soaring contemporary chorus. The result bridges generations — pairing the timeless confession 'On Christ the solid Rock I stand, all other ground is sinking sand' with arena-scale modern worship. It has become one of the most widely sung worship songs of the 2010s, demonstrating how the great hymns continue to be renewed for new eras.",
    lyrics: [
      "My hope is built on nothing less than Jesus' blood and righteousness;",
      "I dare not trust the sweetest frame, but wholly trust in Jesus' name.",
      "Christ alone, Cornerstone, weak made strong in the Savior's love;",
      "Through the storm, He is Lord, Lord of all.",
    ],
    scripture: "Ephesians 2:20",
    videoId: "Vu2T8q-mfYg",
  },
];

function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: GREEN,
        background: "rgba(58,125,86,0.08)",
        border: `1px solid ${BORDER}`,
        borderRadius: 999,
        padding: "6px 14px",
      }}
    >
      {children}
    </span>
  );
}

function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 18px",
        borderRadius: 999,
        border: `1px solid ${active ? GREEN : BORDER}`,
        background: active ? "rgba(58,125,86,0.1)" : CARD,
        color: active ? GREEN : MUTED,
        fontWeight: 600,
        fontSize: 14,
        cursor: "pointer",
        transition: "all 150ms",
      }}
    >
      {label}
    </button>
  );
}

function EraTag({ era }: { era: string }) {
  const c = ERA_COLOR[era] || MUTED;
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: c,
        background: `${c}1A`,
        border: `1px solid ${c}40`,
        borderRadius: 999,
        padding: "3px 10px",
      }}
    >
      {era}
    </span>
  );
}

export default function HymnsPage() {
  const [tab, setTab] = usePersistedState<Tab>("vine_hymns_tab", "overview");
  const [era, setEra] = usePersistedState<string>("vine_hymns_era", "All");

  const filtered = era === "All" ? HYMNS : HYMNS.filter((h) => h.era === era);

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>
        {/* Hero */}
        <header style={{ paddingTop: 120, paddingBottom: 36, textAlign: "center" }}>
          <HeroBadge>The Treasury of the Church</HeroBadge>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.6rem, 6vw, 4.4rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              margin: "20px 0 14px",
              color: TEXT,
            }}
          >
            The Great Hymns of the Faith
          </h1>
          <p
            style={{
              maxWidth: 720,
              margin: "0 auto",
              color: MUTED,
              fontSize: "1.1rem",
              lineHeight: 1.6,
            }}
          >
            Twelve centuries of the church singing her faith — from Luther&apos;s defiant fortress to
            the modern hymn revival. Behind every great hymn is a story of grace, grief, or glory.
            Here are the songs that have carried the people of God through every season.
          </p>
        </header>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          <TabButton active={tab === "overview"} label="Overview" onClick={() => setTab("overview")} />
          <TabButton active={tab === "hymns"} label="The Hymns" onClick={() => setTab("hymns")} />
          <TabButton
            active={tab === "stories"}
            label="Stories Behind the Hymns"
            onClick={() => setTab("stories")}
          />
          <TabButton active={tab === "videos"} label="Videos" onClick={() => setTab("videos")} />
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <section>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 18,
                padding: "32px 28px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", margin: "0 0 14px" }}>
                Why Hymns Still Matter
              </h2>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.05rem", margin: "0 0 14px" }}>
                The church has always been a singing church. Long before believers had printed Bibles
                in their own homes, they carried their theology in their hearts through song. A hymn
                is doctrine set to melody — it teaches, it comforts, and it endures. Many Christians
                who can no longer recall a sermon can still sing every verse of &ldquo;Amazing
                Grace&rdquo; from memory.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.05rem", margin: 0 }}>
                The Apostle Paul commanded the church to teach and admonish one another &ldquo;in
                psalms and hymns and spiritual songs, singing with grace in your hearts to the
                Lord&rdquo; (Colossians 3:16). These hymns are that obedience across the centuries —
                the cumulative songbook of the redeemed.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {[
                {
                  era: "Reformation",
                  span: "8th–16th century",
                  text: "Ancient chants, Latin hymns, and the explosive recovery of congregational singing under Luther. The people of God find their voice.",
                },
                {
                  era: "Classic",
                  span: "17th–18th century",
                  text: "The golden age of English hymnody — Watts, the Wesleys, Newton, Toplady. Rich, doctrinal, deeply personal poetry.",
                },
                {
                  era: "Gospel",
                  span: "19th–early 20th c.",
                  text: "American revivalism produces warm, testimony-driven songs: Crosby, Spafford, Chisholm, and the tent-meeting favorites.",
                },
                {
                  era: "Modern",
                  span: "2000s–today",
                  text: "The modern hymn movement — Getty, Townend, and worship collectives recovering doctrinal depth for a new generation.",
                },
              ].map((e) => (
                <div
                  key={e.era}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 16,
                    padding: 20,
                  }}
                >
                  <EraTag era={e.era} />
                  <div style={{ color: MUTED, fontSize: 12, marginTop: 10, marginBottom: 8 }}>
                    {e.span}
                  </div>
                  <p style={{ color: TEXT, lineHeight: 1.6, fontSize: "0.95rem", margin: 0 }}>
                    {e.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 18,
                padding: "28px",
              }}
            >
              <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", margin: "0 0 18px" }}>
                How to Use This Collection
              </h3>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "grid", gap: 14 }}>
                {[
                  ["The Hymns", "Browse all hymns, filter by era, and read a verse or two of each."],
                  ["Stories Behind the Hymns", "The dramatic, often heartbreaking accounts of how these songs came to be."],
                  ["Videos", "Listen to four of the great hymns performed in full."],
                ].map(([t, d]) => (
                  <li
                    key={t}
                    style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                  >
                    <span style={{ color: GREEN, fontWeight: 800, marginTop: 2 }}>›</span>
                    <span>
                      <strong style={{ color: TEXT }}>{t}.</strong>{" "}
                      <span style={{ color: MUTED }}>{d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* THE HYMNS */}
        {tab === "hymns" && (
          <section>
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: 28,
              }}
            >
              {ERA_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setEra(f)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    border: `1px solid ${era === f ? GREEN : BORDER}`,
                    background: era === f ? "rgba(58,125,86,0.1)" : "transparent",
                    color: era === f ? GREEN : MUTED,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gap: 18 }}>
              {filtered.map((h) => (
                <article
                  key={h.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 18,
                    padding: "26px 24px",
                  }}
                >
                  <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background: `${ERA_COLOR[h.era]}1A`,
                        border: `1px solid ${ERA_COLOR[h.era]}40`,
                        color: ERA_COLOR[h.era],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: SERIF,
                        fontWeight: 700,
                        fontSize: "1.2rem",
                      }}
                    >
                      {h.initials}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          gap: 10,
                          alignItems: "center",
                          flexWrap: "wrap",
                          marginBottom: 4,
                        }}
                      >
                        <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", margin: 0 }}>{h.title}</h3>
                        <EraTag era={h.era} />
                      </div>
                      <div style={{ color: MUTED, fontSize: 14, marginBottom: 14 }}>
                        {h.author} · {h.year}
                      </div>
                      <blockquote
                        style={{
                          fontFamily: SERIF,
                          fontSize: "1.2rem",
                          lineHeight: 1.55,
                          color: TEXT,
                          fontStyle: "italic",
                          borderLeft: `3px solid ${ERA_COLOR[h.era]}`,
                          paddingLeft: 16,
                          margin: "0 0 14px",
                        }}
                      >
                        {h.lyrics.map((line, i) => (
                          <span key={i} style={{ display: "block" }}>
                            {line}
                          </span>
                        ))}
                      </blockquote>
                      <div style={{ fontSize: 13, color: GREEN, fontWeight: 600 }}>
                        Scripture: <span style={{ color: MUTED, fontWeight: 400 }}>{h.scripture}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* STORIES */}
        {tab === "stories" && (
          <section style={{ display: "grid", gap: 18 }}>
            {HYMNS.map((h) => (
              <article
                key={h.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 18,
                  padding: "26px 24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginBottom: 6,
                  }}
                >
                  <h3 style={{ fontFamily: SERIF, fontSize: "1.55rem", margin: 0 }}>{h.title}</h3>
                  <EraTag era={h.era} />
                </div>
                <div style={{ color: MUTED, fontSize: 14, marginBottom: 14 }}>
                  {h.author} · {h.year}
                </div>
                <p style={{ color: TEXT, lineHeight: 1.75, fontSize: "1.02rem", margin: 0 }}>
                  {h.story}
                </p>
              </article>
            ))}
          </section>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <section>
            <p
              style={{
                color: MUTED,
                textAlign: "center",
                maxWidth: 640,
                margin: "0 auto 28px",
                lineHeight: 1.6,
              }}
            >
              Sit and listen. Four of the greatest hymns of the faith, performed in full — let the
              words sink deep.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
              }}
            >
              {[
                { title: "Amazing Grace", videoId: "CDdvReNKKuk" },
                { title: "How Great Thou Art", videoId: "5_C2-1NPMHM" },
                { title: "It Is Well with My Soul", videoId: "ehNUKb5jOWo" },
                { title: "In Christ Alone", videoId: "rn9-UNer6MQ" },
              ].map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    width="100%"
                    style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`}
                    title={v.title}
                    allowFullScreen
                  />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ fontFamily: SERIF, fontSize: "1.25rem", margin: 0 }}>{v.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
