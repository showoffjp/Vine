"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const AMBER = "#F59E0B";

const STORAGE_KEY = "vine_christiancourage_entries";

interface CGREntry {
  id: string;
  date: string;
  fearFaced: string;
  howFaced: string;
  godProvided: string;
}

const theologySections = [
  {
    title: "Be Strong and Courageous — Joshua 1:9 and the Ground of Courage",
    body: "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go (Joshua 1:9). Three times in nine verses God commands Joshua to be strong and courageous — and the ground of each command is never Joshua's competence, his army's strength, or the weakness of his enemies. It is always presence: the LORD your God is with you. This is the logic of biblical courage. It does not originate in the courage-er's temperament, training, or confidence. It is a response to a promise: since the God who governs all things is present with me, there is no circumstance that can outpace his sufficiency. Joshua inherits an apparently impossible task — succeeding Moses, crossing the Jordan, facing fortified cities — and the antidote to every fear is not a pep talk or an assessment of probabilities but a Person. This pattern runs through every biblical call to courage: from Gideon's absurdly reduced army to Elijah under the juniper tree to Paul before Agrippa. The courage is never self-generated; it is received from the One whose presence makes it possible.",
  },
  {
    title: "The Fear of God as the Antidote to the Fear of Man — Proverbs 29:25",
    body: "The fear of man lays a snare, but whoever trusts in the LORD is safe (Proverbs 29:25). Scripture diagnoses cowardice not primarily as a deficit of nerve but as a misplaced fear: we fear the disapproval, rejection, mockery, or power of people more than we fear God. This is not a minor spiritual imperfection; it is a theological disorder — the creature rated as more threatening than the Creator. Jesus makes the comparison explicit: Do not fear those who kill the body but cannot kill the soul. Rather fear him who can destroy both soul and body (Matthew 10:28). The fear of God is not terror but rightly-ordered reverence — and paradoxically it produces freedom, because the person who fears God rightly has relocated her primary allegiance and has therefore nothing in the human realm left to fear. Most everyday failures of courage — the silence when a word of truth was needed, the laugh at the cruel joke, the concealed conviction, the fudged answer about faith — trace back to the snare of the fear of man. The antidote is not the cultivation of nerve but the deepened fear of God that crowds out the lesser fear.",
  },
  {
    title: "Peter and John Before the Sanhedrin — Boldness from Being with Jesus (Acts 4:29)",
    body: "When they saw the boldness of Peter and John, and perceived that they were uneducated, common men, they were astonished. And they recognized that they had been with Jesus (Acts 4:13). Ordered by the highest religious court in Israel to stop speaking in the name of Jesus, the apostles answer: Whether it is right in the sight of God to listen to you rather than to God, you must judge, for we cannot but speak of what we have seen and heard (Acts 4:19–20). Their boldness — parrhesia in Greek, meaning free, open, uninhibited speech — is explicitly traced not to education, social status, or personal charisma but to companionship with Jesus and the filling of the Holy Spirit (Acts 4:8, 31). Then notice what they pray for when they return to the community: not for safety, not for relief from persecution, but for more boldness. Lord, grant to your servants to continue to speak your word with all boldness (Acts 4:29). Christian courage to speak truth is not a personality trait to be envied in others; it is a gift that can be explicitly prayed for and confidently expected. The Church of Acts models both: the boldness in the moment and the prayer for boldness that precedes the next moment.",
  },
  {
    title: "Lion-Like Christians — Proverbs 28:1 and Moral Courage",
    body: "The wicked flee when no one pursues, but the righteous are bold as a lion (Proverbs 28:1). The contrast is arresting: the wicked are haunted by what they have done and live in the constant anxiety of consequences catching up with them. The righteous — those living in alignment with God's purposes — are as bold as a lion because they have nothing to hide, nothing to lose, and no one's approval that they require for their security. This is moral courage: the courage to live openly with integrity, to tell the truth about hard things, to disagree with the powerful when the powerful are wrong, to hold convictions that are socially costly. In the contemporary context, lion-like courage often does not look like dramatic martyrdom. It looks like the unfashionable belief stated with quiet confidence at a dinner table; the employee who refuses to falsify a report; the pastor who preaches the whole counsel of God when half of it is unpopular; the friend who speaks the loving rebuke that no one else will offer. The lion's boldness is not aggression or combativeness — it is the settled security of someone who has no need to flee.",
  },
  {
    title: "Speaking Truth in Love as Courage — Ephesians 4:15",
    body: "Rather, speaking the truth in love, we are to grow up in every way into him who is the head, into Christ (Ephesians 4:15). Paul's phrase — speaking the truth in love — is one of the most misunderstood in the New Testament. It is most often cited as a warning against speaking hard truths harshly, as though love were a softener of truth. But the verse's context and grammar suggest that the primary point is that speaking truth at all — in a community that has learned the comfortable lie and the conflict-avoiding silence — requires courage. Love is not the dilution of truth but the motive for delivering it: the courageous speaker of truth does so not to wound but to build up, not to win an argument but to serve the person who needs to hear. This kind of courage is arguably more difficult than physical bravery: it requires the willingness to damage a relationship in service of the relationship's long-term health, to be misunderstood in service of the other's actual good. Eph 4:15 is not a passage about tone; it is a passage about the courageous commitment to truthfulness as an act of love.",
  },
  {
    title: "Bonhoeffer's Costly Courage — Discipleship, Resistance, and the Cross",
    body: "Dietrich Bonhoeffer's courage is the modern church's most studied case in moral obedience under pressure. He had a safe refuge in America in 1939 when he chose to return to Germany, writing that he would have no right to participate in the restoration of Christian life after the war unless he had shared the trials of his people. He was arrested in 1943, imprisoned in Tegel and then Flossenbürg, and executed by the Nazis on April 9, 1945 — two weeks before American forces liberated the camp. His theological account of courage begins with The Cost of Discipleship's insistence that cheap grace — grace without obedience, forgiveness without transformation — is no grace at all. Real discipleship follows the cross, and the cross is not a comfortable symbol. His Letters and Papers from Prison, written in the final months of his life, reflect on civil courage: the peculiar courage required not for spectacular acts of heroism but for the daily maintenance of what is right when the entire social environment is organized to make compliance seem normal and resistance seem eccentric. Bonhoeffer's life argues that courage is not ultimately about temperament but about a clear-eyed assessment of whom you ultimately belong to.",
  },
  {
    title: "Courage, Suffering, and the Cowardly — Revelation 21:8",
    body: "But as for the cowardly, the faithless, the detestable, as for murderers, the sexually immoral, sorcerers, idolaters, and all liars, their portion will be in the lake that burns with fire and sulfur, which is the second death (Revelation 21:8). The appearance of the cowardly at the head of this list is striking. Cowardice — the failure of nerve that leads to the denial of Christ, the recantation of testimony under pressure, the abandonment of the persecuted — is placed alongside murder, immorality, and idolatry among the sins that characterize those who will not inherit the new creation. This does not mean that ordinary fear is a damning sin; it means that the cowardice that leads to the ultimate denial — the Peter-before-the-cock-crow failure, unrepeated and unrepented — is a spiritual catastrophe. The New Testament holds these two things together: the compassion that extends to the fearful and the warning that calls them to the courage faith requires. The same God who commands Joshua to be strong and courageous also promises, to the one who conquers, everything (Revelation 21:7). Courage here is not a moral achievement but a category of faithfulness — the continued allegiance to Christ that does not finally yield, even at cost.",
  },
];

const practices = [
  {
    name: "Name Your Fears Before God",
    body: "Vague anxiety cannot be surrendered; named fears can. Take a blank page and write down the specific things you are afraid of — not “the future” but the particular outcome you dread, the specific person whose disapproval you fear, the concrete loss you are afraid to suffer. Then pray Psalm 56:3 over the list: When I am afraid, I put my trust in you. The act of naming does two things: it reduces the ambient power of unnamed fear by making it specific and manageable, and it makes prayer concrete rather than general. A fear given a name can be given to God. Repeat this practice whenever you notice a new fear accumulating in the background of your daily life. The person who has learned to name and surrender fears does not have fewer fears; she has a different relationship to the fears she has.",
  },
  {
    name: "Build Courage in the Routine",
    body: "Like Daniel, who had prayed three times a day for years before prayer became illegal (Daniel 6:10), build the habits of courage when nothing is at stake so that you have them when something is. Choose one area of your life where you have been avoiding a hard truth: a conversation you have been deferring, a conviction you have been concealing, a wrong you have been enduring in silence. Take the small step this week. Small acts of truth-telling train the muscle of courage in conditions where failure is not catastrophic — which is the training ground for conditions where it is. The person who speaks the small hard truth in a low-stakes meeting will have more capacity for the high-stakes moment than the person who has been practicing strategic silence for years.",
  },
  {
    name: "Pray for Boldness, Not Just Safety",
    body: "Follow the pattern of Acts 4:29. When the early church faced its first major external threat, the community gathered and prayed — and they did not pray for protection, ease, or the removal of opposition. They prayed: Lord, look upon their threats and grant to your servants to continue to speak your word with all boldness. Make a regular petition for boldness part of your prayer life. Specifically, bring before God the situation or relationship in which you most need the courage to speak truth, and ask for parrhesia — free, open, uninhibited speech in that precise context. The prayer for boldness is not magic; it is the alignment of the will with the Spirit's own purpose, which is always to magnify Christ and speak his truth into the world.",
  },
  {
    name: "Locate Your Fear of Man",
    body: "Identify the person or group whose approval you most fear losing. Be honest: the colleague whose opinion structures your professional choices, the social group whose acceptance shapes what you will and will not say publicly, the family member whose disapproval still exercises control over you decades after leaving home. Name the snare specifically. Then pray through Matthew 10:28: what is the actual worst this person can do to me? And what is the comparative weight of the fear of God versus the fear of this person? The goal of this practice is not to become contemptuous of others' opinions but to recalibrate: to restore God to his proper place as the primary audience for your life, whose judgment is the one that ultimately matters and whose approval is already secured in Christ.",
  },
  {
    name: "Engage a Courageous Community",
    body: "Before Esther's act of courage, she called the whole community to fast with her for three days (Esther 4:16). Christian courage is not primarily a solo achievement; it is a communal production. Tell a trusted friend or small group about the hard obedience in front of you and ask them to pray. Share the fear, not just the action plan. The early church was a community that prayed together for boldness — and the result was that the whole community was filled with the Holy Spirit and continued to speak the word of God with boldness (Acts 4:31). Find or form a community in which honest naming of fear is normal and prayer for one another's courage is practiced. The person who is known in community — whose fears are prayed for by name — is far more likely to act courageously than the person facing the same fears alone.",
  },
  {
    name: "Distinguish Calling from Adrenaline",
    body: "Not every act of risk-taking is an act of courage, and not every conflict is an opportunity for courageous witness. Before a stand that will cost you something, ask: is this faithfulness requiring suffering, or am I seeking conflict to prove something to myself? Pray for the wisdom Jesus commends in Matthew 10:16 — wise as serpents, innocent as doves — and seek counsel from someone who knows you well enough to tell you honestly which it is. The early church actually discouraged volunteering for martyrdom; courage is the willingness to suffer for faithfulness when faithfulness requires it, not the manufacture of suffering as a spirituality of intensity. The most courageous act in many seasons is the quiet, daily, undramatic maintenance of an unpopular conviction — the long obedience that requires more than a moment of adrenaline.",
  },
];

const voices = [
  {
    name: "Dietrich Bonhoeffer",
    years: "1906–1945",
    role: "German pastor, theologian, martyr; author of The Cost of Discipleship",
    body: "Bonhoeffer is the modern church’s most studied model of moral courage under the ultimate pressure. He was a gifted academic theologian who chose the resistance over the safety of a prestigious American academic post; who organized the Confessing Church against the Nazi-compliant Deutsche Christen; who joined the Abwehr conspiracy against Hitler; who was arrested, imprisoned in Tegel and then Flossenbürg, and executed two weeks before the war ended at the age of thirty-nine. His theology of courage begins with The Cost of Discipleship’s searing critique of cheap grace — grace that demands nothing and changes nothing — and develops through his Letters and Papers from Prison into a mature account of the costly freedom that belongs to the person who has settled the question of ultimate allegiance. For Bonhoeffer, courage is not the heroism of the exceptional personality but the fruit of what he calls “responsible action” — the willingness of the free person to act decisively when the moment demands it, trusting that even the uncertain step taken in obedience is covered by God’s forgiveness.",
    quote: "Civil courage can grow only out of the free responsibility of free men. It depends on a God who demands responsible action in a bold venture of faith, and who promises forgiveness and consolation to the man who becomes a sinner in that venture.",
  },
  {
    name: "Paul Washer",
    years: "1961–",
    role: "Missionary and preacher; founder of HeartCry Missionary Society",
    body: "Paul Washer's ministry has been marked by a willingness to preach things that are unfashionable in the contemporary evangelical context — particularly on the cost of discipleship, the nature of genuine conversion, and the difference between culturally accommodated Christianity and the real thing. His 2002 Youth Conference sermon became widely circulated precisely because it refused to tell its young audience what they expected to hear, and his subsequent ministry has maintained that posture. Washer's courage is not the courage of the provocateur seeking controversy but the courage of the pastor who believes that the most loving thing he can do for his hearers is tell them the truth. His reflections on courage consistently emphasize the connection between the fear of God and freedom from the fear of man: the preacher who fears God cannot ultimately be intimidated by the congregation, and the believer who has found her security in Christ is free to say what needs to be said.",
    quote: "The most dangerous thing that can happen to a preacher is when people begin to applaud him for something he said that they should have been offended by. The fear of God is what frees a man to speak the truth.",
  },
  {
    name: "John Bunyan",
    years: "1628–1688",
    role: "Tinker, Puritan pastor, prisoner; author of The Pilgrim's Progress",
    body: "Bunyan's life is itself a parable of the courage The Pilgrim's Progress depicts. A tinker by trade with almost no formal education, he became a preacher of such power that he was imprisoned for twelve years under the Conventicle Acts for preaching without a license from the Church of England. He could have secured his release at almost any point by agreeing to stop preaching; he refused each time, saying that if he were released on condition of silence, his imprisonment would begin the day he left. In The Pilgrim's Progress, the character of Valiant-for-Truth embodies the courage Bunyan valued: the pilgrim who has been attacked by three men, wounded, but who will not yield the road, saying: I covet not their lives, but yet I am not willing to deny my faith. Bunyan's courage is the ordinary man's courage — not the heroism of the specially trained or gifted but the stubbornness of simple faithfulness, maintained across years of confinement by a man who prayed, preached, and wrote his way through prison.",
    quote: "I was made to see, again and again, that God and my soul were friends by his blood; yea, I saw that the justice of God and my sinful soul could embrace and kiss each other through his blood. This was a good day to me; I hope I shall not forget it.",
  },
  {
    name: "C.S. Lewis",
    years: "1898–1963",
    role: "Oxford and Cambridge professor; author of Mere Christianity and The Screwtape Letters",
    body: "Lewis's most quoted reflection on courage comes, with characteristic irony, from the mouth of a senior demon advising a junior one. In The Screwtape Letters, Screwtape observes: Courage is not simply one of the virtues but the form of every virtue at the testing point, which means at the point of highest reality. The observation cuts deep: every other virtue — chastity, honesty, mercy, humility — is easy when it costs nothing. The moment any virtue requires sacrifice, it requires courage to maintain it. This means that cowardice is not one sin among many; it is the solvent that dissolves all the others at the critical moment. Lewis also writes with searching honesty about the difficulty of moral courage in the context of peer pressure: the gradual yielding to the expectations of the group, the slow erosion of conviction through the desire to be liked, the way that courage is required not once but day after day in the small decisions of ordinary social life.",
    quote: "Courage is not simply one of the virtues, but the form of every virtue at the testing point, which means at the point of highest reality. A chastity or honesty or mercy which yields to danger will be chaste or honest or merciful only on conditions.",
  },
  {
    name: "Os Guinness",
    years: "1941–",
    role: "Social critic and author; great-great-great-grandson of Arthur Guinness",
    body: "Os Guinness's work on courage focuses particularly on the social and cultural dimensions of the problem: what he calls the culture of accommodation — the tendency of Christians to surrender their distinctive witness in order to gain acceptance in the mainstream. His book The Call argues that the person who knows with clarity what she has been called to is the person who can maintain that calling against every pressure to abandon it. Guinness is especially incisive on intellectual courage: the willingness to hold convictions that are unfashionable in the contemporary academy or media environment, to be thought behind the times, uneducated, or morally deficient — not from stubbornness but from the settled conviction that truth is not determined by majority opinion. He draws heavily on the prophetic tradition in Scripture — the tradition of those who spoke an unwelcome word to power — and connects it to the ongoing vocation of the Christian public intellectual who refuses to let her faith become invisible in the marketplace of ideas.",
    quote: "The deepest form of courage is not the courage to die for a cause but the courage to live for one — day after day, in the ordinary texture of life, when the cause is unfashionable and the crowd is moving the other way.",
  },
  {
    name: "Martin Luther King Jr.",
    years: "1929–1968",
    role: "Baptist pastor, theologian of nonviolent resistance, civil rights leader",
    body: "Martin Luther King Jr. provides one of the most fully developed accounts of Christian courage in twentieth-century American life: a courage that is simultaneously political and spiritual, rooted in the theology of the imago Dei and expressed in nonviolent direct action. His Letter from Birmingham Jail is one of the great documents of moral courage in the Christian tradition: written in the margins of a newspaper and on scraps of toilet paper, addressed to white moderate clergymen who had asked him to wait, it argues that the church is called not to accommodate the pace of the comfortable but to act decisively when justice demands it. King's account of courage is inseparable from his theology of suffering: the willingness to absorb violence without retaliation, to be beaten without beating back, was not weakness but a form of moral force that exposed the violence of the opposition and appealed to the conscience of the nation. His courage was communal, liturgical, and explicitly theological — grounded in the conviction that the God who had delivered Israel from Egypt was the same God present in the struggle for human dignity.",
    quote: "The time is always right to do what is right. Cowardice asks the question, 'Is it safe?' Expediency asks the question, 'Is it politic?' Vanity asks the question, 'Is it popular?' But conscience asks the question, 'Is it right?'",
  },
];

const scriptures = [
  {
    ref: "Joshua 1:9",
    text: "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.",
    note: "The command is grounded in presence, not in the soldier's own resources. Courage is not a character trait to develop but a response to a promise to believe.",
  },
  {
    ref: "Proverbs 29:25",
    text: "The fear of man lays a snare, but whoever trusts in the LORD is safe.",
    note: "The diagnostic text for everyday cowardice. The snare is the fear of human judgment — and the antidote is not the cultivation of nerve but the deepening of trust in God.",
  },
  {
    ref: "Acts 4:29",
    text: "And now, Lord, look upon their threats and grant to your servants to continue to speak your word with all boldness.",
    note: "The early church's response to the first persecution: not a prayer for safety but a prayer for more boldness. Parrhesia — free, open speech — is a gift to be asked for.",
  },
  {
    ref: "Proverbs 28:1",
    text: "The wicked flee when no one pursues, but the righteous are bold as a lion.",
    note: "The bold Christian is not aggressive or combative — she simply has nothing to hide and nothing to lose. The lion's fearlessness is the fearlessness of a clear conscience before God.",
  },
  {
    ref: "Ephesians 4:15",
    text: "Rather, speaking the truth in love, we are to grow up in every way into him who is the head, into Christ.",
    note: "Truth-telling as an act of love requires more courage than silence. This verse calls the church not to soften its honesty but to use its honesty to build up rather than tear down.",
  },
  {
    ref: "Revelation 21:8",
    text: "But as for the cowardly, the faithless, the detestable, as for murderers, the sexually immoral, sorcerers, idolaters, and all liars, their portion will be in the lake that burns with fire and sulfur, which is the second death.",
    note: "The placement of the cowardly at the head of this list is arresting. The ultimate denial of Christ — the failure that does not recover — is treated with utmost seriousness. Courage is not optional for the Christian; it is among the defining marks of those who conquer.",
  },
];

const videos = [
  { videoId: "AHxhL9QWMKo", title: "Be Strong and Courageous — Joshua 1 Explained" },
  { videoId: "yAnlEPwjRVw", title: "The Fear of Man: Overcoming People-Pleasing" },
  { videoId: "PoeCdMm-IY4", title: "Peter and John Before the Sanhedrin — Acts 4" },
  { videoId: "kH6aJiMxZoA", title: "Bonhoeffer: Costly Courage and the Cost of Discipleship" },
  { videoId: "6xJJMXPNAuY", title: "Moral Courage: Speaking Truth in Love (Eph 4:15)" },
  { videoId: "ZptJHQ1yHO4", title: "The Lion and the Lamb: Courage in the Christian Life" },
];

const relatedPages = [
  { href: "/christian-faithfulness", label: "Christian Faithfulness" },
  { href: "/christian-suffering", label: "Christian Suffering" },
  { href: "/christian-perseverance", label: "Christian Perseverance" },
  { href: "/christian-fear", label: "Christian Fear" },
  { href: "/spiritual-warfare", label: "Spiritual Warfare" },
  { href: "/persecution-guide", label: "Persecution" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianCouragePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CGREntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [fearFaced, setFearFaced] = useState("");
  const [howFaced, setHowFaced] = useState("");
  const [godProvided, setGodProvided] = useState("");

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
    if (!fearFaced.trim()) return;
    const entry: CGREntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      fearFaced: fearFaced.trim(),
      howFaced: howFaced.trim(),
      godProvided: godProvided.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setFearFaced("");
    setHowFaced("");
    setGodProvided("");
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
            background: AMBER + "22",
            color: AMBER,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Character &amp; Virtue
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Be Strong and Courageous: The Courage of Faith
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Christian courage is not the absence of fear but the presence of a greater allegiance. From Joshua&rsquo;s
          commission to Peter and John before the Sanhedrin, Scripture grounds boldness not in self-confidence but in
          the nearness of God &mdash; and in the discovery that the fear of God, properly received, crowds out every
          lesser fear.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide walks through the theology of courage, the specific shape it takes in moral and physical life, the
          voices who modeled it most searingly, and the practices that train the courageous life.
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
                borderColor: tab === t.id ? AMBER : BORDER,
                background: tab === t.id ? AMBER + "22" : "transparent",
                color: tab === t.id ? AMBER : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: "0 0 0.25rem" }}>
              A Theology of Courage
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Seven movements through Scripture&rsquo;s teaching on courage &mdash; from Joshua&rsquo;s commission to the
              cowardly in Revelation 21, tracing the thread of God-grounded boldness across the whole canon.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: AMBER, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: AMBER + "11", border: `1px solid ${AMBER}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: AMBER, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Biblical courage is never self-originated. It is always the courage of the person who has heard a promise,
                believed it, and acted accordingly. The presence of God with Joshua, the filling of the Spirit at Pentecost,
                the promise that he who began a good work will complete it &mdash; these are the resources that produce
                courage in ordinary people doing difficult things. The most courageous person is not the one with the
                strongest will but the one most deeply persuaded of who is with her.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: "0 0 0.25rem" }}>
              Practices of a Courageous Life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Courage is a muscle trained by practice before it is tested by crisis. Six disciplines for building the
              boldness that begins in prayer and expresses itself in ordinary truth-telling.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: AMBER + "22",
                  color: AMBER,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: "0 0 0.25rem" }}>
              Voices of Courage
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six lives &mdash; a martyr, a tinker-preacher, a civil rights pastor, an Oxford don, a social critic, and a
              missionary &mdash; whose courage shows what it looks like to fear God more than man.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: AMBER, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${AMBER}`,
                  background: AMBER + "0E",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: "0 0 0.25rem" }}>
              Scripture on Courage
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts from Joshua, Proverbs, Acts, Ephesians, and Revelation. Memorize one; pray it over the
              specific fear that is most alive in you right now.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: AMBER, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${AMBER}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: AMBER + "11", border: `1px solid ${AMBER}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>A practice with these texts:</strong> choose one, write it on a card, and
                carry it this week. Each time you encounter the specific fear you named in your journal, read the verse
                aloud. The body&rsquo;s engagement with the words of courage &mdash; spoken, not just thought &mdash; is itself a
                small act of courage, training the whole person.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: 0 }}>
              Courage Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Log a fear you faced, how you faced it, and what God provided in the moment. Entries are saved privately in
              your browser &mdash; a record of the courage received and the provision that showed up.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="cgr-fear" style={labelStyle}>The fear I faced</label>
                <textarea
                  id="cgr-fear"
                  value={fearFaced}
                  onChange={e => setFearFaced(e.target.value)}
                  rows={2}
                  placeholder="e.g. The conversation I had been avoiding for months; speaking up when silence was easier; holding a conviction publicly that I knew would cost me something..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Name it specifically. Vague anxiety cannot be surrendered; named fears can.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="cgr-how" style={labelStyle}>How I faced it</label>
                <textarea
                  id="cgr-how"
                  value={howFaced}
                  onChange={e => setHowFaced(e.target.value)}
                  rows={2}
                  placeholder="e.g. I prayed before the meeting; I told a friend and asked them to pray; I took the step even though I was shaking; I said the true thing with a shaking voice..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Courage is not the absence of fear but the step taken in spite of it.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="cgr-provided" style={labelStyle}>What God provided in the moment</label>
                <textarea
                  id="cgr-provided"
                  value={godProvided}
                  onChange={e => setGodProvided(e.target.value)}
                  rows={2}
                  placeholder="e.g. A calm I had not manufactured; the right words at the right moment; the peace that passes understanding afterward; a door I had not expected..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>The record of God&rsquo;s provision in past courageous moments is fuel for future ones.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!fearFaced.trim()}
                style={{
                  background: fearFaced.trim() ? AMBER : BORDER,
                  color: fearFaced.trim() ? "#07070F" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: fearFaced.trim() ? "pointer" : "not-allowed",
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
                    No entries yet. Begin the record above &mdash; one faced fear at a time.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}>
                      <button
                        onClick={() => deleteEntry(entry.id)}
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
                      <div style={{ color: MUTED, fontSize: "0.78rem", marginBottom: "0.75rem" }}>{entry.date}</div>
                      <div style={{ marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: AMBER, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Fear Faced
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.fearFaced}</p>
                      </div>
                      {entry.howFaced && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: AMBER, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            How I Faced It
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.howFaced}</p>
                        </div>
                      )}
                      {entry.godProvided && (
                        <div>
                          <div style={{ color: AMBER, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            What God Provided
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.godProvided}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on Joshua&rsquo;s commission, the fear of man, the boldness of the early church, and the costly
              courage of Bonhoeffer and others who feared God more than man.
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
            &ldquo;Be strong and courageous&rdquo; is a command with a ground: <em>for the LORD your God is with you wherever you
            go.</em> The courage is a response to the presence. Begin with that &mdash; and the rest follows.
          </p>
        </div>
      </main>
    </div>
  );
}
