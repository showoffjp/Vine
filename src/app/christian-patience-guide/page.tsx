"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["A Fruit of the Spirit", "The Patience of God", "Waiting on the Lord", "Patience with Others", "Cultivating Patience", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "A Fruit of the Spirit",
    heading: "Patience as a Fruit of the Spirit",
    paragraphs: [
      "When Paul lists the fruit of the Spirit in Galatians 5:22-23 &mdash; &ldquo;love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control&rdquo; &mdash; he places patience at the very heart of the catalog. The Greek word he uses is <em>makrothumia</em>, a compound of <em>makros</em> (long) and <em>thumos</em> (temper or passion). It means, quite literally, to be long-tempered: to have a long fuse, to take a long time to boil over, to bear with provocation and delay without flaring into anger or despair. The older English translations rendered it &ldquo;longsuffering,&rdquo; a word that captures something the modern &ldquo;patience&rdquo; can lose &mdash; that this is not merely the ability to wait quietly but the capacity to endure under pressure, to suffer long without being broken or embittered by the suffering.",
      "The decisive theological point is hidden in the word &ldquo;fruit.&rdquo; Patience is not listed among the works of the flesh that Paul condemns, nor among the disciplines a person summons by willpower. It is fruit &mdash; the organic produce of a living thing rooted in good soil. A branch does not strain to produce grapes; it produces them because it is joined to the vine and the life of the vine flows through it. So patience, in the Christian account, is not fundamentally a personality trait that some people are born with and others lack. It is a character that the Holy Spirit grows in a person over time. This is enormously freeing for the naturally impatient, and humbling for the naturally placid: the patience that pleases God is not temperament but the supernatural product of a life surrendered to the Spirit.",
      "This is why patience appears again, prominently, in Paul&rsquo;s great hymn to love. &ldquo;Love is patient, love is kind&rdquo; (1 Corinthians 13:4) &mdash; and the word translated &ldquo;is patient&rdquo; is the verb form of the very same <em>makrothumia</em>. Patience is the first thing Paul says about love, before he says anything else. This is no accident. To love a real person &mdash; with their failures, their slowness, their repeated stumbling over the same faults &mdash; is to bear with them over the long haul. Impatience, conversely, is a failure of love: it treats other people as obstacles to my schedule rather than as souls God is patiently forming. Where there is no patience, the claim to love is hollow.",
      "Patience is profoundly countercultural in an age engineered for instant gratification. The modern economy is built on the elimination of waiting: same-day delivery, streaming on demand, instant messaging, results in seconds. The unspoken catechism of the digital age teaches that any delay is a defect, any waiting a failure of the system, any frustration a problem to be solved by speed. Into this world the gospel speaks a strange and bracing word: that some of the most important things cannot be rushed, that character is grown slowly, that God himself works on a timescale that dwarfs our impatience, and that the person who cannot wait has not yet learned to live.",
      "It is worth noting how often Scripture pairs patience with the deepest realities of the faith. Patience is named alongside endurance and steadfastness as the mark of those who hold fast under trial. It is the quality the farmer must have, waiting through the long months between sowing and harvest. It is the quality of the saints in Revelation who keep the commandments of God under persecution. In every case, patience is bound up with trust &mdash; the conviction that the outcome rests in God&rsquo;s hands and on God&rsquo;s timetable, and that faithfulness in the waiting matters more than the speed of the resolution.",
      "Because patience is fruit and not willpower, the path to greater patience is not primarily gritting one&rsquo;s teeth and trying harder. It is abiding &mdash; staying close to the source of life. The impatient Christian who simply resolves to be more patient will usually find the resolve crumbling at the next provocation. But the Christian who walks in step with the Spirit, who returns daily to prayer and dependence, who lets the slowness of God&rsquo;s own work reframe the urgency of their own desires, finds that patience begins to grow almost without their noticing &mdash; the quiet ripening of fruit on a branch that has learned to stay attached to the vine.",
      "Finally, the fruit of patience is meant to be visible. It is not a private serenity but a public witness. A person who can wait without anxiety, who can be wronged without retaliating, who can endure delay without grumbling, who can bear with difficult people without bitterness &mdash; such a person testifies, by the very shape of their life, to a hope that does not depend on circumstances going their way. In a frantic and reactive world, patience is one of the clearest signs that the Spirit of God is at work in a human life.",
    ],
  },
  {
    id: "The Patience of God",
    heading: "The Patience of God: The Foundation of Our Own",
    paragraphs: [
      "Christian patience does not begin with a command; it begins with a revelation about the character of God. At the center of the Old Testament&rsquo;s self-disclosure of God stands a formula repeated again and again &mdash; first spoken to Moses on Sinai: &ldquo;The Lord, the Lord, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness&rdquo; (Exodus 34:6). &ldquo;Slow to anger&rdquo; is the Hebrew way of saying long-tempered &mdash; the very quality Paul names as <em>makrothumia</em>. Before patience is ever asked of us, it is declared of God. He is, by his own account, a God who takes a long time to anger, who bears with a wayward people across generations, whose love outlasts their failures.",
      "This divine patience has a purpose, and the purpose is mercy. The patience of God is the space he opens for repentance. Peter makes this explicit when he addresses those who mock the apparent delay of Christ&rsquo;s return: &ldquo;The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance&rdquo; (2 Peter 3:9). What looks like delay is in fact mercy. Every day that judgment is withheld is a day of grace, a day in which the door of repentance remains open. The patience of God is not indifference or weakness; it is the restraint of a holy God who would rather see sinners turn and live.",
      "Paul presses the same truth on the conscience in Romans 2:4: &ldquo;Do you presume on the riches of his kindness and forbearance and patience, not knowing that God&rsquo;s kindness is meant to lead you to repentance?&rdquo; Here Paul exposes a fatal misreading of divine patience. Some treat God&rsquo;s slowness to judge as evidence that judgment will never come, or as license to continue in sin. But the patience of God is not permission; it is invitation. Its whole design is to lead the sinner, gently and persistently, toward a change of heart. To presume upon it &mdash; to treat the open door as proof that no door will ever close &mdash; is to despise the very kindness that is trying to save you.",
      "The long story of Scripture is, from one angle, the story of God&rsquo;s astonishing patience with a people who repeatedly fail him. He bears with Israel through the golden calf, through the wilderness grumbling, through the cycles of the judges, through the rebellion of kings, through centuries of prophets calling a deaf people back. Nehemiah&rsquo;s great prayer marvels at it: &ldquo;Many years you bore with them&rdquo; (Nehemiah 9:30). The cross itself is the supreme exhibition of this patience &mdash; God absorbing in his own Son the full provocation of human sin rather than sweeping the sinner away. Where human patience runs out, the patience of God goes the whole distance to Calvary.",
      "This is the foundation that makes Christian patience possible and gives it its particular shape. Our patience is meant to be a reflection &mdash; an echo in the creature of what is original in the Creator. Because God has been long-tempered with us, we are summoned to be long-tempered with others. The parable of the unforgiving servant (Matthew 18:21-35) turns precisely on this logic: the servant who has been forgiven an unpayable debt and then refuses to bear with a fellow servant&rsquo;s small one is condemned, not for a failure of feeling, but for failing to extend the very patience he himself had received. To have received the patience of God and then to be impatient with others is a grotesque contradiction.",
      "There is also a deep comfort here for the impatient soul. The same God who is slow to anger with the world is slow to anger with you. He does not give up on his people at the first failure, nor the hundredth. He is patient with our slow growth, our repeated stumbling, our halting progress in holiness. The Christian who fears that God has finally grown tired of them has forgotten the most fundamental thing Scripture says about him: that he is, in his very essence, longsuffering, abounding in steadfast love. We learn patience, in part, by resting in the patience God shows us.",
      "To contemplate the patience of God is therefore the surest cure for our own impatience. When I am tempted to write someone off, to demand an instant resolution, to flare into anger at delay, the remedy is to remember how God has dealt with me &mdash; how many years he has borne with me, how often he has met my failures with renewed mercy, how he waits even now for the slow ripening of his work in my life. The patience we are asked to show is never more than a small reflection of the patience we have already received in overflowing measure.",
    ],
  },
  {
    id: "Waiting on the Lord",
    heading: "Waiting on the Lord: The Discipline of Trusting God's Timing",
    paragraphs: [
      "Waiting on the Lord is one of the great recurring themes of Scripture, and it is far richer than passive endurance. To wait on the Lord, in the biblical vocabulary, is an active posture of trust &mdash; a leaning into God in expectation, a refusal to take matters into one&rsquo;s own hands, a confidence that the God who has promised will act in his own time. The classic text is Isaiah 40:31: &ldquo;They who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.&rdquo; Strikingly, the renewal of strength is promised not to those who strive hardest but to those who wait. Waiting, in God&rsquo;s economy, is not the loss of strength but its replenishment.",
      "The Psalms are saturated with the language of waiting, and they show us that waiting is rarely easy or serene. &ldquo;I wait for the Lord, my soul waits, and in his word I hope; my soul waits for the Lord more than watchmen for the morning, more than watchmen for the morning&rdquo; (Psalm 130:5-6). The doubled phrase &mdash; more than watchmen for the morning &mdash; captures the ache of it: the night-watchman scanning the eastern sky, longing for a dawn that seems to delay. Elsewhere the waiting becomes a cry of distress: &ldquo;How long, O Lord? Will you forget me forever?&rdquo; (Psalm 13:1). The Bible does not pretend that waiting is comfortable. It honors the agony of it even as it summons the faith that endures it.",
      "Waiting is hard precisely because it confronts us with the gap between God&rsquo;s timing and our own. We want resolution now &mdash; the healing, the answer, the open door, the change of circumstances. God, who sees the whole, often works slowly, ripening his purposes over months and years and sometimes lifetimes. To wait on the Lord is to surrender the demand that he conform to our schedule, and to trust that his timing, however inscrutable, is wiser and better than the speed we crave. It is one of the deepest forms of humility: the admission that we are not in control of the unfolding of our own lives.",
      "Abraham is the great biblical model of this discipline. Promised a son through whom his descendants would outnumber the stars, he waited decades &mdash; from the first call in his seventies until the birth of Isaac when he was a hundred years old. The waiting was not flawless; the episode with Hagar shows Abraham and Sarah trying to force God&rsquo;s promise on their own timetable, with painful consequences that echo to this day. Yet Scripture remembers him as the one who, against hope, believed in hope &mdash; who &ldquo;did not waver through unbelief regarding the promise of God&rdquo; but grew strong in faith as he waited (Romans 4:18-21). His long waiting became the very crucible in which his faith was forged.",
      "Joseph waited in a pit, then in slavery, then in a forgotten prison cell, for years, before the dream God had given him as a boy came to pass. David, anointed king as a youth, waited through years of exile and pursuit before the throne was actually his. Simeon and Anna waited in the temple, decades of faithful expectation, for the consolation of Israel &mdash; and lived to hold the infant Christ. Again and again the pattern holds: God gives a promise, and then a long season of waiting, and the waiting itself is part of the work God is doing. The delay is not the absence of God&rsquo;s action; it is one of its chief instruments.",
      "There is a crucial distinction between waiting and mere passivity. To wait on the Lord is not to do nothing; it is to do the next faithful thing while trusting God for the outcome we cannot control. The farmer waits for the harvest, but he also plows and sows and tends. The waiting Christian prays, obeys, keeps the lamp trimmed, remains at their post &mdash; all while refusing to seize by force what only God can give. Biblical waiting is full of activity directed by trust; what it renounces is the anxious manipulation that tries to wrest control of timing away from God.",
      "And there is a final horizon to all our waiting: the great waiting of the whole church for the return of Christ. James draws the picture exactly: &ldquo;Be patient, therefore, brothers, until the coming of the Lord. See how the farmer waits for the precious fruit of the earth, being patient about it, until it receives the early and the late rains&rdquo; (James 5:7-8). The Christian life is lived in an in-between time, between the first coming and the second, and the whole of it is a kind of waiting &mdash; waiting for the day when faith becomes sight, when every promise is fulfilled, when the long night ends in an everlasting morning. To learn to wait well on the small things is training for the great waiting that defines our hope.",
    ],
  },
  {
    id: "Patience with Others",
    heading: "Patience with Others: Bearing With One Another in Love",
    paragraphs: [
      "Some of the hardest patience to practice is not patience with circumstances but patience with people. Paul names this directly in Ephesians 4:2, where he describes the conduct worthy of the Christian calling: &ldquo;with all humility and gentleness, with patience, bearing with one another in love.&rdquo; That phrase &mdash; <em>bearing with one another</em> &mdash; assumes something the modern ear resists: that the people around us, including the people we love most, will be difficult, will fail us, will need to be borne with. Christian community is not a gathering of the easy-to-love; it is a body of forgiven sinners learning to bear with one another&rsquo;s rough edges under the patient gaze of God.",
      "The command extends even to the most trying members of the community. &ldquo;And we urge you, brothers, admonish the idle, encourage the fainthearted, help the weak, be patient with them all&rdquo; (1 Thessalonians 5:14). Note the sweep of that final phrase: <em>be patient with them all</em> &mdash; the idle who exasperate, the fainthearted who need constant reassurance, the weak who lean heavily on the strong. There is no category of person exempted from our patience. The body of Christ is held together not by everyone being easy but by everyone being patiently borne with, the strong bearing the failings of the weak as Christ bore ours.",
      "Nowhere is this tested more than in the home. Marriage is a school of patience &mdash; two flawed people bound together closely enough to see every fault, to be wounded by every selfishness, to grind against every incompatibility, day after day, year after year. Parenting is patience stretched to its limits &mdash; the endless repetition, the slow growth, the same lessons taught a hundred times. Family life exposes our impatience as nothing else can, because here we cannot hide it behind public manners; here the long fuse must burn long indeed. To love a spouse, a child, a sibling, a parent over a lifetime is to extend patience across decades of failure on both sides.",
      "The church likewise demands a patience that strangers never require of us. We are joined to people we did not choose, across differences of temperament, background, and conviction, and called to bear with them as family. The friend who is slow to grow, the brother whose besetting sin keeps resurfacing, the sister whose wounds make her difficult &mdash; these are not problems to be eliminated but people to be patiently loved. Forgiveness is patience&rsquo;s close companion here: to forgive is to bear the cost of another&rsquo;s failure rather than demanding immediate repayment, and to keep on forgiving &ldquo;seventy times seven&rdquo; (Matthew 18:22) is patience extended without limit.",
      "Impatience with people, examined closely, almost always reveals something ugly in the impatient heart. It exposes pride &mdash; the assumption that my time, my preferences, my pace are more important than yours. It exposes a lack of love &mdash; the treating of a person as an obstacle rather than a soul. It exposes a forgetfulness of grace &mdash; the demand that others meet a standard of promptness and competence that I myself have never met before God. When I snap at the slow, the failing, the struggling, I am usually announcing that I have forgotten how patiently I am being borne with by God and by everyone around me.",
      "Patience with others also requires a kind of imaginative sympathy &mdash; a willingness to remember that the person testing my patience is fighting battles I cannot see. The driver who cut me off, the colleague who dropped the ball, the family member who is short with me &mdash; each carries a hidden weight. Patience refuses to assume the worst; it leaves room for the unseen struggle, the bad day, the long story I do not know. This is part of what Paul means when he binds patience to humility and gentleness: the patient person does not stand in judgment over others but bears with them as one who knows their own need of the same mercy.",
      "In the end, patience with others is one of the most concrete and credible forms of love. Anyone can love the easy and the agreeable; the test of love is whether it endures the difficult. A community marked by mutual patience &mdash; where people bear with one another&rsquo;s faults, forgive repeatedly, refuse to write each other off, and give one another room to grow slowly &mdash; is a living advertisement for the gospel. It shows the watching world a kind of belonging it cannot find elsewhere: a love long enough, patient enough, to hold real and flawed people together over a lifetime.",
    ],
  },
  {
    id: "Cultivating Patience",
    heading: "How Patience Is Cultivated",
    paragraphs: [
      "If patience is fruit grown by the Spirit rather than mustered by willpower, the natural question is how it grows &mdash; and Scripture is surprisingly direct about the answer. Patience grows through trials. &ldquo;We rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope&rdquo; (Romans 5:3-4). James says the same: &ldquo;The testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing&rdquo; (James 1:3-4). Patience is not learned in comfort. It is forged in the very situations that try us &mdash; the delays, the frustrations, the sufferings we would never choose but through which God grows in us the capacity to endure.",
      "This reframes our trials profoundly. The frustrating wait, the prolonged difficulty, the situation that will not resolve on our timetable &mdash; these are not interruptions to the Christian life but instruments of it. God does not waste our waiting. The very circumstance that exhausts our patience is the gymnasium in which a deeper patience is being trained. To understand this is to be able, with Paul and James, even to rejoice in trials &mdash; not because the suffering is pleasant, but because we trust that God is using it to grow something in us that ease never could.",
      "Patience also grows through the deliberate practice of waiting without complaint. The grumbling of Israel in the wilderness stands as a perpetual warning: given the chance to wait on God, they instead complained at every delay, and their impatience became sin. Patience is strengthened, by contrast, in the small daily disciplines of accepting delay quietly &mdash; the traffic, the line, the slow process, the interruption &mdash; without the reflexive grumble. Each small surrender of the right to be irritated is a repetition that, over time, trains the soul. We become patient in great things partly by practicing patience in countless small ones.",
      "Prayer and dependence on the Spirit are essential, because patience is finally his fruit and not our achievement. The Christian who simply resolves to be more patient, relying on raw willpower, will be undone at the next provocation. But the Christian who asks the Spirit daily for patience, who confesses impatience as sin rather than excusing it as temperament, who returns again and again to dependence rather than self-reliance, opens their life to the slow work of God. We cannot manufacture the fruit; we can only abide in the vine and ask the Gardener to grow it.",
      "Meditation on God&rsquo;s patience with us is perhaps the most powerful cultivator of all. When the heart is full of fresh wonder at how long God has borne with us, how patiently he meets our repeated failures, how he has not given up on our slow growth, impatience with others and with circumstances begins to seem absurd. The forgiven debtor who remembers his own forgiven debt cannot easily seize his fellow servant by the throat. To keep the patience of God vivid before the mind &mdash; through Scripture, through the Lord&rsquo;s Supper, through reflection on our own story &mdash; is to keep the soil watered in which our patience grows.",
      "Patience is also cultivated by the long obedience of the Christian life itself &mdash; what one writer called &ldquo;a long obedience in the same direction.&rdquo; The disciplines of faith are slow by nature: prayer that is not answered on demand, sanctification that proceeds by inches, spiritual maturity that is the work of decades. Simply persevering in the ordinary rhythms of discipleship &mdash; showing up, year after year, to worship and Scripture and service and prayer, without dramatic results &mdash; trains a person in patience more thoroughly than any single lesson. The faithful life is itself a long apprenticeship in waiting on God.",
      "And all of this cultivation is oriented toward the great end: the patience that waits for Christ. &ldquo;Be patient, therefore, brothers, until the coming of the Lord. See how the farmer waits for the precious fruit of the earth, being patient about it&rdquo; (James 5:7-8). The farmer cannot hasten the harvest; he can only do his work and wait through the seasons for the rains and the ripening. So the church does its faithful work and waits, with patience, for the day of Christ. Every small patience learned in this life is preparation for that great and final waiting &mdash; and a sign of the hope that one day the long wait will end in joy.",
    ],
  },
];

const videoItems = [
  { videoId: "JtY9j4Dq8Vw", title: "Patience as a Fruit of the Spirit" },
  { videoId: "tn3Wuve5O9k", title: "Waiting on God - A Biblical View of Patience" },
  { videoId: "Gt8b-vDIzr0", title: "How God Grows Patience in Us" },
];

export default function ChristianPatienceGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "0.78rem", color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.6rem" }}>
            Faith &amp; Patience
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Patience
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Patience through a Christian lens &mdash; patience as a fruit of the Spirit, the patience of God as the foundation of our own, waiting on the Lord and trusting his timing, bearing patiently with other people, and how patience is slowly cultivated through trials, prayer, and the long obedience of faith.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;They who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Isaiah 40:31</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(59, 130, 246, 0.12)` : "transparent",
              color: tab === t ? ACCENT : MUTED,
              cursor: "pointer", fontSize: "0.88rem", fontWeight: tab === t ? 600 : 400,
              transition: "all 0.15s ease", whiteSpace: "nowrap" as const,
            }}>
              {t}
            </button>
          ))}
        </nav>

        {/* Text tab content */}
        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p key={i} style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((video) => (
                <div key={video.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Patience Is the Fruit of a Patient God</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>The patience we are asked to show is never more than a reflection of the patience we have already received. God is slow to anger, abounding in steadfast love, bearing with us across a lifetime of failure. As we abide in him, wait on his timing, and remember how patiently we are loved, the Spirit grows in us the long-tempered, enduring, hopeful patience that bears with all things and waits for the coming of the Lord.</p>
        </div>
      </main>
    </div>
  );
}
