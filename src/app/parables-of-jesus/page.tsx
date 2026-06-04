"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SERIF = "var(--font-cormorant, Georgia, serif)";

type Tab = "overview" | "parables" | "howto" | "videos";
type Category = "All" | "Kingdom" | "Grace" | "Prayer" | "Judgment" | "Lost & Found";

const CATEGORIES: Category[] = ["All", "Kingdom", "Grace", "Prayer", "Judgment", "Lost & Found"];

const CATEGORY_COLOR: Record<string, string> = {
  Kingdom: "#6B4FBB",
  Grace: "#3a7d56",
  Prayer: "#3B82F6",
  Judgment: "#EF4444",
  "Lost & Found": "#F59E0B",
};

type Parable = {
  id: string;
  name: string;
  reference: string;
  category: Exclude<Category, "All">;
  summary: string;
  meaning: string;
  principle: string;
};

const PARABLES: Parable[] = [
  {
    id: "sower",
    name: "The Sower (The Four Soils)",
    reference: "Matthew 13:1-23; Mark 4:1-20; Luke 8:4-15",
    category: "Kingdom",
    summary:
      "A farmer scatters seed that falls on four kinds of ground: the hardened path where birds snatch it, rocky soil where it springs up but withers without root, thorny ground that chokes it, and good soil that yields a harvest of thirty, sixty, and a hundredfold. Jesus Himself interprets the parable: the seed is the word of the kingdom, and the soils are the conditions of the human heart that receive it.",
    meaning:
      "The decisive variable is not the seed (which is always good) nor the sower (who scatters generously), but the receptivity of the soil. The hardened heart never lets the word penetrate; the shallow heart welcomes it with emotion but has no depth to sustain it through trial; the divided heart lets the cares of the world and the deceitfulness of riches strangle it; only the heart that hears, holds fast, and perseveres bears fruit. This parable explains why the same gospel produces such different results.",
    principle:
      "The kingdom advances by the planting of the word, and the fruitfulness of a life is measured not by initial enthusiasm but by enduring receptivity. Examine the soil of your own heart.",
  },
  {
    id: "prodigal",
    name: "The Prodigal Son",
    reference: "Luke 15:11-32",
    category: "Lost & Found",
    summary:
      "A younger son demands his inheritance early — effectively wishing his father dead — squanders it in a far country, and ends up feeding pigs. Coming to his senses, he rehearses a confession and returns. But the father, seeing him still far off, runs to embrace him, restores him with robe, ring, and sandals, and throws a feast. The elder brother, who never left, refuses to join and resents the celebration; the father pleads with him too.",
    meaning:
      "This is the gospel in miniature. The father represents God, whose love runs toward repentant sinners before they can finish their apology. Yet the parable has two lost sons: the licentious younger and the self-righteous elder. The elder's cold, transactional obedience is its own form of lostness — he served his father for wages, not love. Both need grace; only one knows it.",
    principle:
      "The Father's grace is lavish, unearned, and offered to both the rebel and the religious. Neither moral failure nor moral performance can earn the feast; only the Father's heart can throw it.",
  },
  {
    id: "samaritan",
    name: "The Good Samaritan",
    reference: "Luke 10:25-37",
    category: "Grace",
    summary:
      "Answering a lawyer who asks 'Who is my neighbor?', Jesus tells of a traveler beaten and left half-dead. A priest and a Levite — religious insiders — pass by on the other side. A Samaritan, despised by Jews, stops, treats the man's wounds, carries him to an inn, and pays for his care. Jesus reverses the question: not 'who is my neighbor?' but 'who proved to be a neighbor?'",
    meaning:
      "Jesus dismantles the attempt to limit the scope of love. The despised outsider, not the religious elite, embodies the law's command to love. Mercy is not about identifying who qualifies for our compassion but about becoming the kind of person who shows mercy to whoever is in need — even an enemy.",
    principle:
      "Love of neighbor knows no ethnic, religious, or social boundary. True righteousness is measured by costly, active mercy, not by ceremonial status or theoretical correctness.",
  },
  {
    id: "lost-sheep",
    name: "The Lost Sheep",
    reference: "Luke 15:1-7; Matthew 18:10-14",
    category: "Lost & Found",
    summary:
      "A shepherd with a hundred sheep loses one and leaves the ninety-nine to search until he finds it. When he does, he lays it on his shoulders rejoicing and calls his friends to celebrate. Jesus declares there is more joy in heaven over one sinner who repents than over ninety-nine who need no repentance.",
    meaning:
      "Told to Pharisees who grumbled that Jesus received sinners, the parable reveals the seeking heart of God. The lost sheep does not find its way home; the shepherd goes after it. Salvation is initiated by God's pursuit, and heaven's joy is proportioned to the recovery of the lost.",
    principle:
      "God is a seeking God who pursues the one. The value of a single soul to heaven exceeds our calculations, and the recovery of the lost is the cause of divine celebration.",
  },
  {
    id: "lost-coin",
    name: "The Lost Coin",
    reference: "Luke 15:8-10",
    category: "Lost & Found",
    summary:
      "A woman with ten silver coins loses one, lights a lamp, sweeps the house, and searches diligently until she finds it. Finding it, she calls her friends and neighbors to rejoice with her. Likewise, Jesus says, there is joy before the angels of God over one sinner who repents.",
    meaning:
      "The middle of three 'lost and found' parables intensifies the theme. The coin is inert — it cannot wander back like a sheep or return home like a son. It simply must be found. The woman's diligent, lamp-lit, sweeping search pictures God's thorough seeking. The lost are not written off; they are searched for.",
    principle:
      "Every lost soul is valuable enough to warrant an exhaustive search. God's grace seeks even those who cannot seek Him, and recovery brings communal joy.",
  },
  {
    id: "mustard-seed",
    name: "The Mustard Seed",
    reference: "Matthew 13:31-32; Mark 4:30-32; Luke 13:18-19",
    category: "Kingdom",
    summary:
      "The kingdom of heaven is like a mustard seed, the smallest of seeds, which a man sows in his field. Though tiny, it grows into a tree large enough for the birds of the air to nest in its branches.",
    meaning:
      "The kingdom begins almost imperceptibly — an itinerant rabbi with twelve unremarkable followers — yet grows beyond all proportion to its origins. The contrast between the negligible beginning and the sheltering tree teaches patience with God's hidden methods and confidence in His certain expansion.",
    principle:
      "The kingdom of God grows from small, easily overlooked beginnings into something vast that shelters the nations. Do not despise the day of small things.",
  },
  {
    id: "pearl",
    name: "The Pearl of Great Price",
    reference: "Matthew 13:45-46",
    category: "Kingdom",
    summary:
      "The kingdom of heaven is like a merchant searching for fine pearls who, on finding one of great value, sells everything he has to buy it.",
    meaning:
      "The merchant is a connoisseur who recognizes supreme worth when he sees it. The kingdom is the one pearl that outvalues every other possession. Selling 'all' is not a grim sacrifice but the natural, joyful response of someone who has grasped what the kingdom is worth.",
    principle:
      "The kingdom is of surpassing, all-eclipsing value. The wise gladly surrender everything lesser to obtain the one thing of supreme worth.",
  },
  {
    id: "treasure",
    name: "The Hidden Treasure",
    reference: "Matthew 13:44",
    category: "Kingdom",
    summary:
      "The kingdom of heaven is like treasure hidden in a field, which a man found and covered up. In his joy he goes and sells all that he has and buys that field.",
    meaning:
      "Whereas the merchant was searching, this man stumbles upon the treasure by surprise — picturing those who discover the kingdom unexpectedly. The dominant note is joy: he sells everything not reluctantly but gladly, because the treasure dwarfs the cost. The kingdom is both hidden and worth any price.",
    principle:
      "The kingdom is a hidden treasure whose discovery produces such joy that any sacrifice to possess it feels like gain. Joy, not duty, drives true discipleship.",
  },
  {
    id: "unforgiving-servant",
    name: "The Unforgiving Servant",
    reference: "Matthew 18:21-35",
    category: "Grace",
    summary:
      "A servant owes his king ten thousand talents — an unpayable fortune. Begging for mercy, he is forgiven the entire debt. He then seizes a fellow servant who owes him a hundred denarii — a trivial sum — and throws him into prison. When the king learns of it, he reinstates the debt and hands the unforgiving servant to the jailers.",
    meaning:
      "Told in answer to Peter's question about the limits of forgiveness, the parable exposes the absurdity of receiving infinite mercy from God while withholding finite mercy from others. The contrast between the two debts (millions versus a few dollars) measures the gulf between what God has forgiven us and what we are asked to forgive.",
    principle:
      "Those who have been forgiven an unpayable debt by God are obligated to forgive others. Unforgiveness reveals that one has not truly grasped the mercy received.",
  },
  {
    id: "vineyard-workers",
    name: "The Workers in the Vineyard",
    reference: "Matthew 20:1-16",
    category: "Grace",
    summary:
      "A landowner hires laborers at dawn for a denarius, then hires more at the third, sixth, ninth, and eleventh hours. At day's end he pays everyone a full denarius, starting with the last. The all-day workers grumble at receiving the same as those who worked one hour. The owner replies that he has been just to them and is free to be generous with his own money.",
    meaning:
      "The parable confronts the human instinct to reduce God's dealings to merit and comparison. The early workers received exactly what was promised; their complaint is really resentment of grace shown to others. God's generosity does not violate justice — it transcends it. The first who grumble become last; the last who simply receive become first.",
    principle:
      "Grace is not wages. God is free to be lavishly generous, and the kingdom dismantles all bookkeeping that resents the mercy shown to latecomers.",
  },
  {
    id: "ten-virgins",
    name: "The Ten Virgins",
    reference: "Matthew 25:1-13",
    category: "Judgment",
    summary:
      "Ten virgins take lamps to meet the bridegroom; five are wise and bring extra oil, five are foolish and bring none. The bridegroom is delayed and all fall asleep. At midnight the cry sounds. The foolish find their lamps going out and rush to buy oil, but while they are gone the bridegroom comes, the wise enter the feast, and the door is shut.",
    meaning:
      "The delay of the bridegroom pictures the interval before Christ's return. Readiness cannot be borrowed or acquired at the last moment — the oil represents a prepared, genuine spiritual life that cannot be transferred from one person to another. Outward association with the wedding party is not enough; only the prepared enter.",
    principle:
      "Be ready for Christ's return, for the hour is unknown and preparation cannot be improvised at the last moment. Watchfulness is a present, personal responsibility.",
  },
  {
    id: "talents",
    name: "The Talents",
    reference: "Matthew 25:14-30; cf. Luke 19:11-27",
    category: "Judgment",
    summary:
      "A master entrusts five, two, and one talents to three servants according to their ability, then goes away. The first two trade and double their sums; the third buries his out of fear. On returning, the master commends the faithful two and condemns the third as wicked and lazy, taking his talent and casting him out.",
    meaning:
      "The kingdom calls for active, risk-taking stewardship of what God entrusts — abilities, opportunities, the gospel itself. The condemnation falls not on the servant who earned less but on the one who did nothing, hiding behind a distorted picture of a harsh master. Faithfulness, not the size of the return, is what the master rewards.",
    principle:
      "God entrusts His servants with resources to be invested for His kingdom. Faithfulness requires courageous stewardship, and fearful passivity is itself a form of unfaithfulness.",
  },
  {
    id: "rich-fool",
    name: "The Rich Fool",
    reference: "Luke 12:13-21",
    category: "Judgment",
    summary:
      "A man's land produces such a bumper crop that he plans to tear down his barns and build bigger ones, telling his soul to relax, eat, drink, and be merry for many years. That very night God says, 'Fool! This night your soul is required of you, and the things you have prepared, whose will they be?'",
    meaning:
      "The fool's error is not wealth itself but the assumption that life consists in possessions and that he can secure his own future apart from God. He converses only with himself, never with God or neighbor. Death exposes the folly of hoarding for a tomorrow that is never guaranteed. To be 'rich toward God' is the only lasting security.",
    principle:
      "Life does not consist in the abundance of possessions. Storing up earthly treasure while neglecting God is folly, for the soul's accounting comes suddenly.",
  },
  {
    id: "wheat-tares",
    name: "The Wheat and the Tares",
    reference: "Matthew 13:24-30, 36-43",
    category: "Judgment",
    summary:
      "A man sows good wheat, but his enemy sows weeds among it. When both spring up, the servants ask whether to pull the weeds. The owner says no, lest they uproot the wheat too; both must grow together until the harvest, when reapers will gather the weeds for burning and the wheat into the barn.",
    meaning:
      "Jesus interprets it: the field is the world, the good seed the sons of the kingdom, the weeds the sons of the evil one, the harvest the end of the age. The parable explains the coexistence of good and evil and restrains premature judgment. Separation belongs to God at the end, not to impatient servants now.",
    principle:
      "Good and evil grow together until the final judgment, which belongs to God alone. Believers exercise patience, leaving the ultimate sorting to the Lord of the harvest.",
  },
  {
    id: "wedding-feast",
    name: "The Wedding Feast",
    reference: "Matthew 22:1-14; cf. Luke 14:15-24",
    category: "Kingdom",
    summary:
      "A king prepares a wedding banquet for his son, but the invited guests refuse to come, making excuses and even mistreating the messengers. The king then sends servants into the streets to gather everyone, good and bad, filling the hall. Yet one guest is found without a wedding garment and is cast out into the darkness — for many are called, but few are chosen.",
    meaning:
      "The invited guests picture Israel's leaders who spurned the kingdom invitation; the streets picture the outsiders and Gentiles now welcomed. But entry is not careless: the wedding garment represents the righteousness that must clothe those who come. The feast is by grace, yet it is not without the transformation grace produces.",
    principle:
      "God's kingdom invitation is wide and gracious, extended to the unlikely, but it must be received rightly — clothed in the righteousness God provides, not in self-chosen terms.",
  },
  {
    id: "pharisee-tax",
    name: "The Pharisee and the Tax Collector",
    reference: "Luke 18:9-14",
    category: "Prayer",
    summary:
      "Two men go up to the temple to pray. The Pharisee stands and thanks God that he is not like other men, listing his fasting and tithing. The tax collector stands far off, beats his breast, and prays, 'God, be merciful to me, a sinner.' Jesus declares the tax collector went home justified rather than the Pharisee.",
    meaning:
      "Told to those who trusted in their own righteousness and despised others, the parable contrasts prayer that informs God of one's merits with prayer that pleads for mercy. Justification comes not to the morally impressive but to the humbly contrite. The one who exalts himself is humbled; the one who humbles himself is exalted.",
    principle:
      "God justifies the humble who plead for mercy, not the proud who trust their own righteousness. Acceptable prayer begins with honest confession of need.",
  },
  {
    id: "persistent-widow",
    name: "The Persistent Widow",
    reference: "Luke 18:1-8",
    category: "Prayer",
    summary:
      "A widow keeps coming to an unjust judge who neither fears God nor respects people, demanding justice against her adversary. Though he refuses for a while, her persistence wears him down and he grants her request lest she wear him out completely. Jesus told this parable so that His disciples 'should always pray and not give up.'",
    meaning:
      "The argument is from lesser to greater: if even a corrupt judge yields to persistence, how much more will the righteous God answer His chosen who cry to Him day and night? The parable encourages tenacious, unceasing prayer in the long delay before final vindication, and ends with the searching question of whether the Son of Man will find faith on the earth.",
    principle:
      "Persistent, unwearied prayer is the posture of faith in a waiting world. God, unlike the unjust judge, is eager to vindicate His people who cry to Him.",
  },
  {
    id: "two-sons",
    name: "The Two Sons",
    reference: "Matthew 21:28-32",
    category: "Judgment",
    summary:
      "A father asks two sons to work in the vineyard. The first refuses but later changes his mind and goes; the second says 'I will, sir' but does not go. Jesus asks which did the father's will — clearly the first. He then tells the chief priests that tax collectors and prostitutes are entering the kingdom ahead of them.",
    meaning:
      "Empty profession counts for nothing; repentant action is what fulfills the father's will. The religious leaders said yes to God with their words but rejected John's call to repentance, while the openly sinful said no with their lives yet repented. Doing, not declaring, marks the true child of the kingdom.",
    principle:
      "Obedience is proven by repentant action, not by words of agreement. Sinners who repent enter the kingdom ahead of the religious who merely profess.",
  },
  {
    id: "wicked-tenants",
    name: "The Wicked Tenants",
    reference: "Matthew 21:33-46; Mark 12:1-12; Luke 20:9-19",
    category: "Judgment",
    summary:
      "A landowner plants a vineyard, leases it to tenants, and goes away. At harvest he sends servants for his fruit, but the tenants beat and kill them. Finally he sends his son, thinking they will respect him; instead they kill him to seize the inheritance. Jesus asks what the owner will do — he will destroy those tenants and give the vineyard to others.",
    meaning:
      "The vineyard is Israel (Isaiah 5), the servants the prophets, the son Jesus Himself, foretelling His own death. The leaders entrusted with God's people sought to keep the kingdom for themselves and rejected the rightful heir. The rejected stone becomes the cornerstone, and stewardship is transferred to a people who will produce its fruit.",
    principle:
      "God holds His stewards accountable for the fruit He seeks. Rejecting the Son brings judgment and the transfer of the kingdom to those who will honor Him.",
  },
  {
    id: "lazarus-rich-man",
    name: "Lazarus and the Rich Man",
    reference: "Luke 16:19-31",
    category: "Judgment",
    summary:
      "A rich man feasts daily while a beggar named Lazarus lies at his gate, longing for scraps. Both die: Lazarus is carried to Abraham's side, the rich man to torment in Hades. The rich man begs for relief and then for a warning to his brothers. Abraham replies that a great chasm is fixed, and that if they will not hear Moses and the Prophets, they will not be persuaded even if someone rises from the dead.",
    meaning:
      "The parable warns against a life of self-indulgence blind to the suffering at one's gate, and reverses earthly fortunes in eternity. Its sober point is that present choices have eternal, irreversible consequences, and that the Scriptures already given are sufficient warning — a pointed foreshadowing of those who would not believe even at Christ's own resurrection.",
    principle:
      "Earthly comfort that ignores the needy ends in eternal loss. The destinies of the next life are fixed, and Scripture is sufficient to lead us to repentance now.",
  },
];

type VideoItem = { videoId: string; title: string; channel: string };
const VIDEOS: VideoItem[] = [
  { videoId: "ueOWHp7gQ-c", title: "The Parables of Jesus — Overview", channel: "BibleProject" },
  { videoId: "XEM4ChQQ7Hg", title: "The Prodigal Son Explained", channel: "Bible Study" },
  { videoId: "VOIdM_Yt-cg", title: "Why Jesus Taught in Parables", channel: "Teaching" },
  { videoId: "Pkj8Tu-yWQk", title: "The Kingdom Parables of Matthew 13", channel: "Sermon Series" },
];

const READING_KEYS = [
  {
    title: "1. One Main Point",
    body:
      "Unlike allegories, most parables make a single central point. The danger is to assign symbolic meaning to every detail (the inn, the two coins, the oil). Identify the one truth the parable is driving at — usually clear from its context and Jesus' own application — and resist over-allegorizing the incidentals.",
  },
  {
    title: "2. Read the Context",
    body:
      "Parables are answers. The Prodigal Son answers the Pharisees' grumbling that Jesus eats with sinners (Luke 15:1-2). The Good Samaritan answers a lawyer's self-justifying question. Always ask: what occasion, question, or audience prompted this story? The surrounding verses usually hold the interpretive key.",
  },
  {
    title: "3. Watch for the Surprise",
    body:
      "Parables work by subverting expectations. The hero is a despised Samaritan; the latecomers get a full wage; the tax collector goes home justified. The 'twist' is where the meaning lives. Notice the moment the original audience would have gasped, and you have found the point.",
  },
  {
    title: "4. The Kingdom is the Subject",
    body:
      "Many parables begin, 'The kingdom of heaven is like…' They are not primarily moral fables but revelations of how God's reign operates — hidden yet growing, costly yet joyful, mixed now but separated at the end. Read them first as windows into the kingdom, and only secondarily as ethics.",
  },
  {
    title: "5. Let It Interpret You",
    body:
      "Parables are designed to disarm and convict. Nathan's parable trapped David before he realized it was about him. Don't merely analyze the parable; let it expose your own heart — your elder-brother resentment, your buried talent, your unforgiveness. The parable has done its work when it reads you.",
  },
  {
    title: "6. Note Jesus' Own Interpretations",
    body:
      "Where Jesus interprets a parable Himself (the Sower, the Wheat and Tares), He sets the pattern and limits for our interpretation. These authoritative readings show how much symbolism is intended and guard us from importing meanings the text does not support.",
  },
];

export default function ParablesOfJesusPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_parables-of-jesus_tab", "overview");
  const [category, setCategory] = usePersistedState<string>("vine_parables-of-jesus_category", "All");
  const [openId, setOpenId] = useState<string | null>(PARABLES[0].id);

  const filtered =
    category === "All" ? PARABLES : PARABLES.filter((p) => p.category === category);

  const tabBtn = (t: Tab, label: string) => (
    <button
      key={t}
      onClick={() => setActiveTab(t)}
      style={{
        padding: "10px 18px",
        borderRadius: 999,
        border: `1px solid ${activeTab === t ? GREEN : BORDER}`,
        background: activeTab === t ? GREEN : "transparent",
        color: activeTab === t ? BG : MUTED,
        fontWeight: 600,
        fontSize: 14,
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 60px" }}>
        {/* Hero */}
        <header style={{ textAlign: "center", padding: "56px 0 28px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: 999,
              border: `1px solid ${PURPLE}`,
              color: PURPLE,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            The Teaching of Jesus
          </span>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              margin: "20px 0 12px",
              lineHeight: 1.05,
            }}
          >
            The Parables of Jesus
          </h1>
          <p style={{ color: MUTED, fontSize: "1.15rem", maxWidth: 720, margin: "0 auto" }}>
            Earthly stories with heavenly meaning. Through everyday images of seeds, feasts,
            shepherds, and stewards, Jesus unveiled the secrets of the kingdom of God — and laid
            bare the hearts of all who listen.
          </p>
        </header>

        {/* Tabs */}
        <nav
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "10px 0 36px",
          }}
        >
          {tabBtn("overview", "Overview")}
          {tabBtn("parables", "The Parables")}
          {tabBtn("howto", "How to Read Parables")}
          {tabBtn("videos", "Videos")}
        </nav>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <section>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "32px 28px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", marginTop: 0 }}>
                What Is a Parable?
              </h2>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.05rem" }}>
                The Greek word <em>parabolē</em> means literally something &ldquo;thrown
                alongside&rdquo; — a comparison set next to a truth to illuminate it. Jesus took the
                familiar furniture of first-century Galilee — sowing and reaping, fishing nets,
                vineyards, wedding feasts, lost coins, wayward sons — and used them to disclose
                realities that the eye cannot see. A parable is not a fable with a tidy moral; it is
                a revelation that simultaneously discloses truth to the receptive and conceals it
                from the hardened.
              </p>
              <blockquote
                style={{
                  fontFamily: SERIF,
                  fontSize: "1.35rem",
                  fontStyle: "italic",
                  color: TEXT,
                  borderLeft: `3px solid ${GREEN}`,
                  paddingLeft: 18,
                  margin: "24px 0",
                }}
              >
                &ldquo;With many such parables he spoke the word to them, as they were able to hear
                it. He did not speak to them without a parable, but privately to his own disciples
                he explained everything.&rdquo;
                <span style={{ display: "block", fontSize: "0.95rem", color: MUTED, marginTop: 8 }}>
                  — Mark 4:33-34
                </span>
              </blockquote>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.05rem" }}>
                When the disciples asked why He taught this way, Jesus answered that to them it was
                given to know the secrets of the kingdom, but to others it was given in parables, so
                that &ldquo;seeing they may not see&rdquo; (Luke 8:10, quoting Isaiah 6). Parables
                are therefore an act of both mercy and judgment: they make truth memorable and
                vivid for those who will hear, while veiling it from those who have already closed
                their hearts. They demand engagement — you cannot remain neutral before a story
                that ends with a question hanging in the air.
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
                { n: "~40", label: "Parables in the Gospels" },
                { n: "13", label: "Kingdom parables in Matthew 13 alone" },
                { n: String(PARABLES.filter(p => p.category === "Lost & Found").length), label: "Lost & Found parables in Luke 15" },
                { n: "1", label: "Central subject: the Kingdom of God" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: "22px 18px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontFamily: SERIF, fontSize: "2.4rem", color: GREEN }}>{s.n}</div>
                  <div style={{ color: MUTED, fontSize: 14, marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "32px 28px",
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", marginTop: 0 }}>
                Themes You Will Find
              </h2>
              <div style={{ display: "grid", gap: 14 }}>
                {[
                  {
                    name: "Kingdom",
                    desc: "How God's reign begins small, grows hidden, costs everything, and is worth more than all else.",
                  },
                  {
                    name: "Grace",
                    desc: "The lavish, unearned mercy of God toward sinners — and the call to extend it to others.",
                  },
                  {
                    name: "Prayer",
                    desc: "Humble, persistent prayer that pleads for mercy and refuses to give up.",
                  },
                  {
                    name: "Judgment",
                    desc: "The certainty of final accounting, the separation of wheat and weeds, and the call to be ready.",
                  },
                  {
                    name: "Lost & Found",
                    desc: "God's relentless search for the lost and heaven's joy over every recovery.",
                  },
                ].map((t) => (
                  <div key={t.name} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 12,
                        height: 12,
                        borderRadius: 999,
                        marginTop: 6,
                        background: CATEGORY_COLOR[t.name],
                      }}
                    />
                    <div>
                      <strong style={{ color: TEXT }}>{t.name}</strong>
                      <span style={{ color: MUTED }}> — {t.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PARABLES */}
        {activeTab === "parables" && (
          <section>
            {/* Filters */}
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: 28,
              }}
            >
              {CATEGORIES.map((c) => {
                const active = category === c;
                const color = c === "All" ? GREEN : CATEGORY_COLOR[c] ?? GREEN;
                return (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 999,
                      border: `1px solid ${active ? color : BORDER}`,
                      background: active ? color : "transparent",
                      color: active ? BG : MUTED,
                      fontWeight: 600,
                      fontSize: 14,
                      cursor: "pointer",
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            <p style={{ textAlign: "center", color: MUTED, marginBottom: 24, fontSize: 14 }}>
              Showing {filtered.length} {filtered.length === 1 ? "parable" : "parables"}
              {category !== "All" ? ` in “${category}”` : ""}
            </p>

            <div style={{ display: "grid", gap: 16 }}>
              {filtered.map((p) => {
                const open = openId === p.id;
                const color = CATEGORY_COLOR[p.category];
                return (
                  <article
                    key={p.id}
                    style={{
                      background: CARD,
                      border: `1px solid ${open ? color : BORDER}`,
                      borderRadius: 16,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button
                      onClick={() => setOpenId(open ? null : p.id)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        background: "transparent",
                        border: "none",
                        color: TEXT,
                        padding: "22px 24px",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 16,
                      }}
                    >
                      <div>
                        <span
                          style={{
                            display: "inline-block",
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: 0.8,
                            textTransform: "uppercase",
                            color,
                            border: `1px solid ${color}`,
                            borderRadius: 999,
                            padding: "3px 10px",
                            marginBottom: 10,
                          }}
                        >
                          {p.category}
                        </span>
                        <h3
                          style={{
                            fontFamily: SERIF,
                            fontSize: "1.5rem",
                            margin: 0,
                            lineHeight: 1.2,
                          }}
                        >
                          {p.name}
                        </h3>
                        <p style={{ color: MUTED, fontSize: 13, margin: "6px 0 0" }}>
                          {p.reference}
                        </p>
                      </div>
                      <span style={{ color, fontSize: 28, lineHeight: 1 }}>{open ? "−" : "+"}</span>
                    </button>

                    {open && (
                      <div style={{ padding: "0 24px 26px" }}>
                        <div style={{ marginBottom: 18 }}>
                          <h4 style={{ color: GREEN, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 6px" }}>
                            The Story
                          </h4>
                          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{p.summary}</p>
                        </div>
                        <div style={{ marginBottom: 18 }}>
                          <h4 style={{ color: GREEN, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 6px" }}>
                            Central Meaning
                          </h4>
                          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{p.meaning}</p>
                        </div>
                        <div
                          style={{
                            borderLeft: `3px solid ${color}`,
                            paddingLeft: 16,
                            background: "rgba(255,255,255,0.02)",
                            borderRadius: 8,
                            padding: "14px 16px",
                          }}
                        >
                          <h4 style={{ color, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 6px" }}>
                            Kingdom Principle
                          </h4>
                          <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                            {p.principle}
                          </p>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* HOW TO READ */}
        {activeTab === "howto" && (
          <section>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "32px 28px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", marginTop: 0 }}>
                Six Keys to Interpreting the Parables
              </h2>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.05rem" }}>
                The parables are deceptively simple. Misread, they become either flat moral lessons
                or fanciful allegories where every detail is squeezed for hidden meaning. Read well,
                they become some of the most piercing, life-shaping words ever spoken. These
                principles keep us on the path Jesus Himself laid down.
              </p>
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              {READING_KEYS.map((k) => (
                <div
                  key={k.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: "24px 24px",
                  }}
                >
                  <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", margin: "0 0 10px", color: GREEN }}>
                    {k.title}
                  </h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{k.body}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                background: CARD,
                border: `1px solid ${PURPLE}`,
                borderRadius: 16,
                padding: "28px 28px",
              }}
            >
              <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", margin: "0 0 10px" }}>
                A Word of Caution
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                Augustine famously allegorized the Good Samaritan — making the inn the church, the
                two coins the two sacraments, the oil and wine the gospel. Beautiful, but not what
                Jesus meant. The Reformers and most modern interpreters recovered the discipline of
                asking what the parable meant to its first hearers. Let the strangeness and the
                single sharp edge of each story stand; do not blunt it with cleverness.
              </p>
            </div>
          </section>
        )}

        {/* VIDEOS */}
        {activeTab === "videos" && (
          <section>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: "28px 28px",
                marginBottom: 24,
              }}
            >
              <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", margin: 0 }}>Watch &amp; Learn</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: "10px 0 0" }}>
                Teaching videos to deepen your study of the parables of Jesus and the kingdom of God
                they reveal.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
              }}
            >
              {VIDEOS.map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
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
                  <div style={{ padding: "16px 18px" }}>
                    <h3 style={{ fontSize: "1.05rem", margin: "0 0 4px" }}>{v.title}</h3>
                    <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>{v.channel}</p>
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
