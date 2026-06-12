"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const PURPLE = "#6B4FBB";

const STORAGE_KEY = "vine_griefguide_entries";

interface GRFEntry {
  id: string;
  date: string;
  loss: string;
  lament: string;
  hope: string;
}

const theologySections = [
  {
    title: "Lament as Spiritual Discipline — Psalms 22 and 88",
    body: "Of the 150 Psalms, roughly one-third are psalms of lament — more than any other single category. The most devastating is Psalm 88, which never resolves. Its final word is darkness. God does not tidy it up. He does not add a turn toward hope at the end. He lets the darkness stand as the final word of a whole psalm in Scripture. This is remarkable. God embedded unresolved grief in the prayer book of Israel not as a concession to human weakness but as a gift: a model for praying honestly when honesty produces no comfort. Psalm 22 opens with the most piercing cry in Scripture — \"My God, my God, why have you forsaken me?\" — the same words Jesus cried from the cross. Lament is not the absence of faith. It is faith refusing to be silent. It is trust that has nowhere left to go except directly at God, in raw and uncurated language. The church that has lost the language of lament has lost the capacity to pray honestly in its darkest seasons — and has left its grieving members alone with their pain, unable to bring it to God in the only form it actually exists.",
  },
  {
    title: "Blessed Are Those Who Mourn — Matthew 5:4",
    body: "\"Blessed are those who mourn, for they will be comforted.\" This Beatitude does not say: blessed are those who mourn briefly, or who mourn with sufficiently cheerful theology, or who mourn while maintaining good public composure. It says: blessed are those who mourn — full stop. The Greek word is penthountes, which carries the weight of deep, visible, audible sorrow — the mourning that cannot be hidden. Jesus is not describing a spiritual attitude but a human experience. And he pronounces it blessed. This single sentence overturns the pastoral failure of a thousand well-intentioned attempts to abbreviate grief: the hurried condolences, the premature \"they are in a better place,\" the implicit message that faith should produce visible peace rather than visible sorrow. The Beatitude says: mourn. You are not out of bounds. The comfort is promised. But the comfort comes to those who actually mourn, not to those who perform peace while grief waits untouched inside them.",
  },
  {
    title: "Jesus Wept — John 11:35",
    body: "The shortest verse in Scripture is also among the most theologically dense: \"Jesus wept\" (John 11:35). Jesus is standing at the tomb of Lazarus. He knows he is about to raise him. He knows the story ends in resurrection. And he weeps anyway. The Greek word translated \"wept\" (edakrusen) is different from the word used for the wailing of Mary and the crowd; it carries a sense of quiet, controlled tears — not theatrical grief, but genuine sorrow. Before performing the miracle, the Son of God weeps with those who are weeping. He does not immediately fix the situation. He first enters it. The following verse intensifies this: when the crowd saw him weeping, they said, \"See how he loved him.\" Grief is love encountering absence. Jesus weeps because he loved Lazarus — and because the death of someone loved is genuinely sad, even if you know what comes next. This passage forever closes the door on the theology that says faith should produce emotional invulnerability to loss. If Jesus wept, grief is not a spiritual failure. It is love's honest response to death.",
  },
  {
    title: "Not as Those Who Have No Hope — 1 Thessalonians 4:13",
    body: "\"We do not want you to be uninformed, brothers and sisters, about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope.\" (1 Thessalonians 4:13). The controlling phrase is \"like the rest of mankind, who have no hope\" — not \"you do not grieve.\" This is one of the most commonly misread sentences in the New Testament. It does not say Christians should not grieve. It says the shape of Christian grief is different: grief with a horizon, grief oriented toward resurrection, grief that is real and full and honest but not the last word. The hope Paul describes is concrete — it is the bodily resurrection of the dead, grounded in the historical resurrection of Jesus: \"For we believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him\" (4:14). The two truths must be held together without collapsing into each other: this loss is devastating AND the resurrection makes a claim on this situation that death cannot answer. The gospel does not say \"don't feel it.\" It says: feel it fully, and feel it within a larger story than death.",
  },
  {
    title: "The Valley of the Shadow — Psalm 23",
    body: "\"Even though I walk through the darkest valley, I will fear no evil, for you are with me\" (Psalm 23:4). The phrase translated \"darkest valley\" is tsalmaveth in Hebrew — the valley of deep darkness, the shadow of death. David does not say he is carried around the valley, or that the valley is removed, or that it turns out not to be as dark as it looked. He says he walks through it. The promise is not the avoidance of the valley of the shadow of death but the presence of God within it. The rod and staff are not metaphors for escape but for accompaniment: a shepherd uses a rod to fight off threats and a staff to pull fallen sheep from crevices. They are present-tense, active-engagement tools. The comfort of Psalm 23 in grief is not that the valley ends quickly. It is that someone who knows the valley — someone who has been in the darkest places of human experience — walks with the grieving person every step of the way. The table set in the presence of enemies, the overflowing cup, the goodness and love that follow all the days of one's life: these are promises spoken from within the valley, not after it.",
  },
  {
    title: "Grief vs. Despair — The Crucial Distinction",
    body: "Grief and despair are not the same thing, though they can look similar from the outside. Grief is sorrow over a real loss — the correct response to something genuinely terrible. Despair is the conclusion that the loss is permanent and unredeemable, that God has failed, that the story is over. The difference is not emotional intensity (despair can be quiet and grief can be overwhelming) but theological orientation. A person can grieve with shattering intensity while still holding, however tenuously, to the thread of hope. A person can appear calm while having inwardly concluded that God has abandoned them. The psalms of lament frequently hold grief and hope in the same breath — not because the hope makes the grief manageable, but because both are genuinely true at the same time. Lamentations 3 is the pivot point of Scripture: written in the ruins of a destroyed city, it reaches its lowest point in verse 18 (\"my splendor is gone and all that I had hoped from the Lord\") and then, in verses 21-23, turns not because the ruins have been cleared but because of a remembered truth: \"Because of the Lord's great love we are not consumed, for his compassions never fail.\" The grief does not end. The hope is remembered. Both are real.",
  },
  {
    title: "Why the Church Often Silences Grief",
    body: "The Christian community has too often been a poor companion for the grieving, and it is worth being honest about why. There are several converging pressures: a theology of blessing that equates faith with visible flourishing, creating implicit pressure on grieving people to perform recovery; an uncomfortable relationship with unresolved darkness, which makes communities rush toward resolution rather than sitting with ambiguity; a misunderstanding of hope, which treats it as a feeling to be maintained rather than a promise to be held; the practical discomfort of sustained mourning, which outlasts the community's capacity for sustained attention; and the pastoral instinct to fix rather than accompany, which produces well-intentioned but harmful interventions (\"God has a plan,\" \"they're in a better place\"). The result is that grieving people in Christian communities frequently report feeling more alone than secular peers who at least do not try to theologically manage their pain. The recovery of a robust Christian theology of lament — drawn from the Psalms, from Lamentations, from Job, from the tears of Jesus — is one of the church's most urgent pastoral needs. Communities that can sit with unresolved grief without flinching are communities that look like Jesus at the tomb of Lazarus.",
  },
  {
    title: "The Book of Lamentations — A Theology of Ruins",
    body: "Lamentations is a book-length funeral dirge, written by an eyewitness to the destruction of Jerusalem in 587 BC. The city has been razed. The temple — where God dwelled — has been burned. The people have been killed or exiled. And the author (traditionally Jeremiah) does not reach for explanation. He reaches for metaphor: \"Is it nothing to you, all you who pass by? Look around and see. Is any suffering like my suffering?\" (1:12). The book is structured as a series of acrostics — each verse beginning with a successive letter of the Hebrew alphabet — as if to say: the grief is total, A to Z, nothing left out. And in the dead center of the book, at chapter 3:22-23, the most famous expression of God's faithfulness in Scripture appears: not from a mountaintop of triumph but from the rubble. The faithful declaration of God's mercy in Lamentations is surrounded by devastation on all sides. This is not accidental. The book's placement of hope within lamentation teaches the most important lesson about Christian grief: hope is not found after the ruins are cleared. It is found in the ruins. The steadfast love of the Lord is new every morning — even the morning after the worst night of your life.",
  },
  {
    title: "Job as a Grief Text — The God Who Can Take Honest Anger",
    body: "Job is the Bible's extended meditation on grief that refuses to be managed. Job has lost his children, his wealth, and his health in rapid succession. His friends arrive to comfort him, and for seven days they do the right thing: they sit with him in silence (Job 2:13). Then they begin to speak — and every word they speak makes things worse. They offer theological explanations for Job's suffering. They imply that Job must have sinned. They protect their picture of a tidy universe at the expense of Job's actual experience. Job refuses their comfort. He insists on his own integrity and brings his rage directly to God: \"I desire to speak to the Almighty and to argue my case with God\" (Job 13:3). He accuses God of hiding, of attacking him without cause, of injustice. And then comes the extraordinary divine verdict at the end of the book: God says to Eliphaz, \"I am angry with you and your two friends, because you have not spoken the truth about me, as my servant Job has\" (42:7). Job's angry, honest, unresolved protest was the right response. His friends' tidy theological management was the wrong one. The God of Job is the God who can receive the full weight of human anger, protest, and grief — and who prefers it to pious pretense.",
  },
];

const practices = [
  {
    name: "Praying the Psalms of Lament",
    body: "Choose one of the lament psalms — Psalm 22, 13, 88, or 42 — and read it slowly as your own prayer. Do not try to feel what you think you should feel. Let the psalm's words stand in for yours when yours will not come. The lament psalms give permission for the full range of grief: accusation of God, complaint, the feeling of abandonment, the desperate petition. If you read Psalm 88 and feel that its darkness is exactly where you are — with no resolution — that is a legitimate prayer. God included it in Scripture. It is allowed. If you find one verse that captures your grief precisely, write it out and return to it each day for a week. The Psalms were designed to be prayed repeatedly. They wear grooves in the soul that channel grief toward God rather than away from him.",
  },
  {
    name: "The Lament Letter",
    body: "Write a letter to God about your loss. Give yourself permission to be completely honest — angrier, more confused, more devastated than you would ever say aloud in public. Do not edit for theology or composure. Write the full weight of what you are carrying. This is not disrespectful to God; it is the practice of Job, who argued his case directly with God and was vindicated for it. When the letter is finished, do not necessarily read it again immediately. Let a few days pass, then return to it and read it as you would a letter from a friend who is suffering. What does the person in this letter need? What would you say to them? Then speak those words to yourself, as from God. The exercise does not resolve the grief, but it often moves it from the chest where it is compressed into the open where it can begin to breathe.",
  },
  {
    name: "The Grief Sabbath",
    body: "Set aside one hour each week specifically for grief — not to fix it or process it productively, but to let yourself feel it without interruption. The rest of the week, the demands of ordinary life necessarily crowd in: work, parenting, the obligations that do not pause for bereavement. The Grief Sabbath is a protected space where you do not have to hold it together. Put on music that connected you to the person or thing you lost. Look at photographs. Read their letters. Cry if crying comes. Sit in the silence if it does not. The practice is based on the Jewish tradition of shiva — the seven-day period after a death in which mourning is the only permitted activity, when the community comes to the mourner rather than the mourner being expected to function. You do not need a community to practice a version of this. You need only the discipline of the protected hour, and the permission it gives.",
  },
  {
    name: "Finding a Grief Companion",
    body: "Grief is not designed to be carried alone. The New Testament's instruction to \"weep with those who weep\" (Romans 12:15) implies that someone weeps and someone accompanies — and that the companionship is bodily, not merely notional. The practice is to identify one person — a pastor, a counselor, a trusted friend who has known loss — and tell them explicitly: \"I am grieving and I need someone to walk with me.\" Then schedule time together regularly, with grief as the explicit agenda, not merely the background. The person you choose should be comfortable with unresolved darkness — someone who will not rush you to resolution or offer explanations you did not ask for. If no such person exists in your immediate community, GriefShare groups (griefshare.org) provide a structured environment with trained facilitators and people who understand from the inside. The point is accompaniment: another human being who knows where you are and keeps showing up.",
  },
  {
    name: "Marking the Losses",
    body: "Grief without ritual tends to stay unprocessed. The Jewish tradition of kaddish (the mourner's prayer recited daily for a year after a death), the placing of stones on graves, the lighting of yahrzeit candles — these practices give grief a bodily and temporal shape. Christians benefit from similar rituals, even informal ones. On the anniversary of a death, light a candle and speak the person's name aloud. Write their name in the church's Book of Remembrance if one exists. Observe All Saints' Day with intention. Visit the grave, or the place that holds their memory. Plant something that will bloom each year. The ritual does not conjure the dead or deny the finality of death. It says: this person mattered, their absence is real, and we are not going to pretend otherwise. Grief that is ritually marked is grief that is given permission to exist — which is the first condition of its eventual integration.",
  },
  {
    name: "The Resurrection Morning Practice",
    body: "Each morning, before the day's demands arrive, take two minutes to do this: name the loss you are carrying. Do not try to minimize it. Then speak, however haltingly, the promise of 1 Thessalonians 4:14: \"We believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him.\" You are not trying to feel better. You are rehearsing a counter-reality. The resurrection of Jesus is the event on which the whole Christian hope for the dead depends. When it is spoken each morning from inside grief rather than from outside it, it gradually becomes not a platitude but a lifeline — the specific theological claim that death, though real and terrible, does not have the final word. The practice is not denial; it is the refusal of despair. There is a difference, and the difference is the resurrection.",
  },
];

const voices = [
  {
    name: "C.S. Lewis",
    years: "1898–1963",
    work: "A Grief Observed",
    body: "Lewis was the twentieth century's most formidable Christian apologist — the man who wrote Mere Christianity and The Problem of Pain, arguing with intellectual precision for the reasonableness of faith and the coherence of God's goodness. Then his wife Joy died of cancer, and he wrote A Grief Observed in his personal notebooks in the immediate weeks after her death. It is among the most honest documents in the Christian tradition: raw, confused, and initially furious at God. He describes God, in the first pages, as a cosmic sadist who slams the door in your face. The book does not resolve neatly; it is not an apology for God but an account of a mind and heart trying to hold onto faith while the ground dissolves. It has comforted more doubters and grievers than Mere Christianity ever persuaded — because it shows that the man who wrote the logical defense of God's goodness also wept on the floor of his grief and accused God of absence. Both things are true. Both things are in the Christian life.",
    quote: "No one ever told me that grief felt so like fear. I am not afraid, but the sensation is like being afraid. The same fluttering in the stomach, the same restlessness, the yawning. I keep on swallowing.",
  },
  {
    name: "Jerry Sittser",
    years: "b. 1951",
    work: "A Grace Disguised",
    body: "In 1991, Jerry Sittser was in a car struck by a drunk driver. In the accident, he lost his mother, his wife, and his four-year-old daughter in a single moment. He was left alone with three surviving children. A Grace Disguised is what he wrote in the years that followed — not a book about how to recover from grief but about how to be enlarged by it. Sittser describes receiving a dream months after the accident in which he chased the setting sun to retrieve the light, and could not. A friend interpreted the dream: instead of chasing the setting sun, turn and run toward the darkness. Only there would he find the sunrise. The image has become one of the most widely used pastoral resources for grief in the Christian world. Sittser argues that catastrophic loss can produce a widening of the soul — not because the grief is good, but because souls that have been broken open by loss carry more capacity for compassion, depth, and genuine presence than souls that have never been entered by darkness. The loss does not shrink. But the soul can grow to contain it.",
    quote: "The quickest way for anyone to reach the sun and the light of day is not to run west, chasing after the setting sun, but to head east, plunging into the darkness until one comes to the sunrise.",
  },
  {
    name: "Nicholas Wolterstorff",
    years: "b. 1932",
    work: "Lament for a Son",
    body: "Wolterstorff is one of the most rigorous and respected Christian philosophers of the twentieth century — a Yale and then Calvin University professor who has written definitive works on epistemology, metaphysics, and the philosophy of religion. In 1983, his twenty-five-year-old son Eric died in a mountain climbing accident in Austria. Lament for a Son is what Wolterstorff wrote in the year following Eric's death: a book of fragments, reflections, theological wrestling, and undisguised sorrow. It does not offer a theodicy. It does not explain why God allowed Eric to die. It insists on the full weight of the loss and refuses the comforts that minimize it. One of its most quoted passages is Wolterstorff's meditation on seeing God — not the theological vision of the divine but the face of a God who, because Jesus suffered and died, understands. \"God is not only the God of the sufferers but the God who suffers.\" The book is a demonstration that the most serious intellectual Christian engagement with the world does not immunize against devastating grief — and that the grief, wrestled with honestly, produces theology with a different texture than grief avoided.",
    quote: "I shall look at the world through tears. Perhaps I shall see things that dry-eyed I could not see.",
  },
  {
    name: "Walter Brueggemann",
    years: "b. 1933",
    work: "The Psalms and the Life of Faith",
    body: "Brueggemann is arguably the most influential Old Testament scholar of the late twentieth and early twenty-first centuries. His work on the Psalms — particularly his typology of psalms of orientation, disorientation, and new orientation — gave the Christian world a framework for understanding lament not as spiritual failure but as the middle movement of a journey toward deeper faith. Brueggemann argues that the move from orientation (life is good, God is present, the world makes sense) to disorientation (suffering, loss, the collapse of the old world) is the necessary precondition for the new orientation that is not a return to naivety but a more seasoned, grief-formed trust. He insists that the church does itself and its people profound harm by rushing past the disorientation stage — by refusing to let the psalms of lament be prayed honestly, by insisting on resolution before the darkness has been honestly inhabited. His work reclaimed the language of lament for evangelical and mainline Christianity alike and gave pastors theological permission to let grief be grief without immediately pointing to the sunrise.",
    quote: "The psalms of lament... are acts of bold faith, albeit a transformed faith, because they insist that all is not right and they address the God who is not absent but rather who participates in the darkness.",
  },
  {
    name: "Elisabeth Elliot",
    years: "1926–2015",
    work: "A Path Through Suffering",
    body: "Elisabeth Elliot lost her first husband Jim to the spears of the Waorani people of Ecuador in 1956, when he and four colleagues were killed on a river sandbar. She was twenty-nine. She then returned to live among the people who had killed her husband, and several of the men responsible came to faith. Her second husband died of cancer. Her third developed Alzheimer's. Elliot's life was a sustained acquaintance with loss — and her writing on suffering and grief has a specificity and weight that comes only from someone who has lived there. She is not sentimental about pain and does not offer cheap comfort. She insists that the one thing the grieving person needs is not explanation but trust: not understanding why but choosing, in the absence of understanding, to give the loss to God. Her framework is less psychological than it is liturgical: the daily discipline of surrender, the relinquishment of the need to understand, the radical trust that the God who gave and took away has not abandoned the one who is left.",
    quote: "The secret is Christ in me, not me in a different set of circumstances.",
  },
  {
    name: "Gerald Sittser",
    years: "b. 1951",
    work: "A Grace Disguised",
    body: "Gerald (Jerry) Sittser's A Grace Disguised has become one of the most widely read Christian books on grief in the last three decades — recommended by pastors, grief counselors, and bereaved people alike. What distinguishes it from other grief literature is its refusal of the recovery narrative: Sittser does not argue that you will eventually get over the loss. He argues that catastrophic loss can produce a different kind of person than you were before — not healed, exactly, but enlarged. The soul that has been entered by darkness can carry more. This is not triumphalism; Sittser is scrupulously honest about the ongoing weight of his losses. But he testifies that the darkness, entered and inhabited rather than avoided, eventually becomes the place where a different and deeper life becomes possible. The book's pastoral usefulness comes partly from its refusal to offer a timeline or a formula and partly from the sheer density of lived experience behind every sentence.",
    quote: "Loss itself does not ultimately determine one's spiritual destiny. What one does with the loss does. Whatever their background, those who are willing to face darkness may discover that the sunrise is not behind them but ahead.",
  },
];

const scriptures = [
  {
    ref: "Psalm 22:1",
    text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish?",
    note: "The opening cry of the most fully developed lament in the Psalter — and the words Jesus prayed from the cross. Desolation as prayer is not outside the bounds of faith. It is its most anguished form.",
  },
  {
    ref: "Matthew 5:4",
    text: "Blessed are those who mourn, for they will be comforted.",
    note: "Not \"blessed are those who mourn briefly\" or \"who mourn with composure.\" Blessed are those who mourn. The comfort is promised to the actual mourners, not to those who perform recovery.",
  },
  {
    ref: "John 11:35",
    text: "Jesus wept.",
    note: "Standing at the tomb of Lazarus, knowing he was about to raise him, the Son of God wept anyway. Grief is not a spiritual failure. If it were, Jesus would not have wept.",
  },
  {
    ref: "1 Thessalonians 4:13",
    text: "We do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope.",
    note: "The controlling phrase is \"like the rest of mankind, who have no hope\" — not \"you do not grieve.\" Christian grief is grief with a resurrection horizon, not the absence of grief.",
  },
  {
    ref: "Psalm 23:4",
    text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
    note: "The promise is not that the valley is removed but that God walks through it with you. The rod and staff are tools of active accompaniment, not metaphors for escape.",
  },
  {
    ref: "Lamentations 3:22-23",
    text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
    note: "Written in the rubble of a destroyed city — not from a mountaintop of triumph. The most celebrated declaration of God's faithfulness in Scripture arises from inside, not after, devastation.",
  },
];

const videos = [
  { videoId: "DMiEwEfPCaE", title: "Walking Through Grief with Christian Hope" },
  { videoId: "2jzRTFY5rIs", title: "The God Who Weeps: A Theology of Lament" },
  { videoId: "lAWkVEW5V0k", title: "C.S. Lewis on Grief: A Grief Observed" },
  { videoId: "u5f0moBjhSI", title: "Jerry Sittser: Grace in the Darkness of Loss" },
  { videoId: "KLLP0JRFKXM", title: "Psalms of Lament: Praying Honestly in Grief" },
  { videoId: "q9gNGVxT29g", title: "Blessed Are Those Who Mourn — Matthew 5:4" },
];

const relatedPages = [
  { href: "/christian-suffering", label: "Christian Suffering" },
  { href: "/christian-hope", label: "Christian Hope" },
  { href: "/lament", label: "Lament" },
  { href: "/resurrection", label: "Resurrection" },
  { href: "/psalms-guide", label: "Guide to the Psalms" },
  { href: "/christian-perseverance", label: "Christian Perseverance" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianGriefGuidePage() {
  const [tab, setTab] = useState("theology");

  const [entries, setEntries] = useState<GRFEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [loss, setLoss] = useState("");
  const [lament, setLament] = useState("");
  const [hope, setHope] = useState("");

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
    if (!loss.trim()) return;
    const entry: GRFEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      loss: loss.trim(),
      lament: lament.trim(),
      hope: hope.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setLoss("");
    setLament("");
    setHope("");
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
            background: PURPLE + "22",
            color: PURPLE,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Walking Through Loss
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Blessed Are Those Who Mourn: A Christian Grief Guide
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Grief is not the opposite of faith. It is the cry of faith in the dark. Jesus wept. The Psalter is one-third
          lament. The cross is God&rsquo;s entry into human suffering. The church that knows how to grieve has something
          the world desperately needs.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores lament as a spiritual discipline, the theology of mourning with hope, the voices of those
          who have grieved honestly and emerged with faith intact, and the practices that hold a soul in the valley of
          the shadow of death.
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
                borderColor: tab === t.id ? PURPLE : BORDER,
                background: tab === t.id ? PURPLE + "22" : "transparent",
                color: tab === t.id ? PURPLE : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.25rem" }}>
              A Theology of Grief
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture&rsquo;s teaching on mourning &mdash; from the psalms of lament and the
              Beatitudes to Job&rsquo;s angry protest and the resurrection hope.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: PURPLE + "11", border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Grief That Transforms
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology points toward the same conviction: grief honestly inhabited is not a
                detour from the Christian life but one of its most formative passages. The God who wept at the tomb of
                Lazarus, who cried &ldquo;My God, my God, why have you forsaken me?&rdquo; from the cross, who embedded
                unresolved lament in the center of the prayer book of Israel &mdash; this God is not asking his people
                to suppress their sorrow. He is asking them to bring it to him, raw and unedited, and to find that he
                was already there in the darkness, waiting.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.25rem" }}>
              Practices for the Grieving
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Grief requires both the freedom to feel and the structure to survive. These six practices give grief a
              shape without forcing it to resolve.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: PURPLE + "22",
                  color: PURPLE,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.25rem" }}>
              Voices of Grief
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six writers and thinkers who have grieved deeply and written about it with honesty, theological depth,
              and hard-won wisdom.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.work}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${PURPLE}`,
                  background: PURPLE + "0E",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: "0 0 0.25rem" }}>
              Scripture for the Grieving
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts for grief &mdash; from raw lament to resurrection hope. Read slowly, pray honestly,
              return often.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${PURPLE}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: PURPLE + "11", border: `1px solid ${PURPLE}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>A practice for grief:</strong> read one of these passages aloud each
                morning this week. Do not try to feel what you think you should feel. Let the words be a prayer even
                when prayer feels impossible. The Psalms were designed to speak when we cannot.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: 0 }}>
              Grief Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name your loss. Write your lament &mdash; raw and honest, without editing for theology or composure.
              Then hold whatever flicker of hope you can find, even if it is only a thread. Entries are saved privately
              in your browser.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="grf-loss" style={labelStyle}>What I am grieving</label>
                <textarea
                  id="grf-loss"
                  value={loss}
                  onChange={e => setLoss(e.target.value)}
                  rows={2}
                  placeholder="Name the loss as specifically as you can. The person, the relationship, the future, the health, the dream..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Unnamed grief is harder to carry. Give it a name.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="grf-lament" style={labelStyle}>My lament &mdash; raw and honest</label>
                <textarea
                  id="grf-lament"
                  value={lament}
                  onChange={e => setLament(e.target.value)}
                  rows={4}
                  placeholder="Write the full weight of what you are feeling. God can receive it. Job did this. The psalmists did this. You are allowed to..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Do not edit for composure. Lament is prayer, not performance.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="grf-hope" style={labelStyle}>A flicker of hope I am holding</label>
                <textarea
                  id="grf-hope"
                  value={hope}
                  onChange={e => setHope(e.target.value)}
                  rows={2}
                  placeholder="Even if it is only a thread: a promise, a memory, a whisper that the darkness is not final..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>You do not have to feel the hope to hold it. Write what you are clinging to.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!loss.trim()}
                style={{
                  background: loss.trim() ? PURPLE : BORDER,
                  color: loss.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: loss.trim() ? "pointer" : "not-allowed",
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
                    No entries yet. Your grief has permission to be named here &mdash; one honest word at a time.
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
                      <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{entry.date}</div>
                      <div style={{ marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: PURPLE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Loss
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.loss}</p>
                      </div>
                      {entry.lament && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: PURPLE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Lament
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.lament}</p>
                        </div>
                      )}
                      {entry.hope && (
                        <div>
                          <div style={{ color: PURPLE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Hope
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.hope}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: PURPLE, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on lament, grief, and hope from pastors, scholars, and those who have walked through loss and
              found God faithful in the darkness.
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
            &ldquo;Blessed are those who mourn, for they will be comforted.&rdquo; The comfort is promised &mdash; not
            that the loss will be undone, but that the One who wept at Lazarus&rsquo;s tomb will not leave you alone in
            yours. Mourn honestly. The sunrise is not behind you. It is ahead.
          </p>
        </div>
      </main>
    </div>
  );
}
