"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const BLUE = "#3B82F6";

const STORAGE_KEY = "vine_christianfriendship_entries";

interface FRDEntry {
  id: string;
  date: string;
  friend: string;
  sharpened: string;
  served: string;
}

const theologySections = [
  {
    title: "David and Jonathan — Covenant Friendship (1 Sam 18:1-4)",
    body: "The soul of Jonathan was knit to the soul of David, and Jonathan loved him as his own soul (1 Samuel 18:1). The friendship of David and Jonathan is the Bible’s most extended portrait of deep friendship, and its defining feature is covenant: a deliberate, spoken commitment that binds two people beyond convenience and beyond competing interests. Jonathan strips himself of his robe and armor and gives them to David — a breathtaking gesture of identity transfer from a crown prince who had every worldly reason to resent the shepherd boy God had chosen in his place. Jonathan later strengthens David’s hand in God (1 Sam 23:16) at personal risk, knowing David will inherit the throne he should have had. Biblical friendship is not mere affinity or proximity; it is covenant loyalty that survives competition, cost, and catastrophe. It does not evaporate when the friend becomes inconvenient or when remaining loyal threatens our own advancement. The soul-knitting of David and Jonathan is the Old Testament’s clearest picture of what the New Testament will call bearing one another’s burdens (Galatians 6:2) and preferring one another in love (Romans 12:10).",
  },
  {
    title: "&ldquo;Iron Sharpens Iron&rdquo; — The Formative Power of Friendship (Prov 27:17)",
    body: "Iron sharpens iron, and one man sharpens another (Proverbs 27:17). The image is deliberately abrasive: sharpening requires friction, pressure, and sustained contact. A friendship that never produces friction is not sharpening anything. Proverbs 27:6 extends the thought: faithful are the wounds of a friend; profuse are the kisses of an enemy. The flatterer who tells you only what you want to hear is more dangerous than the enemy who opposes you openly, because the enemy’s opposition at least alerts you to reality. A true friend is one who loves you enough to wound you with truth when you are wrong, who sees your blind spots and names them, and who stays close enough for long enough to know the difference between a temporary struggle and a settled pattern. This kind of friendship requires both courage (the willingness to speak) and safety (the prior trust that makes the wound receivable). Christian friendship at its best is not pastoral counseling or accountability with a structure; it is two people walking together over years, shaping each other the way iron files iron — with friction, contact, and time, until both are sharper than they could have become alone.",
  },
  {
    title: "&ldquo;I Call You Friends&rdquo; — Jesus and the Disciples (John 15:13-15)",
    body: "Greater love has no one than this, that someone lay down his life for his friends… No longer do I call you servants, for the servant does not know what his master is doing; but I have called you friends, for all that I have heard from my Father I have made known to you (John 15:13-15). Jesus defines friendship by two marks that distinguish it from every lesser relationship: sacrificial love (the willingness to give up one’s life) and disclosed knowledge (being brought inside the purposes and mind of the other). A servant obeys without understanding; a friend is trusted with the interior. That the incarnate Son of God calls human beings his friends is the theological foundation of all Christian friendship — we befriend others as people already befriended by God at immense cost, and every human friendship becomes an echo and apprenticeship of that prior friendship. We learn what it means to lay down our lives for friends by first meditating on the One who did it literally. And we learn to disclose ourselves honestly in friendship because we have first been fully known — and fully loved at that cost — by Christ.",
  },
  {
    title: "&ldquo;A Friend Who Sticks Closer Than a Brother&rdquo; — The Rare and Surpassing Value of True Friendship (Prov 18:24)",
    body: "A man of many companions may come to ruin, but there is a friend who sticks closer than a brother (Proverbs 18:24). The verse distinguishes sharply between companionship (many possible) and true friendship (rare and surpassing). C.S. Lewis in The Four Loves observes that friendship is among the rarest of human goods precisely because it depends not on circumstance (like family) or proximity (like acquaintance) but on shared perception of the same truth: friendship is born the moment one person says to another, ‘What, you too? I thought I was the only one.’ This is why large groups of people can be friendly without being friends: friendship in the fullest sense is almost always between two or three who have found in each other a partner in some vision, calling, or passion. Lewis also observes that modern people — and especially modern Christians — tend to undervalue friendship, treating it as somehow less serious or spiritually significant than romantic love or family commitment. The tradition disagrees: Aelred of Rievaulx called friendship a school of love in which we are trained to love God, and Jesus chose to call his disciples not servants but friends.",
  },
  {
    title: "C.S. Lewis and the Four Loves — Friendship as the Rarest Love",
    body: "In The Four Loves (1960), C.S. Lewis devotes a full chapter to philia — friendship — arguing that it is not only undervalued in modern culture but that its undervaluation is a spiritual symptom. Lewis distinguishes friendship from mere companionship (the enjoyment of company in general) by its content: friends are those who have discovered a shared insight, pursuit, or love that they feared made them singular. The bond of friendship is always triangular — two friends facing the same truth or pursuing the same vision side by side, rather than gazing at each other. This is why, Lewis argues, the entrance of a third friend does not diminish the friendship but enriches it: each new friend reveals something new of the others that previous friends had not drawn out. Lewis also notes that friendship, more than any other love, is vulnerable to a distinctive pride: the pride of the inner ring, the exclusive circle that defines itself by who it excludes. Christian friendship must resist this temptation strenuously, because the community of Christ is called to welcome the outsider and the unlike rather than to consolidate around similarity.",
  },
  {
    title: "Accountability vs. Vulnerability — The Difference That Makes Deep Friendship",
    body: "Many Christian communities offer accountability groups — regular meetings structured around confession of sin, typically with a checklist of behaviors. Accountability is good; it is not the same as deep friendship, and mistaking the one for the other has produced a shallow substitute. Accountability asks: what have you done? Vulnerability asks: who are you becoming? Accountability is structured and periodic; vulnerability is relational and ongoing. Accountability manages behavior; vulnerability offers the interior. The difference matters because human beings can maintain behavioral accountability while remaining fundamentally unknown — confessing what they did while hiding who they are. True friendship, as the tradition from Aelred to Dietrich Bonhoeffer has understood it, requires the progressive disclosure of the self: not just sins confessed but fears named, longings admitted, doubts voiced, sufferings shared. Bonhoeffer in Life Together warns against the person who is spiritually performing rather than genuinely present in Christian community — the person who is always the helper, never the helped, always the strong one, never the one who allows his own weakness to be seen and carried. Real friendship, he argues, is only possible between people who have allowed themselves to be known at that deeper level.",
  },
  {
    title: "Why Christians Often Have Shallow Friendships — And What to Do About It",
    body: "The epidemic of loneliness in contemporary life affects Christians as much as anyone, and the church has not always helped. Several structural patterns militate against deep Christian friendship. First, the consumer church model — attending services as a program consumer rather than a community participant — produces acquaintanceship without friendship. Friendship requires repeated, unplanned proximity: you cannot become close friends with people you see only in structured programs. Second, busyness is the enemy of friendship: adult friendships require discretionary time that modern life continuously squeezes. Third, Christian culture has sometimes treated vulnerability as spiritually risky — something to manage rather than something to cultivate. Friendships that remain at the level of theological discussion and church small talk never become deep. What the church needs is not more programs about friendship but actual practice: people who decide to covenant with one or two others for the long haul, who protect time for unhurried presence, who practice the small disciplines of honesty and disclosure, and who stay when staying becomes costly. Jonathan did not leave David because staying became politically inconvenient. That is the standard the tradition holds up — and it is achievable, one kept friendship at a time.",
  },
];

const practices = [
  {
    name: "The Covenant Conversation",
    body: "Identify one or two people you believe God may be calling you into deep friendship with. Arrange an unhurried meal or walk and say explicitly: I want to be your friend for the long haul. Tell them what that means to you — that you intend to pray for them, show up in adversity, tell them the truth in love, and not drift away when life gets busy. Jonathan made his covenant with David explicit and physical (1 Sam 18:3-4); modern friendship rarely has that kind of ceremony, but the conversation itself — the naming of intentional commitment — transforms a connection into a covenant.",
  },
  {
    name: "Ask the Iron Question",
    body: "Once a month, ask a close friend the question that Proverbs 27:17 implies: Where do you see me needing to be sharpened right now? Where have you noticed a blind spot, a pattern, or an inconsistency between what I say and how I live? Then receive the answer without defensiveness, as the faithful wound that it is (Prov 27:6). Reciprocate by giving the same honest, loving attention when asked. A friendship that never produces this kind of truthful friction is comfortable but not formative.",
  },
  {
    name: "Protect the Time of Friendship",
    body: "Adult friendships rarely form by accident. Schedule a recurring appointment with your closest friends — a weekly walk, a monthly meal, an annual retreat — and protect it with the same discipline you protect medical appointments. Friendship is not a luxury to be fit in after everything else; it is a means of grace, a school of love, and — for those who are single — often the primary relational context in which God does His formative work. Treat the protected time as sacred.",
  },
  {
    name: "Go One Layer Deeper",
    body: "In your next significant conversation with a friend, resist the drift toward logistics, sports, news, or church gossip, and ask one question that goes a layer deeper: What are you most anxious about right now? Where do you feel most alive? What are you avoiding? What do you wish someone would ask you? Answer the same question honestly when your friend turns it back to you. The progressive disclosure of the interior is the mechanism by which acquaintanceships become friendships. It requires courage; it also requires an act of trust in the other person’s goodwill.",
  },
  {
    name: "Stay Through the Hard Season",
    body: "Proverbs 17:17 says a friend loves at all times, and a brother is born for adversity. When a friend enters a prolonged hard season — depression, grief, a drawn-out divorce, a slow recovery, a faith crisis — the natural social gravity is to drift away as the easy chemistry of earlier seasons fades and presence becomes more costly. Choose deliberately to stay: show up to the hospital, the third funeral, the dreary Wednesday visit. Say explicitly, I am not going anywhere. In a culture of optional relationships and effortless exits, that sentence carries extraordinary healing power — and it is among the most Christlike things a friend can say.",
  },
  {
    name: "Confess to a Friend, Not Just to God",
    body: "Dietrich Bonhoeffer in Life Together argues that the assurance of forgiveness is made concrete and bodily when it is spoken to us by another person: the brother or sister who hears our confession and declares God’s pardon becomes, in that moment, a mediator of grace. This is not sacramental confession in the Catholic sense; it is the Protestant recovery of James 5:16 — confess your sins to one another and pray for one another, that you may be healed. Choose one friend with whom you practice genuine honesty about sin — not the managed version, but the real version. The act of being known in your failure and loved anyway is among the most profound experiences of the gospel available in ordinary Christian life.",
  },
];

const voices = [
  {
    name: "C.S. Lewis",
    years: "1898–1963",
    role: "The Four Loves",
    body: "Lewis devoted a full chapter of The Four Loves to philia, arguing that modern people undervalue friendship because it seems unnecessary — we can eat, reproduce, and govern without it — and that this is exactly wrong. For Lewis, friendship is one of those things that give value to survival rather than being merely necessary for it. He describes friendship as born when one person says to another, ‘What! You too? I thought I was the only one’ — the discovery of shared vision, taste, or truth that makes two people see each other suddenly not as faces in the crowd but as fellow travelers. Lewis also wrote honestly about his own experience of grief after losing his friend Charles Williams: the gap Williams left was not filled by redistributing his share among the survivors, but was felt as an absolute loss of the unique thing that existed only when Lewis, Tolkien, Williams, and the others were together. This is the theological weight of particular friendship: each is irreplaceable.",
    quote: "Friendship is unnecessary, like philosophy, like art, like the universe itself. It has no survival value; rather it is one of those things which give value to survival.",
  },
  {
    name: "Aelred of Rievaulx",
    years: "1110–1167",
    role: "Spiritual Friendship",
    body: "Aelred was a 12th-century Cistercian abbot whose dialogue Spiritual Friendship is the classic Christian treatment of the subject. Writing at Rievaulx Abbey in Yorkshire, Aelred adapted Cicero’s treatise De Amicitia but transformed it by placing Christ at its center: Here we are, you and I, and I hope a third, Christ, is in our midst. Aelred dared to argue that friendship is not a distraction from the love of God but a path toward it — that genuine spiritual friendship begins in Christ, proceeds in Christ, and finds its perfection in Christ. He distinguished three kinds of friendship — carnal (based on pleasure), worldly (based on advantage), and spiritual (based on virtue and a shared love of God) — and argued that only the third deserves the name in its fullest sense. Aelred himself was a man of deep personal affections, and his writing has an emotional warmth unusual for medieval monastic theology. He remains the most important Christian thinker on the subject of friendship and is especially significant for his treatment of same-sex friendship within the bounds of chastity and covenant.",
    quote: "In friendship are joined honor and charm, truth and joy, sweetness and good will, affection and action. And all these take their beginning from Christ, advance through Christ, and are perfected in Christ.",
  },
  {
    name: "Larry Crabb",
    years: "1944–2021",
    role: "Connecting; SoulTalk",
    body: "Christian psychologist and spiritual director Larry Crabb spent the second half of his career arguing that the most powerful healing agent available to human beings is not therapy but genuine Christian community — specifically, the kind of deep relational knowing and being known that the New Testament calls bearing one another’s burdens. In Connecting (1997) he challenged the professionalization of care in the church: the assumption that trained counselors must do what ordinary believers could do if they were willing to stop talking about surface things and go deep. Crabb’s concept of soul talk — conversation aimed not at advice-giving or problem-solving but at releasing the good that God has placed in another person’s soul — is one of the most practically useful frameworks for understanding what deep Christian friendship is trying to do.",
    quote: "The greatest thing we can do for one another is to believe in each other’s soul — to insist, against all appearances, that there is something beautiful and Godward in the person before us, and to speak to it.",
  },
  {
    name: "Dietrich Bonhoeffer",
    years: "1906–1945",
    role: "Life Together",
    body: "Bonhoeffer wrote Life Together in 1939, out of his experience leading the clandestine Finkenwalde seminary for the Confessing Church. The book is a theology of Christian community that takes its cue not from ideals of what community should feel like but from the reality of what it is: a community gathered around Christ, not around affinity or personality. Bonhoeffer warns against the person who brings an idealized dream of Christian community and then becomes destructive when the dream collides with the reality of particular, imperfect people. He also writes with piercing insight about the spiritual danger of being always the helper — always strong, always giving, never needing — because such a posture keeps the other person at arm’s length and prevents the mutuality that genuine friendship requires. His chapter on confession and the Lord’s Supper recovers the Protestant practice of mutual confession as a means of grace: being known in our sin by a specific person, and heard by that person pronouncing absolution, makes forgiveness concrete and communal.",
    quote: "The person who loves their dream of community will destroy community, but the person who loves those around them will create community.",
  },
  {
    name: "Paul David Tripp",
    years: "1950–present",
    role: "Instruments in the Redeemer’s Hands",
    body: "Paul David Tripp’s ministry has centered on the conviction that God’s primary instrument of sanctification is not sermons or books but people — specifically, the kind of loving, honest, grace-saturated relationships that characterize the body of Christ when it is functioning well. In Instruments in the Redeemer’s Hands, Tripp argues that every Christian is called to do what is often called ‘counseling’ in ordinary relationships: to speak truth in love, to ask the hard question, to point the struggling friend back to Christ, and to do so not from a position of superiority but as a fellow sinner being transformed by the same grace. Tripp’s framework of get in, get connected, speak truth, and do something practical provides an accessible structure for what deep Christian friendship looks like in practice.",
    quote: "God’s primary tool of change is people. Not books, not sermons, not programs — but people who know us, love us, and care enough to speak the truth of the gospel into our lives.",
  },
  {
    name: "Wesley Hill",
    years: "1981–present",
    role: "Spiritual Friendship",
    body: "Wesley Hill is an Anglican priest and theologian who has written with unusual courage and clarity about same-sex attraction and celibacy, and who has recovered the tradition of spiritual friendship — particularly Aelred’s — as a resource for the church’s imagination about what Christian community can be. His book Spiritual Friendship argues that the modern church has impoverished itself by reducing meaningful relationships to marriage and the nuclear family, and by failing to provide adequate frameworks for the deep, committed, non-romantic friendships that the tradition called spiritual friendship. Hill does not argue against the church’s teaching on sexuality; he argues for the church to take with much greater seriousness the relational ecology in which celibate Christians — and all Christians — can flourish. His recovery of Jonathan and David and of Aelred’s framework is one of the most significant contributions to Christian thinking on friendship in recent decades.",
    quote: "Friendship is not a lesser love. It is, the tradition tells us, one of the highest loves — the love that most nearly resembles the eternal friendship of the Trinity, and that most fully forms us into people capable of loving God.",
  },
];

const scriptures = [
  {
    ref: "1 Samuel 18:1, 3",
    text: "The soul of Jonathan was knit to the soul of David, and Jonathan loved him as his own soul… Then Jonathan made a covenant with David, because he loved him as his own soul.",
    note: "The soul-knitting of David and Jonathan is Scripture’s first portrait of deep friendship as covenant — not mere affinity but a binding commitment that will survive political competition, exile, and death.",
  },
  {
    ref: "Proverbs 27:17",
    text: "Iron sharpens iron, and one man sharpens another.",
    note: "Sharpening requires friction. A friendship with no capacity for truthful challenge is comfortable but not formative. True friends make each other better precisely through the honest pressure of long proximity.",
  },
  {
    ref: "Proverbs 18:24",
    text: "A man of many companions may come to ruin, but there is a friend who sticks closer than a brother.",
    note: "Many companions, one friend. The verse distinguishes breadth from depth and suggests that the rare friend — closer than family — is worth more than every social connection combined.",
  },
  {
    ref: "John 15:13-15",
    text: "Greater love has no one than this, that someone lay down his life for his friends… I have called you friends, for all that I have heard from my Father I have made known to you.",
    note: "Jesus defines friendship by sacrificial love and disclosed knowledge. To be Jesus’ friend is to be brought inside his purposes; to be a friend to another is to give them access to your interior.",
  },
  {
    ref: "Proverbs 27:6",
    text: "Faithful are the wounds of a friend; profuse are the kisses of an enemy.",
    note: "The flattering enemy is more dangerous than the honest friend because flattery insulates us from reality while truth — however painful — opens us to it. Receive the faithful wound.",
  },
  {
    ref: "Galatians 6:2",
    text: "Bear one another’s burdens, and so fulfill the law of Christ.",
    note: "The law of Christ is the law of love, and love in community takes the form of burden-bearing — the willingness to carry what another cannot carry alone. This is friendship as the New Testament describes it.",
  },
];

const videos = [
  { videoId: "YiKdqiIiPqo", title: "The Theology of Christian Friendship" },
  { videoId: "TkxXVkBkEi4", title: "C.S. Lewis on Friendship — The Four Loves" },
  { videoId: "xhFEDfLQSaM", title: "Iron Sharpens Iron: Accountability and Deep Friendship" },
  { videoId: "wbRVe0WMQSM", title: "David and Jonathan: Covenant Friendship in Scripture" },
  { videoId: "0lWSSQ-KJpw", title: "Why Christians Struggle with Deep Friendship" },
  { videoId: "yJKGLa3HXMY", title: "Spiritual Friendship — Wesley Hill" },
];

const relatedPages = [
  { href: "/christian-community", label: "Christian Community" },
  { href: "/christian-faithfulness", label: "Christian Faithfulness" },
  { href: "/discipleship", label: "Discipleship" },
  { href: "/spiritual-disciplines", label: "Spiritual Disciplines" },
  { href: "/christian-community", label: "Bearing Burdens" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianFriendshipPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FRDEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [friend, setFriend] = useState("");
  const [sharpened, setSharpened] = useState("");
  const [served, setServed] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      // ignore corrupted storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage may be unavailable
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!friend.trim()) return;
    const entry: FRDEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      friend: friend.trim(),
      sharpened: sharpened.trim(),
      served: served.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setFriend("");
    setSharpened("");
    setServed("");
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    color: TEXT,
    padding: "0.75rem 0.9rem",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    resize: "vertical",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: TEXT,
    fontWeight: 700,
    fontSize: "0.88rem",
    marginBottom: "0.4rem",
  };

  const hintStyle: React.CSSProperties = {
    color: MUTED,
    fontSize: "0.8rem",
    margin: "0.3rem 0 0",
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: BLUE + "22",
            color: BLUE,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Faith &amp; Relationships
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Iron Sharpens Iron: Christian Friendship
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Deep Christian friendship &mdash; the kind that sharpens, bears burdens, and sticks closer than a brother &mdash;
          is one of the rarest and most transformative gifts in the Christian life. Jesus called his disciples friends, not
          servants. David and Jonathan made covenant and wept. C.S. Lewis called friendship the love that most nearly
          resembles the eternal society of God.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the theology of Christian friendship, the practices that form deep bonds, the voices of those
          who have written most wisely on it, and a journal to help you invest deliberately in the friendships God is
          cultivating in your life.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                borderColor: tab === t.id ? BLUE : BORDER,
                background: tab === t.id ? BLUE + "22" : "transparent",
                color: tab === t.id ? BLUE : MUTED,
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: BLUE, margin: "0 0 0.25rem" }}>
              A Theology of Christian Friendship
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Seven movements through Scripture and the tradition on what makes Christian friendship different
              &mdash; and why the church so often settles for less.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: BLUE, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: BLUE + "11", border: `1px solid ${BLUE}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: BLUE, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Irreplaceable Particularity of True Friendship
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology converges on a single insight that modernity finds hard to accept: true
                friendship is irreplaceable. It cannot be scaled, optimized, or reproduced by a program. It is always
                between these particular people, in this particular season, shaped by their particular shared history.
                Jonathan&rsquo;s friendship with David could not have been transferred to anyone else. This particularity
                is not a limitation &mdash; it is the mark of its reality. Friendship, like grace, is always personal
                before it is general; it arrives in the form of a specific person who sees you, stays, and sharpens.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: BLUE, margin: "0 0 0.25rem" }}>
              Practices of Christian Friendship
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Friendship is a gift, but it grows in tended soil. These six practices build the habits of availability,
              honesty, and covenantal commitment that deep friendship requires.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: BLUE + "22",
                  color: BLUE,
                  fontWeight: 800,
                  borderRadius: "50%",
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "0.9rem",
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", margin: "0.25rem 0 0.5rem" }}>{p.name}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: BLUE, margin: "0 0 0.25rem" }}>
              Voices on Christian Friendship
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six thinkers and writers who have explored Christian friendship with depth and clarity &mdash; from a
              medieval abbot to a 21st-century Anglican theologian.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: BLUE, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${BLUE}`,
                  background: BLUE + "0E",
                  borderRadius: "0 8px 8px 0",
                  color: TEXT,
                  fontStyle: "italic",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: BLUE, margin: "0 0 0.25rem" }}>
              Scripture on Friendship
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts to read slowly, memorize, and pray. Each pairs the passage with a brief reflection for
              meditation on what Scripture teaches about true friendship.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: BLUE, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${BLUE}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: BLUE + "11", border: `1px solid ${BLUE}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>Suggested practice:</strong> choose one verse this week and carry it
                into a specific friendship. Let it ask of you: Am I this kind of friend? Where am I falling short? What
                would it look like to embody this text with the person in front of me?
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: BLUE, margin: 0 }}>
              Friendship Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name a friend, reflect on how they sharpened or challenged you this week, and note how you served them.
              Entries are saved privately in your browser &mdash; a quiet ledger of the friendships God is forming in you.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="frd-friend" style={labelStyle}>A friend I am investing in</label>
                <textarea
                  id="frd-friend"
                  value={friend}
                  onChange={e => setFriend(e.target.value)}
                  rows={2}
                  placeholder="Name a specific friend &mdash; the one whose soul God has been knitting to yours, or the one you sense a call to go deeper with..."
                  style={inputStyle}
                />
                <p style={hintStyle}>Be particular. Vague intentions produce vague friendships; named people can be specifically loved.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="frd-sharpened" style={labelStyle}>How this friend sharpened (challenged) me this week</label>
                <textarea
                  id="frd-sharpened"
                  value={sharpened}
                  onChange={e => setSharpened(e.target.value)}
                  rows={2}
                  placeholder="A truthful word they spoke, a pattern they named, a question they asked that I needed to hear..."
                  style={inputStyle}
                />
                <p style={hintStyle}>Iron sharpens iron. Receive the faithful wound (Prov 27:6) as the gift it is.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="frd-served" style={labelStyle}>How I served this friend this week</label>
                <textarea
                  id="frd-served"
                  value={served}
                  onChange={e => setServed(e.target.value)}
                  rows={2}
                  placeholder="A burden I carried, a presence I showed up with, an honest word I offered, a prayer I prayed with them..."
                  style={inputStyle}
                />
                <p style={hintStyle}>&ldquo;Greater love has no one than this&rdquo; &mdash; friendship means moving toward, not waiting to be approached.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!friend.trim()}
                style={{
                  background: friend.trim() ? BLUE : BORDER,
                  color: friend.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: friend.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Entries{loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}> ({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No entries yet. Begin your ledger of friendship above &mdash; one named friend at a time.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                        <span style={{ color: MUTED, fontSize: "0.8rem" }}>{entry.date}</span>
                        <button
                          onClick={() => deleteEntry(entry.id)}
                          aria-label="Delete entry"
                          style={{
                            background: "transparent",
                            border: `1px solid ${BORDER}`,
                            borderRadius: 8,
                            color: MUTED,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            padding: "0.25rem 0.65rem",
                            cursor: "pointer",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                      <div style={{ marginBottom: "0.75rem" }}>
                        <div style={{ color: BLUE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Friend
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.friend}</p>
                      </div>
                      {entry.sharpened && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: BLUE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            How They Sharpened Me
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.sharpened}</p>
                        </div>
                      )}
                      {entry.served && (
                        <div>
                          <div style={{ color: BLUE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            How I Served Them
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.served}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: BLUE, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on Christian friendship &mdash; from the theology of David and Jonathan to C.S. Lewis on philia
              to practical wisdom for cultivating deep bonds in the body of Christ.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Related pages */}
        <div style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
            Continue Exploring
          </h2>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {relatedPages.map(r => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  border: `1px solid ${BORDER}`,
                  background: CARD,
                  color: MUTED,
                  padding: "0.45rem 1rem",
                  borderRadius: 20,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {r.label}
              </Link>
            ))}
          </div>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: 660 }}>
            &ldquo;There is a friend who sticks closer than a brother&rdquo; &mdash; and that friend is first of all
            Christ, who called us friends at the cost of his life. From that prior friendship flows every true bond of
            Christian friendship. Invest in it; protect it; let iron sharpen iron.
          </p>
        </div>
      </main>
    </div>
  );
}
