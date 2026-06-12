"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_faithfulness_entries";

interface FTHEntry {
  commitment: string; // the commitment being kept
  challenge: string;  // what makes it hard right now
  anchor: string;     // God's faithfulness that anchors yours
}

const theologySections = [
  {
    title: "Pistis as Fruit — Galatians 5:22",
    body: "When Paul lists the fruit of the Spirit in Galatians 5:22, the seventh quality he names is pistis — the same Greek word usually translated “faith.” In this context, nearly every translator renders it “faithfulness,” because Paul is not describing the faith that receives salvation but the character that salvation produces: reliability, trustworthiness, fidelity. The person being formed by the Spirit becomes someone who can be counted on — whose word holds, whose commitments endure, whose presence is steady. This is a striking inclusion in the list. Love, joy, and peace feel luminous; faithfulness feels almost mundane. But that is precisely the point. The Spirit does not only produce ecstatic experience; the Spirit produces dependable people. In a culture that prizes options, flexibility, and the open exit, faithfulness is among the most countercultural of the fruit. And because it is fruit — not a technique or a temperament — it grows from union with Christ, not from white-knuckled effort. The faithful person is not the one with the strongest will but the one most deeply rooted in the God who keeps covenant.",
  },
  {
    title: "Great Is Thy Faithfulness — Lamentations 3:22-23",
    body: "The most famous declaration of God’s faithfulness in Scripture comes not from a season of triumph but from the rubble of a destroyed city. Jeremiah, surveying the wreckage of Jerusalem, writes: “The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness” (Lamentations 3:22-23). The Hebrew word is emunah — firmness, steadiness, the quality of something that holds. Lamentations teaches us that God’s faithfulness is not a fair-weather doctrine; it is what remains when everything else has collapsed. This matters for our own faithfulness because in Scripture, human fidelity is always derivative. We do not generate faithfulness from scratch; we reflect a faithfulness we have first received. The morning-by-morning renewal of God’s mercies is the engine of our morning-by-morning showing up. The believer who keeps a hard commitment for the four-hundredth day is not drawing on personal heroism but on the God whose mercies were new again that morning. Our faithfulness is an echo; God’s is the voice.",
  },
  {
    title: "Faithful in Little, Faithful in Much — Luke 16:10",
    body: "“One who is faithful in a very little is also faithful in much, and one who is dishonest in a very little is also dishonest in much” (Luke 16:10). Jesus articulates here a law of moral physics: character is not built in dramatic moments but revealed by them, and it is built in small ones. The person who fudges small expense reports will fudge large ones; the person who keeps small promises will keep great trusts. This overturns our instinct to wait for a stage worthy of our faithfulness. We imagine that we would be faithful if the stakes were high enough — if we had a great ministry, a great marriage, a great cause. Jesus says the small stakes are the test. The unreturned phone call, the meeting we are five minutes late to, the chore we said we would do — these are not beneath the spiritual life; they are its training ground. Augustine observed that the small things are small, but to be faithful in small things is a great thing. Heaven’s economy reverses ours: God measures not the size of the assignment but the fidelity within it.",
  },
  {
    title: "The Parable of the Talents — Matthew 25:14-30",
    body: "In Matthew 25:14-30, a master entrusts his servants with sums of money — five talents, two, one — “each according to his ability,” and departs. The parable’s genius is that the master praises the five-talent servant and the two-talent servant with identical words: “Well done, good and faithful servant. You have been faithful over a little; I will set you over much.” The reward is not indexed to output but to faithfulness with what was given. The tragedy of the one-talent servant is not failure — he never tried — but the paralysis born of a distorted picture of the master: “I knew you to be a hard man... so I was afraid.” Unfaithfulness, the parable suggests, is often theological before it is moral: we bury what we were given because we believe God is a tyrant waiting for us to fail rather than a Father delighted by our ventures. The parable also dismantles comparison. The two-talent servant is not judged against the five-talent servant. The only question at the accounting is what you did with yours. Faithfulness is always sized to the actual life you were handed, not the life you wish you had.",
  },
  {
    title: "Covenant-Keeping: The Heart of Biblical Faithfulness",
    body: "The Bible’s master category for faithfulness is covenant. From Noah to Abraham to Sinai to David to the new covenant in Christ’s blood, the story of Scripture is the story of a God who binds himself by promise and then keeps the promise across centuries of human failure. The Hebrew word hesed — steadfast love, covenant loyalty — appears roughly 250 times in the Old Testament, almost always describing love that persists because a promise was made, not because the beloved remained lovely. This reframes human faithfulness entirely. Biblical fidelity is not primarily a feeling of devotion but the keeping of vows: marriage vows, ordination vows, membership commitments, the implicit covenants of friendship and employment and parenthood. Modern culture treats commitments as provisional — valid while they continue to serve our growth. Covenant treats commitments as constitutive — they make us who we are. A person who keeps covenant when it costs them something is doing the most Godlike thing a creature can do, because covenant-keeping under cost is precisely what God did at the cross.",
  },
  {
    title: "Faithfulness in Obscurity — When No One Is Watching",
    body: "Most faithfulness is invisible. The mother praying for a wandering child for twenty years, the deacon who sets up chairs every Sunday for a decade, the accountant who refuses the convenient shortcut no one would ever discover — these acts generate no applause, no platform, no metrics. Jesus addressed this directly: “Your Father who sees in secret will reward you” (Matthew 6:4). The phrase assumes that the most important audience for our fidelity is the unseen one. Faithfulness in obscurity is the purest form of the virtue because it is uncontaminated by the rewards of reputation. It answers the question that exposes every heart: would you still do this if no one ever knew? Scripture’s heroes are repeatedly formed in hiddenness — Moses keeping sheep for forty years, David in the wilderness, Jesus himself in the silence of Nazareth for thirty. The hidden years are not a delay before the real assignment; they are where the person capable of the assignment is made. If you are currently faithful in a place no one sees, you are not off the map of God’s purposes. You are at its center.",
  },
  {
    title: "The Faithfulness of Jesus — 2 Timothy 2:13",
    body: "“If we are faithless, he remains faithful — for he cannot deny himself” (2 Timothy 2:13). This is perhaps the most comforting sentence in the New Testament for anyone who has broken a promise, abandoned a post, or failed a vow — which is to say, for everyone. Paul, writing from prison near the end of his life, quotes what appears to be an early Christian hymn, and its climax is the asymmetry between our fidelity and Christ’s. Our faithlessness does not cancel his faithfulness, because his faithfulness is grounded not in our performance but in his own nature: he cannot deny himself. The gospel is not that God is faithful to the faithful; it is that God is faithful, full stop. This is why Christian faithfulness never curdles into anxious perfectionism. We keep our commitments inside a larger commitment that has already been kept. Hebrews calls Jesus “a merciful and faithful high priest” (Hebrews 2:17) and urges us to hold fast “for he who promised is faithful” (Hebrews 10:23). Every human act of fidelity is a small flag planted in territory Christ has already secured. When we fail — and we will — we do not start over from zero. We return to the One who never left.",
  },
];

const practices = [
  {
    name: "The Promise Inventory",
    body: "Set aside one hour with a blank page and list every outstanding commitment you have made: promises to family members, agreements at work, church responsibilities, debts, the casual “I’ll pray for you” and “let’s get coffee” offers still hanging in the air. Most of us carry far more unkept micro-promises than we realize, and each one quietly erodes both our integrity and others’ trust. Once the list exists, triage it: keep, renegotiate, or release. Keep what you can keep, honestly renegotiate what you cannot, and apologize where you simply failed. Then adopt the discipline of Jesus in Matthew 5:37 — “let your yes be yes” — by making fewer promises and keeping all of them. Repeat the inventory quarterly. Faithfulness begins with knowing what you have actually said.",
  },
  {
    name: "Small-Things Excellence",
    body: "Choose one hidden, unglamorous task in your week — filing reports, washing dishes, changing diapers, answering routine emails — and deliberately do it as unto the Lord (Colossians 3:23-24). Before beginning, pray one sentence: “Father, this is for you.” Then do the work with the care you would bring if Christ were the one receiving it, because, according to Paul, he is. This practice attacks the lie that small work is meaningless work and trains the Luke 16:10 muscle: faithfulness in very little. Brother Lawrence turned a monastery kitchen into a sanctuary this way; the venue of your work matters far less than the audience you do it for. Over time, expand from one task to a posture: a life where nothing is too small to be done well, because nothing is too small to be offered to God.",
  },
  {
    name: "The Long-Haul Friendship",
    body: "Identify one friendship that has grown inconvenient — the friend who moved away, the one walking through a depression that makes conversation heavy, the one whose season of need has outlasted your initial enthusiasm. Modern life silently teaches us to let such friendships lapse and to replace them with easier ones. Choose instead to stay. Put a recurring reminder on your calendar to call or write. Show up to the hard hospital visit and the third funeral. Proverbs 17:17 says “a friend loves at all times, and a brother is born for adversity” — friendship’s truest test is not chemistry but continuance. Tell the friend explicitly: “I am not going anywhere.” Few sentences in the modern world carry more healing power, and few are rarer. Faithful friendship across years is one of the closest human analogies to the hesed of God.",
  },
  {
    name: "Vocational Faithfulness",
    body: "Resist the cultural script that says meaning comes only from passion, advancement, or escape, and practice showing up well at the work in front of you — for years. Arrive on time. Do what you said by when you said. Speak honestly about what you cannot do. Refuse the small dishonesties of inflated reports and quiet corner-cutting. Pray for your coworkers by name. If your work is good work done honestly, it is already ministry, whether or not anyone at church ever sees it: Joseph served Pharaoh, Daniel served Babylon, and both changed history through administrative reliability before any miracle occurred. Once a year, write a short review of your working life before God — not your performance review, but your faithfulness review: Was I truthful? Was I diligent? Did the people around me find me trustworthy? Longevity with integrity preaches a sermon that brilliance never can.",
  },
  {
    name: "The Covenant Renewal",
    body: "Vows fade from memory unless they are deliberately revisited. Once a year — on an anniversary, a baptism date, or a chosen day — return to the actual words of the covenants you have made. Married couples: read your wedding vows aloud to each other and ask, “Where am I keeping these well? Where have I drifted?” Church members: revisit your membership commitments and ask whether your presence, giving, and service still reflect them. Those in ministry: reread your ordination or commissioning vows. Renewal is not mere nostalgia; it is recalibration. Israel renewed covenant at Shechem (Joshua 24), and the practice kept a forgetful people anchored to their defining promises. End the renewal with communion or prayer, asking God — the original covenant-keeper — to supply the faithfulness the vows require, because none of us keeps them in our own strength.",
  },
  {
    name: "Daily Liturgy of Dependability",
    body: "Faithfulness is built from a thousand tiny acts of being where you said you would be. Construct a simple daily rule: a fixed time of prayer you keep whether or not you feel anything; meals or bedtimes your family can set their clocks by; meetings you arrive at five minutes early; messages you answer within a day. These are not legalism — they are liturgy, the bodily rehearsal of reliability until it becomes nature. Each kept appointment is a small enacted parable of the God whose mercies arrive every morning without fail. Begin each day by reviewing the day’s commitments and praying Lamentations 3:23 over them: “new every morning — great is your faithfulness.” End each day with a brief examen: Where was I dependable today? Where did I quietly fail someone? Confess, receive mercy, and begin again tomorrow. The dependable life is assembled one ordinary kept word at a time.",
  },
];

const voices = [
  {
    name: "Eugene Peterson",
    years: "1932–2018",
    role: "Pastor of long faithfulness",
    body: "Peterson pastored the same congregation in Bel Air, Maryland, for twenty-nine years, and out of that long obedience came his conviction that the pastoral life — and the Christian life — is fundamentally about staying. Borrowing a phrase from Nietzsche, he titled his book on discipleship A Long Obedience in the Same Direction, arguing that the essential thing in heaven and earth is precisely such persistence. In an age of religious celebrity and church-hopping, Peterson insisted that holiness is local and slow: the same people, the same parish, the same prayers, decade after decade. He refused larger platforms for most of his ministry, believing that the congregation in front of him was the assignment. His witness rebukes our restlessness and dignifies every believer quietly tending one small field for a lifetime.",
    quote: "There is a great market for religious experience in our world; there is little enthusiasm for the patient acquisition of virtue, little inclination to sign up for a long apprenticeship in what earlier generations of Christians called holiness.",
  },
  {
    name: "Thomas Chisholm",
    years: "1866–1960",
    role: "Hymnwriter of ordinary obscurity",
    body: "Chisholm wrote “Great Is Thy Faithfulness,” perhaps the twentieth century’s most beloved hymn of God’s constancy — and he wrote it from a thoroughly unremarkable life. Born in a Kentucky log cabin, he had no high school education, suffered fragile health that ended his brief pastorate after one year, and spent decades as an insurance salesman in New Jersey. There was no dramatic crisis behind the hymn; Chisholm said it arose simply from his morning-by-morning experience of Lamentations 3:22-23 across an ordinary life. He wrote: “My income has not been large at any time due to impaired health... but I must not fail to record the unfailing faithfulness of a covenant-keeping God.” The hymn nearly disappeared until it spread through the Moody Bible Institute and later Billy Graham’s crusades. Chisholm proves that the deepest testimonies to God’s faithfulness are often written not by heroes but by ordinary people who kept noticing.",
    quote: "I must not fail to record here the unfailing faithfulness of a covenant-keeping God and that He has given me many wonderful displays of His providing care, for which I am filled with astonishing gratefulness.",
  },
  {
    name: "Hudson Taylor",
    years: "1832–1905",
    role: "Decades of faithfulness in China",
    body: "Taylor sailed for China at twenty-one and gave fifty-one years to one calling, founding the China Inland Mission in 1865 with the radical conviction that God’s work done in God’s way would never lack God’s supply. He buried his first wife and four of his children on Chinese soil, endured breakdowns of health, the loss of coworkers in the Boxer Rebellion, and constant financial precariousness — and stayed. By his death the mission had over 800 missionaries and had carried the gospel into every inland province. Taylor’s faithfulness was explicitly anchored in God’s: his life motto came from the marginal reading of Mark 11:22, “Hold God’s faithfulness.” He learned, he said, to move man through God by prayer alone. His perseverance through catastrophic loss shows that long faithfulness is not the absence of suffering but trust that outlasts it.",
    quote: "Want of trust is at the root of almost all our sins and all our weaknesses, and how shall we escape it but by looking to Him and observing His faithfulness?",
  },
  {
    name: "George Müller",
    years: "1805–1898",
    role: "Faithful prayer over orphanages",
    body: "Müller, a converted thief and Prussian immigrant to England, opened his first orphan house in Bristol in 1836 with a deliberate policy: he would never ask any human being for funds, never take on debt, and never publicize needs — he would simply pray, and record what God provided. Over sixty years he cared for more than 10,000 orphans and recorded over 50,000 specific answers to prayer in his journals, including mornings when children sat before empty plates and breakfast arrived at the door — once from a baker God had woken in the night, once from a milk cart that broke down outside. Müller said he kept the orphanages partly so that ordinary believers would have visible proof that God remains faithful to those who trust him. His ledger-keeping discipline made faithfulness measurable: not a vague feeling about providence, but dated entries of promises kept.",
    quote: "The beginning of anxiety is the end of faith, and the beginning of true faith is the end of anxiety.",
  },
  {
    name: "Edith Schaeffer",
    years: "1914–2013",
    role: "Hidden faithfulness at L’Abri",
    body: "When Francis and Edith Schaeffer opened their Swiss chalet as L’Abri (“the shelter”) in 1955, the ministry’s public face became Francis’s lectures and books — but its daily reality was sustained by Edith’s hidden labor. For decades she cooked for unending streams of skeptics, hippies, and seekers, made beds, arranged flowers on trays for the sick, typed thousands of pages of letters, and prayed through the nights for finances the community never solicited. She insisted that beauty and hospitality were apologetics: a lovingly set table argued for the existence of a personal God as surely as a syllogism. Her book The Hidden Art of Homemaking dignified the unseen creativity of ordinary households. Edith’s witness is the faithfulness of the kitchen and the guest room — the kind history rarely records and heaven never misses.",
    quote: "If you have been worn out by the dailiness of life, remember that it is in the dailiness that God asks us to be faithful, and it is there that He meets us.",
  },
  {
    name: "Jim Elliot",
    years: "1927–1956",
    role: "Faithful unto death",
    body: "Elliot was a champion college wrestler and honor student who turned down promising prospects in the United States because he believed the unreached Waorani people of Ecuador had first claim on his life. His journals, kept faithfully through his twenties, reveal a man training daily in small fidelities — prayer, Scripture, integrity in minor choices — long before any dramatic test arrived. In January 1956, he and four colleagues were speared to death on a river sandbar by the people they had come to reach; the men carried firearms but had agreed not to use them against those they hoped to win. He was twenty-eight. His widow Elisabeth later returned to live among the Waorani, many of whom came to faith. Elliot’s most famous journal line distills the logic of faithfulness unto death: fidelity to Christ is never finally a loss, because what is surrendered was always perishable and what is gained is not.",
    quote: "He is no fool who gives what he cannot keep to gain what he cannot lose.",
  },
];

const scriptures = [
  {
    ref: "Galatians 5:22-23",
    text: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.",
    note: "Faithfulness (pistis) appears here not as a heroic achievement but as fruit — the organic result of the Spirit’s life within. You do not manufacture reliability by effort alone; you abide in Christ, and dependability grows.",
  },
  {
    ref: "Lamentations 3:22-23",
    text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    note: "Written amid the ruins of Jerusalem, this is faithfulness declared from the wreckage. God’s emunah — his unwavering constancy — is the ground on which all human faithfulness stands, renewed with every sunrise.",
  },
  {
    ref: "Luke 16:10",
    text: "One who is faithful in a very little is also faithful in much, and one who is dishonest in a very little is also dishonest in much.",
    note: "Jesus locates the proving ground of character in small things. The minor commitment you are tempted to treat carelessly today is the apprenticeship for every great trust God intends to give.",
  },
  {
    ref: "Matthew 25:21",
    text: "His master said to him, “Well done, good and faithful servant. You have been faithful over a little; I will set you over much. Enter into the joy of your master.”",
    note: "The commendation every believer longs to hear is addressed not to the brilliant or the famous but to the faithful. The reward of faithfulness is more trust — and entrance into the Master’s own joy.",
  },
  {
    ref: "2 Timothy 2:13",
    text: "If we are faithless, he remains faithful — for he cannot deny himself.",
    note: "The gospel’s great asymmetry: our failures do not unmake Christ’s fidelity. His faithfulness rests on his own unchanging nature, which means our return is always possible and our hope is never finally in ourselves.",
  },
  {
    ref: "1 Corinthians 4:2",
    text: "Moreover, it is required of stewards that they be found faithful.",
    note: "Paul defines the single non-negotiable of stewardship. Not success, not size, not visibility — faithfulness. Whatever has been entrusted to you, the only question at the final accounting is whether you were true to the trust.",
  },
];

const videos = [
  { videoId: "0k1WhFtVp0o", title: "The Fruit of Faithfulness - Galatians 5" },
  { videoId: "dQif2mGXZJU", title: "Great Is Thy Faithfulness - Story Behind the Hymn" },
  { videoId: "0HxIWNJqAoE", title: "Faithful in the Little Things - Luke 16" },
  { videoId: "rRyGmtSqvqI", title: "The Parable of the Talents Explained" },
  { videoId: "O0ivm8gkbVc", title: "Hudson Taylor: A Life of Faithfulness" },
  { videoId: "Ck9LXyOUgi4", title: "George Müller and the Faithfulness of God" },
];

const relatedPages = [
  { href: "/fruit-of-the-spirit", label: "Fruit of the Spirit" },
  { href: "/christian-patience", label: "Christian Patience" },
  { href: "/christian-perseverance", label: "Christian Perseverance" },
  { href: "/covenant", label: "Covenant" },
  { href: "/stewardship", label: "Stewardship" },
  { href: "/theology-of-work", label: "Theology of Work" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianFaithfulnessPage() {
  const [tab, setTab] = useState("theology");

  const [entries, setEntries] = useState<FTHEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [commitment, setCommitment] = useState("");
  const [challenge, setChallenge] = useState("");
  const [anchor, setAnchor] = useState("");

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
    if (!commitment.trim()) return;
    const entry: FTHEntry = {
      commitment: commitment.trim(),
      challenge: challenge.trim(),
      anchor: anchor.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setCommitment("");
    setChallenge("");
    setAnchor("");
  };

  const deleteEntry = (index: number) => {
    setEntries(prev => prev.filter((_, i) => i !== index));
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
      <Navbar />
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: ACCENT + "22",
            color: ACCENT,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Fruit of the Spirit
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Faithful in Little: The Fruit of Faithfulness
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Faithfulness &mdash; <em>pistis</em> in Paul&rsquo;s list of the Spirit&rsquo;s fruit &mdash; is the quiet virtue of
          being reliable: keeping covenants, showing up, holding your word across years when no one is watching and nothing
          is applauding. It is the most ordinary of the fruit, and perhaps the most Godlike, because the whole story of
          Scripture is the story of a God who keeps his promises.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores God&rsquo;s faithfulness as the anchor of ours, the call to be faithful in little things, the
          hope of hearing &ldquo;well done, good and faithful servant,&rdquo; and the practices that build a dependable life
          one kept word at a time.
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
                borderColor: tab === t.id ? ACCENT : BORDER,
                background: tab === t.id ? ACCENT + "22" : "transparent",
                color: tab === t.id ? ACCENT : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.25rem" }}>
              A Theology of Faithfulness
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Seven movements through Scripture&rsquo;s teaching on fidelity &mdash; from the fruit of the Spirit to the
              faithfulness of Christ that holds even when ours fails.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: ACCENT + "11", border: `1px solid ${ACCENT}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology converges on a single insight: human faithfulness is responsive, not
                original. We keep covenant because a covenant has been kept with us. We are faithful in little because the
                One who was faithful unto death now entrusts the little to us. And we labor in obscurity gladly, because
                the Father who sees in secret has promised that no act of fidelity &mdash; however small, however hidden
                &mdash; will be forgotten on the day we hear &ldquo;well done.&rdquo;
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.25rem" }}>
              Practices of a Faithful Life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Faithfulness is fruit, but fruit grows in tended soil. These six practices train the habits of reliability
              &mdash; in promises, work, friendship, and vows.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: ACCENT + "22",
                  color: ACCENT,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.25rem" }}>
              Voices of Faithfulness
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six lives &mdash; pastors, hymnwriters, missionaries, homemakers, martyrs &mdash; whose long fidelity shows
              what the fruit of faithfulness looks like worked out across decades.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${ACCENT}`,
                  background: ACCENT + "0E",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.25rem" }}>
              Scripture on Faithfulness
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts to read slowly, memorize, and pray. Each pairs the passage with a brief reflection for
              meditation.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${ACCENT}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: ACCENT + "11", border: `1px solid ${ACCENT}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>Memory suggestion:</strong> take one verse per week for six weeks. Write it
                on a card, read it each morning with your coffee, and pray it back to God each evening. By the end of the
                six weeks you will carry a small theology of faithfulness wherever you go.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: 0 }}>
              Faithfulness Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name one commitment you are keeping, what makes it hard right now, and the specific faithfulness of God that
              anchors yours. Entries are saved privately in your browser &mdash; a quiet ledger, like M&uuml;ller&rsquo;s
              journals, of promises kept.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="fth-commitment" style={labelStyle}>The commitment I am keeping</label>
                <textarea
                  id="fth-commitment"
                  value={commitment}
                  onChange={e => setCommitment(e.target.value)}
                  rows={2}
                  placeholder="e.g. Showing up to care for my mother every Saturday; staying present in my small group through a hard season..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Be concrete. Vague intentions are hard to keep; named commitments can be kept.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="fth-challenge" style={labelStyle}>What makes it hard right now</label>
                <textarea
                  id="fth-challenge"
                  value={challenge}
                  onChange={e => setChallenge(e.target.value)}
                  rows={2}
                  placeholder="e.g. I'm exhausted and no one notices; the results are invisible; I'm tempted to quit..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Honesty about the cost is part of faithfulness, not a failure of it.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="fth-anchor" style={labelStyle}>God&rsquo;s faithfulness that anchors mine</label>
                <textarea
                  id="fth-anchor"
                  value={anchor}
                  onChange={e => setAnchor(e.target.value)}
                  rows={2}
                  placeholder="e.g. His mercies are new every morning (Lam 3:23); he remains faithful even when I am faithless (2 Tim 2:13)..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Our fidelity is an echo of his. Name the promise you are standing on.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!commitment.trim()}
                style={{
                  background: commitment.trim() ? ACCENT : BORDER,
                  color: commitment.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: commitment.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Entries {loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}>({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No entries yet. Begin your ledger of faithfulness above &mdash; one kept commitment at a time.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map((entry, index) => (
                    <div key={`${index}-${entry.commitment}`} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}>
                      <button
                        onClick={() => deleteEntry(index)}
                        aria-label="Delete entry"
                        style={{
                          position: "absolute",
                          top: "0.9rem",
                          right: "0.9rem",
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
                      <div style={{ marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: ACCENT, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Commitment
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.commitment}</p>
                      </div>
                      {entry.challenge && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: ACCENT, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            What Makes It Hard
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.challenge}</p>
                        </div>
                      )}
                      {entry.anchor && (
                        <div>
                          <div style={{ color: ACCENT, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            God&rsquo;s Faithfulness Anchoring Mine
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.anchor}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on the fruit of faithfulness, the stories behind the great hymns and missionaries of fidelity, and
              the parables of Jesus on being faithful in little.
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
            &ldquo;Well done, good and faithful servant&rdquo; is not reserved for the spectacular. It is spoken over every
            hidden Saturday of caregiving, every kept vow, every year of showing up. Be faithful in the little that is
            yours &mdash; the Master sees, and the joy is coming.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
